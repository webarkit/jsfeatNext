export declare function _resample_u8(src: {
    channel: any;
    cols: any;
    rows: any;
    data: any;
}, dst: {
    data: any;
}, cache: {
    get_buffer: (arg0: number) => any;
    put_buffer: (arg0: any) => void;
}, nw: number, nh: number): void;
export declare function _resample(src: {
    channel: any;
    cols: any;
    rows: any;
    data: any;
}, dst: {
    data: any;
}, cache: {
    get_buffer: (arg0: number) => any;
    put_buffer: (arg0: any) => void;
}, nw: number, nh: number): void;
