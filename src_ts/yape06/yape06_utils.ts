export function compute_laplacian(src: Int32Array | Float32Array, dst: Int32Array | Float32Array, w: number, h: any, Dxx: number, Dyy: number, sx: number, sy: number, ex: number, ey: number) {
    var y = 0, x = 0, yrow = (sy * w + sx) | 0, row = yrow;

    for (y = sy; y < ey; ++y, yrow += w, row = yrow) {
        for (x = sx; x < ex; ++x, ++row) {
            dst[row] = -4 * src[row] + src[row + Dxx] + src[row - Dxx] + src[row + Dyy] + src[row - Dyy];
        }
    }
}

export function hessian_min_eigen_value(src: number[], off: number, tr: number, Dxx: number, Dyy: number, Dxy: number, Dyx: number) {
    var Ixx = -2 * src[off] + src[off + Dxx] + src[off - Dxx];
    var Iyy = -2 * src[off] + src[off + Dyy] + src[off - Dyy];
    var Ixy = src[off + Dxy] + src[off - Dxy] - src[off + Dyx] - src[off - Dyx];
    var sqrt_delta = (Math.sqrt(((Ixx - Iyy) * (Ixx - Iyy) + 4 * Ixy * Ixy))) | 0;

    return Math.min(Math.abs(tr - sqrt_delta), Math.abs(-(tr + sqrt_delta)));
}