export declare class linalg {
    eigenVV(A: {
        cols: any;
        type: number;
        data: any[];
    }, vects: {
        data: number[];
    }, vals?: {
        data: {
            [x: string]: any;
        };
    }): void;
    lu_solve(A: {
        cols: any;
        data: any;
    }, B: {
        data: any;
    }): void;
}
