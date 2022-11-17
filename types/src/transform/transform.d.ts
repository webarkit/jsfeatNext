import { matrix_t } from '../matrix_t/matrix_t';
export declare class transform {
    constructor();
    perspective_4point_transform(model: matrix_t, src_x0: number, src_y0: number, dst_x0: number, dst_y0: number, src_x1: number, src_y1: number, dst_x1: number, dst_y1: number, src_x2: number, src_y2: number, dst_x2: number, dst_y2: number, src_x3: number, src_y3: number, dst_x3: number, dst_y3: number): void;
    invert_affine_transform(src: matrix_t, dst: matrix_t): void;
    invert_perspective_transform(src: matrix_t, dst: matrix_t): void;
}
