import { matrix_t } from '../matrix_t/matrix_t';
import { imgproc } from '../imgproc/imgproc';
/**
 * Extracts a rotation-rectified square patch around a keypoint: builds a 2×3
 * affine transform that rotates by `angle` around `(px, py)` and centers a
 * `psize`×`psize` window, then warps the source image through it. Used by
 * `orb.describe` to make the BRIEF-style descriptor rotation-invariant.
 *
 * @param src          Source grayscale image.
 * @param dst          Destination patch (resized to `psize`×`psize` by the warp).
 * @param angle        Keypoint orientation in radians.
 * @param px           Keypoint x coordinate in `src`.
 * @param py           Keypoint y coordinate in `src`.
 * @param psize        Patch side length in pixels (ORB uses 32).
 * @param H            3×3 scratch matrix receiving the affine transform (first 6 entries used).
 * @param imgProcessor The `imgproc` instance whose `warp_affine` performs the sampling.
 */
export declare function rectify_patch(src: matrix_t, dst: matrix_t, angle: number, px: number, py: number, psize: number, H: matrix_t, imgProcessor: imgproc): void;
