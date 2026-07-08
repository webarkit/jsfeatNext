import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { keypoint_t } from "../keypoint_t/keypoint_t";
import { compute_laplacian, hessian_min_eigen_value } from "./yape06_utils";

/**
 * Real implementation, moved out of the src/jsfeatNext.ts monolith (issue #47).
 * This file previously held a type-only stub — the implementation below is the
 * inline code from the monolith, verbatim.
 */
export class yape06 extends jsfeatNext {
    public laplacian_threshold: number;
    public min_eigen_value_threshold: number;

    constructor() {
        super();
        this.laplacian_threshold = 30;
        this.min_eigen_value_threshold = 25;
    }

    detect(src: matrix_t, points: keypoint_t[], border: number): number {
        if (typeof border === "undefined") {
            border = 5;
        }
        let x = 0,
            y = 0;
        const w = src.cols,
            h = src.rows,
            srd_d = src.data;
        const Dxx = 5,
            Dyy = (5 * w) | 0;
        const Dxy = (3 + 3 * w) | 0,
            Dyx = (3 - 3 * w) | 0;
        const lap_buf = this.cache.get_buffer((w * h) << 2);
        const laplacian = lap_buf.i32;
        let lv = 0,
            row = 0,
            rowx = 0,
            min_eigen_value = 0,
            pt;
        let number_of_points = 0;
        const lap_thresh = this.laplacian_threshold;
        const eigen_thresh = this.min_eigen_value_threshold;

        const sx = Math.max(5, border) | 0;
        const sy = Math.max(3, border) | 0;
        const ex = Math.min(w - 5, w - border) | 0;
        const ey = Math.min(h - 3, h - border) | 0;

        x = w * h;
        while (--x >= 0) {
            laplacian[x] = 0;
        }
        compute_laplacian(srd_d, laplacian, w, Dxx, Dyy, sx, sy, ex, ey);

        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
                lv = laplacian[rowx];
                if (
                    (lv < -lap_thresh &&
                        lv < laplacian[rowx - 1] &&
                        lv < laplacian[rowx + 1] &&
                        lv < laplacian[rowx - w] &&
                        lv < laplacian[rowx + w] &&
                        lv < laplacian[rowx - w - 1] &&
                        lv < laplacian[rowx + w - 1] &&
                        lv < laplacian[rowx - w + 1] &&
                        lv < laplacian[rowx + w + 1]) ||
                    (lv > lap_thresh &&
                        lv > laplacian[rowx - 1] &&
                        lv > laplacian[rowx + 1] &&
                        lv > laplacian[rowx - w] &&
                        lv > laplacian[rowx + w] &&
                        lv > laplacian[rowx - w - 1] &&
                        lv > laplacian[rowx + w - 1] &&
                        lv > laplacian[rowx - w + 1] &&
                        lv > laplacian[rowx + w + 1])
                ) {
                    min_eigen_value = hessian_min_eigen_value(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);
                    if (min_eigen_value > eigen_thresh) {
                        pt = points[number_of_points];
                        (pt.x = x), (pt.y = y), (pt.score = min_eigen_value);
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
