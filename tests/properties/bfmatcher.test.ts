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
import { rng } from "./helpers";

const OU8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;

function randomDescriptors(n: number, cols: number, seed: number) {
    const r = rng(seed);
    const m = new jsfeatNext.matrix_t(cols, n, OU8C1);
    for (let i = 0; i < n * cols; i++) m.data[i] = (r() * 256) | 0;
    return m;
}

describe("bfmatcher.match", () => {
    it("finds the exact self-match (distance 0) when query and train are the same set", () => {
        const d = randomDescriptors(12, 32, 9101);
        const matches = jsfeatNext.bfmatcher.match(d, d, 256);
        expect(matches.length).toBe(12);
        for (const m of matches) {
            expect(m.queryIdx).toBe(m.trainIdx);
            expect(m.distance).toBe(0);
        }
    });

    it("respects max_distance: raising the threshold never removes a match", () => {
        const q = randomDescriptors(20, 32, 9102);
        const t = randomDescriptors(30, 32, 9103);
        const tight = jsfeatNext.bfmatcher.match(q, t, 40);
        const loose = jsfeatNext.bfmatcher.match(q, t, 200);
        expect(loose.length).toBeGreaterThanOrEqual(tight.length);
        for (const m of tight) expect(m.distance).toBeLessThanOrEqual(40);
        for (const m of loose) expect(m.distance).toBeLessThanOrEqual(200);
    });

    it("cross_check keeps only mutually-best pairs", () => {
        const q = randomDescriptors(15, 32, 9104);
        const t = randomDescriptors(15, 32, 9105);

        jsfeatNext.bfmatcher.cross_check = false;
        const oneWay = jsfeatNext.bfmatcher.match(q, t, 256);

        jsfeatNext.bfmatcher.cross_check = true;
        const mutual = jsfeatNext.bfmatcher.match(q, t, 256);
        jsfeatNext.bfmatcher.cross_check = false;

        // Cross-checking can only keep a subset of the query->train best pairs,
        // never invent a pair the one-way search didn't already find.
        expect(mutual.length).toBeLessThanOrEqual(oneWay.length);
        for (const m of mutual) {
            const forward = oneWay.find((x) => x.queryIdx === m.queryIdx);
            expect(forward?.trainIdx).toBe(m.trainIdx);
            expect(forward?.distance).toBe(m.distance);
        }
    });

    it("cross_check with an empty train set yields no matches", () => {
        // Degenerate but reachable: with no train descriptors every query's
        // forward best is -1, so the backward pass skips them all.
        const q = randomDescriptors(4, 32, 9120);
        const t = new jsfeatNext.matrix_t(32, 0, OU8C1);
        jsfeatNext.bfmatcher.cross_check = true;
        const matches = jsfeatNext.bfmatcher.match(q, t, 256);
        jsfeatNext.bfmatcher.cross_check = false;
        expect(matches.length).toBe(0);
    });

    it("works at 64 bytes per descriptor (TEBLID p512 width)", () => {
        const q = randomDescriptors(9, 64, 9106);
        const t = randomDescriptors(9, 64, 9106); // same seed -> identical data
        const matches = jsfeatNext.bfmatcher.match(q, t, 512);
        expect(matches.length).toBe(9);
        for (const m of matches) expect(m.distance).toBe(0);
    });

    it("throws when descriptor width is not a multiple of 4 bytes", () => {
        const bad = new jsfeatNext.matrix_t(30, 4, OU8C1);
        expect(() => jsfeatNext.bfmatcher.match(bad, bad)).toThrow(/multiple of 4/);
    });

    it("throws when query and train row widths differ", () => {
        // Both matrices are addressed with ONE stride, taken from the query.
        // A mismatch therefore reads train rows at the wrong offsets rather
        // than failing, so this has to be rejected up front.
        const q = randomDescriptors(4, 32, 9101);
        const t = randomDescriptors(6, 16, 9102);
        expect(() => jsfeatNext.bfmatcher.match(q, t)).toThrow(/same row width/);
        expect(() => jsfeatNext.bfmatcher.knnMatch(q, t)).toThrow(/same row width/);
    });

    it("rejects equal cols with different channel counts", () => {
        // The subtle case: cols alone does not determine a row's storage.
        // matrix_t sizes its buffer as cols * sizeof(type) * channel * rows, so
        // a U8/C1 and a U8/C2 both at cols=32 occupy 32 and 64 bytes per row.
        // Comparing cols would wave this through into the same stride
        // corruption the guard exists to stop.
        const c1 = new jsfeatNext.matrix_t(32, 4, jsfeatNext.U8_t | jsfeatNext.C1_t);
        const c2 = new jsfeatNext.matrix_t(32, 4, jsfeatNext.U8_t | jsfeatNext.C2_t);
        expect(c1.cols).toBe(c2.cols); // indistinguishable by the old check
        expect(() => jsfeatNext.bfmatcher.match(c1, c2)).toThrow(/same row width/);
        expect(() => jsfeatNext.bfmatcher.knnMatch(c1, c2)).toThrow(/same row width/);
    });

    it("rejects non-U8 descriptors", () => {
        // Hamming over an i32 view is only meaningful for packed bytes; F32
        // bit patterns would be XORed and popcounted into nonsense.
        const f32 = new jsfeatNext.matrix_t(32, 4, jsfeatNext.F32_t | jsfeatNext.C1_t);
        const u8 = randomDescriptors(4, 32, 9107);
        expect(() => jsfeatNext.bfmatcher.match(f32, f32)).toThrow(/must be U8/);
        expect(() => jsfeatNext.bfmatcher.match(u8, f32)).toThrow(/must be U8/);
    });

    it("the width-mismatch message names both widths", () => {
        const q = randomDescriptors(2, 32, 9103);
        const t = randomDescriptors(2, 64, 9104);
        expect(() => jsfeatNext.bfmatcher.match(q, t)).toThrow(/32 and 64/);
    });

    it("without the guard, a narrower train silently yields wrong distances", () => {
        // Pins WHY the guard earns its place. Reading a 16-byte-wide train set
        // with the query's 32-byte stride walks two train rows per step and,
        // past the end, indexes out of range -- undefined, which XOR coerces to
        // 0. Nothing throws; the distances are simply wrong. Reproduced here
        // against the honest per-row computation.
        const q = randomDescriptors(3, 32, 9105);
        const narrow = randomDescriptors(8, 16, 9106);

        const popcnt = (n: number) => {
            n -= (n >> 1) & 0x55555555;
            n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
            return (((n + (n >> 4)) & 0x0f0f0f0f) * 0x01010101) >> 24;
        };
        // what the old code did: stride 8 words for both
        const qw = q.buffer.i32;
        const tw = narrow.buffer.i32;
        let bogus = 0;
        for (let k = 0; k < 8; k++) bogus += popcnt(qw[k] ^ (tw[k] | 0));
        // what an honest 16-byte comparison would be: 4 words
        let honest = 0;
        for (let k = 0; k < 4; k++) honest += popcnt(qw[k] ^ tw[k]);

        expect(bogus).not.toBe(honest);
        // and the guard means neither number is ever produced
        expect(() => jsfeatNext.bfmatcher.match(q, narrow)).toThrow();
    });
});

describe("bfmatcher.knnMatch / ratio_test", () => {
    it("ratio_test is reachable on the jsfeatNext.bfmatcher singleton", () => {
        // Regression guard: an earlier draft declared ratio_test `static`,
        // following the #83 prototype literally. Static methods are not
        // reachable through an instance in JS, so jsfeatNext.bfmatcher.ratio_test
        // was silently `undefined` at runtime despite compiling cleanly.
        expect(typeof jsfeatNext.bfmatcher.ratio_test).toBe("function");
    });

    it("returns k results per query, sorted ascending by distance", () => {
        const q = randomDescriptors(10, 32, 9107);
        const t = randomDescriptors(50, 32, 9108);
        const knn = jsfeatNext.bfmatcher.knnMatch(q, t, 3);
        expect(knn.length).toBe(10);
        for (const row of knn) {
            expect(row.length).toBe(3);
            expect(row[0].distance).toBeLessThanOrEqual(row[1].distance);
            expect(row[1].distance).toBeLessThanOrEqual(row[2].distance);
        }
    });

    it("knnMatch's best entry agrees with match()'s single best", () => {
        const q = randomDescriptors(8, 32, 9109);
        const t = randomDescriptors(25, 32, 9110);
        const single = jsfeatNext.bfmatcher.match(q, t, 256);
        const knn = jsfeatNext.bfmatcher.knnMatch(q, t, 1);
        expect(knn.length).toBe(single.length);
        for (let i = 0; i < single.length; i++) {
            expect(knn[i][0].trainIdx).toBe(single[i].trainIdx);
            expect(knn[i][0].distance).toBe(single[i].distance);
        }
    });

    it("ratio_test drops ambiguous matches and keeps distinct ones", () => {
        // Two identical train descriptors make the top two knnMatch distances
        // equal for any query -- ratio_test must reject that query.
        const t = new jsfeatNext.matrix_t(32, 2, OU8C1);
        const r = rng(9111);
        for (let i = 0; i < 32; i++) t.data[i] = (r() * 256) | 0;
        t.data.copyWithin(32, 0, 32); // row 1 = exact copy of row 0

        const q = randomDescriptors(1, 32, 9111); // same seed as t's row 0 -> distance 0 to both
        const knn = jsfeatNext.bfmatcher.knnMatch(q, t, 2);
        const good = jsfeatNext.bfmatcher.ratio_test(knn, 0.9);
        expect(good.length).toBe(0);
    });

    it("ratio_test keeps a distinctive match (best clearly closer than second-best)", () => {
        // Query equals train row 0 exactly (distance 0); row 1 is far. The
        // best/second-best ratio is 0, well under any threshold, so it passes.
        const t = new jsfeatNext.matrix_t(32, 2, OU8C1);
        const r = rng(9114);
        for (let i = 0; i < 32; i++) t.data[i] = (r() * 256) | 0; // row 0
        for (let i = 32; i < 64; i++) t.data[i] = ~t.data[i - 32] & 0xff; // row 1: bitwise-opposite, max distance
        const q = randomDescriptors(1, 32, 9114); // same seed as row 0 -> distance 0
        const knn = jsfeatNext.bfmatcher.knnMatch(q, t, 2);
        expect(knn[0].length).toBe(2);
        const good = jsfeatNext.bfmatcher.ratio_test(knn, 0.75);
        expect(good.length).toBe(1);
        expect(good[0].distance).toBe(0);
    });

    it("ratio_test yields nothing when knnMatch found no neighbours (empty train)", () => {
        const q = randomDescriptors(3, 32, 9130);
        const t = new jsfeatNext.matrix_t(32, 0, OU8C1);
        const knn = jsfeatNext.bfmatcher.knnMatch(q, t, 2);
        for (const row of knn) expect(row.length).toBe(0);
        expect(jsfeatNext.bfmatcher.ratio_test(knn).length).toBe(0);
    });

    it("ratio_test keeps a match with only one neighbour (nothing to compare against)", () => {
        // A single-descriptor train set means knnMatch returns rows of length 1:
        // there is no second-best to fail the ratio against, so the match is kept.
        const q = randomDescriptors(3, 32, 9112);
        const t = randomDescriptors(1, 32, 9113);
        const knn = jsfeatNext.bfmatcher.knnMatch(q, t, 2);
        for (const row of knn) expect(row.length).toBe(1);
        const good = jsfeatNext.bfmatcher.ratio_test(knn, 0.5);
        expect(good.length).toBe(3);
    });
});
