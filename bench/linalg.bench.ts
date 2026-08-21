/*
 *  linalg.bench.ts
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

import { bench, describe } from "vitest";
import jsfeatNext from "../src/jsfeatNext";
import jsfeat from "../tests/vendor/oracle.cjs";
import { rng } from "../tests/properties/helpers";

/**
 * Throughput benchmarks for `linalg` (issue #86, phase 2 continued).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Matrix sizes come from real callers, not round numbers
 *
 * `linalg` has no per-pixel loop — its cost is a fixed per-call amount set by
 * the matrix size, and the sizes that matter are the ones this library's own
 * `motion_model` actually uses:
 *
 *   - `lu_solve` / `cholesky_solve`: 6x6 — the affine motion model's normal
 *     equations (`AtA`/`AtB` in `motion_model.ts`).
 *   - `svd_decompose` / `svd_solve` / `svd_invert` / `eigenVV`: 9x9 — the
 *     homography DLT's `LᵀL` (`mLtL` in `motion_model.ts`), solved there via
 *     `eigenVV`; the SVD variants are benched at the same size for
 *     comparability even though `motion_model` takes the eigen route.
 *
 * ## Well-conditioned inputs, not adversarial ones
 *
 * `cholesky_solve` requires a positive-definite matrix, and a poorly
 * conditioned system can make an iterative solver take a different number of
 * internal steps — which would make the bench measure numerical luck rather
 * than throughput. Every case here uses the well-conditioned `MᵀM + nI`
 * construction (mirrors `tests/properties/helpers.ts`'s `randomSPD`, built
 * locally so both sides get identical bytes), even for `lu_solve` and the SVD
 * cases that don't strictly require it.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;

/** Deterministic well-conditioned SPD pair: identical bytes on both sides. */
function spdPair(n: number, seed: number) {
    const rand = rng(seed);
    const raw = Array.from({ length: n * n }, () => rand() * 4 - 2);
    const next = new jsfeatNext.matrix_t(n, n, F32C1);
    const orig = new jsfeat.matrix_t(n, n, OF32C1);
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let s = 0;
            for (let k = 0; k < n; k++) s += raw[k * n + r] * raw[k * n + c];
            if (r === c) s += n;
            next.data[r * n + c] = s;
            orig.data[r * n + c] = s;
        }
    }
    return { next, orig };
}

/** Deterministic vector pair: identical bytes on both sides. */
function vecPair(n: number, seed: number) {
    const rand = rng(seed);
    const next = new jsfeatNext.matrix_t(1, n, F32C1);
    const orig = new jsfeat.matrix_t(1, n, OF32C1);
    for (let i = 0; i < n; i++) {
        const v = rand() * 10 - 5;
        next.data[i] = v;
        orig.data[i] = v;
    }
    return { next, orig };
}

describe("linalg.lu_solve (6x6)", () => {
    const N = 6;
    const { next: A0, orig: Ao0 } = spdPair(N, 1001);
    const { next: B0, orig: Bo0 } = vecPair(N, 1002);
    // lu_solve overwrites both its matrix and its vector argument in place, so
    // each iteration needs a fresh copy rather than accumulating drift into the
    // next call's input. `setup` runs once per mode (warmup, then run), not per
    // iteration, so the copy costs nothing inside the timed region.
    const A = new jsfeatNext.matrix_t(N, N, F32C1);
    const B = new jsfeatNext.matrix_t(1, N, F32C1);
    const Ao = new jsfeat.matrix_t(N, N, OF32C1);
    const Bo = new jsfeat.matrix_t(1, N, OF32C1);

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.linalg.lu_solve(A, B);
        },
        {
            setup: () => {
                A0.copy_to(A);
                B0.copy_to(B);
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.linalg.lu_solve(Ao, Bo);
        },
        {
            setup: () => {
                Ao0.copy_to(Ao);
                Bo0.copy_to(Bo);
            },
        }
    );
});

describe("linalg.cholesky_solve (6x6)", () => {
    const N = 6;
    // Like lu_solve, the Cholesky factorization overwrites A in place (see
    // linalg.ts: `ad = A.data` is written during the decomposition), so both
    // operands need a fresh copy every call.
    const { next: A0, orig: Ao0 } = spdPair(N, 1003);
    const { next: B0, orig: Bo0 } = vecPair(N, 1004);
    const A = new jsfeatNext.matrix_t(N, N, F32C1);
    const B = new jsfeatNext.matrix_t(1, N, F32C1);
    const Ao = new jsfeat.matrix_t(N, N, OF32C1);
    const Bo = new jsfeat.matrix_t(1, N, OF32C1);

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.linalg.cholesky_solve(A, B);
        },
        {
            setup: () => {
                A0.copy_to(A);
                B0.copy_to(B);
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.linalg.cholesky_solve(Ao, Bo);
        },
        {
            setup: () => {
                Ao0.copy_to(Ao);
                Bo0.copy_to(Bo);
            },
        }
    );
});

describe("linalg.svd_decompose (9x9)", () => {
    const N = 9;
    const { next: A, orig: Ao } = spdPair(N, 1005);
    const W = new jsfeatNext.matrix_t(1, N, F32C1);
    const U = new jsfeatNext.matrix_t(N, N, F32C1);
    const V = new jsfeatNext.matrix_t(N, N, F32C1);
    const Wo = new jsfeat.matrix_t(1, N, OF32C1);
    const Uo = new jsfeat.matrix_t(N, N, OF32C1);
    const Vo = new jsfeat.matrix_t(N, N, OF32C1);
    const options = jsfeatNext.SVD_U_T | jsfeatNext.SVD_V_T;

    bench("jsfeatNext", () => {
        jsfeatNext.linalg.svd_decompose(A, W, U, V, options);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.linalg.svd_decompose(Ao, Wo, Uo, Vo, options);
    });
});

describe("linalg.svd_solve (9x9)", () => {
    const N = 9;
    const { next: A, orig: Ao } = spdPair(N, 1006);
    const { next: B, orig: Bo } = vecPair(N, 1007);
    const X = new jsfeatNext.matrix_t(1, N, F32C1);
    const Xo = new jsfeat.matrix_t(1, N, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.linalg.svd_solve(A, X, B);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.linalg.svd_solve(Ao, Xo, Bo);
    });
});

describe("linalg.svd_invert (9x9)", () => {
    const N = 9;
    const { next: A, orig: Ao } = spdPair(N, 1008);
    const Ai = new jsfeatNext.matrix_t(N, N, F32C1);
    const Aio = new jsfeat.matrix_t(N, N, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.linalg.svd_invert(Ai, A);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.linalg.svd_invert(Aio, Ao);
    });
});

describe("linalg.eigenVV (9x9)", () => {
    const N = 9;
    const { next: A, orig: Ao } = spdPair(N, 1009);
    const vects = new jsfeatNext.matrix_t(N, N, F32C1);
    const vals = new jsfeatNext.matrix_t(1, N, F32C1);
    const vectso = new jsfeat.matrix_t(N, N, OF32C1);
    const valso = new jsfeat.matrix_t(1, N, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.linalg.eigenVV(A, vects, vals);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.linalg.eigenVV(Ao, vectso, valso);
    });
});
