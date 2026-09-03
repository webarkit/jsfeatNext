/*
 *  bfmatcher.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 *  Portions of this file are derived from jsfeat
 *  (https://github.com/inspirit/jsfeat), Copyright (c) Eugene Zatepyakin,
 *  released under the MIT License.
 *
 */

import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { match_t } from "./match_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import { shared_data_type } from "../data_type/data_type";

/**
 * Brute-force Hamming matcher for binary descriptors (ORB today; TEBLID/FREAK
 * once ported). Ported from the inline `match_pattern()`/`popcnt32()` helpers
 * in `examples/sample_orb_pinball.html` — the only matcher jsfeatNext had
 * before this module, duplicated across the ORB samples.
 *
 * The population-count routine is bit-identical to the sample's `popcnt32`,
 * and descriptor rows are read the same way the sample does
 * (`matrix_t.buffer.i32`, the full backing buffer reinterpreted as 32-bit
 * words) — so this can serve as PureCV's numeric reference oracle the same
 * way the rest of jsfeatNext does (see issue #96).
 *
 * Descriptor width must be a multiple of 4 bytes: 32 (ORB) and 64 (TEBLID
 * p512) both qualify. Unlike `svd_invert`'s non-square guard (#102), this is
 * not a jsfeat divergence — original jsfeat never shipped a matcher at all —
 * so there is no parity obligation, only an explicit failure instead of a
 * silently wrong read past the buffer's actual word count.
 */
export class bfmatcher extends jsfeatNext {
    /** Distance norm in use. Only `JSFEAT_CONSTANTS.NORM_HAMMING` (exposed as `jsfeatNext.NORM_HAMMING`) is implemented. */
    public norm_type: number;
    /** When true, {@link match} keeps only mutually-best (query, train) pairs. */
    public cross_check: boolean;

    constructor(norm_type: number = JSFEAT_CONSTANTS.NORM_HAMMING, cross_check = false) {
        super();
        this.norm_type = norm_type;
        this.cross_check = cross_check;
    }

    /** SWAR population count — identical to the sample's `popcnt32`. */
    private static popcnt32(n: number): number {
        n -= (n >> 1) & 0x55555555;
        n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
        return (((n + (n >> 4)) & 0x0f0f0f0f) * 0x01010101) >> 24;
    }

    /**
     * Physical width of one descriptor row, in bytes.
     *
     * NOT `cols`. `matrix_t.allocate` sizes its buffer as
     * `cols * sizeof(type) * channel * rows`, so a row's storage depends on all
     * three. Two matrices can share a `cols` and still have different row
     * widths — a U8/C1 and a U8/C2 with `cols = 32` occupy 32 and 64 bytes —
     * which is why the stride check below compares this rather than `cols`.
     */
    private static rowBytes(m: matrix_t): number {
        return m.cols * m.channel * shared_data_type._get_data_type_size(m.type);
    }

    /**
     * Int32-word view over a descriptor matrix's full backing buffer, matching
     * `matrix_t.buffer.i32` — the same access the original sample uses.
     *
     * @throws {Error} if the descriptors are not `U8`, or if a row is not a
     *         whole number of 4-byte words.
     */
    private static words(descriptors: matrix_t): Int32Array {
        // Hamming over an i32 view only means anything for packed bytes. A F32
        // matrix would have its float bit patterns XORed and popcounted, which
        // produces numbers with no relation to descriptor similarity.
        if (!(descriptors.type & JSFEAT_CONSTANTS.U8_t)) {
            throw new Error("jsfeatNext.bfmatcher: descriptors must be U8");
        }
        const bytes = bfmatcher.rowBytes(descriptors);
        if ((bytes & 3) !== 0) {
            throw new Error(`jsfeatNext.bfmatcher: descriptor width must be a multiple of 4 bytes, got ${bytes}`);
        }
        return descriptors.buffer.i32;
    }

    /**
     * Int32 views over a query/train PAIR, plus the row stride in words.
     *
     * Both matrices are addressed with a single stride, so a width mismatch is
     * not a mild inconsistency: `train` rows would be read at `ti * word_len`,
     * an offset computed from the QUERY width. The reads walk across train row
     * boundaries and, past the end, an out-of-range `Int32Array` index yields
     * `undefined`, which XOR coerces to 0. The result is a full set of
     * confident, silently wrong Hamming distances rather than any error — the
     * matcher would report its best guess over garbage.
     *
     * Compares {@link rowBytes}, not `cols`, so a channel or element-type
     * difference cannot slip past a matching column count.
     *
     * @throws {Error} if the row widths differ, or either matrix is rejected by
     *         {@link words}.
     */
    private static pairWords(query: matrix_t, train: matrix_t): { qw: Int32Array; tw: Int32Array; word_len: number } {
        const qw = bfmatcher.words(query);
        const tw = bfmatcher.words(train);
        const qb = bfmatcher.rowBytes(query);
        const tb = bfmatcher.rowBytes(train);
        if (qb !== tb) {
            throw new Error(
                `jsfeatNext.bfmatcher: query and train descriptors must have the same row width, ` +
                    `got ${qb} and ${tb} bytes`
            );
        }
        return { qw, tw, word_len: qb >> 2 };
    }

    private static hamming(qw: Int32Array, qoff: number, tw: Int32Array, toff: number, word_len: number): number {
        let d = 0;
        for (let k = 0; k < word_len; ++k) {
            d += bfmatcher.popcnt32(qw[qoff + k] ^ tw[toff + k]);
        }
        return d;
    }

    /**
     * Nearest-neighbour match between two descriptor sets.
     *
     * With {@link cross_check} set, a pair is only kept when it is mutually
     * best: `query[i]`'s nearest neighbour is `train[j]`, AND `train[j]`'s
     * nearest neighbour (searched back over `query`) is `query[i]`.
     *
     * @param query        Query descriptors (U8, one row per descriptor).
     * @param train        Train descriptors, same row width as `query`.
     * @param max_distance Maximum Hamming distance to accept a pair.
     */
    match(query: matrix_t, train: matrix_t, max_distance = 256): match_t[] {
        const q_cnt = query.rows;
        const t_cnt = train.rows;
        const { qw, tw, word_len } = bfmatcher.pairWords(query, train);
        const out: match_t[] = [];

        if (!this.cross_check) {
            for (let qi = 0; qi < q_cnt; ++qi) {
                const qoff = qi * word_len;
                let best = 0x7fffffff;
                let best_idx = -1;
                for (let ti = 0; ti < t_cnt; ++ti) {
                    const d = bfmatcher.hamming(qw, qoff, tw, ti * word_len, word_len);
                    if (d < best) {
                        best = d;
                        best_idx = ti;
                    }
                }
                if (best_idx >= 0 && best <= max_distance) {
                    out.push(new match_t(qi, best_idx, best));
                }
            }
            return out;
        }

        // Cross-check needs every query's forward-best index before the
        // backward pass can run. Borrowed from the shared pool rather than a
        // plain allocation, per this repo's scratch-buffer convention.
        const fwd_node = this.cache.get_buffer(q_cnt << 2);
        const fwd = fwd_node.i32;

        for (let qi = 0; qi < q_cnt; ++qi) {
            const qoff = qi * word_len;
            let best = 0x7fffffff;
            let best_idx = -1;
            for (let ti = 0; ti < t_cnt; ++ti) {
                const d = bfmatcher.hamming(qw, qoff, tw, ti * word_len, word_len);
                if (d < best) {
                    best = d;
                    best_idx = ti;
                }
            }
            fwd[qi] = best_idx;
        }

        for (let qi = 0; qi < q_cnt; ++qi) {
            const ti = fwd[qi];
            if (ti < 0) continue;
            const toff = ti * word_len;
            let best = 0x7fffffff;
            let back_idx = -1;
            for (let qj = 0; qj < q_cnt; ++qj) {
                const d = bfmatcher.hamming(qw, qj * word_len, tw, toff, word_len);
                if (d < best) {
                    best = d;
                    back_idx = qj;
                }
            }
            if (back_idx === qi && best <= max_distance) {
                out.push(new match_t(qi, ti, best));
            }
        }

        this.cache.put_buffer(fwd_node);
        return out;
    }

    /**
     * k-nearest matches per query descriptor, each row sorted ascending by
     * distance.
     */
    knnMatch(query: matrix_t, train: matrix_t, k = 2): match_t[][] {
        const q_cnt = query.rows;
        const t_cnt = train.rows;
        const { qw, tw, word_len } = bfmatcher.pairWords(query, train);

        const result: match_t[][] = [];
        for (let qi = 0; qi < q_cnt; ++qi) {
            const qoff = qi * word_len;
            const top: match_t[] = [];
            for (let ti = 0; ti < t_cnt; ++ti) {
                const d = bfmatcher.hamming(qw, qoff, tw, ti * word_len, word_len);
                if (top.length < k) {
                    top.push(new match_t(qi, ti, d));
                    top.sort((a, b) => a.distance - b.distance);
                } else if (d < top[top.length - 1].distance) {
                    const slot = top[top.length - 1];
                    slot.queryIdx = qi;
                    slot.trainIdx = ti;
                    slot.distance = d;
                    top.sort((a, b) => a.distance - b.distance);
                }
            }
            result.push(top);
        }
        return result;
    }

    /**
     * Lowe's ratio test over the output of `knnMatch(query, train, 2)`: keeps
     * a query's best match only when it is meaningfully closer than the
     * second-best (guards against ambiguous, repeated-texture matches).
     *
     * An instance method, not `static`, even though it reads no instance
     * state: static methods are unreachable through a singleton instance
     * (`jsfeatNext.bfmatcher.ratio_test(...)` — this repo's calling
     * convention since 0.9.0 — would be `undefined` on a static declaration).
     * Confirmed empirically before fixing: an earlier draft declared this
     * `static`, following the #83 prototype literally, and the singleton
     * simply had no such method at runtime.
     */
    ratio_test(knn: match_t[][], ratio = 0.75): match_t[] {
        const good: match_t[] = [];
        for (let i = 0; i < knn.length; ++i) {
            const m = knn[i];
            if (m.length >= 2) {
                if (m[0].distance < ratio * m[1].distance) good.push(m[0]);
            } else if (m.length === 1) {
                good.push(m[0]);
            }
        }
        return good;
    }
}
