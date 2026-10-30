# OpenCV ground-truth fixtures

Reference values computed by **OpenCV** and committed as JSON, so the Vitest
suite can assert jsfeatNext against a third-party implementation
([#132](https://github.com/webarkit/jsfeatNext/issues/132)).

## Why this exists

Every other correctness guarantee in the repository rests on parity against the
vendored original jsfeat (`tests/vendor/`). That is the right safety net for the
modules jsfeat has, and it has nothing to say about the ones it does not: no
GMS, no TEBLID, no FREAK. It also cannot catch a defect present in **both**
implementations, because they share the algorithm (the uninitialised first
column of `compute_integral_image`, fixed in
[#131](https://github.com/webarkit/jsfeatNext/issues/131), was invisible to it).

This is the first slice of the "third-party ground truth" strand of
[#87](https://github.com/webarkit/jsfeatNext/issues/87), and it matters beyond
this repo: [#96](https://github.com/webarkit/jsfeatNext/issues/96) makes
jsfeatNext the numeric reference oracle for the PureCV Rust port, and an oracle
that has never been checked against OpenCV is just the first of two
implementations that may both be wrong.

The fixtures are **committed**. CI runs against them and never needs Python.
The generator is a developer tool, run by hand.

## Which OpenCV

The exact versions are pinned in
[`scripts/requirements-fixtures.txt`](../../../scripts/requirements-fixtures.txt)
(`opencv-contrib-python==…`, `numpy==…`). It is `opencv-contrib-python` rather
than `opencv-python` because `cv::xfeatures2d::matchGMS`
([#134](https://github.com/webarkit/jsfeatNext/issues/134)) only ships in the
contrib wheel.

The pin is **OpenCV 4.10.0** (`opencv-contrib-python==4.10.0.84`,
`numpy==2.4.6`), the same reference build PureCV measures parity against
(`cpp_ref/` in [webarkit/purecv](https://github.com/webarkit/purecv), built from
opencv_contrib commit `1ed3dd2c`). PureCV validates against jsfeatNext and
jsfeatNext against OpenCV, so both links of that chain use one OpenCV. The
fixtures were first generated with 4.14.0; regenerating them with 4.10.0
changed nothing but `meta.opencv_version` (`gms.cpp` is byte-identical across
both releases). The rule, and how to change the version, is in the "OpenCV
reference version" section of [`AGENTS.md`](../../../AGENTS.md).

The generator reads that pin and **refuses to run** (non-zero exit, a message
naming both versions) unless the installed `opencv-contrib-python` wheel equals
it to all four parts, `A.B.C.D`, and `cv2.__version__` reports its `A.B.C`. The
wheel is checked, not just the module: another build of the same release (say
`4.10.0.82`) reports the same `cv2.__version__` and the same `Version control`
lines, but is a different binary (#245). It also refuses to run when another
distribution that provides `cv2` is installed in the same environment
(`opencv-python`, `opencv-python-headless`, `opencv-contrib-python-headless`),
since which one is imported is then undefined. A wrong toolchain is an explicit
error instead of silent drift between fixtures generated in different
sessions. Each fixture records the exact wheel in `meta.opencv_wheel` and the
version in `meta.opencv_version`, together with the `Version control` lines of
`cv2.getBuildInformation()` (the opencv and opencv_contrib trees the wheel was
built from); `pinned-version.test.ts` checks every one of them against the pin.

The generator also switches **Intel IPP off** (`cv2.ipp.setUseIPP(False)`)
before producing anything, and fails if it cannot: the reference is OpenCV's
generic CPU path, as in PureCV's `cpp_ref`, and IPP can take a different code
path for some functions. Every fixture records `"ipp": false`. Turning it off
changed no fixture payload.

## Regenerating

From the repository root. Python 3.11 or newer is all that is needed (the pinned
`numpy==2.4.6` declares `Requires-Python: >=3.11`); the virtualenv lives
in `.venv/`, which is gitignored and never committed.

**Linux / macOS (bash)**

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r scripts/requirements-fixtures.txt
.venv/bin/python scripts/gen-opencv-fixtures.py            # all fixtures
.venv/bin/python scripts/gen-opencv-fixtures.py --only integral
.venv/bin/python scripts/gen-opencv-fixtures.py --only gms # the four ORB gms-*.json + gms-boundaries
.venv/bin/python scripts/gen-opencv-fixtures.py --only gms-synthetic # the four gms-synth-*.json
.venv/bin/python scripts/gen-opencv-fixtures.py --only gms-coverage # gms-coverage.json
.venv/bin/python scripts/gen-opencv-fixtures.py --only teblid # teblid-p256.json + teblid-p512.json
.venv/bin/python scripts/gen-opencv-fixtures.py --only freak # freak.json
```

**Windows (PowerShell)**

```powershell
python -m venv .venv
.venv\Scripts\python -m pip install -r scripts\requirements-fixtures.txt
.venv\Scripts\python scripts\gen-opencv-fixtures.py        # all fixtures
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only integral
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only gms # the four ORB gms-*.json + gms-boundaries
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only gms-synthetic # the four gms-synth-*.json
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only gms-coverage # gms-coverage.json
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only teblid # teblid-p256.json + teblid-p512.json
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only freak # freak.json
```

(Git Bash on Windows: the bash commands above, with `.venv/Scripts/python`.)

Generation is deterministic: with the pinned toolchain and the committed scene,
a re-run leaves `git status` clean. A diff in a fixture therefore always means
the ground truth changed, and deserves a review as such.

If `pip` fails with `CERTIFICATE_VERIFY_FAILED` behind a TLS-intercepting
proxy, `pip install --use-feature=truststore …` makes it trust the operating
system's certificate store.

## The input image

The fixtures that start from an image all use `scene-640x480.pgm`: the output of
`cornerScene(640, 480)` from `tests/properties/helpers.ts`, dumped **once** from
TypeScript and committed. Python reads the same bytes with `cv2.imread`. The
alternative, re-implementing the seeded RNG in Python, would put a silent
divergence at the very bottom of the trust chain, where it would invalidate
every fixture downstream without announcing itself.

It is a binary PGM (`P5`, maxval 255: a 15-byte header and 307200 pixel bytes)
rather than a PNG, so neither side needs an image-encoder dependency. It is
marked `binary` in `.gitattributes`.

To re-dump it (you should almost never need to; `cornerScene` is meant to stay
fixed):

```bash
JSFEAT_DUMP_SCENE=1 npx vitest run tests/fixtures/opencv/dump-scene.test.ts
```

```powershell
$env:JSFEAT_DUMP_SCENE = "1"; npx vitest run tests/fixtures/opencv/dump-scene.test.ts; Remove-Item Env:JSFEAT_DUMP_SCENE
```

Without `JSFEAT_DUMP_SCENE=1` that test is skipped. Re-dumping changes the
image's sha256, which makes every existing fixture stale (the loader rejects
them), so **regenerate all of them** afterwards.

## Fixture format

One JSON file per fixture, `<algorithm>-<variant>.json`, keys sorted and
indented by one space so the diffs read well. The synthetic GMS fixtures
(`gms-synth-*`, `gms-coverage`), the TEBLID ones (`teblid-*`) and `freak.json`, which hold thousands of coordinates, write
each array of numbers (or of number pairs and triples) on one line instead of
one number per line. Every file is an envelope: a common `meta` block plus an
algorithm-specific `payload`.

```jsonc
{
 "meta": {
  "opencv_wheel": "opencv-contrib-python==A.B.C.D", // the exact installed wheel
  "opencv_version": "A.B.C",         // cv2.__version__ of the run that produced it
  "opencv_build": "A.B.C",           // "Version control:" line of getBuildInformation()
  "opencv_contrib_build": "A.B.C",   // "Version control (extra):" line
  "ipp": false,                      // Intel IPP disabled: the generic CPU path
  "platform": "Windows AMD64",       // platform.system() + platform.machine() of the run
  "compiler": "…",                   // "C++ Compiler:" line of getBuildInformation()
  "algorithm": "integral",           // which algorithm it pins
  "params": { "sdepth": "CV_32S" },  // the parameters of that run
  "image": "scene-640x480.pgm",      // present only when an image is involved
  "sha256": "…"                      // sha256 of that file's bytes; required with "image"
 },
 "payload": { /* algorithm-specific */ }
}
```

`compiler` is the wheel's own build-machine path and version, identical for every
install of the pinned wheel.

The envelope is generic on purpose. `compute_integral_image` outputs an integer
array, and GMS ([#134](https://github.com/webarkit/jsfeatNext/issues/134))
consumes keypoints and matches and outputs a subset of matches; neither is a
descriptor. A descriptor payload (hex strings, one per keypoint) arrives with
TEBLID and FREAK.

Read them from TypeScript with `loadFixture` (`tests/fixtures/opencv/loader.ts`):

```ts
const { meta, payload } = loadFixture<MyPayload>("integral-scene");
const scene = loadScene(); // { width, height, data }
```

`loadFixture` recomputes the sha256 of the image named in `meta.image` and
**throws** unless it equals `meta.sha256`, so a stale fixture fails loudly rather
than asserting against the wrong input. Keypoints, where an algorithm needs
them, are part of the fixture's input and are fed to jsfeatNext unchanged, so a
mismatch indicts the algorithm and not the detector in front of it.

### Fixtures

| file | OpenCV call | pinned by | test |
| --- | --- | --- | --- |
| `integral-scene.json` | `cv2.integral2(img, sdepth=CV_32S, sqdepth=CV_64F)` | sha256 of the little-endian `Int32` sum and `Float64` squared-sum tables, plus the first row and column | `tests/reference/opencv-integral.test.ts` |
| `gms-default.json` | `cv2.xfeatures2d.matchGMS(…)`, both flags off | the indices of the kept matches | `tests/reference/gms.opencv.test.ts` |
| `gms-rotation.json` | the same, `withRotation=True` | the same | the same |
| `gms-scale.json` | the same, `withScale=True` | the same | the same |
| `gms-rotation-scale.json` | the same, both flags on | the same | the same |
| `gms-boundaries.json` | the same, both flags off, on hand-placed points | the same | the same |
| `gms-synth-default.json`, `gms-synth-rotation.json`, `gms-synth-scale.json`, `gms-synth-rotation-scale.json` | the same, one per search path, on synthetic geometry | the same | the same |
| `gms-coverage.json` | the same, 33 small cases with their own flags and `thresholdFactor` | the same, per case | the same |
| `teblid-p256.json`, `teblid-p512.json` | `cv2.xfeatures2d.TEBLID_create(scale_factor, n_bits).compute(image, keypoints)`, 256 and 512 bits | one hex string per keypoint, the descriptor bytes | the TEBLID parity test (#135) |
| `freak.json` | `cv2.xfeatures2d.FREAK_create(orientationNormalized, scaleNormalized, patternScale, nOctaves).compute(image, keypoints)`, eight cases | per kept keypoint: its input index, angle and the 64 descriptor bytes as hex; plus the 90 degree rotation pairs | the FREAK parity test (#80) |

`integral` is the first fixture on purpose. It is pure integer arithmetic that
must match bit-for-bit, so a mismatch indicts the harness (image dump, encoding,
loader) rather than the algorithm; only once it is green can a fixture for
something new be trusted. The tilted sum is not pinned.

### GMS fixtures

`gms.filter` ([#134](https://github.com/webarkit/jsfeatNext/issues/134)) is a
port of `cv::xfeatures2d::matchGMS`, and jsfeat has no GMS, so these fixtures
are its only ground truth. GMS reads keypoint positions, the two image sizes
and the `(queryIdx, trainIdx)` pairs, nothing else, so each payload is pure
geometry: `size1`, `size2` (`[width, height]`), the three parameters,
`keypoints1`/`keypoints2` (`KeyPoint.pt`, float32-exact), `matches`
(`[queryIdx, trainIdx, distance]`) and `kept`, the ascending indices into
`matches` of what `matchGMS` returned. The test feeds the same keypoints and
matches to `gms.filter` and expects the same indices.

**Four search paths.** OpenCV's `getInlierMask` has four branches, and each
fixture takes one: `gms-default` (no flag), `gms-rotation` (`withRotation`),
`gms-scale` (`withScale`) and `gms-rotation-scale` (both, the nested
scale × rotation loop). `thresholdFactor` is the default 6 in all of them.

**Views.** View 1 is the committed scene. View 2 is built from it and not
committed (the keypoints are the input, not the pixels):

| fixture | view 2 | `size2` | kept / matches |
| --- | --- | --- | --- |
| `gms-default` | `warpAffine` translation dx = 18, dy = -11, same canvas | 640 × 480 | 27 / 199 |
| `gms-rotation` | `warpAffine` rotation 38.5° about (320, 240), same canvas | 640 × 480 | 8 / 199 |
| `gms-scale` | `resize` × 0.71, `INTER_AREA` | 454 × 341 | 6 / 199 |
| `gms-rotation-scale` | rotation 40° about (320, 240), then `resize` × 0.72, `INTER_AREA` | 461 × 346 | 8 / 199 |

On both views `cv2.ORB_create(nfeatures=500).detectAndCompute`, then
`cv2.BFMatcher(cv2.NORM_HAMMING).match` (no cross-check). Then the `trainIdx` of
30 % of the matches (`round(0.3 * len(matches))`, chosen with
`numpy.random.default_rng(1234)`, a fresh generator per fixture) is replaced by
a random valid index, so the filter has wrong matches to reject; their
`distance` is left as it was, since GMS ignores it. The generator refuses to
write a fixture whose `kept` is empty or complete, because `[]` or the identity
would then pass.

**Why these transforms.** The plan asked for a (17, -11) shift, a 40° rotation,
a × 0.7 resize and 40° + × 0.7. On this scene `matchGMS` keeps **no** match for
any of them. The scene is hostile to GMS: ORB finds only 199 keypoints on its 25
small squares, and even under a pure shift only about a fifth of the
brute-force matches are geometrically correct before any injection (44 of 199
for (17, -11)), while GMS's threshold (6 × the square root of the mean
neighbourhood count) is designed for thousands of features. Whether a cell
clears it is then down to a handful of matches, so the outcome jumps with the
exact transform. Each transform was therefore moved to the **nearest value that
keeps a proper, non-empty subset**, searching integer shifts, 0.5° rotation
steps, 0.01 scale steps and (1°, 0.02) steps for the combination; for the shift,
(18, -11) and (17, -10) are equally near and the one keeping more matches won.
Two consequences, both acceptable for a bit-exactness pin:

- `gms-default` is a fair picture of GMS at work: 23 of its 27 kept matches lie
  within 4 px of the true translation, against 56 of all 199 matches.
- In the three other fixtures the kept matches are mostly coincidental
  clusters, not correct correspondences (ORB under rotation or scale finds
  very few correct matches here). They pin the arithmetic of the rotation
  and scale searches, not GMS's invariance, and only weakly, which is why the
  synthetic fixtures below exist; the property tests in
  `tests/properties/gms.test.ts` are the place for behaviour.

**`gms-boundaries`.** The ORB fixtures cannot tell a correct port from a
subtly wrong one where it matters most. Checked with a literal port of
`gms.cpp`: one that computes the grid in double instead of float, or breaks a
tie between two right cells another way, reproduces all four of them, and one
that rejects a score equal to the threshold fails only `gms-scale`.
`gms-boundaries` is built from hand-placed points (no image, so no
`meta.image`) in groups that flip under each of those readings: probes on cell
borders where only float arithmetic gives OpenCV's cell, two tied cells (listed
in both orders), and a cell whose score equals its threshold.
`gms_boundaries()` in the generator documents each group.

**Synthetic geometry.** The `gms-synth-*` and `gms-coverage` fixtures are
built from points, not from the scene, so there is no `meta.image`. Every
coordinate is a quarter pixel (exact in float32, and short in JSON) strictly
inside its image, where `gms.filter` and OpenCV agree. In a random case, view 1
is uniform random points (`numpy.random.default_rng`). A share of them are
inliers: the view-2 point is the view-1 point under the case's exact transform,
and the match is `(i, i)`; an inlier whose point leaves view 2 gets no match.
Every other point is an outlier, with a random view-2 point and a match to a
random `trainIdx`, so some train points are claimed by several matches
(many-to-one). Rotations are `cv2.getRotationMatrix2D` (counter-clockwise)
about the image centre.

**Zooms, not resizes.** GMS normalises each view by its own size, so resizing
the whole of view 2 is the identity to it: the first version of
`gms-synth-scale` (× 0.7 into 448 × 336) was won by the unscaled 20 × 20 pass.
Every scale case is therefore a **zoom about the image centre on the same
canvas** (`size2 = size1`): the content shrinks (zoom < 1) or grows (zoom > 1)
while the image keeps its size. A zoom by `z` maps a left cell onto a
`1/z`-times-finer right grid, so roughly zoom 2 → 10 × 10, √2 → 14 × 14,
1 → 20 × 20, 1/√2 → 28 × 28 and 1/2 → 40 × 40.

**`gms-synth-*`** (`--only gms-synthetic`). One dense fixture per search path,
so that the rotation and scale searches are pinned by hundreds of kept matches
rather than 6–8 coincidences: 800 points uniform in 640 × 480, `thresholdFactor`
6, and the generator refuses a fixture that keeps fewer than 100 matches, or
all of them.

| fixture | seed | inlier share | view 2 (640 × 480) | matches (inliers + outliers) | kept | winning pass |
| --- | --- | --- | --- | --- | --- | --- |
| `gms-synth-default` | 1341 | 60 % | translation (18, -11) | 780 (468 + 312) | 303 | the only one |
| `gms-synth-rotation` | 1342 | 80 % | rotation 40° | 679 (522 + 157) | 205 | pattern 2 |
| `gms-synth-scale` | 1343 | 60 % | zoom × 0.7 | 800 (483 + 317) | 248 | 28 × 28 grid |
| `gms-synth-rotation-scale` | 1344 | 80 % | rotation 40°, then zoom × √2 | 477 (301 + 176) | 137 | 10 × 10 grid, pattern 2 |

The plan asked for a 60 % share everywhere. With it, `gms-synth-rotation` keeps
46 matches and `gms-synth-rotation-scale` 47 (70 %: 107 and 99), because a 40°
rotation spreads the inliers of a left cell over several right cells, so fewer
cells clear the threshold. Both rotation paths therefore use 80 %. The zooms
were chosen so that a grid other than 20 × 20 wins: × 0.7 alone picks the
28 × 28 grid; after the 40° rotation, × 0.7 still lets 20 × 20 win, while × √2
picks 10 × 10 (137 against 85 for 14 × 14).

**`gms-coverage`** (`--only gms-coverage`). Even so, each fixture above returns
the mask of one winning pass, so most of the 40 (scale, rotation) passes would
be pinned only by "keeps no more than the winner". `gms-coverage` is a list of
33 small cases (72–199 matches each, 4668 in all, with their own flags and
`thresholdFactor`), built so that every branch of the search **wins** somewhere.
Its payload is an array of the usual GMS payloads, each with a `label`; the
test runs one `it` per case. Each case keeps at least one match and fewer than
all of them.

| cases | flags | view 2 | winning pass |
| --- | --- | --- | --- |
| 0–7 | rotation | 480 × 480, rotation 0°, 45°, …, 315° about the centre | patterns 1, 2, …, 8 in turn |
| 8–12 | scale | 640 × 480, zoom × 2, √2, 1, 1/√2, 1/2 | grids 10, 14, 20, 28, 40 in turn |
| 13, 14 | both | rotation 90° + zoom × 1/2 (480 × 480); rotation 180° + zoom × √2 (640 × 480) | 40 × 40 with pattern 3; 14 × 14 with pattern 5 |
| 15 | rotation | hand-placed tie: a 3 × 3 block of cells kept by pattern 1 and another, turned 90°, kept by pattern 3, 36 matches each | pattern 1 (the first to reach 36) |
| 16 | both | hand-placed tie: a block turned 90° (kept at scale 0 by pattern 3) and a block zoomed × 2 (kept by the 10 × 10 grid, pattern 1), 36 each | scale 0 with pattern 3, the first in scale-outer order |
| 17–32 | random | image size drawn from a list (here 200 × 600 to 641 × 479; five cases have a view 2 of another size), flags (all four combinations occur), `thresholdFactor` in [2, 8], rotation, zoom, inlier share in [0.3, 0.95] and region | 7 different passes, on the 10, 14, 20 and 28 grids |

The two ties pin how OpenCV picks among passes that keep the same number of
matches: it keeps the first, in scale-outer, rotation-inner order. A port that
replaces the best on `>=`, or that loops over the rotations outside the scales,
returns the other block. The hand-placed points sit in the top-left quarter of
their cells, so the four half-cell-shifted grid types see the same blocks.

The "winning pass" columns come from a literal, dense port of `gms.cpp` kept
out of the repository, which reports the count of every pass and reproduces
the four `gms-synth-*` fixtures, the 33 coverage cases and the four ORB
fixtures. With the coverage
fixture in place, each of these deliberately wrong ports fails at least one
fixture: two entries swapped in any one of the eight rotation patterns (one
or two swaps tried per pattern), any of the five right grid sizes moved by one
either way, `>=` for the best pass, and rotation-outer loop order.

### TEBLID fixtures

`teblid-p256.json` and `teblid-p512.json` ([#135](https://github.com/webarkit/jsfeatNext/issues/135))
are the ground truth that the TEBLID port must match **byte for byte**: no
tolerance, and no keypoint dropped from a test because it mismatches.

**Payload.** `payload.cases` is an array of
`{ name, image, scale_factor, keypoints, descriptors }`. `image` is `"scene"`
(the committed 640x480 image) or `"tiny"`, its top-left 24x24 crop
(`meta.params.tiny_sha256` is the sha256 of those 576 bytes). `keypoints` is a
list of `[x, y, size, angle_deg]`, every value float32-exact (written as
`numpy.float32(v).item()`), fed to jsfeatNext unchanged. `descriptors` holds one
lowercase hex string per keypoint, in the same order: 64 characters for p256 and
128 for p512, the bytes exactly as OpenCV returns them (bit `7 - (i mod 8)` of
byte `i / 8`). Both fixtures share the same keypoints. The generator asserts
that `compute` returned the same keypoints, unchanged and in order: BEBLID does
not filter, and the fixture would be wrong if it did. In Python `n_bits` is the
enum `cv2.xfeatures2d.TEBLID_SIZE_256_BITS` / `_512_BITS`; `meta.params.opencv_call`
keeps the 256/512 spelling.

**Coverage.** Each case is generated for `scale_factor` 1.0 (ORB) and 5.0 (FAST),
and the keypoints come from `numpy.random.default_rng(1351)` plus hand-placed
values:

| case | what it pins |
| --- | --- |
| `random-mixed` | random positions over the whole image, ORB-like and FAST-like sizes, a quarter of them upright (`-1`), so border and interior mix |
| `interior` | random positions inside the margin: the fast path only |
| `angles` | `-1`, `0`, `90`, `359.9`, `45`, `180`, `270`, `0.1`, `1`, `123.456` at a fixed, non-integer position |
| `sizes` | `31 * 1.2^l` for `l = 0..7`, `7` and `150`, each upright and at a random angle |
| `border-left/right/top/bottom` | the margin `b`, three sizes, angles `-1`, `90` and `37.5`: the last float32 value on one side of the margin, the one exactly at it and the next, so every border has a keypoint inside, at and beyond the margin |
| `corners` | the four pixel corners and two half-pixel ones, sizes `31` and `150`, angles `-1` and `213.7` |
| `tiny` | random keypoints on the 24x24 crop: nearly all on the clamped path, a few on the fast path |

In OpenCV 4.10.0 a keypoint is "in the border" when `x < b` or `x + b >= W` (same for
`y`, `H`), with `b = 32 * (scale_factor * size / 64) * 1.75f` in float32, that is
`0.875 * scale_factor * size`. The border cases are placed relative to that `b`, per
size and scale factor, with float32 neighbours (`numpy.nextafter`).

**Undefined behaviour is screened out.** For a keypoint not in the border,
OpenCV's fast path reads `integralPtr[(y +/- r) * (W + 1) + (x +/- r)]` with no
bounds check. For a small keypoint at the margin with a rotation, that index can fall
outside the integral buffer `[0, (W + 1) * (H + 1))`: undefined behaviour, which
cannot be a ground truth. The generator replicates `rectifyABWL` in float32 (each
operation rounded, in C++ order, `CV_ROUNDNUM(x) = int(x + 0.5f)`), takes the four
corners of the table range, (1, 1), (30, 1), (1, 30), (30, 30), widens them by the largest `boxRadius` (7 in both tables,
patch coordinates all in [1, 30]) and drops, **before calling OpenCV**, any keypoint
whose lowest or highest flat index leaves the buffer. A read that wraps to an adjacent
row stays inside the buffer and is defined, so it is kept. The screen is
**conservative** (a bounding box, not the exact learners): it can drop a keypoint
whose real reads all stay inside, never the reverse. It never removes a keypoint
because of a later mismatch. The count is recorded in `meta.params`
(`screened_out` of `screened_candidates`) and printed by the generator. Three of 684 candidates are screened out, in both fixtures: the `border-bottom` keypoints of size 7 at `scale_factor` 1.0, angle 37.5, y = 473.87494 and 473.87497 (the two values just inside the margin), and one random `tiny` keypoint at `scale_factor` 5.0 (17.198456, 16.034943, size 1.5, angle 46.39571). Every other border, angle and size keypoint is kept.

**Ground truth (T5).** The fixtures are generated on the platform PureCV
measures on, a Windows x86-64 machine (`meta.platform`, `meta.compiler`), with
the pinned wheel and IPP off. If a PureCV `cpp_ref` measurement and a fixture
ever disagree, `cpp_ref` wins and the disagreement is reported with its exact
input. A mismatch traced to FMA contraction or to the platform's `cos`/`sin` at a
float32 rounding boundary is reported, never absorbed by a tolerance.

### FREAK fixture

`freak.json` ([#80](https://github.com/webarkit/jsfeatNext/issues/80)) is the
ground truth that the FREAK port must match **byte for byte**: no tolerance, and
no keypoint dropped from a test because it mismatches. FREAK, unlike TEBLID,
**drops** keypoints too close to the border and writes the orientation back, so
the fixture records which inputs OpenCV kept.

**Payload.** `payload.cases` is an array of
`{ name, image, options, keypoints, kept, angles_deg, descriptors }`:

- `image` is `"scene"` (the committed 640x480 image), `"scene_rot90"`
  (`numpy.rot90(scene)`, counter-clockwise, 480 x 640; its sha256 is
  `meta.params.scene_rot90_sha256`) `"flat"` (96 x 96, every pixel 100), `"texture"` (320 x 240, procedural, below) or
  `"texture_rot90"` (`numpy.rot90(texture)`, 240 x 320).
- `options` is `{ orientation_normalized, scale_normalized, pattern_scale, n_octaves }`,
  the arguments of `FREAK_create`.
- `keypoints` is the input, `[x, y, size][]`, every value float32-exact (written as
  `numpy.float32(v).item()`), fed to jsfeatNext with angle `-1`. The generator
  asserts that no two inputs share `(x, y, size)`.
- `kept` lists the **input indices** OpenCV kept, in its output order. The generator
  recovers them by matching each returned keypoint's `(pt.x, pt.y, size)` to a unique
  input and exits non-zero if a match is not unique.
- `angles_deg` is one float32 angle per kept keypoint, the `angle` OpenCV wrote back
  (the input `-1` is left alone when `orientation_normalized` is false; OpenCV
  returns 0 in that case, which is what is recorded).
- `descriptors` is one lowercase hex string per kept keypoint, 128 characters, the 64
  bytes exactly as OpenCV returns them.

**Cases**, all with the same input list on `scene` (308 keypoints, seed 80):

| case | options that differ from the defaults | what it pins |
| --- | --- | --- |
| `default` | none (`true`, `true`, 22, 4) | everything |
| `no-orientation` | `orientation_normalized = false` | descriptors at orientation 0, angles untouched |
| `no-scale-normalization` | `scale_normalized = false` | the constant scale index `cvRound(1.0986122886681 * sizeCst)` |
| `pattern-scale-8` | `pattern_scale = 8` | the **bilinear** branch of `meanIntensity` (box radius < 0.5), whose OpenCV bug the port copies |
| `octaves-3`, `octaves-8` | `n_octaves = 3`, `8` | `sizeCst`, `scaleStep`, and scale 63 kept at 3 octaves |
| `rot90-default` | defaults, image `scene_rot90` | a rotated image and its rotated keypoints |
| `flat-default` | defaults, image `flat` | `atan2(0, 0)` on three interior keypoints of a constant image |
| `texture-default` | defaults, image `texture` | the orientation path: 308 keypoints, 168 distinct `thetaIdx`, 147 negative angles |
| `texture-pattern-scale-8` | `pattern_scale = 8`, image `texture` | the bilinear branch on a textured image |
| `texture-rot90-default` | defaults, image `texture_rot90` | the rotation payload (below) |

The input list has: 60 random `interior` keypoints (quarter-pixel positions, 150 px from
every border, sizes 5..30); 80 random `mixed` ones anywhere with sizes 5..150, at
non-integer positions; sizes 5 and 7 and then the middle of every scale bin 1..63, 112
and 150; five fractional offsets at one size; and the border and corner cases below.

**Border cases.** `patternSizes[s]` is computed in the generator in double, with
OpenCV's `buildPattern` expression (`meta.params.pattern_sizes_default` holds the 64 values
for the defaults). For the scale-0 size (7) and a scale-40 size (`meta.params.border_scale_sizes`)
there is a keypoint at `ps - 0.5`, exactly `ps` and `ps + 0.5` from each of the left and
top borders, and at `cols - ps - 0.5`, `cols - ps` and `cols - ps + 0.5` (`rows` for the
bottom): OpenCV drops `x <= ps`, `y <= ps`, `x >= cols - ps` and `y >= rows - ps`, so the
value exactly at the threshold is dropped on every side. Corners combine the three values
on each axis. The generator also replicates the scale-index and border tests for every
case and exits non-zero if its expected `kept` is not OpenCV's, so the thresholds are
asserted, not assumed.

**Rotation.** `payload.rotation = { case_a, case_b, pairs_index, pairs, max_hamming }`.
`case_a` is `texture-default` and `case_b` is `texture-rot90-default`, whose keypoints are
the 300 `interior` texture ones (quarter-pixel positions, 75 px from every border, sizes
5..22) mapped by `(x, y) -> (y, W - 1 - x)`, `W = 320`. (`rot90-default` on the scene is a
plain case.) `pairs` are `[row in case_a, row in
case_b]` pairs of **descriptor rows**, that is positions in each case's `kept` (not input
indices; `pairs_index` says so), and `max_hamming` is OpenCV's largest Hamming distance
between the two descriptors of a pair (333 of 512, median 61.5, 300 pairs). FREAK is not
exactly rotation invariant, so the test pins that the port reproduces OpenCV's number, not
that it is small.

**Coverage**, printed by the generator (it exits non-zero if any is zero): the bilinear
branch (kept keypoints at `pattern-scale-8` with a box radius < 0.5), scale 63 kept
(`pattern-scale-8` and `octaves-3`; at the defaults the pattern is wider than the image at
scale 63, so everything there is dropped), and a drop caused by each of the four sides
alone.

**The scene exercises orientation weakly, so there is a texture.** The committed scene is a
synthetic diagonal texture with 31 grey levels, and most patches have no net gradient: 125
of the 164 kept keypoints of `default` get angle 0. The `texture` image fixes that. It is
built with integer arithmetic only, so a TypeScript helper can rebuild it bit for bit
(`freak_texture()` in the generator; the fixture records `meta.params.images.texture`,
`{ width: 320, height: 240, seed: 8001, sha256 }`, the sha256 of the 76800 row-major bytes):

1. `h = ((x * 0x9E3779B1) mod 2^32) ^ ((y * 0x85EBCA6B) mod 2^32) ^ ((seed * 0xC2B2AE35) mod 2^32)`;
2. `h ^= h >>> 15; h = (h * 0x2C1B3C6D) mod 2^32; h ^= h >>> 12; h = (h * 0x297A2D39) mod 2^32; h ^= h >>> 15`
   (all unsigned 32 bit; in JS use `Math.imul` and `>>> 0`);
3. `n = h & 255`;
4. one 3x3 box blur, edges clamped (replicated): `b = floor((sum of the nine n + 4) / 9)`;
5. contrast stretch with `min` and `max` of `b` over the whole image:
   `v = floor((b - min) * 255 / (max - min))`.

The generator gates coverage at `texture-default` and exits non-zero otherwise: at least 100
distinct `thetaIdx` (from the returned angle, `round_half_even(float32(256 * angle) * (1 / 360.0))`
wrapped into [0, 256)) and at least 20 negative angles. It reaches 168 and 147.

## What is not pinned against OpenCV

Bit-exactness is only worth asserting where it is reachable. These are not:

- **The warps: `warp_affine` vs `cv2.warpAffine`** (verified against OpenCV's
  source; treat `warp_perspective` as the same class until shown otherwise).
  OpenCV uses fixed-point coordinates and a quantised 1024-entry weight table,
  resolves partial neighbourhoods through `borderInterpolate` where jsfeat
  discards the pixel, and saturates where a `Uint8Array` wraps. The results
  differ in the last bits even when both are correct. See
  [the analysis on #132](https://github.com/webarkit/jsfeatNext/issues/132#issuecomment-5331071822)
  and the `warp_affine` entry in [`docs/implementation-notes.md`](../../../docs/implementation-notes.md).
  `refWarpAffine` in `tests/reference/reference-impl.ts` stays the specification.
- **`resample` vs `cv2.resize`.** The same class of reason: the `U8` fast path
  truncates in four separate places (the `resample` entry in
  [`docs/implementation-notes.md`](../../../docs/implementation-notes.md)), so it
  has not been checked and should not be assumed pinnable.

When bit-exactness proves unreachable, the divergence is registered, with its
reason and tracking issue, in [`tests/divergences.test.ts`](../../divergences.test.ts)
(the registry introduced by
[#102](https://github.com/webarkit/jsfeatNext/issues/102)). Deliberate
divergences from OpenCV go there too, next to the jsfeat ones.

## Adding a fixture

1. Add a function to `scripts/gen-opencv-fixtures.py` that returns
   `{fixture name: envelope}` (use `envelope(...)`, which fills `meta`), and one
   entry in `GENERATORS`.
2. Run `--only <your key>`, commit the JSON.
3. Read it back in a test with `loadFixture`.
