import { matrix_t } from '../matrix_t/matrix_t';
export declare class imgproc {
    pyrdown(src: matrix_t, dst: matrix_t, sx: number, sy: number): void;
    scharr_derivatives(src: matrix_t, dst: matrix_t): void;
    warp_affine(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void;
}
