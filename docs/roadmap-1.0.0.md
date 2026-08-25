# Roadmap to 1.0.0

**Status:** agreed — milestone dates cleared, scope pruned, attack order set.
**Date:** 2026-08-25.
**Scope:** the `1.0.0` GitHub milestone only. `1.1.0` and `Someday` are
cross-referenced, not replanned here.

This document is the durable record of a `/grill-me` session that turned an
8-issue milestone with a due date six days out — several of those issues being
multi-week feature work — into a scoped, dependency-ordered plan with no
artificial deadline.

---

## 1. What changed, and why

**The due dates were fiction.** `1.0.0` was due 2026-08-31 with 8 open issues,
several of them substantial builds (a new interface, two new modules, an
OpenCV fixture harness). `Parity & Modernization` was due the day this session
happened, with 2 issues still open. Neither date reflected real capacity — they
were carried over from when the milestones were created, before their scope was
this clear.

**Fix:** both due dates removed (via `PATCH` on the milestones). `1.1.0` and
`Someday` already had no due date, for the same reason recorded when `1.1.0`
was created: *"no basis to estimate one until 1.0.0 has a realistic close."*
`1.0.0` and `Parity & Modernization` now match that policy.

**The scope had drifted.** Two issues sat in `1.0.0` whose own "Related"
sections named consumers exclusively in `1.1.0`:

- [#131](https://github.com/webarkit/jsfeatNext/issues/131) (the
  `compute_integral_image` first-column bug) lists its consumers as
  [#135](https://github.com/webarkit/jsfeatNext/issues/135) (TEBLID) and
  [#80](https://github.com/webarkit/jsfeatNext/issues/80) (FREAK) — both
  `1.1.0`. Nothing left in `1.0.0`'s scope calls `compute_integral_image`.
- [#132](https://github.com/webarkit/jsfeatNext/issues/132) (OpenCV ground-truth
  fixture harness) lists [#134](https://github.com/webarkit/jsfeatNext/issues/134)/[#135](https://github.com/webarkit/jsfeatNext/issues/135)/[#80](https://github.com/webarkit/jsfeatNext/issues/80)
  as its first consumers — also all `1.1.0`. It does mention a secondary role
  as an oracle for the PureCV Rust port ([#96](https://github.com/webarkit/jsfeatNext/issues/96)),
  but that role is advisory, not blocking: `#96` does not need OpenCV fixtures
  to ship.

**Fix:** both moved to `1.1.0`, where their actual consumers live.

## 2. Final scope of `1.0.0`

| Issue | What | Status in this plan |
| --- | --- | --- |
| [#133](https://github.com/webarkit/jsfeatNext/issues/133) | `bfmatcher` — brute-force Hamming matcher, `match_t` | **Attack first** |
| [#83](https://github.com/webarkit/jsfeatNext/issues/83) | `pose_estimator` — homography → camera pose `(R, t)` | Second |
| [#96](https://github.com/webarkit/jsfeatNext/issues/96) | `CvBackend` interface — the pluggable, stateless CV contract | Third |
| [#128](https://github.com/webarkit/jsfeatNext/issues/128) | Descriptor selection & capability declaration (amends `#96`) | Fourth |
| [#129](https://github.com/webarkit/jsfeatNext/issues/129) | `filterMatches` / GMS seam (amends `#96`) | Fifth |
| [#97](https://github.com/webarkit/jsfeatNext/issues/97) | `[Roadmap]` WebAR two-layer architecture | Stays open indefinitely — **excluded from the completion count** (see §4) |

Moved out to `1.1.0`: [#131](https://github.com/webarkit/jsfeatNext/issues/131),
[#132](https://github.com/webarkit/jsfeatNext/issues/132).

Tracked with **no milestone at all** — ongoing jsfeatNext-internal maintenance,
unrelated to the WebAR/`CvBackend` feature line `1.0.0`/`1.1.0` track:

- [#168](https://github.com/webarkit/jsfeatNext/issues/168) — finish `imgproc`
  benchmark coverage
- [#169](https://github.com/webarkit/jsfeatNext/issues/169) — diagnose the four
  open benchmark findings (`lu_solve` and others)
- [#171](https://github.com/webarkit/jsfeatNext/issues/171) — extend
  `tsconfig.check.json` to `tests/**`

`1.0.0` is considered **done** when `#133`, `#83`, `#96`, `#128` and `#129` are
all closed. `#97` is a standing pointer to the roadmap, not a deliverable with
an end state — see §4.

## 3. Attack order: implementation-first

`#96`'s own body states the interface's purpose as delegating to concrete
primitives: *"CV primitives it delegates to: #83 (bfmatcher, pose_estimator)."*
The interface exists to wrap those primitives — not the other way around.

Two orderings were on the table:

- **(A) Implementation-first** — build `#83` and `#133` as working modules,
  then write `#96` against their real, working types and signatures.
- **(B) Contract-first** — draft `#96` off the prototypes already written in
  `#83`'s body, then have `#83`/`#133` implement to satisfy a contract fixed in
  advance.

**Decided: (A).** Fixing the interface's shape before the primitives exist
risks discovering mid-implementation that the contract doesn't fit — the same
class of expensive correction this project has already paid for when types
were guessed ahead of the real shape (`_pool_node_t`, `matrix_t.data` typed as
a union too wide to narrow — see [#171](https://github.com/webarkit/jsfeatNext/issues/171)'s
findings for a recent instance).

### Order within the implementation-first primitives: `#133` before `#83`

`#133` was originally split out of `#83`'s scope specifically so GMS
([#134](https://github.com/webarkit/jsfeatNext/issues/134)) and TEBLID
([#135](https://github.com/webarkit/jsfeatNext/issues/135)) — both needing a
matcher — would not have to wait on `pose_estimator`. That decoupling is
already real: `#133` and `#83` have no dependency on each other.

`#133` also already carries a **complete prototype** in its issue body (from
when it was still part of `#83`), a small, well-bounded scope (`match_t`,
`match`/`knnMatch`, Hamming distance via SWAR popcount, generalised descriptor
width), and closing it unblocks `#128` early (which references `match_t` for
its "match kind guard"). `#83` is comparatively open — it has its own
unresolved grey area (where `intrinsics()` belongs), explicitly deferred to
implementation time by its own issue body.

**Decided: `#133` → `#83` → `#96` → `#128` → `#129`.**

## 4. `#97` is a pointer, not a deliverable

`#97` is a `[Roadmap]`-tagged tracking issue for the two-layer WebAR
architecture — it describes a direction, not a mergeable unit of work. Counting
it toward `1.0.0`'s completion would mean the milestone can never close without
someone arbitrarily declaring the roadmap "done enough."

It stays open with no target date, cross-referenced by every issue in §2, and
is **not** one of the issues whose closure defines `1.0.0` as shipped.

## 5. What this plan does not touch

- **`Parity & Modernization`** (`#45`/`#46`) is an independent track — the
  parity-audit automation (`#45`) and its tracking issue (`#46`). No sequencing
  relationship with the `1.0.0` work in §2/§3 in either direction; it proceeds
  in parallel.
- **The three no-milestone maintenance issues** (§2) are picked up opportunistically,
  not scheduled against this plan's sequence.
- **`Someday`** (`#43` haar, `#44` bbf) is unaffected — already deferred with no
  due date, moved there deliberately after the pre-1.1.0 backlog cleanup.

## 6. Related

- Milestone: [1.0.0](https://github.com/webarkit/jsfeatNext/milestone/2)
- Design background: `docs/features2d-expansion-plan.md` (the `#128`/`#129`
  contract-amendment work this plan sequences after `#96`)
- Architecture direction: `#96`, `#97`
