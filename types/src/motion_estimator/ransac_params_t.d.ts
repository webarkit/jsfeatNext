export declare class ransac_params_t {
    size: number;
    thresh: number;
    eps: number;
    prob: number;
    constructor(size?: number, thresh?: number, eps?: number, prob?: number);
    update_iters(_eps: number, max_iters: number): number;
}
