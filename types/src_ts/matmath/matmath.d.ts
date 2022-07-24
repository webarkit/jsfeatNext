export default class matmath {
    constructor();
    identity(M: {
        data: any;
        rows: any;
        cols: any;
    }, value: number): void;
    transpose(At: {
        data: any;
    }, A: {
        rows: any;
        cols: any;
        data: any;
    }): void;
    multiply(C: {
        data: any;
    }, A: {
        cols: any;
        rows: any;
        data: any;
    }, B: {
        cols: any;
        data: any;
    }): void;
    multiply_ABt(C: {
        data: any;
    }, A: {
        cols: any;
        rows: any;
        data: any;
    }, B: {
        rows: any;
        data: any;
    }): void;
    multiply_AtB(C: {
        data: any;
    }, A: {
        cols: any;
        rows: any;
        data: any;
    }, B: {
        cols: any;
        data: any;
    }): void;
    multiply_AAt(C: {
        data: any;
    }, A: {
        cols: any;
        rows: any;
        data: any;
    }): void;
    multiply_AtA(C: {
        data: any;
    }, A: {
        cols: any;
        rows: any;
        data: any;
    }): void;
    identity_3x3(M: {
        data: any;
    }, value: number): void;
    invert_3x3(from: {
        data: any;
    }, to: {
        data: any;
    }): void;
    multiply_3x3(C: {
        data: any;
    }, A: {
        data: any;
    }, B: {
        data: any;
    }): void;
    mat3x3_determinant(M: {
        data: any;
    }): number;
    determinant_3x3(M11: number, M12: number, M13: number, M21: number, M22: number, M23: number, M31: number, M32: number, M33: number): number;
}
