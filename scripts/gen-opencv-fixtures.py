#!/usr/bin/env python3
# gen-opencv-fixtures.py
# jsfeatNext
#
# This file is part of jsfeatNext - WebARKit.
#
# SPDX-License-Identifier: LGPL-3.0-or-later
#
# Generates the OpenCV ground-truth fixtures in tests/fixtures/opencv/ (#132).
# Run by hand from the repository's gitignored .venv; never by CI or `npm ci`.
# See tests/fixtures/opencv/README.md for the three commands.
#
# Copyright 2026 WebARKit.
#
# Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
#

"""Regenerate the OpenCV fixtures that the Vitest suite asserts against.

    python scripts/gen-opencv-fixtures.py [--only integral|gms]

With no ``--only`` every fixture is regenerated. Output is deterministic: the
same pinned toolchain and the same committed scene always produce the same
bytes, so ``git status`` after a re-run shows nothing.

Every fixture is a JSON envelope, ``{"meta": {...}, "payload": {...}}``. The
``meta`` block is common to all of them: the OpenCV version, the algorithm, its
parameters and, when an image is involved, that image's file name and sha256.
The ``payload`` is specific to the algorithm. TypeScript reads them back with
``loadFixture`` in ``tests/fixtures/opencv/loader.ts``.

Adding a fixture is one function that returns ``{fixture name: envelope}`` plus
one entry in ``GENERATORS``.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from collections import namedtuple
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
REQUIREMENTS = REPO / "scripts" / "requirements-fixtures.txt"
FIXTURE_DIR = REPO / "tests" / "fixtures" / "opencv"
SCENE_NAME = "scene-640x480.pgm"

# The two distributions pinned in the requirements file. Both are verified
# against the installed modules before anything is generated.
OPENCV_DIST = "opencv-contrib-python"
NUMPY_DIST = "numpy"

Toolchain = namedtuple("Toolchain", "cv2 np")
Scene = namedtuple("Scene", "name path image sha256")


# ---------------------------------------------------------------------------
# Toolchain guard
# ---------------------------------------------------------------------------


def parse_pin(requirements_text: str, dist: str) -> str:
    """Return the exact version ``dist`` is pinned to, or exit if it is not pinned."""
    match = re.search(
        r"^\s*" + re.escape(dist) + r"\s*==\s*([0-9]+(?:\.[0-9]+)*)\s*(?:#.*)?$",
        requirements_text,
        re.MULTILINE,
    )
    if not match:
        sys.exit(f"error: {REQUIREMENTS.name} has no exact '{dist}==X.Y.Z' pin")
    return match.group(1)


def expected_module_version(dist: str, pin: str) -> str:
    """The version string the installed module must report for ``pin``.

    An opencv wheel is versioned ``A.B.C.D`` (``D`` is the wheel's own build
    number) while ``cv2.__version__`` reports only ``A.B.C``.
    """
    if dist == OPENCV_DIST:
        return ".".join(pin.split(".")[:3])
    return pin


def require_pinned_toolchain() -> Toolchain:
    """Import cv2 and numpy, exiting non-zero unless they match the pins.

    This runs before anything is read or written. A fixture generated with an
    unpinned OpenCV would silently change the ground truth, so a mismatch is an
    explicit error, never a warning.
    """
    requirements = REQUIREMENTS.read_text(encoding="utf-8")
    cv2_pin = parse_pin(requirements, OPENCV_DIST)
    np_pin = parse_pin(requirements, NUMPY_DIST)

    try:
        import cv2
        import numpy as np
    except ImportError as err:
        sys.exit(
            f"error: cannot import {err.name}: {err}\n"
            f"Install the pinned toolchain: python -m pip install -r scripts/{REQUIREMENTS.name}"
        )

    wanted_cv2 = expected_module_version(OPENCV_DIST, cv2_pin)
    if cv2.__version__ != wanted_cv2:
        sys.exit(
            f"error: OpenCV version mismatch: {REQUIREMENTS.name} pins {OPENCV_DIST}=={cv2_pin} "
            f"(cv2.__version__ == {wanted_cv2!r}), but the installed cv2 reports {cv2.__version__!r}.\n"
            f"Refusing to generate fixtures with the wrong ground truth. "
            f"Reinstall: python -m pip install -r scripts/{REQUIREMENTS.name}"
        )
    if np.__version__ != np_pin:
        sys.exit(
            f"error: numpy version mismatch: {REQUIREMENTS.name} pins {NUMPY_DIST}=={np_pin}, "
            f"but the installed numpy is {np.__version__}.\n"
            f"Reinstall: python -m pip install -r scripts/{REQUIREMENTS.name}"
        )
    return Toolchain(cv2, np)


# ---------------------------------------------------------------------------
# Envelope helpers
# ---------------------------------------------------------------------------


def load_scene(tc: Toolchain) -> Scene:
    """Read the committed input image. Both sides read the same bytes (#132)."""
    path = FIXTURE_DIR / SCENE_NAME
    if not path.is_file():
        sys.exit(
            f"error: {path} is missing. Dump it from TypeScript first:\n"
            f"  JSFEAT_DUMP_SCENE=1 npx vitest run tests/fixtures/opencv/dump-scene.test.ts"
        )
    image = tc.cv2.imread(str(path), tc.cv2.IMREAD_GRAYSCALE)
    if image is None:
        sys.exit(f"error: cv2.imread could not read {path}")
    return Scene(SCENE_NAME, path, image, hashlib.sha256(path.read_bytes()).hexdigest())


def envelope(tc: Toolchain, algorithm: str, params: dict, payload: dict, scene: Scene | None = None) -> dict:
    """Wrap ``payload`` in the common ``meta`` block."""
    meta = {
        "opencv_version": tc.cv2.__version__,
        "algorithm": algorithm,
        "params": params,
    }
    if scene is not None:
        meta["image"] = scene.name
        meta["sha256"] = scene.sha256
    return {"meta": meta, "payload": payload}


def digest(array, dtype: str) -> str:
    """sha256 of ``array`` as contiguous little-endian ``dtype`` bytes."""
    return hashlib.sha256(array.astype(dtype).tobytes()).hexdigest()


def write_fixture(name: str, data: dict) -> None:
    """Write ``<name>.json``: sorted keys, indent 1, LF, so the diffs read well."""
    text = json.dumps(data, sort_keys=True, indent=1) + "\n"
    path = FIXTURE_DIR / f"{name}.json"
    with open(path, "w", encoding="utf-8", newline="\n") as handle:
        handle.write(text)
    print(f"wrote {path.relative_to(REPO).as_posix()}")


# ---------------------------------------------------------------------------
# Generators: one function per algorithm, registered in GENERATORS below
# ---------------------------------------------------------------------------


def gen_integral(tc: Toolchain, scene: Scene) -> dict:
    """``compute_integral_image`` vs ``cv2.integral2``.

    The first fixture, because it validates the harness itself: pure integer
    arithmetic that must match bit-for-bit, so a mismatch indicts the harness
    rather than the algorithm. The tilted sum is out of scope.
    """
    cv2 = tc.cv2
    height, width = scene.image.shape
    total, squares = cv2.integral2(scene.image, sdepth=cv2.CV_32S, sqdepth=cv2.CV_64F)
    assert total.shape == squares.shape == (height + 1, width + 1)

    payload = {
        "width": width,
        "height": height,
        "sum_sha256": digest(total, "<i4"),
        "sqsum_sha256": digest(squares, "<f8"),
        "sum_first_row": total[0, :].tolist(),
        "sum_first_col": total[:, 0].tolist(),
    }
    params = {"sdepth": "CV_32S", "sqdepth": "CV_64F"}
    return {"integral-scene": envelope(tc, "integral", params, payload, scene)}


# `--only <key>` selects one entry; no `--only` runs them all. The GMS fixtures
# (#134) add a `gms` function above and an entry here.
GENERATORS = {
    "integral": gen_integral,
}


def main() -> None:
    parser = argparse.ArgumentParser(description="Regenerate the OpenCV fixtures in tests/fixtures/opencv/.")
    parser.add_argument(
        "--only",
        choices=sorted(GENERATORS),
        help="regenerate only this fixture family (default: all)",
    )
    args = parser.parse_args()

    tc = require_pinned_toolchain()  # before anything is read or written
    scene = load_scene(tc)
    for key in [args.only] if args.only else sorted(GENERATORS):
        for name, data in GENERATORS[key](tc, scene).items():
            write_fixture(name, data)


if __name__ == "__main__":
    main()
