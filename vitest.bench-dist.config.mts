// `npm run bench:dist` (#169): run the bench files against the BUILT bundle
// (`dist/jsfeatNext.mjs`, so `npm run build-ts` first) instead of the
// vite-node-transformed source.
//
// Why this exists: vite-node rewrites every `import { x } from "./y"` into a
// per-call lookup on a module-namespace object, so a cross-module helper such
// as linalg's `swap` costs a property load plus an un-inlined call on every
// invocation. The Rollup bundle consumers install has plain bindings there.
// The source-transformed run is still the default (it needs no build and is
// what CI's smoke check exercises); use this one before reading any
// jsfeatNext-vs-jsfeat ratio as a statement about shipped code. See
// bench/README.md, "Current status".
import { mergeConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import base from "./vitest.config.mts";

const dist = fileURLToPath(new URL("./dist/jsfeatNext.mjs", import.meta.url));

export default mergeConfig(base, {
    resolve: {
        alias: [{ find: /^\.\.\/src\/jsfeatNext$/, replacement: dist }],
    },
});
