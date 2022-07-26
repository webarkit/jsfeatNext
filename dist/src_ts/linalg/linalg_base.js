export function swap(A, i0, i1, t) {
    t = A[i0];
    A[i0] = A[i1];
    A[i1] = t;
}
export function hypot(a, b) {
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
//# sourceMappingURL=linalg_base.js.map