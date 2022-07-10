export default class math {
    cache: cache;
    qsort_stack: Int32Array;
    get_gaussian_kernel(size: any, sigma: any, kernel: any, data_type: any): void;
    perspective_4point_transform(model: any, src_x0: any, src_y0: any, dst_x0: any, dst_y0: any, src_x1: any, src_y1: any, dst_x1: any, dst_y1: any, src_x2: any, src_y2: any, dst_x2: any, dst_y2: any, src_x3: any, src_y3: any, dst_x3: any, dst_y3: any): void;
    qsort(array: any, low: any, high: any, cmp: any): void;
    median(array: any, low: any, high: any): any;
}
import cache from "../cache/cache.js";
//# sourceMappingURL=math.d.ts.map