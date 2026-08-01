/*
 *  cache.test.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import { U8C1, F32C1, uniformImage, dstImage, cornerScene, keypointPool } from "./helpers";

/**
 * Tests for the shared buffer pool (issue #87, category D).
 *
 * The pool had no behavioural coverage at all — `tests/api-shape` only checked
 * that `jsfeatNext.cache.get_buffer` is a function and that every module points
 * at the same object.
 *
 * It deserves better: AGENTS.md makes "balance every `get_buffer` with a
 * `put_buffer`" a standing rule, every algorithm in the library borrows from
 * this one pool, and an imbalance is invisible until the pool drains and an
 * unrelated module starts reading someone else's scratch memory. The last test
 * here is the real prize — it holds every module to that rule at once.
 */

const pool = jsfeatNext.cache;

/** The pool's free-node count. Private, but it is the thing under test. */
const freeCount = () => (pool as unknown as { _pool_size: number })._pool_size;

describe("shared buffer pool mechanics", () => {
    it("hands out a node and takes it back", () => {
        const before = freeCount();
        const node = pool.get_buffer(64);
        expect(freeCount()).toBe(before - 1);
        pool.put_buffer(node);
        expect(freeCount()).toBe(before);
    });

    it("returns a node at least as large as requested", () => {
        const node = pool.get_buffer(64);
        expect(node.size).toBeGreaterThanOrEqual(64);
        pool.put_buffer(node);
    });

    it("grows a node on demand for an oversized request", () => {
        // Nodes start small; asking for more than the node holds must resize it
        // rather than hand back something too short to write into.
        const huge = 1 << 20;
        const node = pool.get_buffer(huge);
        expect(node.size).toBeGreaterThanOrEqual(huge);
        expect(node.u8.length).toBeGreaterThanOrEqual(huge);
        pool.put_buffer(node);
    });

    it("keeps the node's views consistent after a resize", () => {
        const node = pool.get_buffer(4096);
        expect(node.u8.buffer).toBe(node.buffer);
        expect(node.i32.buffer).toBe(node.buffer);
        expect(node.f32.buffer).toBe(node.buffer);
        expect(node.f64.buffer).toBe(node.buffer);
        node.i32[0] = 123456;
        expect(node.i32[0]).toBe(123456);
        pool.put_buffer(node);
    });

    it("restores the free count after borrowing several at once", () => {
        const before = freeCount();
        const nodes = [pool.get_buffer(32), pool.get_buffer(64), pool.get_buffer(128)];
        expect(freeCount()).toBe(before - 3);
        for (const n of nodes) pool.put_buffer(n);
        expect(freeCount()).toBe(before);
    });
});

describe("every module returns what it borrows", () => {
    /** Asserts `run` leaves the pool exactly as it found it. */
    function expectBalanced(label: string, run: () => void) {
        const before = freeCount();
        run();
        expect(`${label}: ${freeCount()}`).toBe(`${label}: ${before}`);
    }

    const ip = jsfeatNext.imgproc;
    const W = 96;
    const H = 72;

    it("imgproc operations are balanced", () => {
        expectBalanced("gaussian_blur", () => ip.gaussian_blur(uniformImage(32, 32, 90), dstImage(32, 32), 5, 0));
        expectBalanced("box_blur_gray", () => ip.box_blur_gray(uniformImage(32, 32, 90), dstImage(32, 32), 3, 0));
        expectBalanced("sobel_derivatives", () =>
            ip.sobel_derivatives(uniformImage(32, 32, 90), new jsfeatNext.matrix_t(32, 32, jsfeatNext.S32C2_t))
        );
        expectBalanced("scharr_derivatives", () =>
            ip.scharr_derivatives(uniformImage(32, 32, 90), new jsfeatNext.matrix_t(32, 32, jsfeatNext.S32C2_t))
        );
        expectBalanced("canny", () => ip.canny(cornerScene(32, 32), dstImage(32, 32), 20, 50));
        expectBalanced("equalize_histogram", () => ip.equalize_histogram(cornerScene(32, 32), dstImage(32, 32)));
        expectBalanced("pyrdown", () => ip.pyrdown(cornerScene(32, 32), dstImage(16, 16)));
        expectBalanced("resample", () => ip.resample(cornerScene(32, 32), dstImage(16, 16), 16, 16));
        expectBalanced("compute_integral_image", () =>
            ip.compute_integral_image(cornerScene(32, 32), new Int32Array(33 * 33), null, null)
        );
    });

    it("detectors and the descriptor are balanced", () => {
        const fc = jsfeatNext.fast_corners;
        fc.set_threshold(20);

        expectBalanced("fast_corners.detect", () => fc.detect(cornerScene(W, H), keypointPool(1024), 5));
        expectBalanced("yape06.detect", () => jsfeatNext.yape06.detect(cornerScene(W, H), keypointPool(1024), 5));
        expectBalanced("yape.detect", () => {
            const y = jsfeatNext.yape;
            y.init(W, H, 5, 1);
            y.detect(cornerScene(W, H), keypointPool(1024), 4);
        });
        expectBalanced("orb.describe", () => {
            const corners = keypointPool(1024);
            const n = fc.detect(cornerScene(W, H), corners, 24);
            for (let i = 0; i < n; i++) corners[i].angle = 0;
            jsfeatNext.orb.describe(cornerScene(W, H), corners, n, new jsfeatNext.matrix_t(32, n, U8C1));
        });
    });

    it("optical_flow_lk is balanced", () => {
        const img = cornerScene(W, H);
        const pyramid = () => {
            const p = new jsfeatNext.pyramid_t(2);
            p.allocate(W, H, U8C1);
            p.build(img, false);
            return p;
        };
        expectBalanced("optical_flow_lk.track", () => {
            const xy = Float32Array.from([30, 30, 50, 40]);
            jsfeatNext.optical_flow_lk.track(
                pyramid(),
                pyramid(),
                xy,
                new Float32Array(4),
                2,
                9,
                30,
                new Uint8Array(2),
                0.01,
                0.0001
            );
        });
    });

    it("linalg solvers are balanced", () => {
        const spd = () => {
            const m = new jsfeatNext.matrix_t(3, 3, F32C1);
            m.data.set([4, 1, 2, 1, 5, 3, 2, 3, 6]);
            return m;
        };

        expectBalanced("svd_decompose", () =>
            jsfeatNext.linalg.svd_decompose(
                spd(),
                new jsfeatNext.matrix_t(1, 3, F32C1),
                new jsfeatNext.matrix_t(3, 3, F32C1),
                new jsfeatNext.matrix_t(3, 3, F32C1),
                0
            )
        );
        expectBalanced("svd_invert", () => jsfeatNext.linalg.svd_invert(new jsfeatNext.matrix_t(3, 3, F32C1), spd()));
        expectBalanced("eigenVV", () =>
            jsfeatNext.linalg.eigenVV(spd(), new jsfeatNext.matrix_t(3, 3, F32C1), new jsfeatNext.matrix_t(1, 3, F32C1))
        );
        expectBalanced("lu_solve", () => {
            const b = new jsfeatNext.matrix_t(1, 3, F32C1);
            b.data.set([1, 2, 3]);
            jsfeatNext.linalg.lu_solve(spd(), b);
        });
        expectBalanced("cholesky_solve", () => {
            const b = new jsfeatNext.matrix_t(1, 3, F32C1);
            b.data.set([1, 2, 3]);
            jsfeatNext.linalg.cholesky_solve(spd(), b);
        });
    });
});
