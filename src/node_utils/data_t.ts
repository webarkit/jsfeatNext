/*
 *  data_t.ts
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

/** Public shape of {@link data_t}: raw storage with multi-type views. */
export interface IData_T {
    /** Byte size of the buffer (aligned to a multiple of 8). */
    size: number;
    /** The underlying `ArrayBuffer`. */
    buffer: ArrayBuffer;
    /** Unsigned 8-bit view over {@link buffer}. */
    u8: Uint8Array;
    /** Signed 32-bit integer view over {@link buffer}. */
    i32: Int32Array;
    /** 32-bit float view over {@link buffer}. */
    f32: Float32Array;
    /** 64-bit float view over {@link buffer}. */
    f64: Float64Array;
}

/**
 * Raw byte storage exposing typed-array views of every element type the
 * library uses. `matrix_t` and the cache pool build on it: allocating one
 * buffer and reading it as `u8`/`i32`/`f32`/`f64` lets algorithms reinterpret
 * scratch memory without extra allocations.
 *
 * The byte size is aligned up to a multiple of 8 so the `f64` view is valid.
 */
export class data_t implements IData_T {
    /** Byte size of the buffer (aligned to a multiple of 8). */
    public size: number;
    /** The underlying `ArrayBuffer`. */
    public buffer: ArrayBuffer;
    /** Unsigned 8-bit view over {@link buffer}. */
    public u8: Uint8Array;
    /** Signed 32-bit integer view over {@link buffer}. */
    public i32: Int32Array;
    /** 32-bit float view over {@link buffer}. */
    public f32: Float32Array;
    /** 64-bit float view over {@link buffer}. */
    public f64: Float64Array;

    /**
     * @param size_in_bytes Requested byte size; rounded up to a multiple of 8.
     * @param buffer        Optional existing buffer to wrap instead of
     *                      allocating (its length becomes {@link size}).
     */
    constructor(size_in_bytes: number, buffer?: ArrayBuffer) {
        // we need align size to multiple of 8
        this.size = ((size_in_bytes + 7) | 0) & -8;
        if (typeof buffer === "undefined") {
            this.buffer = new ArrayBuffer(this.size);
        } else {
            this.buffer = buffer;
            this.size = buffer.byteLength;
        }
        this.u8 = new Uint8Array(this.buffer);
        this.i32 = new Int32Array(this.buffer);
        this.f32 = new Float32Array(this.buffer);
        this.f64 = new Float64Array(this.buffer);
    }
}
