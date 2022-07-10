(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsfeatNext"] = factory();
	else
		root["jsfeatNext"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cache/cache.js":
/*!****************************!*\
  !*** ./src/cache/cache.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cache)
/* harmony export */ });
/* harmony import */ var _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_utils/_pool_node_t.js */ "./src/node_utils/_pool_node_t.js");


class cache {
    constructor() {
        this._pool_head;
        this._pool_tail;
        this._pool_size = 0;
    }
    allocate(capacity, data_size) {
        this._pool_head = this._pool_tail = new _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_0__["default"](data_size);
        for (var i = 0; i < capacity; ++i) {
            var node = new _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_0__["default"](data_size);
            this._pool_tail = this._pool_tail.next = node;

            this._pool_size++;
        }
    }
    get_buffer(size_in_bytes) {
        // assume we have enough free nodes
        var node = this._pool_head;
        this._pool_head = this._pool_head.next;
        this._pool_size--;

        if (size_in_bytes > node.size) {
            node.resize(size_in_bytes);
        }

        return node;
    }
    put_buffer(node) {
        this._pool_tail = this._pool_tail.next = node;
        this._pool_size++;
    }
}

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSFEAT_CONSTANTS": () => (/* binding */ JSFEAT_CONSTANTS)
/* harmony export */ });
const JSFEAT_CONSTANTS = {
    // CONSTANTS
    EPSILON: 0.0000001192092896,
    FLT_MIN: 1E-37,
    U8_t: 0x0100,
    S32_t: 0x0200,
    F32_t: 0x0400,
    S64_t: 0x0800,
    F64_t: 0x1000,
    C1_t: 0x01,
    C2_t: 0x02,
    C3_t: 0x03,
    C4_t: 0x04,

    // color conversion
    COLOR_RGBA2GRAY: 0,
    COLOR_RGB2GRAY: 1,
    COLOR_BGRA2GRAY: 2,
    COLOR_BGR2GRAY: 3,

    // box blur option
    BOX_BLUR_NOSCALE: 0x01,

    // svd options
    SVD_U_T: 0x01,
    SVD_V_T: 0x02,
}

/***/ }),

/***/ "./src/data_type/data_type.js":
/*!************************************!*\
  !*** ./src/data_type/data_type.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ data_type)
/* harmony export */ });
class data_type {
    constructor() {
        this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);;
    }

    _get_data_type(type) {
        return (type & 0xFF00);
    }

    _get_channel(type) {
        return (type & 0xFF);
    }

    _get_data_type_size(type) {
        return this._data_type_size[(type & 0xFF00) >> 8];
    }
}

/***/ }),

/***/ "./src/imgproc/imgproc.js":
/*!********************************!*\
  !*** ./src/imgproc/imgproc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imgproc)
/* harmony export */ });
/* harmony import */ var _resample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resample.js */ "./src/imgproc/resample.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");


class imgproc {
    constructor() { }
    grayscale(src, w, h, dst, code) {
        // this is default image data representation in browser
        if (typeof code === "undefined") { code = _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY; }
        var x = 0, y = 0, i = 0, j = 0, ir = 0, jr = 0;
        var coeff_r = 4899, coeff_g = 9617, coeff_b = 1868, cn = 4;

        if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            coeff_r = 1868;
            coeff_b = 4899;
        }
        if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
            cn = 3;
        }
        var cn2 = cn << 1, cn3 = (cn * 3) | 0;

        dst.resize(w, h, 1);
        var dst_u8 = dst.data;

        for (y = 0; y < h; ++y, j += w, i += w * cn) {
            for (x = 0, ir = i, jr = j; x <= w - 4; x += 4, ir += cn << 2, jr += 4) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 1] = (src[ir + cn] * coeff_r + src[ir + cn + 1] * coeff_g + src[ir + cn + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 2] = (src[ir + cn2] * coeff_r + src[ir + cn2 + 1] * coeff_g + src[ir + cn2 + 2] * coeff_b + 8192) >> 14;
                dst_u8[jr + 3] = (src[ir + cn3] * coeff_r + src[ir + cn3 + 1] * coeff_g + src[ir + cn3 + 2] * coeff_b + 8192) >> 14;
            }
            for (; x < w; ++x, ++jr, ir += cn) {
                dst_u8[jr] = (src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192) >> 14;
            }
        }
    }
    pyrdown(src, dst, sx, sy) {
        // this is needed for bbf
        if (typeof sx === "undefined") { sx = 0; }
        if (typeof sy === "undefined") { sy = 0; }

        var w = src.cols, h = src.rows;
        var w2 = w >> 1, h2 = h >> 1;
        var _w2 = w2 - (sx << 1), _h2 = h2 - (sy << 1);
        var x = 0, y = 0, sptr = sx + sy * w, sline = 0, dptr = 0, dline = 0;

        dst.resize(w2, h2, src.channel);

        var src_d = src.data, dst_d = dst.data;

        for (y = 0; y < _h2; ++y) {
            sline = sptr;
            dline = dptr;
            for (x = 0; x <= _w2 - 2; x += 2, dline += 2, sline += 4) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] +
                    src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
                dst_d[dline + 1] = (src_d[sline + 2] + src_d[sline + 3] +
                    src_d[sline + w + 2] + src_d[sline + w + 3] + 2) >> 2;
            }
            for (; x < _w2; ++x, ++dline, sline += 2) {
                dst_d[dline] = (src_d[sline] + src_d[sline + 1] +
                    src_d[sline + w] + src_d[sline + w + 1] + 2) >> 2;
            }
            sptr += w << 1;
            dptr += w2;
        }
    }
    // transform is 3x3 or 2x3 matrix_t only first 6 values referenced
    warp_affine(src, dst, transform, fill_value) {
        if (typeof fill_value === "undefined") { fill_value = 0; }
        var src_width = src.cols, src_height = src.rows, dst_width = dst.cols, dst_height = dst.rows;
        var src_d = src.data, dst_d = dst.data;
        var x = 0, y = 0, off = 0, ixs = 0, iys = 0, xs = 0.0, ys = 0.0, a = 0.0, b = 0.0, p0 = 0.0, p1 = 0.0;
        var td = transform.data;
        var m00 = td[0], m01 = td[1], m02 = td[2],
            m10 = td[3], m11 = td[4], m12 = td[5];

        for (var dptr = 0; y < dst_height; ++y) {
            xs = m01 * y + m02;
            ys = m11 * y + m12;
            for (x = 0; x < dst_width; ++x, ++dptr, xs += m00, ys += m10) {
                ixs = xs | 0; iys = ys | 0;

                if (ixs >= 0 && iys >= 0 && ixs < (src_width - 1) && iys < (src_height - 1)) {
                    a = xs - ixs;
                    b = ys - iys;
                    off = src_width * iys + ixs;

                    p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
                    p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);

                    dst_d[dptr] = p0 + b * (p1 - p0);
                }
                else dst_d[dptr] = fill_value;
            }
        }
    }
}

/***/ }),

/***/ "./src/imgproc/resample.js":
/*!*********************************!*\
  !*** ./src/imgproc/resample.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_resample": () => (/* binding */ _resample),
/* harmony export */   "_resample_u8": () => (/* binding */ _resample_u8)
/* harmony export */ });
/* harmony import */ var _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsfeatNext.js */ "./src/jsfeatNext.js");


function _resample_u8 (src, dst, nw, nh) {
    var xofs_count = 0;
    var ch = src.channel, w = src.cols, h = src.rows;
    var src_d = src.data, dst_d = dst.data;
    var scale_x = w / nw, scale_y = h / nh;
    var inv_scale_256 = (scale_x * scale_y * 0x10000) | 0;
    var dx = 0, dy = 0, sx = 0, sy = 0, sx1 = 0, sx2 = 0, i = 0, k = 0, fsx1 = 0.0, fsx2 = 0.0;
    var a = 0, b = 0, dxn = 0, alpha = 0, beta = 0, beta1 = 0;

    var buf_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer((nw * ch) << 2);
    var sum_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer((nw * ch) << 2);
    var xofs_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer((w * 2 * 3) << 2);

    var buf = buf_node.i32;
    var sum = sum_node.i32;
    var xofs = xofs_node.i32;

    for (; dx < nw; dx++) {
        fsx1 = dx * scale_x, fsx2 = fsx1 + scale_x;
        sx1 = (fsx1 + 1.0 - 1e-6) | 0, sx2 = fsx2 | 0;
        sx1 = Math.min(sx1, w - 1);
        sx2 = Math.min(sx2, w - 1);

        if (sx1 > fsx1) {
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = ((sx1 - 1) * ch) | 0;
            xofs[k++] = ((sx1 - fsx1) * 0x100) | 0;
            xofs_count++;
        }
        for (sx = sx1; sx < sx2; sx++) {
            xofs_count++;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (sx * ch) | 0;
            xofs[k++] = 256;
        }
        if (fsx2 - sx2 > 1e-3) {
            xofs_count++;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (sx2 * ch) | 0;
            xofs[k++] = ((fsx2 - sx2) * 256) | 0;
        }
    }

    for (dx = 0; dx < nw * ch; dx++) {
        buf[dx] = sum[dx] = 0;
    }
    dy = 0;
    for (sy = 0; sy < h; sy++) {
        a = w * sy;
        for (k = 0; k < xofs_count; k++) {
            dxn = xofs[k * 3];
            sx1 = xofs[k * 3 + 1];
            alpha = xofs[k * 3 + 2];
            for (i = 0; i < ch; i++) {
                buf[dxn + i] += src_d[a + sx1 + i] * alpha;
            }
        }
        if ((dy + 1) * scale_y <= sy + 1 || sy == h - 1) {
            beta = (Math.max(sy + 1 - (dy + 1) * scale_y, 0.0) * 256) | 0;
            beta1 = 256 - beta;
            b = nw * dy;
            if (beta <= 0) {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = Math.min(Math.max((sum[dx] + buf[dx] * 256) / inv_scale_256, 0), 255);
                    sum[dx] = buf[dx] = 0;
                }
            } else {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = Math.min(Math.max((sum[dx] + buf[dx] * beta1) / inv_scale_256, 0), 255);
                    sum[dx] = buf[dx] * beta;
                    buf[dx] = 0;
                }
            }
            dy++;
        } else {
            for (dx = 0; dx < nw * ch; dx++) {
                sum[dx] += buf[dx] * 256;
                buf[dx] = 0;
            }
        }
    }

    _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.put_buffer(sum_node);
    _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.put_buffer(buf_node);
    _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.put_buffer(xofs_node);
}

function _resample (src, dst, nw, nh) {
    var xofs_count = 0;
    var ch = src.channel, w = src.cols, h = src.rows;
    var src_d = src.data, dst_d = dst.data;
    var scale_x = w / nw, scale_y = h / nh;
    var scale = 1.0 / (scale_x * scale_y);
    var dx = 0, dy = 0, sx = 0, sy = 0, sx1 = 0, sx2 = 0, i = 0, k = 0, fsx1 = 0.0, fsx2 = 0.0;
    var a = 0, b = 0, dxn = 0, alpha = 0.0, beta = 0.0, beta1 = 0.0;

    var buf_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer((nw * ch) << 2);
    var sum_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer((nw * ch) << 2);
    var xofs_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer((w * 2 * 3) << 2);

    var buf = buf_node.f32;
    var sum = sum_node.f32;
    var xofs = xofs_node.f32;

    for (; dx < nw; dx++) {
        fsx1 = dx * scale_x, fsx2 = fsx1 + scale_x;
        sx1 = (fsx1 + 1.0 - 1e-6) | 0, sx2 = fsx2 | 0;
        sx1 = Math.min(sx1, w - 1);
        sx2 = Math.min(sx2, w - 1);

        if (sx1 > fsx1) {
            xofs_count++;
            xofs[k++] = ((sx1 - 1) * ch) | 0;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (sx1 - fsx1) * scale;
        }
        for (sx = sx1; sx < sx2; sx++) {
            xofs_count++;
            xofs[k++] = (sx * ch) | 0;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = scale;
        }
        if (fsx2 - sx2 > 1e-3) {
            xofs_count++;
            xofs[k++] = (sx2 * ch) | 0;
            xofs[k++] = (dx * ch) | 0;
            xofs[k++] = (fsx2 - sx2) * scale;
        }
    }

    for (dx = 0; dx < nw * ch; dx++) {
        buf[dx] = sum[dx] = 0;
    }
    dy = 0;
    for (sy = 0; sy < h; sy++) {
        a = w * sy;
        for (k = 0; k < xofs_count; k++) {
            sx1 = xofs[k * 3] | 0;
            dxn = xofs[k * 3 + 1] | 0;
            alpha = xofs[k * 3 + 2];
            for (i = 0; i < ch; i++) {
                buf[dxn + i] += src_d[a + sx1 + i] * alpha;
            }
        }
        if ((dy + 1) * scale_y <= sy + 1 || sy == h - 1) {
            beta = Math.max(sy + 1 - (dy + 1) * scale_y, 0.0);
            beta1 = 1.0 - beta;
            b = nw * dy;
            if (Math.abs(beta) < 1e-3) {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = sum[dx] + buf[dx];
                    sum[dx] = buf[dx] = 0;
                }
            } else {
                for (dx = 0; dx < nw * ch; dx++) {
                    dst_d[b + dx] = sum[dx] + buf[dx] * beta1;
                    sum[dx] = buf[dx] * beta;
                    buf[dx] = 0;
                }
            }
            dy++;
        } else {
            for (dx = 0; dx < nw * ch; dx++) {
                sum[dx] += buf[dx];
                buf[dx] = 0;
            }
        }
    }
    _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.put_buffer(sum_node);
    _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.put_buffer(buf_node);
    _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.put_buffer(xofs_node);
}

/***/ }),

/***/ "./src/jsfeatNext.js":
/*!***************************!*\
  !*** ./src/jsfeatNext.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jsfeatNext)
/* harmony export */ });
/* harmony import */ var _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_utils/_pool_node_t.js */ "./src/node_utils/_pool_node_t.js");
/* harmony import */ var _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_type/data_type.js */ "./src/data_type/data_type.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_utils/data_t.js */ "./src/node_utils/data_t.js");
/* harmony import */ var _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keypoint_t/keypoint_t.js */ "./src/keypoint_t/keypoint_t.js");
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgproc/imgproc.js */ "./src/imgproc/imgproc.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matmath/matmath.js */ "./src/matmath/matmath.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _pyramid_t_pyramid_t_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pyramid_t/pyramid_t.js */ "./src/pyramid_t/pyramid_t.js");
/* harmony import */ var _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./linalg/linalg.js */ "./src/linalg/linalg.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/constants.js */ "./src/constants/constants.js");












class jsfeatNext {
    constructor() {
        this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.version = "0.2.0";
        console.log("jsfeatNext version: ", this.version);
    }

    // CONSTANTS
    static EPSILON = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.EPSILON;
    static FLT_MIN = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.FLT_MIN;
    static U8_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.U8_t;
    static S32_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.S32_t;
    static F32_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.F32_t;
    static S64_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.S64_t;
    static F64_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.F64_t;
    static F64_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.F64_t;
    static C1_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.C1_t;
    static C2_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.C2_t;
    static C3_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.C3_t;
    static C4_t = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.C4_t;

    // color conversion
    static COLOR_RGBA2GRAY = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_RGB2GRAY = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_BGRA2GRAY = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
    static COLOR_BGR2GRAY = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;

    // box blur option
    static BOX_BLUR_NOSCALE = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE;
    // svd options
    static SVD_U_T = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.SVD_U_T;
    static SVD_V_T = _constants_constants_js__WEBPACK_IMPORTED_MODULE_10__.JSFEAT_CONSTANTS.SVD_V_T;

    // popular formats
    static U8C1_t = this.U8_t | this.C1_t;
    static U8C3_t = this.U8_t | this.C3_t;
    static U8C4_t = this.U8_t | this.C4_t;

    static F32C1_t = this.F32_t | this.C1_t;
    static F32C2_t = this.F32_t | this.C2_t;
    static S32C1_t = this.S32_t | this.C1_t;
    static S32C2_t = this.S32_t | this.C2_t;

    get_data_type(type) {
        return this.dt._get_data_type(type);
    }

    get_channel(type) {
        return this.dt._get_channel(type);
    }

    get_data_type_size(type) {
        return this.dt._get_data_type_size(type);
    }
}

jsfeatNext.data_t = _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_3__["default"]

jsfeatNext.matrix_t = _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"];

jsfeatNext.pyramid_t = _pyramid_t_pyramid_t_js__WEBPACK_IMPORTED_MODULE_8__["default"];

jsfeatNext.keypoint_t = _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_4__["default"];

jsfeatNext.cache = _cache_cache_js__WEBPACK_IMPORTED_MODULE_2__["default"];

jsfeatNext.imgproc = _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_5__["default"];

jsfeatNext.matmath = _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_6__["default"];

jsfeatNext.linalg = _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_9__["default"];

/***/ }),

/***/ "./src/keypoint_t/keypoint_t.js":
/*!**************************************!*\
  !*** ./src/keypoint_t/keypoint_t.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keypoint_t)
/* harmony export */ });
class keypoint_t {
    constructor(x, y, score, level, angle) {
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        if (typeof score === "undefined") { score = 0; }
        if (typeof level === "undefined") { level = 0; }
        if (typeof angle === "undefined") { angle = -1.0; }

        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}

/***/ }),

/***/ "./src/linalg/linalg-base.js":
/*!***********************************!*\
  !*** ./src/linalg/linalg-base.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hypot": () => (/* binding */ hypot),
/* harmony export */   "swap": () => (/* binding */ swap)
/* harmony export */ });
function swap(A, i0, i1, t) {
    t = A[i0];
    A[i0] = A[i1];
    A[i1] = t;
}

function hypot(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if( a > b ) {
        b /= a;
        return a*Math.sqrt(1.0 + b*b);
    }
    if( b > 0 ) {
        a /= b;
        return b*Math.sqrt(1.0 + a*a);
    }
    return 0.0;
}

/***/ }),

/***/ "./src/linalg/linalg.js":
/*!******************************!*\
  !*** ./src/linalg/linalg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ linalg)
/* harmony export */ });
/* harmony import */ var _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsfeatNext.js */ "./src/jsfeatNext.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _linalg_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linalg-base.js */ "./src/linalg/linalg-base.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../matmath/matmath.js */ "./src/matmath/matmath.js");






class linalg {
    constructor() { 
        this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.cache.allocate(30, 640*4);
        this.matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }

    JacobiImpl(A, astep, W, V, vstep, n) {
        var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.EPSILON;
        var i=0,j=0,k=0,m=0,l=0,idx=0,_in=0,_in2=0;
        var iters=0,max_iter=n*n*30;
        var mv=0.0,val=0.0,p=0.0,y=0.0,t=0.0,s=0.0,c=0.0,a0=0.0,b0=0.0;
    
        var indR_buff = this.cache.get_buffer(n<<2);
        var indC_buff = this.cache.get_buffer(n<<2);
        var indR = indR_buff.i32;
        var indC = indC_buff.i32;
    
        if(V) {
            for(; i < n; i++) {
                k = i*vstep;
                for(j = 0; j < n; j++) {
                    V[k + j] = 0.0;
                }
                V[k + i] = 1.0;
            }
        }
    
        for(k = 0; k < n; k++) {
            W[k] = A[(astep + 1)*k];
            if(k < n - 1) {
                for(m = k+1, mv = Math.abs(A[astep*k + m]), i = k+2; i < n; i++) {
                    val = Math.abs(A[astep*k+i]);
                    if(mv < val)
                        mv = val, m = i;
                }
                indR[k] = m;
            }
            if(k > 0) {
                for(m = 0, mv = Math.abs(A[k]), i = 1; i < k; i++) {
                    val = Math.abs(A[astep*i+k]);
                    if(mv < val)
                        mv = val, m = i;
                }
                indC[k] = m;
            }
        }
    
        if(n > 1) for( ; iters < max_iter; iters++) {
            // find index (k,l) of pivot p
            for(k = 0, mv = Math.abs(A[indR[0]]), i = 1; i < n-1; i++) {
                val = Math.abs(A[astep*i + indR[i]]);
                if( mv < val )
                    mv = val, k = i;
            }
            l = indR[k];
            for(i = 1; i < n; i++) {
                val = Math.abs(A[astep*indC[i] + i]);
                if( mv < val )
                    mv = val, k = indC[i], l = i;
            }
            
            p = A[astep*k + l];
    
            if(Math.abs(p) <= eps) break;
    
            y = (W[l] - W[k])*0.5;
            t = Math.abs(y) + (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.hypot)(p, y);
            s = (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.hypot)(p, t);
            c = t/s;
            s = p/s; t = (p/t)*p;
            if(y < 0)
                s = -s, t = -t;
            A[astep*k + l] = 0;
            
            W[k] -= t;
            W[l] += t;
            
            // rotate rows and columns k and l
            for (i = 0; i < k; i++) {
                _in = (astep * i + k);
                _in2 = (astep * i + l);
                a0 = A[_in];
                b0 = A[_in2];
                A[_in] = a0 * c - b0 * s;
                A[_in2] = a0 * s + b0 * c;
            }
            for (i = (k + 1); i < l; i++) {
                _in = (astep * k + i);
                _in2 = (astep * i + l);
                a0 = A[_in];
                b0 = A[_in2];
                A[_in] = a0 * c - b0 * s;
                A[_in2] = a0 * s + b0 * c;
            }
            i = l + 1;
            _in = (astep * k + i);
            _in2 = (astep * l + i);
            for (; i < n; i++, _in++, _in2++) {
                a0 = A[_in];
                b0 = A[_in2];
                A[_in] = a0 * c - b0 * s;
                A[_in2] = a0 * s + b0 * c;
            }
            
            // rotate eigenvectors
            if (V) {
                _in = vstep * k;
                _in2 = vstep * l;
                for (i = 0; i < n; i++, _in++, _in2++) {
                    a0 = V[_in];
                    b0 = V[_in2];
                    V[_in] = a0 * c - b0 * s;
                    V[_in2] = a0 * s + b0 * c;
                }
            }
            
            for(j = 0; j < 2; j++) {
                idx = j == 0 ? k : l;
                if(idx < n - 1) {
                    for(m = idx+1, mv = Math.abs(A[astep*idx + m]), i = idx+2; i < n; i++) {
                        val = Math.abs(A[astep*idx+i]);
                        if( mv < val )
                            mv = val, m = i;
                    }
                    indR[idx] = m;
                }
                if(idx > 0) {
                    for(m = 0, mv = Math.abs(A[idx]), i = 1; i < idx; i++) {
                        val = Math.abs(A[astep*i+idx]);
                        if( mv < val )
                            mv = val, m = i;
                    }
                    indC[idx] = m;
                }
            }
        }
    
        // sort eigenvalues & eigenvectors
        for(k = 0; k < n-1; k++) {
            m = k;
            for(i = k+1; i < n; i++) {
                if(W[m] < W[i])
                    m = i;
            }
            if(k != m) {
                (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(W, m, k, mv);
                if(V) {
                    for(i = 0; i < n; i++) {
                        (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(V, vstep*m + i, vstep*k + i, mv);
                    }
                }
            }
        }
    
    
        this.cache.put_buffer(indR_buff);
        this.cache.put_buffer(indC_buff);
    }

    JacobiSVDImpl(At, astep, _W, Vt, vstep, m, n, n1) {
        var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.EPSILON * 2.0;
        var minval = _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.FLT_MIN;
        var i=0,j=0,k=0,iter=0,max_iter=Math.max(m, 30);
        var Ai=0,Aj=0,Vi=0,Vj=0,changed=0;
        var c=0.0, s=0.0, t=0.0;
        var t0=0.0,t1=0.0,sd=0.0,beta=0.0,gamma=0.0,delta=0.0,a=0.0,p=0.0,b=0.0;
        var seed = 0x1234;
        var val=0.0,val0=0.0,asum=0.0;
    
        var W_buff = this.cache.get_buffer(n<<3);
        var W = W_buff.f64;
        
        for(; i < n; i++) {
            for(k = 0, sd = 0; k < m; k++) {
                t = At[i*astep + k];
                sd += t*t;
            }
            W[i] = sd;
            
            if(Vt) {
                for(k = 0; k < n; k++) {
                    Vt[i*vstep + k] = 0;
                }
                Vt[i*vstep + i] = 1;
            }
        }
        
        for(; iter < max_iter; iter++) {
            changed = 0;
            
            for(i = 0; i < n-1; i++) {
                for(j = i+1; j < n; j++) {
                    Ai = (i*astep)|0, Aj = (j*astep)|0;
                    a = W[i], p = 0, b = W[j];
                    
                    k = 2;
                    p += At[Ai]*At[Aj];
                    p += At[Ai+1]*At[Aj+1];
    
                    for(; k < m; k++)
                        p += At[Ai+k]*At[Aj+k];
                    
                    if(Math.abs(p) <= eps*Math.sqrt(a*b)) continue;
                    
                    p *= 2.0;
                    beta = a - b, gamma = (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.hypot)(p, beta);
                    if( beta < 0 ) {
                        delta = (gamma - beta)*0.5;
                        s = Math.sqrt(delta/gamma);
                        c = (p/(gamma*s*2.0));
                    } else {
                        c = Math.sqrt((gamma + beta)/(gamma*2.0));
                        s = (p/(gamma*c*2.0));
                    }
                    
                    a=0.0, b=0.0;
                    
                    k = 2; // unroll
                    t0 = c*At[Ai] + s*At[Aj];
                    t1 = -s*At[Ai] + c*At[Aj];
                    At[Ai] = t0; At[Aj] = t1;
                    a += t0*t0; b += t1*t1;
    
                    t0 = c*At[Ai+1] + s*At[Aj+1];
                    t1 = -s*At[Ai+1] + c*At[Aj+1];
                    At[Ai+1] = t0; At[Aj+1] = t1;
                    a += t0*t0; b += t1*t1;
    
                    for( ; k < m; k++ )
                    {
                        t0 = c*At[Ai+k] + s*At[Aj+k];
                        t1 = -s*At[Ai+k] + c*At[Aj+k];
                        At[Ai+k] = t0; At[Aj+k] = t1;
                        
                        a += t0*t0; b += t1*t1;
                    }
                    
                    W[i] = a; W[j] = b;
                    
                    changed = 1;
                    
                    if(Vt) {
                        Vi = (i*vstep)|0, Vj = (j*vstep)|0;
    
                        k = 2;
                        t0 = c*Vt[Vi] + s*Vt[Vj];
                        t1 = -s*Vt[Vi] + c*Vt[Vj];
                        Vt[Vi] = t0; Vt[Vj] = t1;
    
                        t0 = c*Vt[Vi+1] + s*Vt[Vj+1];
                        t1 = -s*Vt[Vi+1] + c*Vt[Vj+1];
                        Vt[Vi+1] = t0; Vt[Vj+1] = t1;
    
                        for(; k < n; k++) {
                            t0 = c*Vt[Vi+k] + s*Vt[Vj+k];
                            t1 = -s*Vt[Vi+k] + c*Vt[Vj+k];
                            Vt[Vi+k] = t0; Vt[Vj+k] = t1;
                        }
                    }
                }
            }
            if(changed == 0) break;
        }
        
        for(i = 0; i < n; i++) {
            for(k = 0, sd = 0; k < m; k++) {
                t = At[i*astep + k];
                sd += t*t;
            }
            W[i] = Math.sqrt(sd);
        }
        
        for(i = 0; i < n-1; i++) {
            j = i;
            for(k = i+1; k < n; k++) {
                if(W[j] < W[k])
                    j = k;
            }
            if(i != j) {
                (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(W, i, j, sd);
                if(Vt) {
                    for(k = 0; k < m; k++) {
                        (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(At, i*astep + k, j*astep + k, t);
                    }
                    
                    for(k = 0; k < n; k++) {
                        (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(Vt, i*vstep + k, j*vstep + k, t);
                    }
                }
            }
        }
        
        for(i = 0; i < n; i++) {
            _W[i] = W[i];
        }
        
        if(!Vt) {
            this.cache.put_buffer(W_buff);
            return;
        }
    
        for(i = 0; i < n1; i++) {
    
            sd = i < n ? W[i] : 0;
            
            while(sd <= minval) {
                // if we got a zero singular value, then in order to get the corresponding left singular vector
                // we generate a random vector, project it to the previously computed left singular vectors,
                // subtract the projection and normalize the difference.
                val0 = (1.0/m);
                for(k = 0; k < m; k++) {
                    seed = (seed * 214013 + 2531011);
                    val = (((seed >> 16) & 0x7fff) & 256) != 0 ? val0 : -val0;
                    At[i*astep + k] = val;
                }
                for(iter = 0; iter < 2; iter++) {
                    for(j = 0; j < i; j++) {
                        sd = 0;
                        for(k = 0; k < m; k++) {
                            sd += At[i*astep + k]*At[j*astep + k];
                        }
                        asum = 0.0;
                        for(k = 0; k < m; k++) {
                            t = (At[i*astep + k] - sd*At[j*astep + k]);
                            At[i*astep + k] = t;
                            asum += Math.abs(t);
                        }
                        asum = asum ? 1.0/asum : 0;
                        for(k = 0; k < m; k++) {
                            At[i*astep + k] *= asum;
                        }
                    }
                }
                sd = 0;
                for(k = 0; k < m; k++) {
                    t = At[i*astep + k];
                    sd += t*t;
                }
                sd = Math.sqrt(sd);
            }
            
            s = (1.0/sd);
            for(k = 0; k < m; k++) {
                At[i*astep + k] *= s;
            }
        }
    
        this.cache.put_buffer(W_buff);
    }

    lu_solve(A, B) {
        var i = 0, j = 0, k = 0, p = 1, astep = A.cols;
        var ad = A.data, bd = B.data;
        var t, alpha, d, s;

        for (i = 0; i < astep; i++) {
            k = i;
            for (j = i + 1; j < astep; j++) {
                if (Math.abs(ad[j * astep + i]) > Math.abs(ad[k * astep + i])) {
                    k = j;
                }
            }

            if (Math.abs(ad[k * astep + i]) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.EPSILON) {
                return 0; // FAILED
            }

            if (k != i) {
                for (j = i; j < astep; j++) {
                    (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(ad, i * astep + j, k * astep + j, t);
                }

                (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_3__.swap)(bd, i, k, t);
                p = -p;
            }

            d = -1.0 / ad[i * astep + i];

            for (j = i + 1; j < astep; j++) {
                alpha = ad[j * astep + i] * d;

                for (k = i + 1; k < astep; k++) {
                    ad[j * astep + k] += alpha * ad[i * astep + k];
                }

                bd[j] += alpha * bd[i];
            }

            ad[i * astep + i] = -d;
        }

        for (i = astep - 1; i >= 0; i--) {
            s = bd[i];
            for (k = i + 1; k < astep; k++) {
                s -= ad[i * astep + k] * bd[k];
            }
            bd[i] = s * ad[i * astep + i];
        }

        return 1; // OK
    }

    cholesky_solve(A, B) {
        var col = 0, row = 0, col2 = 0, cs = 0, rs = 0, i = 0, j = 0;
        var size = A.cols;
        var ad = A.data, bd = B.data;
        var val, inv_diag;

        for (col = 0; col < size; col++) {
            inv_diag = 1.0;
            cs = (col * size);
            rs = cs;
            for (row = col; row < size; row++) {
                // correct for the parts of cholesky already computed
                val = ad[(rs + col)];
                for (col2 = 0; col2 < col; col2++) {
                    val -= ad[(col2 * size + col)] * ad[(rs + col2)];
                }
                if (row == col) {
                    // this is the diagonal element so don't divide
                    ad[(rs + col)] = val;
                    if (val == 0) {
                        return 0;
                    }
                    inv_diag = 1.0 / val;
                } else {
                    // cache the value without division in the upper half
                    ad[(cs + row)] = val;
                    // divide my the diagonal element for all others
                    ad[(rs + col)] = val * inv_diag;
                }
                rs = (rs + size);
            }
        }

        // first backsub through L
        cs = 0;
        for (i = 0; i < size; i++) {
            val = bd[i];
            for (j = 0; j < i; j++) {
                val -= ad[(cs + j)] * bd[j];
            }
            bd[i] = val;
            cs = (cs + size);
        }
        // backsub through diagonal
        cs = 0;
        for (i = 0; i < size; i++) {
            bd[i] /= ad[(cs + i)];
            cs = (cs + size);
        }
        // backsub through L Transpose
        i = (size - 1);
        for (; i >= 0; i--) {
            val = bd[i];
            j = (i + 1);
            cs = (j * size);
            for (; j < size; j++) {
                val -= ad[(cs + i)] * bd[j];
                cs = (cs + size);
            }
            bd[i] = val;
        }

        return 1;
    }

    svd_decompose(A, W, U, V, options) {
        if (typeof options === "undefined") { options = 0; };
        var at = 0, i = 0, j = 0, _m = A.rows, _n = A.cols, m = _m, n = _n;
        var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.C1_t; // we only work with single channel

        if (m < n) {
            at = 1;
            i = m;
            m = n;
            n = i;
        }

        var a_buff = this.cache.get_buffer((m * m) << 3);
        var w_buff = this.cache.get_buffer(n << 3);
        var v_buff = this.cache.get_buffer((n * n) << 3);

        var a_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(m, m, dt, a_buff.data);
        var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(1, n, dt, w_buff.data);
        var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(n, n, dt, v_buff.data);

        if (at == 0) {
            // transpose
            this.matmath.transpose(a_mt, A);
        } else {
            for (i = 0; i < _n * _m; i++) {
                a_mt.data[i] = A.data[i];
            }
            for (; i < n * m; i++) {
                a_mt.data[i] = 0;
            }
        }

        this.JacobiSVDImpl(a_mt.data, m, w_mt.data, v_mt.data, n, m, n, m);

        if (W) {
            for (i = 0; i < n; i++) {
                W.data[i] = w_mt.data[i];
            }
            for (; i < _n; i++) {
                W.data[i] = 0;
            }
        }

        if (at == 0) {
            if (U && (options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.SVD_U_T)) {
                i = m * m;
                while (--i >= 0) {
                    U.data[i] = a_mt.data[i];
                }
            } else if (U) {
                this.matmath.transpose(U, a_mt);
            }

            if (V && (options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.SVD_V_T)) {
                i = n * n;
                while (--i >= 0) {
                    V.data[i] = v_mt.data[i];
                }
            } else if (V) {
                this.matmath.transpose(V, v_mt);
            }
        } else {
            if (U && (options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.SVD_U_T)) {
                i = n * n;
                while (--i >= 0) {
                    U.data[i] = v_mt.data[i];
                }
            } else if (U) {
                this.matmath.transpose(U, v_mt);
            }

            if (V && (options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.SVD_V_T)) {
                i = m * m;
                while (--i >= 0) {
                    V.data[i] = a_mt.data[i];
                }
            } else if (V) {
                this.matmath.transpose(V, a_mt);
            }
        }

        this.cache.put_buffer(a_buff);
        this.cache.put_buffer(w_buff);
        this.cache.put_buffer(v_buff);

    }

    svd_solve(A, X, B) {
        var i = 0, j = 0, k = 0;
        var pu = 0, pv = 0;
        var nrows = A.rows, ncols = A.cols;
        var sum = 0.0, xsum = 0.0, tol = 0.0;
        var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.C1_t;

        var u_buff = this.cache.get_buffer((nrows * nrows) << 3);
        var w_buff = this.cache.get_buffer(ncols << 3);
        var v_buff = this.cache.get_buffer((ncols * ncols) << 3);

        var u_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(nrows, nrows, dt, u_buff.data);
        var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(1, ncols, dt, w_buff.data);
        var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(ncols, ncols, dt, v_buff.data);

        var bd = B.data, ud = u_mt.data, wd = w_mt.data, vd = v_mt.data;

        this.svd_decompose(A, w_mt, u_mt, v_mt, 0);

        tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

        for (; i < ncols; i++, pv += ncols) {
            xsum = 0.0;
            for (j = 0; j < ncols; j++) {
                if (wd[j] > tol) {
                    for (k = 0, sum = 0.0, pu = 0; k < nrows; k++, pu += ncols) {
                        sum += ud[pu + j] * bd[k];
                    }
                    xsum += sum * vd[pv + j] / wd[j];
                }
            }
            X.data[i] = xsum;
        }

        this.cache.put_buffer(u_buff);
        this.cache.put_buffer(w_buff);
        this.cache.put_buffer(v_buff);
    }

    svd_invert(Ai, A) {
        var i = 0, j = 0, k = 0;
        var pu = 0, pv = 0, pa = 0;
        var nrows = A.rows, ncols = A.cols;
        var sum = 0.0, tol = 0.0;
        var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.C1_t;
        
        //var u_buff = cache1.get_buffer((nrows * nrows) << 3);
        var u_buff = this.cache.get_buffer((nrows * nrows) << 3);
        var w_buff = this.cache.get_buffer(ncols << 3);
        var v_buff = this.cache.get_buffer((ncols * ncols) << 3);
        var u_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(nrows, nrows, dt, u_buff.data);
        var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(1, ncols, dt, w_buff.data);
        var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(ncols, ncols, dt, v_buff.data);

        var id = Ai.data, ud = u_mt.data, wd = w_mt.data, vd = v_mt.data;

        this.svd_decompose(A, w_mt, u_mt, v_mt, 0);

        tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

        for (; i < ncols; i++, pv += ncols) {
            for (j = 0, pu = 0; j < nrows; j++, pa++) {
                for (k = 0, sum = 0.0; k < ncols; k++, pu++) {
                    if (wd[k] > tol) sum += vd[pv + k] * ud[pu] / wd[k];
                }
                id[pa] = sum;
            }
        }

        this.cache.put_buffer(u_buff);
        this.cache.put_buffer(w_buff);
        this.cache.put_buffer(v_buff);
    }

    eigenVV(A, vects, vals) {
        var n = A.cols, i = n * n;
        var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.JSFEAT_CONSTANTS.C1_t;

        var a_buff = this.cache.get_buffer((n * n) << 3);
        var w_buff = this.cache.get_buffer(n << 3);
        var a_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(n, n, dt, a_buff.data);
        var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].matrix_t(1, n, dt, w_buff.data);

        while (--i >= 0) {
            a_mt.data[i] = A.data[i];
        }

        JacobiImpl(a_mt.data, n, w_mt.data, vects ? vects.data : null, n, n);

        if (vals) {
            while (--n >= 0) {
                vals.data[n] = w_mt.data[n];
            }
        }

        this.cache.put_buffer(a_buff);
        this.cache.put_buffer(w_buff);
    }
}

/***/ }),

/***/ "./src/matmath/matmath.js":
/*!********************************!*\
  !*** ./src/matmath/matmath.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matmath)
/* harmony export */ });
class matmath {
    constructor() { }

    identity(M, value) {
        if (typeof value === "undefined") { value = 1; }
        var src = M.data;
        var rows = M.rows, cols = M.cols, cols_1 = (cols + 1) | 0;
        var len = rows * cols;
        var k = len;
        while (--len >= 0) src[len] = 0.0;
        len = k;
        k = 0;
        while (k < len) {
            src[k] = value;
            k = k + cols_1;
        }
    }

    transpose(At, A) {
        var i = 0, j = 0, nrows = A.rows, ncols = A.cols;
        var Ai = 0, Ati = 0, pAt = 0;
        var ad = A.data, atd = At.data;

        for (; i < nrows; Ati += 1, Ai += ncols, i++) {
            pAt = Ati;
            for (j = 0; j < ncols; pAt += nrows, j++) atd[pAt] = ad[Ai + j];
        }
    }

    // C = A * B
    multiply(C, A, B) {
        var i = 0, j = 0, k = 0;
        var Ap = 0, pA = 0, pB = 0, p_B = 0, Cp = 0;
        var ncols = A.cols, nrows = A.rows, mcols = B.cols;
        var ad = A.data, bd = B.data, cd = C.data;
        var sum = 0.0;

        for (; i < nrows; Ap += ncols, i++) {
            for (p_B = 0, j = 0; j < mcols; Cp++, p_B++, j++) {
                pB = p_B;
                pA = Ap;
                sum = 0.0;
                for (k = 0; k < ncols; pA++, pB += mcols, k++) {
                    sum += ad[pA] * bd[pB];
                }
                cd[Cp] = sum;
            }
        }
    }

    // C = A * B'
    multiply_ABt(C, A, B) {
        var i = 0, j = 0, k = 0;
        var Ap = 0, pA = 0, pB = 0, Cp = 0;
        var ncols = A.cols, nrows = A.rows, mrows = B.rows;
        var ad = A.data, bd = B.data, cd = C.data;
        var sum = 0.0;

        for (; i < nrows; Ap += ncols, i++) {
            for (pB = 0, j = 0; j < mrows; Cp++, j++) {
                pA = Ap;
                sum = 0.0;
                for (k = 0; k < ncols; pA++, pB++, k++) {
                    sum += ad[pA] * bd[pB];
                }
                cd[Cp] = sum;
            }
        }
    }

    // C = A' * B
    multiply_AtB(C, A, B) {
        var i = 0, j = 0, k = 0;
        var Ap = 0, pA = 0, pB = 0, p_B = 0, Cp = 0;
        var ncols = A.cols, nrows = A.rows, mcols = B.cols;
        var ad = A.data, bd = B.data, cd = C.data;
        var sum = 0.0;

        for (; i < ncols; Ap++, i++) {
            for (p_B = 0, j = 0; j < mcols; Cp++, p_B++, j++) {
                pB = p_B;
                pA = Ap;
                sum = 0.0;
                for (k = 0; k < nrows; pA += ncols, pB += mcols, k++) {
                    sum += ad[pA] * bd[pB];
                }
                cd[Cp] = sum;
            }
        }
    }

    // C = A * A'
    multiply_AAt(C, A) {
        var i = 0, j = 0, k = 0;
        var pCdiag = 0, p_A = 0, pA = 0, pB = 0, pC = 0, pCt = 0;
        var ncols = A.cols, nrows = A.rows;
        var ad = A.data, cd = C.data;
        var sum = 0.0;

        for (; i < nrows; pCdiag += nrows + 1, p_A = pA, i++) {
            pC = pCdiag;
            pCt = pCdiag;
            pB = p_A;
            for (j = i; j < nrows; pC++, pCt += nrows, j++) {
                pA = p_A;
                sum = 0.0;
                for (k = 0; k < ncols; k++) {
                    sum += ad[pA++] * ad[pB++];
                }
                cd[pC] = sum
                cd[pCt] = sum;
            }
        }
    }

    // C = A' * A
    multiply_AtA(C, A) {
        var i = 0, j = 0, k = 0;
        var p_A = 0, pA = 0, pB = 0, p_C = 0, pC = 0, p_CC = 0;
        var ncols = A.cols, nrows = A.rows;
        var ad = A.data, cd = C.data;
        var sum = 0.0;

        for (; i < ncols; p_C += ncols, i++) {
            p_A = i;
            p_CC = p_C + i;
            pC = p_CC;
            for (j = i; j < ncols; pC++, p_CC += ncols, j++) {
                pA = p_A;
                pB = j;
                sum = 0.0;
                for (k = 0; k < nrows; pA += ncols, pB += ncols, k++) {
                    sum += ad[pA] * ad[pB];
                }
                cd[pC] = sum
                cd[p_CC] = sum;
            }
        }
    }

    // various small matrix operations
    identity_3x3(M, value) {
        if (typeof value === "undefined") { value = 1; }
        var dt = M.data;
        dt[0] = dt[4] = dt[8] = value;
        dt[1] = dt[2] = dt[3] = 0;
        dt[5] = dt[6] = dt[7] = 0;
    }

    invert_3x3(from, to) {
        var A = from.data, invA = to.data;
        var t1 = A[4];
        var t2 = A[8];
        var t4 = A[5];
        var t5 = A[7];
        var t8 = A[0];

        var t9 = t8 * t1;
        var t11 = t8 * t4;
        var t13 = A[3];
        var t14 = A[1];
        var t15 = t13 * t14;
        var t17 = A[2];
        var t18 = t13 * t17;
        var t20 = A[6];
        var t21 = t20 * t14;
        var t23 = t20 * t17;
        var t26 = 1.0 / (t9 * t2 - t11 * t5 - t15 * t2 + t18 * t5 + t21 * t4 - t23 * t1);
        invA[0] = (t1 * t2 - t4 * t5) * t26;
        invA[1] = -(t14 * t2 - t17 * t5) * t26;
        invA[2] = -(-t14 * t4 + t17 * t1) * t26;
        invA[3] = -(t13 * t2 - t4 * t20) * t26;
        invA[4] = (t8 * t2 - t23) * t26;
        invA[5] = -(t11 - t18) * t26;
        invA[6] = -(-t13 * t5 + t1 * t20) * t26;
        invA[7] = -(t8 * t5 - t21) * t26;
        invA[8] = (t9 - t15) * t26;
    }

    // C = A * B
    multiply_3x3(C, A, B) {
        var Cd = C.data, Ad = A.data, Bd = B.data;
        var m1_0 = Ad[0], m1_1 = Ad[1], m1_2 = Ad[2];
        var m1_3 = Ad[3], m1_4 = Ad[4], m1_5 = Ad[5];
        var m1_6 = Ad[6], m1_7 = Ad[7], m1_8 = Ad[8];

        var m2_0 = Bd[0], m2_1 = Bd[1], m2_2 = Bd[2];
        var m2_3 = Bd[3], m2_4 = Bd[4], m2_5 = Bd[5];
        var m2_6 = Bd[6], m2_7 = Bd[7], m2_8 = Bd[8];

        Cd[0] = m1_0 * m2_0 + m1_1 * m2_3 + m1_2 * m2_6;
        Cd[1] = m1_0 * m2_1 + m1_1 * m2_4 + m1_2 * m2_7;
        Cd[2] = m1_0 * m2_2 + m1_1 * m2_5 + m1_2 * m2_8;
        Cd[3] = m1_3 * m2_0 + m1_4 * m2_3 + m1_5 * m2_6;
        Cd[4] = m1_3 * m2_1 + m1_4 * m2_4 + m1_5 * m2_7;
        Cd[5] = m1_3 * m2_2 + m1_4 * m2_5 + m1_5 * m2_8;
        Cd[6] = m1_6 * m2_0 + m1_7 * m2_3 + m1_8 * m2_6;
        Cd[7] = m1_6 * m2_1 + m1_7 * m2_4 + m1_8 * m2_7;
        Cd[8] = m1_6 * m2_2 + m1_7 * m2_5 + m1_8 * m2_8;
    }

    mat3x3_determinant(M) {
        var md = M.data;
        return md[0] * md[4] * md[8] -
            md[0] * md[5] * md[7] -
            md[3] * md[1] * md[8] +
            md[3] * md[2] * md[7] +
            md[6] * md[1] * md[5] -
            md[6] * md[2] * md[4];
    }

    determinant_3x3(M11, M12, M13,
        M21, M22, M23,
        M31, M32, M33) {
        return M11 * M22 * M33 - M11 * M23 * M32 -
            M21 * M12 * M33 + M21 * M13 * M32 +
            M31 * M12 * M23 - M31 * M13 * M22;
    }
}

/***/ }),

/***/ "./src/matrix_t/matrix_t.js":
/*!**********************************!*\
  !*** ./src/matrix_t/matrix_t.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matrix_t)
/* harmony export */ });
/* harmony import */ var _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data_type/data_type.js */ "./src/data_type/data_type.js");
/* harmony import */ var _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_utils/data_t.js */ "./src/node_utils/data_t.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");



class matrix_t {
    constructor(c, r, _data_type, _data_buffer) {
        this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.type = this.dt._get_data_type(_data_type) | 0;
        this.channel = this.dt._get_channel(_data_type) | 0;
        this.cols = c | 0;
        this.rows = r | 0;
        if (typeof _data_buffer === "undefined") {
            this.allocate();
        } else {
            this.buffer = _data_buffer;
            // data user asked for
            this.data = this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : (this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : (this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64));
        }
    }
    allocate() {
        // clear references
        delete this.data;
        delete this.buffer;
        //
        this.buffer = new _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cols * this.dt._get_data_type_size(this.type) * this.channel) * this.rows);
        this.data = this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : (this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : (this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64));
    }
    copy_to(other) {
        var od = other.data, td = this.data;
        var i = 0, n = (this.cols * this.rows * this.channel) | 0;
        for (; i < n - 4; i += 4) {
            od[i] = td[i];
            od[i + 1] = td[i + 1];
            od[i + 2] = td[i + 2];
            od[i + 3] = td[i + 3];
        }
        for (; i < n; ++i) {
            od[i] = td[i];
        }
    }
    resize(c, r, ch) {
        if (typeof ch === "undefined") { ch = this.channel; }
        // relocate buffer only if new size doesnt fit
        var new_size = (c * this.dt._get_data_type_size(this.type) * ch) * r;
        if (new_size > this.buffer.size) {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
            this.allocate();
        } else {
            this.cols = c;
            this.rows = r;
            this.channel = ch;
        }
    }
}

/***/ }),

/***/ "./src/node_utils/_pool_node_t.js":
/*!****************************************!*\
  !*** ./src/node_utils/_pool_node_t.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _pool_node_t)
/* harmony export */ });
/* harmony import */ var _data_t_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_t.js */ "./src/node_utils/data_t.js");

class _pool_node_t {
    constructor(size_in_bytes) {
        this.next = null;
        this.data = new _data_t_js__WEBPACK_IMPORTED_MODULE_0__["default"](size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }
    resize() {
        delete this.data;
        this.data = new _data_t_js__WEBPACK_IMPORTED_MODULE_0__["default"](size_in_bytes);
        this.size = this.data.size;
        this.buffer = this.data.buffer;
        this.u8 = this.data.u8;
        this.i32 = this.data.i32;
        this.f32 = this.data.f32;
        this.f64 = this.data.f64;
    }
}

/***/ }),

/***/ "./src/node_utils/data_t.js":
/*!**********************************!*\
  !*** ./src/node_utils/data_t.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ data_t)
/* harmony export */ });
class data_t  {
    constructor(size_in_bytes, buffer) {
        //super()
        // we need align size to multiple of 8
        this.size = ((size_in_bytes + 7) | 0) & -8;
        if (typeof buffer === "undefined") {
            this.buffer = new ArrayBuffer(this.size);
        } else {
            this.buffer = buffer;
            this.size = buffer.length;
        }
        this.u8 = new Uint8Array(this.buffer);
        this.i32 = new Int32Array(this.buffer);
        this.f32 = new Float32Array(this.buffer);
        this.f64 = new Float64Array(this.buffer);
    }
}

/***/ }),

/***/ "./src/pyramid_t/pyramid_t.js":
/*!************************************!*\
  !*** ./src/pyramid_t/pyramid_t.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pyramid_t)
/* harmony export */ });
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgproc/imgproc.js */ "./src/imgproc/imgproc.js");


class pyramid_t {
    cconstructor(levels) {
        this.levels = levels | 0;
        this.data = new Array(levels);
        //jsfeatNext.imgproc.pyrdown is not yet implemented... 
        this.pyrdown = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_0__["default"].pyrdown;
    }

    allocate(start_w, start_h, data_type) {
        var i = this.levels;
        while (--i >= 0) {
            this.data[i] = new jsfeatNext.matrix_t(start_w >> i, start_h >> i, data_type);
        }
    }

    build(input, skip_first_level) {
        if (typeof skip_first_level === "undefined") { skip_first_level = true; }
        // just copy data to first level
        var i = 2, a = input, b = this.data[0];
        if (!skip_first_level) {
            var j = input.cols * input.rows;
            while (--j >= 0) {
                b.data[j] = input.data[j];
            }
        }
        b = this.data[1];
        this.pyrdown(a, b);
        for (; i < this.levels; ++i) {
            a = b;
            b = this.data[i];
            this.pyrdown(a, b);
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsfeatNext.js */ "./src/jsfeatNext.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
   jsfeatNext: _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"]
});
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ3REZ0M7QUFDakI7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCNEM7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUVBQWU7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUN4QyxpRUFBZTtBQUNmLGFBQWE7QUFDYixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jYWNoZS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9kYXRhX3R5cGUvZGF0YV90eXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9pbWdwcm9jLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2pzZmVhdE5leHQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9rZXlwb2ludF90L2tleXBvaW50X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLWJhc2UuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvcHlyYW1pZF90L3B5cmFtaWRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHksIGRhdGFfc2l6ZSkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlcykge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhX3R5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhX3R5cGVfc2l6ZSA9IG5ldyBJbnQzMkFycmF5KFstMSwgMSwgNCwgLTEsIDQsIC0xLCAtMSwgLTEsIDgsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCA4XSk7O1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZSkge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGKTtcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFfdHlwZV9zaXplWyh0eXBlICYgMHhGRjAwKSA+PiA4XTtcbiAgICB9XG59IiwiaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL3Jlc2FtcGxlLmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbWdwcm9jIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGdyYXlzY2FsZShzcmMsIHcsIGgsIGRzdCwgY29kZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB5cmRvd24oc3JjLCBkc3QsIHN4LCBzeSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG9yIDJ4MyBtYXRyaXhfdCBvbmx5IGZpcnN0IDYgdmFsdWVzIHJlZmVyZW5jZWRcbiAgICB3YXJwX2FmZmluZShzcmMsIGRzdCwgdHJhbnNmb3JtLCBmaWxsX3ZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMsIHNyY19oZWlnaHQgPSBzcmMucm93cywgZHN0X3dpZHRoID0gZHN0LmNvbHMsIGRzdF9oZWlnaHQgPSBkc3Qucm93cztcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4cyA9IG0wMSAqIHkgKyBtMDI7XG4gICAgICAgICAgICB5cyA9IG0xMSAqIHkgKyBtMTI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMgKz0gbTAwLCB5cyArPSBtMTApIHtcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDA7IGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmIChpeHMgPj0gMCAmJiBpeXMgPj0gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0geHMgLSBpeHM7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB5cyAtIGl5cztcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gc3JjX3dpZHRoICogaXlzICsgaXhzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmMsIGRzdCwgbncsIG5oKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgaW52X3NjYWxlXzI1NiA9IChzY2FsZV94ICogc2NhbGVfeSAqIDB4MTAwMDApIHwgMDtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLCBiZXRhID0gMCwgYmV0YTEgPSAwO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBqc2ZlYXROZXh0LmNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBqc2ZlYXROZXh0LmNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5pMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuaTMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSBmc3gxKSAqIDB4MTAwKSB8IDA7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gMjU2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChmc3gyIC0gc3gyKSAqIDI1NikgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDNdO1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogMyArIDFdO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IChNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCkgKiAyNTYpIHwgMDtcbiAgICAgICAgICAgIGJldGExID0gMjU2IC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKGJldGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIDI1NikgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTEpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF0gKiAyNTY7XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqc2ZlYXROZXh0LmNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGpzZmVhdE5leHQuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAganNmZWF0TmV4dC5jYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGUgKHNyYywgZHN0LCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGpzZmVhdE5leHQuY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBqc2ZlYXROZXh0LmNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGpzZmVhdE5leHQuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAganNmZWF0TmV4dC5jYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCBrZXlwb2ludF90IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90LmpzJ1xuaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MuanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IHB5cmFtaWRfdCBmcm9tICcuL3B5cmFtaWRfdC9weXJhbWlkX3QuanMnXG5pbXBvcnQgbGluYWxnIGZyb20gJy4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMi4wXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwianNmZWF0TmV4dCB2ZXJzaW9uOiBcIiwgdGhpcy52ZXJzaW9uKTtcbiAgICB9XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5kYXRhX3QgPSBkYXRhX3RcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IHB5cmFtaWRfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBpbWdwcm9jO1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGxpbmFsZzsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy1iYXNlLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW5hbGcge1xuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAqNCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChBLCBhc3RlcCwgVywgViwgdnN0ZXAsIG4pIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgdmFyIGk9MCxqPTAsaz0wLG09MCxsPTAsaWR4PTAsX2luPTAsX2luMj0wO1xuICAgICAgICB2YXIgaXRlcnM9MCxtYXhfaXRlcj1uKm4qMzA7XG4gICAgICAgIHZhciBtdj0wLjAsdmFsPTAuMCxwPTAuMCx5PTAuMCx0PTAuMCxzPTAuMCxjPTAuMCxhMD0wLjAsYjA9MC4wO1xuICAgIFxuICAgICAgICB2YXIgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG48PDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG48PDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcbiAgICBcbiAgICAgICAgaWYoVikge1xuICAgICAgICAgICAgZm9yKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpKnZzdGVwO1xuICAgICAgICAgICAgICAgIGZvcihqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZm9yKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSprXTtcbiAgICAgICAgICAgIGlmKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvcihtID0gaysxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAqayArIG1dKSwgaSA9IGsrMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmsraV0pO1xuICAgICAgICAgICAgICAgICAgICBpZihtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvcihtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCppK2tdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKG4gPiAxKSBmb3IoIDsgaXRlcnMgPCBtYXhfaXRlcjsgaXRlcnMrKykge1xuICAgICAgICAgICAgLy8gZmluZCBpbmRleCAoayxsKSBvZiBwaXZvdCBwXG4gICAgICAgICAgICBmb3IoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbi0xOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYoIG12IDwgdmFsIClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYoIG12IDwgdmFsIClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpbmRDW2ldLCBsID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcCA9IEFbYXN0ZXAqayArIGxdO1xuICAgIFxuICAgICAgICAgICAgaWYoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcbiAgICBcbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pKjAuNTtcbiAgICAgICAgICAgIHQgPSBNYXRoLmFicyh5KSArIGh5cG90KHAsIHkpO1xuICAgICAgICAgICAgcyA9IGh5cG90KHAsIHQpO1xuICAgICAgICAgICAgYyA9IHQvcztcbiAgICAgICAgICAgIHMgPSBwL3M7IHQgPSAocC90KSpwO1xuICAgICAgICAgICAgaWYoeSA8IDApXG4gICAgICAgICAgICAgICAgcyA9IC1zLCB0ID0gLXQ7XG4gICAgICAgICAgICBBW2FzdGVwKmsgKyBsXSA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZHggPSBqID09IDAgPyBrIDogbDtcbiAgICAgICAgICAgICAgICBpZihpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobSA9IGlkeCsxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAqaWR4ICsgbV0pLCBpID0gaWR4KzI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAqaWR4K2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAqaStpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yKGsgPSAwOyBrIDwgbi0xOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yKGkgPSBrKzE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZihWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCptICsgaSwgdnN0ZXAqayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kUl9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZENfYnVmZik7XG4gICAgfVxuXG4gICAgSmFjb2JpU1ZESW1wbChBdCwgYXN0ZXAsIF9XLCBWdCwgdnN0ZXAsIG0sIG4sIG4xKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpPTAsaj0wLGs9MCxpdGVyPTAsbWF4X2l0ZXI9TWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWk9MCxBaj0wLFZpPTAsVmo9MCxjaGFuZ2VkPTA7XG4gICAgICAgIHZhciBjPTAuMCwgcz0wLjAsIHQ9MC4wO1xuICAgICAgICB2YXIgdDA9MC4wLHQxPTAuMCxzZD0wLjAsYmV0YT0wLjAsZ2FtbWE9MC4wLGRlbHRhPTAuMCxhPTAuMCxwPTAuMCxiPTAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWw9MC4wLHZhbDA9MC4wLGFzdW09MC4wO1xuICAgIFxuICAgICAgICB2YXIgV19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG48PDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG4gICAgICAgIFxuICAgICAgICBmb3IoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCp0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IHNkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihWdCkge1xuICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpKnZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpKnZzdGVwICsgaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihpID0gMDsgaSA8IG4tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKGogPSBpKzE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSphc3RlcCl8MCwgQWogPSAoaiphc3RlcCl8MDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSpBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkrMV0qQXRbQWorMV07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcig7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpK2tdKkF0W0FqK2tdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMocCkgPD0gZXBzKk1hdGguc3FydChhKmIpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBiZXRhIDwgMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkqMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChkZWx0YS9nYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAvKGdhbW1hKnMqMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpLyhnYW1tYSoyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAocC8oZ2FtbWEqYyoyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYT0wLjAsIGI9MC4wO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgayA9IDI7IC8vIHVucm9sbFxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMqQXRbQWldICsgcypBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMqQXRbQWldICsgYypBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCp0MDsgYiArPSB0MSp0MTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjKkF0W0FpKzFdICsgcypBdFtBaisxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypBdFtBaSsxXSArIGMqQXRbQWorMV07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpKzFdID0gdDA7IEF0W0FqKzFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAqdDA7IGIgKz0gdDEqdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciggOyBrIDwgbTsgaysrIClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjKkF0W0FpK2tdICsgcypBdFtBaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMqQXRbQWkra10gKyBjKkF0W0FqK2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkra10gPSB0MDsgQXRbQWora10gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCp0MDsgYiArPSB0MSp0MTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSp2c3RlcCl8MCwgVmogPSAoaip2c3RlcCl8MDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjKlZ0W1ZpXSArIHMqVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypWdFtWaV0gKyBjKlZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypWdFtWaSsxXSArIHMqVnRbVmorMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKlZ0W1ZpKzFdICsgYypWdFtWaisxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpKzFdID0gdDA7IFZ0W1ZqKzFdID0gdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjKlZ0W1ZpK2tdICsgcypWdFtWaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKlZ0W1ZpK2tdICsgYypWdFtWaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdFtWaStrXSA9IHQwOyBWdFtWaitrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCp0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IE1hdGguc3FydChzZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG4tMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvcihrID0gaSsxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaSAhPSBqKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBpLCBqLCBzZCk7XG4gICAgICAgICAgICAgICAgaWYoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpKmFzdGVwICsgaywgaiphc3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkqdnN0ZXAgKyBrLCBqKnZzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG4xOyBpKyspIHtcbiAgICBcbiAgICAgICAgICAgIHNkID0gaSA8IG4gPyBXW2ldIDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAvbSk7XG4gICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kqYXN0ZXAgKyBrXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2QgKz0gQXRbaSphc3RlcCArIGtdKkF0W2oqYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kqYXN0ZXAgKyBrXSAtIHNkKkF0W2oqYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSphc3RlcCArIGtdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3VtICs9IE1hdGguYWJzKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IGFzdW0gPyAxLjAvYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpKmFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBBdFtpKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQqdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzID0gKDEuMC9zZCk7XG4gICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpKmFzdGVwICsga10gKj0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBwID0gMSwgYXN0ZXAgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB0LCBhbHBoYSwgZCwgcztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXN0ZXA7IGkrKykge1xuICAgICAgICAgICAgayA9IGk7XG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbaiAqIGFzdGVwICsgaV0pID4gTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGQUlMRURcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgIT0gaSkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAoYWQsIGkgKiBhc3RlcCArIGosIGsgKiBhc3RlcCArIGosIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3YXAoYmQsIGksIGssIHQpO1xuICAgICAgICAgICAgICAgIHAgPSAtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IC0xLjAgLyBhZFtpICogYXN0ZXAgKyBpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhZFtqICogYXN0ZXAgKyBpXSAqIGQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWRbaiAqIGFzdGVwICsga10gKz0gYWxwaGEgKiBhZFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBiZFtqXSArPSBhbHBoYSAqIGJkW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZFtpICogYXN0ZXAgKyBpXSA9IC1kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gYXN0ZXAgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgcyA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcyAtPSBhZFtpICogYXN0ZXAgKyBrXSAqIGJkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSBzICogYWRbaSAqIGFzdGVwICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTsgLy8gT0tcbiAgICB9XG5cbiAgICBjaG9sZXNreV9zb2x2ZShBLCBCKSB7XG4gICAgICAgIHZhciBjb2wgPSAwLCByb3cgPSAwLCBjb2wyID0gMCwgY3MgPSAwLCBycyA9IDAsIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIHNpemUgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB2YWwsIGludl9kaWFnO1xuXG4gICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgIGludl9kaWFnID0gMS4wO1xuICAgICAgICAgICAgY3MgPSAoY29sICogc2l6ZSk7XG4gICAgICAgICAgICBycyA9IGNzO1xuICAgICAgICAgICAgZm9yIChyb3cgPSBjb2w7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBmb3IgdGhlIHBhcnRzIG9mIGNob2xlc2t5IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgICAgICAgICB2YWwgPSBhZFsocnMgKyBjb2wpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbDIgPSAwOyBjb2wyIDwgY29sOyBjb2wyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjb2wyICogc2l6ZSArIGNvbCldICogYWRbKHJzICsgY29sMildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ID09IGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBkaWFnb25hbCBlbGVtZW50IHNvIGRvbid0IGRpdmlkZVxuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZfZGlhZyA9IDEuMCAvIHZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZSB0aGUgdmFsdWUgd2l0aG91dCBkaXZpc2lvbiBpbiB0aGUgdXBwZXIgaGFsZlxuICAgICAgICAgICAgICAgICAgICBhZFsoY3MgKyByb3cpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2aWRlIG15IHRoZSBkaWFnb25hbCBlbGVtZW50IGZvciBhbGwgb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsICogaW52X2RpYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJzID0gKHJzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCBiYWNrc3ViIHRocm91Z2ggTFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBqKV0gKiBiZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggZGlhZ29uYWxcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBiZFtpXSAvPSBhZFsoY3MgKyBpKV07XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBMIFRyYW5zcG9zZVxuICAgICAgICBpID0gKHNpemUgLSAxKTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGogPSAoaSArIDEpO1xuICAgICAgICAgICAgY3MgPSAoaiAqIHNpemUpO1xuICAgICAgICAgICAgZm9yICg7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaSldICogYmRbal07XG4gICAgICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3ZkX2RlY29tcG9zZShBLCBXLCBVLCBWLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfTtcbiAgICAgICAgdmFyIGF0ID0gMCwgaSA9IDAsIGogPSAwLCBfbSA9IEEucm93cywgX24gPSBBLmNvbHMsIG0gPSBfbSwgbiA9IF9uO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7IC8vIHdlIG9ubHkgd29yayB3aXRoIHNpbmdsZSBjaGFubmVsXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQSwgWCwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDAsIHBhID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgICAgIFxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG4sIG4sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIEphY29iaUltcGwoYV9tdC5kYXRhLCBuLCB3X210LmRhdGEsIHZlY3RzID8gdmVjdHMuZGF0YSA6IG51bGwsIG4sIG4pO1xuXG4gICAgICAgIGlmICh2YWxzKSB7XG4gICAgICAgICAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgICAgICAgICB2YWxzLmRhdGFbbl0gPSB3X210LmRhdGFbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgc3JjID0gTS5kYXRhO1xuICAgICAgICB2YXIgcm93cyA9IE0ucm93cywgY29scyA9IE0uY29scywgY29sc18xID0gKGNvbHMgKyAxKSB8IDA7XG4gICAgICAgIHZhciBsZW4gPSByb3dzICogY29scztcbiAgICAgICAgdmFyIGsgPSBsZW47XG4gICAgICAgIHdoaWxlICgtLWxlbiA+PSAwKSBzcmNbbGVuXSA9IDAuMDtcbiAgICAgICAgbGVuID0gaztcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICBzcmNba10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGsgPSBrICsgY29sc18xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKEF0LCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIEFpID0gMCwgQXRpID0gMCwgcEF0ID0gMDtcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQidcbiAgICBtdWx0aXBseV9BQnQoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbXJvd3MgPSBCLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBBcCsrLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBBJ1xuICAgIG11bHRpcGx5X0FBdChDLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0MgPSAwLCBwQyA9IDAsIHBfQ0MgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwX0NDXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlvdXMgc21hbGwgbWF0cml4IG9wZXJhdGlvbnNcbiAgICBpZGVudGl0eV8zeDMoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIGR0ID0gTS5kYXRhO1xuICAgICAgICBkdFswXSA9IGR0WzRdID0gZHRbOF0gPSB2YWx1ZTtcbiAgICAgICAgZHRbMV0gPSBkdFsyXSA9IGR0WzNdID0gMDtcbiAgICAgICAgZHRbNV0gPSBkdFs2XSA9IGR0WzddID0gMDtcbiAgICB9XG5cbiAgICBpbnZlcnRfM3gzKGZyb20sIHRvKSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDLCBBLCBCKSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTSkge1xuICAgICAgICB2YXIgbWQgPSBNLmRhdGE7XG4gICAgICAgIHJldHVybiBtZFswXSAqIG1kWzRdICogbWRbOF0gLVxuICAgICAgICAgICAgbWRbMF0gKiBtZFs1XSAqIG1kWzddIC1cbiAgICAgICAgICAgIG1kWzNdICogbWRbMV0gKiBtZFs4XSArXG4gICAgICAgICAgICBtZFszXSAqIG1kWzJdICogbWRbN10gK1xuICAgICAgICAgICAgbWRbNl0gKiBtZFsxXSAqIG1kWzVdIC1cbiAgICAgICAgICAgIG1kWzZdICogbWRbMl0gKiBtZFs0XTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudF8zeDMoTTExLCBNMTIsIE0xMyxcbiAgICAgICAgTTIxLCBNMjIsIE0yMyxcbiAgICAgICAgTTMxLCBNMzIsIE0zMykge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCBkYXRhX3R5cGUgZnJvbSAnLi4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdHJpeF90IHtcbiAgICBjb25zdHJ1Y3RvcihjLCByLCBfZGF0YV90eXBlLCBfZGF0YV9idWZmZXIpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXIpIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjLCByLCBjaCkge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBkYXRhX3QgZnJvbSAnLi9kYXRhX3QuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfcG9vbF9ub2RlX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhX3QgIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzLCBidWZmZXIpIHtcbiAgICAgICAgLy9zdXBlcigpXG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufSIsImltcG9ydCBpbWdwcm9jIGZyb20gJy4uL2ltZ3Byb2MvaW1ncHJvYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHB5cmFtaWRfdCB7XG4gICAgY2NvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscyB8IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheShsZXZlbHMpO1xuICAgICAgICAvL2pzZmVhdE5leHQuaW1ncHJvYy5weXJkb3duIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuLi4gXG4gICAgICAgIHRoaXMucHlyZG93biA9IG5ldyBpbWdwcm9jLnB5cmRvd247XG4gICAgfVxuXG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3Qoc3RhcnRfdyA+PiBpLCBzdGFydF9oID4+IGksIGRhdGFfdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZChpbnB1dCwgc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICBpZiAodHlwZW9mIHNraXBfZmlyc3RfbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgc2tpcF9maXJzdF9sZXZlbCA9IHRydWU7IH1cbiAgICAgICAgLy8ganVzdCBjb3B5IGRhdGEgdG8gZmlyc3QgbGV2ZWxcbiAgICAgICAgdmFyIGkgPSAyLCBhID0gaW5wdXQsIGIgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGlmICghc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICAgICAgdmFyIGogPSBpbnB1dC5jb2xzICogaW5wdXQucm93cztcbiAgICAgICAgICAgIHdoaWxlICgtLWogPj0gMCkge1xuICAgICAgICAgICAgICAgIGIuZGF0YVtqXSA9IGlucHV0LmRhdGFbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRoaXMuZGF0YVsxXTtcbiAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICBmb3IgKDsgaSA8IHRoaXMubGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dC5qcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=