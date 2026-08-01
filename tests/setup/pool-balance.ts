/*
 *  pool-balance.ts
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

import { beforeEach, afterEach, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";

/**
 * Global buffer-pool leak detector (issue #87).
 *
 * Registered as a Vitest `setupFile`, so it wraps EVERY test in the suite:
 * the pool's free-node count is recorded before each test and compared after.
 * Any test whose code borrowed a scratch buffer without returning it fails,
 * and it fails on the test that leaked rather than on some later victim.
 *
 * Why globally rather than per module: AGENTS.md makes "balance every
 * `get_buffer` with a `put_buffer`" a standing rule, all modules share the one
 * pool, and a leak stays invisible until the pool drains and an unrelated
 * module starts reading someone else's scratch memory. Enumerating call sites
 * by hand covers only what the list remembers — this covers every code path
 * any test in the suite exercises, including ones added later, for free.
 *
 * If a test ever needs to leave the pool unbalanced on purpose, call
 * {@link allowPoolImbalance} inside it.
 */

/** Free-node count. Private to the pool, but it is what we need to observe. */
const freeCount = () => (jsfeatNext.cache as unknown as { _pool_size: number })._pool_size;

let expected: number | null = null;
let waived = false;

/** Opt this test out of the balance check (for tests that borrow deliberately). */
export function allowPoolImbalance(): void {
    waived = true;
}

beforeEach(() => {
    waived = false;
    expected = freeCount();
});

afterEach((context) => {
    const before = expected;
    expected = null;
    if (waived || before === null) return;

    // Only report a leak when the test itself passed: a failing test often
    // threw part-way through and never reached its put_buffer, so complaining
    // about the pool would bury the real error under a misleading one.
    if (context.task.result?.state === "fail") return;

    const after = freeCount();
    if (after !== before) {
        const delta = after - before;
        expect(
            `pool free count ${after} (${delta > 0 ? `+${delta}` : delta}) — ` +
                `${delta < 0 ? "buffers were borrowed and never returned" : "more buffers returned than borrowed"}`
        ).toBe(`pool free count ${before} (unchanged)`);
    }
});
