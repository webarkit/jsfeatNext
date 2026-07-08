import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
export declare class math extends jsfeatNext {
    private qsort_stack;
    constructor();
    get_gaussian_kernel(size: number, sigma: number, kernel: Float32Array | Int32Array, data_type: number): void;
    perspective_4point_transform(model: matrix_t, src_x0: number, src_y0: number, dst_x0: number, dst_y0: number, src_x1: number, src_y1: number, dst_x1: number, dst_y1: number, src_x2: number, src_y2: number, dst_x2: number, dst_y2: number, src_x3: number, src_y3: number, dst_x3: number, dst_y3: number): void;
    qsort(array: number[], low: number, high: number, cmp: (a: number, b: number) => number): void;
    median(array: number[] | Int32Array | Float32Array, low: number, high: number): number;
}
