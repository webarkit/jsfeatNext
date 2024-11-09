// private functions
export function _cmp_score_16(
    src: Uint8Array,
    off: number,
    pixel: Uint8Array | Int32Array,
    d: Uint8Array | Int32Array,
    threshold: number
): number {
    let N = 25,
        k = 0,
        v = src[off];
    let a0 = threshold,
        a = 0,
        b0 = 0,
        b = 0;

    for (; k < N; ++k) {
        d[k] = v - src[off + pixel[k]];
    }

    for (k = 0; k < 16; k += 2) {
        a = Math.min(d[k + 1], d[k + 2]);
        a = Math.min(a, d[k + 3]);

        if (a <= a0) continue;

        a = Math.min(a, d[k + 4]);
        a = Math.min(a, d[k + 5]);
        a = Math.min(a, d[k + 6]);
        a = Math.min(a, d[k + 7]);
        a = Math.min(a, d[k + 8]);
        a0 = Math.max(a0, Math.min(a, d[k]));
        a0 = Math.max(a0, Math.min(a, d[k + 9]));
    }

    b0 = -a0;
    for (k = 0; k < 16; k += 2) {
        b = Math.max(d[k + 1], d[k + 2]);
        b = Math.max(b, d[k + 3]);
        b = Math.max(b, d[k + 4]);
        b = Math.max(b, d[k + 5]);

        if (b >= b0) continue;
        b = Math.max(b, d[k + 6]);
        b = Math.max(b, d[k + 7]);
        b = Math.max(b, d[k + 8]);
        b0 = Math.min(b0, Math.max(b, d[k]));
        b0 = Math.min(b0, Math.max(b, d[k + 9]));
    }

    return -b0 - 1;
}
