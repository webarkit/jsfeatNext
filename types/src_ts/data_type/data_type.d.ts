export interface IData_Type {
    _get_data_type: (type: number) => number;
    _get_channel: (type: number) => number;
    _get_data_type_size: (type: number) => number;
}
export declare class data_type implements IData_Type {
    private _data_type_size;
    constructor();
    _get_data_type(type: number): number;
    _get_channel(type: number): number;
    _get_data_type_size(type: number): number;
}
