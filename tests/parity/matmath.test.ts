/*
 *  matmath.test.ts
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
import matmath from "../../src/matmath/matmath";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45).
 *
 * Every function in src/matmath/matmath.ts is exercised against the same
 * function in the original jsfeat (`jsfeat.matmath`, a static namespace) on
 * identical inputs. Deterministic pseudo-random data keeps runs reproducible.
 */

// small deterministic PRNG (mulberry32) so failures are reproducible
function rng(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;

function makePair(cols: number, rows: number, seed: number) {
    // one matrix for jsfeatNext, one identical copy for the jsfeat oracle
    const next = new jsfeatNext.matrix_t(cols, rows, F32C1);
    const orig = new jsfeat.matrix_t(cols, rows, jsfeat.F32_t | jsfeat.C1_t);
    const rand = rng(seed);
    for (let i = 0; i < cols * rows; i++) {
        const v = rand() * 20 - 10;
        next.data[i] = v;
        orig.data[i] = v;
    }
    return { next, orig };
}

function expectDataClose(actual: { data: Float32Array }, expected: { data: Float32Array }, len: number) {
    for (let i = 0; i < len; i++) {
        expect(actual.data[i]).toBeCloseTo(expected.data[i], 5);
    }
}

const mm = new matmath();

describe("parity: matmath vs original jsfeat.matmath", () => {
    it("identity", () => {
        const { next, orig } = makePair(4, 4, 1);
        mm.identity(next, 2.5);
        jsfeat.matmath.identity(orig, 2.5);
        expectDataClose(next, orig, 16);
    });

    it("transpose", () => {
        const { next: a, orig: ao } = makePair(5, 3, 2);
        const at = new jsfeatNext.matrix_t(3, 5, F32C1);
        const ato = new jsfeat.matrix_t(3, 5, jsfeat.F32_t | jsfeat.C1_t);
        mm.transpose(at, a);
        jsfeat.matmath.transpose(ato, ao);
        expectDataClose(at, ato, 15);
    });

    it("multiply (C = A * B)", () => {
        const { next: a, orig: ao } = makePair(4, 3, 3);
        const { next: b, orig: bo } = makePair(2, 4, 4);
        const c = new jsfeatNext.matrix_t(2, 3, F32C1);
        const co = new jsfeat.matrix_t(2, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.multiply(c, a, b);
        jsfeat.matmath.multiply(co, ao, bo);
        expectDataClose(c, co, 6);
    });

    it("multiply_ABt (C = A * B')", () => {
        const { next: a, orig: ao } = makePair(4, 3, 5);
        const { next: b, orig: bo } = makePair(4, 2, 6);
        const c = new jsfeatNext.matrix_t(2, 3, F32C1);
        const co = new jsfeat.matrix_t(2, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.multiply_ABt(c, a, b);
        jsfeat.matmath.multiply_ABt(co, ao, bo);
        expectDataClose(c, co, 6);
    });

    it("multiply_AtB (C = A' * B)", () => {
        const { next: a, orig: ao } = makePair(3, 4, 7);
        const { next: b, orig: bo } = makePair(2, 4, 8);
        const c = new jsfeatNext.matrix_t(2, 3, F32C1);
        const co = new jsfeat.matrix_t(2, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.multiply_AtB(c, a, b);
        jsfeat.matmath.multiply_AtB(co, ao, bo);
        expectDataClose(c, co, 6);
    });

    it("multiply_AAt (C = A * A')", () => {
        const { next: a, orig: ao } = makePair(5, 3, 9);
        const c = new jsfeatNext.matrix_t(3, 3, F32C1);
        const co = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.multiply_AAt(c, a);
        jsfeat.matmath.multiply_AAt(co, ao);
        expectDataClose(c, co, 9);
    });

    it("multiply_AtA (C = A' * A)", () => {
        const { next: a, orig: ao } = makePair(3, 5, 10);
        const c = new jsfeatNext.matrix_t(3, 3, F32C1);
        const co = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.multiply_AtA(c, a);
        jsfeat.matmath.multiply_AtA(co, ao);
        expectDataClose(c, co, 9);
    });

    it("identity_3x3", () => {
        const { next, orig } = makePair(3, 3, 11);
        mm.identity_3x3(next, 3.0);
        jsfeat.matmath.identity_3x3(orig, 3.0);
        expectDataClose(next, orig, 9);
    });

    it("invert_3x3", () => {
        const { next: a, orig: ao } = makePair(3, 3, 12);
        // nudge the diagonal so the matrix is well-conditioned (same on both)
        for (let d = 0; d < 3; d++) {
            a.data[d * 4] += 5;
            ao.data[d * 4] += 5;
        }
        const inv = new jsfeatNext.matrix_t(3, 3, F32C1);
        const invo = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.invert_3x3(a, inv);
        jsfeat.matmath.invert_3x3(ao, invo);
        expectDataClose(inv, invo, 9);
    });

    it("invert_3x3 — singular input stays byte-identical to jsfeat (#120)", () => {
        // #120 added a 1/0 status return but did NOT touch the numbers: a
        // singular matrix still yields the exact same non-finite pattern jsfeat
        // produces from 1/det. Compared with Object.is so each +Infinity,
        // -Infinity and NaN has to match jsfeat's slot exactly — a strictly
        // stronger guard than "at least one entry is non-finite".
        const vals = [1, 2, 3, 2, 4, 6, 1, 1, 1]; // rows 1,2 dependent -> det 0
        const a = new jsfeatNext.matrix_t(3, 3, F32C1);
        const ao = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        a.data.set(vals);
        ao.data.set(vals);
        const inv = new jsfeatNext.matrix_t(3, 3, F32C1);
        const invo = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);

        expect(mm.invert_3x3(a, inv)).toBe(0); // jsfeatNext reports singular...
        jsfeat.matmath.invert_3x3(ao, invo); // ...jsfeat gives no such signal
        for (let i = 0; i < 9; i++) {
            expect(Object.is(inv.data[i], invo.data[i])).toBe(true);
        }
    });

    it("multiply_3x3", () => {
        const { next: a, orig: ao } = makePair(3, 3, 13);
        const { next: b, orig: bo } = makePair(3, 3, 14);
        const c = new jsfeatNext.matrix_t(3, 3, F32C1);
        const co = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        mm.multiply_3x3(c, a, b);
        jsfeat.matmath.multiply_3x3(co, ao, bo);
        expectDataClose(c, co, 9);
    });

    it("mat3x3_determinant", () => {
        const { next, orig } = makePair(3, 3, 15);
        expect(mm.mat3x3_determinant(next)).toBeCloseTo(jsfeat.matmath.mat3x3_determinant(orig), 4);
    });

    it("determinant_3x3 (scalar args)", () => {
        const rand = rng(16);
        const v = Array.from({ length: 9 }, () => rand() * 10 - 5);
        const actual = mm.determinant_3x3(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8]);
        const expected = jsfeat.matmath.determinant_3x3(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8]);
        expect(actual).toBeCloseTo(expected, 6);
    });
});
