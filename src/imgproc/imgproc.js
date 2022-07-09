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
}