export function precompute_directions(step: any, dirs: any, R: any): number;
export function third_check(Sb: any, off: any, step: any): number;
export function is_local_maxima(p: any, off: any, v: any, step: any, neighborhood: any): boolean;
export function perform_one_point(I: any, x: any, Scores: any, Im: any, Ip: any, dirs: any, opposite: any, dirs_nb: any): void;
export class lev_table_t {
    constructor(w: any, h: any, r: any);
    dirs: Int32Array;
    dirs_count: number;
    scores: Int32Array;
    radius: number;
}
//# sourceMappingURL=yape_utils.d.ts.map