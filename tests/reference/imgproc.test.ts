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
import { noiseImage, dstImage, image } from "../properties/helpers";
import { refBoxBlur, refBoxBlurAsImplemented, refSobel, refScharr, refIntegralImage } from "./reference-impl";

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

    it("matches the reference exactly at every radius and shape", () => {
        // Compared against the float-reciprocal reference, so no tolerance is
        // needed anywhere — including radius 3, whose truncation is part of the
        // arithmetic being modelled rather than slack to be absorbed.
        for (const [w, h] of SHAPES) {
            const src = noiseImage(w, h, 4242);
            for (let radius = 1; radius <= 5; radius++) {
                if (Math.min(w, h) < 2 * radius + 1) continue; // #114 territory
                const dst = dstImage(w, h);
                ip.box_blur_gray(src, dst, radius, 0);
                expectExact(`${w}x${h} r=${radius}`, dst.data, refBoxBlurAsImplemented(src.data, w, h, radius), w * h);
            }
        }
    });

    it("differs from exact division only at radius 3, and only by 1", () => {
        // Isolates the #114 truncation defect: the library's answer is right
        // wherever the reciprocal is exactly representable, and one low where
        // it is not. Asserting the shape of the error rather than tolerating it.
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
        expectExact("gradient r=2", dst.data, refBoxBlurAsImplemented(src.data, W, H, 2), W * H);
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
