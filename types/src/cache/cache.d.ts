import { default as _pool_node_t } from './../node_utils/_pool_node_t';
/**
 * Public shape of {@link cache}: a recycling pool of scratch buffers used by
 * the algorithm modules to avoid per-call allocations in hot loops.
 */
export interface ICache {
    /** Pre-allocates the pool with `capacity` nodes of `data_size` bytes each. */
    allocate: (capacity: any, data_size: number) => void;
    /** Borrows a node with at least `size_in_bytes` of storage from the pool. */
    get_buffer: (size_in_bytes: number) => _pool_node_t;
    /** Returns a previously borrowed node to the pool. */
    put_buffer: (node: any) => void;
}
/**
 * A linked-list pool of reusable scratch buffers ({@link _pool_node_t}).
 * Algorithms borrow a buffer with {@link get_buffer}, use its typed-array
 * views (`u8`/`i32`/`f32`/`f64`), and must hand it back with
 * {@link put_buffer} when done.
 *
 * Mirrors `jsfeat.cache` from the original library: since 0.9.0 (issue #41)
 * jsfeatNext keeps a single library-wide pool too — the `shared_cache`
 * exported by `src/core/core.ts` and exposed publicly as `jsfeatNext.cache`.
 */
export declare class cache implements ICache {
    /** First free node in the pool (borrow end of the list). */
    private _pool_head;
    /** Last node in the pool (return end of the list). */
    private _pool_tail;
    /** Number of nodes currently available in the pool. */
    private _pool_size;
    constructor();
    /**
     * Fills the pool with `capacity` nodes, each backed by `data_size` bytes.
     * Must be called before the first {@link get_buffer}.
     *
     * @param capacity  Number of pool nodes to create.
     * @param data_size Initial byte size of each node's buffer.
     */
    allocate(capacity: any, data_size: number): void;
    /**
     * Borrows the next free node from the pool, growing its buffer when it is
     * smaller than `size_in_bytes`. The pool assumes enough free nodes are
     * available (no underflow check — callers must balance every `get` with a
     * {@link put_buffer}).
     *
     * @param size_in_bytes Minimum byte size the caller needs.
     * @returns A pool node whose typed-array views are at least the requested size.
     */
    get_buffer(size_in_bytes: number): _pool_node_t;
    /**
     * Returns a borrowed node to the tail of the pool, making it available to
     * subsequent {@link get_buffer} calls.
     *
     * @param node The node previously obtained from {@link get_buffer}.
     */
    put_buffer(node: any): void;
}
