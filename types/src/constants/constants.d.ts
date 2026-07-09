/**
 * Library-wide constants, mirroring the constants of the original jsfeat.
 *
 * **Type signatures.** A matrix/image type is a bitwise OR of a data-type
 * flag (`U8_t`, `S32_t`, `F32_t`, `S64_t`, `F64_t` — stored in the high byte)
 * and a channel-count flag (`C1_t`…`C4_t` — stored in the low byte), e.g.
 * `U8_t | C1_t` for an 8-bit grayscale image. The pre-combined popular
 * formats (`U8C1_t`, `F32C1_t`, …) are provided for convenience.
 *
 * All of these are also re-exposed as static members of the `jsfeatNext`
 * base class (see `src/core/core.ts`), which is how consumers usually
 * access them (`jsfeatNext.U8_t`, `jsfeatNext.COLOR_RGBA2GRAY`, …).
 */
export declare const JSFEAT_CONSTANTS: {
    /** Smallest float32 difference considered significant (single-precision machine epsilon). */
    EPSILON: number;
    /** Smallest positive float used to guard divisions against zero. */
    FLT_MIN: number;
    /** Data type: unsigned 8-bit integer (`Uint8Array` backed). */
    U8_t: number;
    /** Data type: signed 32-bit integer (`Int32Array` backed). */
    S32_t: number;
    /** Data type: 32-bit float (`Float32Array` backed). */
    F32_t: number;
    /** Data type: signed 64-bit integer (reserved; no typed-array view). */
    S64_t: number;
    /** Data type: 64-bit float (`Float64Array` backed). */
    F64_t: number;
    /** Channel count: 1 channel (grayscale / scalar). */
    C1_t: number;
    /** Channel count: 2 interleaved channels (e.g. gx/gy derivative pairs). */
    C2_t: number;
    /** Channel count: 3 interleaved channels (e.g. RGB). */
    C3_t: number;
    /** Channel count: 4 interleaved channels (e.g. RGBA). */
    C4_t: number;
    /** `imgproc.grayscale` code: source is RGBA (the browser canvas default). */
    COLOR_RGBA2GRAY: number;
    /** `imgproc.grayscale` code: source is RGB (3 bytes per pixel). */
    COLOR_RGB2GRAY: number;
    /** `imgproc.grayscale` code: source is BGRA. */
    COLOR_BGRA2GRAY: number;
    /** `imgproc.grayscale` code: source is BGR (3 bytes per pixel). */
    COLOR_BGR2GRAY: number;
    /** `imgproc.box_blur_gray` option: keep raw window sums instead of averaging. */
    BOX_BLUR_NOSCALE: number;
    /** `linalg.svd_decompose` option: return U transposed. */
    SVD_U_T: number;
    /** `linalg.svd_decompose` option: return V transposed. */
    SVD_V_T: number;
    /** 8-bit unsigned, 1 channel (`U8_t | C1_t`) — grayscale images. */
    U8C1_t: number;
    /** 8-bit unsigned, 3 channels (`U8_t | C3_t`) — RGB images. */
    U8C3_t: number;
    /** 8-bit unsigned, 4 channels (`U8_t | C4_t`) — RGBA images. */
    U8C4_t: number;
    /** 32-bit float, 1 channel (`F32_t | C1_t`) — float matrices. */
    F32C1_t: number;
    /** 32-bit float, 2 channels (`F32_t | C2_t`) — float vector fields. */
    F32C2_t: number;
    /** 32-bit signed int, 1 channel (`S32_t | C1_t`). */
    S32C1_t: number;
    /** 32-bit signed int, 2 channels (`S32_t | C2_t`) — integer gx/gy maps. */
    S32C2_t: number;
};
