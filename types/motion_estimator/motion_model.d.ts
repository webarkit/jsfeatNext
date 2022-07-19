export class motion_model {
    T0: matrix_t;
    T1: matrix_t;
    AtA: matrix_t;
    AtB: matrix_t;
    sqr(x: any): number;
    iso_normalize_points(from: any, to: any, T0: any, T1: any, count: any): void;
    have_collinear_points(points: any, count: any): boolean;
}
export class affine2d extends motion_model {
    cache: cache;
    run(from: any, to: any, model: any, count: any): number;
}
export class homography2d extends motion_model {
    mLtL: matrix_t;
    Evec: matrix_t;
    run(from: any, to: any, model: any, count: any): 1 | 0;
    error(from: any, to: any, model: any, err: any, count: any): void;
    check_subset(from: any, to: any, count: any): boolean;
}
import matrix_t from "../matrix_t/matrix_t.js";
import cache from "../cache/cache.js";
//# sourceMappingURL=motion_model.d.ts.map