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

    python scripts/gen-opencv-fixtures.py [--only integral|gms|gms-synthetic]

``--only integral`` writes ``integral-scene.json``; ``--only gms`` writes the
five ORB and hand-placed GMS fixtures (``gms-default``, ``gms-rotation``,
``gms-scale``, ``gms-rotation-scale``, ``gms-boundaries``) and
``--only gms-synthetic`` the four ``gms-synth-*.json`` (#134). With no
``--only`` every fixture is regenerated. Output is deterministic: the same pinned toolchain and the same
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


# Synthetic GMS fixtures: random points under an exact transform, one per
# search path. N points of view 1, the share of them that are inliers, and the
# seed of each fixture's own numpy generator. The plan asked for a 60 % share
# everywhere; with it gms-synth-rotation keeps 45 matches, under
# GMS_SYNTH_MIN_KEPT, and gms-synth-rotation-scale 101, at the limit (a 40 deg
# rotation spreads a cell's inliers over several right cells, so fewer cells
# clear the threshold), so both rotation paths use 80 %. The README ("GMS
# fixtures") records the numbers.
GMS_SYNTH_SIZE = (640, 480)
GMS_SYNTH_POINTS = 800
GMS_SYNTH_MIN_KEPT = 100
GMS_SYNTH_SHIFT = (18, -11)  # the same shift as gms-default
GMS_SYNTH_ANGLE = 40.0  # degrees, counter-clockwise, about the image centre
GMS_SYNTH_SCALE = 0.7
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
    These fixtures make the geometry dense and exact instead.

    View 1 is GMS_SYNTH_POINTS points, uniformly random in 640x480. A share
    of them are inliers: their view-2 partner is the point under the path's
    exact transform (a shift, a rotation about the image centre, a x0.7
    resize, or the rotation then the resize), and the match is ``(i, i)``. An
    inlier whose partner leaves view 2 gets no match at all. Every other
    point is an outlier: its view-2 point is random, and its match goes to a
    random train index, so some train points are claimed by several matches
    (many-to-one, as brute-force matching without cross-check produces).
    All coordinates are float32 and lie strictly inside their image, where
    ``gms.filter`` and OpenCV agree. ``scene`` is unused: there is no image.
    """
    cv2, np = tc.cv2, tc.np
    f32 = np.float32
    width, height = GMS_SYNTH_SIZE
    centre = (width / 2, height / 2)
    rot = cv2.getRotationMatrix2D(centre, GMS_SYNTH_ANGLE, 1.0)
    factor = GMS_SYNTH_SCALE
    scaled_size = (round(width * factor), round(height * factor))

    def rotate(x, y):
        return rot[0, 0] * x + rot[0, 1] * y + rot[0, 2], rot[1, 0] * x + rot[1, 1] * y + rot[1, 2]

    transforms = {
        # name: (point map, size2, how)
        "gms-synth-default": (
            lambda x, y: (x + GMS_SYNTH_SHIFT[0], y + GMS_SYNTH_SHIFT[1]),
            (width, height),
            f"translation dx={GMS_SYNTH_SHIFT[0]} dy={GMS_SYNTH_SHIFT[1]}",
        ),
        "gms-synth-rotation": (
            rotate,
            (width, height),
            f"rotation {GMS_SYNTH_ANGLE:g} deg about {centre} (getRotationMatrix2D)",
        ),
        "gms-synth-scale": (
            lambda x, y: (x * factor, y * factor),
            scaled_size,
            f"resize x{factor:g}",
        ),
        "gms-synth-rotation-scale": (
            lambda x, y: tuple(v * factor for v in rotate(x, y)),
            scaled_size,
            f"rotation {GMS_SYNTH_ANGLE:g} deg about {centre}, then resize x{factor:g}",
        ),
    }

    def inside(v, limit):
        """float32 ``v`` clamped below ``limit``: float32 rounding may reach the edge."""
        x = f32(v)
        return float(x if x < limit else np.nextafter(f32(limit), f32(0)))

    out = {}
    for name, (seed, share, with_rotation, with_scale) in GMS_SYNTH.items():
        transform, (w2, h2), how = transforms[name]
        rng = np.random.default_rng(seed)
        n = GMS_SYNTH_POINTS
        pts1 = [(inside(rng.random() * width, width), inside(rng.random() * height, height)) for _ in range(n)]
        chosen = rng.random(n) < share

        pts2, inlier = [], []
        for i in range(n):
            if chosen[i]:
                x, y = (float(f32(v)) for v in transform(*pts1[i]))
                if 0 <= x < w2 and 0 <= y < h2:
                    pts2.append((x, y))
                    inlier.append(True)
                    continue
            pts2.append((inside(rng.random() * w2, w2), inside(rng.random() * h2, h2)))
            inlier.append(False)

        matches = []
        for i in range(n):
            if inlier[i]:
                matches.append(cv2.DMatch(i, i, 0))
            elif not chosen[i]:
                matches.append(cv2.DMatch(i, int(rng.integers(0, n)), 0))
            # else: an inlier whose partner left view 2, no match

        claimed = np.bincount([m.trainIdx for m in matches], minlength=n)
        assert (claimed > 1).any(), f"{name}: no many-to-one match"
        kp1 = [cv2.KeyPoint(x, y, 7) for x, y in pts1]
        kp2 = [cv2.KeyPoint(x, y, 7) for x, y in pts2]
        payload = gms_payload(tc, name, (width, height), (w2, h2), kp1, kp2, matches, with_rotation, with_scale)
        assert len(payload["kept"]) >= GMS_SYNTH_MIN_KEPT, f"{name}: kept {len(payload['kept'])}"
        print(
            f"{name}: {sum(inlier)} inliers, {len(matches) - sum(inlier)} outliers, "
            f"{int((claimed > 1).sum())} train points claimed more than once"
        )

        params = {
            "view1": f"{n} points uniform in {width}x{height}, float32, numpy.random.default_rng({seed})",
            "view2": how,
            "inliers": f"share {share:g} of view 1, match (i, i); an inlier leaving view 2 gets no match",
            "outliers": "random view-2 point, match to a random trainIdx (many-to-one allowed)",
            "withRotation": with_rotation,
            "withScale": with_scale,
            "thresholdFactor": GMS_THRESHOLD_FACTOR,
        }
        out[name] = envelope(tc, "matchGMS", params, payload)
    return out


def gms_payload(tc: Toolchain, name, size1, size2, kp1, kp2, matches, with_rotation, with_scale) -> dict:
    """Run matchGMS and build the payload ``tests/reference/gms.opencv.test.ts`` reads."""
    gms = tc.cv2.xfeatures2d.matchGMS(
        size1,
        size2,
        kp1,
        kp2,
        matches,
        withRotation=with_rotation,
        withScale=with_scale,
        thresholdFactor=GMS_THRESHOLD_FACTOR,
    )

    # matchGMS returns a subsequence of its input, so walk it in order.
    key = lambda m: (m.queryIdx, m.trainIdx, m.distance)  # noqa: E731
    kept, j = [], 0
    for g in gms:
        while key(matches[j]) != key(g):
            j += 1
        kept.append(j)
        j += 1
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
        "threshold_factor": GMS_THRESHOLD_FACTOR,
        "keypoints1": [list(k.pt) for k in kp1],
        "keypoints2": [list(k.pt) for k in kp2],
        "matches": [[m.queryIdx, m.trainIdx, int(m.distance)] for m in matches],
        "kept": kept,
    }


# `--only <key>` selects one entry; no `--only` runs them all.
GENERATORS = {
    "integral": gen_integral,
    "gms": gen_gms,
    "gms-synthetic": gen_gms_synthetic,
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
