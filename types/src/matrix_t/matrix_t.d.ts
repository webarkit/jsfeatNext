import { data_t } from '../node_utils/data_t';
export interface IMatrix_T {
    allocate: () => void;
    copy_to: (other: any) => void;
    resize: (c: number, r: number, ch: any) => void;
}
export declare class matrix_t implements IMatrix_T {
    private dt;
    type: number;
    channel: number;
    cols: number;
    rows: number;
    data: any;
    buffer: data_t;
    constructor(c: number, r: number, _data_type: number, _data_buffer?: data_t);
    allocate(): void;
    copy_to(other: any): void;
    resize(c: number, r: number, ch: number): void;
}
