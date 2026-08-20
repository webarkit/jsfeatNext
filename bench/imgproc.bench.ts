/*
 *  imgproc.bench.ts
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
 * Throughput benchmarks for the hot image-processing paths (issue #86, phase 1).
 *
 * ## Read the RATIO, not the absolute numbers
 *
 * Every case below is benched twice in the same run: once through jsfeatNext and
 * once through the vendored original jsfeat. The number worth reading is the
 * ratio between the two, NOT the `hz` of either.
 *
 * Absolute throughput depends on the machine, the CPU's thermal state, what else
 * is running, and the Node version, none of which a shared CI runner pins down.
 * Committing such a number as a baseline and diffing against it reports noise as
 * regressions. The ratio, measured for both
 * implementations in the same process at the same moment, cancels almost all of
 * that: a slow runner halves both sides and leaves the ratio intact.
 *
 * So: "jsfeatNext runs gaussian_blur U8 at 0.98x jsfeat" is a portable,
 * comparable statement. "1240 ops/s" is not.
 *
 * ## What a change here means
 *
 * A ratio drifting DOWN across commits means jsfeatNext lost ground against the
 * same reference workload — that is the regression signal. A ratio moving up
 * means an optimization landed. Either way the comparison is against jsfeat on
 * the same box, never against a number recorded on a different machine.
 *
 * Deliberately NOT stored: no JSON results are committed. See bench/README.md.
 */

const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;

// 640x480 is the webcam frame size the WebAR examples actually run at, so the
// numbers relate to a real per-frame budget rather than a toy size.
const W = 640;
const H = 480;

/** The same deterministic noise on both sides, as U8. */
function u8Pair() {
    const next = noiseImage(W, H, 4242);
    const orig = new jsfeat.matrix_t(W, H, OU8C1);
    orig.data.set(next.data);
    return { next, orig };
}

/** The same deterministic data on both sides, as F32 (the float code path). */
function f32Pair() {
    const src = noiseImage(W, H, 4242);
    const next = new jsfeatNext.matrix_t(W, H, F32C1);
    const orig = new jsfeat.matrix_t(W, H, OF32C1);
    for (let i = 0; i < W * H; i++) {
        next.data[i] = src.data[i];
        orig.data[i] = src.data[i];
    }
    return { next, orig };
}

describe("imgproc.gaussian_blur — U8 fast path", () => {
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);

    bench("jsfeatNext", () => {
        jsfeatNext.imgproc.gaussian_blur(next, dstN, 5, 0);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.imgproc.gaussian_blur(orig, dstO, 5, 0);
    });
});

describe("imgproc.gaussian_blur — F32 path (_convol)", () => {
    // The float branch: every gaussian_blur call in the test suite passes U8, so
    // this path carries no per-frame usage today but is the one a caller working
    // in float hits. Benched separately because its cost profile differs.
    const { next, orig } = f32Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, F32C1);
    const dstO = new jsfeat.matrix_t(W, H, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.imgproc.gaussian_blur(next, dstN, 5, 0);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.imgproc.gaussian_blur(orig, dstO, 5, 0);
    });
});

describe("imgproc.resample — U8 fixed-point fast path", () => {
    // Halving keeps the area ratio (4) well under the 0x100 limit that selects
    // the fixed-point path, so this measures _resample_u8.
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W >> 1, H >> 1, U8C1);
    const dstO = new jsfeat.matrix_t(W >> 1, H >> 1, OU8C1);

    bench("jsfeatNext", () => {
        jsfeatNext.imgproc.resample(next, dstN, W >> 1, H >> 1);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.imgproc.resample(orig, dstO, W >> 1, H >> 1);
    });
});

describe("imgproc.resample — float path", () => {
    // Non-U8 matrices bypass the fixed-point path entirely (_resample).
    const { next, orig } = f32Pair();
    const dstN = new jsfeatNext.matrix_t(W >> 1, H >> 1, F32C1);
    const dstO = new jsfeat.matrix_t(W >> 1, H >> 1, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.imgproc.resample(next, dstN, W >> 1, H >> 1);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.imgproc.resample(orig, dstO, W >> 1, H >> 1);
    });
});

describe("orb.describe — 256-bit descriptors per keypoint", () => {
    // The per-frame hot spot in the WebAR pipeline (the pinball sample reports
    // ~5ms for this stage). Structurally unlike the filters above: cost is
    // per-keypoint and memory access is sparse, through a rotated patch warp.
    //
    // Keypoints are detected ONCE, outside the benched function, so the
    // measurement is describe() alone and not detect()+describe(). Border 20
    // keeps every sampling pattern inside the image (#110), so no descriptor is
    // contaminated by the fill value and both sides do identical work.
    //
    // Textured noise rather than cornerScene: the latter is built for the
    // correctness tests (a handful of clean shapes) and yields only ~27
    // keypoints at this border, so the bench would mostly time call overhead.
    //
    // The FAST threshold is what caps the count, NOT a small pool: detect()
    // writes `corners[corners_cnt]` with no length check, so an undersized pool
    // throws rather than truncating. At threshold 120 on this seed the image
    // yields ~366 keypoints — the scale a real AR frame describes (the pinball
    // sample caps at 500) — and POOL leaves ample headroom.
    //
    // Sizing the pool to the image instead (keypointPool(W * H)) would allocate
    // 307k objects, ~25 MB, live for the whole run: GC pressure fed into every
    // later bench, i.e. noise in the very measurement this file exists to keep
    // clean.
    const POOL = 1024;
    const src = noiseImage(W, H, 4242);
    const orig = new jsfeat.matrix_t(W, H, OU8C1);
    orig.data.set(src.data);

    jsfeatNext.fast_corners.set_threshold(120);
    const cornersN = keypointPool(POOL);
    const count = jsfeatNext.fast_corners.detect(src, cornersN, 20);
    if (count > POOL) throw new Error(`bench pool too small: ${count} keypoints detected`);
    for (let i = 0; i < count; i++) cornersN[i].angle = (i % 360) * (Math.PI / 180);

    // Mirror the same keypoints into oracle-owned objects.
    const cornersO: unknown[] = [];
    for (let i = 0; i < count; i++) {
        const k = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
        k.x = cornersN[i].x;
        k.y = cornersN[i].y;
        k.angle = cornersN[i].angle;
        cornersO.push(k);
    }

    const descN = new jsfeatNext.matrix_t(32, count, U8C1);
    const descO = new jsfeat.matrix_t(32, count, OU8C1);

    bench(`jsfeatNext (${count} keypoints)`, () => {
        jsfeatNext.orb.describe(src, cornersN, count, descN);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.orb.describe(orig, cornersO, count, descO);
    });
});
