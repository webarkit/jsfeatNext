import { describe, it, expect, vi } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45)
 * for the remaining jsfeatNext.math functions: qsort, median, and the
 * deprecated matrix_t-based perspective_4point_transform (kept for parity
 * with the distributed jsfeat bundle, where it lives under jsfeat.math).
 */

function rng(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const m = jsfeatNext.math;
// identical "less than" comparator for both implementations
const lt = (a: number, b: number) => (a < b ? 1 : 0);

describe("parity: math.qsort / math.median vs original jsfeat.math", () => {
    it("qsort sorts identically", () => {
        const rand = rng(42);
        const a: number[] = Array.from({ length: 101 }, () => Math.round(rand() * 1000) - 500);
        const b = a.slice();
        m.qsort(a, 0, a.length - 1, lt);
        jsfeat.math.qsort(b, 0, b.length - 1, lt);
        expect(a).toEqual(b);
    });

    it("qsort on a sub-range only", () => {
        const rand = rng(7);
        const a: number[] = Array.from({ length: 50 }, () => Math.round(rand() * 100));
        const b = a.slice();
        m.qsort(a, 10, 39, lt);
        jsfeat.math.qsort(b, 10, 39, lt);
        expect(a).toEqual(b);
    });

    it("median returns the same value", () => {
        for (const seed of [1, 2, 3]) {
            const rand = rng(seed);
            const a: number[] = Array.from({ length: 31 }, () => Math.round(rand() * 255));
            const b = a.slice();
            const mv = m.median(a, 0, a.length - 1);
            const ov = jsfeat.math.median(b, 0, b.length - 1);
            expect(mv).toBe(ov);
        }
    });
});

describe("parity: deprecated math.perspective_4point_transform vs jsfeat.math (bundle)", () => {
    it("matches the bundle's matrix_t-based version", () => {
        // silence the intentional deprecation warning during the test
        const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

        const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
        const next = new jsfeatNext.matrix_t(3, 3, F32C1);
        const orig = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        const s = [10, 12, 300, 8, 315, 230, 5, 240];
        const d = [24.5, 18.2, 300.1, 12.7, 289.4, 230.6, 31.8, 221.9];
        m.perspective_4point_transform(
            next,
            s[0],
            s[1],
            d[0],
            d[1],
            s[2],
            s[3],
            d[2],
            d[3],
            s[4],
            s[5],
            d[4],
            d[5],
            s[6],
            s[7],
            d[6],
            d[7]
        );
        jsfeat.math.perspective_4point_transform(
            orig,
            s[0],
            s[1],
            d[0],
            d[1],
            s[2],
            s[3],
            d[2],
            d[3],
            s[4],
            s[5],
            d[4],
            d[5],
            s[6],
            s[7],
            d[6],
            d[7]
        );
        for (let i = 0; i < 9; i++) {
            expect(next.data[i]).toBeCloseTo(orig.data[i], 5);
        }
        expect(warn).toHaveBeenCalled(); // parity note: jsfeatNext adds a deprecation warning
        warn.mockRestore();
    });
});
