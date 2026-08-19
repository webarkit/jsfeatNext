import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // pure CV math runs headless; no DOM needed
        environment: "node",
        include: ["tests/**/*.test.ts"],
        // Wraps every test with the shared buffer-pool leak check (#87).
        setupFiles: ["./tests/setup/pool-balance.ts"],
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
            reporter: ["text-summary", "text", "html"],
            reportsDirectory: "coverage",
        },
    },
});
