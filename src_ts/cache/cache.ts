import _pool_node_t from './../node_utils/_pool_node_t'

export interface ICache {
    allocate: (capacity: any, data_size: number) => void;
    get_buffer: (size_in_bytes: number) => any;
    put_buffer: (node: any) => void;
}

export class cache implements ICache {
    private _pool_head: any;
    private _pool_tail: any;
    private _pool_size: number;
    constructor() {
        this._pool_head;
        this._pool_tail;
        this._pool_size = 0;
    }
    allocate(capacity: any, data_size: number): void {
        this._pool_head = this._pool_tail = new _pool_node_t(data_size);
        for (var i = 0; i < capacity; ++i) {
            var node = new _pool_node_t(data_size);
            this._pool_tail = this._pool_tail.next = node;

            this._pool_size++;
        }
    }
    get_buffer(size_in_bytes: number) {
        // assume we have enough free nodes
        var node = this._pool_head;
        this._pool_head = this._pool_head.next;
        this._pool_size--;

        if (size_in_bytes > node.size) {
            node.resize(size_in_bytes);
        }

        return node;
    }
    put_buffer(node: any) {
        this._pool_tail = this._pool_tail.next = node;
        this._pool_size++;
    }
}