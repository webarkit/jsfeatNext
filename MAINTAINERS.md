# Maintainers Guide for jsfeatNext

This document is intended for the core maintainers of the `webarkit/jsfeatNext` repository. It outlines review responsibilities and the exact steps required to publish a new release.

## Current Maintainers

- **Walter Perdan** ([@kalwalt](https://github.com/kalwalt)) - Creator & Lead Maintainer

## 1. Code Review Mandates

When reviewing Pull Requests, maintainers must ensure the following (see [`AGENTS.md`](AGENTS.md) for the full canonical rules):

- **Target branch:** PRs must target `dev`, never `main`. `dev` is the integration branch; `main` is release-only and reflects the latest published version.
- **Conventional Commits:** commit messages and PR titles follow `type(scope): summary` (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `perf:`, `ci:`, `build:`). This is not just style — the release workflow's changelog generation (git-cliff) parses these to group release notes, so non-conforming commits get silently dropped from the changelog.
- **Numeric/behavioral parity:** algorithm code must preserve parity with the original [jsfeat](https://github.com/inspirit/jsfeat). Any change touching `src/**` (excluding `tests/`) should keep `npm test` green (57+ characterization tests assert parity against a vendored jsfeat oracle).
- **Typing:** avoid `any` in new code; the project runs `noImplicitAny: true`.
- **No `.idea/`** (JetBrains IDE files) ever committed.
- **Tag format:** release tags are bare `X.Y.Z` (e.g. `0.8.0`) — **never** `vX.Y.Z`. This has caused a real mixup before (see the 0.7.6 release) and the automated release workflow (below) only triggers on the bare pattern.

## 2. Release Process

Publishing a new version is a two-phase process: a **manual** phase you control (version bump, build, promotion to `main`), and an **automated** phase that takes over the moment you push the release tag.

### Phase A — Manual: prepare the release

1. **Pre-release checks.** Make sure `dev` is up to date and CI (`CI.yml`, `build.yml`) is green on the latest commit.
2. **Bump the version.** Update `"version"` in `package.json`, then regenerate the lockfile:
   ```bash
   npm install
   ```
   > Regenerate the lockfile with **npm 11**, not an older local npm — an npm <11 install can omit other-platform optional native binaries (e.g. Vite/vitest's native deps) and produce a lockfile that fails `npm ci` in CI. Use `npx npm@11 install` if your local npm is older.
3. **Rebuild the published artifacts.**
   ```bash
   npm run build-ts
   ```
   This regenerates `dist/jsfeatNext.js` (UMD), `dist/jsfeatNext.mjs` (ESM) and `types/`. All three are committed to the repo.
4. **Commit and PR to `dev`.** Commit the version bump + rebuilt `dist/`/`types/` (Conventional Commit, e.g. `chore(release): bump version to X.Y.Z and rebuild dist`), push a branch, open a PR **against `dev`**, get it green, merge.
5. **Promote `dev` to `main`.** Once `dev` has everything intended for the release:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```
   (`main` requires 1 approving review — either get a review or use the admin-bypass merge option if you are the sole maintainer.)

### Phase B — Automated: tag, changelog, release, publish

6. **Tag the release** on `main`, using the **bare** version number (no `v` prefix):
   ```bash
   git tag -a X.Y.Z -m "X.Y.Z"
   git push origin X.Y.Z
   ```
   Pushing this tag triggers [`.github/workflows/release.yml`](.github/workflows/release.yml), which automatically:
   - runs `npm ci`, `npm test`, `npm run build-ts` (rebuilds `dist/`/`types/` fresh from the tagged commit as a safety check — the workflow does **not** trust whatever happens to be committed)
   - runs `npm pack --dry-run` and logs the resulting tarball contents/size (informational; see the packaging trim in #60)
   - generates release notes from Conventional Commits with **[git-cliff](https://git-cliff.org/)** (config: [`cliff.toml`](cliff.toml)), covering everything since the previous tag
   - creates the **GitHub Release** for the tag with those generated notes as the body
   - runs `npm publish --provenance --access public`

   You can watch it under the repo's **Actions** tab. If a step fails (e.g. a transient npm registry error during publish), you do **not** need to re-tag — re-run it manually via **Actions → Release → Run workflow**, entering the existing tag.

7. **Verify.** Check:
   - the new [GitHub Release](https://github.com/webarkit/jsfeatNext/releases) has sensible notes
   - `npm view @webarkit/jsfeat-next version` shows the new version
   - `npm view @webarkit/jsfeat-next dist-tags` shows `latest` pointing at it

### Notes

- **There is no committed `CHANGELOG.md`.** The GitHub Release page for each tag *is* the changelog — this avoids fighting `main`'s branch protection to auto-commit a file back to the repo. If you want to read the changelog for a specific version, look at its GitHub Release.
- **Phase A is intentionally still manual.** The release workflow only automates from the tag onward; it does not bump versions or open PRs on its own. If full version-bump automation (a `release-please`-style bot PR) is ever wanted, that is a separate, bigger change — see [webarkit/jsfeatNext#61](https://github.com/webarkit/jsfeatNext/issues/61) for the discussion.

## 3. One-Time Setup: `NPM_TOKEN`

The release workflow needs an `NPM_TOKEN` repository secret to run `npm publish`. To set it up (only needs doing once, or when the token is rotated):

1. On [npmjs.com](https://www.npmjs.com/), generate a **Granular Access Token** scoped to:
   - **Packages:** `@webarkit/jsfeat-next` only (read + write / publish)
   - **Expiration:** set a reasonable rotation window
2. In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `NPM_TOKEN`
   - Value: the token from step 1
3. Confirm the workflow has `permissions: id-token: write` (already set in `release.yml`) — required for npm provenance attestation.

Without this secret, everything in Phase B runs successfully **except** the final `npm publish` step, which will fail with an auth error.
