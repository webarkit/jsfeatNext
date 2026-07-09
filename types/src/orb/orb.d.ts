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
     * @param src         Source grayscale image the keypoints live in.
     * @param corners     Keypoints to describe (uses `x`, `y`, `angle`).
     * @param count       Number of keypoints to process.
     * @param descriptors Destination matrix, resized to 32×`count` `U8` —
     *                    one 32-byte descriptor per row.
     */
    describe(src: matrix_t, corners: keypoint_t[], count: number, descriptors: matrix_t): void;
}
