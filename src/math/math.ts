import { matrix_t } from "../matrix_t/matrix_t";
export class math {
    get_gaussian_kernel(kernel_size: number, sigma: number, filter: Int32Array | Float32Array, data_type: number) {
        throw new Error("Method not implemented.");
    }
    perspective_4point_transform(
        model: matrix_t,
        src_x0: number,
        src_y0: number,
        dst_x0: number,
        dst_y0: number,
        src_x1: number,
        src_y1: number,
        dst_x1: number,
        dst_y1: number,
        src_x2: number,
        src_y2: number,
        dst_x2: number,
        dst_y2: number,
        src_x3: number,
        src_y3: number,
        dst_x3: number,
        dst_y3: number
    ): void {
        throw new Error("Method not implemented.");
    }
    qsort(array: number[], low: number, high: number, cmp: (a: number, b: number) => number): void {
        throw new Error("Method not implemented.");
    }
    median(array: any, low: number, high: number): number {
        throw new Error("Method not implemented.");
    }
}
