/*
 *  teblid.test.ts
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
import { matrix_t } from "../../src/matrix_t/matrix_t";
import { keypoint_t } from "../../src/keypoint_t/keypoint_t";
import { teblid, roundnum } from "../../src/teblid/teblid";
import { loadScene } from "../fixtures/opencv/loader";

/**
 * Properties of `teblid.describe` (#135) that the OpenCV fixtures do not pin:
 * argument validation, the angle convention, which keypoints are read, and
 * the shared pool staying balanced (tests/setup/pool-balance.ts also checks
 * the balance after every test).
 */

const freeCount = (): number => (jsfeatNext.cache as unknown as { _pool_size: number })._pool_size;

const scene = loadScene();
const img = new matrix_t(scene.width, scene.height, jsfeatNext.U8C1_t);
img.data.set(scene.data);

const engine = new teblid();

/** Describes `kps` and returns each row as a hex string. */
function rows(kps: keypoint_t[], count = kps.length, bits: 256 | 512 = 256): string[] {
    const out = new matrix_t(bits / 8, 1, jsfeatNext.U8C1_t);
    engine.describe(img, kps, count, out, { bits });
    const res: string[] = [];
    for (let r = 0; r < out.rows; ++r) {
        let s = "";
        for (let i = 0; i < out.cols; ++i) s += out.data[r * out.cols + i].toString(16).padStart(2, "0");
        res.push(s);
    }
    return res;
}

const interior = (angle = -1): keypoint_t => new keypoint_t(320, 240, 0, 0, angle, 31);

describe("teblid.describe: validation", () => {
    for (const size of [0, -3]) {
        it(`throws a RangeError naming the index for size ${size}`, () => {
            const kps = [interior(), interior(), new keypoint_t(300, 200, 0, 0, -1, size)];
            const out = new matrix_t(32, 1, jsfeatNext.U8C1_t);
            expect(() => engine.describe(img, kps, 3, out)).toThrow(RangeError);
            expect(() => engine.describe(img, kps, 3, out)).toThrow(/\b2\b/);
        });
    }

    it("leaves the shared pool balanced when a keypoint with size <= 0 is rejected mid-list", () => {
        const before = freeCount();
        const kps = [interior(), new keypoint_t(100, 100, 0, 0, -1, 0), interior()];
        expect(() => engine.describe(img, kps, 3, new matrix_t(32, 1, jsfeatNext.U8C1_t))).toThrow(RangeError);
        expect(freeCount()).toBe(before);
    });

    it("throws for bits other than 256 and 512", () => {
        const out = new matrix_t(32, 1, jsfeatNext.U8C1_t);
        expect(() => engine.describe(img, [interior()], 1, out, { bits: 128 as 256 })).toThrow();
    });

    it("throws a RangeError before borrowing when count > corners.length", () => {
        const before = freeCount();
        const out = new matrix_t(32, 1, jsfeatNext.U8C1_t);
        expect(() => engine.describe(img, [interior()], 2, out)).toThrow(RangeError);
        expect(freeCount()).toBe(before);
    });

    it("throws a TypeError for a non-U8C1 source", () => {
        const f32 = new matrix_t(64, 64, jsfeatNext.F32C1_t);
        const rgba = new matrix_t(64, 64, jsfeatNext.U8C4_t);
        const out = new matrix_t(32, 1, jsfeatNext.U8C1_t);
        const kp = [new keypoint_t(32, 32, 0, 0, -1, 7)];
        expect(() => engine.describe(f32, kp, 1, out)).toThrow(TypeError);
        expect(() => engine.describe(rgba, kp, 1, out)).toThrow(TypeError);
    });
});

describe("teblid.describe: behaviour", () => {
    it("count = 0 leaves the descriptors with 0 rows", () => {
        const out = new matrix_t(32, 5, jsfeatNext.U8C1_t);
        engine.describe(img, [], 0, out);
        expect(out.rows).toBe(0);
        expect(out.cols).toBe(32);
    });

    it("gives the same bits for angle -1 (upright) and angle 0", () => {
        for (const bits of [256, 512] as const) {
            expect(rows([interior(0)], 1, bits)).toEqual(rows([interior(-1)], 1, bits));
        }
    });

    it("gives different bits for angle PI/2 and angle 0 on an interior keypoint", () => {
        expect(rows([interior(Math.PI / 2)])).not.toEqual(rows([interior(0)]));
    });

    it("reads only corners[0..count)", () => {
        const kps = [interior(), new keypoint_t(200, 150, 0, 0, 1.2, 40)];
        const base = rows(kps, 2);
        // a junk keypoint after count: its size alone would throw if it were read
        const junk = [...kps, new keypoint_t(Number.NaN, -5, 0, 0, 7, -1)];
        expect(rows(junk, 2)).toEqual(base);
    });

    it("writes a row of bits / 8 bytes per keypoint", () => {
        expect(rows([interior()], 1, 256)[0]).toHaveLength(64);
        expect(rows([interior()], 1, 512)[0]).toHaveLength(128);
    });
});

describe("roundnum", () => {
    it("is (int)(x + 0.5f): float add, then truncation toward zero", () => {
        expect(roundnum(-0.7)).toBe(0);
        expect(roundnum(-1.6)).toBe(-1);
        expect(roundnum(2.5)).toBe(3);
        expect(roundnum(1.49)).toBe(1);
    });
});
