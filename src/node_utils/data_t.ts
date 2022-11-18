export interface IData_T {
    size: number;
    buffer: ArrayBuffer;
    u8: Uint8Array;
    i32: Int32Array;
    f32: Float32Array;
    f64: Float64Array;
}

export class data_t implements IData_T {
    public size: number;
    public buffer: ArrayBuffer;
    public u8: Uint8Array;
    public i32: Int32Array;
    public f32: Float32Array;
    public f64: Float64Array;
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
