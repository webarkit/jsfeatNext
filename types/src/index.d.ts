import { default as jsfeatNext } from './jsfeatNext';
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
