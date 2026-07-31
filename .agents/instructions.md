# Agent instructions

The canonical instructions for this repository live in **[`AGENTS.md`](../AGENTS.md)** at the project root.

Please read that file first — it covers the build commands, the architecture (one real module per algorithm extending `src/core/core.ts`, with `src/jsfeatNext.ts` as a thin aggregator), the calling convention (algorithm modules are **singletons** since 0.9.0 — `jsfeatNext.imgproc.grayscale(...)`, no `new`; data structures like `matrix_t` are still constructors), the shared buffer pool, the `any`-avoidance rule, and the remaining gotchas (unported `haar`/`bbf`; the `transform` matrix_t-vs-array signature divergence).

**Before adding any new source file:** every file under `src/`, `tests/` or `examples/` must start with the LGPL license header, and CI enforces it. Run `node scripts/check-license-headers.mjs --fix`, choosing the right template — ported code carries the upstream jsfeat MIT attribution, original code does not. See [`skills/license-header-adder/SKILL.md`](skills/license-header-adder/SKILL.md).

The full parity + refactoring roadmap is in [`docs/jsfeat-parity-and-refactor-audit.md`](../docs/jsfeat-parity-and-refactor-audit.md); the 0.9.0 API break is written up in [`docs/migration-0.9.md`](../docs/migration-0.9.md).
