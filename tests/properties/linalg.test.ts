import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import { mat, dst, randomSquare, randomSPD, matmulPlain, expectIdentity, rng } from "./helpers";

/**
 * Property/invariant tests for `linalg` (issue #87).
 *
 * Every assertion here is a mathematical truth that holds regardless of the
 * implementation, so unlike `tests/parity/linalg.test.ts` these can catch a
 * defect that jsfeatNext and jsfeat share. #102 is exactly such a defect, and
 * the `svd_invert` invariant below is what pins it.
 *
 * Convention notes established empirically against the library:
 *  - `svd_decompose(A, W, U, V, 0)` returns the natural form, `A = U·diag(W)·Vᵀ`.
 *  - With `SVD_U_T | SVD_V_T` the two factors come back transposed, so the
 *    reconstruction becomes `A = Uᵀ·diag(W)·V`.
 *  - A `matrix_t`'s `data` view can be LONGER than rows*cols (the buffer is
 *    padded to a multiple of 8 bytes), so always slice to the logical size.
 */

const la = jsfeatNext.linalg;

/** Reads the logical `n` entries of a vector matrix_t, ignoring buffer padding. */
function vec(m: { data: ArrayLike<number> }, n: number) {
    return Array.from({ length: n }, (_, i) => m.data[i]);
}

/** `A · x` for a row-major n×n matrix and length-n vector. */
function apply(A: ArrayLike<number>, x: ArrayLike<number>, n: number) {
    const out = new Float64Array(n);
    for (let r = 0; r < n; r++) {
        let s = 0;
        for (let c = 0; c < n; c++) s += A[r * n + c] * x[c];
        out[r] = s;
    }
    return out;
}

describe("linalg invariants", () => {
    describe("lu_solve", () => {
        it("returns a genuine solution: A·x ≈ b", () => {
            const n = 4;
            const A = randomSPD(n, 101);
            const Aorig = Array.from(A.data.subarray(0, n * n)); // lu_solve mutates A
            const b = mat(1, n);
            const rand = rng(102);
            for (let i = 0; i < n; i++) b.data[i] = rand() * 10 - 5;
            const bOrig = vec(b, n);

            const ok = la.lu_solve(A, b); // b is overwritten with x
            expect(ok).toBe(1);

            const residual = apply(Aorig, vec(b, n), n);
            for (let i = 0; i < n; i++) expect(residual[i]).toBeCloseTo(bOrig[i], 3);
        });

        it("solves a hand-checkable 2x2 system exactly", () => {
            // 4x + 7y = 1 ; 2x + 6y = 1  ->  x = -0.1, y = 0.2
            const A = mat(2, 2, [4, 7, 2, 6]);
            const b = mat(1, 2, [1, 1]);
            expect(la.lu_solve(A, b)).toBe(1);
            expect(b.data[0]).toBeCloseTo(-0.1, 4);
            expect(b.data[1]).toBeCloseTo(0.2, 4);
        });

        it("reports failure (0) on a singular matrix instead of inventing an answer", () => {
            const A = mat(3, 3, [1, 2, 3, 2, 4, 6, 1, 1, 1]); // row1 = 2*row0
            const b = mat(1, 3, [1, 2, 3]);
            expect(la.lu_solve(A, b)).toBe(0);
        });
    });

    describe("cholesky_solve", () => {
        it("returns a genuine solution for a symmetric positive-definite system", () => {
            const n = 4;
            const A = randomSPD(n, 111);
            const Aorig = Array.from(A.data.subarray(0, n * n));
            const b = mat(1, n);
            const rand = rng(112);
            for (let i = 0; i < n; i++) b.data[i] = rand() * 10 - 5;
            const bOrig = vec(b, n);

            expect(la.cholesky_solve(A, b)).toBe(1);

            const residual = apply(Aorig, vec(b, n), n);
            for (let i = 0; i < n; i++) expect(residual[i]).toBeCloseTo(bOrig[i], 3);
        });

        it("agrees with lu_solve on the same SPD system", () => {
            const n = 4;
            const A1 = randomSPD(n, 121);
            const A2 = mat(n, n, Array.from(A1.data.subarray(0, n * n)));
            const b1 = mat(1, n, [1, 2, 3, 4]);
            const b2 = mat(1, n, [1, 2, 3, 4]);

            la.cholesky_solve(A1, b1);
            la.lu_solve(A2, b2);

            for (let i = 0; i < n; i++) expect(b1.data[i]).toBeCloseTo(b2.data[i], 3);
        });
    });

    describe("svd_decompose", () => {
        const n = 3;
        const values = [1, 2, 0, 0, 1, 3, 2, 0, 1]; // asymmetric, full rank

        it("reconstructs the input: A = U·diag(W)·Vᵀ (opts = 0)", () => {
            const A = mat(n, n, values);
            const W = dst(1, n);
            const U = dst(n, n);
            const V = dst(n, n);
            la.svd_decompose(A, W, U, V, 0);

            const D = new Float64Array(n * n);
            for (let i = 0; i < n; i++) D[i * n + i] = W.data[i];
            const Vt = new Float64Array(n * n);
            for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) Vt[c * n + r] = V.data[r * n + c];

            const UD = matmulPlain(U.data, D, n, n, n);
            const recon = matmulPlain(UD, Vt, n, n, n);
            for (let i = 0; i < n; i++) expect(recon[i]).toBeCloseTo(values[i], 3);
        });

        it("reconstructs the input: A = Uᵀ·diag(W)·V (SVD_U_T | SVD_V_T)", () => {
            const A = mat(n, n, values);
            const W = dst(1, n);
            const U = dst(n, n);
            const V = dst(n, n);
            la.svd_decompose(A, W, U, V, jsfeatNext.SVD_U_T | jsfeatNext.SVD_V_T);

            const D = new Float64Array(n * n);
            for (let i = 0; i < n; i++) D[i * n + i] = W.data[i];
            const Ut = new Float64Array(n * n);
            for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) Ut[c * n + r] = U.data[r * n + c];

            const UtD = matmulPlain(Ut, D, n, n, n);
            const recon = matmulPlain(UtD, V.data, n, n, n);
            for (let i = 0; i < n; i++) expect(recon[i]).toBeCloseTo(values[i], 3);
        });

        it("singular values are non-negative and in descending order", () => {
            const A = randomSquare(4, 131);
            const W = dst(1, 4);
            const U = dst(4, 4);
            const V = dst(4, 4);
            la.svd_decompose(A, W, U, V, 0);

            const w = vec(W, 4);
            for (const s of w) expect(s).toBeGreaterThanOrEqual(0);
            for (let i = 1; i < w.length; i++) expect(w[i]).toBeLessThanOrEqual(w[i - 1] + 1e-5);
        });

        it("U and V are orthonormal: UᵀU ≈ I and VᵀV ≈ I", () => {
            const n4 = 4;
            const A = randomSquare(n4, 141);
            const W = dst(1, n4);
            const U = dst(n4, n4);
            const V = dst(n4, n4);
            la.svd_decompose(A, W, U, V, 0);

            for (const M of [U, V]) {
                const Mt = new Float64Array(n4 * n4);
                for (let r = 0; r < n4; r++) for (let c = 0; c < n4; c++) Mt[c * n4 + r] = M.data[r * n4 + c];
                const prod = matmulPlain(Mt, M.data, n4, n4, n4);
                expectIdentity({ data: prod }, n4, 3);
            }
        });

        it("singular values of a diagonal matrix are its |entries|, sorted", () => {
            const A = mat(3, 3, [4, 0, 0, 0, -3, 0, 0, 0, 2]);
            const W = dst(1, 3);
            const U = dst(3, 3);
            const V = dst(3, 3);
            la.svd_decompose(A, W, U, V, 0);
            expect(vec(W, 3).map((x) => Math.round(x * 1000) / 1000)).toEqual([4, 3, 2]);
        });
    });

    describe("svd_solve", () => {
        it("returns a genuine solution: A·x ≈ b", () => {
            const n = 4;
            const A = randomSPD(n, 151);
            const Aorig = Array.from(A.data.subarray(0, n * n));
            const b = mat(1, n, [1, -2, 3, 0.5]);
            const x = dst(1, n);

            la.svd_solve(A, x, b);

            const residual = apply(Aorig, vec(x, n), n);
            const bWant = [1, -2, 3, 0.5];
            for (let i = 0; i < n; i++) expect(residual[i]).toBeCloseTo(bWant[i], 3);
        });
    });

    describe("svd_invert", () => {
        it("A · A⁻¹ ≈ I and A⁻¹ · A ≈ I", () => {
            const n = 3;
            const A = mat(n, n, [4, 7, 2, 2, 6, 1, 1, 1, 3]);
            const Ai = dst(n, n);
            la.svd_invert(Ai, A);

            const left = matmulPlain(A.data, Ai.data, n, n, n);
            expectIdentity({ data: left }, n, 3);
            const right = matmulPlain(Ai.data, A.data, n, n, n);
            expectIdentity({ data: right }, n, 3);
        });

        it("satisfies the defining Moore–Penrose property A·A⁺·A ≈ A", () => {
            // The invariant that would have caught #102. It holds for square
            // input today; once the rectangular pseudo-inverse is implemented
            // (#102 option b) this same assertion should pass for non-square
            // matrices too, with no other change.
            const n = 3;
            const values = [4, 7, 2, 2, 6, 1, 1, 1, 3];
            const A = mat(n, n, values);
            const Ap = dst(n, n);
            la.svd_invert(Ap, A);

            const AAp = matmulPlain(A.data, Ap.data, n, n, n);
            const AApA = matmulPlain(AAp, A.data, n, n, n);
            for (let i = 0; i < n * n; i++) expect(AApA[i]).toBeCloseTo(values[i], 3);
        });

        it("inverts the identity to the identity", () => {
            const I = dst(3, 3);
            jsfeatNext.matmath.identity(I, 1.0);
            const Ii = dst(3, 3);
            la.svd_invert(Ii, I);
            expectIdentity(Ii, 3);
        });
    });

    describe("eigenVV", () => {
        it("every eigenpair satisfies A·v ≈ λ·v", () => {
            const n = 4;
            const A = randomSPD(n, 161);
            const Aorig = Array.from(A.data.subarray(0, n * n));
            const vects = dst(n, n);
            const vals = dst(1, n);

            la.eigenVV(A, vects, vals);

            for (let e = 0; e < n; e++) {
                const lambda = vals.data[e];
                const v = Array.from({ length: n }, (_, i) => vects.data[e * n + i]); // eigenvectors are rows
                const Av = apply(Aorig, v, n);
                for (let i = 0; i < n; i++) expect(Av[i]).toBeCloseTo(lambda * v[i], 3);
            }
        });

        it("eigenvalues come back in descending order", () => {
            const A = randomSPD(4, 171);
            const vects = dst(4, 4);
            const vals = dst(1, 4);
            la.eigenVV(A, vects, vals);

            const w = vec(vals, 4);
            for (let i = 1; i < w.length; i++) expect(w[i]).toBeLessThanOrEqual(w[i - 1] + 1e-5);
        });

        it("eigenvectors are unit length", () => {
            const n = 4;
            const A = randomSPD(n, 181);
            const vects = dst(n, n);
            const vals = dst(1, n);
            la.eigenVV(A, vects, vals);

            for (let e = 0; e < n; e++) {
                let norm = 0;
                for (let i = 0; i < n; i++) norm += vects.data[e * n + i] ** 2;
                expect(Math.sqrt(norm)).toBeCloseTo(1, 3);
            }
        });

        it("a symmetric positive-definite matrix has strictly positive eigenvalues", () => {
            const A = randomSPD(4, 191);
            const vects = dst(4, 4);
            const vals = dst(1, 4);
            la.eigenVV(A, vects, vals);
            for (const lambda of vec(vals, 4)) expect(lambda).toBeGreaterThan(0);
        });
    });
});
