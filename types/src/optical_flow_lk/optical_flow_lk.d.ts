import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { pyramid_t } from '../pyramid_t/pyramid_t';
/**
 * Pyramidal Lucas–Kanade sparse optical flow: tracks a set of points from a
 * previous frame to the current one by iteratively minimizing the local
 * intensity difference, coarse-to-fine across image pyramids (the classic
 * Bouguet formulation, using Scharr derivatives).
 *
 * Mirrors `jsfeat.optical_flow_lk` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class optical_flow_lk extends jsfeatNext {
    /** Bound `imgproc.scharr_derivatives`, used to build the gradient maps. */
    scharr_deriv: (src: matrix_t, dst: matrix_t) => void;
    constructor();
    /**
     * Tracks `count` points between two image pyramids (both already built
     * with `pyramid_t.build`). For each point the flow is estimated at the
     * coarsest level and refined down to level 0.
     *
     * @param prev_pyr Pyramid of the previous frame.
     * @param curr_pyr Pyramid of the current frame.
     * @param prev_xy  Input point coordinates, interleaved `[x0,y0,x1,y1,…]`.
     * @param curr_xy  Output tracked coordinates (same layout). Seed it with
     *                 a prediction or a copy of `prev_xy`.
     * @param count    Number of points to track.
     * @param win_size Side of the square tracking window (e.g. 15 or 21).
     * @param max_iter Max refinement iterations per level. Default 30.
     * @param status   Output per-point flags: 1 = tracked, 0 = lost.
     *                 Allocated internally when omitted.
     * @param eps      Convergence threshold on the update step. Default 0.01.
     * @param min_eigen_threshold Minimum normalized eigenvalue of the
     *                 spatial-gradient matrix; below it a point is dropped
     *                 (textureless window). Default 0.0001.
     */
    track(prev_pyr: pyramid_t, curr_pyr: pyramid_t, prev_xy: Float32Array, curr_xy: Float32Array, count: number, win_size: number, max_iter: number, status: Uint8Array, eps: number, min_eigen_threshold: number): void;
}
