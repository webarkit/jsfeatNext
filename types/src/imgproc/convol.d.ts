/**
 * Separable 2D convolution for `U8` images with an integer kernel — the
 * fixed-point fast path of `imgproc.gaussian_blur`. Runs a horizontal then a
 * vertical 1D pass with edge replication, right-shifting by 8 to undo the
 * kernel's 8-bit scaling and clamping results to 255.
 *
 * @param buf         Scratch row/column buffer (from the cache pool).
 * @param src_d       Source image data.
 * @param dst_d       Destination image data (also used as the intermediate).
 * @param w           Image width.
 * @param h           Image height.
 * @param filter      1D kernel, integer-scaled to sum to 256.
 * @param kernel_size Number of kernel taps.
 * @param half_kernel `kernel_size >> 1` (border padding size).
 */
export declare function _convol_u8(buf: Int32Array | Float32Array, src_d: number[], dst_d: number[], w: number, h: number, filter: Int32Array | Float32Array, kernel_size: number, half_kernel: number): void;
/**
 * Separable 2D convolution in floating point — the general path of
 * `imgproc.gaussian_blur` for `S32`/`F32` data. Same two-pass structure as
 * {@link _convol_u8} but without fixed-point scaling or clamping.
 *
 * @param buf         Scratch row/column buffer (from the cache pool).
 * @param src_d       Source data.
 * @param dst_d       Destination data (also used as the intermediate).
 * @param w           Width.
 * @param h           Height.
 * @param filter      1D kernel weights (normalized to sum to 1).
 * @param kernel_size Number of kernel taps.
 * @param half_kernel `kernel_size >> 1` (border padding size).
 */
export declare function _convol(buf: Int32Array | Float32Array, src_d: number[], dst_d: number[], w: number, h: number, filter: Int32Array | Float32Array, kernel_size: number, half_kernel: number): void;
