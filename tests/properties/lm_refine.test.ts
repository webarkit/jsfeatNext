/*
 *  lm_refine.test.ts
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

import { describe, it, expect, vi, afterEach } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import type { LMCallback } from "../../src/linalg/linalg";

/**
 * Tests for issue #187: `linalg.lm_solve` (Levenberg-Marquardt) and its two
 * callers, `homography2d.refine` / `affine2d.refine`, which minimize actual
 * reprojection error over the inlier set — the polish `run()`'s linear DLT
 * fit and the #185 refit can't reach, since both minimize an algebraic
 * residual instead.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const F64C1 = jsfeatNext.F64_t | jsfeatNext.C1_t;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;

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

function project(m: ArrayLike<number>, x: number, y: number) {
    const ww = 1.0 / (m[6] * x + m[7] * y + m[8]);
    return { x: (m[0] * x + m[1] * y + m[2]) * ww, y: (m[3] * x + m[4] * y + m[5]) * ww };
}

afterEach(() => {
    vi.restoreAllMocks();
});

describe("linalg.lm_solve", () => {
    it("grows lambda and retries when cholesky_solve reports a singular damped system", () => {
        // The damped system JtJ + λI is always SPD for λ > 0 (JtJ = JᵀJ is
        // always PSD by construction), so this branch is unreachable through
        // any real Jacobian -- it exists purely as a defensive guard.
        // Verified directly by making cholesky_solve fail once, confirming
        // lm_solve retries with a larger λ instead of accepting garbage.
        let solveCalls = 0;
        const solveSpy = vi.spyOn(jsfeatNext.linalg, "cholesky_solve").mockImplementation((A, B) => {
            solveCalls++;
            if (solveCalls === 1) return 0; // force one failure
            return Object.getPrototypeOf(jsfeatNext.linalg).cholesky_solve.call(jsfeatNext.linalg, A, B);
        });

        const callback: LMCallback = {
            compute(params, err, J) {
                err[0] = params[0] - 5;
                if (J) J[0] = 1;
                return true;
            },
        };
        const params = new jsfeatNext.matrix_t(1, 1, F64C1);
        params.data[0] = 0;

        const ok = jsfeatNext.linalg.lm_solve(params, 1, callback, 10);

        expect(solveCalls).toBeGreaterThan(1); // retried after the forced failure
        expect(ok).toBe(true);
        expect(params.data[0]).toBeCloseTo(5, 6);
        solveSpy.mockRestore();
    });

    it("fits a nonlinear model (exponential decay) to its known true parameters", () => {
        // y = A * exp(-B * x); classic textbook nonlinear-least-squares
        // known-answer problem, independent of any homography/affine
        // machinery — exercises the solver itself.
        const A_true = 2.5,
            B_true = 0.7;
        const xs: number[] = [],
            ys: number[] = [];
        for (let i = 0; i < 20; i++) {
            const x = i * 0.3;
            xs.push(x);
            ys.push(A_true * Math.exp(-B_true * x));
        }

        const callback: LMCallback = {
            compute(params, err, J) {
                const A = params[0],
                    B = params[1];
                for (let i = 0; i < xs.length; i++) {
                    const e = Math.exp(-B * xs[i]);
                    err[i] = A * e - ys[i];
                    if (J) {
                        J[i * 2 + 0] = e;
                        J[i * 2 + 1] = -A * xs[i] * e;
                    }
                }
                return true;
            },
        };

        const params = new jsfeatNext.matrix_t(1, 2, F64C1);
        params.data[0] = 1.0; // deliberately off initial guesses
        params.data[1] = 0.1;

        const ok = jsfeatNext.linalg.lm_solve(params, xs.length, callback, 30, 1e-14);

        expect(ok).toBe(true);
        expect(params.data[0]).toBeCloseTo(A_true, 6);
        expect(params.data[1]).toBeCloseTo(B_true, 6);
    });

    it("aborts mid-retry when the callback reports degeneracy for a trial step", () => {
        // A trivial well-posed 1-param linear problem (err = x - 5), so the
        // very first LM step is a real improving step -- call #1 is the
        // initial compute(x, ...), call #2 is that step's trial evaluation
        // (compute(xNew, ..., null)), which this callback fails on purpose.
        let calls = 0;
        const callback: LMCallback = {
            compute(params, err, J) {
                calls++;
                if (calls === 2) return false;
                err[0] = params[0] - 5;
                if (J) J[0] = 1;
                return true;
            },
        };
        const params = new jsfeatNext.matrix_t(1, 1, F64C1);
        params.data[0] = 0;

        const ok = jsfeatNext.linalg.lm_solve(params, 1, callback, 10);
        expect(ok).toBe(false);
    });

    it("aborts when the callback reports degeneracy while recomputing the Jacobian at an accepted step", () => {
        // Same problem, but the callback fails on call #3: #1 is the initial
        // compute, #2 is the (accepted, improving) trial step's evaluation,
        // #3 is lm_solve recomputing J at that newly-accepted x for the next
        // iteration.
        let calls = 0;
        const callback: LMCallback = {
            compute(params, err, J) {
                calls++;
                if (calls === 3) return false;
                err[0] = params[0] - 5;
                if (J) J[0] = 1;
                return true;
            },
        };
        const params = new jsfeatNext.matrix_t(1, 1, F64C1);
        params.data[0] = 0;

        const ok = jsfeatNext.linalg.lm_solve(params, 1, callback, 10);
        expect(ok).toBe(false);
        // the accepted step from before the failure is still visible
        expect(params.data[0]).not.toBe(0);
    });

    it("reports failure when the callback reports degeneracy, and leaves params at their last value", () => {
        const params = new jsfeatNext.matrix_t(1, 2, F64C1);
        params.data[0] = 1;
        params.data[1] = 2;

        const callback: LMCallback = {
            compute: () => false,
        };

        const ok = jsfeatNext.linalg.lm_solve(params, 4, callback, 10);
        expect(ok).toBe(false);
        // untouched: compute() never wrote to params itself (only lm_solve
        // would have, and it never got the chance)
        expect(params.data[0]).toBe(1);
        expect(params.data[1]).toBe(2);
    });
});

describe("homography2d.refine", () => {
    const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];

    function makeNoisyCorrespondences(n: number, jitterPx: number, seed: number) {
        const rand = mulberry32(seed);
        const from: { x: number; y: number }[] = [];
        const to: { x: number; y: number }[] = [];
        for (let i = 0; i < n; i++) {
            const x = 10 + rand() * 300,
                y = 10 + rand() * 220;
            const p = project(GT, x, y);
            from.push({ x, y });
            to.push({ x: p.x + (rand() * 2 - 1) * jitterPx, y: p.y + (rand() * 2 - 1) * jitterPx });
        }
        return { from, to };
    }

    function reprojSqErr(m: ArrayLike<number>, from: { x: number; y: number }[], to: { x: number; y: number }[]) {
        let sum = 0;
        for (let i = 0; i < from.length; i++) {
            const p = project(m, from[i].x, from[i].y);
            sum += (p.x - to[i].x) ** 2 + (p.y - to[i].y) ** 2;
        }
        return sum;
    }

    it("analytic Jacobian matches a finite-difference Jacobian", () => {
        const from = [
            { x: 12, y: 40 },
            { x: 200, y: 30 },
            { x: 90, y: 220 },
            { x: 150, y: 100 },
            { x: 60, y: 180 },
        ];
        const to = [
            { x: 20, y: 45 },
            { x: 205, y: 35 },
            { x: 95, y: 225 },
            { x: 155, y: 105 },
            { x: 65, y: 185 },
        ];
        const h = [1.02, 0.01, 5, -0.02, 0.99, -3, 0.0001, -0.00005, 1.0];
        const count = from.length;

        function compute(hh: number[], err: Float64Array) {
            for (let i = 0; i < count; i++) {
                const Mx = from[i].x,
                    My = from[i].y;
                const ww = 1.0 / (hh[6] * Mx + hh[7] * My + hh[8]);
                err[2 * i] = (hh[0] * Mx + hh[1] * My + hh[2]) * ww - to[i].x;
                err[2 * i + 1] = (hh[3] * Mx + hh[4] * My + hh[5]) * ww - to[i].y;
            }
        }

        // Analytic Jacobian, same formulas as homography2d.refine's own callback.
        const analytic = new Float64Array(2 * count * 9);
        for (let i = 0; i < count; i++) {
            const Mx = from[i].x,
                My = from[i].y;
            const ww = 1.0 / (h[6] * Mx + h[7] * My + h[8]);
            const xi = (h[0] * Mx + h[1] * My + h[2]) * ww;
            const yi = (h[3] * Mx + h[4] * My + h[5]) * ww;
            const r0 = 2 * i * 9,
                r1 = (2 * i + 1) * 9;
            analytic[r0 + 0] = Mx * ww;
            analytic[r0 + 1] = My * ww;
            analytic[r0 + 2] = ww;
            analytic[r0 + 6] = -xi * ww * Mx;
            analytic[r0 + 7] = -xi * ww * My;
            analytic[r0 + 8] = -xi * ww;
            analytic[r1 + 3] = Mx * ww;
            analytic[r1 + 4] = My * ww;
            analytic[r1 + 5] = ww;
            analytic[r1 + 6] = -yi * ww * Mx;
            analytic[r1 + 7] = -yi * ww * My;
            analytic[r1 + 8] = -yi * ww;
        }

        // Central-difference Jacobian.
        const delta = 1e-6;
        const fd = new Float64Array(2 * count * 9);
        const errPlus = new Float64Array(2 * count);
        const errMinus = new Float64Array(2 * count);
        for (let p = 0; p < 9; p++) {
            const hPlus = h.slice();
            hPlus[p] += delta;
            const hMinus = h.slice();
            hMinus[p] -= delta;
            compute(hPlus, errPlus);
            compute(hMinus, errMinus);
            for (let r = 0; r < 2 * count; r++) fd[r * 9 + p] = (errPlus[r] - errMinus[r]) / (2 * delta);
        }

        // Relative tolerance: the perspective-term columns (6, 7) scale with
        // xi*Mx, which runs into the thousands for these point coordinates —
        // central-difference roundoff on values that large exceeds a fixed
        // absolute tolerance without the Jacobian itself being wrong.
        let maxRelDiff = 0;
        for (let i = 0; i < 2 * count * 9; i++) {
            maxRelDiff = Math.max(maxRelDiff, Math.abs(analytic[i] - fd[i]) / (Math.abs(analytic[i]) + 1));
        }
        expect(maxRelDiff).toBeLessThan(1e-4);
    });

    it("reduces true reprojection error on noisy correspondences below the linear DLT fit", () => {
        const N = 30;
        const { from, to } = makeNoisyCorrespondences(N, 0.8, 555);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const ok1 = jsfeatNext.homography2d.run(from, to, model, N);
        expect(ok1).toBe(1);
        const errBefore = reprojSqErr(model.data as Float32Array, from, to);

        const okR = jsfeatNext.homography2d.refine(from, to, model, N, 15);

        expect(okR).toBe(1);
        expect(model.data[8]).toBe(1);
        expect(reprojSqErr(model.data as Float32Array, from, to)).toBeLessThanOrEqual(errBefore);
    });

    it("guards the per-point perspective denominator (ww) against a near-zero value instead of dividing by it", () => {
        // A point exactly on the vanishing line h6*x + h7*y + h8 = 0 makes
        // the raw denominator zero; refine() must fall back to ww=0 for that
        // residual (matching OpenCV's `fabs(ww) > DBL_EPSILON ? 1./ww : 0`)
        // rather than propagating Infinity/NaN into the Jacobian and cost.
        const h = [1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0]; // h8=0, vanishing line is x=0
        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        model.data.set(h);

        const from = [
            { x: 0, y: 5 }, // denominator = 1*0 + 0*5 + 0 = 0 (exactly on the vanishing line)
            { x: 10, y: 5 },
            { x: 20, y: 8 },
            { x: 15, y: 30 },
        ];
        const to = [
            { x: 3, y: 5 },
            { x: 12, y: 6 },
            { x: 22, y: 9 },
            { x: 17, y: 31 },
        ];

        // h8=0 fails run()'s own "must already have h33=1" precondition, so
        // exercise refine() directly with a hand-built starting model —
        // still a valid smoke test of the ww guard without depending on the
        // DLT solver landing on this exact degenerate configuration.
        expect(() => jsfeatNext.homography2d.refine(from, to, model, 4, 5)).not.toThrow();
        for (let i = 0; i < 9; i++) expect(Number.isFinite(model.data[i])).toBe(true);
    });

    it("a refined h33 too close to zero to rescale is reported as degenerate (0), matching run()'s own guard", () => {
        // Reuse #186's deterministic near-degenerate case (nearly-collinear
        // points): the DLT fit already returns 0 for it (see
        // tests/divergences.test.ts), so there is no successfully-run model
        // to call refine() on in the first place here — this test instead
        // confirms refine() applies the *same* h33-degeneracy policy as
        // run() by starting LM from a model whose h33 is already ~0 and
        // checking it doesn't get forcibly rescaled into a corrupted result.
        const from = [
            { x: 10, y: 10 },
            { x: 60, y: 60 },
            { x: 110, y: 110 },
            { x: 160, y: 160 },
        ];
        const to = [
            { x: 10.37, y: 10.37 },
            { x: 76.14, y: 76.14 },
            { x: 179.9, y: 179.9 },
            { x: 367.95, y: 367.95 },
        ];
        // A model whose h33 is exactly 0 to start LM from directly (rather
        // than depending on where LM happens to wander).
        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        model.data.set([1, 0, 0, 0, 1, 0, 0.01, 0.01, 0]);

        const ok = jsfeatNext.homography2d.refine(from, to, model, 4, 1);
        // Either LM moves h33 away from zero (success) or it can't and
        // refine reports degeneracy (0) rather than a corrupted model with
        // h33 forced to 1 without an equivalent rescale of the other 8
        // coefficients (the bug #192's Qodo review caught in run()'s own guard).
        if (ok === 1) {
            expect(model.data[8]).toBe(1);
        } else {
            expect(ok).toBe(0);
        }
    });
});

describe("affine2d.refine", () => {
    it("leaves the model effectively unchanged: LM from the exact least-squares seed has nothing to improve", () => {
        // affine2d.run() already solves the exact 6-parameter least-squares
        // optimum via normal equations, so LM seeded from it has zero
        // gradient from the start (issue #187's own note: estimateAffine2D
        // skips the extra runKernel findHomography does, since LM alone
        // already converges to the LS answer for a linear model).
        const rand = mulberry32(11);
        const N = 20;
        const from: { x: number; y: number }[] = [],
            to: { x: number; y: number }[] = [];
        for (let i = 0; i < N; i++) {
            const x = 10 + rand() * 300,
                y = 10 + rand() * 220;
            from.push({ x, y });
            to.push({ x: 0.9 * x - 0.1 * y + 12, y: 0.15 * x + 1.05 * y - 8 });
        }

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        jsfeatNext.affine2d.run(from, to, model, N);
        const before = Array.from(model.data as Float32Array);

        const ok = jsfeatNext.affine2d.refine(from, to, model, N, 10);

        expect(ok).toBe(1);
        for (let i = 0; i < 6; i++) expect(model.data[i]).toBeCloseTo(before[i], 4);
        expect(model.data[6]).toBe(0);
        expect(model.data[7]).toBe(0);
        expect(model.data[8]).toBe(1);
    });
});

describe("motion_estimator.find_homography with refine_iters", () => {
    it("defaults to refine_iters=0: no behavior change from before #187", () => {
        const N = 30;
        const rand = mulberry32(42);
        const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];
        const from: { x: number; y: number }[] = [],
            to: { x: number; y: number }[] = [];
        for (let i = 0; i < N; i++) {
            const x = 10 + rand() * 300,
                y = 10 + rand() * 220;
            from.push({ x, y });
            to.push(project(GT, x, y));
        }

        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const modelDefault = new jsfeatNext.matrix_t(3, 3, F32C1);
        const okDefault = me.find_homography(params, kernel, from, to, N, modelDefault);

        const modelExplicitZero = new jsfeatNext.matrix_t(3, 3, F32C1);
        const okZero = me.find_homography(params, kernel, from, to, N, modelExplicitZero, undefined, "ransac", 1000, 0);

        expect(okDefault).toBe(true);
        expect(okZero).toBe(true);
        for (let i = 0; i < 9; i++) expect(modelDefault.data[i]).toBe(modelExplicitZero.data[i]);
    });

    it("with refine_iters > 0, polishes the model over the final inlier set without throwing", () => {
        const N = 30;
        const OUT = 4;
        const rand = mulberry32(7);
        const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];
        const from: { x: number; y: number }[] = [],
            to: { x: number; y: number }[] = [];
        for (let i = 0; i < N; i++) {
            const x = 10 + rand() * 300,
                y = 10 + rand() * 220;
            const p = project(GT, x, y);
            let X = p.x,
                Y = p.y;
            if (i < OUT) {
                X += 40 + rand() * 60;
                Y -= 40 + rand() * 60;
            }
            from.push({ x, y });
            to.push({ x: X, y: Y });
        }

        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        const ok = me.find_homography(params, kernel, from, to, N, model, mask, "ransac", 1000, 10);

        expect(ok).toBe(true);
        expect(model.data[8]).toBe(1);
        for (let i = 0; i < OUT; i++) expect(mask.data[i]).toBe(0);
    });
});
