export default class imgproc {
    cache: cache;
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
import cache from "../cache/cache.js";
//# sourceMappingURL=imgproc.d.ts.map