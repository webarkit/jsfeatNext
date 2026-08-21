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
| **Memory pressure / GC** | Smaller than people assume, but real: with RAM nearly full the collector runs more often and that time lands inside the measurement. These benches allocate their buffers *outside* the timed region, so this is a minor factor here. |

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

Later phases fill in the remaining modules (`linalg`, `motion_estimator`, the
cache pool) one PR at a time.

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
