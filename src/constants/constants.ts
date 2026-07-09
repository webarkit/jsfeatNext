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
export const JSFEAT_CONSTANTS = {
    // CONSTANTS
    /** Smallest float32 difference considered significant (single-precision machine epsilon). */
    EPSILON: 0.0000001192092896,
    /** Smallest positive float used to guard divisions against zero. */
    FLT_MIN: 1e-37,
    /** Data type: unsigned 8-bit integer (`Uint8Array` backed). */
    U8_t: 0x0100,
    /** Data type: signed 32-bit integer (`Int32Array` backed). */
    S32_t: 0x0200,
    /** Data type: 32-bit float (`Float32Array` backed). */
    F32_t: 0x0400,
    /** Data type: signed 64-bit integer (reserved; no typed-array view). */
    S64_t: 0x0800,
    /** Data type: 64-bit float (`Float64Array` backed). */
    F64_t: 0x1000,
    /** Channel count: 1 channel (grayscale / scalar). */
    C1_t: 0x01,
    /** Channel count: 2 interleaved channels (e.g. gx/gy derivative pairs). */
    C2_t: 0x02,
    /** Channel count: 3 interleaved channels (e.g. RGB). */
    C3_t: 0x03,
    /** Channel count: 4 interleaved channels (e.g. RGBA). */
    C4_t: 0x04,

    // color conversion
    /** `imgproc.grayscale` code: source is RGBA (the browser canvas default). */
    COLOR_RGBA2GRAY: 0,
    /** `imgproc.grayscale` code: source is RGB (3 bytes per pixel). */
    COLOR_RGB2GRAY: 1,
    /** `imgproc.grayscale` code: source is BGRA. */
    COLOR_BGRA2GRAY: 2,
    /** `imgproc.grayscale` code: source is BGR (3 bytes per pixel). */
    COLOR_BGR2GRAY: 3,

    // box blur option
    /** `imgproc.box_blur_gray` option: keep raw window sums instead of averaging. */
    BOX_BLUR_NOSCALE: 0x01,

    // svd options
    /** `linalg.svd_decompose` option: return U transposed. */
    SVD_U_T: 0x01,
    /** `linalg.svd_decompose` option: return V transposed. */
    SVD_V_T: 0x02,

    // popular formats
    /** 8-bit unsigned, 1 channel (`U8_t | C1_t`) — grayscale images. */
    U8C1_t: 0x0100 | 0x01,
    /** 8-bit unsigned, 3 channels (`U8_t | C3_t`) — RGB images. */
    U8C3_t: 0x0100 | 0x03,
    /** 8-bit unsigned, 4 channels (`U8_t | C4_t`) — RGBA images. */
    U8C4_t: 0x0100 | 0x04,

    /** 32-bit float, 1 channel (`F32_t | C1_t`) — float matrices. */
    F32C1_t: 0x0400 | 0x01,
    /** 32-bit float, 2 channels (`F32_t | C2_t`) — float vector fields. */
    F32C2_t: 0x0400 | 0x02,
    /** 32-bit signed int, 1 channel (`S32_t | C1_t`). */
    S32C1_t: 0x0200 | 0x01,
    /** 32-bit signed int, 2 channels (`S32_t | C2_t`) — integer gx/gy maps. */
    S32C2_t: 0x0200 | 0x02,
};
