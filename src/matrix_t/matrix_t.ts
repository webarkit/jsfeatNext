import { IData_Type, data_type } from '../data_type/data_type'
import { data_t } from '../node_utils/data_t'
import { JSFEAT_CONSTANTS } from '../constants/constants'

export interface IMatrix_T {
    cols: number;
    rows: number;
    type: number;
    channel: number;
    data: any;
    buffer: data_t
    allocate: () => void;
    copy_to: (other: any) => void;
    resize: (c: number, r: number, ch: any) => void;
}
export class matrix_t implements IMatrix_T {
    private dt: IData_Type;
    public type: number;
    public channel: number;
    public cols: number;
    public rows: number;
    public data: any;
    public buffer: data_t;
    constructor(c: number, r: number, _data_type: number, _data_buffer?: data_t) {
        this.dt = new data_type();
        this.type = this.dt._get_data_type(_data_type) | 0;
        this.channel = this.dt._get_channel(_data_type) | 0;
        this.cols = c | 0;
        this.rows = r | 0;
        if (typeof _data_buffer === "undefined") {
            this.allocate();
        } else {
            this.buffer = _data_buffer;
            // data user asked for
            this.data = this.type & JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : (this.type & JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : (this.type & JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64));
        }
    }
    allocate(): void {
        // clear references
        delete this.data;
        delete this.buffer;
        //
        this.buffer = new data_t((this.cols * this.dt._get_data_type_size(this.type) * this.channel) * this.rows);
        this.data = this.type & JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : (this.type & JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : (this.type & JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64));
    }
    copy_to(other: IMatrix_T): void {
        var od = other.data, td = this.data;
        var i = 0, n = (this.cols * this.rows * this.channel) | 0;
        for (; i < n - 4; i += 4) {
            od[i] = td[i];
            od[i + 1] = td[i + 1];
            od[i + 2] = td[i + 2];
            od[i + 3] = td[i + 3];
        }
        for (; i < n; ++i) {
            od[i] = td[i];
        }
    }
    resize(c: number, r: number, ch: number): void {
        if (typeof ch === "undefined") { ch = this.channel; }
        // relocate buffer only if new size doesnt fit
        var new_size = (c * this.dt._get_data_type_size(this.type) * ch) * r;
        if (new_size > this.buffer.size) {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
            this.allocate();
        } else {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
        }
    }
}
