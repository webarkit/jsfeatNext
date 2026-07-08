import jsfeatNext from "./core/core";
import { cache } from "./cache/cache";
import { imgproc } from "./imgproc/imgproc";
import { linalg } from "./linalg/linalg";
import { fast_corners } from "./fast_corners/fast_corners";
import { math } from "./math/math";
import matmath from "./matmath/matmath";
import { matrix_t } from "./matrix_t/matrix_t";
import { pyramid_t } from "./pyramid_t/pyramid_t";
import { transform } from "./transform/transform";
import { keypoint_t } from "./keypoint_t/keypoint_t";
import { orb } from "./orb/orb";
import { yape } from "./yape/yape";
import { yape06 } from "./yape06/yape06";
import { ransac_params_t } from "./motion_estimator/ransac_params_t";
import { motion_estimator } from "./motion_estimator/motion_estimator";
import { affine2d, homography2d } from "./motion_model/motion_model";
import { optical_flow_lk } from "./optical_flow_lk/optical_flow_lk";

// Thin aggregator (issue #47): every algorithm lives in its own module under
// src/<module>/, extending the base class from src/core/core.ts. This file
// only attaches the modules to the public jsfeatNext namespace.
export default jsfeatNext;

jsfeatNext.cache = cache;

jsfeatNext.pyramid_t = pyramid_t;

jsfeatNext.transform = transform;

jsfeatNext.matrix_t = matrix_t;

jsfeatNext.keypoint_t = keypoint_t;

jsfeatNext.fast_corners = fast_corners;

jsfeatNext.imgproc = imgproc;

jsfeatNext.math = math;

jsfeatNext.matmath = matmath;

jsfeatNext.linalg = linalg;

jsfeatNext.orb = orb;

jsfeatNext.yape = yape;

jsfeatNext.yape06 = yape06;

jsfeatNext.motion_estimator = motion_estimator;

jsfeatNext.ransac_params_t = ransac_params_t;

jsfeatNext.affine2d = affine2d;

jsfeatNext.homography2d = homography2d;

jsfeatNext.optical_flow_lk = optical_flow_lk;
