import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { keypoint_t } from '../keypoint_t/keypoint_t';
import { imgproc } from '../imgproc/imgproc';
/**
 * ORB binary descriptor extractor (Oriented FAST and Rotated BRIEF): for
 * each keypoint a rotation-rectified 32×32 patch is sampled and 256
 * pixel-pair comparisons from the learned {@link bit_pattern_31} pattern are
 * packed into a 32-byte binary descriptor. Descriptors are matched with
 * Hamming distance.
 *
 * Mirrors `jsfeat.orb` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class orb extends jsfeatNext {
    /** The learned 256-pair sampling pattern (flat `[x1,y1,x2,y2,…]`). */
    bit_pattern_31_: Int32Array;
    /** Scratch 3×3 matrix for the per-keypoint rectification transform. */
    H: matrix_t;
    /** Scratch 32×32 patch the keypoint neighborhood is warped into. */
    patch_img: matrix_t;
    /** Image-processing helper used for the affine patch warp. */
    imgproc: imgproc;
    constructor();
    /**
     * Computes 256-bit (32-byte) binary descriptors for `count` keypoints.
     * Each keypoint's `angle` is used to rotation-rectify its patch, making
     * the descriptor rotation-invariant.
     *
     * @remarks
     * **Keep keypoints at least 20 px from every image edge.** Each descriptor
     * bit compares two samples of the rotation-rectified patch, taken through
     * {@link rectify_patch}'s `warp_affine` with a **constant fill of `128`**.
     * A keypoint closer to an edge than the sampling reach has some samples fall
     * outside the image; those read `128` regardless of image content, so the
     * bits that touch them are decided by the fill rather than by the image, and
     * the descriptor is silently degraded. There is no return value or flag
     * marking which descriptors are affected (issue #110).
     *
     * The reach is **not** the 32 px patch size — only the 256 sampled pairs are
     * read, and the largest coordinate component in the sampling pattern is 13,
     * so the furthest sample sits `13·√2 ≈ 18.4 px` from the centre at the worst
     * rotation; adding the bilinear neighbour gives a safe margin of **20 px**.
     * Measured (post-0.12.0, a single keypoint swept over 360 angles with a clean
     * brightness lift): contamination persists to distance 18 and vanishes from
     * **19** upward, so 20 keeps ~1 px of slack. The FAST/YAPE detectors already
     * take a `border` argument for exactly this; pass ≥ 20 when the descriptors
     * feed a matcher. (OpenCV instead rejects such keypoints via `edgeThreshold`,
     * default 31.)
     *
     * @param src         Source grayscale image the keypoints live in.
     * @param corners     Keypoints to describe (uses `x`, `y`, `angle`).
     * @param count       Number of keypoints to process.
     * @param descriptors Destination matrix, resized to 32×`count` `U8` —
     *                    one 32-byte descriptor per row.
     */
    describe(src: matrix_t, corners: keypoint_t[], count: number, descriptors: matrix_t): void;
}
