import jsfeatNext from "./jsfeatNext";

/**
 * Package entry point. Since 0.9.0 the default export IS the `jsfeatNext`
 * namespace directly — the old `pkg.jsfeatNext` double-namespace unwrap is
 * gone (issue #41; see docs/migration-0.9.md).
 *
 * @example
 * ```ts
 * import jsfeatNext from "@webarkit/jsfeat-next";
 * const gray = new jsfeatNext.matrix_t(w, h, jsfeatNext.U8_t | jsfeatNext.C1_t);
 * jsfeatNext.imgproc.grayscale(rgba, w, h, gray); // singleton — no `new`
 * ```
 */
export default jsfeatNext;

/**
 * Public interfaces and shared types, re-exported from the package root so
 * consumers can type-annotate without deep paths into `types/src/**` (issue
 * #92). These are **type-only** re-exports: they are erased at build time and
 * do not change the UMD/ESM JavaScript bundles (whose `exports: "default"`
 * config exposes only the `jsfeatNext` namespace). The runtime values remain
 * reachable via that namespace — e.g. `new jsfeatNext.matrix_t(...)`.
 *
 * @example
 * ```ts
 * import jsfeatNext, { IMatrix_T, TypedArray } from "@webarkit/jsfeat-next";
 * function process(img: IMatrix_T) { ... }
 * ```
 */
export type { matrix_t, IMatrix_T } from "./matrix_t/matrix_t";
export type { keypoint_t } from "./keypoint_t/keypoint_t";
export type { pyramid_t } from "./pyramid_t/pyramid_t";
export type { point_t, IPoint_t } from "./point_t/point_t";
export type { ransac_params_t } from "./motion_estimator/ransac_params_t";
export type { ICache } from "./cache/cache";
export type { TypedArray, NumericArray, MotionKernel } from "./types";
