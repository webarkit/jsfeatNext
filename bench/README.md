# Benchmarks

Throughput measurement for the hot paths, per [#86](https://github.com/webarkit/jsfeatNext/issues/86).

```bash
npm run bench
```

## Read the ratio, not the absolute numbers

Every case runs **twice in the same process**: once through jsfeatNext, once through the vendored original jsfeat (`tests/vendor/oracle.cjs`). What matters is the **ratio** Vitest prints in the `BENCH Summary` block, which reads like this (shape only — see the noise floor below before reading any single number as a result):

```
<winner> - imgproc.gaussian_blur — U8 fast path
  1.0Nx faster than <loser>
```

The `hz` / `mean` columns above it are **not** comparable across machines, and largely not comparable across runs on the same machine either.

### Why

Absolute throughput depends on the CPU model, its thermal and boost state, what else the machine is doing, and the Node version. A shared CI runner has none of those pinned — it is a VM whose neighbours you cannot see — so its absolute numbers wander for reasons that have nothing to do with the code. (We have not measured that spread on this project's CI; the locally-measured jitter is in the noise-floor section below.) A number recorded on one box and diffed against another box reports **noise as a regression** — and the natural response (widen the threshold until it stops shouting) leaves you with a measurement that can no longer detect anything.

Running both implementations back to back cancels almost all of that. A slow runner halves both sides; the ratio survives. So:

- ✅ *"jsfeatNext runs `gaussian_blur` U8 at 0.94× jsfeat"* — portable, comparable next month, comparable on CI.
- ❌ *"1240 ops/s"* — true only for that box, that minute.

## The noise floor: ignore anything under ~1.15×

The ratio cancels the *machine*, but not the ordinary run-to-run jitter of a JIT
language: GC timing, when V8 decides to optimise a function, cache state.

Measured on a developer laptop, `gaussian_blur` U8 across four consecutive runs
of an **unchanged** tree:

| run | result |
| --- | --- |
| 1 | jsfeat 1.06× faster |
| 2 | jsfeatNext 1.10× faster |
| 3 | jsfeatNext 1.14× faster |
| 4 | jsfeatNext 1.05× faster |

Note it changes **sign**. The two implementations are indistinguishable here —
which is the expected result for a port doing the same arithmetic — and the
spread is roughly ±10–15%.

So, in practice:

- **under ~1.15×** — noise. Do not investigate, do not "fix", do not record it
  as a finding.
- **a consistent shift across several runs**, or anything **beyond ~1.2×** —
  worth looking at.

Always re-run a few times before believing a number. A single run is a sample
of one.

## How to get a clean measurement

What actually moves the numbers on a developer machine, roughly in order of
impact:

| Factor | Effect |
| --- | --- |
| **CPU contention** | The dominant one. Another busy process means the OS scheduler hands the bench less CPU time — a browser with many tabs, a background build, an antivirus scan. |
| **Thermal state / turbo boost** | Has *memory*: the first seconds run boosted, then the clock drops under sustained load. So the **first** bench of a session tends to look faster than the last — a systematic bias in favour of whatever is measured first. |
| **Power profile** | On a laptop, **on battery vs plugged in** can change everything: Windows throttles aggressively on battery. |
| **Memory pressure / GC** | Smaller than people assume, but real: with RAM nearly full the collector runs more often and that time lands inside the measurement. Every case in this suite allocates its buffers *outside* the timed region — with one deliberate exception: `cache.bench.ts`'s `_pool_node_t.resize` case, where the allocation being measured is the whole point, so it runs inside the timed region on purpose. |

In practice:

1. **Plug in the power** — do not bench on battery.
2. **Close the browser and other heavy apps.**
3. **Run twice, ignore the first run** — it pays the JIT warm-up.
4. If a number matters, **run it 3–4 times.** If the sign flips, it is noise.

The reassuring part: the A/B ratio already absorbs most of these effects,
because both implementations meet the same conditions in the same seconds.
That is precisely why the ratio is the metric. The steps above tighten the
residual jitter — they are not what makes the measurement valid.

## What a change means

Judged **against the noise floor above**, not in isolation:

- A ratio drifting **down** across several runs and commits: jsfeatNext lost ground against the same reference workload. That is the regression signal.
- A ratio moving **up** the same way: an optimization landed, and by how much.

Since jsfeatNext is a port of jsfeat, ratios near **1.0× are the expected, healthy state** — the two are doing the same arithmetic. A *sustained* move is interesting; a single-run move is not.

## Open finding: the YAPE detectors are consistently slower

The first real signal this harness produced. Eight samples, pooled from two
separate sessions on an idle machine (power connected, browser and editor
closed), each discarding a warm-up run:

| case | session A | session B | direction | verdict |
| --- | --- | --- | --- | --- |
| `fast_corners` thr 20 | 1.02 / 1.06\* / 1.14 / 1.01\* | 1.08 / 1.06 / 1.01\* / 1.04 | flips | noise |
| `fast_corners` thr 60 | 1.04 / 1.09 / 1.05\* / 1.08 | 1.06 / 1.05 / 1.11 / 1.10 | 7/8 jsfeat | below floor |
| **`yape06`** | 1.30 / 1.33 / 1.38 / 1.27 | 1.45 / 1.35 / 1.11 / 1.32 | **always jsfeat** | **real** |
| **`yape`** | 1.53 / 1.38 / 1.25 / 1.42 | 1.30 / 1.23 / 1.24 / 1.26 | **always jsfeat** | **real** |

\* = jsfeatNext was the faster side in that run; every other figure favours
jsfeat.

`yape06` and `yape` favour jsfeat in **all eight** samples and sit around 1.3x.
That consistency of *direction* is the evidence — not any single magnitude. The
magnitudes are noisier than they first appeared: `yape06` spans 1.11 to 1.45
and `yape` 1.23 to 1.53. Quote this as "roughly 1.3x", never to two decimals.

Note which case is tight is **not stable between sessions**: session A had
`yape06` clustered and `yape` spread, session B the reverse. Four samples are
not enough to characterise a spread, only a direction. Do not read a tight
cluster within one session as precision.

`fast_corners` at threshold 20 changes sign and is plain noise. Threshold 60 is
more equivocal — jsfeatNext wins once out of eight samples (marked \* above),
jsfeat the other seven, and none of the eight clears the ~1.15x floor.
Recorded as below-floor-but-directional rather than folded in with thr 20; it
is not a finding, and it is not quite nothing.

### How this was established, including two wrong turns

The first measurement was taken with a browser and editor open. It put
`fast_corners` as high as 1.23x and `yape06` at 1.51x. On an idle machine
`fast_corners` collapsed into the noise floor while the YAPE gap held: CPU
contention had inflated everything, and only one of the two findings survived.

The second was worse, because the harness itself was wrong. `set_threshold`
mutates a singleton and was being called from the `describe` bodies, which
Vitest runs during collection — so both `fast_corners` suites actually ran at
threshold 60, and the case labelled "threshold 20" measured the same workload as
its neighbour. The ratio stayed valid (both sides ran at 60), but one case was
not measuring what it claimed to. Caught in review; see the `threshold()` helper
in `detectors.bench.ts` for the fix and why the obvious alternatives do not work.

That episode also cost an over-confident claim: an earlier version of this
section reported the YAPE ratios as reproducing "to within +/-0.02". That was
two samples. Eight give a range roughly ten times wider. The finding survived;
the precision claim did not.

It is not an algorithmic difference: corner counts are identical on both sides
(26,016 / 12,919 / 49,258 / 149), so both do the same work.

**Leading hypothesis - not proven.** jsfeat defines its per-pixel helpers as
closures *inside* the module IIFE, in the same scope as `detect`:

```js
var hessian_min_eigen_value = function (src, off, tr, Dxx, Dyy, Dxy, Dyx) { ... };
```

jsfeatNext imports the same helpers from a separate module (`yape06_utils.ts`).
`hessian_min_eigen_value` runs once per candidate pixel — tens of thousands of
times per frame — and a local closure is a far easier inlining target for V8
than a cross-module import.

Confirming this needs a profile, not a benchmark. The cheap experiment is to
move the helper into the same module and see whether the gap closes; that is a
change to `src/`, so it belongs in its own issue rather than here (#86 is
measurement infrastructure and explicitly rules out micro-optimising).

## No results are committed

There is deliberately no `bench/results/*.json` in the repo. A committed baseline invites exactly the cross-machine comparison described above, and produces noisy diffs on every run. The ratio is recomputed from scratch each time, which is what makes it trustworthy.

If historical tracking is wanted later, the thing to store is the **ratio**, not the raw `hz`.

## Phase 1: imgproc and ORB

| Case | Why it is here |
| --- | --- |
| `gaussian_blur` — U8 fast path | The most-used filter in the pipeline |
| `gaussian_blur` — F32 path (`_convol`) | Different cost profile; the float branch no test exercised until #87 |
| `resample` — U8 fixed-point fast path | Pyramid construction; the `< 0x100` area-ratio branch |
| `resample` — float path | The non-U8 branch, bypassing fixed point |
| `orb.describe` | The per-frame hot spot (~5 ms in the pinball sample). Structurally unlike the filters: per-keypoint cost, sparse access through a rotated patch warp |

## Phase 2: detectors

| Case | Why it is here |
| --- | --- |
| `fast_corners.detect` — threshold 20 (~26k corners) | The detector the ORB pipeline uses |
| `fast_corners.detect` — threshold 60 (~13k corners) | Half the corners: separates per-pixel scan cost from per-corner cost |
| `yape06.detect` (~49k corners) | The densest detector at these settings |
| `yape.detect` — radius 5 (~149 corners) | Needs `init()`; a very different corner density from the others |

Detector cost scales with the number of corners found, so the counts were
verified identical on both sides before writing the benches — otherwise the
ratio would compare workloads rather than implementations.

A second comparison comes free here: all four run over the same image in the
same process, so their `hz` are comparable **to each other** within a run.
"yape06 costs N× fast_corners" is as portable as the jsfeat ratio.

Phase 2 covers each module this way, one PR at a time. As of this PR every
module has a bench file: `imgproc`, `orb`, `fast_corners`, `yape06`, `yape`,
`optical_flow_lk`, `linalg`, `motion_estimator`, the `cache` pool, and
`math`/`matmath`/`transform` and `motion_model`. Within `imgproc` only
`gaussian_blur` and `resample` are benched — the other ~12 public methods
(`grayscale`, `pyrdown`, the derivative filters, the warps, `canny`, …) are
not yet covered.

## Phase 2, continued: optical_flow_lk

| Case | Why it is here |
| --- | --- |
| `optical_flow_lk.track` (~570 points) | The other per-frame hot spot alongside `orb.describe`; a pyramidal search rather than a per-pixel scan |

Points are FAST corners on the same deterministic noise image, at a threshold
chosen to land in the few-hundred range — enough to amortise call overhead
without timing point-selection instead of tracking. Parameters
(`win_size=20`, `max_iterations=30`, `epsilon=0.01`, `min_eigen_threshold=0.001`,
3 pyramid levels) mirror `examples/sample_oflow_lk.html`'s defaults rather than
being picked for the bench. `curr_pyr` is built from the same image as
`prev_pyr` — the tracker cannot tell a static scene from a stationary one, and
the point here is throughput, not accuracy (that is
`tests/properties/optical_flow_lk.test.ts`'s job).

Measured over four runs on an idle machine: 1.03x / 1.23x / 1.10x jsfeatNext,
then 1.05x jsfeat — the sign flips and stays close to the noise floor.
**No finding.** Unlike YAPE, `optical_flow_lk` is close to a line-for-line port
(both sides share the same pyramidal-search structure), so parity here is the
expected result, not a surprise worth investigating.

## Phase 2, continued: linalg — a second, larger open finding

| Case | Why it is here |
| --- | --- |
| `linalg.lu_solve` / `cholesky_solve` (6x6) | The affine motion model's normal-equation solve (`AtA`/`AtB` in `motion_model.ts`) |
| `linalg.svd_decompose` / `svd_solve` / `svd_invert` / `eigenVV` (9x9) | The homography DLT's eigen/SVD step (`mLtL` in `motion_model.ts`); the SVD variants are benched at the same size for comparability even though `motion_model` takes the eigen route |

Inputs are deterministic well-conditioned SPD matrices (`MᵀM + nI`), built
locally so both sides get identical bytes — see the module docstring for why
a poorly conditioned system would make the bench measure numerical luck
instead of throughput. `lu_solve` and `cholesky_solve` overwrite their operands
in place, so those two cases re-copy fresh input via `bench()`'s `setup` option
every call; the SVD/eigen functions are documented and verified not to mutate
their input, so they need no such copy.

Four runs on an idle machine, discarding a warm-up:

| case | r1 | r2 | r3 | r4 | verdict |
| --- | --- | --- | --- | --- | --- |
| `lu_solve` | 1.44 | 1.88 | 1.54 | 1.34 | **real** |
| `cholesky_solve` | 1.19 | 1.04 | 1.02\* | 1.73 | noisy, mostly jsfeat |
| `svd_decompose` | 2.75 | 1.31 | 1.42 | 1.32 | **real** (one outlier) |
| `svd_solve` | 1.37 | 1.44 | 1.38 | 1.29 | **real** |
| **`svd_invert`** | **1.31** | **1.33** | **1.32** | **1.34** | **real, very tight** |
| `eigenVV` | 1.45 | 1.41 | 1.25 | 1.23 | **real** |

\* = jsfeatNext was faster in that run.

jsfeat is faster in every sample of five of the six cases — `svd_invert`
reproduces to within ±0.02 across all four runs, tighter than anything else
measured in this suite so far. Only `cholesky_solve` is genuinely noisy
(direction flips once); the `svd_decompose` 2.75x in run 1 is a single outlier
against three runs clustered at 1.3-1.4x and is reported rather than discarded,
since discarding inconvenient samples without a stated reason (unlike the
CPU-contention episodes documented above) would be cherry-picking.

**This is the same shape of result as the YAPE finding above, on a much larger
share of one module.** Both are TS classes whose methods route through `this`
(here, `this.cache.get_buffer(...)` inside `svd_solve`/`eigenVV`), called
against jsfeat originals written as closures inside a single IIFE. Two
instances of the same pattern is not yet a proven cause, but it is now the
leading candidate for *why* jsfeatNext's class-based module design might carry
a throughput cost jsfeat's closure-per-module style does not, on hot paths
called thousands of times per frame. Recorded here as an open finding for a
future issue, same as YAPE — confirming it needs a profile, and any fix would
touch `src/`, which #86 explicitly rules out doing here.

**Update:** profiled (not just theorized) — see
[#159](https://github.com/webarkit/jsfeatNext/issues/159). The `this.cache`
dispatch hypothesis above turned out to be wrong (0.1% of self-time in
`svd_invert`); the real cost is `matrix_t` re-allocating a `data_type` lookup
table on every construction. `lu_solve`/`cholesky_solve`'s slowdown is *not*
explained by that fix, since neither constructs any internal `matrix_t`.

## Phase 2, continued: motion_estimator

| Case | Why it is here |
| --- | --- |
| `motion_estimator.ransac` (homography2d, 40 points, 6 outliers) | The real per-frame call — `examples/sample_orb.html` fits a homography from ORB matches this way every frame |
| `motion_estimator.lmeds` (homography2d, 40 points, 6 outliers) | Same kernel, different iteration-acceptance rule (median residual instead of a threshold) |

Scoped to `ransac`/`lmeds` only — `get_subset`/`find_inliers` are internal
helpers the two call every iteration, and benching them standalone would time
a workload nobody calls directly. `homography2d` rather than `affine2d`: it's
the same 8-DOF kernel the `linalg` finding above traces back to, keeping the
two findings comparable. Input is `tests/parity/motion_estimator.test.ts`'s
own fixture (40 correspondences, 6 gross outliers, fixed ground-truth
homography), already proven to converge identically on both sides — not a
shape invented for this bench.

RANSAC/LMEDS draw a random subset every iteration via `Math.random`, so both
sides need to draw the *same* subsets or the ratio compares different amounts
of work. `bench()`'s `setup` option reseeds a deterministic generator once
per mode (not per call, unlike the parity test) — enough by induction, since
identical inputs and identical RNG state make a faithful port consume an
identical number of random draws, keeping both streams in lockstep for the
whole run. See the file's docstring for the full argument.

Four runs on an idle machine, discarding a warm-up:

| case | r1 | r2 | r3 | r4 | verdict |
| --- | --- | --- | --- | --- | --- |
| **`ransac`** | **1.42** | **1.44** | **1.41** | **1.43** | **real, very tight** |
| `lmeds` | 3.09 | 1.32 | 1.02 | 1.30 | real, noisy, one large outlier |

`ransac` is as tight as `svd_invert` from the `linalg` finding — jsfeat
consistently ~1.4x faster, four runs spanning barely 0.03x. `lmeds` favours
jsfeat in every sample too, but with real spread even ignoring the 3.09x
outlier (1.02–1.32, wider than anything else measured so far in this suite).
Reported rather than investigated further here — like the `svd_decompose`
outlier in the `linalg` section above, discarding it without a stated cause
(unlike the CPU-contention runs discarded elsewhere in this file, which had
one) would be cherry-picking.

Not yet profiled. Given `ransac`'s magnitude and tightness closely match
`svd_invert`'s, and `motion_estimator.ransac`/`lmeds` call `homography2d.run`
(`motion_model.ts`), which in turn calls `linalg.eigenVV` — the #159 fix,
once it lands, is a plausible candidate to shrink this finding too, but that
is a hypothesis to check by re-running this bench after #159, not a claim
made now.

## Phase 2, continued: the cache pool

| Case | Why it is here |
| --- | --- |
| `cache.get_buffer` + `put_buffer` — steady state | The overwhelmingly common path: real callers request the same size call after call for the life of a session, so a node almost never needs to grow |
| `_pool_node_t.resize` — forced every call | The rare path (a fresh `ArrayBuffer` + four typed-array views), isolated by calling `resize()` directly with a fixed target size on one node borrowed once outside the timed region |

Unlike every other file in this suite, this one uses the real global
singletons rather than fresh instances — `jsfeat.cache` is a single
IIFE-closure object, not a constructor, so there is no `new jsfeat.cache()`
to fall back on. Both sides pre-allocate identically at module load
(`allocate(30, 640 * 4)`), so this isn't a compromise: it's the more
faithful bench, given jsfeatNext's shared-cache design (#41) exists
specifically to mirror jsfeat's one-pool-per-process model. The steady-state
case pairs every `get_buffer` with a `put_buffer` before the next iteration,
so the pool's size never drifts; the only side effect anywhere in this file
is that the one node the resize case borrows stays permanently larger, which
is harmless by the pool's own "at least this size" contract. See the file's
docstring for the full reasoning, including why an earlier version of the
resize case (growing the requested size every call) made the workload
depend on how many iterations each side completed, and why it was
redesigned around `resize()`'s own no-guard behaviour instead (caught in
review).

Four runs on an idle machine, discarding a warm-up:

| case | r1 | r2 | r3 | r4 | verdict |
| --- | --- | --- | --- | --- | --- |
| steady state | 1.07 | 1.17 | 1.14 | 1.14\* | borderline, one flip |
| `resize` | 1.08\* | 1.05 | 1.04 | 1.06 | noise, close to 1.0x |

\* = jsfeatNext was faster in that run; every other figure favours jsfeat.

**Steady state sits right at the noise floor**, not clearly a finding: three
of four samples cluster at 1.07–1.17x (jsfeat), the fourth flips to
jsfeatNext at the same 1.14x magnitude. At 11+ million operations/second each
call is under 100 nanoseconds, close to what `performance.now()`'s
resolution can distinguish — read this as inconclusive rather than as either
parity or a slowdown, not confidently either way.

**`resize` is clean noise** after the redesign — 1.04–1.08x, flipping once,
none of it above the ~1.15x floor. Unlike the abandoned growing-size design
(which mixed workload asymmetry into whatever it was measuring), a plain
`ArrayBuffer` + typed-array-view allocation is generic V8 machinery on both
sides, not algorithm-specific code — a real difference here would have been
the surprise, not its absence.

## Phase 2, continued: math, matmath and transform

| Case | Why it is here |
| --- | --- |
| `math.get_gaussian_kernel` — size 7 / size 9 | `imgproc.gaussian_blur`'s kernel build. Split because `size <= 7 && odd && sigma <= 0` takes a hardcoded coefficient table and anything else falls through to a `Math.exp` loop — two different cost profiles, like imgproc's U8/F32 split |
| `math.qsort` (2048 floats) | Public API with no in-tree caller, but the one genuinely algorithmic routine in `math` (hybrid quicksort/insertion sort) — the kind of code a port drifts on |
| `math.median` (512 floats) | `motion_estimator.lmeds`'s residual median |
| `matmath.transpose` — 9x9 | `linalg.svd_decompose` has five transpose call sites, in mutually exclusive/optional branches — at most 3 run per decomposition, and only 1 with `SVD_U_T\|SVD_V_T` set. Benched at the size `motion_model`'s homography DLT uses |
| `matmath.invert_3x3` / `multiply_3x3` | `motion_model`, per frame |
| `transform.invert_affine_transform` / `invert_perspective_transform` | Public API, no in-tree caller — see the calling-convention note below |

`qsort` and `median` rewrite the array they are given, so both restore fresh
input via `setup` (once per mode). That is not a complete fix — within a mode,
iterations 2..N still work on already-processed data — but it applies equally
to both sides, so the ratio stays fair even though the absolute `hz` reflects
the sorted-input case.

`math.perspective_4point_transform` is deliberately not benched: it is
deprecated and logs a console warning on every call.

Two series were needed here, because review found two cases were measuring
the wrong thing (details below). The authoritative numbers are the post-fix
series — four runs on an idle machine, discarding a warm-up:

| case | r1 | r2 | r3 | r4 | verdict |
| --- | --- | --- | --- | --- | --- |
| `get_gaussian_kernel` size 7 | 1.15 | 1.08 | 1.03 | 1.34 | 4/4 jsfeat, mostly below floor |
| `get_gaussian_kernel` size 9 | 1.08 | 1.12 | 1.12 | 1.03\* | below floor |
| `qsort` | 1.05 | 1.02\* | 1.08 | 1.18\* | flips — noise |
| `median` | 1.09\* | 1.05\* | 1.00\* | 1.11\* | 4/4 jsfeatNext, below floor |
| `transpose` 9x9 | 1.04\* | 1.09 | 1.19\* | 1.20 | flips — noise |
| **`invert_3x3`** | **1.24** | **1.18** | **1.36** | **1.34** | **real** |
| `multiply_3x3` | 1.11 | 1.03\* | 1.12 | 1.06 | below floor |
| `invert_affine_transform` | 1.09\* | 1.23\* | 1.02\* | 1.01 | 3/4 jsfeatNext |
| `invert_perspective_transform` | 1.12 | 1.05 | 1.00\* | 1.05 | below floor |

\* = jsfeatNext was faster in that run; every other figure favours jsfeat.

**`matmath.invert_3x3` is the one real signal here.** jsfeat is faster in all
four post-fix samples (1.18–1.36) and in all six of the earlier series
(1.29–1.40) — **ten out of ten**, never once flipping. It is called per model
fit in `motion_model` (`motion_model.ts:262`), so it is on the per-frame path.
Same shape as the YAPE and `linalg` findings; recorded as an open finding, not
acted on here.

Everything else is at or below the ~1.15x floor. `get_gaussian_kernel` size 7
favours jsfeat 4/4 and `median` favours jsfeatNext 4/4, but both sit low
enough to be directional-at-best, the same category as `fast_corners` thr 60.

### Three corrections this file's own measurements forced

**The `qsort` case was not sorting.** `math.qsort` takes a *less-than
predicate* and uses it in boolean contexts (`if (cmp(a, b))`, ternaries). The
bench originally passed a conventional three-way `-1/0/1` comparator — which
returns a **truthy** value for both orderings, so the algorithm saw "a < b" as
true in either direction. Verified with a probe: sorting `[5,3,9,1,7,2,8,4,6,0]`
returned `8,4,6,0,5,3,9,1,7,2`, completely unordered. The case was timing a
non-sort. Fixed to the same predicate shape `tests/parity/math.test.ts` uses;
the verdict happens to be unchanged (noise either way), but it now measures
sorting.

**The `transform` comparison confounded two variables.** It passed jsfeat a
packed JS array (`Array.from`) while jsfeatNext used a `Float32Array` — V8
stores and optimises those very differently, so the ratio mixed the
calling-convention question with an element-storage difference. Both sides now
use `Float32Array`, leaving `matrix_t`-vs-raw as the only difference. This
strengthened rather than overturned the conclusion: with the confound removed,
`invert_affine_transform` favours *jsfeatNext* in 3 of 4 runs.

**An earlier series ran while the machine was busy**, and it supported three
conclusions the idle re-run dismantled: `get_gaussian_kernel` size 7 looked
like a clean 6/6 directional result and then flipped twice, `transpose`
likewise, and `qsort` looked like the one case jsfeatNext consistently won
(5/6) before becoming an even split. Only `invert_3x3` survived — and it got
*tighter*, the same signature the YAPE finding showed. Contention does not
just add scatter; it manufactures apparent direction.

A prediction also failed, and is worth recording as such. The module docstring
originally argued `transform` *should* measurably favour jsfeat, since
jsfeatNext's methods take `matrix_t` and unwrap `.data` while jsfeat's take
raw arrays — two extra property loads on a function that is a dozen float
operations. Across both series neither transform case clears the noise floor
in jsfeat's favour. The `matrix_t` calling convention has no throughput cost
this harness can detect; the docstring now states that null result instead of
the prediction.

## Open finding: motion_model allocates per call, and it dominates small fits

`bench/motion_estimator.bench.ts` measures `ransac`/`lmeds` end to end, so the
kernel's own cost is mixed with the estimator's loop. This file calls the
kernel methods directly, which is what makes the following attributable.

| Case | Why it is here |
| --- | --- |
| `homography2d.run` / `affine2d.run` — 4 / 3 points | The per-iteration hypothesis fit: RANSAC calls `run` on a minimal sample every iteration |
| `homography2d.run` / `affine2d.run` — 40 points | The final refit on the full inlier set |
| `homography2d.error` / `affine2d.error` — 40 points | The per-iteration scoring pass over all correspondences |
| `homography2d.check_subset` — 4 points | Called once per RANSAC iteration. `affine2d.check_subset` is a bare `return true` on both sides, so there is nothing to compare |

Correspondences are clean (no outliers), unlike `motion_estimator.bench.ts`'s
fixture: these kernels are called directly, with no outlier rejection in play,
so gross outliers would only make `run` fit a meaningless model without
changing what it costs.

Eight samples, pooled from two idle-machine sessions, each discarding a
warm-up:

| case | session A | session B | allocates? | verdict |
| --- | --- | --- | --- | --- |
| **`affine2d.run` 3 pts** | 3.28 / 3.47 / 3.70 / 3.15 | 3.34 / 3.45 / 3.47 / 3.87 | yes | **real — largest in suite** |
| **`affine2d.run` 40 pts** | 1.69 / 1.54 / 1.46 / 1.51 | 1.44 / 1.63 / 1.60 / 1.53 | yes | **real** |
| **`homography2d.run` 4 pts** | 1.22 / 1.31 / 1.33 / 1.51 | 1.26 / 1.73 / 1.32 / 1.34 | yes | **real** |
| **`homography2d.run` 40 pts** | 1.15 / 1.31 / 1.33 / 1.24 | 1.30 / 1.26 / 1.18 / 1.38 | yes | **real** |
| **`homography2d.check_subset`** | 1.35 / 1.45 / 1.32 / 1.36 | 1.15 / 2.11 / 1.36 / 1.11 | yes | **real, but wide** |
| `homography2d.error` 40 pts | 1.03 / 1.11 / 1.06 / 1.05 | 1.02 / 1.16\* / 2.91\* / 1.18 | no | noise |
| `affine2d.error` 40 pts | 1.09 / 1.10 / 1.05 / 1.05 | 1.07 / 1.06 / 1.01\* / 1.09\* | no | noise |

\* = jsfeatNext was faster in that run.

**Direction is the evidence, and it is unanimous**: the five allocating cases
favour jsfeat in **all eight** samples without a single flip. Magnitudes vary
much more — quote `affine2d.run` at 3 points as "roughly 3.5x", not to two
decimals, and see the caveat below on `check_subset`.

**The cause is visible in the code, and the shape of the result fits it.**
jsfeatNext constructs a `matmath` instance *inside* three per-call methods —
`affine2d.run` (`motion_model.ts:212`), `homography2d.run` (line 352) and
`homography2d.check_subset` (line 541). Original jsfeat does not: its
equivalents call module-scope functions.

- `affine2d.run` at **3 points** — where the real arithmetic is nearly
  nothing — runs **~3.5x** slower. A fixed per-call cost dominates entirely.
- The same method at **40 points** drops to **~1.5x**: identical overhead,
  amortised over ~13x more real work.
- `error`, the only pair of methods that **allocates nothing**, is the only
  pair that flips sign and sits in the noise floor — an unplanned but
  decisive control.

"Huge ratio on tiny inputs, shrinking as the input grows, absent where there
is no allocation" is the signature of a fixed per-call allocation, and it is
what these numbers show.

### A caveat, and a repeated mistake worth recording

An earlier four-sample series put `check_subset` at 1.32–1.45 and this file
called it "tight". Four more samples widened it to **1.11–2.11**. The
direction survived; the precision claim did not.

That is the *same* error this file already documents for the YAPE finding —
"four samples are not enough to characterise a spread, only a direction" —
made again, one section later, on a different case. Treat every
tightness claim in this document as provisional until it has eight or more
samples behind it.

This is the same class of defect as
[#159](https://github.com/webarkit/jsfeatNext/issues/159) (`matrix_t`
re-allocating a `data_type` table on every construction) — and note the two
compound: each `new matmath()` here is itself cheap, but `matmath`'s methods
build `matrix_t` instances, which is where #159 bites. Measurement only here,
per #86; the fix belongs in its own PR against `src/`.

## Notes on the inputs

- All inputs come from the deterministic generators in `tests/properties/helpers.ts` (seeded PRNG), so runs are reproducible.
- Both sides get **identical** data — the oracle matrix is filled from the same buffer, never regenerated.
- ORB detects its keypoints **once, outside** the timed function, so the measurement is `describe()` alone rather than `detect()` + `describe()`. Keypoints use border 20 so no sampling pattern crosses the image edge ([#110](https://github.com/webarkit/jsfeatNext/issues/110)) and both implementations do identical work.
- ORB uses noise rather than `cornerScene`: the latter is built for the correctness tests and yields only ~27 keypoints at border 20, which would time call overhead rather than the algorithm. Noise yields tens of thousands, capped at 500 to match a realistic AR frame.

## Not in CI (yet)

Running these on a shared runner is planned as a **separate, non-blocking, manually triggered** workflow — never a gate. That is phase 3 of #86, deliberately left until there is real data on how stable the ratios are in that environment.

## Further reading

The noise floor above is our own measurement, on this machine. For the general
problem of benchmarking on managed runtimes and on CI:

- **[`benchmark-action/github-action-benchmark`](https://github.com/benchmark-action/github-action-benchmark)** — the reference project for running benchmarks in CI. Worth noting that its default regression alert threshold is **200%** (a 2× slowdown): a default that conservative is itself a statement about how noisy hosted runners are.
- **[tinybench](https://github.com/tinylibs/tinybench)** — what `vitest bench` uses underneath. Explains the `rme` and `samples` columns. Note `rme` is the error *within* one measurement (ours runs ~1–3%, comfortably low); the variance *between* runs is a different and much larger thing — that is what the noise floor above measures.
- **[Vitest benchmarking docs](https://vitest.dev/guide/features.html#benchmarking)** — the `bench()` API and its options.
- **Georges, Buytaert & Eeckhout, _"Statistically Rigorous Java Performance Evaluation"_ (OOPSLA 2007)** — the classic treatment of why single runs on a JIT runtime mislead: warm-up, non-deterministic GC, the need for repeated measurements. Written for the JVM, but every problem it describes applies to V8.

GitHub does not guarantee reproducible performance on hosted runners — it
specifies the hardware, not isolation from neighbours. The absence of that
guarantee matters more than any particular percentage.
