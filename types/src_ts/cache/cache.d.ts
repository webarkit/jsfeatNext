export interface ICache {
    allocate: (capacity: any, data_size: number) => void;
    get_buffer: (size_in_bytes: number) => any;
    put_buffer: (node: any) => void;
}
export declare class cache implements ICache {
    private _pool_head;
    private _pool_tail;
    private _pool_size;
    constructor();
    allocate(capacity: any, data_size: number): void;
    get_buffer(size_in_bytes: number): any;
    put_buffer(node: any): void;
}
