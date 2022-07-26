export interface IData_T {
    size: number;
    buffer: ArrayBuffer;
    u8: Uint8Array;
    i32: Int32Array;
    f32: Float32Array;
    f64: Float64Array;
}
export declare class data_t implements IData_T {
    size: number;
    buffer: ArrayBuffer;
    u8: Uint8Array;
    i32: Int32Array;
    f32: Float32Array;
    f64: Float64Array;
    constructor(size_in_bytes: number, buffer?: any);
}
