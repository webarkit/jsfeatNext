import { data_t } from "./data_t";
export default class _pool_node_t {
    next;
    data;
    size;
    buffer;
    u8;
    i32;
    f32;
    f64;
    constructor(size_in_bytes) {
        this.next = null;
        this.data = new data_t(size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }
    resize(size_in_bytes) {
        delete this.data;
        this.data = new data_t(size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }
}
//# sourceMappingURL=_pool_node_t.js.map