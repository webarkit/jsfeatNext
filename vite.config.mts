import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

/**
 * Library build for jsfeatNext (replaces the webpack + babel + ts-loader chain).
 *
 * - UMD  (dist/jsfeatNext.js): global `jsfeatNext`, exposing the *default* export
 *   so browser <script> consumers keep the historical `jsfeatNext.jsfeatNext`
 *   access (the double-namespace itself is addressed separately in #41). Also
 *   CommonJS-requireable, so it stays the `main` entry.
 * - ESM  (dist/jsfeatNext.mjs): the `module` / `import` entry.
 * - Type declarations via vite-plugin-dts -> types/ (mirrors the src/ tree, so
 *   the public types entry stays types/src/index.d.ts).
 */
export default defineConfig({
    build: {
        target: "es2015",
        sourcemap: false,
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
            name: "jsfeatNext",
            formats: ["umd", "es"],
            fileName: (format) => (format === "es" ? "jsfeatNext.mjs" : "jsfeatNext.js"),
        },
        rollupOptions: {
            output: {
                // Reproduce webpack's libraryExport: "default": expose the default
                // export as the `jsfeatNext` UMD global and as module.exports.
                exports: "default",
            },
        },
    },
    plugins: [
        dts({
            // NB: vite-plugin-dts v5 (unplugin-dts) renamed `outDir` -> `outDirs`.
            outDirs: ["types"],
            entryRoot: ".",
            include: ["src"],
        }),
    ],
});
