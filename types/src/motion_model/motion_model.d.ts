import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
export declare class motion_model extends jsfeatNext {
    T0: matrix_t;
    T1: matrix_t;
    AtA: matrix_t;
    AtB: matrix_t;
    constructor();
    sqr(x: number): number;
    iso_normalize_points(from: point_t[], to: point_t[], T0: number[], T1: number[], count: number): void;
    have_collinear_points(points: point_t[], count: number): boolean;
}
export declare class affine2d extends motion_model {
    constructor();
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
}
export declare class homography2d extends motion_model {
    mLtL: matrix_t;
    Evec: matrix_t;
    constructor();
    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number;
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    check_subset(from: point_t[], to: point_t[], count: number): boolean;
}
