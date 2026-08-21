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
 * The only side effect is that a `get_buffer` call requesting more than a
 * node's current size grows that node permanently (see `_pool_node_t.resize`)
 * — after this file runs, whichever nodes the "resize" case below touched
 * stay larger for the rest of the process. That's harmless by the pool's own
 * contract (`get_buffer` promises "at least" the requested size, so a larger
 * buffer still satisfies any future caller), unlike the `Math.random` leak
 * fixed in `motion_estimator.bench.ts` — that one changed *what value* every
 * future caller saw, not just how much memory sat behind it.
 *
 * Every `get_buffer` in both cases below is paired with a `put_buffer` before
 * the next timed iteration, so the pool's size (31 nodes) never drifts.
 *
 * ## Two cases: the common path and the rare one
 *
 * Real callers overwhelmingly request the *same* size call after call — a
 * fixed image/matrix dimension for the life of an AR session — so
 * `get_buffer` almost never needs to grow a node. That steady-state path is
 * pure pointer bookkeeping (pop the head, push the tail). The resize path
 * (`_pool_node_t.resize`: a fresh `ArrayBuffer` plus four new typed-array
 * views) is rare in practice but real, and costs something different enough
 * to deserve its own measurement rather than being averaged into the common
 * case.
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

describe("cache.get_buffer — forced resize every call", () => {
    // A monotonically growing request size guarantees the node handed back by
    // get_buffer is always smaller than what's asked for, so resize fires on
    // every single call rather than only the first lap around the pool.
    let sizeN = 4096;
    let sizeO = 4096;

    bench(
        "jsfeatNext",
        () => {
            const node = jsfeatNext.cache.get_buffer(sizeN);
            jsfeatNext.cache.put_buffer(node);
            sizeN += 8;
        },
        {
            // Reset between modes (warmup, then run) so the "run" mode's
            // measurement isn't starting from whatever huge size the warmup
            // phase grew to.
            setup: () => {
                sizeN = 4096;
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            const node = jsfeat.cache.get_buffer(sizeO);
            jsfeat.cache.put_buffer(node);
            sizeO += 8;
        },
        {
            setup: () => {
                sizeO = 4096;
            },
        }
    );
});
