import { matrix_t } from "../matrix_t/matrix_t";
export class pyramid_t {
    data: any;
    levels: number;
    constructor(levels: number) {}
    allocate(start_w: number, start_h: number, data_type: number): void {}
    build(input: matrix_t, skip_first_level: boolean): void {}
}
