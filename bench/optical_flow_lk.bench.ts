/*
 *  optical_flow_lk.bench.ts
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
import type { matrix_t } from "../src/matrix_t/matrix_t";
import { noiseImage, keypointPool } from "../tests/properties/helpers";

/**
 * Throughput benchmark for `optical_flow_lk.track` (issue #86, phase 2 continued).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Why FAST corners rather than a synthetic point grid
 *
 * `track`'s cost is dominated by the per-point pyramid search, not by whether
 * the motion is "real" — the tracker just needs a coherent window around each
 * seed point. Points are taken from `fast_corners.detect` on the same noise
 * image used elsewhere in this suite, at a threshold chosen to land in the
 * few-hundred range: enough points to amortise call overhead, not so many that
 * the case times point-selection cost instead of tracking cost.
 *
 * ## Seed points come from jsfeatNext ONLY, mirrored onto both sides
 *
 * This bench measures `optical_flow_lk.track`, not `fast_corners.detect` — the
 * seed points are an *input* to what is being measured, so both sides must
 * track the exact same points rather than each detecting its own. Since #202,
 * jsfeatNext's `fast_corners` fixes an off-by-one that jsfeat still has and so
 * finds a structurally different (superset) corner count than jsfeat at the
 * same threshold (see `tests/divergences.test.ts`) — if each side seeded from
 * its own detector here, `track` would run over two different workloads, and
 * the point-count guard that used to catch that would now fail on every run
 * rather than the rare one that matters.
 *
 * `seedPoints` is therefore called once, against jsfeatNext, and that single
 * `xy` array is fed to *both* `track` calls below. This mirrors the ORB parity
 * test's fix in commit 3a7f8ec (see `tests/parity/detectors.test.ts`, which
 * takes corners from jsfeatNext's detector once and mirrors them into
 * oracle-owned objects for jsfeat's side) — same idea, applied to a flat
 * `Float32Array` instead of `keypoint_t` objects. Making the workload equal by
 * construction is strictly better than a guard that merely detects when it
 * stops being equal.
 *
 * ## Parameters mirror the example demo
 *
 * `win_size=20`, `max_iterations=30`, `epsilon=0.01`, `min_eigen_threshold=0.001`,
 * 3 pyramid levels — the defaults in `examples/sample_oflow_lk.html`, not values
 * picked for this bench.
 *
 * ## No real second frame
 *
 * `curr_pyr` is built from the same image as `prev_pyr`. The tracker has no way
 * to tell a static scene from a genuinely stationary one, and the point of this
 * bench is throughput, not accuracy (that is `tests/properties/optical_flow_lk.test.ts`'s
 * job). A synthetic shift would change how many iterations converge, which
 * would make the two sides' `status` results — and the ratio — depend on an
 * incidental camera-motion choice instead of one deterministic workload.
 */

const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;

const W = 640;
const H = 480;
const LEVELS = 3;
const WIN_SIZE = 20;
const MAX_ITER = 30;
const EPSILON = 0.01;
const MIN_EIGEN = 0.001;
const FAST_THRESHOLD = 116; // ~966 corners from jsfeatNext on this noise image at border 20 (#202)
// Headroom over the ~966 corners the threshold above yields; not image-sized
// (307,200) -- an oversized pool just retains dead objects through the timed
// region (see bench/detectors.bench.ts's POOL constant for the same reasoning).
const POOL = 1200;

function pyramidPair() {
    const next = noiseImage(W, H, 4242);
    const orig = new jsfeat.matrix_t(W, H, OU8C1);
    orig.data.set(next.data);

    const pyrN = new jsfeatNext.pyramid_t(LEVELS);
    pyrN.allocate(W, H, OU8C1);
    pyrN.build(next, false);

    const pyrO = new jsfeat.pyramid_t(LEVELS);
    pyrO.allocate(W, H, OU8C1);
    pyrO.build(orig, false);

    return { next, orig, pyrN, pyrO };
}

type KeypointPool = ReturnType<typeof keypointPool>;

/** FAST corners on an image, converted to the flat xy arrays `track` expects. */
function seedPoints(img: matrix_t, detect: (img: matrix_t, corners: KeypointPool, border: number) => number) {
    const pool = keypointPool(POOL);
    const n = detect(img, pool, 20);
    const xy = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
        const kp = pool[i];
        xy[i * 2] = kp.x;
        xy[i * 2 + 1] = kp.y;
    }
    return { xy, n };
}

describe("optical_flow_lk.track (~966 points)", () => {
    const { next, pyrN, pyrO } = pyramidPair();

    // Seeded from jsfeatNext ONLY (see the "Seed points come from jsfeatNext
    // ONLY" docstring above) -- the same xy array is handed to both track()
    // calls below, so the two sides track identical points by construction
    // and no cross-implementation count guard is needed here at all.
    jsfeatNext.fast_corners.set_threshold(FAST_THRESHOLD);
    const seed = seedPoints(next, (img, corners, border) => jsfeatNext.fast_corners.detect(img, corners, border));

    // curr_xy is a pure output parameter (see optical_flow_lk.ts docstring):
    // seeding it has no effect, but track() still writes into it every call, so
    // each side gets its own scratch buffer even though they share the same
    // input xy/count.
    const currN = new Float32Array(seed.n * 2);
    const currO = new Float32Array(seed.n * 2);
    const statusN = new Uint8Array(seed.n);
    const statusO = new Uint8Array(seed.n);

    bench("jsfeatNext", () => {
        jsfeatNext.optical_flow_lk.track(
            pyrN,
            pyrN,
            seed.xy,
            currN,
            seed.n,
            WIN_SIZE,
            MAX_ITER,
            statusN,
            EPSILON,
            MIN_EIGEN
        );
    });

    bench("jsfeat (reference)", () => {
        jsfeat.optical_flow_lk.track(
            pyrO,
            pyrO,
            seed.xy,
            currO,
            seed.n,
            WIN_SIZE,
            MAX_ITER,
            statusO,
            EPSILON,
            MIN_EIGEN
        );
    });
});
