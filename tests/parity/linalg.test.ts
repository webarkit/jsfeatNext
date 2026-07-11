import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45)
 * for linalg: lu_solve, cholesky_solve, svd_decompose, svd_solve, svd_invert,
 * eigenVV — each vs the original jsfeat.linalg on identical inputs.
 */

function rng(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;
const la = jsfeatNext.linalg;

function fillPair(
    next: { data: Float32Array },
    orig: { data: Float32Array },
    len: number,
    rand: () => number,
    scale = 10
) {
    for (let i = 0; i < len; i++) {
        const v = rand() * scale - scale / 2;
        next.data[i] = v;
        orig.data[i] = v;
    }
}

/** builds a well-conditioned symmetric positive-definite pair (A = M'M + n*I) */
function spdPair(n: number, seed: number) {
    const rand = rng(seed);
    const raw = Array.from({ length: n * n }, () => rand() * 4 - 2);
    const next = new jsfeatNext.matrix_t(n, n, F32C1);
    const orig = new jsfeat.matrix_t(n, n, OF32C1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let s = 0;
            for (let k = 0; k < n; k++) s += raw[k * n + i] * raw[k * n + j];
            if (i === j) s += n;
            next.data[i * n + j] = s;
            orig.data[i * n + j] = s;
        }
    }
    return { next, orig };
}

function expectDataClose(actual: { data: Float32Array }, expected: { data: Float32Array }, len: number, digits = 4) {
    for (let i = 0; i < len; i++) {
        expect(actual.data[i]).toBeCloseTo(expected.data[i], digits);
    }
}

describe("parity: linalg vs original jsfeat.linalg", () => {
    it("lu_solve", () => {
        const { next: A, orig: Ao } = spdPair(4, 21);
        const B = new jsfeatNext.matrix_t(1, 4, F32C1);
        const Bo = new jsfeat.matrix_t(1, 4, OF32C1);
        fillPair(B, Bo, 4, rng(22));
        const r = la.lu_solve(A, B);
        const ro = jsfeat.linalg.lu_solve(Ao, Bo);
        expect(r).toBe(ro);
        expectDataClose(B, Bo, 4);
    });

    it("cholesky_solve", () => {
        const { next: A, orig: Ao } = spdPair(4, 23);
        const B = new jsfeatNext.matrix_t(1, 4, F32C1);
        const Bo = new jsfeat.matrix_t(1, 4, OF32C1);
        fillPair(B, Bo, 4, rng(24));
        const r = la.cholesky_solve(A, B);
        const ro = jsfeat.linalg.cholesky_solve(Ao, Bo);
        expect(r).toBe(ro);
        expectDataClose(B, Bo, 4);
    });

    it("svd_decompose (SVD_U_T | SVD_V_T)", () => {
        const rows = 5,
            cols = 4;
        const A = new jsfeatNext.matrix_t(cols, rows, F32C1);
        const Ao = new jsfeat.matrix_t(cols, rows, OF32C1);
        fillPair(A, Ao, rows * cols, rng(25));

        const W = new jsfeatNext.matrix_t(1, cols, F32C1);
        const U = new jsfeatNext.matrix_t(rows, rows, F32C1);
        const V = new jsfeatNext.matrix_t(cols, cols, F32C1);
        const Wo = new jsfeat.matrix_t(1, cols, OF32C1);
        const Uo = new jsfeat.matrix_t(rows, rows, OF32C1);
        const Vo = new jsfeat.matrix_t(cols, cols, OF32C1);

        const opts = jsfeatNext.SVD_U_T | jsfeatNext.SVD_V_T;
        la.svd_decompose(A, W, U, V, opts);
        jsfeat.linalg.svd_decompose(Ao, Wo, Uo, Vo, jsfeat.SVD_U_T | jsfeat.SVD_V_T);

        expectDataClose(W, Wo, cols);
        expectDataClose(U, Uo, rows * rows);
        expectDataClose(V, Vo, cols * cols);
    });

    it("svd_solve", () => {
        const n = 4;
        const { next: A, orig: Ao } = spdPair(n, 26);
        const B = new jsfeatNext.matrix_t(1, n, F32C1);
        const Bo = new jsfeat.matrix_t(1, n, OF32C1);
        fillPair(B, Bo, n, rng(27));
        const X = new jsfeatNext.matrix_t(1, n, F32C1);
        const Xo = new jsfeat.matrix_t(1, n, OF32C1);
        la.svd_solve(A, X, B);
        jsfeat.linalg.svd_solve(Ao, Xo, Bo);
        expectDataClose(X, Xo, n);
    });

    it("svd_invert", () => {
        const n = 4;
        const { next: A, orig: Ao } = spdPair(n, 28);
        const Ai = new jsfeatNext.matrix_t(n, n, F32C1);
        const Aio = new jsfeat.matrix_t(n, n, OF32C1);
        la.svd_invert(Ai, A);
        jsfeat.linalg.svd_invert(Aio, Ao);
        expectDataClose(Ai, Aio, n * n);
    });

    it("eigenVV (values and vectors of a symmetric matrix)", () => {
        const n = 5;
        const { next: A, orig: Ao } = spdPair(n, 29);
        const vects = new jsfeatNext.matrix_t(n, n, F32C1);
        const vals = new jsfeatNext.matrix_t(1, n, F32C1);
        const vectso = new jsfeat.matrix_t(n, n, OF32C1);
        const valso = new jsfeat.matrix_t(1, n, OF32C1);
        la.eigenVV(A, vects, vals);
        jsfeat.linalg.eigenVV(Ao, vectso, valso);
        expectDataClose(vals, valso, n);
        expectDataClose(vects, vectso, n * n);
    });
});
