/*
 * bench-ratios.mjs — reduce a `vitest bench` JSON-reporter file to A/B ratios.
 *
 * Reads the raw Vitest 5 JSON-reporter output (`--reporter=json`, see the
 * `bench:ratios` script) and prints one line per case: which side won, and by
 * how much. Optionally writes a compact JSON.
 *
 * WHY RATIOS AND NOT `hz`: absolute throughput depends on the CPU model, its
 * thermal state, what else the machine is doing and the Node version — none of
 * which a shared CI runner pins down. A number recorded on one box and diffed
 * against another reports noise as a regression. The ratio, measured for both
 * implementations in the same process at the same moment, cancels almost all
 * of that. See bench/README.md.
 *
 * INPUT SHAPE (Vitest 5, issue #219). Vitest 4 wrote `files[].groups[].benchmarks[]`
 * through `--outputJson`. Vitest 5 removed that flag; benchmarks are now regular
 * tests, and the JSON reporter attaches each test's results as a `benchmarks`
 * field:
 *
 *   testResults[].assertionResults[]      one entry per test
 *     .ancestorTitles / .title            the enclosing describe, the test's own title
 *     .benchmarks[].tasks[]               one entry per `bench(...).run()`
 *       .name                             "jsfeatNext" / "jsfeat (reference)"
 *       .period                           mean latency, ms
 *       .latency.rme                      relative margin of error, %
 *
 * One test is one A/B group: its tasks are collected across all of its
 * `benchmarks` entries (two sequential `.run()` calls give two entries of one
 * task each; `bench.compare()` would give one entry of two) and paired by name.
 * The case key is the enclosing describe's name -- exactly the key the Vitest 4
 * reader derived -- so `bench/history.jsonl` stays comparable.
 *
 * HZ DEFINITION. `hz` is `1000 / period` (operations per second from the mean
 * latency), which is what Vitest 4 / tinybench 4 reported as `hz`. It is NOT the
 * `throughput.mean` that Vitest 5's console table prints under the same "hz"
 * heading: that is the mean of per-sample throughputs, a different estimator
 * that diverges from `1000 / period` once a call is fast enough for the timer
 * to quantise it (the ~100 ns cache cases differ by tens of percent). The
 * ratio's definition -- jsfeatNext hz / jsfeat hz -- is unchanged.
 *
 * Usage:
 *   node scripts/bench-ratios.mjs <input.json> [--json <out>] [--markdown]
 *                                 [--append <history.jsonl>]
 *
 * `--append` adds ONE line to an append-only history file. Prior art: OpenCV's
 * cvbenchmark commits its results too, organised per release with the CPU in
 * the filename -- it does not pretend cross-machine numbers are comparable, it
 * labels which machine produced them. This does the same by recording the
 * environment alongside the ratios, so a future reader can tell whether two
 * records are comparable at all.
 */

import { readFileSync, writeFileSync, appendFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { cpus, platform, arch } from "node:os";
import { dirname } from "node:path";

/** Ignore anything below this — see bench/README.md's measured noise floor. */
const NOISE_FLOOR = 1.15;

const args = process.argv.slice(2);
const input = args.find((a) => !a.startsWith("--"));
if (!input) {
    console.error("usage: node scripts/bench-ratios.mjs <input.json> [--json <out>] [--markdown]");
    process.exit(2);
}
const jsonOut = args.includes("--json") ? args[args.indexOf("--json") + 1] : null;
const appendTo = args.includes("--append") ? args[args.indexOf("--append") + 1] : null;
const markdown = args.includes("--markdown");

/**
 * Both sides are identified by name prefix. `jsfeatNext` is checked FIRST:
 * "jsfeatNext" also starts with "jsfeat", so the looser test would swallow it.
 * Names carry suffixes in places ("jsfeatNext (matrix_t)", "jsfeat (reference,
 * raw array)"), hence prefix matching rather than equality.
 */
function side(name) {
    if (name.startsWith("jsfeatNext")) return "next";
    if (name.startsWith("jsfeat")) return "oracle";
    return null;
}

const raw = JSON.parse(readFileSync(input, "utf8"));

// Refuse input that is not Vitest's JSON reporter output. Without this, a
// Vitest 4 `--outputJson` file (or any other JSON) would reduce to zero rows,
// and `--append` would then write an empty record into the permanent history.
if (!Array.isArray(raw.testResults)) {
    console.error(
        `${input}: no \`testResults\` array -- expected Vitest 5 JSON-reporter output ` +
            "(vitest bench --run --reporter=json --outputFile.json=<file>)"
    );
    process.exit(2);
}

/** Operations per second from the mean latency in ms: Vitest 4's `hz`. */
function hzOf(task) {
    return task.period > 0 ? 1000 / task.period : NaN;
}

const rows = [];

for (const file of raw.testResults) {
    for (const test of file.assertionResults ?? []) {
        // A test the run filtered out (`-t`) is not a case that went missing.
        if (test.status === "skipped" || test.status === "pending" || test.status === "todo") continue;

        // The enclosing describe's name is the case key; a test outside any
        // describe falls back to its own title.
        const caseName = test.ancestorTitles?.length ? test.ancestorTitles.join(" > ") : test.title;

        let next = null;
        let oracle = null;
        for (const bm of test.benchmarks ?? []) {
            for (const task of bm.tasks ?? []) {
                const s = side(task.name);
                if (s === "next") next = task;
                else if (s === "oracle") oracle = task;
            }
        }
        // A test missing either side cannot produce a ratio. Report it rather
        // than dropping it silently — a case that stopped pairing up is a bug
        // in the bench file, not something to hide. A failed test lands here
        // too, with its reason.
        if (test.status !== "passed" || !next || !oracle) {
            const why =
                test.status !== "passed"
                    ? `test ${test.status}: ${(test.failureMessages?.[0] ?? "").split("\n")[0]}`
                    : "missing jsfeatNext and/or jsfeat side";
            rows.push({ case: `${file.name ?? "?"} > ${caseName}`, error: why });
            continue;
        }
        const nextHz = hzOf(next);
        const oracleHz = hzOf(oracle);
        if (!(nextHz > 0) || !(oracleHz > 0)) {
            rows.push({ case: caseName, error: "a side reported no usable mean latency" });
            continue;
        }
        const faster = nextHz >= oracleHz ? "jsfeatNext" : "jsfeat";
        const ratio = nextHz >= oracleHz ? nextHz / oracleHz : oracleHz / nextHz;
        rows.push({
            case: caseName,
            faster,
            ratio: Number(ratio.toFixed(3)),
            // Signed: >1 means jsfeatNext is faster, <1 means jsfeat is. The
            // display `ratio` above is always >=1 and needs `faster` to be
            // read; this one is directional, which is what aggregating needs.
            speedup: Number((nextHz / oracleHz).toFixed(4)),
            aboveFloor: ratio >= NOISE_FLOOR,
            rme: { jsfeatNext: Number(next.latency.rme.toFixed(2)), jsfeat: Number(oracle.latency.rme.toFixed(2)) },
        });
    }
}

if (rows.length === 0) {
    console.error(`${input}: no benchmark results found (did the run execute any bench tests?)`);
    process.exit(2);
}

if (jsonOut) {
    writeFileSync(jsonOut, JSON.stringify({ noiseFloor: NOISE_FLOOR, rows }, null, 2) + "\n");
}

/**
 * Geometric mean of the SIGNED speedups — one number for "overall, which side
 * is ahead?". Borrowed from OpenCV's cvbenchmark, which aggregates its test
 * cases the same way.
 *
 * Geometric rather than arithmetic because these are ratios: 2x faster and 2x
 * slower must cancel to 1.0, and only the geometric mean does that. An
 * arithmetic mean of 2.0 and 0.5 gives 1.25, inventing an improvement out of
 * a wash.
 *
 * Read it as a coarse indicator, never as a finding: it averages a 3x outlier
 * on a tiny function together with cases that barely move, so a per-case
 * regression can hide inside a healthy-looking mean. The table is the data.
 */
function geomean(values) {
    if (!values.length) return null;
    const sum = values.reduce((acc, v) => acc + Math.log(v), 0);
    return Number(Math.exp(sum / values.length).toFixed(4));
}

/** Best-effort commit sha; benchmarks are useful even outside a git checkout. */
function sha() {
    if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 12);
    try {
        return execFileSync("git", ["rev-parse", "--short=12", "HEAD"], { encoding: "utf8" }).trim();
    } catch {
        return null;
    }
}

function packageVersion() {
    try {
        return JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")).version;
    } catch {
        return null;
    }
}

if (appendTo) {
    const measured = rows.filter((r) => !r.error);
    const record = {
        date: new Date().toISOString(),
        version: packageVersion(),
        sha: sha(),
        // WHY the environment is recorded: the A/B ratio cancels most machine
        // differences, but not all of them -- `yape06` measured ~1.3x on one
        // checkout and ~1.04x on another. Two records are only comparable if
        // this block matches, and a reader cannot tell without it. cvbenchmark
        // puts the CPU in the filename for the same reason.
        env: {
            ci: Boolean(process.env.CI),
            node: process.version,
            platform: platform(),
            arch: arch(),
            cpu: cpus()[0]?.model ?? null,
            cores: cpus().length,
        },
        geomean: geomean(measured.map((r) => r.speedup)),
        cases: Object.fromEntries(measured.map((r) => [r.case, r.speedup])),
    };
    const dir = dirname(appendTo);
    if (dir && dir !== "." && !existsSync(dir)) mkdirSync(dir, { recursive: true });
    // One line per run, appended, never rewritten: an existing record is a
    // measurement that was taken, and editing it would be falsifying history.
    appendFileSync(appendTo, JSON.stringify(record) + "\n");
    console.error(`appended 1 record to ${appendTo} (geomean ${record.geomean})`);
}

if (markdown) {
    console.log("| case | faster | ratio | above floor? |");
    console.log("| --- | --- | --- | --- |");
    for (const r of rows) {
        if (r.error) {
            console.log(`| \`${r.case}\` | — | — | ⚠️ ${r.error} |`);
            continue;
        }
        console.log(`| ${r.case} | ${r.faster} | ${r.ratio.toFixed(2)}x | ${r.aboveFloor ? "yes" : "no"} |`);
    }
} else {
    for (const r of rows) {
        if (r.error) {
            console.log(`!! ${r.case}: ${r.error}`);
            continue;
        }
        console.log(`${r.ratio.toFixed(2)}x ${r.faster.padEnd(10)} ${r.aboveFloor ? "*" : " "} ${r.case}`);
    }
}

// Always exit 0. This tool reports; it never gates. Benchmarks on a shared
// runner are far too noisy to fail a build on (issue #86).
process.exit(0);
