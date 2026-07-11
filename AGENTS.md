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
- **Calling convention (since 0.9.0, issue #41):** the 14 algorithm modules (`imgproc`, `math`, `matmath`, `linalg`, `transform`, `fast_corners`, `yape`, `yape06`, `orb`, `optical_flow_lk`, `motion_estimator`, `affine2d`, `homography2d`, plus the `cache` pool) are **singleton instances** on the namespace — `jsfeatNext.imgproc.grayscale(...)`, no `new` — matching original jsfeat. The data-structure classes (`matrix_t`, `keypoint_t`, `pyramid_t`, `ransac_params_t`) remain constructors.
- **One shared buffer pool:** all modules borrow scratch buffers from the single `shared_cache` exported by `src/core/core.ts` (public as `jsfeatNext.cache`), exactly like jsfeat's global `jsfeat.cache`. Balance every `get_buffer` with a `put_buffer`.
- Full background: `docs/jsfeat-parity-and-refactor-audit.md` (the plan) and `docs/migration-0.9.md` (the 0.9.0 API break and its motivation).

### ⚠️ Gotchas

1. **Don't reintroduce `new jsfeatNext.<algorithm>()`** in examples, docs or tests — the slots hold instances, not classes. The classes still exist in their module files (importable for isolated instances if truly needed) and bind to the shared pool.
2. **Missing vs jsfeat:** `haar` and `bbf` (object/face detection) are **not ported** (#43/#44).
3. **`transform` signature divergence:** jsfeatNext's `transform` methods take `matrix_t`; original jsfeat's (never actually shipped in any jsfeat build) took raw arrays. Same math.
4. **The parity suite is the safety net.** Any change to algorithm code must keep `npm test` green — the tests pin outputs bit-for-bit/close-to against a vendored original-jsfeat oracle.

## Conventions

- TypeScript `strict: true` **but** `strictNullChecks: false`; `noImplicitAny: true`. Prefer real types over `any` in new code.
- Preserve **numeric/behavioral parity with jsfeat** — algorithms use typed arrays and bitwise math in hot loops; do not "clean up" arithmetic without a parity check.
- Preserve the **public API surface** (`jsfeatNext.<module>` + method signatures) unless a change is explicitly approved.
- License: **LGPL-3.0-or-later** (keep headers/attribution).

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
- **Toward 1.0:** prerelease-tag support in the release pipeline (#81); examples modernization (#79); new descriptors like FREAK (#80).
