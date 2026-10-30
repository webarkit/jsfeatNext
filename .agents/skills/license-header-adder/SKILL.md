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

This is why the header has **three variants** (two for jsfeat-derived and
original code, a third for OpenCV-derived code, see below), and why copying
purecv's verbatim would be wrong.

## Templates and placeholders

There is **one** licence template plus a snippet — not two copies of the
licence text, so the wording cannot drift between variants:

| File | Role |
| --- | --- |
| `resources/HEADER.txt` | the LGPL notice, with `{{FILENAME}}` and `{{ATTRIBUTION}}` slots |
| `resources/ATTRIBUTION-jsfeat.txt` | the upstream jsfeat MIT attribution block |
| `resources/ATTRIBUTION-opencv-gms.txt` | the OpenCV (Apache-2.0) attribution for `gms.cpp`, used under `src/gms/` |
| `resources/ATTRIBUTION-opencv-teblid.txt` | the OpenCV (Apache-2.0) attribution for `beblid.cpp`, `teblid.p256.hpp` and `teblid.p512.hpp`, used under `src/teblid/` |
| `resources/ATTRIBUTION-opencv-freak.txt` | the opencv_contrib (BSD-3-Clause, © EPFL) attribution for `freak.cpp`, used under `src/freak/` |

The script composes them:

| Variant | `{{ATTRIBUTION}}` | Use for |
| --- | --- | --- |
| **derived** | the jsfeat MIT block | code ported/derived from jsfeat |
| **original** | empty | code original to jsfeatNext |
| **opencv-gms** | the OpenCV Apache-2.0 block | code ported from OpenCV's `gms.cpp` (`src/gms/`) |
| **opencv-teblid** | the OpenCV Apache-2.0 block | code ported from OpenCV's `beblid.cpp` and the `teblid.p*.hpp` tables (`src/teblid/`) |
| **opencv-freak** | the opencv_contrib BSD-3-Clause (EPFL) block | code ported from opencv_contrib's `freak.cpp` (`src/freak/`) |

Applying the derived variant to genuinely original files is a false credit —
and licence scanners read these notices, so it would report MIT content in
files that have none. Applying the original variant to ported files drops a
legally required notice. Both matter; pick deliberately.

Replace `{{FILENAME}}` with the **basename** of the target file (`imgproc.ts`,
not `src/imgproc/imgproc.ts`).

## Scope

**Apply to:**

- `src/**/*.ts` — derived template, except the files listed as original in the
  script (`src/types.ts`, `src/index.ts`, which contain no ported code) and the
  OpenCV-derived prefixes (`src/gms/`, `src/teblid/`, `src/freak/`, see the next section)
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

## Third variant: OpenCV-derived

Code ported from OpenCV is **not** jsfeat-derived: stamping it with the jsfeat
MIT credit would be a false credit (the same reasoning as the original variant),
and dropping OpenCV's own notice would break its licence. OpenCV and
opencv_contrib are mostly **Apache-2.0**, which requires that we keep the copyright and
licence notices, ship a copy of the licence, and state that we changed the
files. Not every file is Apache-2.0, though: `freak.cpp` carries its own
**BSD-3-Clause** notice (© 2011-2012 Signal processing laboratory 2, EPFL),
shipped verbatim as `LICENSES/BSD-3-Clause-FREAK.txt` (spec F6). The licence is
verified per upstream file, never assumed to be Apache.

How it is wired:

- The script's `OPENCV_SRC` map is **path prefix -> snippet in `resources/`**.
  Today it holds three entries, `src/gms/` -> `ATTRIBUTION-opencv-gms.txt`,
  `src/teblid/` -> `ATTRIBUTION-opencv-teblid.txt` and `src/freak/` ->
  `ATTRIBUTION-opencv-freak.txt`. Any file
  under a prefix is stamped with `HEADER.txt` whose `{{ATTRIBUTION}}` is that
  snippet (never the jsfeat one), and the check verifies it byte-for-byte like
  the other variants. An explicit `ORIGINAL_SRC` entry still wins over a prefix,
  for a file under one of those prefixes that is genuinely original.
- **One snippet per upstream file.** The snippet names the upstream source file,
  its repository, the licence, that this is a modified version, and the paper if
  there is one. Port a second OpenCV file and you add a second snippet and a
  second prefix, rather than editing the first.
- **Verify the upstream licence per file.** OpenCV's per-file headers point to
  the repository `LICENSE` rather than carrying the licence text, so record
  which release's licence applies. OpenCV and opencv_contrib moved from their
  old BSD-style licence to Apache-2.0 with **4.5.0** (verified: opencv_contrib's
  `LICENSE` at 4.4.0 is the old text, at 4.5.0 it is Apache-2.0). Port from the
  reference release in `AGENTS.md` (OpenCV 4.10.0, mostly Apache-2.0) and check
  the file has no notice of its own that differs: `freak.cpp` does, and is BSD-3-Clause.
- The licence texts ship as `LICENSES/Apache-2.0.txt` (copied verbatim from
  opencv_contrib's `LICENSE`) and `LICENSES/BSD-3-Clause-FREAK.txt` (verbatim from
  `freak.cpp`), both listed in `package.json` `files` so they are in the npm
  tarball, and the bundle banner in `vite.config.mts` names them.

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
`licenseBannerPlugin()` in `vite.config.mts` (the jsfeat MIT credit, the
OpenCV Apache-2.0 line that points at `LICENSES/Apache-2.0.txt`, and a FREAK
sentence naming freak.cpp, its EPFL copyright and `LICENSES/BSD-3-Clause-FREAK.txt`). It runs in
`generateBundle`, **after** minification, because Rolldown's Oxc minifier strips
`output.banner` from the UMD bundle even with legal comments enabled. If the
banner ever disappears from a release, check that plugin first.

## Adding a new source file

Every new file under `src/`, `tests/` or `examples/` must get a header. Run the
script with `--fix` after adding files, or copy the header from a sibling and
update `{{FILENAME}}`. CI runs the check, so a missing header fails the build.
