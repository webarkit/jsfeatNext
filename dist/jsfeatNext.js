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
  U8C1_t: 0x0100 | 0x01
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jYWNoZS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9kYXRhX3R5cGUvZGF0YV90eXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9jb252b2wuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL3Jlc2FtcGxlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvanNmZWF0TmV4dC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2tleXBvaW50X3Qva2V5cG9pbnRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGctYmFzZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21hdG1hdGgvbWF0bWF0aC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21hdHJpeF90L21hdHJpeF90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL2JpdF9wYXR0ZXJuXzMxLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL3JlY3RpZnlfcGF0Y2guanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZTA2L3lhcGUwNl91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5LCBkYXRhX3NpemUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG4gICAgVThDMV90OiAweDAxMDAgfCAweDAxLFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGMDApO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYpO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAsIHN1bTEgPSAwLCBzdW0yID0gMCwgc3VtMyA9IDAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMC4wLCBzdW0xID0gMC4wLCBzdW0yID0gMC4wLCBzdW0zID0gMC4wLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwLjA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OCAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCBrZXlwb2ludF90IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90LmpzJ1xuaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL2ltZ3Byb2MvcmVzYW1wbGUuanMnXG5pbXBvcnQgeyBfY29udm9sLCBfY29udm9sX3U4IH0gZnJvbSAnLi9pbWdwcm9jL2NvbnZvbC5qcydcbi8vaW1wb3J0IG1hdGggZnJvbSAnLi9tYXRoL21hdGguanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuL21hdHJpeF90L21hdHJpeF90LmpzJ1xuLy9pbXBvcnQgcHlyYW1pZF90IGZyb20gJy4vcHlyYW1pZF90L3B5cmFtaWRfdC5qcydcbi8vaW1wb3J0IGxpbmFsZyBmcm9tICcuL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gJy4vbGluYWxnL2xpbmFsZy1iYXNlLmpzJ1xuLy9pbXBvcnQgb3JiIGZyb20gJy4vb3JiL29yYi5qcydcbmltcG9ydCB7IGJpdF9wYXR0ZXJuXzMxIH0gZnJvbSAnLi9vcmIvYml0X3BhdHRlcm5fMzEuanMnXG5pbXBvcnQgeyByZWN0aWZ5X3BhdGNoIH0gZnJvbSAnLi9vcmIvcmVjdGlmeV9wYXRjaC5qcydcbmltcG9ydCB5YXBlIGZyb20gJy4veWFwZS95YXBlLmpzJ1xuaW1wb3J0IHlhcGUwNiBmcm9tICcuL3lhcGUwNi95YXBlMDYuanMnXG4vL2ltcG9ydCBtb3Rpb25fZXN0aW1hdG9yIGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fZXN0aW1hdG9yLmpzJ1xuLy9pbXBvcnQgeyBtb3Rpb25fbW9kZWwgfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzJ1xuaW1wb3J0IHJhbnNhY19wYXJhbXNfdCBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG5cbiAgICAvLyBWRVJTSU9OXG4gICAgc3RhdGljIFZFUlNJT04gPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgQzFfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICBzdGF0aWMgQzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzJfdDtcbiAgICBzdGF0aWMgQzNfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzNfdDtcbiAgICBzdGF0aWMgQzRfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzRfdDtcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBzdGF0aWMgQ09MT1JfUkdCQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX1JHQjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgc3RhdGljIEJPWF9CTFVSX05PU0NBTEUgPSBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEU7XG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBzdGF0aWMgU1ZEX1VfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVDtcbiAgICBzdGF0aWMgU1ZEX1ZfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVDtcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIHN0YXRpYyBVOEMxX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFU4QzNfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzNfdDtcbiAgICBzdGF0aWMgVThDNF90ID0gdGhpcy5VOF90IHwgdGhpcy5DNF90O1xuXG4gICAgc3RhdGljIEYzMkMxX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBGMzJDMl90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzJfdDtcbiAgICBzdGF0aWMgUzMyQzFfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFMzMkMyX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMl90O1xuXG4gICAgZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodHlwZSk7XG4gICAgfVxufVxuXG5jbGFzcyBtb3Rpb25fbW9kZWwgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlQwID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLlQxID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QSA9IG5ldyBtYXRyaXhfdCg2LCA2LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEIgPSBuZXcgbWF0cml4X3QoNiwgMSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHNxcih4KSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIFQwLCBUMSwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHMsIGNvdW50KSB7XG4gICAgICAgIHZhciBqID0gMCwgayA9IDAsIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkeDEgPSAwLjAsIGR5MSA9IDAuMCwgZHgyID0gMC4wLCBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeDIgKiBkeTEgLSBkeTIgKiBkeDEpIDw9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIChNYXRoLmFicyhkeDEpICsgTWF0aC5hYnMoZHkxKSArIE1hdGguYWJzKGR4MikgKyBNYXRoLmFicyhkeTIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWx7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHJ1bihmcm9tLCB0bywgbW9kZWwsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHB4ID0gMC4wLCBweSA9IDAuMDtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcganNmZWF0TmV4dC5saW5hbGcoKTtcblxuICAgICAgICB0aGlzLmlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCB0MGQsIHQxZCwgY291bnQpO1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCAqIDYpIDw8IDMpO1xuICAgICAgICB2YXIgYl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgyICogY291bnQpIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KDYsIDIgKiBjb3VudCwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGJfbXQgPSBuZXcgbWF0cml4X3QoMSwgMiAqIGNvdW50LCBkdCwgYl9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYWQgPSBhX210LmRhdGEsIGJkID0gYl9tdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICBweCA9IHQwZFswXSAqIHB0MC54ICsgdDBkWzFdICogcHQwLnkgKyB0MGRbMl07XG4gICAgICAgICAgICBweSA9IHQwZFszXSAqIHB0MC54ICsgdDBkWzRdICogcHQwLnkgKyB0MGRbNV07XG5cbiAgICAgICAgICAgIGogPSBpICogMiAqIDY7XG4gICAgICAgICAgICBhZFtqXSA9IHB4LCBhZFtqICsgMV0gPSBweSwgYWRbaiArIDJdID0gMS4wLCBhZFtqICsgM10gPSAwLjAsIGFkW2ogKyA0XSA9IDAuMCwgYWRbaiArIDVdID0gMC4wO1xuXG4gICAgICAgICAgICBqICs9IDY7XG4gICAgICAgICAgICBhZFtqXSA9IDAuMCwgYWRbaiArIDFdID0gMC4wLCBhZFtqICsgMl0gPSAwLjAsIGFkW2ogKyAzXSA9IHB4LCBhZFtqICsgNF0gPSBweSwgYWRbaiArIDVdID0gMS4wO1xuXG4gICAgICAgICAgICBiZFtpIDw8IDFdID0gdDFkWzBdICogcHQxLnggKyB0MWRbMV0gKiBwdDEueSArIHQxZFsyXTtcbiAgICAgICAgICAgIGJkWyhpIDw8IDEpICsgMV0gPSB0MWRbM10gKiBwdDEueCArIHQxZFs0XSAqIHB0MS55ICsgdDFkWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRBKHRoaXMuQXRBLCBhX210KTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRCKHRoaXMuQXRCLCBhX210LCBiX210KTtcblxuICAgICAgICBfbGluYWxnLmx1X3NvbHZlKHRoaXMuQXRBLCB0aGlzLkF0Qik7XG5cbiAgICAgICAgbWRbMF0gPSB0aGlzLkF0Qi5kYXRhWzBdLCBtZFsxXSA9IHRoaXMuQXRCLmRhdGFbMV0sIG1kWzJdID0gdGhpcy5BdEIuZGF0YVsyXTtcbiAgICAgICAgbWRbM10gPSB0aGlzLkF0Qi5kYXRhWzNdLCBtZFs0XSA9IHRoaXMuQXRCLmRhdGFbNF0sIG1kWzVdID0gdGhpcy5BdEIuZGF0YVs1XTtcbiAgICAgICAgbWRbNl0gPSAwLjAsIG1kWzddID0gMC4wLCBtZFs4XSA9IDEuMDsgLy8gZmlsbCBsYXN0IHJvd1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLmludmVydF8zeDModGhpcy5UMSwgdGhpcy5UMSk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBmcmVlIGJ1ZmZlclxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufVxuXG5jbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuXG4gICAgICAgIC8vIG5vcm1cbiAgICAgICAgdmFyIHNteCA9IDAuMCwgc215ID0gMC4wLCBjbXggPSAwLjAsIGNteSA9IDAuMCwgc014ID0gMC4wLCBzTXkgPSAwLjAsIGNNeCA9IDAuMCwgY015ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY214ICs9IHRvW2ldLng7XG4gICAgICAgICAgICBjbXkgKz0gdG9baV0ueTtcbiAgICAgICAgICAgIGNNeCArPSBmcm9tW2ldLng7XG4gICAgICAgICAgICBjTXkgKz0gZnJvbVtpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY214IC89IGNvdW50OyBjbXkgLz0gY291bnQ7XG4gICAgICAgIGNNeCAvPSBjb3VudDsgY015IC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzbXggKz0gTWF0aC5hYnModG9baV0ueCAtIGNteCk7XG4gICAgICAgICAgICBzbXkgKz0gTWF0aC5hYnModG9baV0ueSAtIGNteSk7XG4gICAgICAgICAgICBzTXggKz0gTWF0aC5hYnMoZnJvbVtpXS54IC0gY014KTtcbiAgICAgICAgICAgIHNNeSArPSBNYXRoLmFicyhmcm9tW2ldLnkgLSBjTXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNteCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNteSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHJldHVybiAwO1xuXG4gICAgICAgIHNteCA9IGNvdW50IC8gc214OyBzbXkgPSBjb3VudCAvIHNteTtcbiAgICAgICAgc014ID0gY291bnQgLyBzTXg7IHNNeSA9IGNvdW50IC8gc015O1xuXG4gICAgICAgIHQwZFswXSA9IHNNeDsgdDBkWzFdID0gMDsgdDBkWzJdID0gLWNNeCAqIHNNeDtcbiAgICAgICAgdDBkWzNdID0gMDsgdDBkWzRdID0gc015OyB0MGRbNV0gPSAtY015ICogc015O1xuICAgICAgICB0MGRbNl0gPSAwOyB0MGRbN10gPSAwOyB0MGRbOF0gPSAxO1xuXG4gICAgICAgIHQxZFswXSA9IDEuMCAvIHNteDsgdDFkWzFdID0gMDsgdDFkWzJdID0gY214O1xuICAgICAgICB0MWRbM10gPSAwOyB0MWRbNF0gPSAxLjAgLyBzbXk7IHQxZFs1XSA9IGNteTtcbiAgICAgICAgdDFkWzZdID0gMDsgdDFkWzddID0gMDsgdDFkWzhdID0gMTtcbiAgICAgICAgLy9cblxuICAgICAgICAvLyBjb25zdHJ1Y3Qgc3lzdGVtXG4gICAgICAgIGkgPSA4MTtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBMdExbaV0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHggPSAodG9baV0ueCAtIGNteCkgKiBzbXg7XG4gICAgICAgICAgICB5ID0gKHRvW2ldLnkgLSBjbXkpICogc215O1xuICAgICAgICAgICAgWCA9IChmcm9tW2ldLnggLSBjTXgpICogc014O1xuICAgICAgICAgICAgWSA9IChmcm9tW2ldLnkgLSBjTXkpICogc015O1xuXG4gICAgICAgICAgICBMdExbMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMl0gKz0gWDtcblxuICAgICAgICAgICAgTHRMWzZdICs9IFggKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbN10gKz0gWCAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFs4XSArPSBYICogLXg7XG4gICAgICAgICAgICBMdExbMTBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzExXSArPSBZO1xuXG4gICAgICAgICAgICBMdExbMTVdICs9IFkgKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbMTZdICs9IFkgKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbMTddICs9IFkgKiAteDtcbiAgICAgICAgICAgIEx0TFsyMF0gKz0gMS4wO1xuXG4gICAgICAgICAgICBMdExbMjRdICs9IC14ICogWDtcbiAgICAgICAgICAgIEx0TFsyNV0gKz0gLXggKiBZO1xuICAgICAgICAgICAgTHRMWzI2XSArPSAteDtcbiAgICAgICAgICAgIEx0TFszMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzMyXSArPSBYO1xuICAgICAgICAgICAgTHRMWzMzXSArPSBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzM0XSArPSBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzM1XSArPSBYICogLXk7XG4gICAgICAgICAgICBMdExbNDBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzQxXSArPSBZO1xuICAgICAgICAgICAgTHRMWzQyXSArPSBZICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzQzXSArPSBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzQ0XSArPSBZICogLXk7XG4gICAgICAgICAgICBMdExbNTBdICs9IDEuMDtcbiAgICAgICAgICAgIEx0TFs1MV0gKz0gLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzUyXSArPSAteSAqIFk7XG4gICAgICAgICAgICBMdExbNTNdICs9IC15O1xuICAgICAgICAgICAgTHRMWzYwXSArPSAteCAqIFggKiAteCAqIFggKyAteSAqIFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNjFdICs9IC14ICogWCAqIC14ICogWSArIC15ICogWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs2Ml0gKz0gLXggKiBYICogLXggKyAteSAqIFggKiAteTtcbiAgICAgICAgICAgIEx0TFs3MF0gKz0gLXggKiBZICogLXggKiBZICsgLXkgKiBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzcxXSArPSAteCAqIFkgKiAteCArIC15ICogWSAqIC15O1xuICAgICAgICAgICAgTHRMWzgwXSArPSAteCAqIC14ICsgLXkgKiAteTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuXG4gICAgICAgIC8vIHN5bW1ldHJ5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA5OyArK2kpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opXG4gICAgICAgICAgICAgICAgTHRMW2kgKiA5ICsgal0gPSBMdExbaiAqIDkgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9saW5hbGcuZWlnZW5WVih0aGlzLm1MdEwsIHRoaXMuRXZlYyk7XG5cbiAgICAgICAgbWRbMF0gPSBldmRbNzJdLCBtZFsxXSA9IGV2ZFs3M10sIG1kWzJdID0gZXZkWzc0XTtcbiAgICAgICAgbWRbM10gPSBldmRbNzVdLCBtZFs0XSA9IGV2ZFs3Nl0sIG1kWzVdID0gZXZkWzc3XTtcbiAgICAgICAgbWRbNl0gPSBldmRbNzhdLCBtZFs3XSA9IGV2ZFs3OV0sIG1kWzhdID0gZXZkWzgwXTtcblxuICAgICAgICAvLyBkZW5vcm1hbGl6ZVxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIHRoaXMuVDEsIG1vZGVsKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCBtb2RlbCwgdGhpcy5UMCk7XG5cbiAgICAgICAgLy8gc2V0IGJvdHRvbSByaWdodCB0byAxLjBcbiAgICAgICAgeCA9IDEuMCAvIG1kWzhdO1xuICAgICAgICBtZFswXSAqPSB4OyBtZFsxXSAqPSB4OyBtZFsyXSAqPSB4O1xuICAgICAgICBtZFszXSAqPSB4OyBtZFs0XSAqPSB4OyBtZFs1XSAqPSB4O1xuICAgICAgICBtZFs2XSAqPSB4OyBtZFs3XSAqPSB4OyBtZFs4XSA9IDEuMDtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZXJyb3IoZnJvbSwgdG8sIG1vZGVsLCBlcnIsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCB3dyA9IDAuMCwgZHggPSAwLjAsIGR5ID0gMC4wO1xuICAgICAgICB2YXIgbSA9IG1vZGVsLmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHd3ID0gMS4wIC8gKG1bNl0gKiBwdDAueCArIG1bN10gKiBwdDAueSArIDEuMCk7XG4gICAgICAgICAgICBkeCA9IChtWzBdICogcHQwLnggKyBtWzFdICogcHQwLnkgKyBtWzJdKSAqIHd3IC0gcHQxLng7XG4gICAgICAgICAgICBkeSA9IChtWzNdICogcHQwLnggKyBtWzRdICogcHQwLnkgKyBtWzVdKSAqIHd3IC0gcHQxLnk7XG4gICAgICAgICAgICBlcnJbaV0gPSAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrX3N1YnNldChmcm9tLCB0bywgY291bnQpIHtcbiAgICAgICAgLy8gc2VlbXMgdG8gcmVqZWN0IGdvb2Qgc3Vic2V0cyBhY3R1YWxseVxuICAgICAgICAvL2lmKCBoYXZlX2NvbGxpbmVhcl9wb2ludHMoZnJvbSwgY291bnQpIHx8IGhhdmVfY29sbGluZWFyX3BvaW50cyh0bywgY291bnQpICkge1xuICAgICAgICAvL3JldHVybiBmYWxzZTtcbiAgICAgICAgLy99XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIGlmIChjb3VudCA9PSA0KSB7XG4gICAgICAgICAgICB2YXIgbmVnYXRpdmUgPSAwO1xuXG4gICAgICAgICAgICB2YXIgZnAwID0gZnJvbVswXSwgZnAxID0gZnJvbVsxXSwgZnAyID0gZnJvbVsyXSwgZnAzID0gZnJvbVszXTtcbiAgICAgICAgICAgIHZhciB0cDAgPSB0b1swXSwgdHAxID0gdG9bMV0sIHRwMiA9IHRvWzJdLCB0cDMgPSB0b1szXTtcblxuICAgICAgICAgICAgLy8gc2V0MVxuICAgICAgICAgICAgdmFyIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueSwgQTEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueSwgQTIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEzMSA9IGZwMi54LCBBMzIgPSBmcDIueSwgQTMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgQjExID0gdHAwLngsIEIxMiA9IHRwMC55LCBCMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55LCBCMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjMxID0gdHAyLngsIEIzMiA9IHRwMi55LCBCMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgdmFyIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDJcbiAgICAgICAgICAgIEExMSA9IGZwMS54LCBBMTIgPSBmcDEueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAxLngsIEIxMiA9IHRwMS55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0M1xuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQ0XG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIGlmIChuZWdhdGl2ZSAhPSAwICYmIG5lZ2F0aXZlICE9IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGFsbCBnb29kXG4gICAgfVxufVxuXG5qc2ZlYXROZXh0LmRhdGFfdCA9IGRhdGFfdFxuXG5qc2ZlYXROZXh0Lm1hdHJpeF90ID0gbWF0cml4X3Q7XG5cbmpzZmVhdE5leHQua2V5cG9pbnRfdCA9IGtleXBvaW50X3Q7XG5cbmpzZmVhdE5leHQucHlyYW1pZF90ID0gY2xhc3MgcHlyYW1pZF90IGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWxzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzIHwgMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGxldmVscyk7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBqc2ZlYXROZXh0LmltZ3Byb2MoKTtcbiAgICAgICAgdGhpcy5weXJkb3duID0gX2ltZ3Byb2MucHlyZG93bjtcbiAgICB9XG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkKGlucHV0LCBza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpcF9maXJzdF9sZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBza2lwX2ZpcnN0X2xldmVsID0gdHJ1ZTsgfVxuICAgICAgICAvLyBqdXN0IGNvcHkgZGF0YSB0byBmaXJzdCBsZXZlbFxuICAgICAgICB2YXIgaSA9IDIsIGEgPSBpbnB1dCwgYiA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBjbGFzcyBpbWdwcm9jIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfTtcbiAgICBncmF5c2NhbGUoc3JjLCB3LCBoLCBkc3QsIGNvZGUpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBkZWZhdWx0IGltYWdlIGRhdGEgcmVwcmVzZW50YXRpb24gaW4gYnJvd3NlclxuICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT09IFwidW5kZWZpbmVkXCIpIHsgY29kZSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZOyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIGkgPSAwLCBqID0gMCwgaXIgPSAwLCBqciA9IDA7XG4gICAgICAgIHZhciBjb2VmZl9yID0gNDg5OSwgY29lZmZfZyA9IDk2MTcsIGNvZWZmX2IgPSAxODY4LCBjbiA9IDQ7XG5cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjb2VmZl9yID0gMTg2ODtcbiAgICAgICAgICAgIGNvZWZmX2IgPSA0ODk5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjbiA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNuMiA9IGNuIDw8IDEsIGNuMyA9IChjbiAqIDMpIHwgMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDEpO1xuICAgICAgICB2YXIgZHN0X3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSwgaiArPSB3LCBpICs9IHcgKiBjbikge1xuICAgICAgICAgICAgZm9yICh4ID0gMCwgaXIgPSBpLCBqciA9IGo7IHggPD0gdyAtIDQ7IHggKz0gNCwgaXIgKz0gY24gPDwgMiwganIgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAxXSA9IChzcmNbaXIgKyBjbl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24gKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDJdID0gKHNyY1tpciArIGNuMl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24yICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24yICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgM10gPSAoc3JjW2lyICsgY24zXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjMgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjMgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK2pyLCBpciArPSBjbikge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkZXJpdmVkIGZyb20gQ0NWIGxpYnJhcnlcbiAgICByZXNhbXBsZShzcmMsIGRzdCwgbncsIG5oKSB7XG4gICAgICAgIHZhciBoID0gc3JjLnJvd3MsIHcgPSBzcmMuY29scztcbiAgICAgICAgaWYgKGggPiBuaCAmJiB3ID4gbncpIHtcbiAgICAgICAgICAgIGRzdC5yZXNpemUobncsIG5oLCBzcmMuY2hhbm5lbCk7XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgZmFzdCBhbHRlcm5hdGl2ZSAoZml4IHBvaW50IHNjYWxlLCAweDEwMCB0byBhdm9pZCBvdmVyZmxvdylcbiAgICAgICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBkc3QudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBoICogdyAvIChuaCAqIG53KSA8IDB4MTAwKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlX3U4KHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGUoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYm94X2JsdXJfZ3JheShzcmMsIGRzdCwgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfVxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIGgyID0gaCA8PCAxLCB3MiA9IHcgPDwgMTtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMCwgeSA9IDAsIGVuZCA9IDA7XG4gICAgICAgIHZhciB3aW5kb3dTaXplID0gKChyYWRpdXMgPDwgMSkgKyAxKSB8IDA7XG4gICAgICAgIHZhciByYWRpdXNQbHVzT25lID0gKHJhZGl1cyArIDEpIHwgMCwgcmFkaXVzUGx1czIgPSAocmFkaXVzUGx1c09uZSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHNjYWxlID0gb3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRSA/IDEgOiAoMS4wIC8gKHdpbmRvd1NpemUgKiB3aW5kb3dTaXplKSk7XG5cbiAgICAgICAgdmFyIHRtcF9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsIGRzdEluZGV4ID0gMCwgc3JjSW5kZXggPSAwLCBuZXh0UGl4ZWxJbmRleCA9IDAsIHByZXZpb3VzUGl4ZWxJbmRleCA9IDA7XG4gICAgICAgIHZhciBkYXRhX2kzMiA9IHRtcF9idWZmLmkzMjsgLy8gdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICB2YXIgZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgaG9sZCA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgLy8gZmlyc3QgcGFzc1xuICAgICAgICAvLyBubyBuZWVkIHRvIHNjYWxlIFxuICAgICAgICAvL2RhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSkge1xuICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfdThbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gKHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZSkgfCAwO1xuICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IGgyKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4ICsgaF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcmNJbmRleCArPSB3O1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNlY29uZCBwYXNzXG4gICAgICAgIHNyY0luZGV4ID0gMDtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDsgLy8gdGhpcyBpcyBhIHRyYW5zcG9zZVxuICAgICAgICBkYXRhX3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgLy8gZG9udCBzY2FsZSByZXN1bHRcbiAgICAgICAgaWYgKHNjYWxlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHRtcF9idWZmKTtcbiAgICB9XG4gICAgZ2F1c3NpYW5fYmx1cihzcmMsIGRzdCwga2VybmVsX3NpemUsIHNpZ21hKSB7XG4gICAgICAgIHZhciBqc2ZlYXRtYXRoID0gbmV3IGpzZmVhdE5leHQubWF0aCgpO1xuICAgICAgICBpZiAodHlwZW9mIHNpZ21hID09PSBcInVuZGVmaW5lZFwiKSB7IHNpZ21hID0gMC4wOyB9XG4gICAgICAgIGlmICh0eXBlb2Yga2VybmVsX3NpemUgPT09IFwidW5kZWZpbmVkXCIpIHsga2VybmVsX3NpemUgPSAwOyB9XG4gICAgICAgIGtlcm5lbF9zaXplID0ga2VybmVsX3NpemUgPT0gMCA/IChNYXRoLm1heCgxLCAoNC4wICogc2lnbWEgKyAxLjAgLSAxZS04KSkgKiAyICsgMSkgfCAwIDoga2VybmVsX3NpemU7XG4gICAgICAgIHZhciBoYWxmX2tlcm5lbCA9IGtlcm5lbF9zaXplID4+IDE7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRhdGFfdHlwZSA9IHNyYy50eXBlLCBpc191OCA9IGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIGJ1ZiwgZmlsdGVyLCBidWZfc3ogPSAoa2VybmVsX3NpemUgKyBNYXRoLm1heChoLCB3KSkgfCAwO1xuXG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihidWZfc3ogPDwgMik7XG4gICAgICAgIHZhciBmaWx0X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoa2VybmVsX3NpemUgPDwgMik7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuaTMyO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAganNmZWF0bWF0aC5nZXRfZ2F1c3NpYW5fa2VybmVsKGtlcm5lbF9zaXplLCBzaWdtYSwgZmlsdGVyLCBkYXRhX3R5cGUpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbnZvbChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGZpbHRfbm9kZSk7XG4gICAgfVxuICAgIGhvdWdoX3RyYW5zZm9ybShpbWcsIHJob19yZXMsIHRoZXRhX3JlcywgdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YWdlIDQuIHN0b3JlIHRoZSBmaXJzdCBtaW4odG90YWwsbGluZXNNYXgpIGxpbmVzIHRvIHRoZSBvdXRwdXQgYnVmZmVyXG4gICAgICAgIHZhciBsaW5lc01heCA9IE1hdGgubWluKG51bWFuZ2xlICogbnVtcmhvLCBfc29ydF9idWYubGVuZ3RoKTtcbiAgICAgICAgdmFyIHNjYWxlID0gMS4wIC8gKG51bXJobyArIDIpO1xuICAgICAgICB2YXIgbGluZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc01heDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX3NvcnRfYnVmW2ldO1xuICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKGlkeCAqIHNjYWxlKSAtIDE7XG4gICAgICAgICAgICB2YXIgciA9IGlkeCAtIChuICsgMSkgKiAobnVtcmhvICsgMikgLSAxO1xuICAgICAgICAgICAgdmFyIGxyaG8gPSAociAtIChudW1yaG8gLSAxKSAqIDAuNSkgKiByaG9fcmVzO1xuICAgICAgICAgICAgdmFyIGxhbmdsZSA9IG4gKiB0aGV0YV9yZXM7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtscmhvLCBsYW5nbGVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIHB5cmRvd24oc3JjLCBkc3QsIHN4LCBzeSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHggKyAxXSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGEgKyB0cm93MVt4XSArIGIgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGMgKyBiICsgYSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA0XSAtIGUpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChkICsgYSArIGMgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDVdIC0gZik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyA1XSArIGMgKyBkICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdICsgdHJvdzFbeCArIDFdICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cbiAgICAvLyBwbGVhc2Ugbm90ZTogXG4gICAgLy8gZHN0Xyh0eXBlKSBzaXplIHNob3VsZCBiZSBjb2xzID0gc3JjLmNvbHMrMSwgcm93cyA9IHNyYy5yb3dzKzFcbiAgICBjb21wdXRlX2ludGVncmFsX2ltYWdlKHNyYywgZHN0X3N1bSwgZHN0X3Nxc3VtLCBkc3RfdGlsdGVkKSB7XG4gICAgICAgIHZhciB3MCA9IHNyYy5jb2xzIHwgMCwgaDAgPSBzcmMucm93cyB8IDAsIHNyY19kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciB3MSA9ICh3MCArIDEpIHwgMDtcbiAgICAgICAgdmFyIHMgPSAwLCBzMiA9IDAsIHAgPSAwLCBwdXAgPSAwLCBpID0gMCwgaiA9IDAsIHYgPSAwLCBrID0gMDtcblxuICAgICAgICBpZiAoZHN0X3N1bSAmJiBkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwLCBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHN0X3RpbHRlZCkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwICsgMV0gPSBzcmNfZFtrICsgMV0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyB3MCkgfCAwLCBwdXAgPSB3MDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoMDsgKytpLCBwICs9IHcxLCBwdXAgKz0gdzEpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gdzAgLSAxOyBqID4gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgcCA9IGogKyBoMCAqIHcxLCBwdXAgPSBwIC0gdzE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaDA7IGkgPiAwOyAtLWksIHAgLT0gdzEsIHB1cCAtPSB3MSkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFsaXplX2hpc3RvZ3JhbShzcmMsIGRzdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGEsIHNpemUgPSB3ICogaDtcbiAgICAgICAgdmFyIGkgPSAwLCBwcmV2ID0gMCwgaGlzdDAsIG5vcm07XG5cbiAgICAgICAgdmFyIGhpc3QwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoMjU2IDw8IDIpO1xuICAgICAgICBoaXN0MCA9IGhpc3QwX25vZGUuaTMyO1xuICAgICAgICBmb3IgKDsgaSA8IDI1NjsgKytpKSBoaXN0MFtpXSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICsraGlzdDBbc3JjX2RbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldiA9IGhpc3QwWzBdO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgICAgIHByZXYgPSBoaXN0MFtpXSArPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgbm9ybSA9IDI1NSAvIHNpemU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGRzdF9kW2ldID0gKGhpc3QwW3NyY19kW2ldXSAqIG5vcm0gKyAwLjUpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaGlzdDBfbm9kZSk7XG4gICAgfVxuICAgIGNhbm55KHNyYywgZHN0LCBsb3dfdGhyZXNoLCBoaWdoX3RocmVzaCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwID0gbWFwX25vZGUuaTMyO1xuICAgICAgICB2YXIgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHkgPSBkeGR5X25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeV9tID0gbmV3IG1hdHJpeF90KHcsIGgsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZHhkeV9ub2RlLmRhdGEpO1xuICAgICAgICB2YXIgcm93MCA9IDEsIHJvdzEgPSAodyArIDIgKyAxKSB8IDAsIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsIG1hcF93ID0gKHcgKyAyKSB8IDAsIG1hcF9pID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG1hdHJpeF90XG4gICAgd2FycF9wZXJzcGVjdGl2ZShzcmMsIGRzdCwgdHJhbnNmb3JtLCBmaWxsX3ZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MgfCAwLCBkc3Rfd2lkdGggPSBkc3QuY29scyB8IDAsIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIHhzMCA9IDAuMCwgeXMwID0gMC4wLCB3cyA9IDAuMCwgc2MgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XSxcbiAgICAgICAgICAgIG0yMCA9IHRkWzZdLCBtMjEgPSB0ZFs3XSwgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzMCA9IG0wMSAqIHkgKyBtMDIsXG4gICAgICAgICAgICAgICAgeXMwID0gbTExICogeSArIG0xMixcbiAgICAgICAgICAgICAgICB3cyA9IG0yMSAqIHkgKyBtMjI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMwICs9IG0wMCwgeXMwICs9IG0xMCwgd3MgKz0gbTIwKSB7XG4gICAgICAgICAgICAgICAgc2MgPSAxLjAgLyB3cztcbiAgICAgICAgICAgICAgICB4cyA9IHhzMCAqIHNjLCB5cyA9IHlzMCAqIHNjO1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMCwgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhzID4gMCAmJiB5cyA+IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjLCBkc3QsIHRyYW5zZm9ybSwgZmlsbF92YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciByLCBnLCBiLCBqO1xuICAgICAgICB2YXIgaSA9IHNyYy53aWR0aCAqIHNyYy5oZWlnaHQ7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGogPSBpICogNDtcbiAgICAgICAgICAgIHIgPSBzcmMuZGF0YVtqXTtcbiAgICAgICAgICAgIGcgPSBzcmMuZGF0YVtqICsgMV07XG4gICAgICAgICAgICBiID0gc3JjLmRhdGFbaiArIDJdO1xuICAgICAgICAgICAgaWYgKChyID4gOTUpICYmIChnID4gNDApICYmIChiID4gMjApXG4gICAgICAgICAgICAgICAgJiYgKHIgPiBnKSAmJiAociA+IGIpXG4gICAgICAgICAgICAgICAgJiYgKHIgLSBNYXRoLm1pbihnLCBiKSA+IDE1KVxuICAgICAgICAgICAgICAgICYmIChNYXRoLmFicyhyIC0gZykgPiAxNSkpIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAyNTU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmpzZmVhdE5leHQubWF0aCA9IGNsYXNzIG1hdGggZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnFzb3J0X3N0YWNrID0gbmV3IEludDMyQXJyYXkoNDggKiAyKTtcbiAgICB9XG5cbiAgICBnZXRfZ2F1c3NpYW5fa2VybmVsKHNpemUsIHNpZ21hLCBrZXJuZWwsIGRhdGFfdHlwZSkge1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLjAsIHQgPSAwLjAsIHNpZ21hX3ggPSAwLjAsIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIga2Vybl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHNpemUgPDwgMik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYgKChzaXplICYgMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChzaXplID4+IDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4yNSwgX2tlcm5lbFsxXSA9IDAuNSwgX2tlcm5lbFsyXSA9IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMjUgKyAwLjUgKyAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjA2MjUsIF9rZXJuZWxbMV0gPSAwLjI1LCBfa2VybmVsWzJdID0gMC4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wMzEyNSwgX2tlcm5lbFsxXSA9IDAuMTA5Mzc1LCBfa2VybmVsWzJdID0gMC4yMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wMzEyNSArIDAuMTA5Mzc1ICsgMC4yMTg3NSArIDAuMjgxMjUgKyAwLjIxODc1ICsgMC4xMDkzNzUgKyAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZ21hX3ggPSBzaWdtYSA+IDAgPyBzaWdtYSA6ICgoc2l6ZSAtIDEpICogMC41IC0gMS4wKSAqIDAuMyArIDAuODtcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gLTAuNSAvIChzaWdtYV94ICogc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAgeCA9IGkgLSAoc2l6ZSAtIDEpICogMC41O1xuICAgICAgICAgICAgICAgIHQgPSBNYXRoLmV4cChzY2FsZV8yeCAqIHggKiB4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkge1xuICAgICAgICAgICAgLy8gaW50IGJhc2VkIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMjU2LjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzaWMga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAxLjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gX2tlcm5lbFtpXSAqIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihrZXJuX25vZGUpO1xuICAgIH1cblxuICAgIC8vIG1vZGVsIGlzIDN4MyBtYXRyaXhfdFxuICAgIHBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0obW9kZWwsIHNyY194MCwgc3JjX3kwLCBkc3RfeDAsIGRzdF95MCxcbiAgICAgICAgc3JjX3gxLCBzcmNfeTEsIGRzdF94MSwgZHN0X3kxLFxuICAgICAgICBzcmNfeDIsIHNyY195MiwgZHN0X3gyLCBkc3RfeTIsXG4gICAgICAgIHNyY194Mywgc3JjX3kzLCBkc3RfeDMsIGRzdF95Mykge1xuICAgICAgICB2YXIgdDEgPSBzcmNfeDA7XG4gICAgICAgIHZhciB0MiA9IHNyY194MjtcbiAgICAgICAgdmFyIHQ0ID0gc3JjX3kxO1xuICAgICAgICB2YXIgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHZhciB0NiA9IHNyY195MztcbiAgICAgICAgdmFyIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdmFyIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdmFyIHQ5ID0gc3JjX3kyO1xuICAgICAgICB2YXIgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdmFyIHQxMSA9IHNyY194MTtcbiAgICAgICAgdmFyIHQxNCA9IHNyY195MDtcbiAgICAgICAgdmFyIHQxNSA9IHNyY194MztcbiAgICAgICAgdmFyIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdmFyIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdmFyIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB2YXIgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHZhciB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdmFyIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHZhciB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB2YXIgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHZhciB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB2YXIgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHZhciB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHZhciB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB2YXIgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHZhciB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdmFyIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB2YXIgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHZhciB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHZhciB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhyMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIcjEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMiA9IHQxO1xuICAgICAgICB2YXIgSHIzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNSA9IHQxNDtcbiAgICAgICAgdmFyIEhyNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIHQxID0gZHN0X3gwO1xuICAgICAgICB0MiA9IGRzdF94MjtcbiAgICAgICAgdDQgPSBkc3RfeTE7XG4gICAgICAgIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB0NiA9IGRzdF95MztcbiAgICAgICAgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB0OCA9IHQyICogdDc7XG4gICAgICAgIHQ5ID0gZHN0X3kyO1xuICAgICAgICB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB0MTEgPSBkc3RfeDE7XG4gICAgICAgIHQxNCA9IGRzdF95MDtcbiAgICAgICAgdDE1ID0gZHN0X3gzO1xuICAgICAgICB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIbDAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSGwxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIbDIgPSB0MTtcbiAgICAgICAgdmFyIEhsMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDUgPSB0MTQ7XG4gICAgICAgIHZhciBIbDYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIbDcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGNvZGUgY29tcHV0ZXMgUiA9IEhsICogaW52ZXJzZSBIclxuICAgICAgICB0MiA9IEhyNCAtIEhyNyAqIEhyNTtcbiAgICAgICAgdDQgPSBIcjAgKiBIcjQ7XG4gICAgICAgIHQ1ID0gSHIwICogSHI1O1xuICAgICAgICB0NyA9IEhyMyAqIEhyMTtcbiAgICAgICAgdDggPSBIcjIgKiBIcjM7XG4gICAgICAgIHQxMCA9IEhyMSAqIEhyNjtcbiAgICAgICAgdmFyIHQxMiA9IEhyMiAqIEhyNjtcbiAgICAgICAgdDE1ID0gMS4wIC8gKHQ0IC0gdDUgKiBIcjcgLSB0NyArIHQ4ICogSHI3ICsgdDEwICogSHI1IC0gdDEyICogSHI0KTtcbiAgICAgICAgdDE4ID0gLUhyMyArIEhyNSAqIEhyNjtcbiAgICAgICAgdmFyIHQyMyA9IC1IcjMgKiBIcjcgKyBIcjQgKiBIcjY7XG4gICAgICAgIHQyOCA9IC1IcjEgKyBIcjIgKiBIcjc7XG4gICAgICAgIHZhciB0MzEgPSBIcjAgLSB0MTI7XG4gICAgICAgIHQzNSA9IEhyMCAqIEhyNyAtIHQxMDtcbiAgICAgICAgdDQxID0gLUhyMSAqIEhyNSArIEhyMiAqIEhyNDtcbiAgICAgICAgdmFyIHQ0NCA9IHQ1IC0gdDg7XG4gICAgICAgIHZhciB0NDcgPSB0NCAtIHQ3O1xuICAgICAgICB0NDggPSB0MiAqIHQxNTtcbiAgICAgICAgdmFyIHQ0OSA9IHQyOCAqIHQxNTtcbiAgICAgICAgdmFyIHQ1MCA9IHQ0MSAqIHQxNTtcbiAgICAgICAgdmFyIG1hdCA9IG1vZGVsLmRhdGE7XG4gICAgICAgIG1hdFswXSA9IEhsMCAqIHQ0OCArIEhsMSAqICh0MTggKiB0MTUpIC0gSGwyICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFsxXSA9IEhsMCAqIHQ0OSArIEhsMSAqICh0MzEgKiB0MTUpIC0gSGwyICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFsyXSA9IC1IbDAgKiB0NTAgLSBIbDEgKiAodDQ0ICogdDE1KSArIEhsMiAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbM10gPSBIbDMgKiB0NDggKyBIbDQgKiAodDE4ICogdDE1KSAtIEhsNSAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbNF0gPSBIbDMgKiB0NDkgKyBIbDQgKiAodDMxICogdDE1KSAtIEhsNSAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbNV0gPSAtSGwzICogdDUwIC0gSGw0ICogKHQ0NCAqIHQxNSkgKyBIbDUgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzZdID0gSGw2ICogdDQ4ICsgSGw3ICogKHQxOCAqIHQxNSkgLSB0MjMgKiB0MTU7XG4gICAgICAgIG1hdFs3XSA9IEhsNiAqIHQ0OSArIEhsNyAqICh0MzEgKiB0MTUpIC0gdDM1ICogdDE1O1xuICAgICAgICBtYXRbOF0gPSAtSGw2ICogdDUwIC0gSGw3ICogKHQ0NCAqIHQxNSkgKyB0NDcgKiB0MTU7XG4gICAgfVxuXG4gICAgLy8gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gd2FzIGRlcml2ZWQgZnJvbSAqQlNEIHN5c3RlbSBxc29ydCgpOlxuICAgIC8vIENvcHlyaWdodCAoYykgMTk5MiwgMTk5M1xuICAgIC8vIFRoZSBSZWdlbnRzIG9mIHRoZSBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIHFzb3J0KGFycmF5LCBsb3csIGhpZ2gsIGNtcCkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheSwgbG93LCBoaWdoKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBjbGFzcyBsaW5hbGcgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBtID0gMCwgbCA9IDAsIGlkeCA9IDAsIF9pbiA9IDAsIF9pbjIgPSAwO1xuICAgICAgICB2YXIgaXRlcnMgPSAwLCBtYXhfaXRlciA9IG4gKiBuICogMzA7XG4gICAgICAgIHZhciBtdiA9IDAuMCwgdmFsID0gMC4wLCBwID0gMC4wLCB5ID0gMC4wLCB0ID0gMC4wLCBzID0gMC4wLCBjID0gMC4wLCBhMCA9IDAuMCwgYjAgPSAwLjA7XG5cbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgdmFyIGluZEMgPSBpbmRDX2J1ZmYuaTMyO1xuXG4gICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpICogdnN0ZXA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSAqIGtdO1xuICAgICAgICAgICAgaWYgKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IGsgKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgbV0pLCBpID0gayArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFba10pLCBpID0gMTsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gMSkgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yIChrID0gMCwgbXYgPSBNYXRoLmFicyhBW2luZFJbMF1dKSwgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gaW5kUltrXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcblxuICAgICAgICAgICAgeSA9IChXW2xdIC0gV1trXSkgKiAwLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0IC8gcztcbiAgICAgICAgICAgIHMgPSBwIC8gczsgdCA9IChwIC8gdCkgKiBwO1xuICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcblxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IGlkeCArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIG1dKSwgaSA9IGlkeCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtpZHhdKSwgaSA9IDE7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kQ1tpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbbV0gPCBXW2ldKVxuICAgICAgICAgICAgICAgICAgICBtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFYsIHZzdGVwICogbSArIGksIHZzdGVwICogayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbCBcblxuICAgICAgICBpZiAobSA8IG4pIHtcbiAgICAgICAgICAgIGF0ID0gMTtcbiAgICAgICAgICAgIGkgPSBtO1xuICAgICAgICAgICAgbSA9IG47XG4gICAgICAgICAgICBuID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG0gKiBtKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJhbnNwb3NlXG4gICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKGFfbXQsIEEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9uICogX207IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbiAqIG07IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaVNWREltcGwoYV9tdC5kYXRhLCBtLCB3X210LmRhdGEsIHZfbXQuZGF0YSwgbiwgbSwgbiwgbSk7XG5cbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSB3X210LmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IF9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgdl9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIHZfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcblxuICAgIH1cblxuICAgIHN2ZF9zb2x2ZShBLCBYLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHhzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcblxuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGJkID0gQi5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIHhzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh3ZFtqXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjAsIHB1ID0gMDsgayA8IG5yb3dzOyBrKyssIHB1ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdWRbcHUgKyBqXSAqIGJkW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhzdW0gKz0gc3VtICogdmRbcHYgKyBqXSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWksIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5vcmIgPSBjbGFzcyBvcmIgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLmltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgfVxuXG4gICAgZGVzY3JpYmUoc3JjLCBjb3JuZXJzLCBjb3VudCwgZGVzY3JpcHRvcnMpIHtcbiAgICAgICAgdmFyIERFU0NSX1NJWkUgPSAzMjsgLy8gYnl0ZXM7XG4gICAgICAgIHZhciBpID0gMCwgYiA9IDAsIHB4ID0gMC4wLCBweSA9IDAuMCwgYW5nbGUgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAsIHQxID0gMCwgdmFsID0gMDtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHBhdGNoX2QgPSB0aGlzLnBhdGNoX2ltZy5kYXRhO1xuICAgICAgICB2YXIgcGF0Y2hfb2ZmID0gMTYgKiAzMiArIDE2OyAvLyBjZW50ZXIgb2YgcGF0Y2hcbiAgICAgICAgdmFyIHBhdHQgPSAwO1xuXG4gICAgICAgIGlmICghKGRlc2NyaXB0b3JzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpKSB7XG4gICAgICAgICAgICAvLyByZWxvY2F0ZSB0byBVOCB0eXBlXG4gICAgICAgICAgICBkZXNjcmlwdG9ycy50eXBlID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY29scyA9IERFU0NSX1NJWkU7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5yb3dzID0gY291bnQ7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jaGFubmVsID0gMTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5yZXNpemUoREVTQ1JfU0laRSwgY291bnQsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlc2NyX2QgPSBkZXNjcmlwdG9ycy5kYXRhO1xuICAgICAgICB2YXIgZGVzY3Jfb2ZmID0gMDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHggPSBjb3JuZXJzW2ldLng7XG4gICAgICAgICAgICBweSA9IGNvcm5lcnNbaV0ueTtcbiAgICAgICAgICAgIGFuZ2xlID0gY29ybmVyc1tpXS5hbmdsZTtcblxuICAgICAgICAgICAgcmVjdGlmeV9wYXRjaChzcmMsIHRoaXMucGF0Y2hfaW1nLCBhbmdsZSwgcHgsIHB5LCAzMiwgdGhpcy5ILCB0aGlzLmltZ3Byb2MpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9ICh0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC55YXBlID0geWFwZTtcblxuanNmZWF0TmV4dC55YXBlMDYgPSB5YXBlMDY7XG5cbmpzZmVhdE5leHQubW90aW9uX2VzdGltYXRvciA9IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3IgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbmVlZF9jbnQsIG1heF9jbnQsIGZyb21fc3ViLCB0b19zdWIpIHtcbiAgICAgICAgdmFyIG1heF90cnkgPSAxMDAwO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBzc2l0ZXIgPSAwLCBpZHhfaSA9IDAsIG9rID0gZmFsc2U7XG4gICAgICAgIGZvciAoOyBzc2l0ZXIgPCBtYXhfdHJ5OyArK3NzaXRlcikge1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnk7KSB7XG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZHhfaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFvaykge1xuICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeF9pID0gaW5kaWNlc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heF9jbnQpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeF9pID09IGluZGljZXNbal0pIHsgb2sgPSBmYWxzZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tX3N1YltpXSA9IGZyb21baWR4X2ldO1xuICAgICAgICAgICAgICAgIHRvX3N1YltpXSA9IHRvW2lkeF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWtlcm5lbC5jaGVja19zdWJzZXQoZnJvbV9zdWIsIHRvX3N1YiwgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzaXRlcisrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGkgPT0gbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeSk7XG4gICAgfVxuXG4gICAgZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgdGhyZXNoLCBlcnIsIG1hc2spIHtcbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwLCBpID0gMCwgZiA9IDA7XG4gICAgICAgIHZhciB0ID0gdGhyZXNoICogdGhyZXNoO1xuXG4gICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZiA9IGVycltpXSA8PSB0O1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOEMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlubGllcnNfbWF4ID0gLTEsIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBNLCBmcm9tLCB0bywgY291bnQsIHBhcmFtcy50aHJlc2gsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobnVtaW5saWVycyA+IE1hdGgubWF4KGlubGllcnNfbWF4LCBtb2RlbF9wb2ludHMgLSAxKSkge1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgaW5saWVyc19tYXggPSBudW1pbmxpZXJzO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcbiAgICAgICAgICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKChjb3VudCAtIG51bWlubGllcnMpIC8gY291bnQsIG5pdGVycyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsbWVkcyhwYXJhbXMsIGtlcm5lbCwgZnJvbSwgdG8sIGNvdW50LCBtb2RlbCwgbWFzaywgbWF4X2l0ZXJzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9tYXRoID0gbmV3IGpzZmVhdE5leHQubWF0aCgpO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuYWZmaW5lMmQgPWFmZmluZTJkO1xuXG5qc2ZlYXROZXh0LmhvbW9ncmFwaHkyZCA9IGhvbW9ncmFwaHkyZDtcblxuanNmZWF0TmV4dC5vcHRpY2FsX2Zsb3dfbGsgPSBjbGFzcyBvcHRpY2FsX2Zsb3dfbGsgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpXG4gICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2ID0gX2ltZ3Byb2Muc2NoYXJyX2Rlcml2YXRpdmVzO1xuICAgIH1cbiAgICB0cmFjayhwcmV2X3B5ciwgY3Vycl9weXIsIHByZXZfeHksIGN1cnJfeHksIGNvdW50LCB3aW5fc2l6ZSwgbWF4X2l0ZXIsIHN0YXR1cywgZXBzLCBtaW5fZWlnZW5fdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXIgPSAzMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN0YXR1cyA9PT0gXCJ1bmRlZmluZWRcIikgeyBzdGF0dXMgPSBuZXcgVWludDhBcnJheShjb3VudCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC4wMTsgfVxuICAgICAgICBpZiAodHlwZW9mIG1pbl9laWdlbl90aHJlc2hvbGQgPT09IFwidW5kZWZpbmVkXCIpIHsgbWluX2VpZ2VuX3RocmVzaG9sZCA9IDAuMDAwMTsgfVxuXG4gICAgICAgIHZhciBoYWxmX3dpbiA9ICh3aW5fc2l6ZSAtIDEpICogMC41O1xuICAgICAgICB2YXIgd2luX2FyZWEgPSAod2luX3NpemUgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICB2YXIgd2luX2FyZWEyID0gd2luX2FyZWEgPDwgMTtcbiAgICAgICAgdmFyIHByZXZfaW1ncyA9IHByZXZfcHlyLmRhdGEsIG5leHRfaW1ncyA9IGN1cnJfcHlyLmRhdGE7XG4gICAgICAgIHZhciBpbWdfcHJldiA9IHByZXZfaW1nc1swXS5kYXRhLCBpbWdfbmV4dCA9IG5leHRfaW1nc1swXS5kYXRhO1xuICAgICAgICB2YXIgdzAgPSBwcmV2X2ltZ3NbMF0uY29scywgaDAgPSBwcmV2X2ltZ3NbMF0ucm93cywgbHcgPSAwLCBsaCA9IDA7XG5cbiAgICAgICAgdmFyIGl3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYSA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2l3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYTIgPDwgMik7XG4gICAgICAgIHZhciBkZXJpdl9sZXZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaDAgKiAodzAgPDwgMSkpIDw8IDIpO1xuXG4gICAgICAgIHZhciBkZXJpdl9tID0gbmV3IG1hdHJpeF90KHcwLCBoMCwgSlNGRUFUX0NPTlNUQU5UUy5TMzJDMl90LCBkZXJpdl9sZXZfbm9kZS5kYXRhKTtcblxuICAgICAgICB2YXIgaXdpbl9idWYgPSBpd2luX25vZGUuaTMyO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbiA9IGRlcml2X2l3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9sZXYgPSBkZXJpdl9sZXZfbm9kZS5pMzI7XG5cbiAgICAgICAgdmFyIGRzdGVwID0gMCwgc3JjID0gMCwgZHNyYyA9IDAsIGlwdHIgPSAwLCBkaXB0ciA9IDAsIGpwdHIgPSAwO1xuICAgICAgICB2YXIgbGV2X3NjID0gMC4wLCBwcmV2X3ggPSAwLjAsIHByZXZfeSA9IDAuMCwgbmV4dF94ID0gMC4wLCBuZXh0X3kgPSAwLjA7XG4gICAgICAgIHZhciBwcmV2X2RlbHRhX3ggPSAwLjAsIHByZXZfZGVsdGFfeSA9IDAuMCwgZGVsdGFfeCA9IDAuMCwgZGVsdGFfeSA9IDAuMDtcbiAgICAgICAgdmFyIGlwcmV2X3ggPSAwLCBpcHJldl95ID0gMCwgaW5leHRfeCA9IDAsIGluZXh0X3kgPSAwO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCB4ID0gMCwgeSA9IDAsIGxldmVsID0gMCwgcHRpZCA9IDAsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgYnJkX3RsID0gMCwgYnJkX3IgPSAwLCBicmRfYiA9IDA7XG4gICAgICAgIHZhciBhID0gMC4wLCBiID0gMC4wLCBiMSA9IDAuMCwgYjIgPSAwLjA7XG5cbiAgICAgICAgLy8gZml4ZWQgcG9pbnQgbWF0aFxuICAgICAgICB2YXIgV19CSVRTMTQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzFtNSA9IFdfQklUUzQgLSA1O1xuICAgICAgICB2YXIgV19CSVRTMW01MSA9ICgxIDw8ICgoV19CSVRTMW01KSAtIDEpKTtcbiAgICAgICAgdmFyIFdfQklUUzE0XyA9ICgxIDw8IFdfQklUUzE0KTtcbiAgICAgICAgdmFyIFdfQklUUzQxID0gKDEgPDwgKChXX0JJVFM0KSAtIDEpKTtcbiAgICAgICAgdmFyIEZMVF9TQ0FMRSA9IDEuMCAvICgxIDw8IDIwKTtcbiAgICAgICAgdmFyIGl3MDAgPSAwLCBpdzAxID0gMCwgaXcxMCA9IDAsIGl3MTEgPSAwLCBpdmFsID0gMCwgaXh2YWwgPSAwLCBpeXZhbCA9IDA7XG4gICAgICAgIHZhciBBMTEgPSAwLjAsIEExMiA9IDAuMCwgQTIyID0gMC4wLCBEID0gMC4wLCBtaW5fZWlnID0gMC4wO1xuXG4gICAgICAgIHZhciBGTFRfRVBTSUxPTiA9IDAuMDAwMDAwMTE5MjA5Mjk7XG4gICAgICAgIGVwcyAqPSBlcHM7XG5cbiAgICAgICAgLy8gcmVzZXQgc3RhdHVzXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc3RhdHVzW2ldID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXhfbGV2ZWwgPSAocHJldl9weXIubGV2ZWxzIC0gMSkgfCAwO1xuICAgICAgICBsZXZlbCA9IG1heF9sZXZlbDtcblxuICAgICAgICBmb3IgKDsgbGV2ZWwgPj0gMDsgLS1sZXZlbCkge1xuICAgICAgICAgICAgbGV2X3NjID0gKDEuMCAvICgxIDw8IGxldmVsKSk7XG4gICAgICAgICAgICBsdyA9IHcwID4+IGxldmVsO1xuICAgICAgICAgICAgbGggPSBoMCA+PiBsZXZlbDtcbiAgICAgICAgICAgIGRzdGVwID0gbHcgPDwgMTtcbiAgICAgICAgICAgIGltZ19wcmV2ID0gcHJldl9pbWdzW2xldmVsXS5kYXRhO1xuICAgICAgICAgICAgaW1nX25leHQgPSBuZXh0X2ltZ3NbbGV2ZWxdLmRhdGE7XG5cbiAgICAgICAgICAgIGJyZF9yID0gKGx3IC0gd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgIGJyZF9iID0gKGxoIC0gd2luX3NpemUpIHwgMDtcblxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxldmVsIGRlcml2YXRpdmVzXG4gICAgICAgICAgICB0aGlzLnNjaGFycl9kZXJpdihwcmV2X2ltZ3NbbGV2ZWxdLCBkZXJpdl9tKTtcblxuICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBvaW50c1xuICAgICAgICAgICAgZm9yIChwdGlkID0gMDsgcHRpZCA8IGNvdW50OyArK3B0aWQpIHtcbiAgICAgICAgICAgICAgICBpID0gcHRpZCA8PCAxO1xuICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICBwcmV2X3ggPSBwcmV2X3h5W2ldICogbGV2X3NjO1xuICAgICAgICAgICAgICAgIHByZXZfeSA9IHByZXZfeHlbal0gKiBsZXZfc2M7XG5cbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gbWF4X2xldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IHByZXZfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gcHJldl95O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IGN1cnJfeHlbaV0gKiAyLjA7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSA9IGN1cnJfeHlbal0gKiAyLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3g7XG4gICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeTtcblxuICAgICAgICAgICAgICAgIHByZXZfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgaXByZXZfeCA9IHByZXZfeCB8IDA7XG4gICAgICAgICAgICAgICAgaXByZXZfeSA9IHByZXZfeSB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBib3JkZXIgY2hlY2tcbiAgICAgICAgICAgICAgICB4ID0gKGlwcmV2X3ggPD0gYnJkX3RsKSB8IChpcHJldl94ID49IGJyZF9yKSB8IChpcHJldl95IDw9IGJyZF90bCkgfCAoaXByZXZfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gKGluZXh0X3ggPD0gYnJkX3RsKSB8IChpbmV4dF94ID49IGJyZF9yKSB8IChpbmV4dF95IDw9IGJyZF90bCkgfCAoaW5leHRfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MDEgPSAoKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcbiAgICAgICAgICAgICAgICAgICAgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcHRyID0gKCh5ICsgaW5leHRfeSkgKiBsdyArIGluZXh0X3gpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsranB0ciwgKytpcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX25leHRbanB0cl0pICogaXcwMCArIChpbWdfbmV4dFtqcHRyICsgMV0pICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfbmV4dFtqcHRyICsgbHddKSAqIGl3MTAgKyAoaW1nX25leHRbanB0ciArIGx3ICsgMV0pICogaXcxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCAtIGl3aW5fYnVmW2lwdHJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYjEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICBiMiAqPSBGTFRfU0NBTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeCA9ICgoQTEyICogYjIgLSBBMjIgKiBiMSkgKiBEKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9ICgoQTEyICogYjEgLSBBMTEgKiBiMikgKiBEKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggKz0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ICs9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3ggKyBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeSArIGhhbGZfd2luO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95IDw9IGVwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA+IDAgJiYgTWF0aC5hYnMoZGVsdGFfeCArIHByZXZfZGVsdGFfeCkgPCAwLjAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkZWx0YV95ICsgcHJldl9kZWx0YV95KSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gLT0gZGVsdGFfeCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gLT0gZGVsdGFfeSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIHBvaW50cyBsb29wXG4gICAgICAgIH0gLy8gbGV2ZWxzIGxvb3BcblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2l3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9sZXZfbm9kZSk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdCwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tLCB0bykge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQywgQSwgQikge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMSwgTTEyLCBNMTMsXG4gICAgICAgIE0yMSwgTTIyLCBNMjMsXG4gICAgICAgIE0zMSwgTTMyLCBNMzMpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90eXBlIGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRyaXhfdCB7XG4gICAgY29uc3RydWN0b3IoYywgciwgX2RhdGFfdHlwZSwgX2RhdGFfYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKSB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyKSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYywgciwgY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHRocmVzaCwgZXBzLCBwcm9iKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdCAge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMsIGJ1ZmZlcikge1xuICAgICAgICAvL3N1cGVyKClcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsLTMsIDksNS8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLFxuICAgIDQsMiwgNywtMTIvKm1lYW4gKDEuMTI0NjFlLTA1KSwgY29ycmVsYXRpb24gKDAuMDQzNzU4NCkqLyxcbiAgICAtMTEsOSwgLTgsMi8qbWVhbiAoMy4zNzM4MmUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjE3NDA5KSovLFxuICAgIDcsLTEyLCAxMiwtMTMvKm1lYW4gKDUuNjIzMDNlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYzNjk3NykqLyxcbiAgICAyLC0xMywgMiwxMi8qbWVhbiAoMC4wMDAxMzQ5NTMpLCBjb3JyZWxhdGlvbiAoMC4wODUwOTkpKi8sXG4gICAgMSwtNywgMSw2LyptZWFuICgwLjAwMDUyODU2NSksIGNvcnJlbGF0aW9uICgwLjA4NTcxNzUpKi8sXG4gICAgLTIsLTEwLCAtMiwtNC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsLTEzLCAtMTEsLTgvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sXG4gICAgLTEzLC0zLCAtMTIsLTkvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLFxuICAgIDEwLDQsIDExLDkvKm1lYW4gKDAuMTIyMDY1KSwgY29ycmVsYXRpb24gKDAuMDkzMjg1KSovLFxuICAgIC0xMywtOCwgLTgsLTkvKm1lYW4gKDAuMTYyNzg3KSwgY29ycmVsYXRpb24gKDAuMDk0Mjc0OCkqLyxcbiAgICAtMTEsNywgLTksMTIvKm1lYW4gKDAuMjE1NjEpLCBjb3JyZWxhdGlvbiAoMC4wOTc0NDM4KSovLFxuICAgIDcsNywgMTIsNi8qbWVhbiAoMC4xNjA1ODMpLCBjb3JyZWxhdGlvbiAoMC4xMzAwNjQpKi8sXG4gICAgLTQsLTUsIC0zLDAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywyLCAtMTIsLTMvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sXG4gICAgLTksMCwgLTcsNS8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sXG4gICAgMTIsLTYsIDEyLC0xLyptZWFuICgwLjA2NzYyMjYpLCBjb3JyZWxhdGlvbiAoMC4xNjY4OSkqLyxcbiAgICAtMyw2LCAtMiwxMi8qbWVhbiAoMC4xNjY4NDcpLCBjb3JyZWxhdGlvbiAoMC4xNzE2ODIpKi8sXG4gICAgLTYsLTEzLCAtNCwtOC8qbWVhbiAoMC4xMDEyMTUpLCBjb3JyZWxhdGlvbiAoMC4xNzk3MTYpKi8sXG4gICAgMTEsLTEzLCAxMiwtOC8qbWVhbiAoMC4yMDA2NDEpLCBjb3JyZWxhdGlvbiAoMC4xOTIyNzkpKi8sXG4gICAgNCw3LCA1LDEvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLFxuICAgIDUsLTMsIDEwLC0zLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLyxcbiAgICAzLC03LCA2LDEyLyptZWFuICgwLjA3MDk5NjQpLCBjb3JyZWxhdGlvbiAoMC4yMTA4NzIpKi8sXG4gICAgLTgsLTcsIC02LC0yLyptZWFuICgwLjA5Mzk4MzQpLCBjb3JyZWxhdGlvbiAoMC4yMTI1ODkpKi8sXG4gICAgLTIsMTEsIC0xLC0xMC8qbWVhbiAoMC4xMjc3NzgpLCBjb3JyZWxhdGlvbiAoMC4yMDg2NikqLyxcbiAgICAtMTMsMTIsIC04LDEwLyptZWFuICgwLjE0NzgzKSwgY29ycmVsYXRpb24gKDAuMjA2MzU2KSovLFxuICAgIC03LDMsIC01LC0zLyptZWFuICgwLjE4MjE0MSksIGNvcnJlbGF0aW9uICgwLjE5ODk0MikqLyxcbiAgICAtNCwyLCAtMyw3LyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLFxuICAgIC0xMCwtMTIsIC02LDExLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sXG4gICAgNSwtMTIsIDYsLTcvKm1lYW4gKDAuMjIyMzEyKSwgY29ycmVsYXRpb24gKDAuMjMzMjQpKi8sXG4gICAgNSwtNiwgNywtMS8qbWVhbiAoMC4yMjkwODIpLCBjb3JyZWxhdGlvbiAoMC4yMzM4OSkqLyxcbiAgICAxLDAsIDQsLTUvKm1lYW4gKDAuMjQxNTc3KSwgY29ycmVsYXRpb24gKDAuMjE1Mjg2KSovLFxuICAgIDksMTEsIDExLC0xMy8qbWVhbiAoMC4wMDMzODUwNyksIGNvcnJlbGF0aW9uICgwLjI1MTM3MykqLyxcbiAgICA0LDcsIDQsMTIvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsLTEsIDQsNC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sXG4gICAgLTQsLTEyLCAtMiw3LyptZWFuICgwLjE4Mjc3MSksIGNvcnJlbGF0aW9uICgwLjI0NDg2NykqLyxcbiAgICAtOCwtNSwgLTcsLTEwLyptZWFuICgwLjE4Njg5OCksIGNvcnJlbGF0aW9uICgwLjIzOTAxKSovLFxuICAgIDQsMTEsIDksMTIvKm1lYW4gKDAuMjI2MjI2KSwgY29ycmVsYXRpb24gKDAuMjU4MjU1KSovLFxuICAgIDAsLTgsIDEsLTEzLyptZWFuICgwLjA4OTc4ODYpLCBjb3JyZWxhdGlvbiAoMC4yNzQ4MjcpKi8sXG4gICAgLTEzLC0yLCAtOCwyLyptZWFuICgwLjE0ODc3NCksIGNvcnJlbGF0aW9uICgwLjI4MDY1KSovLFxuICAgIC0zLC0yLCAtMiwzLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLyxcbiAgICAtNiw5LCAtNCwtOS8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sXG4gICAgOCwxMiwgMTAsNy8qbWVhbiAoMC4yMjUzMzcpLCBjb3JyZWxhdGlvbiAoMC4yODI4NTEpKi8sXG4gICAgMCw5LCAxLDMvKm1lYW4gKDAuMjI2Njg3KSwgY29ycmVsYXRpb24gKDAuMjc4NzM0KSovLFxuICAgIDcsLTUsIDExLC0xMC8qbWVhbiAoMC4wMDY5Mzg4MiksIGNvcnJlbGF0aW9uICgwLjMwNTE2MSkqLyxcbiAgICAtMTMsLTYsIC0xMSwwLyptZWFuICgwLjAyMjcyODMpLCBjb3JyZWxhdGlvbiAoMC4zMDAxODEpKi8sXG4gICAgMTAsNywgMTIsMS8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwtMywgLTYsMTIvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLFxuICAgIDEwLC05LCAxMiwtNC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sXG4gICAgLTEzLDgsIC04LC0xMi8qbWVhbiAoMC4xNDkyMDIpLCBjb3JyZWxhdGlvbiAoMC4zMDg5MTgpKi8sXG4gICAgLTEzLDAsIC04LC00LyptZWFuICgwLjE2MDkwOSksIGNvcnJlbGF0aW9uICgwLjMxMDAxMykqLyxcbiAgICAzLDMsIDcsOC8qbWVhbiAoMC4xNzc3NTUpLCBjb3JyZWxhdGlvbiAoMC4zMDkzOTQpKi8sXG4gICAgNSw3LCAxMCwtNy8qbWVhbiAoMC4yMTIzMzcpLCBjb3JyZWxhdGlvbiAoMC4zMTAzMTUpKi8sXG4gICAgLTEsNywgMSwtMTIvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLFxuICAgIDMsLTEwLCA1LDYvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLFxuICAgIDIsLTQsIDMsLTEwLyptZWFuICgwLjAwNDk0ODI3KSwgY29ycmVsYXRpb24gKDAuMzQ0OTQ4KSovLFxuICAgIC0xMywwLCAtMTMsNS8qbWVhbiAoMC4wNTQ5MTQ1KSwgY29ycmVsYXRpb24gKDAuMzQ0Njc1KSovLFxuICAgIC0xMywtNywgLTEyLDEyLyptZWFuICgwLjEwMzM4NSksIGNvcnJlbGF0aW9uICgwLjM0MjcxNSkqLyxcbiAgICAtMTMsMywgLTExLDgvKm1lYW4gKDAuMTM0MjIyKSwgY29ycmVsYXRpb24gKDAuMzIyOTIyKSovLFxuICAgIC03LDEyLCAtNCw3LyptZWFuICgwLjE1MzI4NCksIGNvcnJlbGF0aW9uICgwLjMzNzA2MSkqLyxcbiAgICA2LC0xMCwgMTIsOC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sXG4gICAgLTksLTEsIC03LC02LyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLFxuICAgIC0yLC01LCAwLDEyLyptZWFuICgwLjIwMTUxOCksIGNvcnJlbGF0aW9uICgwLjM0MDYzNSkqLyxcbiAgICAtMTIsNSwgLTcsNS8qbWVhbiAoMC4yMDc4MDUpLCBjb3JyZWxhdGlvbiAoMC4zMzU2MzEpKi8sXG4gICAgMywtMTAsIDgsLTEzLyptZWFuICgwLjIyNDQzOCksIGNvcnJlbGF0aW9uICgwLjM0NTA0KSovLFxuICAgIC03LC03LCAtNCw1LyptZWFuICgwLjIzOTM2MSksIGNvcnJlbGF0aW9uICgwLjMzODA1MykqLyxcbiAgICAtMywtMiwgLTEsLTcvKm1lYW4gKDAuMjQwNzQ0KSwgY29ycmVsYXRpb24gKDAuMzQ0MzIyKSovLFxuICAgIDIsOSwgNSwtMTEvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sXG4gICAgLTExLC0xMywgLTUsLTEzLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLyxcbiAgICAtMSw2LCAwLC0xLyptZWFuICgwLjI0NzU3MSksIGNvcnJlbGF0aW9uICgwLjM0MzY4NCkqLyxcbiAgICA1LC0zLCA1LDIvKm1lYW4gKDAuMDAwNjk3MjU2KSwgY29ycmVsYXRpb24gKDAuMzU3MjY1KSovLFxuICAgIC00LC0xMywgLTQsMTIvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC4zNzM4MjcpKi8sXG4gICAgLTksLTYsIC05LDYvKm1lYW4gKDAuMDEyNjg1NiksIGNvcnJlbGF0aW9uICgwLjM3MzkzOCkqLyxcbiAgICAtMTIsLTEwLCAtOCwtNC8qbWVhbiAoMC4wMTUyNDk3KSwgY29ycmVsYXRpb24gKDAuMzY0MjM3KSovLFxuICAgIDEwLDIsIDEyLC0zLyptZWFuICgwLjAyOTk5MzMpLCBjb3JyZWxhdGlvbiAoMC4zNDUyOTIpKi8sXG4gICAgNywxMiwgMTIsMTIvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLyxcbiAgICAtNywtMTMsIC02LDUvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLyxcbiAgICAtNCw5LCAtMyw0LyptZWFuICgwLjA5OTg2NSksIGNvcnJlbGF0aW9uICgwLjM3MjI3NikqLyxcbiAgICA3LC0xLCAxMiwyLyptZWFuICgwLjExNzA4MyksIGNvcnJlbGF0aW9uICgwLjM2NDUyOSkqLyxcbiAgICAtNyw2LCAtNSwxLyptZWFuICgwLjEyNjEyNSksIGNvcnJlbGF0aW9uICgwLjM2OTYwNikqLyxcbiAgICAtMTMsMTEsIC0xMiw1LyptZWFuICgwLjEzMDM2NCksIGNvcnJlbGF0aW9uICgwLjM1ODUwMikqLyxcbiAgICAtMyw3LCAtMiwtNi8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC4zNzU1MzEpKi8sXG4gICAgNywtOCwgMTIsLTcvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLFxuICAgIC0xMywtNywgLTExLC0xMi8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sXG4gICAgMSwtMywgMTIsMTIvKm1lYW4gKDAuMTgzMzc4KSwgY29ycmVsYXRpb24gKDAuMzcxOTE2KSovLFxuICAgIDIsLTYsIDMsMC8qbWVhbiAoMC4yMjg3MTEpLCBjb3JyZWxhdGlvbiAoMC4zNzE3NjEpKi8sXG4gICAgLTQsMywgLTIsLTEzLyptZWFuICgwLjI0NzIxMSksIGNvcnJlbGF0aW9uICgwLjM2NDA2MykqLyxcbiAgICAtMSwtMTMsIDEsOS8qbWVhbiAoMC4yNDkzMjUpLCBjb3JyZWxhdGlvbiAoMC4zNzgxMzkpKi8sXG4gICAgNywxLCA4LC02LyptZWFuICgwLjAwMDY1MjI3MiksIGNvcnJlbGF0aW9uICgwLjQxMTY4MikqLyxcbiAgICAxLC0xLCAzLDEyLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLFxuICAgIDksMSwgMTIsNi8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLFxuICAgIC0xLC05LCAtMSwzLyptZWFuICgwLjAzNjQ0ODUpLCBjb3JyZWxhdGlvbiAoMC40MTA3NTIpKi8sXG4gICAgLTEzLC0xMywgLTEwLDUvKm1lYW4gKDAuMDM3NjA2OCksIGNvcnJlbGF0aW9uICgwLjM5ODM3NCkqLyxcbiAgICA3LDcsIDEwLDEyLyptZWFuICgwLjA0MjQyMDIpLCBjb3JyZWxhdGlvbiAoMC40MDU2NjMpKi8sXG4gICAgMTIsLTUsIDEyLDkvKm1lYW4gKDAuMDk0MjY0NSksIGNvcnJlbGF0aW9uICgwLjQxMDQyMikqLyxcbiAgICA2LDMsIDcsMTEvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LC0xMywgNiwxMC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sXG4gICAgMiwtMTIsIDIsMy8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC40MTYwNzYpKi8sXG4gICAgMyw4LCA0LC02LyptZWFuICgwLjE2NTA4MSksIGNvcnJlbGF0aW9uICgwLjQxNzU2OSkqLyxcbiAgICAyLDYsIDEyLC0xMy8qbWVhbiAoMC4xNzE4NzQpLCBjb3JyZWxhdGlvbiAoMC40MDg0NzEpKi8sXG4gICAgOSwtMTIsIDEwLDMvKm1lYW4gKDAuMTc1MTQ2KSwgY29ycmVsYXRpb24gKDAuNDEyOTYpKi8sXG4gICAgLTgsNCwgLTcsOS8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLDEyLCAtNCwtNi8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sXG4gICAgMSwxMiwgMiwtOC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sXG4gICAgNiwtOSwgNywtNC8qbWVhbiAoMC4xOTI2NjgpLCBjb3JyZWxhdGlvbiAoMC4zOTQ3NzEpKi8sXG4gICAgMiwzLCAzLC0yLyptZWFuICgwLjIwMDE1NyksIGNvcnJlbGF0aW9uICgwLjQwODMwMykqLyxcbiAgICA2LDMsIDExLDAvKm1lYW4gKDAuMjA0NTg4KSwgY29ycmVsYXRpb24gKDAuNDExNzYyKSovLFxuICAgIDMsLTMsIDgsLTgvKm1lYW4gKDAuMjA1OTA0KSwgY29ycmVsYXRpb24gKDAuNDE2Mjk0KSovLFxuICAgIDcsOCwgOSwzLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLyxcbiAgICAtMTEsLTUsIC02LC00LyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLyxcbiAgICAtMTAsMTEsIC01LDEwLyptZWFuICgwLjI0NzY3MiksIGNvcnJlbGF0aW9uICgwLjQxMzM5MikqLyxcbiAgICAtNSwtOCwgLTMsMTIvKm1lYW4gKDAuMjQ3NzQpLCBjb3JyZWxhdGlvbiAoMC40MTE0MTYpKi8sXG4gICAgLTEwLDUsIC05LDAvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC40NTQwMDMpKi8sXG4gICAgOCwtMSwgMTIsLTYvKm1lYW4gKDAuMDI5MzYzNSksIGNvcnJlbGF0aW9uICgwLjQ1NTM2OCkqLyxcbiAgICA0LC02LCA2LC0xMS8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwxMiwgLTgsNy8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLFxuICAgIDQsLTIsIDYsNy8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sXG4gICAgLTIsMCwgLTIsMTIvKm1lYW4gKDAuMDUyNTk3OCksIGNvcnJlbGF0aW9uICgwLjQ0MzM4KSovLFxuICAgIC01LC04LCAtNSwyLyptZWFuICgwLjA2Mjk2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTcwOTYpKi8sXG4gICAgNywtNiwgMTAsMTIvKm1lYW4gKDAuMDY1Mzg0NiksIGNvcnJlbGF0aW9uICgwLjQ0NTYyMykqLyxcbiAgICAtOSwtMTMsIC04LC04LyptZWFuICgwLjA4NTg3NDkpLCBjb3JyZWxhdGlvbiAoMC40NDk3ODkpKi8sXG4gICAgLTUsLTEzLCAtNSwtMi8qbWVhbiAoMC4xMjI0MDIpLCBjb3JyZWxhdGlvbiAoMC40NTAyMDEpKi8sXG4gICAgOCwtOCwgOSwtMTMvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLFxuICAgIC05LC0xMSwgLTksMC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sXG4gICAgMSwtOCwgMSwtMi8qbWVhbiAoMC4xMzI0NjcpLCBjb3JyZWxhdGlvbiAoMC40NDAxMzMpKi8sXG4gICAgNywtNCwgOSwxLyptZWFuICgwLjEzMjY5MiksIGNvcnJlbGF0aW9uICgwLjQ1NCkqLyxcbiAgICAtMiwxLCAtMSwtNC8qbWVhbiAoMC4xMzU2OTUpLCBjb3JyZWxhdGlvbiAoMC40NTU3MzkpKi8sXG4gICAgMTEsLTYsIDEyLC0xMS8qbWVhbiAoMC4xNDI5MDQpLCBjb3JyZWxhdGlvbiAoMC40NDYxMTQpKi8sXG4gICAgLTEyLC05LCAtNiw0LyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLyxcbiAgICAzLDcsIDcsMTIvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLFxuICAgIDUsNSwgMTAsOC8qbWVhbiAoMC4xNTI5MDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMzYpKi8sXG4gICAgMCwtNCwgMiw4LyptZWFuICgwLjE2NzA4MyksIGNvcnJlbGF0aW9uICgwLjQ1OTMxNSkqLyxcbiAgICAtOSwxMiwgLTUsLTEzLyptZWFuICgwLjE3MzIzNCksIGNvcnJlbGF0aW9uICgwLjQ1NDcwNikqLyxcbiAgICAwLDcsIDIsMTIvKm1lYW4gKDAuMTgzMTIpLCBjb3JyZWxhdGlvbiAoMC40MzM4NTUpKi8sXG4gICAgLTEsMiwgMSw3LyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLyxcbiAgICA1LDExLCA3LC05LyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLyxcbiAgICAzLDUsIDYsLTgvKm1lYW4gKDAuMTg4OTY4KSwgY29ycmVsYXRpb24gKDAuNDU1ODA4KSovLFxuICAgIC0xMywtNCwgLTgsOS8qbWVhbiAoMC4xOTE2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTkxMjgpKi8sXG4gICAgLTUsOSwgLTMsLTMvKm1lYW4gKDAuMTkzMTk2KSwgY29ycmVsYXRpb24gKDAuNDU4MzY0KSovLFxuICAgIC00LC03LCAtMywtMTIvKm1lYW4gKDAuMTk2NTM2KSwgY29ycmVsYXRpb24gKDAuNDU1NzgyKSovLFxuICAgIDYsNSwgOCwwLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsNiwgLTYsMTIvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLFxuICAgIC0xMyw2LCAtNSwtMi8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sXG4gICAgMSwtMTAsIDMsMTAvKm1lYW4gKDAuMjExNzE4KSwgY29ycmVsYXRpb24gKDAuNDQwNjA2KSovLFxuICAgIDQsMSwgOCwtNC8qbWVhbiAoMC4yMTMwMzQpLCBjb3JyZWxhdGlvbiAoMC40NDMxNzcpKi8sXG4gICAgLTIsLTIsIDIsLTEzLyptZWFuICgwLjIzNDMzNCksIGNvcnJlbGF0aW9uICgwLjQ1NTMwNCkqLyxcbiAgICAyLC0xMiwgMTIsMTIvKm1lYW4gKDAuMjM1Njg0KSwgY29ycmVsYXRpb24gKDAuNDQzNDM2KSovLFxuICAgIC0yLC0xMywgMCwtNi8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sXG4gICAgNCwxLCA5LDMvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sXG4gICAgLTYsLTEwLCAtMywtNS8qbWVhbiAoMC4yNDg0NTkpLCBjb3JyZWxhdGlvbiAoMC40Mzk2MjEpKi8sXG4gICAgLTMsLTEzLCAtMSwxLyptZWFuICgwLjI0OTUwNSksIGNvcnJlbGF0aW9uICgwLjQ1NjY2NikqLyxcbiAgICA3LDUsIDEyLC0xMS8qbWVhbiAoMC4wMDExOTIwOCksIGNvcnJlbGF0aW9uICgwLjQ5NTQ2NikqLyxcbiAgICA0LC0yLCA1LC03LyptZWFuICgwLjAwMzcyMjQ1KSwgY29ycmVsYXRpb24gKDAuNDg0MjE0KSovLFxuICAgIC0xMyw5LCAtOSwtNS8qbWVhbiAoMC4wMDc0MTExNiksIGNvcnJlbGF0aW9uICgwLjQ5OTg1NCkqLyxcbiAgICA3LDEsIDgsNi8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLFxuICAgIDcsLTgsIDcsNi8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLFxuICAgIC03LC00LCAtNywxLyptZWFuICgwLjAyMzM4MDYpLCBjb3JyZWxhdGlvbiAoMC40OTY1NjgpKi8sXG4gICAgLTgsMTEsIC03LC04LyptZWFuICgwLjAyMzY1MDUpLCBjb3JyZWxhdGlvbiAoMC40ODk3MTkpKi8sXG4gICAgLTEzLDYsIC0xMiwtOC8qbWVhbiAoMC4wMjY4NzgxKSwgY29ycmVsYXRpb24gKDAuNTAzNDg3KSovLFxuICAgIDIsNCwgMyw5LyptZWFuICgwLjAzMjMzMjQpLCBjb3JyZWxhdGlvbiAoMC41MDE5MzgpKi8sXG4gICAgMTAsLTUsIDEyLDMvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwtNSwgLTYsNy8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLFxuICAgIDgsLTMsIDksLTgvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLyxcbiAgICAyLC0xMiwgMiw4LyptZWFuICgwLjA2MTY2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTY2NDIpKi8sXG4gICAgLTExLC0yLCAtMTAsMy8qbWVhbiAoMC4wNjI3NzU1KSwgY29ycmVsYXRpb24gKDAuNDk4NTYzKSovLFxuICAgIC0xMiwtMTMsIC03LC05LyptZWFuICgwLjA4Mjk2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTU0OTEpKi8sXG4gICAgLTExLDAsIC0xMCwtNS8qbWVhbiAoMC4wODQzMzQyKSwgY29ycmVsYXRpb24gKDAuNDg3MTQ2KSovLFxuICAgIDUsLTMsIDExLDgvKm1lYW4gKDAuMDkyOTkzNyksIGNvcnJlbGF0aW9uICgwLjUwMjMxNSkqLyxcbiAgICAtMiwtMTMsIC0xLDEyLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLFxuICAgIC0xLC04LCAwLDkvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLFxuICAgIC0xMywtMTEsIC0xMiwtNS8qbWVhbiAoMC4xMzYyNjkpLCBjb3JyZWxhdGlvbiAoMC40OTg3NzEpKi8sXG4gICAgLTEwLC0yLCAtMTAsMTEvKm1lYW4gKDAuMTQyMTczKSwgY29ycmVsYXRpb24gKDAuNDk4NzE0KSovLFxuICAgIC0zLDksIC0yLC0xMy8qbWVhbiAoMC4xNDQxNDEpLCBjb3JyZWxhdGlvbiAoMC40OTE5NzMpKi8sXG4gICAgMiwtMywgMywyLyptZWFuICgwLjE0ODkyKSwgY29ycmVsYXRpb24gKDAuNTAwNzgyKSovLFxuICAgIC05LC0xMywgLTQsMC8qbWVhbiAoMC4xNTAzNzEpLCBjb3JyZWxhdGlvbiAoMC40OTgyMTEpKi8sXG4gICAgLTQsNiwgLTMsLTEwLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLyxcbiAgICAtNCwxMiwgLTIsLTcvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLFxuICAgIC02LC0xMSwgLTQsOS8qbWVhbiAoMC4xNTc0OSksIGNvcnJlbGF0aW9uICgwLjQ5OTIyMikqLyxcbiAgICA2LC0zLCA2LDExLyptZWFuICgwLjE1OTIxMSksIGNvcnJlbGF0aW9uICgwLjUwMzgyMSkqLyxcbiAgICAtMTMsMTEsIC01LDUvKm1lYW4gKDAuMTYyNDI3KSwgY29ycmVsYXRpb24gKDAuNTAxOTA3KSovLFxuICAgIDExLDExLCAxMiw2LyptZWFuICgwLjE2NjUyKSwgY29ycmVsYXRpb24gKDAuNDk3NjMyKSovLFxuICAgIDcsLTUsIDEyLC0yLyptZWFuICgwLjE2OTE0MSksIGNvcnJlbGF0aW9uICgwLjQ4NDQ3NCkqLyxcbiAgICAtMSwxMiwgMCw3LyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLyxcbiAgICAtNCwtOCwgLTMsLTIvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLFxuICAgIC03LDEsIC02LDcvKm1lYW4gKDAuMTc1KSwgY29ycmVsYXRpb24gKDAuNTAwMDI0KSovLFxuICAgIC0xMywtMTIsIC04LC0xMy8qbWVhbiAoMC4xNzU4NjYpLCBjb3JyZWxhdGlvbiAoMC40OTc1MjMpKi8sXG4gICAgLTcsLTIsIC02LC04LyptZWFuICgwLjE3ODI3MyksIGNvcnJlbGF0aW9uICgwLjUwMTg1NCkqLyxcbiAgICAtOCw1LCAtNiwtOS8qbWVhbiAoMC4xODExMDcpLCBjb3JyZWxhdGlvbiAoMC40OTQ4ODgpKi8sXG4gICAgLTUsLTEsIC00LDUvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMyw3LCAtOCwxMC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sXG4gICAgMSw1LCA1LC0xMy8qbWVhbiAoMC4xOTk3MyksIGNvcnJlbGF0aW9uICgwLjQ5OTc1OSkqLyxcbiAgICAxLDAsIDEwLC0xMy8qbWVhbiAoMC4yMDQ0NjUpLCBjb3JyZWxhdGlvbiAoMC40OTg3MykqLyxcbiAgICA5LDEyLCAxMCwtMS8qbWVhbiAoMC4yMDkzMzQpLCBjb3JyZWxhdGlvbiAoMC40OTA2MykqLyxcbiAgICA1LC04LCAxMCwtOS8qbWVhbiAoMC4yMTExMzQpLCBjb3JyZWxhdGlvbiAoMC41MDMwMTEpKi8sXG4gICAgLTEsMTEsIDEsLTEzLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwtMywgLTYsMi8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sXG4gICAgLTEsLTEwLCAxLDEyLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLyxcbiAgICAtMTMsMSwgLTgsLTEwLyptZWFuICgwLjIxMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5Nzg2KSovLFxuICAgIDgsLTExLCAxMCwtNi8qbWVhbiAoMC4yMTQxNTkpLCBjb3JyZWxhdGlvbiAoMC40ODgyNDYpKi8sXG4gICAgMiwtMTMsIDMsLTYvKm1lYW4gKDAuMjE2OTkzKSwgY29ycmVsYXRpb24gKDAuNTAyODcpKi8sXG4gICAgNywtMTMsIDEyLC05LyptZWFuICgwLjIyMzYzOSksIGNvcnJlbGF0aW9uICgwLjQ3MDUwMikqLyxcbiAgICAtMTAsLTEwLCAtNSwtNy8qbWVhbiAoMC4yMjQwODkpLCBjb3JyZWxhdGlvbiAoMC41MDA4NTIpKi8sXG4gICAgLTEwLC04LCAtOCwtMTMvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLFxuICAgIDQsLTYsIDgsNS8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLyxcbiAgICAzLDEyLCA4LC0xMy8qbWVhbiAoMC4yMzMzNzgpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjUpKi8sXG4gICAgLTQsMiwgLTMsLTMvKm1lYW4gKDAuMjM0MzIzKSwgY29ycmVsYXRpb24gKDAuNDc2NjkyKSovLFxuICAgIDUsLTEzLCAxMCwtMTIvKm1lYW4gKDAuMjM2MzkyKSwgY29ycmVsYXRpb24gKDAuNDc1NDYyKSovLFxuICAgIDQsLTEzLCA1LC0xLyptZWFuICgwLjIzNjg0MiksIGNvcnJlbGF0aW9uICgwLjUwNDEzMikqLyxcbiAgICAtOSw5LCAtNCwzLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLyxcbiAgICAwLDMsIDMsLTkvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sXG4gICAgLTEyLDEsIC02LDEvKm1lYW4gKDAuMjQzMjk3KSwgY29ycmVsYXRpb24gKDAuNDg5NDQ3KSovLFxuICAgIDMsMiwgNCwtOC8qbWVhbiAoMC4wMDE1NTE5NiksIGNvcnJlbGF0aW9uICgwLjU1MzQ5NikqLyxcbiAgICAtMTAsLTEwLCAtMTAsOS8qbWVhbiAoMC4wMDIzOTU0MSksIGNvcnJlbGF0aW9uICgwLjU0Mjk3KSovLFxuICAgIDgsLTEzLCAxMiwxMi8qbWVhbiAoMC4wMDM0NDEzKSwgY29ycmVsYXRpb24gKDAuNTQ0MzYxKSovLFxuICAgIC04LC0xMiwgLTYsLTUvKm1lYW4gKDAuMDAzNTY1KSwgY29ycmVsYXRpb24gKDAuNTUxMjI1KSovLFxuICAgIDIsMiwgMyw3LyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsNiwgMTEsLTgvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sXG4gICAgNiw4LCA4LC0xMi8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLFxuICAgIC03LDEwLCAtNiw1LyptZWFuICgwLjAxMDIyMjcpLCBjb3JyZWxhdGlvbiAoMC41MzM2MzUpKi8sXG4gICAgLTMsLTksIC0zLDkvKm1lYW4gKDAuMDExMDIxMSksIGNvcnJlbGF0aW9uICgwLjU0MzEyMSkqLyxcbiAgICAtMSwtMTMsIC0xLDUvKm1lYW4gKDAuMDExMzQ3MyksIGNvcnJlbGF0aW9uICgwLjU1MDE3MykqLyxcbiAgICAtMywtNywgLTMsNC8qbWVhbiAoMC4wMTQwOTEzKSwgY29ycmVsYXRpb24gKDAuNTU0Nzc0KSovLFxuICAgIC04LC0yLCAtOCwzLyptZWFuICgwLjAxNzA0OSksIGNvcnJlbGF0aW9uICgwLjU1NDYxKSovLFxuICAgIDQsMiwgMTIsMTIvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sXG4gICAgMiwtNSwgMywxMS8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLFxuICAgIDYsLTksIDExLC0xMy8qbWVhbiAoMC4wMjkxNjEpLCBjb3JyZWxhdGlvbiAoMC41NDYyOTUpKi8sXG4gICAgMywtMSwgNywxMi8qbWVhbiAoMC4wMzAzMDgxKSwgY29ycmVsYXRpb24gKDAuNTQ4NTk5KSovLFxuICAgIDExLC0xLCAxMiw0LyptZWFuICgwLjAzNTUxNTEpLCBjb3JyZWxhdGlvbiAoMC41MjM5NDMpKi8sXG4gICAgLTMsMCwgLTMsNi8qbWVhbiAoMC4wNDE3OTA0KSwgY29ycmVsYXRpb24gKDAuNTQzMzk1KSovLFxuICAgIDQsLTExLCA0LDEyLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwtNCwgMiwxLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sXG4gICAgLTEwLC02LCAtOCwxLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sXG4gICAgLTEzLDcsIC0xMSwxLyptZWFuICgwLjA1OTczOTEpLCBjb3JyZWxhdGlvbiAoMC41NTA1MjQpKi8sXG4gICAgLTEzLDEyLCAtMTEsLTEzLyptZWFuICgwLjA2MDg5NzQpLCBjb3JyZWxhdGlvbiAoMC41NTM4MykqLyxcbiAgICA2LDAsIDExLC0xMy8qbWVhbiAoMC4wNjUxMjYpLCBjb3JyZWxhdGlvbiAoMC41NTIwMDYpKi8sXG4gICAgMCwtMSwgMSw0LyptZWFuICgwLjA3NDIyNCksIGNvcnJlbGF0aW9uICgwLjU0NjM3MikqLyxcbiAgICAtMTMsMywgLTksLTIvKm1lYW4gKDAuMDgwODU5MiksIGNvcnJlbGF0aW9uICgwLjU1NDg3NSkqLyxcbiAgICAtOSw4LCAtNiwtMy8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLFxuICAgIC0xMywtNiwgLTgsLTIvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLyxcbiAgICA1LC05LCA4LDEwLyptZWFuICgwLjA5NDk4NDMpLCBjb3JyZWxhdGlvbiAoMC41NTQ2OTQpKi8sXG4gICAgMiw3LCAzLC05LyptZWFuICgwLjA5OTQxNTIpLCBjb3JyZWxhdGlvbiAoMC41NTA5NzkpKi8sXG4gICAgLTEsLTYsIC0xLC0xLyptZWFuICgwLjEwMDQ1KSwgY29ycmVsYXRpb24gKDAuNTUyNzE0KSovLFxuICAgIDksNSwgMTEsLTIvKm1lYW4gKDAuMTAwNjg2KSwgY29ycmVsYXRpb24gKDAuNTUyNTk0KSovLFxuICAgIDExLC0zLCAxMiwtOC8qbWVhbiAoMC4xMDEwOTEpLCBjb3JyZWxhdGlvbiAoMC41MzIzOTQpKi8sXG4gICAgMywwLCAzLDUvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLFxuICAgIC0xLDQsIDAsMTAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLFxuICAgIDMsLTYsIDQsNS8qbWVhbiAoMC4xMTA3ODUpLCBjb3JyZWxhdGlvbiAoMC41NDA0OTEpKi8sXG4gICAgLTEzLDAsIC0xMCw1LyptZWFuICgwLjExMjc5OCksIGNvcnJlbGF0aW9uICgwLjUzNjU4MikqLyxcbiAgICA1LDgsIDEyLDExLyptZWFuICgwLjExNDE4MSksIGNvcnJlbGF0aW9uICgwLjU1NTc5MykqLyxcbiAgICA4LDksIDksLTYvKm1lYW4gKDAuMTE3NDMxKSwgY29ycmVsYXRpb24gKDAuNTUzNzYzKSovLFxuICAgIDcsLTQsIDgsLTEyLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLyxcbiAgICAtMTAsNCwgLTEwLDkvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sXG4gICAgNywzLCAxMiw0LyptZWFuICgwLjEyMjU4MiksIGNvcnJlbGF0aW9uICgwLjU1NTgyNSkqLyxcbiAgICA5LC03LCAxMCwtMi8qbWVhbiAoMC4xMjQ5NzgpLCBjb3JyZWxhdGlvbiAoMC41NDk4NDYpKi8sXG4gICAgNywwLCAxMiwtMi8qbWVhbiAoMC4xMjcwMDIpLCBjb3JyZWxhdGlvbiAoMC41Mzc0NTIpKi8sXG4gICAgLTEsLTYsIDAsLTExLyptZWFuICgwLjEyNzE0OCksIGNvcnJlbGF0aW9uICgwLjU0NzQwMSkqL1xuXTsiLCJleHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChzcmMsIGRzdCwgYW5nbGUsIHB4LCBweSwgcHNpemUsIEgsIGltZ3Byb2MpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3Byb2Mud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgcmFkaXVzLCBweXJhbWlkX2xldmVscykge1xuICAgICAgICBpZiAodHlwZW9mIHB5cmFtaWRfbGV2ZWxzID09PSBcInVuZGVmaW5lZFwiKSB7IHB5cmFtaWRfbGV2ZWxzID0gMTsgfVxuICAgICAgICB2YXIgaTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5taW4ocmFkaXVzLCA3KTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgocmFkaXVzLCAzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHB5cmFtaWRfbGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfdGFibGVzW2ldID0gbmV3IGxldl90YWJsZV90KHdpZHRoID4+IGksIGhlaWdodCA+PiBpLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYywgcG9pbnRzLCBib3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmVjb21wdXRlX2RpcmVjdGlvbnMoc3RlcCwgZGlycywgUikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCwgeTtcblxuICAgIHggPSBSO1xuICAgIGZvciAoeSA9IDA7IHkgPCB4OyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4LS07IHggPCB5ICYmIHggPj0gMDsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHktLTsgeSA+PSAwOyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB5ID4geDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB4IDwgLXk7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5Kys7IHkgPCAwOyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYiwgb2ZmLCBzdGVwKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwLCBvZmYsIHYsIHN0ZXAsIG5laWdoYm9yaG9vZCkge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEksIHgsIFNjb3JlcywgSW0sIElwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19uYikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgY29uc3RydWN0b3IodywgaCwgcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSAnLi95YXBlMDZfdXRpbHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlMDYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjLCBkc3QsIHcsIGgsIER4eCwgRHl5LCBzeCxzeSwgZXgsZXkpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmMsIG9mZiwgdHIsIER4eCwgRHl5LCBEeHksIER5eCkge1xuICAgIHZhciBJeHggPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER4eF0gKyBzcmNbb2ZmIC0gRHh4XTtcbiAgICB2YXIgSXl5ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeXldICsgc3JjW29mZiAtIER5eV07XG4gICAgdmFyIEl4eSA9IHNyY1tvZmYgKyBEeHldICsgc3JjW29mZiAtIER4eV0gLSBzcmNbb2ZmICsgRHl4XSAtIHNyY1tvZmYgLSBEeXhdO1xuICAgIHZhciBzcXJ0X2RlbHRhID0gKCBNYXRoLnNxcnQoKChJeHggLSBJeXkpICogKEl4eCAtIEl5eSkgKyA0ICogSXh5ICogSXh5KSApICl8MDtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmFicyh0ciAtIHNxcnRfZGVsdGEpLCBNYXRoLmFicygtKHRyICsgc3FydF9kZWx0YSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0LmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsIlU4QzFfdCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwiayIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiTWF0aCIsIm1pbiIsIl9jb252b2wiLCJfcmVzYW1wbGVfdTgiLCJzcmMiLCJkc3QiLCJudyIsIm5oIiwieG9mc19jb3VudCIsImNoIiwiY2hhbm5lbCIsImNvbHMiLCJyb3dzIiwiZGF0YSIsInNjYWxlX3giLCJzY2FsZV95IiwiaW52X3NjYWxlXzI1NiIsImR4IiwiZHkiLCJzeCIsInN5Iiwic3gxIiwic3gyIiwiZnN4MSIsImZzeDIiLCJhIiwiYiIsImR4biIsImFscGhhIiwiYmV0YSIsImJldGExIiwiYnVmX25vZGUiLCJnZXRfYnVmZmVyIiwic3VtX25vZGUiLCJ4b2ZzX25vZGUiLCJpMzIiLCJ4b2ZzIiwibWF4IiwicHV0X2J1ZmZlciIsIl9yZXNhbXBsZSIsInNjYWxlIiwiZjMyIiwiYWJzIiwiZGF0YV90Iiwia2V5cG9pbnRfdCIsIm1hdG1hdGgiLCJtYXRyaXhfdCIsInN3YXAiLCJoeXBvdCIsImJpdF9wYXR0ZXJuXzMxIiwicmVjdGlmeV9wYXRjaCIsInlhcGUiLCJ5YXBlMDYiLCJyYW5zYWNfcGFyYW1zX3QiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwieCIsImZyb20iLCJ0byIsImNvdW50IiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJ5Iiwic3FydCIsIlNRUlQyIiwicG9pbnRzIiwiZHgxIiwiZHkxIiwiZHgyIiwiZHkyIiwiYWZmaW5lMmQiLCJtb2RlbCIsIm1kIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImxpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYV9idWZmIiwiYl9idWZmIiwiYV9tdCIsImJfbXQiLCJhZCIsImJkIiwibXVsdGlwbHlfQXRBIiwibXVsdGlwbHlfQXRCIiwibHVfc29sdmUiLCJpbnZlcnRfM3gzIiwibXVsdGlwbHlfM3gzIiwiaG9tb2dyYXBoeTJkIiwibUx0TCIsIkV2ZWMiLCJMdEwiLCJldmQiLCJYIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJlcnIiLCJ3dyIsIm0iLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHlyYW1pZF90IiwibGV2ZWxzIiwiQXJyYXkiLCJfaW1ncHJvYyIsImltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiLCJjb2RlIiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInRtcF9idWZmIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJkYXRhX3U4IiwiaG9sZCIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1hdGgiLCJpc191OCIsImJ1Zl9zeiIsImZpbHRfbm9kZSIsImdldF9nYXVzc2lhbl9rZXJuZWwiLCJpbWciLCJyaG9fcmVzIiwidGhldGFfcmVzIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiZHN0ZXAiLCJ4MSIsImMiLCJkIiwiZSIsImYiLCJzcm93MCIsInNyb3cxIiwic3JvdzIiLCJkcm93IiwidHJvdzAiLCJ0cm93MSIsImd4Z3kiLCJidWYwX25vZGUiLCJidWYxX25vZGUiLCJkc3Rfc3VtIiwiZHN0X3Nxc3VtIiwiZHN0X3RpbHRlZCIsIncwIiwiaDAiLCJ3MSIsInMiLCJzMiIsInAiLCJwdXAiLCJ2IiwicHJldiIsImhpc3QwIiwibm9ybSIsImhpc3QwX25vZGUiLCJsb3dfdGhyZXNoIiwiaGlnaF90aHJlc2giLCJncmFkIiwiX2dyYWQiLCJzdXBwcmVzcyIsInRnMjJ4IiwidGc2N3giLCJkeGR5X25vZGUiLCJtYXBfbm9kZSIsInN0YWNrX25vZGUiLCJtYXAiLCJzdGFjayIsImR4ZHkiLCJkeGR5X20iLCJTMzJDMl90Iiwicm93MCIsInJvdzEiLCJyb3cyIiwibWFwX3ciLCJtYXBfaSIsInN0YWNrX2kiLCJzb2JlbF9kZXJpdmF0aXZlcyIsInRyYW5zZm9ybSIsImZpbGxfdmFsdWUiLCJzcmNfd2lkdGgiLCJzcmNfaGVpZ2h0IiwiZHN0X3dpZHRoIiwiZHN0X2hlaWdodCIsIm9mZiIsIml4cyIsIml5cyIsInhzIiwieXMiLCJ4czAiLCJ5czAiLCJ3cyIsInNjIiwicDAiLCJwMSIsInRkIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwibTIwIiwibTIxIiwibTIyIiwiZyIsInFzb3J0X3N0YWNrIiwia2VybmVsIiwidCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MSIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwibGVmdCIsInJpZ2h0IiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250IiwibWlkZGxlIiwibGwiLCJoaCIsIm1lZGlhbiIsIkEiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJsIiwiX2luIiwiX2luMiIsIml0ZXJzIiwibWF4X2l0ZXIiLCJtdiIsInZhbCIsImEwIiwiYjAiLCJpbmRSX2J1ZmYiLCJpbmRDX2J1ZmYiLCJpbmRSIiwiaW5kQyIsIkF0IiwiX1ciLCJWdCIsIm4xIiwibWludmFsIiwiaXRlciIsIkFpIiwiQWoiLCJWaSIsIlZqIiwiY2hhbmdlZCIsInQwIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwid19idWZmIiwidl9idWZmIiwid19tdCIsInZfbXQiLCJ0cmFuc3Bvc2UiLCJKYWNvYmlTVkRJbXBsIiwicHUiLCJwdiIsIm5yb3dzIiwibmNvbHMiLCJ4c3VtIiwidG9sIiwidV9idWZmIiwidV9tdCIsInVkIiwid2QiLCJ2ZCIsInN2ZF9kZWNvbXBvc2UiLCJwYSIsImlkIiwidmVjdHMiLCJ2YWxzIiwiSmFjb2JpSW1wbCIsIm9yYiIsImJpdF9wYXR0ZXJuXzMxXyIsIkgiLCJwYXRjaF9pbWciLCJjb3JuZXJzIiwiZGVzY3JpcHRvcnMiLCJERVNDUl9TSVpFIiwiYW5nbGUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJtb3Rpb25fZXN0aW1hdG9yIiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJjaGVja19zdWJzZXQiLCJ0aHJlc2giLCJtYXNrIiwibnVtaW5saWVycyIsImVycm9yIiwicGFyYW1zIiwibWF4X2l0ZXJzIiwibW9kZWxfcG9pbnRzIiwibml0ZXJzIiwicmVzdWx0Iiwic3Vic2V0MCIsInN1YnNldDEiLCJmb3VuZCIsIm1jIiwibXIiLCJtX2J1ZmYiLCJtc19idWZmIiwiZXJyX2J1ZmYiLCJNIiwiY3Vycl9tYXNrIiwiaW5saWVyc19tYXgiLCJubW9kZWxzIiwicnVuIiwiY29weV90byIsImdldF9zdWJzZXQiLCJmaW5kX2lubGllcnMiLCJ1cGRhdGVfaXRlcnMiLCJfbWF0aCIsIm1pbl9tZWRpYW4iLCJvcHRpY2FsX2Zsb3dfbGsiLCJzY2hhcnJfZGVyaXYiLCJzY2hhcnJfZGVyaXZhdGl2ZXMiLCJwcmV2X3B5ciIsImN1cnJfcHlyIiwicHJldl94eSIsImN1cnJfeHkiLCJ3aW5fc2l6ZSIsInN0YXR1cyIsIm1pbl9laWdlbl90aHJlc2hvbGQiLCJVaW50OEFycmF5IiwiaGFsZl93aW4iLCJ3aW5fYXJlYSIsIndpbl9hcmVhMiIsInByZXZfaW1ncyIsIm5leHRfaW1ncyIsImltZ19wcmV2IiwiaW1nX25leHQiLCJsdyIsImxoIiwiaXdpbl9ub2RlIiwiZGVyaXZfaXdpbl9ub2RlIiwiZGVyaXZfbGV2X25vZGUiLCJkZXJpdl9tIiwiaXdpbl9idWYiLCJkZXJpdl9pd2luIiwiZGVyaXZfbGV2IiwiZHNyYyIsImlwdHIiLCJkaXB0ciIsImpwdHIiLCJsZXZfc2MiLCJwcmV2X3giLCJwcmV2X3kiLCJuZXh0X3giLCJuZXh0X3kiLCJwcmV2X2RlbHRhX3giLCJwcmV2X2RlbHRhX3kiLCJkZWx0YV94IiwiZGVsdGFfeSIsImlwcmV2X3giLCJpcHJldl95IiwiaW5leHRfeCIsImluZXh0X3kiLCJsZXZlbCIsInB0aWQiLCJicmRfdGwiLCJicmRfciIsImJyZF9iIiwiYjEiLCJiMiIsIldfQklUUzE0IiwiV19CSVRTNCIsIldfQklUUzFtNSIsIldfQklUUzFtNTEiLCJXX0JJVFMxNF8iLCJXX0JJVFM0MSIsIkZMVF9TQ0FMRSIsIml3MDAiLCJpdzAxIiwiaXcxMCIsIml3MTEiLCJpdmFsIiwiaXh2YWwiLCJpeXZhbCIsIkQiLCJtaW5fZWlnIiwiRkxUX0VQU0lMT04iLCJtYXhfbGV2ZWwiLCJzY29yZSIsImkwIiwiaTEiLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJNMTEiLCJNMTIiLCJNMTMiLCJNMjEiLCJNMjIiLCJNMjMiLCJNMzEiLCJNMzIiLCJNMzMiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJGbG9hdDY0QXJyYXkiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJ3YXJwX2FmZmluZSIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiYm9yZGVyIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsInJvd3giLCJpcCIsImltIiwiYWJzX3Njb3JlIiwibnVtYmVyX29mX3BvaW50cyIsInB0IiwiZXgiLCJleSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwibmVpZ2hib3Job29kIiwiSSIsIlNjb3JlcyIsIkltIiwiSXAiLCJkaXJzX25iIiwiQjAiLCJCMSIsIkIyIiwic3RhdGUiLCJjb21wdXRlX2xhcGxhY2lhbiIsImhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIiwibGFwbGFjaWFuX3RocmVzaG9sZCIsIm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQiLCJzcmRfZCIsIkR4eCIsIkR5eSIsIkR4eSIsIkR5eCIsImxhcF9idWYiLCJsYXBsYWNpYW4iLCJsdiIsIm1pbl9laWdlbl92YWx1ZSIsImxhcF90aHJlc2giLCJlaWdlbl90aHJlc2giLCJ5cm93IiwidHIiLCJJeHgiLCJJeXkiLCJJeHkiLCJzcXJ0X2RlbHRhIl0sInNvdXJjZVJvb3QiOiIifQ==