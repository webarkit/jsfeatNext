import { data_type } from "./data_type/data_type";
import { cache } from "./cache/cache";
import { _resample, _resample_u8 } from "./imgproc/resample";
import { _convol, _convol_u8 } from "./imgproc/convol";
import { swap, hypot } from "./linalg/linalg_base";
import { _cmp_score_16 } from "./fast_corners/fast_private";
import matmath from "./matmath/matmath";
import { matrix_t } from "./matrix_t/matrix_t";
import { transform } from "./transform/transform";
import { keypoint_t } from "./keypoint_t/keypoint_t";
import { bit_pattern_31 } from "./orb/bit_pattern_31";
import { rectify_patch } from "./orb/rectify_patch";
import { yape } from "./yape/yape";
import { compute_laplacian, hessian_min_eigen_value } from "./yape06/yape06_utils";
import { ransac_params_t } from "./motion_estimator/ransac_params_t";
import { JSFEAT_CONSTANTS } from "./constants/constants";
import pkg from "../package.json";
export default class jsfeatNext {
    dt;
    cache;
    static cache;
    static fast_corners;
    static imgproc;
    static linalg;
    static math;
    static matmath;
    static matrix_t;
    static pyramid_t;
    static transform;
    static keypoint_t;
    static yape;
    static yape06;
    static ransac_params_t;
    static affine2d;
    static homography2d;
    static motion_estimator;
    static optical_flow_lk;
    static orb;
    constructor() {
        this.dt = new data_type();
        this.cache = new cache();
        this.cache.allocate(30, 640 * 4);
    }
    static VERSION = pkg.version;
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
    static COLOR_RGBA2GRAY = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_RGB2GRAY = JSFEAT_CONSTANTS.COLOR_RGB2GRAY;
    static COLOR_BGRA2GRAY = JSFEAT_CONSTANTS.COLOR_BGRA2GRAY;
    static COLOR_BGR2GRAY = JSFEAT_CONSTANTS.COLOR_BGR2GRAY;
    static BOX_BLUR_NOSCALE = JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE;
    static SVD_U_T = JSFEAT_CONSTANTS.SVD_U_T;
    static SVD_V_T = JSFEAT_CONSTANTS.SVD_V_T;
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
class motion_model extends jsfeatNext {
    T0;
    T1;
    AtA;
    AtB;
    constructor() {
        super();
        this.T0 = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.T1 = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.AtA = new matrix_t(6, 6, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.AtB = new matrix_t(6, 1, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
    }
    sqr(x) {
        return x * x;
    }
    iso_normalize_points(from, to, T0, T1, count) {
        let i = 0;
        let cx0 = 0.0, cy0 = 0.0, d0 = 0.0, s0 = 0.0;
        let cx1 = 0.0, cy1 = 0.0, d1 = 0.0, s1 = 0.0;
        let dx = 0.0, dy = 0.0;
        for (; i < count; ++i) {
            cx0 += from[i].x;
            cy0 += from[i].y;
            cx1 += to[i].x;
            cy1 += to[i].y;
        }
        cx0 /= count;
        cy0 /= count;
        cx1 /= count;
        cy1 /= count;
        for (i = 0; i < count; ++i) {
            dx = from[i].x - cx0;
            dy = from[i].y - cy0;
            d0 += Math.sqrt(dx * dx + dy * dy);
            dx = to[i].x - cx1;
            dy = to[i].y - cy1;
            d1 += Math.sqrt(dx * dx + dy * dy);
        }
        d0 /= count;
        d1 /= count;
        s0 = Math.SQRT2 / d0;
        s1 = Math.SQRT2 / d1;
        T0[0] = T0[4] = s0;
        T0[2] = -cx0 * s0;
        T0[5] = -cy0 * s0;
        T0[1] = T0[3] = T0[6] = T0[7] = 0.0;
        T0[8] = 1.0;
        T1[0] = T1[4] = s1;
        T1[2] = -cx1 * s1;
        T1[5] = -cy1 * s1;
        T1[1] = T1[3] = T1[6] = T1[7] = 0.0;
        T1[8] = 1.0;
    }
    have_collinear_points(points, count) {
        let j = 0, k = 0, i = (count - 1) | 0;
        let dx1 = 0.0, dy1 = 0.0, dx2 = 0.0, dy2 = 0.0;
        for (; j < i; ++j) {
            dx1 = points[j].x - points[i].x;
            dy1 = points[j].y - points[i].y;
            for (k = 0; k < j; ++k) {
                dx2 = points[k].x - points[i].x;
                dy2 = points[k].y - points[i].y;
                if (Math.abs(dx2 * dy1 - dy2 * dx1) <=
                    JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2)))
                    return true;
            }
        }
        return false;
    }
}
class affine2d extends motion_model {
    constructor() {
        super();
    }
    run(from, to, model, count) {
        let i = 0, j = 0;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;
        const md = model.data, t0d = this.T0.data, t1d = this.T1.data;
        let pt0, pt1, px = 0.0, py = 0.0;
        const _matmath = new matmath();
        const _linalg = new jsfeatNext.linalg();
        this.iso_normalize_points(from, to, t0d, t1d, count);
        const a_buff = this.cache.get_buffer((2 * count * 6) << 3);
        const b_buff = this.cache.get_buffer((2 * count) << 3);
        const a_mt = new matrix_t(6, 2 * count, dt, a_buff.data);
        const b_mt = new matrix_t(1, 2 * count, dt, b_buff.data);
        const ad = a_mt.data, bd = b_mt.data;
        for (; i < count; ++i) {
            pt0 = from[i];
            pt1 = to[i];
            px = t0d[0] * pt0.x + t0d[1] * pt0.y + t0d[2];
            py = t0d[3] * pt0.x + t0d[4] * pt0.y + t0d[5];
            j = i * 2 * 6;
            (ad[j] = px), (ad[j + 1] = py), (ad[j + 2] = 1.0), (ad[j + 3] = 0.0), (ad[j + 4] = 0.0), (ad[j + 5] = 0.0);
            j += 6;
            (ad[j] = 0.0), (ad[j + 1] = 0.0), (ad[j + 2] = 0.0), (ad[j + 3] = px), (ad[j + 4] = py), (ad[j + 5] = 1.0);
            bd[i << 1] = t1d[0] * pt1.x + t1d[1] * pt1.y + t1d[2];
            bd[(i << 1) + 1] = t1d[3] * pt1.x + t1d[4] * pt1.y + t1d[5];
        }
        _matmath.multiply_AtA(this.AtA, a_mt);
        _matmath.multiply_AtB(this.AtB, a_mt, b_mt);
        _linalg.lu_solve(this.AtA, this.AtB);
        (md[0] = this.AtB.data[0]), (md[1] = this.AtB.data[1]), (md[2] = this.AtB.data[2]);
        (md[3] = this.AtB.data[3]), (md[4] = this.AtB.data[4]), (md[5] = this.AtB.data[5]);
        (md[6] = 0.0), (md[7] = 0.0), (md[8] = 1.0);
        _matmath.invert_3x3(this.T1, this.T1);
        _matmath.multiply_3x3(model, this.T1, model);
        _matmath.multiply_3x3(model, model, this.T0);
        this.cache.put_buffer(a_buff);
        this.cache.put_buffer(b_buff);
        return 1;
    }
}
class homography2d extends motion_model {
    mLtL;
    Evec;
    constructor() {
        super();
        this.mLtL = new matrix_t(9, 9, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.Evec = new matrix_t(9, 9, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
    }
    run(from, to, model, count) {
        let i = 0, j = 0;
        const md = model.data, t0d = this.T0.data, t1d = this.T1.data;
        const LtL = this.mLtL.data, evd = this.Evec.data;
        let x = 0.0, y = 0.0, X = 0.0, Y = 0.0;
        const _linalg = new jsfeatNext.linalg();
        const _matmath = new matmath();
        let smx = 0.0, smy = 0.0, cmx = 0.0, cmy = 0.0, sMx = 0.0, sMy = 0.0, cMx = 0.0, cMy = 0.0;
        for (; i < count; ++i) {
            cmx += to[i].x;
            cmy += to[i].y;
            cMx += from[i].x;
            cMy += from[i].y;
        }
        cmx /= count;
        cmy /= count;
        cMx /= count;
        cMy /= count;
        for (i = 0; i < count; ++i) {
            smx += Math.abs(to[i].x - cmx);
            smy += Math.abs(to[i].y - cmy);
            sMx += Math.abs(from[i].x - cMx);
            sMy += Math.abs(from[i].y - cMy);
        }
        if (Math.abs(smx) < JSFEAT_CONSTANTS.EPSILON ||
            Math.abs(smy) < JSFEAT_CONSTANTS.EPSILON ||
            Math.abs(sMx) < JSFEAT_CONSTANTS.EPSILON ||
            Math.abs(sMy) < JSFEAT_CONSTANTS.EPSILON)
            return 0;
        smx = count / smx;
        smy = count / smy;
        sMx = count / sMx;
        sMy = count / sMy;
        t0d[0] = sMx;
        t0d[1] = 0;
        t0d[2] = -cMx * sMx;
        t0d[3] = 0;
        t0d[4] = sMy;
        t0d[5] = -cMy * sMy;
        t0d[6] = 0;
        t0d[7] = 0;
        t0d[8] = 1;
        t1d[0] = 1.0 / smx;
        t1d[1] = 0;
        t1d[2] = cmx;
        t1d[3] = 0;
        t1d[4] = 1.0 / smy;
        t1d[5] = cmy;
        t1d[6] = 0;
        t1d[7] = 0;
        t1d[8] = 1;
        i = 81;
        while (--i >= 0) {
            LtL[i] = 0.0;
        }
        for (i = 0; i < count; ++i) {
            x = (to[i].x - cmx) * smx;
            y = (to[i].y - cmy) * smy;
            X = (from[i].x - cMx) * sMx;
            Y = (from[i].y - cMy) * sMy;
            LtL[0] += X * X;
            LtL[1] += X * Y;
            LtL[2] += X;
            LtL[6] += X * -x * X;
            LtL[7] += X * -x * Y;
            LtL[8] += X * -x;
            LtL[10] += Y * Y;
            LtL[11] += Y;
            LtL[15] += Y * -x * X;
            LtL[16] += Y * -x * Y;
            LtL[17] += Y * -x;
            LtL[20] += 1.0;
            LtL[24] += -x * X;
            LtL[25] += -x * Y;
            LtL[26] += -x;
            LtL[30] += X * X;
            LtL[31] += X * Y;
            LtL[32] += X;
            LtL[33] += X * -y * X;
            LtL[34] += X * -y * Y;
            LtL[35] += X * -y;
            LtL[40] += Y * Y;
            LtL[41] += Y;
            LtL[42] += Y * -y * X;
            LtL[43] += Y * -y * Y;
            LtL[44] += Y * -y;
            LtL[50] += 1.0;
            LtL[51] += -y * X;
            LtL[52] += -y * Y;
            LtL[53] += -y;
            LtL[60] += -x * X * -x * X + -y * X * -y * X;
            LtL[61] += -x * X * -x * Y + -y * X * -y * Y;
            LtL[62] += -x * X * -x + -y * X * -y;
            LtL[70] += -x * Y * -x * Y + -y * Y * -y * Y;
            LtL[71] += -x * Y * -x + -y * Y * -y;
            LtL[80] += -x * -x + -y * -y;
        }
        for (i = 0; i < 9; ++i) {
            for (j = 0; j < i; ++j)
                LtL[i * 9 + j] = LtL[j * 9 + i];
        }
        _linalg.eigenVV(this.mLtL, this.Evec);
        (md[0] = evd[72]), (md[1] = evd[73]), (md[2] = evd[74]);
        (md[3] = evd[75]), (md[4] = evd[76]), (md[5] = evd[77]);
        (md[6] = evd[78]), (md[7] = evd[79]), (md[8] = evd[80]);
        _matmath.multiply_3x3(model, this.T1, model);
        _matmath.multiply_3x3(model, model, this.T0);
        x = 1.0 / md[8];
        md[0] *= x;
        md[1] *= x;
        md[2] *= x;
        md[3] *= x;
        md[4] *= x;
        md[5] *= x;
        md[6] *= x;
        md[7] *= x;
        md[8] = 1.0;
        return 1;
    }
    error(from, to, model, err, count) {
        let i = 0;
        let pt0, pt1, ww = 0.0, dx = 0.0, dy = 0.0;
        const m = model.data;
        for (; i < count; ++i) {
            pt0 = from[i];
            pt1 = to[i];
            ww = 1.0 / (m[6] * pt0.x + m[7] * pt0.y + 1.0);
            dx = (m[0] * pt0.x + m[1] * pt0.y + m[2]) * ww - pt1.x;
            dy = (m[3] * pt0.x + m[4] * pt0.y + m[5]) * ww - pt1.y;
            err[i] = dx * dx + dy * dy;
        }
    }
    check_subset(from, to, count) {
        const _matmath = new matmath();
        if (count == 4) {
            let negative = 0;
            const fp0 = from[0], fp1 = from[1], fp2 = from[2], fp3 = from[3];
            const tp0 = to[0], tp1 = to[1], tp2 = to[2], tp3 = to[3];
            let A11 = fp0.x, A12 = fp0.y, A13 = 1.0;
            let A21 = fp1.x, A22 = fp1.y, A23 = 1.0;
            let A31 = fp2.x, A32 = fp2.y, A33 = 1.0;
            let B11 = tp0.x, B12 = tp0.y, B13 = 1.0;
            let B21 = tp1.x, B22 = tp1.y, B23 = 1.0;
            let B31 = tp2.x, B32 = tp2.y, B33 = 1.0;
            let detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            let detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
            if (detA * detB < 0)
                negative++;
            (A11 = fp1.x), (A12 = fp1.y);
            (A21 = fp2.x), (A22 = fp2.y);
            (A31 = fp3.x), (A32 = fp3.y);
            (B11 = tp1.x), (B12 = tp1.y);
            (B21 = tp2.x), (B22 = tp2.y);
            (B31 = tp3.x), (B32 = tp3.y);
            detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
            if (detA * detB < 0)
                negative++;
            (A11 = fp0.x), (A12 = fp0.y);
            (A21 = fp2.x), (A22 = fp2.y);
            (A31 = fp3.x), (A32 = fp3.y);
            (B11 = tp0.x), (B12 = tp0.y);
            (B21 = tp2.x), (B22 = tp2.y);
            (B31 = tp3.x), (B32 = tp3.y);
            detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
            if (detA * detB < 0)
                negative++;
            (A11 = fp0.x), (A12 = fp0.y);
            (A21 = fp1.x), (A22 = fp1.y);
            (A31 = fp3.x), (A32 = fp3.y);
            (B11 = tp0.x), (B12 = tp0.y);
            (B21 = tp1.x), (B22 = tp1.y);
            (B31 = tp3.x), (B32 = tp3.y);
            detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
            if (detA * detB < 0)
                negative++;
            if (negative != 0 && negative != 4) {
                return false;
            }
        }
        return true;
    }
}
jsfeatNext.cache = cache;
jsfeatNext.pyramid_t = class pyramid_t extends jsfeatNext {
    levels;
    data;
    pyrdown;
    constructor(levels) {
        super();
        this.levels = levels | 0;
        this.data = new Array(levels);
        const _imgproc = new jsfeatNext.imgproc();
        this.pyrdown = _imgproc.pyrdown;
    }
    allocate(start_w, start_h, data_type) {
        let i = this.levels;
        while (--i >= 0) {
            this.data[i] = new matrix_t(start_w >> i, start_h >> i, data_type);
        }
    }
    build(input, skip_first_level) {
        if (typeof skip_first_level === "undefined") {
            skip_first_level = true;
        }
        let i = 2, a = input, b = this.data[0];
        if (!skip_first_level) {
            let j = input.cols * input.rows;
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
};
jsfeatNext.transform = transform;
jsfeatNext.matrix_t = matrix_t;
jsfeatNext.keypoint_t = keypoint_t;
jsfeatNext.fast_corners = class fast_corners extends jsfeatNext {
    offsets16;
    _threshold;
    threshold_tab;
    pixel_off;
    score_diff;
    constructor() {
        super();
        this.offsets16 = new Int32Array([
            0, 3, 1, 3, 2, 2, 3, 1, 3, 0, 3, -1, 2, -2, 1, -3, 0, -3, -1, -3, -2, -2, -3, -1, -3, 0, -3, 1, -2, 2, -1,
            3,
        ]);
        this.threshold_tab = new Uint8Array(512);
        this._threshold = 20;
        this.pixel_off = new Int32Array(25);
        this.score_diff = new Int32Array(25);
    }
    set_threshold(threshold) {
        this._threshold = Math.min(Math.max(threshold, 0), 255);
        for (let i = -255; i <= 255; ++i) {
            this.threshold_tab[i + 255] = i < -this._threshold ? 1 : i > this._threshold ? 2 : 0;
        }
        return this._threshold;
    }
    detect(src, corners, border) {
        if (typeof border === "undefined") {
            border = 3;
        }
        const K = 8, N = 25;
        const img = src.data, w = src.cols, h = src.rows;
        let i = 0, j = 0, k = 0, vt = 0, x = 0, m3 = 0;
        const buf_node = this.cache.get_buffer(3 * w);
        const cpbuf_node = this.cache.get_buffer(((w + 1) * 3) << 2);
        const buf = buf_node.u8;
        const cpbuf = cpbuf_node.i32;
        const pixel = this.pixel_off;
        const sd = this.score_diff;
        const sy = Math.max(3, border);
        const ey = Math.min(h - 2, h - border);
        const sx = Math.max(3, border);
        const ex = Math.min(w - 3, w - border);
        let _count = 0, corners_cnt = 0, pt;
        const score_func = _cmp_score_16;
        const thresh_tab = this.threshold_tab;
        const threshold = this._threshold;
        let v = 0, tab = 0, d = 0, ncorners = 0, cornerpos = 0, curr = 0, ptr = 0, prev = 0, pprev = 0;
        let jp1 = 0, jm1 = 0, score = 0;
        this._cmp_offsets(pixel, w, 16);
        const pixel0 = pixel[0];
        const pixel1 = pixel[1];
        const pixel2 = pixel[2];
        const pixel3 = pixel[3];
        const pixel4 = pixel[4];
        const pixel5 = pixel[5];
        const pixel6 = pixel[6];
        const pixel7 = pixel[7];
        const pixel8 = pixel[8];
        const pixel9 = pixel[9];
        const pixel10 = pixel[10];
        const pixel11 = pixel[11];
        const pixel12 = pixel[12];
        const pixel13 = pixel[13];
        const pixel14 = pixel[14];
        const pixel15 = pixel[15];
        for (i = 0; i < w * 3; ++i) {
            buf[i] = 0;
        }
        for (i = sy; i < ey; ++i) {
            ptr = (i * w + sx) | 0;
            m3 = (i - 3) % 3;
            curr = (m3 * w) | 0;
            cornerpos = (m3 * (w + 1)) | 0;
            for (j = 0; j < w; ++j)
                buf[curr + j] = 0;
            ncorners = 0;
            if (i < ey - 1) {
                j = sx;
                for (; j < ex; ++j, ++ptr) {
                    v = img[ptr];
                    tab = -v + 255;
                    d = thresh_tab[tab + img[ptr + pixel0]] | thresh_tab[tab + img[ptr + pixel8]];
                    if (d == 0) {
                        continue;
                    }
                    d &= thresh_tab[tab + img[ptr + pixel2]] | thresh_tab[tab + img[ptr + pixel10]];
                    d &= thresh_tab[tab + img[ptr + pixel4]] | thresh_tab[tab + img[ptr + pixel12]];
                    d &= thresh_tab[tab + img[ptr + pixel6]] | thresh_tab[tab + img[ptr + pixel14]];
                    if (d == 0) {
                        continue;
                    }
                    d &= thresh_tab[tab + img[ptr + pixel1]] | thresh_tab[tab + img[ptr + pixel9]];
                    d &= thresh_tab[tab + img[ptr + pixel3]] | thresh_tab[tab + img[ptr + pixel11]];
                    d &= thresh_tab[tab + img[ptr + pixel5]] | thresh_tab[tab + img[ptr + pixel13]];
                    d &= thresh_tab[tab + img[ptr + pixel7]] | thresh_tab[tab + img[ptr + pixel15]];
                    if (d & 1) {
                        vt = v - threshold;
                        _count = 0;
                        for (k = 0; k < N; ++k) {
                            x = img[ptr + pixel[k]];
                            if (x < vt) {
                                ++_count;
                                if (_count > K) {
                                    ++ncorners;
                                    cpbuf[cornerpos + ncorners] = j;
                                    buf[curr + j] = score_func(img, ptr, pixel, sd, threshold);
                                    break;
                                }
                            }
                            else {
                                _count = 0;
                            }
                        }
                    }
                    if (d & 2) {
                        vt = v + threshold;
                        _count = 0;
                        for (k = 0; k < N; ++k) {
                            x = img[ptr + pixel[k]];
                            if (x > vt) {
                                ++_count;
                                if (_count > K) {
                                    ++ncorners;
                                    cpbuf[cornerpos + ncorners] = j;
                                    buf[curr + j] = score_func(img, ptr, pixel, sd, threshold);
                                    break;
                                }
                            }
                            else {
                                _count = 0;
                            }
                        }
                    }
                }
            }
            cpbuf[cornerpos + w] = ncorners;
            if (i == sy) {
                continue;
            }
            m3 = (i - 4 + 3) % 3;
            prev = (m3 * w) | 0;
            cornerpos = (m3 * (w + 1)) | 0;
            m3 = (i - 5 + 3) % 3;
            pprev = (m3 * w) | 0;
            ncorners = cpbuf[cornerpos + w];
            for (k = 0; k < ncorners; ++k) {
                j = cpbuf[cornerpos + k];
                jp1 = (j + 1) | 0;
                jm1 = (j - 1) | 0;
                score = buf[prev + j];
                if (score > buf[prev + jp1] &&
                    score > buf[prev + jm1] &&
                    score > buf[pprev + jm1] &&
                    score > buf[pprev + j] &&
                    score > buf[pprev + jp1] &&
                    score > buf[curr + jm1] &&
                    score > buf[curr + j] &&
                    score > buf[curr + jp1]) {
                    pt = corners[corners_cnt];
                    (pt.x = j), (pt.y = i - 1), (pt.score = score);
                    corners_cnt++;
                }
            }
        }
        this.cache.put_buffer(buf_node);
        this.cache.put_buffer(cpbuf_node);
        return corners_cnt;
    }
    _cmp_offsets(pixel, step, pattern_size) {
        let k = 0;
        const offsets = this.offsets16;
        for (; k < pattern_size; ++k) {
            pixel[k] = offsets[k << 1] + offsets[(k << 1) + 1] * step;
        }
        for (; k < 25; ++k) {
            pixel[k] = pixel[k - pattern_size];
        }
    }
};
jsfeatNext.imgproc = class imgproc extends jsfeatNext {
    constructor() {
        super();
    }
    grayscale(src, w, h, dst, code) {
        if (typeof code === "undefined") {
            code = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
        }
        let x = 0, y = 0, i = 0, j = 0, ir = 0, jr = 0;
        let coeff_r = 4899, coeff_g = 9617, coeff_b = 1868, cn = 4;
        if (code == JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            coeff_r = 1868;
            coeff_b = 4899;
        }
        if (code == JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            cn = 3;
        }
        const cn2 = cn << 1, cn3 = (cn * 3) | 0;
        dst.resize(w, h, 1);
        const dst_u8 = dst.data;
        for (y = 0; y < h; ++y, j += w, i += w * cn) {
            for (x = 0, ir = i, jr = j; x <= w - 4; x += 4, ir += cn << 2, jr += 4) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 1] =
                    (src[ir + cn] * coeff_r + src[ir + cn + 1] * coeff_g + src[ir + cn + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 2] =
                    (src[ir + cn2] * coeff_r + src[ir + cn2 + 1] * coeff_g + src[ir + cn2 + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 3] =
                    (src[ir + cn3] * coeff_r + src[ir + cn3 + 1] * coeff_g + src[ir + cn3 + 2] * coeff_b + 8192) >> 14;
            }
            for (; x < w; ++x, ++jr, ir += cn) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
            }
        }
    }
    resample(src, dst, nw, nh) {
        const h = src.rows, w = src.cols;
        if (h > nh && w > nw) {
            dst.resize(nw, nh, src.channel);
            if (src.type & JSFEAT_CONSTANTS.U8_t && dst.type & JSFEAT_CONSTANTS.U8_t && (h * w) / (nh * nw) < 0x100) {
                _resample_u8(src, dst, this.cache, nw, nh);
            }
            else {
                _resample(src, dst, this.cache, nw, nh);
            }
        }
    }
    box_blur_gray(src, dst, radius, options) {
        if (typeof options === "undefined") {
            options = 0;
        }
        const w = src.cols, h = src.rows, h2 = h << 1, w2 = w << 1;
        let i = 0, x = 0, y = 0, end = 0;
        const windowSize = ((radius << 1) + 1) | 0;
        const radiusPlusOne = (radius + 1) | 0, radiusPlus2 = (radiusPlusOne + 1) | 0;
        const scale = options & JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
        const tmp_buff = this.cache.get_buffer((w * h) << 2);
        let sum = 0, dstIndex = 0, srcIndex = 0, nextPixelIndex = 0, previousPixelIndex = 0;
        const data_i32 = tmp_buff.i32;
        let data_u8 = src.data;
        let hold = 0;
        dst.resize(w, h, src.channel);
        for (y = 0; y < h; ++y) {
            dstIndex = y;
            sum = radiusPlusOne * data_u8[srcIndex];
            for (i = (srcIndex + 1) | 0, end = (srcIndex + radius) | 0; i <= end; ++i) {
                sum += data_u8[i];
            }
            nextPixelIndex = (srcIndex + radiusPlusOne) | 0;
            previousPixelIndex = srcIndex;
            hold = data_u8[previousPixelIndex];
            for (x = 0; x < radius; ++x, dstIndex += h) {
                data_i32[dstIndex] = sum;
                sum += data_u8[nextPixelIndex] - hold;
                nextPixelIndex++;
            }
            for (; x < w - radiusPlus2; x += 2, dstIndex += h2) {
                data_i32[dstIndex] = sum;
                sum += data_u8[nextPixelIndex] - data_u8[previousPixelIndex];
                data_i32[dstIndex + h] = sum;
                sum += data_u8[nextPixelIndex + 1] - data_u8[previousPixelIndex + 1];
                nextPixelIndex += 2;
                previousPixelIndex += 2;
            }
            for (; x < w - radiusPlusOne; ++x, dstIndex += h) {
                data_i32[dstIndex] = sum;
                sum += data_u8[nextPixelIndex] - data_u8[previousPixelIndex];
                nextPixelIndex++;
                previousPixelIndex++;
            }
            hold = data_u8[nextPixelIndex - 1];
            for (; x < w; ++x, dstIndex += h) {
                data_i32[dstIndex] = sum;
                sum += hold - data_u8[previousPixelIndex];
                previousPixelIndex++;
            }
            srcIndex += w;
        }
        srcIndex = 0;
        data_u8 = dst.data;
        if (scale == 1) {
            for (y = 0; y < w; ++y) {
                dstIndex = y;
                sum = radiusPlusOne * data_i32[srcIndex];
                for (i = (srcIndex + 1) | 0, end = (srcIndex + radius) | 0; i <= end; ++i) {
                    sum += data_i32[i];
                }
                nextPixelIndex = srcIndex + radiusPlusOne;
                previousPixelIndex = srcIndex;
                hold = data_i32[previousPixelIndex];
                for (x = 0; x < radius; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum;
                    sum += data_i32[nextPixelIndex] - hold;
                    nextPixelIndex++;
                }
                for (; x < h - radiusPlus2; x += 2, dstIndex += w2) {
                    data_u8[dstIndex] = sum;
                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
                    data_u8[dstIndex + w] = sum;
                    sum += data_i32[nextPixelIndex + 1] - data_i32[previousPixelIndex + 1];
                    nextPixelIndex += 2;
                    previousPixelIndex += 2;
                }
                for (; x < h - radiusPlusOne; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum;
                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
                    nextPixelIndex++;
                    previousPixelIndex++;
                }
                hold = data_i32[nextPixelIndex - 1];
                for (; x < h; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum;
                    sum += hold - data_i32[previousPixelIndex];
                    previousPixelIndex++;
                }
                srcIndex += h;
            }
        }
        else {
            for (y = 0; y < w; ++y) {
                dstIndex = y;
                sum = radiusPlusOne * data_i32[srcIndex];
                for (i = (srcIndex + 1) | 0, end = (srcIndex + radius) | 0; i <= end; ++i) {
                    sum += data_i32[i];
                }
                nextPixelIndex = srcIndex + radiusPlusOne;
                previousPixelIndex = srcIndex;
                hold = data_i32[previousPixelIndex];
                for (x = 0; x < radius; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum * scale;
                    sum += data_i32[nextPixelIndex] - hold;
                    nextPixelIndex++;
                }
                for (; x < h - radiusPlus2; x += 2, dstIndex += w2) {
                    data_u8[dstIndex] = sum * scale;
                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
                    data_u8[dstIndex + w] = sum * scale;
                    sum += data_i32[nextPixelIndex + 1] - data_i32[previousPixelIndex + 1];
                    nextPixelIndex += 2;
                    previousPixelIndex += 2;
                }
                for (; x < h - radiusPlusOne; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum * scale;
                    sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
                    nextPixelIndex++;
                    previousPixelIndex++;
                }
                hold = data_i32[nextPixelIndex - 1];
                for (; x < h; ++x, dstIndex += w) {
                    data_u8[dstIndex] = sum * scale;
                    sum += hold - data_i32[previousPixelIndex];
                    previousPixelIndex++;
                }
                srcIndex += h;
            }
        }
        this.cache.put_buffer(tmp_buff);
    }
    gaussian_blur(src, dst, kernel_size, sigma) {
        const jsfeatmath = new jsfeatNext.math();
        if (typeof sigma === "undefined") {
            sigma = 0.0;
        }
        if (typeof kernel_size === "undefined") {
            kernel_size = 0;
        }
        kernel_size = kernel_size == 0 ? (Math.max(1, 4.0 * sigma + 1.0 - 1e-8) * 2 + 1) | 0 : kernel_size;
        const half_kernel = kernel_size >> 1;
        const w = src.cols, h = src.rows;
        const data_type = src.type, is_u8 = data_type & JSFEAT_CONSTANTS.U8_t;
        dst.resize(w, h, src.channel);
        const src_d = src.data, dst_d = dst.data;
        let buf, filter, buf_sz = (kernel_size + Math.max(h, w)) | 0;
        const buf_node = this.cache.get_buffer(buf_sz << 2);
        const filt_node = this.cache.get_buffer(kernel_size << 2);
        if (is_u8) {
            buf = buf_node.i32;
            filter = filt_node.i32;
        }
        else if (data_type & JSFEAT_CONSTANTS.S32_t) {
            buf = buf_node.i32;
            filter = filt_node.f32;
        }
        else {
            buf = buf_node.f32;
            filter = filt_node.f32;
        }
        jsfeatmath.get_gaussian_kernel(kernel_size, sigma, filter, data_type);
        if (is_u8) {
            _convol_u8(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
        }
        else {
            _convol(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
        }
        this.cache.put_buffer(buf_node);
        this.cache.put_buffer(filt_node);
    }
    hough_transform(img, rho_res, theta_res, threshold) {
        let r;
        let i;
        const image = img.data;
        const width = img.cols;
        const height = img.rows;
        const step = width;
        const min_theta = 0.0;
        const max_theta = Math.PI;
        const numangle = Math.round((max_theta - min_theta) / theta_res);
        const numrho = Math.round(((width + height) * 2 + 1) / rho_res);
        const irho = 1.0 / rho_res;
        const accum = new Int32Array((numangle + 2) * (numrho + 2));
        const tabSin = new Float32Array(numangle);
        const tabCos = new Float32Array(numangle);
        let n = 0;
        let ang = min_theta;
        for (; n < numangle; n++) {
            tabSin[n] = Math.sin(ang) * irho;
            tabCos[n] = Math.cos(ang) * irho;
            ang += theta_res;
        }
        for (i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (image[i * step + j] != 0) {
                    for (n = 0; n < numangle; n++) {
                        r = Math.round(j * tabCos[n] + i * tabSin[n]);
                        r += (numrho - 1) / 2;
                        accum[(n + 1) * (numrho + 2) + r + 1] += 1;
                    }
                }
            }
        }
        const _sort_buf = [];
        for (r = 0; r < numrho; r++) {
            for (n = 0; n < numangle; n++) {
                const base = (n + 1) * (numrho + 2) + r + 1;
                if (accum[base] > threshold &&
                    accum[base] > accum[base - 1] &&
                    accum[base] >= accum[base + 1] &&
                    accum[base] > accum[base - numrho - 2] &&
                    accum[base] >= accum[base + numrho + 2]) {
                    _sort_buf.push(base);
                }
            }
        }
        _sort_buf.sort(function (l1, l2) {
            return (accum[l1] > accum[l2] || (accum[l1] == accum[l2] && l1 < l2));
        });
        const linesMax = Math.min(numangle * numrho, _sort_buf.length);
        const scale = 1.0 / (numrho + 2);
        const lines = new Array();
        for (i = 0; i < linesMax; i++) {
            const idx = _sort_buf[i];
            n = Math.floor(idx * scale) - 1;
            r = idx - (n + 1) * (numrho + 2) - 1;
            const lrho = (r - (numrho - 1) * 0.5) * rho_res;
            const langle = n * theta_res;
            lines.push([lrho, langle]);
        }
        return lines;
    }
    pyrdown(src, dst, sx, sy) {
        if (typeof sx === "undefined") {
            sx = 0;
        }
        if (typeof sy === "undefined") {
            sy = 0;
        }
        const w = src.cols, h = src.rows;
        const w2 = w >> 1, h2 = h >> 1;
        const _w2 = w2 - (sx << 1), _h2 = h2 - (sy << 1);
        let x = 0, y = 0, sptr = sx + sy * w, sline = 0, dptr = 0, dline = 0;
        dst.resize(w2, h2, src.channel);
        const src_d = src.data, dst_d = dst.data;
        for (y = 0; y < _h2; ++y) {
            sline = sptr;
            dline = dptr;
            for (x = 0; x <= _w2 - 2; x += 2, dline += 2, sline += 4) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] + src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
                dst_d[dline + 1] =
                    (src_d[sline + 2] + src_d[sline + 3] + src_d[sline + w + 2] + src_d[sline + w + 3] + 2) >> 2;
            }
            for (; x < _w2; ++x, ++dline, sline += 2) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] + src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
            }
            sptr += w << 1;
            dptr += w2;
        }
    }
    scharr_derivatives(src, dst) {
        const w = src.cols, h = src.rows;
        let dstep = w << 1, x = 0, y = 0, x1 = 0, a, b, c, d, e, f;
        let srow0 = 0, srow1 = 0, srow2 = 0, drow = 0;
        let trow0, trow1;
        dst.resize(w, h, 2);
        const img = src.data, gxgy = dst.data;
        const buf0_node = this.cache.get_buffer((w + 2) << 2);
        const buf1_node = this.cache.get_buffer((w + 2) << 2);
        if (src.type & JSFEAT_CONSTANTS.U8_t || src.type & JSFEAT_CONSTANTS.S32_t) {
            trow0 = buf0_node.i32;
            trow1 = buf1_node.i32;
        }
        else {
            trow0 = buf0_node.f32;
            trow1 = buf1_node.f32;
        }
        for (; y < h; ++y, srow1 += w) {
            srow0 = ((y > 0 ? y - 1 : 1) * w) | 0;
            srow2 = ((y < h - 1 ? y + 1 : h - 2) * w) | 0;
            drow = (y * dstep) | 0;
            for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
                trow1[x1] = b - a;
                (a = img[srow0 + x + 1]), (b = img[srow2 + x + 1]);
                trow0[x1 + 1] = (a + b) * 3 + img[srow1 + x + 1] * 10;
                trow1[x1 + 1] = b - a;
            }
            for (; x < w; ++x, ++x1) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
                trow1[x1] = b - a;
            }
            x = (w + 1) | 0;
            trow0[0] = trow0[1];
            trow0[x] = trow0[w];
            trow1[0] = trow1[1];
            trow1[x] = trow1[w];
            for (x = 0; x <= w - 4; x += 4) {
                (a = trow1[x + 2]),
                    (b = trow1[x + 1]),
                    (c = trow1[x + 3]),
                    (d = trow1[x + 4]),
                    (e = trow0[x + 2]),
                    (f = trow0[x + 3]);
                gxgy[drow++] = e - trow0[x];
                gxgy[drow++] = (a + trow1[x]) * 3 + b * 10;
                gxgy[drow++] = f - trow0[x + 1];
                gxgy[drow++] = (c + b) * 3 + a * 10;
                gxgy[drow++] = trow0[x + 4] - e;
                gxgy[drow++] = (d + a) * 3 + c * 10;
                gxgy[drow++] = trow0[x + 5] - f;
                gxgy[drow++] = (trow1[x + 5] + c) * 3 + d * 10;
            }
            for (; x < w; ++x) {
                gxgy[drow++] = trow0[x + 2] - trow0[x];
                gxgy[drow++] = (trow1[x + 2] + trow1[x]) * 3 + trow1[x + 1] * 10;
            }
        }
        this.cache.put_buffer(buf0_node);
        this.cache.put_buffer(buf1_node);
    }
    sobel_derivatives(src, dst) {
        const w = src.cols, h = src.rows;
        let dstep = w << 1, x = 0, y = 0, x1 = 0, a, b, c, d, e, f;
        let srow0 = 0, srow1 = 0, srow2 = 0, drow = 0;
        let trow0, trow1;
        dst.resize(w, h, 2);
        const img = src.data, gxgy = dst.data;
        const buf0_node = this.cache.get_buffer((w + 2) << 2);
        const buf1_node = this.cache.get_buffer((w + 2) << 2);
        if (src.type & JSFEAT_CONSTANTS.U8_t || src.type & JSFEAT_CONSTANTS.S32_t) {
            trow0 = buf0_node.i32;
            trow1 = buf1_node.i32;
        }
        else {
            trow0 = buf0_node.f32;
            trow1 = buf1_node.f32;
        }
        for (; y < h; ++y, srow1 += w) {
            srow0 = ((y > 0 ? y - 1 : 1) * w) | 0;
            srow2 = ((y < h - 1 ? y + 1 : h - 2) * w) | 0;
            drow = (y * dstep) | 0;
            for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = a + b + img[srow1 + x] * 2;
                trow1[x1] = b - a;
                (a = img[srow0 + x + 1]), (b = img[srow2 + x + 1]);
                trow0[x1 + 1] = a + b + img[srow1 + x + 1] * 2;
                trow1[x1 + 1] = b - a;
            }
            for (; x < w; ++x, ++x1) {
                (a = img[srow0 + x]), (b = img[srow2 + x]);
                trow0[x1] = a + b + img[srow1 + x] * 2;
                trow1[x1] = b - a;
            }
            x = (w + 1) | 0;
            trow0[0] = trow0[1];
            trow0[x] = trow0[w];
            trow1[0] = trow1[1];
            trow1[x] = trow1[w];
            for (x = 0; x <= w - 4; x += 4) {
                (a = trow1[x + 2]),
                    (b = trow1[x + 1]),
                    (c = trow1[x + 3]),
                    (d = trow1[x + 4]),
                    (e = trow0[x + 2]),
                    (f = trow0[x + 3]);
                gxgy[drow++] = e - trow0[x];
                gxgy[drow++] = a + trow1[x] + b * 2;
                gxgy[drow++] = f - trow0[x + 1];
                gxgy[drow++] = c + b + a * 2;
                gxgy[drow++] = trow0[x + 4] - e;
                gxgy[drow++] = d + a + c * 2;
                gxgy[drow++] = trow0[x + 5] - f;
                gxgy[drow++] = trow1[x + 5] + c + d * 2;
            }
            for (; x < w; ++x) {
                gxgy[drow++] = trow0[x + 2] - trow0[x];
                gxgy[drow++] = trow1[x + 2] + trow1[x] + trow1[x + 1] * 2;
            }
        }
        this.cache.put_buffer(buf0_node);
        this.cache.put_buffer(buf1_node);
    }
    compute_integral_image(src, dst_sum, dst_sqsum, dst_tilted) {
        const w0 = src.cols | 0, h0 = src.rows | 0, src_d = src.data;
        const w1 = (w0 + 1) | 0;
        let s = 0, s2 = 0, p = 0, pup = 0, i = 0, j = 0, v = 0, k = 0;
        if (dst_sum && dst_sqsum) {
            for (; i < w1; ++i) {
                (dst_sum[i] = 0), (dst_sqsum[i] = 0);
            }
            (p = (w1 + 1) | 0), (pup = 1);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                s = s2 = 0;
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    v = src_d[k];
                    (s += v), (s2 += v * v);
                    dst_sum[p] = dst_sum[pup] + s;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                    v = src_d[k + 1];
                    (s += v), (s2 += v * v);
                    dst_sum[p + 1] = dst_sum[pup + 1] + s;
                    dst_sqsum[p + 1] = dst_sqsum[pup + 1] + s2;
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    v = src_d[k];
                    (s += v), (s2 += v * v);
                    dst_sum[p] = dst_sum[pup] + s;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                }
            }
        }
        else if (dst_sum) {
            for (; i < w1; ++i) {
                dst_sum[i] = 0;
            }
            (p = (w1 + 1) | 0), (pup = 1);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                s = 0;
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    s += src_d[k];
                    dst_sum[p] = dst_sum[pup] + s;
                    s += src_d[k + 1];
                    dst_sum[p + 1] = dst_sum[pup + 1] + s;
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    s += src_d[k];
                    dst_sum[p] = dst_sum[pup] + s;
                }
            }
        }
        else if (dst_sqsum) {
            for (; i < w1; ++i) {
                dst_sqsum[i] = 0;
            }
            (p = (w1 + 1) | 0), (pup = 1);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                s2 = 0;
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    v = src_d[k];
                    s2 += v * v;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                    v = src_d[k + 1];
                    s2 += v * v;
                    dst_sqsum[p + 1] = dst_sqsum[pup + 1] + s2;
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    v = src_d[k];
                    s2 += v * v;
                    dst_sqsum[p] = dst_sqsum[pup] + s2;
                }
            }
        }
        if (dst_tilted) {
            for (i = 0; i < w1; ++i) {
                dst_tilted[i] = 0;
            }
            (p = (w1 + 1) | 0), (pup = 0);
            for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
                for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
                    dst_tilted[p] = src_d[k] + dst_tilted[pup];
                    dst_tilted[p + 1] = src_d[k + 1] + dst_tilted[pup + 1];
                }
                for (; j < w0; ++j, ++k, ++p, ++pup) {
                    dst_tilted[p] = src_d[k] + dst_tilted[pup];
                }
            }
            (p = (w1 + w0) | 0), (pup = w0);
            for (i = 0; i < h0; ++i, p += w1, pup += w1) {
                dst_tilted[p] += dst_tilted[pup];
            }
            for (j = w0 - 1; j > 0; --j) {
                (p = j + h0 * w1), (pup = p - w1);
                for (i = h0; i > 0; --i, p -= w1, pup -= w1) {
                    dst_tilted[p] += dst_tilted[pup] + dst_tilted[pup + 1];
                }
            }
        }
    }
    equalize_histogram(src, dst) {
        const w = src.cols, h = src.rows, src_d = src.data;
        dst.resize(w, h, src.channel);
        const dst_d = dst.data, size = w * h;
        let i = 0, prev = 0, hist0, norm;
        const hist0_node = this.cache.get_buffer(256 << 2);
        hist0 = hist0_node.i32;
        for (; i < 256; ++i)
            hist0[i] = 0;
        for (i = 0; i < size; ++i) {
            ++hist0[src_d[i]];
        }
        prev = hist0[0];
        for (i = 1; i < 256; ++i) {
            prev = hist0[i] += prev;
        }
        norm = 255 / size;
        for (i = 0; i < size; ++i) {
            dst_d[i] = (hist0[src_d[i]] * norm + 0.5) | 0;
        }
        this.cache.put_buffer(hist0_node);
    }
    canny(src, dst, low_thresh, high_thresh) {
        const w = src.cols, h = src.rows, src_d = src.data;
        dst.resize(w, h, src.channel);
        const dst_d = dst.data;
        let i = 0, j = 0, grad = 0, w2 = w << 1, _grad = 0, suppress = 0, f = 0, x = 0, y = 0, s = 0;
        let tg22x = 0, tg67x = 0;
        const dxdy_node = this.cache.get_buffer((h * w2) << 2);
        const buf_node = this.cache.get_buffer((3 * (w + 2)) << 2);
        const map_node = this.cache.get_buffer(((h + 2) * (w + 2)) << 2);
        const stack_node = this.cache.get_buffer((h * w) << 2);
        const buf = buf_node.i32;
        const map = map_node.i32;
        const stack = stack_node.i32;
        const dxdy = dxdy_node.i32;
        const dxdy_m = new matrix_t(w, h, JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
        let row0 = 1, row1 = (w + 2 + 1) | 0, row2 = (2 * (w + 2) + 1) | 0, map_w = (w + 2) | 0, map_i = (map_w + 1) | 0, stack_i = 0;
        this.sobel_derivatives(src, dxdy_m);
        if (low_thresh > high_thresh) {
            i = low_thresh;
            low_thresh = high_thresh;
            high_thresh = i;
        }
        i = (3 * (w + 2)) | 0;
        while (--i >= 0) {
            buf[i] = 0;
        }
        i = ((h + 2) * (w + 2)) | 0;
        while (--i >= 0) {
            map[i] = 0;
        }
        for (; j < w; ++j, grad += 2) {
            (x = dxdy[grad]), (y = dxdy[grad + 1]);
            buf[row1 + j] = (x ^ (x >> 31)) - (x >> 31) + ((y ^ (y >> 31)) - (y >> 31));
        }
        for (i = 1; i <= h; ++i, grad += w2) {
            if (i == h) {
                j = row2 + w;
                while (--j >= row2) {
                    buf[j] = 0;
                }
            }
            else {
                for (j = 0; j < w; j++) {
                    (x = dxdy[grad + (j << 1)]), (y = dxdy[grad + (j << 1) + 1]);
                    buf[row2 + j] = (x ^ (x >> 31)) - (x >> 31) + ((y ^ (y >> 31)) - (y >> 31));
                }
            }
            _grad = (grad - w2) | 0;
            map[map_i - 1] = 0;
            suppress = 0;
            for (j = 0; j < w; ++j, _grad += 2) {
                f = buf[row1 + j];
                if (f > low_thresh) {
                    x = dxdy[_grad];
                    y = dxdy[_grad + 1];
                    s = x ^ y;
                    x = ((x ^ (x >> 31)) - (x >> 31)) | 0;
                    y = ((y ^ (y >> 31)) - (y >> 31)) | 0;
                    tg22x = x * 13573;
                    tg67x = tg22x + ((x + x) << 15);
                    y <<= 15;
                    if (y < tg22x) {
                        if (f > buf[row1 + j - 1] && f >= buf[row1 + j + 1]) {
                            if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                                map[map_i + j] = 2;
                                suppress = 1;
                                stack[stack_i++] = map_i + j;
                            }
                            else {
                                map[map_i + j] = 1;
                            }
                            continue;
                        }
                    }
                    else if (y > tg67x) {
                        if (f > buf[row0 + j] && f >= buf[row2 + j]) {
                            if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                                map[map_i + j] = 2;
                                suppress = 1;
                                stack[stack_i++] = map_i + j;
                            }
                            else {
                                map[map_i + j] = 1;
                            }
                            continue;
                        }
                    }
                    else {
                        s = s < 0 ? -1 : 1;
                        if (f > buf[row0 + j - s] && f > buf[row2 + j + s]) {
                            if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                                map[map_i + j] = 2;
                                suppress = 1;
                                stack[stack_i++] = map_i + j;
                            }
                            else {
                                map[map_i + j] = 1;
                            }
                            continue;
                        }
                    }
                }
                map[map_i + j] = 0;
                suppress = 0;
            }
            map[map_i + w] = 0;
            map_i += map_w;
            j = row0;
            row0 = row1;
            row1 = row2;
            row2 = j;
        }
        j = map_i - map_w - 1;
        for (i = 0; i < map_w; ++i, ++j) {
            map[j] = 0;
        }
        while (stack_i > 0) {
            map_i = stack[--stack_i];
            map_i -= map_w + 1;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += map_w;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i -= 2;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += map_w;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
            map_i += 1;
            if (map[map_i] == 1)
                (map[map_i] = 2), (stack[stack_i++] = map_i);
        }
        map_i = map_w + 1;
        row0 = 0;
        for (i = 0; i < h; ++i, map_i += map_w) {
            for (j = 0; j < w; ++j) {
                dst_d[row0++] = Number(map[map_i + j] == 2) * 0xff;
            }
        }
        this.cache.put_buffer(dxdy_node);
        this.cache.put_buffer(buf_node);
        this.cache.put_buffer(map_node);
        this.cache.put_buffer(stack_node);
    }
    warp_perspective(src, dst, transform, fill_value) {
        if (typeof fill_value === "undefined") {
            fill_value = 0;
        }
        const src_width = src.cols | 0, src_height = src.rows | 0, dst_width = dst.cols | 0, dst_height = dst.rows | 0;
        const src_d = src.data, dst_d = dst.data;
        let x = 0, y = 0, off = 0, ixs = 0, iys = 0, xs = 0.0, ys = 0.0, xs0 = 0.0, ys0 = 0.0, ws = 0.0, sc = 0.0, a = 0.0, b = 0.0, p0 = 0.0, p1 = 0.0;
        const td = transform.data;
        const m00 = td[0], m01 = td[1], m02 = td[2], m10 = td[3], m11 = td[4], m12 = td[5], m20 = td[6], m21 = td[7], m22 = td[8];
        for (let dptr = 0; y < dst_height; ++y) {
            (xs0 = m01 * y + m02), (ys0 = m11 * y + m12), (ws = m21 * y + m22);
            for (x = 0; x < dst_width; ++x, ++dptr, xs0 += m00, ys0 += m10, ws += m20) {
                sc = 1.0 / ws;
                (xs = xs0 * sc), (ys = ys0 * sc);
                (ixs = xs | 0), (iys = ys | 0);
                if (xs > 0 && ys > 0 && ixs < src_width - 1 && iys < src_height - 1) {
                    a = Math.max(xs - ixs, 0.0);
                    b = Math.max(ys - iys, 0.0);
                    off = (src_width * iys + ixs) | 0;
                    p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
                    p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);
                    dst_d[dptr] = p0 + b * (p1 - p0);
                }
                else
                    dst_d[dptr] = fill_value;
            }
        }
    }
    warp_affine(src, dst, transform, fill_value) {
        if (typeof fill_value === "undefined") {
            fill_value = 0;
        }
        const src_width = src.cols, src_height = src.rows, dst_width = dst.cols, dst_height = dst.rows;
        const src_d = src.data, dst_d = dst.data;
        let x = 0, y = 0, off = 0, ixs = 0, iys = 0, xs = 0.0, ys = 0.0, a = 0.0, b = 0.0, p0 = 0.0, p1 = 0.0;
        const td = transform.data;
        const m00 = td[0], m01 = td[1], m02 = td[2], m10 = td[3], m11 = td[4], m12 = td[5];
        for (let dptr = 0; y < dst_height; ++y) {
            xs = m01 * y + m02;
            ys = m11 * y + m12;
            for (x = 0; x < dst_width; ++x, ++dptr, xs += m00, ys += m10) {
                ixs = xs | 0;
                iys = ys | 0;
                if (ixs >= 0 && iys >= 0 && ixs < src_width - 1 && iys < src_height - 1) {
                    a = xs - ixs;
                    b = ys - iys;
                    off = src_width * iys + ixs;
                    p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
                    p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);
                    dst_d[dptr] = p0 + b * (p1 - p0);
                }
                else
                    dst_d[dptr] = fill_value;
            }
        }
    }
    skindetector(src, dst) {
        let r, g, b, j;
        let i = src.width * src.height;
        while (i--) {
            j = i * 4;
            r = src.data[j];
            g = src.data[j + 1];
            b = src.data[j + 2];
            if (r > 95 && g > 40 && b > 20 && r > g && r > b && r - Math.min(g, b) > 15 && Math.abs(r - g) > 15) {
                dst[i] = 255;
            }
            else {
                dst[i] = 0;
            }
        }
    }
};
jsfeatNext.math = class math extends jsfeatNext {
    qsort_stack;
    constructor() {
        super();
        this.qsort_stack = new Int32Array(48 * 2);
    }
    get_gaussian_kernel(size, sigma, kernel, data_type) {
        let i = 0, x = 0.0, t = 0.0, sigma_x = 0.0, scale_2x = 0.0;
        let sum = 0.0;
        const kern_node = this.cache.get_buffer(size << 2);
        const _kernel = kern_node.f32;
        if ((size & 1) == 1 && size <= 7 && sigma <= 0) {
            switch (size >> 1) {
                case 0:
                    _kernel[0] = 1.0;
                    sum = 1.0;
                    break;
                case 1:
                    (_kernel[0] = 0.25), (_kernel[1] = 0.5), (_kernel[2] = 0.25);
                    sum = 0.25 + 0.5 + 0.25;
                    break;
                case 2:
                    (_kernel[0] = 0.0625),
                        (_kernel[1] = 0.25),
                        (_kernel[2] = 0.375),
                        (_kernel[3] = 0.25),
                        (_kernel[4] = 0.0625);
                    sum = 0.0625 + 0.25 + 0.375 + 0.25 + 0.0625;
                    break;
                case 3:
                    (_kernel[0] = 0.03125),
                        (_kernel[1] = 0.109375),
                        (_kernel[2] = 0.21875),
                        (_kernel[3] = 0.28125),
                        (_kernel[4] = 0.21875),
                        (_kernel[5] = 0.109375),
                        (_kernel[6] = 0.03125);
                    sum = 0.03125 + 0.109375 + 0.21875 + 0.28125 + 0.21875 + 0.109375 + 0.03125;
                    break;
            }
        }
        else {
            sigma_x = sigma > 0 ? sigma : ((size - 1) * 0.5 - 1.0) * 0.3 + 0.8;
            scale_2x = -0.5 / (sigma_x * sigma_x);
            for (; i < size; ++i) {
                x = i - (size - 1) * 0.5;
                t = Math.exp(scale_2x * x * x);
                _kernel[i] = t;
                sum += t;
            }
        }
        if (data_type & JSFEAT_CONSTANTS.U8_t) {
            sum = 256.0 / sum;
            for (i = 0; i < size; ++i) {
                kernel[i] = (_kernel[i] * sum + 0.5) | 0;
            }
        }
        else {
            sum = 1.0 / sum;
            for (i = 0; i < size; ++i) {
                kernel[i] = _kernel[i] * sum;
            }
        }
        this.cache.put_buffer(kern_node);
    }
    perspective_4point_transform(model, src_x0, src_y0, dst_x0, dst_y0, src_x1, src_y1, dst_x1, dst_y1, src_x2, src_y2, dst_x2, dst_y2, src_x3, src_y3, dst_x3, dst_y3) {
        console.warn("⚠️⚠️⚠️ This method is deprecated ad will be removed in the next releases, use transform.perspective_4point_transform() instead. ⚠️⚠️⚠️");
        let t1 = src_x0;
        let t2 = src_x2;
        let t4 = src_y1;
        let t5 = t1 * t2 * t4;
        let t6 = src_y3;
        let t7 = t1 * t6;
        let t8 = t2 * t7;
        let t9 = src_y2;
        let t10 = t1 * t9;
        let t11 = src_x1;
        let t14 = src_y0;
        let t15 = src_x3;
        let t16 = t14 * t15;
        let t18 = t16 * t11;
        let t20 = t15 * t11 * t9;
        let t21 = t15 * t4;
        let t24 = t15 * t9;
        let t25 = t2 * t4;
        let t26 = t6 * t2;
        let t27 = t6 * t11;
        let t28 = t9 * t11;
        let t30 = 1.0 / (t21 - t24 - t25 + t26 - t27 + t28);
        let t32 = t1 * t15;
        let t35 = t14 * t11;
        let t41 = t4 * t1;
        let t42 = t6 * t41;
        let t43 = t14 * t2;
        let t46 = t16 * t9;
        let t48 = t14 * t9 * t11;
        let t51 = t4 * t6 * t2;
        let t55 = t6 * t14;
        let Hr0 = -(t8 - t5 + t10 * t11 - t11 * t7 - t16 * t2 + t18 - t20 + t21 * t2) * t30;
        let Hr1 = (t5 - t8 - t32 * t4 + t32 * t9 + t18 - t2 * t35 + t27 * t2 - t20) * t30;
        let Hr2 = t1;
        let Hr3 = (-t9 * t7 + t42 + t43 * t4 - t16 * t4 + t46 - t48 + t27 * t9 - t51) * t30;
        let Hr4 = (-t42 + t41 * t9 - t55 * t2 + t46 - t48 + t55 * t11 + t51 - t21 * t9) * t30;
        let Hr5 = t14;
        let Hr6 = (-t10 + t41 + t43 - t35 + t24 - t21 - t26 + t27) * t30;
        let Hr7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30;
        t1 = dst_x0;
        t2 = dst_x2;
        t4 = dst_y1;
        t5 = t1 * t2 * t4;
        t6 = dst_y3;
        t7 = t1 * t6;
        t8 = t2 * t7;
        t9 = dst_y2;
        t10 = t1 * t9;
        t11 = dst_x1;
        t14 = dst_y0;
        t15 = dst_x3;
        t16 = t14 * t15;
        t18 = t16 * t11;
        t20 = t15 * t11 * t9;
        t21 = t15 * t4;
        t24 = t15 * t9;
        t25 = t2 * t4;
        t26 = t6 * t2;
        t27 = t6 * t11;
        t28 = t9 * t11;
        t30 = 1.0 / (t21 - t24 - t25 + t26 - t27 + t28);
        t32 = t1 * t15;
        t35 = t14 * t11;
        t41 = t4 * t1;
        t42 = t6 * t41;
        t43 = t14 * t2;
        t46 = t16 * t9;
        t48 = t14 * t9 * t11;
        t51 = t4 * t6 * t2;
        t55 = t6 * t14;
        let Hl0 = -(t8 - t5 + t10 * t11 - t11 * t7 - t16 * t2 + t18 - t20 + t21 * t2) * t30;
        let Hl1 = (t5 - t8 - t32 * t4 + t32 * t9 + t18 - t2 * t35 + t27 * t2 - t20) * t30;
        let Hl2 = t1;
        let Hl3 = (-t9 * t7 + t42 + t43 * t4 - t16 * t4 + t46 - t48 + t27 * t9 - t51) * t30;
        let Hl4 = (-t42 + t41 * t9 - t55 * t2 + t46 - t48 + t55 * t11 + t51 - t21 * t9) * t30;
        let Hl5 = t14;
        let Hl6 = (-t10 + t41 + t43 - t35 + t24 - t21 - t26 + t27) * t30;
        let Hl7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30;
        t2 = Hr4 - Hr7 * Hr5;
        t4 = Hr0 * Hr4;
        t5 = Hr0 * Hr5;
        t7 = Hr3 * Hr1;
        t8 = Hr2 * Hr3;
        t10 = Hr1 * Hr6;
        let t12 = Hr2 * Hr6;
        t15 = 1.0 / (t4 - t5 * Hr7 - t7 + t8 * Hr7 + t10 * Hr5 - t12 * Hr4);
        t18 = -Hr3 + Hr5 * Hr6;
        let t23 = -Hr3 * Hr7 + Hr4 * Hr6;
        t28 = -Hr1 + Hr2 * Hr7;
        let t31 = Hr0 - t12;
        t35 = Hr0 * Hr7 - t10;
        t41 = -Hr1 * Hr5 + Hr2 * Hr4;
        let t44 = t5 - t8;
        let t47 = t4 - t7;
        t48 = t2 * t15;
        let t49 = t28 * t15;
        let t50 = t41 * t15;
        const mat = model.data;
        mat[0] = Hl0 * t48 + Hl1 * (t18 * t15) - Hl2 * (t23 * t15);
        mat[1] = Hl0 * t49 + Hl1 * (t31 * t15) - Hl2 * (t35 * t15);
        mat[2] = -Hl0 * t50 - Hl1 * (t44 * t15) + Hl2 * (t47 * t15);
        mat[3] = Hl3 * t48 + Hl4 * (t18 * t15) - Hl5 * (t23 * t15);
        mat[4] = Hl3 * t49 + Hl4 * (t31 * t15) - Hl5 * (t35 * t15);
        mat[5] = -Hl3 * t50 - Hl4 * (t44 * t15) + Hl5 * (t47 * t15);
        mat[6] = Hl6 * t48 + Hl7 * (t18 * t15) - t23 * t15;
        mat[7] = Hl6 * t49 + Hl7 * (t31 * t15) - t35 * t15;
        mat[8] = -Hl6 * t50 - Hl7 * (t44 * t15) + t47 * t15;
    }
    qsort(array, low, high, cmp) {
        const isort_thresh = 7;
        let t, ta, tb, tc;
        let sp = 0, left = 0, right = 0, i = 0, n = 0, m = 0, ptr = 0, ptr2 = 0, d = 0;
        let left0 = 0, left1 = 0, right0 = 0, right1 = 0, pivot = 0, a = 0, b = 0, c = 0, swap_cnt = 0;
        const stack = this.qsort_stack;
        if (high - low + 1 <= 1)
            return;
        stack[0] = low;
        stack[1] = high;
        while (sp >= 0) {
            left = stack[sp << 1];
            right = stack[(sp << 1) + 1];
            sp--;
            for (;;) {
                n = right - left + 1;
                if (n <= isort_thresh) {
                    for (ptr = left + 1; ptr <= right; ptr++) {
                        for (ptr2 = ptr; ptr2 > left && cmp(array[ptr2], array[ptr2 - 1]); ptr2--) {
                            t = array[ptr2];
                            array[ptr2] = array[ptr2 - 1];
                            array[ptr2 - 1] = t;
                        }
                    }
                    break;
                }
                else {
                    swap_cnt = 0;
                    left0 = left;
                    right0 = right;
                    pivot = left + (n >> 1);
                    if (n > 40) {
                        d = n >> 3;
                        (a = left), (b = left + d), (c = left + (d << 1));
                        (ta = array[a]), (tb = array[b]), (tc = array[c]);
                        left = cmp(ta, tb)
                            ? cmp(tb, tc)
                                ? b
                                : cmp(ta, tc)
                                    ? c
                                    : a
                            : cmp(tc, tb)
                                ? b
                                : cmp(ta, tc)
                                    ? a
                                    : c;
                        (a = pivot - d), (b = pivot), (c = pivot + d);
                        (ta = array[a]), (tb = array[b]), (tc = array[c]);
                        pivot = cmp(ta, tb)
                            ? cmp(tb, tc)
                                ? b
                                : cmp(ta, tc)
                                    ? c
                                    : a
                            : cmp(tc, tb)
                                ? b
                                : cmp(ta, tc)
                                    ? a
                                    : c;
                        (a = right - (d << 1)), (b = right - d), (c = right);
                        (ta = array[a]), (tb = array[b]), (tc = array[c]);
                        right = cmp(ta, tb)
                            ? cmp(tb, tc)
                                ? b
                                : cmp(ta, tc)
                                    ? c
                                    : a
                            : cmp(tc, tb)
                                ? b
                                : cmp(ta, tc)
                                    ? a
                                    : c;
                    }
                    (a = left), (b = pivot), (c = right);
                    (ta = array[a]), (tb = array[b]), (tc = array[c]);
                    pivot = cmp(ta, tb)
                        ? cmp(tb, tc)
                            ? b
                            : cmp(ta, tc)
                                ? c
                                : a
                        : cmp(tc, tb)
                            ? b
                            : cmp(ta, tc)
                                ? a
                                : c;
                    if (pivot != left0) {
                        t = array[pivot];
                        array[pivot] = array[left0];
                        array[left0] = t;
                        pivot = left0;
                    }
                    left = left1 = left0 + 1;
                    right = right1 = right0;
                    ta = array[pivot];
                    for (;;) {
                        while (left <= right && !cmp(ta, array[left])) {
                            if (!cmp(array[left], ta)) {
                                if (left > left1) {
                                    t = array[left1];
                                    array[left1] = array[left];
                                    array[left] = t;
                                }
                                swap_cnt = 1;
                                left1++;
                            }
                            left++;
                        }
                        while (left <= right && !cmp(array[right], ta)) {
                            if (!cmp(ta, array[right])) {
                                if (right < right1) {
                                    t = array[right1];
                                    array[right1] = array[right];
                                    array[right] = t;
                                }
                                swap_cnt = 1;
                                right1--;
                            }
                            right--;
                        }
                        if (left > right)
                            break;
                        t = array[left];
                        array[left] = array[right];
                        array[right] = t;
                        swap_cnt = 1;
                        left++;
                        right--;
                    }
                    if (swap_cnt == 0) {
                        (left = left0), (right = right0);
                        for (ptr = left + 1; ptr <= right; ptr++) {
                            for (ptr2 = ptr; ptr2 > left && cmp(array[ptr2], array[ptr2 - 1]); ptr2--) {
                                t = array[ptr2];
                                array[ptr2] = array[ptr2 - 1];
                                array[ptr2 - 1] = t;
                            }
                        }
                        break;
                    }
                    n = Math.min(left1 - left0, left - left1);
                    m = (left - n) | 0;
                    for (i = 0; i < n; ++i, ++m) {
                        t = array[left0 + i];
                        array[left0 + i] = array[m];
                        array[m] = t;
                    }
                    n = Math.min(right0 - right1, right1 - right);
                    m = (right0 - n + 1) | 0;
                    for (i = 0; i < n; ++i, ++m) {
                        t = array[left + i];
                        array[left + i] = array[m];
                        array[m] = t;
                    }
                    n = left - left1;
                    m = right1 - right;
                    if (n > 1) {
                        if (m > 1) {
                            if (n > m) {
                                ++sp;
                                stack[sp << 1] = left0;
                                stack[(sp << 1) + 1] = left0 + n - 1;
                                (left = right0 - m + 1), (right = right0);
                            }
                            else {
                                ++sp;
                                stack[sp << 1] = right0 - m + 1;
                                stack[(sp << 1) + 1] = right0;
                                (left = left0), (right = left0 + n - 1);
                            }
                        }
                        else {
                            (left = left0), (right = left0 + n - 1);
                        }
                    }
                    else if (m > 1)
                        (left = right0 - m + 1), (right = right0);
                    else
                        break;
                }
            }
        }
    }
    median(array, low, high) {
        let w;
        let middle = 0, ll = 0, hh = 0, median = (low + high) >> 1;
        for (;;) {
            if (high <= low)
                return array[median];
            if (high == low + 1) {
                if (array[low] > array[high]) {
                    w = array[low];
                    array[low] = array[high];
                    array[high] = w;
                }
                return array[median];
            }
            middle = (low + high) >> 1;
            if (array[middle] > array[high]) {
                w = array[middle];
                array[middle] = array[high];
                array[high] = w;
            }
            if (array[low] > array[high]) {
                w = array[low];
                array[low] = array[high];
                array[high] = w;
            }
            if (array[middle] > array[low]) {
                w = array[middle];
                array[middle] = array[low];
                array[low] = w;
            }
            ll = low + 1;
            w = array[middle];
            array[middle] = array[ll];
            array[ll] = w;
            hh = high;
            for (;;) {
                do
                    ++ll;
                while (array[low] > array[ll]);
                do
                    --hh;
                while (array[hh] > array[low]);
                if (hh < ll)
                    break;
                w = array[ll];
                array[ll] = array[hh];
                array[hh] = w;
            }
            w = array[low];
            array[low] = array[hh];
            array[hh] = w;
            if (hh <= median)
                low = ll;
            else if (hh >= median)
                high = hh - 1;
        }
        return 0;
    }
};
jsfeatNext.matmath = matmath;
jsfeatNext.linalg = class linalg extends jsfeatNext {
    matmath;
    constructor() {
        super();
        this.matmath = new matmath();
    }
    JacobiImpl(A, astep, W, V, vstep, n) {
        const eps = JSFEAT_CONSTANTS.EPSILON;
        let i = 0, j = 0, k = 0, m = 0, l = 0, idx = 0, _in = 0, _in2 = 0;
        let iters = 0, max_iter = n * n * 30;
        let mv = 0.0, val = 0.0, p = 0.0, y = 0.0, t = 0.0, s = 0.0, c = 0.0, a0 = 0.0, b0 = 0.0;
        const indR_buff = this.cache.get_buffer(n << 2);
        const indC_buff = this.cache.get_buffer(n << 2);
        const indR = indR_buff.i32;
        const indC = indC_buff.i32;
        if (V) {
            for (; i < n; i++) {
                k = i * vstep;
                for (j = 0; j < n; j++) {
                    V[k + j] = 0.0;
                }
                V[k + i] = 1.0;
            }
        }
        for (k = 0; k < n; k++) {
            W[k] = A[(astep + 1) * k];
            if (k < n - 1) {
                for (m = k + 1, mv = Math.abs(A[astep * k + m]), i = k + 2; i < n; i++) {
                    val = Math.abs(A[astep * k + i]);
                    if (mv < val)
                        (mv = val), (m = i);
                }
                indR[k] = m;
            }
            if (k > 0) {
                for (m = 0, mv = Math.abs(A[k]), i = 1; i < k; i++) {
                    val = Math.abs(A[astep * i + k]);
                    if (mv < val)
                        (mv = val), (m = i);
                }
                indC[k] = m;
            }
        }
        if (n > 1)
            for (; iters < max_iter; iters++) {
                for (k = 0, mv = Math.abs(A[indR[0]]), i = 1; i < n - 1; i++) {
                    val = Math.abs(A[astep * i + indR[i]]);
                    if (mv < val)
                        (mv = val), (k = i);
                }
                l = indR[k];
                for (i = 1; i < n; i++) {
                    val = Math.abs(A[astep * indC[i] + i]);
                    if (mv < val)
                        (mv = val), (k = indC[i]), (l = i);
                }
                p = A[astep * k + l];
                if (Math.abs(p) <= eps)
                    break;
                y = (W[l] - W[k]) * 0.5;
                t = Math.abs(y) + hypot(p, y);
                s = hypot(p, t);
                c = t / s;
                s = p / s;
                t = (p / t) * p;
                if (y < 0)
                    (s = -s), (t = -t);
                A[astep * k + l] = 0;
                W[k] -= t;
                W[l] += t;
                for (i = 0; i < k; i++) {
                    _in = astep * i + k;
                    _in2 = astep * i + l;
                    a0 = A[_in];
                    b0 = A[_in2];
                    A[_in] = a0 * c - b0 * s;
                    A[_in2] = a0 * s + b0 * c;
                }
                for (i = k + 1; i < l; i++) {
                    _in = astep * k + i;
                    _in2 = astep * i + l;
                    a0 = A[_in];
                    b0 = A[_in2];
                    A[_in] = a0 * c - b0 * s;
                    A[_in2] = a0 * s + b0 * c;
                }
                i = l + 1;
                _in = astep * k + i;
                _in2 = astep * l + i;
                for (; i < n; i++, _in++, _in2++) {
                    a0 = A[_in];
                    b0 = A[_in2];
                    A[_in] = a0 * c - b0 * s;
                    A[_in2] = a0 * s + b0 * c;
                }
                if (V) {
                    _in = vstep * k;
                    _in2 = vstep * l;
                    for (i = 0; i < n; i++, _in++, _in2++) {
                        a0 = V[_in];
                        b0 = V[_in2];
                        V[_in] = a0 * c - b0 * s;
                        V[_in2] = a0 * s + b0 * c;
                    }
                }
                for (j = 0; j < 2; j++) {
                    idx = j == 0 ? k : l;
                    if (idx < n - 1) {
                        for (m = idx + 1, mv = Math.abs(A[astep * idx + m]), i = idx + 2; i < n; i++) {
                            val = Math.abs(A[astep * idx + i]);
                            if (mv < val)
                                (mv = val), (m = i);
                        }
                        indR[idx] = m;
                    }
                    if (idx > 0) {
                        for (m = 0, mv = Math.abs(A[idx]), i = 1; i < idx; i++) {
                            val = Math.abs(A[astep * i + idx]);
                            if (mv < val)
                                (mv = val), (m = i);
                        }
                        indC[idx] = m;
                    }
                }
            }
        for (k = 0; k < n - 1; k++) {
            m = k;
            for (i = k + 1; i < n; i++) {
                if (W[m] < W[i])
                    m = i;
            }
            if (k != m) {
                swap(W, m, k, mv);
                if (V) {
                    for (i = 0; i < n; i++) {
                        swap(V, vstep * m + i, vstep * k + i, mv);
                    }
                }
            }
        }
        this.cache.put_buffer(indR_buff);
        this.cache.put_buffer(indC_buff);
    }
    JacobiSVDImpl(At, astep, _W, Vt, vstep, m, n, n1) {
        const eps = JSFEAT_CONSTANTS.EPSILON * 2.0;
        const minval = JSFEAT_CONSTANTS.FLT_MIN;
        let i = 0, j = 0, k = 0, iter = 0, max_iter = Math.max(m, 30);
        let Ai = 0, Aj = 0, Vi = 0, Vj = 0, changed = 0;
        let c = 0.0, s = 0.0, t = 0.0;
        let t0 = 0.0, t1 = 0.0, sd = 0.0, beta = 0.0, gamma = 0.0, delta = 0.0, a = 0.0, p = 0.0, b = 0.0;
        let seed = 0x1234;
        let val = 0.0, val0 = 0.0, asum = 0.0;
        const W_buff = this.cache.get_buffer(n << 3);
        const W = W_buff.f64;
        for (; i < n; i++) {
            for (k = 0, sd = 0; k < m; k++) {
                t = At[i * astep + k];
                sd += t * t;
            }
            W[i] = sd;
            if (Vt) {
                for (k = 0; k < n; k++) {
                    Vt[i * vstep + k] = 0;
                }
                Vt[i * vstep + i] = 1;
            }
        }
        for (; iter < max_iter; iter++) {
            changed = 0;
            for (i = 0; i < n - 1; i++) {
                for (j = i + 1; j < n; j++) {
                    (Ai = (i * astep) | 0), (Aj = (j * astep) | 0);
                    (a = W[i]), (p = 0), (b = W[j]);
                    k = 2;
                    p += At[Ai] * At[Aj];
                    p += At[Ai + 1] * At[Aj + 1];
                    for (; k < m; k++)
                        p += At[Ai + k] * At[Aj + k];
                    if (Math.abs(p) <= eps * Math.sqrt(a * b))
                        continue;
                    p *= 2.0;
                    (beta = a - b), (gamma = hypot(p, beta));
                    if (beta < 0) {
                        delta = (gamma - beta) * 0.5;
                        s = Math.sqrt(delta / gamma);
                        c = p / (gamma * s * 2.0);
                    }
                    else {
                        c = Math.sqrt((gamma + beta) / (gamma * 2.0));
                        s = p / (gamma * c * 2.0);
                    }
                    (a = 0.0), (b = 0.0);
                    k = 2;
                    t0 = c * At[Ai] + s * At[Aj];
                    t1 = -s * At[Ai] + c * At[Aj];
                    At[Ai] = t0;
                    At[Aj] = t1;
                    a += t0 * t0;
                    b += t1 * t1;
                    t0 = c * At[Ai + 1] + s * At[Aj + 1];
                    t1 = -s * At[Ai + 1] + c * At[Aj + 1];
                    At[Ai + 1] = t0;
                    At[Aj + 1] = t1;
                    a += t0 * t0;
                    b += t1 * t1;
                    for (; k < m; k++) {
                        t0 = c * At[Ai + k] + s * At[Aj + k];
                        t1 = -s * At[Ai + k] + c * At[Aj + k];
                        At[Ai + k] = t0;
                        At[Aj + k] = t1;
                        a += t0 * t0;
                        b += t1 * t1;
                    }
                    W[i] = a;
                    W[j] = b;
                    changed = 1;
                    if (Vt) {
                        (Vi = (i * vstep) | 0), (Vj = (j * vstep) | 0);
                        k = 2;
                        t0 = c * Vt[Vi] + s * Vt[Vj];
                        t1 = -s * Vt[Vi] + c * Vt[Vj];
                        Vt[Vi] = t0;
                        Vt[Vj] = t1;
                        t0 = c * Vt[Vi + 1] + s * Vt[Vj + 1];
                        t1 = -s * Vt[Vi + 1] + c * Vt[Vj + 1];
                        Vt[Vi + 1] = t0;
                        Vt[Vj + 1] = t1;
                        for (; k < n; k++) {
                            t0 = c * Vt[Vi + k] + s * Vt[Vj + k];
                            t1 = -s * Vt[Vi + k] + c * Vt[Vj + k];
                            Vt[Vi + k] = t0;
                            Vt[Vj + k] = t1;
                        }
                    }
                }
            }
            if (changed == 0)
                break;
        }
        for (i = 0; i < n; i++) {
            for (k = 0, sd = 0; k < m; k++) {
                t = At[i * astep + k];
                sd += t * t;
            }
            W[i] = Math.sqrt(sd);
        }
        for (i = 0; i < n - 1; i++) {
            j = i;
            for (k = i + 1; k < n; k++) {
                if (W[j] < W[k])
                    j = k;
            }
            if (i != j) {
                swap(W, i, j, sd);
                if (Vt) {
                    for (k = 0; k < m; k++) {
                        swap(At, i * astep + k, j * astep + k, t);
                    }
                    for (k = 0; k < n; k++) {
                        swap(Vt, i * vstep + k, j * vstep + k, t);
                    }
                }
            }
        }
        for (i = 0; i < n; i++) {
            _W[i] = W[i];
        }
        if (!Vt) {
            this.cache.put_buffer(W_buff);
            return;
        }
        for (i = 0; i < n1; i++) {
            sd = i < n ? W[i] : 0;
            while (sd <= minval) {
                val0 = 1.0 / m;
                for (k = 0; k < m; k++) {
                    seed = seed * 214013 + 2531011;
                    val = ((seed >> 16) & 0x7fff & 256) != 0 ? val0 : -val0;
                    At[i * astep + k] = val;
                }
                for (iter = 0; iter < 2; iter++) {
                    for (j = 0; j < i; j++) {
                        sd = 0;
                        for (k = 0; k < m; k++) {
                            sd += At[i * astep + k] * At[j * astep + k];
                        }
                        asum = 0.0;
                        for (k = 0; k < m; k++) {
                            t = At[i * astep + k] - sd * At[j * astep + k];
                            At[i * astep + k] = t;
                            asum += Math.abs(t);
                        }
                        asum = asum ? 1.0 / asum : 0;
                        for (k = 0; k < m; k++) {
                            At[i * astep + k] *= asum;
                        }
                    }
                }
                sd = 0;
                for (k = 0; k < m; k++) {
                    t = At[i * astep + k];
                    sd += t * t;
                }
                sd = Math.sqrt(sd);
            }
            s = 1.0 / sd;
            for (k = 0; k < m; k++) {
                At[i * astep + k] *= s;
            }
        }
        this.cache.put_buffer(W_buff);
    }
    lu_solve(A, B) {
        let i = 0, j = 0, k = 0, p = 1, astep = A.cols;
        const ad = A.data, bd = B.data;
        let t, alpha, d, s;
        for (i = 0; i < astep; i++) {
            k = i;
            for (j = i + 1; j < astep; j++) {
                if (Math.abs(ad[j * astep + i]) > Math.abs(ad[k * astep + i])) {
                    k = j;
                }
            }
            if (Math.abs(ad[k * astep + i]) < JSFEAT_CONSTANTS.EPSILON) {
                return 0;
            }
            if (k != i) {
                for (j = i; j < astep; j++) {
                    swap(ad, i * astep + j, k * astep + j, t);
                }
                swap(bd, i, k, t);
                p = -p;
            }
            d = -1.0 / ad[i * astep + i];
            for (j = i + 1; j < astep; j++) {
                alpha = ad[j * astep + i] * d;
                for (k = i + 1; k < astep; k++) {
                    ad[j * astep + k] += alpha * ad[i * astep + k];
                }
                bd[j] += alpha * bd[i];
            }
            ad[i * astep + i] = -d;
        }
        for (i = astep - 1; i >= 0; i--) {
            s = bd[i];
            for (k = i + 1; k < astep; k++) {
                s -= ad[i * astep + k] * bd[k];
            }
            bd[i] = s * ad[i * astep + i];
        }
        return 1;
    }
    cholesky_solve(A, B) {
        let col = 0, row = 0, col2 = 0, cs = 0, rs = 0, i = 0, j = 0;
        const size = A.cols;
        const ad = A.data, bd = B.data;
        let val, inv_diag;
        for (col = 0; col < size; col++) {
            inv_diag = 1.0;
            cs = col * size;
            rs = cs;
            for (row = col; row < size; row++) {
                val = ad[rs + col];
                for (col2 = 0; col2 < col; col2++) {
                    val -= ad[col2 * size + col] * ad[rs + col2];
                }
                if (row == col) {
                    ad[rs + col] = val;
                    if (val == 0) {
                        return 0;
                    }
                    inv_diag = 1.0 / val;
                }
                else {
                    ad[cs + row] = val;
                    ad[rs + col] = val * inv_diag;
                }
                rs = rs + size;
            }
        }
        cs = 0;
        for (i = 0; i < size; i++) {
            val = bd[i];
            for (j = 0; j < i; j++) {
                val -= ad[cs + j] * bd[j];
            }
            bd[i] = val;
            cs = cs + size;
        }
        cs = 0;
        for (i = 0; i < size; i++) {
            bd[i] /= ad[cs + i];
            cs = cs + size;
        }
        i = size - 1;
        for (; i >= 0; i--) {
            val = bd[i];
            j = i + 1;
            cs = j * size;
            for (; j < size; j++) {
                val -= ad[cs + i] * bd[j];
                cs = cs + size;
            }
            bd[i] = val;
        }
        return 1;
    }
    svd_decompose(A, W, U, V, options) {
        if (typeof options === "undefined") {
            options = 0;
        }
        let at = 0, i = 0, j = 0, _m = A.rows, _n = A.cols, m = _m, n = _n;
        const dt = A.type | JSFEAT_CONSTANTS.C1_t;
        if (m < n) {
            at = 1;
            i = m;
            m = n;
            n = i;
        }
        const a_buff = this.cache.get_buffer((m * m) << 3);
        const w_buff = this.cache.get_buffer(n << 3);
        const v_buff = this.cache.get_buffer((n * n) << 3);
        const a_mt = new matrix_t(m, m, dt, a_buff.data);
        const w_mt = new matrix_t(1, n, dt, w_buff.data);
        const v_mt = new matrix_t(n, n, dt, v_buff.data);
        if (at == 0) {
            this.matmath.transpose(a_mt, A);
        }
        else {
            for (i = 0; i < _n * _m; i++) {
                a_mt.data[i] = A.data[i];
            }
            for (; i < n * m; i++) {
                a_mt.data[i] = 0;
            }
        }
        this.JacobiSVDImpl(a_mt.data, m, w_mt.data, v_mt.data, n, m, n, m);
        if (W) {
            for (i = 0; i < n; i++) {
                W.data[i] = w_mt.data[i];
            }
            for (; i < _n; i++) {
                W.data[i] = 0;
            }
        }
        if (at == 0) {
            if (U && options & JSFEAT_CONSTANTS.SVD_U_T) {
                i = m * m;
                while (--i >= 0) {
                    U.data[i] = a_mt.data[i];
                }
            }
            else if (U) {
                this.matmath.transpose(U, a_mt);
            }
            if (V && options & JSFEAT_CONSTANTS.SVD_V_T) {
                i = n * n;
                while (--i >= 0) {
                    V.data[i] = v_mt.data[i];
                }
            }
            else if (V) {
                this.matmath.transpose(V, v_mt);
            }
        }
        else {
            if (U && options & JSFEAT_CONSTANTS.SVD_U_T) {
                i = n * n;
                while (--i >= 0) {
                    U.data[i] = v_mt.data[i];
                }
            }
            else if (U) {
                this.matmath.transpose(U, v_mt);
            }
            if (V && options & JSFEAT_CONSTANTS.SVD_V_T) {
                i = m * m;
                while (--i >= 0) {
                    V.data[i] = a_mt.data[i];
                }
            }
            else if (V) {
                this.matmath.transpose(V, a_mt);
            }
        }
        this.cache.put_buffer(a_buff);
        this.cache.put_buffer(w_buff);
        this.cache.put_buffer(v_buff);
    }
    svd_solve(A, X, B) {
        let i = 0, j = 0, k = 0;
        let pu = 0, pv = 0;
        const nrows = A.rows, ncols = A.cols;
        let sum = 0.0, xsum = 0.0, tol = 0.0;
        const dt = A.type | JSFEAT_CONSTANTS.C1_t;
        const u_buff = this.cache.get_buffer((nrows * nrows) << 3);
        const w_buff = this.cache.get_buffer(ncols << 3);
        const v_buff = this.cache.get_buffer((ncols * ncols) << 3);
        const u_mt = new matrix_t(nrows, nrows, dt, u_buff.data);
        const w_mt = new matrix_t(1, ncols, dt, w_buff.data);
        const v_mt = new matrix_t(ncols, ncols, dt, v_buff.data);
        const bd = B.data, ud = u_mt.data, wd = w_mt.data, vd = v_mt.data;
        this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
        tol = JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;
        for (; i < ncols; i++, pv += ncols) {
            xsum = 0.0;
            for (j = 0; j < ncols; j++) {
                if (wd[j] > tol) {
                    for (k = 0, sum = 0.0, pu = 0; k < nrows; k++, pu += ncols) {
                        sum += ud[pu + j] * bd[k];
                    }
                    xsum += (sum * vd[pv + j]) / wd[j];
                }
            }
            X.data[i] = xsum;
        }
        this.cache.put_buffer(u_buff);
        this.cache.put_buffer(w_buff);
        this.cache.put_buffer(v_buff);
    }
    svd_invert(Ai, A) {
        let i = 0, j = 0, k = 0;
        let pu = 0, pv = 0, pa = 0;
        const nrows = A.rows, ncols = A.cols;
        let sum = 0.0, tol = 0.0;
        const dt = A.type | JSFEAT_CONSTANTS.C1_t;
        const u_buff = this.cache.get_buffer((nrows * nrows) << 3);
        const w_buff = this.cache.get_buffer(ncols << 3);
        const v_buff = this.cache.get_buffer((ncols * ncols) << 3);
        const u_mt = new matrix_t(nrows, nrows, dt, u_buff.data);
        const w_mt = new matrix_t(1, ncols, dt, w_buff.data);
        const v_mt = new matrix_t(ncols, ncols, dt, v_buff.data);
        const id = Ai.data, ud = u_mt.data, wd = w_mt.data, vd = v_mt.data;
        this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
        tol = JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;
        for (; i < ncols; i++, pv += ncols) {
            for (j = 0, pu = 0; j < nrows; j++, pa++) {
                for (k = 0, sum = 0.0; k < ncols; k++, pu++) {
                    if (wd[k] > tol)
                        sum += (vd[pv + k] * ud[pu]) / wd[k];
                }
                id[pa] = sum;
            }
        }
        this.cache.put_buffer(u_buff);
        this.cache.put_buffer(w_buff);
        this.cache.put_buffer(v_buff);
    }
    eigenVV(A, vects, vals) {
        let n = A.cols, i = n * n;
        const dt = A.type | JSFEAT_CONSTANTS.C1_t;
        const a_buff = this.cache.get_buffer((n * n) << 3);
        const w_buff = this.cache.get_buffer(n << 3);
        const a_mt = new matrix_t(n, n, dt, a_buff.data);
        const w_mt = new matrix_t(1, n, dt, w_buff.data);
        while (--i >= 0) {
            a_mt.data[i] = A.data[i];
        }
        this.JacobiImpl(a_mt.data, n, w_mt.data, vects ? vects.data : null, n, n);
        if (vals) {
            while (--n >= 0) {
                vals.data[n] = w_mt.data[n];
            }
        }
        this.cache.put_buffer(a_buff);
        this.cache.put_buffer(w_buff);
    }
};
jsfeatNext.orb = class orb extends jsfeatNext {
    bit_pattern_31_;
    H;
    patch_img;
    imgproc;
    constructor() {
        super();
        this.bit_pattern_31_ = new Int32Array(bit_pattern_31);
        this.H = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.patch_img = new matrix_t(32, 32, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t);
        this.imgproc = new jsfeatNext.imgproc();
    }
    describe(src, corners, count, descriptors) {
        const DESCR_SIZE = 32;
        let i = 0, b = 0, px = 0.0, py = 0.0, angle = 0.0;
        let t0 = 0, t1 = 0, val = 0;
        const patch_d = this.patch_img.data;
        const patch_off = 16 * 32 + 16;
        let patt = 0;
        if (!(descriptors.type & JSFEAT_CONSTANTS.U8_t)) {
            descriptors.type = JSFEAT_CONSTANTS.U8_t;
            descriptors.cols = DESCR_SIZE;
            descriptors.rows = count;
            descriptors.channel = 1;
            descriptors.allocate();
        }
        else {
            descriptors.resize(DESCR_SIZE, count, 1);
        }
        const descr_d = descriptors.data;
        let descr_off = 0;
        for (i = 0; i < count; ++i) {
            px = corners[i].x;
            py = corners[i].y;
            angle = corners[i].angle;
            rectify_patch(src, this.patch_img, angle, px, py, 32, this.H, this.imgproc);
            patt = 0;
            for (b = 0; b < DESCR_SIZE; ++b) {
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val = (t0 < t1) | 0;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 1;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 2;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 3;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 4;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 5;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 6;
                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
                patt += 2;
                val |= (t0 < t1) << 7;
                descr_d[descr_off + b] = val;
            }
            descr_off += DESCR_SIZE;
        }
    }
};
jsfeatNext.yape = yape;
jsfeatNext.yape06 = class yape06 extends jsfeatNext {
    laplacian_threshold;
    min_eigen_value_threshold;
    constructor() {
        super();
        this.laplacian_threshold = 30;
        this.min_eigen_value_threshold = 25;
    }
    detect(src, points, border) {
        if (typeof border === "undefined") {
            border = 5;
        }
        let x = 0, y = 0;
        const w = src.cols, h = src.rows, srd_d = src.data;
        const Dxx = 5, Dyy = (5 * w) | 0;
        const Dxy = (3 + 3 * w) | 0, Dyx = (3 - 3 * w) | 0;
        const lap_buf = this.cache.get_buffer((w * h) << 2);
        const laplacian = lap_buf.i32;
        let lv = 0, row = 0, rowx = 0, min_eigen_value = 0, pt;
        let number_of_points = 0;
        const lap_thresh = this.laplacian_threshold;
        const eigen_thresh = this.min_eigen_value_threshold;
        const sx = Math.max(5, border) | 0;
        const sy = Math.max(3, border) | 0;
        const ex = Math.min(w - 5, w - border) | 0;
        const ey = Math.min(h - 3, h - border) | 0;
        x = w * h;
        while (--x >= 0) {
            laplacian[x] = 0;
        }
        compute_laplacian(srd_d, laplacian, w, Dxx, Dyy, sx, sy, ex, ey);
        row = (sy * w + sx) | 0;
        for (y = sy; y < ey; ++y, row += w) {
            for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
                lv = laplacian[rowx];
                if ((lv < -lap_thresh &&
                    lv < laplacian[rowx - 1] &&
                    lv < laplacian[rowx + 1] &&
                    lv < laplacian[rowx - w] &&
                    lv < laplacian[rowx + w] &&
                    lv < laplacian[rowx - w - 1] &&
                    lv < laplacian[rowx + w - 1] &&
                    lv < laplacian[rowx - w + 1] &&
                    lv < laplacian[rowx + w + 1]) ||
                    (lv > lap_thresh &&
                        lv > laplacian[rowx - 1] &&
                        lv > laplacian[rowx + 1] &&
                        lv > laplacian[rowx - w] &&
                        lv > laplacian[rowx + w] &&
                        lv > laplacian[rowx - w - 1] &&
                        lv > laplacian[rowx + w - 1] &&
                        lv > laplacian[rowx - w + 1] &&
                        lv > laplacian[rowx + w + 1])) {
                    min_eigen_value = hessian_min_eigen_value(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);
                    if (min_eigen_value > eigen_thresh) {
                        pt = points[number_of_points];
                        (pt.x = x), (pt.y = y), (pt.score = min_eigen_value);
                        ++number_of_points;
                        ++x, ++rowx;
                    }
                }
            }
        }
        this.cache.put_buffer(lap_buf);
        return number_of_points;
    }
};
jsfeatNext.motion_estimator = class motion_estimator extends jsfeatNext {
    constructor() {
        super();
    }
    get_subset(kernel, from, to, need_cnt, max_cnt, from_sub, to_sub) {
        const max_try = 1000;
        const indices = [];
        let i = 0, j = 0, ssiter = 0, idx_i = 0, ok = false;
        for (; ssiter < max_try; ++ssiter) {
            i = 0;
            for (; i < need_cnt && ssiter < max_try;) {
                ok = false;
                idx_i = 0;
                while (!ok) {
                    ok = true;
                    idx_i = indices[i] = Math.floor(Math.random() * max_cnt) | 0;
                    for (j = 0; j < i; ++j) {
                        if (idx_i == indices[j]) {
                            ok = false;
                            break;
                        }
                    }
                }
                from_sub[i] = from[idx_i];
                to_sub[i] = to[idx_i];
                if (!kernel.check_subset(from_sub, to_sub, i + 1)) {
                    ssiter++;
                    continue;
                }
                ++i;
            }
            break;
        }
        return i == need_cnt && ssiter < max_try;
    }
    find_inliers(kernel, model, from, to, count, thresh, err, mask) {
        let numinliers = 0, i = 0, f = 0;
        const t = thresh * thresh;
        kernel.error(from, to, model, err, count);
        for (; i < count; ++i) {
            f = (err[i] <= t);
            mask[i] = f;
            numinliers += f;
        }
        return numinliers;
    }
    ransac(params, kernel, from, to, count, model, mask, max_iters) {
        if (typeof max_iters === "undefined") {
            max_iters = 1000;
        }
        if (count < params.size)
            return false;
        const model_points = params.size;
        let niters = max_iters, iter = 0;
        let result = false;
        const subset0 = [];
        const subset1 = [];
        let found = false;
        const mc = model.cols, mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;
        const m_buff = this.cache.get_buffer((mc * mr) << 3);
        const ms_buff = this.cache.get_buffer(count);
        const err_buff = this.cache.get_buffer(count << 2);
        const M = new matrix_t(mc, mr, dt, m_buff.data);
        const curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
        let inliers_max = -1, numinliers = 0;
        let nmodels = 0;
        const err = err_buff.f32;
        if (count == model_points) {
            if (kernel.run(from, to, M, count) <= 0) {
                this.cache.put_buffer(m_buff);
                this.cache.put_buffer(ms_buff);
                this.cache.put_buffer(err_buff);
                return false;
            }
            M.copy_to(model);
            if (mask) {
                while (--count >= 0) {
                    mask.data[count] = 1;
                }
            }
            this.cache.put_buffer(m_buff);
            this.cache.put_buffer(ms_buff);
            this.cache.put_buffer(err_buff);
            return true;
        }
        for (; iter < niters; ++iter) {
            found = this.get_subset(kernel, from, to, model_points, count, subset0, subset1);
            if (!found) {
                if (iter == 0) {
                    this.cache.put_buffer(m_buff);
                    this.cache.put_buffer(ms_buff);
                    this.cache.put_buffer(err_buff);
                    return false;
                }
                break;
            }
            nmodels = kernel.run(subset0, subset1, M, model_points);
            if (nmodels <= 0)
                continue;
            numinliers = this.find_inliers(kernel, M, from, to, count, params.thresh, err, curr_mask.data);
            if (numinliers > Math.max(inliers_max, model_points - 1)) {
                M.copy_to(model);
                inliers_max = numinliers;
                if (mask)
                    curr_mask.copy_to(mask);
                niters = params.update_iters((count - numinliers) / count, niters);
                result = true;
            }
        }
        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);
        return result;
    }
    lmeds(params, kernel, from, to, count, model, mask, max_iters) {
        if (typeof max_iters === "undefined") {
            max_iters = 1000;
        }
        if (count < params.size)
            return false;
        const model_points = params.size;
        let niters = max_iters, iter = 0;
        let result = false;
        const _math = new jsfeatNext.math();
        const subset0 = [];
        const subset1 = [];
        let found = false;
        const mc = model.cols, mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;
        const m_buff = this.cache.get_buffer((mc * mr) << 3);
        const ms_buff = this.cache.get_buffer(count);
        const err_buff = this.cache.get_buffer(count << 2);
        const M = new matrix_t(mc, mr, dt, m_buff.data);
        const curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t, ms_buff.data);
        let numinliers = 0;
        let nmodels = 0;
        const err = err_buff.f32;
        let min_median = 1000000000.0, sigma = 0.0, median = 0.0;
        params.eps = 0.45;
        niters = params.update_iters(params.eps, niters);
        if (count == model_points) {
            if (kernel.run(from, to, M, count) <= 0) {
                this.cache.put_buffer(m_buff);
                this.cache.put_buffer(ms_buff);
                this.cache.put_buffer(err_buff);
                return false;
            }
            M.copy_to(model);
            if (mask) {
                while (--count >= 0) {
                    mask.data[count] = 1;
                }
            }
            this.cache.put_buffer(m_buff);
            this.cache.put_buffer(ms_buff);
            this.cache.put_buffer(err_buff);
            return true;
        }
        for (; iter < niters; ++iter) {
            found = this.get_subset(kernel, from, to, model_points, count, subset0, subset1);
            if (!found) {
                if (iter == 0) {
                    this.cache.put_buffer(m_buff);
                    this.cache.put_buffer(ms_buff);
                    this.cache.put_buffer(err_buff);
                    return false;
                }
                break;
            }
            nmodels = kernel.run(subset0, subset1, M, model_points);
            if (nmodels <= 0)
                continue;
            kernel.error(from, to, M, err, count);
            median = _math.median(err, 0, count - 1);
            if (median < min_median) {
                min_median = median;
                M.copy_to(model);
                result = true;
            }
        }
        if (result) {
            sigma = 2.5 * 1.4826 * (1 + 5.0 / (count - model_points)) * Math.sqrt(min_median);
            sigma = Math.max(sigma, 0.001);
            numinliers = this.find_inliers(kernel, model, from, to, count, sigma, err, curr_mask.data);
            if (mask)
                curr_mask.copy_to(mask);
            result = numinliers >= model_points;
        }
        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);
        return result;
    }
};
jsfeatNext.ransac_params_t = ransac_params_t;
jsfeatNext.affine2d = affine2d;
jsfeatNext.homography2d = homography2d;
jsfeatNext.optical_flow_lk = class optical_flow_lk extends jsfeatNext {
    scharr_deriv;
    constructor() {
        super();
        const _imgproc = new jsfeatNext.imgproc();
        this.scharr_deriv = _imgproc.scharr_derivatives;
    }
    track(prev_pyr, curr_pyr, prev_xy, curr_xy, count, win_size, max_iter, status, eps, min_eigen_threshold) {
        if (typeof max_iter === "undefined") {
            max_iter = 30;
        }
        if (typeof status === "undefined") {
            status = new Uint8Array(count);
        }
        if (typeof eps === "undefined") {
            eps = 0.01;
        }
        if (typeof min_eigen_threshold === "undefined") {
            min_eigen_threshold = 0.0001;
        }
        const half_win = (win_size - 1) * 0.5;
        const win_area = (win_size * win_size) | 0;
        const win_area2 = win_area << 1;
        const prev_imgs = prev_pyr.data, next_imgs = curr_pyr.data;
        let img_prev = prev_imgs[0].data, img_next = next_imgs[0].data;
        let w0 = prev_imgs[0].cols, h0 = prev_imgs[0].rows, lw = 0, lh = 0;
        const iwin_node = this.cache.get_buffer(win_area << 2);
        const deriv_iwin_node = this.cache.get_buffer(win_area2 << 2);
        const deriv_lev_node = this.cache.get_buffer((h0 * (w0 << 1)) << 2);
        const deriv_m = new matrix_t(w0, h0, JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
        const iwin_buf = iwin_node.i32;
        const deriv_iwin = deriv_iwin_node.i32;
        const deriv_lev = deriv_lev_node.i32;
        let dstep = 0, src = 0, dsrc = 0, iptr = 0, diptr = 0, jptr = 0;
        let lev_sc = 0.0, prev_x = 0.0, prev_y = 0.0, next_x = 0.0, next_y = 0.0;
        let prev_delta_x = 0.0, prev_delta_y = 0.0, delta_x = 0.0, delta_y = 0.0;
        let iprev_x = 0, iprev_y = 0, inext_x = 0, inext_y = 0;
        let i = 0, j = 0, x = 0, y = 0, level = 0, ptid = 0, iter = 0;
        let brd_tl = 0, brd_r = 0, brd_b = 0;
        let a = 0.0, b = 0.0, b1 = 0.0, b2 = 0.0;
        const W_BITS14 = 14;
        const W_BITS4 = 14;
        const W_BITS1m5 = W_BITS4 - 5;
        const W_BITS1m51 = 1 << (W_BITS1m5 - 1);
        const W_BITS14_ = 1 << W_BITS14;
        const W_BITS41 = 1 << (W_BITS4 - 1);
        const FLT_SCALE = 1.0 / (1 << 20);
        let iw00 = 0, iw01 = 0, iw10 = 0, iw11 = 0, ival = 0, ixval = 0, iyval = 0;
        let A11 = 0.0, A12 = 0.0, A22 = 0.0, D = 0.0, min_eig = 0.0;
        const FLT_EPSILON = 0.00000011920929;
        eps *= eps;
        for (; i < count; ++i) {
            status[i] = 1;
        }
        const max_level = (prev_pyr.levels - 1) | 0;
        level = max_level;
        for (; level >= 0; --level) {
            lev_sc = 1.0 / (1 << level);
            lw = w0 >> level;
            lh = h0 >> level;
            dstep = lw << 1;
            img_prev = prev_imgs[level].data;
            img_next = next_imgs[level].data;
            brd_r = (lw - win_size) | 0;
            brd_b = (lh - win_size) | 0;
            this.scharr_deriv(prev_imgs[level], deriv_m);
            for (ptid = 0; ptid < count; ++ptid) {
                i = ptid << 1;
                j = i + 1;
                prev_x = prev_xy[i] * lev_sc;
                prev_y = prev_xy[j] * lev_sc;
                if (level == max_level) {
                    next_x = prev_x;
                    next_y = prev_y;
                }
                else {
                    next_x = curr_xy[i] * 2.0;
                    next_y = curr_xy[j] * 2.0;
                }
                curr_xy[i] = next_x;
                curr_xy[j] = next_y;
                prev_x -= half_win;
                prev_y -= half_win;
                iprev_x = prev_x | 0;
                iprev_y = prev_y | 0;
                x = (iprev_x <= brd_tl || iprev_x >= brd_r || iprev_y <= brd_tl || iprev_y >= brd_b);
                if (x != 0) {
                    if (level == 0) {
                        status[ptid] = 0;
                    }
                    continue;
                }
                a = prev_x - iprev_x;
                b = prev_y - iprev_y;
                iw00 = ((1.0 - a) * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                iw01 = (a * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                iw10 = ((1.0 - a) * b * W_BITS14_ + 0.5) | 0;
                iw11 = W_BITS14_ - iw00 - iw01 - iw10;
                (A11 = 0.0), (A12 = 0.0), (A22 = 0.0);
                for (y = 0; y < win_size; ++y) {
                    src = ((y + iprev_y) * lw + iprev_x) | 0;
                    dsrc = src << 1;
                    iptr = (y * win_size) | 0;
                    diptr = iptr << 1;
                    for (x = 0; x < win_size; ++x, ++src, ++iptr, dsrc += 2) {
                        ival =
                            img_prev[src] * iw00 +
                                img_prev[src + 1] * iw01 +
                                img_prev[src + lw] * iw10 +
                                img_prev[src + lw + 1] * iw11;
                        ival = (ival + W_BITS1m51) >> W_BITS1m5;
                        ixval =
                            deriv_lev[dsrc] * iw00 +
                                deriv_lev[dsrc + 2] * iw01 +
                                deriv_lev[dsrc + dstep] * iw10 +
                                deriv_lev[dsrc + dstep + 2] * iw11;
                        ixval = (ixval + W_BITS41) >> W_BITS4;
                        iyval =
                            deriv_lev[dsrc + 1] * iw00 +
                                deriv_lev[dsrc + 3] * iw01 +
                                deriv_lev[dsrc + dstep + 1] * iw10 +
                                deriv_lev[dsrc + dstep + 3] * iw11;
                        iyval = (iyval + W_BITS41) >> W_BITS4;
                        iwin_buf[iptr] = ival;
                        deriv_iwin[diptr++] = ixval;
                        deriv_iwin[diptr++] = iyval;
                        A11 += ixval * ixval;
                        A12 += ixval * iyval;
                        A22 += iyval * iyval;
                    }
                }
                A11 *= FLT_SCALE;
                A12 *= FLT_SCALE;
                A22 *= FLT_SCALE;
                D = A11 * A22 - A12 * A12;
                min_eig = (A22 + A11 - Math.sqrt((A11 - A22) * (A11 - A22) + 4.0 * A12 * A12)) / win_area2;
                if (min_eig < min_eigen_threshold || D < FLT_EPSILON) {
                    if (level == 0) {
                        status[ptid] = 0;
                    }
                    continue;
                }
                D = 1.0 / D;
                next_x -= half_win;
                next_y -= half_win;
                prev_delta_x = 0.0;
                prev_delta_y = 0.0;
                for (iter = 0; iter < max_iter; ++iter) {
                    inext_x = next_x | 0;
                    inext_y = next_y | 0;
                    x = (inext_x <= brd_tl || inext_x >= brd_r || inext_y <= brd_tl || inext_y >= brd_b);
                    if (x != 0) {
                        if (level == 0) {
                            status[ptid] = 0;
                        }
                        break;
                    }
                    a = next_x - inext_x;
                    b = next_y - inext_y;
                    iw00 = ((1.0 - a) * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                    iw01 = (a * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                    iw10 = ((1.0 - a) * b * W_BITS14_ + 0.5) | 0;
                    iw11 = W_BITS14_ - iw00 - iw01 - iw10;
                    (b1 = 0.0), (b2 = 0.0);
                    for (y = 0; y < win_size; ++y) {
                        jptr = ((y + inext_y) * lw + inext_x) | 0;
                        iptr = (y * win_size) | 0;
                        diptr = iptr << 1;
                        for (x = 0; x < win_size; ++x, ++jptr, ++iptr) {
                            ival =
                                img_next[jptr] * iw00 +
                                    img_next[jptr + 1] * iw01 +
                                    img_next[jptr + lw] * iw10 +
                                    img_next[jptr + lw + 1] * iw11;
                            ival = (ival + W_BITS1m51) >> W_BITS1m5;
                            ival = ival - iwin_buf[iptr];
                            b1 += ival * deriv_iwin[diptr++];
                            b2 += ival * deriv_iwin[diptr++];
                        }
                    }
                    b1 *= FLT_SCALE;
                    b2 *= FLT_SCALE;
                    delta_x = (A12 * b2 - A22 * b1) * D;
                    delta_y = (A12 * b1 - A11 * b2) * D;
                    next_x += delta_x;
                    next_y += delta_y;
                    curr_xy[i] = next_x + half_win;
                    curr_xy[j] = next_y + half_win;
                    if (delta_x * delta_x + delta_y * delta_y <= eps) {
                        break;
                    }
                    if (iter > 0 &&
                        Math.abs(delta_x + prev_delta_x) < 0.01 &&
                        Math.abs(delta_y + prev_delta_y) < 0.01) {
                        curr_xy[i] -= delta_x * 0.5;
                        curr_xy[j] -= delta_y * 0.5;
                        break;
                    }
                    prev_delta_x = delta_x;
                    prev_delta_y = delta_y;
                }
            }
        }
        this.cache.put_buffer(iwin_node);
        this.cache.put_buffer(deriv_iwin_node);
        this.cache.put_buffer(deriv_lev_node);
    }
};
//# sourceMappingURL=jsfeatNext.js.map