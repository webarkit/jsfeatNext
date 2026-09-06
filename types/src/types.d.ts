import { matrix_t } from './matrix_t/matrix_t';
import { point_t } from './point_t/point_t';
/**
 * Every typed-array element storage the library uses. `matrix_t.data`, the
 * cache-pool node views and the pyramid level buffers are always one of these
 * four, selected by the packed type signature (`U8_t`/`S32_t`/`F32_t`/`F64_t`).
 * Introduced for issue #85 to replace the scattered `any` on buffer payloads.
 */
export type TypedArray = Uint8Array | Int32Array | Float32Array | Float64Array;
/**
 * The non-`U8` numeric typed arrays. Used by the linear-algebra kernels, whose
 * matrices are always `S32`/`F32`/`F64` — never `U8` — so their helpers accept
 * this narrower union rather than the full {@link TypedArray}.
 */
export type NumericArray = Int32Array | Float32Array | Float64Array;
/**
 * The contract a motion-model kernel must satisfy to be used by
 * `motion_estimator.ransac` / `.lmeds`. Implemented by {@link affine2d} and
 * {@link homography2d} (both via their `motion_model` base). Introduced for
 * issue #85 to replace `kernel: any` in `motion_estimator`.
 */
export interface MotionKernel {
    /** Fits the model to `count` correspondences; returns the number of models produced (>0 on success). */
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    /** Fills `err` with the per-correspondence transfer error under `model`. */
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    /** Rejects degenerate minimal samples (e.g. collinear points); returns `true` when the subset is usable. */
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
    /**
     * Non-linear (Levenberg-Marquardt) refinement of `model` over all
     * `count` correspondences, minimizing reprojection error rather than the
     * algebraic DLT/least-squares residual `run()` does (issue #187). Optional:
     * only {@link homography2d} and {@link affine2d} implement it; callers
     * (e.g. `motion_estimator.find_homography`) must feature-test for it.
     *
     * @returns The number of models produced (>0 on success), matching `run()`.
     */
    refine?(from: point_t[], to: point_t[], model: matrix_t, count: number, iters?: number): number;
}
/**
 * A source of numbers in `[0, 1)`, matching the signature of `Math.random`.
 * `ransac_params_t`'s `rng` field and `motion_estimator.get_subset` accept
 * one of these so callers can substitute a seeded generator (e.g.
 * {@link math.mulberry32}) for deterministic RANSAC/LMEDS runs — issue #189.
 */
export type RandomFn = () => number;
