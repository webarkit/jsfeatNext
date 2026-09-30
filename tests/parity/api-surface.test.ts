/*
 *  api-surface.test.ts
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
import jsfeat from "../vendor/oracle.cjs";
import { fast_corners } from "../../src/fast_corners/fast_corners";
import { cornerScene, keypointPool } from "../properties/helpers";

/**
 * The per-symbol parity table issue #45 asked for, as an executable test.
 *
 * Every module, function, constructor, prototype method and constant on the
 * vendored original jsfeat is looked up on the jsfeatNext namespace and must
 * exist with the same `Function.length` (declared arity) — or be listed in
 * {@link DIVERGENCES} with the reason. In the other direction, every key the
 * jsfeatNext namespace exposes that jsfeat never had must be listed in
 * {@link ADDITIONS}. Both registries are checked for staleness: an entry that
 * no longer describes a real difference fails the test, so the table cannot
 * drift from the code.
 *
 * Numeric parity is the job of the other parity tests; this one pins the
 * *surface* — names, arities, calling convention — which is what a 1.0
 * promises to keep.
 */

type AnyRecord = Record<string, unknown>;
const next = jsfeatNext as unknown as AnyRecord;
const orig = jsfeat as unknown as AnyRecord;

/** jsfeat modules with no jsfeatNext counterpart, by design. */
const UNPORTED: Record<string, string> = {
    haar: "Haar cascade detection is not ported (#43, Someday)",
    bbf: "BBF detection is not ported (#44, Someday)",
    REVISION: "jsfeat's build tag; jsfeatNext exposes VERSION instead",
};

/**
 * jsfeat symbol → why jsfeatNext differs. The key is the jsfeat path; the
 * value must describe a difference that still exists (checked below).
 */
const DIVERGENCES: Record<string, string> = {
    get_data_type: "top-level helper in jsfeat; an instance method of every module in jsfeatNext (audit finding, #45)",
    get_channel: "top-level helper in jsfeat; an instance method of every module in jsfeatNext (audit finding, #45)",
    get_data_type_size:
        "top-level helper in jsfeat; an instance method of every module in jsfeatNext (audit finding, #45)",
    keypoint_t: "constructor arity 0 vs 5: every parameter has a default (x, y, score, level, angle)",
    ransac_params_t: "constructor arity 0 vs 4: every parameter has a default (size, thresh, eps, prob)",
    "yape.init": "arity 3 vs 4: pyramid_levels defaults to 1",
    "yape.detect": "arity 2 vs 3: border defaults to 4",
    "transform.affine_3point_transform":
        "not ported: jsfeat's own is an empty stub ('we need linear algebra module first'), in a module jsfeat never shipped",
};

/**
 * jsfeatNext namespace key → why it exists although jsfeat has no such symbol.
 */
const ADDITIONS: Record<string, string> = {
    VERSION: "package version string; jsfeat has REVISION",
    NORM_HAMMING: "bfmatcher's norm constant, mirroring cv::NORM_HAMMING (#133)",
    bfmatcher: "brute-force Hamming matcher; jsfeat had no matcher (#133)",
    match_t: "cv::DMatch-style correspondence produced by bfmatcher (#133)",
    pose_estimator: "planar pose from a homography and intrinsics (#83)",
    pose_t: "pose_estimator's output struct (#83)",
    affine2d:
        "jsfeat exposes it as jsfeat.motion_model.affine2d (a constructor); jsfeatNext attaches a singleton at the top level (#41)",
    homography2d:
        "jsfeat exposes it as jsfeat.motion_model.homography2d (a constructor); jsfeatNext attaches a singleton at the top level (#41)",
};

const isFn = (v: unknown): v is (...a: unknown[]) => unknown => typeof v === "function";
const protoMethods = (ctor: unknown): string[] =>
    isFn(ctor)
        ? Object.getOwnPropertyNames(ctor.prototype as object).filter(
              (n) => n !== "constructor" && isFn((ctor.prototype as AnyRecord)[n])
          )
        : [];

/** Compare one jsfeat function against its jsfeatNext counterpart. */
function compareFn(path: string, o: unknown, n: unknown, problems: string[], seen: Set<string>) {
    if (!isFn(o)) return;
    seen.add(path);
    if (!isFn(n)) {
        problems.push(`${path}: missing on jsfeatNext (jsfeat arity ${o.length})`);
    } else if (n.length !== o.length) {
        problems.push(`${path}: arity ${n.length} on jsfeatNext vs ${o.length} on jsfeat`);
    }
}

describe("API surface parity with original jsfeat (#45)", () => {
    const problems: string[] = [];
    const divergent = new Set<string>();
    const covered = new Set<string>();

    for (const key of Object.keys(orig)) {
        if (key in UNPORTED) continue;
        const o = orig[key];
        const n = next[key];

        if (typeof o === "number" || typeof o === "string") {
            covered.add(key);
            if (n !== o) problems.push(`${key}: constant ${String(n)} on jsfeatNext vs ${String(o)} on jsfeat`);
            continue;
        }

        if (isFn(o)) {
            // constructor (matrix_t, keypoint_t, ...) or a bare function (get_data_type, ...)
            compareFn(key, o, n, problems, covered);
            for (const m of protoMethods(o)) {
                const nm = isFn(n) ? (n.prototype as AnyRecord)[m] : undefined;
                compareFn(`${key}.prototype.${m}`, (o.prototype as AnyRecord)[m], nm, problems, covered);
            }
            continue;
        }

        if (o && typeof o === "object") {
            // a module: functions, nested constructors (motion_model), and state fields (yape.tau)
            const om = o as AnyRecord;
            const nm = (n ?? {}) as AnyRecord;
            for (const f of Object.keys(om)) {
                const path = `${key}.${f}`;
                const ov = om[f];
                if (isFn(ov) && protoMethods(ov).length > 0) {
                    // jsfeat.motion_model.affine2d is a constructor; jsfeatNext attaches a singleton
                    covered.add(path);
                    const inst = next[f] ?? nm[f];
                    if (!inst) problems.push(`${path}: missing on jsfeatNext`);
                    for (const m of protoMethods(ov)) {
                        compareFn(
                            `${path}.prototype.${m}`,
                            (ov.prototype as AnyRecord)[m],
                            (inst as AnyRecord)?.[m],
                            problems,
                            covered
                        );
                    }
                } else if (isFn(ov)) {
                    compareFn(path, ov, nm[f], problems, covered);
                } else {
                    // detector state (yape.tau, the yape06 thresholds, yape.level_tables):
                    // primitives must match by value, objects by type
                    covered.add(path);
                    const nv = nm[f];
                    if (!(f in nm)) {
                        problems.push(`${path}: state field missing on jsfeatNext`);
                    } else if (typeof ov !== "object" || ov === null) {
                        if (nv !== ov)
                            problems.push(`${path}: default ${String(nv)} on jsfeatNext vs ${String(ov)} on jsfeat`);
                    } else if (typeof nv !== typeof ov || Array.isArray(nv) !== Array.isArray(ov)) {
                        problems.push(`${path}: ${typeof nv} on jsfeatNext vs ${typeof ov} on jsfeat`);
                    }
                }
            }
            continue;
        }
    }

    // Split the raw problems into registered divergences and real failures.
    const unregistered = problems.filter((p) => {
        const path = p.slice(0, p.indexOf(":"));
        if (path in DIVERGENCES) {
            divergent.add(path);
            return false;
        }
        return true;
    });

    it("every jsfeat symbol exists on jsfeatNext with the same arity, or is a registered divergence", () => {
        expect(unregistered).toEqual([]);
    });

    it("every registered divergence still describes a real difference", () => {
        const stale = Object.keys(DIVERGENCES).filter((k) => !divergent.has(k));
        expect(stale).toEqual([]);
    });

    it("every jsfeatNext namespace key jsfeat lacks is a registered addition", () => {
        const extra = Object.keys(next)
            .filter((k) => !(k in orig))
            .filter((k) => !(k in ADDITIONS));
        expect(extra).toEqual([]);
        const stale = Object.keys(ADDITIONS).filter((k) => k in orig || !(k in next));
        expect(stale).toEqual([]);
    });

    it("covered every jsfeat symbol, so the table is exhaustive", () => {
        // Sanity: the walk above visited every top-level key of the oracle.
        const top = Object.keys(orig).filter((k) => !(k in UNPORTED));
        const visited = new Set([...covered].map((p) => p.split(".")[0]));
        expect(top.filter((k) => !visited.has(k))).toEqual([]);
    });
});

describe("default-state parity with original jsfeat (#45)", () => {
    // Arity says nothing about what an OMITTED argument or an un-configured
    // module does. These pin the defaults the other parity tests sidestep by
    // always configuring both sides first.
    const W = 64;
    const H = 64;
    const nextScene = () => cornerScene(W, H);
    const origScene = () => {
        const m = new jsfeat.matrix_t(W, H, jsfeat.U8C1_t);
        m.data.set(nextScene().data);
        return m;
    };
    const origPool = (n: number) => Array.from({ length: n }, () => new jsfeat.keypoint_t(0, 0, 0, 0, -1));

    // Counts are compared within one implementation, never across: jsfeatNext
    // deliberately finds the per-row last candidate jsfeat drops (#202, see
    // tests/divergences.test.ts), so the two sides differ by design here.

    it("a fresh fast_corners detects out of the box, like jsfeat's (threshold 20 by default)", () => {
        // jsfeat's bundle calls `fast_corners.set_threshold(20)` at load; a
        // fresh jsfeatNext instance used to have a zeroed lookup table until
        // the caller set a threshold, and found nothing.
        const fresh = new fast_corners();
        expect(fresh._threshold).toBe(20);
        expect(Array.from(fresh.threshold_tab).some((v) => v !== 0)).toBe(true);
        const configured = jsfeatNext.fast_corners;
        configured.set_threshold(20);
        const n = fresh.detect(nextScene(), keypointPool(W * H), 3);
        expect(n).toBeGreaterThan(0);
        expect(n).toBe(configured.detect(nextScene(), keypointPool(W * H), 3));
        // and the oracle, untouched in this file, detects at its load-time default too
        expect(jsfeat.fast_corners.detect(origScene(), origPool(W * H), 3)).toBeGreaterThan(0);
    });

    it("fast_corners.detect defaults border to 3 on both sides", () => {
        jsfeatNext.fast_corners.set_threshold(20);
        const omitted = jsfeatNext.fast_corners.detect(
            nextScene(),
            keypointPool(W * H),
            undefined as unknown as number
        );
        expect(omitted).toBe(jsfeatNext.fast_corners.detect(nextScene(), keypointPool(W * H), 3));
        const oOmitted = jsfeat.fast_corners.detect(origScene(), origPool(W * H), undefined);
        expect(oOmitted).toBe(jsfeat.fast_corners.detect(origScene(), origPool(W * H), 3));
    });

    it("yape06.detect defaults border to 5 on both sides", () => {
        const omitted = jsfeatNext.yape06.detect(nextScene(), keypointPool(W * H), undefined as unknown as number);
        expect(omitted).toBe(jsfeatNext.yape06.detect(nextScene(), keypointPool(W * H), 5));
        const oOmitted = jsfeat.yape06.detect(origScene(), origPool(W * H), undefined);
        expect(oOmitted).toBe(jsfeat.yape06.detect(origScene(), origPool(W * H), 5));
    });

    it("yape.detect defaults border to 4 on both sides", () => {
        jsfeatNext.yape.init(W, H, 5, 1);
        jsfeat.yape.init(W, H, 5, 1);
        const omitted = jsfeatNext.yape.detect(nextScene(), keypointPool(W * H));
        expect(omitted).toBe(jsfeatNext.yape.detect(nextScene(), keypointPool(W * H), 4));
        const oOmitted = jsfeat.yape.detect(origScene(), origPool(W * H), undefined);
        expect(oOmitted).toBe(jsfeat.yape.detect(origScene(), origPool(W * H), 4));
    });
});
