# GitHub Copilot instructions — jsfeatNext

The full guidance is in **[`AGENTS.md`](../AGENTS.md)** (source of truth) and the roadmap in [`docs/jsfeat-parity-and-refactor-audit.md`](../docs/jsfeat-parity-and-refactor-audit.md). Critical points, inlined because Copilot injects this file directly:

- **TypeScript port of [jsfeat](https://github.com/inspirit/jsfeat)** for WebARKit. npm: `@webarkit/jsfeat-next`. Node v24.18.0 (npm 11).
- Build: `npm run build-ts` → `dist/jsfeatNext.js` (UMD) + `types/`. Watch: `npm run dev-ts`. Format: `npm run format` (Prettier). **Tests:** `npm test` (Vitest, parity vs original jsfeat); also verify via `examples/*.html`.
- **Architecture:** most algorithms live **inline in `src/jsfeatNext.ts` (~3,900 lines)**, attached as `jsfeatNext.X = class X extends jsfeatNext`. Edit *there* for `imgproc, fast_corners, math, linalg, orb, yape06, motion_estimator, optical_flow_lk, pyramid_t`.
- **⚠️ Trap:** several `src/<module>/<module>.ts` files are **type-only stubs** that `throw new Error("Method not implemented.")` (e.g. `src/imgproc/imgproc.ts`). Do not treat them as the implementation and never instantiate them.
- **API notes:** consumers use `jsfeatNext.jsfeatNext` (double namespace); algorithm modules require `new` (instance methods), unlike jsfeat's static namespace; each `new` allocates its own cache. `haar` and `bbf` are not ported.
- **Conventions:** keep numeric/behavioral parity with jsfeat (typed-array/bitwise hot loops); preserve the public `jsfeatNext.<module>` API; avoid `any` in new code; LGPL-3.0-or-later.
- **Git workflow:** open PRs against **`dev`**, never `main` (`dev` = integration, `main` = release). Commit messages follow **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `ci:` …).
