/*
 *  index.ts
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

import jsfeatNext from "./jsfeatNext";

/**
 * Package entry point. Since 0.9.0 the default export IS the `jsfeatNext`
 * namespace directly — the old `pkg.jsfeatNext` double-namespace unwrap is
 * gone (issue #41; see docs/migration-0.9.md).
 *
 * @example
 * ```ts
 * import jsfeatNext from "@webarkit/jsfeat-next";
 * const gray = new jsfeatNext.matrix_t(w, h, jsfeatNext.U8_t | jsfeatNext.C1_t);
 * jsfeatNext.imgproc.grayscale(rgba, w, h, gray); // singleton — no `new`
 * ```
 */
export default jsfeatNext;

/**
 * Public interfaces and shared types, re-exported from the package root so
 * consumers can type-annotate without deep paths into `types/src/**` (issue
 * #92). These are **type-only** re-exports: they are erased at build time and
 * do not change the UMD/ESM JavaScript bundles (whose `exports: "default"`
 * config exposes only the `jsfeatNext` namespace). The runtime values remain
 * reachable via that namespace — e.g. `new jsfeatNext.matrix_t(...)`.
 *
 * @example
 * ```ts
 * import jsfeatNext, { IMatrix_T, TypedArray } from "@webarkit/jsfeat-next";
 * function process(img: IMatrix_T) { ... }
 * ```
 */
export type { matrix_t, IMatrix_T } from "./matrix_t/matrix_t";
export type { keypoint_t } from "./keypoint_t/keypoint_t";
export type { pyramid_t } from "./pyramid_t/pyramid_t";
export type { point_t, IPoint_t } from "./point_t/point_t";
export type { ransac_params_t } from "./motion_estimator/ransac_params_t";
export type { match_t, IMatch_T } from "./bfmatcher/match_t";
export type { pose_t, IPose_T } from "./pose_estimator/pose_estimator";
export type { ICache } from "./cache/cache";
export type { TypedArray, NumericArray, MotionKernel } from "./types";
