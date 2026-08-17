# features2d expansion plan — GMS, TEBLID, FREAK (issues J1–J5)

**Status:** issues opened as #130–#137; milestone 1.1.0 created. The #80 and #83 re-scopes are still pending.
**Date:** 2026-08-16.
**Scope:** jsfeatNext only. The PureCV counterpart (P1–P7) is cross-referenced, not specified here.

This document is the durable record of a design session that turned a rough
roadmap — "port some more `xfeatures2d` algorithms" — into a concrete,
dependency-ordered issue set. It captures what was decided, what was rejected,
and the codebase findings that changed the plan along the way.

---

## 1. Understanding summary

- **What.** The set of jsfeatNext issues that carries the project from "amended
  `CvBackend` contract" to "new descriptors and match filters reachable through
  that contract", so PureCV can subsequently validate its Rust port against them.
- **Why.** [#96](https://github.com/webarkit/jsfeatNext/issues/96) declares
  backends interchangeable, but without descriptor selection and without a seam
  for geometric filtering that promise breaks silently the moment the two
  backends diverge. Algorithm issues only make sense once the contract can
  express them.
- **For whom.** The high-level WebAR layer of
  [#97](https://github.com/webarkit/jsfeatNext/issues/97), whose practical
  bottleneck is the planar tracker's inlier ratio — not the number of available
  descriptors.
- **Already done.** J1 is complete as planning work:
  [#128](https://github.com/webarkit/jsfeatNext/issues/128) (descriptor
  selection & capability declaration) and
  [#129](https://github.com/webarkit/jsfeatNext/issues/129) (`filterMatches` /
  GMS seam) are open, labelled, and on milestone 1.0.0.
- **Constraints.** jsfeatNext stays generic, stateless CV with no per-frame
  state (#96/#97). Parity with jsfeat where jsfeat exists; OpenCV ground truth
  where it does not. `npm test` green, no new `any` (#85), a licence header on
  every new source file, PRs against `dev`, Conventional Commits.

### Non-goals

- LATCH, StarDetector (CenSurE), DAISY, LOGOS, MSD, TBMR, LUCID, VGG/BoostDesc,
  SURF and PCTSignatures. Evaluated and deliberately excluded.
- BEBLID — see decision D6.
- `pose_estimator`, the second half of
  [#83](https://github.com/webarkit/jsfeatNext/issues/83). It stays out of the
  critical path.
- The high-level AR repository and the `tracker_t` of #97.

---

## 2. Assumptions

These were stated and accepted rather than measured. They are recorded so a
future reader can challenge them.

- **Performance.** Roughly a 33 ms/frame browser budget. GMS must be negligible
  next to detector and descriptor cost. There is no performance gate in CI
  because [#86](https://github.com/webarkit/jsfeatNext/issues/86) is still open,
  so measurements are manual and recorded in the issue that produces them.
- **Dependencies.** No new runtime dependency. `opencv-python` is a
  developer-side tool, run by hand, never part of `npm ci` or CI.
- **Divergence handling.** Where bit-exactness against OpenCV proves
  unreachable, the gap is registered in `tests/divergences.test.ts`
  ([#102](https://github.com/webarkit/jsfeatNext/issues/102)) rather than hidden
  behind a tolerance.
- **Ownership.** A single maintainer. Every issue must be self-contained and
  closable in isolation.
- **Table size.** TEBLID table weight is extrapolated from ORB's
  `src/orb/bit_pattern_31.ts` (18 KB of source for 2048 integers), not measured.
  The p256 → measure → p512 gate exists precisely because this is an estimate.

---

## 3. Findings that changed the plan

Each of these was verified against the codebase during the session and
contradicts something the original roadmap assumed.

### 3.1 `compute_integral_image` never writes the first column

`imgproc.compute_integral_image` ([src/imgproc/imgproc.ts:740](../src/imgproc/imgproc.ts))
zeroes only the first **row**, then starts writing at index `w1 + 1`. Index
`i * w1` for `i >= 1` — the entire first column — is never assigned:

```
Int32Array pre-filled with 999        empty JS array
0   0   0   0   0                     0   0   0   0   0
999 1   2   3   4                         1   2   3   4
999 2   4   6   8                         2   4   6   8
999 3   6   9  12                         3   6   9  12
```

`cv2.integral` zeroes both row and column, and the function's own JSDoc already
promises *"the first row/column are zero"* — so this is a defect, not a
different convention.

The ground-truth test at `tests/reference/imgproc.test.ts` passes only by
accident of allocation: it hands in a freshly zeroed `Int32Array`. The shared
buffer pool that `AGENTS.md` instructs every module to use hands out **reused**
buffers, so a descriptor doing the idiomatic thing reads stale data for every
box touching the left edge — the same failure family as
[#110](https://github.com/webarkit/jsfeatNext/issues/110).

Nothing under `src/` calls the function today, so the defect is latent. It
becomes live with TEBLID and FREAK, and later with `haar` (#43) and `bbf` (#44).

### 3.2 There is no matcher

`src/bfmatcher/` does not exist and neither does `match_t`; both live only as a
prototype inside #83. The roadmap assumed a BFMatcher was available because
PureCV had just landed one (its PR #79). GMS filters matches, so in jsfeatNext
it had nothing to filter.

### 3.3 `cv_backend.ts` does not exist

#96 is still a draft in the issue body, never implemented. Any "wire the new
descriptors into the adapter" work is therefore blocked on #96 itself.

### 3.4 Tree-shaking is already broken

`package.json` exposes only `"."` in `exports`, declares no `"sideEffects"`, and
`src/index.ts` default-exports the namespace object that `src/jsfeatNext.ts`
builds by importing and instantiating every module. A bundler cannot drop
anything: the object holds a live reference to each singleton. Today a consumer
calling only `grayscale()` still ships ORB, YAPE, optical flow and the 18 KB
`bit_pattern_31.ts` table, for 57 KB (UMD) / 86 KB (ESM) total. TEBLID does not
create this problem; it makes it three times more expensive.

### 3.5 The licence-header script would mis-credit OpenCV ports

`scripts/check-license-headers.mjs` treats `ORIGINAL_SRC` as an allowlist and
everything else under `src/` as jsfeat-derived, stamping the upstream MIT
attribution to Eugene Zatepyakin. TEBLID, GMS and FREAK come from OpenCV, so
that attribution would be a **false credit** — the exact failure the policy
exists to prevent, in the opposite direction.

---

## 4. Decision log

| # | Decision | Alternatives considered | Rationale |
|---|---|---|---|
| D1 | Split `bfmatcher` + `match_t` out of #83 as a standalone issue; #83 narrows to `pose_estimator` | a locally-defined structural match type; implementing #83 whole | `match_t` is born once and aligned with the `Match` type of #128; two parallel match types would have to be reconciled later |
| D2 | OpenCV ground truth: generator script plus committed JSON fixtures, bit-exact assertions | property/invariant tests only; fixtures with a tolerance | Property tests cannot prove the descriptor is *OpenCV's*, which is what makes jsfeatNext a credible oracle for PureCV. A tolerance pushes uncertainty downstream into the Rust port |
| D3 | Create milestone 1.1.0. 1.0.0 keeps the contract and the correctness bugs; new algorithms go to 1.1.0 | GMS in 1.0.0; everything in 1.0.0 with a moved due date | A 1.0 shipping with `box_blur_gray` and `warp_affine` still wrong is worse than a 1.0 without GMS |
| D3a | *Refinement:* an enabler follows the value it delivers, not the algorithms it unblocks | mechanically placing all enablers in 1.1.0 | The fixtures harness cross-checks `compute_integral_image` against OpenCV, which is correctness coverage on already-shipped code → 1.0.0. The licence chore delivers nothing to any release → no milestone |
| D4 | Adapter integration is its own issue, blocked by #96 | wiring as an acceptance criterion of each module issue; absorbing it into #96 | Keeps the algorithm modules implementable while #96 is still a draft, instead of blocking everything behind the largest issue |
| D5 | Tables baked into the module, following `src/orb/bit_pattern_31.ts`, with a measured bundle number recorded in the issue | p256 only; a separate entry point from the start | Consistent with the existing architecture; the measurement is the datum that lets a future tree-shaking decision be made on evidence |
| D6 | Ship TEBLID only; drop BEBLID entirely | shipping both | Halves the table budget by not creating the cost. TEBLID beats BEBLID on both accuracy and speed (Suárez et al.); the tables are a drop-in if BEBLID is ever needed |
| D6a | *Consequence:* implement the engine concretely for TEBLID's float-threshold weak learner, not generically | a generic engine over the weak-learner type, as originally proposed | With BEBLID cut there is exactly one instantiation. Generalising later is a mechanical refactor with tests already in place |
| D7 | Pack tables as base64, decoded once at module init | decimal array literals | ~55% smaller source and faster parse. Honest caveat: after gzip this is roughly a wash, since small decimal integers compress very well and base64 does not |
| D8 | Fix tree-shaking in a separate issue, **additively** | a breaking switch to named exports; subpath exports for the heavy modules | Named per-module exports plus `"sideEffects": false`, keeping the default namespace export, gets tree-shaking without a migration guide and without a 2.0.0 |
| D9 | GMS implements the full OpenCV variant, with `withRotation` / `withScale` as parameters defaulting to `false` | the fast path only | As PureCV's oracle, a partial implementation yields a partial oracle: the rotation path would have to be debugged directly in Rust + WASM. Initial detection against a stored pattern has arbitrary rotation, unlike frame-to-frame tracking |
| D10 | TEBLID ships both p256 and p512, p256 first behind a bundle measurement | p256 only | `TEBLID::create` exposes both widths; covering one leaves PureCV uncovered. The two-PR split means a bad measurement is discovered with half the tables in |
| D11 | Issue set structured one-per-module with shared prerequisites extracted (approach A) | three phase-sized issues; end-to-end vertical slices | Small enabling issues close in an evening and unblock three downstream issues each. Phase issues become month-long PRs whose acceptance criteria stop being checkable |

---

## 5. The issue set

### #131 — `fix(imgproc): compute_integral_image leaves the first column unwritten`

- **Fix.** Zero `dst_sum[i * w1]` (and the `sqsum` / `tilted` equivalents) for
  every row, matching `cv2.integral` and the function's own JSDoc.
- **Test.** Fill the destination buffer with a sentinel before calling, so the
  defect is visible instead of masked by zero-initialised allocation.
- **Risk: near zero.** Parity with jsfeat is unaffected — the parity test
  allocates fresh buffers on both sides, so where jsfeat leaves `0` by
  allocation jsfeatNext will write `0` explicitly. No `divergences.test.ts`
  entry needed. Behaviour changes only for dirty buffers, which no current test
  exercises and no `src/` caller produces.
- **Milestone 1.0.0**, with the other correctness bugs.

### #132 — `test(fixtures): OpenCV ground-truth harness for non-jsfeat algorithms`

- `scripts/gen-opencv-fixtures.py`, run manually.
- The input image is dumped **once** from `cornerScene` and committed alongside
  its sha256, so the seeded RNG does not have to be reimplemented in Python —
  keeping a duplicated generator out of the trust chain.
- Fixture schema: `{ meta: { opencv_version, params, image, sha256 }, keypoints,
  descriptors: hex[] }`. Descriptors as hex strings: compact and diffable per
  keypoint, unlike a binary blob.
- **Keypoints are committed input, not output.** A descriptor mismatch is then a
  descriptor bug, not a detector bug.
- **First fixture must be `compute_integral_image` vs `cv2.integral`**, not a new
  algorithm. It is pure integer arithmetic that must match bit-for-bit, so a
  failure indicts the harness. With TEBLID as the first fixture a mismatch is
  ambiguous and the harness cannot be trusted.
- **Milestone 1.0.0.** Cross-reference
  [#87](https://github.com/webarkit/jsfeatNext/issues/87), whose "third-party
  ground truth" strand this is the first concrete slice of.

### #133 — `feat(bfmatcher): brute-force Hamming matcher and match_t`

Extracted from #83, whose body already carries the full prototype.

- `match_t { queryIdx, trainIdx, distance }`; `match(query, train, maxDistance)`
  with optional `crossCheck`; `knnMatch(query, train, k)`; `ratio_test(knn,
  ratio)`; Hamming distance via SWAR popcount over the `Int32Array` view,
  bit-identical to the sample's `popcnt32`.
- **Descriptor width generalised** (columns a multiple of 4). This is what makes
  M a prerequisite of T and not only of G: TEBLID p512 produces 64-byte
  descriptors.
- Attached as `jsfeatNext.bfmatcher` and `jsfeatNext.match_t`.
- **Milestone 1.0.0.** Matching currently exists only inline in
  `sample_orb_pinball.html`, so ORB is not usable end-to-end by a library
  consumer; this was already scoped to 1.0.0 inside #83. Re-scope #83 to
  `pose_estimator` and note the split.

### #130 — `chore(license): add a third header variant for OpenCV-derived sources`

- LGPL base without the jsfeat attribution, plus the upstream notice added by
  hand — the pattern `EXTENDED` already uses for `src/orb/bit_pattern_31.ts`
  (OpenCV/ORB) and `src/math/math.ts` (\*BSD).
- **Verify the actual upstream licence per file**: `xfeatures2d` mixes 3-clause
  BSD and Apache-2.0 headers. Both are one-way compatible with
  LGPL-3.0-or-later, but the notice text differs. Do not assume.
- **Acceptance.** `node scripts/check-license-headers.mjs` passes on a new file
  under `src/teblid/`; the applied header contains no reference to jsfeat; the
  policy is updated in `.agents/skills/license-header-adder/SKILL.md`.
- **No milestone.** It blocks nothing shipping in any release and produces
  nothing user-visible; it becomes urgent the day the first TEBLID PR opens.

### #134 — `feat(gms): grid-based motion statistics match filter`

- 20×20 grid; 9-cell neighbourhood scoring; four half-cell offsets; threshold
  `alpha * sqrt(mean points per cell)` with `alpha = 6`.
- `withRotation` (8 permutation patterns) and `withScale` (5 grid ratios) as
  parameters defaulting to `false`, as in OpenCV; keep the configuration
  yielding the most inliers. Signature mirrors `matchGMS(size1, size2, kp1, kp2,
  matches1to2, ...)`.
- **Depends on** M (needs `match_t`), F (needs ground truth), L.
- **Acceptance.** Bit-exact against OpenCV fixtures on **all three** paths —
  default, rotation, scale — because the "keep the best configuration" loop is
  where the bugs hide. Plus an OpenCV-independent property test: on
  `cornerScene` under exact translation `(dx, dy)`, the post-filter inlier ratio
  must be >= the pre-filter one. Plus `get_buffer` / `put_buffer` balance.
- **Milestone 1.1.0.**

### #135 — `feat(teblid): TEBLID binary descriptor (p256, then p512)`

- `rectifyABWL` (affine transform of the box parameters by keypoint position,
  scale and angle); `computeABWLResponse` (mean-grey difference between two
  square boxes over the integral image); threshold on the response → bit.
- Tables base64-packed, decoded once at module init into a typed array.
- No enabling sub-issue for the integral image: `compute_integral_image` exists
  — but see #131, which is a hard prerequisite.
- **Two PRs inside one issue:** p256 with the **measured bundle delta recorded
  in the issue**, then p512.
- **Acceptance.** Bit-exact against OpenCV fixtures at both widths, given the
  committed keypoints; before/after bundle numbers recorded; a test asserting
  known table entries after base64 decoding, so the packing does not become a
  blind spot.
- **Depends on** I, F, L (hard); M for end-to-end matching tests only.
- **Milestone 1.1.0.**

### `[#80 rescope] Add FREAK binary descriptor module`

- Narrow the title to FREAK, dropping *"(or other features2d-style)"* now that
  TEBLID and GMS have issues of their own.
- **Promote pattern generation to an explicit acceptance criterion**, not a
  porting detail: OpenCV's `buildPattern()` allocates
  `64 × 256 × 43 = 704,512` `PatternPoint` of 12 bytes each, about **8.5 MB** on
  the heap. Options: on-demand computation (preferred), reducing
  `NB_ORIENTATION` from 256 to 32/64, or lazy per-scale population. This is
  where the WASM / `no_std` portability PureCV inherits gets decided; left
  implicit, it gets ported literally.
- Record the trait that distinguishes FREAK from TEBLID: it **estimates
  orientation internally**, from 45 long-distance pairs, without depending on
  the detector's angle. That is what makes it work with detectors that produce
  no orientation.
- **Depends on** I, F, L, #128. **Milestone 1.1.0.**

### #136 — `feat(cv_backend): expose new descriptors and filterMatches in the adapter`

- `capabilities` declares the detectors, descriptors and match filters actually
  implemented; `describe()` honours the requested `DescriptorKind`;
  `filterMatches` wired to GMS; requesting an unsupported kind **throws** rather
  than silently falling back — the fallback choice belongs to the high-level
  layer, against `capabilities`, as decided in #128.
- **Acceptance.** A test where a reduced-capability backend leads the caller to
  a deterministic fallback; `match()` rejecting descriptors of a mismatched
  kind.
- **Blocked by** #96, #128, #129, and at least one of G / T / #80.
  **Milestone 1.1.0.**

### #137 — `perf(build): make the bundle tree-shakeable`

- Named per-module exports sourced directly from the module files, plus
  `"sideEffects": false`, **keeping the default namespace export**. Consumers
  importing `{ imgproc }` get a bundle that drops the rest; consumers importing
  the default are unaffected. Additive, so no migration guide and no 2.0.0.
- Evidence for the body: 57 KB UMD / 86 KB ESM, all-or-nothing today, with
  ORB's 18 KB table shipped to every consumer.
- **Milestone 1.1.0** — the release that adds the weight this mitigates.

---

## 6. Dependency graph

```
#128 ─┐
#129 ─┤ contract (open, 1.0.0)
      │
 #131 integral first column ──┐
 #132 OpenCV fixtures ────────┼───────────┬──────────────┐
 #130 licence header   ─┤           │              │
 #133 bfmatcher + match_t ────┘           │              │
      │                                  │              │
      ▼                                  ▼              ▼
 #134 gms                            #135 teblid      #80 freak
      └───────────────┬───────────────────┴──────────────┘
                      │
 #96 (contract implemented) ──┤
                              ▼
                        #136 adapter wiring

 #137 tree-shaking — independent of everything above
```

---

## 7. Milestone allocation

| | Issue | Milestone |
|---|---|---|
| #131 | `fix(imgproc)`: integral image first column | 1.0.0 |
| #132 | `test(fixtures)`: OpenCV ground-truth harness | 1.0.0 |
| #133 | `feat(bfmatcher)`: Hamming matcher + `match_t` | 1.0.0 |
| #130 | `chore(license)`: third header variant | *none* |
| #134 | `feat(gms)`: grid-based motion statistics filter | 1.1.0 |
| #135 | `feat(teblid)`: TEBLID p256 → p512 | 1.1.0 |
| #80 | rescope to FREAK only | 1.1.0 |
| #136 | `feat(cv_backend)`: adapter wiring | 1.1.0 |
| #137 | `perf(build)`: tree-shakeable bundle | 1.1.0 |

Eight new issues plus two re-scopes (#80 narrowed to FREAK, #83 narrowed to
`pose_estimator`). Milestone
[1.1.0](https://github.com/webarkit/jsfeatNext/milestone/3) was created on
2026-08-16, without a due date. Everything added to 1.0.0 is correctness
coverage on code that already ships.

---

## 8. Cross-repo sequencing with PureCV

Per #96, jsfeatNext is the **numeric reference oracle** for the Rust port. For
each algorithm:

1. OpenCV → jsfeatNext, validated against the committed OpenCV fixtures.
   jsfeatNext becomes the oracle.
2. jsfeatNext → PureCV, validated bit-for-bit against vectors generated in
   step 1.

Slower at a glance, but it avoids the worst outcome in CV porting: two
implementations differing by a few bits with no way to tell which is wrong.
TypeScript iterates far faster than Rust + WASM when the question is why bit 237
does not match.

The PureCV counterpart (P1 `integral`, P2 TEBLID, P3 GMS, P4 FREAK,
P5 StarDetector, P6 adapter, P7 `no_std`) is a **plan, not a set of issues**:
as of 2026-08-16 that repository has three open issues (#94, #81, #67 — Miri
coverage and an architecture diagram) and none of P1–P7 exists yet. They are
written up here so that whoever opens them starts from the same decisions.

Note that P5 (StarDetector) has **no jsfeatNext counterpart** by design: FAST
plus the ORB pyramid is the established path here.

---

## 9. Open items

- #80 still carries its original wording and milestone; #83 still claims the
  `bfmatcher` half that has moved to #133. Both re-scopes are written up but not
  applied.
- Milestone 1.1.0 has no due date, deliberately — there is no basis to estimate
  one until 1.0.0 has a realistic close.
- The BEBLID cut (D6) is **approved for PureCV too**. Nothing needs undoing
  there — P1–P7 were never opened — so the decision simply has to be carried
  into P2 when it is written, rather than applied to existing work.
- The base64 table format needs to be fixed before the first TEBLID PR, since
  the generator script and the runtime decoder must agree.
- Whether #130 stays milestone-less depends on whether the repo wants every
  issue triaged into a milestone.
