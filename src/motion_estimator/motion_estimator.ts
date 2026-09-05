/*
 *  motion_estimator.ts
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
 *  Portions of this file are derived from jsfeat
 *  (https://github.com/inspirit/jsfeat), Copyright (c) Eugene Zatepyakin,
 *  released under the MIT License.
 *
 */

import jsfeatNext from "../core/core";
import { IHomography2d } from "../homography2d/homography2d";
import { matrix_t } from "../matrix_t/matrix_t";
import { point_t } from "../point_t/point_t";
import { ransac_params_t } from "./ransac_params_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { homography2d } from "../motion_model/motion_model";
import { math } from "../math/math";
import type { MotionKernel, TypedArray } from "../types";

/**
 * Robust motion-model estimation from noisy point correspondences via
 * RANSAC or LMEDS, parameterized by a kernel implementing
 * {@link IHomography2d} (`homography2d` or `affine2d` from
 * `src/motion_model/motion_model.ts`).
 *
 * Mirrors `jsfeat.motion_estimator` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export class motion_estimator extends jsfeatNext {
    constructor() {
        super();
    }

    /**
     * Draws a random minimal sample of `need_cnt` distinct correspondences
     * (via `Math.random`) and validates it with `kernel.check_subset`.
     * Retries up to 1000 times before giving up.
     *
     * @param kernel   The motion-model kernel (validates the sample).
     * @param from     Source points. @param to Destination points.
     * @param need_cnt Sample size to draw.
     * @param max_cnt  Total number of correspondences to draw from.
     * @param from_sub Output array receiving the sampled source points.
     * @param to_sub   Output array receiving the sampled destination points.
     * @returns `true` when a valid subset was found.
     */
    get_subset(
        kernel: MotionKernel,
        from: point_t[],
        to: point_t[],
        need_cnt: number,
        max_cnt: number,
        from_sub: point_t[],
        to_sub: point_t[]
    ): boolean {
        const max_try = 1000;
        const indices = [];
        let i = 0,
            j = 0,
            ssiter = 0,
            idx_i = 0,
            ok = false;
        for (; ssiter < max_try; ++ssiter) {
            i = 0;
            for (; i < need_cnt && ssiter < max_try;) {
                ok = false;
                idx_i = 0;
                while (!ok) {
                    ok = true;
                    idx_i = indices[i] = Math.floor(Math.random() * max_cnt) | 0;
                    for (j = 0; j < i; ++j) {
                        if (idx_i == indices[j]) {
                            ok = false;
                            break;
                        }
                    }
                }
                from_sub[i] = from[idx_i];
                to_sub[i] = to[idx_i];
                if (!kernel.check_subset(from_sub, to_sub, i + 1)) {
                    ssiter++;
                    continue;
                }
                ++i;
            }
            break;
        }

        return i == need_cnt && ssiter < max_try;
    }

    /**
     * Classifies every correspondence as inlier/outlier by thresholding the
     * kernel's squared reprojection error of `model`.
     *
     * @param kernel The motion-model kernel (provides `error`).
     * @param model  Model to evaluate.
     * @param from   Source points. @param to Destination points.
     * @param count  Number of correspondences.
     * @param thresh Inlier error threshold in pixels (squared internally).
     * @param err    Scratch array receiving per-point squared errors.
     * @param mask   Output 0/1 inlier mask (length `count`).
     * @returns The number of inliers.
     */
    find_inliers(
        kernel: MotionKernel,
        model: matrix_t,
        from: point_t[],
        to: point_t[],
        count: number,
        thresh: number,
        err: Int32Array | Float32Array,
        mask: TypedArray | number[]
    ): number {
        let numinliers: number = 0,
            i = 0,
            f = 0;
        const t = thresh * thresh;

        kernel.error(from, to, model, err, count);

        for (; i < count; ++i) {
            f = <number>(<unknown>(err[i] <= t));
            mask[i] = f;
            numinliers += f;
        }
        return numinliers;
    }

    /**
     * RANSAC estimation: repeatedly fits the kernel's model to random
     * minimal samples, keeping the hypothesis with the most inliers
     * (adapting the iteration count from the observed inlier ratio).
     *
     * Returns the winning **minimal-sample** model as-is — it does not refit
     * over the full inlier set, matching both `jsfeat.motion_estimator.ransac`
     * and `cv::RANSACPointSetRegistrator::run`. The refit OpenCV performs
     * afterwards, in `cv::findHomography`, is a separate caller-level layer;
     * see {@link find_homography} (issue #185).
     *

     * @param params    Estimation parameters ({@link ransac_params_t}).
     * @param kernel    Motion-model kernel (`homography2d` / `affine2d`).
     * @param from      Source points. @param to Destination points.
     * @param count     Number of correspondences.
     * @param model     Output 3×3 model matrix.
     * @param mask      Output 0/1 inlier mask (`count`×1 matrix), optional.
     * @param max_iters Iteration cap. Default 1000.
     * @returns `true` when a model with enough inliers was found.
     */
    ransac(
        params: ransac_params_t,
        kernel: MotionKernel,
        from: point_t[],
        to: point_t[],
        count: number,
        model: matrix_t,
        mask: matrix_t,
        max_iters: number
    ): boolean {
        if (typeof max_iters === "undefined") {
            max_iters = 1000;
        }

        if (count < params.size) return false;

        const model_points = params.size;
        let niters = max_iters,
            iter = 0;
        let result: boolean = false;

        const subset0: point_t[] = [];
        const subset1: point_t[] = [];
        let found = false;

        const mc = model.cols,
            mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;

        const m_buff = this.cache.get_buffer((mc * mr) << 3);
        const ms_buff = this.cache.get_buffer(count);
        const err_buff = this.cache.get_buffer(count << 2);
        const M = new matrix_t(mc, mr, dt, m_buff.data);
        const curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);

        let inliers_max = -1,
            numinliers = 0;
        let nmodels = 0;

        const err = err_buff.f32;

        // special case
        if (count == model_points) {
            if (kernel.run(from, to, M, count) <= 0) {
                this.cache.put_buffer(m_buff);
                this.cache.put_buffer(ms_buff);
                this.cache.put_buffer(err_buff);
                return false;
            }

            M.copy_to(model);
            if (mask) {
                while (--count >= 0) {
                    mask.data[count] = 1;
                }
            }
            this.cache.put_buffer(m_buff);
            this.cache.put_buffer(ms_buff);
            this.cache.put_buffer(err_buff);
            return true;
        }

        for (; iter < niters; ++iter) {
            // generate subset
            found = this.get_subset(kernel, from, to, model_points, count, subset0, subset1);
            if (!found) {
                if (iter == 0) {
                    this.cache.put_buffer(m_buff);
                    this.cache.put_buffer(ms_buff);
                    this.cache.put_buffer(err_buff);
                    return false;
                }
                break;
            }

            nmodels = kernel.run(subset0, subset1, M, model_points);
            if (nmodels <= 0) continue;

            // TODO handle multimodel output

            numinliers = this.find_inliers(kernel, M, from, to, count, params.thresh, err, curr_mask.data);

            if (numinliers > Math.max(inliers_max, model_points - 1)) {
                M.copy_to(model);
                inliers_max = numinliers;
                if (mask) curr_mask.copy_to(mask);
                niters = params.update_iters((count - numinliers) / count, niters);
                result = true;
            }
        }

        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);

        return result;
    }

    /**
     * Least-median-of-squares estimation: like {@link ransac} but scores each
     * hypothesis by the MEDIAN squared error (no inlier threshold needed —
     * robust up to 50% outliers), then derives an inlier threshold from the
     * winning median's robust standard deviation and classifies inliers
     * against it.
     *
     * Like {@link ransac}, the returned model is the winning **minimal-sample**
     * fit — it does not refit over the classified inliers, matching
     * `jsfeat.motion_estimator.lmeds` and `cv::LMeDSPointSetRegistrator::run`.
     * See {@link find_homography} (issues #185, #188).
     *
     * @param params    Estimation parameters (`thresh` is ignored).
     * @param kernel    Motion-model kernel (`homography2d` / `affine2d`).
     * @param from      Source points. @param to Destination points.
     * @param count     Number of correspondences.
     * @param model     Output 3×3 model matrix.
     * @param mask      Output 0/1 inlier mask (`count`×1 matrix), optional.
     * @param max_iters Iteration cap. Default 1000.
     * @returns `true` when a model was found.
     */
    lmeds(
        params: ransac_params_t,
        kernel: MotionKernel,
        from: point_t[],
        to: point_t[],
        count: number,
        model: matrix_t,
        mask: matrix_t,
        max_iters: number
    ): boolean {
        if (typeof max_iters === "undefined") {
            max_iters = 1000;
        }

        if (count < params.size) return false;

        const model_points = params.size;
        let niters = max_iters,
            iter = 0;
        let result: boolean = false;
        const _math = new math();

        const subset0: point_t[] = [];
        const subset1: point_t[] = [];
        let found = false;

        const mc = model.cols,
            mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;

        const m_buff = this.cache.get_buffer((mc * mr) << 3);
        const ms_buff = this.cache.get_buffer(count);
        const err_buff = this.cache.get_buffer(count << 2);
        const M = new matrix_t(mc, mr, dt, m_buff.data);
        const curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t, ms_buff.data);

        let numinliers = 0;
        let nmodels = 0;

        const err = err_buff.f32;
        let min_median = 1000000000.0,
            sigma = 0.0,
            median = 0.0;

        params.eps = 0.45;
        niters = params.update_iters(params.eps, niters);

        // special case
        if (count == model_points) {
            if (kernel.run(from, to, M, count) <= 0) {
                this.cache.put_buffer(m_buff);
                this.cache.put_buffer(ms_buff);
                this.cache.put_buffer(err_buff);
                return false;
            }

            M.copy_to(model);
            if (mask) {
                while (--count >= 0) {
                    mask.data[count] = 1;
                }
            }
            this.cache.put_buffer(m_buff);
            this.cache.put_buffer(ms_buff);
            this.cache.put_buffer(err_buff);
            return true;
        }

        for (; iter < niters; ++iter) {
            // generate subset
            found = this.get_subset(kernel, from, to, model_points, count, subset0, subset1);
            if (!found) {
                if (iter == 0) {
                    this.cache.put_buffer(m_buff);
                    this.cache.put_buffer(ms_buff);
                    this.cache.put_buffer(err_buff);
                    return false;
                }
                break;
            }

            nmodels = kernel.run(subset0, subset1, M, model_points);
            if (nmodels <= 0) continue;

            // TODO handle multimodel output

            kernel.error(from, to, M, err, count);
            median = _math.median(err, 0, count - 1);

            if (median < min_median) {
                min_median = median;
                M.copy_to(model);
                result = true;
            }
        }

        if (result) {
            sigma = 2.5 * 1.4826 * (1 + 5.0 / (count - model_points)) * Math.sqrt(min_median);
            sigma = Math.max(sigma, 0.001);

            numinliers = this.find_inliers(kernel, model, from, to, count, sigma, err, curr_mask.data);
            if (mask) curr_mask.copy_to(mask);

            result = numinliers >= model_points;
        }

        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);

        return result;
    }

    /**
     * The caller-level layer OpenCV has (`cv::findHomography` /
     * `cv::estimateAffine2D`) and jsfeat never ported: runs {@link ransac} or
     * {@link lmeds} to find a robust minimal-sample model, then refits the
     * model over the full inlier set of the winning hypothesis via a single
     * extra `kernel.run()`, and recomputes the inlier mask against the refit
     * model so `model` and `mask` describe the same transform (mirroring
     * OpenCV's `runKernel` + `LMSolver`-less refit + `computeError` steps in
     * `fundam.cpp`, minus the Levenberg-Marquardt polish tracked in #187).
     *
     * `ransac()`/`lmeds()` themselves are untouched by this and stay at
     * jsfeat/OpenCV parity — see their doc comments and issues #185/#188.
     *
     * If the refit is degenerate (`kernel.run()` on the inlier set returns
     * `<= 0`) or collapses the inlier count below `params.size`, the
     * pre-refit minimal-sample model and mask are kept rather than returning
     * garbage.
     *
     * @param params    Estimation parameters ({@link ransac_params_t});
     *                   `params.size` is the kernel's minimal sample size
     *                   (4 for `homography2d`, 3 for `affine2d`).
     * @param kernel    Motion-model kernel (`homography2d` / `affine2d`).
     * @param from      Source points. @param to Destination points.
     * @param count     Number of correspondences.
     * @param model     Output model matrix; refit over all inliers on success.
     * @param mask      Output 0/1 inlier mask (`count`×1 matrix), recomputed
     *                   against the refit model. Optional.
     * @param method    `"ransac"` (default) or `"lmeds"`.
     * @param max_iters Iteration cap forwarded to the underlying estimator. Default 1000.
     * @returns `true` when the underlying estimator (`ransac`/`lmeds`) found a model.
     */
    find_homography(
        params: ransac_params_t,
        kernel: MotionKernel,
        from: point_t[],
        to: point_t[],
        count: number,
        model: matrix_t,
        mask?: matrix_t,
        method: "ransac" | "lmeds" = "ransac",
        max_iters: number = 1000
    ): boolean {
        const model_points = params.size;
        const mc = model.cols,
            mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;

        const mask_buff = this.cache.get_buffer(count);
        const own_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8C1_t, mask_buff.data);

        const result =
            method === "lmeds"
                ? this.lmeds(params, kernel, from, to, count, model, own_mask, max_iters)
                : this.ransac(params, kernel, from, to, count, model, own_mask, max_iters);

        if (!result) {
            // Pool buffers are recycled, not zeroed (see cache.get_buffer):
            // own_mask can hold stale bytes from a previous borrower here,
            // since several ransac()/lmeds() failure paths return before
            // writing to it at all. Leave the caller's `mask` untouched on
            // failure, matching ransac()/lmeds()'s own established behavior.
            this.cache.put_buffer(mask_buff);
            return false;
        }

        const in0: point_t[] = [];
        const in1: point_t[] = [];
        for (let i = 0; i < count; ++i) {
            if (own_mask.data[i]) {
                in0.push(from[i]);
                in1.push(to[i]);
            }
        }

        if (in0.length > model_points) {
            const m_buff = this.cache.get_buffer((mc * mr) << 3);
            const M = new matrix_t(mc, mr, dt, m_buff.data);

            if (kernel.run(in0, in1, M, in0.length) > 0) {
                const err_buff = this.cache.get_buffer(count << 2);
                const refit_mask_buff = this.cache.get_buffer(count);
                const err = err_buff.f32;
                const refit_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8C1_t, refit_mask_buff.data);

                // `params.thresh` is meaningless for lmeds (its own doc says
                // "unused by LMEDS", and callers correctly pass 0 per the
                // existing lmeds() call convention — using it here would make
                // every point fail and silently no-op the refit). Rederive
                // lmeds's own robust threshold from the refit model's error
                // distribution instead, via the same formula lmeds() itself
                // uses; ransac keeps params.thresh, matching OpenCV's
                // ransacReprojThreshold applying at this final step.
                let threshold = params.thresh;
                if (method === "lmeds") {
                    kernel.error(from, to, M, err, count);
                    const median = new math().median(err, 0, count - 1);
                    threshold = Math.max(2.5 * 1.4826 * (1 + 5.0 / (count - model_points)) * Math.sqrt(median), 0.001);
                }

                const numinliers = this.find_inliers(kernel, M, from, to, count, threshold, err, refit_mask.data);

                if (numinliers >= model_points) {
                    M.copy_to(model);
                    refit_mask.copy_to(own_mask);
                }
                // else: refit collapsed the inlier count — keep the pre-refit model/mask

                this.cache.put_buffer(err_buff);
                this.cache.put_buffer(refit_mask_buff);
            }
            // else: degenerate refit (e.g. collinear inliers) — keep the pre-refit model/mask

            this.cache.put_buffer(m_buff);
        }

        if (mask) own_mask.copy_to(mask);
        this.cache.put_buffer(mask_buff);

        return true;
    }
}
