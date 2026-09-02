# AGENTS.md — jsfeatNext

> Canonical instructions for AI coding agents (Claude Code, GitHub Copilot, Cursor, Antigravity, Codex, …).
> This is the **single source of truth**; `CLAUDE.md`, `.agents/instructions.md`, and `.github/copilot-instructions.md` point here.

## What this project is

**jsfeatNext** is a TypeScript port of [jsfeat](https://github.com/inspirit/jsfeat) (a JS computer-vision library) for the **WebARKit** project. Published to npm as `@webarkit/jsfeat-next`. It ships UMD + ESM bundles and TypeScript type declarations.

## Environment & commands

- **Node:** v24.18.0 (see `.nvmrc`; npm 11). **Package manager:** npm.
- Install: `npm install` (regenerate the lockfile only with npm 11, e.g. `npx npm@11 install` — older npm writes incomplete cross-platform lockfiles that break CI's `npm ci`)
- Build: `npm run build-ts` → Vite library mode → `dist/jsfeatNext.js` (UMD) + `dist/jsfeatNext.mjs` (ESM) + `types/` (via vite-plugin-dts)
- Watch/dev: `npm run dev-ts`
- Format: `npm run format` (write) · `npm run format-check` (verify) — Prettier, config in `.prettierrc.json`. On Windows, verify with `node_modules/.bin/prettier` directly, not bare `npx prettier` (which can silently resolve a different version).
- API docs: `npm run docs` (TypeDoc → `docs/api/`, gitignored)
- **Test:** `npm test` (Vitest) runs characterization tests asserting parity against the original `jsfeat` (see `tests/`, oracle vendored in `tests/vendor/`). Also verify visually via `examples/*.html` after building. Do **not** claim behavior is verified without a real check.

## Architecture — read this before editing

- **One real module per algorithm** under `src/<module>/<module>.ts`, each extending the base class in **`src/core/core.ts`** (constants, data-type helpers, the shared cache). `src/jsfeatNext.ts` is a thin aggregator that only attaches modules to the namespace; `src/index.ts` default-exports the namespace directly.
- **Calling convention (since 0.9.0, issue #41):** the 14 algorithm modules (`imgproc`, `math`, `matmath`, `linalg`, `transform`, `fast_corners`, `yape`, `yape06`, `orb`, `optical_flow_lk`, `motion_estimator`, `affine2d`, `homography2d`, plus the `cache` pool) are **singleton instances** on the namespace — `jsfeatNext.imgproc.grayscale(...)`, no `new` — matching original jsfeat. The data-structure classes (`matrix_t`, `keypoint_t`, `pyramid_t`, `ransac_params_t`, `match_t`, `pose_t`) remain constructors, and so does `pose_estimator`.
  - **`pose_estimator` is deliberately NOT a singleton and deliberately does not extend `core`.** It is *stateful* — it holds the inverted intrinsics `K⁻¹` — and the public API constructs it with a `K` (`new jsfeatNext.pose_estimator(K)`), which also makes its `intrinsics()` factory reachable as a `static` on the namespace class. It therefore belongs with the constructors above, not with the stateless algorithm singletons. Review tooling has flagged this twice as a rule violation; it is not one, and the reasoning is repeated in the class's own JSDoc.
- **One shared buffer pool:** all modules borrow scratch buffers from the single `shared_cache` exported by `src/core/core.ts` (public as `jsfeatNext.cache`), exactly like jsfeat's global `jsfeat.cache`. Balance every `get_buffer` with a `put_buffer`.
- Full background: `docs/jsfeat-parity-and-refactor-audit.md` (the plan) and `docs/migration-0.9.md` (the 0.9.0 API break and its motivation).

### ⚠️ Gotchas

1. **Don't reintroduce `new jsfeatNext.<algorithm>()`** in examples, docs or tests — the slots hold instances, not classes. The classes still exist in their module files (importable for isolated instances if truly needed) and bind to the shared pool.
2. **Missing vs jsfeat:** `haar` and `bbf` (object/face detection) are **not ported** (#43/#44).
3. **`transform` signature divergence:** jsfeatNext's `transform` methods take `matrix_t`; original jsfeat's (never actually shipped in any jsfeat build) took raw arrays. Same math.
4. **The parity suite is the safety net.** Any change to algorithm code must keep `npm test` green — the tests pin outputs bit-for-bit/close-to against a vendored original-jsfeat oracle.

## Conventions

- TypeScript `strict: true` **but** `strictNullChecks: false`; `noImplicitAny: true`.
- **Avoid `any`.** Do not introduce new `any` (explicit or via casts like `as any`) in `src/`. Reach for the real type, and when a shape recurs, define a shared alias or interface instead of repeating `any` — e.g. a `TypedArray` union for buffer payloads, a `MotionKernel` interface for the `motion_estimator` kernels, `_pool_node_t` for cache nodes. `strictNullChecks` being off is not licence for `any`. Existing `any`s are tracked for removal in #85; don't add to them.
- Preserve **numeric/behavioral parity with jsfeat** — algorithms use typed arrays and bitwise math in hot loops; do not "clean up" arithmetic without a parity check.
- Preserve the **public API surface** (`jsfeatNext.<module>` + method signatures) unless a change is explicitly approved.
- License: **LGPL-3.0-or-later** (keep headers/attribution).

### 📄 License headers — required on every new source file

**Every new file under `src/`, `tests/` or `examples/` must start with the LGPL license header** (issue #112). CI fails the build if one is missing.

```bash
node scripts/check-license-headers.mjs        # verify
node scripts/check-license-headers.mjs --fix  # apply to anything missing it
```

The header has **two variants**, composed from one template in `.agents/skills/license-header-adder/resources/` (`HEADER.txt` plus the `ATTRIBUTION-jsfeat.txt` snippet, so the licence wording can't drift between them). Picking the right variant matters legally:

- **derived** — for code ported or derived from jsfeat. Includes the upstream **MIT attribution to Eugene Zatepyakin**. jsfeatNext is a port of MIT-licensed jsfeat; relicensing under LGPL is fine, but MIT *requires* its notice be retained, so ported files must carry it.
- **original** — for code original to jsfeatNext (the test suite, `src/types.ts`, `src/index.ts`, the ESM example helpers). LGPL notice only — adding the jsfeat attribution here would be a false credit, and licence scanners would report MIT content in files that have none.

The script decides from the file's path; the check verifies the applied header matches its variant byte-for-byte, so a wrong variant or an edited notice fails CI rather than passing silently.

Replace `{{FILENAME}}` with the file's basename. Never stack a second header on a file that already has one, and never overwrite an existing third-party notice (`src/math/math.ts` carries a \*BSD `qsort` attribution; `src/orb/bit_pattern_31.ts` an OpenCV/ORB one). Never stamp `tests/vendor/**` or the inherited `examples/js/` third-party scripts. Full policy: [`.agents/skills/license-header-adder/SKILL.md`](.agents/skills/license-header-adder/SKILL.md).

## Git & contribution workflow

- **Open PRs against the `dev` branch — never `main`.** `dev` is the integration branch; `main` is stable/release. Branch your work off `dev`.
- **Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):** `type(scope): summary`, e.g. `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `perf:`, `ci:`. Keep the subject imperative and concise. The release changelog is generated from these (git-cliff) — non-conforming commits are silently dropped from release notes.
- One feature branch per issue; reference the issue in the PR body.
- Release tags are bare `X.Y.Z` (never `vX.Y.Z`); releases are automated from the tag (see `MAINTAINERS.md`).
- Never commit `.idea/` (JetBrains IDE files).

## Before you make changes

- Small, incremental, reviewable diffs. Match surrounding code style.
- Keep `npm test` green; add parity tests for new algorithm code.
- The audit + roadmap lives in **[`docs/jsfeat-parity-and-refactor-audit.md`](docs/jsfeat-parity-and-refactor-audit.md)**; the release runbook in **[`MAINTAINERS.md`](MAINTAINERS.md)**.

## Roadmap pointers

- **Remaining vs jsfeat:** port `haar` (#43) and `bbf` (#44); exhaustive per-symbol parity audit (#45).
- **Toward 1.0:** prerelease-tag support in the release pipeline (#81); examples modernization (#79); new descriptors like FREAK (#80); replace remaining `any` usages with shared types/interfaces (#85); performance-benchmark suite with result storage (#86); strengthen tests beyond parity — property/invariant + edge-case + third-party ground-truth (#87).
