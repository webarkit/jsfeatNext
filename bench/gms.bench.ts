/*
 *  gms.bench.ts
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
import type { keypoint_t } from "../src/keypoint_t/keypoint_t";
import { image, keypointPool, noiseImage, U8C1 } from "../tests/properties/helpers";

/**
 * Cost of `gms.filter` against the matching step it follows (issue #134).
 *
 * ## No jsfeat side
 *
 * jsfeat has no GMS, so there is no jsfeatNext-vs-jsfeat ratio and no
 * `"jsfeat (reference)"` case in this file. The number it exists to produce is
 * the intra-library one, following the precedent in bench/README.md ("yape06
 * costs N x fast_corners"): "gms: <path> costs N x matching". It is as portable
 * as any ratio taken inside one process, because both sides of it meet the
 * same machine in the same seconds. `scripts/bench-ratios.mjs` knows this file
 * is not an A/B group: it prints these costs on their own and writes nothing
 * about them to `bench/history.jsonl`.
 *
 * ## The workload is the tracker's
 *
 * At most 300 keypoints of one level, ORB-described, matched the way
 * the WebARKit tracker matches (`bfmatcher.knnMatch` with k = 2, then
 * `ratio_test` at 0.75), and the GMS cases filter exactly that output. Time
 * "matching" and "GMS" on the same inputs and the question the milestone asks
 * -- does the default path cost more than the step it follows? -- answers
 * itself. The tracker passes no options today, i.e. the default path.
 *
 * ## Why noise rather than cornerScene (ruling R12)
 *
 * The workload was first written against `cornerScene(640, 480)` and its
 * translated copy, as the property tests use. Measured, that scene yields only
 * 36 FAST corners per view and 24 ratio-tested matches: far below the 300
 * keypoints and ~100 matches a tracker frame produces, so GMS would look
 * trivially cheap because it had nothing to do. Seeded noise is dense: tens of
 * thousands of corners, from which the 300 strongest are kept as the tracker
 * would, and ~290 survive the ratio test. Collection fails if that stops being
 * true.
 *
 * ## The second view is an exact translation
 *
 * `noiseImage` has no offset, so both views are cropped from one larger noise
 * canvas, DX/DY apart: whatever is at (x, y) in view 1 is at (x + DX, y + DY)
 * in view 2, with no filled border. The matches are therefore real, and GMS has
 * a consistent motion to find.
 *
 * ## Everything but the call is outside the timed region
 *
 * Detection, ORB description and the baseline's output (the matches the GMS
 * cases filter) are all built in the `describe` body, at collection time.
 * Only `knnMatch`+`ratio_test` (the baseline) and `gms.filter` (the four
 * paths) run inside a `bench` callback; their results are discarded, as in the
 * other bench files, so nothing but the work being measured sits in the loop.
 */

// 640x480: the webcam frame size the WebAR examples run at.
const W = 640;
const H = 480;
// Translation between the two views, the same as the property test's.
const DX = 16;
const DY = 8;
// FAST border. 20 keeps every ORB sampling pattern inside the image (#110, #225).
const BORDER = 20;
// What the tracker keeps per level.
const KEEP = 300;
const RATIO = 0.75;
// R12's floors: below these the workload is too small to say anything about GMS.
const MIN_KEYPOINTS = KEEP;
const MIN_MATCHES = 100;
// Detection writes `corners[i]` with no length check, so an undersized pool
// throws instead of truncating. Threshold 20 on this noise finds ~26.4k corners:
// 60k leaves headroom without allocating an image-sized (307k) pool of objects
// that would sit on the heap into the first measurement.
const DETECT_POOL = 60000;

/** FAST corners, the KEEP strongest, oriented with `ic_angle` and ORB-described: the tracker's per-level features. */
function features(img: ReturnType<typeof noiseImage>) {
    jsfeatNext.fast_corners.set_threshold(20);
    const pool = keypointPool(DETECT_POOL);
    const n = jsfeatNext.fast_corners.detect(img, pool, BORDER);
    // Strongest first. The sort is stable, so ties keep detection (row-major)
    // order, which translates consistently between the two views.
    const kps: keypoint_t[] = pool.slice(0, n).sort((a, b) => b.score - a.score);
    kps.length = Math.min(KEEP, kps.length);
    for (const kp of kps) kp.angle = jsfeatNext.orb.ic_angle(img, kp.x, kp.y);
    const descriptors = new jsfeatNext.matrix_t(32, kps.length, U8C1);
    jsfeatNext.orb.describe(img, kps, kps.length, descriptors);
    return { kps, descriptors };
}

describe("gms.filter — four paths vs matching (300 keypoints, intra-library)", () => {
    // One canvas, two crops, DX/DY apart: an exact translation with real content
    // at the edges of both views.
    const cw = W + DX;
    const canvas = noiseImage(cw, H + DY, 4242);
    const view1 = image(W, H, (x, y) => canvas.data[(y + DY) * cw + x + DX]);
    const view2 = image(W, H, (x, y) => canvas.data[y * cw + x]);

    const a = features(view1);
    const b = features(view2);
    const matching = () =>
        jsfeatNext.bfmatcher.ratio_test(jsfeatNext.bfmatcher.knnMatch(a.descriptors, b.descriptors, 2), RATIO);

    // The baseline's own output is what the GMS cases filter, built once here.
    const matches = matching();
    const size = { width: W, height: H };

    // A workload below R12's floors measures call overhead, not GMS.
    if (a.kps.length < MIN_KEYPOINTS || b.kps.length < MIN_KEYPOINTS) {
        throw new Error(`gms bench: ${a.kps.length}/${b.kps.length} keypoints, need ${MIN_KEYPOINTS} per view`);
    }
    if (matches.length < MIN_MATCHES) {
        throw new Error(`gms bench: ${matches.length} ratio-tested matches, need at least ${MIN_MATCHES}`);
    }
    // Each path must keep something, or a "fast" path may just be an empty one.
    for (const [rotation, scale] of [
        [false, false],
        [true, false],
        [false, true],
        [true, true],
    ]) {
        const kept = jsfeatNext.gms.filter(size, size, a.kps, b.kps, matches, rotation, scale);
        if (kept.length === 0) {
            throw new Error(`gms bench: rotation=${rotation} scale=${scale} kept no match out of ${matches.length}`);
        }
    }

    test("gms.filter vs the matching step", async ({ bench }) => {
        // The baseline. No `jsfeatNext` prefix: this is not an A/B pair.
        await bench("match: knnMatch k=2 + ratio_test 0.75", () => {
            matching();
        }).run();

        await bench("gms: default", () => {
            jsfeatNext.gms.filter(size, size, a.kps, b.kps, matches);
        }).run();

        await bench("gms: rotation", () => {
            jsfeatNext.gms.filter(size, size, a.kps, b.kps, matches, true, false);
        }).run();

        await bench("gms: scale", () => {
            jsfeatNext.gms.filter(size, size, a.kps, b.kps, matches, false, true);
        }).run();

        await bench("gms: rotation+scale", () => {
            jsfeatNext.gms.filter(size, size, a.kps, b.kps, matches, true, true);
        }).run();
    });
});
