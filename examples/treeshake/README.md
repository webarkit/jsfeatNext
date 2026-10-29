# Tree-shaking demo (Vite)

The same page twice: a gaussian blur of `../img/pinball.jpg`, with a radius
slider. The only difference between the two is how they import jsfeatNext:

| page             | import                                                              |
| ---------------- | ------------------------------------------------------------------- |
| `named.html`     | `import { imgproc, matrix_t, U8C1_t } from "@webarkit/jsfeat-next"` |
| `namespace.html` | `import jsfeatNext from "@webarkit/jsfeat-next"`                    |

Each is bundled by Vite exactly as an application would be, and each page shows
the size of its own bundle.

## Run it

From the repository root:

```bash
npm run example:treeshake          # builds the library, then both pages
npm run example:treeshake:preview  # serves them at http://localhost:4173/named.html
```

The build prints the size of each bundle. With jsfeatNext 1.2.0 (Vite 8,
minified):

```
dist/assets/named-….js      24.9 kB │ gzip:  9.1 kB
dist/assets/namespace-….js  71.7 kB │ gzip: 25.1 kB
```

The named page ships `imgproc` and only what it depends on (`matrix_t`, `math`
for the kernel, the buffer pool). The namespace page ships the whole library:
ORB and its sampling table, GMS, the matcher, the detectors, `linalg`, optical
flow. The output image is identical.

## How it is wired

- `"@webarkit/jsfeat-next"` is aliased to the built `../../dist/jsfeatNext.mjs`,
  i.e. what an application installs from npm. That is why the script runs
  `npm run build-ts` first.
- The two pages are built separately (`--mode named`, then `--mode namespace`).
  Built together, Vite would move the code they share into a common chunk, and
  the per-page sizes would stop meaning anything.
- Serve the pages as built: `example:treeshake:preview` or any static server. A
  `vite` dev server rewrites the scripts it hands out, so the size a page reports
  would be wrong there.

Why this works, and what keeps it working, is in
[#137](https://github.com/webarkit/jsfeatNext/issues/137) and in the
"Keep the bundle tree-shakeable" rule in `AGENTS.md`.
