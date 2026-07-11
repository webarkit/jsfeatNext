# CLAUDE.md

The canonical, tool-agnostic guidance for this repo lives in **AGENTS.md**. It is imported below — treat it as the source of truth.

@AGENTS.md

## Claude-specific notes

- Every algorithm lives in its own module under `src/<module>/<module>.ts`, extending the base in `src/core/core.ts`; `src/jsfeatNext.ts` is only the aggregator that attaches the singletons (the old inline monolith and its type-only stubs are gone since #47).
- **Always run `npm test`** (Vitest parity suite vs a vendored original-jsfeat oracle) before claiming an algorithm change is verified; for consumer-facing changes also build (`npm run build-ts`) and check the relevant `examples/*.html`, or ask the user to confirm.
- On this Windows machine: verify formatting with `node_modules/.bin/prettier` directly (bare `npx prettier` can resolve the wrong version) and regenerate `package-lock.json` only with `npx npm@11`.
- The audit/roadmap is in [`docs/jsfeat-parity-and-refactor-audit.md`](docs/jsfeat-parity-and-refactor-audit.md); the 0.9.0 API break is documented in [`docs/migration-0.9.md`](docs/migration-0.9.md); the release runbook is in [`MAINTAINERS.md`](MAINTAINERS.md).
- Keep numeric/behavioral parity with the original jsfeat; preserve the public `jsfeatNext.<module>` API.
