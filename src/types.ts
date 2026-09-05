/*
 *  types.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import type { matrix_t } from "./matrix_t/matrix_t";
import type { point_t } from "./point_t/point_t";

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
