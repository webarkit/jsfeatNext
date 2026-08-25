/*
 *  bfmatcher.test.ts
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
import { rng } from "../properties/helpers";

/**
 * Parity target: `match_pattern()` / `popcnt32()` in
 * `examples/sample_orb_pinball.html` — the only matcher jsfeatNext had before
 * this module, and issue #133's explicit acceptance criterion ("same input
 * descriptors produce the same correspondences and the same distances").
 *
 * There is no vendored jsfeat oracle for this one: original jsfeat never
 * shipped a matcher, so `bfmatcher` has nothing upstream to diverge from. The
 * reference below is the sample's own per-descriptor search (its outer
 * multi-pyramid-level loop is application plumbing, not part of what
 * `bfmatcher.match` does — a single train set is the right scope here).
 */
function popcnt32(n: number): number {
    n -= (n >> 1) & 0x55555555;
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
}

function reference_match(
    query: InstanceType<typeof jsfeatNext.matrix_t>,
    train: InstanceType<typeof jsfeatNext.matrix_t>,
    threshold: number
) {
    const q_cnt = query.rows;
    const query_u32 = query.buffer.i32;
    const ld_i32 = train.buffer.i32;
    const ld_cnt = train.rows;
    const out: { qidx: number; idx: number; dist: number }[] = [];

    for (let qidx = 0; qidx < q_cnt; ++qidx) {
        let best_dist = 256;
        let best_idx = -1;
        const qd_off = qidx * 8;
        let ld_off = 0;
        for (let pidx = 0; pidx < ld_cnt; ++pidx) {
            let curr_d = 0;
            for (let k = 0; k < 8; ++k) {
                curr_d += popcnt32(query_u32[qd_off + k] ^ ld_i32[ld_off + k]);
            }
            if (curr_d < best_dist) {
                best_dist = curr_d;
                best_idx = pidx;
            }
            ld_off += 8;
        }
        if (best_dist < threshold) {
            out.push({ qidx, idx: best_idx, dist: best_dist });
        }
    }
    return out;
}

const OU8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;

function randomDescriptors(n: number, cols: number, seed: number) {
    const r = rng(seed);
    const m = new jsfeatNext.matrix_t(cols, n, OU8C1);
    for (let i = 0; i < n * cols; i++) m.data[i] = (r() * 256) | 0;
    return m;
}

describe("parity: bfmatcher.match vs examples/sample_orb_pinball.html's match_pattern", () => {
    it("produces identical correspondences and distances", () => {
        const q = randomDescriptors(40, 32, 4201);
        const t = randomDescriptors(60, 32, 4202);

        // The sample accepts strictly-less-than threshold; match() accepts
        // less-than-or-equal, so max_distance = threshold - 1 makes the two
        // acceptance rules coincide exactly.
        const threshold = 80;
        const expected = reference_match(q, t, threshold);
        const actual = jsfeatNext.bfmatcher.match(q, t, threshold - 1);

        expect(actual.length).toBe(expected.length);
        for (let i = 0; i < expected.length; i++) {
            expect(actual[i].queryIdx).toBe(expected[i].qidx);
            expect(actual[i].trainIdx).toBe(expected[i].idx);
            expect(actual[i].distance).toBe(expected[i].dist);
        }
    });

    it("agrees on distance-zero for identical descriptors", () => {
        const d = randomDescriptors(15, 32, 4203);
        const expected = reference_match(d, d, 1);
        const actual = jsfeatNext.bfmatcher.match(d, d, 0);
        expect(actual.length).toBe(expected.length);
        expect(actual.length).toBe(15);
        for (const m of actual) expect(m.distance).toBe(0);
    });
});
