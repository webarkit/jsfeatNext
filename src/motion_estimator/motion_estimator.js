import matrix_t from '../matrix_t/matrix_t.js'
import cache from '../cache/cache.js'
import math from '../math/math.js'
import { JSFEAT_CONSTANTS } from '../constants/constants.js'

export default class motion_estimator {
    constructor() {
        this.cache = new cache();
        this.cache.allocate(30, 640 * 4);
    }

    get_subset(kernel, from, to, need_cnt, max_cnt, from_sub, to_sub) {
        var max_try = 1000;
        var indices = [];
        var i = 0, j = 0, ssiter = 0, idx_i = 0, ok = false;
        for (; ssiter < max_try; ++ssiter) {
            i = 0;
            for (; i < need_cnt && ssiter < max_try;) {
                ok = false;
                idx_i = 0;
                while (!ok) {
                    ok = true;
                    idx_i = indices[i] = Math.floor(Math.random() * max_cnt) | 0;
                    for (j = 0; j < i; ++j) {
                        if (idx_i == indices[j]) { ok = false; break; }
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

        return (i == need_cnt && ssiter < max_try);
    }

    find_inliers(kernel, model, from, to, count, thresh, err, mask) {
        var numinliers = 0, i = 0, f = 0;
        var t = thresh * thresh;

        kernel.error(from, to, model, err, count);

        for (; i < count; ++i) {
            f = err[i] <= t;
            mask[i] = f;
            numinliers += f;
        }
        return numinliers;
    }

    ransac(params, kernel, from, to, count, model, mask, max_iters) {
        if (typeof max_iters === "undefined") { max_iters = 1000; }

        if (count < params.size) return false;

        var model_points = params.size;
        var niters = max_iters, iter = 0;
        var result = false;

        var subset0 = [];
        var subset1 = [];
        var found = false;

        var mc = model.cols, mr = model.rows;
        var dt = model.type | JSFEAT_CONSTANTS.C1_t;

        var m_buff = this.cache.get_buffer((mc * mr) << 3);
        var ms_buff = this.cache.get_buffer(count);
        var err_buff = this.cache.get_buffer(count << 2);
        var M = new matrix_t(mc, mr, dt, m_buff.data);
        var curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);

        var inliers_max = -1, numinliers = 0;
        var nmodels = 0;

        var err = err_buff.f32;

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
            if (nmodels <= 0)
                continue;

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

    lmeds(params, kernel, from, to, count, model, mask, max_iters) {
        if (typeof max_iters === "undefined") { max_iters = 1000; }

        if (count < params.size) return false;

        var model_points = params.size;
        var niters = max_iters, iter = 0;
        var result = false;
        var _math = new math();

        var subset0 = [];
        var subset1 = [];
        var found = false;

        var mc = model.cols, mr = model.rows;
        var dt = model.type | JSFEAT_CONSTANTS.C1_t;

        var m_buff = this.cache.get_buffer((mc * mr) << 3);
        var ms_buff = this.cache.get_buffer(count);
        var err_buff = this.cache.get_buffer(count << 2);
        var M = new matrix_t(mc, mr, dt, m_buff.data);
        var curr_mask = new matrix_t(count, 1, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t, ms_buff.data);

        var numinliers = 0;
        var nmodels = 0;

        var err = err_buff.f32;
        var min_median = 1000000000.0, sigma = 0.0, median = 0.0;

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
            if (nmodels <= 0)
                continue;

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
}