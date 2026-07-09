import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
/**
 * Contract every motion-model kernel must fulfil to be usable with
 * `motion_estimator.ransac` / `lmeds`. Implemented by both `homography2d`
 * and `affine2d` (see `src/motion_model/motion_model.ts`).
 */
export interface IHomography2d {
    /**
     * Estimates a model from `count` point correspondences and writes it
     * into `model` (a 3×3 matrix).
     *
     * @returns The number of models produced (0 on degenerate input).
     */
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    /**
     * Computes the per-correspondence squared reprojection error of `model`
     * into the `err` array.
     */
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    /**
     * Validates a minimal sample before model estimation (e.g. rejects
     * degenerate point configurations). Returning `false` makes the
     * estimator draw a new sample.
     */
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
}
