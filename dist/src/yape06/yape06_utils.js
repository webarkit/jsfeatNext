export function compute_laplacian(src, dst, w, h, Dxx, Dyy, sx, sy, ex, ey) {
    let y = 0, x = 0, yrow = (sy * w + sx) | 0, row = yrow;
    for (y = sy; y < ey; ++y, yrow += w, row = yrow) {
        for (x = sx; x < ex; ++x, ++row) {
            dst[row] = -4 * src[row] + src[row + Dxx] + src[row - Dxx] + src[row + Dyy] + src[row - Dyy];
        }
    }
}
export function hessian_min_eigen_value(src, off, tr, Dxx, Dyy, Dxy, Dyx) {
    const Ixx = -2 * src[off] + src[off + Dxx] + src[off - Dxx];
    const Iyy = -2 * src[off] + src[off + Dyy] + src[off - Dyy];
    const Ixy = src[off + Dxy] + src[off - Dxy] - src[off + Dyx] - src[off - Dyx];
    const sqrt_delta = Math.sqrt((Ixx - Iyy) * (Ixx - Iyy) + 4 * Ixy * Ixy) | 0;
    return Math.min(Math.abs(tr - sqrt_delta), Math.abs(-(tr + sqrt_delta)));
}
//# sourceMappingURL=yape06_utils.js.map