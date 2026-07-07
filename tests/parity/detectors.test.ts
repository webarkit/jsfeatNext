import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import { yape } from "../../src/yape/yape";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45)
 * for the feature detectors/descriptors/tracker:
 * fast_corners, yape06, yape, orb.describe, optical_flow_lk.track.
 *
 * API parity note (Axis 2): all of these are STATIC namespaces in the
 * original jsfeat but INSTANCE classes in jsfeatNext (except yape, which is
 * instantiated in both — original: new jsfeat.yape()).
 */

const W = 96;
const H = 72;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;

/** deterministic PRNG (mulberry32) for reproducible shape placement */
function rng(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/**
 * Deterministic corner-rich image: bright squares of varying size/intensity
 * scattered on a dark gradient (isolated square corners are ideal FAST/YAPE
 * material). shiftX/shiftY translate the shapes (for optical-flow frames).
 */
function grayPair(shiftX = 0, shiftY = 0) {
    const next = new jsfeatNext.matrix_t(W, H, U8C1);
    const orig = new jsfeat.matrix_t(W, H, OU8C1);
    const px = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            px[y * W + x] = 20 + ((x + y) & 7); // dark textured base
        }
    }
    const rand = rng(99);
    for (let s = 0; s < 25; s++) {
        const cx = 8 + Math.floor(rand() * (W - 24)) + shiftX;
        const cy = 8 + Math.floor(rand() * (H - 24)) + shiftY;
        const size = 3 + Math.floor(rand() * 6);
        const val = 120 + Math.floor(rand() * 130);
        for (let y = cy; y < Math.min(H, cy + size); y++) {
            for (let x = cx; x < Math.min(W, cx + size); x++) {
                if (x >= 0 && y >= 0) px[y * W + x] = val;
            }
        }
    }
    next.data.set(px);
    orig.data.set(px);
    return { next, orig };
}

function makeCorners(n: number) {
    const nextC = Array.from({ length: n }, () => new jsfeatNext.keypoint_t(0, 0, 0, 0, -1));
    const origC = Array.from({ length: n }, () => new jsfeat.keypoint_t(0, 0, 0, 0, -1));
    return { nextC, origC };
}

function expectSameCorners(
    nextC: { x: number; y: number; score: number }[],
    origC: { x: number; y: number; score: number }[],
    count: number
) {
    for (let i = 0; i < count; i++) {
        expect(nextC[i].x).toBe(origC[i].x);
        expect(nextC[i].y).toBe(origC[i].y);
        expect(nextC[i].score).toBeCloseTo(origC[i].score, 5);
    }
}

describe("parity: fast_corners vs original jsfeat.fast_corners", () => {
    it("set_threshold + detect find identical corners", () => {
        const { next, orig } = grayPair();
        const { nextC, origC } = makeCorners(W * H);

        const fc = new jsfeatNext.fast_corners();
        fc.set_threshold(20);
        jsfeat.fast_corners.set_threshold(20);

        const nN = fc.detect(next, nextC, 3);
        const nO = jsfeat.fast_corners.detect(orig, origC, 3);

        expect(nN).toBe(nO);
        expect(nN).toBeGreaterThan(0);
        expectSameCorners(nextC, origC, nN);
    });
});

describe("parity: yape06 vs original jsfeat.yape06", () => {
    it("detect finds identical keypoints (default thresholds)", () => {
        const { next, orig } = grayPair();
        const { nextC, origC } = makeCorners(W * H);

        const y06 = new jsfeatNext.yape06();
        // original is a static namespace with mutable thresholds; align them
        jsfeat.yape06.laplacian_threshold = y06.laplacian_threshold;
        jsfeat.yape06.min_eigen_value_threshold = y06.min_eigen_value_threshold;

        const nN = y06.detect(next, nextC, 5);
        const nO = jsfeat.yape06.detect(orig, origC, 5);

        expect(nN).toBe(nO);
        expect(nN).toBeGreaterThan(0);
        expectSameCorners(nextC, origC, nN);
    });
});

describe("parity: yape vs original jsfeat.yape", () => {
    it("init + detect find identical keypoints", () => {
        const { next, orig } = grayPair();
        const { nextC, origC } = makeCorners(W * H);

        // API divergence (Axis 2): original jsfeat.yape is a STATIC namespace
        // (jsfeat.yape.init(...)), jsfeatNext's yape is a class to instantiate.
        const yN = new yape();
        yN.init(W, H, 5, 1);
        jsfeat.yape.init(W, H, 5, 1);

        const nN = yN.detect(next, nextC, 4);
        const nO = jsfeat.yape.detect(orig, origC, 4);

        expect(nN).toBe(nO);
        expect(nN).toBeGreaterThan(0);
        expectSameCorners(nextC, origC, nN);
    });
});

describe("parity: orb.describe vs original jsfeat.orb", () => {
    it("produces identical 32-byte descriptors for identical corners", () => {
        const { next, orig } = grayPair();

        // corners from the (already parity-verified) FAST detector
        const { nextC, origC } = makeCorners(W * H);
        const fc = new jsfeatNext.fast_corners();
        fc.set_threshold(20);
        jsfeat.fast_corners.set_threshold(20);
        const count = fc.detect(next, nextC, 20); // generous border for 32px patches
        const countO = jsfeat.fast_corners.detect(orig, origC, 20);
        expect(count).toBe(countO);
        expect(count).toBeGreaterThan(0);
        // deterministic angles (orb.describe reads corner.angle)
        for (let i = 0; i < count; i++) {
            const ang = ((i * 37) % 360) * (Math.PI / 180);
            nextC[i].angle = ang;
            origC[i].angle = ang;
        }

        const descN = new jsfeatNext.matrix_t(32, count, U8C1);
        const descO = new jsfeat.matrix_t(32, count, OU8C1);
        const orb = new jsfeatNext.orb();
        orb.describe(next, nextC, count, descN);
        jsfeat.orb.describe(orig, origC, count, descO);

        for (let i = 0; i < count * 32; i++) {
            expect(descN.data[i]).toBe(descO.data[i]);
        }
    });
});

describe("parity: optical_flow_lk vs original jsfeat.optical_flow_lk", () => {
    it("tracks identical points across an identical shift", () => {
        // 2 levels + 9px window: with more levels the top-level image
        // (W>>2 = 24px) can't fit a tracking window and every point fails
        const levels = 2;
        const { next: prevN, orig: prevO } = grayPair();
        const { next: currN, orig: currO } = grayPair(3, 2); // shifted frame

        const prevPyrN = new jsfeatNext.pyramid_t(levels);
        prevPyrN.allocate(W, H, U8C1);
        prevPyrN.build(prevN, false);
        const currPyrN = new jsfeatNext.pyramid_t(levels);
        currPyrN.allocate(W, H, U8C1);
        currPyrN.build(currN, false);

        const prevPyrO = new jsfeat.pyramid_t(levels);
        prevPyrO.allocate(W, H, OU8C1);
        prevPyrO.build(prevO, false);
        const currPyrO = new jsfeat.pyramid_t(levels);
        currPyrO.allocate(W, H, OU8C1);
        currPyrO.build(currO, false);

        // track the FAST corners of the prev frame (grid points on the flat
        // background fail the min-eigenvalue check on both sides — aperture
        // problem — so corners are the meaningful trackable set)
        const { nextC } = makeCorners(W * H);
        const fc = new jsfeatNext.fast_corners();
        fc.set_threshold(20);
        const nCorners = fc.detect(prevN, nextC, 16);
        const pts: number[] = [];
        for (let i = 0; i < nCorners; i++) {
            pts.push(nextC[i].x, nextC[i].y);
        }
        const count = pts.length >> 1;
        expect(count).toBeGreaterThan(0);
        const prevXYN = Float32Array.from(pts);
        const currXYN = new Float32Array(count * 2);
        const statusN = new Uint8Array(count);
        const prevXYO = Float32Array.from(pts);
        const currXYO = new Float32Array(count * 2);
        const statusO = new Uint8Array(count);

        const lk = new jsfeatNext.optical_flow_lk();
        lk.track(prevPyrN, currPyrN, prevXYN, currXYN, count, 9, 30, statusN, 0.01, 0.0001);
        jsfeat.optical_flow_lk.track(prevPyrO, currPyrO, prevXYO, currXYO, count, 9, 30, statusO, 0.01, 0.0001);

        for (let i = 0; i < count; i++) {
            expect(statusN[i]).toBe(statusO[i]);
            if (statusN[i]) {
                expect(currXYN[i * 2]).toBeCloseTo(currXYO[i * 2], 4);
                expect(currXYN[i * 2 + 1]).toBeCloseTo(currXYO[i * 2 + 1], 4);
            }
        }
        // sanity: at least some points tracked
        expect(Array.from(statusN).some((s) => s === 1)).toBe(true);
    });
});
