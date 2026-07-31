/*
 *  _pool_node_t.ts
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

import { IData_T, data_t } from "./data_t";

/** Public shape of {@link _pool_node_t}. */
export interface IPool_Node_T {
    /** Replaces the node's storage with a larger buffer. */
    resize: (size_in_bytes: number) => void;
}

/**
 * One node of the `cache` buffer pool: a linked-list entry wrapping a
 * {@link data_t} and mirroring its typed-array views directly on the node,
 * so borrowers can use `node.f32`, `node.i32`, etc. without indirection.
 */
export default class _pool_node_t implements IPool_Node_T {
    /** Next node in the pool's linked list (`null` at the tail). */
    public next: _pool_node_t | null;
    /** The wrapped storage object. */
    public data?: IData_T;
    /** Byte size of the current storage (aligned to a multiple of 8). */
    public size: number;
    /** The underlying `ArrayBuffer` (mirror of `data.buffer`). */
    public buffer: ArrayBuffer;
    /** Unsigned 8-bit view (mirror of `data.u8`). */
    public u8: Uint8Array;
    /** Signed 32-bit integer view (mirror of `data.i32`). */
    public i32: Int32Array;
    /** 32-bit float view (mirror of `data.f32`). */
    public f32: Float32Array;
    /** 64-bit float view (mirror of `data.f64`). */
    public f64: Float64Array;

    /**
     * @param size_in_bytes Initial byte size of the node's storage.
     */
    constructor(size_in_bytes: number) {
        this.next = null;
        this.data = new data_t(size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }

    /**
     * Discards the current storage and allocates a fresh, larger one,
     * refreshing every typed-array view. Called by `cache.get_buffer` when a
     * borrower requests more space than the node currently holds. Previous
     * contents are NOT preserved.
     *
     * @param size_in_bytes New byte size (aligned up to a multiple of 8).
     */
    resize(size_in_bytes: number): void {
        delete this.data;
        this.data = new data_t(size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }
}
