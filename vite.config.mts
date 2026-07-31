import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const pkg = JSON.parse(readFileSync(new URL("package.json", import.meta.url), "utf8"));

/**
 * Legal banner prepended to both bundles (issue #112). `/*!` marks it as a
 * legal comment, so esbuild's minifier preserves it — without this the
 * published package shipped no licence notice at all.
 */
const banner = `/*!
 * jsfeatNext v${pkg.version} — https://github.com/webarkit/jsfeatNext
 *
 * SPDX-License-Identifier: LGPL-3.0-or-later
 * Copyright 2026 WebARKit. Author(s): Walter Perdan @kalwalt
 *
 * Derived from jsfeat (https://github.com/inspirit/jsfeat),
 * Copyright (c) Eugene Zatepyakin, released under the MIT License.
 *
 * This library is distributed WITHOUT ANY WARRANTY, without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for details: http://www.gnu.org/licenses/
 */`;

/**
 * Prepends {@link banner} to every emitted chunk. Done as a `generateBundle`
 * plugin rather than `output.banner` because that option is applied before
 * minification, and Rolldown's Oxc minifier drops it from the UMD bundle even
 * with legal comments enabled. `generateBundle` runs after minification, so
 * nothing downstream can strip it.
 */
function licenseBannerPlugin() {
    return {
        name: "jsfeatnext:license-banner",
        enforce: "post" as const,
        generateBundle(_options, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type === "chunk" && !file.code.startsWith("/*!")) {
                    file.code = `${banner}\n${file.code}`;
                }
            }
        },
    };
}

/**
 * Library build for jsfeatNext (replaces the webpack + babel + ts-loader chain).
 *
 * - UMD  (dist/jsfeatNext.js): global `jsfeatNext`, exposing the *default* export
 *   so browser <script> consumers keep the historical `jsfeatNext.jsfeatNext`
 *   access (the double-namespace itself is addressed separately in #41). Also
 *   CommonJS-requireable, so it stays the `main` entry.
 * - ESM  (dist/jsfeatNext.mjs): the `module` / `import` entry.
 * - Type declarations via vite-plugin-dts -> types/ (mirrors the src/ tree, so
 *   the public types entry stays types/src/index.d.ts).
 */
export default defineConfig({
    build: {
        target: "es2015",
        sourcemap: false,
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
            name: "jsfeatNext",
            formats: ["umd", "es"],
            fileName: (format) => (format === "es" ? "jsfeatNext.mjs" : "jsfeatNext.js"),
        },
        rollupOptions: {
            output: {
                // Reproduce webpack's libraryExport: "default": expose the default
                // export as the `jsfeatNext` UMD global and as module.exports.
                exports: "default",
            },
        },
    },
    plugins: [
        licenseBannerPlugin(),
        dts({
            // NB: vite-plugin-dts v5 (unplugin-dts) renamed `outDir` -> `outDirs`.
            outDirs: ["types"],
            entryRoot: ".",
            include: ["src"],
        }),
    ],
});
