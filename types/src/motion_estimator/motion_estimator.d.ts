import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
import { ransac_params_t } from './ransac_params_t';
import { homography2d } from '../motion_model/motion_model';
/**
 * Robust motion-model estimation from noisy point correspondences via
 * RANSAC or LMEDS, parameterized by a kernel implementing
 * {@link IHomography2d} (`homography2d` or `affine2d` from
 * `src/motion_model/motion_model.ts`).
 *
 * Mirrors `jsfeat.motion_estimator` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class motion_estimator extends jsfeatNext {
    constructor();
    /**
     * Draws a random minimal sample of `need_cnt` distinct correspondences
     * (via `Math.random`) and validates it with `kernel.check_subset`.
     * Retries up to 1000 times before giving up.
     *
     * @param kernel   The motion-model kernel (validates the sample).
     * @param from     Source points. @param to Destination points.
     * @param need_cnt Sample size to draw.
     * @param max_cnt  Total number of correspondences to draw from.
     * @param from_sub Output array receiving the sampled source points.
     * @param to_sub   Output array receiving the sampled destination points.
     * @returns `true` when a valid subset was found.
     */
    get_subset(kernel: homography2d, from: point_t[], to: point_t[], need_cnt: number, max_cnt: number, from_sub: point_t[], to_sub: point_t[]): boolean;
    /**
     * Classifies every correspondence as inlier/outlier by thresholding the
     * kernel's squared reprojection error of `model`.
     *
     * @param kernel The motion-model kernel (provides `error`).
     * @param model  Model to evaluate.
     * @param from   Source points. @param to Destination points.
     * @param count  Number of correspondences.
     * @param thresh Inlier error threshold in pixels (squared internally).
     * @param err    Scratch array receiving per-point squared errors.
     * @param mask   Output 0/1 inlier mask (length `count`).
     * @returns The number of inliers.
     */
    find_inliers(kernel: homography2d, model: matrix_t, from: point_t[], to: point_t[], count: number, thresh: number, err: Int32Array | Float32Array, mask: number[]): number;
    /**
     * RANSAC estimation: repeatedly fits the kernel's model to random
     * minimal samples, keeps the hypothesis with the most inliers (adapting
     * the iteration count from the observed inlier ratio), and finally
     * refits the model on all inliers of the best hypothesis.
     *
     * @param params    Estimation parameters ({@link ransac_params_t}).
     * @param kernel    Motion-model kernel (`homography2d` / `affine2d`).
     * @param from      Source points. @param to Destination points.
     * @param count     Number of correspondences.
     * @param model     Output 3×3 model matrix.
     * @param mask      Output 0/1 inlier mask (`count`×1 matrix), optional.
     * @param max_iters Iteration cap. Default 1000.
     * @returns `true` when a model with enough inliers was found.
     */
    ransac(params: ransac_params_t, kernel: any, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean;
    /**
     * Least-median-of-squares estimation: like {@link ransac} but scores each
     * hypothesis by the MEDIAN squared error (no inlier threshold needed —
     * robust up to 50% outliers), then derives an inlier threshold from the
     * winning median's robust standard deviation and refits on the inliers.
     *
     * @param params    Estimation parameters (`thresh` is ignored).
     * @param kernel    Motion-model kernel (`homography2d` / `affine2d`).
     * @param from      Source points. @param to Destination points.
     * @param count     Number of correspondences.
     * @param model     Output 3×3 model matrix.
     * @param mask      Output 0/1 inlier mask (`count`×1 matrix), optional.
     * @param max_iters Iteration cap. Default 1000.
     * @returns `true` when a model was found.
     */
    lmeds(params: ransac_params_t, kernel: any, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean;
}
