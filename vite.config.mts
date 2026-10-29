import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const pkg = JSON.parse(readFileSync(new URL("package.json", import.meta.url), "utf8"));

/**
 * Legal banner prepended to both bundles (issue #112). `/*!` marks it as a
 * legal comment, so esbuild's minifier preserves it — without this the
 * published package shipped no licence notice at all.
 */
const banner = `/*!
 * jsfeatNext v${pkg.version} — https://github.com/webarkit/jsfeatNext
 *
 * SPDX-License-Identifier: LGPL-3.0-or-later
 * Copyright 2026 WebARKit. Author(s): Walter Perdan @kalwalt
 *
 * Derived from jsfeat (https://github.com/inspirit/jsfeat),
 * Copyright (c) Eugene Zatepyakin, released under the MIT License.
 *
 * Portions ported from OpenCV (https://github.com/opencv/opencv_contrib),
 * Copyright (c) OpenCV contributors, licensed under the Apache License 2.0;
 * see LICENSES/Apache-2.0.txt in this package.
 *
 * This library is distributed WITHOUT ANY WARRANTY, without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for details: http://www.gnu.org/licenses/
 */`;

/**
 * Prepends {@link banner} to every emitted chunk. Done as a `generateBundle`
 * plugin rather than `output.banner` because that option is applied before
 * minification, and Rolldown's Oxc minifier drops it from the UMD bundle even
 * with legal comments enabled. `generateBundle` runs after minification, so
 * nothing downstream can strip it.
 */
function licenseBannerPlugin() {
    return {
        name: "jsfeatnext:license-banner",
        enforce: "post" as const,
        generateBundle(_options, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type === "chunk" && !file.code.startsWith("/*!")) {
                    file.code = `${banner}\n${file.code}`;
                }
            }
        },
    };
}

/**
 * Library build for jsfeatNext (replaces the webpack + babel + ts-loader chain).
 * Two passes, because the two formats need different entry points (#137):
 *
 * - `vite build` (default mode): ESM (dist/jsfeatNext.mjs) from src/index.ts,
 *   the `module` / `import` entry. It carries the default namespace AND the
 *   named exports (`import { imgproc }`), so a consumer's bundler can drop
 *   the modules it does not use. Also emits the type declarations via
 *   vite-plugin-dts -> types/ (mirrors the src/ tree, so the public types
 *   entry stays types/src/index.d.ts). Empties dist/ first.
 * - `vite build --mode umd`: UMD (dist/jsfeatNext.js) from src/umd.ts, which
 *   exports the namespace only, so the `jsfeatNext` global and
 *   `module.exports` stay the namespace itself, as browser <script> consumers
 *   and CommonJS `require` expect. Also the `main` entry. Runs second and
 *   leaves dist/ as the first pass wrote it.
 *
 * `npm run build-ts` runs both. In watch mode (`npm run dev-ts`, `dev-ts:umd`)
 * neither pass empties dist/, so each leaves the other format's bundle in place.
 */
export default defineConfig(({ mode }) => {
    const umd = mode === "umd";
    return {
        build: {
            target: "es2015",
            sourcemap: false,
            // Only a full ESM build empties dist/. A watch pass rebuilds one
            // format, so emptying would delete the other format's bundle.
            emptyOutDir: !umd && !process.argv.includes("--watch"),
            lib: {
                entry: fileURLToPath(new URL(umd ? "src/umd.ts" : "src/index.ts", import.meta.url)),
                name: "jsfeatNext",
                formats: [umd ? "umd" : "es"],
                fileName: () => (umd ? "jsfeatNext.js" : "jsfeatNext.mjs"),
            },
            rollupOptions: {
                output: {
                    // UMD: reproduce webpack's libraryExport: "default", exposing
                    // the default export as the `jsfeatNext` global and as
                    // module.exports. ESM: the default namespace plus the named
                    // exports of src/index.ts.
                    exports: umd ? "default" : "named",
                },
            },
        },
        plugins: [
            licenseBannerPlugin(),
            // Declarations once, from the ESM pass: src/index.ts reaches every
            // public type, and the UMD pass would only rewrite the same files.
            ...(umd
                ? []
                : [
                      dts({
                          // NB: vite-plugin-dts v5 (unplugin-dts) renamed `outDir` -> `outDirs`.
                          outDirs: ["types"],
                          entryRoot: ".",
                          include: ["src"],
                          // Fail the build on a declaration error instead of
                          // logging it and publishing without that .d.ts: a
                          // TS4094 during #137 silently dropped
                          // types/src/jsfeatNext.d.ts while the build passed.
                          afterDiagnostic: (diagnostics) => {
                              if (diagnostics.length > 0) {
                                  throw new Error(
                                      `vite-plugin-dts: ${diagnostics.length} declaration error(s), see above`
                                  );
                              }
                          },
                      }),
                  ]),
        ],
    };
});
