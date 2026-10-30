/*
 *  freak.ts
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
 *  Portions of this file are ported to TypeScript from OpenCV,
 *  opencv_contrib/modules/xfeatures2d/src/freak.cpp at tag 4.10.0
 *  (https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp),
 *  licensed under the BSD 3-Clause terms reproduced below and in
 *  LICENSES/BSD-3-Clause-FREAK.txt. This file is a modified version of that
 *  source. FREAK: A. Alahi, R. Ortiz and P. Vandergheynst, "FREAK: Fast Retina
 *  Keypoint", CVPR 2012.
 *
 *  Copyright (C) 2011-2012  Signal processing laboratory 2, EPFL,
 *  Kirell Benzi (kirell.benzi@epfl.ch),
 *  Raphael Ortiz (raphael.ortiz@a3.epfl.ch)
 *  Alexandre Alahi (alexandre.alahi@epfl.ch)
 *  and Pierre Vandergheynst (pierre.vandergheynst@epfl.ch)
 *
 *  Redistribution and use in source and binary forms, with or without modification,
 *  are permitted provided that the following conditions are met:
 *
 *   * Redistribution's of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *
 *   * Redistribution's in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *   * The name of the copyright holders may not be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 *
 *  This software is provided by the copyright holders and contributors "as is" and
 *  any express or implied warranties, including, but not limited to, the implied
 *  warranties of merchantability and fitness for a particular purpose are disclaimed.
 *  In no event shall the Intel Corporation or contributors be liable for any direct,
 *  indirect, incidental, special, exemplary, or consequential damages
 *  (including, but not limited to, procurement of substitute goods or services;
 *  loss of use, data, or profits; or business interruption) however caused
 *  and on any theory of liability, whether in contract, strict liability,
 *  or tort (including negligence or otherwise) arising in any way out of
 *  the use of this software, even if advised of the possibility of such damage.
 *
 */

import jsfeatNext from "../core/core";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { imgproc } from "../imgproc/imgproc";
import type { matrix_t } from "../matrix_t/matrix_t";
import type { keypoint_t } from "../keypoint_t/keypoint_t";
import type _pool_node_t from "../node_utils/_pool_node_t";
import { FREAK_NB_ORIENPAIRS, FREAK_ORIEN_I, FREAK_ORIEN_J, FREAK_PAIR_I, FREAK_PAIR_J } from "./freak_tables";

/** Options of {@link freak.describe}, with OpenCV's `FREAK_create` defaults. */
export interface FreakOptions {
    /** Estimate each keypoint's orientation and describe it rotated (default `true`). */
    orientation_normalized?: boolean;
    /** Pick the pattern scale from the keypoint's `size` (default `true`). */
    scale_normalized?: boolean;
    /** Scaling of the retinal pattern, in pixels (default `22`). */
    pattern_scale?: number;
    /** Octaves covered by the 64 pattern scales, a positive integer (default `4`). */
    n_octaves?: number;
}

/** Rounds to float32, as every `float` operation in freak.cpp does. */
const f = Math.fround;

/** `FREAK::NB_SCALES`. */
const NB_SCALES = 64;
/** `FREAK_NB_POINTS`. */
const NB_POINTS = 43;
/** `FREAK_LOG2`: a truncated literal in freak.cpp, kept verbatim (not `Math.LN2`). */
const FREAK_LOG2 = 0.693147180559945;

// buildPattern's rings, outer to inner: radius and sigma, normalised to 1.0
const BIG_R = 2.0 / 3.0;
const SMALL_R = 2.0 / 24.0;
const UNIT_SPACE = (BIG_R - SMALL_R) / 21.0;
const RADIUS = /* @__PURE__ */ new Float64Array([
    BIG_R,
    BIG_R - 6 * UNIT_SPACE,
    BIG_R - 11 * UNIT_SPACE,
    BIG_R - 15 * UNIT_SPACE,
    BIG_R - 18 * UNIT_SPACE,
    BIG_R - 20 * UNIT_SPACE,
    SMALL_R,
    0.0,
]);
const SIGMA = /* @__PURE__ */ new Float64Array([
    RADIUS[0] / 2.0,
    RADIUS[1] / 2.0,
    RADIUS[2] / 2.0,
    RADIUS[3] / 2.0,
    RADIUS[4] / 2.0,
    RADIUS[5] / 2.0,
    RADIUS[6] / 2.0,
    RADIUS[6] / 2.0,
]);

/**
 * OpenCV's `cvRound` on x86-64 (`cvtsd2si` / `cvtss2si`): round half to even,
 * not `Math.round`. Returns `+0`, never `-0`. Module-internal; exported for
 * the unit test only.
 */
export function cv_round(x: number): number {
    const fl = Math.floor(x);
    const d = x - fl;
    let r = fl;
    if (d > 0.5 || (d === 0.5 && fl % 2 !== 0)) r = fl + 1;
    return r + 0;
}

/** The per-call constants of `buildPattern` and `computeDescriptors`. */
export interface FreakParams {
    /** `patternScale`: the float constructor argument, stored as a double. */
    pattern_scale: number;
    /** `scaleStep ^ s` for each of the 64 scales. */
    scaling: Float64Array;
    /**
     * `patternSizes`: the pattern's half-width at each scale, for the border
     * test. Kept in double, not `int`: where OpenCV's `static_cast<int>` is
     * defined the value is the same, and where it overflows (undefined in
     * OpenCV) the huge or infinite size drops the keypoint instead of wrapping.
     */
    sizes: Float64Array;
    /** The 45 orientation weights, `weight_dx` and `weight_dy`. */
    weight_dx: Int32Array;
    weight_dy: Int32Array;
    /** `sizeCst = float(64 / (FREAK_LOG2 * nOctaves))`. */
    size_cst: number;
}

/**
 * One pattern point, as `buildPattern` fills `patternLookup`: point `p` at
 * scaling factor `sf` and orientation angle `theta`, written to `out[0..2]`
 * as `x`, `y`, `sigma` (each float32). Ring `i` has `n` points, the `k`-th.
 */
function pattern_point(sf: number, ps: number, theta: number, p: number, out: Float64Array): void {
    const i = p < 42 ? (p / 6) | 0 : 7;
    const k = p < 42 ? p % 6 : 0;
    const n = p < 42 ? 6 : 1;
    const beta = (Math.PI / n) * (i % 2);
    const alpha = (k * 2 * Math.PI) / n + beta + theta;
    out[0] = f(RADIUS[i] * Math.cos(alpha) * sf * ps);
    out[1] = f(RADIUS[i] * Math.sin(alpha) * sf * ps);
    out[2] = f(SIGMA[i] * sf * ps);
}

/**
 * The constants `buildPattern` and `computeDescriptors` derive from
 * `pattern_scale` and `n_octaves`, recomputed on every call (a few hundred
 * numbers, about 1.4 KB). Module-internal; exported for the tests.
 */
export function freak_params(pattern_scale: number, n_octaves: number): FreakParams {
    const ps = f(pattern_scale);
    const scale_step = Math.pow(2.0, n_octaves / NB_SCALES);
    const scaling = new Float64Array(NB_SCALES);
    const sizes = new Float64Array(NB_SCALES);
    for (let s = 0; s < NB_SCALES; ++s) {
        const sf = Math.pow(scale_step, s);
        scaling[s] = sf;
        let size = 0;
        for (let i = 0; i < 8; ++i) {
            const m = Math.ceil((RADIUS[i] + SIGMA[i]) * sf * ps) + 1;
            if (size < m) size = m;
        }
        sizes[s] = size;
    }
    // orientation weights, from the scale-0, orientation-0 points
    const pts = new Float64Array(NB_POINTS * 2);
    const pt = new Float64Array(3);
    for (let p = 0; p < NB_POINTS; ++p) {
        pattern_point(scaling[0], ps, 0, p, pt);
        pts[2 * p] = pt[0];
        pts[2 * p + 1] = pt[1];
    }
    const weight_dx = new Int32Array(FREAK_NB_ORIENPAIRS);
    const weight_dy = new Int32Array(FREAK_NB_ORIENPAIRS);
    for (let m = 0; m < FREAK_NB_ORIENPAIRS; ++m) {
        const a = FREAK_ORIEN_I[m] * 2;
        const b = FREAK_ORIEN_J[m] * 2;
        const dx = f(pts[a] - pts[b]);
        const dy = f(pts[a + 1] - pts[b + 1]);
        const norm_sq = f(f(dx * dx) + f(dy * dy));
        weight_dx[m] = cv_round(f(dx / norm_sq) * 4096.0);
        weight_dy[m] = cv_round(f(dy / norm_sq) * 4096.0);
    }
    const size_cst = f(NB_SCALES / (FREAK_LOG2 * n_octaves));
    return { pattern_scale: ps, scaling, sizes, weight_dx, weight_dy, size_cst };
}

/**
 * `meanIntensity`: the mean of `src` over the box of the pattern point at
 * (`px`, `py`) with radius `sigma`, around the keypoint (`kx`, `ky`).
 */
function mean_intensity(
    src: matrix_t["data"],
    cols: number,
    ii: Float64Array,
    kx: number,
    ky: number,
    px: number,
    py: number,
    sigma: number
): number {
    const xf = f(px + kx);
    const yf = f(py + ky);
    const x = Math.trunc(xf);
    const y = Math.trunc(yf);
    if (sigma < 0.5) {
        // OpenCV's bilinear branch, ported with its rounding as is: the weights
        // sum to 1024 * 1024, but it adds 2 * 1024 * 1024 and divides by
        // 4 * 1024 * 1024, so the result is about a quarter of the intensity.
        const r_x = Math.trunc(f(f(xf - x) * 1024));
        const r_y = Math.trunc(f(f(yf - y) * 1024));
        const r_x_1 = 1024 - r_x;
        const r_y_1 = 1024 - r_y;
        const o = y * cols + x;
        const ret =
            r_x_1 * r_y_1 * src[o] +
            r_x * r_y_1 * src[o + 1] +
            r_x_1 * r_y * src[o + cols] +
            r_x * r_y * src[o + cols + 1] +
            2 * 1024 * 1024;
        return Math.floor(ret / (4 * 1024 * 1024));
    }
    const fw = cols + 1;
    const x_left = cv_round(f(xf - sigma));
    const y_top = cv_round(f(yf - sigma));
    const x_right = cv_round(f(f(xf + sigma) + 1)); // the integral image is 1 px wider
    const y_bottom = cv_round(f(f(yf + sigma) + 1)); // and 1 px higher
    const sum =
        ii[y_bottom * fw + x_right] - ii[y_bottom * fw + x_left] + ii[y_top * fw + x_left] - ii[y_top * fw + x_right];
    const area = (x_right - x_left) * (y_bottom - y_top);
    return Math.floor((sum + (area >> 1)) / area);
}

/**
 * FREAK — **Fast Retina Keypoint** (Alahi, Ortiz and Vandergheynst, CVPR
 * 2012): a 512-bit binary descriptor comparing the smoothed intensity of 43
 * points on a retina-like pattern of concentric rings. It estimates each
 * keypoint's orientation itself, from 45 long-range point pairs, so it needs
 * no `ic_angle` step. Matched with Hamming distance (`bfmatcher`).
 *
 * Ported from OpenCV's `cv::xfeatures2d::FREAK`, file
 * [`modules/xfeatures2d/src/freak.cpp`](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp)
 * of opencv_contrib at the reference release 4.10.0 (AGENTS.md), where it is
 * `FREAK_Impl`. The port reproduces OpenCV's descriptors, kept keypoints and
 * angles bit for bit, which the fixtures in `tests/parity/freak.test.ts` pin.
 * jsfeat had no FREAK (#80).
 *
 * **Memory.** OpenCV's `buildPattern` stores every pattern point at 64 scales
 * and 256 orientations (about 8.5 MB). Here the points are computed on
 * demand, with `buildPattern`'s own expressions, so the bits are the same.
 * Resident: 2266 B of module-level tables (the 512 pairs as `Int16`, 1024 B,
 * and as two `Uint8` point-index arrays, 1024 B; the 45 orientation pairs,
 * 90 B; the ring radii and sigmas, 128 B). Per call, about 2 KB of
 * constants and scratch (scaling factors, pattern sizes and weights, 1384 B;
 * the scale-0 points, 688 B; the 43 means), the scale index of each
 * keypoint (4 bytes each) and the integral image, a
 * `Float64` buffer of `(cols + 1) * (rows + 1)` entries borrowed from the
 * shared pool.
 *
 * A stateless singleton: call it as `jsfeatNext.freak.describe(...)`.
 */
export class freak extends jsfeatNext {
    /** Image-processing helper, for the integral image. */
    private readonly ip: imgproc;

    constructor() {
        super();
        this.ip = new imgproc();
    }

    /**
     * Computes one 64-byte FREAK descriptor per keypoint of `corners[0 ..
     * count)` that fits in the image, and drops the others. Mirrors
     * `FREAK_create(orientation_normalized, scale_normalized, pattern_scale,
     * n_octaves)->compute(image, keypoints, descriptors)`, and reproduces its
     * output bit for bit.
     *
     * The port follows these OpenCV functions, at 4.10.0:
     * - `buildPattern`, the pattern points, `patternSizes` and the orientation
     *   weights:
     *   [freak.cpp#L215-L334](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp#L215-L334);
     * - the constants and the default pairs:
     *   [freak.cpp#L156-L198](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp#L156-L198);
     * - `compute`, the integral image:
     *   [freak.cpp#L336-L379](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp#L336-L379);
     * - `computeDescriptors`, the scale index, the border filter and the
     *   orientation:
     *   [freak.cpp#L462-L575](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp#L462-L575);
     * - the generic `extractDescriptor`, the bit order (the SSE2 version that
     *   runs on x86-64 gives the same order):
     *   [freak.cpp#L381-L400](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp#L381-L400);
     * - `meanIntensity`:
     *   [freak.cpp#L642-L697](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp#L642-L697).
     *
     * Every `float` expression is evaluated in float32 (`Math.fround` after
     * each operation, in C++ order), and `x`, `y` and `size` are read through
     * `Math.fround`, as `cv::KeyPoint` stores them. `cvRound` rounds half to
     * even. When a pattern point's sigma is below 0.5 (a small
     * `pattern_scale`), `meanIntensity` takes OpenCV's bilinear branch, which
     * adds `2·1024·1024` to a sum of weights `1024·1024` and divides by
     * `4·1024·1024`, so it returns about a quarter of the intensity. That
     * rounding is ported as is, since OpenCV's bits depend on it.
     *
     * **Compaction.** Keypoints whose pattern does not fit in the image
     * (`x <= ps`, `y <= ps`, `x >= cols - ps` or `y >= rows - ps`, with `ps`
     * the pattern size at the keypoint's scale) are dropped, as OpenCV erases
     * them. The kept ones are moved to `corners[0 .. kept)`, in their input
     * order, and `kept` is returned: row `i` of `descriptors` describes
     * `corners[i]`. The order of `corners[kept .. count)` is unspecified (it
     * holds the dropped objects); `corners[count ..]` and the array's length
     * are untouched. No `keypoint_t` is copied.
     *
     * **Angle out.** The input `angle` is never read. Each kept keypoint's
     * `angle` is overwritten, in radians: with OpenCV's float32 angle `deg`,
     * as `deg * 0.017453292519943295`, when `orientation_normalized`, and with
     * `0` otherwise (OpenCV writes `0.0`). The angle is OpenCV's, in
     * `(-180°, 180°]`, negative values included. So `teblid.describe` on
     * FREAK's keypoints does not reproduce OpenCV's TEBLID bits where the
     * angle is negative: OpenCV's TEBLID treats a negative angle as upright,
     * jsfeatNext's as a rotation.
     *
     * **Options**, with OpenCV's defaults: `orientation_normalized` (`true`),
     * `scale_normalized` (`true`; with it off, `size` is not read and every
     * keypoint uses the scale of a size-21 keypoint), `pattern_scale` (`22`)
     * and `n_octaves` (`4`).
     *
     * @example
     * ```ts
     * import jsfeatNext from "@webarkit/jsfeat-next";
     *
     * // img: a U8C1 frame. Detect, give each keypoint its size, describe: no ic_angle.
     * // a keypoint_t has every field of the point_t that detect fills
     * const pool = Array.from({ length: img.cols * img.rows }, () => new jsfeatNext.keypoint_t());
     * const found = jsfeatNext.fast_corners.detect(img, pool, 20);
     * const kps = pool.slice(0, found);
     * for (const kp of kps) kp.size = 31;
     * const descriptors = new jsfeatNext.matrix_t(64, kps.length, jsfeatNext.U8C1_t);
     * const kept = jsfeatNext.freak.describe(img, kps, kps.length, descriptors);
     * // kps[0 .. kept) are described, each with its estimated angle
     * ```
     *
     * @param src Grayscale `U8C1` image, at full resolution. Anything else throws a `TypeError`.
     * @param corners Keypoints; `x`, `y` and, with `scale_normalized`, `size`
     *                are read, and `angle` is written. A non-finite `x` or `y`
     *                (as float32), or with `scale_normalized` a `size` that is
     *                not finite and positive, throws a `RangeError` naming the
     *                index. Compacted in place (see above).
     * @param count Number of keypoints to consider, `corners[0 .. count)`;
     *              more than `corners.length` throws a `RangeError`.
     * @param descriptors Output, resized to 64 columns by `kept` rows of `U8`.
     * @param options See {@link FreakOptions}. A `pattern_scale` that is not
     *                finite and positive as float32, or an `n_octaves` that is
     *                not a positive integer, throws a `RangeError`.
     * @returns `kept`, the number of described keypoints.
     */
    describe(
        src: matrix_t,
        corners: keypoint_t[],
        count: number,
        descriptors: matrix_t,
        options: FreakOptions = {}
    ): number {
        // Everything that can reject the input is checked before the first
        // buffer is borrowed, so the shared pool is not touched on a bad call.
        const orientation_normalized = options.orientation_normalized === undefined || !!options.orientation_normalized;
        const scale_normalized = options.scale_normalized === undefined || !!options.scale_normalized;
        const pattern_scale = options.pattern_scale === undefined ? 22 : options.pattern_scale;
        const n_octaves = options.n_octaves === undefined ? 4 : options.n_octaves;
        // checked as float32: FREAK_create takes a float
        if (!(f(pattern_scale) > 0) || !Number.isFinite(f(pattern_scale))) {
            throw new RangeError(`freak.describe: pattern_scale must be finite and positive, got ${pattern_scale}`);
        }
        if (!Number.isInteger(n_octaves) || n_octaves < 1 || n_octaves > 0x7fffffff) {
            throw new RangeError(`freak.describe: n_octaves must be a positive integer, got ${n_octaves}`);
        }
        if (src.type !== JSFEAT_CONSTANTS.U8_t || src.channel !== 1) {
            throw new TypeError("freak.describe: src must be a U8C1 (8-bit, single-channel) image");
        }
        if (!Number.isInteger(count) || count < 0) {
            throw new RangeError(`freak.describe: count must be a non-negative integer, got ${count}`);
        }
        if (count > corners.length) {
            throw new RangeError(`freak.describe: count ${count} exceeds corners.length ${corners.length}`);
        }
        for (let k = 0; k < count; ++k) {
            // cv::KeyPoint stores the position and size as float32: check them there
            if (!Number.isFinite(f(corners[k].x)) || !Number.isFinite(f(corners[k].y))) {
                throw new RangeError(
                    `freak.describe: keypoint ${k} has a non-finite position (${corners[k].x}, ${corners[k].y})`
                );
            }
            if (scale_normalized) {
                const size = f(corners[k].size);
                if (!(size > 0) || !Number.isFinite(size)) {
                    throw new RangeError(
                        `freak.describe: keypoint ${k} has size ${corners[k].size}; with scale_normalized ` +
                            "FREAK needs a finite size > 0 (OpenCV takes log(size / 7))"
                    );
                }
            }
        }

        const P = freak_params(pattern_scale, n_octaves);
        const cols = src.cols | 0;
        const rows = src.rows | 0;

        // the scale index and the border filter, compacting in place
        const scale_idx = new Int32Array(count);
        const const_idx = Math.min(Math.max(cv_round(1.0986122886681 * P.size_cst), 0), NB_SCALES - 1);
        let kept = 0;
        for (let k = 0; k < count; ++k) {
            const kp = corners[k];
            let s = const_idx;
            if (scale_normalized) {
                // (int)(logf(size / 7) * sizeCst + 0.5): the + 0.5 is a double
                s = Math.max(Math.trunc(f(f(Math.log(f(f(kp.size) / 7))) * P.size_cst) + 0.5), 0);
                if (s >= NB_SCALES) s = NB_SCALES - 1;
            }
            const ps = P.sizes[s];
            const x = f(kp.x);
            const y = f(kp.y);
            if (x <= ps || y <= ps || x >= cols - ps || y >= rows - ps) continue;
            corners[k] = corners[kept];
            corners[kept] = kp;
            scale_idx[kept++] = s;
        }

        if (!(descriptors.type & JSFEAT_CONSTANTS.U8_t)) {
            // relocate to U8 type, as orb.describe does
            descriptors.type = JSFEAT_CONSTANTS.U8_t;
            descriptors.cols = 64;
            descriptors.rows = kept;
            descriptors.channel = 1;
            descriptors.allocate();
        } else {
            descriptors.resize(64, kept, 1);
        }
        if (kept === 0) return 0;

        const total = (cols + 1) * (rows + 1);
        let sum_node: _pool_node_t = null;
        try {
            sum_node = this.cache.get_buffer(total * 8);
            const ii = sum_node.f64;
            // compute_integral_image is typed for number[]; it only indexes it.
            // A Float64 integral keeps every sum exact, whatever the image size.
            this.ip.compute_integral_image(src, ii as unknown as number[], null, null);
            this.describe_all(src, ii, corners, kept, scale_idx, P, orientation_normalized, descriptors.data);
        } finally {
            if (sum_node !== null) this.cache.put_buffer(sum_node);
        }
        return kept;
    }

    /** The orientation and descriptor loop of `computeDescriptors`, on a ready integral image. */
    private describe_all(
        src: matrix_t,
        ii: Float64Array,
        corners: keypoint_t[],
        kept: number,
        scale_idx: Int32Array,
        P: FreakParams,
        orientation_normalized: boolean,
        out: matrix_t["data"]
    ): void {
        const cols = src.cols | 0;
        const data = src.data;
        const ps = P.pattern_scale;
        const v = new Int32Array(NB_POINTS);
        const pt = new Float64Array(3);

        for (let k = 0; k < kept; ++k) {
            const kp = corners[k];
            const kx = f(kp.x);
            const ky = f(kp.y);
            const sf = P.scaling[scale_idx[k]];
            let theta_idx = 0;
            if (!orientation_normalized) {
                kp.angle = 0;
            } else {
                for (let p = 0; p < NB_POINTS; ++p) {
                    pattern_point(sf, ps, 0, p, pt);
                    v[p] = mean_intensity(data, cols, ii, kx, ky, pt[0], pt[1], pt[2]);
                }
                let d0 = 0;
                let d1 = 0;
                for (let m = FREAK_NB_ORIENPAIRS - 1; m >= 0; --m) {
                    const delta = v[FREAK_ORIEN_I[m]] - v[FREAK_ORIEN_J[m]];
                    // C's int division truncates toward zero
                    d0 += Math.trunc((delta * P.weight_dx[m]) / 2048);
                    d1 += Math.trunc((delta * P.weight_dy[m]) / 2048);
                }
                // float(atan2f((float)d1, (float)d0) * (180.0 / CV_PI)), in degrees
                const angle = f(f(Math.atan2(f(d1), f(d0))) * (180.0 / Math.PI));
                kp.angle = angle * 0.017453292519943295;
                theta_idx = cv_round(f(256 * angle) * (1 / 360.0));
                if (theta_idx < 0) theta_idx += 256;
                if (theta_idx >= 256) theta_idx -= 256;
            }

            const theta = (theta_idx * 2 * Math.PI) / 256;
            for (let p = 0; p < NB_POINTS; ++p) {
                pattern_point(sf, ps, theta, p, pt);
                v[p] = mean_intensity(data, cols, ii, kx, ky, pt[0], pt[1], pt[2]);
            }

            // extractDescriptor: comparison cnt sets bit kk of the row's bitset,
            // byte kk >> 3, bit kk & 7
            const o = k * 64;
            for (let b = 0; b < 64; ++b) out[o + b] = 0;
            let cnt = 0;
            for (let n = 7; n < 512; n += 128) {
                for (let m = 7; m >= 0; --m) {
                    const nm = n - m;
                    for (let kk = nm + 120; kk >= nm; kk -= 8, ++cnt) {
                        if (v[FREAK_PAIR_I[cnt]] >= v[FREAK_PAIR_J[cnt]]) out[o + (kk >> 3)] |= 1 << (kk & 7);
                    }
                }
            }
        }
    }
}
