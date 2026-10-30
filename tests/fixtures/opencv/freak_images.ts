/*
 *  freak_images.ts
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
import jsfeatNext from "../../../src/jsfeatNext";
import { matrix_t } from "../../../src/matrix_t/matrix_t";
import { loadScene } from "./loader";

/**
 * The input images of `freak.json` (#80), rebuilt from the committed scene and
 * the integer-only texture recipe of the README ("FREAK fixture"). Each is
 * checked against the sha256 the fixture records before it is used.
 */

/** Row-major 8-bit pixels with their dimensions. */
export interface Gray {
    width: number;
    height: number;
    data: Uint8Array;
}

export const sha256Hex = (bytes: Uint8Array): string => createHash("sha256").update(bytes).digest("hex");

/** `freak_texture()` of the generator: hash, 3x3 box blur with clamped edges, contrast stretch. */
export function freakTexture(width: number, height: number, seed: number): Gray {
    const n = new Int32Array(width * height);
    const s = Math.imul(seed, 0xc2b2ae35) >>> 0;
    for (let y = 0; y < height; ++y) {
        const hy = Math.imul(y, 0x85ebca6b) >>> 0;
        for (let x = 0; x < width; ++x) {
            let h = ((Math.imul(x, 0x9e3779b1) >>> 0) ^ hy ^ s) >>> 0;
            h = (h ^ (h >>> 15)) >>> 0;
            h = Math.imul(h, 0x2c1b3c6d) >>> 0;
            h = (h ^ (h >>> 12)) >>> 0;
            h = Math.imul(h, 0x297a2d39) >>> 0;
            h = (h ^ (h >>> 15)) >>> 0;
            n[y * width + x] = h & 255;
        }
    }
    const b = new Int32Array(width * height);
    let lo = Infinity;
    let hi = -Infinity;
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            let sum = 0;
            for (let dy = -1; dy <= 1; ++dy) {
                const yy = Math.min(height - 1, Math.max(0, y + dy));
                for (let dx = -1; dx <= 1; ++dx) {
                    sum += n[yy * width + Math.min(width - 1, Math.max(0, x + dx))];
                }
            }
            const v = Math.floor((sum + 4) / 9);
            b[y * width + x] = v;
            if (v < lo) lo = v;
            if (v > hi) hi = v;
        }
    }
    const data = new Uint8Array(width * height);
    for (let i = 0; i < data.length; ++i) data[i] = Math.floor(((b[i] - lo) * 255) / (hi - lo));
    return { width, height, data };
}

/** `numpy.rot90(a)`: counter-clockwise, so the result is `height` wide and `width` high. */
export function rot90(img: Gray): Gray {
    const { width: W, height: H, data } = img;
    const out = new Uint8Array(W * H);
    for (let r = 0; r < W; ++r) {
        for (let c = 0; c < H; ++c) out[r * H + c] = data[c * W + (W - 1 - r)];
    }
    return { width: H, height: W, data: out };
}

/** Copies `img` into a fresh U8C1 matrix. */
export function toMatrix(img: Gray): matrix_t {
    const m = new matrix_t(img.width, img.height, jsfeatNext.U8C1_t);
    m.data.set(img.data);
    return m;
}

/** The parts of `freak.json`'s `meta.params` that describe its images. */
export interface FreakImageParams {
    scene_rot90_sha256: string;
    images: { texture: { width: number; height: number; seed: number; sha256: string } };
}

export type FreakImageName = "scene" | "scene_rot90" | "flat" | "texture" | "texture_rot90";

/** Builds every image of the fixture, throwing if a rebuilt one does not hash to the recorded sha256. */
export function freakImages(params: FreakImageParams): Record<FreakImageName, matrix_t> {
    const s = loadScene();
    const scene: Gray = { width: s.width, height: s.height, data: s.data };
    const sceneRot = rot90(scene);
    if (sha256Hex(sceneRot.data) !== params.scene_rot90_sha256) {
        throw new Error("freak fixture: rebuilt scene_rot90 does not match meta.params.scene_rot90_sha256");
    }
    const t = params.images.texture;
    const texture = freakTexture(t.width, t.height, t.seed);
    if (sha256Hex(texture.data) !== t.sha256) {
        throw new Error("freak fixture: rebuilt texture does not match meta.params.images.texture.sha256");
    }
    const flat: Gray = { width: 96, height: 96, data: new Uint8Array(96 * 96).fill(100) };
    return {
        scene: toMatrix(scene),
        scene_rot90: toMatrix(sceneRot),
        flat: toMatrix(flat),
        texture: toMatrix(texture),
        texture_rot90: toMatrix(rot90(texture)),
    };
}
