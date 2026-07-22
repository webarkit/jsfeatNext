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
    /** 3×3 normalization transform for the source points. */
    T0: matrix_t;
    /** 3×3 normalization transform for the destination points. */
    T1: matrix_t;
    /** 6×6 normal-equations matrix scratch (`Aᵀ·A`). */
    AtA: matrix_t;
    /** 6×1 normal-equations right-hand side scratch (`Aᵀ·B`). */
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
}
/**
 * Homography (8-DOF perspective) motion-model kernel for
 * {@link motion_estimator}: estimates the 3×3 homography by the normalized
 * DLT method (smallest eigenvector of `LᵀL` via `linalg.eigenVV`).
 * Minimal sample size: 4.
 */
export declare class homography2d extends motion_model {
    /** 9×9 scratch for the DLT normal matrix `LᵀL`. */
    mLtL: matrix_t;
    /** 9×9 scratch for its eigenvectors. */
    Evec: matrix_t;
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
}
