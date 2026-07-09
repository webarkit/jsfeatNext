/** Public shape of {@link data_t}: raw storage with multi-type views. */
export interface IData_T {
    /** Byte size of the buffer (aligned to a multiple of 8). */
    size: number;
    /** The underlying `ArrayBuffer`. */
    buffer: ArrayBuffer;
    /** Unsigned 8-bit view over {@link buffer}. */
    u8: Uint8Array;
    /** Signed 32-bit integer view over {@link buffer}. */
    i32: Int32Array;
    /** 32-bit float view over {@link buffer}. */
    f32: Float32Array;
    /** 64-bit float view over {@link buffer}. */
    f64: Float64Array;
}

/**
 * Raw byte storage exposing typed-array views of every element type the
 * library uses. `matrix_t` and the cache pool build on it: allocating one
 * buffer and reading it as `u8`/`i32`/`f32`/`f64` lets algorithms reinterpret
 * scratch memory without extra allocations.
 *
 * The byte size is aligned up to a multiple of 8 so the `f64` view is valid.
 */
export class data_t implements IData_T {
    /** Byte size of the buffer (aligned to a multiple of 8). */
    public size: number;
    /** The underlying `ArrayBuffer`. */
    public buffer: ArrayBuffer;
    /** Unsigned 8-bit view over {@link buffer}. */
    public u8: Uint8Array;
    /** Signed 32-bit integer view over {@link buffer}. */
    public i32: Int32Array;
    /** 32-bit float view over {@link buffer}. */
    public f32: Float32Array;
    /** 64-bit float view over {@link buffer}. */
    public f64: Float64Array;

    /**
     * @param size_in_bytes Requested byte size; rounded up to a multiple of 8.
     * @param buffer        Optional existing buffer to wrap instead of
     *                      allocating (its length becomes {@link size}).
     */
    constructor(size_in_bytes: number, buffer?: any) {
        // we need align size to multiple of 8
        this.size = ((size_in_bytes + 7) | 0) & -8;
        if (typeof buffer === "undefined") {
            this.buffer = new ArrayBuffer(this.size);
        } else {
            this.buffer = buffer;
            this.size = buffer.length;
        }
        this.u8 = new Uint8Array(this.buffer);
        this.i32 = new Int32Array(this.buffer);
        this.f32 = new Float32Array(this.buffer);
        this.f64 = new Float64Array(this.buffer);
    }
}
