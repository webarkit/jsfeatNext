import { _resample, _resample_u8 } from './resample.js'
import { JSFEAT_CONSTANTS } from '../constants/constants.js'
export default class imgproc {
    constructor() { }
    grayscale(src, w, h, dst, code) {
        // this is default image data representation in browser
        if (typeof code === "undefined") { code = JSFEAT_CONSTANTS.COLOR_RGBA2GRAY; }
        var x = 0, y = 0, i = 0, j = 0, ir = 0, jr = 0;
        var coeff_r = 4899, coeff_g = 9617, coeff_b = 1868, cn = 4;

        if (code == JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            coeff_r = 1868;
            coeff_b = 4899;
        }
        if (code == JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            cn = 3;
        }
        var cn2 = cn << 1, cn3 = (cn * 3) | 0;

        dst.resize(w, h, 1);
        var dst_u8 = dst.data;

        for (y = 0; y < h; ++y, j += w, i += w * cn) {
            for (x = 0, ir = i, jr = j; x <= w - 4; x += 4, ir += cn << 2, jr += 4) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 1] = (src[ir + cn] * coeff_r + src[ir + cn + 1] * coeff_g + src[ir + cn + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 2] = (src[ir + cn2] * coeff_r + src[ir + cn2 + 1] * coeff_g + src[ir + cn2 + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 3] = (src[ir + cn3] * coeff_r + src[ir + cn3 + 1] * coeff_g + src[ir + cn3 + 2] * coeff_b + 8192) >> 14;
            }
            for (; x < w; ++x, ++jr, ir += cn) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
            }
        }
    }
    pyrdown(src, dst, sx, sy) {
        // this is needed for bbf
        if (typeof sx === "undefined") { sx = 0; }
        if (typeof sy === "undefined") { sy = 0; }

        var w = src.cols, h = src.rows;
        var w2 = w >> 1, h2 = h >> 1;
        var _w2 = w2 - (sx << 1), _h2 = h2 - (sy << 1);
        var x = 0, y = 0, sptr = sx + sy * w, sline = 0, dptr = 0, dline = 0;

        dst.resize(w2, h2, src.channel);

        var src_d = src.data, dst_d = dst.data;

        for (y = 0; y < _h2; ++y) {
            sline = sptr;
            dline = dptr;
            for (x = 0; x <= _w2 - 2; x += 2, dline += 2, sline += 4) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] +
                    src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
                dst_d[dline + 1] = (src_d[sline + 2] + src_d[sline + 3] +
                    src_d[sline + w + 2] + src_d[sline + w + 3] + 2) >> 2;
            }
            for (; x < _w2; ++x, ++dline, sline += 2) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] +
                    src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
            }
            sptr += w << 1;
            dptr += w2;
        }
    }
    // transform is 3x3 or 2x3 matrix_t only first 6 values referenced
    warp_affine(src, dst, transform, fill_value) {
        if (typeof fill_value === "undefined") { fill_value = 0; }
        var src_width = src.cols, src_height = src.rows, dst_width = dst.cols, dst_height = dst.rows;
        var src_d = src.data, dst_d = dst.data;
        var x = 0, y = 0, off = 0, ixs = 0, iys = 0, xs = 0.0, ys = 0.0, a = 0.0, b = 0.0, p0 = 0.0, p1 = 0.0;
        var td = transform.data;
        var m00 = td[0], m01 = td[1], m02 = td[2],
            m10 = td[3], m11 = td[4], m12 = td[5];

        for (var dptr = 0; y < dst_height; ++y) {
            xs = m01 * y + m02;
            ys = m11 * y + m12;
            for (x = 0; x < dst_width; ++x, ++dptr, xs += m00, ys += m10) {
                ixs = xs | 0; iys = ys | 0;

                if (ixs >= 0 && iys >= 0 && ixs < (src_width - 1) && iys < (src_height - 1)) {
                    a = xs - ixs;
                    b = ys - iys;
                    off = src_width * iys + ixs;

                    p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
                    p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);

                    dst_d[dptr] = p0 + b * (p1 - p0);
                }
                else dst_d[dptr] = fill_value;
            }
        }
    }
}