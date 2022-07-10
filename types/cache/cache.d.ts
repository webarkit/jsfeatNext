export default class cache {
    _pool_size: number;
    allocate(capacity: any, data_size: any): void;
    _pool_head: any;
    _pool_tail: any;
    get_buffer(size_in_bytes: any): any;
    put_buffer(node: any): void;
}
//# sourceMappingURL=cache.d.ts.map