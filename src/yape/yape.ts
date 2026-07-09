import { third_check, is_local_maxima, perform_one_point, lev_table_t } from "./yape_utils";
import { matrix_t } from "../matrix_t/matrix_t";
import { keypoint_t } from "../keypoint_t/keypoint_t";

/**
 * YAPE ("Yet Another Point Extractor") interest-point detector: scores each
 * pixel by comparing it against a precomputed circle of samples at the given
 * radius, then keeps directionally consistent local maxima.
 *
 * Requires {@link init} to be called once with the image dimensions before
 * the first {@link detect}. Mirrors `jsfeat.yape` from the original library.
 */
export class yape {
    /** Per-pyramid-level precomputed circle offsets and score maps. */
    private level_tables: lev_table_t[];
    /** Intensity tolerance: samples within ±tau of the center are "similar". */
    private tau: number;

    constructor() {
        this.level_tables = [];
        this.tau = 7;
    }

    /**
     * Precomputes the per-level sampling tables (circle offsets and score
     * buffers). Must be called before {@link detect}, and again whenever the
     * image size changes.
     *
     * @param width          Image width at level 0.
     * @param height         Image height at level 0.
     * @param radius         Sampling-circle radius, clamped to [3, 7].
     * @param pyramid_levels Number of levels to prepare. Default 1.
     */
    init(width: number, height: number, radius: number, pyramid_levels: number = 1): void {
        radius = Math.min(radius, 7);
        radius = Math.max(radius, 3);
        for (let i = 0; i < pyramid_levels; ++i) {
            this.level_tables[i] = new lev_table_t(width >> i, height >> i, radius);
        }
    }

    /**
     * Detects interest points in a grayscale image: scores every pixel via
     * the circle test, then emits points that pass the third-check and
     * local-maxima suppression, writing them into the pre-allocated `points`
     * array (each entry gets `x`, `y` and `score`).
     *
     * @param src    Source grayscale image (size must match {@link init}).
     * @param points Pre-allocated keypoint pool to fill.
     * @param border Pixels to skip along each edge. Default 4.
     * @returns The number of points written into `points`.
     */
    detect(src: matrix_t, points: keypoint_t[], border: number = 4): number {
        const t = this.level_tables[0];
        const R = t.radius | 0,
            Rm1 = (R - 1) | 0;
        const dirs = t.dirs;
        const dirs_count = t.dirs_count | 0;
        const opposite = dirs_count >> 1;
        const img = src.data,
            w = src.cols | 0,
            h = src.rows | 0,
            hw = w >> 1;
        const scores = t.scores;
        let x = 0,
            y = 0,
            row = 0,
            rowx = 0,
            ip = 0,
            im = 0,
            abs_score = 0,
            score = 0;
        const tau = this.tau | 0;
        let number_of_points = 0,
            pt;

        const sx = Math.max(R + 1, border) | 0;
        const sy = Math.max(R + 1, border) | 0;
        const ex = Math.min(w - R - 2, w - border) | 0;
        const ey = Math.min(h - R - 2, h - border) | 0;

        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
                ((ip = img[rowx] + tau), (im = img[rowx] - tau));

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
                    (++x, ++rowx);
                } else {
                    if (third_check(scores, rowx, w) >= 3 && is_local_maxima(scores, rowx, score, hw, R)) {
                        pt = points[number_of_points];
                        ((pt.x = x), (pt.y = y), (pt.score = abs_score));
                        ++number_of_points;

                        ((x += Rm1), (rowx += Rm1));
                    }
                }
            }
        }

        return number_of_points;
    }
}
