/*
 *  ransac_params_t.ts
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

/**
 * Parameter block for `motion_estimator.ransac` / `motion_estimator.lmeds`.
 *
 * Mirrors `jsfeat.ransac_params_t` from the original library.
 */
export class ransac_params_t {
    /** Minimal sample size per model hypothesis (e.g. 4 for homography2d, 3 for affine2d). */
    public size: number;
    /** Inlier reprojection-error threshold in pixels (unused by LMEDS). */
    public thresh: number;
    /** Assumed outlier ratio (0–1) used to derive the iteration count. */
    public eps: number;
    /** Desired probability (0–1) of finding an outlier-free sample. */
    public prob: number;

    /**
     * @param size   Minimal sample size per hypothesis. Default 0.
     * @param thresh Inlier error threshold in pixels. Default 0.5.
     * @param eps    Assumed outlier ratio. Default 0.5.
     * @param prob   Desired success probability. Default 0.99.
     */
    constructor(size: number = 0, thresh: number = 0.5, eps: number = 0.5, prob: number = 0.99) {
        this.size = size;
        this.thresh = thresh;
        this.eps = eps;
        this.prob = prob;
    }

    /**
     * Recomputes the RANSAC iteration count from the standard formula
     * `log(1 - prob) / log(1 - (1 - eps)^size)`, capped at `max_iters`.
     * Called by the estimator whenever a better inlier ratio is found.
     *
     * @param _eps      Current outlier-ratio estimate.
     * @param max_iters Upper bound on the number of iterations.
     * @returns The updated iteration count (integer).
     */
    update_iters(_eps: number, max_iters: number): number {
        const num = Math.log(1 - this.prob);
        const denom = Math.log(1 - Math.pow(1 - _eps, this.size));
        return (denom >= 0 || -num >= max_iters * -denom ? max_iters : Math.round(num / denom)) | 0;
    }
}
