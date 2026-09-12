/*
 *  detectors.bench.ts
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
import { noiseImage, keypointPool } from "../tests/properties/helpers";

/**
 * Throughput benchmarks for the corner detectors (issue #86, phase 2).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Both sides must do the same work
 *
 * Detector cost scales with how many corners are found, so a bench that let the
 * two implementations detect different counts would be comparing workloads, not
 * implementations. Verified before writing this file, on this exact input:
 *
 *   fast_corners  threshold 20 -> 26,016 vs 26,016
 *   fast_corners  threshold 60 -> 12,919 vs 12,919
 *   yape06                     -> 49,258 vs 49,258
 *   yape          radius 5     ->    149 vs 149
 *
 * Identical on both sides in every case, so the ratio is meaningful.
 *
 * fast_corners no longer belongs in that list (#202): jsfeatNext fixes an
 * off-by-one in jsfeat's per-row candidate buffer, so its corner set is now a
 * structural SUPERSET of jsfeat's rather than an equal one (proved in
 * `tests/divergences.test.ts`) -- 26,206 vs jsfeat's 26,016 at threshold 20 on
 * this same input. Equality can never hold again for this detector, so the two
 * `describe` blocks below check containment plus a bounded excess instead; see
 * `assertContainmentWithinTolerance`. yape06 and yape are untouched by #202 and
 * keep the strict `assertEqualCounts` check.
 *
 * ## Why noise rather than cornerScene
 *
 * cornerScene is built for the correctness tests — a handful of clean shapes —
 * and yields only ~27 corners at border 20, so the bench would mostly time call
 * overhead. Seeded noise is dense texture: tens of thousands of corners, i.e. a
 * detector actually doing detector work.
 *
 * ## A second, portable comparison
 *
 * Because all three detectors run over the same image in the same process,
 * their `hz` values are comparable *to each other* within a run. "yape06 costs
 * N x fast_corners" is as portable as the jsfeat ratio, and is the interesting
 * number when choosing a detector for a frame budget.
 */

const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;

// 640x480: the webcam frame size the WebAR examples run at.
const W = 640;
const H = 480;
const BORDER = 20;

/**
 * Keypoint pool size, shared by every case.
 *
 * Sized to the densest detector here (yape06, 49,258) plus ~20% headroom, not
 * to the image. `detect` writes `corners[i]` with no length check, so an
 * undersized pool throws rather than truncating — an overrun still fails
 * loudly, it just fails at 60k instead of 307k.
 *
 * Image-sized pools (W * H = 307,200 each) would allocate ~2.4M keypoint
 * objects across the four suites for a workload whose worst case needs 49,258.
 * That is GC pressure inside a performance measurement, for no coverage.
 */
const POOL = 60000;

/** The same deterministic noise on both sides. */
function pair() {
    const next = noiseImage(W, H, 4242);
    const orig = new jsfeat.matrix_t(W, H, OU8C1);
    orig.data.set(next.data);
    return { next, orig };
}

/**
 * `fast_corners.set_threshold` mutates the singleton, so it CANNOT be called
 * from a `describe` body: Vitest runs every `describe` callback during
 * collection, before any `bench` callback runs. The last assignment in the file
 * would win and every case would silently measure that one threshold.
 *
 * Nor can it go in `beforeAll` — Vitest's bench mode does not run the standard
 * test hooks at all, so the call would simply never happen and both cases would
 * run at the constructor default.
 *
 * `bench`'s own `setup` option is the one that works. It runs once per mode
 * (warmup, then run) rather than per iteration, so it costs nothing inside the
 * timed region.
 */
function threshold(thr: number) {
    return {
        setup: () => {
            jsfeatNext.fast_corners.set_threshold(thr);
            jsfeat.fast_corners.set_threshold(thr);
        },
    };
}

/**
 * `detect`'s return value is discarded inside every timed `bench` callback --
 * checking it there would put a branch inside the measured region. Instead,
 * call once outside the timed region, with a scratch pool, and assert both
 * implementations agree. If a future change makes them diverge, this throws
 * during collection rather than silently reporting a ratio for two different
 * workloads.
 */
function assertEqualCounts(name: string, next: number, orig: number) {
    if (next !== orig) {
        throw new Error(`${name}: jsfeatNext found ${next} corners, jsfeat found ${orig}`);
    }
}

/**
 * fast_corners' own equivalent of `assertEqualCounts` (#202).
 *
 * jsfeatNext's `fast_corners.detect` fixes an off-by-one in jsfeat's per-row
 * candidate buffer that dropped each row's last candidate and fed one
 * pool-recycled, never-written cell into non-maximum suppression. The fix is
 * a pure restoration: it can only add corners jsfeat was wrongly dropping, it
 * can never remove one jsfeat finds. `tests/divergences.test.ts` proves this
 * containment structurally (every jsfeat corner is present in jsfeatNext's
 * set, across seven scene seeds) and empirically (`n` always `>` `o`). This
 * guard re-asserts the same two properties here, where the workload is dense
 * seeded noise rather than the divergence test's synthetic scene:
 *
 *   1. `next` must never be LESS than `orig` -- that would mean the fix
 *      stopped restoring genuinely dropped corners, or started dropping ones
 *      jsfeat still finds. Either is a real regression, not #202.
 *   2. The excess must stay small. Measured on this exact input: +0.73% at
 *      threshold 20 (26,206 vs jsfeat's 26,016) and +2.78% at threshold 60
 *      (13,278 vs jsfeat's 12,919) -- the excess is one dropped-then-restored
 *      candidate per image row regardless of threshold, so it is a bigger
 *      share of a smaller corner count. `TOLERANCE` below is 5%, giving
 *      ~1.8x headroom above the larger of those two measurements -- enough
 *      to absorb this one known defect's variance across thresholds/images
 *      without also absorbing an unrelated workload divergence (a genuine
 *      regression that started finding, say, 15-20% more or fewer corners
 *      still trips this).
 *
 * Together these still catch what `assertEqualCounts` caught -- the bench
 * silently reporting a ratio for two different workloads -- just expressed as
 * a bounded range instead of a point, because #202 permanently moved the
 * right answer off that point.
 */
const FAST_CORNERS_EXCESS_TOLERANCE = 0.05; // 5%, see docstring above

function assertContainmentWithinTolerance(name: string, next: number, orig: number) {
    if (next < orig) {
        throw new Error(
            `${name}: jsfeatNext found FEWER corners (${next}) than jsfeat (${orig}) -- containment broken (#202)`
        );
    }
    const excess = (next - orig) / orig;
    if (excess > FAST_CORNERS_EXCESS_TOLERANCE) {
        throw new Error(
            `${name}: jsfeatNext found ${next} corners, jsfeat found ${orig} (+${(excess * 100).toFixed(2)}%), ` +
                `over the ${(FAST_CORNERS_EXCESS_TOLERANCE * 100).toFixed(0)}% tolerance for #202's known divergence ` +
                `-- workloads may no longer be comparable`
        );
    }
}

describe("fast_corners.detect — threshold 20 (~26k corners)", () => {
    const { next, orig } = pair();
    // Pools are allocated once, outside the timed region.
    const poolN = keypointPool(POOL);
    const poolO = keypointPool(POOL);

    jsfeatNext.fast_corners.set_threshold(20);
    jsfeat.fast_corners.set_threshold(20);
    assertContainmentWithinTolerance(
        "fast_corners thr 20",
        jsfeatNext.fast_corners.detect(next, keypointPool(POOL), BORDER),
        jsfeat.fast_corners.detect(orig, keypointPool(POOL), BORDER)
    );

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.fast_corners.detect(next, poolN, BORDER);
        },
        threshold(20)
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.fast_corners.detect(orig, poolO, BORDER);
        },
        threshold(20)
    );
});

describe("fast_corners.detect — threshold 60 (~13k corners)", () => {
    // Half the corners of the case above: separates the per-pixel scan cost
    // from the per-corner cost, which the single-threshold case conflates.
    const { next, orig } = pair();
    const poolN = keypointPool(POOL);
    const poolO = keypointPool(POOL);

    jsfeatNext.fast_corners.set_threshold(60);
    jsfeat.fast_corners.set_threshold(60);
    assertContainmentWithinTolerance(
        "fast_corners thr 60",
        jsfeatNext.fast_corners.detect(next, keypointPool(POOL), BORDER),
        jsfeat.fast_corners.detect(orig, keypointPool(POOL), BORDER)
    );

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.fast_corners.detect(next, poolN, BORDER);
        },
        threshold(60)
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.fast_corners.detect(orig, poolO, BORDER);
        },
        threshold(60)
    );
});

describe("yape06.detect (~49k corners)", () => {
    const { next, orig } = pair();
    const poolN = keypointPool(POOL);
    const poolO = keypointPool(POOL);

    assertEqualCounts(
        "yape06",
        jsfeatNext.yape06.detect(next, keypointPool(POOL), BORDER),
        jsfeat.yape06.detect(orig, keypointPool(POOL), BORDER)
    );

    bench("jsfeatNext", () => {
        jsfeatNext.yape06.detect(next, poolN, BORDER);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.yape06.detect(orig, poolO, BORDER);
    });
});

describe("yape.detect — radius 5 (~149 corners)", () => {
    // yape needs init() to size its internal buffers. Unlike set_threshold this
    // is safe in the describe body: both sides are initialised to the same
    // dimensions, so collection-order clobbering is a no-op here.
    const { next, orig } = pair();
    const poolN = keypointPool(POOL);
    const poolO = keypointPool(POOL);

    jsfeatNext.yape.init(W, H, 5, 1);
    jsfeat.yape.init(W, H, 5, 1);

    assertEqualCounts(
        "yape r5",
        jsfeatNext.yape.detect(next, keypointPool(POOL), 5),
        jsfeat.yape.detect(orig, keypointPool(POOL), 5)
    );

    bench("jsfeatNext", () => {
        jsfeatNext.yape.detect(next, poolN, 5);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.yape.detect(orig, poolO, 5);
    });
});
