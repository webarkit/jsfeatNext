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
- **Tag format:** release tags are bare `X.Y.Z` (e.g. `0.8.0`) — **never** `vX.Y.Z`. This has caused a real mixup before (see the 0.7.6 release) and the automated release workflow (below) only triggers on the bare pattern. Prerelease tags follow semver and are also supported: `X.Y.Z-beta.1`, `-alpha.2`, `-rc.1` (see [Prereleases](#prereleases-alpha--beta--rc)).

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
4. **Generate the local changelog.** We use git-cliff to parse the conventional commits and prepend the new version's section to `CHANGELOG.md`. Pass `--tag X.Y.Z` (the version you're releasing) so the section is labelled with the version rather than "unreleased" — the tag doesn't exist yet at this point:
   ```bash
   npx git-cliff --unreleased --tag X.Y.Z --prepend CHANGELOG.md
   ```
5. **Commit and PR to `dev`.** Commit the version bump + rebuilt `dist/`/`types/` + updated `CHANGELOG.md` (Conventional Commit, e.g. `chore(release): bump version to X.Y.Z and rebuild dist`), push a branch, open a PR **against `dev`**, get it green, merge.
6. **Promote `dev` to `main`.** Once `dev` has everything intended for the release:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```
   (`main` requires 1 approving review — either get a review or use the admin-bypass merge option if you are the sole maintainer.)

### Phase B — Automated: tag, changelog, release, publish

7. **Tag the release** on `main`, using the **bare** version number (no `v` prefix):
   ```bash
   git tag -a X.Y.Z -m "X.Y.Z"
   git push origin X.Y.Z
   ```
   Pushing this tag triggers [`.github/workflows/release.yml`](.github/workflows/release.yml), which automatically:
   - **checks the tag matches `package.json`'s `version`** and fails loudly if not (otherwise npm would publish a different version than the one you tagged)
   - runs `npm ci`, `npm test`, `npm run build-ts` (rebuilds `dist/`/`types/` fresh from the tagged commit as a safety check — the workflow does **not** trust whatever happens to be committed)
   - runs `npm pack --dry-run` and logs the resulting tarball contents/size (informational; see the packaging trim in #60)
   - generates release notes from Conventional Commits with **[git-cliff](https://git-cliff.org/)** (config: [`cliff.toml`](cliff.toml)), covering everything since the previous tag
   - creates the **GitHub Release** for the tag with those generated notes as the body
   - runs `npm publish --provenance --access public --tag <dist-tag>`

   You can watch it under the repo's **Actions** tab. If a step fails (e.g. a transient npm registry error during publish), you do **not** need to re-tag — re-run it manually via **Actions → Release → Run workflow**, entering the existing tag.

#### Prereleases (alpha / beta / rc)

The same flow handles prereleases — just tag with a semver prerelease suffix (still no `v` prefix):

```bash
git tag -a 1.0.0-beta.1 -m "1.0.0-beta.1"
git push origin 1.0.0-beta.1
```

**Set `package.json`'s version to the same string** (`"version": "1.0.0-beta.1"`) in Phase A — the workflow's tag/version check enforces this.

The workflow detects the `-` suffix and adapts:

| | stable `0.10.0` | prerelease `1.0.0-beta.1` |
|---|---|---|
| GitHub Release | normal (shows as **Latest**) | marked **`--prerelease`** (stays out of the Latest slot) |
| npm dist-tag | `latest` | the identifier — `beta` (or `alpha` / `rc`) |
| `npm install @webarkit/jsfeat-next` | gets it | **does not** get it |
| how users opt in | — | `npm install @webarkit/jsfeat-next@beta` |

This means a prerelease can never hijack `latest` for existing users. To promote one to stable afterwards, tag the final `1.0.0` normally.

8. **Verify.** Check:
   - the new [GitHub Release](https://github.com/webarkit/jsfeatNext/releases) has sensible notes (and is flagged *Pre-release* if it was one)
   - `npm view @webarkit/jsfeat-next version` shows the new version
   - `npm view @webarkit/jsfeat-next dist-tags` — `latest` should point at the newest **stable**, with any prerelease under its own tag (`beta`, `rc`, …)

### Notes

- **Two changelogs, kept in sync from the same source (Conventional Commits via git-cliff):**
  - The committed **`CHANGELOG.md`** is the in-repo historical record, updated in Phase A step 4 (`git-cliff` prepends the new version's section on the release branch, so it lands via the PR to `dev` before the tag).
  - The **GitHub Release** page for each tag is generated independently by the automated workflow in Phase B (`--latest`). Both derive from the same commit history, so they match; `CHANGELOG.md` is the browseable full history, the Release page is the per-tag view.
- **Phase A is intentionally still manual.** The release workflow only automates from the tag onward; it does not bump versions or open PRs on its own. If full version-bump automation (a `release-please`-style bot PR) is ever wanted, that is a separate, bigger change — see [webarkit/jsfeatNext#61](https://github.com/webarkit/jsfeatNext/issues/61) for the discussion.

## 3. One-Time Setup: npm Trusted Publishing

Publishing uses npm's [Trusted Publishers](https://docs.npmjs.com/trusted-publishers) (OIDC) — no long-lived token to store or rotate (issue #194; a classic `NPM_TOKEN` secret was used previously and expired, which is what prompted the switch).

1. On [npmjs.com](https://www.npmjs.com/), on the `@webarkit/jsfeat-next` package's **Settings → Publishing access**, add a Trusted Publisher:
   - **Provider:** GitHub Actions
   - **Repository:** `webarkit/jsfeatNext`
   - **Workflow filename:** `release.yml`
   - **Environment:** leave blank unless the workflow is later scoped to a GitHub Environment
   - **Allowed actions:** explicitly select **`npm publish`** (direct, immediate publish — what `release.yml` actually runs). Since Sep 3 2026 npm defaults a new Trusted Publisher to `npm stage publish` only — a two-phase flow where CI stages the release and a maintainer must separately approve it interactively (`npm stage approve`, 2FA, no OIDC) before it goes public. That extra manual gate is worth considering later for a project with more maintainers, but for now `release.yml` has no such approval step, so `npm publish` must be enabled or the workflow's publish call fails outright.
2. Nothing else to configure on the GitHub side beyond what `release.yml` already has: `permissions: id-token: write` (needed for the OIDC token exchange and for npm provenance attestation) and an `npm install -g npm@latest` step before `npm publish` (Trusted Publishers needs npm ≥ 11.5.1; the Node version pinned in `.nvmrc` may bundle an older npm).

With Trusted Publishing configured, `npm publish --provenance` in the workflow automatically exchanges the job's OIDC token for a short-lived publish credential — no `NODE_AUTH_TOKEN`/secret involved. If the Trusted Publisher config on npmjs.com is ever removed or the repository/workflow filename changes, the `npm publish` step will fail with an auth error until it's reconfigured.
