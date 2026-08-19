/*
 *  rectify_patch.ts
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
import { imgproc } from "../imgproc/imgproc";

/**
 * Extracts a rotation-rectified square patch around a keypoint: builds a 2×3
 * affine transform that rotates by `angle` around `(px, py)` and centers a
 * `psize`×`psize` window, then warps the source image through it. Used by
 * `orb.describe` to make the BRIEF-style descriptor rotation-invariant.
 *
 * @param src          Source grayscale image.
 * @param dst          Destination patch (resized to `psize`×`psize` by the warp).
 * @param angle        Keypoint orientation in radians.
 * @param px           Keypoint x coordinate in `src`.
 * @param py           Keypoint y coordinate in `src`.
 * @param psize        Patch side length in pixels (ORB uses 32).
 * @param H            3×3 scratch matrix receiving the affine transform (first 6 entries used).
 * @param imgProcessor The `imgproc` instance whose `warp_affine` performs the sampling.
 */
export function rectify_patch(
    src: matrix_t,
    dst: matrix_t,
    angle: number,
    px: number,
    py: number,
    psize: number,
    H: matrix_t,
    imgProcessor: imgproc
) {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);

    H.data[0] = cosine;
    H.data[1] = -sine;
    H.data[2] = (-cosine + sine) * psize * 0.5 + px;
    H.data[3] = sine;
    H.data[4] = cosine;
    H.data[5] = (-sine - cosine) * psize * 0.5 + py;

    // Constant fill of 128: patch samples that fall outside `src` read this
    // fixed value rather than image content, which silently degrades the
    // descriptor for keypoints within ~20 px of an edge. See the margin note on
    // `orb.describe` and issue #110.
    imgProcessor.warp_affine(src, dst, H, 128);
}
