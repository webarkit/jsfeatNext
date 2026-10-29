/*
 *  teblid.ts
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
 *  opencv_contrib/modules/xfeatures2d/src/beblid.cpp, teblid.p256.hpp and
 *  teblid.p512.hpp at tag 4.10.0
 *  (https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp,
 *  https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/teblid.p256.hpp,
 *  https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/teblid.p512.hpp),
 *  Copyright (c) OpenCV contributors, licensed under the Apache License,
 *  Version 2.0; a copy is included in LICENSES/Apache-2.0.txt. This file is a
 *  modified version of that source. TEBLID: I. Suárez, J. M. Buenaposada and
 *  L. Baumela, "Revisiting Binary Local Image Description for Resource Limited
 *  Devices", IEEE Robotics and Automation Letters 6(4), 8317-8324, 2021.
 *
 */

import jsfeatNext from "../core/core";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { imgproc } from "../imgproc/imgproc";
import type { matrix_t } from "../matrix_t/matrix_t";
import type { keypoint_t } from "../keypoint_t/keypoint_t";
import type _pool_node_t from "../node_utils/_pool_node_t";
import { TEBLID_256, TEBLID_512, type TeblidTable } from "./teblid_tables";

/** Options of {@link teblid.describe}. */
export interface TeblidOptions {
    /** Descriptor length in bits: 256 (32 bytes per row, the default) or 512 (64 bytes). */
    bits?: 256 | 512;
    /**
     * OpenCV's `scale_factor`: how much the 32x32 learning patch is magnified
     * relative to the keypoint's `size`. Defaults to 1.0 (ORB keypoints); see
     * the table in {@link teblid.describe}.
     */
    scale_factor?: number;
}

/** Rounds to float32, as every `float` operation in beblid.cpp does. */
const f = Math.fround;

/**
 * `CV_ROUNDNUM(x) = (int)(x + 0.5f)`: a float32 addition, then truncation
 * toward zero. Not `Math.round`, which rounds `-0.7` to `-1` where this gives
 * `0`. `x` is a float32 value; the results are far below 2^31, so `| 0`
 * truncates exactly.
 */
export function roundnum(x: number): number {
    return f(x + 0.5) | 0;
}

/** `box1x1`-style clamp of a box's top or left edge (computeABWLResponse). */
function clamp_lo(v: number, frame: number): number {
    if (v < 0) return 0;
    if (v >= frame - 1) return frame - 2;
    return v;
}

/** `box1x2`-style clamp of a box's bottom or right edge (computeABWLResponse). */
function clamp_hi(v: number, frame: number): number {
    if (v <= 0) return 1;
    if (v >= frame) return frame - 1;
    return v;
}

/**
 * Mean of one box of the integral image, clamped to the frame as
 * `computeABWLResponse` does. `fw`, `fh` are the integral image's dimensions
 * (`cols + 1`, `rows + 1`).
 */
function box_average(ii: Int32Array, x: number, y: number, r: number, fw: number, fh: number): number {
    const x1 = clamp_lo(x - r, fw);
    const y1 = clamp_lo(y - r, fh);
    const x2 = clamp_hi(x + r + 1, fw);
    const y2 = clamp_hi(y + r + 1, fh);
    // `float(A + D - B - C)` with an `int` sum: `| 0` wraps it mod 2^32 like
    // the integral image, so a wrap in the corners cancels before the float.
    const sum = f((ii[y1 * fw + x1] + ii[y2 * fw + x2] - ii[y1 * fw + x2] - ii[y2 * fw + x1]) | 0);
    return f(sum / ((y2 - y1) * (x2 - x1)));
}

/**
 * TEBLID — **Triplet-based Efficient Binary Local Image Descriptor** (Suárez,
 * Buenaposada and Baumela, IEEE RA-L 2021): a binary descriptor whose bits
 * compare the mean grey level of two boxes, at positions, sizes and
 * thresholds learnt by boosting. 256 or 512 bits per keypoint, matched with
 * Hamming distance like ORB's.
 *
 * Ported from OpenCV's `cv::xfeatures2d::TEBLID`, file
 * [`modules/xfeatures2d/src/beblid.cpp`](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp)
 * of opencv_contrib at the reference release 4.10.0 (AGENTS.md), where it is
 * `BEBLID_Impl<ABWLParamsFloatTh>`. The port reproduces OpenCV's descriptors
 * bit for bit, which the fixtures in `tests/parity/teblid.test.ts` pin. jsfeat
 * had no TEBLID (#135).
 *
 * A stateless singleton: call it as `jsfeatNext.teblid.describe(...)`.
 */
export class teblid extends jsfeatNext {
    /** Image-processing helper, for the integral image. */
    private readonly ip: imgproc;

    constructor() {
        super();
        this.ip = new imgproc();
    }

    /**
     * Computes one TEBLID descriptor per keypoint of `corners[0 .. count)`.
     * Mirrors `TEBLID::create(scale_factor, n_bits)->compute(image, keypoints,
     * descriptors)`, and reproduces its output bit for bit.
     *
     * The port follows these OpenCV functions, at 4.10.0:
     * - `TEBLID::create`, the choice of table:
     *   [beblid.cpp#L109-L125](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L109-L125);
     * - `BEBLID_Impl::compute`, the integral image and the output matrix:
     *   [beblid.cpp#L303-L348](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L303-L348);
     * - `computeBoxDiffsDescriptor`, the loop over keypoints and its fast
     *   path for keypoints away from the border:
     *   [beblid.cpp#L357-L453](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L357-L453);
     * - `rectifyABWL`, the map from the 32x32 learning patch to the image:
     *   [beblid.cpp#L163-L206](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L163-L206);
     * - `isKeypointInTheBorder`, the choice of path:
     *   [beblid.cpp#L135-L152](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L135-L152);
     * - `computeABWLResponse`, the clamped path near the border:
     *   [beblid.cpp#L215-L301](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L215-L301);
     * - `CV_ROUNDNUM`:
     *   [beblid.cpp#L15](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L15).
     *
     * Every `float` expression of those functions is evaluated in float32
     * (`Math.fround` after each operation, in C++ order), and `x`, `y` and
     * `size` are read through `Math.fround`, as `cv::KeyPoint` stores them.
     * Bit `7 - (i mod 8)` of byte `floor(i / 8)` is set when the response of
     * weak learner `i` is at most its threshold: most significant bit first,
     * as OpenCV.
     *
     * **`size` is required.** Each keypoint is described over a neighbourhood
     * of diameter `size * scale_factor` pixels, in the pixels of `src`. A
     * keypoint whose `size` is not positive throws a `RangeError` naming its
     * index. jsfeatNext's detectors leave `size` at 0, so the caller fills it:
     * for ORB-style keypoints detected at pyramid level `level` with scale step
     * `scaleStep`, `kp.size = 31 * scaleStep ** level`, with `x`, `y` in
     * level-0 pixels.
     *
     * **`scale_factor`** defaults to 1.0. OpenCV's `TEBLID::create` has no
     * default; its documentation recommends, per detector:
     *
     * | keypoints from          | `scale_factor` |
     * | ----------------------- | -------------- |
     * | ORB                     | 1.00           |
     * | FAST, AGAST, AKAZE, BRISK | 5.00         |
     * | KAZE, SURF              | 6.25           |
     * | SIFT                    | 6.75           |
     *
     * jsfeatNext's own pipeline (FAST corners oriented by `orb.ic_angle`, with
     * an ORB-style `size`) is the ORB case.
     *
     * **Angles.** jsfeatNext angles are radians, and `-1` (the `keypoint_t`
     * default) means "not oriented". `angle === -1` takes OpenCV's upright
     * branch exactly. Any other value is a rotation: `cos` and `sin` of the
     * radian angle, each rounded to float32. OpenCV angles are degrees in
     * `[0, 360)`, computed as `float(cos(angle * 0.017453292519943295))`; a
     * caller holding OpenCV degrees `deg` therefore passes
     * `Math.fround(deg) * 0.017453292519943295` to get the same double and the
     * same bits. One deliberate difference: OpenCV treats every negative angle
     * as upright, while here a negative radian angle other than `-1` is a real
     * rotation, since `orb.ic_angle` returns angles in `(-pi, pi]`. No angle
     * OpenCV produces is negative except `-1`, so the difference is never
     * reached from OpenCV inputs.
     *
     * **Out-of-buffer reads.** On the fast path OpenCV reads the integral
     * image at flat offsets without bounds checks: a box past the left or
     * right edge reads the neighbouring row, which this port reproduces, and
     * a box past the top or bottom row reads outside the buffer, which is
     * undefined behaviour in OpenCV. The border margin makes that unreachable
     * for ordinary sizes; when a keypoint would still reach outside, this
     * method throws a `RangeError` naming the keypoint instead of returning
     * bits OpenCV does not define. The contents of `descriptors` are then
     * unspecified.
     *
     * @example
     * ```ts
     * import jsfeatNext from "@webarkit/jsfeat-next";
     *
     * // img: a U8C1 frame. Detect, orient, give each keypoint its size, describe.
     * const pool = Array.from({ length: img.cols * img.rows }, () => new jsfeatNext.keypoint_t());
     * const found = jsfeatNext.fast_corners.detect(img, pool, 20);
     * const kps = pool.slice(0, found);
     * for (const kp of kps) {
     *     kp.angle = jsfeatNext.orb.ic_angle(img, kp.x, kp.y);
     *     kp.size = 31 * 1.2 ** kp.level; // ORB's patch, at the keypoint's pyramid level
     * }
     * const descriptors = new jsfeatNext.matrix_t(32, kps.length, jsfeatNext.U8C1_t);
     * jsfeatNext.teblid.describe(img, kps, kps.length, descriptors, { bits: 256, scale_factor: 1.0 });
     * ```
     *
     * @param src Grayscale `U8C1` image, at full resolution. Anything else throws a `TypeError`.
     * @param corners Keypoints; `x`, `y`, `size` and `angle` are read. A
     *                non-finite `x` or `y` (as float32) throws a `RangeError`
     *                naming the index.
     * @param count Number of keypoints to describe, `corners[0 .. count)`;
     *              more than `corners.length` throws a `RangeError`.
     * @param descriptors Output, resized to `bits / 8` columns by `count` rows of `U8`.
     * @param options `bits` (256 or 512, default 256; anything else throws a
     *                `RangeError`) and `scale_factor` (default 1.0; must be
     *                finite and positive).
     */
    describe(
        src: matrix_t,
        corners: keypoint_t[],
        count: number,
        descriptors: matrix_t,
        options: TeblidOptions = {}
    ): void {
        // Everything that can reject the input is checked before the first
        // buffer is borrowed, so the shared pool is not touched on a bad call.
        const bits = options.bits === undefined ? 256 : options.bits;
        let table: TeblidTable;
        if (bits === 256) table = TEBLID_256;
        else if (bits === 512) table = TEBLID_512;
        else throw new RangeError(`teblid.describe: bits must be 256 or 512, got ${bits}`);

        const scale_factor = options.scale_factor === undefined ? 1.0 : options.scale_factor;
        if (!(scale_factor > 0) || !Number.isFinite(scale_factor)) {
            throw new RangeError(`teblid.describe: scale_factor must be finite and positive, got ${scale_factor}`);
        }
        if (src.type !== JSFEAT_CONSTANTS.U8_t || src.channel !== 1) {
            throw new TypeError("teblid.describe: src must be a U8C1 (8-bit, single-channel) image");
        }
        if (!Number.isInteger(count) || count < 0) {
            throw new RangeError(`teblid.describe: count must be a non-negative integer, got ${count}`);
        }
        if (count > corners.length) {
            throw new RangeError(`teblid.describe: count ${count} exceeds corners.length ${corners.length}`);
        }
        for (let k = 0; k < count; ++k) {
            const size = f(corners[k].size);
            if (!(size > 0)) {
                throw new RangeError(
                    `teblid.describe: keypoint ${k} has size ${corners[k].size}; TEBLID needs size > 0 ` +
                        "(the diameter of the described neighbourhood, see the TSDoc)"
                );
            }
            // cv::KeyPoint stores the position as float32: check it there
            if (!Number.isFinite(f(corners[k].x)) || !Number.isFinite(f(corners[k].y))) {
                throw new RangeError(
                    `teblid.describe: keypoint ${k} has a non-finite position (${corners[k].x}, ${corners[k].y})`
                );
            }
        }

        const nbytes = table.n >> 3;
        if (!(descriptors.type & JSFEAT_CONSTANTS.U8_t)) {
            // relocate to U8 type, as orb.describe does
            descriptors.type = JSFEAT_CONSTANTS.U8_t;
            descriptors.cols = nbytes;
            descriptors.rows = count;
            descriptors.channel = 1;
            descriptors.allocate();
        } else {
            descriptors.resize(nbytes, count, 1);
        }
        if (count === 0) return;

        const w = src.cols | 0;
        const h = src.rows | 0;
        const fw = w + 1; // integral image width, `integralImg.cols`
        const fh = h + 1;
        const total = fw * fh;

        const sum_node = this.cache.get_buffer(total << 2);
        let rect_node: _pool_node_t = null;
        try {
            rect_node = this.cache.get_buffer((table.n * 5) << 2);
            const ii = sum_node.i32;
            // compute_integral_image is typed for number[]; it only indexes it
            this.ip.compute_integral_image(src, ii as unknown as number[], null, null);
            this.describe_all(ii, w, h, corners, count, table, f(scale_factor), rect_node.i32, descriptors.data);
        } finally {
            if (rect_node !== null) this.cache.put_buffer(rect_node);
            this.cache.put_buffer(sum_node);
        }
    }

    /** The per-keypoint loop of `computeBoxDiffsDescriptor`, on a ready integral image. */
    private describe_all(
        ii: Int32Array,
        w: number,
        h: number,
        corners: keypoint_t[],
        count: number,
        table: TeblidTable,
        sf: number,
        rect: Int32Array,
        out: matrix_t["data"]
    ): void {
        const n = table.n;
        const geom = table.geom;
        const th = table.th;
        const fw = w + 1;
        const fh = h + 1;
        const total = fw * fh;
        let o = 0;

        for (let k = 0; k < count; ++k) {
            const kp = corners[k];
            const X = f(kp.x);
            const Y = f(kp.y);
            const sfsz = f(sf * f(kp.size));

            // rectifyABWL: s = scaleFactor * kp.size / (0.5f * (32 + 32))
            const s = f(sfsz / 32);
            let m00: number, m01: number, m02: number, m10: number, m11: number, m12: number;
            if (kp.angle === -1) {
                m00 = s;
                m01 = 0;
                m02 = f(f(f(-0.5 * s) * 32) + X); // -0.5f * s * patchSize.width + kp.pt.x
                m10 = 0;
                m11 = s;
                m12 = f(f(f(-s * 0.5) * 32) + Y); // -s * 0.5f * patchSize.height + kp.pt.y
            } else {
                const cosine = f(Math.cos(kp.angle));
                const sine = f(Math.sin(kp.angle));
                m00 = f(s * cosine);
                m01 = f(-s * sine);
                // (-s * cosine + s * sine) * patchSize.width * 0.5f + kp.pt.x
                m02 = f(f(f(f(f(-s * cosine) + f(s * sine)) * 32) * 0.5) + X);
                m10 = f(s * sine);
                m11 = f(s * cosine);
                // (-s * sine - s * cosine) * patchSize.height * 0.5f + kp.pt.y
                m12 = f(f(f(f(f(-s * sine) - f(s * cosine)) * 32) * 0.5) + Y);
            }
            for (let i = 0, g = 0; i < n; ++i, g += 5) {
                const x1 = geom[g],
                    y1 = geom[g + 1],
                    x2 = geom[g + 2],
                    y2 = geom[g + 3];
                rect[g] = roundnum(f(f(f(m00 * x1) + f(m01 * y1)) + m02));
                rect[g + 1] = roundnum(f(f(f(m10 * x1) + f(m11 * y1)) + m12));
                rect[g + 2] = roundnum(f(f(f(m00 * x2) + f(m01 * y2)) + m02));
                rect[g + 3] = roundnum(f(f(f(m10 * x2) + f(m11 * y2)) + m12));
                rect[g + 4] = roundnum(f(s * geom[g + 4]));
            }

            // isKeypointInTheBorder: s = scaleFactor * kp.size / (32 + 32)
            const sb = f(sfsz / 64);
            const border = f(f(32 * sb) * 1.75); // patchSize * s * CV_BEBLID_EXTRA_RATIO_MARGIN
            const in_border = X < border || f(X + border) >= w || Y < border || f(Y + border) >= h;

            let byte = 0;
            if (in_border) {
                // computeABWLResponse: boxes clamped to the frame, means in float32
                for (let i = 0, g = 0; i < n; ++i, g += 5) {
                    const r = rect[g + 4];
                    const a1 = box_average(ii, rect[g], rect[g + 1], r, fw, fh);
                    const a2 = box_average(ii, rect[g + 2], rect[g + 3], r, fw, fh);
                    byte |= (f(a1 - a2) <= th[i] ? 1 : 0) << (7 - (i & 7));
                    if ((i & 7) === 7) {
                        out[o++] = byte;
                        byte = 0;
                    }
                }
            } else {
                // fast path: integer box sums at flat offsets, compared with th * side^2
                for (let i = 0, g = 0; i < n; ++i, g += 5) {
                    const r = rect[g + 4];
                    const b1x1 = rect[g] - r;
                    const b1y1 = (rect[g + 1] - r) * fw;
                    const b1x2 = rect[g] + r + 1;
                    const b1y2 = (rect[g + 1] + r + 1) * fw;
                    const b2x1 = rect[g + 2] - r;
                    const b2y1 = (rect[g + 3] - r) * fw;
                    const b2x2 = rect[g + 2] + r + 1;
                    const b2y2 = (rect[g + 3] + r + 1) * fw;
                    // A is the lowest offset of a box and D the highest: outside
                    // [0, total) OpenCV reads past the integral image (UB).
                    if (b1y1 + b1x1 < 0 || b1y2 + b1x2 >= total || b2y1 + b2x1 < 0 || b2y2 + b2x2 >= total) {
                        throw new RangeError(
                            `teblid.describe: keypoint ${k} reaches outside the integral image on OpenCV's ` +
                                "fast path, where OpenCV's result is undefined"
                        );
                    }
                    const side = 1 + (r << 1);
                    // An `int` sum in C++: `| 0` wraps it mod 2^32 like the
                    // integral image, so a wrap in the corners cancels.
                    const area =
                        (ii[b1y1 + b1x1] +
                            ii[b1y2 + b1x2] -
                            ii[b1y1 + b1x2] -
                            ii[b1y2 + b1x1] -
                            ii[b2y1 + b2x1] -
                            ii[b2y2 + b2x2] +
                            ii[b2y1 + b2x2] +
                            ii[b2y2 + b2x1]) |
                        0;
                    byte |= (f(area) <= f(th[i] * (side * side)) ? 1 : 0) << (7 - (i & 7));
                    if ((i & 7) === 7) {
                        out[o++] = byte;
                        byte = 0;
                    }
                }
            }
        }
    }
}
