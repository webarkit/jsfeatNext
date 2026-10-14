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
import { gms as GmsFilter } from "../../src/gms/gms";
import type { keypoint_t } from "../../src/keypoint_t/keypoint_t";
import type { match_t } from "../../src/bfmatcher/match_t";
import type { matrix_t } from "../../src/matrix_t/matrix_t";
import { loadFixture } from "../fixtures/opencv/loader";
import { cornerScene, keypointPool, rng, U8C1 } from "./helpers";

/**
 * `gms.filter` edge cases and properties (#134): degenerate and malformed
 * inputs, robustness, the shape of its output, independence between calls,
 * and the inlier-ratio gain on a translated scene. Bit-exactness against
 * OpenCV is pinned separately, in `tests/reference/gms.opencv.test.ts`.
 */

const VGA = { width: 640, height: 480 };

/** The part of a GMS fixture's payload these tests read (see the reference test). */
interface GmsPayload {
    size1: [number, number];
    size2: [number, number];
    with_rotation: boolean;
    with_scale: boolean;
    threshold_factor: number;
    keypoints1: [number, number][];
    keypoints2: [number, number][];
    matches: [number, number, number][];
    kept: number[];
}

/** Runs `filter` on a fixture's payload and returns the kept indices. */
function runFixture(filter: GmsFilter, p: GmsPayload): number[] {
    const matches = p.matches.map(([q, t, d]) => new jsfeatNext.match_t(q, t, d));
    const out = filter.filter(
        { width: p.size1[0], height: p.size1[1] },
        { width: p.size2[0], height: p.size2[1] },
        p.keypoints1.map(([x, y]) => new jsfeatNext.keypoint_t(x, y)),
        p.keypoints2.map(([x, y]) => new jsfeatNext.keypoint_t(x, y)),
        matches,
        p.with_rotation,
        p.with_scale,
        p.threshold_factor
    );
    return out.map((m) => matches.indexOf(m));
}

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

    it("returns [] when no pass keeps a match, on every path", () => {
        // getInlierMask replaces its (empty) result only with a pass that
        // keeps strictly more than the best so far, from 0. The cluster call
        // first leaves kept-match flags in the pool's recycled buffers.
        const cluster = build(clusterPairs());
        const single = build([[330, 250, 330, 250]]);
        for (const [rot, scale] of [
            [false, false],
            [true, false],
            [false, true],
            [true, true],
        ]) {
            expect(gms.filter(VGA, VGA, cluster.kp1, cluster.kp2, cluster.matches, rot, scale).length).toBe(16);
            expect(gms.filter(VGA, VGA, single.kp1, single.kp2, single.matches, rot, scale)).toEqual([]);
        }
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

    it("throws on a hole in a keypoint array before borrowing any buffer", () => {
        // tests/setup/pool-balance.ts fails this test if a throw leaves the
        // shared pool unbalanced, so expecting the throw is the whole check.
        for (const side of [1, 2]) {
            const { kp1, kp2, matches } = build(clusterPairs());
            delete (side === 1 ? kp1 : kp2)[5]; // a hole at an index match 5 references
            expect(() => gms.filter(VGA, VGA, kp1, kp2, matches)).toThrow(TypeError);
            expect(() => gms.filter(VGA, VGA, kp1, kp2, matches, true, true)).toThrow(
                "gms.filter: match 5 references keypoint 5, which is undefined"
            );
        }
    });

    it("returns every borrowed buffer when it throws after borrowing", () => {
        // The input checks above run before the first get_buffer. These two
        // throw past it, so only the try/finally keeps the shared pool whole;
        // tests/setup/pool-balance.ts fails this test if either leaks a node.
        const { kp1, kp2, matches } = build(clusterPairs());

        // normalize() reads x on a keypoint whose accessor throws.
        const hostile = build(clusterPairs());
        Object.defineProperty(hostile.kp1[3], "x", {
            get(): number {
                throw new Error("hostile keypoint accessor");
            },
        });
        expect(() => gms.filter(VGA, VGA, hostile.kp1, hostile.kp2, hostile.matches)).toThrow(
            "hostile keypoint accessor"
        );

        // run() multiplies threshold_factor by a number at the first occupied
        // cell, which a BigInt cannot do. The cast stands in for a caller that
        // slipped a non-number past the type system.
        const not_a_number = BigInt(6) as unknown as number;
        expect(() => gms.filter(VGA, VGA, kp1, kp2, matches, false, false, not_a_number)).toThrow(TypeError);
        expect(() => gms.filter(VGA, VGA, kp1, kp2, matches, true, true, not_a_number)).toThrow(TypeError);

        // and the pool still serves a normal call afterwards
        expect(gms.filter(VGA, VGA, kp1, kp2, matches).length).toBe(16);
    });

    it("throws on a malformed size before borrowing any buffer", () => {
        const { kp1, kp2, matches } = build(clusterPairs());
        const bad: unknown[] = [
            undefined,
            {},
            { width: 640 },
            { width: 0, height: 480 },
            { width: 640, height: -1 },
            { width: Number.NaN, height: 480 },
            { width: Number.POSITIVE_INFINITY, height: 480 },
            { width: "640", height: 480 },
        ];
        for (const size of bad) {
            const s = size as { width: number; height: number };
            expect(() => gms.filter(s, VGA, kp1, kp2, matches)).toThrow(RangeError);
            expect(() => gms.filter(VGA, s, kp1, kp2, matches, true, true)).toThrow(RangeError);
            expect(() => gms.filter(s, VGA, [], [], [])).toThrow(RangeError);
        }
        expect(() => gms.filter(VGA, { width: 0, height: 480 }, kp1, kp2, matches)).toThrow(
            "gms.filter: size2 must have a finite width and height > 0, got 0 x 480"
        );
    });

    it("reads a keypoint coordinate as float32 first, as cv::KeyPoint stores it", () => {
        // x is not float32-exact, and the cell depends on the order of the
        // roundings: read as float32 first (OpenCV's KeyPoint::pt is a
        // Point2f) it is 320, column 10 of the right grid; divided as a
        // double, 319.999988 / 640 rounds below 0.5, column 9.
        const x = 319.999988;
        expect(Math.fround(x)).not.toBe(x);
        expect(Math.floor(Math.fround(Math.fround(Math.fround(x) / 640) * 20))).toBe(10);
        expect(Math.floor(Math.fround(Math.fround(x / 640) * 20))).toBe(9);

        // The cluster's left cell pairs with right cell (10, 10). The probe
        // shares the left cell and agrees with it only in the float32 reading.
        const { kp1, kp2, matches } = build([...clusterPairs(), [330, 250, x, 250]]);
        const probe = matches[16];
        for (const [rot, scale] of [
            [false, false],
            [true, true],
        ]) {
            expect(gms.filter(VGA, VGA, kp1, kp2, matches, rot, scale)).toContain(probe);
        }
    });

    it("a call does not depend on the previous call's scale or rotation", () => {
        // The combined path ends on the 40x40 right grid with rotation
        // pattern 8, and leaves the pool's recycled scratch buffers dirty.
        // The default path that follows must see neither: the result equals
        // a fresh instance's (it shares the pool, like the singleton) and
        // OpenCV's.
        for (const [before, name] of [
            ["gms-rotation-scale", "gms-default"],
            ["gms-synth-rotation-scale", "gms-synth-default"],
        ]) {
            runFixture(gms, loadFixture<GmsPayload>(before).payload);
            const p = loadFixture<GmsPayload>(name).payload;
            const after = runFixture(gms, p);
            expect(after).toEqual(runFixture(new GmsFilter(), p));
            expect(after).toEqual(p.kept);
        }
    });

    it("raises the inlier ratio on a translated cornerScene", () => {
        // Two exact views of the scene, the second shifted by (16, 8): FAST
        // corners, upright ORB descriptors (the detectors test's pattern),
        // brute-force matches. A match is an inlier when its train point is
        // within 2 px of the query point moved by the shift.
        const W = 640,
            H = 480,
            DX = 16,
            DY = 8;
        const features = (img: matrix_t) => {
            jsfeatNext.fast_corners.set_threshold(20);
            const kps = keypointPool(W * H);
            const n = jsfeatNext.fast_corners.detect(img, kps, 20);
            for (let i = 0; i < n; i++) kps[i].angle = 0;
            const descriptors = new jsfeatNext.matrix_t(32, n, U8C1);
            jsfeatNext.orb.describe(img, kps, n, descriptors);
            return { kps, descriptors };
        };
        const a = features(cornerScene(W, H));
        const b = features(cornerScene(W, H, { dx: DX, dy: DY }));
        const matches = jsfeatNext.bfmatcher.match(a.descriptors, b.descriptors);
        const out = gms.filter({ width: W, height: H }, { width: W, height: H }, a.kps, b.kps, matches);

        const inlier = (m: match_t) => {
            const p = a.kps[m.queryIdx],
                q = b.kps[m.trainIdx];
            return Math.hypot(q.x - (p.x + DX), q.y - (p.y + DY)) <= 2;
        };
        const ratio = (ms: match_t[]) => ms.filter(inlier).length / ms.length;
        expect(out.length).toBeGreaterThan(0);
        expect(ratio(out)).toBeGreaterThanOrEqual(ratio(matches));
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
