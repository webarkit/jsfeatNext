export function rectify_patch(src, dst, angle, px, py, psize, H, imgProcessor) {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    H.data[0] = cosine;
    H.data[1] = -sine;
    H.data[2] = (-cosine + sine) * psize * 0.5 + px;
    H.data[3] = sine;
    H.data[4] = cosine;
    H.data[5] = (-sine - cosine) * psize * 0.5 + py;
    imgProcessor.warp_affine(src, dst, H, 128);
}
//# sourceMappingURL=rectify_patch.js.map