---
name: license-header-adder
description: Adds the jsfeatNext LGPL license header to source files, with a filename placeholder and the correct upstream attribution.
---

# License Header Adder Skill

Applies the project's LGPLv3 header to source files. Adapted from the
[purecv skill](https://github.com/webarkit/purecv/blob/main/.agents/skills/license-header-adder/SKILL.md)
of the same name — see "Why jsfeatNext differs" below, because the template is
**not** interchangeable with purecv's.

## The short version

```bash
node scripts/check-license-headers.mjs        # verify (exits 1 if any file lacks one)
node scripts/check-license-headers.mjs --fix  # apply to anything missing it
```

The script is the source of truth for scope and exclusions; this document
explains the reasoning so the rules are not changed by accident.

## Why jsfeatNext differs from purecv

purecv is original code. **jsfeatNext is a port of [jsfeat](https://github.com/inspirit/jsfeat),
which is MIT licensed, © Eugene Zatepyakin.**

Relicensing MIT code under LGPL-3.0 is allowed — MIT is permissive and
GPL-compatible — **but MIT requires its copyright and permission notice to be
retained in all copies or substantial portions of the software.** Nearly every
file under `src/` is a direct port of the corresponding jsfeat algorithm, so
the header must carry that attribution.

This is why the header has **two variants**, and why copying purecv's verbatim
would be wrong.

## Templates and placeholders

There is **one** licence template plus a snippet — not two copies of the
licence text, so the wording cannot drift between variants:

| File | Role |
| --- | --- |
| `resources/HEADER.txt` | the LGPL notice, with `{{FILENAME}}` and `{{ATTRIBUTION}}` slots |
| `resources/ATTRIBUTION-jsfeat.txt` | the upstream jsfeat MIT attribution block |

The script composes them:

| Variant | `{{ATTRIBUTION}}` | Use for |
| --- | --- | --- |
| **derived** | the jsfeat MIT block | code ported/derived from jsfeat |
| **original** | empty | code original to jsfeatNext |

Applying the derived variant to genuinely original files is a false credit —
and licence scanners read these notices, so it would report MIT content in
files that have none. Applying the original variant to ported files drops a
legally required notice. Both matter; pick deliberately.

Replace `{{FILENAME}}` with the **basename** of the target file (`imgproc.ts`,
not `src/imgproc/imgproc.ts`).

## Scope

**Apply to:**

- `src/**/*.ts` — derived template, except the files listed as original in the
  script (`src/types.ts`, `src/index.ts`, which contain no ported code)
- `tests/**/*.ts` — original template (our own test code)
- `examples/*.html` — derived template, rendered as an HTML comment placed
  **after** `<!DOCTYPE html>` (a comment before the doctype can trigger quirks
  mode in older browsers)
- `examples/js/*.mjs` — original template

**Never apply to** — third-party or foreign provenance, not ours to relicense:

- `tests/vendor/**` — the vendored original jsfeat oracle (MIT)
- `examples/js/dat.gui.min.js` — Apache-2.0, © Google Creative Lab
- `examples/js/compatibility.js` — header says *"this code is from all around
  the web"*; inherited from jsfeat's examples
- `examples/js/profiler.js` — inherited from jsfeat's examples
- `dist/`, `types/`, `node_modules/` — generated or vendored

## What the check actually verifies

`check-license-headers.mjs` does more than look for a marker — a marker-only
check would pass a drifted template, the wrong variant, or a hand-edit. It
fails on all of:

- a file with no header at all;
- a header that does not match its expected variant byte-for-byte (catches
  edits to the licence text, and the wrong variant applied);
- loss of a third-party notice in the two hand-extended files below.

## Files with extra attribution

Two files carry provenance beyond jsfeat and were extended **by hand**. They are
listed in the script's `EXTENDED` map, which checks them for their required
notice instead of an exact template match. If the header is ever regenerated,
these additions must survive:

- **`src/math/math.ts`** — `qsort` derives from the \*BSD system `qsort()`,
  © 1992, 1993 The Regents of the University of California. The header notes it
  and the notice at the function itself must not be removed.
- **`src/orb/bit_pattern_31.ts`** — the sampling pattern is the learned BRIEF
  pattern from the ORB paper (Rublee et al., ICCV 2011), distributed in OpenCV
  under the 3-clause BSD license and inherited via jsfeat.

## Application rules

1. If the file already contains `SPDX-License-Identifier: LGPL-3.0-or-later`,
   **skip it** — never stack a second header.
2. Insert at the very top, with one blank line before the original content.
3. Never overwrite an existing third-party notice; add to it.

## The built bundles

`dist/jsfeatNext.js` and `.mjs` get a condensed banner from
`licenseBannerPlugin()` in `vite.config.mts`. It runs in `generateBundle`,
**after** minification, because Rolldown's Oxc minifier strips `output.banner`
from the UMD bundle even with legal comments enabled. If the banner ever
disappears from a release, check that plugin first.

## Adding a new source file

Every new file under `src/`, `tests/` or `examples/` must get a header. Run the
script with `--fix` after adding files, or copy the header from a sibling and
update `{{FILENAME}}`. CI runs the check, so a missing header fails the build.
