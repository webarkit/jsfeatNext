import { matrix_t } from "../matrix_t/matrix_t";
import { point_t } from "../point_t/point_t";
export declare class fast_corners {
    set_threshold(threshold: number): number;
    detect(src: matrix_t, corners: point_t[], border: number): number;
}
