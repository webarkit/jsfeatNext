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
/* harmony import */ var _orb_orb_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orb/orb.js */ "./src/orb/orb.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../package.json */ "./package.json");

















var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, jsfeatNext);

    this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  } // VERSION


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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_15__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "EPSILON", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "FLT_MIN", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C1_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C2_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C3_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C4_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_U_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_V_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_14__.JSFEAT_CONSTANTS.SVD_V_T);

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
jsfeatNext.orb = _orb_orb_js__WEBPACK_IMPORTED_MODULE_13__["default"];

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

/***/ "./src/orb/bit_pattern_31.js":
/*!***********************************!*\
  !*** ./src/orb/bit_pattern_31.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bit_pattern_31": () => (/* binding */ bit_pattern_31)
/* harmony export */ });
var bit_pattern_31 = [8, -3, 9, 5
/*mean (0), correlation (0)*/
, 4, 2, 7, -12
/*mean (1.12461e-05), correlation (0.0437584)*/
, -11, 9, -8, 2
/*mean (3.37382e-05), correlation (0.0617409)*/
, 7, -12, 12, -13
/*mean (5.62303e-05), correlation (0.0636977)*/
, 2, -13, 2, 12
/*mean (0.000134953), correlation (0.085099)*/
, 1, -7, 1, 6
/*mean (0.000528565), correlation (0.0857175)*/
, -2, -10, -2, -4
/*mean (0.0188821), correlation (0.0985774)*/
, -13, -13, -11, -8
/*mean (0.0363135), correlation (0.0899616)*/
, -13, -3, -12, -9
/*mean (0.121806), correlation (0.099849)*/
, 10, 4, 11, 9
/*mean (0.122065), correlation (0.093285)*/
, -13, -8, -8, -9
/*mean (0.162787), correlation (0.0942748)*/
, -11, 7, -9, 12
/*mean (0.21561), correlation (0.0974438)*/
, 7, 7, 12, 6
/*mean (0.160583), correlation (0.130064)*/
, -4, -5, -3, 0
/*mean (0.228171), correlation (0.132998)*/
, -13, 2, -12, -3
/*mean (0.00997526), correlation (0.145926)*/
, -9, 0, -7, 5
/*mean (0.198234), correlation (0.143636)*/
, 12, -6, 12, -1
/*mean (0.0676226), correlation (0.16689)*/
, -3, 6, -2, 12
/*mean (0.166847), correlation (0.171682)*/
, -6, -13, -4, -8
/*mean (0.101215), correlation (0.179716)*/
, 11, -13, 12, -8
/*mean (0.200641), correlation (0.192279)*/
, 4, 7, 5, 1
/*mean (0.205106), correlation (0.186848)*/
, 5, -3, 10, -3
/*mean (0.234908), correlation (0.192319)*/
, 3, -7, 6, 12
/*mean (0.0709964), correlation (0.210872)*/
, -8, -7, -6, -2
/*mean (0.0939834), correlation (0.212589)*/
, -2, 11, -1, -10
/*mean (0.127778), correlation (0.20866)*/
, -13, 12, -8, 10
/*mean (0.14783), correlation (0.206356)*/
, -7, 3, -5, -3
/*mean (0.182141), correlation (0.198942)*/
, -4, 2, -3, 7
/*mean (0.188237), correlation (0.21384)*/
, -10, -12, -6, 11
/*mean (0.14865), correlation (0.23571)*/
, 5, -12, 6, -7
/*mean (0.222312), correlation (0.23324)*/
, 5, -6, 7, -1
/*mean (0.229082), correlation (0.23389)*/
, 1, 0, 4, -5
/*mean (0.241577), correlation (0.215286)*/
, 9, 11, 11, -13
/*mean (0.00338507), correlation (0.251373)*/
, 4, 7, 4, 12
/*mean (0.131005), correlation (0.257622)*/
, 2, -1, 4, 4
/*mean (0.152755), correlation (0.255205)*/
, -4, -12, -2, 7
/*mean (0.182771), correlation (0.244867)*/
, -8, -5, -7, -10
/*mean (0.186898), correlation (0.23901)*/
, 4, 11, 9, 12
/*mean (0.226226), correlation (0.258255)*/
, 0, -8, 1, -13
/*mean (0.0897886), correlation (0.274827)*/
, -13, -2, -8, 2
/*mean (0.148774), correlation (0.28065)*/
, -3, -2, -2, 3
/*mean (0.153048), correlation (0.283063)*/
, -6, 9, -4, -9
/*mean (0.169523), correlation (0.278248)*/
, 8, 12, 10, 7
/*mean (0.225337), correlation (0.282851)*/
, 0, 9, 1, 3
/*mean (0.226687), correlation (0.278734)*/
, 7, -5, 11, -10
/*mean (0.00693882), correlation (0.305161)*/
, -13, -6, -11, 0
/*mean (0.0227283), correlation (0.300181)*/
, 10, 7, 12, 1
/*mean (0.125517), correlation (0.31089)*/
, -6, -3, -6, 12
/*mean (0.131748), correlation (0.312779)*/
, 10, -9, 12, -4
/*mean (0.144827), correlation (0.292797)*/
, -13, 8, -8, -12
/*mean (0.149202), correlation (0.308918)*/
, -13, 0, -8, -4
/*mean (0.160909), correlation (0.310013)*/
, 3, 3, 7, 8
/*mean (0.177755), correlation (0.309394)*/
, 5, 7, 10, -7
/*mean (0.212337), correlation (0.310315)*/
, -1, 7, 1, -12
/*mean (0.214429), correlation (0.311933)*/
, 3, -10, 5, 6
/*mean (0.235807), correlation (0.313104)*/
, 2, -4, 3, -10
/*mean (0.00494827), correlation (0.344948)*/
, -13, 0, -13, 5
/*mean (0.0549145), correlation (0.344675)*/
, -13, -7, -12, 12
/*mean (0.103385), correlation (0.342715)*/
, -13, 3, -11, 8
/*mean (0.134222), correlation (0.322922)*/
, -7, 12, -4, 7
/*mean (0.153284), correlation (0.337061)*/
, 6, -10, 12, 8
/*mean (0.154881), correlation (0.329257)*/
, -9, -1, -7, -6
/*mean (0.200967), correlation (0.33312)*/
, -2, -5, 0, 12
/*mean (0.201518), correlation (0.340635)*/
, -12, 5, -7, 5
/*mean (0.207805), correlation (0.335631)*/
, 3, -10, 8, -13
/*mean (0.224438), correlation (0.34504)*/
, -7, -7, -4, 5
/*mean (0.239361), correlation (0.338053)*/
, -3, -2, -1, -7
/*mean (0.240744), correlation (0.344322)*/
, 2, 9, 5, -11
/*mean (0.242949), correlation (0.34145)*/
, -11, -13, -5, -13
/*mean (0.244028), correlation (0.336861)*/
, -1, 6, 0, -1
/*mean (0.247571), correlation (0.343684)*/
, 5, -3, 5, 2
/*mean (0.000697256), correlation (0.357265)*/
, -4, -13, -4, 12
/*mean (0.00213675), correlation (0.373827)*/
, -9, -6, -9, 6
/*mean (0.0126856), correlation (0.373938)*/
, -12, -10, -8, -4
/*mean (0.0152497), correlation (0.364237)*/
, 10, 2, 12, -3
/*mean (0.0299933), correlation (0.345292)*/
, 7, 12, 12, 12
/*mean (0.0307242), correlation (0.366299)*/
, -7, -13, -6, 5
/*mean (0.0534975), correlation (0.368357)*/
, -4, 9, -3, 4
/*mean (0.099865), correlation (0.372276)*/
, 7, -1, 12, 2
/*mean (0.117083), correlation (0.364529)*/
, -7, 6, -5, 1
/*mean (0.126125), correlation (0.369606)*/
, -13, 11, -12, 5
/*mean (0.130364), correlation (0.358502)*/
, -3, 7, -2, -6
/*mean (0.131691), correlation (0.375531)*/
, 7, -8, 12, -7
/*mean (0.160166), correlation (0.379508)*/
, -13, -7, -11, -12
/*mean (0.167848), correlation (0.353343)*/
, 1, -3, 12, 12
/*mean (0.183378), correlation (0.371916)*/
, 2, -6, 3, 0
/*mean (0.228711), correlation (0.371761)*/
, -4, 3, -2, -13
/*mean (0.247211), correlation (0.364063)*/
, -1, -13, 1, 9
/*mean (0.249325), correlation (0.378139)*/
, 7, 1, 8, -6
/*mean (0.000652272), correlation (0.411682)*/
, 1, -1, 3, 12
/*mean (0.00248538), correlation (0.392988)*/
, 9, 1, 12, 6
/*mean (0.0206815), correlation (0.386106)*/
, -1, -9, -1, 3
/*mean (0.0364485), correlation (0.410752)*/
, -13, -13, -10, 5
/*mean (0.0376068), correlation (0.398374)*/
, 7, 7, 10, 12
/*mean (0.0424202), correlation (0.405663)*/
, 12, -5, 12, 9
/*mean (0.0942645), correlation (0.410422)*/
, 6, 3, 7, 11
/*mean (0.1074), correlation (0.413224)*/
, 5, -13, 6, 10
/*mean (0.109256), correlation (0.408646)*/
, 2, -12, 2, 3
/*mean (0.131691), correlation (0.416076)*/
, 3, 8, 4, -6
/*mean (0.165081), correlation (0.417569)*/
, 2, 6, 12, -13
/*mean (0.171874), correlation (0.408471)*/
, 9, -12, 10, 3
/*mean (0.175146), correlation (0.41296)*/
, -8, 4, -7, 9
/*mean (0.183682), correlation (0.402956)*/
, -11, 12, -4, -6
/*mean (0.184672), correlation (0.416125)*/
, 1, 12, 2, -8
/*mean (0.191487), correlation (0.386696)*/
, 6, -9, 7, -4
/*mean (0.192668), correlation (0.394771)*/
, 2, 3, 3, -2
/*mean (0.200157), correlation (0.408303)*/
, 6, 3, 11, 0
/*mean (0.204588), correlation (0.411762)*/
, 3, -3, 8, -8
/*mean (0.205904), correlation (0.416294)*/
, 7, 8, 9, 3
/*mean (0.213237), correlation (0.409306)*/
, -11, -5, -6, -4
/*mean (0.243444), correlation (0.395069)*/
, -10, 11, -5, 10
/*mean (0.247672), correlation (0.413392)*/
, -5, -8, -3, 12
/*mean (0.24774), correlation (0.411416)*/
, -10, 5, -9, 0
/*mean (0.00213675), correlation (0.454003)*/
, 8, -1, 12, -6
/*mean (0.0293635), correlation (0.455368)*/
, 4, -6, 6, -11
/*mean (0.0404971), correlation (0.457393)*/
, -10, 12, -8, 7
/*mean (0.0481107), correlation (0.448364)*/
, 4, -2, 6, 7
/*mean (0.050641), correlation (0.455019)*/
, -2, 0, -2, 12
/*mean (0.0525978), correlation (0.44338)*/
, -5, -8, -5, 2
/*mean (0.0629667), correlation (0.457096)*/
, 7, -6, 10, 12
/*mean (0.0653846), correlation (0.445623)*/
, -9, -13, -8, -8
/*mean (0.0858749), correlation (0.449789)*/
, -5, -13, -5, -2
/*mean (0.122402), correlation (0.450201)*/
, 8, -8, 9, -13
/*mean (0.125416), correlation (0.453224)*/
, -9, -11, -9, 0
/*mean (0.130128), correlation (0.458724)*/
, 1, -8, 1, -2
/*mean (0.132467), correlation (0.440133)*/
, 7, -4, 9, 1
/*mean (0.132692), correlation (0.454)*/
, -2, 1, -1, -4
/*mean (0.135695), correlation (0.455739)*/
, 11, -6, 12, -11
/*mean (0.142904), correlation (0.446114)*/
, -12, -9, -6, 4
/*mean (0.146165), correlation (0.451473)*/
, 3, 7, 7, 12
/*mean (0.147627), correlation (0.456643)*/
, 5, 5, 10, 8
/*mean (0.152901), correlation (0.455036)*/
, 0, -4, 2, 8
/*mean (0.167083), correlation (0.459315)*/
, -9, 12, -5, -13
/*mean (0.173234), correlation (0.454706)*/
, 0, 7, 2, 12
/*mean (0.18312), correlation (0.433855)*/
, -1, 2, 1, 7
/*mean (0.185504), correlation (0.443838)*/
, 5, 11, 7, -9
/*mean (0.185706), correlation (0.451123)*/
, 3, 5, 6, -8
/*mean (0.188968), correlation (0.455808)*/
, -13, -4, -8, 9
/*mean (0.191667), correlation (0.459128)*/
, -5, 9, -3, -3
/*mean (0.193196), correlation (0.458364)*/
, -4, -7, -3, -12
/*mean (0.196536), correlation (0.455782)*/
, 6, 5, 8, 0
/*mean (0.1972), correlation (0.450481)*/
, -7, 6, -6, 12
/*mean (0.199438), correlation (0.458156)*/
, -13, 6, -5, -2
/*mean (0.211224), correlation (0.449548)*/
, 1, -10, 3, 10
/*mean (0.211718), correlation (0.440606)*/
, 4, 1, 8, -4
/*mean (0.213034), correlation (0.443177)*/
, -2, -2, 2, -13
/*mean (0.234334), correlation (0.455304)*/
, 2, -12, 12, 12
/*mean (0.235684), correlation (0.443436)*/
, -2, -13, 0, -6
/*mean (0.237674), correlation (0.452525)*/
, 4, 1, 9, 3
/*mean (0.23962), correlation (0.444824)*/
, -6, -10, -3, -5
/*mean (0.248459), correlation (0.439621)*/
, -3, -13, -1, 1
/*mean (0.249505), correlation (0.456666)*/
, 7, 5, 12, -11
/*mean (0.00119208), correlation (0.495466)*/
, 4, -2, 5, -7
/*mean (0.00372245), correlation (0.484214)*/
, -13, 9, -9, -5
/*mean (0.00741116), correlation (0.499854)*/
, 7, 1, 8, 6
/*mean (0.0208952), correlation (0.499773)*/
, 7, -8, 7, 6
/*mean (0.0220085), correlation (0.501609)*/
, -7, -4, -7, 1
/*mean (0.0233806), correlation (0.496568)*/
, -8, 11, -7, -8
/*mean (0.0236505), correlation (0.489719)*/
, -13, 6, -12, -8
/*mean (0.0268781), correlation (0.503487)*/
, 2, 4, 3, 9
/*mean (0.0323324), correlation (0.501938)*/
, 10, -5, 12, 3
/*mean (0.0399235), correlation (0.494029)*/
, -6, -5, -6, 7
/*mean (0.0420153), correlation (0.486579)*/
, 8, -3, 9, -8
/*mean (0.0548021), correlation (0.484237)*/
, 2, -12, 2, 8
/*mean (0.0616622), correlation (0.496642)*/
, -11, -2, -10, 3
/*mean (0.0627755), correlation (0.498563)*/
, -12, -13, -7, -9
/*mean (0.0829622), correlation (0.495491)*/
, -11, 0, -10, -5
/*mean (0.0843342), correlation (0.487146)*/
, 5, -3, 11, 8
/*mean (0.0929937), correlation (0.502315)*/
, -2, -13, -1, 12
/*mean (0.113327), correlation (0.48941)*/
, -1, -8, 0, 9
/*mean (0.132119), correlation (0.467268)*/
, -13, -11, -12, -5
/*mean (0.136269), correlation (0.498771)*/
, -10, -2, -10, 11
/*mean (0.142173), correlation (0.498714)*/
, -3, 9, -2, -13
/*mean (0.144141), correlation (0.491973)*/
, 2, -3, 3, 2
/*mean (0.14892), correlation (0.500782)*/
, -9, -13, -4, 0
/*mean (0.150371), correlation (0.498211)*/
, -4, 6, -3, -10
/*mean (0.152159), correlation (0.495547)*/
, -4, 12, -2, -7
/*mean (0.156152), correlation (0.496925)*/
, -6, -11, -4, 9
/*mean (0.15749), correlation (0.499222)*/
, 6, -3, 6, 11
/*mean (0.159211), correlation (0.503821)*/
, -13, 11, -5, 5
/*mean (0.162427), correlation (0.501907)*/
, 11, 11, 12, 6
/*mean (0.16652), correlation (0.497632)*/
, 7, -5, 12, -2
/*mean (0.169141), correlation (0.484474)*/
, -1, 12, 0, 7
/*mean (0.169456), correlation (0.495339)*/
, -4, -8, -3, -2
/*mean (0.171457), correlation (0.487251)*/
, -7, 1, -6, 7
/*mean (0.175), correlation (0.500024)*/
, -13, -12, -8, -13
/*mean (0.175866), correlation (0.497523)*/
, -7, -2, -6, -8
/*mean (0.178273), correlation (0.501854)*/
, -8, 5, -6, -9
/*mean (0.181107), correlation (0.494888)*/
, -5, -1, -4, 5
/*mean (0.190227), correlation (0.482557)*/
, -13, 7, -8, 10
/*mean (0.196739), correlation (0.496503)*/
, 1, 5, 5, -13
/*mean (0.19973), correlation (0.499759)*/
, 1, 0, 10, -13
/*mean (0.204465), correlation (0.49873)*/
, 9, 12, 10, -1
/*mean (0.209334), correlation (0.49063)*/
, 5, -8, 10, -9
/*mean (0.211134), correlation (0.503011)*/
, -1, 11, 1, -13
/*mean (0.212), correlation (0.499414)*/
, -9, -3, -6, 2
/*mean (0.212168), correlation (0.480739)*/
, -1, -10, 1, 12
/*mean (0.212731), correlation (0.502523)*/
, -13, 1, -8, -10
/*mean (0.21327), correlation (0.489786)*/
, 8, -11, 10, -6
/*mean (0.214159), correlation (0.488246)*/
, 2, -13, 3, -6
/*mean (0.216993), correlation (0.50287)*/
, 7, -13, 12, -9
/*mean (0.223639), correlation (0.470502)*/
, -10, -10, -5, -7
/*mean (0.224089), correlation (0.500852)*/
, -10, -8, -8, -13
/*mean (0.228666), correlation (0.502629)*/
, 4, -6, 8, 5
/*mean (0.22906), correlation (0.498305)*/
, 3, 12, 8, -13
/*mean (0.233378), correlation (0.503825)*/
, -4, 2, -3, -3
/*mean (0.234323), correlation (0.476692)*/
, 5, -13, 10, -12
/*mean (0.236392), correlation (0.475462)*/
, 4, -13, 5, -1
/*mean (0.236842), correlation (0.504132)*/
, -9, 9, -4, 3
/*mean (0.236977), correlation (0.497739)*/
, 0, 3, 3, -9
/*mean (0.24314), correlation (0.499398)*/
, -12, 1, -6, 1
/*mean (0.243297), correlation (0.489447)*/
, 3, 2, 4, -8
/*mean (0.00155196), correlation (0.553496)*/
, -10, -10, -10, 9
/*mean (0.00239541), correlation (0.54297)*/
, 8, -13, 12, 12
/*mean (0.0034413), correlation (0.544361)*/
, -8, -12, -6, -5
/*mean (0.003565), correlation (0.551225)*/
, 2, 2, 3, 7
/*mean (0.00835583), correlation (0.55285)*/
, 10, 6, 11, -8
/*mean (0.00885065), correlation (0.540913)*/
, 6, 8, 8, -12
/*mean (0.0101552), correlation (0.551085)*/
, -7, 10, -6, 5
/*mean (0.0102227), correlation (0.533635)*/
, -3, -9, -3, 9
/*mean (0.0110211), correlation (0.543121)*/
, -1, -13, -1, 5
/*mean (0.0113473), correlation (0.550173)*/
, -3, -7, -3, 4
/*mean (0.0140913), correlation (0.554774)*/
, -8, -2, -8, 3
/*mean (0.017049), correlation (0.55461)*/
, 4, 2, 12, 12
/*mean (0.01778), correlation (0.546921)*/
, 2, -5, 3, 11
/*mean (0.0224022), correlation (0.549667)*/
, 6, -9, 11, -13
/*mean (0.029161), correlation (0.546295)*/
, 3, -1, 7, 12
/*mean (0.0303081), correlation (0.548599)*/
, 11, -1, 12, 4
/*mean (0.0355151), correlation (0.523943)*/
, -3, 0, -3, 6
/*mean (0.0417904), correlation (0.543395)*/
, 4, -11, 4, 12
/*mean (0.0487292), correlation (0.542818)*/
, 2, -4, 2, 1
/*mean (0.0575124), correlation (0.554888)*/
, -10, -6, -8, 1
/*mean (0.0594242), correlation (0.544026)*/
, -13, 7, -11, 1
/*mean (0.0597391), correlation (0.550524)*/
, -13, 12, -11, -13
/*mean (0.0608974), correlation (0.55383)*/
, 6, 0, 11, -13
/*mean (0.065126), correlation (0.552006)*/
, 0, -1, 1, 4
/*mean (0.074224), correlation (0.546372)*/
, -13, 3, -9, -2
/*mean (0.0808592), correlation (0.554875)*/
, -9, 8, -6, -3
/*mean (0.0883378), correlation (0.551178)*/
, -13, -6, -8, -2
/*mean (0.0901035), correlation (0.548446)*/
, 5, -9, 8, 10
/*mean (0.0949843), correlation (0.554694)*/
, 2, 7, 3, -9
/*mean (0.0994152), correlation (0.550979)*/
, -1, -6, -1, -1
/*mean (0.10045), correlation (0.552714)*/
, 9, 5, 11, -2
/*mean (0.100686), correlation (0.552594)*/
, 11, -3, 12, -8
/*mean (0.101091), correlation (0.532394)*/
, 3, 0, 3, 5
/*mean (0.101147), correlation (0.525576)*/
, -1, 4, 0, 10
/*mean (0.105263), correlation (0.531498)*/
, 3, -6, 4, 5
/*mean (0.110785), correlation (0.540491)*/
, -13, 0, -10, 5
/*mean (0.112798), correlation (0.536582)*/
, 5, 8, 12, 11
/*mean (0.114181), correlation (0.555793)*/
, 8, 9, 9, -6
/*mean (0.117431), correlation (0.553763)*/
, 7, -4, 8, -12
/*mean (0.118522), correlation (0.553452)*/
, -10, 4, -10, 9
/*mean (0.12094), correlation (0.554785)*/
, 7, 3, 12, 4
/*mean (0.122582), correlation (0.555825)*/
, 9, -7, 10, -2
/*mean (0.124978), correlation (0.549846)*/
, 7, 0, 12, -2
/*mean (0.127002), correlation (0.537452)*/
, -1, -6, 0, -11
/*mean (0.127148), correlation (0.547401)*/
];

/***/ }),

/***/ "./src/orb/orb.js":
/*!************************!*\
  !*** ./src/orb/orb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orb)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _bit_pattern_31_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bit_pattern_31.js */ "./src/orb/bit_pattern_31.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _rectify_patch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rectify_patch.js */ "./src/orb/rectify_patch.js");







var orb = /*#__PURE__*/function () {
  function orb() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, orb);

    this.bit_pattern_31_ = new Int32Array(_bit_pattern_31_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.H = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.C1_t);
    this.patch_img = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](32, 32, _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.C1_t);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(orb, [{
    key: "describe",
    value: function describe(src, corners, count, descriptors) {
      var DESCR_SIZE = 32; // bytes;

      var i = 0,
          b = 0,
          px = 0.0,
          py = 0.0,
          angle = 0.0;
      var t0 = 0,
          t1 = 0,
          val = 0;
      var img = src.data,
          w = src.cols,
          h = src.rows;
      var patch_d = this.patch_img.data;
      var patch_off = 16 * 32 + 16; // center of patch

      var patt = 0;

      if (!(descriptors.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t)) {
        // relocate to U8 type
        descriptors.type = _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t;
        descriptors.cols = DESCR_SIZE;
        descriptors.rows = count;
        descriptors.channel = 1;
        descriptors.allocate();
      } else {
        descriptors.resize(DESCR_SIZE, count, 1);
      }

      var descr_d = descriptors.data;
      var descr_off = 0;

      for (i = 0; i < count; ++i) {
        px = corners[i].x;
        py = corners[i].y;
        angle = corners[i].angle;
        (0,_rectify_patch_js__WEBPACK_IMPORTED_MODULE_5__["default"])(src, patch_img, angle, px, py, 32); // describe the patch

        patt = 0;

        for (b = 0; b < DESCR_SIZE; ++b) {
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val = t0 < t1 | 0;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 1;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 2;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 3;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 4;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 5;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 6;
          t0 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          t1 = patch_d[patch_off + this.bit_pattern_31_[patt + 1] * 32 + this.bit_pattern_31_[patt]];
          patt += 2;
          val |= (t0 < t1) << 7;
          descr_d[descr_off + b] = val;
        }

        descr_off += DESCR_SIZE;
      }
    }
  }]);

  return orb;
}();



/***/ }),

/***/ "./src/orb/rectify_patch.js":
/*!**********************************!*\
  !*** ./src/orb/rectify_patch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rectify_patch": () => (/* binding */ rectify_patch)
/* harmony export */ });
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgproc/imgproc.js */ "./src/imgproc/imgproc.js");

function rectify_patch(src, dst, angle, px, py, psize) {
  var cosine = Math.cos(angle);
  var sine = Math.sin(angle);
  var imgprc = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  H.data[0] = cosine, H.data[1] = -sine, H.data[2] = (-cosine + sine) * psize * 0.5 + px, H.data[3] = sine, H.data[4] = cosine, H.data[5] = (-sine - cosine) * psize * 0.5 + py;
  imgprc.warp_affine(src, dst, H, 128);
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

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"jsfeatnext","version":"0.3.0","description":"ES6 version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/index.d.ts","scripts":{"test":"npm run test","types":"tsc","dev":"webpack --mode development --progress --watch","build":"webpack --mode production"},"repository":{"type":"git","url":"git+https://github.com/kalwalt/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/kalwalt/jsfeatNext/issues"},"homepage":"https://github.com/kalwalt/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.18.6","@babel/plugin-transform-runtime":"^7.18.6","@babel/preset-env":"^7.18.6","babel-loader":"^8.2.5","typescript":"^4.6.3","webpack":"^5.73.0","webpack-cli":"^4.10.0"},"dependencies":{"@babel/runtime":"^7.18.6"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLEtBQUttVixNQUFoQixFQUF3QixFQUFFblYsQ0FBMUIsRUFBNkI7UUFDekI0RSxDQUFDLEdBQUdDLENBQUo7UUFDQUEsQ0FBQyxHQUFHLEtBQUs1QixJQUFMLENBQVVqRCxDQUFWLENBQUo7UUFDQSxLQUFLcVYsT0FBTCxDQUFhelEsQ0FBYixFQUFnQkMsQ0FBaEI7TUFDSDtJQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDVTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaVSxVQUFVLEVBQVZBLHNEQUFVQTtBQURFLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY2FjaGUvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvZGF0YV90eXBlL2RhdGFfdHlwZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvaW1ncHJvYy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvcmVzYW1wbGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9qc2ZlYXROZXh0LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMva2V5cG9pbnRfdC9rZXlwb2ludF90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbGluYWxnL2xpbmFsZy1iYXNlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbGluYWxnL2xpbmFsZy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21hdG1hdGgvbWF0bWF0aC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21hdHJpeF90L21hdHJpeF90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL2RhdGFfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9iaXRfcGF0dGVybl8zMS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9vcmIuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3B5cmFtaWRfdC9weXJhbWlkX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5LCBkYXRhX3NpemUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90eXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImltcG9ydCB7IF9yZXNhbXBsZSwgX3Jlc2FtcGxlX3U4IH0gZnJvbSAnLi9yZXNhbXBsZS5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1ncHJvYyB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBncmF5c2NhbGUoc3JjLCB3LCBoLCBkc3QsIGNvZGUpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBkZWZhdWx0IGltYWdlIGRhdGEgcmVwcmVzZW50YXRpb24gaW4gYnJvd3NlclxuICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT09IFwidW5kZWZpbmVkXCIpIHsgY29kZSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZOyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIGkgPSAwLCBqID0gMCwgaXIgPSAwLCBqciA9IDA7XG4gICAgICAgIHZhciBjb2VmZl9yID0gNDg5OSwgY29lZmZfZyA9IDk2MTcsIGNvZWZmX2IgPSAxODY4LCBjbiA9IDQ7XG5cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjb2VmZl9yID0gMTg2ODtcbiAgICAgICAgICAgIGNvZWZmX2IgPSA0ODk5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjbiA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNuMiA9IGNuIDw8IDEsIGNuMyA9IChjbiAqIDMpIHwgMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDEpO1xuICAgICAgICB2YXIgZHN0X3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSwgaiArPSB3LCBpICs9IHcgKiBjbikge1xuICAgICAgICAgICAgZm9yICh4ID0gMCwgaXIgPSBpLCBqciA9IGo7IHggPD0gdyAtIDQ7IHggKz0gNCwgaXIgKz0gY24gPDwgMiwganIgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAxXSA9IChzcmNbaXIgKyBjbl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24gKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDJdID0gKHNyY1tpciArIGNuMl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24yICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24yICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgM10gPSAoc3JjW2lyICsgY24zXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjMgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjMgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK2pyLCBpciArPSBjbikge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBweXJkb3duKHNyYywgZHN0LCBzeCwgc3kpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIGJiZlxuICAgICAgICBpZiAodHlwZW9mIHN4ID09PSBcInVuZGVmaW5lZFwiKSB7IHN4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN5ID09PSBcInVuZGVmaW5lZFwiKSB7IHN5ID0gMDsgfVxuXG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHcyID0gdyA+PiAxLCBoMiA9IGggPj4gMTtcbiAgICAgICAgdmFyIF93MiA9IHcyIC0gKHN4IDw8IDEpLCBfaDIgPSBoMiAtIChzeSA8PCAxKTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgc3B0ciA9IHN4ICsgc3kgKiB3LCBzbGluZSA9IDAsIGRwdHIgPSAwLCBkbGluZSA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3MiwgaDIsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgX2gyOyArK3kpIHtcbiAgICAgICAgICAgIHNsaW5lID0gc3B0cjtcbiAgICAgICAgICAgIGRsaW5lID0gZHB0cjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gX3cyIC0gMjsgeCArPSAyLCBkbGluZSArPSAyLCBzbGluZSArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lICsgMV0gPSAoc3JjX2Rbc2xpbmUgKyAyXSArIHNyY19kW3NsaW5lICsgM10gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHcgKyAyXSArIHNyY19kW3NsaW5lICsgdyArIDNdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgX3cyOyArK3gsICsrZGxpbmUsIHNsaW5lICs9IDIpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHRyICs9IHcgPDwgMTtcbiAgICAgICAgICAgIGRwdHIgKz0gdzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjLCBkc3QsIHRyYW5zZm9ybSwgZmlsbF92YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OCAoc3JjLCBkc3QsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGpzZmVhdE5leHQuY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0ganNmZWF0TmV4dC5jYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAganNmZWF0TmV4dC5jYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBqc2ZlYXROZXh0LmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGpzZmVhdE5leHQuY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlIChzcmMsIGRzdCwgbncsIG5oKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgc2NhbGUgPSAxLjAgLyAoc2NhbGVfeCAqIHNjYWxlX3kpO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAuMCwgYmV0YSA9IDAuMCwgYmV0YTEgPSAwLjA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBqc2ZlYXROZXh0LmNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGpzZmVhdE5leHQuY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGpzZmVhdE5leHQuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5mMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gxIC0gZnN4MSkgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChmc3gyIC0gc3gyKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDNdIHwgMDtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDMgKyAxXSB8IDA7XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApO1xuICAgICAgICAgICAgYmV0YTEgPSAxLjAgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYmV0YSkgPCAxZS0zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTE7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAganNmZWF0TmV4dC5jYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBqc2ZlYXROZXh0LmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGpzZmVhdE5leHQuY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufSIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcydcbmltcG9ydCBkYXRhX3R5cGUgZnJvbSAnLi9kYXRhX3R5cGUvZGF0YV90eXBlLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4vbm9kZV91dGlscy9kYXRhX3QuanMnXG5pbXBvcnQga2V5cG9pbnRfdCBmcm9tICcuL2tleXBvaW50X3Qva2V5cG9pbnRfdC5qcydcbmltcG9ydCBpbWdwcm9jIGZyb20gJy4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGguanMnXG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBweXJhbWlkX3QgZnJvbSAnLi9weXJhbWlkX3QvcHlyYW1pZF90LmpzJ1xuaW1wb3J0IGxpbmFsZyBmcm9tICcuL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgb3JiIGZyb20gJy4vb3JiL29yYi5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5kYXRhX3QgPSBkYXRhX3RcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IHB5cmFtaWRfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBpbWdwcm9jO1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGxpbmFsZztcblxuanNmZWF0TmV4dC5vcmIgPSBvcmI7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgc2NvcmUsIGxldmVsLCBhbmdsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHsgeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ID09PSBcInVuZGVmaW5lZFwiKSB7IHkgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NvcmUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2NvcmUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09IFwidW5kZWZpbmVkXCIpIHsgYW5nbGUgPSAtMS4wOyB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN3YXAoQSwgaTAsIGkxLCB0KSB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYSwgYikge1xuICAgIGEgPSBNYXRoLmFicyhhKTtcbiAgICBiID0gTWF0aC5hYnMoYik7XG4gICAgaWYoIGEgPiBiICkge1xuICAgICAgICBiIC89IGE7XG4gICAgICAgIHJldHVybiBhKk1hdGguc3FydCgxLjAgKyBiKmIpO1xuICAgIH1cbiAgICBpZiggYiA+IDAgKSB7XG4gICAgICAgIGEgLz0gYjtcbiAgICAgICAgcmV0dXJuIGIqTWF0aC5zcXJ0KDEuMCArIGEqYSk7XG4gICAgfVxuICAgIHJldHVybiAwLjA7XG59IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCB7IHN3YXAsIGh5cG90IH0gZnJvbSAnLi9saW5hbGctYmFzZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGluYWxnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwKjQpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpPTAsaj0wLGs9MCxtPTAsbD0wLGlkeD0wLF9pbj0wLF9pbjI9MDtcbiAgICAgICAgdmFyIGl0ZXJzPTAsbWF4X2l0ZXI9bipuKjMwO1xuICAgICAgICB2YXIgbXY9MC4wLHZhbD0wLjAscD0wLjAseT0wLjAsdD0wLjAscz0wLjAsYz0wLjAsYTA9MC4wLGIwPTAuMDtcbiAgICBcbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuPDwyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuPDwyKTtcbiAgICAgICAgdmFyIGluZFIgPSBpbmRSX2J1ZmYuaTMyO1xuICAgICAgICB2YXIgaW5kQyA9IGluZENfYnVmZi5pMzI7XG4gICAgXG4gICAgICAgIGlmKFYpIHtcbiAgICAgICAgICAgIGZvcig7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSp2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvcihrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkqa107XG4gICAgICAgICAgICBpZihrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IobSA9IGsrMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwKmsgKyBtXSksIGkgPSBrKzI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCprK2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAqaStrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZihuID4gMSkgZm9yKCA7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCppICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGwgPSBpbmRSW2tdO1xuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCppbmRDW2ldICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHAgPSBBW2FzdGVwKmsgKyBsXTtcbiAgICBcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSowLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0L3M7XG4gICAgICAgICAgICBzID0gcC9zOyB0ID0gKHAvdCkqcDtcbiAgICAgICAgICAgIGlmKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCprICsgbF0gPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYoaWR4IDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKG0gPSBpZHgrMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwKmlkeCArIG1dKSwgaSA9IGlkeCsyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmlkeCtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbXYgPCB2YWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmkraWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbXYgPCB2YWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvcihrID0gMDsgayA8IG4tMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvcihpID0gaysxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoV1ttXSA8IFdbaV0pXG4gICAgICAgICAgICAgICAgICAgIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAqbSArIGksIHZzdGVwKmsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaT0wLGo9MCxrPTAsaXRlcj0wLG1heF9pdGVyPU1hdGgubWF4KG0sIDMwKTtcbiAgICAgICAgdmFyIEFpPTAsQWo9MCxWaT0wLFZqPTAsY2hhbmdlZD0wO1xuICAgICAgICB2YXIgYz0wLjAsIHM9MC4wLCB0PTAuMDtcbiAgICAgICAgdmFyIHQwPTAuMCx0MT0wLjAsc2Q9MC4wLGJldGE9MC4wLGdhbW1hPTAuMCxkZWx0YT0wLjAsYT0wLjAscD0wLjAsYj0wLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsPTAuMCx2YWwwPTAuMCxhc3VtPTAuMDtcbiAgICBcbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuPDwzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuICAgICAgICBcbiAgICAgICAgZm9yKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSphc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQqdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoVnQpIHtcbiAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSp2c3RlcCArIGtdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVnRbaSp2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBuLTE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvcihqID0gaSsxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkqYXN0ZXApfDAsIEFqID0gKGoqYXN0ZXApfDA7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBXW2ldLCBwID0gMCwgYiA9IFdbal07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0qQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpKzFdKkF0W0FqKzFdO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoOyBrIDwgbTsgaysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaStrXSpBdFtBaitrXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKHApIDw9IGVwcypNYXRoLnNxcnQoYSpiKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiggYmV0YSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IChnYW1tYSAtIGJldGEpKjAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEvZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwLyhnYW1tYSpzKjIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKS8oZ2FtbWEqMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAvKGdhbW1hKmMqMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGE9MC4wLCBiPTAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjKkF0W0FpXSArIHMqQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKkF0W0FpXSArIGMqQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAqdDA7IGIgKz0gdDEqdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYypBdFtBaSsxXSArIHMqQXRbQWorMV07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMqQXRbQWkrMV0gKyBjKkF0W0FqKzFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSsxXSA9IHQwOyBBdFtBaisxXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwKnQwOyBiICs9IHQxKnQxO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoIDsgayA8IG07IGsrKyApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypBdFtBaStrXSArIHMqQXRbQWora107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKkF0W0FpK2tdICsgYypBdFtBaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0W0FpK2tdID0gdDA7IEF0W0FqK2tdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAqdDA7IGIgKz0gdDEqdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFdbaV0gPSBhOyBXW2pdID0gYjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpID0gKGkqdnN0ZXApfDAsIFZqID0gKGoqdnN0ZXApfDA7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypWdFtWaV0gKyBzKlZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMqVnRbVmldICsgYypWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaV0gPSB0MDsgVnRbVmpdID0gdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMqVnRbVmkrMV0gKyBzKlZ0W1ZqKzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypWdFtWaSsxXSArIGMqVnRbVmorMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaSsxXSA9IHQwOyBWdFtWaisxXSA9IHQxO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypWdFtWaStrXSArIHMqVnRbVmora107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypWdFtWaStrXSArIGMqVnRbVmora107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkra10gPSB0MDsgVnRbVmora10gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSphc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQqdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuLTE7IGkrKykge1xuICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgICBmb3IoayA9IGkrMTsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSphc3RlcCArIGssIGoqYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpKnZzdGVwICsgaywgaip2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIVZ0KSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuMTsgaSsrKSB7XG4gICAgXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKHNkIDw9IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBhIHplcm8gc2luZ3VsYXIgdmFsdWUsIHRoZW4gaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb3JyZXNwb25kaW5nIGxlZnQgc2luZ3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgLy8gd2UgZ2VuZXJhdGUgYSByYW5kb20gdmVjdG9yLCBwcm9qZWN0IGl0IHRvIHRoZSBwcmV2aW91c2x5IGNvbXB1dGVkIGxlZnQgc2luZ3VsYXIgdmVjdG9ycyxcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdCB0aGUgcHJvamVjdGlvbiBhbmQgbm9ybWFsaXplIHRoZSBkaWZmZXJlbmNlLlxuICAgICAgICAgICAgICAgIHZhbDAgPSAoMS4wL20pO1xuICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWVkID0gKHNlZWQgKiAyMTQwMTMgKyAyNTMxMDExKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gKCgoc2VlZCA+PiAxNikgJiAweDdmZmYpICYgMjU2KSAhPSAwID8gdmFsMCA6IC12YWwwO1xuICAgICAgICAgICAgICAgICAgICBBdFtpKmFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihpdGVyID0gMDsgaXRlciA8IDI7IGl0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kqYXN0ZXAgKyBrXSpBdFtqKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChBdFtpKmFzdGVwICsga10gLSBzZCpBdFtqKmFzdGVwICsga10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kqYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wL2FzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSphc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSphc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0KnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcyA9ICgxLjAvc2QpO1xuICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgQXRbaSphc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobSAqIG0pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCBhX210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCB2X210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgYV9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuXG4gICAgfVxuXG4gICAgc3ZkX3NvbHZlKEEsIFgsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgeHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIHZhciB1X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgYmQgPSBCLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgeHN1bSA9IDAuMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdkW2pdID4gdG9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMCwgcHUgPSAwOyBrIDwgbnJvd3M7IGsrKywgcHUgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB1ZFtwdSArIGpdICogYmRba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHN1bSArPSBzdW0gKiB2ZFtwdiArIGpdIC8gd2Rbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWC5kYXRhW2ldID0geHN1bTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgc3ZkX2ludmVydChBaSwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwLCBwYSA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICBcbiAgICAgICAgLy92YXIgdV9idWZmID0gY2FjaGUxLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG4gICAgICAgIHZhciB1X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaWQgPSBBaS5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIHB1ID0gMDsgaiA8IG5yb3dzOyBqKyssIHBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjA7IGsgPCBuY29sczsgaysrLCBwdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZFtrXSA+IHRvbCkgc3VtICs9IHZkW3B2ICsga10gKiB1ZFtwdV0gLyB3ZFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWRbcGFdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBlaWdlblZWKEEsIHZlY3RzLCB2YWxzKSB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgIH1cblxuICAgICAgICBKYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdCwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tLCB0bykge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQywgQSwgQikge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMSwgTTEyLCBNMTMsXG4gICAgICAgIE0yMSwgTTIyLCBNMjMsXG4gICAgICAgIE0zMSwgTTMyLCBNMzMpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90eXBlIGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRyaXhfdCB7XG4gICAgY29uc3RydWN0b3IoYywgciwgX2RhdGFfdHlwZSwgX2RhdGFfYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKSB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyKSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYywgciwgY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90ICB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlcywgYnVmZmVyKSB7XG4gICAgICAgIC8vc3VwZXIoKVxuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgYml0X3BhdHRlcm5fMzEgPSBbXG4gICAgOCwtMywgOSw1LyptZWFuICgwKSwgY29ycmVsYXRpb24gKDApKi8sXG4gICAgNCwyLCA3LC0xMi8qbWVhbiAoMS4xMjQ2MWUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNDM3NTg0KSovLFxuICAgIC0xMSw5LCAtOCwyLyptZWFuICgzLjM3MzgyZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MTc0MDkpKi8sXG4gICAgNywtMTIsIDEyLC0xMy8qbWVhbiAoNS42MjMwM2UtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjM2OTc3KSovLFxuICAgIDIsLTEzLCAyLDEyLyptZWFuICgwLjAwMDEzNDk1MyksIGNvcnJlbGF0aW9uICgwLjA4NTA5OSkqLyxcbiAgICAxLC03LCAxLDYvKm1lYW4gKDAuMDAwNTI4NTY1KSwgY29ycmVsYXRpb24gKDAuMDg1NzE3NSkqLyxcbiAgICAtMiwtMTAsIC0yLC00LyptZWFuICgwLjAxODg4MjEpLCBjb3JyZWxhdGlvbiAoMC4wOTg1Nzc0KSovLFxuICAgIC0xMywtMTMsIC0xMSwtOC8qbWVhbiAoMC4wMzYzMTM1KSwgY29ycmVsYXRpb24gKDAuMDg5OTYxNikqLyxcbiAgICAtMTMsLTMsIC0xMiwtOS8qbWVhbiAoMC4xMjE4MDYpLCBjb3JyZWxhdGlvbiAoMC4wOTk4NDkpKi8sXG4gICAgMTAsNCwgMTEsOS8qbWVhbiAoMC4xMjIwNjUpLCBjb3JyZWxhdGlvbiAoMC4wOTMyODUpKi8sXG4gICAgLTEzLC04LCAtOCwtOS8qbWVhbiAoMC4xNjI3ODcpLCBjb3JyZWxhdGlvbiAoMC4wOTQyNzQ4KSovLFxuICAgIC0xMSw3LCAtOSwxMi8qbWVhbiAoMC4yMTU2MSksIGNvcnJlbGF0aW9uICgwLjA5NzQ0MzgpKi8sXG4gICAgNyw3LCAxMiw2LyptZWFuICgwLjE2MDU4MyksIGNvcnJlbGF0aW9uICgwLjEzMDA2NCkqLyxcbiAgICAtNCwtNSwgLTMsMC8qbWVhbiAoMC4yMjgxNzEpLCBjb3JyZWxhdGlvbiAoMC4xMzI5OTgpKi8sXG4gICAgLTEzLDIsIC0xMiwtMy8qbWVhbiAoMC4wMDk5NzUyNiksIGNvcnJlbGF0aW9uICgwLjE0NTkyNikqLyxcbiAgICAtOSwwLCAtNyw1LyptZWFuICgwLjE5ODIzNCksIGNvcnJlbGF0aW9uICgwLjE0MzYzNikqLyxcbiAgICAxMiwtNiwgMTIsLTEvKm1lYW4gKDAuMDY3NjIyNiksIGNvcnJlbGF0aW9uICgwLjE2Njg5KSovLFxuICAgIC0zLDYsIC0yLDEyLyptZWFuICgwLjE2Njg0NyksIGNvcnJlbGF0aW9uICgwLjE3MTY4MikqLyxcbiAgICAtNiwtMTMsIC00LC04LyptZWFuICgwLjEwMTIxNSksIGNvcnJlbGF0aW9uICgwLjE3OTcxNikqLyxcbiAgICAxMSwtMTMsIDEyLC04LyptZWFuICgwLjIwMDY0MSksIGNvcnJlbGF0aW9uICgwLjE5MjI3OSkqLyxcbiAgICA0LDcsIDUsMS8qbWVhbiAoMC4yMDUxMDYpLCBjb3JyZWxhdGlvbiAoMC4xODY4NDgpKi8sXG4gICAgNSwtMywgMTAsLTMvKm1lYW4gKDAuMjM0OTA4KSwgY29ycmVsYXRpb24gKDAuMTkyMzE5KSovLFxuICAgIDMsLTcsIDYsMTIvKm1lYW4gKDAuMDcwOTk2NCksIGNvcnJlbGF0aW9uICgwLjIxMDg3MikqLyxcbiAgICAtOCwtNywgLTYsLTIvKm1lYW4gKDAuMDkzOTgzNCksIGNvcnJlbGF0aW9uICgwLjIxMjU4OSkqLyxcbiAgICAtMiwxMSwgLTEsLTEwLyptZWFuICgwLjEyNzc3OCksIGNvcnJlbGF0aW9uICgwLjIwODY2KSovLFxuICAgIC0xMywxMiwgLTgsMTAvKm1lYW4gKDAuMTQ3ODMpLCBjb3JyZWxhdGlvbiAoMC4yMDYzNTYpKi8sXG4gICAgLTcsMywgLTUsLTMvKm1lYW4gKDAuMTgyMTQxKSwgY29ycmVsYXRpb24gKDAuMTk4OTQyKSovLFxuICAgIC00LDIsIC0zLDcvKm1lYW4gKDAuMTg4MjM3KSwgY29ycmVsYXRpb24gKDAuMjEzODQpKi8sXG4gICAgLTEwLC0xMiwgLTYsMTEvKm1lYW4gKDAuMTQ4NjUpLCBjb3JyZWxhdGlvbiAoMC4yMzU3MSkqLyxcbiAgICA1LC0xMiwgNiwtNy8qbWVhbiAoMC4yMjIzMTIpLCBjb3JyZWxhdGlvbiAoMC4yMzMyNCkqLyxcbiAgICA1LC02LCA3LC0xLyptZWFuICgwLjIyOTA4MiksIGNvcnJlbGF0aW9uICgwLjIzMzg5KSovLFxuICAgIDEsMCwgNCwtNS8qbWVhbiAoMC4yNDE1NzcpLCBjb3JyZWxhdGlvbiAoMC4yMTUyODYpKi8sXG4gICAgOSwxMSwgMTEsLTEzLyptZWFuICgwLjAwMzM4NTA3KSwgY29ycmVsYXRpb24gKDAuMjUxMzczKSovLFxuICAgIDQsNywgNCwxMi8qbWVhbiAoMC4xMzEwMDUpLCBjb3JyZWxhdGlvbiAoMC4yNTc2MjIpKi8sXG4gICAgMiwtMSwgNCw0LyptZWFuICgwLjE1Mjc1NSksIGNvcnJlbGF0aW9uICgwLjI1NTIwNSkqLyxcbiAgICAtNCwtMTIsIC0yLDcvKm1lYW4gKDAuMTgyNzcxKSwgY29ycmVsYXRpb24gKDAuMjQ0ODY3KSovLFxuICAgIC04LC01LCAtNywtMTAvKm1lYW4gKDAuMTg2ODk4KSwgY29ycmVsYXRpb24gKDAuMjM5MDEpKi8sXG4gICAgNCwxMSwgOSwxMi8qbWVhbiAoMC4yMjYyMjYpLCBjb3JyZWxhdGlvbiAoMC4yNTgyNTUpKi8sXG4gICAgMCwtOCwgMSwtMTMvKm1lYW4gKDAuMDg5Nzg4NiksIGNvcnJlbGF0aW9uICgwLjI3NDgyNykqLyxcbiAgICAtMTMsLTIsIC04LDIvKm1lYW4gKDAuMTQ4Nzc0KSwgY29ycmVsYXRpb24gKDAuMjgwNjUpKi8sXG4gICAgLTMsLTIsIC0yLDMvKm1lYW4gKDAuMTUzMDQ4KSwgY29ycmVsYXRpb24gKDAuMjgzMDYzKSovLFxuICAgIC02LDksIC00LC05LyptZWFuICgwLjE2OTUyMyksIGNvcnJlbGF0aW9uICgwLjI3ODI0OCkqLyxcbiAgICA4LDEyLCAxMCw3LyptZWFuICgwLjIyNTMzNyksIGNvcnJlbGF0aW9uICgwLjI4Mjg1MSkqLyxcbiAgICAwLDksIDEsMy8qbWVhbiAoMC4yMjY2ODcpLCBjb3JyZWxhdGlvbiAoMC4yNzg3MzQpKi8sXG4gICAgNywtNSwgMTEsLTEwLyptZWFuICgwLjAwNjkzODgyKSwgY29ycmVsYXRpb24gKDAuMzA1MTYxKSovLFxuICAgIC0xMywtNiwgLTExLDAvKm1lYW4gKDAuMDIyNzI4MyksIGNvcnJlbGF0aW9uICgwLjMwMDE4MSkqLyxcbiAgICAxMCw3LCAxMiwxLyptZWFuICgwLjEyNTUxNyksIGNvcnJlbGF0aW9uICgwLjMxMDg5KSovLFxuICAgIC02LC0zLCAtNiwxMi8qbWVhbiAoMC4xMzE3NDgpLCBjb3JyZWxhdGlvbiAoMC4zMTI3NzkpKi8sXG4gICAgMTAsLTksIDEyLC00LyptZWFuICgwLjE0NDgyNyksIGNvcnJlbGF0aW9uICgwLjI5Mjc5NykqLyxcbiAgICAtMTMsOCwgLTgsLTEyLyptZWFuICgwLjE0OTIwMiksIGNvcnJlbGF0aW9uICgwLjMwODkxOCkqLyxcbiAgICAtMTMsMCwgLTgsLTQvKm1lYW4gKDAuMTYwOTA5KSwgY29ycmVsYXRpb24gKDAuMzEwMDEzKSovLFxuICAgIDMsMywgNyw4LyptZWFuICgwLjE3Nzc1NSksIGNvcnJlbGF0aW9uICgwLjMwOTM5NCkqLyxcbiAgICA1LDcsIDEwLC03LyptZWFuICgwLjIxMjMzNyksIGNvcnJlbGF0aW9uICgwLjMxMDMxNSkqLyxcbiAgICAtMSw3LCAxLC0xMi8qbWVhbiAoMC4yMTQ0MjkpLCBjb3JyZWxhdGlvbiAoMC4zMTE5MzMpKi8sXG4gICAgMywtMTAsIDUsNi8qbWVhbiAoMC4yMzU4MDcpLCBjb3JyZWxhdGlvbiAoMC4zMTMxMDQpKi8sXG4gICAgMiwtNCwgMywtMTAvKm1lYW4gKDAuMDA0OTQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4zNDQ5NDgpKi8sXG4gICAgLTEzLDAsIC0xMyw1LyptZWFuICgwLjA1NDkxNDUpLCBjb3JyZWxhdGlvbiAoMC4zNDQ2NzUpKi8sXG4gICAgLTEzLC03LCAtMTIsMTIvKm1lYW4gKDAuMTAzMzg1KSwgY29ycmVsYXRpb24gKDAuMzQyNzE1KSovLFxuICAgIC0xMywzLCAtMTEsOC8qbWVhbiAoMC4xMzQyMjIpLCBjb3JyZWxhdGlvbiAoMC4zMjI5MjIpKi8sXG4gICAgLTcsMTIsIC00LDcvKm1lYW4gKDAuMTUzMjg0KSwgY29ycmVsYXRpb24gKDAuMzM3MDYxKSovLFxuICAgIDYsLTEwLCAxMiw4LyptZWFuICgwLjE1NDg4MSksIGNvcnJlbGF0aW9uICgwLjMyOTI1NykqLyxcbiAgICAtOSwtMSwgLTcsLTYvKm1lYW4gKDAuMjAwOTY3KSwgY29ycmVsYXRpb24gKDAuMzMzMTIpKi8sXG4gICAgLTIsLTUsIDAsMTIvKm1lYW4gKDAuMjAxNTE4KSwgY29ycmVsYXRpb24gKDAuMzQwNjM1KSovLFxuICAgIC0xMiw1LCAtNyw1LyptZWFuICgwLjIwNzgwNSksIGNvcnJlbGF0aW9uICgwLjMzNTYzMSkqLyxcbiAgICAzLC0xMCwgOCwtMTMvKm1lYW4gKDAuMjI0NDM4KSwgY29ycmVsYXRpb24gKDAuMzQ1MDQpKi8sXG4gICAgLTcsLTcsIC00LDUvKm1lYW4gKDAuMjM5MzYxKSwgY29ycmVsYXRpb24gKDAuMzM4MDUzKSovLFxuICAgIC0zLC0yLCAtMSwtNy8qbWVhbiAoMC4yNDA3NDQpLCBjb3JyZWxhdGlvbiAoMC4zNDQzMjIpKi8sXG4gICAgMiw5LCA1LC0xMS8qbWVhbiAoMC4yNDI5NDkpLCBjb3JyZWxhdGlvbiAoMC4zNDE0NSkqLyxcbiAgICAtMTEsLTEzLCAtNSwtMTMvKm1lYW4gKDAuMjQ0MDI4KSwgY29ycmVsYXRpb24gKDAuMzM2ODYxKSovLFxuICAgIC0xLDYsIDAsLTEvKm1lYW4gKDAuMjQ3NTcxKSwgY29ycmVsYXRpb24gKDAuMzQzNjg0KSovLFxuICAgIDUsLTMsIDUsMi8qbWVhbiAoMC4wMDA2OTcyNTYpLCBjb3JyZWxhdGlvbiAoMC4zNTcyNjUpKi8sXG4gICAgLTQsLTEzLCAtNCwxMi8qbWVhbiAoMC4wMDIxMzY3NSksIGNvcnJlbGF0aW9uICgwLjM3MzgyNykqLyxcbiAgICAtOSwtNiwgLTksNi8qbWVhbiAoMC4wMTI2ODU2KSwgY29ycmVsYXRpb24gKDAuMzczOTM4KSovLFxuICAgIC0xMiwtMTAsIC04LC00LyptZWFuICgwLjAxNTI0OTcpLCBjb3JyZWxhdGlvbiAoMC4zNjQyMzcpKi8sXG4gICAgMTAsMiwgMTIsLTMvKm1lYW4gKDAuMDI5OTkzMyksIGNvcnJlbGF0aW9uICgwLjM0NTI5MikqLyxcbiAgICA3LDEyLCAxMiwxMi8qbWVhbiAoMC4wMzA3MjQyKSwgY29ycmVsYXRpb24gKDAuMzY2Mjk5KSovLFxuICAgIC03LC0xMywgLTYsNS8qbWVhbiAoMC4wNTM0OTc1KSwgY29ycmVsYXRpb24gKDAuMzY4MzU3KSovLFxuICAgIC00LDksIC0zLDQvKm1lYW4gKDAuMDk5ODY1KSwgY29ycmVsYXRpb24gKDAuMzcyMjc2KSovLFxuICAgIDcsLTEsIDEyLDIvKm1lYW4gKDAuMTE3MDgzKSwgY29ycmVsYXRpb24gKDAuMzY0NTI5KSovLFxuICAgIC03LDYsIC01LDEvKm1lYW4gKDAuMTI2MTI1KSwgY29ycmVsYXRpb24gKDAuMzY5NjA2KSovLFxuICAgIC0xMywxMSwgLTEyLDUvKm1lYW4gKDAuMTMwMzY0KSwgY29ycmVsYXRpb24gKDAuMzU4NTAyKSovLFxuICAgIC0zLDcsIC0yLC02LyptZWFuICgwLjEzMTY5MSksIGNvcnJlbGF0aW9uICgwLjM3NTUzMSkqLyxcbiAgICA3LC04LCAxMiwtNy8qbWVhbiAoMC4xNjAxNjYpLCBjb3JyZWxhdGlvbiAoMC4zNzk1MDgpKi8sXG4gICAgLTEzLC03LCAtMTEsLTEyLyptZWFuICgwLjE2Nzg0OCksIGNvcnJlbGF0aW9uICgwLjM1MzM0MykqLyxcbiAgICAxLC0zLCAxMiwxMi8qbWVhbiAoMC4xODMzNzgpLCBjb3JyZWxhdGlvbiAoMC4zNzE5MTYpKi8sXG4gICAgMiwtNiwgMywwLyptZWFuICgwLjIyODcxMSksIGNvcnJlbGF0aW9uICgwLjM3MTc2MSkqLyxcbiAgICAtNCwzLCAtMiwtMTMvKm1lYW4gKDAuMjQ3MjExKSwgY29ycmVsYXRpb24gKDAuMzY0MDYzKSovLFxuICAgIC0xLC0xMywgMSw5LyptZWFuICgwLjI0OTMyNSksIGNvcnJlbGF0aW9uICgwLjM3ODEzOSkqLyxcbiAgICA3LDEsIDgsLTYvKm1lYW4gKDAuMDAwNjUyMjcyKSwgY29ycmVsYXRpb24gKDAuNDExNjgyKSovLFxuICAgIDEsLTEsIDMsMTIvKm1lYW4gKDAuMDAyNDg1MzgpLCBjb3JyZWxhdGlvbiAoMC4zOTI5ODgpKi8sXG4gICAgOSwxLCAxMiw2LyptZWFuICgwLjAyMDY4MTUpLCBjb3JyZWxhdGlvbiAoMC4zODYxMDYpKi8sXG4gICAgLTEsLTksIC0xLDMvKm1lYW4gKDAuMDM2NDQ4NSksIGNvcnJlbGF0aW9uICgwLjQxMDc1MikqLyxcbiAgICAtMTMsLTEzLCAtMTAsNS8qbWVhbiAoMC4wMzc2MDY4KSwgY29ycmVsYXRpb24gKDAuMzk4Mzc0KSovLFxuICAgIDcsNywgMTAsMTIvKm1lYW4gKDAuMDQyNDIwMiksIGNvcnJlbGF0aW9uICgwLjQwNTY2MykqLyxcbiAgICAxMiwtNSwgMTIsOS8qbWVhbiAoMC4wOTQyNjQ1KSwgY29ycmVsYXRpb24gKDAuNDEwNDIyKSovLFxuICAgIDYsMywgNywxMS8qbWVhbiAoMC4xMDc0KSwgY29ycmVsYXRpb24gKDAuNDEzMjI0KSovLFxuICAgIDUsLTEzLCA2LDEwLyptZWFuICgwLjEwOTI1NiksIGNvcnJlbGF0aW9uICgwLjQwODY0NikqLyxcbiAgICAyLC0xMiwgMiwzLyptZWFuICgwLjEzMTY5MSksIGNvcnJlbGF0aW9uICgwLjQxNjA3NikqLyxcbiAgICAzLDgsIDQsLTYvKm1lYW4gKDAuMTY1MDgxKSwgY29ycmVsYXRpb24gKDAuNDE3NTY5KSovLFxuICAgIDIsNiwgMTIsLTEzLyptZWFuICgwLjE3MTg3NCksIGNvcnJlbGF0aW9uICgwLjQwODQ3MSkqLyxcbiAgICA5LC0xMiwgMTAsMy8qbWVhbiAoMC4xNzUxNDYpLCBjb3JyZWxhdGlvbiAoMC40MTI5NikqLyxcbiAgICAtOCw0LCAtNyw5LyptZWFuICgwLjE4MzY4MiksIGNvcnJlbGF0aW9uICgwLjQwMjk1NikqLyxcbiAgICAtMTEsMTIsIC00LC02LyptZWFuICgwLjE4NDY3MiksIGNvcnJlbGF0aW9uICgwLjQxNjEyNSkqLyxcbiAgICAxLDEyLCAyLC04LyptZWFuICgwLjE5MTQ4NyksIGNvcnJlbGF0aW9uICgwLjM4NjY5NikqLyxcbiAgICA2LC05LCA3LC00LyptZWFuICgwLjE5MjY2OCksIGNvcnJlbGF0aW9uICgwLjM5NDc3MSkqLyxcbiAgICAyLDMsIDMsLTIvKm1lYW4gKDAuMjAwMTU3KSwgY29ycmVsYXRpb24gKDAuNDA4MzAzKSovLFxuICAgIDYsMywgMTEsMC8qbWVhbiAoMC4yMDQ1ODgpLCBjb3JyZWxhdGlvbiAoMC40MTE3NjIpKi8sXG4gICAgMywtMywgOCwtOC8qbWVhbiAoMC4yMDU5MDQpLCBjb3JyZWxhdGlvbiAoMC40MTYyOTQpKi8sXG4gICAgNyw4LCA5LDMvKm1lYW4gKDAuMjEzMjM3KSwgY29ycmVsYXRpb24gKDAuNDA5MzA2KSovLFxuICAgIC0xMSwtNSwgLTYsLTQvKm1lYW4gKDAuMjQzNDQ0KSwgY29ycmVsYXRpb24gKDAuMzk1MDY5KSovLFxuICAgIC0xMCwxMSwgLTUsMTAvKm1lYW4gKDAuMjQ3NjcyKSwgY29ycmVsYXRpb24gKDAuNDEzMzkyKSovLFxuICAgIC01LC04LCAtMywxMi8qbWVhbiAoMC4yNDc3NCksIGNvcnJlbGF0aW9uICgwLjQxMTQxNikqLyxcbiAgICAtMTAsNSwgLTksMC8qbWVhbiAoMC4wMDIxMzY3NSksIGNvcnJlbGF0aW9uICgwLjQ1NDAwMykqLyxcbiAgICA4LC0xLCAxMiwtNi8qbWVhbiAoMC4wMjkzNjM1KSwgY29ycmVsYXRpb24gKDAuNDU1MzY4KSovLFxuICAgIDQsLTYsIDYsLTExLyptZWFuICgwLjA0MDQ5NzEpLCBjb3JyZWxhdGlvbiAoMC40NTczOTMpKi8sXG4gICAgLTEwLDEyLCAtOCw3LyptZWFuICgwLjA0ODExMDcpLCBjb3JyZWxhdGlvbiAoMC40NDgzNjQpKi8sXG4gICAgNCwtMiwgNiw3LyptZWFuICgwLjA1MDY0MSksIGNvcnJlbGF0aW9uICgwLjQ1NTAxOSkqLyxcbiAgICAtMiwwLCAtMiwxMi8qbWVhbiAoMC4wNTI1OTc4KSwgY29ycmVsYXRpb24gKDAuNDQzMzgpKi8sXG4gICAgLTUsLTgsIC01LDIvKm1lYW4gKDAuMDYyOTY2NyksIGNvcnJlbGF0aW9uICgwLjQ1NzA5NikqLyxcbiAgICA3LC02LCAxMCwxMi8qbWVhbiAoMC4wNjUzODQ2KSwgY29ycmVsYXRpb24gKDAuNDQ1NjIzKSovLFxuICAgIC05LC0xMywgLTgsLTgvKm1lYW4gKDAuMDg1ODc0OSksIGNvcnJlbGF0aW9uICgwLjQ0OTc4OSkqLyxcbiAgICAtNSwtMTMsIC01LC0yLyptZWFuICgwLjEyMjQwMiksIGNvcnJlbGF0aW9uICgwLjQ1MDIwMSkqLyxcbiAgICA4LC04LCA5LC0xMy8qbWVhbiAoMC4xMjU0MTYpLCBjb3JyZWxhdGlvbiAoMC40NTMyMjQpKi8sXG4gICAgLTksLTExLCAtOSwwLyptZWFuICgwLjEzMDEyOCksIGNvcnJlbGF0aW9uICgwLjQ1ODcyNCkqLyxcbiAgICAxLC04LCAxLC0yLyptZWFuICgwLjEzMjQ2NyksIGNvcnJlbGF0aW9uICgwLjQ0MDEzMykqLyxcbiAgICA3LC00LCA5LDEvKm1lYW4gKDAuMTMyNjkyKSwgY29ycmVsYXRpb24gKDAuNDU0KSovLFxuICAgIC0yLDEsIC0xLC00LyptZWFuICgwLjEzNTY5NSksIGNvcnJlbGF0aW9uICgwLjQ1NTczOSkqLyxcbiAgICAxMSwtNiwgMTIsLTExLyptZWFuICgwLjE0MjkwNCksIGNvcnJlbGF0aW9uICgwLjQ0NjExNCkqLyxcbiAgICAtMTIsLTksIC02LDQvKm1lYW4gKDAuMTQ2MTY1KSwgY29ycmVsYXRpb24gKDAuNDUxNDczKSovLFxuICAgIDMsNywgNywxMi8qbWVhbiAoMC4xNDc2MjcpLCBjb3JyZWxhdGlvbiAoMC40NTY2NDMpKi8sXG4gICAgNSw1LCAxMCw4LyptZWFuICgwLjE1MjkwMSksIGNvcnJlbGF0aW9uICgwLjQ1NTAzNikqLyxcbiAgICAwLC00LCAyLDgvKm1lYW4gKDAuMTY3MDgzKSwgY29ycmVsYXRpb24gKDAuNDU5MzE1KSovLFxuICAgIC05LDEyLCAtNSwtMTMvKm1lYW4gKDAuMTczMjM0KSwgY29ycmVsYXRpb24gKDAuNDU0NzA2KSovLFxuICAgIDAsNywgMiwxMi8qbWVhbiAoMC4xODMxMiksIGNvcnJlbGF0aW9uICgwLjQzMzg1NSkqLyxcbiAgICAtMSwyLCAxLDcvKm1lYW4gKDAuMTg1NTA0KSwgY29ycmVsYXRpb24gKDAuNDQzODM4KSovLFxuICAgIDUsMTEsIDcsLTkvKm1lYW4gKDAuMTg1NzA2KSwgY29ycmVsYXRpb24gKDAuNDUxMTIzKSovLFxuICAgIDMsNSwgNiwtOC8qbWVhbiAoMC4xODg5NjgpLCBjb3JyZWxhdGlvbiAoMC40NTU4MDgpKi8sXG4gICAgLTEzLC00LCAtOCw5LyptZWFuICgwLjE5MTY2NyksIGNvcnJlbGF0aW9uICgwLjQ1OTEyOCkqLyxcbiAgICAtNSw5LCAtMywtMy8qbWVhbiAoMC4xOTMxOTYpLCBjb3JyZWxhdGlvbiAoMC40NTgzNjQpKi8sXG4gICAgLTQsLTcsIC0zLC0xMi8qbWVhbiAoMC4xOTY1MzYpLCBjb3JyZWxhdGlvbiAoMC40NTU3ODIpKi8sXG4gICAgNiw1LCA4LDAvKm1lYW4gKDAuMTk3MiksIGNvcnJlbGF0aW9uICgwLjQ1MDQ4MSkqLyxcbiAgICAtNyw2LCAtNiwxMi8qbWVhbiAoMC4xOTk0MzgpLCBjb3JyZWxhdGlvbiAoMC40NTgxNTYpKi8sXG4gICAgLTEzLDYsIC01LC0yLyptZWFuICgwLjIxMTIyNCksIGNvcnJlbGF0aW9uICgwLjQ0OTU0OCkqLyxcbiAgICAxLC0xMCwgMywxMC8qbWVhbiAoMC4yMTE3MTgpLCBjb3JyZWxhdGlvbiAoMC40NDA2MDYpKi8sXG4gICAgNCwxLCA4LC00LyptZWFuICgwLjIxMzAzNCksIGNvcnJlbGF0aW9uICgwLjQ0MzE3NykqLyxcbiAgICAtMiwtMiwgMiwtMTMvKm1lYW4gKDAuMjM0MzM0KSwgY29ycmVsYXRpb24gKDAuNDU1MzA0KSovLFxuICAgIDIsLTEyLCAxMiwxMi8qbWVhbiAoMC4yMzU2ODQpLCBjb3JyZWxhdGlvbiAoMC40NDM0MzYpKi8sXG4gICAgLTIsLTEzLCAwLC02LyptZWFuICgwLjIzNzY3NCksIGNvcnJlbGF0aW9uICgwLjQ1MjUyNSkqLyxcbiAgICA0LDEsIDksMy8qbWVhbiAoMC4yMzk2MiksIGNvcnJlbGF0aW9uICgwLjQ0NDgyNCkqLyxcbiAgICAtNiwtMTAsIC0zLC01LyptZWFuICgwLjI0ODQ1OSksIGNvcnJlbGF0aW9uICgwLjQzOTYyMSkqLyxcbiAgICAtMywtMTMsIC0xLDEvKm1lYW4gKDAuMjQ5NTA1KSwgY29ycmVsYXRpb24gKDAuNDU2NjY2KSovLFxuICAgIDcsNSwgMTIsLTExLyptZWFuICgwLjAwMTE5MjA4KSwgY29ycmVsYXRpb24gKDAuNDk1NDY2KSovLFxuICAgIDQsLTIsIDUsLTcvKm1lYW4gKDAuMDAzNzIyNDUpLCBjb3JyZWxhdGlvbiAoMC40ODQyMTQpKi8sXG4gICAgLTEzLDksIC05LC01LyptZWFuICgwLjAwNzQxMTE2KSwgY29ycmVsYXRpb24gKDAuNDk5ODU0KSovLFxuICAgIDcsMSwgOCw2LyptZWFuICgwLjAyMDg5NTIpLCBjb3JyZWxhdGlvbiAoMC40OTk3NzMpKi8sXG4gICAgNywtOCwgNyw2LyptZWFuICgwLjAyMjAwODUpLCBjb3JyZWxhdGlvbiAoMC41MDE2MDkpKi8sXG4gICAgLTcsLTQsIC03LDEvKm1lYW4gKDAuMDIzMzgwNiksIGNvcnJlbGF0aW9uICgwLjQ5NjU2OCkqLyxcbiAgICAtOCwxMSwgLTcsLTgvKm1lYW4gKDAuMDIzNjUwNSksIGNvcnJlbGF0aW9uICgwLjQ4OTcxOSkqLyxcbiAgICAtMTMsNiwgLTEyLC04LyptZWFuICgwLjAyNjg3ODEpLCBjb3JyZWxhdGlvbiAoMC41MDM0ODcpKi8sXG4gICAgMiw0LCAzLDkvKm1lYW4gKDAuMDMyMzMyNCksIGNvcnJlbGF0aW9uICgwLjUwMTkzOCkqLyxcbiAgICAxMCwtNSwgMTIsMy8qbWVhbiAoMC4wMzk5MjM1KSwgY29ycmVsYXRpb24gKDAuNDk0MDI5KSovLFxuICAgIC02LC01LCAtNiw3LyptZWFuICgwLjA0MjAxNTMpLCBjb3JyZWxhdGlvbiAoMC40ODY1NzkpKi8sXG4gICAgOCwtMywgOSwtOC8qbWVhbiAoMC4wNTQ4MDIxKSwgY29ycmVsYXRpb24gKDAuNDg0MjM3KSovLFxuICAgIDIsLTEyLCAyLDgvKm1lYW4gKDAuMDYxNjYyMiksIGNvcnJlbGF0aW9uICgwLjQ5NjY0MikqLyxcbiAgICAtMTEsLTIsIC0xMCwzLyptZWFuICgwLjA2Mjc3NTUpLCBjb3JyZWxhdGlvbiAoMC40OTg1NjMpKi8sXG4gICAgLTEyLC0xMywgLTcsLTkvKm1lYW4gKDAuMDgyOTYyMiksIGNvcnJlbGF0aW9uICgwLjQ5NTQ5MSkqLyxcbiAgICAtMTEsMCwgLTEwLC01LyptZWFuICgwLjA4NDMzNDIpLCBjb3JyZWxhdGlvbiAoMC40ODcxNDYpKi8sXG4gICAgNSwtMywgMTEsOC8qbWVhbiAoMC4wOTI5OTM3KSwgY29ycmVsYXRpb24gKDAuNTAyMzE1KSovLFxuICAgIC0yLC0xMywgLTEsMTIvKm1lYW4gKDAuMTEzMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5NDEpKi8sXG4gICAgLTEsLTgsIDAsOS8qbWVhbiAoMC4xMzIxMTkpLCBjb3JyZWxhdGlvbiAoMC40NjcyNjgpKi8sXG4gICAgLTEzLC0xMSwgLTEyLC01LyptZWFuICgwLjEzNjI2OSksIGNvcnJlbGF0aW9uICgwLjQ5ODc3MSkqLyxcbiAgICAtMTAsLTIsIC0xMCwxMS8qbWVhbiAoMC4xNDIxNzMpLCBjb3JyZWxhdGlvbiAoMC40OTg3MTQpKi8sXG4gICAgLTMsOSwgLTIsLTEzLyptZWFuICgwLjE0NDE0MSksIGNvcnJlbGF0aW9uICgwLjQ5MTk3MykqLyxcbiAgICAyLC0zLCAzLDIvKm1lYW4gKDAuMTQ4OTIpLCBjb3JyZWxhdGlvbiAoMC41MDA3ODIpKi8sXG4gICAgLTksLTEzLCAtNCwwLyptZWFuICgwLjE1MDM3MSksIGNvcnJlbGF0aW9uICgwLjQ5ODIxMSkqLyxcbiAgICAtNCw2LCAtMywtMTAvKm1lYW4gKDAuMTUyMTU5KSwgY29ycmVsYXRpb24gKDAuNDk1NTQ3KSovLFxuICAgIC00LDEyLCAtMiwtNy8qbWVhbiAoMC4xNTYxNTIpLCBjb3JyZWxhdGlvbiAoMC40OTY5MjUpKi8sXG4gICAgLTYsLTExLCAtNCw5LyptZWFuICgwLjE1NzQ5KSwgY29ycmVsYXRpb24gKDAuNDk5MjIyKSovLFxuICAgIDYsLTMsIDYsMTEvKm1lYW4gKDAuMTU5MjExKSwgY29ycmVsYXRpb24gKDAuNTAzODIxKSovLFxuICAgIC0xMywxMSwgLTUsNS8qbWVhbiAoMC4xNjI0MjcpLCBjb3JyZWxhdGlvbiAoMC41MDE5MDcpKi8sXG4gICAgMTEsMTEsIDEyLDYvKm1lYW4gKDAuMTY2NTIpLCBjb3JyZWxhdGlvbiAoMC40OTc2MzIpKi8sXG4gICAgNywtNSwgMTIsLTIvKm1lYW4gKDAuMTY5MTQxKSwgY29ycmVsYXRpb24gKDAuNDg0NDc0KSovLFxuICAgIC0xLDEyLCAwLDcvKm1lYW4gKDAuMTY5NDU2KSwgY29ycmVsYXRpb24gKDAuNDk1MzM5KSovLFxuICAgIC00LC04LCAtMywtMi8qbWVhbiAoMC4xNzE0NTcpLCBjb3JyZWxhdGlvbiAoMC40ODcyNTEpKi8sXG4gICAgLTcsMSwgLTYsNy8qbWVhbiAoMC4xNzUpLCBjb3JyZWxhdGlvbiAoMC41MDAwMjQpKi8sXG4gICAgLTEzLC0xMiwgLTgsLTEzLyptZWFuICgwLjE3NTg2NiksIGNvcnJlbGF0aW9uICgwLjQ5NzUyMykqLyxcbiAgICAtNywtMiwgLTYsLTgvKm1lYW4gKDAuMTc4MjczKSwgY29ycmVsYXRpb24gKDAuNTAxODU0KSovLFxuICAgIC04LDUsIC02LC05LyptZWFuICgwLjE4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ5NDg4OCkqLyxcbiAgICAtNSwtMSwgLTQsNS8qbWVhbiAoMC4xOTAyMjcpLCBjb3JyZWxhdGlvbiAoMC40ODI1NTcpKi8sXG4gICAgLTEzLDcsIC04LDEwLyptZWFuICgwLjE5NjczOSksIGNvcnJlbGF0aW9uICgwLjQ5NjUwMykqLyxcbiAgICAxLDUsIDUsLTEzLyptZWFuICgwLjE5OTczKSwgY29ycmVsYXRpb24gKDAuNDk5NzU5KSovLFxuICAgIDEsMCwgMTAsLTEzLyptZWFuICgwLjIwNDQ2NSksIGNvcnJlbGF0aW9uICgwLjQ5ODczKSovLFxuICAgIDksMTIsIDEwLC0xLyptZWFuICgwLjIwOTMzNCksIGNvcnJlbGF0aW9uICgwLjQ5MDYzKSovLFxuICAgIDUsLTgsIDEwLC05LyptZWFuICgwLjIxMTEzNCksIGNvcnJlbGF0aW9uICgwLjUwMzAxMSkqLyxcbiAgICAtMSwxMSwgMSwtMTMvKm1lYW4gKDAuMjEyKSwgY29ycmVsYXRpb24gKDAuNDk5NDE0KSovLFxuICAgIC05LC0zLCAtNiwyLyptZWFuICgwLjIxMjE2OCksIGNvcnJlbGF0aW9uICgwLjQ4MDczOSkqLyxcbiAgICAtMSwtMTAsIDEsMTIvKm1lYW4gKDAuMjEyNzMxKSwgY29ycmVsYXRpb24gKDAuNTAyNTIzKSovLFxuICAgIC0xMywxLCAtOCwtMTAvKm1lYW4gKDAuMjEzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk3ODYpKi8sXG4gICAgOCwtMTEsIDEwLC02LyptZWFuICgwLjIxNDE1OSksIGNvcnJlbGF0aW9uICgwLjQ4ODI0NikqLyxcbiAgICAyLC0xMywgMywtNi8qbWVhbiAoMC4yMTY5OTMpLCBjb3JyZWxhdGlvbiAoMC41MDI4NykqLyxcbiAgICA3LC0xMywgMTIsLTkvKm1lYW4gKDAuMjIzNjM5KSwgY29ycmVsYXRpb24gKDAuNDcwNTAyKSovLFxuICAgIC0xMCwtMTAsIC01LC03LyptZWFuICgwLjIyNDA4OSksIGNvcnJlbGF0aW9uICgwLjUwMDg1MikqLyxcbiAgICAtMTAsLTgsIC04LC0xMy8qbWVhbiAoMC4yMjg2NjYpLCBjb3JyZWxhdGlvbiAoMC41MDI2MjkpKi8sXG4gICAgNCwtNiwgOCw1LyptZWFuICgwLjIyOTA2KSwgY29ycmVsYXRpb24gKDAuNDk4MzA1KSovLFxuICAgIDMsMTIsIDgsLTEzLyptZWFuICgwLjIzMzM3OCksIGNvcnJlbGF0aW9uICgwLjUwMzgyNSkqLyxcbiAgICAtNCwyLCAtMywtMy8qbWVhbiAoMC4yMzQzMjMpLCBjb3JyZWxhdGlvbiAoMC40NzY2OTIpKi8sXG4gICAgNSwtMTMsIDEwLC0xMi8qbWVhbiAoMC4yMzYzOTIpLCBjb3JyZWxhdGlvbiAoMC40NzU0NjIpKi8sXG4gICAgNCwtMTMsIDUsLTEvKm1lYW4gKDAuMjM2ODQyKSwgY29ycmVsYXRpb24gKDAuNTA0MTMyKSovLFxuICAgIC05LDksIC00LDMvKm1lYW4gKDAuMjM2OTc3KSwgY29ycmVsYXRpb24gKDAuNDk3NzM5KSovLFxuICAgIDAsMywgMywtOS8qbWVhbiAoMC4yNDMxNCksIGNvcnJlbGF0aW9uICgwLjQ5OTM5OCkqLyxcbiAgICAtMTIsMSwgLTYsMS8qbWVhbiAoMC4yNDMyOTcpLCBjb3JyZWxhdGlvbiAoMC40ODk0NDcpKi8sXG4gICAgMywyLCA0LC04LyptZWFuICgwLjAwMTU1MTk2KSwgY29ycmVsYXRpb24gKDAuNTUzNDk2KSovLFxuICAgIC0xMCwtMTAsIC0xMCw5LyptZWFuICgwLjAwMjM5NTQxKSwgY29ycmVsYXRpb24gKDAuNTQyOTcpKi8sXG4gICAgOCwtMTMsIDEyLDEyLyptZWFuICgwLjAwMzQ0MTMpLCBjb3JyZWxhdGlvbiAoMC41NDQzNjEpKi8sXG4gICAgLTgsLTEyLCAtNiwtNS8qbWVhbiAoMC4wMDM1NjUpLCBjb3JyZWxhdGlvbiAoMC41NTEyMjUpKi8sXG4gICAgMiwyLCAzLDcvKm1lYW4gKDAuMDA4MzU1ODMpLCBjb3JyZWxhdGlvbiAoMC41NTI4NSkqLyxcbiAgICAxMCw2LCAxMSwtOC8qbWVhbiAoMC4wMDg4NTA2NSksIGNvcnJlbGF0aW9uICgwLjU0MDkxMykqLyxcbiAgICA2LDgsIDgsLTEyLyptZWFuICgwLjAxMDE1NTIpLCBjb3JyZWxhdGlvbiAoMC41NTEwODUpKi8sXG4gICAgLTcsMTAsIC02LDUvKm1lYW4gKDAuMDEwMjIyNyksIGNvcnJlbGF0aW9uICgwLjUzMzYzNSkqLyxcbiAgICAtMywtOSwgLTMsOS8qbWVhbiAoMC4wMTEwMjExKSwgY29ycmVsYXRpb24gKDAuNTQzMTIxKSovLFxuICAgIC0xLC0xMywgLTEsNS8qbWVhbiAoMC4wMTEzNDczKSwgY29ycmVsYXRpb24gKDAuNTUwMTczKSovLFxuICAgIC0zLC03LCAtMyw0LyptZWFuICgwLjAxNDA5MTMpLCBjb3JyZWxhdGlvbiAoMC41NTQ3NzQpKi8sXG4gICAgLTgsLTIsIC04LDMvKm1lYW4gKDAuMDE3MDQ5KSwgY29ycmVsYXRpb24gKDAuNTU0NjEpKi8sXG4gICAgNCwyLCAxMiwxMi8qbWVhbiAoMC4wMTc3OCksIGNvcnJlbGF0aW9uICgwLjU0NjkyMSkqLyxcbiAgICAyLC01LCAzLDExLyptZWFuICgwLjAyMjQwMjIpLCBjb3JyZWxhdGlvbiAoMC41NDk2NjcpKi8sXG4gICAgNiwtOSwgMTEsLTEzLyptZWFuICgwLjAyOTE2MSksIGNvcnJlbGF0aW9uICgwLjU0NjI5NSkqLyxcbiAgICAzLC0xLCA3LDEyLyptZWFuICgwLjAzMDMwODEpLCBjb3JyZWxhdGlvbiAoMC41NDg1OTkpKi8sXG4gICAgMTEsLTEsIDEyLDQvKm1lYW4gKDAuMDM1NTE1MSksIGNvcnJlbGF0aW9uICgwLjUyMzk0MykqLyxcbiAgICAtMywwLCAtMyw2LyptZWFuICgwLjA0MTc5MDQpLCBjb3JyZWxhdGlvbiAoMC41NDMzOTUpKi8sXG4gICAgNCwtMTEsIDQsMTIvKm1lYW4gKDAuMDQ4NzI5MiksIGNvcnJlbGF0aW9uICgwLjU0MjgxOCkqLyxcbiAgICAyLC00LCAyLDEvKm1lYW4gKDAuMDU3NTEyNCksIGNvcnJlbGF0aW9uICgwLjU1NDg4OCkqLyxcbiAgICAtMTAsLTYsIC04LDEvKm1lYW4gKDAuMDU5NDI0MiksIGNvcnJlbGF0aW9uICgwLjU0NDAyNikqLyxcbiAgICAtMTMsNywgLTExLDEvKm1lYW4gKDAuMDU5NzM5MSksIGNvcnJlbGF0aW9uICgwLjU1MDUyNCkqLyxcbiAgICAtMTMsMTIsIC0xMSwtMTMvKm1lYW4gKDAuMDYwODk3NCksIGNvcnJlbGF0aW9uICgwLjU1MzgzKSovLFxuICAgIDYsMCwgMTEsLTEzLyptZWFuICgwLjA2NTEyNiksIGNvcnJlbGF0aW9uICgwLjU1MjAwNikqLyxcbiAgICAwLC0xLCAxLDQvKm1lYW4gKDAuMDc0MjI0KSwgY29ycmVsYXRpb24gKDAuNTQ2MzcyKSovLFxuICAgIC0xMywzLCAtOSwtMi8qbWVhbiAoMC4wODA4NTkyKSwgY29ycmVsYXRpb24gKDAuNTU0ODc1KSovLFxuICAgIC05LDgsIC02LC0zLyptZWFuICgwLjA4ODMzNzgpLCBjb3JyZWxhdGlvbiAoMC41NTExNzgpKi8sXG4gICAgLTEzLC02LCAtOCwtMi8qbWVhbiAoMC4wOTAxMDM1KSwgY29ycmVsYXRpb24gKDAuNTQ4NDQ2KSovLFxuICAgIDUsLTksIDgsMTAvKm1lYW4gKDAuMDk0OTg0MyksIGNvcnJlbGF0aW9uICgwLjU1NDY5NCkqLyxcbiAgICAyLDcsIDMsLTkvKm1lYW4gKDAuMDk5NDE1MiksIGNvcnJlbGF0aW9uICgwLjU1MDk3OSkqLyxcbiAgICAtMSwtNiwgLTEsLTEvKm1lYW4gKDAuMTAwNDUpLCBjb3JyZWxhdGlvbiAoMC41NTI3MTQpKi8sXG4gICAgOSw1LCAxMSwtMi8qbWVhbiAoMC4xMDA2ODYpLCBjb3JyZWxhdGlvbiAoMC41NTI1OTQpKi8sXG4gICAgMTEsLTMsIDEyLC04LyptZWFuICgwLjEwMTA5MSksIGNvcnJlbGF0aW9uICgwLjUzMjM5NCkqLyxcbiAgICAzLDAsIDMsNS8qbWVhbiAoMC4xMDExNDcpLCBjb3JyZWxhdGlvbiAoMC41MjU1NzYpKi8sXG4gICAgLTEsNCwgMCwxMC8qbWVhbiAoMC4xMDUyNjMpLCBjb3JyZWxhdGlvbiAoMC41MzE0OTgpKi8sXG4gICAgMywtNiwgNCw1LyptZWFuICgwLjExMDc4NSksIGNvcnJlbGF0aW9uICgwLjU0MDQ5MSkqLyxcbiAgICAtMTMsMCwgLTEwLDUvKm1lYW4gKDAuMTEyNzk4KSwgY29ycmVsYXRpb24gKDAuNTM2NTgyKSovLFxuICAgIDUsOCwgMTIsMTEvKm1lYW4gKDAuMTE0MTgxKSwgY29ycmVsYXRpb24gKDAuNTU1NzkzKSovLFxuICAgIDgsOSwgOSwtNi8qbWVhbiAoMC4xMTc0MzEpLCBjb3JyZWxhdGlvbiAoMC41NTM3NjMpKi8sXG4gICAgNywtNCwgOCwtMTIvKm1lYW4gKDAuMTE4NTIyKSwgY29ycmVsYXRpb24gKDAuNTUzNDUyKSovLFxuICAgIC0xMCw0LCAtMTAsOS8qbWVhbiAoMC4xMjA5NCksIGNvcnJlbGF0aW9uICgwLjU1NDc4NSkqLyxcbiAgICA3LDMsIDEyLDQvKm1lYW4gKDAuMTIyNTgyKSwgY29ycmVsYXRpb24gKDAuNTU1ODI1KSovLFxuICAgIDksLTcsIDEwLC0yLyptZWFuICgwLjEyNDk3OCksIGNvcnJlbGF0aW9uICgwLjU0OTg0NikqLyxcbiAgICA3LDAsIDEyLC0yLyptZWFuICgwLjEyNzAwMiksIGNvcnJlbGF0aW9uICgwLjUzNzQ1MikqLyxcbiAgICAtMSwtNiwgMCwtMTEvKm1lYW4gKDAuMTI3MTQ4KSwgY29ycmVsYXRpb24gKDAuNTQ3NDAxKSovXG5dOyIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBiaXRfcGF0dGVybl8zMSBmcm9tICcuL2JpdF9wYXR0ZXJuXzMxLmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgcmVjdGlmeV9wYXRjaCBmcm9tICcuL3JlY3RpZnlfcGF0Y2guanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG5cbiAgICBkZXNjcmliZShzcmMsIGNvcm5lcnMsIGNvdW50LCBkZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgdmFyIGkgPSAwLCBiID0gMCwgcHggPSAwLjAsIHB5ID0gMC4wLCBhbmdsZSA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMCwgdDEgPSAwLCB2YWwgPSAwO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgcGF0Y2hfZCA9IHRoaXMucGF0Y2hfaW1nLmRhdGE7XG4gICAgICAgIHZhciBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICB2YXIgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzY3JfZCA9IGRlc2NyaXB0b3JzLmRhdGE7XG4gICAgICAgIHZhciBkZXNjcl9vZmYgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBweCA9IGNvcm5lcnNbaV0ueDtcbiAgICAgICAgICAgIHB5ID0gY29ybmVyc1tpXS55O1xuICAgICAgICAgICAgYW5nbGUgPSBjb3JuZXJzW2ldLmFuZ2xlO1xuXG4gICAgICAgICAgICByZWN0aWZ5X3BhdGNoKHNyYywgcGF0Y2hfaW1nLCBhbmdsZSwgcHgsIHB5LCAzMik7XG5cbiAgICAgICAgICAgIC8vIGRlc2NyaWJlIHRoZSBwYXRjaFxuICAgICAgICAgICAgcGF0dCA9IDA7XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgREVTQ1JfU0laRTsgKytiKSB7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsID0gKHQwIDwgdDEpIHwgMDtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDE7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAyO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMztcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDQ7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA1O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDc7XG5cbiAgICAgICAgICAgICAgICBkZXNjcl9kW2Rlc2NyX29mZiArIGJdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3Jfb2ZmICs9IERFU0NSX1NJWkU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChzcmMsIGRzdCwgYW5nbGUsIHB4LCBweSwgcHNpemUpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgdmFyIGltZ3ByYyA9IG5ldyBpbWdwcm9jKCk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3ByYy53YXJwX2FmZmluZShzcmMsIGRzdCwgSCwgMTI4KTtcbn0iLCJpbXBvcnQgaW1ncHJvYyBmcm9tICcuLi9pbWdwcm9jL2ltZ3Byb2MuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBweXJhbWlkX3Qge1xuICAgIGNjb25zdHJ1Y3RvcihsZXZlbHMpIHtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHMgfCAwO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobGV2ZWxzKTtcbiAgICAgICAgLy9qc2ZlYXROZXh0LmltZ3Byb2MucHlyZG93biBpcyBub3QgeWV0IGltcGxlbWVudGVkLi4uIFxuICAgICAgICB0aGlzLnB5cmRvd24gPSBuZXcgaW1ncHJvYy5weXJkb3duO1xuICAgIH1cblxuICAgIGFsbG9jYXRlKHN0YXJ0X3csIHN0YXJ0X2gsIGRhdGFfdHlwZSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubGV2ZWxzO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGQoaW5wdXQsIHNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBpZiAoIXNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBqID0gaW5wdXQuY29scyAqIGlucHV0LnJvd3M7XG4gICAgICAgICAgICB3aGlsZSAoLS1qID49IDApIHtcbiAgICAgICAgICAgICAgICBiLmRhdGFbal0gPSBpbnB1dC5kYXRhW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGIgPSB0aGlzLmRhdGFbMV07XG4gICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgZm9yICg7IGkgPCB0aGlzLmxldmVsczsgKytpKSB7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0aGlzLmRhdGFbaV07XG4gICAgICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dC5qcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIl9yZXNhbXBsZSIsIl9yZXNhbXBsZV91OCIsImltZ3Byb2MiLCJzcmMiLCJ3IiwiaCIsImRzdCIsImNvZGUiLCJ4IiwieSIsImoiLCJpciIsImpyIiwiY29lZmZfciIsImNvZWZmX2ciLCJjb2VmZl9iIiwiY24iLCJjbjIiLCJjbjMiLCJkc3RfdTgiLCJkYXRhIiwic3giLCJzeSIsImNvbHMiLCJyb3dzIiwidzIiLCJoMiIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsImNoYW5uZWwiLCJzcmNfZCIsImRzdF9kIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsImEiLCJiIiwicDAiLCJwMSIsInRkIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwianNmZWF0TmV4dCIsIm53IiwibmgiLCJ4b2ZzX2NvdW50IiwiY2giLCJzY2FsZV94Iiwic2NhbGVfeSIsImludl9zY2FsZV8yNTYiLCJkeCIsImR5Iiwic3gxIiwic3gyIiwiayIsImZzeDEiLCJmc3gyIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJidWZfbm9kZSIsImdldF9idWZmZXIiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImJ1ZiIsImkzMiIsInN1bSIsInhvZnMiLCJNYXRoIiwibWluIiwibWF4IiwicHV0X2J1ZmZlciIsInNjYWxlIiwiZjMyIiwiYWJzIiwiZGF0YV90Iiwia2V5cG9pbnRfdCIsIm1hdG1hdGgiLCJtYXRyaXhfdCIsInB5cmFtaWRfdCIsImxpbmFsZyIsIm9yYiIsInBrZyIsImR0IiwiX2dldF9kYXRhX3R5cGUiLCJfZ2V0X2NoYW5uZWwiLCJfZ2V0X2RhdGFfdHlwZV9zaXplIiwidmVyc2lvbiIsInNjb3JlIiwibGV2ZWwiLCJhbmdsZSIsInN3YXAiLCJBIiwiaTAiLCJpMSIsInQiLCJoeXBvdCIsInNxcnQiLCJhbGxvY2F0ZSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsIm4iLCJlcHMiLCJtIiwibCIsImlkeCIsIl9pbiIsIl9pbjIiLCJpdGVycyIsIm1heF9pdGVyIiwibXYiLCJ2YWwiLCJwIiwicyIsImMiLCJhMCIsImIwIiwiaW5kUl9idWZmIiwiaW5kQ19idWZmIiwiaW5kUiIsImluZEMiLCJBdCIsIl9XIiwiVnQiLCJuMSIsIm1pbnZhbCIsIml0ZXIiLCJBaSIsIkFqIiwiVmkiLCJWaiIsImNoYW5nZWQiLCJ0MCIsInQxIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImFkIiwiYmQiLCJkIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJvcHRpb25zIiwiYXQiLCJfbSIsIl9uIiwiYV9idWZmIiwid19idWZmIiwidl9idWZmIiwiYV9tdCIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwiSmFjb2JpU1ZESW1wbCIsIlgiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwiTSIsInZhbHVlIiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwiQyIsIkFwIiwicEEiLCJwQiIsInBfQiIsIkNwIiwibWNvbHMiLCJjZCIsIm1yb3dzIiwicENkaWFnIiwicF9BIiwicEMiLCJwQ3QiLCJwX0MiLCJwX0NDIiwiZnJvbSIsInRvIiwiaW52QSIsInQyIiwidDQiLCJ0NSIsInQ4IiwidDkiLCJ0MTEiLCJ0MTMiLCJ0MTQiLCJ0MTUiLCJ0MTciLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjMiLCJ0MjYiLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsInIiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJBcnJheUJ1ZmZlciIsImxlbmd0aCIsIlVpbnQ4QXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJiaXRfcGF0dGVybl8zMSIsInJlY3RpZnlfcGF0Y2giLCJiaXRfcGF0dGVybl8zMV8iLCJIIiwicGF0Y2hfaW1nIiwiY29ybmVycyIsImNvdW50IiwiZGVzY3JpcHRvcnMiLCJERVNDUl9TSVpFIiwicHgiLCJweSIsImltZyIsInBhdGNoX2QiLCJwYXRjaF9vZmYiLCJwYXR0IiwiZGVzY3JfZCIsImRlc2NyX29mZiIsInBzaXplIiwiY29zaW5lIiwiY29zIiwic2luZSIsInNpbiIsImltZ3ByYyIsIndhcnBfYWZmaW5lIiwibGV2ZWxzIiwiQXJyYXkiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiXSwic291cmNlUm9vdCI6IiJ9