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
 * The ONE shared scratch-buffer pool of the library (30 buffers of 2560
 * bytes, growable), matching original jsfeat's design where every module
 * borrows from the single global `jsfeat.cache`. Exposed publicly as
 * `jsfeatNext.cache`. Until 0.9.0 each module instance allocated its own
 * pool — a diagnosed memory/GC cost (see docs/migration-0.9.md, issue #41).
 */
export declare const shared_cache: cache;
/**
 * Base class of the library: holds the shared constants, the cache/data-type
 * helpers, and the static slots the algorithm singletons are attached to
 * (in src/jsfeatNext.ts, the aggregator).
 *
 * Extracted from the src/jsfeatNext.ts monolith (issue #47) so that module
 * files can `extend` it without creating a circular import with the
 * aggregator.
 *
 * Since 0.9.0 (issue #41) the algorithm slots hold SINGLETON INSTANCES —
 * consumers call `jsfeatNext.imgproc.grayscale(...)` with no `new`, exactly
 * like original jsfeat's static namespaces. The data-structure slots
 * (matrix_t, keypoint_t, pyramid_t, ransac_params_t) remain constructors.
 */
export default class jsfeatNext {
    /** Decoder for packed matrix type signatures. */
    private dt;
    /** The library-wide shared buffer pool (same object as {@link shared_cache}). */
    protected cache: cache;
    static cache: cache;
    static fast_corners: fast_corners;
    static imgproc: imgproc;
    static linalg: linalg;
    static math: math;
    static matmath: matmath;
    static matrix_t: typeof matrix_t;
    static pyramid_t: typeof pyramid_t;
    static transform: transform;
    static keypoint_t: typeof keypoint_t;
    static yape: yape;
    static yape06: yape06;
    static ransac_params_t: typeof ransac_params_t;
    static affine2d: affine2d;
    static homography2d: homography2d;
    static motion_estimator: motion_estimator;
    static optical_flow_lk: optical_flow_lk;
    static orb: orb;
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
