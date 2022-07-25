export declare class yape {
    private level_tables;
    private tau;
    constructor();
    init(width: number, height: number, radius: number, pyramid_levels: number): void;
    detect(src: {
        data: any;
        cols: number;
        rows: number;
    }, points: any[], border: number): number;
}
