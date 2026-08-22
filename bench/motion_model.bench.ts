/*
 *  motion_model.bench.ts
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

import { bench, describe } from "vitest";
import jsfeatNext from "../src/jsfeatNext";
import jsfeat from "../tests/vendor/oracle.cjs";
import { point_t } from "../src/point_t/point_t";
import { rng } from "../tests/properties/helpers";

/**
 * Throughput benchmarks for the motion-model kernels themselves (issue #86).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Why this file exists when motion_estimator.bench.ts already covers RANSAC
 *
 * `bench/motion_estimator.bench.ts` measures `ransac`/`lmeds` end to end, so
 * the kernel's cost is mixed in with the estimator's own loop, subset drawing
 * and inlier bookkeeping. This file calls the kernel methods directly, which
 * is what makes a kernel-level regression attributable rather than merely
 * visible.
 *
 * ## The counts are the two RANSAC actually uses
 *
 * Every RANSAC iteration calls `run` on a MINIMAL sample (4 points for
 * homography, 3 for affine) and then `error` on ALL correspondences, and the
 * winning model is finally refit on the full inlier set. So both the minimal
 * and the full-count cases below are real workloads, not round numbers:
 *
 *   - `run` at 4 / 3 points   — the per-iteration hypothesis fit
 *   - `run` at 40 points      — the final refit
 *   - `error` at 40 points    — the per-iteration scoring pass
 *
 * ## `check_subset`: a known asymmetry, benched deliberately
 *
 * jsfeatNext's `homography2d.check_subset` constructs a `matmath` instance on
 * every call (`motion_model.ts:541`); original jsfeat's does not. RANSAC calls
 * it once per iteration, so this is a per-frame allocation jsfeatNext adds and
 * jsfeat does not have. `affine2d.check_subset` is a bare `return true` on
 * both sides and is not benched — there would be nothing to compare.
 *
 * The same `new matmath()` pattern also appears in `affine2d.run` (line 212)
 * and `homography2d.run` (line 352), so the `run` cases below carry it too.
 * This is the same class of issue as #159 (`matrix_t` re-allocating a
 * `data_type` table per construction) — measurement only here, per #86.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;

const FULL = 40;
/** Ground-truth homography used to synthesize correspondences. */
const GT = [1.05, 0.02, 8.0, -0.03, 0.98, -5.0, 0.0002, -0.0001, 1.0];

function point(x: number, y: number) {
    const p = new point_t();
    p.x = x;
    p.y = y;
    p.level = 0;
    p.score = 0;
    p.angle = -1;
    return p;
}

/**
 * Clean correspondences from a fixed ground-truth homography — no outliers,
 * unlike `motion_estimator.bench.ts`'s fixture. The kernels here are called
 * directly rather than through RANSAC, so there is no outlier rejection in
 * play; feeding them gross outliers would just make `run` fit a meaningless
 * model without changing what it costs.
 */
function correspondences(seed: number) {
    const rand = rng(seed);
    const from: ReturnType<typeof point>[] = [];
    const to: ReturnType<typeof point>[] = [];
    for (let i = 0; i < FULL; i++) {
        const x = 10 + rand() * 300;
        const y = 10 + rand() * 220;
        const wsc = 1.0 / (GT[6] * x + GT[7] * y + GT[8]);
        from.push(point(x, y));
        to.push(point((GT[0] * x + GT[1] * y + GT[2]) * wsc, (GT[3] * x + GT[4] * y + GT[5]) * wsc));
    }
    return { from, to };
}

const { from, to } = correspondences(4242);

/** Both sides get their own 3x3 output, never shared. */
function models() {
    return {
        model: new jsfeatNext.matrix_t(3, 3, F32C1),
        modelO: new jsfeat.matrix_t(3, 3, OF32C1),
    };
}

// -------------------------------------------------------- homography2d

describe("homography2d.run — 4 points (RANSAC minimal sample)", () => {
    const { model, modelO } = models();
    const kernelO = new jsfeat.motion_model.homography2d();

    bench("jsfeatNext", () => {
        jsfeatNext.homography2d.run(from, to, model, 4);
    });

    bench("jsfeat (reference)", () => {
        kernelO.run(from, to, modelO, 4);
    });
});

describe("homography2d.run — 40 points (final refit)", () => {
    const { model, modelO } = models();
    const kernelO = new jsfeat.motion_model.homography2d();

    bench("jsfeatNext", () => {
        jsfeatNext.homography2d.run(from, to, model, FULL);
    });

    bench("jsfeat (reference)", () => {
        kernelO.run(from, to, modelO, FULL);
    });
});

describe("homography2d.error — 40 points (per-iteration scoring)", () => {
    const { model, modelO } = models();
    const kernelO = new jsfeat.motion_model.homography2d();
    // Fit once, outside the timed region: error() reads the model, never writes it.
    jsfeatNext.homography2d.run(from, to, model, FULL);
    kernelO.run(from, to, modelO, FULL);
    const err = new Float32Array(FULL);
    const errO = new Float32Array(FULL);

    bench("jsfeatNext", () => {
        jsfeatNext.homography2d.error(from, to, model, err, FULL);
    });

    bench("jsfeat (reference)", () => {
        kernelO.error(from, to, modelO, errO, FULL);
    });
});

describe("homography2d.check_subset — 4 points (allocates matmath in jsfeatNext)", () => {
    // See the module docstring: jsfeatNext constructs a matmath per call here,
    // jsfeat does not. RANSAC calls this once per iteration.
    const kernelO = new jsfeat.motion_model.homography2d();

    bench("jsfeatNext", () => {
        jsfeatNext.homography2d.check_subset(from, to, 4);
    });

    bench("jsfeat (reference)", () => {
        kernelO.check_subset(from, to, 4);
    });
});

// ------------------------------------------------------------ affine2d

describe("affine2d.run — 3 points (RANSAC minimal sample)", () => {
    const { model, modelO } = models();
    const kernelO = new jsfeat.motion_model.affine2d();

    bench("jsfeatNext", () => {
        jsfeatNext.affine2d.run(from, to, model, 3);
    });

    bench("jsfeat (reference)", () => {
        kernelO.run(from, to, modelO, 3);
    });
});

describe("affine2d.run — 40 points (final refit)", () => {
    const { model, modelO } = models();
    const kernelO = new jsfeat.motion_model.affine2d();

    bench("jsfeatNext", () => {
        jsfeatNext.affine2d.run(from, to, model, FULL);
    });

    bench("jsfeat (reference)", () => {
        kernelO.run(from, to, modelO, FULL);
    });
});

describe("affine2d.error — 40 points (per-iteration scoring)", () => {
    const { model, modelO } = models();
    const kernelO = new jsfeat.motion_model.affine2d();
    jsfeatNext.affine2d.run(from, to, model, FULL);
    kernelO.run(from, to, modelO, FULL);
    const err = new Float32Array(FULL);
    const errO = new Float32Array(FULL);

    bench("jsfeatNext", () => {
        jsfeatNext.affine2d.error(from, to, model, err, FULL);
    });

    bench("jsfeat (reference)", () => {
        kernelO.error(from, to, modelO, errO, FULL);
    });
});
