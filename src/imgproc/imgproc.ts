import { matrix_t } from '../matrix_t/matrix_t'
export class imgproc {
    grayscale(src: Uint8Array | Uint8ClampedArray, w: number, h: number, dst: matrix_t, code: number): void {
        throw new Error('Method not implemented.');
    }
    pyrdown(src: matrix_t, dst: matrix_t, sx: number, sy: number): void {
        throw new Error('Method not implemented.');
    }
    scharr_derivatives(src: matrix_t, dst: matrix_t): void {
        throw new Error('Method not implemented.');
    }
    warp_affine(src: matrix_t, dst: matrix_t, transform: matrix_t, fill_value: number): void {
        throw new Error('Method not implemented.');
    }
}
