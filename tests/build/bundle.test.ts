/*
 *  bundle.test.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { describe, it, expect } from "vitest";
import { existsSync, readFileSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { runInNewContext } from "node:vm";
import { pathToFileURL } from "node:url";
import { build } from "vite";

/**
 * Checks on the PUBLISHED bundles in dist/ (#137), not on src/: what matters to
 * a consumer is what `vite build` emitted, and the build can lose what the
 * source got right (a `@__PURE__` annotation, the UMD export mode).
 *
 * They read the last build. In CI `npm ci` runs `prepare`, which builds dist/
 * before the tests; locally, run `npm run build-ts` first after changing src/,
 * or these check a stale bundle. Without a dist/ they are skipped.
 */

const ROOT = resolve(__dirname, "..", "..");
const UMD = join(ROOT, "dist", "jsfeatNext.js");
const ESM = join(ROOT, "dist", "jsfeatNext.mjs");
const built = existsSync(UMD) && existsSync(ESM);

/** The ORB sampling table's first entries, as a minifier writes them. */
const ORB_TABLE = /8,\s*-3,\s*9,\s*5,\s*4,\s*2,\s*7,\s*-12/;
/** Strings found only in one module each: present means the module was bundled. */
const UNUSED_BY_GRAYSCALE: Record<string, RegExp> = {
    orb: ORB_TABLE,
    bfmatcher: /descriptors must be U8/,
    yape06: /yape06\.detect/,
    linalg: /svd_invert/,
    fast_corners: /fast_corners\.detect/,
    gms: /GMS|gms\.filter/,
};

/** Bundles `code` (which imports "LIB") against the published ESM, minified. */
async function bundle(code: string): Promise<string> {
    const dir = mkdtempSync(join(tmpdir(), "jsfeatnext-bundle-"));
    try {
        const entry = join(dir, "app.js");
        writeFileSync(entry, code.replaceAll("LIB", ESM.split("\\").join("/")));
        await build({
            configFile: false,
            logLevel: "silent",
            root: dir,
            build: {
                outDir: join(dir, "out"),
                minify: true,
                rollupOptions: { input: entry, output: { entryFileNames: "app.js" } },
            },
        });
        return readFileSync(join(dir, "out", "app.js"), "utf8");
    } finally {
        rmSync(dir, { recursive: true, force: true });
    }
}

describe.skipIf(!built)("published bundles (#137)", () => {
    it("UMD via require() is the namespace itself, not a module object", () => {
        const umd = createRequire(import.meta.url)(UMD);
        expect("default" in umd).toBe(false);
        expect(typeof umd.imgproc.grayscale).toBe("function");
        expect(typeof umd.matrix_t).toBe("function");
        expect(umd.U8C1_t).toBe(257);
    });

    it("UMD via <script> sets the jsfeatNext global to the namespace", () => {
        const window: Record<string, unknown> = {};
        // A browser global scope: no module, exports or define.
        runInNewContext(readFileSync(UMD, "utf8"), { self: window, globalThis: window, window });
        const ns = window.jsfeatNext as Record<string, { grayscale?: unknown }>;
        expect(ns).toBeDefined();
        expect("default" in ns).toBe(false);
        expect(typeof ns.imgproc.grayscale).toBe("function");
    });

    it("ESM exports the namespace as default and every member by name, as the same objects", async () => {
        const esm = await import(/* @vite-ignore */ pathToFileURL(ESM).href);
        const ns = esm.default;
        expect(typeof ns.imgproc.grayscale).toBe("function");
        expect(esm.imgproc).toBe(ns.imgproc);
        expect(esm.fast_corners).toBe(ns.fast_corners);
        expect(esm.matrix_t).toBe(ns.matrix_t);
        expect(esm.U8C1_t).toBe(ns.U8C1_t);
    });

    it("a named { imgproc } import bundles only what grayscale needs", async () => {
        const named = await bundle(`import { imgproc, matrix_t, U8C1_t } from "LIB";
const d = new matrix_t(4, 4, U8C1_t);
imgproc.grayscale(new Uint8Array(64), 4, 4, d);
globalThis.__out = d;
`);
        const present = Object.entries(UNUSED_BY_GRAYSCALE)
            .filter(([, re]) => re.test(named))
            .map(([k]) => k);
        expect(present).toEqual([]);

        // And the namespace path still ships the whole library, so the
        // markers above are known to be findable when a module IS bundled.
        const whole = await bundle(`import jsfeatNext from "LIB";
const d = new jsfeatNext.matrix_t(4, 4, jsfeatNext.U8C1_t);
jsfeatNext.imgproc.grayscale(new Uint8Array(64), 4, 4, d);
globalThis.__out = d;
`);
        for (const [name, re] of Object.entries(UNUSED_BY_GRAYSCALE)) {
            expect(re.test(whole), `${name} marker in the namespace bundle`).toBe(true);
        }
        expect(named.length).toBeLessThan(whole.length / 2);
    }, 60_000);
});
