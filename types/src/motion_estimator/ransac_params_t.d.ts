import { RandomFn } from '../types';
/**
 * Parameter block for `motion_estimator.ransac` / `motion_estimator.lmeds`.
 *
 * Mirrors `jsfeat.ransac_params_t` from the original library, plus an
 * injectable `rng` (issue #189): `get_subset`'s minimal-sample draws use
 * `Math.random` by default, matching jsfeat and existing callers exactly, but
 * a caller can pass a seeded {@link RandomFn} (e.g. `math.mulberry32`) here
 * for reproducible RANSAC/LMEDS runs instead.
 */
export declare class ransac_params_t {
    /** Minimal sample size per model hypothesis (e.g. 4 for homography2d, 3 for affine2d). */
    size: number;
    /** Inlier reprojection-error threshold in pixels (unused by LMEDS). */
    thresh: number;
    /** Assumed outlier ratio (0–1) used to derive the iteration count. */
    eps: number;
    /** Desired probability (0–1) of finding an outlier-free sample. */
    prob: number;
    /** Source of `[0, 1)` randomness for `get_subset`'s minimal-sample draws. Default `Math.random`. */
    rng: RandomFn;
    /**
     * @param size   Minimal sample size per hypothesis. Default 0.
     * @param thresh Inlier error threshold in pixels. Default 0.5.
     * @param eps    Assumed outlier ratio. Default 0.5.
     * @param prob   Desired success probability. Default 0.99.
     * @param rng    Source of `[0, 1)` randomness for minimal-sample draws. Default `Math.random`.
     */
    constructor(size?: number, thresh?: number, eps?: number, prob?: number, rng?: RandomFn);
    /**
     * Recomputes the RANSAC iteration count from the standard formula
     * `log(1 - prob) / log(1 - (1 - eps)^size)`, capped at `max_iters`.
     * Called by the estimator whenever a better inlier ratio is found.
     *
     * @param _eps      Current outlier-ratio estimate.
     * @param max_iters Upper bound on the number of iterations.
     * @returns The updated iteration count (integer).
     */
    update_iters(_eps: number, max_iters: number): number;
}
