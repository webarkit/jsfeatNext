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

import core, { shared_cache } from "./core/core";
import { matrix_t } from "./matrix_t/matrix_t";
import { pyramid_t } from "./pyramid_t/pyramid_t";
import { keypoint_t } from "./keypoint_t/keypoint_t";
import { ransac_params_t } from "./motion_estimator/ransac_params_t";
import { match_t } from "./bfmatcher/match_t";
import { data_t } from "./node_utils/data_t";
import { pose_estimator, pose_t } from "./pose_estimator/pose_estimator";
import * as singletons from "./singletons";

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
//
// How the namespace is built matters for bundle size (#137). It is a SUBCLASS
// of the base class every module extends, not that base class itself: it
// inherits the base's statics (the data-type and colour constants, VERSION),
// and the members attached here land on it alone. And it is built in ONE
// expression with a pure annotation, rather than by assigning members one statement
// at a time: a bundler must keep every `ns.orb = orb` statement, because
// writing a property of a class may run a setter, and each one would keep its
// module alive. As a single pure expression, a bundle whose code never reads
// the namespace (one that only uses `import { imgproc }`) drops it whole, and
// every module the code does not use goes with it. (The subclass is declared
// on its own line, not inline: TypeScript cannot emit a declaration for an
// exported anonymous class whose base has protected members, TS4094.)
//
// Two details keep it behaving exactly as the base class did: the base's own
// statics (constants, VERSION) are copied on as OWN properties, so reflection
// such as Object.keys(jsfeatNext) still lists them, and `instanceof` defers to
// the base, so `jsfeatNext.imgproc instanceof jsfeatNext` stays true although
// the modules extend the base, not this subclass.
class jsfeatNext extends core {
    static [Symbol.hasInstance](value: unknown): boolean {
        return value instanceof core;
    }
}

const namespace = /* @__PURE__ */ Object.assign(jsfeatNext, core, {
    // the shared buffer pool itself, like original jsfeat's `jsfeat.cache`
    cache: shared_cache,

    // data-structure constructors (unchanged: consumers `new` these)
    pyramid_t,
    matrix_t,
    keypoint_t,
    ransac_params_t,
    match_t,
    // raw byte storage, like jsfeat's `jsfeat.data_t` (surface parity, #45)
    data_t,
    // pose_estimator is stateful (holds inverted intrinsics), constructed with
    // a K, so it is a constructor class like matrix_t -- NOT a stateless
    // singleton. pose_t is its output data-struct.
    pose_estimator,
    pose_t,

    // algorithm singletons (no `new` — call methods directly). Created once in
    // ./singletons, which src/index.ts also re-exports by name (#137), so
    // `jsfeatNext.imgproc` and `import { imgproc }` are the same object.
    transform: singletons.transform,
    fast_corners: singletons.fast_corners,
    imgproc: singletons.imgproc,
    math: singletons.math,
    matmath: singletons.matmath,
    linalg: singletons.linalg,
    orb: singletons.orb,
    yape: singletons.yape,
    yape06: singletons.yape06,
    motion_estimator: singletons.motion_estimator,
    affine2d: singletons.affine2d,
    homography2d: singletons.homography2d,
    optical_flow_lk: singletons.optical_flow_lk,
    bfmatcher: singletons.bfmatcher,
    gms: singletons.gms,
    teblid: singletons.teblid,
    freak: singletons.freak,
});

export default namespace;
