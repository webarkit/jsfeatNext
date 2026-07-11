# jsfeatNext ↔ jsfeat — Parity, Pitfalls & Refactoring Plan

> **Status:** Design / planning document (produced via `/brainstorming`). **No code changes** are proposed *in this document* — it is the roadmap for a later, separately-approved implementation pass.
> **Compared against:** [inspirit/jsfeat](https://github.com/inspirit/jsfeat) `src/`.
> **jsfeatNext version at time of writing:** 0.7.5.
> **Legend:** ✅ ported · ⚠️ ported but diverges · ❌ missing · 🔎 needs function-level enumeration.

---

## 0. Executive summary

jsfeatNext is a TypeScript port of jsfeat for WebARKit. The core algorithms are largely present and appear numerically faithful, **but** the port diverges from jsfeat in three structural ways that undermine the README's "drop-in" promise, and it is missing two detector modules. The internal architecture (a ~3,900-line monolith backed by type-only stub files) is the dominant maintainability risk and the top refactoring target.

### Severity-ranked issues (to be confirmed/expanded during execution)

| # | Severity | Issue | Axis | Status |
|---|----------|-------|------|--------|
| 1 | 🔴 High | **Not drop-in compatible** with jsfeat: algorithm modules require `new` (instance methods) vs jsfeat's static namespace functions | 2 | ✅ **resolved in 0.9.0** — singletons, no `new` (#41, `docs/migration-0.9.md`) |
| 2 | 🔴 High | **Type-only stub files** (`src/**/<module>.ts` throw `"Method not implemented"`); real logic is duplicated inline in `src/jsfeatNext.ts` | 3, 4 | ✅ resolved in 0.8.0 (#47) |
| 3 | 🟠 Med-High | **Missing modules**: `haar` (Haar cascade) and `bbf` (BBF) object/face detection | 1 | ⬜ open (#43/#44) |
| 4 | 🟠 Med | **Per-instance cache allocation** — each `new jsfeatNext.imgproc()` builds its own 30-buffer pool; jsfeat shares one global cache | 2, 4 | ✅ **resolved in 0.9.0** — one `shared_cache` (#41) |
| 5 | 🟠 Med | **Double namespace** `jsfeatNext.jsfeatNext` forced on every consumer | 2, 5 | ✅ **resolved in 0.9.0** — default export is the namespace (#41) |
| 6 | 🟡 Low-Med | **Dead / trap code**: `src/orb/rectify_patch.ts` imports the *stub* `imgproc` (throws or is unused) | 3 | ✅ resolved in 0.8.0 (#47) |
| 7 | 🟡 Low | **Build/deps**: double transpile (ts-loader→babel), `prettier`/`ts-loader` mis-listed as runtime deps, `rimraf ./build` clears the wrong dir, UMD-only output | 5 | ✅ resolved in 0.8.0 (#42/#53/#60) |
| 8 | 🟡 Low | **No automated tests** — only manual HTML examples; blocks safe refactoring | 4, App. B | ✅ resolved in 0.8.0 (#39/#49) |

---

## 1. Axis 1 — Feature parity (function & parameter level)

### 1.1 Module-level map (confirmed)

| jsfeat `src/*.js` | jsfeatNext | Status | Notes |
|---|---|---|---|
| `jsfeat_struct.js` | `matrix_t`, `data_t`, `keypoint_t`, `point_t`, `pyramid_t`, `data_type` | ✅ | split into separate files |
| `jsfeat_cache.js` | `cache` | ✅ | real module |
| `jsfeat_math.js` | `math` | ✅ | inline in monolith |
| `jsfeat_linalg.js` | `linalg` | ✅ | inline in monolith |
| `jsfeat_mat_math.js` | `matmath` | ✅ | real module |
| `jsfeat_transform.js` | `transform` | ✅ | real module |
| `jsfeat_imgproc.js` | `imgproc` | ✅ | inline in monolith; module file is a stub |
| `jsfeat_fast_corners.js` | `fast_corners` | ✅ | inline in monolith |
| `jsfeat_yape.js` | `yape` | ✅ | real module |
| `jsfeat_yape06.js` | `yape06` | ✅ | inline in monolith |
| `jsfeat_orb.js` | `orb` | ✅ | inline in monolith; real `src/orb/*` also present |
| `jsfeat_optical_flow_lk.js` | `optical_flow_lk` | ✅ | inline in monolith |
| `jsfeat_motion_estimator.js` | `motion_estimator`, `ransac_params_t`, `affine2d`, `homography2d` | ✅ | inline in monolith |
| `jsfeat_haar.js` | — | ❌ | **missing** (see Appendix A) |
| `jsfeat_bbf.js` | — | ❌ | **missing** (see Appendix A) |
| `jsfeat.js` / `jsfeat_export.js` | `index.ts` / constants | ✅ | namespace/build scaffolding |

### 1.2 Function-and-parameter enumeration (method)

For **each** module, produce a table: `jsfeat symbol → jsfeatNext symbol → signature match? → default-arg/arg-order diffs → numeric-behavior notes`.

**Worked example — `imgproc`** (stub interface confirms the surface; implementations are inline in `jsfeatNext.ts`):

| Function | jsfeatNext | Params match jsfeat? | Notes |
|---|---|---|---|
| `grayscale` | ✅ inline | 🔎 verify `code` default | default `COLOR_RGBA2GRAY` |
| `resample`, `box_blur_gray`, `gaussian_blur` | ✅ inline | 🔎 | `options`/`sigma` defaults |
| `pyrdown`, `scharr_derivatives`, `sobel_derivatives` | ✅ inline | 🔎 | |
| `compute_integral_image` | ✅ inline | 🔎 | tilted-sum branch present |
| `hough_transform` | ✅ inline | 🔎 | jsfeatNext-added? confirm vs jsfeat |
| `equalize_histogram`, `canny`, `warp_perspective`, `warp_affine` | ✅ inline (per examples) | 🔎 | `fill_value` default |

> **Remaining work:** repeat 1.2 for `math`, `linalg`, `matmath`, `transform`, `fast_corners`, `yape`, `yape06`, `orb`, `optical_flow_lk`, `motion_estimator`, and the `*_t` structs. This is the bulk of the execution pass.

---

## 2. Axis 2 — API / behavioral parity

> **✅ Status update (0.9.0, issue #41):** rows 1–4 below are RESOLVED — algorithm
> modules are now singletons (`jsfeatNext.imgproc.grayscale(...)`, no `new`),
> the double namespace is gone (the default export is the namespace itself),
> all modules share ONE buffer pool (`jsfeatNext.cache`), and stateful modules
> behave like jsfeat's (`jsfeatNext.yape06.laplacian_threshold = 30`).
> Full mapping + motivation: [`docs/migration-0.9.md`](migration-0.9.md).
> The table below is kept as the historical record of the pre-0.9.0 state.

Even where algorithms match, **how you call them differs** — so jsfeat code is *not* copy-paste compatible, contradicting the README claim ("if it works on jsfeat it works on jsfeatNext").

| Aspect | jsfeat | jsfeatNext | Impact |
|---|---|---|---|
| Namespace | `jsfeat.imgproc.grayscale()` | `var jsfeat = jsfeatNext.jsfeatNext` then `new jsfeat.imgproc().grayscale()` | 🔴 breaks drop-in use |
| Module call style | static namespace functions | **instance methods** (`new`) | 🔴 |
| Cache | one global `jsfeat.cache` | **per-instance**: base ctor runs `this.cache.allocate(30, 640*4)` on every `new` | 🟠 memory/perf; buffers not shared |
| Static vs instance | consistent (all on namespace) | **mixed**: `jsfeat.yape06.laplacian_threshold = 0` (static) but `new jsfeat.yape06()` (instance) | 🟠 confusing |
| Default args | `typeof x === 'undefined'` guards | mostly preserved | 🔎 verify per function |

**Method:** diff the jsfeatNext `examples/*.html` against equivalent jsfeat samples; catalog every call-site shape difference. Evidence already gathered from `examples/` confirms rows 1–4.

---

## 3. Axis 3 — Clean-code pitfalls  · methodology: `/clean-code`

1. **Type-only stub duplication (root cause).** `src/imgproc/imgproc.ts` (and, by the same pattern, every module implemented inline in `jsfeatNext.ts`: `fast_corners, math, linalg, orb, yape06, motion_estimator, optical_flow_lk, pyramid_t`) is a class whose methods `throw new Error("Method not implemented.")`. It exists only to satisfy `static imgproc: typeof imgproc`. Real logic lives at `jsfeatNext.ts:838`. → *two files per module, no sync guarantee; the "module" file is a runtime trap.*
2. **God-object base class.** Every algorithm class `extends jsfeatNext` solely to inherit `cache`, `data_type`, and constants — coupling all modules to a heavy base and triggering the per-instance cache allocation.
3. **Dead / trap code.** `src/orb/rectify_patch.ts` imports the **stub** `imgproc`; if invoked it throws, so it is either unused or latent-broken.
4. **Monolith size.** `src/jsfeatNext.ts` ≈ 3,923 lines mixing base class, structs, and 9 inline algorithm classes.
5. **Weak typing.** `any` in hot paths (e.g. `pyramid_t.data`, `compute_integral_image(dst_tilted: any[])`); `strictNullChecks: false` despite `strict: true`.
6. **Magic numbers / naming** to review per module (thresholds, buffer sizes like `640*4`).

**Method:** run `/clean-code` per module; record each finding with file:line, severity, and a suggested (non-applied) fix.

---

## 4. Axis 4 — Refactoring research → recommended architecture  · methodology: `/code-refactoring-refactor-clean`

### 4.1 Recommended target architecture

1. **One real implementation per module**, each in its own `src/<module>/<module>.ts`. Move the inline logic out of `jsfeatNext.ts`; **delete the stub duplicates**.
2. **`jsfeatNext.ts` becomes a thin aggregator/facade** — imports the real modules and attaches them; contains no algorithm code.
3. **Shared singleton `cache`** (like jsfeat's global) injected where needed; drop the "extend the base class to get a cache" pattern.
4. **Static-facade API for parity** — expose modules so `jsfeatNext.imgproc.grayscale(...)` works without `new`, restoring drop-in compatibility (keep class exports for those who want instances).
5. **Fix export shape** — remove the `jsfeatNext.jsfeatNext` double namespace (adjust `index.ts` + bundler `libraryExport`). Pairs with Axis 5.

### 4.2 Phased, low-risk migration

| Phase | Work | Gate |
|---|---|---|
| 0 | **Characterization tests** — snapshot each function's output vs jsfeat on fixed inputs (Appendix B) | tests green |
| 1 | **De-dup**, one module at a time: promote the inline monolith version into its real module file, delete stub, re-import in aggregator | tests green each step |
| 2 | **Shared cache singleton**; remove base-class allocation | tests green + perf check |
| 3 | **Static facade + namespace fix** (API parity) — semver-major or dual API | examples updated |
| 4 | **Port `haar` + `bbf`** (Appendix A) | new tests |
| 5 | **Build modernization** (Axis 5) | bundle/parity verified |

> Each phase is independently shippable and behavior-preserving. Phase 0 is mandatory before 1–5.

---

## 5. Axis 5 — Build & dependency modernization (webpack → Vite)

### 5.1 Current toolchain & problems

- **webpack 5** + `babel-loader` (`@babel/preset-env`, `@babel/plugin-transform-runtime`) + `ts-loader` → UMD single file `dist/jsfeatNext.js`; `tsc` separately emits `.d.ts` to `types/`.
- **Double transpile** (ts-loader → babel) is redundant and injects `@babel/runtime` into output.
- `prettier` and `ts-loader` are in **`dependencies`** (should be `devDependencies`) — pollutes consumer installs.
- Build script clears `./build` but `outDir` is `dist` — **wrong clean target**.
- **UMD-only** output — no ESM (no tree-shaking for modern bundlers), no CJS, no `exports` map.

### 5.2 Recommended: Vite library mode

- **Vite (Rollup) library build** with `vite-plugin-dts` for declarations → single toolchain, drops `tsc`+webpack+babel+loaders (Vite uses esbuild for TS).
- `build.lib`: entry `src/index.ts`, `name: "jsfeatNext"`, `formats: ["es", "umd"]` (+`cjs` if needed), `fileName` per format.
- **Preserve the UMD global `jsfeatNext`** so browser `<script>` examples keep working; keep the UMD filename `jsfeatNext.js` to avoid breaking `examples/*.html`. Use this migration to **collapse the double namespace** (export the class as default directly).
- Add a proper `package.json` `exports` map (`import`/`require`/`types`/`browser`).
- Move `prettier`, `ts-loader` → `devDependencies`; remove `@babel/*` runtime dep.

### 5.3 Dependency upgrades

- `typescript` 5.7.3 → latest 5.x; re-enable `strictNullChecks` incrementally.
- Drop `webpack`, `webpack-cli`, `babel-loader`, `@babel/*`, `ts-loader` in favor of `vite` + `vite-plugin-dts`.
- Keep Node ≥ v20.18.0 (`.nvmrc`).
- **Effort:** S–M. **Risk:** low (bundling only; verify UMD global + examples + numeric parity unaffected).

---

## Appendix A — Porting `haar` and `bbf`

| Module | What it provides | Reusable primitives already in jsfeatNext | Est. |
|---|---|---|---|
| `haar` | Haar-cascade object/face detection: `detect_single_scale`, `detect_multi_scale`, `group_rectangles`, uses integral + squared-integral + tilted | ✅ `compute_integral_image` (incl. tilted), `pyramid_t`, `matrix_t` | **M** |
| `bbf` | BBF face detection: prepared cascade, `build_pyramid`, `detect`, `group_rectangles` | ✅ `pyrdown` (comment "needed for bbf" already present), `pyramid_t` | **M–L** |

**Approach:** direct TS port of `jsfeat_haar.js` / `jsfeat_bbf.js`, reusing existing integral-image/pyramid code; add the bundled cascade data; wire into the (post-refactor) static facade; add characterization tests against jsfeat's outputs on a known image.

## Appendix B — Test-harness prerequisite

No tests exist today. Before any Phase-1 refactor:
- Add a runner (Vitest fits the Vite direction).
- **Characterization tests**: run each function on fixed inputs and assert outputs match a golden snapshot generated from **original jsfeat** (tolerance for float ops). This makes the de-dup provably behavior-preserving.
- Wire into CI (a `CI.yml` badge already exists in the README).

---

## Understanding, Assumptions & Decision Log

### Understanding
Produce a durable analysis/plan (not implementation) comparing jsfeatNext to jsfeat at function-and-parameter level, cataloging pitfalls via `/clean-code`, recommending a target architecture via `/code-refactoring-refactor-clean`, scoping the missing `haar`/`bbf` ports, and planning a webpack→Vite + dependency modernization. Audience: the maintainer (@kalwalt). Compatibility with jsfeat's public surface and numeric parity are sacred; there are no automated tests yet.

### Assumptions
1. Public `jsfeatNext.<module>` access + method signatures must stay stable (internals may be reorganized).
2. Numeric/behavioral parity with jsfeat must not regress.
3. A characterization test harness is a prerequisite gate for structural refactors.
4. Security/privacy N/A (in-memory CV math, no I/O); maintainability + reliability dominate.

### Decision Log
| Decision | Alternatives | Why |
|---|---|---|
| Deliverable = analysis/plan doc, no code | implement now; chat-only | user choice; safe with no tests |
| Parity at function+parameter level | module-level only | user choice; needed for a true parity claim |
| Refactor research → single recommended architecture | options-only | user choice |
| Structure = axis-driven (Approach A) | module-by-module; risk-first | fits deliverables; consolidates systemic issues |
| Add build modernization (webpack→Vite) + deps upgrade | keep webpack | user request; enables ESM + fixes double-namespace |
| Agent docs: canonical `AGENTS.md` + pointers | per-tool duplicated files | broad auto-discovery, single source of truth |

---

## Execution roadmap (what remains after this plan is approved)

1. Complete the **function-level parity tables** (§1.2) for all modules — run per module.
2. Complete the **examples diff** (§2) for every sample.
3. Run **`/clean-code`** per module → fill §3 with file:line findings.
4. Run **`/code-refactoring-refactor-clean`** → validate/refine §4 architecture.
5. Confirm exact **stub-vs-real status** of every `src/<module>/<module>.ts`.
6. Prototype the **Vite** config (§5) and verify examples + UMD global.
7. Only then: implement, phase by phase, behind the Phase-0 test gate.
