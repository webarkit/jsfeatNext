/*
 *  singletons.ts
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

import { imgproc as imgproc_t } from "./imgproc/imgproc";
import { linalg as linalg_t } from "./linalg/linalg";
import { fast_corners as fast_corners_t } from "./fast_corners/fast_corners";
import { math as math_t } from "./math/math";
import matmath_t from "./matmath/matmath";
import { transform as transform_t } from "./transform/transform";
import { orb as orb_t } from "./orb/orb";
import { yape as yape_t } from "./yape/yape";
import { yape06 as yape06_t } from "./yape06/yape06";
import { motion_estimator as motion_estimator_t } from "./motion_estimator/motion_estimator";
import { affine2d as affine2d_t, homography2d as homography2d_t } from "./motion_model/motion_model";
import { optical_flow_lk as optical_flow_lk_t } from "./optical_flow_lk/optical_flow_lk";
import { bfmatcher as bfmatcher_t } from "./bfmatcher/bfmatcher";
import { gms as gms_t } from "./gms/gms";

/**
 * The library-wide algorithm singletons (issues #41, #137).
 *
 * Created here, once, and shared by both ways into the library: the default
 * namespace (`src/jsfeatNext.ts` attaches them, `jsfeatNext.imgproc`) and the
 * named exports (`src/index.ts` re-exports them, `import { imgproc }`). They
 * are the same objects either way, so state such as `fast_corners`' threshold
 * is shared.
 *
 * Each `new` is marked `@__PURE__`: constructing a module has no effect beyond
 * the instance itself (its constructor only fills its own tables and points at
 * the shared pool), so a consumer's bundler may drop every singleton the
 * consumer never reads, together with its class and tables (#137).
 */
export const transform = /* @__PURE__ */ new transform_t();
export const fast_corners = /* @__PURE__ */ new fast_corners_t();
export const imgproc = /* @__PURE__ */ new imgproc_t();
export const math = /* @__PURE__ */ new math_t();
export const matmath = /* @__PURE__ */ new matmath_t();
export const linalg = /* @__PURE__ */ new linalg_t();
export const orb = /* @__PURE__ */ new orb_t();
export const yape = /* @__PURE__ */ new yape_t();
export const yape06 = /* @__PURE__ */ new yape06_t();
export const motion_estimator = /* @__PURE__ */ new motion_estimator_t();
export const affine2d = /* @__PURE__ */ new affine2d_t();
export const homography2d = /* @__PURE__ */ new homography2d_t();
export const optical_flow_lk = /* @__PURE__ */ new optical_flow_lk_t();
export const bfmatcher = /* @__PURE__ */ new bfmatcher_t();
export const gms = /* @__PURE__ */ new gms_t();
