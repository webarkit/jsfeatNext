import { data_type } from "../data_type/data_type";
import { data_t } from "../node_utils/data_t";
import { JSFEAT_CONSTANTS } from "../constants/constants";
export class matrix_t {
    dt;
    type;
    channel;
    cols;
    rows;
    data;
    buffer;
    constructor(c, r, _data_type, _data_buffer) {
        this.dt = new data_type();
        this.type = this.dt._get_data_type(_data_type) | 0;
        this.channel = this.dt._get_channel(_data_type) | 0;
        this.cols = c | 0;
        this.rows = r | 0;
        if (typeof _data_buffer === "undefined") {
            this.allocate();
        }
        else {
            this.buffer = _data_buffer;
            this.data =
                this.type & JSFEAT_CONSTANTS.U8_t
                    ? this.buffer.u8
                    : this.type & JSFEAT_CONSTANTS.S32_t
                        ? this.buffer.i32
                        : this.type & JSFEAT_CONSTANTS.F32_t
                            ? this.buffer.f32
                            : this.buffer.f64;
        }
    }
    allocate() {
        delete this.data;
        delete this.buffer;
        this.buffer = new data_t(this.cols * this.dt._get_data_type_size(this.type) * this.channel * this.rows);
        this.data =
            this.type & JSFEAT_CONSTANTS.U8_t
                ? this.buffer.u8
                : this.type & JSFEAT_CONSTANTS.S32_t
                    ? this.buffer.i32
                    : this.type & JSFEAT_CONSTANTS.F32_t
                        ? this.buffer.f32
                        : this.buffer.f64;
    }
    copy_to(other) {
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
    resize(c, r, ch) {
        if (typeof ch === "undefined") {
            ch = this.channel;
        }
        var new_size = c * this.dt._get_data_type_size(this.type) * ch * r;
        if (new_size > this.buffer.size) {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
            this.allocate();
        }
        else {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
        }
    }
}
//# sourceMappingURL=matrix_t.js.map