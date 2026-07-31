/*
 *  fast_private.ts
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

// private functions
import type { TypedArray } from "../types";

/**
 * Computes the FAST-16 corner score for a candidate pixel: the largest
 * threshold for which the pixel would still be detected as a corner
 * (used for non-maximum suppression in `fast_corners.detect`).
 *
 * The score is derived from the min/max intensity differences over every
 * contiguous 9-pixel arc of the 16-pixel Bresenham circle around the
 * candidate.
 *
 * @param src       Grayscale image data.
 * @param off       Index of the candidate pixel in `src`.
 * @param pixel     Precomputed offsets of the 25 circle samples (16 + 9 wrap-around).
 * @param d         Scratch array receiving the 25 intensity differences.
 * @param threshold Detector threshold; acts as the score lower bound.
 * @returns The corner score (always ≥ `threshold` for detected corners).
 */
export function _cmp_score_16(
    src: TypedArray,
    off: number,
    pixel: Uint8Array | Int32Array,
    d: Uint8Array | Int32Array,
    threshold: number
): number {
    let N = 25,
        k = 0,
        v = src[off];
    let a0 = threshold,
        a = 0,
        b0 = 0,
        b = 0;

    for (; k < N; ++k) {
        d[k] = v - src[off + pixel[k]];
    }

    for (k = 0; k < 16; k += 2) {
        a = Math.min(d[k + 1], d[k + 2]);
        a = Math.min(a, d[k + 3]);

        if (a <= a0) continue;

        a = Math.min(a, d[k + 4]);
        a = Math.min(a, d[k + 5]);
        a = Math.min(a, d[k + 6]);
        a = Math.min(a, d[k + 7]);
        a = Math.min(a, d[k + 8]);
        a0 = Math.max(a0, Math.min(a, d[k]));
        a0 = Math.max(a0, Math.min(a, d[k + 9]));
    }

    b0 = -a0;
    for (k = 0; k < 16; k += 2) {
        b = Math.max(d[k + 1], d[k + 2]);
        b = Math.max(b, d[k + 3]);
        b = Math.max(b, d[k + 4]);
        b = Math.max(b, d[k + 5]);

        if (b >= b0) continue;
        b = Math.max(b, d[k + 6]);
        b = Math.max(b, d[k + 7]);
        b = Math.max(b, d[k + 8]);
        b0 = Math.min(b0, Math.max(b, d[k]));
        b0 = Math.min(b0, Math.max(b, d[k + 9]));
    }

    return -b0 - 1;
}
