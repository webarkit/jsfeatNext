import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";

/**
 * General math utilities: Gaussian-kernel generation, an in-place quicksort
 * and a selection-based median. Mirrors `jsfeat.math` from the original
 * library. (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export class math extends jsfeatNext {
    /** Iterative-quicksort bounds stack (48 nesting levels × lo/hi pairs). */
    private qsort_stack: Int32Array;

    constructor() {
        super();
        this.qsort_stack = new Int32Array(48 * 2);
    }

    /**
     * Fills `kernel` with a normalized 1D Gaussian. For small odd sizes (≤7)
     * with `sigma <= 0` the classic fixed binomial kernels are used;
     * otherwise the kernel is sampled from `exp(-x²/2σ²)` with the OpenCV
     * default `σ = 0.3·((size-1)/2 - 1) + 0.8` when `sigma <= 0`.
     *
     * @param size      Number of taps (kernel length).
     * @param sigma     Gaussian standard deviation; `<= 0` selects the default.
     * @param kernel    Output array of `size` weights.
     * @param data_type `U8_t` scales weights to integers summing to 256;
     *                  any other type yields floats summing to 1.
     */
    get_gaussian_kernel(size: number, sigma: number, kernel: Float32Array | Int32Array, data_type: number): void {
        let i = 0,
            x = 0.0,
            t = 0.0,
            sigma_x = 0.0,
            scale_2x = 0.0;
        let sum = 0.0;
        const kern_node = this.cache.get_buffer(size << 2);
        const _kernel = kern_node.f32; //new Float32Array(size);

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
        } else {
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
            // int based kernel
            sum = 256.0 / sum;
            for (i = 0; i < size; ++i) {
                kernel[i] = (_kernel[i] * sum + 0.5) | 0;
            }
        } else {
            // classic kernel
            sum = 1.0 / sum;
            for (i = 0; i < size; ++i) {
                kernel[i] = _kernel[i] * sum;
            }
        }

        this.cache.put_buffer(kern_node);
    }

    /**
     * Computes the 3×3 perspective transform mapping four source points onto
     * four destination points and writes it into `model`.
     *
     * @deprecated Use `transform.perspective_4point_transform()` instead —
     * this copy exists only for parity with the distributed jsfeat bundle
     * (where it lives under `jsfeat.math`) and logs a deprecation warning.
     *
     * @param model 3×3 destination matrix.
     *
     * The remaining sixteen number arguments are the four `(src, dst)` point
     * pairs, interleaved as `src_x0, src_y0, dst_x0, dst_y0, …` for points 0–3.
     */
    // model is 3x3 matrix_t
    perspective_4point_transform(
        model: matrix_t,
        src_x0: number,
        src_y0: number,
        dst_x0: number,
        dst_y0: number,
        src_x1: number,
        src_y1: number,
        dst_x1: number,
        dst_y1: number,
        src_x2: number,
        src_y2: number,
        dst_x2: number,
        dst_y2: number,
        src_x3: number,
        src_y3: number,
        dst_x3: number,
        dst_y3: number
    ): void {
        console.warn(
            "⚠️⚠️⚠️ This method is deprecated ad will be removed in the next releases, use transform.perspective_4point_transform() instead. ⚠️⚠️⚠️"
        );
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

        // the following code computes R = Hl * inverse Hr
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

    // The current implementation was derived from *BSD system qsort():
    // Copyright (c) 1992, 1993
    // The Regents of the University of California.  All rights reserved.
    /**
     * In-place iterative quicksort of `array[low..high]` (inclusive bounds)
     * using median-of-three pivoting and an insertion sort for tiny spans.
     *
     * @param array Values to sort (mutated in place).
     * @param low   First index of the range.
     * @param high  Last index of the range (inclusive).
     * @param cmp   "Less than" comparator: truthy when `a < b`.
     */
    qsort(array: number[], low: number, high: number, cmp: (a: number, b: number) => number): void {
        const isort_thresh = 7;
        let t, ta, tb, tc;
        let sp = 0,
            left = 0,
            right = 0,
            i = 0,
            n = 0,
            m = 0,
            ptr = 0,
            ptr2 = 0,
            d = 0;
        let left0 = 0,
            left1 = 0,
            right0 = 0,
            right1 = 0,
            pivot = 0,
            a = 0,
            b = 0,
            c = 0,
            swap_cnt = 0;

        const stack = this.qsort_stack;

        if (high - low + 1 <= 1) return;

        stack[0] = low;
        stack[1] = high;

        while (sp >= 0) {
            left = stack[sp << 1];
            right = stack[(sp << 1) + 1];
            sp--;

            for (;;) {
                n = right - left + 1;

                if (n <= isort_thresh) {
                    //insert_sort:
                    for (ptr = left + 1; ptr <= right; ptr++) {
                        for (ptr2 = ptr; ptr2 > left && cmp(array[ptr2], array[ptr2 - 1]); ptr2--) {
                            t = array[ptr2];
                            array[ptr2] = array[ptr2 - 1];
                            array[ptr2 - 1] = t;
                        }
                    }
                    break;
                } else {
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

                        if (left > right) break;

                        t = array[left];
                        array[left] = array[right];
                        array[right] = t;
                        swap_cnt = 1;
                        left++;
                        right--;
                    }

                    if (swap_cnt == 0) {
                        (left = left0), (right = right0);
                        //goto insert_sort;
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
                            } else {
                                ++sp;
                                stack[sp << 1] = right0 - m + 1;
                                stack[(sp << 1) + 1] = right0;
                                (left = left0), (right = left0 + n - 1);
                            }
                        } else {
                            (left = left0), (right = left0 + n - 1);
                        }
                    } else if (m > 1) (left = right0 - m + 1), (right = right0);
                    else break;
                }
            }
        }
    }

    /**
     * Selects the median of `array[low..high]` by Hoare's selection
     * (quickselect). The array is PARTIALLY REORDERED in the process — pass a
     * copy if the original order matters.
     *
     * NB: `motion_estimator.lmeds` calls this with a `Float32Array` cache
     * buffer, so the signature accepts typed arrays as well as `number[]`.
     *
     * @param array Values to select from (mutated).
     * @param low   First index of the range.
     * @param high  Last index of the range (inclusive).
     * @returns The median value of the range.
     */
    median(array: number[] | Int32Array | Float32Array, low: number, high: number): number {
        let w;
        let middle = 0,
            ll = 0,
            hh = 0,
            median = (low + high) >> 1;
        for (;;) {
            if (high <= low) return array[median];
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
                do ++ll;
                while (array[low] > array[ll]);
                do --hh;
                while (array[hh] > array[low]);
                if (hh < ll) break;
                w = array[ll];
                array[ll] = array[hh];
                array[hh] = w;
            }
            w = array[low];
            array[low] = array[hh];
            array[hh] = w;
            if (hh <= median) low = ll;
            else if (hh >= median) high = hh - 1;
        }
        return 0;
    }
}
