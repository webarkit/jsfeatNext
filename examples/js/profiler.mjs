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
