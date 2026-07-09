/**
 * Helper for decoding the packed matrix type signature
 * (see `JSFEAT_CONSTANTS`): data-type flags live in the high byte,
 * the channel count in the low byte.
 */
export interface IData_Type {
    /** Extracts the data-type component (`U8_t`, `S32_t`, …) from a packed signature. */
    _get_data_type: (type: number) => number;
    /** Extracts the channel count (1–4) from a packed signature. */
    _get_channel: (type: number) => number;
    /** Returns the byte size of one element of the given data type. */
    _get_data_type_size: (type: number) => number;
}
/**
 * Decodes packed type signatures such as `U8_t | C1_t` into their data-type,
 * channel-count and per-element byte-size components. Used internally by
 * `matrix_t` when allocating storage.
 */
export declare class data_type implements IData_Type {
    /**
     * Byte size per element, indexed by `(data_type_flag >> 8)`:
     * U8 → 1, S32/F32 → 4, S64/F64 → 8; unused slots are -1.
     */
    private readonly _data_type_size;
    constructor();
    /**
     * @param type Packed type signature (e.g. `U8_t | C1_t`).
     * @returns The data-type flag alone (high byte), e.g. `U8_t`.
     */
    _get_data_type(type: number): number;
    /**
     * @param type Packed type signature.
     * @returns The channel count alone (low byte), 1–4.
     */
    _get_channel(type: number): number;
    /**
     * @param type Packed type signature.
     * @returns Bytes per element for the signature's data type (1, 4 or 8).
     */
    _get_data_type_size(type: number): number;
}
