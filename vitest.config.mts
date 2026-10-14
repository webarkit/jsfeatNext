import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // pure CV math runs headless; no DOM needed
        environment: "node",
        include: ["tests/**/*.test.ts"],
        // Wraps every test with the shared buffer-pool leak check (#87).
        // Vitest 5 runs the benchmarks as ordinary tests in a dedicated project
        // that inherits this config, so the check wraps them too. That is
        // harmless: its hooks run once per test, outside every timed callback.
        setupFiles: ["./tests/setup/pool-balance.ts"],
        benchmark: {
            // Throughput benchmarks live in bench/ and run via `npm run bench`
            // (issue #86). Kept out of `include` above so the test suite never
            // pays for them.
            include: ["bench/**/*.bench.ts"],
            // NOT just noise suppression, and do not remove it. While a
            // benchmark runs, Vitest 5 instruments every export of every
            // module it transforms (a Map lookup and write per access) to be
            // able to warn about "excessive getter calls" -- unless this flag
            // is set, in which case the instrumentation is not installed at
            // all. That bookkeeping lands inside the timed region and only on
            // the jsfeatNext side (the vendored jsfeat oracle is CommonJS, so
            // its exports are plain properties and never instrumented): on
            // the 100 ns `cache` steady-state case it turned a 1.01x ratio
            // into 2.5x. The residual cost of the plain getters is the
            // module-runner artefact documented in bench/README.md (#169).
            suppressExportGetterWarnings: true,
        },
        coverage: {
            // A GAP DETECTOR, not a quality score (#123). It answers "which code
            // does no test touch?" — never "is the code well tested?": all five
            // real defects found during #87 lived in code the suite already
            // executed at 100%. There is deliberately no threshold gating CI:
            // a percentage target is how a suite full of shallow
            // `toBeDefined()` assertions gets written.
            provider: "v8",
            // Measure the shipped library only. The vendored jsfeat oracle
            // (tests/vendor) and the examples are out of scope by construction.
            include: ["src/**/*.ts"],
            // Report every src file, imported or not, so an entirely
            // unexercised module shows up as 0% instead of being absent.
            // NB the text reporter TRUNCATES long paths ("...al_flow_lk.ts");
            // when auditing which files are covered, trust
            // coverage/coverage-summary.json (json-summary reporter) or the
            // HTML report, not a grep over the table.
            all: true,
            // lcov feeds the Codecov upload in CI; the others are for humans.
            reporter: ["text-summary", "text", "html", "lcov"],
            reportsDirectory: "coverage",
        },
    },
});
