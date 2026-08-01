import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // pure CV math runs headless; no DOM needed
        environment: "node",
        include: ["tests/**/*.test.ts"],
        // Wraps every test with the shared buffer-pool leak check (#87).
        setupFiles: ["./tests/setup/pool-balance.ts"],
    },
});
