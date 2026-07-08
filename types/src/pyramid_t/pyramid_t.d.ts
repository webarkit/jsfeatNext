import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
export declare class pyramid_t extends jsfeatNext {
    levels: number;
    data: any;
    private pyrdown;
    constructor(levels: number);
    allocate(start_w: number, start_h: number, data_type: number): void;
    build(input: matrix_t, skip_first_level: boolean): void;
}
