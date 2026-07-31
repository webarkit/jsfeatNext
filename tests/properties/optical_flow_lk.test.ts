/*
 *  optical_flow_lk.test.ts
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
import type { matrix_t } from "../../src/matrix_t/matrix_t";
import { U8C1, cornerScene, uniformImage, keypointPool } from "./helpers";

/**
 * Property/invariant tests for `optical_flow_lk` (issue #87, phase 3).
 *
 * The tracker has no closed-form answer to compare against, but it does have
 * strong invariants: tracking an image against ITSELF must report zero motion,
 * tracking a rigidly translated copy must recover that translation, and a
 * textureless window must be rejected rather than guessed at.
 *
 * Scope note, established empirically: the recoverable displacement is set by
 * the window size and pyramid depth, not by the tracker's correctness. On this
 * small 96x72 scene at 2 levels with a 9px window, shifts up to ~3px come back
 * to ~0.01px while a 5px shift does not converge at all. Widen either knob and
 * that ceiling moves: on a 320x240 scene, 2 levels with a 15px window recovers
 * 5px for every point, and 4 levels with a 9px window recovers 10px for 28 of
 * 29 points. That is a local gradient method behaving exactly as designed, so
 * the assertions below stay inside the regime the configuration supports
 * rather than pinning a failure.
 */

const W = 96;
const H = 72;
const LEVELS = 2;
const WIN = 9;

function pyramidOf(img: matrix_t) {
    const p = new jsfeatNext.pyramid_t(LEVELS);
    p.allocate(W, H, U8C1);
    p.build(img, false);
    return p;
}

/** The scene's FAST corners — the meaningful trackable set (flat areas fail the eigenvalue test). */
function trackablePoints(img: matrix_t) {
    const fc = jsfeatNext.fast_corners;
    fc.set_threshold(20);
    const corners = keypointPool(W * H);
    const n = fc.detect(img, corners, 16);
    const xy: number[] = [];
    for (let i = 0; i < n; i++) xy.push(corners[i].x, corners[i].y);
    return Float32Array.from(xy);
}

function track(
    prev: ReturnType<typeof pyramidOf>,
    curr: ReturnType<typeof pyramidOf>,
    prevXY: Float32Array,
    seed?: Float32Array
) {
    const count = prevXY.length >> 1;
    // Default to the documented usage — "seed it with a prediction or a copy of
    // prev_xy" — rather than zeros. track() happens to ignore the seed today
    // (see the seed-independence test below), so zeros would pass just as well;
    // following the contract keeps these tests correct either way.
    const currXY = Float32Array.from(seed ?? prevXY);
    const status = new Uint8Array(count);
    jsfeatNext.optical_flow_lk.track(prev, curr, prevXY, currXY, count, WIN, 30, status, 0.01, 0.0001);
    return { count, currXY, status };
}

describe("optical_flow_lk invariants", () => {
    it("reports strictly binary status flags", () => {
        const img = cornerScene(W, H);
        const prevXY = trackablePoints(img);
        const { count, status } = track(pyramidOf(img), pyramidOf(cornerScene(W, H, { dx: 2, dy: 1 })), prevXY);
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) expect([0, 1]).toContain(status[i]);
    });

    it("reports exactly zero motion when both frames are the same image", () => {
        // The strongest invariant available: the true displacement is zero, so
        // any nonzero output is error. It comes out bit-exact, hence toBe(0).
        const img = cornerScene(W, H);
        const prevXY = trackablePoints(img);
        const { count, currXY, status } = track(pyramidOf(img), pyramidOf(img), prevXY);

        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
            expect(status[i]).toBe(1); // a corner tracked against itself cannot be lost
            expect(currXY[i * 2]).toBe(prevXY[i * 2]);
            expect(currXY[i * 2 + 1]).toBe(prevXY[i * 2 + 1]);
        }
    });

    it("ignores the caller's initial curr_xy contents entirely", () => {
        // Characterization, not an endorsement.
        //
        // The TSDoc invites callers to "seed it with a prediction or a copy of
        // prev_xy", but at the coarsest level track() does `next_x = prev_x`,
        // discarding whatever was in curr_xy. Verified: seeds of zeros, a copy
        // of prev_xy, +1, +50 and even -9999 all yield BIT-IDENTICAL output, so
        // curr_xy is pure output rather than an in/out prediction.
        //
        // Two consequences worth stating plainly: a bad guess can never
        // corrupt the result (good), and a good prediction can never help
        // (a missed optimisation, and a documentation mismatch — see the note
        // in the PR). If initial-flow support is ever added, this test SHOULD
        // fail and be updated deliberately.
        const img = cornerScene(W, H);
        const prevXY = trackablePoints(img);
        const shifted = pyramidOf(cornerScene(W, H, { dx: 2, dy: 1 }));
        const prev = pyramidOf(img);

        const reference = track(prev, shifted, prevXY, Float32Array.from(prevXY));
        expect(reference.count).toBeGreaterThan(0);

        for (const makeSeed of [
            () => new Float32Array(reference.count * 2), // zeros
            () => Float32Array.from(prevXY, (v) => v + 1),
            () => Float32Array.from(prevXY, (v) => v + 50),
            () => Float32Array.from(prevXY, () => -9999),
        ]) {
            const other = track(prev, shifted, prevXY, makeSeed());
            expect(Array.from(other.currXY)).toEqual(Array.from(reference.currXY));
            expect(Array.from(other.status)).toEqual(Array.from(reference.status));
        }
    });

    it("recovers a small known translation", () => {
        const img = cornerScene(W, H);
        const prevXY = trackablePoints(img);

        for (const [dx, dy] of [
            [1, 0],
            [3, 2],
            [-2, 3],
        ] as [number, number][]) {
            const { count, currXY, status } = track(pyramidOf(img), pyramidOf(cornerScene(W, H, { dx, dy })), prevXY);
            let tracked = 0;
            for (let i = 0; i < count; i++) {
                if (status[i]) {
                    tracked++;
                    // Observed worst error across these shifts is 0.008px, so
                    // 0.05 leaves headroom without going slack.
                    expect(currXY[i * 2] - prevXY[i * 2]).toBeCloseTo(dx, 1);
                    expect(currXY[i * 2 + 1] - prevXY[i * 2 + 1]).toBeCloseTo(dy, 1);
                    expect(Math.abs(currXY[i * 2] - prevXY[i * 2] - dx)).toBeLessThan(0.05);
                    expect(Math.abs(currXY[i * 2 + 1] - prevXY[i * 2 + 1] - dy)).toBeLessThan(0.05);
                }
            }
            expect(tracked).toBeGreaterThan(0);
        }
    });

    it("rejects every point in a textureless image instead of guessing", () => {
        // A uniform window has a singular spatial-gradient matrix (the aperture
        // problem), so the min-eigenvalue check must drop the point. Silently
        // returning some coordinate would be far worse than reporting failure.
        const flat = uniformImage(W, H, 128);
        const prevXY = Float32Array.from([30, 30, 50, 40, 60, 50]);
        const { count, status } = track(pyramidOf(flat), pyramidOf(flat), prevXY);
        expect(count).toBe(3);
        for (let i = 0; i < count; i++) expect(status[i]).toBe(0);
    });

    it("does not modify the input coordinates", () => {
        const img = cornerScene(W, H);
        const prevXY = trackablePoints(img);
        const before = Float32Array.from(prevXY);
        track(pyramidOf(img), pyramidOf(cornerScene(W, H, { dx: 2, dy: 1 })), prevXY);
        expect(Array.from(prevXY)).toEqual(Array.from(before));
    });
});
