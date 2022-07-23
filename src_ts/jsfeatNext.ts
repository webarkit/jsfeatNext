//import _pool_node_t from './node_utils/_pool_node_t'
import { IData_Type, data_type } from './data_type/data_type'
import { ICache, cache } from './cache/cache'
import { matrix_t } from './matrix_t/matrix_t'
import { JSFEAT_CONSTANTS } from './constants/constants'
import pkg from '../package.json'

export default class jsfeatNext {
    private dt: IData_Type;
    private cache: ICache;
    static matrix_t: typeof matrix_t
    constructor() {
        this.dt = new data_type();
        this.cache = new cache();
        this.cache.allocate(30, 640 * 4);
    }

    // VERSION
    static VERSION: string = pkg.version;

    // CONSTANTS
    static EPSILON = JSFEAT_CONSTANTS.EPSILON;
    static FLT_MIN = JSFEAT_CONSTANTS.FLT_MIN;
    static U8_t = JSFEAT_CONSTANTS.U8_t;
    static S32_t = JSFEAT_CONSTANTS.S32_t;
    static F32_t = JSFEAT_CONSTANTS.F32_t;
    static S64_t = JSFEAT_CONSTANTS.S64_t;
    static F64_t = JSFEAT_CONSTANTS.F64_t;
    static C1_t = JSFEAT_CONSTANTS.C1_t;
    static C2_t = JSFEAT_CONSTANTS.C2_t;
    static C3_t = JSFEAT_CONSTANTS.C3_t;
    static C4_t = JSFEAT_CONSTANTS.C4_t;

    // color conversion
    static COLOR_RGBA2GRAY = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_RGB2GRAY = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_BGRA2GRAY = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_BGR2GRAY = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;

    // box blur option
    static BOX_BLUR_NOSCALE = JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE;
    // svd options
    static SVD_U_T = JSFEAT_CONSTANTS.SVD_U_T;
    static SVD_V_T = JSFEAT_CONSTANTS.SVD_V_T;

    // popular formats
    static U8C1_t = this.U8_t | this.C1_t;
    static U8C3_t = this.U8_t | this.C3_t;
    static U8C4_t = this.U8_t | this.C4_t;

    static F32C1_t = this.F32_t | this.C1_t;
    static F32C2_t = this.F32_t | this.C2_t;
    static S32C1_t = this.S32_t | this.C1_t;
    static S32C2_t = this.S32_t | this.C2_t;

    get_data_type(type: number): number {
        return this.dt._get_data_type(type);
    }

    get_channel(type: number): number {
        return this.dt._get_channel(type);
    }

    get_data_type_size(type: number): number {
        return this.dt._get_data_type_size(type);
    }
}

jsfeatNext.matrix_t = matrix_t;