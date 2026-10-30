# FREAK descriptor (#80) — design

**Date:** 2026-10-30
**Status:** draft, for the maintainer's approval
**Issue:** [#80](https://github.com/webarkit/jsfeatNext/issues/80) · **Milestone:** [1.2.0](https://github.com/webarkit/jsfeatNext/milestone/5)
**Builds on:** [milestone 1.2.0 plan](../plans/2026-10-27-milestone-1.2.0.md), Task 7 · the TEBLID design, [`2026-10-29-teblid-design.md`](2026-10-29-teblid-design.md), whose ground-truth rules (T5) and fixture `meta` apply unchanged
**Reference:** OpenCV 4.10.0, [`opencv_contrib/modules/xfeatures2d/src/freak.cpp`](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp) (`FREAK_Impl`), constants in [`xfeatures2d.hpp`](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/include/opencv2/xfeatures2d.hpp#L84-L121)

---

## 1. Intent

Add `jsfeatNext.freak`: the FREAK binary descriptor (Alahi, Ortiz, Vandergheynst, CVPR 2012). It uses a retinal sampling pattern of 43 smoothed points and 512 pairwise comparisons. It is the second descriptor, after TEBLID, that the `CvBackend` contract (#232) lets callers select. What sets it apart: **it estimates each keypoint's orientation itself**, from 45 long-range point pairs, so it works with detectors that give no angle.

**The deciding requirement is the one TEBLID set: full cross-backend compatibility.** jsfeatNext and the PureCV backend (PureCV issue [#103](https://github.com/webarkit/purecv/issues/103)) must produce identical bits and identical kept keypoints. The only guarantee that holds across both is for each to be **bit-exact with OpenCV 4.10.0**, measured as in TEBLID's T5.

## 2. Goals, non-goals, anti-goals

**Goals**

- `freak.describe(...)` is bit-exact with `cv2.xfeatures2d.FREAK_create(orientationNormalized, scaleNormalized, patternScale, nOctaves).compute(...)` (OpenCV 4.10.0). It matches OpenCV on three outputs:
  - the descriptor bytes;
  - **which** keypoints are kept, in which order;
  - the estimated angle of each kept keypoint.
- All four OpenCV parameters are exposed, with OpenCV's defaults.
- **No 8.5 MB pattern table.** OpenCV's `buildPattern` stores 64 scales × 256 orientations × 43 points. Here, pattern points are computed on demand (§5), and the module's resident memory is a few KB. The PR states the figure, because PureCV inherits the choice (#80).
- The output is accepted by `bfmatcher` unchanged: 64 bytes per row, `U8C1`.
- Tree-shakeable: an application that imports `{ imgproc }` ships none of FREAK (#137).

**Non-goals**

- Custom description pairs (OpenCV's `selectedPairs`) and the pair-training routine `selectPairs`.
- Cascade matching (the 16-byte pre-filter of the paper). `bfmatcher` compares all 64 bytes. Cascade matching could be added later without changing the descriptor.
- Wiring into the `CvBackend` adapter: that is #232, in webarkit/webarkit (§10).
- Colour input, and 16-bit or signed images: jsfeatNext takes `U8C1`, as `orb.describe` and `teblid.describe` do.
- Teaching the detectors to fill `keypoint_t.size`.

**Anti-goals** (failure even if the code "works")

- Bits, kept keypoints or angles that differ from OpenCV on any input in the fixture set.
- A descriptor row for a keypoint OpenCV would have dropped, or a row misaligned with its keypoint.
- Undefined behaviour reached silently: a keypoint whose scale OpenCV cannot compute throws instead (§4).
- An 8.5 MB, or any multi-megabyte, table in memory.
- A shared-pool imbalance, or a new `any` (#85).

## 3. Decisions taken with the maintainer

| # | Decision | Alternatives rejected | Why |
| --- | --- | --- | --- |
| F1 | **Pattern points computed on demand** (2026-10-27, milestone plan defaults) | OpenCV's full `patternLookup` (~8.5 MB); a table with fewer orientations; lazy per-scale tables | The 8.5 MB table is OpenCV's speed trade-off, not part of the algorithm. Recomputing a point is a few float operations. A table with fewer orientations would change the bits |
| F2 | **Border keypoints are dropped as OpenCV drops them: `corners` is compacted in place and `describe` returns the kept count** (2026-10-30) | keep every keypoint in place, with a zero row and a "rejected" flag | Mirrors `compute`, which erases those keypoints and returns fewer rows. Row `i` of the descriptors always belongs to `corners[i]`. PureCV and the adapter (#232) get the same shape as OpenCV |
| F3 | **All four OpenCV parameters exposed as options, with OpenCV's defaults** (2026-10-30) | the defaults only | Each one is fixed by a few cheap fixtures. PureCV will port the same surface |
| F4 | **Ground truth as for TEBLID (T5):** the shared `.venv` that equals PureCV's `cpp_ref` pins, generated on this Windows x86-64 machine, `meta.platform` and `meta.compiler` recorded, no tolerance | — | Same chain, same rules |
| F5 | **The written angle is OpenCV's, in `(−180°, 180°]`, negative values included** (2026-10-30) | wrapping into `[0, 360)` so negative angles never reach TEBLID's divergent branch | Keeps the angle bit-exact with OpenCV FREAK, which PureCV mirrors. FREAK followed by TEBLID in one pipeline is unusual; the divergence is documented instead (§4) |
| F6 | **The licence text ships verbatim from `freak.cpp`, as `LICENSES/BSD-3-Clause-FREAK.txt`** (2026-10-30) | the SPDX BSD-3-Clause template as `LICENSES/BSD-3-Clause.txt` | `freak.cpp`'s notice is not the SPDX wording (its third clause names "the copyright holders", its disclaimer "the Intel Corporation"), and BSD requires reproducing *this* notice |

## 4. Public API

```ts
// src/freak/freak.ts — singleton jsfeatNext.freak, and named export { freak }
describe(
    src: matrix_t,               // U8C1 grayscale, full resolution
    corners: keypoint_t[],       // reads x, y and size; writes angle; compacted in place
    count: number,               // considers corners[0 .. count)
    descriptors: matrix_t,       // resized to 64 × kept, U8C1
    options?: {
        orientation_normalized?: boolean, // default true
        scale_normalized?: boolean,       // default true
        pattern_scale?: number,           // default 22.0
        n_octaves?: number,               // default 4
    },
): number                        // kept: corners[0 .. kept) are the described keypoints
```

- **Compaction.** Kept keypoints keep their relative order, as after OpenCV's `erase`s. Row `i` of `descriptors` describes `corners[i]` for `i < kept`. The *contents* of `corners[kept .. count)` are unspecified; the array's length is not changed. The `keypoint_t` objects are moved, not copied.
- **Angle out.** Each kept keypoint's `angle` is overwritten:
  - with the estimated orientation, in radians, when `orientation_normalized` is true;
  - with `0` when it is false, as OpenCV sets `0.0`.

  The input `angle` is never read. The written value is `deg_f32 * 0.017453292519943295`, where `deg_f32` is OpenCV's float32 angle in degrees, in OpenCV's range `(−180°, 180°]`. That is the conversion the TEBLID design (§5, "Angles") uses for OpenCV degrees.

  **No wrap into `[0, 360)`** (F5): the angle is OpenCV's, negative values included. As a consequence, feeding FREAK's keypoints to `teblid.describe` does **not** reproduce OpenCV's TEBLID bits for keypoints with a negative angle: OpenCV's TEBLID treats every negative angle as upright ([`beblid.cpp`](https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L187-L188)), while jsfeatNext's treats it as a real rotation. The TSDoc of both modules states this, and the sentence in `teblid.ts` claiming that OpenCV never produces a negative angle except `-1` is corrected, since FREAK produces them.
- **Size.** With `scale_normalized` (the default), `size` selects one of the 64 pattern scales. With it off, `size` is not read.
- **Errors.** Everything is checked before the shared pool is touched, and throws:
  - a `TypeError` for a `src` that is not `U8C1`;
  - a `RangeError` when `count > corners.length`;
  - a `RangeError` naming the index, for a non-finite `x` or `y`, or, with `scale_normalized`, a `size` that is not finite and positive. OpenCV computes `log(size / 7)` and converts it to `int`, which is undefined for `size <= 0`. This matches `teblid.describe`.
  - a `RangeError` for `pattern_scale` that is not finite and positive as float32, and for `n_octaves` that is not a positive integer.
- **`count === 0`**, or no keypoint kept: `descriptors` is resized to 0 rows, and `0` is returned.

## 5. Algorithm, and what bit-exactness takes

A port of `FREAK_Impl::buildPattern`, `computeDescriptors<uchar, int>`, `meanIntensity` and the **generic** `extractDescriptor` (the "preserving the order of SSE version" comment says both paths give the same bit order; the fixtures, made on x86-64 where the SSE2 specialisation runs, check it).

1. **Constants, built once at module load** (`/* @__PURE__ */`): the 512 default pairs `FREAK_DEF_PAIRS`, as a decimal literal in OpenCV's order, expanded into `(i, j)` point indices; the 45 orientation pairs.
2. **Per call, from `pattern_scale` and `n_octaves`:**
   - `patternSizes[64]`;
   - the 45 orientation weights, which depend on the scale-0, orientation-0 points;
   - `sizeCst`.

   These are a few hundred numbers. They could be cached for the last parameter pair, as `buildPattern` does (left to the builder).
3. **Integral image** of `src`, borrowed from the shared pool and returned in a `finally`. OpenCV uses an `int` integral for images under 2²³ pixels and a `double` one above. The two give the same means, because `(sum + area/2) / area` truncates the same way for non-negative sums. The builder may use one representation for both, provided the sums stay exact.
4. **Scale and border filter**, as OpenCV's first loop. `scale_normalized` takes the `log(size/7)` branch; otherwise `cvRound(1.0986122886681 * sizeCst)` is used. Keypoints with `x <= ps`, `y <= ps`, `x >= cols − ps` or `y >= rows − ps` are dropped (`ps = patternSizes[scaleIdx]`), and the survivors are compacted.
5. **Orientation**, when `orientation_normalized`:
   - take the 43 means at orientation 0;
   - accumulate `direction0` and `direction1` over the 45 pairs, with C's truncating integer division by 2048;
   - compute `angle = float(atan2f(d1, d0) * (180/π))`;
   - compute `thetaIdx = cvRound(Math.fround(256 * angle) * (1 / 360.0))`, wrapped into `[0, 256)`. OpenCV multiplies by the double reciprocal; dividing by 360 instead can round differently at exact half-step ties, such as `0.703125°`.
6. **Descriptor:** the 43 means at `thetaIdx`, then the 512 comparisons `v[i] >= v[j]`, placed at the bit positions of the generic `extractDescriptor`. `std::bitset` bit `kk` is byte `kk >> 3`, bit `kk & 7` on little-endian targets.

**Pattern points on demand.** A point for (scale `s`, orientation `o`, index `p`) is `buildPattern`'s expression, evaluated the way OpenCV evaluates it:

- `scaleStep = pow(2, n_octaves / 64)` and `scalingFactor = pow(scaleStep, s)`, in double;
- `theta = o * 2 * π / 256` and `alpha = k * 2 * π / n[i] + beta + theta`, in double, left to right;
- `x = float(radius[i] * cos(alpha) * scalingFactor * patternScale)`, and `y` with `sin`, and `sigma = float(sigma[i] * scalingFactor * patternScale)`.

`patternScale` is OpenCV's `double` member, set from the `float` constructor argument, so it is `Math.fround(pattern_scale)`. `patternSizes` keeps OpenCV's expression, `ceil((radius[i]+sigma[i]) * scalingFactor * patternScale) + 1`, maximised over the rings. Do not simplify it algebraically.

**Float32 and rounding rules.** As for TEBLID, every C++ `float` expression is evaluated with `Math.fround` after each operation, in C++'s order. Specifically:

- `x`, `y` and `size` are read through `Math.fround`;
- `kpScaleIdx = max((int)(logf(size/7) * sizeCst + 0.5), 0)`, clamped to 63. `std::log` of a `float` is `logf`, and `(int)` truncates toward zero;
- `cvRound` is round-half-to-even, not `Math.round`. On x86-64 it is `lrint` / `cvtsd2si` (and `cvtss2si` for a `float` argument). It is used in `thetaIdx`, the orientation weights and the box borders of `meanIntensity`;
- in `meanIntensity`:
  - `xf = float(point.x + kp_x)`, and `x = int(xf)` truncates;
  - the box borders are `cvRound(xf − radius)` and `cvRound(xf + radius + 1)`, in float32;
  - the bilinear branch is taken for `radius < 0.5`. It is unreachable at the defaults, but reachable with a small `pattern_scale`. **Port its bug as is:** the weights sum to `1024 × 1024`, but OpenCV adds `2 × 1024 × 1024` and divides by `4 × 1024 × 1024`, so it returns about a quarter of the intensity. The `pattern_scale = 8` fixture matches only if this is copied, not fixed. The TSDoc says so.

**Known risks** for the fixtures to settle. As with TEBLID, a mismatch is reported to the maintainer with the case, never absorbed (F4):

- **`Math.cos`, `Math.sin` and `Math.pow`** against MSVC's, in double, before the cast to float. They differ only if one is off by an ulp exactly at a float32 rounding boundary.
- **`logf` and `atan2f`.** The JS emulation is `Math.fround(Math.log(...))` and `Math.fround(Math.atan2(...))`. MSVC's float functions are not guaranteed to be correctly rounded. A one-ulp difference matters only where it moves `kpScaleIdx` or `thetaIdx` across a boundary, or where the angle itself is compared. If a fixture shows a difference, the fix is a case-by-case decision, not a tolerance.

## 6. Fixtures

`scripts/gen-opencv-fixtures.py` gains a `freak` group (`--only freak`) and writes `tests/fixtures/opencv/freak.json`. Everything TEBLID's §6 says about the environment, `meta` and "no tolerance" applies.

- **Image:** the committed `scene-640x480.pgm`.
- **Keypoints:** a fixed, seeded list, written as float32 `x, y, size`. The input angle is irrelevant and is set to `-1`. The list covers:
  - the interior;
  - each border and corner, just inside, at and just beyond `patternSizes[s]`, for small and large scales;
  - sizes from below 7 (scale 0), through each step of the 7…112 range at `n_octaves = 4`, to above 112 (clamped to scale 63);
  - non-integer positions;
  - flat patches (zero gradient, so `atan2(0, 0)`).
- **Cases:**
  - the defaults;
  - `orientation_normalized = false`;
  - `scale_normalized = false`;
  - `pattern_scale = 8`, which reaches the bilinear branch;
  - `n_octaves = 3` and `8`.
- **Payload, per case:**
  - the input keypoints;
  - the indices of the kept ones, in OpenCV's output order;
  - their angles, as float32 degrees;
  - one hex string per descriptor row.

  The generator recovers the kept indices by matching the returned keypoints' `pt` and `size` to the inputs, and asserts that the match is unique.

## 7. Tests (acceptance)

- **Parity**, on every fixture case:
  - `describe` returns the fixture's kept count;
  - `corners[0..kept)` are the fixture's kept keypoints, the same objects in the same order;
  - each `angle === Math.fround(deg) * 0.017453292519943295`, exactly;
  - every descriptor byte equals the fixture.
- **Constants:**
  - `FREAK_DEF_PAIRS` has 512 entries, and its first and last entries equal OpenCV's literals;
  - the 45 orientation pairs match OpenCV's list.

  The orientation weights are protected members of `FREAK_Impl`, which the wheel cannot read, so they have no direct test: the parity cases check them through the angles and the bits (my call; a C++ helper would add a toolchain the fixture pipeline does not have).
- **Properties:**
  - each `RangeError` and `TypeError` of §4, naming the index where there is one;
  - `count = 0`, and every keypoint dropped, give 0 rows;
  - the input `angle` has no effect;
  - **rotation:** describing a 90°-rotated copy of the image at the rotated keypoints gives angles 90° apart (mod 256 orientation steps) and descriptors within a small Hamming distance. The bound comes from OpenCV on the same input, recorded in the fixture, not guessed (milestone plan, Task 7, Step 3);
  - `corners[count..]` is untouched;
  - the shared pool stays balanced, including when `describe` throws.
- **bfmatcher:** a round trip at 64 bytes per row: a descriptor set matched against itself gives distance 0 and identity pairs.
- **Surface:**
  - `freak` in the API-shape test and the named-exports identity test;
  - the bundle test adds a FREAK marker (the start of `FREAK_DEF_PAIRS`, `404,431,818,511,181`) that a `{ imgproc }` bundle must not contain.
- **Bench:** `bench/freak.bench.ts`, an intra-library group (jsfeat has no FREAK): FREAK against `orb.describe` and `teblid.describe` (256) on the same keypoints, recorded in `bench/README.md`. The record states FREAK's resident memory.

## 7b. Example (my call, mirroring TEBLID's)

`examples/sample_freak.html` is as small as `sample_teblid.html`: the same two views (rotated and scaled), FAST corners, and `size = 31`. The difference it shows is the point of FREAK: **no `ic_angle` call**. FREAK estimates the angle, and the page draws it as a short tick per keypoint. It matches with `bfmatcher.knnMatch` and the ratio test, and prints the kept count, the match count and the describe time. Header: the *original* variant. The README's examples section links it.

## 8. Files

| Path | Change |
| --- | --- |
| `src/freak/freak.ts` | new: the module (class extending `core`) |
| `src/freak/freak_tables.ts` | new: `FREAK_DEF_PAIRS` and the orientation pairs, `/* @__PURE__ */` |
| `src/teblid/teblid.ts` | TSDoc only: negative angles do occur, from FREAK (F5) |
| `src/singletons.ts`, `src/jsfeatNext.ts`, `src/index.ts`, `src/core/core.ts` | the singleton, the namespace member, the named export, the static type |
| `.agents/skills/license-header-adder/resources/ATTRIBUTION-opencv-freak.txt`, `scripts/check-license-headers.mjs` | a new opencv-family variant for `src/freak/` (§9) |
| `LICENSES/BSD-3-Clause-FREAK.txt`, `package.json` (`files`), the bundle banner in `vite.config.mts` | the licence text, shipped and named |
| `scripts/gen-opencv-fixtures.py`, `tests/fixtures/opencv/freak.json`, `tests/fixtures/opencv/README.md` | fixtures |
| `tests/parity/freak.test.ts`, `tests/properties/freak.test.ts`, the updated surface tests | tests |
| `bench/freak.bench.ts`, `bench/README.md` | bench |
| `examples/sample_freak.html` | the example |
| `README.md` (module list, licence section), `AGENTS.md` (the opencv family now has three variants, two licences), `docs/superpowers/plans/2026-10-27-milestone-1.2.0.md` (Progress) | docs |

## 9. Licence

`freak.cpp` is **not** Apache-2.0, unlike `gms.cpp` and `beblid.cpp`. It carries a **BSD-3-Clause** notice: "Copyright (C) 2011-2012 Signal processing laboratory 2, EPFL", by Kirell Benzi, Raphael Ortiz, Alexandre Alahi and Pierre Vandergheynst. BSD-3 requires that redistributions keep the notice in source and reproduce it in binary documentation. So:

- `ATTRIBUTION-opencv-freak.txt` carries the EPFL copyright line, the authors, and the three clauses with the disclaimer, verbatim. It cites the 4.10.0 permalink and the CVPR 2012 paper.
- The check script maps `src/freak/` to the `opencv-freak` variant.
- `LICENSES/BSD-3-Clause-FREAK.txt`, the notice of `freak.cpp` verbatim (F6), ships in the package, and the bundle banner names it next to Apache-2.0.
- AGENTS.md's licence section is updated: the opencv family is per upstream file and per upstream licence.

## 10. For webarkit #232 (recorded here, not done here)

- As for TEBLID, describe on the **full-resolution** image, with `size` and coordinates in level-0 pixels.
- `describe` **drops** keypoints, so the adapter must use the returned count and the compacted array, never the input length.
- FREAK writes the angle, so the adapter needs no orientation step for it. The `CvBackend` `Keypoint.angle` is radians, which is what `corners[i].angle` holds; it can be negative (F5).

## 11. Left to the builder

- Internal structure: helper names, whether pattern points are recomputed per keypoint or cached per `(scale, orientation)` within one call (the result must be identical), and scratch storage from the shared pool.
- The exact keypoint list, within §6's coverage, and the Hamming bound's derivation.
- Error message wording.
