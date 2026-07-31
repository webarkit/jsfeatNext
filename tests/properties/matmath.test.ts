/*
 *  matmath.test.ts
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

import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import { mat, dst, randomSquare, matmulPlain, expectIdentity, expectClose } from "./helpers";

/**
 * Property/invariant tests for `matmath` (issue #87).
 *
 * Unlike `tests/parity/matmath.test.ts`, nothing here compares against the
 * jsfeat oracle — every assertion is a mathematical truth that must hold no
 * matter how (or by whom) the function is implemented.
 *
 * `multiply` is verified first against an independent plain-JS implementation,
 * because the linalg invariants lean on it to check their own results.
 */

const mm = jsfeatNext.matmath;

describe("matmath invariants", () => {
    describe("multiply", () => {
        it("agrees with a plain reference implementation", () => {
            // A is 2x3 (rows x cols), B is 3x2  ->  C is 2x2
            const A = mat(3, 2, [1, 2, 3, 4, 5, 6]);
            const B = mat(2, 3, [7, 8, 9, 10, 11, 12]);
            const C = dst(2, 2);
            mm.multiply(C, A, B);

            const want = matmulPlain(A.data, B.data, 2, 3, 2);
            expectClose(C.data, want, 4);
        });

        it("is associative: (A·B)·C = A·(B·C)", () => {
            const A = randomSquare(3, 11);
            const B = randomSquare(3, 12);
            const C = randomSquare(3, 13);

            const AB = dst(3, 3);
            const left = dst(3, 3);
            mm.multiply(AB, A, B);
            mm.multiply(left, AB, C);

            const BC = dst(3, 3);
            const right = dst(3, 3);
            mm.multiply(BC, B, C);
            mm.multiply(right, A, BC);

            expectClose(left.data, right.data, 9, 3);
        });

        it("has the identity as a neutral element: M·I = I·M = M", () => {
            const M = randomSquare(4, 14);
            const I = dst(4, 4);
            mm.identity(I, 1.0);

            const right = dst(4, 4);
            const left = dst(4, 4);
            mm.multiply(right, M, I);
            mm.multiply(left, I, M);

            expectClose(right.data, M.data, 16);
            expectClose(left.data, M.data, 16);
        });
    });

    describe("transpose", () => {
        it("is an involution: transpose(transpose(A)) = A", () => {
            const A = mat(3, 2, [1, 2, 3, 4, 5, 6]); // 2 rows x 3 cols
            const At = dst(2, 3);
            const Att = dst(3, 2);
            mm.transpose(At, A);
            mm.transpose(Att, At);
            expectClose(Att.data, A.data, 6);
        });

        it("moves element (r,c) to (c,r)", () => {
            const A = mat(3, 2, [1, 2, 3, 4, 5, 6]);
            const At = dst(2, 3);
            mm.transpose(At, A);
            // A is 2x3, At is 3x2
            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 3; c++) {
                    expect(At.data[c * 2 + r]).toBeCloseTo(A.data[r * 3 + c], 6);
                }
            }
        });
    });

    describe("identity / identity_3x3", () => {
        it("puts `value` on the diagonal and zero elsewhere", () => {
            const M = dst(4, 4);
            mm.identity(M, 2.5);
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    expect(M.data[r * 4 + c]).toBeCloseTo(r === c ? 2.5 : 0, 6);
                }
            }
        });

        it("identity_3x3 matches the generic identity for 3x3", () => {
            const a = dst(3, 3);
            const b = dst(3, 3);
            mm.identity_3x3(a, 1.0);
            mm.identity(b, 1.0);
            expectClose(a.data, b.data, 9, 6);
        });
    });

    describe("invert_3x3", () => {
        it("M · M⁻¹ = I and M⁻¹ · M = I", () => {
            const M = mat(3, 3, [2, 0, 5, 0, 3, 7, 0, 0, 1]);
            const Mi = dst(3, 3);
            mm.invert_3x3(M, Mi); // NB: (from, to)

            const P = dst(3, 3);
            mm.multiply_3x3(P, M, Mi);
            expectIdentity(P, 3);

            const Q = dst(3, 3);
            mm.multiply_3x3(Q, Mi, M);
            expectIdentity(Q, 3);
        });

        it("is an involution: invert(invert(M)) = M", () => {
            const M = randomSquare(3, 21);
            const Mi = dst(3, 3);
            const Mii = dst(3, 3);
            mm.invert_3x3(M, Mi);
            mm.invert_3x3(Mi, Mii);
            expectClose(Mii.data, M.data, 9, 3);
        });

        it("inverts the identity to the identity", () => {
            const I = dst(3, 3);
            mm.identity_3x3(I, 1.0);
            const Ii = dst(3, 3);
            mm.invert_3x3(I, Ii);
            expectIdentity(Ii, 3);
        });
    });

    describe("mat3x3_determinant", () => {
        it("det(I) = 1", () => {
            const I = dst(3, 3);
            mm.identity_3x3(I, 1.0);
            expect(mm.mat3x3_determinant(I)).toBeCloseTo(1, 5);
        });

        it("is multiplicative: det(A·B) = det(A)·det(B)", () => {
            const A = randomSquare(3, 31);
            const B = randomSquare(3, 32);
            const AB = dst(3, 3);
            mm.multiply_3x3(AB, A, B);

            expect(mm.mat3x3_determinant(AB)).toBeCloseTo(mm.mat3x3_determinant(A) * mm.mat3x3_determinant(B), 3);
        });

        it("is zero for a singular matrix (duplicate rows)", () => {
            const S = mat(3, 3, [1, 2, 3, 1, 2, 3, 4, 5, 7]);
            expect(Math.abs(mm.mat3x3_determinant(S))).toBeLessThan(1e-5);
        });

        it("scaling one row by k scales the determinant by k", () => {
            const A = randomSquare(3, 33);
            const before = mm.mat3x3_determinant(A);
            const B = mat(3, 3, Array.from(A.data.subarray(0, 9)));
            for (let c = 0; c < 3; c++) B.data[c] *= 3; // scale row 0
            expect(mm.mat3x3_determinant(B)).toBeCloseTo(before * 3, 3);
        });
    });

    describe("the multiply_At* family agrees with explicit transpose+multiply", () => {
        // A is 3 rows x 2 cols
        const A = mat(2, 3, [1, 2, 3, 4, 5, 6]);
        const B = mat(2, 3, [7, 8, 9, 10, 11, 12]);

        it("multiply_AtA(C, A) = Aᵀ·A", () => {
            const C = dst(2, 2);
            mm.multiply_AtA(C, A);
            const At = dst(3, 2);
            mm.transpose(At, A);
            const want = dst(2, 2);
            mm.multiply(want, At, A);
            expectClose(C.data, want.data, 4);
        });

        it("multiply_AAt(C, A) = A·Aᵀ", () => {
            const C = dst(3, 3);
            mm.multiply_AAt(C, A);
            const At = dst(3, 2);
            mm.transpose(At, A);
            const want = dst(3, 3);
            mm.multiply(want, A, At);
            expectClose(C.data, want.data, 9);
        });

        it("multiply_AtB(C, A, B) = Aᵀ·B", () => {
            const C = dst(2, 2);
            mm.multiply_AtB(C, A, B);
            const At = dst(3, 2);
            mm.transpose(At, A);
            const want = dst(2, 2);
            mm.multiply(want, At, B);
            expectClose(C.data, want.data, 4);
        });

        it("multiply_ABt(C, A, B) = A·Bᵀ", () => {
            const C = dst(3, 3);
            mm.multiply_ABt(C, A, B);
            const Bt = dst(3, 2);
            mm.transpose(Bt, B);
            const want = dst(3, 3);
            mm.multiply(want, A, Bt);
            expectClose(C.data, want.data, 9);
        });

        it("Aᵀ·A is symmetric", () => {
            const C = dst(2, 2);
            mm.multiply_AtA(C, A);
            expect(C.data[1]).toBeCloseTo(C.data[2], 5);
        });
    });

    describe("multiply_3x3 matches the generic multiply for 3x3", () => {
        it("produces the same product", () => {
            const A = randomSquare(3, 41);
            const B = randomSquare(3, 42);
            const viaFixed = dst(3, 3);
            const viaGeneric = dst(3, 3);
            mm.multiply_3x3(viaFixed, A, B);
            mm.multiply(viaGeneric, A, B);
            expectClose(viaFixed.data, viaGeneric.data, 9, 4);
        });
    });
});
