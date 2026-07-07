import { matrix_t } from '../matrix_t/matrix_t';
export declare class imgproc {
    grayscale(src: Uint8Array | Uint8ClampedArray, w: number, h: number, dst: matrix_t, code?: number): void;
    resample(src: matrix_t, dst: matrix_t, nw: number, nh: number): void;
    box_blur_gray(src: matrix_t, dst: matrix_t, radius: number, options: number): void;
    gaussian_blur(src: matrix_t, dst: matrix_t, kernel_size: number, sigma: number): void;
    hough_transform(img: matrix_t, rho_res: number, theta_res: number, threshold: number): Array<number>;
    pyrdown(src: matrix_t, dst: matrix_t, sx?: number, sy?: number): void;
    scharr_derivatives(src: matrix_t, dst: matrix_t): void;
    sobel_derivatives(src: matrix_t, dst: matrix_t): void;
    compute_integral_image(src: matrix_t, dst_sum: number[], dst_sqsum: number[], dst_tilted: any[]): void;
    equalize_histogram(src: matrix_t, dst: matrix_t): void;
    canny(src: matrix_t, dst: matrix_t, low_thresh: number, high_thresh: number): void;
    warp_perspective(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void;
    warp_affine(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void;
    skindetector(src: {
        width: number;
        height: number;
        data: any[];
    }, dst: number[]): void;
}
