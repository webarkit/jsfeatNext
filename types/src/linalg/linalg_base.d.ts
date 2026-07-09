/**
 * Swaps two elements of a typed array in place.
 *
 * @param A  The array to mutate.
 * @param i0 Index of the first element.
 * @param i1 Index of the second element.
 * @param t  Scratch variable (its incoming value is ignored).
 */
export declare function swap(A: Int32Array | Float32Array | Float64Array, i0: number, i1: number, t: number): void;
/**
 * Numerically stable `sqrt(a² + b²)` (Euclidean hypotenuse) that avoids
 * overflow/underflow by factoring out the larger magnitude — the classic
 * BLAS-style formulation used inside the Jacobi SVD/eigen routines.
 *
 * @param a First component.
 * @param b Second component.
 * @returns `sqrt(a² + b²)` computed without squaring the raw inputs.
 */
export declare function hypot(a: number, b: number): number;
