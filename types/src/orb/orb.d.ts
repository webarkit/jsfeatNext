import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { keypoint_t } from '../keypoint_t/keypoint_t';
import { imgproc } from '../imgproc/imgproc';
export declare class orb extends jsfeatNext {
    bit_pattern_31_: Int32Array;
    H: matrix_t;
    patch_img: matrix_t;
    imgproc: imgproc;
    constructor();
    describe(src: matrix_t, corners: keypoint_t[], count: number, descriptors: matrix_t): void;
}
