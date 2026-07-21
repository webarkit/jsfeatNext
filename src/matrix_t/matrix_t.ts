import { IData_Type, data_type } from "../data_type/data_type";
import { data_t } from "../node_utils/data_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
import type { TypedArray } from "../types";

/**
 * Public shape of {@link matrix_t}: a 2D dense matrix (or image) backed by a
 * typed array.
 */
export interface IMatrix_T {
    /** Number of columns (image width). */
    cols: number;
    /** Number of rows (image height). */
    rows: number;
    /** Data-type component of the matrix type signature (e.g. `U8_t`, `F32_t`). */
    type: number;
    /** Number of interleaved channels per element (1–4). */
    channel: number;
    /** The typed-array view holding the matrix elements, row-major. */
    data: TypedArray;
    /** The underlying {@link data_t} buffer that `data` is a view over. */
    buffer: data_t;
    /** (Re)allocates the backing buffer from the current cols/rows/channel/type. */
    allocate: () => void;
    /** Copies this matrix's elements into another matrix of at least equal size. */
    copy_to: (other: IMatrix_T) => void;
    /** Changes the logical dimensions, reallocating only when the buffer is too small. */
    resize: (c: number, r: number, ch: number) => void;
}

/**
 * The fundamental data container of jsfeatNext: a dense, row-major 2D matrix
 * backed by a single typed array. Used for grayscale images, multi-channel
 * derivative maps, transformation matrices and linear-algebra operands alike.
 *
 * The element type and channel count are packed into a single type signature,
 * e.g. `jsfeatNext.U8_t | jsfeatNext.C1_t` for an 8-bit single-channel image
 * or `jsfeatNext.F32_t | jsfeatNext.C1_t` for a float matrix.
 *
 * Mirrors `jsfeat.matrix_t` from the original library.
 *
 * @example
 * ```ts
 * const img = new matrix_t(640, 480, jsfeatNext.U8_t | jsfeatNext.C1_t);
 * img.data[0] = 255; // top-left pixel
 * ```
 */
export class matrix_t implements IMatrix_T {
    /** Data-type helper used to decode the packed type signature. */
    private dt: IData_Type;
    /** Data-type component of the packed type signature (`U8_t`, `S32_t`, `F32_t`, `F64_t`). */
    public type: number;
    /** Number of interleaved channels per element (1–4). */
    public channel: number;
    /** Number of columns (image width). */
    public cols: number;
    /** Number of rows (image height). */
    public rows: number;
    /**
     * Typed-array view over {@link buffer} matching {@link type}:
     * `Uint8Array`, `Int32Array`, `Float32Array` or `Float64Array`.
     * Element `(row, col, ch)` lives at index `(row * cols + col) * channel + ch`.
     */
    public data: TypedArray;
    /** Raw backing storage; several views of it are exposed through {@link data}. */
    public buffer: data_t;

    /**
     * @param c            Number of columns (width).
     * @param r            Number of rows (height).
     * @param _data_type   Packed type signature, e.g. `U8_t | C1_t`.
     * @param _data_buffer Optional pre-existing buffer to wrap instead of
     *                     allocating a new one (used with cache-pool buffers).
     */
    constructor(c: number, r: number, _data_type: number, _data_buffer?: data_t) {
        this.dt = new data_type();
        this.type = this.dt._get_data_type(_data_type) | 0;
        this.channel = this.dt._get_channel(_data_type) | 0;
        this.cols = c | 0;
        this.rows = r | 0;
        if (typeof _data_buffer === "undefined") {
            this.allocate();
        } else {
            this.buffer = _data_buffer;
            // data user asked for
            this.data =
                this.type & JSFEAT_CONSTANTS.U8_t
                    ? this.buffer.u8
                    : this.type & JSFEAT_CONSTANTS.S32_t
                      ? this.buffer.i32
                      : this.type & JSFEAT_CONSTANTS.F32_t
                        ? this.buffer.f32
                        : this.buffer.f64;
        }
    }

    /**
     * Allocates a fresh backing buffer sized from the current
     * `cols * rows * channel * sizeof(type)` and points {@link data} at the
     * view matching {@link type}. Any previous buffer reference is dropped.
     */
    allocate(): void {
        // clear references
        delete this.data;
        delete this.buffer;
        //
        this.buffer = new data_t(this.cols * this.dt._get_data_type_size(this.type) * this.channel * this.rows);
        this.data =
            this.type & JSFEAT_CONSTANTS.U8_t
                ? this.buffer.u8
                : this.type & JSFEAT_CONSTANTS.S32_t
                  ? this.buffer.i32
                  : this.type & JSFEAT_CONSTANTS.F32_t
                    ? this.buffer.f32
                    : this.buffer.f64;
    }

    /**
     * Copies every element of this matrix into `other` (unrolled by 4 for
     * speed). The destination must be at least `cols * rows * channel`
     * elements large; no bounds checking is performed.
     *
     * @param other Destination matrix receiving the element values.
     */
    copy_to(other: IMatrix_T): void {
        const od = other.data,
            td = this.data;
        let i = 0,
            n = (this.cols * this.rows * this.channel) | 0;
        for (; i < n - 4; i += 4) {
            od[i] = td[i];
            od[i + 1] = td[i + 1];
            od[i + 2] = td[i + 2];
            od[i + 3] = td[i + 3];
        }
        for (; i < n; ++i) {
            od[i] = td[i];
        }
    }

    /**
     * Changes the logical dimensions of the matrix. The backing buffer is
     * reallocated only when the new size does not fit in the current one;
     * otherwise the existing storage (and its contents) are reused.
     *
     * @param c  New number of columns.
     * @param r  New number of rows.
     * @param ch New channel count; defaults to the current {@link channel}.
     */
    resize(c: number, r: number, ch: number): void {
        if (typeof ch === "undefined") {
            ch = this.channel;
        }
        // relocate buffer only if new size doesnt fit
        const new_size = c * this.dt._get_data_type_size(this.type) * ch * r;
        if (new_size > this.buffer.size) {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
            this.allocate();
        } else {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
        }
    }
}
