/*
 *  edge-cases.test.ts
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
import { U8C1, F32C1, uniformImage, dstImage, keypointPool, pixelRange } from "./helpers";

/**
 * Edge- and boundary-input tests (issue #87, category B).
 *
 * Degenerate inputs are where CV code breaks: 1x1 images, single rows and
 * columns, kernels larger than the image, extreme intensities, singular
 * matrices. The rest of the suite runs on comfortable 16x16 and 96x72 inputs
 * and says nothing about any of it.
 *
 * Most of what follows asserts that an invariant established elsewhere still
 * holds at the boundary. Two blocks instead CHARACTERIZE behaviour that is
 * wrong but inherited from jsfeat — `box_blur_gray` below kernel size (#114)
 * and `invert_3x3` on a singular matrix. Those are labelled, cite their issue,
 * and are written to be replaced by a fix rather than kept.
 */

const ip = jsfeatNext.imgproc;

/** Grayscale image of `w`x`h` filled with `value`, sized however degenerate. */
const flat = (w: number, h: number, value = 128) => uniformImage(w, h, value);

/** The degenerate shapes worth exercising: point, single row, single column, tiny squares. */
const SHAPES: [number, number][] = [
    [1, 1],
    [1, 8],
    [8, 1],
    [2, 2],
    [3, 3],
    [5, 4], // odd x even
    [4, 5], // even x odd
];

describe("edge cases: degenerate image sizes", () => {
    it("gaussian_blur preserves a constant at every degenerate shape", () => {
        // The invariant the 16x16 test asserts, now at the sizes where border
        // clamping actually has to work. Holds exactly, including 1x1.
        for (const [w, h] of SHAPES) {
            for (const kernel of [3, 5, 7]) {
                const dst = dstImage(w, h);
                ip.gaussian_blur(flat(w, h, 128), dst, kernel, 0);
                const { min, max } = pixelRange(dst, w, h);
                expect(`${w}x${h} k=${kernel}: [${min},${max}]`).toBe(`${w}x${h} k=${kernel}: [128,128]`);
            }
        }
    });

    it("derivatives of a constant stay exactly zero at every degenerate shape", () => {
        for (const [w, h] of SHAPES) {
            for (const derive of [ip.sobel_derivatives, ip.scharr_derivatives]) {
                const dst = new jsfeatNext.matrix_t(w, h, jsfeatNext.S32C2_t);
                derive.call(ip, flat(w, h), dst);
                for (let i = 0; i < w * h * 2; i++) expect(dst.data[i]).toBe(0);
            }
        }
    });

    it("canny finds no edges in a constant image at every degenerate shape", () => {
        for (const [w, h] of SHAPES) {
            const dst = dstImage(w, h);
            ip.canny(flat(w, h), dst, 20, 50);
            for (let i = 0; i < w * h; i++) expect(dst.data[i]).toBe(0);
        }
    });

    it("equalize_histogram maps a constant image to a single value", () => {
        // Every pixel shares one bin, so the cumulative histogram saturates and
        // the whole image maps to 255. The value is incidental; what matters is
        // that it stays CONSTANT rather than developing structure from nothing.
        for (const [w, h] of SHAPES) {
            const dst = dstImage(w, h);
            ip.equalize_histogram(flat(w, h, 77), dst);
            const { min, max } = pixelRange(dst, w, h);
            expect(min).toBe(max);
        }
    });

    it("grayscale handles a single-pixel RGBA buffer", () => {
        const rgba = new Uint8Array([90, 90, 90, 255]);
        const dst = dstImage(1, 1);
        ip.grayscale(rgba, 1, 1, dst);
        expect(dst.data[0]).toBe(90);
    });
});

describe("edge cases: extreme intensities", () => {
    it("all-black and all-white survive a blur unchanged", () => {
        for (const level of [0, 255]) {
            const dst = dstImage(8, 8);
            ip.gaussian_blur(flat(8, 8, level), dst, 5, 0);
            const { min, max } = pixelRange(dst, 8, 8);
            expect([min, max]).toEqual([level, level]);
        }
    });

    it("derivatives of all-black and all-white are zero", () => {
        // Saturated input is the classic place for an overflow or a sign slip.
        for (const level of [0, 255]) {
            const dst = new jsfeatNext.matrix_t(8, 8, jsfeatNext.S32C2_t);
            ip.sobel_derivatives(flat(8, 8, level), dst);
            for (let i = 0; i < 8 * 8 * 2; i++) expect(dst.data[i]).toBe(0);
        }
    });
});

describe("edge cases: compute_integral_image at boundary sizes", () => {
    it("the corner equals the total and the first row/column stay zero", () => {
        for (const [w, h] of SHAPES) {
            const src = new jsfeatNext.matrix_t(w, h, U8C1);
            for (let i = 0; i < w * h; i++) src.data[i] = (i % 200) + 1;
            const sum = new Int32Array((w + 1) * (h + 1));
            ip.compute_integral_image(src, sum, null, null);

            const stride = w + 1;
            let total = 0;
            for (let i = 0; i < w * h; i++) total += src.data[i];

            expect(sum[h * stride + w]).toBe(total);
            for (let x = 0; x <= w; x++) expect(sum[x]).toBe(0);
            for (let y = 0; y <= h; y++) expect(sum[y * stride]).toBe(0);
        }
    });
});

describe("edge cases: box_blur_gray below kernel size — KNOWN BUG #114", () => {
    // A blur is an average, so a uniform image must round-trip at ANY size.
    // box_blur_gray only manages it once the image is at least as large as the
    // kernel; below that the sliding-window sums are never correctly primed and
    // the output is grossly wrong. Bit-identical in original jsfeat, so this is
    // inherited rather than a jsfeatNext regression.
    //
    // These are CHARACTERIZATION tests pinning today's broken output. When #114
    // is fixed they must fail — that is the point.

    it("is correct at every size at or above the kernel, in both dimensions", () => {
        // The real invariant, asserted across the whole region where it holds
        // rather than at one sampled point per radius.
        //
        // The reliable region is BOTH cols >= 2r+1 AND rows >= 2r+1 — not
        // `min(cols, rows)`. The two passes run along cols and then along rows,
        // and either being shorter than the window is enough to break it. Below
        // the region the result is erratic rather than uniformly wrong: some
        // dimension pairs land on the right value by coincidence, which is why
        // the failing side is pinned with `it.fails` instead of exact values.
        // See #114.
        const offenders: string[] = [];
        for (const radius of [1, 2, 3, 4]) {
            const kernel = 2 * radius + 1;
            for (let cols = kernel; cols <= kernel + 6; cols++) {
                for (let rows = kernel; rows <= kernel + 6; rows++) {
                    const dst = dstImage(cols, rows);
                    ip.box_blur_gray(flat(cols, rows, 128), dst, radius, 0);
                    const { min, max } = pixelRange(dst, cols, rows);
                    // radius 3 lands 1 low from float truncation — a separate
                    // defect with its own test below, so allow a single level
                    if (Math.abs(min - 128) > 1 || Math.abs(max - 128) > 1) {
                        offenders.push(`${cols}x${rows} r=${radius} -> [${min},${max}]`);
                    }
                }
            }
        }
        expect(offenders).toEqual([]);
    });

    it("is exact for radii whose reciprocal window area rounds up", () => {
        for (const radius of [1, 2, 4]) {
            const dst = dstImage(32, 32);
            ip.box_blur_gray(flat(32, 32, 128), dst, radius, 0);
            const { min, max } = pixelRange(dst, 32, 32);
            expect([min, max]).toEqual([128, 128]);
        }
    });

    it("BUG #114: radius 3 comes out 1 low even on a large image", () => {
        // scale is the float 1/49, and 128 * 49 * (1/49) = 127.999999999999986,
        // which truncates to 127. Only radius 3 hits this for radii 1..8.
        const dst = dstImage(32, 32);
        ip.box_blur_gray(flat(32, 32, 128), dst, 3, 0);
        const { min, max } = pixelRange(dst, 32, 32);
        expect([min, max]).toEqual([127, 127]);
    });

    // Declared with `it.fails`: the body asserts the CORRECT behaviour, and the
    // test passes only because that assertion currently fails. Fix #114 and
    // this flips to a failure, forcing a deliberate update.
    //
    // Deliberately not pinning the wrong values. They are not stable — the
    // window reads outside the image, so the result depends on surrounding
    // library state. The identical call returns 85 in isolation and 142 when
    // run after the tests above it. That instability is itself part of the bug
    // and is recorded in #114; asserting the numbers would just be flaky.
    it.fails("BUG #114: a uniform image is NOT preserved when smaller than the kernel", () => {
        for (const [size, radius] of [
            [1, 1],
            [2, 1],
            [1, 2],
            [4, 2],
        ] as [number, number][]) {
            const dst = dstImage(size, size);
            ip.box_blur_gray(flat(size, size, 128), dst, radius, 0);
            const { min, max } = pixelRange(dst, size, size);
            expect([min, max]).toEqual([128, 128]);
        }
    });
});

describe("edge cases: detectors on tiny images and oversized borders", () => {
    it("return zero detections instead of throwing", () => {
        const fc = jsfeatNext.fast_corners;
        fc.set_threshold(20);
        for (const [w, h] of [
            [1, 1],
            [4, 4],
            [7, 7],
        ] as [number, number][]) {
            expect(fc.detect(flat(w, h), keypointPool(64), 3)).toBe(0);
            expect(jsfeatNext.yape06.detect(flat(w, h), keypointPool(64), 5)).toBe(0);
        }
    });

    it("tolerate a border larger than the image", () => {
        // The scan range collapses to nothing; it must come back empty rather
        // than looping into negative bounds.
        const fc = jsfeatNext.fast_corners;
        fc.set_threshold(20);
        for (const border of [20, 100]) {
            expect(fc.detect(flat(16, 16), keypointPool(64), border)).toBe(0);
            expect(jsfeatNext.yape06.detect(flat(16, 16), keypointPool(64), border)).toBe(0);
        }
    });
});

describe("edge cases: linalg and matmath on degenerate matrices", () => {
    const square = (n: number, values: number[]) => {
        const m = new jsfeatNext.matrix_t(n, n, F32C1);
        m.data.set(values);
        return m;
    };

    it("svd_invert handles the 1x1 case", () => {
        const A = square(1, [4]);
        const Ai = new jsfeatNext.matrix_t(1, 1, F32C1);
        jsfeatNext.linalg.svd_invert(Ai, A);
        expect(Ai.data[0]).toBeCloseTo(0.25, 6);
    });

    it("lu_solve reports failure on a singular system and success on a solvable one", () => {
        // [[1,2],[2,4]] has linearly dependent rows: no unique solution.
        const singular = square(2, [1, 2, 2, 4]);
        const b = new jsfeatNext.matrix_t(1, 2, F32C1);
        b.data.set([1, 2]);
        expect(jsfeatNext.linalg.lu_solve(singular, b)).toBe(0);

        // ...and a well-conditioned one really is solved, so the 0 above is a
        // meaningful signal rather than "always fails".
        const regular = square(2, [4, 7, 2, 6]);
        const b2 = new jsfeatNext.matrix_t(1, 2, F32C1);
        b2.data.set([1, 2]);
        expect(jsfeatNext.linalg.lu_solve(regular, b2)).toBe(1);
        const [x0, x1] = [b2.data[0], b2.data[1]];
        expect(4 * x0 + 7 * x1).toBeCloseTo(1, 4);
        expect(2 * x0 + 6 * x1).toBeCloseTo(2, 4);
    });

    it("CHARACTERIZATION: invert_3x3 of a singular matrix silently yields non-finite values", () => {
        // Same family as #102: no error, no signal, just garbage the caller
        // will happily use. Pinned so a future guard is a deliberate change.
        const singular = square(3, [1, 2, 3, 2, 4, 6, 1, 1, 1]);
        expect(jsfeatNext.matmath.mat3x3_determinant(singular)).toBe(0);

        const inverse = new jsfeatNext.matrix_t(3, 3, F32C1);
        jsfeatNext.matmath.invert_3x3(singular, inverse);
        let nonFinite = 0;
        for (let i = 0; i < 9; i++) if (!Number.isFinite(inverse.data[i])) nonFinite++;
        expect(nonFinite).toBeGreaterThan(0);
    });
});

describe("edge cases: gaussian kernels at minimum size", () => {
    it("a size-1 kernel is the identity", () => {
        const k = new Float32Array(1);
        jsfeatNext.math.get_gaussian_kernel(1, 0, k, jsfeatNext.F32_t);
        expect(k[0]).toBe(1);
    });

    it("even sizes are still normalized and symmetric", () => {
        // Even kernels have no centre tap, so they take the sampled exp() path
        // rather than the fixed binomial one.
        for (const size of [2, 4, 6]) {
            const k = new Float32Array(size);
            jsfeatNext.math.get_gaussian_kernel(size, 0, k, jsfeatNext.F32_t);
            let sum = 0;
            for (let i = 0; i < size; i++) sum += k[i];
            expect(sum).toBeCloseTo(1, 5);
            for (let i = 0; i < size; i++) expect(k[i]).toBeCloseTo(k[size - 1 - i], 6);
        }
    });
});
