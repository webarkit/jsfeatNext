/**
 * Computes a discrete Laplacian response map over a region of interest:
 * `dst[p] = -4·src[p] + src[p±Dxx] + src[p±Dyy]`. Out-of-bounds samples
 * write 0. Used by `yape06.detect` as the first interest-point filter.
 *
 * @param src Source grayscale data.
 * @param dst Destination Laplacian map (same layout as `src`).
 * @param w   Image width (row stride).
 * @param Dxx Horizontal sample offset (scaled by the detector radius).
 * @param Dyy Vertical sample offset (`radius * w`).
 * @param sx  Region start x. @param sy Region start y.
 * @param ex  Region end x (exclusive). @param ey Region end y (exclusive).
 */
export function compute_laplacian(
    src: Int32Array | Float32Array,
    dst: Int32Array | Float32Array,
    w: number,
    Dxx: number,
    Dyy: number,
    sx: number,
    sy: number,
    ex: number,
    ey: number
): void {
    let y = 0;
    let x = 0;
    let yrow = (sy * w + sx) | 0;
    let row = yrow;

    for (y = sy; y < ey; ++y, yrow += w, row = yrow) {
        for (x = sx; x < ex; ++x, ++row) {
            if (row + Dxx < src.length && row - Dxx >= 0 && row + Dyy < src.length && row - Dyy >= 0) {
                dst[row] = -4 * src[row] + src[row + Dxx] + src[row - Dxx] + src[row + Dyy] + src[row - Dyy];
            } else {
                dst[row] = 0; // or some other default value or error handling
            }
        }
    }
}

/**
 * Estimates the minimum eigenvalue magnitude of the local Hessian at a
 * candidate point, from the discrete second derivatives Ixx/Iyy/Ixy.
 * `yape06.detect` thresholds this to reject edge-like (non-corner) responses.
 *
 * @param src Source grayscale data.
 * @param off Index of the candidate pixel.
 * @param tr  Laplacian (trace) response at the pixel.
 * @param Dxx Horizontal second-derivative offset.
 * @param Dyy Vertical second-derivative offset.
 * @param Dxy First diagonal offset. @param Dyx Second diagonal offset.
 * @returns The smaller absolute eigenvalue of the local Hessian.
 */
export function hessian_min_eigen_value(
    src: number[],
    off: number,
    tr: number,
    Dxx: number,
    Dyy: number,
    Dxy: number,
    Dyx: number
): number {
    const Ixx = -2 * src[off] + src[off + Dxx] + src[off - Dxx];
    const Iyy = -2 * src[off] + src[off + Dyy] + src[off - Dyy];
    const Ixy = src[off + Dxy] + src[off - Dxy] - src[off + Dyx] - src[off - Dyx];
    const sqrt_delta = Math.sqrt((Ixx - Iyy) * (Ixx - Iyy) + 4 * Ixy * Ixy) | 0;

    return Math.min(Math.abs(tr - sqrt_delta), Math.abs(-(tr + sqrt_delta)));
}
