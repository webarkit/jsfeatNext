import imgproc from '../imgproc/imgproc.js'

export function rectify_patch(src, dst, angle, px, py, psize) {
    var cosine = Math.cos(angle);
    var sine   = Math.sin(angle);
    var imgprc = new imgproc();

    H.data[0] = cosine, H.data[1] = -sine,    H.data[2] = (-cosine + sine  ) * psize*0.5 + px,
    H.data[3] = sine,   H.data[4] =  cosine,  H.data[5] = (-sine   - cosine) * psize*0.5 + py;

    imgprc.warp_affine(src, dst, H, 128);
}