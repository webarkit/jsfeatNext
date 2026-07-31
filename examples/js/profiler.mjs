/*
 *  profiler.mjs
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

/**
 * ES-module wrapper around the classic `js/profiler.js` (issue #79).
 *
 * `profiler.js` is a global-assigning IIFE, so it cannot be `import`ed
 * directly. Rather than duplicate its ~140 lines, this module loads that file
 * once and re-exports the global it defines — keeping a single source of truth
 * for the profiler used by both the UMD examples (script tag) and the ESM ones
 * (`import { profiler } from "./js/profiler.mjs"`).
 *
 * Unlike `compatibility.js` (an obsolete browser shim, retired from the ESM
 * examples), the profiler is still genuinely useful: it is the stopwatch /
 * ring-buffer FPS+timing readout the demos display.
 */

// Load the legacy script once; it assigns `window.profiler`.
if (typeof window.profiler === "undefined") {
    await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = new URL("./profiler.js", import.meta.url).href;
        script.onload = resolve;
        script.onerror = () => reject(new Error("failed to load js/profiler.js"));
        document.head.appendChild(script);
    });
}

/** Stopwatch + ring-buffer profiler: `add`/`new_frame`/`start`/`stop`/`log`. */
export const profiler = window.profiler;

export default profiler;
