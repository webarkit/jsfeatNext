![github releases](https://flat.badgen.net/github/release/webarkit/jsfeatNext)
![github stars](https://flat.badgen.net/github/stars/webarkit/jsfeatNext)
![github forks](https://flat.badgen.net/github/forks/webarkit/jsfeatNext)
![npm package version](https://flat.badgen.net/npm/v/@webarkit/jsfeat-next)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CI](https://github.com/webarkit/jsfeatNext/actions/workflows/CI.yml/badge.svg)](https://github.com/webarkit/jsfeatNext/actions/workflows/CI.yml)
[![codecov](https://codecov.io/gh/webarkit/jsfeatNext/graph/badge.svg)](https://codecov.io/gh/webarkit/jsfeatNext)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/WebarkitO)](https://x.com/WebarkitO)

# jsfeatNext 🚀

A TypeScript port of [jsfeat](https://github.com/inspirit/jsfeat) — a computer-vision library — for the [WebARKit](https://webarkit.org) project. jsfeatNext is actively maintained: its algorithms are continuously checked for numeric/behavioral parity against the original jsfeat via an automated test suite, and its internals have been refactored into one real module per algorithm (no more duplicated implementations). It's still pre-1.0 and evolving — see "Known limitations" below for the honest list of gaps.

## Quick start 🏁

```bash
npm install @webarkit/jsfeat-next
```

```js
import jsfeatNext from "@webarkit/jsfeat-next";

// algorithm modules are singletons — call them directly, no `new` (since 0.9.0)
const src = new jsfeatNext.matrix_t(width, height, jsfeatNext.U8_t | jsfeatNext.C1_t);
jsfeatNext.imgproc.grayscale(rgbaPixelData, width, height, src);
```

In the browser (UMD build), the global is the namespace directly:

```html
<script src="dist/jsfeatNext.js"></script>
<script>
    jsfeatNext.imgproc.grayscale(rgbaPixelData, width, height, src);
</script>
```

> **Upgrading from ≤ 0.8.x?** The `jsfeatNext.jsfeatNext` double namespace and the
> `new jsfeatNext.imgproc()` calling convention were removed in 0.9.0 — see the
> [migration guide](docs/migration-0.9.md).

## List of features ✨

- TypeScript definitions, with full TSDoc on every public class/method (`npm run docs` to generate a browsable API reference locally)
- UMD (browser `<script>`) + ESM builds, built with **Vite** library mode
- npm package
- 250+ tests across 22 files: characterization tests asserting numeric/behavioral parity against the original jsfeat, plus property/invariant tests, ground-truth reference tests, and a registry of intentional divergences

## Modules 📚

These classes are attached to the `jsfeatNext` namespace (`jsfeatNext.<name>`):

`cache` · `fast_corners` · `homography2d` · `affine2d` · `imgproc` · `keypoint_t` · `linalg` · `math` · `matmath` · `matrix_t` · `motion_estimator` · `ransac_params_t` · `optical_flow_lk` · `orb` · `pyramid_t` · `transform` · `yape` · `yape06`

## Requirements & building 🛠️

- **Node.js** v24 (see `.nvmrc`; npm 11)
- Build (UMD + ESM + type declarations): `npm install` then `npm run build-ts`
  - Produces `dist/jsfeatNext.js` (UMD, browser global `jsfeatNext`), `dist/jsfeatNext.mjs` (ESM), and `types/`
  - Built with **Vite** library mode; webpack/babel are no longer used
- Watch mode: `npm run dev-ts`
- Tests: `npm test` (Vitest — characterization tests against the original jsfeat)
- API docs: `npm run docs` (TypeDoc, output to `docs/api/`, gitignored/local-only for now)

## npm package 📦

```bash
npm install @webarkit/jsfeat-next
```

## Known limitations 🔍

- Not every original jsfeat class is ported yet — `haar` and `bbf` (Haar-cascade / BBF object detection) are not implemented. Tracked in [#43](https://github.com/webarkit/jsfeatNext/issues/43) and [#44](https://github.com/webarkit/jsfeatNext/issues/44).
- The `transform` module takes `matrix_t` arguments where original jsfeat's (never-shipped) `transform` module used raw arrays — same math, slightly different calling convention (see the parity audit, Axis 2).

## Examples 🧪

The `examples` folder demonstrates **both ways of consuming the library**. Build first (`npm run build-ts`), then open the examples in a browser.

### ESM examples — `import` from `dist/jsfeatNext.mjs`

The camera demos use the modern ES-module entry point:

```html
<script type="module">
    import jsfeatNext from '../dist/jsfeatNext.mjs';
    jsfeatNext.imgproc.grayscale(...);
</script>
```

> ⚠️ **These must be served over HTTP** — ES modules don't load from `file://`. Run a static server from the repo root, e.g. `npx serve .`, then browse to `http://localhost:3000/examples/…`.

They share the helpers in [`examples/js/demo-utils.mjs`](examples/js/demo-utils.mjs) (webcam setup and canvas drawing) instead of repeating that boilerplate in every file.

| Example | Demonstrates |
|---|---|
| `grayscale.html` | color → grayscale conversion |
| `sample_boxblur.html` | box blur |
| `sample_gaussblur.html` | gaussian blur |
| `sample_equalize_hist.html` | histogram equalization |
| `sample_canny_edge.html` | Canny edge detector |
| `sample_sobel.html` / `sample_sobel_edge.html` | Sobel derivatives / edges |
| `sample_scharr.html` | Scharr derivatives |
| `sample_pyrdown.html` | image pyramid downsampling |
| `sample_fast_corners.html` | FAST corner detector |
| `sample_yape.html` / `sample_yape06.html` | YAPE / YAPE06 detectors |
| `sample_oflow_lk.html` | Lucas–Kanade optical flow (click to add points) |
| `sample_orb.html` | ORB descriptors + matching + homography |
| `sample_orb_pinball.html` | ORB pattern tracking on a reference image |
| `sample_warp_affine.html` / `sample_warp_perspective.html` | affine / perspective warps |

### UMD examples — global `<script>` tag

These small API demos load the UMD bundle and use the `jsfeatNext` global. They need no server and **open directly from the filesystem**:

```html
<script src="../dist/jsfeatNext.js"></script>
<script>
    const m = new jsfeatNext.matrix_t(320, 240, jsfeatNext.U8_t | jsfeatNext.C1_t);
</script>
```

| Example | Demonstrates |
|---|---|
| `browser.html` | version, constants, `matrix_t`, `keypoint_t`, the shared `cache` |
| `matrix_t_example.html` | constructing a `matrix_t` |
| `mat_math_example.html` | `matmath` (3×3 identity) |
| `linalg_example.html` | `linalg` (SVD pseudo-inverse) |
| `orb_test.html` | `orb.describe` |

## TypeScript examples 📝

You can find some TypeScript examples in [jsfeatNext-examples](https://github.com/webarkit/jsfeatNext-examples).

## Documentation 📖

Every public class, interface, method and property has TSDoc comments. Run `npm run docs` to generate a full static HTML API reference locally (via [TypeDoc](https://typedoc.org/)) — hosting it publicly is tracked separately in [webarkit/webarkit.github.io#49](https://github.com/webarkit/webarkit.github.io/issues/49). You can also read the [original jsfeat docs](https://inspirit.github.io/jsfeat/) for background on the algorithms, though the calling convention differs (see "Known limitations" below).

## Contributing 🤝

See [`AGENTS.md`](AGENTS.md) for the canonical contribution conventions (Conventional Commits, PRs target `dev` not `main`, numeric-parity expectations) and [`MAINTAINERS.md`](MAINTAINERS.md) for the release process.

Dependencies and GitHub Actions are kept current by [Dependabot](https://docs.github.com/en/code-security/dependabot), which opens its own PRs against `dev` — they go through the same CI and review as any other change.

## Releases & changelog 📦

Releases are tagged `X.Y.Z` (never `vX.Y.Z`) and published automatically via GitHub Actions. Release notes (generated from Conventional Commits with [git-cliff](https://git-cliff.org/)) live on the [GitHub Releases](https://github.com/webarkit/jsfeatNext/releases) page.

## License 📄

[LGPL-3.0-or-later](LICENSE)
