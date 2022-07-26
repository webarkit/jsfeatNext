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
/* harmony import */ var _orb_bit_pattern_31__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orb/bit_pattern_31 */ "./src_ts/orb/bit_pattern_31.ts");
/* harmony import */ var _orb_rectify_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orb/rectify_patch */ "./src_ts/orb/rectify_patch.ts");
/* harmony import */ var _yape_yape__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./yape/yape */ "./src_ts/yape/yape.ts");
/* harmony import */ var _yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./yape06/yape06_utils */ "./src_ts/yape06/yape06_utils.ts");
/* harmony import */ var _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./motion_estimator/ransac_params_t */ "./src_ts/motion_estimator/ransac_params_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./constants/constants */ "./src_ts/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../package.json */ "./package.json");








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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "orb", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_21__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_V_T);

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

    _this.T0 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
    _this.T1 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
    _this.AtA = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 6, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
    _this.AtB = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
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
          if (Math.abs(dx2 * dy1 - dy2 * dx1) <= _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2))) return true;
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;
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

    _this2.mLtL = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
    _this2.Evec = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
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

      if (Math.abs(smx) < _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON || Math.abs(smy) < _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMx) < _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMy) < _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON) return 0;
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
        code = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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

        if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
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
      var scale = options & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
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
          is_u8 = data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32_t) {
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
      var dxdy_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w, h, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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

      if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t) {
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
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON;
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
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.FLT_MIN;
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;

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
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;
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
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;
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
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;
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

jsfeatNext.orb = /*#__PURE__*/function (_jsfeatNext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(orb, _jsfeatNext6);

  var _super8 = _createSuper(orb);

  function orb() {
    var _this6;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, orb);

    _this6 = _super8.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "bit_pattern_31_", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "H", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "patch_img", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "imgproc", void 0);

    _this6.bit_pattern_31_ = new Int32Array(_orb_bit_pattern_31__WEBPACK_IMPORTED_MODULE_15__.bit_pattern_31);
    _this6.H = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
    _this6.patch_img = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(32, 32, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);
    _this6.imgproc = new jsfeatNext.imgproc();
    return _this6;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(orb, [{
    key: "describe",
    value: function describe(src, corners, count, descriptors) {
      var DESCR_SIZE = 32;
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
      var patch_off = 16 * 32 + 16;
      var patt = 0;

      if (!(descriptors.type & _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t)) {
        descriptors.type = _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t;
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
        (0,_orb_rectify_patch__WEBPACK_IMPORTED_MODULE_16__.rectify_patch)(src, this.patch_img, angle, px, py, 32, this.H, this.imgproc);
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

jsfeatNext.yape = _yape_yape__WEBPACK_IMPORTED_MODULE_17__.yape;

jsfeatNext.yape06 = /*#__PURE__*/function (_jsfeatNext7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(yape06, _jsfeatNext7);

  var _super9 = _createSuper(yape06);

  function yape06() {
    var _this7;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, yape06);

    _this7 = _super9.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "laplacian_threshold", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "min_eigen_value_threshold", void 0);

    _this7.laplacian_threshold = 30;
    _this7.min_eigen_value_threshold = 25;
    return _this7;
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

      (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_18__.compute_laplacian)(srd_d, laplacian, w, h, Dxx, Dyy, sx, sy, ex, ey);
      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          lv = laplacian[rowx];

          if (lv < -lap_thresh && lv < laplacian[rowx - 1] && lv < laplacian[rowx + 1] && lv < laplacian[rowx - w] && lv < laplacian[rowx + w] && lv < laplacian[rowx - w - 1] && lv < laplacian[rowx + w - 1] && lv < laplacian[rowx - w + 1] && lv < laplacian[rowx + w + 1] || lv > lap_thresh && lv > laplacian[rowx - 1] && lv > laplacian[rowx + 1] && lv > laplacian[rowx - w] && lv > laplacian[rowx + w] && lv > laplacian[rowx - w - 1] && lv > laplacian[rowx + w - 1] && lv > laplacian[rowx - w + 1] && lv > laplacian[rowx + w + 1]) {
            min_eigen_value = (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_18__.hessian_min_eigen_value)(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);

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

jsfeatNext.motion_estimator = /*#__PURE__*/function (_jsfeatNext8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(motion_estimator, _jsfeatNext8);

  var _super10 = _createSuper(motion_estimator);

  function motion_estimator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, motion_estimator);

    return _super10.call(this);
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t, ms_buff.data);
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

jsfeatNext.ransac_params_t = _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_19__.ransac_params_t;
jsfeatNext.affine2d = affine2d;
jsfeatNext.homography2d = homography2d;

jsfeatNext.optical_flow_lk = /*#__PURE__*/function (_jsfeatNext9) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(optical_flow_lk, _jsfeatNext9);

  var _super11 = _createSuper(optical_flow_lk);

  function optical_flow_lk() {
    var _this8;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, optical_flow_lk);

    _this8 = _super11.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this8), "scharr_deriv", void 0);

    var _imgproc = new jsfeatNext.imgproc();

    _this8.scharr_deriv = _imgproc.scharr_derivatives;
    return _this8;
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
      var deriv_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w0, h0, _constants_constants__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
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

/***/ "./src_ts/orb/bit_pattern_31.ts":
/*!**************************************!*\
  !*** ./src_ts/orb/bit_pattern_31.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bit_pattern_31": () => (/* binding */ bit_pattern_31)
/* harmony export */ });
var bit_pattern_31 = [8, -3, 9, 5, 4, 2, 7, -12, -11, 9, -8, 2, 7, -12, 12, -13, 2, -13, 2, 12, 1, -7, 1, 6, -2, -10, -2, -4, -13, -13, -11, -8, -13, -3, -12, -9, 10, 4, 11, 9, -13, -8, -8, -9, -11, 7, -9, 12, 7, 7, 12, 6, -4, -5, -3, 0, -13, 2, -12, -3, -9, 0, -7, 5, 12, -6, 12, -1, -3, 6, -2, 12, -6, -13, -4, -8, 11, -13, 12, -8, 4, 7, 5, 1, 5, -3, 10, -3, 3, -7, 6, 12, -8, -7, -6, -2, -2, 11, -1, -10, -13, 12, -8, 10, -7, 3, -5, -3, -4, 2, -3, 7, -10, -12, -6, 11, 5, -12, 6, -7, 5, -6, 7, -1, 1, 0, 4, -5, 9, 11, 11, -13, 4, 7, 4, 12, 2, -1, 4, 4, -4, -12, -2, 7, -8, -5, -7, -10, 4, 11, 9, 12, 0, -8, 1, -13, -13, -2, -8, 2, -3, -2, -2, 3, -6, 9, -4, -9, 8, 12, 10, 7, 0, 9, 1, 3, 7, -5, 11, -10, -13, -6, -11, 0, 10, 7, 12, 1, -6, -3, -6, 12, 10, -9, 12, -4, -13, 8, -8, -12, -13, 0, -8, -4, 3, 3, 7, 8, 5, 7, 10, -7, -1, 7, 1, -12, 3, -10, 5, 6, 2, -4, 3, -10, -13, 0, -13, 5, -13, -7, -12, 12, -13, 3, -11, 8, -7, 12, -4, 7, 6, -10, 12, 8, -9, -1, -7, -6, -2, -5, 0, 12, -12, 5, -7, 5, 3, -10, 8, -13, -7, -7, -4, 5, -3, -2, -1, -7, 2, 9, 5, -11, -11, -13, -5, -13, -1, 6, 0, -1, 5, -3, 5, 2, -4, -13, -4, 12, -9, -6, -9, 6, -12, -10, -8, -4, 10, 2, 12, -3, 7, 12, 12, 12, -7, -13, -6, 5, -4, 9, -3, 4, 7, -1, 12, 2, -7, 6, -5, 1, -13, 11, -12, 5, -3, 7, -2, -6, 7, -8, 12, -7, -13, -7, -11, -12, 1, -3, 12, 12, 2, -6, 3, 0, -4, 3, -2, -13, -1, -13, 1, 9, 7, 1, 8, -6, 1, -1, 3, 12, 9, 1, 12, 6, -1, -9, -1, 3, -13, -13, -10, 5, 7, 7, 10, 12, 12, -5, 12, 9, 6, 3, 7, 11, 5, -13, 6, 10, 2, -12, 2, 3, 3, 8, 4, -6, 2, 6, 12, -13, 9, -12, 10, 3, -8, 4, -7, 9, -11, 12, -4, -6, 1, 12, 2, -8, 6, -9, 7, -4, 2, 3, 3, -2, 6, 3, 11, 0, 3, -3, 8, -8, 7, 8, 9, 3, -11, -5, -6, -4, -10, 11, -5, 10, -5, -8, -3, 12, -10, 5, -9, 0, 8, -1, 12, -6, 4, -6, 6, -11, -10, 12, -8, 7, 4, -2, 6, 7, -2, 0, -2, 12, -5, -8, -5, 2, 7, -6, 10, 12, -9, -13, -8, -8, -5, -13, -5, -2, 8, -8, 9, -13, -9, -11, -9, 0, 1, -8, 1, -2, 7, -4, 9, 1, -2, 1, -1, -4, 11, -6, 12, -11, -12, -9, -6, 4, 3, 7, 7, 12, 5, 5, 10, 8, 0, -4, 2, 8, -9, 12, -5, -13, 0, 7, 2, 12, -1, 2, 1, 7, 5, 11, 7, -9, 3, 5, 6, -8, -13, -4, -8, 9, -5, 9, -3, -3, -4, -7, -3, -12, 6, 5, 8, 0, -7, 6, -6, 12, -13, 6, -5, -2, 1, -10, 3, 10, 4, 1, 8, -4, -2, -2, 2, -13, 2, -12, 12, 12, -2, -13, 0, -6, 4, 1, 9, 3, -6, -10, -3, -5, -3, -13, -1, 1, 7, 5, 12, -11, 4, -2, 5, -7, -13, 9, -9, -5, 7, 1, 8, 6, 7, -8, 7, 6, -7, -4, -7, 1, -8, 11, -7, -8, -13, 6, -12, -8, 2, 4, 3, 9, 10, -5, 12, 3, -6, -5, -6, 7, 8, -3, 9, -8, 2, -12, 2, 8, -11, -2, -10, 3, -12, -13, -7, -9, -11, 0, -10, -5, 5, -3, 11, 8, -2, -13, -1, 12, -1, -8, 0, 9, -13, -11, -12, -5, -10, -2, -10, 11, -3, 9, -2, -13, 2, -3, 3, 2, -9, -13, -4, 0, -4, 6, -3, -10, -4, 12, -2, -7, -6, -11, -4, 9, 6, -3, 6, 11, -13, 11, -5, 5, 11, 11, 12, 6, 7, -5, 12, -2, -1, 12, 0, 7, -4, -8, -3, -2, -7, 1, -6, 7, -13, -12, -8, -13, -7, -2, -6, -8, -8, 5, -6, -9, -5, -1, -4, 5, -13, 7, -8, 10, 1, 5, 5, -13, 1, 0, 10, -13, 9, 12, 10, -1, 5, -8, 10, -9, -1, 11, 1, -13, -9, -3, -6, 2, -1, -10, 1, 12, -13, 1, -8, -10, 8, -11, 10, -6, 2, -13, 3, -6, 7, -13, 12, -9, -10, -10, -5, -7, -10, -8, -8, -13, 4, -6, 8, 5, 3, 12, 8, -13, -4, 2, -3, -3, 5, -13, 10, -12, 4, -13, 5, -1, -9, 9, -4, 3, 0, 3, 3, -9, -12, 1, -6, 1, 3, 2, 4, -8, -10, -10, -10, 9, 8, -13, 12, 12, -8, -12, -6, -5, 2, 2, 3, 7, 10, 6, 11, -8, 6, 8, 8, -12, -7, 10, -6, 5, -3, -9, -3, 9, -1, -13, -1, 5, -3, -7, -3, 4, -8, -2, -8, 3, 4, 2, 12, 12, 2, -5, 3, 11, 6, -9, 11, -13, 3, -1, 7, 12, 11, -1, 12, 4, -3, 0, -3, 6, 4, -11, 4, 12, 2, -4, 2, 1, -10, -6, -8, 1, -13, 7, -11, 1, -13, 12, -11, -13, 6, 0, 11, -13, 0, -1, 1, 4, -13, 3, -9, -2, -9, 8, -6, -3, -13, -6, -8, -2, 5, -9, 8, 10, 2, 7, 3, -9, -1, -6, -1, -1, 9, 5, 11, -2, 11, -3, 12, -8, 3, 0, 3, 5, -1, 4, 0, 10, 3, -6, 4, 5, -13, 0, -10, 5, 5, 8, 12, 11, 8, 9, 9, -6, 7, -4, 8, -12, -10, 4, -10, 9, 7, 3, 12, 4, 9, -7, 10, -2, 7, 0, 12, -2, -1, -6, 0, -11];

/***/ }),

/***/ "./src_ts/orb/rectify_patch.ts":
/*!*************************************!*\
  !*** ./src_ts/orb/rectify_patch.ts ***!
  \*************************************/
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

module.exports = JSON.parse('{"name":"jsfeatnext","version":"0.5.0","description":"ES6 version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/index.d.ts","scripts":{"dev":"webpack --mode development --progress --watch","build":"webpack --mode production","build-ts":"rimraf ./build && tsc && webpack --mode production","dev-ts":"rimraf ./build && tsc && webpack --mode development --progress --watch"},"repository":{"type":"git","url":"git+https://github.com/kalwalt/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/kalwalt/jsfeatNext/issues"},"homepage":"https://github.com/kalwalt/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.18.9","@babel/plugin-transform-runtime":"^7.18.9","@babel/preset-env":"^7.18.9","babel-loader":"^8.2.5","rimraf":"^3.0.2","typescript":"^4.6.3","webpack":"^5.73.0","webpack-cli":"^4.10.0"},"dependencies":{"@babel/runtime":"^7.18.9","ts-loader":"^9.3.1"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQmtDO0FBQzZCO0FBQ2hEO0FBQ2YsZUFBZSxzREFBTztBQUN0QjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMscUVBQXFCO0FBQzlCOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlFQUFlO0VBQ1p6ckIsVUFBVSxFQUFWQSxtREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NhY2hlL2NhY2hlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2RhdGFfdHlwZS9kYXRhX3R5cGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbWdwcm9jL2NvbnZvbC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2ltZ3Byb2MvcmVzYW1wbGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9qc2ZlYXROZXh0LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMva2V5cG9pbnRfdC9rZXlwb2ludF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbGluYWxnL2xpbmFsZy1iYXNlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0bWF0aC9tYXRtYXRoLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0cml4X3QvbWF0cml4X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbm9kZV91dGlscy9kYXRhX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9vcmIvYml0X3BhdHRlcm5fMzEudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9vcmIvcmVjdGlmeV9wYXRjaC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUveWFwZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUveWFwZV91dGlscy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUwNi95YXBlMDZfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcbiAgICBhbGxvY2F0ZTogKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGdldF9idWZmZXI6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IGFueTtcbiAgICBwdXRfYnVmZmVyOiAobm9kZTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgY2FjaGUgaW1wbGVtZW50cyBJQ2FjaGUge1xuICAgIHByaXZhdGUgX3Bvb2xfaGVhZDogYW55O1xuICAgIHByaXZhdGUgX3Bvb2xfdGFpbDogYW55O1xuICAgIHByaXZhdGUgX3Bvb2xfc2l6ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHk6IGFueSwgZGF0YV9zaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGU6IGFueSkge1xuICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgSlNGRUFUX0NPTlNUQU5UUyA9IHtcbiAgICAvLyBDT05TVEFOVFNcbiAgICBFUFNJTE9OOiAwLjAwMDAwMDExOTIwOTI4OTYsXG4gICAgRkxUX01JTjogMUUtMzcsXG4gICAgVThfdDogMHgwMTAwLFxuICAgIFMzMl90OiAweDAyMDAsXG4gICAgRjMyX3Q6IDB4MDQwMCxcbiAgICBTNjRfdDogMHgwODAwLFxuICAgIEY2NF90OiAweDEwMDAsXG4gICAgQzFfdDogMHgwMSxcbiAgICBDMl90OiAweDAyLFxuICAgIEMzX3Q6IDB4MDMsXG4gICAgQzRfdDogMHgwNCxcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBDT0xPUl9SR0JBMkdSQVk6IDAsXG4gICAgQ09MT1JfUkdCMkdSQVk6IDEsXG4gICAgQ09MT1JfQkdSQTJHUkFZOiAyLFxuICAgIENPTE9SX0JHUjJHUkFZOiAzLFxuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgQk9YX0JMVVJfTk9TQ0FMRTogMHgwMSxcblxuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgU1ZEX1VfVDogMHgwMSxcbiAgICBTVkRfVl9UOiAweDAyLFxuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgVThDMV90OiAweDAxMDAgfCAweDAxLFxuICAgIFU4QzNfdDogMHgwMTAwIHwgMHgwMyxcbiAgICBVOEM0X3Q6IDB4MDEwMCB8IDB4MDQsXG5cbiAgICBGMzJDMV90OiAweDA0MDAgfCAweDAxLFxuICAgIEYzMkMyX3Q6IDB4MDQwMCB8IDB4MDIsXG4gICAgUzMyQzFfdDogMHgwMjAwIHwgMHgwMSxcbiAgICBTMzJDMl90OiAweDAyMDAgfCAweDAyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YV9UeXBlIHtcbiAgICBfZ2V0X2RhdGFfdHlwZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xuICAgIF9nZXRfY2hhbm5lbDogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xuICAgIF9nZXRfZGF0YV90eXBlX3NpemU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIGRhdGFfdHlwZSBpbXBsZW1lbnRzIElEYXRhX1R5cGUge1xuICAgIHByaXZhdGUgX2RhdGFfdHlwZV9zaXplOiBJbnQzMkFycmF5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhX3R5cGVfc2l6ZSA9IG5ldyBJbnQzMkFycmF5KFstMSwgMSwgNCwgLTEsIDQsIC0xLCAtMSwgLTEsIDgsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCA4XSk7O1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYpO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFfdHlwZV9zaXplWyh0eXBlICYgMHhGRjAwKSA+PiA4XTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIF9jb252b2xfdTgoYnVmOiBudW1iZXJbXSwgc3JjX2Q6IG51bWJlcltdLCBkc3RfZDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWx0ZXI6IG51bWJlcltdLCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLCBzdW0xID0gMCwgc3VtMiA9IDAsIHN1bTMgPSAwLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZvbChidWY6IG51bWJlcltdLCBzcmNfZDogbnVtYmVyW10sIGRzdF9kOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbHRlcjogbnVtYmVyW10sIGtlcm5lbF9zaXplOiBudW1iZXIsIGhhbGZfa2VybmVsOiBudW1iZXIpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAuMCwgc3VtMSA9IDAuMCwgc3VtMiA9IDAuMCwgc3VtMyA9IDAuMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMC4wO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gc3VtO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL2ltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4uL2pzZmVhdE5leHQuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGVfdTggKHNyYzogeyBjaGFubmVsOiBhbnk7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIGRzdDogeyBkYXRhOiBhbnk7IH0sIGNhY2hlOiB7IGdldF9idWZmZXI6IChhcmcwOiBudW1iZXIpID0+IGFueTsgcHV0X2J1ZmZlcjogKGFyZzA6IGFueSkgPT4gdm9pZDsgfSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlIChzcmM6IHsgY2hhbm5lbDogYW55OyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBkc3Q6IHsgZGF0YTogYW55OyB9LCBjYWNoZTogeyBnZXRfYnVmZmVyOiAoYXJnMDogbnVtYmVyKSA9PiBhbnk7IHB1dF9idWZmZXI6IChhcmcwOiBhbnkpID0+IHZvaWQ7IH0sIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiLy9pbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QnXG5pbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBJQ2FjaGUsIGNhY2hlIH0gZnJvbSAnLi9jYWNoZS9jYWNoZSdcbmltcG9ydCB7IGltZ3Byb2MgfSBmcm9tICcuL2ltZ3Byb2MvaW1ncHJvYydcbmltcG9ydCB7IF9yZXNhbXBsZSwgX3Jlc2FtcGxlX3U4IH0gZnJvbSAnLi9pbWdwcm9jL3Jlc2FtcGxlJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vaW1ncHJvYy9jb252b2wnXG5pbXBvcnQgeyBsaW5hbGcgfSBmcm9tICcuL2xpbmFsZy9saW5hbGcnXG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gJy4vbGluYWxnL2xpbmFsZy1iYXNlJ1xuaW1wb3J0IHsgbWF0aCB9IGZyb20gJy4vbWF0aC9tYXRoJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGgnXG5pbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4vbWF0cml4X3QvbWF0cml4X3QnXG5pbXBvcnQgeyBweXJhbWlkX3QgfSBmcm9tICcuL3B5cmFtaWRfdC9weXJhbWlkX3QnXG5pbXBvcnQgeyBrZXlwb2ludF90IH0gZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QnXG5pbXBvcnQgeyBvcmIgfSBmcm9tICcuL29yYi9vcmInXG5pbXBvcnQgeyBiaXRfcGF0dGVybl8zMSB9IGZyb20gJy4vb3JiL2JpdF9wYXR0ZXJuXzMxJ1xuaW1wb3J0IHsgcmVjdGlmeV9wYXRjaCB9IGZyb20gJy4vb3JiL3JlY3RpZnlfcGF0Y2gnXG5pbXBvcnQgeyB5YXBlIH0gZnJvbSAnLi95YXBlL3lhcGUnXG5pbXBvcnQgeyBjb21wdXRlX2xhcGxhY2lhbiwgaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUgfSBmcm9tICcuL3lhcGUwNi95YXBlMDZfdXRpbHMnXG5pbXBvcnQgeyB5YXBlMDYgfSBmcm9tICcuL3lhcGUwNi95YXBlMDYnXG5pbXBvcnQgeyByYW5zYWNfcGFyYW1zX3QgfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190J1xuaW1wb3J0IHsgbW90aW9uX2VzdGltYXRvciB9IGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fZXN0aW1hdG9yJ1xuaW1wb3J0IHsgb3B0aWNhbF9mbG93X2xrIH0gZnJvbSAnLi9vcHRpY2FsX2Zsb3dfbGsvb3B0aWNhbF9mbG93X2xrJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHByb3RlY3RlZCBjYWNoZTogSUNhY2hlO1xuICAgIHN0YXRpYyBjYWNoZTogdHlwZW9mIGNhY2hlO1xuICAgIHN0YXRpYyBpbWdwcm9jOiB0eXBlb2YgaW1ncHJvYztcbiAgICBzdGF0aWMgbGluYWxnOiB0eXBlb2YgbGluYWxnO1xuICAgIHN0YXRpYyBtYXRoOiB0eXBlb2YgbWF0aDtcbiAgICBzdGF0aWMgbWF0bWF0aDogdHlwZW9mIG1hdG1hdGg7XG4gICAgc3RhdGljIG1hdHJpeF90OiB0eXBlb2YgbWF0cml4X3Q7XG4gICAgc3RhdGljIHB5cmFtaWRfdDogdHlwZW9mIHB5cmFtaWRfdDtcbiAgICBzdGF0aWMga2V5cG9pbnRfdDogdHlwZW9mIGtleXBvaW50X3Q7XG4gICAgc3RhdGljIHlhcGU6IHR5cGVvZiB5YXBlO1xuICAgIHN0YXRpYyB5YXBlMDY6IHR5cGVvZiB5YXBlMDY7XG4gICAgc3RhdGljIHJhbnNhY19wYXJhbXNfdDogdHlwZW9mIHJhbnNhY19wYXJhbXNfdDtcbiAgICBzdGF0aWMgYWZmaW5lMmQ6IHR5cGVvZiBhZmZpbmUyZDtcbiAgICBzdGF0aWMgaG9tb2dyYXBoeTJkOiB0eXBlb2YgaG9tb2dyYXBoeTJkO1xuICAgIHN0YXRpYyBtb3Rpb25fZXN0aW1hdG9yOiB0eXBlb2YgbW90aW9uX2VzdGltYXRvcjtcbiAgICBzdGF0aWMgb3B0aWNhbF9mbG93X2xrOiB0eXBlb2Ygb3B0aWNhbF9mbG93X2xrO1xuICAgIHN0YXRpYyBvcmI6IHR5cGVvZiBvcmI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG5cbiAgICAvLyBWRVJTSU9OXG4gICAgc3RhdGljIFZFUlNJT046IHN0cmluZyA9IHBrZy52ZXJzaW9uO1xuXG4gICAgLy8gQ09OU1RBTlRTXG4gICAgc3RhdGljIEVQU0lMT04gPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgc3RhdGljIEZMVF9NSU4gPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgc3RhdGljIFU4X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgc3RhdGljIFMzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5TMzJfdDtcbiAgICBzdGF0aWMgRjMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90O1xuICAgIHN0YXRpYyBTNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgQzFfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICBzdGF0aWMgQzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzJfdDtcbiAgICBzdGF0aWMgQzNfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzNfdDtcbiAgICBzdGF0aWMgQzRfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzRfdDtcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBzdGF0aWMgQ09MT1JfUkdCQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX1JHQjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuY2xhc3MgbW90aW9uX21vZGVsIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgVDA6IG1hdHJpeF90XG4gICAgVDE6IG1hdHJpeF90XG4gICAgQXRBOiBtYXRyaXhfdFxuICAgIEF0QjogbWF0cml4X3RcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5UMCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5UMSA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEEgPSBuZXcgbWF0cml4X3QoNiwgNiwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRCID0gbmV3IG1hdHJpeF90KDYsIDEsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBzcXIoeDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgVDA6IG51bWJlcltdLCBUMTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHM6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBqID0gMCwgayA9IDAsIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkeDEgPSAwLjAsIGR5MSA9IDAuMCwgZHgyID0gMC4wLCBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeDIgKiBkeTEgLSBkeTIgKiBkeDEpIDw9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIChNYXRoLmFicyhkeDEpICsgTWF0aC5hYnMoZHkxKSArIE1hdGguYWJzKGR4MikgKyBNYXRoLmFicyhkeTIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBydW4oZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgbW9kZWw6IHsgdHlwZT86IGFueTsgZGF0YTogYW55IH0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgcHggPSAwLjAsIHB5ID0gMC4wO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmNsYXNzIGhvbW9ncmFwaHkyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgbUx0TDogbWF0cml4X3RcbiAgICBFdmVjOiBtYXRyaXhfdFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIG1vZGVsOiBtYXRyaXhfdCwgY291bnQ6IG51bWJlcikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIEx0TCA9IHRoaXMubUx0TC5kYXRhLCBldmQgPSB0aGlzLkV2ZWMuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLjAsIHkgPSAwLjAsIFggPSAwLjAsIFkgPSAwLjA7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGpzZmVhdE5leHQubGluYWxnKCk7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG5cbiAgICAgICAgLy8gbm9ybVxuICAgICAgICB2YXIgc214ID0gMC4wLCBzbXkgPSAwLjAsIGNteCA9IDAuMCwgY215ID0gMC4wLCBzTXggPSAwLjAsIHNNeSA9IDAuMCwgY014ID0gMC4wLCBjTXkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjbXggKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGNteSArPSB0b1tpXS55O1xuICAgICAgICAgICAgY014ICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGNNeSArPSBmcm9tW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjbXggLz0gY291bnQ7IGNteSAvPSBjb3VudDtcbiAgICAgICAgY014IC89IGNvdW50OyBjTXkgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHNteCArPSBNYXRoLmFicyh0b1tpXS54IC0gY214KTtcbiAgICAgICAgICAgIHNteSArPSBNYXRoLmFicyh0b1tpXS55IC0gY215KTtcbiAgICAgICAgICAgIHNNeCArPSBNYXRoLmFicyhmcm9tW2ldLnggLSBjTXgpO1xuICAgICAgICAgICAgc015ICs9IE1hdGguYWJzKGZyb21baV0ueSAtIGNNeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc214KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc215KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc014KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc015KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikgcmV0dXJuIDA7XG5cbiAgICAgICAgc214ID0gY291bnQgLyBzbXg7IHNteSA9IGNvdW50IC8gc215O1xuICAgICAgICBzTXggPSBjb3VudCAvIHNNeDsgc015ID0gY291bnQgLyBzTXk7XG5cbiAgICAgICAgdDBkWzBdID0gc014OyB0MGRbMV0gPSAwOyB0MGRbMl0gPSAtY014ICogc014O1xuICAgICAgICB0MGRbM10gPSAwOyB0MGRbNF0gPSBzTXk7IHQwZFs1XSA9IC1jTXkgKiBzTXk7XG4gICAgICAgIHQwZFs2XSA9IDA7IHQwZFs3XSA9IDA7IHQwZFs4XSA9IDE7XG5cbiAgICAgICAgdDFkWzBdID0gMS4wIC8gc214OyB0MWRbMV0gPSAwOyB0MWRbMl0gPSBjbXg7XG4gICAgICAgIHQxZFszXSA9IDA7IHQxZFs0XSA9IDEuMCAvIHNteTsgdDFkWzVdID0gY215O1xuICAgICAgICB0MWRbNl0gPSAwOyB0MWRbN10gPSAwOyB0MWRbOF0gPSAxO1xuICAgICAgICAvL1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdCBzeXN0ZW1cbiAgICAgICAgaSA9IDgxO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIEx0TFtpXSA9IDAuMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgeCA9ICh0b1tpXS54IC0gY214KSAqIHNteDtcbiAgICAgICAgICAgIHkgPSAodG9baV0ueSAtIGNteSkgKiBzbXk7XG4gICAgICAgICAgICBYID0gKGZyb21baV0ueCAtIGNNeCkgKiBzTXg7XG4gICAgICAgICAgICBZID0gKGZyb21baV0ueSAtIGNNeSkgKiBzTXk7XG5cbiAgICAgICAgICAgIEx0TFswXSArPSBYICogWDtcbiAgICAgICAgICAgIEx0TFsxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFsyXSArPSBYO1xuXG4gICAgICAgICAgICBMdExbNl0gKz0gWCAqIC14ICogWDtcbiAgICAgICAgICAgIEx0TFs3XSArPSBYICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzhdICs9IFggKiAteDtcbiAgICAgICAgICAgIEx0TFsxMF0gKz0gWSAqIFk7XG4gICAgICAgICAgICBMdExbMTFdICs9IFk7XG5cbiAgICAgICAgICAgIEx0TFsxNV0gKz0gWSAqIC14ICogWDtcbiAgICAgICAgICAgIEx0TFsxNl0gKz0gWSAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFsxN10gKz0gWSAqIC14O1xuICAgICAgICAgICAgTHRMWzIwXSArPSAxLjA7XG5cbiAgICAgICAgICAgIEx0TFsyNF0gKz0gLXggKiBYO1xuICAgICAgICAgICAgTHRMWzI1XSArPSAteCAqIFk7XG4gICAgICAgICAgICBMdExbMjZdICs9IC14O1xuICAgICAgICAgICAgTHRMWzMwXSArPSBYICogWDtcbiAgICAgICAgICAgIEx0TFszMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMzJdICs9IFg7XG4gICAgICAgICAgICBMdExbMzNdICs9IFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbMzRdICs9IFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbMzVdICs9IFggKiAteTtcbiAgICAgICAgICAgIEx0TFs0MF0gKz0gWSAqIFk7XG4gICAgICAgICAgICBMdExbNDFdICs9IFk7XG4gICAgICAgICAgICBMdExbNDJdICs9IFkgKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNDNdICs9IFkgKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNDRdICs9IFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs1MF0gKz0gMS4wO1xuICAgICAgICAgICAgTHRMWzUxXSArPSAteSAqIFg7XG4gICAgICAgICAgICBMdExbNTJdICs9IC15ICogWTtcbiAgICAgICAgICAgIEx0TFs1M10gKz0gLXk7XG4gICAgICAgICAgICBMdExbNjBdICs9IC14ICogWCAqIC14ICogWCArIC15ICogWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs2MV0gKz0gLXggKiBYICogLXggKiBZICsgLXkgKiBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzYyXSArPSAteCAqIFggKiAteCArIC15ICogWCAqIC15O1xuICAgICAgICAgICAgTHRMWzcwXSArPSAteCAqIFkgKiAteCAqIFkgKyAteSAqIFkgKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNzFdICs9IC14ICogWSAqIC14ICsgLXkgKiBZICogLXk7XG4gICAgICAgICAgICBMdExbODBdICs9IC14ICogLXggKyAteSAqIC15O1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gc3ltbWV0cnlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDk7ICsraSkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsrailcbiAgICAgICAgICAgICAgICBMdExbaSAqIDkgKyBqXSA9IEx0TFtqICogOSArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgX2xpbmFsZy5laWdlblZWKHRoaXMubUx0TCwgdGhpcy5FdmVjKTtcblxuICAgICAgICBtZFswXSA9IGV2ZFs3Ml0sIG1kWzFdID0gZXZkWzczXSwgbWRbMl0gPSBldmRbNzRdO1xuICAgICAgICBtZFszXSA9IGV2ZFs3NV0sIG1kWzRdID0gZXZkWzc2XSwgbWRbNV0gPSBldmRbNzddO1xuICAgICAgICBtZFs2XSA9IGV2ZFs3OF0sIG1kWzddID0gZXZkWzc5XSwgbWRbOF0gPSBldmRbODBdO1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBzZXQgYm90dG9tIHJpZ2h0IHRvIDEuMFxuICAgICAgICB4ID0gMS4wIC8gbWRbOF07XG4gICAgICAgIG1kWzBdICo9IHg7IG1kWzFdICo9IHg7IG1kWzJdICo9IHg7XG4gICAgICAgIG1kWzNdICo9IHg7IG1kWzRdICo9IHg7IG1kWzVdICo9IHg7XG4gICAgICAgIG1kWzZdICo9IHg7IG1kWzddICo9IHg7IG1kWzhdID0gMS4wO1xuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlcnJvcihmcm9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgdG86IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBtb2RlbDogbWF0cml4X3QsIGVycjogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHd3ID0gMC4wLCBkeCA9IDAuMCwgZHkgPSAwLjA7XG4gICAgICAgIHZhciBtID0gbW9kZWwuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB0MCA9IGZyb21baV07XG4gICAgICAgICAgICBwdDEgPSB0b1tpXTtcblxuICAgICAgICAgICAgd3cgPSAxLjAgLyAobVs2XSAqIHB0MC54ICsgbVs3XSAqIHB0MC55ICsgMS4wKTtcbiAgICAgICAgICAgIGR4ID0gKG1bMF0gKiBwdDAueCArIG1bMV0gKiBwdDAueSArIG1bMl0pICogd3cgLSBwdDEueDtcbiAgICAgICAgICAgIGR5ID0gKG1bM10gKiBwdDAueCArIG1bNF0gKiBwdDAueSArIG1bNV0pICogd3cgLSBwdDEueTtcbiAgICAgICAgICAgIGVycltpXSA9IChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tfc3Vic2V0KGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgLy8gc2VlbXMgdG8gcmVqZWN0IGdvb2Qgc3Vic2V0cyBhY3R1YWxseVxuICAgICAgICAvL2lmKCBoYXZlX2NvbGxpbmVhcl9wb2ludHMoZnJvbSwgY291bnQpIHx8IGhhdmVfY29sbGluZWFyX3BvaW50cyh0bywgY291bnQpICkge1xuICAgICAgICAvL3JldHVybiBmYWxzZTtcbiAgICAgICAgLy99XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIGlmIChjb3VudCA9PSA0KSB7XG4gICAgICAgICAgICB2YXIgbmVnYXRpdmUgPSAwO1xuXG4gICAgICAgICAgICB2YXIgZnAwID0gZnJvbVswXSwgZnAxID0gZnJvbVsxXSwgZnAyID0gZnJvbVsyXSwgZnAzID0gZnJvbVszXTtcbiAgICAgICAgICAgIHZhciB0cDAgPSB0b1swXSwgdHAxID0gdG9bMV0sIHRwMiA9IHRvWzJdLCB0cDMgPSB0b1szXTtcblxuICAgICAgICAgICAgLy8gc2V0MVxuICAgICAgICAgICAgdmFyIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueSwgQTEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueSwgQTIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEzMSA9IGZwMi54LCBBMzIgPSBmcDIueSwgQTMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgQjExID0gdHAwLngsIEIxMiA9IHRwMC55LCBCMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55LCBCMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjMxID0gdHAyLngsIEIzMiA9IHRwMi55LCBCMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgdmFyIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDJcbiAgICAgICAgICAgIEExMSA9IGZwMS54LCBBMTIgPSBmcDEueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAxLngsIEIxMiA9IHRwMS55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0M1xuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQ0XG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIGlmIChuZWdhdGl2ZSAhPSAwICYmIG5lZ2F0aXZlICE9IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGFsbCBnb29kXG4gICAgfVxufVxuXG5qc2ZlYXROZXh0LmNhY2hlID0gY2FjaGU7XG5cbmpzZmVhdE5leHQucHlyYW1pZF90ID0gY2xhc3MgcHlyYW1pZF90IGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIGxldmVsczogbnVtYmVyO1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBweXJkb3duOiBhbnk7XG4gICAgY29uc3RydWN0b3IobGV2ZWxzOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHMgfCAwO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobGV2ZWxzKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpO1xuICAgICAgICB0aGlzLnB5cmRvd24gPSBfaW1ncHJvYy5weXJkb3duO1xuICAgIH1cbiAgICBhbGxvY2F0ZShzdGFydF93OiBudW1iZXIsIHN0YXJ0X2g6IG51bWJlciwgZGF0YV90eXBlOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxldmVscztcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcgbWF0cml4X3Qoc3RhcnRfdyA+PiBpLCBzdGFydF9oID4+IGksIGRhdGFfdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnVpbGQoaW5wdXQ6IG1hdHJpeF90LCBza2lwX2ZpcnN0X2xldmVsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpcF9maXJzdF9sZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBza2lwX2ZpcnN0X2xldmVsID0gdHJ1ZTsgfVxuICAgICAgICAvLyBqdXN0IGNvcHkgZGF0YSB0byBmaXJzdCBsZXZlbFxuICAgICAgICB2YXIgaSA9IDIsIGEgPSBpbnB1dCwgYjogYW55ID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBpZiAoIXNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBqID0gaW5wdXQuY29scyAqIGlucHV0LnJvd3M7XG4gICAgICAgICAgICB3aGlsZSAoLS1qID49IDApIHtcbiAgICAgICAgICAgICAgICBiLmRhdGFbal0gPSBpbnB1dC5kYXRhW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGIgPSB0aGlzLmRhdGFbMV07XG4gICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgZm9yICg7IGkgPCB0aGlzLmxldmVsczsgKytpKSB7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0aGlzLmRhdGFbaV07XG4gICAgICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0Lm1hdHJpeF90ID0gbWF0cml4X3Q7XG5cbmpzZmVhdE5leHQua2V5cG9pbnRfdCA9IGtleXBvaW50X3Q7XG5cbmpzZmVhdE5leHQuaW1ncHJvYyA9IGNsYXNzIGltZ3Byb2MgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9O1xuICAgIGdyYXlzY2FsZShzcmM6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IHZvaWQ7IGRhdGE6IGFueSB9LCBjb2RlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBkZWZhdWx0IGltYWdlIGRhdGEgcmVwcmVzZW50YXRpb24gaW4gYnJvd3NlclxuICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT09IFwidW5kZWZpbmVkXCIpIHsgY29kZSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZOyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIGkgPSAwLCBqID0gMCwgaXIgPSAwLCBqciA9IDA7XG4gICAgICAgIHZhciBjb2VmZl9yID0gNDg5OSwgY29lZmZfZyA9IDk2MTcsIGNvZWZmX2IgPSAxODY4LCBjbiA9IDQ7XG5cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjb2VmZl9yID0gMTg2ODtcbiAgICAgICAgICAgIGNvZWZmX2IgPSA0ODk5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjbiA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNuMiA9IGNuIDw8IDEsIGNuMyA9IChjbiAqIDMpIHwgMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDEpO1xuICAgICAgICB2YXIgZHN0X3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSwgaiArPSB3LCBpICs9IHcgKiBjbikge1xuICAgICAgICAgICAgZm9yICh4ID0gMCwgaXIgPSBpLCBqciA9IGo7IHggPD0gdyAtIDQ7IHggKz0gNCwgaXIgKz0gY24gPDwgMiwganIgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAxXSA9IChzcmNbaXIgKyBjbl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24gKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDJdID0gKHNyY1tpciArIGNuMl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24yICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24yICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgM10gPSAoc3JjW2lyICsgY24zXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjMgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjMgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK2pyLCBpciArPSBjbikge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkZXJpdmVkIGZyb20gQ0NWIGxpYnJhcnlcbiAgICByZXNhbXBsZShzcmM6IGFueSwgZHN0OiBhbnksIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGggPSBzcmMucm93cywgdyA9IHNyYy5jb2xzO1xuICAgICAgICBpZiAoaCA+IG5oICYmIHcgPiBudykge1xuICAgICAgICAgICAgZHN0LnJlc2l6ZShudywgbmgsIHNyYy5jaGFubmVsKTtcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBmYXN0IGFsdGVybmF0aXZlIChmaXggcG9pbnQgc2NhbGUsIDB4MTAwIHRvIGF2b2lkIG92ZXJmbG93KVxuICAgICAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGRzdC50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGggKiB3IC8gKG5oICogbncpIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGVfdTgoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZShzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBib3hfYmx1cl9ncmF5KHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyBjaGFubmVsOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9LCByYWRpdXM6IG51bWJlciwgb3B0aW9uczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfVxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIGgyID0gaCA8PCAxLCB3MiA9IHcgPDwgMTtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMCwgeSA9IDAsIGVuZCA9IDA7XG4gICAgICAgIHZhciB3aW5kb3dTaXplID0gKChyYWRpdXMgPDwgMSkgKyAxKSB8IDA7XG4gICAgICAgIHZhciByYWRpdXNQbHVzT25lID0gKHJhZGl1cyArIDEpIHwgMCwgcmFkaXVzUGx1czIgPSAocmFkaXVzUGx1c09uZSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHNjYWxlID0gb3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRSA/IDEgOiAoMS4wIC8gKHdpbmRvd1NpemUgKiB3aW5kb3dTaXplKSk7XG5cbiAgICAgICAgdmFyIHRtcF9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsIGRzdEluZGV4ID0gMCwgc3JjSW5kZXggPSAwLCBuZXh0UGl4ZWxJbmRleCA9IDAsIHByZXZpb3VzUGl4ZWxJbmRleCA9IDA7XG4gICAgICAgIHZhciBkYXRhX2kzMiA9IHRtcF9idWZmLmkzMjsgLy8gdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICB2YXIgZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgaG9sZCA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgLy8gZmlyc3QgcGFzc1xuICAgICAgICAvLyBubyBuZWVkIHRvIHNjYWxlIFxuICAgICAgICAvL2RhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSkge1xuICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfdThbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gKHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZSkgfCAwO1xuICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IGgyKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4ICsgaF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcmNJbmRleCArPSB3O1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNlY29uZCBwYXNzXG4gICAgICAgIHNyY0luZGV4ID0gMDtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDsgLy8gdGhpcyBpcyBhIHRyYW5zcG9zZVxuICAgICAgICBkYXRhX3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgLy8gZG9udCBzY2FsZSByZXN1bHRcbiAgICAgICAgaWYgKHNjYWxlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHRtcF9idWZmKTtcbiAgICB9XG4gICAgZ2F1c3NpYW5fYmx1cihzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IHR5cGU6IGFueTsgY2hhbm5lbDogYW55OyBkYXRhOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9LCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBzaWdtYTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBqc2ZlYXRtYXRoID0gbmV3IGpzZmVhdE5leHQubWF0aCgpO1xuICAgICAgICBpZiAodHlwZW9mIHNpZ21hID09PSBcInVuZGVmaW5lZFwiKSB7IHNpZ21hID0gMC4wOyB9XG4gICAgICAgIGlmICh0eXBlb2Yga2VybmVsX3NpemUgPT09IFwidW5kZWZpbmVkXCIpIHsga2VybmVsX3NpemUgPSAwOyB9XG4gICAgICAgIGtlcm5lbF9zaXplID0ga2VybmVsX3NpemUgPT0gMCA/IChNYXRoLm1heCgxLCAoNC4wICogc2lnbWEgKyAxLjAgLSAxZS04KSkgKiAyICsgMSkgfCAwIDoga2VybmVsX3NpemU7XG4gICAgICAgIHZhciBoYWxmX2tlcm5lbCA9IGtlcm5lbF9zaXplID4+IDE7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRhdGFfdHlwZSA9IHNyYy50eXBlLCBpc191OCA9IGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIGJ1ZiwgZmlsdGVyLCBidWZfc3ogPSAoa2VybmVsX3NpemUgKyBNYXRoLm1heChoLCB3KSkgfCAwO1xuXG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihidWZfc3ogPDwgMik7XG4gICAgICAgIHZhciBmaWx0X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoa2VybmVsX3NpemUgPDwgMik7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuaTMyO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAganNmZWF0bWF0aC5nZXRfZ2F1c3NpYW5fa2VybmVsKGtlcm5lbF9zaXplLCBzaWdtYSwgZmlsdGVyLCBkYXRhX3R5cGUpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbnZvbChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGZpbHRfbm9kZSk7XG4gICAgfVxuICAgIGhvdWdoX3RyYW5zZm9ybShpbWc6IGFueSwgcmhvX3JlczogbnVtYmVyLCB0aGV0YV9yZXM6IG51bWJlciwgdGhyZXNob2xkOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1nLmRhdGE7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLmNvbHM7XG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcucm93cztcbiAgICAgICAgdmFyIHN0ZXAgPSB3aWR0aDtcblxuICAgICAgICB2YXIgbWluX3RoZXRhID0gMC4wO1xuICAgICAgICB2YXIgbWF4X3RoZXRhID0gTWF0aC5QSTtcblxuICAgICAgICB2YXIgbnVtYW5nbGUgPSBNYXRoLnJvdW5kKChtYXhfdGhldGEgLSBtaW5fdGhldGEpIC8gdGhldGFfcmVzKTtcbiAgICAgICAgdmFyIG51bXJobyA9IE1hdGgucm91bmQoKCh3aWR0aCArIGhlaWdodCkgKiAyICsgMSkgLyByaG9fcmVzKTtcbiAgICAgICAgdmFyIGlyaG8gPSAxLjAgLyByaG9fcmVzO1xuXG4gICAgICAgIHZhciBhY2N1bSA9IG5ldyBJbnQzMkFycmF5KChudW1hbmdsZSArIDIpICogKG51bXJobyArIDIpKTsgLy90eXBlZCBhcnJheXMgYXJlIGluaXRpYWxpemVkIHRvIDBcbiAgICAgICAgdmFyIHRhYlNpbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuICAgICAgICB2YXIgdGFiQ29zID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG5cbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgYW5nID0gbWluX3RoZXRhO1xuICAgICAgICBmb3IgKDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgIHRhYlNpbltuXSA9IE1hdGguc2luKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgdGFiQ29zW25dID0gTWF0aC5jb3MoYW5nKSAqIGlyaG87XG4gICAgICAgICAgICBhbmcgKz0gdGhldGFfcmVzXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAxLiBmaWxsIGFjY3VtdWxhdG9yXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZVtpICogc3RlcCArIGpdICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyLCAobisxKSAqIChudW1yaG8rMikgKyByKzEsIHRhYkNvc1tuXSwgdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucm91bmQoaiAqIHRhYkNvc1tuXSArIGkgKiB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAobnVtcmhvIC0gMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW1bKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMi4gZmluZCBsb2NhbCBtYXhpbXVtc1xuICAgICAgICAvL1RPRE86IENvbnNpZGVyIG1ha2luZyBhIHZlY3RvciBjbGFzcyB0aGF0IHVzZXMgdHlwZWQgYXJyYXlzXG4gICAgICAgIHZhciBfc29ydF9idWYgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBudW1yaG87IHIrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSAobiArIDEpICogKG51bXJobyArIDIpICsgciArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGFjY3VtW2Jhc2VdID4gdGhyZXNob2xkICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIDFdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSBudW1yaG8gLSAyXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgbnVtcmhvICsgMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvcnRfYnVmLnB1c2goYmFzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMy4gc29ydCB0aGUgZGV0ZWN0ZWQgbGluZXMgYnkgYWNjdW11bGF0b3IgdmFsdWVcbiAgICAgICAgX3NvcnRfYnVmLnNvcnQoZnVuY3Rpb24gKGwxLCBsMikge1xuICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+PHVua25vd24+KGFjY3VtW2wxXSA+IGFjY3VtW2wyXSB8fCAoYWNjdW1bbDFdID09IGFjY3VtW2wyXSAmJiBsMSA8IGwyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YWdlIDQuIHN0b3JlIHRoZSBmaXJzdCBtaW4odG90YWwsbGluZXNNYXgpIGxpbmVzIHRvIHRoZSBvdXRwdXQgYnVmZmVyXG4gICAgICAgIHZhciBsaW5lc01heCA9IE1hdGgubWluKG51bWFuZ2xlICogbnVtcmhvLCBfc29ydF9idWYubGVuZ3RoKTtcbiAgICAgICAgdmFyIHNjYWxlID0gMS4wIC8gKG51bXJobyArIDIpO1xuICAgICAgICB2YXIgbGluZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc01heDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX3NvcnRfYnVmW2ldO1xuICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKGlkeCAqIHNjYWxlKSAtIDE7XG4gICAgICAgICAgICB2YXIgciA9IGlkeCAtIChuICsgMSkgKiAobnVtcmhvICsgMikgLSAxO1xuICAgICAgICAgICAgdmFyIGxyaG8gPSAociAtIChudW1yaG8gLSAxKSAqIDAuNSkgKiByaG9fcmVzO1xuICAgICAgICAgICAgdmFyIGxhbmdsZSA9IG4gKiB0aGV0YV9yZXM7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtscmhvLCBsYW5nbGVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIHB5cmRvd24oc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBjaGFubmVsOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogbnVtYmVyLCBhcmcxOiBudW1iZXIsIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIHN4OiBudW1iZXIsIHN5OiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIGJiZlxuICAgICAgICBpZiAodHlwZW9mIHN4ID09PSBcInVuZGVmaW5lZFwiKSB7IHN4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN5ID09PSBcInVuZGVmaW5lZFwiKSB7IHN5ID0gMDsgfVxuXG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHcyID0gdyA+PiAxLCBoMiA9IGggPj4gMTtcbiAgICAgICAgdmFyIF93MiA9IHcyIC0gKHN4IDw8IDEpLCBfaDIgPSBoMiAtIChzeSA8PCAxKTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgc3B0ciA9IHN4ICsgc3kgKiB3LCBzbGluZSA9IDAsIGRwdHIgPSAwLCBkbGluZSA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3MiwgaDIsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgX2gyOyArK3kpIHtcbiAgICAgICAgICAgIHNsaW5lID0gc3B0cjtcbiAgICAgICAgICAgIGRsaW5lID0gZHB0cjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gX3cyIC0gMjsgeCArPSAyLCBkbGluZSArPSAyLCBzbGluZSArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lICsgMV0gPSAoc3JjX2Rbc2xpbmUgKyAyXSArIHNyY19kW3NsaW5lICsgM10gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHcgKyAyXSArIHNyY19kW3NsaW5lICsgdyArIDNdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgX3cyOyArK3gsICsrZGxpbmUsIHNsaW5lICs9IDIpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHRyICs9IHcgPDwgMTtcbiAgICAgICAgICAgIGRwdHIgKz0gdzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNjaGFycl9kZXJpdmF0aXZlcyhzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgdHlwZTogbnVtYmVyIH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogbnVtYmVyKSA9PiB2b2lkOyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4ICsgMV0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsreDEpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeF0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYSArIHRyb3cxW3hdKSAqIDMgKyBiICogMTApO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChmIC0gdHJvdzBbeCArIDFdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKGMgKyBiKSAqIDMgKyBhICogMTApO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNF0gLSBlKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgoZCArIGEpICogMyArIGMgKiAxMCkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDVdIC0gZikpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKHRyb3cxW3ggKyA1XSArIGMpICogMyArIGQgKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyAyXSAtIHRyb3cwW3hdKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDJdICsgdHJvdzFbeF0pICogMyArIHRyb3cxW3ggKyAxXSAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cbiAgICAvLyBjb21wdXRlIGdyYWRpZW50IHVzaW5nIFNvYmVsIGtlcm5lbCBbMSAyIDFdICogWy0xIDAgMV1eVFxuICAgIC8vIGRzdDogW2d4LGd5LC4uLl1cbiAgICBzb2JlbF9kZXJpdmF0aXZlcyhzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgdHlwZTogbnVtYmVyIH0sIGRzdDogbWF0cml4X3QpIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZHN0ZXAgPSB3IDw8IDEsIHggPSAwLCB5ID0gMCwgeDEgPSAwLCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgICAgICB2YXIgc3JvdzAgPSAwLCBzcm93MSA9IDAsIHNyb3cyID0gMCwgZHJvdyA9IDA7XG4gICAgICAgIHZhciB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICB2YXIgYnVmMF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG4gICAgICAgIHZhciBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4XSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeCArIDFdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsreDEpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4XSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07IHRyb3cwW3hdID0gdHJvdzBbd107XG4gICAgICAgICAgICB0cm93MVswXSA9IHRyb3cxWzFdOyB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgYSA9IHRyb3cxW3ggKyAyXSwgYiA9IHRyb3cxW3ggKyAxXSwgYyA9IHRyb3cxW3ggKyAzXSwgZCA9IHRyb3cxW3ggKyA0XSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IHRyb3cwW3ggKyAyXSwgZiA9IHRyb3cwW3ggKyAzXTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoYSArIHRyb3cxW3hdICsgYiAqIDIpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChmIC0gdHJvdzBbeCArIDFdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoYyArIGIgKyBhICogMik7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDRdIC0gZSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGQgKyBhICsgYyAqIDIpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNV0gLSBmKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzFbeCArIDVdICsgYyArIGQgKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyAyXSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzFbeCArIDJdICsgdHJvdzFbeF0gKyB0cm93MVt4ICsgMV0gKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIHBsZWFzZSBub3RlOiBcbiAgICAvLyBkc3RfKHR5cGUpIHNpemUgc2hvdWxkIGJlIGNvbHMgPSBzcmMuY29scysxLCByb3dzID0gc3JjLnJvd3MrMVxuICAgIGNvbXB1dGVfaW50ZWdyYWxfaW1hZ2Uoc3JjOiB7IGNvbHM6IG51bWJlcjsgcm93czogbnVtYmVyOyBkYXRhOiBhbnkgfSwgZHN0X3N1bTogbnVtYmVyW10sIGRzdF9zcXN1bTogbnVtYmVyW10sIGRzdF90aWx0ZWQ6IGFueVtdKSB7XG4gICAgICAgIHZhciB3MCA9IHNyYy5jb2xzIHwgMCwgaDAgPSBzcmMucm93cyB8IDAsIHNyY19kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciB3MSA9ICh3MCArIDEpIHwgMDtcbiAgICAgICAgdmFyIHMgPSAwLCBzMiA9IDAsIHAgPSAwLCBwdXAgPSAwLCBpID0gMCwgaiA9IDAsIHYgPSAwLCBrID0gMDtcblxuICAgICAgICBpZiAoZHN0X3N1bSAmJiBkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwLCBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHN0X3RpbHRlZCkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwICsgMV0gPSBzcmNfZFtrICsgMV0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyB3MCkgfCAwLCBwdXAgPSB3MDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoMDsgKytpLCBwICs9IHcxLCBwdXAgKz0gdzEpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gdzAgLSAxOyBqID4gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgcCA9IGogKyBoMCAqIHcxLCBwdXAgPSBwIC0gdzE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaDA7IGkgPiAwOyAtLWksIHAgLT0gdzEsIHB1cCAtPSB3MSkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFsaXplX2hpc3RvZ3JhbShzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgY2hhbm5lbDogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGEsIHNpemUgPSB3ICogaDtcbiAgICAgICAgdmFyIGkgPSAwLCBwcmV2ID0gMCwgaGlzdDAsIG5vcm07XG5cbiAgICAgICAgdmFyIGhpc3QwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoMjU2IDw8IDIpO1xuICAgICAgICBoaXN0MCA9IGhpc3QwX25vZGUuaTMyO1xuICAgICAgICBmb3IgKDsgaSA8IDI1NjsgKytpKSBoaXN0MFtpXSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICsraGlzdDBbc3JjX2RbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldiA9IGhpc3QwWzBdO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgICAgIHByZXYgPSBoaXN0MFtpXSArPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgbm9ybSA9IDI1NSAvIHNpemU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGRzdF9kW2ldID0gKGhpc3QwW3NyY19kW2ldXSAqIG5vcm0gKyAwLjUpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaGlzdDBfbm9kZSk7XG4gICAgfVxuICAgIGNhbm55KHNyYzogYW55LCBkc3Q6IGFueSwgbG93X3RocmVzaDogbnVtYmVyLCBoaWdoX3RocmVzaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBqOiBudW1iZXIgPSAwLCBncmFkID0gMCwgdzIgPSB3IDw8IDEsIF9ncmFkID0gMCwgc3VwcHJlc3MgPSAwLCBmID0gMCwgeCA9IDAsIHkgPSAwLCBzID0gMDtcbiAgICAgICAgdmFyIHRnMjJ4ID0gMCwgdGc2N3ggPSAwO1xuXG4gICAgICAgIC8vIGNhY2hlIGJ1ZmZlcnNcbiAgICAgICAgdmFyIGR4ZHlfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaCAqIHcyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgzICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBtYXBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoKGggKyAyKSAqICh3ICsgMikpIDw8IDIpO1xuICAgICAgICB2YXIgc3RhY2tfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaCAqIHcpIDw8IDIpO1xuXG5cbiAgICAgICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIG1hcDogbnVtYmVyW10gPSA8bnVtYmVyW10+bWFwX25vZGUuaTMyO1xuICAgICAgICB2YXIgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHkgPSBkeGR5X25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeV9tID0gbmV3IG1hdHJpeF90KHcsIGgsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZHhkeV9ub2RlLmRhdGEpO1xuICAgICAgICB2YXIgcm93MCA9IDEsIHJvdzEgPSAodyArIDIgKyAxKSB8IDAsIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsIG1hcF93ID0gKHcgKyAyKSB8IDAsIG1hcF9pOiBudW1iZXIgPSAobWFwX3cgKyAxKSB8IDAsIHN0YWNrX2kgPSAwO1xuXG4gICAgICAgIHRoaXMuc29iZWxfZGVyaXZhdGl2ZXMoc3JjLCBkeGR5X20pO1xuXG4gICAgICAgIGlmIChsb3dfdGhyZXNoID4gaGlnaF90aHJlc2gpIHtcbiAgICAgICAgICAgIGkgPSBsb3dfdGhyZXNoO1xuICAgICAgICAgICAgbG93X3RocmVzaCA9IGhpZ2hfdGhyZXNoO1xuICAgICAgICAgICAgaGlnaF90aHJlc2ggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgzICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGJ1ZltpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gKChoICsgMikgKiAodyArIDIpKSB8IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgbWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqLCBncmFkICs9IDIpIHtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSBNYXRoLmFicyhkeGR5W2dyYWRdKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsxXSk7XG4gICAgICAgICAgICB4ID0gZHhkeVtncmFkXSwgeSA9IGR4ZHlbZ3JhZCArIDFdO1xuICAgICAgICAgICAgLy9idWZbcm93MStqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgIGJ1Zltyb3cxICsgal0gPSAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSArICgoeSBeICh5ID4+IDMxKSkgLSAoeSA+PiAzMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSBoOyArK2ksIGdyYWQgKz0gdzIpIHtcbiAgICAgICAgICAgIGlmIChpID09IGgpIHtcbiAgICAgICAgICAgICAgICBqID0gcm93MiArIHc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taiA+PSByb3cyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYnVmW3JvdzIral0gPSAgTWF0aC5hYnMoZHhkeVtncmFkKyhqPDwxKV0pICsgTWF0aC5hYnMoZHhkeVtncmFkKyhqPDwxKSsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W2dyYWQgKyAoaiA8PCAxKV0sIHkgPSBkeGR5W2dyYWQgKyAoaiA8PCAxKSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0geCp4ICsgeSp5O1xuICAgICAgICAgICAgICAgICAgICBidWZbcm93MiArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZ3JhZCA9IChncmFkIC0gdzIpIHwgMDtcbiAgICAgICAgICAgIG1hcFttYXBfaSAtIDFdID0gMDtcbiAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2osIF9ncmFkICs9IDIpIHtcbiAgICAgICAgICAgICAgICBmID0gYnVmW3JvdzEgKyBqXTtcbiAgICAgICAgICAgICAgICBpZiAoZiA+IGxvd190aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGR4ZHlbX2dyYWRdO1xuICAgICAgICAgICAgICAgICAgICB5ID0gZHhkeVtfZ3JhZCArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzID0geCBeIHk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZW1zIG90IGJlIGZhc3RlciB0aGFuIE1hdGguYWJzXG4gICAgICAgICAgICAgICAgICAgIHggPSAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIHkgPSAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIC8veCAqIHRhbigyMi41KSB4ICogdGFuKDY3LjUpID09IDIgKiB4ICsgeCAqIHRhbigyMi41KVxuICAgICAgICAgICAgICAgICAgICB0ZzIyeCA9IHggKiAxMzU3MztcbiAgICAgICAgICAgICAgICAgICAgdGc2N3ggPSB0ZzIyeCArICgoeCArIHgpIDw8IDE1KTtcbiAgICAgICAgICAgICAgICAgICAgeSA8PD0gMTU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5IDwgdGcyMngpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzEgKyBqIC0gMV0gJiYgZiA+PSBidWZbcm93MSArIGogKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gaGlnaF90aHJlc2ggJiYgIXN1cHByZXNzICYmIG1hcFttYXBfaSArIGogLSBtYXBfd10gIT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHkgPiB0ZzY3eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBidWZbcm93MCArIGpdICYmIGYgPj0gYnVmW3JvdzIgKyBqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gaGlnaF90aHJlc2ggJiYgIXN1cHByZXNzICYmIG1hcFttYXBfaSArIGogLSBtYXBfd10gIT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHMgPCAwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBidWZbcm93MCArIGogLSBzXSAmJiBmID4gYnVmW3JvdzIgKyBqICsgc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDA7XG4gICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFwW21hcF9pICsgd10gPSAwO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBqID0gcm93MDtcbiAgICAgICAgICAgIHJvdzAgPSByb3cxO1xuICAgICAgICAgICAgcm93MSA9IHJvdzI7XG4gICAgICAgICAgICByb3cyID0gajtcbiAgICAgICAgfVxuXG4gICAgICAgIGogPSBtYXBfaSAtIG1hcF93IC0gMTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcF93OyArK2ksICsraikge1xuICAgICAgICAgICAgbWFwW2pdID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBwYXRoIGZvbGxvd2luZ1xuICAgICAgICB3aGlsZSAoc3RhY2tfaSA+IDApIHtcbiAgICAgICAgICAgIG1hcF9pID0gc3RhY2tbLS1zdGFja19pXTtcbiAgICAgICAgICAgIG1hcF9pIC09IG1hcF93ICsgMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgLT0gMjtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwX2kgPSBtYXBfdyArIDE7XG4gICAgICAgIHJvdzAgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaDsgKytpLCBtYXBfaSArPSBtYXBfdykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgICAgIGRzdF9kW3JvdzArK10gPSAoTnVtYmVyKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcmVlIGJ1ZmZlcnNcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGR4ZHlfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtYXBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihzdGFja19ub2RlKTtcbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBtYXRyaXhfdFxuICAgIHdhcnBfcGVyc3BlY3RpdmUoc3JjOiB7IGNvbHM6IG51bWJlcjsgcm93czogbnVtYmVyOyBkYXRhOiBhbnkgfSwgZHN0OiB7IGNvbHM6IG51bWJlcjsgcm93czogbnVtYmVyOyBkYXRhOiBhbnkgfSwgdHJhbnNmb3JtOiB7IGRhdGE6IGFueSB9LCBmaWxsX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scyB8IDAsIHNyY19oZWlnaHQgPSBzcmMucm93cyB8IDAsIGRzdF93aWR0aCA9IGRzdC5jb2xzIHwgMCwgZHN0X2hlaWdodCA9IGRzdC5yb3dzIHwgMDtcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgeHMwID0gMC4wLCB5czAgPSAwLjAsIHdzID0gMC4wLCBzYyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdLFxuICAgICAgICAgICAgbTIwID0gdGRbNl0sIG0yMSA9IHRkWzddLCBtMjIgPSB0ZFs4XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMwID0gbTAxICogeSArIG0wMixcbiAgICAgICAgICAgICAgICB5czAgPSBtMTEgKiB5ICsgbTEyLFxuICAgICAgICAgICAgICAgIHdzID0gbTIxICogeSArIG0yMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4czAgKz0gbTAwLCB5czAgKz0gbTEwLCB3cyArPSBtMjApIHtcbiAgICAgICAgICAgICAgICBzYyA9IDEuMCAvIHdzO1xuICAgICAgICAgICAgICAgIHhzID0geHMwICogc2MsIHlzID0geXMwICogc2M7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwLCBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoeHMgPiAwICYmIHlzID4gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5tYXgoeHMgLSBpeHMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBNYXRoLm1heCh5cyAtIGl5cywgMC4wKTtcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gKHNyY193aWR0aCAqIGl5cyArIGl4cykgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG9yIDJ4MyBtYXRyaXhfdCBvbmx5IGZpcnN0IDYgdmFsdWVzIHJlZmVyZW5jZWRcbiAgICB3YXJwX2FmZmluZShzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueSB9LCB0cmFuc2Zvcm06IHsgZGF0YTogYW55IH0sIGZpbGxfdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgZGF0YTogYW55W10gfSwgZHN0OiBudW1iZXJbXSkge1xuICAgICAgICB2YXIgciwgZywgYiwgajtcbiAgICAgICAgdmFyIGkgPSBzcmMud2lkdGggKiBzcmMuaGVpZ2h0O1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBqID0gaSAqIDQ7XG4gICAgICAgICAgICByID0gc3JjLmRhdGFbal07XG4gICAgICAgICAgICBnID0gc3JjLmRhdGFbaiArIDFdO1xuICAgICAgICAgICAgYiA9IHNyYy5kYXRhW2ogKyAyXTtcbiAgICAgICAgICAgIGlmICgociA+IDk1KSAmJiAoZyA+IDQwKSAmJiAoYiA+IDIwKVxuICAgICAgICAgICAgICAgICYmIChyID4gZykgJiYgKHIgPiBiKVxuICAgICAgICAgICAgICAgICYmIChyIC0gTWF0aC5taW4oZywgYikgPiAxNSlcbiAgICAgICAgICAgICAgICAmJiAoTWF0aC5hYnMociAtIGcpID4gMTUpKSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMjU1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5qc2ZlYXROZXh0Lm1hdGggPSBjbGFzcyBtYXRoIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBxc29ydF9zdGFjazogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIsIGtlcm5lbDogYW55LCBkYXRhX3R5cGU6IGFueSkge1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLjAsIHQgPSAwLjAsIHNpZ21hX3ggPSAwLjAsIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIga2Vybl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHNpemUgPDwgMik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYgKChzaXplICYgMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChzaXplID4+IDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4yNSwgX2tlcm5lbFsxXSA9IDAuNSwgX2tlcm5lbFsyXSA9IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMjUgKyAwLjUgKyAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjA2MjUsIF9rZXJuZWxbMV0gPSAwLjI1LCBfa2VybmVsWzJdID0gMC4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wMzEyNSwgX2tlcm5lbFsxXSA9IDAuMTA5Mzc1LCBfa2VybmVsWzJdID0gMC4yMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wMzEyNSArIDAuMTA5Mzc1ICsgMC4yMTg3NSArIDAuMjgxMjUgKyAwLjIxODc1ICsgMC4xMDkzNzUgKyAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZ21hX3ggPSBzaWdtYSA+IDAgPyBzaWdtYSA6ICgoc2l6ZSAtIDEpICogMC41IC0gMS4wKSAqIDAuMyArIDAuODtcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gLTAuNSAvIChzaWdtYV94ICogc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAgeCA9IGkgLSAoc2l6ZSAtIDEpICogMC41O1xuICAgICAgICAgICAgICAgIHQgPSBNYXRoLmV4cChzY2FsZV8yeCAqIHggKiB4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkge1xuICAgICAgICAgICAgLy8gaW50IGJhc2VkIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMjU2LjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzaWMga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAxLjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gX2tlcm5lbFtpXSAqIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihrZXJuX25vZGUpO1xuICAgIH1cblxuICAgIC8vIG1vZGVsIGlzIDN4MyBtYXRyaXhfdFxuICAgIHBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0obW9kZWw6IGFueSwgc3JjX3gwOiBudW1iZXIsIHNyY195MDogbnVtYmVyLCBkc3RfeDA6IG51bWJlciwgZHN0X3kwOiBudW1iZXIsXG4gICAgICAgIHNyY194MTogbnVtYmVyLCBzcmNfeTE6IG51bWJlciwgZHN0X3gxOiBudW1iZXIsIGRzdF95MTogbnVtYmVyLFxuICAgICAgICBzcmNfeDI6IG51bWJlciwgc3JjX3kyOiBudW1iZXIsIGRzdF94MjogbnVtYmVyLCBkc3RfeTI6IG51bWJlcixcbiAgICAgICAgc3JjX3gzOiBudW1iZXIsIHNyY195MzogbnVtYmVyLCBkc3RfeDM6IG51bWJlciwgZHN0X3kzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyLCBjbXA6IGFueSkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBjbGFzcyBsaW5hbGcgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbWF0bWF0aDogbWF0bWF0aDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICB9XG5cbiAgICBKYWNvYmlJbXBsKEE6IG51bWJlcltdLCBhc3RlcDogbnVtYmVyLCBXOiBudW1iZXJbXSwgVjogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG46IG51bWJlcikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgbSA9IDAsIGwgPSAwLCBpZHggPSAwLCBfaW4gPSAwLCBfaW4yID0gMDtcbiAgICAgICAgdmFyIGl0ZXJzID0gMCwgbWF4X2l0ZXIgPSBuICogbiAqIDMwO1xuICAgICAgICB2YXIgbXYgPSAwLjAsIHZhbCA9IDAuMCwgcCA9IDAuMCwgeSA9IDAuMCwgdCA9IDAuMCwgcyA9IDAuMCwgYyA9IDAuMCwgYTAgPSAwLjAsIGIwID0gMC4wO1xuXG4gICAgICAgIHZhciBpbmRSX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcblxuICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSAqIHZzdGVwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkgKiBrXTtcbiAgICAgICAgICAgIGlmIChrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSBrICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogayArIG1dKSwgaSA9IGsgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kQ1trXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobiA+IDEpIGZvciAoOyBpdGVycyA8IG1heF9pdGVyOyBpdGVycysrKSB7XG4gICAgICAgICAgICAvLyBmaW5kIGluZGV4IChrLGwpIG9mIHBpdm90IHBcbiAgICAgICAgICAgIGZvciAoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGluZENbaV0sIGwgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID0gQVthc3RlcCAqIGsgKyBsXTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG5cbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pICogMC41O1xuICAgICAgICAgICAgdCA9IE1hdGguYWJzKHkpICsgaHlwb3QocCwgeSk7XG4gICAgICAgICAgICBzID0gaHlwb3QocCwgdCk7XG4gICAgICAgICAgICBjID0gdCAvIHM7XG4gICAgICAgICAgICBzID0gcCAvIHM7IHQgPSAocCAvIHQpICogcDtcbiAgICAgICAgICAgIGlmICh5IDwgMClcbiAgICAgICAgICAgICAgICBzID0gLXMsIHQgPSAtdDtcbiAgICAgICAgICAgIEFbYXN0ZXAgKiBrICsgbF0gPSAwO1xuXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGlkeCA9IGogPT0gMCA/IGsgOiBsO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSBpZHggKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBtXSksIGkgPSBpZHggKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29ydCBlaWdlbnZhbHVlcyAmIGVpZ2VudmVjdG9yc1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgbSA9IGs7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCAqIG0gKyBpLCB2c3RlcCAqIGsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRSX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kQ19idWZmKTtcbiAgICB9XG5cbiAgICBKYWNvYmlTVkRJbXBsKEF0OiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgX1c6IGFueVtdLCBWdDogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG06IG51bWJlciwgbjogbnVtYmVyLCBuMTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBpdGVyID0gMCwgbWF4X2l0ZXIgPSBNYXRoLm1heChtLCAzMCk7XG4gICAgICAgIHZhciBBaSA9IDAsIEFqID0gMCwgVmkgPSAwLCBWaiA9IDAsIGNoYW5nZWQgPSAwO1xuICAgICAgICB2YXIgYyA9IDAuMCwgcyA9IDAuMCwgdCA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMC4wLCB0MSA9IDAuMCwgc2QgPSAwLjAsIGJldGEgPSAwLjAsIGdhbW1hID0gMC4wLCBkZWx0YSA9IDAuMCwgYSA9IDAuMCwgcCA9IDAuMCwgYiA9IDAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWwgPSAwLjAsIHZhbDAgPSAwLjAsIGFzdW0gPSAwLjA7XG5cbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcblxuICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSAqIGFzdGVwKSB8IDAsIEFqID0gKGogKiBhc3RlcCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBhID0gV1tpXSwgcCA9IDAsIGIgPSBXW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIDFdICogQXRbQWogKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyBrXSAqIEF0W0FqICsga107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcyAqIE1hdGguc3FydChhICogYikpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAoZ2FtbWEgLSBiZXRhKSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEgLyBnYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAgLyAoZ2FtbWEgKiBzICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpIC8gKGdhbW1hICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAgLyAoZ2FtbWEgKiBjICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gMC4wLCBiID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWldICsgcyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpXSArIGMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyAxXSArIHMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyAxXSArIGMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSArIDFdID0gdDA7IEF0W0FqICsgMV0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsga10gKyBzICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIGtdICsgYyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBBdFtBaSArIGtdID0gdDA7IEF0W0FqICsga10gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXW2ldID0gYTsgV1tqXSA9IGI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWaSA9IChpICogdnN0ZXApIHwgMCwgVmogPSAoaiAqIHZzdGVwKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmldICsgcyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaV0gKyBjICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmldID0gdDA7IFZ0W1ZqXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIDFdICsgcyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyAxXSArIGMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyAxXSA9IHQwOyBWdFtWaiArIDFdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyBrXSArIHMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIGtdICsgYyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyBrXSA9IHQwOyBWdFtWaiArIGtdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpICogYXN0ZXAgKyBrLCBqICogYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkgKiB2c3RlcCArIGssIGogKiB2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFWdCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7IGkrKykge1xuXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChzZCA8PSBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBnb3QgYSB6ZXJvIHNpbmd1bGFyIHZhbHVlLCB0aGVuIGluIG9yZGVyIHRvIGdldCB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHNpbmd1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIC8vIHdlIGdlbmVyYXRlIGEgcmFuZG9tIHZlY3RvciwgcHJvamVjdCBpdCB0byB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMsXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgdGhlIHByb2plY3Rpb24gYW5kIG5vcm1hbGl6ZSB0aGUgZGlmZmVyZW5jZS5cbiAgICAgICAgICAgICAgICB2YWwwID0gKDEuMCAvIG0pO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlZCA9IChzZWVkICogMjE0MDEzICsgMjUzMTAxMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICgoKHNlZWQgPj4gMTYpICYgMHg3ZmZmKSAmIDI1NikgIT0gMCA/IHZhbDAgOiAtdmFsMDtcbiAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCAyOyBpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kgKiBhc3RlcCArIGtdICogQXRbaiAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoQXRbaSAqIGFzdGVwICsga10gLSBzZCAqIEF0W2ogKiBhc3RlcCArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wIC8gYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IE1hdGguc3FydChzZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMgPSAoMS4wIC8gc2QpO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBOiB7IGNvbHM6IGFueTsgZGF0YTogYW55IH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHAgPSAxLCBhc3RlcCA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHQsIGFscGhhLCBkLCBzO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtqICogYXN0ZXAgKyBpXSkgPiBNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEZBSUxFRFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayAhPSBpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChhZCwgaSAqIGFzdGVwICsgaiwgayAqIGFzdGVwICsgaiwgdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dhcChiZCwgaSwgaywgdCk7XG4gICAgICAgICAgICAgICAgcCA9IC1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkID0gLTEuMCAvIGFkW2kgKiBhc3RlcCArIGldO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFkW2ogKiBhc3RlcCArIGldICogZDtcblxuICAgICAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhZFtqICogYXN0ZXAgKyBrXSArPSBhbHBoYSAqIGFkW2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJkW2pdICs9IGFscGhhICogYmRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkW2kgKiBhc3RlcCArIGldID0gLWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBhc3RlcCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBzID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzIC09IGFkW2kgKiBhc3RlcCArIGtdICogYmRba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHMgKiBhZFtpICogYXN0ZXAgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxOyAvLyBPS1xuICAgIH1cblxuICAgIGNob2xlc2t5X3NvbHZlKEE6IHsgY29sczogYW55OyBkYXRhOiBhbnkgfSwgQjogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQTogYW55LCBXOiBtYXRyaXhfdCwgVTogbWF0cml4X3QsIFY6IG1hdHJpeF90LCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9O1xuICAgICAgICB2YXIgYXQgPSAwLCBpID0gMCwgaiA9IDAsIF9tID0gQS5yb3dzLCBfbiA9IEEuY29scywgbSA9IF9tLCBuID0gX247XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDsgLy8gd2Ugb25seSB3b3JrIHdpdGggc2luZ2xlIGNoYW5uZWwgXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyIH0sIFg6IHsgZGF0YTogbnVtYmVyW10gfSwgQjogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpOiBtYXRyaXhfdCwgQTogbWF0cml4X3QpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQTogbWF0cml4X3QsIHZlY3RzOiBtYXRyaXhfdCwgdmFsczogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBhbnkgfSB9KSB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpSW1wbChhX210LmRhdGEsIG4sIHdfbXQuZGF0YSwgdmVjdHMgPyB2ZWN0cy5kYXRhIDogbnVsbCwgbiwgbik7XG5cbiAgICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHMuZGF0YVtuXSA9IHdfbXQuZGF0YVtuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQub3JiID0gY2xhc3Mgb3JiIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgYml0X3BhdHRlcm5fMzFfOiBJbnQzMkFycmF5XG4gICAgSDogbWF0cml4X3RcbiAgICBwYXRjaF9pbWc6IG1hdHJpeF90XG4gICAgaW1ncHJvYzogaW1ncHJvYztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLmltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgfVxuXG4gICAgZGVzY3JpYmUoc3JjOiB7IGRhdGE6IGFueTsgY29sczogYW55OyByb3dzOiBhbnkgfSwgY29ybmVyczogeyB4OiBudW1iZXIsIHk6IG51bWJlciwgYW5nbGU6IG51bWJlciB9W10sIGNvdW50OiBudW1iZXIsIGRlc2NyaXB0b3JzOiB7IHR5cGU6IG51bWJlcjsgY29sczogbnVtYmVyOyByb3dzOiBhbnk7IGNoYW5uZWw6IG51bWJlcjsgYWxsb2NhdGU6ICgpID0+IHZvaWQ7IHJlc2l6ZTogKGFyZzA6IG51bWJlciwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciBERVNDUl9TSVpFID0gMzI7IC8vIGJ5dGVzO1xuICAgICAgICB2YXIgaSA9IDAsIGIgPSAwLCBweCA9IDAuMCwgcHkgPSAwLjAsIGFuZ2xlID0gMC4wO1xuICAgICAgICB2YXIgdDAgPSAwLCB0MSA9IDAsIHZhbCA9IDA7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBwYXRjaF9kID0gdGhpcy5wYXRjaF9pbWcuZGF0YTtcbiAgICAgICAgdmFyIHBhdGNoX29mZiA9IDE2ICogMzIgKyAxNjsgLy8gY2VudGVyIG9mIHBhdGNoXG4gICAgICAgIHZhciBwYXR0ID0gMDtcblxuICAgICAgICBpZiAoIShkZXNjcmlwdG9ycy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSkge1xuICAgICAgICAgICAgLy8gcmVsb2NhdGUgdG8gVTggdHlwZVxuICAgICAgICAgICAgZGVzY3JpcHRvcnMudHlwZSA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNvbHMgPSBERVNDUl9TSVpFO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucm93cyA9IGNvdW50O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY2hhbm5lbCA9IDE7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucmVzaXplKERFU0NSX1NJWkUsIGNvdW50LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXNjcl9kID0gZGVzY3JpcHRvcnMuZGF0YTtcbiAgICAgICAgdmFyIGRlc2NyX29mZiA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB4ID0gY29ybmVyc1tpXS54O1xuICAgICAgICAgICAgcHkgPSBjb3JuZXJzW2ldLnk7XG4gICAgICAgICAgICBhbmdsZSA9IGNvcm5lcnNbaV0uYW5nbGU7XG5cbiAgICAgICAgICAgIHJlY3RpZnlfcGF0Y2goc3JjLCB0aGlzLnBhdGNoX2ltZywgYW5nbGUsIHB4LCBweSwgMzIsIHRoaXMuSCwgdGhpcy5pbWdwcm9jKTtcblxuICAgICAgICAgICAgLy8gZGVzY3JpYmUgdGhlIHBhdGNoXG4gICAgICAgICAgICBwYXR0ID0gMDtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBERVNDUl9TSVpFOyArK2IpIHtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgPSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDE7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDI7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDQ7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDU7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDc7XG5cbiAgICAgICAgICAgICAgICBkZXNjcl9kW2Rlc2NyX29mZiArIGJdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3Jfb2ZmICs9IERFU0NSX1NJWkU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0LnlhcGUgPSB5YXBlO1xuXG5qc2ZlYXROZXh0LnlhcGUwNiA9IGNsYXNzIHlhcGUwNiBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBsYXBsYWNpYW5fdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcHVibGljIG1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkID0gMzA7XG4gICAgICAgIHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCA9IDI1O1xuICAgIH1cbiAgICBkZXRlY3Qoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgcG9pbnRzOiBhbnlbXSwgYm9yZGVyOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyZF9kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBEeHggPSA1LCBEeXkgPSAoNSAqIHcpIHwgMDtcbiAgICAgICAgdmFyIER4eSA9ICgzICsgMyAqIHcpIHwgMCwgRHl4ID0gKDMgLSAzICogdykgfCAwO1xuICAgICAgICB2YXIgbGFwX2J1ZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuICAgICAgICB2YXIgbGFwbGFjaWFuID0gbGFwX2J1Zi5pMzI7XG4gICAgICAgIHZhciBsdiA9IDAsIHJvdyA9IDAsIHJvd3ggPSAwLCBtaW5fZWlnZW5fdmFsdWUgPSAwLCBwdDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwO1xuICAgICAgICB2YXIgbGFwX3RocmVzaCA9IHRoaXMubGFwbGFjaWFuX3RocmVzaG9sZDtcbiAgICAgICAgdmFyIGVpZ2VuX3RocmVzaCA9IHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heCg1LCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIHN5ID0gTWF0aC5tYXgoMywgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleCA9IE1hdGgubWluKHcgLSA1LCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSAzLCBoIC0gYm9yZGVyKSB8IDA7XG5cbiAgICAgICAgeCA9IHcgKiBoO1xuICAgICAgICB3aGlsZSAoLS14ID49IDApIHsgbGFwbGFjaWFuW3hdID0gMDsgfVxuICAgICAgICBjb21wdXRlX2xhcGxhY2lhbihzcmRfZCwgbGFwbGFjaWFuLCB3LCBoLCBEeHgsIER5eSwgc3gsIHN5LCBleCwgZXkpO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuXG4gICAgICAgICAgICAgICAgbHYgPSBsYXBsYWNpYW5bcm93eF07XG4gICAgICAgICAgICAgICAgaWYgKChsdiA8IC1sYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAobHYgPiBsYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICApIHtcblxuICAgICAgICAgICAgICAgICAgICBtaW5fZWlnZW5fdmFsdWUgPSBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmRfZCwgcm93eCwgbHYsIER4eCwgRHl5LCBEeHksIER5eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5fZWlnZW5fdmFsdWUgPiBlaWdlbl90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcG9pbnRzW251bWJlcl9vZl9wb2ludHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQueCA9IHgsIHB0LnkgPSB5LCBwdC5zY29yZSA9IG1pbl9laWdlbl92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbnVtYmVyX29mX3BvaW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4OyAvLyBza2lwIG5leHQgcGl4ZWwgc2luY2UgdGhpcyBpcyBtYXhpbWEgaW4gM3gzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobGFwX2J1Zik7XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcl9vZl9wb2ludHM7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tb3Rpb25fZXN0aW1hdG9yID0gY2xhc3MgbW90aW9uX2VzdGltYXRvciBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldF9zdWJzZXQoa2VybmVsOiB7IGNoZWNrX3N1YnNldDogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IGFueSB9LCBmcm9tOiBhbnlbXSwgdG86IGFueVtdLCBuZWVkX2NudDogbnVtYmVyLCBtYXhfY250OiBudW1iZXIsIGZyb21fc3ViOiBhbnlbXSwgdG9fc3ViOiBhbnlbXSkge1xuICAgICAgICB2YXIgbWF4X3RyeSA9IDEwMDA7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHNzaXRlciA9IDAsIGlkeF9pID0gMCwgb2sgPSBmYWxzZTtcbiAgICAgICAgZm9yICg7IHNzaXRlciA8IG1heF90cnk7ICsrc3NpdGVyKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeTspIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlkeF9pID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW9rKSB7XG4gICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4X2kgPSBpbmRpY2VzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4X2NudCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4X2kgPT0gaW5kaWNlc1tqXSkgeyBvayA9IGZhbHNlOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21fc3ViW2ldID0gZnJvbVtpZHhfaV07XG4gICAgICAgICAgICAgICAgdG9fc3ViW2ldID0gdG9baWR4X2ldO1xuICAgICAgICAgICAgICAgIGlmICgha2VybmVsLmNoZWNrX3N1YnNldChmcm9tX3N1YiwgdG9fc3ViLCBpICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NpdGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoaSA9PSBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5KTtcbiAgICB9XG5cbiAgICBmaW5kX2lubGllcnMoa2VybmVsOiB7IGVycm9yOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSwgYXJnMzogYW55LCBhcmc0OiBhbnkpID0+IHZvaWQgfSwgbW9kZWw6IG1hdHJpeF90LCBmcm9tOiBhbnksIHRvOiBhbnksIGNvdW50OiBudW1iZXIsIHRocmVzaDogbnVtYmVyLCBlcnI6IG51bWJlcltdLCBtYXNrOiBudW1iZXJbXSkge1xuICAgICAgICB2YXIgbnVtaW5saWVycyA9IDAsIGkgPSAwLCBmID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aHJlc2ggKiB0aHJlc2g7XG5cbiAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBmID0gPG51bWJlcj48dW5rbm93bj4oZXJyW2ldIDw9IHQpO1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtczogeyBzaXplOiBudW1iZXI7IHRocmVzaDogbnVtYmVyOyB1cGRhdGVfaXRlcnM6IChhcmcwOiBudW1iZXIsIGFyZzE6IGFueSkgPT4gYW55IH0sIGtlcm5lbDogYW55LCBmcm9tOiBhbnlbXSwgdG86IGFueVtdLCBjb3VudDogbnVtYmVyLCBtb2RlbDogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgdHlwZTogbnVtYmVyIH0sIG1hc2s6IHsgZGF0YTogeyBbeDogc3RyaW5nXTogbnVtYmVyIH0gfSwgbWF4X2l0ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBzdWJzZXQwOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDE6IGFueSA9IFtdO1xuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgbWMgPSBtb2RlbC5jb2xzLCBtciA9IG1vZGVsLnJvd3M7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIG1fYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobWMgKiBtcikgPDwgMyk7XG4gICAgICAgIHZhciBtc19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50KTtcbiAgICAgICAgdmFyIGVycl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50IDw8IDIpO1xuICAgICAgICB2YXIgTSA9IG5ldyBtYXRyaXhfdChtYywgbXIsIGR0LCBtX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBjdXJyX21hc2sgPSBuZXcgbWF0cml4X3QoY291bnQsIDEsIEpTRkVBVF9DT05TVEFOVFMuVThDMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpbmxpZXJzX21heCA9IC0xLCBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAgbnVtaW5saWVycyA9IHRoaXMuZmluZF9pbmxpZXJzKGtlcm5lbCwgTSwgZnJvbSwgdG8sIGNvdW50LCBwYXJhbXMudGhyZXNoLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKG51bWlubGllcnMgPiBNYXRoLm1heChpbmxpZXJzX21heCwgbW9kZWxfcG9pbnRzIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIGlubGllcnNfbWF4ID0gbnVtaW5saWVycztcbiAgICAgICAgICAgICAgICBpZiAobWFzaykgY3Vycl9tYXNrLmNvcHlfdG8obWFzayk7XG4gICAgICAgICAgICAgICAgbml0ZXJzID0gcGFyYW1zLnVwZGF0ZV9pdGVycygoY291bnQgLSBudW1pbmxpZXJzKSAvIGNvdW50LCBuaXRlcnMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbG1lZHMocGFyYW1zOiB7IHNpemU6IG51bWJlcjsgZXBzOiBudW1iZXI7IHVwZGF0ZV9pdGVyczogKGFyZzA6IGFueSwgYXJnMTogYW55KSA9PiBhbnkgfSwga2VybmVsOiBhbnksIGZyb206IGFueVtdLCB0bzogYW55W10sIGNvdW50OiBudW1iZXIsIG1vZGVsOiBtYXRyaXhfdCwgbWFzazogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBudW1iZXIgfSB9LCBtYXhfaXRlcnM6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWF0aCA9IG5ldyBqc2ZlYXROZXh0Lm1hdGgoKTtcblxuICAgICAgICB2YXIgc3Vic2V0MDogYW55ID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcbiAgICAgICAgdmFyIG1pbl9tZWRpYW4gPSAxMDAwMDAwMDAwLjAsIHNpZ21hID0gMC4wLCBtZWRpYW4gPSAwLjA7XG5cbiAgICAgICAgcGFyYW1zLmVwcyA9IDAuNDU7XG4gICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMocGFyYW1zLmVwcywgbml0ZXJzKTtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBrZXJuZWwuZXJyb3IoZnJvbSwgdG8sIE0sIGVyciwgY291bnQpO1xuICAgICAgICAgICAgbWVkaWFuID0gX21hdGgubWVkaWFuKGVyciwgMCwgY291bnQgLSAxKTtcblxuICAgICAgICAgICAgaWYgKG1lZGlhbiA8IG1pbl9tZWRpYW4pIHtcbiAgICAgICAgICAgICAgICBtaW5fbWVkaWFuID0gbWVkaWFuO1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHNpZ21hID0gMi41ICogMS40ODI2ICogKDEgKyA1LjAgLyAoY291bnQgLSBtb2RlbF9wb2ludHMpKSAqIE1hdGguc3FydChtaW5fbWVkaWFuKTtcbiAgICAgICAgICAgIHNpZ21hID0gTWF0aC5tYXgoc2lnbWEsIDAuMDAxKTtcblxuICAgICAgICAgICAgbnVtaW5saWVycyA9IHRoaXMuZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgc2lnbWEsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBudW1pbmxpZXJzID49IG1vZGVsX3BvaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0LnJhbnNhY19wYXJhbXNfdCA9IHJhbnNhY19wYXJhbXNfdDtcblxuanNmZWF0TmV4dC5hZmZpbmUyZCA9IGFmZmluZTJkO1xuXG5qc2ZlYXROZXh0LmhvbW9ncmFwaHkyZCA9IGhvbW9ncmFwaHkyZDtcblxuanNmZWF0TmV4dC5vcHRpY2FsX2Zsb3dfbGsgPSBjbGFzcyBvcHRpY2FsX2Zsb3dfbGsgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBzY2hhcnJfZGVyaXY6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpXG4gICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2ID0gX2ltZ3Byb2Muc2NoYXJyX2Rlcml2YXRpdmVzO1xuICAgIH1cbiAgICB0cmFjayhwcmV2X3B5cjogeyBkYXRhOiBhbnk7IGxldmVsczogbnVtYmVyIH0sIGN1cnJfcHlyOiB7IGRhdGE6IGFueSB9LCBwcmV2X3h5OiBudW1iZXJbXSwgY3Vycl94eTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIHdpbl9zaXplOiBudW1iZXIsIG1heF9pdGVyOiBudW1iZXIsIHN0YXR1czogVWludDhBcnJheSwgZXBzOiBudW1iZXIsIG1pbl9laWdlbl90aHJlc2hvbGQ6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVyID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVyID0gMzA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0dXMgPT09IFwidW5kZWZpbmVkXCIpIHsgc3RhdHVzID0gbmV3IFVpbnQ4QXJyYXkoY291bnQpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgZXBzID09PSBcInVuZGVmaW5lZFwiKSB7IGVwcyA9IDAuMDE7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5fZWlnZW5fdGhyZXNob2xkID09PSBcInVuZGVmaW5lZFwiKSB7IG1pbl9laWdlbl90aHJlc2hvbGQgPSAwLjAwMDE7IH1cblxuICAgICAgICB2YXIgaGFsZl93aW4gPSAod2luX3NpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgdmFyIHdpbl9hcmVhID0gKHdpbl9zaXplICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgdmFyIHdpbl9hcmVhMiA9IHdpbl9hcmVhIDw8IDE7XG4gICAgICAgIHZhciBwcmV2X2ltZ3MgPSBwcmV2X3B5ci5kYXRhLCBuZXh0X2ltZ3MgPSBjdXJyX3B5ci5kYXRhO1xuICAgICAgICB2YXIgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbMF0uZGF0YSwgaW1nX25leHQgPSBuZXh0X2ltZ3NbMF0uZGF0YTtcbiAgICAgICAgdmFyIHcwID0gcHJldl9pbWdzWzBdLmNvbHMsIGgwID0gcHJldl9pbWdzWzBdLnJvd3MsIGx3ID0gMCwgbGggPSAwO1xuXG4gICAgICAgIHZhciBpd2luX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIod2luX2FyZWEgPDwgMik7XG4gICAgICAgIHZhciBkZXJpdl9pd2luX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIod2luX2FyZWEyIDw8IDIpO1xuICAgICAgICB2YXIgZGVyaXZfbGV2X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGgwICogKHcwIDw8IDEpKSA8PCAyKTtcblxuICAgICAgICB2YXIgZGVyaXZfbSA9IG5ldyBtYXRyaXhfdCh3MCwgaDAsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZGVyaXZfbGV2X25vZGUuZGF0YSk7XG5cbiAgICAgICAgdmFyIGl3aW5fYnVmID0gaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGRlcml2X2l3aW4gPSBkZXJpdl9pd2luX25vZGUuaTMyO1xuICAgICAgICB2YXIgZGVyaXZfbGV2ID0gZGVyaXZfbGV2X25vZGUuaTMyO1xuXG4gICAgICAgIHZhciBkc3RlcCA9IDAsIHNyYyA9IDAsIGRzcmMgPSAwLCBpcHRyID0gMCwgZGlwdHIgPSAwLCBqcHRyID0gMDtcbiAgICAgICAgdmFyIGxldl9zYyA9IDAuMCwgcHJldl94ID0gMC4wLCBwcmV2X3kgPSAwLjAsIG5leHRfeCA9IDAuMCwgbmV4dF95ID0gMC4wO1xuICAgICAgICB2YXIgcHJldl9kZWx0YV94ID0gMC4wLCBwcmV2X2RlbHRhX3kgPSAwLjAsIGRlbHRhX3ggPSAwLjAsIGRlbHRhX3kgPSAwLjA7XG4gICAgICAgIHZhciBpcHJldl94ID0gMCwgaXByZXZfeSA9IDAsIGluZXh0X3ggPSAwLCBpbmV4dF95ID0gMDtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgeCA9IDAsIHkgPSAwLCBsZXZlbCA9IDAsIHB0aWQgPSAwLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIGJyZF90bCA9IDAsIGJyZF9yID0gMCwgYnJkX2IgPSAwO1xuICAgICAgICB2YXIgYSA9IDAuMCwgYiA9IDAuMCwgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgIC8vIGZpeGVkIHBvaW50IG1hdGhcbiAgICAgICAgdmFyIFdfQklUUzE0ID0gMTQ7XG4gICAgICAgIHZhciBXX0JJVFM0ID0gMTQ7XG4gICAgICAgIHZhciBXX0JJVFMxbTUgPSBXX0JJVFM0IC0gNTtcbiAgICAgICAgdmFyIFdfQklUUzFtNTEgPSAoMSA8PCAoKFdfQklUUzFtNSkgLSAxKSk7XG4gICAgICAgIHZhciBXX0JJVFMxNF8gPSAoMSA8PCBXX0JJVFMxNCk7XG4gICAgICAgIHZhciBXX0JJVFM0MSA9ICgxIDw8ICgoV19CSVRTNCkgLSAxKSk7XG4gICAgICAgIHZhciBGTFRfU0NBTEUgPSAxLjAgLyAoMSA8PCAyMCk7XG4gICAgICAgIHZhciBpdzAwID0gMCwgaXcwMSA9IDAsIGl3MTAgPSAwLCBpdzExID0gMCwgaXZhbCA9IDAsIGl4dmFsID0gMCwgaXl2YWwgPSAwO1xuICAgICAgICB2YXIgQTExID0gMC4wLCBBMTIgPSAwLjAsIEEyMiA9IDAuMCwgRCA9IDAuMCwgbWluX2VpZyA9IDAuMDtcblxuICAgICAgICB2YXIgRkxUX0VQU0lMT04gPSAwLjAwMDAwMDExOTIwOTI5O1xuICAgICAgICBlcHMgKj0gZXBzO1xuXG4gICAgICAgIC8vIHJlc2V0IHN0YXR1c1xuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHN0YXR1c1tpXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWF4X2xldmVsID0gKHByZXZfcHlyLmxldmVscyAtIDEpIHwgMDtcbiAgICAgICAgbGV2ZWwgPSBtYXhfbGV2ZWw7XG5cbiAgICAgICAgZm9yICg7IGxldmVsID49IDA7IC0tbGV2ZWwpIHtcbiAgICAgICAgICAgIGxldl9zYyA9ICgxLjAgLyAoMSA8PCBsZXZlbCkpO1xuICAgICAgICAgICAgbHcgPSB3MCA+PiBsZXZlbDtcbiAgICAgICAgICAgIGxoID0gaDAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBkc3RlcCA9IGx3IDw8IDE7XG4gICAgICAgICAgICBpbWdfcHJldiA9IHByZXZfaW1nc1tsZXZlbF0uZGF0YTtcbiAgICAgICAgICAgIGltZ19uZXh0ID0gbmV4dF9pbWdzW2xldmVsXS5kYXRhO1xuXG4gICAgICAgICAgICBicmRfciA9IChsdyAtIHdpbl9zaXplKSB8IDA7XG4gICAgICAgICAgICBicmRfYiA9IChsaCAtIHdpbl9zaXplKSB8IDA7XG5cbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsZXZlbCBkZXJpdmF0aXZlc1xuICAgICAgICAgICAgdGhpcy5zY2hhcnJfZGVyaXYocHJldl9pbWdzW2xldmVsXSwgZGVyaXZfbSk7XG5cbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBwb2ludHNcbiAgICAgICAgICAgIGZvciAocHRpZCA9IDA7IHB0aWQgPCBjb3VudDsgKytwdGlkKSB7XG4gICAgICAgICAgICAgICAgaSA9IHB0aWQgPDwgMTtcbiAgICAgICAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgICAgICAgICAgcHJldl94ID0gcHJldl94eVtpXSAqIGxldl9zYztcbiAgICAgICAgICAgICAgICBwcmV2X3kgPSBwcmV2X3h5W2pdICogbGV2X3NjO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID09IG1heF9sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggPSBwcmV2X3g7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSA9IHByZXZfeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggPSBjdXJyX3h5W2ldICogMi4wO1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBjdXJyX3h5W2pdICogMi4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyX3h5W2ldID0gbmV4dF94O1xuICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gPSBuZXh0X3k7XG5cbiAgICAgICAgICAgICAgICBwcmV2X3ggLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl95IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIGlwcmV2X3ggPSBwcmV2X3ggfCAwO1xuICAgICAgICAgICAgICAgIGlwcmV2X3kgPSBwcmV2X3kgfCAwO1xuXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyIGNoZWNrXG4gICAgICAgICAgICAgICAgeCA9IDxudW1iZXI+PHVua25vd24+KChpcHJldl94IDw9IGJyZF90bCkgfHwgKGlwcmV2X3ggPj0gYnJkX3IpIHx8IChpcHJldl95IDw9IGJyZF90bCkgfHwgKGlwcmV2X3kgPj0gYnJkX2IpKTtcbiAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEgPSBwcmV2X3ggLSBpcHJldl94O1xuICAgICAgICAgICAgICAgIGIgPSBwcmV2X3kgLSBpcHJldl95O1xuICAgICAgICAgICAgICAgIGl3MDAgPSAoKCgxLjAgLSBhKSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzAxID0gKChhICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcxMSA9IChXX0JJVFMxNF8gLSBpdzAwIC0gaXcwMSAtIGl3MTApO1xuXG4gICAgICAgICAgICAgICAgQTExID0gMC4wLCBBMTIgPSAwLjAsIEEyMiA9IDAuMDtcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgdGhlIHBhdGNoIGZyb20gdGhlIGZpcnN0IGltYWdlLCBjb21wdXRlIGNvdmFyaWF0aW9uIG1hdHJpeCBvZiBkZXJpdmF0aXZlc1xuICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA9ICgoeSArIGlwcmV2X3kpICogbHcgKyBpcHJldl94KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGRzcmMgPSBzcmMgPDwgMTtcblxuICAgICAgICAgICAgICAgICAgICBpcHRyID0gKHkgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXB0ciA9IGlwdHIgPDwgMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsrc3JjLCArK2lwdHIsIGRzcmMgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX3ByZXZbc3JjXSkgKiBpdzAwICsgKGltZ19wcmV2W3NyYyArIDFdKSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfcHJldltzcmMgKyBsd10pICogaXcxMCArIChpbWdfcHJldltzcmMgKyBsdyArIDFdKSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpeHZhbCA9IChkZXJpdl9sZXZbZHNyY10gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAyXSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXBdICogaXcxMCArIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAyXSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoKChpeHZhbCkgKyBXX0JJVFM0MSkgPj4gKFdfQklUUzQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoZGVyaXZfbGV2W2RzcmMgKyAxXSAqIGl3MDAgKyBkZXJpdl9sZXZbZHNyYyArIDNdICogaXcwMSArIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAxXSAqIGl3MTAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAzXSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoKChpeXZhbCkgKyBXX0JJVFM0MSkgPj4gKFdfQklUUzQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXdpbl9idWZbaXB0cl0gPSBpdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl4dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl5dmFsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBMTEgKz0gaXh2YWwgKiBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEExMiArPSBpeHZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgQTIyICs9IGl5dmFsICogaXl2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBBMTEgKj0gRkxUX1NDQUxFOyBBMTIgKj0gRkxUX1NDQUxFOyBBMjIgKj0gRkxUX1NDQUxFO1xuXG4gICAgICAgICAgICAgICAgRCA9IEExMSAqIEEyMiAtIEExMiAqIEExMjtcbiAgICAgICAgICAgICAgICBtaW5fZWlnID0gKEEyMiArIEExMSAtIE1hdGguc3FydCgoQTExIC0gQTIyKSAqIChBMTEgLSBBMjIpICsgNC4wICogQTEyICogQTEyKSkgLyB3aW5fYXJlYTI7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluX2VpZyA8IG1pbl9laWdlbl90aHJlc2hvbGQgfHwgRCA8IEZMVF9FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEQgPSAxLjAgLyBEO1xuXG4gICAgICAgICAgICAgICAgbmV4dF94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIG5leHRfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3ggPSAwLjA7XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpdGVyID0gMDsgaXRlciA8IG1heF9pdGVyOyArK2l0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5leHRfeCA9IG5leHRfeCB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3kgPSBuZXh0X3kgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHggPSA8bnVtYmVyPjx1bmtub3duPigoaW5leHRfeCA8PSBicmRfdGwpIHx8IChpbmV4dF94ID49IGJyZF9yKSB8fCAoaW5leHRfeSA8PSBicmRfdGwpIHx8IChpbmV4dF95ID49IGJyZF9iKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MDEgPSAoKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcbiAgICAgICAgICAgICAgICAgICAgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcHRyID0gKCh5ICsgaW5leHRfeSkgKiBsdyArIGluZXh0X3gpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsranB0ciwgKytpcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX25leHRbanB0cl0pICogaXcwMCArIChpbWdfbmV4dFtqcHRyICsgMV0pICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfbmV4dFtqcHRyICsgbHddKSAqIGl3MTAgKyAoaW1nX25leHRbanB0ciArIGx3ICsgMV0pICogaXcxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCAtIGl3aW5fYnVmW2lwdHJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYjEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICBiMiAqPSBGTFRfU0NBTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeCA9ICgoQTEyICogYjIgLSBBMjIgKiBiMSkgKiBEKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9ICgoQTEyICogYjEgLSBBMTEgKiBiMikgKiBEKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggKz0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ICs9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3ggKyBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeSArIGhhbGZfd2luO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95IDw9IGVwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA+IDAgJiYgTWF0aC5hYnMoZGVsdGFfeCArIHByZXZfZGVsdGFfeCkgPCAwLjAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkZWx0YV95ICsgcHJldl9kZWx0YV95KSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gLT0gZGVsdGFfeCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gLT0gZGVsdGFfeSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIHBvaW50cyBsb29wXG4gICAgICAgIH0gLy8gbGV2ZWxzIGxvb3BcblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2l3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9sZXZfbm9kZSk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XG4gICAgcHVibGljIGFuZ2xlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjb3JlOiBudW1iZXIsIGxldmVsOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInVuZGVmaW5lZFwiKSB7IHggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJ1bmRlZmluZWRcIikgeyB5ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHNjb3JlID09PSBcInVuZGVmaW5lZFwiKSB7IHNjb3JlID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IGxldmVsID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGFuZ2xlID09PSBcInVuZGVmaW5lZFwiKSB7IGFuZ2xlID0gLTEuMDsgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBzd2FwKEE6IHsgW3g6IHN0cmluZ106IGFueTsgfSwgaTA6IHN0cmluZyB8IG51bWJlciwgaTE6IHN0cmluZyB8IG51bWJlciwgdDogYW55KSB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICBhID0gTWF0aC5hYnMoYSk7XG4gICAgYiA9IE1hdGguYWJzKGIpO1xuICAgIGlmIChhID4gYikge1xuICAgICAgICBiIC89IGE7XG4gICAgICAgIHJldHVybiBhICogTWF0aC5zcXJ0KDEuMCArIGIgKiBiKTtcbiAgICB9XG4gICAgaWYgKGIgPiAwKSB7XG4gICAgICAgIGEgLz0gYjtcbiAgICAgICAgcmV0dXJuIGIgKiBNYXRoLnNxcnQoMS4wICsgYSAqIGEpO1xuICAgIH1cbiAgICByZXR1cm4gMC4wO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNOiB7IGRhdGE6IGFueTsgcm93czogYW55OyBjb2xzOiBhbnk7IH0sIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdDogeyBkYXRhOiBhbnk7IH0sIEE6IHsgcm93czogYW55OyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE06IHsgZGF0YTogYW55OyB9LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tOiB7IGRhdGE6IGFueTsgfSwgdG86IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBkYXRhOiBhbnk7IH0sIEI6IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTTogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMTogbnVtYmVyLCBNMTI6IG51bWJlciwgTTEzOiBudW1iZXIsXG4gICAgICAgIE0yMTogbnVtYmVyLCBNMjI6IG51bWJlciwgTTIzOiBudW1iZXIsXG4gICAgICAgIE0zMTogbnVtYmVyLCBNMzI6IG51bWJlciwgTTMzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgZGF0YV90IH0gZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4X1Qge1xuICAgIGFsbG9jYXRlOiAoKSA9PiB2b2lkO1xuICAgIGNvcHlfdG86IChvdGhlcjogYW55KSA9PiB2b2lkO1xuICAgIHJlc2l6ZTogKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSA9PiB2b2lkO1xufVxuZXhwb3J0IGNsYXNzIG1hdHJpeF90IGltcGxlbWVudHMgSU1hdHJpeF9UIHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNoYW5uZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sczogbnVtYmVyO1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgY29uc3RydWN0b3IoYzogbnVtYmVyLCByOiBudW1iZXIsIF9kYXRhX3R5cGU6IG51bWJlciwgX2RhdGFfYnVmZmVyPzogYW55KSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyOiBhbnkpIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjOiBudW1iZXIsIHI6IG51bWJlciwgY2g6IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIHRocmVzaDogbnVtYmVyO1xuICAgIHB1YmxpYyBlcHM6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvYjogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlciwgdGhyZXNoOiBudW1iZXIsIGVwczogbnVtYmVyLCBwcm9iOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplID09PSBcInVuZGVmaW5lZFwiKSB7IHNpemUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhyZXNoID09PSBcInVuZGVmaW5lZFwiKSB7IHRocmVzaCA9IDAuNTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9iID09PSBcInVuZGVmaW5lZFwiKSB7IHByb2IgPSAwLjk5OyB9XG5cbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy50aHJlc2ggPSB0aHJlc2g7XG4gICAgICAgIHRoaXMuZXBzID0gZXBzO1xuICAgICAgICB0aGlzLnByb2IgPSBwcm9iO1xuICAgIH07XG4gICAgdXBkYXRlX2l0ZXJzKF9lcHM6IG51bWJlciwgbWF4X2l0ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBJRGF0YV9ULCBkYXRhX3QgfSBmcm9tICcuL2RhdGFfdCdcblxuZXhwb3J0IGludGVyZmFjZSBJUG9vbF9Ob2RlX1Qge1xuICAgIHJlc2l6ZTogKHNpemVfaW5fYnl0ZXM6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IGltcGxlbWVudHMgSVBvb2xfTm9kZV9UIHtcbiAgICBwdWJsaWMgbmV4dDogYW55O1xuICAgIHB1YmxpYyBkYXRhPzogSURhdGFfVDtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBidWZmZXI6IGFueTtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YV9UIHtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICB1ODogVWludDhBcnJheTtcbiAgICBpMzI6IEludDMyQXJyYXk7XG4gICAgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgZjY0OiBGbG9hdDY0QXJyYXk7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3QgaW1wbGVtZW50cyBJRGF0YV9UICB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlciwgYnVmZmVyPzogYW55KSB7XG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBiaXRfcGF0dGVybl8zMSA9IFtcbiAgICA4LC0zLCA5LDUvKm1lYW4gKDApLCBjb3JyZWxhdGlvbiAoMCkqLyxcbiAgICA0LDIsIDcsLTEyLyptZWFuICgxLjEyNDYxZS0wNSksIGNvcnJlbGF0aW9uICgwLjA0Mzc1ODQpKi8sXG4gICAgLTExLDksIC04LDIvKm1lYW4gKDMuMzczODJlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYxNzQwOSkqLyxcbiAgICA3LC0xMiwgMTIsLTEzLyptZWFuICg1LjYyMzAzZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MzY5NzcpKi8sXG4gICAgMiwtMTMsIDIsMTIvKm1lYW4gKDAuMDAwMTM0OTUzKSwgY29ycmVsYXRpb24gKDAuMDg1MDk5KSovLFxuICAgIDEsLTcsIDEsNi8qbWVhbiAoMC4wMDA1Mjg1NjUpLCBjb3JyZWxhdGlvbiAoMC4wODU3MTc1KSovLFxuICAgIC0yLC0xMCwgLTIsLTQvKm1lYW4gKDAuMDE4ODgyMSksIGNvcnJlbGF0aW9uICgwLjA5ODU3NzQpKi8sXG4gICAgLTEzLC0xMywgLTExLC04LyptZWFuICgwLjAzNjMxMzUpLCBjb3JyZWxhdGlvbiAoMC4wODk5NjE2KSovLFxuICAgIC0xMywtMywgLTEyLC05LyptZWFuICgwLjEyMTgwNiksIGNvcnJlbGF0aW9uICgwLjA5OTg0OSkqLyxcbiAgICAxMCw0LCAxMSw5LyptZWFuICgwLjEyMjA2NSksIGNvcnJlbGF0aW9uICgwLjA5MzI4NSkqLyxcbiAgICAtMTMsLTgsIC04LC05LyptZWFuICgwLjE2Mjc4NyksIGNvcnJlbGF0aW9uICgwLjA5NDI3NDgpKi8sXG4gICAgLTExLDcsIC05LDEyLyptZWFuICgwLjIxNTYxKSwgY29ycmVsYXRpb24gKDAuMDk3NDQzOCkqLyxcbiAgICA3LDcsIDEyLDYvKm1lYW4gKDAuMTYwNTgzKSwgY29ycmVsYXRpb24gKDAuMTMwMDY0KSovLFxuICAgIC00LC01LCAtMywwLyptZWFuICgwLjIyODE3MSksIGNvcnJlbGF0aW9uICgwLjEzMjk5OCkqLyxcbiAgICAtMTMsMiwgLTEyLC0zLyptZWFuICgwLjAwOTk3NTI2KSwgY29ycmVsYXRpb24gKDAuMTQ1OTI2KSovLFxuICAgIC05LDAsIC03LDUvKm1lYW4gKDAuMTk4MjM0KSwgY29ycmVsYXRpb24gKDAuMTQzNjM2KSovLFxuICAgIDEyLC02LCAxMiwtMS8qbWVhbiAoMC4wNjc2MjI2KSwgY29ycmVsYXRpb24gKDAuMTY2ODkpKi8sXG4gICAgLTMsNiwgLTIsMTIvKm1lYW4gKDAuMTY2ODQ3KSwgY29ycmVsYXRpb24gKDAuMTcxNjgyKSovLFxuICAgIC02LC0xMywgLTQsLTgvKm1lYW4gKDAuMTAxMjE1KSwgY29ycmVsYXRpb24gKDAuMTc5NzE2KSovLFxuICAgIDExLC0xMywgMTIsLTgvKm1lYW4gKDAuMjAwNjQxKSwgY29ycmVsYXRpb24gKDAuMTkyMjc5KSovLFxuICAgIDQsNywgNSwxLyptZWFuICgwLjIwNTEwNiksIGNvcnJlbGF0aW9uICgwLjE4Njg0OCkqLyxcbiAgICA1LC0zLCAxMCwtMy8qbWVhbiAoMC4yMzQ5MDgpLCBjb3JyZWxhdGlvbiAoMC4xOTIzMTkpKi8sXG4gICAgMywtNywgNiwxMi8qbWVhbiAoMC4wNzA5OTY0KSwgY29ycmVsYXRpb24gKDAuMjEwODcyKSovLFxuICAgIC04LC03LCAtNiwtMi8qbWVhbiAoMC4wOTM5ODM0KSwgY29ycmVsYXRpb24gKDAuMjEyNTg5KSovLFxuICAgIC0yLDExLCAtMSwtMTAvKm1lYW4gKDAuMTI3Nzc4KSwgY29ycmVsYXRpb24gKDAuMjA4NjYpKi8sXG4gICAgLTEzLDEyLCAtOCwxMC8qbWVhbiAoMC4xNDc4MyksIGNvcnJlbGF0aW9uICgwLjIwNjM1NikqLyxcbiAgICAtNywzLCAtNSwtMy8qbWVhbiAoMC4xODIxNDEpLCBjb3JyZWxhdGlvbiAoMC4xOTg5NDIpKi8sXG4gICAgLTQsMiwgLTMsNy8qbWVhbiAoMC4xODgyMzcpLCBjb3JyZWxhdGlvbiAoMC4yMTM4NCkqLyxcbiAgICAtMTAsLTEyLCAtNiwxMS8qbWVhbiAoMC4xNDg2NSksIGNvcnJlbGF0aW9uICgwLjIzNTcxKSovLFxuICAgIDUsLTEyLCA2LC03LyptZWFuICgwLjIyMjMxMiksIGNvcnJlbGF0aW9uICgwLjIzMzI0KSovLFxuICAgIDUsLTYsIDcsLTEvKm1lYW4gKDAuMjI5MDgyKSwgY29ycmVsYXRpb24gKDAuMjMzODkpKi8sXG4gICAgMSwwLCA0LC01LyptZWFuICgwLjI0MTU3NyksIGNvcnJlbGF0aW9uICgwLjIxNTI4NikqLyxcbiAgICA5LDExLCAxMSwtMTMvKm1lYW4gKDAuMDAzMzg1MDcpLCBjb3JyZWxhdGlvbiAoMC4yNTEzNzMpKi8sXG4gICAgNCw3LCA0LDEyLyptZWFuICgwLjEzMTAwNSksIGNvcnJlbGF0aW9uICgwLjI1NzYyMikqLyxcbiAgICAyLC0xLCA0LDQvKm1lYW4gKDAuMTUyNzU1KSwgY29ycmVsYXRpb24gKDAuMjU1MjA1KSovLFxuICAgIC00LC0xMiwgLTIsNy8qbWVhbiAoMC4xODI3NzEpLCBjb3JyZWxhdGlvbiAoMC4yNDQ4NjcpKi8sXG4gICAgLTgsLTUsIC03LC0xMC8qbWVhbiAoMC4xODY4OTgpLCBjb3JyZWxhdGlvbiAoMC4yMzkwMSkqLyxcbiAgICA0LDExLCA5LDEyLyptZWFuICgwLjIyNjIyNiksIGNvcnJlbGF0aW9uICgwLjI1ODI1NSkqLyxcbiAgICAwLC04LCAxLC0xMy8qbWVhbiAoMC4wODk3ODg2KSwgY29ycmVsYXRpb24gKDAuMjc0ODI3KSovLFxuICAgIC0xMywtMiwgLTgsMi8qbWVhbiAoMC4xNDg3NzQpLCBjb3JyZWxhdGlvbiAoMC4yODA2NSkqLyxcbiAgICAtMywtMiwgLTIsMy8qbWVhbiAoMC4xNTMwNDgpLCBjb3JyZWxhdGlvbiAoMC4yODMwNjMpKi8sXG4gICAgLTYsOSwgLTQsLTkvKm1lYW4gKDAuMTY5NTIzKSwgY29ycmVsYXRpb24gKDAuMjc4MjQ4KSovLFxuICAgIDgsMTIsIDEwLDcvKm1lYW4gKDAuMjI1MzM3KSwgY29ycmVsYXRpb24gKDAuMjgyODUxKSovLFxuICAgIDAsOSwgMSwzLyptZWFuICgwLjIyNjY4NyksIGNvcnJlbGF0aW9uICgwLjI3ODczNCkqLyxcbiAgICA3LC01LCAxMSwtMTAvKm1lYW4gKDAuMDA2OTM4ODIpLCBjb3JyZWxhdGlvbiAoMC4zMDUxNjEpKi8sXG4gICAgLTEzLC02LCAtMTEsMC8qbWVhbiAoMC4wMjI3MjgzKSwgY29ycmVsYXRpb24gKDAuMzAwMTgxKSovLFxuICAgIDEwLDcsIDEyLDEvKm1lYW4gKDAuMTI1NTE3KSwgY29ycmVsYXRpb24gKDAuMzEwODkpKi8sXG4gICAgLTYsLTMsIC02LDEyLyptZWFuICgwLjEzMTc0OCksIGNvcnJlbGF0aW9uICgwLjMxMjc3OSkqLyxcbiAgICAxMCwtOSwgMTIsLTQvKm1lYW4gKDAuMTQ0ODI3KSwgY29ycmVsYXRpb24gKDAuMjkyNzk3KSovLFxuICAgIC0xMyw4LCAtOCwtMTIvKm1lYW4gKDAuMTQ5MjAyKSwgY29ycmVsYXRpb24gKDAuMzA4OTE4KSovLFxuICAgIC0xMywwLCAtOCwtNC8qbWVhbiAoMC4xNjA5MDkpLCBjb3JyZWxhdGlvbiAoMC4zMTAwMTMpKi8sXG4gICAgMywzLCA3LDgvKm1lYW4gKDAuMTc3NzU1KSwgY29ycmVsYXRpb24gKDAuMzA5Mzk0KSovLFxuICAgIDUsNywgMTAsLTcvKm1lYW4gKDAuMjEyMzM3KSwgY29ycmVsYXRpb24gKDAuMzEwMzE1KSovLFxuICAgIC0xLDcsIDEsLTEyLyptZWFuICgwLjIxNDQyOSksIGNvcnJlbGF0aW9uICgwLjMxMTkzMykqLyxcbiAgICAzLC0xMCwgNSw2LyptZWFuICgwLjIzNTgwNyksIGNvcnJlbGF0aW9uICgwLjMxMzEwNCkqLyxcbiAgICAyLC00LCAzLC0xMC8qbWVhbiAoMC4wMDQ5NDgyNyksIGNvcnJlbGF0aW9uICgwLjM0NDk0OCkqLyxcbiAgICAtMTMsMCwgLTEzLDUvKm1lYW4gKDAuMDU0OTE0NSksIGNvcnJlbGF0aW9uICgwLjM0NDY3NSkqLyxcbiAgICAtMTMsLTcsIC0xMiwxMi8qbWVhbiAoMC4xMDMzODUpLCBjb3JyZWxhdGlvbiAoMC4zNDI3MTUpKi8sXG4gICAgLTEzLDMsIC0xMSw4LyptZWFuICgwLjEzNDIyMiksIGNvcnJlbGF0aW9uICgwLjMyMjkyMikqLyxcbiAgICAtNywxMiwgLTQsNy8qbWVhbiAoMC4xNTMyODQpLCBjb3JyZWxhdGlvbiAoMC4zMzcwNjEpKi8sXG4gICAgNiwtMTAsIDEyLDgvKm1lYW4gKDAuMTU0ODgxKSwgY29ycmVsYXRpb24gKDAuMzI5MjU3KSovLFxuICAgIC05LC0xLCAtNywtNi8qbWVhbiAoMC4yMDA5NjcpLCBjb3JyZWxhdGlvbiAoMC4zMzMxMikqLyxcbiAgICAtMiwtNSwgMCwxMi8qbWVhbiAoMC4yMDE1MTgpLCBjb3JyZWxhdGlvbiAoMC4zNDA2MzUpKi8sXG4gICAgLTEyLDUsIC03LDUvKm1lYW4gKDAuMjA3ODA1KSwgY29ycmVsYXRpb24gKDAuMzM1NjMxKSovLFxuICAgIDMsLTEwLCA4LC0xMy8qbWVhbiAoMC4yMjQ0MzgpLCBjb3JyZWxhdGlvbiAoMC4zNDUwNCkqLyxcbiAgICAtNywtNywgLTQsNS8qbWVhbiAoMC4yMzkzNjEpLCBjb3JyZWxhdGlvbiAoMC4zMzgwNTMpKi8sXG4gICAgLTMsLTIsIC0xLC03LyptZWFuICgwLjI0MDc0NCksIGNvcnJlbGF0aW9uICgwLjM0NDMyMikqLyxcbiAgICAyLDksIDUsLTExLyptZWFuICgwLjI0Mjk0OSksIGNvcnJlbGF0aW9uICgwLjM0MTQ1KSovLFxuICAgIC0xMSwtMTMsIC01LC0xMy8qbWVhbiAoMC4yNDQwMjgpLCBjb3JyZWxhdGlvbiAoMC4zMzY4NjEpKi8sXG4gICAgLTEsNiwgMCwtMS8qbWVhbiAoMC4yNDc1NzEpLCBjb3JyZWxhdGlvbiAoMC4zNDM2ODQpKi8sXG4gICAgNSwtMywgNSwyLyptZWFuICgwLjAwMDY5NzI1NiksIGNvcnJlbGF0aW9uICgwLjM1NzI2NSkqLyxcbiAgICAtNCwtMTMsIC00LDEyLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuMzczODI3KSovLFxuICAgIC05LC02LCAtOSw2LyptZWFuICgwLjAxMjY4NTYpLCBjb3JyZWxhdGlvbiAoMC4zNzM5MzgpKi8sXG4gICAgLTEyLC0xMCwgLTgsLTQvKm1lYW4gKDAuMDE1MjQ5NyksIGNvcnJlbGF0aW9uICgwLjM2NDIzNykqLyxcbiAgICAxMCwyLCAxMiwtMy8qbWVhbiAoMC4wMjk5OTMzKSwgY29ycmVsYXRpb24gKDAuMzQ1MjkyKSovLFxuICAgIDcsMTIsIDEyLDEyLyptZWFuICgwLjAzMDcyNDIpLCBjb3JyZWxhdGlvbiAoMC4zNjYyOTkpKi8sXG4gICAgLTcsLTEzLCAtNiw1LyptZWFuICgwLjA1MzQ5NzUpLCBjb3JyZWxhdGlvbiAoMC4zNjgzNTcpKi8sXG4gICAgLTQsOSwgLTMsNC8qbWVhbiAoMC4wOTk4NjUpLCBjb3JyZWxhdGlvbiAoMC4zNzIyNzYpKi8sXG4gICAgNywtMSwgMTIsMi8qbWVhbiAoMC4xMTcwODMpLCBjb3JyZWxhdGlvbiAoMC4zNjQ1MjkpKi8sXG4gICAgLTcsNiwgLTUsMS8qbWVhbiAoMC4xMjYxMjUpLCBjb3JyZWxhdGlvbiAoMC4zNjk2MDYpKi8sXG4gICAgLTEzLDExLCAtMTIsNS8qbWVhbiAoMC4xMzAzNjQpLCBjb3JyZWxhdGlvbiAoMC4zNTg1MDIpKi8sXG4gICAgLTMsNywgLTIsLTYvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuMzc1NTMxKSovLFxuICAgIDcsLTgsIDEyLC03LyptZWFuICgwLjE2MDE2NiksIGNvcnJlbGF0aW9uICgwLjM3OTUwOCkqLyxcbiAgICAtMTMsLTcsIC0xMSwtMTIvKm1lYW4gKDAuMTY3ODQ4KSwgY29ycmVsYXRpb24gKDAuMzUzMzQzKSovLFxuICAgIDEsLTMsIDEyLDEyLyptZWFuICgwLjE4MzM3OCksIGNvcnJlbGF0aW9uICgwLjM3MTkxNikqLyxcbiAgICAyLC02LCAzLDAvKm1lYW4gKDAuMjI4NzExKSwgY29ycmVsYXRpb24gKDAuMzcxNzYxKSovLFxuICAgIC00LDMsIC0yLC0xMy8qbWVhbiAoMC4yNDcyMTEpLCBjb3JyZWxhdGlvbiAoMC4zNjQwNjMpKi8sXG4gICAgLTEsLTEzLCAxLDkvKm1lYW4gKDAuMjQ5MzI1KSwgY29ycmVsYXRpb24gKDAuMzc4MTM5KSovLFxuICAgIDcsMSwgOCwtNi8qbWVhbiAoMC4wMDA2NTIyNzIpLCBjb3JyZWxhdGlvbiAoMC40MTE2ODIpKi8sXG4gICAgMSwtMSwgMywxMi8qbWVhbiAoMC4wMDI0ODUzOCksIGNvcnJlbGF0aW9uICgwLjM5Mjk4OCkqLyxcbiAgICA5LDEsIDEyLDYvKm1lYW4gKDAuMDIwNjgxNSksIGNvcnJlbGF0aW9uICgwLjM4NjEwNikqLyxcbiAgICAtMSwtOSwgLTEsMy8qbWVhbiAoMC4wMzY0NDg1KSwgY29ycmVsYXRpb24gKDAuNDEwNzUyKSovLFxuICAgIC0xMywtMTMsIC0xMCw1LyptZWFuICgwLjAzNzYwNjgpLCBjb3JyZWxhdGlvbiAoMC4zOTgzNzQpKi8sXG4gICAgNyw3LCAxMCwxMi8qbWVhbiAoMC4wNDI0MjAyKSwgY29ycmVsYXRpb24gKDAuNDA1NjYzKSovLFxuICAgIDEyLC01LCAxMiw5LyptZWFuICgwLjA5NDI2NDUpLCBjb3JyZWxhdGlvbiAoMC40MTA0MjIpKi8sXG4gICAgNiwzLCA3LDExLyptZWFuICgwLjEwNzQpLCBjb3JyZWxhdGlvbiAoMC40MTMyMjQpKi8sXG4gICAgNSwtMTMsIDYsMTAvKm1lYW4gKDAuMTA5MjU2KSwgY29ycmVsYXRpb24gKDAuNDA4NjQ2KSovLFxuICAgIDIsLTEyLCAyLDMvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuNDE2MDc2KSovLFxuICAgIDMsOCwgNCwtNi8qbWVhbiAoMC4xNjUwODEpLCBjb3JyZWxhdGlvbiAoMC40MTc1NjkpKi8sXG4gICAgMiw2LCAxMiwtMTMvKm1lYW4gKDAuMTcxODc0KSwgY29ycmVsYXRpb24gKDAuNDA4NDcxKSovLFxuICAgIDksLTEyLCAxMCwzLyptZWFuICgwLjE3NTE0NiksIGNvcnJlbGF0aW9uICgwLjQxMjk2KSovLFxuICAgIC04LDQsIC03LDkvKm1lYW4gKDAuMTgzNjgyKSwgY29ycmVsYXRpb24gKDAuNDAyOTU2KSovLFxuICAgIC0xMSwxMiwgLTQsLTYvKm1lYW4gKDAuMTg0NjcyKSwgY29ycmVsYXRpb24gKDAuNDE2MTI1KSovLFxuICAgIDEsMTIsIDIsLTgvKm1lYW4gKDAuMTkxNDg3KSwgY29ycmVsYXRpb24gKDAuMzg2Njk2KSovLFxuICAgIDYsLTksIDcsLTQvKm1lYW4gKDAuMTkyNjY4KSwgY29ycmVsYXRpb24gKDAuMzk0NzcxKSovLFxuICAgIDIsMywgMywtMi8qbWVhbiAoMC4yMDAxNTcpLCBjb3JyZWxhdGlvbiAoMC40MDgzMDMpKi8sXG4gICAgNiwzLCAxMSwwLyptZWFuICgwLjIwNDU4OCksIGNvcnJlbGF0aW9uICgwLjQxMTc2MikqLyxcbiAgICAzLC0zLCA4LC04LyptZWFuICgwLjIwNTkwNCksIGNvcnJlbGF0aW9uICgwLjQxNjI5NCkqLyxcbiAgICA3LDgsIDksMy8qbWVhbiAoMC4yMTMyMzcpLCBjb3JyZWxhdGlvbiAoMC40MDkzMDYpKi8sXG4gICAgLTExLC01LCAtNiwtNC8qbWVhbiAoMC4yNDM0NDQpLCBjb3JyZWxhdGlvbiAoMC4zOTUwNjkpKi8sXG4gICAgLTEwLDExLCAtNSwxMC8qbWVhbiAoMC4yNDc2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTMzOTIpKi8sXG4gICAgLTUsLTgsIC0zLDEyLyptZWFuICgwLjI0Nzc0KSwgY29ycmVsYXRpb24gKDAuNDExNDE2KSovLFxuICAgIC0xMCw1LCAtOSwwLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuNDU0MDAzKSovLFxuICAgIDgsLTEsIDEyLC02LyptZWFuICgwLjAyOTM2MzUpLCBjb3JyZWxhdGlvbiAoMC40NTUzNjgpKi8sXG4gICAgNCwtNiwgNiwtMTEvKm1lYW4gKDAuMDQwNDk3MSksIGNvcnJlbGF0aW9uICgwLjQ1NzM5MykqLyxcbiAgICAtMTAsMTIsIC04LDcvKm1lYW4gKDAuMDQ4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ0ODM2NCkqLyxcbiAgICA0LC0yLCA2LDcvKm1lYW4gKDAuMDUwNjQxKSwgY29ycmVsYXRpb24gKDAuNDU1MDE5KSovLFxuICAgIC0yLDAsIC0yLDEyLyptZWFuICgwLjA1MjU5NzgpLCBjb3JyZWxhdGlvbiAoMC40NDMzOCkqLyxcbiAgICAtNSwtOCwgLTUsMi8qbWVhbiAoMC4wNjI5NjY3KSwgY29ycmVsYXRpb24gKDAuNDU3MDk2KSovLFxuICAgIDcsLTYsIDEwLDEyLyptZWFuICgwLjA2NTM4NDYpLCBjb3JyZWxhdGlvbiAoMC40NDU2MjMpKi8sXG4gICAgLTksLTEzLCAtOCwtOC8qbWVhbiAoMC4wODU4NzQ5KSwgY29ycmVsYXRpb24gKDAuNDQ5Nzg5KSovLFxuICAgIC01LC0xMywgLTUsLTIvKm1lYW4gKDAuMTIyNDAyKSwgY29ycmVsYXRpb24gKDAuNDUwMjAxKSovLFxuICAgIDgsLTgsIDksLTEzLyptZWFuICgwLjEyNTQxNiksIGNvcnJlbGF0aW9uICgwLjQ1MzIyNCkqLyxcbiAgICAtOSwtMTEsIC05LDAvKm1lYW4gKDAuMTMwMTI4KSwgY29ycmVsYXRpb24gKDAuNDU4NzI0KSovLFxuICAgIDEsLTgsIDEsLTIvKm1lYW4gKDAuMTMyNDY3KSwgY29ycmVsYXRpb24gKDAuNDQwMTMzKSovLFxuICAgIDcsLTQsIDksMS8qbWVhbiAoMC4xMzI2OTIpLCBjb3JyZWxhdGlvbiAoMC40NTQpKi8sXG4gICAgLTIsMSwgLTEsLTQvKm1lYW4gKDAuMTM1Njk1KSwgY29ycmVsYXRpb24gKDAuNDU1NzM5KSovLFxuICAgIDExLC02LCAxMiwtMTEvKm1lYW4gKDAuMTQyOTA0KSwgY29ycmVsYXRpb24gKDAuNDQ2MTE0KSovLFxuICAgIC0xMiwtOSwgLTYsNC8qbWVhbiAoMC4xNDYxNjUpLCBjb3JyZWxhdGlvbiAoMC40NTE0NzMpKi8sXG4gICAgMyw3LCA3LDEyLyptZWFuICgwLjE0NzYyNyksIGNvcnJlbGF0aW9uICgwLjQ1NjY0MykqLyxcbiAgICA1LDUsIDEwLDgvKm1lYW4gKDAuMTUyOTAxKSwgY29ycmVsYXRpb24gKDAuNDU1MDM2KSovLFxuICAgIDAsLTQsIDIsOC8qbWVhbiAoMC4xNjcwODMpLCBjb3JyZWxhdGlvbiAoMC40NTkzMTUpKi8sXG4gICAgLTksMTIsIC01LC0xMy8qbWVhbiAoMC4xNzMyMzQpLCBjb3JyZWxhdGlvbiAoMC40NTQ3MDYpKi8sXG4gICAgMCw3LCAyLDEyLyptZWFuICgwLjE4MzEyKSwgY29ycmVsYXRpb24gKDAuNDMzODU1KSovLFxuICAgIC0xLDIsIDEsNy8qbWVhbiAoMC4xODU1MDQpLCBjb3JyZWxhdGlvbiAoMC40NDM4MzgpKi8sXG4gICAgNSwxMSwgNywtOS8qbWVhbiAoMC4xODU3MDYpLCBjb3JyZWxhdGlvbiAoMC40NTExMjMpKi8sXG4gICAgMyw1LCA2LC04LyptZWFuICgwLjE4ODk2OCksIGNvcnJlbGF0aW9uICgwLjQ1NTgwOCkqLyxcbiAgICAtMTMsLTQsIC04LDkvKm1lYW4gKDAuMTkxNjY3KSwgY29ycmVsYXRpb24gKDAuNDU5MTI4KSovLFxuICAgIC01LDksIC0zLC0zLyptZWFuICgwLjE5MzE5NiksIGNvcnJlbGF0aW9uICgwLjQ1ODM2NCkqLyxcbiAgICAtNCwtNywgLTMsLTEyLyptZWFuICgwLjE5NjUzNiksIGNvcnJlbGF0aW9uICgwLjQ1NTc4MikqLyxcbiAgICA2LDUsIDgsMC8qbWVhbiAoMC4xOTcyKSwgY29ycmVsYXRpb24gKDAuNDUwNDgxKSovLFxuICAgIC03LDYsIC02LDEyLyptZWFuICgwLjE5OTQzOCksIGNvcnJlbGF0aW9uICgwLjQ1ODE1NikqLyxcbiAgICAtMTMsNiwgLTUsLTIvKm1lYW4gKDAuMjExMjI0KSwgY29ycmVsYXRpb24gKDAuNDQ5NTQ4KSovLFxuICAgIDEsLTEwLCAzLDEwLyptZWFuICgwLjIxMTcxOCksIGNvcnJlbGF0aW9uICgwLjQ0MDYwNikqLyxcbiAgICA0LDEsIDgsLTQvKm1lYW4gKDAuMjEzMDM0KSwgY29ycmVsYXRpb24gKDAuNDQzMTc3KSovLFxuICAgIC0yLC0yLCAyLC0xMy8qbWVhbiAoMC4yMzQzMzQpLCBjb3JyZWxhdGlvbiAoMC40NTUzMDQpKi8sXG4gICAgMiwtMTIsIDEyLDEyLyptZWFuICgwLjIzNTY4NCksIGNvcnJlbGF0aW9uICgwLjQ0MzQzNikqLyxcbiAgICAtMiwtMTMsIDAsLTYvKm1lYW4gKDAuMjM3Njc0KSwgY29ycmVsYXRpb24gKDAuNDUyNTI1KSovLFxuICAgIDQsMSwgOSwzLyptZWFuICgwLjIzOTYyKSwgY29ycmVsYXRpb24gKDAuNDQ0ODI0KSovLFxuICAgIC02LC0xMCwgLTMsLTUvKm1lYW4gKDAuMjQ4NDU5KSwgY29ycmVsYXRpb24gKDAuNDM5NjIxKSovLFxuICAgIC0zLC0xMywgLTEsMS8qbWVhbiAoMC4yNDk1MDUpLCBjb3JyZWxhdGlvbiAoMC40NTY2NjYpKi8sXG4gICAgNyw1LCAxMiwtMTEvKm1lYW4gKDAuMDAxMTkyMDgpLCBjb3JyZWxhdGlvbiAoMC40OTU0NjYpKi8sXG4gICAgNCwtMiwgNSwtNy8qbWVhbiAoMC4wMDM3MjI0NSksIGNvcnJlbGF0aW9uICgwLjQ4NDIxNCkqLyxcbiAgICAtMTMsOSwgLTksLTUvKm1lYW4gKDAuMDA3NDExMTYpLCBjb3JyZWxhdGlvbiAoMC40OTk4NTQpKi8sXG4gICAgNywxLCA4LDYvKm1lYW4gKDAuMDIwODk1MiksIGNvcnJlbGF0aW9uICgwLjQ5OTc3MykqLyxcbiAgICA3LC04LCA3LDYvKm1lYW4gKDAuMDIyMDA4NSksIGNvcnJlbGF0aW9uICgwLjUwMTYwOSkqLyxcbiAgICAtNywtNCwgLTcsMS8qbWVhbiAoMC4wMjMzODA2KSwgY29ycmVsYXRpb24gKDAuNDk2NTY4KSovLFxuICAgIC04LDExLCAtNywtOC8qbWVhbiAoMC4wMjM2NTA1KSwgY29ycmVsYXRpb24gKDAuNDg5NzE5KSovLFxuICAgIC0xMyw2LCAtMTIsLTgvKm1lYW4gKDAuMDI2ODc4MSksIGNvcnJlbGF0aW9uICgwLjUwMzQ4NykqLyxcbiAgICAyLDQsIDMsOS8qbWVhbiAoMC4wMzIzMzI0KSwgY29ycmVsYXRpb24gKDAuNTAxOTM4KSovLFxuICAgIDEwLC01LCAxMiwzLyptZWFuICgwLjAzOTkyMzUpLCBjb3JyZWxhdGlvbiAoMC40OTQwMjkpKi8sXG4gICAgLTYsLTUsIC02LDcvKm1lYW4gKDAuMDQyMDE1MyksIGNvcnJlbGF0aW9uICgwLjQ4NjU3OSkqLyxcbiAgICA4LC0zLCA5LC04LyptZWFuICgwLjA1NDgwMjEpLCBjb3JyZWxhdGlvbiAoMC40ODQyMzcpKi8sXG4gICAgMiwtMTIsIDIsOC8qbWVhbiAoMC4wNjE2NjIyKSwgY29ycmVsYXRpb24gKDAuNDk2NjQyKSovLFxuICAgIC0xMSwtMiwgLTEwLDMvKm1lYW4gKDAuMDYyNzc1NSksIGNvcnJlbGF0aW9uICgwLjQ5ODU2MykqLyxcbiAgICAtMTIsLTEzLCAtNywtOS8qbWVhbiAoMC4wODI5NjIyKSwgY29ycmVsYXRpb24gKDAuNDk1NDkxKSovLFxuICAgIC0xMSwwLCAtMTAsLTUvKm1lYW4gKDAuMDg0MzM0MiksIGNvcnJlbGF0aW9uICgwLjQ4NzE0NikqLyxcbiAgICA1LC0zLCAxMSw4LyptZWFuICgwLjA5Mjk5MzcpLCBjb3JyZWxhdGlvbiAoMC41MDIzMTUpKi8sXG4gICAgLTIsLTEzLCAtMSwxMi8qbWVhbiAoMC4xMTMzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk0MSkqLyxcbiAgICAtMSwtOCwgMCw5LyptZWFuICgwLjEzMjExOSksIGNvcnJlbGF0aW9uICgwLjQ2NzI2OCkqLyxcbiAgICAtMTMsLTExLCAtMTIsLTUvKm1lYW4gKDAuMTM2MjY5KSwgY29ycmVsYXRpb24gKDAuNDk4NzcxKSovLFxuICAgIC0xMCwtMiwgLTEwLDExLyptZWFuICgwLjE0MjE3MyksIGNvcnJlbGF0aW9uICgwLjQ5ODcxNCkqLyxcbiAgICAtMyw5LCAtMiwtMTMvKm1lYW4gKDAuMTQ0MTQxKSwgY29ycmVsYXRpb24gKDAuNDkxOTczKSovLFxuICAgIDIsLTMsIDMsMi8qbWVhbiAoMC4xNDg5MiksIGNvcnJlbGF0aW9uICgwLjUwMDc4MikqLyxcbiAgICAtOSwtMTMsIC00LDAvKm1lYW4gKDAuMTUwMzcxKSwgY29ycmVsYXRpb24gKDAuNDk4MjExKSovLFxuICAgIC00LDYsIC0zLC0xMC8qbWVhbiAoMC4xNTIxNTkpLCBjb3JyZWxhdGlvbiAoMC40OTU1NDcpKi8sXG4gICAgLTQsMTIsIC0yLC03LyptZWFuICgwLjE1NjE1MiksIGNvcnJlbGF0aW9uICgwLjQ5NjkyNSkqLyxcbiAgICAtNiwtMTEsIC00LDkvKm1lYW4gKDAuMTU3NDkpLCBjb3JyZWxhdGlvbiAoMC40OTkyMjIpKi8sXG4gICAgNiwtMywgNiwxMS8qbWVhbiAoMC4xNTkyMTEpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjEpKi8sXG4gICAgLTEzLDExLCAtNSw1LyptZWFuICgwLjE2MjQyNyksIGNvcnJlbGF0aW9uICgwLjUwMTkwNykqLyxcbiAgICAxMSwxMSwgMTIsNi8qbWVhbiAoMC4xNjY1MiksIGNvcnJlbGF0aW9uICgwLjQ5NzYzMikqLyxcbiAgICA3LC01LCAxMiwtMi8qbWVhbiAoMC4xNjkxNDEpLCBjb3JyZWxhdGlvbiAoMC40ODQ0NzQpKi8sXG4gICAgLTEsMTIsIDAsNy8qbWVhbiAoMC4xNjk0NTYpLCBjb3JyZWxhdGlvbiAoMC40OTUzMzkpKi8sXG4gICAgLTQsLTgsIC0zLC0yLyptZWFuICgwLjE3MTQ1NyksIGNvcnJlbGF0aW9uICgwLjQ4NzI1MSkqLyxcbiAgICAtNywxLCAtNiw3LyptZWFuICgwLjE3NSksIGNvcnJlbGF0aW9uICgwLjUwMDAyNCkqLyxcbiAgICAtMTMsLTEyLCAtOCwtMTMvKm1lYW4gKDAuMTc1ODY2KSwgY29ycmVsYXRpb24gKDAuNDk3NTIzKSovLFxuICAgIC03LC0yLCAtNiwtOC8qbWVhbiAoMC4xNzgyNzMpLCBjb3JyZWxhdGlvbiAoMC41MDE4NTQpKi8sXG4gICAgLTgsNSwgLTYsLTkvKm1lYW4gKDAuMTgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDk0ODg4KSovLFxuICAgIC01LC0xLCAtNCw1LyptZWFuICgwLjE5MDIyNyksIGNvcnJlbGF0aW9uICgwLjQ4MjU1NykqLyxcbiAgICAtMTMsNywgLTgsMTAvKm1lYW4gKDAuMTk2NzM5KSwgY29ycmVsYXRpb24gKDAuNDk2NTAzKSovLFxuICAgIDEsNSwgNSwtMTMvKm1lYW4gKDAuMTk5NzMpLCBjb3JyZWxhdGlvbiAoMC40OTk3NTkpKi8sXG4gICAgMSwwLCAxMCwtMTMvKm1lYW4gKDAuMjA0NDY1KSwgY29ycmVsYXRpb24gKDAuNDk4NzMpKi8sXG4gICAgOSwxMiwgMTAsLTEvKm1lYW4gKDAuMjA5MzM0KSwgY29ycmVsYXRpb24gKDAuNDkwNjMpKi8sXG4gICAgNSwtOCwgMTAsLTkvKm1lYW4gKDAuMjExMTM0KSwgY29ycmVsYXRpb24gKDAuNTAzMDExKSovLFxuICAgIC0xLDExLCAxLC0xMy8qbWVhbiAoMC4yMTIpLCBjb3JyZWxhdGlvbiAoMC40OTk0MTQpKi8sXG4gICAgLTksLTMsIC02LDIvKm1lYW4gKDAuMjEyMTY4KSwgY29ycmVsYXRpb24gKDAuNDgwNzM5KSovLFxuICAgIC0xLC0xMCwgMSwxMi8qbWVhbiAoMC4yMTI3MzEpLCBjb3JyZWxhdGlvbiAoMC41MDI1MjMpKi8sXG4gICAgLTEzLDEsIC04LC0xMC8qbWVhbiAoMC4yMTMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTc4NikqLyxcbiAgICA4LC0xMSwgMTAsLTYvKm1lYW4gKDAuMjE0MTU5KSwgY29ycmVsYXRpb24gKDAuNDg4MjQ2KSovLFxuICAgIDIsLTEzLCAzLC02LyptZWFuICgwLjIxNjk5MyksIGNvcnJlbGF0aW9uICgwLjUwMjg3KSovLFxuICAgIDcsLTEzLCAxMiwtOS8qbWVhbiAoMC4yMjM2MzkpLCBjb3JyZWxhdGlvbiAoMC40NzA1MDIpKi8sXG4gICAgLTEwLC0xMCwgLTUsLTcvKm1lYW4gKDAuMjI0MDg5KSwgY29ycmVsYXRpb24gKDAuNTAwODUyKSovLFxuICAgIC0xMCwtOCwgLTgsLTEzLyptZWFuICgwLjIyODY2NiksIGNvcnJlbGF0aW9uICgwLjUwMjYyOSkqLyxcbiAgICA0LC02LCA4LDUvKm1lYW4gKDAuMjI5MDYpLCBjb3JyZWxhdGlvbiAoMC40OTgzMDUpKi8sXG4gICAgMywxMiwgOCwtMTMvKm1lYW4gKDAuMjMzMzc4KSwgY29ycmVsYXRpb24gKDAuNTAzODI1KSovLFxuICAgIC00LDIsIC0zLC0zLyptZWFuICgwLjIzNDMyMyksIGNvcnJlbGF0aW9uICgwLjQ3NjY5MikqLyxcbiAgICA1LC0xMywgMTAsLTEyLyptZWFuICgwLjIzNjM5MiksIGNvcnJlbGF0aW9uICgwLjQ3NTQ2MikqLyxcbiAgICA0LC0xMywgNSwtMS8qbWVhbiAoMC4yMzY4NDIpLCBjb3JyZWxhdGlvbiAoMC41MDQxMzIpKi8sXG4gICAgLTksOSwgLTQsMy8qbWVhbiAoMC4yMzY5NzcpLCBjb3JyZWxhdGlvbiAoMC40OTc3MzkpKi8sXG4gICAgMCwzLCAzLC05LyptZWFuICgwLjI0MzE0KSwgY29ycmVsYXRpb24gKDAuNDk5Mzk4KSovLFxuICAgIC0xMiwxLCAtNiwxLyptZWFuICgwLjI0MzI5NyksIGNvcnJlbGF0aW9uICgwLjQ4OTQ0NykqLyxcbiAgICAzLDIsIDQsLTgvKm1lYW4gKDAuMDAxNTUxOTYpLCBjb3JyZWxhdGlvbiAoMC41NTM0OTYpKi8sXG4gICAgLTEwLC0xMCwgLTEwLDkvKm1lYW4gKDAuMDAyMzk1NDEpLCBjb3JyZWxhdGlvbiAoMC41NDI5NykqLyxcbiAgICA4LC0xMywgMTIsMTIvKm1lYW4gKDAuMDAzNDQxMyksIGNvcnJlbGF0aW9uICgwLjU0NDM2MSkqLyxcbiAgICAtOCwtMTIsIC02LC01LyptZWFuICgwLjAwMzU2NSksIGNvcnJlbGF0aW9uICgwLjU1MTIyNSkqLyxcbiAgICAyLDIsIDMsNy8qbWVhbiAoMC4wMDgzNTU4MyksIGNvcnJlbGF0aW9uICgwLjU1Mjg1KSovLFxuICAgIDEwLDYsIDExLC04LyptZWFuICgwLjAwODg1MDY1KSwgY29ycmVsYXRpb24gKDAuNTQwOTEzKSovLFxuICAgIDYsOCwgOCwtMTIvKm1lYW4gKDAuMDEwMTU1MiksIGNvcnJlbGF0aW9uICgwLjU1MTA4NSkqLyxcbiAgICAtNywxMCwgLTYsNS8qbWVhbiAoMC4wMTAyMjI3KSwgY29ycmVsYXRpb24gKDAuNTMzNjM1KSovLFxuICAgIC0zLC05LCAtMyw5LyptZWFuICgwLjAxMTAyMTEpLCBjb3JyZWxhdGlvbiAoMC41NDMxMjEpKi8sXG4gICAgLTEsLTEzLCAtMSw1LyptZWFuICgwLjAxMTM0NzMpLCBjb3JyZWxhdGlvbiAoMC41NTAxNzMpKi8sXG4gICAgLTMsLTcsIC0zLDQvKm1lYW4gKDAuMDE0MDkxMyksIGNvcnJlbGF0aW9uICgwLjU1NDc3NCkqLyxcbiAgICAtOCwtMiwgLTgsMy8qbWVhbiAoMC4wMTcwNDkpLCBjb3JyZWxhdGlvbiAoMC41NTQ2MSkqLyxcbiAgICA0LDIsIDEyLDEyLyptZWFuICgwLjAxNzc4KSwgY29ycmVsYXRpb24gKDAuNTQ2OTIxKSovLFxuICAgIDIsLTUsIDMsMTEvKm1lYW4gKDAuMDIyNDAyMiksIGNvcnJlbGF0aW9uICgwLjU0OTY2NykqLyxcbiAgICA2LC05LCAxMSwtMTMvKm1lYW4gKDAuMDI5MTYxKSwgY29ycmVsYXRpb24gKDAuNTQ2Mjk1KSovLFxuICAgIDMsLTEsIDcsMTIvKm1lYW4gKDAuMDMwMzA4MSksIGNvcnJlbGF0aW9uICgwLjU0ODU5OSkqLyxcbiAgICAxMSwtMSwgMTIsNC8qbWVhbiAoMC4wMzU1MTUxKSwgY29ycmVsYXRpb24gKDAuNTIzOTQzKSovLFxuICAgIC0zLDAsIC0zLDYvKm1lYW4gKDAuMDQxNzkwNCksIGNvcnJlbGF0aW9uICgwLjU0MzM5NSkqLyxcbiAgICA0LC0xMSwgNCwxMi8qbWVhbiAoMC4wNDg3MjkyKSwgY29ycmVsYXRpb24gKDAuNTQyODE4KSovLFxuICAgIDIsLTQsIDIsMS8qbWVhbiAoMC4wNTc1MTI0KSwgY29ycmVsYXRpb24gKDAuNTU0ODg4KSovLFxuICAgIC0xMCwtNiwgLTgsMS8qbWVhbiAoMC4wNTk0MjQyKSwgY29ycmVsYXRpb24gKDAuNTQ0MDI2KSovLFxuICAgIC0xMyw3LCAtMTEsMS8qbWVhbiAoMC4wNTk3MzkxKSwgY29ycmVsYXRpb24gKDAuNTUwNTI0KSovLFxuICAgIC0xMywxMiwgLTExLC0xMy8qbWVhbiAoMC4wNjA4OTc0KSwgY29ycmVsYXRpb24gKDAuNTUzODMpKi8sXG4gICAgNiwwLCAxMSwtMTMvKm1lYW4gKDAuMDY1MTI2KSwgY29ycmVsYXRpb24gKDAuNTUyMDA2KSovLFxuICAgIDAsLTEsIDEsNC8qbWVhbiAoMC4wNzQyMjQpLCBjb3JyZWxhdGlvbiAoMC41NDYzNzIpKi8sXG4gICAgLTEzLDMsIC05LC0yLyptZWFuICgwLjA4MDg1OTIpLCBjb3JyZWxhdGlvbiAoMC41NTQ4NzUpKi8sXG4gICAgLTksOCwgLTYsLTMvKm1lYW4gKDAuMDg4MzM3OCksIGNvcnJlbGF0aW9uICgwLjU1MTE3OCkqLyxcbiAgICAtMTMsLTYsIC04LC0yLyptZWFuICgwLjA5MDEwMzUpLCBjb3JyZWxhdGlvbiAoMC41NDg0NDYpKi8sXG4gICAgNSwtOSwgOCwxMC8qbWVhbiAoMC4wOTQ5ODQzKSwgY29ycmVsYXRpb24gKDAuNTU0Njk0KSovLFxuICAgIDIsNywgMywtOS8qbWVhbiAoMC4wOTk0MTUyKSwgY29ycmVsYXRpb24gKDAuNTUwOTc5KSovLFxuICAgIC0xLC02LCAtMSwtMS8qbWVhbiAoMC4xMDA0NSksIGNvcnJlbGF0aW9uICgwLjU1MjcxNCkqLyxcbiAgICA5LDUsIDExLC0yLyptZWFuICgwLjEwMDY4NiksIGNvcnJlbGF0aW9uICgwLjU1MjU5NCkqLyxcbiAgICAxMSwtMywgMTIsLTgvKm1lYW4gKDAuMTAxMDkxKSwgY29ycmVsYXRpb24gKDAuNTMyMzk0KSovLFxuICAgIDMsMCwgMyw1LyptZWFuICgwLjEwMTE0NyksIGNvcnJlbGF0aW9uICgwLjUyNTU3NikqLyxcbiAgICAtMSw0LCAwLDEwLyptZWFuICgwLjEwNTI2MyksIGNvcnJlbGF0aW9uICgwLjUzMTQ5OCkqLyxcbiAgICAzLC02LCA0LDUvKm1lYW4gKDAuMTEwNzg1KSwgY29ycmVsYXRpb24gKDAuNTQwNDkxKSovLFxuICAgIC0xMywwLCAtMTAsNS8qbWVhbiAoMC4xMTI3OTgpLCBjb3JyZWxhdGlvbiAoMC41MzY1ODIpKi8sXG4gICAgNSw4LCAxMiwxMS8qbWVhbiAoMC4xMTQxODEpLCBjb3JyZWxhdGlvbiAoMC41NTU3OTMpKi8sXG4gICAgOCw5LCA5LC02LyptZWFuICgwLjExNzQzMSksIGNvcnJlbGF0aW9uICgwLjU1Mzc2MykqLyxcbiAgICA3LC00LCA4LC0xMi8qbWVhbiAoMC4xMTg1MjIpLCBjb3JyZWxhdGlvbiAoMC41NTM0NTIpKi8sXG4gICAgLTEwLDQsIC0xMCw5LyptZWFuICgwLjEyMDk0KSwgY29ycmVsYXRpb24gKDAuNTU0Nzg1KSovLFxuICAgIDcsMywgMTIsNC8qbWVhbiAoMC4xMjI1ODIpLCBjb3JyZWxhdGlvbiAoMC41NTU4MjUpKi8sXG4gICAgOSwtNywgMTAsLTIvKm1lYW4gKDAuMTI0OTc4KSwgY29ycmVsYXRpb24gKDAuNTQ5ODQ2KSovLFxuICAgIDcsMCwgMTIsLTIvKm1lYW4gKDAuMTI3MDAyKSwgY29ycmVsYXRpb24gKDAuNTM3NDUyKSovLFxuICAgIC0xLC02LCAwLC0xMS8qbWVhbiAoMC4xMjcxNDgpLCBjb3JyZWxhdGlvbiAoMC41NDc0MDEpKi9cbl07IiwiZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjOiBhbnksIGRzdDogYW55LCBhbmdsZTogbnVtYmVyLCBweDogbnVtYmVyLCBweTogbnVtYmVyLCBwc2l6ZTogbnVtYmVyLCBIOiB7IGRhdGE6IGFueVtdOyB9LCBpbWdwcm9jOiBhbnkpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3Byb2Mud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzJ1xuXG5leHBvcnQgY2xhc3MgeWFwZSB7XG4gICAgcHJpdmF0ZSBsZXZlbF90YWJsZXM6IGxldl90YWJsZV90W107XG4gICAgcHJpdmF0ZSB0YXU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBweXJhbWlkX2xldmVsczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHlyYW1pZF9sZXZlbHMgPT09IFwidW5kZWZpbmVkXCIpIHsgcHlyYW1pZF9sZXZlbHMgPSAxOyB9XG4gICAgICAgIHZhciBpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1pbihyYWRpdXMsIDcpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heChyYWRpdXMsIDMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHlyYW1pZF9sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF90YWJsZXNbaV0gPSBuZXcgbGV2X3RhYmxlX3Qod2lkdGggPj4gaSwgaGVpZ2h0ID4+IGksIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3Qoc3JjOiB7IGRhdGE6IGFueTsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IH0sIHBvaW50czogYW55W10sIGJvcmRlcjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDQ7IH1cbiAgICAgICAgdmFyIHQgPSB0aGlzLmxldmVsX3RhYmxlc1swXTtcbiAgICAgICAgdmFyIFIgPSB0LnJhZGl1cyB8IDAsIFJtMSA9IChSIC0gMSkgfCAwO1xuICAgICAgICB2YXIgZGlycyA9IHQuZGlycztcbiAgICAgICAgdmFyIGRpcnNfY291bnQgPSB0LmRpcnNfY291bnQgfCAwO1xuICAgICAgICB2YXIgb3Bwb3NpdGUgPSBkaXJzX2NvdW50ID4+IDE7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzIHwgMCwgaCA9IHNyYy5yb3dzIHwgMCwgaHcgPSB3ID4+IDE7XG4gICAgICAgIHZhciBzY29yZXMgPSB0LnNjb3JlcztcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIGlwID0gMCwgaW0gPSAwLCBhYnNfc2NvcmUgPSAwLCBzY29yZSA9IDA7XG4gICAgICAgIHZhciB0YXUgPSB0aGlzLnRhdSB8IDA7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMCwgcHQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoUiArIDEsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleCA9IE1hdGgubWluKHcgLSBSIC0gMiwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gUiAtIDIsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBpcCA9IGltZ1tyb3d4XSArIHRhdSwgaW0gPSBpbWdbcm93eF0gLSB0YXU7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW0gPCBpbWdbcm93eCArIFJdICYmIGltZ1tyb3d4ICsgUl0gPCBpcCAmJiBpbSA8IGltZ1tyb3d4IC0gUl0gJiYgaW1nW3Jvd3ggLSBSXSA8IGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3Jlc1tyb3d4XSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybV9vbmVfcG9pbnQoaW1nLCByb3d4LCBzY29yZXMsIGltLCBpcCwgZGlycywgb3Bwb3NpdGUsIGRpcnNfY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvY2FsIG1heGltYVxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBzY29yZSA9IHNjb3Jlc1tyb3d4XTtcbiAgICAgICAgICAgICAgICBhYnNfc2NvcmUgPSBNYXRoLmFicyhzY29yZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFic19zY29yZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBwaXhlbCBpcyAwLCB0aGUgbmV4dCBvbmUgd2lsbCBub3QgYmUgZ29vZCBlbm91Z2guIFNraXAgaXQuXG4gICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlyZF9jaGVjayhzY29yZXMsIHJvd3gsIHcpID49IDMgJiYgaXNfbG9jYWxfbWF4aW1hKHNjb3Jlcywgcm93eCwgc2NvcmUsIGh3LCBSKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gYWJzX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IFJtMSwgcm93eCArPSBSbTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHByZWNvbXB1dGVfZGlyZWN0aW9ucyhzdGVwOiBudW1iZXIsIGRpcnM6IEludDMyQXJyYXksIFI6IG51bWJlcikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCwgeTtcblxuICAgIHggPSBSO1xuICAgIGZvciAoeSA9IDA7IHkgPCB4OyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4LS07IHggPCB5ICYmIHggPj0gMDsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHktLTsgeSA+PSAwOyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB5ID4geDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB4IDwgLXk7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5Kys7IHkgPCAwOyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYjogSW50MzJBcnJheSB8IG51bWJlcltdLCBvZmY6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwOiBJbnQzMkFycmF5LCBvZmY6IG51bWJlciwgdjogbnVtYmVyLCBzdGVwOiBudW1iZXIsIG5laWdoYm9yaG9vZDogbnVtYmVyKSB7XG4gICAgdmFyIHgsIHk7XG5cbiAgICBpZiAodiA+IDApIHtcbiAgICAgICAgb2ZmIC09IHN0ZXAgKiBuZWlnaGJvcmhvb2Q7XG4gICAgICAgIGZvciAoeSA9IC1uZWlnaGJvcmhvb2Q7IHkgPD0gbmVpZ2hib3Job29kOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IC1uZWlnaGJvcmhvb2Q7IHggPD0gbmVpZ2hib3Job29kOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAocFtvZmYgKyB4XSA+IHYpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZiArPSBzdGVwO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmIC09IHN0ZXAgKiBuZWlnaGJvcmhvb2Q7XG4gICAgICAgIGZvciAoeSA9IC1uZWlnaGJvcmhvb2Q7IHkgPD0gbmVpZ2hib3Job29kOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IC1uZWlnaGJvcmhvb2Q7IHggPD0gbmVpZ2hib3Job29kOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAocFtvZmYgKyB4XSA8IHYpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZiArPSBzdGVwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyZm9ybV9vbmVfcG9pbnQoSTogeyBbeDogc3RyaW5nXTogbnVtYmVyOyB9LCB4OiBudW1iZXIsIFNjb3JlczogSW50MzJBcnJheSwgSW06IG51bWJlciwgSXA6IG51bWJlciwgZGlyczogYW55W10gfCBJbnQzMkFycmF5LCBvcHBvc2l0ZTogbnVtYmVyLCBkaXJzX25iOiBudW1iZXIpIHtcbiAgICB2YXIgc2NvcmUgPSAwO1xuICAgIHZhciBhID0gMCwgYiA9IChvcHBvc2l0ZSAtIDEpIHwgMDtcbiAgICB2YXIgQSA9IDAsIEIwID0gMCwgQjEgPSAwLCBCMiA9IDA7XG4gICAgdmFyIHN0YXRlID0gMDtcblxuICAgIC8vIFdFIEtOT1cgVEhBVCBOT1QoQSB+IEkwICYgQjEgfiBJMCk6XG4gICAgQSA9IElbeCArIGRpcnNbYV1dO1xuICAgIGlmICgoQSA8PSBJcCkpIHtcbiAgICAgICAgaWYgKChBID49IEltKSkgeyAvLyBBIH4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIwIDw9IElwKSkge1xuICAgICAgICAgICAgICAgIGlmICgoQjAgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlLyogaWYgKChCMSA8IEltKSkqLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9lbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjEgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBCMCA8IEkwXG4gICAgICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjEgfiBJMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyBBID4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIwID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBBIDwgSTBcbiAgICB7XG4gICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjAgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBzdGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgZm9yIChhID0gMTsgYSA8PSBvcHBvc2l0ZTsgYSsrKSB7XG4gICAgICAgIEEgPSBJW3ggKyBkaXJzW2FdXTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDg7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA5OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMSA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA0OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA1OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDg7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvL1wiUEIgZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIHN3aXRjaChzdGF0ZSlcbiAgICB9IC8vIGZvcihhLi4uKVxuXG4gICAgU2NvcmVzW3hdID0gKHNjb3JlICsgZGlyc19uYiAqIElbeF0pO1xufVxuXG5leHBvcnQgY2xhc3MgbGV2X3RhYmxlX3Qge1xuICAgIHB1YmxpYyBkaXJzOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBkaXJzX2NvdW50OiBudW1iZXI7XG4gICAgcHVibGljIHNjb3JlczogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IodzogbnVtYmVyLCBoOiBudW1iZXIsIHI6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVfbGFwbGFjaWFuKHNyYzogYW55W10sIGRzdDogYW55W10sIHc6IG51bWJlciwgaDogYW55LCBEeHg6IG51bWJlciwgRHl5OiBudW1iZXIsIHN4OiBudW1iZXIsc3k6IG51bWJlciwgZXg6IG51bWJlcixleTogbnVtYmVyKSB7XG4gICAgdmFyIHk9MCx4PTAseXJvdz0oc3kqdytzeCl8MCxyb3c9eXJvdztcblxuICAgIGZvcih5ID0gc3k7IHkgPCBleTsgKyt5LCB5cm93Kz13LCByb3cgPSB5cm93KSB7XG4gICAgICAgIGZvcih4ID0gc3g7IHggPCBleDsgKyt4LCArK3Jvdykge1xuICAgICAgICAgICAgZHN0W3Jvd10gPSAtNCAqIHNyY1tyb3ddICsgc3JjW3JvdytEeHhdICsgc3JjW3Jvdy1EeHhdICsgc3JjW3JvdytEeXldICsgc3JjW3Jvdy1EeXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JjOiBudW1iZXJbXSwgb2ZmOiBudW1iZXIsIHRyOiBudW1iZXIsIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgRHh5OiBudW1iZXIsIER5eDogbnVtYmVyKSB7XG4gICAgdmFyIEl4eCA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHh4XSArIHNyY1tvZmYgLSBEeHhdO1xuICAgIHZhciBJeXkgPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER5eV0gKyBzcmNbb2ZmIC0gRHl5XTtcbiAgICB2YXIgSXh5ID0gc3JjW29mZiArIER4eV0gKyBzcmNbb2ZmIC0gRHh5XSAtIHNyY1tvZmYgKyBEeXhdIC0gc3JjW29mZiAtIER5eF07XG4gICAgdmFyIHNxcnRfZGVsdGEgPSAoIE1hdGguc3FydCgoKEl4eCAtIEl5eSkgKiAoSXh4IC0gSXl5KSArIDQgKiBJeHkgKiBJeHkpICkgKXwwO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGguYWJzKHRyIC0gc3FydF9kZWx0YSksIE1hdGguYWJzKC0odHIgKyBzcXJ0X2RlbHRhKSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuL2pzZmVhdE5leHQnXG5leHBvcnQgZGVmYXVsdCB7XG4gICBqc2ZlYXROZXh0XG59Il0sIm5hbWVzIjpbIl9wb29sX25vZGVfdCIsImNhY2hlIiwiX3Bvb2xfaGVhZCIsIl9wb29sX3RhaWwiLCJfcG9vbF9zaXplIiwiY2FwYWNpdHkiLCJkYXRhX3NpemUiLCJpIiwibm9kZSIsIm5leHQiLCJzaXplX2luX2J5dGVzIiwic2l6ZSIsInJlc2l6ZSIsIkpTRkVBVF9DT05TVEFOVFMiLCJFUFNJTE9OIiwiRkxUX01JTiIsIlU4X3QiLCJTMzJfdCIsIkYzMl90IiwiUzY0X3QiLCJGNjRfdCIsIkMxX3QiLCJDMl90IiwiQzNfdCIsIkM0X3QiLCJDT0xPUl9SR0JBMkdSQVkiLCJDT0xPUl9SR0IyR1JBWSIsIkNPTE9SX0JHUkEyR1JBWSIsIkNPTE9SX0JHUjJHUkFZIiwiQk9YX0JMVVJfTk9TQ0FMRSIsIlNWRF9VX1QiLCJTVkRfVl9UIiwiVThDMV90IiwiVThDM190IiwiVThDNF90IiwiRjMyQzFfdCIsIkYzMkMyX3QiLCJTMzJDMV90IiwiUzMyQzJfdCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwiayIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiTWF0aCIsIm1pbiIsIl9jb252b2wiLCJfcmVzYW1wbGVfdTgiLCJzcmMiLCJkc3QiLCJudyIsIm5oIiwieG9mc19jb3VudCIsImNoIiwiY2hhbm5lbCIsImNvbHMiLCJyb3dzIiwiZGF0YSIsInNjYWxlX3giLCJzY2FsZV95IiwiaW52X3NjYWxlXzI1NiIsImR4IiwiZHkiLCJzeCIsInN5Iiwic3gxIiwic3gyIiwiZnN4MSIsImZzeDIiLCJhIiwiYiIsImR4biIsImFscGhhIiwiYmV0YSIsImJldGExIiwiYnVmX25vZGUiLCJnZXRfYnVmZmVyIiwic3VtX25vZGUiLCJ4b2ZzX25vZGUiLCJpMzIiLCJ4b2ZzIiwibWF4IiwicHV0X2J1ZmZlciIsIl9yZXNhbXBsZSIsInNjYWxlIiwiZjMyIiwiYWJzIiwic3dhcCIsImh5cG90IiwibWF0bWF0aCIsIm1hdHJpeF90Iiwia2V5cG9pbnRfdCIsImJpdF9wYXR0ZXJuXzMxIiwicmVjdGlmeV9wYXRjaCIsInlhcGUiLCJjb21wdXRlX2xhcGxhY2lhbiIsImhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIiwicmFuc2FjX3BhcmFtc190IiwicGtnIiwianNmZWF0TmV4dCIsImR0IiwiYWxsb2NhdGUiLCJfZ2V0X2RhdGFfdHlwZSIsIl9nZXRfY2hhbm5lbCIsIl9nZXRfZGF0YV90eXBlX3NpemUiLCJ2ZXJzaW9uIiwibW90aW9uX21vZGVsIiwiVDAiLCJUMSIsIkF0QSIsIkF0QiIsIngiLCJmcm9tIiwidG8iLCJjb3VudCIsImN4MCIsImN5MCIsImQwIiwiczAiLCJjeDEiLCJjeTEiLCJkMSIsInMxIiwieSIsInNxcnQiLCJTUVJUMiIsInBvaW50cyIsImR4MSIsImR5MSIsImR4MiIsImR5MiIsImFmZmluZTJkIiwibW9kZWwiLCJtZCIsInQwZCIsInQxZCIsInB0MCIsInB0MSIsInB4IiwicHkiLCJfbWF0bWF0aCIsIl9saW5hbGciLCJsaW5hbGciLCJpc29fbm9ybWFsaXplX3BvaW50cyIsImFfYnVmZiIsImJfYnVmZiIsImFfbXQiLCJiX210IiwiYWQiLCJiZCIsIm11bHRpcGx5X0F0QSIsIm11bHRpcGx5X0F0QiIsImx1X3NvbHZlIiwiaW52ZXJ0XzN4MyIsIm11bHRpcGx5XzN4MyIsImhvbW9ncmFwaHkyZCIsIm1MdEwiLCJFdmVjIiwiTHRMIiwiZXZkIiwiWCIsIlkiLCJzbXgiLCJzbXkiLCJjbXgiLCJjbXkiLCJzTXgiLCJzTXkiLCJjTXgiLCJjTXkiLCJlaWdlblZWIiwiZXJyIiwid3ciLCJtIiwibmVnYXRpdmUiLCJmcDAiLCJmcDEiLCJmcDIiLCJmcDMiLCJ0cDAiLCJ0cDEiLCJ0cDIiLCJ0cDMiLCJBMTEiLCJBMTIiLCJBMTMiLCJBMjEiLCJBMjIiLCJBMjMiLCJBMzEiLCJBMzIiLCJBMzMiLCJCMTEiLCJCMTIiLCJCMTMiLCJCMjEiLCJCMjIiLCJCMjMiLCJCMzEiLCJCMzIiLCJCMzMiLCJkZXRBIiwiZGV0ZXJtaW5hbnRfM3gzIiwiZGV0QiIsInB5cmFtaWRfdCIsImxldmVscyIsIkFycmF5IiwiX2ltZ3Byb2MiLCJpbWdwcm9jIiwicHlyZG93biIsInN0YXJ0X3ciLCJzdGFydF9oIiwiaW5wdXQiLCJza2lwX2ZpcnN0X2xldmVsIiwiY29kZSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsInJhZGl1cyIsIm9wdGlvbnMiLCJoMiIsImVuZCIsIndpbmRvd1NpemUiLCJyYWRpdXNQbHVzT25lIiwicmFkaXVzUGx1czIiLCJ0bXBfYnVmZiIsImRzdEluZGV4Iiwic3JjSW5kZXgiLCJuZXh0UGl4ZWxJbmRleCIsInByZXZpb3VzUGl4ZWxJbmRleCIsImRhdGFfaTMyIiwiZGF0YV91OCIsImhvbGQiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXRoIiwiaXNfdTgiLCJidWZfc3oiLCJmaWx0X25vZGUiLCJnZXRfZ2F1c3NpYW5fa2VybmVsIiwiaW1nIiwicmhvX3JlcyIsInRoZXRhX3JlcyIsInRocmVzaG9sZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGVwIiwibWluX3RoZXRhIiwibWF4X3RoZXRhIiwiUEkiLCJudW1hbmdsZSIsInJvdW5kIiwibnVtcmhvIiwiaXJobyIsImFjY3VtIiwidGFiU2luIiwiRmxvYXQzMkFycmF5IiwidGFiQ29zIiwibiIsImFuZyIsInNpbiIsImNvcyIsInIiLCJfc29ydF9idWYiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsImRzdGVwIiwieDEiLCJjIiwiZCIsImUiLCJmIiwic3JvdzAiLCJzcm93MSIsInNyb3cyIiwiZHJvdyIsInRyb3cwIiwidHJvdzEiLCJneGd5IiwiYnVmMF9ub2RlIiwiYnVmMV9ub2RlIiwiZHN0X3N1bSIsImRzdF9zcXN1bSIsImRzdF90aWx0ZWQiLCJ3MCIsImgwIiwidzEiLCJzIiwiczIiLCJwIiwicHVwIiwidiIsInByZXYiLCJoaXN0MCIsIm5vcm0iLCJoaXN0MF9ub2RlIiwibG93X3RocmVzaCIsImhpZ2hfdGhyZXNoIiwiZ3JhZCIsIl9ncmFkIiwic3VwcHJlc3MiLCJ0ZzIyeCIsInRnNjd4IiwiZHhkeV9ub2RlIiwibWFwX25vZGUiLCJzdGFja19ub2RlIiwibWFwIiwic3RhY2siLCJkeGR5IiwiZHhkeV9tIiwicm93MCIsInJvdzEiLCJyb3cyIiwibWFwX3ciLCJtYXBfaSIsInN0YWNrX2kiLCJzb2JlbF9kZXJpdmF0aXZlcyIsIk51bWJlciIsInRyYW5zZm9ybSIsImZpbGxfdmFsdWUiLCJzcmNfd2lkdGgiLCJzcmNfaGVpZ2h0IiwiZHN0X3dpZHRoIiwiZHN0X2hlaWdodCIsIm9mZiIsIml4cyIsIml5cyIsInhzIiwieXMiLCJ4czAiLCJ5czAiLCJ3cyIsInNjIiwicDAiLCJwMSIsInRkIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwibTIwIiwibTIxIiwibTIyIiwiZyIsInFzb3J0X3N0YWNrIiwia2VybmVsIiwidCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MSIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwibGVmdCIsInJpZ2h0IiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250IiwibWlkZGxlIiwibGwiLCJoaCIsIm1lZGlhbiIsIkEiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJsIiwiX2luIiwiX2luMiIsIml0ZXJzIiwibWF4X2l0ZXIiLCJtdiIsInZhbCIsImEwIiwiYjAiLCJpbmRSX2J1ZmYiLCJpbmRDX2J1ZmYiLCJpbmRSIiwiaW5kQyIsIkF0IiwiX1ciLCJWdCIsIm4xIiwibWludmFsIiwiaXRlciIsIkFpIiwiQWoiLCJWaSIsIlZqIiwiY2hhbmdlZCIsInQwIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwid19idWZmIiwidl9idWZmIiwid19tdCIsInZfbXQiLCJ0cmFuc3Bvc2UiLCJKYWNvYmlTVkRJbXBsIiwicHUiLCJwdiIsIm5yb3dzIiwibmNvbHMiLCJ4c3VtIiwidG9sIiwidV9idWZmIiwidV9tdCIsInVkIiwid2QiLCJ2ZCIsInN2ZF9kZWNvbXBvc2UiLCJwYSIsImlkIiwidmVjdHMiLCJ2YWxzIiwiSmFjb2JpSW1wbCIsIm9yYiIsImJpdF9wYXR0ZXJuXzMxXyIsIkgiLCJwYXRjaF9pbWciLCJjb3JuZXJzIiwiZGVzY3JpcHRvcnMiLCJERVNDUl9TSVpFIiwiYW5nbGUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJ5YXBlMDYiLCJsYXBsYWNpYW5fdGhyZXNob2xkIiwibWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCIsImJvcmRlciIsInNyZF9kIiwiRHh4IiwiRHl5IiwiRHh5IiwiRHl4IiwibGFwX2J1ZiIsImxhcGxhY2lhbiIsImx2Iiwicm93eCIsIm1pbl9laWdlbl92YWx1ZSIsInB0IiwibnVtYmVyX29mX3BvaW50cyIsImxhcF90aHJlc2giLCJlaWdlbl90aHJlc2giLCJleCIsImV5Iiwic2NvcmUiLCJtb3Rpb25fZXN0aW1hdG9yIiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJjaGVja19zdWJzZXQiLCJ0aHJlc2giLCJtYXNrIiwibnVtaW5saWVycyIsImVycm9yIiwicGFyYW1zIiwibWF4X2l0ZXJzIiwibW9kZWxfcG9pbnRzIiwibml0ZXJzIiwicmVzdWx0Iiwic3Vic2V0MCIsInN1YnNldDEiLCJmb3VuZCIsIm1jIiwibXIiLCJtX2J1ZmYiLCJtc19idWZmIiwiZXJyX2J1ZmYiLCJNIiwiY3Vycl9tYXNrIiwiaW5saWVyc19tYXgiLCJubW9kZWxzIiwicnVuIiwiY29weV90byIsImdldF9zdWJzZXQiLCJmaW5kX2lubGllcnMiLCJ1cGRhdGVfaXRlcnMiLCJfbWF0aCIsIm1pbl9tZWRpYW4iLCJvcHRpY2FsX2Zsb3dfbGsiLCJzY2hhcnJfZGVyaXYiLCJzY2hhcnJfZGVyaXZhdGl2ZXMiLCJwcmV2X3B5ciIsImN1cnJfcHlyIiwicHJldl94eSIsImN1cnJfeHkiLCJ3aW5fc2l6ZSIsInN0YXR1cyIsIm1pbl9laWdlbl90aHJlc2hvbGQiLCJVaW50OEFycmF5IiwiaGFsZl93aW4iLCJ3aW5fYXJlYSIsIndpbl9hcmVhMiIsInByZXZfaW1ncyIsIm5leHRfaW1ncyIsImltZ19wcmV2IiwiaW1nX25leHQiLCJsdyIsImxoIiwiaXdpbl9ub2RlIiwiZGVyaXZfaXdpbl9ub2RlIiwiZGVyaXZfbGV2X25vZGUiLCJkZXJpdl9tIiwiaXdpbl9idWYiLCJkZXJpdl9pd2luIiwiZGVyaXZfbGV2IiwiZHNyYyIsImlwdHIiLCJkaXB0ciIsImpwdHIiLCJsZXZfc2MiLCJwcmV2X3giLCJwcmV2X3kiLCJuZXh0X3giLCJuZXh0X3kiLCJwcmV2X2RlbHRhX3giLCJwcmV2X2RlbHRhX3kiLCJkZWx0YV94IiwiZGVsdGFfeSIsImlwcmV2X3giLCJpcHJldl95IiwiaW5leHRfeCIsImluZXh0X3kiLCJsZXZlbCIsInB0aWQiLCJicmRfdGwiLCJicmRfciIsImJyZF9iIiwiYjEiLCJiMiIsIldfQklUUzE0IiwiV19CSVRTNCIsIldfQklUUzFtNSIsIldfQklUUzFtNTEiLCJXX0JJVFMxNF8iLCJXX0JJVFM0MSIsIkZMVF9TQ0FMRSIsIml3MDAiLCJpdzAxIiwiaXcxMCIsIml3MTEiLCJpdmFsIiwiaXh2YWwiLCJpeXZhbCIsIkQiLCJtaW5fZWlnIiwiRkxUX0VQU0lMT04iLCJtYXhfbGV2ZWwiLCJpMCIsImkxIiwidmFsdWUiLCJjb2xzXzEiLCJsZW4iLCJBdGkiLCJwQXQiLCJhdGQiLCJDIiwiQXAiLCJwQSIsInBCIiwicF9CIiwiQ3AiLCJtY29scyIsImNkIiwibXJvd3MiLCJwQ2RpYWciLCJwX0EiLCJwQyIsInBDdCIsInBfQyIsInBfQ0MiLCJpbnZBIiwidDEzIiwidDE3IiwiQ2QiLCJBZCIsIkJkIiwibTFfMCIsIm0xXzEiLCJtMV8yIiwibTFfMyIsIm0xXzQiLCJtMV81IiwibTFfNiIsIm0xXzciLCJtMV84IiwibTJfMCIsIm0yXzEiLCJtMl8yIiwibTJfMyIsIm0yXzQiLCJtMl81IiwibTJfNiIsIm0yXzciLCJtMl84IiwiTTExIiwiTTEyIiwiTTEzIiwiTTIxIiwiTTIyIiwiTTIzIiwiTTMxIiwiTTMyIiwiTTMzIiwiZGF0YV90IiwiX2RhdGFfdHlwZSIsIl9kYXRhX2J1ZmZlciIsImJ1ZmZlciIsInU4Iiwib3RoZXIiLCJvZCIsIm5ld19zaXplIiwicHJvYiIsIl9lcHMiLCJudW0iLCJsb2ciLCJkZW5vbSIsInBvdyIsIkFycmF5QnVmZmVyIiwiRmxvYXQ2NEFycmF5IiwicHNpemUiLCJjb3NpbmUiLCJzaW5lIiwid2FycF9hZmZpbmUiLCJ0aGlyZF9jaGVjayIsImlzX2xvY2FsX21heGltYSIsInBlcmZvcm1fb25lX3BvaW50IiwibGV2X3RhYmxlX3QiLCJsZXZlbF90YWJsZXMiLCJ0YXUiLCJweXJhbWlkX2xldmVscyIsIlIiLCJSbTEiLCJkaXJzIiwiZGlyc19jb3VudCIsIm9wcG9zaXRlIiwiaHciLCJzY29yZXMiLCJpcCIsImltIiwiYWJzX3Njb3JlIiwicHJlY29tcHV0ZV9kaXJlY3Rpb25zIiwiU2IiLCJuZWlnaGJvcmhvb2QiLCJJIiwiU2NvcmVzIiwiSW0iLCJJcCIsImRpcnNfbmIiLCJCMCIsIkIxIiwiQjIiLCJzdGF0ZSIsInlyb3ciLCJ0ciIsIkl4eCIsIkl5eSIsIkl4eSIsInNxcnRfZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9