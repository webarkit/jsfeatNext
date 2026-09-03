import { matrix_t } from '../matrix_t/matrix_t';
/** A recovered camera pose. */
export interface IPose_T {
    /** 3×3 rotation, row-major, OpenCV camera frame (`F64_t | C1_t`). */
    R: matrix_t;
    /** Translation, length 3, camera frame. */
    t: Float64Array;
    /** `false` when the homography/intrinsics were degenerate. */
    good: boolean;
}
/**
 * Output of {@link pose_estimator.estimate}: a rigid camera pose `(R, t)` in
 * the OpenCV camera frame. A data-structure class (like `matrix_t`), not a
 * singleton — construct one and reuse it across frames to avoid per-frame
 * allocation.
 */
export declare class pose_t implements IPose_T {
    /** Rotation as a 3×3 `matrix_t`: the type the rest of jsfeatNext's matrix
     *  math and any downstream consumer expects. */
    R: matrix_t;
    /** Translation as a bare `Float64Array(3)` rather than a 3×1 `matrix_t`:
     *  jsfeatNext has no 1-column matrix consumer for it, and a plain vector is
     *  what the renderer adapters up in #97 will read. */
    t: Float64Array;
    good: boolean;
    constructor();
}
/**
 * Closed-form planar pose from a homography plus camera intrinsics — the
 * `H → [R | t]` decomposition the ORB samples stop short of, completing the
 * natural-feature AR pipeline (issue #83).
 *
 * ## Why this is a constructor class, not a namespace singleton
 *
 * The 14 algorithm modules (`imgproc`, `orb`, …) are stateless singletons on
 * the namespace. This one is **stateful** — it holds the inverted intrinsics
 * `K⁻¹` — and the public API constructs it with a `K`
 * (`new jsfeatNext.pose_estimator(K)`). So it lives with the constructor
 * data-structs (`matrix_t`, `keypoint_t`, `ransac_params_t`) instead. That
 * also makes {@link intrinsics} reachable as
 * `jsfeatNext.pose_estimator.intrinsics(...)`: it is `static`, and the class
 * (not an instance) is what sits on the namespace.
 *
 * ## Why closed-form, not SVD
 *
 * The decomposition normalises the first two columns of `K⁻¹H`, then
 * re-orthonormalises them with a closed-form quaternion-free trick rather than
 * an SVD of `[r1 r2]`. This keeps the algorithm free of `linalg`'s SVD, which
 * matters for the PureCV Rust port: the same routine must run `no_std`.
 *
 * The math mirrors OpenCV / the ARToolKit-lineage planar-pose decomposition so
 * it cross-validates 1:1 against the Rust port and can serve as its numeric
 * reference oracle (issue #96). All geometry is `Float64` per the #96 precision
 * hierarchy.
 *
 * @example
 * ```ts
 * const K = jsfeatNext.pose_estimator.intrinsics(640, 480);
 * const estimator = new jsfeatNext.pose_estimator(K);
 * const pose = new jsfeatNext.pose_t();
 * estimator.estimate(homography3x3, pose);
 * if (pose.good) { ... }
 * ```
 */
export declare class pose_estimator {
    /** Inverse intrinsics `K⁻¹`, row-major, assuming zero skew. */
    private Kinv;
    /**
     * Scratch for `B = K⁻¹·H` in {@link estimate}.
     *
     * An instance field rather than a per-call allocation: an estimator is
     * built once and reused across frames, so at 30-60 fps a local would be a
     * fresh array every frame for no benefit. It is not borrowed from the
     * shared cache either — that pool exists for image-sized buffers, and
     * balancing a get/put across the degenerate early return to save 72 bytes
     * would cost more in bookkeeping than it saves.
     *
     * Overwritten in full on every call, so no state carries between frames.
     */
    private readonly B;
    constructor(K: matrix_t);
    /** Replace the intrinsics (e.g. after a resolution change). */
    setIntrinsics(K: matrix_t): void;
    /**
     * Rough pinhole `K` from image size and horizontal field of view, for the
     * uncalibrated bootstrap case. Camera geometry, not rendering, so it stays
     * in jsfeatNext (unlike the renderer glue, which moves up to #97's AR
     * layer).
     *
     * `static`, so it is called on the namespace class directly:
     * `jsfeatNext.pose_estimator.intrinsics(w, h)`.
     *
     * @param width    Image width in pixels.
     * @param height   Image height in pixels.
     * @param fovXdeg  Horizontal field of view in degrees (default 60).
     */
    static intrinsics(width: number, height: number, fovXdeg?: number): matrix_t;
    /** Analytic inverse of an upper-triangular, zero-skew pinhole `K`. */
    private static invertIntrinsics;
    /**
     * Recover the camera pose from a homography mapping model-plane points
     * (z = 0) to image pixels.
     *
     * @param H   3×3 homography (any single-channel numeric `matrix_t`).
     * @param out Optional pose to write into; a fresh {@link pose_t} otherwise.
     * @returns   The pose. `out.good` is `false` — and `R`/`t` untouched — when
     *            `H`/`K` are degenerate (a near-zero mapped column).
     */
    estimate(H: matrix_t, out?: pose_t): pose_t;
    private static cross;
    private static normalize;
}
