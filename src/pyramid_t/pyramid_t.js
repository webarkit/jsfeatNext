import imgproc from '../imgproc/imgproc.js';

export default class pyramid_t {
    cconstructor(levels) {
        this.levels = levels | 0;
        this.data = new Array(levels);
        //jsfeatNext.imgproc.pyrdown is not yet implemented... 
        this.pyrdown = new imgproc.pyrdown;
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