export class ransac_params_t {
    public size: number;
    public thresh: number;
    public eps: number;
    public prob: number;
    constructor(size: number = 0, thresh: number = 0.5, eps: number = 0.5, prob: number = 0.99) {
        this.size = size;
        this.thresh = thresh;
        this.eps = eps;
        this.prob = prob;
    }
    update_iters(_eps: number, max_iters: number): number {
        const num = Math.log(1 - this.prob);
        const denom = Math.log(1 - Math.pow(1 - _eps, this.size));
        return (denom >= 0 || -num >= max_iters * -denom ? max_iters : Math.round(num / denom)) | 0;
    }
}
