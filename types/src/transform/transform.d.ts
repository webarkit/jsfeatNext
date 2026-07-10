import { matrix_t } from '../matrix_t/matrix_t';
/**
 * 2D geometric transform construction and inversion.
 *
 * NOTE (parity): the original jsfeat `transform` module was never included
 * in any distributed jsfeat build, and its functions take RAW ARRAYS —
 * jsfeatNext's methods take {@link matrix_t} instead (same math, different
 * calling convention; see the parity audit, Axis 2).
 */
export declare class transform {
    constructor();
    /**
     * Computes the 3×3 perspective transform (homography) that maps four
     * source points onto four destination points, via the closed-form
     * `R = Hl · Hr⁻¹` construction (both quads are first mapped to the unit
     * square). Writes the 9 coefficients into `model`.
     *
     * @param model 3×3 destination matrix.
     *
     * The remaining sixteen number arguments are the four `(src, dst)` point
     * pairs, interleaved as `src_x0, src_y0, dst_x0, dst_y0, …` for points 0–3.
     */
    perspective_4point_transform(model: matrix_t, src_x0: number, src_y0: number, dst_x0: number, dst_y0: number, src_x1: number, src_y1: number, dst_x1: number, dst_y1: number, src_x2: number, src_y2: number, dst_x2: number, dst_y2: number, src_x3: number, src_y3: number, dst_x3: number, dst_y3: number): void;
    /**
     * Inverts a 2×3 affine transform in closed form (via the 2×2 linear
     * part's determinant). Only the first 6 entries of `src`/`dst` are used.
     *
     * @param src Source affine transform (2×3 coefficients).
     * @param dst Destination for the inverse (2×3 coefficients).
     */
    invert_affine_transform(src: matrix_t, dst: matrix_t): void;
    /**
     * Inverts a 3×3 perspective transform (homography) by the
     * adjugate/determinant closed form. The input must be non-singular.
     *
     * @param src Source 3×3 transform.
     * @param dst Destination for the inverse (3×3).
     */
    invert_perspective_transform(src: matrix_t, dst: matrix_t): void;
}
