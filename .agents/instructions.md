# Agent instructions

The canonical instructions for this repository live in **[`AGENTS.md`](../AGENTS.md)** at the project root.

Please read that file first — it covers the build commands, the architecture (one real module per algorithm extending `src/core/core.ts`, with `src/jsfeatNext.ts` as a thin aggregator), the calling convention (algorithm modules are **singletons** since 0.9.0 — `jsfeatNext.imgproc.grayscale(...)`, no `new`; data structures like `matrix_t` are still constructors), the shared buffer pool, the `any`-avoidance rule, and the remaining gotchas (unported `haar`/`bbf`; the `transform` matrix_t-vs-array signature divergence).

The full parity + refactoring roadmap is in [`docs/jsfeat-parity-and-refactor-audit.md`](../docs/jsfeat-parity-and-refactor-audit.md); the 0.9.0 API break is written up in [`docs/migration-0.9.md`](../docs/migration-0.9.md).
