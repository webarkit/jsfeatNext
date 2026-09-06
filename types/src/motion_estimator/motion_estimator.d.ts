import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
import { ransac_params_t } from './ransac_params_t';
import { MotionKernel, RandomFn, TypedArray } from '../types';
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
     * and validates it with `kernel.check_subset`. Retries up to 1000 times
     * before giving up.
     *
     * @param kernel   The motion-model kernel (validates the sample).
     * @param from     Source points. @param to Destination points.
     * @param need_cnt Sample size to draw.
     * @param max_cnt  Total number of correspondences to draw from.
     * @param from_sub Output array receiving the sampled source points.
     * @param to_sub   Output array receiving the sampled destination points.
     * @param rng      Source of `[0, 1)` randomness. Default `Math.random`
     *                  (issue #189 — pass a seeded {@link RandomFn}, e.g.
     *                  `math.mulberry32`, for reproducible draws).
     * @returns `true` when a valid subset was found.
     */
    get_subset(kernel: MotionKernel, from: point_t[], to: point_t[], need_cnt: number, max_cnt: number, from_sub: point_t[], to_sub: point_t[], rng?: RandomFn): boolean;
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
    find_inliers(kernel: MotionKernel, model: matrix_t, from: point_t[], to: point_t[], count: number, thresh: number, err: Int32Array | Float32Array, mask: TypedArray | number[]): number;
    /**
     * RANSAC estimation: repeatedly fits the kernel's model to random
     * minimal samples, keeping the hypothesis with the most inliers
     * (adapting the iteration count from the observed inlier ratio).
     *
     * Returns the winning **minimal-sample** model as-is — it does not refit
     * over the full inlier set, matching both `jsfeat.motion_estimator.ransac`
     * and `cv::RANSACPointSetRegistrator::run`. The refit OpenCV performs
     * afterwards, in `cv::findHomography`, is a separate caller-level layer;
     * see {@link find_homography} (issue #185).
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
    ransac(params: ransac_params_t, kernel: MotionKernel, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean;
    /**
     * Least-median-of-squares estimation: like {@link ransac} but scores each
     * hypothesis by the MEDIAN squared error (no inlier threshold needed —
     * robust up to 50% outliers), then derives an inlier threshold from the
     * winning median's robust standard deviation and classifies inliers
     * against it.
     *
     * Like {@link ransac}, the returned model is the winning **minimal-sample**
     * fit — it does not refit over the classified inliers, matching
     * `jsfeat.motion_estimator.lmeds` and `cv::LMeDSPointSetRegistrator::run`.
     * See {@link find_homography} (issues #185, #188).
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
    lmeds(params: ransac_params_t, kernel: MotionKernel, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean;
    /**
     * The caller-level layer OpenCV has (`cv::findHomography` /
     * `cv::estimateAffine2D`) and jsfeat never ported: runs {@link ransac} or
     * {@link lmeds} to find a robust minimal-sample model, then refits the
     * model over the full inlier set of the winning hypothesis via a single
     * extra `kernel.run()`, and recomputes the inlier mask against the refit
     * model so `model` and `mask` describe the same transform (mirroring
     * OpenCV's `runKernel` + `LMSolver`-less refit + `computeError` steps in
     * `fundam.cpp`, minus the Levenberg-Marquardt polish tracked in #187).
     *
     * `ransac()`/`lmeds()` themselves are untouched by this and stay at
     * jsfeat/OpenCV parity — see their doc comments and issues #185/#188.
     *
     * If the refit is degenerate (`kernel.run()` on the inlier set returns
     * `<= 0`) or collapses the inlier count below `params.size`, the
     * pre-refit minimal-sample model and mask are kept rather than returning
     * garbage.
     *
     * @param params    Estimation parameters ({@link ransac_params_t});
     *                   `params.size` is the kernel's minimal sample size
     *                   (4 for `homography2d`, 3 for `affine2d`).
     * @param kernel    Motion-model kernel (`homography2d` / `affine2d`).
     * @param from      Source points. @param to Destination points.
     * @param count     Number of correspondences.
     * @param model     Output model matrix; refit over all inliers on success.
     * @param mask      Output 0/1 inlier mask (`count`×1 matrix), recomputed
     *                   against the refit model. Optional.
     * @param method       `"ransac"` (default) or `"lmeds"`.
     * @param max_iters    Iteration cap forwarded to the underlying estimator. Default 1000.
     * @param refine_iters Non-linear (Levenberg-Marquardt) polish over the
     *                      final inlier set after the linear refit, via
     *                      `kernel.refine()` (issue #187) — minimizes actual
     *                      reprojection error rather than the linear refit's
     *                      algebraic residual. Default 0 (skipped, matching
     *                      this method's pre-#187 behavior); has no effect
     *                      when `kernel` doesn't implement `refine()`.
     * @returns `true` when the underlying estimator (`ransac`/`lmeds`) found a model.
     */
    find_homography(params: ransac_params_t, kernel: MotionKernel, from: point_t[], to: point_t[], count: number, model: matrix_t, mask?: matrix_t, method?: "ransac" | "lmeds", max_iters?: number, refine_iters?: number): boolean;
}
