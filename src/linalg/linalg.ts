import { matrix_t } from "../matrix_t/matrix_t";
export class linalg {
    JacobiImpl(
        A: Int32Array | Float32Array | Float64Array,
        astep: number,
        W: Int32Array | Float32Array | Float64Array,
        V: Int32Array | Float32Array | Float64Array,
        vstep: number,
        n: number
    ): void {
        throw new Error("Method not implemented.");
    }
    JacobiSVDImpl(
        At: Int32Array | Float32Array | Float64Array,
        astep: number,
        _W: Int32Array | Float32Array | Float64Array,
        Vt: Int32Array | Float32Array | Float64Array,
        vstep: number,
        m: number,
        n: number,
        n1: number
    ): void {
        throw new Error("Method not implemented.");
    }
    lu_solve(A: matrix_t, B: matrix_t): number {
        throw new Error("Method not implemented.");
    }
    cholesky_solve(A: matrix_t, B: matrix_t): number {
        throw new Error("Method not implemented.");
    }
    svd_decompose(A: any, W: matrix_t, U: matrix_t, V: matrix_t, options: number): void {
        throw new Error("Method not implemented.");
    }
    svd_solve(A: matrix_t, X: matrix_t, B: matrix_t): void {
        throw new Error("Method not implemented.");
    }
    svd_invert(Ai: matrix_t, A: matrix_t): void {
        throw new Error("Method not implemented.");
    }
    eigenVV(A: matrix_t, vects: matrix_t, vals?: matrix_t): void {
        throw new Error("Method not implemented.");
    }
}
