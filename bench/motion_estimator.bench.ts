/*
 *  motion_estimator.bench.ts
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

import { bench, describe, afterAll } from "vitest";
import jsfeatNext from "../src/jsfeatNext";
import jsfeat from "../tests/vendor/oracle.cjs";
import { point_t } from "../src/point_t/point_t";
import { rng } from "../tests/properties/helpers";

/**
 * Throughput benchmarks for `motion_estimator.ransac` / `.lmeds` with the
 * `homography2d` kernel (issue #86, phase 2 continued).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Scope: ransac/lmeds only, not get_subset/find_inliers
 *
 * `motion_estimator` has four public methods. `get_subset` and `find_inliers`
 * are internal helpers `ransac`/`lmeds` call on every iteration; benching them
 * standalone would time an artificial workload nobody calls directly.
 * `ransac`/`lmeds` are the real per-frame hot path (`examples/sample_orb.html`
 * calls `motion_estimator.ransac` once per frame to fit the homography from
 * ORB matches), so those are what this file measures.
 *
 * `homography2d` rather than `affine2d`: it is the 8-DOF kernel `linalg`'s
 * finding (#158, #159) traces back to via `motion_model.ts`'s `mLtL`, so
 * benching it here keeps the two findings comparable.
 *
 * ## Both sides must draw the same "random" subsets
 *
 * RANSAC/LMEDS pick a random minimal-sample subset every iteration via
 * `Math.random`, and how many iterations converge depends on which points
 * that draws. If the two sides drew different subsets, the ratio would
 * compare different amounts of work, not the two implementations — the same
 * failure mode `bench/detectors.bench.ts`'s `assertEqualCounts` guards
 * against, just at the RNG level instead of the input level.
 *
 * `tests/parity/motion_estimator.test.ts` solves this by re-seeding
 * `Math.random` with the same deterministic generator on both sides
 * immediately before each of its two calls (one per implementation). This
 * file reuses the same seeds via `bench()`'s `setup` option instead, which
 * only runs once per mode (warmup, then run) — NOT before every timed
 * iteration, unlike the parity test's per-call reset.
 *
 * That is still enough to keep both sides doing the same work, by induction:
 * `run` mode's first timed call starts from an identical freshly-seeded
 * generator on both sides. Given identical inputs and an identical RNG
 * state, a faithful port produces identical output (the parity test already
 * proves this to 5 decimal places) and therefore consumes an identical
 * number of `Math.random()` draws — so the *next* call also starts from
 * matching state on both sides, and so on for the whole run. The two streams
 * never need to be re-synchronized because they never have a chance to drift
 * apart in the first place. (A plain reassignment is used rather than
 * `vi.spyOn` so the once-per-mode reset stays cheap and outside the timed
 * region either way.) The original `Math.random` is restored in `afterAll`
 * so a stubbed RNG never leaks into another bench file sharing this worker.
 *
 * ## Input: the parity suite's own fixture, not a new one
 *
 * 40 correspondences, 6 gross outliers, synthesized from a fixed ground-truth
 * homography — `tests/parity/motion_estimator.test.ts`'s exact setup, already
 * proven to converge identically on both sides. Reusing it here means this
 * bench's workload is provably realistic rather than a shape invented for
 * throughput measurement.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;
const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;

const N = 40;
const OUTLIERS = 6;
/** Ground-truth homography used to synthesize correspondences. */
const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];

/**
 * `motion_model.ts` only ever reads `.x`/`.y` off these points (verified —
 * `level`/`score`/`angle` are dead weight for this kernel), but `point_t`
 * requires them, and its constructor leaves fields unset by design (points
 * are meant to be written directly in hot detector loops, not constructed
 * per-point) — so they're filled here with the same "not computed" values
 * `fast_corners`/`orb` use elsewhere in this repo.
 */
function point(x: number, y: number) {
    const p = new point_t();
    p.x = x;
    p.y = y;
    p.level = 0;
    p.score = 0;
    p.angle = -1;
    return p;
}

function makeCorrespondences(seed: number) {
    const rand = rng(seed);
    const from: ReturnType<typeof point>[] = [];
    const to: ReturnType<typeof point>[] = [];
    for (let i = 0; i < N; i++) {
        const x = 10 + rand() * 300;
        const y = 10 + rand() * 220;
        const wsc = 1.0 / (GT[6] * x + GT[7] * y + GT[8]);
        let X = (GT[0] * x + GT[1] * y + GT[2]) * wsc;
        let Y = (GT[3] * x + GT[4] * y + GT[5]) * wsc;
        if (i < OUTLIERS) {
            X += 40 + rand() * 60;
            Y -= 40 + rand() * 60;
        }
        from.push(point(x, y));
        to.push(point(X, Y));
    }
    return { from, to };
}

const originalRandom = Math.random;
afterAll(() => {
    Math.random = originalRandom;
});

describe("motion_estimator.ransac (homography2d, 40 points, 6 outliers)", () => {
    const { from, to } = makeCorrespondences(1234);

    const params = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);
    const model = new jsfeatNext.matrix_t(3, 3, F32C1);
    const mask = new jsfeatNext.matrix_t(N, 1, U8C1);

    const paramsO = new jsfeat.ransac_params_t(4, 3.0, 0.5, 0.99);
    const kernelO = new jsfeat.motion_model.homography2d();
    const modelO = new jsfeat.matrix_t(3, 3, OF32C1);
    const maskO = new jsfeat.matrix_t(N, 1, OU8C1);

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.motion_estimator.ransac(params, jsfeatNext.homography2d, from, to, N, model, mask, 1000);
        },
        {
            setup: () => {
                Math.random = rng(2024);
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.motion_estimator.ransac(paramsO, kernelO, from, to, N, modelO, maskO, 1000);
        },
        {
            setup: () => {
                Math.random = rng(2024);
            },
        }
    );
});

describe("motion_estimator.lmeds (homography2d, 40 points, 6 outliers)", () => {
    const { from, to } = makeCorrespondences(1234);

    const params = new jsfeatNext.ransac_params_t(4, 0, 0.45, 0.99);
    const model = new jsfeatNext.matrix_t(3, 3, F32C1);
    const mask = new jsfeatNext.matrix_t(N, 1, U8C1);

    const paramsO = new jsfeat.ransac_params_t(4, 0, 0.45, 0.99);
    const kernelO = new jsfeat.motion_model.homography2d();
    const modelO = new jsfeat.matrix_t(3, 3, OF32C1);
    const maskO = new jsfeat.matrix_t(N, 1, OU8C1);

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.motion_estimator.lmeds(params, jsfeatNext.homography2d, from, to, N, model, mask, 1000);
        },
        {
            setup: () => {
                Math.random = rng(777);
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.motion_estimator.lmeds(paramsO, kernelO, from, to, N, modelO, maskO, 1000);
        },
        {
            setup: () => {
                Math.random = rng(777);
            },
        }
    );
});
