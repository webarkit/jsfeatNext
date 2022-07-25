export function _convol_u8(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel) {
    var i = 0, j = 0, k = 0, sp = 0, dp = 0, sum = 0, sum1 = 0, sum2 = 0, sum3 = 0, f0 = filter[0], fk = 0;
    var w2 = w << 1, w3 = w * 3, w4 = w << 2;
    for (; i < h; ++i) {
        sum = src_d[sp];
        for (j = 0; j < half_kernel; ++j) {
            buf[j] = sum;
        }
        for (j = 0; j <= w - 2; j += 2) {
            buf[j + half_kernel] = src_d[sp + j];
            buf[j + half_kernel + 1] = src_d[sp + j + 1];
        }
        for (; j < w; ++j) {
            buf[j + half_kernel] = src_d[sp + j];
        }
        sum = src_d[sp + w - 1];
        for (j = w; j < half_kernel + w; ++j) {
            buf[j + half_kernel] = sum;
        }
        for (j = 0; j <= w - 4; j += 4) {
            sum = buf[j] * f0,
                sum1 = buf[j + 1] * f0,
                sum2 = buf[j + 2] * f0,
                sum3 = buf[j + 3] * f0;
            for (k = 1; k < kernel_size; ++k) {
                fk = filter[k];
                sum += buf[k + j] * fk;
                sum1 += buf[k + j + 1] * fk;
                sum2 += buf[k + j + 2] * fk;
                sum3 += buf[k + j + 3] * fk;
            }
            dst_d[dp + j] = Math.min(sum >> 8, 255);
            dst_d[dp + j + 1] = Math.min(sum1 >> 8, 255);
            dst_d[dp + j + 2] = Math.min(sum2 >> 8, 255);
            dst_d[dp + j + 3] = Math.min(sum3 >> 8, 255);
        }
        for (; j < w; ++j) {
            sum = buf[j] * f0;
            for (k = 1; k < kernel_size; ++k) {
                sum += buf[k + j] * filter[k];
            }
            dst_d[dp + j] = Math.min(sum >> 8, 255);
        }
        sp += w;
        dp += w;
    }
    for (i = 0; i < w; ++i) {
        sum = dst_d[i];
        for (j = 0; j < half_kernel; ++j) {
            buf[j] = sum;
        }
        k = i;
        for (j = 0; j <= h - 2; j += 2, k += w2) {
            buf[j + half_kernel] = dst_d[k];
            buf[j + half_kernel + 1] = dst_d[k + w];
        }
        for (; j < h; ++j, k += w) {
            buf[j + half_kernel] = dst_d[k];
        }
        sum = dst_d[(h - 1) * w + i];
        for (j = h; j < half_kernel + h; ++j) {
            buf[j + half_kernel] = sum;
        }
        dp = i;
        for (j = 0; j <= h - 4; j += 4, dp += w4) {
            sum = buf[j] * f0,
                sum1 = buf[j + 1] * f0,
                sum2 = buf[j + 2] * f0,
                sum3 = buf[j + 3] * f0;
            for (k = 1; k < kernel_size; ++k) {
                fk = filter[k];
                sum += buf[k + j] * fk;
                sum1 += buf[k + j + 1] * fk;
                sum2 += buf[k + j + 2] * fk;
                sum3 += buf[k + j + 3] * fk;
            }
            dst_d[dp] = Math.min(sum >> 8, 255);
            dst_d[dp + w] = Math.min(sum1 >> 8, 255);
            dst_d[dp + w2] = Math.min(sum2 >> 8, 255);
            dst_d[dp + w3] = Math.min(sum3 >> 8, 255);
        }
        for (; j < h; ++j, dp += w) {
            sum = buf[j] * f0;
            for (k = 1; k < kernel_size; ++k) {
                sum += buf[k + j] * filter[k];
            }
            dst_d[dp] = Math.min(sum >> 8, 255);
        }
    }
}
export function _convol(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel) {
    var i = 0, j = 0, k = 0, sp = 0, dp = 0, sum = 0.0, sum1 = 0.0, sum2 = 0.0, sum3 = 0.0, f0 = filter[0], fk = 0.0;
    var w2 = w << 1, w3 = w * 3, w4 = w << 2;
    for (; i < h; ++i) {
        sum = src_d[sp];
        for (j = 0; j < half_kernel; ++j) {
            buf[j] = sum;
        }
        for (j = 0; j <= w - 2; j += 2) {
            buf[j + half_kernel] = src_d[sp + j];
            buf[j + half_kernel + 1] = src_d[sp + j + 1];
        }
        for (; j < w; ++j) {
            buf[j + half_kernel] = src_d[sp + j];
        }
        sum = src_d[sp + w - 1];
        for (j = w; j < half_kernel + w; ++j) {
            buf[j + half_kernel] = sum;
        }
        for (j = 0; j <= w - 4; j += 4) {
            sum = buf[j] * f0,
                sum1 = buf[j + 1] * f0,
                sum2 = buf[j + 2] * f0,
                sum3 = buf[j + 3] * f0;
            for (k = 1; k < kernel_size; ++k) {
                fk = filter[k];
                sum += buf[k + j] * fk;
                sum1 += buf[k + j + 1] * fk;
                sum2 += buf[k + j + 2] * fk;
                sum3 += buf[k + j + 3] * fk;
            }
            dst_d[dp + j] = sum;
            dst_d[dp + j + 1] = sum1;
            dst_d[dp + j + 2] = sum2;
            dst_d[dp + j + 3] = sum3;
        }
        for (; j < w; ++j) {
            sum = buf[j] * f0;
            for (k = 1; k < kernel_size; ++k) {
                sum += buf[k + j] * filter[k];
            }
            dst_d[dp + j] = sum;
        }
        sp += w;
        dp += w;
    }
    for (i = 0; i < w; ++i) {
        sum = dst_d[i];
        for (j = 0; j < half_kernel; ++j) {
            buf[j] = sum;
        }
        k = i;
        for (j = 0; j <= h - 2; j += 2, k += w2) {
            buf[j + half_kernel] = dst_d[k];
            buf[j + half_kernel + 1] = dst_d[k + w];
        }
        for (; j < h; ++j, k += w) {
            buf[j + half_kernel] = dst_d[k];
        }
        sum = dst_d[(h - 1) * w + i];
        for (j = h; j < half_kernel + h; ++j) {
            buf[j + half_kernel] = sum;
        }
        dp = i;
        for (j = 0; j <= h - 4; j += 4, dp += w4) {
            sum = buf[j] * f0,
                sum1 = buf[j + 1] * f0,
                sum2 = buf[j + 2] * f0,
                sum3 = buf[j + 3] * f0;
            for (k = 1; k < kernel_size; ++k) {
                fk = filter[k];
                sum += buf[k + j] * fk;
                sum1 += buf[k + j + 1] * fk;
                sum2 += buf[k + j + 2] * fk;
                sum3 += buf[k + j + 3] * fk;
            }
            dst_d[dp] = sum;
            dst_d[dp + w] = sum1;
            dst_d[dp + w2] = sum2;
            dst_d[dp + w3] = sum3;
        }
        for (; j < h; ++j, dp += w) {
            sum = buf[j] * f0;
            for (k = 1; k < kernel_size; ++k) {
                sum += buf[k + j] * filter[k];
            }
            dst_d[dp] = sum;
        }
    }
}
//# sourceMappingURL=convol.js.map