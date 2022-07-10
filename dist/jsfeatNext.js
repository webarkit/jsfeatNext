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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_utils/_pool_node_t.js */ "./src/node_utils/_pool_node_t.js");




var cache = /*#__PURE__*/function () {
  function cache() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, cache);

    this._pool_head;
    this._pool_tail;
    this._pool_size = 0;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(cache, [{
    key: "allocate",
    value: function allocate(capacity, data_size) {
      this._pool_head = this._pool_tail = new _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](data_size);

      for (var i = 0; i < capacity; ++i) {
        var node = new _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](data_size);
        this._pool_tail = this._pool_tail.next = node;
        this._pool_size++;
      }
    }
  }, {
    key: "get_buffer",
    value: function get_buffer(size_in_bytes) {
      // assume we have enough free nodes
      var node = this._pool_head;
      this._pool_head = this._pool_head.next;
      this._pool_size--;

      if (size_in_bytes > node.size) {
        node.resize(size_in_bytes);
      }

      return node;
    }
  }, {
    key: "put_buffer",
    value: function put_buffer(node) {
      this._pool_tail = this._pool_tail.next = node;
      this._pool_size++;
    }
  }]);

  return cache;
}();



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
var JSFEAT_CONSTANTS = {
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
  SVD_V_T: 0x02
};

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var data_type = /*#__PURE__*/function () {
  function data_type() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, data_type);

    this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);
    ;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(data_type, [{
    key: "_get_data_type",
    value: function _get_data_type(type) {
      return type & 0xFF00;
    }
  }, {
    key: "_get_channel",
    value: function _get_channel(type) {
      return type & 0xFF;
    }
  }, {
    key: "_get_data_type_size",
    value: function _get_data_type_size(type) {
      return this._data_type_size[(type & 0xFF00) >> 8];
    }
  }]);

  return data_type;
}();



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _resample_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resample.js */ "./src/imgproc/resample.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");





var imgproc = /*#__PURE__*/function () {
  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, imgproc);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      // this is default image data representation in browser
      if (typeof code === "undefined") {
        code = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
      }

      var x = 0,
          y = 0,
          i = 0,
          j = 0,
          ir = 0,
          jr = 0;
      var coeff_r = 4899,
          coeff_g = 9617,
          coeff_b = 1868,
          cn = 4;

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        cn = 3;
      }

      var cn2 = cn << 1,
          cn3 = cn * 3 | 0;
      dst.resize(w, h, 1);
      var dst_u8 = dst.data;

      for (y = 0; y < h; ++y, j += w, i += w * cn) {
        for (x = 0, ir = i, jr = j; x <= w - 4; x += 4, ir += cn << 2, jr += 4) {
          dst_u8[jr] = src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192 >> 14;
          dst_u8[jr + 1] = src[ir + cn] * coeff_r + src[ir + cn + 1] * coeff_g + src[ir + cn + 2] * coeff_b + 8192 >> 14;
          dst_u8[jr + 2] = src[ir + cn2] * coeff_r + src[ir + cn2 + 1] * coeff_g + src[ir + cn2 + 2] * coeff_b + 8192 >> 14;
          dst_u8[jr + 3] = src[ir + cn3] * coeff_r + src[ir + cn3 + 1] * coeff_g + src[ir + cn3 + 2] * coeff_b + 8192 >> 14;
        }

        for (; x < w; ++x, ++jr, ir += cn) {
          dst_u8[jr] = src[ir] * coeff_r + src[ir + 1] * coeff_g + src[ir + 2] * coeff_b + 8192 >> 14;
        }
      }
    }
  }, {
    key: "pyrdown",
    value: function pyrdown(src, dst, sx, sy) {
      // this is needed for bbf
      if (typeof sx === "undefined") {
        sx = 0;
      }

      if (typeof sy === "undefined") {
        sy = 0;
      }

      var w = src.cols,
          h = src.rows;
      var w2 = w >> 1,
          h2 = h >> 1;

      var _w2 = w2 - (sx << 1),
          _h2 = h2 - (sy << 1);

      var x = 0,
          y = 0,
          sptr = sx + sy * w,
          sline = 0,
          dptr = 0,
          dline = 0;
      dst.resize(w2, h2, src.channel);
      var src_d = src.data,
          dst_d = dst.data;

      for (y = 0; y < _h2; ++y) {
        sline = sptr;
        dline = dptr;

        for (x = 0; x <= _w2 - 2; x += 2, dline += 2, sline += 4) {
          dst_d[dline] = src_d[sline] + src_d[sline + 1] + src_d[sline + w] + src_d[sline + w + 1] + 2 >> 2;
          dst_d[dline + 1] = src_d[sline + 2] + src_d[sline + 3] + src_d[sline + w + 2] + src_d[sline + w + 3] + 2 >> 2;
        }

        for (; x < _w2; ++x, ++dline, sline += 2) {
          dst_d[dline] = src_d[sline] + src_d[sline + 1] + src_d[sline + w] + src_d[sline + w + 1] + 2 >> 2;
        }

        sptr += w << 1;
        dptr += w2;
      }
    } // transform is 3x3 or 2x3 matrix_t only first 6 values referenced

  }, {
    key: "warp_affine",
    value: function warp_affine(src, dst, transform, fill_value) {
      if (typeof fill_value === "undefined") {
        fill_value = 0;
      }

      var src_width = src.cols,
          src_height = src.rows,
          dst_width = dst.cols,
          dst_height = dst.rows;
      var src_d = src.data,
          dst_d = dst.data;
      var x = 0,
          y = 0,
          off = 0,
          ixs = 0,
          iys = 0,
          xs = 0.0,
          ys = 0.0,
          a = 0.0,
          b = 0.0,
          p0 = 0.0,
          p1 = 0.0;
      var td = transform.data;
      var m00 = td[0],
          m01 = td[1],
          m02 = td[2],
          m10 = td[3],
          m11 = td[4],
          m12 = td[5];

      for (var dptr = 0; y < dst_height; ++y) {
        xs = m01 * y + m02;
        ys = m11 * y + m12;

        for (x = 0; x < dst_width; ++x, ++dptr, xs += m00, ys += m10) {
          ixs = xs | 0;
          iys = ys | 0;

          if (ixs >= 0 && iys >= 0 && ixs < src_width - 1 && iys < src_height - 1) {
            a = xs - ixs;
            b = ys - iys;
            off = src_width * iys + ixs;
            p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
            p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);
            dst_d[dptr] = p0 + b * (p1 - p0);
          } else dst_d[dptr] = fill_value;
        }
      }
    }
  }]);

  return imgproc;
}();



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

function _resample_u8(src, dst, nw, nh) {
  var xofs_count = 0;
  var ch = src.channel,
      w = src.cols,
      h = src.rows;
  var src_d = src.data,
      dst_d = dst.data;
  var scale_x = w / nw,
      scale_y = h / nh;
  var inv_scale_256 = scale_x * scale_y * 0x10000 | 0;
  var dx = 0,
      dy = 0,
      sx = 0,
      sy = 0,
      sx1 = 0,
      sx2 = 0,
      i = 0,
      k = 0,
      fsx1 = 0.0,
      fsx2 = 0.0;
  var a = 0,
      b = 0,
      dxn = 0,
      alpha = 0,
      beta = 0,
      beta1 = 0;
  var buf_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer(nw * ch << 2);
  var sum_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer(nw * ch << 2);
  var xofs_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer(w * 2 * 3 << 2);
  var buf = buf_node.i32;
  var sum = sum_node.i32;
  var xofs = xofs_node.i32;

  for (; dx < nw; dx++) {
    fsx1 = dx * scale_x, fsx2 = fsx1 + scale_x;
    sx1 = fsx1 + 1.0 - 1e-6 | 0, sx2 = fsx2 | 0;
    sx1 = Math.min(sx1, w - 1);
    sx2 = Math.min(sx2, w - 1);

    if (sx1 > fsx1) {
      xofs[k++] = dx * ch | 0;
      xofs[k++] = (sx1 - 1) * ch | 0;
      xofs[k++] = (sx1 - fsx1) * 0x100 | 0;
      xofs_count++;
    }

    for (sx = sx1; sx < sx2; sx++) {
      xofs_count++;
      xofs[k++] = dx * ch | 0;
      xofs[k++] = sx * ch | 0;
      xofs[k++] = 256;
    }

    if (fsx2 - sx2 > 1e-3) {
      xofs_count++;
      xofs[k++] = dx * ch | 0;
      xofs[k++] = sx2 * ch | 0;
      xofs[k++] = (fsx2 - sx2) * 256 | 0;
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
      beta = Math.max(sy + 1 - (dy + 1) * scale_y, 0.0) * 256 | 0;
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
function _resample(src, dst, nw, nh) {
  var xofs_count = 0;
  var ch = src.channel,
      w = src.cols,
      h = src.rows;
  var src_d = src.data,
      dst_d = dst.data;
  var scale_x = w / nw,
      scale_y = h / nh;
  var scale = 1.0 / (scale_x * scale_y);
  var dx = 0,
      dy = 0,
      sx = 0,
      sy = 0,
      sx1 = 0,
      sx2 = 0,
      i = 0,
      k = 0,
      fsx1 = 0.0,
      fsx2 = 0.0;
  var a = 0,
      b = 0,
      dxn = 0,
      alpha = 0.0,
      beta = 0.0,
      beta1 = 0.0;
  var buf_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer(nw * ch << 2);
  var sum_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer(nw * ch << 2);
  var xofs_node = _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_0__["default"].cache.get_buffer(w * 2 * 3 << 2);
  var buf = buf_node.f32;
  var sum = sum_node.f32;
  var xofs = xofs_node.f32;

  for (; dx < nw; dx++) {
    fsx1 = dx * scale_x, fsx2 = fsx1 + scale_x;
    sx1 = fsx1 + 1.0 - 1e-6 | 0, sx2 = fsx2 | 0;
    sx1 = Math.min(sx1, w - 1);
    sx2 = Math.min(sx2, w - 1);

    if (sx1 > fsx1) {
      xofs_count++;
      xofs[k++] = (sx1 - 1) * ch | 0;
      xofs[k++] = dx * ch | 0;
      xofs[k++] = (sx1 - fsx1) * scale;
    }

    for (sx = sx1; sx < sx2; sx++) {
      xofs_count++;
      xofs[k++] = sx * ch | 0;
      xofs[k++] = dx * ch | 0;
      xofs[k++] = scale;
    }

    if (fsx2 - sx2 > 1e-3) {
      xofs_count++;
      xofs[k++] = sx2 * ch | 0;
      xofs[k++] = dx * ch | 0;
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_utils/_pool_node_t.js */ "./src/node_utils/_pool_node_t.js");
/* harmony import */ var _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data_type/data_type.js */ "./src/data_type/data_type.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_utils/data_t.js */ "./src/node_utils/data_t.js");
/* harmony import */ var _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keypoint_t/keypoint_t.js */ "./src/keypoint_t/keypoint_t.js");
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgproc/imgproc.js */ "./src/imgproc/imgproc.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./matmath/matmath.js */ "./src/matmath/matmath.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _pyramid_t_pyramid_t_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pyramid_t/pyramid_t.js */ "./src/pyramid_t/pyramid_t.js");
/* harmony import */ var _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./linalg/linalg.js */ "./src/linalg/linalg.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants/constants.js */ "./src/constants/constants.js");















var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, jsfeatNext);

    this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.version = "0.2.0";
    console.log("jsfeatNext version: ", this.version);
  } // CONSTANTS


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(jsfeatNext, [{
    key: "get_data_type",
    value: function get_data_type(type) {
      return this.dt._get_data_type(type);
    }
  }, {
    key: "get_channel",
    value: function get_channel(type) {
      return this.dt._get_channel(type);
    }
  }, {
    key: "get_data_type_size",
    value: function get_data_type_size(type) {
      return this.dt._get_data_type_size(type);
    }
  }]);

  return jsfeatNext;
}();

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "EPSILON", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "FLT_MIN", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C1_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C2_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C3_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C4_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_U_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_V_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_13__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);


jsfeatNext.data_t = _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_6__["default"];
jsfeatNext.matrix_t = _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_10__["default"];
jsfeatNext.pyramid_t = _pyramid_t_pyramid_t_js__WEBPACK_IMPORTED_MODULE_11__["default"];
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_7__["default"];
jsfeatNext.cache = _cache_cache_js__WEBPACK_IMPORTED_MODULE_5__["default"];
jsfeatNext.imgproc = _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_8__["default"];
jsfeatNext.matmath = _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_9__["default"];
jsfeatNext.linalg = _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_12__["default"];

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
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var keypoint_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function keypoint_t(x, y, score, level, angle) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, keypoint_t);

  if (typeof x === "undefined") {
    x = 0;
  }

  if (typeof y === "undefined") {
    y = 0;
  }

  if (typeof score === "undefined") {
    score = 0;
  }

  if (typeof level === "undefined") {
    level = 0;
  }

  if (typeof angle === "undefined") {
    angle = -1.0;
  }

  this.x = x;
  this.y = y;
  this.score = score;
  this.level = level;
  this.angle = angle;
});



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

  if (a > b) {
    b /= a;
    return a * Math.sqrt(1.0 + b * b);
  }

  if (b > 0) {
    a /= b;
    return b * Math.sqrt(1.0 + a * a);
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsfeatNext.js */ "./src/jsfeatNext.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _linalg_base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linalg-base.js */ "./src/linalg/linalg-base.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../matmath/matmath.js */ "./src/matmath/matmath.js");








var linalg = /*#__PURE__*/function () {
  function linalg() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, linalg);

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.cache.allocate(30, 640 * 4);
    this.matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON;
      var i = 0,
          j = 0,
          k = 0,
          m = 0,
          l = 0,
          idx = 0,
          _in = 0,
          _in2 = 0;
      var iters = 0,
          max_iter = n * n * 30;
      var mv = 0.0,
          val = 0.0,
          p = 0.0,
          y = 0.0,
          t = 0.0,
          s = 0.0,
          c = 0.0,
          a0 = 0.0,
          b0 = 0.0;
      var indR_buff = this.cache.get_buffer(n << 2);
      var indC_buff = this.cache.get_buffer(n << 2);
      var indR = indR_buff.i32;
      var indC = indC_buff.i32;

      if (V) {
        for (; i < n; i++) {
          k = i * vstep;

          for (j = 0; j < n; j++) {
            V[k + j] = 0.0;
          }

          V[k + i] = 1.0;
        }
      }

      for (k = 0; k < n; k++) {
        W[k] = A[(astep + 1) * k];

        if (k < n - 1) {
          for (m = k + 1, mv = Math.abs(A[astep * k + m]), i = k + 2; i < n; i++) {
            val = Math.abs(A[astep * k + i]);
            if (mv < val) mv = val, m = i;
          }

          indR[k] = m;
        }

        if (k > 0) {
          for (m = 0, mv = Math.abs(A[k]), i = 1; i < k; i++) {
            val = Math.abs(A[astep * i + k]);
            if (mv < val) mv = val, m = i;
          }

          indC[k] = m;
        }
      }

      if (n > 1) for (; iters < max_iter; iters++) {
        // find index (k,l) of pivot p
        for (k = 0, mv = Math.abs(A[indR[0]]), i = 1; i < n - 1; i++) {
          val = Math.abs(A[astep * i + indR[i]]);
          if (mv < val) mv = val, k = i;
        }

        l = indR[k];

        for (i = 1; i < n; i++) {
          val = Math.abs(A[astep * indC[i] + i]);
          if (mv < val) mv = val, k = indC[i], l = i;
        }

        p = A[astep * k + l];
        if (Math.abs(p) <= eps) break;
        y = (W[l] - W[k]) * 0.5;
        t = Math.abs(y) + (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.hypot)(p, y);
        s = (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.hypot)(p, t);
        c = t / s;
        s = p / s;
        t = p / t * p;
        if (y < 0) s = -s, t = -t;
        A[astep * k + l] = 0;
        W[k] -= t;
        W[l] += t; // rotate rows and columns k and l

        for (i = 0; i < k; i++) {
          _in = astep * i + k;
          _in2 = astep * i + l;
          a0 = A[_in];
          b0 = A[_in2];
          A[_in] = a0 * c - b0 * s;
          A[_in2] = a0 * s + b0 * c;
        }

        for (i = k + 1; i < l; i++) {
          _in = astep * k + i;
          _in2 = astep * i + l;
          a0 = A[_in];
          b0 = A[_in2];
          A[_in] = a0 * c - b0 * s;
          A[_in2] = a0 * s + b0 * c;
        }

        i = l + 1;
        _in = astep * k + i;
        _in2 = astep * l + i;

        for (; i < n; i++, _in++, _in2++) {
          a0 = A[_in];
          b0 = A[_in2];
          A[_in] = a0 * c - b0 * s;
          A[_in2] = a0 * s + b0 * c;
        } // rotate eigenvectors


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

        for (j = 0; j < 2; j++) {
          idx = j == 0 ? k : l;

          if (idx < n - 1) {
            for (m = idx + 1, mv = Math.abs(A[astep * idx + m]), i = idx + 2; i < n; i++) {
              val = Math.abs(A[astep * idx + i]);
              if (mv < val) mv = val, m = i;
            }

            indR[idx] = m;
          }

          if (idx > 0) {
            for (m = 0, mv = Math.abs(A[idx]), i = 1; i < idx; i++) {
              val = Math.abs(A[astep * i + idx]);
              if (mv < val) mv = val, m = i;
            }

            indC[idx] = m;
          }
        }
      } // sort eigenvalues & eigenvectors

      for (k = 0; k < n - 1; k++) {
        m = k;

        for (i = k + 1; i < n; i++) {
          if (W[m] < W[i]) m = i;
        }

        if (k != m) {
          (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(W, m, k, mv);

          if (V) {
            for (i = 0; i < n; i++) {
              (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(V, vstep * m + i, vstep * k + i, mv);
            }
          }
        }
      }

      this.cache.put_buffer(indR_buff);
      this.cache.put_buffer(indC_buff);
    }
  }, {
    key: "JacobiSVDImpl",
    value: function JacobiSVDImpl(At, astep, _W, Vt, vstep, m, n, n1) {
      var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.FLT_MIN;
      var i = 0,
          j = 0,
          k = 0,
          iter = 0,
          max_iter = Math.max(m, 30);
      var Ai = 0,
          Aj = 0,
          Vi = 0,
          Vj = 0,
          changed = 0;
      var c = 0.0,
          s = 0.0,
          t = 0.0;
      var t0 = 0.0,
          t1 = 0.0,
          sd = 0.0,
          beta = 0.0,
          gamma = 0.0,
          delta = 0.0,
          a = 0.0,
          p = 0.0,
          b = 0.0;
      var seed = 0x1234;
      var val = 0.0,
          val0 = 0.0,
          asum = 0.0;
      var W_buff = this.cache.get_buffer(n << 3);
      var W = W_buff.f64;

      for (; i < n; i++) {
        for (k = 0, sd = 0; k < m; k++) {
          t = At[i * astep + k];
          sd += t * t;
        }

        W[i] = sd;

        if (Vt) {
          for (k = 0; k < n; k++) {
            Vt[i * vstep + k] = 0;
          }

          Vt[i * vstep + i] = 1;
        }
      }

      for (; iter < max_iter; iter++) {
        changed = 0;

        for (i = 0; i < n - 1; i++) {
          for (j = i + 1; j < n; j++) {
            Ai = i * astep | 0, Aj = j * astep | 0;
            a = W[i], p = 0, b = W[j];
            k = 2;
            p += At[Ai] * At[Aj];
            p += At[Ai + 1] * At[Aj + 1];

            for (; k < m; k++) {
              p += At[Ai + k] * At[Aj + k];
            }

            if (Math.abs(p) <= eps * Math.sqrt(a * b)) continue;
            p *= 2.0;
            beta = a - b, gamma = (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.hypot)(p, beta);

            if (beta < 0) {
              delta = (gamma - beta) * 0.5;
              s = Math.sqrt(delta / gamma);
              c = p / (gamma * s * 2.0);
            } else {
              c = Math.sqrt((gamma + beta) / (gamma * 2.0));
              s = p / (gamma * c * 2.0);
            }

            a = 0.0, b = 0.0;
            k = 2; // unroll

            t0 = c * At[Ai] + s * At[Aj];
            t1 = -s * At[Ai] + c * At[Aj];
            At[Ai] = t0;
            At[Aj] = t1;
            a += t0 * t0;
            b += t1 * t1;
            t0 = c * At[Ai + 1] + s * At[Aj + 1];
            t1 = -s * At[Ai + 1] + c * At[Aj + 1];
            At[Ai + 1] = t0;
            At[Aj + 1] = t1;
            a += t0 * t0;
            b += t1 * t1;

            for (; k < m; k++) {
              t0 = c * At[Ai + k] + s * At[Aj + k];
              t1 = -s * At[Ai + k] + c * At[Aj + k];
              At[Ai + k] = t0;
              At[Aj + k] = t1;
              a += t0 * t0;
              b += t1 * t1;
            }

            W[i] = a;
            W[j] = b;
            changed = 1;

            if (Vt) {
              Vi = i * vstep | 0, Vj = j * vstep | 0;
              k = 2;
              t0 = c * Vt[Vi] + s * Vt[Vj];
              t1 = -s * Vt[Vi] + c * Vt[Vj];
              Vt[Vi] = t0;
              Vt[Vj] = t1;
              t0 = c * Vt[Vi + 1] + s * Vt[Vj + 1];
              t1 = -s * Vt[Vi + 1] + c * Vt[Vj + 1];
              Vt[Vi + 1] = t0;
              Vt[Vj + 1] = t1;

              for (; k < n; k++) {
                t0 = c * Vt[Vi + k] + s * Vt[Vj + k];
                t1 = -s * Vt[Vi + k] + c * Vt[Vj + k];
                Vt[Vi + k] = t0;
                Vt[Vj + k] = t1;
              }
            }
          }
        }

        if (changed == 0) break;
      }

      for (i = 0; i < n; i++) {
        for (k = 0, sd = 0; k < m; k++) {
          t = At[i * astep + k];
          sd += t * t;
        }

        W[i] = Math.sqrt(sd);
      }

      for (i = 0; i < n - 1; i++) {
        j = i;

        for (k = i + 1; k < n; k++) {
          if (W[j] < W[k]) j = k;
        }

        if (i != j) {
          (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(W, i, j, sd);

          if (Vt) {
            for (k = 0; k < m; k++) {
              (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(At, i * astep + k, j * astep + k, t);
            }

            for (k = 0; k < n; k++) {
              (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(Vt, i * vstep + k, j * vstep + k, t);
            }
          }
        }
      }

      for (i = 0; i < n; i++) {
        _W[i] = W[i];
      }

      if (!Vt) {
        this.cache.put_buffer(W_buff);
        return;
      }

      for (i = 0; i < n1; i++) {
        sd = i < n ? W[i] : 0;

        while (sd <= minval) {
          // if we got a zero singular value, then in order to get the corresponding left singular vector
          // we generate a random vector, project it to the previously computed left singular vectors,
          // subtract the projection and normalize the difference.
          val0 = 1.0 / m;

          for (k = 0; k < m; k++) {
            seed = seed * 214013 + 2531011;
            val = (seed >> 16 & 0x7fff & 256) != 0 ? val0 : -val0;
            At[i * astep + k] = val;
          }

          for (iter = 0; iter < 2; iter++) {
            for (j = 0; j < i; j++) {
              sd = 0;

              for (k = 0; k < m; k++) {
                sd += At[i * astep + k] * At[j * astep + k];
              }

              asum = 0.0;

              for (k = 0; k < m; k++) {
                t = At[i * astep + k] - sd * At[j * astep + k];
                At[i * astep + k] = t;
                asum += Math.abs(t);
              }

              asum = asum ? 1.0 / asum : 0;

              for (k = 0; k < m; k++) {
                At[i * astep + k] *= asum;
              }
            }
          }

          sd = 0;

          for (k = 0; k < m; k++) {
            t = At[i * astep + k];
            sd += t * t;
          }

          sd = Math.sqrt(sd);
        }

        s = 1.0 / sd;

        for (k = 0; k < m; k++) {
          At[i * astep + k] *= s;
        }
      }

      this.cache.put_buffer(W_buff);
    }
  }, {
    key: "lu_solve",
    value: function lu_solve(A, B) {
      var i = 0,
          j = 0,
          k = 0,
          p = 1,
          astep = A.cols;
      var ad = A.data,
          bd = B.data;
      var t, alpha, d, s;

      for (i = 0; i < astep; i++) {
        k = i;

        for (j = i + 1; j < astep; j++) {
          if (Math.abs(ad[j * astep + i]) > Math.abs(ad[k * astep + i])) {
            k = j;
          }
        }

        if (Math.abs(ad[k * astep + i]) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON) {
          return 0; // FAILED
        }

        if (k != i) {
          for (j = i; j < astep; j++) {
            (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(ad, i * astep + j, k * astep + j, t);
          }

          (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(bd, i, k, t);
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
  }, {
    key: "cholesky_solve",
    value: function cholesky_solve(A, B) {
      var col = 0,
          row = 0,
          col2 = 0,
          cs = 0,
          rs = 0,
          i = 0,
          j = 0;
      var size = A.cols;
      var ad = A.data,
          bd = B.data;
      var val, inv_diag;

      for (col = 0; col < size; col++) {
        inv_diag = 1.0;
        cs = col * size;
        rs = cs;

        for (row = col; row < size; row++) {
          // correct for the parts of cholesky already computed
          val = ad[rs + col];

          for (col2 = 0; col2 < col; col2++) {
            val -= ad[col2 * size + col] * ad[rs + col2];
          }

          if (row == col) {
            // this is the diagonal element so don't divide
            ad[rs + col] = val;

            if (val == 0) {
              return 0;
            }

            inv_diag = 1.0 / val;
          } else {
            // cache the value without division in the upper half
            ad[cs + row] = val; // divide my the diagonal element for all others

            ad[rs + col] = val * inv_diag;
          }

          rs = rs + size;
        }
      } // first backsub through L


      cs = 0;

      for (i = 0; i < size; i++) {
        val = bd[i];

        for (j = 0; j < i; j++) {
          val -= ad[cs + j] * bd[j];
        }

        bd[i] = val;
        cs = cs + size;
      } // backsub through diagonal


      cs = 0;

      for (i = 0; i < size; i++) {
        bd[i] /= ad[cs + i];
        cs = cs + size;
      } // backsub through L Transpose


      i = size - 1;

      for (; i >= 0; i--) {
        val = bd[i];
        j = i + 1;
        cs = j * size;

        for (; j < size; j++) {
          val -= ad[cs + i] * bd[j];
          cs = cs + size;
        }

        bd[i] = val;
      }

      return 1;
    }
  }, {
    key: "svd_decompose",
    value: function svd_decompose(A, W, U, V, options) {
      if (typeof options === "undefined") {
        options = 0;
      }

      ;
      var at = 0,
          i = 0,
          j = 0,
          _m = A.rows,
          _n = A.cols,
          m = _m,
          n = _n;
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t; // we only work with single channel

      if (m < n) {
        at = 1;
        i = m;
        m = n;
        n = i;
      }

      var a_buff = this.cache.get_buffer(m * m << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var v_buff = this.cache.get_buffer(n * n << 3);
      var a_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(m, m, dt, a_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, n, dt, w_buff.data);
      var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(n, n, dt, v_buff.data);

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
        if (U && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_V_T) {
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
  }, {
    key: "svd_solve",
    value: function svd_solve(A, X, B) {
      var i = 0,
          j = 0,
          k = 0;
      var pu = 0,
          pv = 0;
      var nrows = A.rows,
          ncols = A.cols;
      var sum = 0.0,
          xsum = 0.0,
          tol = 0.0;
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(ncols, ncols, dt, v_buff.data);
      var bd = B.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
  }, {
    key: "svd_invert",
    value: function svd_invert(Ai, A) {
      var i = 0,
          j = 0,
          k = 0;
      var pu = 0,
          pv = 0,
          pa = 0;
      var nrows = A.rows,
          ncols = A.cols;
      var sum = 0.0,
          tol = 0.0;
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t; //var u_buff = cache1.get_buffer((nrows * nrows) << 3);

      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(ncols, ncols, dt, v_buff.data);
      var id = Ai.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
  }, {
    key: "eigenVV",
    value: function eigenVV(A, vects, vals) {
      var n = A.cols,
          i = n * n;
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t;
      var a_buff = this.cache.get_buffer(n * n << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var a_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(n, n, dt, a_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, n, dt, w_buff.data);

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
  }]);

  return linalg;
}();



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var matmath = /*#__PURE__*/function () {
  function matmath() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, matmath);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(matmath, [{
    key: "identity",
    value: function identity(M, value) {
      if (typeof value === "undefined") {
        value = 1;
      }

      var src = M.data;
      var rows = M.rows,
          cols = M.cols,
          cols_1 = cols + 1 | 0;
      var len = rows * cols;
      var k = len;

      while (--len >= 0) {
        src[len] = 0.0;
      }

      len = k;
      k = 0;

      while (k < len) {
        src[k] = value;
        k = k + cols_1;
      }
    }
  }, {
    key: "transpose",
    value: function transpose(At, A) {
      var i = 0,
          j = 0,
          nrows = A.rows,
          ncols = A.cols;
      var Ai = 0,
          Ati = 0,
          pAt = 0;
      var ad = A.data,
          atd = At.data;

      for (; i < nrows; Ati += 1, Ai += ncols, i++) {
        pAt = Ati;

        for (j = 0; j < ncols; pAt += nrows, j++) {
          atd[pAt] = ad[Ai + j];
        }
      }
    } // C = A * B

  }, {
    key: "multiply",
    value: function multiply(C, A, B) {
      var i = 0,
          j = 0,
          k = 0;
      var Ap = 0,
          pA = 0,
          pB = 0,
          p_B = 0,
          Cp = 0;
      var ncols = A.cols,
          nrows = A.rows,
          mcols = B.cols;
      var ad = A.data,
          bd = B.data,
          cd = C.data;
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
    } // C = A * B'

  }, {
    key: "multiply_ABt",
    value: function multiply_ABt(C, A, B) {
      var i = 0,
          j = 0,
          k = 0;
      var Ap = 0,
          pA = 0,
          pB = 0,
          Cp = 0;
      var ncols = A.cols,
          nrows = A.rows,
          mrows = B.rows;
      var ad = A.data,
          bd = B.data,
          cd = C.data;
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
    } // C = A' * B

  }, {
    key: "multiply_AtB",
    value: function multiply_AtB(C, A, B) {
      var i = 0,
          j = 0,
          k = 0;
      var Ap = 0,
          pA = 0,
          pB = 0,
          p_B = 0,
          Cp = 0;
      var ncols = A.cols,
          nrows = A.rows,
          mcols = B.cols;
      var ad = A.data,
          bd = B.data,
          cd = C.data;
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
    } // C = A * A'

  }, {
    key: "multiply_AAt",
    value: function multiply_AAt(C, A) {
      var i = 0,
          j = 0,
          k = 0;
      var pCdiag = 0,
          p_A = 0,
          pA = 0,
          pB = 0,
          pC = 0,
          pCt = 0;
      var ncols = A.cols,
          nrows = A.rows;
      var ad = A.data,
          cd = C.data;
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

          cd[pC] = sum;
          cd[pCt] = sum;
        }
      }
    } // C = A' * A

  }, {
    key: "multiply_AtA",
    value: function multiply_AtA(C, A) {
      var i = 0,
          j = 0,
          k = 0;
      var p_A = 0,
          pA = 0,
          pB = 0,
          p_C = 0,
          pC = 0,
          p_CC = 0;
      var ncols = A.cols,
          nrows = A.rows;
      var ad = A.data,
          cd = C.data;
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

          cd[pC] = sum;
          cd[p_CC] = sum;
        }
      }
    } // various small matrix operations

  }, {
    key: "identity_3x3",
    value: function identity_3x3(M, value) {
      if (typeof value === "undefined") {
        value = 1;
      }

      var dt = M.data;
      dt[0] = dt[4] = dt[8] = value;
      dt[1] = dt[2] = dt[3] = 0;
      dt[5] = dt[6] = dt[7] = 0;
    }
  }, {
    key: "invert_3x3",
    value: function invert_3x3(from, to) {
      var A = from.data,
          invA = to.data;
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
    } // C = A * B

  }, {
    key: "multiply_3x3",
    value: function multiply_3x3(C, A, B) {
      var Cd = C.data,
          Ad = A.data,
          Bd = B.data;
      var m1_0 = Ad[0],
          m1_1 = Ad[1],
          m1_2 = Ad[2];
      var m1_3 = Ad[3],
          m1_4 = Ad[4],
          m1_5 = Ad[5];
      var m1_6 = Ad[6],
          m1_7 = Ad[7],
          m1_8 = Ad[8];
      var m2_0 = Bd[0],
          m2_1 = Bd[1],
          m2_2 = Bd[2];
      var m2_3 = Bd[3],
          m2_4 = Bd[4],
          m2_5 = Bd[5];
      var m2_6 = Bd[6],
          m2_7 = Bd[7],
          m2_8 = Bd[8];
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
  }, {
    key: "mat3x3_determinant",
    value: function mat3x3_determinant(M) {
      var md = M.data;
      return md[0] * md[4] * md[8] - md[0] * md[5] * md[7] - md[3] * md[1] * md[8] + md[3] * md[2] * md[7] + md[6] * md[1] * md[5] - md[6] * md[2] * md[4];
    }
  }, {
    key: "determinant_3x3",
    value: function determinant_3x3(M11, M12, M13, M21, M22, M23, M31, M32, M33) {
      return M11 * M22 * M33 - M11 * M23 * M32 - M21 * M12 * M33 + M21 * M13 * M32 + M31 * M12 * M23 - M31 * M13 * M22;
    }
  }]);

  return matmath;
}();



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data_type/data_type.js */ "./src/data_type/data_type.js");
/* harmony import */ var _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_utils/data_t.js */ "./src/node_utils/data_t.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");






var matrix_t = /*#__PURE__*/function () {
  function matrix_t(c, r, _data_type, _data_buffer) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, matrix_t);

    this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.type = this.dt._get_data_type(_data_type) | 0;
    this.channel = this.dt._get_channel(_data_type) | 0;
    this.cols = c | 0;
    this.rows = r | 0;

    if (typeof _data_buffer === "undefined") {
      this.allocate();
    } else {
      this.buffer = _data_buffer; // data user asked for

      this.data = this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64;
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix_t, [{
    key: "allocate",
    value: function allocate() {
      // clear references
      delete this.data;
      delete this.buffer; //

      this.buffer = new _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.cols * this.dt._get_data_type_size(this.type) * this.channel * this.rows);
      this.data = this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : this.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64;
    }
  }, {
    key: "copy_to",
    value: function copy_to(other) {
      var od = other.data,
          td = this.data;
      var i = 0,
          n = this.cols * this.rows * this.channel | 0;

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
  }, {
    key: "resize",
    value: function resize(c, r, ch) {
      if (typeof ch === "undefined") {
        ch = this.channel;
      } // relocate buffer only if new size doesnt fit


      var new_size = c * this.dt._get_data_type_size(this.type) * ch * r;

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
  }]);

  return matrix_t;
}();



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _data_t_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_t.js */ "./src/node_utils/data_t.js");




var _pool_node_t = /*#__PURE__*/function () {
  function _pool_node_t(size_in_bytes) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _pool_node_t);

    this.next = null;
    this.data = new _data_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](size_in_bytes);
    this.size = this.data.size;
    this.buffer = this.data.buffer;
    this.u8 = this.data.u8;
    this.i32 = this.data.i32;
    this.f32 = this.data.f32;
    this.f64 = this.data.f64;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_pool_node_t, [{
    key: "resize",
    value: function resize() {
      delete this.data;
      this.data = new _data_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](size_in_bytes);
      this.size = this.data.size;
      this.buffer = this.data.buffer;
      this.u8 = this.data.u8;
      this.i32 = this.data.i32;
      this.f32 = this.data.f32;
      this.f64 = this.data.f64;
    }
  }]);

  return _pool_node_t;
}();



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
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var data_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function data_t(size_in_bytes, buffer) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, data_t);

  //super()
  // we need align size to multiple of 8
  this.size = (size_in_bytes + 7 | 0) & -8;

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
});



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgproc/imgproc.js */ "./src/imgproc/imgproc.js");




var pyramid_t = /*#__PURE__*/function () {
  function pyramid_t() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, pyramid_t);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(pyramid_t, [{
    key: "cconstructor",
    value: function cconstructor(levels) {
      this.levels = levels | 0;
      this.data = new Array(levels); //jsfeatNext.imgproc.pyrdown is not yet implemented... 

      this.pyrdown = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_2__["default"].pyrdown();
    }
  }, {
    key: "allocate",
    value: function allocate(start_w, start_h, data_type) {
      var i = this.levels;

      while (--i >= 0) {
        this.data[i] = new jsfeatNext.matrix_t(start_w >> i, start_h >> i, data_type);
      }
    }
  }, {
    key: "build",
    value: function build(input, skip_first_level) {
      if (typeof skip_first_level === "undefined") {
        skip_first_level = true;
      } // just copy data to first level


      var i = 2,
          a = input,
          b = this.data[0];

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
  }]);

  return pyramid_t;
}();



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VkEsc0RBQVVBO0FBREUsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jYWNoZS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9kYXRhX3R5cGUvZGF0YV90eXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9pbWdwcm9jLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2pzZmVhdE5leHQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9rZXlwb2ludF90L2tleXBvaW50X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLWJhc2UuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvcHlyYW1pZF90L3B5cmFtaWRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHksIGRhdGFfc2l6ZSkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlcykge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhX3R5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhX3R5cGVfc2l6ZSA9IG5ldyBJbnQzMkFycmF5KFstMSwgMSwgNCwgLTEsIDQsIC0xLCAtMSwgLTEsIDgsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCA4XSk7O1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZSkge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGKTtcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFfdHlwZV9zaXplWyh0eXBlICYgMHhGRjAwKSA+PiA4XTtcbiAgICB9XG59IiwiaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL3Jlc2FtcGxlLmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbWdwcm9jIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGdyYXlzY2FsZShzcmMsIHcsIGgsIGRzdCwgY29kZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB5cmRvd24oc3JjLCBkc3QsIHN4LCBzeSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG9yIDJ4MyBtYXRyaXhfdCBvbmx5IGZpcnN0IDYgdmFsdWVzIHJlZmVyZW5jZWRcbiAgICB3YXJwX2FmZmluZShzcmMsIGRzdCwgdHJhbnNmb3JtLCBmaWxsX3ZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMsIHNyY19oZWlnaHQgPSBzcmMucm93cywgZHN0X3dpZHRoID0gZHN0LmNvbHMsIGRzdF9oZWlnaHQgPSBkc3Qucm93cztcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4cyA9IG0wMSAqIHkgKyBtMDI7XG4gICAgICAgICAgICB5cyA9IG0xMSAqIHkgKyBtMTI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMgKz0gbTAwLCB5cyArPSBtMTApIHtcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDA7IGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmIChpeHMgPj0gMCAmJiBpeXMgPj0gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0geHMgLSBpeHM7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB5cyAtIGl5cztcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gc3JjX3dpZHRoICogaXlzICsgaXhzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmMsIGRzdCwgbncsIG5oKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgaW52X3NjYWxlXzI1NiA9IChzY2FsZV94ICogc2NhbGVfeSAqIDB4MTAwMDApIHwgMDtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLCBiZXRhID0gMCwgYmV0YTEgPSAwO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBqc2ZlYXROZXh0LmNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBqc2ZlYXROZXh0LmNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5pMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuaTMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSBmc3gxKSAqIDB4MTAwKSB8IDA7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gMjU2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChmc3gyIC0gc3gyKSAqIDI1NikgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDNdO1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogMyArIDFdO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IChNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCkgKiAyNTYpIHwgMDtcbiAgICAgICAgICAgIGJldGExID0gMjU2IC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKGJldGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIDI1NikgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTEpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF0gKiAyNTY7XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqc2ZlYXROZXh0LmNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGpzZmVhdE5leHQuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAganNmZWF0TmV4dC5jYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGUgKHNyYywgZHN0LCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGpzZmVhdE5leHQuY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBqc2ZlYXROZXh0LmNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGpzZmVhdE5leHQuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAganNmZWF0TmV4dC5jYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCBrZXlwb2ludF90IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90LmpzJ1xuaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MuanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IHB5cmFtaWRfdCBmcm9tICcuL3B5cmFtaWRfdC9weXJhbWlkX3QuanMnXG5pbXBvcnQgbGluYWxnIGZyb20gJy4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMi4wXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwianNmZWF0TmV4dCB2ZXJzaW9uOiBcIiwgdGhpcy52ZXJzaW9uKTtcbiAgICB9XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5kYXRhX3QgPSBkYXRhX3RcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IHB5cmFtaWRfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBpbWdwcm9jO1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGxpbmFsZzsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy1iYXNlLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW5hbGcge1xuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAqNCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChBLCBhc3RlcCwgVywgViwgdnN0ZXAsIG4pIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgdmFyIGk9MCxqPTAsaz0wLG09MCxsPTAsaWR4PTAsX2luPTAsX2luMj0wO1xuICAgICAgICB2YXIgaXRlcnM9MCxtYXhfaXRlcj1uKm4qMzA7XG4gICAgICAgIHZhciBtdj0wLjAsdmFsPTAuMCxwPTAuMCx5PTAuMCx0PTAuMCxzPTAuMCxjPTAuMCxhMD0wLjAsYjA9MC4wO1xuICAgIFxuICAgICAgICB2YXIgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG48PDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG48PDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcbiAgICBcbiAgICAgICAgaWYoVikge1xuICAgICAgICAgICAgZm9yKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpKnZzdGVwO1xuICAgICAgICAgICAgICAgIGZvcihqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZm9yKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSprXTtcbiAgICAgICAgICAgIGlmKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvcihtID0gaysxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAqayArIG1dKSwgaSA9IGsrMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmsraV0pO1xuICAgICAgICAgICAgICAgICAgICBpZihtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvcihtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCppK2tdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKG4gPiAxKSBmb3IoIDsgaXRlcnMgPCBtYXhfaXRlcjsgaXRlcnMrKykge1xuICAgICAgICAgICAgLy8gZmluZCBpbmRleCAoayxsKSBvZiBwaXZvdCBwXG4gICAgICAgICAgICBmb3IoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbi0xOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYoIG12IDwgdmFsIClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYoIG12IDwgdmFsIClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpbmRDW2ldLCBsID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcCA9IEFbYXN0ZXAqayArIGxdO1xuICAgIFxuICAgICAgICAgICAgaWYoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcbiAgICBcbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pKjAuNTtcbiAgICAgICAgICAgIHQgPSBNYXRoLmFicyh5KSArIGh5cG90KHAsIHkpO1xuICAgICAgICAgICAgcyA9IGh5cG90KHAsIHQpO1xuICAgICAgICAgICAgYyA9IHQvcztcbiAgICAgICAgICAgIHMgPSBwL3M7IHQgPSAocC90KSpwO1xuICAgICAgICAgICAgaWYoeSA8IDApXG4gICAgICAgICAgICAgICAgcyA9IC1zLCB0ID0gLXQ7XG4gICAgICAgICAgICBBW2FzdGVwKmsgKyBsXSA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZHggPSBqID09IDAgPyBrIDogbDtcbiAgICAgICAgICAgICAgICBpZihpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobSA9IGlkeCsxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAqaWR4ICsgbV0pLCBpID0gaWR4KzI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAqaWR4K2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAqaStpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yKGsgPSAwOyBrIDwgbi0xOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yKGkgPSBrKzE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZihWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCptICsgaSwgdnN0ZXAqayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kUl9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZENfYnVmZik7XG4gICAgfVxuXG4gICAgSmFjb2JpU1ZESW1wbChBdCwgYXN0ZXAsIF9XLCBWdCwgdnN0ZXAsIG0sIG4sIG4xKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpPTAsaj0wLGs9MCxpdGVyPTAsbWF4X2l0ZXI9TWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWk9MCxBaj0wLFZpPTAsVmo9MCxjaGFuZ2VkPTA7XG4gICAgICAgIHZhciBjPTAuMCwgcz0wLjAsIHQ9MC4wO1xuICAgICAgICB2YXIgdDA9MC4wLHQxPTAuMCxzZD0wLjAsYmV0YT0wLjAsZ2FtbWE9MC4wLGRlbHRhPTAuMCxhPTAuMCxwPTAuMCxiPTAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWw9MC4wLHZhbDA9MC4wLGFzdW09MC4wO1xuICAgIFxuICAgICAgICB2YXIgV19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG48PDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG4gICAgICAgIFxuICAgICAgICBmb3IoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCp0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IHNkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihWdCkge1xuICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpKnZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpKnZzdGVwICsgaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihpID0gMDsgaSA8IG4tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKGogPSBpKzE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSphc3RlcCl8MCwgQWogPSAoaiphc3RlcCl8MDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSpBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkrMV0qQXRbQWorMV07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcig7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpK2tdKkF0W0FqK2tdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMocCkgPD0gZXBzKk1hdGguc3FydChhKmIpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBiZXRhIDwgMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkqMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChkZWx0YS9nYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAvKGdhbW1hKnMqMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpLyhnYW1tYSoyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAocC8oZ2FtbWEqYyoyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYT0wLjAsIGI9MC4wO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgayA9IDI7IC8vIHVucm9sbFxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMqQXRbQWldICsgcypBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMqQXRbQWldICsgYypBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCp0MDsgYiArPSB0MSp0MTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjKkF0W0FpKzFdICsgcypBdFtBaisxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypBdFtBaSsxXSArIGMqQXRbQWorMV07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpKzFdID0gdDA7IEF0W0FqKzFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAqdDA7IGIgKz0gdDEqdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciggOyBrIDwgbTsgaysrIClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjKkF0W0FpK2tdICsgcypBdFtBaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMqQXRbQWkra10gKyBjKkF0W0FqK2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkra10gPSB0MDsgQXRbQWora10gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCp0MDsgYiArPSB0MSp0MTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSp2c3RlcCl8MCwgVmogPSAoaip2c3RlcCl8MDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjKlZ0W1ZpXSArIHMqVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypWdFtWaV0gKyBjKlZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypWdFtWaSsxXSArIHMqVnRbVmorMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKlZ0W1ZpKzFdICsgYypWdFtWaisxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpKzFdID0gdDA7IFZ0W1ZqKzFdID0gdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjKlZ0W1ZpK2tdICsgcypWdFtWaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKlZ0W1ZpK2tdICsgYypWdFtWaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdFtWaStrXSA9IHQwOyBWdFtWaitrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCp0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IE1hdGguc3FydChzZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG4tMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvcihrID0gaSsxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaSAhPSBqKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBpLCBqLCBzZCk7XG4gICAgICAgICAgICAgICAgaWYoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpKmFzdGVwICsgaywgaiphc3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkqdnN0ZXAgKyBrLCBqKnZzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG4xOyBpKyspIHtcbiAgICBcbiAgICAgICAgICAgIHNkID0gaSA8IG4gPyBXW2ldIDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAvbSk7XG4gICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kqYXN0ZXAgKyBrXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2QgKz0gQXRbaSphc3RlcCArIGtdKkF0W2oqYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kqYXN0ZXAgKyBrXSAtIHNkKkF0W2oqYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSphc3RlcCArIGtdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3VtICs9IE1hdGguYWJzKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IGFzdW0gPyAxLjAvYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpKmFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBBdFtpKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQqdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzID0gKDEuMC9zZCk7XG4gICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpKmFzdGVwICsga10gKj0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBwID0gMSwgYXN0ZXAgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB0LCBhbHBoYSwgZCwgcztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXN0ZXA7IGkrKykge1xuICAgICAgICAgICAgayA9IGk7XG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbaiAqIGFzdGVwICsgaV0pID4gTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGQUlMRURcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgIT0gaSkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAoYWQsIGkgKiBhc3RlcCArIGosIGsgKiBhc3RlcCArIGosIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3YXAoYmQsIGksIGssIHQpO1xuICAgICAgICAgICAgICAgIHAgPSAtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IC0xLjAgLyBhZFtpICogYXN0ZXAgKyBpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhZFtqICogYXN0ZXAgKyBpXSAqIGQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWRbaiAqIGFzdGVwICsga10gKz0gYWxwaGEgKiBhZFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBiZFtqXSArPSBhbHBoYSAqIGJkW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZFtpICogYXN0ZXAgKyBpXSA9IC1kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gYXN0ZXAgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgcyA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcyAtPSBhZFtpICogYXN0ZXAgKyBrXSAqIGJkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSBzICogYWRbaSAqIGFzdGVwICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTsgLy8gT0tcbiAgICB9XG5cbiAgICBjaG9sZXNreV9zb2x2ZShBLCBCKSB7XG4gICAgICAgIHZhciBjb2wgPSAwLCByb3cgPSAwLCBjb2wyID0gMCwgY3MgPSAwLCBycyA9IDAsIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIHNpemUgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB2YWwsIGludl9kaWFnO1xuXG4gICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgIGludl9kaWFnID0gMS4wO1xuICAgICAgICAgICAgY3MgPSAoY29sICogc2l6ZSk7XG4gICAgICAgICAgICBycyA9IGNzO1xuICAgICAgICAgICAgZm9yIChyb3cgPSBjb2w7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBmb3IgdGhlIHBhcnRzIG9mIGNob2xlc2t5IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgICAgICAgICB2YWwgPSBhZFsocnMgKyBjb2wpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbDIgPSAwOyBjb2wyIDwgY29sOyBjb2wyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjb2wyICogc2l6ZSArIGNvbCldICogYWRbKHJzICsgY29sMildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ID09IGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBkaWFnb25hbCBlbGVtZW50IHNvIGRvbid0IGRpdmlkZVxuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZfZGlhZyA9IDEuMCAvIHZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZSB0aGUgdmFsdWUgd2l0aG91dCBkaXZpc2lvbiBpbiB0aGUgdXBwZXIgaGFsZlxuICAgICAgICAgICAgICAgICAgICBhZFsoY3MgKyByb3cpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2aWRlIG15IHRoZSBkaWFnb25hbCBlbGVtZW50IGZvciBhbGwgb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsICogaW52X2RpYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJzID0gKHJzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCBiYWNrc3ViIHRocm91Z2ggTFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBqKV0gKiBiZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggZGlhZ29uYWxcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBiZFtpXSAvPSBhZFsoY3MgKyBpKV07XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBMIFRyYW5zcG9zZVxuICAgICAgICBpID0gKHNpemUgLSAxKTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGogPSAoaSArIDEpO1xuICAgICAgICAgICAgY3MgPSAoaiAqIHNpemUpO1xuICAgICAgICAgICAgZm9yICg7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaSldICogYmRbal07XG4gICAgICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3ZkX2RlY29tcG9zZShBLCBXLCBVLCBWLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfTtcbiAgICAgICAgdmFyIGF0ID0gMCwgaSA9IDAsIGogPSAwLCBfbSA9IEEucm93cywgX24gPSBBLmNvbHMsIG0gPSBfbSwgbiA9IF9uO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7IC8vIHdlIG9ubHkgd29yayB3aXRoIHNpbmdsZSBjaGFubmVsXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQSwgWCwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDAsIHBhID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgICAgIFxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG4sIG4sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIEphY29iaUltcGwoYV9tdC5kYXRhLCBuLCB3X210LmRhdGEsIHZlY3RzID8gdmVjdHMuZGF0YSA6IG51bGwsIG4sIG4pO1xuXG4gICAgICAgIGlmICh2YWxzKSB7XG4gICAgICAgICAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgICAgICAgICB2YWxzLmRhdGFbbl0gPSB3X210LmRhdGFbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgc3JjID0gTS5kYXRhO1xuICAgICAgICB2YXIgcm93cyA9IE0ucm93cywgY29scyA9IE0uY29scywgY29sc18xID0gKGNvbHMgKyAxKSB8IDA7XG4gICAgICAgIHZhciBsZW4gPSByb3dzICogY29scztcbiAgICAgICAgdmFyIGsgPSBsZW47XG4gICAgICAgIHdoaWxlICgtLWxlbiA+PSAwKSBzcmNbbGVuXSA9IDAuMDtcbiAgICAgICAgbGVuID0gaztcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICBzcmNba10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGsgPSBrICsgY29sc18xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKEF0LCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIEFpID0gMCwgQXRpID0gMCwgcEF0ID0gMDtcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQidcbiAgICBtdWx0aXBseV9BQnQoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbXJvd3MgPSBCLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBBcCsrLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBBJ1xuICAgIG11bHRpcGx5X0FBdChDLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0MgPSAwLCBwQyA9IDAsIHBfQ0MgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwX0NDXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlvdXMgc21hbGwgbWF0cml4IG9wZXJhdGlvbnNcbiAgICBpZGVudGl0eV8zeDMoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIGR0ID0gTS5kYXRhO1xuICAgICAgICBkdFswXSA9IGR0WzRdID0gZHRbOF0gPSB2YWx1ZTtcbiAgICAgICAgZHRbMV0gPSBkdFsyXSA9IGR0WzNdID0gMDtcbiAgICAgICAgZHRbNV0gPSBkdFs2XSA9IGR0WzddID0gMDtcbiAgICB9XG5cbiAgICBpbnZlcnRfM3gzKGZyb20sIHRvKSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDLCBBLCBCKSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTSkge1xuICAgICAgICB2YXIgbWQgPSBNLmRhdGE7XG4gICAgICAgIHJldHVybiBtZFswXSAqIG1kWzRdICogbWRbOF0gLVxuICAgICAgICAgICAgbWRbMF0gKiBtZFs1XSAqIG1kWzddIC1cbiAgICAgICAgICAgIG1kWzNdICogbWRbMV0gKiBtZFs4XSArXG4gICAgICAgICAgICBtZFszXSAqIG1kWzJdICogbWRbN10gK1xuICAgICAgICAgICAgbWRbNl0gKiBtZFsxXSAqIG1kWzVdIC1cbiAgICAgICAgICAgIG1kWzZdICogbWRbMl0gKiBtZFs0XTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudF8zeDMoTTExLCBNMTIsIE0xMyxcbiAgICAgICAgTTIxLCBNMjIsIE0yMyxcbiAgICAgICAgTTMxLCBNMzIsIE0zMykge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCBkYXRhX3R5cGUgZnJvbSAnLi4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdHJpeF90IHtcbiAgICBjb25zdHJ1Y3RvcihjLCByLCBfZGF0YV90eXBlLCBfZGF0YV9idWZmZXIpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXIpIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjLCByLCBjaCkge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBkYXRhX3QgZnJvbSAnLi9kYXRhX3QuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfcG9vbF9ub2RlX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhX3QgIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzLCBidWZmZXIpIHtcbiAgICAgICAgLy9zdXBlcigpXG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufSIsImltcG9ydCBpbWdwcm9jIGZyb20gJy4uL2ltZ3Byb2MvaW1ncHJvYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHB5cmFtaWRfdCB7XG4gICAgY2NvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscyB8IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheShsZXZlbHMpO1xuICAgICAgICAvL2pzZmVhdE5leHQuaW1ncHJvYy5weXJkb3duIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuLi4gXG4gICAgICAgIHRoaXMucHlyZG93biA9IG5ldyBpbWdwcm9jLnB5cmRvd247XG4gICAgfVxuXG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3Qoc3RhcnRfdyA+PiBpLCBzdGFydF9oID4+IGksIGRhdGFfdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZChpbnB1dCwgc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICBpZiAodHlwZW9mIHNraXBfZmlyc3RfbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgc2tpcF9maXJzdF9sZXZlbCA9IHRydWU7IH1cbiAgICAgICAgLy8ganVzdCBjb3B5IGRhdGEgdG8gZmlyc3QgbGV2ZWxcbiAgICAgICAgdmFyIGkgPSAyLCBhID0gaW5wdXQsIGIgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGlmICghc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICAgICAgdmFyIGogPSBpbnB1dC5jb2xzICogaW5wdXQucm93cztcbiAgICAgICAgICAgIHdoaWxlICgtLWogPj0gMCkge1xuICAgICAgICAgICAgICAgIGIuZGF0YVtqXSA9IGlucHV0LmRhdGFbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRoaXMuZGF0YVsxXTtcbiAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICBmb3IgKDsgaSA8IHRoaXMubGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0LmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX3Jlc2FtcGxlIiwiX3Jlc2FtcGxlX3U4IiwiaW1ncHJvYyIsInNyYyIsInciLCJoIiwiZHN0IiwiY29kZSIsIngiLCJ5IiwiaiIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsImRhdGEiLCJzeCIsInN5IiwiY29scyIsInJvd3MiLCJ3MiIsImgyIiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiY2hhbm5lbCIsInNyY19kIiwiZHN0X2QiLCJ0cmFuc2Zvcm0iLCJmaWxsX3ZhbHVlIiwic3JjX3dpZHRoIiwic3JjX2hlaWdodCIsImRzdF93aWR0aCIsImRzdF9oZWlnaHQiLCJvZmYiLCJpeHMiLCJpeXMiLCJ4cyIsInlzIiwiYSIsImIiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJqc2ZlYXROZXh0IiwibnciLCJuaCIsInhvZnNfY291bnQiLCJjaCIsInNjYWxlX3giLCJzY2FsZV95IiwiaW52X3NjYWxlXzI1NiIsImR4IiwiZHkiLCJzeDEiLCJzeDIiLCJrIiwiZnN4MSIsImZzeDIiLCJkeG4iLCJhbHBoYSIsImJldGEiLCJiZXRhMSIsImJ1Zl9ub2RlIiwiZ2V0X2J1ZmZlciIsInN1bV9ub2RlIiwieG9mc19ub2RlIiwiYnVmIiwiaTMyIiwic3VtIiwieG9mcyIsIk1hdGgiLCJtaW4iLCJtYXgiLCJwdXRfYnVmZmVyIiwic2NhbGUiLCJmMzIiLCJhYnMiLCJkYXRhX3QiLCJrZXlwb2ludF90IiwibWF0bWF0aCIsIm1hdHJpeF90IiwicHlyYW1pZF90IiwibGluYWxnIiwiZHQiLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInNjb3JlIiwibGV2ZWwiLCJhbmdsZSIsInN3YXAiLCJBIiwiaTAiLCJpMSIsInQiLCJoeXBvdCIsInNxcnQiLCJhbGxvY2F0ZSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsIm4iLCJlcHMiLCJtIiwibCIsImlkeCIsIl9pbiIsIl9pbjIiLCJpdGVycyIsIm1heF9pdGVyIiwibXYiLCJ2YWwiLCJwIiwicyIsImMiLCJhMCIsImIwIiwiaW5kUl9idWZmIiwiaW5kQ19idWZmIiwiaW5kUiIsImluZEMiLCJBdCIsIl9XIiwiVnQiLCJuMSIsIm1pbnZhbCIsIml0ZXIiLCJBaSIsIkFqIiwiVmkiLCJWaiIsImNoYW5nZWQiLCJ0MCIsInQxIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImFkIiwiYmQiLCJkIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJvcHRpb25zIiwiYXQiLCJfbSIsIl9uIiwiYV9idWZmIiwid19idWZmIiwidl9idWZmIiwiYV9tdCIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwiSmFjb2JpU1ZESW1wbCIsIlgiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwiTSIsInZhbHVlIiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwiQyIsIkFwIiwicEEiLCJwQiIsInBfQiIsIkNwIiwibWNvbHMiLCJjZCIsIm1yb3dzIiwicENkaWFnIiwicF9BIiwicEMiLCJwQ3QiLCJwX0MiLCJwX0NDIiwiZnJvbSIsInRvIiwiaW52QSIsInQyIiwidDQiLCJ0NSIsInQ4IiwidDkiLCJ0MTEiLCJ0MTMiLCJ0MTQiLCJ0MTUiLCJ0MTciLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjMiLCJ0MjYiLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsInIiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJBcnJheUJ1ZmZlciIsImxlbmd0aCIsIlVpbnQ4QXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJsZXZlbHMiLCJBcnJheSIsInB5cmRvd24iLCJzdGFydF93Iiwic3RhcnRfaCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCJdLCJzb3VyY2VSb290IjoiIn0=