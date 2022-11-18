import { matrix_t } from "../matrix_t/matrix_t";
import { cache } from "../cache/cache";

export function _resample_u8(src: matrix_t, dst: matrix_t, cache: cache, nw: number, nh: number) {
    var xofs_count = 0;
    var ch = src.channel,
        w = src.cols,
        h = src.rows;
    var src_d = src.data,
        dst_d = dst.data;
    var scale_x = w / nw,
        scale_y = h / nh;
    var inv_scale_256 = (scale_x * scale_y * 0x10000) | 0;
    var dx = 0,
        dy = 0,
        sx = 0,
        sy = 0,
        sx1 = 0,
        sx2 = 0,
        i = 0,
        k = 0,
        fsx1 = 0.0,
        fsx2 = 0.0;
    var a = 0,
        b = 0,
        dxn = 0,
        alpha = 0,
        beta = 0,
        beta1 = 0;

    var buf_node = cache.get_buffer((nw * ch) << 2);
    var sum_node = cache.get_buffer((nw * ch) << 2);
    var xofs_node = cache.get_buffer((w * 2 * 3) << 2);

    var buf = buf_node.i32;
    var sum = sum_node.i32;
    var xofs = xofs_node.i32;

    for (; dx < nw; dx++) {
        (fsx1 = dx * scale_x), (fsx2 = fsx1 + scale_x);
        (sx1 = (fsx1 + 1.0 - 1e-6) | 0), (sx2 = fsx2 | 0);
        sx1 = Math.min(sx1, w - 1);
        sx2 = Math.min(sx2, w - 1);

        if (sx1 > fsx1) {
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = ((sx1 - 1) * ch) | 0;
            xofs[k++] = ((sx1 - fsx1) * 0x100) | 0;
            xofs_count++;
        }
        for (sx = sx1; sx < sx2; sx++) {
            xofs_count++;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (sx * ch) | 0;
            xofs[k++] = 256;
        }
        if (fsx2 - sx2 > 1e-3) {
            xofs_count++;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (sx2 * ch) | 0;
            xofs[k++] = ((fsx2 - sx2) * 256) | 0;
        }
    }

    for (dx = 0; dx < nw * ch; dx++) {
        buf[dx] = sum[dx] = 0;
    }
    dy = 0;
    for (sy = 0; sy < h; sy++) {
        a = w * sy;
        for (k = 0; k < xofs_count; k++) {
            dxn = xofs[k * 3];
            sx1 = xofs[k * 3 + 1];
            alpha = xofs[k * 3 + 2];
            for (i = 0; i < ch; i++) {
                buf[dxn + i] += src_d[a + sx1 + i] * alpha;
            }
        }
        if ((dy + 1) * scale_y <= sy + 1 || sy == h - 1) {
            beta = (Math.max(sy + 1 - (dy + 1) * scale_y, 0.0) * 256) | 0;
            beta1 = 256 - beta;
            b = nw * dy;
            if (beta <= 0) {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = Math.min(Math.max((sum[dx] + buf[dx] * 256) / inv_scale_256, 0), 255);
                    sum[dx] = buf[dx] = 0;
                }
            } else {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = Math.min(Math.max((sum[dx] + buf[dx] * beta1) / inv_scale_256, 0), 255);
                    sum[dx] = buf[dx] * beta;
                    buf[dx] = 0;
                }
            }
            dy++;
        } else {
            for (dx = 0; dx < nw * ch; dx++) {
                sum[dx] += buf[dx] * 256;
                buf[dx] = 0;
            }
        }
    }

    cache.put_buffer(sum_node);
    cache.put_buffer(buf_node);
    cache.put_buffer(xofs_node);
}

export function _resample(src: matrix_t, dst: matrix_t, cache: cache, nw: number, nh: number) {
    var xofs_count = 0;
    var ch = src.channel,
        w = src.cols,
        h = src.rows;
    var src_d = src.data,
        dst_d = dst.data;
    var scale_x = w / nw,
        scale_y = h / nh;
    var scale = 1.0 / (scale_x * scale_y);
    var dx = 0,
        dy = 0,
        sx = 0,
        sy = 0,
        sx1 = 0,
        sx2 = 0,
        i = 0,
        k = 0,
        fsx1 = 0.0,
        fsx2 = 0.0;
    var a = 0,
        b = 0,
        dxn = 0,
        alpha = 0.0,
        beta = 0.0,
        beta1 = 0.0;

    var buf_node = cache.get_buffer((nw * ch) << 2);
    var sum_node = cache.get_buffer((nw * ch) << 2);
    var xofs_node = cache.get_buffer((w * 2 * 3) << 2);

    var buf = buf_node.f32;
    var sum = sum_node.f32;
    var xofs = xofs_node.f32;

    for (; dx < nw; dx++) {
        (fsx1 = dx * scale_x), (fsx2 = fsx1 + scale_x);
        (sx1 = (fsx1 + 1.0 - 1e-6) | 0), (sx2 = fsx2 | 0);
        sx1 = Math.min(sx1, w - 1);
        sx2 = Math.min(sx2, w - 1);

        if (sx1 > fsx1) {
            xofs_count++;
            xofs[k++] = ((sx1 - 1) * ch) | 0;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (sx1 - fsx1) * scale;
        }
        for (sx = sx1; sx < sx2; sx++) {
            xofs_count++;
            xofs[k++] = (sx * ch) | 0;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = scale;
        }
        if (fsx2 - sx2 > 1e-3) {
            xofs_count++;
            xofs[k++] = (sx2 * ch) | 0;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (fsx2 - sx2) * scale;
        }
    }

    for (dx = 0; dx < nw * ch; dx++) {
        buf[dx] = sum[dx] = 0;
    }
    dy = 0;
    for (sy = 0; sy < h; sy++) {
        a = w * sy;
        for (k = 0; k < xofs_count; k++) {
            sx1 = xofs[k * 3] | 0;
            dxn = xofs[k * 3 + 1] | 0;
            alpha = xofs[k * 3 + 2];
            for (i = 0; i < ch; i++) {
                buf[dxn + i] += src_d[a + sx1 + i] * alpha;
            }
        }
        if ((dy + 1) * scale_y <= sy + 1 || sy == h - 1) {
            beta = Math.max(sy + 1 - (dy + 1) * scale_y, 0.0);
            beta1 = 1.0 - beta;
            b = nw * dy;
            if (Math.abs(beta) < 1e-3) {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = sum[dx] + buf[dx];
                    sum[dx] = buf[dx] = 0;
                }
            } else {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = sum[dx] + buf[dx] * beta1;
                    sum[dx] = buf[dx] * beta;
                    buf[dx] = 0;
                }
            }
            dy++;
        } else {
            for (dx = 0; dx < nw * ch; dx++) {
                sum[dx] += buf[dx];
                buf[dx] = 0;
            }
        }
    }
    cache.put_buffer(sum_node);
    cache.put_buffer(buf_node);
    cache.put_buffer(xofs_node);
}
