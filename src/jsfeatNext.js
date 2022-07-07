import _pool_node_t from './node_utils/_pool_node_t.js'
import data_type from './data_type/data_type.js'
import cache from './cache/cache.js'
import data_t from './node_utils/data_t.js'
import imgproc from './imgproc/imgproc.js'
import matmath from './matmath/matmath.js'
import matrix_t from './matrix_t/matrix_t.js'
import linalg from './linalg/linalg.js'
import { JSFEAT_CONSTANTS } from './constants/constants.js'

export default class jsfeatNext {
    constructor() {
        this.dt = new data_type();
        this.version = "0.1.0";
        console.log("jsfeatNext version: ", this.version);
    }

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

jsfeatNext.pyramid_t = class pyramid_t extends jsfeatNext {
    constructor(levels) {
        super();
        this.levels = levels | 0;
        this.data = new Array(levels);
        //jsfeatNext.imgproc.pyrdown is not yet implemented... 
        this.pyrdown = jsfeatNext.imgproc.pyrdown;
    }

    allocate(start_w, start_h, data_type) {
        var i = this.levels;
        while (--i >= 0) {
            this.data[i] = new jsfeatNext.matrix_t(start_w >> i, start_h >> i, data_type);
        }
    }

    build(input, skip_first_level) {
        if (typeof skip_first_level === "undefined") { skip_first_level = true; }
        // just copy data to first level
        var i = 2, a = input, b = this.data[0];
        if (!skip_first_level) {
            var j = input.cols * input.rows;
            while (--j >= 0) {
                b.data[j] = input.data[j];
            }
        }
        b = this.data[1];
        this.pyrdown(a, b);
        for (; i < this.levels; ++i) {
            a = b;
            b = this.data[i];
            this.pyrdown(a, b);
        }
    }
}

jsfeatNext.keypoint_t = class keypoint_t extends jsfeatNext {
    constructor(x, y, score, level, angle) {
        super();
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        if (typeof score === "undefined") { score = 0; }
        if (typeof level === "undefined") { level = 0; }
        if (typeof angle === "undefined") { angle = -1.0; }

        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}

jsfeatNext.cache = cache;

jsfeatNext.imgproc = imgproc;

jsfeatNext.matmath = matmath;

jsfeatNext.linalg = linalg;