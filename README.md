![github releases](https://flat.badgen.net/github/release/webarkit/jsfeatNext)
![github stars](https://flat.badgen.net/github/stars/webarkit/jsfeatNext)
![github forks](https://flat.badgen.net/github/forks/webarkit/jsfeatNext)
![npm package version](https://flat.badgen.net/npm/v/@webarkit/jsfeat-next)
![Dependabot Badge](https://flat.badgen.net/dependabot/@webarkit/jsfeat-next?icon=dependabot)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CI](https://github.com/webarkit/jsfeatNext/actions/workflows/CI.yml/badge.svg)](https://github.com/webarkit/jsfeatNext/actions/workflows/CI.yml)
![twitter](https://flat.badgen.net/twitter/follow/WebarkitO)

# jsfeatNext 🚀

A TypeScript port of [jsfeat](https://github.com/inspirit/jsfeat) — a computer-vision library — for the [WebARKit](https://webarkit.org) project. jsfeatNext is actively maintained: its algorithms are continuously checked for numeric/behavioral parity against the original jsfeat via an automated test suite, and its internals have been refactored into one real module per algorithm (no more duplicated implementations). It's still pre-1.0 and evolving — see "Known limitations" below for the honest list of gaps.

## Quick start 🏁

```bash
npm install @webarkit/jsfeat-next
```

```js
import pkg from "@webarkit/jsfeat-next";

// consumers unwrap the double namespace: pkg.jsfeatNext, not pkg directly
// (a known wart, tracked for a future breaking-change cleanup — see #41)
const jsfeatNext = pkg.jsfeatNext;

const imgproc = new jsfeatNext.imgproc();
const src = new jsfeatNext.matrix_t(width, height, jsfeatNext.U8_t | jsfeatNext.C1_t);
imgproc.grayscale(rgbaPixelData, width, height, src);
```

In the browser (UMD build), the same shape applies via the global:

```html
<script src="dist/jsfeatNext.js"></script>
<script>
    // note: reuse a *different* variable name — `var jsfeatNext = jsfeatNext.jsfeatNext`
    // would shadow the global with itself and break.
    var jsfeat = jsfeatNext.jsfeatNext;
    var imgproc = new jsfeat.imgproc();
</script>
```

## List of features ✨

- TypeScript definitions, with full TSDoc on every public class/method (`npm run docs` to generate a browsable API reference locally)
- UMD (browser `<script>`) + ESM builds, built with **Vite** library mode
- npm package
- 57+ characterization tests asserting numeric/behavioral parity against the original jsfeat

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
- jsfeatNext is **not a drop-in replacement** for jsfeat: algorithm modules are instantiated (`new jsfeatNext.imgproc()`) rather than called as static namespace functions, and consumers must unwrap the `jsfeatNext.jsfeatNext` double namespace. Tracked in [#41](https://github.com/webarkit/jsfeatNext/issues/41).

## Examples 🧪

Go in the `examples` folder to test some of them (build first, then open the `.html` files in a browser).

working = ✔️ not working = ⚠️

- browser.html ✔️
- grayscale.html ✔️
- linalg_example.html ✔️
- mat_math_example.html ✔️
- matrix_t_example.html ✔️
- orb_test.html ✔️
- sample_boxblur.html ✔️
- sample_canny_edge.html ✔️
- sample_equalize_hist.html ✔️
- sample_fast_corners.html ✔️
- sample_gaussblur.html ✔️
- sample_oflow_lk.html ✔️
- sample_orb.html ✔️
- sample_orb_pinball.html ✔️
- sample_pyrdown.html ✔️
- sample_scharr.html ✔️
- sample_sobel_edge.html ✔️
- sample_sobel.html ✔️
- sample_warp_affine.html ✔️
- sample_warp_perspective.html ✔️
- sample_yape.html ✔️
- sample_yape06.html ✔️

## TypeScript examples 📝

You can find some TypeScript examples in [jsfeatNext-examples](https://github.com/webarkit/jsfeatNext-examples).

## Documentation 📖

Every public class, interface, method and property has TSDoc comments. Run `npm run docs` to generate a full static HTML API reference locally (via [TypeDoc](https://typedoc.org/)) — hosting it publicly is tracked separately in [webarkit/webarkit.github.io#49](https://github.com/webarkit/webarkit.github.io/issues/49). You can also read the [original jsfeat docs](https://inspirit.github.io/jsfeat/) for background on the algorithms, though the calling convention differs (see "Known limitations" below).

## Contributing 🤝

See [`AGENTS.md`](AGENTS.md) for the canonical contribution conventions (Conventional Commits, PRs target `dev` not `main`, numeric-parity expectations) and [`MAINTAINERS.md`](MAINTAINERS.md) for the release process.

## Releases & changelog 📦

Releases are tagged `X.Y.Z` (never `vX.Y.Z`) and published automatically via GitHub Actions. Release notes (generated from Conventional Commits with [git-cliff](https://git-cliff.org/)) live on the [GitHub Releases](https://github.com/webarkit/jsfeatNext/releases) page.

## License 📄

[LGPL-3.0-or-later](LICENSE)
