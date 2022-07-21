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
  SVD_V_T: 0x02,
  // popular formats
  U8C1_t: 0x0100 | 0x01,
  U8C3_t: 0x0100 | 0x03,
  U8C4_t: 0x0100 | 0x04,
  F32C1_t: 0x0400 | 0x01,
  F32C2_t: 0x0400 | 0x02,
  S32C1_t: 0x0200 | 0x01,
  S32C2_t: 0x0200 | 0x02
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

/***/ "./src/imgproc/convol.js":
/*!*******************************!*\
  !*** ./src/imgproc/convol.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_convol": () => (/* binding */ _convol),
/* harmony export */   "_convol_u8": () => (/* binding */ _convol_u8)
/* harmony export */ });
function _convol_u8(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel) {
  var i = 0,
      j = 0,
      k = 0,
      sp = 0,
      dp = 0,
      sum = 0,
      sum1 = 0,
      sum2 = 0,
      sum3 = 0,
      f0 = filter[0],
      fk = 0;
  var w2 = w << 1,
      w3 = w * 3,
      w4 = w << 2; // hor pass

  for (; i < h; ++i) {
    sum = src_d[sp];

    for (j = 0; j < half_kernel; ++j) {
      buf[j] = sum;
    }

    for (j = 0; j <= w - 2; j += 2) {
      buf[j + half_kernel] = src_d[sp + j];
      buf[j + half_kernel + 1] = src_d[sp + j + 1];
    }

    for (; j < w; ++j) {
      buf[j + half_kernel] = src_d[sp + j];
    }

    sum = src_d[sp + w - 1];

    for (j = w; j < half_kernel + w; ++j) {
      buf[j + half_kernel] = sum;
    }

    for (j = 0; j <= w - 4; j += 4) {
      sum = buf[j] * f0, sum1 = buf[j + 1] * f0, sum2 = buf[j + 2] * f0, sum3 = buf[j + 3] * f0;

      for (k = 1; k < kernel_size; ++k) {
        fk = filter[k];
        sum += buf[k + j] * fk;
        sum1 += buf[k + j + 1] * fk;
        sum2 += buf[k + j + 2] * fk;
        sum3 += buf[k + j + 3] * fk;
      }

      dst_d[dp + j] = Math.min(sum >> 8, 255);
      dst_d[dp + j + 1] = Math.min(sum1 >> 8, 255);
      dst_d[dp + j + 2] = Math.min(sum2 >> 8, 255);
      dst_d[dp + j + 3] = Math.min(sum3 >> 8, 255);
    }

    for (; j < w; ++j) {
      sum = buf[j] * f0;

      for (k = 1; k < kernel_size; ++k) {
        sum += buf[k + j] * filter[k];
      }

      dst_d[dp + j] = Math.min(sum >> 8, 255);
    }

    sp += w;
    dp += w;
  } // vert pass


  for (i = 0; i < w; ++i) {
    sum = dst_d[i];

    for (j = 0; j < half_kernel; ++j) {
      buf[j] = sum;
    }

    k = i;

    for (j = 0; j <= h - 2; j += 2, k += w2) {
      buf[j + half_kernel] = dst_d[k];
      buf[j + half_kernel + 1] = dst_d[k + w];
    }

    for (; j < h; ++j, k += w) {
      buf[j + half_kernel] = dst_d[k];
    }

    sum = dst_d[(h - 1) * w + i];

    for (j = h; j < half_kernel + h; ++j) {
      buf[j + half_kernel] = sum;
    }

    dp = i;

    for (j = 0; j <= h - 4; j += 4, dp += w4) {
      sum = buf[j] * f0, sum1 = buf[j + 1] * f0, sum2 = buf[j + 2] * f0, sum3 = buf[j + 3] * f0;

      for (k = 1; k < kernel_size; ++k) {
        fk = filter[k];
        sum += buf[k + j] * fk;
        sum1 += buf[k + j + 1] * fk;
        sum2 += buf[k + j + 2] * fk;
        sum3 += buf[k + j + 3] * fk;
      }

      dst_d[dp] = Math.min(sum >> 8, 255);
      dst_d[dp + w] = Math.min(sum1 >> 8, 255);
      dst_d[dp + w2] = Math.min(sum2 >> 8, 255);
      dst_d[dp + w3] = Math.min(sum3 >> 8, 255);
    }

    for (; j < h; ++j, dp += w) {
      sum = buf[j] * f0;

      for (k = 1; k < kernel_size; ++k) {
        sum += buf[k + j] * filter[k];
      }

      dst_d[dp] = Math.min(sum >> 8, 255);
    }
  }
}
function _convol(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel) {
  var i = 0,
      j = 0,
      k = 0,
      sp = 0,
      dp = 0,
      sum = 0.0,
      sum1 = 0.0,
      sum2 = 0.0,
      sum3 = 0.0,
      f0 = filter[0],
      fk = 0.0;
  var w2 = w << 1,
      w3 = w * 3,
      w4 = w << 2; // hor pass

  for (; i < h; ++i) {
    sum = src_d[sp];

    for (j = 0; j < half_kernel; ++j) {
      buf[j] = sum;
    }

    for (j = 0; j <= w - 2; j += 2) {
      buf[j + half_kernel] = src_d[sp + j];
      buf[j + half_kernel + 1] = src_d[sp + j + 1];
    }

    for (; j < w; ++j) {
      buf[j + half_kernel] = src_d[sp + j];
    }

    sum = src_d[sp + w - 1];

    for (j = w; j < half_kernel + w; ++j) {
      buf[j + half_kernel] = sum;
    }

    for (j = 0; j <= w - 4; j += 4) {
      sum = buf[j] * f0, sum1 = buf[j + 1] * f0, sum2 = buf[j + 2] * f0, sum3 = buf[j + 3] * f0;

      for (k = 1; k < kernel_size; ++k) {
        fk = filter[k];
        sum += buf[k + j] * fk;
        sum1 += buf[k + j + 1] * fk;
        sum2 += buf[k + j + 2] * fk;
        sum3 += buf[k + j + 3] * fk;
      }

      dst_d[dp + j] = sum;
      dst_d[dp + j + 1] = sum1;
      dst_d[dp + j + 2] = sum2;
      dst_d[dp + j + 3] = sum3;
    }

    for (; j < w; ++j) {
      sum = buf[j] * f0;

      for (k = 1; k < kernel_size; ++k) {
        sum += buf[k + j] * filter[k];
      }

      dst_d[dp + j] = sum;
    }

    sp += w;
    dp += w;
  } // vert pass


  for (i = 0; i < w; ++i) {
    sum = dst_d[i];

    for (j = 0; j < half_kernel; ++j) {
      buf[j] = sum;
    }

    k = i;

    for (j = 0; j <= h - 2; j += 2, k += w2) {
      buf[j + half_kernel] = dst_d[k];
      buf[j + half_kernel + 1] = dst_d[k + w];
    }

    for (; j < h; ++j, k += w) {
      buf[j + half_kernel] = dst_d[k];
    }

    sum = dst_d[(h - 1) * w + i];

    for (j = h; j < half_kernel + h; ++j) {
      buf[j + half_kernel] = sum;
    }

    dp = i;

    for (j = 0; j <= h - 4; j += 4, dp += w4) {
      sum = buf[j] * f0, sum1 = buf[j + 1] * f0, sum2 = buf[j + 2] * f0, sum3 = buf[j + 3] * f0;

      for (k = 1; k < kernel_size; ++k) {
        fk = filter[k];
        sum += buf[k + j] * fk;
        sum1 += buf[k + j + 1] * fk;
        sum2 += buf[k + j + 2] * fk;
        sum3 += buf[k + j + 3] * fk;
      }

      dst_d[dp] = sum;
      dst_d[dp + w] = sum1;
      dst_d[dp + w2] = sum2;
      dst_d[dp + w3] = sum3;
    }

    for (; j < h; ++j, dp += w) {
      sum = buf[j] * f0;

      for (k = 1; k < kernel_size; ++k) {
        sum += buf[k + j] * filter[k];
      }

      dst_d[dp] = sum;
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
//import jsfeatNext from '../jsfeatNext.js'
function _resample_u8(src, dst, cache, nw, nh) {
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
  var buf_node = cache.get_buffer(nw * ch << 2);
  var sum_node = cache.get_buffer(nw * ch << 2);
  var xofs_node = cache.get_buffer(w * 2 * 3 << 2);
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

  cache.put_buffer(sum_node);
  cache.put_buffer(buf_node);
  cache.put_buffer(xofs_node);
}
function _resample(src, dst, cache, nw, nh) {
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
  var buf_node = cache.get_buffer(nw * ch << 2);
  var sum_node = cache.get_buffer(nw * ch << 2);
  var xofs_node = cache.get_buffer(w * 2 * 3 << 2);
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

  cache.put_buffer(sum_node);
  cache.put_buffer(buf_node);
  cache.put_buffer(xofs_node);
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_utils/_pool_node_t.js */ "./src/node_utils/_pool_node_t.js");
/* harmony import */ var _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data_type/data_type.js */ "./src/data_type/data_type.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_utils/data_t.js */ "./src/node_utils/data_t.js");
/* harmony import */ var _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./keypoint_t/keypoint_t.js */ "./src/keypoint_t/keypoint_t.js");
/* harmony import */ var _imgproc_resample_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgproc/resample.js */ "./src/imgproc/resample.js");
/* harmony import */ var _imgproc_convol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imgproc/convol.js */ "./src/imgproc/convol.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./matmath/matmath.js */ "./src/matmath/matmath.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./linalg/linalg-base.js */ "./src/linalg/linalg-base.js");
/* harmony import */ var _orb_bit_pattern_31_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orb/bit_pattern_31.js */ "./src/orb/bit_pattern_31.js");
/* harmony import */ var _orb_rectify_patch_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orb/rectify_patch.js */ "./src/orb/rectify_patch.js");
/* harmony import */ var _yape_yape_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./yape/yape.js */ "./src/yape/yape.js");
/* harmony import */ var _yape06_yape06_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./yape06/yape06.js */ "./src/yape06/yape06.js");
/* harmony import */ var _motion_estimator_ransac_params_t_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./motion_estimator/ransac_params_t.js */ "./src/motion_estimator/ransac_params_t.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../package.json */ "./package.json");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







 //import math from './math/math.js'


 //import pyramid_t from './pyramid_t/pyramid_t.js'
//import linalg from './linalg/linalg.js'

 //import orb from './orb/orb.js'




 //import motion_estimator from './motion_estimator/motion_estimator.js'
//import { motion_model } from './motion_estimator/motion_model.js'





var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, jsfeatNext);

    this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.cache.allocate(30, 640 * 4);
  } // VERSION


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(jsfeatNext, [{
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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_22__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "EPSILON", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "FLT_MIN", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C1_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C2_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C3_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C4_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "SVD_U_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "SVD_V_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);



var motion_model = /*#__PURE__*/function (_jsfeatNext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(motion_model, _jsfeatNext);

  var _super = _createSuper(motion_model);

  function motion_model() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, motion_model);

    _this = _super.call(this);
    _this.T0 = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.T1 = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.AtA = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](6, 6, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.AtB = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](6, 1, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(motion_model, [{
    key: "sqr",
    value: function sqr(x) {
      return x * x;
    } // does isotropic normalization

  }, {
    key: "iso_normalize_points",
    value: function iso_normalize_points(from, to, T0, T1, count) {
      var i = 0;
      var cx0 = 0.0,
          cy0 = 0.0,
          d0 = 0.0,
          s0 = 0.0;
      var cx1 = 0.0,
          cy1 = 0.0,
          d1 = 0.0,
          s1 = 0.0;
      var dx = 0.0,
          dy = 0.0;

      for (; i < count; ++i) {
        cx0 += from[i].x;
        cy0 += from[i].y;
        cx1 += to[i].x;
        cy1 += to[i].y;
      }

      cx0 /= count;
      cy0 /= count;
      cx1 /= count;
      cy1 /= count;

      for (i = 0; i < count; ++i) {
        dx = from[i].x - cx0;
        dy = from[i].y - cy0;
        d0 += Math.sqrt(dx * dx + dy * dy);
        dx = to[i].x - cx1;
        dy = to[i].y - cy1;
        d1 += Math.sqrt(dx * dx + dy * dy);
      }

      d0 /= count;
      d1 /= count;
      s0 = Math.SQRT2 / d0;
      s1 = Math.SQRT2 / d1;
      T0[0] = T0[4] = s0;
      T0[2] = -cx0 * s0;
      T0[5] = -cy0 * s0;
      T0[1] = T0[3] = T0[6] = T0[7] = 0.0;
      T0[8] = 1.0;
      T1[0] = T1[4] = s1;
      T1[2] = -cx1 * s1;
      T1[5] = -cy1 * s1;
      T1[1] = T1[3] = T1[6] = T1[7] = 0.0;
      T1[8] = 1.0;
    }
  }, {
    key: "have_collinear_points",
    value: function have_collinear_points(points, count) {
      var j = 0,
          k = 0,
          i = count - 1 | 0;
      var dx1 = 0.0,
          dy1 = 0.0,
          dx2 = 0.0,
          dy2 = 0.0; // check that the i-th selected point does not belong
      // to a line connecting some previously selected points

      for (; j < i; ++j) {
        dx1 = points[j].x - points[i].x;
        dy1 = points[j].y - points[i].y;

        for (k = 0; k < j; ++k) {
          dx2 = points[k].x - points[i].x;
          dy2 = points[k].y - points[i].y;
          if (Math.abs(dx2 * dy1 - dy2 * dx1) <= _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2))) return true;
        }
      }

      return false;
    }
  }]);

  return motion_model;
}(jsfeatNext);

var affine2d = /*#__PURE__*/function (_motion_model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(affine2d, _motion_model);

  var _super2 = _createSuper(affine2d);

  function affine2d() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, affine2d);

    return _super2.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(affine2d, [{
    key: "run",
    value: function run(from, to, model, count) {
      var i = 0,
          j = 0;
      var dt = model.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var md = model.data,
          t0d = this.T0.data,
          t1d = this.T1.data;
      var pt0,
          pt1,
          px = 0.0,
          py = 0.0;

      var _matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_13__["default"]();

      var _linalg = new jsfeatNext.linalg();

      this.iso_normalize_points(from, to, t0d, t1d, count);
      var a_buff = this.cache.get_buffer(2 * count * 6 << 3);
      var b_buff = this.cache.get_buffer(2 * count << 3);
      var a_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](6, 2 * count, dt, a_buff.data);
      var b_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](1, 2 * count, dt, b_buff.data);
      var ad = a_mt.data,
          bd = b_mt.data;

      for (; i < count; ++i) {
        pt0 = from[i];
        pt1 = to[i];
        px = t0d[0] * pt0.x + t0d[1] * pt0.y + t0d[2];
        py = t0d[3] * pt0.x + t0d[4] * pt0.y + t0d[5];
        j = i * 2 * 6;
        ad[j] = px, ad[j + 1] = py, ad[j + 2] = 1.0, ad[j + 3] = 0.0, ad[j + 4] = 0.0, ad[j + 5] = 0.0;
        j += 6;
        ad[j] = 0.0, ad[j + 1] = 0.0, ad[j + 2] = 0.0, ad[j + 3] = px, ad[j + 4] = py, ad[j + 5] = 1.0;
        bd[i << 1] = t1d[0] * pt1.x + t1d[1] * pt1.y + t1d[2];
        bd[(i << 1) + 1] = t1d[3] * pt1.x + t1d[4] * pt1.y + t1d[5];
      }

      _matmath.multiply_AtA(this.AtA, a_mt);

      _matmath.multiply_AtB(this.AtB, a_mt, b_mt);

      _linalg.lu_solve(this.AtA, this.AtB);

      md[0] = this.AtB.data[0], md[1] = this.AtB.data[1], md[2] = this.AtB.data[2];
      md[3] = this.AtB.data[3], md[4] = this.AtB.data[4], md[5] = this.AtB.data[5];
      md[6] = 0.0, md[7] = 0.0, md[8] = 1.0; // fill last row
      // denormalize

      _matmath.invert_3x3(this.T1, this.T1);

      _matmath.multiply_3x3(model, this.T1, model);

      _matmath.multiply_3x3(model, model, this.T0); // free buffer


      this.cache.put_buffer(a_buff);
      this.cache.put_buffer(b_buff);
      return 1;
    }
  }]);

  return affine2d;
}(motion_model);

var homography2d = /*#__PURE__*/function (_motion_model2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(homography2d, _motion_model2);

  var _super3 = _createSuper(homography2d);

  function homography2d() {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, homography2d);

    _this2 = _super3.call(this);
    _this2.mLtL = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](9, 9, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this2.Evec = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](9, 9, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    return _this2;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(homography2d, [{
    key: "run",
    value: function run(from, to, model, count) {
      var i = 0,
          j = 0;
      var md = model.data,
          t0d = this.T0.data,
          t1d = this.T1.data;
      var LtL = this.mLtL.data,
          evd = this.Evec.data;
      var x = 0.0,
          y = 0.0,
          X = 0.0,
          Y = 0.0;

      var _linalg = new jsfeatNext.linalg();

      var _matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_13__["default"](); // norm


      var smx = 0.0,
          smy = 0.0,
          cmx = 0.0,
          cmy = 0.0,
          sMx = 0.0,
          sMy = 0.0,
          cMx = 0.0,
          cMy = 0.0;

      for (; i < count; ++i) {
        cmx += to[i].x;
        cmy += to[i].y;
        cMx += from[i].x;
        cMy += from[i].y;
      }

      cmx /= count;
      cmy /= count;
      cMx /= count;
      cMy /= count;

      for (i = 0; i < count; ++i) {
        smx += Math.abs(to[i].x - cmx);
        smy += Math.abs(to[i].y - cmy);
        sMx += Math.abs(from[i].x - cMx);
        sMy += Math.abs(from[i].y - cMy);
      }

      if (Math.abs(smx) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON || Math.abs(smy) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMx) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMy) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON) return 0;
      smx = count / smx;
      smy = count / smy;
      sMx = count / sMx;
      sMy = count / sMy;
      t0d[0] = sMx;
      t0d[1] = 0;
      t0d[2] = -cMx * sMx;
      t0d[3] = 0;
      t0d[4] = sMy;
      t0d[5] = -cMy * sMy;
      t0d[6] = 0;
      t0d[7] = 0;
      t0d[8] = 1;
      t1d[0] = 1.0 / smx;
      t1d[1] = 0;
      t1d[2] = cmx;
      t1d[3] = 0;
      t1d[4] = 1.0 / smy;
      t1d[5] = cmy;
      t1d[6] = 0;
      t1d[7] = 0;
      t1d[8] = 1; //
      // construct system

      i = 81;

      while (--i >= 0) {
        LtL[i] = 0.0;
      }

      for (i = 0; i < count; ++i) {
        x = (to[i].x - cmx) * smx;
        y = (to[i].y - cmy) * smy;
        X = (from[i].x - cMx) * sMx;
        Y = (from[i].y - cMy) * sMy;
        LtL[0] += X * X;
        LtL[1] += X * Y;
        LtL[2] += X;
        LtL[6] += X * -x * X;
        LtL[7] += X * -x * Y;
        LtL[8] += X * -x;
        LtL[10] += Y * Y;
        LtL[11] += Y;
        LtL[15] += Y * -x * X;
        LtL[16] += Y * -x * Y;
        LtL[17] += Y * -x;
        LtL[20] += 1.0;
        LtL[24] += -x * X;
        LtL[25] += -x * Y;
        LtL[26] += -x;
        LtL[30] += X * X;
        LtL[31] += X * Y;
        LtL[32] += X;
        LtL[33] += X * -y * X;
        LtL[34] += X * -y * Y;
        LtL[35] += X * -y;
        LtL[40] += Y * Y;
        LtL[41] += Y;
        LtL[42] += Y * -y * X;
        LtL[43] += Y * -y * Y;
        LtL[44] += Y * -y;
        LtL[50] += 1.0;
        LtL[51] += -y * X;
        LtL[52] += -y * Y;
        LtL[53] += -y;
        LtL[60] += -x * X * -x * X + -y * X * -y * X;
        LtL[61] += -x * X * -x * Y + -y * X * -y * Y;
        LtL[62] += -x * X * -x + -y * X * -y;
        LtL[70] += -x * Y * -x * Y + -y * Y * -y * Y;
        LtL[71] += -x * Y * -x + -y * Y * -y;
        LtL[80] += -x * -x + -y * -y;
      } //
      // symmetry


      for (i = 0; i < 9; ++i) {
        for (j = 0; j < i; ++j) {
          LtL[i * 9 + j] = LtL[j * 9 + i];
        }
      }

      _linalg.eigenVV(this.mLtL, this.Evec);

      md[0] = evd[72], md[1] = evd[73], md[2] = evd[74];
      md[3] = evd[75], md[4] = evd[76], md[5] = evd[77];
      md[6] = evd[78], md[7] = evd[79], md[8] = evd[80]; // denormalize

      _matmath.multiply_3x3(model, this.T1, model);

      _matmath.multiply_3x3(model, model, this.T0); // set bottom right to 1.0


      x = 1.0 / md[8];
      md[0] *= x;
      md[1] *= x;
      md[2] *= x;
      md[3] *= x;
      md[4] *= x;
      md[5] *= x;
      md[6] *= x;
      md[7] *= x;
      md[8] = 1.0;
      return 1;
    }
  }, {
    key: "error",
    value: function error(from, to, model, err, count) {
      var i = 0;
      var pt0,
          pt1,
          ww = 0.0,
          dx = 0.0,
          dy = 0.0;
      var m = model.data;

      for (; i < count; ++i) {
        pt0 = from[i];
        pt1 = to[i];
        ww = 1.0 / (m[6] * pt0.x + m[7] * pt0.y + 1.0);
        dx = (m[0] * pt0.x + m[1] * pt0.y + m[2]) * ww - pt1.x;
        dy = (m[3] * pt0.x + m[4] * pt0.y + m[5]) * ww - pt1.y;
        err[i] = dx * dx + dy * dy;
      }
    }
  }, {
    key: "check_subset",
    value: function check_subset(from, to, count) {
      // seems to reject good subsets actually
      //if( have_collinear_points(from, count) || have_collinear_points(to, count) ) {
      //return false;
      //}
      var _matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_13__["default"]();

      if (count == 4) {
        var negative = 0;
        var fp0 = from[0],
            fp1 = from[1],
            fp2 = from[2],
            fp3 = from[3];
        var tp0 = to[0],
            tp1 = to[1],
            tp2 = to[2],
            tp3 = to[3]; // set1

        var A11 = fp0.x,
            A12 = fp0.y,
            A13 = 1.0;
        var A21 = fp1.x,
            A22 = fp1.y,
            A23 = 1.0;
        var A31 = fp2.x,
            A32 = fp2.y,
            A33 = 1.0;
        var B11 = tp0.x,
            B12 = tp0.y,
            B13 = 1.0;
        var B21 = tp1.x,
            B22 = tp1.y,
            B23 = 1.0;
        var B31 = tp2.x,
            B32 = tp2.y,
            B33 = 1.0;

        var detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);

        var detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);

        if (detA * detB < 0) negative++; // set2

        A11 = fp1.x, A12 = fp1.y;
        A21 = fp2.x, A22 = fp2.y;
        A31 = fp3.x, A32 = fp3.y;
        B11 = tp1.x, B12 = tp1.y;
        B21 = tp2.x, B22 = tp2.y;
        B31 = tp3.x, B32 = tp3.y;
        detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
        detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
        if (detA * detB < 0) negative++; // set3

        A11 = fp0.x, A12 = fp0.y;
        A21 = fp2.x, A22 = fp2.y;
        A31 = fp3.x, A32 = fp3.y;
        B11 = tp0.x, B12 = tp0.y;
        B21 = tp2.x, B22 = tp2.y;
        B31 = tp3.x, B32 = tp3.y;
        detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
        detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
        if (detA * detB < 0) negative++; // set4

        A11 = fp0.x, A12 = fp0.y;
        A21 = fp1.x, A22 = fp1.y;
        A31 = fp3.x, A32 = fp3.y;
        B11 = tp0.x, B12 = tp0.y;
        B21 = tp1.x, B22 = tp1.y;
        B31 = tp3.x, B32 = tp3.y;
        detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
        detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
        if (detA * detB < 0) negative++;

        if (negative != 0 && negative != 4) {
          return false;
        }
      }

      return true; // all good
    }
  }]);

  return homography2d;
}(motion_model);

jsfeatNext.data_t = _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_9__["default"];
jsfeatNext.matrix_t = _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"];
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_10__["default"];

jsfeatNext.pyramid_t = /*#__PURE__*/function (_jsfeatNext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(pyramid_t, _jsfeatNext2);

  var _super4 = _createSuper(pyramid_t);

  function pyramid_t(levels) {
    var _this3;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, pyramid_t);

    _this3 = _super4.call(this);
    _this3.levels = levels | 0;
    _this3.data = new Array(levels);

    var _imgproc = new jsfeatNext.imgproc();

    _this3.pyrdown = _imgproc.pyrdown;
    return _this3;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(pyramid_t, [{
    key: "allocate",
    value: function allocate(start_w, start_h, data_type) {
      var i = this.levels;

      while (--i >= 0) {
        this.data[i] = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](start_w >> i, start_h >> i, data_type);
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
}(jsfeatNext);

jsfeatNext.cache = _cache_cache_js__WEBPACK_IMPORTED_MODULE_8__["default"];

jsfeatNext.imgproc = /*#__PURE__*/function (_jsfeatNext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(imgproc, _jsfeatNext3);

  var _super5 = _createSuper(imgproc);

  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, imgproc);

    return _super5.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      // this is default image data representation in browser
      if (typeof code === "undefined") {
        code = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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
    } // derived from CCV library

  }, {
    key: "resample",
    value: function resample(src, dst, nw, nh) {
      var h = src.rows,
          w = src.cols;

      if (h > nh && w > nw) {
        dst.resize(nw, nh, src.channel); // using the fast alternative (fix point scale, 0x100 to avoid overflow)

        if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
          (0,_imgproc_resample_js__WEBPACK_IMPORTED_MODULE_11__._resample_u8)(src, dst, this.cache, nw, nh);
        } else {
          (0,_imgproc_resample_js__WEBPACK_IMPORTED_MODULE_11__._resample)(src, dst, this.cache, nw, nh);
        }
      }
    }
  }, {
    key: "box_blur_gray",
    value: function box_blur_gray(src, dst, radius, options) {
      if (typeof options === "undefined") {
        options = 0;
      }

      var w = src.cols,
          h = src.rows,
          h2 = h << 1,
          w2 = w << 1;
      var i = 0,
          x = 0,
          y = 0,
          end = 0;
      var windowSize = (radius << 1) + 1 | 0;
      var radiusPlusOne = radius + 1 | 0,
          radiusPlus2 = radiusPlusOne + 1 | 0;
      var scale = options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
      var tmp_buff = this.cache.get_buffer(w * h << 2);
      var sum = 0,
          dstIndex = 0,
          srcIndex = 0,
          nextPixelIndex = 0,
          previousPixelIndex = 0;
      var data_i32 = tmp_buff.i32; // to prevent overflow

      var data_u8 = src.data;
      var hold = 0;
      dst.resize(w, h, src.channel); // first pass
      // no need to scale 
      //data_u8 = src.data;
      //data_i32 = tmp;

      for (y = 0; y < h; ++y) {
        dstIndex = y;
        sum = radiusPlusOne * data_u8[srcIndex];

        for (i = srcIndex + 1 | 0, end = srcIndex + radius | 0; i <= end; ++i) {
          sum += data_u8[i];
        }

        nextPixelIndex = srcIndex + radiusPlusOne | 0;
        previousPixelIndex = srcIndex;
        hold = data_u8[previousPixelIndex];

        for (x = 0; x < radius; ++x, dstIndex += h) {
          data_i32[dstIndex] = sum;
          sum += data_u8[nextPixelIndex] - hold;
          nextPixelIndex++;
        }

        for (; x < w - radiusPlus2; x += 2, dstIndex += h2) {
          data_i32[dstIndex] = sum;
          sum += data_u8[nextPixelIndex] - data_u8[previousPixelIndex];
          data_i32[dstIndex + h] = sum;
          sum += data_u8[nextPixelIndex + 1] - data_u8[previousPixelIndex + 1];
          nextPixelIndex += 2;
          previousPixelIndex += 2;
        }

        for (; x < w - radiusPlusOne; ++x, dstIndex += h) {
          data_i32[dstIndex] = sum;
          sum += data_u8[nextPixelIndex] - data_u8[previousPixelIndex];
          nextPixelIndex++;
          previousPixelIndex++;
        }

        hold = data_u8[nextPixelIndex - 1];

        for (; x < w; ++x, dstIndex += h) {
          data_i32[dstIndex] = sum;
          sum += hold - data_u8[previousPixelIndex];
          previousPixelIndex++;
        }

        srcIndex += w;
      } //
      // second pass


      srcIndex = 0; //data_i32 = tmp; // this is a transpose

      data_u8 = dst.data; // dont scale result

      if (scale == 1) {
        for (y = 0; y < w; ++y) {
          dstIndex = y;
          sum = radiusPlusOne * data_i32[srcIndex];

          for (i = srcIndex + 1 | 0, end = srcIndex + radius | 0; i <= end; ++i) {
            sum += data_i32[i];
          }

          nextPixelIndex = srcIndex + radiusPlusOne;
          previousPixelIndex = srcIndex;
          hold = data_i32[previousPixelIndex];

          for (x = 0; x < radius; ++x, dstIndex += w) {
            data_u8[dstIndex] = sum;
            sum += data_i32[nextPixelIndex] - hold;
            nextPixelIndex++;
          }

          for (; x < h - radiusPlus2; x += 2, dstIndex += w2) {
            data_u8[dstIndex] = sum;
            sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
            data_u8[dstIndex + w] = sum;
            sum += data_i32[nextPixelIndex + 1] - data_i32[previousPixelIndex + 1];
            nextPixelIndex += 2;
            previousPixelIndex += 2;
          }

          for (; x < h - radiusPlusOne; ++x, dstIndex += w) {
            data_u8[dstIndex] = sum;
            sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
            nextPixelIndex++;
            previousPixelIndex++;
          }

          hold = data_i32[nextPixelIndex - 1];

          for (; x < h; ++x, dstIndex += w) {
            data_u8[dstIndex] = sum;
            sum += hold - data_i32[previousPixelIndex];
            previousPixelIndex++;
          }

          srcIndex += h;
        }
      } else {
        for (y = 0; y < w; ++y) {
          dstIndex = y;
          sum = radiusPlusOne * data_i32[srcIndex];

          for (i = srcIndex + 1 | 0, end = srcIndex + radius | 0; i <= end; ++i) {
            sum += data_i32[i];
          }

          nextPixelIndex = srcIndex + radiusPlusOne;
          previousPixelIndex = srcIndex;
          hold = data_i32[previousPixelIndex];

          for (x = 0; x < radius; ++x, dstIndex += w) {
            data_u8[dstIndex] = sum * scale;
            sum += data_i32[nextPixelIndex] - hold;
            nextPixelIndex++;
          }

          for (; x < h - radiusPlus2; x += 2, dstIndex += w2) {
            data_u8[dstIndex] = sum * scale;
            sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
            data_u8[dstIndex + w] = sum * scale;
            sum += data_i32[nextPixelIndex + 1] - data_i32[previousPixelIndex + 1];
            nextPixelIndex += 2;
            previousPixelIndex += 2;
          }

          for (; x < h - radiusPlusOne; ++x, dstIndex += w) {
            data_u8[dstIndex] = sum * scale;
            sum += data_i32[nextPixelIndex] - data_i32[previousPixelIndex];
            nextPixelIndex++;
            previousPixelIndex++;
          }

          hold = data_i32[nextPixelIndex - 1];

          for (; x < h; ++x, dstIndex += w) {
            data_u8[dstIndex] = sum * scale;
            sum += hold - data_i32[previousPixelIndex];
            previousPixelIndex++;
          }

          srcIndex += h;
        }
      }

      this.cache.put_buffer(tmp_buff);
    }
  }, {
    key: "gaussian_blur",
    value: function gaussian_blur(src, dst, kernel_size, sigma) {
      var jsfeatmath = new jsfeatNext.math();

      if (typeof sigma === "undefined") {
        sigma = 0.0;
      }

      if (typeof kernel_size === "undefined") {
        kernel_size = 0;
      }

      kernel_size = kernel_size == 0 ? Math.max(1, 4.0 * sigma + 1.0 - 1e-8) * 2 + 1 | 0 : kernel_size;
      var half_kernel = kernel_size >> 1;
      var w = src.cols,
          h = src.rows;
      var data_type = src.type,
          is_u8 = data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t;
      dst.resize(w, h, src.channel);
      var src_d = src.data,
          dst_d = dst.data;
      var buf,
          filter,
          buf_sz = kernel_size + Math.max(h, w) | 0;
      var buf_node = this.cache.get_buffer(buf_sz << 2);
      var filt_node = this.cache.get_buffer(kernel_size << 2);

      if (is_u8) {
        buf = buf_node.i32;
        filter = filt_node.i32;
      } else if (data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t) {
        buf = buf_node.i32;
        filter = filt_node.f32;
      } else {
        buf = buf_node.f32;
        filter = filt_node.f32;
      }

      jsfeatmath.get_gaussian_kernel(kernel_size, sigma, filter, data_type);

      if (is_u8) {
        (0,_imgproc_convol_js__WEBPACK_IMPORTED_MODULE_12__._convol_u8)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      } else {
        (0,_imgproc_convol_js__WEBPACK_IMPORTED_MODULE_12__._convol)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      }

      this.cache.put_buffer(buf_node);
      this.cache.put_buffer(filt_node);
    }
  }, {
    key: "hough_transform",
    value: function hough_transform(img, rho_res, theta_res, threshold) {
      var image = img.data;
      var width = img.cols;
      var height = img.rows;
      var step = width;
      var min_theta = 0.0;
      var max_theta = Math.PI;
      var numangle = Math.round((max_theta - min_theta) / theta_res);
      var numrho = Math.round(((width + height) * 2 + 1) / rho_res);
      var irho = 1.0 / rho_res;
      var accum = new Int32Array((numangle + 2) * (numrho + 2)); //typed arrays are initialized to 0

      var tabSin = new Float32Array(numangle);
      var tabCos = new Float32Array(numangle);
      var n = 0;
      var ang = min_theta;

      for (; n < numangle; n++) {
        tabSin[n] = Math.sin(ang) * irho;
        tabCos[n] = Math.cos(ang) * irho;
        ang += theta_res;
      } // stage 1. fill accumulator


      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          if (image[i * step + j] != 0) {
            //console.log(r, (n+1) * (numrho+2) + r+1, tabCos[n], tabSin[n]);
            for (var n = 0; n < numangle; n++) {
              var r = Math.round(j * tabCos[n] + i * tabSin[n]);
              r += (numrho - 1) / 2;
              accum[(n + 1) * (numrho + 2) + r + 1] += 1;
            }
          }
        }
      } // stage 2. find local maximums
      //TODO: Consider making a vector class that uses typed arrays


      var _sort_buf = new Array();

      for (var r = 0; r < numrho; r++) {
        for (var n = 0; n < numangle; n++) {
          var base = (n + 1) * (numrho + 2) + r + 1;

          if (accum[base] > threshold && accum[base] > accum[base - 1] && accum[base] >= accum[base + 1] && accum[base] > accum[base - numrho - 2] && accum[base] >= accum[base + numrho + 2]) {
            _sort_buf.push(base);
          }
        }
      } // stage 3. sort the detected lines by accumulator value


      _sort_buf.sort(function (l1, l2) {
        return accum[l1] > accum[l2] || accum[l1] == accum[l2] && l1 < l2;
      }); // stage 4. store the first min(total,linesMax) lines to the output buffer


      var linesMax = Math.min(numangle * numrho, _sort_buf.length);
      var scale = 1.0 / (numrho + 2);
      var lines = new Array();

      for (var i = 0; i < linesMax; i++) {
        var idx = _sort_buf[i];
        var n = Math.floor(idx * scale) - 1;
        var r = idx - (n + 1) * (numrho + 2) - 1;
        var lrho = (r - (numrho - 1) * 0.5) * rho_res;
        var langle = n * theta_res;
        lines.push([lrho, langle]);
      }

      return lines;
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
    } // dst: [gx,gy,...]

  }, {
    key: "scharr_derivatives",
    value: function scharr_derivatives(src, dst) {
      var w = src.cols,
          h = src.rows;
      var dstep = w << 1,
          x = 0,
          y = 0,
          x1 = 0,
          a,
          b,
          c,
          d,
          e,
          f;
      var srow0 = 0,
          srow1 = 0,
          srow2 = 0,
          drow = 0;
      var trow0, trow1;
      dst.resize(w, h, 2); // 2 channel output gx, gy

      var img = src.data,
          gxgy = dst.data;
      var buf0_node = this.cache.get_buffer(w + 2 << 2);
      var buf1_node = this.cache.get_buffer(w + 2 << 2);

      if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t) {
        trow0 = buf0_node.i32;
        trow1 = buf1_node.i32;
      } else {
        trow0 = buf0_node.f32;
        trow1 = buf1_node.f32;
      }

      for (; y < h; ++y, srow1 += w) {
        srow0 = (y > 0 ? y - 1 : 1) * w | 0;
        srow2 = (y < h - 1 ? y + 1 : h - 2) * w | 0;
        drow = y * dstep | 0; // do vertical convolution

        for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
          trow1[x1] = b - a; //

          a = img[srow0 + x + 1], b = img[srow2 + x + 1];
          trow0[x1 + 1] = (a + b) * 3 + img[srow1 + x + 1] * 10;
          trow1[x1 + 1] = b - a;
        }

        for (; x < w; ++x, ++x1) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
          trow1[x1] = b - a;
        } // make border


        x = w + 1 | 0;
        trow0[0] = trow0[1];
        trow0[x] = trow0[w];
        trow1[0] = trow1[1];
        trow1[x] = trow1[w]; // do horizontal convolution, interleave the results and store them

        for (x = 0; x <= w - 4; x += 4) {
          a = trow1[x + 2], b = trow1[x + 1], c = trow1[x + 3], d = trow1[x + 4], e = trow0[x + 2], f = trow0[x + 3];
          gxgy[drow++] = e - trow0[x];
          gxgy[drow++] = (a + trow1[x]) * 3 + b * 10;
          gxgy[drow++] = f - trow0[x + 1];
          gxgy[drow++] = (c + b) * 3 + a * 10;
          gxgy[drow++] = trow0[x + 4] - e;
          gxgy[drow++] = (d + a) * 3 + c * 10;
          gxgy[drow++] = trow0[x + 5] - f;
          gxgy[drow++] = (trow1[x + 5] + c) * 3 + d * 10;
        }

        for (; x < w; ++x) {
          gxgy[drow++] = trow0[x + 2] - trow0[x];
          gxgy[drow++] = (trow1[x + 2] + trow1[x]) * 3 + trow1[x + 1] * 10;
        }
      }

      this.cache.put_buffer(buf0_node);
      this.cache.put_buffer(buf1_node);
    } // compute gradient using Sobel kernel [1 2 1] * [-1 0 1]^T
    // dst: [gx,gy,...]

  }, {
    key: "sobel_derivatives",
    value: function sobel_derivatives(src, dst) {
      var w = src.cols,
          h = src.rows;
      var dstep = w << 1,
          x = 0,
          y = 0,
          x1 = 0,
          a,
          b,
          c,
          d,
          e,
          f;
      var srow0 = 0,
          srow1 = 0,
          srow2 = 0,
          drow = 0;
      var trow0, trow1;
      dst.resize(w, h, 2); // 2 channel output gx, gy

      var img = src.data,
          gxgy = dst.data;
      var buf0_node = this.cache.get_buffer(w + 2 << 2);
      var buf1_node = this.cache.get_buffer(w + 2 << 2);

      if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t) {
        trow0 = buf0_node.i32;
        trow1 = buf1_node.i32;
      } else {
        trow0 = buf0_node.f32;
        trow1 = buf1_node.f32;
      }

      for (; y < h; ++y, srow1 += w) {
        srow0 = (y > 0 ? y - 1 : 1) * w | 0;
        srow2 = (y < h - 1 ? y + 1 : h - 2) * w | 0;
        drow = y * dstep | 0; // do vertical convolution

        for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = a + b + img[srow1 + x] * 2;
          trow1[x1] = b - a; //

          a = img[srow0 + x + 1], b = img[srow2 + x + 1];
          trow0[x1 + 1] = a + b + img[srow1 + x + 1] * 2;
          trow1[x1 + 1] = b - a;
        }

        for (; x < w; ++x, ++x1) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = a + b + img[srow1 + x] * 2;
          trow1[x1] = b - a;
        } // make border


        x = w + 1 | 0;
        trow0[0] = trow0[1];
        trow0[x] = trow0[w];
        trow1[0] = trow1[1];
        trow1[x] = trow1[w]; // do horizontal convolution, interleave the results and store them

        for (x = 0; x <= w - 4; x += 4) {
          a = trow1[x + 2], b = trow1[x + 1], c = trow1[x + 3], d = trow1[x + 4], e = trow0[x + 2], f = trow0[x + 3];
          gxgy[drow++] = e - trow0[x];
          gxgy[drow++] = a + trow1[x] + b * 2;
          gxgy[drow++] = f - trow0[x + 1];
          gxgy[drow++] = c + b + a * 2;
          gxgy[drow++] = trow0[x + 4] - e;
          gxgy[drow++] = d + a + c * 2;
          gxgy[drow++] = trow0[x + 5] - f;
          gxgy[drow++] = trow1[x + 5] + c + d * 2;
        }

        for (; x < w; ++x) {
          gxgy[drow++] = trow0[x + 2] - trow0[x];
          gxgy[drow++] = trow1[x + 2] + trow1[x] + trow1[x + 1] * 2;
        }
      }

      this.cache.put_buffer(buf0_node);
      this.cache.put_buffer(buf1_node);
    } // please note: 
    // dst_(type) size should be cols = src.cols+1, rows = src.rows+1

  }, {
    key: "compute_integral_image",
    value: function compute_integral_image(src, dst_sum, dst_sqsum, dst_tilted) {
      var w0 = src.cols | 0,
          h0 = src.rows | 0,
          src_d = src.data;
      var w1 = w0 + 1 | 0;
      var s = 0,
          s2 = 0,
          p = 0,
          pup = 0,
          i = 0,
          j = 0,
          v = 0,
          k = 0;

      if (dst_sum && dst_sqsum) {
        // fill first row with zeros
        for (; i < w1; ++i) {
          dst_sum[i] = 0, dst_sqsum[i] = 0;
        }

        p = w1 + 1 | 0, pup = 1;

        for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
          s = s2 = 0;

          for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
            v = src_d[k];
            s += v, s2 += v * v;
            dst_sum[p] = dst_sum[pup] + s;
            dst_sqsum[p] = dst_sqsum[pup] + s2;
            v = src_d[k + 1];
            s += v, s2 += v * v;
            dst_sum[p + 1] = dst_sum[pup + 1] + s;
            dst_sqsum[p + 1] = dst_sqsum[pup + 1] + s2;
          }

          for (; j < w0; ++j, ++k, ++p, ++pup) {
            v = src_d[k];
            s += v, s2 += v * v;
            dst_sum[p] = dst_sum[pup] + s;
            dst_sqsum[p] = dst_sqsum[pup] + s2;
          }
        }
      } else if (dst_sum) {
        // fill first row with zeros
        for (; i < w1; ++i) {
          dst_sum[i] = 0;
        }

        p = w1 + 1 | 0, pup = 1;

        for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
          s = 0;

          for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
            s += src_d[k];
            dst_sum[p] = dst_sum[pup] + s;
            s += src_d[k + 1];
            dst_sum[p + 1] = dst_sum[pup + 1] + s;
          }

          for (; j < w0; ++j, ++k, ++p, ++pup) {
            s += src_d[k];
            dst_sum[p] = dst_sum[pup] + s;
          }
        }
      } else if (dst_sqsum) {
        // fill first row with zeros
        for (; i < w1; ++i) {
          dst_sqsum[i] = 0;
        }

        p = w1 + 1 | 0, pup = 1;

        for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
          s2 = 0;

          for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
            v = src_d[k];
            s2 += v * v;
            dst_sqsum[p] = dst_sqsum[pup] + s2;
            v = src_d[k + 1];
            s2 += v * v;
            dst_sqsum[p + 1] = dst_sqsum[pup + 1] + s2;
          }

          for (; j < w0; ++j, ++k, ++p, ++pup) {
            v = src_d[k];
            s2 += v * v;
            dst_sqsum[p] = dst_sqsum[pup] + s2;
          }
        }
      }

      if (dst_tilted) {
        // fill first row with zeros
        for (i = 0; i < w1; ++i) {
          dst_tilted[i] = 0;
        } // diagonal


        p = w1 + 1 | 0, pup = 0;

        for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
          for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
            dst_tilted[p] = src_d[k] + dst_tilted[pup];
            dst_tilted[p + 1] = src_d[k + 1] + dst_tilted[pup + 1];
          }

          for (; j < w0; ++j, ++k, ++p, ++pup) {
            dst_tilted[p] = src_d[k] + dst_tilted[pup];
          }
        } // diagonal


        p = w1 + w0 | 0, pup = w0;

        for (i = 0; i < h0; ++i, p += w1, pup += w1) {
          dst_tilted[p] += dst_tilted[pup];
        }

        for (j = w0 - 1; j > 0; --j) {
          p = j + h0 * w1, pup = p - w1;

          for (i = h0; i > 0; --i, p -= w1, pup -= w1) {
            dst_tilted[p] += dst_tilted[pup] + dst_tilted[pup + 1];
          }
        }
      }
    }
  }, {
    key: "equalize_histogram",
    value: function equalize_histogram(src, dst) {
      var w = src.cols,
          h = src.rows,
          src_d = src.data;
      dst.resize(w, h, src.channel);
      var dst_d = dst.data,
          size = w * h;
      var i = 0,
          prev = 0,
          hist0,
          norm;
      var hist0_node = this.cache.get_buffer(256 << 2);
      hist0 = hist0_node.i32;

      for (; i < 256; ++i) {
        hist0[i] = 0;
      }

      for (i = 0; i < size; ++i) {
        ++hist0[src_d[i]];
      }

      prev = hist0[0];

      for (i = 1; i < 256; ++i) {
        prev = hist0[i] += prev;
      }

      norm = 255 / size;

      for (i = 0; i < size; ++i) {
        dst_d[i] = hist0[src_d[i]] * norm + 0.5 | 0;
      }

      this.cache.put_buffer(hist0_node);
    }
  }, {
    key: "canny",
    value: function canny(src, dst, low_thresh, high_thresh) {
      var w = src.cols,
          h = src.rows,
          src_d = src.data;
      dst.resize(w, h, src.channel);
      var dst_d = dst.data;
      var i = 0,
          j = 0,
          grad = 0,
          w2 = w << 1,
          _grad = 0,
          suppress = 0,
          f = 0,
          x = 0,
          y = 0,
          s = 0;
      var tg22x = 0,
          tg67x = 0; // cache buffers

      var dxdy_node = this.cache.get_buffer(h * w2 << 2);
      var buf_node = this.cache.get_buffer(3 * (w + 2) << 2);
      var map_node = this.cache.get_buffer((h + 2) * (w + 2) << 2);
      var stack_node = this.cache.get_buffer(h * w << 2);
      var buf = buf_node.i32;
      var map = map_node.i32;
      var stack = stack_node.i32;
      var dxdy = dxdy_node.i32;
      var dxdy_m = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](w, h, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
      var row0 = 1,
          row1 = w + 2 + 1 | 0,
          row2 = 2 * (w + 2) + 1 | 0,
          map_w = w + 2 | 0,
          map_i = map_w + 1 | 0,
          stack_i = 0;
      this.sobel_derivatives(src, dxdy_m);

      if (low_thresh > high_thresh) {
        i = low_thresh;
        low_thresh = high_thresh;
        high_thresh = i;
      }

      i = 3 * (w + 2) | 0;

      while (--i >= 0) {
        buf[i] = 0;
      }

      i = (h + 2) * (w + 2) | 0;

      while (--i >= 0) {
        map[i] = 0;
      }

      for (; j < w; ++j, grad += 2) {
        //buf[row1+j] = Math.abs(dxdy[grad]) + Math.abs(dxdy[grad+1]);
        x = dxdy[grad], y = dxdy[grad + 1]; //buf[row1+j] = x*x + y*y;

        buf[row1 + j] = (x ^ x >> 31) - (x >> 31) + ((y ^ y >> 31) - (y >> 31));
      }

      for (i = 1; i <= h; ++i, grad += w2) {
        if (i == h) {
          j = row2 + w;

          while (--j >= row2) {
            buf[j] = 0;
          }
        } else {
          for (j = 0; j < w; j++) {
            //buf[row2+j] =  Math.abs(dxdy[grad+(j<<1)]) + Math.abs(dxdy[grad+(j<<1)+1]);
            x = dxdy[grad + (j << 1)], y = dxdy[grad + (j << 1) + 1]; //buf[row2+j] = x*x + y*y;

            buf[row2 + j] = (x ^ x >> 31) - (x >> 31) + ((y ^ y >> 31) - (y >> 31));
          }
        }

        _grad = grad - w2 | 0;
        map[map_i - 1] = 0;
        suppress = 0;

        for (j = 0; j < w; ++j, _grad += 2) {
          f = buf[row1 + j];

          if (f > low_thresh) {
            x = dxdy[_grad];
            y = dxdy[_grad + 1];
            s = x ^ y; // seems ot be faster than Math.abs

            x = (x ^ x >> 31) - (x >> 31) | 0;
            y = (y ^ y >> 31) - (y >> 31) | 0; //x * tan(22.5) x * tan(67.5) == 2 * x + x * tan(22.5)

            tg22x = x * 13573;
            tg67x = tg22x + (x + x << 15);
            y <<= 15;

            if (y < tg22x) {
              if (f > buf[row1 + j - 1] && f >= buf[row1 + j + 1]) {
                if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                  map[map_i + j] = 2;
                  suppress = 1;
                  stack[stack_i++] = map_i + j;
                } else {
                  map[map_i + j] = 1;
                }

                continue;
              }
            } else if (y > tg67x) {
              if (f > buf[row0 + j] && f >= buf[row2 + j]) {
                if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                  map[map_i + j] = 2;
                  suppress = 1;
                  stack[stack_i++] = map_i + j;
                } else {
                  map[map_i + j] = 1;
                }

                continue;
              }
            } else {
              s = s < 0 ? -1 : 1;

              if (f > buf[row0 + j - s] && f > buf[row2 + j + s]) {
                if (f > high_thresh && !suppress && map[map_i + j - map_w] != 2) {
                  map[map_i + j] = 2;
                  suppress = 1;
                  stack[stack_i++] = map_i + j;
                } else {
                  map[map_i + j] = 1;
                }

                continue;
              }
            }
          }

          map[map_i + j] = 0;
          suppress = 0;
        }

        map[map_i + w] = 0;
        map_i += map_w;
        j = row0;
        row0 = row1;
        row1 = row2;
        row2 = j;
      }

      j = map_i - map_w - 1;

      for (i = 0; i < map_w; ++i, ++j) {
        map[j] = 0;
      } // path following


      while (stack_i > 0) {
        map_i = stack[--stack_i];
        map_i -= map_w + 1;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i += 1;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i += 1;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i += map_w;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i -= 2;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i += map_w;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i += 1;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
        map_i += 1;
        if (map[map_i] == 1) map[map_i] = 2, stack[stack_i++] = map_i;
      }

      map_i = map_w + 1;
      row0 = 0;

      for (i = 0; i < h; ++i, map_i += map_w) {
        for (j = 0; j < w; ++j) {
          dst_d[row0++] = (map[map_i + j] == 2) * 0xff;
        }
      } // free buffers


      this.cache.put_buffer(dxdy_node);
      this.cache.put_buffer(buf_node);
      this.cache.put_buffer(map_node);
      this.cache.put_buffer(stack_node);
    } // transform is 3x3 matrix_t

  }, {
    key: "warp_perspective",
    value: function warp_perspective(src, dst, transform, fill_value) {
      if (typeof fill_value === "undefined") {
        fill_value = 0;
      }

      var src_width = src.cols | 0,
          src_height = src.rows | 0,
          dst_width = dst.cols | 0,
          dst_height = dst.rows | 0;
      var src_d = src.data,
          dst_d = dst.data;
      var x = 0,
          y = 0,
          off = 0,
          ixs = 0,
          iys = 0,
          xs = 0.0,
          ys = 0.0,
          xs0 = 0.0,
          ys0 = 0.0,
          ws = 0.0,
          sc = 0.0,
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
          m12 = td[5],
          m20 = td[6],
          m21 = td[7],
          m22 = td[8];

      for (var dptr = 0; y < dst_height; ++y) {
        xs0 = m01 * y + m02, ys0 = m11 * y + m12, ws = m21 * y + m22;

        for (x = 0; x < dst_width; ++x, ++dptr, xs0 += m00, ys0 += m10, ws += m20) {
          sc = 1.0 / ws;
          xs = xs0 * sc, ys = ys0 * sc;
          ixs = xs | 0, iys = ys | 0;

          if (xs > 0 && ys > 0 && ixs < src_width - 1 && iys < src_height - 1) {
            a = Math.max(xs - ixs, 0.0);
            b = Math.max(ys - iys, 0.0);
            off = src_width * iys + ixs | 0;
            p0 = src_d[off] + a * (src_d[off + 1] - src_d[off]);
            p1 = src_d[off + src_width] + a * (src_d[off + src_width + 1] - src_d[off + src_width]);
            dst_d[dptr] = p0 + b * (p1 - p0);
          } else dst_d[dptr] = fill_value;
        }
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
    } // Basic RGB Skin detection filter
    // from http://popscan.blogspot.fr/2012/08/skin-detection-in-digital-images.html

  }, {
    key: "skindetector",
    value: function skindetector(src, dst) {
      var r, g, b, j;
      var i = src.width * src.height;

      while (i--) {
        j = i * 4;
        r = src.data[j];
        g = src.data[j + 1];
        b = src.data[j + 2];

        if (r > 95 && g > 40 && b > 20 && r > g && r > b && r - Math.min(g, b) > 15 && Math.abs(r - g) > 15) {
          dst[i] = 255;
        } else {
          dst[i] = 0;
        }
      }
    }
  }]);

  return imgproc;
}(jsfeatNext);

jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(math, _jsfeatNext4);

  var _super6 = _createSuper(math);

  function math() {
    var _this4;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, math);

    _this4 = _super6.call(this);
    _this4.qsort_stack = new Int32Array(48 * 2);
    return _this4;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(math, [{
    key: "get_gaussian_kernel",
    value: function get_gaussian_kernel(size, sigma, kernel, data_type) {
      var i = 0,
          x = 0.0,
          t = 0.0,
          sigma_x = 0.0,
          scale_2x = 0.0;
      var sum = 0.0;
      var kern_node = this.cache.get_buffer(size << 2);
      var _kernel = kern_node.f32; //new Float32Array(size);

      if ((size & 1) == 1 && size <= 7 && sigma <= 0) {
        switch (size >> 1) {
          case 0:
            _kernel[0] = 1.0;
            sum = 1.0;
            break;

          case 1:
            _kernel[0] = 0.25, _kernel[1] = 0.5, _kernel[2] = 0.25;
            sum = 0.25 + 0.5 + 0.25;
            break;

          case 2:
            _kernel[0] = 0.0625, _kernel[1] = 0.25, _kernel[2] = 0.375, _kernel[3] = 0.25, _kernel[4] = 0.0625;
            sum = 0.0625 + 0.25 + 0.375 + 0.25 + 0.0625;
            break;

          case 3:
            _kernel[0] = 0.03125, _kernel[1] = 0.109375, _kernel[2] = 0.21875, _kernel[3] = 0.28125, _kernel[4] = 0.21875, _kernel[5] = 0.109375, _kernel[6] = 0.03125;
            sum = 0.03125 + 0.109375 + 0.21875 + 0.28125 + 0.21875 + 0.109375 + 0.03125;
            break;
        }
      } else {
        sigma_x = sigma > 0 ? sigma : ((size - 1) * 0.5 - 1.0) * 0.3 + 0.8;
        scale_2x = -0.5 / (sigma_x * sigma_x);

        for (; i < size; ++i) {
          x = i - (size - 1) * 0.5;
          t = Math.exp(scale_2x * x * x);
          _kernel[i] = t;
          sum += t;
        }
      }

      if (data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t) {
        // int based kernel
        sum = 256.0 / sum;

        for (i = 0; i < size; ++i) {
          kernel[i] = _kernel[i] * sum + 0.5 | 0;
        }
      } else {
        // classic kernel
        sum = 1.0 / sum;

        for (i = 0; i < size; ++i) {
          kernel[i] = _kernel[i] * sum;
        }
      }

      this.cache.put_buffer(kern_node);
    } // model is 3x3 matrix_t

  }, {
    key: "perspective_4point_transform",
    value: function perspective_4point_transform(model, src_x0, src_y0, dst_x0, dst_y0, src_x1, src_y1, dst_x1, dst_y1, src_x2, src_y2, dst_x2, dst_y2, src_x3, src_y3, dst_x3, dst_y3) {
      var t1 = src_x0;
      var t2 = src_x2;
      var t4 = src_y1;
      var t5 = t1 * t2 * t4;
      var t6 = src_y3;
      var t7 = t1 * t6;
      var t8 = t2 * t7;
      var t9 = src_y2;
      var t10 = t1 * t9;
      var t11 = src_x1;
      var t14 = src_y0;
      var t15 = src_x3;
      var t16 = t14 * t15;
      var t18 = t16 * t11;
      var t20 = t15 * t11 * t9;
      var t21 = t15 * t4;
      var t24 = t15 * t9;
      var t25 = t2 * t4;
      var t26 = t6 * t2;
      var t27 = t6 * t11;
      var t28 = t9 * t11;
      var t30 = 1.0 / (t21 - t24 - t25 + t26 - t27 + t28);
      var t32 = t1 * t15;
      var t35 = t14 * t11;
      var t41 = t4 * t1;
      var t42 = t6 * t41;
      var t43 = t14 * t2;
      var t46 = t16 * t9;
      var t48 = t14 * t9 * t11;
      var t51 = t4 * t6 * t2;
      var t55 = t6 * t14;
      var Hr0 = -(t8 - t5 + t10 * t11 - t11 * t7 - t16 * t2 + t18 - t20 + t21 * t2) * t30;
      var Hr1 = (t5 - t8 - t32 * t4 + t32 * t9 + t18 - t2 * t35 + t27 * t2 - t20) * t30;
      var Hr2 = t1;
      var Hr3 = (-t9 * t7 + t42 + t43 * t4 - t16 * t4 + t46 - t48 + t27 * t9 - t51) * t30;
      var Hr4 = (-t42 + t41 * t9 - t55 * t2 + t46 - t48 + t55 * t11 + t51 - t21 * t9) * t30;
      var Hr5 = t14;
      var Hr6 = (-t10 + t41 + t43 - t35 + t24 - t21 - t26 + t27) * t30;
      var Hr7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30;
      t1 = dst_x0;
      t2 = dst_x2;
      t4 = dst_y1;
      t5 = t1 * t2 * t4;
      t6 = dst_y3;
      t7 = t1 * t6;
      t8 = t2 * t7;
      t9 = dst_y2;
      t10 = t1 * t9;
      t11 = dst_x1;
      t14 = dst_y0;
      t15 = dst_x3;
      t16 = t14 * t15;
      t18 = t16 * t11;
      t20 = t15 * t11 * t9;
      t21 = t15 * t4;
      t24 = t15 * t9;
      t25 = t2 * t4;
      t26 = t6 * t2;
      t27 = t6 * t11;
      t28 = t9 * t11;
      t30 = 1.0 / (t21 - t24 - t25 + t26 - t27 + t28);
      t32 = t1 * t15;
      t35 = t14 * t11;
      t41 = t4 * t1;
      t42 = t6 * t41;
      t43 = t14 * t2;
      t46 = t16 * t9;
      t48 = t14 * t9 * t11;
      t51 = t4 * t6 * t2;
      t55 = t6 * t14;
      var Hl0 = -(t8 - t5 + t10 * t11 - t11 * t7 - t16 * t2 + t18 - t20 + t21 * t2) * t30;
      var Hl1 = (t5 - t8 - t32 * t4 + t32 * t9 + t18 - t2 * t35 + t27 * t2 - t20) * t30;
      var Hl2 = t1;
      var Hl3 = (-t9 * t7 + t42 + t43 * t4 - t16 * t4 + t46 - t48 + t27 * t9 - t51) * t30;
      var Hl4 = (-t42 + t41 * t9 - t55 * t2 + t46 - t48 + t55 * t11 + t51 - t21 * t9) * t30;
      var Hl5 = t14;
      var Hl6 = (-t10 + t41 + t43 - t35 + t24 - t21 - t26 + t27) * t30;
      var Hl7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30; // the following code computes R = Hl * inverse Hr

      t2 = Hr4 - Hr7 * Hr5;
      t4 = Hr0 * Hr4;
      t5 = Hr0 * Hr5;
      t7 = Hr3 * Hr1;
      t8 = Hr2 * Hr3;
      t10 = Hr1 * Hr6;
      var t12 = Hr2 * Hr6;
      t15 = 1.0 / (t4 - t5 * Hr7 - t7 + t8 * Hr7 + t10 * Hr5 - t12 * Hr4);
      t18 = -Hr3 + Hr5 * Hr6;
      var t23 = -Hr3 * Hr7 + Hr4 * Hr6;
      t28 = -Hr1 + Hr2 * Hr7;
      var t31 = Hr0 - t12;
      t35 = Hr0 * Hr7 - t10;
      t41 = -Hr1 * Hr5 + Hr2 * Hr4;
      var t44 = t5 - t8;
      var t47 = t4 - t7;
      t48 = t2 * t15;
      var t49 = t28 * t15;
      var t50 = t41 * t15;
      var mat = model.data;
      mat[0] = Hl0 * t48 + Hl1 * (t18 * t15) - Hl2 * (t23 * t15);
      mat[1] = Hl0 * t49 + Hl1 * (t31 * t15) - Hl2 * (t35 * t15);
      mat[2] = -Hl0 * t50 - Hl1 * (t44 * t15) + Hl2 * (t47 * t15);
      mat[3] = Hl3 * t48 + Hl4 * (t18 * t15) - Hl5 * (t23 * t15);
      mat[4] = Hl3 * t49 + Hl4 * (t31 * t15) - Hl5 * (t35 * t15);
      mat[5] = -Hl3 * t50 - Hl4 * (t44 * t15) + Hl5 * (t47 * t15);
      mat[6] = Hl6 * t48 + Hl7 * (t18 * t15) - t23 * t15;
      mat[7] = Hl6 * t49 + Hl7 * (t31 * t15) - t35 * t15;
      mat[8] = -Hl6 * t50 - Hl7 * (t44 * t15) + t47 * t15;
    } // The current implementation was derived from *BSD system qsort():
    // Copyright (c) 1992, 1993
    // The Regents of the University of California.  All rights reserved.

  }, {
    key: "qsort",
    value: function qsort(array, low, high, cmp) {
      var isort_thresh = 7;
      var t, ta, tb, tc;
      var sp = 0,
          left = 0,
          right = 0,
          i = 0,
          n = 0,
          m = 0,
          ptr = 0,
          ptr2 = 0,
          d = 0;
      var left0 = 0,
          left1 = 0,
          right0 = 0,
          right1 = 0,
          pivot = 0,
          a = 0,
          b = 0,
          c = 0,
          swap_cnt = 0;
      var stack = this.qsort_stack;
      if (high - low + 1 <= 1) return;
      stack[0] = low;
      stack[1] = high;

      while (sp >= 0) {
        left = stack[sp << 1];
        right = stack[(sp << 1) + 1];
        sp--;

        for (;;) {
          n = right - left + 1;

          if (n <= isort_thresh) {
            //insert_sort:
            for (ptr = left + 1; ptr <= right; ptr++) {
              for (ptr2 = ptr; ptr2 > left && cmp(array[ptr2], array[ptr2 - 1]); ptr2--) {
                t = array[ptr2];
                array[ptr2] = array[ptr2 - 1];
                array[ptr2 - 1] = t;
              }
            }

            break;
          } else {
            swap_cnt = 0;
            left0 = left;
            right0 = right;
            pivot = left + (n >> 1);

            if (n > 40) {
              d = n >> 3;
              a = left, b = left + d, c = left + (d << 1);
              ta = array[a], tb = array[b], tc = array[c];
              left = cmp(ta, tb) ? cmp(tb, tc) ? b : cmp(ta, tc) ? c : a : cmp(tc, tb) ? b : cmp(ta, tc) ? a : c;
              a = pivot - d, b = pivot, c = pivot + d;
              ta = array[a], tb = array[b], tc = array[c];
              pivot = cmp(ta, tb) ? cmp(tb, tc) ? b : cmp(ta, tc) ? c : a : cmp(tc, tb) ? b : cmp(ta, tc) ? a : c;
              a = right - (d << 1), b = right - d, c = right;
              ta = array[a], tb = array[b], tc = array[c];
              right = cmp(ta, tb) ? cmp(tb, tc) ? b : cmp(ta, tc) ? c : a : cmp(tc, tb) ? b : cmp(ta, tc) ? a : c;
            }

            a = left, b = pivot, c = right;
            ta = array[a], tb = array[b], tc = array[c];
            pivot = cmp(ta, tb) ? cmp(tb, tc) ? b : cmp(ta, tc) ? c : a : cmp(tc, tb) ? b : cmp(ta, tc) ? a : c;

            if (pivot != left0) {
              t = array[pivot];
              array[pivot] = array[left0];
              array[left0] = t;
              pivot = left0;
            }

            left = left1 = left0 + 1;
            right = right1 = right0;
            ta = array[pivot];

            for (;;) {
              while (left <= right && !cmp(ta, array[left])) {
                if (!cmp(array[left], ta)) {
                  if (left > left1) {
                    t = array[left1];
                    array[left1] = array[left];
                    array[left] = t;
                  }

                  swap_cnt = 1;
                  left1++;
                }

                left++;
              }

              while (left <= right && !cmp(array[right], ta)) {
                if (!cmp(ta, array[right])) {
                  if (right < right1) {
                    t = array[right1];
                    array[right1] = array[right];
                    array[right] = t;
                  }

                  swap_cnt = 1;
                  right1--;
                }

                right--;
              }

              if (left > right) break;
              t = array[left];
              array[left] = array[right];
              array[right] = t;
              swap_cnt = 1;
              left++;
              right--;
            }

            if (swap_cnt == 0) {
              left = left0, right = right0; //goto insert_sort;

              for (ptr = left + 1; ptr <= right; ptr++) {
                for (ptr2 = ptr; ptr2 > left && cmp(array[ptr2], array[ptr2 - 1]); ptr2--) {
                  t = array[ptr2];
                  array[ptr2] = array[ptr2 - 1];
                  array[ptr2 - 1] = t;
                }
              }

              break;
            }

            n = Math.min(left1 - left0, left - left1);
            m = left - n | 0;

            for (i = 0; i < n; ++i, ++m) {
              t = array[left0 + i];
              array[left0 + i] = array[m];
              array[m] = t;
            }

            n = Math.min(right0 - right1, right1 - right);
            m = right0 - n + 1 | 0;

            for (i = 0; i < n; ++i, ++m) {
              t = array[left + i];
              array[left + i] = array[m];
              array[m] = t;
            }

            n = left - left1;
            m = right1 - right;

            if (n > 1) {
              if (m > 1) {
                if (n > m) {
                  ++sp;
                  stack[sp << 1] = left0;
                  stack[(sp << 1) + 1] = left0 + n - 1;
                  left = right0 - m + 1, right = right0;
                } else {
                  ++sp;
                  stack[sp << 1] = right0 - m + 1;
                  stack[(sp << 1) + 1] = right0;
                  left = left0, right = left0 + n - 1;
                }
              } else {
                left = left0, right = left0 + n - 1;
              }
            } else if (m > 1) left = right0 - m + 1, right = right0;else break;
          }
        }
      }
    }
  }, {
    key: "median",
    value: function median(array, low, high) {
      var w;
      var middle = 0,
          ll = 0,
          hh = 0,
          median = low + high >> 1;

      for (;;) {
        if (high <= low) return array[median];

        if (high == low + 1) {
          if (array[low] > array[high]) {
            w = array[low];
            array[low] = array[high];
            array[high] = w;
          }

          return array[median];
        }

        middle = low + high >> 1;

        if (array[middle] > array[high]) {
          w = array[middle];
          array[middle] = array[high];
          array[high] = w;
        }

        if (array[low] > array[high]) {
          w = array[low];
          array[low] = array[high];
          array[high] = w;
        }

        if (array[middle] > array[low]) {
          w = array[middle];
          array[middle] = array[low];
          array[low] = w;
        }

        ll = low + 1;
        w = array[middle];
        array[middle] = array[ll];
        array[ll] = w;
        hh = high;

        for (;;) {
          do {
            ++ll;
          } while (array[low] > array[ll]);

          do {
            --hh;
          } while (array[hh] > array[low]);

          if (hh < ll) break;
          w = array[ll];
          array[ll] = array[hh];
          array[hh] = w;
        }

        w = array[low];
        array[low] = array[hh];
        array[hh] = w;
        if (hh <= median) low = ll;else if (hh >= median) high = hh - 1;
      }

      return 0;
    }
  }]);

  return math;
}(jsfeatNext);

jsfeatNext.matmath = _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_13__["default"];

jsfeatNext.linalg = /*#__PURE__*/function (_jsfeatNext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(linalg, _jsfeatNext5);

  var _super7 = _createSuper(linalg);

  function linalg() {
    var _this5;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, linalg);

    _this5 = _super7.call(this);
    _this5.matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
    return _this5;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON;
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
        t = Math.abs(y) + (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.hypot)(p, y);
        s = (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.hypot)(p, t);
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
          (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(W, m, k, mv);

          if (V) {
            for (i = 0; i < n; i++) {
              (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(V, vstep * m + i, vstep * k + i, mv);
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
      var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.FLT_MIN;
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
            beta = a - b, gamma = (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.hypot)(p, beta);

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
          (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(W, i, j, sd);

          if (Vt) {
            for (k = 0; k < m; k++) {
              (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(At, i * astep + k, j * astep + k, t);
            }

            for (k = 0; k < n; k++) {
              (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(Vt, i * vstep + k, j * vstep + k, t);
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON) {
          return 0; // FAILED
        }

        if (k != i) {
          for (j = i; j < astep; j++) {
            (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(ad, i * astep + j, k * astep + j, t);
          }

          (0,_linalg_linalg_base_js__WEBPACK_IMPORTED_MODULE_15__.swap)(bd, i, k, t);
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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t; // we only work with single channel 

      if (m < n) {
        at = 1;
        i = m;
        m = n;
        n = i;
      }

      var a_buff = this.cache.get_buffer(m * m << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var v_buff = this.cache.get_buffer(n * n << 3);
      var a_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](m, m, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](1, n, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](n, n, dt, v_buff.data);

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
        if (U && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](ncols, ncols, dt, v_buff.data);
      var bd = B.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t; //var u_buff = cache1.get_buffer((nrows * nrows) << 3);

      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](ncols, ncols, dt, v_buff.data);
      var id = Ai.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var a_buff = this.cache.get_buffer(n * n << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var a_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](n, n, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](1, n, dt, w_buff.data);

      while (--i >= 0) {
        a_mt.data[i] = A.data[i];
      }

      this.JacobiImpl(a_mt.data, n, w_mt.data, vects ? vects.data : null, n, n);

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
}(jsfeatNext);

jsfeatNext.orb = /*#__PURE__*/function (_jsfeatNext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(orb, _jsfeatNext6);

  var _super8 = _createSuper(orb);

  function orb() {
    var _this6;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, orb);

    _this6 = _super8.call(this);
    _this6.bit_pattern_31_ = new Int32Array(_orb_bit_pattern_31_js__WEBPACK_IMPORTED_MODULE_16__.bit_pattern_31);
    _this6.H = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this6.patch_img = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](32, 32, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this6.imgproc = new jsfeatNext.imgproc();
    return _this6;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(orb, [{
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

      if (!(descriptors.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t)) {
        // relocate to U8 type
        descriptors.type = _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t;
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
        (0,_orb_rectify_patch_js__WEBPACK_IMPORTED_MODULE_17__.rectify_patch)(src, this.patch_img, angle, px, py, 32, this.H, this.imgproc); // describe the patch

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
}(jsfeatNext);

jsfeatNext.yape = _yape_yape_js__WEBPACK_IMPORTED_MODULE_18__["default"];
jsfeatNext.yape06 = _yape06_yape06_js__WEBPACK_IMPORTED_MODULE_19__["default"];

jsfeatNext.motion_estimator = /*#__PURE__*/function (_jsfeatNext7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(motion_estimator, _jsfeatNext7);

  var _super9 = _createSuper(motion_estimator);

  function motion_estimator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, motion_estimator);

    return _super9.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(motion_estimator, [{
    key: "get_subset",
    value: function get_subset(kernel, from, to, need_cnt, max_cnt, from_sub, to_sub) {
      var max_try = 1000;
      var indices = [];
      var i = 0,
          j = 0,
          ssiter = 0,
          idx_i = 0,
          ok = false;

      for (; ssiter < max_try; ++ssiter) {
        i = 0;

        for (; i < need_cnt && ssiter < max_try;) {
          ok = false;
          idx_i = 0;

          while (!ok) {
            ok = true;
            idx_i = indices[i] = Math.floor(Math.random() * max_cnt) | 0;

            for (j = 0; j < i; ++j) {
              if (idx_i == indices[j]) {
                ok = false;
                break;
              }
            }
          }

          from_sub[i] = from[idx_i];
          to_sub[i] = to[idx_i];

          if (!kernel.check_subset(from_sub, to_sub, i + 1)) {
            ssiter++;
            continue;
          }

          ++i;
        }

        break;
      }

      return i == need_cnt && ssiter < max_try;
    }
  }, {
    key: "find_inliers",
    value: function find_inliers(kernel, model, from, to, count, thresh, err, mask) {
      var numinliers = 0,
          i = 0,
          f = 0;
      var t = thresh * thresh;
      kernel.error(from, to, model, err, count);

      for (; i < count; ++i) {
        f = err[i] <= t;
        mask[i] = f;
        numinliers += f;
      }

      return numinliers;
    }
  }, {
    key: "ransac",
    value: function ransac(params, kernel, from, to, count, model, mask, max_iters) {
      if (typeof max_iters === "undefined") {
        max_iters = 1000;
      }

      if (count < params.size) return false;
      var model_points = params.size;
      var niters = max_iters,
          iter = 0;
      var result = false;
      var subset0 = [];
      var subset1 = [];
      var found = false;
      var mc = model.cols,
          mr = model.rows;
      var dt = model.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](count, 1, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
      var inliers_max = -1,
          numinliers = 0;
      var nmodels = 0;
      var err = err_buff.f32; // special case

      if (count == model_points) {
        if (kernel.run(from, to, M, count) <= 0) {
          this.cache.put_buffer(m_buff);
          this.cache.put_buffer(ms_buff);
          this.cache.put_buffer(err_buff);
          return false;
        }

        M.copy_to(model);

        if (mask) {
          while (--count >= 0) {
            mask.data[count] = 1;
          }
        }

        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);
        return true;
      }

      for (; iter < niters; ++iter) {
        // generate subset
        found = this.get_subset(kernel, from, to, model_points, count, subset0, subset1);

        if (!found) {
          if (iter == 0) {
            this.cache.put_buffer(m_buff);
            this.cache.put_buffer(ms_buff);
            this.cache.put_buffer(err_buff);
            return false;
          }

          break;
        }

        nmodels = kernel.run(subset0, subset1, M, model_points);
        if (nmodels <= 0) continue; // TODO handle multimodel output

        numinliers = this.find_inliers(kernel, M, from, to, count, params.thresh, err, curr_mask.data);

        if (numinliers > Math.max(inliers_max, model_points - 1)) {
          M.copy_to(model);
          inliers_max = numinliers;
          if (mask) curr_mask.copy_to(mask);
          niters = params.update_iters((count - numinliers) / count, niters);
          result = true;
        }
      }

      this.cache.put_buffer(m_buff);
      this.cache.put_buffer(ms_buff);
      this.cache.put_buffer(err_buff);
      return result;
    }
  }, {
    key: "lmeds",
    value: function lmeds(params, kernel, from, to, count, model, mask, max_iters) {
      if (typeof max_iters === "undefined") {
        max_iters = 1000;
      }

      if (count < params.size) return false;
      var model_points = params.size;
      var niters = max_iters,
          iter = 0;
      var result = false;

      var _math = new jsfeatNext.math();

      var subset0 = [];
      var subset1 = [];
      var found = false;
      var mc = model.cols,
          mr = model.rows;
      var dt = model.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](count, 1, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t, ms_buff.data);
      var numinliers = 0;
      var nmodels = 0;
      var err = err_buff.f32;
      var min_median = 1000000000.0,
          sigma = 0.0,
          median = 0.0;
      params.eps = 0.45;
      niters = params.update_iters(params.eps, niters); // special case

      if (count == model_points) {
        if (kernel.run(from, to, M, count) <= 0) {
          this.cache.put_buffer(m_buff);
          this.cache.put_buffer(ms_buff);
          this.cache.put_buffer(err_buff);
          return false;
        }

        M.copy_to(model);

        if (mask) {
          while (--count >= 0) {
            mask.data[count] = 1;
          }
        }

        this.cache.put_buffer(m_buff);
        this.cache.put_buffer(ms_buff);
        this.cache.put_buffer(err_buff);
        return true;
      }

      for (; iter < niters; ++iter) {
        // generate subset
        found = this.get_subset(kernel, from, to, model_points, count, subset0, subset1);

        if (!found) {
          if (iter == 0) {
            this.cache.put_buffer(m_buff);
            this.cache.put_buffer(ms_buff);
            this.cache.put_buffer(err_buff);
            return false;
          }

          break;
        }

        nmodels = kernel.run(subset0, subset1, M, model_points);
        if (nmodels <= 0) continue; // TODO handle multimodel output

        kernel.error(from, to, M, err, count);
        median = _math.median(err, 0, count - 1);

        if (median < min_median) {
          min_median = median;
          M.copy_to(model);
          result = true;
        }
      }

      if (result) {
        sigma = 2.5 * 1.4826 * (1 + 5.0 / (count - model_points)) * Math.sqrt(min_median);
        sigma = Math.max(sigma, 0.001);
        numinliers = this.find_inliers(kernel, model, from, to, count, sigma, err, curr_mask.data);
        if (mask) curr_mask.copy_to(mask);
        result = numinliers >= model_points;
      }

      this.cache.put_buffer(m_buff);
      this.cache.put_buffer(ms_buff);
      this.cache.put_buffer(err_buff);
      return result;
    }
  }]);

  return motion_estimator;
}(jsfeatNext);

jsfeatNext.ransac_params_t = _motion_estimator_ransac_params_t_js__WEBPACK_IMPORTED_MODULE_20__["default"];
jsfeatNext.affine2d = affine2d;
jsfeatNext.homography2d = homography2d;

jsfeatNext.optical_flow_lk = /*#__PURE__*/function (_jsfeatNext8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(optical_flow_lk, _jsfeatNext8);

  var _super10 = _createSuper(optical_flow_lk);

  function optical_flow_lk() {
    var _this7;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, optical_flow_lk);

    _this7 = _super10.call(this);

    var _imgproc = new jsfeatNext.imgproc();

    _this7.scharr_deriv = _imgproc.scharr_derivatives;
    return _this7;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(optical_flow_lk, [{
    key: "track",
    value: function track(prev_pyr, curr_pyr, prev_xy, curr_xy, count, win_size, max_iter, status, eps, min_eigen_threshold) {
      if (typeof max_iter === "undefined") {
        max_iter = 30;
      }

      if (typeof status === "undefined") {
        status = new Uint8Array(count);
      }

      if (typeof eps === "undefined") {
        eps = 0.01;
      }

      if (typeof min_eigen_threshold === "undefined") {
        min_eigen_threshold = 0.0001;
      }

      var half_win = (win_size - 1) * 0.5;
      var win_area = win_size * win_size | 0;
      var win_area2 = win_area << 1;
      var prev_imgs = prev_pyr.data,
          next_imgs = curr_pyr.data;
      var img_prev = prev_imgs[0].data,
          img_next = next_imgs[0].data;
      var w0 = prev_imgs[0].cols,
          h0 = prev_imgs[0].rows,
          lw = 0,
          lh = 0;
      var iwin_node = this.cache.get_buffer(win_area << 2);
      var deriv_iwin_node = this.cache.get_buffer(win_area2 << 2);
      var deriv_lev_node = this.cache.get_buffer(h0 * (w0 << 1) << 2);
      var deriv_m = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_14__["default"](w0, h0, _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
      var iwin_buf = iwin_node.i32;
      var deriv_iwin = deriv_iwin_node.i32;
      var deriv_lev = deriv_lev_node.i32;
      var dstep = 0,
          src = 0,
          dsrc = 0,
          iptr = 0,
          diptr = 0,
          jptr = 0;
      var lev_sc = 0.0,
          prev_x = 0.0,
          prev_y = 0.0,
          next_x = 0.0,
          next_y = 0.0;
      var prev_delta_x = 0.0,
          prev_delta_y = 0.0,
          delta_x = 0.0,
          delta_y = 0.0;
      var iprev_x = 0,
          iprev_y = 0,
          inext_x = 0,
          inext_y = 0;
      var i = 0,
          j = 0,
          x = 0,
          y = 0,
          level = 0,
          ptid = 0,
          iter = 0;
      var brd_tl = 0,
          brd_r = 0,
          brd_b = 0;
      var a = 0.0,
          b = 0.0,
          b1 = 0.0,
          b2 = 0.0; // fixed point math

      var W_BITS14 = 14;
      var W_BITS4 = 14;
      var W_BITS1m5 = W_BITS4 - 5;
      var W_BITS1m51 = 1 << W_BITS1m5 - 1;
      var W_BITS14_ = 1 << W_BITS14;
      var W_BITS41 = 1 << W_BITS4 - 1;
      var FLT_SCALE = 1.0 / (1 << 20);
      var iw00 = 0,
          iw01 = 0,
          iw10 = 0,
          iw11 = 0,
          ival = 0,
          ixval = 0,
          iyval = 0;
      var A11 = 0.0,
          A12 = 0.0,
          A22 = 0.0,
          D = 0.0,
          min_eig = 0.0;
      var FLT_EPSILON = 0.00000011920929;
      eps *= eps; // reset status

      for (; i < count; ++i) {
        status[i] = 1;
      }

      var max_level = prev_pyr.levels - 1 | 0;
      level = max_level;

      for (; level >= 0; --level) {
        lev_sc = 1.0 / (1 << level);
        lw = w0 >> level;
        lh = h0 >> level;
        dstep = lw << 1;
        img_prev = prev_imgs[level].data;
        img_next = next_imgs[level].data;
        brd_r = lw - win_size | 0;
        brd_b = lh - win_size | 0; // calculate level derivatives

        this.scharr_deriv(prev_imgs[level], deriv_m); // iterate through points

        for (ptid = 0; ptid < count; ++ptid) {
          i = ptid << 1;
          j = i + 1;
          prev_x = prev_xy[i] * lev_sc;
          prev_y = prev_xy[j] * lev_sc;

          if (level == max_level) {
            next_x = prev_x;
            next_y = prev_y;
          } else {
            next_x = curr_xy[i] * 2.0;
            next_y = curr_xy[j] * 2.0;
          }

          curr_xy[i] = next_x;
          curr_xy[j] = next_y;
          prev_x -= half_win;
          prev_y -= half_win;
          iprev_x = prev_x | 0;
          iprev_y = prev_y | 0; // border check

          x = iprev_x <= brd_tl | iprev_x >= brd_r | iprev_y <= brd_tl | iprev_y >= brd_b;

          if (x != 0) {
            if (level == 0) {
              status[ptid] = 0;
            }

            continue;
          }

          a = prev_x - iprev_x;
          b = prev_y - iprev_y;
          iw00 = (1.0 - a) * (1.0 - b) * W_BITS14_ + 0.5 | 0;
          iw01 = a * (1.0 - b) * W_BITS14_ + 0.5 | 0;
          iw10 = (1.0 - a) * b * W_BITS14_ + 0.5 | 0;
          iw11 = W_BITS14_ - iw00 - iw01 - iw10;
          A11 = 0.0, A12 = 0.0, A22 = 0.0; // extract the patch from the first image, compute covariation matrix of derivatives

          for (y = 0; y < win_size; ++y) {
            src = (y + iprev_y) * lw + iprev_x | 0;
            dsrc = src << 1;
            iptr = y * win_size | 0;
            diptr = iptr << 1;

            for (x = 0; x < win_size; ++x, ++src, ++iptr, dsrc += 2) {
              ival = img_prev[src] * iw00 + img_prev[src + 1] * iw01 + img_prev[src + lw] * iw10 + img_prev[src + lw + 1] * iw11;
              ival = ival + W_BITS1m51 >> W_BITS1m5;
              ixval = deriv_lev[dsrc] * iw00 + deriv_lev[dsrc + 2] * iw01 + deriv_lev[dsrc + dstep] * iw10 + deriv_lev[dsrc + dstep + 2] * iw11;
              ixval = ixval + W_BITS41 >> W_BITS4;
              iyval = deriv_lev[dsrc + 1] * iw00 + deriv_lev[dsrc + 3] * iw01 + deriv_lev[dsrc + dstep + 1] * iw10 + deriv_lev[dsrc + dstep + 3] * iw11;
              iyval = iyval + W_BITS41 >> W_BITS4;
              iwin_buf[iptr] = ival;
              deriv_iwin[diptr++] = ixval;
              deriv_iwin[diptr++] = iyval;
              A11 += ixval * ixval;
              A12 += ixval * iyval;
              A22 += iyval * iyval;
            }
          }

          A11 *= FLT_SCALE;
          A12 *= FLT_SCALE;
          A22 *= FLT_SCALE;
          D = A11 * A22 - A12 * A12;
          min_eig = (A22 + A11 - Math.sqrt((A11 - A22) * (A11 - A22) + 4.0 * A12 * A12)) / win_area2;

          if (min_eig < min_eigen_threshold || D < FLT_EPSILON) {
            if (level == 0) {
              status[ptid] = 0;
            }

            continue;
          }

          D = 1.0 / D;
          next_x -= half_win;
          next_y -= half_win;
          prev_delta_x = 0.0;
          prev_delta_y = 0.0;

          for (iter = 0; iter < max_iter; ++iter) {
            inext_x = next_x | 0;
            inext_y = next_y | 0;
            x = inext_x <= brd_tl | inext_x >= brd_r | inext_y <= brd_tl | inext_y >= brd_b;

            if (x != 0) {
              if (level == 0) {
                status[ptid] = 0;
              }

              break;
            }

            a = next_x - inext_x;
            b = next_y - inext_y;
            iw00 = (1.0 - a) * (1.0 - b) * W_BITS14_ + 0.5 | 0;
            iw01 = a * (1.0 - b) * W_BITS14_ + 0.5 | 0;
            iw10 = (1.0 - a) * b * W_BITS14_ + 0.5 | 0;
            iw11 = W_BITS14_ - iw00 - iw01 - iw10;
            b1 = 0.0, b2 = 0.0;

            for (y = 0; y < win_size; ++y) {
              jptr = (y + inext_y) * lw + inext_x | 0;
              iptr = y * win_size | 0;
              diptr = iptr << 1;

              for (x = 0; x < win_size; ++x, ++jptr, ++iptr) {
                ival = img_next[jptr] * iw00 + img_next[jptr + 1] * iw01 + img_next[jptr + lw] * iw10 + img_next[jptr + lw + 1] * iw11;
                ival = ival + W_BITS1m51 >> W_BITS1m5;
                ival = ival - iwin_buf[iptr];
                b1 += ival * deriv_iwin[diptr++];
                b2 += ival * deriv_iwin[diptr++];
              }
            }

            b1 *= FLT_SCALE;
            b2 *= FLT_SCALE;
            delta_x = (A12 * b2 - A22 * b1) * D;
            delta_y = (A12 * b1 - A11 * b2) * D;
            next_x += delta_x;
            next_y += delta_y;
            curr_xy[i] = next_x + half_win;
            curr_xy[j] = next_y + half_win;

            if (delta_x * delta_x + delta_y * delta_y <= eps) {
              break;
            }

            if (iter > 0 && Math.abs(delta_x + prev_delta_x) < 0.01 && Math.abs(delta_y + prev_delta_y) < 0.01) {
              curr_xy[i] -= delta_x * 0.5;
              curr_xy[j] -= delta_y * 0.5;
              break;
            }

            prev_delta_x = delta_x;
            prev_delta_y = delta_y;
          }
        } // points loop

      } // levels loop


      this.cache.put_buffer(iwin_node);
      this.cache.put_buffer(deriv_iwin_node);
      this.cache.put_buffer(deriv_lev_node);
    }
  }]);

  return optical_flow_lk;
}(jsfeatNext);

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

/***/ "./src/motion_estimator/ransac_params_t.js":
/*!*************************************************!*\
  !*** ./src/motion_estimator/ransac_params_t.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ransac_params_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var ransac_params_t = /*#__PURE__*/function () {
  function ransac_params_t(size, thresh, eps, prob) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ransac_params_t);

    if (typeof size === "undefined") {
      size = 0;
    }

    if (typeof thresh === "undefined") {
      thresh = 0.5;
    }

    if (typeof eps === "undefined") {
      eps = 0.5;
    }

    if (typeof prob === "undefined") {
      prob = 0.99;
    }

    this.size = size;
    this.thresh = thresh;
    this.eps = eps;
    this.prob = prob;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ransac_params_t, [{
    key: "update_iters",
    value: function update_iters(_eps, max_iters) {
      var num = Math.log(1 - this.prob);
      var denom = Math.log(1 - Math.pow(1 - _eps, this.size));
      return (denom >= 0 || -num >= max_iters * -denom ? max_iters : Math.round(num / denom)) | 0;
    }
  }]);

  return ransac_params_t;
}();


;

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
    value: function resize(size_in_bytes) {
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

/***/ "./src/orb/rectify_patch.js":
/*!**********************************!*\
  !*** ./src/orb/rectify_patch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rectify_patch": () => (/* binding */ rectify_patch)
/* harmony export */ });
function rectify_patch(src, dst, angle, px, py, psize, H, imgproc) {
  var cosine = Math.cos(angle);
  var sine = Math.sin(angle);
  H.data[0] = cosine, H.data[1] = -sine, H.data[2] = (-cosine + sine) * psize * 0.5 + px, H.data[3] = sine, H.data[4] = cosine, H.data[5] = (-sine - cosine) * psize * 0.5 + py;
  imgproc.warp_affine(src, dst, H, 128);
}

/***/ }),

/***/ "./src/yape/yape.js":
/*!**************************!*\
  !*** ./src/yape/yape.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ yape)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _yape_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yape_utils.js */ "./src/yape/yape_utils.js");




var yape = /*#__PURE__*/function () {
  function yape() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, yape);

    this.level_tables = [];
    this.tau = 7;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(yape, [{
    key: "init",
    value: function init(width, height, radius, pyramid_levels) {
      if (typeof pyramid_levels === "undefined") {
        pyramid_levels = 1;
      }

      var i;
      radius = Math.min(radius, 7);
      radius = Math.max(radius, 3);

      for (i = 0; i < pyramid_levels; ++i) {
        this.level_tables[i] = new _yape_utils_js__WEBPACK_IMPORTED_MODULE_2__.lev_table_t(width >> i, height >> i, radius);
      }
    }
  }, {
    key: "detect",
    value: function detect(src, points, border) {
      if (typeof border === "undefined") {
        border = 4;
      }

      var t = this.level_tables[0];
      var R = t.radius | 0,
          Rm1 = R - 1 | 0;
      var dirs = t.dirs;
      var dirs_count = t.dirs_count | 0;
      var opposite = dirs_count >> 1;
      var img = src.data,
          w = src.cols | 0,
          h = src.rows | 0,
          hw = w >> 1;
      var scores = t.scores;
      var x = 0,
          y = 0,
          row = 0,
          rowx = 0,
          ip = 0,
          im = 0,
          abs_score = 0,
          score = 0;
      var tau = this.tau | 0;
      var number_of_points = 0,
          pt;
      var sx = Math.max(R + 1, border) | 0;
      var sy = Math.max(R + 1, border) | 0;
      var ex = Math.min(w - R - 2, w - border) | 0;
      var ey = Math.min(h - R - 2, h - border) | 0;
      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          ip = img[rowx] + tau, im = img[rowx] - tau;

          if (im < img[rowx + R] && img[rowx + R] < ip && im < img[rowx - R] && img[rowx - R] < ip) {
            scores[rowx] = 0;
          } else {
            (0,_yape_utils_js__WEBPACK_IMPORTED_MODULE_2__.perform_one_point)(img, rowx, scores, im, ip, dirs, opposite, dirs_count);
          }
        }
      } // local maxima


      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          score = scores[rowx];
          abs_score = Math.abs(score);

          if (abs_score < 5) {
            // if this pixel is 0, the next one will not be good enough. Skip it.
            ++x, ++rowx;
          } else {
            if ((0,_yape_utils_js__WEBPACK_IMPORTED_MODULE_2__.third_check)(scores, rowx, w) >= 3 && (0,_yape_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_local_maxima)(scores, rowx, score, hw, R)) {
              pt = points[number_of_points];
              pt.x = x, pt.y = y, pt.score = abs_score;
              ++number_of_points;
              x += Rm1, rowx += Rm1;
            }
          }
        }
      }

      return number_of_points;
    }
  }]);

  return yape;
}();



/***/ }),

/***/ "./src/yape/yape_utils.js":
/*!********************************!*\
  !*** ./src/yape/yape_utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is_local_maxima": () => (/* binding */ is_local_maxima),
/* harmony export */   "lev_table_t": () => (/* binding */ lev_table_t),
/* harmony export */   "perform_one_point": () => (/* binding */ perform_one_point),
/* harmony export */   "precompute_directions": () => (/* binding */ precompute_directions),
/* harmony export */   "third_check": () => (/* binding */ third_check)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


function precompute_directions(step, dirs, R) {
  var i = 0;
  var x, y;
  x = R;

  for (y = 0; y < x; y++, i++) {
    x = Math.sqrt(R * R - y * y) + 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (x--; x < y && x >= 0; x--, i++) {
    y = Math.sqrt(R * R - x * x) + 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (; -x < y; x--, i++) {
    y = Math.sqrt(R * R - x * x) + 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (y--; y >= 0; y--, i++) {
    x = -Math.sqrt(R * R - y * y) - 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (; y > x; y--, i++) {
    x = -Math.sqrt(R * R - y * y) - 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (x++; x <= 0; x++, i++) {
    y = -Math.sqrt(R * R - x * x) - 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (; x < -y; x++, i++) {
    y = -Math.sqrt(R * R - x * x) - 0.5 | 0;
    dirs[i] = x + step * y;
  }

  for (y++; y < 0; y++, i++) {
    x = Math.sqrt(R * R - y * y) + 0.5 | 0;
    dirs[i] = x + step * y;
  }

  dirs[i] = dirs[0];
  dirs[i + 1] = dirs[1];
  return i;
}
function third_check(Sb, off, step) {
  var n = 0;
  if (Sb[off + 1] != 0) n++;
  if (Sb[off - 1] != 0) n++;
  if (Sb[off + step] != 0) n++;
  if (Sb[off + step + 1] != 0) n++;
  if (Sb[off + step - 1] != 0) n++;
  if (Sb[off - step] != 0) n++;
  if (Sb[off - step + 1] != 0) n++;
  if (Sb[off - step - 1] != 0) n++;
  return n;
}
function is_local_maxima(p, off, v, step, neighborhood) {
  var x, y;

  if (v > 0) {
    off -= step * neighborhood;

    for (y = -neighborhood; y <= neighborhood; ++y) {
      for (x = -neighborhood; x <= neighborhood; ++x) {
        if (p[off + x] > v) return false;
      }

      off += step;
    }
  } else {
    off -= step * neighborhood;

    for (y = -neighborhood; y <= neighborhood; ++y) {
      for (x = -neighborhood; x <= neighborhood; ++x) {
        if (p[off + x] < v) return false;
      }

      off += step;
    }
  }

  return true;
}
function perform_one_point(I, x, Scores, Im, Ip, dirs, opposite, dirs_nb) {
  var score = 0;
  var a = 0,
      b = opposite - 1 | 0;
  var A = 0,
      B0 = 0,
      B1 = 0,
      B2 = 0;
  var state = 0; // WE KNOW THAT NOT(A ~ I0 & B1 ~ I0):

  A = I[x + dirs[a]];

  if (A <= Ip) {
    if (A >= Im) {
      // A ~ I0
      B0 = I[x + dirs[b]];

      if (B0 <= Ip) {
        if (B0 >= Im) {
          Scores[x] = 0;
          return;
        } else {
          b++;
          B1 = I[x + dirs[b]];

          if (B1 > Ip) {
            b++;
            B2 = I[x + dirs[b]];
            if (B2 > Ip) state = 3;else if (B2 < Im) state = 6;else {
              Scores[x] = 0;
              return;
            } // A ~ I0, B2 ~ I0
          } else
            /* if ((B1 < Im))*/
            {
              b++;
              B2 = I[x + dirs[b]];
              if (B2 > Ip) state = 7;else if (B2 < Im) state = 2;else {
                Scores[x] = 0;
                return;
              } // A ~ I0, B2 ~ I0
            } //else { Scores[x] = 0; return; } // A ~ I0, B1 ~ I0

        }
      } else {
        // B0 < I0
        b++;
        B1 = I[x + dirs[b]];

        if (B1 > Ip) {
          b++;
          B2 = I[x + dirs[b]];
          if (B2 > Ip) state = 3;else if (B2 < Im) state = 6;else {
            Scores[x] = 0;
            return;
          } // A ~ I0, B2 ~ I0
        } else if (B1 < Im) {
          b++;
          B2 = I[x + dirs[b]];
          if (B2 > Ip) state = 7;else if (B2 < Im) state = 2;else {
            Scores[x] = 0;
            return;
          } // A ~ I0, B2 ~ I0
        } else {
          Scores[x] = 0;
          return;
        } // A ~ I0, B1 ~ I0

      }
    } else {
      // A > I0
      B0 = I[x + dirs[b]];

      if (B0 > Ip) {
        Scores[x] = 0;
        return;
      }

      b++;
      B1 = I[x + dirs[b]];

      if (B1 > Ip) {
        Scores[x] = 0;
        return;
      }

      b++;
      B2 = I[x + dirs[b]];

      if (B2 > Ip) {
        Scores[x] = 0;
        return;
      }

      state = 1;
    }
  } else // A < I0
    {
      B0 = I[x + dirs[b]];

      if (B0 < Im) {
        Scores[x] = 0;
        return;
      }

      b++;
      B1 = I[x + dirs[b]];

      if (B1 < Im) {
        Scores[x] = 0;
        return;
      }

      b++;
      B2 = I[x + dirs[b]];

      if (B2 < Im) {
        Scores[x] = 0;
        return;
      }

      state = 0;
    }

  for (a = 1; a <= opposite; a++) {
    A = I[x + dirs[a]];

    switch (state) {
      case 0:
        if (A > Ip) {
          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 0;
            break;
          }
          ;
        }

        if (A < Im) {
          if (B1 > Ip) {
            Scores[x] = 0;
            return;
          }

          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 8;
            break;
          }
          ;
        } // A ~ I0


        if (B1 <= Ip) {
          Scores[x] = 0;
          return;
        }

        if (B2 <= Ip) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]];

        if (B2 > Ip) {
          score -= A + B1;
          state = 3;
          break;
        }

        ;

        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }

      case 1:
        if (A < Im) {
          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 1;
            break;
          }
          ;
        }

        if (A > Ip) {
          if (B1 < Im) {
            Scores[x] = 0;
            return;
          }

          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 9;
            break;
          }
          ;
        } // A ~ I0


        if (B1 >= Im) {
          Scores[x] = 0;
          return;
        }

        if (B2 >= Im) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]];

        if (B2 < Im) {
          score -= A + B1;
          state = 2;
          break;
        }

        ;

        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }

      case 2:
        if (A > Ip) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]];

        if (A < Im) {
          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 4;
            break;
          }
          ;
        } // A ~ I0


        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }

        ;

        if (B2 < Im) {
          score -= A + B1;
          state = 2;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }
      // A ~ I0, B2 ~ I0

      case 3:
        if (A < Im) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]];

        if (A > Ip) {
          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 5;
            break;
          }
          ;
        } // A ~ I0


        if (B2 > Ip) {
          score -= A + B1;
          state = 3;
          break;
        }

        ;

        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }

      case 4:
        if (A > Ip) {
          Scores[x] = 0;
          return;
        }

        if (A < Im) {
          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 1;
            break;
          }
          ;
        }

        if (B2 >= Im) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]];

        if (B2 < Im) {
          score -= A + B1;
          state = 2;
          break;
        }

        ;

        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }

      case 5:
        if (A < Im) {
          Scores[x] = 0;
          return;
        }

        if (A > Ip) {
          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 0;
            break;
          }
          ;
        } // A ~ I0


        if (B2 <= Ip) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]];

        if (B2 > Ip) {
          score -= A + B1;
          state = 3;
          break;
        }

        ;

        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }

      case 7:
        if (A > Ip) {
          Scores[x] = 0;
          return;
        }

        if (A < Im) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]]; // A ~ I0

        if (B2 > Ip) {
          score -= A + B1;
          state = 3;
          break;
        }

        ;

        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }
      // A ~ I0, B2 ~ I0

      case 6:
        if (A > Ip) {
          Scores[x] = 0;
          return;
        }

        if (A < Im) {
          Scores[x] = 0;
          return;
        }

        B1 = B2;
        b++;
        B2 = I[x + dirs[b]]; // A ~ I0

        if (B2 < Im) {
          score -= A + B1;
          state = 2;
          break;
        }

        ;

        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }

        ;
        {
          Scores[x] = 0;
          return;
        }
      // A ~ I0, B2 ~ I0

      case 8:
        if (A > Ip) {
          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 9;
            break;
          }
          ;
        }

        if (A < Im) {
          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 1;
            break;
          }
          ;
        }

        {
          Scores[x] = 0;
          return;
        }

      case 9:
        if (A < Im) {
          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 > Ip) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 8;
            break;
          }
          ;
        }

        if (A > Ip) {
          B1 = B2;
          b++;
          B2 = I[x + dirs[b]];

          if (B2 < Im) {
            Scores[x] = 0;
            return;
          }

          {
            score -= A + B1;
            state = 0;
            break;
          }
          ;
        }

        {
          Scores[x] = 0;
          return;
        }

      default:
        //"PB default";
        break;
    } // switch(state)

  } // for(a...)


  Scores[x] = score + dirs_nb * I[x];
}
var lev_table_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function lev_table_t(w, h, r) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, lev_table_t);

  this.dirs = new Int32Array(1024);
  this.dirs_count = precompute_directions(w, this.dirs, r) | 0;
  this.scores = new Int32Array(w * h);
  this.radius = r | 0;
});

/***/ }),

/***/ "./src/yape06/yape06.js":
/*!******************************!*\
  !*** ./src/yape06/yape06.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ yape06)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _yape06_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yape06_utils.js */ "./src/yape06/yape06_utils.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");





var yape06 = /*#__PURE__*/function () {
  function yape06() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, yape06);

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.cache.allocate(30, 640 * 4);
    this.laplacian_threshold = 30;
    this.min_eigen_value_threshold = 25;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(yape06, [{
    key: "detect",
    value: function detect(src, points, border) {
      if (typeof border === "undefined") {
        border = 5;
      }

      var x = 0,
          y = 0;
      var w = src.cols,
          h = src.rows,
          srd_d = src.data;
      var Dxx = 5,
          Dyy = 5 * w | 0;
      var Dxy = 3 + 3 * w | 0,
          Dyx = 3 - 3 * w | 0;
      var lap_buf = this.cache.get_buffer(w * h << 2);
      var laplacian = lap_buf.i32;
      var lv = 0,
          row = 0,
          rowx = 0,
          min_eigen_value = 0,
          pt;
      var number_of_points = 0;
      var lap_thresh = this.laplacian_threshold;
      var eigen_thresh = this.min_eigen_value_threshold;
      var sx = Math.max(5, border) | 0;
      var sy = Math.max(3, border) | 0;
      var ex = Math.min(w - 5, w - border) | 0;
      var ey = Math.min(h - 3, h - border) | 0;
      x = w * h;

      while (--x >= 0) {
        laplacian[x] = 0;
      }

      (0,_yape06_utils_js__WEBPACK_IMPORTED_MODULE_2__.compute_laplacian)(srd_d, laplacian, w, h, Dxx, Dyy, sx, sy, ex, ey);
      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          lv = laplacian[rowx];

          if (lv < -lap_thresh && lv < laplacian[rowx - 1] && lv < laplacian[rowx + 1] && lv < laplacian[rowx - w] && lv < laplacian[rowx + w] && lv < laplacian[rowx - w - 1] && lv < laplacian[rowx + w - 1] && lv < laplacian[rowx - w + 1] && lv < laplacian[rowx + w + 1] || lv > lap_thresh && lv > laplacian[rowx - 1] && lv > laplacian[rowx + 1] && lv > laplacian[rowx - w] && lv > laplacian[rowx + w] && lv > laplacian[rowx - w - 1] && lv > laplacian[rowx + w - 1] && lv > laplacian[rowx - w + 1] && lv > laplacian[rowx + w + 1]) {
            min_eigen_value = (0,_yape06_utils_js__WEBPACK_IMPORTED_MODULE_2__.hessian_min_eigen_value)(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);

            if (min_eigen_value > eigen_thresh) {
              pt = points[number_of_points];
              pt.x = x, pt.y = y, pt.score = min_eigen_value;
              ++number_of_points;
              ++x, ++rowx; // skip next pixel since this is maxima in 3x3
            }
          }
        }
      }

      this.cache.put_buffer(lap_buf);
      return number_of_points;
    }
  }]);

  return yape06;
}();



/***/ }),

/***/ "./src/yape06/yape06_utils.js":
/*!************************************!*\
  !*** ./src/yape06/yape06_utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compute_laplacian": () => (/* binding */ compute_laplacian),
/* harmony export */   "hessian_min_eigen_value": () => (/* binding */ hessian_min_eigen_value)
/* harmony export */ });
function compute_laplacian(src, dst, w, h, Dxx, Dyy, sx, sy, ex, ey) {
  var y = 0,
      x = 0,
      yrow = sy * w + sx | 0,
      row = yrow;

  for (y = sy; y < ey; ++y, yrow += w, row = yrow) {
    for (x = sx; x < ex; ++x, ++row) {
      dst[row] = -4 * src[row] + src[row + Dxx] + src[row - Dxx] + src[row + Dyy] + src[row - Dyy];
    }
  }
}
function hessian_min_eigen_value(src, off, tr, Dxx, Dyy, Dxy, Dyx) {
  var Ixx = -2 * src[off] + src[off + Dxx] + src[off - Dxx];
  var Iyy = -2 * src[off] + src[off + Dyy] + src[off - Dyy];
  var Ixy = src[off + Dxy] + src[off - Dxy] - src[off + Dyx] - src[off - Dyx];
  var sqrt_delta = Math.sqrt((Ixx - Iyy) * (Ixx - Iyy) + 4 * Ixy * Ixy) | 0;
  return Math.min(Math.abs(tr - sqrt_delta), Math.abs(-(tr + sqrt_delta)));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

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

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"jsfeatnext","version":"0.4.0","description":"ES6 version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/index.d.ts","scripts":{"test":"npm run test","types":"tsc","dev":"webpack --mode development --progress --watch","build":"webpack --mode production"},"repository":{"type":"git","url":"git+https://github.com/kalwalt/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/kalwalt/jsfeatNext/issues"},"homepage":"https://github.com/kalwalt/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.18.6","@babel/plugin-transform-runtime":"^7.18.6","@babel/preset-env":"^7.18.6","babel-loader":"^8.2.5","typescript":"^4.6.3","webpack":"^5.73.0","webpack-cli":"^4.10.0"},"dependencies":{"@babel/runtime":"^7.18.6"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlFQUFlO0VBQ1p4ckIsVUFBVSxFQUFWQSxzREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NhY2hlL2NhY2hlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL2NvbnZvbC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvcmVzYW1wbGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9qc2ZlYXROZXh0LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMva2V5cG9pbnRfdC9rZXlwb2ludF90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbGluYWxnL2xpbmFsZy1iYXNlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbm9kZV91dGlscy9kYXRhX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvYml0X3BhdHRlcm5fMzEuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUveWFwZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUveWFwZV91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUwNi95YXBlMDYuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2X3V0aWxzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHksIGRhdGFfc2l6ZSkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlcykge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIFU4QzFfdDogMHgwMTAwIHwgMHgwMSxcbiAgICBVOEMzX3Q6IDB4MDEwMCB8IDB4MDMsXG4gICAgVThDNF90OiAweDAxMDAgfCAweDA0LFxuXG4gICAgRjMyQzFfdDogMHgwNDAwIHwgMHgwMSxcbiAgICBGMzJDMl90OiAweDA0MDAgfCAweDAyLFxuICAgIFMzMkMxX3Q6IDB4MDIwMCB8IDB4MDEsXG4gICAgUzMyQzJfdDogMHgwMjAwIHwgMHgwMlxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGMDApO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYpO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAsIHN1bTEgPSAwLCBzdW0yID0gMCwgc3VtMyA9IDAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMC4wLCBzdW0xID0gMC4wLCBzdW0yID0gMC4wLCBzdW0zID0gMC4wLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwLjA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OCAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCBrZXlwb2ludF90IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90LmpzJ1xuaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL2ltZ3Byb2MvcmVzYW1wbGUuanMnXG5pbXBvcnQgeyBfY29udm9sLCBfY29udm9sX3U4IH0gZnJvbSAnLi9pbWdwcm9jL2NvbnZvbC5qcydcbi8vaW1wb3J0IG1hdGggZnJvbSAnLi9tYXRoL21hdGguanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuL21hdHJpeF90L21hdHJpeF90LmpzJ1xuLy9pbXBvcnQgcHlyYW1pZF90IGZyb20gJy4vcHlyYW1pZF90L3B5cmFtaWRfdC5qcydcbi8vaW1wb3J0IGxpbmFsZyBmcm9tICcuL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gJy4vbGluYWxnL2xpbmFsZy1iYXNlLmpzJ1xuLy9pbXBvcnQgb3JiIGZyb20gJy4vb3JiL29yYi5qcydcbmltcG9ydCB7IGJpdF9wYXR0ZXJuXzMxIH0gZnJvbSAnLi9vcmIvYml0X3BhdHRlcm5fMzEuanMnXG5pbXBvcnQgeyByZWN0aWZ5X3BhdGNoIH0gZnJvbSAnLi9vcmIvcmVjdGlmeV9wYXRjaC5qcydcbmltcG9ydCB5YXBlIGZyb20gJy4veWFwZS95YXBlLmpzJ1xuaW1wb3J0IHlhcGUwNiBmcm9tICcuL3lhcGUwNi95YXBlMDYuanMnXG4vL2ltcG9ydCBtb3Rpb25fZXN0aW1hdG9yIGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fZXN0aW1hdG9yLmpzJ1xuLy9pbXBvcnQgeyBtb3Rpb25fbW9kZWwgfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzJ1xuaW1wb3J0IHJhbnNhY19wYXJhbXNfdCBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG5cbiAgICAvLyBWRVJTSU9OXG4gICAgc3RhdGljIFZFUlNJT04gPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgQzFfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICBzdGF0aWMgQzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzJfdDtcbiAgICBzdGF0aWMgQzNfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzNfdDtcbiAgICBzdGF0aWMgQzRfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzRfdDtcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBzdGF0aWMgQ09MT1JfUkdCQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX1JHQjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgc3RhdGljIEJPWF9CTFVSX05PU0NBTEUgPSBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEU7XG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBzdGF0aWMgU1ZEX1VfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVDtcbiAgICBzdGF0aWMgU1ZEX1ZfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVDtcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIHN0YXRpYyBVOEMxX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFU4QzNfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzNfdDtcbiAgICBzdGF0aWMgVThDNF90ID0gdGhpcy5VOF90IHwgdGhpcy5DNF90O1xuXG4gICAgc3RhdGljIEYzMkMxX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBGMzJDMl90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzJfdDtcbiAgICBzdGF0aWMgUzMyQzFfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFMzMkMyX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMl90O1xuXG4gICAgZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodHlwZSk7XG4gICAgfVxufVxuXG5jbGFzcyBtb3Rpb25fbW9kZWwgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlQwID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLlQxID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QSA9IG5ldyBtYXRyaXhfdCg2LCA2LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEIgPSBuZXcgbWF0cml4X3QoNiwgMSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHNxcih4KSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIFQwLCBUMSwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHMsIGNvdW50KSB7XG4gICAgICAgIHZhciBqID0gMCwgayA9IDAsIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkeDEgPSAwLjAsIGR5MSA9IDAuMCwgZHgyID0gMC4wLCBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeDIgKiBkeTEgLSBkeTIgKiBkeDEpIDw9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIChNYXRoLmFicyhkeDEpICsgTWF0aC5hYnMoZHkxKSArIE1hdGguYWJzKGR4MikgKyBNYXRoLmFicyhkeTIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWx7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHJ1bihmcm9tLCB0bywgbW9kZWwsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHB4ID0gMC4wLCBweSA9IDAuMDtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcganNmZWF0TmV4dC5saW5hbGcoKTtcblxuICAgICAgICB0aGlzLmlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCB0MGQsIHQxZCwgY291bnQpO1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCAqIDYpIDw8IDMpO1xuICAgICAgICB2YXIgYl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgyICogY291bnQpIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KDYsIDIgKiBjb3VudCwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGJfbXQgPSBuZXcgbWF0cml4X3QoMSwgMiAqIGNvdW50LCBkdCwgYl9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYWQgPSBhX210LmRhdGEsIGJkID0gYl9tdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICBweCA9IHQwZFswXSAqIHB0MC54ICsgdDBkWzFdICogcHQwLnkgKyB0MGRbMl07XG4gICAgICAgICAgICBweSA9IHQwZFszXSAqIHB0MC54ICsgdDBkWzRdICogcHQwLnkgKyB0MGRbNV07XG5cbiAgICAgICAgICAgIGogPSBpICogMiAqIDY7XG4gICAgICAgICAgICBhZFtqXSA9IHB4LCBhZFtqICsgMV0gPSBweSwgYWRbaiArIDJdID0gMS4wLCBhZFtqICsgM10gPSAwLjAsIGFkW2ogKyA0XSA9IDAuMCwgYWRbaiArIDVdID0gMC4wO1xuXG4gICAgICAgICAgICBqICs9IDY7XG4gICAgICAgICAgICBhZFtqXSA9IDAuMCwgYWRbaiArIDFdID0gMC4wLCBhZFtqICsgMl0gPSAwLjAsIGFkW2ogKyAzXSA9IHB4LCBhZFtqICsgNF0gPSBweSwgYWRbaiArIDVdID0gMS4wO1xuXG4gICAgICAgICAgICBiZFtpIDw8IDFdID0gdDFkWzBdICogcHQxLnggKyB0MWRbMV0gKiBwdDEueSArIHQxZFsyXTtcbiAgICAgICAgICAgIGJkWyhpIDw8IDEpICsgMV0gPSB0MWRbM10gKiBwdDEueCArIHQxZFs0XSAqIHB0MS55ICsgdDFkWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRBKHRoaXMuQXRBLCBhX210KTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRCKHRoaXMuQXRCLCBhX210LCBiX210KTtcblxuICAgICAgICBfbGluYWxnLmx1X3NvbHZlKHRoaXMuQXRBLCB0aGlzLkF0Qik7XG5cbiAgICAgICAgbWRbMF0gPSB0aGlzLkF0Qi5kYXRhWzBdLCBtZFsxXSA9IHRoaXMuQXRCLmRhdGFbMV0sIG1kWzJdID0gdGhpcy5BdEIuZGF0YVsyXTtcbiAgICAgICAgbWRbM10gPSB0aGlzLkF0Qi5kYXRhWzNdLCBtZFs0XSA9IHRoaXMuQXRCLmRhdGFbNF0sIG1kWzVdID0gdGhpcy5BdEIuZGF0YVs1XTtcbiAgICAgICAgbWRbNl0gPSAwLjAsIG1kWzddID0gMC4wLCBtZFs4XSA9IDEuMDsgLy8gZmlsbCBsYXN0IHJvd1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLmludmVydF8zeDModGhpcy5UMSwgdGhpcy5UMSk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBmcmVlIGJ1ZmZlclxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufVxuXG5jbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuXG4gICAgICAgIC8vIG5vcm1cbiAgICAgICAgdmFyIHNteCA9IDAuMCwgc215ID0gMC4wLCBjbXggPSAwLjAsIGNteSA9IDAuMCwgc014ID0gMC4wLCBzTXkgPSAwLjAsIGNNeCA9IDAuMCwgY015ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY214ICs9IHRvW2ldLng7XG4gICAgICAgICAgICBjbXkgKz0gdG9baV0ueTtcbiAgICAgICAgICAgIGNNeCArPSBmcm9tW2ldLng7XG4gICAgICAgICAgICBjTXkgKz0gZnJvbVtpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY214IC89IGNvdW50OyBjbXkgLz0gY291bnQ7XG4gICAgICAgIGNNeCAvPSBjb3VudDsgY015IC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzbXggKz0gTWF0aC5hYnModG9baV0ueCAtIGNteCk7XG4gICAgICAgICAgICBzbXkgKz0gTWF0aC5hYnModG9baV0ueSAtIGNteSk7XG4gICAgICAgICAgICBzTXggKz0gTWF0aC5hYnMoZnJvbVtpXS54IC0gY014KTtcbiAgICAgICAgICAgIHNNeSArPSBNYXRoLmFicyhmcm9tW2ldLnkgLSBjTXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNteCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNteSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHJldHVybiAwO1xuXG4gICAgICAgIHNteCA9IGNvdW50IC8gc214OyBzbXkgPSBjb3VudCAvIHNteTtcbiAgICAgICAgc014ID0gY291bnQgLyBzTXg7IHNNeSA9IGNvdW50IC8gc015O1xuXG4gICAgICAgIHQwZFswXSA9IHNNeDsgdDBkWzFdID0gMDsgdDBkWzJdID0gLWNNeCAqIHNNeDtcbiAgICAgICAgdDBkWzNdID0gMDsgdDBkWzRdID0gc015OyB0MGRbNV0gPSAtY015ICogc015O1xuICAgICAgICB0MGRbNl0gPSAwOyB0MGRbN10gPSAwOyB0MGRbOF0gPSAxO1xuXG4gICAgICAgIHQxZFswXSA9IDEuMCAvIHNteDsgdDFkWzFdID0gMDsgdDFkWzJdID0gY214O1xuICAgICAgICB0MWRbM10gPSAwOyB0MWRbNF0gPSAxLjAgLyBzbXk7IHQxZFs1XSA9IGNteTtcbiAgICAgICAgdDFkWzZdID0gMDsgdDFkWzddID0gMDsgdDFkWzhdID0gMTtcbiAgICAgICAgLy9cblxuICAgICAgICAvLyBjb25zdHJ1Y3Qgc3lzdGVtXG4gICAgICAgIGkgPSA4MTtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBMdExbaV0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHggPSAodG9baV0ueCAtIGNteCkgKiBzbXg7XG4gICAgICAgICAgICB5ID0gKHRvW2ldLnkgLSBjbXkpICogc215O1xuICAgICAgICAgICAgWCA9IChmcm9tW2ldLnggLSBjTXgpICogc014O1xuICAgICAgICAgICAgWSA9IChmcm9tW2ldLnkgLSBjTXkpICogc015O1xuXG4gICAgICAgICAgICBMdExbMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMl0gKz0gWDtcblxuICAgICAgICAgICAgTHRMWzZdICs9IFggKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbN10gKz0gWCAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFs4XSArPSBYICogLXg7XG4gICAgICAgICAgICBMdExbMTBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzExXSArPSBZO1xuXG4gICAgICAgICAgICBMdExbMTVdICs9IFkgKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbMTZdICs9IFkgKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbMTddICs9IFkgKiAteDtcbiAgICAgICAgICAgIEx0TFsyMF0gKz0gMS4wO1xuXG4gICAgICAgICAgICBMdExbMjRdICs9IC14ICogWDtcbiAgICAgICAgICAgIEx0TFsyNV0gKz0gLXggKiBZO1xuICAgICAgICAgICAgTHRMWzI2XSArPSAteDtcbiAgICAgICAgICAgIEx0TFszMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzMyXSArPSBYO1xuICAgICAgICAgICAgTHRMWzMzXSArPSBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzM0XSArPSBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzM1XSArPSBYICogLXk7XG4gICAgICAgICAgICBMdExbNDBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzQxXSArPSBZO1xuICAgICAgICAgICAgTHRMWzQyXSArPSBZICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzQzXSArPSBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzQ0XSArPSBZICogLXk7XG4gICAgICAgICAgICBMdExbNTBdICs9IDEuMDtcbiAgICAgICAgICAgIEx0TFs1MV0gKz0gLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzUyXSArPSAteSAqIFk7XG4gICAgICAgICAgICBMdExbNTNdICs9IC15O1xuICAgICAgICAgICAgTHRMWzYwXSArPSAteCAqIFggKiAteCAqIFggKyAteSAqIFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNjFdICs9IC14ICogWCAqIC14ICogWSArIC15ICogWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs2Ml0gKz0gLXggKiBYICogLXggKyAteSAqIFggKiAteTtcbiAgICAgICAgICAgIEx0TFs3MF0gKz0gLXggKiBZICogLXggKiBZICsgLXkgKiBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzcxXSArPSAteCAqIFkgKiAteCArIC15ICogWSAqIC15O1xuICAgICAgICAgICAgTHRMWzgwXSArPSAteCAqIC14ICsgLXkgKiAteTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuXG4gICAgICAgIC8vIHN5bW1ldHJ5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA5OyArK2kpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opXG4gICAgICAgICAgICAgICAgTHRMW2kgKiA5ICsgal0gPSBMdExbaiAqIDkgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9saW5hbGcuZWlnZW5WVih0aGlzLm1MdEwsIHRoaXMuRXZlYyk7XG5cbiAgICAgICAgbWRbMF0gPSBldmRbNzJdLCBtZFsxXSA9IGV2ZFs3M10sIG1kWzJdID0gZXZkWzc0XTtcbiAgICAgICAgbWRbM10gPSBldmRbNzVdLCBtZFs0XSA9IGV2ZFs3Nl0sIG1kWzVdID0gZXZkWzc3XTtcbiAgICAgICAgbWRbNl0gPSBldmRbNzhdLCBtZFs3XSA9IGV2ZFs3OV0sIG1kWzhdID0gZXZkWzgwXTtcblxuICAgICAgICAvLyBkZW5vcm1hbGl6ZVxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIHRoaXMuVDEsIG1vZGVsKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCBtb2RlbCwgdGhpcy5UMCk7XG5cbiAgICAgICAgLy8gc2V0IGJvdHRvbSByaWdodCB0byAxLjBcbiAgICAgICAgeCA9IDEuMCAvIG1kWzhdO1xuICAgICAgICBtZFswXSAqPSB4OyBtZFsxXSAqPSB4OyBtZFsyXSAqPSB4O1xuICAgICAgICBtZFszXSAqPSB4OyBtZFs0XSAqPSB4OyBtZFs1XSAqPSB4O1xuICAgICAgICBtZFs2XSAqPSB4OyBtZFs3XSAqPSB4OyBtZFs4XSA9IDEuMDtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZXJyb3IoZnJvbSwgdG8sIG1vZGVsLCBlcnIsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCB3dyA9IDAuMCwgZHggPSAwLjAsIGR5ID0gMC4wO1xuICAgICAgICB2YXIgbSA9IG1vZGVsLmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHd3ID0gMS4wIC8gKG1bNl0gKiBwdDAueCArIG1bN10gKiBwdDAueSArIDEuMCk7XG4gICAgICAgICAgICBkeCA9IChtWzBdICogcHQwLnggKyBtWzFdICogcHQwLnkgKyBtWzJdKSAqIHd3IC0gcHQxLng7XG4gICAgICAgICAgICBkeSA9IChtWzNdICogcHQwLnggKyBtWzRdICogcHQwLnkgKyBtWzVdKSAqIHd3IC0gcHQxLnk7XG4gICAgICAgICAgICBlcnJbaV0gPSAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrX3N1YnNldChmcm9tLCB0bywgY291bnQpIHtcbiAgICAgICAgLy8gc2VlbXMgdG8gcmVqZWN0IGdvb2Qgc3Vic2V0cyBhY3R1YWxseVxuICAgICAgICAvL2lmKCBoYXZlX2NvbGxpbmVhcl9wb2ludHMoZnJvbSwgY291bnQpIHx8IGhhdmVfY29sbGluZWFyX3BvaW50cyh0bywgY291bnQpICkge1xuICAgICAgICAvL3JldHVybiBmYWxzZTtcbiAgICAgICAgLy99XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIGlmIChjb3VudCA9PSA0KSB7XG4gICAgICAgICAgICB2YXIgbmVnYXRpdmUgPSAwO1xuXG4gICAgICAgICAgICB2YXIgZnAwID0gZnJvbVswXSwgZnAxID0gZnJvbVsxXSwgZnAyID0gZnJvbVsyXSwgZnAzID0gZnJvbVszXTtcbiAgICAgICAgICAgIHZhciB0cDAgPSB0b1swXSwgdHAxID0gdG9bMV0sIHRwMiA9IHRvWzJdLCB0cDMgPSB0b1szXTtcblxuICAgICAgICAgICAgLy8gc2V0MVxuICAgICAgICAgICAgdmFyIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueSwgQTEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueSwgQTIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEzMSA9IGZwMi54LCBBMzIgPSBmcDIueSwgQTMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgQjExID0gdHAwLngsIEIxMiA9IHRwMC55LCBCMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55LCBCMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjMxID0gdHAyLngsIEIzMiA9IHRwMi55LCBCMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgdmFyIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDJcbiAgICAgICAgICAgIEExMSA9IGZwMS54LCBBMTIgPSBmcDEueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAxLngsIEIxMiA9IHRwMS55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0M1xuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQ0XG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIGlmIChuZWdhdGl2ZSAhPSAwICYmIG5lZ2F0aXZlICE9IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGFsbCBnb29kXG4gICAgfVxufVxuXG5qc2ZlYXROZXh0LmRhdGFfdCA9IGRhdGFfdFxuXG5qc2ZlYXROZXh0Lm1hdHJpeF90ID0gbWF0cml4X3Q7XG5cbmpzZmVhdE5leHQua2V5cG9pbnRfdCA9IGtleXBvaW50X3Q7XG5cbmpzZmVhdE5leHQucHlyYW1pZF90ID0gY2xhc3MgcHlyYW1pZF90IGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWxzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzIHwgMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGxldmVscyk7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBqc2ZlYXROZXh0LmltZ3Byb2MoKTtcbiAgICAgICAgdGhpcy5weXJkb3duID0gX2ltZ3Byb2MucHlyZG93bjtcbiAgICB9XG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkKGlucHV0LCBza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpcF9maXJzdF9sZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBza2lwX2ZpcnN0X2xldmVsID0gdHJ1ZTsgfVxuICAgICAgICAvLyBqdXN0IGNvcHkgZGF0YSB0byBmaXJzdCBsZXZlbFxuICAgICAgICB2YXIgaSA9IDIsIGEgPSBpbnB1dCwgYiA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBjbGFzcyBpbWdwcm9jIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfTtcbiAgICBncmF5c2NhbGUoc3JjLCB3LCBoLCBkc3QsIGNvZGUpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBkZWZhdWx0IGltYWdlIGRhdGEgcmVwcmVzZW50YXRpb24gaW4gYnJvd3NlclxuICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT09IFwidW5kZWZpbmVkXCIpIHsgY29kZSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZOyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIGkgPSAwLCBqID0gMCwgaXIgPSAwLCBqciA9IDA7XG4gICAgICAgIHZhciBjb2VmZl9yID0gNDg5OSwgY29lZmZfZyA9IDk2MTcsIGNvZWZmX2IgPSAxODY4LCBjbiA9IDQ7XG5cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjb2VmZl9yID0gMTg2ODtcbiAgICAgICAgICAgIGNvZWZmX2IgPSA0ODk5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjbiA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNuMiA9IGNuIDw8IDEsIGNuMyA9IChjbiAqIDMpIHwgMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDEpO1xuICAgICAgICB2YXIgZHN0X3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSwgaiArPSB3LCBpICs9IHcgKiBjbikge1xuICAgICAgICAgICAgZm9yICh4ID0gMCwgaXIgPSBpLCBqciA9IGo7IHggPD0gdyAtIDQ7IHggKz0gNCwgaXIgKz0gY24gPDwgMiwganIgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAxXSA9IChzcmNbaXIgKyBjbl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24gKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDJdID0gKHNyY1tpciArIGNuMl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24yICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24yICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgM10gPSAoc3JjW2lyICsgY24zXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjMgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjMgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK2pyLCBpciArPSBjbikge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkZXJpdmVkIGZyb20gQ0NWIGxpYnJhcnlcbiAgICByZXNhbXBsZShzcmMsIGRzdCwgbncsIG5oKSB7XG4gICAgICAgIHZhciBoID0gc3JjLnJvd3MsIHcgPSBzcmMuY29scztcbiAgICAgICAgaWYgKGggPiBuaCAmJiB3ID4gbncpIHtcbiAgICAgICAgICAgIGRzdC5yZXNpemUobncsIG5oLCBzcmMuY2hhbm5lbCk7XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgZmFzdCBhbHRlcm5hdGl2ZSAoZml4IHBvaW50IHNjYWxlLCAweDEwMCB0byBhdm9pZCBvdmVyZmxvdylcbiAgICAgICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBkc3QudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBoICogdyAvIChuaCAqIG53KSA8IDB4MTAwKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlX3U4KHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGUoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYm94X2JsdXJfZ3JheShzcmMsIGRzdCwgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfVxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIGgyID0gaCA8PCAxLCB3MiA9IHcgPDwgMTtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMCwgeSA9IDAsIGVuZCA9IDA7XG4gICAgICAgIHZhciB3aW5kb3dTaXplID0gKChyYWRpdXMgPDwgMSkgKyAxKSB8IDA7XG4gICAgICAgIHZhciByYWRpdXNQbHVzT25lID0gKHJhZGl1cyArIDEpIHwgMCwgcmFkaXVzUGx1czIgPSAocmFkaXVzUGx1c09uZSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHNjYWxlID0gb3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRSA/IDEgOiAoMS4wIC8gKHdpbmRvd1NpemUgKiB3aW5kb3dTaXplKSk7XG5cbiAgICAgICAgdmFyIHRtcF9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsIGRzdEluZGV4ID0gMCwgc3JjSW5kZXggPSAwLCBuZXh0UGl4ZWxJbmRleCA9IDAsIHByZXZpb3VzUGl4ZWxJbmRleCA9IDA7XG4gICAgICAgIHZhciBkYXRhX2kzMiA9IHRtcF9idWZmLmkzMjsgLy8gdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICB2YXIgZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgaG9sZCA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgLy8gZmlyc3QgcGFzc1xuICAgICAgICAvLyBubyBuZWVkIHRvIHNjYWxlIFxuICAgICAgICAvL2RhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSkge1xuICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfdThbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gKHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZSkgfCAwO1xuICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IGgyKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4ICsgaF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcmNJbmRleCArPSB3O1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNlY29uZCBwYXNzXG4gICAgICAgIHNyY0luZGV4ID0gMDtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDsgLy8gdGhpcyBpcyBhIHRyYW5zcG9zZVxuICAgICAgICBkYXRhX3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgLy8gZG9udCBzY2FsZSByZXN1bHRcbiAgICAgICAgaWYgKHNjYWxlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHRtcF9idWZmKTtcbiAgICB9XG4gICAgZ2F1c3NpYW5fYmx1cihzcmMsIGRzdCwga2VybmVsX3NpemUsIHNpZ21hKSB7XG4gICAgICAgIHZhciBqc2ZlYXRtYXRoID0gbmV3IGpzZmVhdE5leHQubWF0aCgpO1xuICAgICAgICBpZiAodHlwZW9mIHNpZ21hID09PSBcInVuZGVmaW5lZFwiKSB7IHNpZ21hID0gMC4wOyB9XG4gICAgICAgIGlmICh0eXBlb2Yga2VybmVsX3NpemUgPT09IFwidW5kZWZpbmVkXCIpIHsga2VybmVsX3NpemUgPSAwOyB9XG4gICAgICAgIGtlcm5lbF9zaXplID0ga2VybmVsX3NpemUgPT0gMCA/IChNYXRoLm1heCgxLCAoNC4wICogc2lnbWEgKyAxLjAgLSAxZS04KSkgKiAyICsgMSkgfCAwIDoga2VybmVsX3NpemU7XG4gICAgICAgIHZhciBoYWxmX2tlcm5lbCA9IGtlcm5lbF9zaXplID4+IDE7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRhdGFfdHlwZSA9IHNyYy50eXBlLCBpc191OCA9IGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIGJ1ZiwgZmlsdGVyLCBidWZfc3ogPSAoa2VybmVsX3NpemUgKyBNYXRoLm1heChoLCB3KSkgfCAwO1xuXG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihidWZfc3ogPDwgMik7XG4gICAgICAgIHZhciBmaWx0X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoa2VybmVsX3NpemUgPDwgMik7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuaTMyO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAganNmZWF0bWF0aC5nZXRfZ2F1c3NpYW5fa2VybmVsKGtlcm5lbF9zaXplLCBzaWdtYSwgZmlsdGVyLCBkYXRhX3R5cGUpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbnZvbChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGZpbHRfbm9kZSk7XG4gICAgfVxuICAgIGhvdWdoX3RyYW5zZm9ybShpbWcsIHJob19yZXMsIHRoZXRhX3JlcywgdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YWdlIDQuIHN0b3JlIHRoZSBmaXJzdCBtaW4odG90YWwsbGluZXNNYXgpIGxpbmVzIHRvIHRoZSBvdXRwdXQgYnVmZmVyXG4gICAgICAgIHZhciBsaW5lc01heCA9IE1hdGgubWluKG51bWFuZ2xlICogbnVtcmhvLCBfc29ydF9idWYubGVuZ3RoKTtcbiAgICAgICAgdmFyIHNjYWxlID0gMS4wIC8gKG51bXJobyArIDIpO1xuICAgICAgICB2YXIgbGluZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc01heDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX3NvcnRfYnVmW2ldO1xuICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKGlkeCAqIHNjYWxlKSAtIDE7XG4gICAgICAgICAgICB2YXIgciA9IGlkeCAtIChuICsgMSkgKiAobnVtcmhvICsgMikgLSAxO1xuICAgICAgICAgICAgdmFyIGxyaG8gPSAociAtIChudW1yaG8gLSAxKSAqIDAuNSkgKiByaG9fcmVzO1xuICAgICAgICAgICAgdmFyIGxhbmdsZSA9IG4gKiB0aGV0YV9yZXM7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtscmhvLCBsYW5nbGVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIHB5cmRvd24oc3JjLCBkc3QsIHN4LCBzeSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHggKyAxXSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGEgKyB0cm93MVt4XSArIGIgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGMgKyBiICsgYSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA0XSAtIGUpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChkICsgYSArIGMgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDVdIC0gZik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyA1XSArIGMgKyBkICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdICsgdHJvdzFbeCArIDFdICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cbiAgICAvLyBwbGVhc2Ugbm90ZTogXG4gICAgLy8gZHN0Xyh0eXBlKSBzaXplIHNob3VsZCBiZSBjb2xzID0gc3JjLmNvbHMrMSwgcm93cyA9IHNyYy5yb3dzKzFcbiAgICBjb21wdXRlX2ludGVncmFsX2ltYWdlKHNyYywgZHN0X3N1bSwgZHN0X3Nxc3VtLCBkc3RfdGlsdGVkKSB7XG4gICAgICAgIHZhciB3MCA9IHNyYy5jb2xzIHwgMCwgaDAgPSBzcmMucm93cyB8IDAsIHNyY19kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciB3MSA9ICh3MCArIDEpIHwgMDtcbiAgICAgICAgdmFyIHMgPSAwLCBzMiA9IDAsIHAgPSAwLCBwdXAgPSAwLCBpID0gMCwgaiA9IDAsIHYgPSAwLCBrID0gMDtcblxuICAgICAgICBpZiAoZHN0X3N1bSAmJiBkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwLCBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHN0X3RpbHRlZCkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwICsgMV0gPSBzcmNfZFtrICsgMV0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyB3MCkgfCAwLCBwdXAgPSB3MDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoMDsgKytpLCBwICs9IHcxLCBwdXAgKz0gdzEpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gdzAgLSAxOyBqID4gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgcCA9IGogKyBoMCAqIHcxLCBwdXAgPSBwIC0gdzE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaDA7IGkgPiAwOyAtLWksIHAgLT0gdzEsIHB1cCAtPSB3MSkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFsaXplX2hpc3RvZ3JhbShzcmMsIGRzdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGEsIHNpemUgPSB3ICogaDtcbiAgICAgICAgdmFyIGkgPSAwLCBwcmV2ID0gMCwgaGlzdDAsIG5vcm07XG5cbiAgICAgICAgdmFyIGhpc3QwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoMjU2IDw8IDIpO1xuICAgICAgICBoaXN0MCA9IGhpc3QwX25vZGUuaTMyO1xuICAgICAgICBmb3IgKDsgaSA8IDI1NjsgKytpKSBoaXN0MFtpXSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICsraGlzdDBbc3JjX2RbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldiA9IGhpc3QwWzBdO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgICAgIHByZXYgPSBoaXN0MFtpXSArPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgbm9ybSA9IDI1NSAvIHNpemU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGRzdF9kW2ldID0gKGhpc3QwW3NyY19kW2ldXSAqIG5vcm0gKyAwLjUpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaGlzdDBfbm9kZSk7XG4gICAgfVxuICAgIGNhbm55KHNyYywgZHN0LCBsb3dfdGhyZXNoLCBoaWdoX3RocmVzaCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwID0gbWFwX25vZGUuaTMyO1xuICAgICAgICB2YXIgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHkgPSBkeGR5X25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeV9tID0gbmV3IG1hdHJpeF90KHcsIGgsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZHhkeV9ub2RlLmRhdGEpO1xuICAgICAgICB2YXIgcm93MCA9IDEsIHJvdzEgPSAodyArIDIgKyAxKSB8IDAsIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsIG1hcF93ID0gKHcgKyAyKSB8IDAsIG1hcF9pID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG1hdHJpeF90XG4gICAgd2FycF9wZXJzcGVjdGl2ZShzcmMsIGRzdCwgdHJhbnNmb3JtLCBmaWxsX3ZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MgfCAwLCBkc3Rfd2lkdGggPSBkc3QuY29scyB8IDAsIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIHhzMCA9IDAuMCwgeXMwID0gMC4wLCB3cyA9IDAuMCwgc2MgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XSxcbiAgICAgICAgICAgIG0yMCA9IHRkWzZdLCBtMjEgPSB0ZFs3XSwgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzMCA9IG0wMSAqIHkgKyBtMDIsXG4gICAgICAgICAgICAgICAgeXMwID0gbTExICogeSArIG0xMixcbiAgICAgICAgICAgICAgICB3cyA9IG0yMSAqIHkgKyBtMjI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMwICs9IG0wMCwgeXMwICs9IG0xMCwgd3MgKz0gbTIwKSB7XG4gICAgICAgICAgICAgICAgc2MgPSAxLjAgLyB3cztcbiAgICAgICAgICAgICAgICB4cyA9IHhzMCAqIHNjLCB5cyA9IHlzMCAqIHNjO1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMCwgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhzID4gMCAmJiB5cyA+IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjLCBkc3QsIHRyYW5zZm9ybSwgZmlsbF92YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciByLCBnLCBiLCBqO1xuICAgICAgICB2YXIgaSA9IHNyYy53aWR0aCAqIHNyYy5oZWlnaHQ7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGogPSBpICogNDtcbiAgICAgICAgICAgIHIgPSBzcmMuZGF0YVtqXTtcbiAgICAgICAgICAgIGcgPSBzcmMuZGF0YVtqICsgMV07XG4gICAgICAgICAgICBiID0gc3JjLmRhdGFbaiArIDJdO1xuICAgICAgICAgICAgaWYgKChyID4gOTUpICYmIChnID4gNDApICYmIChiID4gMjApXG4gICAgICAgICAgICAgICAgJiYgKHIgPiBnKSAmJiAociA+IGIpXG4gICAgICAgICAgICAgICAgJiYgKHIgLSBNYXRoLm1pbihnLCBiKSA+IDE1KVxuICAgICAgICAgICAgICAgICYmIChNYXRoLmFicyhyIC0gZykgPiAxNSkpIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAyNTU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmpzZmVhdE5leHQubWF0aCA9IGNsYXNzIG1hdGggZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnFzb3J0X3N0YWNrID0gbmV3IEludDMyQXJyYXkoNDggKiAyKTtcbiAgICB9XG5cbiAgICBnZXRfZ2F1c3NpYW5fa2VybmVsKHNpemUsIHNpZ21hLCBrZXJuZWwsIGRhdGFfdHlwZSkge1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLjAsIHQgPSAwLjAsIHNpZ21hX3ggPSAwLjAsIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIga2Vybl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHNpemUgPDwgMik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYgKChzaXplICYgMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChzaXplID4+IDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4yNSwgX2tlcm5lbFsxXSA9IDAuNSwgX2tlcm5lbFsyXSA9IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMjUgKyAwLjUgKyAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjA2MjUsIF9rZXJuZWxbMV0gPSAwLjI1LCBfa2VybmVsWzJdID0gMC4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wMzEyNSwgX2tlcm5lbFsxXSA9IDAuMTA5Mzc1LCBfa2VybmVsWzJdID0gMC4yMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wMzEyNSArIDAuMTA5Mzc1ICsgMC4yMTg3NSArIDAuMjgxMjUgKyAwLjIxODc1ICsgMC4xMDkzNzUgKyAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZ21hX3ggPSBzaWdtYSA+IDAgPyBzaWdtYSA6ICgoc2l6ZSAtIDEpICogMC41IC0gMS4wKSAqIDAuMyArIDAuODtcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gLTAuNSAvIChzaWdtYV94ICogc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAgeCA9IGkgLSAoc2l6ZSAtIDEpICogMC41O1xuICAgICAgICAgICAgICAgIHQgPSBNYXRoLmV4cChzY2FsZV8yeCAqIHggKiB4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkge1xuICAgICAgICAgICAgLy8gaW50IGJhc2VkIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMjU2LjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzaWMga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAxLjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gX2tlcm5lbFtpXSAqIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihrZXJuX25vZGUpO1xuICAgIH1cblxuICAgIC8vIG1vZGVsIGlzIDN4MyBtYXRyaXhfdFxuICAgIHBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0obW9kZWwsIHNyY194MCwgc3JjX3kwLCBkc3RfeDAsIGRzdF95MCxcbiAgICAgICAgc3JjX3gxLCBzcmNfeTEsIGRzdF94MSwgZHN0X3kxLFxuICAgICAgICBzcmNfeDIsIHNyY195MiwgZHN0X3gyLCBkc3RfeTIsXG4gICAgICAgIHNyY194Mywgc3JjX3kzLCBkc3RfeDMsIGRzdF95Mykge1xuICAgICAgICB2YXIgdDEgPSBzcmNfeDA7XG4gICAgICAgIHZhciB0MiA9IHNyY194MjtcbiAgICAgICAgdmFyIHQ0ID0gc3JjX3kxO1xuICAgICAgICB2YXIgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHZhciB0NiA9IHNyY195MztcbiAgICAgICAgdmFyIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdmFyIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdmFyIHQ5ID0gc3JjX3kyO1xuICAgICAgICB2YXIgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdmFyIHQxMSA9IHNyY194MTtcbiAgICAgICAgdmFyIHQxNCA9IHNyY195MDtcbiAgICAgICAgdmFyIHQxNSA9IHNyY194MztcbiAgICAgICAgdmFyIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdmFyIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdmFyIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB2YXIgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHZhciB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdmFyIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHZhciB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB2YXIgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHZhciB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB2YXIgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHZhciB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHZhciB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB2YXIgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHZhciB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdmFyIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB2YXIgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHZhciB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHZhciB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhyMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIcjEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMiA9IHQxO1xuICAgICAgICB2YXIgSHIzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNSA9IHQxNDtcbiAgICAgICAgdmFyIEhyNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIHQxID0gZHN0X3gwO1xuICAgICAgICB0MiA9IGRzdF94MjtcbiAgICAgICAgdDQgPSBkc3RfeTE7XG4gICAgICAgIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB0NiA9IGRzdF95MztcbiAgICAgICAgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB0OCA9IHQyICogdDc7XG4gICAgICAgIHQ5ID0gZHN0X3kyO1xuICAgICAgICB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB0MTEgPSBkc3RfeDE7XG4gICAgICAgIHQxNCA9IGRzdF95MDtcbiAgICAgICAgdDE1ID0gZHN0X3gzO1xuICAgICAgICB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIbDAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSGwxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIbDIgPSB0MTtcbiAgICAgICAgdmFyIEhsMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDUgPSB0MTQ7XG4gICAgICAgIHZhciBIbDYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIbDcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGNvZGUgY29tcHV0ZXMgUiA9IEhsICogaW52ZXJzZSBIclxuICAgICAgICB0MiA9IEhyNCAtIEhyNyAqIEhyNTtcbiAgICAgICAgdDQgPSBIcjAgKiBIcjQ7XG4gICAgICAgIHQ1ID0gSHIwICogSHI1O1xuICAgICAgICB0NyA9IEhyMyAqIEhyMTtcbiAgICAgICAgdDggPSBIcjIgKiBIcjM7XG4gICAgICAgIHQxMCA9IEhyMSAqIEhyNjtcbiAgICAgICAgdmFyIHQxMiA9IEhyMiAqIEhyNjtcbiAgICAgICAgdDE1ID0gMS4wIC8gKHQ0IC0gdDUgKiBIcjcgLSB0NyArIHQ4ICogSHI3ICsgdDEwICogSHI1IC0gdDEyICogSHI0KTtcbiAgICAgICAgdDE4ID0gLUhyMyArIEhyNSAqIEhyNjtcbiAgICAgICAgdmFyIHQyMyA9IC1IcjMgKiBIcjcgKyBIcjQgKiBIcjY7XG4gICAgICAgIHQyOCA9IC1IcjEgKyBIcjIgKiBIcjc7XG4gICAgICAgIHZhciB0MzEgPSBIcjAgLSB0MTI7XG4gICAgICAgIHQzNSA9IEhyMCAqIEhyNyAtIHQxMDtcbiAgICAgICAgdDQxID0gLUhyMSAqIEhyNSArIEhyMiAqIEhyNDtcbiAgICAgICAgdmFyIHQ0NCA9IHQ1IC0gdDg7XG4gICAgICAgIHZhciB0NDcgPSB0NCAtIHQ3O1xuICAgICAgICB0NDggPSB0MiAqIHQxNTtcbiAgICAgICAgdmFyIHQ0OSA9IHQyOCAqIHQxNTtcbiAgICAgICAgdmFyIHQ1MCA9IHQ0MSAqIHQxNTtcbiAgICAgICAgdmFyIG1hdCA9IG1vZGVsLmRhdGE7XG4gICAgICAgIG1hdFswXSA9IEhsMCAqIHQ0OCArIEhsMSAqICh0MTggKiB0MTUpIC0gSGwyICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFsxXSA9IEhsMCAqIHQ0OSArIEhsMSAqICh0MzEgKiB0MTUpIC0gSGwyICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFsyXSA9IC1IbDAgKiB0NTAgLSBIbDEgKiAodDQ0ICogdDE1KSArIEhsMiAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbM10gPSBIbDMgKiB0NDggKyBIbDQgKiAodDE4ICogdDE1KSAtIEhsNSAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbNF0gPSBIbDMgKiB0NDkgKyBIbDQgKiAodDMxICogdDE1KSAtIEhsNSAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbNV0gPSAtSGwzICogdDUwIC0gSGw0ICogKHQ0NCAqIHQxNSkgKyBIbDUgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzZdID0gSGw2ICogdDQ4ICsgSGw3ICogKHQxOCAqIHQxNSkgLSB0MjMgKiB0MTU7XG4gICAgICAgIG1hdFs3XSA9IEhsNiAqIHQ0OSArIEhsNyAqICh0MzEgKiB0MTUpIC0gdDM1ICogdDE1O1xuICAgICAgICBtYXRbOF0gPSAtSGw2ICogdDUwIC0gSGw3ICogKHQ0NCAqIHQxNSkgKyB0NDcgKiB0MTU7XG4gICAgfVxuXG4gICAgLy8gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gd2FzIGRlcml2ZWQgZnJvbSAqQlNEIHN5c3RlbSBxc29ydCgpOlxuICAgIC8vIENvcHlyaWdodCAoYykgMTk5MiwgMTk5M1xuICAgIC8vIFRoZSBSZWdlbnRzIG9mIHRoZSBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIHFzb3J0KGFycmF5LCBsb3csIGhpZ2gsIGNtcCkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheSwgbG93LCBoaWdoKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBjbGFzcyBsaW5hbGcgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBtID0gMCwgbCA9IDAsIGlkeCA9IDAsIF9pbiA9IDAsIF9pbjIgPSAwO1xuICAgICAgICB2YXIgaXRlcnMgPSAwLCBtYXhfaXRlciA9IG4gKiBuICogMzA7XG4gICAgICAgIHZhciBtdiA9IDAuMCwgdmFsID0gMC4wLCBwID0gMC4wLCB5ID0gMC4wLCB0ID0gMC4wLCBzID0gMC4wLCBjID0gMC4wLCBhMCA9IDAuMCwgYjAgPSAwLjA7XG5cbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgdmFyIGluZEMgPSBpbmRDX2J1ZmYuaTMyO1xuXG4gICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpICogdnN0ZXA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSAqIGtdO1xuICAgICAgICAgICAgaWYgKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IGsgKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgbV0pLCBpID0gayArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFba10pLCBpID0gMTsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gMSkgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yIChrID0gMCwgbXYgPSBNYXRoLmFicyhBW2luZFJbMF1dKSwgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gaW5kUltrXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcblxuICAgICAgICAgICAgeSA9IChXW2xdIC0gV1trXSkgKiAwLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0IC8gcztcbiAgICAgICAgICAgIHMgPSBwIC8gczsgdCA9IChwIC8gdCkgKiBwO1xuICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcblxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IGlkeCArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIG1dKSwgaSA9IGlkeCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtpZHhdKSwgaSA9IDE7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kQ1tpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbbV0gPCBXW2ldKVxuICAgICAgICAgICAgICAgICAgICBtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFYsIHZzdGVwICogbSArIGksIHZzdGVwICogayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbCBcblxuICAgICAgICBpZiAobSA8IG4pIHtcbiAgICAgICAgICAgIGF0ID0gMTtcbiAgICAgICAgICAgIGkgPSBtO1xuICAgICAgICAgICAgbSA9IG47XG4gICAgICAgICAgICBuID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG0gKiBtKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJhbnNwb3NlXG4gICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKGFfbXQsIEEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9uICogX207IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbiAqIG07IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaVNWREltcGwoYV9tdC5kYXRhLCBtLCB3X210LmRhdGEsIHZfbXQuZGF0YSwgbiwgbSwgbiwgbSk7XG5cbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSB3X210LmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IF9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgdl9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIHZfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcblxuICAgIH1cblxuICAgIHN2ZF9zb2x2ZShBLCBYLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHhzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcblxuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGJkID0gQi5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIHhzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh3ZFtqXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjAsIHB1ID0gMDsgayA8IG5yb3dzOyBrKyssIHB1ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdWRbcHUgKyBqXSAqIGJkW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhzdW0gKz0gc3VtICogdmRbcHYgKyBqXSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWksIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5vcmIgPSBjbGFzcyBvcmIgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLmltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgfVxuXG4gICAgZGVzY3JpYmUoc3JjLCBjb3JuZXJzLCBjb3VudCwgZGVzY3JpcHRvcnMpIHtcbiAgICAgICAgdmFyIERFU0NSX1NJWkUgPSAzMjsgLy8gYnl0ZXM7XG4gICAgICAgIHZhciBpID0gMCwgYiA9IDAsIHB4ID0gMC4wLCBweSA9IDAuMCwgYW5nbGUgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAsIHQxID0gMCwgdmFsID0gMDtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHBhdGNoX2QgPSB0aGlzLnBhdGNoX2ltZy5kYXRhO1xuICAgICAgICB2YXIgcGF0Y2hfb2ZmID0gMTYgKiAzMiArIDE2OyAvLyBjZW50ZXIgb2YgcGF0Y2hcbiAgICAgICAgdmFyIHBhdHQgPSAwO1xuXG4gICAgICAgIGlmICghKGRlc2NyaXB0b3JzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpKSB7XG4gICAgICAgICAgICAvLyByZWxvY2F0ZSB0byBVOCB0eXBlXG4gICAgICAgICAgICBkZXNjcmlwdG9ycy50eXBlID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY29scyA9IERFU0NSX1NJWkU7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5yb3dzID0gY291bnQ7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jaGFubmVsID0gMTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5yZXNpemUoREVTQ1JfU0laRSwgY291bnQsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlc2NyX2QgPSBkZXNjcmlwdG9ycy5kYXRhO1xuICAgICAgICB2YXIgZGVzY3Jfb2ZmID0gMDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHggPSBjb3JuZXJzW2ldLng7XG4gICAgICAgICAgICBweSA9IGNvcm5lcnNbaV0ueTtcbiAgICAgICAgICAgIGFuZ2xlID0gY29ybmVyc1tpXS5hbmdsZTtcblxuICAgICAgICAgICAgcmVjdGlmeV9wYXRjaChzcmMsIHRoaXMucGF0Y2hfaW1nLCBhbmdsZSwgcHgsIHB5LCAzMiwgdGhpcy5ILCB0aGlzLmltZ3Byb2MpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9ICh0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC55YXBlID0geWFwZTtcblxuanNmZWF0TmV4dC55YXBlMDYgPSB5YXBlMDY7XG5cbmpzZmVhdE5leHQubW90aW9uX2VzdGltYXRvciA9IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3IgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbmVlZF9jbnQsIG1heF9jbnQsIGZyb21fc3ViLCB0b19zdWIpIHtcbiAgICAgICAgdmFyIG1heF90cnkgPSAxMDAwO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBzc2l0ZXIgPSAwLCBpZHhfaSA9IDAsIG9rID0gZmFsc2U7XG4gICAgICAgIGZvciAoOyBzc2l0ZXIgPCBtYXhfdHJ5OyArK3NzaXRlcikge1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnk7KSB7XG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZHhfaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFvaykge1xuICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeF9pID0gaW5kaWNlc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heF9jbnQpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeF9pID09IGluZGljZXNbal0pIHsgb2sgPSBmYWxzZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tX3N1YltpXSA9IGZyb21baWR4X2ldO1xuICAgICAgICAgICAgICAgIHRvX3N1YltpXSA9IHRvW2lkeF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWtlcm5lbC5jaGVja19zdWJzZXQoZnJvbV9zdWIsIHRvX3N1YiwgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzaXRlcisrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGkgPT0gbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeSk7XG4gICAgfVxuXG4gICAgZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgdGhyZXNoLCBlcnIsIG1hc2spIHtcbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwLCBpID0gMCwgZiA9IDA7XG4gICAgICAgIHZhciB0ID0gdGhyZXNoICogdGhyZXNoO1xuXG4gICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZiA9IGVycltpXSA8PSB0O1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOEMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlubGllcnNfbWF4ID0gLTEsIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBNLCBmcm9tLCB0bywgY291bnQsIHBhcmFtcy50aHJlc2gsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobnVtaW5saWVycyA+IE1hdGgubWF4KGlubGllcnNfbWF4LCBtb2RlbF9wb2ludHMgLSAxKSkge1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgaW5saWVyc19tYXggPSBudW1pbmxpZXJzO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcbiAgICAgICAgICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKChjb3VudCAtIG51bWlubGllcnMpIC8gY291bnQsIG5pdGVycyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsbWVkcyhwYXJhbXMsIGtlcm5lbCwgZnJvbSwgdG8sIGNvdW50LCBtb2RlbCwgbWFzaywgbWF4X2l0ZXJzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9tYXRoID0gbmV3IGpzZmVhdE5leHQubWF0aCgpO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuYWZmaW5lMmQgPWFmZmluZTJkO1xuXG5qc2ZlYXROZXh0LmhvbW9ncmFwaHkyZCA9IGhvbW9ncmFwaHkyZDtcblxuanNmZWF0TmV4dC5vcHRpY2FsX2Zsb3dfbGsgPSBjbGFzcyBvcHRpY2FsX2Zsb3dfbGsgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpXG4gICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2ID0gX2ltZ3Byb2Muc2NoYXJyX2Rlcml2YXRpdmVzO1xuICAgIH1cbiAgICB0cmFjayhwcmV2X3B5ciwgY3Vycl9weXIsIHByZXZfeHksIGN1cnJfeHksIGNvdW50LCB3aW5fc2l6ZSwgbWF4X2l0ZXIsIHN0YXR1cywgZXBzLCBtaW5fZWlnZW5fdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXIgPSAzMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN0YXR1cyA9PT0gXCJ1bmRlZmluZWRcIikgeyBzdGF0dXMgPSBuZXcgVWludDhBcnJheShjb3VudCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC4wMTsgfVxuICAgICAgICBpZiAodHlwZW9mIG1pbl9laWdlbl90aHJlc2hvbGQgPT09IFwidW5kZWZpbmVkXCIpIHsgbWluX2VpZ2VuX3RocmVzaG9sZCA9IDAuMDAwMTsgfVxuXG4gICAgICAgIHZhciBoYWxmX3dpbiA9ICh3aW5fc2l6ZSAtIDEpICogMC41O1xuICAgICAgICB2YXIgd2luX2FyZWEgPSAod2luX3NpemUgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICB2YXIgd2luX2FyZWEyID0gd2luX2FyZWEgPDwgMTtcbiAgICAgICAgdmFyIHByZXZfaW1ncyA9IHByZXZfcHlyLmRhdGEsIG5leHRfaW1ncyA9IGN1cnJfcHlyLmRhdGE7XG4gICAgICAgIHZhciBpbWdfcHJldiA9IHByZXZfaW1nc1swXS5kYXRhLCBpbWdfbmV4dCA9IG5leHRfaW1nc1swXS5kYXRhO1xuICAgICAgICB2YXIgdzAgPSBwcmV2X2ltZ3NbMF0uY29scywgaDAgPSBwcmV2X2ltZ3NbMF0ucm93cywgbHcgPSAwLCBsaCA9IDA7XG5cbiAgICAgICAgdmFyIGl3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYSA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2l3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYTIgPDwgMik7XG4gICAgICAgIHZhciBkZXJpdl9sZXZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaDAgKiAodzAgPDwgMSkpIDw8IDIpO1xuXG4gICAgICAgIHZhciBkZXJpdl9tID0gbmV3IG1hdHJpeF90KHcwLCBoMCwgSlNGRUFUX0NPTlNUQU5UUy5TMzJDMl90LCBkZXJpdl9sZXZfbm9kZS5kYXRhKTtcblxuICAgICAgICB2YXIgaXdpbl9idWYgPSBpd2luX25vZGUuaTMyO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbiA9IGRlcml2X2l3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9sZXYgPSBkZXJpdl9sZXZfbm9kZS5pMzI7XG5cbiAgICAgICAgdmFyIGRzdGVwID0gMCwgc3JjID0gMCwgZHNyYyA9IDAsIGlwdHIgPSAwLCBkaXB0ciA9IDAsIGpwdHIgPSAwO1xuICAgICAgICB2YXIgbGV2X3NjID0gMC4wLCBwcmV2X3ggPSAwLjAsIHByZXZfeSA9IDAuMCwgbmV4dF94ID0gMC4wLCBuZXh0X3kgPSAwLjA7XG4gICAgICAgIHZhciBwcmV2X2RlbHRhX3ggPSAwLjAsIHByZXZfZGVsdGFfeSA9IDAuMCwgZGVsdGFfeCA9IDAuMCwgZGVsdGFfeSA9IDAuMDtcbiAgICAgICAgdmFyIGlwcmV2X3ggPSAwLCBpcHJldl95ID0gMCwgaW5leHRfeCA9IDAsIGluZXh0X3kgPSAwO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCB4ID0gMCwgeSA9IDAsIGxldmVsID0gMCwgcHRpZCA9IDAsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgYnJkX3RsID0gMCwgYnJkX3IgPSAwLCBicmRfYiA9IDA7XG4gICAgICAgIHZhciBhID0gMC4wLCBiID0gMC4wLCBiMSA9IDAuMCwgYjIgPSAwLjA7XG5cbiAgICAgICAgLy8gZml4ZWQgcG9pbnQgbWF0aFxuICAgICAgICB2YXIgV19CSVRTMTQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzFtNSA9IFdfQklUUzQgLSA1O1xuICAgICAgICB2YXIgV19CSVRTMW01MSA9ICgxIDw8ICgoV19CSVRTMW01KSAtIDEpKTtcbiAgICAgICAgdmFyIFdfQklUUzE0XyA9ICgxIDw8IFdfQklUUzE0KTtcbiAgICAgICAgdmFyIFdfQklUUzQxID0gKDEgPDwgKChXX0JJVFM0KSAtIDEpKTtcbiAgICAgICAgdmFyIEZMVF9TQ0FMRSA9IDEuMCAvICgxIDw8IDIwKTtcbiAgICAgICAgdmFyIGl3MDAgPSAwLCBpdzAxID0gMCwgaXcxMCA9IDAsIGl3MTEgPSAwLCBpdmFsID0gMCwgaXh2YWwgPSAwLCBpeXZhbCA9IDA7XG4gICAgICAgIHZhciBBMTEgPSAwLjAsIEExMiA9IDAuMCwgQTIyID0gMC4wLCBEID0gMC4wLCBtaW5fZWlnID0gMC4wO1xuXG4gICAgICAgIHZhciBGTFRfRVBTSUxPTiA9IDAuMDAwMDAwMTE5MjA5Mjk7XG4gICAgICAgIGVwcyAqPSBlcHM7XG5cbiAgICAgICAgLy8gcmVzZXQgc3RhdHVzXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc3RhdHVzW2ldID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXhfbGV2ZWwgPSAocHJldl9weXIubGV2ZWxzIC0gMSkgfCAwO1xuICAgICAgICBsZXZlbCA9IG1heF9sZXZlbDtcblxuICAgICAgICBmb3IgKDsgbGV2ZWwgPj0gMDsgLS1sZXZlbCkge1xuICAgICAgICAgICAgbGV2X3NjID0gKDEuMCAvICgxIDw8IGxldmVsKSk7XG4gICAgICAgICAgICBsdyA9IHcwID4+IGxldmVsO1xuICAgICAgICAgICAgbGggPSBoMCA+PiBsZXZlbDtcbiAgICAgICAgICAgIGRzdGVwID0gbHcgPDwgMTtcbiAgICAgICAgICAgIGltZ19wcmV2ID0gcHJldl9pbWdzW2xldmVsXS5kYXRhO1xuICAgICAgICAgICAgaW1nX25leHQgPSBuZXh0X2ltZ3NbbGV2ZWxdLmRhdGE7XG5cbiAgICAgICAgICAgIGJyZF9yID0gKGx3IC0gd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgIGJyZF9iID0gKGxoIC0gd2luX3NpemUpIHwgMDtcblxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxldmVsIGRlcml2YXRpdmVzXG4gICAgICAgICAgICB0aGlzLnNjaGFycl9kZXJpdihwcmV2X2ltZ3NbbGV2ZWxdLCBkZXJpdl9tKTtcblxuICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBvaW50c1xuICAgICAgICAgICAgZm9yIChwdGlkID0gMDsgcHRpZCA8IGNvdW50OyArK3B0aWQpIHtcbiAgICAgICAgICAgICAgICBpID0gcHRpZCA8PCAxO1xuICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICBwcmV2X3ggPSBwcmV2X3h5W2ldICogbGV2X3NjO1xuICAgICAgICAgICAgICAgIHByZXZfeSA9IHByZXZfeHlbal0gKiBsZXZfc2M7XG5cbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gbWF4X2xldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IHByZXZfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gcHJldl95O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IGN1cnJfeHlbaV0gKiAyLjA7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSA9IGN1cnJfeHlbal0gKiAyLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3g7XG4gICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeTtcblxuICAgICAgICAgICAgICAgIHByZXZfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgaXByZXZfeCA9IHByZXZfeCB8IDA7XG4gICAgICAgICAgICAgICAgaXByZXZfeSA9IHByZXZfeSB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBib3JkZXIgY2hlY2tcbiAgICAgICAgICAgICAgICB4ID0gKGlwcmV2X3ggPD0gYnJkX3RsKSB8IChpcHJldl94ID49IGJyZF9yKSB8IChpcHJldl95IDw9IGJyZF90bCkgfCAoaXByZXZfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gKGluZXh0X3ggPD0gYnJkX3RsKSB8IChpbmV4dF94ID49IGJyZF9yKSB8IChpbmV4dF95IDw9IGJyZF90bCkgfCAoaW5leHRfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MDEgPSAoKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcbiAgICAgICAgICAgICAgICAgICAgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcHRyID0gKCh5ICsgaW5leHRfeSkgKiBsdyArIGluZXh0X3gpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsranB0ciwgKytpcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX25leHRbanB0cl0pICogaXcwMCArIChpbWdfbmV4dFtqcHRyICsgMV0pICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfbmV4dFtqcHRyICsgbHddKSAqIGl3MTAgKyAoaW1nX25leHRbanB0ciArIGx3ICsgMV0pICogaXcxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCAtIGl3aW5fYnVmW2lwdHJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYjEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICBiMiAqPSBGTFRfU0NBTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeCA9ICgoQTEyICogYjIgLSBBMjIgKiBiMSkgKiBEKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9ICgoQTEyICogYjEgLSBBMTEgKiBiMikgKiBEKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggKz0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ICs9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3ggKyBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeSArIGhhbGZfd2luO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95IDw9IGVwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA+IDAgJiYgTWF0aC5hYnMoZGVsdGFfeCArIHByZXZfZGVsdGFfeCkgPCAwLjAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkZWx0YV95ICsgcHJldl9kZWx0YV95KSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gLT0gZGVsdGFfeCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gLT0gZGVsdGFfeSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIHBvaW50cyBsb29wXG4gICAgICAgIH0gLy8gbGV2ZWxzIGxvb3BcblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2l3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9sZXZfbm9kZSk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdCwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tLCB0bykge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQywgQSwgQikge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMSwgTTEyLCBNMTMsXG4gICAgICAgIE0yMSwgTTIyLCBNMjMsXG4gICAgICAgIE0zMSwgTTMyLCBNMzMpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90eXBlIGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRyaXhfdCB7XG4gICAgY29uc3RydWN0b3IoYywgciwgX2RhdGFfdHlwZSwgX2RhdGFfYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKSB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyKSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYywgciwgY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHRocmVzaCwgZXBzLCBwcm9iKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdCAge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMsIGJ1ZmZlcikge1xuICAgICAgICAvL3N1cGVyKClcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsLTMsIDksNS8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLFxuICAgIDQsMiwgNywtMTIvKm1lYW4gKDEuMTI0NjFlLTA1KSwgY29ycmVsYXRpb24gKDAuMDQzNzU4NCkqLyxcbiAgICAtMTEsOSwgLTgsMi8qbWVhbiAoMy4zNzM4MmUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjE3NDA5KSovLFxuICAgIDcsLTEyLCAxMiwtMTMvKm1lYW4gKDUuNjIzMDNlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYzNjk3NykqLyxcbiAgICAyLC0xMywgMiwxMi8qbWVhbiAoMC4wMDAxMzQ5NTMpLCBjb3JyZWxhdGlvbiAoMC4wODUwOTkpKi8sXG4gICAgMSwtNywgMSw2LyptZWFuICgwLjAwMDUyODU2NSksIGNvcnJlbGF0aW9uICgwLjA4NTcxNzUpKi8sXG4gICAgLTIsLTEwLCAtMiwtNC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsLTEzLCAtMTEsLTgvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sXG4gICAgLTEzLC0zLCAtMTIsLTkvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLFxuICAgIDEwLDQsIDExLDkvKm1lYW4gKDAuMTIyMDY1KSwgY29ycmVsYXRpb24gKDAuMDkzMjg1KSovLFxuICAgIC0xMywtOCwgLTgsLTkvKm1lYW4gKDAuMTYyNzg3KSwgY29ycmVsYXRpb24gKDAuMDk0Mjc0OCkqLyxcbiAgICAtMTEsNywgLTksMTIvKm1lYW4gKDAuMjE1NjEpLCBjb3JyZWxhdGlvbiAoMC4wOTc0NDM4KSovLFxuICAgIDcsNywgMTIsNi8qbWVhbiAoMC4xNjA1ODMpLCBjb3JyZWxhdGlvbiAoMC4xMzAwNjQpKi8sXG4gICAgLTQsLTUsIC0zLDAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywyLCAtMTIsLTMvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sXG4gICAgLTksMCwgLTcsNS8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sXG4gICAgMTIsLTYsIDEyLC0xLyptZWFuICgwLjA2NzYyMjYpLCBjb3JyZWxhdGlvbiAoMC4xNjY4OSkqLyxcbiAgICAtMyw2LCAtMiwxMi8qbWVhbiAoMC4xNjY4NDcpLCBjb3JyZWxhdGlvbiAoMC4xNzE2ODIpKi8sXG4gICAgLTYsLTEzLCAtNCwtOC8qbWVhbiAoMC4xMDEyMTUpLCBjb3JyZWxhdGlvbiAoMC4xNzk3MTYpKi8sXG4gICAgMTEsLTEzLCAxMiwtOC8qbWVhbiAoMC4yMDA2NDEpLCBjb3JyZWxhdGlvbiAoMC4xOTIyNzkpKi8sXG4gICAgNCw3LCA1LDEvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLFxuICAgIDUsLTMsIDEwLC0zLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLyxcbiAgICAzLC03LCA2LDEyLyptZWFuICgwLjA3MDk5NjQpLCBjb3JyZWxhdGlvbiAoMC4yMTA4NzIpKi8sXG4gICAgLTgsLTcsIC02LC0yLyptZWFuICgwLjA5Mzk4MzQpLCBjb3JyZWxhdGlvbiAoMC4yMTI1ODkpKi8sXG4gICAgLTIsMTEsIC0xLC0xMC8qbWVhbiAoMC4xMjc3NzgpLCBjb3JyZWxhdGlvbiAoMC4yMDg2NikqLyxcbiAgICAtMTMsMTIsIC04LDEwLyptZWFuICgwLjE0NzgzKSwgY29ycmVsYXRpb24gKDAuMjA2MzU2KSovLFxuICAgIC03LDMsIC01LC0zLyptZWFuICgwLjE4MjE0MSksIGNvcnJlbGF0aW9uICgwLjE5ODk0MikqLyxcbiAgICAtNCwyLCAtMyw3LyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLFxuICAgIC0xMCwtMTIsIC02LDExLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sXG4gICAgNSwtMTIsIDYsLTcvKm1lYW4gKDAuMjIyMzEyKSwgY29ycmVsYXRpb24gKDAuMjMzMjQpKi8sXG4gICAgNSwtNiwgNywtMS8qbWVhbiAoMC4yMjkwODIpLCBjb3JyZWxhdGlvbiAoMC4yMzM4OSkqLyxcbiAgICAxLDAsIDQsLTUvKm1lYW4gKDAuMjQxNTc3KSwgY29ycmVsYXRpb24gKDAuMjE1Mjg2KSovLFxuICAgIDksMTEsIDExLC0xMy8qbWVhbiAoMC4wMDMzODUwNyksIGNvcnJlbGF0aW9uICgwLjI1MTM3MykqLyxcbiAgICA0LDcsIDQsMTIvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsLTEsIDQsNC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sXG4gICAgLTQsLTEyLCAtMiw3LyptZWFuICgwLjE4Mjc3MSksIGNvcnJlbGF0aW9uICgwLjI0NDg2NykqLyxcbiAgICAtOCwtNSwgLTcsLTEwLyptZWFuICgwLjE4Njg5OCksIGNvcnJlbGF0aW9uICgwLjIzOTAxKSovLFxuICAgIDQsMTEsIDksMTIvKm1lYW4gKDAuMjI2MjI2KSwgY29ycmVsYXRpb24gKDAuMjU4MjU1KSovLFxuICAgIDAsLTgsIDEsLTEzLyptZWFuICgwLjA4OTc4ODYpLCBjb3JyZWxhdGlvbiAoMC4yNzQ4MjcpKi8sXG4gICAgLTEzLC0yLCAtOCwyLyptZWFuICgwLjE0ODc3NCksIGNvcnJlbGF0aW9uICgwLjI4MDY1KSovLFxuICAgIC0zLC0yLCAtMiwzLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLyxcbiAgICAtNiw5LCAtNCwtOS8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sXG4gICAgOCwxMiwgMTAsNy8qbWVhbiAoMC4yMjUzMzcpLCBjb3JyZWxhdGlvbiAoMC4yODI4NTEpKi8sXG4gICAgMCw5LCAxLDMvKm1lYW4gKDAuMjI2Njg3KSwgY29ycmVsYXRpb24gKDAuMjc4NzM0KSovLFxuICAgIDcsLTUsIDExLC0xMC8qbWVhbiAoMC4wMDY5Mzg4MiksIGNvcnJlbGF0aW9uICgwLjMwNTE2MSkqLyxcbiAgICAtMTMsLTYsIC0xMSwwLyptZWFuICgwLjAyMjcyODMpLCBjb3JyZWxhdGlvbiAoMC4zMDAxODEpKi8sXG4gICAgMTAsNywgMTIsMS8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwtMywgLTYsMTIvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLFxuICAgIDEwLC05LCAxMiwtNC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sXG4gICAgLTEzLDgsIC04LC0xMi8qbWVhbiAoMC4xNDkyMDIpLCBjb3JyZWxhdGlvbiAoMC4zMDg5MTgpKi8sXG4gICAgLTEzLDAsIC04LC00LyptZWFuICgwLjE2MDkwOSksIGNvcnJlbGF0aW9uICgwLjMxMDAxMykqLyxcbiAgICAzLDMsIDcsOC8qbWVhbiAoMC4xNzc3NTUpLCBjb3JyZWxhdGlvbiAoMC4zMDkzOTQpKi8sXG4gICAgNSw3LCAxMCwtNy8qbWVhbiAoMC4yMTIzMzcpLCBjb3JyZWxhdGlvbiAoMC4zMTAzMTUpKi8sXG4gICAgLTEsNywgMSwtMTIvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLFxuICAgIDMsLTEwLCA1LDYvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLFxuICAgIDIsLTQsIDMsLTEwLyptZWFuICgwLjAwNDk0ODI3KSwgY29ycmVsYXRpb24gKDAuMzQ0OTQ4KSovLFxuICAgIC0xMywwLCAtMTMsNS8qbWVhbiAoMC4wNTQ5MTQ1KSwgY29ycmVsYXRpb24gKDAuMzQ0Njc1KSovLFxuICAgIC0xMywtNywgLTEyLDEyLyptZWFuICgwLjEwMzM4NSksIGNvcnJlbGF0aW9uICgwLjM0MjcxNSkqLyxcbiAgICAtMTMsMywgLTExLDgvKm1lYW4gKDAuMTM0MjIyKSwgY29ycmVsYXRpb24gKDAuMzIyOTIyKSovLFxuICAgIC03LDEyLCAtNCw3LyptZWFuICgwLjE1MzI4NCksIGNvcnJlbGF0aW9uICgwLjMzNzA2MSkqLyxcbiAgICA2LC0xMCwgMTIsOC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sXG4gICAgLTksLTEsIC03LC02LyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLFxuICAgIC0yLC01LCAwLDEyLyptZWFuICgwLjIwMTUxOCksIGNvcnJlbGF0aW9uICgwLjM0MDYzNSkqLyxcbiAgICAtMTIsNSwgLTcsNS8qbWVhbiAoMC4yMDc4MDUpLCBjb3JyZWxhdGlvbiAoMC4zMzU2MzEpKi8sXG4gICAgMywtMTAsIDgsLTEzLyptZWFuICgwLjIyNDQzOCksIGNvcnJlbGF0aW9uICgwLjM0NTA0KSovLFxuICAgIC03LC03LCAtNCw1LyptZWFuICgwLjIzOTM2MSksIGNvcnJlbGF0aW9uICgwLjMzODA1MykqLyxcbiAgICAtMywtMiwgLTEsLTcvKm1lYW4gKDAuMjQwNzQ0KSwgY29ycmVsYXRpb24gKDAuMzQ0MzIyKSovLFxuICAgIDIsOSwgNSwtMTEvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sXG4gICAgLTExLC0xMywgLTUsLTEzLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLyxcbiAgICAtMSw2LCAwLC0xLyptZWFuICgwLjI0NzU3MSksIGNvcnJlbGF0aW9uICgwLjM0MzY4NCkqLyxcbiAgICA1LC0zLCA1LDIvKm1lYW4gKDAuMDAwNjk3MjU2KSwgY29ycmVsYXRpb24gKDAuMzU3MjY1KSovLFxuICAgIC00LC0xMywgLTQsMTIvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC4zNzM4MjcpKi8sXG4gICAgLTksLTYsIC05LDYvKm1lYW4gKDAuMDEyNjg1NiksIGNvcnJlbGF0aW9uICgwLjM3MzkzOCkqLyxcbiAgICAtMTIsLTEwLCAtOCwtNC8qbWVhbiAoMC4wMTUyNDk3KSwgY29ycmVsYXRpb24gKDAuMzY0MjM3KSovLFxuICAgIDEwLDIsIDEyLC0zLyptZWFuICgwLjAyOTk5MzMpLCBjb3JyZWxhdGlvbiAoMC4zNDUyOTIpKi8sXG4gICAgNywxMiwgMTIsMTIvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLyxcbiAgICAtNywtMTMsIC02LDUvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLyxcbiAgICAtNCw5LCAtMyw0LyptZWFuICgwLjA5OTg2NSksIGNvcnJlbGF0aW9uICgwLjM3MjI3NikqLyxcbiAgICA3LC0xLCAxMiwyLyptZWFuICgwLjExNzA4MyksIGNvcnJlbGF0aW9uICgwLjM2NDUyOSkqLyxcbiAgICAtNyw2LCAtNSwxLyptZWFuICgwLjEyNjEyNSksIGNvcnJlbGF0aW9uICgwLjM2OTYwNikqLyxcbiAgICAtMTMsMTEsIC0xMiw1LyptZWFuICgwLjEzMDM2NCksIGNvcnJlbGF0aW9uICgwLjM1ODUwMikqLyxcbiAgICAtMyw3LCAtMiwtNi8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC4zNzU1MzEpKi8sXG4gICAgNywtOCwgMTIsLTcvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLFxuICAgIC0xMywtNywgLTExLC0xMi8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sXG4gICAgMSwtMywgMTIsMTIvKm1lYW4gKDAuMTgzMzc4KSwgY29ycmVsYXRpb24gKDAuMzcxOTE2KSovLFxuICAgIDIsLTYsIDMsMC8qbWVhbiAoMC4yMjg3MTEpLCBjb3JyZWxhdGlvbiAoMC4zNzE3NjEpKi8sXG4gICAgLTQsMywgLTIsLTEzLyptZWFuICgwLjI0NzIxMSksIGNvcnJlbGF0aW9uICgwLjM2NDA2MykqLyxcbiAgICAtMSwtMTMsIDEsOS8qbWVhbiAoMC4yNDkzMjUpLCBjb3JyZWxhdGlvbiAoMC4zNzgxMzkpKi8sXG4gICAgNywxLCA4LC02LyptZWFuICgwLjAwMDY1MjI3MiksIGNvcnJlbGF0aW9uICgwLjQxMTY4MikqLyxcbiAgICAxLC0xLCAzLDEyLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLFxuICAgIDksMSwgMTIsNi8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLFxuICAgIC0xLC05LCAtMSwzLyptZWFuICgwLjAzNjQ0ODUpLCBjb3JyZWxhdGlvbiAoMC40MTA3NTIpKi8sXG4gICAgLTEzLC0xMywgLTEwLDUvKm1lYW4gKDAuMDM3NjA2OCksIGNvcnJlbGF0aW9uICgwLjM5ODM3NCkqLyxcbiAgICA3LDcsIDEwLDEyLyptZWFuICgwLjA0MjQyMDIpLCBjb3JyZWxhdGlvbiAoMC40MDU2NjMpKi8sXG4gICAgMTIsLTUsIDEyLDkvKm1lYW4gKDAuMDk0MjY0NSksIGNvcnJlbGF0aW9uICgwLjQxMDQyMikqLyxcbiAgICA2LDMsIDcsMTEvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LC0xMywgNiwxMC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sXG4gICAgMiwtMTIsIDIsMy8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC40MTYwNzYpKi8sXG4gICAgMyw4LCA0LC02LyptZWFuICgwLjE2NTA4MSksIGNvcnJlbGF0aW9uICgwLjQxNzU2OSkqLyxcbiAgICAyLDYsIDEyLC0xMy8qbWVhbiAoMC4xNzE4NzQpLCBjb3JyZWxhdGlvbiAoMC40MDg0NzEpKi8sXG4gICAgOSwtMTIsIDEwLDMvKm1lYW4gKDAuMTc1MTQ2KSwgY29ycmVsYXRpb24gKDAuNDEyOTYpKi8sXG4gICAgLTgsNCwgLTcsOS8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLDEyLCAtNCwtNi8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sXG4gICAgMSwxMiwgMiwtOC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sXG4gICAgNiwtOSwgNywtNC8qbWVhbiAoMC4xOTI2NjgpLCBjb3JyZWxhdGlvbiAoMC4zOTQ3NzEpKi8sXG4gICAgMiwzLCAzLC0yLyptZWFuICgwLjIwMDE1NyksIGNvcnJlbGF0aW9uICgwLjQwODMwMykqLyxcbiAgICA2LDMsIDExLDAvKm1lYW4gKDAuMjA0NTg4KSwgY29ycmVsYXRpb24gKDAuNDExNzYyKSovLFxuICAgIDMsLTMsIDgsLTgvKm1lYW4gKDAuMjA1OTA0KSwgY29ycmVsYXRpb24gKDAuNDE2Mjk0KSovLFxuICAgIDcsOCwgOSwzLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLyxcbiAgICAtMTEsLTUsIC02LC00LyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLyxcbiAgICAtMTAsMTEsIC01LDEwLyptZWFuICgwLjI0NzY3MiksIGNvcnJlbGF0aW9uICgwLjQxMzM5MikqLyxcbiAgICAtNSwtOCwgLTMsMTIvKm1lYW4gKDAuMjQ3NzQpLCBjb3JyZWxhdGlvbiAoMC40MTE0MTYpKi8sXG4gICAgLTEwLDUsIC05LDAvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC40NTQwMDMpKi8sXG4gICAgOCwtMSwgMTIsLTYvKm1lYW4gKDAuMDI5MzYzNSksIGNvcnJlbGF0aW9uICgwLjQ1NTM2OCkqLyxcbiAgICA0LC02LCA2LC0xMS8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwxMiwgLTgsNy8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLFxuICAgIDQsLTIsIDYsNy8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sXG4gICAgLTIsMCwgLTIsMTIvKm1lYW4gKDAuMDUyNTk3OCksIGNvcnJlbGF0aW9uICgwLjQ0MzM4KSovLFxuICAgIC01LC04LCAtNSwyLyptZWFuICgwLjA2Mjk2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTcwOTYpKi8sXG4gICAgNywtNiwgMTAsMTIvKm1lYW4gKDAuMDY1Mzg0NiksIGNvcnJlbGF0aW9uICgwLjQ0NTYyMykqLyxcbiAgICAtOSwtMTMsIC04LC04LyptZWFuICgwLjA4NTg3NDkpLCBjb3JyZWxhdGlvbiAoMC40NDk3ODkpKi8sXG4gICAgLTUsLTEzLCAtNSwtMi8qbWVhbiAoMC4xMjI0MDIpLCBjb3JyZWxhdGlvbiAoMC40NTAyMDEpKi8sXG4gICAgOCwtOCwgOSwtMTMvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLFxuICAgIC05LC0xMSwgLTksMC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sXG4gICAgMSwtOCwgMSwtMi8qbWVhbiAoMC4xMzI0NjcpLCBjb3JyZWxhdGlvbiAoMC40NDAxMzMpKi8sXG4gICAgNywtNCwgOSwxLyptZWFuICgwLjEzMjY5MiksIGNvcnJlbGF0aW9uICgwLjQ1NCkqLyxcbiAgICAtMiwxLCAtMSwtNC8qbWVhbiAoMC4xMzU2OTUpLCBjb3JyZWxhdGlvbiAoMC40NTU3MzkpKi8sXG4gICAgMTEsLTYsIDEyLC0xMS8qbWVhbiAoMC4xNDI5MDQpLCBjb3JyZWxhdGlvbiAoMC40NDYxMTQpKi8sXG4gICAgLTEyLC05LCAtNiw0LyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLyxcbiAgICAzLDcsIDcsMTIvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLFxuICAgIDUsNSwgMTAsOC8qbWVhbiAoMC4xNTI5MDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMzYpKi8sXG4gICAgMCwtNCwgMiw4LyptZWFuICgwLjE2NzA4MyksIGNvcnJlbGF0aW9uICgwLjQ1OTMxNSkqLyxcbiAgICAtOSwxMiwgLTUsLTEzLyptZWFuICgwLjE3MzIzNCksIGNvcnJlbGF0aW9uICgwLjQ1NDcwNikqLyxcbiAgICAwLDcsIDIsMTIvKm1lYW4gKDAuMTgzMTIpLCBjb3JyZWxhdGlvbiAoMC40MzM4NTUpKi8sXG4gICAgLTEsMiwgMSw3LyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLyxcbiAgICA1LDExLCA3LC05LyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLyxcbiAgICAzLDUsIDYsLTgvKm1lYW4gKDAuMTg4OTY4KSwgY29ycmVsYXRpb24gKDAuNDU1ODA4KSovLFxuICAgIC0xMywtNCwgLTgsOS8qbWVhbiAoMC4xOTE2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTkxMjgpKi8sXG4gICAgLTUsOSwgLTMsLTMvKm1lYW4gKDAuMTkzMTk2KSwgY29ycmVsYXRpb24gKDAuNDU4MzY0KSovLFxuICAgIC00LC03LCAtMywtMTIvKm1lYW4gKDAuMTk2NTM2KSwgY29ycmVsYXRpb24gKDAuNDU1NzgyKSovLFxuICAgIDYsNSwgOCwwLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsNiwgLTYsMTIvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLFxuICAgIC0xMyw2LCAtNSwtMi8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sXG4gICAgMSwtMTAsIDMsMTAvKm1lYW4gKDAuMjExNzE4KSwgY29ycmVsYXRpb24gKDAuNDQwNjA2KSovLFxuICAgIDQsMSwgOCwtNC8qbWVhbiAoMC4yMTMwMzQpLCBjb3JyZWxhdGlvbiAoMC40NDMxNzcpKi8sXG4gICAgLTIsLTIsIDIsLTEzLyptZWFuICgwLjIzNDMzNCksIGNvcnJlbGF0aW9uICgwLjQ1NTMwNCkqLyxcbiAgICAyLC0xMiwgMTIsMTIvKm1lYW4gKDAuMjM1Njg0KSwgY29ycmVsYXRpb24gKDAuNDQzNDM2KSovLFxuICAgIC0yLC0xMywgMCwtNi8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sXG4gICAgNCwxLCA5LDMvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sXG4gICAgLTYsLTEwLCAtMywtNS8qbWVhbiAoMC4yNDg0NTkpLCBjb3JyZWxhdGlvbiAoMC40Mzk2MjEpKi8sXG4gICAgLTMsLTEzLCAtMSwxLyptZWFuICgwLjI0OTUwNSksIGNvcnJlbGF0aW9uICgwLjQ1NjY2NikqLyxcbiAgICA3LDUsIDEyLC0xMS8qbWVhbiAoMC4wMDExOTIwOCksIGNvcnJlbGF0aW9uICgwLjQ5NTQ2NikqLyxcbiAgICA0LC0yLCA1LC03LyptZWFuICgwLjAwMzcyMjQ1KSwgY29ycmVsYXRpb24gKDAuNDg0MjE0KSovLFxuICAgIC0xMyw5LCAtOSwtNS8qbWVhbiAoMC4wMDc0MTExNiksIGNvcnJlbGF0aW9uICgwLjQ5OTg1NCkqLyxcbiAgICA3LDEsIDgsNi8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLFxuICAgIDcsLTgsIDcsNi8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLFxuICAgIC03LC00LCAtNywxLyptZWFuICgwLjAyMzM4MDYpLCBjb3JyZWxhdGlvbiAoMC40OTY1NjgpKi8sXG4gICAgLTgsMTEsIC03LC04LyptZWFuICgwLjAyMzY1MDUpLCBjb3JyZWxhdGlvbiAoMC40ODk3MTkpKi8sXG4gICAgLTEzLDYsIC0xMiwtOC8qbWVhbiAoMC4wMjY4NzgxKSwgY29ycmVsYXRpb24gKDAuNTAzNDg3KSovLFxuICAgIDIsNCwgMyw5LyptZWFuICgwLjAzMjMzMjQpLCBjb3JyZWxhdGlvbiAoMC41MDE5MzgpKi8sXG4gICAgMTAsLTUsIDEyLDMvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwtNSwgLTYsNy8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLFxuICAgIDgsLTMsIDksLTgvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLyxcbiAgICAyLC0xMiwgMiw4LyptZWFuICgwLjA2MTY2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTY2NDIpKi8sXG4gICAgLTExLC0yLCAtMTAsMy8qbWVhbiAoMC4wNjI3NzU1KSwgY29ycmVsYXRpb24gKDAuNDk4NTYzKSovLFxuICAgIC0xMiwtMTMsIC03LC05LyptZWFuICgwLjA4Mjk2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTU0OTEpKi8sXG4gICAgLTExLDAsIC0xMCwtNS8qbWVhbiAoMC4wODQzMzQyKSwgY29ycmVsYXRpb24gKDAuNDg3MTQ2KSovLFxuICAgIDUsLTMsIDExLDgvKm1lYW4gKDAuMDkyOTkzNyksIGNvcnJlbGF0aW9uICgwLjUwMjMxNSkqLyxcbiAgICAtMiwtMTMsIC0xLDEyLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLFxuICAgIC0xLC04LCAwLDkvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLFxuICAgIC0xMywtMTEsIC0xMiwtNS8qbWVhbiAoMC4xMzYyNjkpLCBjb3JyZWxhdGlvbiAoMC40OTg3NzEpKi8sXG4gICAgLTEwLC0yLCAtMTAsMTEvKm1lYW4gKDAuMTQyMTczKSwgY29ycmVsYXRpb24gKDAuNDk4NzE0KSovLFxuICAgIC0zLDksIC0yLC0xMy8qbWVhbiAoMC4xNDQxNDEpLCBjb3JyZWxhdGlvbiAoMC40OTE5NzMpKi8sXG4gICAgMiwtMywgMywyLyptZWFuICgwLjE0ODkyKSwgY29ycmVsYXRpb24gKDAuNTAwNzgyKSovLFxuICAgIC05LC0xMywgLTQsMC8qbWVhbiAoMC4xNTAzNzEpLCBjb3JyZWxhdGlvbiAoMC40OTgyMTEpKi8sXG4gICAgLTQsNiwgLTMsLTEwLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLyxcbiAgICAtNCwxMiwgLTIsLTcvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLFxuICAgIC02LC0xMSwgLTQsOS8qbWVhbiAoMC4xNTc0OSksIGNvcnJlbGF0aW9uICgwLjQ5OTIyMikqLyxcbiAgICA2LC0zLCA2LDExLyptZWFuICgwLjE1OTIxMSksIGNvcnJlbGF0aW9uICgwLjUwMzgyMSkqLyxcbiAgICAtMTMsMTEsIC01LDUvKm1lYW4gKDAuMTYyNDI3KSwgY29ycmVsYXRpb24gKDAuNTAxOTA3KSovLFxuICAgIDExLDExLCAxMiw2LyptZWFuICgwLjE2NjUyKSwgY29ycmVsYXRpb24gKDAuNDk3NjMyKSovLFxuICAgIDcsLTUsIDEyLC0yLyptZWFuICgwLjE2OTE0MSksIGNvcnJlbGF0aW9uICgwLjQ4NDQ3NCkqLyxcbiAgICAtMSwxMiwgMCw3LyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLyxcbiAgICAtNCwtOCwgLTMsLTIvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLFxuICAgIC03LDEsIC02LDcvKm1lYW4gKDAuMTc1KSwgY29ycmVsYXRpb24gKDAuNTAwMDI0KSovLFxuICAgIC0xMywtMTIsIC04LC0xMy8qbWVhbiAoMC4xNzU4NjYpLCBjb3JyZWxhdGlvbiAoMC40OTc1MjMpKi8sXG4gICAgLTcsLTIsIC02LC04LyptZWFuICgwLjE3ODI3MyksIGNvcnJlbGF0aW9uICgwLjUwMTg1NCkqLyxcbiAgICAtOCw1LCAtNiwtOS8qbWVhbiAoMC4xODExMDcpLCBjb3JyZWxhdGlvbiAoMC40OTQ4ODgpKi8sXG4gICAgLTUsLTEsIC00LDUvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMyw3LCAtOCwxMC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sXG4gICAgMSw1LCA1LC0xMy8qbWVhbiAoMC4xOTk3MyksIGNvcnJlbGF0aW9uICgwLjQ5OTc1OSkqLyxcbiAgICAxLDAsIDEwLC0xMy8qbWVhbiAoMC4yMDQ0NjUpLCBjb3JyZWxhdGlvbiAoMC40OTg3MykqLyxcbiAgICA5LDEyLCAxMCwtMS8qbWVhbiAoMC4yMDkzMzQpLCBjb3JyZWxhdGlvbiAoMC40OTA2MykqLyxcbiAgICA1LC04LCAxMCwtOS8qbWVhbiAoMC4yMTExMzQpLCBjb3JyZWxhdGlvbiAoMC41MDMwMTEpKi8sXG4gICAgLTEsMTEsIDEsLTEzLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwtMywgLTYsMi8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sXG4gICAgLTEsLTEwLCAxLDEyLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLyxcbiAgICAtMTMsMSwgLTgsLTEwLyptZWFuICgwLjIxMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5Nzg2KSovLFxuICAgIDgsLTExLCAxMCwtNi8qbWVhbiAoMC4yMTQxNTkpLCBjb3JyZWxhdGlvbiAoMC40ODgyNDYpKi8sXG4gICAgMiwtMTMsIDMsLTYvKm1lYW4gKDAuMjE2OTkzKSwgY29ycmVsYXRpb24gKDAuNTAyODcpKi8sXG4gICAgNywtMTMsIDEyLC05LyptZWFuICgwLjIyMzYzOSksIGNvcnJlbGF0aW9uICgwLjQ3MDUwMikqLyxcbiAgICAtMTAsLTEwLCAtNSwtNy8qbWVhbiAoMC4yMjQwODkpLCBjb3JyZWxhdGlvbiAoMC41MDA4NTIpKi8sXG4gICAgLTEwLC04LCAtOCwtMTMvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLFxuICAgIDQsLTYsIDgsNS8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLyxcbiAgICAzLDEyLCA4LC0xMy8qbWVhbiAoMC4yMzMzNzgpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjUpKi8sXG4gICAgLTQsMiwgLTMsLTMvKm1lYW4gKDAuMjM0MzIzKSwgY29ycmVsYXRpb24gKDAuNDc2NjkyKSovLFxuICAgIDUsLTEzLCAxMCwtMTIvKm1lYW4gKDAuMjM2MzkyKSwgY29ycmVsYXRpb24gKDAuNDc1NDYyKSovLFxuICAgIDQsLTEzLCA1LC0xLyptZWFuICgwLjIzNjg0MiksIGNvcnJlbGF0aW9uICgwLjUwNDEzMikqLyxcbiAgICAtOSw5LCAtNCwzLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLyxcbiAgICAwLDMsIDMsLTkvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sXG4gICAgLTEyLDEsIC02LDEvKm1lYW4gKDAuMjQzMjk3KSwgY29ycmVsYXRpb24gKDAuNDg5NDQ3KSovLFxuICAgIDMsMiwgNCwtOC8qbWVhbiAoMC4wMDE1NTE5NiksIGNvcnJlbGF0aW9uICgwLjU1MzQ5NikqLyxcbiAgICAtMTAsLTEwLCAtMTAsOS8qbWVhbiAoMC4wMDIzOTU0MSksIGNvcnJlbGF0aW9uICgwLjU0Mjk3KSovLFxuICAgIDgsLTEzLCAxMiwxMi8qbWVhbiAoMC4wMDM0NDEzKSwgY29ycmVsYXRpb24gKDAuNTQ0MzYxKSovLFxuICAgIC04LC0xMiwgLTYsLTUvKm1lYW4gKDAuMDAzNTY1KSwgY29ycmVsYXRpb24gKDAuNTUxMjI1KSovLFxuICAgIDIsMiwgMyw3LyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsNiwgMTEsLTgvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sXG4gICAgNiw4LCA4LC0xMi8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLFxuICAgIC03LDEwLCAtNiw1LyptZWFuICgwLjAxMDIyMjcpLCBjb3JyZWxhdGlvbiAoMC41MzM2MzUpKi8sXG4gICAgLTMsLTksIC0zLDkvKm1lYW4gKDAuMDExMDIxMSksIGNvcnJlbGF0aW9uICgwLjU0MzEyMSkqLyxcbiAgICAtMSwtMTMsIC0xLDUvKm1lYW4gKDAuMDExMzQ3MyksIGNvcnJlbGF0aW9uICgwLjU1MDE3MykqLyxcbiAgICAtMywtNywgLTMsNC8qbWVhbiAoMC4wMTQwOTEzKSwgY29ycmVsYXRpb24gKDAuNTU0Nzc0KSovLFxuICAgIC04LC0yLCAtOCwzLyptZWFuICgwLjAxNzA0OSksIGNvcnJlbGF0aW9uICgwLjU1NDYxKSovLFxuICAgIDQsMiwgMTIsMTIvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sXG4gICAgMiwtNSwgMywxMS8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLFxuICAgIDYsLTksIDExLC0xMy8qbWVhbiAoMC4wMjkxNjEpLCBjb3JyZWxhdGlvbiAoMC41NDYyOTUpKi8sXG4gICAgMywtMSwgNywxMi8qbWVhbiAoMC4wMzAzMDgxKSwgY29ycmVsYXRpb24gKDAuNTQ4NTk5KSovLFxuICAgIDExLC0xLCAxMiw0LyptZWFuICgwLjAzNTUxNTEpLCBjb3JyZWxhdGlvbiAoMC41MjM5NDMpKi8sXG4gICAgLTMsMCwgLTMsNi8qbWVhbiAoMC4wNDE3OTA0KSwgY29ycmVsYXRpb24gKDAuNTQzMzk1KSovLFxuICAgIDQsLTExLCA0LDEyLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwtNCwgMiwxLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sXG4gICAgLTEwLC02LCAtOCwxLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sXG4gICAgLTEzLDcsIC0xMSwxLyptZWFuICgwLjA1OTczOTEpLCBjb3JyZWxhdGlvbiAoMC41NTA1MjQpKi8sXG4gICAgLTEzLDEyLCAtMTEsLTEzLyptZWFuICgwLjA2MDg5NzQpLCBjb3JyZWxhdGlvbiAoMC41NTM4MykqLyxcbiAgICA2LDAsIDExLC0xMy8qbWVhbiAoMC4wNjUxMjYpLCBjb3JyZWxhdGlvbiAoMC41NTIwMDYpKi8sXG4gICAgMCwtMSwgMSw0LyptZWFuICgwLjA3NDIyNCksIGNvcnJlbGF0aW9uICgwLjU0NjM3MikqLyxcbiAgICAtMTMsMywgLTksLTIvKm1lYW4gKDAuMDgwODU5MiksIGNvcnJlbGF0aW9uICgwLjU1NDg3NSkqLyxcbiAgICAtOSw4LCAtNiwtMy8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLFxuICAgIC0xMywtNiwgLTgsLTIvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLyxcbiAgICA1LC05LCA4LDEwLyptZWFuICgwLjA5NDk4NDMpLCBjb3JyZWxhdGlvbiAoMC41NTQ2OTQpKi8sXG4gICAgMiw3LCAzLC05LyptZWFuICgwLjA5OTQxNTIpLCBjb3JyZWxhdGlvbiAoMC41NTA5NzkpKi8sXG4gICAgLTEsLTYsIC0xLC0xLyptZWFuICgwLjEwMDQ1KSwgY29ycmVsYXRpb24gKDAuNTUyNzE0KSovLFxuICAgIDksNSwgMTEsLTIvKm1lYW4gKDAuMTAwNjg2KSwgY29ycmVsYXRpb24gKDAuNTUyNTk0KSovLFxuICAgIDExLC0zLCAxMiwtOC8qbWVhbiAoMC4xMDEwOTEpLCBjb3JyZWxhdGlvbiAoMC41MzIzOTQpKi8sXG4gICAgMywwLCAzLDUvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLFxuICAgIC0xLDQsIDAsMTAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLFxuICAgIDMsLTYsIDQsNS8qbWVhbiAoMC4xMTA3ODUpLCBjb3JyZWxhdGlvbiAoMC41NDA0OTEpKi8sXG4gICAgLTEzLDAsIC0xMCw1LyptZWFuICgwLjExMjc5OCksIGNvcnJlbGF0aW9uICgwLjUzNjU4MikqLyxcbiAgICA1LDgsIDEyLDExLyptZWFuICgwLjExNDE4MSksIGNvcnJlbGF0aW9uICgwLjU1NTc5MykqLyxcbiAgICA4LDksIDksLTYvKm1lYW4gKDAuMTE3NDMxKSwgY29ycmVsYXRpb24gKDAuNTUzNzYzKSovLFxuICAgIDcsLTQsIDgsLTEyLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLyxcbiAgICAtMTAsNCwgLTEwLDkvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sXG4gICAgNywzLCAxMiw0LyptZWFuICgwLjEyMjU4MiksIGNvcnJlbGF0aW9uICgwLjU1NTgyNSkqLyxcbiAgICA5LC03LCAxMCwtMi8qbWVhbiAoMC4xMjQ5NzgpLCBjb3JyZWxhdGlvbiAoMC41NDk4NDYpKi8sXG4gICAgNywwLCAxMiwtMi8qbWVhbiAoMC4xMjcwMDIpLCBjb3JyZWxhdGlvbiAoMC41Mzc0NTIpKi8sXG4gICAgLTEsLTYsIDAsLTExLyptZWFuICgwLjEyNzE0OCksIGNvcnJlbGF0aW9uICgwLjU0NzQwMSkqL1xuXTsiLCJleHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChzcmMsIGRzdCwgYW5nbGUsIHB4LCBweSwgcHNpemUsIEgsIGltZ3Byb2MpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3Byb2Mud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgcmFkaXVzLCBweXJhbWlkX2xldmVscykge1xuICAgICAgICBpZiAodHlwZW9mIHB5cmFtaWRfbGV2ZWxzID09PSBcInVuZGVmaW5lZFwiKSB7IHB5cmFtaWRfbGV2ZWxzID0gMTsgfVxuICAgICAgICB2YXIgaTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5taW4ocmFkaXVzLCA3KTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgocmFkaXVzLCAzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHB5cmFtaWRfbGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfdGFibGVzW2ldID0gbmV3IGxldl90YWJsZV90KHdpZHRoID4+IGksIGhlaWdodCA+PiBpLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYywgcG9pbnRzLCBib3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmVjb21wdXRlX2RpcmVjdGlvbnMoc3RlcCwgZGlycywgUikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCwgeTtcblxuICAgIHggPSBSO1xuICAgIGZvciAoeSA9IDA7IHkgPCB4OyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4LS07IHggPCB5ICYmIHggPj0gMDsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHktLTsgeSA+PSAwOyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB5ID4geDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB4IDwgLXk7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5Kys7IHkgPCAwOyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYiwgb2ZmLCBzdGVwKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwLCBvZmYsIHYsIHN0ZXAsIG5laWdoYm9yaG9vZCkge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEksIHgsIFNjb3JlcywgSW0sIElwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19uYikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgY29uc3RydWN0b3IodywgaCwgcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSAnLi95YXBlMDZfdXRpbHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlMDYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjLCBkc3QsIHcsIGgsIER4eCwgRHl5LCBzeCxzeSwgZXgsZXkpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmMsIG9mZiwgdHIsIER4eCwgRHl5LCBEeHksIER5eCkge1xuICAgIHZhciBJeHggPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER4eF0gKyBzcmNbb2ZmIC0gRHh4XTtcbiAgICB2YXIgSXl5ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeXldICsgc3JjW29mZiAtIER5eV07XG4gICAgdmFyIEl4eSA9IHNyY1tvZmYgKyBEeHldICsgc3JjW29mZiAtIER4eV0gLSBzcmNbb2ZmICsgRHl4XSAtIHNyY1tvZmYgLSBEeXhdO1xuICAgIHZhciBzcXJ0X2RlbHRhID0gKCBNYXRoLnNxcnQoKChJeHggLSBJeXkpICogKEl4eCAtIEl5eSkgKyA0ICogSXh5ICogSXh5KSApICl8MDtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmFicyh0ciAtIHNxcnRfZGVsdGEpLCBNYXRoLmFicygtKHRyICsgc3FydF9kZWx0YSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0LmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsIlU4QzFfdCIsIlU4QzNfdCIsIlU4QzRfdCIsIkYzMkMxX3QiLCJGMzJDMl90IiwiUzMyQzFfdCIsIlMzMkMyX3QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIl9jb252b2xfdTgiLCJidWYiLCJzcmNfZCIsImRzdF9kIiwidyIsImgiLCJmaWx0ZXIiLCJrZXJuZWxfc2l6ZSIsImhhbGZfa2VybmVsIiwiaiIsImsiLCJzcCIsImRwIiwic3VtIiwic3VtMSIsInN1bTIiLCJzdW0zIiwiZjAiLCJmayIsIncyIiwidzMiLCJ3NCIsIk1hdGgiLCJtaW4iLCJfY29udm9sIiwiX3Jlc2FtcGxlX3U4Iiwic3JjIiwiZHN0IiwibnciLCJuaCIsInhvZnNfY291bnQiLCJjaCIsImNoYW5uZWwiLCJjb2xzIiwicm93cyIsImRhdGEiLCJzY2FsZV94Iiwic2NhbGVfeSIsImludl9zY2FsZV8yNTYiLCJkeCIsImR5Iiwic3giLCJzeSIsInN4MSIsInN4MiIsImZzeDEiLCJmc3gyIiwiYSIsImIiLCJkeG4iLCJhbHBoYSIsImJldGEiLCJiZXRhMSIsImJ1Zl9ub2RlIiwiZ2V0X2J1ZmZlciIsInN1bV9ub2RlIiwieG9mc19ub2RlIiwiaTMyIiwieG9mcyIsIm1heCIsInB1dF9idWZmZXIiLCJfcmVzYW1wbGUiLCJzY2FsZSIsImYzMiIsImFicyIsImRhdGFfdCIsImtleXBvaW50X3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJzd2FwIiwiaHlwb3QiLCJiaXRfcGF0dGVybl8zMSIsInJlY3RpZnlfcGF0Y2giLCJ5YXBlIiwieWFwZTA2IiwicmFuc2FjX3BhcmFtc190IiwicGtnIiwianNmZWF0TmV4dCIsImR0IiwiYWxsb2NhdGUiLCJfZ2V0X2RhdGFfdHlwZSIsIl9nZXRfY2hhbm5lbCIsIl9nZXRfZGF0YV90eXBlX3NpemUiLCJ2ZXJzaW9uIiwibW90aW9uX21vZGVsIiwiVDAiLCJUMSIsIkF0QSIsIkF0QiIsIngiLCJmcm9tIiwidG8iLCJjb3VudCIsImN4MCIsImN5MCIsImQwIiwiczAiLCJjeDEiLCJjeTEiLCJkMSIsInMxIiwieSIsInNxcnQiLCJTUVJUMiIsInBvaW50cyIsImR4MSIsImR5MSIsImR4MiIsImR5MiIsImFmZmluZTJkIiwibW9kZWwiLCJtZCIsInQwZCIsInQxZCIsInB0MCIsInB0MSIsInB4IiwicHkiLCJfbWF0bWF0aCIsIl9saW5hbGciLCJsaW5hbGciLCJpc29fbm9ybWFsaXplX3BvaW50cyIsImFfYnVmZiIsImJfYnVmZiIsImFfbXQiLCJiX210IiwiYWQiLCJiZCIsIm11bHRpcGx5X0F0QSIsIm11bHRpcGx5X0F0QiIsImx1X3NvbHZlIiwiaW52ZXJ0XzN4MyIsIm11bHRpcGx5XzN4MyIsImhvbW9ncmFwaHkyZCIsIm1MdEwiLCJFdmVjIiwiTHRMIiwiZXZkIiwiWCIsIlkiLCJzbXgiLCJzbXkiLCJjbXgiLCJjbXkiLCJzTXgiLCJzTXkiLCJjTXgiLCJjTXkiLCJlaWdlblZWIiwiZXJyIiwid3ciLCJtIiwibmVnYXRpdmUiLCJmcDAiLCJmcDEiLCJmcDIiLCJmcDMiLCJ0cDAiLCJ0cDEiLCJ0cDIiLCJ0cDMiLCJBMTEiLCJBMTIiLCJBMTMiLCJBMjEiLCJBMjIiLCJBMjMiLCJBMzEiLCJBMzIiLCJBMzMiLCJCMTEiLCJCMTIiLCJCMTMiLCJCMjEiLCJCMjIiLCJCMjMiLCJCMzEiLCJCMzIiLCJCMzMiLCJkZXRBIiwiZGV0ZXJtaW5hbnRfM3gzIiwiZGV0QiIsInB5cmFtaWRfdCIsImxldmVscyIsIkFycmF5IiwiX2ltZ3Byb2MiLCJpbWdwcm9jIiwicHlyZG93biIsInN0YXJ0X3ciLCJzdGFydF9oIiwiaW5wdXQiLCJza2lwX2ZpcnN0X2xldmVsIiwiY29kZSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsInJhZGl1cyIsIm9wdGlvbnMiLCJoMiIsImVuZCIsIndpbmRvd1NpemUiLCJyYWRpdXNQbHVzT25lIiwicmFkaXVzUGx1czIiLCJ0bXBfYnVmZiIsImRzdEluZGV4Iiwic3JjSW5kZXgiLCJuZXh0UGl4ZWxJbmRleCIsInByZXZpb3VzUGl4ZWxJbmRleCIsImRhdGFfaTMyIiwiZGF0YV91OCIsImhvbGQiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXRoIiwiaXNfdTgiLCJidWZfc3oiLCJmaWx0X25vZGUiLCJnZXRfZ2F1c3NpYW5fa2VybmVsIiwiaW1nIiwicmhvX3JlcyIsInRoZXRhX3JlcyIsInRocmVzaG9sZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGVwIiwibWluX3RoZXRhIiwibWF4X3RoZXRhIiwiUEkiLCJudW1hbmdsZSIsInJvdW5kIiwibnVtcmhvIiwiaXJobyIsImFjY3VtIiwidGFiU2luIiwiRmxvYXQzMkFycmF5IiwidGFiQ29zIiwibiIsImFuZyIsInNpbiIsImNvcyIsInIiLCJfc29ydF9idWYiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsImRzdGVwIiwieDEiLCJjIiwiZCIsImUiLCJmIiwic3JvdzAiLCJzcm93MSIsInNyb3cyIiwiZHJvdyIsInRyb3cwIiwidHJvdzEiLCJneGd5IiwiYnVmMF9ub2RlIiwiYnVmMV9ub2RlIiwiZHN0X3N1bSIsImRzdF9zcXN1bSIsImRzdF90aWx0ZWQiLCJ3MCIsImgwIiwidzEiLCJzIiwiczIiLCJwIiwicHVwIiwidiIsInByZXYiLCJoaXN0MCIsIm5vcm0iLCJoaXN0MF9ub2RlIiwibG93X3RocmVzaCIsImhpZ2hfdGhyZXNoIiwiZ3JhZCIsIl9ncmFkIiwic3VwcHJlc3MiLCJ0ZzIyeCIsInRnNjd4IiwiZHhkeV9ub2RlIiwibWFwX25vZGUiLCJzdGFja19ub2RlIiwibWFwIiwic3RhY2siLCJkeGR5IiwiZHhkeV9tIiwicm93MCIsInJvdzEiLCJyb3cyIiwibWFwX3ciLCJtYXBfaSIsInN0YWNrX2kiLCJzb2JlbF9kZXJpdmF0aXZlcyIsInRyYW5zZm9ybSIsImZpbGxfdmFsdWUiLCJzcmNfd2lkdGgiLCJzcmNfaGVpZ2h0IiwiZHN0X3dpZHRoIiwiZHN0X2hlaWdodCIsIm9mZiIsIml4cyIsIml5cyIsInhzIiwieXMiLCJ4czAiLCJ5czAiLCJ3cyIsInNjIiwicDAiLCJwMSIsInRkIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwibTIwIiwibTIxIiwibTIyIiwiZyIsInFzb3J0X3N0YWNrIiwia2VybmVsIiwidCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MSIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwibGVmdCIsInJpZ2h0IiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250IiwibWlkZGxlIiwibGwiLCJoaCIsIm1lZGlhbiIsIkEiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJsIiwiX2luIiwiX2luMiIsIml0ZXJzIiwibWF4X2l0ZXIiLCJtdiIsInZhbCIsImEwIiwiYjAiLCJpbmRSX2J1ZmYiLCJpbmRDX2J1ZmYiLCJpbmRSIiwiaW5kQyIsIkF0IiwiX1ciLCJWdCIsIm4xIiwibWludmFsIiwiaXRlciIsIkFpIiwiQWoiLCJWaSIsIlZqIiwiY2hhbmdlZCIsInQwIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwid19idWZmIiwidl9idWZmIiwid19tdCIsInZfbXQiLCJ0cmFuc3Bvc2UiLCJKYWNvYmlTVkRJbXBsIiwicHUiLCJwdiIsIm5yb3dzIiwibmNvbHMiLCJ4c3VtIiwidG9sIiwidV9idWZmIiwidV9tdCIsInVkIiwid2QiLCJ2ZCIsInN2ZF9kZWNvbXBvc2UiLCJwYSIsImlkIiwidmVjdHMiLCJ2YWxzIiwiSmFjb2JpSW1wbCIsIm9yYiIsImJpdF9wYXR0ZXJuXzMxXyIsIkgiLCJwYXRjaF9pbWciLCJjb3JuZXJzIiwiZGVzY3JpcHRvcnMiLCJERVNDUl9TSVpFIiwiYW5nbGUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJtb3Rpb25fZXN0aW1hdG9yIiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJjaGVja19zdWJzZXQiLCJ0aHJlc2giLCJtYXNrIiwibnVtaW5saWVycyIsImVycm9yIiwicGFyYW1zIiwibWF4X2l0ZXJzIiwibW9kZWxfcG9pbnRzIiwibml0ZXJzIiwicmVzdWx0Iiwic3Vic2V0MCIsInN1YnNldDEiLCJmb3VuZCIsIm1jIiwibXIiLCJtX2J1ZmYiLCJtc19idWZmIiwiZXJyX2J1ZmYiLCJNIiwiY3Vycl9tYXNrIiwiaW5saWVyc19tYXgiLCJubW9kZWxzIiwicnVuIiwiY29weV90byIsImdldF9zdWJzZXQiLCJmaW5kX2lubGllcnMiLCJ1cGRhdGVfaXRlcnMiLCJfbWF0aCIsIm1pbl9tZWRpYW4iLCJvcHRpY2FsX2Zsb3dfbGsiLCJzY2hhcnJfZGVyaXYiLCJzY2hhcnJfZGVyaXZhdGl2ZXMiLCJwcmV2X3B5ciIsImN1cnJfcHlyIiwicHJldl94eSIsImN1cnJfeHkiLCJ3aW5fc2l6ZSIsInN0YXR1cyIsIm1pbl9laWdlbl90aHJlc2hvbGQiLCJVaW50OEFycmF5IiwiaGFsZl93aW4iLCJ3aW5fYXJlYSIsIndpbl9hcmVhMiIsInByZXZfaW1ncyIsIm5leHRfaW1ncyIsImltZ19wcmV2IiwiaW1nX25leHQiLCJsdyIsImxoIiwiaXdpbl9ub2RlIiwiZGVyaXZfaXdpbl9ub2RlIiwiZGVyaXZfbGV2X25vZGUiLCJkZXJpdl9tIiwiaXdpbl9idWYiLCJkZXJpdl9pd2luIiwiZGVyaXZfbGV2IiwiZHNyYyIsImlwdHIiLCJkaXB0ciIsImpwdHIiLCJsZXZfc2MiLCJwcmV2X3giLCJwcmV2X3kiLCJuZXh0X3giLCJuZXh0X3kiLCJwcmV2X2RlbHRhX3giLCJwcmV2X2RlbHRhX3kiLCJkZWx0YV94IiwiZGVsdGFfeSIsImlwcmV2X3giLCJpcHJldl95IiwiaW5leHRfeCIsImluZXh0X3kiLCJsZXZlbCIsInB0aWQiLCJicmRfdGwiLCJicmRfciIsImJyZF9iIiwiYjEiLCJiMiIsIldfQklUUzE0IiwiV19CSVRTNCIsIldfQklUUzFtNSIsIldfQklUUzFtNTEiLCJXX0JJVFMxNF8iLCJXX0JJVFM0MSIsIkZMVF9TQ0FMRSIsIml3MDAiLCJpdzAxIiwiaXcxMCIsIml3MTEiLCJpdmFsIiwiaXh2YWwiLCJpeXZhbCIsIkQiLCJtaW5fZWlnIiwiRkxUX0VQU0lMT04iLCJtYXhfbGV2ZWwiLCJzY29yZSIsImkwIiwiaTEiLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJNMTEiLCJNMTIiLCJNMTMiLCJNMjEiLCJNMjIiLCJNMjMiLCJNMzEiLCJNMzIiLCJNMzMiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJGbG9hdDY0QXJyYXkiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJ3YXJwX2FmZmluZSIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiYm9yZGVyIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsInJvd3giLCJpcCIsImltIiwiYWJzX3Njb3JlIiwibnVtYmVyX29mX3BvaW50cyIsInB0IiwiZXgiLCJleSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwibmVpZ2hib3Job29kIiwiSSIsIlNjb3JlcyIsIkltIiwiSXAiLCJkaXJzX25iIiwiQjAiLCJCMSIsIkIyIiwic3RhdGUiLCJjb21wdXRlX2xhcGxhY2lhbiIsImhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIiwibGFwbGFjaWFuX3RocmVzaG9sZCIsIm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQiLCJzcmRfZCIsIkR4eCIsIkR5eSIsIkR4eSIsIkR5eCIsImxhcF9idWYiLCJsYXBsYWNpYW4iLCJsdiIsIm1pbl9laWdlbl92YWx1ZSIsImxhcF90aHJlc2giLCJlaWdlbl90aHJlc2giLCJ5cm93IiwidHIiLCJJeHgiLCJJeXkiLCJJeHkiLCJzcXJ0X2RlbHRhIl0sInNvdXJjZVJvb3QiOiIifQ==