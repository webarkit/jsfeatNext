/*
 *  orb_ic_angle.test.ts
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
import { noiseImage, image, uniformImage } from "../properties/helpers";

/**
 * Parity target: `ic_angle()` in `examples/sample_orb.html` /
 * `examples/sample_orb_pinball.html` — where this routine lived, duplicated,
 * before it moved into `orb` (issue #96).
 *
 * There is no vendored jsfeat oracle for this one: original jsfeat never
 * shipped keypoint orientation in the library either, it too kept `ic_angle`
 * in its ORB sample. So the reference below is the sample's own
 * implementation, transcribed verbatim — the same arrangement as
 * `tests/parity/bfmatcher.test.ts`.
 */
const u_max_ref = new Int32Array([15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0]);

function reference_ic_angle(img: { data: ArrayLike<number>; cols: number }, px: number, py: number): number {
    const half_k = 15;
    let m_01 = 0,
        m_10 = 0;
    const src = img.data,
        step = img.cols;
    let u = 0,
        v = 0;
    const center_off = (py * step + px) | 0;
    let v_sum = 0,
        d = 0,
        val_plus = 0,
        val_minus = 0;

    for (u = -half_k; u <= half_k; ++u) m_10 += u * src[center_off + u];

    for (v = 1; v <= half_k; ++v) {
        v_sum = 0;
        d = u_max_ref[v];
        for (u = -d; u <= d; ++u) {
            val_plus = src[center_off + u + v * step];
            val_minus = src[center_off + u - v * step];
            v_sum += val_plus - val_minus;
            m_10 += u * (val_plus + val_minus);
        }
        m_01 += v * v_sum;
    }

    return Math.atan2(m_01, m_10);
}

describe("parity: orb.ic_angle vs the examples' inline ic_angle", () => {
    it("agrees bit-for-bit across a textured image", () => {
        const img = noiseImage(128, 128, 7001);
        const orb = jsfeatNext.orb;

        // stay >= 15 px from every edge: the patch is read without bounds checks
        for (let py = 16; py < 112; py += 7) {
            for (let px = 16; px < 112; px += 7) {
                expect(orb.ic_angle(img, px, py)).toBe(reference_ic_angle(img, px, py));
            }
        }
    });

    it("agrees on a smooth gradient, where the centroid is unambiguous", () => {
        const img = image(96, 96, (x) => x * 2);
        const orb = jsfeatNext.orb;
        for (let py = 20; py < 76; py += 11) {
            for (let px = 20; px < 76; px += 11) {
                expect(orb.ic_angle(img, px, py)).toBe(reference_ic_angle(img, px, py));
            }
        }
    });
});

describe("properties: orb.ic_angle", () => {
    const orb = jsfeatNext.orb;

    it("points along the intensity gradient: +x ramp gives angle 0", () => {
        // brightness increasing with x puts the intensity centroid to the right
        // of the patch centre, so m_10 > 0, m_01 == 0 -> atan2(0, +) == 0.
        const img = image(96, 96, (x) => 40 + x);
        expect(orb.ic_angle(img, 48, 48)).toBeCloseTo(0, 10);
    });

    it("+y ramp gives angle +pi/2", () => {
        const img = image(96, 96, (_x, y) => 40 + y);
        expect(orb.ic_angle(img, 48, 48)).toBeCloseTo(Math.PI / 2, 10);
    });

    it("rotating the ramp rotates the angle by the same amount", () => {
        // a diagonal ramp (x + y) has its centroid at 45 degrees
        const img = image(96, 96, (x, y) => 40 + x + y);
        expect(orb.ic_angle(img, 48, 48)).toBeCloseTo(Math.PI / 4, 10);
    });

    it("is invariant to a uniform brightness lift", () => {
        // a constant added to every pixel is symmetric about the centre, so it
        // cancels in both moments and must not move the angle.
        const base = image(96, 96, (x, y) => 40 + ((x * 3 + y * 7) % 60));
        const lifted = image(96, 96, (x, y) => 40 + ((x * 3 + y * 7) % 60) + 30);
        expect(orb.ic_angle(lifted, 48, 48)).toBeCloseTo(orb.ic_angle(base, 48, 48), 10);
    });

    it("returns 0 for a flat patch (both moments vanish)", () => {
        // atan2(0, 0) is 0 by IEEE-754; the angle is meaningless but must not
        // be NaN, since describe() feeds it straight into cos/sin.
        const flat = uniformImage(64, 64, 128);
        const a = orb.ic_angle(flat, 32, 32);
        expect(Number.isNaN(a)).toBe(false);
        expect(a).toBe(0);
    });

    it("stays within (-pi, pi]", () => {
        const img = noiseImage(128, 128, 7002);
        for (let py = 16; py < 112; py += 13) {
            for (let px = 16; px < 112; px += 13) {
                const a = orb.ic_angle(img, px, py);
                expect(a).toBeGreaterThan(-Math.PI);
                expect(a).toBeLessThanOrEqual(Math.PI);
            }
        }
    });
});

/**
 * A smooth, blobby scene and its exact 90 degree rotation.
 *
 * `rot(x, y) = gen(y, M - 1 - x)` turns the image a quarter turn about
 * `((M-1)/2, (M-1)/2)`, which lands on a pixel centre only when `M` is ODD.
 * With an odd size the rotation is a pure permutation of the pixel grid, so
 * the patch at the fixpoint sees exactly the same pixels, merely turned --
 * no resampling, no interpolation error. An even size puts the fixpoint on a
 * half-pixel and the equivariance below degrades to ~5 degrees of slop.
 *
 * The content is deliberately SMOOTH (a product of sines, ~11 px period).
 * Pixel-scale noise would defeat the descriptor comparison: ORB rectifies the
 * patch by bilinear resampling, which does not preserve content at the Nyquist
 * limit, so two views of a noise field give uncorrelated descriptors however
 * well the orientation is recovered.
 */
const M = 97;
const M_CENTRE = (M - 1) / 2;
const smoothGen = (x: number, y: number) => 128 + 90 * Math.sin(x / 11) * Math.cos(y / 13);

describe("orb.ic_angle closes the detect -> describe gap (issue #96)", () => {
    const orb = jsfeatNext.orb;
    const upright = image(M, M, smoothGen);
    const turned = image(M, M, (x, y) => smoothGen(y, M - 1 - x));

    it("is rotation-equivariant: turning the image 90 degrees turns the angle 90 degrees", () => {
        // This is the property that makes the method worth having: the measured
        // orientation tracks the feature, so rectifying by it cancels rotation.
        const a = orb.ic_angle(upright, M_CENTRE, M_CENTRE);
        const b = orb.ic_angle(turned, M_CENTRE, M_CENTRE);
        // exact to the last bit for this fixpoint-aligned rotation
        expect(b - a).toBeCloseTo(Math.PI / 2, 12);
    });

    it("gives descriptors that survive rotation, where the default angle does not", () => {
        // Detectors never set `angle`, and describe() rotates the patch by
        // whatever it finds there. Left at the keypoint_t default of -1, the
        // patch is rotated by -1 RADIAN (about -57 degrees) -- not a no-op --
        // so the same feature seen at two orientations yields unrelated
        // descriptors. Feeding ic_angle instead makes them nearly equal.
        const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
        const describeAt = (img: typeof upright, angle: number) => {
            const kp = [new jsfeatNext.keypoint_t(M_CENTRE, M_CENTRE, 0, 0, angle)];
            const d = new jsfeatNext.matrix_t(32, 1, U8C1);
            orb.describe(img, kp, 1, d);
            return d;
        };

        const popcount = (n: number) => {
            n -= (n >> 1) & 0x55555555;
            n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
            return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
        };
        const hamming = (p: { data: ArrayLike<number> }, q: { data: ArrayLike<number> }) => {
            let d = 0;
            for (let i = 0; i < 32; i++) d += popcount(p.data[i] ^ q.data[i]);
            return d;
        };

        const oriented = hamming(
            describeAt(upright, orb.ic_angle(upright, M_CENTRE, M_CENTRE)),
            describeAt(turned, orb.ic_angle(turned, M_CENTRE, M_CENTRE))
        );
        const unoriented = hamming(describeAt(upright, -1), describeAt(turned, -1));

        // Measured at the time of writing: 11 bits apart with orientation,
        // 87 without, out of 256. The bounds leave room for resampling jitter
        // while still failing loudly if orientation stops being applied.
        expect(oriented).toBeLessThan(40);
        expect(unoriented).toBeGreaterThan(60);
        expect(oriented).toBeLessThan(unoriented / 2);
    });
});
