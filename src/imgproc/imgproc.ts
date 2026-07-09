import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { _resample, _resample_u8 } from "./resample";
import { _convol, _convol_u8 } from "./convol";
import { math } from "../math/math";

/**
 * Image-processing operations: color conversion, resampling, blurs, image
 * derivatives, integral images, histogram equalization, Canny edges, Hough
 * lines and geometric warps. All methods operate on {@link matrix_t} images
 * and follow the original `jsfeat.imgproc` semantics.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export class imgproc extends jsfeatNext {
    constructor() {
        super();
    }

    /**
     * Converts an interleaved color buffer to a grayscale image using the
     * integer-scaled BT.601 luma weights (`0.299 R + 0.587 G + 0.114 B` in
     * 14-bit fixed point).
     *
     * @param src  Source pixel buffer (e.g. canvas `ImageData.data`).
     * @param w    Source width. @param h Source height.
     * @param dst  Destination grayscale matrix (resized to `w`×`h`, 1 channel).
     * @param code Channel layout of `src`: one of the `COLOR_*2GRAY`
     *             constants. Defaults to `COLOR_RGBA2GRAY`.
     */
    grayscale(src: Uint8Array | Uint8ClampedArray, w: number, h: number, dst: matrix_t, code?: number): void {
        // this is default image data representation in browser
        if (typeof code === "undefined") {
            code = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
        }
        let x = 0,
            y = 0,
            i = 0,
            j = 0,
            ir = 0,
            jr = 0;
        let coeff_r = 4899,
            coeff_g = 9617,
            coeff_b = 1868,
            cn = 4;

        if (code == JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            coeff_r = 1868;
            coeff_b = 4899;
        }
        if (code == JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            cn = 3;
        }
        const cn2 = cn << 1,
            cn3 = (cn * 3) | 0;

        dst.resize(w, h, 1);
        const dst_u8 = dst.data;

        for (y = 0; y < h; ++y, j += w, i += w * cn) {
            for (x = 0, ir = i, jr = j; x <= w - 4; x += 4, ir += cn << 2, jr += 4) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 1] =
                    (src[ir + cn] * coeff_r + src[ir + cn + 1] * coeff_g + src[ir + cn + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 2] =
                    (src[ir + cn2] * coeff_r + src[ir + cn2 + 1] * coeff_g + src[ir + cn2 + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 3] =
                    (src[ir + cn3] * coeff_r + src[ir + cn3 + 1] * coeff_g + src[ir + cn3 + 2] * coeff_b + 8192) >> 14;
            }
            for (; x < w; ++x, ++jr, ir += cn) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
            }
        }
    }

    /**
     * Downsamples `src` to `nw`×`nh` by area averaging (derived from the CCV
     * library). Chooses the fixed-point `U8` fast path when both matrices are
     * `U8` and the area ratio is below 256, the float path otherwise.
     * No-op unless both target dimensions are strictly smaller.
     *
     * @param src Source image. @param dst Destination (resized to `nw`×`nh`).
     * @param nw  Target width. @param nh Target height.
     */
    resample(src: matrix_t, dst: matrix_t, nw: number, nh: number): void {
        const h = src.rows,
            w = src.cols;
        if (h > nh && w > nw) {
            dst.resize(nw, nh, src.channel);
            // using the fast alternative (fix point scale, 0x100 to avoid overflow)
            if (src.type & JSFEAT_CONSTANTS.U8_t && dst.type & JSFEAT_CONSTANTS.U8_t && (h * w) / (nh * nw) < 0x100) {
                _resample_u8(src, dst, this.cache, nw, nh);
            } else {
                _resample(src, dst, this.cache, nw, nh);
            }
        }
    }

    /**
     * Box blur of a grayscale image via a sliding-window running sum
     * (two transposing passes, O(1) per pixel regardless of radius).
     *
     * @param src     Source grayscale image.
     * @param dst     Destination (resized to match `src`). Use an `S32`
     *                destination with `BOX_BLUR_NOSCALE` to avoid overflow.
     * @param radius  Blur radius; the window is `(2·radius + 1)²`.
     * @param options `BOX_BLUR_NOSCALE` keeps raw window sums instead of
     *                dividing by the window area. Defaults to 0 (scaled).
     */
    box_blur_gray(src: matrix_t, dst: matrix_t, radius: number, options: number): void {
        if (typeof options === "undefined") {
            options = 0;
        }
        const w = src.cols,
            h = src.rows,
            h2 = h << 1,
            w2 = w << 1;
        let i = 0,
            x = 0,
            y = 0,
            end = 0;
        const windowSize = ((radius << 1) + 1) | 0;
        const radiusPlusOne = (radius + 1) | 0,
            radiusPlus2 = (radiusPlusOne + 1) | 0;
        const scale = options & JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);

        const tmp_buff = this.cache.get_buffer((w * h) << 2);

        let sum = 0,
            dstIndex = 0,
            srcIndex = 0,
            nextPixelIndex = 0,
            previousPixelIndex = 0;
        const data_i32 = tmp_buff.i32; // to prevent overflow
        let data_u8 = src.data;
        let hold = 0;

        dst.resize(w, h, src.channel);

        // first pass
        // no need to scale
        //data_u8 = src.data;
        //data_i32 = tmp;
        for (y = 0; y < h; ++y) {
            dstIndex = y;
            sum = radiusPlusOne * data_u8[srcIndex];

            for (i = (srcIndex + 1) | 0, end = (srcIndex + radius) | 0; i <= end; ++i) {
                sum += data_u8[i];
            }

            nextPixelIndex = (srcIndex + radiusPlusOne) | 0;
            previousPixelIndex = srcIndex;
            hold = data_u8[previousPixelIndex];
            for (x = 0; x < radius; ++x, dstIndex += h) {
                data_i32[dstIndex] = sum;
                sum += data_u8[nextPixelIndex] - hold;
                nextPixelIndex++;
            }
            for (; x < w - radiusPlus2; x += 2, dstIndex += h2) {
                data_i32[dstIndex] = sum;
                sum += data_u8[nextPixelIndex] - data_u8[previousPixelIndex];

                data_i32[dstIndex + h] = sum;
                sum += data_u8[nextPixelIndex + 1] - data_u8[previousPixelIndex + 1];

                nextPixelIndex += 2;
                previousPixelIndex += 2;
            }
            for (; x < w - radiusPlusOne; ++x, dstIndex += h) {
                data_i32[dstIndex] = sum;
                sum += data_u8[nextPixelIndex] - data_u8[previousPixelIndex];

                nextPixelIndex++;
                previousPixelIndex++;
            }

            hold = data_u8[nextPixelIndex - 1];
            for (; x < w; ++x, dstIndex += h) {
                data_i32[dstIndex] = sum;

                sum += hold - data_u8[previousPixelIndex];
                previousPixelIndex++;
            }

            srcIndex += w;
        }
        //
        // second pass
        srcIndex = 0;
        //data_i32 = tmp; // this is a transpose
        data_u8 = dst.data;

        // dont scale result
        if (scale == 1) {
            for (y = 0; y < w; ++y) {
                dstIndex = y;
                sum = radiusPlusOne * data_i32[srcIndex];

                for (i = (srcIndex + 1) | 0, end = (srcIndex + radius) | 0; i <= end; ++i) {
                    sum += data_i32[i];
                }

                nextPixelIndex = srcIndex + radiusPlusOne;
                previousPixelIndex = srcIndex;
                hold = data_i32[previousPixelIndex];

                for (x = 0; x < radius; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum;
                    sum += data_i32[nextPixelIndex] - hold;
                    nextPixelIndex++;
                }
                for (; x < h - radiusPlus2; x += 2, dstIndex += w2) {
                    data_u8[dstIndex] = sum;
                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];

                    data_u8[dstIndex + w] = sum;
                    sum += data_i32[nextPixelIndex + 1] - data_i32[previousPixelIndex + 1];

                    nextPixelIndex += 2;
                    previousPixelIndex += 2;
                }
                for (; x < h - radiusPlusOne; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum;

                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
                    nextPixelIndex++;
                    previousPixelIndex++;
                }
                hold = data_i32[nextPixelIndex - 1];
                for (; x < h; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum;

                    sum += hold - data_i32[previousPixelIndex];
                    previousPixelIndex++;
                }

                srcIndex += h;
            }
        } else {
            for (y = 0; y < w; ++y) {
                dstIndex = y;
                sum = radiusPlusOne * data_i32[srcIndex];

                for (i = (srcIndex + 1) | 0, end = (srcIndex + radius) | 0; i <= end; ++i) {
                    sum += data_i32[i];
                }

                nextPixelIndex = srcIndex + radiusPlusOne;
                previousPixelIndex = srcIndex;
                hold = data_i32[previousPixelIndex];

                for (x = 0; x < radius; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum * scale;
                    sum += data_i32[nextPixelIndex] - hold;
                    nextPixelIndex++;
                }
                for (; x < h - radiusPlus2; x += 2, dstIndex += w2) {
                    data_u8[dstIndex] = sum * scale;
                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];

                    data_u8[dstIndex + w] = sum * scale;
                    sum += data_i32[nextPixelIndex + 1] - data_i32[previousPixelIndex + 1];

                    nextPixelIndex += 2;
                    previousPixelIndex += 2;
                }
                for (; x < h - radiusPlusOne; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum * scale;

                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
                    nextPixelIndex++;
                    previousPixelIndex++;
                }
                hold = data_i32[nextPixelIndex - 1];
                for (; x < h; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum * scale;

                    sum += hold - data_i32[previousPixelIndex];
                    previousPixelIndex++;
                }

                srcIndex += h;
            }
        }

        this.cache.put_buffer(tmp_buff);
    }

    /**
     * Gaussian blur via separable convolution. Kernel weights come from
     * `math.get_gaussian_kernel`; `U8` images use the integer fast path.
     *
     * @param src         Source image.
     * @param dst         Destination (resized to match `src`).
     * @param kernel_size Number of taps; 0 derives it from `sigma`.
     * @param sigma       Gaussian σ; 0 derives it from `kernel_size`.
     */
    gaussian_blur(src: matrix_t, dst: matrix_t, kernel_size: number, sigma: number): void {
        const jsfeatmath = new math();
        if (typeof sigma === "undefined") {
            sigma = 0.0;
        }
        if (typeof kernel_size === "undefined") {
            kernel_size = 0;
        }
        kernel_size = kernel_size == 0 ? (Math.max(1, 4.0 * sigma + 1.0 - 1e-8) * 2 + 1) | 0 : kernel_size;
        const half_kernel = kernel_size >> 1;
        const w = src.cols,
            h = src.rows;
        const data_type = src.type,
            is_u8 = data_type & JSFEAT_CONSTANTS.U8_t;

        dst.resize(w, h, src.channel);

        const src_d = src.data,
            dst_d = dst.data;
        let buf,
            filter,
            buf_sz = (kernel_size + Math.max(h, w)) | 0;

        const buf_node = this.cache.get_buffer(buf_sz << 2);
        const filt_node = this.cache.get_buffer(kernel_size << 2);

        if (is_u8) {
            buf = buf_node.i32;
            filter = filt_node.i32;
        } else if (data_type & JSFEAT_CONSTANTS.S32_t) {
            buf = buf_node.i32;
            filter = filt_node.f32;
        } else {
            buf = buf_node.f32;
            filter = filt_node.f32;
        }

        jsfeatmath.get_gaussian_kernel(kernel_size, sigma, filter, data_type);

        if (is_u8) {
            _convol_u8(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
        } else {
            _convol(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
        }

        this.cache.put_buffer(buf_node);
        this.cache.put_buffer(filt_node);
    }

    /**
     * Standard Hough transform for line detection on a binary edge image
     * (e.g. `canny` output). Returns lines sorted by accumulator strength.
     *
     * NOTE (parity): the original jsfeat version of this function is broken
     * (it references undeclared `min_theta`/`max_theta` and throws in strict
     * mode); jsfeatNext fixes it.
     *
     * @param img       Binary edge image (non-zero pixels vote).
     * @param rho_res   Distance resolution of the accumulator, in pixels.
     * @param theta_res Angle resolution, in radians.
     * @param threshold Minimum accumulator votes for a line.
     * @returns Array of `[rho, theta]` pairs describing detected lines.
     */
    hough_transform(img: matrix_t, rho_res: number, theta_res: number, threshold: number): number[] {
        let r;
        let i;
        const image = img.data;

        const width = img.cols;
        const height = img.rows;
        const step = width;

        const min_theta = 0.0;
        const max_theta = Math.PI;

        const numangle = Math.round((max_theta - min_theta) / theta_res);
        const numrho = Math.round(((width + height) * 2 + 1) / rho_res);
        const irho = 1.0 / rho_res;

        const accum = new Int32Array((numangle + 2) * (numrho + 2)); //typed arrays are initialized to 0
        const tabSin = new Float32Array(numangle);
        const tabCos = new Float32Array(numangle);

        let n = 0;
        let ang = min_theta;
        for (; n < numangle; n++) {
            tabSin[n] = Math.sin(ang) * irho;
            tabCos[n] = Math.cos(ang) * irho;
            ang += theta_res;
        }

        // stage 1. fill accumulator
        for (i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (image[i * step + j] != 0) {
                    //console.log(r, (n+1) * (numrho+2) + r+1, tabCos[n], tabSin[n]);
                    for (n = 0; n < numangle; n++) {
                        r = Math.round(j * tabCos[n] + i * tabSin[n]);
                        r += (numrho - 1) / 2;
                        accum[(n + 1) * (numrho + 2) + r + 1] += 1;
                    }
                }
            }
        }

        // stage 2. find local maximums
        //TODO: Consider making a vector class that uses typed arrays
        const _sort_buf = [];
        for (r = 0; r < numrho; r++) {
            for (n = 0; n < numangle; n++) {
                const base = (n + 1) * (numrho + 2) + r + 1;
                if (
                    accum[base] > threshold &&
                    accum[base] > accum[base - 1] &&
                    accum[base] >= accum[base + 1] &&
                    accum[base] > accum[base - numrho - 2] &&
                    accum[base] >= accum[base + numrho + 2]
                ) {
                    _sort_buf.push(base);
                }
            }
        }

        // stage 3. sort the detected lines by accumulator value
        _sort_buf.sort(function (l1, l2) {
            return <number>(<unknown>(accum[l1] > accum[l2] || (accum[l1] == accum[l2] && l1 < l2)));
        });

        // stage 4. store the first min(total,linesMax) lines to the output buffer
        const linesMax = Math.min(numangle * numrho, _sort_buf.length);
        const scale = 1.0 / (numrho + 2);
        const lines = new Array();
        for (i = 0; i < linesMax; i++) {
            const idx = _sort_buf[i];
            n = Math.floor(idx * scale) - 1;
            r = idx - (n + 1) * (numrho + 2) - 1;
            const lrho = (r - (numrho - 1) * 0.5) * rho_res;
            const langle = n * theta_res;
            lines.push([lrho, langle]);
        }
        return lines;
    }

    /**
     * Halves an image with 2×2 box filtering (each output pixel is the
     * rounded mean of the corresponding 2×2 source block). The optional
     * source offset exists for the (not yet ported) BBF detector.
     *
     * @param src Source image.
     * @param dst Destination (resized to `w>>1`×`h>>1`).
     * @param sx  Source x offset. Default 0. @param sy Source y offset. Default 0.
     */
    pyrdown(src: matrix_t, dst: matrix_t, sx?: number, sy?: number): void {
        // this is needed for bbf
        if (typeof sx === "undefined") {
            sx = 0;
        }
        if (typeof sy === "undefined") {
            sy = 0;
        }

        const w = src.cols,
            h = src.rows;
        const w2 = w >> 1,
            h2 = h >> 1;
        const _w2 = w2 - (sx << 1),
            _h2 = h2 - (sy << 1);
        let x = 0,
            y = 0,
            sptr = sx + sy * w,
            sline = 0,
            dptr = 0,
            dline = 0;

        dst.resize(w2, h2, src.channel);

        const src_d = src.data,
            dst_d = dst.data;

        for (y = 0; y < _h2; ++y) {
            sline = sptr;
            dline = dptr;
            for (x = 0; x <= _w2 - 2; x += 2, dline += 2, sline += 4) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] + src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
                dst_d[dline + 1] =
                    (src_d[sline + 2] + src_d[sline + 3] + src_d[sline + w + 2] + src_d[sline + w + 3] + 2) >> 2;
            }
            for (; x < _w2; ++x, ++dline, sline += 2) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] + src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
            }
            sptr += w << 1;
            dptr += w2;
        }
    }

    /**
     * Computes first-order image derivatives with the 3×3 Scharr operator
     * (weights 3/10/3 — more rotationally accurate than Sobel). Output is a
     * 2-channel map with interleaved `[gx, gy]` per pixel; borders are
     * handled by reflection.
     *
     * @param src Source grayscale image.
     * @param dst Destination derivative map (resized to `src` size, 2 channels).
     */
    scharr_derivatives(src: matrix_t, dst: matrix_t): void {
        const w = src.cols,
            h = src.rows;
        let dstep = w << 1,
            x = 0,
            y = 0,
            x1 = 0,
            a,
            b,
            c,
            d,
            e,
            f;
        let srow0 = 0,
            srow1 = 0,
            srow2 = 0,
            drow = 0;
        let trow0, trow1;

        dst.resize(w, h, 2); // 2 channel output gx, gy

        const img = src.data,
            gxgy = dst.data;

        const buf0_node = this.cache.get_buffer((w + 2) << 2);
        const buf1_node = this.cache.get_buffer((w + 2) << 2);

        if (src.type & JSFEAT_CONSTANTS.U8_t || src.type & JSFEAT_CONSTANTS.S32_t) {
            trow0 = buf0_node.i32;
            trow1 = buf1_node.i32;
        } else {
            trow0 = buf0_node.f32;
            trow1 = buf1_node.f32;
        }

        for (; y < h; ++y, srow1 += w) {
            srow0 = ((y > 0 ? y - 1 : 1) * w) | 0;
            srow2 = ((y < h - 1 ? y + 1 : h - 2) * w) | 0;
            drow = (y * dstep) | 0;
            // do vertical convolution
            for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
                trow1[x1] = b - a;
                //
                (a = img[srow0 + x + 1]), (b = img[srow2 + x + 1]);
                trow0[x1 + 1] = (a + b) * 3 + img[srow1 + x + 1] * 10;
                trow1[x1 + 1] = b - a;
            }
            for (; x < w; ++x, ++x1) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
                trow1[x1] = b - a;
            }
            // make border
            x = (w + 1) | 0;
            trow0[0] = trow0[1];
            trow0[x] = trow0[w];
            trow1[0] = trow1[1];
            trow1[x] = trow1[w];
            // do horizontal convolution, interleave the results and store them
            for (x = 0; x <= w - 4; x += 4) {
                (a = trow1[x + 2]),
                    (b = trow1[x + 1]),
                    (c = trow1[x + 3]),
                    (d = trow1[x + 4]),
                    (e = trow0[x + 2]),
                    (f = trow0[x + 3]);
                gxgy[drow++] = e - trow0[x];
                gxgy[drow++] = (a + trow1[x]) * 3 + b * 10;
                gxgy[drow++] = f - trow0[x + 1];
                gxgy[drow++] = (c + b) * 3 + a * 10;

                gxgy[drow++] = trow0[x + 4] - e;
                gxgy[drow++] = (d + a) * 3 + c * 10;
                gxgy[drow++] = trow0[x + 5] - f;
                gxgy[drow++] = (trow1[x + 5] + c) * 3 + d * 10;
            }
            for (; x < w; ++x) {
                gxgy[drow++] = trow0[x + 2] - trow0[x];
                gxgy[drow++] = (trow1[x + 2] + trow1[x]) * 3 + trow1[x + 1] * 10;
            }
        }
        this.cache.put_buffer(buf0_node);
        this.cache.put_buffer(buf1_node);
    }

    /**
     * Computes first-order image derivatives with the 3×3 Sobel operator
     * (`[1 2 1] ⊗ [-1 0 1]`). Output is a 2-channel map with interleaved
     * `[gx, gy]` per pixel; borders are handled by reflection.
     *
     * @param src Source grayscale image.
     * @param dst Destination derivative map (resized to `src` size, 2 channels).
     */
    sobel_derivatives(src: matrix_t, dst: matrix_t): void {
        const w = src.cols,
            h = src.rows;
        let dstep = w << 1,
            x = 0,
            y = 0,
            x1 = 0,
            a,
            b,
            c,
            d,
            e,
            f;
        let srow0 = 0,
            srow1 = 0,
            srow2 = 0,
            drow = 0;
        let trow0, trow1;

        dst.resize(w, h, 2); // 2 channel output gx, gy

        const img = src.data,
            gxgy = dst.data;

        const buf0_node = this.cache.get_buffer((w + 2) << 2);
        const buf1_node = this.cache.get_buffer((w + 2) << 2);

        if (src.type & JSFEAT_CONSTANTS.U8_t || src.type & JSFEAT_CONSTANTS.S32_t) {
            trow0 = buf0_node.i32;
            trow1 = buf1_node.i32;
        } else {
            trow0 = buf0_node.f32;
            trow1 = buf1_node.f32;
        }

        for (; y < h; ++y, srow1 += w) {
            srow0 = ((y > 0 ? y - 1 : 1) * w) | 0;
            srow2 = ((y < h - 1 ? y + 1 : h - 2) * w) | 0;
            drow = (y * dstep) | 0;
            // do vertical convolution
            for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = a + b + img[srow1 + x] * 2;
                trow1[x1] = b - a;
                //
                (a = img[srow0 + x + 1]), (b = img[srow2 + x + 1]);
                trow0[x1 + 1] = a + b + img[srow1 + x + 1] * 2;
                trow1[x1 + 1] = b - a;
            }
            for (; x < w; ++x, ++x1) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = a + b + img[srow1 + x] * 2;
                trow1[x1] = b - a;
            }
            // make border
            x = (w + 1) | 0;
            trow0[0] = trow0[1];
            trow0[x] = trow0[w];
            trow1[0] = trow1[1];
            trow1[x] = trow1[w];
            // do horizontal convolution, interleave the results and store them
            for (x = 0; x <= w - 4; x += 4) {
                (a = trow1[x + 2]),
                    (b = trow1[x + 1]),
                    (c = trow1[x + 3]),
                    (d = trow1[x + 4]),
                    (e = trow0[x + 2]),
                    (f = trow0[x + 3]);
                gxgy[drow++] = e - trow0[x];
                gxgy[drow++] = a + trow1[x] + b * 2;
                gxgy[drow++] = f - trow0[x + 1];
                gxgy[drow++] = c + b + a * 2;

                gxgy[drow++] = trow0[x + 4] - e;
                gxgy[drow++] = d + a + c * 2;
                gxgy[drow++] = trow0[x + 5] - f;
                gxgy[drow++] = trow1[x + 5] + c + d * 2;
            }
            for (; x < w; ++x) {
                gxgy[drow++] = trow0[x + 2] - trow0[x];
                gxgy[drow++] = trow1[x + 2] + trow1[x] + trow1[x + 1] * 2;
            }
        }
        this.cache.put_buffer(buf0_node);
        this.cache.put_buffer(buf1_node);
    }

    /**
     * Computes integral images ("summed-area tables") over `src` — any
     * combination of: plain sum, squared sum, and 45°-tilted sum (as used by
     * Haar-cascade detectors). Pass a falsy value to skip an output.
     *
     * Each destination must be sized `(src.cols + 1) × (src.rows + 1)`;
     * the first row/column are zero.
     *
     * @param src        Source grayscale image.
     * @param dst_sum    Output for pixel sums, or falsy to skip.
     * @param dst_sqsum  Output for squared-pixel sums, or falsy to skip.
     * @param dst_tilted Output for 45°-tilted sums, or falsy to skip.
     */
    compute_integral_image(src: matrix_t, dst_sum: number[], dst_sqsum: number[], dst_tilted: any[]): void {
        const w0 = src.cols | 0,
            h0 = src.rows | 0,
            src_d = src.data;
        const w1 = (w0 + 1) | 0;
        let s = 0,
            s2 = 0,
            p = 0,
            pup = 0,
            i = 0,
            j = 0,
            v = 0,
            k = 0;

        if (dst_sum && dst_sqsum) {
            // fill first row with zeros
            for (; i < w1; ++i) {
                (dst_sum[i] = 0), (dst_sqsum[i] = 0);
            }
            (p = (w1 + 1) | 0), (pup = 1);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                s = s2 = 0;
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    v = src_d[k];
                    (s += v), (s2 += v * v);
                    dst_sum[p] = dst_sum[pup] + s;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;

                    v = src_d[k + 1];
                    (s += v), (s2 += v * v);
                    dst_sum[p + 1] = dst_sum[pup + 1] + s;
                    dst_sqsum[p + 1] = dst_sqsum[pup + 1] + s2;
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    v = src_d[k];
                    (s += v), (s2 += v * v);
                    dst_sum[p] = dst_sum[pup] + s;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                }
            }
        } else if (dst_sum) {
            // fill first row with zeros
            for (; i < w1; ++i) {
                dst_sum[i] = 0;
            }
            (p = (w1 + 1) | 0), (pup = 1);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                s = 0;
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    s += src_d[k];
                    dst_sum[p] = dst_sum[pup] + s;
                    s += src_d[k + 1];
                    dst_sum[p + 1] = dst_sum[pup + 1] + s;
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    s += src_d[k];
                    dst_sum[p] = dst_sum[pup] + s;
                }
            }
        } else if (dst_sqsum) {
            // fill first row with zeros
            for (; i < w1; ++i) {
                dst_sqsum[i] = 0;
            }
            (p = (w1 + 1) | 0), (pup = 1);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                s2 = 0;
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    v = src_d[k];
                    s2 += v * v;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                    v = src_d[k + 1];
                    s2 += v * v;
                    dst_sqsum[p + 1] = dst_sqsum[pup + 1] + s2;
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    v = src_d[k];
                    s2 += v * v;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                }
            }
        }

        if (dst_tilted) {
            // fill first row with zeros
            for (i = 0; i < w1; ++i) {
                dst_tilted[i] = 0;
            }
            // diagonal
            (p = (w1 + 1) | 0), (pup = 0);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    dst_tilted[p] = src_d[k] + dst_tilted[pup];
                    dst_tilted[p + 1] = src_d[k + 1] + dst_tilted[pup + 1];
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    dst_tilted[p] = src_d[k] + dst_tilted[pup];
                }
            }
            // diagonal
            (p = (w1 + w0) | 0), (pup = w0);
            for (i = 0; i < h0; ++i, p += w1, pup += w1) {
                dst_tilted[p] += dst_tilted[pup];
            }

            for (j = w0 - 1; j > 0; --j) {
                (p = j + h0 * w1), (pup = p - w1);
                for (i = h0; i > 0; --i, p -= w1, pup -= w1) {
                    dst_tilted[p] += dst_tilted[pup] + dst_tilted[pup + 1];
                }
            }
        }
    }

    /**
     * Histogram equalization of a grayscale image: remaps intensities
     * through the normalized cumulative histogram to maximize contrast.
     *
     * @param src Source grayscale image (`U8`).
     * @param dst Destination (resized to match `src`).
     */
    equalize_histogram(src: matrix_t, dst: matrix_t): void {
        const w = src.cols,
            h = src.rows,
            src_d = src.data;

        dst.resize(w, h, src.channel);

        const dst_d = dst.data,
            size = w * h;
        let i = 0,
            prev = 0,
            hist0,
            norm;

        const hist0_node = this.cache.get_buffer(256 << 2);
        hist0 = hist0_node.i32;
        for (; i < 256; ++i) hist0[i] = 0;
        for (i = 0; i < size; ++i) {
            ++hist0[src_d[i]];
        }

        prev = hist0[0];
        for (i = 1; i < 256; ++i) {
            prev = hist0[i] += prev;
        }

        norm = 255 / size;
        for (i = 0; i < size; ++i) {
            dst_d[i] = (hist0[src_d[i]] * norm + 0.5) | 0;
        }
        this.cache.put_buffer(hist0_node);
    }

    /**
     * Canny edge detector: Sobel gradients → L1-magnitude non-maximum
     * suppression → double-threshold hysteresis tracking. Edge pixels are
     * 255, everything else 0. Blur the input first for stable results.
     *
     * @param src         Source grayscale image.
     * @param dst         Destination edge map (resized to match `src`).
     * @param low_thresh  Lower hysteresis threshold (gradient magnitude).
     * @param high_thresh Upper hysteresis threshold (strong-edge seed).
     */
    canny(src: matrix_t, dst: matrix_t, low_thresh: number, high_thresh: number): void {
        const w = src.cols,
            h = src.rows,
            src_d = src.data;

        dst.resize(w, h, src.channel);

        const dst_d = dst.data;
        let i = 0,
            j: number = 0,
            grad = 0,
            w2 = w << 1,
            _grad = 0,
            suppress = 0,
            f = 0,
            x = 0,
            y = 0,
            s = 0;
        let tg22x = 0,
            tg67x = 0;

        // cache buffers
        const dxdy_node = this.cache.get_buffer((h * w2) << 2);
        const buf_node = this.cache.get_buffer((3 * (w + 2)) << 2);
        const map_node = this.cache.get_buffer(((h + 2) * (w + 2)) << 2);
        const stack_node = this.cache.get_buffer((h * w) << 2);

        const buf = buf_node.i32;
        const map = map_node.i32;
        const stack = stack_node.i32;
        const dxdy = dxdy_node.i32;
        const dxdy_m = new matrix_t(w, h, JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
        let row0 = 1,
            row1 = (w + 2 + 1) | 0,
            row2 = (2 * (w + 2) + 1) | 0,
            map_w = (w + 2) | 0,
            map_i: number = (map_w + 1) | 0,
            stack_i = 0;

        this.sobel_derivatives(src, dxdy_m);

        if (low_thresh > high_thresh) {
            i = low_thresh;
            low_thresh = high_thresh;
            high_thresh = i;
        }

        i = (3 * (w + 2)) | 0;
        while (--i >= 0) {
            buf[i] = 0;
        }

        i = ((h + 2) * (w + 2)) | 0;
        while (--i >= 0) {
            map[i] = 0;
        }

        for (; j < w; ++j, grad += 2) {
            //buf[row1+j] = Math.abs(dxdy[grad]) + Math.abs(dxdy[grad+1]);
            (x = dxdy[grad]), (y = dxdy[grad + 1]);
            //buf[row1+j] = x*x + y*y;
            buf[row1 + j] = (x ^ (x >> 31)) - (x >> 31) + ((y ^ (y >> 31)) - (y >> 31));
        }

        for (i = 1; i <= h; ++i, grad += w2) {
            if (i == h) {
                j = row2 + w;
                while (--j >= row2) {
                    buf[j] = 0;
                }
            } else {
                for (j = 0; j < w; j++) {
                    //buf[row2+j] =  Math.abs(dxdy[grad+(j<<1)]) + Math.abs(dxdy[grad+(j<<1)+1]);
                    (x = dxdy[grad + (j << 1)]), (y = dxdy[grad + (j << 1) + 1]);
                    //buf[row2+j] = x*x + y*y;
                    buf[row2 + j] = (x ^ (x >> 31)) - (x >> 31) + ((y ^ (y >> 31)) - (y >> 31));
                }
            }
            _grad = (grad - w2) | 0;
            map[map_i - 1] = 0;
            suppress = 0;
            for (j = 0; j < w; ++j, _grad += 2) {
                f = buf[row1 + j];
                if (f > low_thresh) {
                    x = dxdy[_grad];
                    y = dxdy[_grad + 1];
                    s = x ^ y;
                    // seems ot be faster than Math.abs
                    x = ((x ^ (x >> 31)) - (x >> 31)) | 0;
                    y = ((y ^ (y >> 31)) - (y >> 31)) | 0;
                    //x * tan(22.5) x * tan(67.5) == 2 * x + x * tan(22.5)
                    tg22x = x * 13573;
                    tg67x = tg22x + ((x + x) << 15);
                    y <<= 15;
                    if (y < tg22x) {
                        if (f > buf[row1 + j - 1] && f >= buf[row1 + j + 1]) {
                            if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                                map[map_i + j] = 2;
                                suppress = 1;
                                stack[stack_i++] = map_i + j;
                            } else {
                                map[map_i + j] = 1;
                            }
                            continue;
                        }
                    } else if (y > tg67x) {
                        if (f > buf[row0 + j] && f >= buf[row2 + j]) {
                            if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                                map[map_i + j] = 2;
                                suppress = 1;
                                stack[stack_i++] = map_i + j;
                            } else {
                                map[map_i + j] = 1;
                            }
                            continue;
                        }
                    } else {
                        s = s < 0 ? -1 : 1;
                        if (f > buf[row0 + j - s] && f > buf[row2 + j + s]) {
                            if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                                map[map_i + j] = 2;
                                suppress = 1;
                                stack[stack_i++] = map_i + j;
                            } else {
                                map[map_i + j] = 1;
                            }
                            continue;
                        }
                    }
                }
                map[map_i + j] = 0;
                suppress = 0;
            }
            map[map_i + w] = 0;
            map_i += map_w;
            j = row0;
            row0 = row1;
            row1 = row2;
            row2 = j;
        }

        j = map_i - map_w - 1;
        for (i = 0; i < map_w; ++i, ++j) {
            map[j] = 0;
        }
        // path following
        while (stack_i > 0) {
            map_i = stack[--stack_i];
            map_i -= map_w + 1;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += map_w;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i -= 2;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += map_w;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1) (map[map_i] = 2), (stack[stack_i++] = map_i);
        }

        map_i = map_w + 1;
        row0 = 0;
        for (i = 0; i < h; ++i, map_i += map_w) {
            for (j = 0; j < w; ++j) {
                dst_d[row0++] = Number(map[map_i + j] == 2) * 0xff;
            }
        }

        // free buffers
        this.cache.put_buffer(dxdy_node);
        this.cache.put_buffer(buf_node);
        this.cache.put_buffer(map_node);
        this.cache.put_buffer(stack_node);
    }

    /**
     * Warps an image through a 3×3 perspective transform with bilinear
     * sampling. For every destination pixel the INVERSE mapping is applied,
     * so `transform` must map destination → source coordinates (invert a
     * forward homography with `transform.invert_perspective_transform` first).
     *
     * @param src        Source grayscale image.
     * @param dst        Destination image (same size as `src`).
     * @param transform  3×3 dst→src homography.
     * @param fill_value Intensity for samples falling outside `src`. Default 0.
     */
    warp_perspective(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void {
        if (typeof fill_value === "undefined") {
            fill_value = 0;
        }
        const src_width = src.cols | 0,
            src_height = src.rows | 0,
            dst_width = dst.cols | 0,
            dst_height = dst.rows | 0;
        const src_d = src.data,
            dst_d = dst.data;
        let x = 0,
            y = 0,
            off = 0,
            ixs = 0,
            iys = 0,
            xs = 0.0,
            ys = 0.0,
            xs0 = 0.0,
            ys0 = 0.0,
            ws = 0.0,
            sc = 0.0,
            a = 0.0,
            b = 0.0,
            p0 = 0.0,
            p1 = 0.0;
        const td = transform.data;
        const m00 = td[0],
            m01 = td[1],
            m02 = td[2],
            m10 = td[3],
            m11 = td[4],
            m12 = td[5],
            m20 = td[6],
            m21 = td[7],
            m22 = td[8];

        for (let dptr = 0; y < dst_height; ++y) {
            (xs0 = m01 * y + m02), (ys0 = m11 * y + m12), (ws = m21 * y + m22);
            for (x = 0; x < dst_width; ++x, ++dptr, xs0 += m00, ys0 += m10, ws += m20) {
                sc = 1.0 / ws;
                (xs = xs0 * sc), (ys = ys0 * sc);
                (ixs = xs | 0), (iys = ys | 0);

                if (xs > 0 && ys > 0 && ixs < src_width - 1 && iys < src_height - 1) {
                    a = Math.max(xs - ixs, 0.0);
                    b = Math.max(ys - iys, 0.0);
                    off = (src_width * iys + ixs) | 0;

                    p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
                    p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);

                    dst_d[dptr] = p0 + b * (p1 - p0);
                } else dst_d[dptr] = fill_value;
            }
        }
    }

    /**
     * Warps an image through an affine transform with bilinear sampling.
     * Only the first 6 coefficients of `transform` are used, mapping
     * destination → source coordinates (inverse warping).
     *
     * @param src        Source grayscale image.
     * @param dst        Destination image (same size as `src`).
     * @param transform  2×3 (or 3×3, first 6 entries) dst→src affine transform.
     * @param fill_value Intensity for samples falling outside `src`. Default 0.
     */
    warp_affine(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void {
        if (typeof fill_value === "undefined") {
            fill_value = 0;
        }
        const src_width = src.cols,
            src_height = src.rows,
            dst_width = dst.cols,
            dst_height = dst.rows;
        const src_d = src.data,
            dst_d = dst.data;
        let x = 0,
            y = 0,
            off = 0,
            ixs = 0,
            iys = 0,
            xs = 0.0,
            ys = 0.0,
            a = 0.0,
            b = 0.0,
            p0 = 0.0,
            p1 = 0.0;
        const td = transform.data;
        const m00 = td[0],
            m01 = td[1],
            m02 = td[2],
            m10 = td[3],
            m11 = td[4],
            m12 = td[5];

        for (let dptr = 0; y < dst_height; ++y) {
            xs = m01 * y + m02;
            ys = m11 * y + m12;
            for (x = 0; x < dst_width; ++x, ++dptr, xs += m00, ys += m10) {
                ixs = xs | 0;
                iys = ys | 0;

                if (ixs >= 0 && iys >= 0 && ixs < src_width - 1 && iys < src_height - 1) {
                    a = xs - ixs;
                    b = ys - iys;
                    off = src_width * iys + ixs;

                    p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
                    p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);

                    dst_d[dptr] = p0 + b * (p1 - p0);
                } else dst_d[dptr] = fill_value;
            }
        }
    }

    /**
     * Basic RGB skin-color filter (rule-based, from
     * http://popscan.blogspot.fr/2012/08/skin-detection-in-digital-images.html):
     * writes 255 for skin-classified pixels and 0 otherwise.
     *
     * @param src RGBA image-like object (`width`, `height`, `data`).
     * @param dst Output array of per-pixel 0/255 values (length `w·h`).
     */
    skindetector(src: { width: number; height: number; data: any[] }, dst: number[]): void {
        let r, g, b, j;
        let i = src.width * src.height;
        while (i--) {
            j = i * 4;
            r = src.data[j];
            g = src.data[j + 1];
            b = src.data[j + 2];
            if (r > 95 && g > 40 && b > 20 && r > g && r > b && r - Math.min(g, b) > 15 && Math.abs(r - g) > 15) {
                dst[i] = 255;
            } else {
                dst[i] = 0;
            }
        }
    }
}
