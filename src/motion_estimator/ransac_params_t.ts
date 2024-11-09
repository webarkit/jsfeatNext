export class ransac_params_t {
    public size: number;
    public thresh: number;
    public eps: number;
    public prob: number;
    constructor(size: number, thresh: number, eps: number, prob: number) {
        if (typeof size === "undefined") {
            size = 0;
        }
        if (typeof thresh === "undefined") {
            thresh = 0.5;
        }
        if (typeof eps === "undefined") {
            eps = 0.5;
        }
        if (typeof prob === "undefined") {
            prob = 0.99;
        }

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
