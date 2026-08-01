/*
 *  known-values.test.ts
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
import { F32C1, rng, dstImage } from "../properties/helpers";
import { refGrayscaleFixedPoint, refGrayscaleExact } from "./reference-impl";

/**
 * Closed-form ground truth (issue #87, category C1).
 *
 * Where the reference-implementation tests check that the optimised code
 * computes the same thing as the definition, these check that the definition
 * itself is right — the constants, the normalisation, the conventions. A
 * reference implementation cannot catch a wrong constant, because the same
 * misunderstanding would be encoded on both sides.
 *
 * Three kinds appear here:
 *
 *  1. Known constants, verifiable on paper (the binomial Gaussian kernels).
 *  2. An approximation checked against the standard it approximates (jsfeat's
 *     integer luma weights against real-valued BT.601).
 *  3. Inputs CONSTRUCTED from a known answer, so the truth needs no second
 *     implementation at all (SVD, homography).
 */

describe("grayscale: BT.601 luma", () => {
    const W = 16;
    const H = 12;

    function randomRGBA(seed: number) {
        const rand = rng(seed);
        const rgba = new Uint8Array(W * H * 4);
        for (let i = 0; i < rgba.length; i++) rgba[i] = (rand() * 256) | 0;
        return rgba;
    }

    it("matches the documented 14-bit fixed-point formula exactly", () => {
        // Checks the loop, stride and channel handling. Shares the constants
        // with the implementation, so the next test is the one that validates
        // those constants.
        const rgba = randomRGBA(11);
        const dst = dstImage(W, H);
        jsfeatNext.imgproc.grayscale(rgba, W, H, dst);

        const want = refGrayscaleFixedPoint(rgba, W, H);
        for (let i = 0; i < W * H; i++) expect(dst.data[i]).toBe(want[i]);
    });

    it("stays within 1 of real-valued BT.601, proving the constants are right", () => {
        // ITU-R BT.601-7: Y = 0.299 R + 0.587 G + 0.114 B. jsfeat approximates
        // this with 4899/9617/1868 over 2^14. If a constant were wrong — a
        // transposed digit, a red/blue swap — the fixed-point result would
        // drift from the standard even though it still matched itself.
        const rgba = randomRGBA(12);
        const dst = dstImage(W, H);
        jsfeatNext.imgproc.grayscale(rgba, W, H, dst);

        const exact = refGrayscaleExact(rgba, W, H);
        let worst = 0;
        for (let i = 0; i < W * H; i++) worst = Math.max(worst, Math.abs(dst.data[i] - exact[i]));
        expect(worst).toBeLessThanOrEqual(1);
    });

    it("uses the exact scaled weights, checked one channel at a time", () => {
        // Pure red, green and blue pixels isolate each coefficient, so a
        // channel swap cannot hide behind the others.
        for (const [channel, weight] of [
            [0, 0.299],
            [1, 0.587],
            [2, 0.114],
        ] as [number, number][]) {
            const rgba = new Uint8Array(4);
            rgba[channel] = 255;
            rgba[3] = 255;
            const dst = dstImage(1, 1);
            jsfeatNext.imgproc.grayscale(rgba, 1, 1, dst);
            expect(Math.abs(dst.data[0] - 255 * weight)).toBeLessThanOrEqual(1);
        }
    });
});

describe("get_gaussian_kernel: the binomial kernels are exact", () => {
    it("sizes 3 and 5 are the binomial rows, size 7 is jsfeat's own kernel", () => {
        // For odd size <= 7 with sigma <= 0 jsfeat uses fixed tables. Sizes 3
        // and 5 are the normalised rows of Pascal's triangle — [1,2,1]/4 and
        // [1,4,6,4,1]/16 — but size 7 is [2,7,14,18,14,7,2]/64, NOT Pascal's
        // [1,6,15,20,15,6,1]/64. All are exact binary fractions over 64, so
        // they can be asserted to the bit.
        const expected: Record<number, number[]> = {
            3: [0.25, 0.5, 0.25],
            5: [0.0625, 0.25, 0.375, 0.25, 0.0625],
            7: [0.03125, 0.109375, 0.21875, 0.28125, 0.21875, 0.109375, 0.03125],
        };
        for (const size of [3, 5, 7]) {
            const kernel = new Float32Array(size);
            jsfeatNext.math.get_gaussian_kernel(size, 0, kernel, jsfeatNext.F32_t);
            for (let i = 0; i < size; i++) expect(kernel[i]).toBe(expected[size][i]);
        }
    });

    it("size 7 is [2,7,14,18,14,7,2]/64, flatter than the binomial row", () => {
        // Recorded explicitly because it is a surprise: the pattern set by
        // sizes 3 and 5 does not continue. Pascal's row 6 would be
        // [1,6,15,20,15,6,1]/64; jsfeat ships a flatter kernel with more weight
        // in the tails. Pinned so a future rewrite cannot "correct" it to the
        // binomial row and silently change every 7-tap blur in the library.
        const kernel = new Float32Array(7);
        jsfeatNext.math.get_gaussian_kernel(7, 0, kernel, jsfeatNext.F32_t);

        const asSixtyFourths = Array.from(kernel, (v) => v * 64);
        expect(asSixtyFourths).toEqual([2, 7, 14, 18, 14, 7, 2]);

        const pascal = [1, 6, 15, 20, 15, 6, 1];
        expect(asSixtyFourths).not.toEqual(pascal);
        // both sum to 64, so jsfeat's is a valid normalised kernel — just a
        // different one, with a lower peak and heavier tails
        expect(asSixtyFourths.reduce((a, b) => a + b, 0)).toBe(64);
        expect(asSixtyFourths[3]).toBeLessThan(pascal[3]);
        expect(asSixtyFourths[0]).toBeGreaterThan(pascal[0]);
    });
});

describe("SVD: singular values chosen in advance are recovered", () => {
    /** Builds `A = U diag(w) Vᵀ` from two rotations and chosen singular values. */
    function buildFromKnown(w: number[], angleU: number, angleV: number) {
        const rot = (t: number) => [Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1];
        const U = rot(angleU);
        const V = rot(angleV);
        const A = new Array(9).fill(0);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let acc = 0;
                for (let k = 0; k < 3; k++) acc += U[i * 3 + k] * w[k] * V[j * 3 + k];
                A[i * 3 + j] = acc;
            }
        }
        return A;
    }

    it("recovers 9, 4, 1 from a matrix built to have them", () => {
        // No second SVD is involved: the input was manufactured from the
        // answer, so the expected values are known by construction.
        const want = [9, 4, 1];
        const A = new jsfeatNext.matrix_t(3, 3, F32C1);
        A.data.set(buildFromKnown(want, 0.7, 1.3));

        const W = new jsfeatNext.matrix_t(1, 3, F32C1);
        const U = new jsfeatNext.matrix_t(3, 3, F32C1);
        const V = new jsfeatNext.matrix_t(3, 3, F32C1);
        jsfeatNext.linalg.svd_decompose(A, W, U, V, 0);

        for (let i = 0; i < 3; i++) expect(W.data[i]).toBeCloseTo(want[i], 4);
    });

    it("handles a wide spread of magnitudes", () => {
        const want = [100, 10, 0.5];
        const A = new jsfeatNext.matrix_t(3, 3, F32C1);
        A.data.set(buildFromKnown(want, 0.3, 2.1));

        const W = new jsfeatNext.matrix_t(1, 3, F32C1);
        const U = new jsfeatNext.matrix_t(3, 3, F32C1);
        const V = new jsfeatNext.matrix_t(3, 3, F32C1);
        jsfeatNext.linalg.svd_decompose(A, W, U, V, 0);

        for (let i = 0; i < 3; i++) expect(W.data[i]).toBeCloseTo(want[i], 3);
    });
});

describe("homography2d: a known transform is recovered from the points it maps", () => {
    it("recovers the matrix used to generate the correspondences", () => {
        // Choose H, push four points through it, then require the solver to
        // reconstruct H. Homographies are defined up to scale, so both sides
        // are normalised by the bottom-right entry before comparing.
        const H = [1.2, 0.1, 15, -0.05, 0.95, -8, 0.0003, -0.0002, 1.0];
        const from = [
            { x: 10, y: 10 },
            { x: 200, y: 20 },
            { x: 190, y: 150 },
            { x: 20, y: 160 },
        ];
        const to = from.map((p) => {
            const wgt = H[6] * p.x + H[7] * p.y + H[8];
            return {
                x: (H[0] * p.x + H[1] * p.y + H[2]) / wgt,
                y: (H[3] * p.x + H[4] * p.y + H[5]) / wgt,
            };
        });

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        jsfeatNext.homography2d.run(from, to, model, 4);

        for (let i = 0; i < 9; i++) {
            expect(model.data[i] / model.data[8]).toBeCloseTo(H[i] / H[8], 3);
        }
    });

    it("recovers a pure translation", () => {
        // A case whose answer is obvious by inspection, so a reader can check
        // the test itself without trusting the general construction above.
        const from = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 100 },
            { x: 0, y: 100 },
        ];
        const to = from.map((p) => ({ x: p.x + 25, y: p.y - 40 }));

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        jsfeatNext.homography2d.run(from, to, model, 4);

        const m = Array.from({ length: 9 }, (_, i) => model.data[i] / model.data[8]);
        expect(m[0]).toBeCloseTo(1, 4);
        expect(m[1]).toBeCloseTo(0, 4);
        expect(m[2]).toBeCloseTo(25, 3);
        expect(m[3]).toBeCloseTo(0, 4);
        expect(m[4]).toBeCloseTo(1, 4);
        expect(m[5]).toBeCloseTo(-40, 3);
    });
});

describe("mat3x3_determinant: hand-computed values", () => {
    it("matches cofactor expansion on paper", () => {
        // det = 1(5*9 - 6*8) - 2(4*9 - 6*7) + 3(4*8 - 5*7)
        //     = 1(-3) - 2(-6) + 3(-3) = -3 + 12 - 9 = 0   (singular)
        const singular = new jsfeatNext.matrix_t(3, 3, F32C1);
        singular.data.set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(jsfeatNext.matmath.mat3x3_determinant(singular)).toBeCloseTo(0, 5);

        // det = 2(1*1 - 0*0) - 0 + 0 = 2 ... for diag-ish [[2,0,0],[0,3,0],[0,0,4]]
        const diagonal = new jsfeatNext.matrix_t(3, 3, F32C1);
        diagonal.data.set([2, 0, 0, 0, 3, 0, 0, 0, 4]);
        expect(jsfeatNext.matmath.mat3x3_determinant(diagonal)).toBeCloseTo(24, 5);

        // a worked non-trivial case:
        // det = 6(-2*2 - 5*8) - 1(4*2 - 5*7) + 1(4*8 - (-2)*7)
        //     = 6(-44) - 1(-27) + 1(46) = -264 + 27 + 46 = -191
        const general = new jsfeatNext.matrix_t(3, 3, F32C1);
        general.data.set([6, 1, 1, 4, -2, 5, 7, 8, 2]);
        expect(jsfeatNext.matmath.mat3x3_determinant(general)).toBeCloseTo(-191, 4);
    });
});
