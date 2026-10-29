/*
 *  demo.js
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

import pinball from "../img/pinball.jpg";

/**
 * The page logic both demos share: load the image, blur it with the `blur`
 * function the page passes in, draw the result, and report how big this page's
 * own JavaScript bundle is. Nothing here touches jsfeatNext, so the two pages
 * differ only in how they import it.
 *
 * @param {string} title  How the page imports the library.
 * @param {(rgba: Uint8ClampedArray, w: number, h: number, radius: number) => Uint8Array} blur
 *        Grayscale + gaussian blur; returns the blurred U8 pixels.
 */
export async function runDemo(title, blur) {
    document.getElementById("title").textContent = title;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const slider = document.getElementById("radius");
    const label = document.getElementById("radius-value");

    // The `load` event, not image.decode(): decode() can stay pending in a
    // background tab, and the demo would never draw.
    const image = new Image();
    await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error(`could not load ${pinball}`));
        image.src = pinball;
    });
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const source = ctx.getImageData(0, 0, image.width, image.height);

    const render = () => {
        const radius = Number(slider.value);
        label.textContent = String(radius);
        const gray = blur(source.data, source.width, source.height, radius);
        const out = ctx.createImageData(source.width, source.height);
        for (let i = 0, p = 0; i < gray.length; i++, p += 4) {
            out.data[p] = out.data[p + 1] = out.data[p + 2] = gray[i];
            out.data[p + 3] = 255;
        }
        ctx.putImageData(out, 0, 0);
    };
    slider.addEventListener("input", render);
    render();

    // This module's own bundle: after `vite build`, import.meta.url is the
    // single minified script holding the page and every bit of the library it
    // kept. Serve it as built (`npm run example:treeshake:preview`, or any
    // static server): a `vite` dev server rewrites the file it hands out.
    const size = document.getElementById("size");
    if (import.meta.env.PROD) {
        const bytes = await (await fetch(import.meta.url)).arrayBuffer();
        // kB = 1000 bytes, as Vite's own build report counts them
        size.textContent = `This page's JavaScript bundle: ${(bytes.byteLength / 1000).toFixed(1)} kB (minified, before gzip).`;
    } else {
        size.textContent = "Dev mode: build it (npm run example:treeshake) to see the bundle size.";
    }
}
