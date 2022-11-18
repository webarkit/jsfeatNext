import { IData_T, data_t } from "./data_t";

export interface IPool_Node_T {
    resize: (size_in_bytes: number) => void;
}

export default class _pool_node_t implements IPool_Node_T {
    public next: any;
    public data?: IData_T;
    public size: number;
    public buffer: any;
    public u8: Uint8Array;
    public i32: Int32Array;
    public f32: Float32Array;
    public f64: Float64Array;

    constructor(size_in_bytes: number) {
        this.next = null;
        this.data = new data_t(size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }
    resize(size_in_bytes: number): void {
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
