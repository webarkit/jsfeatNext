/*
 *  gms.test.ts
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
import type { keypoint_t } from "../../src/keypoint_t/keypoint_t";
import type { match_t } from "../../src/bfmatcher/match_t";
import { rng } from "./helpers";

/**
 * `gms.filter` edge cases (#134): degenerate inputs, robustness, and the
 * shape of its output. Bit-exactness against OpenCV is pinned separately, in
 * `tests/reference/gms.opencv.test.ts`.
 */

const VGA = { width: 640, height: 480 };

/** One match per pair of points, `kp1[i]` <-> `kp2[i]`. */
function build(pairs: [number, number, number, number][]) {
    const kp1 = pairs.map(([x, y]) => new jsfeatNext.keypoint_t(x, y));
    const kp2 = pairs.map(([, , x, y]) => new jsfeatNext.keypoint_t(x, y));
    const matches = pairs.map((_, i) => new jsfeatNext.match_t(i, i, 0));
    return { kp1, kp2, matches };
}

/**
 * 16 points in x in [325, 345], y in [244, 260] (left cell (10, 10) of the
 * 20x20 grid on 640x480), matched to themselves: every match agrees.
 */
function clusterPairs(): [number, number, number, number][] {
    const out: [number, number, number, number][] = [];
    for (const y of [244, 249, 255, 260]) {
        for (const x of [325, 332, 338, 345]) out.push([x, y, x, y]);
    }
    return out;
}

/** Positions of `out`'s elements in `input`, by identity, as an ascending walk. */
function positions(out: match_t[], input: match_t[]): number[] {
    const pos: number[] = [];
    let from = 0;
    for (const m of out) {
        let i = from;
        while (i < input.length && input[i] !== m) i++;
        pos.push(i);
        from = i + 1;
    }
    return pos;
}

describe("gms.filter edge cases (#134)", () => {
    const gms = jsfeatNext.gms;

    it("returns [] for no matches", () => {
        expect(gms.filter(VGA, VGA, [], [], [])).toEqual([]);
    });

    it("rejects a single match", () => {
        // Its cell scores 1, below the threshold 6 * sqrt(1 / 9) = 2.
        const { kp1, kp2, matches } = build([[330, 250, 330, 250]]);
        expect(gms.filter(VGA, VGA, kp1, kp2, matches)).toEqual([]);
    });

    it("keeps a dense consistent cluster", () => {
        const { kp1, kp2, matches } = build(clusterPairs());
        const out = gms.filter(VGA, VGA, kp1, kp2, matches);
        expect(out.length).toBe(16);
    });

    it("drops scattered matches with no neighbourhood support", () => {
        // One match per left cell, at its centre, each to a uniformly random
        // point: no cell has a neighbour that agrees with it.
        const rand = rng(7);
        const pairs: [number, number, number, number][] = [];
        for (let cy = 0; cy < 20; cy++) {
            for (let cx = 0; cx < 20; cx++) {
                pairs.push([(cx + 0.5) * 32, (cy + 0.5) * 24, rand() * 640, rand() * 480]);
            }
        }
        const { kp1, kp2, matches } = build(pairs);
        expect(matches.length).toBe(400);
        expect(gms.filter(VGA, VGA, kp1, kp2, matches).length).toBe(0);
    });

    it("ignores keypoints outside the image", () => {
        // Each of the four is one side of a match whose other side is in the
        // cluster's cell, two on the query side and two on the train side.
        // OpenCV would give them a -1, wrapped or out-of-range cell; gms gives
        // the whole match none, so it is never kept and the cluster is intact.
        const outside: [number, number, number, number][] = [
            [640, 250, 330, 250], // left x == width
            [330, 250, 330, 480], // right y == height
            [-1, 250, 330, 250], // left x < 0
            [330, 250, 330, -1], // right y < 0
        ];
        const { kp1, kp2, matches } = build([...clusterPairs(), ...outside]);
        let out: match_t[] = [];
        expect(() => (out = gms.filter(VGA, VGA, kp1, kp2, matches))).not.toThrow();
        const probes = matches.slice(16);
        for (const m of probes) expect(out).not.toContain(m);
        expect(out).toEqual(matches.slice(0, 16));
    });

    it("throws RangeError for an out-of-range queryIdx / trainIdx", () => {
        const { kp1, kp2, matches } = build(clusterPairs());
        const badQuery = [...matches, new jsfeatNext.match_t(16, 0, 0)];
        const badTrain = [...matches, new jsfeatNext.match_t(0, -1, 0)];
        expect(() => gms.filter(VGA, VGA, kp1, kp2, badQuery)).toThrow(RangeError);
        expect(() => gms.filter(VGA, VGA, kp1, kp2, badTrain)).toThrow(RangeError);
        expect(() => gms.filter(VGA, VGA, kp1, kp2, badQuery)).toThrow(
            "gms.filter: match 16 references keypoint 16 of 16"
        );
    });

    it("touches only referenced keypoints of a long pool", () => {
        const compact = build(clusterPairs());
        const expected = positions(gms.filter(VGA, VGA, compact.kp1, compact.kp2, compact.matches), compact.matches);

        // The same cluster at indices 500..515 of two 1000-entry pools. Every
        // other entry is at (-5, -5) and counts any read of its coordinates.
        let reads = 0;
        const pool = (): keypoint_t[] =>
            Array.from({ length: 1000 }, () => {
                const kp = new jsfeatNext.keypoint_t(-5, -5);
                Object.defineProperty(kp, "x", { get: () => (reads++, -5) });
                Object.defineProperty(kp, "y", { get: () => (reads++, -5) });
                return kp;
            });
        const kp1 = pool();
        const kp2 = pool();
        const matches = clusterPairs().map(([x1, y1, x2, y2], i) => {
            kp1[500 + i] = new jsfeatNext.keypoint_t(x1, y1);
            kp2[500 + i] = new jsfeatNext.keypoint_t(x2, y2);
            return new jsfeatNext.match_t(500 + i, 500 + i, 0);
        });

        const out = gms.filter(VGA, VGA, kp1, kp2, matches);
        expect(positions(out, matches)).toEqual(expected);
        expect(reads).toBe(0);
    });

    it("keeps input order and object identity, duplicates included", () => {
        const { kp1, kp2, matches } = build(clusterPairs());
        const input = [...matches, matches[3]];
        const out = gms.filter(VGA, VGA, kp1, kp2, input);

        for (const m of out) expect(input).toContain(m);
        const pos = positions(out, input);
        expect(pos.every((p, i) => p < input.length && (i === 0 || p > pos[i - 1]))).toBe(true);
        expect(out.filter((m) => m === matches[3]).length).toBe(2);
    });

    it("works on images smaller than the grid", () => {
        // 10x10 pixels for a 20x20 grid: a cell is half a pixel wide.
        const tiny = { width: 10, height: 10 };
        const pairs = clusterPairs().map(([x1, y1, x2, y2]): [number, number, number, number] => [
            (x1 * 10) / 640,
            (y1 * 10) / 480,
            (x2 * 10) / 640,
            (y2 * 10) / 480,
        ]);
        const { kp1, kp2, matches } = build(pairs);
        let out: match_t[] = [];
        expect(() => (out = gms.filter(tiny, tiny, kp1, kp2, matches))).not.toThrow();
        expect(out.length).toBeGreaterThan(0);
    });
});
