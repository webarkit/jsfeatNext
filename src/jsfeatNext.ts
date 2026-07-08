import jsfeatNext from "./core/core";
import { cache } from "./cache/cache";
import { imgproc } from "./imgproc/imgproc";
import { _resample, _resample_u8 } from "./imgproc/resample";
import { _convol, _convol_u8 } from "./imgproc/convol";
import { linalg } from "./linalg/linalg";
import { swap, hypot } from "./linalg/linalg_base";
import { fast_corners } from "./fast_corners/fast_corners";
import { _cmp_score_16 } from "./fast_corners/fast_private";
import { math } from "./math/math";
import matmath from "./matmath/matmath";
import { matrix_t } from "./matrix_t/matrix_t";
import { pyramid_t } from "./pyramid_t/pyramid_t";
import { point_t } from "./point_t/point_t";
import { transform } from "./transform/transform";
import { keypoint_t } from "./keypoint_t/keypoint_t";
import { orb } from "./orb/orb";
import { bit_pattern_31 } from "./orb/bit_pattern_31";
import { rectify_patch } from "./orb/rectify_patch";
import { yape } from "./yape/yape";
import { compute_laplacian, hessian_min_eigen_value } from "./yape06/yape06_utils";
import { yape06 } from "./yape06/yape06";
import { ransac_params_t } from "./motion_estimator/ransac_params_t";
import { motion_estimator } from "./motion_estimator/motion_estimator";
import { optical_flow_lk } from "./optical_flow_lk/optical_flow_lk";
import { JSFEAT_CONSTANTS } from "./constants/constants";

// The base class (constants, cache, data-type helpers, static module slots)
// lives in src/core/core.ts since issue #47; this file is on its
// way to becoming a thin aggregator that only attaches the modules.
export default jsfeatNext;

class motion_model extends jsfeatNext {
    public T0: matrix_t;
    public T1: matrix_t;
    public AtA: matrix_t;
    public AtB: matrix_t;

    constructor() {
        super();
        this.T0 = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.T1 = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.AtA = new matrix_t(6, 6, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.AtB = new matrix_t(6, 1, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
    }

    sqr(x: number): number {
        return x * x;
    }

    // does isotropic normalization
    iso_normalize_points(from: point_t[], to: point_t[], T0: number[], T1: number[], count: number): void {
        let i = 0;
        let cx0 = 0.0,
            cy0 = 0.0,
            d0 = 0.0,
            s0 = 0.0;
        let cx1 = 0.0,
            cy1 = 0.0,
            d1 = 0.0,
            s1 = 0.0;
        let dx = 0.0,
            dy = 0.0;

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

    have_collinear_points(points: point_t[], count: number): boolean {
        let j = 0,
            k = 0,
            i = (count - 1) | 0;
        let dx1 = 0.0,
            dy1 = 0.0,
            dx2 = 0.0,
            dy2 = 0.0;

        // check that the i-th selected point does not belong
        // to a line connecting some previously selected points
        for (; j < i; ++j) {
            dx1 = points[j].x - points[i].x;
            dy1 = points[j].y - points[i].y;
            for (k = 0; k < j; ++k) {
                dx2 = points[k].x - points[i].x;
                dy2 = points[k].y - points[i].y;
                if (
                    Math.abs(dx2 * dy1 - dy2 * dx1) <=
                    JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2))
                )
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

    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number {
        let i = 0,
            j = 0;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;
        const md = model.data,
            t0d = this.T0.data,
            t1d = this.T1.data;
        let pt0,
            pt1,
            px = 0.0,
            py = 0.0;
        const _matmath = new matmath();
        const _linalg = new jsfeatNext.linalg();

        this.iso_normalize_points(from, to, t0d, t1d, count);

        const a_buff = this.cache.get_buffer((2 * count * 6) << 3);
        const b_buff = this.cache.get_buffer((2 * count) << 3);

        const a_mt = new matrix_t(6, 2 * count, dt, a_buff.data);
        const b_mt = new matrix_t(1, 2 * count, dt, b_buff.data);
        const ad = a_mt.data,
            bd = b_mt.data;

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
        (md[6] = 0.0), (md[7] = 0.0), (md[8] = 1.0); // fill last row

        // denormalize
        _matmath.invert_3x3(this.T1, this.T1);
        _matmath.multiply_3x3(model, this.T1, model);
        _matmath.multiply_3x3(model, model, this.T0);

        // free buffer
        this.cache.put_buffer(a_buff);
        this.cache.put_buffer(b_buff);

        return 1;
    }

    // Per-point reprojection error for the affine model. Ported from original
    // jsfeat's affine2d; jsfeatNext was missing it, which made RANSAC/LMEDS
    // with an affine2d kernel throw. See issue #51.
    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void {
        let i = 0;
        let pt0, pt1;
        const m = model.data;

        for (; i < count; ++i) {
            pt0 = from[i];
            pt1 = to[i];

            err[i] =
                this.sqr(pt1.x - m[0] * pt0.x - m[1] * pt0.y - m[2]) +
                this.sqr(pt1.y - m[3] * pt0.x - m[4] * pt0.y - m[5]);
        }
    }

    check_subset(from: point_t[], to: point_t[], count: number): boolean {
        return true; // all good
    }
}

class homography2d extends motion_model {
    public mLtL: matrix_t;
    public Evec: matrix_t;

    constructor() {
        super();
        this.mLtL = new matrix_t(9, 9, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.Evec = new matrix_t(9, 9, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
    }

    run(from: point_t[], to: point_t[], model: matrix_t, count: number): number {
        let i = 0,
            j = 0;
        const md = model.data,
            t0d = this.T0.data,
            t1d = this.T1.data;
        const LtL = this.mLtL.data,
            evd = this.Evec.data;
        let x = 0.0,
            y = 0.0,
            X = 0.0,
            Y = 0.0;
        const _linalg = new jsfeatNext.linalg();
        const _matmath = new matmath();

        // norm
        let smx = 0.0,
            smy = 0.0,
            cmx = 0.0,
            cmy = 0.0,
            sMx = 0.0,
            sMy = 0.0,
            cMx = 0.0,
            cMy = 0.0;

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

        if (
            Math.abs(smx) < JSFEAT_CONSTANTS.EPSILON ||
            Math.abs(smy) < JSFEAT_CONSTANTS.EPSILON ||
            Math.abs(sMx) < JSFEAT_CONSTANTS.EPSILON ||
            Math.abs(sMy) < JSFEAT_CONSTANTS.EPSILON
        )
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
        //

        // construct system
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
        //

        // symmetry
        for (i = 0; i < 9; ++i) {
            for (j = 0; j < i; ++j) LtL[i * 9 + j] = LtL[j * 9 + i];
        }

        _linalg.eigenVV(this.mLtL, this.Evec);

        (md[0] = evd[72]), (md[1] = evd[73]), (md[2] = evd[74]);
        (md[3] = evd[75]), (md[4] = evd[76]), (md[5] = evd[77]);
        (md[6] = evd[78]), (md[7] = evd[79]), (md[8] = evd[80]);

        // denormalize
        _matmath.multiply_3x3(model, this.T1, model);
        _matmath.multiply_3x3(model, model, this.T0);

        // set bottom right to 1.0
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

    error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void {
        let i = 0;
        let pt0,
            pt1,
            ww = 0.0,
            dx = 0.0,
            dy = 0.0;
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

    check_subset(from: point_t[], to: point_t[], count: number): boolean {
        // seems to reject good subsets actually
        //if( have_collinear_points(from, count) || have_collinear_points(to, count) ) {
        //return false;
        //}
        const _matmath = new matmath();
        if (count == 4) {
            let negative = 0;

            const fp0 = from[0],
                fp1 = from[1],
                fp2 = from[2],
                fp3 = from[3];
            const tp0 = to[0],
                tp1 = to[1],
                tp2 = to[2],
                tp3 = to[3];

            // set1
            let A11 = fp0.x,
                A12 = fp0.y,
                A13 = 1.0;
            let A21 = fp1.x,
                A22 = fp1.y,
                A23 = 1.0;
            let A31 = fp2.x,
                A32 = fp2.y,
                A33 = 1.0;

            let B11 = tp0.x,
                B12 = tp0.y,
                B13 = 1.0;
            let B21 = tp1.x,
                B22 = tp1.y,
                B23 = 1.0;
            let B31 = tp2.x,
                B32 = tp2.y,
                B33 = 1.0;

            let detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            let detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);

            if (detA * detB < 0) negative++;

            // set2
            (A11 = fp1.x), (A12 = fp1.y);
            (A21 = fp2.x), (A22 = fp2.y);
            (A31 = fp3.x), (A32 = fp3.y);

            (B11 = tp1.x), (B12 = tp1.y);
            (B21 = tp2.x), (B22 = tp2.y);
            (B31 = tp3.x), (B32 = tp3.y);

            detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);

            if (detA * detB < 0) negative++;

            // set3
            (A11 = fp0.x), (A12 = fp0.y);
            (A21 = fp2.x), (A22 = fp2.y);
            (A31 = fp3.x), (A32 = fp3.y);

            (B11 = tp0.x), (B12 = tp0.y);
            (B21 = tp2.x), (B22 = tp2.y);
            (B31 = tp3.x), (B32 = tp3.y);

            detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);

            if (detA * detB < 0) negative++;

            // set4
            (A11 = fp0.x), (A12 = fp0.y);
            (A21 = fp1.x), (A22 = fp1.y);
            (A31 = fp3.x), (A32 = fp3.y);

            (B11 = tp0.x), (B12 = tp0.y);
            (B21 = tp1.x), (B22 = tp1.y);
            (B31 = tp3.x), (B32 = tp3.y);

            detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
            detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);

            if (detA * detB < 0) negative++;

            if (negative != 0 && negative != 4) {
                return false;
            }
        }
        return true; // all good
    }
}

jsfeatNext.cache = cache;

jsfeatNext.pyramid_t = pyramid_t;

jsfeatNext.transform = transform;

jsfeatNext.matrix_t = matrix_t;

jsfeatNext.keypoint_t = keypoint_t;

jsfeatNext.fast_corners = fast_corners;

jsfeatNext.imgproc = imgproc;

jsfeatNext.math = math;

jsfeatNext.matmath = matmath;

jsfeatNext.linalg = linalg;

jsfeatNext.orb = orb;

jsfeatNext.yape = yape;

jsfeatNext.yape06 = yape06;

jsfeatNext.motion_estimator = class motion_estimator extends jsfeatNext {
    constructor() {
        super();
    }

    get_subset(
        kernel: homography2d,
        from: point_t[],
        to: point_t[],
        need_cnt: number,
        max_cnt: number,
        from_sub: point_t[],
        to_sub: point_t[]
    ): boolean {
        const max_try = 1000;
        const indices = [];
        let i = 0,
            j = 0,
            ssiter = 0,
            idx_i = 0,
            ok = false;
        for (; ssiter < max_try; ++ssiter) {
            i = 0;
            for (; i < need_cnt && ssiter < max_try; ) {
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

    find_inliers(
        kernel: homography2d,
        model: matrix_t,
        from: point_t[],
        to: point_t[],
        count: number,
        thresh: number,
        err: Int32Array | Float32Array,
        mask: number[]
    ): number {
        let numinliers: number = 0,
            i = 0,
            f = 0;
        const t = thresh * thresh;

        kernel.error(from, to, model, err, count);

        for (; i < count; ++i) {
            f = <number>(<unknown>(err[i] <= t));
            mask[i] = f;
            numinliers += f;
        }
        return numinliers;
    }

    ransac(
        params: ransac_params_t,
        kernel: any,
        from: point_t[],
        to: point_t[],
        count: number,
        model: matrix_t,
        mask: matrix_t,
        max_iters: number
    ): boolean {
        if (typeof max_iters === "undefined") {
            max_iters = 1000;
        }

        if (count < params.size) return false;

        const model_points = params.size;
        let niters = max_iters,
            iter = 0;
        let result: boolean = false;

        const subset0: any = [];
        const subset1: any = [];
        let found = false;

        const mc = model.cols,
            mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;

        const m_buff = this.cache.get_buffer((mc * mr) << 3);
        const ms_buff = this.cache.get_buffer(count);
        const err_buff = this.cache.get_buffer(count << 2);
        const M = new matrix_t(mc, mr, dt, m_buff.data);
        const curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);

        let inliers_max = -1,
            numinliers = 0;
        let nmodels = 0;

        const err = err_buff.f32;

        // special case
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
            // generate subset
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
            if (nmodels <= 0) continue;

            // TODO handle multimodel output

            numinliers = this.find_inliers(kernel, M, from, to, count, params.thresh, err, curr_mask.data);

            if (numinliers > Math.max(inliers_max, model_points - 1)) {
                M.copy_to(model);
                inliers_max = numinliers;
                if (mask) curr_mask.copy_to(mask);
                niters = params.update_iters((count - numinliers) / count, niters);
                result = true;
            }
        }

        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);

        return result;
    }

    lmeds(
        params: ransac_params_t,
        kernel: any,
        from: point_t[],
        to: point_t[],
        count: number,
        model: matrix_t,
        mask: matrix_t,
        max_iters: number
    ): boolean {
        if (typeof max_iters === "undefined") {
            max_iters = 1000;
        }

        if (count < params.size) return false;

        const model_points = params.size;
        let niters = max_iters,
            iter = 0;
        let result: boolean = false;
        const _math = new jsfeatNext.math();

        const subset0: any = [];
        const subset1: any = [];
        let found = false;

        const mc = model.cols,
            mr = model.rows;
        const dt = model.type | JSFEAT_CONSTANTS.C1_t;

        const m_buff = this.cache.get_buffer((mc * mr) << 3);
        const ms_buff = this.cache.get_buffer(count);
        const err_buff = this.cache.get_buffer(count << 2);
        const M = new matrix_t(mc, mr, dt, m_buff.data);
        const curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t, ms_buff.data);

        let numinliers = 0;
        let nmodels = 0;

        const err = err_buff.f32;
        let min_median = 1000000000.0,
            sigma = 0.0,
            median = 0.0;

        params.eps = 0.45;
        niters = params.update_iters(params.eps, niters);

        // special case
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
            // generate subset
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
            if (nmodels <= 0) continue;

            // TODO handle multimodel output

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
            if (mask) curr_mask.copy_to(mask);

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
    public scharr_deriv: any;

    constructor() {
        super();
        const _imgproc = new jsfeatNext.imgproc();
        this.scharr_deriv = _imgproc.scharr_derivatives;
    }

    track(
        prev_pyr: pyramid_t,
        curr_pyr: pyramid_t,
        prev_xy: Float32Array,
        curr_xy: Float32Array,
        count: number,
        win_size: number,
        max_iter: number,
        status: Uint8Array,
        eps: number,
        min_eigen_threshold: number
    ): void {
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
        const prev_imgs = prev_pyr.data,
            next_imgs = curr_pyr.data;
        let img_prev = prev_imgs[0].data,
            img_next = next_imgs[0].data;
        let w0 = prev_imgs[0].cols,
            h0 = prev_imgs[0].rows,
            lw = 0,
            lh = 0;

        const iwin_node = this.cache.get_buffer(win_area << 2);
        const deriv_iwin_node = this.cache.get_buffer(win_area2 << 2);
        const deriv_lev_node = this.cache.get_buffer((h0 * (w0 << 1)) << 2);

        const deriv_m = new matrix_t(w0, h0, JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);

        const iwin_buf = iwin_node.i32;
        const deriv_iwin = deriv_iwin_node.i32;
        const deriv_lev = deriv_lev_node.i32;

        let dstep = 0,
            src = 0,
            dsrc = 0,
            iptr = 0,
            diptr = 0,
            jptr = 0;
        let lev_sc = 0.0,
            prev_x = 0.0,
            prev_y = 0.0,
            next_x = 0.0,
            next_y = 0.0;
        let prev_delta_x = 0.0,
            prev_delta_y = 0.0,
            delta_x = 0.0,
            delta_y = 0.0;
        let iprev_x = 0,
            iprev_y = 0,
            inext_x = 0,
            inext_y = 0;
        let i = 0,
            j = 0,
            x = 0,
            y = 0,
            level = 0,
            ptid = 0,
            iter = 0;
        let brd_tl = 0,
            brd_r = 0,
            brd_b = 0;
        let a = 0.0,
            b = 0.0,
            b1 = 0.0,
            b2 = 0.0;

        // fixed point math
        const W_BITS14 = 14;
        const W_BITS4 = 14;
        const W_BITS1m5 = W_BITS4 - 5;
        const W_BITS1m51 = 1 << (W_BITS1m5 - 1);
        const W_BITS14_ = 1 << W_BITS14;
        const W_BITS41 = 1 << (W_BITS4 - 1);
        const FLT_SCALE = 1.0 / (1 << 20);
        let iw00 = 0,
            iw01 = 0,
            iw10 = 0,
            iw11 = 0,
            ival = 0,
            ixval = 0,
            iyval = 0;
        let A11 = 0.0,
            A12 = 0.0,
            A22 = 0.0,
            D = 0.0,
            min_eig = 0.0;

        const FLT_EPSILON = 0.00000011920929;
        eps *= eps;

        // reset status
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

            // calculate level derivatives
            this.scharr_deriv(prev_imgs[level], deriv_m);

            // iterate through points
            for (ptid = 0; ptid < count; ++ptid) {
                i = ptid << 1;
                j = i + 1;
                prev_x = prev_xy[i] * lev_sc;
                prev_y = prev_xy[j] * lev_sc;

                if (level == max_level) {
                    next_x = prev_x;
                    next_y = prev_y;
                } else {
                    next_x = curr_xy[i] * 2.0;
                    next_y = curr_xy[j] * 2.0;
                }
                curr_xy[i] = next_x;
                curr_xy[j] = next_y;

                prev_x -= half_win;
                prev_y -= half_win;
                iprev_x = prev_x | 0;
                iprev_y = prev_y | 0;

                // border check
                x = <number>(<unknown>(iprev_x <= brd_tl || iprev_x >= brd_r || iprev_y <= brd_tl || iprev_y >= brd_b));
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

                // extract the patch from the first image, compute covariation matrix of derivatives
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

                    x = <number>(
                        (<unknown>(inext_x <= brd_tl || inext_x >= brd_r || inext_y <= brd_tl || inext_y >= brd_b))
                    );
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

                    if (
                        iter > 0 &&
                        Math.abs(delta_x + prev_delta_x) < 0.01 &&
                        Math.abs(delta_y + prev_delta_y) < 0.01
                    ) {
                        curr_xy[i] -= delta_x * 0.5;
                        curr_xy[j] -= delta_y * 0.5;
                        break;
                    }

                    prev_delta_x = delta_x;
                    prev_delta_y = delta_y;
                }
            } // points loop
        } // levels loop

        this.cache.put_buffer(iwin_node);
        this.cache.put_buffer(deriv_iwin_node);
        this.cache.put_buffer(deriv_lev_node);
    }
};
