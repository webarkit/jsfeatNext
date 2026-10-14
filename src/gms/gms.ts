/*
 *  gms.ts
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
 *  Portions of this file are ported to TypeScript from OpenCV,
 *  opencv_contrib/modules/xfeatures2d/src/gms.cpp
 *  (https://github.com/opencv/opencv_contrib), Copyright (c) OpenCV
 *  contributors, licensed under the Apache License, Version 2.0; a copy is
 *  included in LICENSES/Apache-2.0.txt. This file is a modified version of
 *  that source. GMS: J. Bian et al., "GMS: Grid-based Motion Statistics for
 *  Fast, Ultra-robust Feature Correspondence", CVPR 2017.
 *
 */

import jsfeatNext from "../core/core";
import type { keypoint_t } from "../keypoint_t/keypoint_t";
import type { match_t } from "../bfmatcher/match_t";

/** An image size in pixels, the equivalent of OpenCV's `cv::Size`. */
export interface IGmsSize {
    width: number;
    height: number;
}

/** Cells per side of the left (query) grid: OpenCV hardcodes `mGridSizeLeft = Size(20, 20)`. */
const GRID_LEFT = 20;
/** Number of left cells, `mGridNumberLeft`. */
const CELLS_LEFT = GRID_LEFT * GRID_LEFT;

/**
 * `mRotationPatterns`, copied verbatim from gms.cpp: the 3x3 neighbourhood
 * turned in 8 steps of 45 degrees. Under pattern `p`, position `j` of the left
 * cell's neighbourhood is paired with position `p[j] - 1` of the right cell's.
 * Pattern 1 is the identity, and the only one searched without `with_rotation`.
 */
const ROTATION_PATTERNS: readonly (readonly number[])[] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 1, 2, 7, 5, 3, 8, 9, 6],
    [7, 4, 1, 8, 5, 2, 9, 6, 3],
    [8, 7, 4, 9, 5, 1, 6, 3, 2],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [6, 9, 8, 3, 5, 7, 2, 1, 4],
    [3, 6, 9, 2, 5, 8, 1, 4, 7],
    [2, 3, 6, 1, 5, 9, 4, 7, 8],
];

/**
 * Cells per side of the right (train) grid, per scale index: `setScale`'s
 * `cvRound(20 * mScaleRatios[scale])`, with `mScaleRatios = {1, 1/2,
 * 1/sqrt(2), sqrt(2), 2}`, so 20, 10, 14 (14.14), 28 (28.28) and 40. Index 0,
 * the left grid's size, is the only one searched without `with_scale`.
 */
const GRID_RIGHT: readonly number[] = [20, 10, 14, 28, 40];

/**
 * Column and row offset of each position of a 3x3 neighbourhood, in
 * `getNB9`'s order: position `j` is `(xi + 1) + 3 * (yi + 1)`.
 */
const NB9_DX: readonly number[] = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
const NB9_DY: readonly number[] = [-1, -1, -1, 0, 0, 0, 1, 1, 1];

/**
 * Layout of the per-left-cell table borrowed from the pool: four
 * `CELLS_LEFT`-long `Int32` blocks in one buffer.
 */
const HEAD = 0; // first match of the cell's linked list, -1 when empty
const SIZE = CELLS_LEFT; // matches counted in the cell (`mNumberPointsInPerCellLeft`)
const PAIR = 2 * CELLS_LEFT; // verified right cell, or -2 (`mCellPairs`)
const OCCUPIED = 3 * CELLS_LEFT; // the cells that hold at least one match, in first-seen order

/** The scratch arrays of one {@link gms.filter} call, all borrowed from the shared pool. */
interface gms_scratch_t {
    /**
     * Per match, 4 floats: the left point already scaled to the 20x20 grid
     * (`x * 20`, `y * 20`, each a float32 product), then the right point
     * normalised to [0, 1). `pts[4 * i]` is -1 when the match is ignored
     * because a keypoint lies outside its image.
     */
    pts: Float32Array;
    /** Per match: its right cell (computed in grid type 1, reused by 2-4), or -1. */
    rcell: Int32Array;
    /** Per match: its left cell in the current grid type, or -1. */
    lcell: Int32Array;
    /** Per match: the next match of the same left cell (linked list), or -1. */
    next: Int32Array;
    /** Per left cell: see {@link HEAD}, {@link SIZE}, {@link PAIR}, {@link OCCUPIED}. */
    cells: Int32Array;
    /** Per right cell: match count while one left cell is examined, zero otherwise. */
    rc: Int32Array;
    /** Per match: 1 when some grid type of the current run kept it. */
    mask: Uint8Array;
    /** Per match: the mask of the best run so far (swapped with `mask`, never copied). */
    best: Uint8Array;
}

/**
 * GMS — **Grid-based Motion Statistics** (Bian et al., CVPR 2017), a filter
 * that separates correct from incorrect matches before RANSAC. A correct match
 * has neighbours whose own matches land near its partner, because surfaces
 * move coherently; a wrong match is a random event whose neighbours scatter.
 * GMS counts matches per pair of grid cells and keeps the cells whose 3x3
 * neighbourhood supports them.
 *
 * Ported from OpenCV's `cv::xfeatures2d::matchGMS`, file
 * `opencv_contrib/modules/xfeatures2d/src/gms.cpp` as of release 4.5.0, the
 * first release under Apache-2.0; the file is byte-identical through 4.14.0.
 * The port reproduces OpenCV's output bit-for-bit, which the OpenCV fixtures
 * in `tests/reference/gms.opencv.test.ts` pin. jsfeat had no GMS (#134).
 *
 * A stateless singleton: call it as `jsfeatNext.gms.filter(...)`.
 */
export class gms extends jsfeatNext {
    /**
     * Keeps the matches that GMS judges correct. Mirrors `matchGMS(size1,
     * size2, keypoints1, keypoints2, matches1to2, matchesGMS, withRotation,
     * withScale, thresholdFactor)`, with the output returned instead of
     * passed in.
     *
     * Only keypoint positions are read (`x`, `y`), and of the matches only
     * `queryIdx` and `trainIdx`: the descriptor distance plays no part.
     * Coordinates are rounded to float32 first, as `cv::KeyPoint` stores them.
     *
     * The search runs one pass per rotation pattern and right grid size
     * tried: 1 by default, 8 with `with_rotation`, 5 with `with_scale` and
     * 40 with both. It returns the matches kept by the pass that keeps the
     * most, the first one on a tie, as OpenCV does; when no pass keeps any,
     * the result is empty.
     *
     * The cost of a pass is proportional to the number of matches, not to
     * the grid: it counts and visits only the occupied cells, where OpenCV
     * clears and scans a `400 x N` matrix (`N` up to 40 x 40 on the scale
     * path). Only a 400-cell table and one row of `N` counters are cleared,
     * once per call.
     *
     * Differences from OpenCV, only where OpenCV computes a wrong cell or reads
     * out of bounds: a match whose keypoint lies outside `[0, width) x [0,
     * height)` of its image is ignored (never counted, never kept), and a match
     * index outside its keypoint array throws instead of reading past it.
     *
     * @example
     * ```ts
     * // two U8C1 frames: detect, orient and describe ORB features in each
     * const kp1 = Array.from({ length: 500 }, () => new jsfeatNext.keypoint_t());
     * const kp2 = Array.from({ length: 500 }, () => new jsfeatNext.keypoint_t());
     * const n1 = jsfeatNext.fast_corners.detect(img1, kp1, 20);
     * const n2 = jsfeatNext.fast_corners.detect(img2, kp2, 20);
     * for (let i = 0; i < n1; i++) kp1[i].angle = jsfeatNext.orb.ic_angle(img1, kp1[i].x, kp1[i].y);
     * for (let i = 0; i < n2; i++) kp2[i].angle = jsfeatNext.orb.ic_angle(img2, kp2[i].x, kp2[i].y);
     * const d1 = new jsfeatNext.matrix_t(32, n1, jsfeatNext.U8C1_t);
     * const d2 = new jsfeatNext.matrix_t(32, n2, jsfeatNext.U8C1_t);
     * jsfeatNext.orb.describe(img1, kp1, n1, d1);
     * jsfeatNext.orb.describe(img2, kp2, n2, d2);
     *
     * // match, then let GMS drop the matches without neighbourhood support
     * const good = jsfeatNext.bfmatcher.ratio_test(jsfeatNext.bfmatcher.knnMatch(d1, d2, 2), 0.75);
     * const kept = jsfeatNext.gms.filter(
     *     { width: img1.cols, height: img1.rows },
     *     { width: img2.cols, height: img2.rows },
     *     kp1,
     *     kp2,
     *     good
     * );
     *
     * // a higher inlier ratio means fewer RANSAC iterations for the same confidence
     * const from = kept.map((m) => kp1[m.queryIdx]);
     * const to = kept.map((m) => kp2[m.trainIdx]);
     * const H = new jsfeatNext.matrix_t(3, 3, jsfeatNext.F32C1_t);
     * const params = new jsfeatNext.ransac_params_t(4, 3, 0.5, 0.99);
     * jsfeatNext.motion_estimator.find_homography(params, jsfeatNext.homography2d, from, to, kept.length, H);
     * ```
     *
     * @param size1            Size of the query image, the one `keypoints1` come from.
     * @param size2            Size of the train image, the one `keypoints2` come from.
     * @param keypoints1       Query keypoints; `match.queryIdx` indexes this array.
     * @param keypoints2       Train keypoints; `match.trainIdx` indexes this array.
     * @param matches          Nearest-neighbour matches, query to train.
     * @param with_rotation    Also search the 8 in-plane rotations of the
     *                         neighbourhood, in 45 degree steps. Default
     *                         `false`, as in OpenCV.
     * @param with_scale       Also search 5 scales of the train image, as
     *                         right grids of 20, 10, 14, 28 and 40 cells per
     *                         side. Default `false`, as in OpenCV.
     * @param threshold_factor The higher, the fewer matches kept. Default 6, as in OpenCV.
     * @returns The kept matches: a subset of `matches`, the same objects, in
     *          input order (a match present twice in the input is kept or
     *          dropped twice).
     * @throws {RangeError} if `size1` or `size2` lacks a finite width and
     *         height above 0, or a match's `queryIdx` or `trainIdx` is not an
     *         index of its keypoint array.
     * @throws {TypeError} if a match references a keypoint array slot that
     *         holds `undefined` or `null`.
     */
    filter(
        size1: IGmsSize,
        size2: IGmsSize,
        keypoints1: keypoint_t[],
        keypoints2: keypoint_t[],
        matches: match_t[],
        with_rotation = false,
        with_scale = false,
        threshold_factor = 6
    ): match_t[] {
        // Everything that can reject the input is checked before the first
        // buffer is borrowed, so a malformed size, an index out of range or a
        // hole at a referenced index throws with the shared pool balanced.
        // Past this point only a keypoint whose x or y accessor throws could
        // still escape with buffers borrowed.
        gms.check_size("size1", size1);
        gms.check_size("size2", size2);
        const count = matches.length;
        for (let i = 0; i < count; ++i) {
            gms.check_keypoint(i, matches[i].queryIdx, keypoints1);
            gms.check_keypoint(i, matches[i].trainIdx, keypoints2);
        }
        if (count === 0) return [];

        // getInlierMask's branches: which scales (right grid sizes) and which
        // rotation patterns are tried.
        const scales = with_scale ? GRID_RIGHT.length : 1;
        const rotations = with_rotation ? ROTATION_PATTERNS.length : 1;
        let cells_right = 0;
        for (let scale = 0; scale < scales; ++scale) {
            cells_right = Math.max(cells_right, GRID_RIGHT[scale] * GRID_RIGHT[scale]);
        }

        const pts_node = this.cache.get_buffer(count << 4);
        const rcell_node = this.cache.get_buffer(count << 2);
        const lcell_node = this.cache.get_buffer(count << 2);
        const next_node = this.cache.get_buffer(count << 2);
        const cells_node = this.cache.get_buffer(CELLS_LEFT << 4);
        const rc_node = this.cache.get_buffer(cells_right << 2);
        const mask_node = this.cache.get_buffer(count);
        const best_node = this.cache.get_buffer(count);
        const s: gms_scratch_t = {
            pts: pts_node.f32,
            rcell: rcell_node.i32,
            lcell: lcell_node.i32,
            next: next_node.i32,
            cells: cells_node.i32,
            rc: rc_node.i32,
            mask: mask_node.u8,
            best: best_node.u8,
        };

        // Pool buffers are recycled, not zeroed. Only these need a clean
        // start; run() leaves them clean again on return.
        s.cells.fill(-1, HEAD, HEAD + CELLS_LEFT);
        s.cells.fill(0, SIZE, SIZE + CELLS_LEFT);
        s.rc.fill(0, 0, cells_right);

        gms.normalize(size1, size2, keypoints1, keypoints2, matches, s.pts);

        // getInlierMask: scale outer, rotation inner. A run replaces the best
        // mask only when it keeps strictly more matches, starting from 0, so
        // the first of tied runs wins and, if every run keeps nothing, the
        // result is empty (the default path's single run agrees: its mask is
        // then all false).
        let max_inlier = 0;
        for (let scale = 0; scale < scales; ++scale) {
            const grid_right = GRID_RIGHT[scale];
            gms.right_cells(count, grid_right, s);
            for (let rotation = 0; rotation < rotations; ++rotation) {
                const kept = this.run(count, ROTATION_PATTERNS[rotation], grid_right, threshold_factor, s);
                if (kept > max_inlier) {
                    max_inlier = kept;
                    const t = s.best;
                    s.best = s.mask;
                    s.mask = t;
                }
            }
        }

        const out: match_t[] = [];
        if (max_inlier > 0) {
            for (let i = 0; i < count; ++i) {
                if (s.best[i]) out.push(matches[i]);
            }
        }

        this.cache.put_buffer(best_node);
        this.cache.put_buffer(mask_node);
        this.cache.put_buffer(rc_node);
        this.cache.put_buffer(cells_node);
        this.cache.put_buffer(next_node);
        this.cache.put_buffer(lcell_node);
        this.cache.put_buffer(rcell_node);
        this.cache.put_buffer(pts_node);
        return out;
    }

    /** Throws unless `size` has a finite width and height above 0. */
    private static check_size(name: string, size: IGmsSize): void {
        const w = size == null ? undefined : size.width;
        const h = size == null ? undefined : size.height;
        if (!(Number.isFinite(w) && w > 0 && Number.isFinite(h) && h > 0)) {
            throw new RangeError(`gms.filter: ${name} must have a finite width and height > 0, got ${w} x ${h}`);
        }
    }

    /** Throws unless `idx` is an index of `keypoints` whose slot holds a keypoint. */
    private static check_keypoint(match: number, idx: number, keypoints: keypoint_t[]): void {
        const len = keypoints.length;
        if (!Number.isInteger(idx) || idx < 0 || idx >= len) {
            throw new RangeError(`gms.filter: match ${match} references keypoint ${idx} of ${len}`);
        }
        const kp = keypoints[idx];
        if (kp == null) {
            throw new TypeError(`gms.filter: match ${match} references keypoint ${idx}, which is ${kp}`);
        }
    }

    /**
     * `normalizePoints`, per match rather than per keypoint, so a long
     * keypoint pool costs nothing beyond the entries the matches reference.
     *
     * Precision mirrors gms.cpp: `KeyPoint::pt` is a `Point2f`, so the
     * coordinate is a float; `pt.x / width` is float / int, a float division
     * (rounding the double quotient of two floats to float gives the same
     * value); `pt.x * mGridSizeLeft.width` is float * int, a float product.
     */
    private static normalize(
        size1: IGmsSize,
        size2: IGmsSize,
        keypoints1: keypoint_t[],
        keypoints2: keypoint_t[],
        matches: match_t[],
        pts: Float32Array
    ): void {
        const w1 = size1.width,
            h1 = size1.height,
            w2 = size2.width,
            h2 = size2.height;
        for (let i = 0, k = 0; i < matches.length; ++i, k += 4) {
            const p = keypoints1[matches[i].queryIdx];
            const q = keypoints2[matches[i].trainIdx];
            const x1 = Math.fround(p.x),
                y1 = Math.fround(p.y),
                x2 = Math.fround(q.x),
                y2 = Math.fround(q.y);
            // OpenCV has no such test: a negative coordinate wraps to another
            // cell or yields -1, and a right coordinate >= the size indexes
            // past its statistics row. Both cells become -1 instead, so the
            // match is neither counted nor kept (a -1 on one side only could
            // still be marked an inlier, against an empty cell's -1). Written
            // as a positive test so a NaN coordinate is ignored too.
            if (x1 >= 0 && x1 < w1 && y1 >= 0 && y1 < h1 && x2 >= 0 && x2 < w2 && y2 >= 0 && y2 < h2) {
                pts[k] = Math.fround(Math.fround(x1 / w1) * GRID_LEFT);
                pts[k + 1] = Math.fround(Math.fround(y1 / h1) * GRID_LEFT);
                pts[k + 2] = Math.fround(x2 / w2);
                pts[k + 3] = Math.fround(y2 / h2);
            } else {
                pts[k] = -1;
            }
        }
    }

    /**
     * `getGridIndexRight` for every match, into `s.rcell`, for a right grid
     * of `grid_right` cells per side. OpenCV computes it in grid type 1 of
     * every run and reuses it in types 2-4 (`assignMatchPairs`); it depends
     * on the grid size only, so here it is computed once per scale and shared
     * by the rotations. The product is a float, as on the left.
     *
     * OpenCV has no bound test here. For an integer image size none can
     * trigger (a coordinate below the size normalises to at most 1 - 2^-24,
     * whose product with any of the grid sizes rounds below the size), but a
     * fractional size could round up to the edge and wrap into the next row.
     */
    private static right_cells(count: number, grid_right: number, s: gms_scratch_t): void {
        const { pts, rcell } = s;
        for (let i = 0, k = 0; i < count; ++i, k += 4) {
            if (pts[k] < 0) {
                rcell[i] = -1;
                continue;
            }
            const x = Math.floor(Math.fround(pts[k + 2] * grid_right));
            const y = Math.floor(Math.fround(pts[k + 3] * grid_right));
            rcell[i] = x < grid_right && y < grid_right ? x + y * grid_right : -1;
        }
    }

    /**
     * `GMSMatcher::run` for one rotation pattern and one right grid size,
     * whose right cells {@link gms.right_cells} has put in `s.rcell`: four
     * passes, one per grid type (the left grid shifted by half a cell in x,
     * y, both or neither), whose kept matches are OR-ed into `s.mask`.
     *
     * OpenCV fills and scans a dense `400 x N` motion-statistics matrix on
     * every pass. Here each left cell keeps a linked list of its matches, and
     * the statistics a cell needs are counted from those lists, so a pass
     * costs O(matches): a cell's list is walked twice to find its best right
     * cell (count, then reset `rc`) and at most 9 more times, once for each
     * occupied cell it neighbours, to score them.
     *
     * @returns The number of kept matches.
     */
    private run(
        count: number,
        pattern: readonly number[],
        grid_right: number,
        threshold_factor: number,
        s: gms_scratch_t
    ): number {
        const { pts, rcell, lcell, next, cells, rc, mask } = s;
        mask.fill(0, 0, count);

        for (let type = 1; type <= 4; ++type) {
            // getGridIndexLeft: types 2 and 4 shift x, types 3 and 4 shift y.
            // The float product plus a double 0.5 is evaluated in double.
            const sx = type === 2 || type === 4 ? 0.5 : 0;
            const sy = type === 3 || type === 4 ? 0.5 : 0;

            // assignMatchPairs: count every match whose two cells are valid
            let occupied = 0;
            for (let i = 0, k = 0; i < count; ++i, k += 4) {
                if (rcell[i] < 0) {
                    lcell[i] = -1;
                    continue;
                }
                const x = Math.floor(pts[k] + sx);
                const y = Math.floor(pts[k + 1] + sy);
                if (x >= GRID_LEFT || y >= GRID_LEFT) {
                    lcell[i] = -1;
                    continue;
                }
                const l = x + y * GRID_LEFT;
                lcell[i] = l;
                if (cells[SIZE + l] === 0) cells[OCCUPIED + occupied++] = l;
                cells[SIZE + l]++;
                next[i] = cells[HEAD + l];
                cells[HEAD + l] = i;
            }

            // verifyCellPairs, over the occupied cells only: the empty ones
            // get -1 upstream, and no counted match can refer to them.
            for (let o = 0; o < occupied; ++o) {
                const l = cells[OCCUPIED + o];

                // OpenCV scans the row with a strict `>` from j = 0, so the
                // highest count wins and the lowest index wins a tie. Kept
                // incrementally, the same rule gives the same cell.
                let best = -1,
                    best_n = 0;
                for (let i = cells[HEAD + l]; i >= 0; i = next[i]) {
                    const r = rcell[i];
                    const n = ++rc[r];
                    if (n > best_n || (n === best_n && r < best)) {
                        best = r;
                        best_n = n;
                    }
                }
                for (let i = cells[HEAD + l]; i >= 0; i = next[i]) rc[rcell[i]] = 0;

                const lx = l % GRID_LEFT,
                    ly = (l / GRID_LEFT) | 0;
                const bx = best % grid_right,
                    by = (best / grid_right) | 0;
                let score = 0,
                    sum = 0,
                    numpair = 0;
                for (let j = 0; j < 9; ++j) {
                    const llx = lx + NB9_DX[j],
                        lly = ly + NB9_DY[j];
                    if (llx < 0 || llx >= GRID_LEFT || lly < 0 || lly >= GRID_LEFT) continue;
                    const p = pattern[j] - 1;
                    const rrx = bx + NB9_DX[p],
                        rry = by + NB9_DY[p];
                    if (rrx < 0 || rrx >= grid_right || rry < 0 || rry >= grid_right) continue;
                    const ll = llx + lly * GRID_LEFT;
                    const rr = rrx + rry * grid_right;
                    for (let i = cells[HEAD + ll]; i >= 0; i = next[i]) {
                        if (rcell[i] === rr) ++score;
                    }
                    sum += cells[SIZE + ll];
                    ++numpair;
                }
                // numpair >= 1: the centre pairs the cell with `best`. The
                // threshold is the same double expression as upstream.
                const thresh = threshold_factor * Math.sqrt(sum / numpair);
                cells[PAIR + l] = score < thresh ? -2 : best;
            }

            // Mark inliers, then leave the cell table clean for the next pass.
            for (let i = 0; i < count; ++i) {
                const l = lcell[i];
                if (l >= 0 && cells[PAIR + l] === rcell[i]) mask[i] = 1;
            }
            for (let o = 0; o < occupied; ++o) {
                const l = cells[OCCUPIED + o];
                cells[HEAD + l] = -1;
                cells[SIZE + l] = 0;
            }
        }

        let kept = 0;
        for (let i = 0; i < count; ++i) kept += mask[i];
        return kept;
    }
}
