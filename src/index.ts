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
import core from "./core/core";

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
 * Named exports (issue #137), beside the default namespace, never instead of
 * it: every member of the namespace is also exported under the same name, and
 * is the very same object (`imgproc === jsfeatNext.imgproc`), so singleton
 * state such as `fast_corners`' threshold is shared between the two.
 *
 * They exist for bundle size. The namespace holds every module, so importing
 * it ships the whole library; importing by name lets a bundler drop the
 * modules (and tables, like ORB's) that the code never reads. The ESM build
 * carries them; the UMD build (`dist/jsfeatNext.js`, built from `src/umd.ts`)
 * still exposes only the namespace, as CDN `<script>` consumers expect.
 *
 * @example
 * ```ts
 * import { imgproc, matrix_t, U8C1_t } from "@webarkit/jsfeat-next";
 * const gray = new matrix_t(w, h, U8C1_t);
 * imgproc.grayscale(rgba, w, h, gray);
 * ```
 */
export {
    transform,
    fast_corners,
    imgproc,
    math,
    matmath,
    linalg,
    orb,
    yape,
    yape06,
    motion_estimator,
    affine2d,
    homography2d,
    optical_flow_lk,
    bfmatcher,
    gms,
    teblid,
    freak,
} from "./singletons";
export { shared_cache as cache } from "./core/core";
export { matrix_t } from "./matrix_t/matrix_t";
export { keypoint_t } from "./keypoint_t/keypoint_t";
export { pyramid_t } from "./pyramid_t/pyramid_t";
export { ransac_params_t } from "./motion_estimator/ransac_params_t";
export { match_t } from "./bfmatcher/match_t";
export { data_t } from "./node_utils/data_t";
export { pose_estimator, pose_t } from "./pose_estimator/pose_estimator";

// The namespace's constants, by the same names: the data types and channels a
// `matrix_t` is built with, the colour codes, the flags and the version. Read
// from the base class that defines them, so they cannot drift from
// `jsfeatNext.<name>`.
export const {
    VERSION,
    EPSILON,
    FLT_MIN,
    U8_t,
    S32_t,
    F32_t,
    S64_t,
    F64_t,
    C1_t,
    C2_t,
    C3_t,
    C4_t,
    COLOR_RGBA2GRAY,
    COLOR_RGB2GRAY,
    COLOR_BGRA2GRAY,
    COLOR_BGR2GRAY,
    BOX_BLUR_NOSCALE,
    SVD_U_T,
    SVD_V_T,
    NORM_HAMMING,
    U8C1_t,
    U8C3_t,
    U8C4_t,
    F32C1_t,
    F32C2_t,
    S32C1_t,
    S32C2_t,
} = core;

/**
 * Public interfaces and shared types, re-exported from the package root so
 * consumers can type-annotate without deep paths into `types/src/**` (issue
 * #92). Type-only: erased at build time. (The classes among them, `matrix_t`,
 * `keypoint_t` and so on, are exported as values above, which carries their
 * types too.)
 *
 * @example
 * ```ts
 * import jsfeatNext, { IMatrix_T, TypedArray } from "@webarkit/jsfeat-next";
 * function process(img: IMatrix_T) { ... }
 * ```
 */
export type { IMatrix_T } from "./matrix_t/matrix_t";
export type { point_t, IPoint_t } from "./point_t/point_t";
export type { IMatch_T } from "./bfmatcher/match_t";
export type { IGmsSize } from "./gms/gms";
export type { TeblidOptions } from "./teblid/teblid";
export type { FreakOptions } from "./freak/freak";
export type { IData_T } from "./node_utils/data_t";
export type { IPose_T } from "./pose_estimator/pose_estimator";
export type { ICache } from "./cache/cache";
export type { TypedArray, NumericArray, MotionKernel, RandomFn } from "./types";
