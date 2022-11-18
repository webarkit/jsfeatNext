export class data_type {
    _data_type_size;
    constructor() {
        this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);
    }
    _get_data_type(type) {
        return type & 0xff00;
    }
    _get_channel(type) {
        return type & 0xff;
    }
    _get_data_type_size(type) {
        return this._data_type_size[(type & 0xff00) >> 8];
    }
}
//# sourceMappingURL=data_type.js.map