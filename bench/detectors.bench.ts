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

/** The same deterministic noise on both sides. */
function pair() {
    const next = noiseImage(W, H, 4242);
    const orig = new jsfeat.matrix_t(W, H, OU8C1);
    orig.data.set(next.data);
    return { next, orig };
}

describe("fast_corners.detect — threshold 20 (~26k corners)", () => {
    const { next, orig } = pair();
    // Pools are allocated once, outside the timed region, and sized to the
    // image: detect() writes corners[i] with no length check, so an undersized
    // pool throws rather than truncating.
    const poolN = keypointPool(W * H);
    const poolO = keypointPool(W * H);

    jsfeatNext.fast_corners.set_threshold(20);
    jsfeat.fast_corners.set_threshold(20);

    bench("jsfeatNext", () => {
        jsfeatNext.fast_corners.detect(next, poolN, BORDER);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.fast_corners.detect(orig, poolO, BORDER);
    });
});

describe("fast_corners.detect — threshold 60 (~13k corners)", () => {
    // Half the corners of the case above: separates the per-pixel scan cost
    // from the per-corner cost, which the single-threshold case conflates.
    const { next, orig } = pair();
    const poolN = keypointPool(W * H);
    const poolO = keypointPool(W * H);

    jsfeatNext.fast_corners.set_threshold(60);
    jsfeat.fast_corners.set_threshold(60);

    bench("jsfeatNext", () => {
        jsfeatNext.fast_corners.detect(next, poolN, BORDER);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.fast_corners.detect(orig, poolO, BORDER);
    });
});

describe("yape06.detect (~49k corners)", () => {
    const { next, orig } = pair();
    const poolN = keypointPool(W * H);
    const poolO = keypointPool(W * H);

    bench("jsfeatNext", () => {
        jsfeatNext.yape06.detect(next, poolN, BORDER);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.yape06.detect(orig, poolO, BORDER);
    });
});

describe("yape.detect — radius 5 (~149 corners)", () => {
    // yape needs init() to size its internal buffers; done once here, outside
    // the timed region, mirroring examples/sample_yape.html (radius 5, 1 level).
    const { next, orig } = pair();
    const poolN = keypointPool(W * H);
    const poolO = keypointPool(W * H);

    jsfeatNext.yape.init(W, H, 5, 1);
    jsfeat.yape.init(W, H, 5, 1);

    bench("jsfeatNext", () => {
        jsfeatNext.yape.detect(next, poolN, 5);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.yape.detect(orig, poolO, 5);
    });
});
