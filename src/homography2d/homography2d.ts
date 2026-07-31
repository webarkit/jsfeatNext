/*
 *  homography2d.ts
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

import { matrix_t } from "../matrix_t/matrix_t";
import { point_t } from "../point_t/point_t";

/**
 * Contract every motion-model kernel must fulfil to be usable with
 * `motion_estimator.ransac` / `lmeds`. Implemented by both `homography2d`
 * and `affine2d` (see `src/motion_model/motion_model.ts`).
 */
export interface IHomography2d {
    /**
     * Estimates a model from `count` point correspondences and writes it
     * into `model` (a 3×3 matrix).
     *
     * @returns The number of models produced (0 on degenerate input).
     */
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    /**
     * Computes the per-correspondence squared reprojection error of `model`
     * into the `err` array.
     */
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    /**
     * Validates a minimal sample before model estimation (e.g. rejects
     * degenerate point configurations). Returning `false` makes the
     * estimator draw a new sample.
     */
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
}
