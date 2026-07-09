/**
 * A 2D feature keypoint with position, detector response, pyramid level and
 * orientation. Used by the detectors (`fast_corners`, `yape`, `yape06`) as
 * output slots and by `orb.describe` as descriptor anchors.
 *
 * Mirrors `jsfeat.keypoint_t` from the original library.
 *
 * @example
 * ```ts
 * // pre-allocate a corner pool for a detector
 * const corners = [];
 * for (let i = 0; i < 500; i++) corners.push(new keypoint_t(0, 0, 0, 0, -1));
 * ```
 */
export class keypoint_t {
    /** X (column) coordinate in pixels. */
    public x: number;
    /** Y (row) coordinate in pixels. */
    public y: number;
    /** Detector response / corner strength (higher = stronger). */
    public score: number;
    /** Pyramid level the keypoint was detected on. */
    public level: number;
    /** Orientation in radians; -1 when not yet computed. */
    public angle: number;

    /**
     * @param x     X (column) coordinate. Default 0.
     * @param y     Y (row) coordinate. Default 0.
     * @param score Detector response. Default 0.
     * @param level Pyramid level. Default 0.
     * @param angle Orientation in radians. Default -1 (unset).
     */
    constructor(x: number = 0, y: number = 0, score: number = 0, level: number = 0, angle: number = -1.0) {
        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}
