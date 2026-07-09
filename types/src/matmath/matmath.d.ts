import { matrix_t } from '../matrix_t/matrix_t';
/**
 * General matrix arithmetic on {@link matrix_t} operands: transpose,
 * several multiplication variants optimized for common shapes, and small
 * fixed-size 3×3 helpers used by the geometric-transform code.
 *
 * Mirrors `jsfeat.matmath` from the original library.
 */
export default class matmath {
    constructor();
    /**
     * Fills `M` with `value` on the main diagonal and zeros elsewhere.
     *
     * @param M     Matrix to overwrite.
     * @param value Diagonal value; defaults to 1.
     */
    identity(M: matrix_t, value: number): void;
    /**
     * Writes the transpose of `A` into `At` (`At = Aᵀ`).
     *
     * @param At Destination (`A.cols` × `A.rows`).
     * @param A  Source matrix.
     */
    transpose(At: matrix_t, A: matrix_t): void;
    /**
     * General matrix product `C = A · B`.
     *
     * @param C Destination (`B.cols` × `A.rows`); must not alias A or B.
     * @param A Left operand. @param B Right operand (`B.rows === A.cols`).
     */
    multiply(C: matrix_t, A: matrix_t, B: matrix_t): void;
    /**
     * Product with transposed right operand: `C = A · Bᵀ`.
     *
     * @param C Destination (`B.rows` × `A.rows`).
     * @param A Left operand. @param B Right operand (`B.cols === A.cols`).
     */
    multiply_ABt(C: matrix_t, A: matrix_t, B: matrix_t): void;
    /**
     * Product with transposed left operand: `C = Aᵀ · B`.
     *
     * @param C Destination (`B.cols` × `A.cols`).
     * @param A Left operand (`A.rows === B.rows`). @param B Right operand.
     */
    multiply_AtB(C: matrix_t, A: matrix_t, B: matrix_t): void;
    /**
     * Symmetric self-product `C = A · Aᵀ`, computing only the upper triangle
     * and mirroring it.
     *
     * @param C Destination (`A.rows` × `A.rows`, symmetric). @param A Operand.
     */
    multiply_AAt(C: matrix_t, A: matrix_t): void;
    /**
     * Symmetric self-product `C = Aᵀ · A` (the normal-equations matrix),
     * computing only the upper triangle and mirroring it.
     *
     * @param C Destination (`A.cols` × `A.cols`, symmetric). @param A Operand.
     */
    multiply_AtA(C: matrix_t, A: matrix_t): void;
    /**
     * Fills a 3×3 matrix with `value` on the diagonal and zeros elsewhere.
     *
     * @param M     3×3 destination. @param value Diagonal value; defaults to 1.
     */
    identity_3x3(M: matrix_t, value: number): void;
    /**
     * Inverts a 3×3 matrix by the adjugate/determinant closed form
     * (no pivoting — the input must be non-singular). Safe to call with
     * `from === to` (in-place inversion).
     *
     * @param from 3×3 source matrix. @param to 3×3 destination.
     */
    invert_3x3(from: matrix_t, to: matrix_t): void;
    /**
     * Fixed-size 3×3 product `C = A · B`, fully unrolled. All operands are
     * read into locals first, so `C` may alias `A` or `B`.
     *
     * @param C 3×3 destination. @param A Left operand. @param B Right operand.
     */
    multiply_3x3(C: matrix_t, A: matrix_t, B: matrix_t): void;
    /**
     * Determinant of a 3×3 matrix by cofactor expansion.
     *
     * @param M 3×3 matrix. @returns `det(M)`.
     */
    mat3x3_determinant(M: matrix_t): number;
    /**
     * Determinant of a 3×3 matrix given as nine scalars (row-major M11…M33).
     * Scalar variant of {@link mat3x3_determinant}, used by the RANSAC
     * degeneracy checks without building a matrix.
     *
     * @returns The determinant value.
     */
    determinant_3x3(M11: number, M12: number, M13: number, M21: number, M22: number, M23: number, M31: number, M32: number, M33: number): number;
}
