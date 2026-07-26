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
});
