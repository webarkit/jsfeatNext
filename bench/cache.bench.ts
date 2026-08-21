/*
 *  cache.bench.ts
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

import { bench, describe } from "vitest";
import jsfeatNext from "../src/jsfeatNext";
import jsfeat from "../tests/vendor/oracle.cjs";

/**
 * Throughput benchmarks for the shared buffer pool, `cache.get_buffer` /
 * `.put_buffer` (issue #86, phase 2 — the last module of this phase).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Why this file uses the real global singletons, not fresh instances
 *
 * Every other file in this suite constructs isolated inputs so nothing
 * leaks between benches. This one can't: `jsfeatNext.cache` is a class
 * (`src/cache/cache.ts`), but jsfeat's `cache` is a single IIFE-closure
 * object (`tests/vendor/jsfeat-master.js`), not a constructor — there is no
 * `new jsfeat.cache()` to fall back on. Both sides pre-allocate the SAME
 * global singleton at module load with identical parameters
 * (`allocate(30, 640 * 4)` — 31 nodes of 2560 bytes each), so using the
 * singletons directly is not a compromise here: it's the more faithful
 * bench, since jsfeatNext's whole shared-cache design (#41) exists
 * specifically to mirror jsfeat's one-pool-per-process model.
 *
 * The only side effect is that any node this file's "resize" case touches
 * ends up permanently larger (see `_pool_node_t.resize`) — harmless by the
 * pool's own contract (`get_buffer` promises "at least" the requested size,
 * so a larger buffer still satisfies any future caller), unlike the
 * `Math.random` leak fixed in `motion_estimator.bench.ts`, which changed
 * *what value* every future caller saw rather than just how much memory sat
 * behind it. The steady-state case never touches a node's size at all — it
 * requests less than the pool's pre-allocated 2560B — and every `get_buffer`
 * it makes is paired with a `put_buffer` before the next timed iteration, so
 * the pool's size (31 nodes) never drifts there either.
 *
 * ## Two cases: the common path and the rare one
 *
 * Real callers overwhelmingly request the *same* size call after call — a
 * fixed image/matrix dimension for the life of an AR session — so
 * `get_buffer` almost never needs to grow a node. That steady-state path is
 * pure pointer bookkeeping (pop the head, push the tail). The resize path
 * (`_pool_node_t.resize`: a fresh `ArrayBuffer` plus four new typed-array
 * views) is rare in practice but real, and costs something different enough
 * to deserve its own measurement — see that case's own comment for why it
 * borrows a single node directly rather than cycling through `get_buffer`.
 *
 * Unlike every other case in this suite, the "resize" case's cost is
 * unavoidably paid *inside* the timed region — that's the entire point of
 * the measurement — which is an exception to bench/README.md's general
 * claim that these benches allocate their buffers outside the timed region.
 */

const STEADY_SIZE = 2048; // <= the pool's pre-allocated 2560B, so resize never fires

describe("cache.get_buffer + put_buffer — steady state (no resize)", () => {
    bench("jsfeatNext", () => {
        const node = jsfeatNext.cache.get_buffer(STEADY_SIZE);
        jsfeatNext.cache.put_buffer(node);
    });

    bench("jsfeat (reference)", () => {
        const node = jsfeat.cache.get_buffer(STEADY_SIZE);
        jsfeat.cache.put_buffer(node);
    });
});

describe("_pool_node_t.resize — forced every call", () => {
    // `get_buffer(size)` only resizes when `size > node.size`, and a node
    // that has already grown to a given size satisfies every later request
    // at or below it -- so once every node in the (finite, non-shrinking)
    // pool has grown to a target size, get_buffer stops triggering resize
    // for that target. An earlier version of this case tried to force
    // resize on every call by growing the requested size every iteration,
    // but that makes the workload depend on how many iterations each side
    // completes: the faster side reaches larger sizes than the slower one
    // in the same time budget, so the two sides no longer do equal work
    // (caught in review).
    //
    // `resize()` itself has no such guard -- it unconditionally reallocates
    // regardless of the node's current size -- so calling it directly, with
    // a FIXED target every time, on a single node borrowed once outside the
    // timed region, isolates exactly the cost this case is named for: one
    // node, one fixed size, every call, both sides doing identical work
    // regardless of how many iterations either completes.
    const RESIZE_TARGET = 65536;
    const nodeN = jsfeatNext.cache.get_buffer(1);
    const nodeO = jsfeat.cache.get_buffer(1);

    bench(
        "jsfeatNext",
        () => {
            nodeN.resize(RESIZE_TARGET);
        },
        {
            // teardown fires after both the warmup and the run mode; only
            // return the node once, after the run mode is the last one, so
            // it isn't back in the pool (and available to some other caller)
            // while this case's own "run" iterations are still mutating it.
            teardown: (_task, mode) => {
                if (mode === "run") jsfeatNext.cache.put_buffer(nodeN);
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            nodeO.resize(RESIZE_TARGET);
        },
        {
            teardown: (_task, mode) => {
                if (mode === "run") jsfeat.cache.put_buffer(nodeO);
            },
        }
    );
});
