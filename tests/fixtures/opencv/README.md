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

The generator reads that pin and **refuses to run** (non-zero exit, a message
naming both versions) unless `cv2.__version__` matches it, so a wrong version is
an explicit error instead of silent drift between fixtures generated in
different sessions. The version that produced each fixture is also written into
its `meta.opencv_version`.

## Regenerating

From the repository root. Python 3.12 or newer is all that is needed (the pinned
`numpy==2.5.4` declares `Requires-Python: >=3.12`); the virtualenv lives
in `.venv/`, which is gitignored and never committed.

**Linux / macOS (bash)**

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r scripts/requirements-fixtures.txt
.venv/bin/python scripts/gen-opencv-fixtures.py            # all fixtures
.venv/bin/python scripts/gen-opencv-fixtures.py --only integral
.venv/bin/python scripts/gen-opencv-fixtures.py --only gms # the five gms-*.json
```

**Windows (PowerShell)**

```powershell
python -m venv .venv
.venv\Scripts\python -m pip install -r scripts\requirements-fixtures.txt
.venv\Scripts\python scripts\gen-opencv-fixtures.py        # all fixtures
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only integral
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only gms # the five gms-*.json
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
indented by one space so the diffs read well. Every file is an envelope: a
common `meta` block plus an algorithm-specific `payload`.

```jsonc
{
 "meta": {
  "opencv_version": "A.B.C",         // cv2.__version__ of the run that produced it
  "algorithm": "integral",           // which algorithm it pins
  "params": { "sdepth": "CV_32S" },  // the parameters of that run
  "image": "scene-640x480.pgm",      // present only when an image is involved
  "sha256": "…"                      // sha256 of that file's bytes; required with "image"
 },
 "payload": { /* algorithm-specific */ }
}
```

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
  and scale searches, not GMS's invariance; the property test in
  `tests/properties/gms.test.ts` is the place for behaviour.

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
