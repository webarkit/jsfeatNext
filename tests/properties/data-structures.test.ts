/*
 *  data-structures.test.ts
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
import { data_t } from "../../src/node_utils/data_t";
import { point_t } from "../../src/point_t/point_t";
import { U8C1, F32C1, cornerScene } from "./helpers";

/**
 * Tests for the data structures and `node_utils` (issue #87, category D).
 *
 * These were the coverage holes the issue asks about: `data_t` and
 * `_pool_node_t` had no tests at all, `point_t` was never referenced by any
 * test, and `pyramid_t`/`keypoint_t`/`ransac_params_t` were only ever
 * constructed as scaffolding for algorithm tests — never asserted on.
 *
 * `matrix_t` is already pinned against the oracle in `tests/parity/structs`,
 * so what follows deliberately covers what parity does NOT: the typed-array
 * view selection, zero-initialisation, and the reallocate-vs-reuse rule in
 * `resize`.
 */

describe("data_t (node_utils)", () => {
    it("rounds the byte size up to a multiple of 8", () => {
        // The f64 view needs 8-byte alignment, so an unaligned request must be
        // padded — otherwise constructing the Float64Array would throw.
        for (const [requested, expected] of [
            [1, 8],
            [7, 8],
            [8, 8],
            [9, 16],
            [15, 16],
            [16, 16],
            [100, 104],
        ]) {
            expect(new data_t(requested).size).toBe(expected);
        }
    });

    it("exposes four views over the SAME buffer", () => {
        // The whole point of data_t: algorithms reinterpret one allocation as
        // bytes, ints or floats without copying. If the views ever stopped
        // aliasing, scratch buffers would silently decouple.
        const d = new data_t(32);
        expect(d.u8.buffer).toBe(d.buffer);
        expect(d.i32.buffer).toBe(d.buffer);
        expect(d.f32.buffer).toBe(d.buffer);
        expect(d.f64.buffer).toBe(d.buffer);

        d.i32[0] = 0x01020304;
        // little-endian: the low byte lands first
        expect(d.u8[0]).toBe(0x04);
        expect(d.u8[3]).toBe(0x01);

        // 1.5 as a double is 0x3FF8000000000000; little-endian, the high word
        // (f32[3]) carries the exponent and the low word (f32[2]) is zero.
        d.f64[1] = 1.5;
        expect(d.f32[2]).toBe(0);
        expect(d.f32[3]).not.toBe(0); // the f64 write is visible through f32
    });

    it("sizes each view to the byte length", () => {
        const d = new data_t(64);
        expect(d.u8.length).toBe(64);
        expect(d.i32.length).toBe(16);
        expect(d.f32.length).toBe(16);
        expect(d.f64.length).toBe(8);
    });

    it("adopts the length of a buffer it is handed", () => {
        const existing = new ArrayBuffer(48);
        const d = new data_t(8, existing);
        expect(d.buffer).toBe(existing);
        expect(d.size).toBe(48); // the requested 8 is ignored in favour of the real length
    });

    it("starts zeroed", () => {
        const d = new data_t(64);
        for (let i = 0; i < 64; i++) expect(d.u8[i]).toBe(0);
    });
});

describe("matrix_t beyond parity", () => {
    it("picks the typed-array view matching the type signature", () => {
        const cases: [number, string][] = [
            [jsfeatNext.U8_t | jsfeatNext.C1_t, "Uint8Array"],
            [jsfeatNext.S32_t | jsfeatNext.C1_t, "Int32Array"],
            [jsfeatNext.F32_t | jsfeatNext.C1_t, "Float32Array"],
            [jsfeatNext.F64_t | jsfeatNext.C1_t, "Float64Array"],
        ];
        for (const [type, view] of cases) {
            const m = new jsfeatNext.matrix_t(4, 4, type);
            expect(m.data.constructor.name).toBe(view);
        }
    });

    it("is zero-initialised", () => {
        // Several tests depend on this — e.g. the warp fill-value checks read
        // untouched destination pixels.
        const m = new jsfeatNext.matrix_t(8, 8, U8C1);
        for (let i = 0; i < 64; i++) expect(m.data[i]).toBe(0);
    });

    it("reuses the buffer when resizing down, reallocates when it will not fit", () => {
        const m = new jsfeatNext.matrix_t(16, 16, U8C1);
        const original = m.buffer;

        m.resize(8, 8, 1);
        expect(m.buffer).toBe(original); // still fits: no reallocation
        expect([m.cols, m.rows]).toEqual([8, 8]);

        m.resize(64, 64, 1);
        expect(m.buffer).not.toBe(original); // too big: fresh allocation
        expect([m.cols, m.rows]).toEqual([64, 64]);
    });

    it("keeps channel count in the size calculation", () => {
        // NB: sizes are padded up to a multiple of 8, so the C4 buffer is not
        // simply 4x the C1 one — 100 bytes pads to 104 while 400 already fits.
        const align = (bytes: number) => (bytes + 7) & -8;
        const c1 = new jsfeatNext.matrix_t(10, 10, jsfeatNext.U8_t | jsfeatNext.C1_t);
        const c4 = new jsfeatNext.matrix_t(10, 10, jsfeatNext.U8_t | jsfeatNext.C4_t);

        expect(c1.channel).toBe(1);
        expect(c4.channel).toBe(4);
        expect(c1.buffer.size).toBe(align(10 * 10 * 1));
        expect(c4.buffer.size).toBe(align(10 * 10 * 4));
    });

    it("copy_to transfers every element", () => {
        const src = new jsfeatNext.matrix_t(5, 3, U8C1);
        for (let i = 0; i < 15; i++) src.data[i] = i * 7;
        const dst = new jsfeatNext.matrix_t(5, 3, U8C1);
        src.copy_to(dst);
        for (let i = 0; i < 15; i++) expect(dst.data[i]).toBe(src.data[i]);
    });
});

describe("point_t", () => {
    it("is deliberately NOT on the namespace, matching jsfeat", () => {
        // point_t is a type-only structure: four modules import it purely as an
        // annotation and nothing ever constructs one. Original jsfeat has no
        // runtime `jsfeat.point_t` either, so the absence is parity, not a gap.
        // Callers pass keypoint_t instances, which are structurally compatible.
        expect((jsfeatNext as unknown as Record<string, unknown>).point_t).toBeUndefined();
    });

    it("constructs and carries assignable coordinates when imported directly", () => {
        // A bare struct: the constructor takes no arguments and detector code
        // fills the fields in. Nothing else in the suite touched it before.
        const p = new point_t();
        p.x = 12;
        p.y = 34;
        p.score = 0.5;
        expect([p.x, p.y, p.score]).toEqual([12, 34, 0.5]);
    });

    it("is a valid pool type for fast_corners.detect", () => {
        // The signature asks for point_t[], so passing real point_t instances
        // must work — even though callers normally hand it keypoint_t.
        const pool = Array.from({ length: 4096 }, () => new point_t());
        jsfeatNext.fast_corners.set_threshold(20);
        const n = jsfeatNext.fast_corners.detect(cornerScene(96, 72), pool, 5);

        expect(n).toBeGreaterThan(0);
        for (let i = 0; i < n; i++) {
            expect(Number.isInteger(pool[i].x)).toBe(true);
            expect(Number.isInteger(pool[i].y)).toBe(true);
            expect(pool[i].score).toBeGreaterThan(0);
        }
    });
});

describe("keypoint_t", () => {
    it("defaults angle to -1 and everything else to 0", () => {
        const k = new jsfeatNext.keypoint_t();
        expect([k.x, k.y, k.score, k.level, k.angle]).toEqual([0, 0, 0, 0, -1.0]);
    });

    it("stores explicit values", () => {
        const k = new jsfeatNext.keypoint_t(3, 4, 0.75, 2, 1.25);
        expect([k.x, k.y, k.score, k.level, k.angle]).toEqual([3, 4, 0.75, 2, 1.25]);
    });
});

describe("pyramid_t", () => {
    it("allocates each level at half the previous dimensions", () => {
        const p = new jsfeatNext.pyramid_t(4);
        p.allocate(64, 48, U8C1);
        expect(p.levels).toBe(4);
        for (let i = 0; i < 4; i++) {
            expect([p.data[i].cols, p.data[i].rows]).toEqual([64 >> i, 48 >> i]);
        }
    });

    it("build with skip_first_level = false copies the source into level 0", () => {
        const src = new jsfeatNext.matrix_t(32, 32, U8C1);
        for (let i = 0; i < 32 * 32; i++) src.data[i] = (i * 3) & 0xff;

        const p = new jsfeatNext.pyramid_t(3);
        p.allocate(32, 32, U8C1);
        p.build(src, false);

        for (let i = 0; i < 32 * 32; i++) expect(p.data[0].data[i]).toBe(src.data[i]);
    });

    it("fills the lower levels by downsampling, preserving a constant", () => {
        // A uniform source must stay uniform all the way down — the cheapest
        // check that every level was actually written rather than left zeroed.
        const src = new jsfeatNext.matrix_t(32, 32, U8C1);
        src.data.fill(120);

        const p = new jsfeatNext.pyramid_t(3);
        p.allocate(32, 32, U8C1);
        p.build(src, false);

        for (let level = 0; level < 3; level++) {
            const m = p.data[level];
            for (let i = 0; i < m.cols * m.rows; i++) expect(m.data[i]).toBe(120);
        }
    });
});

describe("ransac_params_t", () => {
    it("applies documented defaults", () => {
        const p = new jsfeatNext.ransac_params_t();
        expect([p.size, p.thresh, p.eps, p.prob]).toEqual([0, 0.5, 0.5, 0.99]);
    });

    it("update_iters never exceeds the cap and stays non-negative", () => {
        const p = new jsfeatNext.ransac_params_t(4, 0.5, 0.5, 0.99);
        for (const eps of [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]) {
            const iters = p.update_iters(eps, 1000);
            expect(iters).toBeLessThanOrEqual(1000);
            expect(iters).toBeGreaterThanOrEqual(0);
            expect(Number.isInteger(iters)).toBe(true);
        }
    });

    it("needs more iterations as the outlier ratio grows", () => {
        // The whole point of the adaptive stopping rule: dirtier data demands
        // more samples, until the cap takes over.
        const p = new jsfeatNext.ransac_params_t(4, 0.5, 0.5, 0.99);
        let previous = -1;
        for (const eps of [0.1, 0.2, 0.3, 0.4, 0.5]) {
            const iters = p.update_iters(eps, 100000);
            expect(iters).toBeGreaterThanOrEqual(previous);
            previous = iters;
        }
    });

    it("demands nothing when there are no outliers", () => {
        const p = new jsfeatNext.ransac_params_t(4, 0.5, 0.5, 0.99);
        expect(p.update_iters(0, 1000)).toBe(0);
    });
});

describe("data_type helpers", () => {
    it("decode the type and channel packed into a signature", () => {
        const types = [jsfeatNext.U8_t, jsfeatNext.S32_t, jsfeatNext.F32_t, jsfeatNext.F64_t];
        const channels = [jsfeatNext.C1_t, jsfeatNext.C2_t, jsfeatNext.C3_t, jsfeatNext.C4_t];
        const base = new jsfeatNext();

        for (const t of types) {
            for (const c of channels) {
                const signature = t | c;
                expect(base.get_data_type(signature)).toBe(t);
                expect(base.get_channel(signature)).toBe(c);
            }
        }
    });

    it("report the element size in bytes", () => {
        const base = new jsfeatNext();
        expect(base.get_data_type_size(jsfeatNext.U8_t)).toBe(1);
        expect(base.get_data_type_size(jsfeatNext.S32_t)).toBe(4);
        expect(base.get_data_type_size(jsfeatNext.F32_t)).toBe(4);
        expect(base.get_data_type_size(jsfeatNext.F64_t)).toBe(8);
    });

    it("agree with the buffer matrix_t actually allocates", () => {
        // Ties the helpers to observable behaviour rather than to themselves.
        const base = new jsfeatNext();
        for (const type of [U8C1, F32C1, jsfeatNext.S32_t | jsfeatNext.C1_t]) {
            const m = new jsfeatNext.matrix_t(10, 10, type);
            const elementSize = base.get_data_type_size(base.get_data_type(type));
            const expected = (10 * 10 * elementSize + 7) & -8;
            expect(m.buffer.size).toBe(expected);
        }
    });
});
