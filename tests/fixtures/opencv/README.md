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

From the repository root. Python 3 is all that is needed; the virtualenv lives
in `.venv/`, which is gitignored and never committed.

**Linux / macOS (bash)**

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r scripts/requirements-fixtures.txt
.venv/bin/python scripts/gen-opencv-fixtures.py            # all fixtures
.venv/bin/python scripts/gen-opencv-fixtures.py --only integral
```

**Windows (PowerShell)**

```powershell
python -m venv .venv
.venv\Scripts\python -m pip install -r scripts\requirements-fixtures.txt
.venv\Scripts\python scripts\gen-opencv-fixtures.py        # all fixtures
.venv\Scripts\python scripts\gen-opencv-fixtures.py --only integral
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

`integral` is the first fixture on purpose. It is pure integer arithmetic that
must match bit-for-bit, so a mismatch indicts the harness (image dump, encoding,
loader) rather than the algorithm; only once it is green can a fixture for
something new be trusted. The tilted sum is not pinned.

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

The policy for when bit-exactness proves unreachable is tracked in
[#102](https://github.com/webarkit/jsfeatNext/issues/102).

## Adding a fixture

1. Add a function to `scripts/gen-opencv-fixtures.py` that returns
   `{fixture name: envelope}` (use `envelope(...)`, which fills `meta`), and one
   entry in `GENERATORS`.
2. Run `--only <your key>`, commit the JSON.
3. Read it back in a test with `loadFixture`.
