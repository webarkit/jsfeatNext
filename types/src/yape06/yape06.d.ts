import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { keypoint_t } from '../keypoint_t/keypoint_t';
export declare class yape06 extends jsfeatNext {
    laplacian_threshold: number;
    min_eigen_value_threshold: number;
    constructor();
    detect(src: matrix_t, points: keypoint_t[], border: number): number;
}
