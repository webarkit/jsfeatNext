/*
 *  vite.config.mjs
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

import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

/**
 * Tree-shaking demo (#137): the same gaussian blur page, bundled by Vite the
 * way an application would be, once with named imports and once with the
 * default namespace import.
 *
 * One page per build (`--mode named` or `--mode namespace`), never both in one
 * build: a two-page build would move the code they share into a common chunk,
 * and the per-page numbers would no longer be comparable. Both builds write to
 * the same dist/ (the named one, which runs first, empties it), so
 * `vite preview` serves the two pages side by side, byte for byte as built.
 *
 * "@webarkit/jsfeat-next" resolves to the built ESM bundle in ../../dist, which
 * is what an application gets from npm; run `npm run build-ts` first (the
 * `example:treeshake` script does).
 */
export default defineConfig(({ mode }) => {
    const page = mode === "namespace" ? "namespace" : "named";
    return {
        root: fileURLToPath(new URL(".", import.meta.url)),
        base: "./",
        preview: { port: 4173 },
        resolve: {
            alias: {
                "@webarkit/jsfeat-next": fileURLToPath(new URL("../../dist/jsfeatNext.mjs", import.meta.url)),
            },
        },
        build: {
            outDir: "dist",
            emptyOutDir: page === "named",
            minify: true,
            rollupOptions: { input: fileURLToPath(new URL(`${page}.html`, import.meta.url)) },
        },
    };
});
