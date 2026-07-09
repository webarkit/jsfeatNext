import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
/**
 * FAST-16 corner detector (Features from Accelerated Segment Test): a pixel
 * is a corner when ≥9 contiguous pixels on the 16-pixel Bresenham circle
 * around it are all brighter or all darker than the center by the threshold.
 * Detection is followed by score-based non-maximum suppression.
 *
 * Mirrors `jsfeat.fast_corners` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class fast_corners extends jsfeatNext {
    /** The 16 (x, y) circle offsets, interleaved, for radius 3. */
    private offsets16;
    /** Current detection threshold (0–255); set via {@link set_threshold}. */
    _threshold: number;
    /** 512-entry lookup: intensity difference (+255) → darker(1)/brighter(2)/similar(0). */
    threshold_tab: Uint8Array;
    /** Circle offsets converted to flat pixel offsets for the current row stride. */
    pixel_off: Int32Array;
    /** Scratch array used by the corner-score function. */
    score_diff: Int32Array;
    constructor();
    /**
     * Sets the detection threshold and rebuilds the classification lookup
     * table. Must be called at least once before {@link detect}.
     *
     * @param threshold Minimum center-vs-circle intensity difference, clamped to [0, 255].
     * @returns The clamped threshold actually stored.
     */
    set_threshold(threshold: number): number;
    /**
     * Detects FAST corners in a grayscale image, applying 3×3 non-maximum
     * suppression on the corner scores. Results are written into the
     * pre-allocated `corners` array (each entry gets `x`, `y`, `score`).
     *
     * @param src     Source grayscale image (`U8C1`).
     * @param corners Pre-allocated point pool to fill.
     * @param border  Pixels to skip along each edge (min 3). Default 3.
     * @returns The number of corners written into `corners`.
     */
    detect(src: matrix_t, corners: point_t[], border: number): number;
    private _cmp_offsets;
}
