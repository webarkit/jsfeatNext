import _pool_node_t from '../node_utils/_pool_node_t.js'

export default class cache {
    constructor() {
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