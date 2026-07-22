import { default as jsfeatNext } from '../core/core';
import { matrix_t } from '../matrix_t/matrix_t';
/**
 * An image pyramid: level 0 holds the full-resolution image and each
 * subsequent level halves the previous one via `imgproc.pyrdown`. Consumed
 * by `optical_flow_lk.track` for coarse-to-fine tracking.
 *
 * Mirrors `jsfeat.pyramid_t` from the original library.
 * (Moved out of the src/jsfeatNext.ts monolith in issue #47.)
 */
export declare class pyramid_t extends jsfeatNext {
    /** Number of pyramid levels. */
    levels: number;
    /** The level images: `data[i]` is a {@link matrix_t} of size `w>>i` × `h>>i`. */
    data: matrix_t[];
    /** Bound `imgproc.pyrdown` used to build the levels. */
    private pyrdown;
    constructor(levels: number);
    /**
     * Allocates the per-level matrices for a base image of
     * `start_w`×`start_h` (level `i` gets `start_w>>i` × `start_h>>i`).
     *
     * @param start_w   Level-0 width. @param start_h Level-0 height.
     * @param data_type Packed type signature for the level images (e.g. `U8_t | C1_t`).
     */
    allocate(start_w: number, start_h: number, data_type: number): void;
    /**
     * Fills the pyramid from `input`: optionally copies it into level 0,
     * then repeatedly downsamples to populate the remaining levels.
     * {@link allocate} must have been called first.
     *
     * @param input            Level-0 source image.
     * @param skip_first_level When `true` (the default) level 0 is assumed
     *                         to already hold the input and is not copied.
     */
    build(input: matrix_t, skip_first_level: boolean): void;
}
