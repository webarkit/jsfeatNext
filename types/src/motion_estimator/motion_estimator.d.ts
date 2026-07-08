import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
import { ransac_params_t } from './ransac_params_t';
import { homography2d } from '../motion_model/motion_model';
export declare class motion_estimator extends jsfeatNext {
    constructor();
    get_subset(kernel: homography2d, from: point_t[], to: point_t[], need_cnt: number, max_cnt: number, from_sub: point_t[], to_sub: point_t[]): boolean;
    find_inliers(kernel: homography2d, model: matrix_t, from: point_t[], to: point_t[], count: number, thresh: number, err: Int32Array | Float32Array, mask: number[]): number;
    ransac(params: ransac_params_t, kernel: any, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean;
    lmeds(params: ransac_params_t, kernel: any, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean;
}
