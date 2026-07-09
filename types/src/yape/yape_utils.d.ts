/**
 * Precomputes the flat pixel offsets of a Bresenham-style circle of radius
 * `R` for an image with row stride `step`, walking the circle once around.
 * The first two offsets are duplicated at the end for wrap-around access.
 *
 * @param step Image row stride (width).
 * @param dirs Output offset table (must hold the circle + 2 entries).
 * @param R    Circle radius in pixels.
 * @returns The number of unique circle offsets written.
 */
export declare function precompute_directions(step: number, dirs: Int32Array, R: number): number;
/**
 * Counts how many of the 8 neighbors of a score-map pixel are non-zero —
 * YAPE's "third check" requiring a candidate to be supported by at least 3
 * responding neighbors.
 *
 * @param Sb   Score map. @param off Pixel index. @param step Row stride.
 * @returns The number of non-zero neighbors (0–8).
 */
export declare function third_check(Sb: Int32Array | number[], off: number, step: number): number;
/**
 * Signed local-extremum test over a square neighborhood: for positive `v`
 * no neighbor may exceed it; for negative `v` no neighbor may be smaller.
 *
 * @param p            Score map. @param off Pixel index.
 * @param v            Score value at `off`.
 * @param step         Row stride of the neighborhood scan.
 * @param neighborhood Half-size of the square window.
 * @returns `true` when the pixel is a local extremum of its sign.
 */
export declare function is_local_maxima(p: Int32Array, off: number, v: number, step: number, neighborhood: number): boolean;
/**
 * Scores one candidate pixel with the YAPE circle test: walks the sampling
 * circle as a small state machine tracking runs of brighter/darker/similar
 * samples (relative to the `[Im, Ip]` tolerance band) and writes the
 * accumulated signed score — or 0 when the pattern disqualifies the pixel —
 * into `Scores[x]`.
 *
 * @param I        Image data. @param x Candidate pixel index.
 * @param Scores   Output score map.
 * @param Im       Lower tolerance bound (`center - tau`).
 * @param Ip       Upper tolerance bound (`center + tau`).
 * @param dirs     Precomputed circle offsets (from {@link precompute_directions}).
 * @param opposite Index offset of the diametrically opposite sample.
 * @param dirs_nb  Number of circle samples.
 */
export declare function perform_one_point(I: {
    [x: string]: number;
}, x: number, Scores: Int32Array, Im: number, Ip: number, dirs: any[] | Int32Array, opposite: number, dirs_nb: number): void;
/**
 * Per-pyramid-level lookup table for the YAPE detector: the precomputed
 * sampling circle plus a full-frame score buffer for the level's dimensions.
 */
export declare class lev_table_t {
    /** Flat pixel offsets of the sampling circle (with wrap-around entries). */
    dirs: Int32Array;
    /** Number of unique circle offsets in {@link dirs}. */
    dirs_count: number;
    /** Per-pixel signed score map (`w · h`). */
    scores: Int32Array;
    /** Circle radius the table was built for. */
    radius: number;
    constructor(w: number, h: number, r: number);
}
