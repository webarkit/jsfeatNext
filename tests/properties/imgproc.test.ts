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
import { U8C1, F32C1, rng, image, uniformImage, noiseImage, dstImage, expectPixelsWithin } from "./helpers";

/**
 * Property/invariant tests for `imgproc` (issue #87, phase 2).
 *
 * As in the other files here, nothing is compared against the jsfeat oracle —
 * each assertion is a truth that must hold however the function is written.
 *
 * The workhorses in this file are the "uniform image" invariants: a constant
 * image has no structure, so blurs must return the same constant, derivatives
 * must be exactly zero and an edge detector must find nothing. They are cheap,
 * exact (no tolerance needed) and catch a surprising range of indexing and
 * border mistakes.
 *
 * Behaviours below were confirmed empirically against the library first, rather
 * than assumed — notably that `warp_*` with an identity transform reproduces
 * the image INTERIOR exactly while filling a 1-pixel border with `fill_value`,
 * because bilinear sampling treats the outer ring as out of bounds.
 */

const ip = jsfeatNext.imgproc;
const W = 16;
const H = 16;

describe("imgproc invariants", () => {
    describe("grayscale", () => {
        it("maps a uniform grey RGBA buffer to that same grey", () => {
            const level = 90;
            const rgba = new Uint8Array(W * H * 4);
            for (let i = 0; i < W * H; i++) {
                rgba[i * 4] = level;
                rgba[i * 4 + 1] = level;
                rgba[i * 4 + 2] = level;
                rgba[i * 4 + 3] = 255;
            }
            const dst = dstImage(W, H);
            ip.grayscale(rgba, W, H, dst);

            for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBe(level);
        });

        it("keeps output within [0, 255] for arbitrary input", () => {
            const rand = rng(201);
            const rgba = new Uint8Array(W * H * 4);
            for (let i = 0; i < rgba.length; i++) rgba[i] = (rand() * 256) | 0;
            const dst = dstImage(W, H);
            ip.grayscale(rgba, W, H, dst);
            expectPixelsWithin(dst, W, H);
        });

        it("is monotonic in brightness: a brighter input is never darker out", () => {
            const mk = (level: number) => {
                const rgba = new Uint8Array(W * H * 4);
                for (let i = 0; i < W * H; i++) {
                    rgba[i * 4] = level;
                    rgba[i * 4 + 1] = level;
                    rgba[i * 4 + 2] = level;
                    rgba[i * 4 + 3] = 255;
                }
                return rgba;
            };
            const dark = dstImage(W, H);
            const light = dstImage(W, H);
            ip.grayscale(mk(40), W, H, dark);
            ip.grayscale(mk(200), W, H, light);
            for (let i = 0; i < W * H; i++) expect(light.data[i]).toBeGreaterThanOrEqual(dark.data[i]);
        });
    });

    describe("blurs preserve a constant image", () => {
        // A blur is a weighted average; averaging a constant must return it
        // unchanged, including at the borders where the kernel is clamped.
        it("gaussian_blur(uniform) returns the same value everywhere", () => {
            const src = uniformImage(W, H, 100);
            const dst = dstImage(W, H);
            ip.gaussian_blur(src, dst, 5, 0);
            for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBe(100);
        });

        it("box_blur_gray(uniform) returns the same value everywhere", () => {
            const src = uniformImage(W, H, 100);
            const dst = dstImage(W, H);
            ip.box_blur_gray(src, dst, 2, 0);
            for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBe(100);
        });

        it("keeps output within [0, 255] on noisy input", () => {
            const src = noiseImage(W, H, 202);
            const dst = dstImage(W, H);
            ip.gaussian_blur(src, dst, 5, 0);
            expectPixelsWithin(dst, W, H);
            ip.box_blur_gray(src, dst, 3, 0);
            expectPixelsWithin(dst, W, H);
        });

        it("blurring does not widen the input's value range", () => {
            // An average of values in [lo, hi] can never fall outside [lo, hi].
            const src = image(W, H, (x, y) => 60 + ((x + y) % 40)); // values in [60, 99]
            const dst = dstImage(W, H);
            ip.gaussian_blur(src, dst, 5, 0);
            for (let i = 0; i < W * H; i++) {
                expect(dst.data[i]).toBeGreaterThanOrEqual(60);
                expect(dst.data[i]).toBeLessThanOrEqual(99);
            }
        });
    });

    describe("derivatives of a constant image are exactly zero", () => {
        it("sobel_derivatives", () => {
            const src = uniformImage(W, H, 128);
            const dst = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
            ip.sobel_derivatives(src, dst);
            for (let i = 0; i < W * H * 2; i++) expect(dst.data[i]).toBe(0);
        });

        it("scharr_derivatives", () => {
            const src = uniformImage(W, H, 128);
            const dst = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
            ip.scharr_derivatives(src, dst);
            for (let i = 0; i < W * H * 2; i++) expect(dst.data[i]).toBe(0);
        });

        it("a horizontal gradient produces a non-zero dx somewhere", () => {
            // Complements the above: proves the zero result is meaningful and
            // not simply "the function always returns zeros".
            const src = image(W, H, (x) => x * 8);
            const dst = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
            ip.sobel_derivatives(src, dst);
            let anyNonZero = false;
            for (let i = 0; i < W * H * 2; i += 2) if (dst.data[i] !== 0) anyNonZero = true;
            expect(anyNonZero).toBe(true);
        });
    });

    describe("canny", () => {
        it("finds no edges in a constant image", () => {
            const src = uniformImage(W, H, 128);
            const dst = dstImage(W, H);
            ip.canny(src, dst, 20, 60);
            for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBe(0);
        });

        it("emits a strictly binary image (only 0 or 255)", () => {
            const src = image(W, H, (x, y) => (x > 7 && y > 3 ? 220 : 30)); // a hard edge
            const blurred = dstImage(W, H);
            ip.gaussian_blur(src, blurred, 5, 0);
            const dst = dstImage(W, H);
            ip.canny(blurred, dst, 20, 60);
            for (let i = 0; i < W * H; i++) expect([0, 255]).toContain(dst.data[i]);
        });

        it("does find edges when there is a real one", () => {
            const src = image(W, H, (x) => (x > 7 ? 220 : 30));
            const blurred = dstImage(W, H);
            ip.gaussian_blur(src, blurred, 5, 0);
            const dst = dstImage(W, H);
            ip.canny(blurred, dst, 20, 60);
            let edges = 0;
            for (let i = 0; i < W * H; i++) if (dst.data[i] === 255) edges++;
            expect(edges).toBeGreaterThan(0);
        });
    });

    describe("compute_integral_image", () => {
        it("matches a brute-force region sum for random rectangles", () => {
            // The summed-area table is (w+1)x(h+1) with a zero first row/column,
            // so the sum over [x0,x1)x[y0,y1) is
            //   S(y1,x1) - S(y0,x1) - S(y1,x0) + S(y0,x0)
            const src = noiseImage(W, H, 203);
            const stride = W + 1;
            const sum = new Int32Array(stride * (H + 1));
            ip.compute_integral_image(src, sum as unknown as number[], null as never, null as never);

            const rand = rng(204);
            for (let trial = 0; trial < 12; trial++) {
                const x0 = (rand() * W) | 0;
                const y0 = (rand() * H) | 0;
                const x1 = x0 + 1 + ((rand() * (W - x0 - 1)) | 0);
                const y1 = y0 + 1 + ((rand() * (H - y0 - 1)) | 0);

                let brute = 0;
                for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) brute += src.data[y * W + x];

                const viaTable =
                    sum[y1 * stride + x1] - sum[y0 * stride + x1] - sum[y1 * stride + x0] + sum[y0 * stride + x0];
                expect(viaTable).toBe(brute);
            }
        });

        it("has a zero first row and column", () => {
            const src = noiseImage(8, 8, 205);
            const stride = 9;
            const sum = new Int32Array(stride * 9);
            ip.compute_integral_image(src, sum as unknown as number[], null as never, null as never);
            for (let x = 0; x <= 8; x++) expect(sum[x]).toBe(0);
            for (let y = 0; y <= 8; y++) expect(sum[y * stride]).toBe(0);
        });

        it("the bottom-right corner equals the total sum of the image", () => {
            const src = noiseImage(W, H, 206);
            const stride = W + 1;
            const sum = new Int32Array(stride * (H + 1));
            ip.compute_integral_image(src, sum as unknown as number[], null as never, null as never);

            let total = 0;
            for (let i = 0; i < W * H; i++) total += src.data[i];
            expect(sum[H * stride + W]).toBe(total);
        });

        it("the squared-sum table matches a brute-force sum of squares", () => {
            const src = noiseImage(W, H, 207);
            const stride = W + 1;
            const sum = new Int32Array(stride * (H + 1));
            const sqsum = new Int32Array(stride * (H + 1));
            ip.compute_integral_image(src, sum as unknown as number[], sqsum as unknown as number[], null as never);

            let total = 0;
            for (let i = 0; i < W * H; i++) total += src.data[i] * src.data[i];
            expect(sqsum[H * stride + W]).toBe(total);
        });

        it("produces the same sum table whether or not sqsum is requested", () => {
            // `compute_integral_image` takes a different branch when both sum and
            // sqsum are wanted, so the sum-only path being correct says nothing
            // about the combined one. Mutation testing caught this gap: a bug
            // injected into the combined branch went undetected until this case
            // existed. Verify the sum table fully in BOTH modes.
            const src = noiseImage(W, H, 210);
            const stride = W + 1;
            const cells = stride * (H + 1);

            const sumOnly = new Int32Array(cells);
            ip.compute_integral_image(src, sumOnly as unknown as number[], null as never, null as never);

            const sumWithSq = new Int32Array(cells);
            const sqsum = new Int32Array(cells);
            ip.compute_integral_image(
                src,
                sumWithSq as unknown as number[],
                sqsum as unknown as number[],
                null as never
            );

            for (let i = 0; i < cells; i++) expect(sumWithSq[i]).toBe(sumOnly[i]);

            // ...and that shared table really is the correct summed-area table.
            let total = 0;
            for (let i = 0; i < W * H; i++) total += src.data[i];
            expect(sumWithSq[H * stride + W]).toBe(total);
        });
    });

    describe("equalize_histogram", () => {
        it("preserves the ordering of pixel values (monotonic mapping)", () => {
            // Equalisation remaps intensities through a non-decreasing curve, so
            // a pixel that was darker can never come out brighter than one that
            // was lighter.
            const src = noiseImage(W, H, 208);
            const dst = dstImage(W, H);
            ip.equalize_histogram(src, dst);

            // Every unordered pair is visited once, so both orderings have to be
            // asserted explicitly: checking only `src[i] < src[j]` would leave
            // half the pairs — those where the darker pixel has the higher
            // index — completely unverified.
            for (let i = 0; i < W * H; i++) {
                for (let j = i + 1; j < W * H; j++) {
                    if (src.data[i] < src.data[j]) expect(dst.data[i]).toBeLessThanOrEqual(dst.data[j]);
                    else if (src.data[i] > src.data[j]) expect(dst.data[i]).toBeGreaterThanOrEqual(dst.data[j]);
                    else expect(dst.data[i]).toBe(dst.data[j]);
                }
            }
        });

        it("keeps output within [0, 255]", () => {
            const src = noiseImage(W, H, 209);
            const dst = dstImage(W, H);
            ip.equalize_histogram(src, dst);
            expectPixelsWithin(dst, W, H);
        });

        it("maps a constant image to a constant image", () => {
            const src = uniformImage(W, H, 100);
            const dst = dstImage(W, H);
            ip.equalize_histogram(src, dst);
            const first = dst.data[0];
            for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBe(first);
        });
    });

    describe("pyrdown / resample", () => {
        it("pyrdown halves the dimensions and preserves a constant", () => {
            const src = uniformImage(W, H, 77);
            const dst = dstImage(W >> 1, H >> 1);
            ip.pyrdown(src, dst);

            expect(dst.cols).toBe(W >> 1);
            expect(dst.rows).toBe(H >> 1);
            for (let i = 0; i < (W >> 1) * (H >> 1); i++) expect(dst.data[i]).toBe(77);
        });

        it("resample preserves a constant exactly at an integer ratio", () => {
            const src = uniformImage(W, H, 77);
            const dst = dstImage(W >> 1, H >> 1);
            ip.resample(src, dst, W >> 1, H >> 1);
            for (let i = 0; i < (W >> 1) * (H >> 1); i++) expect(dst.data[i]).toBe(77);
        });

        it("resample preserves a constant to within 1 grey level at a non-integer ratio (U8)", () => {
            // Characterised against the library: for a non-integer scale the U8
            // path is systematically low by at most 1 (e.g. 77 -> 76). That is
            // the 8.8 fixed-point fast path in `_resample_u8` truncating, a
            // deliberate speed/accuracy trade-off, and it is bit-identical to
            // original jsfeat — so it is an inherited characteristic, not a
            // regression. Asserting the real bound still catches any genuine
            // breakage, since an error worse than 1 level would fail here.
            const src = uniformImage(W, H, 77);
            const dst = dstImage(9, 5);
            ip.resample(src, dst, 9, 5);
            for (let i = 0; i < 9 * 5; i++) {
                expect(Math.abs(dst.data[i] - 77)).toBeLessThanOrEqual(1);
            }
        });

        it("resample is exact at a non-integer ratio on the float path", () => {
            // Pins the distinction: the ±1 above is quantisation in the U8 fixed
            // -point path, not an error in the resampling maths itself.
            const src = new jsfeatNext.matrix_t(W, H, F32C1);
            src.data.fill(77);
            const dst = new jsfeatNext.matrix_t(9, 5, F32C1);
            ip.resample(src, dst, 9, 5);
            for (let i = 0; i < 9 * 5; i++) expect(dst.data[i]).toBeCloseTo(77, 3);
        });

        it("pyrdown keeps output within the input's value range", () => {
            const src = image(W, H, (x, y) => 50 + ((x * y) % 50)); // [50, 99]
            const dst = dstImage(W >> 1, H >> 1);
            ip.pyrdown(src, dst);
            for (let i = 0; i < (W >> 1) * (H >> 1); i++) {
                expect(dst.data[i]).toBeGreaterThanOrEqual(50);
                expect(dst.data[i]).toBeLessThanOrEqual(99);
            }
        });
    });

    describe("warping with the identity transform", () => {
        // Confirmed empirically: the interior is reproduced exactly, while the
        // outermost 1-pixel ring is filled with `fill_value` because bilinear
        // sampling treats it as out of bounds.
        const identity = () => {
            const I = new jsfeatNext.matrix_t(3, 3, F32C1);
            jsfeatNext.matmath.identity_3x3(I, 1.0);
            return I;
        };

        it("warp_perspective reproduces the image interior exactly", () => {
            const src = image(W, H, (x, y) => (x * 7 + y * 13) & 0xff);
            const dst = dstImage(W, H);
            ip.warp_perspective(src, dst, identity(), 0);

            for (let y = 1; y < H - 1; y++) {
                for (let x = 1; x < W - 1; x++) {
                    expect(dst.data[y * W + x]).toBe(src.data[y * W + x]);
                }
            }
        });

        it("warp_affine reproduces the image interior exactly", () => {
            const src = image(W, H, (x, y) => (x * 7 + y * 13) & 0xff);
            const dst = dstImage(W, H);
            ip.warp_affine(src, dst, identity(), 0);

            for (let y = 1; y < H - 1; y++) {
                for (let x = 1; x < W - 1; x++) {
                    expect(dst.data[y * W + x]).toBe(src.data[y * W + x]);
                }
            }
        });

        it("fills out-of-bounds pixels with fill_value", () => {
            const src = uniformImage(W, H, 200);
            const dst = dstImage(W, H);
            ip.warp_perspective(src, dst, identity(), 33);
            // the border ring is sampled from outside the source
            expect(dst.data[0]).toBe(33);
            expect(dst.data[W - 1]).toBe(33);
            expect(dst.data[(H - 1) * W]).toBe(33);
            // ...while the interior still carries the real value
            expect(dst.data[(H >> 1) * W + (W >> 1)]).toBe(200);
        });
    });
});
