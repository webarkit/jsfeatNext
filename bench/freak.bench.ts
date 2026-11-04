/*
 *  freak.bench.ts
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
import { keypointPool, noiseImage, U8C1 } from "../tests/properties/helpers";

/**
 * Cost of `freak.describe` against `orb.describe` and `teblid.describe` on the
 * same keypoints (issue #80).
 *
 * ## No jsfeat side
 *
 * jsfeat has no FREAK, so there is no jsfeatNext-vs-jsfeat ratio and no
 * `"jsfeat (reference)"` case in this file. Like bench/teblid.bench.ts it reports
 * an intra-library cost, "freak N x orb.describe", read off one process. The
 * baseline is the FIRST task, which is what `scripts/bench-ratios.mjs` divides
 * the others by; nothing here is written to `bench/history.jsonl`.
 *
 * ## The workload is the tracker's
 *
 * The 300 strongest FAST corners (threshold 20, border 20) of a 640x480 seeded
 * noise image, the same selection as bench/teblid.bench.ts, with `size = 31`.
 * ORB and TEBLID read the angle from `orb.ic_angle`; FREAK estimates its own.
 *
 * FREAK's pattern at size 31 does not fit around 168 of those 300 (it drops them,
 * as OpenCV does), so that group times FREAK on 132 keypoints against ORB and
 * TEBLID on 300. A second group (size 7, border 30) keeps all 300 for all three:
 * that is the like-for-like per-keypoint cost.
 *
 * ## FREAK compacts and re-orients its input
 *
 * `freak.describe` moves the kept keypoints to the front of `corners` and writes
 * `angle` on them. It therefore gets its own clones of the keypoints (so the
 * angles ORB and TEBLID read are never touched) and a fresh array copy before
 * every iteration, made in a `beforeEach` hook that tinybench keeps outside the
 * timed region.
 *
 * ## Everything but the call is outside the timed region
 *
 * Detection, orientation and the output matrices are built in the `describe`
 * body, at collection time. Only the three `describe` calls run inside a `bench`
 * callback and their results are discarded.
 */

const W = 640;
const H = 480;
// What the tracker keeps per level.
const KEEP = 300;
// Detection writes `corners[i]` with no length check; threshold 20 on this noise finds ~26.4k.
const DETECT_POOL = 60000;

/**
 * One workload: the 300 strongest FAST corners at `border`, given `size`, and the
 * number of them FREAK keeps (`expectKept`), asserted at collection time so a
 * change that drops keypoints cannot quietly shorten the work being timed.
 */
function workload(title: string, border: number, size: number, expectKept: number): void {
    describe(title, () => {
        const img = noiseImage(W, H, 4242);

        jsfeatNext.fast_corners.set_threshold(20);
        const pool = keypointPool(DETECT_POOL);
        const n = jsfeatNext.fast_corners.detect(img, pool, border);
        const kps: keypoint_t[] = pool.slice(0, n).sort((a, b) => b.score - a.score);
        kps.length = Math.min(KEEP, kps.length);
        for (const kp of kps) {
            kp.angle = jsfeatNext.orb.ic_angle(img, kp.x, kp.y);
            kp.size = size;
        }

        // A workload below the tracker's keypoint count measures call overhead.
        if (kps.length < KEEP) {
            throw new Error(`freak bench: ${kps.length} keypoints, need ${KEEP}`);
        }

        // FREAK's own keypoints: it writes `angle` and reorders the array.
        const freakKps: keypoint_t[] = kps.map(
            (k) => new jsfeatNext.keypoint_t(k.x, k.y, k.score, k.level, k.angle, size)
        );
        let work: keypoint_t[] = freakKps.slice();

        const orbOut = new jsfeatNext.matrix_t(32, kps.length, U8C1);
        const out256 = new jsfeatNext.matrix_t(32, kps.length, U8C1);
        const freakOut = new jsfeatNext.matrix_t(64, kps.length, U8C1);

        const kept = jsfeatNext.freak.describe(img, freakKps.slice(), freakKps.length, freakOut);
        if (kept !== expectKept) {
            throw new Error(`freak bench: kept ${kept} of ${KEEP} keypoints, expected ${expectKept}`);
        }

        test("freak vs orb.describe and teblid 256", async ({ bench }) => {
            // The baseline. No `jsfeatNext` prefix: this is not an A/B pair.
            await bench("orb.describe (256 bits)", () => {
                jsfeatNext.orb.describe(img, kps, kps.length, orbOut);
            }).run();

            await bench("teblid p256", () => {
                jsfeatNext.teblid.describe(img, kps, kps.length, out256, { bits: 256 });
            }).run();

            await bench(
                "freak (512 bits)",
                {
                    beforeEach() {
                        work = freakKps.slice();
                    },
                },
                () => {
                    jsfeatNext.freak.describe(img, work, work.length, freakOut);
                }
            ).run();
        });
    });
}

// The tracker's workload (bench/teblid.bench.ts's): border 20, size 31. FREAK's
// pattern at that size does not fit around 168 of the 300, so it drops them.
workload("freak.describe vs orb.describe (300 keypoints, size 31, 132 kept)", 20, 31, 132);
// Every keypoint described by all three: the like-for-like per-keypoint cost.
workload("freak.describe vs orb.describe (300 keypoints, size 7, all kept)", 30, 7, KEEP);
