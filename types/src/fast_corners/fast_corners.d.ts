import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { point_t } from '../point_t/point_t';
export declare class fast_corners extends jsfeatNext {
    private offsets16;
    _threshold: number;
    threshold_tab: Uint8Array;
    pixel_off: Int32Array;
    score_diff: Int32Array;
    constructor();
    set_threshold(threshold: number): number;
    detect(src: matrix_t, corners: point_t[], border: number): number;
    private _cmp_offsets;
}
