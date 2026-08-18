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
 * Box blur: mean of the `(2r+1)²` neighbourhood, borders replicated, with EXACT
 * division by the window area.
 *
 * Since #114 this is what `imgproc.box_blur_gray` computes, so it is the
 * library's oracle: bit-exact at every radius and every size, including images
 * smaller than the kernel. (Before #114 the library scaled by the float `1/area`
 * and truncated, which came out 1 low at radius 3; that historical behaviour is
 * `refBoxBlurAsImplemented` below.)
 */
export function refBoxBlur(src: ArrayLike<number>, w: number, h: number, radius: number): Int32Array {
    return boxBlur(src, w, h, radius, false);
}

/**
 * The box blur as `imgproc.box_blur_gray` computed it BEFORE #114: scaling by
 * the float reciprocal `1/area` and truncating, rather than dividing exactly.
 *
 * The library no longer behaves this way — kept only to document why #114
 * mattered. The two references differ only where the reciprocal is not exactly
 * representable — radius 3, where `128 * 49 * (1/49) = 127.999999999999986`
 * truncates to 127. Do NOT use this as the oracle for the current library; use
 * `refBoxBlur`.
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
 * Separable Gaussian blur on `U8` data, reproducing jsfeat's arithmetic.
 *
 * Three details matter, and getting any of them wrong puts the result 1–2 grey
 * levels out on most pixels — which is how this looked before the
 * implementation was read properly:
 *
 *  1. The kernel is the INTEGER one (weights summing to ~256), not the float
 *     one. Pass `U8_t` to `get_gaussian_kernel`.
 *  2. Each pass ends with `min(sum >> 8, 255)` — an arithmetic shift, so it
 *     TRUNCATES. There is no `+128` rounding bias.
 *  3. The horizontal result is written back to the `U8` destination before the
 *     vertical pass reads it, so precision is quantised to 8 bits BETWEEN the
 *     two passes. Accumulating both passes at full width and shifting once at
 *     the end gives a different, slightly better answer.
 *
 * Borders replicate in both directions, unlike the derivative filters above.
 *
 * @param intKernel Integer kernel from `get_gaussian_kernel(size, sigma, k, U8_t)`.
 */
export function refGaussianBlurU8(
    src: ArrayLike<number>,
    w: number,
    h: number,
    intKernel: ArrayLike<number>
): Int32Array {
    // U8: integer kernel, truncating `>> 8` clamped to 255, and the
    // intermediate held in a U8-equivalent buffer between passes.
    return separableBlur(
        src,
        w,
        h,
        intKernel,
        (sum) => Math.min(sum >> 8, 255),
        () => new Int32Array(w * h)
    );
}

/**
 * The same separable blur down the `F32`/`S32` branch (`_convol` rather than
 * `_convol_u8`), which `gaussian_blur` takes for any non-`U8` source.
 *
 * The differences from the `U8` path are the ones that matter for a reference:
 *
 *  - the kernel is the FLOAT one, summing to 1, so there is no `>> 8`;
 *  - nothing is shifted or clamped — the raw sum is stored;
 *  - but the intermediate still round-trips through the destination between
 *    passes, so with an `F32` destination it is quantised to **float32**
 *    precision, not held at float64. Same structural quirk as the U8 path,
 *    different precision.
 *
 * @param floatKernel Kernel from `get_gaussian_kernel(size, sigma, k, F32_t)`.
 */
export function refGaussianBlurF32(
    src: ArrayLike<number>,
    w: number,
    h: number,
    floatKernel: ArrayLike<number>
): Float32Array {
    return separableBlur(
        src,
        w,
        h,
        floatKernel,
        (sum) => sum,
        () => new Float32Array(w * h)
    ) as Float32Array;
}

/**
 * Shared skeleton for both blur paths: replicate-padded separable convolution,
 * horizontal then vertical, with the intermediate passing through a buffer of
 * the destination's own type — which is where each path loses precision.
 */
function separableBlur(
    src: ArrayLike<number>,
    w: number,
    h: number,
    kernel: ArrayLike<number>,
    finish: (sum: number) => number,
    makeBuffer: () => Int32Array | Float32Array
) {
    const k = kernel.length;
    const half = k >> 1;

    /** One pass along a line of length `n`, with replicated ends. */
    const convolveLine = (read: (i: number) => number, n: number, out: Int32Array | Float32Array) => {
        const padded = new Float64Array(n + 2 * half);
        for (let i = 0; i < half; i++) padded[i] = read(0);
        for (let i = 0; i < n; i++) padded[half + i] = read(i);
        for (let i = 0; i < half; i++) padded[half + n + i] = read(n - 1);

        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let t = 0; t < k; t++) sum += padded[i + t] * kernel[t];
            out[i] = finish(sum);
        }
    };

    // pass 1: horizontal. `mid` has the destination's type, so storing here
    // reproduces the precision the implementation loses between passes.
    const mid = makeBuffer();
    const rowScratch = makeBuffer().subarray(0, w);
    for (let y = 0; y < h; y++) {
        convolveLine((x) => src[y * w + x], w, rowScratch);
        for (let x = 0; x < w; x++) mid[y * w + x] = rowScratch[x];
    }

    // pass 2: vertical over that quantised intermediate
    const out = makeBuffer();
    const colScratch = makeBuffer().subarray(0, h);
    for (let x = 0; x < w; x++) {
        convolveLine((y) => mid[y * w + x], h, colScratch);
        for (let y = 0; y < h; y++) out[y * w + x] = colScratch[y];
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
 * Affine warp with bilinear sampling — the specification `imgproc.warp_affine`
 * is checked against.
 *
 * Two details are needed for exactness, and each one cost a measurement:
 *
 *  1. Read the transform coefficients back out of the `matrix_t`. It is `F32`,
 *     so the implementation sees float32-rounded values, not whatever float64
 *     literals the caller wrote.
 *  2. Store the result through a `Uint8Array`. The library writes into a U8
 *     destination, so an out-of-range value would WRAP modulo 256 rather than
 *     clamp. Since #119 that can no longer happen — see below — but the store
 *     is kept faithful to the implementation rather than relying on that.
 *
 * The bounds test reads the FLOAT coordinates, not their truncation. `xs | 0`
 * rounds toward zero, so before #119 a source coordinate of `-0.5` gave
 * `ixs = 0`, passed `ixs >= 0`, and was "interpolated" with a negative weight
 * — extrapolating instead of interpolating. On a 23x17 test warp that affected
 * 13 pixels, 4 of which left [0,255] and wrapped, visible as speckle along the
 * top and left edges. Original jsfeat still behaves that way; the divergence is
 * registered in `tests/divergences.test.ts`.
 *
 * With the float test, both interpolation weights are always in [0, 1), so the
 * sampled value is a convex combination of four bytes and can no longer leave
 * [0, 255] at all.
 *
 * @param fill Value written where the source coordinate is out of bounds.
 */
export function refWarpAffine(
    src: ArrayLike<number>,
    srcW: number,
    srcH: number,
    dstW: number,
    dstH: number,
    coefficients: ArrayLike<number>,
    fill: number
): Uint8Array {
    const m = coefficients;
    const out = new Uint8Array(dstW * dstH);
    for (let y = 0; y < dstH; y++) {
        for (let x = 0; x < dstW; x++) {
            const xs = m[0] * x + m[1] * y + m[2];
            const ys = m[3] * x + m[4] * y + m[5];
            const ixs = xs | 0;
            const iys = ys | 0;

            if (xs >= 0 && ys >= 0 && ixs < srcW - 1 && iys < srcH - 1) {
                const a = xs - ixs;
                const b = ys - iys;
                const off = srcW * iys + ixs;
                const p0 = src[off] + a * (src[off + 1] - src[off]);
                const p1 = src[off + srcW] + a * (src[off + srcW + 1] - src[off + srcW]);
                out[y * dstW + x] = p0 + b * (p1 - p0);
            } else {
                out[y * dstW + x] = fill;
            }
        }
    }
    return out;
}

/**
 * Exact area-average downscale: each destination pixel is the mean of the
 * source rectangle it covers, weighting partially-covered source pixels by the
 * fraction of their area that falls inside.
 *
 * This is the DEFINITION of what `imgproc.resample` computes. It is
 * deliberately NOT a transcription of the implementation, which does the same
 * thing in 8.8 fixed point with four separate truncations — the per-column
 * weight `alpha`, the per-row weight `beta`, the normaliser `inv_scale_256`,
 * and the final store into a `U8` destination. Reproducing those would make the
 * comparison circular; comparing against the exact answer instead measures how
 * far the fast path drifts, which is the interesting question.
 *
 * Measured against `imgproc.resample` on 8-bit noise:
 *
 *  - at INTEGER ratios the library returns exactly `floor(this)`, every pixel;
 *  - at fractional ratios it lands up to ~1.4 grey levels low;
 *  - the float path (non-`U8` matrices) agrees to ~1e-5, so the drift is
 *    quantisation in the `U8` fast path, not bad resampling maths.
 *
 * The `- 1e-9` guards keep floating-point on `x1`/`y1` from pushing `ceil` one
 * past the last row or column, which reads `undefined` and poisons the sum with
 * `NaN` — a bug this reference had on its first outing.
 */
export function refAreaAverage(src: ArrayLike<number>, w: number, h: number, nw: number, nh: number): Float64Array {
    const scaleX = w / nw;
    const scaleY = h / nh;
    const out = new Float64Array(nw * nh);

    for (let dy = 0; dy < nh; dy++) {
        for (let dx = 0; dx < nw; dx++) {
            const x0 = dx * scaleX;
            const x1 = x0 + scaleX;
            const y0 = dy * scaleY;
            const y1 = y0 + scaleY;

            let acc = 0;
            for (let y = Math.floor(y0); y < Math.min(h, Math.ceil(y1 - 1e-9)); y++) {
                const coverY = Math.min(y1, y + 1) - Math.max(y0, y);
                for (let x = Math.floor(x0); x < Math.min(w, Math.ceil(x1 - 1e-9)); x++) {
                    const coverX = Math.min(x1, x + 1) - Math.max(x0, x);
                    acc += src[y * w + x] * coverX * coverY;
                }
            }
            out[dy * nw + dx] = acc / (scaleX * scaleY);
        }
    }
    return out;
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
