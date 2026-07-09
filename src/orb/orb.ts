import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { keypoint_t } from "../keypoint_t/keypoint_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { imgproc } from "../imgproc/imgproc";
import { bit_pattern_31 } from "./bit_pattern_31";
import { rectify_patch } from "./rectify_patch";

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
export class orb extends jsfeatNext {
    /** The learned 256-pair sampling pattern (flat `[x1,y1,x2,y2,…]`). */
    public bit_pattern_31_: Int32Array;
    /** Scratch 3×3 matrix for the per-keypoint rectification transform. */
    public H: matrix_t;
    /** Scratch 32×32 patch the keypoint neighborhood is warped into. */
    public patch_img: matrix_t;
    /** Image-processing helper used for the affine patch warp. */
    public imgproc: imgproc;

    constructor() {
        super();
        this.bit_pattern_31_ = new Int32Array(bit_pattern_31);
        this.H = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.patch_img = new matrix_t(32, 32, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t);
        this.imgproc = new imgproc();
    }

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
    describe(src: matrix_t, corners: keypoint_t[], count: number, descriptors: matrix_t): void {
        const DESCR_SIZE = 32; // bytes;
        let i = 0,
            b = 0,
            px = 0.0,
            py = 0.0,
            angle = 0.0;
        let t0 = 0,
            t1 = 0,
            val = 0;
        //let img = src.data, w = src.cols, h = src.rows;
        const patch_d = this.patch_img.data;
        const patch_off = 16 * 32 + 16; // center of patch
        let patt = 0;

        if (!(descriptors.type & JSFEAT_CONSTANTS.U8_t)) {
            // relocate to U8 type
            descriptors.type = JSFEAT_CONSTANTS.U8_t;
            descriptors.cols = DESCR_SIZE;
            descriptors.rows = count;
            descriptors.channel = 1;
            descriptors.allocate();
        } else {
            descriptors.resize(DESCR_SIZE, count, 1);
        }

        const descr_d = descriptors.data;
        let descr_off = 0;

        for (i = 0; i < count; ++i) {
            px = corners[i].x;
            py = corners[i].y;
            angle = corners[i].angle;

            rectify_patch(src, this.patch_img, angle, px, py, 32, this.H, this.imgproc);

            // describe the patch
            patt = 0;
            for (b = 0; b < DESCR_SIZE; ++b) {
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val = (<number>(<unknown>(t0 < t1))) | 0;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 1;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 2;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 3;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 4;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 5;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 6;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (<number>(<unknown>(t0 < t1))) << 7;

                descr_d[descr_off + b] = val;
            }
            descr_off += DESCR_SIZE;
        }
    }
}
