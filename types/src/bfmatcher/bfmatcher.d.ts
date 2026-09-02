import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
import { match_t } from './match_t';
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
export declare class bfmatcher extends jsfeatNext {
    /** Distance norm in use. Only `JSFEAT_CONSTANTS.NORM_HAMMING` (exposed as `jsfeatNext.NORM_HAMMING`) is implemented. */
    norm_type: number;
    /** When true, {@link match} keeps only mutually-best (query, train) pairs. */
    cross_check: boolean;
    constructor(norm_type?: number, cross_check?: boolean);
    /** SWAR population count — identical to the sample's `popcnt32`. */
    private static popcnt32;
    /**
     * Int32-word view over a descriptor matrix's full backing buffer, matching
     * `matrix_t.buffer.i32` — the same access the original sample uses.
     *
     * @throws {Error} if `descriptors.cols` is not a multiple of 4 bytes.
     */
    private static words;
    private static hamming;
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
    match(query: matrix_t, train: matrix_t, max_distance?: number): match_t[];
    /**
     * k-nearest matches per query descriptor, each row sorted ascending by
     * distance.
     */
    knnMatch(query: matrix_t, train: matrix_t, k?: number): match_t[][];
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
    ratio_test(knn: match_t[][], ratio?: number): match_t[];
}
