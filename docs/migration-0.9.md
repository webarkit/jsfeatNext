# Migrating to jsfeatNext 0.9.0 — API-parity release (issue #41)

jsfeatNext **0.9.0** is a deliberate breaking release that restores original
[jsfeat](https://github.com/inspirit/jsfeat)'s calling convention. If you are
coming from 0.8.x or earlier, two things change; if you are coming from
original jsfeat, your code now largely works as-is.

## TL;DR

```js
// ── BEFORE (0.8.x) ────────────────────────────────────────────
import pkg from "@webarkit/jsfeat-next";
const jsfeatNext = pkg.jsfeatNext;          // double-namespace unwrap
const imgproc = new jsfeatNext.imgproc();   // instantiate every module
imgproc.grayscale(rgba, w, h, gray);

// ── AFTER (0.9.0) ─────────────────────────────────────────────
import jsfeatNext from "@webarkit/jsfeat-next";  // default export IS the namespace
jsfeatNext.imgproc.grayscale(rgba, w, h, gray);  // singleton — no `new`
```

Browser / UMD:

```html
<script src="dist/jsfeatNext.js"></script>
<script>
    // BEFORE: var jsfeat = jsfeatNext.jsfeatNext;  new jsfeat.imgproc()...
    // AFTER: the global IS the namespace:
    jsfeatNext.imgproc.grayscale(rgba, w, h, gray);
</script>
```

## What changed

### 1. The `jsfeatNext.jsfeatNext` double namespace is gone

The package entry (`src/index.ts`) used to export `{ jsfeatNext }` — a wrapper
object — so every consumer (npm and UMD alike) had to unwrap
`jsfeatNext.jsfeatNext` before doing anything. The default export is now the
namespace itself.

### 2. Algorithm modules are singletons — `new` is gone

These **14 modules** are now pre-constructed singleton objects on the
namespace. Calling `new jsfeatNext.imgproc()` no longer makes sense (the slot
holds an instance, not a class):

| Module | Before (0.8.x) | After (0.9.0) |
|---|---|---|
| `imgproc` | `const ip = new jsfeatNext.imgproc(); ip.grayscale(...)` | `jsfeatNext.imgproc.grayscale(...)` |
| `math` | `new jsfeatNext.math().qsort(...)` | `jsfeatNext.math.qsort(...)` |
| `matmath` | `new jsfeatNext.matmath().multiply(...)` | `jsfeatNext.matmath.multiply(...)` |
| `linalg` | `new jsfeatNext.linalg().lu_solve(...)` | `jsfeatNext.linalg.lu_solve(...)` |
| `transform` | `new jsfeatNext.transform().invert_affine_transform(...)` | `jsfeatNext.transform.invert_affine_transform(...)` |
| `fast_corners` | `const fc = new jsfeatNext.fast_corners(); fc.detect(...)` | `jsfeatNext.fast_corners.detect(...)` |
| `yape` | `const y = new jsfeatNext.yape(); y.init(...); y.detect(...)` | `jsfeatNext.yape.init(...); jsfeatNext.yape.detect(...)` |
| `yape06` | `const y = new jsfeatNext.yape06(); y.laplacian_threshold = 30` | `jsfeatNext.yape06.laplacian_threshold = 30` |
| `orb` | `new jsfeatNext.orb().describe(...)` | `jsfeatNext.orb.describe(...)` |
| `optical_flow_lk` | `new jsfeatNext.optical_flow_lk().track(...)` | `jsfeatNext.optical_flow_lk.track(...)` |
| `motion_estimator` | `new jsfeatNext.motion_estimator().ransac(...)` | `jsfeatNext.motion_estimator.ransac(...)` |
| `affine2d` | `const k = new jsfeatNext.affine2d()` (as RANSAC kernel) | `jsfeatNext.affine2d` (pass the singleton) |
| `homography2d` | `const k = new jsfeatNext.homography2d()` | `jsfeatNext.homography2d` |
| `cache` | `jsfeatNext.cache` was the **class**: `const c = new jsfeatNext.cache(); c.allocate(30, 2560); c.get_buffer(n)` | `jsfeatNext.cache` is the shared **pool instance**, pre-allocated: `jsfeatNext.cache.get_buffer(n)` / `put_buffer(node)` — no `new`, no `allocate()` (matches original jsfeat, where `jsfeat.cache` was never a constructor either) |

### 3. NOT changed: the data-structure constructors

These are genuine per-object constructors in original jsfeat too, and remain
classes you instantiate exactly as before:

```js
new jsfeatNext.matrix_t(w, h, jsfeatNext.U8_t | jsfeatNext.C1_t)
new jsfeatNext.keypoint_t(x, y, score, level, angle)
new jsfeatNext.pyramid_t(levels)
new jsfeatNext.ransac_params_t(size, thresh, eps, prob)
```

Constants are also unchanged: `jsfeatNext.U8_t`, `jsfeatNext.F32C1_t`,
`jsfeatNext.COLOR_RGBA2GRAY`, … all still live on the namespace.

### 4. Behavior change: ONE shared buffer pool

Every algorithm module now borrows scratch buffers from a single library-wide
pool (`jsfeatNext.cache`), exactly like original jsfeat's global
`jsfeat.cache`. Previously **each `new`ed module instance allocated its own
30-buffer / 76.8 KB pool** — a realistic per-frame pipeline
(grayscale → blur → detect → describe) touching 4+ modules carried several
hundred KB of duplicate pools, and re-instantiating modules inside a frame
loop silently reallocated pools every frame.

This is a behavior change only in memory profile, not in results: all 57
numeric-parity tests against original jsfeat pass identically before and
after.

## Why this change is the right call (the ground truth)

This is not just "matching jsfeat for its own sake" — the original design is
verifiably intentional and better for this library's use case:

1. **Original jsfeat modules are singletons by design, even stateful ones.**
   From jsfeat's own `jsfeat_fast_corners.js`:
   ```js
   var fast_corners = (function() {
       var _threshold = 20;              // module-level state
       return { set_threshold: ..., detect: ... };
   })();
   global.fast_corners = fast_corners;
   fast_corners.set_threshold(20);       // configured ONCE, at load time
   ```
   There was never a concept of multiple independently-configured detector
   instances.
2. **The cache's whole purpose requires sharing.** jsfeat's `imgproc` calls
   `jsfeat.cache.get_buffer(...)` — the one global pool — so buffers freed by
   one stage are immediately reusable by the next. Per-instance pools defeat
   the optimization the cache exists to provide.
3. **It removes a footgun.** With classes, a consumer following jsfeat-style
   examples could `new` a module inside a per-frame loop and silently
   reallocate 76.8 KB pools every frame. With singletons that mistake is
   impossible by construction.
4. **Known limitation, inherited not introduced:** two concurrently,
   differently-configured `fast_corners` are not supported — same as original
   jsfeat. Power users can still `import { fast_corners } from
   "@webarkit/jsfeat-next/..."`-style deep imports of the classes (they still
   exist, unchanged) and construct isolated instances; those instances now
   bind to the shared pool.

## Versioning notes

- Ships as **0.9.0** (pre-1.0 semver allows breaking minors). A `1.0.0-alpha`
  was considered and rejected because the release pipeline doesn't support
  prerelease tags yet (tracked in
  [#81](https://github.com/webarkit/jsfeatNext/issues/81)).
- This is a **hard cut**: 0.8.x's `new jsfeatNext.imgproc()` convention is not
  shimmed. Pin `@webarkit/jsfeat-next@0.8.0` if you need the old API while
  migrating.
