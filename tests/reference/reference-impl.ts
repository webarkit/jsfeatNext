/*
 *  reference-impl.ts
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

/**
 * Naive reference implementations for the ground-truth suite (issue #87,
 * category C).
 *
 * Every function here is written from the DEFINITION of the operation, in the
 * slowest and most obvious way possible — explicit neighbourhood loops, no
 * sliding sums, no fixed point, no transposed passes. They exist purely to be
 * compared against the optimised implementations in `src/`.
 *
 * That comparison catches a class of defect nothing else in the suite can:
 * parity can't (the vendored oracle shares jsfeat's code shape, so it shares
 * its bugs) and the invariant tests can't (they constrain the answer without
 * pinning it). #115 demonstrated the hole concretely — an off-by-one injected
 * into `box_blur_gray`'s loop bound changed WHICH loop phase computed a pixel
 * without changing the value for a uniform image, and no test noticed.
 *
 * Rules for anything added here:
 *
 *  1. Derive it from the operation's definition, never by reading `src/`.
 *     Transcribing the implementation would make the test circular.
 *  2. Prefer clarity over speed, always. These run on tiny images.
 *  3. Where jsfeat's convention is a genuine choice rather than a definition
 *     (border handling, rounding), state the choice and where it came from.
 */

/** Clamp `v` into `[0, n - 1]`. Used for replicated borders. */
function clamp(v: number, n: number) {
    return v < 0 ? 0 : v >= n ? n - 1 : v;
}

/**
 * Box blur: mean of the `(2r+1)²` neighbourhood, borders replicated.
 *
 * Verified bit-exact against `imgproc.box_blur_gray` for radius 1 and 2 on
 * non-uniform input. Radius 3 differs by at most 1 because the library scales
 * by the float `1/49` and truncates — see #114, which also covers the much
 * larger breakage when the image is smaller than the kernel.
 */
export function refBoxBlur(src: ArrayLike<number>, w: number, h: number, radius: number): Int32Array {
    return boxBlur(src, w, h, radius, false);
}

/**
 * The same box blur, but reproducing the library's ARITHMETIC as well as its
 * maths: it scales by the float reciprocal `1/area` and truncates, rather than
 * dividing exactly.
 *
 * This exists so the ground-truth comparison can be exact at every radius. The
 * two differ only where the reciprocal is not exactly representable — radius 3,
 * where `128 * 49 * (1/49) = 127.999999999999986` truncates to 127 (#114). With
 * an exact-division reference the only way to accommodate that is a ±1
 * tolerance, and a tolerance wide enough to absorb the defect is also wide
 * enough to hide a real off-by-one.
 */
export function refBoxBlurAsImplemented(src: ArrayLike<number>, w: number, h: number, radius: number): Int32Array {
    return boxBlur(src, w, h, radius, true);
}

function boxBlur(src: ArrayLike<number>, w: number, h: number, radius: number, floatScale: boolean): Int32Array {
    const out = new Int32Array(w * h);
    const area = (2 * radius + 1) * (2 * radius + 1);
    const scale = 1.0 / area;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let sum = 0;
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    sum += src[clamp(y + dy, h) * w + clamp(x + dx, w)];
                }
            }
            out[y * w + x] = floatScale ? Math.floor(sum * scale) : Math.floor(sum / area);
        }
    }
    return out;
}

/**
 * Grayscale conversion in the integer form jsfeat uses: BT.601 luma weights
 * scaled to 14-bit fixed point, with rounding via the `+8192` bias.
 *
 * NB this shares the *constants* with the implementation, so on its own it
 * only checks the loop and channel handling. `refGrayscaleExact` below is the
 * independent half — it validates the constants themselves against the real
 * BT.601 coefficients.
 */
export function refGrayscaleFixedPoint(rgba: ArrayLike<number>, w: number, h: number, channels = 4): Int32Array {
    const out = new Int32Array(w * h);
    for (let i = 0; i < w * h; i++) {
        const r = rgba[i * channels];
        const g = rgba[i * channels + 1];
        const b = rgba[i * channels + 2];
        out[i] = (r * 4899 + g * 9617 + b * 1868 + 8192) >> 14;
    }
    return out;
}

/**
 * Grayscale using the real-valued BT.601 coefficients (ITU-R BT.601-7 §2.5.1:
 * `Y = 0.299 R + 0.587 G + 0.114 B`). Independent of jsfeat's fixed-point
 * constants, so comparing against it tests whether those constants are right.
 */
export function refGrayscaleExact(rgba: ArrayLike<number>, w: number, h: number, channels = 4): Float64Array {
    const out = new Float64Array(w * h);
    for (let i = 0; i < w * h; i++) {
        out[i] = 0.299 * rgba[i * channels] + 0.587 * rgba[i * channels + 1] + 0.114 * rgba[i * channels + 2];
    }
    return out;
}

/**
 * Separable 3×3 derivative filters, matching jsfeat's border convention.
 *
 * The border handling is ASYMMETRIC and worth stating explicitly, because it
 * is a choice rather than a definition and it is easy to guess wrong:
 *
 *  - vertically it REFLECTS (`y = -1` reads row 1, `y = h` reads row `h-2`),
 *    which is OpenCV's `BORDER_REFLECT_101`;
 *  - horizontally it REPLICATES (`x = -1` reads column 0).
 *
 * Read off `imgproc.sobel_derivatives`: `srow0 = (y > 0 ? y - 1 : 1) * w`
 * versus `trow0[0] = trow0[1]`. Assuming replication in both directions makes
 * the interior match exactly and every border pixel disagree.
 *
 * @param smooth The smoothing triple: `[1, 2, 1]` for Sobel, `[3, 10, 3]` for
 *               Scharr. The derivative triple is `[-1, 0, 1]` for both.
 */
export function refDerivatives(src: ArrayLike<number>, w: number, h: number, smooth: [number, number, number]) {
    const [s0, s1, s2] = smooth;
    /** Vertical neighbours with reflected borders. */
    const above = (y: number) => (y > 0 ? y - 1 : 1);
    const below = (y: number) => (y < h - 1 ? y + 1 : h - 2);

    // pass 1, vertical: smooth into `sm`, differentiate into `dv`
    const sm = new Float64Array(w * h);
    const dv = new Float64Array(w * h);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const a = src[above(y) * w + x];
            const m = src[y * w + x];
            const b = src[below(y) * w + x];
            sm[y * w + x] = a * s0 + m * s1 + b * s2;
            dv[y * w + x] = b - a;
        }
    }

    // pass 2, horizontal with replicated borders: dx differentiates the
    // vertically-smoothed image, dy smooths the vertically-differentiated one
    const dx = new Float64Array(w * h);
    const dy = new Float64Array(w * h);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const l = clamp(x - 1, w);
            const r = clamp(x + 1, w);
            dx[y * w + x] = sm[y * w + r] - sm[y * w + l];
            dy[y * w + x] = dv[y * w + l] * s0 + dv[y * w + x] * s1 + dv[y * w + r] * s2;
        }
    }
    return { dx, dy };
}

/** Sobel: smoothing triple `[1, 2, 1]`. */
export function refSobel(src: ArrayLike<number>, w: number, h: number) {
    return refDerivatives(src, w, h, [1, 2, 1]);
}

/** Scharr: smoothing triple `[3, 10, 3]`. */
export function refScharr(src: ArrayLike<number>, w: number, h: number) {
    return refDerivatives(src, w, h, [3, 10, 3]);
}

/**
 * Summed-area tables by brute force: every cell is the full sum of the
 * rectangle above-left of it, recomputed from scratch. O(n⁴) and completely
 * uninterested in the incremental recurrence the real implementation uses,
 * which is the point.
 *
 * The tables are `(w+1) × (h+1)` with a zero first row and column.
 */
export function refIntegralImage(src: ArrayLike<number>, w: number, h: number) {
    const stride = w + 1;
    const sum = new Float64Array(stride * (h + 1));
    const sqsum = new Float64Array(stride * (h + 1));
    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let s = 0;
            let s2 = 0;
            for (let j = 0; j < y; j++) {
                for (let i = 0; i < x; i++) {
                    const v = src[j * w + i];
                    s += v;
                    s2 += v * v;
                }
            }
            sum[y * stride + x] = s;
            sqsum[y * stride + x] = s2;
        }
    }
    return { sum, sqsum, stride };
}
