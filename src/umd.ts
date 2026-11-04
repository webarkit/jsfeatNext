/*
 *  umd.ts
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

import jsfeatNext from "./jsfeatNext";

/**
 * Entry point of the UMD build, `dist/jsfeatNext.js` (issue #137).
 *
 * Default export only. A UMD bundle exposes its exports object as the
 * `jsfeatNext` global and as `module.exports`; built from `src/index.ts`, with
 * its named exports, that object would become `{ default, imgproc, … }` and
 * every `<script>` and `require()` consumer would break. Built from here, it is
 * the namespace itself, exactly as before. Named exports, which only a bundler
 * can use, live in the ESM build (`src/index.ts`). Every member of the
 * namespace is still reachable as `jsfeatNext.<name>`, so `require()` users can
 * destructure it: `const { imgproc } = require("@webarkit/jsfeat-next")`.
 */
export default jsfeatNext;
