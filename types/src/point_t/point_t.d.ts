/** Public shape of {@link point_t}. */
interface IPoint_t {
    /** X (column) coordinate in pixels. */
    x: number;
    /** Y (row) coordinate in pixels. */
    y: number;
    /** Pyramid level the point belongs to. */
    level: number;
    /** Detector response / corner strength. */
    score: number;
    /** Feature orientation in radians (-1 when not computed). */
    angle: number;
}
/**
 * A lightweight 2D feature point. Unlike {@link keypoint_t} the fields are
 * not initialized by the constructor — detector code (e.g.
 * `fast_corners.detect`) assigns them directly on pre-allocated arrays of
 * points, so no per-point construction cost is paid in hot loops.
 */
export declare class point_t implements IPoint_t {
    /** X (column) coordinate in pixels. */
    x: number;
    /** Y (row) coordinate in pixels. */
    y: number;
    /** Pyramid level the point belongs to. */
    level: number;
    /** Detector response / corner strength. */
    score: number;
    /** Feature orientation in radians (-1 when not computed). */
    angle: number;
    constructor();
}
export {};
