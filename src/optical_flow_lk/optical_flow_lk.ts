import { pyramid_t } from "../pyramid_t/pyramid_t";
export class optical_flow_lk {
    track(
        prev_pyr: pyramid_t,
        curr_pyr: pyramid_t,
        prev_xy: Float32Array,
        curr_xy: Float32Array,
        count: number,
        win_size: number,
        max_iter: number,
        status: Uint8Array,
        eps: number,
        min_eigen_threshold: number
    ): void {
        throw new Error("Method not implemented.");
    }
}
