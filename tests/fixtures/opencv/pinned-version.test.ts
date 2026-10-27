/*
 *  pinned-version.test.ts
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
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { FIXTURE_DIR, type FixtureMeta } from "./loader";

/**
 * Enforces the OpenCV reference-version rule in AGENTS.md: every comparison
 * with OpenCV uses one pinned build, and moving off it is a deliberate,
 * reviewed change.
 *
 * The exact build lives in ONE place, `scripts/requirements-fixtures.txt`. The
 * generator already refuses to run against any other `cv2.__version__` and
 * switches Intel IPP off; this test closes the remaining gaps: a fixture
 * committed from another version or with IPP on, a pin bumped without updating
 * the rule that names it, and a citation of another OpenCV version (or of no
 * version at all) in the code and the top-level docs.
 */

const ROOT = join(FIXTURE_DIR, "..", "..", "..");

/** `opencv-contrib-python==A.B.C.D` → wheel `A.B.C.D`, `cv2.__version__` `A.B.C`. */
const PIN = /^opencv-contrib-python==((\d+\.\d+\.\d+)\.\d+)[ \t]*$/m;

const requirements = readFileSync(join(ROOT, "scripts", "requirements-fixtures.txt"), "utf8");
const pin = requirements.match(PIN);
const fixtures = readdirSync(FIXTURE_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

/**
 * Files whose OpenCV citations must be pinned: the code, the tests, the benches,
 * the scripts and the docs a contributor reads first. `docs/` is exempt: it holds
 * dated analyses, which name the version they were checked against instead.
 */
const SKIP = new Set(["node_modules", "dist", "types", "coverage", ".venv", "vendor", "bench-results"]);
function walk(dir: string, exts: string[]): string[] {
    const out: string[] = [];
    for (const entry of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
        const rel = `${dir}/${entry.name}`;
        if (entry.isDirectory()) {
            if (!SKIP.has(entry.name)) out.push(...walk(rel, exts));
        } else if (exts.some((e) => entry.name.endsWith(e))) {
            out.push(rel);
        }
    }
    return out;
}
const CITING = [
    ...walk("src", [".ts"]),
    ...walk("tests", [".ts", ".md"]),
    ...walk("bench", [".ts", ".md"]),
    ...walk("scripts", [".py", ".mjs", ".txt"]),
    "AGENTS.md",
    "CLAUDE.md",
    "README.md",
    "MAINTAINERS.md",
    ".github/copilot-instructions.md",
    ".agents/instructions.md",
    ".agents/skills/license-header-adder/SKILL.md",
].sort();

/** A GitHub link into opencv or opencv_contrib; group 1 is the ref (tag, branch or sha). */
const SOURCE_LINK = /https?:\/\/github\.com\/opencv\/opencv(?:_contrib)?\/(?:blob|tree)\/([^/\s)#]+)/g;
/** A docs.opencv.org link; group 1 is the version segment. */
const DOCS_LINK = /https?:\/\/docs\.opencv\.org\/([^/\s)#]+)/g;
/** A bare `name.cpp:NN`-style citation (NN a line number), which names no version at all. */
const BARE_CITATION = /(?<![\w/.-])[\w-]+\.(?:cpp|hpp|h):\d+/g;

describe("OpenCV reference version (AGENTS.md)", () => {
    it("the requirements file pins one exact opencv-contrib-python build", () => {
        expect(pin).not.toBeNull();
        expect(requirements.match(new RegExp(PIN.source, "gm"))).toHaveLength(1);
    });

    it("there are committed OpenCV fixtures to check", () => {
        expect(fixtures.length).toBeGreaterThan(0);
    });

    it.each(fixtures)("%s was generated with the pinned OpenCV, on the generic CPU path", (file) => {
        const { meta } = JSON.parse(readFileSync(join(FIXTURE_DIR, file), "utf8")) as { meta: FixtureMeta };
        // The exact wheel (#245): another build of the same A.B.C reports the
        // same cv2.__version__ and the same "Version control" lines.
        expect(meta.opencv_wheel).toBe(`opencv-contrib-python==${pin[1]}`);
        expect(meta.opencv_version).toBe(pin[2]);
        expect(meta.opencv_build).toBe(pin[2]);
        expect(meta.opencv_contrib_build).toBe(pin[2]);
        expect(meta.ipp).toBe(false);
    });

    it("AGENTS.md names the pinned build, so the rule and the pin move together", () => {
        expect(readFileSync(join(ROOT, "AGENTS.md"), "utf8")).toContain(`opencv-contrib-python==${pin[1]}`);
    });

    // The rule is stated, with the version spelled out, in every entry point a
    // contributor or an agent reads first; a bump must update all of them.
    it.each(["AGENTS.md", "CLAUDE.md", "README.md", ".github/copilot-instructions.md", ".agents/instructions.md"])(
        "%s states the pinned OpenCV version",
        (file) => {
            expect(readFileSync(join(ROOT, file), "utf8")).toContain(`OpenCV ${pin[2]}`);
        }
    );

    it.each(CITING)("%s cites OpenCV only at the pinned version", (file) => {
        const text = readFileSync(join(ROOT, file), "utf8");
        const refs = [...text.matchAll(SOURCE_LINK), ...text.matchAll(DOCS_LINK)].map((m) => m[1]);
        expect(refs.filter((ref) => ref !== pin[2])).toEqual([]);
        expect(text.match(BARE_CITATION) ?? []).toEqual([]);
    });
});
