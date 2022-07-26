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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaenJCLFVBQVUsRUFBVkEsbURBQVVBO0FBREUsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9jYWNoZS9jYWNoZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9kYXRhX3R5cGUvZGF0YV90eXBlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvaW1ncHJvYy9jb252b2wudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbWdwcm9jL3Jlc2FtcGxlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvanNmZWF0TmV4dC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2tleXBvaW50X3Qva2V5cG9pbnRfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2xpbmFsZy9saW5hbGctYmFzZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL21hdG1hdGgvbWF0bWF0aC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL21hdHJpeF90L21hdHJpeF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvZGF0YV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvb3JiL2JpdF9wYXR0ZXJuXzMxLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvb3JiL3JlY3RpZnlfcGF0Y2gudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy95YXBlL3lhcGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy95YXBlL3lhcGVfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy95YXBlMDYveWFwZTA2X3V0aWxzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLy4uL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gICAgYWxsb2NhdGU6IChjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgICBnZXRfYnVmZmVyOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiBhbnk7XG4gICAgcHV0X2J1ZmZlcjogKG5vZGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIGNhY2hlIGltcGxlbWVudHMgSUNhY2hlIHtcbiAgICBwcml2YXRlIF9wb29sX2hlYWQ6IGFueTtcbiAgICBwcml2YXRlIF9wb29sX3RhaWw6IGFueTtcbiAgICBwcml2YXRlIF9wb29sX3NpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfdGFpbCA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXBhY2l0eTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0X2J1ZmZlcihzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIFU4QzFfdDogMHgwMTAwIHwgMHgwMSxcbiAgICBVOEMzX3Q6IDB4MDEwMCB8IDB4MDMsXG4gICAgVThDNF90OiAweDAxMDAgfCAweDA0LFxuXG4gICAgRjMyQzFfdDogMHgwNDAwIHwgMHgwMSxcbiAgICBGMzJDMl90OiAweDA0MDAgfCAweDAyLFxuICAgIFMzMkMxX3Q6IDB4MDIwMCB8IDB4MDEsXG4gICAgUzMyQzJfdDogMHgwMjAwIHwgMHgwMlxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVHlwZSB7XG4gICAgX2dldF9kYXRhX3R5cGU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2NoYW5uZWw6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3R5cGUgaW1wbGVtZW50cyBJRGF0YV9UeXBlIHtcbiAgICBwcml2YXRlIF9kYXRhX3R5cGVfc2l6ZTogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGMDApO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGKTtcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1ZjogbnVtYmVyW10sIHNyY19kOiBudW1iZXJbXSwgZHN0X2Q6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsdGVyOiBudW1iZXJbXSwga2VybmVsX3NpemU6IG51bWJlciwgaGFsZl9rZXJuZWw6IG51bWJlcikge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmOiBudW1iZXJbXSwgc3JjX2Q6IG51bWJlcltdLCBkc3RfZDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWx0ZXI6IG51bWJlcltdLCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmM6IHsgY2hhbm5lbDogYW55OyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBkc3Q6IHsgZGF0YTogYW55OyB9LCBjYWNoZTogeyBnZXRfYnVmZmVyOiAoYXJnMDogbnVtYmVyKSA9PiBhbnk7IHB1dF9idWZmZXI6IChhcmcwOiBhbnkpID0+IHZvaWQ7IH0sIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjOiB7IGNoYW5uZWw6IGFueTsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgZHN0OiB7IGRhdGE6IGFueTsgfSwgY2FjaGU6IHsgZ2V0X2J1ZmZlcjogKGFyZzA6IG51bWJlcikgPT4gYW55OyBwdXRfYnVmZmVyOiAoYXJnMDogYW55KSA9PiB2b2lkOyB9LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgc2NhbGUgPSAxLjAgLyAoc2NhbGVfeCAqIHNjYWxlX3kpO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAuMCwgYmV0YSA9IDAuMCwgYmV0YTEgPSAwLjA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5mMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gxIC0gZnN4MSkgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChmc3gyIC0gc3gyKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDNdIHwgMDtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDMgKyAxXSB8IDA7XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApO1xuICAgICAgICAgICAgYmV0YTEgPSAxLjAgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYmV0YSkgPCAxZS0zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTE7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufSIsIi8vaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuaW1wb3J0IHsgSURhdGFfVHlwZSwgZGF0YV90eXBlIH0gZnJvbSAnLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgSUNhY2hlLCBjYWNoZSB9IGZyb20gJy4vY2FjaGUvY2FjaGUnXG5pbXBvcnQgeyBpbWdwcm9jIH0gZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MnXG5pbXBvcnQgeyBfcmVzYW1wbGUsIF9yZXNhbXBsZV91OCB9IGZyb20gJy4vaW1ncHJvYy9yZXNhbXBsZSdcbmltcG9ydCB7IF9jb252b2wsIF9jb252b2xfdTggfSBmcm9tICcuL2ltZ3Byb2MvY29udm9sJ1xuaW1wb3J0IHsgbGluYWxnIH0gZnJvbSAnLi9saW5hbGcvbGluYWxnJ1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy9saW5hbGctYmFzZSdcbmltcG9ydCB7IG1hdGggfSBmcm9tICcuL21hdGgvbWF0aCdcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4vbWF0bWF0aC9tYXRtYXRoJ1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuL21hdHJpeF90L21hdHJpeF90J1xuaW1wb3J0IHsgcHlyYW1pZF90IH0gZnJvbSAnLi9weXJhbWlkX3QvcHlyYW1pZF90J1xuaW1wb3J0IHsga2V5cG9pbnRfdCB9IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90J1xuaW1wb3J0IHsgb3JiIH0gZnJvbSAnLi9vcmIvb3JiJ1xuaW1wb3J0IHsgYml0X3BhdHRlcm5fMzEgfSBmcm9tICcuL29yYi9iaXRfcGF0dGVybl8zMSdcbmltcG9ydCB7IHJlY3RpZnlfcGF0Y2ggfSBmcm9tICcuL29yYi9yZWN0aWZ5X3BhdGNoJ1xuaW1wb3J0IHsgeWFwZSB9IGZyb20gJy4veWFwZS95YXBlJ1xuaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSAnLi95YXBlMDYveWFwZTA2X3V0aWxzJ1xuaW1wb3J0IHsgeWFwZTA2IH0gZnJvbSAnLi95YXBlMDYveWFwZTA2J1xuaW1wb3J0IHsgcmFuc2FjX3BhcmFtc190IH0gZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdCdcbmltcG9ydCB7IG1vdGlvbl9lc3RpbWF0b3IgfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvcidcbmltcG9ydCB7IG9wdGljYWxfZmxvd19sayB9IGZyb20gJy4vb3B0aWNhbF9mbG93X2xrL29wdGljYWxfZmxvd19saydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBkdDogSURhdGFfVHlwZTtcbiAgICBwcm90ZWN0ZWQgY2FjaGU6IElDYWNoZTtcbiAgICBzdGF0aWMgY2FjaGU6IHR5cGVvZiBjYWNoZTtcbiAgICBzdGF0aWMgaW1ncHJvYzogdHlwZW9mIGltZ3Byb2M7XG4gICAgc3RhdGljIGxpbmFsZzogdHlwZW9mIGxpbmFsZztcbiAgICBzdGF0aWMgbWF0aDogdHlwZW9mIG1hdGg7XG4gICAgc3RhdGljIG1hdG1hdGg6IHR5cGVvZiBtYXRtYXRoO1xuICAgIHN0YXRpYyBtYXRyaXhfdDogdHlwZW9mIG1hdHJpeF90O1xuICAgIHN0YXRpYyBweXJhbWlkX3Q6IHR5cGVvZiBweXJhbWlkX3Q7XG4gICAgc3RhdGljIGtleXBvaW50X3Q6IHR5cGVvZiBrZXlwb2ludF90O1xuICAgIHN0YXRpYyB5YXBlOiB0eXBlb2YgeWFwZTtcbiAgICBzdGF0aWMgeWFwZTA2OiB0eXBlb2YgeWFwZTA2O1xuICAgIHN0YXRpYyByYW5zYWNfcGFyYW1zX3Q6IHR5cGVvZiByYW5zYWNfcGFyYW1zX3Q7XG4gICAgc3RhdGljIGFmZmluZTJkOiB0eXBlb2YgYWZmaW5lMmQ7XG4gICAgc3RhdGljIGhvbW9ncmFwaHkyZDogdHlwZW9mIGhvbW9ncmFwaHkyZDtcbiAgICBzdGF0aWMgbW90aW9uX2VzdGltYXRvcjogdHlwZW9mIG1vdGlvbl9lc3RpbWF0b3I7XG4gICAgc3RhdGljIG9wdGljYWxfZmxvd19sazogdHlwZW9mIG9wdGljYWxfZmxvd19saztcbiAgICBzdGF0aWMgb3JiOiB0eXBlb2Ygb3JiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OOiBzdHJpbmcgPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVk7XG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBzdGF0aWMgQk9YX0JMVVJfTk9TQ0FMRSA9IEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRTtcbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIHN0YXRpYyBTVkRfVV9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UO1xuICAgIHN0YXRpYyBTVkRfVl9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UO1xuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgc3RhdGljIFU4QzFfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgVThDM190ID0gdGhpcy5VOF90IHwgdGhpcy5DM190O1xuICAgIHN0YXRpYyBVOEM0X3QgPSB0aGlzLlU4X3QgfCB0aGlzLkM0X3Q7XG5cbiAgICBzdGF0aWMgRjMyQzFfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIEYzMkMyX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMl90O1xuICAgIHN0YXRpYyBTMzJDMV90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgUzMyQzJfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMyX3Q7XG5cbiAgICBnZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKTtcbiAgICB9XG59XG5cbmNsYXNzIG1vdGlvbl9tb2RlbCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIFQwOiBtYXRyaXhfdFxuICAgIFQxOiBtYXRyaXhfdFxuICAgIEF0QTogbWF0cml4X3RcbiAgICBBdEI6IG1hdHJpeF90XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuVDAgPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuVDEgPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRBID0gbmV3IG1hdHJpeF90KDYsIDYsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QiA9IG5ldyBtYXRyaXhfdCg2LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgc3FyKHg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG4gICAgLy8gZG9lcyBpc290cm9waWMgbm9ybWFsaXphdGlvblxuICAgIGlzb19ub3JtYWxpemVfcG9pbnRzKGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIFQwOiBudW1iZXJbXSwgVDE6IG51bWJlcltdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN4MCA9IDAuMCwgY3kwID0gMC4wLCBkMCA9IDAuMCwgczAgPSAwLjA7XG4gICAgICAgIHZhciBjeDEgPSAwLjAsIGN5MSA9IDAuMCwgZDEgPSAwLjAsIHMxID0gMC4wO1xuICAgICAgICB2YXIgZHggPSAwLjAsIGR5ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY3gwICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGN5MCArPSBmcm9tW2ldLnk7XG4gICAgICAgICAgICBjeDEgKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGN5MSArPSB0b1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY3gwIC89IGNvdW50OyBjeTAgLz0gY291bnQ7XG4gICAgICAgIGN4MSAvPSBjb3VudDsgY3kxIC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBkeCA9IGZyb21baV0ueCAtIGN4MDtcbiAgICAgICAgICAgIGR5ID0gZnJvbVtpXS55IC0gY3kwO1xuICAgICAgICAgICAgZDAgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGR4ID0gdG9baV0ueCAtIGN4MTtcbiAgICAgICAgICAgIGR5ID0gdG9baV0ueSAtIGN5MTtcbiAgICAgICAgICAgIGQxICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cblxuICAgICAgICBkMCAvPSBjb3VudDsgZDEgLz0gY291bnQ7XG5cbiAgICAgICAgczAgPSBNYXRoLlNRUlQyIC8gZDA7IHMxID0gTWF0aC5TUVJUMiAvIGQxO1xuXG4gICAgICAgIFQwWzBdID0gVDBbNF0gPSBzMDtcbiAgICAgICAgVDBbMl0gPSAtY3gwICogczA7XG4gICAgICAgIFQwWzVdID0gLWN5MCAqIHMwO1xuICAgICAgICBUMFsxXSA9IFQwWzNdID0gVDBbNl0gPSBUMFs3XSA9IDAuMDtcbiAgICAgICAgVDBbOF0gPSAxLjA7XG5cbiAgICAgICAgVDFbMF0gPSBUMVs0XSA9IHMxO1xuICAgICAgICBUMVsyXSA9IC1jeDEgKiBzMTtcbiAgICAgICAgVDFbNV0gPSAtY3kxICogczE7XG4gICAgICAgIFQxWzFdID0gVDFbM10gPSBUMVs2XSA9IFQxWzddID0gMC4wO1xuICAgICAgICBUMVs4XSA9IDEuMDtcbiAgICB9XG5cbiAgICBoYXZlX2NvbGxpbmVhcl9wb2ludHMocG9pbnRzOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgY291bnQ6IG51bWJlcikge1xuICAgICAgICB2YXIgaiA9IDAsIGsgPSAwLCBpID0gKGNvdW50IC0gMSkgfCAwO1xuICAgICAgICB2YXIgZHgxID0gMC4wLCBkeTEgPSAwLjAsIGR4MiA9IDAuMCwgZHkyID0gMC4wO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGktdGggc2VsZWN0ZWQgcG9pbnQgZG9lcyBub3QgYmVsb25nXG4gICAgICAgIC8vIHRvIGEgbGluZSBjb25uZWN0aW5nIHNvbWUgcHJldmlvdXNseSBzZWxlY3RlZCBwb2ludHNcbiAgICAgICAgZm9yICg7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgIGR4MSA9IHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBkeTEgPSBwb2ludHNbal0ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7ICsraykge1xuICAgICAgICAgICAgICAgIGR4MiA9IHBvaW50c1trXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgZHkyID0gcG9pbnRzW2tdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmNsYXNzIGFmZmluZTJkIGV4dGVuZHMgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcnVuKGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIG1vZGVsOiB7IHR5cGU/OiBhbnk7IGRhdGE6IGFueSB9LCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHB4ID0gMC4wLCBweSA9IDAuMDtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcganNmZWF0TmV4dC5saW5hbGcoKTtcblxuICAgICAgICB0aGlzLmlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCB0MGQsIHQxZCwgY291bnQpO1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCAqIDYpIDw8IDMpO1xuICAgICAgICB2YXIgYl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgyICogY291bnQpIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KDYsIDIgKiBjb3VudCwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGJfbXQgPSBuZXcgbWF0cml4X3QoMSwgMiAqIGNvdW50LCBkdCwgYl9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYWQgPSBhX210LmRhdGEsIGJkID0gYl9tdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICBweCA9IHQwZFswXSAqIHB0MC54ICsgdDBkWzFdICogcHQwLnkgKyB0MGRbMl07XG4gICAgICAgICAgICBweSA9IHQwZFszXSAqIHB0MC54ICsgdDBkWzRdICogcHQwLnkgKyB0MGRbNV07XG5cbiAgICAgICAgICAgIGogPSBpICogMiAqIDY7XG4gICAgICAgICAgICBhZFtqXSA9IHB4LCBhZFtqICsgMV0gPSBweSwgYWRbaiArIDJdID0gMS4wLCBhZFtqICsgM10gPSAwLjAsIGFkW2ogKyA0XSA9IDAuMCwgYWRbaiArIDVdID0gMC4wO1xuXG4gICAgICAgICAgICBqICs9IDY7XG4gICAgICAgICAgICBhZFtqXSA9IDAuMCwgYWRbaiArIDFdID0gMC4wLCBhZFtqICsgMl0gPSAwLjAsIGFkW2ogKyAzXSA9IHB4LCBhZFtqICsgNF0gPSBweSwgYWRbaiArIDVdID0gMS4wO1xuXG4gICAgICAgICAgICBiZFtpIDw8IDFdID0gdDFkWzBdICogcHQxLnggKyB0MWRbMV0gKiBwdDEueSArIHQxZFsyXTtcbiAgICAgICAgICAgIGJkWyhpIDw8IDEpICsgMV0gPSB0MWRbM10gKiBwdDEueCArIHQxZFs0XSAqIHB0MS55ICsgdDFkWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRBKHRoaXMuQXRBLCBhX210KTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRCKHRoaXMuQXRCLCBhX210LCBiX210KTtcblxuICAgICAgICBfbGluYWxnLmx1X3NvbHZlKHRoaXMuQXRBLCB0aGlzLkF0Qik7XG5cbiAgICAgICAgbWRbMF0gPSB0aGlzLkF0Qi5kYXRhWzBdLCBtZFsxXSA9IHRoaXMuQXRCLmRhdGFbMV0sIG1kWzJdID0gdGhpcy5BdEIuZGF0YVsyXTtcbiAgICAgICAgbWRbM10gPSB0aGlzLkF0Qi5kYXRhWzNdLCBtZFs0XSA9IHRoaXMuQXRCLmRhdGFbNF0sIG1kWzVdID0gdGhpcy5BdEIuZGF0YVs1XTtcbiAgICAgICAgbWRbNl0gPSAwLjAsIG1kWzddID0gMC4wLCBtZFs4XSA9IDEuMDsgLy8gZmlsbCBsYXN0IHJvd1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLmludmVydF8zeDModGhpcy5UMSwgdGhpcy5UMSk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBmcmVlIGJ1ZmZlclxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufVxuXG5jbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIG1MdEw6IG1hdHJpeF90XG4gICAgRXZlYzogbWF0cml4X3RcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tTHRMID0gbmV3IG1hdHJpeF90KDksIDksIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkV2ZWMgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHJ1bihmcm9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgdG86IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBtb2RlbDogbWF0cml4X3QsIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuXG4gICAgICAgIC8vIG5vcm1cbiAgICAgICAgdmFyIHNteCA9IDAuMCwgc215ID0gMC4wLCBjbXggPSAwLjAsIGNteSA9IDAuMCwgc014ID0gMC4wLCBzTXkgPSAwLjAsIGNNeCA9IDAuMCwgY015ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY214ICs9IHRvW2ldLng7XG4gICAgICAgICAgICBjbXkgKz0gdG9baV0ueTtcbiAgICAgICAgICAgIGNNeCArPSBmcm9tW2ldLng7XG4gICAgICAgICAgICBjTXkgKz0gZnJvbVtpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY214IC89IGNvdW50OyBjbXkgLz0gY291bnQ7XG4gICAgICAgIGNNeCAvPSBjb3VudDsgY015IC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzbXggKz0gTWF0aC5hYnModG9baV0ueCAtIGNteCk7XG4gICAgICAgICAgICBzbXkgKz0gTWF0aC5hYnModG9baV0ueSAtIGNteSk7XG4gICAgICAgICAgICBzTXggKz0gTWF0aC5hYnMoZnJvbVtpXS54IC0gY014KTtcbiAgICAgICAgICAgIHNNeSArPSBNYXRoLmFicyhmcm9tW2ldLnkgLSBjTXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNteCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNteSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHJldHVybiAwO1xuXG4gICAgICAgIHNteCA9IGNvdW50IC8gc214OyBzbXkgPSBjb3VudCAvIHNteTtcbiAgICAgICAgc014ID0gY291bnQgLyBzTXg7IHNNeSA9IGNvdW50IC8gc015O1xuXG4gICAgICAgIHQwZFswXSA9IHNNeDsgdDBkWzFdID0gMDsgdDBkWzJdID0gLWNNeCAqIHNNeDtcbiAgICAgICAgdDBkWzNdID0gMDsgdDBkWzRdID0gc015OyB0MGRbNV0gPSAtY015ICogc015O1xuICAgICAgICB0MGRbNl0gPSAwOyB0MGRbN10gPSAwOyB0MGRbOF0gPSAxO1xuXG4gICAgICAgIHQxZFswXSA9IDEuMCAvIHNteDsgdDFkWzFdID0gMDsgdDFkWzJdID0gY214O1xuICAgICAgICB0MWRbM10gPSAwOyB0MWRbNF0gPSAxLjAgLyBzbXk7IHQxZFs1XSA9IGNteTtcbiAgICAgICAgdDFkWzZdID0gMDsgdDFkWzddID0gMDsgdDFkWzhdID0gMTtcbiAgICAgICAgLy9cblxuICAgICAgICAvLyBjb25zdHJ1Y3Qgc3lzdGVtXG4gICAgICAgIGkgPSA4MTtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBMdExbaV0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHggPSAodG9baV0ueCAtIGNteCkgKiBzbXg7XG4gICAgICAgICAgICB5ID0gKHRvW2ldLnkgLSBjbXkpICogc215O1xuICAgICAgICAgICAgWCA9IChmcm9tW2ldLnggLSBjTXgpICogc014O1xuICAgICAgICAgICAgWSA9IChmcm9tW2ldLnkgLSBjTXkpICogc015O1xuXG4gICAgICAgICAgICBMdExbMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMl0gKz0gWDtcblxuICAgICAgICAgICAgTHRMWzZdICs9IFggKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbN10gKz0gWCAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFs4XSArPSBYICogLXg7XG4gICAgICAgICAgICBMdExbMTBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzExXSArPSBZO1xuXG4gICAgICAgICAgICBMdExbMTVdICs9IFkgKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbMTZdICs9IFkgKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbMTddICs9IFkgKiAteDtcbiAgICAgICAgICAgIEx0TFsyMF0gKz0gMS4wO1xuXG4gICAgICAgICAgICBMdExbMjRdICs9IC14ICogWDtcbiAgICAgICAgICAgIEx0TFsyNV0gKz0gLXggKiBZO1xuICAgICAgICAgICAgTHRMWzI2XSArPSAteDtcbiAgICAgICAgICAgIEx0TFszMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzMyXSArPSBYO1xuICAgICAgICAgICAgTHRMWzMzXSArPSBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzM0XSArPSBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzM1XSArPSBYICogLXk7XG4gICAgICAgICAgICBMdExbNDBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzQxXSArPSBZO1xuICAgICAgICAgICAgTHRMWzQyXSArPSBZICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzQzXSArPSBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzQ0XSArPSBZICogLXk7XG4gICAgICAgICAgICBMdExbNTBdICs9IDEuMDtcbiAgICAgICAgICAgIEx0TFs1MV0gKz0gLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzUyXSArPSAteSAqIFk7XG4gICAgICAgICAgICBMdExbNTNdICs9IC15O1xuICAgICAgICAgICAgTHRMWzYwXSArPSAteCAqIFggKiAteCAqIFggKyAteSAqIFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNjFdICs9IC14ICogWCAqIC14ICogWSArIC15ICogWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs2Ml0gKz0gLXggKiBYICogLXggKyAteSAqIFggKiAteTtcbiAgICAgICAgICAgIEx0TFs3MF0gKz0gLXggKiBZICogLXggKiBZICsgLXkgKiBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzcxXSArPSAteCAqIFkgKiAteCArIC15ICogWSAqIC15O1xuICAgICAgICAgICAgTHRMWzgwXSArPSAteCAqIC14ICsgLXkgKiAteTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuXG4gICAgICAgIC8vIHN5bW1ldHJ5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA5OyArK2kpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opXG4gICAgICAgICAgICAgICAgTHRMW2kgKiA5ICsgal0gPSBMdExbaiAqIDkgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9saW5hbGcuZWlnZW5WVih0aGlzLm1MdEwsIHRoaXMuRXZlYyk7XG5cbiAgICAgICAgbWRbMF0gPSBldmRbNzJdLCBtZFsxXSA9IGV2ZFs3M10sIG1kWzJdID0gZXZkWzc0XTtcbiAgICAgICAgbWRbM10gPSBldmRbNzVdLCBtZFs0XSA9IGV2ZFs3Nl0sIG1kWzVdID0gZXZkWzc3XTtcbiAgICAgICAgbWRbNl0gPSBldmRbNzhdLCBtZFs3XSA9IGV2ZFs3OV0sIG1kWzhdID0gZXZkWzgwXTtcblxuICAgICAgICAvLyBkZW5vcm1hbGl6ZVxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIHRoaXMuVDEsIG1vZGVsKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCBtb2RlbCwgdGhpcy5UMCk7XG5cbiAgICAgICAgLy8gc2V0IGJvdHRvbSByaWdodCB0byAxLjBcbiAgICAgICAgeCA9IDEuMCAvIG1kWzhdO1xuICAgICAgICBtZFswXSAqPSB4OyBtZFsxXSAqPSB4OyBtZFsyXSAqPSB4O1xuICAgICAgICBtZFszXSAqPSB4OyBtZFs0XSAqPSB4OyBtZFs1XSAqPSB4O1xuICAgICAgICBtZFs2XSAqPSB4OyBtZFs3XSAqPSB4OyBtZFs4XSA9IDEuMDtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZXJyb3IoZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgbW9kZWw6IG1hdHJpeF90LCBlcnI6IG51bWJlcltdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCB3dyA9IDAuMCwgZHggPSAwLjAsIGR5ID0gMC4wO1xuICAgICAgICB2YXIgbSA9IG1vZGVsLmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHd3ID0gMS4wIC8gKG1bNl0gKiBwdDAueCArIG1bN10gKiBwdDAueSArIDEuMCk7XG4gICAgICAgICAgICBkeCA9IChtWzBdICogcHQwLnggKyBtWzFdICogcHQwLnkgKyBtWzJdKSAqIHd3IC0gcHQxLng7XG4gICAgICAgICAgICBkeSA9IChtWzNdICogcHQwLnggKyBtWzRdICogcHQwLnkgKyBtWzVdKSAqIHd3IC0gcHQxLnk7XG4gICAgICAgICAgICBlcnJbaV0gPSAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrX3N1YnNldChmcm9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgdG86IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHNlZW1zIHRvIHJlamVjdCBnb29kIHN1YnNldHMgYWN0dWFsbHlcbiAgICAgICAgLy9pZiggaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKGZyb20sIGNvdW50KSB8fCBoYXZlX2NvbGxpbmVhcl9wb2ludHModG8sIGNvdW50KSApIHtcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgdmFyIGZwMCA9IGZyb21bMF0sIGZwMSA9IGZyb21bMV0sIGZwMiA9IGZyb21bMl0sIGZwMyA9IGZyb21bM107XG4gICAgICAgICAgICB2YXIgdHAwID0gdG9bMF0sIHRwMSA9IHRvWzFdLCB0cDIgPSB0b1syXSwgdHAzID0gdG9bM107XG5cbiAgICAgICAgICAgIC8vIHNldDFcbiAgICAgICAgICAgIHZhciBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnksIEExMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnksIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMzEgPSBmcDIueCwgQTMyID0gZnAyLnksIEEzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueSwgQjEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueSwgQjIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIzMSA9IHRwMi54LCBCMzIgPSB0cDIueSwgQjMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIHZhciBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQyXG4gICAgICAgICAgICBBMTEgPSBmcDEueCwgQTEyID0gZnAxLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMS54LCBCMTIgPSB0cDEueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDNcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0NFxuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICBpZiAobmVnYXRpdmUgIT0gMCAmJiBuZWdhdGl2ZSAhPSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBhbGwgZ29vZFxuICAgIH1cbn1cblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IGNsYXNzIHB5cmFtaWRfdCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBsZXZlbHM6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHByaXZhdGUgcHlyZG93bjogYW55O1xuICAgIGNvbnN0cnVjdG9yKGxldmVsczogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzIHwgMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGxldmVscyk7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBqc2ZlYXROZXh0LmltZ3Byb2MoKTtcbiAgICAgICAgdGhpcy5weXJkb3duID0gX2ltZ3Byb2MucHlyZG93bjtcbiAgICB9XG4gICAgYWxsb2NhdGUoc3RhcnRfdzogbnVtYmVyLCBzdGFydF9oOiBudW1iZXIsIGRhdGFfdHlwZTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkKGlucHV0OiBtYXRyaXhfdCwgc2tpcF9maXJzdF9sZXZlbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodHlwZW9mIHNraXBfZmlyc3RfbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgc2tpcF9maXJzdF9sZXZlbCA9IHRydWU7IH1cbiAgICAgICAgLy8ganVzdCBjb3B5IGRhdGEgdG8gZmlyc3QgbGV2ZWxcbiAgICAgICAgdmFyIGkgPSAyLCBhID0gaW5wdXQsIGI6IGFueSA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LmtleXBvaW50X3QgPSBrZXlwb2ludF90O1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBjbGFzcyBpbWdwcm9jIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfTtcbiAgICBncmF5c2NhbGUoc3JjOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogbnVtYmVyKSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgY29kZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgZGVmYXVsdCBpbWFnZSBkYXRhIHJlcHJlc2VudGF0aW9uIGluIGJyb3dzZXJcbiAgICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSBcInVuZGVmaW5lZFwiKSB7IGNvZGUgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBpID0gMCwgaiA9IDAsIGlyID0gMCwganIgPSAwO1xuICAgICAgICB2YXIgY29lZmZfciA9IDQ4OTksIGNvZWZmX2cgPSA5NjE3LCBjb2VmZl9iID0gMTg2OCwgY24gPSA0O1xuXG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY29lZmZfciA9IDE4Njg7XG4gICAgICAgICAgICBjb2VmZl9iID0gNDg5OTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY24gPSAzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbjIgPSBjbiA8PCAxLCBjbjMgPSAoY24gKiAzKSB8IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAxKTtcbiAgICAgICAgdmFyIGRzdF91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3ksIGogKz0gdywgaSArPSB3ICogY24pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDAsIGlyID0gaSwganIgPSBqOyB4IDw9IHcgLSA0OyB4ICs9IDQsIGlyICs9IGNuIDw8IDIsIGpyICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMV0gPSAoc3JjW2lyICsgY25dICogY29lZmZfciArIHNyY1tpciArIGNuICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24gKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAyXSA9IChzcmNbaXIgKyBjbjJdICogY29lZmZfciArIHNyY1tpciArIGNuMiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDNdID0gKHNyY1tpciArIGNuM10gKiBjb2VmZl9yICsgc3JjW2lyICsgY24zICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24zICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKytqciwgaXIgKz0gY24pIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVyaXZlZCBmcm9tIENDViBsaWJyYXJ5XG4gICAgcmVzYW1wbGUoc3JjOiBhbnksIGRzdDogYW55LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBoID0gc3JjLnJvd3MsIHcgPSBzcmMuY29scztcbiAgICAgICAgaWYgKGggPiBuaCAmJiB3ID4gbncpIHtcbiAgICAgICAgICAgIGRzdC5yZXNpemUobncsIG5oLCBzcmMuY2hhbm5lbCk7XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgZmFzdCBhbHRlcm5hdGl2ZSAoZml4IHBvaW50IHNjYWxlLCAweDEwMCB0byBhdm9pZCBvdmVyZmxvdylcbiAgICAgICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBkc3QudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBoICogdyAvIChuaCAqIG53KSA8IDB4MTAwKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlX3U4KHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGUoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYm94X2JsdXJfZ3JheShzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgY2hhbm5lbDogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgcmFkaXVzOiBudW1iZXIsIG9wdGlvbnM6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH1cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBoMiA9IGggPDwgMSwgdzIgPSB3IDw8IDE7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAsIHkgPSAwLCBlbmQgPSAwO1xuICAgICAgICB2YXIgd2luZG93U2l6ZSA9ICgocmFkaXVzIDw8IDEpICsgMSkgfCAwO1xuICAgICAgICB2YXIgcmFkaXVzUGx1c09uZSA9IChyYWRpdXMgKyAxKSB8IDAsIHJhZGl1c1BsdXMyID0gKHJhZGl1c1BsdXNPbmUgKyAxKSB8IDA7XG4gICAgICAgIHZhciBzY2FsZSA9IG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEUgPyAxIDogKDEuMCAvICh3aW5kb3dTaXplICogd2luZG93U2l6ZSkpO1xuXG4gICAgICAgIHZhciB0bXBfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLCBkc3RJbmRleCA9IDAsIHNyY0luZGV4ID0gMCwgbmV4dFBpeGVsSW5kZXggPSAwLCBwcmV2aW91c1BpeGVsSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGF0YV9pMzIgPSB0bXBfYnVmZi5pMzI7IC8vIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgdmFyIGRhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIGhvbGQgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIC8vIGZpcnN0IHBhc3NcbiAgICAgICAgLy8gbm8gbmVlZCB0byBzY2FsZSBcbiAgICAgICAgLy9kYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3kpIHtcbiAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX3U4W3NyY0luZGV4XTtcblxuICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IChzcmNJbmRleCArIHJhZGl1c1BsdXNPbmUpIHwgMDtcbiAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSBoMikge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleCArIGhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjSW5kZXggKz0gdztcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBzZWNvbmQgcGFzc1xuICAgICAgICBzcmNJbmRleCA9IDA7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7IC8vIHRoaXMgaXMgYSB0cmFuc3Bvc2VcbiAgICAgICAgZGF0YV91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIC8vIGRvbnQgc2NhbGUgcmVzdWx0XG4gICAgICAgIGlmIChzY2FsZSA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih0bXBfYnVmZik7XG4gICAgfVxuICAgIGdhdXNzaWFuX2JsdXIoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyB0eXBlOiBhbnk7IGNoYW5uZWw6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBhbnksIGFyZzE6IGFueSwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwga2VybmVsX3NpemU6IG51bWJlciwgc2lnbWE6IG51bWJlcikge1xuICAgICAgICB2YXIganNmZWF0bWF0aCA9IG5ldyBqc2ZlYXROZXh0Lm1hdGgoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWdtYSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaWdtYSA9IDAuMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGtlcm5lbF9zaXplID09PSBcInVuZGVmaW5lZFwiKSB7IGtlcm5lbF9zaXplID0gMDsgfVxuICAgICAgICBrZXJuZWxfc2l6ZSA9IGtlcm5lbF9zaXplID09IDAgPyAoTWF0aC5tYXgoMSwgKDQuMCAqIHNpZ21hICsgMS4wIC0gMWUtOCkpICogMiArIDEpIHwgMCA6IGtlcm5lbF9zaXplO1xuICAgICAgICB2YXIgaGFsZl9rZXJuZWwgPSBrZXJuZWxfc2l6ZSA+PiAxO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkYXRhX3R5cGUgPSBzcmMudHlwZSwgaXNfdTggPSBkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBidWYsIGZpbHRlciwgYnVmX3N6ID0gKGtlcm5lbF9zaXplICsgTWF0aC5tYXgoaCwgdykpIHwgMDtcblxuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoYnVmX3N6IDw8IDIpO1xuICAgICAgICB2YXIgZmlsdF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGtlcm5lbF9zaXplIDw8IDIpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpzZmVhdG1hdGguZ2V0X2dhdXNzaWFuX2tlcm5lbChrZXJuZWxfc2l6ZSwgc2lnbWEsIGZpbHRlciwgZGF0YV90eXBlKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIF9jb252b2xfdTgoYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihmaWx0X25vZGUpO1xuICAgIH1cbiAgICBob3VnaF90cmFuc2Zvcm0oaW1nOiBhbnksIHJob19yZXM6IG51bWJlciwgdGhldGFfcmVzOiBudW1iZXIsIHRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPjx1bmtub3duPihhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMikpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFnZSA0LiBzdG9yZSB0aGUgZmlyc3QgbWluKHRvdGFsLGxpbmVzTWF4KSBsaW5lcyB0byB0aGUgb3V0cHV0IGJ1ZmZlclxuICAgICAgICB2YXIgbGluZXNNYXggPSBNYXRoLm1pbihudW1hbmdsZSAqIG51bXJobywgX3NvcnRfYnVmLmxlbmd0aCk7XG4gICAgICAgIHZhciBzY2FsZSA9IDEuMCAvIChudW1yaG8gKyAyKTtcbiAgICAgICAgdmFyIGxpbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNNYXg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9zb3J0X2J1ZltpXTtcbiAgICAgICAgICAgIHZhciBuID0gTWF0aC5mbG9vcihpZHggKiBzY2FsZSkgLSAxO1xuICAgICAgICAgICAgdmFyIHIgPSBpZHggLSAobiArIDEpICogKG51bXJobyArIDIpIC0gMTtcbiAgICAgICAgICAgIHZhciBscmhvID0gKHIgLSAobnVtcmhvIC0gMSkgKiAwLjUpICogcmhvX3JlcztcbiAgICAgICAgICAgIHZhciBsYW5nbGUgPSBuICogdGhldGFfcmVzO1xuICAgICAgICAgICAgbGluZXMucHVzaChbbHJobywgbGFuZ2xlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBweXJkb3duKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgY2hhbm5lbDogYW55OyBkYXRhOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IG51bWJlciwgYXJnMTogbnVtYmVyLCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9LCBzeDogbnVtYmVyLCBzeTogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciBiYmZcbiAgICAgICAgaWYgKHR5cGVvZiBzeCA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzeSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeSA9IDA7IH1cblxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciB3MiA9IHcgPj4gMSwgaDIgPSBoID4+IDE7XG4gICAgICAgIHZhciBfdzIgPSB3MiAtIChzeCA8PCAxKSwgX2gyID0gaDIgLSAoc3kgPDwgMSk7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHNwdHIgPSBzeCArIHN5ICogdywgc2xpbmUgPSAwLCBkcHRyID0gMCwgZGxpbmUgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodzIsIGgyLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IF9oMjsgKyt5KSB7XG4gICAgICAgICAgICBzbGluZSA9IHNwdHI7XG4gICAgICAgICAgICBkbGluZSA9IGRwdHI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IF93MiAtIDI7IHggKz0gMiwgZGxpbmUgKz0gMiwgc2xpbmUgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZSArIDFdID0gKHNyY19kW3NsaW5lICsgMl0gKyBzcmNfZFtzbGluZSArIDNdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3ICsgMl0gKyBzcmNfZFtzbGluZSArIHcgKyAzXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IF93MjsgKyt4LCArK2RsaW5lLCBzbGluZSArPSAyKSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3B0ciArPSB3IDw8IDE7XG4gICAgICAgICAgICBkcHRyICs9IHcyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRzdDogW2d4LGd5LC4uLl1cbiAgICBzY2hhcnJfZGVyaXZhdGl2ZXMoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IHR5cGU6IG51bWJlciB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IG51bWJlcikgPT4gdm9pZDsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZHN0ZXAgPSB3IDw8IDEsIHggPSAwLCB5ID0gMCwgeDEgPSAwLCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgICAgICB2YXIgc3JvdzAgPSAwLCBzcm93MSA9IDAsIHNyb3cyID0gMCwgZHJvdyA9IDA7XG4gICAgICAgIHZhciB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICB2YXIgYnVmMF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG4gICAgICAgIHZhciBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeF0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeCArIDFdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07IHRyb3cwW3hdID0gdHJvdzBbd107XG4gICAgICAgICAgICB0cm93MVswXSA9IHRyb3cxWzFdOyB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgYSA9IHRyb3cxW3ggKyAyXSwgYiA9IHRyb3cxW3ggKyAxXSwgYyA9IHRyb3cxW3ggKyAzXSwgZCA9IHRyb3cxW3ggKyA0XSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IHRyb3cwW3ggKyAyXSwgZiA9IHRyb3cwW3ggKyAzXTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKGEgKyB0cm93MVt4XSkgKiAzICsgYiAqIDEwKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChjICsgYikgKiAzICsgYSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDRdIC0gZSkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKGQgKyBhKSAqIDMgKyBjICogMTApKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA1XSAtIGYpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgNV0gKyBjKSAqIDMgKyBkICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdKSAqIDMgKyB0cm93MVt4ICsgMV0gKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gY29tcHV0ZSBncmFkaWVudCB1c2luZyBTb2JlbCBrZXJuZWwgWzEgMiAxXSAqIFstMSAwIDFdXlRcbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc29iZWxfZGVyaXZhdGl2ZXMoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IHR5cGU6IG51bWJlciB9LCBkc3Q6IG1hdHJpeF90KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHggKyAxXSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGEgKyB0cm93MVt4XSArIGIgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGMgKyBiICsgYSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA0XSAtIGUpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChkICsgYSArIGMgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDVdIC0gZik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyA1XSArIGMgKyBkICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdICsgdHJvdzFbeCArIDFdICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cbiAgICAvLyBwbGVhc2Ugbm90ZTogXG4gICAgLy8gZHN0Xyh0eXBlKSBzaXplIHNob3VsZCBiZSBjb2xzID0gc3JjLmNvbHMrMSwgcm93cyA9IHNyYy5yb3dzKzFcbiAgICBjb21wdXRlX2ludGVncmFsX2ltYWdlKHNyYzogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIGRzdF9zdW06IG51bWJlcltdLCBkc3Rfc3FzdW06IG51bWJlcltdLCBkc3RfdGlsdGVkOiBhbnlbXSkge1xuICAgICAgICB2YXIgdzAgPSBzcmMuY29scyB8IDAsIGgwID0gc3JjLnJvd3MgfCAwLCBzcmNfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgdzEgPSAodzAgKyAxKSB8IDA7XG4gICAgICAgIHZhciBzID0gMCwgczIgPSAwLCBwID0gMCwgcHVwID0gMCwgaSA9IDAsIGogPSAwLCB2ID0gMCwgayA9IDA7XG5cbiAgICAgICAgaWYgKGRzdF9zdW0gJiYgZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMCwgZHN0X3Nxc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuXG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3N1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3Nxc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcCArIDFdID0gZHN0X3Nxc3VtW3B1cCArIDFdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRzdF90aWx0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWFnb25hbFxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcCArIDFdID0gc3JjX2RbayArIDFdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgdzApIHwgMCwgcHVwID0gdzA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaDA7ICsraSwgcCArPSB3MSwgcHVwICs9IHcxKSB7XG4gICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSArPSBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IHcwIC0gMTsgaiA+IDA7IC0taikge1xuICAgICAgICAgICAgICAgIHAgPSBqICsgaDAgKiB3MSwgcHVwID0gcCAtIHcxO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGgwOyBpID4gMDsgLS1pLCBwIC09IHcxLCBwdXAgLT0gdzEpIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSArPSBkc3RfdGlsdGVkW3B1cF0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlcXVhbGl6ZV9oaXN0b2dyYW0oc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IGNoYW5uZWw6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmNfZCA9IHNyYy5kYXRhO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBkc3RfZCA9IGRzdC5kYXRhLCBzaXplID0gdyAqIGg7XG4gICAgICAgIHZhciBpID0gMCwgcHJldiA9IDAsIGhpc3QwLCBub3JtO1xuXG4gICAgICAgIHZhciBoaXN0MF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKDI1NiA8PCAyKTtcbiAgICAgICAgaGlzdDAgPSBoaXN0MF9ub2RlLmkzMjtcbiAgICAgICAgZm9yICg7IGkgPCAyNTY7ICsraSkgaGlzdDBbaV0gPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICArK2hpc3QwW3NyY19kW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXYgPSBoaXN0MFswXTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgICAgICBwcmV2ID0gaGlzdDBbaV0gKz0gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vcm0gPSAyNTUgLyBzaXplO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBkc3RfZFtpXSA9IChoaXN0MFtzcmNfZFtpXV0gKiBub3JtICsgMC41KSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGhpc3QwX25vZGUpO1xuICAgIH1cbiAgICBjYW5ueShzcmM6IGFueSwgZHN0OiBhbnksIGxvd190aHJlc2g6IG51bWJlciwgaGlnaF90aHJlc2g6IG51bWJlcikge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgajogbnVtYmVyID0gMCwgZ3JhZCA9IDAsIHcyID0gdyA8PCAxLCBfZ3JhZCA9IDAsIHN1cHByZXNzID0gMCwgZiA9IDAsIHggPSAwLCB5ID0gMCwgcyA9IDA7XG4gICAgICAgIHZhciB0ZzIyeCA9IDAsIHRnNjd4ID0gMDtcblxuICAgICAgICAvLyBjYWNoZSBidWZmZXJzXG4gICAgICAgIHZhciBkeGR5X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3MikgPDwgMik7XG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMyAqICh3ICsgMikpIDw8IDIpO1xuICAgICAgICB2YXIgbWFwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKChoICsgMikgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIHN0YWNrX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3KSA8PCAyKTtcblxuXG4gICAgICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgIHZhciBtYXA6IG51bWJlcltdID0gPG51bWJlcltdPm1hcF9ub2RlLmkzMjtcbiAgICAgICAgdmFyIHN0YWNrID0gc3RhY2tfbm9kZS5pMzI7XG4gICAgICAgIHZhciBkeGR5ID0gZHhkeV9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHlfbSA9IG5ldyBtYXRyaXhfdCh3LCBoLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGR4ZHlfbm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHJvdzAgPSAxLCByb3cxID0gKHcgKyAyICsgMSkgfCAwLCByb3cyID0gKDIgKiAodyArIDIpICsgMSkgfCAwLCBtYXBfdyA9ICh3ICsgMikgfCAwLCBtYXBfaTogbnVtYmVyID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKE51bWJlcihtYXBbbWFwX2kgKyBqXSA9PSAyKSAqIDB4ZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJlZSBidWZmZXJzXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkeGR5X25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobWFwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoc3RhY2tfbm9kZSk7XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgbWF0cml4X3RcbiAgICB3YXJwX3BlcnNwZWN0aXZlKHNyYzogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIGRzdDogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgZGF0YTogYW55IH0sIHRyYW5zZm9ybTogeyBkYXRhOiBhbnkgfSwgZmlsbF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MgfCAwLCBkc3Rfd2lkdGggPSBkc3QuY29scyB8IDAsIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIHhzMCA9IDAuMCwgeXMwID0gMC4wLCB3cyA9IDAuMCwgc2MgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XSxcbiAgICAgICAgICAgIG0yMCA9IHRkWzZdLCBtMjEgPSB0ZFs3XSwgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzMCA9IG0wMSAqIHkgKyBtMDIsXG4gICAgICAgICAgICAgICAgeXMwID0gbTExICogeSArIG0xMixcbiAgICAgICAgICAgICAgICB3cyA9IG0yMSAqIHkgKyBtMjI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMwICs9IG0wMCwgeXMwICs9IG0xMCwgd3MgKz0gbTIwKSB7XG4gICAgICAgICAgICAgICAgc2MgPSAxLjAgLyB3cztcbiAgICAgICAgICAgICAgICB4cyA9IHhzMCAqIHNjLCB5cyA9IHlzMCAqIHNjO1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMCwgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhzID4gMCAmJiB5cyA+IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgZHN0OiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnkgfSwgdHJhbnNmb3JtOiB7IGRhdGE6IGFueSB9LCBmaWxsX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scywgc3JjX2hlaWdodCA9IHNyYy5yb3dzLCBkc3Rfd2lkdGggPSBkc3QuY29scywgZHN0X2hlaWdodCA9IGRzdC5yb3dzO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzID0gbTAxICogeSArIG0wMjtcbiAgICAgICAgICAgIHlzID0gbTExICogeSArIG0xMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4cyArPSBtMDAsIHlzICs9IG0xMCkge1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMDsgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl4cyA+PSAwICYmIGl5cyA+PSAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB4cyAtIGl4cztcbiAgICAgICAgICAgICAgICAgICAgYiA9IHlzIC0gaXlzO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSBzcmNfd2lkdGggKiBpeXMgKyBpeHM7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEJhc2ljIFJHQiBTa2luIGRldGVjdGlvbiBmaWx0ZXJcbiAgICAvLyBmcm9tIGh0dHA6Ly9wb3BzY2FuLmJsb2dzcG90LmZyLzIwMTIvMDgvc2tpbi1kZXRlY3Rpb24taW4tZGlnaXRhbC1pbWFnZXMuaHRtbFxuICAgIHNraW5kZXRlY3RvcihzcmM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IGRhdGE6IGFueVtdIH0sIGRzdDogbnVtYmVyW10pIHtcbiAgICAgICAgdmFyIHIsIGcsIGIsIGo7XG4gICAgICAgIHZhciBpID0gc3JjLndpZHRoICogc3JjLmhlaWdodDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaiA9IGkgKiA0O1xuICAgICAgICAgICAgciA9IHNyYy5kYXRhW2pdO1xuICAgICAgICAgICAgZyA9IHNyYy5kYXRhW2ogKyAxXTtcbiAgICAgICAgICAgIGIgPSBzcmMuZGF0YVtqICsgMl07XG4gICAgICAgICAgICBpZiAoKHIgPiA5NSkgJiYgKGcgPiA0MCkgJiYgKGIgPiAyMClcbiAgICAgICAgICAgICAgICAmJiAociA+IGcpICYmIChyID4gYilcbiAgICAgICAgICAgICAgICAmJiAociAtIE1hdGgubWluKGcsIGIpID4gMTUpXG4gICAgICAgICAgICAgICAgJiYgKE1hdGguYWJzKHIgLSBnKSA+IDE1KSkge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDI1NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuanNmZWF0TmV4dC5tYXRoID0gY2xhc3MgbWF0aCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHByaXZhdGUgcXNvcnRfc3RhY2s6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXNvcnRfc3RhY2sgPSBuZXcgSW50MzJBcnJheSg0OCAqIDIpO1xuICAgIH1cblxuICAgIGdldF9nYXVzc2lhbl9rZXJuZWwoc2l6ZTogbnVtYmVyLCBzaWdtYTogbnVtYmVyLCBrZXJuZWw6IGFueSwgZGF0YV90eXBlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsOiBhbnksIHNyY194MDogbnVtYmVyLCBzcmNfeTA6IG51bWJlciwgZHN0X3gwOiBudW1iZXIsIGRzdF95MDogbnVtYmVyLFxuICAgICAgICBzcmNfeDE6IG51bWJlciwgc3JjX3kxOiBudW1iZXIsIGRzdF94MTogbnVtYmVyLCBkc3RfeTE6IG51bWJlcixcbiAgICAgICAgc3JjX3gyOiBudW1iZXIsIHNyY195MjogbnVtYmVyLCBkc3RfeDI6IG51bWJlciwgZHN0X3kyOiBudW1iZXIsXG4gICAgICAgIHNyY194MzogbnVtYmVyLCBzcmNfeTM6IG51bWJlciwgZHN0X3gzOiBudW1iZXIsIGRzdF95MzogbnVtYmVyKSB7XG4gICAgICAgIHZhciB0MSA9IHNyY194MDtcbiAgICAgICAgdmFyIHQyID0gc3JjX3gyO1xuICAgICAgICB2YXIgdDQgPSBzcmNfeTE7XG4gICAgICAgIHZhciB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdmFyIHQ2ID0gc3JjX3kzO1xuICAgICAgICB2YXIgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB2YXIgdDggPSB0MiAqIHQ3O1xuICAgICAgICB2YXIgdDkgPSBzcmNfeTI7XG4gICAgICAgIHZhciB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB2YXIgdDExID0gc3JjX3gxO1xuICAgICAgICB2YXIgdDE0ID0gc3JjX3kwO1xuICAgICAgICB2YXIgdDE1ID0gc3JjX3gzO1xuICAgICAgICB2YXIgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB2YXIgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB2YXIgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHZhciB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdmFyIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB2YXIgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdmFyIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHZhciB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdmFyIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB2YXIgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHZhciB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdmFyIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdmFyIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHZhciB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdmFyIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB2YXIgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHZhciB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdmFyIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSHIwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSHIyID0gdDE7XG4gICAgICAgIHZhciBIcjMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSHI0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSHI1ID0gdDE0O1xuICAgICAgICB2YXIgSHI2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSHI3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgdDEgPSBkc3RfeDA7XG4gICAgICAgIHQyID0gZHN0X3gyO1xuICAgICAgICB0NCA9IGRzdF95MTtcbiAgICAgICAgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHQ2ID0gZHN0X3kzO1xuICAgICAgICB0NyA9IHQxICogdDY7XG4gICAgICAgIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdDkgPSBkc3RfeTI7XG4gICAgICAgIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHQxMSA9IGRzdF94MTtcbiAgICAgICAgdDE0ID0gZHN0X3kwO1xuICAgICAgICB0MTUgPSBkc3RfeDM7XG4gICAgICAgIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhsMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIbDEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMiA9IHQxO1xuICAgICAgICB2YXIgSGwzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNSA9IHQxNDtcbiAgICAgICAgdmFyIEhsNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgY29kZSBjb21wdXRlcyBSID0gSGwgKiBpbnZlcnNlIEhyXG4gICAgICAgIHQyID0gSHI0IC0gSHI3ICogSHI1O1xuICAgICAgICB0NCA9IEhyMCAqIEhyNDtcbiAgICAgICAgdDUgPSBIcjAgKiBIcjU7XG4gICAgICAgIHQ3ID0gSHIzICogSHIxO1xuICAgICAgICB0OCA9IEhyMiAqIEhyMztcbiAgICAgICAgdDEwID0gSHIxICogSHI2O1xuICAgICAgICB2YXIgdDEyID0gSHIyICogSHI2O1xuICAgICAgICB0MTUgPSAxLjAgLyAodDQgLSB0NSAqIEhyNyAtIHQ3ICsgdDggKiBIcjcgKyB0MTAgKiBIcjUgLSB0MTIgKiBIcjQpO1xuICAgICAgICB0MTggPSAtSHIzICsgSHI1ICogSHI2O1xuICAgICAgICB2YXIgdDIzID0gLUhyMyAqIEhyNyArIEhyNCAqIEhyNjtcbiAgICAgICAgdDI4ID0gLUhyMSArIEhyMiAqIEhyNztcbiAgICAgICAgdmFyIHQzMSA9IEhyMCAtIHQxMjtcbiAgICAgICAgdDM1ID0gSHIwICogSHI3IC0gdDEwO1xuICAgICAgICB0NDEgPSAtSHIxICogSHI1ICsgSHIyICogSHI0O1xuICAgICAgICB2YXIgdDQ0ID0gdDUgLSB0ODtcbiAgICAgICAgdmFyIHQ0NyA9IHQ0IC0gdDc7XG4gICAgICAgIHQ0OCA9IHQyICogdDE1O1xuICAgICAgICB2YXIgdDQ5ID0gdDI4ICogdDE1O1xuICAgICAgICB2YXIgdDUwID0gdDQxICogdDE1O1xuICAgICAgICB2YXIgbWF0ID0gbW9kZWwuZGF0YTtcbiAgICAgICAgbWF0WzBdID0gSGwwICogdDQ4ICsgSGwxICogKHQxOCAqIHQxNSkgLSBIbDIgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzFdID0gSGwwICogdDQ5ICsgSGwxICogKHQzMSAqIHQxNSkgLSBIbDIgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzJdID0gLUhsMCAqIHQ1MCAtIEhsMSAqICh0NDQgKiB0MTUpICsgSGwyICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFszXSA9IEhsMyAqIHQ0OCArIEhsNCAqICh0MTggKiB0MTUpIC0gSGw1ICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFs0XSA9IEhsMyAqIHQ0OSArIEhsNCAqICh0MzEgKiB0MTUpIC0gSGw1ICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFs1XSA9IC1IbDMgKiB0NTAgLSBIbDQgKiAodDQ0ICogdDE1KSArIEhsNSAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbNl0gPSBIbDYgKiB0NDggKyBIbDcgKiAodDE4ICogdDE1KSAtIHQyMyAqIHQxNTtcbiAgICAgICAgbWF0WzddID0gSGw2ICogdDQ5ICsgSGw3ICogKHQzMSAqIHQxNSkgLSB0MzUgKiB0MTU7XG4gICAgICAgIG1hdFs4XSA9IC1IbDYgKiB0NTAgLSBIbDcgKiAodDQ0ICogdDE1KSArIHQ0NyAqIHQxNTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiB3YXMgZGVyaXZlZCBmcm9tICpCU0Qgc3lzdGVtIHFzb3J0KCk6XG4gICAgLy8gQ29weXJpZ2h0IChjKSAxOTkyLCAxOTkzXG4gICAgLy8gVGhlIFJlZ2VudHMgb2YgdGhlIFVuaXZlcnNpdHkgb2YgQ2FsaWZvcm5pYS4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgcXNvcnQoYXJyYXk6IGFueSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlciwgY21wOiBhbnkpIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXk6IGFueSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIG1pZGRsZSA9IDAsIGxsID0gMCwgaGggPSAwLCBtZWRpYW4gPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsOyB3aGlsZSAoYXJyYXlbbG93XSA+IGFycmF5W2xsXSk7XG4gICAgICAgICAgICAgICAgZG8gLS1oaDsgd2hpbGUgKGFycmF5W2hoXSA+IGFycmF5W2xvd10pO1xuICAgICAgICAgICAgICAgIGlmIChoaCA8IGxsKSBicmVhaztcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgICAgIGFycmF5W2xsXSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIGlmIChoaCA8PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgbG93ID0gbGw7XG4gICAgICAgICAgICBlbHNlIGlmIChoaCA+PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgaGlnaCA9IChoaCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0bWF0aCA9IG1hdG1hdGg7XG5cbmpzZmVhdE5leHQubGluYWxnID0gY2xhc3MgbGluYWxnIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIG1hdG1hdGg6IG1hdG1hdGg7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChBOiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgVzogbnVtYmVyW10sIFY6IG51bWJlcltdLCB2c3RlcDogbnVtYmVyLCBuOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIG0gPSAwLCBsID0gMCwgaWR4ID0gMCwgX2luID0gMCwgX2luMiA9IDA7XG4gICAgICAgIHZhciBpdGVycyA9IDAsIG1heF9pdGVyID0gbiAqIG4gKiAzMDtcbiAgICAgICAgdmFyIG12ID0gMC4wLCB2YWwgPSAwLjAsIHAgPSAwLjAsIHkgPSAwLjAsIHQgPSAwLjAsIHMgPSAwLjAsIGMgPSAwLjAsIGEwID0gMC4wLCBiMCA9IDAuMDtcblxuICAgICAgICB2YXIgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRDX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZFIgPSBpbmRSX2J1ZmYuaTMyO1xuICAgICAgICB2YXIgaW5kQyA9IGluZENfYnVmZi5pMzI7XG5cbiAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgayA9IGkgKiB2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbayArIGpdID0gMC4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2sgKyBpXSA9IDEuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIFdba10gPSBBWyhhc3RlcCArIDEpICoga107XG4gICAgICAgICAgICBpZiAoayA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gayArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBtXSksIGkgPSBrICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogayArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRSW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsga10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG4gPiAxKSBmb3IgKDsgaXRlcnMgPCBtYXhfaXRlcjsgaXRlcnMrKykge1xuICAgICAgICAgICAgLy8gZmluZCBpbmRleCAoayxsKSBvZiBwaXZvdCBwXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGluZFJbaV1dKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGwgPSBpbmRSW2tdO1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpbmRDW2ldICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpbmRDW2ldLCBsID0gaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA9IEFbYXN0ZXAgKiBrICsgbF07XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMpIGJyZWFrO1xuXG4gICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSAqIDAuNTtcbiAgICAgICAgICAgIHQgPSBNYXRoLmFicyh5KSArIGh5cG90KHAsIHkpO1xuICAgICAgICAgICAgcyA9IGh5cG90KHAsIHQpO1xuICAgICAgICAgICAgYyA9IHQgLyBzO1xuICAgICAgICAgICAgcyA9IHAgLyBzOyB0ID0gKHAgLyB0KSAqIHA7XG4gICAgICAgICAgICBpZiAoeSA8IDApXG4gICAgICAgICAgICAgICAgcyA9IC1zLCB0ID0gLXQ7XG4gICAgICAgICAgICBBW2FzdGVwICogayArIGxdID0gMDtcblxuICAgICAgICAgICAgV1trXSAtPSB0O1xuICAgICAgICAgICAgV1tsXSArPSB0O1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgcm93cyBhbmQgY29sdW1ucyBrIGFuZCBsXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogaSArIGspO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gKGsgKyAxKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSBsICsgMTtcbiAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBsICsgaSk7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcm90YXRlIGVpZ2VudmVjdG9yc1xuICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICBfaW4gPSB2c3RlcCAqIGs7XG4gICAgICAgICAgICAgICAgX2luMiA9IHZzdGVwICogbDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGEwID0gVltfaW5dO1xuICAgICAgICAgICAgICAgICAgICBiMCA9IFZbX2luMl07XG4gICAgICAgICAgICAgICAgICAgIFZbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICAgICAgVltfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZHggPSBqID09IDAgPyBrIDogbDtcbiAgICAgICAgICAgICAgICBpZiAoaWR4IDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gaWR4ICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgbV0pLCBpID0gaWR4ICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kUltpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGlkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IG4gLSAxOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1ttXSA8IFdbaV0pXG4gICAgICAgICAgICAgICAgICAgIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgIT0gbSkge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgbSwgaywgbXYpO1xuICAgICAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAgKiBtICsgaSwgdnN0ZXAgKiBrICsgaSwgbXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kUl9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZENfYnVmZik7XG4gICAgfVxuXG4gICAgSmFjb2JpU1ZESW1wbChBdDogbnVtYmVyW10sIGFzdGVwOiBudW1iZXIsIF9XOiBhbnlbXSwgVnQ6IG51bWJlcltdLCB2c3RlcDogbnVtYmVyLCBtOiBudW1iZXIsIG46IG51bWJlciwgbjE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQTogeyBjb2xzOiBhbnk7IGRhdGE6IGFueSB9LCBCOiB7IGRhdGE6IGFueSB9KTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHAgPSAxLCBhc3RlcCA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHQsIGFscGhhLCBkLCBzO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtqICogYXN0ZXAgKyBpXSkgPiBNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEZBSUxFRFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayAhPSBpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChhZCwgaSAqIGFzdGVwICsgaiwgayAqIGFzdGVwICsgaiwgdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dhcChiZCwgaSwgaywgdCk7XG4gICAgICAgICAgICAgICAgcCA9IC1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkID0gLTEuMCAvIGFkW2kgKiBhc3RlcCArIGldO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFkW2ogKiBhc3RlcCArIGldICogZDtcblxuICAgICAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhZFtqICogYXN0ZXAgKyBrXSArPSBhbHBoYSAqIGFkW2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJkW2pdICs9IGFscGhhICogYmRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkW2kgKiBhc3RlcCArIGldID0gLWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBhc3RlcCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBzID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzIC09IGFkW2kgKiBhc3RlcCArIGtdICogYmRba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHMgKiBhZFtpICogYXN0ZXAgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxOyAvLyBPS1xuICAgIH1cblxuICAgIGNob2xlc2t5X3NvbHZlKEE6IHsgY29sczogYW55OyBkYXRhOiBhbnkgfSwgQjogeyBkYXRhOiBhbnkgfSk6IG51bWJlciB7XG4gICAgICAgIHZhciBjb2wgPSAwLCByb3cgPSAwLCBjb2wyID0gMCwgY3MgPSAwLCBycyA9IDAsIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIHNpemUgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB2YWwsIGludl9kaWFnO1xuXG4gICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgIGludl9kaWFnID0gMS4wO1xuICAgICAgICAgICAgY3MgPSAoY29sICogc2l6ZSk7XG4gICAgICAgICAgICBycyA9IGNzO1xuICAgICAgICAgICAgZm9yIChyb3cgPSBjb2w7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBmb3IgdGhlIHBhcnRzIG9mIGNob2xlc2t5IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgICAgICAgICB2YWwgPSBhZFsocnMgKyBjb2wpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbDIgPSAwOyBjb2wyIDwgY29sOyBjb2wyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjb2wyICogc2l6ZSArIGNvbCldICogYWRbKHJzICsgY29sMildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ID09IGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBkaWFnb25hbCBlbGVtZW50IHNvIGRvbid0IGRpdmlkZVxuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZfZGlhZyA9IDEuMCAvIHZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZSB0aGUgdmFsdWUgd2l0aG91dCBkaXZpc2lvbiBpbiB0aGUgdXBwZXIgaGFsZlxuICAgICAgICAgICAgICAgICAgICBhZFsoY3MgKyByb3cpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2aWRlIG15IHRoZSBkaWFnb25hbCBlbGVtZW50IGZvciBhbGwgb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsICogaW52X2RpYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJzID0gKHJzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCBiYWNrc3ViIHRocm91Z2ggTFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBqKV0gKiBiZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggZGlhZ29uYWxcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBiZFtpXSAvPSBhZFsoY3MgKyBpKV07XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBMIFRyYW5zcG9zZVxuICAgICAgICBpID0gKHNpemUgLSAxKTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGogPSAoaSArIDEpO1xuICAgICAgICAgICAgY3MgPSAoaiAqIHNpemUpO1xuICAgICAgICAgICAgZm9yICg7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaSldICogYmRbal07XG4gICAgICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3ZkX2RlY29tcG9zZShBOiBhbnksIFc6IG1hdHJpeF90LCBVOiBtYXRyaXhfdCwgVjogbWF0cml4X3QsIG9wdGlvbnM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbCBcblxuICAgICAgICBpZiAobSA8IG4pIHtcbiAgICAgICAgICAgIGF0ID0gMTtcbiAgICAgICAgICAgIGkgPSBtO1xuICAgICAgICAgICAgbSA9IG47XG4gICAgICAgICAgICBuID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG0gKiBtKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJhbnNwb3NlXG4gICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKGFfbXQsIEEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9uICogX207IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbiAqIG07IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaVNWREltcGwoYV9tdC5kYXRhLCBtLCB3X210LmRhdGEsIHZfbXQuZGF0YSwgbiwgbSwgbiwgbSk7XG5cbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSB3X210LmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IF9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgdl9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIHZfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcblxuICAgIH1cblxuICAgIHN2ZF9zb2x2ZShBOiB7IHJvd3M6IGFueTsgY29sczogYW55OyB0eXBlOiBudW1iZXIgfSwgWDogeyBkYXRhOiBudW1iZXJbXSB9LCBCOiB7IGRhdGE6IGFueSB9KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHhzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcblxuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGJkID0gQi5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIHhzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh3ZFtqXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjAsIHB1ID0gMDsgayA8IG5yb3dzOyBrKyssIHB1ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdWRbcHUgKyBqXSAqIGJkW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhzdW0gKz0gc3VtICogdmRbcHYgKyBqXSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWk6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwLCBwYSA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIC8vdmFyIHVfYnVmZiA9IGNhY2hlMS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlkID0gQWkuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwLCBwdSA9IDA7IGogPCBucm93czsgaisrLCBwYSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wOyBrIDwgbmNvbHM7IGsrKywgcHUrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Rba10gPiB0b2wpIHN1bSArPSB2ZFtwdiArIGtdICogdWRbcHVdIC8gd2Rba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkW3BhXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgZWlnZW5WVihBOiBtYXRyaXhfdCwgdmVjdHM6IG1hdHJpeF90LCB2YWxzPzogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBhbnkgfSB9KTogdm9pZCB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpSW1wbChhX210LmRhdGEsIG4sIHdfbXQuZGF0YSwgdmVjdHMgPyB2ZWN0cy5kYXRhIDogbnVsbCwgbiwgbik7XG5cbiAgICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHMuZGF0YVtuXSA9IHdfbXQuZGF0YVtuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQub3JiID0gY2xhc3Mgb3JiIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIGJpdF9wYXR0ZXJuXzMxXzogSW50MzJBcnJheVxuICAgIHB1YmxpYyBIOiBtYXRyaXhfdFxuICAgIHB1YmxpYyBwYXRjaF9pbWc6IG1hdHJpeF90XG4gICAgcHVibGljIGltZ3Byb2M6IGltZ3Byb2M7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpO1xuICAgIH1cblxuICAgIGRlc2NyaWJlKHNyYzogbWF0cml4X3QsIGNvcm5lcnM6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuZ2xlOiBudW1iZXIgfVtdLCBjb3VudDogbnVtYmVyLCBkZXNjcmlwdG9yczogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgdmFyIERFU0NSX1NJWkUgPSAzMjsgLy8gYnl0ZXM7XG4gICAgICAgIHZhciBpID0gMCwgYiA9IDAsIHB4ID0gMC4wLCBweSA9IDAuMCwgYW5nbGUgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAsIHQxID0gMCwgdmFsID0gMDtcbiAgICAgICAgLy92YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgcGF0Y2hfZCA9IHRoaXMucGF0Y2hfaW1nLmRhdGE7XG4gICAgICAgIHZhciBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICB2YXIgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzY3JfZCA9IGRlc2NyaXB0b3JzLmRhdGE7XG4gICAgICAgIHZhciBkZXNjcl9vZmYgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBweCA9IGNvcm5lcnNbaV0ueDtcbiAgICAgICAgICAgIHB5ID0gY29ybmVyc1tpXS55O1xuICAgICAgICAgICAgYW5nbGUgPSBjb3JuZXJzW2ldLmFuZ2xlO1xuXG4gICAgICAgICAgICByZWN0aWZ5X3BhdGNoKHNyYywgdGhpcy5wYXRjaF9pbWcsIGFuZ2xlLCBweCwgcHksIDMyLCB0aGlzLkgsIHRoaXMuaW1ncHJvYyk7XG5cbiAgICAgICAgICAgIC8vIGRlc2NyaWJlIHRoZSBwYXRjaFxuICAgICAgICAgICAgcGF0dCA9IDA7XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgREVTQ1JfU0laRTsgKytiKSB7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsID0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgfCAwO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCAyO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCAzO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCA1O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCA2O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC55YXBlID0geWFwZTtcblxuanNmZWF0TmV4dC55YXBlMDYgPSBjbGFzcyB5YXBlMDYgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbGFwbGFjaWFuX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHB1YmxpYyBtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFwbGFjaWFuX3RocmVzaG9sZCA9IDMwO1xuICAgICAgICB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQgPSAyNTtcbiAgICB9XG4gICAgZGV0ZWN0KHNyYzogbWF0cml4X3QsIHBvaW50czoga2V5cG9pbnRfdFtdLCBib3JkZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubW90aW9uX2VzdGltYXRvciA9IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3IgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXRfc3Vic2V0KGtlcm5lbDogaG9tb2dyYXBoeTJkLCBmcm9tOiBhbnlbXSwgdG86IGFueVtdLCBuZWVkX2NudDogbnVtYmVyLCBtYXhfY250OiBudW1iZXIsIGZyb21fc3ViOiBhbnlbXSwgdG9fc3ViOiBhbnlbXSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgbWF4X3RyeSA9IDEwMDA7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHNzaXRlciA9IDAsIGlkeF9pID0gMCwgb2sgPSBmYWxzZTtcbiAgICAgICAgZm9yICg7IHNzaXRlciA8IG1heF90cnk7ICsrc3NpdGVyKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeTspIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlkeF9pID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW9rKSB7XG4gICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4X2kgPSBpbmRpY2VzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4X2NudCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4X2kgPT0gaW5kaWNlc1tqXSkgeyBvayA9IGZhbHNlOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21fc3ViW2ldID0gZnJvbVtpZHhfaV07XG4gICAgICAgICAgICAgICAgdG9fc3ViW2ldID0gdG9baWR4X2ldO1xuICAgICAgICAgICAgICAgIGlmICgha2VybmVsLmNoZWNrX3N1YnNldChmcm9tX3N1YiwgdG9fc3ViLCBpICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NpdGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoaSA9PSBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5KTtcbiAgICB9XG5cbiAgICBmaW5kX2lubGllcnMoa2VybmVsOiBob21vZ3JhcGh5MmQsIG1vZGVsOiBtYXRyaXhfdCwgZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgY291bnQ6IG51bWJlciwgdGhyZXNoOiBudW1iZXIsIGVycjogbnVtYmVyW10sIG1hc2s6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIG51bWlubGllcnM6IG51bWJlciA9IDAsIGkgPSAwLCBmID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aHJlc2ggKiB0aHJlc2g7XG5cbiAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBmID0gPG51bWJlcj48dW5rbm93bj4oZXJyW2ldIDw9IHQpO1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtczogcmFuc2FjX3BhcmFtc190LCBrZXJuZWw6IGFueSwgZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgY291bnQ6IG51bWJlciwgbW9kZWw6IG1hdHJpeF90LCBtYXNrOiB7IGRhdGE6IHsgW3g6IHN0cmluZ106IG51bWJlciB9IH0sIG1heF9pdGVyczogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICB2YXIgc3Vic2V0MDogYW55ID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4QzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaW5saWVyc19tYXggPSAtMSwgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIE0sIGZyb20sIHRvLCBjb3VudCwgcGFyYW1zLnRocmVzaCwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChudW1pbmxpZXJzID4gTWF0aC5tYXgoaW5saWVyc19tYXgsIG1vZGVsX3BvaW50cyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpbmxpZXJzX21heCA9IG51bWlubGllcnM7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuICAgICAgICAgICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMoKGNvdW50IC0gbnVtaW5saWVycykgLyBjb3VudCwgbml0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxtZWRzKHBhcmFtczogcmFuc2FjX3BhcmFtc190LCBrZXJuZWw6IGFueSwgZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgY291bnQ6IG51bWJlciwgbW9kZWw6IG1hdHJpeF90LCBtYXNrOiB7IGRhdGE6IHsgW3g6IHN0cmluZ106IG51bWJlciB9IH0sIG1heF9pdGVyczogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdmFyIF9tYXRoID0gbmV3IGpzZmVhdE5leHQubWF0aCgpO1xuXG4gICAgICAgIHZhciBzdWJzZXQwOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDE6IGFueSA9IFtdO1xuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgbWMgPSBtb2RlbC5jb2xzLCBtciA9IG1vZGVsLnJvd3M7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIG1fYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobWMgKiBtcikgPDwgMyk7XG4gICAgICAgIHZhciBtc19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50KTtcbiAgICAgICAgdmFyIGVycl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50IDw8IDIpO1xuICAgICAgICB2YXIgTSA9IG5ldyBtYXRyaXhfdChtYywgbXIsIGR0LCBtX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBjdXJyX21hc2sgPSBuZXcgbWF0cml4X3QoY291bnQsIDEsIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuICAgICAgICB2YXIgbWluX21lZGlhbiA9IDEwMDAwMDAwMDAuMCwgc2lnbWEgPSAwLjAsIG1lZGlhbiA9IDAuMDtcblxuICAgICAgICBwYXJhbXMuZXBzID0gMC40NTtcbiAgICAgICAgbml0ZXJzID0gcGFyYW1zLnVwZGF0ZV9pdGVycyhwYXJhbXMuZXBzLCBuaXRlcnMpO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgTSwgZXJyLCBjb3VudCk7XG4gICAgICAgICAgICBtZWRpYW4gPSBfbWF0aC5tZWRpYW4oZXJyLCAwLCBjb3VudCAtIDEpO1xuXG4gICAgICAgICAgICBpZiAobWVkaWFuIDwgbWluX21lZGlhbikge1xuICAgICAgICAgICAgICAgIG1pbl9tZWRpYW4gPSBtZWRpYW47XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgc2lnbWEgPSAyLjUgKiAxLjQ4MjYgKiAoMSArIDUuMCAvIChjb3VudCAtIG1vZGVsX3BvaW50cykpICogTWF0aC5zcXJ0KG1pbl9tZWRpYW4pO1xuICAgICAgICAgICAgc2lnbWEgPSBNYXRoLm1heChzaWdtYSwgMC4wMDEpO1xuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBtb2RlbCwgZnJvbSwgdG8sIGNvdW50LCBzaWdtYSwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG4gICAgICAgICAgICBpZiAobWFzaykgY3Vycl9tYXNrLmNvcHlfdG8obWFzayk7XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IG51bWlubGllcnMgPj0gbW9kZWxfcG9pbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQucmFuc2FjX3BhcmFtc190ID0gcmFuc2FjX3BhcmFtc190O1xuXG5qc2ZlYXROZXh0LmFmZmluZTJkID0gYWZmaW5lMmQ7XG5cbmpzZmVhdE5leHQuaG9tb2dyYXBoeTJkID0gaG9tb2dyYXBoeTJkO1xuXG5qc2ZlYXROZXh0Lm9wdGljYWxfZmxvd19sayA9IGNsYXNzIG9wdGljYWxfZmxvd19sayBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBzY2hhcnJfZGVyaXY6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpXG4gICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2ID0gX2ltZ3Byb2Muc2NoYXJyX2Rlcml2YXRpdmVzO1xuICAgIH1cbiAgICB0cmFjayhwcmV2X3B5cjogcHlyYW1pZF90LCBjdXJyX3B5cjogcHlyYW1pZF90LCBwcmV2X3h5OiBudW1iZXJbXSwgY3Vycl94eTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIHdpbl9zaXplOiBudW1iZXIsIG1heF9pdGVyOiBudW1iZXIsIHN0YXR1czogVWludDhBcnJheSwgZXBzOiBudW1iZXIsIG1pbl9laWdlbl90aHJlc2hvbGQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVyID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVyID0gMzA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0dXMgPT09IFwidW5kZWZpbmVkXCIpIHsgc3RhdHVzID0gbmV3IFVpbnQ4QXJyYXkoY291bnQpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgZXBzID09PSBcInVuZGVmaW5lZFwiKSB7IGVwcyA9IDAuMDE7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5fZWlnZW5fdGhyZXNob2xkID09PSBcInVuZGVmaW5lZFwiKSB7IG1pbl9laWdlbl90aHJlc2hvbGQgPSAwLjAwMDE7IH1cblxuICAgICAgICB2YXIgaGFsZl93aW4gPSAod2luX3NpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgdmFyIHdpbl9hcmVhID0gKHdpbl9zaXplICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgdmFyIHdpbl9hcmVhMiA9IHdpbl9hcmVhIDw8IDE7XG4gICAgICAgIHZhciBwcmV2X2ltZ3MgPSBwcmV2X3B5ci5kYXRhLCBuZXh0X2ltZ3MgPSBjdXJyX3B5ci5kYXRhO1xuICAgICAgICB2YXIgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbMF0uZGF0YSwgaW1nX25leHQgPSBuZXh0X2ltZ3NbMF0uZGF0YTtcbiAgICAgICAgdmFyIHcwID0gcHJldl9pbWdzWzBdLmNvbHMsIGgwID0gcHJldl9pbWdzWzBdLnJvd3MsIGx3ID0gMCwgbGggPSAwO1xuXG4gICAgICAgIHZhciBpd2luX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIod2luX2FyZWEgPDwgMik7XG4gICAgICAgIHZhciBkZXJpdl9pd2luX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIod2luX2FyZWEyIDw8IDIpO1xuICAgICAgICB2YXIgZGVyaXZfbGV2X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGgwICogKHcwIDw8IDEpKSA8PCAyKTtcblxuICAgICAgICB2YXIgZGVyaXZfbSA9IG5ldyBtYXRyaXhfdCh3MCwgaDAsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZGVyaXZfbGV2X25vZGUuZGF0YSk7XG5cbiAgICAgICAgdmFyIGl3aW5fYnVmID0gaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGRlcml2X2l3aW4gPSBkZXJpdl9pd2luX25vZGUuaTMyO1xuICAgICAgICB2YXIgZGVyaXZfbGV2ID0gZGVyaXZfbGV2X25vZGUuaTMyO1xuXG4gICAgICAgIHZhciBkc3RlcCA9IDAsIHNyYyA9IDAsIGRzcmMgPSAwLCBpcHRyID0gMCwgZGlwdHIgPSAwLCBqcHRyID0gMDtcbiAgICAgICAgdmFyIGxldl9zYyA9IDAuMCwgcHJldl94ID0gMC4wLCBwcmV2X3kgPSAwLjAsIG5leHRfeCA9IDAuMCwgbmV4dF95ID0gMC4wO1xuICAgICAgICB2YXIgcHJldl9kZWx0YV94ID0gMC4wLCBwcmV2X2RlbHRhX3kgPSAwLjAsIGRlbHRhX3ggPSAwLjAsIGRlbHRhX3kgPSAwLjA7XG4gICAgICAgIHZhciBpcHJldl94ID0gMCwgaXByZXZfeSA9IDAsIGluZXh0X3ggPSAwLCBpbmV4dF95ID0gMDtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgeCA9IDAsIHkgPSAwLCBsZXZlbCA9IDAsIHB0aWQgPSAwLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIGJyZF90bCA9IDAsIGJyZF9yID0gMCwgYnJkX2IgPSAwO1xuICAgICAgICB2YXIgYSA9IDAuMCwgYiA9IDAuMCwgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgIC8vIGZpeGVkIHBvaW50IG1hdGhcbiAgICAgICAgdmFyIFdfQklUUzE0ID0gMTQ7XG4gICAgICAgIHZhciBXX0JJVFM0ID0gMTQ7XG4gICAgICAgIHZhciBXX0JJVFMxbTUgPSBXX0JJVFM0IC0gNTtcbiAgICAgICAgdmFyIFdfQklUUzFtNTEgPSAoMSA8PCAoKFdfQklUUzFtNSkgLSAxKSk7XG4gICAgICAgIHZhciBXX0JJVFMxNF8gPSAoMSA8PCBXX0JJVFMxNCk7XG4gICAgICAgIHZhciBXX0JJVFM0MSA9ICgxIDw8ICgoV19CSVRTNCkgLSAxKSk7XG4gICAgICAgIHZhciBGTFRfU0NBTEUgPSAxLjAgLyAoMSA8PCAyMCk7XG4gICAgICAgIHZhciBpdzAwID0gMCwgaXcwMSA9IDAsIGl3MTAgPSAwLCBpdzExID0gMCwgaXZhbCA9IDAsIGl4dmFsID0gMCwgaXl2YWwgPSAwO1xuICAgICAgICB2YXIgQTExID0gMC4wLCBBMTIgPSAwLjAsIEEyMiA9IDAuMCwgRCA9IDAuMCwgbWluX2VpZyA9IDAuMDtcblxuICAgICAgICB2YXIgRkxUX0VQU0lMT04gPSAwLjAwMDAwMDExOTIwOTI5O1xuICAgICAgICBlcHMgKj0gZXBzO1xuXG4gICAgICAgIC8vIHJlc2V0IHN0YXR1c1xuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHN0YXR1c1tpXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWF4X2xldmVsID0gKHByZXZfcHlyLmxldmVscyAtIDEpIHwgMDtcbiAgICAgICAgbGV2ZWwgPSBtYXhfbGV2ZWw7XG5cbiAgICAgICAgZm9yICg7IGxldmVsID49IDA7IC0tbGV2ZWwpIHtcbiAgICAgICAgICAgIGxldl9zYyA9ICgxLjAgLyAoMSA8PCBsZXZlbCkpO1xuICAgICAgICAgICAgbHcgPSB3MCA+PiBsZXZlbDtcbiAgICAgICAgICAgIGxoID0gaDAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBkc3RlcCA9IGx3IDw8IDE7XG4gICAgICAgICAgICBpbWdfcHJldiA9IHByZXZfaW1nc1tsZXZlbF0uZGF0YTtcbiAgICAgICAgICAgIGltZ19uZXh0ID0gbmV4dF9pbWdzW2xldmVsXS5kYXRhO1xuXG4gICAgICAgICAgICBicmRfciA9IChsdyAtIHdpbl9zaXplKSB8IDA7XG4gICAgICAgICAgICBicmRfYiA9IChsaCAtIHdpbl9zaXplKSB8IDA7XG5cbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsZXZlbCBkZXJpdmF0aXZlc1xuICAgICAgICAgICAgdGhpcy5zY2hhcnJfZGVyaXYocHJldl9pbWdzW2xldmVsXSwgZGVyaXZfbSk7XG5cbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBwb2ludHNcbiAgICAgICAgICAgIGZvciAocHRpZCA9IDA7IHB0aWQgPCBjb3VudDsgKytwdGlkKSB7XG4gICAgICAgICAgICAgICAgaSA9IHB0aWQgPDwgMTtcbiAgICAgICAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgICAgICAgICAgcHJldl94ID0gcHJldl94eVtpXSAqIGxldl9zYztcbiAgICAgICAgICAgICAgICBwcmV2X3kgPSBwcmV2X3h5W2pdICogbGV2X3NjO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID09IG1heF9sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggPSBwcmV2X3g7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSA9IHByZXZfeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggPSBjdXJyX3h5W2ldICogMi4wO1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBjdXJyX3h5W2pdICogMi4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyX3h5W2ldID0gbmV4dF94O1xuICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gPSBuZXh0X3k7XG5cbiAgICAgICAgICAgICAgICBwcmV2X3ggLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl95IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIGlwcmV2X3ggPSBwcmV2X3ggfCAwO1xuICAgICAgICAgICAgICAgIGlwcmV2X3kgPSBwcmV2X3kgfCAwO1xuXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyIGNoZWNrXG4gICAgICAgICAgICAgICAgeCA9IDxudW1iZXI+PHVua25vd24+KChpcHJldl94IDw9IGJyZF90bCkgfHwgKGlwcmV2X3ggPj0gYnJkX3IpIHx8IChpcHJldl95IDw9IGJyZF90bCkgfHwgKGlwcmV2X3kgPj0gYnJkX2IpKTtcbiAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEgPSBwcmV2X3ggLSBpcHJldl94O1xuICAgICAgICAgICAgICAgIGIgPSBwcmV2X3kgLSBpcHJldl95O1xuICAgICAgICAgICAgICAgIGl3MDAgPSAoKCgxLjAgLSBhKSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzAxID0gKChhICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcxMSA9IChXX0JJVFMxNF8gLSBpdzAwIC0gaXcwMSAtIGl3MTApO1xuXG4gICAgICAgICAgICAgICAgQTExID0gMC4wLCBBMTIgPSAwLjAsIEEyMiA9IDAuMDtcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgdGhlIHBhdGNoIGZyb20gdGhlIGZpcnN0IGltYWdlLCBjb21wdXRlIGNvdmFyaWF0aW9uIG1hdHJpeCBvZiBkZXJpdmF0aXZlc1xuICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA9ICgoeSArIGlwcmV2X3kpICogbHcgKyBpcHJldl94KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGRzcmMgPSBzcmMgPDwgMTtcblxuICAgICAgICAgICAgICAgICAgICBpcHRyID0gKHkgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXB0ciA9IGlwdHIgPDwgMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsrc3JjLCArK2lwdHIsIGRzcmMgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX3ByZXZbc3JjXSkgKiBpdzAwICsgKGltZ19wcmV2W3NyYyArIDFdKSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfcHJldltzcmMgKyBsd10pICogaXcxMCArIChpbWdfcHJldltzcmMgKyBsdyArIDFdKSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpeHZhbCA9IChkZXJpdl9sZXZbZHNyY10gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAyXSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXBdICogaXcxMCArIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAyXSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoKChpeHZhbCkgKyBXX0JJVFM0MSkgPj4gKFdfQklUUzQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoZGVyaXZfbGV2W2RzcmMgKyAxXSAqIGl3MDAgKyBkZXJpdl9sZXZbZHNyYyArIDNdICogaXcwMSArIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAxXSAqIGl3MTAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAzXSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoKChpeXZhbCkgKyBXX0JJVFM0MSkgPj4gKFdfQklUUzQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXdpbl9idWZbaXB0cl0gPSBpdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl4dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl5dmFsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBMTEgKz0gaXh2YWwgKiBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEExMiArPSBpeHZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgQTIyICs9IGl5dmFsICogaXl2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBBMTEgKj0gRkxUX1NDQUxFOyBBMTIgKj0gRkxUX1NDQUxFOyBBMjIgKj0gRkxUX1NDQUxFO1xuXG4gICAgICAgICAgICAgICAgRCA9IEExMSAqIEEyMiAtIEExMiAqIEExMjtcbiAgICAgICAgICAgICAgICBtaW5fZWlnID0gKEEyMiArIEExMSAtIE1hdGguc3FydCgoQTExIC0gQTIyKSAqIChBMTEgLSBBMjIpICsgNC4wICogQTEyICogQTEyKSkgLyB3aW5fYXJlYTI7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluX2VpZyA8IG1pbl9laWdlbl90aHJlc2hvbGQgfHwgRCA8IEZMVF9FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEQgPSAxLjAgLyBEO1xuXG4gICAgICAgICAgICAgICAgbmV4dF94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIG5leHRfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3ggPSAwLjA7XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpdGVyID0gMDsgaXRlciA8IG1heF9pdGVyOyArK2l0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5leHRfeCA9IG5leHRfeCB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3kgPSBuZXh0X3kgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHggPSA8bnVtYmVyPjx1bmtub3duPigoaW5leHRfeCA8PSBicmRfdGwpIHx8IChpbmV4dF94ID49IGJyZF9yKSB8fCAoaW5leHRfeSA8PSBicmRfdGwpIHx8IChpbmV4dF95ID49IGJyZF9iKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MDEgPSAoKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcbiAgICAgICAgICAgICAgICAgICAgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcHRyID0gKCh5ICsgaW5leHRfeSkgKiBsdyArIGluZXh0X3gpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsranB0ciwgKytpcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX25leHRbanB0cl0pICogaXcwMCArIChpbWdfbmV4dFtqcHRyICsgMV0pICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfbmV4dFtqcHRyICsgbHddKSAqIGl3MTAgKyAoaW1nX25leHRbanB0ciArIGx3ICsgMV0pICogaXcxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCAtIGl3aW5fYnVmW2lwdHJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYjEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICBiMiAqPSBGTFRfU0NBTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeCA9ICgoQTEyICogYjIgLSBBMjIgKiBiMSkgKiBEKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9ICgoQTEyICogYjEgLSBBMTEgKiBiMikgKiBEKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggKz0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ICs9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3ggKyBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeSArIGhhbGZfd2luO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95IDw9IGVwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA+IDAgJiYgTWF0aC5hYnMoZGVsdGFfeCArIHByZXZfZGVsdGFfeCkgPCAwLjAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkZWx0YV95ICsgcHJldl9kZWx0YV95KSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gLT0gZGVsdGFfeCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gLT0gZGVsdGFfeSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIHBvaW50cyBsb29wXG4gICAgICAgIH0gLy8gbGV2ZWxzIGxvb3BcblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2l3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9sZXZfbm9kZSk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XG4gICAgcHVibGljIGFuZ2xlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjb3JlOiBudW1iZXIsIGxldmVsOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInVuZGVmaW5lZFwiKSB7IHggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJ1bmRlZmluZWRcIikgeyB5ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHNjb3JlID09PSBcInVuZGVmaW5lZFwiKSB7IHNjb3JlID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IGxldmVsID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGFuZ2xlID09PSBcInVuZGVmaW5lZFwiKSB7IGFuZ2xlID0gLTEuMDsgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBzd2FwKEE6IHsgW3g6IHN0cmluZ106IGFueTsgfSwgaTA6IHN0cmluZyB8IG51bWJlciwgaTE6IHN0cmluZyB8IG51bWJlciwgdDogYW55KSB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICBhID0gTWF0aC5hYnMoYSk7XG4gICAgYiA9IE1hdGguYWJzKGIpO1xuICAgIGlmIChhID4gYikge1xuICAgICAgICBiIC89IGE7XG4gICAgICAgIHJldHVybiBhICogTWF0aC5zcXJ0KDEuMCArIGIgKiBiKTtcbiAgICB9XG4gICAgaWYgKGIgPiAwKSB7XG4gICAgICAgIGEgLz0gYjtcbiAgICAgICAgcmV0dXJuIGIgKiBNYXRoLnNxcnQoMS4wICsgYSAqIGEpO1xuICAgIH1cbiAgICByZXR1cm4gMC4wO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNOiB7IGRhdGE6IGFueTsgcm93czogYW55OyBjb2xzOiBhbnk7IH0sIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdDogeyBkYXRhOiBhbnk7IH0sIEE6IHsgcm93czogYW55OyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE06IHsgZGF0YTogYW55OyB9LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tOiB7IGRhdGE6IGFueTsgfSwgdG86IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBkYXRhOiBhbnk7IH0sIEI6IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTTogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMTogbnVtYmVyLCBNMTI6IG51bWJlciwgTTEzOiBudW1iZXIsXG4gICAgICAgIE0yMTogbnVtYmVyLCBNMjI6IG51bWJlciwgTTIzOiBudW1iZXIsXG4gICAgICAgIE0zMTogbnVtYmVyLCBNMzI6IG51bWJlciwgTTMzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgZGF0YV90IH0gZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4X1Qge1xuICAgIGFsbG9jYXRlOiAoKSA9PiB2b2lkO1xuICAgIGNvcHlfdG86IChvdGhlcjogYW55KSA9PiB2b2lkO1xuICAgIHJlc2l6ZTogKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSA9PiB2b2lkO1xufVxuZXhwb3J0IGNsYXNzIG1hdHJpeF90IGltcGxlbWVudHMgSU1hdHJpeF9UIHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNoYW5uZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sczogbnVtYmVyO1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgYnVmZmVyOiBkYXRhX3Q7XG4gICAgY29uc3RydWN0b3IoYzogbnVtYmVyLCByOiBudW1iZXIsIF9kYXRhX3R5cGU6IG51bWJlciwgX2RhdGFfYnVmZmVyPzogZGF0YV90KSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjOiBudW1iZXIsIHI6IG51bWJlciwgY2g6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIHRocmVzaDogbnVtYmVyO1xuICAgIHB1YmxpYyBlcHM6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvYjogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlciwgdGhyZXNoOiBudW1iZXIsIGVwczogbnVtYmVyLCBwcm9iOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplID09PSBcInVuZGVmaW5lZFwiKSB7IHNpemUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhyZXNoID09PSBcInVuZGVmaW5lZFwiKSB7IHRocmVzaCA9IDAuNTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9iID09PSBcInVuZGVmaW5lZFwiKSB7IHByb2IgPSAwLjk5OyB9XG5cbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy50aHJlc2ggPSB0aHJlc2g7XG4gICAgICAgIHRoaXMuZXBzID0gZXBzO1xuICAgICAgICB0aGlzLnByb2IgPSBwcm9iO1xuICAgIH07XG4gICAgdXBkYXRlX2l0ZXJzKF9lcHM6IG51bWJlciwgbWF4X2l0ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBJRGF0YV9ULCBkYXRhX3QgfSBmcm9tICcuL2RhdGFfdCdcblxuZXhwb3J0IGludGVyZmFjZSBJUG9vbF9Ob2RlX1Qge1xuICAgIHJlc2l6ZTogKHNpemVfaW5fYnl0ZXM6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IGltcGxlbWVudHMgSVBvb2xfTm9kZV9UIHtcbiAgICBwdWJsaWMgbmV4dDogYW55O1xuICAgIHB1YmxpYyBkYXRhPzogSURhdGFfVDtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBidWZmZXI6IGFueTtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YV9UIHtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICB1ODogVWludDhBcnJheTtcbiAgICBpMzI6IEludDMyQXJyYXk7XG4gICAgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgZjY0OiBGbG9hdDY0QXJyYXk7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3QgaW1wbGVtZW50cyBJRGF0YV9UICB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlciwgYnVmZmVyPzogYW55KSB7XG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBiaXRfcGF0dGVybl8zMSA9IFtcbiAgICA4LC0zLCA5LDUvKm1lYW4gKDApLCBjb3JyZWxhdGlvbiAoMCkqLyxcbiAgICA0LDIsIDcsLTEyLyptZWFuICgxLjEyNDYxZS0wNSksIGNvcnJlbGF0aW9uICgwLjA0Mzc1ODQpKi8sXG4gICAgLTExLDksIC04LDIvKm1lYW4gKDMuMzczODJlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYxNzQwOSkqLyxcbiAgICA3LC0xMiwgMTIsLTEzLyptZWFuICg1LjYyMzAzZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MzY5NzcpKi8sXG4gICAgMiwtMTMsIDIsMTIvKm1lYW4gKDAuMDAwMTM0OTUzKSwgY29ycmVsYXRpb24gKDAuMDg1MDk5KSovLFxuICAgIDEsLTcsIDEsNi8qbWVhbiAoMC4wMDA1Mjg1NjUpLCBjb3JyZWxhdGlvbiAoMC4wODU3MTc1KSovLFxuICAgIC0yLC0xMCwgLTIsLTQvKm1lYW4gKDAuMDE4ODgyMSksIGNvcnJlbGF0aW9uICgwLjA5ODU3NzQpKi8sXG4gICAgLTEzLC0xMywgLTExLC04LyptZWFuICgwLjAzNjMxMzUpLCBjb3JyZWxhdGlvbiAoMC4wODk5NjE2KSovLFxuICAgIC0xMywtMywgLTEyLC05LyptZWFuICgwLjEyMTgwNiksIGNvcnJlbGF0aW9uICgwLjA5OTg0OSkqLyxcbiAgICAxMCw0LCAxMSw5LyptZWFuICgwLjEyMjA2NSksIGNvcnJlbGF0aW9uICgwLjA5MzI4NSkqLyxcbiAgICAtMTMsLTgsIC04LC05LyptZWFuICgwLjE2Mjc4NyksIGNvcnJlbGF0aW9uICgwLjA5NDI3NDgpKi8sXG4gICAgLTExLDcsIC05LDEyLyptZWFuICgwLjIxNTYxKSwgY29ycmVsYXRpb24gKDAuMDk3NDQzOCkqLyxcbiAgICA3LDcsIDEyLDYvKm1lYW4gKDAuMTYwNTgzKSwgY29ycmVsYXRpb24gKDAuMTMwMDY0KSovLFxuICAgIC00LC01LCAtMywwLyptZWFuICgwLjIyODE3MSksIGNvcnJlbGF0aW9uICgwLjEzMjk5OCkqLyxcbiAgICAtMTMsMiwgLTEyLC0zLyptZWFuICgwLjAwOTk3NTI2KSwgY29ycmVsYXRpb24gKDAuMTQ1OTI2KSovLFxuICAgIC05LDAsIC03LDUvKm1lYW4gKDAuMTk4MjM0KSwgY29ycmVsYXRpb24gKDAuMTQzNjM2KSovLFxuICAgIDEyLC02LCAxMiwtMS8qbWVhbiAoMC4wNjc2MjI2KSwgY29ycmVsYXRpb24gKDAuMTY2ODkpKi8sXG4gICAgLTMsNiwgLTIsMTIvKm1lYW4gKDAuMTY2ODQ3KSwgY29ycmVsYXRpb24gKDAuMTcxNjgyKSovLFxuICAgIC02LC0xMywgLTQsLTgvKm1lYW4gKDAuMTAxMjE1KSwgY29ycmVsYXRpb24gKDAuMTc5NzE2KSovLFxuICAgIDExLC0xMywgMTIsLTgvKm1lYW4gKDAuMjAwNjQxKSwgY29ycmVsYXRpb24gKDAuMTkyMjc5KSovLFxuICAgIDQsNywgNSwxLyptZWFuICgwLjIwNTEwNiksIGNvcnJlbGF0aW9uICgwLjE4Njg0OCkqLyxcbiAgICA1LC0zLCAxMCwtMy8qbWVhbiAoMC4yMzQ5MDgpLCBjb3JyZWxhdGlvbiAoMC4xOTIzMTkpKi8sXG4gICAgMywtNywgNiwxMi8qbWVhbiAoMC4wNzA5OTY0KSwgY29ycmVsYXRpb24gKDAuMjEwODcyKSovLFxuICAgIC04LC03LCAtNiwtMi8qbWVhbiAoMC4wOTM5ODM0KSwgY29ycmVsYXRpb24gKDAuMjEyNTg5KSovLFxuICAgIC0yLDExLCAtMSwtMTAvKm1lYW4gKDAuMTI3Nzc4KSwgY29ycmVsYXRpb24gKDAuMjA4NjYpKi8sXG4gICAgLTEzLDEyLCAtOCwxMC8qbWVhbiAoMC4xNDc4MyksIGNvcnJlbGF0aW9uICgwLjIwNjM1NikqLyxcbiAgICAtNywzLCAtNSwtMy8qbWVhbiAoMC4xODIxNDEpLCBjb3JyZWxhdGlvbiAoMC4xOTg5NDIpKi8sXG4gICAgLTQsMiwgLTMsNy8qbWVhbiAoMC4xODgyMzcpLCBjb3JyZWxhdGlvbiAoMC4yMTM4NCkqLyxcbiAgICAtMTAsLTEyLCAtNiwxMS8qbWVhbiAoMC4xNDg2NSksIGNvcnJlbGF0aW9uICgwLjIzNTcxKSovLFxuICAgIDUsLTEyLCA2LC03LyptZWFuICgwLjIyMjMxMiksIGNvcnJlbGF0aW9uICgwLjIzMzI0KSovLFxuICAgIDUsLTYsIDcsLTEvKm1lYW4gKDAuMjI5MDgyKSwgY29ycmVsYXRpb24gKDAuMjMzODkpKi8sXG4gICAgMSwwLCA0LC01LyptZWFuICgwLjI0MTU3NyksIGNvcnJlbGF0aW9uICgwLjIxNTI4NikqLyxcbiAgICA5LDExLCAxMSwtMTMvKm1lYW4gKDAuMDAzMzg1MDcpLCBjb3JyZWxhdGlvbiAoMC4yNTEzNzMpKi8sXG4gICAgNCw3LCA0LDEyLyptZWFuICgwLjEzMTAwNSksIGNvcnJlbGF0aW9uICgwLjI1NzYyMikqLyxcbiAgICAyLC0xLCA0LDQvKm1lYW4gKDAuMTUyNzU1KSwgY29ycmVsYXRpb24gKDAuMjU1MjA1KSovLFxuICAgIC00LC0xMiwgLTIsNy8qbWVhbiAoMC4xODI3NzEpLCBjb3JyZWxhdGlvbiAoMC4yNDQ4NjcpKi8sXG4gICAgLTgsLTUsIC03LC0xMC8qbWVhbiAoMC4xODY4OTgpLCBjb3JyZWxhdGlvbiAoMC4yMzkwMSkqLyxcbiAgICA0LDExLCA5LDEyLyptZWFuICgwLjIyNjIyNiksIGNvcnJlbGF0aW9uICgwLjI1ODI1NSkqLyxcbiAgICAwLC04LCAxLC0xMy8qbWVhbiAoMC4wODk3ODg2KSwgY29ycmVsYXRpb24gKDAuMjc0ODI3KSovLFxuICAgIC0xMywtMiwgLTgsMi8qbWVhbiAoMC4xNDg3NzQpLCBjb3JyZWxhdGlvbiAoMC4yODA2NSkqLyxcbiAgICAtMywtMiwgLTIsMy8qbWVhbiAoMC4xNTMwNDgpLCBjb3JyZWxhdGlvbiAoMC4yODMwNjMpKi8sXG4gICAgLTYsOSwgLTQsLTkvKm1lYW4gKDAuMTY5NTIzKSwgY29ycmVsYXRpb24gKDAuMjc4MjQ4KSovLFxuICAgIDgsMTIsIDEwLDcvKm1lYW4gKDAuMjI1MzM3KSwgY29ycmVsYXRpb24gKDAuMjgyODUxKSovLFxuICAgIDAsOSwgMSwzLyptZWFuICgwLjIyNjY4NyksIGNvcnJlbGF0aW9uICgwLjI3ODczNCkqLyxcbiAgICA3LC01LCAxMSwtMTAvKm1lYW4gKDAuMDA2OTM4ODIpLCBjb3JyZWxhdGlvbiAoMC4zMDUxNjEpKi8sXG4gICAgLTEzLC02LCAtMTEsMC8qbWVhbiAoMC4wMjI3MjgzKSwgY29ycmVsYXRpb24gKDAuMzAwMTgxKSovLFxuICAgIDEwLDcsIDEyLDEvKm1lYW4gKDAuMTI1NTE3KSwgY29ycmVsYXRpb24gKDAuMzEwODkpKi8sXG4gICAgLTYsLTMsIC02LDEyLyptZWFuICgwLjEzMTc0OCksIGNvcnJlbGF0aW9uICgwLjMxMjc3OSkqLyxcbiAgICAxMCwtOSwgMTIsLTQvKm1lYW4gKDAuMTQ0ODI3KSwgY29ycmVsYXRpb24gKDAuMjkyNzk3KSovLFxuICAgIC0xMyw4LCAtOCwtMTIvKm1lYW4gKDAuMTQ5MjAyKSwgY29ycmVsYXRpb24gKDAuMzA4OTE4KSovLFxuICAgIC0xMywwLCAtOCwtNC8qbWVhbiAoMC4xNjA5MDkpLCBjb3JyZWxhdGlvbiAoMC4zMTAwMTMpKi8sXG4gICAgMywzLCA3LDgvKm1lYW4gKDAuMTc3NzU1KSwgY29ycmVsYXRpb24gKDAuMzA5Mzk0KSovLFxuICAgIDUsNywgMTAsLTcvKm1lYW4gKDAuMjEyMzM3KSwgY29ycmVsYXRpb24gKDAuMzEwMzE1KSovLFxuICAgIC0xLDcsIDEsLTEyLyptZWFuICgwLjIxNDQyOSksIGNvcnJlbGF0aW9uICgwLjMxMTkzMykqLyxcbiAgICAzLC0xMCwgNSw2LyptZWFuICgwLjIzNTgwNyksIGNvcnJlbGF0aW9uICgwLjMxMzEwNCkqLyxcbiAgICAyLC00LCAzLC0xMC8qbWVhbiAoMC4wMDQ5NDgyNyksIGNvcnJlbGF0aW9uICgwLjM0NDk0OCkqLyxcbiAgICAtMTMsMCwgLTEzLDUvKm1lYW4gKDAuMDU0OTE0NSksIGNvcnJlbGF0aW9uICgwLjM0NDY3NSkqLyxcbiAgICAtMTMsLTcsIC0xMiwxMi8qbWVhbiAoMC4xMDMzODUpLCBjb3JyZWxhdGlvbiAoMC4zNDI3MTUpKi8sXG4gICAgLTEzLDMsIC0xMSw4LyptZWFuICgwLjEzNDIyMiksIGNvcnJlbGF0aW9uICgwLjMyMjkyMikqLyxcbiAgICAtNywxMiwgLTQsNy8qbWVhbiAoMC4xNTMyODQpLCBjb3JyZWxhdGlvbiAoMC4zMzcwNjEpKi8sXG4gICAgNiwtMTAsIDEyLDgvKm1lYW4gKDAuMTU0ODgxKSwgY29ycmVsYXRpb24gKDAuMzI5MjU3KSovLFxuICAgIC05LC0xLCAtNywtNi8qbWVhbiAoMC4yMDA5NjcpLCBjb3JyZWxhdGlvbiAoMC4zMzMxMikqLyxcbiAgICAtMiwtNSwgMCwxMi8qbWVhbiAoMC4yMDE1MTgpLCBjb3JyZWxhdGlvbiAoMC4zNDA2MzUpKi8sXG4gICAgLTEyLDUsIC03LDUvKm1lYW4gKDAuMjA3ODA1KSwgY29ycmVsYXRpb24gKDAuMzM1NjMxKSovLFxuICAgIDMsLTEwLCA4LC0xMy8qbWVhbiAoMC4yMjQ0MzgpLCBjb3JyZWxhdGlvbiAoMC4zNDUwNCkqLyxcbiAgICAtNywtNywgLTQsNS8qbWVhbiAoMC4yMzkzNjEpLCBjb3JyZWxhdGlvbiAoMC4zMzgwNTMpKi8sXG4gICAgLTMsLTIsIC0xLC03LyptZWFuICgwLjI0MDc0NCksIGNvcnJlbGF0aW9uICgwLjM0NDMyMikqLyxcbiAgICAyLDksIDUsLTExLyptZWFuICgwLjI0Mjk0OSksIGNvcnJlbGF0aW9uICgwLjM0MTQ1KSovLFxuICAgIC0xMSwtMTMsIC01LC0xMy8qbWVhbiAoMC4yNDQwMjgpLCBjb3JyZWxhdGlvbiAoMC4zMzY4NjEpKi8sXG4gICAgLTEsNiwgMCwtMS8qbWVhbiAoMC4yNDc1NzEpLCBjb3JyZWxhdGlvbiAoMC4zNDM2ODQpKi8sXG4gICAgNSwtMywgNSwyLyptZWFuICgwLjAwMDY5NzI1NiksIGNvcnJlbGF0aW9uICgwLjM1NzI2NSkqLyxcbiAgICAtNCwtMTMsIC00LDEyLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuMzczODI3KSovLFxuICAgIC05LC02LCAtOSw2LyptZWFuICgwLjAxMjY4NTYpLCBjb3JyZWxhdGlvbiAoMC4zNzM5MzgpKi8sXG4gICAgLTEyLC0xMCwgLTgsLTQvKm1lYW4gKDAuMDE1MjQ5NyksIGNvcnJlbGF0aW9uICgwLjM2NDIzNykqLyxcbiAgICAxMCwyLCAxMiwtMy8qbWVhbiAoMC4wMjk5OTMzKSwgY29ycmVsYXRpb24gKDAuMzQ1MjkyKSovLFxuICAgIDcsMTIsIDEyLDEyLyptZWFuICgwLjAzMDcyNDIpLCBjb3JyZWxhdGlvbiAoMC4zNjYyOTkpKi8sXG4gICAgLTcsLTEzLCAtNiw1LyptZWFuICgwLjA1MzQ5NzUpLCBjb3JyZWxhdGlvbiAoMC4zNjgzNTcpKi8sXG4gICAgLTQsOSwgLTMsNC8qbWVhbiAoMC4wOTk4NjUpLCBjb3JyZWxhdGlvbiAoMC4zNzIyNzYpKi8sXG4gICAgNywtMSwgMTIsMi8qbWVhbiAoMC4xMTcwODMpLCBjb3JyZWxhdGlvbiAoMC4zNjQ1MjkpKi8sXG4gICAgLTcsNiwgLTUsMS8qbWVhbiAoMC4xMjYxMjUpLCBjb3JyZWxhdGlvbiAoMC4zNjk2MDYpKi8sXG4gICAgLTEzLDExLCAtMTIsNS8qbWVhbiAoMC4xMzAzNjQpLCBjb3JyZWxhdGlvbiAoMC4zNTg1MDIpKi8sXG4gICAgLTMsNywgLTIsLTYvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuMzc1NTMxKSovLFxuICAgIDcsLTgsIDEyLC03LyptZWFuICgwLjE2MDE2NiksIGNvcnJlbGF0aW9uICgwLjM3OTUwOCkqLyxcbiAgICAtMTMsLTcsIC0xMSwtMTIvKm1lYW4gKDAuMTY3ODQ4KSwgY29ycmVsYXRpb24gKDAuMzUzMzQzKSovLFxuICAgIDEsLTMsIDEyLDEyLyptZWFuICgwLjE4MzM3OCksIGNvcnJlbGF0aW9uICgwLjM3MTkxNikqLyxcbiAgICAyLC02LCAzLDAvKm1lYW4gKDAuMjI4NzExKSwgY29ycmVsYXRpb24gKDAuMzcxNzYxKSovLFxuICAgIC00LDMsIC0yLC0xMy8qbWVhbiAoMC4yNDcyMTEpLCBjb3JyZWxhdGlvbiAoMC4zNjQwNjMpKi8sXG4gICAgLTEsLTEzLCAxLDkvKm1lYW4gKDAuMjQ5MzI1KSwgY29ycmVsYXRpb24gKDAuMzc4MTM5KSovLFxuICAgIDcsMSwgOCwtNi8qbWVhbiAoMC4wMDA2NTIyNzIpLCBjb3JyZWxhdGlvbiAoMC40MTE2ODIpKi8sXG4gICAgMSwtMSwgMywxMi8qbWVhbiAoMC4wMDI0ODUzOCksIGNvcnJlbGF0aW9uICgwLjM5Mjk4OCkqLyxcbiAgICA5LDEsIDEyLDYvKm1lYW4gKDAuMDIwNjgxNSksIGNvcnJlbGF0aW9uICgwLjM4NjEwNikqLyxcbiAgICAtMSwtOSwgLTEsMy8qbWVhbiAoMC4wMzY0NDg1KSwgY29ycmVsYXRpb24gKDAuNDEwNzUyKSovLFxuICAgIC0xMywtMTMsIC0xMCw1LyptZWFuICgwLjAzNzYwNjgpLCBjb3JyZWxhdGlvbiAoMC4zOTgzNzQpKi8sXG4gICAgNyw3LCAxMCwxMi8qbWVhbiAoMC4wNDI0MjAyKSwgY29ycmVsYXRpb24gKDAuNDA1NjYzKSovLFxuICAgIDEyLC01LCAxMiw5LyptZWFuICgwLjA5NDI2NDUpLCBjb3JyZWxhdGlvbiAoMC40MTA0MjIpKi8sXG4gICAgNiwzLCA3LDExLyptZWFuICgwLjEwNzQpLCBjb3JyZWxhdGlvbiAoMC40MTMyMjQpKi8sXG4gICAgNSwtMTMsIDYsMTAvKm1lYW4gKDAuMTA5MjU2KSwgY29ycmVsYXRpb24gKDAuNDA4NjQ2KSovLFxuICAgIDIsLTEyLCAyLDMvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuNDE2MDc2KSovLFxuICAgIDMsOCwgNCwtNi8qbWVhbiAoMC4xNjUwODEpLCBjb3JyZWxhdGlvbiAoMC40MTc1NjkpKi8sXG4gICAgMiw2LCAxMiwtMTMvKm1lYW4gKDAuMTcxODc0KSwgY29ycmVsYXRpb24gKDAuNDA4NDcxKSovLFxuICAgIDksLTEyLCAxMCwzLyptZWFuICgwLjE3NTE0NiksIGNvcnJlbGF0aW9uICgwLjQxMjk2KSovLFxuICAgIC04LDQsIC03LDkvKm1lYW4gKDAuMTgzNjgyKSwgY29ycmVsYXRpb24gKDAuNDAyOTU2KSovLFxuICAgIC0xMSwxMiwgLTQsLTYvKm1lYW4gKDAuMTg0NjcyKSwgY29ycmVsYXRpb24gKDAuNDE2MTI1KSovLFxuICAgIDEsMTIsIDIsLTgvKm1lYW4gKDAuMTkxNDg3KSwgY29ycmVsYXRpb24gKDAuMzg2Njk2KSovLFxuICAgIDYsLTksIDcsLTQvKm1lYW4gKDAuMTkyNjY4KSwgY29ycmVsYXRpb24gKDAuMzk0NzcxKSovLFxuICAgIDIsMywgMywtMi8qbWVhbiAoMC4yMDAxNTcpLCBjb3JyZWxhdGlvbiAoMC40MDgzMDMpKi8sXG4gICAgNiwzLCAxMSwwLyptZWFuICgwLjIwNDU4OCksIGNvcnJlbGF0aW9uICgwLjQxMTc2MikqLyxcbiAgICAzLC0zLCA4LC04LyptZWFuICgwLjIwNTkwNCksIGNvcnJlbGF0aW9uICgwLjQxNjI5NCkqLyxcbiAgICA3LDgsIDksMy8qbWVhbiAoMC4yMTMyMzcpLCBjb3JyZWxhdGlvbiAoMC40MDkzMDYpKi8sXG4gICAgLTExLC01LCAtNiwtNC8qbWVhbiAoMC4yNDM0NDQpLCBjb3JyZWxhdGlvbiAoMC4zOTUwNjkpKi8sXG4gICAgLTEwLDExLCAtNSwxMC8qbWVhbiAoMC4yNDc2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTMzOTIpKi8sXG4gICAgLTUsLTgsIC0zLDEyLyptZWFuICgwLjI0Nzc0KSwgY29ycmVsYXRpb24gKDAuNDExNDE2KSovLFxuICAgIC0xMCw1LCAtOSwwLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuNDU0MDAzKSovLFxuICAgIDgsLTEsIDEyLC02LyptZWFuICgwLjAyOTM2MzUpLCBjb3JyZWxhdGlvbiAoMC40NTUzNjgpKi8sXG4gICAgNCwtNiwgNiwtMTEvKm1lYW4gKDAuMDQwNDk3MSksIGNvcnJlbGF0aW9uICgwLjQ1NzM5MykqLyxcbiAgICAtMTAsMTIsIC04LDcvKm1lYW4gKDAuMDQ4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ0ODM2NCkqLyxcbiAgICA0LC0yLCA2LDcvKm1lYW4gKDAuMDUwNjQxKSwgY29ycmVsYXRpb24gKDAuNDU1MDE5KSovLFxuICAgIC0yLDAsIC0yLDEyLyptZWFuICgwLjA1MjU5NzgpLCBjb3JyZWxhdGlvbiAoMC40NDMzOCkqLyxcbiAgICAtNSwtOCwgLTUsMi8qbWVhbiAoMC4wNjI5NjY3KSwgY29ycmVsYXRpb24gKDAuNDU3MDk2KSovLFxuICAgIDcsLTYsIDEwLDEyLyptZWFuICgwLjA2NTM4NDYpLCBjb3JyZWxhdGlvbiAoMC40NDU2MjMpKi8sXG4gICAgLTksLTEzLCAtOCwtOC8qbWVhbiAoMC4wODU4NzQ5KSwgY29ycmVsYXRpb24gKDAuNDQ5Nzg5KSovLFxuICAgIC01LC0xMywgLTUsLTIvKm1lYW4gKDAuMTIyNDAyKSwgY29ycmVsYXRpb24gKDAuNDUwMjAxKSovLFxuICAgIDgsLTgsIDksLTEzLyptZWFuICgwLjEyNTQxNiksIGNvcnJlbGF0aW9uICgwLjQ1MzIyNCkqLyxcbiAgICAtOSwtMTEsIC05LDAvKm1lYW4gKDAuMTMwMTI4KSwgY29ycmVsYXRpb24gKDAuNDU4NzI0KSovLFxuICAgIDEsLTgsIDEsLTIvKm1lYW4gKDAuMTMyNDY3KSwgY29ycmVsYXRpb24gKDAuNDQwMTMzKSovLFxuICAgIDcsLTQsIDksMS8qbWVhbiAoMC4xMzI2OTIpLCBjb3JyZWxhdGlvbiAoMC40NTQpKi8sXG4gICAgLTIsMSwgLTEsLTQvKm1lYW4gKDAuMTM1Njk1KSwgY29ycmVsYXRpb24gKDAuNDU1NzM5KSovLFxuICAgIDExLC02LCAxMiwtMTEvKm1lYW4gKDAuMTQyOTA0KSwgY29ycmVsYXRpb24gKDAuNDQ2MTE0KSovLFxuICAgIC0xMiwtOSwgLTYsNC8qbWVhbiAoMC4xNDYxNjUpLCBjb3JyZWxhdGlvbiAoMC40NTE0NzMpKi8sXG4gICAgMyw3LCA3LDEyLyptZWFuICgwLjE0NzYyNyksIGNvcnJlbGF0aW9uICgwLjQ1NjY0MykqLyxcbiAgICA1LDUsIDEwLDgvKm1lYW4gKDAuMTUyOTAxKSwgY29ycmVsYXRpb24gKDAuNDU1MDM2KSovLFxuICAgIDAsLTQsIDIsOC8qbWVhbiAoMC4xNjcwODMpLCBjb3JyZWxhdGlvbiAoMC40NTkzMTUpKi8sXG4gICAgLTksMTIsIC01LC0xMy8qbWVhbiAoMC4xNzMyMzQpLCBjb3JyZWxhdGlvbiAoMC40NTQ3MDYpKi8sXG4gICAgMCw3LCAyLDEyLyptZWFuICgwLjE4MzEyKSwgY29ycmVsYXRpb24gKDAuNDMzODU1KSovLFxuICAgIC0xLDIsIDEsNy8qbWVhbiAoMC4xODU1MDQpLCBjb3JyZWxhdGlvbiAoMC40NDM4MzgpKi8sXG4gICAgNSwxMSwgNywtOS8qbWVhbiAoMC4xODU3MDYpLCBjb3JyZWxhdGlvbiAoMC40NTExMjMpKi8sXG4gICAgMyw1LCA2LC04LyptZWFuICgwLjE4ODk2OCksIGNvcnJlbGF0aW9uICgwLjQ1NTgwOCkqLyxcbiAgICAtMTMsLTQsIC04LDkvKm1lYW4gKDAuMTkxNjY3KSwgY29ycmVsYXRpb24gKDAuNDU5MTI4KSovLFxuICAgIC01LDksIC0zLC0zLyptZWFuICgwLjE5MzE5NiksIGNvcnJlbGF0aW9uICgwLjQ1ODM2NCkqLyxcbiAgICAtNCwtNywgLTMsLTEyLyptZWFuICgwLjE5NjUzNiksIGNvcnJlbGF0aW9uICgwLjQ1NTc4MikqLyxcbiAgICA2LDUsIDgsMC8qbWVhbiAoMC4xOTcyKSwgY29ycmVsYXRpb24gKDAuNDUwNDgxKSovLFxuICAgIC03LDYsIC02LDEyLyptZWFuICgwLjE5OTQzOCksIGNvcnJlbGF0aW9uICgwLjQ1ODE1NikqLyxcbiAgICAtMTMsNiwgLTUsLTIvKm1lYW4gKDAuMjExMjI0KSwgY29ycmVsYXRpb24gKDAuNDQ5NTQ4KSovLFxuICAgIDEsLTEwLCAzLDEwLyptZWFuICgwLjIxMTcxOCksIGNvcnJlbGF0aW9uICgwLjQ0MDYwNikqLyxcbiAgICA0LDEsIDgsLTQvKm1lYW4gKDAuMjEzMDM0KSwgY29ycmVsYXRpb24gKDAuNDQzMTc3KSovLFxuICAgIC0yLC0yLCAyLC0xMy8qbWVhbiAoMC4yMzQzMzQpLCBjb3JyZWxhdGlvbiAoMC40NTUzMDQpKi8sXG4gICAgMiwtMTIsIDEyLDEyLyptZWFuICgwLjIzNTY4NCksIGNvcnJlbGF0aW9uICgwLjQ0MzQzNikqLyxcbiAgICAtMiwtMTMsIDAsLTYvKm1lYW4gKDAuMjM3Njc0KSwgY29ycmVsYXRpb24gKDAuNDUyNTI1KSovLFxuICAgIDQsMSwgOSwzLyptZWFuICgwLjIzOTYyKSwgY29ycmVsYXRpb24gKDAuNDQ0ODI0KSovLFxuICAgIC02LC0xMCwgLTMsLTUvKm1lYW4gKDAuMjQ4NDU5KSwgY29ycmVsYXRpb24gKDAuNDM5NjIxKSovLFxuICAgIC0zLC0xMywgLTEsMS8qbWVhbiAoMC4yNDk1MDUpLCBjb3JyZWxhdGlvbiAoMC40NTY2NjYpKi8sXG4gICAgNyw1LCAxMiwtMTEvKm1lYW4gKDAuMDAxMTkyMDgpLCBjb3JyZWxhdGlvbiAoMC40OTU0NjYpKi8sXG4gICAgNCwtMiwgNSwtNy8qbWVhbiAoMC4wMDM3MjI0NSksIGNvcnJlbGF0aW9uICgwLjQ4NDIxNCkqLyxcbiAgICAtMTMsOSwgLTksLTUvKm1lYW4gKDAuMDA3NDExMTYpLCBjb3JyZWxhdGlvbiAoMC40OTk4NTQpKi8sXG4gICAgNywxLCA4LDYvKm1lYW4gKDAuMDIwODk1MiksIGNvcnJlbGF0aW9uICgwLjQ5OTc3MykqLyxcbiAgICA3LC04LCA3LDYvKm1lYW4gKDAuMDIyMDA4NSksIGNvcnJlbGF0aW9uICgwLjUwMTYwOSkqLyxcbiAgICAtNywtNCwgLTcsMS8qbWVhbiAoMC4wMjMzODA2KSwgY29ycmVsYXRpb24gKDAuNDk2NTY4KSovLFxuICAgIC04LDExLCAtNywtOC8qbWVhbiAoMC4wMjM2NTA1KSwgY29ycmVsYXRpb24gKDAuNDg5NzE5KSovLFxuICAgIC0xMyw2LCAtMTIsLTgvKm1lYW4gKDAuMDI2ODc4MSksIGNvcnJlbGF0aW9uICgwLjUwMzQ4NykqLyxcbiAgICAyLDQsIDMsOS8qbWVhbiAoMC4wMzIzMzI0KSwgY29ycmVsYXRpb24gKDAuNTAxOTM4KSovLFxuICAgIDEwLC01LCAxMiwzLyptZWFuICgwLjAzOTkyMzUpLCBjb3JyZWxhdGlvbiAoMC40OTQwMjkpKi8sXG4gICAgLTYsLTUsIC02LDcvKm1lYW4gKDAuMDQyMDE1MyksIGNvcnJlbGF0aW9uICgwLjQ4NjU3OSkqLyxcbiAgICA4LC0zLCA5LC04LyptZWFuICgwLjA1NDgwMjEpLCBjb3JyZWxhdGlvbiAoMC40ODQyMzcpKi8sXG4gICAgMiwtMTIsIDIsOC8qbWVhbiAoMC4wNjE2NjIyKSwgY29ycmVsYXRpb24gKDAuNDk2NjQyKSovLFxuICAgIC0xMSwtMiwgLTEwLDMvKm1lYW4gKDAuMDYyNzc1NSksIGNvcnJlbGF0aW9uICgwLjQ5ODU2MykqLyxcbiAgICAtMTIsLTEzLCAtNywtOS8qbWVhbiAoMC4wODI5NjIyKSwgY29ycmVsYXRpb24gKDAuNDk1NDkxKSovLFxuICAgIC0xMSwwLCAtMTAsLTUvKm1lYW4gKDAuMDg0MzM0MiksIGNvcnJlbGF0aW9uICgwLjQ4NzE0NikqLyxcbiAgICA1LC0zLCAxMSw4LyptZWFuICgwLjA5Mjk5MzcpLCBjb3JyZWxhdGlvbiAoMC41MDIzMTUpKi8sXG4gICAgLTIsLTEzLCAtMSwxMi8qbWVhbiAoMC4xMTMzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk0MSkqLyxcbiAgICAtMSwtOCwgMCw5LyptZWFuICgwLjEzMjExOSksIGNvcnJlbGF0aW9uICgwLjQ2NzI2OCkqLyxcbiAgICAtMTMsLTExLCAtMTIsLTUvKm1lYW4gKDAuMTM2MjY5KSwgY29ycmVsYXRpb24gKDAuNDk4NzcxKSovLFxuICAgIC0xMCwtMiwgLTEwLDExLyptZWFuICgwLjE0MjE3MyksIGNvcnJlbGF0aW9uICgwLjQ5ODcxNCkqLyxcbiAgICAtMyw5LCAtMiwtMTMvKm1lYW4gKDAuMTQ0MTQxKSwgY29ycmVsYXRpb24gKDAuNDkxOTczKSovLFxuICAgIDIsLTMsIDMsMi8qbWVhbiAoMC4xNDg5MiksIGNvcnJlbGF0aW9uICgwLjUwMDc4MikqLyxcbiAgICAtOSwtMTMsIC00LDAvKm1lYW4gKDAuMTUwMzcxKSwgY29ycmVsYXRpb24gKDAuNDk4MjExKSovLFxuICAgIC00LDYsIC0zLC0xMC8qbWVhbiAoMC4xNTIxNTkpLCBjb3JyZWxhdGlvbiAoMC40OTU1NDcpKi8sXG4gICAgLTQsMTIsIC0yLC03LyptZWFuICgwLjE1NjE1MiksIGNvcnJlbGF0aW9uICgwLjQ5NjkyNSkqLyxcbiAgICAtNiwtMTEsIC00LDkvKm1lYW4gKDAuMTU3NDkpLCBjb3JyZWxhdGlvbiAoMC40OTkyMjIpKi8sXG4gICAgNiwtMywgNiwxMS8qbWVhbiAoMC4xNTkyMTEpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjEpKi8sXG4gICAgLTEzLDExLCAtNSw1LyptZWFuICgwLjE2MjQyNyksIGNvcnJlbGF0aW9uICgwLjUwMTkwNykqLyxcbiAgICAxMSwxMSwgMTIsNi8qbWVhbiAoMC4xNjY1MiksIGNvcnJlbGF0aW9uICgwLjQ5NzYzMikqLyxcbiAgICA3LC01LCAxMiwtMi8qbWVhbiAoMC4xNjkxNDEpLCBjb3JyZWxhdGlvbiAoMC40ODQ0NzQpKi8sXG4gICAgLTEsMTIsIDAsNy8qbWVhbiAoMC4xNjk0NTYpLCBjb3JyZWxhdGlvbiAoMC40OTUzMzkpKi8sXG4gICAgLTQsLTgsIC0zLC0yLyptZWFuICgwLjE3MTQ1NyksIGNvcnJlbGF0aW9uICgwLjQ4NzI1MSkqLyxcbiAgICAtNywxLCAtNiw3LyptZWFuICgwLjE3NSksIGNvcnJlbGF0aW9uICgwLjUwMDAyNCkqLyxcbiAgICAtMTMsLTEyLCAtOCwtMTMvKm1lYW4gKDAuMTc1ODY2KSwgY29ycmVsYXRpb24gKDAuNDk3NTIzKSovLFxuICAgIC03LC0yLCAtNiwtOC8qbWVhbiAoMC4xNzgyNzMpLCBjb3JyZWxhdGlvbiAoMC41MDE4NTQpKi8sXG4gICAgLTgsNSwgLTYsLTkvKm1lYW4gKDAuMTgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDk0ODg4KSovLFxuICAgIC01LC0xLCAtNCw1LyptZWFuICgwLjE5MDIyNyksIGNvcnJlbGF0aW9uICgwLjQ4MjU1NykqLyxcbiAgICAtMTMsNywgLTgsMTAvKm1lYW4gKDAuMTk2NzM5KSwgY29ycmVsYXRpb24gKDAuNDk2NTAzKSovLFxuICAgIDEsNSwgNSwtMTMvKm1lYW4gKDAuMTk5NzMpLCBjb3JyZWxhdGlvbiAoMC40OTk3NTkpKi8sXG4gICAgMSwwLCAxMCwtMTMvKm1lYW4gKDAuMjA0NDY1KSwgY29ycmVsYXRpb24gKDAuNDk4NzMpKi8sXG4gICAgOSwxMiwgMTAsLTEvKm1lYW4gKDAuMjA5MzM0KSwgY29ycmVsYXRpb24gKDAuNDkwNjMpKi8sXG4gICAgNSwtOCwgMTAsLTkvKm1lYW4gKDAuMjExMTM0KSwgY29ycmVsYXRpb24gKDAuNTAzMDExKSovLFxuICAgIC0xLDExLCAxLC0xMy8qbWVhbiAoMC4yMTIpLCBjb3JyZWxhdGlvbiAoMC40OTk0MTQpKi8sXG4gICAgLTksLTMsIC02LDIvKm1lYW4gKDAuMjEyMTY4KSwgY29ycmVsYXRpb24gKDAuNDgwNzM5KSovLFxuICAgIC0xLC0xMCwgMSwxMi8qbWVhbiAoMC4yMTI3MzEpLCBjb3JyZWxhdGlvbiAoMC41MDI1MjMpKi8sXG4gICAgLTEzLDEsIC04LC0xMC8qbWVhbiAoMC4yMTMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTc4NikqLyxcbiAgICA4LC0xMSwgMTAsLTYvKm1lYW4gKDAuMjE0MTU5KSwgY29ycmVsYXRpb24gKDAuNDg4MjQ2KSovLFxuICAgIDIsLTEzLCAzLC02LyptZWFuICgwLjIxNjk5MyksIGNvcnJlbGF0aW9uICgwLjUwMjg3KSovLFxuICAgIDcsLTEzLCAxMiwtOS8qbWVhbiAoMC4yMjM2MzkpLCBjb3JyZWxhdGlvbiAoMC40NzA1MDIpKi8sXG4gICAgLTEwLC0xMCwgLTUsLTcvKm1lYW4gKDAuMjI0MDg5KSwgY29ycmVsYXRpb24gKDAuNTAwODUyKSovLFxuICAgIC0xMCwtOCwgLTgsLTEzLyptZWFuICgwLjIyODY2NiksIGNvcnJlbGF0aW9uICgwLjUwMjYyOSkqLyxcbiAgICA0LC02LCA4LDUvKm1lYW4gKDAuMjI5MDYpLCBjb3JyZWxhdGlvbiAoMC40OTgzMDUpKi8sXG4gICAgMywxMiwgOCwtMTMvKm1lYW4gKDAuMjMzMzc4KSwgY29ycmVsYXRpb24gKDAuNTAzODI1KSovLFxuICAgIC00LDIsIC0zLC0zLyptZWFuICgwLjIzNDMyMyksIGNvcnJlbGF0aW9uICgwLjQ3NjY5MikqLyxcbiAgICA1LC0xMywgMTAsLTEyLyptZWFuICgwLjIzNjM5MiksIGNvcnJlbGF0aW9uICgwLjQ3NTQ2MikqLyxcbiAgICA0LC0xMywgNSwtMS8qbWVhbiAoMC4yMzY4NDIpLCBjb3JyZWxhdGlvbiAoMC41MDQxMzIpKi8sXG4gICAgLTksOSwgLTQsMy8qbWVhbiAoMC4yMzY5NzcpLCBjb3JyZWxhdGlvbiAoMC40OTc3MzkpKi8sXG4gICAgMCwzLCAzLC05LyptZWFuICgwLjI0MzE0KSwgY29ycmVsYXRpb24gKDAuNDk5Mzk4KSovLFxuICAgIC0xMiwxLCAtNiwxLyptZWFuICgwLjI0MzI5NyksIGNvcnJlbGF0aW9uICgwLjQ4OTQ0NykqLyxcbiAgICAzLDIsIDQsLTgvKm1lYW4gKDAuMDAxNTUxOTYpLCBjb3JyZWxhdGlvbiAoMC41NTM0OTYpKi8sXG4gICAgLTEwLC0xMCwgLTEwLDkvKm1lYW4gKDAuMDAyMzk1NDEpLCBjb3JyZWxhdGlvbiAoMC41NDI5NykqLyxcbiAgICA4LC0xMywgMTIsMTIvKm1lYW4gKDAuMDAzNDQxMyksIGNvcnJlbGF0aW9uICgwLjU0NDM2MSkqLyxcbiAgICAtOCwtMTIsIC02LC01LyptZWFuICgwLjAwMzU2NSksIGNvcnJlbGF0aW9uICgwLjU1MTIyNSkqLyxcbiAgICAyLDIsIDMsNy8qbWVhbiAoMC4wMDgzNTU4MyksIGNvcnJlbGF0aW9uICgwLjU1Mjg1KSovLFxuICAgIDEwLDYsIDExLC04LyptZWFuICgwLjAwODg1MDY1KSwgY29ycmVsYXRpb24gKDAuNTQwOTEzKSovLFxuICAgIDYsOCwgOCwtMTIvKm1lYW4gKDAuMDEwMTU1MiksIGNvcnJlbGF0aW9uICgwLjU1MTA4NSkqLyxcbiAgICAtNywxMCwgLTYsNS8qbWVhbiAoMC4wMTAyMjI3KSwgY29ycmVsYXRpb24gKDAuNTMzNjM1KSovLFxuICAgIC0zLC05LCAtMyw5LyptZWFuICgwLjAxMTAyMTEpLCBjb3JyZWxhdGlvbiAoMC41NDMxMjEpKi8sXG4gICAgLTEsLTEzLCAtMSw1LyptZWFuICgwLjAxMTM0NzMpLCBjb3JyZWxhdGlvbiAoMC41NTAxNzMpKi8sXG4gICAgLTMsLTcsIC0zLDQvKm1lYW4gKDAuMDE0MDkxMyksIGNvcnJlbGF0aW9uICgwLjU1NDc3NCkqLyxcbiAgICAtOCwtMiwgLTgsMy8qbWVhbiAoMC4wMTcwNDkpLCBjb3JyZWxhdGlvbiAoMC41NTQ2MSkqLyxcbiAgICA0LDIsIDEyLDEyLyptZWFuICgwLjAxNzc4KSwgY29ycmVsYXRpb24gKDAuNTQ2OTIxKSovLFxuICAgIDIsLTUsIDMsMTEvKm1lYW4gKDAuMDIyNDAyMiksIGNvcnJlbGF0aW9uICgwLjU0OTY2NykqLyxcbiAgICA2LC05LCAxMSwtMTMvKm1lYW4gKDAuMDI5MTYxKSwgY29ycmVsYXRpb24gKDAuNTQ2Mjk1KSovLFxuICAgIDMsLTEsIDcsMTIvKm1lYW4gKDAuMDMwMzA4MSksIGNvcnJlbGF0aW9uICgwLjU0ODU5OSkqLyxcbiAgICAxMSwtMSwgMTIsNC8qbWVhbiAoMC4wMzU1MTUxKSwgY29ycmVsYXRpb24gKDAuNTIzOTQzKSovLFxuICAgIC0zLDAsIC0zLDYvKm1lYW4gKDAuMDQxNzkwNCksIGNvcnJlbGF0aW9uICgwLjU0MzM5NSkqLyxcbiAgICA0LC0xMSwgNCwxMi8qbWVhbiAoMC4wNDg3MjkyKSwgY29ycmVsYXRpb24gKDAuNTQyODE4KSovLFxuICAgIDIsLTQsIDIsMS8qbWVhbiAoMC4wNTc1MTI0KSwgY29ycmVsYXRpb24gKDAuNTU0ODg4KSovLFxuICAgIC0xMCwtNiwgLTgsMS8qbWVhbiAoMC4wNTk0MjQyKSwgY29ycmVsYXRpb24gKDAuNTQ0MDI2KSovLFxuICAgIC0xMyw3LCAtMTEsMS8qbWVhbiAoMC4wNTk3MzkxKSwgY29ycmVsYXRpb24gKDAuNTUwNTI0KSovLFxuICAgIC0xMywxMiwgLTExLC0xMy8qbWVhbiAoMC4wNjA4OTc0KSwgY29ycmVsYXRpb24gKDAuNTUzODMpKi8sXG4gICAgNiwwLCAxMSwtMTMvKm1lYW4gKDAuMDY1MTI2KSwgY29ycmVsYXRpb24gKDAuNTUyMDA2KSovLFxuICAgIDAsLTEsIDEsNC8qbWVhbiAoMC4wNzQyMjQpLCBjb3JyZWxhdGlvbiAoMC41NDYzNzIpKi8sXG4gICAgLTEzLDMsIC05LC0yLyptZWFuICgwLjA4MDg1OTIpLCBjb3JyZWxhdGlvbiAoMC41NTQ4NzUpKi8sXG4gICAgLTksOCwgLTYsLTMvKm1lYW4gKDAuMDg4MzM3OCksIGNvcnJlbGF0aW9uICgwLjU1MTE3OCkqLyxcbiAgICAtMTMsLTYsIC04LC0yLyptZWFuICgwLjA5MDEwMzUpLCBjb3JyZWxhdGlvbiAoMC41NDg0NDYpKi8sXG4gICAgNSwtOSwgOCwxMC8qbWVhbiAoMC4wOTQ5ODQzKSwgY29ycmVsYXRpb24gKDAuNTU0Njk0KSovLFxuICAgIDIsNywgMywtOS8qbWVhbiAoMC4wOTk0MTUyKSwgY29ycmVsYXRpb24gKDAuNTUwOTc5KSovLFxuICAgIC0xLC02LCAtMSwtMS8qbWVhbiAoMC4xMDA0NSksIGNvcnJlbGF0aW9uICgwLjU1MjcxNCkqLyxcbiAgICA5LDUsIDExLC0yLyptZWFuICgwLjEwMDY4NiksIGNvcnJlbGF0aW9uICgwLjU1MjU5NCkqLyxcbiAgICAxMSwtMywgMTIsLTgvKm1lYW4gKDAuMTAxMDkxKSwgY29ycmVsYXRpb24gKDAuNTMyMzk0KSovLFxuICAgIDMsMCwgMyw1LyptZWFuICgwLjEwMTE0NyksIGNvcnJlbGF0aW9uICgwLjUyNTU3NikqLyxcbiAgICAtMSw0LCAwLDEwLyptZWFuICgwLjEwNTI2MyksIGNvcnJlbGF0aW9uICgwLjUzMTQ5OCkqLyxcbiAgICAzLC02LCA0LDUvKm1lYW4gKDAuMTEwNzg1KSwgY29ycmVsYXRpb24gKDAuNTQwNDkxKSovLFxuICAgIC0xMywwLCAtMTAsNS8qbWVhbiAoMC4xMTI3OTgpLCBjb3JyZWxhdGlvbiAoMC41MzY1ODIpKi8sXG4gICAgNSw4LCAxMiwxMS8qbWVhbiAoMC4xMTQxODEpLCBjb3JyZWxhdGlvbiAoMC41NTU3OTMpKi8sXG4gICAgOCw5LCA5LC02LyptZWFuICgwLjExNzQzMSksIGNvcnJlbGF0aW9uICgwLjU1Mzc2MykqLyxcbiAgICA3LC00LCA4LC0xMi8qbWVhbiAoMC4xMTg1MjIpLCBjb3JyZWxhdGlvbiAoMC41NTM0NTIpKi8sXG4gICAgLTEwLDQsIC0xMCw5LyptZWFuICgwLjEyMDk0KSwgY29ycmVsYXRpb24gKDAuNTU0Nzg1KSovLFxuICAgIDcsMywgMTIsNC8qbWVhbiAoMC4xMjI1ODIpLCBjb3JyZWxhdGlvbiAoMC41NTU4MjUpKi8sXG4gICAgOSwtNywgMTAsLTIvKm1lYW4gKDAuMTI0OTc4KSwgY29ycmVsYXRpb24gKDAuNTQ5ODQ2KSovLFxuICAgIDcsMCwgMTIsLTIvKm1lYW4gKDAuMTI3MDAyKSwgY29ycmVsYXRpb24gKDAuNTM3NDUyKSovLFxuICAgIC0xLC02LCAwLC0xMS8qbWVhbiAoMC4xMjcxNDgpLCBjb3JyZWxhdGlvbiAoMC41NDc0MDEpKi9cbl07IiwiZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjOiBhbnksIGRzdDogYW55LCBhbmdsZTogbnVtYmVyLCBweDogbnVtYmVyLCBweTogbnVtYmVyLCBwc2l6ZTogbnVtYmVyLCBIOiB7IGRhdGE6IGFueVtdOyB9LCBpbWdwcm9jOiBhbnkpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3Byb2Mud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzJ1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdCdcbmltcG9ydCB7IGtleXBvaW50X3QgfSBmcm9tICcuLi9rZXlwb2ludF90L2tleXBvaW50X3QnXG5leHBvcnQgY2xhc3MgeWFwZSB7XG4gICAgcHJpdmF0ZSBsZXZlbF90YWJsZXM6IGxldl90YWJsZV90W107XG4gICAgcHJpdmF0ZSB0YXU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBweXJhbWlkX2xldmVsczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgcHlyYW1pZF9sZXZlbHMgPT09IFwidW5kZWZpbmVkXCIpIHsgcHlyYW1pZF9sZXZlbHMgPSAxOyB9XG4gICAgICAgIHZhciBpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1pbihyYWRpdXMsIDcpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heChyYWRpdXMsIDMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHlyYW1pZF9sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF90YWJsZXNbaV0gPSBuZXcgbGV2X3RhYmxlX3Qod2lkdGggPj4gaSwgaGVpZ2h0ID4+IGksIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3Qoc3JjOiBtYXRyaXhfdCwgcG9pbnRzOiBrZXlwb2ludF90W10sIGJvcmRlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHN0ZXA6IG51bWJlciwgZGlyczogSW50MzJBcnJheSwgUjogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciB4LCB5O1xuXG4gICAgeCA9IFI7XG4gICAgZm9yICh5ID0gMDsgeSA8IHg7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgtLTsgeCA8IHkgJiYgeCA+PSAwOyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IC14IDwgeTsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeS0tOyB5ID49IDA7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHkgPiB4OyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeCsrOyB4IDw9IDA7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHggPCAteTsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHkrKzsgeSA8IDA7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cblxuICAgIGRpcnNbaV0gPSBkaXJzWzBdO1xuICAgIGRpcnNbaSArIDFdID0gZGlyc1sxXTtcbiAgICByZXR1cm4gaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkX2NoZWNrKFNiOiBJbnQzMkFycmF5IHwgbnVtYmVyW10sIG9mZjogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICB2YXIgbiA9IDA7XG4gICAgaWYgKFNiW29mZiArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCAtIDFdICE9IDApIG4rKztcblxuICAgIHJldHVybiBuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNfbG9jYWxfbWF4aW1hKHA6IEludDMyQXJyYXksIG9mZjogbnVtYmVyLCB2OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgbmVpZ2hib3Job29kOiBudW1iZXIpIHtcbiAgICB2YXIgeCwgeTtcblxuICAgIGlmICh2ID4gMCkge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdID4gdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdIDwgdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtX29uZV9wb2ludChJOiB7IFt4OiBzdHJpbmddOiBudW1iZXI7IH0sIHg6IG51bWJlciwgU2NvcmVzOiBJbnQzMkFycmF5LCBJbTogbnVtYmVyLCBJcDogbnVtYmVyLCBkaXJzOiBhbnlbXSB8IEludDMyQXJyYXksIG9wcG9zaXRlOiBudW1iZXIsIGRpcnNfbmI6IG51bWJlcikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgcHVibGljIGRpcnM6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGRpcnNfY291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2NvcmVzOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih3OiBudW1iZXIsIGg6IG51bWJlciwgcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlycyA9IG5ldyBJbnQzMkFycmF5KDEwMjQpO1xuICAgICAgICB0aGlzLmRpcnNfY291bnQgPSBwcmVjb21wdXRlX2RpcmVjdGlvbnModywgdGhpcy5kaXJzLCByKSB8IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzID0gbmV3IEludDMyQXJyYXkodyAqIGgpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHIgfCAwO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjOiBhbnlbXSwgZHN0OiBhbnlbXSwgdzogbnVtYmVyLCBoOiBhbnksIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgc3g6IG51bWJlciwgc3k6IG51bWJlciwgZXg6IG51bWJlciwgZXk6IG51bWJlcikge1xuICAgIHZhciB5ID0gMCwgeCA9IDAsIHlyb3cgPSAoc3kgKiB3ICsgc3gpIHwgMCwgcm93ID0geXJvdztcblxuICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgeXJvdyArPSB3LCByb3cgPSB5cm93KSB7XG4gICAgICAgIGZvciAoeCA9IHN4OyB4IDwgZXg7ICsreCwgKytyb3cpIHtcbiAgICAgICAgICAgIGRzdFtyb3ddID0gLTQgKiBzcmNbcm93XSArIHNyY1tyb3cgKyBEeHhdICsgc3JjW3JvdyAtIER4eF0gKyBzcmNbcm93ICsgRHl5XSArIHNyY1tyb3cgLSBEeXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JjOiBudW1iZXJbXSwgb2ZmOiBudW1iZXIsIHRyOiBudW1iZXIsIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgRHh5OiBudW1iZXIsIER5eDogbnVtYmVyKSB7XG4gICAgdmFyIEl4eCA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHh4XSArIHNyY1tvZmYgLSBEeHhdO1xuICAgIHZhciBJeXkgPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER5eV0gKyBzcmNbb2ZmIC0gRHl5XTtcbiAgICB2YXIgSXh5ID0gc3JjW29mZiArIER4eV0gKyBzcmNbb2ZmIC0gRHh5XSAtIHNyY1tvZmYgKyBEeXhdIC0gc3JjW29mZiAtIER5eF07XG4gICAgdmFyIHNxcnRfZGVsdGEgPSAoTWF0aC5zcXJ0KCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkpKSB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5hYnModHIgLSBzcXJ0X2RlbHRhKSwgTWF0aC5hYnMoLSh0ciArIHNxcnRfZGVsdGEpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJVOEMxX3QiLCJVOEMzX3QiLCJVOEM0X3QiLCJGMzJDMV90IiwiRjMyQzJfdCIsIlMzMkMxX3QiLCJTMzJDMl90IiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsInR5cGUiLCJfY29udm9sX3U4IiwiYnVmIiwic3JjX2QiLCJkc3RfZCIsInciLCJoIiwiZmlsdGVyIiwia2VybmVsX3NpemUiLCJoYWxmX2tlcm5lbCIsImoiLCJrIiwic3AiLCJkcCIsInN1bSIsInN1bTEiLCJzdW0yIiwic3VtMyIsImYwIiwiZmsiLCJ3MiIsInczIiwidzQiLCJNYXRoIiwibWluIiwiX2NvbnZvbCIsIl9yZXNhbXBsZV91OCIsInNyYyIsImRzdCIsIm53IiwibmgiLCJ4b2ZzX2NvdW50IiwiY2giLCJjaGFubmVsIiwiY29scyIsInJvd3MiLCJkYXRhIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4Iiwic3kiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImEiLCJiIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJidWZfbm9kZSIsImdldF9idWZmZXIiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImkzMiIsInhvZnMiLCJtYXgiLCJwdXRfYnVmZmVyIiwiX3Jlc2FtcGxlIiwic2NhbGUiLCJmMzIiLCJhYnMiLCJzd2FwIiwiaHlwb3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJrZXlwb2ludF90IiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwieWFwZSIsImNvbXB1dGVfbGFwbGFjaWFuIiwiaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUiLCJyYW5zYWNfcGFyYW1zX3QiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwieCIsImZyb20iLCJ0byIsImNvdW50IiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJ5Iiwic3FydCIsIlNRUlQyIiwicG9pbnRzIiwiZHgxIiwiZHkxIiwiZHgyIiwiZHkyIiwiYWZmaW5lMmQiLCJtb2RlbCIsIm1kIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImxpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYV9idWZmIiwiYl9idWZmIiwiYV9tdCIsImJfbXQiLCJhZCIsImJkIiwibXVsdGlwbHlfQXRBIiwibXVsdGlwbHlfQXRCIiwibHVfc29sdmUiLCJpbnZlcnRfM3gzIiwibXVsdGlwbHlfM3gzIiwiaG9tb2dyYXBoeTJkIiwibUx0TCIsIkV2ZWMiLCJMdEwiLCJldmQiLCJYIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJlcnIiLCJ3dyIsIm0iLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHlyYW1pZF90IiwibGV2ZWxzIiwiQXJyYXkiLCJfaW1ncHJvYyIsImltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiLCJjb2RlIiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInRtcF9idWZmIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJkYXRhX3U4IiwiaG9sZCIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1hdGgiLCJpc191OCIsImJ1Zl9zeiIsImZpbHRfbm9kZSIsImdldF9nYXVzc2lhbl9rZXJuZWwiLCJpbWciLCJyaG9fcmVzIiwidGhldGFfcmVzIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiZHN0ZXAiLCJ4MSIsImMiLCJkIiwiZSIsImYiLCJzcm93MCIsInNyb3cxIiwic3JvdzIiLCJkcm93IiwidHJvdzAiLCJ0cm93MSIsImd4Z3kiLCJidWYwX25vZGUiLCJidWYxX25vZGUiLCJkc3Rfc3VtIiwiZHN0X3Nxc3VtIiwiZHN0X3RpbHRlZCIsIncwIiwiaDAiLCJ3MSIsInMiLCJzMiIsInAiLCJwdXAiLCJ2IiwicHJldiIsImhpc3QwIiwibm9ybSIsImhpc3QwX25vZGUiLCJsb3dfdGhyZXNoIiwiaGlnaF90aHJlc2giLCJncmFkIiwiX2dyYWQiLCJzdXBwcmVzcyIsInRnMjJ4IiwidGc2N3giLCJkeGR5X25vZGUiLCJtYXBfbm9kZSIsInN0YWNrX25vZGUiLCJtYXAiLCJzdGFjayIsImR4ZHkiLCJkeGR5X20iLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsInNvYmVsX2Rlcml2YXRpdmVzIiwiTnVtYmVyIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInhzMCIsInlzMCIsIndzIiwic2MiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJnIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJ0Iiwic2lnbWFfeCIsInNjYWxlXzJ4Iiwia2Vybl9ub2RlIiwiX2tlcm5lbCIsImV4cCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQxIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJwdHIiLCJwdHIyIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90Iiwic3dhcF9jbnQiLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiQSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsImVwcyIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJzZCIsImdhbW1hIiwiZGVsdGEiLCJzZWVkIiwidmFsMCIsImFzdW0iLCJXX2J1ZmYiLCJmNjQiLCJCIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJ3X210Iiwidl9tdCIsInRyYW5zcG9zZSIsIkphY29iaVNWREltcGwiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwib3JiIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImNvcm5lcnMiLCJkZXNjcmlwdG9ycyIsIkRFU0NSX1NJWkUiLCJhbmdsZSIsInBhdGNoX2QiLCJwYXRjaF9vZmYiLCJwYXR0IiwiZGVzY3JfZCIsImRlc2NyX29mZiIsInlhcGUwNiIsImxhcGxhY2lhbl90aHJlc2hvbGQiLCJtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkIiwiYm9yZGVyIiwic3JkX2QiLCJEeHgiLCJEeXkiLCJEeHkiLCJEeXgiLCJsYXBfYnVmIiwibGFwbGFjaWFuIiwibHYiLCJyb3d4IiwibWluX2VpZ2VuX3ZhbHVlIiwicHQiLCJudW1iZXJfb2ZfcG9pbnRzIiwibGFwX3RocmVzaCIsImVpZ2VuX3RocmVzaCIsImV4IiwiZXkiLCJzY29yZSIsIm1vdGlvbl9lc3RpbWF0b3IiLCJuZWVkX2NudCIsIm1heF9jbnQiLCJmcm9tX3N1YiIsInRvX3N1YiIsIm1heF90cnkiLCJpbmRpY2VzIiwic3NpdGVyIiwiaWR4X2kiLCJvayIsInJhbmRvbSIsImNoZWNrX3N1YnNldCIsInRocmVzaCIsIm1hc2siLCJudW1pbmxpZXJzIiwiZXJyb3IiLCJwYXJhbXMiLCJtYXhfaXRlcnMiLCJtb2RlbF9wb2ludHMiLCJuaXRlcnMiLCJyZXN1bHQiLCJzdWJzZXQwIiwic3Vic2V0MSIsImZvdW5kIiwibWMiLCJtciIsIm1fYnVmZiIsIm1zX2J1ZmYiLCJlcnJfYnVmZiIsIk0iLCJjdXJyX21hc2siLCJpbmxpZXJzX21heCIsIm5tb2RlbHMiLCJydW4iLCJjb3B5X3RvIiwiZ2V0X3N1YnNldCIsImZpbmRfaW5saWVycyIsInVwZGF0ZV9pdGVycyIsIl9tYXRoIiwibWluX21lZGlhbiIsIm9wdGljYWxfZmxvd19sayIsInNjaGFycl9kZXJpdiIsInNjaGFycl9kZXJpdmF0aXZlcyIsInByZXZfcHlyIiwiY3Vycl9weXIiLCJwcmV2X3h5IiwiY3Vycl94eSIsIndpbl9zaXplIiwic3RhdHVzIiwibWluX2VpZ2VuX3RocmVzaG9sZCIsIlVpbnQ4QXJyYXkiLCJoYWxmX3dpbiIsIndpbl9hcmVhIiwid2luX2FyZWEyIiwicHJldl9pbWdzIiwibmV4dF9pbWdzIiwiaW1nX3ByZXYiLCJpbWdfbmV4dCIsImx3IiwibGgiLCJpd2luX25vZGUiLCJkZXJpdl9pd2luX25vZGUiLCJkZXJpdl9sZXZfbm9kZSIsImRlcml2X20iLCJpd2luX2J1ZiIsImRlcml2X2l3aW4iLCJkZXJpdl9sZXYiLCJkc3JjIiwiaXB0ciIsImRpcHRyIiwianB0ciIsImxldl9zYyIsInByZXZfeCIsInByZXZfeSIsIm5leHRfeCIsIm5leHRfeSIsInByZXZfZGVsdGFfeCIsInByZXZfZGVsdGFfeSIsImRlbHRhX3giLCJkZWx0YV95IiwiaXByZXZfeCIsImlwcmV2X3kiLCJpbmV4dF94IiwiaW5leHRfeSIsImxldmVsIiwicHRpZCIsImJyZF90bCIsImJyZF9yIiwiYnJkX2IiLCJiMSIsImIyIiwiV19CSVRTMTQiLCJXX0JJVFM0IiwiV19CSVRTMW01IiwiV19CSVRTMW01MSIsIldfQklUUzE0XyIsIldfQklUUzQxIiwiRkxUX1NDQUxFIiwiaXcwMCIsIml3MDEiLCJpdzEwIiwiaXcxMSIsIml2YWwiLCJpeHZhbCIsIml5dmFsIiwiRCIsIm1pbl9laWciLCJGTFRfRVBTSUxPTiIsIm1heF9sZXZlbCIsImkwIiwiaTEiLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJNMTEiLCJNMTIiLCJNMTMiLCJNMjEiLCJNMjIiLCJNMjMiLCJNMzEiLCJNMzIiLCJNMzMiLCJkYXRhX3QiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJGbG9hdDY0QXJyYXkiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJ3YXJwX2FmZmluZSIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsImlwIiwiaW0iLCJhYnNfc2NvcmUiLCJwcmVjb21wdXRlX2RpcmVjdGlvbnMiLCJTYiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=