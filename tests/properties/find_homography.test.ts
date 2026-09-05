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

import { describe, it, expect } from "vitest";
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

function makeCorrespondences(n: number, outliers: number, seed: number) {
    let a = seed >>> 0;
    const rand = () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
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

    it("method: 'lmeds' actually refits — thresh=0 (the documented 'ignored by lmeds' value) must not silently no-op it", () => {
        const N = 12;
        const { from, to } = makeCorrespondences(N, 0, 123);
        const me = jsfeatNext.motion_estimator;
        const kernel = jsfeatNext.homography2d;
        // thresh=0 mirrors the existing lmeds() call convention (see
        // tests/parity/motion_estimator.test.ts): lmeds ignores it internally
        // and derives its own robust threshold. find_homography must do the
        // same for its post-refit reclassification, or thresh=0 collapses
        // find_inliers to zero inliers and the refit is silently discarded.
        const params = new jsfeatNext.ransac_params_t(4, 0, 0.45, 0.99);

        const rawModel = new jsfeatNext.matrix_t(3, 3, F32C1);
        const rawMask = new jsfeatNext.matrix_t(N, 1, U8C1);
        const okRaw = me.lmeds(params, kernel, from, to, N, rawModel, rawMask, 1000);
        expect(okRaw).toBe(true);
        const rawErr = reprojectionError(rawModel.data as Float32Array, from, to);

        const model = new jsfeatNext.matrix_t(3, 3, F32C1);
        const mask = new jsfeatNext.matrix_t(N, 1, U8C1);
        const ok = me.find_homography(params, kernel, from, to, N, model, mask, "lmeds");

        expect(ok).toBe(true);
        for (let i = 0; i < N; i++) expect(mask.data[i]).toBe(1);

        const refitErr = reprojectionError(model.data as Float32Array, from, to);
        // the refit model must differ from the raw minimal-sample model
        // (proves the refit actually ran, not a silent fallback) and reduce
        // reprojection error on this noise-free set.
        expect(model.data[0]).not.toBeCloseTo(rawModel.data[0], 6);
        expect(refitErr).toBeLessThan(rawErr);
        expect(refitErr).toBeLessThan(0.05);
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
});
