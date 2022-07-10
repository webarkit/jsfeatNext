export default class matrix_t {
    constructor(c: any, r: any, _data_type: any, _data_buffer: any);
    dt: data_type;
    type: number;
    channel: number;
    cols: number;
    rows: number;
    buffer: any;
    data: any;
    allocate(): void;
    copy_to(other: any): void;
    resize(c: any, r: any, ch: any): void;
}
import data_type from "../data_type/data_type.js";
//# sourceMappingURL=matrix_t.d.ts.map