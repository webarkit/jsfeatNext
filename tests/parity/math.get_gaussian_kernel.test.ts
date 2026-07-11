import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization test (Phase 0, issue #39).
 *
 * Asserts that jsfeatNext reproduces the *original* jsfeat output bit-for-bit
 * (within float tolerance) for a pure, deterministic function. `jsfeat` (npm)
 * is the golden oracle; if this passes, the behavior is pinned and any future
 * de-duplication refactor (#47) can be proven behavior-preserving.
 */
describe("parity: math.get_gaussian_kernel vs original jsfeat", () => {
    const cases = [
        { size: 3, sigma: 0 }, // sigma derived from size (OpenCV formula)
        { size: 5, sigma: 1.2 },
        { size: 7, sigma: 2.5 },
        { size: 9, sigma: 0 },
    ];

    for (const { size, sigma } of cases) {
        it(`size=${size} sigma=${sigma}`, () => {
            const expected = new Float32Array(size);
            jsfeat.math.get_gaussian_kernel(size, sigma, expected, jsfeat.F32_t | jsfeat.C1_t);

            const actual = new Float32Array(size);
            const m = jsfeatNext.math;
            m.get_gaussian_kernel(size, sigma, actual, jsfeatNext.F32_t | jsfeatNext.C1_t);

            for (let i = 0; i < size; i++) {
                expect(actual[i]).toBeCloseTo(expected[i], 6);
            }
        });
    }
});
