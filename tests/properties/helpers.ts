/*
 *  helpers.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

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

/**
 * Corner-rich grayscale scene: bright squares scattered on a dark textured
 * background. Isolated square corners are ideal FAST/YAPE material.
 *
 * Every pixel is produced by sampling one fixed generator at `(x - dx, y - dy)`,
 * so `dx`/`dy` give an EXACT translation of the whole scene (background
 * included) rather than merely moving the shapes over a static background —
 * that is what makes translation-equivariance assertions meaningful.
 *
 * Intensities stay within [20, 200], leaving headroom so `offset` can lift the
 * whole image without saturating at 255 — a prerequisite for the
 * brightness-invariance assertions, since a clipped pixel would break the
 * "add a constant" premise.
 */
export function cornerScene(w: number, h: number, { dx = 0, dy = 0, offset = 0 } = {}) {
    const rand = rng(99);
    const shapes: [number, number, number, number][] = [];
    for (let s = 0; s < 25; s++) {
        shapes.push([
            8 + Math.floor(rand() * (w - 24)),
            8 + Math.floor(rand() * (h - 24)),
            3 + Math.floor(rand() * 6),
            100 + Math.floor(rand() * 100), // <= 200
        ]);
    }
    const at = (x: number, y: number) => {
        let v = 20 + ((x + y) & 7); // dark textured base
        for (const [cx, cy, size, val] of shapes) {
            if (x >= cx && x < cx + size && y >= cy && y < cy + size) v = val;
        }
        return v + offset;
    };
    const m = new jsfeatNext.matrix_t(w, h, U8C1);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) m.data[y * w + x] = at(x - dx, y - dy);
    }
    return m;
}

/** Pre-allocated keypoint pool, as the detectors expect. */
export function keypointPool(n: number) {
    return Array.from({ length: n }, () => new jsfeatNext.keypoint_t(0, 0, 0, 0, -1));
}

/** Number of differing bits between the first `len` bytes of `a` and `b`. */
export function hammingDistance(a: ArrayLike<number>, b: ArrayLike<number>, len: number) {
    let h = 0;
    for (let i = 0; i < len; i++) {
        let v = a[i] ^ b[i];
        while (v) {
            h += v & 1;
            v >>= 1;
        }
    }
    return h;
}

/** Zero-filled grayscale `w`x`h` destination image (`matrix_t` allocates a fresh ArrayBuffer). */
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

/** Zero-filled `cols`x`rows` destination matrix (`matrix_t` allocates a fresh ArrayBuffer). */
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
