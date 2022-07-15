import { compute_laplacian, hessian_min_eigen_value } from './yape06_utils.js'
import cache from '../cache/cache.js'
export default class yape06 {
    constructor() {
        this.cache = new cache();
        this.cache.allocate(30, 640 * 4);
        this.laplacian_threshold = 30;
        this.min_eigen_value_threshold = 25;
    }
    detect(src, points, border) {
        if (typeof border === "undefined") { border = 5; }
        var x = 0, y = 0;
        var w = src.cols, h = src.rows, srd_d = src.data;
        var Dxx = 5, Dyy = (5 * w) | 0;
        var Dxy = (3 + 3 * w) | 0, Dyx = (3 - 3 * w) | 0;
        var lap_buf = this.cache.get_buffer((w * h) << 2);
        var laplacian = lap_buf.i32;
        var lv = 0, row = 0, rowx = 0, min_eigen_value = 0, pt;
        var number_of_points = 0;
        var lap_thresh = this.laplacian_threshold;
        var eigen_thresh = this.min_eigen_value_threshold;

        var sx = Math.max(5, border) | 0;
        var sy = Math.max(3, border) | 0;
        var ex = Math.min(w - 5, w - border) | 0;
        var ey = Math.min(h - 3, h - border) | 0;

        x = w * h;
        while (--x >= 0) { laplacian[x] = 0; }
        compute_laplacian(srd_d, laplacian, w, h, Dxx, Dyy, sx, sy, ex, ey);

        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {

                lv = laplacian[rowx];
                if ((lv < -lap_thresh &&
                    lv < laplacian[rowx - 1] && lv < laplacian[rowx + 1] &&
                    lv < laplacian[rowx - w] && lv < laplacian[rowx + w] &&
                    lv < laplacian[rowx - w - 1] && lv < laplacian[rowx + w - 1] &&
                    lv < laplacian[rowx - w + 1] && lv < laplacian[rowx + w + 1])
                    ||
                    (lv > lap_thresh &&
                        lv > laplacian[rowx - 1] && lv > laplacian[rowx + 1] &&
                        lv > laplacian[rowx - w] && lv > laplacian[rowx + w] &&
                        lv > laplacian[rowx - w - 1] && lv > laplacian[rowx + w - 1] &&
                        lv > laplacian[rowx - w + 1] && lv > laplacian[rowx + w + 1])
                ) {

                    min_eigen_value = hessian_min_eigen_value(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);
                    if (min_eigen_value > eigen_thresh) {
                        pt = points[number_of_points];
                        pt.x = x, pt.y = y, pt.score = min_eigen_value;
                        ++number_of_points;
                        ++x, ++rowx; // skip next pixel since this is maxima in 3x3
                    }
                }
            }
        }

        this.cache.put_buffer(lap_buf);

        return number_of_points;
    }
}