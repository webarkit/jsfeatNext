/*
 *  divergences.test.ts
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
import jsfeatNext from "../src/jsfeatNext";
import jsfeat from "./vendor/oracle.cjs";

/**
 * Registry of INTENTIONAL divergences from original jsfeat.
 *
 * The suite in `tests/parity/` pins the places where jsfeatNext must match the
 * jsfeat oracle bit-for-bit. This file is its counterpart: every case here is a
 * place where we have deliberately decided NOT to match, with the reason and
 * the tracking issue recorded alongside the assertion.
 *
 * Keeping these separate matters. A divergence buried in the parity suite looks
 * like a broken test; here it reads as a decision. Anything added to this file
 * should cite an issue explaining why differing is the right call.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;

describe("intentional divergences from jsfeat", () => {
    describe("linalg.svd_invert rejects non-square input (#102)", () => {
        /**
         * jsfeat's svd_invert silently returns a WRONG result for a non-square
         * matrix — only the first column of the pseudo-inverse is correct. Since
         * upstream jsfeat is frozen we cannot fix it there, and returning wrong
         * numbers quietly is worse than failing. jsfeatNext therefore throws.
         *
         * The correct rectangular pseudo-inverse is still tracked in #102.
         */
        it("throws instead of returning a wrong pseudo-inverse", () => {
            // A is 2 rows x 3 cols -> new matrix_t(cols, rows, type)
            const A = new jsfeatNext.matrix_t(3, 2, F32C1);
            A.data.set([1, 0, 2, 0, 1, 3]);
            const dst = new jsfeatNext.matrix_t(2, 3, F32C1);

            expect(() => jsfeatNext.linalg.svd_invert(dst, A)).toThrow(/square/i);
        });

        it("original jsfeat silently returns a wrong answer for the same input", () => {
            // Documents WHY we diverge: the oracle produces numbers that are not
            // the Moore-Penrose pseudo-inverse, with no error of any kind.
            const Ao = new jsfeat.matrix_t(3, 2, OF32C1);
            Ao.data.set([1, 0, 2, 0, 1, 3]);
            const dstO = new jsfeat.matrix_t(2, 3, OF32C1);

            expect(() => jsfeat.linalg.svd_invert(dstO, Ao)).not.toThrow();

            // The true pseudo-inverse of [[1,0,2],[0,1,3]] is
            //   [ 0.7143 -0.4286 ]
            //   [-0.4286  0.3571 ]
            //   [ 0.1429  0.2143 ]
            // jsfeat's second column does not match it.
            const truthSecondColumn = [-0.4286, 0.3571, 0.2143];
            const actualSecondColumn = [dstO.data[1], dstO.data[3], dstO.data[5]];
            const matches = truthSecondColumn.every((want, i) => Math.abs(actualSecondColumn[i] - want) < 1e-3);
            expect(matches).toBe(false);
        });

        it("still matches jsfeat exactly for square input (parity preserved)", () => {
            // The divergence is scoped to the broken path only: square inversion
            // remains bit-compatible, which is what tests/parity/linalg.test.ts pins.
            const A = new jsfeatNext.matrix_t(2, 2, F32C1);
            A.data.set([4, 7, 2, 6]);
            const Ai = new jsfeatNext.matrix_t(2, 2, F32C1);
            jsfeatNext.linalg.svd_invert(Ai, A);

            const Ao = new jsfeat.matrix_t(2, 2, OF32C1);
            Ao.data.set([4, 7, 2, 6]);
            const Aio = new jsfeat.matrix_t(2, 2, OF32C1);
            jsfeat.linalg.svd_invert(Aio, Ao);

            for (let i = 0; i < 4; i++) {
                expect(Ai.data[i]).toBeCloseTo(Aio.data[i], 6);
            }
            // ...and it is genuinely correct: A * A^-1 = I
            const P = new jsfeatNext.matrix_t(2, 2, F32C1);
            jsfeatNext.matmath.multiply(P, A, Ai);
            for (const [i, want] of [1, 0, 0, 1].entries()) {
                expect(P.data[i]).toBeCloseTo(want, 5);
            }
        });
    });

    describe("matrix_t rejects S64_t instead of silently returning an F64_t view (#139)", () => {
        /**
         * S64_t is a declared, publicly exported data type that no
         * view-selection code path actually supports: jsfeat's own
         * `matrix_t` (and jsfeatNext's, inherited faithfully) sizes the
         * buffer correctly for it but has no S64_t branch in the ternary
         * chain that picks the typed-array view, so it silently falls
         * through to F64_t — right byte count, wrong interpretation, no
         * error of any kind.
         *
         * Per the issue's own options (implement a real BigInt64Array view,
         * reject explicitly, or leave as is), implementing was rejected as
         * disproportionate: nothing in this library needs 64-bit integer
         * matrices today, and every arithmetic helper that touches `.data`
         * would need a BigInt-vs-Number decision it currently has no reason
         * to make. Rejecting loudly is a deliberate divergence from jsfeat,
         * which returns the wrong view silently, registered here per #102's
         * convention.
         */
        it("throws instead of returning a wrong (F64_t) view", () => {
            const S64C1 = jsfeatNext.S64_t | jsfeatNext.C1_t;
            expect(() => new jsfeatNext.matrix_t(4, 4, S64C1)).toThrow(/S64_t/);
        });

        it("also throws when wrapping a pre-existing buffer (the cache-pool constructor path)", () => {
            // matrix_t has two view-selection sites -- its own allocate()
            // and the branch that wraps a caller-supplied data_t (used by
            // every cache-pool borrower across the codebase). Both must
            // reject S64_t, not just the more commonly exercised one.
            const S64C1 = jsfeatNext.S64_t | jsfeatNext.C1_t;
            const donor = new jsfeatNext.matrix_t(4, 4, jsfeatNext.F64_t | jsfeatNext.C1_t);
            expect(() => new jsfeatNext.matrix_t(4, 4, S64C1, donor.buffer)).toThrow(/S64_t/);
        });

        it("original jsfeat silently returns a Float64Array view for the same request", () => {
            // Documents WHY we diverge: no error, no warning, just the wrong
            // interpretation of the same bytes.
            const OS64C1 = jsfeat.S64_t | jsfeat.C1_t;
            const m = new jsfeat.matrix_t(4, 4, OS64C1);
            expect(m.data).toBeInstanceOf(Float64Array);
        });

        it("still matches jsfeat exactly for every supported type (parity preserved)", () => {
            // The divergence is scoped to S64_t alone -- every type this
            // class actually supports remains unaffected.
            const types = [jsfeatNext.U8_t, jsfeatNext.S32_t, jsfeatNext.F32_t, jsfeatNext.F64_t];
            for (const t of types) {
                expect(() => new jsfeatNext.matrix_t(4, 4, t | jsfeatNext.C1_t)).not.toThrow();
            }
        });

        it("rejecting an allocate() call to switch to S64_t leaves the matrix's existing data/buffer intact", () => {
            // Qodo review finding: allocate() used to delete this.data/this.buffer
            // before validating the new type, so a caller who set `type` to
            // S64_t and called allocate() (catching the resulting throw) was
            // left with a corrupted matrix -- data/buffer both undefined,
            // even though the matrix's actual bytes were never touched.
            const m = new jsfeatNext.matrix_t(4, 4, F32C1);
            m.data[0] = 42;
            const dataBefore = m.data;
            const bufferBefore = m.buffer;

            m.type = jsfeatNext.S64_t | jsfeatNext.C1_t;
            expect(() => m.allocate()).toThrow(/S64_t/);

            expect(m.data).toBe(dataBefore);
            expect(m.buffer).toBe(bufferBefore);
            expect(m.data[0]).toBe(42);
        });
    });

    describe("imgproc.warp_affine fills the (-1, 0) source band instead of extrapolating (#119)", () => {
        /**
         * jsfeat's bounds check is `ixs >= 0` on `xs | 0`, which truncates
         * TOWARD ZERO. A source coordinate of -0.5 therefore yields ixs = 0,
         * tests as inside the image, and is "interpolated" with a NEGATIVE
         * weight -- an extrapolation past the edge pixel. The destination is a
         * Uint8Array, so a result outside [0,255] wraps modulo 256 instead of
         * clamping: an extrapolated 258 is stored as 2.
         *
         * jsfeatNext tests the float coordinates instead, so that one-pixel
         * band receives `fill_value` as intended. This is the same class of
         * divergence as #102 -- we return the documented answer where jsfeat
         * returned garbage -- and it also makes `warp_affine` consistent with
         * `warp_perspective`, which already guarded on the floats and clamped
         * its weights with `Math.max(xs - ixs, 0)`.
         *
         * Note this changes ORB descriptors for keypoints near an image edge,
         * since `orb/rectify_patch.ts` samples through `warp_affine` -- the
         * population tracked by #110.
         */
        const W = 23,
            H = 17;
        const COEFFS = [1, 0, -0.5, 0, 1, -0.5];

        /** Same 8-bit noise on both sides, plus the shared F32 transform. */
        function setup() {
            const next = new jsfeatNext.matrix_t(W, H, U8C1);
            const orig = new jsfeat.matrix_t(W, H, OU8C1);
            let seed = 2468;
            for (let i = 0; i < W * H; i++) {
                seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                next.data[i] = orig.data[i] = (seed >>> 16) & 0xff;
            }
            const tN = new jsfeatNext.matrix_t(3, 3, F32C1);
            const tO = new jsfeat.matrix_t(3, 3, OF32C1);
            tN.data.set([...COEFFS, 0, 0, 1]);
            tO.data.set([...COEFFS, 0, 0, 1]);
            return { next, orig, tN, tO };
        }

        it("fills the band where jsfeat extrapolates with a negative weight", () => {
            const { next, orig, tN, tO } = setup();
            const FILL = 42;
            const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
            const dstO = new jsfeat.matrix_t(W, H, OU8C1);
            jsfeatNext.imgproc.warp_affine(next, dstN, tN, FILL);
            jsfeat.imgproc.warp_affine(orig, dstO, tO, FILL);

            let banded = 0;
            let differing = 0;
            for (let y = 0; y < H; y++) {
                for (let x = 0; x < W; x++) {
                    const i = y * W + x;
                    const xs = tN.data[0] * x + tN.data[1] * y + tN.data[2];
                    const ys = tN.data[3] * x + tN.data[4] * y + tN.data[5];
                    if (!((xs > -1 && xs < 0) || (ys > -1 && ys < 0))) continue;
                    banded++;
                    expect(dstN.data[i]).toBe(FILL);
                    if (dstO.data[i] !== FILL) differing++;
                }
            }
            // The band is non-empty, and jsfeat really does produce something
            // else there -- otherwise this would be a divergence on paper only.
            expect(banded).toBeGreaterThan(0);
            expect(differing).toBeGreaterThan(0);
        });

        it("no sampled value can leave [0,255] any more, so nothing wraps", () => {
            // With the float bounds test both weights are in [0,1), so every
            // sampled pixel is a convex combination of four bytes. Sampling with
            // a fill_value outside the source range makes any wrap obvious:
            // a wrapped extrapolation would land on some unrelated value.
            const { next, tN } = setup();
            const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
            jsfeatNext.imgproc.warp_affine(next, dstN, tN, 200);

            let srcMin = 255,
                srcMax = 0;
            for (let i = 0; i < W * H; i++) {
                srcMin = Math.min(srcMin, next.data[i]);
                srcMax = Math.max(srcMax, next.data[i]);
            }
            for (let i = 0; i < W * H; i++) {
                const v = dstN.data[i];
                const sampled = v >= srcMin && v <= srcMax;
                expect(sampled || v === 200).toBe(true);
            }
        });

        it("still matches jsfeat exactly away from the band (parity preserved)", () => {
            // The divergence is scoped: a transform that never produces a
            // negative source coordinate stays bit-compatible.
            const { next, orig, tN, tO } = setup();
            tN.data.set([1, 0, 2.5, 0, 1, 1.5, 0, 0, 1]);
            tO.data.set([1, 0, 2.5, 0, 1, 1.5, 0, 0, 1]);
            const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
            const dstO = new jsfeat.matrix_t(W, H, OU8C1);
            jsfeatNext.imgproc.warp_affine(next, dstN, tN, 0);
            jsfeat.imgproc.warp_affine(orig, dstO, tO, 0);

            for (let i = 0; i < W * H; i++) {
                expect(dstN.data[i]).toBe(dstO.data[i]);
            }
        });
    });
    describe("imgproc.box_blur_gray clamps the window and divides exactly (#114)", () => {
        /**
         * jsfeat's box blur diverges from a correct average in two ways, both
         * inherited and both registered here:
         *
         *  1. Below the kernel size (`cols < 2r+1` or `rows < 2r+1`) its
         *     sliding-window sums are never primed, so it reads outside the
         *     image and returns garbage — famously NOT preserving a uniform
         *     image. jsfeatNext clamps the window to the image (replicated
         *     border), so a uniform image round-trips at every size.
         *  2. It scales by the float reciprocal `1 / area` and truncates, which
         *     comes out 1 low wherever the true mean is an integer the reciprocal
         *     undershoots. The clearest case is a uniform 128 at radius 3:
         *     `128 * 49 * (1/49) = 127.999999999999986` -> 127. jsfeatNext
         *     divides exactly, so it stays 128.
         *
         * Parity is preserved where jsfeat is correct: at radius 2 on non-edge
         * data the two agree bit-for-bit, which is what tests/parity pins.
         */
        it("preserves a uniform image below the kernel size, where jsfeat returns garbage", () => {
            const W = 4,
                H = 4,
                V = 128,
                RADIUS = 2; // window 5 > image 4, so jsfeat's sums are never primed
            const next = new jsfeatNext.matrix_t(W, H, U8C1);
            const orig = new jsfeat.matrix_t(W, H, OU8C1);
            next.data.fill(V);
            orig.data.fill(V);
            const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
            const dstO = new jsfeat.matrix_t(W, H, OU8C1);
            jsfeatNext.imgproc.box_blur_gray(next, dstN, RADIUS, 0);
            jsfeat.imgproc.box_blur_gray(orig, dstO, RADIUS, 0);

            // jsfeatNext: uniform in, uniform out.
            for (let i = 0; i < W * H; i++) expect(dstN.data[i]).toBe(V);
            // jsfeat: at least one pixel is wrong, which is the whole point.
            let jsfeatWrong = 0;
            for (let i = 0; i < W * H; i++) if (dstO.data[i] !== V) jsfeatWrong++;
            expect(jsfeatWrong).toBeGreaterThan(0);
        });

        it("returns the exact mean at radius 3 where jsfeat comes out 1 low", () => {
            const W = 32,
                H = 32,
                V = 128,
                RADIUS = 3;
            const next = new jsfeatNext.matrix_t(W, H, U8C1);
            const orig = new jsfeat.matrix_t(W, H, OU8C1);
            next.data.fill(V);
            orig.data.fill(V);
            const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
            const dstO = new jsfeat.matrix_t(W, H, OU8C1);
            jsfeatNext.imgproc.box_blur_gray(next, dstN, RADIUS, 0);
            jsfeat.imgproc.box_blur_gray(orig, dstO, RADIUS, 0);

            // Interior only, to isolate the reciprocal defect from any border.
            for (let y = RADIUS; y < H - RADIUS; y++) {
                for (let x = RADIUS; x < W - RADIUS; x++) {
                    expect(dstN.data[y * W + x]).toBe(128);
                    expect(dstO.data[y * W + x]).toBe(127);
                }
            }
        });

        it("still matches jsfeat exactly at radius 2 on non-uniform data (parity preserved)", () => {
            // The divergence is scoped: where jsfeat is correct, jsfeatNext
            // agrees bit-for-bit. Radius 2 on noise never crosses a reciprocal
            // boundary, and the image is larger than the kernel.
            const W = 24,
                H = 20,
                RADIUS = 2;
            const next = new jsfeatNext.matrix_t(W, H, U8C1);
            const orig = new jsfeat.matrix_t(W, H, OU8C1);
            let seed = 1234;
            for (let i = 0; i < W * H; i++) {
                seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                next.data[i] = orig.data[i] = (seed >>> 16) & 0xff;
            }
            const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
            const dstO = new jsfeat.matrix_t(W, H, OU8C1);
            jsfeatNext.imgproc.box_blur_gray(next, dstN, RADIUS, 0);
            jsfeat.imgproc.box_blur_gray(orig, dstO, RADIUS, 0);
            for (let i = 0; i < W * H; i++) expect(dstN.data[i]).toBe(dstO.data[i]);
        });
    });

    describe("homography2d's DLT solve accumulates in F64, jsfeat in F32 (#186)", () => {
        /**
         * jsfeat's homography2d.run() builds the 9x9 DLT normal matrix (LtL)
         * and solves its eigenvector entirely in F32: 36 upper-triangle
         * accumulators rounded on every addition, on top of normal equations
         * already squaring the condition number relative to solving on L
         * directly. jsfeatNext now runs that whole solve (LtL, eigenvectors,
         * both denormalization multiplies, and the final scale-to-[8]=1
         * step) in F64, only rounding down to the caller's model dtype once,
         * at the very end -- matching OpenCV's HomographyEstimatorCallback,
         * which uses `double` throughout.
         *
         * This is a precision improvement, not a behavior change in kind: a
         * caller who was getting jsfeat's answer now gets a strictly more
         * accurate one for the same inputs. tests/parity/motion_estimator.ts
         * documents that the two no longer match bit-for-bit for this kernel.
         */
        function project(m: ArrayLike<number>, x: number, y: number) {
            const ww = 1.0 / (m[6] * x + m[7] * y + m[8]);
            return { x: (m[0] * x + m[1] * y + m[2]) * ww, y: (m[3] * x + m[4] * y + m[5]) * ww };
        }

        function mulberry32(seed: number): () => number {
            let a = seed >>> 0;
            return () => {
                a |= 0;
                a = (a + 0x6d2b79f5) | 0;
                let t = Math.imul(a ^ (a >>> 15), 1 | a);
                t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
                return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
            };
        }

        // Exact (noise-free) correspondences: any residual error in the
        // recovered homography is purely a numerical artifact of the solve
        // itself, not a fit to noisy data, so it isolates the F32-vs-F64
        // effect cleanly.
        const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];
        function makeExactCorrespondences(n: number, seed: number) {
            const rand = mulberry32(seed);
            const from: { x: number; y: number }[] = [];
            const to: { x: number; y: number }[] = [];
            for (let i = 0; i < n; i++) {
                const x = 10 + rand() * 300;
                const y = 10 + rand() * 220;
                const p = project(GT, x, y);
                from.push({ x, y });
                to.push(p);
            }
            return { from, to };
        }

        it("recovers a noise-free homography closer to the true transform than jsfeat does", () => {
            const N = 12;
            const { from, to } = makeExactCorrespondences(N, 4242);

            const modelN = new jsfeatNext.matrix_t(3, 3, F32C1);
            jsfeatNext.homography2d.run(from, to, modelN, N);

            const modelO = new jsfeat.matrix_t(3, 3, OF32C1);
            new jsfeat.motion_model.homography2d().run(from, to, modelO, N);

            let maxErrN = 0,
                maxErrO = 0;
            for (let i = 0; i < N; i++) {
                const want = project(GT, from[i].x, from[i].y);
                const gotN = project(modelN.data, from[i].x, from[i].y);
                const gotO = project(modelO.data, from[i].x, from[i].y);
                maxErrN = Math.max(maxErrN, Math.hypot(gotN.x - want.x, gotN.y - want.y));
                maxErrO = Math.max(maxErrO, Math.hypot(gotO.x - want.x, gotO.y - want.y));
            }

            // jsfeat's F32 accumulation really does introduce a measurable
            // error here -- otherwise this divergence would exist on paper
            // only -- and jsfeatNext's F64 solve reduces it.
            expect(maxErrO).toBeGreaterThan(0);
            expect(maxErrN).toBeLessThan(maxErrO);
        });

        it("model coefficients still agree with jsfeat to a measured, explicit tolerance (same solve, different precision)", () => {
            // The divergence is in the last few significant digits, not the
            // shape of the answer. Tolerance is data-driven, not arbitrary:
            // measured (2026-09-05) max absolute per-coefficient difference
            // across 1000 seeded noise-free 12-point configurations was
            // ~3.7e-4 -- toBeCloseTo(..., 2) requires < 5e-3, over 13x
            // headroom above the largest observed difference, while still
            // being far tighter than a blanket "same ballpark" check would
            // be. Re-measure and adjust if this ever starts failing instead
            // of loosening it blindly.
            const N = 12;
            const { from, to } = makeExactCorrespondences(N, 9001);

            const modelN = new jsfeatNext.matrix_t(3, 3, F32C1);
            jsfeatNext.homography2d.run(from, to, modelN, N);

            const modelO = new jsfeat.matrix_t(3, 3, OF32C1);
            new jsfeat.motion_model.homography2d().run(from, to, modelO, N);

            for (let i = 0; i < 9; i++) {
                expect(modelN.data[i]).toBeCloseTo(modelO.data[i], 2);
            }
        });

        it("never produces Infinity/NaN, even across many random configurations (final-scale guard)", () => {
            // Regression coverage for the scaleFor()-style guard on the final
            // `1.0 / md[8]` normalization: previously unconditional, so a
            // near-zero md[8] (pure-perspective degenerate) silently produced
            // Infinity. Sweeping many configurations as a broad safety net,
            // in addition to the deterministic case below.
            for (let seed = 1; seed <= 200; seed++) {
                const { from, to } = makeExactCorrespondences(8, seed);
                const model = new jsfeatNext.matrix_t(3, 3, F32C1);
                const ok = jsfeatNext.homography2d.run(from, to, model, 8);
                if (!ok) continue; // degenerate (zero-spread) input, not this guard's concern
                for (let i = 0; i < 9; i++) {
                    expect(Number.isFinite(model.data[i])).toBe(true);
                }
                expect(model.data[8]).toBe(1);
            }
        });

        it("a near-zero md[8] is reported as degenerate, not silently forced to a corrupted h33=1 model", () => {
            // Deterministic (no RNG): 4 nearly-collinear points (found via a
            // seeded search, then hardcoded) whose recovered pre-scale h33
            // lands within EPSILON of zero. This is the case Qodo's review of
            // #192 caught: an earlier version of the guard set the scale
            // factor to 1 in this branch (leaving the other 8 coefficients
            // un-rescaled) but then still unconditionally forced md[8] = 1 --
            // fabricating a different, corrupted transform rather than
            // reporting degeneracy. homography2d.error() (and every RANSAC/
            // LMEDS caller) hardcodes h33 as the literal constant 1.0, so a
            // model that can't actually be scaled to h33=1 can't be
            // represented correctly here at all: run() must return 0.
            const from = [
                { x: 10.000148300289874, y: 9.999948440617416 },
                { x: 60.000414931323846, y: 60.00017959228367 },
                { x: 109.9996105791321, y: 110.00031765410048 },
                { x: 160.00033988108672, y: 160.00016441007912 },
            ];
            const to = [
                { x: 10.366303065541363, y: 10.366095888020284 },
                { x: 76.13625586280475, y: 76.13595723431364 },
                { x: 179.89893414872458, y: 179.9000905349382 },
                { x: 367.9492868530562, y: 367.94888332621275 },
            ];
            const model = new jsfeatNext.matrix_t(3, 3, F32C1);
            const ok = jsfeatNext.homography2d.run(from, to, model, 4);
            expect(ok).toBe(0);
        });
    });
});
