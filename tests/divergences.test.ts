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
});
