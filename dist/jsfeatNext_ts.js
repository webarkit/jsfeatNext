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
/* harmony import */ var _yape_yape__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./yape/yape */ "./src_ts/yape/yape.ts");
/* harmony import */ var _yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./yape06/yape06_utils */ "./src_ts/yape06/yape06_utils.ts");
/* harmony import */ var _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./motion_estimator/ransac_params_t */ "./src_ts/motion_estimator/ransac_params_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constants/constants */ "./src_ts/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../package.json */ "./package.json");








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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "pyramid_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "keypoint_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "yape", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "yape06", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "ransac_params_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "affine2d", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "homography2d", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "motion_estimator", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "optical_flow_lk", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_19__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);



var motion_model = /*#__PURE__*/function (_jsfeatNext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(motion_model, _jsfeatNext);

  var _super = _createSuper(motion_model);

  function motion_model() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, motion_model);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "T0", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "T1", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "AtA", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "AtB", void 0);

    _this.T0 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);
    _this.T1 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);
    _this.AtA = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 6, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);
    _this.AtB = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(motion_model, [{
    key: "sqr",
    value: function sqr(x) {
      return x * x;
    }
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
          dy2 = 0.0;

      for (; j < i; ++j) {
        dx1 = points[j].x - points[i].x;
        dy1 = points[j].y - points[i].y;

        for (k = 0; k < j; ++k) {
          dx2 = points[k].x - points[i].x;
          dy2 = points[k].y - points[i].y;
          if (Math.abs(dx2 * dy1 - dy2 * dx1) <= _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2))) return true;
        }
      }

      return false;
    }
  }]);

  return motion_model;
}(jsfeatNext);

var affine2d = /*#__PURE__*/function (_motion_model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(affine2d, _motion_model);

  var _super2 = _createSuper(affine2d);

  function affine2d() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, affine2d);

    return _super2.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(affine2d, [{
    key: "run",
    value: function run(from, to, model, count) {
      var i = 0,
          j = 0;
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;
      var md = model.data,
          t0d = this.T0.data,
          t1d = this.T1.data;
      var pt0,
          pt1,
          px = 0.0,
          py = 0.0;

      var _matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();

      var _linalg = new jsfeatNext.linalg();

      this.iso_normalize_points(from, to, t0d, t1d, count);
      var a_buff = this.cache.get_buffer(2 * count * 6 << 3);
      var b_buff = this.cache.get_buffer(2 * count << 3);
      var a_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 2 * count, dt, a_buff.data);
      var b_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, 2 * count, dt, b_buff.data);
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
      md[6] = 0.0, md[7] = 0.0, md[8] = 1.0;

      _matmath.invert_3x3(this.T1, this.T1);

      _matmath.multiply_3x3(model, this.T1, model);

      _matmath.multiply_3x3(model, model, this.T0);

      this.cache.put_buffer(a_buff);
      this.cache.put_buffer(b_buff);
      return 1;
    }
  }]);

  return affine2d;
}(motion_model);

var homography2d = /*#__PURE__*/function (_motion_model2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(homography2d, _motion_model2);

  var _super3 = _createSuper(homography2d);

  function homography2d() {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, homography2d);

    _this2 = _super3.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "mLtL", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "Evec", void 0);

    _this2.mLtL = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);
    _this2.Evec = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t);
    return _this2;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(homography2d, [{
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

      var _matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();

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

      if (Math.abs(smx) < _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON || Math.abs(smy) < _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMx) < _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMy) < _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON) return 0;
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
      t1d[8] = 1;
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
      }

      for (i = 0; i < 9; ++i) {
        for (j = 0; j < i; ++j) {
          LtL[i * 9 + j] = LtL[j * 9 + i];
        }
      }

      _linalg.eigenVV(this.mLtL, this.Evec);

      md[0] = evd[72], md[1] = evd[73], md[2] = evd[74];
      md[3] = evd[75], md[4] = evd[76], md[5] = evd[77];
      md[6] = evd[78], md[7] = evd[79], md[8] = evd[80];

      _matmath.multiply_3x3(model, this.T1, model);

      _matmath.multiply_3x3(model, model, this.T0);

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
      var _matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();

      if (count == 4) {
        var negative = 0;
        var fp0 = from[0],
            fp1 = from[1],
            fp2 = from[2],
            fp3 = from[3];
        var tp0 = to[0],
            tp1 = to[1],
            tp2 = to[2],
            tp3 = to[3];
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

        if (detA * detB < 0) negative++;
        A11 = fp1.x, A12 = fp1.y;
        A21 = fp2.x, A22 = fp2.y;
        A31 = fp3.x, A32 = fp3.y;
        B11 = tp1.x, B12 = tp1.y;
        B21 = tp2.x, B22 = tp2.y;
        B31 = tp3.x, B32 = tp3.y;
        detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
        detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
        if (detA * detB < 0) negative++;
        A11 = fp0.x, A12 = fp0.y;
        A21 = fp2.x, A22 = fp2.y;
        A31 = fp3.x, A32 = fp3.y;
        B11 = tp0.x, B12 = tp0.y;
        B21 = tp2.x, B22 = tp2.y;
        B31 = tp3.x, B32 = tp3.y;
        detA = _matmath.determinant_3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);
        detB = _matmath.determinant_3x3(B11, B12, B13, B21, B22, B23, B31, B32, B33);
        if (detA * detB < 0) negative++;
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

      return true;
    }
  }]);

  return homography2d;
}(motion_model);

jsfeatNext.cache = _cache_cache__WEBPACK_IMPORTED_MODULE_8__.cache;

jsfeatNext.pyramid_t = /*#__PURE__*/function (_jsfeatNext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(pyramid_t, _jsfeatNext2);

  var _super4 = _createSuper(pyramid_t);

  function pyramid_t(levels) {
    var _this3;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, pyramid_t);

    _this3 = _super4.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), "levels", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), "data", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), "pyrdown", void 0);

    _this3.levels = levels | 0;
    _this3.data = new Array(levels);

    var _imgproc = new jsfeatNext.imgproc();

    _this3.pyrdown = _imgproc.pyrdown;
    return _this3;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(pyramid_t, [{
    key: "allocate",
    value: function allocate(start_w, start_h, data_type) {
      var i = this.levels;

      while (--i >= 0) {
        this.data[i] = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(start_w >> i, start_h >> i, data_type);
      }
    }
  }, {
    key: "build",
    value: function build(input, skip_first_level) {
      if (typeof skip_first_level === "undefined") {
        skip_first_level = true;
      }

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

jsfeatNext.matrix_t = _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t;
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_14__.keypoint_t;

jsfeatNext.imgproc = /*#__PURE__*/function (_jsfeatNext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(imgproc, _jsfeatNext3);

  var _super5 = _createSuper(imgproc);

  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, imgproc);

    return _super5.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      if (typeof code === "undefined") {
        code = _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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

        if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
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
      var scale = options & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
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
          is_u8 = data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S32_t) {
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
      var accum = new Int32Array((numangle + 2) * (numrho + 2));
      var tabSin = new Float32Array(numangle);
      var tabCos = new Float32Array(numangle);
      var n = 0;
      var ang = min_theta;

      for (; n < numangle; n++) {
        tabSin[n] = Math.sin(ang) * irho;
        tabCos[n] = Math.cos(ang) * irho;
        ang += theta_res;
      }

      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          if (image[i * step + j] != 0) {
            for (var n = 0; n < numangle; n++) {
              var r = Math.round(j * tabCos[n] + i * tabSin[n]);
              r += (numrho - 1) / 2;
              accum[(n + 1) * (numrho + 2) + r + 1] += 1;
            }
          }
        }
      }

      var _sort_buf = new Array();

      for (var r = 0; r < numrho; r++) {
        for (var n = 0; n < numangle; n++) {
          var base = (n + 1) * (numrho + 2) + r + 1;

          if (accum[base] > threshold && accum[base] > accum[base - 1] && accum[base] >= accum[base + 1] && accum[base] > accum[base - numrho - 2] && accum[base] >= accum[base + numrho + 2]) {
            _sort_buf.push(base);
          }
        }
      }

      _sort_buf.sort(function (l1, l2) {
        return accum[l1] > accum[l2] || accum[l1] == accum[l2] && l1 < l2;
      });

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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S32_t) {
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
          tg67x = 0;
      var dxdy_node = this.cache.get_buffer(h * w2 << 2);
      var buf_node = this.cache.get_buffer(3 * (w + 2) << 2);
      var map_node = this.cache.get_buffer((h + 2) * (w + 2) << 2);
      var stack_node = this.cache.get_buffer(h * w << 2);
      var buf = buf_node.i32;
      var map = map_node.i32;
      var stack = stack_node.i32;
      var dxdy = dxdy_node.i32;
      var dxdy_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w, h, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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
        x = dxdy[grad], y = dxdy[grad + 1];
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
            x = dxdy[grad + (j << 1)], y = dxdy[grad + (j << 1) + 1];
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
            s = x ^ y;
            x = (x ^ x >> 31) - (x >> 31) | 0;
            y = (y ^ y >> 31) - (y >> 31) | 0;
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
      }

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
          dst_d[row0++] = Number(map[map_i + j] == 2) * 0xff;
        }
      }

      this.cache.put_buffer(dxdy_node);
      this.cache.put_buffer(buf_node);
      this.cache.put_buffer(map_node);
      this.cache.put_buffer(stack_node);
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

jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(math, _jsfeatNext4);

  var _super6 = _createSuper(math);

  function math() {
    var _this4;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, math);

    _this4 = _super6.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "qsort_stack", void 0);

    _this4.qsort_stack = new Int32Array(48 * 2);
    return _this4;
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

      if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t) {
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

jsfeatNext.linalg = /*#__PURE__*/function (_jsfeatNext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(linalg, _jsfeatNext5);

  var _super7 = _createSuper(linalg);

  function linalg() {
    var _this5;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, linalg);

    _this5 = _super7.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5), "matmath", void 0);

    _this5.matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();
    return _this5;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON;
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
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.FLT_MIN;
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;

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
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;
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
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;
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
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;
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

jsfeatNext.yape = _yape_yape__WEBPACK_IMPORTED_MODULE_15__.yape;

jsfeatNext.yape06 = /*#__PURE__*/function (_jsfeatNext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(yape06, _jsfeatNext6);

  var _super8 = _createSuper(yape06);

  function yape06() {
    var _this6;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, yape06);

    _this6 = _super8.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "laplacian_threshold", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "min_eigen_value_threshold", void 0);

    _this6.laplacian_threshold = 30;
    _this6.min_eigen_value_threshold = 25;
    return _this6;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(yape06, [{
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

      (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_16__.compute_laplacian)(srd_d, laplacian, w, h, Dxx, Dyy, sx, sy, ex, ey);
      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          lv = laplacian[rowx];

          if (lv < -lap_thresh && lv < laplacian[rowx - 1] && lv < laplacian[rowx + 1] && lv < laplacian[rowx - w] && lv < laplacian[rowx + w] && lv < laplacian[rowx - w - 1] && lv < laplacian[rowx + w - 1] && lv < laplacian[rowx - w + 1] && lv < laplacian[rowx + w + 1] || lv > lap_thresh && lv > laplacian[rowx - 1] && lv > laplacian[rowx + 1] && lv > laplacian[rowx - w] && lv > laplacian[rowx + w] && lv > laplacian[rowx - w - 1] && lv > laplacian[rowx + w - 1] && lv > laplacian[rowx - w + 1] && lv > laplacian[rowx + w + 1]) {
            min_eigen_value = (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_16__.hessian_min_eigen_value)(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);

            if (min_eigen_value > eigen_thresh) {
              pt = points[number_of_points];
              pt.x = x, pt.y = y, pt.score = min_eigen_value;
              ++number_of_points;
              ++x, ++rowx;
            }
          }
        }
      }

      this.cache.put_buffer(lap_buf);
      return number_of_points;
    }
  }]);

  return yape06;
}(jsfeatNext);

jsfeatNext.motion_estimator = /*#__PURE__*/function (_jsfeatNext7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(motion_estimator, _jsfeatNext7);

  var _super9 = _createSuper(motion_estimator);

  function motion_estimator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, motion_estimator);

    return _super9.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(motion_estimator, [{
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
      var inliers_max = -1,
          numinliers = 0;
      var nmodels = 0;
      var err = err_buff.f32;

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
        if (nmodels <= 0) continue;
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.C1_t, ms_buff.data);
      var numinliers = 0;
      var nmodels = 0;
      var err = err_buff.f32;
      var min_median = 1000000000.0,
          sigma = 0.0,
          median = 0.0;
      params.eps = 0.45;
      niters = params.update_iters(params.eps, niters);

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
        if (nmodels <= 0) continue;
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

jsfeatNext.ransac_params_t = _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_17__.ransac_params_t;
jsfeatNext.affine2d = affine2d;
jsfeatNext.homography2d = homography2d;

jsfeatNext.optical_flow_lk = /*#__PURE__*/function (_jsfeatNext8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(optical_flow_lk, _jsfeatNext8);

  var _super10 = _createSuper(optical_flow_lk);

  function optical_flow_lk() {
    var _this7;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, optical_flow_lk);

    _this7 = _super10.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "scharr_deriv", void 0);

    var _imgproc = new jsfeatNext.imgproc();

    _this7.scharr_deriv = _imgproc.scharr_derivatives;
    return _this7;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(optical_flow_lk, [{
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
      var deriv_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w0, h0, _constants_constants__WEBPACK_IMPORTED_MODULE_18__.JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
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
          b2 = 0.0;
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
      eps *= eps;

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
        brd_b = lh - win_size | 0;
        this.scharr_deriv(prev_imgs[level], deriv_m);

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
          iprev_y = prev_y | 0;
          x = iprev_x <= brd_tl || iprev_x >= brd_r || iprev_y <= brd_tl || iprev_y >= brd_b;

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
          A11 = 0.0, A12 = 0.0, A22 = 0.0;

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
            x = inext_x <= brd_tl || inext_x >= brd_r || inext_y <= brd_tl || inext_y >= brd_b;

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
        }
      }

      this.cache.put_buffer(iwin_node);
      this.cache.put_buffer(deriv_iwin_node);
      this.cache.put_buffer(deriv_lev_node);
    }
  }]);

  return optical_flow_lk;
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

/***/ "./src_ts/motion_estimator/ransac_params_t.ts":
/*!****************************************************!*\
  !*** ./src_ts/motion_estimator/ransac_params_t.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ransac_params_t": () => (/* binding */ ransac_params_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var ransac_params_t = /*#__PURE__*/function () {
  function ransac_params_t(size, thresh, eps, prob) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ransac_params_t);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "size", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "thresh", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "eps", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "prob", void 0);

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

/***/ "./src_ts/yape/yape.ts":
/*!*****************************!*\
  !*** ./src_ts/yape/yape.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yape": () => (/* binding */ yape)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _yape_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yape_utils */ "./src_ts/yape/yape_utils.ts");




var yape = /*#__PURE__*/function () {
  function yape() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, yape);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "level_tables", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "tau", void 0);

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
        this.level_tables[i] = new _yape_utils__WEBPACK_IMPORTED_MODULE_3__.lev_table_t(width >> i, height >> i, radius);
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
            (0,_yape_utils__WEBPACK_IMPORTED_MODULE_3__.perform_one_point)(img, rowx, scores, im, ip, dirs, opposite, dirs_count);
          }
        }
      }

      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          score = scores[rowx];
          abs_score = Math.abs(score);

          if (abs_score < 5) {
            ++x, ++rowx;
          } else {
            if ((0,_yape_utils__WEBPACK_IMPORTED_MODULE_3__.third_check)(scores, rowx, w) >= 3 && (0,_yape_utils__WEBPACK_IMPORTED_MODULE_3__.is_local_maxima)(scores, rowx, score, hw, R)) {
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

/***/ "./src_ts/yape/yape_utils.ts":
/*!***********************************!*\
  !*** ./src_ts/yape/yape_utils.ts ***!
  \***********************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



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
  var state = 0;
  A = I[x + dirs[a]];

  if (A <= Ip) {
    if (A >= Im) {
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
            }
          } else {
            b++;
            B2 = I[x + dirs[b]];
            if (B2 > Ip) state = 7;else if (B2 < Im) state = 2;else {
              Scores[x] = 0;
              return;
            }
          }
        }
      } else {
        b++;
        B1 = I[x + dirs[b]];

        if (B1 > Ip) {
          b++;
          B2 = I[x + dirs[b]];
          if (B2 > Ip) state = 3;else if (B2 < Im) state = 6;else {
            Scores[x] = 0;
            return;
          }
        } else if (B1 < Im) {
          b++;
          B2 = I[x + dirs[b]];
          if (B2 > Ip) state = 7;else if (B2 < Im) state = 2;else {
            Scores[x] = 0;
            return;
          }
        } else {
          Scores[x] = 0;
          return;
        }
      }
    } else {
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
  } else {
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
        }

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
        }

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
        }

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
        }

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
        break;
    }
  }

  Scores[x] = score + dirs_nb * I[x];
}
var lev_table_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function lev_table_t(w, h, r) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, lev_table_t);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dirs", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dirs_count", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "scores", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "radius", void 0);

  this.dirs = new Int32Array(1024);
  this.dirs_count = precompute_directions(w, this.dirs, r) | 0;
  this.scores = new Int32Array(w * h);
  this.radius = r | 0;
});

/***/ }),

/***/ "./src_ts/yape06/yape06_utils.ts":
/*!***************************************!*\
  !*** ./src_ts/yape06/yape06_utils.ts ***!
  \***************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTGlEO0FBQ2xDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQiw4REFBYztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCa0M7QUFDNkI7QUFDaEQ7QUFDZixlQUFlLHNEQUFPO0FBQ3RCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxxRUFBcUI7QUFDOUI7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUVBQWU7RUFDWnpxQixVQUFVLEVBQVZBLG1EQUFVQTtBQURFLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY2FjaGUvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvZGF0YV90eXBlL2RhdGFfdHlwZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2ltZ3Byb2MvY29udm9sLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvaW1ncHJvYy9yZXNhbXBsZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2pzZmVhdE5leHQudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9rZXlwb2ludF90L2tleXBvaW50X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9saW5hbGcvbGluYWxnLWJhc2UudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9tYXRtYXRoL21hdG1hdGgudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9tYXRyaXhfdC9tYXRyaXhfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbm9kZV91dGlscy9fcG9vbF9ub2RlX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9ub2RlX3V0aWxzL2RhdGFfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUveWFwZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUveWFwZV91dGlscy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUwNi95YXBlMDZfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcbiAgICBhbGxvY2F0ZTogKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGdldF9idWZmZXI6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IGFueTtcbiAgICBwdXRfYnVmZmVyOiAobm9kZTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgY2FjaGUgaW1wbGVtZW50cyBJQ2FjaGUge1xuICAgIHByaXZhdGUgX3Bvb2xfaGVhZDogYW55O1xuICAgIHByaXZhdGUgX3Bvb2xfdGFpbDogYW55O1xuICAgIHByaXZhdGUgX3Bvb2xfc2l6ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHk6IGFueSwgZGF0YV9zaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGU6IGFueSkge1xuICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgSlNGRUFUX0NPTlNUQU5UUyA9IHtcbiAgICAvLyBDT05TVEFOVFNcbiAgICBFUFNJTE9OOiAwLjAwMDAwMDExOTIwOTI4OTYsXG4gICAgRkxUX01JTjogMUUtMzcsXG4gICAgVThfdDogMHgwMTAwLFxuICAgIFMzMl90OiAweDAyMDAsXG4gICAgRjMyX3Q6IDB4MDQwMCxcbiAgICBTNjRfdDogMHgwODAwLFxuICAgIEY2NF90OiAweDEwMDAsXG4gICAgQzFfdDogMHgwMSxcbiAgICBDMl90OiAweDAyLFxuICAgIEMzX3Q6IDB4MDMsXG4gICAgQzRfdDogMHgwNCxcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBDT0xPUl9SR0JBMkdSQVk6IDAsXG4gICAgQ09MT1JfUkdCMkdSQVk6IDEsXG4gICAgQ09MT1JfQkdSQTJHUkFZOiAyLFxuICAgIENPTE9SX0JHUjJHUkFZOiAzLFxuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgQk9YX0JMVVJfTk9TQ0FMRTogMHgwMSxcblxuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgU1ZEX1VfVDogMHgwMSxcbiAgICBTVkRfVl9UOiAweDAyLFxuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgVThDMV90OiAweDAxMDAgfCAweDAxLFxuICAgIFU4QzNfdDogMHgwMTAwIHwgMHgwMyxcbiAgICBVOEM0X3Q6IDB4MDEwMCB8IDB4MDQsXG5cbiAgICBGMzJDMV90OiAweDA0MDAgfCAweDAxLFxuICAgIEYzMkMyX3Q6IDB4MDQwMCB8IDB4MDIsXG4gICAgUzMyQzFfdDogMHgwMjAwIHwgMHgwMSxcbiAgICBTMzJDMl90OiAweDAyMDAgfCAweDAyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YV9UeXBlIHtcbiAgICBfZ2V0X2RhdGFfdHlwZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xuICAgIF9nZXRfY2hhbm5lbDogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xuICAgIF9nZXRfZGF0YV90eXBlX3NpemU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIGRhdGFfdHlwZSBpbXBsZW1lbnRzIElEYXRhX1R5cGUge1xuICAgIHByaXZhdGUgX2RhdGFfdHlwZV9zaXplOiBJbnQzMkFycmF5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhX3R5cGVfc2l6ZSA9IG5ldyBJbnQzMkFycmF5KFstMSwgMSwgNCwgLTEsIDQsIC0xLCAtMSwgLTEsIDgsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCA4XSk7O1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYpO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFfdHlwZV9zaXplWyh0eXBlICYgMHhGRjAwKSA+PiA4XTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIF9jb252b2xfdTgoYnVmOiBudW1iZXJbXSwgc3JjX2Q6IG51bWJlcltdLCBkc3RfZDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWx0ZXI6IG51bWJlcltdLCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLCBzdW0xID0gMCwgc3VtMiA9IDAsIHN1bTMgPSAwLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZvbChidWY6IG51bWJlcltdLCBzcmNfZDogbnVtYmVyW10sIGRzdF9kOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbHRlcjogbnVtYmVyW10sIGtlcm5lbF9zaXplOiBudW1iZXIsIGhhbGZfa2VybmVsOiBudW1iZXIpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAuMCwgc3VtMSA9IDAuMCwgc3VtMiA9IDAuMCwgc3VtMyA9IDAuMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMC4wO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gc3VtO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL2ltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4uL2pzZmVhdE5leHQuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGVfdTggKHNyYzogeyBjaGFubmVsOiBhbnk7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIGRzdDogeyBkYXRhOiBhbnk7IH0sIGNhY2hlOiB7IGdldF9idWZmZXI6IChhcmcwOiBudW1iZXIpID0+IGFueTsgcHV0X2J1ZmZlcjogKGFyZzA6IGFueSkgPT4gdm9pZDsgfSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlIChzcmM6IHsgY2hhbm5lbDogYW55OyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBkc3Q6IHsgZGF0YTogYW55OyB9LCBjYWNoZTogeyBnZXRfYnVmZmVyOiAoYXJnMDogbnVtYmVyKSA9PiBhbnk7IHB1dF9idWZmZXI6IChhcmcwOiBhbnkpID0+IHZvaWQ7IH0sIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiLy9pbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QnXG5pbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBJQ2FjaGUsIGNhY2hlIH0gZnJvbSAnLi9jYWNoZS9jYWNoZSdcbmltcG9ydCB7IGltZ3Byb2MgfSBmcm9tICcuL2ltZ3Byb2MvaW1ncHJvYydcbmltcG9ydCB7IF9yZXNhbXBsZSwgX3Jlc2FtcGxlX3U4IH0gZnJvbSAnLi9pbWdwcm9jL3Jlc2FtcGxlJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vaW1ncHJvYy9jb252b2wnXG5pbXBvcnQgeyBsaW5hbGcgfSBmcm9tICcuL2xpbmFsZy9saW5hbGcnXG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gJy4vbGluYWxnL2xpbmFsZy1iYXNlJ1xuaW1wb3J0IHsgbWF0aCB9IGZyb20gJy4vbWF0aC9tYXRoJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGgnXG5pbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4vbWF0cml4X3QvbWF0cml4X3QnXG5pbXBvcnQgeyBweXJhbWlkX3QgfSBmcm9tICcuL3B5cmFtaWRfdC9weXJhbWlkX3QnXG5pbXBvcnQgeyBrZXlwb2ludF90IH0gZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QnXG5pbXBvcnQgeyB5YXBlIH0gZnJvbSAnLi95YXBlL3lhcGUnXG5pbXBvcnQgeyBjb21wdXRlX2xhcGxhY2lhbiwgaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUgfSBmcm9tICcuL3lhcGUwNi95YXBlMDZfdXRpbHMnXG5pbXBvcnQgeyB5YXBlMDYgfSBmcm9tICcuL3lhcGUwNi95YXBlMDYnXG5pbXBvcnQgeyByYW5zYWNfcGFyYW1zX3QgfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190J1xuaW1wb3J0IHsgbW90aW9uX2VzdGltYXRvciB9IGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fZXN0aW1hdG9yJ1xuaW1wb3J0IHsgb3B0aWNhbF9mbG93X2xrIH0gZnJvbSAnLi9vcHRpY2FsX2Zsb3dfbGsvb3B0aWNhbF9mbG93X2xrJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHByb3RlY3RlZCBjYWNoZTogSUNhY2hlO1xuICAgIHN0YXRpYyBjYWNoZTogdHlwZW9mIGNhY2hlO1xuICAgIHN0YXRpYyBpbWdwcm9jOiB0eXBlb2YgaW1ncHJvYztcbiAgICBzdGF0aWMgbGluYWxnOiB0eXBlb2YgbGluYWxnO1xuICAgIHN0YXRpYyBtYXRoOiB0eXBlb2YgbWF0aDtcbiAgICBzdGF0aWMgbWF0bWF0aDogdHlwZW9mIG1hdG1hdGg7XG4gICAgc3RhdGljIG1hdHJpeF90OiB0eXBlb2YgbWF0cml4X3Q7XG4gICAgc3RhdGljIHB5cmFtaWRfdDogdHlwZW9mIHB5cmFtaWRfdDtcbiAgICBzdGF0aWMga2V5cG9pbnRfdDogdHlwZW9mIGtleXBvaW50X3Q7XG4gICAgc3RhdGljIHlhcGU6IHR5cGVvZiB5YXBlO1xuICAgIHN0YXRpYyB5YXBlMDY6IHR5cGVvZiB5YXBlMDY7XG4gICAgc3RhdGljIHJhbnNhY19wYXJhbXNfdDogdHlwZW9mIHJhbnNhY19wYXJhbXNfdDtcbiAgICBzdGF0aWMgYWZmaW5lMmQ6IHR5cGVvZiBhZmZpbmUyZDtcbiAgICBzdGF0aWMgaG9tb2dyYXBoeTJkOiB0eXBlb2YgaG9tb2dyYXBoeTJkO1xuICAgIHN0YXRpYyBtb3Rpb25fZXN0aW1hdG9yOiB0eXBlb2YgbW90aW9uX2VzdGltYXRvcjtcbiAgICBzdGF0aWMgb3B0aWNhbF9mbG93X2xrOiB0eXBlb2Ygb3B0aWNhbF9mbG93X2xrXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG5cbiAgICAvLyBWRVJTSU9OXG4gICAgc3RhdGljIFZFUlNJT046IHN0cmluZyA9IHBrZy52ZXJzaW9uO1xuXG4gICAgLy8gQ09OU1RBTlRTXG4gICAgc3RhdGljIEVQU0lMT04gPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgc3RhdGljIEZMVF9NSU4gPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgc3RhdGljIFU4X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgc3RhdGljIFMzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5TMzJfdDtcbiAgICBzdGF0aWMgRjMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90O1xuICAgIHN0YXRpYyBTNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgQzFfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICBzdGF0aWMgQzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzJfdDtcbiAgICBzdGF0aWMgQzNfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzNfdDtcbiAgICBzdGF0aWMgQzRfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzRfdDtcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBzdGF0aWMgQ09MT1JfUkdCQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX1JHQjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuY2xhc3MgbW90aW9uX21vZGVsIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgVDA6IG1hdHJpeF90XG4gICAgVDE6IG1hdHJpeF90XG4gICAgQXRBOiBtYXRyaXhfdFxuICAgIEF0QjogbWF0cml4X3RcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5UMCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5UMSA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEEgPSBuZXcgbWF0cml4X3QoNiwgNiwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRCID0gbmV3IG1hdHJpeF90KDYsIDEsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBzcXIoeDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgVDA6IG51bWJlcltdLCBUMTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHM6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBqID0gMCwgayA9IDAsIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkeDEgPSAwLjAsIGR5MSA9IDAuMCwgZHgyID0gMC4wLCBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeDIgKiBkeTEgLSBkeTIgKiBkeDEpIDw9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIChNYXRoLmFicyhkeDEpICsgTWF0aC5hYnMoZHkxKSArIE1hdGguYWJzKGR4MikgKyBNYXRoLmFicyhkeTIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBydW4oZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgbW9kZWw6IHsgdHlwZT86IGFueTsgZGF0YTogYW55IH0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgcHggPSAwLjAsIHB5ID0gMC4wO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmNsYXNzIGhvbW9ncmFwaHkyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgbUx0TDogbWF0cml4X3RcbiAgICBFdmVjOiBtYXRyaXhfdFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIG1vZGVsOiB7IGRhdGE6IGFueSB9LCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgTHRMID0gdGhpcy5tTHRMLmRhdGEsIGV2ZCA9IHRoaXMuRXZlYy5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAuMCwgeSA9IDAuMCwgWCA9IDAuMCwgWSA9IDAuMDtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcganNmZWF0TmV4dC5saW5hbGcoKTtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcblxuICAgICAgICAvLyBub3JtXG4gICAgICAgIHZhciBzbXggPSAwLjAsIHNteSA9IDAuMCwgY214ID0gMC4wLCBjbXkgPSAwLjAsIHNNeCA9IDAuMCwgc015ID0gMC4wLCBjTXggPSAwLjAsIGNNeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNteCArPSB0b1tpXS54O1xuICAgICAgICAgICAgY215ICs9IHRvW2ldLnk7XG4gICAgICAgICAgICBjTXggKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY015ICs9IGZyb21baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNteCAvPSBjb3VudDsgY215IC89IGNvdW50O1xuICAgICAgICBjTXggLz0gY291bnQ7IGNNeSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc214ICs9IE1hdGguYWJzKHRvW2ldLnggLSBjbXgpO1xuICAgICAgICAgICAgc215ICs9IE1hdGguYWJzKHRvW2ldLnkgLSBjbXkpO1xuICAgICAgICAgICAgc014ICs9IE1hdGguYWJzKGZyb21baV0ueCAtIGNNeCk7XG4gICAgICAgICAgICBzTXkgKz0gTWF0aC5hYnMoZnJvbVtpXS55IC0gY015KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzbXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDsgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014OyBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7IHQwZFsxXSA9IDA7IHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7IHQwZFs0XSA9IHNNeTsgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDsgdDBkWzddID0gMDsgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7IHQxZFsxXSA9IDA7IHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDsgdDFkWzRdID0gMS4wIC8gc215OyB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7IHQxZFs3XSA9IDA7IHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKVxuICAgICAgICAgICAgICAgIEx0TFtpICogOSArIGpdID0gTHRMW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBfbGluYWxnLmVpZ2VuVlYodGhpcy5tTHRMLCB0aGlzLkV2ZWMpO1xuXG4gICAgICAgIG1kWzBdID0gZXZkWzcyXSwgbWRbMV0gPSBldmRbNzNdLCBtZFsyXSA9IGV2ZFs3NF07XG4gICAgICAgIG1kWzNdID0gZXZkWzc1XSwgbWRbNF0gPSBldmRbNzZdLCBtZFs1XSA9IGV2ZFs3N107XG4gICAgICAgIG1kWzZdID0gZXZkWzc4XSwgbWRbN10gPSBldmRbNzldLCBtZFs4XSA9IGV2ZFs4MF07XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIHNldCBib3R0b20gcmlnaHQgdG8gMS4wXG4gICAgICAgIHggPSAxLjAgLyBtZFs4XTtcbiAgICAgICAgbWRbMF0gKj0geDsgbWRbMV0gKj0geDsgbWRbMl0gKj0geDtcbiAgICAgICAgbWRbM10gKj0geDsgbWRbNF0gKj0geDsgbWRbNV0gKj0geDtcbiAgICAgICAgbWRbNl0gKj0geDsgbWRbN10gKj0geDsgbWRbOF0gPSAxLjA7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVycm9yKGZyb206IGFueVtdLCB0bzogYW55W10sIG1vZGVsOiB7IGRhdGE6IGFueSB9LCBlcnI6IG51bWJlcltdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCB3dyA9IDAuMCwgZHggPSAwLjAsIGR5ID0gMC4wO1xuICAgICAgICB2YXIgbSA9IG1vZGVsLmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHd3ID0gMS4wIC8gKG1bNl0gKiBwdDAueCArIG1bN10gKiBwdDAueSArIDEuMCk7XG4gICAgICAgICAgICBkeCA9IChtWzBdICogcHQwLnggKyBtWzFdICogcHQwLnkgKyBtWzJdKSAqIHd3IC0gcHQxLng7XG4gICAgICAgICAgICBkeSA9IChtWzNdICogcHQwLnggKyBtWzRdICogcHQwLnkgKyBtWzVdKSAqIHd3IC0gcHQxLnk7XG4gICAgICAgICAgICBlcnJbaV0gPSAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrX3N1YnNldChmcm9tOiBhbnlbXSwgdG86IGFueVtdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHNlZW1zIHRvIHJlamVjdCBnb29kIHN1YnNldHMgYWN0dWFsbHlcbiAgICAgICAgLy9pZiggaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKGZyb20sIGNvdW50KSB8fCBoYXZlX2NvbGxpbmVhcl9wb2ludHModG8sIGNvdW50KSApIHtcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgdmFyIGZwMCA9IGZyb21bMF0sIGZwMSA9IGZyb21bMV0sIGZwMiA9IGZyb21bMl0sIGZwMyA9IGZyb21bM107XG4gICAgICAgICAgICB2YXIgdHAwID0gdG9bMF0sIHRwMSA9IHRvWzFdLCB0cDIgPSB0b1syXSwgdHAzID0gdG9bM107XG5cbiAgICAgICAgICAgIC8vIHNldDFcbiAgICAgICAgICAgIHZhciBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnksIEExMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnksIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMzEgPSBmcDIueCwgQTMyID0gZnAyLnksIEEzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueSwgQjEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueSwgQjIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIzMSA9IHRwMi54LCBCMzIgPSB0cDIueSwgQjMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIHZhciBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQyXG4gICAgICAgICAgICBBMTEgPSBmcDEueCwgQTEyID0gZnAxLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMS54LCBCMTIgPSB0cDEueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDNcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0NFxuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICBpZiAobmVnYXRpdmUgIT0gMCAmJiBuZWdhdGl2ZSAhPSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBhbGwgZ29vZFxuICAgIH1cbn1cblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IGNsYXNzIHB5cmFtaWRfdCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBsZXZlbHM6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHByaXZhdGUgcHlyZG93bjogYW55O1xuICAgIGNvbnN0cnVjdG9yKGxldmVsczogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzIHwgMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGxldmVscyk7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBqc2ZlYXROZXh0LmltZ3Byb2MoKTtcbiAgICAgICAgdGhpcy5weXJkb3duID0gX2ltZ3Byb2MucHlyZG93bjtcbiAgICB9XG4gICAgYWxsb2NhdGUoc3RhcnRfdzogbnVtYmVyLCBzdGFydF9oOiBudW1iZXIsIGRhdGFfdHlwZTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkKGlucHV0OiBtYXRyaXhfdCwgc2tpcF9maXJzdF9sZXZlbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodHlwZW9mIHNraXBfZmlyc3RfbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgc2tpcF9maXJzdF9sZXZlbCA9IHRydWU7IH1cbiAgICAgICAgLy8ganVzdCBjb3B5IGRhdGEgdG8gZmlyc3QgbGV2ZWxcbiAgICAgICAgdmFyIGkgPSAyLCBhID0gaW5wdXQsIGI6IGFueSA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LmtleXBvaW50X3QgPSBrZXlwb2ludF90O1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBjbGFzcyBpbWdwcm9jIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfTtcbiAgICBncmF5c2NhbGUoc3JjOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogbnVtYmVyKSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgY29kZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgZGVmYXVsdCBpbWFnZSBkYXRhIHJlcHJlc2VudGF0aW9uIGluIGJyb3dzZXJcbiAgICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSBcInVuZGVmaW5lZFwiKSB7IGNvZGUgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBpID0gMCwgaiA9IDAsIGlyID0gMCwganIgPSAwO1xuICAgICAgICB2YXIgY29lZmZfciA9IDQ4OTksIGNvZWZmX2cgPSA5NjE3LCBjb2VmZl9iID0gMTg2OCwgY24gPSA0O1xuXG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY29lZmZfciA9IDE4Njg7XG4gICAgICAgICAgICBjb2VmZl9iID0gNDg5OTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY24gPSAzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbjIgPSBjbiA8PCAxLCBjbjMgPSAoY24gKiAzKSB8IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAxKTtcbiAgICAgICAgdmFyIGRzdF91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3ksIGogKz0gdywgaSArPSB3ICogY24pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDAsIGlyID0gaSwganIgPSBqOyB4IDw9IHcgLSA0OyB4ICs9IDQsIGlyICs9IGNuIDw8IDIsIGpyICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMV0gPSAoc3JjW2lyICsgY25dICogY29lZmZfciArIHNyY1tpciArIGNuICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24gKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAyXSA9IChzcmNbaXIgKyBjbjJdICogY29lZmZfciArIHNyY1tpciArIGNuMiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDNdID0gKHNyY1tpciArIGNuM10gKiBjb2VmZl9yICsgc3JjW2lyICsgY24zICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24zICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKytqciwgaXIgKz0gY24pIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVyaXZlZCBmcm9tIENDViBsaWJyYXJ5XG4gICAgcmVzYW1wbGUoc3JjOiBhbnksIGRzdDogYW55LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBoID0gc3JjLnJvd3MsIHcgPSBzcmMuY29scztcbiAgICAgICAgaWYgKGggPiBuaCAmJiB3ID4gbncpIHtcbiAgICAgICAgICAgIGRzdC5yZXNpemUobncsIG5oLCBzcmMuY2hhbm5lbCk7XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgZmFzdCBhbHRlcm5hdGl2ZSAoZml4IHBvaW50IHNjYWxlLCAweDEwMCB0byBhdm9pZCBvdmVyZmxvdylcbiAgICAgICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBkc3QudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBoICogdyAvIChuaCAqIG53KSA8IDB4MTAwKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlX3U4KHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGUoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYm94X2JsdXJfZ3JheShzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgY2hhbm5lbDogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgcmFkaXVzOiBudW1iZXIsIG9wdGlvbnM6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH1cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBoMiA9IGggPDwgMSwgdzIgPSB3IDw8IDE7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAsIHkgPSAwLCBlbmQgPSAwO1xuICAgICAgICB2YXIgd2luZG93U2l6ZSA9ICgocmFkaXVzIDw8IDEpICsgMSkgfCAwO1xuICAgICAgICB2YXIgcmFkaXVzUGx1c09uZSA9IChyYWRpdXMgKyAxKSB8IDAsIHJhZGl1c1BsdXMyID0gKHJhZGl1c1BsdXNPbmUgKyAxKSB8IDA7XG4gICAgICAgIHZhciBzY2FsZSA9IG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEUgPyAxIDogKDEuMCAvICh3aW5kb3dTaXplICogd2luZG93U2l6ZSkpO1xuXG4gICAgICAgIHZhciB0bXBfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLCBkc3RJbmRleCA9IDAsIHNyY0luZGV4ID0gMCwgbmV4dFBpeGVsSW5kZXggPSAwLCBwcmV2aW91c1BpeGVsSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGF0YV9pMzIgPSB0bXBfYnVmZi5pMzI7IC8vIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgdmFyIGRhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIGhvbGQgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIC8vIGZpcnN0IHBhc3NcbiAgICAgICAgLy8gbm8gbmVlZCB0byBzY2FsZSBcbiAgICAgICAgLy9kYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3kpIHtcbiAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX3U4W3NyY0luZGV4XTtcblxuICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IChzcmNJbmRleCArIHJhZGl1c1BsdXNPbmUpIHwgMDtcbiAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSBoMikge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleCArIGhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjSW5kZXggKz0gdztcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBzZWNvbmQgcGFzc1xuICAgICAgICBzcmNJbmRleCA9IDA7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7IC8vIHRoaXMgaXMgYSB0cmFuc3Bvc2VcbiAgICAgICAgZGF0YV91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIC8vIGRvbnQgc2NhbGUgcmVzdWx0XG4gICAgICAgIGlmIChzY2FsZSA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih0bXBfYnVmZik7XG4gICAgfVxuICAgIGdhdXNzaWFuX2JsdXIoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyB0eXBlOiBhbnk7IGNoYW5uZWw6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwga2VybmVsX3NpemU6IG51bWJlciwgc2lnbWE6IG51bWJlcikge1xuICAgICAgICB2YXIganNmZWF0bWF0aCA9IG5ldyBqc2ZlYXROZXh0Lm1hdGgoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWdtYSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaWdtYSA9IDAuMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGtlcm5lbF9zaXplID09PSBcInVuZGVmaW5lZFwiKSB7IGtlcm5lbF9zaXplID0gMDsgfVxuICAgICAgICBrZXJuZWxfc2l6ZSA9IGtlcm5lbF9zaXplID09IDAgPyAoTWF0aC5tYXgoMSwgKDQuMCAqIHNpZ21hICsgMS4wIC0gMWUtOCkpICogMiArIDEpIHwgMCA6IGtlcm5lbF9zaXplO1xuICAgICAgICB2YXIgaGFsZl9rZXJuZWwgPSBrZXJuZWxfc2l6ZSA+PiAxO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkYXRhX3R5cGUgPSBzcmMudHlwZSwgaXNfdTggPSBkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBidWYsIGZpbHRlciwgYnVmX3N6ID0gKGtlcm5lbF9zaXplICsgTWF0aC5tYXgoaCwgdykpIHwgMDtcblxuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoYnVmX3N6IDw8IDIpO1xuICAgICAgICB2YXIgZmlsdF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGtlcm5lbF9zaXplIDw8IDIpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpzZmVhdG1hdGguZ2V0X2dhdXNzaWFuX2tlcm5lbChrZXJuZWxfc2l6ZSwgc2lnbWEsIGZpbHRlciwgZGF0YV90eXBlKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIF9jb252b2xfdTgoYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihmaWx0X25vZGUpO1xuICAgIH1cbiAgICBob3VnaF90cmFuc2Zvcm0oaW1nOiBhbnksIHJob19yZXM6IG51bWJlciwgdGhldGFfcmVzOiBudW1iZXIsIHRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPjx1bmtub3duPihhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMikpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFnZSA0LiBzdG9yZSB0aGUgZmlyc3QgbWluKHRvdGFsLGxpbmVzTWF4KSBsaW5lcyB0byB0aGUgb3V0cHV0IGJ1ZmZlclxuICAgICAgICB2YXIgbGluZXNNYXggPSBNYXRoLm1pbihudW1hbmdsZSAqIG51bXJobywgX3NvcnRfYnVmLmxlbmd0aCk7XG4gICAgICAgIHZhciBzY2FsZSA9IDEuMCAvIChudW1yaG8gKyAyKTtcbiAgICAgICAgdmFyIGxpbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNNYXg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9zb3J0X2J1ZltpXTtcbiAgICAgICAgICAgIHZhciBuID0gTWF0aC5mbG9vcihpZHggKiBzY2FsZSkgLSAxO1xuICAgICAgICAgICAgdmFyIHIgPSBpZHggLSAobiArIDEpICogKG51bXJobyArIDIpIC0gMTtcbiAgICAgICAgICAgIHZhciBscmhvID0gKHIgLSAobnVtcmhvIC0gMSkgKiAwLjUpICogcmhvX3JlcztcbiAgICAgICAgICAgIHZhciBsYW5nbGUgPSBuICogdGhldGFfcmVzO1xuICAgICAgICAgICAgbGluZXMucHVzaChbbHJobywgbGFuZ2xlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBweXJkb3duKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgY2hhbm5lbDogYW55OyBkYXRhOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IG51bWJlciwgYXJnMTogbnVtYmVyLCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9LCBzeDogbnVtYmVyLCBzeTogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciBiYmZcbiAgICAgICAgaWYgKHR5cGVvZiBzeCA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzeSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeSA9IDA7IH1cblxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciB3MiA9IHcgPj4gMSwgaDIgPSBoID4+IDE7XG4gICAgICAgIHZhciBfdzIgPSB3MiAtIChzeCA8PCAxKSwgX2gyID0gaDIgLSAoc3kgPDwgMSk7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHNwdHIgPSBzeCArIHN5ICogdywgc2xpbmUgPSAwLCBkcHRyID0gMCwgZGxpbmUgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodzIsIGgyLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IF9oMjsgKyt5KSB7XG4gICAgICAgICAgICBzbGluZSA9IHNwdHI7XG4gICAgICAgICAgICBkbGluZSA9IGRwdHI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IF93MiAtIDI7IHggKz0gMiwgZGxpbmUgKz0gMiwgc2xpbmUgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZSArIDFdID0gKHNyY19kW3NsaW5lICsgMl0gKyBzcmNfZFtzbGluZSArIDNdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3ICsgMl0gKyBzcmNfZFtzbGluZSArIHcgKyAzXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IF93MjsgKyt4LCArK2RsaW5lLCBzbGluZSArPSAyKSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3B0ciArPSB3IDw8IDE7XG4gICAgICAgICAgICBkcHRyICs9IHcyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRzdDogW2d4LGd5LC4uLl1cbiAgICBzY2hhcnJfZGVyaXZhdGl2ZXMoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IHR5cGU6IG51bWJlciB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IG51bWJlcikgPT4gdm9pZDsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZHN0ZXAgPSB3IDw8IDEsIHggPSAwLCB5ID0gMCwgeDEgPSAwLCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgICAgICB2YXIgc3JvdzAgPSAwLCBzcm93MSA9IDAsIHNyb3cyID0gMCwgZHJvdyA9IDA7XG4gICAgICAgIHZhciB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICB2YXIgYnVmMF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG4gICAgICAgIHZhciBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeF0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeCArIDFdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07IHRyb3cwW3hdID0gdHJvdzBbd107XG4gICAgICAgICAgICB0cm93MVswXSA9IHRyb3cxWzFdOyB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgYSA9IHRyb3cxW3ggKyAyXSwgYiA9IHRyb3cxW3ggKyAxXSwgYyA9IHRyb3cxW3ggKyAzXSwgZCA9IHRyb3cxW3ggKyA0XSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IHRyb3cwW3ggKyAyXSwgZiA9IHRyb3cwW3ggKyAzXTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKGEgKyB0cm93MVt4XSkgKiAzICsgYiAqIDEwKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChjICsgYikgKiAzICsgYSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDRdIC0gZSkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKGQgKyBhKSAqIDMgKyBjICogMTApKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA1XSAtIGYpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgNV0gKyBjKSAqIDMgKyBkICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdKSAqIDMgKyB0cm93MVt4ICsgMV0gKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gY29tcHV0ZSBncmFkaWVudCB1c2luZyBTb2JlbCBrZXJuZWwgWzEgMiAxXSAqIFstMSAwIDFdXlRcbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc29iZWxfZGVyaXZhdGl2ZXMoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IHR5cGU6IG51bWJlciB9LCBkc3Q6IG1hdHJpeF90KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHggKyAxXSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGEgKyB0cm93MVt4XSArIGIgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGMgKyBiICsgYSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA0XSAtIGUpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChkICsgYSArIGMgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDVdIC0gZik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyA1XSArIGMgKyBkICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdICsgdHJvdzFbeCArIDFdICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cbiAgICAvLyBwbGVhc2Ugbm90ZTogXG4gICAgLy8gZHN0Xyh0eXBlKSBzaXplIHNob3VsZCBiZSBjb2xzID0gc3JjLmNvbHMrMSwgcm93cyA9IHNyYy5yb3dzKzFcbiAgICBjb21wdXRlX2ludGVncmFsX2ltYWdlKHNyYzogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIGRzdF9zdW06IG51bWJlcltdLCBkc3Rfc3FzdW06IG51bWJlcltdLCBkc3RfdGlsdGVkOiBhbnlbXSkge1xuICAgICAgICB2YXIgdzAgPSBzcmMuY29scyB8IDAsIGgwID0gc3JjLnJvd3MgfCAwLCBzcmNfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgdzEgPSAodzAgKyAxKSB8IDA7XG4gICAgICAgIHZhciBzID0gMCwgczIgPSAwLCBwID0gMCwgcHVwID0gMCwgaSA9IDAsIGogPSAwLCB2ID0gMCwgayA9IDA7XG5cbiAgICAgICAgaWYgKGRzdF9zdW0gJiYgZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMCwgZHN0X3Nxc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuXG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3N1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3Nxc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcCArIDFdID0gZHN0X3Nxc3VtW3B1cCArIDFdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRzdF90aWx0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWFnb25hbFxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcCArIDFdID0gc3JjX2RbayArIDFdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgdzApIHwgMCwgcHVwID0gdzA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaDA7ICsraSwgcCArPSB3MSwgcHVwICs9IHcxKSB7XG4gICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSArPSBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IHcwIC0gMTsgaiA+IDA7IC0taikge1xuICAgICAgICAgICAgICAgIHAgPSBqICsgaDAgKiB3MSwgcHVwID0gcCAtIHcxO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGgwOyBpID4gMDsgLS1pLCBwIC09IHcxLCBwdXAgLT0gdzEpIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSArPSBkc3RfdGlsdGVkW3B1cF0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlcXVhbGl6ZV9oaXN0b2dyYW0oc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IGNoYW5uZWw6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmNfZCA9IHNyYy5kYXRhO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBkc3RfZCA9IGRzdC5kYXRhLCBzaXplID0gdyAqIGg7XG4gICAgICAgIHZhciBpID0gMCwgcHJldiA9IDAsIGhpc3QwLCBub3JtO1xuXG4gICAgICAgIHZhciBoaXN0MF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKDI1NiA8PCAyKTtcbiAgICAgICAgaGlzdDAgPSBoaXN0MF9ub2RlLmkzMjtcbiAgICAgICAgZm9yICg7IGkgPCAyNTY7ICsraSkgaGlzdDBbaV0gPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICArK2hpc3QwW3NyY19kW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXYgPSBoaXN0MFswXTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgICAgICBwcmV2ID0gaGlzdDBbaV0gKz0gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vcm0gPSAyNTUgLyBzaXplO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBkc3RfZFtpXSA9IChoaXN0MFtzcmNfZFtpXV0gKiBub3JtICsgMC41KSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGhpc3QwX25vZGUpO1xuICAgIH1cbiAgICBjYW5ueShzcmM6IGFueSwgZHN0OiBhbnksIGxvd190aHJlc2g6IG51bWJlciwgaGlnaF90aHJlc2g6IG51bWJlcikge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgajogbnVtYmVyID0gMCwgZ3JhZCA9IDAsIHcyID0gdyA8PCAxLCBfZ3JhZCA9IDAsIHN1cHByZXNzID0gMCwgZiA9IDAsIHggPSAwLCB5ID0gMCwgcyA9IDA7XG4gICAgICAgIHZhciB0ZzIyeCA9IDAsIHRnNjd4ID0gMDtcblxuICAgICAgICAvLyBjYWNoZSBidWZmZXJzXG4gICAgICAgIHZhciBkeGR5X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3MikgPDwgMik7XG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMyAqICh3ICsgMikpIDw8IDIpO1xuICAgICAgICB2YXIgbWFwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKChoICsgMikgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIHN0YWNrX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3KSA8PCAyKTtcblxuXG4gICAgICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgIHZhciBtYXA6IG51bWJlcltdID0gPG51bWJlcltdPm1hcF9ub2RlLmkzMjtcbiAgICAgICAgdmFyIHN0YWNrID0gc3RhY2tfbm9kZS5pMzI7XG4gICAgICAgIHZhciBkeGR5ID0gZHhkeV9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHlfbSA9IG5ldyBtYXRyaXhfdCh3LCBoLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGR4ZHlfbm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHJvdzAgPSAxLCByb3cxID0gKHcgKyAyICsgMSkgfCAwLCByb3cyID0gKDIgKiAodyArIDIpICsgMSkgfCAwLCBtYXBfdyA9ICh3ICsgMikgfCAwLCBtYXBfaTogbnVtYmVyID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKE51bWJlcihtYXBbbWFwX2kgKyBqXSA9PSAyKSAqIDB4ZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJlZSBidWZmZXJzXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkeGR5X25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobWFwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoc3RhY2tfbm9kZSk7XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgbWF0cml4X3RcbiAgICB3YXJwX3BlcnNwZWN0aXZlKHNyYzogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIGRzdDogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIHRyYW5zZm9ybTogeyBkYXRhOiBhbnkgfSwgZmlsbF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MgfCAwLCBkc3Rfd2lkdGggPSBkc3QuY29scyB8IDAsIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIHhzMCA9IDAuMCwgeXMwID0gMC4wLCB3cyA9IDAuMCwgc2MgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XSxcbiAgICAgICAgICAgIG0yMCA9IHRkWzZdLCBtMjEgPSB0ZFs3XSwgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzMCA9IG0wMSAqIHkgKyBtMDIsXG4gICAgICAgICAgICAgICAgeXMwID0gbTExICogeSArIG0xMixcbiAgICAgICAgICAgICAgICB3cyA9IG0yMSAqIHkgKyBtMjI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMwICs9IG0wMCwgeXMwICs9IG0xMCwgd3MgKz0gbTIwKSB7XG4gICAgICAgICAgICAgICAgc2MgPSAxLjAgLyB3cztcbiAgICAgICAgICAgICAgICB4cyA9IHhzMCAqIHNjLCB5cyA9IHlzMCAqIHNjO1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMCwgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhzID4gMCAmJiB5cyA+IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgZHN0OiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgdHJhbnNmb3JtOiB7IGRhdGE6IGFueSB9LCBmaWxsX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scywgc3JjX2hlaWdodCA9IHNyYy5yb3dzLCBkc3Rfd2lkdGggPSBkc3QuY29scywgZHN0X2hlaWdodCA9IGRzdC5yb3dzO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzID0gbTAxICogeSArIG0wMjtcbiAgICAgICAgICAgIHlzID0gbTExICogeSArIG0xMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4cyArPSBtMDAsIHlzICs9IG0xMCkge1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMDsgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl4cyA+PSAwICYmIGl5cyA+PSAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB4cyAtIGl4cztcbiAgICAgICAgICAgICAgICAgICAgYiA9IHlzIC0gaXlzO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSBzcmNfd2lkdGggKiBpeXMgKyBpeHM7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEJhc2ljIFJHQiBTa2luIGRldGVjdGlvbiBmaWx0ZXJcbiAgICAvLyBmcm9tIGh0dHA6Ly9wb3BzY2FuLmJsb2dzcG90LmZyLzIwMTIvMDgvc2tpbi1kZXRlY3Rpb24taW4tZGlnaXRhbC1pbWFnZXMuaHRtbFxuICAgIHNraW5kZXRlY3RvcihzcmM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IGRhdGE6IGFueVtdIH0sIGRzdDogbnVtYmVyW10pIHtcbiAgICAgICAgdmFyIHIsIGcsIGIsIGo7XG4gICAgICAgIHZhciBpID0gc3JjLndpZHRoICogc3JjLmhlaWdodDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaiA9IGkgKiA0O1xuICAgICAgICAgICAgciA9IHNyYy5kYXRhW2pdO1xuICAgICAgICAgICAgZyA9IHNyYy5kYXRhW2ogKyAxXTtcbiAgICAgICAgICAgIGIgPSBzcmMuZGF0YVtqICsgMl07XG4gICAgICAgICAgICBpZiAoKHIgPiA5NSkgJiYgKGcgPiA0MCkgJiYgKGIgPiAyMClcbiAgICAgICAgICAgICAgICAmJiAociA+IGcpICYmIChyID4gYilcbiAgICAgICAgICAgICAgICAmJiAociAtIE1hdGgubWluKGcsIGIpID4gMTUpXG4gICAgICAgICAgICAgICAgJiYgKE1hdGguYWJzKHIgLSBnKSA+IDE1KSkge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDI1NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuanNmZWF0TmV4dC5tYXRoID0gY2xhc3MgbWF0aCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHByaXZhdGUgcXNvcnRfc3RhY2s6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXNvcnRfc3RhY2sgPSBuZXcgSW50MzJBcnJheSg0OCAqIDIpO1xuICAgIH1cblxuICAgIGdldF9nYXVzc2lhbl9rZXJuZWwoc2l6ZTogbnVtYmVyLCBzaWdtYTogbnVtYmVyLCBrZXJuZWw6IGFueSwgZGF0YV90eXBlOiBhbnkpIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsOiBhbnksIHNyY194MDogbnVtYmVyLCBzcmNfeTA6bnVtYmVyLCBkc3RfeDA6IG51bWJlciwgZHN0X3kwOiBudW1iZXIsXG4gICAgICAgIHNyY194MTogbnVtYmVyLCBzcmNfeTE6IG51bWJlciwgZHN0X3gxOiBudW1iZXIsIGRzdF95MTogbnVtYmVyLFxuICAgICAgICBzcmNfeDI6IG51bWJlciwgc3JjX3kyOiBudW1iZXIsIGRzdF94MjogbnVtYmVyLCBkc3RfeTI6IG51bWJlcixcbiAgICAgICAgc3JjX3gzOiBudW1iZXIsIHNyY195MzogbnVtYmVyLCBkc3RfeDM6IG51bWJlciwgZHN0X3kzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyLCBjbXA6IGFueSkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBjbGFzcyBsaW5hbGcgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbWF0bWF0aDogbWF0bWF0aDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICB9XG5cbiAgICBKYWNvYmlJbXBsKEE6IG51bWJlcltdLCBhc3RlcDogbnVtYmVyLCBXOiBudW1iZXJbXSwgVjogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG46IG51bWJlcikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgbSA9IDAsIGwgPSAwLCBpZHggPSAwLCBfaW4gPSAwLCBfaW4yID0gMDtcbiAgICAgICAgdmFyIGl0ZXJzID0gMCwgbWF4X2l0ZXIgPSBuICogbiAqIDMwO1xuICAgICAgICB2YXIgbXYgPSAwLjAsIHZhbCA9IDAuMCwgcCA9IDAuMCwgeSA9IDAuMCwgdCA9IDAuMCwgcyA9IDAuMCwgYyA9IDAuMCwgYTAgPSAwLjAsIGIwID0gMC4wO1xuXG4gICAgICAgIHZhciBpbmRSX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcblxuICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSAqIHZzdGVwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkgKiBrXTtcbiAgICAgICAgICAgIGlmIChrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSBrICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogayArIG1dKSwgaSA9IGsgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kQ1trXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobiA+IDEpIGZvciAoOyBpdGVycyA8IG1heF9pdGVyOyBpdGVycysrKSB7XG4gICAgICAgICAgICAvLyBmaW5kIGluZGV4IChrLGwpIG9mIHBpdm90IHBcbiAgICAgICAgICAgIGZvciAoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGluZENbaV0sIGwgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID0gQVthc3RlcCAqIGsgKyBsXTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG5cbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pICogMC41O1xuICAgICAgICAgICAgdCA9IE1hdGguYWJzKHkpICsgaHlwb3QocCwgeSk7XG4gICAgICAgICAgICBzID0gaHlwb3QocCwgdCk7XG4gICAgICAgICAgICBjID0gdCAvIHM7XG4gICAgICAgICAgICBzID0gcCAvIHM7IHQgPSAocCAvIHQpICogcDtcbiAgICAgICAgICAgIGlmICh5IDwgMClcbiAgICAgICAgICAgICAgICBzID0gLXMsIHQgPSAtdDtcbiAgICAgICAgICAgIEFbYXN0ZXAgKiBrICsgbF0gPSAwO1xuXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGlkeCA9IGogPT0gMCA/IGsgOiBsO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSBpZHggKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBtXSksIGkgPSBpZHggKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29ydCBlaWdlbnZhbHVlcyAmIGVpZ2VudmVjdG9yc1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgbSA9IGs7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCAqIG0gKyBpLCB2c3RlcCAqIGsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRSX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kQ19idWZmKTtcbiAgICB9XG5cbiAgICBKYWNvYmlTVkRJbXBsKEF0OiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgX1c6IGFueVtdLCBWdDogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG06IG51bWJlciwgbjogbnVtYmVyLCBuMTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBpdGVyID0gMCwgbWF4X2l0ZXIgPSBNYXRoLm1heChtLCAzMCk7XG4gICAgICAgIHZhciBBaSA9IDAsIEFqID0gMCwgVmkgPSAwLCBWaiA9IDAsIGNoYW5nZWQgPSAwO1xuICAgICAgICB2YXIgYyA9IDAuMCwgcyA9IDAuMCwgdCA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMC4wLCB0MSA9IDAuMCwgc2QgPSAwLjAsIGJldGEgPSAwLjAsIGdhbW1hID0gMC4wLCBkZWx0YSA9IDAuMCwgYSA9IDAuMCwgcCA9IDAuMCwgYiA9IDAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWwgPSAwLjAsIHZhbDAgPSAwLjAsIGFzdW0gPSAwLjA7XG5cbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcblxuICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSAqIGFzdGVwKSB8IDAsIEFqID0gKGogKiBhc3RlcCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBhID0gV1tpXSwgcCA9IDAsIGIgPSBXW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIDFdICogQXRbQWogKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyBrXSAqIEF0W0FqICsga107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcyAqIE1hdGguc3FydChhICogYikpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAoZ2FtbWEgLSBiZXRhKSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEgLyBnYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAgLyAoZ2FtbWEgKiBzICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpIC8gKGdhbW1hICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAgLyAoZ2FtbWEgKiBjICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gMC4wLCBiID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWldICsgcyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpXSArIGMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyAxXSArIHMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyAxXSArIGMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSArIDFdID0gdDA7IEF0W0FqICsgMV0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsga10gKyBzICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIGtdICsgYyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBBdFtBaSArIGtdID0gdDA7IEF0W0FqICsga10gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXW2ldID0gYTsgV1tqXSA9IGI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWaSA9IChpICogdnN0ZXApIHwgMCwgVmogPSAoaiAqIHZzdGVwKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmldICsgcyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaV0gKyBjICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmldID0gdDA7IFZ0W1ZqXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIDFdICsgcyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyAxXSArIGMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyAxXSA9IHQwOyBWdFtWaiArIDFdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyBrXSArIHMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIGtdICsgYyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyBrXSA9IHQwOyBWdFtWaiArIGtdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpICogYXN0ZXAgKyBrLCBqICogYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkgKiB2c3RlcCArIGssIGogKiB2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFWdCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7IGkrKykge1xuXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChzZCA8PSBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBnb3QgYSB6ZXJvIHNpbmd1bGFyIHZhbHVlLCB0aGVuIGluIG9yZGVyIHRvIGdldCB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHNpbmd1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIC8vIHdlIGdlbmVyYXRlIGEgcmFuZG9tIHZlY3RvciwgcHJvamVjdCBpdCB0byB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMsXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgdGhlIHByb2plY3Rpb24gYW5kIG5vcm1hbGl6ZSB0aGUgZGlmZmVyZW5jZS5cbiAgICAgICAgICAgICAgICB2YWwwID0gKDEuMCAvIG0pO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlZCA9IChzZWVkICogMjE0MDEzICsgMjUzMTAxMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICgoKHNlZWQgPj4gMTYpICYgMHg3ZmZmKSAmIDI1NikgIT0gMCA/IHZhbDAgOiAtdmFsMDtcbiAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCAyOyBpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kgKiBhc3RlcCArIGtdICogQXRbaiAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoQXRbaSAqIGFzdGVwICsga10gLSBzZCAqIEF0W2ogKiBhc3RlcCArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wIC8gYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IE1hdGguc3FydChzZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMgPSAoMS4wIC8gc2QpO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBOiB7IGNvbHM6IGFueTsgZGF0YTogYW55IH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHAgPSAxLCBhc3RlcCA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHQsIGFscGhhLCBkLCBzO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtqICogYXN0ZXAgKyBpXSkgPiBNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEZBSUxFRFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayAhPSBpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChhZCwgaSAqIGFzdGVwICsgaiwgayAqIGFzdGVwICsgaiwgdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dhcChiZCwgaSwgaywgdCk7XG4gICAgICAgICAgICAgICAgcCA9IC1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkID0gLTEuMCAvIGFkW2kgKiBhc3RlcCArIGldO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFkW2ogKiBhc3RlcCArIGldICogZDtcblxuICAgICAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhZFtqICogYXN0ZXAgKyBrXSArPSBhbHBoYSAqIGFkW2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJkW2pdICs9IGFscGhhICogYmRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkW2kgKiBhc3RlcCArIGldID0gLWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBhc3RlcCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBzID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzIC09IGFkW2kgKiBhc3RlcCArIGtdICogYmRba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHMgKiBhZFtpICogYXN0ZXAgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxOyAvLyBPS1xuICAgIH1cblxuICAgIGNob2xlc2t5X3NvbHZlKEE6IHsgY29sczogYW55OyBkYXRhOiBhbnkgfSwgQjogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQTogYW55LCBXOiBtYXRyaXhfdCwgVTogbWF0cml4X3QsIFY6IG1hdHJpeF90LCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9O1xuICAgICAgICB2YXIgYXQgPSAwLCBpID0gMCwgaiA9IDAsIF9tID0gQS5yb3dzLCBfbiA9IEEuY29scywgbSA9IF9tLCBuID0gX247XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDsgLy8gd2Ugb25seSB3b3JrIHdpdGggc2luZ2xlIGNoYW5uZWwgXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyIH0sIFg6IHsgZGF0YTogbnVtYmVyW10gfSwgQjogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpOiB7IGRhdGE6IGFueSB9LCBBOiB7IHJvd3M6IGFueTsgY29sczogYW55OyB0eXBlOiBudW1iZXIgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwLCBwYSA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIC8vdmFyIHVfYnVmZiA9IGNhY2hlMS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlkID0gQWkuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwLCBwdSA9IDA7IGogPCBucm93czsgaisrLCBwYSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wOyBrIDwgbmNvbHM7IGsrKywgcHUrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Rba10gPiB0b2wpIHN1bSArPSB2ZFtwdiArIGtdICogdWRbcHVdIC8gd2Rba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkW3BhXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgZWlnZW5WVihBOiB7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyOyBkYXRhOiBhbnlbXSB9LCB2ZWN0czogeyBkYXRhOiBudW1iZXJbXSB9LCB2YWxzOiB7IGRhdGE6IHsgW3g6IHN0cmluZ106IGFueSB9IH0pIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC55YXBlID0geWFwZTtcblxuanNmZWF0TmV4dC55YXBlMDYgPSBjbGFzcyB5YXBlMDYgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbGFwbGFjaWFuX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHB1YmxpYyBtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFwbGFjaWFuX3RocmVzaG9sZCA9IDMwO1xuICAgICAgICB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQgPSAyNTtcbiAgICB9XG4gICAgZGV0ZWN0KHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55IH0sIHBvaW50czogYW55W10sIGJvcmRlcjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubW90aW9uX2VzdGltYXRvciA9IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3IgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXRfc3Vic2V0KGtlcm5lbDogeyBjaGVja19zdWJzZXQ6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogbnVtYmVyKSA9PiBhbnkgfSwgZnJvbTogYW55W10sIHRvOiBhbnlbXSwgbmVlZF9jbnQ6IG51bWJlciwgbWF4X2NudDogbnVtYmVyLCBmcm9tX3N1YjogYW55W10sIHRvX3N1YjogYW55W10pIHtcbiAgICAgICAgdmFyIG1heF90cnkgPSAxMDAwO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBzc2l0ZXIgPSAwLCBpZHhfaSA9IDAsIG9rID0gZmFsc2U7XG4gICAgICAgIGZvciAoOyBzc2l0ZXIgPCBtYXhfdHJ5OyArK3NzaXRlcikge1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnk7KSB7XG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZHhfaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFvaykge1xuICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeF9pID0gaW5kaWNlc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heF9jbnQpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeF9pID09IGluZGljZXNbal0pIHsgb2sgPSBmYWxzZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tX3N1YltpXSA9IGZyb21baWR4X2ldO1xuICAgICAgICAgICAgICAgIHRvX3N1YltpXSA9IHRvW2lkeF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWtlcm5lbC5jaGVja19zdWJzZXQoZnJvbV9zdWIsIHRvX3N1YiwgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzaXRlcisrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGkgPT0gbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeSk7XG4gICAgfVxuXG4gICAgZmluZF9pbmxpZXJzKGtlcm5lbDogeyBlcnJvcjogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnksIGFyZzM6IGFueSwgYXJnNDogYW55KSA9PiB2b2lkIH0sIG1vZGVsOiBtYXRyaXhfdCwgZnJvbTogYW55LCB0bzogYW55LCBjb3VudDogbnVtYmVyLCB0aHJlc2g6IG51bWJlciwgZXJyOiBudW1iZXJbXSwgbWFzazogbnVtYmVyW10pIHtcbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwLCBpID0gMCwgZiA9IDA7XG4gICAgICAgIHZhciB0ID0gdGhyZXNoICogdGhyZXNoO1xuXG4gICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZiA9IDxudW1iZXI+PHVua25vd24+KGVycltpXSA8PSB0KTtcbiAgICAgICAgICAgIG1hc2tbaV0gPSBmO1xuICAgICAgICAgICAgbnVtaW5saWVycyArPSBmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1pbmxpZXJzO1xuICAgIH1cblxuICAgIHJhbnNhYyhwYXJhbXM6IHsgc2l6ZTogbnVtYmVyOyB0aHJlc2g6IG51bWJlcjsgdXBkYXRlX2l0ZXJzOiAoYXJnMDogbnVtYmVyLCBhcmcxOiBhbnkpID0+IGFueSB9LCBrZXJuZWw6IGFueSwgZnJvbTogYW55W10sIHRvOiBhbnlbXSwgY291bnQ6IG51bWJlciwgbW9kZWw6IHsgY29sczogYW55OyByb3dzOiBhbnk7IHR5cGU6IG51bWJlciB9LCBtYXNrOiB7IGRhdGE6IHsgW3g6IHN0cmluZ106IG51bWJlciB9IH0sIG1heF9pdGVyczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgc3Vic2V0MDogYW55ID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4QzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaW5saWVyc19tYXggPSAtMSwgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIE0sIGZyb20sIHRvLCBjb3VudCwgcGFyYW1zLnRocmVzaCwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChudW1pbmxpZXJzID4gTWF0aC5tYXgoaW5saWVyc19tYXgsIG1vZGVsX3BvaW50cyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpbmxpZXJzX21heCA9IG51bWlubGllcnM7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuICAgICAgICAgICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMoKGNvdW50IC0gbnVtaW5saWVycykgLyBjb3VudCwgbml0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxtZWRzKHBhcmFtczogeyBzaXplOiBudW1iZXI7IGVwczogbnVtYmVyOyB1cGRhdGVfaXRlcnM6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gYW55IH0sIGtlcm5lbDogYW55LCBmcm9tOiBhbnlbXSwgdG86IGFueVtdLCBjb3VudDogbnVtYmVyLCBtb2RlbDogbWF0cml4X3QsIG1hc2s6IHsgZGF0YTogeyBbeDogc3RyaW5nXTogbnVtYmVyIH0gfSwgbWF4X2l0ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG5cbiAgICAgICAgdmFyIHN1YnNldDA6IGFueSA9IFtdO1xuICAgICAgICB2YXIgc3Vic2V0MTogYW55ID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuYWZmaW5lMmQgPSBhZmZpbmUyZDtcblxuanNmZWF0TmV4dC5ob21vZ3JhcGh5MmQgPSBob21vZ3JhcGh5MmQ7XG5cbmpzZmVhdE5leHQub3B0aWNhbF9mbG93X2xrID0gY2xhc3Mgb3B0aWNhbF9mbG93X2xrIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgc2NoYXJyX2Rlcml2OiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBqc2ZlYXROZXh0LmltZ3Byb2MoKVxuICAgICAgICB0aGlzLnNjaGFycl9kZXJpdiA9IF9pbWdwcm9jLnNjaGFycl9kZXJpdmF0aXZlcztcbiAgICB9XG4gICAgdHJhY2socHJldl9weXI6IHsgZGF0YTogYW55OyBsZXZlbHM6IG51bWJlciB9LCBjdXJyX3B5cjogeyBkYXRhOiBhbnkgfSwgcHJldl94eTogbnVtYmVyW10sIGN1cnJfeHk6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCB3aW5fc2l6ZTogbnVtYmVyLCBtYXhfaXRlcjogbnVtYmVyLCBzdGF0dXM6IFVpbnQ4QXJyYXksIGVwczogbnVtYmVyLCBtaW5fZWlnZW5fdGhyZXNob2xkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlciA9IDMwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7IHN0YXR1cyA9IG5ldyBVaW50OEFycmF5KGNvdW50KTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjAxOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbWluX2VpZ2VuX3RocmVzaG9sZCA9PT0gXCJ1bmRlZmluZWRcIikgeyBtaW5fZWlnZW5fdGhyZXNob2xkID0gMC4wMDAxOyB9XG5cbiAgICAgICAgdmFyIGhhbGZfd2luID0gKHdpbl9zaXplIC0gMSkgKiAwLjU7XG4gICAgICAgIHZhciB3aW5fYXJlYSA9ICh3aW5fc2l6ZSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgIHZhciB3aW5fYXJlYTIgPSB3aW5fYXJlYSA8PCAxO1xuICAgICAgICB2YXIgcHJldl9pbWdzID0gcHJldl9weXIuZGF0YSwgbmV4dF9pbWdzID0gY3Vycl9weXIuZGF0YTtcbiAgICAgICAgdmFyIGltZ19wcmV2ID0gcHJldl9pbWdzWzBdLmRhdGEsIGltZ19uZXh0ID0gbmV4dF9pbWdzWzBdLmRhdGE7XG4gICAgICAgIHZhciB3MCA9IHByZXZfaW1nc1swXS5jb2xzLCBoMCA9IHByZXZfaW1nc1swXS5yb3dzLCBsdyA9IDAsIGxoID0gMDtcblxuICAgICAgICB2YXIgaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhIDw8IDIpO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhMiA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2xldl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoMCAqICh3MCA8PCAxKSkgPDwgMik7XG5cbiAgICAgICAgdmFyIGRlcml2X20gPSBuZXcgbWF0cml4X3QodzAsIGgwLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGRlcml2X2xldl9ub2RlLmRhdGEpO1xuXG4gICAgICAgIHZhciBpd2luX2J1ZiA9IGl3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9pd2luID0gZGVyaXZfaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGRlcml2X2xldiA9IGRlcml2X2xldl9ub2RlLmkzMjtcblxuICAgICAgICB2YXIgZHN0ZXAgPSAwLCBzcmMgPSAwLCBkc3JjID0gMCwgaXB0ciA9IDAsIGRpcHRyID0gMCwganB0ciA9IDA7XG4gICAgICAgIHZhciBsZXZfc2MgPSAwLjAsIHByZXZfeCA9IDAuMCwgcHJldl95ID0gMC4wLCBuZXh0X3ggPSAwLjAsIG5leHRfeSA9IDAuMDtcbiAgICAgICAgdmFyIHByZXZfZGVsdGFfeCA9IDAuMCwgcHJldl9kZWx0YV95ID0gMC4wLCBkZWx0YV94ID0gMC4wLCBkZWx0YV95ID0gMC4wO1xuICAgICAgICB2YXIgaXByZXZfeCA9IDAsIGlwcmV2X3kgPSAwLCBpbmV4dF94ID0gMCwgaW5leHRfeSA9IDA7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHggPSAwLCB5ID0gMCwgbGV2ZWwgPSAwLCBwdGlkID0gMCwgaXRlciA9IDA7XG4gICAgICAgIHZhciBicmRfdGwgPSAwLCBicmRfciA9IDAsIGJyZF9iID0gMDtcbiAgICAgICAgdmFyIGEgPSAwLjAsIGIgPSAwLjAsIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAvLyBmaXhlZCBwb2ludCBtYXRoXG4gICAgICAgIHZhciBXX0JJVFMxNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTMW01ID0gV19CSVRTNCAtIDU7XG4gICAgICAgIHZhciBXX0JJVFMxbTUxID0gKDEgPDwgKChXX0JJVFMxbTUpIC0gMSkpO1xuICAgICAgICB2YXIgV19CSVRTMTRfID0gKDEgPDwgV19CSVRTMTQpO1xuICAgICAgICB2YXIgV19CSVRTNDEgPSAoMSA8PCAoKFdfQklUUzQpIC0gMSkpO1xuICAgICAgICB2YXIgRkxUX1NDQUxFID0gMS4wIC8gKDEgPDwgMjApO1xuICAgICAgICB2YXIgaXcwMCA9IDAsIGl3MDEgPSAwLCBpdzEwID0gMCwgaXcxMSA9IDAsIGl2YWwgPSAwLCBpeHZhbCA9IDAsIGl5dmFsID0gMDtcbiAgICAgICAgdmFyIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjAsIEQgPSAwLjAsIG1pbl9laWcgPSAwLjA7XG5cbiAgICAgICAgdmFyIEZMVF9FUFNJTE9OID0gMC4wMDAwMDAxMTkyMDkyOTtcbiAgICAgICAgZXBzICo9IGVwcztcblxuICAgICAgICAvLyByZXNldCBzdGF0dXNcbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1heF9sZXZlbCA9IChwcmV2X3B5ci5sZXZlbHMgLSAxKSB8IDA7XG4gICAgICAgIGxldmVsID0gbWF4X2xldmVsO1xuXG4gICAgICAgIGZvciAoOyBsZXZlbCA+PSAwOyAtLWxldmVsKSB7XG4gICAgICAgICAgICBsZXZfc2MgPSAoMS4wIC8gKDEgPDwgbGV2ZWwpKTtcbiAgICAgICAgICAgIGx3ID0gdzAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBsaCA9IGgwID4+IGxldmVsO1xuICAgICAgICAgICAgZHN0ZXAgPSBsdyA8PCAxO1xuICAgICAgICAgICAgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbbGV2ZWxdLmRhdGE7XG4gICAgICAgICAgICBpbWdfbmV4dCA9IG5leHRfaW1nc1tsZXZlbF0uZGF0YTtcblxuICAgICAgICAgICAgYnJkX3IgPSAobHcgLSB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgYnJkX2IgPSAobGggLSB3aW5fc2l6ZSkgfCAwO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGV2ZWwgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2KHByZXZfaW1nc1tsZXZlbF0sIGRlcml2X20pO1xuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG9pbnRzXG4gICAgICAgICAgICBmb3IgKHB0aWQgPSAwOyBwdGlkIDwgY291bnQ7ICsrcHRpZCkge1xuICAgICAgICAgICAgICAgIGkgPSBwdGlkIDw8IDE7XG4gICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHByZXZfeCA9IHByZXZfeHlbaV0gKiBsZXZfc2M7XG4gICAgICAgICAgICAgICAgcHJldl95ID0gcHJldl94eVtqXSAqIGxldl9zYztcblxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSBtYXhfbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gcHJldl94O1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBwcmV2X3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY3Vycl94eVtpXSAqIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gY3Vycl94eVtqXSAqIDIuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3Vycl94eVtpXSA9IG5leHRfeDtcbiAgICAgICAgICAgICAgICBjdXJyX3h5W2pdID0gbmV4dF95O1xuXG4gICAgICAgICAgICAgICAgcHJldl94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIHByZXZfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBpcHJldl94ID0gcHJldl94IHwgMDtcbiAgICAgICAgICAgICAgICBpcHJldl95ID0gcHJldl95IHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIGJvcmRlciBjaGVja1xuICAgICAgICAgICAgICAgIHggPSA8bnVtYmVyPjx1bmtub3duPigoaXByZXZfeCA8PSBicmRfdGwpIHx8IChpcHJldl94ID49IGJyZF9yKSB8fCAoaXByZXZfeSA8PSBicmRfdGwpIHx8IChpcHJldl95ID49IGJyZF9iKSk7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gPG51bWJlcj48dW5rbm93bj4oKGluZXh0X3ggPD0gYnJkX3RsKSB8fCAoaW5leHRfeCA+PSBicmRfcikgfHwgKGluZXh0X3kgPD0gYnJkX3RsKSB8fCAoaW5leHRfeSA+PSBicmRfYikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1twdGlkXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSBuZXh0X3ggLSBpbmV4dF94O1xuICAgICAgICAgICAgICAgICAgICBiID0gbmV4dF95IC0gaW5leHRfeTtcbiAgICAgICAgICAgICAgICAgICAgaXcwMCA9ICgoKDEuMCAtIGEpICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzAxID0gKChhICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzExID0gKFdfQklUUzE0XyAtIGl3MDAgLSBpdzAxIC0gaXcxMCk7XG4gICAgICAgICAgICAgICAgICAgIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAganB0ciA9ICgoeSArIGluZXh0X3kpICogbHcgKyBpbmV4dF94KSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlwdHIgPSAoeSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXB0ciA9IGlwdHIgPDwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK2pwdHIsICsraXB0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19uZXh0W2pwdHJdKSAqIGl3MDAgKyAoaW1nX25leHRbanB0ciArIDFdKSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX25leHRbanB0ciArIGx3XSkgKiBpdzEwICsgKGltZ19uZXh0W2pwdHIgKyBsdyArIDFdKSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID0gKGl2YWwgLSBpd2luX2J1ZltpcHRyXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMSArPSBpdmFsICogZGVyaXZfaXdpbltkaXB0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMiArPSBpdmFsICogZGVyaXZfaXdpbltkaXB0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGIxICo9IEZMVF9TQ0FMRTtcbiAgICAgICAgICAgICAgICAgICAgYjIgKj0gRkxUX1NDQUxFO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX3ggPSAoKEExMiAqIGIyIC0gQTIyICogYjEpICogRCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX3kgPSAoKEExMiAqIGIxIC0gQTExICogYjIpICogRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ICs9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSArPSBkZWx0YV95O1xuICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldID0gbmV4dF94ICsgaGFsZl93aW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gPSBuZXh0X3kgKyBoYWxmX3dpbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGFfeCAqIGRlbHRhX3ggKyBkZWx0YV95ICogZGVsdGFfeSA8PSBlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXIgPiAwICYmIE1hdGguYWJzKGRlbHRhX3ggKyBwcmV2X2RlbHRhX3gpIDwgMC4wMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZGVsdGFfeSArIHByZXZfZGVsdGFfeSkgPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldIC09IGRlbHRhX3ggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2pdIC09IGRlbHRhX3kgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeCA9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBwb2ludHMgbG9vcFxuICAgICAgICB9IC8vIGxldmVscyBsb29wXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGl3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9pd2luX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZGVyaXZfbGV2X25vZGUpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY29yZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBOiB7IFt4OiBzdHJpbmddOiBhbnk7IH0sIGkwOiBzdHJpbmcgfCBudW1iZXIsIGkxOiBzdHJpbmcgfCBudW1iZXIsIHQ6IGFueSkge1xuICAgIHQgPSBBW2kwXTtcbiAgICBBW2kwXSA9IEFbaTFdO1xuICAgIEFbaTFdID0gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90KGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgYiAvPSBhO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGguc3FydCgxLjAgKyBiICogYik7XG4gICAgfVxuICAgIGlmIChiID4gMCkge1xuICAgICAgICBhIC89IGI7XG4gICAgICAgIHJldHVybiBiICogTWF0aC5zcXJ0KDEuMCArIGEgKiBhKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTTogeyBkYXRhOiBhbnk7IHJvd3M6IGFueTsgY29sczogYW55OyB9LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBzcmMgPSBNLmRhdGE7XG4gICAgICAgIHZhciByb3dzID0gTS5yb3dzLCBjb2xzID0gTS5jb2xzLCBjb2xzXzEgPSAoY29scyArIDEpIHwgMDtcbiAgICAgICAgdmFyIGxlbiA9IHJvd3MgKiBjb2xzO1xuICAgICAgICB2YXIgayA9IGxlbjtcbiAgICAgICAgd2hpbGUgKC0tbGVuID49IDApIHNyY1tsZW5dID0gMC4wO1xuICAgICAgICBsZW4gPSBrO1xuICAgICAgICBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHNyY1trXSA9IHZhbHVlO1xuICAgICAgICAgICAgayA9IGsgKyBjb2xzXzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoQXQ6IHsgZGF0YTogYW55OyB9LCBBOiB7IHJvd3M6IGFueTsgY29sczogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgQWkgPSAwLCBBdGkgPSAwLCBwQXQgPSAwO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGF0ZCA9IEF0LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXRpICs9IDEsIEFpICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBBdCA9IEF0aTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgcEF0ICs9IG5yb3dzLCBqKyspIGF0ZFtwQXRdID0gYWRbQWkgKyBqXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgY29sczogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCJ1xuICAgIG11bHRpcGx5X0FCdChDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtcm93cyA9IEIucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwQiA9IDAsIGogPSAwOyBqIDwgbXJvd3M7IENwKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIrKywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEJcbiAgICBtdWx0aXBseV9BdEIoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IEFwKyssIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEEnXG4gICAgbXVsdGlwbHlfQUF0KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwQ2RpYWcgPSAwLCBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcEMgPSAwLCBwQ3QgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IHBDZGlhZyArPSBucm93cyArIDEsIHBfQSA9IHBBLCBpKyspIHtcbiAgICAgICAgICAgIHBDID0gcENkaWFnO1xuICAgICAgICAgICAgcEN0ID0gcENkaWFnO1xuICAgICAgICAgICAgcEIgPSBwX0E7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbnJvd3M7IHBDKyssIHBDdCArPSBucm93cywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQSsrXSAqIGFkW3BCKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwQ3RdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQVxuICAgIG11bHRpcGx5X0F0QShDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQyA9IDAsIHBDID0gMCwgcF9DQyA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgcF9DICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBfQSA9IGk7XG4gICAgICAgICAgICBwX0NDID0gcF9DICsgaTtcbiAgICAgICAgICAgIHBDID0gcF9DQztcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBuY29sczsgcEMrKywgcF9DQyArPSBuY29scywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgcEIgPSBqO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBuY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBhZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BfQ0NdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFyaW91cyBzbWFsbCBtYXRyaXggb3BlcmF0aW9uc1xuICAgIGlkZW50aXR5XzN4MyhNOiB7IGRhdGE6IGFueTsgfSwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgZHQgPSBNLmRhdGE7XG4gICAgICAgIGR0WzBdID0gZHRbNF0gPSBkdFs4XSA9IHZhbHVlO1xuICAgICAgICBkdFsxXSA9IGR0WzJdID0gZHRbM10gPSAwO1xuICAgICAgICBkdFs1XSA9IGR0WzZdID0gZHRbN10gPSAwO1xuICAgIH1cblxuICAgIGludmVydF8zeDMoZnJvbTogeyBkYXRhOiBhbnk7IH0sIHRvOiB7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgZGF0YTogYW55OyB9LCBCOiB7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE06IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBtZCA9IE0uZGF0YTtcbiAgICAgICAgcmV0dXJuIG1kWzBdICogbWRbNF0gKiBtZFs4XSAtXG4gICAgICAgICAgICBtZFswXSAqIG1kWzVdICogbWRbN10gLVxuICAgICAgICAgICAgbWRbM10gKiBtZFsxXSAqIG1kWzhdICtcbiAgICAgICAgICAgIG1kWzNdICogbWRbMl0gKiBtZFs3XSArXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzFdICogbWRbNV0gLVxuICAgICAgICAgICAgbWRbNl0gKiBtZFsyXSAqIG1kWzRdO1xuICAgIH1cblxuICAgIGRldGVybWluYW50XzN4MyhNMTE6IG51bWJlciwgTTEyOiBudW1iZXIsIE0xMzogbnVtYmVyLFxuICAgICAgICBNMjE6IG51bWJlciwgTTIyOiBudW1iZXIsIE0yMzogbnVtYmVyLFxuICAgICAgICBNMzE6IG51bWJlciwgTTMyOiBudW1iZXIsIE0zMzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNMTEgKiBNMjIgKiBNMzMgLSBNMTEgKiBNMjMgKiBNMzIgLVxuICAgICAgICAgICAgTTIxICogTTEyICogTTMzICsgTTIxICogTTEzICogTTMyICtcbiAgICAgICAgICAgIE0zMSAqIE0xMiAqIE0yMyAtIE0zMSAqIE0xMyAqIE0yMjtcbiAgICB9XG59IiwiaW1wb3J0IHsgSURhdGFfVHlwZSwgZGF0YV90eXBlIH0gZnJvbSAnLi4vZGF0YV90eXBlL2RhdGFfdHlwZSdcbmltcG9ydCB7IGRhdGFfdCB9IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90J1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1hdHJpeF9UIHtcbiAgICBhbGxvY2F0ZTogKCkgPT4gdm9pZDtcbiAgICBjb3B5X3RvOiAob3RoZXI6IGFueSkgPT4gdm9pZDtcbiAgICByZXNpemU6IChjOiBudW1iZXIsIHI6IG51bWJlciwgY2g6IGFueSkgPT4gdm9pZDtcbn1cbmV4cG9ydCBjbGFzcyBtYXRyaXhfdCBpbXBsZW1lbnRzIElNYXRyaXhfVCB7XG4gICAgcHJpdmF0ZSBkdDogSURhdGFfVHlwZTtcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjaGFubmVsOiBudW1iZXI7XG4gICAgcHVibGljIGNvbHM6IG51bWJlcjtcbiAgICBwdWJsaWMgcm93czogbnVtYmVyO1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG4gICAgcHVibGljIGJ1ZmZlcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKGM6IG51bWJlciwgcjogbnVtYmVyLCBfZGF0YV90eXBlOiBudW1iZXIsIF9kYXRhX2J1ZmZlcj86IGFueSkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5kdC5fZ2V0X2NoYW5uZWwoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNvbHMgPSBjIHwgMDtcbiAgICAgICAgdGhpcy5yb3dzID0gciB8IDA7XG4gICAgICAgIGlmICh0eXBlb2YgX2RhdGFfYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IF9kYXRhX2J1ZmZlcjtcbiAgICAgICAgICAgIC8vIGRhdGEgdXNlciBhc2tlZCBmb3JcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbG9jYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyBjbGVhciByZWZlcmVuY2VzXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgZGF0YV90KCh0aGlzLmNvbHMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIHRoaXMuY2hhbm5lbCkgKiB0aGlzLnJvd3MpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICB9XG4gICAgY29weV90byhvdGhlcjogYW55KSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYzogbnVtYmVyLCByOiBudW1iZXIsIGNoOiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgcmFuc2FjX3BhcmFtc190IHtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0aHJlc2g6IG51bWJlcjtcbiAgICBwdWJsaWMgZXBzOiBudW1iZXI7XG4gICAgcHVibGljIHByb2I6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIsIHRocmVzaDogbnVtYmVyLCBlcHM6IG51bWJlciwgcHJvYjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzOiBudW1iZXIsIG1heF9pdGVyczogbnVtYmVyKSB7XG4gICAgICAgIHZhciBudW0gPSBNYXRoLmxvZygxIC0gdGhpcy5wcm9iKTtcbiAgICAgICAgdmFyIGRlbm9tID0gTWF0aC5sb2coMSAtIE1hdGgucG93KDEgLSBfZXBzLCB0aGlzLnNpemUpKTtcbiAgICAgICAgcmV0dXJuIChkZW5vbSA+PSAwIHx8IC1udW0gPj0gbWF4X2l0ZXJzICogKC1kZW5vbSkgPyBtYXhfaXRlcnMgOiBNYXRoLnJvdW5kKG51bSAvIGRlbm9tKSkgfCAwO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgSURhdGFfVCwgZGF0YV90IH0gZnJvbSAnLi9kYXRhX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvb2xfTm9kZV9UIHtcbiAgICByZXNpemU6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9wb29sX25vZGVfdCBpbXBsZW1lbnRzIElQb29sX05vZGVfVCB7XG4gICAgcHVibGljIG5leHQ6IGFueTtcbiAgICBwdWJsaWMgZGF0YT86IElEYXRhX1Q7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcblxuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbiAgICByZXNpemUoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVCB7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgdTg6IFVpbnQ4QXJyYXk7XG4gICAgaTMyOiBJbnQzMkFycmF5O1xuICAgIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIGY2NDogRmxvYXQ2NEFycmF5O1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90IGltcGxlbWVudHMgSURhdGFfVCAge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIsIGJ1ZmZlcj86IGFueSkge1xuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB0aGlyZF9jaGVjaywgaXNfbG9jYWxfbWF4aW1hLCBwZXJmb3JtX29uZV9wb2ludCwgbGV2X3RhYmxlX3QgfSBmcm9tICcuL3lhcGVfdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyB5YXBlIHtcbiAgICBwcml2YXRlIGxldmVsX3RhYmxlczogbGV2X3RhYmxlX3RbXTtcbiAgICBwcml2YXRlIHRhdTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxldmVsX3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLnRhdSA9IDc7XG4gICAgfVxuXG4gICAgaW5pdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHB5cmFtaWRfbGV2ZWxzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBweXJhbWlkX2xldmVscyA9PT0gXCJ1bmRlZmluZWRcIikgeyBweXJhbWlkX2xldmVscyA9IDE7IH1cbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWluKHJhZGl1cywgNyk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgMyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBweXJhbWlkX2xldmVsczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsX3RhYmxlc1tpXSA9IG5ldyBsZXZfdGFibGVfdCh3aWR0aCA+PiBpLCBoZWlnaHQgPj4gaSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdChzcmM6IHsgZGF0YTogYW55OyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgfSwgcG9pbnRzOiBhbnlbXSwgYm9yZGVyOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHN0ZXA6IG51bWJlciwgZGlyczogSW50MzJBcnJheSwgUjogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciB4LCB5O1xuXG4gICAgeCA9IFI7XG4gICAgZm9yICh5ID0gMDsgeSA8IHg7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgtLTsgeCA8IHkgJiYgeCA+PSAwOyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IC14IDwgeTsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeS0tOyB5ID49IDA7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHkgPiB4OyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeCsrOyB4IDw9IDA7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHggPCAteTsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHkrKzsgeSA8IDA7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cblxuICAgIGRpcnNbaV0gPSBkaXJzWzBdO1xuICAgIGRpcnNbaSArIDFdID0gZGlyc1sxXTtcbiAgICByZXR1cm4gaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkX2NoZWNrKFNiOiBJbnQzMkFycmF5IHwgbnVtYmVyW10sIG9mZjogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICB2YXIgbiA9IDA7XG4gICAgaWYgKFNiW29mZiArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCAtIDFdICE9IDApIG4rKztcblxuICAgIHJldHVybiBuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNfbG9jYWxfbWF4aW1hKHA6IEludDMyQXJyYXksIG9mZjogbnVtYmVyLCB2OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgbmVpZ2hib3Job29kOiBudW1iZXIpIHtcbiAgICB2YXIgeCwgeTtcblxuICAgIGlmICh2ID4gMCkge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdID4gdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdIDwgdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtX29uZV9wb2ludChJOiB7IFt4OiBzdHJpbmddOiBudW1iZXI7IH0sIHg6IG51bWJlciwgU2NvcmVzOiBJbnQzMkFycmF5LCBJbTogbnVtYmVyLCBJcDogbnVtYmVyLCBkaXJzOiBhbnlbXSB8IEludDMyQXJyYXksIG9wcG9zaXRlOiBudW1iZXIsIGRpcnNfbmI6IG51bWJlcikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgcHVibGljIGRpcnM6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGRpcnNfY291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2NvcmVzOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih3OiBudW1iZXIsIGg6IG51bWJlciwgcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlycyA9IG5ldyBJbnQzMkFycmF5KDEwMjQpO1xuICAgICAgICB0aGlzLmRpcnNfY291bnQgPSBwcmVjb21wdXRlX2RpcmVjdGlvbnModywgdGhpcy5kaXJzLCByKSB8IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzID0gbmV3IEludDMyQXJyYXkodyAqIGgpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHIgfCAwO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjOiBhbnlbXSwgZHN0OiBhbnlbXSwgdzogbnVtYmVyLCBoOiBhbnksIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgc3g6IG51bWJlcixzeTogbnVtYmVyLCBleDogbnVtYmVyLGV5OiBudW1iZXIpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmM6IG51bWJlcltdLCBvZmY6IG51bWJlciwgdHI6IG51bWJlciwgRHh4OiBudW1iZXIsIER5eTogbnVtYmVyLCBEeHk6IG51bWJlciwgRHl4OiBudW1iZXIpIHtcbiAgICB2YXIgSXh4ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeHhdICsgc3JjW29mZiAtIER4eF07XG4gICAgdmFyIEl5eSA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHl5XSArIHNyY1tvZmYgLSBEeXldO1xuICAgIHZhciBJeHkgPSBzcmNbb2ZmICsgRHh5XSArIHNyY1tvZmYgLSBEeHldIC0gc3JjW29mZiArIER5eF0gLSBzcmNbb2ZmIC0gRHl4XTtcbiAgICB2YXIgc3FydF9kZWx0YSA9ICggTWF0aC5zcXJ0KCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkgKSApfDA7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5hYnModHIgLSBzcXJ0X2RlbHRhKSwgTWF0aC5hYnMoLSh0ciArIHNxcnRfZGVsdGEpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJVOEMxX3QiLCJVOEMzX3QiLCJVOEM0X3QiLCJGMzJDMV90IiwiRjMyQzJfdCIsIlMzMkMxX3QiLCJTMzJDMl90IiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsInR5cGUiLCJfY29udm9sX3U4IiwiYnVmIiwic3JjX2QiLCJkc3RfZCIsInciLCJoIiwiZmlsdGVyIiwia2VybmVsX3NpemUiLCJoYWxmX2tlcm5lbCIsImoiLCJrIiwic3AiLCJkcCIsInN1bSIsInN1bTEiLCJzdW0yIiwic3VtMyIsImYwIiwiZmsiLCJ3MiIsInczIiwidzQiLCJNYXRoIiwibWluIiwiX2NvbnZvbCIsIl9yZXNhbXBsZV91OCIsInNyYyIsImRzdCIsIm53IiwibmgiLCJ4b2ZzX2NvdW50IiwiY2giLCJjaGFubmVsIiwiY29scyIsInJvd3MiLCJkYXRhIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4Iiwic3kiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImEiLCJiIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJidWZfbm9kZSIsImdldF9idWZmZXIiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImkzMiIsInhvZnMiLCJtYXgiLCJwdXRfYnVmZmVyIiwiX3Jlc2FtcGxlIiwic2NhbGUiLCJmMzIiLCJhYnMiLCJzd2FwIiwiaHlwb3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJrZXlwb2ludF90IiwieWFwZSIsImNvbXB1dGVfbGFwbGFjaWFuIiwiaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUiLCJyYW5zYWNfcGFyYW1zX3QiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwieCIsImZyb20iLCJ0byIsImNvdW50IiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJ5Iiwic3FydCIsIlNRUlQyIiwicG9pbnRzIiwiZHgxIiwiZHkxIiwiZHgyIiwiZHkyIiwiYWZmaW5lMmQiLCJtb2RlbCIsIm1kIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImxpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYV9idWZmIiwiYl9idWZmIiwiYV9tdCIsImJfbXQiLCJhZCIsImJkIiwibXVsdGlwbHlfQXRBIiwibXVsdGlwbHlfQXRCIiwibHVfc29sdmUiLCJpbnZlcnRfM3gzIiwibXVsdGlwbHlfM3gzIiwiaG9tb2dyYXBoeTJkIiwibUx0TCIsIkV2ZWMiLCJMdEwiLCJldmQiLCJYIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJlcnIiLCJ3dyIsIm0iLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHlyYW1pZF90IiwibGV2ZWxzIiwiQXJyYXkiLCJfaW1ncHJvYyIsImltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiLCJjb2RlIiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInRtcF9idWZmIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJkYXRhX3U4IiwiaG9sZCIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1hdGgiLCJpc191OCIsImJ1Zl9zeiIsImZpbHRfbm9kZSIsImdldF9nYXVzc2lhbl9rZXJuZWwiLCJpbWciLCJyaG9fcmVzIiwidGhldGFfcmVzIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiZHN0ZXAiLCJ4MSIsImMiLCJkIiwiZSIsImYiLCJzcm93MCIsInNyb3cxIiwic3JvdzIiLCJkcm93IiwidHJvdzAiLCJ0cm93MSIsImd4Z3kiLCJidWYwX25vZGUiLCJidWYxX25vZGUiLCJkc3Rfc3VtIiwiZHN0X3Nxc3VtIiwiZHN0X3RpbHRlZCIsIncwIiwiaDAiLCJ3MSIsInMiLCJzMiIsInAiLCJwdXAiLCJ2IiwicHJldiIsImhpc3QwIiwibm9ybSIsImhpc3QwX25vZGUiLCJsb3dfdGhyZXNoIiwiaGlnaF90aHJlc2giLCJncmFkIiwiX2dyYWQiLCJzdXBwcmVzcyIsInRnMjJ4IiwidGc2N3giLCJkeGR5X25vZGUiLCJtYXBfbm9kZSIsInN0YWNrX25vZGUiLCJtYXAiLCJzdGFjayIsImR4ZHkiLCJkeGR5X20iLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsInNvYmVsX2Rlcml2YXRpdmVzIiwiTnVtYmVyIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInhzMCIsInlzMCIsIndzIiwic2MiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJnIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJ0Iiwic2lnbWFfeCIsInNjYWxlXzJ4Iiwia2Vybl9ub2RlIiwiX2tlcm5lbCIsImV4cCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQxIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJwdHIiLCJwdHIyIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90Iiwic3dhcF9jbnQiLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiQSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsImVwcyIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJzZCIsImdhbW1hIiwiZGVsdGEiLCJzZWVkIiwidmFsMCIsImFzdW0iLCJXX2J1ZmYiLCJmNjQiLCJCIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJ3X210Iiwidl9tdCIsInRyYW5zcG9zZSIsIkphY29iaVNWREltcGwiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwieWFwZTA2IiwibGFwbGFjaWFuX3RocmVzaG9sZCIsIm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQiLCJib3JkZXIiLCJzcmRfZCIsIkR4eCIsIkR5eSIsIkR4eSIsIkR5eCIsImxhcF9idWYiLCJsYXBsYWNpYW4iLCJsdiIsInJvd3giLCJtaW5fZWlnZW5fdmFsdWUiLCJwdCIsIm51bWJlcl9vZl9wb2ludHMiLCJsYXBfdGhyZXNoIiwiZWlnZW5fdGhyZXNoIiwiZXgiLCJleSIsInNjb3JlIiwibW90aW9uX2VzdGltYXRvciIsIm5lZWRfY250IiwibWF4X2NudCIsImZyb21fc3ViIiwidG9fc3ViIiwibWF4X3RyeSIsImluZGljZXMiLCJzc2l0ZXIiLCJpZHhfaSIsIm9rIiwicmFuZG9tIiwiY2hlY2tfc3Vic2V0IiwidGhyZXNoIiwibWFzayIsIm51bWlubGllcnMiLCJlcnJvciIsInBhcmFtcyIsIm1heF9pdGVycyIsIm1vZGVsX3BvaW50cyIsIm5pdGVycyIsInJlc3VsdCIsInN1YnNldDAiLCJzdWJzZXQxIiwiZm91bmQiLCJtYyIsIm1yIiwibV9idWZmIiwibXNfYnVmZiIsImVycl9idWZmIiwiTSIsImN1cnJfbWFzayIsImlubGllcnNfbWF4Iiwibm1vZGVscyIsInJ1biIsImNvcHlfdG8iLCJnZXRfc3Vic2V0IiwiZmluZF9pbmxpZXJzIiwidXBkYXRlX2l0ZXJzIiwiX21hdGgiLCJtaW5fbWVkaWFuIiwib3B0aWNhbF9mbG93X2xrIiwic2NoYXJyX2Rlcml2Iiwic2NoYXJyX2Rlcml2YXRpdmVzIiwicHJldl9weXIiLCJjdXJyX3B5ciIsInByZXZfeHkiLCJjdXJyX3h5Iiwid2luX3NpemUiLCJzdGF0dXMiLCJtaW5fZWlnZW5fdGhyZXNob2xkIiwiVWludDhBcnJheSIsImhhbGZfd2luIiwid2luX2FyZWEiLCJ3aW5fYXJlYTIiLCJwcmV2X2ltZ3MiLCJuZXh0X2ltZ3MiLCJpbWdfcHJldiIsImltZ19uZXh0IiwibHciLCJsaCIsIml3aW5fbm9kZSIsImRlcml2X2l3aW5fbm9kZSIsImRlcml2X2xldl9ub2RlIiwiZGVyaXZfbSIsIml3aW5fYnVmIiwiZGVyaXZfaXdpbiIsImRlcml2X2xldiIsImRzcmMiLCJpcHRyIiwiZGlwdHIiLCJqcHRyIiwibGV2X3NjIiwicHJldl94IiwicHJldl95IiwibmV4dF94IiwibmV4dF95IiwicHJldl9kZWx0YV94IiwicHJldl9kZWx0YV95IiwiZGVsdGFfeCIsImRlbHRhX3kiLCJpcHJldl94IiwiaXByZXZfeSIsImluZXh0X3giLCJpbmV4dF95IiwibGV2ZWwiLCJwdGlkIiwiYnJkX3RsIiwiYnJkX3IiLCJicmRfYiIsImIxIiwiYjIiLCJXX0JJVFMxNCIsIldfQklUUzQiLCJXX0JJVFMxbTUiLCJXX0JJVFMxbTUxIiwiV19CSVRTMTRfIiwiV19CSVRTNDEiLCJGTFRfU0NBTEUiLCJpdzAwIiwiaXcwMSIsIml3MTAiLCJpdzExIiwiaXZhbCIsIml4dmFsIiwiaXl2YWwiLCJEIiwibWluX2VpZyIsIkZMVF9FUFNJTE9OIiwibWF4X2xldmVsIiwiYW5nbGUiLCJpMCIsImkxIiwidmFsdWUiLCJjb2xzXzEiLCJsZW4iLCJBdGkiLCJwQXQiLCJhdGQiLCJDIiwiQXAiLCJwQSIsInBCIiwicF9CIiwiQ3AiLCJtY29scyIsImNkIiwibXJvd3MiLCJwQ2RpYWciLCJwX0EiLCJwQyIsInBDdCIsInBfQyIsInBfQ0MiLCJpbnZBIiwidDEzIiwidDE3IiwiQ2QiLCJBZCIsIkJkIiwibTFfMCIsIm0xXzEiLCJtMV8yIiwibTFfMyIsIm0xXzQiLCJtMV81IiwibTFfNiIsIm0xXzciLCJtMV84IiwibTJfMCIsIm0yXzEiLCJtMl8yIiwibTJfMyIsIm0yXzQiLCJtMl81IiwibTJfNiIsIm0yXzciLCJtMl84IiwiTTExIiwiTTEyIiwiTTEzIiwiTTIxIiwiTTIyIiwiTTIzIiwiTTMxIiwiTTMyIiwiTTMzIiwiZGF0YV90IiwiX2RhdGFfdHlwZSIsIl9kYXRhX2J1ZmZlciIsImJ1ZmZlciIsInU4Iiwib3RoZXIiLCJvZCIsIm5ld19zaXplIiwicHJvYiIsIl9lcHMiLCJudW0iLCJsb2ciLCJkZW5vbSIsInBvdyIsIkFycmF5QnVmZmVyIiwiRmxvYXQ2NEFycmF5IiwidGhpcmRfY2hlY2siLCJpc19sb2NhbF9tYXhpbWEiLCJwZXJmb3JtX29uZV9wb2ludCIsImxldl90YWJsZV90IiwibGV2ZWxfdGFibGVzIiwidGF1IiwicHlyYW1pZF9sZXZlbHMiLCJSIiwiUm0xIiwiZGlycyIsImRpcnNfY291bnQiLCJvcHBvc2l0ZSIsImh3Iiwic2NvcmVzIiwiaXAiLCJpbSIsImFic19zY29yZSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwibmVpZ2hib3Job29kIiwiSSIsIlNjb3JlcyIsIkltIiwiSXAiLCJkaXJzX25iIiwiQjAiLCJCMSIsIkIyIiwic3RhdGUiLCJ5cm93IiwidHIiLCJJeHgiLCJJeXkiLCJJeHkiLCJzcXJ0X2RlbHRhIl0sInNvdXJjZVJvb3QiOiIifQ==