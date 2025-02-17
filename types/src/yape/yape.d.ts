import { matrix_t } from "../matrix_t/matrix_t";
import { keypoint_t } from "../keypoint_t/keypoint_t";
export declare class yape {
    private level_tables;
    private tau;
    constructor();
    init(width: number, height: number, radius: number, pyramid_levels?: number): void;
    detect(src: matrix_t, points: keypoint_t[], border?: number): number;
}
