/*
 *  teblid.bench.ts
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
 * Cost of `teblid.describe` against `orb.describe` on the same keypoints (issue #135).
 *
 * ## No jsfeat side
 *
 * jsfeat has no TEBLID, so there is no jsfeatNext-vs-jsfeat ratio and no
 * `"jsfeat (reference)"` case in this file. Like bench/gms.bench.ts it reports an
 * intra-library cost, "teblid N x orb.describe", read off one process. The
 * baseline is the FIRST task, which is what `scripts/bench-ratios.mjs` divides
 * the others by; nothing here is written to `bench/history.jsonl`.
 *
 * ## The workload is the tracker's
 *
 * The 300 strongest FAST corners (threshold 20, border 20) of a 640x480 seeded
 * noise image, oriented with `orb.ic_angle`, the same selection as
 * bench/gms.bench.ts. `size` is 31, ORB's patch diameter, which TEBLID reads as
 * the diameter of the neighbourhood it describes.
 *
 * ## Everything but the call is outside the timed region
 *
 * Detection, orientation and the output matrices are built in the `describe`
 * body, at collection time. Only the three `describe` calls run inside a `bench`
 * callback and their results are discarded.
 */

const W = 640;
const H = 480;
// FAST border. 20 keeps every ORB sampling pattern inside the image (#110, #225).
const BORDER = 20;
// What the tracker keeps per level.
const KEEP = 300;
const SIZE = 31;
// Detection writes `corners[i]` with no length check; threshold 20 on this noise finds ~26.4k.
const DETECT_POOL = 60000;

describe("teblid.describe vs orb.describe (300 keypoints, intra-library)", () => {
    const img = noiseImage(W, H, 4242);

    jsfeatNext.fast_corners.set_threshold(20);
    const pool = keypointPool(DETECT_POOL);
    const n = jsfeatNext.fast_corners.detect(img, pool, BORDER);
    const kps: keypoint_t[] = pool.slice(0, n).sort((a, b) => b.score - a.score);
    kps.length = Math.min(KEEP, kps.length);
    for (const kp of kps) {
        kp.angle = jsfeatNext.orb.ic_angle(img, kp.x, kp.y);
        kp.size = SIZE;
    }

    // A workload below the tracker's keypoint count measures call overhead.
    if (kps.length < KEEP) {
        throw new Error(`teblid bench: ${kps.length} keypoints, need ${KEEP}`);
    }

    const orbOut = new jsfeatNext.matrix_t(32, kps.length, U8C1);
    const out256 = new jsfeatNext.matrix_t(32, kps.length, U8C1);
    const out512 = new jsfeatNext.matrix_t(64, kps.length, U8C1);

    test("teblid 256 / 512 vs orb.describe", async ({ bench }) => {
        // The baseline. No `jsfeatNext` prefix: this is not an A/B pair.
        await bench("orb.describe (256 bits)", () => {
            jsfeatNext.orb.describe(img, kps, kps.length, orbOut);
        }).run();

        await bench("teblid p256", () => {
            jsfeatNext.teblid.describe(img, kps, kps.length, out256, { bits: 256 });
        }).run();

        await bench("teblid p512", () => {
            jsfeatNext.teblid.describe(img, kps, kps.length, out512, { bits: 512 });
        }).run();
    });
});
