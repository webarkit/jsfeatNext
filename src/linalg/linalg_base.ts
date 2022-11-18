export function swap(A: Int32Array | Float32Array | Float64Array, i0: number, i1: number, t: number): void {
    t = A[i0];
    A[i0] = A[i1];
    A[i1] = t;
}

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
