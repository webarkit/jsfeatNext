/*
 *  pose_estimator.test.ts
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

const F64C1 = jsfeatNext.F64_t | jsfeatNext.C1_t;

/**
 * Rotation matrix (row-major, length 9) from an axis-angle via Rodrigues.
 * Used to generate arbitrary ground-truth rotations to round-trip through the
 * estimator — not just the axis-aligned ones a hand-written R would give.
 */
function rodrigues(ax: number, ay: number, az: number, angle: number): number[] {
    const n = Math.hypot(ax, ay, az) || 1;
    const x = ax / n,
        y = ay / n,
        z = az / n;
    const c = Math.cos(angle),
        s = Math.sin(angle),
        C = 1 - c;
    return [
        c + x * x * C,
        x * y * C - z * s,
        x * z * C + y * s,
        y * x * C + z * s,
        c + y * y * C,
        y * z * C - x * s,
        z * x * C - y * s,
        z * y * C + x * s,
        c + z * z * C,
    ];
}

/**
 * Synthesize the homography a camera with intrinsics `K` and pose `(R, t)`
 * produces for a z = 0 model plane: `H = K · [r1 r2 t]`, where r1, r2 are the
 * first two columns of R. This is the exact inverse of what `estimate` does,
 * so recovering `(R, t)` from `H` is a genuine round trip.
 */
function synthH(K: InstanceType<typeof jsfeatNext.matrix_t>, R: number[], t: number[]) {
    const r1 = [R[0], R[3], R[6]];
    const r2 = [R[1], R[4], R[7]];
    // columns [r1 r2 t] as a row-major 3x3
    const M = [r1[0], r2[0], t[0], r1[1], r2[1], t[1], r1[2], r2[2], t[2]];
    const k = K.data;
    const H = new jsfeatNext.matrix_t(3, 3, F64C1);
    const h = H.data;
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            h[r * 3 + c] = k[r * 3] * M[c] + k[r * 3 + 1] * M[3 + c] + k[r * 3 + 2] * M[6 + c];
        }
    }
    return { H, r1, r2 };
}

/** dot / column extraction helpers over a row-major 3x3. */
function col(R: Float64Array | number[], j: number) {
    return [R[j], R[3 + j], R[6 + j]];
}
function dot(a: number[], b: number[]) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function det3(R: Float64Array | number[]) {
    return R[0] * (R[4] * R[8] - R[5] * R[7]) - R[1] * (R[3] * R[8] - R[5] * R[6]) + R[2] * (R[3] * R[7] - R[4] * R[6]);
}

describe("pose_estimator API shape", () => {
    it("intrinsics is a static factory on the namespace class", () => {
        expect(typeof jsfeatNext.pose_estimator.intrinsics).toBe("function");
        const K = jsfeatNext.pose_estimator.intrinsics(640, 480);
        expect(K.data[2]).toBe(320); // cx = width / 2
        expect(K.data[5]).toBe(240); // cy = height / 2
        expect(K.data[0]).toBeGreaterThan(0); // fx > 0
        expect(K.data[0]).toBe(K.data[4]); // fx === fy (square pixels)
    });

    it("pose_estimator is a constructor; pose_t is a constructor with a valid empty state", () => {
        const K = jsfeatNext.pose_estimator.intrinsics(640, 480);
        const est = new jsfeatNext.pose_estimator(K);
        expect(typeof est.estimate).toBe("function");
        const p = new jsfeatNext.pose_t();
        expect(p.good).toBe(false);
        expect(p.R.cols).toBe(3);
        expect(p.R.rows).toBe(3);
        expect(p.t.length).toBe(3);
    });
});

describe("pose_estimator.estimate round-trip", () => {
    const K = jsfeatNext.pose_estimator.intrinsics(640, 480);
    const est = new jsfeatNext.pose_estimator(K);

    // A spread of axes and angles, all with the target in front (tz > 0).
    const cases: Array<{ axis: [number, number, number]; angle: number; t: [number, number, number] }> = [
        { axis: [0, 1, 0], angle: 0.3, t: [0.1, -0.05, 2.0] },
        { axis: [1, 0, 0], angle: -0.25, t: [-0.2, 0.15, 3.0] },
        { axis: [0, 0, 1], angle: 0.5, t: [0.0, 0.0, 1.5] },
        { axis: [1, 1, 1], angle: 0.4, t: [0.3, -0.2, 2.5] },
        { axis: [2, -1, 0.5], angle: -0.6, t: [-0.1, 0.4, 4.0] },
    ];

    for (const { axis, angle, t } of cases) {
        it(`recovers R and t for axis [${axis}] angle ${angle}`, () => {
            const R = rodrigues(axis[0], axis[1], axis[2], angle);
            const { H, r1, r2 } = synthH(K, R, t);
            const p = new jsfeatNext.pose_t();
            est.estimate(H, p);

            expect(p.good).toBe(true);
            const Rr = p.R.data;

            // Rotation columns 1 and 2 recover the ground truth.
            const c1 = col(Rr, 0),
                c2 = col(Rr, 1);
            for (let i = 0; i < 3; i++) {
                expect(c1[i]).toBeCloseTo(r1[i], 4);
                expect(c2[i]).toBeCloseTo(r2[i], 4);
            }
            // Translation recovers the ground truth.
            for (let i = 0; i < 3; i++) expect(p.t[i]).toBeCloseTo(t[i], 3);

            // R is a proper rotation: orthonormal columns, right-handed.
            expect(dot(c1, c1)).toBeCloseTo(1, 6);
            expect(dot(c2, c2)).toBeCloseTo(1, 6);
            expect(dot(c1, c2)).toBeCloseTo(0, 6);
            expect(det3(Rr)).toBeCloseTo(1, 5);
        });
    }
});

describe("pose_estimator front-of-camera and degeneracy", () => {
    const K = jsfeatNext.pose_estimator.intrinsics(640, 480);
    const est = new jsfeatNext.pose_estimator(K);

    it("valid case: a target in front yields good=true with tz > 0", () => {
        const R = rodrigues(0, 1, 0, 0.2);
        const { H } = synthH(K, R, [0.1, 0.0, 2.0]);
        const p = new jsfeatNext.pose_t();
        est.estimate(H, p);
        expect(p.good).toBe(true);
        expect(p.t[2]).toBeGreaterThan(0);
    });

    it("sign disambiguation: a pose synthesized behind the camera is flipped to the front", () => {
        // Same rotation, but tz < 0. The estimator must flip the sign so the
        // recovered translation still puts the target in front (tz > 0) --
        // exercising the s = -1 branch.
        const R = rodrigues(0, 1, 0, 0.2);
        const { H } = synthH(K, R, [0.1, 0.0, -2.0]);
        const p = new jsfeatNext.pose_t();
        est.estimate(H, p);
        expect(p.good).toBe(true);
        expect(p.t[2]).toBeGreaterThan(0);
    });

    it("invalid case: a degenerate homography yields good=false", () => {
        const H = new jsfeatNext.matrix_t(3, 3, F64C1); // all zeros -> zero columns
        const p = new jsfeatNext.pose_t();
        p.good = true; // ensure estimate actively sets it false
        est.estimate(H, p);
        expect(p.good).toBe(false);
    });

    it("estimate allocates a fresh pose_t when none is passed", () => {
        const R = rodrigues(1, 0, 0, 0.1);
        const { H } = synthH(K, R, [0, 0, 2.0]);
        const p = est.estimate(H);
        expect(p).toBeInstanceOf(jsfeatNext.pose_t);
        expect(p.good).toBe(true);
    });
});
