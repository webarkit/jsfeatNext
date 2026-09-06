import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
import { TypedArray } from '../types';
/**
 * Shared base of the motion-model kernels ({@link affine2d},
 * {@link homography2d}): scratch matrices plus the point-normalization and
 * degeneracy helpers both kernels use. In original jsfeat these classes live
 * under the `jsfeat.motion_model` namespace.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class motion_model extends jsfeatNext {
    /**
     * 3×3 normalization transform for the source points. F64 (issue #186):
     * shared by `homography2d`'s DLT solve, which needs the precision, and
     * by `affine2d`'s denormalization step, which gets it for free.
     */
    T0: matrix_t;
    /** 3×3 normalization transform for the destination points. F64 (issue #186), see {@link T0}. */
    T1: matrix_t;
    /**
     * 6×6 normal-equations matrix scratch (`Aᵀ·A`), used only by
     * `affine2d`'s well-conditioned 6-DOF solve. Left at F32 — issue #186
     * measured the DLT precision problem in `homography2d` specifically and
     * scoped affine2d's `lu_solve` path out as unmeasured.
     */
    AtA: matrix_t;
    /** 6×1 normal-equations right-hand side scratch (`Aᵀ·B`). Left at F32, see {@link AtA}. */
    AtB: matrix_t;
    constructor();
    /** @returns `x²`. */
    sqr(x: number): number;
    /**
     * Computes isotropic (Hartley) normalization transforms for both point
     * sets: each is translated to its centroid and scaled so the mean
     * distance from the origin is √2 — the standard conditioning step before
     * solving for a transform.
     *
     * @param from  Source points. @param to Destination points.
     * @param T0    Output 3×3 transform (row-major array) for `from`.
     * @param T1    Output 3×3 transform (row-major array) for `to`.
     * @param count Number of points.
     */
    iso_normalize_points(from: point_t[], to: point_t[], T0: TypedArray, T1: TypedArray, count: number): void;
    /**
     * Checks whether the last point of a minimal sample lies on a line
     * through any two previously selected points (a degenerate
     * configuration for transform estimation).
     *
     * @param points The sampled points. @param count Sample size.
     * @returns `true` when a collinear triple exists.
     */
    have_collinear_points(points: point_t[], count: number): boolean;
}
/**
 * Affine (6-DOF) motion-model kernel for {@link motion_estimator}: estimates
 * the 2×3 affine transform (stored in a 3×3 matrix with `[0,0,1]` bottom
 * row) by least squares over normalized points. Minimal sample size: 3.
 */
export declare class affine2d extends motion_model {
    constructor();
    /**
     * Estimates the affine transform mapping `from` → `to` by solving the
     * normal equations (`lu_solve`) over isotropically normalized points,
     * then denormalizes into `model`.
     *
     * @param from  Source points. @param to Destination points.
     * @param model Output 3×3 matrix (last row set to `[0, 0, 1]`).
     * @param count Number of correspondences (≥ 3).
     * @returns 1 (one model produced).
     */
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    /**
     * Per-point squared reprojection error of the affine model:
     * `err[i] = |to[i] - A·from[i]|²`. (Ported from original jsfeat's
     * affine2d; jsfeatNext was missing it, which made RANSAC/LMEDS with an
     * affine2d kernel throw — see issue #51.)
     *
     * @param from  Source points. @param to Destination points.
     * @param model 3×3 affine model (first 6 entries used).
     * @param err   Output per-point squared errors.
     * @param count Number of correspondences.
     */
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    /**
     * Affine sampling has no degenerate-quad check — every minimal sample is
     * accepted (matches original jsfeat).
     *
     * @returns Always `true`.
     */
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
    /**
     * Non-linear (Levenberg-Marquardt) refinement of the affine `model`
     * (issue #187), mirroring OpenCV's `Affine2DRefineCallback`. The model
     * is already linear in its 6 parameters, and `run()` already solves the
     * exact least-squares optimum for them via normal equations — so LM
     * seeded from that solution has zero gradient at the start and
     * terminates immediately without changing it (this mirrors OpenCV's own
     * note that `estimateAffine2D` skips the extra `runKernel` refit
     * `findHomography` does, since LM alone already converges to the LS
     * answer for a linear model). Implemented for API symmetry with
     * {@link homography2d.refine}, not because it moves the answer.
     *
     * @param from  Source points. @param to Destination points.
     * @param model 3×3 affine model to refine in place (bottom row `[0,0,1]`).
     * @param count Number of correspondences.
     * @param iters LM iteration cap. Default 10.
     * @returns 1 (an affine model has no degenerate-normalization case).
     */
    refine(from: point_t[], to: point_t[], model: matrix_t, count: number, iters?: number): number;
}
/**
 * Homography (8-DOF perspective) motion-model kernel for
 * {@link motion_estimator}: estimates the 3×3 homography by the normalized
 * DLT method (smallest eigenvector of `LᵀL` via `linalg.eigenVV`).
 * Minimal sample size: 4.
 */
export declare class homography2d extends motion_model {
    /**
     * 9×9 scratch for the DLT normal matrix `LᵀL`. F64 (issue #186): forming
     * the normal equations already costs half the available significant
     * digits (squares the condition number vs. solving on `L` directly), so
     * accumulating 36 upper-triangle sums per point in F32 on top of that
     * capped precision well below what's achievable — matches OpenCV's
     * `HomographyEstimatorCallback::runKernel`, which uses `double` throughout.
     */
    mLtL: matrix_t;
    /** 9×9 scratch for its eigenvectors. F64 (issue #186), see {@link mLtL}. */
    Evec: matrix_t;
    /**
     * F64 scratch for the model through eigenvector extraction, both
     * denormalization multiplies and the final scale-to-`[8]=1` step (issue
     * #186) — `model` itself may be F32 (every existing caller constructs it
     * that way), so writing directly into it partway through would round
     * back down to F32 before the computation is even finished. Copied into
     * the caller's `model` once, at the very end of {@link run}.
     */
    private model64;
    constructor();
    /**
     * Estimates the homography mapping `from` -> `to` by normalized DLT:
     * builds the 9x9 normal matrix over normalized points, takes the
     * eigenvector of the smallest eigenvalue as the model, denormalizes and
     * scales so `model[8] === 1`.
     *
     * @param from  Source points. @param to Destination points.
     * @param model Output 3x3 homography.
     * @param count Number of correspondences (>= 4).
     * @returns 1 on success, 0 on a degenerate (zero-spread) configuration.
     */
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    /**
     * Per-point squared reprojection error of the homography:
     * `err[i] = |to[i] - project(model, from[i])|^2`.
     *
     * @param from  Source points. @param to Destination points.
     * @param model 3x3 homography to evaluate.
     * @param err   Output per-point squared errors.
     * @param count Number of correspondences.
     */
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    /**
     * Rejects minimal samples whose four points are not consistently
     * oriented (mixed triangle-orientation signs between the source and
     * destination quads), which would produce a flipped homography.
     *
     * @returns `true` when the 4-point sample is usable.
     */
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
    /**
     * Non-linear (Levenberg-Marquardt) refinement of the homography `model`
     * over all `count` correspondences, minimizing forward-transfer
     * (reprojection) error rather than the algebraic DLT residual `run()`
     * minimizes (issue #187) — this is what actually delivers OpenCV's
     * sub-pixel accuracy; the `run()`/refit precision work in #185/#186 only
     * gets a linear (algebraic) fit as close as a linear fit can get.
     * Mirrors OpenCV's `HomographyRefineCallback` (residual and Jacobian
     * below match its analytic derivation exactly) run through `LMSolver`.
     *
     * `model` must already satisfy this class's `h33 === 1` invariant (e.g.
     * the output of `run()` or `find_homography()` — see `error()`'s own
     * hardcoded `+ 1.0` term). After refinement, the same invariant is
     * re-enforced: a refined `h33` too close to zero to safely rescale is
     * reported as degenerate rather than returning a corrupted model, exactly
     * as `run()`'s own final-scale guard does.
     *
     * @param from  Source points. @param to Destination points.
     * @param model 3×3 homography to refine in place.
     * @param count Number of correspondences.
     * @param iters LM iteration cap. Default 10 (OpenCV's `refineIters` default).
     * @returns 1 on success, 0 if the refined model can't be rescaled to `h33 = 1`.
     */
    refine(from: point_t[], to: point_t[], model: matrix_t, count: number, iters?: number): number;
}
