export declare function precompute_directions(step: number, dirs: Int32Array, R: number): number;
export declare function third_check(Sb: Int32Array | number[], off: number, step: number): number;
export declare function is_local_maxima(p: Int32Array, off: number, v: number, step: number, neighborhood: number): boolean;
export declare function perform_one_point(I: {
    [x: string]: number;
}, x: number, Scores: Int32Array, Im: number, Ip: number, dirs: any[] | Int32Array, opposite: number, dirs_nb: number): void;
export declare class lev_table_t {
    dirs: Int32Array;
    dirs_count: number;
    scores: Int32Array;
    radius: number;
    constructor(w: number, h: number, r: number);
}
