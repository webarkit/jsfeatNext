import { third_check, is_local_maxima, perform_one_point, lev_table_t } from './yape_utils'
import { matrix_t } from '../matrix_t/matrix_t'
import { keypoint_t } from '../keypoint_t/keypoint_t'
export class yape {
    private level_tables: lev_table_t[];
    private tau: number;
    constructor() {
        this.level_tables = [];
        this.tau = 7;
    }

    init(width: number, height: number, radius: number, pyramid_levels: number): void {
        if (typeof pyramid_levels === "undefined") { pyramid_levels = 1; }
        var i;
        radius = Math.min(radius, 7);
        radius = Math.max(radius, 3);
        for (i = 0; i < pyramid_levels; ++i) {
            this.level_tables[i] = new lev_table_t(width >> i, height >> i, radius);
        }
    }

    detect(src: matrix_t, points: keypoint_t[], border: number): number {
        if (typeof border === "undefined") { border = 4; }
        var t = this.level_tables[0];
        var R = t.radius | 0, Rm1 = (R - 1) | 0;
        var dirs = t.dirs;
        var dirs_count = t.dirs_count | 0;
        var opposite = dirs_count >> 1;
        var img = src.data, w = src.cols | 0, h = src.rows | 0, hw = w >> 1;
        var scores = t.scores;
        var x = 0, y = 0, row = 0, rowx = 0, ip = 0, im = 0, abs_score = 0, score = 0;
        var tau = this.tau | 0;
        var number_of_points = 0, pt;

        var sx = Math.max(R + 1, border) | 0;
        var sy = Math.max(R + 1, border) | 0;
        var ex = Math.min(w - R - 2, w - border) | 0;
        var ey = Math.min(h - R - 2, h - border) | 0;

        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
                ip = img[rowx] + tau, im = img[rowx] - tau;

                if (im < img[rowx + R] && img[rowx + R] < ip && im < img[rowx - R] && img[rowx - R] < ip) {
                    scores[rowx] = 0;
                } else {
                    perform_one_point(img, rowx, scores, im, ip, dirs, opposite, dirs_count);
                }
            }
        }

        // local maxima
        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
                score = scores[rowx];
                abs_score = Math.abs(score);
                if (abs_score < 5) {
                    // if this pixel is 0, the next one will not be good enough. Skip it.
                    ++x, ++rowx;
                } else {
                    if (third_check(scores, rowx, w) >= 3 && is_local_maxima(scores, rowx, score, hw, R)) {
                        pt = points[number_of_points];
                        pt.x = x, pt.y = y, pt.score = abs_score;
                        ++number_of_points;

                        x += Rm1, rowx += Rm1;
                    }
                }
            }
        }

        return number_of_points;
    }
}