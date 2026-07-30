import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import { U8C1, cornerScene, uniformImage, keypointPool, hammingDistance } from "./helpers";

/**
 * Property/invariant tests for the detectors and the ORB descriptor
 * (issue #87, phase 3).
 *
 * These are the modules where invariant testing earns the most: the parity
 * suite can only say "the same corners as jsfeat", and for future detectors
 * with no oracle at all (`haar`/`bbf`, #43/#44) that option disappears
 * entirely. The invariants below are properties a corner detector must have
 * regardless of implementation:
 *
 *  - a structureless image yields nothing (with a counter-case proving the
 *    zero is meaningful, not a detector that always returns nothing);
 *  - results respect the requested border;
 *  - detections are EQUIVARIANT under translation — shift the scene, the
 *    corners shift with it;
 *  - detections are INVARIANT under a global brightness change, because FAST
 *    and YAPE both threshold intensity *differences*.
 *
 * Every behaviour was characterised against the library before being asserted.
 * The translation and brightness properties hold exactly (bit-for-bit), which
 * is why they are asserted as exact set equality rather than with a tolerance.
 */

const W = 96;
const H = 72;

/** Corner coordinates as a comparable set, restricted to a safe interior window. */
function interiorSet(points: { x: number; y: number }[], count: number, margin: number, dx = 0, dy = 0) {
    const s = new Set<string>();
    for (let i = 0; i < count; i++) {
        const x = points[i].x - dx;
        const y = points[i].y - dy;
        if (x >= margin && x < W - margin && y >= margin && y < H - margin) s.add(`${x},${y}`);
    }
    return s;
}

describe("detector invariants", () => {
    describe("fast_corners", () => {
        const fc = jsfeatNext.fast_corners;

        it("finds nothing in a uniform image, at any threshold", () => {
            // No intensity differences at all, so no pixel can beat any
            // threshold. Independent of the threshold value.
            for (const level of [0, 128, 255]) {
                for (const t of [1, 20, 100]) {
                    fc.set_threshold(t);
                    expect(fc.detect(uniformImage(W, H, level), keypointPool(W * H), 3)).toBe(0);
                }
            }
        });

        it("does find corners in a corner-rich scene", () => {
            // Counter-case for the test above: without this, a detector that
            // always returned 0 would pass every "finds nothing" assertion.
            fc.set_threshold(20);
            expect(fc.detect(cornerScene(W, H), keypointPool(W * H), 3)).toBeGreaterThan(0);
        });

        it("set_threshold clamps to [0, 255] and returns what it stored", () => {
            expect(fc.set_threshold(-5)).toBe(0);
            expect(fc.set_threshold(900)).toBe(255);
            expect(fc.set_threshold(37)).toBe(37);
        });

        it("every detected corner respects the requested border", () => {
            const img = cornerScene(W, H);
            fc.set_threshold(20);
            for (const border of [3, 5, 10, 20]) {
                const corners = keypointPool(W * H);
                const n = fc.detect(img, corners, border);
                expect(n).toBeGreaterThan(0);
                for (let i = 0; i < n; i++) {
                    expect(corners[i].x).toBeGreaterThanOrEqual(border);
                    expect(corners[i].x).toBeLessThan(W - border);
                    expect(corners[i].y).toBeGreaterThanOrEqual(border);
                    expect(corners[i].y).toBeLessThan(H - border);
                }
            }
        });

        it("finds no corners at the maximum threshold", () => {
            // Nothing can exceed a 255 intensity difference in 8-bit data.
            fc.set_threshold(255);
            expect(fc.detect(cornerScene(W, H), keypointPool(W * H), 3)).toBe(0);
        });

        it("the corner count is non-increasing as the threshold rises", () => {
            // The candidate set shrinks monotonically with the threshold. NB:
            // this is a structural trend rather than a strict theorem, because
            // 3x3 non-maximum suppression could in principle let a previously
            // suppressed corner survive once a stronger neighbour drops out.
            // Asserted because it is the behaviour the issue asks for and a
            // useful regression signal; it holds across this ladder.
            const img = cornerScene(W, H);
            let prev = Infinity;
            for (const t of [5, 10, 20, 40, 80, 160, 255]) {
                fc.set_threshold(t);
                const n = fc.detect(img, keypointPool(W * H), 3);
                expect(n).toBeLessThanOrEqual(prev);
                prev = n;
            }
        });

        it("is equivariant under translation: shift the scene, the corners shift too", () => {
            const dx = 4;
            const dy = 3;
            fc.set_threshold(20);

            const a = keypointPool(W * H);
            const na = fc.detect(cornerScene(W, H), a, 8);
            const b = keypointPool(W * H);
            const nb = fc.detect(cornerScene(W, H, { dx, dy }), b, 8);

            // Compare well inside the image: near the edges the two scenes
            // genuinely differ, since content shifted in from outside.
            const setA = interiorSet(a, na, 12);
            const setB = interiorSet(b, nb, 12, dx, dy);
            expect(setA.size).toBeGreaterThan(0);
            expect([...setB].sort()).toEqual([...setA].sort());
        });

        it("is invariant to a global brightness offset", () => {
            // FAST thresholds centre-vs-circle DIFFERENCES, so adding a
            // constant cannot change any decision. cornerScene keeps
            // intensities <= 200 so +20 cannot saturate and break the premise.
            fc.set_threshold(20);
            const a = keypointPool(W * H);
            const na = fc.detect(cornerScene(W, H), a, 8);
            const b = keypointPool(W * H);
            const nb = fc.detect(cornerScene(W, H, { offset: 20 }), b, 8);

            expect(na).toBeGreaterThan(0);
            expect(nb).toBe(na);
            for (let i = 0; i < na; i++) {
                expect(b[i].x).toBe(a[i].x);
                expect(b[i].y).toBe(a[i].y);
                expect(b[i].score).toBe(a[i].score);
            }
        });
    });

    describe("yape06", () => {
        const y06 = jsfeatNext.yape06;

        it("finds nothing in a uniform image but does find keypoints in a scene", () => {
            expect(y06.detect(uniformImage(W, H, 128), keypointPool(W * H), 5)).toBe(0);
            expect(y06.detect(cornerScene(W, H), keypointPool(W * H), 5)).toBeGreaterThan(0);
        });

        it("every detected keypoint respects the requested border", () => {
            const img = cornerScene(W, H);
            for (const border of [5, 10, 20]) {
                const points = keypointPool(W * H);
                const n = y06.detect(img, points, border);
                for (let i = 0; i < n; i++) {
                    expect(points[i].x).toBeGreaterThanOrEqual(border);
                    expect(points[i].x).toBeLessThan(W - border);
                    expect(points[i].y).toBeGreaterThanOrEqual(border);
                    expect(points[i].y).toBeLessThan(H - border);
                }
            }
        });

        it("is equivariant under translation", () => {
            const dx = 4;
            const dy = 3;
            const a = keypointPool(W * H);
            const na = y06.detect(cornerScene(W, H), a, 8);
            const b = keypointPool(W * H);
            const nb = y06.detect(cornerScene(W, H, { dx, dy }), b, 8);

            const setA = interiorSet(a, na, 12);
            const setB = interiorSet(b, nb, 12, dx, dy);
            expect(setA.size).toBeGreaterThan(0);
            expect([...setB].sort()).toEqual([...setA].sort());
        });

        it("is invariant to a global brightness offset", () => {
            // yape06 thresholds a Laplacian and an eigenvalue ratio, both built
            // from differences, so a constant offset cancels.
            const a = keypointPool(W * H);
            const na = y06.detect(cornerScene(W, H), a, 8);
            const b = keypointPool(W * H);
            const nb = y06.detect(cornerScene(W, H, { offset: 20 }), b, 8);

            expect(na).toBeGreaterThan(0);
            expect(nb).toBe(na);
            for (let i = 0; i < na; i++) {
                expect(b[i].x).toBe(a[i].x);
                expect(b[i].y).toBe(a[i].y);
            }
        });

        it("the keypoint count is non-increasing as laplacian_threshold rises", () => {
            const img = cornerScene(W, H);
            const saved = y06.laplacian_threshold;
            try {
                let prev = Infinity;
                for (const t of [10, 20, 30, 50, 80, 120]) {
                    y06.laplacian_threshold = t;
                    const n = y06.detect(img, keypointPool(W * H), 5);
                    expect(n).toBeLessThanOrEqual(prev);
                    prev = n;
                }
            } finally {
                // yape06 is a singleton with mutable thresholds — restore it so
                // this test cannot leak into the parity suite.
                y06.laplacian_threshold = saved;
            }
        });
    });

    describe("yape", () => {
        // Use the public singleton, like every other module here: since 0.9.0
        // (#41) jsfeatNext.yape IS an instance, so `new yape()` would be
        // testing a path callers are told not to take. yape is the one
        // detector needing init() before detect().
        const y = jsfeatNext.yape;

        it("finds nothing in a uniform image but does find keypoints in a scene", () => {
            y.init(W, H, 5, 1);
            expect(y.detect(uniformImage(W, H, 128), keypointPool(W * H), 4)).toBe(0);
            expect(y.detect(cornerScene(W, H), keypointPool(W * H), 4)).toBeGreaterThan(0);
        });

        it("every detected keypoint respects the requested border", () => {
            y.init(W, H, 5, 1);
            const points = keypointPool(W * H);
            const border = 4;
            const n = y.detect(cornerScene(W, H), points, border);
            expect(n).toBeGreaterThan(0);
            for (let i = 0; i < n; i++) {
                expect(points[i].x).toBeGreaterThanOrEqual(border);
                expect(points[i].x).toBeLessThan(W - border);
                expect(points[i].y).toBeGreaterThanOrEqual(border);
                expect(points[i].y).toBeLessThan(H - border);
            }
        });
    });

    describe("orb.describe", () => {
        const orb = jsfeatNext.orb;
        const fc = jsfeatNext.fast_corners;

        /** FAST corners of the scene with fixed angles, far enough from the edges. */
        function describedScene(offset: number, border: number) {
            fc.set_threshold(20);
            const img = cornerScene(W, H, { offset });
            const corners = keypointPool(W * H);
            // detect on the UNLIFTED image so both runs describe the same points
            const n = fc.detect(cornerScene(W, H), corners, border);
            for (let i = 0; i < n; i++) corners[i].angle = 0;
            const descriptors = new jsfeatNext.matrix_t(32, n, U8C1);
            orb.describe(img, corners, n, descriptors);
            return { n, descriptors, corners };
        }

        it("is deterministic", () => {
            const a = describedScene(0, 16);
            const b = describedScene(0, 16);
            expect(a.n).toBeGreaterThan(0);
            expect(hammingDistance(a.descriptors.data, b.descriptors.data, a.n * 32)).toBe(0);
        });

        it("sizes the destination to 32 bytes per keypoint", () => {
            const { n, descriptors } = describedScene(0, 16);
            expect(descriptors.cols).toBe(32);
            expect(descriptors.rows).toBe(n);
            expect(descriptors.type & jsfeatNext.U8_t).toBeTruthy();
        });

        it("is invariant to a global brightness offset when the patch is inside the image", () => {
            // The descriptor is a set of `p(a) < p(b)` comparisons on a warped
            // patch. Bilinear interpolation is linear and the offset is an
            // integer, so every sampled value shifts by the same constant and
            // no comparison can flip — provided every sample lands inside the
            // image. See the next test for what "inside" costs.
            const base = describedScene(0, 20);
            const lifted = describedScene(20, 20);
            expect(base.n).toBeGreaterThan(0);
            expect(hammingDistance(base.descriptors.data, lifted.descriptors.data, base.n * 32)).toBe(0);
        });

        it("loses that invariance near the image edge, because the patch fill value is a constant", () => {
            // Characterizes the behaviour tracked by issue #110.
            //
            // rectify_patch() calls warp_affine(..., fill_value = 128). Patch
            // pixels sampled outside the image get exactly 128 whatever the
            // image brightness, so those comparisons DO flip when the image is
            // lifted.
            //
            // The margin that matters is NOT the 32px patch size: only the 256
            // sampled pairs are read, and bit_pattern_31's largest coordinate
            // component is 13, so the furthest sample sits 13*sqrt(2) = 18.39px
            // from the keypoint. Rotation preserves that radius, so with the
            // bilinear neighbour the guaranteed-safe margin is 20 — which is
            // why the test above uses border 20. (Measured on a single keypoint
            // swept over 2000 angles: contamination appears at distance <= 16
            // and vanishes from 17 up, so 20 has slack rather than being tight.)
            const base = describedScene(0, 8);
            const lifted = describedScene(20, 8);
            const bits = base.n * 32 * 8;
            const distance = hammingDistance(base.descriptors.data, lifted.descriptors.data, base.n * 32);
            expect(distance).toBeGreaterThan(0);
            // ...but only a handful of bits: only edge-adjacent patches suffer.
            expect(distance).toBeLessThan(bits * 0.01);
        });

        it("gives clearly different descriptors to different keypoints", () => {
            // Without this, the invariance assertions above would be vacuous —
            // a describe() that returned a constant would satisfy them all.
            const { n, descriptors } = describedScene(0, 16);
            expect(n).toBeGreaterThan(2);
            let minDistance = Infinity;
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    minDistance = Math.min(
                        minDistance,
                        hammingDistance(
                            descriptors.data.subarray(i * 32, i * 32 + 32),
                            descriptors.data.subarray(j * 32, j * 32 + 32),
                            32
                        )
                    );
                }
            }
            // Distinct 256-bit descriptors sit far apart (observed min 47).
            expect(minDistance).toBeGreaterThan(20);
        });
    });
});
