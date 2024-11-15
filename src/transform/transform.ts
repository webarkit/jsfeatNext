import { matrix_t } from "../matrix_t/matrix_t";
export class transform {
    constructor() {}

    /*affine_3point_transform(mat, src_x0, src_y0, dst_x0, dst_y0,
        src_x1, src_y1, dst_x1, dst_y1,
        src_x2, src_y2, dst_x2, dst_y2) {
        // we need linear algebra module first
    };*/

    perspective_4point_transform(
        model: matrix_t,
        src_x0: number,
        src_y0: number,
        dst_x0: number,
        dst_y0: number,
        src_x1: number,
        src_y1: number,
        dst_x1: number,
        dst_y1: number,
        src_x2: number,
        src_y2: number,
        dst_x2: number,
        dst_y2: number,
        src_x3: number,
        src_y3: number,
        dst_x3: number,
        dst_y3: number
    ): void {
        let t1 = src_x0;
        let t2 = src_x2;
        let t4 = src_y1;
        let t5 = t1 * t2 * t4;
        let t6 = src_y3;
        let t7 = t1 * t6;
        let t8 = t2 * t7;
        let t9 = src_y2;
        let t10 = t1 * t9;
        let t11 = src_x1;
        let t14 = src_y0;
        let t15 = src_x3;
        let t16 = t14 * t15;
        let t18 = t16 * t11;
        let t20 = t15 * t11 * t9;
        let t21 = t15 * t4;
        let t24 = t15 * t9;
        let t25 = t2 * t4;
        let t26 = t6 * t2;
        let t27 = t6 * t11;
        let t28 = t9 * t11;
        let t30 = 1.0 / (t21 - t24 - t25 + t26 - t27 + t28);
        let t32 = t1 * t15;
        let t35 = t14 * t11;
        let t41 = t4 * t1;
        let t42 = t6 * t41;
        let t43 = t14 * t2;
        let t46 = t16 * t9;
        let t48 = t14 * t9 * t11;
        let t51 = t4 * t6 * t2;
        let t55 = t6 * t14;
        const Hr0 = -(t8 - t5 + t10 * t11 - t11 * t7 - t16 * t2 + t18 - t20 + t21 * t2) * t30;
        const Hr1 = (t5 - t8 - t32 * t4 + t32 * t9 + t18 - t2 * t35 + t27 * t2 - t20) * t30;
        const Hr2 = t1;
        const Hr3 = (-t9 * t7 + t42 + t43 * t4 - t16 * t4 + t46 - t48 + t27 * t9 - t51) * t30;
        const Hr4 = (-t42 + t41 * t9 - t55 * t2 + t46 - t48 + t55 * t11 + t51 - t21 * t9) * t30;
        const Hr5 = t14;
        const Hr6 = (-t10 + t41 + t43 - t35 + t24 - t21 - t26 + t27) * t30;
        const Hr7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30;

        t1 = dst_x0;
        t2 = dst_x2;
        t4 = dst_y1;
        t5 = t1 * t2 * t4;
        t6 = dst_y3;
        t7 = t1 * t6;
        t8 = t2 * t7;
        t9 = dst_y2;
        t10 = t1 * t9;
        t11 = dst_x1;
        t14 = dst_y0;
        t15 = dst_x3;
        t16 = t14 * t15;
        t18 = t16 * t11;
        t20 = t15 * t11 * t9;
        t21 = t15 * t4;
        t24 = t15 * t9;
        t25 = t2 * t4;
        t26 = t6 * t2;
        t27 = t6 * t11;
        t28 = t9 * t11;
        t30 = 1.0 / (t21 - t24 - t25 + t26 - t27 + t28);
        t32 = t1 * t15;
        t35 = t14 * t11;
        t41 = t4 * t1;
        t42 = t6 * t41;
        t43 = t14 * t2;
        t46 = t16 * t9;
        t48 = t14 * t9 * t11;
        t51 = t4 * t6 * t2;
        t55 = t6 * t14;
        const Hl0 = -(t8 - t5 + t10 * t11 - t11 * t7 - t16 * t2 + t18 - t20 + t21 * t2) * t30;
        const Hl1 = (t5 - t8 - t32 * t4 + t32 * t9 + t18 - t2 * t35 + t27 * t2 - t20) * t30;
        const Hl2 = t1;
        const Hl3 = (-t9 * t7 + t42 + t43 * t4 - t16 * t4 + t46 - t48 + t27 * t9 - t51) * t30;
        const Hl4 = (-t42 + t41 * t9 - t55 * t2 + t46 - t48 + t55 * t11 + t51 - t21 * t9) * t30;
        const Hl5 = t14;
        const Hl6 = (-t10 + t41 + t43 - t35 + t24 - t21 - t26 + t27) * t30;
        const Hl7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30;

        // the following code computes R = Hl * inverse Hr
        t2 = Hr4 - Hr7 * Hr5;
        t4 = Hr0 * Hr4;
        t5 = Hr0 * Hr5;
        t7 = Hr3 * Hr1;
        t8 = Hr2 * Hr3;
        t10 = Hr1 * Hr6;
        const t12 = Hr2 * Hr6;
        t15 = 1.0 / (t4 - t5 * Hr7 - t7 + t8 * Hr7 + t10 * Hr5 - t12 * Hr4);
        t18 = -Hr3 + Hr5 * Hr6;
        const t23 = -Hr3 * Hr7 + Hr4 * Hr6;
        t28 = -Hr1 + Hr2 * Hr7;
        const t31 = Hr0 - t12;
        t35 = Hr0 * Hr7 - t10;
        t41 = -Hr1 * Hr5 + Hr2 * Hr4;
        const t44 = t5 - t8;
        const t47 = t4 - t7;
        t48 = t2 * t15;
        const t49 = t28 * t15;
        const t50 = t41 * t15;
        const mat = model.data;
        mat[0] = Hl0 * t48 + Hl1 * (t18 * t15) - Hl2 * (t23 * t15);
        mat[1] = Hl0 * t49 + Hl1 * (t31 * t15) - Hl2 * (t35 * t15);
        mat[2] = -Hl0 * t50 - Hl1 * (t44 * t15) + Hl2 * (t47 * t15);
        mat[3] = Hl3 * t48 + Hl4 * (t18 * t15) - Hl5 * (t23 * t15);
        mat[4] = Hl3 * t49 + Hl4 * (t31 * t15) - Hl5 * (t35 * t15);
        mat[5] = -Hl3 * t50 - Hl4 * (t44 * t15) + Hl5 * (t47 * t15);
        mat[6] = Hl6 * t48 + Hl7 * (t18 * t15) - t23 * t15;
        mat[7] = Hl6 * t49 + Hl7 * (t31 * t15) - t35 * t15;
        mat[8] = -Hl6 * t50 - Hl7 * (t44 * t15) + t47 * t15;
    }

    invert_affine_transform(src: matrix_t, dst: matrix_t): void {
        const src_d = src.data;
        const dst_d = dst.data;

        const m11 = src_d[0],
            m12 = src_d[1],
            m13 = src_d[2];
        const m21 = src_d[3],
            m22 = src_d[4],
            m23 = src_d[5];

        const det = 1.0 / (m11 * m22 - m12 * m21);

        dst_d[0] = det * m22;
        dst_d[1] = det * -m12;
        dst_d[2] = det * (m12 * m23 - m13 * m22);

        dst_d[3] = det * -m21;
        dst_d[4] = det * m11;
        dst_d[5] = det * (m13 * m21 - m11 * m23);
    }

    invert_perspective_transform(src: matrix_t, dst: matrix_t): void {
        const src_d = src.data;
        const dst_d = dst.data;
        const m11 = src_d[0],
            m12 = src_d[1],
            m13 = src_d[2];
        const m21 = src_d[3],
            m22 = src_d[4],
            m23 = src_d[5];
        const m31 = src_d[6],
            m32 = src_d[7],
            m33 = src_d[8];

        const det =
            1.0 / (m11 * (m22 * m33 - m23 * m32) - m12 * (m21 * m33 - m23 * m31) + m13 * (m21 * m32 - m22 * m31));

        dst_d[0] = det * (m22 * m33 - m23 * m32);
        dst_d[1] = det * (m13 * m32 - m12 * m33);
        dst_d[2] = det * (m12 * m23 - m13 * m22);

        dst_d[3] = det * (m23 * m31 - m21 * m33);
        dst_d[4] = det * (m11 * m33 - m13 * m31);
        dst_d[5] = det * (m13 * m21 - m11 * m23);

        dst_d[6] = det * (m21 * m32 - m22 * m31);
        dst_d[7] = det * (m12 * m31 - m11 * m32);
        dst_d[8] = det * (m11 * m22 - m12 * m21);
    }
}
