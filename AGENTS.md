# AGENTS.md — jsfeatNext

> Canonical instructions for AI coding agents (Claude Code, GitHub Copilot, Cursor, Antigravity, Codex, …).
> This is the **single source of truth**; `CLAUDE.md`, `.agents/instructions.md`, and `.github/copilot-instructions.md` point here.

## What this project is

**jsfeatNext** is a TypeScript port of [jsfeat](https://github.com/inspirit/jsfeat) (a JS computer-vision library) for the **WebARKit** project. Published to npm as `@webarkit/jsfeat-next`. It ships a UMD bundle for browsers and TypeScript type declarations.

## Environment & commands

- **Node:** v20.18.0 (see `.nvmrc`). **Package manager:** npm.
- Install: `npm install`
- Build (prod): `npm run build-ts` → runs `tsc` (emits `.d.ts` to `types/`) then webpack → `dist/jsfeatNext.js`
- Watch/dev: `npm run dev-ts`
- Format: `npm run format` (write) · `npm run format-check` (verify) — Prettier, config in `.prettierrc.json`
- **Tests:** none yet. The only verification is manual: open `examples/*.html` in a browser after building. Do **not** claim behavior is verified without a real check.

## Architecture — read this before editing

The runtime is centered on one large file: **`src/jsfeatNext.ts` (~3,900 lines)**.

- `src/index.ts` default-exports `{ jsfeatNext }`. The UMD global is `jsfeatNext`, so **consumers write `jsfeatNext.jsfeatNext`** (double namespace — known wart).
- The base `class jsfeatNext` holds `cache`, `data_type`, and all constants. Algorithm modules are attached as **static members**.
- **Two conflicting patterns coexist:**
  - **Implemented INLINE in `src/jsfeatNext.ts`** (attached via `jsfeatNext.X = class X extends jsfeatNext {…}`): `imgproc, fast_corners, pyramid_t, math, linalg, orb, yape06, motion_estimator, optical_flow_lk` (plus `motion_model, affine2d, homography2d`).
  - **Assigned from a REAL module file**: `cache, transform, matrix_t, keypoint_t, matmath, yape, ransac_params_t`.

### ⚠️ Critical gotchas (these will bite you)

1. **Type-only stub files.** Several `src/<module>/<module>.ts` files (confirmed: `src/imgproc/imgproc.ts`) are **stubs** whose every method is `throw new Error("Method not implemented.")`. They exist only to type `static X: typeof X`. **The real code is inline in `src/jsfeatNext.ts`.** → When editing an inline-implemented algorithm, **edit `src/jsfeatNext.ts`**, not the stub. Never instantiate a stub class.
2. **Latent trap:** `src/orb/rectify_patch.ts` imports the *stub* `imgproc`.
3. **Instantiation required.** Unlike jsfeat's static namespace (`jsfeat.imgproc.grayscale()`), jsfeatNext modules are instance classes: `new jsfeatNext.jsfeatNext.imgproc().grayscale(...)`. Not drop-in compatible with jsfeat.
4. **Per-instance cache.** Every `new` of a module runs the base ctor `this.cache.allocate(30, 640*4)` — each instance gets its own buffer pool (jsfeat shares one global cache).
5. **Missing vs jsfeat:** `haar` and `bbf` (object/face detection) are **not ported**.

## Conventions

- TypeScript `strict: true` **but** `strictNullChecks: false`; `noImplicitAny: true`. Prefer real types over `any` in new code.
- Preserve **numeric/behavioral parity with jsfeat** — algorithms use typed arrays and bitwise math in hot loops; do not "clean up" arithmetic without a parity check.
- Preserve the **public API surface** (`jsfeatNext.<module>` + method signatures) unless a change is explicitly approved.
- License: **LGPL-3.0-or-later** (keep headers/attribution).

## Git & contribution workflow

- **Open PRs against the `dev` branch — never `main`.** `dev` is the integration branch; `main` is stable/release. Branch your work off `dev`.
- **Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):** `type(scope): summary`, e.g. `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `perf:`, `ci:`. Keep the subject imperative and concise.
- One feature branch per issue; reference the issue in the PR body.
- Never commit `.idea/` (JetBrains IDE files).

## Before you make changes

- Small, incremental, reviewable diffs. Match surrounding code style.
- If a change could alter algorithm output, note that there is **no test net** and flag it for manual example verification.
- There is a full audit + refactoring roadmap in **[`docs/jsfeat-parity-and-refactor-audit.md`](docs/jsfeat-parity-and-refactor-audit.md)** — read it before proposing structural refactors, the webpack→Vite migration, or porting `haar`/`bbf`.

## Roadmap pointers

- **Refactor direction:** de-duplicate stub/monolith → one real class per module, `jsfeatNext.ts` becomes a thin aggregator, shared singleton cache, static-facade API for jsfeat parity. (See audit doc §4.)
- **Build direction:** webpack → **Vite library mode** + `vite-plugin-dts`; ship ESM+UMD; fix the double namespace. (See audit doc §5.)
