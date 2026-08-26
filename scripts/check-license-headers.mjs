#!/usr/bin/env node
/*
 *  check-license-headers.mjs
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  Verifies (and with --fix, applies) the LGPL license header on every source
 *  file. See .agents/skills/license-header-adder/SKILL.md for the policy.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { readFileSync, writeFileSync, globSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SKILL = join(ROOT, ".agents/skills/license-header-adder/resources");

/** Marker used to detect an already-present header. */
const MARKER = "SPDX-License-Identifier: LGPL-3.0-or-later";

/**
 * Files whose header was extended by hand with extra third-party provenance.
 * They legitimately do not match the template byte-for-byte, so they are
 * checked for the marker only — but the extra notices must never be dropped,
 * hence the required phrases.
 */
const EXTENDED = new Map([
    ["src/math/math.ts", "Regents of the University of California"],
    ["src/orb/bit_pattern_31.ts", "ORB paper"],
]);

/**
 * Files with NO jsfeat-derived content: they get the header without the
 * upstream attribution block, so the credit stays truthful.
 * Everything else under src/ is a port of the corresponding jsfeat code.
 */
const ORIGINAL_SRC = new Set([
    "src/types.ts",
    "src/index.ts",
    // match_t is an OpenCV-shaped value type (cv::DMatch equivalent); jsfeat
    // never shipped a matcher or any such type, so nothing here is derived.
    // (bfmatcher.ts itself IS derived — it ports the sample's popcnt32/
    // match_pattern — and correctly keeps the attribution.)
    "src/bfmatcher/match_t.ts",
    // pose_estimator is a new module: jsfeat has no pose/homography-
    // decomposition code, so nothing here is derived from it.
    "src/pose_estimator/pose_estimator.ts",
]);

/**
 * Third-party or foreign-provenance files. Never stamp these — they either
 * carry their own notice already or their origin is not ours to relicense.
 */
const EXCLUDED = new Set([
    "examples/js/dat.gui.min.js", // Apache-2.0, (c) Google Creative Lab
    "examples/js/compatibility.js", // "from all around the web", inherited from jsfeat examples
    "examples/js/profiler.js", // inherited from jsfeat examples
]);

/**
 * One licence template, two variants. The `{{ATTRIBUTION}}` slot carries the
 * upstream jsfeat MIT notice, which is REQUIRED on ported code (MIT obliges us
 * to retain it) and must be ABSENT from code original to jsfeatNext, where it
 * would be a false credit — and would make licence scanners report MIT content
 * in files that have none.
 *
 * Kept as one base plus a snippet rather than two near-identical files, so the
 * licence text itself cannot drift between variants.
 */
const base = readFileSync(join(SKILL, "HEADER.txt"), "utf8");
const attribution = readFileSync(join(SKILL, "ATTRIBUTION-jsfeat.txt"), "utf8");
const templates = {
    derived: base.replace("{{ATTRIBUTION}}", attribution),
    original: base.replace("{{ATTRIBUTION}}", ""),
};

/** Renders the block-comment header for a JS/TS file. */
function jsHeader(kind, filename) {
    return templates[kind].replace("{{FILENAME}}", filename);
}

/**
 * Renders the same text as an HTML comment, for the example pages.
 * Drops the leading `/*` and trailing `*​/` lines and converts the ` * `
 * gutter to plain indentation. The text contains no `--`, so it is a valid
 * comment body.
 */
function htmlHeader(kind, filename) {
    const inner = jsHeader(kind, filename)
        .split("\n")
        .slice(1, -2) // drop "/*", " */" and the trailing empty string
        .map((line) => (line.startsWith(" * ") ? "  " + line.slice(3) : line === " *" ? "" : line))
        .join("\n");
    return `<!--\n${inner}\n-->\n`;
}

/** Every file in scope, with the template it should carry. */
function collect() {
    const out = [];
    const add = (patterns, kind, type) => {
        for (const pattern of patterns) {
            for (const abs of globSync(pattern, { cwd: ROOT })) {
                const rel = relative(ROOT, join(ROOT, abs)).split("\\").join("/");
                if (EXCLUDED.has(rel)) continue;
                out.push({ rel, kind: ORIGINAL_SRC.has(rel) ? "original" : kind, type });
            }
        }
    };
    // src/ is a port of jsfeat, apart from the explicitly original files above
    add(["src/**/*.ts"], "derived", "js");
    // our own tests: original work, no derived portions
    add(["tests/**/*.ts"], "original", "js");
    // benchmarks (#86): our own harness, same reasoning as tests/
    add(["bench/**/*.ts"], "original", "js");
    // example pages descend from jsfeat's sample pages; our ESM helpers do not
    add(["examples/*.html"], "derived", "html");
    add(["examples/js/*.mjs"], "original", "js");
    return out.filter((f) => !f.rel.startsWith("tests/vendor/"));
}

const fix = process.argv.includes("--fix");
const files = collect();
const missing = [];

for (const { rel, kind, type } of files) {
    const abs = join(ROOT, rel);
    const body = readFileSync(abs, "utf8");
    const name = basename(rel);
    const expected = type === "html" ? htmlHeader(kind, name) : jsHeader(kind, name);

    if (body.includes(MARKER)) {
        if (fix) continue; // never stack a second header

        // Present — now confirm it is the RIGHT one. A marker-only check would
        // miss a drifted template, the wrong variant applied, or a hand-edit.
        const required = EXTENDED.get(rel);
        if (required) {
            if (!body.includes(required)) {
                missing.push(`${rel} (lost its third-party notice: "${required}")`);
            }
        } else if (!body.includes(expected)) {
            missing.push(`${rel} (header does not match the ${kind} template)`);
        }
        continue;
    }

    if (!fix) {
        missing.push(`${rel} (no header)`);
        continue;
    }

    if (type === "html") {
        // keep <!DOCTYPE html> first: a comment before it can trip quirks mode
        const m = body.match(/^(\s*<!DOCTYPE[^>]*>\r?\n)/i);
        if (!m) {
            missing.push(`${rel} (no DOCTYPE found — needs manual placement)`);
            continue;
        }
        writeFileSync(abs, m[1] + expected + body.slice(m[1].length));
    } else {
        writeFileSync(abs, expected + "\n" + body);
    }
    console.log(`  + ${rel} (${kind})`);
}

if (fix) {
    console.log(`\nDone. ${files.length} files in scope.`);
} else if (missing.length) {
    console.error(`License header problems in ${missing.length} file(s):\n`);
    for (const f of missing) console.error(`  - ${f}`);
    console.error(`\nRun: node scripts/check-license-headers.mjs --fix`);
    process.exit(1);
} else {
    console.log(`License headers present in all ${files.length} source files.`);
}
