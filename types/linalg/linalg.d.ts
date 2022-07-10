export default class linalg {
    cache: cache;
    matmath: matmath;
    JacobiImpl(A: any, astep: any, W: any, V: any, vstep: any, n: any): void;
    JacobiSVDImpl(At: any, astep: any, _W: any, Vt: any, vstep: any, m: any, n: any, n1: any): void;
    lu_solve(A: any, B: any): 1 | 0;
    cholesky_solve(A: any, B: any): 1 | 0;
    svd_decompose(A: any, W: any, U: any, V: any, options: any): void;
    svd_solve(A: any, X: any, B: any): void;
    svd_invert(Ai: any, A: any): void;
    eigenVV(A: any, vects: any, vals: any): void;
}
import cache from "../cache/cache.js";
import matmath from "../matmath/matmath.js";
//# sourceMappingURL=linalg.d.ts.map