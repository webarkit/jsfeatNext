# CLAUDE.md

The canonical, tool-agnostic guidance for this repo lives in **AGENTS.md**. It is imported below — treat it as the source of truth.

@AGENTS.md

## Claude-specific notes

- Every algorithm lives in its own module under `src/<module>/<module>.ts`, extending the base in `src/core/core.ts`; `src/jsfeatNext.ts` is only the aggregator that attaches the singletons (the old inline monolith and its type-only stubs are gone since #47).
- **Always run `npm test`** (Vitest parity suite vs a vendored original-jsfeat oracle) before claiming an algorithm change is verified; for consumer-facing changes also build (`npm run build-ts`) and check the relevant `examples/*.html`, or ask the user to confirm.
- On this Windows machine: verify formatting with `node_modules/.bin/prettier` directly (bare `npx prettier` can resolve the wrong version) and regenerate `package-lock.json` only with `npx npm@11`.
- The audit/roadmap is in [`docs/jsfeat-parity-and-refactor-audit.md`](docs/jsfeat-parity-and-refactor-audit.md); the 0.9.0 API break is documented in [`docs/migration-0.9.md`](docs/migration-0.9.md); the release runbook is in [`MAINTAINERS.md`](MAINTAINERS.md).
- Keep numeric/behavioral parity with the original jsfeat; preserve the public `jsfeatNext.<module>` API.
- **Every new source file needs a license header.** Any file you create under `src/`, `tests/` or `examples/` must start with the LGPL header, or CI fails. Run `node scripts/check-license-headers.mjs --fix` after adding files. The header has two variants and the script picks by path: ported/derived code gets the upstream jsfeat **MIT** attribution appended, code original to jsfeatNext does not (it would be a false credit). The check compares the applied header against its variant byte-for-byte, so the wrong one fails CI. See [`.agents/skills/license-header-adder/SKILL.md`](.agents/skills/license-header-adder/SKILL.md) — and don't overwrite the existing \*BSD/OpenCV notices in `src/math/math.ts` and `src/orb/bit_pattern_31.ts`.
