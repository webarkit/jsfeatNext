/*
 *  jsfeatNext.ts
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

import jsfeatNext, { shared_cache } from "./core/core";
import { imgproc } from "./imgproc/imgproc";
import { linalg } from "./linalg/linalg";
import { fast_corners } from "./fast_corners/fast_corners";
import { math } from "./math/math";
import matmath from "./matmath/matmath";
import { matrix_t } from "./matrix_t/matrix_t";
import { pyramid_t } from "./pyramid_t/pyramid_t";
import { transform } from "./transform/transform";
import { keypoint_t } from "./keypoint_t/keypoint_t";
import { orb } from "./orb/orb";
import { yape } from "./yape/yape";
import { yape06 } from "./yape06/yape06";
import { ransac_params_t } from "./motion_estimator/ransac_params_t";
import { motion_estimator } from "./motion_estimator/motion_estimator";
import { affine2d, homography2d } from "./motion_model/motion_model";
import { optical_flow_lk } from "./optical_flow_lk/optical_flow_lk";
import { bfmatcher } from "./bfmatcher/bfmatcher";
import { match_t } from "./bfmatcher/match_t";
import { pose_estimator, pose_t } from "./pose_estimator/pose_estimator";

// Thin aggregator (issue #47): every algorithm lives in its own module under
// src/<module>/, extending the base class from src/core/core.ts.
//
// Since 0.9.0 (issue #41) the algorithm modules are attached as SINGLETON
// INSTANCES, restoring original jsfeat's calling convention:
//
//     jsfeatNext.imgproc.grayscale(...)          // no `new`
//     jsfeatNext.fast_corners.set_threshold(20)  // state lives on the singleton
//
// All singletons share the ONE library-wide buffer pool (`shared_cache`),
// exactly like jsfeat's global `jsfeat.cache` — see docs/migration-0.9.md.
// The data-structure classes (matrix_t, keypoint_t, pyramid_t,
// ransac_params_t) remain constructors: `new jsfeatNext.matrix_t(...)`.
export default jsfeatNext;

// the shared buffer pool itself, like original jsfeat's `jsfeat.cache`
jsfeatNext.cache = shared_cache;

// data-structure constructors (unchanged: consumers `new` these)
jsfeatNext.pyramid_t = pyramid_t;

jsfeatNext.matrix_t = matrix_t;

jsfeatNext.keypoint_t = keypoint_t;

jsfeatNext.ransac_params_t = ransac_params_t;

jsfeatNext.match_t = match_t;

// pose_estimator is stateful (holds inverted intrinsics), constructed with a
// K, so it is a constructor class like matrix_t -- NOT a stateless singleton.
// pose_t is its output data-struct.
jsfeatNext.pose_estimator = pose_estimator;

jsfeatNext.pose_t = pose_t;

// algorithm singletons (no `new` — call methods directly)
jsfeatNext.transform = new transform();

jsfeatNext.fast_corners = new fast_corners();

jsfeatNext.imgproc = new imgproc();

jsfeatNext.math = new math();

jsfeatNext.matmath = new matmath();

jsfeatNext.linalg = new linalg();

jsfeatNext.orb = new orb();

jsfeatNext.yape = new yape();

jsfeatNext.yape06 = new yape06();

jsfeatNext.motion_estimator = new motion_estimator();

jsfeatNext.affine2d = new affine2d();

jsfeatNext.homography2d = new homography2d();

jsfeatNext.optical_flow_lk = new optical_flow_lk();

jsfeatNext.bfmatcher = new bfmatcher();
