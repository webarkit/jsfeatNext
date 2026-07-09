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
