import { _resample, _resample_u8 } from './resample.js'
import jsfeatNext from '../jsfeatNext.js'
export default class imgproc {
    constructor(){}
    grayscale(src, w, h, dst, code)  {
        // this is default image data representation in browser
        if (typeof code === "undefined") { code = jsfeatNext.COLOR_RGBA2GRAY; }
        var x=0, y=0, i=0, j=0, ir=0,jr=0;
        var coeff_r = 4899, coeff_g = 9617, coeff_b = 1868, cn = 4;

        if(code == jsfeatNext.COLOR_BGRA2GRAY || code == jsfeatNext.COLOR_BGR2GRAY) {
            coeff_r = 1868;
            coeff_b = 4899;
        }
        if(code == jsfeatNext.COLOR_RGB2GRAY || code == jsfeatNext.COLOR_BGR2GRAY) {
            cn = 3;
        }
        var cn2 = cn<<1, cn3 = (cn*3)|0;

        dst.resize(w, h, 1);
        var dst_u8 = dst.data;

        for(y = 0; y < h; ++y, j+=w, i+=w*cn) {
            for(x = 0, ir = i, jr = j; x <= w-4; x+=4, ir+=cn<<2, jr+=4) {
                dst_u8[jr]     = (src[ir] * coeff_r + src[ir+1] * coeff_g + src[ir+2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 1] = (src[ir+cn] * coeff_r + src[ir+cn+1] * coeff_g + src[ir+cn+2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 2] = (src[ir+cn2] * coeff_r + src[ir+cn2+1] * coeff_g + src[ir+cn2+2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 3] = (src[ir+cn3] * coeff_r + src[ir+cn3+1] * coeff_g + src[ir+cn3+2] * coeff_b + 8192) >> 14;
            }
            for (; x < w; ++x, ++jr, ir+=cn) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir+1] * coeff_g + src[ir+2] * coeff_b + 8192) >> 14;
            }
        }
    }
}