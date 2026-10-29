/*
 *  named-exports.test.ts
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
import jsfeatNext from "../src/jsfeatNext";
import * as entry from "../src/index";

/**
 * Named exports (#137): `import { imgproc } from "@webarkit/jsfeat-next"`, so a
 * consumer's bundler can drop the modules it does not use.
 *
 * They are added BESIDE the default namespace, never instead of it, and they
 * must be the very same objects: a named `fast_corners` that were a second
 * instance would keep its own threshold, and `fast_corners.set_threshold(...)`
 * would silently not affect `jsfeatNext.fast_corners`. So every named export
 * is required to be identical (`toBe`) to the namespace property of the same
 * name, and the two sets of names must match in both directions: nothing on
 * the namespace without a named export, nothing named that the namespace lacks.
 */

const { default: namespace, ...named } = entry;

/**
 * The namespace's public statics: modules, constructors, the pool, constants.
 * The namespace is a subclass of the base class every module extends (see
 * src/jsfeatNext.ts), so the constants and VERSION are inherited statics: walk
 * the constructor chain up to Function.prototype.
 */
function staticNames(cls: object): string[] {
    const names = new Set<string>();
    for (let c = cls; c && c !== Function.prototype; c = Object.getPrototypeOf(c)) {
        for (const k of Object.getOwnPropertyNames(c)) names.add(k);
    }
    for (const k of ["length", "name", "prototype"]) names.delete(k);
    return [...names].sort();
}
const namespaceKeys = staticNames(jsfeatNext);

describe("named exports (#137)", () => {
    it("keeps the default export as the namespace", () => {
        expect(namespace).toBe(jsfeatNext);
    });

    it("exports every namespace member by name, and nothing else", () => {
        expect(Object.keys(named).sort()).toEqual(namespaceKeys);
    });

    it.each(namespaceKeys)("named %s is the same object as the namespace member", (key) => {
        expect((named as Record<string, unknown>)[key]).toBe((jsfeatNext as unknown as Record<string, unknown>)[key]);
    });

    it("covers the algorithm singletons, the constructors, the pool and the type constants", () => {
        for (const key of [
            "imgproc",
            "orb",
            "gms",
            "bfmatcher",
            "fast_corners",
            "matrix_t",
            "keypoint_t",
            "pose_estimator",
            "cache",
            "U8C1_t",
            "VERSION",
        ]) {
            expect(namespaceKeys).toContain(key);
        }
    });

    it("shares singleton state between the two ways in", () => {
        const before = jsfeatNext.fast_corners._threshold;
        try {
            entry.fast_corners.set_threshold(37);
            expect(jsfeatNext.fast_corners._threshold).toBe(37);
        } finally {
            jsfeatNext.fast_corners.set_threshold(before);
        }
    });

    it("works with named imports alone", () => {
        const { imgproc, matrix_t, U8C1_t } = entry;
        const rgba = new Uint8Array(4 * 4 * 4).fill(200);
        const gray = new matrix_t(4, 4, U8C1_t);
        imgproc.grayscale(rgba, 4, 4, gray);
        expect(Array.from(gray.data.slice(0, 16))).toEqual(new Array(16).fill(200));
    });
});
