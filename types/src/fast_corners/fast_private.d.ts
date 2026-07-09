/**
 * Computes the FAST-16 corner score for a candidate pixel: the largest
 * threshold for which the pixel would still be detected as a corner
 * (used for non-maximum suppression in `fast_corners.detect`).
 *
 * The score is derived from the min/max intensity differences over every
 * contiguous 9-pixel arc of the 16-pixel Bresenham circle around the
 * candidate.
 *
 * @param src       Grayscale image data.
 * @param off       Index of the candidate pixel in `src`.
 * @param pixel     Precomputed offsets of the 25 circle samples (16 + 9 wrap-around).
 * @param d         Scratch array receiving the 25 intensity differences.
 * @param threshold Detector threshold; acts as the score lower bound.
 * @returns The corner score (always ≥ `threshold` for detected corners).
 */
export declare function _cmp_score_16(src: Uint8Array, off: number, pixel: Uint8Array | Int32Array, d: Uint8Array | Int32Array, threshold: number): number;
