import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { point_t } from "../point_t/point_t";
import { _cmp_score_16 } from "./fast_private";

/**
 * Real implementation, moved out of the src/jsfeatNext.ts monolith (issue #47).
 * This file previously held a type-only stub whose methods threw
 * "Method not implemented." — the implementation below is the inline code
 * from the monolith, verbatim.
 */
export class fast_corners extends jsfeatNext {
    private offsets16: Int32Array;
    public _threshold: number;
    public threshold_tab: Uint8Array;
    public pixel_off: Int32Array;
    public score_diff: Int32Array;

    constructor() {
        super();
        this.offsets16 = new Int32Array([
            0, 3, 1, 3, 2, 2, 3, 1, 3, 0, 3, -1, 2, -2, 1, -3, 0, -3, -1, -3, -2, -2, -3, -1, -3, 0, -3, 1, -2, 2, -1,
            3,
        ]);
        this.threshold_tab = new Uint8Array(512);
        this._threshold = 20;
        this.pixel_off = new Int32Array(25);
        this.score_diff = new Int32Array(25);
    }

    set_threshold(threshold: number): number {
        this._threshold = Math.min(Math.max(threshold, 0), 255);
        for (let i = -255; i <= 255; ++i) {
            this.threshold_tab[i + 255] = i < -this._threshold ? 1 : i > this._threshold ? 2 : 0;
        }
        return this._threshold;
    }

    detect(src: matrix_t, corners: point_t[], border: number): number {
        if (typeof border === "undefined") {
            border = 3;
        }

        const K = 8,
            N = 25;
        const img = src.data,
            w = src.cols,
            h = src.rows;
        let i = 0,
            j = 0,
            k = 0,
            vt = 0,
            x = 0,
            m3 = 0;
        const buf_node = this.cache.get_buffer(3 * w);
        const cpbuf_node = this.cache.get_buffer(((w + 1) * 3) << 2);
        const buf = buf_node.u8;
        const cpbuf = cpbuf_node.i32;
        const pixel = this.pixel_off;
        const sd = this.score_diff;
        const sy = Math.max(3, border);
        const ey = Math.min(h - 2, h - border);
        const sx = Math.max(3, border);
        const ex = Math.min(w - 3, w - border);
        let _count = 0,
            corners_cnt = 0,
            pt;
        const score_func = _cmp_score_16;
        const thresh_tab = this.threshold_tab;
        const threshold = this._threshold;

        let v = 0,
            tab = 0,
            d = 0,
            ncorners = 0,
            cornerpos = 0,
            curr = 0,
            ptr = 0,
            prev = 0,
            pprev = 0;
        let jp1 = 0,
            jm1 = 0,
            score = 0;

        this._cmp_offsets(pixel, w, 16);

        // local vars are faster?
        const pixel0 = pixel[0];
        const pixel1 = pixel[1];
        const pixel2 = pixel[2];
        const pixel3 = pixel[3];
        const pixel4 = pixel[4];
        const pixel5 = pixel[5];
        const pixel6 = pixel[6];
        const pixel7 = pixel[7];
        const pixel8 = pixel[8];
        const pixel9 = pixel[9];
        const pixel10 = pixel[10];
        const pixel11 = pixel[11];
        const pixel12 = pixel[12];
        const pixel13 = pixel[13];
        const pixel14 = pixel[14];
        const pixel15 = pixel[15];

        for (i = 0; i < w * 3; ++i) {
            buf[i] = 0;
        }

        for (i = sy; i < ey; ++i) {
            ptr = (i * w + sx) | 0;
            m3 = (i - 3) % 3;
            curr = (m3 * w) | 0;
            cornerpos = (m3 * (w + 1)) | 0;
            for (j = 0; j < w; ++j) buf[curr + j] = 0;
            ncorners = 0;

            if (i < ey - 1) {
                j = sx;

                for (; j < ex; ++j, ++ptr) {
                    v = img[ptr];
                    tab = -v + 255;
                    d = thresh_tab[tab + img[ptr + pixel0]] | thresh_tab[tab + img[ptr + pixel8]];

                    if (d == 0) {
                        continue;
                    }

                    d &= thresh_tab[tab + img[ptr + pixel2]] | thresh_tab[tab + img[ptr + pixel10]];
                    d &= thresh_tab[tab + img[ptr + pixel4]] | thresh_tab[tab + img[ptr + pixel12]];
                    d &= thresh_tab[tab + img[ptr + pixel6]] | thresh_tab[tab + img[ptr + pixel14]];

                    if (d == 0) {
                        continue;
                    }

                    d &= thresh_tab[tab + img[ptr + pixel1]] | thresh_tab[tab + img[ptr + pixel9]];
                    d &= thresh_tab[tab + img[ptr + pixel3]] | thresh_tab[tab + img[ptr + pixel11]];
                    d &= thresh_tab[tab + img[ptr + pixel5]] | thresh_tab[tab + img[ptr + pixel13]];
                    d &= thresh_tab[tab + img[ptr + pixel7]] | thresh_tab[tab + img[ptr + pixel15]];

                    if (d & 1) {
                        vt = v - threshold;
                        _count = 0;

                        for (k = 0; k < N; ++k) {
                            x = img[ptr + pixel[k]];
                            if (x < vt) {
                                ++_count;
                                if (_count > K) {
                                    ++ncorners;
                                    cpbuf[cornerpos + ncorners] = j;
                                    buf[curr + j] = score_func(img, ptr, pixel, sd, threshold);
                                    break;
                                }
                            } else {
                                _count = 0;
                            }
                        }
                    }

                    if (d & 2) {
                        vt = v + threshold;
                        _count = 0;

                        for (k = 0; k < N; ++k) {
                            x = img[ptr + pixel[k]];
                            if (x > vt) {
                                ++_count;
                                if (_count > K) {
                                    ++ncorners;
                                    cpbuf[cornerpos + ncorners] = j;
                                    buf[curr + j] = score_func(img, ptr, pixel, sd, threshold);
                                    break;
                                }
                            } else {
                                _count = 0;
                            }
                        }
                    }
                }
            }

            cpbuf[cornerpos + w] = ncorners;

            if (i == sy) {
                continue;
            }

            m3 = (i - 4 + 3) % 3;
            prev = (m3 * w) | 0;
            cornerpos = (m3 * (w + 1)) | 0;
            m3 = (i - 5 + 3) % 3;
            pprev = (m3 * w) | 0;

            ncorners = cpbuf[cornerpos + w];

            for (k = 0; k < ncorners; ++k) {
                j = cpbuf[cornerpos + k];
                jp1 = (j + 1) | 0;
                jm1 = (j - 1) | 0;
                score = buf[prev + j];
                if (
                    score > buf[prev + jp1] &&
                    score > buf[prev + jm1] &&
                    score > buf[pprev + jm1] &&
                    score > buf[pprev + j] &&
                    score > buf[pprev + jp1] &&
                    score > buf[curr + jm1] &&
                    score > buf[curr + j] &&
                    score > buf[curr + jp1]
                ) {
                    // save corner
                    pt = corners[corners_cnt];
                    (pt.x = j), (pt.y = i - 1), (pt.score = score);
                    corners_cnt++;
                }
            }
        } // y loop
        this.cache.put_buffer(buf_node);
        this.cache.put_buffer(cpbuf_node);
        return corners_cnt;
    }

    private _cmp_offsets(pixel: Uint8Array | Int32Array, step: number, pattern_size: number): void {
        let k = 0;
        const offsets = this.offsets16;
        for (; k < pattern_size; ++k) {
            pixel[k] = offsets[k << 1] + offsets[(k << 1) + 1] * step;
        }
        for (; k < 25; ++k) {
            pixel[k] = pixel[k - pattern_size];
        }
    }
}
