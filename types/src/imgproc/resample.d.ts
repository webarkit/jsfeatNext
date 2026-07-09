import { matrix_t } from '../matrix_t/matrix_t';
import { cache } from '../cache/cache';
/**
 * Area-average downsampling for `U8` images — the fixed-point fast path of
 * `imgproc.resample`, using 8.8 fixed-point weights to avoid float math.
 * Only valid when the area ratio `(w*h)/(nw*nh)` is below 256.
 *
 * @param src   Source image (`U8`, 1–4 channels).
 * @param dst   Destination image, already sized to `nw`×`nh`.
 * @param cache Buffer pool used for the row accumulators and offset table.
 * @param nw    Target width (must be < source width).
 * @param nh    Target height (must be < source height).
 */
export declare function _resample_u8(src: matrix_t, dst: matrix_t, cache: cache, nw: number, nh: number): void;
/**
 * Area-average downsampling in floating point — the general path of
 * `imgproc.resample`, used for non-`U8` data or large scale factors.
 *
 * @param src   Source image/matrix (1–4 channels).
 * @param dst   Destination, already sized to `nw`×`nh`.
 * @param cache Buffer pool used for the row accumulators and offset table.
 * @param nw    Target width (must be < source width).
 * @param nh    Target height (must be < source height).
 */
export declare function _resample(src: matrix_t, dst: matrix_t, cache: cache, nw: number, nh: number): void;
