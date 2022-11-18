import { matrix_t } from "../matrix_t/matrix_t";
export default class matmath {
    constructor();
    identity(M: matrix_t, value: number): void;
    transpose(At: matrix_t, A: matrix_t): void;
    multiply(C: matrix_t, A: matrix_t, B: matrix_t): void;
    multiply_ABt(C: matrix_t, A: matrix_t, B: matrix_t): void;
    multiply_AtB(C: matrix_t, A: matrix_t, B: matrix_t): void;
    multiply_AAt(C: matrix_t, A: matrix_t): void;
    multiply_AtA(C: matrix_t, A: matrix_t): void;
    identity_3x3(M: matrix_t, value: number): void;
    invert_3x3(from: matrix_t, to: matrix_t): void;
    multiply_3x3(C: matrix_t, A: matrix_t, B: matrix_t): void;
    mat3x3_determinant(M: matrix_t): number;
    determinant_3x3(M11: number, M12: number, M13: number, M21: number, M22: number, M23: number, M31: number, M32: number, M33: number): number;
}
