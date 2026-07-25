/**
 * Shared helpers for the ESM jsfeatNext examples (issue #79).
 *
 * The camera-based demos all repeated the same webcam wiring and the same
 * canvas drawing routines. They live here once instead of being copy-pasted
 * into every example.
 *
 * Only genuinely duplicated code belongs in this module. Per-demo controls
 * (dat.GUI options, thresholds, radii, …) stay in each example, because they
 * differ from demo to demo.
 *
 * Note: ES modules are not served over `file://` — open the examples through
 * a local HTTP server (e.g. `npx serve .`).
 */

/**
 * Starts the webcam and resolves once the video has real dimensions.
 *
 * Replaces the ~50 lines of `compatibility.getUserMedia` + `loadeddata`
 * retry-loop boilerplate that each demo used to carry. The old
 * `js/compatibility.js` shim is not used here: it only tried the long-removed
 * callback-style `navigator.getUserMedia` and vendor prefixes, so on any
 * current browser it fell through to its own error stub.
 *
 * @param {HTMLVideoElement} video   The (usually hidden) video element to drive.
 * @param {object} [constraints]     `getUserMedia` constraints. Defaults to video-only.
 * @returns {Promise<{width: number, height: number}>} The real video dimensions.
 */
export async function loadCamera(video, constraints = { audio: false, video: true }) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;

    // `loadedmetadata` is the point where videoWidth/videoHeight are known.
    if (!video.videoWidth || !video.videoHeight) {
        await new Promise((resolve) => video.addEventListener("loadedmetadata", resolve, { once: true }));
    }
    await video.play();

    return { width: video.videoWidth, height: video.videoHeight };
}

/**
 * Stops the webcam and releases the device (call on page unload).
 *
 * @param {HTMLVideoElement} video The video element returned by {@link loadCamera}.
 */
export function stopCamera(video) {
    const stream = video.srcObject;
    if (stream) {
        for (const track of stream.getTracks()) track.stop();
        video.srcObject = null;
    }
    video.pause();
}

/**
 * Draws a 3×3 cross at each detected corner, directly into the 32-bit view of
 * the canvas pixel buffer. Was duplicated verbatim in five demos.
 *
 * @param {Array<{x: number, y: number}>} corners Detected keypoints.
 * @param {number} count  How many entries of `corners` are valid.
 * @param {Uint32Array} img  32-bit view over the ImageData buffer.
 * @param {number} step   Row stride in pixels (the image width).
 * @param {number} [color] Packed ABGR pixel. Defaults to opaque green.
 */
export function renderCorners(corners, count, img, step, color = 0xff00ff00) {
    for (let i = 0; i < count; ++i) {
        const off = corners[i].x + corners[i].y * step;
        img[off] = color;
        img[off - 1] = color;
        img[off + 1] = color;
        img[off - step] = color;
        img[off + step] = color;
    }
}

/**
 * Expands a single-channel grayscale image into the RGBA canvas buffer.
 * Was duplicated verbatim in three demos.
 *
 * @param {Uint8Array} src Grayscale source pixels (`matrix_t.data`).
 * @param {Uint32Array} dst 32-bit view over the destination ImageData buffer.
 * @param {number} sw Source width.  @param {number} sh Source height.
 * @param {number} dw Destination row stride in pixels.
 */
export function renderMonoImage(src, dst, sw, sh, dw) {
    const alpha = 0xff << 24;
    for (let i = 0; i < sh; ++i) {
        for (let j = 0; j < sw; ++j) {
            const pix = src[i * sw + j];
            dst[i * dw + j] = alpha | (pix << 16) | (pix << 8) | pix;
        }
    }
}

/**
 * Shows the demos' "WebRTC not available" panel and hides the canvas/log,
 * mirroring the error path every camera demo used to hand-roll with jQuery.
 *
 * @param {string} message HTML for the notice.
 */
export function showCameraError(message = "<h4>WebRTC not available.</h4>") {
    for (const id of ["canvas", "log"]) {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    }
    const notice = document.getElementById("no_rtc");
    if (notice) {
        notice.innerHTML = message;
        notice.style.display = "";
    }
}
