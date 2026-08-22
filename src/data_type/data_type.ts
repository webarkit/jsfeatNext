/*
 *  data_type.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 *  Portions of this file are derived from jsfeat
 *  (https://github.com/inspirit/jsfeat), Copyright (c) Eugene Zatepyakin,
 *  released under the MIT License.
 *
 */

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
export class data_type implements IData_Type {
    /**
     * Byte size per element, indexed by `(data_type_flag >> 8)`:
     * U8 → 1, S32/F32 → 4, S64/F64 → 8; unused slots are -1.
     */
    private readonly _data_type_size: Int32Array;

    constructor() {
        this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);
    }

    /**
     * @param type Packed type signature (e.g. `U8_t | C1_t`).
     * @returns The data-type flag alone (high byte), e.g. `U8_t`.
     */
    _get_data_type(type: number): number {
        return type & 0xff00;
    }

    /**
     * @param type Packed type signature.
     * @returns The channel count alone (low byte), 1–4.
     */
    _get_channel(type: number): number {
        return type & 0xff;
    }

    /**
     * @param type Packed type signature.
     * @returns Bytes per element for the signature's data type (1, 4 or 8).
     */
    _get_data_type_size(type: number): number {
        return this._data_type_size[(type & 0xff00) >> 8];
    }
}

/**
 * The library-wide `data_type` instance.
 *
 * `data_type` is stateless after construction — its lookup table is
 * `readonly` and never mutated — so a single shared instance serves every
 * caller. Constructing one per `matrix_t` allocated a fresh `Int32Array(17)`
 * on every matrix, which CPU profiling attributed 16.6% of `linalg.svd_invert`
 * to (see issue #159). Original jsfeat keeps the equivalent table as a single
 * module-scope constant; this restores that.
 *
 * Mirrors the `shared_cache` pattern in `src/core/core.ts`.
 */
export const shared_data_type = new data_type();
