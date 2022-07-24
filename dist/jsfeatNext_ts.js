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

/***/ "./src_ts/cache/cache.ts":
/*!*******************************!*\
  !*** ./src_ts/cache/cache.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cache": () => (/* binding */ cache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _node_utils_pool_node_t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../node_utils/_pool_node_t */ "./src_ts/node_utils/_pool_node_t.ts");




var cache = /*#__PURE__*/function () {
  function cache() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, cache);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_pool_head", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_pool_tail", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_pool_size", void 0);

    this._pool_head;
    this._pool_tail;
    this._pool_size = 0;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(cache, [{
    key: "allocate",
    value: function allocate(capacity, data_size) {
      this._pool_head = this._pool_tail = new _node_utils_pool_node_t__WEBPACK_IMPORTED_MODULE_3__["default"](data_size);

      for (var i = 0; i < capacity; ++i) {
        var node = new _node_utils_pool_node_t__WEBPACK_IMPORTED_MODULE_3__["default"](data_size);
        this._pool_tail = this._pool_tail.next = node;
        this._pool_size++;
      }
    }
  }, {
    key: "get_buffer",
    value: function get_buffer(size_in_bytes) {
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

/***/ "./src_ts/constants/constants.ts":
/*!***************************************!*\
  !*** ./src_ts/constants/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSFEAT_CONSTANTS": () => (/* binding */ JSFEAT_CONSTANTS)
/* harmony export */ });
var JSFEAT_CONSTANTS = {
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
  COLOR_RGBA2GRAY: 0,
  COLOR_RGB2GRAY: 1,
  COLOR_BGRA2GRAY: 2,
  COLOR_BGR2GRAY: 3,
  BOX_BLUR_NOSCALE: 0x01,
  SVD_U_T: 0x01,
  SVD_V_T: 0x02,
  U8C1_t: 0x0100 | 0x01,
  U8C3_t: 0x0100 | 0x03,
  U8C4_t: 0x0100 | 0x04,
  F32C1_t: 0x0400 | 0x01,
  F32C2_t: 0x0400 | 0x02,
  S32C1_t: 0x0200 | 0x01,
  S32C2_t: 0x0200 | 0x02
};

/***/ }),

/***/ "./src_ts/data_type/data_type.ts":
/*!***************************************!*\
  !*** ./src_ts/data_type/data_type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data_type": () => (/* binding */ data_type)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var data_type = /*#__PURE__*/function () {
  function data_type() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, data_type);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_data_type_size", void 0);

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

/***/ "./src_ts/imgproc/convol.ts":
/*!**********************************!*\
  !*** ./src_ts/imgproc/convol.ts ***!
  \**********************************/
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
      w4 = w << 2;

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
  }

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
      w4 = w << 2;

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
  }

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

/***/ "./src_ts/imgproc/resample.ts":
/*!************************************!*\
  !*** ./src_ts/imgproc/resample.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_resample": () => (/* binding */ _resample),
/* harmony export */   "_resample_u8": () => (/* binding */ _resample_u8)
/* harmony export */ });
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

/***/ "./src_ts/jsfeatNext.ts":
/*!******************************!*\
  !*** ./src_ts/jsfeatNext.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jsfeatNext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data_type/data_type */ "./src_ts/data_type/data_type.ts");
/* harmony import */ var _cache_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cache/cache */ "./src_ts/cache/cache.ts");
/* harmony import */ var _imgproc_resample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgproc/resample */ "./src_ts/imgproc/resample.ts");
/* harmony import */ var _imgproc_convol__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgproc/convol */ "./src_ts/imgproc/convol.ts");
/* harmony import */ var _linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./linalg/linalg-base */ "./src_ts/linalg/linalg-base.ts");
/* harmony import */ var _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./matmath/matmath */ "./src_ts/matmath/matmath.ts");
/* harmony import */ var _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./matrix_t/matrix_t */ "./src_ts/matrix_t/matrix_t.ts");
/* harmony import */ var _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./keypoint_t/keypoint_t */ "./src_ts/keypoint_t/keypoint_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants/constants */ "./src_ts/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../package.json */ "./package.json");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, jsfeatNext);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "dt", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "cache", void 0);

    this.dt = new _data_type_data_type__WEBPACK_IMPORTED_MODULE_7__.data_type();
    this.cache = new _cache_cache__WEBPACK_IMPORTED_MODULE_8__.cache();
    this.cache.allocate(30, 640 * 4);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, [{
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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "cache", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "imgproc", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "linalg", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "math", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "matmath", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "matrix_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "keypoint_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_16__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);


jsfeatNext.cache = _cache_cache__WEBPACK_IMPORTED_MODULE_8__.cache;
jsfeatNext.matrix_t = _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t;
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_14__.keypoint_t;

jsfeatNext.imgproc = /*#__PURE__*/function (_jsfeatNext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(imgproc, _jsfeatNext);

  var _super = _createSuper(imgproc);

  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, imgproc);

    return _super.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      if (typeof code === "undefined") {
        code = _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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
    key: "resample",
    value: function resample(src, dst, nw, nh) {
      var h = src.rows,
          w = src.cols;

      if (h > nh && w > nw) {
        dst.resize(nw, nh, src.channel);

        if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
          (0,_imgproc_resample__WEBPACK_IMPORTED_MODULE_9__._resample_u8)(src, dst, this.cache, nw, nh);
        } else {
          (0,_imgproc_resample__WEBPACK_IMPORTED_MODULE_9__._resample)(src, dst, this.cache, nw, nh);
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
      var scale = options & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
      var tmp_buff = this.cache.get_buffer(w * h << 2);
      var sum = 0,
          dstIndex = 0,
          srcIndex = 0,
          nextPixelIndex = 0,
          previousPixelIndex = 0;
      var data_i32 = tmp_buff.i32;
      var data_u8 = src.data;
      var hold = 0;
      dst.resize(w, h, src.channel);

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
      }

      srcIndex = 0;
      data_u8 = dst.data;

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
          is_u8 = data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.S32_t) {
        buf = buf_node.i32;
        filter = filt_node.f32;
      } else {
        buf = buf_node.f32;
        filter = filt_node.f32;
      }

      jsfeatmath.get_gaussian_kernel(kernel_size, sigma, filter, data_type);

      if (is_u8) {
        (0,_imgproc_convol__WEBPACK_IMPORTED_MODULE_10__._convol_u8)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      } else {
        (0,_imgproc_convol__WEBPACK_IMPORTED_MODULE_10__._convol)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      }

      this.cache.put_buffer(buf_node);
      this.cache.put_buffer(filt_node);
    }
  }, {
    key: "pyrdown",
    value: function pyrdown(src, dst, sx, sy) {
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
    }
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
      dst.resize(w, h, 2);
      var img = src.data,
          gxgy = dst.data;
      var buf0_node = this.cache.get_buffer(w + 2 << 2);
      var buf1_node = this.cache.get_buffer(w + 2 << 2);

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.S32_t) {
        trow0 = buf0_node.i32;
        trow1 = buf1_node.i32;
      } else {
        trow0 = buf0_node.f32;
        trow1 = buf1_node.f32;
      }

      for (; y < h; ++y, srow1 += w) {
        srow0 = (y > 0 ? y - 1 : 1) * w | 0;
        srow2 = (y < h - 1 ? y + 1 : h - 2) * w | 0;
        drow = y * dstep | 0;

        for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
          trow1[x1] = b - a;
          a = img[srow0 + x + 1], b = img[srow2 + x + 1];
          trow0[x1 + 1] = (a + b) * 3 + img[srow1 + x + 1] * 10;
          trow1[x1 + 1] = b - a;
        }

        for (; x < w; ++x, ++x1) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = (a + b) * 3 + img[srow1 + x] * 10;
          trow1[x1] = b - a;
        }

        x = w + 1 | 0;
        trow0[0] = trow0[1];
        trow0[x] = trow0[w];
        trow1[0] = trow1[1];
        trow1[x] = trow1[w];

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
    }
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
      dst.resize(w, h, 2);
      var img = src.data,
          gxgy = dst.data;
      var buf0_node = this.cache.get_buffer(w + 2 << 2);
      var buf1_node = this.cache.get_buffer(w + 2 << 2);

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.S32_t) {
        trow0 = buf0_node.i32;
        trow1 = buf1_node.i32;
      } else {
        trow0 = buf0_node.f32;
        trow1 = buf1_node.f32;
      }

      for (; y < h; ++y, srow1 += w) {
        srow0 = (y > 0 ? y - 1 : 1) * w | 0;
        srow2 = (y < h - 1 ? y + 1 : h - 2) * w | 0;
        drow = y * dstep | 0;

        for (x = 0, x1 = 1; x <= w - 2; x += 2, x1 += 2) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = a + b + img[srow1 + x] * 2;
          trow1[x1] = b - a;
          a = img[srow0 + x + 1], b = img[srow2 + x + 1];
          trow0[x1 + 1] = a + b + img[srow1 + x + 1] * 2;
          trow1[x1 + 1] = b - a;
        }

        for (; x < w; ++x, ++x1) {
          a = img[srow0 + x], b = img[srow2 + x];
          trow0[x1] = a + b + img[srow1 + x] * 2;
          trow1[x1] = b - a;
        }

        x = w + 1 | 0;
        trow0[0] = trow0[1];
        trow0[x] = trow0[w];
        trow1[0] = trow1[1];
        trow1[x] = trow1[w];

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
    }
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
        for (i = 0; i < w1; ++i) {
          dst_tilted[i] = 0;
        }

        p = w1 + 1 | 0, pup = 0;

        for (i = 0, k = 0; i < h0; ++i, ++p, ++pup) {
          for (j = 0; j <= w0 - 2; j += 2, k += 2, p += 2, pup += 2) {
            dst_tilted[p] = src_d[k] + dst_tilted[pup];
            dst_tilted[p + 1] = src_d[k + 1] + dst_tilted[pup + 1];
          }

          for (; j < w0; ++j, ++k, ++p, ++pup) {
            dst_tilted[p] = src_d[k] + dst_tilted[pup];
          }
        }

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
    }
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

jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(math, _jsfeatNext2);

  var _super2 = _createSuper(math);

  function math() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, math);

    _this = _super2.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "qsort_stack", void 0);

    _this.qsort_stack = new Int32Array(48 * 2);
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(math, [{
    key: "get_gaussian_kernel",
    value: function get_gaussian_kernel(size, sigma, kernel, data_type) {
      var i = 0,
          x = 0.0,
          t = 0.0,
          sigma_x = 0.0,
          scale_2x = 0.0;
      var sum = 0.0;
      var kern_node = this.cache.get_buffer(size << 2);
      var _kernel = kern_node.f32;

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

      if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.U8_t) {
        sum = 256.0 / sum;

        for (i = 0; i < size; ++i) {
          kernel[i] = _kernel[i] * sum + 0.5 | 0;
        }
      } else {
        sum = 1.0 / sum;

        for (i = 0; i < size; ++i) {
          kernel[i] = _kernel[i] * sum;
        }
      }

      this.cache.put_buffer(kern_node);
    }
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
      var Hl7 = (-t7 + t10 + t16 - t43 + t27 - t28 - t21 + t25) * t30;
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
    }
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
              left = left0, right = right0;

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

jsfeatNext.matmath = _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"];

jsfeatNext.linalg = /*#__PURE__*/function (_jsfeatNext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(linalg, _jsfeatNext3);

  var _super3 = _createSuper(linalg);

  function linalg() {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, linalg);

    _this2 = _super3.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "matmath", void 0);

    _this2.matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();
    return _this2;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.EPSILON;
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
        t = Math.abs(y) + (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.hypot)(p, y);
        s = (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.hypot)(p, t);
        c = t / s;
        s = p / s;
        t = p / t * p;
        if (y < 0) s = -s, t = -t;
        A[astep * k + l] = 0;
        W[k] -= t;
        W[l] += t;

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
        }

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
      }

      for (k = 0; k < n - 1; k++) {
        m = k;

        for (i = k + 1; i < n; i++) {
          if (W[m] < W[i]) m = i;
        }

        if (k != m) {
          (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(W, m, k, mv);

          if (V) {
            for (i = 0; i < n; i++) {
              (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(V, vstep * m + i, vstep * k + i, mv);
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
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.FLT_MIN;
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
            beta = a - b, gamma = (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.hypot)(p, beta);

            if (beta < 0) {
              delta = (gamma - beta) * 0.5;
              s = Math.sqrt(delta / gamma);
              c = p / (gamma * s * 2.0);
            } else {
              c = Math.sqrt((gamma + beta) / (gamma * 2.0));
              s = p / (gamma * c * 2.0);
            }

            a = 0.0, b = 0.0;
            k = 2;
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
          (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(W, i, j, sd);

          if (Vt) {
            for (k = 0; k < m; k++) {
              (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(At, i * astep + k, j * astep + k, t);
            }

            for (k = 0; k < n; k++) {
              (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(Vt, i * vstep + k, j * vstep + k, t);
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.EPSILON) {
          return 0;
        }

        if (k != i) {
          for (j = i; j < astep; j++) {
            (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(ad, i * astep + j, k * astep + j, t);
          }

          (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__.swap)(bd, i, k, t);
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

      return 1;
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
          val = ad[rs + col];

          for (col2 = 0; col2 < col; col2++) {
            val -= ad[col2 * size + col] * ad[rs + col2];
          }

          if (row == col) {
            ad[rs + col] = val;

            if (val == 0) {
              return 0;
            }

            inv_diag = 1.0 / val;
          } else {
            ad[cs + row] = val;
            ad[rs + col] = val * inv_diag;
          }

          rs = rs + size;
        }
      }

      cs = 0;

      for (i = 0; i < size; i++) {
        val = bd[i];

        for (j = 0; j < i; j++) {
          val -= ad[cs + j] * bd[j];
        }

        bd[i] = val;
        cs = cs + size;
      }

      cs = 0;

      for (i = 0; i < size; i++) {
        bd[i] /= ad[cs + i];
        cs = cs + size;
      }

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C1_t;

      if (m < n) {
        at = 1;
        i = m;
        m = n;
        n = i;
      }

      var a_buff = this.cache.get_buffer(m * m << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var v_buff = this.cache.get_buffer(n * n << 3);
      var a_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(m, m, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, n, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(n, n, dt, v_buff.data);

      if (at == 0) {
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
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(ncols, ncols, dt, v_buff.data);
      var bd = B.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(ncols, ncols, dt, v_buff.data);
      var id = Ai.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.C1_t;
      var a_buff = this.cache.get_buffer(n * n << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var a_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(n, n, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, n, dt, w_buff.data);

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

/***/ }),

/***/ "./src_ts/keypoint_t/keypoint_t.ts":
/*!*****************************************!*\
  !*** ./src_ts/keypoint_t/keypoint_t.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keypoint_t": () => (/* binding */ keypoint_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var keypoint_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function keypoint_t(x, y, score, level, angle) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, keypoint_t);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "x", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "y", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "score", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "level", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "angle", void 0);

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

/***/ "./src_ts/linalg/linalg-base.ts":
/*!**************************************!*\
  !*** ./src_ts/linalg/linalg-base.ts ***!
  \**************************************/
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

/***/ "./src_ts/matmath/matmath.ts":
/*!***********************************!*\
  !*** ./src_ts/matmath/matmath.ts ***!
  \***********************************/
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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

/***/ "./src_ts/matrix_t/matrix_t.ts":
/*!*************************************!*\
  !*** ./src_ts/matrix_t/matrix_t.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matrix_t": () => (/* binding */ matrix_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_type/data_type */ "./src_ts/data_type/data_type.ts");
/* harmony import */ var _node_utils_data_t__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_utils/data_t */ "./src_ts/node_utils/data_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constants */ "./src_ts/constants/constants.ts");






var matrix_t = /*#__PURE__*/function () {
  function matrix_t(c, r, _data_type, _data_buffer) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, matrix_t);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dt", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "type", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "channel", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "cols", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rows", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "data", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "buffer", void 0);

    this.dt = new _data_type_data_type__WEBPACK_IMPORTED_MODULE_3__.data_type();
    this.type = this.dt._get_data_type(_data_type) | 0;
    this.channel = this.dt._get_channel(_data_type) | 0;
    this.cols = c | 0;
    this.rows = r | 0;

    if (typeof _data_buffer === "undefined") {
      this.allocate();
    } else {
      this.buffer = _data_buffer;
      this.data = this.type & _constants_constants__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : this.type & _constants_constants__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : this.type & _constants_constants__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64;
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix_t, [{
    key: "allocate",
    value: function allocate() {
      delete this.data;
      delete this.buffer;
      this.buffer = new _node_utils_data_t__WEBPACK_IMPORTED_MODULE_4__.data_t(this.cols * this.dt._get_data_type_size(this.type) * this.channel * this.rows);
      this.data = this.type & _constants_constants__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.U8_t ? this.buffer.u8 : this.type & _constants_constants__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.S32_t ? this.buffer.i32 : this.type & _constants_constants__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.F32_t ? this.buffer.f32 : this.buffer.f64;
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
      }

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

/***/ "./src_ts/node_utils/_pool_node_t.ts":
/*!*******************************************!*\
  !*** ./src_ts/node_utils/_pool_node_t.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _pool_node_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_t */ "./src_ts/node_utils/data_t.ts");





var _pool_node_t = /*#__PURE__*/function () {
  function _pool_node_t(size_in_bytes) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _pool_node_t);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "next", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "data", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "size", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "buffer", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "u8", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "i32", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "f32", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "f64", void 0);

    this.next = null;
    this.data = new _data_t__WEBPACK_IMPORTED_MODULE_3__.data_t(size_in_bytes);
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
      this.data = new _data_t__WEBPACK_IMPORTED_MODULE_3__.data_t(size_in_bytes);
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

/***/ "./src_ts/node_utils/data_t.ts":
/*!*************************************!*\
  !*** ./src_ts/node_utils/data_t.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data_t": () => (/* binding */ data_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var data_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function data_t(size_in_bytes, buffer) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, data_t);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "size", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "buffer", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "u8", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "i32", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "f32", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "f64", void 0);

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

module.exports = JSON.parse('{"name":"jsfeatnext","version":"0.5.0","description":"ES6 version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/index.d.ts","scripts":{"dev":"webpack --mode development --progress --watch","build":"webpack --mode production","build-ts":"rimraf ./build && tsc && webpack --mode production","dev-ts":"rimraf ./build && tsc && webpack --mode development --progress --watch"},"repository":{"type":"git","url":"git+https://github.com/kalwalt/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/kalwalt/jsfeatNext/issues"},"homepage":"https://github.com/kalwalt/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.18.9","@babel/plugin-transform-runtime":"^7.18.9","@babel/preset-env":"^7.18.9","babel-loader":"^8.2.5","rimraf":"^3.0.2","typescript":"^4.6.3","webpack":"^5.73.0","webpack-cli":"^4.10.0"},"dependencies":{"@babel/runtime":"^7.18.6","ts-loader":"^9.3.1"}}');

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
/*!*************************!*\
  !*** ./src_ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jsfeatNext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsfeatNext */ "./src_ts/jsfeatNext.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  jsfeatNext: _jsfeatNext__WEBPACK_IMPORTED_MODULE_0__["default"]
});
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNMaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDhEQUFjO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJrQztBQUM2QjtBQUNoRDtBQUNmLGVBQWUsc0RBQU87QUFDdEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLHFFQUFxQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaMVcsVUFBVSxFQUFWQSxtREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NhY2hlL2NhY2hlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2RhdGFfdHlwZS9kYXRhX3R5cGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbWdwcm9jL2NvbnZvbC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2ltZ3Byb2MvcmVzYW1wbGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9qc2ZlYXROZXh0LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMva2V5cG9pbnRfdC9rZXlwb2ludF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbGluYWxnL2xpbmFsZy1iYXNlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0bWF0aC9tYXRtYXRoLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0cml4X3QvbWF0cml4X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvZGF0YV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLy4uL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gICAgYWxsb2NhdGU6IChjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgICBnZXRfYnVmZmVyOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiBhbnk7XG4gICAgcHV0X2J1ZmZlcjogKG5vZGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIGNhY2hlIGltcGxlbWVudHMgSUNhY2hlIHtcbiAgICBwcml2YXRlIF9wb29sX2hlYWQ6IGFueTtcbiAgICBwcml2YXRlIF9wb29sX3RhaWw6IGFueTtcbiAgICBwcml2YXRlIF9wb29sX3NpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfdGFpbCA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXBhY2l0eTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0X2J1ZmZlcihzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIFU4QzFfdDogMHgwMTAwIHwgMHgwMSxcbiAgICBVOEMzX3Q6IDB4MDEwMCB8IDB4MDMsXG4gICAgVThDNF90OiAweDAxMDAgfCAweDA0LFxuXG4gICAgRjMyQzFfdDogMHgwNDAwIHwgMHgwMSxcbiAgICBGMzJDMl90OiAweDA0MDAgfCAweDAyLFxuICAgIFMzMkMxX3Q6IDB4MDIwMCB8IDB4MDEsXG4gICAgUzMyQzJfdDogMHgwMjAwIHwgMHgwMlxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVHlwZSB7XG4gICAgX2dldF9kYXRhX3R5cGU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2NoYW5uZWw6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3R5cGUgaW1wbGVtZW50cyBJRGF0YV9UeXBlIHtcbiAgICBwcml2YXRlIF9kYXRhX3R5cGVfc2l6ZTogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGMDApO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGKTtcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1ZjogbnVtYmVyW10sIHNyY19kOiBudW1iZXJbXSwgZHN0X2Q6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsdGVyOiBudW1iZXJbXSwga2VybmVsX3NpemU6IG51bWJlciwgaGFsZl9rZXJuZWw6IG51bWJlcikge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmOiBudW1iZXJbXSwgc3JjX2Q6IG51bWJlcltdLCBkc3RfZDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWx0ZXI6IG51bWJlcltdLCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmM6IHsgY2hhbm5lbDogYW55OyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBkc3Q6IHsgZGF0YTogYW55OyB9LCBjYWNoZTogeyBnZXRfYnVmZmVyOiAoYXJnMDogbnVtYmVyKSA9PiBhbnk7IHB1dF9idWZmZXI6IChhcmcwOiBhbnkpID0+IHZvaWQ7IH0sIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjOiB7IGNoYW5uZWw6IGFueTsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgZHN0OiB7IGRhdGE6IGFueTsgfSwgY2FjaGU6IHsgZ2V0X2J1ZmZlcjogKGFyZzA6IG51bWJlcikgPT4gYW55OyBwdXRfYnVmZmVyOiAoYXJnMDogYW55KSA9PiB2b2lkOyB9LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgc2NhbGUgPSAxLjAgLyAoc2NhbGVfeCAqIHNjYWxlX3kpO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAuMCwgYmV0YSA9IDAuMCwgYmV0YTEgPSAwLjA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5mMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gxIC0gZnN4MSkgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChmc3gyIC0gc3gyKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDNdIHwgMDtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDMgKyAxXSB8IDA7XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApO1xuICAgICAgICAgICAgYmV0YTEgPSAxLjAgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYmV0YSkgPCAxZS0zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTE7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufSIsIi8vaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuaW1wb3J0IHsgSURhdGFfVHlwZSwgZGF0YV90eXBlIH0gZnJvbSAnLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgSUNhY2hlLCBjYWNoZSB9IGZyb20gJy4vY2FjaGUvY2FjaGUnXG5pbXBvcnQgeyBpbWdwcm9jIH0gZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MnXG5pbXBvcnQgeyBfcmVzYW1wbGUsIF9yZXNhbXBsZV91OCB9IGZyb20gJy4vaW1ncHJvYy9yZXNhbXBsZSdcbmltcG9ydCB7IF9jb252b2wsIF9jb252b2xfdTggfSBmcm9tICcuL2ltZ3Byb2MvY29udm9sJ1xuaW1wb3J0IHsgbGluYWxnIH0gZnJvbSAnLi9saW5hbGcvbGluYWxnJ1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy9saW5hbGctYmFzZSdcbmltcG9ydCB7IG1hdGggfSBmcm9tICcuL21hdGgvbWF0aCdcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4vbWF0bWF0aC9tYXRtYXRoJ1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuL21hdHJpeF90L21hdHJpeF90J1xuaW1wb3J0IHsga2V5cG9pbnRfdCB9IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90J1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHByb3RlY3RlZCBjYWNoZTogSUNhY2hlO1xuICAgIHN0YXRpYyBjYWNoZTogdHlwZW9mIGNhY2hlO1xuICAgIHN0YXRpYyBpbWdwcm9jOiB0eXBlb2YgaW1ncHJvYztcbiAgICBzdGF0aWMgbGluYWxnOiB0eXBlb2YgbGluYWxnO1xuICAgIHN0YXRpYyBtYXRoOiB0eXBlb2YgbWF0aDtcbiAgICBzdGF0aWMgbWF0bWF0aDogdHlwZW9mIG1hdG1hdGg7XG4gICAgc3RhdGljIG1hdHJpeF90OiB0eXBlb2YgbWF0cml4X3Q7XG4gICAgc3RhdGljIGtleXBvaW50X3Q6IHR5cGVvZiBrZXlwb2ludF90O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cblxuICAgIC8vIFZFUlNJT05cbiAgICBzdGF0aWMgVkVSU0lPTjogc3RyaW5nID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBDMV90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgIHN0YXRpYyBDMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMl90O1xuICAgIHN0YXRpYyBDM190ID0gSlNGRUFUX0NPTlNUQU5UUy5DM190O1xuICAgIHN0YXRpYyBDNF90ID0gSlNGRUFUX0NPTlNUQU5UUy5DNF90O1xuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIHN0YXRpYyBDT0xPUl9SR0JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfUkdCMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZO1xuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgc3RhdGljIEJPWF9CTFVSX05PU0NBTEUgPSBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEU7XG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBzdGF0aWMgU1ZEX1VfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVDtcbiAgICBzdGF0aWMgU1ZEX1ZfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVDtcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIHN0YXRpYyBVOEMxX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFU4QzNfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzNfdDtcbiAgICBzdGF0aWMgVThDNF90ID0gdGhpcy5VOF90IHwgdGhpcy5DNF90O1xuXG4gICAgc3RhdGljIEYzMkMxX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBGMzJDMl90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzJfdDtcbiAgICBzdGF0aWMgUzMyQzFfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFMzMkMyX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMl90O1xuXG4gICAgZ2V0X2RhdGFfdHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2NoYW5uZWwodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodHlwZSk7XG4gICAgfVxufVxuXG5qc2ZlYXROZXh0LmNhY2hlID0gY2FjaGU7XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5pbWdwcm9jID0gY2xhc3MgaW1ncHJvYyBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH07XG4gICAgZ3JheXNjYWxlKHNyYzogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IG51bWJlcikgPT4gdm9pZDsgZGF0YTogYW55IH0sIGNvZGU6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYzogYW55LCBkc3Q6IGFueSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgICAgICB2YXIgaCA9IHNyYy5yb3dzLCB3ID0gc3JjLmNvbHM7XG4gICAgICAgIGlmIChoID4gbmggJiYgdyA+IG53KSB7XG4gICAgICAgICAgICBkc3QucmVzaXplKG53LCBuaCwgc3JjLmNoYW5uZWwpO1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIGZhc3QgYWx0ZXJuYXRpdmUgKGZpeCBwb2ludCBzY2FsZSwgMHgxMDAgdG8gYXZvaWQgb3ZlcmZsb3cpXG4gICAgICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgZHN0LnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgaCAqIHcgLyAobmggKiBudykgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZV91OChzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlKHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJveF9ibHVyX2dyYXkoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IGNoYW5uZWw6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIHJhZGl1czogbnVtYmVyLCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cbiAgICBnYXVzc2lhbl9ibHVyKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgdHlwZTogYW55OyBjaGFubmVsOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIGtlcm5lbF9zaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGpzZmVhdG1hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgLypob3VnaF90cmFuc2Zvcm0oaW1nOiBhbnksIHJob19yZXM6IG51bWJlciwgdGhldGFfcmVzOiBudW1iZXIsIHRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YWdlIDQuIHN0b3JlIHRoZSBmaXJzdCBtaW4odG90YWwsbGluZXNNYXgpIGxpbmVzIHRvIHRoZSBvdXRwdXQgYnVmZmVyXG4gICAgICAgIHZhciBsaW5lc01heCA9IE1hdGgubWluKG51bWFuZ2xlICogbnVtcmhvLCBfc29ydF9idWYubGVuZ3RoKTtcbiAgICAgICAgdmFyIHNjYWxlID0gMS4wIC8gKG51bXJobyArIDIpO1xuICAgICAgICB2YXIgbGluZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc01heDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX3NvcnRfYnVmW2ldO1xuICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKGlkeCAqIHNjYWxlKSAtIDE7XG4gICAgICAgICAgICB2YXIgciA9IGlkeCAtIChuICsgMSkgKiAobnVtcmhvICsgMikgLSAxO1xuICAgICAgICAgICAgdmFyIGxyaG8gPSAociAtIChudW1yaG8gLSAxKSAqIDAuNSkgKiByaG9fcmVzO1xuICAgICAgICAgICAgdmFyIGxhbmdsZSA9IG4gKiB0aGV0YV9yZXM7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtscmhvLCBsYW5nbGVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfSovXG4gICAgcHlyZG93bihzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGNoYW5uZWw6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBudW1iZXIsIGFyZzE6IG51bWJlciwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgc3g6IG51bWJlciwgc3k6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiBtYXRyaXhfdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4ICsgMV0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChhICsgdHJvdzFbeF0gKyBiICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChjICsgYiArIGEgKiAyKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNF0gLSBlKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZCArIGEgKyBjICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA1XSAtIGYpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgNV0gKyBjICsgZCAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSArIHRyb3cxW3ggKyAxXSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gcGxlYXNlIG5vdGU6IFxuICAgIC8vIGRzdF8odHlwZSkgc2l6ZSBzaG91bGQgYmUgY29scyA9IHNyYy5jb2xzKzEsIHJvd3MgPSBzcmMucm93cysxXG4gICAgY29tcHV0ZV9pbnRlZ3JhbF9pbWFnZShzcmM6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCBkc3Rfc3VtOiBudW1iZXJbXSwgZHN0X3Nxc3VtOiBudW1iZXJbXSwgZHN0X3RpbHRlZDogYW55W10pIHtcbiAgICAgICAgdmFyIHcwID0gc3JjLmNvbHMgfCAwLCBoMCA9IHNyYy5yb3dzIHwgMCwgc3JjX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIHcxID0gKHcwICsgMSkgfCAwO1xuICAgICAgICB2YXIgcyA9IDAsIHMyID0gMCwgcCA9IDAsIHB1cCA9IDAsIGkgPSAwLCBqID0gMCwgdiA9IDAsIGsgPSAwO1xuXG4gICAgICAgIGlmIChkc3Rfc3VtICYmIGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDAsIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgcyA9IHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcblxuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcCArIDFdID0gZHN0X3Nxc3VtW3B1cCArIDFdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRzdF9zdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkc3RfdGlsdGVkKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3AgKyAxXSA9IHNyY19kW2sgKyAxXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWFnb25hbFxuICAgICAgICAgICAgcCA9ICh3MSArIHcwKSB8IDAsIHB1cCA9IHcwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGgwOyArK2ksIHAgKz0gdzEsIHB1cCArPSB3MSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSB3MCAtIDE7IGogPiAwOyAtLWopIHtcbiAgICAgICAgICAgICAgICBwID0gaiArIGgwICogdzEsIHB1cCA9IHAgLSB3MTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBoMDsgaSA+IDA7IC0taSwgcCAtPSB3MSwgcHVwIC09IHcxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXF1YWxpemVfaGlzdG9ncmFtKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyBjaGFubmVsOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YSwgc2l6ZSA9IHcgKiBoO1xuICAgICAgICB2YXIgaSA9IDAsIHByZXYgPSAwLCBoaXN0MCwgbm9ybTtcblxuICAgICAgICB2YXIgaGlzdDBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigyNTYgPDwgMik7XG4gICAgICAgIGhpc3QwID0gaGlzdDBfbm9kZS5pMzI7XG4gICAgICAgIGZvciAoOyBpIDwgMjU2OyArK2kpIGhpc3QwW2ldID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgKytoaXN0MFtzcmNfZFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gaGlzdDBbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgcHJldiA9IGhpc3QwW2ldICs9IHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBub3JtID0gMjU1IC8gc2l6ZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgZHN0X2RbaV0gPSAoaGlzdDBbc3JjX2RbaV1dICogbm9ybSArIDAuNSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihoaXN0MF9ub2RlKTtcbiAgICB9XG4gICAgLypjYW5ueShzcmM6IGFueSwgZHN0OiBhbnksIGxvd190aHJlc2g6IG51bWJlciwgaGlnaF90aHJlc2g6IG51bWJlcikge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgajogbnVtYmVyID0gMCwgZ3JhZCA9IDAsIHcyID0gdyA8PCAxLCBfZ3JhZCA9IDAsIHN1cHByZXNzID0gMCwgZiA9IDAsIHggPSAwLCB5ID0gMCwgcyA9IDA7XG4gICAgICAgIHZhciB0ZzIyeCA9IDAsIHRnNjd4ID0gMDtcblxuICAgICAgICAvLyBjYWNoZSBidWZmZXJzXG4gICAgICAgIHZhciBkeGR5X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3MikgPDwgMik7XG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMyAqICh3ICsgMikpIDw8IDIpO1xuICAgICAgICB2YXIgbWFwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKChoICsgMikgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIHN0YWNrX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3KSA8PCAyKTtcblxuXG4gICAgICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgIHZhciBtYXA6IG51bWJlcltdID0gPG51bWJlcltdPm1hcF9ub2RlLmkzMjtcbiAgICAgICAgdmFyIHN0YWNrID0gc3RhY2tfbm9kZS5pMzI7XG4gICAgICAgIHZhciBkeGR5ID0gZHhkeV9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHlfbSA9IG5ldyBtYXRyaXhfdCh3LCBoLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGR4ZHlfbm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHJvdzAgPSAxLCByb3cxID0gKHcgKyAyICsgMSkgfCAwLCByb3cyID0gKDIgKiAodyArIDIpICsgMSkgfCAwLCBtYXBfdyA9ICh3ICsgMikgfCAwLCBtYXBfaTogbnVtYmVyID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH0qL1xuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgbWF0cml4X3RcbiAgICB3YXJwX3BlcnNwZWN0aXZlKHNyYzogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIGRzdDogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIHRyYW5zZm9ybTogeyBkYXRhOiBhbnkgfSwgZmlsbF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MgfCAwLCBkc3Rfd2lkdGggPSBkc3QuY29scyB8IDAsIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIHhzMCA9IDAuMCwgeXMwID0gMC4wLCB3cyA9IDAuMCwgc2MgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XSxcbiAgICAgICAgICAgIG0yMCA9IHRkWzZdLCBtMjEgPSB0ZFs3XSwgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzMCA9IG0wMSAqIHkgKyBtMDIsXG4gICAgICAgICAgICAgICAgeXMwID0gbTExICogeSArIG0xMixcbiAgICAgICAgICAgICAgICB3cyA9IG0yMSAqIHkgKyBtMjI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMwICs9IG0wMCwgeXMwICs9IG0xMCwgd3MgKz0gbTIwKSB7XG4gICAgICAgICAgICAgICAgc2MgPSAxLjAgLyB3cztcbiAgICAgICAgICAgICAgICB4cyA9IHhzMCAqIHNjLCB5cyA9IHlzMCAqIHNjO1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMCwgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhzID4gMCAmJiB5cyA+IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgZHN0OiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgdHJhbnNmb3JtOiB7IGRhdGE6IGFueSB9LCBmaWxsX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scywgc3JjX2hlaWdodCA9IHNyYy5yb3dzLCBkc3Rfd2lkdGggPSBkc3QuY29scywgZHN0X2hlaWdodCA9IGRzdC5yb3dzO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzID0gbTAxICogeSArIG0wMjtcbiAgICAgICAgICAgIHlzID0gbTExICogeSArIG0xMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4cyArPSBtMDAsIHlzICs9IG0xMCkge1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMDsgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl4cyA+PSAwICYmIGl5cyA+PSAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB4cyAtIGl4cztcbiAgICAgICAgICAgICAgICAgICAgYiA9IHlzIC0gaXlzO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSBzcmNfd2lkdGggKiBpeXMgKyBpeHM7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEJhc2ljIFJHQiBTa2luIGRldGVjdGlvbiBmaWx0ZXJcbiAgICAvLyBmcm9tIGh0dHA6Ly9wb3BzY2FuLmJsb2dzcG90LmZyLzIwMTIvMDgvc2tpbi1kZXRlY3Rpb24taW4tZGlnaXRhbC1pbWFnZXMuaHRtbFxuICAgIHNraW5kZXRlY3RvcihzcmM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IGRhdGE6IGFueVtdIH0sIGRzdDogbnVtYmVyW10pIHtcbiAgICAgICAgdmFyIHIsIGcsIGIsIGo7XG4gICAgICAgIHZhciBpID0gc3JjLndpZHRoICogc3JjLmhlaWdodDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaiA9IGkgKiA0O1xuICAgICAgICAgICAgciA9IHNyYy5kYXRhW2pdO1xuICAgICAgICAgICAgZyA9IHNyYy5kYXRhW2ogKyAxXTtcbiAgICAgICAgICAgIGIgPSBzcmMuZGF0YVtqICsgMl07XG4gICAgICAgICAgICBpZiAoKHIgPiA5NSkgJiYgKGcgPiA0MCkgJiYgKGIgPiAyMClcbiAgICAgICAgICAgICAgICAmJiAociA+IGcpICYmIChyID4gYilcbiAgICAgICAgICAgICAgICAmJiAociAtIE1hdGgubWluKGcsIGIpID4gMTUpXG4gICAgICAgICAgICAgICAgJiYgKE1hdGguYWJzKHIgLSBnKSA+IDE1KSkge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDI1NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuanNmZWF0TmV4dC5tYXRoID0gY2xhc3MgbWF0aCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHByaXZhdGUgcXNvcnRfc3RhY2s6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXNvcnRfc3RhY2sgPSBuZXcgSW50MzJBcnJheSg0OCAqIDIpO1xuICAgIH1cblxuICAgIGdldF9nYXVzc2lhbl9rZXJuZWwoc2l6ZTogbnVtYmVyLCBzaWdtYTogbnVtYmVyLCBrZXJuZWw6IGFueSwgZGF0YV90eXBlOiBhbnkpIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsOiBhbnksIHNyY194MDogbnVtYmVyLCBzcmNfeTA6bnVtYmVyLCBkc3RfeDA6IG51bWJlciwgZHN0X3kwOiBudW1iZXIsXG4gICAgICAgIHNyY194MTogbnVtYmVyLCBzcmNfeTE6IG51bWJlciwgZHN0X3gxOiBudW1iZXIsIGRzdF95MTogbnVtYmVyLFxuICAgICAgICBzcmNfeDI6IG51bWJlciwgc3JjX3kyOiBudW1iZXIsIGRzdF94MjogbnVtYmVyLCBkc3RfeTI6IG51bWJlcixcbiAgICAgICAgc3JjX3gzOiBudW1iZXIsIHNyY195MzogbnVtYmVyLCBkc3RfeDM6IG51bWJlciwgZHN0X3kzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyLCBjbXA6IGFueSkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBjbGFzcyBsaW5hbGcgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbWF0bWF0aDogbWF0bWF0aDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICB9XG5cbiAgICBKYWNvYmlJbXBsKEE6IG51bWJlcltdLCBhc3RlcDogbnVtYmVyLCBXOiBudW1iZXJbXSwgVjogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG46IG51bWJlcikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgbSA9IDAsIGwgPSAwLCBpZHggPSAwLCBfaW4gPSAwLCBfaW4yID0gMDtcbiAgICAgICAgdmFyIGl0ZXJzID0gMCwgbWF4X2l0ZXIgPSBuICogbiAqIDMwO1xuICAgICAgICB2YXIgbXYgPSAwLjAsIHZhbCA9IDAuMCwgcCA9IDAuMCwgeSA9IDAuMCwgdCA9IDAuMCwgcyA9IDAuMCwgYyA9IDAuMCwgYTAgPSAwLjAsIGIwID0gMC4wO1xuXG4gICAgICAgIHZhciBpbmRSX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcblxuICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSAqIHZzdGVwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkgKiBrXTtcbiAgICAgICAgICAgIGlmIChrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSBrICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogayArIG1dKSwgaSA9IGsgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kQ1trXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobiA+IDEpIGZvciAoOyBpdGVycyA8IG1heF9pdGVyOyBpdGVycysrKSB7XG4gICAgICAgICAgICAvLyBmaW5kIGluZGV4IChrLGwpIG9mIHBpdm90IHBcbiAgICAgICAgICAgIGZvciAoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGluZENbaV0sIGwgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID0gQVthc3RlcCAqIGsgKyBsXTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG5cbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pICogMC41O1xuICAgICAgICAgICAgdCA9IE1hdGguYWJzKHkpICsgaHlwb3QocCwgeSk7XG4gICAgICAgICAgICBzID0gaHlwb3QocCwgdCk7XG4gICAgICAgICAgICBjID0gdCAvIHM7XG4gICAgICAgICAgICBzID0gcCAvIHM7IHQgPSAocCAvIHQpICogcDtcbiAgICAgICAgICAgIGlmICh5IDwgMClcbiAgICAgICAgICAgICAgICBzID0gLXMsIHQgPSAtdDtcbiAgICAgICAgICAgIEFbYXN0ZXAgKiBrICsgbF0gPSAwO1xuXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGlkeCA9IGogPT0gMCA/IGsgOiBsO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSBpZHggKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBtXSksIGkgPSBpZHggKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29ydCBlaWdlbnZhbHVlcyAmIGVpZ2VudmVjdG9yc1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgbSA9IGs7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCAqIG0gKyBpLCB2c3RlcCAqIGsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRSX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kQ19idWZmKTtcbiAgICB9XG5cbiAgICBKYWNvYmlTVkRJbXBsKEF0OiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgX1c6IGFueVtdLCBWdDogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG06IG51bWJlciwgbjogbnVtYmVyLCBuMTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBpdGVyID0gMCwgbWF4X2l0ZXIgPSBNYXRoLm1heChtLCAzMCk7XG4gICAgICAgIHZhciBBaSA9IDAsIEFqID0gMCwgVmkgPSAwLCBWaiA9IDAsIGNoYW5nZWQgPSAwO1xuICAgICAgICB2YXIgYyA9IDAuMCwgcyA9IDAuMCwgdCA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMC4wLCB0MSA9IDAuMCwgc2QgPSAwLjAsIGJldGEgPSAwLjAsIGdhbW1hID0gMC4wLCBkZWx0YSA9IDAuMCwgYSA9IDAuMCwgcCA9IDAuMCwgYiA9IDAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWwgPSAwLjAsIHZhbDAgPSAwLjAsIGFzdW0gPSAwLjA7XG5cbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcblxuICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSAqIGFzdGVwKSB8IDAsIEFqID0gKGogKiBhc3RlcCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBhID0gV1tpXSwgcCA9IDAsIGIgPSBXW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIDFdICogQXRbQWogKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyBrXSAqIEF0W0FqICsga107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcyAqIE1hdGguc3FydChhICogYikpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAoZ2FtbWEgLSBiZXRhKSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEgLyBnYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAgLyAoZ2FtbWEgKiBzICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpIC8gKGdhbW1hICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAgLyAoZ2FtbWEgKiBjICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gMC4wLCBiID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWldICsgcyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpXSArIGMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyAxXSArIHMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyAxXSArIGMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSArIDFdID0gdDA7IEF0W0FqICsgMV0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsga10gKyBzICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIGtdICsgYyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBBdFtBaSArIGtdID0gdDA7IEF0W0FqICsga10gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXW2ldID0gYTsgV1tqXSA9IGI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWaSA9IChpICogdnN0ZXApIHwgMCwgVmogPSAoaiAqIHZzdGVwKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmldICsgcyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaV0gKyBjICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmldID0gdDA7IFZ0W1ZqXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIDFdICsgcyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyAxXSArIGMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyAxXSA9IHQwOyBWdFtWaiArIDFdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyBrXSArIHMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIGtdICsgYyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyBrXSA9IHQwOyBWdFtWaiArIGtdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpICogYXN0ZXAgKyBrLCBqICogYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkgKiB2c3RlcCArIGssIGogKiB2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFWdCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7IGkrKykge1xuXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChzZCA8PSBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBnb3QgYSB6ZXJvIHNpbmd1bGFyIHZhbHVlLCB0aGVuIGluIG9yZGVyIHRvIGdldCB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHNpbmd1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIC8vIHdlIGdlbmVyYXRlIGEgcmFuZG9tIHZlY3RvciwgcHJvamVjdCBpdCB0byB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMsXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgdGhlIHByb2plY3Rpb24gYW5kIG5vcm1hbGl6ZSB0aGUgZGlmZmVyZW5jZS5cbiAgICAgICAgICAgICAgICB2YWwwID0gKDEuMCAvIG0pO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlZCA9IChzZWVkICogMjE0MDEzICsgMjUzMTAxMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICgoKHNlZWQgPj4gMTYpICYgMHg3ZmZmKSAmIDI1NikgIT0gMCA/IHZhbDAgOiAtdmFsMDtcbiAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCAyOyBpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kgKiBhc3RlcCArIGtdICogQXRbaiAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoQXRbaSAqIGFzdGVwICsga10gLSBzZCAqIEF0W2ogKiBhc3RlcCArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wIC8gYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IE1hdGguc3FydChzZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMgPSAoMS4wIC8gc2QpO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBOiB7IGNvbHM6IGFueTsgZGF0YTogYW55IH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHAgPSAxLCBhc3RlcCA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHQsIGFscGhhLCBkLCBzO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtqICogYXN0ZXAgKyBpXSkgPiBNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEZBSUxFRFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayAhPSBpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChhZCwgaSAqIGFzdGVwICsgaiwgayAqIGFzdGVwICsgaiwgdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dhcChiZCwgaSwgaywgdCk7XG4gICAgICAgICAgICAgICAgcCA9IC1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkID0gLTEuMCAvIGFkW2kgKiBhc3RlcCArIGldO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFkW2ogKiBhc3RlcCArIGldICogZDtcblxuICAgICAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhZFtqICogYXN0ZXAgKyBrXSArPSBhbHBoYSAqIGFkW2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJkW2pdICs9IGFscGhhICogYmRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkW2kgKiBhc3RlcCArIGldID0gLWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBhc3RlcCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBzID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzIC09IGFkW2kgKiBhc3RlcCArIGtdICogYmRba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHMgKiBhZFtpICogYXN0ZXAgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxOyAvLyBPS1xuICAgIH1cblxuICAgIGNob2xlc2t5X3NvbHZlKEE6IHsgY29sczogYW55OyBkYXRhOiBhbnkgfSwgQjogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQTogYW55LCBXOiBtYXRyaXhfdCwgVTogbWF0cml4X3QsIFY6IG1hdHJpeF90LCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9O1xuICAgICAgICB2YXIgYXQgPSAwLCBpID0gMCwgaiA9IDAsIF9tID0gQS5yb3dzLCBfbiA9IEEuY29scywgbSA9IF9tLCBuID0gX247XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDsgLy8gd2Ugb25seSB3b3JrIHdpdGggc2luZ2xlIGNoYW5uZWwgXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyIH0sIFg6IHsgZGF0YTogbnVtYmVyW10gfSwgQjogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpOiB7IGRhdGE6IGFueSB9LCBBOiB7IHJvd3M6IGFueTsgY29sczogYW55OyB0eXBlOiBudW1iZXIgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwLCBwYSA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIC8vdmFyIHVfYnVmZiA9IGNhY2hlMS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlkID0gQWkuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwLCBwdSA9IDA7IGogPCBucm93czsgaisrLCBwYSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wOyBrIDwgbmNvbHM7IGsrKywgcHUrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Rba10gPiB0b2wpIHN1bSArPSB2ZFtwdiArIGtdICogdWRbcHVdIC8gd2Rba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkW3BhXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgZWlnZW5WVihBOiB7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyOyBkYXRhOiBhbnlbXSB9LCB2ZWN0czogeyBkYXRhOiBudW1iZXJbXSB9LCB2YWxzOiB7IGRhdGE6IHsgW3g6IHN0cmluZ106IGFueSB9IH0pIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIGtleXBvaW50X3Qge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgYW5nbGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NvcmU6IG51bWJlciwgbGV2ZWw6IG51bWJlciwgYW5nbGU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHsgeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ID09PSBcInVuZGVmaW5lZFwiKSB7IHkgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NvcmUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2NvcmUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09IFwidW5kZWZpbmVkXCIpIHsgYW5nbGUgPSAtMS4wOyB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN3YXAoQTogeyBbeDogc3RyaW5nXTogYW55OyB9LCBpMDogc3RyaW5nIHwgbnVtYmVyLCBpMTogc3RyaW5nIHwgbnVtYmVyLCB0OiBhbnkpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIGEgPSBNYXRoLmFicyhhKTtcbiAgICBiID0gTWF0aC5hYnMoYik7XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnNxcnQoMS4wICsgYiAqIGIpO1xuICAgIH1cbiAgICBpZiAoYiA+IDApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYiAqIE1hdGguc3FydCgxLjAgKyBhICogYSk7XG4gICAgfVxuICAgIHJldHVybiAwLjA7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0bWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGlkZW50aXR5KE06IHsgZGF0YTogYW55OyByb3dzOiBhbnk7IGNvbHM6IGFueTsgfSwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgc3JjID0gTS5kYXRhO1xuICAgICAgICB2YXIgcm93cyA9IE0ucm93cywgY29scyA9IE0uY29scywgY29sc18xID0gKGNvbHMgKyAxKSB8IDA7XG4gICAgICAgIHZhciBsZW4gPSByb3dzICogY29scztcbiAgICAgICAgdmFyIGsgPSBsZW47XG4gICAgICAgIHdoaWxlICgtLWxlbiA+PSAwKSBzcmNbbGVuXSA9IDAuMDtcbiAgICAgICAgbGVuID0gaztcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICBzcmNba10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGsgPSBrICsgY29sc18xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKEF0OiB7IGRhdGE6IGFueTsgfSwgQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIEFpID0gMCwgQXRpID0gMCwgcEF0ID0gMDtcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQidcbiAgICBtdWx0aXBseV9BQnQoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbXJvd3MgPSBCLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgY29sczogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBBcCsrLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBBJ1xuICAgIG11bHRpcGx5X0FBdChDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0MgPSAwLCBwQyA9IDAsIHBfQ0MgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwX0NDXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlvdXMgc21hbGwgbWF0cml4IG9wZXJhdGlvbnNcbiAgICBpZGVudGl0eV8zeDMoTTogeyBkYXRhOiBhbnk7IH0sIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIGR0ID0gTS5kYXRhO1xuICAgICAgICBkdFswXSA9IGR0WzRdID0gZHRbOF0gPSB2YWx1ZTtcbiAgICAgICAgZHRbMV0gPSBkdFsyXSA9IGR0WzNdID0gMDtcbiAgICAgICAgZHRbNV0gPSBkdFs2XSA9IGR0WzddID0gMDtcbiAgICB9XG5cbiAgICBpbnZlcnRfM3gzKGZyb206IHsgZGF0YTogYW55OyB9LCB0bzogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIEEgPSBmcm9tLmRhdGEsIGludkEgPSB0by5kYXRhO1xuICAgICAgICB2YXIgdDEgPSBBWzRdO1xuICAgICAgICB2YXIgdDIgPSBBWzhdO1xuICAgICAgICB2YXIgdDQgPSBBWzVdO1xuICAgICAgICB2YXIgdDUgPSBBWzddO1xuICAgICAgICB2YXIgdDggPSBBWzBdO1xuXG4gICAgICAgIHZhciB0OSA9IHQ4ICogdDE7XG4gICAgICAgIHZhciB0MTEgPSB0OCAqIHQ0O1xuICAgICAgICB2YXIgdDEzID0gQVszXTtcbiAgICAgICAgdmFyIHQxNCA9IEFbMV07XG4gICAgICAgIHZhciB0MTUgPSB0MTMgKiB0MTQ7XG4gICAgICAgIHZhciB0MTcgPSBBWzJdO1xuICAgICAgICB2YXIgdDE4ID0gdDEzICogdDE3O1xuICAgICAgICB2YXIgdDIwID0gQVs2XTtcbiAgICAgICAgdmFyIHQyMSA9IHQyMCAqIHQxNDtcbiAgICAgICAgdmFyIHQyMyA9IHQyMCAqIHQxNztcbiAgICAgICAgdmFyIHQyNiA9IDEuMCAvICh0OSAqIHQyIC0gdDExICogdDUgLSB0MTUgKiB0MiArIHQxOCAqIHQ1ICsgdDIxICogdDQgLSB0MjMgKiB0MSk7XG4gICAgICAgIGludkFbMF0gPSAodDEgKiB0MiAtIHQ0ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzFdID0gLSh0MTQgKiB0MiAtIHQxNyAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsyXSA9IC0oLXQxNCAqIHQ0ICsgdDE3ICogdDEpICogdDI2O1xuICAgICAgICBpbnZBWzNdID0gLSh0MTMgKiB0MiAtIHQ0ICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs0XSA9ICh0OCAqIHQyIC0gdDIzKSAqIHQyNjtcbiAgICAgICAgaW52QVs1XSA9IC0odDExIC0gdDE4KSAqIHQyNjtcbiAgICAgICAgaW52QVs2XSA9IC0oLXQxMyAqIHQ1ICsgdDEgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzddID0gLSh0OCAqIHQ1IC0gdDIxKSAqIHQyNjtcbiAgICAgICAgaW52QVs4XSA9ICh0OSAtIHQxNSkgKiB0MjY7XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHlfM3gzKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGRhdGE6IGFueTsgfSwgQjogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIENkID0gQy5kYXRhLCBBZCA9IEEuZGF0YSwgQmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciBtMV8wID0gQWRbMF0sIG0xXzEgPSBBZFsxXSwgbTFfMiA9IEFkWzJdO1xuICAgICAgICB2YXIgbTFfMyA9IEFkWzNdLCBtMV80ID0gQWRbNF0sIG0xXzUgPSBBZFs1XTtcbiAgICAgICAgdmFyIG0xXzYgPSBBZFs2XSwgbTFfNyA9IEFkWzddLCBtMV84ID0gQWRbOF07XG5cbiAgICAgICAgdmFyIG0yXzAgPSBCZFswXSwgbTJfMSA9IEJkWzFdLCBtMl8yID0gQmRbMl07XG4gICAgICAgIHZhciBtMl8zID0gQmRbM10sIG0yXzQgPSBCZFs0XSwgbTJfNSA9IEJkWzVdO1xuICAgICAgICB2YXIgbTJfNiA9IEJkWzZdLCBtMl83ID0gQmRbN10sIG0yXzggPSBCZFs4XTtcblxuICAgICAgICBDZFswXSA9IG0xXzAgKiBtMl8wICsgbTFfMSAqIG0yXzMgKyBtMV8yICogbTJfNjtcbiAgICAgICAgQ2RbMV0gPSBtMV8wICogbTJfMSArIG0xXzEgKiBtMl80ICsgbTFfMiAqIG0yXzc7XG4gICAgICAgIENkWzJdID0gbTFfMCAqIG0yXzIgKyBtMV8xICogbTJfNSArIG0xXzIgKiBtMl84O1xuICAgICAgICBDZFszXSA9IG0xXzMgKiBtMl8wICsgbTFfNCAqIG0yXzMgKyBtMV81ICogbTJfNjtcbiAgICAgICAgQ2RbNF0gPSBtMV8zICogbTJfMSArIG0xXzQgKiBtMl80ICsgbTFfNSAqIG0yXzc7XG4gICAgICAgIENkWzVdID0gbTFfMyAqIG0yXzIgKyBtMV80ICogbTJfNSArIG0xXzUgKiBtMl84O1xuICAgICAgICBDZFs2XSA9IG0xXzYgKiBtMl8wICsgbTFfNyAqIG0yXzMgKyBtMV84ICogbTJfNjtcbiAgICAgICAgQ2RbN10gPSBtMV82ICogbTJfMSArIG0xXzcgKiBtMl80ICsgbTFfOCAqIG0yXzc7XG4gICAgICAgIENkWzhdID0gbTFfNiAqIG0yXzIgKyBtMV83ICogbTJfNSArIG0xXzggKiBtMl84O1xuICAgIH1cblxuICAgIG1hdDN4M19kZXRlcm1pbmFudChNOiB7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgbWQgPSBNLmRhdGE7XG4gICAgICAgIHJldHVybiBtZFswXSAqIG1kWzRdICogbWRbOF0gLVxuICAgICAgICAgICAgbWRbMF0gKiBtZFs1XSAqIG1kWzddIC1cbiAgICAgICAgICAgIG1kWzNdICogbWRbMV0gKiBtZFs4XSArXG4gICAgICAgICAgICBtZFszXSAqIG1kWzJdICogbWRbN10gK1xuICAgICAgICAgICAgbWRbNl0gKiBtZFsxXSAqIG1kWzVdIC1cbiAgICAgICAgICAgIG1kWzZdICogbWRbMl0gKiBtZFs0XTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudF8zeDMoTTExOiBudW1iZXIsIE0xMjogbnVtYmVyLCBNMTM6IG51bWJlcixcbiAgICAgICAgTTIxOiBudW1iZXIsIE0yMjogbnVtYmVyLCBNMjM6IG51bWJlcixcbiAgICAgICAgTTMxOiBudW1iZXIsIE0zMjogbnVtYmVyLCBNMzM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBkYXRhX3QgfSBmcm9tICcuLi9ub2RlX3V0aWxzL2RhdGFfdCdcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhfVCB7XG4gICAgYWxsb2NhdGU6ICgpID0+IHZvaWQ7XG4gICAgY29weV90bzogKG90aGVyOiBhbnkpID0+IHZvaWQ7XG4gICAgcmVzaXplOiAoYzogbnVtYmVyLCByOiBudW1iZXIsIGNoOiBhbnkpID0+IHZvaWQ7XG59XG5leHBvcnQgY2xhc3MgbWF0cml4X3QgaW1wbGVtZW50cyBJTWF0cml4X1Qge1xuICAgIHByaXZhdGUgZHQ6IElEYXRhX1R5cGU7XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICBwdWJsaWMgY2hhbm5lbDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2xzOiBudW1iZXI7XG4gICAgcHVibGljIHJvd3M6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHB1YmxpYyBidWZmZXI6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihjOiBudW1iZXIsIHI6IG51bWJlciwgX2RhdGFfdHlwZTogbnVtYmVyLCBfZGF0YV9idWZmZXI6IGFueSkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5kdC5fZ2V0X2NoYW5uZWwoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNvbHMgPSBjIHwgMDtcbiAgICAgICAgdGhpcy5yb3dzID0gciB8IDA7XG4gICAgICAgIGlmICh0eXBlb2YgX2RhdGFfYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IF9kYXRhX2J1ZmZlcjtcbiAgICAgICAgICAgIC8vIGRhdGEgdXNlciBhc2tlZCBmb3JcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbG9jYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyBjbGVhciByZWZlcmVuY2VzXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgZGF0YV90KCh0aGlzLmNvbHMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIHRoaXMuY2hhbm5lbCkgKiB0aGlzLnJvd3MpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICB9XG4gICAgY29weV90byhvdGhlcjogYW55KSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYzogbnVtYmVyLCByOiBudW1iZXIsIGNoOiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBJRGF0YV9ULCBkYXRhX3QgfSBmcm9tICcuL2RhdGFfdCdcblxuZXhwb3J0IGludGVyZmFjZSBJUG9vbF9Ob2RlX1Qge1xuICAgIHJlc2l6ZTogKHNpemVfaW5fYnl0ZXM6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IGltcGxlbWVudHMgSVBvb2xfTm9kZV9UIHtcbiAgICBwdWJsaWMgbmV4dDogYW55O1xuICAgIHB1YmxpYyBkYXRhPzogSURhdGFfVDtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBidWZmZXI6IGFueTtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YV9UIHtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICB1ODogVWludDhBcnJheTtcbiAgICBpMzI6IEludDMyQXJyYXk7XG4gICAgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgZjY0OiBGbG9hdDY0QXJyYXk7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3QgaW1wbGVtZW50cyBJRGF0YV9UICB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlciwgYnVmZmVyPzogYW55KSB7XG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuL2pzZmVhdE5leHQnXG5leHBvcnQgZGVmYXVsdCB7XG4gICBqc2ZlYXROZXh0XG59Il0sIm5hbWVzIjpbIl9wb29sX25vZGVfdCIsImNhY2hlIiwiX3Bvb2xfaGVhZCIsIl9wb29sX3RhaWwiLCJfcG9vbF9zaXplIiwiY2FwYWNpdHkiLCJkYXRhX3NpemUiLCJpIiwibm9kZSIsIm5leHQiLCJzaXplX2luX2J5dGVzIiwic2l6ZSIsInJlc2l6ZSIsIkpTRkVBVF9DT05TVEFOVFMiLCJFUFNJTE9OIiwiRkxUX01JTiIsIlU4X3QiLCJTMzJfdCIsIkYzMl90IiwiUzY0X3QiLCJGNjRfdCIsIkMxX3QiLCJDMl90IiwiQzNfdCIsIkM0X3QiLCJDT0xPUl9SR0JBMkdSQVkiLCJDT0xPUl9SR0IyR1JBWSIsIkNPTE9SX0JHUkEyR1JBWSIsIkNPTE9SX0JHUjJHUkFZIiwiQk9YX0JMVVJfTk9TQ0FMRSIsIlNWRF9VX1QiLCJTVkRfVl9UIiwiVThDMV90IiwiVThDM190IiwiVThDNF90IiwiRjMyQzFfdCIsIkYzMkMyX3QiLCJTMzJDMV90IiwiUzMyQzJfdCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwiayIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiTWF0aCIsIm1pbiIsIl9jb252b2wiLCJfcmVzYW1wbGVfdTgiLCJzcmMiLCJkc3QiLCJudyIsIm5oIiwieG9mc19jb3VudCIsImNoIiwiY2hhbm5lbCIsImNvbHMiLCJyb3dzIiwiZGF0YSIsInNjYWxlX3giLCJzY2FsZV95IiwiaW52X3NjYWxlXzI1NiIsImR4IiwiZHkiLCJzeCIsInN5Iiwic3gxIiwic3gyIiwiZnN4MSIsImZzeDIiLCJhIiwiYiIsImR4biIsImFscGhhIiwiYmV0YSIsImJldGExIiwiYnVmX25vZGUiLCJnZXRfYnVmZmVyIiwic3VtX25vZGUiLCJ4b2ZzX25vZGUiLCJpMzIiLCJ4b2ZzIiwibWF4IiwicHV0X2J1ZmZlciIsIl9yZXNhbXBsZSIsInNjYWxlIiwiZjMyIiwiYWJzIiwic3dhcCIsImh5cG90IiwibWF0bWF0aCIsIm1hdHJpeF90Iiwia2V5cG9pbnRfdCIsInBrZyIsImpzZmVhdE5leHQiLCJkdCIsImFsbG9jYXRlIiwiX2dldF9kYXRhX3R5cGUiLCJfZ2V0X2NoYW5uZWwiLCJfZ2V0X2RhdGFfdHlwZV9zaXplIiwidmVyc2lvbiIsImltZ3Byb2MiLCJjb2RlIiwieCIsInkiLCJpciIsImpyIiwiY29lZmZfciIsImNvZWZmX2ciLCJjb2VmZl9iIiwiY24iLCJjbjIiLCJjbjMiLCJkc3RfdTgiLCJyYWRpdXMiLCJvcHRpb25zIiwiaDIiLCJlbmQiLCJ3aW5kb3dTaXplIiwicmFkaXVzUGx1c09uZSIsInJhZGl1c1BsdXMyIiwidG1wX2J1ZmYiLCJkc3RJbmRleCIsInNyY0luZGV4IiwibmV4dFBpeGVsSW5kZXgiLCJwcmV2aW91c1BpeGVsSW5kZXgiLCJkYXRhX2kzMiIsImRhdGFfdTgiLCJob2xkIiwic2lnbWEiLCJqc2ZlYXRtYXRoIiwibWF0aCIsImlzX3U4IiwiYnVmX3N6IiwiZmlsdF9ub2RlIiwiZ2V0X2dhdXNzaWFuX2tlcm5lbCIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsImRzdGVwIiwieDEiLCJjIiwiZCIsImUiLCJmIiwic3JvdzAiLCJzcm93MSIsInNyb3cyIiwiZHJvdyIsInRyb3cwIiwidHJvdzEiLCJpbWciLCJneGd5IiwiYnVmMF9ub2RlIiwiYnVmMV9ub2RlIiwiZHN0X3N1bSIsImRzdF9zcXN1bSIsImRzdF90aWx0ZWQiLCJ3MCIsImgwIiwidzEiLCJzIiwiczIiLCJwIiwicHVwIiwidiIsInByZXYiLCJoaXN0MCIsIm5vcm0iLCJoaXN0MF9ub2RlIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInhzMCIsInlzMCIsIndzIiwic2MiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJyIiwiZyIsIndpZHRoIiwiaGVpZ2h0IiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJ0Iiwic2lnbWFfeCIsInNjYWxlXzJ4Iiwia2Vybl9ub2RlIiwiX2tlcm5lbCIsImV4cCIsIm1vZGVsIiwic3JjX3gwIiwic3JjX3kwIiwiZHN0X3gwIiwiZHN0X3kwIiwic3JjX3gxIiwic3JjX3kxIiwiZHN0X3gxIiwiZHN0X3kxIiwic3JjX3gyIiwic3JjX3kyIiwiZHN0X3gyIiwiZHN0X3kyIiwic3JjX3gzIiwic3JjX3kzIiwiZHN0X3gzIiwiZHN0X3kzIiwidDEiLCJ0MiIsInQ0IiwidDUiLCJ0NiIsInQ3IiwidDgiLCJ0OSIsInQxMCIsInQxMSIsInQxNCIsInQxNSIsInQxNiIsInQxOCIsInQyMCIsInQyMSIsInQyNCIsInQyNSIsInQyNiIsInQyNyIsInQyOCIsInQzMCIsInQzMiIsInQzNSIsInQ0MSIsInQ0MiIsInQ0MyIsInQ0NiIsInQ0OCIsInQ1MSIsInQ1NSIsIkhyMCIsIkhyMSIsIkhyMiIsIkhyMyIsIkhyNCIsIkhyNSIsIkhyNiIsIkhyNyIsIkhsMCIsIkhsMSIsIkhsMiIsIkhsMyIsIkhsNCIsIkhsNSIsIkhsNiIsIkhsNyIsInQxMiIsInQyMyIsInQzMSIsInQ0NCIsInQ0NyIsInQ0OSIsInQ1MCIsIm1hdCIsImFycmF5IiwibG93IiwiaGlnaCIsImNtcCIsImlzb3J0X3RocmVzaCIsInRhIiwidGIiLCJ0YyIsImxlZnQiLCJyaWdodCIsIm4iLCJtIiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250Iiwic3RhY2siLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwibGluYWxnIiwiQSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsImVwcyIsImwiLCJpZHgiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJzZCIsImdhbW1hIiwiZGVsdGEiLCJzZWVkIiwidmFsMCIsImFzdW0iLCJXX2J1ZmYiLCJmNjQiLCJzcXJ0IiwiQiIsImFkIiwiYmQiLCJjb2wiLCJyb3ciLCJjb2wyIiwiY3MiLCJycyIsImludl9kaWFnIiwiVSIsImF0IiwiX20iLCJfbiIsImFfYnVmZiIsIndfYnVmZiIsInZfYnVmZiIsImFfbXQiLCJ3X210Iiwidl9tdCIsInRyYW5zcG9zZSIsIkphY29iaVNWREltcGwiLCJYIiwicHUiLCJwdiIsIm5yb3dzIiwibmNvbHMiLCJ4c3VtIiwidG9sIiwidV9idWZmIiwidV9tdCIsInVkIiwid2QiLCJ2ZCIsInN2ZF9kZWNvbXBvc2UiLCJwYSIsImlkIiwidmVjdHMiLCJ2YWxzIiwiSmFjb2JpSW1wbCIsInNjb3JlIiwibGV2ZWwiLCJhbmdsZSIsImkwIiwiaTEiLCJNIiwidmFsdWUiLCJjb2xzXzEiLCJsZW4iLCJBdGkiLCJwQXQiLCJhdGQiLCJDIiwiQXAiLCJwQSIsInBCIiwicF9CIiwiQ3AiLCJtY29scyIsImNkIiwibXJvd3MiLCJwQ2RpYWciLCJwX0EiLCJwQyIsInBDdCIsInBfQyIsInBfQ0MiLCJmcm9tIiwidG8iLCJpbnZBIiwidDEzIiwidDE3IiwiQ2QiLCJBZCIsIkJkIiwibTFfMCIsIm0xXzEiLCJtMV8yIiwibTFfMyIsIm0xXzQiLCJtMV81IiwibTFfNiIsIm0xXzciLCJtMV84IiwibTJfMCIsIm0yXzEiLCJtMl8yIiwibTJfMyIsIm0yXzQiLCJtMl81IiwibTJfNiIsIm0yXzciLCJtMl84IiwibWQiLCJNMTEiLCJNMTIiLCJNMTMiLCJNMjEiLCJNMjIiLCJNMjMiLCJNMzEiLCJNMzIiLCJNMzMiLCJkYXRhX3QiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJBcnJheUJ1ZmZlciIsImxlbmd0aCIsIlVpbnQ4QXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiXSwic291cmNlUm9vdCI6IiJ9