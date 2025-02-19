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
