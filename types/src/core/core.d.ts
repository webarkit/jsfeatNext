import { cache } from '../cache/cache';
import { imgproc } from '../imgproc/imgproc';
import { fast_corners } from '../fast_corners/fast_corners';
import { linalg } from '../linalg/linalg';
import { math } from '../math/math';
import { default as matmath } from '../matmath/matmath';
import { matrix_t } from '../matrix_t/matrix_t';
import { pyramid_t } from '../pyramid_t/pyramid_t';
import { transform } from '../transform/transform';
import { keypoint_t } from '../keypoint_t/keypoint_t';
import { yape } from '../yape/yape';
import { yape06 } from '../yape06/yape06';
import { ransac_params_t } from '../motion_estimator/ransac_params_t';
import { motion_estimator } from '../motion_estimator/motion_estimator';
import { optical_flow_lk } from '../optical_flow_lk/optical_flow_lk';
import { orb } from '../orb/orb';
import { affine2d, homography2d } from '../motion_model/motion_model';
/**
 * Base class of the library: holds the shared constants, the per-instance
 * cache/data-type helpers, and the static slots the algorithm modules are
 * attached to (in src/jsfeatNext.ts, the aggregator).
 *
 * Extracted from the src/jsfeatNext.ts monolith (issue #47) so that module
 * files can `extend` it without creating a circular import with the
 * aggregator.
 */
export default class jsfeatNext {
    /** Decoder for packed matrix type signatures. */
    private dt;
    /**
     * Per-instance scratch-buffer pool (30 buffers of 2560 bytes, growable).
     * NOTE: original jsfeat shares ONE global cache; jsfeatNext currently
     * allocates a pool per module instance (see the parity audit, Axis 2).
     */
    protected cache: cache;
    static cache: typeof cache;
    static fast_corners: typeof fast_corners;
    static imgproc: typeof imgproc;
    static linalg: typeof linalg;
    static math: typeof math;
    static matmath: typeof matmath;
    static matrix_t: typeof matrix_t;
    static pyramid_t: typeof pyramid_t;
    static transform: typeof transform;
    static keypoint_t: typeof keypoint_t;
    static yape: typeof yape;
    static yape06: typeof yape06;
    static ransac_params_t: typeof ransac_params_t;
    static affine2d: typeof affine2d;
    static homography2d: typeof homography2d;
    static motion_estimator: typeof motion_estimator;
    static optical_flow_lk: typeof optical_flow_lk;
    static orb: typeof orb;
    constructor();
    /** Library version, read from package.json at build time. */
    static VERSION: string;
    static EPSILON: number;
    static FLT_MIN: number;
    static U8_t: number;
    static S32_t: number;
    static F32_t: number;
    static S64_t: number;
    static F64_t: number;
    static C1_t: number;
    static C2_t: number;
    static C3_t: number;
    static C4_t: number;
    static COLOR_RGBA2GRAY: number;
    static COLOR_RGB2GRAY: number;
    static COLOR_BGRA2GRAY: number;
    static COLOR_BGR2GRAY: number;
    static BOX_BLUR_NOSCALE: number;
    static SVD_U_T: number;
    static SVD_V_T: number;
    static U8C1_t: number;
    static U8C3_t: number;
    static U8C4_t: number;
    static F32C1_t: number;
    static F32C2_t: number;
    static S32C1_t: number;
    static S32C2_t: number;
    /**
     * @param type Packed type signature (e.g. `U8_t | C1_t`).
     * @returns The data-type component alone (e.g. `U8_t`).
     */
    get_data_type(type: number): number;
    /**
     * @param type Packed type signature.
     * @returns The channel count (1–4).
     */
    get_channel(type: number): number;
    /**
     * @param type Packed type signature.
     * @returns Bytes per element of the signature's data type (1, 4 or 8).
     */
    get_data_type_size(type: number): number;
}
