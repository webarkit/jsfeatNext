/**
 * Parameter block for `motion_estimator.ransac` / `motion_estimator.lmeds`.
 *
 * Mirrors `jsfeat.ransac_params_t` from the original library.
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
    /**
     * @param size   Minimal sample size per hypothesis. Default 0.
     * @param thresh Inlier error threshold in pixels. Default 0.5.
     * @param eps    Assumed outlier ratio. Default 0.5.
     * @param prob   Desired success probability. Default 0.99.
     */
    constructor(size?: number, thresh?: number, eps?: number, prob?: number);
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
