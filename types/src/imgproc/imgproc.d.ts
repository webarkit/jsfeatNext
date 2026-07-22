import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
/**
 * Image-processing operations: color conversion, resampling, blurs, image
 * derivatives, integral images, histogram equalization, Canny edges, Hough
 * lines and geometric warps. All methods operate on {@link matrix_t} images
 * and follow the original `jsfeat.imgproc` semantics.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class imgproc extends jsfeatNext {
    constructor();
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
    grayscale(src: Uint8Array | Uint8ClampedArray, w: number, h: number, dst: matrix_t, code?: number): void;
    /**
     * Downsamples `src` to `nw`×`nh` by area averaging (derived from the CCV
     * library). Chooses the fixed-point `U8` fast path when both matrices are
     * `U8` and the area ratio is below 256, the float path otherwise.
     * No-op unless both target dimensions are strictly smaller.
     *
     * @param src Source image. @param dst Destination (resized to `nw`×`nh`).
     * @param nw  Target width. @param nh Target height.
     */
    resample(src: matrix_t, dst: matrix_t, nw: number, nh: number): void;
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
    box_blur_gray(src: matrix_t, dst: matrix_t, radius: number, options: number): void;
    /**
     * Gaussian blur via separable convolution. Kernel weights come from
     * `math.get_gaussian_kernel`; `U8` images use the integer fast path.
     *
     * @param src         Source image.
     * @param dst         Destination (resized to match `src`).
     * @param kernel_size Number of taps; 0 derives it from `sigma`.
     * @param sigma       Gaussian σ; 0 derives it from `kernel_size`.
     */
    gaussian_blur(src: matrix_t, dst: matrix_t, kernel_size: number, sigma: number): void;
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
    hough_transform(img: matrix_t, rho_res: number, theta_res: number, threshold: number): number[];
    /**
     * Halves an image with 2×2 box filtering (each output pixel is the
     * rounded mean of the corresponding 2×2 source block). The optional
     * source offset exists for the (not yet ported) BBF detector.
     *
     * @param src Source image.
     * @param dst Destination (resized to `w>>1`×`h>>1`).
     * @param sx  Source x offset. Default 0. @param sy Source y offset. Default 0.
     */
    pyrdown(src: matrix_t, dst: matrix_t, sx?: number, sy?: number): void;
    /**
     * Computes first-order image derivatives with the 3×3 Scharr operator
     * (weights 3/10/3 — more rotationally accurate than Sobel). Output is a
     * 2-channel map with interleaved `[gx, gy]` per pixel; borders are
     * handled by reflection.
     *
     * @param src Source grayscale image.
     * @param dst Destination derivative map (resized to `src` size, 2 channels).
     */
    scharr_derivatives(src: matrix_t, dst: matrix_t): void;
    /**
     * Computes first-order image derivatives with the 3×3 Sobel operator
     * (`[1 2 1] ⊗ [-1 0 1]`). Output is a 2-channel map with interleaved
     * `[gx, gy]` per pixel; borders are handled by reflection.
     *
     * @param src Source grayscale image.
     * @param dst Destination derivative map (resized to `src` size, 2 channels).
     */
    sobel_derivatives(src: matrix_t, dst: matrix_t): void;
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
    compute_integral_image(src: matrix_t, dst_sum: number[], dst_sqsum: number[], dst_tilted: number[]): void;
    /**
     * Histogram equalization of a grayscale image: remaps intensities
     * through the normalized cumulative histogram to maximize contrast.
     *
     * @param src Source grayscale image (`U8`).
     * @param dst Destination (resized to match `src`).
     */
    equalize_histogram(src: matrix_t, dst: matrix_t): void;
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
    canny(src: matrix_t, dst: matrix_t, low_thresh: number, high_thresh: number): void;
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
    warp_perspective(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void;
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
    warp_affine(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void;
    /**
     * Basic RGB skin-color filter (rule-based, from
     * http://popscan.blogspot.fr/2012/08/skin-detection-in-digital-images.html):
     * writes 255 for skin-classified pixels and 0 otherwise.
     *
     * @param src RGBA image-like object (`width`, `height`, `data`).
     * @param dst Output array of per-pixel 0/255 values (length `w·h`).
     */
    skindetector(src: {
        width: number;
        height: number;
        data: Uint8Array | Uint8ClampedArray | number[];
    }, dst: number[]): void;
}
