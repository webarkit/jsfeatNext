/*
 *  cache.ts
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

import _pool_node_t from "./../node_utils/_pool_node_t";

/**
 * Public shape of {@link cache}: a recycling pool of scratch buffers used by
 * the algorithm modules to avoid per-call allocations in hot loops.
 */
export interface ICache {
    /** Pre-allocates the pool with `capacity` nodes of `data_size` bytes each. */
    allocate: (capacity: number, data_size: number) => void;
    /** Borrows a node with at least `size_in_bytes` of storage from the pool. */
    get_buffer: (size_in_bytes: number) => _pool_node_t;
    /** Returns a previously borrowed node to the pool. */
    put_buffer: (node: _pool_node_t) => void;
}

/**
 * A linked-list pool of reusable scratch buffers ({@link _pool_node_t}).
 * Algorithms borrow a buffer with {@link get_buffer}, use its typed-array
 * views (`u8`/`i32`/`f32`/`f64`), and must hand it back with
 * {@link put_buffer} when done.
 *
 * Mirrors `jsfeat.cache` from the original library: since 0.9.0 (issue #41)
 * jsfeatNext keeps a single library-wide pool too — the `shared_cache`
 * exported by `src/core/core.ts` and exposed publicly as `jsfeatNext.cache`.
 */
export class cache implements ICache {
    /** First free node in the pool (borrow end of the list). */
    private _pool_head: _pool_node_t;
    /** Last node in the pool (return end of the list). */
    private _pool_tail: _pool_node_t;
    /** Number of nodes currently available in the pool. */
    private _pool_size: number;

    constructor() {
        this._pool_head;
        this._pool_tail;
        this._pool_size = 0;
    }

    /**
     * Fills the pool with `capacity` nodes, each backed by `data_size` bytes.
     * Must be called before the first {@link get_buffer}.
     *
     * @param capacity  Number of pool nodes to create.
     * @param data_size Initial byte size of each node's buffer.
     */
    allocate(capacity: number, data_size: number): void {
        this._pool_head = this._pool_tail = new _pool_node_t(data_size);
        for (let i = 0; i < capacity; ++i) {
            const node = new _pool_node_t(data_size);
            this._pool_tail = this._pool_tail.next = node;

            this._pool_size++;
        }
    }

    /**
     * Borrows the next free node from the pool, growing its buffer when it is
     * smaller than `size_in_bytes`. The pool assumes enough free nodes are
     * available (no underflow check — callers must balance every `get` with a
     * {@link put_buffer}).
     *
     * @param size_in_bytes Minimum byte size the caller needs.
     * @returns A pool node whose typed-array views are at least the requested size.
     */
    get_buffer(size_in_bytes: number): _pool_node_t {
        // assume we have enough free nodes
        const node = this._pool_head;
        this._pool_head = this._pool_head.next;
        this._pool_size--;

        if (size_in_bytes > node.size) {
            node.resize(size_in_bytes);
        }

        return node;
    }

    /**
     * Returns a borrowed node to the tail of the pool, making it available to
     * subsequent {@link get_buffer} calls.
     *
     * @param node The node previously obtained from {@link get_buffer}.
     */
    put_buffer(node: _pool_node_t): void {
        this._pool_tail = this._pool_tail.next = node;
        this._pool_size++;
    }
}
