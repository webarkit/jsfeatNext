import { default as jsfeatNext } from './jsfeatNext';
/**
 * Package entry point. The default export wraps the {@link jsfeatNext} class
 * in an object, which is why consumers of the UMD bundle (global
 * `jsfeatNext`) and of the npm package access the library as
 * `jsfeatNext.jsfeatNext` — a known quirk scheduled to be addressed in the
 * API-parity work (issue #41).
 *
 * @example
 * ```ts
 * import pkg from "@webarkit/jsfeat-next";
 * const jsfeat = pkg.jsfeatNext;
 * const ip = new jsfeat.imgproc();
 * ```
 */
declare const _default: {
    jsfeatNext: typeof jsfeatNext;
};
export default _default;
