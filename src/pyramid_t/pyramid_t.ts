import jsfeatNext from "../core/core";
import { matrix_t } from "../matrix_t/matrix_t";
import { imgproc } from "../imgproc/imgproc";

/**
 * Real implementation, moved out of the src/jsfeatNext.ts monolith (issue #47).
 * This file previously held a type-only stub — the implementation below is the
 * inline code from the monolith, verbatim (the only change: the constructor
 * instantiates the imgproc module directly instead of via the
 * jsfeatNext.imgproc static slot).
 */
export class pyramid_t extends jsfeatNext {
    public levels: number;
    public data: any;
    private pyrdown: any;

    constructor(levels: number) {
        super();
        this.levels = levels | 0;
        this.data = new Array(levels);
        const _imgproc = new imgproc();
        this.pyrdown = _imgproc.pyrdown;
    }

    allocate(start_w: number, start_h: number, data_type: number): void {
        let i = this.levels;
        while (--i >= 0) {
            this.data[i] = new matrix_t(start_w >> i, start_h >> i, data_type);
        }
    }

    build(input: matrix_t, skip_first_level: boolean): void {
        if (typeof skip_first_level === "undefined") {
            skip_first_level = true;
        }
        // just copy data to first level
        let i = 2,
            a = input,
            b: any = this.data[0];
        if (!skip_first_level) {
            let j = input.cols * input.rows;
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
