/*
 *  yape06.ts
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
import { matrix_t } from "../matrix_t/matrix_t";
import { keypoint_t } from "../keypoint_t/keypoint_t";
import { compute_laplacian, hessian_min_eigen_value } from "./yape06_utils";

/**
 * Module-scope aliases for the two per-pixel helpers.
 *
 * Calling an ESM *imported binding* directly from a hot loop measured
 * consistently slower than calling a plain module-scope `const` holding the
 * same function -- imported bindings are live, so each access carries an
 * indirection a `const` does not. Measured under #86 across three runs: the
 * alias form gained 12-28% every time. See `bench/README.md`.
 */
const computeLaplacian = compute_laplacian;
const hessianMinEigenValue = hessian_min_eigen_value;

/**
 * YAPE06 interest-point detector: thresholds a Laplacian response map, then
 * rejects edge-like responses via the minimum eigenvalue of the local
 * Hessian, followed by 3×3 non-maximum suppression.
 *
 * Mirrors `jsfeat.yape06` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export class yape06 extends jsfeatNext {
    /** Minimum |Laplacian| response for a candidate point. Default 30. */
    public laplacian_threshold: number;
    /** Minimum Hessian min-eigenvalue (cornerness) for a candidate. Default 25. */
    public min_eigen_value_threshold: number;

    constructor() {
        super();
        this.laplacian_threshold = 30;
        this.min_eigen_value_threshold = 25;
    }

    /**
     * Detects interest points in a grayscale image. Results are written into
     * the pre-allocated `points` array (each entry gets `x`, `y`, `score`).
     * Tune sensitivity through {@link laplacian_threshold} and
     * {@link min_eigen_value_threshold}.
     *
     * @param src    Source grayscale image (`U8C1`).
     * @param points Pre-allocated keypoint pool to fill.
     * @param border Pixels to skip along each edge. Default 5.
     * @returns The number of points written into `points`.
     */
    detect(src: matrix_t, points: keypoint_t[], border: number): number {
        if (typeof border === "undefined") {
            border = 5;
        }
        let x = 0,
            y = 0;
        const w = src.cols,
            h = src.rows,
            srd_d = src.data;
        const Dxx = 5,
            Dyy = (5 * w) | 0;
        const Dxy = (3 + 3 * w) | 0,
            Dyx = (3 - 3 * w) | 0;
        const lap_buf = this.cache.get_buffer((w * h) << 2);
        const laplacian = lap_buf.i32;
        let lv = 0,
            row = 0,
            rowx = 0,
            min_eigen_value = 0,
            pt;
        let number_of_points = 0;
        const lap_thresh = this.laplacian_threshold;
        const eigen_thresh = this.min_eigen_value_threshold;

        const sx = Math.max(5, border) | 0;
        const sy = Math.max(3, border) | 0;
        const ex = Math.min(w - 5, w - border) | 0;
        const ey = Math.min(h - 3, h - border) | 0;

        x = w * h;
        while (--x >= 0) {
            laplacian[x] = 0;
        }
        computeLaplacian(srd_d, laplacian, w, Dxx, Dyy, sx, sy, ex, ey);

        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
                lv = laplacian[rowx];
                if (
                    (lv < -lap_thresh &&
                        lv < laplacian[rowx - 1] &&
                        lv < laplacian[rowx + 1] &&
                        lv < laplacian[rowx - w] &&
                        lv < laplacian[rowx + w] &&
                        lv < laplacian[rowx - w - 1] &&
                        lv < laplacian[rowx + w - 1] &&
                        lv < laplacian[rowx - w + 1] &&
                        lv < laplacian[rowx + w + 1]) ||
                    (lv > lap_thresh &&
                        lv > laplacian[rowx - 1] &&
                        lv > laplacian[rowx + 1] &&
                        lv > laplacian[rowx - w] &&
                        lv > laplacian[rowx + w] &&
                        lv > laplacian[rowx - w - 1] &&
                        lv > laplacian[rowx + w - 1] &&
                        lv > laplacian[rowx - w + 1] &&
                        lv > laplacian[rowx + w + 1])
                ) {
                    min_eigen_value = hessianMinEigenValue(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);
                    if (min_eigen_value > eigen_thresh) {
                        pt = points[number_of_points];
                        ((pt.x = x), (pt.y = y), (pt.score = min_eigen_value));
                        ++number_of_points;
                        (++x, ++rowx); // skip next pixel since this is maxima in 3x3
                    }
                }
            }
        }

        this.cache.put_buffer(lap_buf);

        return number_of_points;
    }
}
