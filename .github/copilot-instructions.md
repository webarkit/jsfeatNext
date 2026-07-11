# GitHub Copilot instructions — jsfeatNext

The full guidance is in **[`AGENTS.md`](../AGENTS.md)** (source of truth) and the roadmap in [`docs/jsfeat-parity-and-refactor-audit.md`](../docs/jsfeat-parity-and-refactor-audit.md). Critical points, inlined because Copilot injects this file directly:

- **TypeScript port of [jsfeat](https://github.com/inspirit/jsfeat)** for WebARKit. npm: `@webarkit/jsfeat-next`. Node v24.18.0 (npm 11).
- Build: `npm run build-ts` (Vite) → `dist/jsfeatNext.js` (UMD) + `dist/jsfeatNext.mjs` (ESM) + `types/`. Watch: `npm run dev-ts`. Format: `npm run format` (Prettier). **Tests:** `npm test` (Vitest, parity vs original jsfeat); also verify via `examples/*.html`.
- **Architecture:** one real module per algorithm under `src/<module>/`, extending the base in `src/core/core.ts`; `src/jsfeatNext.ts` is a thin aggregator.
- **Calling convention (0.9.0+, #41):** algorithm modules are **singletons** — `jsfeatNext.imgproc.grayscale(...)`, **no `new`**. Only the data structures (`matrix_t`, `keypoint_t`, `pyramid_t`, `ransac_params_t`) are constructors. All modules share ONE buffer pool (`jsfeatNext.cache`); balance `get_buffer`/`put_buffer`. See `docs/migration-0.9.md`.
- **Missing vs jsfeat:** `haar` and `bbf` are not ported (#43/#44).
- **Conventions:** keep numeric/behavioral parity with jsfeat (typed-array/bitwise hot loops; the Vitest suite pins outputs against a vendored jsfeat oracle); preserve the public `jsfeatNext.<module>` API; avoid `any` in new code; LGPL-3.0-or-later.
- **Git workflow:** open PRs against **`dev`**, never `main` (`dev` = integration, `main` = release). Commit messages follow **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `ci:` …) — the release changelog is generated from them. Release tags are bare `X.Y.Z`.
