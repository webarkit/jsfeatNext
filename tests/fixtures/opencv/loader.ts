/*
 *  loader.ts
 *  jsfeatNext
 *
 *  This file is part of jsfeatNext - WebARKit.
 *
 *  SPDX-License-Identifier: LGPL-3.0-or-later
 *
 *  jsfeatNext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jsfeatNext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with jsfeatNext.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Loader for the OpenCV ground-truth fixtures (#132).
 *
 * Every fixture is a JSON "envelope": a common `meta` block plus an
 * algorithm-specific `payload`. When a fixture was computed from an image, `meta`
 * names that image and pins its sha256, and {@link loadFixture} refuses to hand
 * the fixture over unless the image on disk still hashes to that value. A stale
 * fixture therefore fails loudly instead of asserting against the wrong input.
 *
 * Uses `node:fs` and `node:crypto` only: no dependency, and no image decoder
 * (the input image is a binary PGM, parsed by {@link loadScene}).
 */

/** Absolute path of `tests/fixtures/opencv`, where the fixtures and the scene live. */
export const FIXTURE_DIR: string = dirname(fileURLToPath(import.meta.url));

/** The scene file committed next to the fixtures (see `dump-scene.test.ts`). */
const SCENE_FILE = "scene-640x480.pgm";

/** The block every fixture shares, whatever its payload. */
export interface FixtureMeta {
    /** `cv2.__version__` of the run that produced the fixture. */
    opencv_version: string;
    /** Which algorithm the fixture pins, e.g. `"integral"`. */
    algorithm: string;
    /** The parameters of that run, so the fixture documents what it pins. */
    params: Record<string, unknown>;
    /** File name, inside the fixture directory, of the input image. */
    image?: string;
    /** sha256 (hex) of that file's bytes. Required when `image` is set. */
    sha256?: string;
}

/** A parsed fixture file: `meta` is common, `payload` is the algorithm's own shape. */
export interface Fixture<P> {
    meta: FixtureMeta;
    payload: P;
}

const sha256Hex = (bytes: Uint8Array): string => createHash("sha256").update(bytes).digest("hex");

/**
 * Reads `<dir>/<name>.json`. If `meta.image` is set, throws unless the sha256 of
 * that file equals `meta.sha256`.
 */
export function loadFixture<P>(name: string, dir: string = FIXTURE_DIR): Fixture<P> {
    const file = join(dir, `${name}.json`);
    const fixture = JSON.parse(readFileSync(file, "utf8")) as Fixture<P>;
    const { meta } = fixture;
    if (!meta || typeof meta.opencv_version !== "string") {
        throw new Error(`${name}.json has no meta.opencv_version: not an OpenCV fixture envelope`);
    }

    if (meta.image !== undefined) {
        if (!meta.sha256) {
            throw new Error(
                `${name}.json names an image (${meta.image}) but carries no meta.sha256 to check it against`
            );
        }
        // `image` is a file name inside the fixture directory, never a path
        if (basename(meta.image) !== meta.image) {
            throw new Error(`${name}.json: meta.image must be a bare file name, got ${meta.image}`);
        }
        const actual = sha256Hex(readFileSync(join(dir, meta.image)));
        if (actual !== meta.sha256) {
            throw new Error(
                `${name}.json: sha256 of ${meta.image} is ${actual}, but the fixture was generated from ` +
                    `${meta.sha256}. The fixture is stale: regenerate it (see README.md).`
            );
        }
    }
    return fixture;
}

/**
 * Parses the committed scene: a binary PGM (`P5`, maxval 255). The header is
 * three whitespace-separated integers after the magic number, then exactly one
 * whitespace byte, then `width * height` raw pixel bytes.
 */
export function loadScene(dir: string = FIXTURE_DIR): { width: number; height: number; data: Uint8Array } {
    const bytes = readFileSync(join(dir, SCENE_FILE));
    let pos = 0;

    // next whitespace-delimited header token, skipping `#` comments to end of line
    const token = (): string => {
        for (;;) {
            while (pos < bytes.length && isSpace(bytes[pos])) pos++;
            if (bytes[pos] !== 0x23 /* # */) break;
            while (pos < bytes.length && bytes[pos] !== 0x0a) pos++;
        }
        const start = pos;
        while (pos < bytes.length && !isSpace(bytes[pos])) pos++;
        if (start === pos) throw new Error(`${SCENE_FILE}: truncated PGM header`);
        return bytes.toString("latin1", start, pos);
    };

    const magic = token();
    if (magic !== "P5") throw new Error(`${SCENE_FILE}: expected a binary PGM (P5), got ${magic}`);
    const width = Number(token());
    const height = Number(token());
    const maxval = Number(token());
    if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) {
        throw new Error(`${SCENE_FILE}: invalid PGM dimensions`);
    }
    if (maxval !== 255) throw new Error(`${SCENE_FILE}: expected maxval 255, got ${maxval}`);

    pos++; // the single whitespace byte that ends the header
    const data = new Uint8Array(bytes.subarray(pos)); // a copy, detached from the file buffer
    if (data.length !== width * height) {
        throw new Error(`${SCENE_FILE}: expected ${width * height} pixel bytes, found ${data.length}`);
    }
    return { width, height, data };
}

function isSpace(b: number): boolean {
    return b === 0x20 || (b >= 0x09 && b <= 0x0d);
}
