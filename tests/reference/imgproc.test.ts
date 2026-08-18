/*
 *  imgproc.test.ts
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
import { noiseImage, dstImage, image, U8C1, F32C1 } from "../properties/helpers";
import {
    refBoxBlur,
    refBoxBlurAsImplemented,
    refGaussianBlurU8,
    refGaussianBlurF32,
    refSobel,
    refScharr,
    refIntegralImage,
    refWarpAffine,
    refAreaAverage,
} from "./reference-impl";

/**
 * Ground-truth tests for `imgproc` (issue #87, category C1).
 *
 * Each case runs the library against an independent naive implementation of
 * the same operation on NON-UNIFORM input, and requires exact agreement.
 *
 * This is the only part of the suite that pins actual pixel values. The parity
 * tests compare against a vendored jsfeat that shares any inherited bug, and
 * the invariant tests constrain the answer without fixing it — #115 showed an
 * off-by-one in a loop bound surviving both, because it changed which code
 * path produced a pixel without changing the value for a uniform image.
 */

const ip = jsfeatNext.imgproc;

/** Deliberately not square and not a power of two, so stride bugs show up. */
const W = 23;
const H = 17;

/** Reports every mismatch rather than aborting on the first. */
function expectExact(label: string, got: ArrayLike<number>, want: ArrayLike<number>, n: number) {
    const bad: string[] = [];
    for (let i = 0; i < n && bad.length < 8; i++) {
        if (got[i] !== want[i]) bad.push(`[${i}] got ${got[i]}, want ${want[i]}`);
    }
    expect(`${label}: ${bad.join(" | ")}`).toBe(`${label}: `);
}

describe("ground truth: box_blur_gray vs a naive clamped-window mean", () => {
    /**
     * Several shapes, not one. A single size is a weak test: an off-by-one in
     * the second-pass loop bound perturbs 23x17 only at radius 3, and only by
     * 1 — so a suite that sampled that one shape with a ±1 tolerance would
     * miss it entirely. It did, until this was widened.
     */
    const SHAPES: [number, number][] = [
        [8, 8],
        [16, 9],
        [9, 16],
        [23, 17],
        [32, 24],
    ];

    it("matches the exact clamped-window mean at every radius and shape (#114)", () => {
        // Since #114 the library divides the window sum EXACTLY by the area, so
        // `refBoxBlur` (exact division) is its oracle with no tolerance anywhere
        // — including radius 3, which used to come out 1 low from the float
        // reciprocal. The below-kernel shapes are now covered too, in the
        // separate suite below; here we stay at or above the kernel.
        for (const [w, h] of SHAPES) {
            const src = noiseImage(w, h, 4242);
            for (let radius = 1; radius <= 5; radius++) {
                if (Math.min(w, h) < 2 * radius + 1) continue;
                const dst = dstImage(w, h);
                ip.box_blur_gray(src, dst, radius, 0);
                expectExact(`${w}x${h} r=${radius}`, dst.data, refBoxBlur(src.data, w, h, radius), w * h);
            }
        }
    });

    it("the old float reciprocal differed from exact division only at radius 3, by 1", () => {
        // Documents why #114 was worth fixing. `refBoxBlurAsImplemented` models
        // the arithmetic the library used BEFORE the fix (multiply by the float
        // `1 / area`); comparing it to exact division shows the error was right
        // wherever the reciprocal is representable and one low where it is not.
        // The library no longer behaves this way — this pins the motivation.
        for (const [w, h] of SHAPES) {
            const src = noiseImage(w, h, 4242);
            for (let radius = 1; radius <= 5; radius++) {
                if (Math.min(w, h) < 2 * radius + 1) continue;
                const asImplemented = refBoxBlurAsImplemented(src.data, w, h, radius);
                const exact = refBoxBlur(src.data, w, h, radius);
                let differing = 0;
                for (let i = 0; i < w * h; i++) {
                    if (asImplemented[i] !== exact[i]) {
                        expect(exact[i] - asImplemented[i]).toBe(1);
                        differing++;
                    }
                }
                if (radius !== 3) expect(`${w}x${h} r=${radius}: ${differing}`).toBe(`${w}x${h} r=${radius}: 0`);
            }
        }
    });

    it("matches on a smooth gradient as well as on noise", () => {
        // Noise exercises every branch; a gradient catches sign and direction
        // errors that random data can mask.
        const src = image(W, H, (x, y) => (x * 7 + y * 3) & 0xff);
        const dst = dstImage(W, H);
        ip.box_blur_gray(src, dst, 2, 0);
        expectExact("gradient r=2", dst.data, refBoxBlur(src.data, W, H, 2), W * H);
    });
});

describe("ground truth: gaussian_blur vs a naive separable convolution", () => {
    const SHAPES: [number, number][] = [
        [8, 8],
        [16, 9],
        [9, 16],
        [23, 17],
        [32, 24],
    ];

    it("matches exactly at every kernel size and shape", () => {
        // Exact only once the reference reproduces jsfeat's ARITHMETIC as well
        // as its maths: the integer kernel, a truncating `>> 8` per pass, and
        // — the part that is easy to miss — quantisation back to 8 bits
        // BETWEEN the two passes. Accumulating both passes at full width and
        // shifting once at the end lands 1-2 grey levels out on most pixels.
        for (const [w, h] of SHAPES) {
            const src = noiseImage(w, h, 777);
            for (const size of [3, 5, 7, 9]) {
                const dst = dstImage(w, h);
                ip.gaussian_blur(src, dst, size, 0);

                const intKernel = new Int32Array(size);
                jsfeatNext.math.get_gaussian_kernel(size, 0, intKernel, jsfeatNext.U8_t);
                expectExact(`${w}x${h} k=${size}`, dst.data, refGaussianBlurU8(src.data, w, h, intKernel), w * h);
            }
        }
    });

    it("matches on a gradient, where a border slip cannot hide in noise", () => {
        const src = image(W, H, (x, y) => (x * 5 + y * 11) & 0xff);
        const dst = dstImage(W, H);
        ip.gaussian_blur(src, dst, 5, 0);

        const intKernel = new Int32Array(5);
        jsfeatNext.math.get_gaussian_kernel(5, 0, intKernel, jsfeatNext.U8_t);
        expectExact("gradient k=5", dst.data, refGaussianBlurU8(src.data, W, H, intKernel), W * H);
    });

    it("covers the FLOAT convolution path, which no other test reaches", () => {
        // gaussian_blur branches on `is_u8`: U8 sources go to _convol_u8,
        // everything else to _convol. Every other gaussian_blur call in the
        // suite passes a U8 image, so _convol — about 120 lines — was executed
        // by none of the 255 tests. Verified by instrumenting it and running
        // the whole suite: zero hits. See #123.
        //
        // The float path uses the float kernel (summing to 1) with no shift and
        // no clamp, but the intermediate still round-trips through the F32
        // destination between passes, so it is quantised to float32 precision —
        // the same structural quirk as the U8 path, at a different width.
        const noise = noiseImage(W, H, 777);
        for (const size of [3, 5, 7, 9]) {
            const src = new jsfeatNext.matrix_t(W, H, F32C1);
            for (let i = 0; i < W * H; i++) src.data[i] = noise.data[i];
            const dst = new jsfeatNext.matrix_t(W, H, F32C1);
            ip.gaussian_blur(src, dst, size, 0);

            const floatKernel = new Float32Array(size);
            jsfeatNext.math.get_gaussian_kernel(size, 0, floatKernel, jsfeatNext.F32_t);
            expectExact(`F32 k=${size}`, dst.data, refGaussianBlurF32(src.data, W, H, floatKernel), W * H);
        }
    });

    it("keeps the float path in range and preserves a constant", () => {
        // Cheap invariants on the same branch: an average cannot leave the
        // input's range, and a constant image must survive unchanged.
        const src = new jsfeatNext.matrix_t(W, H, F32C1);
        src.data.fill(42.5);
        const dst = new jsfeatNext.matrix_t(W, H, F32C1);
        ip.gaussian_blur(src, dst, 5, 0);
        for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBeCloseTo(42.5, 4);
    });

    it("matches when sigma is given explicitly rather than derived", () => {
        // sigma > 0 takes the sampled exp() path in get_gaussian_kernel instead
        // of the fixed binomial tables, so the weights differ entirely.
        const src = noiseImage(W, H, 314);
        for (const [size, sigma] of [
            [5, 1.5],
            [7, 0.8],
            [9, 2.5],
        ] as [number, number][]) {
            const dst = dstImage(W, H);
            ip.gaussian_blur(src, dst, size, sigma);

            const intKernel = new Int32Array(size);
            jsfeatNext.math.get_gaussian_kernel(size, sigma, intKernel, jsfeatNext.U8_t);
            expectExact(`k=${size} sigma=${sigma}`, dst.data, refGaussianBlurU8(src.data, W, H, intKernel), W * H);
        }
    });
});

describe("ground truth: sobel and scharr derivatives", () => {
    /** Splits jsfeat's interleaved dx,dy output into two planes. */
    function planes(dst: { data: ArrayLike<number> }, n: number) {
        const dx = new Float64Array(n);
        const dy = new Float64Array(n);
        for (let i = 0; i < n; i++) {
            dx[i] = dst.data[i * 2];
            dy[i] = dst.data[i * 2 + 1];
        }
        return { dx, dy };
    }

    it("sobel matches a naive separable [1,2,1] x [-1,0,1] exactly", () => {
        const src = noiseImage(W, H, 99);
        const dst = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
        ip.sobel_derivatives(src, dst);

        const got = planes(dst, W * H);
        const want = refSobel(src.data, W, H);
        expectExact("sobel dx", got.dx, want.dx, W * H);
        expectExact("sobel dy", got.dy, want.dy, W * H);
    });

    it("scharr matches a naive separable [3,10,3] x [-1,0,1] exactly", () => {
        const src = noiseImage(W, H, 1234);
        const dst = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
        ip.scharr_derivatives(src, dst);

        const got = planes(dst, W * H);
        const want = refScharr(src.data, W, H);
        expectExact("scharr dx", got.dx, want.dx, W * H);
        expectExact("scharr dy", got.dy, want.dy, W * H);
    });

    it("pins the asymmetric border convention specifically", () => {
        // Vertically jsfeat reflects (y=-1 reads row 1), horizontally it
        // replicates (x=-1 reads column 0). Assuming replication in both
        // directions leaves the interior exact and every border pixel wrong,
        // so a test that only sampled the interior would miss a border change.
        const src = noiseImage(W, H, 555);
        const dst = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
        ip.sobel_derivatives(src, dst);
        const got = planes(dst, W * H);
        const want = refSobel(src.data, W, H);

        let borderChecked = 0;
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                if (x !== 0 && y !== 0 && x !== W - 1 && y !== H - 1) continue;
                const i = y * W + x;
                expect(`(${x},${y}) dx=${got.dx[i]} dy=${got.dy[i]}`).toBe(
                    `(${x},${y}) dx=${want.dx[i]} dy=${want.dy[i]}`
                );
                borderChecked++;
            }
        }
        expect(borderChecked).toBe(2 * W + 2 * H - 4);
    });
});

describe("ground truth: warp_affine vs naive bilinear sampling", () => {
    /** Builds an F32 3x3 affine matrix and returns its float32-rounded coefficients. */
    function transform(values: number[]) {
        const m = new jsfeatNext.matrix_t(3, 3, F32C1);
        m.data.set([...values, 0, 0, 1]);
        return { matrix: m, coefficients: Array.from({ length: 6 }, (_, i) => m.data[i]) };
    }

    const CASES: [string, number[]][] = [
        [
            "rotate+scale+translate",
            [1.15 * Math.cos(0.37), -1.15 * Math.sin(0.37), 3.25, 1.15 * Math.sin(0.37), 1.15 * Math.cos(0.37), -1.75],
        ],
        ["pure scale", [0.5, 0, 0, 0, 0.5, 0]],
        ["shear", [1, 0.4, -2.5, 0.15, 1, 1.25]],
        ["translate only", [1, 0, 4.5, 0, 1, -3.5]],
    ];

    it("matches exactly for a range of transforms", () => {
        const src = noiseImage(W, H, 2468);
        for (const [name, values] of CASES) {
            const { matrix, coefficients } = transform(values);
            const dst = new jsfeatNext.matrix_t(W, H, U8C1);
            ip.warp_affine(src, dst, matrix, 42);

            const want = refWarpAffine(src.data, W, H, W, H, coefficients, 42);
            expectExact(name, dst.data, want, W * H);
        }
    });

    it("fills source coordinates in (-1, 0) instead of extrapolating (#119)", () => {
        // `xs | 0` truncates toward zero, so before #119 a source coordinate of
        // -0.5 gave ixs = 0, passed the `ixs >= 0` bounds check, and was
        // "interpolated" with a negative weight -- an extrapolation that could
        // leave [0,255] and wrap in the U8 destination. The bounds test now
        // reads the float coordinates, so that band receives `fill_value`.
        //
        // Original jsfeat still extrapolates here; see tests/divergences.test.ts.
        const src = noiseImage(W, H, 2468);
        const FILL = 42;
        const { matrix, coefficients } = transform([1, 0, -0.5, 0, 1, -0.5]);
        const dst = new jsfeatNext.matrix_t(W, H, U8C1);
        ip.warp_affine(src, dst, matrix, FILL);

        // Every pixel whose source coordinate lands in the (-1, 0) band on
        // either axis must now be filled, and there must be some of them --
        // otherwise this test would pass vacuously.
        let banded = 0;
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const xs = coefficients[0] * x + coefficients[1] * y + coefficients[2];
                const ys = coefficients[3] * x + coefficients[4] * y + coefficients[5];
                const inBand = (xs > -1 && xs < 0) || (ys > -1 && ys < 0);
                if (!inBand) continue;
                banded++;
                expect(dst.data[y * W + x]).toBe(FILL);
            }
        }
        expect(banded).toBeGreaterThan(0);

        // No sample can leave [0,255] any more: with the float bounds test both
        // weights are in [0,1), so every sampled value is a convex combination
        // of four bytes. Nothing can wrap.
        expectExact("filled band warp", dst.data, refWarpAffine(src.data, W, H, W, H, coefficients, FILL), W * H);
    });
});

describe("ground truth: resample vs an exact area average", () => {
    const INTEGER_RATIOS: [number, number, number, number][] = [
        [24, 18, 12, 9], // /2
        [24, 18, 8, 6], // /3
        [32, 24, 8, 6], // /4
        [30, 20, 15, 10], // /2
        [36, 24, 6, 4], // /6
    ];

    const FRACTIONAL_RATIOS: [number, number, number, number][] = [
        [23, 17, 9, 7],
        [24, 18, 10, 7],
        [30, 20, 7, 6],
        [31, 23, 11, 8],
        [40, 30, 13, 9],
    ];

    it("is EXACTLY floor(area average) at integer ratios", () => {
        // Every weight is a whole 256 and the normaliser divides cleanly, so
        // the only quantisation left is the final store — which truncates.
        // Exact equality, no tolerance.
        for (const [w, h, nw, nh] of INTEGER_RATIOS) {
            const src = noiseImage(w, h, 5150);
            const dst = dstImage(nw, nh);
            ip.resample(src, dst, nw, nh);

            const want = Float64Array.from(refAreaAverage(src.data, w, h, nw, nh), Math.floor);
            expectExact(`${w}x${h} to ${nw}x${nh}`, dst.data, want, nw * nh);
        }
    });

    it("stays within 1.5 grey levels at fractional ratios, and never overshoots", () => {
        // The 8.8 fixed-point path truncates in four places: the column weight
        // `alpha`, the row weight `beta`, the normaliser `inv_scale_256`, and
        // the store into U8. All four bias DOWNWARD, so the error is one-sided.
        // The final store alone accounts for up to 1; the weight quantisation
        // supplies the rest. Worst measured across these ratios is 1.379 low.
        let worst = 0;
        for (const [w, h, nw, nh] of FRACTIONAL_RATIOS) {
            const src = noiseImage(w, h, 5150);
            const dst = dstImage(nw, nh);
            ip.resample(src, dst, nw, nh);

            const exact = refAreaAverage(src.data, w, h, nw, nh);
            for (let i = 0; i < nw * nh; i++) {
                const error = dst.data[i] - exact[i];
                expect(`${w}x${h} err ${error > 0.1 || error <= -1.5 ? "OUT" : "ok"}`).toBe(`${w}x${h} err ok`);
                worst = Math.max(worst, Math.abs(error));
            }
        }
        // and the bound is not vacuous — the error really does get close to it
        expect(worst).toBeGreaterThan(1);
    });

    it("the float path is accurate, proving the drift is U8 quantisation", () => {
        // Same operation on F32 matrices takes `_resample` instead of
        // `_resample_u8` and agrees with the exact area average to float32
        // precision. So the ~1.4 above is the fast path's fixed point, not a
        // flaw in the resampling maths itself.
        const [w, h, nw, nh] = [24, 18, 10, 7];
        const noise = noiseImage(w, h, 5150);

        const src = new jsfeatNext.matrix_t(w, h, F32C1);
        for (let i = 0; i < w * h; i++) src.data[i] = noise.data[i];
        const dst = new jsfeatNext.matrix_t(nw, nh, F32C1);
        ip.resample(src, dst, nw, nh);

        const exact = refAreaAverage(noise.data, w, h, nw, nh);
        for (let i = 0; i < nw * nh; i++) {
            expect(Math.abs(dst.data[i] - exact[i])).toBeLessThan(1e-3);
        }
    });
});

describe("ground truth: compute_integral_image", () => {
    it("the sum table matches a brute-force recomputation of every cell", () => {
        const src = noiseImage(W, H, 808);
        const sum = new Int32Array((W + 1) * (H + 1));
        ip.compute_integral_image(src, sum, null, null);

        const want = refIntegralImage(src.data, W, H);
        expectExact("sum", sum, want.sum, (W + 1) * (H + 1));
    });

    it("the squared-sum table matches too, and the combined call agrees", () => {
        // compute_integral_image takes a different branch when both tables are
        // requested, so the sqsum path needs its own coverage — a gap mutation
        // testing already caught once in the phase-2 invariant tests.
        const src = noiseImage(W, H, 909);
        const sum = new Int32Array((W + 1) * (H + 1));
        const sqsum = new Float64Array((W + 1) * (H + 1));
        ip.compute_integral_image(src, sum, sqsum, null);

        const want = refIntegralImage(src.data, W, H);
        expectExact("sum (combined call)", sum, want.sum, (W + 1) * (H + 1));
        expectExact("sqsum", sqsum, want.sqsum, (W + 1) * (H + 1));
    });
});
