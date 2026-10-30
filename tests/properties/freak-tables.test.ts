/*
 *  freak-tables.test.ts
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

import { describe, expect, it } from "vitest";
import {
    FREAK_DEF_PAIRS,
    FREAK_ORIEN_I,
    FREAK_ORIEN_J,
    FREAK_PAIR_I,
    FREAK_PAIR_J,
} from "../../src/freak/freak_tables";

describe("FREAK pair tables (OpenCV 4.10.0 freak.cpp)", () => {
    it("FREAK_DEF_PAIRS is the 512-entry upstream literal", () => {
        expect(FREAK_DEF_PAIRS.length).toBe(512);
        expect(Array.from(FREAK_DEF_PAIRS.slice(0, 5))).toEqual([404, 431, 818, 511, 181]);
        expect(FREAK_DEF_PAIRS[511]).toBe(822);
    });

    it("every pair index lies in [0, 903)", () => {
        for (const p of FREAK_DEF_PAIRS) {
            expect(p).toBeGreaterThanOrEqual(0);
            expect(p).toBeLessThan((43 * 42) / 2);
        }
    });

    it("expands each index to (i, j) with i > j and i(i-1)/2 + j === index", () => {
        expect(FREAK_PAIR_I.length).toBe(512);
        expect(FREAK_PAIR_J.length).toBe(512);
        for (let k = 0; k < 512; k++) {
            expect(FREAK_PAIR_I[k]).toBeGreaterThan(FREAK_PAIR_J[k]);
            expect(FREAK_PAIR_I[k]).toBeLessThanOrEqual(42);
            expect((FREAK_PAIR_I[k] * (FREAK_PAIR_I[k] - 1)) / 2 + FREAK_PAIR_J[k]).toBe(FREAK_DEF_PAIRS[k]);
        }
        // 404: 28*27/2 = 378 <= 404 < 29*28/2 = 406, so i = 28 and j = 26
        expect([FREAK_PAIR_I[0], FREAK_PAIR_J[0]]).toEqual([28, 26]);
    });

    it("has the 45 orientation pairs in buildPattern order", () => {
        expect(FREAK_ORIEN_I.length).toBe(45);
        expect(FREAK_ORIEN_J.length).toBe(45);
        const pair = (m: number) => [FREAK_ORIEN_I[m], FREAK_ORIEN_J[m]];
        expect([pair(0), pair(1), pair(2)]).toEqual([
            [0, 3],
            [1, 4],
            [2, 5],
        ]);
        expect([pair(42), pair(43), pair(44)]).toEqual([
            [36, 39],
            [37, 40],
            [38, 41],
        ]);
    });
});
