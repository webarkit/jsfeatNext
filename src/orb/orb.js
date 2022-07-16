import matrix_t from '../matrix_t/matrix_t.js'
import bit_pattern_31 from './bit_pattern_31.js'
import { JSFEAT_CONSTANTS } from '../constants/constants.js'
import { rectify_patch } from './rectify_patch.js'

export default class orb {
    constructor() {
        this.bit_pattern_31_ = new Int32Array(bit_pattern_31);
        this.H = new matrix_t(3, 3, JSFEAT_CONSTANTS.F32_t | JSFEAT_CONSTANTS.C1_t);
        this.patch_img = new matrix_t(32, 32, JSFEAT_CONSTANTS.U8_t | JSFEAT_CONSTANTS.C1_t);
    }

    describe(src, corners, count, descriptors) {
        var DESCR_SIZE = 32; // bytes;
        var i = 0, b = 0, px = 0.0, py = 0.0, angle = 0.0;
        var t0 = 0, t1 = 0, val = 0;
        var img = src.data, w = src.cols, h = src.rows;
        var patch_d = this.patch_img.data;
        var patch_off = 16 * 32 + 16; // center of patch
        var patt = 0;

        if (!(descriptors.type & JSFEAT_CONSTANTS.U8_t)) {
            // relocate to U8 type
            descriptors.type = JSFEAT_CONSTANTS.U8_t;
            descriptors.cols = DESCR_SIZE;
            descriptors.rows = count;
            descriptors.channel = 1;
            descriptors.allocate();
        } else {
            descriptors.resize(DESCR_SIZE, count, 1);
        }

        var descr_d = descriptors.data;
        var descr_off = 0;

        for (i = 0; i < count; ++i) {
            px = corners[i].x;
            py = corners[i].y;
            angle = corners[i].angle;

            rectify_patch(src, this.patch_img, angle, px, py, 32, this.H);

            // describe the patch
            patt = 0;
            for (b = 0; b < DESCR_SIZE; ++b) {

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val = (t0 < t1) | 0;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 1;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 2;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 3;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 4;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 5;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 6;

                t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]]; patt += 2
                val |= (t0 < t1) << 7;

                descr_d[descr_off + b] = val;
            }
            descr_off += DESCR_SIZE;
        }
    }
}