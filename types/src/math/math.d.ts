import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
/**
 * General math utilities: Gaussian-kernel generation, an in-place quicksort
 * and a selection-based median. Mirrors `jsfeat.math` from the original
 * library. (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class math extends jsfeatNext {
    /** Iterative-quicksort bounds stack (48 nesting levels × lo/hi pairs). */
    private qsort_stack;
    constructor();
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
    get_gaussian_kernel(size: number, sigma: number, kernel: Float32Array | Int32Array, data_type: number): void;
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
    perspective_4point_transform(model: matrix_t, src_x0: number, src_y0: number, dst_x0: number, dst_y0: number, src_x1: number, src_y1: number, dst_x1: number, dst_y1: number, src_x2: number, src_y2: number, dst_x2: number, dst_y2: number, src_x3: number, src_y3: number, dst_x3: number, dst_y3: number): void;
    /**
     * In-place iterative quicksort of `array[low..high]` (inclusive bounds)
     * using median-of-three pivoting and an insertion sort for tiny spans.
     *
     * @param array Values to sort (mutated in place).
     * @param low   First index of the range.
     * @param high  Last index of the range (inclusive).
     * @param cmp   "Less than" comparator: truthy when `a < b`.
     */
    qsort(array: number[], low: number, high: number, cmp: (a: number, b: number) => number): void;
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
    median(array: number[] | Int32Array | Float32Array, low: number, high: number): number;
}
