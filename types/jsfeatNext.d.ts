declare class jsfeatNext {
    static EPSILON: number;
    static FLT_MIN: number;
    static U8_t: number;
    static S32_t: number;
    static F32_t: number;
    static S64_t: number;
    static F64_t: number;
    static C1_t: number;
    static C2_t: number;
    static C3_t: number;
    static C4_t: number;
    static COLOR_RGBA2GRAY: number;
    static COLOR_RGB2GRAY: number;
    static COLOR_BGRA2GRAY: number;
    static COLOR_BGR2GRAY: number;
    static BOX_BLUR_NOSCALE: number;
    static SVD_U_T: number;
    static SVD_V_T: number;
    static U8C1_t: number;
    static U8C3_t: number;
    static U8C4_t: number;
    static F32C1_t: number;
    static F32C2_t: number;
    static S32C1_t: number;
    static S32C2_t: number;
    dt: data_type;
    version: string;
    get_data_type(type: any): number;
    get_channel(type: any): number;
    get_data_type_size(type: any): number;
}
declare namespace jsfeatNext {
    export { data_t };
    export { matrix_t };
    export { pyramid_t };
    export { keypoint_t };
    export { cache };
    export { imgproc };
    export { matmath };
    export { linalg };
}
export default jsfeatNext;
import data_type from "./data_type/data_type.js";
import data_t from "./node_utils/data_t.js";
import matrix_t from "./matrix_t/matrix_t.js";
import pyramid_t from "./pyramid_t/pyramid_t.js";
import keypoint_t from "./keypoint_t/keypoint_t.js";
import cache from "./cache/cache.js";
import imgproc from "./imgproc/imgproc.js";
import matmath from "./matmath/matmath.js";
import linalg from "./linalg/linalg.js";
//# sourceMappingURL=jsfeatNext.d.ts.map