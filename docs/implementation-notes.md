# Implementation notes: jsfeat conventions, quirks and known defects

Behaviour of the algorithms in `src/` that is **not obvious from the code**, and
that cost real investigation to establish. Written up so the next person does
not have to rediscover it.

Everything here was measured, not assumed. Where a claim came from a specific
experiment, the experiment is described so it can be repeated or challenged.
Where a claim was later found wrong, the correction is kept rather than quietly
edited out.

Most of this surfaced during the testing work for
[#87](https://github.com/webarkit/jsfeatNext/issues/87).

---

## 1. Border conventions

### `sobel_derivatives` / `scharr_derivatives` — asymmetric

The single most surprising convention in the library.

| direction | behaviour | equivalent |
| --- | --- | --- |
| vertical | **reflect**: `y = -1` reads row 1, `y = h` reads row `h-2` | OpenCV `BORDER_REFLECT_101` |
| horizontal | **replicate**: `x = -1` reads column 0 | OpenCV `BORDER_REPLICATE` |

From `imgproc.ts`:

```ts
srow0 = ((y > 0 ? y - 1 : 1) * w) | 0;        // vertical: reflect
srow2 = ((y < h - 1 ? y + 1 : h - 2) * w) | 0;
...
trow0[0] = trow0[1];                          // horizontal: replicate
trow0[w + 1] = trow0[w];
```

**Why it matters:** assuming replication in *both* directions produces a
reference implementation that matches the interior **exactly** (352/352 pixels
on a 24×18 image) and disagrees on almost every border pixel (35/80). That
failure mode is easy to misread as "the kernel is wrong" when the kernel is
fine.

Pinned by `tests/reference/imgproc.test.ts` → "pins the asymmetric border
convention specifically".

### `box_blur_gray` — replicate

Plain edge replication in both directions, and a naive clamped-window mean
matches it bit-for-bit (subject to the defects in §3).

---

## 2. Fixed-point and rounding

### `get_gaussian_kernel` — size 7 is not the binomial row

For odd `size <= 7` with `sigma <= 0`, jsfeat uses fixed tables. Sizes 3 and 5
are the normalised rows of Pascal's triangle; **size 7 is not**.

| size | jsfeat kernel (×64) | Pascal row (×64) |
| --- | --- | --- |
| 3 | `[16, 32, 16]` | same |
| 5 | `[4, 16, 24, 16, 4]` | same |
| **7** | **`[2, 7, 14, 18, 14, 7, 2]`** | `[1, 6, 15, 20, 15, 6, 1]` |

Both sum to 64, so jsfeat's is a valid normalised kernel — just a flatter one,
with a lower peak and heavier tails. Worth knowing before anyone "corrects" it
to the binomial row and silently changes every 7-tap blur in the library.

### `get_gaussian_kernel` — the `U8` integer path

Weights are scaled to sum to 256. The sum is **not** always exactly 256: each
of the `size` taps rounds independently, so `|sum - 256| <= size/2`. Worst
observed across a wide size/sigma sweep is 3. It **is** exactly 256 on the
fixed binomial path, where the weights are exact binary fractions.

### `grayscale` — BT.601 in 14-bit fixed point

`Y = (R*4899 + G*9617 + B*1868 + 8192) >> 14`, which approximates the
real-valued ITU-R BT.601 coefficients `0.299 / 0.587 / 0.114`. Measured
agreement with the real-valued standard: **within 1 grey level**.

### `gaussian_blur` — quantises to 8 bits *between* passes

The separable blur is not "accumulate both passes, then scale". On `U8` input
it:

1. uses the **integer** kernel (weights summing to ~256), not the float one;
2. ends each pass with `Math.min(sum >> 8, 255)` — an arithmetic shift, so it
   **truncates**, with no `+128` rounding bias;
3. writes the horizontal result **back into the U8 destination**, so precision
   is quantised to 8 bits before the vertical pass reads it.

Point 3 is the one that catches people out. Accumulating both passes at full
width and shifting once at the end produces a slightly *better* answer that is
1–2 grey levels away from what the library actually returns. Reproducing all
three details gives bit-exact agreement across every shape and kernel size
tested.

Borders **replicate** in both directions here — unlike the derivative filters
in §1.

### `resample` — the `U8` fast path truncates in four places

`_resample_u8` computes an area average in 8.8 fixed point, and is chosen when
both matrices are `U8` and the area ratio is under 256. It truncates at four
separate points, **all biased downward**:

| truncation | what it quantises |
| --- | --- |
| `alpha = ((sx1 - fsx1) * 0x100) \| 0` | per-column coverage weight |
| `beta = (... * 256) \| 0` | per-row coverage weight |
| `inv_scale_256 = (scale_x * scale_y * 0x10000) \| 0` | the normaliser |
| store into the `U8` destination | the final value |

Measured against an exact area average on 8-bit noise:

| ratio | result |
| --- | --- |
| **integer** (e.g. 24×18 → 12×9, 32×24 → 8×6) | **exactly `floor(exact)`, every pixel** |
| **fractional** (e.g. 23×17 → 9×7) | up to **1.379 low**, never meaningfully high |
| float path (`F32` matrices) | agrees to ~1e-5 |

Two corrections to what was written here earlier, both from measuring on real
data rather than on a constant image:

- the drift is **~1.4, not ~1**. The old figure came from a uniform-image test
  (77 → 76), which only ever exercises one value and understates it.
- "the float path is exact" was too strong — it agrees to float32 precision
  (~1e-5), which is the right claim and still makes the point: the drift is
  quantisation in the `U8` fast path, not bad resampling maths.

The integer-ratio result is the useful one for testing: it is an exact
equality, so it needs no tolerance at all.

Bit-identical to original jsfeat, so inherited, not a regression.

---

## 3. Known defects

### `box_blur_gray` below kernel size — [#114](https://github.com/webarkit/jsfeatNext/issues/114)

A blur is an average, so a uniform image must round-trip at any size. It does
not when the image is smaller than the kernel.

**Reliable only when `cols >= 2r+1` AND `rows >= 2r+1`.** Measured over a 16×16
grid of dimensions for radii 1–3: **0 failures** inside that region, scattered
failures outside it.

A first attempt at the rule — `min(cols, rows) < 2r+1` — was **wrong**, derived
from square images only. Counter-example at radius 1: `2×50` is correct while
`2×4` is not, though both have `cols = 2`.

Below the reliable region the behaviour is **erratic rather than uniformly
wrong**: some dimension pairs land on the right value by coincidence. That is
worse than consistent failure, because a caller can validate on a 2×50 ROI, see
the right answer, and ship code that breaks on 2×4.

The wrong values are also **not deterministic** — the window reads outside the
image, so the result depends on surrounding library state. The identical 1×1
radius-1 call returns 85 in isolation and 142 when run after other tests. This
is why the failing case is pinned with `it.fails` rather than by asserting
values.

### `box_blur_gray` radius 3 — float truncation

Independent of image size. `scale = 1.0 / (windowSize * windowSize)`, and
`128 * 49 * (1/49) = 127.999999999999986`, which truncates to 127. Only radius
3 hits this for radii 1–8; the other reciprocals happen to round up.

### `orb.describe` near the image edge — [#110](https://github.com/webarkit/jsfeatNext/issues/110)

`rectify_patch` warps with `warp_affine(src, dst, H, 128)`. Patch pixels
sampled outside the image get exactly **128** whatever the image brightness, so
descriptors of edge-adjacent keypoints are partly determined by that constant.

**Required margin: 20px.** Not the intuitive 16 (half the 32px patch) — only
the 256 sampled pairs are read, and `bit_pattern_31`'s largest coordinate
component is 13, so the furthest sample sits `13√2 = 18.39px` from the
keypoint. Rotation preserves that radius, so 18.39 + 1 for the bilinear
neighbour ≈ 20.

Measured: border 8 → 2 differing bits of 8960 under a +20 brightness lift;
border ≥ 16 → 0. Sweeping one keypoint over 2000 angles puts the empirical
onset at distance ≤ 16, clean from 17 — so 20 carries slack.

### `optical_flow_lk` — `curr_xy` is documented as seedable but ignored — [#111](https://github.com/webarkit/jsfeatNext/issues/111)

The TSDoc says "seed it with a prediction or a copy of `prev_xy`". The
implementation never reads it: at the coarsest level it does
`next_x = prev_x`, and every later level chains from the previous level's own
result.

Verified with five seeds — zeros, a copy of `prev_xy`, `+1`, `+50`, and
`-9999` everywhere — all producing **bit-identical** output. Identical code
path in original jsfeat, so the docstring is what is out of step.

### `warp_affine` extrapolates just outside the top-left edge

The bounds check is `ixs >= 0 && iys >= 0 && ...` where `ixs = xs | 0`, and
`| 0` truncates **toward zero**. So a source coordinate of `-0.5` yields
`ixs = 0`, passes the check, and is treated as inside the image. The
interpolation weight `a = xs - ixs` is then **negative**, and the "bilinear
interpolation" becomes an extrapolation.

The result can leave `[0, 255]`, and because the destination is a `Uint8Array`
it **wraps modulo 256** rather than clamping. On a 23×17 test warp with a
`(-0.5, -0.5)` translation: 13 pixels sampled with a negative weight, 4 of them
out of range and wrapped.

Practical effect: speckle along the top and left edges of a warped image, where
`fill_value` was probably intended. Coordinates below `-1` are unaffected —
they truncate to `-1` and fail the check correctly.

Identical bounds check in original jsfeat, so inherited rather than introduced
here. Characterized in `tests/reference/imgproc.test.ts`; tracked as
[#119](https://github.com/webarkit/jsfeatNext/issues/119).

### `invert_3x3` on a singular matrix — [#120](https://github.com/webarkit/jsfeatNext/issues/120)

Divides by the determinant without checking it, so a singular input returns
`NaN` / `±Infinity` silently — no return value, no exception, no flag.
Byte-identical in original jsfeat, so inherited.

Matters because `NaN` propagates: a degenerate homography or collapsed affine
fit poisons whatever consumes the inverse, surfacing far from the cause.
Contrast `linalg.lu_solve`, which returns 0 on a singular system. Same family
as [#102](https://github.com/webarkit/jsfeatNext/issues/102).

### `svd_invert` on non-square input — [#102](https://github.com/webarkit/jsfeatNext/issues/102)

jsfeatNext **throws**; original jsfeat returned a wrong pseudo-inverse
silently. This is an intentional divergence, registered in
`tests/divergences.test.ts`.

---

## 4. Behaviour that looks wrong but is not

### `warp_affine` / `warp_perspective` under the identity transform

Does **not** reproduce the input exactly: the interior is bit-exact but the
outermost 1-pixel ring is filled with `fill_value`, because bilinear sampling
treats it as out of bounds.

### `equalize_histogram` of a uniform image returns 255

Every pixel shares one histogram bin, so the cumulative histogram saturates and
the whole image maps to 255 regardless of the input level. Constant in,
constant out — just not the *same* constant.

### `optical_flow_lk` and large displacements

The recoverable displacement is set by window size and pyramid depth, not by
correctness. On a 96×72 scene at 2 levels with a 9px window, shifts up to ~3px
come back to ~0.01px while a 5px shift does not converge at all. Widen either
knob and the ceiling moves: on 320×240, 2 levels with a 15px window recovers
5px for every point, and 4 levels with a 9px window recovers 10px for 28 of 29
points. Textbook pyramidal Lucas–Kanade.

### `point_t` is not on the namespace

`jsfeatNext.point_t` is undefined — but so is `jsfeat.point_t`. Four modules
import it purely as a type annotation and nothing ever constructs one. Callers
pass `keypoint_t`, which is structurally compatible. The absence is parity, not
a gap.

---

## 5. Data structures

### `matrix_t` / `data_t` allocation

Byte size is rounded **up to a multiple of 8** so the `f64` view is valid. Two
consequences that bite in tests:

- `matrix_t(1, 1, U8C1)` allocates 8 bytes, not 1, so `data.fill(v)` writes 7
  bytes of padding as well as the pixel. Always slice to the logical `w*h`.
- `resize` reuses the existing buffer when the new size fits and reallocates
  only when it does not, so buffer identity is not stable across a resize.

All four views (`u8`, `i32`, `f32`, `f64`) alias the same `ArrayBuffer`.

### `median` returns the lower middle

`math.median(array, low, high)` returns `array[(low + high) >> 1]` after
quickselect — the **lower** middle element for an even-length range, not the
average of the two middles. The array is partially reordered in place.

### The shared buffer pool

30 nodes, allocated once. `get_buffer(n)` pops a node and **resizes it if `n`
exceeds its current size**, so a single large request permanently grows that
node. Every borrow must be balanced by a `put_buffer`.

`tests/setup/pool-balance.ts` enforces this after every test in the suite.
Nothing in the library leaks today.

---

## 6. Notes on testing this library

Recorded because they shaped the test suite and would otherwise be relearned.

**Parity cannot catch inherited bugs.** The oracle in `tests/vendor/` *is*
original jsfeat, so any defect present in both is invisible to it. Both
`box_blur_gray` defects are bit-identical in jsfeat — that is precisely why
they survived a green parity suite.

**Uniform-image invariants are cheap, broad and blind in one specific way.**
They catch a wide range of indexing and border mistakes at no cost in
tolerance. But an off-by-one injected into `box_blur_gray`'s second-pass loop
bound was **not** caught by any of them, because it changes *which* loop phase
computes a pixel without changing the value for a uniform image. Only a
reference comparison on non-uniform input catches that class.

**A naive reference can be bit-exact.** Measured on 24×18 seeded noise:
`grayscale` 432/432, `box_blur` exact at radii 1 and 2, sobel/scharr exact once
the border convention above is applied. So these tests pin exact values and
need no tolerance fudging — which is what makes them worth having.

**One image shape is not enough, and a tolerance can hide the very bug you are
hunting.** The first version of the `box_blur` ground-truth test used a single
23×17 image, with exact comparison at radii 1, 2 and 4 and a ±1 tolerance at
radius 3 to accommodate the truncation defect. Re-running the off-by-one above
against it: **it still escaped.** At 23×17 that mutation perturbs *only* radius
3, and by *exactly* 1 — precisely the slack the tolerance allowed. Other shapes
expose it plainly (8×8 at radius 1 differs in 15 pixels).

Two lessons, both now baked into the test:

- sweep several shapes, including small ones and both orientations;
- rather than tolerating a known rounding defect, **model it**. The reference
  now has a variant that scales by the float reciprocal exactly as the library
  does, so the comparison is exact at every radius, and the defect is asserted
  separately as "differs from exact division only at radius 3, and only by 1".
  A tolerance wide enough to absorb a known defect is wide enough to hide an
  unknown one.

**Constructing the input from a known answer** is the way to get ground truth
where no reference is practical: build `A = U·diag(w)·Vᵀ` from chosen singular
values and require SVD to return them; push points through a chosen homography
and require it to be recovered.

### What this approach still cannot answer

The reference implementations were written by the same person who read the
implementation, so a shared misunderstanding of a *convention* survives both
sides. Closed-form tests plug that hole for constants (BT.601, the binomial
kernels) but not for algorithmic conventions. Two questions remain genuinely
open:

- **Is sobel's asymmetric border handling (§1) deliberate or accidental?** The
  reference matches it because it was derived from the source. If the
  reflect-vertically / replicate-horizontally split is an accident, the test
  suite has enshrined it as the specification.
- **Is the size-7 Gaussian kernel (§2) deliberate or a typo?** Sizes 3 and 5
  are binomial rows and 7 is not, which is exactly the shape a long-lived typo
  takes.

Neither can be settled from inside this repo. A **one-off** comparison against
OpenCV would settle both — `cv2.getGaussianKernel` and `cv2.Sobel` with an
explicit `borderType` answer them directly.

Deliberately deferred, and deferred as an *investigation* rather than a test
category: even if OpenCV disagrees, neither would be changed (sobel's borders
feed every derivative, detector and optical-flow result; the 7-tap kernel feeds
every 7-tap blur), so the value is knowing whether jsfeat diverges from the CV
mainstream by choice or by accident. Committed fixtures plus tolerance-tuning
against OpenCV's different conventions would be a large cost for information
that changes no code. Revisit if `haar` (#43) or `bbf` (#44) are ported —
those have neither a usable oracle nor a tractable naive reference, so OpenCV
fixtures would be the only ground truth available — or if OpenCV output is ever
wanted as a **benchmark** baseline alongside #86.

### Coverage: name-based auditing is not enough

The category-D audit found untested modules by grepping test files for module
names. That method has a blind spot it cannot see past: it cannot distinguish
"untested" from "exercised transitively", and it silently passes any code
reached only through another module.

Concretely: `src/imgproc/convol.ts` exports two functions. `_convol_u8` is
heavily exercised through `gaussian_blur`. **`_convol`, the ~120-line float
path, was executed by none of the tests** — every `gaussian_blur` call in the
suite passed a `U8` image. Now covered, via `gaussian_blur` on `F32` matrices.

The audit missed it because `convol.ts` *is* referenced, just never directly.
A line-coverage report would have surfaced it mechanically (#123).

**A note on how to check this sort of thing.** The first attempt instrumented
the function with `console.error` and counted lines in the Vitest output. That
method is worthless: Vitest swallows worker console output, so it reports zero
hits whether or not the code ran — it returned zero even after the float path
was demonstrably covered. It gave the right answer by luck.

Inject a `throw` instead. It cannot be swallowed, and it distinguishes the two
cases unambiguously: with the coverage absent the suite passes untouched, and
with it present the suite fails loudly at that line.
