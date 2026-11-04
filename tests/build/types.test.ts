/*
 *  types.test.ts
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
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import ts from "typescript";

/**
 * Checks on the PUBLISHED declarations in types/ (#263). `tests/**` is not
 * type-checked (#171), so a type a consumer relies on can only be pinned by
 * compiling a consumer here, against what `vite build` emitted.
 *
 * Like tests/build/bundle.test.ts they read the last build: in CI `npm ci` runs
 * `prepare`, which builds first; locally, run `npm run build-ts` after changing
 * src/, or these check stale declarations. Without a types/ they are skipped.
 */

const ROOT = resolve(__dirname, "..", "..");
const DECLARATIONS = join(ROOT, "types", "src", "index.d.ts");
const built = existsSync(DECLARATIONS);

/** Compiles `code` as a consumer of the package; returns its errors as text. */
function compile(code: string): string[] {
    const dir = mkdtempSync(join(tmpdir(), "jsfeatnext-types-"));
    try {
        const file = join(dir, "consumer.ts");
        writeFileSync(file, code);
        const program = ts.createProgram([file], {
            noEmit: true,
            skipLibCheck: true,
            strict: true,
            target: ts.ScriptTarget.ES2020,
            module: ts.ModuleKind.ESNext,
            moduleResolution: ts.ModuleResolutionKind.Bundler,
            types: [],
            paths: { "@webarkit/jsfeat-next": [DECLARATIONS] },
        });
        return ts
            .getPreEmitDiagnostics(program)
            .map((d) => `TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, "\n")}`);
    } finally {
        rmSync(dir, { recursive: true, force: true });
    }
}

describe.skipIf(!built)("published declarations (#263)", () => {
    it("the default export works as a type, as it did when it was a class", () => {
        const errors = compile(`import jsfeatNext from "@webarkit/jsfeat-next";
const module_as_type: jsfeatNext = jsfeatNext.imgproc;
function takes(m: jsfeatNext): jsfeatNext { return m; }
takes(module_as_type);
class Custom extends jsfeatNext {}
const custom: jsfeatNext = new Custom();
takes(custom);
`);
        expect(errors).toEqual([]);
    }, 60_000);

    // The type must mean something: if it degraded to `any`, the check above
    // would still pass. A matrix_t is a data structure, not a module.
    it("the type rejects what is not a module", () => {
        const errors = compile(`import jsfeatNext from "@webarkit/jsfeat-next";
const not_a_module: jsfeatNext = new jsfeatNext.matrix_t(1, 1, jsfeatNext.U8C1_t);
export { not_a_module };
`);
        expect(errors).toHaveLength(1);
        expect(errors[0]).toMatch(/^TS(2322|2739|2741):/);
    }, 60_000);
});
