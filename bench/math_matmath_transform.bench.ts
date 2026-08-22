/*
 *  math_matmath_transform.bench.ts
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
 * Throughput benchmarks for `math`, `matmath` and `transform` (issue #86,
 * phase 2 — the three modules the earlier phase-2 PRs left uncovered).
 *
 * Read the RATIO, not the `hz` — see bench/README.md for why, and for the
 * measured noise floor (ignore anything under ~1.15x).
 *
 * ## Case selection: real callers, not every public method
 *
 * These three modules expose ~19 methods between them. Benching all of them
 * would mostly time arithmetic nobody runs in a frame loop, so the cases
 * below are the ones with an actual in-tree caller:
 *
 *   - `math.get_gaussian_kernel` — `imgproc.gaussian_blur` (imgproc.ts:277)
 *   - `math.median`              — `motion_estimator.lmeds` (motion_estimator.ts:378)
 *   - `matmath.transpose`        — `linalg.svd_decompose` (5 call sites, at
 *                                  most 3 taken per call, usually 1)
 *   - `matmath.invert_3x3` / `multiply_3x3` — `motion_model`, per frame
 *
 * `math.qsort` is included despite having no in-tree caller: it is public
 * API, it is the one genuinely algorithmic routine in `math` (a hybrid
 * quicksort/insertion sort), and it is the kind of code where a port is most
 * likely to drift. `transform`'s two inverses are likewise public API with no
 * in-tree caller — see the note on that module below.
 *
 * `math.perspective_4point_transform` is deliberately NOT benched: it is
 * deprecated and logs a console warning on every call, so benching it would
 * both flood the output and time a path no one should be on.
 *
 * ## In-place mutation: qsort and median rewrite their input
 *
 * Both sort/partition the array they are given, so a naive bench would
 * measure "sort an already-sorted array" from the second iteration onward —
 * a different (and much easier) workload than the first call. Both cases
 * below restore fresh unsorted input via `bench()`'s `setup` option, which
 * runs once per mode (warmup, then run) rather than per iteration, so the
 * restore cost stays outside the timed region.
 *
 * This is not a complete fix and the numbers should be read with it in mind:
 * within a single mode, iterations 2..N still operate on already-processed
 * data. It applies identically to both sides, so the ratio stays fair, but
 * the absolute `hz` for these two cases reflects the sorted-input case far
 * more than the unsorted one.
 *
 * ## `transform`: the one case that is NOT strictly like-for-like
 *
 * jsfeatNext's `transform` methods take `matrix_t`; original jsfeat's take
 * RAW ARRAYS (documented divergence — see `tests/vendor/oracle.cjs` and
 * AGENTS.md). The arithmetic is identical, but jsfeatNext additionally does
 * two property loads (`src.data`, `dst.data`) that jsfeat does not.
 *
 * For a function this small — `invert_affine_transform` is about a dozen
 * float operations — two extra property loads might plausibly have shown up
 * as a measurable cost. They did not: across six idle-machine runs both
 * transform cases sit at the noise floor with the sign flipping, so the
 * matrix_t calling convention has no throughput cost this harness can
 * detect. That is worth knowing, but it is a null result, not a finding —
 * and it means these two cases are the least informative in this file.
 *
 * Note also that jsfeat's `transform` module ships only in `src/`, never in
 * the distributed build — `tests/vendor/oracle.cjs` loads it separately.
 */

const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;
const OF32C1 = jsfeat.F32_t | jsfeat.C1_t;

/** Matching `matrix_t` pair, filled with the same deterministic values. */
function matPair(cols: number, rows: number, seed: number) {
    const rand = rng(seed);
    const next = new jsfeatNext.matrix_t(cols, rows, F32C1);
    const orig = new jsfeat.matrix_t(cols, rows, OF32C1);
    for (let i = 0; i < cols * rows; i++) {
        const v = rand() * 4 - 2;
        next.data[i] = v;
        orig.data[i] = v;
    }
    return { next, orig };
}

/** A well-conditioned 3x3 (diagonally dominant), so invert_3x3 never hits a singular matrix. */
function mat3x3Pair(seed: number) {
    const rand = rng(seed);
    const next = new jsfeatNext.matrix_t(3, 3, F32C1);
    const orig = new jsfeat.matrix_t(3, 3, OF32C1);
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const v = rand() * 2 - 1 + (r === c ? 4 : 0);
            next.data[r * 3 + c] = v;
            orig.data[r * 3 + c] = v;
        }
    }
    return { next, orig };
}

// ---------------------------------------------------------------- math

describe("math.get_gaussian_kernel — size 7, sigma 0 (hardcoded table)", () => {
    // size <= 7, odd, sigma <= 0 hits the hardcoded coefficient switch rather
    // than the Math.exp loop -- the branch imgproc.gaussian_blur takes at its
    // default kernel sizes.
    const kernelN = new Float32Array(7);
    const kernelO = new Float32Array(7);

    bench("jsfeatNext", () => {
        jsfeatNext.math.get_gaussian_kernel(7, 0, kernelN, F32C1);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.math.get_gaussian_kernel(7, 0, kernelO, OF32C1);
    });
});

describe("math.get_gaussian_kernel — size 9, sigma 0 (computed, Math.exp)", () => {
    // size > 7 falls through to the exp() loop: a genuinely different cost
    // profile from the case above, the same way imgproc's U8 and F32 paths are.
    const kernelN = new Float32Array(9);
    const kernelO = new Float32Array(9);

    bench("jsfeatNext", () => {
        jsfeatNext.math.get_gaussian_kernel(9, 0, kernelN, F32C1);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.math.get_gaussian_kernel(9, 0, kernelO, OF32C1);
    });
});

describe("math.qsort — 2048 floats", () => {
    const N = 2048;
    const pristine = Array.from({ length: N }, rng(9001));
    const arrN: number[] = new Array(N);
    const arrO: number[] = new Array(N);
    // qsort uses `cmp` in BOOLEAN contexts (`if (cmp(a,b))`, ternaries), so it
    // needs a "less-than" predicate, not a three-way -1/0/1 comparator: the
    // latter returns a truthy value for BOTH orderings, making the algorithm
    // see "a < b" as true in either direction. An earlier version of this
    // bench used the three-way shape and produced a completely unsorted array
    // -- i.e. it was not measuring sorting at all (caught in review). Same
    // predicate shape as tests/parity/math.test.ts.
    const cmp = (a: number, b: number) => (a < b ? 1 : 0);

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.math.qsort(arrN, 0, N - 1, cmp);
        },
        {
            setup: () => {
                for (let i = 0; i < N; i++) arrN[i] = pristine[i];
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.math.qsort(arrO, 0, N - 1, cmp);
        },
        {
            setup: () => {
                for (let i = 0; i < N; i++) arrO[i] = pristine[i];
            },
        }
    );
});

describe("math.median — 512 floats (lmeds inlier residuals)", () => {
    // 512 is the order of magnitude motion_estimator.lmeds works at: one
    // residual per correspondence.
    const N = 512;
    const pristine = Float32Array.from({ length: N }, rng(9002));
    const arrN = new Float32Array(N);
    const arrO = new Float32Array(N);

    bench(
        "jsfeatNext",
        () => {
            jsfeatNext.math.median(arrN, 0, N - 1);
        },
        {
            setup: () => {
                arrN.set(pristine);
            },
        }
    );

    bench(
        "jsfeat (reference)",
        () => {
            jsfeat.math.median(arrO, 0, N - 1);
        },
        {
            setup: () => {
                arrO.set(pristine);
            },
        }
    );
});

// ------------------------------------------------------------- matmath

describe("matmath.transpose — 9x9 (linalg SVD's own size)", () => {
    // linalg.svd_decompose has five transpose call sites, but they sit in
    // mutually exclusive / optional branches (linalg.ts:676-742): at most 3
    // run per decomposition, and with SVD_U_T|SVD_V_T set -- what
    // motion_model and bench/linalg.bench.ts both use -- only 1 does.
    // Benched at the 9x9 size motion_model's homography DLT uses (#158).
    const { next: A, orig: Ao } = matPair(9, 9, 9003);
    const At = new jsfeatNext.matrix_t(9, 9, F32C1);
    const Ato = new jsfeat.matrix_t(9, 9, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.matmath.transpose(At, A);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.matmath.transpose(Ato, Ao);
    });
});

describe("matmath.invert_3x3", () => {
    const { next: A, orig: Ao } = mat3x3Pair(9004);
    const inv = new jsfeatNext.matrix_t(3, 3, F32C1);
    const invO = new jsfeat.matrix_t(3, 3, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.matmath.invert_3x3(A, inv);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.matmath.invert_3x3(Ao, invO);
    });
});

describe("matmath.multiply_3x3", () => {
    // motion_model calls this twice per model fit, per frame.
    const { next: A, orig: Ao } = mat3x3Pair(9005);
    const { next: B, orig: Bo } = mat3x3Pair(9006);
    const C = new jsfeatNext.matrix_t(3, 3, F32C1);
    const Co = new jsfeat.matrix_t(3, 3, OF32C1);

    bench("jsfeatNext", () => {
        jsfeatNext.matmath.multiply_3x3(C, A, B);
    });

    bench("jsfeat (reference)", () => {
        jsfeat.matmath.multiply_3x3(Co, Ao, Bo);
    });
});

// ----------------------------------------------------------- transform

describe("transform.invert_affine_transform (matrix_t vs raw array)", () => {
    // NOT strictly like-for-like: jsfeatNext takes matrix_t and unwraps
    // .data internally; jsfeat takes the raw arrays directly. See the module
    // docstring -- a small ratio in jsfeat's favour is expected here.
    const { next: src } = matPair(3, 2, 9007);
    const dst = new jsfeatNext.matrix_t(3, 2, F32C1);
    // Float32Array on BOTH sides: an earlier version passed jsfeat a packed
    // JS array (Array.from), which V8 stores and optimises very differently
    // from a Float32Array -- that confounded the calling-convention question
    // with an element-storage difference (caught in review). Now the ONLY
    // difference is matrix_t-vs-raw, which is what this case is about.
    const srcRaw = Float32Array.from(src.data);
    const dstRaw = new Float32Array(6);

    bench("jsfeatNext (matrix_t)", () => {
        jsfeatNext.transform.invert_affine_transform(src, dst);
    });

    bench("jsfeat (reference, raw array)", () => {
        jsfeat.transform.invert_affine_transform(srcRaw, dstRaw);
    });
});

describe("transform.invert_perspective_transform (matrix_t vs raw array)", () => {
    const { next: src } = mat3x3Pair(9008);
    const dst = new jsfeatNext.matrix_t(3, 3, F32C1);
    const srcRaw = Float32Array.from(src.data);
    const dstRaw = new Float32Array(9);

    bench("jsfeatNext (matrix_t)", () => {
        jsfeatNext.transform.invert_perspective_transform(src, dst);
    });

    bench("jsfeat (reference, raw array)", () => {
        jsfeat.transform.invert_perspective_transform(srcRaw, dstRaw);
    });
});
