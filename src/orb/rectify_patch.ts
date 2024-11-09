import { matrix_t } from "../matrix_t/matrix_t";
import { imgproc } from "../imgproc/imgproc";

export function rectify_patch(
    src: matrix_t,
    dst: matrix_t,
    angle: number,
    px: number,
    py: number,
    psize: number,
    H: matrix_t,
    imgproc: imgproc
) {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);

    (H.data[0] = cosine),
        (H.data[1] = -sine),
        (H.data[2] = (-cosine + sine) * psize * 0.5 + px),
        (H.data[3] = sine),
        (H.data[4] = cosine),
        (H.data[5] = (-sine - cosine) * psize * 0.5 + py);

    imgproc.warp_affine(src, dst, H, 128);
}
