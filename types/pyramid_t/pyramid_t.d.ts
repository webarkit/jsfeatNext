export default class pyramid_t {
    constructor(levels: any);
    levels: number;
    data: any[];
    pyrdown: (src: any, dst: any, sx: any, sy: any) => void;
    allocate(start_w: any, start_h: any, data_type: any): void;
    build(input: any, skip_first_level: any): void;
}
//# sourceMappingURL=pyramid_t.d.ts.map