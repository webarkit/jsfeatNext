import _pool_node_t from './node_utils/_pool_node_t.js'
import data_t from './node_utils/data_t.js'
import imgproc from './imgproc/imgproc.js'

export default class jsfeatNext {
    constructor() {
        this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);
        this.version = "0.1.0";
        console.log("jsfeatNext version: ", this.version);
    }

    // CONSTANTS
    static EPSILON = 0.0000001192092896;
    static FLT_MIN = 1E-37;
    static U8_t = 0x0100;
    static S32_t = 0x0200;
    static F32_t = 0x0400;
    static S64_t = 0x0800;
    static F64_t = 0x1000;
    static C1_t = 0x01;
    static C2_t = 0x02;
    static C3_t = 0x03;
    static C4_t = 0x04;

    // color conversion
    static COLOR_RGBA2GRAY = 0;
    static COLOR_RGB2GRAY = 1;
    static COLOR_BGRA2GRAY = 2;
    static COLOR_BGR2GRAY = 3;

    // box blur option
    static BOX_BLUR_NOSCALE = 0x01;
    // svd options
    static SVD_U_T = 0x01;
    static SVD_V_T = 0x02;

    get_data_type(type) {
        return (type & 0xFF00);
    }

    get_channel(type) {
        return (type & 0xFF);
    }

    get_data_type_size(type) {
        return this._data_type_size[(type & 0xFF00) >> 8];
    }
}

jsfeatNext.data_t = data_t

jsfeatNext.matrix_t = class matrix_t extends jsfeatNext {
    constructor(c, r, data_type, data_buffer) {
        super()
        this.type = this.get_data_type(data_type) | 0;
        this.channel = this.get_channel(data_type) | 0;
        this.cols = c | 0;
        this.rows = r | 0;
        if (typeof data_buffer === "undefined") {
            this.allocate();
        } else {
            this.buffer = data_buffer;
            // data user asked for
            this.data = this.type & U8_t ? this.buffer.u8 : (this.type & S32_t ? this.buffer.i32 : (this.type & F32_t ? this.buffer.f32 : this.buffer.f64));
        }
    }
    allocate() {
        // clear references
        delete this.data;
        delete this.buffer;
        //
        this.buffer = new jsfeatNext.data_t((this.cols * this.get_data_type_size(this.type) * this.channel) * this.rows);
        this.data = this.type & jsfeatNext.U8_t ? this.buffer.u8 : (this.type & jsfeatNext.S32_t ? this.buffer.i32 : (this.type & jsfeatNext.F32_t ? this.buffer.f32 : this.buffer.f64));
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
        if (typeof ch === "undefined") { ch = this.channel; }
        // relocate buffer only if new size doesnt fit
        var new_size = (c * this.get_data_type_size(this.type) * ch) * r;
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

jsfeatNext.pyramid_t = class pyramid_t extends jsfeatNext {
    constructor(levels) {
        super();
        this.levels = levels | 0;
        this.data = new Array(levels);
        //jsfeatNext.imgproc.pyrdown is not yet implemented... 
        this.pyrdown = jsfeatNext.imgproc.pyrdown;
    }

    allocate(start_w, start_h, data_type) {
        var i = this.levels;
        while (--i >= 0) {
            this.data[i] = new jsfeatNext.matrix_t(start_w >> i, start_h >> i, data_type);
        }
    }

    build(input, skip_first_level) {
        if (typeof skip_first_level === "undefined") { skip_first_level = true; }
        // just copy data to first level
        var i = 2, a = input, b = this.data[0];
        if (!skip_first_level) {
            var j = input.cols * input.rows;
            while (--j >= 0) {
                b.data[j] = input.data[j];
            }
        }
        b = this.data[1];
        this.pyrdown(a, b);
        for (; i < this.levels; ++i) {
            a = b;
            b = this.data[i];
            this.pyrdown(a, b);
        }
    }
}

jsfeatNext.keypoint_t = class keypoint_t extends jsfeatNext {
    constructor(x, y, score, level, angle) {
        super();
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        if (typeof score === "undefined") { score = 0; }
        if (typeof level === "undefined") { level = 0; }
        if (typeof angle === "undefined") { angle = -1.0; }

        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}

jsfeatNext.cache = class cache extends jsfeatNext {
    constructor() {
        super()
        this._pool_head;
        this._pool_tail;
        this._pool_size = 0;
    }
    allocate(capacity, data_size) {
        this._pool_head = this._pool_tail = new _pool_node_t(data_size);
        for (var i = 0; i < capacity; ++i) {
            var node = new _pool_node_t(data_size);
            this._pool_tail = this._pool_tail.next = node;

            this._pool_size++;
        }
    }
    get_buffer(size_in_bytes) {
        // assume we have enough free nodes
        var node = this._pool_head;
        this._pool_head = this._pool_head.next;
        this._pool_size--;

        if (size_in_bytes > node.size) {
            node.resize(size_in_bytes);
        }

        return node;
    }
    put_buffer(node) {
        this._pool_tail = this._pool_tail.next = node;
        this._pool_size++;
    }
}

jsfeatNext.imgproc = imgproc;