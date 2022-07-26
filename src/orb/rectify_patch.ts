export function rectify_patch(src: any, dst: any, angle: number, px: number, py: number, psize: number, H: { data: any[]; }, imgproc: any) {
    var cosine = Math.cos(angle);
    var sine   = Math.sin(angle);

    H.data[0] = cosine, H.data[1] = -sine,    H.data[2] = (-cosine + sine  ) * psize*0.5 + px,
    H.data[3] = sine,   H.data[4] =  cosine,  H.data[5] = (-sine   - cosine) * psize*0.5 + py;

    imgproc.warp_affine(src, dst, H, 128);
}