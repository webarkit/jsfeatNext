export interface IData_Type {
    _get_data_type: (type: number) => number;
    _get_channel: (type: number) => number;
    _get_data_type_size: (type: number) => number;
}

export class data_type implements IData_Type {
    private _data_type_size: Int32Array;
    constructor() {
        this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);
    }

    _get_data_type(type: number): number {
        return type & 0xff00;
    }

    _get_channel(type: number): number {
        return type & 0xff;
    }

    _get_data_type_size(type: number): number {
        return this._data_type_size[(type & 0xff00) >> 8];
    }
}
