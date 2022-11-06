import { matrix_t } from '../matrix_t/matrix_t'
export class imgproc {
    grayscale(src: Uint8Array | Uint8ClampedArray, w: number, h: number, dst: matrix_t, code: number): void {
        throw new Error('Method not implemented.');
    }
    resample(src: matrix_t, dst: matrix_t, nw: number, nh: number): void {
        throw new Error('Method not implemented.');
    }
    box_blur_gray(src: matrix_t, dst: matrix_t, radius: number, options: number): void {
        throw new Error('Method not implemented.');
    }
    gaussian_blur(src: matrix_t, dst: matrix_t, kernel_size: number, sigma: number): void {
        throw new Error('Method not implemented.');
    }
    hough_transform(img: matrix_t, rho_res: number, theta_res: number, threshold: number): Array<number> {
        throw new Error('Method not implemented.');
    }
    pyrdown(src: matrix_t, dst: matrix_t, sx: number, sy: number): void {
        throw new Error('Method not implemented.');
    }
    scharr_derivatives(src: matrix_t, dst: matrix_t): void {
        throw new Error('Method not implemented.');
    }
    sobel_derivatives(src: matrix_t, dst: matrix_t): void {
        throw new Error('Method not implemented.');
    }
    compute_integral_image(src: matrix_t, dst_sum: number[], dst_sqsum: number[], dst_tilted: any[]): void {
        throw new Error('Method not implemented.');
    }
    equalize_histogram(src: matrix_t, dst: matrix_t): void {
        throw new Error('Method not implemented.');
    }
    canny(src: matrix_t, dst: matrix_t, low_thresh: number, high_thresh: number): void {
        throw new Error('Method not implemented.');
    }
    warp_perspective(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void {
        throw new Error('Method not implemented.');
    }
    warp_affine(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void {
        throw new Error('Method not implemented.');
    }
    skindetector(src: { width: number; height: number; data: any[] }, dst: number[]): void {
        throw new Error('Method not implemented.');
    }
}
