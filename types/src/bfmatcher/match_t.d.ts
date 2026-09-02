/** Public shape of {@link match_t}. */
export interface IMatch_T {
    /** Index into the query descriptor set. */
    queryIdx: number;
    /** Index into the train descriptor set. */
    trainIdx: number;
    /** Hamming distance between the two descriptors. */
    distance: number;
}
/**
 * One descriptor correspondence — the equivalent of OpenCV's `cv::DMatch`.
 * Produced by {@link bfmatcher.match} / {@link bfmatcher.knnMatch}.
 */
export declare class match_t implements IMatch_T {
    queryIdx: number;
    trainIdx: number;
    distance: number;
    constructor(queryIdx?: number, trainIdx?: number, distance?: number);
}
