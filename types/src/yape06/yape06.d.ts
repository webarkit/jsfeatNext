import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { keypoint_t } from '../keypoint_t/keypoint_t';
/**
 * YAPE06 interest-point detector: thresholds a Laplacian response map, then
 * rejects edge-like responses via the minimum eigenvalue of the local
 * Hessian, followed by 3×3 non-maximum suppression.
 *
 * Mirrors `jsfeat.yape06` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class yape06 extends jsfeatNext {
    /** Minimum |Laplacian| response for a candidate point. Default 30. */
    laplacian_threshold: number;
    /** Minimum Hessian min-eigenvalue (cornerness) for a candidate. Default 25. */
    min_eigen_value_threshold: number;
    constructor();
    /**
     * Detects interest points in a grayscale image. Results are written into
     * the pre-allocated `points` array (each entry gets `x`, `y`, `score`).
     * Tune sensitivity through {@link laplacian_threshold} and
     * {@link min_eigen_value_threshold}.
     *
     * @param src    Source grayscale image (`U8C1`).
     * @param points Pre-allocated keypoint pool to fill.
     * @param border Pixels to skip along each edge. Default 5.
     * @returns The number of points written into `points`.
     */
    detect(src: matrix_t, points: keypoint_t[], border: number): number;
}
