import { IHomography2d } from '../homography2d/homography2d'
import { matrix_t } from '../matrix_t/matrix_t'
import { point_t } from '../point_t/point_t'
import { ransac_params_t } from './ransac_params_t'
export class motion_estimator {
  get_subset(kernel: IHomography2d, from: point_t[], to: point_t[], need_cnt: number, max_cnt: number, from_sub: point_t[], to_sub: point_t[]): boolean {
    throw new Error('Method not implemented.');
  }
  find_inliers(kernel: IHomography2d, model: matrix_t, from: point_t[], to: point_t[], count: number, thresh: number, err: Int32Array | Float32Array, mask: number[]): number {
    throw new Error('Method not implemented.');
  }
  ransac(params: ransac_params_t, kernel: any, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean {
    throw new Error('Method not implemented.');
  }
  lmeds(params: ransac_params_t, kernel: any, from: point_t[], to: point_t[], count: number, model: matrix_t, mask: matrix_t, max_iters: number): boolean {
    throw new Error('Method not implemented.');
  }

}
