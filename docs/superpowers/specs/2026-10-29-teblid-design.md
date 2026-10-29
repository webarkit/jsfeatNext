# TEBLID descriptor (#135) — design

**Date:** 2026-10-29
**Status:** draft, for the maintainer's approval
**Issue:** [#135](https://github.com/webarkit/jsfeatNext/issues/135) · **Milestone:** [1.2.0](https://github.com/webarkit/jsfeatNext/milestone/5)
**Builds on:** [`docs/features2d-expansion-plan.md`](../../features2d-expansion-plan.md) (D5, D6/D6a, D7, D10) · [milestone 1.2.0 plan](../plans/2026-10-27-milestone-1.2.0.md), Task 6
**Reference:** OpenCV 4.10.0, `opencv_contrib/modules/xfeatures2d/src/beblid.cpp` (`TEBLID_Impl` over `BEBLID_Impl<ABWLParamsFloatTh>`), with the tables in `teblid.p256.hpp` and `teblid.p512.hpp`

---

## 1. Intent

Add `jsfeatNext.teblid`: the TEBLID binary descriptor (Suárez, Buenaposada, Baumela, RA-L 2021), a learned descriptor that outperforms ORB/rBRIEF at a similar cost. It is the descriptor the `CvBackend` contract (#128, #232) was designed to let callers select.

**The deciding requirement: full cross-backend compatibility.** A target trained on one webarkit backend must work on the other. jsfeatNext and the PureCV-based backend must therefore produce **identical TEBLID bits** for the same image and keypoints. The only guarantee that holds across backends is for each to be **bit-exact with OpenCV 4.10.0**, which is the existing chain: PureCV validates against jsfeatNext, and jsfeatNext against OpenCV. Every design choice below follows from that.

## 2. Goals, non-goals, anti-goals

**Goals**

- `teblid.describe(...)` is bit-exact with `cv2.xfeatures2d.TEBLID_create(scale_factor, n_bits).compute(...)` (OpenCV 4.10.0), at **both 256 and 512 bits**, given the same grayscale image and the same keypoints (`x`, `y`, `size`, `angle`).
- Keypoints anywhere in the image, the four borders included, produce OpenCV's bits. OpenCV clips the boxes there and does not reject the keypoint, so a faithful port also satisfies #135's "no silent contamination" criterion (the #110 failure mode).
- The output is accepted by `bfmatcher` unchanged: 32 or 64 bytes per row, `U8C1`.
- Tree-shakeable: an application that imports `{ imgproc }` ships none of TEBLID or its tables (#137).

**Non-goals**

- BEBLID (D6), and a generic engine over the weak-learner type (D6a).
- Wiring into the `CvBackend` adapter: that is #232, in webarkit/webarkit.
- Any change to the `CvBackend` contract or to the `.wnft` target format.
- Teaching the detectors (`fast_corners`, `yape`, `yape06`) to fill `keypoint_t.size`.
- Colour input: OpenCV converts BGR/BGRA to gray inside `compute`; jsfeatNext takes a `U8C1` image, as `orb.describe` does.

**Anti-goals** (failure even if the code "works")

- Bits that differ from OpenCV on any input in the fixture set, however close the matching quality.
- A silent result for a keypoint TEBLID cannot describe (no size): it throws instead.
- A shared-pool imbalance, or new `any` (#85).

## 3. Decisions taken with the maintainer (2026-10-29)

| # | Decision | Alternatives rejected | Why |
| --- | --- | --- | --- |
| T1 | **Per-keypoint size, carried by a new `keypoint_t.size` field** (6th constructor argument, default `0`) | a per-call size; a separate `sizes` array argument to `describe` | OpenCV describes on the full-resolution image with each keypoint's own `size` (`size = 31·scale` for ORB). A per-call size forces per-level description, whose bits differ from OpenCV's. A parallel array is easy to misalign. `keypoint_t.size` mirrors `cv::KeyPoint`, which PureCV mirrors too |
| T2 | **Tables as decimal array literals**, in the order of OpenCV's `.hpp`, converted once at module load into an `Int8Array` (`x1, y1, x2, y2, boxRadius`) and a `Float32Array` (`th`) | base64-packed tables (D7) | Diffable line by line against OpenCV; the `Float32Array` conversion turns `21.65` into exactly C++'s `21.65f`. Measured size (~8 KB p256, ~16 KB p512 of source) makes base64's saving immaterial, and gzipped it is about a wash (D7's own caveat). **Revises D7** |
| T3 | **One PR with both widths**, 256 and 512 | p256 first, p512 after a bundle measurement (D10) | D10's split existed to catch a bad size estimate (100–130 KB extrapolated). The real size is known and small, and with #137 only `teblid` importers pay it. **Revises D10** |
| T4 | **The `CvBackend` contract stays unchanged** | adding `size` to the contract's `Keypoint` | Size is a function of `level` and the backend's pyramid step, which ADR-0001 already records as a contract gap ("`Keypoint.level` is ambiguous across backends", proposal: declare the step). A `size` field would duplicate it, and ripple into every backend and the `.wnft` format |
| T5 | **Ground truth is PureCV's `cpp_ref` measurement environment.** PureCV is not changed; jsfeatNext aligns to it | treating jsfeatNext's own `.venv` as authoritative and letting PureCV align | PureCV's reference procedures are tested and approved (maintainer, 2026-10-29). `cpp_ref` measures with the same pinned wheel (`opencv-contrib-python==4.10.0.84`, IPP off), so the binary is the same; what can differ is the platform's compiler and maths library, which TEBLID's float32 path is the first fixture to be sensitive to (FMA contraction, `cos`/`sin`). See §6, "Ground truth" |

D7 and D10 are revised by T2 and T3: the PR updates the decision log in `docs/features2d-expansion-plan.md` and comments on #135.

## 4. Public API

```ts
// src/keypoint_t/keypoint_t.ts — additive; every existing 5-argument call is unchanged
constructor(x = 0, y = 0, score = 0, level = 0, angle = -1.0, size = 0)
public size: number; // diameter of the described neighbourhood, in pixels of the image passed to describe()

// src/teblid/teblid.ts — singleton jsfeatNext.teblid, and named export { teblid }
describe(
    src: matrix_t,               // U8C1 grayscale, full resolution
    corners: keypoint_t[],       // reads x, y, size, angle
    count: number,               // describes corners[0 .. count-1]
    descriptors: matrix_t,       // resized to (bits/8) × count, U8C1, like orb.describe
    options?: { bits?: 256 | 512; scale_factor?: number },
): void
```

- `bits` defaults to **256**, as `TEBLID::create` does. Any other value throws.
- `scale_factor` defaults to **1.0**, *the builder's call*: OpenCV's `create` has no default, and its documentation recommends 1.00 for ORB keypoints, 5.00 for FAST/AGAST/AKAZE/BRISK, 6.25 for KAZE/SURF and 6.75 for SIFT. jsfeatNext's own pipeline (FAST + `orb.ic_angle`, ORB-style patch) matches the ORB case. The TSDoc reproduces OpenCV's table.
- `count === 0` leaves `descriptors` resized to 0 rows and returns.
- **A keypoint with `size <= 0` throws** a `RangeError` naming its index (anti-goal: no silent result). That is the state of every keypoint the current detectors produce, so the TSDoc shows the caller filling it, e.g. `kp.size = 31 * scaleStep ** level` with coordinates in level-0 pixels.
- `keypoint_t` gains `size` only. jsfeat's `keypoint_t` has five fields, so this is a documented, additive divergence; the parity tests on the struct are updated to say so.

## 5. Algorithm, and what bit-exactness takes

A port of `BEBLID_Impl<ABWLParamsFloatTh>::compute` / `computeBoxDiffsDescriptor`, written concretely for TEBLID (D6a):

1. Integral image of `src`: `(w+1)×(h+1)` `Int32`, borrowed from the shared pool and returned in a `finally`. `compute_integral_image` already has OpenCV's layout (zero first row and column since #131).
2. For each keypoint: `rectifyABWL` maps the table's 32×32-patch coordinates to the image, by an affine transform built from `x`, `y`, `size`, `angle` and `scale_factor`.
3. If `isKeypointInTheBorder` (margin `1.75 ×` the scaled half-patch): the **clamped path**, `computeABWLResponse`, which clips both boxes to the frame and compares the difference of the two box means with `th`.
   Otherwise: the **fast path**, an integer difference of box sums compared with `th · side²`.
4. Bit `7 − (i mod 8)` of byte `⌊i/8⌋` is `1` when the response is `≤ th`: MSB first, as OpenCV.

Bit-exactness depends on reproducing OpenCV's **float32** arithmetic, which a plain JS port in float64 does not. The builder must:

- Evaluate every `float` expression of `rectifyABWL`, `isKeypointInTheBorder` and `computeABWLResponse` with `Math.fround` after **each** operation, in C++'s evaluation order. The x86-64 generic path has no FMA contraction; the fixtures will tell if that assumption is wrong.
- Reproduce `CV_ROUNDNUM(x) = (int)(x + 0.5f)`: float32 add, then truncation toward zero (`| 0`), **not** `Math.round`, which differs for negative coordinates.
- Fast path: `areaResponseFun <= th * (side * side)`. That is an `int` against a `float` product: compare `Math.fround(area)` with `Math.fround(th * side²)`. The int-to-float conversion rounds above 2²⁴, which large keypoints can reach.
- Clamped path: `average = float(sum) / area` in float32, with `average1 − average2` rounded to float32.
- `x`, `y` and `size` are `float` in `cv::KeyPoint`: read them through `Math.fround`.

**Angles.** jsfeatNext angles are radians, and `-1` means "not oriented" (the `keypoint_t` default). OpenCV angles are degrees in `[0, 360)`, and `-1` (or any negative value) means upright. The port:

- treats `angle === -1` as upright, OpenCV's `m00 = s`… branch, exactly;
- otherwise uses `cosine = Math.fround(Math.cos(angle))` and `sine = Math.fround(Math.sin(angle))`.

OpenCV computes `float(cos(deg_f32 * 0.017453292519943295))` in double. So a caller holding OpenCV degrees, as the parity test does, passes `Math.fround(deg) * 0.017453292519943295`, and gets the same double and the same `cos`. A negative radian angle other than `-1` is a genuine rotation in jsfeatNext (`ic_angle` returns `(−π, π]`), where OpenCV would treat a negative angle as upright. That divergence is deliberate and documented; it is unreachable from OpenCV inputs, whose angles are never negative except `-1`.

## 6. Ground truth: fixtures

### Ground truth (T5)

- **One environment.** PureCV's `cpp_ref/requirements.txt` and jsfeatNext's `scripts/requirements-fixtures.txt` pin the same packages, line for line: `opencv-contrib-python==4.10.0.84` and `numpy==2.4.6`, verified on 2026-10-29. On one machine, jsfeatNext's `.venv` therefore *is* `cpp_ref`'s measurement environment, and a second virtualenv would produce the same bytes by construction (maintainer, 2026-10-29). What can differ between the two repositories' measurements is the **platform**. The fixtures are generated on the platform PureCV measures on: this Windows x86-64 machine, whose wheel is built with MSVC.
- **Keep the pins together.** The two files must stay identical. A bump is a reference-bump PR in both repositories, as AGENTS.md ("OpenCV reference version") and PureCV's `cpp_ref/AGENTS.md` already require.
- **If PureCV's measurements and these fixtures ever disagree, `cpp_ref` wins.** jsfeatNext is made to match it, and the disagreement is reported to the maintainer with the exact input. The likely cause is a different platform, which `meta.platform` shows.
- **Every fixture records where it was generated.** `meta.platform` holds the OS and architecture (`platform.system()`, `platform.machine()`), and `meta.compiler` holds the `C++ Compiler:` line of `getBuildInformation()`. This applies to all fixture groups, from this PR on; regenerating the existing ones changes `meta` only, as in #245. `pinned-version.test.ts` requires both fields to be present.
- **No tolerance.** A parity mismatch is never absorbed by loosening the test or by dropping the input from the fixture. If one is traced to FMA contraction or to the platform's `cos`/`sin` at a float32 rounding boundary, it is reported to the maintainer with the case, who decides.

### The fixtures

`scripts/gen-opencv-fixtures.py` gains a `teblid` group (`--only teblid`), with the pinned wheel and IPP off. The #245 guard and `meta.opencv_wheel` apply automatically. Fixtures: `teblid-p256.json` and `teblid-p512.json`.

- **Image:** the committed `scene-640x480.pgm`.
- **Keypoints:** a fixed, seeded list, written in the payload as float32 values (`x, y, size, angle_deg`), so that a mismatch indicts the descriptor and never the detector. It covers:
  - the interior;
  - each of the four borders, inside, at and beyond the `1.75×` margin;
  - the corners;
  - ORB-like sizes `31·1.2^l` for `l = 0..7`, FAST's `7` and a large size (`> 100`) to reach the int-to-float rounding;
  - angles `-1`, `0`, `90`, `359.9` and random values;
  - non-integer positions.
- **Scale factors:** `1.0` (ORB) and `5.0` (FAST), in separate cases.
- **Payload:** for each case, the keypoints and one hex string per descriptor row. The generator asserts that `compute` returned as many keypoints as it was given: BEBLID does not filter keypoints, and the fixture would be wrong if it did.

## 7. Tests (acceptance)

- **Parity:** every descriptor byte equals the fixture, at both widths and both scale factors.
- **Tables:** the first and last entry of each table equal OpenCV's literal values, the `th` values as exact float32, and the lengths are 256 and 512.
- **Properties:**
  - `size <= 0` throws, naming the index;
  - `count = 0`;
  - angle `-1` gives the upright result, and `0` gives the same bits;
  - a large rotation changes the bits;
  - the descriptor depends only on `corners[0..count)`;
  - the shared pool stays balanced, including when `describe` throws mid-way.
- **bfmatcher:** a round trip at 32 and 64 bytes per row: a descriptor set matched against itself gives distance 0, identity pairs.
- **Surface:**
  - `teblid` in the API-shape test and in the named-exports identity test;
  - `keypoint_t`'s `size` noted as a divergence in the struct parity test;
  - the bundle test adds a TEBLID-table marker that a `{ imgproc }` bundle must not contain.
- **Bench:** `bench/teblid.bench.ts`, an intra-library group (jsfeat has no TEBLID): TEBLID p256 and p512 against `orb.describe` on the same keypoints, recorded in `bench/README.md`.

## 8. Files

| Path | Change |
| --- | --- |
| `src/teblid/teblid.ts` | new: the module (class extending `core`) |
| `src/teblid/teblid_tables.ts` | new: the two tables, typed arrays built at load, `/* @__PURE__ */` |
| `src/keypoint_t/keypoint_t.ts` | `size` field |
| `src/singletons.ts`, `src/jsfeatNext.ts`, `src/index.ts`, `src/core/core.ts` | the singleton, the namespace member, the named export, the static type |
| `.agents/skills/license-header-adder/resources/ATTRIBUTION-opencv-teblid.txt`, `scripts/check-license-headers.mjs` | the opencv-family header variant for `src/teblid/` (Apache-2.0, `beblid.cpp` and the tables, citing the RA-L 2021 paper) |
| `scripts/gen-opencv-fixtures.py`, `tests/fixtures/opencv/teblid-p{256,512}.json`, `tests/fixtures/opencv/README.md`, `tests/fixtures/opencv/pinned-version.test.ts`, every existing fixture (`meta` only) | fixtures, `meta.platform` / `meta.compiler` (T5) |
| `tests/parity/teblid.test.ts`, `tests/properties/teblid.test.ts`, updated surface tests | tests |
| `bench/teblid.bench.ts`, `bench/README.md` | bench |
| `README.md`, `AGENTS.md`, `docs/features2d-expansion-plan.md` | module list, D7/D10 revisions |

The module TSDoc cites the upstream at `https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/beblid.cpp#L…`, as AGENTS.md requires.

## 9. Constraints

PRs target `dev`. Conventional commits. `npm test`, `npm run typecheck`, Prettier and the licence check must be green. No new `any`. Shared-pool balance. OpenCV 4.10.0 only. Tree-shakeable module-level code (`/* @__PURE__ */` on every module-level `new`, per AGENTS.md).

## 10. For webarkit #232 (recorded here, not done here)

To keep the cross-backend compatibility of §1, the adapter must describe TEBLID on the **full-resolution** image, with `size = 31 · step^level` and coordinates in level-0 pixels. That is unlike its ORB path, which describes per level. Re-describing stored keypoints on another backend also needs the pyramid step declared (ADR-0001, contract gaps). The bump of `@webarkit/jsfeat-next` from `^0.17.0` (webarkit/webarkit#94) is a prerequisite.

## 11. Left to the builder

- Internal structure: helper names, whether the two paths share code, scratch storage for the rectified boxes. Prefer a per-call scratch from the shared pool over allocation.
- The exact keypoint list in the fixture, within §6's coverage.
- Error message wording.
