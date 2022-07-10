export default class _pool_node_t {
    constructor(size_in_bytes: any);
    next: any;
    data: data_t;
    size: any;
    buffer: any;
    u8: Uint8Array;
    i32: Int32Array;
    f32: Float32Array;
    f64: Float64Array;
    resize(): void;
}
import data_t from "./data_t.js";
//# sourceMappingURL=_pool_node_t.d.ts.map