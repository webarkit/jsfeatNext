/*
 *  find_homography.test.ts
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

import { describe, it, expect, afterEach, vi } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";

/**
 * Property tests for `motion_estimator.find_homography` (issue #185, Option
 * B): the caller-level layer composing `ransac`/`lmeds` with a refit over the
 * winning hypothesis's inlier set and a mask recomputed against the refit
 * model. `ransac()`/`lmeds()` themselves keep their own parity coverage in
 * `tests/parity/motion_estimator.test.ts` and are untouched by this file.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;

const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];

function project(m: number[], x: number, y: number): { x: number; y: number } {
    const ww = 1.0 / (m[6] * x + m[7] * y + m[8]);
    return { x: (m[0] * x + m[1] * y + m[2]) * ww, y: (m[3] * x + m[4] * y + m[5]) * ww };
}

function reprojectionError(m: Float32Array, from: { x: number; y: number }[], to: { x: number; y: number }[]) {
    let maxErr = 0;
    for (let i = 0; i < from.length; i++) {
        const p = project(Array.from(m), from[i].x, from[i].y);
        const dx = p.x - to[i].x,
            dy = p.y - to[i].y;
        maxErr = Math.max(maxErr, Math.sqrt(dx * dx + dy * dy));
    }
    return maxErr;
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

function makeCorrespondences(n: number, outliers: number, seed: number) {
    const rand = mulberry32(seed);
    const from: { x: number; y: number }[] = [];
    const to: { x: number; y: number }[] = [];
    for (let i = 0; i < n; i++) {
        const x = 10 + rand() * 300;
        const y = 10 + rand() * 220;
        const p = project(GT, x, y);
        let X = p.x,
            Y = p.y;
        if (i < outliers) {
            X += 40 + rand() * 60;
            Y -= 40 + rand() * 60;
        }
        from.push({ x, y });
        to.push({ x: X, y: Y });
    }
    return { from, to };
}

/** Same as {@link makeCorrespondences} but with small per-point jitter added
 * to every destination point (no outliers) — used where a test needs the
 * minimal-sample fit and the full-set refit to genuinely diverge. On exact,
 * noise-free correspondences any 4 points already recover the ground truth,
 * so a minimal-sample model and a refit-over-all-inliers model coincide up
 * to float rounding, making a "the refit actually changed something"
 * assertion meaningless (or, worse, flaky across platforms/toolchains). */
function makeNoisyCorrespondences(n: number, jitterPx: number, seed: number) {
    const rand = mulberry32(seed);
    const from: { x: number; y: number }[] = [];
    const to: { x: number; y: number }[] = [];
    for (let i = 0; i < n; i++) {
        const x = 10 + rand() * 300;
        const y = 10 + rand() * 220;
        const p = project(GT, x, y);
        from.push({ x, y });
        to.push({ x: p.x + (rand() * 2 - 1) * jitterPx, y: p.y + (rand() * 2 - 1) * jitterPx });
    }
    return { from, to };
}

/** Distance from a model's projection of `pts` to the true, noise-free
 * ground-truth projection — a measure of how close the *recovered transform*
 * is to the real one, independent of the noisy observations used to fit it. */
function groundTruthError(m: Float32Array, pts: { x: number; y: number }[]) {
    let maxErr = 0;
    for (const pt of pts) {
        const got = project(Array.from(m), pt.x, pt.y);
        const want = project(GT, pt.x, pt.y);
        const dx = got.x - want.x,
            dy = got.y - want.y;
        maxErr = Math.max(maxErr, Math.sqrt(dx * dx + dy * dy));
    }
    return maxErr;
}

afterEach(() => {
    vi.restoreAllMocks();
});

/** Seeds Math.random for deterministic get_subset draws, matching
 * tests/parity/motion_estimator.test.ts's own seededRandom convention.
 * Needed wherever a test has outliers and enough points that whether
 * ransac()/lmeds() land on a clean subset within max_iters depends on the
 * random draw (issue #189 — the RNG isn't injectable yet, so seeding the
 * global is the only way to make these tests non-flaky). */
function seededRandom(seed: number) {
    return vi.spyOn(Math, "random").mockImplementation(mulberry32(seed));
}

describe("motion_estimator.find_homography", () => {
    it("noise-free correspondences: refit converges tighter and more consistently than raw ransac()", () => {
        const N = 12;
        const { from, to } = makeCorrespondences(N, 0, 7);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        let maxRawErr = 0;
        let maxRefitErr = 0;
        const trials = 500;

        for (let t = 0; t < trials; t++) {
            const rawModel = new jsfeatNext.matrix_t(3, 3, F32C1);
            const rawMask = new jsfeatNext.matrix_t(N, 1, U8C1);
            const okRaw = me.ransac(params, kernel, from, to, N, rawModel, rawMask, 1000);
            expect(okRaw).toBe(true);
            maxRawErr = Math.max(maxRawErr, reprojectionError(rawModel.data as Float32Array, from, to));

            const refitModel = new jsfeatNext.matrix_t(3, 3, F32C1);
            const refitMask = new jsfeatNext.matrix_t(N, 1, U8C1);
            const okRefit = me.find_homography(params, kernel, from, to, N, refitModel, refitMask);
            expect(okRefit).toBe(true);
            for (let i = 0; i < N; i++) expect(refitMask.data[i]).toBe(1);
            maxRefitErr = Math.max(maxRefitErr, reprojectionError(refitModel.data as Float32Array, from, to));
        }

        // Measured (2026-09-05, 500 trials): raw ransac() reprojection error up
        // to ~0.36px on this exact configuration (matches issue #185's
        // 3000-trial measurement); the refit brings it below 0.05px. Neither
        // is exactly 0 because homography2d's DLT accumulators are still F32
        // (issue #186) — this test only asserts the refit's improvement, not
        // an absolute floor that depends on #186 landing.
        expect(maxRefitErr).toBeLessThan(0.05);
        expect(maxRefitErr).toBeLessThan(maxRawErr);
    });

    it("with outliers: mask and model agree, and outliers stay rejected after the refit", () => {
        const N = 40;
        const OUT = 6;
        const { from, to } = makeCorrespondences(N, OUT, 99);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        seededRandom(2024);
        const ok = me.find_homography(params, kernel, from, to, N, model, mask);

        expect(ok).toBe(true);
        for (let i = 0; i < OUT; i++) expect(mask.data[i]).toBe(0);

        let numinliers = 0;
        for (let i = 0; i < N; i++) numinliers += mask.data[i];
        expect(numinliers).toBe(N - OUT);

        // mask and model must describe the same transform: every point the
        // mask calls an inlier must actually reproject within threshold
        // under the *refit* model, not the pre-refit one.
        for (let i = 0; i < N; i++) {
            if (!mask.data[i]) continue;
            const p = project(Array.from(model.data as Float32Array), from[i].x, from[i].y);
            const dx = p.x - to[i].x,
                dy = p.y - to[i].y;
            expect(Math.sqrt(dx * dx + dy * dy)).toBeLessThan(params.thresh);
        }
    });

    it("degenerate refit falls back to the pre-refit model rather than returning garbage", () => {
        // exactly model_points (4) correspondences: ransac's special case
        // returns them all as inliers with no room for a >model_points refit,
        // so find_homography must pass the result through unchanged.
        const N = 4;
        const { from, to } = makeCorrespondences(N, 0, 5);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        const ok = me.find_homography(params, kernel, from, to, N, model, mask);

        expect(ok).toBe(true);
        for (let i = 0; i < N; i++) expect(mask.data[i]).toBe(1);
        expect(reprojectionError(model.data as Float32Array, from, to)).toBeLessThan(1);
    });

    // The next two tests inject a fake kernel (real homography2d via
    // prototype delegation, `run` overridden only for the >model_points call
    // find_homography makes for the refit) to force the two fallback
    // branches directly. Neither is reachable through real ransac()/lmeds()
    // data: homography2d.run's degeneracy check is a point-spread test, and
    // once a 4-point minimal sample already has non-zero spread, any inlier
    // superset containing those same 4 points keeps it non-zero too, so the
    // real kernel can't be coaxed into failing only on the larger refit call.

    it("refit returning <= 0 (degenerate, e.g. collinear inliers) keeps the pre-refit model and mask", () => {
        const N = 20;
        const { from, to } = makeCorrespondences(N, 0, 42);
        const me = jsfeatNext.motion_estimator;
        const real = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const degenerateOnRefit = Object.create(real);
        degenerateOnRefit.run = (
            f: typeof from,
            t: typeof to,
            m: InstanceType<typeof jsfeatNext.matrix_t>,
            count: number
        ) => (count > params.size ? 0 : real.run(f, t, m, count));

        const preRefitModel = new jsfeatNext.matrix_t(3, 3, F32C1);
        const preRefitMask = new jsfeatNext.matrix_t(N, 1, U8C1);
        seededRandom(7);
        const okPre = me.ransac(params, real, from, to, N, preRefitModel, preRefitMask, 1000);
        vi.restoreAllMocks();
        expect(okPre).toBe(true);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        seededRandom(7); // identical draw, so ransac()'s own result matches preRefitModel/mask exactly
        const ok = me.find_homography(params, degenerateOnRefit, from, to, N, model, mask);

        expect(ok).toBe(true);
        for (let i = 0; i < 9; i++) expect(model.data[i]).toBeCloseTo(preRefitModel.data[i], 5);
        for (let i = 0; i < N; i++) expect(mask.data[i]).toBe(preRefitMask.data[i]);
    });

    it("refit that collapses the inlier count below model_points keeps the pre-refit model and mask", () => {
        const N = 20;
        const { from, to } = makeCorrespondences(N, 0, 43);
        const me = jsfeatNext.motion_estimator;
        const real = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        // "Succeeds" on the refit call but writes the identity, which fits
        // essentially none of these GT-transformed (translated + scaled)
        // correspondences, so the post-refit reclassification collapses to
        // well under model_points inliers.
        const badRefit = Object.create(real);
        badRefit.run = (f: typeof from, t: typeof to, m: InstanceType<typeof jsfeatNext.matrix_t>, count: number) => {
            if (count > params.size) {
                const identity = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                for (let i = 0; i < 9; i++) m.data[i] = identity[i];
                return 1;
            }
            return real.run(f, t, m, count);
        };

        const preRefitModel = new jsfeatNext.matrix_t(3, 3, F32C1);
        const preRefitMask = new jsfeatNext.matrix_t(N, 1, U8C1);
        seededRandom(11);
        const okPre = me.ransac(params, real, from, to, N, preRefitModel, preRefitMask, 1000);
        vi.restoreAllMocks();
        expect(okPre).toBe(true);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        seededRandom(11);
        const ok = me.find_homography(params, badRefit, from, to, N, model, mask);

        expect(ok).toBe(true);
        for (let i = 0; i < 9; i++) expect(model.data[i]).toBeCloseTo(preRefitModel.data[i], 5);
        for (let i = 0; i < N; i++) expect(mask.data[i]).toBe(preRefitMask.data[i]);
    });

    it("method: 'lmeds' actually refits — thresh=0 (the documented 'ignored by lmeds' value) must not silently no-op it", () => {
        // Noisy (not exact) correspondences on purpose: with noise-free data
        // any 4-point minimal sample already recovers the ground truth, so a
        // minimal-sample fit and a 12-point refit coincide up to float
        // rounding and comparing their coefficients directly is flaky across
        // platforms/toolchains (see PR #190's CI failure — this replaced a
        // `toBeCloseTo` comparison on raw model coefficients with a
        // ground-truth-error comparison averaged over many trials instead).
        const N = 12;
        const JITTER = 0.6;
        const TRIALS = 40;
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        // thresh=0 mirrors the existing lmeds() call convention (see
        // tests/parity/motion_estimator.test.ts): lmeds ignores it internally
        // and derives its own robust threshold. find_homography must do the
        // same for its post-refit reclassification, or thresh=0 collapses
        // find_inliers to zero inliers and the refit is silently discarded.
        const params = new jsfeatNext.ransac_params_t(4, 0, 0.45, 0.99);

        let rawErrSum = 0,
            refitErrSum = 0;

        for (let t = 0; t < TRIALS; t++) {
            const { from, to } = makeNoisyCorrespondences(N, JITTER, 1000 + t);

            // Seed Math.random identically before each call: get_subset draws
            // its minimal samples from the global Math.random (issue #189 —
            // not yet injectable), so an unseeded run can have lmeds() itself
            // succeed or fail by luck of the draw, independent of anything
            // find_homography does. Seeding makes both calls deterministic
            // and reproducible, matching tests/parity/motion_estimator.test.ts's
            // own seededRandom convention.
            const seedFor = (label: string) => {
                const r = mulberry32(2000 + t + (label === "refit" ? 100000 : 0));
                return vi.spyOn(Math, "random").mockImplementation(r);
            };

            const rawModel = new jsfeatNext.matrix_t(3, 3, F32C1);
            const rawMask = new jsfeatNext.matrix_t(N, 1, U8C1);
            seedFor("raw");
            const okRaw = me.lmeds(params, kernel, from, to, N, rawModel, rawMask, 1000);
            vi.restoreAllMocks();
            expect(okRaw).toBe(true);
            rawErrSum += groundTruthError(rawModel.data as Float32Array, from);

            const model = new jsfeatNext.matrix_t(3, 3, F32C1);
            const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
            seedFor("refit");
            const ok = me.find_homography(params, kernel, from, to, N, model, mask, "lmeds");
            vi.restoreAllMocks();
            expect(ok).toBe(true);

            refitErrSum += groundTruthError(model.data as Float32Array, from);
        }

        const rawErrAvg = rawErrSum / TRIALS;
        const refitErrAvg = refitErrSum / TRIALS;

        // A minimal 4-point fit only ever sees 4 of the 12 noisy points, so
        // it inherits their jitter directly; a refit over all (up to) 12
        // inliers averages the jitter down. If thresh=0 silently collapsed
        // the refit back to the raw model (the bug this test was written
        // for), refitErrAvg would equal rawErrAvg, not improve on it.
        //
        // No tight absolute bound here on purpose: homography's projective
        // terms amplify a few px of point-position jitter into a much larger
        // ground-truth coefficient error (unlike the plain reprojection-error
        // checks elsewhere in this file), so the meaningful, non-flaky signal
        // is the *relative* improvement, not an absolute px figure.
        expect(refitErrAvg).toBeLessThan(rawErrAvg);
    });

    it("method: 'lmeds' with outliers: mask and model agree after the refit", () => {
        const N = 40;
        const OUT = 6;
        const { from, to } = makeCorrespondences(N, OUT, 456);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 0, 0.45, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        seededRandom(2024);
        const ok = me.find_homography(params, kernel, from, to, N, model, mask, "lmeds");

        expect(ok).toBe(true);
        let numinliers = 0;
        for (let i = 0; i < N; i++) numinliers += mask.data[i];
        expect(numinliers).toBeGreaterThanOrEqual(N - OUT - 1);

        for (let i = 0; i < N; i++) {
            if (!mask.data[i]) continue;
            const p = project(Array.from(model.data as Float32Array), from[i].x, from[i].y);
            const dx = p.x - to[i].x,
                dy = p.y - to[i].y;
            expect(Math.sqrt(dx * dx + dy * dy)).toBeLessThan(1);
        }
    });

    it("mask parameter is optional", () => {
        const N = 20;
        const { from, to } = makeCorrespondences(N, 0, 11);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        expect(() => me.find_homography(params, kernel, from, to, N, model)).not.toThrow();
        expect(reprojectionError(model.data as Float32Array, from, to)).toBeLessThan(0.05);
    });

    it("returns false and leaves ransac's own failure behaviour untouched when there aren't enough points", () => {
        const N = 3; // below homography's model_points=4
        const { from, to } = makeCorrespondences(N, 0, 3);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        const ok = me.find_homography(params, kernel, from, to, N, model, mask);
        expect(ok).toBe(false);
    });

    it("failure leaves the caller's mask untouched, rather than copying stale pool bytes into it", () => {
        // ransac()/lmeds() never write to a caller-supplied mask on failure
        // (several of their failure paths return before touching it at all).
        // find_homography's own internal mask, unlike a fresh caller-owned
        // matrix_t, is backed by a recycled cache buffer that is never
        // zeroed (see cache.get_buffer) — so it must not be copied into the
        // caller's mask on failure, or arbitrary leftover bytes from a
        // previous, unrelated borrower become externally visible.
        const N = 3; // below homography's model_points=4 -> ransac/lmeds fail immediately
        const { from, to } = makeCorrespondences(N, 0, 3);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        const sentinel = new Uint8Array(mask.data as Uint8Array);
        sentinel.fill(7); // a value ransac/lmeds would never write as a mask entry (they only write 0/1)
        (mask.data as Uint8Array).set(sentinel);

        const ok = me.find_homography(params, kernel, from, to, N, model, mask);

        expect(ok).toBe(false);
        for (let i = 0; i < N; i++) expect(mask.data[i]).toBe(7);
    });

    it("params.rng (issue #189) makes ransac() and find_homography() reproducible without a global Math.random mock", () => {
        const N = 40;
        const OUT = 6;
        const { from, to } = makeCorrespondences(N, OUT, 321);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;

        const run = () => {
            // A fresh seeded generator each call: no vi.spyOn(Math, "random")
            // anywhere in this test, demonstrating the injectable rng is a
            // real alternative to the global-mock pattern used elsewhere in
            // this file and in tests/parity/motion_estimator.test.ts.
            const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99, jsfeatNext.math.mulberry32(555));
            const model = new jsfeatNext.matrix_t(3, 3, F32C1);
            const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
            const ok = me.find_homography(params, kernel, from, to, N, model, mask);
            return { ok, model: Array.from(model.data as Float32Array), mask: Array.from(mask.data as Uint8Array) };
        };

        const first = run();
        const second = run();

        expect(first.ok).toBe(true);
        expect(second.ok).toBe(true);
        expect(second.model).toEqual(first.model);
        expect(second.mask).toEqual(first.mask);
    });
});
