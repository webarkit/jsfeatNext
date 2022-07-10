export default class matmath {
    identity(M: any, value: any): void;
    transpose(At: any, A: any): void;
    multiply(C: any, A: any, B: any): void;
    multiply_ABt(C: any, A: any, B: any): void;
    multiply_AtB(C: any, A: any, B: any): void;
    multiply_AAt(C: any, A: any): void;
    multiply_AtA(C: any, A: any): void;
    identity_3x3(M: any, value: any): void;
    invert_3x3(from: any, to: any): void;
    multiply_3x3(C: any, A: any, B: any): void;
    mat3x3_determinant(M: any): number;
    determinant_3x3(M11: any, M12: any, M13: any, M21: any, M22: any, M23: any, M31: any, M32: any, M33: any): number;
}
//# sourceMappingURL=matmath.d.ts.map