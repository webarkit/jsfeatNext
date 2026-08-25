/*
 *  core.ts
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

import { IData_Type, shared_data_type } from "../data_type/data_type";
import { cache } from "../cache/cache";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import pkg from "../../package.json";
import type { imgproc } from "../imgproc/imgproc";
import type { fast_corners } from "../fast_corners/fast_corners";
import type { linalg } from "../linalg/linalg";
import type { math } from "../math/math";
import type matmath from "../matmath/matmath";
import type { matrix_t } from "../matrix_t/matrix_t";
import type { pyramid_t } from "../pyramid_t/pyramid_t";
import type { transform } from "../transform/transform";
import type { keypoint_t } from "../keypoint_t/keypoint_t";
import type { yape } from "../yape/yape";
import type { yape06 } from "../yape06/yape06";
import type { ransac_params_t } from "../motion_estimator/ransac_params_t";
import type { motion_estimator } from "../motion_estimator/motion_estimator";
import type { optical_flow_lk } from "../optical_flow_lk/optical_flow_lk";
import type { orb } from "../orb/orb";
import type { affine2d, homography2d } from "../motion_model/motion_model";
import type { bfmatcher } from "../bfmatcher/bfmatcher";
import type { match_t } from "../bfmatcher/match_t";

/**
 * The ONE shared scratch-buffer pool of the library (30 buffers of 2560
 * bytes, growable), matching original jsfeat's design where every module
 * borrows from the single global `jsfeat.cache`. Exposed publicly as
 * `jsfeatNext.cache`. Until 0.9.0 each module instance allocated its own
 * pool — a diagnosed memory/GC cost (see docs/migration-0.9.md, issue #41).
 */
export const shared_cache = new cache();
shared_cache.allocate(30, 640 * 4);

/**
 * Base class of the library: holds the shared constants, the cache/data-type
 * helpers, and the static slots the algorithm singletons are attached to
 * (in src/jsfeatNext.ts, the aggregator).
 *
 * Extracted from the src/jsfeatNext.ts monolith (issue #47) so that module
 * files can `extend` it without creating a circular import with the
 * aggregator.
 *
 * Since 0.9.0 (issue #41) the algorithm slots hold SINGLETON INSTANCES —
 * consumers call `jsfeatNext.imgproc.grayscale(...)` with no `new`, exactly
 * like original jsfeat's static namespaces. The data-structure slots
 * (matrix_t, keypoint_t, pyramid_t, ransac_params_t) remain constructors.
 */
export default class jsfeatNext {
    /** Decoder for packed matrix type signatures. */
    private dt: IData_Type;
    /** The library-wide shared buffer pool (same object as {@link shared_cache}). */
    protected cache: cache;
    static cache: cache;
    static fast_corners: fast_corners;
    static imgproc: imgproc;
    static linalg: linalg;
    static math: math;
    static matmath: matmath;
    static matrix_t: typeof matrix_t;
    static pyramid_t: typeof pyramid_t;
    static transform: transform;
    static keypoint_t: typeof keypoint_t;
    static yape: yape;
    static yape06: yape06;
    static ransac_params_t: typeof ransac_params_t;
    static affine2d: affine2d;
    static homography2d: homography2d;
    static motion_estimator: motion_estimator;
    static optical_flow_lk: optical_flow_lk;
    static orb: orb;
    static bfmatcher: bfmatcher;
    static match_t: typeof match_t;

    constructor() {
        this.dt = shared_data_type;
        this.cache = shared_cache;
    }

    /** Library version, read from package.json at build time. */
    static VERSION: string = pkg.version;

    // CONSTANTS
    static EPSILON = JSFEAT_CONSTANTS.EPSILON;
    static FLT_MIN = JSFEAT_CONSTANTS.FLT_MIN;
    static U8_t = JSFEAT_CONSTANTS.U8_t;
    static S32_t = JSFEAT_CONSTANTS.S32_t;
    static F32_t = JSFEAT_CONSTANTS.F32_t;
    static S64_t = JSFEAT_CONSTANTS.S64_t;
    static F64_t = JSFEAT_CONSTANTS.F64_t;
    static C1_t = JSFEAT_CONSTANTS.C1_t;
    static C2_t = JSFEAT_CONSTANTS.C2_t;
    static C3_t = JSFEAT_CONSTANTS.C3_t;
    static C4_t = JSFEAT_CONSTANTS.C4_t;

    // color conversion
    static COLOR_RGBA2GRAY = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_RGB2GRAY = JSFEAT_CONSTANTS.COLOR_RGB2GRAY;
    static COLOR_BGRA2GRAY = JSFEAT_CONSTANTS.COLOR_BGRA2GRAY;
    static COLOR_BGR2GRAY = JSFEAT_CONSTANTS.COLOR_BGR2GRAY;

    // box blur option
    static BOX_BLUR_NOSCALE = JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE;
    // svd options
    static SVD_U_T = JSFEAT_CONSTANTS.SVD_U_T;
    static SVD_V_T = JSFEAT_CONSTANTS.SVD_V_T;
    static NORM_HAMMING = JSFEAT_CONSTANTS.NORM_HAMMING;

    // popular formats
    static U8C1_t = this.U8_t | this.C1_t;
    static U8C3_t = this.U8_t | this.C3_t;
    static U8C4_t = this.U8_t | this.C4_t;

    static F32C1_t = this.F32_t | this.C1_t;
    static F32C2_t = this.F32_t | this.C2_t;
    static S32C1_t = this.S32_t | this.C1_t;
    static S32C2_t = this.S32_t | this.C2_t;

    /**
     * @param type Packed type signature (e.g. `U8_t | C1_t`).
     * @returns The data-type component alone (e.g. `U8_t`).
     */
    get_data_type(type: number): number {
        return this.dt._get_data_type(type);
    }

    /**
     * @param type Packed type signature.
     * @returns The channel count (1–4).
     */
    get_channel(type: number): number {
        return this.dt._get_channel(type);
    }

    /**
     * @param type Packed type signature.
     * @returns Bytes per element of the signature's data type (1, 4 or 8).
     */
    get_data_type_size(type: number): number {
        return this.dt._get_data_type_size(type);
    }
}
