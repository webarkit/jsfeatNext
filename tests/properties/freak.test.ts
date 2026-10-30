/*
 *  freak.test.ts
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

import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import { matrix_t } from "../../src/matrix_t/matrix_t";
import { keypoint_t } from "../../src/keypoint_t/keypoint_t";
import { freak, cv_round, freak_params, type FreakOptions } from "../../src/freak/freak";
import { loadFixture, loadScene } from "../fixtures/opencv/loader";
import { freakImages, type FreakImageParams } from "../fixtures/opencv/freak_images";

/**
 * Properties of `freak.describe` (#80) that the OpenCV fixtures do not pin:
 * argument validation, the compaction contract, the angle convention, the
 * integral image of a large frame, and the shared pool staying balanced
 * (tests/setup/pool-balance.ts also checks the balance after every test).
 */

const freeCount = (): number => (jsfeatNext.cache as unknown as { _pool_size: number })._pool_size;

const scene = loadScene();
const img = new matrix_t(scene.width, scene.height, jsfeatNext.U8C1_t);
img.data.set(scene.data);

const engine = new freak();

/** Describes `kps` and returns the kept count and each row as a hex string. */
function run(
    kps: keypoint_t[],
    options?: FreakOptions,
    src: matrix_t = img,
    count = kps.length
): { kept: number; rows: string[] } {
    const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
    const kept = engine.describe(src, kps, count, out, options);
    const rows: string[] = [];
    for (let r = 0; r < out.rows; ++r) {
        let s = "";
        for (let i = 0; i < 64; ++i) s += out.data[r * 64 + i].toString(16).padStart(2, "0");
        rows.push(s);
    }
    expect(out.rows).toBe(kept);
    return { kept, rows };
}

const interior = (x = 320, y = 240, angle = -1, size = 20): keypoint_t => new keypoint_t(x, y, 0, 0, angle, size);

const ALL_FF = "ff".repeat(64);

describe("freak.describe: validation", () => {
    for (const size of [0, -3]) {
        it(`with scale_normalized, size ${size} at index 2 throws a RangeError naming it`, () => {
            const before = freeCount();
            const kps = [interior(), interior(300, 200), interior(310, 220, -1, size)];
            const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
            expect(() => engine.describe(img, kps, 3, out)).toThrow(RangeError);
            expect(() => engine.describe(img, kps, 3, out)).toThrow(/keypoint 2 has size/);
            expect(freeCount()).toBe(before);
            // without scale normalization, size is not read
            expect(() => engine.describe(img, kps, 3, out, { scale_normalized: false })).not.toThrow();
        });
    }

    for (const [x, y] of [
        [Number.NaN, 100],
        [100, Number.POSITIVE_INFINITY],
        [1e39, 100], // finite as a double, Infinity as the float32 cv::KeyPoint stores
    ]) {
        it(`a non-finite position (${x}, ${y}) at index 1 throws a RangeError naming it`, () => {
            const kps = [interior(), new keypoint_t(x, y, 0, 0, -1, 20)];
            const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
            expect(() => engine.describe(img, kps, 2, out)).toThrow(RangeError);
            expect(() => engine.describe(img, kps, 2, out)).toThrow(/keypoint 1 has a non-finite position/);
        });
    }

    for (const [n_octaves, size] of [
        [30, 1e10], // patternSizes[63] ~ 2.6e11: past int range, where OpenCV's cast is undefined
        [2000, 1e6], // scaleStep = 2^31.25: scale 1, patternSizes[1] ~ 3.4e10
    ]) {
        it(`a pattern size past int range (n_octaves ${n_octaves}, size ${size}) drops the keypoint`, () => {
            const before = freeCount();
            const kps = [interior(320, 240, -1, size)];
            expect(run(kps, { n_octaves })).toEqual({ kept: 0, rows: [] });
            expect(freeCount()).toBe(before);
        });
    }

    it("keeps an infinite pattern size infinite (n_octaves 2000, scale 63), not wrapped to an int", () => {
        expect(freak_params(22, 2000).sizes[63]).toBe(Number.POSITIVE_INFINITY);
    });

    for (const pattern_scale of [0, -1, Number.NaN, 1e39]) {
        it(`pattern_scale ${pattern_scale} throws a RangeError`, () => {
            const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
            expect(() => engine.describe(img, [interior()], 1, out, { pattern_scale })).toThrow(RangeError);
        });
    }

    for (const n_octaves of [0, 2.5, -1]) {
        it(`n_octaves ${n_octaves} throws a RangeError`, () => {
            const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
            expect(() => engine.describe(img, [interior()], 1, out, { n_octaves })).toThrow(RangeError);
        });
    }

    it("count > corners.length throws a RangeError, pool unchanged", () => {
        const before = freeCount();
        const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
        expect(() => engine.describe(img, [interior()], 2, out)).toThrow(RangeError);
        expect(freeCount()).toBe(before);
    });

    it("a non-U8C1 source throws a TypeError", () => {
        const f32 = new matrix_t(64, 64, jsfeatNext.F32C1_t);
        const rgba = new matrix_t(64, 64, jsfeatNext.U8C4_t);
        const out = new matrix_t(64, 1, jsfeatNext.U8C1_t);
        expect(() => engine.describe(f32, [interior(32, 32)], 1, out)).toThrow(TypeError);
        expect(() => engine.describe(rgba, [interior(32, 32)], 1, out)).toThrow(TypeError);
    });

    it("a throw on a keypoint mid-list leaves the shared pool balanced", () => {
        const before = freeCount();
        const kps = [interior(), new keypoint_t(100, 100, 0, 0, -1, 0), interior(300, 200)];
        expect(() => engine.describe(img, kps, 3, new matrix_t(64, 1, jsfeatNext.U8C1_t))).toThrow(RangeError);
        expect(freeCount()).toBe(before);
    });
});

describe("freak.describe: behaviour", () => {
    it("count = 0 returns 0 with 0 rows", () => {
        const out = new matrix_t(64, 5, jsfeatNext.U8C1_t);
        expect(engine.describe(img, [], 0, out)).toBe(0);
        expect(out.rows).toBe(0);
        expect(out.cols).toBe(64);
    });

    it("keypoints all at the border return 0 with 0 rows", () => {
        const kps = [interior(5, 240), interior(320, 3), interior(639, 240), interior(320, 470)];
        expect(run(kps)).toEqual({ kept: 0, rows: [] });
    });

    it("the input angle has no effect", () => {
        const a = run([interior(320, 240, -1), interior(250, 200, -1, 35)]);
        expect(run([interior(320, 240, 0), interior(250, 200, 0, 35)])).toEqual(a);
        expect(run([interior(320, 240, 2), interior(250, 200, 2, 35)])).toEqual(a);
    });

    it("with orientation_normalized false, every kept angle is 0", () => {
        const kps = [interior(320, 240, 1.5), interior(250, 200, -0.4, 35), interior(400, 300, 3)];
        const { kept } = run(kps, { orientation_normalized: false });
        expect(kept).toBe(3);
        for (const kp of kps) expect(kp.angle).toBe(0);
    });

    it("compacts in place: kept keypoints keep their order, corners[count..] is untouched", () => {
        const a = interior(320, 240);
        const b = interior(2, 2); // dropped
        const c = interior(250, 200, -1, 35);
        const tail1 = interior(1, 1);
        const tail2 = new keypoint_t(Number.NaN, -5, 0, 0, 7, -1); // never read: it would throw
        const kps = [a, b, c, tail1, tail2];
        const { kept } = run(kps, undefined, img, 3);
        expect(kept).toBe(2);
        expect(kps[0]).toBe(a);
        expect(kps[1]).toBe(c);
        expect(kps.length).toBe(5);
        expect(kps[3]).toBe(tail1);
        expect(kps[4]).toBe(tail2);
        // the moved objects stay in the array
        expect(new Set(kps.slice(0, 3))).toEqual(new Set([a, b, c]));
    });

    it("keeps duplicate keypoints, with identical rows and angles", () => {
        const kps = [interior(250, 200, -1, 35), interior(250, 200, -1, 35)];
        const { kept, rows } = run(kps);
        expect(kept).toBe(2);
        expect(rows[0]).toBe(rows[1]);
        expect(kps[0].angle).toBe(kps[1].angle);
    });

    it("pattern_scale 8, then the defaults, equals a fresh default call", () => {
        const fresh = run([interior(), interior(250, 200, -1, 35)]);
        run([interior(), interior(250, 200, -1, 35)], { pattern_scale: 8, n_octaves: 3 });
        expect(run([interior(), interior(250, 200, -1, 35)])).toEqual(fresh);
    });

    it("a flat image gives angle 0 (atan2(0, 0)) and all bits set", () => {
        const flat = new matrix_t(64, 64, jsfeatNext.U8C1_t);
        flat.data.fill(100);
        const kps = [new keypoint_t(32, 32, 0, 0, -1, 7)];
        expect(run(kps, undefined, flat)).toEqual({ kept: 1, rows: [ALL_FF] });
        expect(kps[0].angle).toBe(0);
    });
});

describe("freak.describe: integral image of a large frame", () => {
    it("an all-255 4096x2112 image, past (2^31 - 1) / 255 pixels, gives 64 bytes of 0xFF", () => {
        const W = 4096;
        const H = 2112;
        expect(W * H).toBeGreaterThan((2 ** 31 - 1) / 255); // an Int32 integral would overflow
        const big = new matrix_t(W, H, jsfeatNext.U8C1_t);
        big.data.fill(255);
        // near the bottom-right corner (ps = 64 at size 20), where the sums pass 2^31
        const kps = [new keypoint_t(4020, 2040, 0, 0, -1, 20), new keypoint_t(2048, 1056, 0, 0, -1, 20)];
        expect(run(kps, undefined, big)).toEqual({ kept: 2, rows: [ALL_FF, ALL_FF] });
    });
});

describe("freak.describe: 90 degree rotation", () => {
    interface Payload {
        cases: { name: string; keypoints: [number, number, number][]; angles_deg: number[] }[];
        rotation: { case_a: string; case_b: string; pairs: [number, number][]; max_hamming: number };
    }
    const fixture = loadFixture<Payload>("freak");
    const images = freakImages(fixture.meta.params as unknown as FreakImageParams);
    const { rotation, cases } = fixture.payload;

    const describeCase = (name: string, src: matrix_t): { kps: keypoint_t[]; d: matrix_t } => {
        const c = cases.find((k) => k.name === name);
        const kps = c.keypoints.map(([x, y, size]) => new keypoint_t(x, y, 0, 0, -1, size));
        const d = new matrix_t(64, 1, jsfeatNext.U8C1_t);
        engine.describe(src, kps, kps.length, d);
        return { kps, d };
    };

    const hamming = (a: matrix_t, ra: number, b: matrix_t, rb: number): number => {
        let n = 0;
        for (let i = 0; i < 64; ++i) {
            let x = a.data[ra * 64 + i] ^ b.data[rb * 64 + i];
            while (x) {
                n += x & 1;
                x >>= 1;
            }
        }
        return n;
    };

    it("pairs stay within OpenCV's Hamming bound, and angles turn by 90 degrees where OpenCV's do", () => {
        const a = describeCase(rotation.case_a, images.texture);
        const b = describeCase(rotation.case_b, images.texture_rot90);
        const fa = cases.find((k) => k.name === rotation.case_a).angles_deg;
        const fb = cases.find((k) => k.name === rotation.case_b).angles_deg;
        const step = 360 / 256;
        const mod360 = (v: number): number => ((v % 360) + 360) % 360;
        // the sign of the turn, from OpenCV's own angles
        let near90 = 0;
        let near270 = 0;
        for (const [ra, rb] of rotation.pairs) {
            const t = mod360(fb[rb] - fa[ra]);
            if (Math.abs(t - 90) <= step) near90++;
            if (Math.abs(t - 270) <= step) near270++;
        }
        const turn = near90 >= near270 ? 90 : 270;
        expect(Math.max(near90, near270)).toBeGreaterThan(0);

        let worst = 0;
        let checked = 0;
        for (const [ra, rb] of rotation.pairs) {
            worst = Math.max(worst, hamming(a.d, ra, b.d, rb));
            if (Math.abs(mod360(fb[rb] - fa[ra]) - turn) <= step) {
                const ours = mod360((b.kps[rb].angle - a.kps[ra].angle) / 0.017453292519943295);
                expect(Math.abs(ours - turn), `pair ${ra}/${rb}`).toBeLessThanOrEqual(step + 1e-9);
                checked++;
            }
        }
        expect(checked).toBeGreaterThan(0);
        expect(worst).toBeLessThanOrEqual(rotation.max_hamming);
    });
});

describe("cv_round", () => {
    it("rounds half to even, never to -0", () => {
        expect(cv_round(0.5)).toBe(0);
        expect(cv_round(1.5)).toBe(2);
        expect(cv_round(-0.5)).toBe(0);
        expect(cv_round(2.5)).toBe(2);
        expect(cv_round(-1.5)).toBe(-2);
        expect(cv_round(-2.7)).toBe(-3);
        expect(cv_round(3.2)).toBe(3);
    });
});

describe("freak descriptors through bfmatcher", () => {
    // The scene has flat and repeated areas, so several keypoints describe
    // identically; bfmatcher breaks such ties towards the lowest index, which is
    // correct but not the identity. The identity is asserted on rows that are
    // pairwise distinct, the tie rule on the whole set.
    const kps: keypoint_t[] = [];
    for (let y = 60; y <= 420; y += 20) for (let x = 60; x <= 580; x += 20) kps.push(interior(x, y));
    const d = new matrix_t(64, 1, jsfeatNext.U8C1_t);
    const kept = jsfeatNext.freak.describe(img, kps, kps.length, d);
    const key = (r: number): string => Buffer.from(d.data.subarray(r * 64, r * 64 + 64)).toString("hex");

    it("returns 64-byte U8C1 rows", () => {
        expect(kept).toBeGreaterThan(50);
        expect(d.cols).toBe(64);
        expect(d.type).toBe(jsfeatNext.U8_t);
        expect(d.channel).toBe(1);
        expect(d.rows).toBe(kept);
    });

    it("matches about 50 distinct descriptors to themselves: distance 0, same index", () => {
        const seen = new Set<string>();
        const uniq: number[] = [];
        for (let r = 0; r < kept && uniq.length < 50; r++) {
            if (!seen.has(key(r))) {
                seen.add(key(r));
                uniq.push(r);
            }
        }
        expect(uniq.length).toBe(50);
        const u = new matrix_t(64, uniq.length, jsfeatNext.U8C1_t);
        uniq.forEach((r, i) => u.data.set(d.data.subarray(r * 64, r * 64 + 64), i * 64));
        const matches = jsfeatNext.bfmatcher.match(u, u);
        expect(matches.length).toBe(50);
        matches.forEach((m, i) => {
            expect(m.distance).toBe(0);
            expect(m.queryIdx).toBe(i);
            expect(m.trainIdx).toBe(i);
        });
    });

    it("matches every row of the whole set at distance 0, to the first identical row on a tie", () => {
        const first = new Map<string, number>();
        for (let r = 0; r < kept; r++) if (!first.has(key(r))) first.set(key(r), r);
        const matches = jsfeatNext.bfmatcher.match(d, d);
        expect(matches.length).toBe(kept);
        matches.forEach((m, i) => {
            expect(m.distance).toBe(0);
            expect(m.queryIdx).toBe(i);
            expect(m.trainIdx).toBe(first.get(key(i)));
        });
    });
});
