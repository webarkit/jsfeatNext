/*
 *  pose_estimator.ts
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

import { matrix_t } from "../matrix_t/matrix_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";

/** A recovered camera pose. */
export interface IPose_T {
    /** 3×3 rotation, row-major, OpenCV camera frame (`F64_t | C1_t`). */
    R: matrix_t;
    /** Translation, length 3, camera frame. */
    t: Float64Array;
    /** `false` when the homography/intrinsics were degenerate. */
    good: boolean;
}

/**
 * Output of {@link pose_estimator.estimate}: a rigid camera pose `(R, t)` in
 * the OpenCV camera frame. A data-structure class (like `matrix_t`), not a
 * singleton — construct one and reuse it across frames to avoid per-frame
 * allocation.
 */
export class pose_t implements IPose_T {
    /** Rotation as a 3×3 `matrix_t`: the type the rest of jsfeatNext's matrix
     *  math and any downstream consumer expects. */
    public R: matrix_t;
    /** Translation as a bare `Float64Array(3)` rather than a 3×1 `matrix_t`:
     *  jsfeatNext has no 1-column matrix consumer for it, and a plain vector is
     *  what the renderer adapters up in #97 will read. */
    public t: Float64Array;
    public good: boolean;

    constructor() {
        this.R = new matrix_t(3, 3, JSFEAT_CONSTANTS.F64_t | JSFEAT_CONSTANTS.C1_t);
        this.t = new Float64Array(3);
        this.good = false;
    }
}

/**
 * Closed-form planar pose from a homography plus camera intrinsics — the
 * `H → [R | t]` decomposition the ORB samples stop short of, completing the
 * natural-feature AR pipeline (issue #83).
 *
 * ## Why this is a constructor class, not a namespace singleton
 *
 * The 14 algorithm modules (`imgproc`, `orb`, …) are stateless singletons on
 * the namespace. This one is **stateful** — it holds the inverted intrinsics
 * `K⁻¹` — and the public API constructs it with a `K`
 * (`new jsfeatNext.pose_estimator(K)`). So it lives with the constructor
 * data-structs (`matrix_t`, `keypoint_t`, `ransac_params_t`) instead. That
 * also makes {@link intrinsics} reachable as
 * `jsfeatNext.pose_estimator.intrinsics(...)`: it is `static`, and the class
 * (not an instance) is what sits on the namespace.
 *
 * ## Why closed-form, not SVD
 *
 * The decomposition normalises the first two columns of `K⁻¹H`, then
 * re-orthonormalises them with a closed-form quaternion-free trick rather than
 * an SVD of `[r1 r2]`. This keeps the algorithm free of `linalg`'s SVD, which
 * matters for the PureCV Rust port: the same routine must run `no_std`.
 *
 * The math mirrors OpenCV / the ARToolKit-lineage planar-pose decomposition so
 * it cross-validates 1:1 against the Rust port and can serve as its numeric
 * reference oracle (issue #96). All geometry is `Float64` per the #96 precision
 * hierarchy.
 *
 * @example
 * ```ts
 * const K = jsfeatNext.pose_estimator.intrinsics(640, 480);
 * const estimator = new jsfeatNext.pose_estimator(K);
 * const pose = new jsfeatNext.pose_t();
 * estimator.estimate(homography3x3, pose);
 * if (pose.good) { ... }
 * ```
 */
export class pose_estimator {
    /** Inverse intrinsics `K⁻¹`, row-major, assuming zero skew. */
    private Kinv: Float64Array;
    /**
     * Scratch for `B = K⁻¹·H` in {@link estimate}.
     *
     * An instance field rather than a per-call allocation: an estimator is
     * built once and reused across frames, so at 30-60 fps a local would be a
     * fresh array every frame for no benefit. It is not borrowed from the
     * shared cache either — that pool exists for image-sized buffers, and
     * balancing a get/put across the degenerate early return to save 72 bytes
     * would cost more in bookkeeping than it saves.
     *
     * Overwritten in full on every call, so no state carries between frames.
     */
    private readonly B: Float64Array;

    constructor(K: matrix_t) {
        this.Kinv = pose_estimator.invertIntrinsics(K);
        this.B = new Float64Array(9);
    }

    /** Replace the intrinsics (e.g. after a resolution change). */
    setIntrinsics(K: matrix_t): void {
        this.Kinv = pose_estimator.invertIntrinsics(K);
    }

    /**
     * Rough pinhole `K` from image size and horizontal field of view, for the
     * uncalibrated bootstrap case. Camera geometry, not rendering, so it stays
     * in jsfeatNext (unlike the renderer glue, which moves up to #97's AR
     * layer).
     *
     * `static`, so it is called on the namespace class directly:
     * `jsfeatNext.pose_estimator.intrinsics(w, h)`.
     *
     * @param width    Image width in pixels.
     * @param height   Image height in pixels.
     * @param fovXdeg  Horizontal field of view in degrees (default 60).
     */
    static intrinsics(width: number, height: number, fovXdeg = 60): matrix_t {
        const K = new matrix_t(3, 3, JSFEAT_CONSTANTS.F64_t | JSFEAT_CONSTANTS.C1_t);
        const f = (0.5 * width) / Math.tan((0.5 * fovXdeg * Math.PI) / 180);
        const k = K.data;
        k[0] = f;
        k[1] = 0;
        k[2] = 0.5 * width;
        k[3] = 0;
        k[4] = f;
        k[5] = 0.5 * height;
        k[6] = 0;
        k[7] = 0;
        k[8] = 1;
        return K;
    }

    /** Analytic inverse of an upper-triangular, zero-skew pinhole `K`. */
    private static invertIntrinsics(K: matrix_t): Float64Array {
        const k = K.data;
        const fx = k[0],
            cx = k[2],
            fy = k[4],
            cy = k[5];
        // prettier-ignore
        return new Float64Array([
            1 / fx, 0,      -cx / fx,
            0,      1 / fy, -cy / fy,
            0,      0,      1,
        ]);
    }

    /**
     * Recover the camera pose from a homography mapping model-plane points
     * (z = 0) to image pixels.
     *
     * @param H   3×3 homography (any single-channel numeric `matrix_t`).
     * @param out Optional pose to write into; a fresh {@link pose_t} otherwise.
     * @returns   The pose. `out.good` is `false` — and `R`/`t` untouched — when
     *            `H`/`K` are degenerate (a near-zero mapped column).
     */
    estimate(H: matrix_t, out?: pose_t): pose_t {
        const pose = out || new pose_t();
        const h = H.data;
        const ki = this.Kinv;

        // B = K⁻¹ · H, row-major. Reuses the instance scratch; every entry is
        // assigned below, so nothing survives from the previous call.
        const B = this.B;
        for (let r = 0; r < 3; ++r) {
            for (let c = 0; c < 3; ++c) {
                B[r * 3 + c] = ki[r * 3] * h[c] + ki[r * 3 + 1] * h[3 + c] + ki[r * 3 + 2] * h[6 + c];
            }
        }

        // Columns of B: b1, b2 are the (unnormalised) first two rotation axes,
        // b3 the (unnormalised) translation.
        const b1 = [B[0], B[3], B[6]];
        const b2 = [B[1], B[4], B[7]];
        const b3 = [B[2], B[5], B[8]];

        const n1 = Math.hypot(b1[0], b1[1], b1[2]);
        const n2 = Math.hypot(b2[0], b2[1], b2[2]);
        if (n1 < 1e-12 || n2 < 1e-12) {
            pose.good = false;
            return pose;
        }

        // Scale so the rotation columns are unit length; the same scale applies
        // to the translation. Sign chosen so the target sits in front of the
        // camera (t.z > 0).
        const lambda = 2.0 / (n1 + n2);
        const s = b3[2] >= 0 ? 1 : -1;

        const r1 = [(s * b1[0]) / n1, (s * b1[1]) / n1, (s * b1[2]) / n1];
        const r2 = [(s * b2[0]) / n2, (s * b2[1]) / n2, (s * b2[2]) / n2];
        const t = [s * b3[0] * lambda, s * b3[1] * lambda, s * b3[2] * lambda];

        // r1 and r2 are only approximately orthonormal (the homography carries
        // noise). Re-orthonormalise them closed-form: build the bisector `c`
        // and the in-plane perpendicular `d`, then rotate ±45° to the nearest
        // orthonormal pair. r3 = r1 × r2 keeps the frame right-handed.
        const c = pose_estimator.normalize([r1[0] + r2[0], r1[1] + r2[1], r1[2] + r2[2]]);
        const p = pose_estimator.cross(r1, r2);
        const d = pose_estimator.normalize(pose_estimator.cross(c, p));
        const q = Math.SQRT1_2;

        const c1 = [(c[0] + d[0]) * q, (c[1] + d[1]) * q, (c[2] + d[2]) * q];
        const c2 = [(c[0] - d[0]) * q, (c[1] - d[1]) * q, (c[2] - d[2]) * q];
        const c3 = pose_estimator.cross(c1, c2);

        // Store columns [c1 c2 c3] into row-major R.
        const R = pose.R.data;
        R[0] = c1[0];
        R[1] = c2[0];
        R[2] = c3[0];
        R[3] = c1[1];
        R[4] = c2[1];
        R[5] = c3[1];
        R[6] = c1[2];
        R[7] = c2[2];
        R[8] = c3[2];

        pose.t[0] = t[0];
        pose.t[1] = t[1];
        pose.t[2] = t[2];
        pose.good = true;
        return pose;
    }

    private static cross(a: number[], b: number[]): number[] {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    }

    private static normalize(v: number[]): number[] {
        const n = Math.hypot(v[0], v[1], v[2]) || 1;
        return [v[0] / n, v[1] / n, v[2] / n];
    }
}
