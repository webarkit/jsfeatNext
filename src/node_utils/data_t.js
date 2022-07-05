export default class data_t  {
    constructor(size_in_bytes, buffer) {
        //super()
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