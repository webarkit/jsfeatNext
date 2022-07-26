export class data_t {
    size;
    buffer;
    u8;
    i32;
    f32;
    f64;
    constructor(size_in_bytes, buffer) {
        this.size = ((size_in_bytes + 7) | 0) & -8;
        if (typeof buffer === "undefined") {
            this.buffer = new ArrayBuffer(this.size);
        }
        else {
            this.buffer = buffer;
            this.size = buffer.length;
        }
        this.u8 = new Uint8Array(this.buffer);
        this.i32 = new Int32Array(this.buffer);
        this.f32 = new Float32Array(this.buffer);
        this.f64 = new Float64Array(this.buffer);
    }
}
//# sourceMappingURL=data_t.js.map