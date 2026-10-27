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

import { describe, test } from "vitest";
import jsfeatNext from "../src/jsfeatNext";
import jsfeat from "../tests/vendor/oracle.cjs";
import { noiseImage, keypointPool, rng } from "../tests/properties/helpers";

/**
 * Throughput benchmarks for the image-processing paths (issue #86, phase 1;
 * the rest of imgproc and pyramid_t.build, issue #168).
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

/** Deterministic RGBA noise, shared by both sides (they only read it). */
function rgbaNoise(seed: number): Uint8Array {
    const next = rng(seed);
    const buf = new Uint8Array(W * H * 4);
    for (let i = 0; i < buf.length; i++) buf[i] = (i & 3) === 3 ? 255 : (next() * 256) | 0;
    return buf;
}

/**
 * Runs both sides once, outside the timed region, and throws unless their
 * outputs differ in exactly `expectedDiff` elements (0 for a bit-exact port).
 * A non-zero count is only for a documented divergence, and pins its size, so a
 * bench never silently compares two different workloads (#168).
 */
function assertSameWork(
    name: string,
    runN: () => void,
    runO: () => void,
    outN: ArrayLike<number>,
    outO: ArrayLike<number>,
    expectedDiff = 0
): void {
    runN();
    runO();
    if (outN.length !== outO.length) throw new Error(`${name}: output lengths differ`);
    let diff = 0;
    for (let i = 0; i < outN.length; i++) if (outN[i] !== outO[i]) diff++;
    if (diff !== expectedDiff) throw new Error(`${name}: ${diff} output elements differ, expected ${expectedDiff}`);
}

describe("imgproc.gaussian_blur — U8 fast path", () => {
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.gaussian_blur(next, dstN, 5, 0);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.gaussian_blur(orig, dstO, 5, 0);
        }).run();
    });
});

describe("imgproc.gaussian_blur — F32 path (_convol)", () => {
    // The float branch: every gaussian_blur call in the test suite passes U8, so
    // this path carries no per-frame usage today but is the one a caller working
    // in float hits. Benched separately because its cost profile differs.
    const { next, orig } = f32Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, F32C1);
    const dstO = new jsfeat.matrix_t(W, H, OF32C1);

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.gaussian_blur(next, dstN, 5, 0);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.gaussian_blur(orig, dstO, 5, 0);
        }).run();
    });
});

describe("imgproc.resample — U8 fixed-point fast path", () => {
    // Halving keeps the area ratio (4) well under the 0x100 limit that selects
    // the fixed-point path, so this measures _resample_u8.
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W >> 1, H >> 1, U8C1);
    const dstO = new jsfeat.matrix_t(W >> 1, H >> 1, OU8C1);

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.resample(next, dstN, W >> 1, H >> 1);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.resample(orig, dstO, W >> 1, H >> 1);
        }).run();
    });
});

describe("imgproc.resample — float path", () => {
    // Non-U8 matrices bypass the fixed-point path entirely (_resample).
    const { next, orig } = f32Pair();
    const dstN = new jsfeatNext.matrix_t(W >> 1, H >> 1, F32C1);
    const dstO = new jsfeat.matrix_t(W >> 1, H >> 1, OF32C1);

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.resample(next, dstN, W >> 1, H >> 1);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.resample(orig, dstO, W >> 1, H >> 1);
        }).run();
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

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench(`jsfeatNext (${count} keypoints)`, () => {
            jsfeatNext.orb.describe(src, cornersN, count, descN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.orb.describe(orig, cornersO, count, descO);
        }).run();
    });
});

// ---------------------------------------------------------------------------
// #168: the rest of imgproc, and pyramid_t.build. Roughly in order of how much
// each matters to the per-frame WebAR path. Every case first checks, outside
// the timed region, that both sides produce the same output (assertSameWork),
// so the ratio compares implementations and not workloads.
// ---------------------------------------------------------------------------

describe("imgproc.grayscale — RGBA to U8", () => {
    // The first step of every frame.
    const rgba = rgbaNoise(4242);
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);
    assertSameWork(
        "grayscale",
        () => jsfeatNext.imgproc.grayscale(rgba, W, H, dstN),
        () => jsfeat.imgproc.grayscale(rgba, W, H, dstO),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.grayscale(rgba, W, H, dstN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.grayscale(rgba, W, H, dstO);
        }).run();
    });
});

describe("imgproc.pyrdown — U8, 640x480 to 320x240", () => {
    // One pyramid level; pyramid_t.build below is this plus the level loop.
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W >> 1, H >> 1, U8C1);
    const dstO = new jsfeat.matrix_t(W >> 1, H >> 1, OU8C1);
    assertSameWork(
        "pyrdown",
        () => jsfeatNext.imgproc.pyrdown(next, dstN),
        () => jsfeat.imgproc.pyrdown(orig, dstO),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.pyrdown(next, dstN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.pyrdown(orig, dstO);
        }).run();
    });
});

describe("pyramid_t.build — 4 levels, U8", () => {
    // What optical_flow_lk and the ORB samples build every frame. Level 0 is
    // copied from the input (skip_first_level = false), as the LK sample does.
    const LEVELS = 4;
    const { next, orig } = u8Pair();
    const pyrN = new jsfeatNext.pyramid_t(LEVELS);
    pyrN.allocate(W, H, U8C1);
    const pyrO = new jsfeat.pyramid_t(LEVELS);
    pyrO.allocate(W, H, OU8C1);
    for (let l = 0; l < LEVELS; l++) {
        assertSameWork(
            `pyramid_t.build level ${l}`,
            () => pyrN.build(next, false),
            () => pyrO.build(orig, false),
            pyrN.data[l].data,
            pyrO.data[l].data
        );
    }

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            pyrN.build(next, false);
        }).run();

        await bench("jsfeat (reference)", () => {
            pyrO.build(orig, false);
        }).run();
    });
});

describe("imgproc.compute_integral_image — sum only", () => {
    // The form TEBLID (#135) and FREAK (#80) will call: a baseline taken BEFORE
    // they become its consumers. Sizes follow the (w+1)x(h+1) layout.
    const { next, orig } = u8Pair();
    const len = (W + 1) * (H + 1);
    const sumN = new Int32Array(len);
    const sumO = new Int32Array(len);
    assertSameWork(
        "compute_integral_image sum",
        () => jsfeatNext.imgproc.compute_integral_image(next, sumN as never, null, null),
        () => jsfeat.imgproc.compute_integral_image(orig, sumO, null, null),
        sumN,
        sumO
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.compute_integral_image(next, sumN as never, null, null);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.compute_integral_image(orig, sumO, null, null);
        }).run();
    });
});

describe("imgproc.compute_integral_image — sum + sqsum + tilted", () => {
    const { next, orig } = u8Pair();
    const len = (W + 1) * (H + 1);
    const [sumN, sqN, tiltN, sumO, sqO, tiltO] = Array.from({ length: 6 }, () => new Int32Array(len));
    const runN = () => jsfeatNext.imgproc.compute_integral_image(next, sumN as never, sqN as never, tiltN as never);
    const runO = () => jsfeat.imgproc.compute_integral_image(orig, sumO, sqO, tiltO);
    assertSameWork("compute_integral_image sum", runN, runO, sumN, sumO);
    assertSameWork("compute_integral_image sqsum", runN, runO, sqN, sqO);
    assertSameWork("compute_integral_image tilted", runN, runO, tiltN, tiltO);

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", runN).run();

        await bench("jsfeat (reference)", runO).run();
    });
});

describe("imgproc.sobel_derivatives — U8 to S32C2", () => {
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
    const dstO = new jsfeat.matrix_t(W, H, jsfeat.S32C2_t);
    assertSameWork(
        "sobel_derivatives",
        () => jsfeatNext.imgproc.sobel_derivatives(next, dstN),
        () => jsfeat.imgproc.sobel_derivatives(orig, dstO),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.sobel_derivatives(next, dstN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.sobel_derivatives(orig, dstO);
        }).run();
    });
});

describe("imgproc.scharr_derivatives — U8 to S32C2", () => {
    // The gradient optical_flow_lk computes per pyramid level.
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
    const dstO = new jsfeat.matrix_t(W, H, jsfeat.S32C2_t);
    assertSameWork(
        "scharr_derivatives",
        () => jsfeatNext.imgproc.scharr_derivatives(next, dstN),
        () => jsfeat.imgproc.scharr_derivatives(orig, dstO),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.scharr_derivatives(next, dstN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.scharr_derivatives(orig, dstO);
        }).run();
    });
});

describe("imgproc.warp_perspective — U8, full frame", () => {
    // The AR overlay step: a mild keystone over the whole 640x480 frame.
    const { next, orig } = u8Pair();
    const tN = new jsfeatNext.matrix_t(3, 3, F32C1);
    const tO = new jsfeat.matrix_t(3, 3, OF32C1);
    jsfeatNext.transform.perspective_4point_transform(
        tN,
        0,
        0,
        20,
        10,
        639,
        0,
        610,
        5,
        639,
        479,
        620,
        470,
        0,
        479,
        15,
        460
    );
    for (let i = 0; i < 9; i++) tO.data[i] = tN.data[i];
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);
    assertSameWork(
        "warp_perspective",
        () => jsfeatNext.imgproc.warp_perspective(next, dstN, tN, 0),
        () => jsfeat.imgproc.warp_perspective(orig, dstO, tO, 0),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.warp_perspective(next, dstN, tN, 0);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.warp_perspective(orig, dstO, tO, 0);
        }).run();
    });
});

describe("imgproc.warp_affine — U8, rotation + scale + translation", () => {
    // Carries the #119 fix: jsfeatNext fills the one-pixel band where a source
    // coordinate falls in (-1, 0), which jsfeat extrapolates. That band is the
    // only expected difference, so, as in tests/parity/imgproc.test.ts, every
    // pixel outside the band must match and every pixel inside it must be the
    // fill value (a few band pixels match jsfeat too, where its extrapolation
    // happens to land on 0).
    const { next, orig } = u8Pair();
    const tN = new jsfeatNext.matrix_t(3, 3, F32C1);
    const tO = new jsfeat.matrix_t(3, 3, OF32C1);
    const cs = Math.cos(0.3) * 0.98;
    const sn = Math.sin(0.3) * 0.98;
    const vals = [cs, -sn, 60.0, sn, cs, -40.0];
    for (let i = 0; i < 6; i++) {
        tN.data[i] = vals[i];
        tO.data[i] = vals[i];
    }
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);
    jsfeatNext.imgproc.warp_affine(next, dstN, tN, 0);
    jsfeat.imgproc.warp_affine(orig, dstO, tO, 0);
    let band = 0;
    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            const i = y * W + x;
            const xs = tN.data[0] * x + tN.data[1] * y + tN.data[2];
            const ys = tN.data[3] * x + tN.data[4] * y + tN.data[5];
            const inBand = (xs > -1 && xs < 0) || (ys > -1 && ys < 0);
            if (inBand) band++;
            if (inBand ? dstN.data[i] !== 0 : dstN.data[i] !== dstO.data[i]) {
                throw new Error(`warp_affine: pixel (${x}, ${y}) differs outside the #119 band`);
            }
        }
    }
    if (band === 0) throw new Error("warp_affine: the transform no longer reaches the #119 band");

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.warp_affine(next, dstN, tN, 0);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.warp_affine(orig, dstO, tO, 0);
        }).run();
    });
});

describe("imgproc.canny — U8, blurred noise", () => {
    // Blurred first, as the samples do; the blur is outside the timed region.
    // The only imgproc method that allocates a matrix_t on every call.
    const { next, orig } = u8Pair();
    const blurN = new jsfeatNext.matrix_t(W, H, U8C1);
    const blurO = new jsfeat.matrix_t(W, H, OU8C1);
    jsfeatNext.imgproc.gaussian_blur(next, blurN, 5, 0);
    jsfeat.imgproc.gaussian_blur(orig, blurO, 5, 0);
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);
    assertSameWork(
        "canny",
        () => jsfeatNext.imgproc.canny(blurN, dstN, 20, 60),
        () => jsfeat.imgproc.canny(blurO, dstO, 20, 60),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.canny(blurN, dstN, 20, 60);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.canny(blurO, dstO, 20, 60);
        }).run();
    });
});

describe("imgproc.equalize_histogram — U8", () => {
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);
    assertSameWork(
        "equalize_histogram",
        () => jsfeatNext.imgproc.equalize_histogram(next, dstN),
        () => jsfeat.imgproc.equalize_histogram(orig, dstO),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.equalize_histogram(next, dstN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.equalize_histogram(orig, dstO);
        }).run();
    });
});

describe("imgproc.box_blur_gray — U8, radius 2", () => {
    // Carries the #114 fix: jsfeatNext divides exactly where jsfeat multiplies
    // by the float reciprocal and truncates, which comes out 1 low wherever the
    // true mean is an integer the reciprocal undershoots. Radius 2 (1/25) is
    // bit-exact on this input, as in tests/parity; at radius 3 (1/49) 3432
    // pixels differ, every one by exactly +1. The loop is the same either way.
    const { next, orig } = u8Pair();
    const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
    const dstO = new jsfeat.matrix_t(W, H, OU8C1);
    assertSameWork(
        "box_blur_gray",
        () => jsfeatNext.imgproc.box_blur_gray(next, dstN, 2, 0),
        () => jsfeat.imgproc.box_blur_gray(orig, dstO, 2, 0),
        dstN.data,
        dstO.data
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.box_blur_gray(next, dstN, 2, 0);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.box_blur_gray(orig, dstO, 2, 0);
        }).run();
    });
});

describe("imgproc.skindetector — RGBA", () => {
    // Peripheral (a demo path), but a plain per-pixel loop, so cheap to cover.
    const src = { width: W, height: H, data: rgbaNoise(4242) };
    const dstN = new Array<number>(W * H).fill(0);
    const dstO = new Array<number>(W * H).fill(0);
    assertSameWork(
        "skindetector",
        () => jsfeatNext.imgproc.skindetector(src, dstN),
        () => jsfeat.imgproc.skindetector(src, dstO),
        dstN,
        dstO
    );

    test("jsfeatNext vs jsfeat (reference)", async ({ bench }) => {
        await bench("jsfeatNext", () => {
            jsfeatNext.imgproc.skindetector(src, dstN);
        }).run();

        await bench("jsfeat (reference)", () => {
            jsfeat.imgproc.skindetector(src, dstO);
        }).run();
    });
});

// hough_transform is deliberately NOT benched: the vendored jsfeat version
// throws a ReferenceError (undeclared min_theta/max_theta under "use strict",
// see tests/parity/imgproc.test.ts), so there is no reference side to pair it
// with. See bench/README.md.
