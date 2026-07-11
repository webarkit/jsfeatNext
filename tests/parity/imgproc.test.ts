import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45)
 * for imgproc. Synthetic, deterministic images; every function compared with
 * the original jsfeat.imgproc on identical inputs.
 */

const W = 64;
const H = 48;
const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
const OU8C1 = jsfeat.U8_t | jsfeat.C1_t;

const ip = jsfeatNext.imgproc;

/** deterministic grayscale test pattern with edges, gradients and texture */
function grayValue(x: number, y: number): number {
    const g = (x * 3 + y * 5 + ((x * y) % 7) * 11) % 256;
    // add a bright box for hard edges (canny/hough material)
    return x > 20 && x < 40 && y > 15 && y < 35 ? 230 : g;
}

function grayPair(w = W, h = H) {
    const next = new jsfeatNext.matrix_t(w, h, U8C1);
    const orig = new jsfeat.matrix_t(w, h, OU8C1);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const v = grayValue(x, y);
            next.data[y * w + x] = v;
            orig.data[y * w + x] = v;
        }
    }
    return { next, orig };
}

function rgbaBuffer(w = W, h = H): Uint8Array {
    const buf = new Uint8Array(w * h * 4);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            buf[i] = (x * 5) % 256;
            buf[i + 1] = (y * 7) % 256;
            buf[i + 2] = (x + y * 3) % 256;
            buf[i + 3] = 255;
        }
    }
    return buf;
}

function expectSame(actual: ArrayLike<number>, expected: ArrayLike<number>, len: number, digits?: number) {
    for (let i = 0; i < len; i++) {
        if (digits === undefined) {
            expect(actual[i]).toBe(expected[i]);
        } else {
            expect(actual[i]).toBeCloseTo(expected[i], digits);
        }
    }
}

describe("parity: imgproc vs original jsfeat.imgproc", () => {
    it("grayscale (RGBA default code)", () => {
        const src = rgbaBuffer();
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.grayscale(src, W, H, dstN);
        jsfeat.imgproc.grayscale(src, W, H, dstO);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("grayscale (COLOR_BGRA2GRAY)", () => {
        const src = rgbaBuffer();
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.grayscale(src, W, H, dstN, jsfeatNext.COLOR_BGRA2GRAY);
        jsfeat.imgproc.grayscale(src, W, H, dstO, jsfeat.COLOR_BGRA2GRAY);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("resample (u8 fast path)", () => {
        const { next, orig } = grayPair();
        const dstN = new jsfeatNext.matrix_t(32, 24, U8C1);
        const dstO = new jsfeat.matrix_t(32, 24, OU8C1);
        ip.resample(next, dstN, 32, 24);
        jsfeat.imgproc.resample(orig, dstO, 32, 24);
        expectSame(dstN.data, dstO.data, 32 * 24);
    });

    it("box_blur_gray (default scale + NOSCALE)", () => {
        const { next, orig } = grayPair();
        for (const opt of [0, jsfeatNext.BOX_BLUR_NOSCALE]) {
            const dstN = new jsfeatNext.matrix_t(W, H, opt ? jsfeatNext.S32_t | jsfeatNext.C1_t : U8C1);
            const dstO = new jsfeat.matrix_t(W, H, opt ? jsfeat.S32_t | jsfeat.C1_t : OU8C1);
            ip.box_blur_gray(next, dstN, 2, opt);
            jsfeat.imgproc.box_blur_gray(orig, dstO, 2, opt);
            expectSame(dstN.data, dstO.data, W * H);
        }
    });

    it("gaussian_blur", () => {
        const { next, orig } = grayPair();
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.gaussian_blur(next, dstN, 5, 1.5);
        jsfeat.imgproc.gaussian_blur(orig, dstO, 5, 1.5);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("pyrdown", () => {
        const { next, orig } = grayPair();
        const dstN = new jsfeatNext.matrix_t(W >> 1, H >> 1, U8C1);
        const dstO = new jsfeat.matrix_t(W >> 1, H >> 1, OU8C1);
        ip.pyrdown(next, dstN);
        jsfeat.imgproc.pyrdown(orig, dstO);
        expectSame(dstN.data, dstO.data, (W >> 1) * (H >> 1));
    });

    it("scharr_derivatives", () => {
        const { next, orig } = grayPair();
        const dstN = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
        const dstO = new jsfeat.matrix_t(W, H, jsfeat.S32C2_t);
        ip.scharr_derivatives(next, dstN);
        jsfeat.imgproc.scharr_derivatives(orig, dstO);
        expectSame(dstN.data, dstO.data, W * H * 2);
    });

    it("sobel_derivatives", () => {
        const { next, orig } = grayPair();
        const dstN = new jsfeatNext.matrix_t(W, H, jsfeatNext.S32C2_t);
        const dstO = new jsfeat.matrix_t(W, H, jsfeat.S32C2_t);
        ip.sobel_derivatives(next, dstN);
        jsfeat.imgproc.sobel_derivatives(orig, dstO);
        expectSame(dstN.data, dstO.data, W * H * 2);
    });

    it("compute_integral_image (sum + sqsum + tilted)", () => {
        const { next, orig } = grayPair();
        const len = (W + 1) * (H + 1);
        const sumN = new Int32Array(len);
        const sqN = new Int32Array(len);
        const tiltN = new Int32Array(len);
        const sumO = new Int32Array(len);
        const sqO = new Int32Array(len);
        const tiltO = new Int32Array(len);
        ip.compute_integral_image(next, sumN as never, sqN as never, tiltN as never);
        jsfeat.imgproc.compute_integral_image(orig, sumO, sqO, tiltO);
        expectSame(sumN, sumO, len);
        expectSame(sqN, sqO, len);
        expectSame(tiltN, tiltO, len);
    });

    it("equalize_histogram", () => {
        const { next, orig } = grayPair();
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.equalize_histogram(next, dstN);
        jsfeat.imgproc.equalize_histogram(orig, dstO);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("canny", () => {
        const { next, orig } = grayPair();
        // blur first, as the samples do
        const blurN = new jsfeatNext.matrix_t(W, H, U8C1);
        const blurO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.gaussian_blur(next, blurN, 5, 1.2);
        jsfeat.imgproc.gaussian_blur(orig, blurO, 5, 1.2);
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.canny(blurN, dstN, 20, 60);
        jsfeat.imgproc.canny(blurO, dstO, 20, 60);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("warp_perspective", () => {
        const { next, orig } = grayPair();
        const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
        const tN = new jsfeatNext.matrix_t(3, 3, F32C1);
        const tO = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        const tr = jsfeatNext.transform;
        tr.perspective_4point_transform(tN, 0, 0, 4, 2, 63, 0, 60, 1, 63, 47, 62, 46, 0, 47, 2, 44);
        for (let i = 0; i < 9; i++) tO.data[i] = tN.data[i];
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.warp_perspective(next, dstN, tN, 0);
        jsfeat.imgproc.warp_perspective(orig, dstO, tO, 0);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("warp_affine", () => {
        const { next, orig } = grayPair();
        const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
        const tN = new jsfeatNext.matrix_t(3, 3, F32C1);
        const tO = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t);
        // rotation + slight scale + translation
        const ang = 0.3;
        const cs = Math.cos(ang) * 0.98;
        const sn = Math.sin(ang) * 0.98;
        const vals = [cs, -sn, 5.0, sn, cs, -3.0];
        for (let i = 0; i < 6; i++) {
            tN.data[i] = vals[i];
            tO.data[i] = vals[i];
        }
        const dstN = new jsfeatNext.matrix_t(W, H, U8C1);
        const dstO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.warp_affine(next, dstN, tN, 0);
        jsfeat.imgproc.warp_affine(orig, dstO, tO, 0);
        expectSame(dstN.data, dstO.data, W * H);
    });

    it("hough_transform — original jsfeat is BROKEN here, jsfeatNext fixes it (documented divergence)", () => {
        const { next, orig } = grayPair();
        // edge map first (already parity-verified above)
        const edgesN = new jsfeatNext.matrix_t(W, H, U8C1);
        const edgesO = new jsfeat.matrix_t(W, H, OU8C1);
        ip.canny(next, edgesN, 20, 60);
        jsfeat.imgproc.canny(orig, edgesO, 20, 60);

        // Parity finding (#45): the original jsfeat hough_transform uses
        // `min_theta`/`max_theta` without declaring them; under the bundle's
        // "use strict" IIFE that is a ReferenceError, so the distributed
        // jsfeat function is unusable. jsfeatNext declares them (fix).
        expect(() => jsfeat.imgproc.hough_transform(edgesO, 1, Math.PI / 180, 25)).toThrow(ReferenceError);

        // jsfeatNext's fixed version works and returns sane [rho, theta] lines
        const linesN = ip.hough_transform(edgesN, 1, Math.PI / 180, 25);
        expect(Array.isArray(linesN)).toBe(true);
        expect(linesN.length).toBeGreaterThan(0);
        for (const line of linesN as unknown as [number, number][]) {
            expect(Number.isFinite(line[0])).toBe(true);
            expect(line[1]).toBeGreaterThanOrEqual(0);
            expect(line[1]).toBeLessThanOrEqual(Math.PI);
        }
    });
});
