import { IData_T } from './data_t';
export interface IPool_Node_T {
    resize: (size_in_bytes: number) => void;
}
export default class _pool_node_t implements IPool_Node_T {
    next: any;
    data?: IData_T;
    size: number;
    buffer: any;
    u8: Uint8Array;
    i32: Int32Array;
    f32: Float32Array;
    f64: Float64Array;
    constructor(size_in_bytes: number);
    resize(size_in_bytes: number): void;
}
