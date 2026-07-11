import { describe, it, expect, afterEach, vi } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45)
 * for motion_estimator.ransac / lmeds with homography2d and affine2d kernels.
 *
 * RANSAC/LMEDS draw random subsets via Math.random. To make both sides
 * deterministic AND identical, Math.random is stubbed with the same seeded
 * PRNG sequence for the jsfeatNext run and again (re-seeded) for the oracle.
 *
 * API note (Axis 2): kernels live under jsfeat.motion_model.* in the
 * original; jsfeatNext exposes them as jsfeatNext.homography2d/affine2d.
 */

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

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;

/** ground-truth homography used to synthesize correspondences */
const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];

function makeCorrespondences(n: number, outliers: number) {
    const rand = mulberry32(1234);
    const from: { x: number; y: number }[] = [];
    const to: { x: number; y: number }[] = [];
    for (let i = 0; i < n; i++) {
        const x = 10 + rand() * 300;
        const y = 10 + rand() * 220;
        const wsc = 1.0 / (GT[6] * x + GT[7] * y + GT[8]);
        let X = (GT[0] * x + GT[1] * y + GT[2]) * wsc;
        let Y = (GT[3] * x + GT[4] * y + GT[5]) * wsc;
        if (i < outliers) {
            X += 40 + rand() * 60; // gross outlier
            Y -= 40 + rand() * 60;
        }
        from.push({ x, y });
        to.push({ x: X, y: Y });
    }
    return { from, to };
}

afterEach(() => {
    vi.restoreAllMocks();
});

function seededRandom(seed: number) {
    const r = mulberry32(seed);
    return vi.spyOn(Math, "random").mockImplementation(r);
}

describe("parity: motion_estimator vs original jsfeat.motion_estimator", () => {
    const N = 40;
    const OUT = 6;

    it("ransac with homography2d kernel: same model and same inlier mask", () => {
        const { from, to } = makeCorrespondences(N, OUT);

        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);

        seededRandom(2024);
        const okN = me.ransac(params, kernel, from, to, N, model, mask, 1000);
        vi.restoreAllMocks();

        const paramsO = new jsfeat.ransac_params_t(4, 3.0, 0.5, 0.99);
        const kernelO = new jsfeat.motion_model.homography2d();
        const modelO = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        const maskO = new jsfeat.matrix_t(N, 1, jsfeat.U8_t | jsfeat.C1_t);

        seededRandom(2024); // identical random sequence for the oracle
        const okO = jsfeat.motion_estimator.ransac(paramsO, kernelO, from, to, N, modelO, maskO, 1000);
        vi.restoreAllMocks();

        expect(okN).toBe(okO);
        expect(okN).toBe(true);
        for (let i = 0; i < N; i++) {
            expect(mask.data[i]).toBe(maskO.data[i]);
        }
        for (let i = 0; i < 9; i++) {
            expect(model.data[i]).toBeCloseTo(modelO.data[i], 5);
        }
        // sanity: the outliers must be rejected
        for (let i = 0; i < OUT; i++) {
            expect(mask.data[i]).toBe(0);
        }
    });

    it("lmeds with homography2d kernel: same model and same inlier mask", () => {
        const { from, to } = makeCorrespondences(N, OUT);

        const params = new jsfeatNext.ransac_params_t(4, 0, 0.45, 0.99);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);

        seededRandom(777);
        const okN = me.lmeds(params, kernel, from, to, N, model, mask, 1000);
        vi.restoreAllMocks();

        const paramsO = new jsfeat.ransac_params_t(4, 0, 0.45, 0.99);
        const kernelO = new jsfeat.motion_model.homography2d();
        const modelO = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        const maskO = new jsfeat.matrix_t(N, 1, jsfeat.U8_t | jsfeat.C1_t);

        seededRandom(777);
        const okO = jsfeat.motion_estimator.lmeds(paramsO, kernelO, from, to, N, modelO, maskO, 1000);
        vi.restoreAllMocks();

        expect(okN).toBe(okO);
        for (let i = 0; i < N; i++) {
            expect(mask.data[i]).toBe(maskO.data[i]);
        }
        for (let i = 0; i < 9; i++) {
            expect(model.data[i]).toBeCloseTo(modelO.data[i], 5);
        }
    });

    it("ransac with affine2d kernel: same model and same inlier mask", () => {
        // affine ground truth (no perspective terms)
        const rand = mulberry32(555);
        const from: { x: number; y: number }[] = [];
        const to: { x: number; y: number }[] = [];
        for (let i = 0; i < N; i++) {
            const x = 10 + rand() * 300;
            const y = 10 + rand() * 220;
            let X = 0.9 * x - 0.1 * y + 12;
            let Y = 0.15 * x + 1.05 * y - 8;
            if (i < OUT) {
                X += 50 + rand() * 50;
                Y += 50 + rand() * 50;
            }
            from.push({ x, y });
            to.push({ x: X, y: Y });
        }

        // Regression test for #51: jsfeatNext's motion_model base class was
        // missing the default check_subset() (original jsfeat returns true
        // there; only homography2d overrides it), which made RANSAC with an
        // affine2d kernel throw TypeError. Now fixed — full parity check.
        const params = new jsfeatNext.ransac_params_t(3, 3.0, 0.5, 0.99);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.affine2d;
        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);

        seededRandom(31337);
        const okN = me.ransac(params, kernel, from, to, N, model, mask, 1000);
        vi.restoreAllMocks();

        const paramsO = new jsfeat.ransac_params_t(3, 3.0, 0.5, 0.99);
        const kernelO = new jsfeat.motion_model.affine2d();
        const modelO = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        const maskO = new jsfeat.matrix_t(N, 1, jsfeat.U8_t | jsfeat.C1_t);

        seededRandom(31337); // identical random sequence for the oracle
        const okO = jsfeat.motion_estimator.ransac(paramsO, kernelO, from, to, N, modelO, maskO, 1000);
        vi.restoreAllMocks();

        expect(okN).toBe(okO);
        expect(okN).toBe(true);
        for (let i = 0; i < N; i++) {
            expect(mask.data[i]).toBe(maskO.data[i]);
        }
        for (let i = 0; i < 9; i++) {
            expect(model.data[i]).toBeCloseTo(modelO.data[i], 4);
        }
        // the outliers must be rejected on both sides
        for (let i = 0; i < OUT; i++) {
            expect(mask.data[i]).toBe(0);
        }
    });
});
