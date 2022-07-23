import { matrix_t } from './matrix_t/matrix_t';
export default class jsfeatNext {
    private dt;
    private cache;
    static matrix_t: typeof matrix_t;
    constructor();
    static VERSION: string;
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
    get_data_type(type: number): number;
    get_channel(type: number): number;
    get_data_type_size(type: number): number;
}
