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

    python scripts/gen-opencv-fixtures.py [--only integral|gms|gms-synthetic|gms-coverage|teblid]

``--only integral`` writes ``integral-scene.json``; ``--only gms`` writes the
five ORB and hand-placed GMS fixtures (``gms-default``, ``gms-rotation``,
``gms-scale``, ``gms-rotation-scale``, ``gms-boundaries``) and
``--only gms-synthetic`` the four ``gms-synth-*.json`` and ``--only
gms-coverage`` ``gms-coverage.json`` (#134); ``--only teblid`` writes
``teblid-p256.json`` and ``teblid-p512.json`` (#135). With no ``--only`` every fixture
is regenerated. Output is deterministic: the same pinned toolchain and the same
committed scene always produce the same bytes, so ``git status`` after a re-run
shows nothing.

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
import math
import platform
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

# The other distributions that also install a top-level ``cv2`` package. With
# any of them next to the pinned wheel, which ``cv2`` is imported is undefined,
# so the guard refuses to run (#245).
OTHER_OPENCV_DISTS = ("opencv-python", "opencv-python-headless", "opencv-contrib-python-headless")

Toolchain = namedtuple("Toolchain", "cv2 np wheel build contrib_build compiler")
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

    # The installed wheel itself, to all four parts (#245). cv2.__version__ is
    # only A.B.C, so another build of the same release (4.10.0.82 instead of
    # 4.10.0.84) would pass the module check below.
    wheel = installed_version(OPENCV_DIST)
    if wheel != cv2_pin:
        sys.exit(
            f"error: OpenCV wheel mismatch: {REQUIREMENTS.name} pins {OPENCV_DIST}=={cv2_pin}, "
            f"but the installed {OPENCV_DIST} is {wheel or 'not installed'}.\n"
            f"Refusing to generate fixtures with the wrong ground truth. "
            f"Reinstall: python -m pip install -r scripts/{REQUIREMENTS.name}"
        )
    others = [f"{dist}=={installed_version(dist)}" for dist in OTHER_OPENCV_DISTS if installed_version(dist)]
    if others:
        sys.exit(
            f"error: another OpenCV distribution is installed next to {OPENCV_DIST}=={cv2_pin}: "
            f"{', '.join(others)}.\n"
            f"Each provides cv2, and which one is imported is undefined. "
            f"Uninstall it: python -m pip uninstall {' '.join(d.split('==')[0] for d in others)}"
        )

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

    # The reference behaviour is OpenCV's generic CPU path, as in PureCV's
    # cpp_ref (CONTRIBUTING.md, "OpenCV Reference Version"): Intel IPP can take
    # a different code path for some functions, so it is switched off before
    # any fixture is produced, and the run fails if it cannot be.
    cv2.ipp.setUseIPP(False)
    if cv2.ipp.useIPP():
        sys.exit("error: could not disable Intel IPP (cv2.ipp.setUseIPP(False) had no effect)")

    build = build_version(cv2, "Version control:")
    contrib_build = build_version(cv2, "Version control (extra):")
    compiler = build_version(cv2, "C++ Compiler:")
    return Toolchain(cv2, np, f"{OPENCV_DIST}=={wheel}", build, contrib_build, compiler)


def installed_version(dist: str) -> str | None:
    """The installed version of distribution ``dist``, or None if it is absent."""
    from importlib.metadata import PackageNotFoundError, version

    try:
        return version(dist)
    except PackageNotFoundError:
        return None


def build_version(cv2, label: str) -> str:
    """The value of one ``Version control`` line of ``cv2.getBuildInformation()``.

    It names the source tree the wheel was built from (``4.10.0`` for a release
    build), which ``cv2.__version__`` alone does not. Every fixture records it.
    """
    for line in cv2.getBuildInformation().splitlines():
        if line.strip().startswith(label):
            return line.strip()[len(label):].strip()
    sys.exit(f"error: cv2.getBuildInformation() has no {label!r} line")


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


def envelope(tc: Toolchain, algorithm: str, params: dict, payload: dict | list, scene: Scene | None = None) -> dict:
    """Wrap ``payload`` in the common ``meta`` block."""
    meta = {
        "opencv_wheel": tc.wheel,
        "opencv_version": tc.cv2.__version__,
        "opencv_build": tc.build,
        "opencv_contrib_build": tc.contrib_build,
        "ipp": False,
        "platform": f"{platform.system()} {platform.machine()}",
        "compiler": tc.compiler,
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


# Fixtures written with compact_json(): the synthetic GMS ones hold thousands of
# coordinates, which indent=1 would put one number per line.
COMPACT_FIXTURES = ("gms-synth-", "gms-coverage", "teblid-")


def compact_json(value, level: int = 0) -> str:
    """JSON with sorted keys and indent 1, except that an array of numbers, or of
    arrays of numbers, is written on one line."""

    def number(v):
        return isinstance(v, (int, float)) and not isinstance(v, bool)

    pad = " " * (level + 1)
    if isinstance(value, dict) and value:
        items = [f"{pad}{json.dumps(k)}: {compact_json(value[k], level + 1)}" for k in sorted(value)]
        return "{\n" + ",\n".join(items) + "\n" + " " * level + "}"
    if isinstance(value, list) and all(number(v) or (isinstance(v, list) and all(map(number, v))) for v in value):
        return json.dumps(value, separators=(",", ":"))
    if isinstance(value, list):
        items = [pad + compact_json(v, level + 1) for v in value]
        return "[\n" + ",\n".join(items) + "\n" + " " * level + "]"
    return json.dumps(value)


def write_fixture(name: str, data: dict) -> None:
    """Write ``<name>.json``: sorted keys, indent 1, LF, so the diffs read well.

    The fixtures named in COMPACT_FIXTURES put each numeric array on one line.
    """
    if name.startswith(COMPACT_FIXTURES):
        text = compact_json(data) + "\n"
    else:
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


# GMS (#134): one ORB fixture per branch of OpenCV's GMSMatcher::getInlierMask,
# plus the hand-placed gms-boundaries.
GMS_ORB_FEATURES = 500
GMS_OUTLIER_FRACTION = 0.3
GMS_SEED = 1234
GMS_THRESHOLD_FACTOR = 6.0

# The view-2 transform of each fixture. The plan asked for a (17, -11) shift, a
# 40 deg rotation and a x0.7 resize; on the committed scene matchGMS keeps no
# match at all for any of those, so each was moved to the nearest value that
# keeps a proper, non-empty subset. tests/fixtures/opencv/README.md ("GMS
# fixtures") records the search and why.
GMS_SHIFT = (18, -11)  # (dx, dy) in pixels
GMS_ROTATION_ANGLE = 38.5  # degrees, counter-clockwise, about the image centre
GMS_SCALE = 0.71
GMS_ROTATION_SCALE = (40.0, 0.72)  # rotate, then resize


def gen_gms(tc: Toolchain, scene: Scene) -> dict:
    """``gms.filter`` vs ``cv2.xfeatures2d.matchGMS``, one fixture per search path.

    View 1 is the committed scene. View 2 is built from it with a known
    transform; it is not committed, because GMS only reads keypoint positions,
    the two image sizes and the (queryIdx, trainIdx) pairs, all of which are in
    the payload. ORB + brute-force Hamming matching produce the matches; then a
    fixed share of them gets a random train index, so the filter has wrong
    matches to reject. ``kept`` lists the indices into ``matches`` of the
    matches ``matchGMS`` returned, ascending.
    """
    cv2, np = tc.cv2, tc.np
    view1 = scene.image
    height, width = view1.shape
    centre = (width / 2, height / 2)

    def translated(img, dx, dy):
        shift = np.float32([[1, 0, dx], [0, 1, dy]])
        return cv2.warpAffine(img, shift, (width, height))

    def rotated(img, angle):
        return cv2.warpAffine(img, cv2.getRotationMatrix2D(centre, angle, 1.0), (width, height))

    def scaled(img, factor):
        size = (round(img.shape[1] * factor), round(img.shape[0] * factor))
        return cv2.resize(img, size, interpolation=cv2.INTER_AREA)

    rs_angle, rs_factor = GMS_ROTATION_SCALE
    variants = {
        # name: (view 2, withRotation, withScale, how view 2 was made)
        "gms-default": (
            translated(view1, *GMS_SHIFT),
            False,
            False,
            f"warpAffine translation dx={GMS_SHIFT[0]} dy={GMS_SHIFT[1]}, same canvas",
        ),
        "gms-rotation": (
            rotated(view1, GMS_ROTATION_ANGLE),
            True,
            False,
            f"warpAffine rotation {GMS_ROTATION_ANGLE:g} deg about {centre}, same canvas",
        ),
        "gms-scale": (
            scaled(view1, GMS_SCALE),
            False,
            True,
            f"resize x{GMS_SCALE:g}, INTER_AREA",
        ),
        "gms-rotation-scale": (
            scaled(rotated(view1, rs_angle), rs_factor),
            True,
            True,
            f"warpAffine rotation {rs_angle:g} deg about {centre}, then resize x{rs_factor:g}, INTER_AREA",
        ),
    }

    orb = cv2.ORB_create(nfeatures=GMS_ORB_FEATURES)
    kp1, des1 = orb.detectAndCompute(view1, None)
    out = {}
    for name, (view2, with_rotation, with_scale, how) in variants.items():
        kp2, des2 = orb.detectAndCompute(view2, None)
        matches = list(cv2.BFMatcher(cv2.NORM_HAMMING).match(des1, des2))

        # A fresh generator per fixture, so each one is reproducible on its own.
        rng = np.random.default_rng(GMS_SEED)
        n_wrong = round(GMS_OUTLIER_FRACTION * len(matches))
        wrong = rng.choice(len(matches), size=n_wrong, replace=False)
        train = rng.integers(0, len(kp2), size=n_wrong)
        for i, t in zip(wrong.tolist(), train.tolist()):
            m = matches[i]
            matches[i] = cv2.DMatch(m.queryIdx, t, m.distance)

        size2 = (view2.shape[1], view2.shape[0])
        payload = gms_payload(tc, name, (width, height), size2, kp1, kp2, matches, with_rotation, with_scale)
        params = {
            "view2": how,
            "detector": f"ORB_create(nfeatures={GMS_ORB_FEATURES}).detectAndCompute",
            "matcher": "BFMatcher(NORM_HAMMING, crossCheck=False).match",
            "outliers": f"trainIdx of round({GMS_OUTLIER_FRACTION:g} * len(matches)) matches replaced, "
            f"numpy.random.default_rng({GMS_SEED})",
            "withRotation": with_rotation,
            "withScale": with_scale,
            "thresholdFactor": GMS_THRESHOLD_FACTOR,
        }
        out[name] = envelope(tc, "matchGMS", params, payload, scene)

    out["gms-boundaries"] = gms_boundaries(tc)
    return out


def gms_boundaries(tc: Toolchain) -> dict:
    """The default path on hand-placed points, built to pin OpenCV's decision boundaries.

    The ORB fixtures barely do: a port computing the grid in double, or
    breaking a tie between two right cells another way, reproduces all four,
    and one rejecting a score equal to the threshold fails only gms-scale.
    Each group below flips under one of those readings (checked against a
    literal port of gms.cpp):

    - Probes A, B, C: the train point is at a right-grid border, x = 416 - ulp
      (float cell 13, double 12), x = 224 (cell 7, but 6 if only the quotient
      is rounded to float and the product is not) and y = 408 - ulp (float 17,
      double 16), next to a 16-match cluster that supports the float cell.
      The right cell is computed once and reused by the four grid types, so
      one wrong cell drops the probe in all of them.
    - Probe D: the query point is at a left-grid border, x = 416 - ulp. Four
      decoy matches share its cell in the double reading and in the
      half-shifted grids, so only the float reading of the unshifted grid
      keeps it.
    - Tie, twice: a left cell with 3 matches into right cell 274 and 3 into
      275 (then 265 and 264, listed in the other order). verifyCellPairs'
      strict ``>`` scan picks the lower index, which a neighbour cell
      supports; the higher one would fail the threshold.
    - Threshold: a 12-match corner cell plus 4 decoys next to it gives a
      threshold of exactly 6 * sqrt(16 / 4) = 12 for a score of 12, kept
      because the test is ``score < thresh``.

    Every point of the last two groups sits in the top-left quarter of its
    cell, so the half-shifted grid types see the same cells. Four scattered
    matches without any support complete the set, so ``kept`` is a proper
    subset. No image is involved: the points are the input.
    """
    cv2, np = tc.cv2, tc.np
    below = lambda v: float(np.nextafter(np.float32(v), np.float32(0)))  # noqa: E731
    kp1, kp2, matches = [], [], []

    def add(p, q):
        kp1.append(cv2.KeyPoint(float(p[0]), float(p[1]), 7))
        kp2.append(cv2.KeyPoint(float(q[0]), float(q[1]), 7))
        matches.append(cv2.DMatch(len(kp1) - 1, len(kp2) - 1, 0))

    def cluster(xs, ys):
        for y in ys:
            for x in xs:
                add((x, y), (x, y))

    cluster([420, 425, 430, 435], [245, 250, 255, 260])
    add((430, 252), (below(416), 252))  # probe A
    cluster([228, 233, 238, 243], [245, 250, 255, 260])
    add((238, 252), (224, 252))  # probe B
    cluster([100, 105, 110, 115], [410, 415, 420, 425])
    add((108, 418), (108, below(408)))  # probe C
    cluster([436, 440, 444, 447], [170, 174, 178, 182])
    for x in (402, 406, 410, 414):
        add((x, 176), (100, 100))  # decoys
    add((below(416), 176), (440, 176))  # probe D
    for p in [(450, 314), (454, 318), (458, 322)]:
        add(p, p)  # tie: left cell (14, 13) -> right cell 274 = (14, 13)
    for p, q in [((452, 316), (482, 316)), ((456, 320), (486, 320)), ((460, 314), (490, 314))]:
        add(p, q)  # tie: left cell (14, 13) -> right cell 275 = (15, 13)
    cluster([482, 486, 490], [313, 319])  # supports 274 -> 274 from cell 275
    # the same tie, its two halves listed in the other order (a port whose
    # tie-break depends on the visiting order fails one of the two)
    for p, q in [((130, 316), (162, 316)), ((134, 320), (166, 320)), ((138, 314), (170, 314))]:
        add(p, q)  # tie: left cell (4, 13) -> right cell 265 = (5, 13)
    for p in [(132, 314), (136, 318), (140, 322)]:
        add(p, p)  # tie: left cell (4, 13) -> right cell 264 = (4, 13)
    cluster([162, 166, 170], [313, 319])  # supports 264 -> 264 from cell 265
    cluster([610, 613, 616, 619], [457, 461, 465])  # threshold: corner cell 399
    for x in (578, 582, 586, 590):
        add((x, 460), (200, 300))  # threshold: decoys in cell 398
    for p, q in [((30, 30), (600, 400)), ((600, 30), (40, 300)), ((320, 100), (500, 50)), ((50, 200), (300, 450))]:
        add(p, q)

    size = (640, 480)
    payload = gms_payload(tc, "gms-boundaries", size, size, kp1, kp2, matches, False, False)
    params = {
        "points": "hand-placed at float-sensitive cell borders, see gms_boundaries()",
        "withRotation": False,
        "withScale": False,
        "thresholdFactor": GMS_THRESHOLD_FACTOR,
    }
    return envelope(tc, "matchGMS", params, payload)


# ---------------------------------------------------------------------------
# Synthetic GMS geometry: gms-synth-* and gms-coverage
# ---------------------------------------------------------------------------
#
# Random or hand-placed points under an exact transform, instead of ORB on
# the scene. Every coordinate is a quarter pixel (exact in float32, short in
# JSON) strictly inside its image, where gms.filter and OpenCV agree. Zooms
# are about the image centre on the same canvas: GMS normalises each view by
# its own size, so resizing the whole image would be the identity to it.


def quarter(v: float) -> float:
    """``v`` rounded to a quarter pixel."""
    return round(v * 4) / 4


def quarter_inside(v: float, limit: int) -> float:
    """``v`` rounded to a quarter pixel and kept inside ``[0, limit)``."""
    return min(max(quarter(v), 0.0), limit - 0.25)


def rotation_about(tc: Toolchain, centre, angle: float):
    """Rotation by ``angle`` degrees about ``centre``, as ``cv2.getRotationMatrix2D`` (counter-clockwise)."""
    m = tc.cv2.getRotationMatrix2D(centre, angle, 1.0)
    return lambda x, y: (m[0, 0] * x + m[0, 1] * y + m[0, 2], m[1, 0] * x + m[1, 1] * y + m[1, 2])


def zoom_about(centre, factor: float):
    """Zoom by ``factor`` about ``centre``: content grows (> 1) or shrinks (< 1) on the same canvas."""
    return lambda x, y: (centre[0] + (x - centre[0]) * factor, centre[1] + (y - centre[1]) * factor)


def synthetic_pairs(rng, n: int, share: float, sample, transform, size2):
    """View-1 points, view-2 points and matches of one random synthetic case.

    ``sample(rng)`` draws a view-1 point. A ``share`` of the points are
    inliers: the view-2 point is ``transform`` of the view-1 point and the
    match is ``(i, i)``. An inlier whose point leaves view 2 gets no match.
    Every other point is an outlier: a random view-2 point, and a match to a
    random train index, so a train point may be claimed by several matches
    (many-to-one, as brute-force matching without cross-check produces).
    Returns the two point lists, the ``(queryIdx, trainIdx)`` pairs in query
    order, and the number of inliers.
    """
    w2, h2 = size2
    pts1 = [sample(rng) for _ in range(n)]
    chosen = rng.random(n) < share
    pts2, pairs = [], []
    for i in range(n):
        if chosen[i]:
            x, y = (quarter(v) for v in transform(*pts1[i]))
            if 0 <= x < w2 and 0 <= y < h2:
                pts2.append((x, y))
                pairs.append((i, i))
                continue
        pts2.append((quarter_inside(rng.random() * w2, w2), quarter_inside(rng.random() * h2, h2)))
    inliers = len(pairs)
    train = rng.integers(0, n, size=n)
    for i in range(n):
        if not chosen[i]:
            pairs.append((i, int(train[i])))
    pairs.sort()  # query order
    return pts1, pts2, pairs, inliers


def to_cv(tc: Toolchain, pts1, pts2, pairs):
    """cv2 KeyPoints and DMatches (distance 0, which GMS ignores) for points and index pairs."""
    cv2 = tc.cv2
    kp1 = [cv2.KeyPoint(x, y, 7) for x, y in pts1]
    kp2 = [cv2.KeyPoint(x, y, 7) for x, y in pts2]
    return kp1, kp2, [cv2.DMatch(q, t, 0) for q, t in pairs]


def uniform_in(lo, hi, size):
    """A sampler of quarter-pixel points uniform in the box ``[lo, hi)`` of an image of ``size``."""
    return lambda rng: (
        quarter_inside(lo[0] + rng.random() * (hi[0] - lo[0]), size[0]),
        quarter_inside(lo[1] + rng.random() * (hi[1] - lo[1]), size[1]),
    )


def disc_about(centre, radius: float):
    """A sampler of quarter-pixel points uniform in a disc."""

    def sample(rng):
        r, t = radius * math.sqrt(rng.random()), 2 * math.pi * rng.random()
        return quarter(centre[0] + r * math.cos(t)), quarter(centre[1] + r * math.sin(t))

    return sample


def gms_case(tc: Toolchain, name, size1, size2, pts1, pts2, pairs, with_rotation, with_scale, threshold_factor):
    """Run matchGMS on quarter-pixel points and ``(queryIdx, trainIdx)`` pairs; return the payload."""
    kp1, kp2, matches = to_cv(tc, pts1, pts2, pairs)
    return gms_payload(tc, name, size1, size2, kp1, kp2, matches, with_rotation, with_scale, threshold_factor)


# gms-synth-*: one dense fixture per search path, N points of view 1, each with
# its own seed and inlier share. The plan asked for a 60 % share everywhere;
# with it the rotation paths keep too few matches (a 40 deg rotation spreads a
# cell's inliers over several right cells, so fewer cells clear the
# threshold), so they use 80 %. Each zoom is chosen so that a right grid other
# than 20x20 wins. The README ("GMS fixtures") records the numbers.
GMS_SYNTH_SIZE = (640, 480)
GMS_SYNTH_POINTS = 800
GMS_SYNTH_MIN_KEPT = 100
GMS_SYNTH_SHIFT = (18, -11)  # the same shift as gms-default
GMS_SYNTH_ANGLE = 40.0  # degrees, counter-clockwise, about the image centre
GMS_SYNTH_ZOOM = 0.7  # gms-synth-scale, about the centre, same canvas: the 28x28 grid wins
GMS_SYNTH_ROTATION_ZOOM = math.sqrt(2)  # gms-synth-rotation-scale, after the rotation: the 10x10 grid wins
GMS_SYNTH = {
    # name: (seed, inlier share, withRotation, withScale)
    "gms-synth-default": (1341, 0.6, False, False),
    "gms-synth-rotation": (1342, 0.8, True, False),
    "gms-synth-scale": (1343, 0.6, False, True),
    "gms-synth-rotation-scale": (1344, 0.8, True, True),
}


def gen_gms_synthetic(tc: Toolchain, scene: Scene) -> dict:
    """``gms.filter`` vs ``matchGMS`` on synthetic geometry, one fixture per search path.

    The ORB fixtures above pin the rotation and scale searches only weakly:
    the committed scene yields 199 keypoints, and under rotation or scale ORB
    finds so few correct matches that the 6-8 kept ones are coincidences.
    These fixtures make the geometry dense and exact instead: view 1 is
    GMS_SYNTH_POINTS points uniform in 640x480, and view 2, on the same
    canvas, is a shift, a rotation about the centre, a zoom about the centre,
    or the rotation then the zoom (see ``synthetic_pairs`` for the inliers and
    outliers). ``scene`` is unused: there is no image.
    """
    np = tc.np
    width, height = GMS_SYNTH_SIZE
    centre = (width / 2, height / 2)
    rotate = rotation_about(tc, centre, GMS_SYNTH_ANGLE)
    zoom = zoom_about(centre, GMS_SYNTH_ZOOM)
    rotation_zoom = zoom_about(centre, GMS_SYNTH_ROTATION_ZOOM)
    transforms = {
        # name: (point map, how)
        "gms-synth-default": (
            lambda x, y: (x + GMS_SYNTH_SHIFT[0], y + GMS_SYNTH_SHIFT[1]),
            f"translation dx={GMS_SYNTH_SHIFT[0]} dy={GMS_SYNTH_SHIFT[1]}",
        ),
        "gms-synth-rotation": (rotate, f"rotation {GMS_SYNTH_ANGLE:g} deg about {centre} (getRotationMatrix2D)"),
        "gms-synth-scale": (zoom, f"zoom x{GMS_SYNTH_ZOOM:g} about {centre}, same canvas"),
        "gms-synth-rotation-scale": (
            lambda x, y: rotation_zoom(*rotate(x, y)),
            f"rotation {GMS_SYNTH_ANGLE:g} deg, then zoom x{GMS_SYNTH_ROTATION_ZOOM:g}, about {centre}, same canvas",
        ),
    }

    out = {}
    for name, (seed, share, with_rotation, with_scale) in GMS_SYNTH.items():
        transform, how = transforms[name]
        rng = np.random.default_rng(seed)
        n = GMS_SYNTH_POINTS
        sample = uniform_in((0, 0), (width, height), (width, height))
        size = (width, height)
        pts1, pts2, pairs, inliers = synthetic_pairs(rng, n, share, sample, transform, size)
        claimed = np.bincount([t for _, t in pairs], minlength=n)
        assert (claimed > 1).any(), f"{name}: no many-to-one match"

        payload = gms_case(tc, name, size, size, pts1, pts2, pairs, with_rotation, with_scale, GMS_THRESHOLD_FACTOR)
        assert len(payload["kept"]) >= GMS_SYNTH_MIN_KEPT, f"{name}: kept {len(payload['kept'])}"
        print(
            f"{name}: {inliers} inliers, {len(pairs) - inliers} outliers, "
            f"{int((claimed > 1).sum())} train points claimed more than once"
        )

        params = {
            "view1": f"{n} points uniform in {width}x{height}, quarter pixels, numpy.random.default_rng({seed})",
            "view2": how,
            "inliers": f"share {share:g} of view 1, match (i, i); an inlier leaving view 2 gets no match",
            "outliers": "random view-2 point, match to a random trainIdx (many-to-one allowed)",
            "withRotation": with_rotation,
            "withScale": with_scale,
            "thresholdFactor": GMS_THRESHOLD_FACTOR,
        }
        out[name] = envelope(tc, "matchGMS", params, payload)
    return out


# gms-coverage: many small cases, so that the oracle sees every branch of the
# search win at least once. Each case has its own generator,
# default_rng([GMS_COVERAGE_SEED, case number]).
GMS_COVERAGE_SEED = 1345
GMS_COVERAGE_POINTS = 150  # per rotation, scale and combined case
GMS_COVERAGE_SHARE = 0.8  # their inlier share
GMS_COVERAGE_RANDOM_CASES = 16


def block(cells_x, cells_y, cell):
    """Four points in the top-left quarter of each cell of a block of left cells.

    In the top-left quarter, the half-cell shifts of grid types 2-4 leave a
    point in the same cell, so all four grid types see the same block.
    """
    offsets = ((3, 3), (7, 3), (3, 7), (7, 7))  # pixels, for 24-pixel cells
    return [(cx * cell + dx, cy * cell + dy) for cy in cells_y for cx in cells_x for dx, dy in offsets]


def gen_gms_coverage(tc: Toolchain, scene: Scene) -> dict:
    """``gms.filter`` vs ``matchGMS`` on small cases that cover every branch of the search.

    The other fixtures exercise few of the 40 (scale, rotation) passes as a
    winner. Here, each in its own case:

    - rotation (withRotation): view 2 rotated about the centre of a square
      canvas in 45 deg steps, so each of the 8 rotation patterns wins once;
    - scale (withScale): view 2 zoomed about the centre by 2, sqrt 2, 1,
      1/sqrt 2 and 1/2, so each right grid (10, 14, 20, 28, 40) wins once;
    - combined (both flags): a rotation with a zoom, twice;
    - two hand-placed ties: a 3x3 block of cells kept by pattern 1 against
      one kept by the 90 deg pattern, and (both flags) one kept at scale 0
      under the 90 deg pattern against one kept by the 10x10 grid under
      pattern 1. OpenCV keeps the first pass that reaches the best count,
      in scale-outer, rotation-inner order, so these pin both the strict
      ``>`` and the loop order;
    - random: GMS_COVERAGE_RANDOM_CASES cases with random image sizes, flags,
      thresholdFactor in [2, 8], transforms and inlier shares.

    Which pass wins was checked with a literal port of gms.cpp outside the
    repository; the README lists it. The payload is a list of cases, each the
    usual GMS payload plus a ``label``.
    """
    np = tc.np
    cases = []

    def add(label, size1, size2, pts1, pts2, pairs, with_rotation, with_scale, threshold_factor=GMS_THRESHOLD_FACTOR):
        name = f"gms-coverage[{len(cases)}] {label}"
        case = gms_case(tc, name, size1, size2, pts1, pts2, pairs, with_rotation, with_scale, threshold_factor)
        case["label"] = label
        cases.append(case)

    def rng():
        return np.random.default_rng([GMS_COVERAGE_SEED, len(cases)])

    def random_case(label, size, sample, transform, with_rotation, with_scale):
        pts1, pts2, pairs, _ = synthetic_pairs(rng(), GMS_COVERAGE_POINTS, GMS_COVERAGE_SHARE, sample, transform, size)
        add(label, size, size, pts1, pts2, pairs, with_rotation, with_scale)

    # rotation: 8 cases, square canvas so 90 deg steps map cells onto cells
    square = (480, 480)
    sc = (240.0, 240.0)
    for k in range(8):
        angle = 45 * k
        random_case(f"rotation {angle} deg", square, disc_about(sc, 104), rotation_about(tc, sc, angle), True, False)

    # scale: 5 cases, a zoom about the centre on the same canvas
    vga = (640, 480)
    vc = (320.0, 240.0)
    box = uniform_in((190, 145), (450, 335), vga)  # stays inside under a zoom by 2
    zooms = (("2", 2.0), ("sqrt 2", math.sqrt(2)), ("1", 1.0), ("1/sqrt 2", 1 / math.sqrt(2)), ("1/2", 0.5))
    for label, factor in zooms:
        random_case(f"zoom x{label}", vga, box, zoom_about(vc, factor), False, True)

    # combined: rotation and zoom, both flags
    for angle, label, factor, size, sample in (
        (90, "1/2", 0.5, square, disc_about(sc, 104)),
        (180, "sqrt 2", math.sqrt(2), vga, box),
    ):
        centre = (size[0] / 2, size[1] / 2)
        rotate, zoom = rotation_about(tc, centre, angle), zoom_about(centre, factor)
        both = lambda x, y, r=rotate, z=zoom: z(*r(x, y))  # noqa: E731
        random_case(f"rotation {angle} deg, zoom x{label}", size, sample, both, True, True)

    # tie, withRotation: block A (identity) against block B (90 deg about its centre)
    cell = 24  # 480 / 20
    a = block(range(3, 6), range(3, 6), cell)
    b = block(range(13, 16), range(13, 16), cell)
    turn = rotation_about(tc, (14.5 * cell, 14.5 * cell), 90)
    pts1 = a + b
    pts2 = a + [tuple(quarter(v) for v in turn(*p)) for p in b]
    pairs = [(i, i) for i in range(len(pts1))]
    add("tie: pattern 1 against the 90 deg pattern, 36 matches each", square, square, pts1, pts2, pairs, True, False)

    # tie, both flags: block A (90 deg, scale 0) against block B (zoom x2 about the centre, 10x10 grid)
    a = block(range(2, 5), range(2, 5), cell)
    b = block(range(10, 13), range(10, 13), cell)
    turn = rotation_about(tc, (3.5 * cell, 3.5 * cell), 90)
    grow = zoom_about(sc, 2.0)
    pts1 = a + b
    pts2 = [tuple(quarter(v) for v in turn(*p)) for p in a] + [tuple(quarter(v) for v in grow(*p)) for p in b]
    pairs = [(i, i) for i in range(len(pts1))]
    add("tie: scale 0 x 90 deg pattern against scale 1 x pattern 1", square, square, pts1, pts2, pairs, True, True)

    # random configurations
    sizes = [(640, 480), (320, 240), (480, 480), (1000, 300), (200, 600), (1920, 1080), (641, 479), (37, 23)]
    for k in range(GMS_COVERAGE_RANDOM_CASES):
        r = rng()
        while True:  # redraw until the case keeps a proper, non-empty subset
            w1, h1 = sizes[int(r.integers(len(sizes)))]
            if r.random() < 0.3:  # view 2 of another size
                resize = float(r.uniform(0.5, 2.0))
                w2, h2 = max(1, round(w1 * resize)), max(1, round(h1 * resize))
            else:
                w2, h2 = w1, h1
            with_rotation, with_scale = bool(r.random() < 0.5), bool(r.random() < 0.5)
            threshold_factor = round(float(r.uniform(2, 8)), 2)
            angle = round(float(r.uniform(-180, 180)), 1) if r.random() < 0.7 else 0.0
            factor = float(r.choice([1.0, 0.5, 0.7071, 1.4142, 2.0, round(float(r.uniform(0.5, 2.0)), 3)]))
            share = round(float(r.uniform(0.3, 0.95)), 2)
            n = int(r.integers(100, 201))
            centre = (w1 / 2, h1 / 2)
            rotate, zoom = rotation_about(tc, centre, angle), zoom_about(centre, factor)
            # a random box of view 1, at least a third of each side
            bw, bh = float(r.uniform(w1 / 3, w1)), float(r.uniform(h1 / 3, h1))
            x0, y0 = float(r.uniform(0, w1 - bw)), float(r.uniform(0, h1 - bh))
            sample = uniform_in((x0, y0), (x0 + bw, y0 + bh), (w1, h1))

            def transform(x, y, rotate=rotate, zoom=zoom, sx=w2 / w1, sy=h2 / h1):
                u, v = zoom(*rotate(x, y))
                return u * sx, v * sy

            pts1, pts2, pairs, _ = synthetic_pairs(r, n, share, sample, transform, (w2, h2))
            kp1, kp2, matches = to_cv(tc, pts1, pts2, pairs)
            kept = match_gms(tc, (w1, h1), (w2, h2), kp1, kp2, matches, with_rotation, with_scale, threshold_factor)
            if 0 < len(kept) < len(pairs):
                break
        flags = "+".join(f for f, on in (("rotation", with_rotation), ("scale", with_scale)) if on) or "default"
        label = (
            f"random {k}: {w1}x{h1} -> {w2}x{h2}, {flags}, rotate {angle:g} deg, zoom x{factor:g}, "
            f"share {share:g}, thresholdFactor {threshold_factor:g}"
        )
        add(label, (w1, h1), (w2, h2), pts1, pts2, pairs, with_rotation, with_scale, threshold_factor)

    params = {
        "cases": len(cases),
        "points": "quarter pixels; see gen_gms_coverage() and each case's label",
        "seeds": f"numpy.random.default_rng([{GMS_COVERAGE_SEED}, case number])",
    }
    return {"gms-coverage": envelope(tc, "matchGMS", params, cases)}


def match_gms(tc: Toolchain, size1, size2, kp1, kp2, matches, with_rotation, with_scale, threshold_factor) -> list:
    """Run matchGMS; return the indices into ``matches`` of what it kept, ascending."""
    gms = tc.cv2.xfeatures2d.matchGMS(
        size1,
        size2,
        kp1,
        kp2,
        matches,
        withRotation=with_rotation,
        withScale=with_scale,
        thresholdFactor=threshold_factor,
    )
    # matchGMS returns a subsequence of its input, so walk it in order.
    key = lambda m: (m.queryIdx, m.trainIdx, m.distance)  # noqa: E731
    kept, j = [], 0
    for g in gms:
        while key(matches[j]) != key(g):
            j += 1
        kept.append(j)
        j += 1
    return kept


def gms_payload(
    tc: Toolchain,
    name,
    size1,
    size2,
    kp1,
    kp2,
    matches,
    with_rotation,
    with_scale,
    threshold_factor=GMS_THRESHOLD_FACTOR,
) -> dict:
    """Run matchGMS and build the payload ``tests/reference/gms.opencv.test.ts`` reads."""
    kept = match_gms(tc, size1, size2, kp1, kp2, matches, with_rotation, with_scale, threshold_factor)
    # A fixture that keeps nothing (or everything) would pass a filter that
    # returns [] (or its input).
    assert 0 < len(kept) < len(matches), f"{name}: kept {len(kept)} of {len(matches)}"
    assert all(m.distance == int(m.distance) for m in matches)
    print(f"{name}: kept {len(kept)} of {len(matches)} ({len(kp1)} / {len(kp2)} keypoints)")

    return {
        "size1": list(size1),
        "size2": list(size2),
        "with_rotation": with_rotation,
        "with_scale": with_scale,
        "threshold_factor": threshold_factor,
        "keypoints1": [list(k.pt) for k in kp1],
        "keypoints2": [list(k.pt) for k in kp2],
        "matches": [[m.queryIdx, m.trainIdx, int(m.distance)] for m in matches],
        "kept": kept,
    }


# ---------------------------------------------------------------------------
# TEBLID (#135)
# ---------------------------------------------------------------------------

TEBLID_SEED = 1351
TEBLID_RANDOM_INTERIOR = 60  # per scale factor
TEBLID_RANDOM_MIXED = 80  # per scale factor
TEBLID_RANDOM_TINY = 40  # per scale factor
TEBLID_TINY = 24  # side of the top-left crop of the scene
TEBLID_SCALES = (1.0, 5.0)
TEBLID_BITS = (("teblid-p256", 256, "TEBLID_SIZE_256_BITS"), ("teblid-p512", 512, "TEBLID_SIZE_512_BITS"))
TEBLID_ORB_SIZES = [31 * 1.2**level for level in range(8)]
# ORB-like and FAST-like sizes, per scale factor, for the random cases.
TEBLID_SIZES = {1.0: [7, 10, 16, 31, TEBLID_ORB_SIZES[1], TEBLID_ORB_SIZES[3], 60], 5.0: [2, 3, 5, 7, 10, 14]}
# The largest boxRadius in teblid.p256.hpp and teblid.p512.hpp is 7, and every patch
# coordinate lies in [1, 30] (read once from the pinned upstream tables):
# https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/teblid.p512.hpp
TEBLID_MAX_BOX_RADIUS = 7
TEBLID_PATCH = 32
TEBLID_DEGREES_TO_RADS = 0.017453292519943295  # CV_DEGREES_TO_RADS


def teblid_roundnum(np, v) -> int:
    """``CV_ROUNDNUM(x) = (int)(x + 0.5f)``: a float32 add, then truncation toward zero."""
    return int(np.float32(v + np.float32(0.5)))


def teblid_border(np, size, scale_factor):
    """The margin ``b`` of OpenCV's ``isKeypointInTheBorder``, in float32 and in its order."""
    f = np.float32
    s = f(scale_factor) * f(size) / f(2 * TEBLID_PATCH)
    return f(TEBLID_PATCH) * s * f(1.75)


def teblid_in_border(np, kp, width, height, scale_factor) -> bool:
    """``isKeypointInTheBorder`` for ``kp = (x, y, size, angle)``."""
    f = np.float32
    x, y = f(kp[0]), f(kp[1])
    b = teblid_border(np, kp[2], scale_factor)
    return bool(x < b or x + b >= f(width) or y < b or y + b >= f(height))


def teblid_fast_path_out_of_buffer(np, kp, width, height, scale_factor) -> bool:
    """True when the fast path could read outside the integral buffer (undefined behaviour).

    For a keypoint that is not in the border, ``computeBoxDiffsDescriptor`` indexes
    ``integralPtr[(y +/- r) * (W + 1) + (x +/- r)]`` with no bounds check. This
    replicates ``rectifyABWL`` in float32 (each operation rounded, in C++ order)
    for the four corners (1, 1), (30, 1), (1, 30), (30, 30) of the table range, which bound every table coordinate
    (all in [1, 30]), and widens the result by the largest boxRadius. The lowest and
    highest flat index that can be read are compared with ``[0, (W + 1) * (H + 1))``.
    A read that wraps to an adjacent row stays inside the buffer and is defined, so it
    does not count. The screen is conservative: it may drop a keypoint whose real reads
    all stay inside.
    """
    f = np.float32
    x, y, size, angle = f(kp[0]), f(kp[1]), f(kp[2]), f(kp[3])
    s = f(scale_factor) * size / (f(0.5) * f(2 * TEBLID_PATCH))
    n = f(TEBLID_PATCH)
    if angle == f(-1):
        m00, m01 = s, f(0)
        m02 = f(-0.5) * s * n + x
        m10, m11 = f(0), s
        m12 = -s * f(0.5) * n + y
    else:
        if angle >= 0:
            rad = float(angle) * TEBLID_DEGREES_TO_RADS  # a double, as in C++
            cosine, sine = f(math.cos(rad)), f(math.sin(rad))
        else:
            cosine, sine = f(1), f(0)
        m00, m01 = s * cosine, -s * sine
        m02 = (-s * cosine + s * sine) * n * f(0.5) + x
        m10, m11 = s * sine, s * cosine
        m12 = (-s * sine - s * cosine) * n * f(0.5) + y
    radius = teblid_roundnum(np, s * f(TEBLID_MAX_BOX_RADIUS))
    xs, ys = [], []
    for px, py in ((1, 1), (30, 1), (1, 30), (30, 30)):
        px, py = f(px), f(py)
        xs.append(teblid_roundnum(np, m00 * px + m01 * py + m02))
        ys.append(teblid_roundnum(np, m10 * px + m11 * py + m12))
    stride = width + 1
    lowest = (min(ys) - radius) * stride + (min(xs) - radius)
    highest = (max(ys) + radius + 1) * stride + (max(xs) + radius + 1)
    return lowest < 0 or highest >= stride * (height + 1)


class TeblidCandidates:
    """The cases of one image and scale factor, with the undefined-behaviour keypoints screened out."""

    def __init__(self, np, width, height, scale_factor):
        self.np, self.width, self.height, self.scale_factor = np, width, height, scale_factor
        self.cases = []  # [(name, [[x, y, size, angle]])]
        self.screened = []  # [(case name, [x, y, size, angle])]
        self.in_border = {}  # case name -> number of keypoints on the clamped path

    def add(self, name, kps):
        np = self.np
        kept = []
        for raw in kps:
            kp = [np.float32(v).item() for v in raw]
            border = teblid_in_border(np, kp, self.width, self.height, self.scale_factor)
            if not border and teblid_fast_path_out_of_buffer(np, kp, self.width, self.height, self.scale_factor):
                self.screened.append((name, kp))
                continue
            kept.append(kp)
            self.in_border[name] = self.in_border.get(name, 0) + int(border)
        self.cases.append((name, kept))


def teblid_edge_values(np, b, limit):
    """Float32 positions around the margin ``b`` on the low side and ``limit - b`` on the high side.

    Returns ``(low, high)``, each three float32 values: on the low side (x < b is
    border) the last border value, the first non-border one (exactly at ``b``) and
    the next; on the high side (x + b >= limit is border) the second to last
    non-border value, the last one and the first border value.
    """
    f = np.float32
    up, down = f(np.inf), f(-np.inf)
    low = [np.nextafter(f(b), down), f(b), np.nextafter(f(b), up)]
    last_in = f(f(limit) - b)
    while f(last_in + b) >= f(limit):
        last_in = np.nextafter(last_in, down)
    while f(np.nextafter(last_in, up) + b) < f(limit):
        last_in = np.nextafter(last_in, up)
    high = [np.nextafter(last_in, down), last_in, np.nextafter(last_in, up)]
    return low, high


def teblid_build_cases(np, rng, width, height, scale_factor, tiny: bool) -> TeblidCandidates:
    cand = TeblidCandidates(np, width, height, scale_factor)
    sizes = TEBLID_SIZES[scale_factor]
    cx, cy = 0.5 * width + 0.25, 0.5 * height + 0.75

    def random_angle():
        return -1.0 if rng.random() < 0.25 else float(rng.uniform(0.0, 360.0))

    if tiny:
        tiny_sizes = [7, 10, 12, 16] if scale_factor == 1.0 else [1.5, 2, 3, 4, 5]
        kps = []
        for _ in range(TEBLID_RANDOM_TINY):
            size = tiny_sizes[int(rng.integers(len(tiny_sizes)))]
            kps.append([rng.uniform(0, width), rng.uniform(0, height), size, random_angle()])
        cand.add("tiny", kps)
        return cand

    # Anywhere in the image: border and interior mixed.
    kps = []
    for _ in range(TEBLID_RANDOM_MIXED):
        size = sizes[int(rng.integers(len(sizes)))]
        kps.append([rng.uniform(0, width), rng.uniform(0, height), size, random_angle()])
    cand.add("random-mixed", kps)

    # Inside the margin: always the fast path.
    kps = []
    for _ in range(TEBLID_RANDOM_INTERIOR):
        size = sizes[int(rng.integers(len(sizes)))]
        b = float(teblid_border(np, size, scale_factor))
        kps.append([rng.uniform(b + 1, width - b - 1), rng.uniform(b + 1, height - b - 1), size, random_angle()])
    cand.add("interior", kps)

    # The angle edge cases, on a FAST-like and an ORB-like size.
    angle_size = 31 if scale_factor == 1.0 else 7
    angles = [-1, 0, 90, 359.9, 45, 180, 270, 0.1, 1, 123.456]
    cand.add("angles", [[cx, cy, angle_size, a] for a in angles])

    # ORB-like sizes 31 * 1.2^l, FAST's 7 and a large size (int-to-float rounding).
    kps = []
    for size in TEBLID_ORB_SIZES + [7, 150]:
        kps.append([cx, cy, size, -1])
        kps.append([cx, cy, size, float(rng.uniform(0.0, 360.0))])
    cand.add("sizes", kps)

    # Each border: just inside, exactly at and just beyond the margin, upright and rotated.
    border_sizes = [7, 31, 60] if scale_factor == 1.0 else [3, 7, 15]
    sides = {"left": [], "right": [], "top": [], "bottom": []}
    for size in border_sizes:
        b = teblid_border(np, size, scale_factor)
        x_low, x_high = teblid_edge_values(np, b, width)
        y_low, y_high = teblid_edge_values(np, b, height)
        for angle in (-1, 90, 37.5):
            sides["left"] += [[x, cy, size, angle] for x in x_low]
            sides["right"] += [[x, cy, size, angle] for x in x_high]
            sides["top"] += [[cx, y, size, angle] for y in y_low]
            sides["bottom"] += [[cx, y, size, angle] for y in y_high]
    for side, kps in sides.items():
        cand.add(f"border-{side}", kps)

    # The four corners, a small and a large keypoint, upright and rotated.
    corners = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1), (0.5, 0.5), (width - 0.5, height - 0.5)]
    kps = []
    for size in (31, 150):
        for x, y in corners:
            kps.append([x, y, size, -1])
            kps.append([x, y, size, 213.7])
    cand.add("corners", kps)
    return cand


def gen_teblid(tc: Toolchain, scene: Scene) -> dict:
    """``cv2.xfeatures2d.TEBLID_create(scale_factor, n_bits).compute`` at 256 and 512 bits.

    The keypoints are fixed float32 inputs, shared by both fixtures. Keypoints whose
    fast path would read outside OpenCV's integral buffer are screened out before
    ``compute`` is called (see ``teblid_fast_path_out_of_buffer``); nothing else is
    ever dropped.
    """
    np, cv2 = tc.np, tc.cv2
    tiny = np.ascontiguousarray(scene.image[:TEBLID_TINY, :TEBLID_TINY])
    tiny_sha = hashlib.sha256(tiny.tobytes()).hexdigest()
    images = {"scene": scene.image, "tiny": tiny}

    rng = np.random.default_rng(TEBLID_SEED)
    plan = []  # (image key, scale factor, TeblidCandidates)
    for scale_factor in TEBLID_SCALES:
        for key in ("scene", "tiny"):
            h, w = images[key].shape
            plan.append((key, scale_factor, teblid_build_cases(np, rng, w, h, scale_factor, key == "tiny")))

    screened = sum(len(c.screened) for _, _, c in plan)
    kept = sum(len(kps) for _, _, c in plan for _, kps in c.cases)
    print(f"teblid: {kept + screened} candidate keypoints, {screened} screened out (undefined fast-path reads)")
    for key, scale_factor, c in plan:
        for name, kp in c.screened:
            print(f"  screened {key} sf={scale_factor} {name}: {kp}")
        for name, kps in c.cases:
            print(f"  {key} sf={scale_factor} {name}: {len(kps)} keypoints, {c.in_border.get(name, 0)} on the border path")

    out = {}
    for name, n_bits, enum_name in TEBLID_BITS:
        cases = []
        for key, scale_factor, c in plan:
            detector = cv2.xfeatures2d.TEBLID_create(scale_factor, getattr(cv2.xfeatures2d, enum_name))
            for case_name, kps in c.cases:
                if not kps:
                    sys.exit(f"error: teblid case {case_name} is empty after screening")
                given = [cv2.KeyPoint(*kp) for kp in kps]
                returned, descriptors = detector.compute(images[key], given)
                if len(returned) != len(given) or any(
                    (a.pt, a.size, a.angle) != (b.pt, b.size, b.angle) for a, b in zip(returned, given)
                ):
                    sys.exit(f"error: TEBLID compute changed the keypoints of {case_name} ({key}, {scale_factor})")
                if descriptors.shape != (len(kps), n_bits // 8) or descriptors.dtype != np.uint8:
                    sys.exit(f"error: unexpected descriptor array {descriptors.shape} {descriptors.dtype}")
                cases.append(
                    {
                        "name": case_name,
                        "image": key,
                        "scale_factor": scale_factor,
                        "keypoints": kps,
                        "descriptors": [row.tobytes().hex() for row in descriptors],
                    }
                )
        params = {
            "bits": n_bits,
            "opencv_call": "cv2.xfeatures2d.TEBLID_create(scale_factor, n_bits).compute(image, keypoints)",
            "seed": TEBLID_SEED,
            "tiny": f"top-left {TEBLID_TINY}x{TEBLID_TINY} crop of the scene",
            "tiny_sha256": tiny_sha,
            "screened_out": screened,
            "screened_candidates": kept + screened,
            "screen_max_box_radius": TEBLID_MAX_BOX_RADIUS,
        }
        out[name] = envelope(tc, "teblid", params, {"cases": cases}, scene)
    return out


# `--only <key>` selects one entry; no `--only` runs them all.
GENERATORS = {
    "integral": gen_integral,
    "gms": gen_gms,
    "gms-synthetic": gen_gms_synthetic,
    "gms-coverage": gen_gms_coverage,
    "teblid": gen_teblid,
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
