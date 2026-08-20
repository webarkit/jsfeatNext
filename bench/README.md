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

The first real signal this harness produced. Measured on an idle machine
(power connected, browser and editor closed), discarding the warm-up run:

| case | run 1 | run 2 | verdict |
| --- | --- | --- | --- |
| `fast_corners` thr 20 | 1.06× | 1.07× | noise |
| `fast_corners` thr 60 | 1.11× | 1.06× | noise |
| **`yape06`** | **1.35×** | **1.37×** | **real** |
| **`yape`** | **1.31×** | **1.33×** | **real** |

All in jsfeat's favour. `fast_corners` sits under the ~1.15× floor, so it says
nothing. `yape06` and `yape` are well outside it and reproduce to within
±0.02 — that tightness is itself evidence: noise disperses, a real difference
converges.

Worth recording how this was established, because the first attempt got it
wrong. An earlier measurement taken with a browser and editor open put
`fast_corners` as high as 1.23× and `yape06` at 1.51×. On the idle machine
`fast_corners` collapsed into the noise floor while the YAPE gap **held and
tightened**. CPU contention had inflated everything; only one of the two
findings survived. Follow the "clean measurement" steps above before believing
any number here.

It is not an algorithmic difference: corner counts are identical on both sides
(26,016 / 12,919 / 49,258 / 149), so both do the same work.

**Leading hypothesis — not proven.** jsfeat defines its per-pixel helpers as
closures *inside* the module IIFE, in the same scope as `detect`:

```js
var hessian_min_eigen_value = function (src, off, tr, Dxx, Dyy, Dxy, Dyx) { … };
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

Later phases fill in the remaining modules (`optical_flow_lk`, `linalg`,
`motion_estimator`, the cache pool) one PR at a time.

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
