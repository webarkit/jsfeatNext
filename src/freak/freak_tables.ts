/*
 *  freak_tables.ts
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
 *  Portions of this file are ported to TypeScript from OpenCV,
 *  opencv_contrib/modules/xfeatures2d/src/freak.cpp at tag 4.10.0
 *  (https://github.com/opencv/opencv_contrib/blob/4.10.0/modules/xfeatures2d/src/freak.cpp),
 *  licensed under the BSD 3-Clause terms reproduced below and in
 *  LICENSES/BSD-3-Clause-FREAK.txt. This file is a modified version of that
 *  source. FREAK: A. Alahi, R. Ortiz and P. Vandergheynst, "FREAK: Fast Retina
 *  Keypoint", CVPR 2012.
 *
 *  Copyright (C) 2011-2012  Signal processing laboratory 2, EPFL,
 *  Kirell Benzi (kirell.benzi@epfl.ch),
 *  Raphael Ortiz (raphael.ortiz@a3.epfl.ch)
 *  Alexandre Alahi (alexandre.alahi@epfl.ch)
 *  and Pierre Vandergheynst (pierre.vandergheynst@epfl.ch)
 *
 *  Redistribution and use in source and binary forms, with or without modification,
 *  are permitted provided that the following conditions are met:
 *
 *   * Redistribution's of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *
 *   * Redistribution's in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *   * The name of the copyright holders may not be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 *
 *  This software is provided by the copyright holders and contributors "as is" and
 *  any express or implied warranties, including, but not limited to, the implied
 *  warranties of merchantability and fitness for a particular purpose are disclaimed.
 *  In no event shall the Intel Corporation or contributors be liable for any direct,
 *  indirect, incidental, special, exemplary, or consequential damages
 *  (including, but not limited to, procurement of substitute goods or services;
 *  loss of use, data, or profits; or business interruption) however caused
 *  and on any theory of liability, whether in contract, strict liability,
 *  or tort (including negligence or otherwise) arising in any way out of
 *  the use of this software, even if advised of the possibility of such damage.
 *
 */

/** Number of selected description pairs (bits in the 64-byte descriptor). */
export const FREAK_NB_PAIRS = 512;

/** Number of orientation pairs used by the dominant-gradient estimate. */
export const FREAK_NB_ORIENPAIRS = 45;

/**
 * OpenCV's default selected pairs (`FREAK_DEF_PAIRS`, 512 entries): each value
 * indexes the triangular enumeration of point pairs (i, j), i in 1..42, j < i,
 * at pair index i(i-1)/2 + j. Verbatim from the upstream literal.
 */
export const FREAK_DEF_PAIRS = /* @__PURE__ */ new Int16Array([
    404, 431, 818, 511, 181, 52, 311, 874, 774, 543, 719, 230, 417, 205, 11, 560, 149, 265, 39, 306, 165, 857, 250, 8,
    61, 15, 55, 717, 44, 412, 592, 134, 761, 695, 660, 782, 625, 487, 549, 516, 271, 665, 762, 392, 178, 796, 773, 31,
    672, 845, 548, 794, 677, 654, 241, 831, 225, 238, 849, 83, 691, 484, 826, 707, 122, 517, 583, 731, 328, 339, 571,
    475, 394, 472, 580, 381, 137, 93, 380, 327, 619, 729, 808, 218, 213, 459, 141, 806, 341, 95, 382, 568, 124, 750,
    193, 749, 706, 843, 79, 199, 317, 329, 768, 198, 100, 466, 613, 78, 562, 783, 689, 136, 838, 94, 142, 164, 679, 219,
    419, 366, 418, 423, 77, 89, 523, 259, 683, 312, 555, 20, 470, 684, 123, 458, 453, 833, 72, 113, 253, 108, 313, 25,
    153, 648, 411, 607, 618, 128, 305, 232, 301, 84, 56, 264, 371, 46, 407, 360, 38, 99, 176, 710, 114, 578, 66, 372,
    653, 129, 359, 424, 159, 821, 10, 323, 393, 5, 340, 891, 9, 790, 47, 0, 175, 346, 236, 26, 172, 147, 574, 561, 32,
    294, 429, 724, 755, 398, 787, 288, 299, 769, 565, 767, 722, 757, 224, 465, 723, 498, 467, 235, 127, 802, 446, 233,
    544, 482, 800, 318, 16, 532, 801, 441, 554, 173, 60, 530, 713, 469, 30, 212, 630, 899, 170, 266, 799, 88, 49, 512,
    399, 23, 500, 107, 524, 90, 194, 143, 135, 192, 206, 345, 148, 71, 119, 101, 563, 870, 158, 254, 214, 276, 464, 332,
    725, 188, 385, 24, 476, 40, 231, 620, 171, 258, 67, 109, 844, 244, 187, 388, 701, 690, 50, 7, 850, 479, 48, 522, 22,
    154, 12, 659, 736, 655, 577, 737, 830, 811, 174, 21, 237, 335, 353, 234, 53, 270, 62, 182, 45, 177, 245, 812, 673,
    355, 556, 612, 166, 204, 54, 248, 365, 226, 242, 452, 700, 685, 573, 14, 842, 481, 468, 781, 564, 416, 179, 405, 35,
    819, 608, 624, 367, 98, 643, 448, 2, 460, 676, 440, 240, 130, 146, 184, 185, 430, 65, 807, 377, 82, 121, 708, 239,
    310, 138, 596, 730, 575, 477, 851, 797, 247, 27, 85, 586, 307, 779, 326, 494, 856, 324, 827, 96, 748, 13, 397, 125,
    688, 702, 92, 293, 716, 277, 140, 112, 4, 80, 855, 839, 1, 413, 347, 584, 493, 289, 696, 19, 751, 379, 76, 73, 115,
    6, 590, 183, 734, 197, 483, 217, 344, 330, 400, 186, 243, 587, 220, 780, 200, 793, 246, 824, 41, 735, 579, 81, 703,
    322, 760, 720, 139, 480, 490, 91, 814, 813, 163, 152, 488, 763, 263, 425, 410, 576, 120, 319, 668, 150, 160, 302,
    491, 515, 260, 145, 428, 97, 251, 395, 272, 252, 18, 106, 358, 854, 485, 144, 550, 131, 133, 378, 68, 102, 104, 58,
    361, 275, 209, 697, 582, 338, 742, 589, 325, 408, 229, 28, 304, 191, 189, 110, 126, 486, 211, 547, 533, 70, 215,
    670, 249, 36, 581, 389, 605, 331, 518, 442, 822,
]);

/**
 * Expands pair indices into the point indices of `allPairs`, where i runs
 * 1..42, j < i and pair index = i(i-1)/2 + j. Returns the i half when
 * `first` is true, the j half otherwise.
 *
 * Each export below calls it directly, with the pure annotation, rather than
 * reading a member off one shared result: a property read on a call result
 * is an expression a bundler must keep, which would pin the whole pair table
 * into every bundle (#137).
 */
function expand(pairs: Int16Array, first: boolean): Uint8Array {
    const out = new Uint8Array(pairs.length);
    for (let k = 0; k < pairs.length; k++) {
        const p = pairs[k];
        let i = 1;
        while (((i + 1) * i) / 2 <= p) i++;
        out[k] = first ? i : p - (i * (i - 1)) / 2;
    }
    return out;
}

/** First point index of each selected pair (always greater than the second). */
export const FREAK_PAIR_I: Uint8Array = /* @__PURE__ */ expand(FREAK_DEF_PAIRS, true);

/** Second point index of each selected pair. */
export const FREAK_PAIR_J: Uint8Array = /* @__PURE__ */ expand(FREAK_DEF_PAIRS, false);

/** First point index of each of the 45 orientation pairs, in buildPattern's order. */
export const FREAK_ORIEN_I = /* @__PURE__ */ new Uint8Array([
    0, 1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 13, 14, 15, 16, 17, 18, 19, 20, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 30, 31, 32, 36, 37, 38,
]);

/** Second point index of each of the 45 orientation pairs. */
export const FREAK_ORIEN_J = /* @__PURE__ */ new Uint8Array([
    3, 4, 5, 2, 3, 4, 5, 0, 1, 9, 10, 11, 8, 9, 10, 11, 6, 7, 15, 16, 17, 14, 15, 16, 17, 12, 13, 21, 22, 23, 20, 21,
    22, 23, 18, 19, 27, 28, 29, 33, 34, 35, 39, 40, 41,
]);
