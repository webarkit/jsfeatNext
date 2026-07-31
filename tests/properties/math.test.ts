/*
 *  math.test.ts
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
import { rng } from "./helpers";

/**
 * Property/invariant tests for `math` (issue #87, phase 3).
 *
 * Nothing here is compared against the jsfeat oracle — every assertion is a
 * truth about Gaussian kernels, sorting and medians that must hold however the
 * functions are written.
 *
 * `qsort` and `median` are especially good property-test targets: "the output
 * is sorted" and "the result is the middle element" are complete
 * specifications, so these tests pin the behaviour far more tightly than the
 * single fixed input the parity suite uses.
 */

const m = jsfeatNext.math;

/** Sum of the first `size` entries. */
function sum(k: ArrayLike<number>, size: number) {
    let s = 0;
    for (let i = 0; i < size; i++) s += k[i];
    return s;
}

describe("math invariants", () => {
    describe("get_gaussian_kernel", () => {
        // (size, sigma) pairs spanning both code paths: the fixed binomial
        // kernels (odd, size <= 7, sigma <= 0) and the sampled exp() path.
        const cases: [number, number][] = [
            [3, 0],
            [5, 0],
            [7, 0],
            [9, 0],
            [11, 0],
            [5, 1.5],
            [9, 0.5],
            [15, 2],
            [21, 5],
        ];

        it("float kernels are normalized to sum 1", () => {
            for (const [size, sigma] of cases) {
                const k = new Float32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.F32_t);
                expect(sum(k, size)).toBeCloseTo(1, 5);
            }
        });

        it("all weights are non-negative", () => {
            // exp() is strictly positive, so a negative weight can only come
            // from an indexing or normalization mistake.
            for (const [size, sigma] of cases) {
                const k = new Float32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.F32_t);
                for (let i = 0; i < size; i++) expect(k[i]).toBeGreaterThanOrEqual(0);
            }
        });

        it("kernels are symmetric about the centre", () => {
            for (const [size, sigma] of cases) {
                const k = new Float32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.F32_t);
                for (let i = 0; i < size; i++) expect(k[i]).toBeCloseTo(k[size - 1 - i], 6);
            }
        });

        it("the centre tap is the largest (unimodal)", () => {
            for (const [size, sigma] of cases) {
                const k = new Float32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.F32_t);
                const mid = size >> 1;
                for (let i = 0; i < size; i++) expect(k[mid]).toBeGreaterThanOrEqual(k[i]);
            }
        });

        it("weights decrease monotonically away from the centre", () => {
            for (const [size, sigma] of cases) {
                const k = new Float32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.F32_t);
                const mid = size >> 1;
                for (let i = 1; i <= mid; i++) expect(k[i]).toBeGreaterThanOrEqual(k[i - 1]);
            }
        });

        it("a larger sigma flattens the kernel (smaller centre weight)", () => {
            const size = 15;
            let prev = Infinity;
            for (const sigma of [0.5, 1, 2, 4, 8]) {
                const k = new Float32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.F32_t);
                const centre = k[size >> 1];
                expect(centre).toBeLessThan(prev);
                prev = centre;
            }
        });

        it("U8 kernels sum to 256 within the per-tap rounding bound", () => {
            // The integer path computes round(w_i * 256), so each of the `size`
            // taps contributes at most 0.5 of error: |sum - 256| <= size/2.
            // (Worst observed across a wide size/sigma sweep is 3.)
            for (const [size, sigma] of cases) {
                const k = new Int32Array(size);
                m.get_gaussian_kernel(size, sigma, k, jsfeatNext.U8_t);
                expect(Math.abs(sum(k, size) - 256)).toBeLessThanOrEqual(size / 2);
            }
        });

        it("U8 kernels sum to exactly 256 on the fixed binomial path", () => {
            // For odd size <= 7 with sigma <= 0 the weights are exact binary
            // fractions, so scaling by 256 is lossless — no rounding slack.
            for (const size of [1, 3, 5, 7]) {
                const k = new Int32Array(size);
                m.get_gaussian_kernel(size, 0, k, jsfeatNext.U8_t);
                expect(sum(k, size)).toBe(256);
            }
        });
    });

    describe("qsort", () => {
        const asc = (a: number, b: number) => (a < b ? 1 : 0);

        /** Multiset equality — proves the sort permuted rather than invented values. */
        function expectSamePermutation(after: number[], before: number[]) {
            expect([...after].sort((a, b) => a - b)).toEqual([...before].sort((a, b) => a - b));
        }

        function randomArray(n: number, seed: number) {
            const rand = rng(seed);
            return Array.from({ length: n }, () => Math.floor(rand() * 1000));
        }

        it("sorts ascending", () => {
            // Sizes straddle the isort_thresh = 7 cutoff between the insertion
            // sort and the quicksort partitioning.
            for (const n of [2, 5, 7, 8, 20, 100]) {
                const a = randomArray(n, 300 + n);
                m.qsort(a, 0, n - 1, asc);
                for (let i = 1; i < n; i++) expect(a[i]).toBeGreaterThanOrEqual(a[i - 1]);
            }
        });

        it("is a permutation of the input", () => {
            for (const n of [5, 8, 50]) {
                const before = randomArray(n, 400 + n);
                const after = [...before];
                m.qsort(after, 0, n - 1, asc);
                expectSamePermutation(after, before);
            }
        });

        it("is idempotent", () => {
            const a = randomArray(40, 501);
            m.qsort(a, 0, a.length - 1, asc);
            const once = [...a];
            m.qsort(a, 0, a.length - 1, asc);
            expect(a).toEqual(once);
        });

        it("handles already-sorted, reversed and all-equal inputs", () => {
            const sorted = Array.from({ length: 30 }, (_, i) => i);
            const reversed = Array.from({ length: 30 }, (_, i) => 29 - i);
            const equal = new Array(30).fill(5);
            for (const input of [sorted, reversed, equal]) {
                const a = [...input];
                m.qsort(a, 0, a.length - 1, asc);
                for (let i = 1; i < a.length; i++) expect(a[i]).toBeGreaterThanOrEqual(a[i - 1]);
                expectSamePermutation(a, input);
            }
        });

        it("honours a descending comparator", () => {
            const a = randomArray(30, 601);
            m.qsort(a, 0, a.length - 1, (x, y) => (x > y ? 1 : 0));
            for (let i = 1; i < a.length; i++) expect(a[i]).toBeLessThanOrEqual(a[i - 1]);
        });

        it("touches only the requested sub-range", () => {
            const a = [999, 998, ...randomArray(20, 701), 997, 996];
            const before = [...a];
            const low = 2;
            const high = a.length - 3;
            m.qsort(a, low, high, asc);

            // sentinels outside [low, high] are untouched
            expect(a[0]).toBe(before[0]);
            expect(a[1]).toBe(before[1]);
            expect(a[a.length - 1]).toBe(before[before.length - 1]);
            expect(a[a.length - 2]).toBe(before[before.length - 2]);
            // and the sub-range is a sorted permutation of what it held
            for (let i = low + 1; i <= high; i++) expect(a[i]).toBeGreaterThanOrEqual(a[i - 1]);
            expectSamePermutation(a.slice(low, high + 1), before.slice(low, high + 1));
        });

        it("leaves a single-element or empty range alone", () => {
            const a = [3, 1, 2];
            const copy = [...a];
            m.qsort(a, 1, 1, asc); // single element
            expect(a).toEqual(copy);
            m.qsort(a, 2, 1, asc); // empty (high < low)
            expect(a).toEqual(copy);
        });
    });

    describe("median", () => {
        /**
         * `median` returns `array[(low + high) >> 1]` after quickselect, i.e.
         * the LOWER middle element for an even-length range. Verified against a
         * sorted copy across odd and even lengths.
         */
        function lowerMedianOf(values: number[], low: number, high: number) {
            const sorted = values.slice(low, high + 1).sort((a, b) => a - b);
            return sorted[((low + high) >> 1) - low];
        }

        it("equals the lower-middle element of the sorted range", () => {
            for (const n of [1, 2, 3, 4, 5, 8, 9, 12, 33]) {
                const rand = rng(800 + n);
                const values = Array.from({ length: n }, () => Math.floor(rand() * 100));
                expect(m.median([...values], 0, n - 1)).toBe(lowerMedianOf(values, 0, n - 1));
            }
        });

        it("returns a value that was actually present in the input", () => {
            const rand = rng(901);
            const values = Array.from({ length: 25 }, () => Math.floor(rand() * 100));
            expect(values).toContain(m.median([...values], 0, values.length - 1));
        });

        it("is independent of the input ordering", () => {
            const rand = rng(902);
            const values = Array.from({ length: 21 }, () => Math.floor(rand() * 100));
            const want = m.median([...values], 0, values.length - 1);
            const shuffle = rng(903);
            for (let trial = 0; trial < 5; trial++) {
                const permuted = [...values];
                for (let i = permuted.length - 1; i > 0; i--) {
                    const j = Math.floor(shuffle() * (i + 1));
                    [permuted[i], permuted[j]] = [permuted[j], permuted[i]];
                }
                expect(m.median(permuted, 0, permuted.length - 1)).toBe(want);
            }
        });

        it("returns the constant for a constant array", () => {
            expect(m.median(new Array(17).fill(42), 0, 16)).toBe(42);
        });

        it("works on a sub-range and leaves outside elements untouched", () => {
            const a = [99, 98, 5, 3, 1, 4, 2, 97];
            expect(m.median(a, 2, 6)).toBe(3); // median of [5,3,1,4,2]
            expect(a[0]).toBe(99);
            expect(a[1]).toBe(98);
            expect(a[7]).toBe(97);
        });

        it("accepts typed arrays (motion_estimator.lmeds passes a Float32Array)", () => {
            const values = Float32Array.from([5.5, 1.25, 9, 3.5, 7]);
            expect(m.median(values, 0, 4)).toBe(5.5);
        });
    });
});
