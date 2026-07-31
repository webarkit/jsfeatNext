/*
 *  linalg_base.ts
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
 *  Portions of this file are derived from jsfeat
 *  (https://github.com/inspirit/jsfeat), Copyright (c) Eugene Zatepyakin,
 *  released under the MIT License.
 *
 */

/**
 * Swaps two elements of a typed array in place.
 *
 * @param A  The array to mutate.
 * @param i0 Index of the first element.
 * @param i1 Index of the second element.
 * @param t  Scratch variable (its incoming value is ignored).
 */
export function swap(A: Int32Array | Float32Array | Float64Array, i0: number, i1: number, t: number): void {
    t = A[i0];
    A[i0] = A[i1];
    A[i1] = t;
}

/**
 * Numerically stable `sqrt(a² + b²)` (Euclidean hypotenuse) that avoids
 * overflow/underflow by factoring out the larger magnitude — the classic
 * BLAS-style formulation used inside the Jacobi SVD/eigen routines.
 *
 * @param a First component.
 * @param b Second component.
 * @returns `sqrt(a² + b²)` computed without squaring the raw inputs.
 */
export function hypot(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a > b) {
        b /= a;
        return a * Math.sqrt(1.0 + b * b);
    }
    if (b > 0) {
        a /= b;
        return b * Math.sqrt(1.0 + a * a);
    }
    return 0.0;
}
