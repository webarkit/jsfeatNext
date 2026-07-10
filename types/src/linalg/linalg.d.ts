import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { default as matmath } from '../matmath/matmath';
/**
 * Dense linear-algebra solvers built on Jacobi rotations: LU and Cholesky
 * linear-system solvers, singular value decomposition (and SVD-based solve /
 * pseudo-inverse) and symmetric eigen-decomposition. Mirrors `jsfeat.linalg`
 * from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class linalg extends jsfeatNext {
    /** Matrix-arithmetic helper used by the SVD-based routines. */
    matmath: matmath;
    constructor();
    /**
     * Cyclic Jacobi eigen-decomposition of a symmetric `n`×`n` matrix
     * (internal kernel of {@link eigenVV}). On return `W` holds the
     * eigenvalues in descending order and `V` (when given) the corresponding
     * eigenvectors as rows. `A` is destroyed in the process.
     *
     * @param A     Symmetric input matrix data (mutated).
     * @param astep Row stride of `A`.
     * @param W     Output eigenvalues (length `n`).
     * @param V     Output eigenvector rows, or null to skip.
     * @param vstep Row stride of `V`.
     * @param n     Matrix dimension.
     */
    JacobiImpl(A: Int32Array | Float32Array | Float64Array, astep: number, W: Int32Array | Float32Array | Float64Array, V: Int32Array | Float32Array | Float64Array, vstep: number, n: number): void;
    /**
     * One-sided Jacobi SVD (internal kernel of {@link svd_decompose} and
     * friends). Operates on `At` (the input stored transposed) in place,
     * accumulating right singular vectors into `Vt` when given; singular
     * values come out in `W` in descending order, with sign correction
     * applied to keep them non-negative.
     *
     * @param At    Input matrix data, transposed (mutated into U·diag(W)).
     * @param astep Row stride of `At`.
     * @param _W    Output singular values.
     * @param Vt    Output right singular vectors (transposed), or null.
     * @param vstep Row stride of `Vt`.
     * @param m     Rows of the original matrix. @param n Columns.
     * @param n1    Number of U columns to normalize (m, or 0 to skip U).
     */
    JacobiSVDImpl(At: Int32Array | Float32Array | Float64Array, astep: number, _W: Int32Array | Float32Array | Float64Array, Vt: Int32Array | Float32Array | Float64Array, vstep: number, m: number, n: number, n1: number): void;
    /**
     * Solves the square linear system `A·x = B` in place by Gaussian
     * elimination with partial pivoting. `A` is destroyed and `B` is
     * overwritten with the solution `x`.
     *
     * @param A Square coefficient matrix (mutated).
     * @param B Right-hand side (n×1); receives the solution.
     * @returns 1 on success, 0 when `A` is singular.
     */
    lu_solve(A: matrix_t, B: matrix_t): number;
    /**
     * Solves `A·x = B` in place for a symmetric positive-definite `A` via
     * Cholesky-style LDL decomposition (no pivoting — faster than
     * {@link lu_solve} but requires SPD input). `A` is destroyed and `B` is
     * overwritten with the solution.
     *
     * @param A SPD coefficient matrix (mutated).
     * @param B Right-hand side (n×1); receives the solution.
     * @returns 1 (the decomposition does not detect failure).
     */
    cholesky_solve(A: matrix_t, B: matrix_t): number;
    /**
     * Singular value decomposition `A = U · diag(W) · Vᵀ` via one-sided
     * Jacobi rotations. Singular values arrive in descending order.
     *
     * @param A       Input m×n matrix (not modified).
     * @param W       Output singular values (min(m,n)×1).
     * @param U       Output left singular vectors (m×m), or null to skip.
     * @param V       Output right singular vectors (n×n), or null to skip.
     * @param options Bitmask of `SVD_U_T` / `SVD_V_T` to receive U and/or V
     *                already transposed (avoids an extra transpose).
     */
    svd_decompose(A: any, W: matrix_t, U: matrix_t, V: matrix_t, options: number): void;
    /**
     * Solves `A·x = B` in the least-squares sense through the SVD
     * pseudo-inverse: `x = V · diag(1/w) · Uᵀ · B`, with tiny singular
     * values zeroed for stability. Works for rectangular / rank-deficient A.
     *
     * @param A Input m×n matrix (not modified).
     * @param X Output solution vector (n×1).
     * @param B Right-hand side (m×1).
     */
    svd_solve(A: matrix_t, X: matrix_t, B: matrix_t): void;
    /**
     * Moore–Penrose pseudo-inverse via SVD: `Ai = V · diag(1/w) · Uᵀ`,
     * with tiny singular values zeroed. Valid for any matrix shape/rank.
     *
     * @param Ai Output pseudo-inverse (n×m).
     * @param A  Input m×n matrix (not modified).
     */
    svd_invert(Ai: matrix_t, A: matrix_t): void;
    /**
     * Eigen-decomposition of a symmetric matrix by cyclic Jacobi rotations.
     * Eigenvalues come out in descending order; eigenvectors are the rows of
     * `vects`. Used by `homography2d.run` to solve the DLT system.
     *
     * @param A     Symmetric input matrix (not modified; copied internally).
     * @param vects Output eigenvector rows (n×n), or null to skip.
     * @param vals  Output eigenvalues (n×1), optional.
     */
    eigenVV(A: matrix_t, vects: matrix_t, vals?: matrix_t): void;
}
