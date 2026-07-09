/**
 * The learned ORB sampling pattern: 256 pixel-pair comparisons inside a
 * 31×31 patch, stored flat as `[x1, y1, x2, y2, …]` (1024 numbers). Each
 * pair contributes one bit of the 256-bit binary descriptor produced by
 * `orb.describe`. Taken verbatim from the original ORB paper / OpenCV
 * implementation (the inline comments carry the training statistics).
 */
export declare const bit_pattern_31: number[];
