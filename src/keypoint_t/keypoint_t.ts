/*
 *  keypoint_t.ts
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

/**
 * A 2D feature keypoint with position, detector response, pyramid level and
 * orientation. Used by the detectors (`fast_corners`, `yape`, `yape06`) as
 * output slots and by `orb.describe` as descriptor anchors.
 *
 * Mirrors `jsfeat.keypoint_t` from the original library.
 *
 * @example
 * ```ts
 * // pre-allocate a corner pool for a detector
 * const corners = [];
 * for (let i = 0; i < 500; i++) corners.push(new keypoint_t(0, 0, 0, 0, -1));
 * ```
 */
export class keypoint_t {
    /** X (column) coordinate in pixels. */
    public x: number;
    /** Y (row) coordinate in pixels. */
    public y: number;
    /** Detector response / corner strength (higher = stronger). */
    public score: number;
    /** Pyramid level the keypoint was detected on. */
    public level: number;
    /** Orientation in radians; -1 when not yet computed. */
    public angle: number;

    /**
     * @param x     X (column) coordinate. Default 0.
     * @param y     Y (row) coordinate. Default 0.
     * @param score Detector response. Default 0.
     * @param level Pyramid level. Default 0.
     * @param angle Orientation in radians. Default -1 (unset).
     */
    constructor(x: number = 0, y: number = 0, score: number = 0, level: number = 0, angle: number = -1.0) {
        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}
