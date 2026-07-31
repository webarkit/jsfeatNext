/*
 *  pyramid_t.ts
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

import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { imgproc } from "../imgproc/imgproc";

/**
 * An image pyramid: level 0 holds the full-resolution image and each
 * subsequent level halves the previous one via `imgproc.pyrdown`. Consumed
 * by `optical_flow_lk.track` for coarse-to-fine tracking.
 *
 * Mirrors `jsfeat.pyramid_t` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export class pyramid_t extends jsfeatNext {
    /** Number of pyramid levels. */
    public levels: number;
    /** The level images: `data[i]` is a {@link matrix_t} of size `w>>i` × `h>>i`. */
    public data: matrix_t[];
    /** Bound `imgproc.pyrdown` used to build the levels. */
    private pyrdown: (src: matrix_t, dst: matrix_t) => void;

    constructor(levels: number) {
        super();
        this.levels = levels | 0;
        this.data = new Array(levels);
        const _imgproc = new imgproc();
        this.pyrdown = _imgproc.pyrdown;
    }

    /**
     * Allocates the per-level matrices for a base image of
     * `start_w`×`start_h` (level `i` gets `start_w>>i` × `start_h>>i`).
     *
     * @param start_w   Level-0 width. @param start_h Level-0 height.
     * @param data_type Packed type signature for the level images (e.g. `U8_t | C1_t`).
     */
    allocate(start_w: number, start_h: number, data_type: number): void {
        let i = this.levels;
        while (--i >= 0) {
            this.data[i] = new matrix_t(start_w >> i, start_h >> i, data_type);
        }
    }

    /**
     * Fills the pyramid from `input`: optionally copies it into level 0,
     * then repeatedly downsamples to populate the remaining levels.
     * {@link allocate} must have been called first.
     *
     * @param input            Level-0 source image.
     * @param skip_first_level When `true` (the default) level 0 is assumed
     *                         to already hold the input and is not copied.
     */
    build(input: matrix_t, skip_first_level: boolean): void {
        if (typeof skip_first_level === "undefined") {
            skip_first_level = true;
        }
        // just copy data to first level
        let i = 2,
            a = input,
            b: matrix_t = this.data[0];
        if (!skip_first_level) {
            let j = input.cols * input.rows;
            while (--j >= 0) {
                b.data[j] = input.data[j];
            }
        }
        b = this.data[1];
        this.pyrdown(a, b);
        for (; i < this.levels; ++i) {
            a = b;
            b = this.data[i];
            this.pyrdown(a, b);
        }
    }
}
