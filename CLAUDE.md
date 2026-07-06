# CLAUDE.md

The canonical, tool-agnostic guidance for this repo lives in **AGENTS.md**. It is imported below — treat it as the source of truth.

@AGENTS.md

## Claude-specific notes

- When editing an algorithm module (`imgproc`, `fast_corners`, `math`, `linalg`, `orb`, `yape06`, `motion_estimator`, `optical_flow_lk`, `pyramid_t`), remember the implementation is **inline in `src/jsfeatNext.ts`**, not in the same-named `src/<module>/<module>.ts` stub. Grep `jsfeatNext.<module> = class` to jump to it.
- There are **no automated tests**. Do not report a change as "verified" unless you actually built (`npm run build-ts`) and checked the relevant `examples/*.html`, or the user confirms.
- The audit/roadmap is in [`docs/jsfeat-parity-and-refactor-audit.md`](docs/jsfeat-parity-and-refactor-audit.md). Consult it before structural refactors, the Vite migration, or porting `haar`/`bbf`.
- Keep numeric/behavioral parity with the original jsfeat; preserve the public `jsfeatNext.<module>` API.
