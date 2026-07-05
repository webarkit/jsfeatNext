import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // pure CV math runs headless; no DOM needed
        environment: "node",
        include: ["tests/**/*.test.ts"],
    },
});
