export default class motion_estimator {
    cache: cache;
    get_subset(kernel: any, from: any, to: any, need_cnt: any, max_cnt: any, from_sub: any, to_sub: any): boolean;
    find_inliers(kernel: any, model: any, from: any, to: any, count: any, thresh: any, err: any, mask: any): number;
    ransac(params: any, kernel: any, from: any, to: any, count: any, model: any, mask: any, max_iters: any): boolean;
    lmeds(params: any, kernel: any, from: any, to: any, count: any, model: any, mask: any, max_iters: any): boolean;
}
import cache from "../cache/cache.js";
//# sourceMappingURL=motion_estimator.d.ts.map