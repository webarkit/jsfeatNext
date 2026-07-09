import { matrix_t } from '../matrix_t/matrix_t';
import { keypoint_t } from '../keypoint_t/keypoint_t';
/**
 * YAPE ("Yet Another Point Extractor") interest-point detector: scores each
 * pixel by comparing it against a precomputed circle of samples at the given
 * radius, then keeps directionally consistent local maxima.
 *
 * Requires {@link init} to be called once with the image dimensions before
 * the first {@link detect}. Mirrors `jsfeat.yape` from the original library.
 */
export declare class yape {
    /** Per-pyramid-level precomputed circle offsets and score maps. */
    private level_tables;
    /** Intensity tolerance: samples within ±tau of the center are "similar". */
    private tau;
    constructor();
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
    init(width: number, height: number, radius: number, pyramid_levels?: number): void;
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
    detect(src: matrix_t, points: keypoint_t[], border?: number): number;
}
