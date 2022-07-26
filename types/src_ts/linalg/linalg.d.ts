import { matrix_t } from '../matrix_t/matrix_t';
export declare class linalg {
    eigenVV(A: matrix_t, vects: matrix_t, vals?: {
        data: {
            [x: string]: any;
        };
    }): void;
    lu_solve(A: matrix_t, B: {
        data: any;
    }): number;
}
