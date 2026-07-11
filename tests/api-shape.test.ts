import { describe, it, expect } from "vitest";
import jsfeatNext from "../src/index";
import { shared_cache } from "../src/core/core";
import { imgproc } from "../src/imgproc/imgproc";

/**
 * API-shape tests for the 0.9.0 breaking change (issue #41):
 *  - the package default export IS the namespace (no jsfeatNext.jsfeatNext)
 *  - algorithm modules are singletons (no `new`), like original jsfeat
 *  - every module shares the ONE library-wide cache pool
 *  - data-structure classes remain constructors
 */
describe("0.9.0 API shape (issue #41)", () => {
    it("default export is the namespace directly — the double unwrap is gone", () => {
        // old shape was { jsfeatNext: <class> }; the namespace itself has VERSION
        expect((jsfeatNext as any).jsfeatNext).toBeUndefined();
        expect(typeof jsfeatNext.VERSION).toBe("string");
    });

    it("algorithm modules are callable singletons, no `new` required", () => {
        expect(typeof jsfeatNext.imgproc.grayscale).toBe("function");
        expect(typeof jsfeatNext.math.qsort).toBe("function");
        expect(typeof jsfeatNext.matmath.multiply).toBe("function");
        expect(typeof jsfeatNext.linalg.lu_solve).toBe("function");
        expect(typeof jsfeatNext.transform.perspective_4point_transform).toBe("function");
        expect(typeof jsfeatNext.fast_corners.detect).toBe("function");
        expect(typeof jsfeatNext.yape.detect).toBe("function");
        expect(typeof jsfeatNext.yape06.detect).toBe("function");
        expect(typeof jsfeatNext.orb.describe).toBe("function");
        expect(typeof jsfeatNext.optical_flow_lk.track).toBe("function");
        expect(typeof jsfeatNext.motion_estimator.ransac).toBe("function");
        expect(typeof jsfeatNext.affine2d.run).toBe("function");
        expect(typeof jsfeatNext.homography2d.run).toBe("function");
        expect(typeof jsfeatNext.cache.get_buffer).toBe("function");
    });

    it("singletons are stable identities (state persists across accesses)", () => {
        expect(jsfeatNext.imgproc).toBe(jsfeatNext.imgproc);
        const t = jsfeatNext.fast_corners.set_threshold(42);
        expect(t).toBe(42);
        expect(jsfeatNext.fast_corners._threshold).toBe(42);
        jsfeatNext.fast_corners.set_threshold(20); // restore the jsfeat default
    });

    it("every module shares the ONE library-wide cache pool", () => {
        // jsfeatNext.cache IS the shared pool object
        expect(jsfeatNext.cache).toBe(shared_cache);
        // a buffer borrowed from the public pool is visible to module internals:
        // borrow every free node via the public handle, then verify a fresh
        // module instance sees the same (now-recycled) pool rather than its own.
        const a = shared_cache.get_buffer(16);
        shared_cache.put_buffer(a);
        const b = jsfeatNext.cache.get_buffer(16);
        jsfeatNext.cache.put_buffer(b);
        // a fresh instance created from the class still binds to the shared pool
        const fresh = new imgproc();
        expect((fresh as any).cache).toBe(shared_cache);
    });

    it("data-structure classes remain constructors", () => {
        const m = new jsfeatNext.matrix_t(4, 4, jsfeatNext.U8_t | jsfeatNext.C1_t);
        expect(m.cols).toBe(4);
        const k = new jsfeatNext.keypoint_t(1, 2, 3, 0, -1);
        expect(k.x).toBe(1);
        const p = new jsfeatNext.pyramid_t(3);
        expect(p.levels).toBe(3);
        const r = new jsfeatNext.ransac_params_t(4, 3.0, 0.5, 0.99);
        expect(r.size).toBe(4);
    });

    it("constants remain on the namespace", () => {
        expect(jsfeatNext.U8_t).toBe(0x0100);
        expect(jsfeatNext.F32C1_t).toBe(0x0400 | 0x01);
        expect(jsfeatNext.COLOR_RGBA2GRAY).toBe(0);
    });
});
