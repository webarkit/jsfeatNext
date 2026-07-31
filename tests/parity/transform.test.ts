/*
 *  transform.test.ts
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
import jsfeatNext from "../../src/jsfeatNext";
import { transform } from "../../src/transform/transform";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45).
 * src/transform/transform.ts vs the original jsfeat.
 *
 * Parity-audit notes captured by these tests (see the audit doc, Axis 1/2):
 *  - `transform` was NEVER included in jsfeat's distributed build or npm
 *    package; only `math.perspective_4point_transform` (matrix_t-based) made
 *    it into the bundle. The vendored oracle evaluates src/jsfeat_transform.js
 *    to restore it.
 *  - SIGNATURE DIVERGENCE: original jsfeat.transform.* functions take RAW
 *    ARRAYS (mat[0]...), while jsfeatNext's transform methods take matrix_t
 *    and read .data. Same math, different calling convention.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const tr = new transform();

function mat3x3() {
    return new jsfeatNext.matrix_t(3, 3, F32C1);
}

function expectClose(actual: ArrayLike<number>, expected: ArrayLike<number>, len: number) {
    for (let i = 0; i < len; i++) {
        expect(actual[i]).toBeCloseTo(expected[i], 5);
    }
}

describe("parity: transform vs original jsfeat", () => {
    // a realistic quad -> quad mapping (like a tracked marker in WebARKit)
    const s = [0, 0, 320, 0, 320, 240, 0, 240];
    const d = [24.5, 18.2, 300.1, 12.7, 289.4, 230.6, 31.8, 221.9];

    function forwardNext(model: ReturnType<typeof mat3x3>) {
        tr.perspective_4point_transform(
            model,
            s[0],
            s[1],
            d[0],
            d[1],
            s[2],
            s[3],
            d[2],
            d[3],
            s[4],
            s[5],
            d[4],
            d[5],
            s[6],
            s[7],
            d[6],
            d[7]
        );
    }

    it("perspective_4point_transform (vs jsfeat.transform, raw-array oracle)", () => {
        const next = mat3x3();
        forwardNext(next);
        const orig = new Float32Array(9);
        jsfeat.transform.perspective_4point_transform(
            orig,
            s[0],
            s[1],
            d[0],
            d[1],
            s[2],
            s[3],
            d[2],
            d[3],
            s[4],
            s[5],
            d[4],
            d[5],
            s[6],
            s[7],
            d[6],
            d[7]
        );
        expectClose(next.data, orig, 9);
    });

    it("perspective_4point_transform (vs jsfeat.math, matrix_t oracle from the distributed bundle)", () => {
        const next = mat3x3();
        forwardNext(next);
        const orig = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        jsfeat.math.perspective_4point_transform(
            orig,
            s[0],
            s[1],
            d[0],
            d[1],
            s[2],
            s[3],
            d[2],
            d[3],
            s[4],
            s[5],
            d[4],
            d[5],
            s[6],
            s[7],
            d[6],
            d[7]
        );
        expectClose(next.data, orig.data, 9);
    });

    it("invert_affine_transform", () => {
        const affine = [1.2, -0.3, 14.0, 0.25, 0.9, -7.5];
        const srcN = mat3x3();
        for (let i = 0; i < 6; i++) srcN.data[i] = affine[i];
        const dstN = mat3x3();
        tr.invert_affine_transform(srcN, dstN);

        const dstO = new Float32Array(9);
        jsfeat.transform.invert_affine_transform(Float32Array.from(srcN.data), dstO);

        expectClose(dstN.data, dstO, 6);
    });

    it("invert_perspective_transform", () => {
        const hN = mat3x3();
        forwardNext(hN); // forward homography, already parity-checked above
        const invN = mat3x3();
        tr.invert_perspective_transform(hN, invN);

        const invO = new Float32Array(9);
        jsfeat.transform.invert_perspective_transform(Float32Array.from(hN.data), invO);

        expectClose(invN.data, invO, 9);
    });
});
