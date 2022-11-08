import { matrix_t } from '../matrix_t/matrix_t'
import { point_t } from '../point_t/point_t'
export interface IHomography2d {
  run(from: point_t[], to: point_t[], model: matrix_t, count: number): number
  error(from: point_t[], to: point_t[], model: matrix_t, err: Int32Array | Float32Array, count: number): void
  check_subset(from: point_t[], to: point_t[], count: number): boolean
}
