import { expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";

/**
 * Shared helpers for the property/invariant suite (issue #87).
 *
 * These tests assert mathematical truths that hold regardless of what original
 * jsfeat does — the complement to `tests/parity/`, which pins compatibility.
 * They are the only kind of test that can catch a defect present in BOTH
 * implementations (see #102), or cover code with no oracle at all.
 */

export const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
export const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;

/** Grayscale `w`x`h` image, every pixel set to `value`. */
export function uniformImage(w: number, h: number, value: number) {
    const m = new jsfeatNext.matrix_t(w, h, U8C1);
    m.data.fill(value);
    return m;
}

/** Grayscale `w`x`h` image filled from `fn(x, y)`, masked to 8 bits. */
export function image(w: number, h: number, fn: (x: number, y: number) => number) {
    const m = new jsfeatNext.matrix_t(w, h, U8C1);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) m.data[y * w + x] = fn(x, y) & 0xff;
    }
    return m;
}

/** Deterministic pseudo-random grayscale image (texture for the detectors). */
export function noiseImage(w: number, h: number, seed: number) {
    const rand = rng(seed);
    return image(w, h, () => (rand() * 256) | 0);
}

/** Uninitialised grayscale `w`x`h` destination image. */
export function dstImage(w: number, h: number) {
    return new jsfeatNext.matrix_t(w, h, U8C1);
}

/** Min and max over the logical `w*h` pixels, ignoring buffer padding. */
export function pixelRange(m: { data: ArrayLike<number> }, w: number, h: number) {
    let lo = Infinity;
    let hi = -Infinity;
    for (let i = 0; i < w * h; i++) {
        const v = m.data[i];
        if (v < lo) lo = v;
        if (v > hi) hi = v;
    }
    return { min: lo, max: hi };
}

/** Asserts every logical pixel lies within `[lo, hi]`. */
export function expectPixelsWithin(m: { data: ArrayLike<number> }, w: number, h: number, lo = 0, hi = 255) {
    const r = pixelRange(m, w, h);
    expect(r.min).toBeGreaterThanOrEqual(lo);
    expect(r.max).toBeLessThanOrEqual(hi);
}

/** Deterministic PRNG so failures are always reproducible. */
export function rng(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/** `cols`x`rows` matrix filled from `values` (row-major). */
export function mat(cols: number, rows: number, values?: number[]) {
    const m = new jsfeatNext.matrix_t(cols, rows, F32C1);
    if (values) m.data.set(values);
    return m;
}

/** Uninitialised `cols`x`rows` destination matrix. */
export function dst(cols: number, rows: number) {
    return new jsfeatNext.matrix_t(cols, rows, F32C1);
}

/** Random `n`x`n` matrix with entries in [-scale/2, scale/2). */
export function randomSquare(n: number, seed: number, scale = 4) {
    const rand = rng(seed);
    const m = mat(n, n);
    for (let i = 0; i < n * n; i++) m.data[i] = rand() * scale - scale / 2;
    return m;
}

/**
 * Random symmetric positive-definite `n`x`n` matrix (`MᵀM + nI`).
 * Well conditioned, so the solvers have a unique stable answer — required by
 * `cholesky_solve`, and it keeps `lu_solve`/SVD away from degenerate cases.
 */
export function randomSPD(n: number, seed: number) {
    const rand = rng(seed);
    const raw = Array.from({ length: n * n }, () => rand() * 4 - 2);
    const m = mat(n, n);
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let s = 0;
            for (let k = 0; k < n; k++) s += raw[k * n + r] * raw[k * n + c];
            if (r === c) s += n; // dominate the diagonal
            m.data[r * n + c] = s;
        }
    }
    return m;
}

/** Plain row-major multiply, used as an independent check of the library's own. */
export function matmulPlain(A: ArrayLike<number>, B: ArrayLike<number>, n: number, m: number, p: number) {
    // A is n x m, B is m x p, result is n x p
    const out = new Float64Array(n * p);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < p; j++) {
            let s = 0;
            for (let k = 0; k < m; k++) s += A[i * m + k] * B[k * p + j];
            out[i * p + j] = s;
        }
    }
    return out;
}

/** Asserts `m` is the `n`x`n` identity within `digits` decimal places. */
export function expectIdentity(m: { data: ArrayLike<number> }, n: number, digits = 4) {
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            expect(m.data[r * n + c]).toBeCloseTo(r === c ? 1 : 0, digits);
        }
    }
}

/** Asserts two flat numeric sequences agree element-wise. */
export function expectClose(actual: ArrayLike<number>, expected: ArrayLike<number>, len: number, digits = 4) {
    for (let i = 0; i < len; i++) {
        expect(actual[i]).toBeCloseTo(expected[i], digits);
    }
}
