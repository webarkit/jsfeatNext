/*
 *  teblid-tables.test.ts
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
import { TEBLID_256, TEBLID_512 } from "../../src/teblid/teblid_tables";

/**
 * Shape and anchor checks on the trained TEBLID tables (issue #135). The full
 * values are checked against the upstream headers when the tables are
 * generated; here the first and last learner of each table pin the order.
 */
const cases = [
    {
        name: "p256",
        table: TEBLID_256,
        n: 256,
        first: [25, 14, 13, 15, 6],
        firstTh: 21.65,
        last: [16, 20, 12, 19, 1],
        lastTh: 2.75,
    },
    {
        name: "p512",
        table: TEBLID_512,
        n: 512,
        first: [17, 18, 12, 15, 2],
        firstTh: 14.45,
        last: [11, 3, 9, 2, 1],
        lastTh: 2.65,
    },
];

describe("teblid tables", () => {
    for (const c of cases) {
        describe(c.name, () => {
            const { table, n } = c;
            it("has the expected lengths", () => {
                expect(table.n).toBe(n);
                expect(table.geom.length).toBe(5 * n);
                expect(table.th.length).toBe(n);
            });
            it("starts and ends with the upstream learners", () => {
                expect(Array.from(table.geom.slice(0, 5))).toEqual(c.first);
                expect(table.th[0]).toBe(Math.fround(c.firstTh));
                expect(Array.from(table.geom.slice(5 * (n - 1)))).toEqual(c.last);
                expect(table.th[n - 1]).toBe(Math.fround(c.lastTh));
            });
            it("keeps coordinates in [0, 31] and boxRadius >= 1", () => {
                for (let i = 0; i < n; i++) {
                    for (let k = 0; k < 4; k++) {
                        const v = table.geom[5 * i + k];
                        expect(v >= 0 && v <= 31).toBe(true);
                    }
                    expect(table.geom[5 * i + 4]).toBeGreaterThanOrEqual(1);
                }
            });
        });
    }
});
