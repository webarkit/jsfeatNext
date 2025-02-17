export class ransac_params_t {
    size;
    thresh;
    eps;
    prob;
    constructor(size = 0, thresh = 0.5, eps = 0.5, prob = 0.99) {
        this.size = size;
        this.thresh = thresh;
        this.eps = eps;
        this.prob = prob;
    }
    update_iters(_eps, max_iters) {
        const num = Math.log(1 - this.prob);
        const denom = Math.log(1 - Math.pow(1 - _eps, this.size));
        return (denom >= 0 || -num >= max_iters * -denom ? max_iters : Math.round(num / denom)) | 0;
    }
}
//# sourceMappingURL=ransac_params_t.js.map