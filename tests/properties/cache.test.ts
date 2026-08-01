/*
 *  cache.test.ts
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

import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";

/**
 * Tests for the shared buffer pool (issue #87, category D).
 *
 * The pool had no behavioural coverage at all — `tests/api-shape` only checked
 * that `jsfeatNext.cache.get_buffer` is a function and that every module points
 * at the same object.
 *
 * It deserves better: AGENTS.md makes "balance every `get_buffer` with a
 * `put_buffer`" a standing rule, every algorithm in the library borrows from
 * this one pool, and an imbalance is invisible until the pool drains and an
 * unrelated module starts reading someone else's scratch memory.
 *
 * What is left here is the pool's own mechanics. The per-module "does it give
 * back what it borrowed" checks that used to live below have been removed:
 * `tests/setup/pool-balance.ts` now applies that check to EVERY test in the
 * suite, which covers strictly more than a hand-maintained list of call sites
 * could — including the parity tests, and any module added later. The old list
 * had already drifted once, missing motion_estimator, motion_model and
 * math.get_gaussian_kernel.
 */

const pool = jsfeatNext.cache;

/** The pool's free-node count. Private, but it is the thing under test. */
const freeCount = () => (pool as unknown as { _pool_size: number })._pool_size;

describe("shared buffer pool mechanics", () => {
    it("hands out a node and takes it back", () => {
        const before = freeCount();
        const node = pool.get_buffer(64);
        expect(freeCount()).toBe(before - 1);
        pool.put_buffer(node);
        expect(freeCount()).toBe(before);
    });

    it("returns a node at least as large as requested", () => {
        const node = pool.get_buffer(64);
        expect(node.size).toBeGreaterThanOrEqual(64);
        pool.put_buffer(node);
    });

    it("grows a node on demand for an oversized request", () => {
        // Nodes start small; asking for more than the node holds must resize it
        // rather than hand back something too short to write into.
        const huge = 1 << 20;
        const node = pool.get_buffer(huge);
        expect(node.size).toBeGreaterThanOrEqual(huge);
        expect(node.u8.length).toBeGreaterThanOrEqual(huge);
        pool.put_buffer(node);
    });

    it("keeps the node's views consistent after a resize", () => {
        const node = pool.get_buffer(4096);
        expect(node.u8.buffer).toBe(node.buffer);
        expect(node.i32.buffer).toBe(node.buffer);
        expect(node.f32.buffer).toBe(node.buffer);
        expect(node.f64.buffer).toBe(node.buffer);
        node.i32[0] = 123456;
        expect(node.i32[0]).toBe(123456);
        pool.put_buffer(node);
    });

    it("restores the free count after borrowing several at once", () => {
        const before = freeCount();
        const nodes = [pool.get_buffer(32), pool.get_buffer(64), pool.get_buffer(128)];
        expect(freeCount()).toBe(before - 3);
        for (const n of nodes) pool.put_buffer(n);
        expect(freeCount()).toBe(before);
    });
});
