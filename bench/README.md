# Benchmarks

Throughput measurement for the hot paths, per [#86](https://github.com/webarkit/jsfeatNext/issues/86).

```bash
npm run bench
```

## Read the ratio, not the absolute numbers

Every case runs **twice in the same process**: once through jsfeatNext, once through the vendored original jsfeat (`tests/vendor/oracle.cjs`). What matters is the **ratio** Vitest prints in the `BENCH Summary` block:

```
jsfeat (reference) - imgproc.gaussian_blur — U8 fast path
  1.06x faster than jsfeatNext
```

The `hz` / `mean` columns above it are **not** comparable across machines, and largely not comparable across runs on the same machine either.

### Why

Absolute throughput depends on the CPU model, its thermal and boost state, what else the machine is doing, and the Node version. On a shared CI runner two identical runs commonly differ by 20–50%. A number recorded on one box and diffed against another box reports **noise as a regression** — and the natural response (widen the threshold until it stops shouting) leaves you with a measurement that can no longer detect anything.

Running both implementations back to back cancels almost all of that. A slow runner halves both sides; the ratio survives. So:

- ✅ *"jsfeatNext runs `gaussian_blur` U8 at 0.94× jsfeat"* — portable, comparable next month, comparable on CI.
- ❌ *"1240 ops/s"* — true only for that box, that minute.

## What a change means

- A ratio drifting **down** across commits: jsfeatNext lost ground against the same reference workload. That is the regression signal.
- A ratio moving **up**: an optimization landed, and by how much.

Since jsfeatNext is a port of jsfeat, ratios near **1.0× are the expected, healthy state** — the two are doing the same arithmetic. A ratio that suddenly moves is more interesting than its exact value.

## No results are committed

There is deliberately no `bench/results/*.json` in the repo. A committed baseline invites exactly the cross-machine comparison described above, and produces noisy diffs on every run. The ratio is recomputed from scratch each time, which is what makes it trustworthy.

If historical tracking is wanted later, the thing to store is the **ratio**, not the raw `hz`.

## Current scope (phase 1)

| Case | Why it is here |
| --- | --- |
| `gaussian_blur` — U8 fast path | The most-used filter in the pipeline |
| `gaussian_blur` — F32 path (`_convol`) | Different cost profile; the float branch no test exercised until #87 |
| `resample` — U8 fixed-point fast path | Pyramid construction; the `< 0x100` area-ratio branch |
| `resample` — float path | The non-U8 branch, bypassing fixed point |
| `orb.describe` | The per-frame hot spot (~5 ms in the pinball sample). Structurally unlike the filters: per-keypoint cost, sparse access through a rotated patch warp |

Later phases fill in the remaining modules (`fast_corners`, `yape`, `optical_flow_lk`, `linalg`, `motion_estimator`, the cache pool) one PR at a time.

## Notes on the inputs

- All inputs come from the deterministic generators in `tests/properties/helpers.ts` (seeded PRNG), so runs are reproducible.
- Both sides get **identical** data — the oracle matrix is filled from the same buffer, never regenerated.
- ORB detects its keypoints **once, outside** the timed function, so the measurement is `describe()` alone rather than `detect()` + `describe()`. Keypoints use border 20 so no sampling pattern crosses the image edge ([#110](https://github.com/webarkit/jsfeatNext/issues/110)) and both implementations do identical work.
- ORB uses noise rather than `cornerScene`: the latter is built for the correctness tests and yields only ~27 keypoints at border 20, which would time call overhead rather than the algorithm. Noise yields tens of thousands, capped at 500 to match a realistic AR frame.

## Not in CI (yet)

Running these on a shared runner is planned as a **separate, non-blocking, manually triggered** workflow — never a gate. That is phase 3 of #86, deliberately left until there is real data on how stable the ratios are in that environment.
