import _pool_node_t from './node_utils/_pool_node_t.js'
import data_type from './data_type/data_type.js'
import cache from './cache/cache.js'
import data_t from './node_utils/data_t.js'
import keypoint_t from './keypoint_t/keypoint_t.js'
import imgproc from './imgproc/imgproc.js'
import math from './math/math.js'
import matmath from './matmath/matmath.js'
import matrix_t from './matrix_t/matrix_t.js'
import pyramid_t from './pyramid_t/pyramid_t.js'
import linalg from './linalg/linalg.js'
import orb from './orb/orb.js'
import yape from './yape/yape.js'
import yape06 from './yape06/yape06.js'
import motion_estimator from './motion_estimator/motion_estimator.js'
import {homography2d} from './motion_estimator/motion_model.js'
import ransac_params_t from './motion_estimator/ransac_params_t.js'
import optical_flow_lk from './optical_flow_lk/optical_flow_lk.js'
import { JSFEAT_CONSTANTS } from './constants/constants.js'
import pkg from '../package.json'

export default class jsfeatNext {
    constructor() {
        this.dt = new data_type();
    }

    // VERSION
    static VERSION = pkg.version;

    // CONSTANTS
    static EPSILON = JSFEAT_CONSTANTS.EPSILON;
    static FLT_MIN = JSFEAT_CONSTANTS.FLT_MIN;
    static U8_t = JSFEAT_CONSTANTS.U8_t;
    static S32_t = JSFEAT_CONSTANTS.S32_t;
    static F32_t = JSFEAT_CONSTANTS.F32_t;
    static S64_t = JSFEAT_CONSTANTS.S64_t;
    static F64_t = JSFEAT_CONSTANTS.F64_t;
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

    get_data_type(type) {
        return this.dt._get_data_type(type);
    }

    get_channel(type) {
        return this.dt._get_channel(type);
    }

    get_data_type_size(type) {
        return this.dt._get_data_type_size(type);
    }
}

jsfeatNext.data_t = data_t

jsfeatNext.matrix_t = matrix_t;

jsfeatNext.pyramid_t = pyramid_t;

jsfeatNext.keypoint_t = keypoint_t;

jsfeatNext.cache = cache;

jsfeatNext.imgproc = imgproc;

jsfeatNext.math = math;

jsfeatNext.matmath = matmath;

jsfeatNext.linalg = linalg;

jsfeatNext.orb = orb;

jsfeatNext.yape = yape;

jsfeatNext.yape06 = yape06;

jsfeatNext.motion_estimator = motion_estimator;

jsfeatNext.ransac_params_t = ransac_params_t;

jsfeatNext.homography2d = homography2d;

jsfeatNext.optical_flow_lk = optical_flow_lk;