declare class jsfeatNext {
    static VERSION: any;
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
    dt: data_type;
    cache: cache;
    get_data_type(type: any): number;
    get_channel(type: any): number;
    get_data_type_size(type: any): number;
}
declare namespace jsfeatNext {
    export { data_t };
    export { matrix_t };
    export { keypoint_t };
    export { pyramid_t };
    export { cache };
    export { imgproc };
    export { math };
    export { matmath };
    export { linalg };
    export { orb };
    export { yape };
    export { yape06 };
    export { motion_estimator };
    export { ransac_params_t };
    export { affine2d };
    export { homography2d };
    export { optical_flow_lk };
}
export default jsfeatNext;
import data_type from "./data_type/data_type.js";
import cache from "./cache/cache.js";
import data_t from "./node_utils/data_t.js";
import matrix_t from "./matrix_t/matrix_t.js";
import keypoint_t from "./keypoint_t/keypoint_t.js";
declare class pyramid_t extends jsfeatNext {
    constructor(levels: any);
    levels: number;
    data: any[];
    pyrdown: (src: any, dst: any, sx: any, sy: any) => void;
    allocate(start_w: any, start_h: any, data_type: any): void;
    build(input: any, skip_first_level: any): void;
}
declare class imgproc extends jsfeatNext {
    grayscale(src: any, w: any, h: any, dst: any, code: any): void;
    resample(src: any, dst: any, nw: any, nh: any): void;
    box_blur_gray(src: any, dst: any, radius: any, options: any): void;
    gaussian_blur(src: any, dst: any, kernel_size: any, sigma: any): void;
    hough_transform(img: any, rho_res: any, theta_res: any, threshold: any): any[];
    pyrdown(src: any, dst: any, sx: any, sy: any): void;
    scharr_derivatives(src: any, dst: any): void;
    sobel_derivatives(src: any, dst: any): void;
    compute_integral_image(src: any, dst_sum: any, dst_sqsum: any, dst_tilted: any): void;
    equalize_histogram(src: any, dst: any): void;
    canny(src: any, dst: any, low_thresh: any, high_thresh: any): void;
    warp_perspective(src: any, dst: any, transform: any, fill_value: any): void;
    warp_affine(src: any, dst: any, transform: any, fill_value: any): void;
    skindetector(src: any, dst: any): void;
}
declare class math extends jsfeatNext {
    qsort_stack: Int32Array;
    get_gaussian_kernel(size: any, sigma: any, kernel: any, data_type: any): void;
    perspective_4point_transform(model: any, src_x0: any, src_y0: any, dst_x0: any, dst_y0: any, src_x1: any, src_y1: any, dst_x1: any, dst_y1: any, src_x2: any, src_y2: any, dst_x2: any, dst_y2: any, src_x3: any, src_y3: any, dst_x3: any, dst_y3: any): void;
    qsort(array: any, low: any, high: any, cmp: any): void;
    median(array: any, low: any, high: any): any;
}
import matmath from "./matmath/matmath.js";
declare class linalg extends jsfeatNext {
    matmath: matmath;
    JacobiImpl(A: any, astep: any, W: any, V: any, vstep: any, n: any): void;
    JacobiSVDImpl(At: any, astep: any, _W: any, Vt: any, vstep: any, m: any, n: any, n1: any): void;
    lu_solve(A: any, B: any): 1 | 0;
    cholesky_solve(A: any, B: any): 1 | 0;
    svd_decompose(A: any, W: any, U: any, V: any, options: any): void;
    svd_solve(A: any, X: any, B: any): void;
    svd_invert(Ai: any, A: any): void;
    eigenVV(A: any, vects: any, vals: any): void;
}
declare class orb extends jsfeatNext {
    bit_pattern_31_: Int32Array;
    H: matrix_t;
    patch_img: matrix_t;
    imgproc: {
        grayscale(src: any, w: any, h: any, dst: any, code: any): void;
        resample(src: any, dst: any, nw: any, nh: any): void;
        box_blur_gray(src: any, dst: any, radius: any, options: any): void;
        gaussian_blur(src: any, dst: any, kernel_size: any, sigma: any): void;
        hough_transform(img: any, rho_res: any, theta_res: any, threshold: any): any[];
        pyrdown(src: any, dst: any, sx: any, sy: any): void;
        scharr_derivatives(src: any, dst: any): void;
        sobel_derivatives(src: any, dst: any): void;
        compute_integral_image(src: any, dst_sum: any, dst_sqsum: any, dst_tilted: any): void;
        equalize_histogram(src: any, dst: any): void;
        canny(src: any, dst: any, low_thresh: any, high_thresh: any): void;
        warp_perspective(src: any, dst: any, transform: any, fill_value: any): void;
        warp_affine(src: any, dst: any, transform: any, fill_value: any): void;
        skindetector(src: any, dst: any): void;
        dt: data_type;
        cache: cache;
        get_data_type(type: any): number;
        get_channel(type: any): number;
        get_data_type_size(type: any): number;
    };
    describe(src: any, corners: any, count: any, descriptors: any): void;
}
import yape from "./yape/yape.js";
declare class yape06 extends jsfeatNext {
    laplacian_threshold: number;
    min_eigen_value_threshold: number;
    detect(src: any, points: any, border: any): number;
}
declare class motion_estimator extends jsfeatNext {
    get_subset(kernel: any, from: any, to: any, need_cnt: any, max_cnt: any, from_sub: any, to_sub: any): boolean;
    find_inliers(kernel: any, model: any, from: any, to: any, count: any, thresh: any, err: any, mask: any): number;
    ransac(params: any, kernel: any, from: any, to: any, count: any, model: any, mask: any, max_iters: any): boolean;
    lmeds(params: any, kernel: any, from: any, to: any, count: any, model: any, mask: any, max_iters: any): boolean;
}
import ransac_params_t from "./motion_estimator/ransac_params_t.js";
declare class affine2d extends motion_model {
    run(from: any, to: any, model: any, count: any): number;
}
declare class homography2d extends motion_model {
    mLtL: matrix_t;
    Evec: matrix_t;
    run(from: any, to: any, model: any, count: any): 1 | 0;
    error(from: any, to: any, model: any, err: any, count: any): void;
    check_subset(from: any, to: any, count: any): boolean;
}
declare class optical_flow_lk extends jsfeatNext {
    scharr_deriv: (src: any, dst: any) => void;
    track(prev_pyr: any, curr_pyr: any, prev_xy: any, curr_xy: any, count: any, win_size: any, max_iter: any, status: any, eps: any, min_eigen_threshold: any): void;
}
declare class motion_model extends jsfeatNext {
    T0: matrix_t;
    T1: matrix_t;
    AtA: matrix_t;
    AtB: matrix_t;
    sqr(x: any): number;
    iso_normalize_points(from: any, to: any, T0: any, T1: any, count: any): void;
    have_collinear_points(points: any, count: any): boolean;
}
//# sourceMappingURL=jsfeatNext.d.ts.map