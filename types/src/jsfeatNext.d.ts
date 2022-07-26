import { cache } from './cache/cache';
import { imgproc } from './imgproc/imgproc';
import { linalg } from './linalg/linalg';
import { math } from './math/math';
import matmath from './matmath/matmath';
import { matrix_t } from './matrix_t/matrix_t';
import { pyramid_t } from './pyramid_t/pyramid_t';
import { keypoint_t } from './keypoint_t/keypoint_t';
import { orb } from './orb/orb';
import { yape } from './yape/yape';
import { yape06 } from './yape06/yape06';
import { ransac_params_t } from './motion_estimator/ransac_params_t';
import { motion_estimator } from './motion_estimator/motion_estimator';
import { optical_flow_lk } from './optical_flow_lk/optical_flow_lk';
export default class jsfeatNext {
    private dt;
    protected cache: cache;
    static cache: typeof cache;
    static imgproc: typeof imgproc;
    static linalg: typeof linalg;
    static math: typeof math;
    static matmath: typeof matmath;
    static matrix_t: typeof matrix_t;
    static pyramid_t: typeof pyramid_t;
    static keypoint_t: typeof keypoint_t;
    static yape: typeof yape;
    static yape06: typeof yape06;
    static ransac_params_t: typeof ransac_params_t;
    static affine2d: typeof affine2d;
    static homography2d: typeof homography2d;
    static motion_estimator: typeof motion_estimator;
    static optical_flow_lk: typeof optical_flow_lk;
    static orb: typeof orb;
    constructor();
    static VERSION: string;
    static EPSILON: number;
    static FLT_MIN: number;
    static U8_t: number;
    static S32_t: number;
    static F32_t: number;
    static S64_t: number;
    static F64_t: number;
    static C1_t: number;
    static C2_t: number;
    static C3_t: number;
    static C4_t: number;
    static COLOR_RGBA2GRAY: number;
    static COLOR_RGB2GRAY: number;
    static COLOR_BGRA2GRAY: number;
    static COLOR_BGR2GRAY: number;
    static BOX_BLUR_NOSCALE: number;
    static SVD_U_T: number;
    static SVD_V_T: number;
    static U8C1_t: number;
    static U8C3_t: number;
    static U8C4_t: number;
    static F32C1_t: number;
    static F32C2_t: number;
    static S32C1_t: number;
    static S32C2_t: number;
    get_data_type(type: number): number;
    get_channel(type: number): number;
    get_data_type_size(type: number): number;
}
declare class motion_model extends jsfeatNext {
    T0: matrix_t;
    T1: matrix_t;
    AtA: matrix_t;
    AtB: matrix_t;
    constructor();
    sqr(x: number): number;
    iso_normalize_points(from: {
        x: number;
        y: number;
    }[], to: {
        x: number;
        y: number;
    }[], T0: number[], T1: number[], count: number): void;
    have_collinear_points(points: {
        x: number;
        y: number;
    }[], count: number): boolean;
}
declare class affine2d extends motion_model {
    constructor();
    run(from: {
        x: number;
        y: number;
    }[], to: {
        x: number;
        y: number;
    }[], model: matrix_t, count: number): number;
}
declare class homography2d extends motion_model {
    mLtL: matrix_t;
    Evec: matrix_t;
    constructor();
    run(from: {
        x: number;
        y: number;
    }[], to: {
        x: number;
        y: number;
    }[], model: matrix_t, count: number): number;
    error(from: {
        x: number;
        y: number;
    }[], to: {
        x: number;
        y: number;
    }[], model: matrix_t, err: Int32Array | Float32Array, count: number): void;
    check_subset(from: {
        x: number;
        y: number;
    }[], to: {
        x: number;
        y: number;
    }[], count: number): boolean;
}
export {};
