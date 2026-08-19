import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // pure CV math runs headless; no DOM needed
        environment: "node",
        include: ["tests/**/*.test.ts"],
        // Wraps every test with the shared buffer-pool leak check (#87).
        // Applies to `vitest run` only — `benchmark` below opts out, since the
        // check would add work inside the measurement.
        setupFiles: ["./tests/setup/pool-balance.ts"],
        benchmark: {
            // Throughput benchmarks live in bench/ and run via `npm run bench`
            // (issue #86). Kept out of `include` above so the test suite never
            // pays for them, and out of setupFiles so nothing instruments the
            // timed region.
            include: ["bench/**/*.bench.ts"],
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
