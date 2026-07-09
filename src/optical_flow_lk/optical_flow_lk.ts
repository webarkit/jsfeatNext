import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { pyramid_t } from "../pyramid_t/pyramid_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { imgproc } from "../imgproc/imgproc";

/**
 * Pyramidal Lucas–Kanade sparse optical flow: tracks a set of points from a
 * previous frame to the current one by iteratively minimizing the local
 * intensity difference, coarse-to-fine across image pyramids (the classic
 * Bouguet formulation, using Scharr derivatives).
 *
 * Mirrors `jsfeat.optical_flow_lk` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export class optical_flow_lk extends jsfeatNext {
    /** Bound `imgproc.scharr_derivatives`, used to build the gradient maps. */
    public scharr_deriv: any;

    constructor() {
        super();
        const _imgproc = new imgproc();
        this.scharr_deriv = _imgproc.scharr_derivatives;
    }

    /**
     * Tracks `count` points between two image pyramids (both already built
     * with `pyramid_t.build`). For each point the flow is estimated at the
     * coarsest level and refined down to level 0.
     *
     * @param prev_pyr Pyramid of the previous frame.
     * @param curr_pyr Pyramid of the current frame.
     * @param prev_xy  Input point coordinates, interleaved `[x0,y0,x1,y1,…]`.
     * @param curr_xy  Output tracked coordinates (same layout). Seed it with
     *                 a prediction or a copy of `prev_xy`.
     * @param count    Number of points to track.
     * @param win_size Side of the square tracking window (e.g. 15 or 21).
     * @param max_iter Max refinement iterations per level. Default 30.
     * @param status   Output per-point flags: 1 = tracked, 0 = lost.
     *                 Allocated internally when omitted.
     * @param eps      Convergence threshold on the update step. Default 0.01.
     * @param min_eigen_threshold Minimum normalized eigenvalue of the
     *                 spatial-gradient matrix; below it a point is dropped
     *                 (textureless window). Default 0.0001.
     */
    track(
        prev_pyr: pyramid_t,
        curr_pyr: pyramid_t,
        prev_xy: Float32Array,
        curr_xy: Float32Array,
        count: number,
        win_size: number,
        max_iter: number,
        status: Uint8Array,
        eps: number,
        min_eigen_threshold: number
    ): void {
        if (typeof max_iter === "undefined") {
            max_iter = 30;
        }
        if (typeof status === "undefined") {
            status = new Uint8Array(count);
        }
        if (typeof eps === "undefined") {
            eps = 0.01;
        }
        if (typeof min_eigen_threshold === "undefined") {
            min_eigen_threshold = 0.0001;
        }

        const half_win = (win_size - 1) * 0.5;
        const win_area = (win_size * win_size) | 0;
        const win_area2 = win_area << 1;
        const prev_imgs = prev_pyr.data,
            next_imgs = curr_pyr.data;
        let img_prev = prev_imgs[0].data,
            img_next = next_imgs[0].data;
        let w0 = prev_imgs[0].cols,
            h0 = prev_imgs[0].rows,
            lw = 0,
            lh = 0;

        const iwin_node = this.cache.get_buffer(win_area << 2);
        const deriv_iwin_node = this.cache.get_buffer(win_area2 << 2);
        const deriv_lev_node = this.cache.get_buffer((h0 * (w0 << 1)) << 2);

        const deriv_m = new matrix_t(w0, h0, JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);

        const iwin_buf = iwin_node.i32;
        const deriv_iwin = deriv_iwin_node.i32;
        const deriv_lev = deriv_lev_node.i32;

        let dstep = 0,
            src = 0,
            dsrc = 0,
            iptr = 0,
            diptr = 0,
            jptr = 0;
        let lev_sc = 0.0,
            prev_x = 0.0,
            prev_y = 0.0,
            next_x = 0.0,
            next_y = 0.0;
        let prev_delta_x = 0.0,
            prev_delta_y = 0.0,
            delta_x = 0.0,
            delta_y = 0.0;
        let iprev_x = 0,
            iprev_y = 0,
            inext_x = 0,
            inext_y = 0;
        let i = 0,
            j = 0,
            x = 0,
            y = 0,
            level = 0,
            ptid = 0,
            iter = 0;
        let brd_tl = 0,
            brd_r = 0,
            brd_b = 0;
        let a = 0.0,
            b = 0.0,
            b1 = 0.0,
            b2 = 0.0;

        // fixed point math
        const W_BITS14 = 14;
        const W_BITS4 = 14;
        const W_BITS1m5 = W_BITS4 - 5;
        const W_BITS1m51 = 1 << (W_BITS1m5 - 1);
        const W_BITS14_ = 1 << W_BITS14;
        const W_BITS41 = 1 << (W_BITS4 - 1);
        const FLT_SCALE = 1.0 / (1 << 20);
        let iw00 = 0,
            iw01 = 0,
            iw10 = 0,
            iw11 = 0,
            ival = 0,
            ixval = 0,
            iyval = 0;
        let A11 = 0.0,
            A12 = 0.0,
            A22 = 0.0,
            D = 0.0,
            min_eig = 0.0;

        const FLT_EPSILON = 0.00000011920929;
        eps *= eps;

        // reset status
        for (; i < count; ++i) {
            status[i] = 1;
        }

        const max_level = (prev_pyr.levels - 1) | 0;
        level = max_level;

        for (; level >= 0; --level) {
            lev_sc = 1.0 / (1 << level);
            lw = w0 >> level;
            lh = h0 >> level;
            dstep = lw << 1;
            img_prev = prev_imgs[level].data;
            img_next = next_imgs[level].data;

            brd_r = (lw - win_size) | 0;
            brd_b = (lh - win_size) | 0;

            // calculate level derivatives
            this.scharr_deriv(prev_imgs[level], deriv_m);

            // iterate through points
            for (ptid = 0; ptid < count; ++ptid) {
                i = ptid << 1;
                j = i + 1;
                prev_x = prev_xy[i] * lev_sc;
                prev_y = prev_xy[j] * lev_sc;

                if (level == max_level) {
                    next_x = prev_x;
                    next_y = prev_y;
                } else {
                    next_x = curr_xy[i] * 2.0;
                    next_y = curr_xy[j] * 2.0;
                }
                curr_xy[i] = next_x;
                curr_xy[j] = next_y;

                prev_x -= half_win;
                prev_y -= half_win;
                iprev_x = prev_x | 0;
                iprev_y = prev_y | 0;

                // border check
                x = <number>(<unknown>(iprev_x <= brd_tl || iprev_x >= brd_r || iprev_y <= brd_tl || iprev_y >= brd_b));
                if (x != 0) {
                    if (level == 0) {
                        status[ptid] = 0;
                    }
                    continue;
                }

                a = prev_x - iprev_x;
                b = prev_y - iprev_y;
                iw00 = ((1.0 - a) * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                iw01 = (a * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                iw10 = ((1.0 - a) * b * W_BITS14_ + 0.5) | 0;
                iw11 = W_BITS14_ - iw00 - iw01 - iw10;

                ((A11 = 0.0), (A12 = 0.0), (A22 = 0.0));

                // extract the patch from the first image, compute covariation matrix of derivatives
                for (y = 0; y < win_size; ++y) {
                    src = ((y + iprev_y) * lw + iprev_x) | 0;
                    dsrc = src << 1;

                    iptr = (y * win_size) | 0;
                    diptr = iptr << 1;
                    for (x = 0; x < win_size; ++x, ++src, ++iptr, dsrc += 2) {
                        ival =
                            img_prev[src] * iw00 +
                            img_prev[src + 1] * iw01 +
                            img_prev[src + lw] * iw10 +
                            img_prev[src + lw + 1] * iw11;
                        ival = (ival + W_BITS1m51) >> W_BITS1m5;

                        ixval =
                            deriv_lev[dsrc] * iw00 +
                            deriv_lev[dsrc + 2] * iw01 +
                            deriv_lev[dsrc + dstep] * iw10 +
                            deriv_lev[dsrc + dstep + 2] * iw11;
                        ixval = (ixval + W_BITS41) >> W_BITS4;

                        iyval =
                            deriv_lev[dsrc + 1] * iw00 +
                            deriv_lev[dsrc + 3] * iw01 +
                            deriv_lev[dsrc + dstep + 1] * iw10 +
                            deriv_lev[dsrc + dstep + 3] * iw11;
                        iyval = (iyval + W_BITS41) >> W_BITS4;

                        iwin_buf[iptr] = ival;
                        deriv_iwin[diptr++] = ixval;
                        deriv_iwin[diptr++] = iyval;

                        A11 += ixval * ixval;
                        A12 += ixval * iyval;
                        A22 += iyval * iyval;
                    }
                }

                A11 *= FLT_SCALE;
                A12 *= FLT_SCALE;
                A22 *= FLT_SCALE;

                D = A11 * A22 - A12 * A12;
                min_eig = (A22 + A11 - Math.sqrt((A11 - A22) * (A11 - A22) + 4.0 * A12 * A12)) / win_area2;

                if (min_eig < min_eigen_threshold || D < FLT_EPSILON) {
                    if (level == 0) {
                        status[ptid] = 0;
                    }
                    continue;
                }

                D = 1.0 / D;

                next_x -= half_win;
                next_y -= half_win;
                prev_delta_x = 0.0;
                prev_delta_y = 0.0;

                for (iter = 0; iter < max_iter; ++iter) {
                    inext_x = next_x | 0;
                    inext_y = next_y | 0;

                    x = <number>(
                        (<unknown>(inext_x <= brd_tl || inext_x >= brd_r || inext_y <= brd_tl || inext_y >= brd_b))
                    );
                    if (x != 0) {
                        if (level == 0) {
                            status[ptid] = 0;
                        }
                        break;
                    }

                    a = next_x - inext_x;
                    b = next_y - inext_y;
                    iw00 = ((1.0 - a) * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                    iw01 = (a * (1.0 - b) * W_BITS14_ + 0.5) | 0;
                    iw10 = ((1.0 - a) * b * W_BITS14_ + 0.5) | 0;
                    iw11 = W_BITS14_ - iw00 - iw01 - iw10;
                    ((b1 = 0.0), (b2 = 0.0));

                    for (y = 0; y < win_size; ++y) {
                        jptr = ((y + inext_y) * lw + inext_x) | 0;

                        iptr = (y * win_size) | 0;
                        diptr = iptr << 1;
                        for (x = 0; x < win_size; ++x, ++jptr, ++iptr) {
                            ival =
                                img_next[jptr] * iw00 +
                                img_next[jptr + 1] * iw01 +
                                img_next[jptr + lw] * iw10 +
                                img_next[jptr + lw + 1] * iw11;
                            ival = (ival + W_BITS1m51) >> W_BITS1m5;
                            ival = ival - iwin_buf[iptr];

                            b1 += ival * deriv_iwin[diptr++];
                            b2 += ival * deriv_iwin[diptr++];
                        }
                    }

                    b1 *= FLT_SCALE;
                    b2 *= FLT_SCALE;

                    delta_x = (A12 * b2 - A22 * b1) * D;
                    delta_y = (A12 * b1 - A11 * b2) * D;

                    next_x += delta_x;
                    next_y += delta_y;
                    curr_xy[i] = next_x + half_win;
                    curr_xy[j] = next_y + half_win;

                    if (delta_x * delta_x + delta_y * delta_y <= eps) {
                        break;
                    }

                    if (
                        iter > 0 &&
                        Math.abs(delta_x + prev_delta_x) < 0.01 &&
                        Math.abs(delta_y + prev_delta_y) < 0.01
                    ) {
                        curr_xy[i] -= delta_x * 0.5;
                        curr_xy[j] -= delta_y * 0.5;
                        break;
                    }

                    prev_delta_x = delta_x;
                    prev_delta_y = delta_y;
                }
            } // points loop
        } // levels loop

        this.cache.put_buffer(iwin_node);
        this.cache.put_buffer(deriv_iwin_node);
        this.cache.put_buffer(deriv_lev_node);
    }
}
