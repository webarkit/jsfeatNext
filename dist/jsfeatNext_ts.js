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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNmZWF0TmV4dF90cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFRTyxJQUFNQyxLQUFiO0VBSUk7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFDSSxLQUFLQyxVQUFMO0lBQ0EsS0FBS0MsVUFBTDtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7RUFDSDs7RUFSTDtJQUFBO0lBQUEsT0FTSSxrQkFBU0MsUUFBVCxFQUF3QkMsU0FBeEIsRUFBeUM7TUFDckMsS0FBS0osVUFBTCxHQUFrQixLQUFLQyxVQUFMLEdBQWtCLElBQUlILCtEQUFKLENBQWlCTSxTQUFqQixDQUFwQzs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCLEVBQUVFLENBQWhDLEVBQW1DO1FBQy9CLElBQUlDLElBQUksR0FBRyxJQUFJUiwrREFBSixDQUFpQk0sU0FBakIsQ0FBWDtRQUNBLEtBQUtILFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQk0sSUFBaEIsR0FBdUJELElBQXpDO1FBRUEsS0FBS0osVUFBTDtNQUNIO0lBQ0o7RUFqQkw7SUFBQTtJQUFBLE9Ba0JJLG9CQUFXTSxhQUFYLEVBQWdDO01BRTVCLElBQUlGLElBQUksR0FBRyxLQUFLTixVQUFoQjtNQUNBLEtBQUtBLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQk8sSUFBbEM7TUFDQSxLQUFLTCxVQUFMOztNQUVBLElBQUlNLGFBQWEsR0FBR0YsSUFBSSxDQUFDRyxJQUF6QixFQUErQjtRQUMzQkgsSUFBSSxDQUFDSSxNQUFMLENBQVlGLGFBQVo7TUFDSDs7TUFFRCxPQUFPRixJQUFQO0lBQ0g7RUE3Qkw7SUFBQTtJQUFBLE9BOEJJLG9CQUFXQSxJQUFYLEVBQW9CO01BQ2hCLEtBQUtMLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQk0sSUFBaEIsR0FBdUJELElBQXpDO01BQ0EsS0FBS0osVUFBTDtJQUNIO0VBakNMOztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBTVMsZ0JBQWdCLEdBQUc7RUFFNUJDLE9BQU8sRUFBRSxrQkFGbUI7RUFHNUJDLE9BQU8sRUFBRSxLQUhtQjtFQUk1QkMsSUFBSSxFQUFFLE1BSnNCO0VBSzVCQyxLQUFLLEVBQUUsTUFMcUI7RUFNNUJDLEtBQUssRUFBRSxNQU5xQjtFQU81QkMsS0FBSyxFQUFFLE1BUHFCO0VBUTVCQyxLQUFLLEVBQUUsTUFScUI7RUFTNUJDLElBQUksRUFBRSxJQVRzQjtFQVU1QkMsSUFBSSxFQUFFLElBVnNCO0VBVzVCQyxJQUFJLEVBQUUsSUFYc0I7RUFZNUJDLElBQUksRUFBRSxJQVpzQjtFQWU1QkMsZUFBZSxFQUFFLENBZlc7RUFnQjVCQyxjQUFjLEVBQUUsQ0FoQlk7RUFpQjVCQyxlQUFlLEVBQUUsQ0FqQlc7RUFrQjVCQyxjQUFjLEVBQUUsQ0FsQlk7RUFxQjVCQyxnQkFBZ0IsRUFBRSxJQXJCVTtFQXdCNUJDLE9BQU8sRUFBRSxJQXhCbUI7RUF5QjVCQyxPQUFPLEVBQUUsSUF6Qm1CO0VBNEI1QkMsTUFBTSxFQUFFLFNBQVMsSUE1Qlc7RUE2QjVCQyxNQUFNLEVBQUUsU0FBUyxJQTdCVztFQThCNUJDLE1BQU0sRUFBRSxTQUFTLElBOUJXO0VBZ0M1QkMsT0FBTyxFQUFFLFNBQVMsSUFoQ1U7RUFpQzVCQyxPQUFPLEVBQUUsU0FBUyxJQWpDVTtFQWtDNUJDLE9BQU8sRUFBRSxTQUFTLElBbENVO0VBbUM1QkMsT0FBTyxFQUFFLFNBQVM7QUFuQ1UsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUEsSUFBTUMsU0FBYjtFQUVJO0lBQUE7O0lBQUE7O0lBQ0ksS0FBS0MsZUFBTCxHQUF1QixJQUFJQyxVQUFKLENBQWUsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBQyxDQUFuQixFQUFzQixDQUFDLENBQXZCLEVBQTBCLENBQUMsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBQyxDQUFsQyxFQUFxQyxDQUFDLENBQXRDLEVBQXlDLENBQUMsQ0FBMUMsRUFBNkMsQ0FBQyxDQUE5QyxFQUFpRCxDQUFDLENBQWxELEVBQXFELENBQUMsQ0FBdEQsRUFBeUQsQ0FBQyxDQUExRCxFQUE2RCxDQUE3RCxDQUFmLENBQXZCO0lBQXVHO0VBQzFHOztFQUpMO0lBQUE7SUFBQSxPQU1JLHdCQUFlQyxJQUFmLEVBQTJCO01BQ3ZCLE9BQVFBLElBQUksR0FBRyxNQUFmO0lBQ0g7RUFSTDtJQUFBO0lBQUEsT0FVSSxzQkFBYUEsSUFBYixFQUF5QjtNQUNyQixPQUFRQSxJQUFJLEdBQUcsSUFBZjtJQUNIO0VBWkw7SUFBQTtJQUFBLE9BY0ksNkJBQW9CQSxJQUFwQixFQUFnQztNQUM1QixPQUFPLEtBQUtGLGVBQUwsQ0FBcUIsQ0FBQ0UsSUFBSSxHQUFHLE1BQVIsS0FBbUIsQ0FBeEMsQ0FBUDtJQUNIO0VBaEJMOztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ05NLFNBQVVDLFVBQVYsQ0FBcUJDLEdBQXJCLEVBQXFEQyxLQUFyRCxFQUFzRUMsS0FBdEUsRUFBdUZDLENBQXZGLEVBQWtHQyxDQUFsRyxFQUE2R0MsTUFBN0csRUFBZ0pDLFdBQWhKLEVBQXFLQyxXQUFySyxFQUF3TDtFQUMxTCxJQUFJNUMsQ0FBQyxHQUFHLENBQVI7RUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7RUFBQSxJQUFrQkMsQ0FBQyxHQUFHLENBQXRCO0VBQUEsSUFBeUJDLEVBQUUsR0FBRyxDQUE5QjtFQUFBLElBQWlDQyxFQUFFLEdBQUcsQ0FBdEM7RUFBQSxJQUF5Q0MsR0FBRyxHQUFHLENBQS9DO0VBQUEsSUFBa0RDLElBQUksR0FBRyxDQUF6RDtFQUFBLElBQTREQyxJQUFJLEdBQUcsQ0FBbkU7RUFBQSxJQUFzRUMsSUFBSSxHQUFHLENBQTdFO0VBQUEsSUFBZ0ZDLEVBQUUsR0FBR1gsTUFBTSxDQUFDLENBQUQsQ0FBM0Y7RUFBQSxJQUFnR1ksRUFBRSxHQUFHLENBQXJHO0VBQ0EsSUFBSUMsRUFBRSxHQUFHZixDQUFDLElBQUksQ0FBZDtFQUFBLElBQWlCZ0IsRUFBRSxHQUFHaEIsQ0FBQyxHQUFHLENBQTFCO0VBQUEsSUFBNkJpQixFQUFFLEdBQUdqQixDQUFDLElBQUksQ0FBdkM7O0VBRUEsT0FBT3hDLENBQUMsR0FBR3lDLENBQVgsRUFBYyxFQUFFekMsQ0FBaEIsRUFBbUI7SUFDZmlELEdBQUcsR0FBR1gsS0FBSyxDQUFDUyxFQUFELENBQVg7O0lBQ0EsS0FBS0YsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxXQUFoQixFQUE2QixFQUFFQyxDQUEvQixFQUFrQztNQUM5QlIsR0FBRyxDQUFDUSxDQUFELENBQUgsR0FBU0ksR0FBVDtJQUNIOztJQUNELEtBQUtKLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSUwsQ0FBQyxHQUFHLENBQXJCLEVBQXdCSyxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7TUFDNUJSLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHRCxXQUFMLENBQUgsR0FBdUJOLEtBQUssQ0FBQ1MsRUFBRSxHQUFHRixDQUFOLENBQTVCO01BQ0FSLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHRCxXQUFKLEdBQWtCLENBQW5CLENBQUgsR0FBMkJOLEtBQUssQ0FBQ1MsRUFBRSxHQUFHRixDQUFMLEdBQVMsQ0FBVixDQUFoQztJQUNIOztJQUNELE9BQU9BLENBQUMsR0FBR0wsQ0FBWCxFQUFjLEVBQUVLLENBQWhCLEVBQW1CO01BQ2ZSLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHRCxXQUFMLENBQUgsR0FBdUJOLEtBQUssQ0FBQ1MsRUFBRSxHQUFHRixDQUFOLENBQTVCO0lBQ0g7O0lBQ0RJLEdBQUcsR0FBR1gsS0FBSyxDQUFDUyxFQUFFLEdBQUdQLENBQUwsR0FBUyxDQUFWLENBQVg7O0lBQ0EsS0FBS0ssQ0FBQyxHQUFHTCxDQUFULEVBQVlLLENBQUMsR0FBR0QsV0FBVyxHQUFHSixDQUE5QixFQUFpQyxFQUFFSyxDQUFuQyxFQUFzQztNQUNsQ1IsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUwsQ0FBSCxHQUF1QkssR0FBdkI7SUFDSDs7SUFDRCxLQUFLSixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUlMLENBQUMsR0FBRyxDQUFyQixFQUF3QkssQ0FBQyxJQUFJLENBQTdCLEVBQWdDO01BQzVCSSxHQUFHLEdBQUdaLEdBQUcsQ0FBQ1EsQ0FBRCxDQUFILEdBQVNRLEVBQWYsRUFDSUgsSUFBSSxHQUFHYixHQUFHLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUgsR0FBYVEsRUFEeEIsRUFFSUYsSUFBSSxHQUFHZCxHQUFHLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUgsR0FBYVEsRUFGeEIsRUFHSUQsSUFBSSxHQUFHZixHQUFHLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUgsR0FBYVEsRUFIeEI7O01BSUEsS0FBS1AsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSCxXQUFoQixFQUE2QixFQUFFRyxDQUEvQixFQUFrQztRQUM5QlEsRUFBRSxHQUFHWixNQUFNLENBQUNJLENBQUQsQ0FBWDtRQUNBRyxHQUFHLElBQUlaLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFMLENBQUgsR0FBYVMsRUFBcEI7UUFDQUosSUFBSSxJQUFJYixHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBSCxHQUFpQlMsRUFBekI7UUFDQUgsSUFBSSxJQUFJZCxHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBSCxHQUFpQlMsRUFBekI7UUFDQUYsSUFBSSxJQUFJZixHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBSCxHQUFpQlMsRUFBekI7TUFDSDs7TUFDRGYsS0FBSyxDQUFDUyxFQUFFLEdBQUdILENBQU4sQ0FBTCxHQUFnQmEsSUFBSSxDQUFDQyxHQUFMLENBQVNWLEdBQUcsSUFBSSxDQUFoQixFQUFtQixHQUFuQixDQUFoQjtNQUNBVixLQUFLLENBQUNTLEVBQUUsR0FBR0gsQ0FBTCxHQUFTLENBQVYsQ0FBTCxHQUFvQmEsSUFBSSxDQUFDQyxHQUFMLENBQVNULElBQUksSUFBSSxDQUFqQixFQUFvQixHQUFwQixDQUFwQjtNQUNBWCxLQUFLLENBQUNTLEVBQUUsR0FBR0gsQ0FBTCxHQUFTLENBQVYsQ0FBTCxHQUFvQmEsSUFBSSxDQUFDQyxHQUFMLENBQVNSLElBQUksSUFBSSxDQUFqQixFQUFvQixHQUFwQixDQUFwQjtNQUNBWixLQUFLLENBQUNTLEVBQUUsR0FBR0gsQ0FBTCxHQUFTLENBQVYsQ0FBTCxHQUFvQmEsSUFBSSxDQUFDQyxHQUFMLENBQVNQLElBQUksSUFBSSxDQUFqQixFQUFvQixHQUFwQixDQUFwQjtJQUNIOztJQUNELE9BQU9QLENBQUMsR0FBR0wsQ0FBWCxFQUFjLEVBQUVLLENBQWhCLEVBQW1CO01BQ2ZJLEdBQUcsR0FBR1osR0FBRyxDQUFDUSxDQUFELENBQUgsR0FBU1EsRUFBZjs7TUFDQSxLQUFLUCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILFdBQWhCLEVBQTZCLEVBQUVHLENBQS9CLEVBQWtDO1FBQzlCRyxHQUFHLElBQUlaLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFMLENBQUgsR0FBYUgsTUFBTSxDQUFDSSxDQUFELENBQTFCO01BQ0g7O01BQ0RQLEtBQUssQ0FBQ1MsRUFBRSxHQUFHSCxDQUFOLENBQUwsR0FBZ0JhLElBQUksQ0FBQ0MsR0FBTCxDQUFTVixHQUFHLElBQUksQ0FBaEIsRUFBbUIsR0FBbkIsQ0FBaEI7SUFDSDs7SUFDREYsRUFBRSxJQUFJUCxDQUFOO0lBQ0FRLEVBQUUsSUFBSVIsQ0FBTjtFQUNIOztFQUdELEtBQUt4QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd3QyxDQUFoQixFQUFtQixFQUFFeEMsQ0FBckIsRUFBd0I7SUFDcEJpRCxHQUFHLEdBQUdWLEtBQUssQ0FBQ3ZDLENBQUQsQ0FBWDs7SUFDQSxLQUFLNkMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxXQUFoQixFQUE2QixFQUFFQyxDQUEvQixFQUFrQztNQUM5QlIsR0FBRyxDQUFDUSxDQUFELENBQUgsR0FBU0ksR0FBVDtJQUNIOztJQUNESCxDQUFDLEdBQUc5QyxDQUFKOztJQUNBLEtBQUs2QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUlKLENBQUMsR0FBRyxDQUFyQixFQUF3QkksQ0FBQyxJQUFJLENBQUwsRUFBUUMsQ0FBQyxJQUFJUyxFQUFyQyxFQUF5QztNQUNyQ2xCLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHRCxXQUFMLENBQUgsR0FBdUJMLEtBQUssQ0FBQ08sQ0FBRCxDQUE1QjtNQUNBVCxHQUFHLENBQUNRLENBQUMsR0FBR0QsV0FBSixHQUFrQixDQUFuQixDQUFILEdBQTJCTCxLQUFLLENBQUNPLENBQUMsR0FBR04sQ0FBTCxDQUFoQztJQUNIOztJQUNELE9BQU9LLENBQUMsR0FBR0osQ0FBWCxFQUFjLEVBQUVJLENBQUYsRUFBS0MsQ0FBQyxJQUFJTixDQUF4QixFQUEyQjtNQUN2QkgsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUwsQ0FBSCxHQUF1QkwsS0FBSyxDQUFDTyxDQUFELENBQTVCO0lBQ0g7O0lBQ0RHLEdBQUcsR0FBR1YsS0FBSyxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLElBQVVELENBQVYsR0FBY3hDLENBQWYsQ0FBWDs7SUFDQSxLQUFLNkMsQ0FBQyxHQUFHSixDQUFULEVBQVlJLENBQUMsR0FBR0QsV0FBVyxHQUFHSCxDQUE5QixFQUFpQyxFQUFFSSxDQUFuQyxFQUFzQztNQUNsQ1IsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUwsQ0FBSCxHQUF1QkssR0FBdkI7SUFDSDs7SUFDREQsRUFBRSxHQUFHaEQsQ0FBTDs7SUFDQSxLQUFLNkMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJSixDQUFDLEdBQUcsQ0FBckIsRUFBd0JJLENBQUMsSUFBSSxDQUFMLEVBQVFHLEVBQUUsSUFBSVMsRUFBdEMsRUFBMEM7TUFDdENSLEdBQUcsR0FBR1osR0FBRyxDQUFDUSxDQUFELENBQUgsR0FBU1EsRUFBZixFQUNJSCxJQUFJLEdBQUdiLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSCxHQUFhUSxFQUR4QixFQUVJRixJQUFJLEdBQUdkLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSCxHQUFhUSxFQUZ4QixFQUdJRCxJQUFJLEdBQUdmLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSCxHQUFhUSxFQUh4Qjs7TUFJQSxLQUFLUCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILFdBQWhCLEVBQTZCLEVBQUVHLENBQS9CLEVBQWtDO1FBQzlCUSxFQUFFLEdBQUdaLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFYO1FBQ0FHLEdBQUcsSUFBSVosR0FBRyxDQUFDUyxDQUFDLEdBQUdELENBQUwsQ0FBSCxHQUFhUyxFQUFwQjtRQUNBSixJQUFJLElBQUliLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBVCxDQUFILEdBQWlCUyxFQUF6QjtRQUNBSCxJQUFJLElBQUlkLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBVCxDQUFILEdBQWlCUyxFQUF6QjtRQUNBRixJQUFJLElBQUlmLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBVCxDQUFILEdBQWlCUyxFQUF6QjtNQUNIOztNQUNEZixLQUFLLENBQUNTLEVBQUQsQ0FBTCxHQUFZVSxJQUFJLENBQUNDLEdBQUwsQ0FBU1YsR0FBRyxJQUFJLENBQWhCLEVBQW1CLEdBQW5CLENBQVo7TUFDQVYsS0FBSyxDQUFDUyxFQUFFLEdBQUdSLENBQU4sQ0FBTCxHQUFnQmtCLElBQUksQ0FBQ0MsR0FBTCxDQUFTVCxJQUFJLElBQUksQ0FBakIsRUFBb0IsR0FBcEIsQ0FBaEI7TUFDQVgsS0FBSyxDQUFDUyxFQUFFLEdBQUdPLEVBQU4sQ0FBTCxHQUFpQkcsSUFBSSxDQUFDQyxHQUFMLENBQVNSLElBQUksSUFBSSxDQUFqQixFQUFvQixHQUFwQixDQUFqQjtNQUNBWixLQUFLLENBQUNTLEVBQUUsR0FBR1EsRUFBTixDQUFMLEdBQWlCRSxJQUFJLENBQUNDLEdBQUwsQ0FBU1AsSUFBSSxJQUFJLENBQWpCLEVBQW9CLEdBQXBCLENBQWpCO0lBQ0g7O0lBQ0QsT0FBT1AsQ0FBQyxHQUFHSixDQUFYLEVBQWMsRUFBRUksQ0FBRixFQUFLRyxFQUFFLElBQUlSLENBQXpCLEVBQTRCO01BQ3hCUyxHQUFHLEdBQUdaLEdBQUcsQ0FBQ1EsQ0FBRCxDQUFILEdBQVNRLEVBQWY7O01BQ0EsS0FBS1AsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSCxXQUFoQixFQUE2QixFQUFFRyxDQUEvQixFQUFrQztRQUM5QkcsR0FBRyxJQUFJWixHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBTCxDQUFILEdBQWFILE1BQU0sQ0FBQ0ksQ0FBRCxDQUExQjtNQUNIOztNQUNEUCxLQUFLLENBQUNTLEVBQUQsQ0FBTCxHQUFZVSxJQUFJLENBQUNDLEdBQUwsQ0FBU1YsR0FBRyxJQUFJLENBQWhCLEVBQW1CLEdBQW5CLENBQVo7SUFDSDtFQUNKO0FBQ0o7QUFFSyxTQUFVVyxPQUFWLENBQWtCdkIsR0FBbEIsRUFBa0RDLEtBQWxELEVBQW1FQyxLQUFuRSxFQUFvRkMsQ0FBcEYsRUFBK0ZDLENBQS9GLEVBQTBHQyxNQUExRyxFQUE2SUMsV0FBN0ksRUFBa0tDLFdBQWxLLEVBQXFMO0VBQ3ZMLElBQUk1QyxDQUFDLEdBQUcsQ0FBUjtFQUFBLElBQVc2QyxDQUFDLEdBQUcsQ0FBZjtFQUFBLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEI7RUFBQSxJQUF5QkMsRUFBRSxHQUFHLENBQTlCO0VBQUEsSUFBaUNDLEVBQUUsR0FBRyxDQUF0QztFQUFBLElBQXlDQyxHQUFHLEdBQUcsR0FBL0M7RUFBQSxJQUFvREMsSUFBSSxHQUFHLEdBQTNEO0VBQUEsSUFBZ0VDLElBQUksR0FBRyxHQUF2RTtFQUFBLElBQTRFQyxJQUFJLEdBQUcsR0FBbkY7RUFBQSxJQUF3RkMsRUFBRSxHQUFHWCxNQUFNLENBQUMsQ0FBRCxDQUFuRztFQUFBLElBQXdHWSxFQUFFLEdBQUcsR0FBN0c7RUFDQSxJQUFJQyxFQUFFLEdBQUdmLENBQUMsSUFBSSxDQUFkO0VBQUEsSUFBaUJnQixFQUFFLEdBQUdoQixDQUFDLEdBQUcsQ0FBMUI7RUFBQSxJQUE2QmlCLEVBQUUsR0FBR2pCLENBQUMsSUFBSSxDQUF2Qzs7RUFFQSxPQUFPeEMsQ0FBQyxHQUFHeUMsQ0FBWCxFQUFjLEVBQUV6QyxDQUFoQixFQUFtQjtJQUNmaUQsR0FBRyxHQUFHWCxLQUFLLENBQUNTLEVBQUQsQ0FBWDs7SUFDQSxLQUFLRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdELFdBQWhCLEVBQTZCLEVBQUVDLENBQS9CLEVBQWtDO01BQzlCUixHQUFHLENBQUNRLENBQUQsQ0FBSCxHQUFTSSxHQUFUO0lBQ0g7O0lBQ0QsS0FBS0osQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJTCxDQUFDLEdBQUcsQ0FBckIsRUFBd0JLLENBQUMsSUFBSSxDQUE3QixFQUFnQztNQUM1QlIsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUwsQ0FBSCxHQUF1Qk4sS0FBSyxDQUFDUyxFQUFFLEdBQUdGLENBQU4sQ0FBNUI7TUFDQVIsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUosR0FBa0IsQ0FBbkIsQ0FBSCxHQUEyQk4sS0FBSyxDQUFDUyxFQUFFLEdBQUdGLENBQUwsR0FBUyxDQUFWLENBQWhDO0lBQ0g7O0lBQ0QsT0FBT0EsQ0FBQyxHQUFHTCxDQUFYLEVBQWMsRUFBRUssQ0FBaEIsRUFBbUI7TUFDZlIsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUwsQ0FBSCxHQUF1Qk4sS0FBSyxDQUFDUyxFQUFFLEdBQUdGLENBQU4sQ0FBNUI7SUFDSDs7SUFDREksR0FBRyxHQUFHWCxLQUFLLENBQUNTLEVBQUUsR0FBR1AsQ0FBTCxHQUFTLENBQVYsQ0FBWDs7SUFDQSxLQUFLSyxDQUFDLEdBQUdMLENBQVQsRUFBWUssQ0FBQyxHQUFHRCxXQUFXLEdBQUdKLENBQTlCLEVBQWlDLEVBQUVLLENBQW5DLEVBQXNDO01BQ2xDUixHQUFHLENBQUNRLENBQUMsR0FBR0QsV0FBTCxDQUFILEdBQXVCSyxHQUF2QjtJQUNIOztJQUNELEtBQUtKLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSUwsQ0FBQyxHQUFHLENBQXJCLEVBQXdCSyxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7TUFDNUJJLEdBQUcsR0FBR1osR0FBRyxDQUFDUSxDQUFELENBQUgsR0FBU1EsRUFBZixFQUNJSCxJQUFJLEdBQUdiLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSCxHQUFhUSxFQUR4QixFQUVJRixJQUFJLEdBQUdkLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSCxHQUFhUSxFQUZ4QixFQUdJRCxJQUFJLEdBQUdmLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSCxHQUFhUSxFQUh4Qjs7TUFJQSxLQUFLUCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILFdBQWhCLEVBQTZCLEVBQUVHLENBQS9CLEVBQWtDO1FBQzlCUSxFQUFFLEdBQUdaLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFYO1FBQ0FHLEdBQUcsSUFBSVosR0FBRyxDQUFDUyxDQUFDLEdBQUdELENBQUwsQ0FBSCxHQUFhUyxFQUFwQjtRQUNBSixJQUFJLElBQUliLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBVCxDQUFILEdBQWlCUyxFQUF6QjtRQUNBSCxJQUFJLElBQUlkLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBVCxDQUFILEdBQWlCUyxFQUF6QjtRQUNBRixJQUFJLElBQUlmLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBVCxDQUFILEdBQWlCUyxFQUF6QjtNQUNIOztNQUNEZixLQUFLLENBQUNTLEVBQUUsR0FBR0gsQ0FBTixDQUFMLEdBQWdCSSxHQUFoQjtNQUNBVixLQUFLLENBQUNTLEVBQUUsR0FBR0gsQ0FBTCxHQUFTLENBQVYsQ0FBTCxHQUFvQkssSUFBcEI7TUFDQVgsS0FBSyxDQUFDUyxFQUFFLEdBQUdILENBQUwsR0FBUyxDQUFWLENBQUwsR0FBb0JNLElBQXBCO01BQ0FaLEtBQUssQ0FBQ1MsRUFBRSxHQUFHSCxDQUFMLEdBQVMsQ0FBVixDQUFMLEdBQW9CTyxJQUFwQjtJQUNIOztJQUNELE9BQU9QLENBQUMsR0FBR0wsQ0FBWCxFQUFjLEVBQUVLLENBQWhCLEVBQW1CO01BQ2ZJLEdBQUcsR0FBR1osR0FBRyxDQUFDUSxDQUFELENBQUgsR0FBU1EsRUFBZjs7TUFDQSxLQUFLUCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILFdBQWhCLEVBQTZCLEVBQUVHLENBQS9CLEVBQWtDO1FBQzlCRyxHQUFHLElBQUlaLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFMLENBQUgsR0FBYUgsTUFBTSxDQUFDSSxDQUFELENBQTFCO01BQ0g7O01BQ0RQLEtBQUssQ0FBQ1MsRUFBRSxHQUFHSCxDQUFOLENBQUwsR0FBZ0JJLEdBQWhCO0lBQ0g7O0lBQ0RGLEVBQUUsSUFBSVAsQ0FBTjtJQUNBUSxFQUFFLElBQUlSLENBQU47RUFDSDs7RUFHRCxLQUFLeEMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHd0MsQ0FBaEIsRUFBbUIsRUFBRXhDLENBQXJCLEVBQXdCO0lBQ3BCaUQsR0FBRyxHQUFHVixLQUFLLENBQUN2QyxDQUFELENBQVg7O0lBQ0EsS0FBSzZDLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0QsV0FBaEIsRUFBNkIsRUFBRUMsQ0FBL0IsRUFBa0M7TUFDOUJSLEdBQUcsQ0FBQ1EsQ0FBRCxDQUFILEdBQVNJLEdBQVQ7SUFDSDs7SUFDREgsQ0FBQyxHQUFHOUMsQ0FBSjs7SUFDQSxLQUFLNkMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJSixDQUFDLEdBQUcsQ0FBckIsRUFBd0JJLENBQUMsSUFBSSxDQUFMLEVBQVFDLENBQUMsSUFBSVMsRUFBckMsRUFBeUM7TUFDckNsQixHQUFHLENBQUNRLENBQUMsR0FBR0QsV0FBTCxDQUFILEdBQXVCTCxLQUFLLENBQUNPLENBQUQsQ0FBNUI7TUFDQVQsR0FBRyxDQUFDUSxDQUFDLEdBQUdELFdBQUosR0FBa0IsQ0FBbkIsQ0FBSCxHQUEyQkwsS0FBSyxDQUFDTyxDQUFDLEdBQUdOLENBQUwsQ0FBaEM7SUFDSDs7SUFDRCxPQUFPSyxDQUFDLEdBQUdKLENBQVgsRUFBYyxFQUFFSSxDQUFGLEVBQUtDLENBQUMsSUFBSU4sQ0FBeEIsRUFBMkI7TUFDdkJILEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHRCxXQUFMLENBQUgsR0FBdUJMLEtBQUssQ0FBQ08sQ0FBRCxDQUE1QjtJQUNIOztJQUNERyxHQUFHLEdBQUdWLEtBQUssQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxJQUFVRCxDQUFWLEdBQWN4QyxDQUFmLENBQVg7O0lBQ0EsS0FBSzZDLENBQUMsR0FBR0osQ0FBVCxFQUFZSSxDQUFDLEdBQUdELFdBQVcsR0FBR0gsQ0FBOUIsRUFBaUMsRUFBRUksQ0FBbkMsRUFBc0M7TUFDbENSLEdBQUcsQ0FBQ1EsQ0FBQyxHQUFHRCxXQUFMLENBQUgsR0FBdUJLLEdBQXZCO0lBQ0g7O0lBQ0RELEVBQUUsR0FBR2hELENBQUw7O0lBQ0EsS0FBSzZDLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSUosQ0FBQyxHQUFHLENBQXJCLEVBQXdCSSxDQUFDLElBQUksQ0FBTCxFQUFRRyxFQUFFLElBQUlTLEVBQXRDLEVBQTBDO01BQ3RDUixHQUFHLEdBQUdaLEdBQUcsQ0FBQ1EsQ0FBRCxDQUFILEdBQVNRLEVBQWYsRUFDSUgsSUFBSSxHQUFHYixHQUFHLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUgsR0FBYVEsRUFEeEIsRUFFSUYsSUFBSSxHQUFHZCxHQUFHLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUgsR0FBYVEsRUFGeEIsRUFHSUQsSUFBSSxHQUFHZixHQUFHLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUgsR0FBYVEsRUFIeEI7O01BSUEsS0FBS1AsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSCxXQUFoQixFQUE2QixFQUFFRyxDQUEvQixFQUFrQztRQUM5QlEsRUFBRSxHQUFHWixNQUFNLENBQUNJLENBQUQsQ0FBWDtRQUNBRyxHQUFHLElBQUlaLEdBQUcsQ0FBQ1MsQ0FBQyxHQUFHRCxDQUFMLENBQUgsR0FBYVMsRUFBcEI7UUFDQUosSUFBSSxJQUFJYixHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBSCxHQUFpQlMsRUFBekI7UUFDQUgsSUFBSSxJQUFJZCxHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBSCxHQUFpQlMsRUFBekI7UUFDQUYsSUFBSSxJQUFJZixHQUFHLENBQUNTLENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBSCxHQUFpQlMsRUFBekI7TUFDSDs7TUFDRGYsS0FBSyxDQUFDUyxFQUFELENBQUwsR0FBWUMsR0FBWjtNQUNBVixLQUFLLENBQUNTLEVBQUUsR0FBR1IsQ0FBTixDQUFMLEdBQWdCVSxJQUFoQjtNQUNBWCxLQUFLLENBQUNTLEVBQUUsR0FBR08sRUFBTixDQUFMLEdBQWlCSixJQUFqQjtNQUNBWixLQUFLLENBQUNTLEVBQUUsR0FBR1EsRUFBTixDQUFMLEdBQWlCSixJQUFqQjtJQUNIOztJQUNELE9BQU9QLENBQUMsR0FBR0osQ0FBWCxFQUFjLEVBQUVJLENBQUYsRUFBS0csRUFBRSxJQUFJUixDQUF6QixFQUE0QjtNQUN4QlMsR0FBRyxHQUFHWixHQUFHLENBQUNRLENBQUQsQ0FBSCxHQUFTUSxFQUFmOztNQUNBLEtBQUtQLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0gsV0FBaEIsRUFBNkIsRUFBRUcsQ0FBL0IsRUFBa0M7UUFDOUJHLEdBQUcsSUFBSVosR0FBRyxDQUFDUyxDQUFDLEdBQUdELENBQUwsQ0FBSCxHQUFhSCxNQUFNLENBQUNJLENBQUQsQ0FBMUI7TUFDSDs7TUFDRFAsS0FBSyxDQUFDUyxFQUFELENBQUwsR0FBWUMsR0FBWjtJQUNIO0VBQ0o7QUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FDdkxLLFNBQVVZLFlBQVYsQ0FBdUJDLEdBQXZCLEVBQXNDQyxHQUF0QyxFQUFxRHJFLEtBQXJELEVBQW1Fc0UsRUFBbkUsRUFBK0VDLEVBQS9FLEVBQXlGO0VBQzNGLElBQUlDLFVBQVUsR0FBRyxDQUFqQjtFQUNBLElBQUlDLEVBQUUsR0FBR0wsR0FBRyxDQUFDTSxPQUFiO0VBQUEsSUFBc0I1QixDQUFDLEdBQUdzQixHQUFHLENBQUNPLElBQTlCO0VBQUEsSUFBb0M1QixDQUFDLEdBQUdxQixHQUFHLENBQUNRLElBQTVDO0VBQ0EsSUFBSWhDLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1MsSUFBaEI7RUFBQSxJQUFzQmhDLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1EsSUFBbEM7RUFDQSxJQUFJQyxPQUFPLEdBQUdoQyxDQUFDLEdBQUd3QixFQUFsQjtFQUFBLElBQXNCUyxPQUFPLEdBQUdoQyxDQUFDLEdBQUd3QixFQUFwQztFQUNBLElBQUlTLGFBQWEsR0FBSUYsT0FBTyxHQUFHQyxPQUFWLEdBQW9CLE9BQXJCLEdBQWdDLENBQXBEO0VBQ0EsSUFBSUUsRUFBRSxHQUFHLENBQVQ7RUFBQSxJQUFZQyxFQUFFLEdBQUcsQ0FBakI7RUFBQSxJQUFvQkMsRUFBRSxHQUFHLENBQXpCO0VBQUEsSUFBNEJDLEVBQUUsR0FBRyxDQUFqQztFQUFBLElBQW9DQyxHQUFHLEdBQUcsQ0FBMUM7RUFBQSxJQUE2Q0MsR0FBRyxHQUFHLENBQW5EO0VBQUEsSUFBc0RoRixDQUFDLEdBQUcsQ0FBMUQ7RUFBQSxJQUE2RDhDLENBQUMsR0FBRyxDQUFqRTtFQUFBLElBQW9FbUMsSUFBSSxHQUFHLEdBQTNFO0VBQUEsSUFBZ0ZDLElBQUksR0FBRyxHQUF2RjtFQUNBLElBQUlDLENBQUMsR0FBRyxDQUFSO0VBQUEsSUFBV0MsQ0FBQyxHQUFHLENBQWY7RUFBQSxJQUFrQkMsR0FBRyxHQUFHLENBQXhCO0VBQUEsSUFBMkJDLEtBQUssR0FBRyxDQUFuQztFQUFBLElBQXNDQyxJQUFJLEdBQUcsQ0FBN0M7RUFBQSxJQUFnREMsS0FBSyxHQUFHLENBQXhEO0VBRUEsSUFBSUMsUUFBUSxHQUFHL0YsS0FBSyxDQUFDZ0csVUFBTixDQUFrQjFCLEVBQUUsR0FBR0csRUFBTixJQUFhLENBQTlCLENBQWY7RUFDQSxJQUFJd0IsUUFBUSxHQUFHakcsS0FBSyxDQUFDZ0csVUFBTixDQUFrQjFCLEVBQUUsR0FBR0csRUFBTixJQUFhLENBQTlCLENBQWY7RUFDQSxJQUFJeUIsU0FBUyxHQUFHbEcsS0FBSyxDQUFDZ0csVUFBTixDQUFrQmxELENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBVCxJQUFlLENBQWhDLENBQWhCO0VBRUEsSUFBSUgsR0FBRyxHQUFHb0QsUUFBUSxDQUFDSSxHQUFuQjtFQUNBLElBQUk1QyxHQUFHLEdBQUcwQyxRQUFRLENBQUNFLEdBQW5CO0VBQ0EsSUFBSUMsSUFBSSxHQUFHRixTQUFTLENBQUNDLEdBQXJCOztFQUVBLE9BQU9sQixFQUFFLEdBQUdYLEVBQVosRUFBZ0JXLEVBQUUsRUFBbEIsRUFBc0I7SUFDbEJNLElBQUksR0FBR04sRUFBRSxHQUFHSCxPQUFaLEVBQXFCVSxJQUFJLEdBQUdELElBQUksR0FBR1QsT0FBbkM7SUFDQU8sR0FBRyxHQUFJRSxJQUFJLEdBQUcsR0FBUCxHQUFhLElBQWQsR0FBc0IsQ0FBNUIsRUFBK0JELEdBQUcsR0FBR0UsSUFBSSxHQUFHLENBQTVDO0lBQ0FILEdBQUcsR0FBR3JCLElBQUksQ0FBQ0MsR0FBTCxDQUFTb0IsR0FBVCxFQUFjdkMsQ0FBQyxHQUFHLENBQWxCLENBQU47SUFDQXdDLEdBQUcsR0FBR3RCLElBQUksQ0FBQ0MsR0FBTCxDQUFTcUIsR0FBVCxFQUFjeEMsQ0FBQyxHQUFHLENBQWxCLENBQU47O0lBRUEsSUFBSXVDLEdBQUcsR0FBR0UsSUFBVixFQUFnQjtNQUNaYSxJQUFJLENBQUNoRCxDQUFDLEVBQUYsQ0FBSixHQUFhNkIsRUFBRSxHQUFHUixFQUFOLEdBQVksQ0FBeEI7TUFDQTJCLElBQUksQ0FBQ2hELENBQUMsRUFBRixDQUFKLEdBQWEsQ0FBQ2lDLEdBQUcsR0FBRyxDQUFQLElBQVlaLEVBQWIsR0FBbUIsQ0FBL0I7TUFDQTJCLElBQUksQ0FBQ2hELENBQUMsRUFBRixDQUFKLEdBQWEsQ0FBQ2lDLEdBQUcsR0FBR0UsSUFBUCxJQUFlLEtBQWhCLEdBQXlCLENBQXJDO01BQ0FmLFVBQVU7SUFDYjs7SUFDRCxLQUFLVyxFQUFFLEdBQUdFLEdBQVYsRUFBZUYsRUFBRSxHQUFHRyxHQUFwQixFQUF5QkgsRUFBRSxFQUEzQixFQUErQjtNQUMzQlgsVUFBVTtNQUNWNEIsSUFBSSxDQUFDaEQsQ0FBQyxFQUFGLENBQUosR0FBYTZCLEVBQUUsR0FBR1IsRUFBTixHQUFZLENBQXhCO01BQ0EyQixJQUFJLENBQUNoRCxDQUFDLEVBQUYsQ0FBSixHQUFhK0IsRUFBRSxHQUFHVixFQUFOLEdBQVksQ0FBeEI7TUFDQTJCLElBQUksQ0FBQ2hELENBQUMsRUFBRixDQUFKLEdBQVksR0FBWjtJQUNIOztJQUNELElBQUlvQyxJQUFJLEdBQUdGLEdBQVAsR0FBYSxJQUFqQixFQUF1QjtNQUNuQmQsVUFBVTtNQUNWNEIsSUFBSSxDQUFDaEQsQ0FBQyxFQUFGLENBQUosR0FBYTZCLEVBQUUsR0FBR1IsRUFBTixHQUFZLENBQXhCO01BQ0EyQixJQUFJLENBQUNoRCxDQUFDLEVBQUYsQ0FBSixHQUFha0MsR0FBRyxHQUFHYixFQUFQLEdBQWEsQ0FBekI7TUFDQTJCLElBQUksQ0FBQ2hELENBQUMsRUFBRixDQUFKLEdBQWEsQ0FBQ29DLElBQUksR0FBR0YsR0FBUixJQUFlLEdBQWhCLEdBQXVCLENBQW5DO0lBQ0g7RUFDSjs7RUFFRCxLQUFLTCxFQUFFLEdBQUcsQ0FBVixFQUFhQSxFQUFFLEdBQUdYLEVBQUUsR0FBR0csRUFBdkIsRUFBMkJRLEVBQUUsRUFBN0IsRUFBaUM7SUFDN0J0QyxHQUFHLENBQUNzQyxFQUFELENBQUgsR0FBVTFCLEdBQUcsQ0FBQzBCLEVBQUQsQ0FBSCxHQUFVLENBQXBCO0VBQ0g7O0VBQ0RDLEVBQUUsR0FBRyxDQUFMOztFQUNBLEtBQUtFLEVBQUUsR0FBRyxDQUFWLEVBQWFBLEVBQUUsR0FBR3JDLENBQWxCLEVBQXFCcUMsRUFBRSxFQUF2QixFQUEyQjtJQUN2QkssQ0FBQyxHQUFHM0MsQ0FBQyxHQUFHc0MsRUFBUjs7SUFDQSxLQUFLaEMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHb0IsVUFBaEIsRUFBNEJwQixDQUFDLEVBQTdCLEVBQWlDO01BQzdCdUMsR0FBRyxHQUFHUyxJQUFJLENBQUNoRCxDQUFDLEdBQUcsQ0FBTCxDQUFWO01BQ0FpQyxHQUFHLEdBQUdlLElBQUksQ0FBQ2hELENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBVCxDQUFWO01BQ0F3QyxLQUFLLEdBQUdRLElBQUksQ0FBQ2hELENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBVCxDQUFaOztNQUNBLEtBQUs5QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdtRSxFQUFoQixFQUFvQm5FLENBQUMsRUFBckIsRUFBeUI7UUFDckJxQyxHQUFHLENBQUNnRCxHQUFHLEdBQUdyRixDQUFQLENBQUgsSUFBZ0JzQyxLQUFLLENBQUM2QyxDQUFDLEdBQUdKLEdBQUosR0FBVS9FLENBQVgsQ0FBTCxHQUFxQnNGLEtBQXJDO01BQ0g7SUFDSjs7SUFDRCxJQUFJLENBQUNWLEVBQUUsR0FBRyxDQUFOLElBQVdILE9BQVgsSUFBc0JLLEVBQUUsR0FBRyxDQUEzQixJQUFnQ0EsRUFBRSxJQUFJckMsQ0FBQyxHQUFHLENBQTlDLEVBQWlEO01BQzdDOEMsSUFBSSxHQUFJN0IsSUFBSSxDQUFDcUMsR0FBTCxDQUFTakIsRUFBRSxHQUFHLENBQUwsR0FBUyxDQUFDRixFQUFFLEdBQUcsQ0FBTixJQUFXSCxPQUE3QixFQUFzQyxHQUF0QyxJQUE2QyxHQUE5QyxHQUFxRCxDQUE1RDtNQUNBZSxLQUFLLEdBQUcsTUFBTUQsSUFBZDtNQUNBSCxDQUFDLEdBQUdwQixFQUFFLEdBQUdZLEVBQVQ7O01BQ0EsSUFBSVcsSUFBSSxJQUFJLENBQVosRUFBZTtRQUNYLEtBQUtaLEVBQUUsR0FBRyxDQUFWLEVBQWFBLEVBQUUsR0FBR1gsRUFBRSxHQUFHRyxFQUF2QixFQUEyQlEsRUFBRSxFQUE3QixFQUFpQztVQUM3QnBDLEtBQUssQ0FBQzZDLENBQUMsR0FBR1QsRUFBTCxDQUFMLEdBQWdCakIsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ3FDLEdBQUwsQ0FBUyxDQUFDOUMsR0FBRyxDQUFDMEIsRUFBRCxDQUFILEdBQVV0QyxHQUFHLENBQUNzQyxFQUFELENBQUgsR0FBVSxHQUFyQixJQUE0QkQsYUFBckMsRUFBb0QsQ0FBcEQsQ0FBVCxFQUFpRSxHQUFqRSxDQUFoQjtVQUNBekIsR0FBRyxDQUFDMEIsRUFBRCxDQUFILEdBQVV0QyxHQUFHLENBQUNzQyxFQUFELENBQUgsR0FBVSxDQUFwQjtRQUNIO01BQ0osQ0FMRCxNQUtPO1FBQ0gsS0FBS0EsRUFBRSxHQUFHLENBQVYsRUFBYUEsRUFBRSxHQUFHWCxFQUFFLEdBQUdHLEVBQXZCLEVBQTJCUSxFQUFFLEVBQTdCLEVBQWlDO1VBQzdCcEMsS0FBSyxDQUFDNkMsQ0FBQyxHQUFHVCxFQUFMLENBQUwsR0FBZ0JqQixJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDcUMsR0FBTCxDQUFTLENBQUM5QyxHQUFHLENBQUMwQixFQUFELENBQUgsR0FBVXRDLEdBQUcsQ0FBQ3NDLEVBQUQsQ0FBSCxHQUFVYSxLQUFyQixJQUE4QmQsYUFBdkMsRUFBc0QsQ0FBdEQsQ0FBVCxFQUFtRSxHQUFuRSxDQUFoQjtVQUNBekIsR0FBRyxDQUFDMEIsRUFBRCxDQUFILEdBQVV0QyxHQUFHLENBQUNzQyxFQUFELENBQUgsR0FBVVksSUFBcEI7VUFDQWxELEdBQUcsQ0FBQ3NDLEVBQUQsQ0FBSCxHQUFVLENBQVY7UUFDSDtNQUNKOztNQUNEQyxFQUFFO0lBQ0wsQ0FqQkQsTUFpQk87TUFDSCxLQUFLRCxFQUFFLEdBQUcsQ0FBVixFQUFhQSxFQUFFLEdBQUdYLEVBQUUsR0FBR0csRUFBdkIsRUFBMkJRLEVBQUUsRUFBN0IsRUFBaUM7UUFDN0IxQixHQUFHLENBQUMwQixFQUFELENBQUgsSUFBV3RDLEdBQUcsQ0FBQ3NDLEVBQUQsQ0FBSCxHQUFVLEdBQXJCO1FBQ0F0QyxHQUFHLENBQUNzQyxFQUFELENBQUgsR0FBVSxDQUFWO01BQ0g7SUFDSjtFQUNKOztFQUVEakYsS0FBSyxDQUFDc0csVUFBTixDQUFpQkwsUUFBakI7RUFDQWpHLEtBQUssQ0FBQ3NHLFVBQU4sQ0FBaUJQLFFBQWpCO0VBQ0EvRixLQUFLLENBQUNzRyxVQUFOLENBQWlCSixTQUFqQjtBQUNIO0FBRUssU0FBVUssU0FBVixDQUFvQm5DLEdBQXBCLEVBQW1DQyxHQUFuQyxFQUFrRHJFLEtBQWxELEVBQWdFc0UsRUFBaEUsRUFBNEVDLEVBQTVFLEVBQXNGO0VBQ3hGLElBQUlDLFVBQVUsR0FBRyxDQUFqQjtFQUNBLElBQUlDLEVBQUUsR0FBR0wsR0FBRyxDQUFDTSxPQUFiO0VBQUEsSUFBc0I1QixDQUFDLEdBQUdzQixHQUFHLENBQUNPLElBQTlCO0VBQUEsSUFBb0M1QixDQUFDLEdBQUdxQixHQUFHLENBQUNRLElBQTVDO0VBQ0EsSUFBSWhDLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1MsSUFBaEI7RUFBQSxJQUFzQmhDLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1EsSUFBbEM7RUFDQSxJQUFJQyxPQUFPLEdBQUdoQyxDQUFDLEdBQUd3QixFQUFsQjtFQUFBLElBQXNCUyxPQUFPLEdBQUdoQyxDQUFDLEdBQUd3QixFQUFwQztFQUNBLElBQUlpQyxLQUFLLEdBQUcsT0FBTzFCLE9BQU8sR0FBR0MsT0FBakIsQ0FBWjtFQUNBLElBQUlFLEVBQUUsR0FBRyxDQUFUO0VBQUEsSUFBWUMsRUFBRSxHQUFHLENBQWpCO0VBQUEsSUFBb0JDLEVBQUUsR0FBRyxDQUF6QjtFQUFBLElBQTRCQyxFQUFFLEdBQUcsQ0FBakM7RUFBQSxJQUFvQ0MsR0FBRyxHQUFHLENBQTFDO0VBQUEsSUFBNkNDLEdBQUcsR0FBRyxDQUFuRDtFQUFBLElBQXNEaEYsQ0FBQyxHQUFHLENBQTFEO0VBQUEsSUFBNkQ4QyxDQUFDLEdBQUcsQ0FBakU7RUFBQSxJQUFvRW1DLElBQUksR0FBRyxHQUEzRTtFQUFBLElBQWdGQyxJQUFJLEdBQUcsR0FBdkY7RUFDQSxJQUFJQyxDQUFDLEdBQUcsQ0FBUjtFQUFBLElBQVdDLENBQUMsR0FBRyxDQUFmO0VBQUEsSUFBa0JDLEdBQUcsR0FBRyxDQUF4QjtFQUFBLElBQTJCQyxLQUFLLEdBQUcsR0FBbkM7RUFBQSxJQUF3Q0MsSUFBSSxHQUFHLEdBQS9DO0VBQUEsSUFBb0RDLEtBQUssR0FBRyxHQUE1RDtFQUVBLElBQUlDLFFBQVEsR0FBRy9GLEtBQUssQ0FBQ2dHLFVBQU4sQ0FBa0IxQixFQUFFLEdBQUdHLEVBQU4sSUFBYSxDQUE5QixDQUFmO0VBQ0EsSUFBSXdCLFFBQVEsR0FBR2pHLEtBQUssQ0FBQ2dHLFVBQU4sQ0FBa0IxQixFQUFFLEdBQUdHLEVBQU4sSUFBYSxDQUE5QixDQUFmO0VBQ0EsSUFBSXlCLFNBQVMsR0FBR2xHLEtBQUssQ0FBQ2dHLFVBQU4sQ0FBa0JsRCxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQVQsSUFBZSxDQUFoQyxDQUFoQjtFQUVBLElBQUlILEdBQUcsR0FBR29ELFFBQVEsQ0FBQ1UsR0FBbkI7RUFDQSxJQUFJbEQsR0FBRyxHQUFHMEMsUUFBUSxDQUFDUSxHQUFuQjtFQUNBLElBQUlMLElBQUksR0FBR0YsU0FBUyxDQUFDTyxHQUFyQjs7RUFFQSxPQUFPeEIsRUFBRSxHQUFHWCxFQUFaLEVBQWdCVyxFQUFFLEVBQWxCLEVBQXNCO0lBQ2xCTSxJQUFJLEdBQUdOLEVBQUUsR0FBR0gsT0FBWixFQUFxQlUsSUFBSSxHQUFHRCxJQUFJLEdBQUdULE9BQW5DO0lBQ0FPLEdBQUcsR0FBSUUsSUFBSSxHQUFHLEdBQVAsR0FBYSxJQUFkLEdBQXNCLENBQTVCLEVBQStCRCxHQUFHLEdBQUdFLElBQUksR0FBRyxDQUE1QztJQUNBSCxHQUFHLEdBQUdyQixJQUFJLENBQUNDLEdBQUwsQ0FBU29CLEdBQVQsRUFBY3ZDLENBQUMsR0FBRyxDQUFsQixDQUFOO0lBQ0F3QyxHQUFHLEdBQUd0QixJQUFJLENBQUNDLEdBQUwsQ0FBU3FCLEdBQVQsRUFBY3hDLENBQUMsR0FBRyxDQUFsQixDQUFOOztJQUVBLElBQUl1QyxHQUFHLEdBQUdFLElBQVYsRUFBZ0I7TUFDWmYsVUFBVTtNQUNWNEIsSUFBSSxDQUFDaEQsQ0FBQyxFQUFGLENBQUosR0FBYSxDQUFDaUMsR0FBRyxHQUFHLENBQVAsSUFBWVosRUFBYixHQUFtQixDQUEvQjtNQUNBMkIsSUFBSSxDQUFDaEQsQ0FBQyxFQUFGLENBQUosR0FBYTZCLEVBQUUsR0FBR1IsRUFBTixHQUFZLENBQXhCO01BQ0EyQixJQUFJLENBQUNoRCxDQUFDLEVBQUYsQ0FBSixHQUFZLENBQUNpQyxHQUFHLEdBQUdFLElBQVAsSUFBZWlCLEtBQTNCO0lBQ0g7O0lBQ0QsS0FBS3JCLEVBQUUsR0FBR0UsR0FBVixFQUFlRixFQUFFLEdBQUdHLEdBQXBCLEVBQXlCSCxFQUFFLEVBQTNCLEVBQStCO01BQzNCWCxVQUFVO01BQ1Y0QixJQUFJLENBQUNoRCxDQUFDLEVBQUYsQ0FBSixHQUFhK0IsRUFBRSxHQUFHVixFQUFOLEdBQVksQ0FBeEI7TUFDQTJCLElBQUksQ0FBQ2hELENBQUMsRUFBRixDQUFKLEdBQWE2QixFQUFFLEdBQUdSLEVBQU4sR0FBWSxDQUF4QjtNQUNBMkIsSUFBSSxDQUFDaEQsQ0FBQyxFQUFGLENBQUosR0FBWW9ELEtBQVo7SUFDSDs7SUFDRCxJQUFJaEIsSUFBSSxHQUFHRixHQUFQLEdBQWEsSUFBakIsRUFBdUI7TUFDbkJkLFVBQVU7TUFDVjRCLElBQUksQ0FBQ2hELENBQUMsRUFBRixDQUFKLEdBQWFrQyxHQUFHLEdBQUdiLEVBQVAsR0FBYSxDQUF6QjtNQUNBMkIsSUFBSSxDQUFDaEQsQ0FBQyxFQUFGLENBQUosR0FBYTZCLEVBQUUsR0FBR1IsRUFBTixHQUFZLENBQXhCO01BQ0EyQixJQUFJLENBQUNoRCxDQUFDLEVBQUYsQ0FBSixHQUFZLENBQUNvQyxJQUFJLEdBQUdGLEdBQVIsSUFBZWtCLEtBQTNCO0lBQ0g7RUFDSjs7RUFFRCxLQUFLdkIsRUFBRSxHQUFHLENBQVYsRUFBYUEsRUFBRSxHQUFHWCxFQUFFLEdBQUdHLEVBQXZCLEVBQTJCUSxFQUFFLEVBQTdCLEVBQWlDO0lBQzdCdEMsR0FBRyxDQUFDc0MsRUFBRCxDQUFILEdBQVUxQixHQUFHLENBQUMwQixFQUFELENBQUgsR0FBVSxDQUFwQjtFQUNIOztFQUNEQyxFQUFFLEdBQUcsQ0FBTDs7RUFDQSxLQUFLRSxFQUFFLEdBQUcsQ0FBVixFQUFhQSxFQUFFLEdBQUdyQyxDQUFsQixFQUFxQnFDLEVBQUUsRUFBdkIsRUFBMkI7SUFDdkJLLENBQUMsR0FBRzNDLENBQUMsR0FBR3NDLEVBQVI7O0lBQ0EsS0FBS2hDLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR29CLFVBQWhCLEVBQTRCcEIsQ0FBQyxFQUE3QixFQUFpQztNQUM3QmlDLEdBQUcsR0FBR2UsSUFBSSxDQUFDaEQsQ0FBQyxHQUFHLENBQUwsQ0FBSixHQUFjLENBQXBCO01BQ0F1QyxHQUFHLEdBQUdTLElBQUksQ0FBQ2hELENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBVCxDQUFKLEdBQWtCLENBQXhCO01BQ0F3QyxLQUFLLEdBQUdRLElBQUksQ0FBQ2hELENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBVCxDQUFaOztNQUNBLEtBQUs5QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdtRSxFQUFoQixFQUFvQm5FLENBQUMsRUFBckIsRUFBeUI7UUFDckJxQyxHQUFHLENBQUNnRCxHQUFHLEdBQUdyRixDQUFQLENBQUgsSUFBZ0JzQyxLQUFLLENBQUM2QyxDQUFDLEdBQUdKLEdBQUosR0FBVS9FLENBQVgsQ0FBTCxHQUFxQnNGLEtBQXJDO01BQ0g7SUFDSjs7SUFDRCxJQUFJLENBQUNWLEVBQUUsR0FBRyxDQUFOLElBQVdILE9BQVgsSUFBc0JLLEVBQUUsR0FBRyxDQUEzQixJQUFnQ0EsRUFBRSxJQUFJckMsQ0FBQyxHQUFHLENBQTlDLEVBQWlEO01BQzdDOEMsSUFBSSxHQUFHN0IsSUFBSSxDQUFDcUMsR0FBTCxDQUFTakIsRUFBRSxHQUFHLENBQUwsR0FBUyxDQUFDRixFQUFFLEdBQUcsQ0FBTixJQUFXSCxPQUE3QixFQUFzQyxHQUF0QyxDQUFQO01BQ0FlLEtBQUssR0FBRyxNQUFNRCxJQUFkO01BQ0FILENBQUMsR0FBR3BCLEVBQUUsR0FBR1ksRUFBVDs7TUFDQSxJQUFJbEIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTYixJQUFULElBQWlCLElBQXJCLEVBQTJCO1FBQ3ZCLEtBQUtaLEVBQUUsR0FBRyxDQUFWLEVBQWFBLEVBQUUsR0FBR1gsRUFBRSxHQUFHRyxFQUF2QixFQUEyQlEsRUFBRSxFQUE3QixFQUFpQztVQUM3QnBDLEtBQUssQ0FBQzZDLENBQUMsR0FBR1QsRUFBTCxDQUFMLEdBQWdCMUIsR0FBRyxDQUFDMEIsRUFBRCxDQUFILEdBQVV0QyxHQUFHLENBQUNzQyxFQUFELENBQTdCO1VBQ0ExQixHQUFHLENBQUMwQixFQUFELENBQUgsR0FBVXRDLEdBQUcsQ0FBQ3NDLEVBQUQsQ0FBSCxHQUFVLENBQXBCO1FBQ0g7TUFDSixDQUxELE1BS087UUFDSCxLQUFLQSxFQUFFLEdBQUcsQ0FBVixFQUFhQSxFQUFFLEdBQUdYLEVBQUUsR0FBR0csRUFBdkIsRUFBMkJRLEVBQUUsRUFBN0IsRUFBaUM7VUFDN0JwQyxLQUFLLENBQUM2QyxDQUFDLEdBQUdULEVBQUwsQ0FBTCxHQUFnQjFCLEdBQUcsQ0FBQzBCLEVBQUQsQ0FBSCxHQUFVdEMsR0FBRyxDQUFDc0MsRUFBRCxDQUFILEdBQVVhLEtBQXBDO1VBQ0F2QyxHQUFHLENBQUMwQixFQUFELENBQUgsR0FBVXRDLEdBQUcsQ0FBQ3NDLEVBQUQsQ0FBSCxHQUFVWSxJQUFwQjtVQUNBbEQsR0FBRyxDQUFDc0MsRUFBRCxDQUFILEdBQVUsQ0FBVjtRQUNIO01BQ0o7O01BQ0RDLEVBQUU7SUFDTCxDQWpCRCxNQWlCTztNQUNILEtBQUtELEVBQUUsR0FBRyxDQUFWLEVBQWFBLEVBQUUsR0FBR1gsRUFBRSxHQUFHRyxFQUF2QixFQUEyQlEsRUFBRSxFQUE3QixFQUFpQztRQUM3QjFCLEdBQUcsQ0FBQzBCLEVBQUQsQ0FBSCxJQUFXdEMsR0FBRyxDQUFDc0MsRUFBRCxDQUFkO1FBQ0F0QyxHQUFHLENBQUNzQyxFQUFELENBQUgsR0FBVSxDQUFWO01BQ0g7SUFDSjtFQUNKOztFQUNEakYsS0FBSyxDQUFDc0csVUFBTixDQUFpQkwsUUFBakI7RUFDQWpHLEtBQUssQ0FBQ3NHLFVBQU4sQ0FBaUJQLFFBQWpCO0VBQ0EvRixLQUFLLENBQUNzRyxVQUFOLENBQWlCSixTQUFqQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S0Q7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBOztJQUVxQnFCO0VBb0JqQjtJQUFBOztJQUFBOztJQUFBOztJQUNJLEtBQUtDLEVBQUwsR0FBVSxJQUFJbEYsMkRBQUosRUFBVjtJQUNBLEtBQUt0QyxLQUFMLEdBQWEsSUFBSUEsK0NBQUosRUFBYjtJQUNBLEtBQUtBLEtBQUwsQ0FBV3lILFFBQVgsQ0FBb0IsRUFBcEIsRUFBd0IsTUFBTSxDQUE5QjtFQUNIOzs7O1dBd0NELHVCQUFjaEYsSUFBZCxFQUEwQjtNQUN0QixPQUFPLEtBQUsrRSxFQUFMLENBQVFFLGNBQVIsQ0FBdUJqRixJQUF2QixDQUFQO0lBQ0g7OztXQUVELHFCQUFZQSxJQUFaLEVBQXdCO01BQ3BCLE9BQU8sS0FBSytFLEVBQUwsQ0FBUUcsWUFBUixDQUFxQmxGLElBQXJCLENBQVA7SUFDSDs7O1dBRUQsNEJBQW1CQSxJQUFuQixFQUErQjtNQUMzQixPQUFPLEtBQUsrRSxFQUFMLENBQVFJLG1CQUFSLENBQTRCbkYsSUFBNUIsQ0FBUDtJQUNIOzs7Ozs7a0ZBMUVnQjhFOztrRkFBQUE7O2tGQUFBQTs7a0ZBQUFBOztrRkFBQUE7O2tGQUFBQTs7a0ZBQUFBOztrRkFBQUE7O2tGQUFBQTs7a0ZBQUFBOztrRkFBQUE7O2tGQUFBQTs7a0ZBQUFBOztrRkFBQUE7O2tGQUFBQTs7a0ZBQUFBOztrRkFBQUEsdUJBMkJRRDs7a0ZBM0JSQyx1QkE4QkEzRzs7a0ZBOUJBMkcsdUJBK0JBM0c7O2tGQS9CQTJHLG9CQWdDSDNHOztrRkFoQ0cyRyxxQkFpQ0YzRzs7a0ZBakNFMkcscUJBa0NGM0c7O2tGQWxDRTJHLHFCQW1DRjNHOztrRkFuQ0UyRyxxQkFvQ0YzRzs7a0ZBcENFMkcsb0JBcUNIM0c7O2tGQXJDRzJHLG9CQXNDSDNHOztrRkF0Q0cyRyxvQkF1Q0gzRzs7a0ZBdkNHMkcsb0JBd0NIM0c7O2tGQXhDRzJHLCtCQTJDUTNHOztrRkEzQ1IyRyw4QkE0Q08zRzs7a0ZBNUNQMkcsK0JBNkNRM0c7O2tGQTdDUjJHLDhCQThDTzNHOztrRkE5Q1AyRyxnQ0FpRFMzRzs7a0ZBakRUMkcsdUJBbURBM0c7O2tGQW5EQTJHLHVCQW9EQTNHOztrRkFwREEyRyxzQkFBQUEsVUF1REQsQ0FBS3hHLElBQUwsR0F2REN3RyxVQXVEVyxDQUFLbkc7O2tGQXZEaEJtRyxzQkFBQUEsVUF3REQsQ0FBS3hHLElBQUwsR0F4REN3RyxVQXdEVyxDQUFLakc7O2tGQXhEaEJpRyxzQkFBQUEsVUF5REQsQ0FBS3hHLElBQUwsR0F6REN3RyxVQXlEVyxDQUFLaEc7O2tGQXpEaEJnRyx1QkFBQUEsVUEyREEsQ0FBS3RHLEtBQUwsR0EzREFzRyxVQTJEYSxDQUFLbkc7O2tGQTNEbEJtRyx1QkFBQUEsVUE0REEsQ0FBS3RHLEtBQUwsR0E1REFzRyxVQTREYSxDQUFLbEc7O2tGQTVEbEJrRyx1QkFBQUEsVUE2REEsQ0FBS3ZHLEtBQUwsR0E3REF1RyxVQTZEYSxDQUFLbkc7O2tGQTdEbEJtRyx1QkFBQUEsVUE4REEsQ0FBS3ZHLEtBQUwsR0E5REF1RyxVQThEYSxDQUFLbEc7Ozs7SUFlakN5Rzs7Ozs7RUFLRjtJQUFBOztJQUFBOztJQUNJOztJQURKOztJQUFBOztJQUFBOztJQUFBOztJQUVJLE1BQUtDLEVBQUwsR0FBVSxJQUFJakIseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFWO0lBQ0EsTUFBS29ILEVBQUwsR0FBVSxJQUFJbEIseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFWO0lBQ0EsTUFBS3FILEdBQUwsR0FBVyxJQUFJbkIseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFYO0lBQ0EsTUFBS3NILEdBQUwsR0FBVyxJQUFJcEIseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFYO0lBTEo7RUFNQzs7OztXQUNELGFBQUl1SCxDQUFKLEVBQWE7TUFDVCxPQUFPQSxDQUFDLEdBQUdBLENBQVg7SUFDSDs7O1dBR0QsOEJBQXFCQyxJQUFyQixFQUF1REMsRUFBdkQsRUFBdUZOLEVBQXZGLEVBQXFHQyxFQUFyRyxFQUFtSE0sS0FBbkgsRUFBZ0k7TUFDNUgsSUFBSWhJLENBQUMsR0FBRyxDQUFSO01BQ0EsSUFBSWlJLEdBQUcsR0FBRyxHQUFWO01BQUEsSUFBZUMsR0FBRyxHQUFHLEdBQXJCO01BQUEsSUFBMEJDLEVBQUUsR0FBRyxHQUEvQjtNQUFBLElBQW9DQyxFQUFFLEdBQUcsR0FBekM7TUFDQSxJQUFJQyxHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWVDLEdBQUcsR0FBRyxHQUFyQjtNQUFBLElBQTBCQyxFQUFFLEdBQUcsR0FBL0I7TUFBQSxJQUFvQ0MsRUFBRSxHQUFHLEdBQXpDO01BQ0EsSUFBSTdELEVBQUUsR0FBRyxHQUFUO01BQUEsSUFBY0MsRUFBRSxHQUFHLEdBQW5COztNQUVBLE9BQU81RSxDQUFDLEdBQUdnSSxLQUFYLEVBQWtCLEVBQUVoSSxDQUFwQixFQUF1QjtRQUNuQmlJLEdBQUcsSUFBSUgsSUFBSSxDQUFDOUgsQ0FBRCxDQUFKLENBQVE2SCxDQUFmO1FBQ0FLLEdBQUcsSUFBSUosSUFBSSxDQUFDOUgsQ0FBRCxDQUFKLENBQVF5SSxDQUFmO1FBQ0FKLEdBQUcsSUFBSU4sRUFBRSxDQUFDL0gsQ0FBRCxDQUFGLENBQU02SCxDQUFiO1FBQ0FTLEdBQUcsSUFBSVAsRUFBRSxDQUFDL0gsQ0FBRCxDQUFGLENBQU15SSxDQUFiO01BQ0g7O01BRURSLEdBQUcsSUFBSUQsS0FBUDtNQUFjRSxHQUFHLElBQUlGLEtBQVA7TUFDZEssR0FBRyxJQUFJTCxLQUFQO01BQWNNLEdBQUcsSUFBSU4sS0FBUDs7TUFFZCxLQUFLaEksQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZ0ksS0FBaEIsRUFBdUIsRUFBRWhJLENBQXpCLEVBQTRCO1FBQ3hCMkUsRUFBRSxHQUFHbUQsSUFBSSxDQUFDOUgsQ0FBRCxDQUFKLENBQVE2SCxDQUFSLEdBQVlJLEdBQWpCO1FBQ0FyRCxFQUFFLEdBQUdrRCxJQUFJLENBQUM5SCxDQUFELENBQUosQ0FBUXlJLENBQVIsR0FBWVAsR0FBakI7UUFDQUMsRUFBRSxJQUFJekUsSUFBSSxDQUFDZ0YsSUFBTCxDQUFVL0QsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBTjtRQUNBRCxFQUFFLEdBQUdvRCxFQUFFLENBQUMvSCxDQUFELENBQUYsQ0FBTTZILENBQU4sR0FBVVEsR0FBZjtRQUNBekQsRUFBRSxHQUFHbUQsRUFBRSxDQUFDL0gsQ0FBRCxDQUFGLENBQU15SSxDQUFOLEdBQVVILEdBQWY7UUFDQUMsRUFBRSxJQUFJN0UsSUFBSSxDQUFDZ0YsSUFBTCxDQUFVL0QsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBTjtNQUNIOztNQUVEdUQsRUFBRSxJQUFJSCxLQUFOO01BQWFPLEVBQUUsSUFBSVAsS0FBTjtNQUViSSxFQUFFLEdBQUcxRSxJQUFJLENBQUNpRixLQUFMLEdBQWFSLEVBQWxCO01BQXNCSyxFQUFFLEdBQUc5RSxJQUFJLENBQUNpRixLQUFMLEdBQWFKLEVBQWxCO01BRXRCZCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVcsRUFBaEI7TUFDQVgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUNRLEdBQUQsR0FBT0csRUFBZjtNQUNBWCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQ1MsR0FBRCxHQUFPRSxFQUFmO01BQ0FYLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxHQUFoQztNQUNBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsR0FBUjtNQUVBQyxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUWMsRUFBaEI7TUFDQWQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUNXLEdBQUQsR0FBT0csRUFBZjtNQUNBZCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQ1ksR0FBRCxHQUFPRSxFQUFmO01BQ0FkLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxHQUFoQztNQUNBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsR0FBUjtJQUNIOzs7V0FFRCwrQkFBc0JrQixNQUF0QixFQUEwRFosS0FBMUQsRUFBdUU7TUFDbkUsSUFBSW5GLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBV0MsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQjlDLENBQUMsR0FBSWdJLEtBQUssR0FBRyxDQUFULEdBQWMsQ0FBcEM7TUFDQSxJQUFJYSxHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWVDLEdBQUcsR0FBRyxHQUFyQjtNQUFBLElBQTBCQyxHQUFHLEdBQUcsR0FBaEM7TUFBQSxJQUFxQ0MsR0FBRyxHQUFHLEdBQTNDOztNQUlBLE9BQU9uRyxDQUFDLEdBQUc3QyxDQUFYLEVBQWMsRUFBRTZDLENBQWhCLEVBQW1CO1FBQ2ZnRyxHQUFHLEdBQUdELE1BQU0sQ0FBQy9GLENBQUQsQ0FBTixDQUFVZ0YsQ0FBVixHQUFjZSxNQUFNLENBQUM1SSxDQUFELENBQU4sQ0FBVTZILENBQTlCO1FBQ0FpQixHQUFHLEdBQUdGLE1BQU0sQ0FBQy9GLENBQUQsQ0FBTixDQUFVNEYsQ0FBVixHQUFjRyxNQUFNLENBQUM1SSxDQUFELENBQU4sQ0FBVXlJLENBQTlCOztRQUNBLEtBQUszRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdELENBQWhCLEVBQW1CLEVBQUVDLENBQXJCLEVBQXdCO1VBQ3BCaUcsR0FBRyxHQUFHSCxNQUFNLENBQUM5RixDQUFELENBQU4sQ0FBVStFLENBQVYsR0FBY2UsTUFBTSxDQUFDNUksQ0FBRCxDQUFOLENBQVU2SCxDQUE5QjtVQUNBbUIsR0FBRyxHQUFHSixNQUFNLENBQUM5RixDQUFELENBQU4sQ0FBVTJGLENBQVYsR0FBY0csTUFBTSxDQUFDNUksQ0FBRCxDQUFOLENBQVV5SSxDQUE5QjtVQUNBLElBQUkvRSxJQUFJLENBQUMwQyxHQUFMLENBQVMyQyxHQUFHLEdBQUdELEdBQU4sR0FBWUUsR0FBRyxHQUFHSCxHQUEzQixLQUFtQ3ZJLDJFQUFBLElBQTRCb0QsSUFBSSxDQUFDMEMsR0FBTCxDQUFTeUMsR0FBVCxJQUFnQm5GLElBQUksQ0FBQzBDLEdBQUwsQ0FBUzBDLEdBQVQsQ0FBaEIsR0FBZ0NwRixJQUFJLENBQUMwQyxHQUFMLENBQVMyQyxHQUFULENBQWhDLEdBQWdEckYsSUFBSSxDQUFDMEMsR0FBTCxDQUFTNEMsR0FBVCxDQUE1RSxDQUF2QyxFQUNJLE9BQU8sSUFBUDtRQUNQO01BQ0o7O01BQ0QsT0FBTyxLQUFQO0lBQ0g7Ozs7RUE1RXNCL0I7O0lBK0VyQmdDOzs7OztFQUNGO0lBQUE7O0lBQUE7RUFFQzs7OztXQUNELGFBQUluQixJQUFKLEVBQXNDQyxFQUF0QyxFQUFzRW1CLEtBQXRFLEVBQXVGbEIsS0FBdkYsRUFBb0c7TUFDaEcsSUFBSWhJLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZDLENBQUMsR0FBRyxDQUFmO01BQ0EsSUFBSXFFLEVBQUUsR0FBR2dDLEtBQUssQ0FBQy9HLElBQU4sR0FBYTdCLHdFQUF0QjtNQUNBLElBQUk2SSxFQUFFLEdBQUdELEtBQUssQ0FBQzNFLElBQWY7TUFBQSxJQUFxQjZFLEdBQUcsR0FBRyxLQUFLM0IsRUFBTCxDQUFRbEQsSUFBbkM7TUFBQSxJQUF5QzhFLEdBQUcsR0FBRyxLQUFLM0IsRUFBTCxDQUFRbkQsSUFBdkQ7TUFDQSxJQUFJK0UsR0FBSjtNQUFBLElBQVNDLEdBQVQ7TUFBQSxJQUFjQyxFQUFFLEdBQUcsR0FBbkI7TUFBQSxJQUF3QkMsRUFBRSxHQUFHLEdBQTdCOztNQUNBLElBQUlDLFFBQVEsR0FBRyxJQUFJbkQseURBQUosRUFBZjs7TUFDQSxJQUFJb0QsT0FBTyxHQUFHLElBQUkxQyxVQUFVLENBQUMyQyxNQUFmLEVBQWQ7O01BRUEsS0FBS0Msb0JBQUwsQ0FBMEIvQixJQUExQixFQUFnQ0MsRUFBaEMsRUFBb0NxQixHQUFwQyxFQUF5Q0MsR0FBekMsRUFBOENyQixLQUE5QztNQUVBLElBQUk4QixNQUFNLEdBQUcsS0FBS3BLLEtBQUwsQ0FBV2dHLFVBQVgsQ0FBdUIsSUFBSXNDLEtBQUosR0FBWSxDQUFiLElBQW1CLENBQXpDLENBQWI7TUFDQSxJQUFJK0IsTUFBTSxHQUFHLEtBQUtySyxLQUFMLENBQVdnRyxVQUFYLENBQXVCLElBQUlzQyxLQUFMLElBQWUsQ0FBckMsQ0FBYjtNQUVBLElBQUlnQyxJQUFJLEdBQUcsSUFBSXhELHlEQUFKLENBQWEsQ0FBYixFQUFnQixJQUFJd0IsS0FBcEIsRUFBMkJkLEVBQTNCLEVBQStCNEMsTUFBTSxDQUFDdkYsSUFBdEMsQ0FBWDtNQUNBLElBQUkwRixJQUFJLEdBQUcsSUFBSXpELHlEQUFKLENBQWEsQ0FBYixFQUFnQixJQUFJd0IsS0FBcEIsRUFBMkJkLEVBQTNCLEVBQStCNkMsTUFBTSxDQUFDeEYsSUFBdEMsQ0FBWDtNQUNBLElBQUkyRixFQUFFLEdBQUdGLElBQUksQ0FBQ3pGLElBQWQ7TUFBQSxJQUFvQjRGLEVBQUUsR0FBR0YsSUFBSSxDQUFDMUYsSUFBOUI7O01BRUEsT0FBT3ZFLENBQUMsR0FBR2dJLEtBQVgsRUFBa0IsRUFBRWhJLENBQXBCLEVBQXVCO1FBQ25Cc0osR0FBRyxHQUFHeEIsSUFBSSxDQUFDOUgsQ0FBRCxDQUFWO1FBQ0F1SixHQUFHLEdBQUd4QixFQUFFLENBQUMvSCxDQUFELENBQVI7UUFFQXdKLEVBQUUsR0FBR0osR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRSxHQUFHLENBQUN6QixDQUFiLEdBQWlCdUIsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRSxHQUFHLENBQUNiLENBQTlCLEdBQWtDVyxHQUFHLENBQUMsQ0FBRCxDQUExQztRQUNBSyxFQUFFLEdBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0UsR0FBRyxDQUFDekIsQ0FBYixHQUFpQnVCLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0UsR0FBRyxDQUFDYixDQUE5QixHQUFrQ1csR0FBRyxDQUFDLENBQUQsQ0FBMUM7UUFFQXZHLENBQUMsR0FBRzdDLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBWjtRQUNBa0ssRUFBRSxDQUFDckgsQ0FBRCxDQUFGLEdBQVEyRyxFQUFSLEVBQVlVLEVBQUUsQ0FBQ3JILENBQUMsR0FBRyxDQUFMLENBQUYsR0FBWTRHLEVBQXhCLEVBQTRCUyxFQUFFLENBQUNySCxDQUFDLEdBQUcsQ0FBTCxDQUFGLEdBQVksR0FBeEMsRUFBNkNxSCxFQUFFLENBQUNySCxDQUFDLEdBQUcsQ0FBTCxDQUFGLEdBQVksR0FBekQsRUFBOERxSCxFQUFFLENBQUNySCxDQUFDLEdBQUcsQ0FBTCxDQUFGLEdBQVksR0FBMUUsRUFBK0VxSCxFQUFFLENBQUNySCxDQUFDLEdBQUcsQ0FBTCxDQUFGLEdBQVksR0FBM0Y7UUFFQUEsQ0FBQyxJQUFJLENBQUw7UUFDQXFILEVBQUUsQ0FBQ3JILENBQUQsQ0FBRixHQUFRLEdBQVIsRUFBYXFILEVBQUUsQ0FBQ3JILENBQUMsR0FBRyxDQUFMLENBQUYsR0FBWSxHQUF6QixFQUE4QnFILEVBQUUsQ0FBQ3JILENBQUMsR0FBRyxDQUFMLENBQUYsR0FBWSxHQUExQyxFQUErQ3FILEVBQUUsQ0FBQ3JILENBQUMsR0FBRyxDQUFMLENBQUYsR0FBWTJHLEVBQTNELEVBQStEVSxFQUFFLENBQUNySCxDQUFDLEdBQUcsQ0FBTCxDQUFGLEdBQVk0RyxFQUEzRSxFQUErRVMsRUFBRSxDQUFDckgsQ0FBQyxHQUFHLENBQUwsQ0FBRixHQUFZLEdBQTNGO1FBRUFzSCxFQUFFLENBQUNuSyxDQUFDLElBQUksQ0FBTixDQUFGLEdBQWFxSixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLEdBQUcsQ0FBQzFCLENBQWIsR0FBaUJ3QixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLEdBQUcsQ0FBQ2QsQ0FBOUIsR0FBa0NZLEdBQUcsQ0FBQyxDQUFELENBQWxEO1FBQ0FjLEVBQUUsQ0FBQyxDQUFDbkssQ0FBQyxJQUFJLENBQU4sSUFBVyxDQUFaLENBQUYsR0FBbUJxSixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLEdBQUcsQ0FBQzFCLENBQWIsR0FBaUJ3QixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLEdBQUcsQ0FBQ2QsQ0FBOUIsR0FBa0NZLEdBQUcsQ0FBQyxDQUFELENBQXhEO01BQ0g7O01BRURLLFFBQVEsQ0FBQ1UsWUFBVCxDQUFzQixLQUFLekMsR0FBM0IsRUFBZ0NxQyxJQUFoQzs7TUFDQU4sUUFBUSxDQUFDVyxZQUFULENBQXNCLEtBQUt6QyxHQUEzQixFQUFnQ29DLElBQWhDLEVBQXNDQyxJQUF0Qzs7TUFFQU4sT0FBTyxDQUFDVyxRQUFSLENBQWlCLEtBQUszQyxHQUF0QixFQUEyQixLQUFLQyxHQUFoQzs7TUFFQXVCLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxLQUFLdkIsR0FBTCxDQUFTckQsSUFBVCxDQUFjLENBQWQsQ0FBUixFQUEwQjRFLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxLQUFLdkIsR0FBTCxDQUFTckQsSUFBVCxDQUFjLENBQWQsQ0FBbEMsRUFBb0Q0RSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsS0FBS3ZCLEdBQUwsQ0FBU3JELElBQVQsQ0FBYyxDQUFkLENBQTVEO01BQ0E0RSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsS0FBS3ZCLEdBQUwsQ0FBU3JELElBQVQsQ0FBYyxDQUFkLENBQVIsRUFBMEI0RSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsS0FBS3ZCLEdBQUwsQ0FBU3JELElBQVQsQ0FBYyxDQUFkLENBQWxDLEVBQW9ENEUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLEtBQUt2QixHQUFMLENBQVNyRCxJQUFULENBQWMsQ0FBZCxDQUE1RDtNQUNBNEUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLEdBQVIsRUFBYUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLEdBQXJCLEVBQTBCQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsR0FBbEM7O01BR0FPLFFBQVEsQ0FBQ2EsVUFBVCxDQUFvQixLQUFLN0MsRUFBekIsRUFBNkIsS0FBS0EsRUFBbEM7O01BQ0FnQyxRQUFRLENBQUNjLFlBQVQsQ0FBc0J0QixLQUF0QixFQUE2QixLQUFLeEIsRUFBbEMsRUFBc0N3QixLQUF0Qzs7TUFDQVEsUUFBUSxDQUFDYyxZQUFULENBQXNCdEIsS0FBdEIsRUFBNkJBLEtBQTdCLEVBQW9DLEtBQUt6QixFQUF6Qzs7TUFHQSxLQUFLL0gsS0FBTCxDQUFXc0csVUFBWCxDQUFzQjhELE1BQXRCO01BQ0EsS0FBS3BLLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0IrRCxNQUF0QjtNQUVBLE9BQU8sQ0FBUDtJQUNIOzs7O0VBekRrQnZDOztJQTREakJpRDs7Ozs7RUFHRjtJQUFBOztJQUFBOztJQUNJOztJQURKOztJQUFBOztJQUVJLE9BQUtDLElBQUwsR0FBWSxJQUFJbEUseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFaO0lBQ0EsT0FBS3FLLElBQUwsR0FBWSxJQUFJbkUseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFaO0lBSEo7RUFJQzs7OztXQUNELGFBQUl3SCxJQUFKLEVBQXNDQyxFQUF0QyxFQUFzRW1CLEtBQXRFLEVBQXVGbEIsS0FBdkYsRUFBb0c7TUFDaEcsSUFBSWhJLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZDLENBQUMsR0FBRyxDQUFmO01BQ0EsSUFBSXNHLEVBQUUsR0FBR0QsS0FBSyxDQUFDM0UsSUFBZjtNQUFBLElBQXFCNkUsR0FBRyxHQUFHLEtBQUszQixFQUFMLENBQVFsRCxJQUFuQztNQUFBLElBQXlDOEUsR0FBRyxHQUFHLEtBQUszQixFQUFMLENBQVFuRCxJQUF2RDtNQUNBLElBQUlxRyxHQUFHLEdBQUcsS0FBS0YsSUFBTCxDQUFVbkcsSUFBcEI7TUFBQSxJQUEwQnNHLEdBQUcsR0FBRyxLQUFLRixJQUFMLENBQVVwRyxJQUExQztNQUNBLElBQUlzRCxDQUFDLEdBQUcsR0FBUjtNQUFBLElBQWFZLENBQUMsR0FBRyxHQUFqQjtNQUFBLElBQXNCcUMsQ0FBQyxHQUFHLEdBQTFCO01BQUEsSUFBK0JDLENBQUMsR0FBRyxHQUFuQzs7TUFDQSxJQUFJcEIsT0FBTyxHQUFHLElBQUkxQyxVQUFVLENBQUMyQyxNQUFmLEVBQWQ7O01BQ0EsSUFBSUYsUUFBUSxHQUFHLElBQUluRCx5REFBSixFQUFmOztNQUdBLElBQUl5RSxHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWVDLEdBQUcsR0FBRyxHQUFyQjtNQUFBLElBQTBCQyxHQUFHLEdBQUcsR0FBaEM7TUFBQSxJQUFxQ0MsR0FBRyxHQUFHLEdBQTNDO01BQUEsSUFBZ0RDLEdBQUcsR0FBRyxHQUF0RDtNQUFBLElBQTJEQyxHQUFHLEdBQUcsR0FBakU7TUFBQSxJQUFzRUMsR0FBRyxHQUFHLEdBQTVFO01BQUEsSUFBaUZDLEdBQUcsR0FBRyxHQUF2Rjs7TUFFQSxPQUFPdkwsQ0FBQyxHQUFHZ0ksS0FBWCxFQUFrQixFQUFFaEksQ0FBcEIsRUFBdUI7UUFDbkJrTCxHQUFHLElBQUluRCxFQUFFLENBQUMvSCxDQUFELENBQUYsQ0FBTTZILENBQWI7UUFDQXNELEdBQUcsSUFBSXBELEVBQUUsQ0FBQy9ILENBQUQsQ0FBRixDQUFNeUksQ0FBYjtRQUNBNkMsR0FBRyxJQUFJeEQsSUFBSSxDQUFDOUgsQ0FBRCxDQUFKLENBQVE2SCxDQUFmO1FBQ0EwRCxHQUFHLElBQUl6RCxJQUFJLENBQUM5SCxDQUFELENBQUosQ0FBUXlJLENBQWY7TUFDSDs7TUFFRHlDLEdBQUcsSUFBSWxELEtBQVA7TUFBY21ELEdBQUcsSUFBSW5ELEtBQVA7TUFDZHNELEdBQUcsSUFBSXRELEtBQVA7TUFBY3VELEdBQUcsSUFBSXZELEtBQVA7O01BRWQsS0FBS2hJLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2dJLEtBQWhCLEVBQXVCLEVBQUVoSSxDQUF6QixFQUE0QjtRQUN4QmdMLEdBQUcsSUFBSXRILElBQUksQ0FBQzBDLEdBQUwsQ0FBUzJCLEVBQUUsQ0FBQy9ILENBQUQsQ0FBRixDQUFNNkgsQ0FBTixHQUFVcUQsR0FBbkIsQ0FBUDtRQUNBRCxHQUFHLElBQUl2SCxJQUFJLENBQUMwQyxHQUFMLENBQVMyQixFQUFFLENBQUMvSCxDQUFELENBQUYsQ0FBTXlJLENBQU4sR0FBVTBDLEdBQW5CLENBQVA7UUFDQUMsR0FBRyxJQUFJMUgsSUFBSSxDQUFDMEMsR0FBTCxDQUFTMEIsSUFBSSxDQUFDOUgsQ0FBRCxDQUFKLENBQVE2SCxDQUFSLEdBQVl5RCxHQUFyQixDQUFQO1FBQ0FELEdBQUcsSUFBSTNILElBQUksQ0FBQzBDLEdBQUwsQ0FBUzBCLElBQUksQ0FBQzlILENBQUQsQ0FBSixDQUFReUksQ0FBUixHQUFZOEMsR0FBckIsQ0FBUDtNQUNIOztNQUVELElBQUk3SCxJQUFJLENBQUMwQyxHQUFMLENBQVM0RSxHQUFULElBQWdCMUssMkVBQWhCLElBQ0dvRCxJQUFJLENBQUMwQyxHQUFMLENBQVM2RSxHQUFULElBQWdCM0ssMkVBRG5CLElBRUdvRCxJQUFJLENBQUMwQyxHQUFMLENBQVNnRixHQUFULElBQWdCOUssMkVBRm5CLElBR0dvRCxJQUFJLENBQUMwQyxHQUFMLENBQVNpRixHQUFULElBQWdCL0ssMkVBSHZCLEVBR2lELE9BQU8sQ0FBUDtNQUVqRDBLLEdBQUcsR0FBR2hELEtBQUssR0FBR2dELEdBQWQ7TUFBbUJDLEdBQUcsR0FBR2pELEtBQUssR0FBR2lELEdBQWQ7TUFDbkJHLEdBQUcsR0FBR3BELEtBQUssR0FBR29ELEdBQWQ7TUFBbUJDLEdBQUcsR0FBR3JELEtBQUssR0FBR3FELEdBQWQ7TUFFbkJqQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNnQyxHQUFUO01BQWNoQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUFZQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBQ2tDLEdBQUQsR0FBT0YsR0FBaEI7TUFDMUJoQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUFZQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNpQyxHQUFUO01BQWNqQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBQ21DLEdBQUQsR0FBT0YsR0FBaEI7TUFDMUJqQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUFZQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUFZQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUV4QkMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLE1BQU0yQixHQUFmO01BQW9CM0IsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7TUFBWUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTNkIsR0FBVDtNQUNoQzdCLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO01BQVlBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxNQUFNNEIsR0FBZjtNQUFvQjVCLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUzhCLEdBQVQ7TUFDaEM5QixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUFZQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUFZQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtNQUl4QnJKLENBQUMsR0FBRyxFQUFKOztNQUNBLE9BQU8sRUFBRUEsQ0FBRixJQUFPLENBQWQsRUFBaUI7UUFDYjRLLEdBQUcsQ0FBQzVLLENBQUQsQ0FBSCxHQUFTLEdBQVQ7TUFDSDs7TUFDRCxLQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdnSSxLQUFoQixFQUF1QixFQUFFaEksQ0FBekIsRUFBNEI7UUFDeEI2SCxDQUFDLEdBQUcsQ0FBQ0UsRUFBRSxDQUFDL0gsQ0FBRCxDQUFGLENBQU02SCxDQUFOLEdBQVVxRCxHQUFYLElBQWtCRixHQUF0QjtRQUNBdkMsQ0FBQyxHQUFHLENBQUNWLEVBQUUsQ0FBQy9ILENBQUQsQ0FBRixDQUFNeUksQ0FBTixHQUFVMEMsR0FBWCxJQUFrQkYsR0FBdEI7UUFDQUgsQ0FBQyxHQUFHLENBQUNoRCxJQUFJLENBQUM5SCxDQUFELENBQUosQ0FBUTZILENBQVIsR0FBWXlELEdBQWIsSUFBb0JGLEdBQXhCO1FBQ0FMLENBQUMsR0FBRyxDQUFDakQsSUFBSSxDQUFDOUgsQ0FBRCxDQUFKLENBQVF5SSxDQUFSLEdBQVk4QyxHQUFiLElBQW9CRixHQUF4QjtRQUVBVCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVFLENBQUMsR0FBR0EsQ0FBZDtRQUNBRixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVFLENBQUMsR0FBR0MsQ0FBZDtRQUNBSCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVFLENBQVY7UUFFQUYsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFVRSxDQUFDLEdBQUcsQ0FBQ2pELENBQUwsR0FBU2lELENBQW5CO1FBQ0FGLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVUUsQ0FBQyxHQUFHLENBQUNqRCxDQUFMLEdBQVNrRCxDQUFuQjtRQUNBSCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVFLENBQUMsR0FBRyxDQUFDakQsQ0FBZjtRQUNBK0MsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXRyxDQUFDLEdBQUdBLENBQWY7UUFDQUgsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXRyxDQUFYO1FBRUFILEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBV0csQ0FBQyxHQUFHLENBQUNsRCxDQUFMLEdBQVNpRCxDQUFwQjtRQUNBRixHQUFHLENBQUMsRUFBRCxDQUFILElBQVdHLENBQUMsR0FBRyxDQUFDbEQsQ0FBTCxHQUFTa0QsQ0FBcEI7UUFDQUgsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXRyxDQUFDLEdBQUcsQ0FBQ2xELENBQWhCO1FBQ0ErQyxHQUFHLENBQUMsRUFBRCxDQUFILElBQVcsR0FBWDtRQUVBQSxHQUFHLENBQUMsRUFBRCxDQUFILElBQVcsQ0FBQy9DLENBQUQsR0FBS2lELENBQWhCO1FBQ0FGLEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBVyxDQUFDL0MsQ0FBRCxHQUFLa0QsQ0FBaEI7UUFDQUgsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXLENBQUMvQyxDQUFaO1FBQ0ErQyxHQUFHLENBQUMsRUFBRCxDQUFILElBQVdFLENBQUMsR0FBR0EsQ0FBZjtRQUNBRixHQUFHLENBQUMsRUFBRCxDQUFILElBQVdFLENBQUMsR0FBR0MsQ0FBZjtRQUNBSCxHQUFHLENBQUMsRUFBRCxDQUFILElBQVdFLENBQVg7UUFDQUYsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXRSxDQUFDLEdBQUcsQ0FBQ3JDLENBQUwsR0FBU3FDLENBQXBCO1FBQ0FGLEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBV0UsQ0FBQyxHQUFHLENBQUNyQyxDQUFMLEdBQVNzQyxDQUFwQjtRQUNBSCxHQUFHLENBQUMsRUFBRCxDQUFILElBQVdFLENBQUMsR0FBRyxDQUFDckMsQ0FBaEI7UUFDQW1DLEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBV0csQ0FBQyxHQUFHQSxDQUFmO1FBQ0FILEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBV0csQ0FBWDtRQUNBSCxHQUFHLENBQUMsRUFBRCxDQUFILElBQVdHLENBQUMsR0FBRyxDQUFDdEMsQ0FBTCxHQUFTcUMsQ0FBcEI7UUFDQUYsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXRyxDQUFDLEdBQUcsQ0FBQ3RDLENBQUwsR0FBU3NDLENBQXBCO1FBQ0FILEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBV0csQ0FBQyxHQUFHLENBQUN0QyxDQUFoQjtRQUNBbUMsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXLEdBQVg7UUFDQUEsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXLENBQUNuQyxDQUFELEdBQUtxQyxDQUFoQjtRQUNBRixHQUFHLENBQUMsRUFBRCxDQUFILElBQVcsQ0FBQ25DLENBQUQsR0FBS3NDLENBQWhCO1FBQ0FILEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBVyxDQUFDbkMsQ0FBWjtRQUNBbUMsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXLENBQUMvQyxDQUFELEdBQUtpRCxDQUFMLEdBQVMsQ0FBQ2pELENBQVYsR0FBY2lELENBQWQsR0FBa0IsQ0FBQ3JDLENBQUQsR0FBS3FDLENBQUwsR0FBUyxDQUFDckMsQ0FBVixHQUFjcUMsQ0FBM0M7UUFDQUYsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXLENBQUMvQyxDQUFELEdBQUtpRCxDQUFMLEdBQVMsQ0FBQ2pELENBQVYsR0FBY2tELENBQWQsR0FBa0IsQ0FBQ3RDLENBQUQsR0FBS3FDLENBQUwsR0FBUyxDQUFDckMsQ0FBVixHQUFjc0MsQ0FBM0M7UUFDQUgsR0FBRyxDQUFDLEVBQUQsQ0FBSCxJQUFXLENBQUMvQyxDQUFELEdBQUtpRCxDQUFMLEdBQVMsQ0FBQ2pELENBQVYsR0FBYyxDQUFDWSxDQUFELEdBQUtxQyxDQUFMLEdBQVMsQ0FBQ3JDLENBQW5DO1FBQ0FtQyxHQUFHLENBQUMsRUFBRCxDQUFILElBQVcsQ0FBQy9DLENBQUQsR0FBS2tELENBQUwsR0FBUyxDQUFDbEQsQ0FBVixHQUFja0QsQ0FBZCxHQUFrQixDQUFDdEMsQ0FBRCxHQUFLc0MsQ0FBTCxHQUFTLENBQUN0QyxDQUFWLEdBQWNzQyxDQUEzQztRQUNBSCxHQUFHLENBQUMsRUFBRCxDQUFILElBQVcsQ0FBQy9DLENBQUQsR0FBS2tELENBQUwsR0FBUyxDQUFDbEQsQ0FBVixHQUFjLENBQUNZLENBQUQsR0FBS3NDLENBQUwsR0FBUyxDQUFDdEMsQ0FBbkM7UUFDQW1DLEdBQUcsQ0FBQyxFQUFELENBQUgsSUFBVyxDQUFDL0MsQ0FBRCxHQUFLLENBQUNBLENBQU4sR0FBVSxDQUFDWSxDQUFELEdBQUssQ0FBQ0EsQ0FBM0I7TUFDSDs7TUFJRCxLQUFLekksQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLENBQWhCLEVBQW1CLEVBQUVBLENBQXJCLEVBQXdCO1FBQ3BCLEtBQUs2QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc3QyxDQUFoQixFQUFtQixFQUFFNkMsQ0FBckI7VUFDSStILEdBQUcsQ0FBQzVLLENBQUMsR0FBRyxDQUFKLEdBQVE2QyxDQUFULENBQUgsR0FBaUIrSCxHQUFHLENBQUMvSCxDQUFDLEdBQUcsQ0FBSixHQUFRN0MsQ0FBVCxDQUFwQjtRQURKO01BRUg7O01BRUQySixPQUFPLENBQUM2QixPQUFSLENBQWdCLEtBQUtkLElBQXJCLEVBQTJCLEtBQUtDLElBQWhDOztNQUVBeEIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRMEIsR0FBRyxDQUFDLEVBQUQsQ0FBWCxFQUFpQjFCLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUTBCLEdBQUcsQ0FBQyxFQUFELENBQTVCLEVBQWtDMUIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRMEIsR0FBRyxDQUFDLEVBQUQsQ0FBN0M7TUFDQTFCLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUTBCLEdBQUcsQ0FBQyxFQUFELENBQVgsRUFBaUIxQixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEwQixHQUFHLENBQUMsRUFBRCxDQUE1QixFQUFrQzFCLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUTBCLEdBQUcsQ0FBQyxFQUFELENBQTdDO01BQ0ExQixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEwQixHQUFHLENBQUMsRUFBRCxDQUFYLEVBQWlCMUIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRMEIsR0FBRyxDQUFDLEVBQUQsQ0FBNUIsRUFBa0MxQixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEwQixHQUFHLENBQUMsRUFBRCxDQUE3Qzs7TUFHQW5CLFFBQVEsQ0FBQ2MsWUFBVCxDQUFzQnRCLEtBQXRCLEVBQTZCLEtBQUt4QixFQUFsQyxFQUFzQ3dCLEtBQXRDOztNQUNBUSxRQUFRLENBQUNjLFlBQVQsQ0FBc0J0QixLQUF0QixFQUE2QkEsS0FBN0IsRUFBb0MsS0FBS3pCLEVBQXpDOztNQUdBSSxDQUFDLEdBQUcsTUFBTXNCLEVBQUUsQ0FBQyxDQUFELENBQVo7TUFDQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixJQUFTdEIsQ0FBVDtNQUFZc0IsRUFBRSxDQUFDLENBQUQsQ0FBRixJQUFTdEIsQ0FBVDtNQUFZc0IsRUFBRSxDQUFDLENBQUQsQ0FBRixJQUFTdEIsQ0FBVDtNQUN4QnNCLEVBQUUsQ0FBQyxDQUFELENBQUYsSUFBU3RCLENBQVQ7TUFBWXNCLEVBQUUsQ0FBQyxDQUFELENBQUYsSUFBU3RCLENBQVQ7TUFBWXNCLEVBQUUsQ0FBQyxDQUFELENBQUYsSUFBU3RCLENBQVQ7TUFDeEJzQixFQUFFLENBQUMsQ0FBRCxDQUFGLElBQVN0QixDQUFUO01BQVlzQixFQUFFLENBQUMsQ0FBRCxDQUFGLElBQVN0QixDQUFUO01BQVlzQixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsR0FBUjtNQUV4QixPQUFPLENBQVA7SUFDSDs7O1dBQ0QsZUFBTXJCLElBQU4sRUFBd0NDLEVBQXhDLEVBQXdFbUIsS0FBeEUsRUFBeUZ1QyxHQUF6RixFQUF5SHpELEtBQXpILEVBQXNJO01BQ2xJLElBQUloSSxDQUFDLEdBQUcsQ0FBUjtNQUNBLElBQUlzSixHQUFKO01BQUEsSUFBU0MsR0FBVDtNQUFBLElBQWNtQyxFQUFFLEdBQUcsR0FBbkI7TUFBQSxJQUF3Qi9HLEVBQUUsR0FBRyxHQUE3QjtNQUFBLElBQWtDQyxFQUFFLEdBQUcsR0FBdkM7TUFDQSxJQUFJK0csQ0FBQyxHQUFHekMsS0FBSyxDQUFDM0UsSUFBZDs7TUFFQSxPQUFPdkUsQ0FBQyxHQUFHZ0ksS0FBWCxFQUFrQixFQUFFaEksQ0FBcEIsRUFBdUI7UUFDbkJzSixHQUFHLEdBQUd4QixJQUFJLENBQUM5SCxDQUFELENBQVY7UUFDQXVKLEdBQUcsR0FBR3hCLEVBQUUsQ0FBQy9ILENBQUQsQ0FBUjtRQUVBMEwsRUFBRSxHQUFHLE9BQU9DLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT3JDLEdBQUcsQ0FBQ3pCLENBQVgsR0FBZThELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT3JDLEdBQUcsQ0FBQ2IsQ0FBMUIsR0FBOEIsR0FBckMsQ0FBTDtRQUNBOUQsRUFBRSxHQUFHLENBQUNnSCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9yQyxHQUFHLENBQUN6QixDQUFYLEdBQWU4RCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9yQyxHQUFHLENBQUNiLENBQTFCLEdBQThCa0QsQ0FBQyxDQUFDLENBQUQsQ0FBaEMsSUFBdUNELEVBQXZDLEdBQTRDbkMsR0FBRyxDQUFDMUIsQ0FBckQ7UUFDQWpELEVBQUUsR0FBRyxDQUFDK0csQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPckMsR0FBRyxDQUFDekIsQ0FBWCxHQUFlOEQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPckMsR0FBRyxDQUFDYixDQUExQixHQUE4QmtELENBQUMsQ0FBQyxDQUFELENBQWhDLElBQXVDRCxFQUF2QyxHQUE0Q25DLEdBQUcsQ0FBQ2QsQ0FBckQ7UUFDQWdELEdBQUcsQ0FBQ3pMLENBQUQsQ0FBSCxHQUFVMkUsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekI7TUFDSDtJQUNKOzs7V0FDRCxzQkFBYWtELElBQWIsRUFBK0NDLEVBQS9DLEVBQStFQyxLQUEvRSxFQUE0RjtNQUt4RixJQUFJMEIsUUFBUSxHQUFHLElBQUluRCx5REFBSixFQUFmOztNQUNBLElBQUl5QixLQUFLLElBQUksQ0FBYixFQUFnQjtRQUNaLElBQUk0RCxRQUFRLEdBQUcsQ0FBZjtRQUVBLElBQUlDLEdBQUcsR0FBRy9ELElBQUksQ0FBQyxDQUFELENBQWQ7UUFBQSxJQUFtQmdFLEdBQUcsR0FBR2hFLElBQUksQ0FBQyxDQUFELENBQTdCO1FBQUEsSUFBa0NpRSxHQUFHLEdBQUdqRSxJQUFJLENBQUMsQ0FBRCxDQUE1QztRQUFBLElBQWlEa0UsR0FBRyxHQUFHbEUsSUFBSSxDQUFDLENBQUQsQ0FBM0Q7UUFDQSxJQUFJbUUsR0FBRyxHQUFHbEUsRUFBRSxDQUFDLENBQUQsQ0FBWjtRQUFBLElBQWlCbUUsR0FBRyxHQUFHbkUsRUFBRSxDQUFDLENBQUQsQ0FBekI7UUFBQSxJQUE4Qm9FLEdBQUcsR0FBR3BFLEVBQUUsQ0FBQyxDQUFELENBQXRDO1FBQUEsSUFBMkNxRSxHQUFHLEdBQUdyRSxFQUFFLENBQUMsQ0FBRCxDQUFuRDtRQUdBLElBQUlzRSxHQUFHLEdBQUdSLEdBQUcsQ0FBQ2hFLENBQWQ7UUFBQSxJQUFpQnlFLEdBQUcsR0FBR1QsR0FBRyxDQUFDcEQsQ0FBM0I7UUFBQSxJQUE4QjhELEdBQUcsR0FBRyxHQUFwQztRQUNBLElBQUlDLEdBQUcsR0FBR1YsR0FBRyxDQUFDakUsQ0FBZDtRQUFBLElBQWlCNEUsR0FBRyxHQUFHWCxHQUFHLENBQUNyRCxDQUEzQjtRQUFBLElBQThCaUUsR0FBRyxHQUFHLEdBQXBDO1FBQ0EsSUFBSUMsR0FBRyxHQUFHWixHQUFHLENBQUNsRSxDQUFkO1FBQUEsSUFBaUIrRSxHQUFHLEdBQUdiLEdBQUcsQ0FBQ3RELENBQTNCO1FBQUEsSUFBOEJvRSxHQUFHLEdBQUcsR0FBcEM7UUFFQSxJQUFJQyxHQUFHLEdBQUdiLEdBQUcsQ0FBQ3BFLENBQWQ7UUFBQSxJQUFpQmtGLEdBQUcsR0FBR2QsR0FBRyxDQUFDeEQsQ0FBM0I7UUFBQSxJQUE4QnVFLEdBQUcsR0FBRyxHQUFwQztRQUNBLElBQUlDLEdBQUcsR0FBR2YsR0FBRyxDQUFDckUsQ0FBZDtRQUFBLElBQWlCcUYsR0FBRyxHQUFHaEIsR0FBRyxDQUFDekQsQ0FBM0I7UUFBQSxJQUE4QjBFLEdBQUcsR0FBRyxHQUFwQztRQUNBLElBQUlDLEdBQUcsR0FBR2pCLEdBQUcsQ0FBQ3RFLENBQWQ7UUFBQSxJQUFpQndGLEdBQUcsR0FBR2xCLEdBQUcsQ0FBQzFELENBQTNCO1FBQUEsSUFBOEI2RSxHQUFHLEdBQUcsR0FBcEM7O1FBRUEsSUFBSUMsSUFBSSxHQUFHN0QsUUFBUSxDQUFDOEQsZUFBVCxDQUF5Qm5CLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ0MsR0FBbkMsRUFBd0NDLEdBQXhDLEVBQTZDQyxHQUE3QyxFQUFrREMsR0FBbEQsRUFBdURDLEdBQXZELEVBQTREQyxHQUE1RCxFQUFpRUMsR0FBakUsQ0FBWDs7UUFDQSxJQUFJWSxJQUFJLEdBQUcvRCxRQUFRLENBQUM4RCxlQUFULENBQXlCVixHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNDLEdBQW5DLEVBQXdDQyxHQUF4QyxFQUE2Q0MsR0FBN0MsRUFBa0RDLEdBQWxELEVBQXVEQyxHQUF2RCxFQUE0REMsR0FBNUQsRUFBaUVDLEdBQWpFLENBQVg7O1FBRUEsSUFBSUMsSUFBSSxHQUFHRSxJQUFQLEdBQWMsQ0FBbEIsRUFBcUI3QixRQUFRO1FBRzdCUyxHQUFHLEdBQUdQLEdBQUcsQ0FBQ2pFLENBQVYsRUFBYXlFLEdBQUcsR0FBR1IsR0FBRyxDQUFDckQsQ0FBdkI7UUFDQStELEdBQUcsR0FBR1QsR0FBRyxDQUFDbEUsQ0FBVixFQUFhNEUsR0FBRyxHQUFHVixHQUFHLENBQUN0RCxDQUF2QjtRQUNBa0UsR0FBRyxHQUFHWCxHQUFHLENBQUNuRSxDQUFWLEVBQWErRSxHQUFHLEdBQUdaLEdBQUcsQ0FBQ3ZELENBQXZCO1FBRUFxRSxHQUFHLEdBQUdaLEdBQUcsQ0FBQ3JFLENBQVYsRUFBYWtGLEdBQUcsR0FBR2IsR0FBRyxDQUFDekQsQ0FBdkI7UUFDQXdFLEdBQUcsR0FBR2QsR0FBRyxDQUFDdEUsQ0FBVixFQUFhcUYsR0FBRyxHQUFHZixHQUFHLENBQUMxRCxDQUF2QjtRQUNBMkUsR0FBRyxHQUFHaEIsR0FBRyxDQUFDdkUsQ0FBVixFQUFhd0YsR0FBRyxHQUFHakIsR0FBRyxDQUFDM0QsQ0FBdkI7UUFFQThFLElBQUksR0FBRzdELFFBQVEsQ0FBQzhELGVBQVQsQ0FBeUJuQixHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNDLEdBQW5DLEVBQXdDQyxHQUF4QyxFQUE2Q0MsR0FBN0MsRUFBa0RDLEdBQWxELEVBQXVEQyxHQUF2RCxFQUE0REMsR0FBNUQsRUFBaUVDLEdBQWpFLENBQVA7UUFDQVksSUFBSSxHQUFHL0QsUUFBUSxDQUFDOEQsZUFBVCxDQUF5QlYsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DQyxHQUFuQyxFQUF3Q0MsR0FBeEMsRUFBNkNDLEdBQTdDLEVBQWtEQyxHQUFsRCxFQUF1REMsR0FBdkQsRUFBNERDLEdBQTVELEVBQWlFQyxHQUFqRSxDQUFQO1FBRUEsSUFBSUMsSUFBSSxHQUFHRSxJQUFQLEdBQWMsQ0FBbEIsRUFBcUI3QixRQUFRO1FBRzdCUyxHQUFHLEdBQUdSLEdBQUcsQ0FBQ2hFLENBQVYsRUFBYXlFLEdBQUcsR0FBR1QsR0FBRyxDQUFDcEQsQ0FBdkI7UUFDQStELEdBQUcsR0FBR1QsR0FBRyxDQUFDbEUsQ0FBVixFQUFhNEUsR0FBRyxHQUFHVixHQUFHLENBQUN0RCxDQUF2QjtRQUNBa0UsR0FBRyxHQUFHWCxHQUFHLENBQUNuRSxDQUFWLEVBQWErRSxHQUFHLEdBQUdaLEdBQUcsQ0FBQ3ZELENBQXZCO1FBRUFxRSxHQUFHLEdBQUdiLEdBQUcsQ0FBQ3BFLENBQVYsRUFBYWtGLEdBQUcsR0FBR2QsR0FBRyxDQUFDeEQsQ0FBdkI7UUFDQXdFLEdBQUcsR0FBR2QsR0FBRyxDQUFDdEUsQ0FBVixFQUFhcUYsR0FBRyxHQUFHZixHQUFHLENBQUMxRCxDQUF2QjtRQUNBMkUsR0FBRyxHQUFHaEIsR0FBRyxDQUFDdkUsQ0FBVixFQUFhd0YsR0FBRyxHQUFHakIsR0FBRyxDQUFDM0QsQ0FBdkI7UUFFQThFLElBQUksR0FBRzdELFFBQVEsQ0FBQzhELGVBQVQsQ0FBeUJuQixHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNDLEdBQW5DLEVBQXdDQyxHQUF4QyxFQUE2Q0MsR0FBN0MsRUFBa0RDLEdBQWxELEVBQXVEQyxHQUF2RCxFQUE0REMsR0FBNUQsRUFBaUVDLEdBQWpFLENBQVA7UUFDQVksSUFBSSxHQUFHL0QsUUFBUSxDQUFDOEQsZUFBVCxDQUF5QlYsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DQyxHQUFuQyxFQUF3Q0MsR0FBeEMsRUFBNkNDLEdBQTdDLEVBQWtEQyxHQUFsRCxFQUF1REMsR0FBdkQsRUFBNERDLEdBQTVELEVBQWlFQyxHQUFqRSxDQUFQO1FBRUEsSUFBSUMsSUFBSSxHQUFHRSxJQUFQLEdBQWMsQ0FBbEIsRUFBcUI3QixRQUFRO1FBRzdCUyxHQUFHLEdBQUdSLEdBQUcsQ0FBQ2hFLENBQVYsRUFBYXlFLEdBQUcsR0FBR1QsR0FBRyxDQUFDcEQsQ0FBdkI7UUFDQStELEdBQUcsR0FBR1YsR0FBRyxDQUFDakUsQ0FBVixFQUFhNEUsR0FBRyxHQUFHWCxHQUFHLENBQUNyRCxDQUF2QjtRQUNBa0UsR0FBRyxHQUFHWCxHQUFHLENBQUNuRSxDQUFWLEVBQWErRSxHQUFHLEdBQUdaLEdBQUcsQ0FBQ3ZELENBQXZCO1FBRUFxRSxHQUFHLEdBQUdiLEdBQUcsQ0FBQ3BFLENBQVYsRUFBYWtGLEdBQUcsR0FBR2QsR0FBRyxDQUFDeEQsQ0FBdkI7UUFDQXdFLEdBQUcsR0FBR2YsR0FBRyxDQUFDckUsQ0FBVixFQUFhcUYsR0FBRyxHQUFHaEIsR0FBRyxDQUFDekQsQ0FBdkI7UUFDQTJFLEdBQUcsR0FBR2hCLEdBQUcsQ0FBQ3ZFLENBQVYsRUFBYXdGLEdBQUcsR0FBR2pCLEdBQUcsQ0FBQzNELENBQXZCO1FBRUE4RSxJQUFJLEdBQUc3RCxRQUFRLENBQUM4RCxlQUFULENBQXlCbkIsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DQyxHQUFuQyxFQUF3Q0MsR0FBeEMsRUFBNkNDLEdBQTdDLEVBQWtEQyxHQUFsRCxFQUF1REMsR0FBdkQsRUFBNERDLEdBQTVELEVBQWlFQyxHQUFqRSxDQUFQO1FBQ0FZLElBQUksR0FBRy9ELFFBQVEsQ0FBQzhELGVBQVQsQ0FBeUJWLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ0MsR0FBbkMsRUFBd0NDLEdBQXhDLEVBQTZDQyxHQUE3QyxFQUFrREMsR0FBbEQsRUFBdURDLEdBQXZELEVBQTREQyxHQUE1RCxFQUFpRUMsR0FBakUsQ0FBUDtRQUVBLElBQUlDLElBQUksR0FBR0UsSUFBUCxHQUFjLENBQWxCLEVBQXFCN0IsUUFBUTs7UUFFN0IsSUFBSUEsUUFBUSxJQUFJLENBQVosSUFBaUJBLFFBQVEsSUFBSSxDQUFqQyxFQUFvQztVQUNoQyxPQUFPLEtBQVA7UUFDSDtNQUNKOztNQUNELE9BQU8sSUFBUDtJQUNIOzs7O0VBMU5zQnBFOztBQTZOM0JQLFVBQVUsQ0FBQ3ZILEtBQVgsR0FBbUJBLCtDQUFuQjs7QUFFQXVILFVBQVUsQ0FBQ3lHLFNBQVg7RUFBQTs7RUFBQTs7RUFJSSxtQkFBWUMsTUFBWixFQUEwQjtJQUFBOztJQUFBOztJQUN0Qjs7SUFEc0I7O0lBQUE7O0lBQUE7O0lBRXRCLE9BQUtBLE1BQUwsR0FBY0EsTUFBTSxHQUFHLENBQXZCO0lBQ0EsT0FBS3BKLElBQUwsR0FBWSxJQUFJcUosS0FBSixDQUFVRCxNQUFWLENBQVo7O0lBQ0EsSUFBSUUsUUFBUSxHQUFHLElBQUk1RyxVQUFVLENBQUM2RyxPQUFmLEVBQWY7O0lBQ0EsT0FBS0MsT0FBTCxHQUFlRixRQUFRLENBQUNFLE9BQXhCO0lBTHNCO0VBTXpCOztFQVZMO0lBQUE7SUFBQSxPQVdJLGtCQUFTQyxPQUFULEVBQTBCQyxPQUExQixFQUEyQ2pNLFNBQTNDLEVBQTREO01BQ3hELElBQUloQyxDQUFDLEdBQUcsS0FBSzJOLE1BQWI7O01BQ0EsT0FBTyxFQUFFM04sQ0FBRixJQUFPLENBQWQsRUFBaUI7UUFDYixLQUFLdUUsSUFBTCxDQUFVdkUsQ0FBVixJQUFlLElBQUl3Ryx5REFBSixDQUFhd0gsT0FBTyxJQUFJaE8sQ0FBeEIsRUFBMkJpTyxPQUFPLElBQUlqTyxDQUF0QyxFQUF5Q2dDLFNBQXpDLENBQWY7TUFDSDtJQUNKO0VBaEJMO0lBQUE7SUFBQSxPQWlCSSxlQUFNa00sS0FBTixFQUF1QkMsZ0JBQXZCLEVBQWdEO01BQzVDLElBQUksT0FBT0EsZ0JBQVAsS0FBNEIsV0FBaEMsRUFBNkM7UUFBRUEsZ0JBQWdCLEdBQUcsSUFBbkI7TUFBMEI7O01BRXpFLElBQUluTyxDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVdtRixDQUFDLEdBQUcrSSxLQUFmO01BQUEsSUFBc0I5SSxDQUFDLEdBQVEsS0FBS2IsSUFBTCxDQUFVLENBQVYsQ0FBL0I7O01BQ0EsSUFBSSxDQUFDNEosZ0JBQUwsRUFBdUI7UUFDbkIsSUFBSXRMLENBQUMsR0FBR3FMLEtBQUssQ0FBQzdKLElBQU4sR0FBYTZKLEtBQUssQ0FBQzVKLElBQTNCOztRQUNBLE9BQU8sRUFBRXpCLENBQUYsSUFBTyxDQUFkLEVBQWlCO1VBQ2J1QyxDQUFDLENBQUNiLElBQUYsQ0FBTzFCLENBQVAsSUFBWXFMLEtBQUssQ0FBQzNKLElBQU4sQ0FBVzFCLENBQVgsQ0FBWjtRQUNIO01BQ0o7O01BQ0R1QyxDQUFDLEdBQUcsS0FBS2IsSUFBTCxDQUFVLENBQVYsQ0FBSjtNQUNBLEtBQUt3SixPQUFMLENBQWE1SSxDQUFiLEVBQWdCQyxDQUFoQjs7TUFDQSxPQUFPcEYsQ0FBQyxHQUFHLEtBQUsyTixNQUFoQixFQUF3QixFQUFFM04sQ0FBMUIsRUFBNkI7UUFDekJtRixDQUFDLEdBQUdDLENBQUo7UUFDQUEsQ0FBQyxHQUFHLEtBQUtiLElBQUwsQ0FBVXZFLENBQVYsQ0FBSjtRQUNBLEtBQUsrTixPQUFMLENBQWE1SSxDQUFiLEVBQWdCQyxDQUFoQjtNQUNIO0lBQ0o7RUFsQ0w7O0VBQUE7QUFBQSxFQUErQzZCLFVBQS9DOztBQXFDQUEsVUFBVSxDQUFDVCxRQUFYLEdBQXNCQSx5REFBdEI7QUFFQVMsVUFBVSxDQUFDUixVQUFYLEdBQXdCQSwrREFBeEI7O0FBRUFRLFVBQVUsQ0FBQzZHLE9BQVg7RUFBQTs7RUFBQTs7RUFDSTtJQUFBOztJQUFBO0VBRUM7O0VBSEw7SUFBQTtJQUFBLE9BSUksbUJBQVVoSyxHQUFWLEVBQXlCdEIsQ0FBekIsRUFBb0NDLENBQXBDLEVBQStDc0IsR0FBL0MsRUFBeUhxSyxJQUF6SCxFQUFxSTtNQUVqSSxJQUFJLE9BQU9BLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7UUFBRUEsSUFBSSxHQUFHOU4sbUZBQVA7TUFBMEM7O01BQzdFLElBQUl1SCxDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVdZLENBQUMsR0FBRyxDQUFmO01BQUEsSUFBa0J6SSxDQUFDLEdBQUcsQ0FBdEI7TUFBQSxJQUF5QjZDLENBQUMsR0FBRyxDQUE3QjtNQUFBLElBQWdDd0wsRUFBRSxHQUFHLENBQXJDO01BQUEsSUFBd0NDLEVBQUUsR0FBRyxDQUE3QztNQUNBLElBQUlDLE9BQU8sR0FBRyxJQUFkO01BQUEsSUFBb0JDLE9BQU8sR0FBRyxJQUE5QjtNQUFBLElBQW9DQyxPQUFPLEdBQUcsSUFBOUM7TUFBQSxJQUFvREMsRUFBRSxHQUFHLENBQXpEOztNQUVBLElBQUlOLElBQUksSUFBSTlOLG1GQUFSLElBQTRDOE4sSUFBSSxJQUFJOU4sa0ZBQXhELEVBQXlGO1FBQ3JGaU8sT0FBTyxHQUFHLElBQVY7UUFDQUUsT0FBTyxHQUFHLElBQVY7TUFDSDs7TUFDRCxJQUFJTCxJQUFJLElBQUk5TixrRkFBUixJQUEyQzhOLElBQUksSUFBSTlOLGtGQUF2RCxFQUF3RjtRQUNwRm9PLEVBQUUsR0FBRyxDQUFMO01BQ0g7O01BQ0QsSUFBSUMsR0FBRyxHQUFHRCxFQUFFLElBQUksQ0FBaEI7TUFBQSxJQUFtQkUsR0FBRyxHQUFJRixFQUFFLEdBQUcsQ0FBTixHQUFXLENBQXBDO01BRUEzSyxHQUFHLENBQUMxRCxNQUFKLENBQVdtQyxDQUFYLEVBQWNDLENBQWQsRUFBaUIsQ0FBakI7TUFDQSxJQUFJb00sTUFBTSxHQUFHOUssR0FBRyxDQUFDUSxJQUFqQjs7TUFFQSxLQUFLa0UsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHaEcsQ0FBaEIsRUFBbUIsRUFBRWdHLENBQUYsRUFBSzVGLENBQUMsSUFBSUwsQ0FBVixFQUFheEMsQ0FBQyxJQUFJd0MsQ0FBQyxHQUFHa00sRUFBekMsRUFBNkM7UUFDekMsS0FBSzdHLENBQUMsR0FBRyxDQUFKLEVBQU93RyxFQUFFLEdBQUdyTyxDQUFaLEVBQWVzTyxFQUFFLEdBQUd6TCxDQUF6QixFQUE0QmdGLENBQUMsSUFBSXJGLENBQUMsR0FBRyxDQUFyQyxFQUF3Q3FGLENBQUMsSUFBSSxDQUFMLEVBQVF3RyxFQUFFLElBQUlLLEVBQUUsSUFBSSxDQUFwQixFQUF1QkosRUFBRSxJQUFJLENBQXJFLEVBQXdFO1VBQ3BFTyxNQUFNLENBQUNQLEVBQUQsQ0FBTixHQUFjeEssR0FBRyxDQUFDdUssRUFBRCxDQUFILEdBQVVFLE9BQVYsR0FBb0J6SyxHQUFHLENBQUN1SyxFQUFFLEdBQUcsQ0FBTixDQUFILEdBQWNHLE9BQWxDLEdBQTRDMUssR0FBRyxDQUFDdUssRUFBRSxHQUFHLENBQU4sQ0FBSCxHQUFjSSxPQUExRCxHQUFvRSxJQUFyRSxJQUE4RSxFQUEzRjtVQUNBSSxNQUFNLENBQUNQLEVBQUUsR0FBRyxDQUFOLENBQU4sR0FBa0J4SyxHQUFHLENBQUN1SyxFQUFFLEdBQUdLLEVBQU4sQ0FBSCxHQUFlSCxPQUFmLEdBQXlCekssR0FBRyxDQUFDdUssRUFBRSxHQUFHSyxFQUFMLEdBQVUsQ0FBWCxDQUFILEdBQW1CRixPQUE1QyxHQUFzRDFLLEdBQUcsQ0FBQ3VLLEVBQUUsR0FBR0ssRUFBTCxHQUFVLENBQVgsQ0FBSCxHQUFtQkQsT0FBekUsR0FBbUYsSUFBcEYsSUFBNkYsRUFBOUc7VUFDQUksTUFBTSxDQUFDUCxFQUFFLEdBQUcsQ0FBTixDQUFOLEdBQWtCeEssR0FBRyxDQUFDdUssRUFBRSxHQUFHTSxHQUFOLENBQUgsR0FBZ0JKLE9BQWhCLEdBQTBCekssR0FBRyxDQUFDdUssRUFBRSxHQUFHTSxHQUFMLEdBQVcsQ0FBWixDQUFILEdBQW9CSCxPQUE5QyxHQUF3RDFLLEdBQUcsQ0FBQ3VLLEVBQUUsR0FBR00sR0FBTCxHQUFXLENBQVosQ0FBSCxHQUFvQkYsT0FBNUUsR0FBc0YsSUFBdkYsSUFBZ0csRUFBakg7VUFDQUksTUFBTSxDQUFDUCxFQUFFLEdBQUcsQ0FBTixDQUFOLEdBQWtCeEssR0FBRyxDQUFDdUssRUFBRSxHQUFHTyxHQUFOLENBQUgsR0FBZ0JMLE9BQWhCLEdBQTBCekssR0FBRyxDQUFDdUssRUFBRSxHQUFHTyxHQUFMLEdBQVcsQ0FBWixDQUFILEdBQW9CSixPQUE5QyxHQUF3RDFLLEdBQUcsQ0FBQ3VLLEVBQUUsR0FBR08sR0FBTCxHQUFXLENBQVosQ0FBSCxHQUFvQkgsT0FBNUUsR0FBc0YsSUFBdkYsSUFBZ0csRUFBakg7UUFDSDs7UUFDRCxPQUFPNUcsQ0FBQyxHQUFHckYsQ0FBWCxFQUFjLEVBQUVxRixDQUFGLEVBQUssRUFBRXlHLEVBQVAsRUFBV0QsRUFBRSxJQUFJSyxFQUEvQixFQUFtQztVQUMvQkcsTUFBTSxDQUFDUCxFQUFELENBQU4sR0FBY3hLLEdBQUcsQ0FBQ3VLLEVBQUQsQ0FBSCxHQUFVRSxPQUFWLEdBQW9CekssR0FBRyxDQUFDdUssRUFBRSxHQUFHLENBQU4sQ0FBSCxHQUFjRyxPQUFsQyxHQUE0QzFLLEdBQUcsQ0FBQ3VLLEVBQUUsR0FBRyxDQUFOLENBQUgsR0FBY0ksT0FBMUQsR0FBb0UsSUFBckUsSUFBOEUsRUFBM0Y7UUFDSDtNQUNKO0lBQ0o7RUFqQ0w7SUFBQTtJQUFBLE9BbUNJLGtCQUFTM0ssR0FBVCxFQUFtQkMsR0FBbkIsRUFBNkJDLEVBQTdCLEVBQXlDQyxFQUF6QyxFQUFtRDtNQUMvQyxJQUFJeEIsQ0FBQyxHQUFHcUIsR0FBRyxDQUFDUSxJQUFaO01BQUEsSUFBa0I5QixDQUFDLEdBQUdzQixHQUFHLENBQUNPLElBQTFCOztNQUNBLElBQUk1QixDQUFDLEdBQUd3QixFQUFKLElBQVV6QixDQUFDLEdBQUd3QixFQUFsQixFQUFzQjtRQUNsQkQsR0FBRyxDQUFDMUQsTUFBSixDQUFXMkQsRUFBWCxFQUFlQyxFQUFmLEVBQW1CSCxHQUFHLENBQUNNLE9BQXZCOztRQUVBLElBQUlOLEdBQUcsQ0FBQzNCLElBQUosR0FBVzdCLHdFQUFYLElBQW9DeUQsR0FBRyxDQUFDNUIsSUFBSixHQUFXN0Isd0VBQS9DLElBQXdFbUMsQ0FBQyxHQUFHRCxDQUFKLElBQVN5QixFQUFFLEdBQUdELEVBQWQsSUFBb0IsS0FBaEcsRUFBdUc7VUFDbkdILCtEQUFZLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXLEtBQUtyRSxLQUFoQixFQUF1QnNFLEVBQXZCLEVBQTJCQyxFQUEzQixDQUFaO1FBQ0gsQ0FGRCxNQUVPO1VBQ0hnQyw0REFBUyxDQUFDbkMsR0FBRCxFQUFNQyxHQUFOLEVBQVcsS0FBS3JFLEtBQWhCLEVBQXVCc0UsRUFBdkIsRUFBMkJDLEVBQTNCLENBQVQ7UUFDSDtNQUNKO0lBQ0o7RUE5Q0w7SUFBQTtJQUFBLE9BK0NJLHVCQUFjSCxHQUFkLEVBQXNFQyxHQUF0RSxFQUE2SStLLE1BQTdJLEVBQTZKQyxPQUE3SixFQUE0SztNQUN4SyxJQUFJLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7UUFBRUEsT0FBTyxHQUFHLENBQVY7TUFBYzs7TUFDcEQsSUFBSXZNLENBQUMsR0FBR3NCLEdBQUcsQ0FBQ08sSUFBWjtNQUFBLElBQWtCNUIsQ0FBQyxHQUFHcUIsR0FBRyxDQUFDUSxJQUExQjtNQUFBLElBQWdDMEssRUFBRSxHQUFHdk0sQ0FBQyxJQUFJLENBQTFDO01BQUEsSUFBNkNjLEVBQUUsR0FBR2YsQ0FBQyxJQUFJLENBQXZEO01BQ0EsSUFBSXhDLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZILENBQUMsR0FBRyxDQUFmO01BQUEsSUFBa0JZLENBQUMsR0FBRyxDQUF0QjtNQUFBLElBQXlCd0csR0FBRyxHQUFHLENBQS9CO01BQ0EsSUFBSUMsVUFBVSxHQUFJLENBQUNKLE1BQU0sSUFBSSxDQUFYLElBQWdCLENBQWpCLEdBQXNCLENBQXZDO01BQ0EsSUFBSUssYUFBYSxHQUFJTCxNQUFNLEdBQUcsQ0FBVixHQUFlLENBQW5DO01BQUEsSUFBc0NNLFdBQVcsR0FBSUQsYUFBYSxHQUFHLENBQWpCLEdBQXNCLENBQTFFO01BQ0EsSUFBSWpKLEtBQUssR0FBRzZJLE9BQU8sR0FBR3pPLG9GQUFWLEdBQThDLENBQTlDLEdBQW1ELE9BQU80TyxVQUFVLEdBQUdBLFVBQXBCLENBQS9EO01BRUEsSUFBSUcsUUFBUSxHQUFHLEtBQUszUCxLQUFMLENBQVdnRyxVQUFYLENBQXVCbEQsQ0FBQyxHQUFHQyxDQUFMLElBQVcsQ0FBakMsQ0FBZjtNQUVBLElBQUlRLEdBQUcsR0FBRyxDQUFWO01BQUEsSUFBYXFNLFFBQVEsR0FBRyxDQUF4QjtNQUFBLElBQTJCQyxRQUFRLEdBQUcsQ0FBdEM7TUFBQSxJQUF5Q0MsY0FBYyxHQUFHLENBQTFEO01BQUEsSUFBNkRDLGtCQUFrQixHQUFHLENBQWxGO01BQ0EsSUFBSUMsUUFBUSxHQUFHTCxRQUFRLENBQUN4SixHQUF4QjtNQUNBLElBQUk4SixPQUFPLEdBQUc3TCxHQUFHLENBQUNTLElBQWxCO01BQ0EsSUFBSXFMLElBQUksR0FBRyxDQUFYO01BRUE3TCxHQUFHLENBQUMxRCxNQUFKLENBQVdtQyxDQUFYLEVBQWNDLENBQWQsRUFBaUJxQixHQUFHLENBQUNNLE9BQXJCOztNQU1BLEtBQUtxRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdoRyxDQUFoQixFQUFtQixFQUFFZ0csQ0FBckIsRUFBd0I7UUFDcEI2RyxRQUFRLEdBQUc3RyxDQUFYO1FBQ0F4RixHQUFHLEdBQUdrTSxhQUFhLEdBQUdRLE9BQU8sQ0FBQ0osUUFBRCxDQUE3Qjs7UUFFQSxLQUFLdlAsQ0FBQyxHQUFJdVAsUUFBUSxHQUFHLENBQVosR0FBaUIsQ0FBckIsRUFBd0JOLEdBQUcsR0FBSU0sUUFBUSxHQUFHVCxNQUFaLEdBQXNCLENBQXpELEVBQTREOU8sQ0FBQyxJQUFJaVAsR0FBakUsRUFBc0UsRUFBRWpQLENBQXhFLEVBQTJFO1VBQ3ZFaUQsR0FBRyxJQUFJME0sT0FBTyxDQUFDM1AsQ0FBRCxDQUFkO1FBQ0g7O1FBRUR3UCxjQUFjLEdBQUlELFFBQVEsR0FBR0osYUFBWixHQUE2QixDQUE5QztRQUNBTSxrQkFBa0IsR0FBR0YsUUFBckI7UUFDQUssSUFBSSxHQUFHRCxPQUFPLENBQUNGLGtCQUFELENBQWQ7O1FBQ0EsS0FBSzVILENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lILE1BQWhCLEVBQXdCLEVBQUVqSCxDQUFGLEVBQUt5SCxRQUFRLElBQUk3TSxDQUF6QyxFQUE0QztVQUN4Q2lOLFFBQVEsQ0FBQ0osUUFBRCxDQUFSLEdBQXFCck0sR0FBckI7VUFDQUEsR0FBRyxJQUFJME0sT0FBTyxDQUFDSCxjQUFELENBQVAsR0FBMEJJLElBQWpDO1VBQ0FKLGNBQWM7UUFDakI7O1FBQ0QsT0FBTzNILENBQUMsR0FBR3JGLENBQUMsR0FBRzRNLFdBQWYsRUFBNEJ2SCxDQUFDLElBQUksQ0FBTCxFQUFReUgsUUFBUSxJQUFJTixFQUFoRCxFQUFvRDtVQUNoRFUsUUFBUSxDQUFDSixRQUFELENBQVIsR0FBcUJyTSxHQUFyQjtVQUNBQSxHQUFHLElBQUkwTSxPQUFPLENBQUNILGNBQUQsQ0FBUCxHQUEwQkcsT0FBTyxDQUFDRixrQkFBRCxDQUF4QztVQUVBQyxRQUFRLENBQUNKLFFBQVEsR0FBRzdNLENBQVosQ0FBUixHQUF5QlEsR0FBekI7VUFDQUEsR0FBRyxJQUFJME0sT0FBTyxDQUFDSCxjQUFjLEdBQUcsQ0FBbEIsQ0FBUCxHQUE4QkcsT0FBTyxDQUFDRixrQkFBa0IsR0FBRyxDQUF0QixDQUE1QztVQUVBRCxjQUFjLElBQUksQ0FBbEI7VUFDQUMsa0JBQWtCLElBQUksQ0FBdEI7UUFDSDs7UUFDRCxPQUFPNUgsQ0FBQyxHQUFHckYsQ0FBQyxHQUFHMk0sYUFBZixFQUE4QixFQUFFdEgsQ0FBRixFQUFLeUgsUUFBUSxJQUFJN00sQ0FBL0MsRUFBa0Q7VUFDOUNpTixRQUFRLENBQUNKLFFBQUQsQ0FBUixHQUFxQnJNLEdBQXJCO1VBQ0FBLEdBQUcsSUFBSTBNLE9BQU8sQ0FBQ0gsY0FBRCxDQUFQLEdBQTBCRyxPQUFPLENBQUNGLGtCQUFELENBQXhDO1VBRUFELGNBQWM7VUFDZEMsa0JBQWtCO1FBQ3JCOztRQUVERyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0gsY0FBYyxHQUFHLENBQWxCLENBQWQ7O1FBQ0EsT0FBTzNILENBQUMsR0FBR3JGLENBQVgsRUFBYyxFQUFFcUYsQ0FBRixFQUFLeUgsUUFBUSxJQUFJN00sQ0FBL0IsRUFBa0M7VUFDOUJpTixRQUFRLENBQUNKLFFBQUQsQ0FBUixHQUFxQnJNLEdBQXJCO1VBRUFBLEdBQUcsSUFBSTJNLElBQUksR0FBR0QsT0FBTyxDQUFDRixrQkFBRCxDQUFyQjtVQUNBQSxrQkFBa0I7UUFDckI7O1FBRURGLFFBQVEsSUFBSS9NLENBQVo7TUFDSDs7TUFHRCtNLFFBQVEsR0FBRyxDQUFYO01BRUFJLE9BQU8sR0FBRzVMLEdBQUcsQ0FBQ1EsSUFBZDs7TUFHQSxJQUFJMkIsS0FBSyxJQUFJLENBQWIsRUFBZ0I7UUFDWixLQUFLdUMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHakcsQ0FBaEIsRUFBbUIsRUFBRWlHLENBQXJCLEVBQXdCO1VBQ3BCNkcsUUFBUSxHQUFHN0csQ0FBWDtVQUNBeEYsR0FBRyxHQUFHa00sYUFBYSxHQUFHTyxRQUFRLENBQUNILFFBQUQsQ0FBOUI7O1VBRUEsS0FBS3ZQLENBQUMsR0FBSXVQLFFBQVEsR0FBRyxDQUFaLEdBQWlCLENBQXJCLEVBQXdCTixHQUFHLEdBQUlNLFFBQVEsR0FBR1QsTUFBWixHQUFzQixDQUF6RCxFQUE0RDlPLENBQUMsSUFBSWlQLEdBQWpFLEVBQXNFLEVBQUVqUCxDQUF4RSxFQUEyRTtZQUN2RWlELEdBQUcsSUFBSXlNLFFBQVEsQ0FBQzFQLENBQUQsQ0FBZjtVQUNIOztVQUVEd1AsY0FBYyxHQUFHRCxRQUFRLEdBQUdKLGFBQTVCO1VBQ0FNLGtCQUFrQixHQUFHRixRQUFyQjtVQUNBSyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0Qsa0JBQUQsQ0FBZjs7VUFFQSxLQUFLNUgsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHaUgsTUFBaEIsRUFBd0IsRUFBRWpILENBQUYsRUFBS3lILFFBQVEsSUFBSTlNLENBQXpDLEVBQTRDO1lBQ3hDbU4sT0FBTyxDQUFDTCxRQUFELENBQVAsR0FBb0JyTSxHQUFwQjtZQUNBQSxHQUFHLElBQUl5TSxRQUFRLENBQUNGLGNBQUQsQ0FBUixHQUEyQkksSUFBbEM7WUFDQUosY0FBYztVQUNqQjs7VUFDRCxPQUFPM0gsQ0FBQyxHQUFHcEYsQ0FBQyxHQUFHMk0sV0FBZixFQUE0QnZILENBQUMsSUFBSSxDQUFMLEVBQVF5SCxRQUFRLElBQUkvTCxFQUFoRCxFQUFvRDtZQUNoRG9NLE9BQU8sQ0FBQ0wsUUFBRCxDQUFQLEdBQW9Cck0sR0FBcEI7WUFDQUEsR0FBRyxJQUFJeU0sUUFBUSxDQUFDRixjQUFELENBQVIsR0FBMkJFLFFBQVEsQ0FBQ0Qsa0JBQUQsQ0FBMUM7WUFFQUUsT0FBTyxDQUFDTCxRQUFRLEdBQUc5TSxDQUFaLENBQVAsR0FBd0JTLEdBQXhCO1lBQ0FBLEdBQUcsSUFBSXlNLFFBQVEsQ0FBQ0YsY0FBYyxHQUFHLENBQWxCLENBQVIsR0FBK0JFLFFBQVEsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBdEIsQ0FBOUM7WUFFQUQsY0FBYyxJQUFJLENBQWxCO1lBQ0FDLGtCQUFrQixJQUFJLENBQXRCO1VBQ0g7O1VBQ0QsT0FBTzVILENBQUMsR0FBR3BGLENBQUMsR0FBRzBNLGFBQWYsRUFBOEIsRUFBRXRILENBQUYsRUFBS3lILFFBQVEsSUFBSTlNLENBQS9DLEVBQWtEO1lBQzlDbU4sT0FBTyxDQUFDTCxRQUFELENBQVAsR0FBb0JyTSxHQUFwQjtZQUVBQSxHQUFHLElBQUl5TSxRQUFRLENBQUNGLGNBQUQsQ0FBUixHQUEyQkUsUUFBUSxDQUFDRCxrQkFBRCxDQUExQztZQUNBRCxjQUFjO1lBQ2RDLGtCQUFrQjtVQUNyQjs7VUFDREcsSUFBSSxHQUFHRixRQUFRLENBQUNGLGNBQWMsR0FBRyxDQUFsQixDQUFmOztVQUNBLE9BQU8zSCxDQUFDLEdBQUdwRixDQUFYLEVBQWMsRUFBRW9GLENBQUYsRUFBS3lILFFBQVEsSUFBSTlNLENBQS9CLEVBQWtDO1lBQzlCbU4sT0FBTyxDQUFDTCxRQUFELENBQVAsR0FBb0JyTSxHQUFwQjtZQUVBQSxHQUFHLElBQUkyTSxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0Qsa0JBQUQsQ0FBdEI7WUFDQUEsa0JBQWtCO1VBQ3JCOztVQUVERixRQUFRLElBQUk5TSxDQUFaO1FBQ0g7TUFDSixDQTdDRCxNQTZDTztRQUNILEtBQUtnRyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdqRyxDQUFoQixFQUFtQixFQUFFaUcsQ0FBckIsRUFBd0I7VUFDcEI2RyxRQUFRLEdBQUc3RyxDQUFYO1VBQ0F4RixHQUFHLEdBQUdrTSxhQUFhLEdBQUdPLFFBQVEsQ0FBQ0gsUUFBRCxDQUE5Qjs7VUFFQSxLQUFLdlAsQ0FBQyxHQUFJdVAsUUFBUSxHQUFHLENBQVosR0FBaUIsQ0FBckIsRUFBd0JOLEdBQUcsR0FBSU0sUUFBUSxHQUFHVCxNQUFaLEdBQXNCLENBQXpELEVBQTREOU8sQ0FBQyxJQUFJaVAsR0FBakUsRUFBc0UsRUFBRWpQLENBQXhFLEVBQTJFO1lBQ3ZFaUQsR0FBRyxJQUFJeU0sUUFBUSxDQUFDMVAsQ0FBRCxDQUFmO1VBQ0g7O1VBRUR3UCxjQUFjLEdBQUdELFFBQVEsR0FBR0osYUFBNUI7VUFDQU0sa0JBQWtCLEdBQUdGLFFBQXJCO1VBQ0FLLElBQUksR0FBR0YsUUFBUSxDQUFDRCxrQkFBRCxDQUFmOztVQUVBLEtBQUs1SCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdpSCxNQUFoQixFQUF3QixFQUFFakgsQ0FBRixFQUFLeUgsUUFBUSxJQUFJOU0sQ0FBekMsRUFBNEM7WUFDeENtTixPQUFPLENBQUNMLFFBQUQsQ0FBUCxHQUFvQnJNLEdBQUcsR0FBR2lELEtBQTFCO1lBQ0FqRCxHQUFHLElBQUl5TSxRQUFRLENBQUNGLGNBQUQsQ0FBUixHQUEyQkksSUFBbEM7WUFDQUosY0FBYztVQUNqQjs7VUFDRCxPQUFPM0gsQ0FBQyxHQUFHcEYsQ0FBQyxHQUFHMk0sV0FBZixFQUE0QnZILENBQUMsSUFBSSxDQUFMLEVBQVF5SCxRQUFRLElBQUkvTCxFQUFoRCxFQUFvRDtZQUNoRG9NLE9BQU8sQ0FBQ0wsUUFBRCxDQUFQLEdBQW9Cck0sR0FBRyxHQUFHaUQsS0FBMUI7WUFDQWpELEdBQUcsSUFBSXlNLFFBQVEsQ0FBQ0YsY0FBRCxDQUFSLEdBQTJCRSxRQUFRLENBQUNELGtCQUFELENBQTFDO1lBRUFFLE9BQU8sQ0FBQ0wsUUFBUSxHQUFHOU0sQ0FBWixDQUFQLEdBQXdCUyxHQUFHLEdBQUdpRCxLQUE5QjtZQUNBakQsR0FBRyxJQUFJeU0sUUFBUSxDQUFDRixjQUFjLEdBQUcsQ0FBbEIsQ0FBUixHQUErQkUsUUFBUSxDQUFDRCxrQkFBa0IsR0FBRyxDQUF0QixDQUE5QztZQUVBRCxjQUFjLElBQUksQ0FBbEI7WUFDQUMsa0JBQWtCLElBQUksQ0FBdEI7VUFDSDs7VUFDRCxPQUFPNUgsQ0FBQyxHQUFHcEYsQ0FBQyxHQUFHME0sYUFBZixFQUE4QixFQUFFdEgsQ0FBRixFQUFLeUgsUUFBUSxJQUFJOU0sQ0FBL0MsRUFBa0Q7WUFDOUNtTixPQUFPLENBQUNMLFFBQUQsQ0FBUCxHQUFvQnJNLEdBQUcsR0FBR2lELEtBQTFCO1lBRUFqRCxHQUFHLElBQUl5TSxRQUFRLENBQUNGLGNBQUQsQ0FBUixHQUEyQkUsUUFBUSxDQUFDRCxrQkFBRCxDQUExQztZQUNBRCxjQUFjO1lBQ2RDLGtCQUFrQjtVQUNyQjs7VUFDREcsSUFBSSxHQUFHRixRQUFRLENBQUNGLGNBQWMsR0FBRyxDQUFsQixDQUFmOztVQUNBLE9BQU8zSCxDQUFDLEdBQUdwRixDQUFYLEVBQWMsRUFBRW9GLENBQUYsRUFBS3lILFFBQVEsSUFBSTlNLENBQS9CLEVBQWtDO1lBQzlCbU4sT0FBTyxDQUFDTCxRQUFELENBQVAsR0FBb0JyTSxHQUFHLEdBQUdpRCxLQUExQjtZQUVBakQsR0FBRyxJQUFJMk0sSUFBSSxHQUFHRixRQUFRLENBQUNELGtCQUFELENBQXRCO1lBQ0FBLGtCQUFrQjtVQUNyQjs7VUFFREYsUUFBUSxJQUFJOU0sQ0FBWjtRQUNIO01BQ0o7O01BRUQsS0FBSy9DLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JxSixRQUF0QjtJQUNIO0VBcE5MO0lBQUE7SUFBQSxPQXFOSSx1QkFBY3ZMLEdBQWQsRUFBaUZDLEdBQWpGLEVBQXdKcEIsV0FBeEosRUFBNktrTixLQUE3SyxFQUEwTDtNQUN0TCxJQUFJQyxVQUFVLEdBQUcsSUFBSTdJLFVBQVUsQ0FBQzhJLElBQWYsRUFBakI7O01BQ0EsSUFBSSxPQUFPRixLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO1FBQUVBLEtBQUssR0FBRyxHQUFSO01BQWM7O01BQ2xELElBQUksT0FBT2xOLFdBQVAsS0FBdUIsV0FBM0IsRUFBd0M7UUFBRUEsV0FBVyxHQUFHLENBQWQ7TUFBa0I7O01BQzVEQSxXQUFXLEdBQUdBLFdBQVcsSUFBSSxDQUFmLEdBQW9CZSxJQUFJLENBQUNxQyxHQUFMLENBQVMsQ0FBVCxFQUFhLE1BQU04SixLQUFOLEdBQWMsR0FBZCxHQUFvQixJQUFqQyxJQUEwQyxDQUExQyxHQUE4QyxDQUEvQyxHQUFvRCxDQUF2RSxHQUEyRWxOLFdBQXpGO01BQ0EsSUFBSUMsV0FBVyxHQUFHRCxXQUFXLElBQUksQ0FBakM7TUFDQSxJQUFJSCxDQUFDLEdBQUdzQixHQUFHLENBQUNPLElBQVo7TUFBQSxJQUFrQjVCLENBQUMsR0FBR3FCLEdBQUcsQ0FBQ1EsSUFBMUI7TUFDQSxJQUFJdEMsU0FBUyxHQUFHOEIsR0FBRyxDQUFDM0IsSUFBcEI7TUFBQSxJQUEwQjZOLEtBQUssR0FBR2hPLFNBQVMsR0FBRzFCLHdFQUE5QztNQUVBeUQsR0FBRyxDQUFDMUQsTUFBSixDQUFXbUMsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCcUIsR0FBRyxDQUFDTSxPQUFyQjtNQUVBLElBQUk5QixLQUFLLEdBQUd3QixHQUFHLENBQUNTLElBQWhCO01BQUEsSUFBc0JoQyxLQUFLLEdBQUd3QixHQUFHLENBQUNRLElBQWxDO01BQ0EsSUFBSWxDLEdBQUo7TUFBQSxJQUFTSyxNQUFUO01BQUEsSUFBaUJ1TixNQUFNLEdBQUl0TixXQUFXLEdBQUdlLElBQUksQ0FBQ3FDLEdBQUwsQ0FBU3RELENBQVQsRUFBWUQsQ0FBWixDQUFmLEdBQWlDLENBQTNEO01BRUEsSUFBSWlELFFBQVEsR0FBRyxLQUFLL0YsS0FBTCxDQUFXZ0csVUFBWCxDQUFzQnVLLE1BQU0sSUFBSSxDQUFoQyxDQUFmO01BQ0EsSUFBSUMsU0FBUyxHQUFHLEtBQUt4USxLQUFMLENBQVdnRyxVQUFYLENBQXNCL0MsV0FBVyxJQUFJLENBQXJDLENBQWhCOztNQUVBLElBQUlxTixLQUFKLEVBQVc7UUFDUDNOLEdBQUcsR0FBR29ELFFBQVEsQ0FBQ0ksR0FBZjtRQUNBbkQsTUFBTSxHQUFHd04sU0FBUyxDQUFDckssR0FBbkI7TUFDSCxDQUhELE1BR08sSUFBSTdELFNBQVMsR0FBRzFCLHlFQUFoQixFQUF3QztRQUMzQytCLEdBQUcsR0FBR29ELFFBQVEsQ0FBQ0ksR0FBZjtRQUNBbkQsTUFBTSxHQUFHd04sU0FBUyxDQUFDL0osR0FBbkI7TUFDSCxDQUhNLE1BR0E7UUFDSDlELEdBQUcsR0FBR29ELFFBQVEsQ0FBQ1UsR0FBZjtRQUNBekQsTUFBTSxHQUFHd04sU0FBUyxDQUFDL0osR0FBbkI7TUFDSDs7TUFFRDJKLFVBQVUsQ0FBQ0ssbUJBQVgsQ0FBK0J4TixXQUEvQixFQUE0Q2tOLEtBQTVDLEVBQW1Ebk4sTUFBbkQsRUFBMkRWLFNBQTNEOztNQUVBLElBQUlnTyxLQUFKLEVBQVc7UUFDUDVOLDREQUFVLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFhQyxLQUFiLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLE1BQTFCLEVBQWtDQyxXQUFsQyxFQUErQ0MsV0FBL0MsQ0FBVjtNQUNILENBRkQsTUFFTztRQUNIZ0IseURBQU8sQ0FBQ3ZCLEdBQUQsRUFBTUMsS0FBTixFQUFhQyxLQUFiLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLE1BQTFCLEVBQWtDQyxXQUFsQyxFQUErQ0MsV0FBL0MsQ0FBUDtNQUNIOztNQUVELEtBQUtsRCxLQUFMLENBQVdzRyxVQUFYLENBQXNCUCxRQUF0QjtNQUNBLEtBQUsvRixLQUFMLENBQVdzRyxVQUFYLENBQXNCa0ssU0FBdEI7SUFDSDtFQTNQTDtJQUFBO0lBQUEsT0E0UEkseUJBQWdCRSxHQUFoQixFQUEwQkMsT0FBMUIsRUFBMkNDLFNBQTNDLEVBQThEQyxTQUE5RCxFQUErRTtNQUMzRSxJQUFJQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQzdMLElBQWhCO01BRUEsSUFBSWtNLEtBQUssR0FBR0wsR0FBRyxDQUFDL0wsSUFBaEI7TUFDQSxJQUFJcU0sTUFBTSxHQUFHTixHQUFHLENBQUM5TCxJQUFqQjtNQUNBLElBQUlxTSxJQUFJLEdBQUdGLEtBQVg7TUFFQSxJQUFJRyxTQUFTLEdBQUcsR0FBaEI7TUFDQSxJQUFJQyxTQUFTLEdBQUduTixJQUFJLENBQUNvTixFQUFyQjtNQUVBLElBQUlDLFFBQVEsR0FBR3JOLElBQUksQ0FBQ3NOLEtBQUwsQ0FBVyxDQUFDSCxTQUFTLEdBQUdELFNBQWIsSUFBMEJOLFNBQXJDLENBQWY7TUFDQSxJQUFJVyxNQUFNLEdBQUd2TixJQUFJLENBQUNzTixLQUFMLENBQVcsQ0FBQyxDQUFDUCxLQUFLLEdBQUdDLE1BQVQsSUFBbUIsQ0FBbkIsR0FBdUIsQ0FBeEIsSUFBNkJMLE9BQXhDLENBQWI7TUFDQSxJQUFJYSxJQUFJLEdBQUcsTUFBTWIsT0FBakI7TUFFQSxJQUFJYyxLQUFLLEdBQUcsSUFBSWpQLFVBQUosQ0FBZSxDQUFDNk8sUUFBUSxHQUFHLENBQVosS0FBa0JFLE1BQU0sR0FBRyxDQUEzQixDQUFmLENBQVo7TUFDQSxJQUFJRyxNQUFNLEdBQUcsSUFBSUMsWUFBSixDQUFpQk4sUUFBakIsQ0FBYjtNQUNBLElBQUlPLE1BQU0sR0FBRyxJQUFJRCxZQUFKLENBQWlCTixRQUFqQixDQUFiO01BRUEsSUFBSVEsQ0FBQyxHQUFHLENBQVI7TUFDQSxJQUFJQyxHQUFHLEdBQUdaLFNBQVY7O01BQ0EsT0FBT1csQ0FBQyxHQUFHUixRQUFYLEVBQXFCUSxDQUFDLEVBQXRCLEVBQTBCO1FBQ3RCSCxNQUFNLENBQUNHLENBQUQsQ0FBTixHQUFZN04sSUFBSSxDQUFDK04sR0FBTCxDQUFTRCxHQUFULElBQWdCTixJQUE1QjtRQUNBSSxNQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZN04sSUFBSSxDQUFDZ08sR0FBTCxDQUFTRixHQUFULElBQWdCTixJQUE1QjtRQUNBTSxHQUFHLElBQUlsQixTQUFQO01BQ0g7O01BR0QsS0FBSyxJQUFJdFEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBRLE1BQXBCLEVBQTRCMVEsQ0FBQyxFQUE3QixFQUFpQztRQUM3QixLQUFLLElBQUk2QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNE4sS0FBcEIsRUFBMkI1TixDQUFDLEVBQTVCLEVBQWdDO1VBQzVCLElBQUkyTixLQUFLLENBQUN4USxDQUFDLEdBQUcyUSxJQUFKLEdBQVc5TixDQUFaLENBQUwsSUFBdUIsQ0FBM0IsRUFBOEI7WUFFMUIsS0FBSyxJQUFJME8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsUUFBcEIsRUFBOEJRLENBQUMsRUFBL0IsRUFBbUM7Y0FDL0IsSUFBSUksQ0FBQyxHQUFHak8sSUFBSSxDQUFDc04sS0FBTCxDQUFXbk8sQ0FBQyxHQUFHeU8sTUFBTSxDQUFDQyxDQUFELENBQVYsR0FBZ0J2UixDQUFDLEdBQUdvUixNQUFNLENBQUNHLENBQUQsQ0FBckMsQ0FBUjtjQUNBSSxDQUFDLElBQUksQ0FBQ1YsTUFBTSxHQUFHLENBQVYsSUFBZSxDQUFwQjtjQUNBRSxLQUFLLENBQUMsQ0FBQ0ksQ0FBQyxHQUFHLENBQUwsS0FBV04sTUFBTSxHQUFHLENBQXBCLElBQXlCVSxDQUF6QixHQUE2QixDQUE5QixDQUFMLElBQXlDLENBQXpDO1lBQ0g7VUFDSjtRQUNKO01BQ0o7O01BSUQsSUFBSUMsU0FBUyxHQUFHLElBQUloRSxLQUFKLEVBQWhCOztNQUNBLEtBQUssSUFBSStELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLE1BQXBCLEVBQTRCVSxDQUFDLEVBQTdCLEVBQWlDO1FBQzdCLEtBQUssSUFBSUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsUUFBcEIsRUFBOEJRLENBQUMsRUFBL0IsRUFBbUM7VUFDL0IsSUFBSU0sSUFBSSxHQUFHLENBQUNOLENBQUMsR0FBRyxDQUFMLEtBQVdOLE1BQU0sR0FBRyxDQUFwQixJQUF5QlUsQ0FBekIsR0FBNkIsQ0FBeEM7O1VBQ0EsSUFBSVIsS0FBSyxDQUFDVSxJQUFELENBQUwsR0FBY3RCLFNBQWQsSUFDQVksS0FBSyxDQUFDVSxJQUFELENBQUwsR0FBY1YsS0FBSyxDQUFDVSxJQUFJLEdBQUcsQ0FBUixDQURuQixJQUNpQ1YsS0FBSyxDQUFDVSxJQUFELENBQUwsSUFBZVYsS0FBSyxDQUFDVSxJQUFJLEdBQUcsQ0FBUixDQURyRCxJQUVBVixLQUFLLENBQUNVLElBQUQsQ0FBTCxHQUFjVixLQUFLLENBQUNVLElBQUksR0FBR1osTUFBUCxHQUFnQixDQUFqQixDQUZuQixJQUUwQ0UsS0FBSyxDQUFDVSxJQUFELENBQUwsSUFBZVYsS0FBSyxDQUFDVSxJQUFJLEdBQUdaLE1BQVAsR0FBZ0IsQ0FBakIsQ0FGbEUsRUFFdUY7WUFDbkZXLFNBQVMsQ0FBQ0UsSUFBVixDQUFlRCxJQUFmO1VBQ0g7UUFDSjtNQUNKOztNQUdERCxTQUFTLENBQUNHLElBQVYsQ0FBZSxVQUFVQyxFQUFWLEVBQWNDLEVBQWQsRUFBZ0I7UUFDM0IsT0FBeUJkLEtBQUssQ0FBQ2EsRUFBRCxDQUFMLEdBQVliLEtBQUssQ0FBQ2MsRUFBRCxDQUFqQixJQUEwQmQsS0FBSyxDQUFDYSxFQUFELENBQUwsSUFBYWIsS0FBSyxDQUFDYyxFQUFELENBQWxCLElBQTBCRCxFQUFFLEdBQUdDLEVBQWxGO01BQ0gsQ0FGRDs7TUFLQSxJQUFJQyxRQUFRLEdBQUd4TyxJQUFJLENBQUNDLEdBQUwsQ0FBU29OLFFBQVEsR0FBR0UsTUFBcEIsRUFBNEJXLFNBQVMsQ0FBQ08sTUFBdEMsQ0FBZjtNQUNBLElBQUlqTSxLQUFLLEdBQUcsT0FBTytLLE1BQU0sR0FBRyxDQUFoQixDQUFaO01BQ0EsSUFBSW1CLEtBQUssR0FBRyxJQUFJeEUsS0FBSixFQUFaOztNQUNBLEtBQUssSUFBSTVOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrUyxRQUFwQixFQUE4QmxTLENBQUMsRUFBL0IsRUFBbUM7UUFDL0IsSUFBSXFTLEdBQUcsR0FBR1QsU0FBUyxDQUFDNVIsQ0FBRCxDQUFuQjtRQUNBLElBQUl1UixDQUFDLEdBQUc3TixJQUFJLENBQUM0TyxLQUFMLENBQVdELEdBQUcsR0FBR25NLEtBQWpCLElBQTBCLENBQWxDO1FBQ0EsSUFBSXlMLENBQUMsR0FBR1UsR0FBRyxHQUFHLENBQUNkLENBQUMsR0FBRyxDQUFMLEtBQVdOLE1BQU0sR0FBRyxDQUFwQixDQUFOLEdBQStCLENBQXZDO1FBQ0EsSUFBSXNCLElBQUksR0FBRyxDQUFDWixDQUFDLEdBQUcsQ0FBQ1YsTUFBTSxHQUFHLENBQVYsSUFBZSxHQUFwQixJQUEyQlosT0FBdEM7UUFDQSxJQUFJbUMsTUFBTSxHQUFHakIsQ0FBQyxHQUFHakIsU0FBakI7UUFDQThCLEtBQUssQ0FBQ04sSUFBTixDQUFXLENBQUNTLElBQUQsRUFBT0MsTUFBUCxDQUFYO01BQ0g7O01BQ0QsT0FBT0osS0FBUDtJQUNIO0VBcFVMO0lBQUE7SUFBQSxPQXFVSSxpQkFBUXRPLEdBQVIsRUFBZ0VDLEdBQWhFLEVBQTZJYyxFQUE3SSxFQUF5SkMsRUFBekosRUFBbUs7TUFFL0osSUFBSSxPQUFPRCxFQUFQLEtBQWMsV0FBbEIsRUFBK0I7UUFBRUEsRUFBRSxHQUFHLENBQUw7TUFBUzs7TUFDMUMsSUFBSSxPQUFPQyxFQUFQLEtBQWMsV0FBbEIsRUFBK0I7UUFBRUEsRUFBRSxHQUFHLENBQUw7TUFBUzs7TUFFMUMsSUFBSXRDLENBQUMsR0FBR3NCLEdBQUcsQ0FBQ08sSUFBWjtNQUFBLElBQWtCNUIsQ0FBQyxHQUFHcUIsR0FBRyxDQUFDUSxJQUExQjtNQUNBLElBQUlmLEVBQUUsR0FBR2YsQ0FBQyxJQUFJLENBQWQ7TUFBQSxJQUFpQndNLEVBQUUsR0FBR3ZNLENBQUMsSUFBSSxDQUEzQjs7TUFDQSxJQUFJZ1EsR0FBRyxHQUFHbFAsRUFBRSxJQUFJc0IsRUFBRSxJQUFJLENBQVYsQ0FBWjtNQUFBLElBQTBCNk4sR0FBRyxHQUFHMUQsRUFBRSxJQUFJbEssRUFBRSxJQUFJLENBQVYsQ0FBbEM7O01BQ0EsSUFBSStDLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBV1ksQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQmtLLElBQUksR0FBRzlOLEVBQUUsR0FBR0MsRUFBRSxHQUFHdEMsQ0FBbkM7TUFBQSxJQUFzQ29RLEtBQUssR0FBRyxDQUE5QztNQUFBLElBQWlEQyxJQUFJLEdBQUcsQ0FBeEQ7TUFBQSxJQUEyREMsS0FBSyxHQUFHLENBQW5FO01BRUEvTyxHQUFHLENBQUMxRCxNQUFKLENBQVdrRCxFQUFYLEVBQWV5TCxFQUFmLEVBQW1CbEwsR0FBRyxDQUFDTSxPQUF2QjtNQUVBLElBQUk5QixLQUFLLEdBQUd3QixHQUFHLENBQUNTLElBQWhCO01BQUEsSUFBc0JoQyxLQUFLLEdBQUd3QixHQUFHLENBQUNRLElBQWxDOztNQUVBLEtBQUtrRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdpSyxHQUFoQixFQUFxQixFQUFFakssQ0FBdkIsRUFBMEI7UUFDdEJtSyxLQUFLLEdBQUdELElBQVI7UUFDQUcsS0FBSyxHQUFHRCxJQUFSOztRQUNBLEtBQUtoTCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUk0SyxHQUFHLEdBQUcsQ0FBdkIsRUFBMEI1SyxDQUFDLElBQUksQ0FBTCxFQUFRaUwsS0FBSyxJQUFJLENBQWpCLEVBQW9CRixLQUFLLElBQUksQ0FBdkQsRUFBMEQ7VUFDdERyUSxLQUFLLENBQUN1USxLQUFELENBQUwsR0FBZ0J4USxLQUFLLENBQUNzUSxLQUFELENBQUwsR0FBZXRRLEtBQUssQ0FBQ3NRLEtBQUssR0FBRyxDQUFULENBQXBCLEdBQ1p0USxLQUFLLENBQUNzUSxLQUFLLEdBQUdwUSxDQUFULENBRE8sR0FDT0YsS0FBSyxDQUFDc1EsS0FBSyxHQUFHcFEsQ0FBUixHQUFZLENBQWIsQ0FEWixHQUM4QixDQUQvQixJQUNxQyxDQURwRDtVQUVBRCxLQUFLLENBQUN1USxLQUFLLEdBQUcsQ0FBVCxDQUFMLEdBQW9CeFEsS0FBSyxDQUFDc1EsS0FBSyxHQUFHLENBQVQsQ0FBTCxHQUFtQnRRLEtBQUssQ0FBQ3NRLEtBQUssR0FBRyxDQUFULENBQXhCLEdBQ2hCdFEsS0FBSyxDQUFDc1EsS0FBSyxHQUFHcFEsQ0FBUixHQUFZLENBQWIsQ0FEVyxHQUNPRixLQUFLLENBQUNzUSxLQUFLLEdBQUdwUSxDQUFSLEdBQVksQ0FBYixDQURaLEdBQzhCLENBRC9CLElBQ3FDLENBRHhEO1FBRUg7O1FBQ0QsT0FBT3FGLENBQUMsR0FBRzRLLEdBQVgsRUFBZ0IsRUFBRTVLLENBQUYsRUFBSyxFQUFFaUwsS0FBUCxFQUFjRixLQUFLLElBQUksQ0FBdkMsRUFBMEM7VUFDdENyUSxLQUFLLENBQUN1USxLQUFELENBQUwsR0FBZ0J4USxLQUFLLENBQUNzUSxLQUFELENBQUwsR0FBZXRRLEtBQUssQ0FBQ3NRLEtBQUssR0FBRyxDQUFULENBQXBCLEdBQ1p0USxLQUFLLENBQUNzUSxLQUFLLEdBQUdwUSxDQUFULENBRE8sR0FDT0YsS0FBSyxDQUFDc1EsS0FBSyxHQUFHcFEsQ0FBUixHQUFZLENBQWIsQ0FEWixHQUM4QixDQUQvQixJQUNxQyxDQURwRDtRQUVIOztRQUNEbVEsSUFBSSxJQUFJblEsQ0FBQyxJQUFJLENBQWI7UUFDQXFRLElBQUksSUFBSXRQLEVBQVI7TUFDSDtJQUNKO0VBbldMO0lBQUE7SUFBQSxPQXFXSSw0QkFBbUJPLEdBQW5CLEVBQTJFQyxHQUEzRSxFQUFtSjtNQUMvSSxJQUFJdkIsQ0FBQyxHQUFHc0IsR0FBRyxDQUFDTyxJQUFaO01BQUEsSUFBa0I1QixDQUFDLEdBQUdxQixHQUFHLENBQUNRLElBQTFCO01BQ0EsSUFBSXlPLEtBQUssR0FBR3ZRLENBQUMsSUFBSSxDQUFqQjtNQUFBLElBQW9CcUYsQ0FBQyxHQUFHLENBQXhCO01BQUEsSUFBMkJZLENBQUMsR0FBRyxDQUEvQjtNQUFBLElBQWtDdUssRUFBRSxHQUFHLENBQXZDO01BQUEsSUFBMEM3TixDQUExQztNQUFBLElBQTZDQyxDQUE3QztNQUFBLElBQWdENk4sQ0FBaEQ7TUFBQSxJQUFtREMsQ0FBbkQ7TUFBQSxJQUFzREMsQ0FBdEQ7TUFBQSxJQUF5REMsQ0FBekQ7TUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtNQUFBLElBQWVDLEtBQUssR0FBRyxDQUF2QjtNQUFBLElBQTBCQyxLQUFLLEdBQUcsQ0FBbEM7TUFBQSxJQUFxQ0MsSUFBSSxHQUFHLENBQTVDO01BQ0EsSUFBSUMsS0FBSixFQUFXQyxLQUFYO01BRUEzUCxHQUFHLENBQUMxRCxNQUFKLENBQVdtQyxDQUFYLEVBQWNDLENBQWQsRUFBaUIsQ0FBakI7TUFFQSxJQUFJMk4sR0FBRyxHQUFHdE0sR0FBRyxDQUFDUyxJQUFkO01BQUEsSUFBb0JvUCxJQUFJLEdBQUc1UCxHQUFHLENBQUNRLElBQS9CO01BRUEsSUFBSXFQLFNBQVMsR0FBRyxLQUFLbFUsS0FBTCxDQUFXZ0csVUFBWCxDQUF1QmxELENBQUMsR0FBRyxDQUFMLElBQVcsQ0FBakMsQ0FBaEI7TUFDQSxJQUFJcVIsU0FBUyxHQUFHLEtBQUtuVSxLQUFMLENBQVdnRyxVQUFYLENBQXVCbEQsQ0FBQyxHQUFHLENBQUwsSUFBVyxDQUFqQyxDQUFoQjs7TUFFQSxJQUFJc0IsR0FBRyxDQUFDM0IsSUFBSixHQUFXN0Isd0VBQVgsSUFBb0N3RCxHQUFHLENBQUMzQixJQUFKLEdBQVc3Qix5RUFBbkQsRUFBMkU7UUFDdkVtVCxLQUFLLEdBQUdHLFNBQVMsQ0FBQy9OLEdBQWxCO1FBQ0E2TixLQUFLLEdBQUdHLFNBQVMsQ0FBQ2hPLEdBQWxCO01BQ0gsQ0FIRCxNQUdPO1FBQ0g0TixLQUFLLEdBQUdHLFNBQVMsQ0FBQ3pOLEdBQWxCO1FBQ0F1TixLQUFLLEdBQUdHLFNBQVMsQ0FBQzFOLEdBQWxCO01BQ0g7O01BRUQsT0FBT3NDLENBQUMsR0FBR2hHLENBQVgsRUFBYyxFQUFFZ0csQ0FBRixFQUFLNkssS0FBSyxJQUFJOVEsQ0FBNUIsRUFBK0I7UUFDM0I2USxLQUFLLEdBQUksQ0FBQzVLLENBQUMsR0FBRyxDQUFKLEdBQVFBLENBQUMsR0FBRyxDQUFaLEdBQWdCLENBQWpCLElBQXNCakcsQ0FBdkIsR0FBNEIsQ0FBcEM7UUFDQStRLEtBQUssR0FBSSxDQUFDOUssQ0FBQyxHQUFHaEcsQ0FBQyxHQUFHLENBQVIsR0FBWWdHLENBQUMsR0FBRyxDQUFoQixHQUFvQmhHLENBQUMsR0FBRyxDQUF6QixJQUE4QkQsQ0FBL0IsR0FBb0MsQ0FBNUM7UUFDQWdSLElBQUksR0FBSS9LLENBQUMsR0FBR3NLLEtBQUwsR0FBYyxDQUFyQjs7UUFFQSxLQUFLbEwsQ0FBQyxHQUFHLENBQUosRUFBT21MLEVBQUUsR0FBRyxDQUFqQixFQUFvQm5MLENBQUMsSUFBSXJGLENBQUMsR0FBRyxDQUE3QixFQUFnQ3FGLENBQUMsSUFBSSxDQUFMLEVBQVFtTCxFQUFFLElBQUksQ0FBOUMsRUFBaUQ7VUFDN0M3TixDQUFDLEdBQUdpTCxHQUFHLENBQUNpRCxLQUFLLEdBQUd4TCxDQUFULENBQVAsRUFBb0J6QyxDQUFDLEdBQUdnTCxHQUFHLENBQUNtRCxLQUFLLEdBQUcxTCxDQUFULENBQTNCO1VBQ0E0TCxLQUFLLENBQUNULEVBQUQsQ0FBTCxHQUFhLENBQUM3TixDQUFDLEdBQUdDLENBQUwsSUFBVSxDQUFWLEdBQWVnTCxHQUFHLENBQUNrRCxLQUFLLEdBQUd6TCxDQUFULENBQUosR0FBbUIsRUFBOUM7VUFDQTZMLEtBQUssQ0FBQ1YsRUFBRCxDQUFMLEdBQWE1TixDQUFDLEdBQUdELENBQWpCO1VBRUFBLENBQUMsR0FBR2lMLEdBQUcsQ0FBQ2lELEtBQUssR0FBR3hMLENBQVIsR0FBWSxDQUFiLENBQVAsRUFBd0J6QyxDQUFDLEdBQUdnTCxHQUFHLENBQUNtRCxLQUFLLEdBQUcxTCxDQUFSLEdBQVksQ0FBYixDQUEvQjtVQUNBNEwsS0FBSyxDQUFDVCxFQUFFLEdBQUcsQ0FBTixDQUFMLEdBQWlCLENBQUM3TixDQUFDLEdBQUdDLENBQUwsSUFBVSxDQUFWLEdBQWVnTCxHQUFHLENBQUNrRCxLQUFLLEdBQUd6TCxDQUFSLEdBQVksQ0FBYixDQUFKLEdBQXVCLEVBQXREO1VBQ0E2TCxLQUFLLENBQUNWLEVBQUUsR0FBRyxDQUFOLENBQUwsR0FBaUI1TixDQUFDLEdBQUdELENBQXJCO1FBQ0g7O1FBQ0QsT0FBTzBDLENBQUMsR0FBR3JGLENBQVgsRUFBYyxFQUFFcUYsQ0FBRixFQUFLLEVBQUVtTCxFQUFyQixFQUF5QjtVQUNyQjdOLENBQUMsR0FBR2lMLEdBQUcsQ0FBQ2lELEtBQUssR0FBR3hMLENBQVQsQ0FBUCxFQUFvQnpDLENBQUMsR0FBR2dMLEdBQUcsQ0FBQ21ELEtBQUssR0FBRzFMLENBQVQsQ0FBM0I7VUFDQTRMLEtBQUssQ0FBQ1QsRUFBRCxDQUFMLEdBQWEsQ0FBQzdOLENBQUMsR0FBR0MsQ0FBTCxJQUFVLENBQVYsR0FBZWdMLEdBQUcsQ0FBQ2tELEtBQUssR0FBR3pMLENBQVQsQ0FBSixHQUFtQixFQUE5QztVQUNBNkwsS0FBSyxDQUFDVixFQUFELENBQUwsR0FBYTVOLENBQUMsR0FBR0QsQ0FBakI7UUFDSDs7UUFFRDBDLENBQUMsR0FBSXJGLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBZDtRQUNBaVIsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQjtRQUFxQkEsS0FBSyxDQUFDNUwsQ0FBRCxDQUFMLEdBQVc0TCxLQUFLLENBQUNqUixDQUFELENBQWhCO1FBQ3JCa1IsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQjtRQUFxQkEsS0FBSyxDQUFDN0wsQ0FBRCxDQUFMLEdBQVc2TCxLQUFLLENBQUNsUixDQUFELENBQWhCOztRQUVyQixLQUFLcUYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJckYsQ0FBQyxHQUFHLENBQXJCLEVBQXdCcUYsQ0FBQyxJQUFJLENBQTdCLEVBQWdDO1VBQzVCMUMsQ0FBQyxHQUFHdU8sS0FBSyxDQUFDN0wsQ0FBQyxHQUFHLENBQUwsQ0FBVCxFQUFrQnpDLENBQUMsR0FBR3NPLEtBQUssQ0FBQzdMLENBQUMsR0FBRyxDQUFMLENBQTNCLEVBQW9Db0wsQ0FBQyxHQUFHUyxLQUFLLENBQUM3TCxDQUFDLEdBQUcsQ0FBTCxDQUE3QyxFQUFzRHFMLENBQUMsR0FBR1EsS0FBSyxDQUFDN0wsQ0FBQyxHQUFHLENBQUwsQ0FBL0QsRUFDSXNMLENBQUMsR0FBR00sS0FBSyxDQUFDNUwsQ0FBQyxHQUFHLENBQUwsQ0FEYixFQUNzQnVMLENBQUMsR0FBR0ssS0FBSyxDQUFDNUwsQ0FBQyxHQUFHLENBQUwsQ0FEL0I7VUFFQThMLElBQUksQ0FBQ0gsSUFBSSxFQUFMLENBQUosR0FBZ0JMLENBQUMsR0FBR00sS0FBSyxDQUFDNUwsQ0FBRCxDQUF6QjtVQUNBOEwsSUFBSSxDQUFDSCxJQUFJLEVBQUwsQ0FBSixHQUFnQixDQUFDck8sQ0FBQyxHQUFHdU8sS0FBSyxDQUFDN0wsQ0FBRCxDQUFWLElBQWlCLENBQWpCLEdBQXFCekMsQ0FBQyxHQUFHLEVBQXpDO1VBQ0F1TyxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWdCSixDQUFDLEdBQUdLLEtBQUssQ0FBQzVMLENBQUMsR0FBRyxDQUFMLENBQXpCO1VBQ0E4TCxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWdCLENBQUNQLENBQUMsR0FBRzdOLENBQUwsSUFBVSxDQUFWLEdBQWNELENBQUMsR0FBRyxFQUFsQztVQUVBd08sSUFBSSxDQUFDSCxJQUFJLEVBQUwsQ0FBSixHQUFpQkMsS0FBSyxDQUFDNUwsQ0FBQyxHQUFHLENBQUwsQ0FBTCxHQUFlc0wsQ0FBaEM7VUFDQVEsSUFBSSxDQUFDSCxJQUFJLEVBQUwsQ0FBSixHQUFpQixDQUFDTixDQUFDLEdBQUcvTixDQUFMLElBQVUsQ0FBVixHQUFjOE4sQ0FBQyxHQUFHLEVBQW5DO1VBQ0FVLElBQUksQ0FBQ0gsSUFBSSxFQUFMLENBQUosR0FBaUJDLEtBQUssQ0FBQzVMLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZXVMLENBQWhDO1VBQ0FPLElBQUksQ0FBQ0gsSUFBSSxFQUFMLENBQUosR0FBaUIsQ0FBQ0UsS0FBSyxDQUFDN0wsQ0FBQyxHQUFHLENBQUwsQ0FBTCxHQUFlb0wsQ0FBaEIsSUFBcUIsQ0FBckIsR0FBeUJDLENBQUMsR0FBRyxFQUE5QztRQUNIOztRQUNELE9BQU9yTCxDQUFDLEdBQUdyRixDQUFYLEVBQWMsRUFBRXFGLENBQWhCLEVBQW1CO1VBQ2Y4TCxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWlCQyxLQUFLLENBQUM1TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWU0TCxLQUFLLENBQUM1TCxDQUFELENBQXJDO1VBQ0E4TCxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWlCLENBQUNFLEtBQUssQ0FBQzdMLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZTZMLEtBQUssQ0FBQzdMLENBQUQsQ0FBckIsSUFBNEIsQ0FBNUIsR0FBZ0M2TCxLQUFLLENBQUM3TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWUsRUFBaEU7UUFDSDtNQUNKOztNQUNELEtBQUtuSSxLQUFMLENBQVdzRyxVQUFYLENBQXNCNE4sU0FBdEI7TUFDQSxLQUFLbFUsS0FBTCxDQUFXc0csVUFBWCxDQUFzQjZOLFNBQXRCO0lBQ0g7RUF0YUw7SUFBQTtJQUFBLE9BeWFJLDJCQUFrQi9QLEdBQWxCLEVBQTBFQyxHQUExRSxFQUF1RjtNQUNuRixJQUFJdkIsQ0FBQyxHQUFHc0IsR0FBRyxDQUFDTyxJQUFaO01BQUEsSUFBa0I1QixDQUFDLEdBQUdxQixHQUFHLENBQUNRLElBQTFCO01BQ0EsSUFBSXlPLEtBQUssR0FBR3ZRLENBQUMsSUFBSSxDQUFqQjtNQUFBLElBQW9CcUYsQ0FBQyxHQUFHLENBQXhCO01BQUEsSUFBMkJZLENBQUMsR0FBRyxDQUEvQjtNQUFBLElBQWtDdUssRUFBRSxHQUFHLENBQXZDO01BQUEsSUFBMEM3TixDQUExQztNQUFBLElBQTZDQyxDQUE3QztNQUFBLElBQWdENk4sQ0FBaEQ7TUFBQSxJQUFtREMsQ0FBbkQ7TUFBQSxJQUFzREMsQ0FBdEQ7TUFBQSxJQUF5REMsQ0FBekQ7TUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtNQUFBLElBQWVDLEtBQUssR0FBRyxDQUF2QjtNQUFBLElBQTBCQyxLQUFLLEdBQUcsQ0FBbEM7TUFBQSxJQUFxQ0MsSUFBSSxHQUFHLENBQTVDO01BQ0EsSUFBSUMsS0FBSixFQUFXQyxLQUFYO01BRUEzUCxHQUFHLENBQUMxRCxNQUFKLENBQVdtQyxDQUFYLEVBQWNDLENBQWQsRUFBaUIsQ0FBakI7TUFFQSxJQUFJMk4sR0FBRyxHQUFHdE0sR0FBRyxDQUFDUyxJQUFkO01BQUEsSUFBb0JvUCxJQUFJLEdBQUc1UCxHQUFHLENBQUNRLElBQS9CO01BRUEsSUFBSXFQLFNBQVMsR0FBRyxLQUFLbFUsS0FBTCxDQUFXZ0csVUFBWCxDQUF1QmxELENBQUMsR0FBRyxDQUFMLElBQVcsQ0FBakMsQ0FBaEI7TUFDQSxJQUFJcVIsU0FBUyxHQUFHLEtBQUtuVSxLQUFMLENBQVdnRyxVQUFYLENBQXVCbEQsQ0FBQyxHQUFHLENBQUwsSUFBVyxDQUFqQyxDQUFoQjs7TUFFQSxJQUFJc0IsR0FBRyxDQUFDM0IsSUFBSixHQUFXN0Isd0VBQVgsSUFBb0N3RCxHQUFHLENBQUMzQixJQUFKLEdBQVc3Qix5RUFBbkQsRUFBMkU7UUFDdkVtVCxLQUFLLEdBQUdHLFNBQVMsQ0FBQy9OLEdBQWxCO1FBQ0E2TixLQUFLLEdBQUdHLFNBQVMsQ0FBQ2hPLEdBQWxCO01BQ0gsQ0FIRCxNQUdPO1FBQ0g0TixLQUFLLEdBQUdHLFNBQVMsQ0FBQ3pOLEdBQWxCO1FBQ0F1TixLQUFLLEdBQUdHLFNBQVMsQ0FBQzFOLEdBQWxCO01BQ0g7O01BRUQsT0FBT3NDLENBQUMsR0FBR2hHLENBQVgsRUFBYyxFQUFFZ0csQ0FBRixFQUFLNkssS0FBSyxJQUFJOVEsQ0FBNUIsRUFBK0I7UUFDM0I2USxLQUFLLEdBQUksQ0FBQzVLLENBQUMsR0FBRyxDQUFKLEdBQVFBLENBQUMsR0FBRyxDQUFaLEdBQWdCLENBQWpCLElBQXNCakcsQ0FBdkIsR0FBNEIsQ0FBcEM7UUFDQStRLEtBQUssR0FBSSxDQUFDOUssQ0FBQyxHQUFHaEcsQ0FBQyxHQUFHLENBQVIsR0FBWWdHLENBQUMsR0FBRyxDQUFoQixHQUFvQmhHLENBQUMsR0FBRyxDQUF6QixJQUE4QkQsQ0FBL0IsR0FBb0MsQ0FBNUM7UUFDQWdSLElBQUksR0FBSS9LLENBQUMsR0FBR3NLLEtBQUwsR0FBYyxDQUFyQjs7UUFFQSxLQUFLbEwsQ0FBQyxHQUFHLENBQUosRUFBT21MLEVBQUUsR0FBRyxDQUFqQixFQUFvQm5MLENBQUMsSUFBSXJGLENBQUMsR0FBRyxDQUE3QixFQUFnQ3FGLENBQUMsSUFBSSxDQUFMLEVBQVFtTCxFQUFFLElBQUksQ0FBOUMsRUFBaUQ7VUFDN0M3TixDQUFDLEdBQUdpTCxHQUFHLENBQUNpRCxLQUFLLEdBQUd4TCxDQUFULENBQVAsRUFBb0J6QyxDQUFDLEdBQUdnTCxHQUFHLENBQUNtRCxLQUFLLEdBQUcxTCxDQUFULENBQTNCO1VBQ0E0TCxLQUFLLENBQUNULEVBQUQsQ0FBTCxHQUFjN04sQ0FBQyxHQUFHQyxDQUFMLEdBQVdnTCxHQUFHLENBQUNrRCxLQUFLLEdBQUd6TCxDQUFULENBQUgsR0FBaUIsQ0FBekM7VUFDQTZMLEtBQUssQ0FBQ1YsRUFBRCxDQUFMLEdBQWE1TixDQUFDLEdBQUdELENBQWpCO1VBRUFBLENBQUMsR0FBR2lMLEdBQUcsQ0FBQ2lELEtBQUssR0FBR3hMLENBQVIsR0FBWSxDQUFiLENBQVAsRUFBd0J6QyxDQUFDLEdBQUdnTCxHQUFHLENBQUNtRCxLQUFLLEdBQUcxTCxDQUFSLEdBQVksQ0FBYixDQUEvQjtVQUNBNEwsS0FBSyxDQUFDVCxFQUFFLEdBQUcsQ0FBTixDQUFMLEdBQWtCN04sQ0FBQyxHQUFHQyxDQUFMLEdBQVdnTCxHQUFHLENBQUNrRCxLQUFLLEdBQUd6TCxDQUFSLEdBQVksQ0FBYixDQUFILEdBQXFCLENBQWpEO1VBQ0E2TCxLQUFLLENBQUNWLEVBQUUsR0FBRyxDQUFOLENBQUwsR0FBaUI1TixDQUFDLEdBQUdELENBQXJCO1FBQ0g7O1FBQ0QsT0FBTzBDLENBQUMsR0FBR3JGLENBQVgsRUFBYyxFQUFFcUYsQ0FBRixFQUFLLEVBQUVtTCxFQUFyQixFQUF5QjtVQUNyQjdOLENBQUMsR0FBR2lMLEdBQUcsQ0FBQ2lELEtBQUssR0FBR3hMLENBQVQsQ0FBUCxFQUFvQnpDLENBQUMsR0FBR2dMLEdBQUcsQ0FBQ21ELEtBQUssR0FBRzFMLENBQVQsQ0FBM0I7VUFDQTRMLEtBQUssQ0FBQ1QsRUFBRCxDQUFMLEdBQWM3TixDQUFDLEdBQUdDLENBQUwsR0FBV2dMLEdBQUcsQ0FBQ2tELEtBQUssR0FBR3pMLENBQVQsQ0FBSCxHQUFpQixDQUF6QztVQUNBNkwsS0FBSyxDQUFDVixFQUFELENBQUwsR0FBYTVOLENBQUMsR0FBR0QsQ0FBakI7UUFDSDs7UUFFRDBDLENBQUMsR0FBSXJGLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBZDtRQUNBaVIsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQjtRQUFxQkEsS0FBSyxDQUFDNUwsQ0FBRCxDQUFMLEdBQVc0TCxLQUFLLENBQUNqUixDQUFELENBQWhCO1FBQ3JCa1IsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQjtRQUFxQkEsS0FBSyxDQUFDN0wsQ0FBRCxDQUFMLEdBQVc2TCxLQUFLLENBQUNsUixDQUFELENBQWhCOztRQUVyQixLQUFLcUYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJckYsQ0FBQyxHQUFHLENBQXJCLEVBQXdCcUYsQ0FBQyxJQUFJLENBQTdCLEVBQWdDO1VBQzVCMUMsQ0FBQyxHQUFHdU8sS0FBSyxDQUFDN0wsQ0FBQyxHQUFHLENBQUwsQ0FBVCxFQUFrQnpDLENBQUMsR0FBR3NPLEtBQUssQ0FBQzdMLENBQUMsR0FBRyxDQUFMLENBQTNCLEVBQW9Db0wsQ0FBQyxHQUFHUyxLQUFLLENBQUM3TCxDQUFDLEdBQUcsQ0FBTCxDQUE3QyxFQUFzRHFMLENBQUMsR0FBR1EsS0FBSyxDQUFDN0wsQ0FBQyxHQUFHLENBQUwsQ0FBL0QsRUFDSXNMLENBQUMsR0FBR00sS0FBSyxDQUFDNUwsQ0FBQyxHQUFHLENBQUwsQ0FEYixFQUNzQnVMLENBQUMsR0FBR0ssS0FBSyxDQUFDNUwsQ0FBQyxHQUFHLENBQUwsQ0FEL0I7VUFFQThMLElBQUksQ0FBQ0gsSUFBSSxFQUFMLENBQUosR0FBZ0JMLENBQUMsR0FBR00sS0FBSyxDQUFDNUwsQ0FBRCxDQUF6QjtVQUNBOEwsSUFBSSxDQUFDSCxJQUFJLEVBQUwsQ0FBSixHQUFnQnJPLENBQUMsR0FBR3VPLEtBQUssQ0FBQzdMLENBQUQsQ0FBVCxHQUFlekMsQ0FBQyxHQUFHLENBQW5DO1VBQ0F1TyxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWdCSixDQUFDLEdBQUdLLEtBQUssQ0FBQzVMLENBQUMsR0FBRyxDQUFMLENBQXpCO1VBQ0E4TCxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWdCUCxDQUFDLEdBQUc3TixDQUFKLEdBQVFELENBQUMsR0FBRyxDQUE1QjtVQUVBd08sSUFBSSxDQUFDSCxJQUFJLEVBQUwsQ0FBSixHQUFnQkMsS0FBSyxDQUFDNUwsQ0FBQyxHQUFHLENBQUwsQ0FBTCxHQUFlc0wsQ0FBL0I7VUFDQVEsSUFBSSxDQUFDSCxJQUFJLEVBQUwsQ0FBSixHQUFnQk4sQ0FBQyxHQUFHL04sQ0FBSixHQUFROE4sQ0FBQyxHQUFHLENBQTVCO1VBQ0FVLElBQUksQ0FBQ0gsSUFBSSxFQUFMLENBQUosR0FBZ0JDLEtBQUssQ0FBQzVMLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZXVMLENBQS9CO1VBQ0FPLElBQUksQ0FBQ0gsSUFBSSxFQUFMLENBQUosR0FBZ0JFLEtBQUssQ0FBQzdMLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZW9MLENBQWYsR0FBbUJDLENBQUMsR0FBRyxDQUF2QztRQUNIOztRQUNELE9BQU9yTCxDQUFDLEdBQUdyRixDQUFYLEVBQWMsRUFBRXFGLENBQWhCLEVBQW1CO1VBQ2Y4TCxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWdCQyxLQUFLLENBQUM1TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWU0TCxLQUFLLENBQUM1TCxDQUFELENBQXBDO1VBQ0E4TCxJQUFJLENBQUNILElBQUksRUFBTCxDQUFKLEdBQWdCRSxLQUFLLENBQUM3TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWU2TCxLQUFLLENBQUM3TCxDQUFELENBQXBCLEdBQTBCNkwsS0FBSyxDQUFDN0wsQ0FBQyxHQUFHLENBQUwsQ0FBTCxHQUFlLENBQXpEO1FBQ0g7TUFDSjs7TUFDRCxLQUFLbkksS0FBTCxDQUFXc0csVUFBWCxDQUFzQjROLFNBQXRCO01BQ0EsS0FBS2xVLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0I2TixTQUF0QjtJQUNIO0VBMWVMO0lBQUE7SUFBQSxPQTZlSSxnQ0FBdUIvUCxHQUF2QixFQUF1RWdRLE9BQXZFLEVBQTBGQyxTQUExRixFQUErR0MsVUFBL0csRUFBZ0k7TUFDNUgsSUFBSUMsRUFBRSxHQUFHblEsR0FBRyxDQUFDTyxJQUFKLEdBQVcsQ0FBcEI7TUFBQSxJQUF1QjZQLEVBQUUsR0FBR3BRLEdBQUcsQ0FBQ1EsSUFBSixHQUFXLENBQXZDO01BQUEsSUFBMENoQyxLQUFLLEdBQUd3QixHQUFHLENBQUNTLElBQXREO01BQ0EsSUFBSTRQLEVBQUUsR0FBSUYsRUFBRSxHQUFHLENBQU4sR0FBVyxDQUFwQjtNQUNBLElBQUlHLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBV0MsRUFBRSxHQUFHLENBQWhCO01BQUEsSUFBbUJDLENBQUMsR0FBRyxDQUF2QjtNQUFBLElBQTBCQyxHQUFHLEdBQUcsQ0FBaEM7TUFBQSxJQUFtQ3ZVLENBQUMsR0FBRyxDQUF2QztNQUFBLElBQTBDNkMsQ0FBQyxHQUFHLENBQTlDO01BQUEsSUFBaUQyUixDQUFDLEdBQUcsQ0FBckQ7TUFBQSxJQUF3RDFSLENBQUMsR0FBRyxDQUE1RDs7TUFFQSxJQUFJZ1IsT0FBTyxJQUFJQyxTQUFmLEVBQTBCO1FBRXRCLE9BQU8vVCxDQUFDLEdBQUdtVSxFQUFYLEVBQWUsRUFBRW5VLENBQWpCLEVBQW9CO1VBQ2hCOFQsT0FBTyxDQUFDOVQsQ0FBRCxDQUFQLEdBQWEsQ0FBYixFQUFnQitULFNBQVMsQ0FBQy9ULENBQUQsQ0FBVCxHQUFlLENBQS9CO1FBQ0g7O1FBQ0RzVSxDQUFDLEdBQUlILEVBQUUsR0FBRyxDQUFOLEdBQVcsQ0FBZixFQUFrQkksR0FBRyxHQUFHLENBQXhCOztRQUNBLEtBQUt2VSxDQUFDLEdBQUcsQ0FBSixFQUFPOEMsQ0FBQyxHQUFHLENBQWhCLEVBQW1COUMsQ0FBQyxHQUFHa1UsRUFBdkIsRUFBMkIsRUFBRWxVLENBQUYsRUFBSyxFQUFFc1UsQ0FBUCxFQUFVLEVBQUVDLEdBQXZDLEVBQTRDO1VBQ3hDSCxDQUFDLEdBQUdDLEVBQUUsR0FBRyxDQUFUOztVQUNBLEtBQUt4UixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUlvUixFQUFFLEdBQUcsQ0FBdEIsRUFBeUJwUixDQUFDLElBQUksQ0FBTCxFQUFRQyxDQUFDLElBQUksQ0FBYixFQUFnQndSLENBQUMsSUFBSSxDQUFyQixFQUF3QkMsR0FBRyxJQUFJLENBQXhELEVBQTJEO1lBQ3ZEQyxDQUFDLEdBQUdsUyxLQUFLLENBQUNRLENBQUQsQ0FBVDtZQUNBc1IsQ0FBQyxJQUFJSSxDQUFMLEVBQVFILEVBQUUsSUFBSUcsQ0FBQyxHQUFHQSxDQUFsQjtZQUNBVixPQUFPLENBQUNRLENBQUQsQ0FBUCxHQUFhUixPQUFPLENBQUNTLEdBQUQsQ0FBUCxHQUFlSCxDQUE1QjtZQUNBTCxTQUFTLENBQUNPLENBQUQsQ0FBVCxHQUFlUCxTQUFTLENBQUNRLEdBQUQsQ0FBVCxHQUFpQkYsRUFBaEM7WUFFQUcsQ0FBQyxHQUFHbFMsS0FBSyxDQUFDUSxDQUFDLEdBQUcsQ0FBTCxDQUFUO1lBQ0FzUixDQUFDLElBQUlJLENBQUwsRUFBUUgsRUFBRSxJQUFJRyxDQUFDLEdBQUdBLENBQWxCO1lBQ0FWLE9BQU8sQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBUCxHQUFpQlIsT0FBTyxDQUFDUyxHQUFHLEdBQUcsQ0FBUCxDQUFQLEdBQW1CSCxDQUFwQztZQUNBTCxTQUFTLENBQUNPLENBQUMsR0FBRyxDQUFMLENBQVQsR0FBbUJQLFNBQVMsQ0FBQ1EsR0FBRyxHQUFHLENBQVAsQ0FBVCxHQUFxQkYsRUFBeEM7VUFDSDs7VUFDRCxPQUFPeFIsQ0FBQyxHQUFHb1IsRUFBWCxFQUFlLEVBQUVwUixDQUFGLEVBQUssRUFBRUMsQ0FBUCxFQUFVLEVBQUV3UixDQUFaLEVBQWUsRUFBRUMsR0FBaEMsRUFBcUM7WUFDakNDLENBQUMsR0FBR2xTLEtBQUssQ0FBQ1EsQ0FBRCxDQUFUO1lBQ0FzUixDQUFDLElBQUlJLENBQUwsRUFBUUgsRUFBRSxJQUFJRyxDQUFDLEdBQUdBLENBQWxCO1lBQ0FWLE9BQU8sQ0FBQ1EsQ0FBRCxDQUFQLEdBQWFSLE9BQU8sQ0FBQ1MsR0FBRCxDQUFQLEdBQWVILENBQTVCO1lBQ0FMLFNBQVMsQ0FBQ08sQ0FBRCxDQUFULEdBQWVQLFNBQVMsQ0FBQ1EsR0FBRCxDQUFULEdBQWlCRixFQUFoQztVQUNIO1FBQ0o7TUFDSixDQTFCRCxNQTBCTyxJQUFJUCxPQUFKLEVBQWE7UUFFaEIsT0FBTzlULENBQUMsR0FBR21VLEVBQVgsRUFBZSxFQUFFblUsQ0FBakIsRUFBb0I7VUFDaEI4VCxPQUFPLENBQUM5VCxDQUFELENBQVAsR0FBYSxDQUFiO1FBQ0g7O1FBQ0RzVSxDQUFDLEdBQUlILEVBQUUsR0FBRyxDQUFOLEdBQVcsQ0FBZixFQUFrQkksR0FBRyxHQUFHLENBQXhCOztRQUNBLEtBQUt2VSxDQUFDLEdBQUcsQ0FBSixFQUFPOEMsQ0FBQyxHQUFHLENBQWhCLEVBQW1COUMsQ0FBQyxHQUFHa1UsRUFBdkIsRUFBMkIsRUFBRWxVLENBQUYsRUFBSyxFQUFFc1UsQ0FBUCxFQUFVLEVBQUVDLEdBQXZDLEVBQTRDO1VBQ3hDSCxDQUFDLEdBQUcsQ0FBSjs7VUFDQSxLQUFLdlIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJb1IsRUFBRSxHQUFHLENBQXRCLEVBQXlCcFIsQ0FBQyxJQUFJLENBQUwsRUFBUUMsQ0FBQyxJQUFJLENBQWIsRUFBZ0J3UixDQUFDLElBQUksQ0FBckIsRUFBd0JDLEdBQUcsSUFBSSxDQUF4RCxFQUEyRDtZQUN2REgsQ0FBQyxJQUFJOVIsS0FBSyxDQUFDUSxDQUFELENBQVY7WUFDQWdSLE9BQU8sQ0FBQ1EsQ0FBRCxDQUFQLEdBQWFSLE9BQU8sQ0FBQ1MsR0FBRCxDQUFQLEdBQWVILENBQTVCO1lBQ0FBLENBQUMsSUFBSTlSLEtBQUssQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBVjtZQUNBZ1IsT0FBTyxDQUFDUSxDQUFDLEdBQUcsQ0FBTCxDQUFQLEdBQWlCUixPQUFPLENBQUNTLEdBQUcsR0FBRyxDQUFQLENBQVAsR0FBbUJILENBQXBDO1VBQ0g7O1VBQ0QsT0FBT3ZSLENBQUMsR0FBR29SLEVBQVgsRUFBZSxFQUFFcFIsQ0FBRixFQUFLLEVBQUVDLENBQVAsRUFBVSxFQUFFd1IsQ0FBWixFQUFlLEVBQUVDLEdBQWhDLEVBQXFDO1lBQ2pDSCxDQUFDLElBQUk5UixLQUFLLENBQUNRLENBQUQsQ0FBVjtZQUNBZ1IsT0FBTyxDQUFDUSxDQUFELENBQVAsR0FBYVIsT0FBTyxDQUFDUyxHQUFELENBQVAsR0FBZUgsQ0FBNUI7VUFDSDtRQUNKO01BQ0osQ0FuQk0sTUFtQkEsSUFBSUwsU0FBSixFQUFlO1FBRWxCLE9BQU8vVCxDQUFDLEdBQUdtVSxFQUFYLEVBQWUsRUFBRW5VLENBQWpCLEVBQW9CO1VBQ2hCK1QsU0FBUyxDQUFDL1QsQ0FBRCxDQUFULEdBQWUsQ0FBZjtRQUNIOztRQUNEc1UsQ0FBQyxHQUFJSCxFQUFFLEdBQUcsQ0FBTixHQUFXLENBQWYsRUFBa0JJLEdBQUcsR0FBRyxDQUF4Qjs7UUFDQSxLQUFLdlUsQ0FBQyxHQUFHLENBQUosRUFBTzhDLENBQUMsR0FBRyxDQUFoQixFQUFtQjlDLENBQUMsR0FBR2tVLEVBQXZCLEVBQTJCLEVBQUVsVSxDQUFGLEVBQUssRUFBRXNVLENBQVAsRUFBVSxFQUFFQyxHQUF2QyxFQUE0QztVQUN4Q0YsRUFBRSxHQUFHLENBQUw7O1VBQ0EsS0FBS3hSLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSW9SLEVBQUUsR0FBRyxDQUF0QixFQUF5QnBSLENBQUMsSUFBSSxDQUFMLEVBQVFDLENBQUMsSUFBSSxDQUFiLEVBQWdCd1IsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQyxHQUFHLElBQUksQ0FBeEQsRUFBMkQ7WUFDdkRDLENBQUMsR0FBR2xTLEtBQUssQ0FBQ1EsQ0FBRCxDQUFUO1lBQ0F1UixFQUFFLElBQUlHLENBQUMsR0FBR0EsQ0FBVjtZQUNBVCxTQUFTLENBQUNPLENBQUQsQ0FBVCxHQUFlUCxTQUFTLENBQUNRLEdBQUQsQ0FBVCxHQUFpQkYsRUFBaEM7WUFDQUcsQ0FBQyxHQUFHbFMsS0FBSyxDQUFDUSxDQUFDLEdBQUcsQ0FBTCxDQUFUO1lBQ0F1UixFQUFFLElBQUlHLENBQUMsR0FBR0EsQ0FBVjtZQUNBVCxTQUFTLENBQUNPLENBQUMsR0FBRyxDQUFMLENBQVQsR0FBbUJQLFNBQVMsQ0FBQ1EsR0FBRyxHQUFHLENBQVAsQ0FBVCxHQUFxQkYsRUFBeEM7VUFDSDs7VUFDRCxPQUFPeFIsQ0FBQyxHQUFHb1IsRUFBWCxFQUFlLEVBQUVwUixDQUFGLEVBQUssRUFBRUMsQ0FBUCxFQUFVLEVBQUV3UixDQUFaLEVBQWUsRUFBRUMsR0FBaEMsRUFBcUM7WUFDakNDLENBQUMsR0FBR2xTLEtBQUssQ0FBQ1EsQ0FBRCxDQUFUO1lBQ0F1UixFQUFFLElBQUlHLENBQUMsR0FBR0EsQ0FBVjtZQUNBVCxTQUFTLENBQUNPLENBQUQsQ0FBVCxHQUFlUCxTQUFTLENBQUNRLEdBQUQsQ0FBVCxHQUFpQkYsRUFBaEM7VUFDSDtRQUNKO01BQ0o7O01BRUQsSUFBSUwsVUFBSixFQUFnQjtRQUVaLEtBQUtoVSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdtVSxFQUFoQixFQUFvQixFQUFFblUsQ0FBdEIsRUFBeUI7VUFDckJnVSxVQUFVLENBQUNoVSxDQUFELENBQVYsR0FBZ0IsQ0FBaEI7UUFDSDs7UUFFRHNVLENBQUMsR0FBSUgsRUFBRSxHQUFHLENBQU4sR0FBVyxDQUFmLEVBQWtCSSxHQUFHLEdBQUcsQ0FBeEI7O1FBQ0EsS0FBS3ZVLENBQUMsR0FBRyxDQUFKLEVBQU84QyxDQUFDLEdBQUcsQ0FBaEIsRUFBbUI5QyxDQUFDLEdBQUdrVSxFQUF2QixFQUEyQixFQUFFbFUsQ0FBRixFQUFLLEVBQUVzVSxDQUFQLEVBQVUsRUFBRUMsR0FBdkMsRUFBNEM7VUFDeEMsS0FBSzFSLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSW9SLEVBQUUsR0FBRyxDQUF0QixFQUF5QnBSLENBQUMsSUFBSSxDQUFMLEVBQVFDLENBQUMsSUFBSSxDQUFiLEVBQWdCd1IsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQyxHQUFHLElBQUksQ0FBeEQsRUFBMkQ7WUFDdkRQLFVBQVUsQ0FBQ00sQ0FBRCxDQUFWLEdBQWdCaFMsS0FBSyxDQUFDUSxDQUFELENBQUwsR0FBV2tSLFVBQVUsQ0FBQ08sR0FBRCxDQUFyQztZQUNBUCxVQUFVLENBQUNNLENBQUMsR0FBRyxDQUFMLENBQVYsR0FBb0JoUyxLQUFLLENBQUNRLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZWtSLFVBQVUsQ0FBQ08sR0FBRyxHQUFHLENBQVAsQ0FBN0M7VUFDSDs7VUFDRCxPQUFPMVIsQ0FBQyxHQUFHb1IsRUFBWCxFQUFlLEVBQUVwUixDQUFGLEVBQUssRUFBRUMsQ0FBUCxFQUFVLEVBQUV3UixDQUFaLEVBQWUsRUFBRUMsR0FBaEMsRUFBcUM7WUFDakNQLFVBQVUsQ0FBQ00sQ0FBRCxDQUFWLEdBQWdCaFMsS0FBSyxDQUFDUSxDQUFELENBQUwsR0FBV2tSLFVBQVUsQ0FBQ08sR0FBRCxDQUFyQztVQUNIO1FBQ0o7O1FBRURELENBQUMsR0FBSUgsRUFBRSxHQUFHRixFQUFOLEdBQVksQ0FBaEIsRUFBbUJNLEdBQUcsR0FBR04sRUFBekI7O1FBQ0EsS0FBS2pVLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2tVLEVBQWhCLEVBQW9CLEVBQUVsVSxDQUFGLEVBQUtzVSxDQUFDLElBQUlILEVBQVYsRUFBY0ksR0FBRyxJQUFJSixFQUF6QyxFQUE2QztVQUN6Q0gsVUFBVSxDQUFDTSxDQUFELENBQVYsSUFBaUJOLFVBQVUsQ0FBQ08sR0FBRCxDQUEzQjtRQUNIOztRQUVELEtBQUsxUixDQUFDLEdBQUdvUixFQUFFLEdBQUcsQ0FBZCxFQUFpQnBSLENBQUMsR0FBRyxDQUFyQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtVQUN6QnlSLENBQUMsR0FBR3pSLENBQUMsR0FBR3FSLEVBQUUsR0FBR0MsRUFBYixFQUFpQkksR0FBRyxHQUFHRCxDQUFDLEdBQUdILEVBQTNCOztVQUNBLEtBQUtuVSxDQUFDLEdBQUdrVSxFQUFULEVBQWFsVSxDQUFDLEdBQUcsQ0FBakIsRUFBb0IsRUFBRUEsQ0FBRixFQUFLc1UsQ0FBQyxJQUFJSCxFQUFWLEVBQWNJLEdBQUcsSUFBSUosRUFBekMsRUFBNkM7WUFDekNILFVBQVUsQ0FBQ00sQ0FBRCxDQUFWLElBQWlCTixVQUFVLENBQUNPLEdBQUQsQ0FBVixHQUFrQlAsVUFBVSxDQUFDTyxHQUFHLEdBQUcsQ0FBUCxDQUE3QztVQUNIO1FBQ0o7TUFDSjtJQUNKO0VBcGxCTDtJQUFBO0lBQUEsT0FxbEJJLDRCQUFtQnpRLEdBQW5CLEVBQTJFQyxHQUEzRSxFQUFnSjtNQUM1SSxJQUFJdkIsQ0FBQyxHQUFHc0IsR0FBRyxDQUFDTyxJQUFaO01BQUEsSUFBa0I1QixDQUFDLEdBQUdxQixHQUFHLENBQUNRLElBQTFCO01BQUEsSUFBZ0NoQyxLQUFLLEdBQUd3QixHQUFHLENBQUNTLElBQTVDO01BRUFSLEdBQUcsQ0FBQzFELE1BQUosQ0FBV21DLENBQVgsRUFBY0MsQ0FBZCxFQUFpQnFCLEdBQUcsQ0FBQ00sT0FBckI7TUFFQSxJQUFJN0IsS0FBSyxHQUFHd0IsR0FBRyxDQUFDUSxJQUFoQjtNQUFBLElBQXNCbkUsSUFBSSxHQUFHb0MsQ0FBQyxHQUFHQyxDQUFqQztNQUNBLElBQUl6QyxDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVd5VSxJQUFJLEdBQUcsQ0FBbEI7TUFBQSxJQUFxQkMsS0FBckI7TUFBQSxJQUE0QkMsSUFBNUI7TUFFQSxJQUFJQyxVQUFVLEdBQUcsS0FBS2xWLEtBQUwsQ0FBV2dHLFVBQVgsQ0FBc0IsT0FBTyxDQUE3QixDQUFqQjtNQUNBZ1AsS0FBSyxHQUFHRSxVQUFVLENBQUMvTyxHQUFuQjs7TUFDQSxPQUFPN0YsQ0FBQyxHQUFHLEdBQVgsRUFBZ0IsRUFBRUEsQ0FBbEI7UUFBcUIwVSxLQUFLLENBQUMxVSxDQUFELENBQUwsR0FBVyxDQUFYO01BQXJCOztNQUNBLEtBQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0ksSUFBaEIsRUFBc0IsRUFBRUosQ0FBeEIsRUFBMkI7UUFDdkIsRUFBRTBVLEtBQUssQ0FBQ3BTLEtBQUssQ0FBQ3RDLENBQUQsQ0FBTixDQUFQO01BQ0g7O01BRUR5VSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxDQUFELENBQVo7O01BQ0EsS0FBSzFVLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRyxHQUFoQixFQUFxQixFQUFFQSxDQUF2QixFQUEwQjtRQUN0QnlVLElBQUksR0FBR0MsS0FBSyxDQUFDMVUsQ0FBRCxDQUFMLElBQVl5VSxJQUFuQjtNQUNIOztNQUVERSxJQUFJLEdBQUcsTUFBTXZVLElBQWI7O01BQ0EsS0FBS0osQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSSxJQUFoQixFQUFzQixFQUFFSixDQUF4QixFQUEyQjtRQUN2QnVDLEtBQUssQ0FBQ3ZDLENBQUQsQ0FBTCxHQUFZMFUsS0FBSyxDQUFDcFMsS0FBSyxDQUFDdEMsQ0FBRCxDQUFOLENBQUwsR0FBa0IyVSxJQUFsQixHQUF5QixHQUExQixHQUFpQyxDQUE1QztNQUNIOztNQUNELEtBQUtqVixLQUFMLENBQVdzRyxVQUFYLENBQXNCNE8sVUFBdEI7SUFDSDtFQTltQkw7SUFBQTtJQUFBLE9BK21CSSxlQUFNOVEsR0FBTixFQUFnQkMsR0FBaEIsRUFBMEI4USxVQUExQixFQUE4Q0MsV0FBOUMsRUFBaUU7TUFDN0QsSUFBSXRTLENBQUMsR0FBR3NCLEdBQUcsQ0FBQ08sSUFBWjtNQUFBLElBQWtCNUIsQ0FBQyxHQUFHcUIsR0FBRyxDQUFDUSxJQUExQjtNQUFBLElBQWdDaEMsS0FBSyxHQUFHd0IsR0FBRyxDQUFDUyxJQUE1QztNQUVBUixHQUFHLENBQUMxRCxNQUFKLENBQVdtQyxDQUFYLEVBQWNDLENBQWQsRUFBaUJxQixHQUFHLENBQUNNLE9BQXJCO01BRUEsSUFBSTdCLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1EsSUFBaEI7TUFDQSxJQUFJdkUsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFXLENBQXZCO01BQUEsSUFBMEJrUyxJQUFJLEdBQUcsQ0FBakM7TUFBQSxJQUFvQ3hSLEVBQUUsR0FBR2YsQ0FBQyxJQUFJLENBQTlDO01BQUEsSUFBaUR3UyxLQUFLLEdBQUcsQ0FBekQ7TUFBQSxJQUE0REMsUUFBUSxHQUFHLENBQXZFO01BQUEsSUFBMEU3QixDQUFDLEdBQUcsQ0FBOUU7TUFBQSxJQUFpRnZMLENBQUMsR0FBRyxDQUFyRjtNQUFBLElBQXdGWSxDQUFDLEdBQUcsQ0FBNUY7TUFBQSxJQUErRjJMLENBQUMsR0FBRyxDQUFuRztNQUNBLElBQUljLEtBQUssR0FBRyxDQUFaO01BQUEsSUFBZUMsS0FBSyxHQUFHLENBQXZCO01BR0EsSUFBSUMsU0FBUyxHQUFHLEtBQUsxVixLQUFMLENBQVdnRyxVQUFYLENBQXVCakQsQ0FBQyxHQUFHYyxFQUFMLElBQVksQ0FBbEMsQ0FBaEI7TUFDQSxJQUFJa0MsUUFBUSxHQUFHLEtBQUsvRixLQUFMLENBQVdnRyxVQUFYLENBQXVCLEtBQUtsRCxDQUFDLEdBQUcsQ0FBVCxDQUFELElBQWlCLENBQXZDLENBQWY7TUFDQSxJQUFJNlMsUUFBUSxHQUFHLEtBQUszVixLQUFMLENBQVdnRyxVQUFYLENBQXVCLENBQUNqRCxDQUFDLEdBQUcsQ0FBTCxLQUFXRCxDQUFDLEdBQUcsQ0FBZixDQUFELElBQXVCLENBQTdDLENBQWY7TUFDQSxJQUFJOFMsVUFBVSxHQUFHLEtBQUs1VixLQUFMLENBQVdnRyxVQUFYLENBQXVCakQsQ0FBQyxHQUFHRCxDQUFMLElBQVcsQ0FBakMsQ0FBakI7TUFHQSxJQUFJSCxHQUFHLEdBQUdvRCxRQUFRLENBQUNJLEdBQW5CO01BQ0EsSUFBSTBQLEdBQUcsR0FBR0YsUUFBUSxDQUFDeFAsR0FBbkI7TUFDQSxJQUFJMlAsS0FBSyxHQUFHRixVQUFVLENBQUN6UCxHQUF2QjtNQUNBLElBQUk0UCxJQUFJLEdBQUdMLFNBQVMsQ0FBQ3ZQLEdBQXJCO01BQ0EsSUFBSTZQLE1BQU0sR0FBRyxJQUFJbFAseURBQUosQ0FBYWhFLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CbkMsMkVBQW5CLEVBQTZDOFUsU0FBUyxDQUFDN1EsSUFBdkQsQ0FBYjtNQUNBLElBQUlvUixJQUFJLEdBQUcsQ0FBWDtNQUFBLElBQWNDLElBQUksR0FBSXBULENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBVCxHQUFjLENBQW5DO01BQUEsSUFBc0NxVCxJQUFJLEdBQUksS0FBS3JULENBQUMsR0FBRyxDQUFULElBQWMsQ0FBZixHQUFvQixDQUFqRTtNQUFBLElBQW9Fc1QsS0FBSyxHQUFJdFQsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUF0RjtNQUFBLElBQXlGdVQsS0FBSyxHQUFZRCxLQUFLLEdBQUcsQ0FBVCxHQUFjLENBQXZIO01BQUEsSUFBMEhFLE9BQU8sR0FBRyxDQUFwSTtNQUVBLEtBQUtDLGlCQUFMLENBQXVCblMsR0FBdkIsRUFBNEI0UixNQUE1Qjs7TUFFQSxJQUFJYixVQUFVLEdBQUdDLFdBQWpCLEVBQThCO1FBQzFCOVUsQ0FBQyxHQUFHNlUsVUFBSjtRQUNBQSxVQUFVLEdBQUdDLFdBQWI7UUFDQUEsV0FBVyxHQUFHOVUsQ0FBZDtNQUNIOztNQUVEQSxDQUFDLEdBQUksS0FBS3dDLENBQUMsR0FBRyxDQUFULENBQUQsR0FBZ0IsQ0FBcEI7O01BQ0EsT0FBTyxFQUFFeEMsQ0FBRixJQUFPLENBQWQsRUFBaUI7UUFDYnFDLEdBQUcsQ0FBQ3JDLENBQUQsQ0FBSCxHQUFTLENBQVQ7TUFDSDs7TUFFREEsQ0FBQyxHQUFJLENBQUN5QyxDQUFDLEdBQUcsQ0FBTCxLQUFXRCxDQUFDLEdBQUcsQ0FBZixDQUFELEdBQXNCLENBQTFCOztNQUNBLE9BQU8sRUFBRXhDLENBQUYsSUFBTyxDQUFkLEVBQWlCO1FBQ2J1VixHQUFHLENBQUN2VixDQUFELENBQUgsR0FBUyxDQUFUO01BQ0g7O01BRUQsT0FBTzZDLENBQUMsR0FBR0wsQ0FBWCxFQUFjLEVBQUVLLENBQUYsRUFBS2tTLElBQUksSUFBSSxDQUEzQixFQUE4QjtRQUUxQmxOLENBQUMsR0FBRzROLElBQUksQ0FBQ1YsSUFBRCxDQUFSLEVBQWdCdE0sQ0FBQyxHQUFHZ04sSUFBSSxDQUFDVixJQUFJLEdBQUcsQ0FBUixDQUF4QjtRQUVBMVMsR0FBRyxDQUFDdVQsSUFBSSxHQUFHL1MsQ0FBUixDQUFILEdBQWlCLENBQUNnRixDQUFDLEdBQUlBLENBQUMsSUFBSSxFQUFYLEtBQW1CQSxDQUFDLElBQUksRUFBeEIsQ0FBRCxJQUFpQyxDQUFDWSxDQUFDLEdBQUlBLENBQUMsSUFBSSxFQUFYLEtBQW1CQSxDQUFDLElBQUksRUFBeEIsQ0FBakMsQ0FBaEI7TUFDSDs7TUFFRCxLQUFLekksQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxJQUFJeUMsQ0FBakIsRUFBb0IsRUFBRXpDLENBQUYsRUFBSytVLElBQUksSUFBSXhSLEVBQWpDLEVBQXFDO1FBQ2pDLElBQUl2RCxDQUFDLElBQUl5QyxDQUFULEVBQVk7VUFDUkksQ0FBQyxHQUFHZ1QsSUFBSSxHQUFHclQsQ0FBWDs7VUFDQSxPQUFPLEVBQUVLLENBQUYsSUFBT2dULElBQWQsRUFBb0I7WUFDaEJ4VCxHQUFHLENBQUNRLENBQUQsQ0FBSCxHQUFTLENBQVQ7VUFDSDtRQUNKLENBTEQsTUFLTztVQUNILEtBQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0wsQ0FBaEIsRUFBbUJLLENBQUMsRUFBcEIsRUFBd0I7WUFFcEJnRixDQUFDLEdBQUc0TixJQUFJLENBQUNWLElBQUksSUFBSWxTLENBQUMsSUFBSSxDQUFULENBQUwsQ0FBUixFQUEyQjRGLENBQUMsR0FBR2dOLElBQUksQ0FBQ1YsSUFBSSxJQUFJbFMsQ0FBQyxJQUFJLENBQVQsQ0FBSixHQUFrQixDQUFuQixDQUFuQztZQUVBUixHQUFHLENBQUN3VCxJQUFJLEdBQUdoVCxDQUFSLENBQUgsR0FBaUIsQ0FBQ2dGLENBQUMsR0FBSUEsQ0FBQyxJQUFJLEVBQVgsS0FBbUJBLENBQUMsSUFBSSxFQUF4QixDQUFELElBQWlDLENBQUNZLENBQUMsR0FBSUEsQ0FBQyxJQUFJLEVBQVgsS0FBbUJBLENBQUMsSUFBSSxFQUF4QixDQUFqQyxDQUFoQjtVQUNIO1FBQ0o7O1FBQ0R1TSxLQUFLLEdBQUlELElBQUksR0FBR3hSLEVBQVIsR0FBYyxDQUF0QjtRQUNBZ1MsR0FBRyxDQUFDUSxLQUFLLEdBQUcsQ0FBVCxDQUFILEdBQWlCLENBQWpCO1FBQ0FkLFFBQVEsR0FBRyxDQUFYOztRQUNBLEtBQUtwUyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdMLENBQWhCLEVBQW1CLEVBQUVLLENBQUYsRUFBS21TLEtBQUssSUFBSSxDQUFqQyxFQUFvQztVQUNoQzVCLENBQUMsR0FBRy9RLEdBQUcsQ0FBQ3VULElBQUksR0FBRy9TLENBQVIsQ0FBUDs7VUFDQSxJQUFJdVEsQ0FBQyxHQUFHeUIsVUFBUixFQUFvQjtZQUNoQmhOLENBQUMsR0FBRzROLElBQUksQ0FBQ1QsS0FBRCxDQUFSO1lBQ0F2TSxDQUFDLEdBQUdnTixJQUFJLENBQUNULEtBQUssR0FBRyxDQUFULENBQVI7WUFDQVosQ0FBQyxHQUFHdk0sQ0FBQyxHQUFHWSxDQUFSO1lBRUFaLENBQUMsR0FBSSxDQUFDQSxDQUFDLEdBQUlBLENBQUMsSUFBSSxFQUFYLEtBQW1CQSxDQUFDLElBQUksRUFBeEIsQ0FBRCxHQUFnQyxDQUFwQztZQUNBWSxDQUFDLEdBQUksQ0FBQ0EsQ0FBQyxHQUFJQSxDQUFDLElBQUksRUFBWCxLQUFtQkEsQ0FBQyxJQUFJLEVBQXhCLENBQUQsR0FBZ0MsQ0FBcEM7WUFFQXlNLEtBQUssR0FBR3JOLENBQUMsR0FBRyxLQUFaO1lBQ0FzTixLQUFLLEdBQUdELEtBQUssSUFBS3JOLENBQUMsR0FBR0EsQ0FBTCxJQUFXLEVBQWYsQ0FBYjtZQUNBWSxDQUFDLEtBQUssRUFBTjs7WUFDQSxJQUFJQSxDQUFDLEdBQUd5TSxLQUFSLEVBQWU7Y0FDWCxJQUFJOUIsQ0FBQyxHQUFHL1EsR0FBRyxDQUFDdVQsSUFBSSxHQUFHL1MsQ0FBUCxHQUFXLENBQVosQ0FBUCxJQUF5QnVRLENBQUMsSUFBSS9RLEdBQUcsQ0FBQ3VULElBQUksR0FBRy9TLENBQVAsR0FBVyxDQUFaLENBQXJDLEVBQXFEO2dCQUNqRCxJQUFJdVEsQ0FBQyxHQUFHMEIsV0FBSixJQUFtQixDQUFDRyxRQUFwQixJQUFnQ00sR0FBRyxDQUFDUSxLQUFLLEdBQUdsVCxDQUFSLEdBQVlpVCxLQUFiLENBQUgsSUFBMEIsQ0FBOUQsRUFBaUU7a0JBQzdEUCxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtrQkFDQW9TLFFBQVEsR0FBRyxDQUFYO2tCQUNBTyxLQUFLLENBQUNRLE9BQU8sRUFBUixDQUFMLEdBQW1CRCxLQUFLLEdBQUdsVCxDQUEzQjtnQkFDSCxDQUpELE1BSU87a0JBQ0gwUyxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtnQkFDSDs7Z0JBQ0Q7Y0FDSDtZQUNKLENBWEQsTUFXTyxJQUFJNEYsQ0FBQyxHQUFHME0sS0FBUixFQUFlO2NBQ2xCLElBQUkvQixDQUFDLEdBQUcvUSxHQUFHLENBQUNzVCxJQUFJLEdBQUc5UyxDQUFSLENBQVAsSUFBcUJ1USxDQUFDLElBQUkvUSxHQUFHLENBQUN3VCxJQUFJLEdBQUdoVCxDQUFSLENBQWpDLEVBQTZDO2dCQUN6QyxJQUFJdVEsQ0FBQyxHQUFHMEIsV0FBSixJQUFtQixDQUFDRyxRQUFwQixJQUFnQ00sR0FBRyxDQUFDUSxLQUFLLEdBQUdsVCxDQUFSLEdBQVlpVCxLQUFiLENBQUgsSUFBMEIsQ0FBOUQsRUFBaUU7a0JBQzdEUCxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtrQkFDQW9TLFFBQVEsR0FBRyxDQUFYO2tCQUNBTyxLQUFLLENBQUNRLE9BQU8sRUFBUixDQUFMLEdBQW1CRCxLQUFLLEdBQUdsVCxDQUEzQjtnQkFDSCxDQUpELE1BSU87a0JBQ0gwUyxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtnQkFDSDs7Z0JBQ0Q7Y0FDSDtZQUNKLENBWE0sTUFXQTtjQUNIdVIsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQUMsQ0FBVCxHQUFhLENBQWpCOztjQUNBLElBQUloQixDQUFDLEdBQUcvUSxHQUFHLENBQUNzVCxJQUFJLEdBQUc5UyxDQUFQLEdBQVd1UixDQUFaLENBQVAsSUFBeUJoQixDQUFDLEdBQUcvUSxHQUFHLENBQUN3VCxJQUFJLEdBQUdoVCxDQUFQLEdBQVd1UixDQUFaLENBQXBDLEVBQW9EO2dCQUNoRCxJQUFJaEIsQ0FBQyxHQUFHMEIsV0FBSixJQUFtQixDQUFDRyxRQUFwQixJQUFnQ00sR0FBRyxDQUFDUSxLQUFLLEdBQUdsVCxDQUFSLEdBQVlpVCxLQUFiLENBQUgsSUFBMEIsQ0FBOUQsRUFBaUU7a0JBQzdEUCxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtrQkFDQW9TLFFBQVEsR0FBRyxDQUFYO2tCQUNBTyxLQUFLLENBQUNRLE9BQU8sRUFBUixDQUFMLEdBQW1CRCxLQUFLLEdBQUdsVCxDQUEzQjtnQkFDSCxDQUpELE1BSU87a0JBQ0gwUyxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtnQkFDSDs7Z0JBQ0Q7Y0FDSDtZQUNKO1VBQ0o7O1VBQ0QwUyxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxHQUFpQixDQUFqQjtVQUNBb1MsUUFBUSxHQUFHLENBQVg7UUFDSDs7UUFDRE0sR0FBRyxDQUFDUSxLQUFLLEdBQUd2VCxDQUFULENBQUgsR0FBaUIsQ0FBakI7UUFDQXVULEtBQUssSUFBSUQsS0FBVDtRQUNBalQsQ0FBQyxHQUFHOFMsSUFBSjtRQUNBQSxJQUFJLEdBQUdDLElBQVA7UUFDQUEsSUFBSSxHQUFHQyxJQUFQO1FBQ0FBLElBQUksR0FBR2hULENBQVA7TUFDSDs7TUFFREEsQ0FBQyxHQUFHa1QsS0FBSyxHQUFHRCxLQUFSLEdBQWdCLENBQXBCOztNQUNBLEtBQUs5VixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc4VixLQUFoQixFQUF1QixFQUFFOVYsQ0FBRixFQUFLLEVBQUU2QyxDQUE5QixFQUFpQztRQUM3QjBTLEdBQUcsQ0FBQzFTLENBQUQsQ0FBSCxHQUFTLENBQVQ7TUFDSDs7TUFFRCxPQUFPbVQsT0FBTyxHQUFHLENBQWpCLEVBQW9CO1FBQ2hCRCxLQUFLLEdBQUdQLEtBQUssQ0FBQyxFQUFFUSxPQUFILENBQWI7UUFDQUQsS0FBSyxJQUFJRCxLQUFLLEdBQUcsQ0FBakI7UUFDQSxJQUFJUCxHQUFHLENBQUNRLEtBQUQsQ0FBSCxJQUFjLENBQWxCLEVBQXFCUixHQUFHLENBQUNRLEtBQUQsQ0FBSCxHQUFhLENBQWIsRUFBZ0JQLEtBQUssQ0FBQ1EsT0FBTyxFQUFSLENBQUwsR0FBbUJELEtBQW5DO1FBQ3JCQSxLQUFLLElBQUksQ0FBVDtRQUNBLElBQUlSLEdBQUcsQ0FBQ1EsS0FBRCxDQUFILElBQWMsQ0FBbEIsRUFBcUJSLEdBQUcsQ0FBQ1EsS0FBRCxDQUFILEdBQWEsQ0FBYixFQUFnQlAsS0FBSyxDQUFDUSxPQUFPLEVBQVIsQ0FBTCxHQUFtQkQsS0FBbkM7UUFDckJBLEtBQUssSUFBSSxDQUFUO1FBQ0EsSUFBSVIsR0FBRyxDQUFDUSxLQUFELENBQUgsSUFBYyxDQUFsQixFQUFxQlIsR0FBRyxDQUFDUSxLQUFELENBQUgsR0FBYSxDQUFiLEVBQWdCUCxLQUFLLENBQUNRLE9BQU8sRUFBUixDQUFMLEdBQW1CRCxLQUFuQztRQUNyQkEsS0FBSyxJQUFJRCxLQUFUO1FBQ0EsSUFBSVAsR0FBRyxDQUFDUSxLQUFELENBQUgsSUFBYyxDQUFsQixFQUFxQlIsR0FBRyxDQUFDUSxLQUFELENBQUgsR0FBYSxDQUFiLEVBQWdCUCxLQUFLLENBQUNRLE9BQU8sRUFBUixDQUFMLEdBQW1CRCxLQUFuQztRQUNyQkEsS0FBSyxJQUFJLENBQVQ7UUFDQSxJQUFJUixHQUFHLENBQUNRLEtBQUQsQ0FBSCxJQUFjLENBQWxCLEVBQXFCUixHQUFHLENBQUNRLEtBQUQsQ0FBSCxHQUFhLENBQWIsRUFBZ0JQLEtBQUssQ0FBQ1EsT0FBTyxFQUFSLENBQUwsR0FBbUJELEtBQW5DO1FBQ3JCQSxLQUFLLElBQUlELEtBQVQ7UUFDQSxJQUFJUCxHQUFHLENBQUNRLEtBQUQsQ0FBSCxJQUFjLENBQWxCLEVBQXFCUixHQUFHLENBQUNRLEtBQUQsQ0FBSCxHQUFhLENBQWIsRUFBZ0JQLEtBQUssQ0FBQ1EsT0FBTyxFQUFSLENBQUwsR0FBbUJELEtBQW5DO1FBQ3JCQSxLQUFLLElBQUksQ0FBVDtRQUNBLElBQUlSLEdBQUcsQ0FBQ1EsS0FBRCxDQUFILElBQWMsQ0FBbEIsRUFBcUJSLEdBQUcsQ0FBQ1EsS0FBRCxDQUFILEdBQWEsQ0FBYixFQUFnQlAsS0FBSyxDQUFDUSxPQUFPLEVBQVIsQ0FBTCxHQUFtQkQsS0FBbkM7UUFDckJBLEtBQUssSUFBSSxDQUFUO1FBQ0EsSUFBSVIsR0FBRyxDQUFDUSxLQUFELENBQUgsSUFBYyxDQUFsQixFQUFxQlIsR0FBRyxDQUFDUSxLQUFELENBQUgsR0FBYSxDQUFiLEVBQWdCUCxLQUFLLENBQUNRLE9BQU8sRUFBUixDQUFMLEdBQW1CRCxLQUFuQztNQUN4Qjs7TUFFREEsS0FBSyxHQUFHRCxLQUFLLEdBQUcsQ0FBaEI7TUFDQUgsSUFBSSxHQUFHLENBQVA7O01BQ0EsS0FBSzNWLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3lDLENBQWhCLEVBQW1CLEVBQUV6QyxDQUFGLEVBQUsrVixLQUFLLElBQUlELEtBQWpDLEVBQXdDO1FBQ3BDLEtBQUtqVCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdMLENBQWhCLEVBQW1CLEVBQUVLLENBQXJCLEVBQXdCO1VBQ3BCTixLQUFLLENBQUNvVCxJQUFJLEVBQUwsQ0FBTCxHQUFpQk8sTUFBTSxDQUFDWCxHQUFHLENBQUNRLEtBQUssR0FBR2xULENBQVQsQ0FBSCxJQUFrQixDQUFuQixDQUFOLEdBQThCLElBQS9DO1FBQ0g7TUFDSjs7TUFHRCxLQUFLbkQsS0FBTCxDQUFXc0csVUFBWCxDQUFzQm9QLFNBQXRCO01BQ0EsS0FBSzFWLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JQLFFBQXRCO01BQ0EsS0FBSy9GLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JxUCxRQUF0QjtNQUNBLEtBQUszVixLQUFMLENBQVdzRyxVQUFYLENBQXNCc1AsVUFBdEI7SUFDSDtFQWx4Qkw7SUFBQTtJQUFBLE9Bb3hCSSwwQkFBaUJ4UixHQUFqQixFQUFpRUMsR0FBakUsRUFBaUhvUyxTQUFqSCxFQUEySUMsVUFBM0ksRUFBNko7TUFDekosSUFBSSxPQUFPQSxVQUFQLEtBQXNCLFdBQTFCLEVBQXVDO1FBQUVBLFVBQVUsR0FBRyxDQUFiO01BQWlCOztNQUMxRCxJQUFJQyxTQUFTLEdBQUd2UyxHQUFHLENBQUNPLElBQUosR0FBVyxDQUEzQjtNQUFBLElBQThCaVMsVUFBVSxHQUFHeFMsR0FBRyxDQUFDUSxJQUFKLEdBQVcsQ0FBdEQ7TUFBQSxJQUF5RGlTLFNBQVMsR0FBR3hTLEdBQUcsQ0FBQ00sSUFBSixHQUFXLENBQWhGO01BQUEsSUFBbUZtUyxVQUFVLEdBQUd6UyxHQUFHLENBQUNPLElBQUosR0FBVyxDQUEzRztNQUNBLElBQUloQyxLQUFLLEdBQUd3QixHQUFHLENBQUNTLElBQWhCO01BQUEsSUFBc0JoQyxLQUFLLEdBQUd3QixHQUFHLENBQUNRLElBQWxDO01BQ0EsSUFBSXNELENBQUMsR0FBRyxDQUFSO01BQUEsSUFBV1ksQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQmdPLEdBQUcsR0FBRyxDQUF4QjtNQUFBLElBQTJCQyxHQUFHLEdBQUcsQ0FBakM7TUFBQSxJQUFvQ0MsR0FBRyxHQUFHLENBQTFDO01BQUEsSUFBNkNDLEVBQUUsR0FBRyxHQUFsRDtNQUFBLElBQXVEQyxFQUFFLEdBQUcsR0FBNUQ7TUFBQSxJQUFpRUMsR0FBRyxHQUFHLEdBQXZFO01BQUEsSUFBNEVDLEdBQUcsR0FBRyxHQUFsRjtNQUFBLElBQXVGQyxFQUFFLEdBQUcsR0FBNUY7TUFBQSxJQUFpR0MsRUFBRSxHQUFHLEdBQXRHO01BQUEsSUFBMkc5UixDQUFDLEdBQUcsR0FBL0c7TUFBQSxJQUFvSEMsQ0FBQyxHQUFHLEdBQXhIO01BQUEsSUFBNkg4UixFQUFFLEdBQUcsR0FBbEk7TUFBQSxJQUF1SUMsRUFBRSxHQUFHLEdBQTVJO01BQ0EsSUFBSUMsRUFBRSxHQUFHakIsU0FBUyxDQUFDNVIsSUFBbkI7TUFDQSxJQUFJOFMsR0FBRyxHQUFHRCxFQUFFLENBQUMsQ0FBRCxDQUFaO01BQUEsSUFBaUJFLEdBQUcsR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBekI7TUFBQSxJQUE4QkcsR0FBRyxHQUFHSCxFQUFFLENBQUMsQ0FBRCxDQUF0QztNQUFBLElBQ0lJLEdBQUcsR0FBR0osRUFBRSxDQUFDLENBQUQsQ0FEWjtNQUFBLElBQ2lCSyxHQUFHLEdBQUdMLEVBQUUsQ0FBQyxDQUFELENBRHpCO01BQUEsSUFDOEJNLEdBQUcsR0FBR04sRUFBRSxDQUFDLENBQUQsQ0FEdEM7TUFBQSxJQUVJTyxHQUFHLEdBQUdQLEVBQUUsQ0FBQyxDQUFELENBRlo7TUFBQSxJQUVpQlEsR0FBRyxHQUFHUixFQUFFLENBQUMsQ0FBRCxDQUZ6QjtNQUFBLElBRThCUyxHQUFHLEdBQUdULEVBQUUsQ0FBQyxDQUFELENBRnRDOztNQUlBLEtBQUssSUFBSXZFLElBQUksR0FBRyxDQUFoQixFQUFtQnBLLENBQUMsR0FBRytOLFVBQXZCLEVBQW1DLEVBQUUvTixDQUFyQyxFQUF3QztRQUNwQ3FPLEdBQUcsR0FBR1EsR0FBRyxHQUFHN08sQ0FBTixHQUFVOE8sR0FBaEIsRUFDSVIsR0FBRyxHQUFHVSxHQUFHLEdBQUdoUCxDQUFOLEdBQVVpUCxHQURwQixFQUVJVixFQUFFLEdBQUdZLEdBQUcsR0FBR25QLENBQU4sR0FBVW9QLEdBRm5COztRQUdBLEtBQUtoUSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcwTyxTQUFoQixFQUEyQixFQUFFMU8sQ0FBRixFQUFLLEVBQUVnTCxJQUFQLEVBQWFpRSxHQUFHLElBQUlPLEdBQXBCLEVBQXlCTixHQUFHLElBQUlTLEdBQWhDLEVBQXFDUixFQUFFLElBQUlXLEdBQXRFLEVBQTJFO1VBQ3ZFVixFQUFFLEdBQUcsTUFBTUQsRUFBWDtVQUNBSixFQUFFLEdBQUdFLEdBQUcsR0FBR0csRUFBWCxFQUFlSixFQUFFLEdBQUdFLEdBQUcsR0FBR0UsRUFBMUI7VUFDQVAsR0FBRyxHQUFHRSxFQUFFLEdBQUcsQ0FBWCxFQUFjRCxHQUFHLEdBQUdFLEVBQUUsR0FBRyxDQUF6Qjs7VUFFQSxJQUFJRCxFQUFFLEdBQUcsQ0FBTCxJQUFVQyxFQUFFLEdBQUcsQ0FBZixJQUFvQkgsR0FBRyxHQUFJTCxTQUFTLEdBQUcsQ0FBdkMsSUFBNkNNLEdBQUcsR0FBSUwsVUFBVSxHQUFHLENBQXJFLEVBQXlFO1lBQ3JFblIsQ0FBQyxHQUFHekIsSUFBSSxDQUFDcUMsR0FBTCxDQUFTNlEsRUFBRSxHQUFHRixHQUFkLEVBQW1CLEdBQW5CLENBQUo7WUFDQXRSLENBQUMsR0FBRzFCLElBQUksQ0FBQ3FDLEdBQUwsQ0FBUzhRLEVBQUUsR0FBR0YsR0FBZCxFQUFtQixHQUFuQixDQUFKO1lBQ0FGLEdBQUcsR0FBSUosU0FBUyxHQUFHTSxHQUFaLEdBQWtCRCxHQUFuQixHQUEwQixDQUFoQztZQUVBUSxFQUFFLEdBQUc1VSxLQUFLLENBQUNtVSxHQUFELENBQUwsR0FBYXRSLENBQUMsSUFBSTdDLEtBQUssQ0FBQ21VLEdBQUcsR0FBRyxDQUFQLENBQUwsR0FBaUJuVSxLQUFLLENBQUNtVSxHQUFELENBQTFCLENBQW5CO1lBQ0FVLEVBQUUsR0FBRzdVLEtBQUssQ0FBQ21VLEdBQUcsR0FBR0osU0FBUCxDQUFMLEdBQXlCbFIsQ0FBQyxJQUFJN0MsS0FBSyxDQUFDbVUsR0FBRyxHQUFHSixTQUFOLEdBQWtCLENBQW5CLENBQUwsR0FBNkIvVCxLQUFLLENBQUNtVSxHQUFHLEdBQUdKLFNBQVAsQ0FBdEMsQ0FBL0I7WUFFQTlULEtBQUssQ0FBQ3NRLElBQUQsQ0FBTCxHQUFjcUUsRUFBRSxHQUFHOVIsQ0FBQyxJQUFJK1IsRUFBRSxHQUFHRCxFQUFULENBQXBCO1VBQ0gsQ0FURCxNQVVLM1UsS0FBSyxDQUFDc1EsSUFBRCxDQUFMLEdBQWN1RCxVQUFkO1FBQ1I7TUFDSjtJQUNKO0VBcHpCTDtJQUFBO0lBQUEsT0FzekJJLHFCQUFZdFMsR0FBWixFQUFzREMsR0FBdEQsRUFBZ0dvUyxTQUFoRyxFQUEwSEMsVUFBMUgsRUFBNEk7TUFDeEksSUFBSSxPQUFPQSxVQUFQLEtBQXNCLFdBQTFCLEVBQXVDO1FBQUVBLFVBQVUsR0FBRyxDQUFiO01BQWlCOztNQUMxRCxJQUFJQyxTQUFTLEdBQUd2UyxHQUFHLENBQUNPLElBQXBCO01BQUEsSUFBMEJpUyxVQUFVLEdBQUd4UyxHQUFHLENBQUNRLElBQTNDO01BQUEsSUFBaURpUyxTQUFTLEdBQUd4UyxHQUFHLENBQUNNLElBQWpFO01BQUEsSUFBdUVtUyxVQUFVLEdBQUd6UyxHQUFHLENBQUNPLElBQXhGO01BQ0EsSUFBSWhDLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1MsSUFBaEI7TUFBQSxJQUFzQmhDLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ1EsSUFBbEM7TUFDQSxJQUFJc0QsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXWSxDQUFDLEdBQUcsQ0FBZjtNQUFBLElBQWtCZ08sR0FBRyxHQUFHLENBQXhCO01BQUEsSUFBMkJDLEdBQUcsR0FBRyxDQUFqQztNQUFBLElBQW9DQyxHQUFHLEdBQUcsQ0FBMUM7TUFBQSxJQUE2Q0MsRUFBRSxHQUFHLEdBQWxEO01BQUEsSUFBdURDLEVBQUUsR0FBRyxHQUE1RDtNQUFBLElBQWlFMVIsQ0FBQyxHQUFHLEdBQXJFO01BQUEsSUFBMEVDLENBQUMsR0FBRyxHQUE5RTtNQUFBLElBQW1GOFIsRUFBRSxHQUFHLEdBQXhGO01BQUEsSUFBNkZDLEVBQUUsR0FBRyxHQUFsRztNQUNBLElBQUlDLEVBQUUsR0FBR2pCLFNBQVMsQ0FBQzVSLElBQW5CO01BQ0EsSUFBSThTLEdBQUcsR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FBWjtNQUFBLElBQWlCRSxHQUFHLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQXpCO01BQUEsSUFBOEJHLEdBQUcsR0FBR0gsRUFBRSxDQUFDLENBQUQsQ0FBdEM7TUFBQSxJQUNJSSxHQUFHLEdBQUdKLEVBQUUsQ0FBQyxDQUFELENBRFo7TUFBQSxJQUNpQkssR0FBRyxHQUFHTCxFQUFFLENBQUMsQ0FBRCxDQUR6QjtNQUFBLElBQzhCTSxHQUFHLEdBQUdOLEVBQUUsQ0FBQyxDQUFELENBRHRDOztNQUdBLEtBQUssSUFBSXZFLElBQUksR0FBRyxDQUFoQixFQUFtQnBLLENBQUMsR0FBRytOLFVBQXZCLEVBQW1DLEVBQUUvTixDQUFyQyxFQUF3QztRQUNwQ21PLEVBQUUsR0FBR1UsR0FBRyxHQUFHN08sQ0FBTixHQUFVOE8sR0FBZjtRQUNBVixFQUFFLEdBQUdZLEdBQUcsR0FBR2hQLENBQU4sR0FBVWlQLEdBQWY7O1FBQ0EsS0FBSzdQLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzBPLFNBQWhCLEVBQTJCLEVBQUUxTyxDQUFGLEVBQUssRUFBRWdMLElBQVAsRUFBYStELEVBQUUsSUFBSVMsR0FBbkIsRUFBd0JSLEVBQUUsSUFBSVcsR0FBekQsRUFBOEQ7VUFDMURkLEdBQUcsR0FBR0UsRUFBRSxHQUFHLENBQVg7VUFBY0QsR0FBRyxHQUFHRSxFQUFFLEdBQUcsQ0FBWDs7VUFFZCxJQUFJSCxHQUFHLElBQUksQ0FBUCxJQUFZQyxHQUFHLElBQUksQ0FBbkIsSUFBd0JELEdBQUcsR0FBSUwsU0FBUyxHQUFHLENBQTNDLElBQWlETSxHQUFHLEdBQUlMLFVBQVUsR0FBRyxDQUF6RSxFQUE2RTtZQUN6RW5SLENBQUMsR0FBR3lSLEVBQUUsR0FBR0YsR0FBVDtZQUNBdFIsQ0FBQyxHQUFHeVIsRUFBRSxHQUFHRixHQUFUO1lBQ0FGLEdBQUcsR0FBR0osU0FBUyxHQUFHTSxHQUFaLEdBQWtCRCxHQUF4QjtZQUVBUSxFQUFFLEdBQUc1VSxLQUFLLENBQUNtVSxHQUFELENBQUwsR0FBYXRSLENBQUMsSUFBSTdDLEtBQUssQ0FBQ21VLEdBQUcsR0FBRyxDQUFQLENBQUwsR0FBaUJuVSxLQUFLLENBQUNtVSxHQUFELENBQTFCLENBQW5CO1lBQ0FVLEVBQUUsR0FBRzdVLEtBQUssQ0FBQ21VLEdBQUcsR0FBR0osU0FBUCxDQUFMLEdBQXlCbFIsQ0FBQyxJQUFJN0MsS0FBSyxDQUFDbVUsR0FBRyxHQUFHSixTQUFOLEdBQWtCLENBQW5CLENBQUwsR0FBNkIvVCxLQUFLLENBQUNtVSxHQUFHLEdBQUdKLFNBQVAsQ0FBdEMsQ0FBL0I7WUFFQTlULEtBQUssQ0FBQ3NRLElBQUQsQ0FBTCxHQUFjcUUsRUFBRSxHQUFHOVIsQ0FBQyxJQUFJK1IsRUFBRSxHQUFHRCxFQUFULENBQXBCO1VBQ0gsQ0FURCxNQVVLM1UsS0FBSyxDQUFDc1EsSUFBRCxDQUFMLEdBQWN1RCxVQUFkO1FBQ1I7TUFDSjtJQUNKO0VBbDFCTDtJQUFBO0lBQUEsT0FxMUJJLHNCQUFhdFMsR0FBYixFQUFrRUMsR0FBbEUsRUFBK0U7TUFDM0UsSUFBSTROLENBQUosRUFBT21HLENBQVAsRUFBVTFTLENBQVYsRUFBYXZDLENBQWI7TUFDQSxJQUFJN0MsQ0FBQyxHQUFHOEQsR0FBRyxDQUFDMk0sS0FBSixHQUFZM00sR0FBRyxDQUFDNE0sTUFBeEI7O01BQ0EsT0FBTzFRLENBQUMsRUFBUixFQUFZO1FBQ1I2QyxDQUFDLEdBQUc3QyxDQUFDLEdBQUcsQ0FBUjtRQUNBMlIsQ0FBQyxHQUFHN04sR0FBRyxDQUFDUyxJQUFKLENBQVMxQixDQUFULENBQUo7UUFDQWlWLENBQUMsR0FBR2hVLEdBQUcsQ0FBQ1MsSUFBSixDQUFTMUIsQ0FBQyxHQUFHLENBQWIsQ0FBSjtRQUNBdUMsQ0FBQyxHQUFHdEIsR0FBRyxDQUFDUyxJQUFKLENBQVMxQixDQUFDLEdBQUcsQ0FBYixDQUFKOztRQUNBLElBQUs4TyxDQUFDLEdBQUcsRUFBTCxJQUFhbUcsQ0FBQyxHQUFHLEVBQWpCLElBQXlCMVMsQ0FBQyxHQUFHLEVBQTdCLElBQ0l1TSxDQUFDLEdBQUdtRyxDQURSLElBQ2VuRyxDQUFDLEdBQUd2TSxDQURuQixJQUVJdU0sQ0FBQyxHQUFHak8sSUFBSSxDQUFDQyxHQUFMLENBQVNtVSxDQUFULEVBQVkxUyxDQUFaLENBQUosR0FBcUIsRUFGekIsSUFHSTFCLElBQUksQ0FBQzBDLEdBQUwsQ0FBU3VMLENBQUMsR0FBR21HLENBQWIsSUFBa0IsRUFIMUIsRUFHK0I7VUFDM0IvVCxHQUFHLENBQUMvRCxDQUFELENBQUgsR0FBUyxHQUFUO1FBQ0gsQ0FMRCxNQUtPO1VBQ0grRCxHQUFHLENBQUMvRCxDQUFELENBQUgsR0FBUyxDQUFUO1FBQ0g7TUFDSjtJQUNKO0VBdDJCTDs7RUFBQTtBQUFBLEVBQTJDaUgsVUFBM0M7O0FBMDJCQUEsVUFBVSxDQUFDOEksSUFBWDtFQUFBOztFQUFBOztFQUVJO0lBQUE7O0lBQUE7O0lBQ0k7O0lBREo7O0lBRUksT0FBS2dJLFdBQUwsR0FBbUIsSUFBSTdWLFVBQUosQ0FBZSxLQUFLLENBQXBCLENBQW5CO0lBRko7RUFHQzs7RUFMTDtJQUFBO0lBQUEsT0FPSSw2QkFBb0I5QixJQUFwQixFQUFrQ3lQLEtBQWxDLEVBQWlEbUksTUFBakQsRUFBOERoVyxTQUE5RCxFQUE0RTtNQUN4RSxJQUFJaEMsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkgsQ0FBQyxHQUFHLEdBQWY7TUFBQSxJQUFvQm9RLENBQUMsR0FBRyxHQUF4QjtNQUFBLElBQTZCQyxPQUFPLEdBQUcsR0FBdkM7TUFBQSxJQUE0Q0MsUUFBUSxHQUFHLEdBQXZEO01BQ0EsSUFBSWxWLEdBQUcsR0FBRyxHQUFWO01BQ0EsSUFBSW1WLFNBQVMsR0FBRyxLQUFLMVksS0FBTCxDQUFXZ0csVUFBWCxDQUFzQnRGLElBQUksSUFBSSxDQUE5QixDQUFoQjtNQUNBLElBQUlpWSxPQUFPLEdBQUdELFNBQVMsQ0FBQ2pTLEdBQXhCOztNQUVBLElBQUksQ0FBQy9GLElBQUksR0FBRyxDQUFSLEtBQWMsQ0FBZCxJQUFtQkEsSUFBSSxJQUFJLENBQTNCLElBQWdDeVAsS0FBSyxJQUFJLENBQTdDLEVBQWdEO1FBQzVDLFFBQVF6UCxJQUFJLElBQUksQ0FBaEI7VUFDSSxLQUFLLENBQUw7WUFDSWlZLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxHQUFiO1lBQ0FwVixHQUFHLEdBQUcsR0FBTjtZQUNBOztVQUNKLEtBQUssQ0FBTDtZQUNJb1YsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLElBQWIsRUFBbUJBLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxHQUFoQyxFQUFxQ0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLElBQWxEO1lBQ0FwVixHQUFHLEdBQUcsT0FBTyxHQUFQLEdBQWEsSUFBbkI7WUFDQTs7VUFDSixLQUFLLENBQUw7WUFDSW9WLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxNQUFiLEVBQXFCQSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsSUFBbEMsRUFBd0NBLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxLQUFyRCxFQUNJQSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsSUFEakIsRUFDdUJBLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxNQURwQztZQUVBcFYsR0FBRyxHQUFHLFNBQVMsSUFBVCxHQUFnQixLQUFoQixHQUF3QixJQUF4QixHQUErQixNQUFyQztZQUNBOztVQUNKLEtBQUssQ0FBTDtZQUNJb1YsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQWIsRUFBc0JBLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxRQUFuQyxFQUE2Q0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQTFELEVBQ0lBLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQURqQixFQUMwQkEsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BRHZDLEVBQ2dEQSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsUUFEN0QsRUFDdUVBLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQURwRjtZQUVBcFYsR0FBRyxHQUFHLFVBQVUsUUFBVixHQUFxQixPQUFyQixHQUErQixPQUEvQixHQUF5QyxPQUF6QyxHQUFtRCxRQUFuRCxHQUE4RCxPQUFwRTtZQUNBO1FBbEJSO01Bb0JILENBckJELE1BcUJPO1FBQ0hpVixPQUFPLEdBQUdySSxLQUFLLEdBQUcsQ0FBUixHQUFZQSxLQUFaLEdBQW9CLENBQUMsQ0FBQ3pQLElBQUksR0FBRyxDQUFSLElBQWEsR0FBYixHQUFtQixHQUFwQixJQUEyQixHQUEzQixHQUFpQyxHQUEvRDtRQUNBK1gsUUFBUSxHQUFHLENBQUMsR0FBRCxJQUFRRCxPQUFPLEdBQUdBLE9BQWxCLENBQVg7O1FBRUEsT0FBT2xZLENBQUMsR0FBR0ksSUFBWCxFQUFpQixFQUFFSixDQUFuQixFQUFzQjtVQUNsQjZILENBQUMsR0FBRzdILENBQUMsR0FBRyxDQUFDSSxJQUFJLEdBQUcsQ0FBUixJQUFhLEdBQXJCO1VBQ0E2WCxDQUFDLEdBQUd2VSxJQUFJLENBQUM0VSxHQUFMLENBQVNILFFBQVEsR0FBR3RRLENBQVgsR0FBZUEsQ0FBeEIsQ0FBSjtVQUVBd1EsT0FBTyxDQUFDclksQ0FBRCxDQUFQLEdBQWFpWSxDQUFiO1VBQ0FoVixHQUFHLElBQUlnVixDQUFQO1FBQ0g7TUFDSjs7TUFFRCxJQUFJalcsU0FBUyxHQUFHMUIsd0VBQWhCLEVBQXVDO1FBRW5DMkMsR0FBRyxHQUFHLFFBQVFBLEdBQWQ7O1FBQ0EsS0FBS2pELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0ksSUFBaEIsRUFBc0IsRUFBRUosQ0FBeEIsRUFBMkI7VUFDdkJnWSxNQUFNLENBQUNoWSxDQUFELENBQU4sR0FBYXFZLE9BQU8sQ0FBQ3JZLENBQUQsQ0FBUCxHQUFhaUQsR0FBYixHQUFtQixHQUFwQixHQUEyQixDQUF2QztRQUNIO01BQ0osQ0FORCxNQU1PO1FBRUhBLEdBQUcsR0FBRyxNQUFNQSxHQUFaOztRQUNBLEtBQUtqRCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdJLElBQWhCLEVBQXNCLEVBQUVKLENBQXhCLEVBQTJCO1VBQ3ZCZ1ksTUFBTSxDQUFDaFksQ0FBRCxDQUFOLEdBQVlxWSxPQUFPLENBQUNyWSxDQUFELENBQVAsR0FBYWlELEdBQXpCO1FBQ0g7TUFDSjs7TUFFRCxLQUFLdkQsS0FBTCxDQUFXc0csVUFBWCxDQUFzQm9TLFNBQXRCO0lBQ0g7RUE5REw7SUFBQTtJQUFBLE9BaUVJLHNDQUE2QmxQLEtBQTdCLEVBQXlDcVAsTUFBekMsRUFBeURDLE1BQXpELEVBQXlFQyxNQUF6RSxFQUF5RkMsTUFBekYsRUFDSUMsTUFESixFQUNvQkMsTUFEcEIsRUFDb0NDLE1BRHBDLEVBQ29EQyxNQURwRCxFQUVJQyxNQUZKLEVBRW9CQyxNQUZwQixFQUVvQ0MsTUFGcEMsRUFFb0RDLE1BRnBELEVBR0lDLE1BSEosRUFHb0JDLE1BSHBCLEVBR29DQyxNQUhwQyxFQUdvREMsTUFIcEQsRUFHa0U7TUFDOUQsSUFBSUMsRUFBRSxHQUFHaEIsTUFBVDtNQUNBLElBQUlpQixFQUFFLEdBQUdULE1BQVQ7TUFDQSxJQUFJVSxFQUFFLEdBQUdiLE1BQVQ7TUFDQSxJQUFJYyxFQUFFLEdBQUdILEVBQUUsR0FBR0MsRUFBTCxHQUFVQyxFQUFuQjtNQUNBLElBQUlFLEVBQUUsR0FBR1AsTUFBVDtNQUNBLElBQUlRLEVBQUUsR0FBR0wsRUFBRSxHQUFHSSxFQUFkO01BQ0EsSUFBSUUsRUFBRSxHQUFHTCxFQUFFLEdBQUdJLEVBQWQ7TUFDQSxJQUFJRSxFQUFFLEdBQUdkLE1BQVQ7TUFDQSxJQUFJZSxHQUFHLEdBQUdSLEVBQUUsR0FBR08sRUFBZjtNQUNBLElBQUlFLEdBQUcsR0FBR3JCLE1BQVY7TUFDQSxJQUFJc0IsR0FBRyxHQUFHekIsTUFBVjtNQUNBLElBQUkwQixHQUFHLEdBQUdmLE1BQVY7TUFDQSxJQUFJZ0IsR0FBRyxHQUFHRixHQUFHLEdBQUdDLEdBQWhCO01BQ0EsSUFBSUUsR0FBRyxHQUFHRCxHQUFHLEdBQUdILEdBQWhCO01BQ0EsSUFBSUssR0FBRyxHQUFHSCxHQUFHLEdBQUdGLEdBQU4sR0FBWUYsRUFBdEI7TUFDQSxJQUFJUSxHQUFHLEdBQUdKLEdBQUcsR0FBR1QsRUFBaEI7TUFDQSxJQUFJYyxHQUFHLEdBQUdMLEdBQUcsR0FBR0osRUFBaEI7TUFDQSxJQUFJVSxHQUFHLEdBQUdoQixFQUFFLEdBQUdDLEVBQWY7TUFDQSxJQUFJZ0IsR0FBRyxHQUFHZCxFQUFFLEdBQUdILEVBQWY7TUFDQSxJQUFJa0IsR0FBRyxHQUFHZixFQUFFLEdBQUdLLEdBQWY7TUFDQSxJQUFJVyxHQUFHLEdBQUdiLEVBQUUsR0FBR0UsR0FBZjtNQUNBLElBQUlZLEdBQUcsR0FBRyxPQUFPTixHQUFHLEdBQUdDLEdBQU4sR0FBWUMsR0FBWixHQUFrQkMsR0FBbEIsR0FBd0JDLEdBQXhCLEdBQThCQyxHQUFyQyxDQUFWO01BQ0EsSUFBSUUsR0FBRyxHQUFHdEIsRUFBRSxHQUFHVyxHQUFmO01BQ0EsSUFBSVksR0FBRyxHQUFHYixHQUFHLEdBQUdELEdBQWhCO01BQ0EsSUFBSWUsR0FBRyxHQUFHdEIsRUFBRSxHQUFHRixFQUFmO01BQ0EsSUFBSXlCLEdBQUcsR0FBR3JCLEVBQUUsR0FBR29CLEdBQWY7TUFDQSxJQUFJRSxHQUFHLEdBQUdoQixHQUFHLEdBQUdULEVBQWhCO01BQ0EsSUFBSTBCLEdBQUcsR0FBR2YsR0FBRyxHQUFHTCxFQUFoQjtNQUNBLElBQUlxQixHQUFHLEdBQUdsQixHQUFHLEdBQUdILEVBQU4sR0FBV0UsR0FBckI7TUFDQSxJQUFJb0IsR0FBRyxHQUFHM0IsRUFBRSxHQUFHRSxFQUFMLEdBQVVILEVBQXBCO01BQ0EsSUFBSTZCLEdBQUcsR0FBRzFCLEVBQUUsR0FBR00sR0FBZjtNQUNBLElBQUlxQixHQUFHLEdBQUcsRUFBRXpCLEVBQUUsR0FBR0gsRUFBTCxHQUFVSyxHQUFHLEdBQUdDLEdBQWhCLEdBQXNCQSxHQUFHLEdBQUdKLEVBQTVCLEdBQWlDTyxHQUFHLEdBQUdYLEVBQXZDLEdBQTRDWSxHQUE1QyxHQUFrREMsR0FBbEQsR0FBd0RDLEdBQUcsR0FBR2QsRUFBaEUsSUFBc0VvQixHQUFoRjtNQUNBLElBQUlXLEdBQUcsR0FBRyxDQUFDN0IsRUFBRSxHQUFHRyxFQUFMLEdBQVVnQixHQUFHLEdBQUdwQixFQUFoQixHQUFxQm9CLEdBQUcsR0FBR2YsRUFBM0IsR0FBZ0NNLEdBQWhDLEdBQXNDWixFQUFFLEdBQUdzQixHQUEzQyxHQUFpREosR0FBRyxHQUFHbEIsRUFBdkQsR0FBNERhLEdBQTdELElBQW9FTyxHQUE5RTtNQUNBLElBQUlZLEdBQUcsR0FBR2pDLEVBQVY7TUFDQSxJQUFJa0MsR0FBRyxHQUFHLENBQUMsQ0FBQzNCLEVBQUQsR0FBTUYsRUFBTixHQUFXb0IsR0FBWCxHQUFpQkMsR0FBRyxHQUFHeEIsRUFBdkIsR0FBNEJVLEdBQUcsR0FBR1YsRUFBbEMsR0FBdUN5QixHQUF2QyxHQUE2Q0MsR0FBN0MsR0FBbURULEdBQUcsR0FBR1osRUFBekQsR0FBOERzQixHQUEvRCxJQUFzRVIsR0FBaEY7TUFDQSxJQUFJYyxHQUFHLEdBQUcsQ0FBQyxDQUFDVixHQUFELEdBQU9ELEdBQUcsR0FBR2pCLEVBQWIsR0FBa0J1QixHQUFHLEdBQUc3QixFQUF4QixHQUE2QjBCLEdBQTdCLEdBQW1DQyxHQUFuQyxHQUF5Q0UsR0FBRyxHQUFHckIsR0FBL0MsR0FBcURvQixHQUFyRCxHQUEyRGQsR0FBRyxHQUFHUixFQUFsRSxJQUF3RWMsR0FBbEY7TUFDQSxJQUFJZSxHQUFHLEdBQUcxQixHQUFWO01BQ0EsSUFBSTJCLEdBQUcsR0FBRyxDQUFDLENBQUM3QixHQUFELEdBQU9nQixHQUFQLEdBQWFFLEdBQWIsR0FBbUJILEdBQW5CLEdBQXlCUCxHQUF6QixHQUErQkQsR0FBL0IsR0FBcUNHLEdBQXJDLEdBQTJDQyxHQUE1QyxJQUFtREUsR0FBN0Q7TUFDQSxJQUFJaUIsR0FBRyxHQUFHLENBQUMsQ0FBQ2pDLEVBQUQsR0FBTUcsR0FBTixHQUFZSSxHQUFaLEdBQWtCYyxHQUFsQixHQUF3QlAsR0FBeEIsR0FBOEJDLEdBQTlCLEdBQW9DTCxHQUFwQyxHQUEwQ0UsR0FBM0MsSUFBa0RJLEdBQTVEO01BRUFyQixFQUFFLEdBQUdkLE1BQUw7TUFDQWUsRUFBRSxHQUFHUCxNQUFMO01BQ0FRLEVBQUUsR0FBR1gsTUFBTDtNQUNBWSxFQUFFLEdBQUdILEVBQUUsR0FBR0MsRUFBTCxHQUFVQyxFQUFmO01BQ0FFLEVBQUUsR0FBR0wsTUFBTDtNQUNBTSxFQUFFLEdBQUdMLEVBQUUsR0FBR0ksRUFBVjtNQUNBRSxFQUFFLEdBQUdMLEVBQUUsR0FBR0ksRUFBVjtNQUNBRSxFQUFFLEdBQUdaLE1BQUw7TUFDQWEsR0FBRyxHQUFHUixFQUFFLEdBQUdPLEVBQVg7TUFDQUUsR0FBRyxHQUFHbkIsTUFBTjtNQUNBb0IsR0FBRyxHQUFHdkIsTUFBTjtNQUNBd0IsR0FBRyxHQUFHYixNQUFOO01BQ0FjLEdBQUcsR0FBR0YsR0FBRyxHQUFHQyxHQUFaO01BQ0FFLEdBQUcsR0FBR0QsR0FBRyxHQUFHSCxHQUFaO01BQ0FLLEdBQUcsR0FBR0gsR0FBRyxHQUFHRixHQUFOLEdBQVlGLEVBQWxCO01BQ0FRLEdBQUcsR0FBR0osR0FBRyxHQUFHVCxFQUFaO01BQ0FjLEdBQUcsR0FBR0wsR0FBRyxHQUFHSixFQUFaO01BQ0FVLEdBQUcsR0FBR2hCLEVBQUUsR0FBR0MsRUFBWDtNQUNBZ0IsR0FBRyxHQUFHZCxFQUFFLEdBQUdILEVBQVg7TUFDQWtCLEdBQUcsR0FBR2YsRUFBRSxHQUFHSyxHQUFYO01BQ0FXLEdBQUcsR0FBR2IsRUFBRSxHQUFHRSxHQUFYO01BQ0FZLEdBQUcsR0FBRyxPQUFPTixHQUFHLEdBQUdDLEdBQU4sR0FBWUMsR0FBWixHQUFrQkMsR0FBbEIsR0FBd0JDLEdBQXhCLEdBQThCQyxHQUFyQyxDQUFOO01BQ0FFLEdBQUcsR0FBR3RCLEVBQUUsR0FBR1csR0FBWDtNQUNBWSxHQUFHLEdBQUdiLEdBQUcsR0FBR0QsR0FBWjtNQUNBZSxHQUFHLEdBQUd0QixFQUFFLEdBQUdGLEVBQVg7TUFDQXlCLEdBQUcsR0FBR3JCLEVBQUUsR0FBR29CLEdBQVg7TUFDQUUsR0FBRyxHQUFHaEIsR0FBRyxHQUFHVCxFQUFaO01BQ0EwQixHQUFHLEdBQUdmLEdBQUcsR0FBR0wsRUFBWjtNQUNBcUIsR0FBRyxHQUFHbEIsR0FBRyxHQUFHSCxFQUFOLEdBQVdFLEdBQWpCO01BQ0FvQixHQUFHLEdBQUczQixFQUFFLEdBQUdFLEVBQUwsR0FBVUgsRUFBaEI7TUFDQTZCLEdBQUcsR0FBRzFCLEVBQUUsR0FBR00sR0FBWDtNQUNBLElBQUk2QixHQUFHLEdBQUcsRUFBRWpDLEVBQUUsR0FBR0gsRUFBTCxHQUFVSyxHQUFHLEdBQUdDLEdBQWhCLEdBQXNCQSxHQUFHLEdBQUdKLEVBQTVCLEdBQWlDTyxHQUFHLEdBQUdYLEVBQXZDLEdBQTRDWSxHQUE1QyxHQUFrREMsR0FBbEQsR0FBd0RDLEdBQUcsR0FBR2QsRUFBaEUsSUFBc0VvQixHQUFoRjtNQUNBLElBQUltQixHQUFHLEdBQUcsQ0FBQ3JDLEVBQUUsR0FBR0csRUFBTCxHQUFVZ0IsR0FBRyxHQUFHcEIsRUFBaEIsR0FBcUJvQixHQUFHLEdBQUdmLEVBQTNCLEdBQWdDTSxHQUFoQyxHQUFzQ1osRUFBRSxHQUFHc0IsR0FBM0MsR0FBaURKLEdBQUcsR0FBR2xCLEVBQXZELEdBQTREYSxHQUE3RCxJQUFvRU8sR0FBOUU7TUFDQSxJQUFJb0IsR0FBRyxHQUFHekMsRUFBVjtNQUNBLElBQUkwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDbkMsRUFBRCxHQUFNRixFQUFOLEdBQVdvQixHQUFYLEdBQWlCQyxHQUFHLEdBQUd4QixFQUF2QixHQUE0QlUsR0FBRyxHQUFHVixFQUFsQyxHQUF1Q3lCLEdBQXZDLEdBQTZDQyxHQUE3QyxHQUFtRFQsR0FBRyxHQUFHWixFQUF6RCxHQUE4RHNCLEdBQS9ELElBQXNFUixHQUFoRjtNQUNBLElBQUlzQixHQUFHLEdBQUcsQ0FBQyxDQUFDbEIsR0FBRCxHQUFPRCxHQUFHLEdBQUdqQixFQUFiLEdBQWtCdUIsR0FBRyxHQUFHN0IsRUFBeEIsR0FBNkIwQixHQUE3QixHQUFtQ0MsR0FBbkMsR0FBeUNFLEdBQUcsR0FBR3JCLEdBQS9DLEdBQXFEb0IsR0FBckQsR0FBMkRkLEdBQUcsR0FBR1IsRUFBbEUsSUFBd0VjLEdBQWxGO01BQ0EsSUFBSXVCLEdBQUcsR0FBR2xDLEdBQVY7TUFDQSxJQUFJbUMsR0FBRyxHQUFHLENBQUMsQ0FBQ3JDLEdBQUQsR0FBT2dCLEdBQVAsR0FBYUUsR0FBYixHQUFtQkgsR0FBbkIsR0FBeUJQLEdBQXpCLEdBQStCRCxHQUEvQixHQUFxQ0csR0FBckMsR0FBMkNDLEdBQTVDLElBQW1ERSxHQUE3RDtNQUNBLElBQUl5QixHQUFHLEdBQUcsQ0FBQyxDQUFDekMsRUFBRCxHQUFNRyxHQUFOLEdBQVlJLEdBQVosR0FBa0JjLEdBQWxCLEdBQXdCUCxHQUF4QixHQUE4QkMsR0FBOUIsR0FBb0NMLEdBQXBDLEdBQTBDRSxHQUEzQyxJQUFrREksR0FBNUQ7TUFHQXBCLEVBQUUsR0FBR2tDLEdBQUcsR0FBR0csR0FBRyxHQUFHRixHQUFqQjtNQUNBbEMsRUFBRSxHQUFHNkIsR0FBRyxHQUFHSSxHQUFYO01BQ0FoQyxFQUFFLEdBQUc0QixHQUFHLEdBQUdLLEdBQVg7TUFDQS9CLEVBQUUsR0FBRzZCLEdBQUcsR0FBR0YsR0FBWDtNQUNBMUIsRUFBRSxHQUFHMkIsR0FBRyxHQUFHQyxHQUFYO01BQ0ExQixHQUFHLEdBQUd3QixHQUFHLEdBQUdLLEdBQVo7TUFDQSxJQUFJVSxHQUFHLEdBQUdkLEdBQUcsR0FBR0ksR0FBaEI7TUFDQTFCLEdBQUcsR0FBRyxPQUFPVCxFQUFFLEdBQUdDLEVBQUUsR0FBR21DLEdBQVYsR0FBZ0JqQyxFQUFoQixHQUFxQkMsRUFBRSxHQUFHZ0MsR0FBMUIsR0FBZ0M5QixHQUFHLEdBQUc0QixHQUF0QyxHQUE0Q1csR0FBRyxHQUFHWixHQUF6RCxDQUFOO01BQ0F0QixHQUFHLEdBQUcsQ0FBQ3FCLEdBQUQsR0FBT0UsR0FBRyxHQUFHQyxHQUFuQjtNQUNBLElBQUlXLEdBQUcsR0FBRyxDQUFDZCxHQUFELEdBQU9JLEdBQVAsR0FBYUgsR0FBRyxHQUFHRSxHQUE3QjtNQUNBakIsR0FBRyxHQUFHLENBQUNZLEdBQUQsR0FBT0MsR0FBRyxHQUFHSyxHQUFuQjtNQUNBLElBQUlXLEdBQUcsR0FBR2xCLEdBQUcsR0FBR2dCLEdBQWhCO01BQ0F4QixHQUFHLEdBQUdRLEdBQUcsR0FBR08sR0FBTixHQUFZOUIsR0FBbEI7TUFDQWdCLEdBQUcsR0FBRyxDQUFDUSxHQUFELEdBQU9JLEdBQVAsR0FBYUgsR0FBRyxHQUFHRSxHQUF6QjtNQUNBLElBQUllLEdBQUcsR0FBRy9DLEVBQUUsR0FBR0csRUFBZjtNQUNBLElBQUk2QyxHQUFHLEdBQUdqRCxFQUFFLEdBQUdHLEVBQWY7TUFDQXVCLEdBQUcsR0FBRzNCLEVBQUUsR0FBR1UsR0FBWDtNQUNBLElBQUl5QyxHQUFHLEdBQUdoQyxHQUFHLEdBQUdULEdBQWhCO01BQ0EsSUFBSTBDLEdBQUcsR0FBRzdCLEdBQUcsR0FBR2IsR0FBaEI7TUFDQSxJQUFJMkMsR0FBRyxHQUFHM1QsS0FBSyxDQUFDM0UsSUFBaEI7TUFDQXNZLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2YsR0FBRyxHQUFHWCxHQUFOLEdBQVlZLEdBQUcsSUFBSTNCLEdBQUcsR0FBR0YsR0FBVixDQUFmLEdBQWdDOEIsR0FBRyxJQUFJTyxHQUFHLEdBQUdyQyxHQUFWLENBQTVDO01BQ0EyQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNmLEdBQUcsR0FBR2EsR0FBTixHQUFZWixHQUFHLElBQUlTLEdBQUcsR0FBR3RDLEdBQVYsQ0FBZixHQUFnQzhCLEdBQUcsSUFBSWxCLEdBQUcsR0FBR1osR0FBVixDQUE1QztNQUNBMkMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUNmLEdBQUQsR0FBT2MsR0FBUCxHQUFhYixHQUFHLElBQUlVLEdBQUcsR0FBR3ZDLEdBQVYsQ0FBaEIsR0FBaUM4QixHQUFHLElBQUlVLEdBQUcsR0FBR3hDLEdBQVYsQ0FBN0M7TUFDQTJDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU1osR0FBRyxHQUFHZCxHQUFOLEdBQVllLEdBQUcsSUFBSTlCLEdBQUcsR0FBR0YsR0FBVixDQUFmLEdBQWdDaUMsR0FBRyxJQUFJSSxHQUFHLEdBQUdyQyxHQUFWLENBQTVDO01BQ0EyQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNaLEdBQUcsR0FBR1UsR0FBTixHQUFZVCxHQUFHLElBQUlNLEdBQUcsR0FBR3RDLEdBQVYsQ0FBZixHQUFnQ2lDLEdBQUcsSUFBSXJCLEdBQUcsR0FBR1osR0FBVixDQUE1QztNQUNBMkMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUNaLEdBQUQsR0FBT1csR0FBUCxHQUFhVixHQUFHLElBQUlPLEdBQUcsR0FBR3ZDLEdBQVYsQ0FBaEIsR0FBaUNpQyxHQUFHLElBQUlPLEdBQUcsR0FBR3hDLEdBQVYsQ0FBN0M7TUFDQTJDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU1QsR0FBRyxHQUFHakIsR0FBTixHQUFZa0IsR0FBRyxJQUFJakMsR0FBRyxHQUFHRixHQUFWLENBQWYsR0FBZ0NxQyxHQUFHLEdBQUdyQyxHQUEvQztNQUNBMkMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTVCxHQUFHLEdBQUdPLEdBQU4sR0FBWU4sR0FBRyxJQUFJRyxHQUFHLEdBQUd0QyxHQUFWLENBQWYsR0FBZ0NZLEdBQUcsR0FBR1osR0FBL0M7TUFDQTJDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFDVCxHQUFELEdBQU9RLEdBQVAsR0FBYVAsR0FBRyxJQUFJSSxHQUFHLEdBQUd2QyxHQUFWLENBQWhCLEdBQWlDd0MsR0FBRyxHQUFHeEMsR0FBaEQ7SUFDSDtFQW5MTDtJQUFBO0lBQUEsT0F3TEksZUFBTTRDLEtBQU4sRUFBa0JDLEdBQWxCLEVBQStCQyxJQUEvQixFQUE2Q0MsR0FBN0MsRUFBcUQ7TUFDakQsSUFBSUMsWUFBWSxHQUFHLENBQW5CO01BQ0EsSUFBSWpGLENBQUosRUFBT2tGLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxFQUFmO01BQ0EsSUFBSXRhLEVBQUUsR0FBRyxDQUFUO01BQUEsSUFBWXVhLElBQUksR0FBRyxDQUFuQjtNQUFBLElBQXNCQyxLQUFLLEdBQUcsQ0FBOUI7TUFBQSxJQUFpQ3ZkLENBQUMsR0FBRyxDQUFyQztNQUFBLElBQXdDdVIsQ0FBQyxHQUFHLENBQTVDO01BQUEsSUFBK0M1RixDQUFDLEdBQUcsQ0FBbkQ7TUFBQSxJQUFzRDZSLEdBQUcsR0FBRyxDQUE1RDtNQUFBLElBQStEQyxJQUFJLEdBQUcsQ0FBdEU7TUFBQSxJQUF5RXZLLENBQUMsR0FBRyxDQUE3RTtNQUNBLElBQUl3SyxLQUFLLEdBQUcsQ0FBWjtNQUFBLElBQWVDLEtBQUssR0FBRyxDQUF2QjtNQUFBLElBQTBCQyxNQUFNLEdBQUcsQ0FBbkM7TUFBQSxJQUFzQ0MsTUFBTSxHQUFHLENBQS9DO01BQUEsSUFBa0RDLEtBQUssR0FBRyxDQUExRDtNQUFBLElBQTZEM1ksQ0FBQyxHQUFHLENBQWpFO01BQUEsSUFBb0VDLENBQUMsR0FBRyxDQUF4RTtNQUFBLElBQTJFNk4sQ0FBQyxHQUFHLENBQS9FO01BQUEsSUFBa0Y4SyxRQUFRLEdBQUcsQ0FBN0Y7TUFFQSxJQUFJdkksS0FBSyxHQUFHLEtBQUt1QyxXQUFqQjtNQUVBLElBQUtpRixJQUFJLEdBQUdELEdBQVAsR0FBYSxDQUFkLElBQW9CLENBQXhCLEVBQTJCO01BRTNCdkgsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXdUgsR0FBWDtNQUNBdkgsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXd0gsSUFBWDs7TUFFQSxPQUFPamEsRUFBRSxJQUFJLENBQWIsRUFBZ0I7UUFFWnVhLElBQUksR0FBRzlILEtBQUssQ0FBQ3pTLEVBQUUsSUFBSSxDQUFQLENBQVo7UUFDQXdhLEtBQUssR0FBRy9ILEtBQUssQ0FBQyxDQUFDelMsRUFBRSxJQUFJLENBQVAsSUFBWSxDQUFiLENBQWI7UUFDQUEsRUFBRTs7UUFFRixTQUFVO1VBQ053TyxDQUFDLEdBQUlnTSxLQUFLLEdBQUdELElBQVQsR0FBaUIsQ0FBckI7O1VBRUEsSUFBSS9MLENBQUMsSUFBSTJMLFlBQVQsRUFBdUI7WUFFbkIsS0FBS00sR0FBRyxHQUFHRixJQUFJLEdBQUcsQ0FBbEIsRUFBcUJFLEdBQUcsSUFBSUQsS0FBNUIsRUFBbUNDLEdBQUcsRUFBdEMsRUFBMEM7Y0FDdEMsS0FBS0MsSUFBSSxHQUFHRCxHQUFaLEVBQWlCQyxJQUFJLEdBQUdILElBQVAsSUFBZUwsR0FBRyxDQUFDSCxLQUFLLENBQUNXLElBQUQsQ0FBTixFQUFjWCxLQUFLLENBQUNXLElBQUksR0FBRyxDQUFSLENBQW5CLENBQW5DLEVBQW1FQSxJQUFJLEVBQXZFLEVBQTJFO2dCQUN2RXhGLENBQUMsR0FBRzZFLEtBQUssQ0FBQ1csSUFBRCxDQUFUO2dCQUNBWCxLQUFLLENBQUNXLElBQUQsQ0FBTCxHQUFjWCxLQUFLLENBQUNXLElBQUksR0FBRyxDQUFSLENBQW5CO2dCQUNBWCxLQUFLLENBQUNXLElBQUksR0FBRyxDQUFSLENBQUwsR0FBa0J4RixDQUFsQjtjQUNIO1lBQ0o7O1lBQ0Q7VUFDSCxDQVZELE1BVU87WUFDSDhGLFFBQVEsR0FBRyxDQUFYO1lBRUFMLEtBQUssR0FBR0osSUFBUjtZQUNBTSxNQUFNLEdBQUdMLEtBQVQ7WUFDQU8sS0FBSyxHQUFHUixJQUFJLElBQUkvTCxDQUFDLElBQUksQ0FBVCxDQUFaOztZQUVBLElBQUlBLENBQUMsR0FBRyxFQUFSLEVBQVk7Y0FDUjJCLENBQUMsR0FBRzNCLENBQUMsSUFBSSxDQUFUO2NBQ0FwTSxDQUFDLEdBQUdtWSxJQUFKLEVBQVVsWSxDQUFDLEdBQUdrWSxJQUFJLEdBQUdwSyxDQUFyQixFQUF3QkQsQ0FBQyxHQUFHcUssSUFBSSxJQUFJcEssQ0FBQyxJQUFJLENBQVQsQ0FBaEM7Y0FDQWlLLEVBQUUsR0FBR0wsS0FBSyxDQUFDM1gsQ0FBRCxDQUFWLEVBQWVpWSxFQUFFLEdBQUdOLEtBQUssQ0FBQzFYLENBQUQsQ0FBekIsRUFBOEJpWSxFQUFFLEdBQUdQLEtBQUssQ0FBQzdKLENBQUQsQ0FBeEM7Y0FDQXFLLElBQUksR0FBR0wsR0FBRyxDQUFDRSxFQUFELEVBQUtDLEVBQUwsQ0FBSCxHQUFlSCxHQUFHLENBQUNHLEVBQUQsRUFBS0MsRUFBTCxDQUFILEdBQWNqWSxDQUFkLEdBQW1CNlgsR0FBRyxDQUFDRSxFQUFELEVBQUtFLEVBQUwsQ0FBSCxHQUFjcEssQ0FBZCxHQUFrQjlOLENBQXBELEdBQ0E4WCxHQUFHLENBQUNJLEVBQUQsRUFBS0QsRUFBTCxDQUFILEdBQWNoWSxDQUFkLEdBQW1CNlgsR0FBRyxDQUFDRSxFQUFELEVBQUtFLEVBQUwsQ0FBSCxHQUFjbFksQ0FBZCxHQUFrQjhOLENBRDVDO2NBR0E5TixDQUFDLEdBQUcyWSxLQUFLLEdBQUc1SyxDQUFaLEVBQWU5TixDQUFDLEdBQUcwWSxLQUFuQixFQUEwQjdLLENBQUMsR0FBRzZLLEtBQUssR0FBRzVLLENBQXRDO2NBQ0FpSyxFQUFFLEdBQUdMLEtBQUssQ0FBQzNYLENBQUQsQ0FBVixFQUFlaVksRUFBRSxHQUFHTixLQUFLLENBQUMxWCxDQUFELENBQXpCLEVBQThCaVksRUFBRSxHQUFHUCxLQUFLLENBQUM3SixDQUFELENBQXhDO2NBQ0E2SyxLQUFLLEdBQUdiLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLQyxFQUFMLENBQUgsR0FBZUgsR0FBRyxDQUFDRyxFQUFELEVBQUtDLEVBQUwsQ0FBSCxHQUFjalksQ0FBZCxHQUFtQjZYLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLRSxFQUFMLENBQUgsR0FBY3BLLENBQWQsR0FBa0I5TixDQUFwRCxHQUNEOFgsR0FBRyxDQUFDSSxFQUFELEVBQUtELEVBQUwsQ0FBSCxHQUFjaFksQ0FBZCxHQUFtQjZYLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLRSxFQUFMLENBQUgsR0FBY2xZLENBQWQsR0FBa0I4TixDQUQ1QztjQUdBOU4sQ0FBQyxHQUFHb1ksS0FBSyxJQUFJckssQ0FBQyxJQUFJLENBQVQsQ0FBVCxFQUFzQjlOLENBQUMsR0FBR21ZLEtBQUssR0FBR3JLLENBQWxDLEVBQXFDRCxDQUFDLEdBQUdzSyxLQUF6QztjQUNBSixFQUFFLEdBQUdMLEtBQUssQ0FBQzNYLENBQUQsQ0FBVixFQUFlaVksRUFBRSxHQUFHTixLQUFLLENBQUMxWCxDQUFELENBQXpCLEVBQThCaVksRUFBRSxHQUFHUCxLQUFLLENBQUM3SixDQUFELENBQXhDO2NBQ0FzSyxLQUFLLEdBQUdOLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLQyxFQUFMLENBQUgsR0FBZUgsR0FBRyxDQUFDRyxFQUFELEVBQUtDLEVBQUwsQ0FBSCxHQUFjalksQ0FBZCxHQUFtQjZYLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLRSxFQUFMLENBQUgsR0FBY3BLLENBQWQsR0FBa0I5TixDQUFwRCxHQUNEOFgsR0FBRyxDQUFDSSxFQUFELEVBQUtELEVBQUwsQ0FBSCxHQUFjaFksQ0FBZCxHQUFtQjZYLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLRSxFQUFMLENBQUgsR0FBY2xZLENBQWQsR0FBa0I4TixDQUQ1QztZQUVIOztZQUVEOU4sQ0FBQyxHQUFHbVksSUFBSixFQUFVbFksQ0FBQyxHQUFHMFksS0FBZCxFQUFxQjdLLENBQUMsR0FBR3NLLEtBQXpCO1lBQ0FKLEVBQUUsR0FBR0wsS0FBSyxDQUFDM1gsQ0FBRCxDQUFWLEVBQWVpWSxFQUFFLEdBQUdOLEtBQUssQ0FBQzFYLENBQUQsQ0FBekIsRUFBOEJpWSxFQUFFLEdBQUdQLEtBQUssQ0FBQzdKLENBQUQsQ0FBeEM7WUFDQTZLLEtBQUssR0FBR2IsR0FBRyxDQUFDRSxFQUFELEVBQUtDLEVBQUwsQ0FBSCxHQUFlSCxHQUFHLENBQUNHLEVBQUQsRUFBS0MsRUFBTCxDQUFILEdBQWNqWSxDQUFkLEdBQW1CNlgsR0FBRyxDQUFDRSxFQUFELEVBQUtFLEVBQUwsQ0FBSCxHQUFjcEssQ0FBZCxHQUFrQjlOLENBQXBELEdBQ0Q4WCxHQUFHLENBQUNJLEVBQUQsRUFBS0QsRUFBTCxDQUFILEdBQWNoWSxDQUFkLEdBQW1CNlgsR0FBRyxDQUFDRSxFQUFELEVBQUtFLEVBQUwsQ0FBSCxHQUFjbFksQ0FBZCxHQUFrQjhOLENBRDVDOztZQUVBLElBQUk2SyxLQUFLLElBQUlKLEtBQWIsRUFBb0I7Y0FDaEJ6RixDQUFDLEdBQUc2RSxLQUFLLENBQUNnQixLQUFELENBQVQ7Y0FDQWhCLEtBQUssQ0FBQ2dCLEtBQUQsQ0FBTCxHQUFlaEIsS0FBSyxDQUFDWSxLQUFELENBQXBCO2NBQ0FaLEtBQUssQ0FBQ1ksS0FBRCxDQUFMLEdBQWV6RixDQUFmO2NBQ0E2RixLQUFLLEdBQUdKLEtBQVI7WUFDSDs7WUFDREosSUFBSSxHQUFHSyxLQUFLLEdBQUdELEtBQUssR0FBRyxDQUF2QjtZQUNBSCxLQUFLLEdBQUdNLE1BQU0sR0FBR0QsTUFBakI7WUFFQVQsRUFBRSxHQUFHTCxLQUFLLENBQUNnQixLQUFELENBQVY7O1lBQ0EsU0FBVTtjQUNOLE9BQU9SLElBQUksSUFBSUMsS0FBUixJQUFpQixDQUFDTixHQUFHLENBQUNFLEVBQUQsRUFBS0wsS0FBSyxDQUFDUSxJQUFELENBQVYsQ0FBNUIsRUFBK0M7Z0JBQzNDLElBQUksQ0FBQ0wsR0FBRyxDQUFDSCxLQUFLLENBQUNRLElBQUQsQ0FBTixFQUFjSCxFQUFkLENBQVIsRUFBMkI7a0JBQ3ZCLElBQUlHLElBQUksR0FBR0ssS0FBWCxFQUFrQjtvQkFDZDFGLENBQUMsR0FBRzZFLEtBQUssQ0FBQ2EsS0FBRCxDQUFUO29CQUNBYixLQUFLLENBQUNhLEtBQUQsQ0FBTCxHQUFlYixLQUFLLENBQUNRLElBQUQsQ0FBcEI7b0JBQ0FSLEtBQUssQ0FBQ1EsSUFBRCxDQUFMLEdBQWNyRixDQUFkO2tCQUNIOztrQkFDRDhGLFFBQVEsR0FBRyxDQUFYO2tCQUNBSixLQUFLO2dCQUNSOztnQkFDREwsSUFBSTtjQUNQOztjQUVELE9BQU9BLElBQUksSUFBSUMsS0FBUixJQUFpQixDQUFDTixHQUFHLENBQUNILEtBQUssQ0FBQ1MsS0FBRCxDQUFOLEVBQWVKLEVBQWYsQ0FBNUIsRUFBZ0Q7Z0JBQzVDLElBQUksQ0FBQ0YsR0FBRyxDQUFDRSxFQUFELEVBQUtMLEtBQUssQ0FBQ1MsS0FBRCxDQUFWLENBQVIsRUFBNEI7a0JBQ3hCLElBQUlBLEtBQUssR0FBR00sTUFBWixFQUFvQjtvQkFDaEI1RixDQUFDLEdBQUc2RSxLQUFLLENBQUNlLE1BQUQsQ0FBVDtvQkFDQWYsS0FBSyxDQUFDZSxNQUFELENBQUwsR0FBZ0JmLEtBQUssQ0FBQ1MsS0FBRCxDQUFyQjtvQkFDQVQsS0FBSyxDQUFDUyxLQUFELENBQUwsR0FBZXRGLENBQWY7a0JBQ0g7O2tCQUNEOEYsUUFBUSxHQUFHLENBQVg7a0JBQ0FGLE1BQU07Z0JBQ1Q7O2dCQUNETixLQUFLO2NBQ1I7O2NBRUQsSUFBSUQsSUFBSSxHQUFHQyxLQUFYLEVBQWtCO2NBRWxCdEYsQ0FBQyxHQUFHNkUsS0FBSyxDQUFDUSxJQUFELENBQVQ7Y0FDQVIsS0FBSyxDQUFDUSxJQUFELENBQUwsR0FBY1IsS0FBSyxDQUFDUyxLQUFELENBQW5CO2NBQ0FULEtBQUssQ0FBQ1MsS0FBRCxDQUFMLEdBQWV0RixDQUFmO2NBQ0E4RixRQUFRLEdBQUcsQ0FBWDtjQUNBVCxJQUFJO2NBQ0pDLEtBQUs7WUFDUjs7WUFFRCxJQUFJUSxRQUFRLElBQUksQ0FBaEIsRUFBbUI7Y0FDZlQsSUFBSSxHQUFHSSxLQUFQLEVBQWNILEtBQUssR0FBR0ssTUFBdEI7O2NBRUEsS0FBS0osR0FBRyxHQUFHRixJQUFJLEdBQUcsQ0FBbEIsRUFBcUJFLEdBQUcsSUFBSUQsS0FBNUIsRUFBbUNDLEdBQUcsRUFBdEMsRUFBMEM7Z0JBQ3RDLEtBQUtDLElBQUksR0FBR0QsR0FBWixFQUFpQkMsSUFBSSxHQUFHSCxJQUFQLElBQWVMLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDVyxJQUFELENBQU4sRUFBY1gsS0FBSyxDQUFDVyxJQUFJLEdBQUcsQ0FBUixDQUFuQixDQUFuQyxFQUFtRUEsSUFBSSxFQUF2RSxFQUEyRTtrQkFDdkV4RixDQUFDLEdBQUc2RSxLQUFLLENBQUNXLElBQUQsQ0FBVDtrQkFDQVgsS0FBSyxDQUFDVyxJQUFELENBQUwsR0FBY1gsS0FBSyxDQUFDVyxJQUFJLEdBQUcsQ0FBUixDQUFuQjtrQkFDQVgsS0FBSyxDQUFDVyxJQUFJLEdBQUcsQ0FBUixDQUFMLEdBQWtCeEYsQ0FBbEI7Z0JBQ0g7Y0FDSjs7Y0FDRDtZQUNIOztZQUVEMUcsQ0FBQyxHQUFHN04sSUFBSSxDQUFDQyxHQUFMLENBQVVnYSxLQUFLLEdBQUdELEtBQWxCLEVBQTJCSixJQUFJLEdBQUdLLEtBQWxDLENBQUo7WUFDQWhTLENBQUMsR0FBSTJSLElBQUksR0FBRy9MLENBQVIsR0FBYSxDQUFqQjs7WUFDQSxLQUFLdlIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdVIsQ0FBaEIsRUFBbUIsRUFBRXZSLENBQUYsRUFBSyxFQUFFMkwsQ0FBMUIsRUFBNkI7Y0FDekJzTSxDQUFDLEdBQUc2RSxLQUFLLENBQUNZLEtBQUssR0FBRzFkLENBQVQsQ0FBVDtjQUNBOGMsS0FBSyxDQUFDWSxLQUFLLEdBQUcxZCxDQUFULENBQUwsR0FBbUI4YyxLQUFLLENBQUNuUixDQUFELENBQXhCO2NBQ0FtUixLQUFLLENBQUNuUixDQUFELENBQUwsR0FBV3NNLENBQVg7WUFDSDs7WUFFRDFHLENBQUMsR0FBRzdOLElBQUksQ0FBQ0MsR0FBTCxDQUFVaWEsTUFBTSxHQUFHQyxNQUFuQixFQUE2QkEsTUFBTSxHQUFHTixLQUF0QyxDQUFKO1lBQ0E1UixDQUFDLEdBQUlpUyxNQUFNLEdBQUdyTSxDQUFULEdBQWEsQ0FBZCxHQUFtQixDQUF2Qjs7WUFDQSxLQUFLdlIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdVIsQ0FBaEIsRUFBbUIsRUFBRXZSLENBQUYsRUFBSyxFQUFFMkwsQ0FBMUIsRUFBNkI7Y0FDekJzTSxDQUFDLEdBQUc2RSxLQUFLLENBQUNRLElBQUksR0FBR3RkLENBQVIsQ0FBVDtjQUNBOGMsS0FBSyxDQUFDUSxJQUFJLEdBQUd0ZCxDQUFSLENBQUwsR0FBa0I4YyxLQUFLLENBQUNuUixDQUFELENBQXZCO2NBQ0FtUixLQUFLLENBQUNuUixDQUFELENBQUwsR0FBV3NNLENBQVg7WUFDSDs7WUFDRDFHLENBQUMsR0FBSStMLElBQUksR0FBR0ssS0FBWjtZQUNBaFMsQ0FBQyxHQUFJa1MsTUFBTSxHQUFHTixLQUFkOztZQUNBLElBQUloTSxDQUFDLEdBQUcsQ0FBUixFQUFXO2NBQ1AsSUFBSTVGLENBQUMsR0FBRyxDQUFSLEVBQVc7Z0JBQ1AsSUFBSTRGLENBQUMsR0FBRzVGLENBQVIsRUFBVztrQkFDUCxFQUFFNUksRUFBRjtrQkFDQXlTLEtBQUssQ0FBQ3pTLEVBQUUsSUFBSSxDQUFQLENBQUwsR0FBaUIyYSxLQUFqQjtrQkFDQWxJLEtBQUssQ0FBQyxDQUFDelMsRUFBRSxJQUFJLENBQVAsSUFBWSxDQUFiLENBQUwsR0FBdUIyYSxLQUFLLEdBQUduTSxDQUFSLEdBQVksQ0FBbkM7a0JBQ0ErTCxJQUFJLEdBQUdNLE1BQU0sR0FBR2pTLENBQVQsR0FBYSxDQUFwQixFQUF1QjRSLEtBQUssR0FBR0ssTUFBL0I7Z0JBQ0gsQ0FMRCxNQUtPO2tCQUNILEVBQUU3YSxFQUFGO2tCQUNBeVMsS0FBSyxDQUFDelMsRUFBRSxJQUFJLENBQVAsQ0FBTCxHQUFpQjZhLE1BQU0sR0FBR2pTLENBQVQsR0FBYSxDQUE5QjtrQkFDQTZKLEtBQUssQ0FBQyxDQUFDelMsRUFBRSxJQUFJLENBQVAsSUFBWSxDQUFiLENBQUwsR0FBdUI2YSxNQUF2QjtrQkFDQU4sSUFBSSxHQUFHSSxLQUFQLEVBQWNILEtBQUssR0FBR0csS0FBSyxHQUFHbk0sQ0FBUixHQUFZLENBQWxDO2dCQUNIO2NBQ0osQ0FaRCxNQVlPO2dCQUNIK0wsSUFBSSxHQUFHSSxLQUFQLEVBQWNILEtBQUssR0FBR0csS0FBSyxHQUFHbk0sQ0FBUixHQUFZLENBQWxDO2NBQ0g7WUFDSixDQWhCRCxNQWlCSyxJQUFJNUYsQ0FBQyxHQUFHLENBQVIsRUFDRDJSLElBQUksR0FBR00sTUFBTSxHQUFHalMsQ0FBVCxHQUFhLENBQXBCLEVBQXVCNFIsS0FBSyxHQUFHSyxNQUEvQixDQURDLEtBR0Q7VUFDUDtRQUNKO01BQ0o7SUFDSjtFQTFWTDtJQUFBO0lBQUEsT0E0VkksZ0JBQU9kLEtBQVAsRUFBbUJDLEdBQW5CLEVBQWdDQyxJQUFoQyxFQUE0QztNQUN4QyxJQUFJeGEsQ0FBSjtNQUNBLElBQUl3YixNQUFNLEdBQUcsQ0FBYjtNQUFBLElBQWdCQyxFQUFFLEdBQUcsQ0FBckI7TUFBQSxJQUF3QkMsRUFBRSxHQUFHLENBQTdCO01BQUEsSUFBZ0NDLE1BQU0sR0FBSXBCLEdBQUcsR0FBR0MsSUFBUCxJQUFnQixDQUF6RDs7TUFDQSxTQUFVO1FBQ04sSUFBSUEsSUFBSSxJQUFJRCxHQUFaLEVBQWlCLE9BQU9ELEtBQUssQ0FBQ3FCLE1BQUQsQ0FBWjs7UUFDakIsSUFBSW5CLElBQUksSUFBS0QsR0FBRyxHQUFHLENBQW5CLEVBQXVCO1VBQ25CLElBQUlELEtBQUssQ0FBQ0MsR0FBRCxDQUFMLEdBQWFELEtBQUssQ0FBQ0UsSUFBRCxDQUF0QixFQUE4QjtZQUMxQnhhLENBQUMsR0FBR3NhLEtBQUssQ0FBQ0MsR0FBRCxDQUFUO1lBQ0FELEtBQUssQ0FBQ0MsR0FBRCxDQUFMLEdBQWFELEtBQUssQ0FBQ0UsSUFBRCxDQUFsQjtZQUNBRixLQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjeGEsQ0FBZDtVQUNIOztVQUNELE9BQU9zYSxLQUFLLENBQUNxQixNQUFELENBQVo7UUFDSDs7UUFDREgsTUFBTSxHQUFLakIsR0FBRyxHQUFHQyxJQUFQLElBQWdCLENBQTFCOztRQUNBLElBQUlGLEtBQUssQ0FBQ2tCLE1BQUQsQ0FBTCxHQUFnQmxCLEtBQUssQ0FBQ0UsSUFBRCxDQUF6QixFQUFpQztVQUM3QnhhLENBQUMsR0FBR3NhLEtBQUssQ0FBQ2tCLE1BQUQsQ0FBVDtVQUNBbEIsS0FBSyxDQUFDa0IsTUFBRCxDQUFMLEdBQWdCbEIsS0FBSyxDQUFDRSxJQUFELENBQXJCO1VBQ0FGLEtBQUssQ0FBQ0UsSUFBRCxDQUFMLEdBQWN4YSxDQUFkO1FBQ0g7O1FBQ0QsSUFBSXNhLEtBQUssQ0FBQ0MsR0FBRCxDQUFMLEdBQWFELEtBQUssQ0FBQ0UsSUFBRCxDQUF0QixFQUE4QjtVQUMxQnhhLENBQUMsR0FBR3NhLEtBQUssQ0FBQ0MsR0FBRCxDQUFUO1VBQ0FELEtBQUssQ0FBQ0MsR0FBRCxDQUFMLEdBQWFELEtBQUssQ0FBQ0UsSUFBRCxDQUFsQjtVQUNBRixLQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjeGEsQ0FBZDtRQUNIOztRQUNELElBQUlzYSxLQUFLLENBQUNrQixNQUFELENBQUwsR0FBZ0JsQixLQUFLLENBQUNDLEdBQUQsQ0FBekIsRUFBZ0M7VUFDNUJ2YSxDQUFDLEdBQUdzYSxLQUFLLENBQUNrQixNQUFELENBQVQ7VUFDQWxCLEtBQUssQ0FBQ2tCLE1BQUQsQ0FBTCxHQUFnQmxCLEtBQUssQ0FBQ0MsR0FBRCxDQUFyQjtVQUNBRCxLQUFLLENBQUNDLEdBQUQsQ0FBTCxHQUFhdmEsQ0FBYjtRQUNIOztRQUNEeWIsRUFBRSxHQUFJbEIsR0FBRyxHQUFHLENBQVo7UUFDQXZhLENBQUMsR0FBR3NhLEtBQUssQ0FBQ2tCLE1BQUQsQ0FBVDtRQUNBbEIsS0FBSyxDQUFDa0IsTUFBRCxDQUFMLEdBQWdCbEIsS0FBSyxDQUFDbUIsRUFBRCxDQUFyQjtRQUNBbkIsS0FBSyxDQUFDbUIsRUFBRCxDQUFMLEdBQVl6YixDQUFaO1FBQ0EwYixFQUFFLEdBQUdsQixJQUFMOztRQUNBLFNBQVU7VUFDTjtZQUFHLEVBQUVpQixFQUFGO1VBQUgsU0FBZ0JuQixLQUFLLENBQUNDLEdBQUQsQ0FBTCxHQUFhRCxLQUFLLENBQUNtQixFQUFELENBQWxDOztVQUNBO1lBQUcsRUFBRUMsRUFBRjtVQUFILFNBQWdCcEIsS0FBSyxDQUFDb0IsRUFBRCxDQUFMLEdBQVlwQixLQUFLLENBQUNDLEdBQUQsQ0FBakM7O1VBQ0EsSUFBSW1CLEVBQUUsR0FBR0QsRUFBVCxFQUFhO1VBQ2J6YixDQUFDLEdBQUdzYSxLQUFLLENBQUNtQixFQUFELENBQVQ7VUFDQW5CLEtBQUssQ0FBQ21CLEVBQUQsQ0FBTCxHQUFZbkIsS0FBSyxDQUFDb0IsRUFBRCxDQUFqQjtVQUNBcEIsS0FBSyxDQUFDb0IsRUFBRCxDQUFMLEdBQVkxYixDQUFaO1FBQ0g7O1FBQ0RBLENBQUMsR0FBR3NhLEtBQUssQ0FBQ0MsR0FBRCxDQUFUO1FBQ0FELEtBQUssQ0FBQ0MsR0FBRCxDQUFMLEdBQWFELEtBQUssQ0FBQ29CLEVBQUQsQ0FBbEI7UUFDQXBCLEtBQUssQ0FBQ29CLEVBQUQsQ0FBTCxHQUFZMWIsQ0FBWjtRQUNBLElBQUkwYixFQUFFLElBQUlDLE1BQVYsRUFDSXBCLEdBQUcsR0FBR2tCLEVBQU4sQ0FESixLQUVLLElBQUlDLEVBQUUsSUFBSUMsTUFBVixFQUNEbkIsSUFBSSxHQUFJa0IsRUFBRSxHQUFHLENBQWI7TUFDUDs7TUFDRCxPQUFPLENBQVA7SUFDSDtFQS9ZTDs7RUFBQTtBQUFBLEVBQXFDalgsVUFBckM7O0FBa1pBQSxVQUFVLENBQUNWLE9BQVgsR0FBcUJBLHlEQUFyQjs7QUFFQVUsVUFBVSxDQUFDMkMsTUFBWDtFQUFBOztFQUFBOztFQUVJO0lBQUE7O0lBQUE7O0lBQ0k7O0lBREo7O0lBRUksT0FBS3JELE9BQUwsR0FBZSxJQUFJQSx5REFBSixFQUFmO0lBRko7RUFHQzs7RUFMTDtJQUFBO0lBQUEsT0FPSSxvQkFBVzZYLENBQVgsRUFBd0JDLEtBQXhCLEVBQXVDQyxDQUF2QyxFQUFvREMsQ0FBcEQsRUFBaUVDLEtBQWpFLEVBQWdGak4sQ0FBaEYsRUFBeUY7TUFDckYsSUFBSWtOLEdBQUcsR0FBR25lLDJFQUFWO01BQ0EsSUFBSU4sQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQkMsQ0FBQyxHQUFHLENBQXRCO01BQUEsSUFBeUI2SSxDQUFDLEdBQUcsQ0FBN0I7TUFBQSxJQUFnQytTLENBQUMsR0FBRyxDQUFwQztNQUFBLElBQXVDck0sR0FBRyxHQUFHLENBQTdDO01BQUEsSUFBZ0RzTSxHQUFHLEdBQUcsQ0FBdEQ7TUFBQSxJQUF5REMsSUFBSSxHQUFHLENBQWhFO01BQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7TUFBQSxJQUFlQyxRQUFRLEdBQUd2TixDQUFDLEdBQUdBLENBQUosR0FBUSxFQUFsQztNQUNBLElBQUl3TixFQUFFLEdBQUcsR0FBVDtNQUFBLElBQWNDLEdBQUcsR0FBRyxHQUFwQjtNQUFBLElBQXlCMUssQ0FBQyxHQUFHLEdBQTdCO01BQUEsSUFBa0M3TCxDQUFDLEdBQUcsR0FBdEM7TUFBQSxJQUEyQ3dQLENBQUMsR0FBRyxHQUEvQztNQUFBLElBQW9EN0QsQ0FBQyxHQUFHLEdBQXhEO01BQUEsSUFBNkRuQixDQUFDLEdBQUcsR0FBakU7TUFBQSxJQUFzRWdNLEVBQUUsR0FBRyxHQUEzRTtNQUFBLElBQWdGQyxFQUFFLEdBQUcsR0FBckY7TUFFQSxJQUFJQyxTQUFTLEdBQUcsS0FBS3pmLEtBQUwsQ0FBV2dHLFVBQVgsQ0FBc0I2TCxDQUFDLElBQUksQ0FBM0IsQ0FBaEI7TUFDQSxJQUFJNk4sU0FBUyxHQUFHLEtBQUsxZixLQUFMLENBQVdnRyxVQUFYLENBQXNCNkwsQ0FBQyxJQUFJLENBQTNCLENBQWhCO01BQ0EsSUFBSThOLElBQUksR0FBR0YsU0FBUyxDQUFDdFosR0FBckI7TUFDQSxJQUFJeVosSUFBSSxHQUFHRixTQUFTLENBQUN2WixHQUFyQjs7TUFFQSxJQUFJMFksQ0FBSixFQUFPO1FBQ0gsT0FBT3ZlLENBQUMsR0FBR3VSLENBQVgsRUFBY3ZSLENBQUMsRUFBZixFQUFtQjtVQUNmOEMsQ0FBQyxHQUFHOUMsQ0FBQyxHQUFHd2UsS0FBUjs7VUFDQSxLQUFLM2IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHME8sQ0FBaEIsRUFBbUIxTyxDQUFDLEVBQXBCLEVBQXdCO1lBQ3BCMGIsQ0FBQyxDQUFDemIsQ0FBQyxHQUFHRCxDQUFMLENBQUQsR0FBVyxHQUFYO1VBQ0g7O1VBQ0QwYixDQUFDLENBQUN6YixDQUFDLEdBQUc5QyxDQUFMLENBQUQsR0FBVyxHQUFYO1FBQ0g7TUFDSjs7TUFFRCxLQUFLOEMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHeU8sQ0FBaEIsRUFBbUJ6TyxDQUFDLEVBQXBCLEVBQXdCO1FBQ3BCd2IsQ0FBQyxDQUFDeGIsQ0FBRCxDQUFELEdBQU9zYixDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFHLENBQVQsSUFBY3ZiLENBQWYsQ0FBUjs7UUFDQSxJQUFJQSxDQUFDLEdBQUd5TyxDQUFDLEdBQUcsQ0FBWixFQUFlO1VBQ1gsS0FBSzVGLENBQUMsR0FBRzdJLENBQUMsR0FBRyxDQUFSLEVBQVdpYyxFQUFFLEdBQUdyYixJQUFJLENBQUMwQyxHQUFMLENBQVNnWSxDQUFDLENBQUNDLEtBQUssR0FBR3ZiLENBQVIsR0FBWTZJLENBQWIsQ0FBVixDQUFoQixFQUE0QzNMLENBQUMsR0FBRzhDLENBQUMsR0FBRyxDQUF6RCxFQUE0RDlDLENBQUMsR0FBR3VSLENBQWhFLEVBQW1FdlIsQ0FBQyxFQUFwRSxFQUF3RTtZQUNwRWdmLEdBQUcsR0FBR3RiLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2dZLENBQUMsQ0FBQ0MsS0FBSyxHQUFHdmIsQ0FBUixHQUFZOUMsQ0FBYixDQUFWLENBQU47WUFDQSxJQUFJK2UsRUFBRSxHQUFHQyxHQUFULEVBQ0lELEVBQUUsR0FBR0MsR0FBTCxFQUFVclQsQ0FBQyxHQUFHM0wsQ0FBZDtVQUNQOztVQUNEcWYsSUFBSSxDQUFDdmMsQ0FBRCxDQUFKLEdBQVU2SSxDQUFWO1FBQ0g7O1FBQ0QsSUFBSTdJLENBQUMsR0FBRyxDQUFSLEVBQVc7VUFDUCxLQUFLNkksQ0FBQyxHQUFHLENBQUosRUFBT29ULEVBQUUsR0FBR3JiLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2dZLENBQUMsQ0FBQ3RiLENBQUQsQ0FBVixDQUFaLEVBQTRCOUMsQ0FBQyxHQUFHLENBQXJDLEVBQXdDQSxDQUFDLEdBQUc4QyxDQUE1QyxFQUErQzlDLENBQUMsRUFBaEQsRUFBb0Q7WUFDaERnZixHQUFHLEdBQUd0YixJQUFJLENBQUMwQyxHQUFMLENBQVNnWSxDQUFDLENBQUNDLEtBQUssR0FBR3JlLENBQVIsR0FBWThDLENBQWIsQ0FBVixDQUFOO1lBQ0EsSUFBSWljLEVBQUUsR0FBR0MsR0FBVCxFQUNJRCxFQUFFLEdBQUdDLEdBQUwsRUFBVXJULENBQUMsR0FBRzNMLENBQWQ7VUFDUDs7VUFDRHNmLElBQUksQ0FBQ3hjLENBQUQsQ0FBSixHQUFVNkksQ0FBVjtRQUNIO01BQ0o7O01BRUQsSUFBSTRGLENBQUMsR0FBRyxDQUFSLEVBQVcsT0FBT3NOLEtBQUssR0FBR0MsUUFBZixFQUF5QkQsS0FBSyxFQUE5QixFQUFrQztRQUV6QyxLQUFLL2IsQ0FBQyxHQUFHLENBQUosRUFBT2ljLEVBQUUsR0FBR3JiLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2dZLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBVixDQUFaLEVBQWtDcmYsQ0FBQyxHQUFHLENBQTNDLEVBQThDQSxDQUFDLEdBQUd1UixDQUFDLEdBQUcsQ0FBdEQsRUFBeUR2UixDQUFDLEVBQTFELEVBQThEO1VBQzFEZ2YsR0FBRyxHQUFHdGIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTZ1ksQ0FBQyxDQUFDQyxLQUFLLEdBQUdyZSxDQUFSLEdBQVlxZixJQUFJLENBQUNyZixDQUFELENBQWpCLENBQVYsQ0FBTjtVQUNBLElBQUkrZSxFQUFFLEdBQUdDLEdBQVQsRUFDSUQsRUFBRSxHQUFHQyxHQUFMLEVBQVVsYyxDQUFDLEdBQUc5QyxDQUFkO1FBQ1A7O1FBQ0QwZSxDQUFDLEdBQUdXLElBQUksQ0FBQ3ZjLENBQUQsQ0FBUjs7UUFDQSxLQUFLOUMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdVIsQ0FBaEIsRUFBbUJ2UixDQUFDLEVBQXBCLEVBQXdCO1VBQ3BCZ2YsR0FBRyxHQUFHdGIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTZ1ksQ0FBQyxDQUFDQyxLQUFLLEdBQUdpQixJQUFJLENBQUN0ZixDQUFELENBQVosR0FBa0JBLENBQW5CLENBQVYsQ0FBTjtVQUNBLElBQUkrZSxFQUFFLEdBQUdDLEdBQVQsRUFDSUQsRUFBRSxHQUFHQyxHQUFMLEVBQVVsYyxDQUFDLEdBQUd3YyxJQUFJLENBQUN0ZixDQUFELENBQWxCLEVBQXVCMGUsQ0FBQyxHQUFHMWUsQ0FBM0I7UUFDUDs7UUFFRHNVLENBQUMsR0FBRzhKLENBQUMsQ0FBQ0MsS0FBSyxHQUFHdmIsQ0FBUixHQUFZNGIsQ0FBYixDQUFMO1FBRUEsSUFBSWhiLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2tPLENBQVQsS0FBZW1LLEdBQW5CLEVBQXdCO1FBRXhCaFcsQ0FBQyxHQUFHLENBQUM2VixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFPSixDQUFDLENBQUN4YixDQUFELENBQVQsSUFBZ0IsR0FBcEI7UUFDQW1WLENBQUMsR0FBR3ZVLElBQUksQ0FBQzBDLEdBQUwsQ0FBU3FDLENBQVQsSUFBY25DLDJEQUFLLENBQUNnTyxDQUFELEVBQUk3TCxDQUFKLENBQXZCO1FBQ0EyTCxDQUFDLEdBQUc5TiwyREFBSyxDQUFDZ08sQ0FBRCxFQUFJMkQsQ0FBSixDQUFUO1FBQ0FoRixDQUFDLEdBQUdnRixDQUFDLEdBQUc3RCxDQUFSO1FBQ0FBLENBQUMsR0FBR0UsQ0FBQyxHQUFHRixDQUFSO1FBQVc2RCxDQUFDLEdBQUkzRCxDQUFDLEdBQUcyRCxDQUFMLEdBQVUzRCxDQUFkO1FBQ1gsSUFBSTdMLENBQUMsR0FBRyxDQUFSLEVBQ0kyTCxDQUFDLEdBQUcsQ0FBQ0EsQ0FBTCxFQUFRNkQsQ0FBQyxHQUFHLENBQUNBLENBQWI7UUFDSm1HLENBQUMsQ0FBQ0MsS0FBSyxHQUFHdmIsQ0FBUixHQUFZNGIsQ0FBYixDQUFELEdBQW1CLENBQW5CO1FBRUFKLENBQUMsQ0FBQ3hiLENBQUQsQ0FBRCxJQUFRbVYsQ0FBUjtRQUNBcUcsQ0FBQyxDQUFDSSxDQUFELENBQUQsSUFBUXpHLENBQVI7O1FBR0EsS0FBS2pZLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzhDLENBQWhCLEVBQW1COUMsQ0FBQyxFQUFwQixFQUF3QjtVQUNwQjJlLEdBQUcsR0FBSU4sS0FBSyxHQUFHcmUsQ0FBUixHQUFZOEMsQ0FBbkI7VUFDQThiLElBQUksR0FBSVAsS0FBSyxHQUFHcmUsQ0FBUixHQUFZMGUsQ0FBcEI7VUFDQU8sRUFBRSxHQUFHYixDQUFDLENBQUNPLEdBQUQsQ0FBTjtVQUNBTyxFQUFFLEdBQUdkLENBQUMsQ0FBQ1EsSUFBRCxDQUFOO1VBQ0FSLENBQUMsQ0FBQ08sR0FBRCxDQUFELEdBQVNNLEVBQUUsR0FBR2hNLENBQUwsR0FBU2lNLEVBQUUsR0FBRzlLLENBQXZCO1VBQ0FnSyxDQUFDLENBQUNRLElBQUQsQ0FBRCxHQUFVSyxFQUFFLEdBQUc3SyxDQUFMLEdBQVM4SyxFQUFFLEdBQUdqTSxDQUF4QjtRQUNIOztRQUNELEtBQUtqVCxDQUFDLEdBQUk4QyxDQUFDLEdBQUcsQ0FBZCxFQUFrQjlDLENBQUMsR0FBRzBlLENBQXRCLEVBQXlCMWUsQ0FBQyxFQUExQixFQUE4QjtVQUMxQjJlLEdBQUcsR0FBSU4sS0FBSyxHQUFHdmIsQ0FBUixHQUFZOUMsQ0FBbkI7VUFDQTRlLElBQUksR0FBSVAsS0FBSyxHQUFHcmUsQ0FBUixHQUFZMGUsQ0FBcEI7VUFDQU8sRUFBRSxHQUFHYixDQUFDLENBQUNPLEdBQUQsQ0FBTjtVQUNBTyxFQUFFLEdBQUdkLENBQUMsQ0FBQ1EsSUFBRCxDQUFOO1VBQ0FSLENBQUMsQ0FBQ08sR0FBRCxDQUFELEdBQVNNLEVBQUUsR0FBR2hNLENBQUwsR0FBU2lNLEVBQUUsR0FBRzlLLENBQXZCO1VBQ0FnSyxDQUFDLENBQUNRLElBQUQsQ0FBRCxHQUFVSyxFQUFFLEdBQUc3SyxDQUFMLEdBQVM4SyxFQUFFLEdBQUdqTSxDQUF4QjtRQUNIOztRQUNEalQsQ0FBQyxHQUFHMGUsQ0FBQyxHQUFHLENBQVI7UUFDQUMsR0FBRyxHQUFJTixLQUFLLEdBQUd2YixDQUFSLEdBQVk5QyxDQUFuQjtRQUNBNGUsSUFBSSxHQUFJUCxLQUFLLEdBQUdLLENBQVIsR0FBWTFlLENBQXBCOztRQUNBLE9BQU9BLENBQUMsR0FBR3VSLENBQVgsRUFBY3ZSLENBQUMsSUFBSTJlLEdBQUcsRUFBUCxFQUFXQyxJQUFJLEVBQTlCLEVBQWtDO1VBQzlCSyxFQUFFLEdBQUdiLENBQUMsQ0FBQ08sR0FBRCxDQUFOO1VBQ0FPLEVBQUUsR0FBR2QsQ0FBQyxDQUFDUSxJQUFELENBQU47VUFDQVIsQ0FBQyxDQUFDTyxHQUFELENBQUQsR0FBU00sRUFBRSxHQUFHaE0sQ0FBTCxHQUFTaU0sRUFBRSxHQUFHOUssQ0FBdkI7VUFDQWdLLENBQUMsQ0FBQ1EsSUFBRCxDQUFELEdBQVVLLEVBQUUsR0FBRzdLLENBQUwsR0FBUzhLLEVBQUUsR0FBR2pNLENBQXhCO1FBQ0g7O1FBR0QsSUFBSXNMLENBQUosRUFBTztVQUNISSxHQUFHLEdBQUdILEtBQUssR0FBRzFiLENBQWQ7VUFDQThiLElBQUksR0FBR0osS0FBSyxHQUFHRSxDQUFmOztVQUNBLEtBQUsxZSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd1UixDQUFoQixFQUFtQnZSLENBQUMsSUFBSTJlLEdBQUcsRUFBUCxFQUFXQyxJQUFJLEVBQW5DLEVBQXVDO1lBQ25DSyxFQUFFLEdBQUdWLENBQUMsQ0FBQ0ksR0FBRCxDQUFOO1lBQ0FPLEVBQUUsR0FBR1gsQ0FBQyxDQUFDSyxJQUFELENBQU47WUFDQUwsQ0FBQyxDQUFDSSxHQUFELENBQUQsR0FBU00sRUFBRSxHQUFHaE0sQ0FBTCxHQUFTaU0sRUFBRSxHQUFHOUssQ0FBdkI7WUFDQW1LLENBQUMsQ0FBQ0ssSUFBRCxDQUFELEdBQVVLLEVBQUUsR0FBRzdLLENBQUwsR0FBUzhLLEVBQUUsR0FBR2pNLENBQXhCO1VBQ0g7UUFDSjs7UUFFRCxLQUFLcFEsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLENBQWhCLEVBQW1CQSxDQUFDLEVBQXBCLEVBQXdCO1VBQ3BCd1AsR0FBRyxHQUFHeFAsQ0FBQyxJQUFJLENBQUwsR0FBU0MsQ0FBVCxHQUFhNGIsQ0FBbkI7O1VBQ0EsSUFBSXJNLEdBQUcsR0FBR2QsQ0FBQyxHQUFHLENBQWQsRUFBaUI7WUFDYixLQUFLNUYsQ0FBQyxHQUFHMEcsR0FBRyxHQUFHLENBQVYsRUFBYTBNLEVBQUUsR0FBR3JiLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2dZLENBQUMsQ0FBQ0MsS0FBSyxHQUFHaE0sR0FBUixHQUFjMUcsQ0FBZixDQUFWLENBQWxCLEVBQWdEM0wsQ0FBQyxHQUFHcVMsR0FBRyxHQUFHLENBQS9ELEVBQWtFclMsQ0FBQyxHQUFHdVIsQ0FBdEUsRUFBeUV2UixDQUFDLEVBQTFFLEVBQThFO2NBQzFFZ2YsR0FBRyxHQUFHdGIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTZ1ksQ0FBQyxDQUFDQyxLQUFLLEdBQUdoTSxHQUFSLEdBQWNyUyxDQUFmLENBQVYsQ0FBTjtjQUNBLElBQUkrZSxFQUFFLEdBQUdDLEdBQVQsRUFDSUQsRUFBRSxHQUFHQyxHQUFMLEVBQVVyVCxDQUFDLEdBQUczTCxDQUFkO1lBQ1A7O1lBQ0RxZixJQUFJLENBQUNoTixHQUFELENBQUosR0FBWTFHLENBQVo7VUFDSDs7VUFDRCxJQUFJMEcsR0FBRyxHQUFHLENBQVYsRUFBYTtZQUNULEtBQUsxRyxDQUFDLEdBQUcsQ0FBSixFQUFPb1QsRUFBRSxHQUFHcmIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTZ1ksQ0FBQyxDQUFDL0wsR0FBRCxDQUFWLENBQVosRUFBOEJyUyxDQUFDLEdBQUcsQ0FBdkMsRUFBMENBLENBQUMsR0FBR3FTLEdBQTlDLEVBQW1EclMsQ0FBQyxFQUFwRCxFQUF3RDtjQUNwRGdmLEdBQUcsR0FBR3RiLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2dZLENBQUMsQ0FBQ0MsS0FBSyxHQUFHcmUsQ0FBUixHQUFZcVMsR0FBYixDQUFWLENBQU47Y0FDQSxJQUFJME0sRUFBRSxHQUFHQyxHQUFULEVBQ0lELEVBQUUsR0FBR0MsR0FBTCxFQUFVclQsQ0FBQyxHQUFHM0wsQ0FBZDtZQUNQOztZQUNEc2YsSUFBSSxDQUFDak4sR0FBRCxDQUFKLEdBQVkxRyxDQUFaO1VBQ0g7UUFDSjtNQUNKOztNQUdELEtBQUs3SSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd5TyxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJ6TyxDQUFDLEVBQXhCLEVBQTRCO1FBQ3hCNkksQ0FBQyxHQUFHN0ksQ0FBSjs7UUFDQSxLQUFLOUMsQ0FBQyxHQUFHOEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0I5QyxDQUFDLEdBQUd1UixDQUFwQixFQUF1QnZSLENBQUMsRUFBeEIsRUFBNEI7VUFDeEIsSUFBSXNlLENBQUMsQ0FBQzNTLENBQUQsQ0FBRCxHQUFPMlMsQ0FBQyxDQUFDdGUsQ0FBRCxDQUFaLEVBQ0kyTCxDQUFDLEdBQUczTCxDQUFKO1FBQ1A7O1FBQ0QsSUFBSThDLENBQUMsSUFBSTZJLENBQVQsRUFBWTtVQUNSdEYsMERBQUksQ0FBQ2lZLENBQUQsRUFBSTNTLENBQUosRUFBTzdJLENBQVAsRUFBVWljLEVBQVYsQ0FBSjs7VUFDQSxJQUFJUixDQUFKLEVBQU87WUFDSCxLQUFLdmUsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdVIsQ0FBaEIsRUFBbUJ2UixDQUFDLEVBQXBCLEVBQXdCO2NBQ3BCcUcsMERBQUksQ0FBQ2tZLENBQUQsRUFBSUMsS0FBSyxHQUFHN1MsQ0FBUixHQUFZM0wsQ0FBaEIsRUFBbUJ3ZSxLQUFLLEdBQUcxYixDQUFSLEdBQVk5QyxDQUEvQixFQUFrQytlLEVBQWxDLENBQUo7WUFDSDtVQUNKO1FBQ0o7TUFDSjs7TUFHRCxLQUFLcmYsS0FBTCxDQUFXc0csVUFBWCxDQUFzQm1aLFNBQXRCO01BQ0EsS0FBS3pmLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JvWixTQUF0QjtJQUNIO0VBOUpMO0lBQUE7SUFBQSxPQWdLSSx1QkFBY0csRUFBZCxFQUE0QmxCLEtBQTVCLEVBQTJDbUIsRUFBM0MsRUFBc0RDLEVBQXRELEVBQW9FakIsS0FBcEUsRUFBbUY3UyxDQUFuRixFQUE4RjRGLENBQTlGLEVBQXlHbU8sRUFBekcsRUFBbUg7TUFDL0csSUFBSWpCLEdBQUcsR0FBR25lLDJFQUFBLEdBQTJCLEdBQXJDO01BQ0EsSUFBSXFmLE1BQU0sR0FBR3JmLDJFQUFiO01BQ0EsSUFBSU4sQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQkMsQ0FBQyxHQUFHLENBQXRCO01BQUEsSUFBeUI4YyxJQUFJLEdBQUcsQ0FBaEM7TUFBQSxJQUFtQ2QsUUFBUSxHQUFHcGIsSUFBSSxDQUFDcUMsR0FBTCxDQUFTNEYsQ0FBVCxFQUFZLEVBQVosQ0FBOUM7TUFDQSxJQUFJa1UsRUFBRSxHQUFHLENBQVQ7TUFBQSxJQUFZQyxFQUFFLEdBQUcsQ0FBakI7TUFBQSxJQUFvQkMsRUFBRSxHQUFHLENBQXpCO01BQUEsSUFBNEJDLEVBQUUsR0FBRyxDQUFqQztNQUFBLElBQW9DQyxPQUFPLEdBQUcsQ0FBOUM7TUFDQSxJQUFJaE4sQ0FBQyxHQUFHLEdBQVI7TUFBQSxJQUFhbUIsQ0FBQyxHQUFHLEdBQWpCO01BQUEsSUFBc0I2RCxDQUFDLEdBQUcsR0FBMUI7TUFDQSxJQUFJaUksRUFBRSxHQUFHLEdBQVQ7TUFBQSxJQUFjM0csRUFBRSxHQUFHLEdBQW5CO01BQUEsSUFBd0I0RyxFQUFFLEdBQUcsR0FBN0I7TUFBQSxJQUFrQzVhLElBQUksR0FBRyxHQUF6QztNQUFBLElBQThDNmEsS0FBSyxHQUFHLEdBQXREO01BQUEsSUFBMkRDLEtBQUssR0FBRyxHQUFuRTtNQUFBLElBQXdFbGIsQ0FBQyxHQUFHLEdBQTVFO01BQUEsSUFBaUZtUCxDQUFDLEdBQUcsR0FBckY7TUFBQSxJQUEwRmxQLENBQUMsR0FBRyxHQUE5RjtNQUNBLElBQUlrYixJQUFJLEdBQUcsTUFBWDtNQUNBLElBQUl0QixHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWV1QixJQUFJLEdBQUcsR0FBdEI7TUFBQSxJQUEyQkMsSUFBSSxHQUFHLEdBQWxDO01BRUEsSUFBSUMsTUFBTSxHQUFHLEtBQUsvZ0IsS0FBTCxDQUFXZ0csVUFBWCxDQUFzQjZMLENBQUMsSUFBSSxDQUEzQixDQUFiO01BQ0EsSUFBSStNLENBQUMsR0FBR21DLE1BQU0sQ0FBQ0MsR0FBZjs7TUFFQSxPQUFPMWdCLENBQUMsR0FBR3VSLENBQVgsRUFBY3ZSLENBQUMsRUFBZixFQUFtQjtRQUNmLEtBQUs4QyxDQUFDLEdBQUcsQ0FBSixFQUFPcWQsRUFBRSxHQUFHLENBQWpCLEVBQW9CcmQsQ0FBQyxHQUFHNkksQ0FBeEIsRUFBMkI3SSxDQUFDLEVBQTVCLEVBQWdDO1VBQzVCbVYsQ0FBQyxHQUFHc0gsRUFBRSxDQUFDdmYsQ0FBQyxHQUFHcWUsS0FBSixHQUFZdmIsQ0FBYixDQUFOO1VBQ0FxZCxFQUFFLElBQUlsSSxDQUFDLEdBQUdBLENBQVY7UUFDSDs7UUFDRHFHLENBQUMsQ0FBQ3RlLENBQUQsQ0FBRCxHQUFPbWdCLEVBQVA7O1FBRUEsSUFBSVYsRUFBSixFQUFRO1VBQ0osS0FBSzNjLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3lPLENBQWhCLEVBQW1Cek8sQ0FBQyxFQUFwQixFQUF3QjtZQUNwQjJjLEVBQUUsQ0FBQ3pmLENBQUMsR0FBR3dlLEtBQUosR0FBWTFiLENBQWIsQ0FBRixHQUFvQixDQUFwQjtVQUNIOztVQUNEMmMsRUFBRSxDQUFDemYsQ0FBQyxHQUFHd2UsS0FBSixHQUFZeGUsQ0FBYixDQUFGLEdBQW9CLENBQXBCO1FBQ0g7TUFDSjs7TUFFRCxPQUFPNGYsSUFBSSxHQUFHZCxRQUFkLEVBQXdCYyxJQUFJLEVBQTVCLEVBQWdDO1FBQzVCSyxPQUFPLEdBQUcsQ0FBVjs7UUFFQSxLQUFLamdCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3VSLENBQUMsR0FBRyxDQUFwQixFQUF1QnZSLENBQUMsRUFBeEIsRUFBNEI7VUFDeEIsS0FBSzZDLENBQUMsR0FBRzdDLENBQUMsR0FBRyxDQUFiLEVBQWdCNkMsQ0FBQyxHQUFHME8sQ0FBcEIsRUFBdUIxTyxDQUFDLEVBQXhCLEVBQTRCO1lBQ3hCZ2QsRUFBRSxHQUFJN2YsQ0FBQyxHQUFHcWUsS0FBTCxHQUFjLENBQW5CLEVBQXNCeUIsRUFBRSxHQUFJamQsQ0FBQyxHQUFHd2IsS0FBTCxHQUFjLENBQXpDO1lBQ0FsWixDQUFDLEdBQUdtWixDQUFDLENBQUN0ZSxDQUFELENBQUwsRUFBVXNVLENBQUMsR0FBRyxDQUFkLEVBQWlCbFAsQ0FBQyxHQUFHa1osQ0FBQyxDQUFDemIsQ0FBRCxDQUF0QjtZQUVBQyxDQUFDLEdBQUcsQ0FBSjtZQUNBd1IsQ0FBQyxJQUFJaUwsRUFBRSxDQUFDTSxFQUFELENBQUYsR0FBU04sRUFBRSxDQUFDTyxFQUFELENBQWhCO1lBQ0F4TCxDQUFDLElBQUlpTCxFQUFFLENBQUNNLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYU4sRUFBRSxDQUFDTyxFQUFFLEdBQUcsQ0FBTixDQUFwQjs7WUFFQSxPQUFPaGQsQ0FBQyxHQUFHNkksQ0FBWCxFQUFjN0ksQ0FBQyxFQUFmO2NBQ0l3UixDQUFDLElBQUlpTCxFQUFFLENBQUNNLEVBQUUsR0FBRy9jLENBQU4sQ0FBRixHQUFheWMsRUFBRSxDQUFDTyxFQUFFLEdBQUdoZCxDQUFOLENBQXBCO1lBREo7O1lBR0EsSUFBSVksSUFBSSxDQUFDMEMsR0FBTCxDQUFTa08sQ0FBVCxLQUFlbUssR0FBRyxHQUFHL2EsSUFBSSxDQUFDZ0YsSUFBTCxDQUFVdkQsQ0FBQyxHQUFHQyxDQUFkLENBQXpCLEVBQTJDO1lBRTNDa1AsQ0FBQyxJQUFJLEdBQUw7WUFDQS9PLElBQUksR0FBR0osQ0FBQyxHQUFHQyxDQUFYLEVBQWNnYixLQUFLLEdBQUc5WiwyREFBSyxDQUFDZ08sQ0FBRCxFQUFJL08sSUFBSixDQUEzQjs7WUFDQSxJQUFJQSxJQUFJLEdBQUcsQ0FBWCxFQUFjO2NBQ1Y4YSxLQUFLLEdBQUcsQ0FBQ0QsS0FBSyxHQUFHN2EsSUFBVCxJQUFpQixHQUF6QjtjQUNBNk8sQ0FBQyxHQUFHMVEsSUFBSSxDQUFDZ0YsSUFBTCxDQUFVMlgsS0FBSyxHQUFHRCxLQUFsQixDQUFKO2NBQ0FuTixDQUFDLEdBQUlxQixDQUFDLElBQUk4TCxLQUFLLEdBQUdoTSxDQUFSLEdBQVksR0FBaEIsQ0FBTjtZQUNILENBSkQsTUFJTztjQUNIbkIsQ0FBQyxHQUFHdlAsSUFBSSxDQUFDZ0YsSUFBTCxDQUFVLENBQUMwWCxLQUFLLEdBQUc3YSxJQUFULEtBQWtCNmEsS0FBSyxHQUFHLEdBQTFCLENBQVYsQ0FBSjtjQUNBaE0sQ0FBQyxHQUFJRSxDQUFDLElBQUk4TCxLQUFLLEdBQUduTixDQUFSLEdBQVksR0FBaEIsQ0FBTjtZQUNIOztZQUVEOU4sQ0FBQyxHQUFHLEdBQUosRUFBU0MsQ0FBQyxHQUFHLEdBQWI7WUFFQXRDLENBQUMsR0FBRyxDQUFKO1lBQ0FvZCxFQUFFLEdBQUdqTixDQUFDLEdBQUdzTSxFQUFFLENBQUNNLEVBQUQsQ0FBTixHQUFhekwsQ0FBQyxHQUFHbUwsRUFBRSxDQUFDTyxFQUFELENBQXhCO1lBQ0F2RyxFQUFFLEdBQUcsQ0FBQ25GLENBQUQsR0FBS21MLEVBQUUsQ0FBQ00sRUFBRCxDQUFQLEdBQWM1TSxDQUFDLEdBQUdzTSxFQUFFLENBQUNPLEVBQUQsQ0FBekI7WUFDQVAsRUFBRSxDQUFDTSxFQUFELENBQUYsR0FBU0ssRUFBVDtZQUFhWCxFQUFFLENBQUNPLEVBQUQsQ0FBRixHQUFTdkcsRUFBVDtZQUNicFUsQ0FBQyxJQUFJK2EsRUFBRSxHQUFHQSxFQUFWO1lBQWM5YSxDQUFDLElBQUltVSxFQUFFLEdBQUdBLEVBQVY7WUFFZDJHLEVBQUUsR0FBR2pOLENBQUMsR0FBR3NNLEVBQUUsQ0FBQ00sRUFBRSxHQUFHLENBQU4sQ0FBTixHQUFpQnpMLENBQUMsR0FBR21MLEVBQUUsQ0FBQ08sRUFBRSxHQUFHLENBQU4sQ0FBNUI7WUFDQXZHLEVBQUUsR0FBRyxDQUFDbkYsQ0FBRCxHQUFLbUwsRUFBRSxDQUFDTSxFQUFFLEdBQUcsQ0FBTixDQUFQLEdBQWtCNU0sQ0FBQyxHQUFHc00sRUFBRSxDQUFDTyxFQUFFLEdBQUcsQ0FBTixDQUE3QjtZQUNBUCxFQUFFLENBQUNNLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYUssRUFBYjtZQUFpQlgsRUFBRSxDQUFDTyxFQUFFLEdBQUcsQ0FBTixDQUFGLEdBQWF2RyxFQUFiO1lBQ2pCcFUsQ0FBQyxJQUFJK2EsRUFBRSxHQUFHQSxFQUFWO1lBQWM5YSxDQUFDLElBQUltVSxFQUFFLEdBQUdBLEVBQVY7O1lBRWQsT0FBT3pXLENBQUMsR0FBRzZJLENBQVgsRUFBYzdJLENBQUMsRUFBZixFQUFtQjtjQUNmb2QsRUFBRSxHQUFHak4sQ0FBQyxHQUFHc00sRUFBRSxDQUFDTSxFQUFFLEdBQUcvYyxDQUFOLENBQU4sR0FBaUJzUixDQUFDLEdBQUdtTCxFQUFFLENBQUNPLEVBQUUsR0FBR2hkLENBQU4sQ0FBNUI7Y0FDQXlXLEVBQUUsR0FBRyxDQUFDbkYsQ0FBRCxHQUFLbUwsRUFBRSxDQUFDTSxFQUFFLEdBQUcvYyxDQUFOLENBQVAsR0FBa0JtUSxDQUFDLEdBQUdzTSxFQUFFLENBQUNPLEVBQUUsR0FBR2hkLENBQU4sQ0FBN0I7Y0FDQXljLEVBQUUsQ0FBQ00sRUFBRSxHQUFHL2MsQ0FBTixDQUFGLEdBQWFvZCxFQUFiO2NBQWlCWCxFQUFFLENBQUNPLEVBQUUsR0FBR2hkLENBQU4sQ0FBRixHQUFheVcsRUFBYjtjQUVqQnBVLENBQUMsSUFBSSthLEVBQUUsR0FBR0EsRUFBVjtjQUFjOWEsQ0FBQyxJQUFJbVUsRUFBRSxHQUFHQSxFQUFWO1lBQ2pCOztZQUVEK0UsQ0FBQyxDQUFDdGUsQ0FBRCxDQUFELEdBQU9tRixDQUFQO1lBQVVtWixDQUFDLENBQUN6YixDQUFELENBQUQsR0FBT3VDLENBQVA7WUFFVjZhLE9BQU8sR0FBRyxDQUFWOztZQUVBLElBQUlSLEVBQUosRUFBUTtjQUNKTSxFQUFFLEdBQUkvZixDQUFDLEdBQUd3ZSxLQUFMLEdBQWMsQ0FBbkIsRUFBc0J3QixFQUFFLEdBQUluZCxDQUFDLEdBQUcyYixLQUFMLEdBQWMsQ0FBekM7Y0FFQTFiLENBQUMsR0FBRyxDQUFKO2NBQ0FvZCxFQUFFLEdBQUdqTixDQUFDLEdBQUd3TSxFQUFFLENBQUNNLEVBQUQsQ0FBTixHQUFhM0wsQ0FBQyxHQUFHcUwsRUFBRSxDQUFDTyxFQUFELENBQXhCO2NBQ0F6RyxFQUFFLEdBQUcsQ0FBQ25GLENBQUQsR0FBS3FMLEVBQUUsQ0FBQ00sRUFBRCxDQUFQLEdBQWM5TSxDQUFDLEdBQUd3TSxFQUFFLENBQUNPLEVBQUQsQ0FBekI7Y0FDQVAsRUFBRSxDQUFDTSxFQUFELENBQUYsR0FBU0csRUFBVDtjQUFhVCxFQUFFLENBQUNPLEVBQUQsQ0FBRixHQUFTekcsRUFBVDtjQUViMkcsRUFBRSxHQUFHak4sQ0FBQyxHQUFHd00sRUFBRSxDQUFDTSxFQUFFLEdBQUcsQ0FBTixDQUFOLEdBQWlCM0wsQ0FBQyxHQUFHcUwsRUFBRSxDQUFDTyxFQUFFLEdBQUcsQ0FBTixDQUE1QjtjQUNBekcsRUFBRSxHQUFHLENBQUNuRixDQUFELEdBQUtxTCxFQUFFLENBQUNNLEVBQUUsR0FBRyxDQUFOLENBQVAsR0FBa0I5TSxDQUFDLEdBQUd3TSxFQUFFLENBQUNPLEVBQUUsR0FBRyxDQUFOLENBQTdCO2NBQ0FQLEVBQUUsQ0FBQ00sRUFBRSxHQUFHLENBQU4sQ0FBRixHQUFhRyxFQUFiO2NBQWlCVCxFQUFFLENBQUNPLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYXpHLEVBQWI7O2NBRWpCLE9BQU96VyxDQUFDLEdBQUd5TyxDQUFYLEVBQWN6TyxDQUFDLEVBQWYsRUFBbUI7Z0JBQ2ZvZCxFQUFFLEdBQUdqTixDQUFDLEdBQUd3TSxFQUFFLENBQUNNLEVBQUUsR0FBR2pkLENBQU4sQ0FBTixHQUFpQnNSLENBQUMsR0FBR3FMLEVBQUUsQ0FBQ08sRUFBRSxHQUFHbGQsQ0FBTixDQUE1QjtnQkFDQXlXLEVBQUUsR0FBRyxDQUFDbkYsQ0FBRCxHQUFLcUwsRUFBRSxDQUFDTSxFQUFFLEdBQUdqZCxDQUFOLENBQVAsR0FBa0JtUSxDQUFDLEdBQUd3TSxFQUFFLENBQUNPLEVBQUUsR0FBR2xkLENBQU4sQ0FBN0I7Z0JBQ0EyYyxFQUFFLENBQUNNLEVBQUUsR0FBR2pkLENBQU4sQ0FBRixHQUFhb2QsRUFBYjtnQkFBaUJULEVBQUUsQ0FBQ08sRUFBRSxHQUFHbGQsQ0FBTixDQUFGLEdBQWF5VyxFQUFiO2NBQ3BCO1lBQ0o7VUFDSjtRQUNKOztRQUNELElBQUkwRyxPQUFPLElBQUksQ0FBZixFQUFrQjtNQUNyQjs7TUFFRCxLQUFLamdCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3VSLENBQWhCLEVBQW1CdlIsQ0FBQyxFQUFwQixFQUF3QjtRQUNwQixLQUFLOEMsQ0FBQyxHQUFHLENBQUosRUFBT3FkLEVBQUUsR0FBRyxDQUFqQixFQUFvQnJkLENBQUMsR0FBRzZJLENBQXhCLEVBQTJCN0ksQ0FBQyxFQUE1QixFQUFnQztVQUM1Qm1WLENBQUMsR0FBR3NILEVBQUUsQ0FBQ3ZmLENBQUMsR0FBR3FlLEtBQUosR0FBWXZiLENBQWIsQ0FBTjtVQUNBcWQsRUFBRSxJQUFJbEksQ0FBQyxHQUFHQSxDQUFWO1FBQ0g7O1FBQ0RxRyxDQUFDLENBQUN0ZSxDQUFELENBQUQsR0FBTzBELElBQUksQ0FBQ2dGLElBQUwsQ0FBVXlYLEVBQVYsQ0FBUDtNQUNIOztNQUVELEtBQUtuZ0IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdVIsQ0FBQyxHQUFHLENBQXBCLEVBQXVCdlIsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QjZDLENBQUMsR0FBRzdDLENBQUo7O1FBQ0EsS0FBSzhDLENBQUMsR0FBRzlDLENBQUMsR0FBRyxDQUFiLEVBQWdCOEMsQ0FBQyxHQUFHeU8sQ0FBcEIsRUFBdUJ6TyxDQUFDLEVBQXhCLEVBQTRCO1VBQ3hCLElBQUl3YixDQUFDLENBQUN6YixDQUFELENBQUQsR0FBT3liLENBQUMsQ0FBQ3hiLENBQUQsQ0FBWixFQUNJRCxDQUFDLEdBQUdDLENBQUo7UUFDUDs7UUFDRCxJQUFJOUMsQ0FBQyxJQUFJNkMsQ0FBVCxFQUFZO1VBQ1J3RCwwREFBSSxDQUFDaVksQ0FBRCxFQUFJdGUsQ0FBSixFQUFPNkMsQ0FBUCxFQUFVc2QsRUFBVixDQUFKOztVQUNBLElBQUlWLEVBQUosRUFBUTtZQUNKLEtBQUszYyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc2SSxDQUFoQixFQUFtQjdJLENBQUMsRUFBcEIsRUFBd0I7Y0FDcEJ1RCwwREFBSSxDQUFDa1osRUFBRCxFQUFLdmYsQ0FBQyxHQUFHcWUsS0FBSixHQUFZdmIsQ0FBakIsRUFBb0JELENBQUMsR0FBR3diLEtBQUosR0FBWXZiLENBQWhDLEVBQW1DbVYsQ0FBbkMsQ0FBSjtZQUNIOztZQUVELEtBQUtuVixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd5TyxDQUFoQixFQUFtQnpPLENBQUMsRUFBcEIsRUFBd0I7Y0FDcEJ1RCwwREFBSSxDQUFDb1osRUFBRCxFQUFLemYsQ0FBQyxHQUFHd2UsS0FBSixHQUFZMWIsQ0FBakIsRUFBb0JELENBQUMsR0FBRzJiLEtBQUosR0FBWTFiLENBQWhDLEVBQW1DbVYsQ0FBbkMsQ0FBSjtZQUNIO1VBQ0o7UUFDSjtNQUNKOztNQUVELEtBQUtqWSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd1UixDQUFoQixFQUFtQnZSLENBQUMsRUFBcEIsRUFBd0I7UUFDcEJ3ZixFQUFFLENBQUN4ZixDQUFELENBQUYsR0FBUXNlLENBQUMsQ0FBQ3RlLENBQUQsQ0FBVDtNQUNIOztNQUVELElBQUksQ0FBQ3lmLEVBQUwsRUFBUztRQUNMLEtBQUsvZixLQUFMLENBQVdzRyxVQUFYLENBQXNCeWEsTUFBdEI7UUFDQTtNQUNIOztNQUVELEtBQUt6Z0IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHMGYsRUFBaEIsRUFBb0IxZixDQUFDLEVBQXJCLEVBQXlCO1FBRXJCbWdCLEVBQUUsR0FBR25nQixDQUFDLEdBQUd1UixDQUFKLEdBQVErTSxDQUFDLENBQUN0ZSxDQUFELENBQVQsR0FBZSxDQUFwQjs7UUFFQSxPQUFPbWdCLEVBQUUsSUFBSVIsTUFBYixFQUFxQjtVQUlqQlksSUFBSSxHQUFJLE1BQU01VSxDQUFkOztVQUNBLEtBQUs3SSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc2SSxDQUFoQixFQUFtQjdJLENBQUMsRUFBcEIsRUFBd0I7WUFDcEJ3ZCxJQUFJLEdBQUlBLElBQUksR0FBRyxNQUFQLEdBQWdCLE9BQXhCO1lBQ0F0QixHQUFHLEdBQUcsQ0FBR3NCLElBQUksSUFBSSxFQUFULEdBQWUsTUFBaEIsR0FBMEIsR0FBM0IsS0FBbUMsQ0FBbkMsR0FBdUNDLElBQXZDLEdBQThDLENBQUNBLElBQXJEO1lBQ0FoQixFQUFFLENBQUN2ZixDQUFDLEdBQUdxZSxLQUFKLEdBQVl2YixDQUFiLENBQUYsR0FBb0JrYyxHQUFwQjtVQUNIOztVQUNELEtBQUtZLElBQUksR0FBRyxDQUFaLEVBQWVBLElBQUksR0FBRyxDQUF0QixFQUF5QkEsSUFBSSxFQUE3QixFQUFpQztZQUM3QixLQUFLL2MsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHN0MsQ0FBaEIsRUFBbUI2QyxDQUFDLEVBQXBCLEVBQXdCO2NBQ3BCc2QsRUFBRSxHQUFHLENBQUw7O2NBQ0EsS0FBS3JkLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzZJLENBQWhCLEVBQW1CN0ksQ0FBQyxFQUFwQixFQUF3QjtnQkFDcEJxZCxFQUFFLElBQUlaLEVBQUUsQ0FBQ3ZmLENBQUMsR0FBR3FlLEtBQUosR0FBWXZiLENBQWIsQ0FBRixHQUFvQnljLEVBQUUsQ0FBQzFjLENBQUMsR0FBR3diLEtBQUosR0FBWXZiLENBQWIsQ0FBNUI7Y0FDSDs7Y0FDRDBkLElBQUksR0FBRyxHQUFQOztjQUNBLEtBQUsxZCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc2SSxDQUFoQixFQUFtQjdJLENBQUMsRUFBcEIsRUFBd0I7Z0JBQ3BCbVYsQ0FBQyxHQUFJc0gsRUFBRSxDQUFDdmYsQ0FBQyxHQUFHcWUsS0FBSixHQUFZdmIsQ0FBYixDQUFGLEdBQW9CcWQsRUFBRSxHQUFHWixFQUFFLENBQUMxYyxDQUFDLEdBQUd3YixLQUFKLEdBQVl2YixDQUFiLENBQWhDO2dCQUNBeWMsRUFBRSxDQUFDdmYsQ0FBQyxHQUFHcWUsS0FBSixHQUFZdmIsQ0FBYixDQUFGLEdBQW9CbVYsQ0FBcEI7Z0JBQ0F1SSxJQUFJLElBQUk5YyxJQUFJLENBQUMwQyxHQUFMLENBQVM2UixDQUFULENBQVI7Y0FDSDs7Y0FDRHVJLElBQUksR0FBR0EsSUFBSSxHQUFHLE1BQU1BLElBQVQsR0FBZ0IsQ0FBM0I7O2NBQ0EsS0FBSzFkLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzZJLENBQWhCLEVBQW1CN0ksQ0FBQyxFQUFwQixFQUF3QjtnQkFDcEJ5YyxFQUFFLENBQUN2ZixDQUFDLEdBQUdxZSxLQUFKLEdBQVl2YixDQUFiLENBQUYsSUFBcUIwZCxJQUFyQjtjQUNIO1lBQ0o7VUFDSjs7VUFDREwsRUFBRSxHQUFHLENBQUw7O1VBQ0EsS0FBS3JkLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzZJLENBQWhCLEVBQW1CN0ksQ0FBQyxFQUFwQixFQUF3QjtZQUNwQm1WLENBQUMsR0FBR3NILEVBQUUsQ0FBQ3ZmLENBQUMsR0FBR3FlLEtBQUosR0FBWXZiLENBQWIsQ0FBTjtZQUNBcWQsRUFBRSxJQUFJbEksQ0FBQyxHQUFHQSxDQUFWO1VBQ0g7O1VBQ0RrSSxFQUFFLEdBQUd6YyxJQUFJLENBQUNnRixJQUFMLENBQVV5WCxFQUFWLENBQUw7UUFDSDs7UUFFRC9MLENBQUMsR0FBSSxNQUFNK0wsRUFBWDs7UUFDQSxLQUFLcmQsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHNkksQ0FBaEIsRUFBbUI3SSxDQUFDLEVBQXBCLEVBQXdCO1VBQ3BCeWMsRUFBRSxDQUFDdmYsQ0FBQyxHQUFHcWUsS0FBSixHQUFZdmIsQ0FBYixDQUFGLElBQXFCc1IsQ0FBckI7UUFDSDtNQUNKOztNQUVELEtBQUsxVSxLQUFMLENBQVdzRyxVQUFYLENBQXNCeWEsTUFBdEI7SUFDSDtFQTVWTDtJQUFBO0lBQUEsT0E4Vkksa0JBQVNyQyxDQUFULEVBQXNDdUMsQ0FBdEMsRUFBc0Q7TUFDbEQsSUFBSTNnQixDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVc2QyxDQUFDLEdBQUcsQ0FBZjtNQUFBLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEI7TUFBQSxJQUF5QndSLENBQUMsR0FBRyxDQUE3QjtNQUFBLElBQWdDK0osS0FBSyxHQUFHRCxDQUFDLENBQUMvWixJQUExQztNQUNBLElBQUk2RixFQUFFLEdBQUdrVSxDQUFDLENBQUM3WixJQUFYO01BQUEsSUFBaUI0RixFQUFFLEdBQUd3VyxDQUFDLENBQUNwYyxJQUF4QjtNQUNBLElBQUkwVCxDQUFKLEVBQU8zUyxLQUFQLEVBQWM0TixDQUFkLEVBQWlCa0IsQ0FBakI7O01BRUEsS0FBS3BVLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3FlLEtBQWhCLEVBQXVCcmUsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QjhDLENBQUMsR0FBRzlDLENBQUo7O1FBQ0EsS0FBSzZDLENBQUMsR0FBRzdDLENBQUMsR0FBRyxDQUFiLEVBQWdCNkMsQ0FBQyxHQUFHd2IsS0FBcEIsRUFBMkJ4YixDQUFDLEVBQTVCLEVBQWdDO1VBQzVCLElBQUlhLElBQUksQ0FBQzBDLEdBQUwsQ0FBUzhELEVBQUUsQ0FBQ3JILENBQUMsR0FBR3diLEtBQUosR0FBWXJlLENBQWIsQ0FBWCxJQUE4QjBELElBQUksQ0FBQzBDLEdBQUwsQ0FBUzhELEVBQUUsQ0FBQ3BILENBQUMsR0FBR3ViLEtBQUosR0FBWXJlLENBQWIsQ0FBWCxDQUFsQyxFQUErRDtZQUMzRDhDLENBQUMsR0FBR0QsQ0FBSjtVQUNIO1FBQ0o7O1FBRUQsSUFBSWEsSUFBSSxDQUFDMEMsR0FBTCxDQUFTOEQsRUFBRSxDQUFDcEgsQ0FBQyxHQUFHdWIsS0FBSixHQUFZcmUsQ0FBYixDQUFYLElBQThCTSwyRUFBbEMsRUFBNEQ7VUFDeEQsT0FBTyxDQUFQO1FBQ0g7O1FBRUQsSUFBSXdDLENBQUMsSUFBSTlDLENBQVQsRUFBWTtVQUNSLEtBQUs2QyxDQUFDLEdBQUc3QyxDQUFULEVBQVk2QyxDQUFDLEdBQUd3YixLQUFoQixFQUF1QnhiLENBQUMsRUFBeEIsRUFBNEI7WUFDeEJ3RCwwREFBSSxDQUFDNkQsRUFBRCxFQUFLbEssQ0FBQyxHQUFHcWUsS0FBSixHQUFZeGIsQ0FBakIsRUFBb0JDLENBQUMsR0FBR3ViLEtBQUosR0FBWXhiLENBQWhDLEVBQW1Db1YsQ0FBbkMsQ0FBSjtVQUNIOztVQUVENVIsMERBQUksQ0FBQzhELEVBQUQsRUFBS25LLENBQUwsRUFBUThDLENBQVIsRUFBV21WLENBQVgsQ0FBSjtVQUNBM0QsQ0FBQyxHQUFHLENBQUNBLENBQUw7UUFDSDs7UUFFRHBCLENBQUMsR0FBRyxDQUFDLEdBQUQsR0FBT2hKLEVBQUUsQ0FBQ2xLLENBQUMsR0FBR3FlLEtBQUosR0FBWXJlLENBQWIsQ0FBYjs7UUFFQSxLQUFLNkMsQ0FBQyxHQUFHN0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0I2QyxDQUFDLEdBQUd3YixLQUFwQixFQUEyQnhiLENBQUMsRUFBNUIsRUFBZ0M7VUFDNUJ5QyxLQUFLLEdBQUc0RSxFQUFFLENBQUNySCxDQUFDLEdBQUd3YixLQUFKLEdBQVlyZSxDQUFiLENBQUYsR0FBb0JrVCxDQUE1Qjs7VUFFQSxLQUFLcFEsQ0FBQyxHQUFHOUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0I4QyxDQUFDLEdBQUd1YixLQUFwQixFQUEyQnZiLENBQUMsRUFBNUIsRUFBZ0M7WUFDNUJvSCxFQUFFLENBQUNySCxDQUFDLEdBQUd3YixLQUFKLEdBQVl2YixDQUFiLENBQUYsSUFBcUJ3QyxLQUFLLEdBQUc0RSxFQUFFLENBQUNsSyxDQUFDLEdBQUdxZSxLQUFKLEdBQVl2YixDQUFiLENBQS9CO1VBQ0g7O1VBRURxSCxFQUFFLENBQUN0SCxDQUFELENBQUYsSUFBU3lDLEtBQUssR0FBRzZFLEVBQUUsQ0FBQ25LLENBQUQsQ0FBbkI7UUFDSDs7UUFFRGtLLEVBQUUsQ0FBQ2xLLENBQUMsR0FBR3FlLEtBQUosR0FBWXJlLENBQWIsQ0FBRixHQUFvQixDQUFDa1QsQ0FBckI7TUFDSDs7TUFFRCxLQUFLbFQsQ0FBQyxHQUFHcWUsS0FBSyxHQUFHLENBQWpCLEVBQW9CcmUsQ0FBQyxJQUFJLENBQXpCLEVBQTRCQSxDQUFDLEVBQTdCLEVBQWlDO1FBQzdCb1UsQ0FBQyxHQUFHakssRUFBRSxDQUFDbkssQ0FBRCxDQUFOOztRQUNBLEtBQUs4QyxDQUFDLEdBQUc5QyxDQUFDLEdBQUcsQ0FBYixFQUFnQjhDLENBQUMsR0FBR3ViLEtBQXBCLEVBQTJCdmIsQ0FBQyxFQUE1QixFQUFnQztVQUM1QnNSLENBQUMsSUFBSWxLLEVBQUUsQ0FBQ2xLLENBQUMsR0FBR3FlLEtBQUosR0FBWXZiLENBQWIsQ0FBRixHQUFvQnFILEVBQUUsQ0FBQ3JILENBQUQsQ0FBM0I7UUFDSDs7UUFDRHFILEVBQUUsQ0FBQ25LLENBQUQsQ0FBRixHQUFRb1UsQ0FBQyxHQUFHbEssRUFBRSxDQUFDbEssQ0FBQyxHQUFHcWUsS0FBSixHQUFZcmUsQ0FBYixDQUFkO01BQ0g7O01BRUQsT0FBTyxDQUFQO0lBQ0g7RUFoWkw7SUFBQTtJQUFBLE9Ba1pJLHdCQUFlb2UsQ0FBZixFQUE0Q3VDLENBQTVDLEVBQTREO01BQ3hELElBQUlDLEdBQUcsR0FBRyxDQUFWO01BQUEsSUFBYUMsR0FBRyxHQUFHLENBQW5CO01BQUEsSUFBc0JDLElBQUksR0FBRyxDQUE3QjtNQUFBLElBQWdDQyxFQUFFLEdBQUcsQ0FBckM7TUFBQSxJQUF3Q0MsRUFBRSxHQUFHLENBQTdDO01BQUEsSUFBZ0RoaEIsQ0FBQyxHQUFHLENBQXBEO01BQUEsSUFBdUQ2QyxDQUFDLEdBQUcsQ0FBM0Q7TUFDQSxJQUFJekMsSUFBSSxHQUFHZ2UsQ0FBQyxDQUFDL1osSUFBYjtNQUNBLElBQUk2RixFQUFFLEdBQUdrVSxDQUFDLENBQUM3WixJQUFYO01BQUEsSUFBaUI0RixFQUFFLEdBQUd3VyxDQUFDLENBQUNwYyxJQUF4QjtNQUNBLElBQUl5YSxHQUFKLEVBQVNpQyxRQUFUOztNQUVBLEtBQUtMLEdBQUcsR0FBRyxDQUFYLEVBQWNBLEdBQUcsR0FBR3hnQixJQUFwQixFQUEwQndnQixHQUFHLEVBQTdCLEVBQWlDO1FBQzdCSyxRQUFRLEdBQUcsR0FBWDtRQUNBRixFQUFFLEdBQUlILEdBQUcsR0FBR3hnQixJQUFaO1FBQ0E0Z0IsRUFBRSxHQUFHRCxFQUFMOztRQUNBLEtBQUtGLEdBQUcsR0FBR0QsR0FBWCxFQUFnQkMsR0FBRyxHQUFHemdCLElBQXRCLEVBQTRCeWdCLEdBQUcsRUFBL0IsRUFBbUM7VUFFL0I3QixHQUFHLEdBQUc5VSxFQUFFLENBQUU4VyxFQUFFLEdBQUdKLEdBQVAsQ0FBUjs7VUFDQSxLQUFLRSxJQUFJLEdBQUcsQ0FBWixFQUFlQSxJQUFJLEdBQUdGLEdBQXRCLEVBQTJCRSxJQUFJLEVBQS9CLEVBQW1DO1lBQy9COUIsR0FBRyxJQUFJOVUsRUFBRSxDQUFFNFcsSUFBSSxHQUFHMWdCLElBQVAsR0FBY3dnQixHQUFoQixDQUFGLEdBQTBCMVcsRUFBRSxDQUFFOFcsRUFBRSxHQUFHRixJQUFQLENBQW5DO1VBQ0g7O1VBQ0QsSUFBSUQsR0FBRyxJQUFJRCxHQUFYLEVBQWdCO1lBRVoxVyxFQUFFLENBQUU4VyxFQUFFLEdBQUdKLEdBQVAsQ0FBRixHQUFpQjVCLEdBQWpCOztZQUNBLElBQUlBLEdBQUcsSUFBSSxDQUFYLEVBQWM7Y0FDVixPQUFPLENBQVA7WUFDSDs7WUFDRGlDLFFBQVEsR0FBRyxNQUFNakMsR0FBakI7VUFDSCxDQVBELE1BT087WUFFSDlVLEVBQUUsQ0FBRTZXLEVBQUUsR0FBR0YsR0FBUCxDQUFGLEdBQWlCN0IsR0FBakI7WUFFQTlVLEVBQUUsQ0FBRThXLEVBQUUsR0FBR0osR0FBUCxDQUFGLEdBQWlCNUIsR0FBRyxHQUFHaUMsUUFBdkI7VUFDSDs7VUFDREQsRUFBRSxHQUFJQSxFQUFFLEdBQUc1Z0IsSUFBWDtRQUNIO01BQ0o7O01BR0QyZ0IsRUFBRSxHQUFHLENBQUw7O01BQ0EsS0FBSy9nQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdJLElBQWhCLEVBQXNCSixDQUFDLEVBQXZCLEVBQTJCO1FBQ3ZCZ2YsR0FBRyxHQUFHN1UsRUFBRSxDQUFDbkssQ0FBRCxDQUFSOztRQUNBLEtBQUs2QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc3QyxDQUFoQixFQUFtQjZDLENBQUMsRUFBcEIsRUFBd0I7VUFDcEJtYyxHQUFHLElBQUk5VSxFQUFFLENBQUU2VyxFQUFFLEdBQUdsZSxDQUFQLENBQUYsR0FBZXNILEVBQUUsQ0FBQ3RILENBQUQsQ0FBeEI7UUFDSDs7UUFDRHNILEVBQUUsQ0FBQ25LLENBQUQsQ0FBRixHQUFRZ2YsR0FBUjtRQUNBK0IsRUFBRSxHQUFJQSxFQUFFLEdBQUczZ0IsSUFBWDtNQUNIOztNQUVEMmdCLEVBQUUsR0FBRyxDQUFMOztNQUNBLEtBQUsvZ0IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSSxJQUFoQixFQUFzQkosQ0FBQyxFQUF2QixFQUEyQjtRQUN2Qm1LLEVBQUUsQ0FBQ25LLENBQUQsQ0FBRixJQUFTa0ssRUFBRSxDQUFFNlcsRUFBRSxHQUFHL2dCLENBQVAsQ0FBWDtRQUNBK2dCLEVBQUUsR0FBSUEsRUFBRSxHQUFHM2dCLElBQVg7TUFDSDs7TUFFREosQ0FBQyxHQUFJSSxJQUFJLEdBQUcsQ0FBWjs7TUFDQSxPQUFPSixDQUFDLElBQUksQ0FBWixFQUFlQSxDQUFDLEVBQWhCLEVBQW9CO1FBQ2hCZ2YsR0FBRyxHQUFHN1UsRUFBRSxDQUFDbkssQ0FBRCxDQUFSO1FBQ0E2QyxDQUFDLEdBQUk3QyxDQUFDLEdBQUcsQ0FBVDtRQUNBK2dCLEVBQUUsR0FBSWxlLENBQUMsR0FBR3pDLElBQVY7O1FBQ0EsT0FBT3lDLENBQUMsR0FBR3pDLElBQVgsRUFBaUJ5QyxDQUFDLEVBQWxCLEVBQXNCO1VBQ2xCbWMsR0FBRyxJQUFJOVUsRUFBRSxDQUFFNlcsRUFBRSxHQUFHL2dCLENBQVAsQ0FBRixHQUFlbUssRUFBRSxDQUFDdEgsQ0FBRCxDQUF4QjtVQUNBa2UsRUFBRSxHQUFJQSxFQUFFLEdBQUczZ0IsSUFBWDtRQUNIOztRQUNEK0osRUFBRSxDQUFDbkssQ0FBRCxDQUFGLEdBQVFnZixHQUFSO01BQ0g7O01BRUQsT0FBTyxDQUFQO0lBQ0g7RUFqZEw7SUFBQTtJQUFBLE9BbWRJLHVCQUFjWixDQUFkLEVBQXNCRSxDQUF0QixFQUFtQzRDLENBQW5DLEVBQWdEM0MsQ0FBaEQsRUFBNkR4UCxPQUE3RCxFQUE0RTtNQUN4RSxJQUFJLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7UUFBRUEsT0FBTyxHQUFHLENBQVY7TUFBYzs7TUFBQTtNQUNwRCxJQUFJb1MsRUFBRSxHQUFHLENBQVQ7TUFBQSxJQUFZbmhCLENBQUMsR0FBRyxDQUFoQjtNQUFBLElBQW1CNkMsQ0FBQyxHQUFHLENBQXZCO01BQUEsSUFBMEJ1ZSxFQUFFLEdBQUdoRCxDQUFDLENBQUM5WixJQUFqQztNQUFBLElBQXVDK2MsRUFBRSxHQUFHakQsQ0FBQyxDQUFDL1osSUFBOUM7TUFBQSxJQUFvRHNILENBQUMsR0FBR3lWLEVBQXhEO01BQUEsSUFBNEQ3UCxDQUFDLEdBQUc4UCxFQUFoRTtNQUNBLElBQUluYSxFQUFFLEdBQUdrWCxDQUFDLENBQUNqYyxJQUFGLEdBQVM3Qix3RUFBbEI7O01BRUEsSUFBSXFMLENBQUMsR0FBRzRGLENBQVIsRUFBVztRQUNQNFAsRUFBRSxHQUFHLENBQUw7UUFDQW5oQixDQUFDLEdBQUcyTCxDQUFKO1FBQ0FBLENBQUMsR0FBRzRGLENBQUo7UUFDQUEsQ0FBQyxHQUFHdlIsQ0FBSjtNQUNIOztNQUVELElBQUk4SixNQUFNLEdBQUcsS0FBS3BLLEtBQUwsQ0FBV2dHLFVBQVgsQ0FBdUJpRyxDQUFDLEdBQUdBLENBQUwsSUFBVyxDQUFqQyxDQUFiO01BQ0EsSUFBSTJWLE1BQU0sR0FBRyxLQUFLNWhCLEtBQUwsQ0FBV2dHLFVBQVgsQ0FBc0I2TCxDQUFDLElBQUksQ0FBM0IsQ0FBYjtNQUNBLElBQUlnUSxNQUFNLEdBQUcsS0FBSzdoQixLQUFMLENBQVdnRyxVQUFYLENBQXVCNkwsQ0FBQyxHQUFHQSxDQUFMLElBQVcsQ0FBakMsQ0FBYjtNQUVBLElBQUl2SCxJQUFJLEdBQUcsSUFBSXhELHlEQUFKLENBQWFtRixDQUFiLEVBQWdCQSxDQUFoQixFQUFtQnpFLEVBQW5CLEVBQXVCNEMsTUFBTSxDQUFDdkYsSUFBOUIsQ0FBWDtNQUNBLElBQUlpZCxJQUFJLEdBQUcsSUFBSWhiLHlEQUFKLENBQWEsQ0FBYixFQUFnQitLLENBQWhCLEVBQW1CckssRUFBbkIsRUFBdUJvYSxNQUFNLENBQUMvYyxJQUE5QixDQUFYO01BQ0EsSUFBSWtkLElBQUksR0FBRyxJQUFJamIseURBQUosQ0FBYStLLENBQWIsRUFBZ0JBLENBQWhCLEVBQW1CckssRUFBbkIsRUFBdUJxYSxNQUFNLENBQUNoZCxJQUE5QixDQUFYOztNQUVBLElBQUk0YyxFQUFFLElBQUksQ0FBVixFQUFhO1FBRVQsS0FBSzVhLE9BQUwsQ0FBYW1iLFNBQWIsQ0FBdUIxWCxJQUF2QixFQUE2Qm9VLENBQTdCO01BQ0gsQ0FIRCxNQUdPO1FBQ0gsS0FBS3BlLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3FoQixFQUFFLEdBQUdELEVBQXJCLEVBQXlCcGhCLENBQUMsRUFBMUIsRUFBOEI7VUFDMUJnSyxJQUFJLENBQUN6RixJQUFMLENBQVV2RSxDQUFWLElBQWVvZSxDQUFDLENBQUM3WixJQUFGLENBQU92RSxDQUFQLENBQWY7UUFDSDs7UUFDRCxPQUFPQSxDQUFDLEdBQUd1UixDQUFDLEdBQUc1RixDQUFmLEVBQWtCM0wsQ0FBQyxFQUFuQixFQUF1QjtVQUNuQmdLLElBQUksQ0FBQ3pGLElBQUwsQ0FBVXZFLENBQVYsSUFBZSxDQUFmO1FBQ0g7TUFDSjs7TUFFRCxLQUFLMmhCLGFBQUwsQ0FBbUIzWCxJQUFJLENBQUN6RixJQUF4QixFQUE4Qm9ILENBQTlCLEVBQWlDNlYsSUFBSSxDQUFDamQsSUFBdEMsRUFBNENrZCxJQUFJLENBQUNsZCxJQUFqRCxFQUF1RGdOLENBQXZELEVBQTBENUYsQ0FBMUQsRUFBNkQ0RixDQUE3RCxFQUFnRTVGLENBQWhFOztNQUVBLElBQUkyUyxDQUFKLEVBQU87UUFDSCxLQUFLdGUsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdVIsQ0FBaEIsRUFBbUJ2UixDQUFDLEVBQXBCLEVBQXdCO1VBQ3BCc2UsQ0FBQyxDQUFDL1osSUFBRixDQUFPdkUsQ0FBUCxJQUFZd2hCLElBQUksQ0FBQ2pkLElBQUwsQ0FBVXZFLENBQVYsQ0FBWjtRQUNIOztRQUNELE9BQU9BLENBQUMsR0FBR3FoQixFQUFYLEVBQWVyaEIsQ0FBQyxFQUFoQixFQUFvQjtVQUNoQnNlLENBQUMsQ0FBQy9aLElBQUYsQ0FBT3ZFLENBQVAsSUFBWSxDQUFaO1FBQ0g7TUFDSjs7TUFFRCxJQUFJbWhCLEVBQUUsSUFBSSxDQUFWLEVBQWE7UUFDVCxJQUFJRCxDQUFDLElBQUtuUyxPQUFPLEdBQUd6TywyRUFBcEIsRUFBK0M7VUFDM0NOLENBQUMsR0FBRzJMLENBQUMsR0FBR0EsQ0FBUjs7VUFDQSxPQUFPLEVBQUUzTCxDQUFGLElBQU8sQ0FBZCxFQUFpQjtZQUNia2hCLENBQUMsQ0FBQzNjLElBQUYsQ0FBT3ZFLENBQVAsSUFBWWdLLElBQUksQ0FBQ3pGLElBQUwsQ0FBVXZFLENBQVYsQ0FBWjtVQUNIO1FBQ0osQ0FMRCxNQUtPLElBQUlraEIsQ0FBSixFQUFPO1VBQ1YsS0FBSzNhLE9BQUwsQ0FBYW1iLFNBQWIsQ0FBdUJSLENBQXZCLEVBQTBCbFgsSUFBMUI7UUFDSDs7UUFFRCxJQUFJdVUsQ0FBQyxJQUFLeFAsT0FBTyxHQUFHek8sMkVBQXBCLEVBQStDO1VBQzNDTixDQUFDLEdBQUd1UixDQUFDLEdBQUdBLENBQVI7O1VBQ0EsT0FBTyxFQUFFdlIsQ0FBRixJQUFPLENBQWQsRUFBaUI7WUFDYnVlLENBQUMsQ0FBQ2hhLElBQUYsQ0FBT3ZFLENBQVAsSUFBWXloQixJQUFJLENBQUNsZCxJQUFMLENBQVV2RSxDQUFWLENBQVo7VUFDSDtRQUNKLENBTEQsTUFLTyxJQUFJdWUsQ0FBSixFQUFPO1VBQ1YsS0FBS2hZLE9BQUwsQ0FBYW1iLFNBQWIsQ0FBdUJuRCxDQUF2QixFQUEwQmtELElBQTFCO1FBQ0g7TUFDSixDQWxCRCxNQWtCTztRQUNILElBQUlQLENBQUMsSUFBS25TLE9BQU8sR0FBR3pPLDJFQUFwQixFQUErQztVQUMzQ04sQ0FBQyxHQUFHdVIsQ0FBQyxHQUFHQSxDQUFSOztVQUNBLE9BQU8sRUFBRXZSLENBQUYsSUFBTyxDQUFkLEVBQWlCO1lBQ2JraEIsQ0FBQyxDQUFDM2MsSUFBRixDQUFPdkUsQ0FBUCxJQUFZeWhCLElBQUksQ0FBQ2xkLElBQUwsQ0FBVXZFLENBQVYsQ0FBWjtVQUNIO1FBQ0osQ0FMRCxNQUtPLElBQUlraEIsQ0FBSixFQUFPO1VBQ1YsS0FBSzNhLE9BQUwsQ0FBYW1iLFNBQWIsQ0FBdUJSLENBQXZCLEVBQTBCTyxJQUExQjtRQUNIOztRQUVELElBQUlsRCxDQUFDLElBQUt4UCxPQUFPLEdBQUd6TywyRUFBcEIsRUFBK0M7VUFDM0NOLENBQUMsR0FBRzJMLENBQUMsR0FBR0EsQ0FBUjs7VUFDQSxPQUFPLEVBQUUzTCxDQUFGLElBQU8sQ0FBZCxFQUFpQjtZQUNidWUsQ0FBQyxDQUFDaGEsSUFBRixDQUFPdkUsQ0FBUCxJQUFZZ0ssSUFBSSxDQUFDekYsSUFBTCxDQUFVdkUsQ0FBVixDQUFaO1VBQ0g7UUFDSixDQUxELE1BS08sSUFBSXVlLENBQUosRUFBTztVQUNWLEtBQUtoWSxPQUFMLENBQWFtYixTQUFiLENBQXVCbkQsQ0FBdkIsRUFBMEJ2VSxJQUExQjtRQUNIO01BQ0o7O01BRUQsS0FBS3RLLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0I4RCxNQUF0QjtNQUNBLEtBQUtwSyxLQUFMLENBQVdzRyxVQUFYLENBQXNCc2IsTUFBdEI7TUFDQSxLQUFLNWhCLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0J1YixNQUF0QjtJQUVIO0VBeGlCTDtJQUFBO0lBQUEsT0EwaUJJLG1CQUFVbkQsQ0FBVixFQUFxRHRULENBQXJELEVBQTRFNlYsQ0FBNUUsRUFBNEY7TUFDeEYsSUFBSTNnQixDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVc2QyxDQUFDLEdBQUcsQ0FBZjtNQUFBLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEI7TUFDQSxJQUFJOGUsRUFBRSxHQUFHLENBQVQ7TUFBQSxJQUFZQyxFQUFFLEdBQUcsQ0FBakI7TUFDQSxJQUFJQyxLQUFLLEdBQUcxRCxDQUFDLENBQUM5WixJQUFkO01BQUEsSUFBb0J5ZCxLQUFLLEdBQUczRCxDQUFDLENBQUMvWixJQUE5QjtNQUNBLElBQUlwQixHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWUrZSxJQUFJLEdBQUcsR0FBdEI7TUFBQSxJQUEyQkMsR0FBRyxHQUFHLEdBQWpDO01BQ0EsSUFBSS9hLEVBQUUsR0FBR2tYLENBQUMsQ0FBQ2pjLElBQUYsR0FBUzdCLHdFQUFsQjtNQUVBLElBQUk0aEIsTUFBTSxHQUFHLEtBQUt4aUIsS0FBTCxDQUFXZ0csVUFBWCxDQUF1Qm9jLEtBQUssR0FBR0EsS0FBVCxJQUFtQixDQUF6QyxDQUFiO01BQ0EsSUFBSVIsTUFBTSxHQUFHLEtBQUs1aEIsS0FBTCxDQUFXZ0csVUFBWCxDQUFzQnFjLEtBQUssSUFBSSxDQUEvQixDQUFiO01BQ0EsSUFBSVIsTUFBTSxHQUFHLEtBQUs3aEIsS0FBTCxDQUFXZ0csVUFBWCxDQUF1QnFjLEtBQUssR0FBR0EsS0FBVCxJQUFtQixDQUF6QyxDQUFiO01BRUEsSUFBSUksSUFBSSxHQUFHLElBQUkzYix5REFBSixDQUFhc2IsS0FBYixFQUFvQkEsS0FBcEIsRUFBMkI1YSxFQUEzQixFQUErQmdiLE1BQU0sQ0FBQzNkLElBQXRDLENBQVg7TUFDQSxJQUFJaWQsSUFBSSxHQUFHLElBQUloYix5REFBSixDQUFhLENBQWIsRUFBZ0J1YixLQUFoQixFQUF1QjdhLEVBQXZCLEVBQTJCb2EsTUFBTSxDQUFDL2MsSUFBbEMsQ0FBWDtNQUNBLElBQUlrZCxJQUFJLEdBQUcsSUFBSWpiLHlEQUFKLENBQWF1YixLQUFiLEVBQW9CQSxLQUFwQixFQUEyQjdhLEVBQTNCLEVBQStCcWEsTUFBTSxDQUFDaGQsSUFBdEMsQ0FBWDtNQUVBLElBQUk0RixFQUFFLEdBQUd3VyxDQUFDLENBQUNwYyxJQUFYO01BQUEsSUFBaUI2ZCxFQUFFLEdBQUdELElBQUksQ0FBQzVkLElBQTNCO01BQUEsSUFBaUM4ZCxFQUFFLEdBQUdiLElBQUksQ0FBQ2pkLElBQTNDO01BQUEsSUFBaUQrZCxFQUFFLEdBQUdiLElBQUksQ0FBQ2xkLElBQTNEO01BRUEsS0FBS2dlLGFBQUwsQ0FBbUJuRSxDQUFuQixFQUFzQm9ELElBQXRCLEVBQTRCVyxJQUE1QixFQUFrQ1YsSUFBbEMsRUFBd0MsQ0FBeEM7TUFFQVEsR0FBRyxHQUFHM2hCLDJFQUFBLEdBQTJCK2hCLEVBQUUsQ0FBQyxDQUFELENBQTdCLEdBQW1DTixLQUF6Qzs7TUFFQSxPQUFPL2hCLENBQUMsR0FBRytoQixLQUFYLEVBQWtCL2hCLENBQUMsSUFBSTZoQixFQUFFLElBQUlFLEtBQTdCLEVBQW9DO1FBQ2hDQyxJQUFJLEdBQUcsR0FBUDs7UUFDQSxLQUFLbmYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHa2YsS0FBaEIsRUFBdUJsZixDQUFDLEVBQXhCLEVBQTRCO1VBQ3hCLElBQUl3ZixFQUFFLENBQUN4ZixDQUFELENBQUYsR0FBUW9mLEdBQVosRUFBaUI7WUFDYixLQUFLbmYsQ0FBQyxHQUFHLENBQUosRUFBT0csR0FBRyxHQUFHLEdBQWIsRUFBa0IyZSxFQUFFLEdBQUcsQ0FBNUIsRUFBK0I5ZSxDQUFDLEdBQUdnZixLQUFuQyxFQUEwQ2hmLENBQUMsSUFBSThlLEVBQUUsSUFBSUcsS0FBckQsRUFBNEQ7Y0FDeEQ5ZSxHQUFHLElBQUltZixFQUFFLENBQUNSLEVBQUUsR0FBRy9lLENBQU4sQ0FBRixHQUFhc0gsRUFBRSxDQUFDckgsQ0FBRCxDQUF0QjtZQUNIOztZQUNEa2YsSUFBSSxJQUFJL2UsR0FBRyxHQUFHcWYsRUFBRSxDQUFDVCxFQUFFLEdBQUdoZixDQUFOLENBQVIsR0FBbUJ3ZixFQUFFLENBQUN4ZixDQUFELENBQTdCO1VBQ0g7UUFDSjs7UUFDRGlJLENBQUMsQ0FBQ3ZHLElBQUYsQ0FBT3ZFLENBQVAsSUFBWWdpQixJQUFaO01BQ0g7O01BRUQsS0FBS3RpQixLQUFMLENBQVdzRyxVQUFYLENBQXNCa2MsTUFBdEI7TUFDQSxLQUFLeGlCLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JzYixNQUF0QjtNQUNBLEtBQUs1aEIsS0FBTCxDQUFXc0csVUFBWCxDQUFzQnViLE1BQXRCO0lBQ0g7RUEva0JMO0lBQUE7SUFBQSxPQWlsQkksb0JBQVcxQixFQUFYLEVBQXlCekIsQ0FBekIsRUFBb0M7TUFDaEMsSUFBSXBlLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZDLENBQUMsR0FBRyxDQUFmO01BQUEsSUFBa0JDLENBQUMsR0FBRyxDQUF0QjtNQUNBLElBQUk4ZSxFQUFFLEdBQUcsQ0FBVDtNQUFBLElBQVlDLEVBQUUsR0FBRyxDQUFqQjtNQUFBLElBQW9CVyxFQUFFLEdBQUcsQ0FBekI7TUFDQSxJQUFJVixLQUFLLEdBQUcxRCxDQUFDLENBQUM5WixJQUFkO01BQUEsSUFBb0J5ZCxLQUFLLEdBQUczRCxDQUFDLENBQUMvWixJQUE5QjtNQUNBLElBQUlwQixHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWVnZixHQUFHLEdBQUcsR0FBckI7TUFDQSxJQUFJL2EsRUFBRSxHQUFHa1gsQ0FBQyxDQUFDamMsSUFBRixHQUFTN0Isd0VBQWxCO01BR0EsSUFBSTRoQixNQUFNLEdBQUcsS0FBS3hpQixLQUFMLENBQVdnRyxVQUFYLENBQXVCb2MsS0FBSyxHQUFHQSxLQUFULElBQW1CLENBQXpDLENBQWI7TUFDQSxJQUFJUixNQUFNLEdBQUcsS0FBSzVoQixLQUFMLENBQVdnRyxVQUFYLENBQXNCcWMsS0FBSyxJQUFJLENBQS9CLENBQWI7TUFDQSxJQUFJUixNQUFNLEdBQUcsS0FBSzdoQixLQUFMLENBQVdnRyxVQUFYLENBQXVCcWMsS0FBSyxHQUFHQSxLQUFULElBQW1CLENBQXpDLENBQWI7TUFDQSxJQUFJSSxJQUFJLEdBQUcsSUFBSTNiLHlEQUFKLENBQWFzYixLQUFiLEVBQW9CQSxLQUFwQixFQUEyQjVhLEVBQTNCLEVBQStCZ2IsTUFBTSxDQUFDM2QsSUFBdEMsQ0FBWDtNQUNBLElBQUlpZCxJQUFJLEdBQUcsSUFBSWhiLHlEQUFKLENBQWEsQ0FBYixFQUFnQnViLEtBQWhCLEVBQXVCN2EsRUFBdkIsRUFBMkJvYSxNQUFNLENBQUMvYyxJQUFsQyxDQUFYO01BQ0EsSUFBSWtkLElBQUksR0FBRyxJQUFJamIseURBQUosQ0FBYXViLEtBQWIsRUFBb0JBLEtBQXBCLEVBQTJCN2EsRUFBM0IsRUFBK0JxYSxNQUFNLENBQUNoZCxJQUF0QyxDQUFYO01BRUEsSUFBSWtlLEVBQUUsR0FBRzVDLEVBQUUsQ0FBQ3RiLElBQVo7TUFBQSxJQUFrQjZkLEVBQUUsR0FBR0QsSUFBSSxDQUFDNWQsSUFBNUI7TUFBQSxJQUFrQzhkLEVBQUUsR0FBR2IsSUFBSSxDQUFDamQsSUFBNUM7TUFBQSxJQUFrRCtkLEVBQUUsR0FBR2IsSUFBSSxDQUFDbGQsSUFBNUQ7TUFFQSxLQUFLZ2UsYUFBTCxDQUFtQm5FLENBQW5CLEVBQXNCb0QsSUFBdEIsRUFBNEJXLElBQTVCLEVBQWtDVixJQUFsQyxFQUF3QyxDQUF4QztNQUVBUSxHQUFHLEdBQUczaEIsMkVBQUEsR0FBMkIraEIsRUFBRSxDQUFDLENBQUQsQ0FBN0IsR0FBbUNOLEtBQXpDOztNQUVBLE9BQU8vaEIsQ0FBQyxHQUFHK2hCLEtBQVgsRUFBa0IvaEIsQ0FBQyxJQUFJNmhCLEVBQUUsSUFBSUUsS0FBN0IsRUFBb0M7UUFDaEMsS0FBS2xmLENBQUMsR0FBRyxDQUFKLEVBQU8rZSxFQUFFLEdBQUcsQ0FBakIsRUFBb0IvZSxDQUFDLEdBQUdpZixLQUF4QixFQUErQmpmLENBQUMsSUFBSTJmLEVBQUUsRUFBdEMsRUFBMEM7VUFDdEMsS0FBSzFmLENBQUMsR0FBRyxDQUFKLEVBQU9HLEdBQUcsR0FBRyxHQUFsQixFQUF1QkgsQ0FBQyxHQUFHaWYsS0FBM0IsRUFBa0NqZixDQUFDLElBQUk4ZSxFQUFFLEVBQXpDLEVBQTZDO1lBQ3pDLElBQUlTLEVBQUUsQ0FBQ3ZmLENBQUQsQ0FBRixHQUFRbWYsR0FBWixFQUFpQmhmLEdBQUcsSUFBSXFmLEVBQUUsQ0FBQ1QsRUFBRSxHQUFHL2UsQ0FBTixDQUFGLEdBQWFzZixFQUFFLENBQUNSLEVBQUQsQ0FBZixHQUFzQlMsRUFBRSxDQUFDdmYsQ0FBRCxDQUEvQjtVQUNwQjs7VUFDRDJmLEVBQUUsQ0FBQ0QsRUFBRCxDQUFGLEdBQVN2ZixHQUFUO1FBQ0g7TUFDSjs7TUFFRCxLQUFLdkQsS0FBTCxDQUFXc0csVUFBWCxDQUFzQmtjLE1BQXRCO01BQ0EsS0FBS3hpQixLQUFMLENBQVdzRyxVQUFYLENBQXNCc2IsTUFBdEI7TUFDQSxLQUFLNWhCLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0J1YixNQUF0QjtJQUNIO0VBbG5CTDtJQUFBO0lBQUEsT0FvbkJJLGlCQUFRbkQsQ0FBUixFQUFxQnNFLEtBQXJCLEVBQXNDQyxJQUF0QyxFQUEyRTtNQUN2RSxJQUFJcFIsQ0FBQyxHQUFHNk0sQ0FBQyxDQUFDL1osSUFBVjtNQUFBLElBQWdCckUsQ0FBQyxHQUFHdVIsQ0FBQyxHQUFHQSxDQUF4QjtNQUNBLElBQUlySyxFQUFFLEdBQUdrWCxDQUFDLENBQUNqYyxJQUFGLEdBQVM3Qix3RUFBbEI7TUFFQSxJQUFJd0osTUFBTSxHQUFHLEtBQUtwSyxLQUFMLENBQVdnRyxVQUFYLENBQXVCNkwsQ0FBQyxHQUFHQSxDQUFMLElBQVcsQ0FBakMsQ0FBYjtNQUNBLElBQUkrUCxNQUFNLEdBQUcsS0FBSzVoQixLQUFMLENBQVdnRyxVQUFYLENBQXNCNkwsQ0FBQyxJQUFJLENBQTNCLENBQWI7TUFDQSxJQUFJdkgsSUFBSSxHQUFHLElBQUl4RCx5REFBSixDQUFhK0ssQ0FBYixFQUFnQkEsQ0FBaEIsRUFBbUJySyxFQUFuQixFQUF1QjRDLE1BQU0sQ0FBQ3ZGLElBQTlCLENBQVg7TUFDQSxJQUFJaWQsSUFBSSxHQUFHLElBQUloYix5REFBSixDQUFhLENBQWIsRUFBZ0IrSyxDQUFoQixFQUFtQnJLLEVBQW5CLEVBQXVCb2EsTUFBTSxDQUFDL2MsSUFBOUIsQ0FBWDs7TUFFQSxPQUFPLEVBQUV2RSxDQUFGLElBQU8sQ0FBZCxFQUFpQjtRQUNiZ0ssSUFBSSxDQUFDekYsSUFBTCxDQUFVdkUsQ0FBVixJQUFlb2UsQ0FBQyxDQUFDN1osSUFBRixDQUFPdkUsQ0FBUCxDQUFmO01BQ0g7O01BRUQsS0FBSzRpQixVQUFMLENBQWdCNVksSUFBSSxDQUFDekYsSUFBckIsRUFBMkJnTixDQUEzQixFQUE4QmlRLElBQUksQ0FBQ2pkLElBQW5DLEVBQXlDbWUsS0FBSyxHQUFHQSxLQUFLLENBQUNuZSxJQUFULEdBQWdCLElBQTlELEVBQW9FZ04sQ0FBcEUsRUFBdUVBLENBQXZFOztNQUVBLElBQUlvUixJQUFKLEVBQVU7UUFDTixPQUFPLEVBQUVwUixDQUFGLElBQU8sQ0FBZCxFQUFpQjtVQUNib1IsSUFBSSxDQUFDcGUsSUFBTCxDQUFVZ04sQ0FBVixJQUFlaVEsSUFBSSxDQUFDamQsSUFBTCxDQUFVZ04sQ0FBVixDQUFmO1FBQ0g7TUFDSjs7TUFFRCxLQUFLN1IsS0FBTCxDQUFXc0csVUFBWCxDQUFzQjhELE1BQXRCO01BQ0EsS0FBS3BLLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JzYixNQUF0QjtJQUNIO0VBM29CTDs7RUFBQTtBQUFBLEVBQXlDcmEsVUFBekM7O0FBOG9CQUEsVUFBVSxDQUFDNGIsR0FBWDtFQUFBOztFQUFBOztFQUtJO0lBQUE7O0lBQUE7O0lBQ0k7O0lBREo7O0lBQUE7O0lBQUE7O0lBQUE7O0lBRUksT0FBS0MsZUFBTCxHQUF1QixJQUFJNWdCLFVBQUosQ0FBZXdFLGdFQUFmLENBQXZCO0lBQ0EsT0FBS3FjLENBQUwsR0FBUyxJQUFJdmMseURBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbEcseUVBQUEsR0FBeUJBLHdFQUE1QyxDQUFUO0lBQ0EsT0FBSzBpQixTQUFMLEdBQWlCLElBQUl4Yyx5REFBSixDQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUJsRyx3RUFBQSxHQUF3QkEsd0VBQTdDLENBQWpCO0lBQ0EsT0FBS3dOLE9BQUwsR0FBZSxJQUFJN0csVUFBVSxDQUFDNkcsT0FBZixFQUFmO0lBTEo7RUFNQzs7RUFYTDtJQUFBO0lBQUEsT0FhSSxrQkFBU2hLLEdBQVQsRUFBd0JtZixPQUF4QixFQUE0RWpiLEtBQTVFLEVBQTJGa2IsV0FBM0YsRUFBZ0g7TUFDNUcsSUFBSUMsVUFBVSxHQUFHLEVBQWpCO01BQ0EsSUFBSW5qQixDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVdvRixDQUFDLEdBQUcsQ0FBZjtNQUFBLElBQWtCb0UsRUFBRSxHQUFHLEdBQXZCO01BQUEsSUFBNEJDLEVBQUUsR0FBRyxHQUFqQztNQUFBLElBQXNDMlosS0FBSyxHQUFHLEdBQTlDO01BQ0EsSUFBSWxELEVBQUUsR0FBRyxDQUFUO01BQUEsSUFBWTNHLEVBQUUsR0FBRyxDQUFqQjtNQUFBLElBQW9CeUYsR0FBRyxHQUFHLENBQTFCO01BRUEsSUFBSXFFLE9BQU8sR0FBRyxLQUFLTCxTQUFMLENBQWV6ZSxJQUE3QjtNQUNBLElBQUkrZSxTQUFTLEdBQUcsS0FBSyxFQUFMLEdBQVUsRUFBMUI7TUFDQSxJQUFJQyxJQUFJLEdBQUcsQ0FBWDs7TUFFQSxJQUFJLEVBQUVMLFdBQVcsQ0FBQy9nQixJQUFaLEdBQW1CN0Isd0VBQXJCLENBQUosRUFBaUQ7UUFFN0M0aUIsV0FBVyxDQUFDL2dCLElBQVosR0FBbUI3Qix3RUFBbkI7UUFDQTRpQixXQUFXLENBQUM3ZSxJQUFaLEdBQW1COGUsVUFBbkI7UUFDQUQsV0FBVyxDQUFDNWUsSUFBWixHQUFtQjBELEtBQW5CO1FBQ0FrYixXQUFXLENBQUM5ZSxPQUFaLEdBQXNCLENBQXRCO1FBQ0E4ZSxXQUFXLENBQUMvYixRQUFaO01BQ0gsQ0FQRCxNQU9PO1FBQ0grYixXQUFXLENBQUM3aUIsTUFBWixDQUFtQjhpQixVQUFuQixFQUErQm5iLEtBQS9CLEVBQXNDLENBQXRDO01BQ0g7O01BRUQsSUFBSXdiLE9BQU8sR0FBR04sV0FBVyxDQUFDM2UsSUFBMUI7TUFDQSxJQUFJa2YsU0FBUyxHQUFHLENBQWhCOztNQUVBLEtBQUt6akIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZ0ksS0FBaEIsRUFBdUIsRUFBRWhJLENBQXpCLEVBQTRCO1FBQ3hCd0osRUFBRSxHQUFHeVosT0FBTyxDQUFDampCLENBQUQsQ0FBUCxDQUFXNkgsQ0FBaEI7UUFDQTRCLEVBQUUsR0FBR3daLE9BQU8sQ0FBQ2pqQixDQUFELENBQVAsQ0FBV3lJLENBQWhCO1FBQ0EyYSxLQUFLLEdBQUdILE9BQU8sQ0FBQ2pqQixDQUFELENBQVAsQ0FBV29qQixLQUFuQjtRQUVBemMsa0VBQWEsQ0FBQzdDLEdBQUQsRUFBTSxLQUFLa2YsU0FBWCxFQUFzQkksS0FBdEIsRUFBNkI1WixFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUMsRUFBckMsRUFBeUMsS0FBS3NaLENBQTlDLEVBQWlELEtBQUtqVixPQUF0RCxDQUFiO1FBR0F5VixJQUFJLEdBQUcsQ0FBUDs7UUFDQSxLQUFLbmUsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHK2QsVUFBaEIsRUFBNEIsRUFBRS9kLENBQTlCLEVBQWlDO1VBRTdCOGEsRUFBRSxHQUFHbUQsT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGaEssRUFBRSxHQUFHOEosT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGdkUsR0FBRyxHQUFxQmtCLEVBQUUsR0FBRzNHLEVBQU4sR0FBWSxDQUFuQztVQUVBMkcsRUFBRSxHQUFHbUQsT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGaEssRUFBRSxHQUFHOEosT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGdkUsR0FBRyxJQUFxQixDQUFDa0IsRUFBRSxHQUFHM0csRUFBTixLQUFhLENBQXJDO1VBRUEyRyxFQUFFLEdBQUdtRCxPQUFPLENBQUNDLFNBQVMsR0FBRyxLQUFLUixlQUFMLENBQXFCUyxJQUFJLEdBQUcsQ0FBNUIsSUFBaUMsRUFBN0MsR0FBa0QsS0FBS1QsZUFBTCxDQUFxQlMsSUFBckIsQ0FBbkQsQ0FBWjtVQUE0RkEsSUFBSSxJQUFJLENBQVI7VUFDNUZoSyxFQUFFLEdBQUc4SixPQUFPLENBQUNDLFNBQVMsR0FBRyxLQUFLUixlQUFMLENBQXFCUyxJQUFJLEdBQUcsQ0FBNUIsSUFBaUMsRUFBN0MsR0FBa0QsS0FBS1QsZUFBTCxDQUFxQlMsSUFBckIsQ0FBbkQsQ0FBWjtVQUE0RkEsSUFBSSxJQUFJLENBQVI7VUFDNUZ2RSxHQUFHLElBQXFCLENBQUNrQixFQUFFLEdBQUczRyxFQUFOLEtBQWEsQ0FBckM7VUFFQTJHLEVBQUUsR0FBR21ELE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLEtBQUtSLGVBQUwsQ0FBcUJTLElBQUksR0FBRyxDQUE1QixJQUFpQyxFQUE3QyxHQUFrRCxLQUFLVCxlQUFMLENBQXFCUyxJQUFyQixDQUFuRCxDQUFaO1VBQTRGQSxJQUFJLElBQUksQ0FBUjtVQUM1RmhLLEVBQUUsR0FBRzhKLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLEtBQUtSLGVBQUwsQ0FBcUJTLElBQUksR0FBRyxDQUE1QixJQUFpQyxFQUE3QyxHQUFrRCxLQUFLVCxlQUFMLENBQXFCUyxJQUFyQixDQUFuRCxDQUFaO1VBQTRGQSxJQUFJLElBQUksQ0FBUjtVQUM1RnZFLEdBQUcsSUFBcUIsQ0FBQ2tCLEVBQUUsR0FBRzNHLEVBQU4sS0FBYSxDQUFyQztVQUVBMkcsRUFBRSxHQUFHbUQsT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGaEssRUFBRSxHQUFHOEosT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGdkUsR0FBRyxJQUFxQixDQUFDa0IsRUFBRSxHQUFHM0csRUFBTixLQUFhLENBQXJDO1VBRUEyRyxFQUFFLEdBQUdtRCxPQUFPLENBQUNDLFNBQVMsR0FBRyxLQUFLUixlQUFMLENBQXFCUyxJQUFJLEdBQUcsQ0FBNUIsSUFBaUMsRUFBN0MsR0FBa0QsS0FBS1QsZUFBTCxDQUFxQlMsSUFBckIsQ0FBbkQsQ0FBWjtVQUE0RkEsSUFBSSxJQUFJLENBQVI7VUFDNUZoSyxFQUFFLEdBQUc4SixPQUFPLENBQUNDLFNBQVMsR0FBRyxLQUFLUixlQUFMLENBQXFCUyxJQUFJLEdBQUcsQ0FBNUIsSUFBaUMsRUFBN0MsR0FBa0QsS0FBS1QsZUFBTCxDQUFxQlMsSUFBckIsQ0FBbkQsQ0FBWjtVQUE0RkEsSUFBSSxJQUFJLENBQVI7VUFDNUZ2RSxHQUFHLElBQXFCLENBQUNrQixFQUFFLEdBQUczRyxFQUFOLEtBQWEsQ0FBckM7VUFFQTJHLEVBQUUsR0FBR21ELE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLEtBQUtSLGVBQUwsQ0FBcUJTLElBQUksR0FBRyxDQUE1QixJQUFpQyxFQUE3QyxHQUFrRCxLQUFLVCxlQUFMLENBQXFCUyxJQUFyQixDQUFuRCxDQUFaO1VBQTRGQSxJQUFJLElBQUksQ0FBUjtVQUM1RmhLLEVBQUUsR0FBRzhKLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLEtBQUtSLGVBQUwsQ0FBcUJTLElBQUksR0FBRyxDQUE1QixJQUFpQyxFQUE3QyxHQUFrRCxLQUFLVCxlQUFMLENBQXFCUyxJQUFyQixDQUFuRCxDQUFaO1VBQTRGQSxJQUFJLElBQUksQ0FBUjtVQUM1RnZFLEdBQUcsSUFBcUIsQ0FBQ2tCLEVBQUUsR0FBRzNHLEVBQU4sS0FBYSxDQUFyQztVQUVBMkcsRUFBRSxHQUFHbUQsT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGaEssRUFBRSxHQUFHOEosT0FBTyxDQUFDQyxTQUFTLEdBQUcsS0FBS1IsZUFBTCxDQUFxQlMsSUFBSSxHQUFHLENBQTVCLElBQWlDLEVBQTdDLEdBQWtELEtBQUtULGVBQUwsQ0FBcUJTLElBQXJCLENBQW5ELENBQVo7VUFBNEZBLElBQUksSUFBSSxDQUFSO1VBQzVGdkUsR0FBRyxJQUFxQixDQUFDa0IsRUFBRSxHQUFHM0csRUFBTixLQUFhLENBQXJDO1VBRUFpSyxPQUFPLENBQUNDLFNBQVMsR0FBR3JlLENBQWIsQ0FBUCxHQUF5QjRaLEdBQXpCO1FBQ0g7O1FBQ0R5RSxTQUFTLElBQUlOLFVBQWI7TUFDSDtJQUNKO0VBbkZMOztFQUFBO0FBQUEsRUFBbUNsYyxVQUFuQzs7QUFzRkFBLFVBQVUsQ0FBQ0wsSUFBWCxHQUFrQkEsNkNBQWxCOztBQUVBSyxVQUFVLENBQUN5YyxNQUFYO0VBQUE7O0VBQUE7O0VBR0k7SUFBQTs7SUFBQTs7SUFDSTs7SUFESjs7SUFBQTs7SUFFSSxPQUFLQyxtQkFBTCxHQUEyQixFQUEzQjtJQUNBLE9BQUtDLHlCQUFMLEdBQWlDLEVBQWpDO0lBSEo7RUFJQzs7RUFQTDtJQUFBO0lBQUEsT0FRSSxnQkFBTzlmLEdBQVAsRUFBc0I4RSxNQUF0QixFQUE0Q2liLE1BQTVDLEVBQTBEO01BQ3RELElBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztRQUFFQSxNQUFNLEdBQUcsQ0FBVDtNQUFhOztNQUNsRCxJQUFJaGMsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXWSxDQUFDLEdBQUcsQ0FBZjtNQUNBLElBQUlqRyxDQUFDLEdBQUdzQixHQUFHLENBQUNPLElBQVo7TUFBQSxJQUFrQjVCLENBQUMsR0FBR3FCLEdBQUcsQ0FBQ1EsSUFBMUI7TUFBQSxJQUFnQ3dmLEtBQUssR0FBR2hnQixHQUFHLENBQUNTLElBQTVDO01BQ0EsSUFBSXdmLEdBQUcsR0FBRyxDQUFWO01BQUEsSUFBYUMsR0FBRyxHQUFJLElBQUl4aEIsQ0FBTCxHQUFVLENBQTdCO01BQ0EsSUFBSXloQixHQUFHLEdBQUksSUFBSSxJQUFJemhCLENBQVQsR0FBYyxDQUF4QjtNQUFBLElBQTJCMGhCLEdBQUcsR0FBSSxJQUFJLElBQUkxaEIsQ0FBVCxHQUFjLENBQS9DO01BQ0EsSUFBSTJoQixPQUFPLEdBQUcsS0FBS3prQixLQUFMLENBQVdnRyxVQUFYLENBQXVCbEQsQ0FBQyxHQUFHQyxDQUFMLElBQVcsQ0FBakMsQ0FBZDtNQUNBLElBQUkyaEIsU0FBUyxHQUFHRCxPQUFPLENBQUN0ZSxHQUF4QjtNQUNBLElBQUl3ZSxFQUFFLEdBQUcsQ0FBVDtNQUFBLElBQVl4RCxHQUFHLEdBQUcsQ0FBbEI7TUFBQSxJQUFxQnlELElBQUksR0FBRyxDQUE1QjtNQUFBLElBQStCQyxlQUFlLEdBQUcsQ0FBakQ7TUFBQSxJQUFvREMsRUFBcEQ7TUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxDQUF2QjtNQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFLZixtQkFBdEI7TUFDQSxJQUFJZ0IsWUFBWSxHQUFHLEtBQUtmLHlCQUF4QjtNQUVBLElBQUkvZSxFQUFFLEdBQUduQixJQUFJLENBQUNxQyxHQUFMLENBQVMsQ0FBVCxFQUFZOGQsTUFBWixJQUFzQixDQUEvQjtNQUNBLElBQUkvZSxFQUFFLEdBQUdwQixJQUFJLENBQUNxQyxHQUFMLENBQVMsQ0FBVCxFQUFZOGQsTUFBWixJQUFzQixDQUEvQjtNQUNBLElBQUllLEVBQUUsR0FBR2xoQixJQUFJLENBQUNDLEdBQUwsQ0FBU25CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxaEIsTUFBcEIsSUFBOEIsQ0FBdkM7TUFDQSxJQUFJZ0IsRUFBRSxHQUFHbmhCLElBQUksQ0FBQ0MsR0FBTCxDQUFTbEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29oQixNQUFwQixJQUE4QixDQUF2QztNQUVBaGMsQ0FBQyxHQUFHckYsQ0FBQyxHQUFHQyxDQUFSOztNQUNBLE9BQU8sRUFBRW9GLENBQUYsSUFBTyxDQUFkLEVBQWlCO1FBQUV1YyxTQUFTLENBQUN2YyxDQUFELENBQVQsR0FBZSxDQUFmO01BQW1COztNQUN0Q2hCLHdFQUFpQixDQUFDaWQsS0FBRCxFQUFRTSxTQUFSLEVBQW1CNWhCLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QnNoQixHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNuZixFQUFuQyxFQUF1Q0MsRUFBdkMsRUFBMkM4ZixFQUEzQyxFQUErQ0MsRUFBL0MsQ0FBakI7TUFFQWhFLEdBQUcsR0FBSS9iLEVBQUUsR0FBR3RDLENBQUwsR0FBU3FDLEVBQVYsR0FBZ0IsQ0FBdEI7O01BQ0EsS0FBSzRELENBQUMsR0FBRzNELEVBQVQsRUFBYTJELENBQUMsR0FBR29jLEVBQWpCLEVBQXFCLEVBQUVwYyxDQUFGLEVBQUtvWSxHQUFHLElBQUlyZSxDQUFqQyxFQUFvQztRQUNoQyxLQUFLcUYsQ0FBQyxHQUFHaEQsRUFBSixFQUFReWYsSUFBSSxHQUFHekQsR0FBcEIsRUFBeUJoWixDQUFDLEdBQUcrYyxFQUE3QixFQUFpQyxFQUFFL2MsQ0FBRixFQUFLLEVBQUV5YyxJQUF4QyxFQUE4QztVQUUxQ0QsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUQsQ0FBZDs7VUFDQSxJQUFLRCxFQUFFLEdBQUcsQ0FBQ0ssVUFBTixJQUNETCxFQUFFLEdBQUdELFNBQVMsQ0FBQ0UsSUFBSSxHQUFHLENBQVIsQ0FEYixJQUMyQkQsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUksR0FBRyxDQUFSLENBRHpDLElBRURELEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUixDQUZiLElBRTJCNmhCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUixDQUZ6QyxJQUdENmhCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUCxHQUFXLENBQVosQ0FIYixJQUcrQjZoQixFQUFFLEdBQUdELFNBQVMsQ0FBQ0UsSUFBSSxHQUFHOWhCLENBQVAsR0FBVyxDQUFaLENBSDdDLElBSUQ2aEIsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUksR0FBRzloQixDQUFQLEdBQVcsQ0FBWixDQUpiLElBSStCNmhCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUCxHQUFXLENBQVosQ0FKOUMsSUFNQzZoQixFQUFFLEdBQUdLLFVBQUwsSUFDR0wsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUksR0FBRyxDQUFSLENBRGpCLElBQytCRCxFQUFFLEdBQUdELFNBQVMsQ0FBQ0UsSUFBSSxHQUFHLENBQVIsQ0FEN0MsSUFFR0QsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUksR0FBRzloQixDQUFSLENBRmpCLElBRStCNmhCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUixDQUY3QyxJQUdHNmhCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUCxHQUFXLENBQVosQ0FIakIsSUFHbUM2aEIsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUksR0FBRzloQixDQUFQLEdBQVcsQ0FBWixDQUhqRCxJQUlHNmhCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxJQUFJLEdBQUc5aEIsQ0FBUCxHQUFXLENBQVosQ0FKakIsSUFJbUM2aEIsRUFBRSxHQUFHRCxTQUFTLENBQUNFLElBQUksR0FBRzloQixDQUFQLEdBQVcsQ0FBWixDQVZ0RCxFQVdFO1lBRUUraEIsZUFBZSxHQUFHemQsOEVBQXVCLENBQUNnZCxLQUFELEVBQVFRLElBQVIsRUFBY0QsRUFBZCxFQUFrQk4sR0FBbEIsRUFBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsQ0FBekM7O1lBQ0EsSUFBSUssZUFBZSxHQUFHSSxZQUF0QixFQUFvQztjQUNoQ0gsRUFBRSxHQUFHNWIsTUFBTSxDQUFDNmIsZ0JBQUQsQ0FBWDtjQUNBRCxFQUFFLENBQUMzYyxDQUFILEdBQU9BLENBQVAsRUFBVTJjLEVBQUUsQ0FBQy9iLENBQUgsR0FBT0EsQ0FBakIsRUFBb0IrYixFQUFFLENBQUNNLEtBQUgsR0FBV1AsZUFBL0I7Y0FDQSxFQUFFRSxnQkFBRjtjQUNBLEVBQUU1YyxDQUFGLEVBQUssRUFBRXljLElBQVA7WUFDSDtVQUNKO1FBQ0o7TUFDSjs7TUFFRCxLQUFLNWtCLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0JtZSxPQUF0QjtNQUVBLE9BQU9NLGdCQUFQO0lBQ0g7RUE5REw7O0VBQUE7QUFBQSxFQUF5Q3hkLFVBQXpDOztBQWlFQUEsVUFBVSxDQUFDOGQsZ0JBQVg7RUFBQTs7RUFBQTs7RUFDSTtJQUFBOztJQUFBO0VBRUM7O0VBSEw7SUFBQTtJQUFBLE9BS0ksb0JBQVcvTSxNQUFYLEVBQWlDbFEsSUFBakMsRUFBOENDLEVBQTlDLEVBQXlEaWQsUUFBekQsRUFBMkVDLE9BQTNFLEVBQTRGQyxRQUE1RixFQUE2R0MsTUFBN0csRUFBMEg7TUFDdEgsSUFBSUMsT0FBTyxHQUFHLElBQWQ7TUFDQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDtNQUNBLElBQUlybEIsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQnlpQixNQUFNLEdBQUcsQ0FBM0I7TUFBQSxJQUE4QkMsS0FBSyxHQUFHLENBQXRDO01BQUEsSUFBeUNDLEVBQUUsR0FBRyxLQUE5Qzs7TUFDQSxPQUFPRixNQUFNLEdBQUdGLE9BQWhCLEVBQXlCLEVBQUVFLE1BQTNCLEVBQW1DO1FBQy9CdGxCLENBQUMsR0FBRyxDQUFKOztRQUNBLE9BQU9BLENBQUMsR0FBR2dsQixRQUFKLElBQWdCTSxNQUFNLEdBQUdGLE9BQWhDLEdBQTBDO1VBQ3RDSSxFQUFFLEdBQUcsS0FBTDtVQUNBRCxLQUFLLEdBQUcsQ0FBUjs7VUFDQSxPQUFPLENBQUNDLEVBQVIsRUFBWTtZQUNSQSxFQUFFLEdBQUcsSUFBTDtZQUNBRCxLQUFLLEdBQUdGLE9BQU8sQ0FBQ3JsQixDQUFELENBQVAsR0FBYTBELElBQUksQ0FBQzRPLEtBQUwsQ0FBVzVPLElBQUksQ0FBQytoQixNQUFMLEtBQWdCUixPQUEzQixJQUFzQyxDQUEzRDs7WUFDQSxLQUFLcGlCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzdDLENBQWhCLEVBQW1CLEVBQUU2QyxDQUFyQixFQUF3QjtjQUNwQixJQUFJMGlCLEtBQUssSUFBSUYsT0FBTyxDQUFDeGlCLENBQUQsQ0FBcEIsRUFBeUI7Z0JBQUUyaUIsRUFBRSxHQUFHLEtBQUw7Z0JBQVk7Y0FBUTtZQUNsRDtVQUNKOztVQUNETixRQUFRLENBQUNsbEIsQ0FBRCxDQUFSLEdBQWM4SCxJQUFJLENBQUN5ZCxLQUFELENBQWxCO1VBQ0FKLE1BQU0sQ0FBQ25sQixDQUFELENBQU4sR0FBWStILEVBQUUsQ0FBQ3dkLEtBQUQsQ0FBZDs7VUFDQSxJQUFJLENBQUN2TixNQUFNLENBQUMwTixZQUFQLENBQW9CUixRQUFwQixFQUE4QkMsTUFBOUIsRUFBc0NubEIsQ0FBQyxHQUFHLENBQTFDLENBQUwsRUFBbUQ7WUFDL0NzbEIsTUFBTTtZQUNOO1VBQ0g7O1VBQ0QsRUFBRXRsQixDQUFGO1FBQ0g7O1FBQ0Q7TUFDSDs7TUFFRCxPQUFRQSxDQUFDLElBQUlnbEIsUUFBTCxJQUFpQk0sTUFBTSxHQUFHRixPQUFsQztJQUNIO0VBakNMO0lBQUE7SUFBQSxPQW1DSSxzQkFBYXBOLE1BQWIsRUFBbUM5TyxLQUFuQyxFQUFvRHBCLElBQXBELEVBQXNGQyxFQUF0RixFQUFzSEMsS0FBdEgsRUFBcUkyZCxNQUFySSxFQUFxSmxhLEdBQXJKLEVBQXFMbWEsSUFBckwsRUFBbU07TUFDL0wsSUFBSUMsVUFBVSxHQUFXLENBQXpCO01BQUEsSUFBNEI3bEIsQ0FBQyxHQUFHLENBQWhDO01BQUEsSUFBbUNvVCxDQUFDLEdBQUcsQ0FBdkM7TUFDQSxJQUFJNkUsQ0FBQyxHQUFHME4sTUFBTSxHQUFHQSxNQUFqQjtNQUVBM04sTUFBTSxDQUFDOE4sS0FBUCxDQUFhaGUsSUFBYixFQUFtQkMsRUFBbkIsRUFBdUJtQixLQUF2QixFQUE4QnVDLEdBQTlCLEVBQW1DekQsS0FBbkM7O01BRUEsT0FBT2hJLENBQUMsR0FBR2dJLEtBQVgsRUFBa0IsRUFBRWhJLENBQXBCLEVBQXVCO1FBQ25Cb1QsQ0FBQyxHQUFxQjNILEdBQUcsQ0FBQ3pMLENBQUQsQ0FBSCxJQUFVaVksQ0FBaEM7UUFDQTJOLElBQUksQ0FBQzVsQixDQUFELENBQUosR0FBVW9ULENBQVY7UUFDQXlTLFVBQVUsSUFBSXpTLENBQWQ7TUFDSDs7TUFDRCxPQUFPeVMsVUFBUDtJQUNIO0VBL0NMO0lBQUE7SUFBQSxPQWlESSxnQkFBT0UsTUFBUCxFQUFnQy9OLE1BQWhDLEVBQTZDbFEsSUFBN0MsRUFBK0VDLEVBQS9FLEVBQStHQyxLQUEvRyxFQUE4SGtCLEtBQTlILEVBQStJMGMsSUFBL0ksRUFBd0xJLFNBQXhMLEVBQXlNO01BQ3JNLElBQUksT0FBT0EsU0FBUCxLQUFxQixXQUF6QixFQUFzQztRQUFFQSxTQUFTLEdBQUcsSUFBWjtNQUFtQjs7TUFFM0QsSUFBSWhlLEtBQUssR0FBRytkLE1BQU0sQ0FBQzNsQixJQUFuQixFQUF5QixPQUFPLEtBQVA7TUFFekIsSUFBSTZsQixZQUFZLEdBQUdGLE1BQU0sQ0FBQzNsQixJQUExQjtNQUNBLElBQUk4bEIsTUFBTSxHQUFHRixTQUFiO01BQUEsSUFBd0JwRyxJQUFJLEdBQUcsQ0FBL0I7TUFDQSxJQUFJdUcsTUFBTSxHQUFZLEtBQXRCO01BRUEsSUFBSUMsT0FBTyxHQUFRLEVBQW5CO01BQ0EsSUFBSUMsT0FBTyxHQUFRLEVBQW5CO01BQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQVo7TUFFQSxJQUFJQyxFQUFFLEdBQUdyZCxLQUFLLENBQUM3RSxJQUFmO01BQUEsSUFBcUJtaUIsRUFBRSxHQUFHdGQsS0FBSyxDQUFDNUUsSUFBaEM7TUFDQSxJQUFJNEMsRUFBRSxHQUFHZ0MsS0FBSyxDQUFDL0csSUFBTixHQUFhN0Isd0VBQXRCO01BRUEsSUFBSW1tQixNQUFNLEdBQUcsS0FBSy9tQixLQUFMLENBQVdnRyxVQUFYLENBQXVCNmdCLEVBQUUsR0FBR0MsRUFBTixJQUFhLENBQW5DLENBQWI7TUFDQSxJQUFJRSxPQUFPLEdBQUcsS0FBS2huQixLQUFMLENBQVdnRyxVQUFYLENBQXNCc0MsS0FBdEIsQ0FBZDtNQUNBLElBQUkyZSxRQUFRLEdBQUcsS0FBS2puQixLQUFMLENBQVdnRyxVQUFYLENBQXNCc0MsS0FBSyxJQUFJLENBQS9CLENBQWY7TUFDQSxJQUFJNGUsQ0FBQyxHQUFHLElBQUlwZ0IseURBQUosQ0FBYStmLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCdGYsRUFBckIsRUFBeUJ1ZixNQUFNLENBQUNsaUIsSUFBaEMsQ0FBUjtNQUNBLElBQUlzaUIsU0FBUyxHQUFHLElBQUlyZ0IseURBQUosQ0FBYXdCLEtBQWIsRUFBb0IsQ0FBcEIsRUFBdUIxSCwwRUFBdkIsRUFBZ0RvbUIsT0FBTyxDQUFDbmlCLElBQXhELENBQWhCO01BRUEsSUFBSXVpQixXQUFXLEdBQUcsQ0FBQyxDQUFuQjtNQUFBLElBQXNCakIsVUFBVSxHQUFHLENBQW5DO01BQ0EsSUFBSWtCLE9BQU8sR0FBRyxDQUFkO01BRUEsSUFBSXRiLEdBQUcsR0FBR2tiLFFBQVEsQ0FBQ3hnQixHQUFuQjs7TUFHQSxJQUFJNkIsS0FBSyxJQUFJaWUsWUFBYixFQUEyQjtRQUN2QixJQUFJak8sTUFBTSxDQUFDZ1AsR0FBUCxDQUFXbGYsSUFBWCxFQUFpQkMsRUFBakIsRUFBcUI2ZSxDQUFyQixFQUF3QjVlLEtBQXhCLEtBQWtDLENBQXRDLEVBQXlDO1VBQ3JDLEtBQUt0SSxLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO1VBQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO1VBQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO1VBQ0EsT0FBTyxLQUFQO1FBQ0g7O1FBRURDLENBQUMsQ0FBQ0ssT0FBRixDQUFVL2QsS0FBVjs7UUFDQSxJQUFJMGMsSUFBSixFQUFVO1VBQ04sT0FBTyxFQUFFNWQsS0FBRixJQUFXLENBQWxCLEVBQXFCO1lBQ2pCNGQsSUFBSSxDQUFDcmhCLElBQUwsQ0FBVXlELEtBQVYsSUFBbUIsQ0FBbkI7VUFDSDtRQUNKOztRQUNELEtBQUt0SSxLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO1FBQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO1FBQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO1FBQ0EsT0FBTyxJQUFQO01BQ0g7O01BRUQsT0FBTy9HLElBQUksR0FBR3NHLE1BQWQsRUFBc0IsRUFBRXRHLElBQXhCLEVBQThCO1FBRTFCMEcsS0FBSyxHQUFHLEtBQUtZLFVBQUwsQ0FBZ0JsUCxNQUFoQixFQUF3QmxRLElBQXhCLEVBQThCQyxFQUE5QixFQUFrQ2tlLFlBQWxDLEVBQWdEamUsS0FBaEQsRUFBdURvZSxPQUF2RCxFQUFnRUMsT0FBaEUsQ0FBUjs7UUFDQSxJQUFJLENBQUNDLEtBQUwsRUFBWTtVQUNSLElBQUkxRyxJQUFJLElBQUksQ0FBWixFQUFlO1lBQ1gsS0FBS2xnQixLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO1lBQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO1lBQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO1lBQ0EsT0FBTyxLQUFQO1VBQ0g7O1VBQ0Q7UUFDSDs7UUFFREksT0FBTyxHQUFHL08sTUFBTSxDQUFDZ1AsR0FBUCxDQUFXWixPQUFYLEVBQW9CQyxPQUFwQixFQUE2Qk8sQ0FBN0IsRUFBZ0NYLFlBQWhDLENBQVY7UUFDQSxJQUFJYyxPQUFPLElBQUksQ0FBZixFQUNJO1FBSUpsQixVQUFVLEdBQUcsS0FBS3NCLFlBQUwsQ0FBa0JuUCxNQUFsQixFQUEwQjRPLENBQTFCLEVBQTZCOWUsSUFBN0IsRUFBbUNDLEVBQW5DLEVBQXVDQyxLQUF2QyxFQUE4QytkLE1BQU0sQ0FBQ0osTUFBckQsRUFBNkRsYSxHQUE3RCxFQUFrRW9iLFNBQVMsQ0FBQ3RpQixJQUE1RSxDQUFiOztRQUVBLElBQUlzaEIsVUFBVSxHQUFHbmlCLElBQUksQ0FBQ3FDLEdBQUwsQ0FBUytnQixXQUFULEVBQXNCYixZQUFZLEdBQUcsQ0FBckMsQ0FBakIsRUFBMEQ7VUFDdERXLENBQUMsQ0FBQ0ssT0FBRixDQUFVL2QsS0FBVjtVQUNBNGQsV0FBVyxHQUFHakIsVUFBZDtVQUNBLElBQUlELElBQUosRUFBVWlCLFNBQVMsQ0FBQ0ksT0FBVixDQUFrQnJCLElBQWxCO1VBQ1ZNLE1BQU0sR0FBR0gsTUFBTSxDQUFDcUIsWUFBUCxDQUFvQixDQUFDcGYsS0FBSyxHQUFHNmQsVUFBVCxJQUF1QjdkLEtBQTNDLEVBQWtEa2UsTUFBbEQsQ0FBVDtVQUNBQyxNQUFNLEdBQUcsSUFBVDtRQUNIO01BQ0o7O01BRUQsS0FBS3ptQixLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO01BQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO01BQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO01BRUEsT0FBT1IsTUFBUDtJQUNIO0VBcElMO0lBQUE7SUFBQSxPQXNJSSxlQUFNSixNQUFOLEVBQStCL04sTUFBL0IsRUFBNENsUSxJQUE1QyxFQUE4RUMsRUFBOUUsRUFBOEdDLEtBQTlHLEVBQTZIa0IsS0FBN0gsRUFBOEkwYyxJQUE5SSxFQUF1TEksU0FBdkwsRUFBd007TUFDcE0sSUFBSSxPQUFPQSxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO1FBQUVBLFNBQVMsR0FBRyxJQUFaO01BQW1COztNQUUzRCxJQUFJaGUsS0FBSyxHQUFHK2QsTUFBTSxDQUFDM2xCLElBQW5CLEVBQXlCLE9BQU8sS0FBUDtNQUV6QixJQUFJNmxCLFlBQVksR0FBR0YsTUFBTSxDQUFDM2xCLElBQTFCO01BQ0EsSUFBSThsQixNQUFNLEdBQUdGLFNBQWI7TUFBQSxJQUF3QnBHLElBQUksR0FBRyxDQUEvQjtNQUNBLElBQUl1RyxNQUFNLEdBQVksS0FBdEI7O01BQ0EsSUFBSWtCLEtBQUssR0FBRyxJQUFJcGdCLFVBQVUsQ0FBQzhJLElBQWYsRUFBWjs7TUFFQSxJQUFJcVcsT0FBTyxHQUFRLEVBQW5CO01BQ0EsSUFBSUMsT0FBTyxHQUFRLEVBQW5CO01BQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQVo7TUFFQSxJQUFJQyxFQUFFLEdBQUdyZCxLQUFLLENBQUM3RSxJQUFmO01BQUEsSUFBcUJtaUIsRUFBRSxHQUFHdGQsS0FBSyxDQUFDNUUsSUFBaEM7TUFDQSxJQUFJNEMsRUFBRSxHQUFHZ0MsS0FBSyxDQUFDL0csSUFBTixHQUFhN0Isd0VBQXRCO01BRUEsSUFBSW1tQixNQUFNLEdBQUcsS0FBSy9tQixLQUFMLENBQVdnRyxVQUFYLENBQXVCNmdCLEVBQUUsR0FBR0MsRUFBTixJQUFhLENBQW5DLENBQWI7TUFDQSxJQUFJRSxPQUFPLEdBQUcsS0FBS2huQixLQUFMLENBQVdnRyxVQUFYLENBQXNCc0MsS0FBdEIsQ0FBZDtNQUNBLElBQUkyZSxRQUFRLEdBQUcsS0FBS2puQixLQUFMLENBQVdnRyxVQUFYLENBQXNCc0MsS0FBSyxJQUFJLENBQS9CLENBQWY7TUFDQSxJQUFJNGUsQ0FBQyxHQUFHLElBQUlwZ0IseURBQUosQ0FBYStmLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCdGYsRUFBckIsRUFBeUJ1ZixNQUFNLENBQUNsaUIsSUFBaEMsQ0FBUjtNQUNBLElBQUlzaUIsU0FBUyxHQUFHLElBQUlyZ0IseURBQUosQ0FBYXdCLEtBQWIsRUFBb0IsQ0FBcEIsRUFBdUIxSCx3RUFBQSxHQUF3QkEsd0VBQS9DLEVBQXNFb21CLE9BQU8sQ0FBQ25pQixJQUE5RSxDQUFoQjtNQUVBLElBQUlzaEIsVUFBVSxHQUFHLENBQWpCO01BQ0EsSUFBSWtCLE9BQU8sR0FBRyxDQUFkO01BRUEsSUFBSXRiLEdBQUcsR0FBR2tiLFFBQVEsQ0FBQ3hnQixHQUFuQjtNQUNBLElBQUltaEIsVUFBVSxHQUFHLFlBQWpCO01BQUEsSUFBK0J6WCxLQUFLLEdBQUcsR0FBdkM7TUFBQSxJQUE0Q3NPLE1BQU0sR0FBRyxHQUFyRDtNQUVBNEgsTUFBTSxDQUFDdEgsR0FBUCxHQUFhLElBQWI7TUFDQXlILE1BQU0sR0FBR0gsTUFBTSxDQUFDcUIsWUFBUCxDQUFvQnJCLE1BQU0sQ0FBQ3RILEdBQTNCLEVBQWdDeUgsTUFBaEMsQ0FBVDs7TUFHQSxJQUFJbGUsS0FBSyxJQUFJaWUsWUFBYixFQUEyQjtRQUN2QixJQUFJak8sTUFBTSxDQUFDZ1AsR0FBUCxDQUFXbGYsSUFBWCxFQUFpQkMsRUFBakIsRUFBcUI2ZSxDQUFyQixFQUF3QjVlLEtBQXhCLEtBQWtDLENBQXRDLEVBQXlDO1VBQ3JDLEtBQUt0SSxLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO1VBQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO1VBQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO1VBQ0EsT0FBTyxLQUFQO1FBQ0g7O1FBRURDLENBQUMsQ0FBQ0ssT0FBRixDQUFVL2QsS0FBVjs7UUFDQSxJQUFJMGMsSUFBSixFQUFVO1VBQ04sT0FBTyxFQUFFNWQsS0FBRixJQUFXLENBQWxCLEVBQXFCO1lBQ2pCNGQsSUFBSSxDQUFDcmhCLElBQUwsQ0FBVXlELEtBQVYsSUFBbUIsQ0FBbkI7VUFDSDtRQUNKOztRQUNELEtBQUt0SSxLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO1FBQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO1FBQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO1FBQ0EsT0FBTyxJQUFQO01BQ0g7O01BRUQsT0FBTy9HLElBQUksR0FBR3NHLE1BQWQsRUFBc0IsRUFBRXRHLElBQXhCLEVBQThCO1FBRTFCMEcsS0FBSyxHQUFHLEtBQUtZLFVBQUwsQ0FBZ0JsUCxNQUFoQixFQUF3QmxRLElBQXhCLEVBQThCQyxFQUE5QixFQUFrQ2tlLFlBQWxDLEVBQWdEamUsS0FBaEQsRUFBdURvZSxPQUF2RCxFQUFnRUMsT0FBaEUsQ0FBUjs7UUFDQSxJQUFJLENBQUNDLEtBQUwsRUFBWTtVQUNSLElBQUkxRyxJQUFJLElBQUksQ0FBWixFQUFlO1lBQ1gsS0FBS2xnQixLQUFMLENBQVdzRyxVQUFYLENBQXNCeWdCLE1BQXRCO1lBQ0EsS0FBSy9tQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMGdCLE9BQXRCO1lBQ0EsS0FBS2huQixLQUFMLENBQVdzRyxVQUFYLENBQXNCMmdCLFFBQXRCO1lBQ0EsT0FBTyxLQUFQO1VBQ0g7O1VBQ0Q7UUFDSDs7UUFFREksT0FBTyxHQUFHL08sTUFBTSxDQUFDZ1AsR0FBUCxDQUFXWixPQUFYLEVBQW9CQyxPQUFwQixFQUE2Qk8sQ0FBN0IsRUFBZ0NYLFlBQWhDLENBQVY7UUFDQSxJQUFJYyxPQUFPLElBQUksQ0FBZixFQUNJO1FBSUovTyxNQUFNLENBQUM4TixLQUFQLENBQWFoZSxJQUFiLEVBQW1CQyxFQUFuQixFQUF1QjZlLENBQXZCLEVBQTBCbmIsR0FBMUIsRUFBK0J6RCxLQUEvQjtRQUNBbVcsTUFBTSxHQUFHa0osS0FBSyxDQUFDbEosTUFBTixDQUFhMVMsR0FBYixFQUFrQixDQUFsQixFQUFxQnpELEtBQUssR0FBRyxDQUE3QixDQUFUOztRQUVBLElBQUltVyxNQUFNLEdBQUdtSixVQUFiLEVBQXlCO1VBQ3JCQSxVQUFVLEdBQUduSixNQUFiO1VBQ0F5SSxDQUFDLENBQUNLLE9BQUYsQ0FBVS9kLEtBQVY7VUFDQWlkLE1BQU0sR0FBRyxJQUFUO1FBQ0g7TUFDSjs7TUFFRCxJQUFJQSxNQUFKLEVBQVk7UUFDUnRXLEtBQUssR0FBRyxNQUFNLE1BQU4sSUFBZ0IsSUFBSSxPQUFPN0gsS0FBSyxHQUFHaWUsWUFBZixDQUFwQixJQUFvRHZpQixJQUFJLENBQUNnRixJQUFMLENBQVU0ZSxVQUFWLENBQTVEO1FBQ0F6WCxLQUFLLEdBQUduTSxJQUFJLENBQUNxQyxHQUFMLENBQVM4SixLQUFULEVBQWdCLEtBQWhCLENBQVI7UUFFQWdXLFVBQVUsR0FBRyxLQUFLc0IsWUFBTCxDQUFrQm5QLE1BQWxCLEVBQTBCOU8sS0FBMUIsRUFBaUNwQixJQUFqQyxFQUF1Q0MsRUFBdkMsRUFBMkNDLEtBQTNDLEVBQWtENkgsS0FBbEQsRUFBeURwRSxHQUF6RCxFQUE4RG9iLFNBQVMsQ0FBQ3RpQixJQUF4RSxDQUFiO1FBQ0EsSUFBSXFoQixJQUFKLEVBQVVpQixTQUFTLENBQUNJLE9BQVYsQ0FBa0JyQixJQUFsQjtRQUVWTyxNQUFNLEdBQUdOLFVBQVUsSUFBSUksWUFBdkI7TUFDSDs7TUFFRCxLQUFLdm1CLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0J5Z0IsTUFBdEI7TUFDQSxLQUFLL21CLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0IwZ0IsT0FBdEI7TUFDQSxLQUFLaG5CLEtBQUwsQ0FBV3NHLFVBQVgsQ0FBc0IyZ0IsUUFBdEI7TUFFQSxPQUFPUixNQUFQO0lBQ0g7RUF2T0w7O0VBQUE7QUFBQSxFQUE2RGxmLFVBQTdEOztBQTBPQUEsVUFBVSxDQUFDRixlQUFYLEdBQTZCQSwrRUFBN0I7QUFFQUUsVUFBVSxDQUFDZ0MsUUFBWCxHQUFzQkEsUUFBdEI7QUFFQWhDLFVBQVUsQ0FBQ3dELFlBQVgsR0FBMEJBLFlBQTFCOztBQUVBeEQsVUFBVSxDQUFDc2dCLGVBQVg7RUFBQTs7RUFBQTs7RUFFSTtJQUFBOztJQUFBOztJQUNJOztJQURKOztJQUVJLElBQUkxWixRQUFRLEdBQUcsSUFBSTVHLFVBQVUsQ0FBQzZHLE9BQWYsRUFBZjs7SUFDQSxPQUFLMFosWUFBTCxHQUFvQjNaLFFBQVEsQ0FBQzRaLGtCQUE3QjtJQUhKO0VBSUM7O0VBTkw7SUFBQTtJQUFBLE9BT0ksZUFBTUMsUUFBTixFQUEyQkMsUUFBM0IsRUFBZ0RDLE9BQWhELEVBQW1FQyxPQUFuRSxFQUFzRjdmLEtBQXRGLEVBQXFHOGYsUUFBckcsRUFBdUhoSixRQUF2SCxFQUF5SWlKLE1BQXpJLEVBQTZKdEosR0FBN0osRUFBMEt1SixtQkFBMUssRUFBcU07TUFDak0sSUFBSSxPQUFPbEosUUFBUCxLQUFvQixXQUF4QixFQUFxQztRQUFFQSxRQUFRLEdBQUcsRUFBWDtNQUFnQjs7TUFDdkQsSUFBSSxPQUFPaUosTUFBUCxLQUFrQixXQUF0QixFQUFtQztRQUFFQSxNQUFNLEdBQUcsSUFBSUUsVUFBSixDQUFlamdCLEtBQWYsQ0FBVDtNQUFpQzs7TUFDdEUsSUFBSSxPQUFPeVcsR0FBUCxLQUFlLFdBQW5CLEVBQWdDO1FBQUVBLEdBQUcsR0FBRyxJQUFOO01BQWE7O01BQy9DLElBQUksT0FBT3VKLG1CQUFQLEtBQStCLFdBQW5DLEVBQWdEO1FBQUVBLG1CQUFtQixHQUFHLE1BQXRCO01BQStCOztNQUVqRixJQUFJRSxRQUFRLEdBQUcsQ0FBQ0osUUFBUSxHQUFHLENBQVosSUFBaUIsR0FBaEM7TUFDQSxJQUFJSyxRQUFRLEdBQUlMLFFBQVEsR0FBR0EsUUFBWixHQUF3QixDQUF2QztNQUNBLElBQUlNLFNBQVMsR0FBR0QsUUFBUSxJQUFJLENBQTVCO01BQ0EsSUFBSUUsU0FBUyxHQUFHWCxRQUFRLENBQUNuakIsSUFBekI7TUFBQSxJQUErQitqQixTQUFTLEdBQUdYLFFBQVEsQ0FBQ3BqQixJQUFwRDtNQUNBLElBQUlna0IsUUFBUSxHQUFHRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWE5akIsSUFBNUI7TUFBQSxJQUFrQ2lrQixRQUFRLEdBQUdGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYS9qQixJQUExRDtNQUNBLElBQUkwUCxFQUFFLEdBQUdvVSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFoa0IsSUFBdEI7TUFBQSxJQUE0QjZQLEVBQUUsR0FBR21VLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYS9qQixJQUE5QztNQUFBLElBQW9EbWtCLEVBQUUsR0FBRyxDQUF6RDtNQUFBLElBQTREQyxFQUFFLEdBQUcsQ0FBakU7TUFFQSxJQUFJQyxTQUFTLEdBQUcsS0FBS2pwQixLQUFMLENBQVdnRyxVQUFYLENBQXNCeWlCLFFBQVEsSUFBSSxDQUFsQyxDQUFoQjtNQUNBLElBQUlTLGVBQWUsR0FBRyxLQUFLbHBCLEtBQUwsQ0FBV2dHLFVBQVgsQ0FBc0IwaUIsU0FBUyxJQUFJLENBQW5DLENBQXRCO01BQ0EsSUFBSVMsY0FBYyxHQUFHLEtBQUtucEIsS0FBTCxDQUFXZ0csVUFBWCxDQUF1QndPLEVBQUUsSUFBSUQsRUFBRSxJQUFJLENBQVYsQ0FBSCxJQUFvQixDQUExQyxDQUFyQjtNQUVBLElBQUk2VSxPQUFPLEdBQUcsSUFBSXRpQix5REFBSixDQUFheU4sRUFBYixFQUFpQkMsRUFBakIsRUFBcUI1VCwyRUFBckIsRUFBK0N1b0IsY0FBYyxDQUFDdGtCLElBQTlELENBQWQ7TUFFQSxJQUFJd2tCLFFBQVEsR0FBR0osU0FBUyxDQUFDOWlCLEdBQXpCO01BQ0EsSUFBSW1qQixVQUFVLEdBQUdKLGVBQWUsQ0FBQy9pQixHQUFqQztNQUNBLElBQUlvakIsU0FBUyxHQUFHSixjQUFjLENBQUNoakIsR0FBL0I7TUFFQSxJQUFJa04sS0FBSyxHQUFHLENBQVo7TUFBQSxJQUFlalAsR0FBRyxHQUFHLENBQXJCO01BQUEsSUFBd0JvbEIsSUFBSSxHQUFHLENBQS9CO01BQUEsSUFBa0NDLElBQUksR0FBRyxDQUF6QztNQUFBLElBQTRDQyxLQUFLLEdBQUcsQ0FBcEQ7TUFBQSxJQUF1REMsSUFBSSxHQUFHLENBQTlEO01BQ0EsSUFBSUMsTUFBTSxHQUFHLEdBQWI7TUFBQSxJQUFrQkMsTUFBTSxHQUFHLEdBQTNCO01BQUEsSUFBZ0NDLE1BQU0sR0FBRyxHQUF6QztNQUFBLElBQThDQyxNQUFNLEdBQUcsR0FBdkQ7TUFBQSxJQUE0REMsTUFBTSxHQUFHLEdBQXJFO01BQ0EsSUFBSUMsWUFBWSxHQUFHLEdBQW5CO01BQUEsSUFBd0JDLFlBQVksR0FBRyxHQUF2QztNQUFBLElBQTRDQyxPQUFPLEdBQUcsR0FBdEQ7TUFBQSxJQUEyREMsT0FBTyxHQUFHLEdBQXJFO01BQ0EsSUFBSUMsT0FBTyxHQUFHLENBQWQ7TUFBQSxJQUFpQkMsT0FBTyxHQUFHLENBQTNCO01BQUEsSUFBOEJDLE9BQU8sR0FBRyxDQUF4QztNQUFBLElBQTJDQyxPQUFPLEdBQUcsQ0FBckQ7TUFDQSxJQUFJbHFCLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZDLENBQUMsR0FBRyxDQUFmO01BQUEsSUFBa0JnRixDQUFDLEdBQUcsQ0FBdEI7TUFBQSxJQUF5QlksQ0FBQyxHQUFHLENBQTdCO01BQUEsSUFBZ0MwaEIsS0FBSyxHQUFHLENBQXhDO01BQUEsSUFBMkNDLElBQUksR0FBRyxDQUFsRDtNQUFBLElBQXFEeEssSUFBSSxHQUFHLENBQTVEO01BQ0EsSUFBSXlLLE1BQU0sR0FBRyxDQUFiO01BQUEsSUFBZ0JDLEtBQUssR0FBRyxDQUF4QjtNQUFBLElBQTJCQyxLQUFLLEdBQUcsQ0FBbkM7TUFDQSxJQUFJcGxCLENBQUMsR0FBRyxHQUFSO01BQUEsSUFBYUMsQ0FBQyxHQUFHLEdBQWpCO01BQUEsSUFBc0JvbEIsRUFBRSxHQUFHLEdBQTNCO01BQUEsSUFBZ0NDLEVBQUUsR0FBRyxHQUFyQztNQUdBLElBQUlDLFFBQVEsR0FBRyxFQUFmO01BQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7TUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sR0FBRyxDQUExQjtNQUNBLElBQUlFLFVBQVUsR0FBSSxLQUFPRCxTQUFELEdBQWMsQ0FBdEM7TUFDQSxJQUFJRSxTQUFTLEdBQUksS0FBS0osUUFBdEI7TUFDQSxJQUFJSyxRQUFRLEdBQUksS0FBT0osT0FBRCxHQUFZLENBQWxDO01BQ0EsSUFBSUssU0FBUyxHQUFHLE9BQU8sS0FBSyxFQUFaLENBQWhCO01BQ0EsSUFBSUMsSUFBSSxHQUFHLENBQVg7TUFBQSxJQUFjQyxJQUFJLEdBQUcsQ0FBckI7TUFBQSxJQUF3QkMsSUFBSSxHQUFHLENBQS9CO01BQUEsSUFBa0NDLElBQUksR0FBRyxDQUF6QztNQUFBLElBQTRDQyxJQUFJLEdBQUcsQ0FBbkQ7TUFBQSxJQUFzREMsS0FBSyxHQUFHLENBQTlEO01BQUEsSUFBaUVDLEtBQUssR0FBRyxDQUF6RTtNQUNBLElBQUlsZixHQUFHLEdBQUcsR0FBVjtNQUFBLElBQWVDLEdBQUcsR0FBRyxHQUFyQjtNQUFBLElBQTBCRyxHQUFHLEdBQUcsR0FBaEM7TUFBQSxJQUFxQytlLENBQUMsR0FBRyxHQUF6QztNQUFBLElBQThDQyxPQUFPLEdBQUcsR0FBeEQ7TUFFQSxJQUFJQyxXQUFXLEdBQUcsZ0JBQWxCO01BQ0FqTixHQUFHLElBQUlBLEdBQVA7O01BR0EsT0FBT3plLENBQUMsR0FBR2dJLEtBQVgsRUFBa0IsRUFBRWhJLENBQXBCLEVBQXVCO1FBQ25CK25CLE1BQU0sQ0FBQy9uQixDQUFELENBQU4sR0FBWSxDQUFaO01BQ0g7O01BRUQsSUFBSTJyQixTQUFTLEdBQUlqRSxRQUFRLENBQUMvWixNQUFULEdBQWtCLENBQW5CLEdBQXdCLENBQXhDO01BQ0F3YyxLQUFLLEdBQUd3QixTQUFSOztNQUVBLE9BQU94QixLQUFLLElBQUksQ0FBaEIsRUFBbUIsRUFBRUEsS0FBckIsRUFBNEI7UUFDeEJiLE1BQU0sR0FBSSxPQUFPLEtBQUthLEtBQVosQ0FBVjtRQUNBMUIsRUFBRSxHQUFHeFUsRUFBRSxJQUFJa1csS0FBWDtRQUNBekIsRUFBRSxHQUFHeFUsRUFBRSxJQUFJaVcsS0FBWDtRQUNBcFgsS0FBSyxHQUFHMFYsRUFBRSxJQUFJLENBQWQ7UUFDQUYsUUFBUSxHQUFHRixTQUFTLENBQUM4QixLQUFELENBQVQsQ0FBaUI1bEIsSUFBNUI7UUFDQWlrQixRQUFRLEdBQUdGLFNBQVMsQ0FBQzZCLEtBQUQsQ0FBVCxDQUFpQjVsQixJQUE1QjtRQUVBK2xCLEtBQUssR0FBSTdCLEVBQUUsR0FBR1gsUUFBTixHQUFrQixDQUExQjtRQUNBeUMsS0FBSyxHQUFJN0IsRUFBRSxHQUFHWixRQUFOLEdBQWtCLENBQTFCO1FBR0EsS0FBS04sWUFBTCxDQUFrQmEsU0FBUyxDQUFDOEIsS0FBRCxDQUEzQixFQUFvQ3JCLE9BQXBDOztRQUdBLEtBQUtzQixJQUFJLEdBQUcsQ0FBWixFQUFlQSxJQUFJLEdBQUdwaUIsS0FBdEIsRUFBNkIsRUFBRW9pQixJQUEvQixFQUFxQztVQUNqQ3BxQixDQUFDLEdBQUdvcUIsSUFBSSxJQUFJLENBQVo7VUFDQXZuQixDQUFDLEdBQUc3QyxDQUFDLEdBQUcsQ0FBUjtVQUNBdXBCLE1BQU0sR0FBRzNCLE9BQU8sQ0FBQzVuQixDQUFELENBQVAsR0FBYXNwQixNQUF0QjtVQUNBRSxNQUFNLEdBQUc1QixPQUFPLENBQUMva0IsQ0FBRCxDQUFQLEdBQWF5bUIsTUFBdEI7O1VBRUEsSUFBSWEsS0FBSyxJQUFJd0IsU0FBYixFQUF3QjtZQUNwQmxDLE1BQU0sR0FBR0YsTUFBVDtZQUNBRyxNQUFNLEdBQUdGLE1BQVQ7VUFDSCxDQUhELE1BR087WUFDSEMsTUFBTSxHQUFHNUIsT0FBTyxDQUFDN25CLENBQUQsQ0FBUCxHQUFhLEdBQXRCO1lBQ0EwcEIsTUFBTSxHQUFHN0IsT0FBTyxDQUFDaGxCLENBQUQsQ0FBUCxHQUFhLEdBQXRCO1VBQ0g7O1VBQ0RnbEIsT0FBTyxDQUFDN25CLENBQUQsQ0FBUCxHQUFheXBCLE1BQWI7VUFDQTVCLE9BQU8sQ0FBQ2hsQixDQUFELENBQVAsR0FBYTZtQixNQUFiO1VBRUFILE1BQU0sSUFBSXJCLFFBQVY7VUFDQXNCLE1BQU0sSUFBSXRCLFFBQVY7VUFDQTZCLE9BQU8sR0FBR1IsTUFBTSxHQUFHLENBQW5CO1VBQ0FTLE9BQU8sR0FBR1IsTUFBTSxHQUFHLENBQW5CO1VBR0EzaEIsQ0FBQyxHQUFzQmtpQixPQUFPLElBQUlNLE1BQVosSUFBd0JOLE9BQU8sSUFBSU8sS0FBbkMsSUFBOENOLE9BQU8sSUFBSUssTUFBekQsSUFBcUVMLE9BQU8sSUFBSU8sS0FBdEc7O1VBQ0EsSUFBSTFpQixDQUFDLElBQUksQ0FBVCxFQUFZO1lBQ1IsSUFBSXNpQixLQUFLLElBQUksQ0FBYixFQUFnQjtjQUNacEMsTUFBTSxDQUFDcUMsSUFBRCxDQUFOLEdBQWUsQ0FBZjtZQUNIOztZQUNEO1VBQ0g7O1VBRURqbEIsQ0FBQyxHQUFHb2tCLE1BQU0sR0FBR1EsT0FBYjtVQUNBM2tCLENBQUMsR0FBR29rQixNQUFNLEdBQUdRLE9BQWI7VUFDQWlCLElBQUksR0FBSyxDQUFDLE1BQU05bEIsQ0FBUCxLQUFhLE1BQU1DLENBQW5CLElBQXdCMGxCLFNBQXpCLEdBQXNDLEdBQXZDLEdBQThDLENBQXJEO1VBQ0FJLElBQUksR0FBSy9sQixDQUFDLElBQUksTUFBTUMsQ0FBVixDQUFELEdBQWdCMGxCLFNBQWpCLEdBQThCLEdBQS9CLEdBQXNDLENBQTdDO1VBQ0FLLElBQUksR0FBSyxDQUFDLE1BQU1obUIsQ0FBUCxJQUFZQyxDQUFaLEdBQWdCMGxCLFNBQWpCLEdBQThCLEdBQS9CLEdBQXNDLENBQTdDO1VBQ0FNLElBQUksR0FBSU4sU0FBUyxHQUFHRyxJQUFaLEdBQW1CQyxJQUFuQixHQUEwQkMsSUFBbEM7VUFFQTllLEdBQUcsR0FBRyxHQUFOLEVBQVdDLEdBQUcsR0FBRyxHQUFqQixFQUFzQkcsR0FBRyxHQUFHLEdBQTVCOztVQUdBLEtBQUtoRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdxZixRQUFoQixFQUEwQixFQUFFcmYsQ0FBNUIsRUFBK0I7WUFDM0IzRSxHQUFHLEdBQUksQ0FBQzJFLENBQUMsR0FBR3VoQixPQUFMLElBQWdCdkIsRUFBaEIsR0FBcUJzQixPQUF0QixHQUFpQyxDQUF2QztZQUNBYixJQUFJLEdBQUdwbEIsR0FBRyxJQUFJLENBQWQ7WUFFQXFsQixJQUFJLEdBQUkxZ0IsQ0FBQyxHQUFHcWYsUUFBTCxHQUFpQixDQUF4QjtZQUNBc0IsS0FBSyxHQUFHRCxJQUFJLElBQUksQ0FBaEI7O1lBQ0EsS0FBS3RoQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdpZ0IsUUFBaEIsRUFBMEIsRUFBRWpnQixDQUFGLEVBQUssRUFBRS9ELEdBQVAsRUFBWSxFQUFFcWxCLElBQWQsRUFBb0JELElBQUksSUFBSSxDQUF0RCxFQUF5RDtjQUNyRG1DLElBQUksR0FBSzlDLFFBQVEsQ0FBQ3prQixHQUFELENBQVQsR0FBa0JtbkIsSUFBbEIsR0FBMEIxQyxRQUFRLENBQUN6a0IsR0FBRyxHQUFHLENBQVAsQ0FBVCxHQUFzQm9uQixJQUEvQyxHQUNIM0MsUUFBUSxDQUFDemtCLEdBQUcsR0FBRzJrQixFQUFQLENBQVQsR0FBdUIwQyxJQURuQixHQUMyQjVDLFFBQVEsQ0FBQ3prQixHQUFHLEdBQUcya0IsRUFBTixHQUFXLENBQVosQ0FBVCxHQUEyQjJDLElBRDdEO2NBRUFDLElBQUksR0FBTUEsSUFBRCxHQUFTUixVQUFWLElBQTBCRCxTQUFsQztjQUVBVSxLQUFLLEdBQUlyQyxTQUFTLENBQUNDLElBQUQsQ0FBVCxHQUFrQitCLElBQWxCLEdBQXlCaEMsU0FBUyxDQUFDQyxJQUFJLEdBQUcsQ0FBUixDQUFULEdBQXNCZ0MsSUFBL0MsR0FDTGpDLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHblcsS0FBUixDQUFULEdBQTBCb1ksSUFEckIsR0FDNEJsQyxTQUFTLENBQUNDLElBQUksR0FBR25XLEtBQVAsR0FBZSxDQUFoQixDQUFULEdBQThCcVksSUFEbkU7Y0FFQUUsS0FBSyxHQUFNQSxLQUFELEdBQVVQLFFBQVgsSUFBeUJKLE9BQWxDO2NBRUFZLEtBQUssR0FBSXRDLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLENBQVIsQ0FBVCxHQUFzQitCLElBQXRCLEdBQTZCaEMsU0FBUyxDQUFDQyxJQUFJLEdBQUcsQ0FBUixDQUFULEdBQXNCZ0MsSUFBbkQsR0FBMERqQyxTQUFTLENBQUNDLElBQUksR0FBR25XLEtBQVAsR0FBZSxDQUFoQixDQUFULEdBQThCb1ksSUFBeEYsR0FDTGxDLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHblcsS0FBUCxHQUFlLENBQWhCLENBQVQsR0FBOEJxWSxJQURsQztjQUVBRyxLQUFLLEdBQU1BLEtBQUQsR0FBVVIsUUFBWCxJQUF5QkosT0FBbEM7Y0FFQTVCLFFBQVEsQ0FBQ0ksSUFBRCxDQUFSLEdBQWlCa0MsSUFBakI7Y0FDQXJDLFVBQVUsQ0FBQ0ksS0FBSyxFQUFOLENBQVYsR0FBc0JrQyxLQUF0QjtjQUNBdEMsVUFBVSxDQUFDSSxLQUFLLEVBQU4sQ0FBVixHQUFzQm1DLEtBQXRCO2NBRUFsZixHQUFHLElBQUlpZixLQUFLLEdBQUdBLEtBQWY7Y0FDQWhmLEdBQUcsSUFBSWdmLEtBQUssR0FBR0MsS0FBZjtjQUNBOWUsR0FBRyxJQUFJOGUsS0FBSyxHQUFHQSxLQUFmO1lBQ0g7VUFDSjs7VUFFRGxmLEdBQUcsSUFBSTJlLFNBQVA7VUFBa0IxZSxHQUFHLElBQUkwZSxTQUFQO1VBQWtCdmUsR0FBRyxJQUFJdWUsU0FBUDtVQUVwQ1EsQ0FBQyxHQUFHbmYsR0FBRyxHQUFHSSxHQUFOLEdBQVlILEdBQUcsR0FBR0EsR0FBdEI7VUFDQW1mLE9BQU8sR0FBRyxDQUFDaGYsR0FBRyxHQUFHSixHQUFOLEdBQVkzSSxJQUFJLENBQUNnRixJQUFMLENBQVUsQ0FBQzJELEdBQUcsR0FBR0ksR0FBUCxLQUFlSixHQUFHLEdBQUdJLEdBQXJCLElBQTRCLE1BQU1ILEdBQU4sR0FBWUEsR0FBbEQsQ0FBYixJQUF1RThiLFNBQWpGOztVQUVBLElBQUlxRCxPQUFPLEdBQUd6RCxtQkFBVixJQUFpQ3dELENBQUMsR0FBR0UsV0FBekMsRUFBc0Q7WUFDbEQsSUFBSXZCLEtBQUssSUFBSSxDQUFiLEVBQWdCO2NBQ1pwQyxNQUFNLENBQUNxQyxJQUFELENBQU4sR0FBZSxDQUFmO1lBQ0g7O1lBQ0Q7VUFDSDs7VUFFRG9CLENBQUMsR0FBRyxNQUFNQSxDQUFWO1VBRUEvQixNQUFNLElBQUl2QixRQUFWO1VBQ0F3QixNQUFNLElBQUl4QixRQUFWO1VBQ0F5QixZQUFZLEdBQUcsR0FBZjtVQUNBQyxZQUFZLEdBQUcsR0FBZjs7VUFFQSxLQUFLaEssSUFBSSxHQUFHLENBQVosRUFBZUEsSUFBSSxHQUFHZCxRQUF0QixFQUFnQyxFQUFFYyxJQUFsQyxFQUF3QztZQUNwQ3FLLE9BQU8sR0FBR1IsTUFBTSxHQUFHLENBQW5CO1lBQ0FTLE9BQU8sR0FBR1IsTUFBTSxHQUFHLENBQW5CO1lBRUE3aEIsQ0FBQyxHQUFzQm9pQixPQUFPLElBQUlJLE1BQVosSUFBd0JKLE9BQU8sSUFBSUssS0FBbkMsSUFBOENKLE9BQU8sSUFBSUcsTUFBekQsSUFBcUVILE9BQU8sSUFBSUssS0FBdEc7O1lBQ0EsSUFBSTFpQixDQUFDLElBQUksQ0FBVCxFQUFZO2NBQ1IsSUFBSXNpQixLQUFLLElBQUksQ0FBYixFQUFnQjtnQkFDWnBDLE1BQU0sQ0FBQ3FDLElBQUQsQ0FBTixHQUFlLENBQWY7Y0FDSDs7Y0FDRDtZQUNIOztZQUVEamxCLENBQUMsR0FBR3NrQixNQUFNLEdBQUdRLE9BQWI7WUFDQTdrQixDQUFDLEdBQUdza0IsTUFBTSxHQUFHUSxPQUFiO1lBQ0FlLElBQUksR0FBSyxDQUFDLE1BQU05bEIsQ0FBUCxLQUFhLE1BQU1DLENBQW5CLElBQXdCMGxCLFNBQXpCLEdBQXNDLEdBQXZDLEdBQThDLENBQXJEO1lBQ0FJLElBQUksR0FBSy9sQixDQUFDLElBQUksTUFBTUMsQ0FBVixDQUFELEdBQWdCMGxCLFNBQWpCLEdBQThCLEdBQS9CLEdBQXNDLENBQTdDO1lBQ0FLLElBQUksR0FBSyxDQUFDLE1BQU1obUIsQ0FBUCxJQUFZQyxDQUFaLEdBQWdCMGxCLFNBQWpCLEdBQThCLEdBQS9CLEdBQXNDLENBQTdDO1lBQ0FNLElBQUksR0FBSU4sU0FBUyxHQUFHRyxJQUFaLEdBQW1CQyxJQUFuQixHQUEwQkMsSUFBbEM7WUFDQVgsRUFBRSxHQUFHLEdBQUwsRUFBVUMsRUFBRSxHQUFHLEdBQWY7O1lBRUEsS0FBS2hpQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdxZixRQUFoQixFQUEwQixFQUFFcmYsQ0FBNUIsRUFBK0I7Y0FDM0I0Z0IsSUFBSSxHQUFJLENBQUM1Z0IsQ0FBQyxHQUFHeWhCLE9BQUwsSUFBZ0J6QixFQUFoQixHQUFxQndCLE9BQXRCLEdBQWlDLENBQXhDO2NBRUFkLElBQUksR0FBSTFnQixDQUFDLEdBQUdxZixRQUFMLEdBQWlCLENBQXhCO2NBQ0FzQixLQUFLLEdBQUdELElBQUksSUFBSSxDQUFoQjs7Y0FDQSxLQUFLdGhCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lnQixRQUFoQixFQUEwQixFQUFFamdCLENBQUYsRUFBSyxFQUFFd2hCLElBQVAsRUFBYSxFQUFFRixJQUF6QyxFQUErQztnQkFDM0NrQyxJQUFJLEdBQUs3QyxRQUFRLENBQUNhLElBQUQsQ0FBVCxHQUFtQjRCLElBQW5CLEdBQTJCekMsUUFBUSxDQUFDYSxJQUFJLEdBQUcsQ0FBUixDQUFULEdBQXVCNkIsSUFBakQsR0FDSDFDLFFBQVEsQ0FBQ2EsSUFBSSxHQUFHWixFQUFSLENBQVQsR0FBd0IwQyxJQURwQixHQUM0QjNDLFFBQVEsQ0FBQ2EsSUFBSSxHQUFHWixFQUFQLEdBQVksQ0FBYixDQUFULEdBQTRCMkMsSUFEL0Q7Z0JBRUFDLElBQUksR0FBTUEsSUFBRCxHQUFTUixVQUFWLElBQTBCRCxTQUFsQztnQkFDQVMsSUFBSSxHQUFJQSxJQUFJLEdBQUd0QyxRQUFRLENBQUNJLElBQUQsQ0FBdkI7Z0JBRUFxQixFQUFFLElBQUlhLElBQUksR0FBR3JDLFVBQVUsQ0FBQ0ksS0FBSyxFQUFOLENBQXZCO2dCQUNBcUIsRUFBRSxJQUFJWSxJQUFJLEdBQUdyQyxVQUFVLENBQUNJLEtBQUssRUFBTixDQUF2QjtjQUNIO1lBQ0o7O1lBRURvQixFQUFFLElBQUlRLFNBQU47WUFDQVAsRUFBRSxJQUFJTyxTQUFOO1lBRUFuQixPQUFPLEdBQUksQ0FBQ3ZkLEdBQUcsR0FBR21lLEVBQU4sR0FBV2hlLEdBQUcsR0FBRytkLEVBQWxCLElBQXdCZ0IsQ0FBbkM7WUFDQTFCLE9BQU8sR0FBSSxDQUFDeGQsR0FBRyxHQUFHa2UsRUFBTixHQUFXbmUsR0FBRyxHQUFHb2UsRUFBbEIsSUFBd0JlLENBQW5DO1lBRUEvQixNQUFNLElBQUlJLE9BQVY7WUFDQUgsTUFBTSxJQUFJSSxPQUFWO1lBQ0FqQyxPQUFPLENBQUM3bkIsQ0FBRCxDQUFQLEdBQWF5cEIsTUFBTSxHQUFHdkIsUUFBdEI7WUFDQUwsT0FBTyxDQUFDaGxCLENBQUQsQ0FBUCxHQUFhNm1CLE1BQU0sR0FBR3hCLFFBQXRCOztZQUVBLElBQUkyQixPQUFPLEdBQUdBLE9BQVYsR0FBb0JDLE9BQU8sR0FBR0EsT0FBOUIsSUFBeUNyTCxHQUE3QyxFQUFrRDtjQUM5QztZQUNIOztZQUVELElBQUltQixJQUFJLEdBQUcsQ0FBUCxJQUFZbGMsSUFBSSxDQUFDMEMsR0FBTCxDQUFTeWpCLE9BQU8sR0FBR0YsWUFBbkIsSUFBbUMsSUFBL0MsSUFDQWptQixJQUFJLENBQUMwQyxHQUFMLENBQVMwakIsT0FBTyxHQUFHRixZQUFuQixJQUFtQyxJQUR2QyxFQUM2QztjQUN6Qy9CLE9BQU8sQ0FBQzduQixDQUFELENBQVAsSUFBYzZwQixPQUFPLEdBQUcsR0FBeEI7Y0FDQWhDLE9BQU8sQ0FBQ2hsQixDQUFELENBQVAsSUFBY2luQixPQUFPLEdBQUcsR0FBeEI7Y0FDQTtZQUNIOztZQUVESCxZQUFZLEdBQUdFLE9BQWY7WUFDQUQsWUFBWSxHQUFHRSxPQUFmO1VBQ0g7UUFDSjtNQUNKOztNQUVELEtBQUtwcUIsS0FBTCxDQUFXc0csVUFBWCxDQUFzQjJpQixTQUF0QjtNQUNBLEtBQUtqcEIsS0FBTCxDQUFXc0csVUFBWCxDQUFzQjRpQixlQUF0QjtNQUNBLEtBQUtscEIsS0FBTCxDQUFXc0csVUFBWCxDQUFzQjZpQixjQUF0QjtJQUNIO0VBdE9MOztFQUFBO0FBQUEsRUFBMkQ1aEIsVUFBM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN3dGTyxJQUFNUixVQUFiLCtGQU1JLG9CQUFZb0IsQ0FBWixFQUF1QlksQ0FBdkIsRUFBa0NxYyxLQUFsQyxFQUFpRHFGLEtBQWpELEVBQWdFL0csS0FBaEUsRUFBNkU7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFDekUsSUFBSSxPQUFPdmIsQ0FBUCxLQUFhLFdBQWpCLEVBQThCO0lBQUVBLENBQUMsR0FBRyxDQUFKO0VBQVE7O0VBQ3hDLElBQUksT0FBT1ksQ0FBUCxLQUFhLFdBQWpCLEVBQThCO0lBQUVBLENBQUMsR0FBRyxDQUFKO0VBQVE7O0VBQ3hDLElBQUksT0FBT3FjLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7SUFBRUEsS0FBSyxHQUFHLENBQVI7RUFBWTs7RUFDaEQsSUFBSSxPQUFPcUYsS0FBUCxLQUFpQixXQUFyQixFQUFrQztJQUFFQSxLQUFLLEdBQUcsQ0FBUjtFQUFZOztFQUNoRCxJQUFJLE9BQU8vRyxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0lBQUVBLEtBQUssR0FBRyxDQUFDLEdBQVQ7RUFBZTs7RUFFbkQsS0FBS3ZiLENBQUwsR0FBU0EsQ0FBVDtFQUNBLEtBQUtZLENBQUwsR0FBU0EsQ0FBVDtFQUNBLEtBQUtxYyxLQUFMLEdBQWFBLEtBQWI7RUFDQSxLQUFLcUYsS0FBTCxHQUFhQSxLQUFiO0VBQ0EsS0FBSy9HLEtBQUwsR0FBYUEsS0FBYjtBQUNILENBbEJMOzs7Ozs7Ozs7Ozs7Ozs7QUNBTSxTQUFVL2MsSUFBVixDQUFlK1gsQ0FBZixFQUF5Q3dOLEVBQXpDLEVBQThEQyxFQUE5RCxFQUFtRjVULENBQW5GLEVBQXlGO0VBQzNGQSxDQUFDLEdBQUdtRyxDQUFDLENBQUN3TixFQUFELENBQUw7RUFDQXhOLENBQUMsQ0FBQ3dOLEVBQUQsQ0FBRCxHQUFReE4sQ0FBQyxDQUFDeU4sRUFBRCxDQUFUO0VBQ0F6TixDQUFDLENBQUN5TixFQUFELENBQUQsR0FBUTVULENBQVI7QUFDSDtBQUVLLFNBQVUzUixLQUFWLENBQWdCbkIsQ0FBaEIsRUFBMkJDLENBQTNCLEVBQW9DO0VBQ3RDRCxDQUFDLEdBQUd6QixJQUFJLENBQUMwQyxHQUFMLENBQVNqQixDQUFULENBQUo7RUFDQUMsQ0FBQyxHQUFHMUIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTaEIsQ0FBVCxDQUFKOztFQUNBLElBQUlELENBQUMsR0FBR0MsQ0FBUixFQUFXO0lBQ1BBLENBQUMsSUFBSUQsQ0FBTDtJQUNBLE9BQU9BLENBQUMsR0FBR3pCLElBQUksQ0FBQ2dGLElBQUwsQ0FBVSxNQUFNdEQsQ0FBQyxHQUFHQSxDQUFwQixDQUFYO0VBQ0g7O0VBQ0QsSUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBVztJQUNQRCxDQUFDLElBQUlDLENBQUw7SUFDQSxPQUFPQSxDQUFDLEdBQUcxQixJQUFJLENBQUNnRixJQUFMLENBQVUsTUFBTXZELENBQUMsR0FBR0EsQ0FBcEIsQ0FBWDtFQUNIOztFQUNELE9BQU8sR0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakJvQm9CO0VBQ2pCO0lBQUE7RUFBaUI7Ozs7V0FFakIsa0JBQVNxZ0IsQ0FBVCxFQUFzQmtGLEtBQXRCLEVBQW1DO01BQy9CLElBQUksT0FBT0EsS0FBUCxLQUFpQixXQUFyQixFQUFrQztRQUFFQSxLQUFLLEdBQUcsQ0FBUjtNQUFZOztNQUNoRCxJQUFJaG9CLEdBQUcsR0FBRzhpQixDQUFDLENBQUNyaUIsSUFBWjtNQUNBLElBQUlELElBQUksR0FBR3NpQixDQUFDLENBQUN0aUIsSUFBYjtNQUFBLElBQW1CRCxJQUFJLEdBQUd1aUIsQ0FBQyxDQUFDdmlCLElBQTVCO01BQUEsSUFBa0MwbkIsTUFBTSxHQUFJMW5CLElBQUksR0FBRyxDQUFSLEdBQWEsQ0FBeEQ7TUFDQSxJQUFJMm5CLEdBQUcsR0FBRzFuQixJQUFJLEdBQUdELElBQWpCO01BQ0EsSUFBSXZCLENBQUMsR0FBR2twQixHQUFSOztNQUNBLE9BQU8sRUFBRUEsR0FBRixJQUFTLENBQWhCO1FBQW1CbG9CLEdBQUcsQ0FBQ2tvQixHQUFELENBQUgsR0FBVyxHQUFYO01BQW5COztNQUNBQSxHQUFHLEdBQUdscEIsQ0FBTjtNQUNBQSxDQUFDLEdBQUcsQ0FBSjs7TUFDQSxPQUFPQSxDQUFDLEdBQUdrcEIsR0FBWCxFQUFnQjtRQUNabG9CLEdBQUcsQ0FBQ2hCLENBQUQsQ0FBSCxHQUFTZ3BCLEtBQVQ7UUFDQWhwQixDQUFDLEdBQUdBLENBQUMsR0FBR2lwQixNQUFSO01BQ0g7SUFDSjs7O1dBRUQsbUJBQVV4TSxFQUFWLEVBQXdCbkIsQ0FBeEIsRUFBbUM7TUFDL0IsSUFBSXBlLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZDLENBQUMsR0FBRyxDQUFmO01BQUEsSUFBa0JpZixLQUFLLEdBQUcxRCxDQUFDLENBQUM5WixJQUE1QjtNQUFBLElBQWtDeWQsS0FBSyxHQUFHM0QsQ0FBQyxDQUFDL1osSUFBNUM7TUFDQSxJQUFJd2IsRUFBRSxHQUFHLENBQVQ7TUFBQSxJQUFZb00sR0FBRyxHQUFHLENBQWxCO01BQUEsSUFBcUJDLEdBQUcsR0FBRyxDQUEzQjtNQUNBLElBQUloaUIsRUFBRSxHQUFHa1UsQ0FBQyxDQUFDN1osSUFBWDtNQUFBLElBQWlCNG5CLEdBQUcsR0FBRzVNLEVBQUUsQ0FBQ2hiLElBQTFCOztNQUVBLE9BQU92RSxDQUFDLEdBQUc4aEIsS0FBWCxFQUFrQm1LLEdBQUcsSUFBSSxDQUFQLEVBQVVwTSxFQUFFLElBQUlrQyxLQUFoQixFQUF1Qi9oQixDQUFDLEVBQTFDLEVBQThDO1FBQzFDa3NCLEdBQUcsR0FBR0QsR0FBTjs7UUFDQSxLQUFLcHBCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2tmLEtBQWhCLEVBQXVCbUssR0FBRyxJQUFJcEssS0FBUCxFQUFjamYsQ0FBQyxFQUF0QztVQUEwQ3NwQixHQUFHLENBQUNELEdBQUQsQ0FBSCxHQUFXaGlCLEVBQUUsQ0FBQzJWLEVBQUUsR0FBR2hkLENBQU4sQ0FBYjtRQUExQztNQUNIO0lBQ0o7OztXQUdELGtCQUFTdXBCLENBQVQsRUFBc0JoTyxDQUF0QixFQUFtQ3VDLENBQW5DLEVBQThDO01BQzFDLElBQUkzZ0IsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQkMsQ0FBQyxHQUFHLENBQXRCO01BQ0EsSUFBSXVwQixFQUFFLEdBQUcsQ0FBVDtNQUFBLElBQVlDLEVBQUUsR0FBRyxDQUFqQjtNQUFBLElBQW9CQyxFQUFFLEdBQUcsQ0FBekI7TUFBQSxJQUE0QkMsR0FBRyxHQUFHLENBQWxDO01BQUEsSUFBcUNDLEVBQUUsR0FBRyxDQUExQztNQUNBLElBQUkxSyxLQUFLLEdBQUczRCxDQUFDLENBQUMvWixJQUFkO01BQUEsSUFBb0J5ZCxLQUFLLEdBQUcxRCxDQUFDLENBQUM5WixJQUE5QjtNQUFBLElBQW9Db29CLEtBQUssR0FBRy9MLENBQUMsQ0FBQ3RjLElBQTlDO01BQ0EsSUFBSTZGLEVBQUUsR0FBR2tVLENBQUMsQ0FBQzdaLElBQVg7TUFBQSxJQUFpQjRGLEVBQUUsR0FBR3dXLENBQUMsQ0FBQ3BjLElBQXhCO01BQUEsSUFBOEJvb0IsRUFBRSxHQUFHUCxDQUFDLENBQUM3bkIsSUFBckM7TUFDQSxJQUFJdEIsR0FBRyxHQUFHLEdBQVY7O01BRUEsT0FBT2pELENBQUMsR0FBRzhoQixLQUFYLEVBQWtCdUssRUFBRSxJQUFJdEssS0FBTixFQUFhL2hCLENBQUMsRUFBaEMsRUFBb0M7UUFDaEMsS0FBS3dzQixHQUFHLEdBQUcsQ0FBTixFQUFTM3BCLENBQUMsR0FBRyxDQUFsQixFQUFxQkEsQ0FBQyxHQUFHNnBCLEtBQXpCLEVBQWdDRCxFQUFFLElBQUlELEdBQUcsRUFBUCxFQUFXM3BCLENBQUMsRUFBOUMsRUFBa0Q7VUFDOUMwcEIsRUFBRSxHQUFHQyxHQUFMO1VBQ0FGLEVBQUUsR0FBR0QsRUFBTDtVQUNBcHBCLEdBQUcsR0FBRyxHQUFOOztVQUNBLEtBQUtILENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lmLEtBQWhCLEVBQXVCdUssRUFBRSxJQUFJQyxFQUFFLElBQUlHLEtBQVYsRUFBaUI1cEIsQ0FBQyxFQUEzQyxFQUErQztZQUMzQ0csR0FBRyxJQUFJaUgsRUFBRSxDQUFDb2lCLEVBQUQsQ0FBRixHQUFTbmlCLEVBQUUsQ0FBQ29pQixFQUFELENBQWxCO1VBQ0g7O1VBQ0RJLEVBQUUsQ0FBQ0YsRUFBRCxDQUFGLEdBQVN4cEIsR0FBVDtRQUNIO01BQ0o7SUFDSjs7O1dBR0Qsc0JBQWFtcEIsQ0FBYixFQUEwQmhPLENBQTFCLEVBQXVDdUMsQ0FBdkMsRUFBa0Q7TUFDOUMsSUFBSTNnQixDQUFDLEdBQUcsQ0FBUjtNQUFBLElBQVc2QyxDQUFDLEdBQUcsQ0FBZjtNQUFBLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEI7TUFDQSxJQUFJdXBCLEVBQUUsR0FBRyxDQUFUO01BQUEsSUFBWUMsRUFBRSxHQUFHLENBQWpCO01BQUEsSUFBb0JDLEVBQUUsR0FBRyxDQUF6QjtNQUFBLElBQTRCRSxFQUFFLEdBQUcsQ0FBakM7TUFDQSxJQUFJMUssS0FBSyxHQUFHM0QsQ0FBQyxDQUFDL1osSUFBZDtNQUFBLElBQW9CeWQsS0FBSyxHQUFHMUQsQ0FBQyxDQUFDOVosSUFBOUI7TUFBQSxJQUFvQ3NvQixLQUFLLEdBQUdqTSxDQUFDLENBQUNyYyxJQUE5QztNQUNBLElBQUk0RixFQUFFLEdBQUdrVSxDQUFDLENBQUM3WixJQUFYO01BQUEsSUFBaUI0RixFQUFFLEdBQUd3VyxDQUFDLENBQUNwYyxJQUF4QjtNQUFBLElBQThCb29CLEVBQUUsR0FBR1AsQ0FBQyxDQUFDN25CLElBQXJDO01BQ0EsSUFBSXRCLEdBQUcsR0FBRyxHQUFWOztNQUVBLE9BQU9qRCxDQUFDLEdBQUc4aEIsS0FBWCxFQUFrQnVLLEVBQUUsSUFBSXRLLEtBQU4sRUFBYS9oQixDQUFDLEVBQWhDLEVBQW9DO1FBQ2hDLEtBQUt1c0IsRUFBRSxHQUFHLENBQUwsRUFBUTFwQixDQUFDLEdBQUcsQ0FBakIsRUFBb0JBLENBQUMsR0FBRytwQixLQUF4QixFQUErQkgsRUFBRSxJQUFJNXBCLENBQUMsRUFBdEMsRUFBMEM7VUFDdEN5cEIsRUFBRSxHQUFHRCxFQUFMO1VBQ0FwcEIsR0FBRyxHQUFHLEdBQU47O1VBQ0EsS0FBS0gsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHaWYsS0FBaEIsRUFBdUJ1SyxFQUFFLElBQUlDLEVBQUUsRUFBTixFQUFVenBCLENBQUMsRUFBcEMsRUFBd0M7WUFDcENHLEdBQUcsSUFBSWlILEVBQUUsQ0FBQ29pQixFQUFELENBQUYsR0FBU25pQixFQUFFLENBQUNvaUIsRUFBRCxDQUFsQjtVQUNIOztVQUNESSxFQUFFLENBQUNGLEVBQUQsQ0FBRixHQUFTeHBCLEdBQVQ7UUFDSDtNQUNKO0lBQ0o7OztXQUdELHNCQUFhbXBCLENBQWIsRUFBMEJoTyxDQUExQixFQUF1Q3VDLENBQXZDLEVBQWtEO01BQzlDLElBQUkzZ0IsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQkMsQ0FBQyxHQUFHLENBQXRCO01BQ0EsSUFBSXVwQixFQUFFLEdBQUcsQ0FBVDtNQUFBLElBQVlDLEVBQUUsR0FBRyxDQUFqQjtNQUFBLElBQW9CQyxFQUFFLEdBQUcsQ0FBekI7TUFBQSxJQUE0QkMsR0FBRyxHQUFHLENBQWxDO01BQUEsSUFBcUNDLEVBQUUsR0FBRyxDQUExQztNQUNBLElBQUkxSyxLQUFLLEdBQUczRCxDQUFDLENBQUMvWixJQUFkO01BQUEsSUFBb0J5ZCxLQUFLLEdBQUcxRCxDQUFDLENBQUM5WixJQUE5QjtNQUFBLElBQW9Db29CLEtBQUssR0FBRy9MLENBQUMsQ0FBQ3RjLElBQTlDO01BQ0EsSUFBSTZGLEVBQUUsR0FBR2tVLENBQUMsQ0FBQzdaLElBQVg7TUFBQSxJQUFpQjRGLEVBQUUsR0FBR3dXLENBQUMsQ0FBQ3BjLElBQXhCO01BQUEsSUFBOEJvb0IsRUFBRSxHQUFHUCxDQUFDLENBQUM3bkIsSUFBckM7TUFDQSxJQUFJdEIsR0FBRyxHQUFHLEdBQVY7O01BRUEsT0FBT2pELENBQUMsR0FBRytoQixLQUFYLEVBQWtCc0ssRUFBRSxJQUFJcnNCLENBQUMsRUFBekIsRUFBNkI7UUFDekIsS0FBS3dzQixHQUFHLEdBQUcsQ0FBTixFQUFTM3BCLENBQUMsR0FBRyxDQUFsQixFQUFxQkEsQ0FBQyxHQUFHNnBCLEtBQXpCLEVBQWdDRCxFQUFFLElBQUlELEdBQUcsRUFBUCxFQUFXM3BCLENBQUMsRUFBOUMsRUFBa0Q7VUFDOUMwcEIsRUFBRSxHQUFHQyxHQUFMO1VBQ0FGLEVBQUUsR0FBR0QsRUFBTDtVQUNBcHBCLEdBQUcsR0FBRyxHQUFOOztVQUNBLEtBQUtILENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2dmLEtBQWhCLEVBQXVCd0ssRUFBRSxJQUFJdkssS0FBTixFQUFhd0ssRUFBRSxJQUFJRyxLQUFuQixFQUEwQjVwQixDQUFDLEVBQWxELEVBQXNEO1lBQ2xERyxHQUFHLElBQUlpSCxFQUFFLENBQUNvaUIsRUFBRCxDQUFGLEdBQVNuaUIsRUFBRSxDQUFDb2lCLEVBQUQsQ0FBbEI7VUFDSDs7VUFDREksRUFBRSxDQUFDRixFQUFELENBQUYsR0FBU3hwQixHQUFUO1FBQ0g7TUFDSjtJQUNKOzs7V0FHRCxzQkFBYW1wQixDQUFiLEVBQTBCaE8sQ0FBMUIsRUFBcUM7TUFDakMsSUFBSXBlLENBQUMsR0FBRyxDQUFSO01BQUEsSUFBVzZDLENBQUMsR0FBRyxDQUFmO01BQUEsSUFBa0JDLENBQUMsR0FBRyxDQUF0QjtNQUNBLElBQUkrcEIsTUFBTSxHQUFHLENBQWI7TUFBQSxJQUFnQkMsR0FBRyxHQUFHLENBQXRCO01BQUEsSUFBeUJSLEVBQUUsR0FBRyxDQUE5QjtNQUFBLElBQWlDQyxFQUFFLEdBQUcsQ0FBdEM7TUFBQSxJQUF5Q1EsRUFBRSxHQUFHLENBQTlDO01BQUEsSUFBaURDLEdBQUcsR0FBRyxDQUF2RDtNQUNBLElBQUlqTCxLQUFLLEdBQUczRCxDQUFDLENBQUMvWixJQUFkO01BQUEsSUFBb0J5ZCxLQUFLLEdBQUcxRCxDQUFDLENBQUM5WixJQUE5QjtNQUNBLElBQUk0RixFQUFFLEdBQUdrVSxDQUFDLENBQUM3WixJQUFYO01BQUEsSUFBaUJvb0IsRUFBRSxHQUFHUCxDQUFDLENBQUM3bkIsSUFBeEI7TUFDQSxJQUFJdEIsR0FBRyxHQUFHLEdBQVY7O01BRUEsT0FBT2pELENBQUMsR0FBRzhoQixLQUFYLEVBQWtCK0ssTUFBTSxJQUFJL0ssS0FBSyxHQUFHLENBQWxCLEVBQXFCZ0wsR0FBRyxHQUFHUixFQUEzQixFQUErQnRzQixDQUFDLEVBQWxELEVBQXNEO1FBQ2xEK3NCLEVBQUUsR0FBR0YsTUFBTDtRQUNBRyxHQUFHLEdBQUdILE1BQU47UUFDQU4sRUFBRSxHQUFHTyxHQUFMOztRQUNBLEtBQUtqcUIsQ0FBQyxHQUFHN0MsQ0FBVCxFQUFZNkMsQ0FBQyxHQUFHaWYsS0FBaEIsRUFBdUJpTCxFQUFFLElBQUlDLEdBQUcsSUFBSWxMLEtBQVgsRUFBa0JqZixDQUFDLEVBQTVDLEVBQWdEO1VBQzVDeXBCLEVBQUUsR0FBR1EsR0FBTDtVQUNBN3BCLEdBQUcsR0FBRyxHQUFOOztVQUNBLEtBQUtILENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lmLEtBQWhCLEVBQXVCamYsQ0FBQyxFQUF4QixFQUE0QjtZQUN4QkcsR0FBRyxJQUFJaUgsRUFBRSxDQUFDb2lCLEVBQUUsRUFBSCxDQUFGLEdBQVdwaUIsRUFBRSxDQUFDcWlCLEVBQUUsRUFBSCxDQUFwQjtVQUNIOztVQUNESSxFQUFFLENBQUNJLEVBQUQsQ0FBRixHQUFTOXBCLEdBQVQ7VUFDQTBwQixFQUFFLENBQUNLLEdBQUQsQ0FBRixHQUFVL3BCLEdBQVY7UUFDSDtNQUNKO0lBQ0o7OztXQUdELHNCQUFhbXBCLENBQWIsRUFBMEJoTyxDQUExQixFQUFxQztNQUNqQyxJQUFJcGUsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXNkMsQ0FBQyxHQUFHLENBQWY7TUFBQSxJQUFrQkMsQ0FBQyxHQUFHLENBQXRCO01BQ0EsSUFBSWdxQixHQUFHLEdBQUcsQ0FBVjtNQUFBLElBQWFSLEVBQUUsR0FBRyxDQUFsQjtNQUFBLElBQXFCQyxFQUFFLEdBQUcsQ0FBMUI7TUFBQSxJQUE2QlUsR0FBRyxHQUFHLENBQW5DO01BQUEsSUFBc0NGLEVBQUUsR0FBRyxDQUEzQztNQUFBLElBQThDRyxJQUFJLEdBQUcsQ0FBckQ7TUFDQSxJQUFJbkwsS0FBSyxHQUFHM0QsQ0FBQyxDQUFDL1osSUFBZDtNQUFBLElBQW9CeWQsS0FBSyxHQUFHMUQsQ0FBQyxDQUFDOVosSUFBOUI7TUFDQSxJQUFJNEYsRUFBRSxHQUFHa1UsQ0FBQyxDQUFDN1osSUFBWDtNQUFBLElBQWlCb29CLEVBQUUsR0FBR1AsQ0FBQyxDQUFDN25CLElBQXhCO01BQ0EsSUFBSXRCLEdBQUcsR0FBRyxHQUFWOztNQUVBLE9BQU9qRCxDQUFDLEdBQUcraEIsS0FBWCxFQUFrQmtMLEdBQUcsSUFBSWxMLEtBQVAsRUFBYy9oQixDQUFDLEVBQWpDLEVBQXFDO1FBQ2pDOHNCLEdBQUcsR0FBRzlzQixDQUFOO1FBQ0FrdEIsSUFBSSxHQUFHRCxHQUFHLEdBQUdqdEIsQ0FBYjtRQUNBK3NCLEVBQUUsR0FBR0csSUFBTDs7UUFDQSxLQUFLcnFCLENBQUMsR0FBRzdDLENBQVQsRUFBWTZDLENBQUMsR0FBR2tmLEtBQWhCLEVBQXVCZ0wsRUFBRSxJQUFJRyxJQUFJLElBQUluTCxLQUFaLEVBQW1CbGYsQ0FBQyxFQUE3QyxFQUFpRDtVQUM3Q3lwQixFQUFFLEdBQUdRLEdBQUw7VUFDQVAsRUFBRSxHQUFHMXBCLENBQUw7VUFDQUksR0FBRyxHQUFHLEdBQU47O1VBQ0EsS0FBS0gsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZ2YsS0FBaEIsRUFBdUJ3SyxFQUFFLElBQUl2SyxLQUFOLEVBQWF3SyxFQUFFLElBQUl4SyxLQUFuQixFQUEwQmpmLENBQUMsRUFBbEQsRUFBc0Q7WUFDbERHLEdBQUcsSUFBSWlILEVBQUUsQ0FBQ29pQixFQUFELENBQUYsR0FBU3BpQixFQUFFLENBQUNxaUIsRUFBRCxDQUFsQjtVQUNIOztVQUNESSxFQUFFLENBQUNJLEVBQUQsQ0FBRixHQUFTOXBCLEdBQVQ7VUFDQTBwQixFQUFFLENBQUNPLElBQUQsQ0FBRixHQUFXanFCLEdBQVg7UUFDSDtNQUNKO0lBQ0o7OztXQUdELHNCQUFhMmpCLENBQWIsRUFBMEJrRixLQUExQixFQUF1QztNQUNuQyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7UUFBRUEsS0FBSyxHQUFHLENBQVI7TUFBWTs7TUFDaEQsSUFBSTVrQixFQUFFLEdBQUcwZixDQUFDLENBQUNyaUIsSUFBWDtNQUNBMkMsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUTRrQixLQUF4QjtNQUNBNWtCLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBeEI7TUFDQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUF4QjtJQUNIOzs7V0FFRCxvQkFBV1ksSUFBWCxFQUEyQkMsRUFBM0IsRUFBdUM7TUFDbkMsSUFBSXFXLENBQUMsR0FBR3RXLElBQUksQ0FBQ3ZELElBQWI7TUFBQSxJQUFtQjRvQixJQUFJLEdBQUdwbEIsRUFBRSxDQUFDeEQsSUFBN0I7TUFDQSxJQUFJZ1YsRUFBRSxHQUFHNkUsQ0FBQyxDQUFDLENBQUQsQ0FBVjtNQUNBLElBQUk1RSxFQUFFLEdBQUc0RSxDQUFDLENBQUMsQ0FBRCxDQUFWO01BQ0EsSUFBSTNFLEVBQUUsR0FBRzJFLENBQUMsQ0FBQyxDQUFELENBQVY7TUFDQSxJQUFJMUUsRUFBRSxHQUFHMEUsQ0FBQyxDQUFDLENBQUQsQ0FBVjtNQUNBLElBQUl2RSxFQUFFLEdBQUd1RSxDQUFDLENBQUMsQ0FBRCxDQUFWO01BRUEsSUFBSXRFLEVBQUUsR0FBR0QsRUFBRSxHQUFHTixFQUFkO01BQ0EsSUFBSVMsR0FBRyxHQUFHSCxFQUFFLEdBQUdKLEVBQWY7TUFDQSxJQUFJMlQsR0FBRyxHQUFHaFAsQ0FBQyxDQUFDLENBQUQsQ0FBWDtNQUNBLElBQUluRSxHQUFHLEdBQUdtRSxDQUFDLENBQUMsQ0FBRCxDQUFYO01BQ0EsSUFBSWxFLEdBQUcsR0FBR2tULEdBQUcsR0FBR25ULEdBQWhCO01BQ0EsSUFBSW9ULEdBQUcsR0FBR2pQLENBQUMsQ0FBQyxDQUFELENBQVg7TUFDQSxJQUFJaEUsR0FBRyxHQUFHZ1QsR0FBRyxHQUFHQyxHQUFoQjtNQUNBLElBQUloVCxHQUFHLEdBQUcrRCxDQUFDLENBQUMsQ0FBRCxDQUFYO01BQ0EsSUFBSTlELEdBQUcsR0FBR0QsR0FBRyxHQUFHSixHQUFoQjtNQUNBLElBQUlzQyxHQUFHLEdBQUdsQyxHQUFHLEdBQUdnVCxHQUFoQjtNQUNBLElBQUk1UyxHQUFHLEdBQUcsT0FBT1gsRUFBRSxHQUFHTixFQUFMLEdBQVVRLEdBQUcsR0FBR04sRUFBaEIsR0FBcUJRLEdBQUcsR0FBR1YsRUFBM0IsR0FBZ0NZLEdBQUcsR0FBR1YsRUFBdEMsR0FBMkNZLEdBQUcsR0FBR2IsRUFBakQsR0FBc0Q4QyxHQUFHLEdBQUdoRCxFQUFuRSxDQUFWO01BQ0E0VCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBQzVULEVBQUUsR0FBR0MsRUFBTCxHQUFVQyxFQUFFLEdBQUdDLEVBQWhCLElBQXNCZSxHQUFoQztNQUNBMFMsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEVBQUVsVCxHQUFHLEdBQUdULEVBQU4sR0FBVzZULEdBQUcsR0FBRzNULEVBQW5CLElBQXlCZSxHQUFuQztNQUNBMFMsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEVBQUUsQ0FBQ2xULEdBQUQsR0FBT1IsRUFBUCxHQUFZNFQsR0FBRyxHQUFHOVQsRUFBcEIsSUFBMEJrQixHQUFwQztNQUNBMFMsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEVBQUVDLEdBQUcsR0FBRzVULEVBQU4sR0FBV0MsRUFBRSxHQUFHWSxHQUFsQixJQUF5QkksR0FBbkM7TUFDQTBTLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxDQUFDdFQsRUFBRSxHQUFHTCxFQUFMLEdBQVUrQyxHQUFYLElBQWtCOUIsR0FBNUI7TUFDQTBTLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxFQUFFblQsR0FBRyxHQUFHSSxHQUFSLElBQWVLLEdBQXpCO01BQ0EwUyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsRUFBRSxDQUFDQyxHQUFELEdBQU8xVCxFQUFQLEdBQVlILEVBQUUsR0FBR2MsR0FBbkIsSUFBMEJJLEdBQXBDO01BQ0EwUyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsRUFBRXRULEVBQUUsR0FBR0gsRUFBTCxHQUFVWSxHQUFaLElBQW1CRyxHQUE3QjtNQUNBMFMsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQUNyVCxFQUFFLEdBQUdJLEdBQU4sSUFBYU8sR0FBdkI7SUFDSDs7O1dBR0Qsc0JBQWEyUixDQUFiLEVBQTBCaE8sQ0FBMUIsRUFBdUN1QyxDQUF2QyxFQUFrRDtNQUM5QyxJQUFJMk0sRUFBRSxHQUFHbEIsQ0FBQyxDQUFDN25CLElBQVg7TUFBQSxJQUFpQmdwQixFQUFFLEdBQUduUCxDQUFDLENBQUM3WixJQUF4QjtNQUFBLElBQThCaXBCLEVBQUUsR0FBRzdNLENBQUMsQ0FBQ3BjLElBQXJDO01BQ0EsSUFBSWtwQixJQUFJLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQWI7TUFBQSxJQUFrQkcsSUFBSSxHQUFHSCxFQUFFLENBQUMsQ0FBRCxDQUEzQjtNQUFBLElBQWdDSSxJQUFJLEdBQUdKLEVBQUUsQ0FBQyxDQUFELENBQXpDO01BQ0EsSUFBSUssSUFBSSxHQUFHTCxFQUFFLENBQUMsQ0FBRCxDQUFiO01BQUEsSUFBa0JNLElBQUksR0FBR04sRUFBRSxDQUFDLENBQUQsQ0FBM0I7TUFBQSxJQUFnQ08sSUFBSSxHQUFHUCxFQUFFLENBQUMsQ0FBRCxDQUF6QztNQUNBLElBQUlRLElBQUksR0FBR1IsRUFBRSxDQUFDLENBQUQsQ0FBYjtNQUFBLElBQWtCUyxJQUFJLEdBQUdULEVBQUUsQ0FBQyxDQUFELENBQTNCO01BQUEsSUFBZ0NVLElBQUksR0FBR1YsRUFBRSxDQUFDLENBQUQsQ0FBekM7TUFFQSxJQUFJVyxJQUFJLEdBQUdWLEVBQUUsQ0FBQyxDQUFELENBQWI7TUFBQSxJQUFrQlcsSUFBSSxHQUFHWCxFQUFFLENBQUMsQ0FBRCxDQUEzQjtNQUFBLElBQWdDWSxJQUFJLEdBQUdaLEVBQUUsQ0FBQyxDQUFELENBQXpDO01BQ0EsSUFBSWEsSUFBSSxHQUFHYixFQUFFLENBQUMsQ0FBRCxDQUFiO01BQUEsSUFBa0JjLElBQUksR0FBR2QsRUFBRSxDQUFDLENBQUQsQ0FBM0I7TUFBQSxJQUFnQ2UsSUFBSSxHQUFHZixFQUFFLENBQUMsQ0FBRCxDQUF6QztNQUNBLElBQUlnQixJQUFJLEdBQUdoQixFQUFFLENBQUMsQ0FBRCxDQUFiO01BQUEsSUFBa0JpQixJQUFJLEdBQUdqQixFQUFFLENBQUMsQ0FBRCxDQUEzQjtNQUFBLElBQWdDa0IsSUFBSSxHQUFHbEIsRUFBRSxDQUFDLENBQUQsQ0FBekM7TUFFQUYsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRyxJQUFJLEdBQUdTLElBQVAsR0FBY1IsSUFBSSxHQUFHVyxJQUFyQixHQUE0QlYsSUFBSSxHQUFHYSxJQUEzQztNQUNBbEIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRyxJQUFJLEdBQUdVLElBQVAsR0FBY1QsSUFBSSxHQUFHWSxJQUFyQixHQUE0QlgsSUFBSSxHQUFHYyxJQUEzQztNQUNBbkIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRyxJQUFJLEdBQUdXLElBQVAsR0FBY1YsSUFBSSxHQUFHYSxJQUFyQixHQUE0QlosSUFBSSxHQUFHZSxJQUEzQztNQUNBcEIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRTSxJQUFJLEdBQUdNLElBQVAsR0FBY0wsSUFBSSxHQUFHUSxJQUFyQixHQUE0QlAsSUFBSSxHQUFHVSxJQUEzQztNQUNBbEIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRTSxJQUFJLEdBQUdPLElBQVAsR0FBY04sSUFBSSxHQUFHUyxJQUFyQixHQUE0QlIsSUFBSSxHQUFHVyxJQUEzQztNQUNBbkIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRTSxJQUFJLEdBQUdRLElBQVAsR0FBY1AsSUFBSSxHQUFHVSxJQUFyQixHQUE0QlQsSUFBSSxHQUFHWSxJQUEzQztNQUNBcEIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRUyxJQUFJLEdBQUdHLElBQVAsR0FBY0YsSUFBSSxHQUFHSyxJQUFyQixHQUE0QkosSUFBSSxHQUFHTyxJQUEzQztNQUNBbEIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRUyxJQUFJLEdBQUdJLElBQVAsR0FBY0gsSUFBSSxHQUFHTSxJQUFyQixHQUE0QkwsSUFBSSxHQUFHUSxJQUEzQztNQUNBbkIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRUyxJQUFJLEdBQUdLLElBQVAsR0FBY0osSUFBSSxHQUFHTyxJQUFyQixHQUE0Qk4sSUFBSSxHQUFHUyxJQUEzQztJQUNIOzs7V0FFRCw0QkFBbUI5SCxDQUFuQixFQUE4QjtNQUMxQixJQUFJemQsRUFBRSxHQUFHeWQsQ0FBQyxDQUFDcmlCLElBQVg7TUFDQSxPQUFPNEUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFWLEdBQWdCQSxFQUFFLENBQUMsQ0FBRCxDQUFsQixHQUNIQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQVYsR0FBZ0JBLEVBQUUsQ0FBQyxDQUFELENBRGYsR0FFSEEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFWLEdBQWdCQSxFQUFFLENBQUMsQ0FBRCxDQUZmLEdBR0hBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBVixHQUFnQkEsRUFBRSxDQUFDLENBQUQsQ0FIZixHQUlIQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQVYsR0FBZ0JBLEVBQUUsQ0FBQyxDQUFELENBSmYsR0FLSEEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFWLEdBQWdCQSxFQUFFLENBQUMsQ0FBRCxDQUx0QjtJQU1IOzs7V0FFRCx5QkFBZ0J3bEIsR0FBaEIsRUFBNkJDLEdBQTdCLEVBQTBDQyxHQUExQyxFQUNJQyxHQURKLEVBQ2lCQyxHQURqQixFQUM4QkMsR0FEOUIsRUFFSUMsR0FGSixFQUVpQkMsR0FGakIsRUFFOEJDLEdBRjlCLEVBRXlDO01BQ3JDLE9BQU9SLEdBQUcsR0FBR0ksR0FBTixHQUFZSSxHQUFaLEdBQWtCUixHQUFHLEdBQUdLLEdBQU4sR0FBWUUsR0FBOUIsR0FDSEosR0FBRyxHQUFHRixHQUFOLEdBQVlPLEdBRFQsR0FDZUwsR0FBRyxHQUFHRCxHQUFOLEdBQVlLLEdBRDNCLEdBRUhELEdBQUcsR0FBR0wsR0FBTixHQUFZSSxHQUZULEdBRWVDLEdBQUcsR0FBR0osR0FBTixHQUFZRSxHQUZsQztJQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOTDtBQUNBO0FBQ0E7QUFPTyxJQUFNdm9CLFFBQWI7RUFRSSxrQkFBWXlNLENBQVosRUFBdUJ0QixDQUF2QixFQUFrQzBkLFVBQWxDLEVBQXNEQyxZQUF0RCxFQUEyRTtJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUN2RSxLQUFLcG9CLEVBQUwsR0FBVSxJQUFJbEYsMkRBQUosRUFBVjtJQUNBLEtBQUtHLElBQUwsR0FBWSxLQUFLK0UsRUFBTCxDQUFRRSxjQUFSLENBQXVCaW9CLFVBQXZCLElBQXFDLENBQWpEO0lBQ0EsS0FBS2pyQixPQUFMLEdBQWUsS0FBSzhDLEVBQUwsQ0FBUUcsWUFBUixDQUFxQmdvQixVQUFyQixJQUFtQyxDQUFsRDtJQUNBLEtBQUtockIsSUFBTCxHQUFZNE8sQ0FBQyxHQUFHLENBQWhCO0lBQ0EsS0FBSzNPLElBQUwsR0FBWXFOLENBQUMsR0FBRyxDQUFoQjs7SUFDQSxJQUFJLE9BQU8yZCxZQUFQLEtBQXdCLFdBQTVCLEVBQXlDO01BQ3JDLEtBQUtub0IsUUFBTDtJQUNILENBRkQsTUFFTztNQUNILEtBQUtvb0IsTUFBTCxHQUFjRCxZQUFkO01BRUEsS0FBSy9xQixJQUFMLEdBQVksS0FBS3BDLElBQUwsR0FBWTdCLHVFQUFaLEdBQW9DLEtBQUtpdkIsTUFBTCxDQUFZQyxFQUFoRCxHQUFzRCxLQUFLcnRCLElBQUwsR0FBWTdCLHdFQUFaLEdBQXFDLEtBQUtpdkIsTUFBTCxDQUFZMXBCLEdBQWpELEdBQXdELEtBQUsxRCxJQUFMLEdBQVk3Qix3RUFBWixHQUFxQyxLQUFLaXZCLE1BQUwsQ0FBWXBwQixHQUFqRCxHQUF1RCxLQUFLb3BCLE1BQUwsQ0FBWTdPLEdBQTdMO0lBQ0g7RUFDSjs7RUFyQkw7SUFBQTtJQUFBLE9Bc0JJLG9CQUFRO01BRUosT0FBTyxLQUFLbmMsSUFBWjtNQUNBLE9BQU8sS0FBS2dyQixNQUFaO01BRUEsS0FBS0EsTUFBTCxHQUFjLElBQUlILHNEQUFKLENBQVksS0FBSy9xQixJQUFMLEdBQVksS0FBSzZDLEVBQUwsQ0FBUUksbUJBQVIsQ0FBNEIsS0FBS25GLElBQWpDLENBQVosR0FBcUQsS0FBS2lDLE9BQTNELEdBQXNFLEtBQUtFLElBQXRGLENBQWQ7TUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS3BDLElBQUwsR0FBWTdCLHVFQUFaLEdBQW9DLEtBQUtpdkIsTUFBTCxDQUFZQyxFQUFoRCxHQUFzRCxLQUFLcnRCLElBQUwsR0FBWTdCLHdFQUFaLEdBQXFDLEtBQUtpdkIsTUFBTCxDQUFZMXBCLEdBQWpELEdBQXdELEtBQUsxRCxJQUFMLEdBQVk3Qix3RUFBWixHQUFxQyxLQUFLaXZCLE1BQUwsQ0FBWXBwQixHQUFqRCxHQUF1RCxLQUFLb3BCLE1BQUwsQ0FBWTdPLEdBQTdMO0lBQ0g7RUE3Qkw7SUFBQTtJQUFBLE9BOEJJLGlCQUFRK08sS0FBUixFQUFrQjtNQUNkLElBQUlDLEVBQUUsR0FBR0QsS0FBSyxDQUFDbHJCLElBQWY7TUFBQSxJQUFxQjZTLEVBQUUsR0FBRyxLQUFLN1MsSUFBL0I7TUFDQSxJQUFJdkUsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXdVIsQ0FBQyxHQUFJLEtBQUtsTixJQUFMLEdBQVksS0FBS0MsSUFBakIsR0FBd0IsS0FBS0YsT0FBOUIsR0FBeUMsQ0FBeEQ7O01BQ0EsT0FBT3BFLENBQUMsR0FBR3VSLENBQUMsR0FBRyxDQUFmLEVBQWtCdlIsQ0FBQyxJQUFJLENBQXZCLEVBQTBCO1FBQ3RCMHZCLEVBQUUsQ0FBQzF2QixDQUFELENBQUYsR0FBUW9YLEVBQUUsQ0FBQ3BYLENBQUQsQ0FBVjtRQUNBMHZCLEVBQUUsQ0FBQzF2QixDQUFDLEdBQUcsQ0FBTCxDQUFGLEdBQVlvWCxFQUFFLENBQUNwWCxDQUFDLEdBQUcsQ0FBTCxDQUFkO1FBQ0EwdkIsRUFBRSxDQUFDMXZCLENBQUMsR0FBRyxDQUFMLENBQUYsR0FBWW9YLEVBQUUsQ0FBQ3BYLENBQUMsR0FBRyxDQUFMLENBQWQ7UUFDQTB2QixFQUFFLENBQUMxdkIsQ0FBQyxHQUFHLENBQUwsQ0FBRixHQUFZb1gsRUFBRSxDQUFDcFgsQ0FBQyxHQUFHLENBQUwsQ0FBZDtNQUNIOztNQUNELE9BQU9BLENBQUMsR0FBR3VSLENBQVgsRUFBYyxFQUFFdlIsQ0FBaEIsRUFBbUI7UUFDZjB2QixFQUFFLENBQUMxdkIsQ0FBRCxDQUFGLEdBQVFvWCxFQUFFLENBQUNwWCxDQUFELENBQVY7TUFDSDtJQUNKO0VBMUNMO0lBQUE7SUFBQSxPQTJDSSxnQkFBT2lULENBQVAsRUFBa0J0QixDQUFsQixFQUE2QnhOLEVBQTdCLEVBQXVDO01BQ25DLElBQUksT0FBT0EsRUFBUCxLQUFjLFdBQWxCLEVBQStCO1FBQUVBLEVBQUUsR0FBRyxLQUFLQyxPQUFWO01BQW9COztNQUVyRCxJQUFJdXJCLFFBQVEsR0FBSTFjLENBQUMsR0FBRyxLQUFLL0wsRUFBTCxDQUFRSSxtQkFBUixDQUE0QixLQUFLbkYsSUFBakMsQ0FBSixHQUE2Q2dDLEVBQTlDLEdBQW9Ed04sQ0FBbkU7O01BQ0EsSUFBSWdlLFFBQVEsR0FBRyxLQUFLSixNQUFMLENBQVludkIsSUFBM0IsRUFBaUM7UUFDN0IsS0FBS2lFLElBQUwsR0FBWTRPLENBQVo7UUFDQSxLQUFLM08sSUFBTCxHQUFZcU4sQ0FBWjtRQUNBLEtBQUt2TixPQUFMLEdBQWVELEVBQWY7UUFDQSxLQUFLZ0QsUUFBTDtNQUNILENBTEQsTUFLTztRQUNILEtBQUs5QyxJQUFMLEdBQVk0TyxDQUFaO1FBQ0EsS0FBSzNPLElBQUwsR0FBWXFOLENBQVo7UUFDQSxLQUFLdk4sT0FBTCxHQUFlRCxFQUFmO01BQ0g7SUFDSjtFQXpETDs7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RPLElBQU00QyxlQUFiO0VBS0kseUJBQVkzRyxJQUFaLEVBQTBCdWxCLE1BQTFCLEVBQTBDbEgsR0FBMUMsRUFBdURtUixJQUF2RCxFQUFtRTtJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUFBOztJQUMvRCxJQUFJLE9BQU94dkIsSUFBUCxLQUFnQixXQUFwQixFQUFpQztNQUFFQSxJQUFJLEdBQUcsQ0FBUDtJQUFXOztJQUM5QyxJQUFJLE9BQU91bEIsTUFBUCxLQUFrQixXQUF0QixFQUFtQztNQUFFQSxNQUFNLEdBQUcsR0FBVDtJQUFlOztJQUNwRCxJQUFJLE9BQU9sSCxHQUFQLEtBQWUsV0FBbkIsRUFBZ0M7TUFBRUEsR0FBRyxHQUFHLEdBQU47SUFBWTs7SUFDOUMsSUFBSSxPQUFPbVIsSUFBUCxLQUFnQixXQUFwQixFQUFpQztNQUFFQSxJQUFJLEdBQUcsSUFBUDtJQUFjOztJQUVqRCxLQUFLeHZCLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUt1bEIsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS2xILEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUttUixJQUFMLEdBQVlBLElBQVo7RUFDSDs7RUFmTDtJQUFBO0lBQUEsT0FnQkksc0JBQWFDLElBQWIsRUFBMkI3SixTQUEzQixFQUE0QztNQUN4QyxJQUFJOEosR0FBRyxHQUFHcHNCLElBQUksQ0FBQ3FzQixHQUFMLENBQVMsSUFBSSxLQUFLSCxJQUFsQixDQUFWO01BQ0EsSUFBSUksS0FBSyxHQUFHdHNCLElBQUksQ0FBQ3FzQixHQUFMLENBQVMsSUFBSXJzQixJQUFJLENBQUN1c0IsR0FBTCxDQUFTLElBQUlKLElBQWIsRUFBbUIsS0FBS3p2QixJQUF4QixDQUFiLENBQVo7TUFDQSxPQUFPLENBQUM0dkIsS0FBSyxJQUFJLENBQVQsSUFBYyxDQUFDRixHQUFELElBQVE5SixTQUFTLEdBQUksQ0FBQ2dLLEtBQXBDLEdBQTZDaEssU0FBN0MsR0FBeUR0aUIsSUFBSSxDQUFDc04sS0FBTCxDQUFXOGUsR0FBRyxHQUFHRSxLQUFqQixDQUExRCxJQUFxRixDQUE1RjtJQUNIO0VBcEJMOztFQUFBO0FBQUE7QUFxQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDs7SUFNcUJ2d0I7RUFVakIsc0JBQVlVLGFBQVosRUFBaUM7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFDN0IsS0FBS0QsSUFBTCxHQUFZLElBQVo7SUFDQSxLQUFLcUUsSUFBTCxHQUFZLElBQUk2cUIsMkNBQUosQ0FBV2p2QixhQUFYLENBQVo7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS21FLElBQUwsQ0FBVW5FLElBQXRCO0lBQ0EsS0FBS212QixNQUFMLEdBQWMsS0FBS2hyQixJQUFMLENBQVVnckIsTUFBeEI7SUFDQSxLQUFLQyxFQUFMLEdBQVUsS0FBS2pyQixJQUFMLENBQVVpckIsRUFBcEI7SUFDQSxLQUFLM3BCLEdBQUwsR0FBVyxLQUFLdEIsSUFBTCxDQUFVc0IsR0FBckI7SUFDQSxLQUFLTSxHQUFMLEdBQVcsS0FBSzVCLElBQUwsQ0FBVTRCLEdBQXJCO0lBQ0EsS0FBS3VhLEdBQUwsR0FBVyxLQUFLbmMsSUFBTCxDQUFVbWMsR0FBckI7RUFDSDs7OztXQUNELGdCQUFPdmdCLGFBQVAsRUFBNEI7TUFDeEIsT0FBTyxLQUFLb0UsSUFBWjtNQUNBLEtBQUtBLElBQUwsR0FBWSxJQUFJNnFCLDJDQUFKLENBQVdqdkIsYUFBWCxDQUFaO01BQ0EsS0FBS0MsSUFBTCxHQUFZLEtBQUttRSxJQUFMLENBQVVuRSxJQUF0QjtNQUNBLEtBQUttdkIsTUFBTCxHQUFjLEtBQUtockIsSUFBTCxDQUFVZ3JCLE1BQXhCO01BQ0EsS0FBS0MsRUFBTCxHQUFVLEtBQUtqckIsSUFBTCxDQUFVaXJCLEVBQXBCO01BQ0EsS0FBSzNwQixHQUFMLEdBQVcsS0FBS3RCLElBQUwsQ0FBVXNCLEdBQXJCO01BQ0EsS0FBS00sR0FBTCxHQUFXLEtBQUs1QixJQUFMLENBQVU0QixHQUFyQjtNQUNBLEtBQUt1YSxHQUFMLEdBQVcsS0FBS25jLElBQUwsQ0FBVW1jLEdBQXJCO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJFLElBQU0wTyxNQUFiLCtGQU9JLGdCQUFZanZCLGFBQVosRUFBbUNvdkIsTUFBbkMsRUFBK0M7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFBQTs7RUFFM0MsS0FBS252QixJQUFMLEdBQVksQ0FBRUQsYUFBYSxHQUFHLENBQWpCLEdBQXNCLENBQXZCLElBQTRCLENBQUMsQ0FBekM7O0VBQ0EsSUFBSSxPQUFPb3ZCLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDL0IsS0FBS0EsTUFBTCxHQUFjLElBQUlXLFdBQUosQ0FBZ0IsS0FBSzl2QixJQUFyQixDQUFkO0VBQ0gsQ0FGRCxNQUVPO0lBQ0gsS0FBS212QixNQUFMLEdBQWNBLE1BQWQ7SUFDQSxLQUFLbnZCLElBQUwsR0FBWW12QixNQUFNLENBQUNwZCxNQUFuQjtFQUNIOztFQUNELEtBQUtxZCxFQUFMLEdBQVUsSUFBSXZILFVBQUosQ0FBZSxLQUFLc0gsTUFBcEIsQ0FBVjtFQUNBLEtBQUsxcEIsR0FBTCxHQUFXLElBQUkzRCxVQUFKLENBQWUsS0FBS3F0QixNQUFwQixDQUFYO0VBQ0EsS0FBS3BwQixHQUFMLEdBQVcsSUFBSWtMLFlBQUosQ0FBaUIsS0FBS2tlLE1BQXRCLENBQVg7RUFDQSxLQUFLN08sR0FBTCxHQUFXLElBQUl5UCxZQUFKLENBQWlCLEtBQUtaLE1BQXRCLENBQVg7QUFDSCxDQXBCTDs7Ozs7Ozs7Ozs7Ozs7QUNUTyxJQUFNN29CLGNBQWMsR0FBRyxDQUMxQixDQUQwQixFQUN4QixDQUFDLENBRHVCLEVBQ3BCLENBRG9CLEVBQ2xCLENBRGtCLEVBRTFCLENBRjBCLEVBRXhCLENBRndCLEVBRXJCLENBRnFCLEVBRW5CLENBQUMsRUFGa0IsRUFHMUIsQ0FBQyxFQUh5QixFQUd0QixDQUhzQixFQUduQixDQUFDLENBSGtCLEVBR2hCLENBSGdCLEVBSTFCLENBSjBCLEVBSXhCLENBQUMsRUFKdUIsRUFJbkIsRUFKbUIsRUFJaEIsQ0FBQyxFQUplLEVBSzFCLENBTDBCLEVBS3hCLENBQUMsRUFMdUIsRUFLbkIsQ0FMbUIsRUFLakIsRUFMaUIsRUFNMUIsQ0FOMEIsRUFNeEIsQ0FBQyxDQU51QixFQU1wQixDQU5vQixFQU1sQixDQU5rQixFQU8xQixDQUFDLENBUHlCLEVBT3ZCLENBQUMsRUFQc0IsRUFPbEIsQ0FBQyxDQVBpQixFQU9mLENBQUMsQ0FQYyxFQVExQixDQUFDLEVBUnlCLEVBUXRCLENBQUMsRUFScUIsRUFRakIsQ0FBQyxFQVJnQixFQVFiLENBQUMsQ0FSWSxFQVMxQixDQUFDLEVBVHlCLEVBU3RCLENBQUMsQ0FUcUIsRUFTbEIsQ0FBQyxFQVRpQixFQVNkLENBQUMsQ0FUYSxFQVUxQixFQVYwQixFQVV2QixDQVZ1QixFQVVwQixFQVZvQixFQVVqQixDQVZpQixFQVcxQixDQUFDLEVBWHlCLEVBV3RCLENBQUMsQ0FYcUIsRUFXbEIsQ0FBQyxDQVhpQixFQVdmLENBQUMsQ0FYYyxFQVkxQixDQUFDLEVBWnlCLEVBWXRCLENBWnNCLEVBWW5CLENBQUMsQ0Faa0IsRUFZaEIsRUFaZ0IsRUFhMUIsQ0FiMEIsRUFheEIsQ0Fid0IsRUFhckIsRUFicUIsRUFhbEIsQ0Fia0IsRUFjMUIsQ0FBQyxDQWR5QixFQWN2QixDQUFDLENBZHNCLEVBY25CLENBQUMsQ0Fka0IsRUFjaEIsQ0FkZ0IsRUFlMUIsQ0FBQyxFQWZ5QixFQWV0QixDQWZzQixFQWVuQixDQUFDLEVBZmtCLEVBZWYsQ0FBQyxDQWZjLEVBZ0IxQixDQUFDLENBaEJ5QixFQWdCdkIsQ0FoQnVCLEVBZ0JwQixDQUFDLENBaEJtQixFQWdCakIsQ0FoQmlCLEVBaUIxQixFQWpCMEIsRUFpQnZCLENBQUMsQ0FqQnNCLEVBaUJuQixFQWpCbUIsRUFpQmhCLENBQUMsQ0FqQmUsRUFrQjFCLENBQUMsQ0FsQnlCLEVBa0J2QixDQWxCdUIsRUFrQnBCLENBQUMsQ0FsQm1CLEVBa0JqQixFQWxCaUIsRUFtQjFCLENBQUMsQ0FuQnlCLEVBbUJ2QixDQUFDLEVBbkJzQixFQW1CbEIsQ0FBQyxDQW5CaUIsRUFtQmYsQ0FBQyxDQW5CYyxFQW9CMUIsRUFwQjBCLEVBb0J2QixDQUFDLEVBcEJzQixFQW9CbEIsRUFwQmtCLEVBb0JmLENBQUMsQ0FwQmMsRUFxQjFCLENBckIwQixFQXFCeEIsQ0FyQndCLEVBcUJyQixDQXJCcUIsRUFxQm5CLENBckJtQixFQXNCMUIsQ0F0QjBCLEVBc0J4QixDQUFDLENBdEJ1QixFQXNCcEIsRUF0Qm9CLEVBc0JqQixDQUFDLENBdEJnQixFQXVCMUIsQ0F2QjBCLEVBdUJ4QixDQUFDLENBdkJ1QixFQXVCcEIsQ0F2Qm9CLEVBdUJsQixFQXZCa0IsRUF3QjFCLENBQUMsQ0F4QnlCLEVBd0J2QixDQUFDLENBeEJzQixFQXdCbkIsQ0FBQyxDQXhCa0IsRUF3QmhCLENBQUMsQ0F4QmUsRUF5QjFCLENBQUMsQ0F6QnlCLEVBeUJ2QixFQXpCdUIsRUF5Qm5CLENBQUMsQ0F6QmtCLEVBeUJoQixDQUFDLEVBekJlLEVBMEIxQixDQUFDLEVBMUJ5QixFQTBCdEIsRUExQnNCLEVBMEJsQixDQUFDLENBMUJpQixFQTBCZixFQTFCZSxFQTJCMUIsQ0FBQyxDQTNCeUIsRUEyQnZCLENBM0J1QixFQTJCcEIsQ0FBQyxDQTNCbUIsRUEyQmpCLENBQUMsQ0EzQmdCLEVBNEIxQixDQUFDLENBNUJ5QixFQTRCdkIsQ0E1QnVCLEVBNEJwQixDQUFDLENBNUJtQixFQTRCakIsQ0E1QmlCLEVBNkIxQixDQUFDLEVBN0J5QixFQTZCdEIsQ0FBQyxFQTdCcUIsRUE2QmpCLENBQUMsQ0E3QmdCLEVBNkJkLEVBN0JjLEVBOEIxQixDQTlCMEIsRUE4QnhCLENBQUMsRUE5QnVCLEVBOEJuQixDQTlCbUIsRUE4QmpCLENBQUMsQ0E5QmdCLEVBK0IxQixDQS9CMEIsRUErQnhCLENBQUMsQ0EvQnVCLEVBK0JwQixDQS9Cb0IsRUErQmxCLENBQUMsQ0EvQmlCLEVBZ0MxQixDQWhDMEIsRUFnQ3hCLENBaEN3QixFQWdDckIsQ0FoQ3FCLEVBZ0NuQixDQUFDLENBaENrQixFQWlDMUIsQ0FqQzBCLEVBaUN4QixFQWpDd0IsRUFpQ3BCLEVBakNvQixFQWlDakIsQ0FBQyxFQWpDZ0IsRUFrQzFCLENBbEMwQixFQWtDeEIsQ0FsQ3dCLEVBa0NyQixDQWxDcUIsRUFrQ25CLEVBbENtQixFQW1DMUIsQ0FuQzBCLEVBbUN4QixDQUFDLENBbkN1QixFQW1DcEIsQ0FuQ29CLEVBbUNsQixDQW5Da0IsRUFvQzFCLENBQUMsQ0FwQ3lCLEVBb0N2QixDQUFDLEVBcENzQixFQW9DbEIsQ0FBQyxDQXBDaUIsRUFvQ2YsQ0FwQ2UsRUFxQzFCLENBQUMsQ0FyQ3lCLEVBcUN2QixDQUFDLENBckNzQixFQXFDbkIsQ0FBQyxDQXJDa0IsRUFxQ2hCLENBQUMsRUFyQ2UsRUFzQzFCLENBdEMwQixFQXNDeEIsRUF0Q3dCLEVBc0NwQixDQXRDb0IsRUFzQ2xCLEVBdENrQixFQXVDMUIsQ0F2QzBCLEVBdUN4QixDQUFDLENBdkN1QixFQXVDcEIsQ0F2Q29CLEVBdUNsQixDQUFDLEVBdkNpQixFQXdDMUIsQ0FBQyxFQXhDeUIsRUF3Q3RCLENBQUMsQ0F4Q3FCLEVBd0NsQixDQUFDLENBeENpQixFQXdDZixDQXhDZSxFQXlDMUIsQ0FBQyxDQXpDeUIsRUF5Q3ZCLENBQUMsQ0F6Q3NCLEVBeUNuQixDQUFDLENBekNrQixFQXlDaEIsQ0F6Q2dCLEVBMEMxQixDQUFDLENBMUN5QixFQTBDdkIsQ0ExQ3VCLEVBMENwQixDQUFDLENBMUNtQixFQTBDakIsQ0FBQyxDQTFDZ0IsRUEyQzFCLENBM0MwQixFQTJDeEIsRUEzQ3dCLEVBMkNwQixFQTNDb0IsRUEyQ2pCLENBM0NpQixFQTRDMUIsQ0E1QzBCLEVBNEN4QixDQTVDd0IsRUE0Q3JCLENBNUNxQixFQTRDbkIsQ0E1Q21CLEVBNkMxQixDQTdDMEIsRUE2Q3hCLENBQUMsQ0E3Q3VCLEVBNkNwQixFQTdDb0IsRUE2Q2pCLENBQUMsRUE3Q2dCLEVBOEMxQixDQUFDLEVBOUN5QixFQThDdEIsQ0FBQyxDQTlDcUIsRUE4Q2xCLENBQUMsRUE5Q2lCLEVBOENkLENBOUNjLEVBK0MxQixFQS9DMEIsRUErQ3ZCLENBL0N1QixFQStDcEIsRUEvQ29CLEVBK0NqQixDQS9DaUIsRUFnRDFCLENBQUMsQ0FoRHlCLEVBZ0R2QixDQUFDLENBaERzQixFQWdEbkIsQ0FBQyxDQWhEa0IsRUFnRGhCLEVBaERnQixFQWlEMUIsRUFqRDBCLEVBaUR2QixDQUFDLENBakRzQixFQWlEbkIsRUFqRG1CLEVBaURoQixDQUFDLENBakRlLEVBa0QxQixDQUFDLEVBbER5QixFQWtEdEIsQ0FsRHNCLEVBa0RuQixDQUFDLENBbERrQixFQWtEaEIsQ0FBQyxFQWxEZSxFQW1EMUIsQ0FBQyxFQW5EeUIsRUFtRHRCLENBbkRzQixFQW1EbkIsQ0FBQyxDQW5Ea0IsRUFtRGhCLENBQUMsQ0FuRGUsRUFvRDFCLENBcEQwQixFQW9EeEIsQ0FwRHdCLEVBb0RyQixDQXBEcUIsRUFvRG5CLENBcERtQixFQXFEMUIsQ0FyRDBCLEVBcUR4QixDQXJEd0IsRUFxRHJCLEVBckRxQixFQXFEbEIsQ0FBQyxDQXJEaUIsRUFzRDFCLENBQUMsQ0F0RHlCLEVBc0R2QixDQXREdUIsRUFzRHBCLENBdERvQixFQXNEbEIsQ0FBQyxFQXREaUIsRUF1RDFCLENBdkQwQixFQXVEeEIsQ0FBQyxFQXZEdUIsRUF1RG5CLENBdkRtQixFQXVEakIsQ0F2RGlCLEVBd0QxQixDQXhEMEIsRUF3RHhCLENBQUMsQ0F4RHVCLEVBd0RwQixDQXhEb0IsRUF3RGxCLENBQUMsRUF4RGlCLEVBeUQxQixDQUFDLEVBekR5QixFQXlEdEIsQ0F6RHNCLEVBeURuQixDQUFDLEVBekRrQixFQXlEZixDQXpEZSxFQTBEMUIsQ0FBQyxFQTFEeUIsRUEwRHRCLENBQUMsQ0ExRHFCLEVBMERsQixDQUFDLEVBMURpQixFQTBEZCxFQTFEYyxFQTJEMUIsQ0FBQyxFQTNEeUIsRUEyRHRCLENBM0RzQixFQTJEbkIsQ0FBQyxFQTNEa0IsRUEyRGYsQ0EzRGUsRUE0RDFCLENBQUMsQ0E1RHlCLEVBNER2QixFQTVEdUIsRUE0RG5CLENBQUMsQ0E1RGtCLEVBNERoQixDQTVEZ0IsRUE2RDFCLENBN0QwQixFQTZEeEIsQ0FBQyxFQTdEdUIsRUE2RG5CLEVBN0RtQixFQTZEaEIsQ0E3RGdCLEVBOEQxQixDQUFDLENBOUR5QixFQThEdkIsQ0FBQyxDQTlEc0IsRUE4RG5CLENBQUMsQ0E5RGtCLEVBOERoQixDQUFDLENBOURlLEVBK0QxQixDQUFDLENBL0R5QixFQStEdkIsQ0FBQyxDQS9Ec0IsRUErRG5CLENBL0RtQixFQStEakIsRUEvRGlCLEVBZ0UxQixDQUFDLEVBaEV5QixFQWdFdEIsQ0FoRXNCLEVBZ0VuQixDQUFDLENBaEVrQixFQWdFaEIsQ0FoRWdCLEVBaUUxQixDQWpFMEIsRUFpRXhCLENBQUMsRUFqRXVCLEVBaUVuQixDQWpFbUIsRUFpRWpCLENBQUMsRUFqRWdCLEVBa0UxQixDQUFDLENBbEV5QixFQWtFdkIsQ0FBQyxDQWxFc0IsRUFrRW5CLENBQUMsQ0FsRWtCLEVBa0VoQixDQWxFZ0IsRUFtRTFCLENBQUMsQ0FuRXlCLEVBbUV2QixDQUFDLENBbkVzQixFQW1FbkIsQ0FBQyxDQW5Fa0IsRUFtRWhCLENBQUMsQ0FuRWUsRUFvRTFCLENBcEUwQixFQW9FeEIsQ0FwRXdCLEVBb0VyQixDQXBFcUIsRUFvRW5CLENBQUMsRUFwRWtCLEVBcUUxQixDQUFDLEVBckV5QixFQXFFdEIsQ0FBQyxFQXJFcUIsRUFxRWpCLENBQUMsQ0FyRWdCLEVBcUVkLENBQUMsRUFyRWEsRUFzRTFCLENBQUMsQ0F0RXlCLEVBc0V2QixDQXRFdUIsRUFzRXBCLENBdEVvQixFQXNFbEIsQ0FBQyxDQXRFaUIsRUF1RTFCLENBdkUwQixFQXVFeEIsQ0FBQyxDQXZFdUIsRUF1RXBCLENBdkVvQixFQXVFbEIsQ0F2RWtCLEVBd0UxQixDQUFDLENBeEV5QixFQXdFdkIsQ0FBQyxFQXhFc0IsRUF3RWxCLENBQUMsQ0F4RWlCLEVBd0VmLEVBeEVlLEVBeUUxQixDQUFDLENBekV5QixFQXlFdkIsQ0FBQyxDQXpFc0IsRUF5RW5CLENBQUMsQ0F6RWtCLEVBeUVoQixDQXpFZ0IsRUEwRTFCLENBQUMsRUExRXlCLEVBMEV0QixDQUFDLEVBMUVxQixFQTBFakIsQ0FBQyxDQTFFZ0IsRUEwRWQsQ0FBQyxDQTFFYSxFQTJFMUIsRUEzRTBCLEVBMkV2QixDQTNFdUIsRUEyRXBCLEVBM0VvQixFQTJFakIsQ0FBQyxDQTNFZ0IsRUE0RTFCLENBNUUwQixFQTRFeEIsRUE1RXdCLEVBNEVwQixFQTVFb0IsRUE0RWpCLEVBNUVpQixFQTZFMUIsQ0FBQyxDQTdFeUIsRUE2RXZCLENBQUMsRUE3RXNCLEVBNkVsQixDQUFDLENBN0VpQixFQTZFZixDQTdFZSxFQThFMUIsQ0FBQyxDQTlFeUIsRUE4RXZCLENBOUV1QixFQThFcEIsQ0FBQyxDQTlFbUIsRUE4RWpCLENBOUVpQixFQStFMUIsQ0EvRTBCLEVBK0V4QixDQUFDLENBL0V1QixFQStFcEIsRUEvRW9CLEVBK0VqQixDQS9FaUIsRUFnRjFCLENBQUMsQ0FoRnlCLEVBZ0Z2QixDQWhGdUIsRUFnRnBCLENBQUMsQ0FoRm1CLEVBZ0ZqQixDQWhGaUIsRUFpRjFCLENBQUMsRUFqRnlCLEVBaUZ0QixFQWpGc0IsRUFpRmxCLENBQUMsRUFqRmlCLEVBaUZkLENBakZjLEVBa0YxQixDQUFDLENBbEZ5QixFQWtGdkIsQ0FsRnVCLEVBa0ZwQixDQUFDLENBbEZtQixFQWtGakIsQ0FBQyxDQWxGZ0IsRUFtRjFCLENBbkYwQixFQW1GeEIsQ0FBQyxDQW5GdUIsRUFtRnBCLEVBbkZvQixFQW1GakIsQ0FBQyxDQW5GZ0IsRUFvRjFCLENBQUMsRUFwRnlCLEVBb0Z0QixDQUFDLENBcEZxQixFQW9GbEIsQ0FBQyxFQXBGaUIsRUFvRmQsQ0FBQyxFQXBGYSxFQXFGMUIsQ0FyRjBCLEVBcUZ4QixDQUFDLENBckZ1QixFQXFGcEIsRUFyRm9CLEVBcUZqQixFQXJGaUIsRUFzRjFCLENBdEYwQixFQXNGeEIsQ0FBQyxDQXRGdUIsRUFzRnBCLENBdEZvQixFQXNGbEIsQ0F0RmtCLEVBdUYxQixDQUFDLENBdkZ5QixFQXVGdkIsQ0F2RnVCLEVBdUZwQixDQUFDLENBdkZtQixFQXVGakIsQ0FBQyxFQXZGZ0IsRUF3RjFCLENBQUMsQ0F4RnlCLEVBd0Z2QixDQUFDLEVBeEZzQixFQXdGbEIsQ0F4RmtCLEVBd0ZoQixDQXhGZ0IsRUF5RjFCLENBekYwQixFQXlGeEIsQ0F6RndCLEVBeUZyQixDQXpGcUIsRUF5Rm5CLENBQUMsQ0F6RmtCLEVBMEYxQixDQTFGMEIsRUEwRnhCLENBQUMsQ0ExRnVCLEVBMEZwQixDQTFGb0IsRUEwRmxCLEVBMUZrQixFQTJGMUIsQ0EzRjBCLEVBMkZ4QixDQTNGd0IsRUEyRnJCLEVBM0ZxQixFQTJGbEIsQ0EzRmtCLEVBNEYxQixDQUFDLENBNUZ5QixFQTRGdkIsQ0FBQyxDQTVGc0IsRUE0Rm5CLENBQUMsQ0E1RmtCLEVBNEZoQixDQTVGZ0IsRUE2RjFCLENBQUMsRUE3RnlCLEVBNkZ0QixDQUFDLEVBN0ZxQixFQTZGakIsQ0FBQyxFQTdGZ0IsRUE2RmIsQ0E3RmEsRUE4RjFCLENBOUYwQixFQThGeEIsQ0E5RndCLEVBOEZyQixFQTlGcUIsRUE4RmxCLEVBOUZrQixFQStGMUIsRUEvRjBCLEVBK0Z2QixDQUFDLENBL0ZzQixFQStGbkIsRUEvRm1CLEVBK0ZoQixDQS9GZ0IsRUFnRzFCLENBaEcwQixFQWdHeEIsQ0FoR3dCLEVBZ0dyQixDQWhHcUIsRUFnR25CLEVBaEdtQixFQWlHMUIsQ0FqRzBCLEVBaUd4QixDQUFDLEVBakd1QixFQWlHbkIsQ0FqR21CLEVBaUdqQixFQWpHaUIsRUFrRzFCLENBbEcwQixFQWtHeEIsQ0FBQyxFQWxHdUIsRUFrR25CLENBbEdtQixFQWtHakIsQ0FsR2lCLEVBbUcxQixDQW5HMEIsRUFtR3hCLENBbkd3QixFQW1HckIsQ0FuR3FCLEVBbUduQixDQUFDLENBbkdrQixFQW9HMUIsQ0FwRzBCLEVBb0d4QixDQXBHd0IsRUFvR3JCLEVBcEdxQixFQW9HbEIsQ0FBQyxFQXBHaUIsRUFxRzFCLENBckcwQixFQXFHeEIsQ0FBQyxFQXJHdUIsRUFxR25CLEVBckdtQixFQXFHaEIsQ0FyR2dCLEVBc0cxQixDQUFDLENBdEd5QixFQXNHdkIsQ0F0R3VCLEVBc0dwQixDQUFDLENBdEdtQixFQXNHakIsQ0F0R2lCLEVBdUcxQixDQUFDLEVBdkd5QixFQXVHdEIsRUF2R3NCLEVBdUdsQixDQUFDLENBdkdpQixFQXVHZixDQUFDLENBdkdjLEVBd0cxQixDQXhHMEIsRUF3R3hCLEVBeEd3QixFQXdHcEIsQ0F4R29CLEVBd0dsQixDQUFDLENBeEdpQixFQXlHMUIsQ0F6RzBCLEVBeUd4QixDQUFDLENBekd1QixFQXlHcEIsQ0F6R29CLEVBeUdsQixDQUFDLENBekdpQixFQTBHMUIsQ0ExRzBCLEVBMEd4QixDQTFHd0IsRUEwR3JCLENBMUdxQixFQTBHbkIsQ0FBQyxDQTFHa0IsRUEyRzFCLENBM0cwQixFQTJHeEIsQ0EzR3dCLEVBMkdyQixFQTNHcUIsRUEyR2xCLENBM0drQixFQTRHMUIsQ0E1RzBCLEVBNEd4QixDQUFDLENBNUd1QixFQTRHcEIsQ0E1R29CLEVBNEdsQixDQUFDLENBNUdpQixFQTZHMUIsQ0E3RzBCLEVBNkd4QixDQTdHd0IsRUE2R3JCLENBN0dxQixFQTZHbkIsQ0E3R21CLEVBOEcxQixDQUFDLEVBOUd5QixFQThHdEIsQ0FBQyxDQTlHcUIsRUE4R2xCLENBQUMsQ0E5R2lCLEVBOEdmLENBQUMsQ0E5R2MsRUErRzFCLENBQUMsRUEvR3lCLEVBK0d0QixFQS9Hc0IsRUErR2xCLENBQUMsQ0EvR2lCLEVBK0dmLEVBL0dlLEVBZ0gxQixDQUFDLENBaEh5QixFQWdIdkIsQ0FBQyxDQWhIc0IsRUFnSG5CLENBQUMsQ0FoSGtCLEVBZ0hoQixFQWhIZ0IsRUFpSDFCLENBQUMsRUFqSHlCLEVBaUh0QixDQWpIc0IsRUFpSG5CLENBQUMsQ0FqSGtCLEVBaUhoQixDQWpIZ0IsRUFrSDFCLENBbEgwQixFQWtIeEIsQ0FBQyxDQWxIdUIsRUFrSHBCLEVBbEhvQixFQWtIakIsQ0FBQyxDQWxIZ0IsRUFtSDFCLENBbkgwQixFQW1IeEIsQ0FBQyxDQW5IdUIsRUFtSHBCLENBbkhvQixFQW1IbEIsQ0FBQyxFQW5IaUIsRUFvSDFCLENBQUMsRUFwSHlCLEVBb0h0QixFQXBIc0IsRUFvSGxCLENBQUMsQ0FwSGlCLEVBb0hmLENBcEhlLEVBcUgxQixDQXJIMEIsRUFxSHhCLENBQUMsQ0FySHVCLEVBcUhwQixDQXJIb0IsRUFxSGxCLENBckhrQixFQXNIMUIsQ0FBQyxDQXRIeUIsRUFzSHZCLENBdEh1QixFQXNIcEIsQ0FBQyxDQXRIbUIsRUFzSGpCLEVBdEhpQixFQXVIMUIsQ0FBQyxDQXZIeUIsRUF1SHZCLENBQUMsQ0F2SHNCLEVBdUhuQixDQUFDLENBdkhrQixFQXVIaEIsQ0F2SGdCLEVBd0gxQixDQXhIMEIsRUF3SHhCLENBQUMsQ0F4SHVCLEVBd0hwQixFQXhIb0IsRUF3SGpCLEVBeEhpQixFQXlIMUIsQ0FBQyxDQXpIeUIsRUF5SHZCLENBQUMsRUF6SHNCLEVBeUhsQixDQUFDLENBekhpQixFQXlIZixDQUFDLENBekhjLEVBMEgxQixDQUFDLENBMUh5QixFQTBIdkIsQ0FBQyxFQTFIc0IsRUEwSGxCLENBQUMsQ0ExSGlCLEVBMEhmLENBQUMsQ0ExSGMsRUEySDFCLENBM0gwQixFQTJIeEIsQ0FBQyxDQTNIdUIsRUEySHBCLENBM0hvQixFQTJIbEIsQ0FBQyxFQTNIaUIsRUE0SDFCLENBQUMsQ0E1SHlCLEVBNEh2QixDQUFDLEVBNUhzQixFQTRIbEIsQ0FBQyxDQTVIaUIsRUE0SGYsQ0E1SGUsRUE2SDFCLENBN0gwQixFQTZIeEIsQ0FBQyxDQTdIdUIsRUE2SHBCLENBN0hvQixFQTZIbEIsQ0FBQyxDQTdIaUIsRUE4SDFCLENBOUgwQixFQThIeEIsQ0FBQyxDQTlIdUIsRUE4SHBCLENBOUhvQixFQThIbEIsQ0E5SGtCLEVBK0gxQixDQUFDLENBL0h5QixFQStIdkIsQ0EvSHVCLEVBK0hwQixDQUFDLENBL0htQixFQStIakIsQ0FBQyxDQS9IZ0IsRUFnSTFCLEVBaEkwQixFQWdJdkIsQ0FBQyxDQWhJc0IsRUFnSW5CLEVBaEltQixFQWdJaEIsQ0FBQyxFQWhJZSxFQWlJMUIsQ0FBQyxFQWpJeUIsRUFpSXRCLENBQUMsQ0FqSXFCLEVBaUlsQixDQUFDLENBaklpQixFQWlJZixDQWpJZSxFQWtJMUIsQ0FsSTBCLEVBa0l4QixDQWxJd0IsRUFrSXJCLENBbElxQixFQWtJbkIsRUFsSW1CLEVBbUkxQixDQW5JMEIsRUFtSXhCLENBbkl3QixFQW1JckIsRUFuSXFCLEVBbUlsQixDQW5Ja0IsRUFvSTFCLENBcEkwQixFQW9JeEIsQ0FBQyxDQXBJdUIsRUFvSXBCLENBcElvQixFQW9JbEIsQ0FwSWtCLEVBcUkxQixDQUFDLENBckl5QixFQXFJdkIsRUFySXVCLEVBcUluQixDQUFDLENBcklrQixFQXFJaEIsQ0FBQyxFQXJJZSxFQXNJMUIsQ0F0STBCLEVBc0l4QixDQXRJd0IsRUFzSXJCLENBdElxQixFQXNJbkIsRUF0SW1CLEVBdUkxQixDQUFDLENBdkl5QixFQXVJdkIsQ0F2SXVCLEVBdUlwQixDQXZJb0IsRUF1SWxCLENBdklrQixFQXdJMUIsQ0F4STBCLEVBd0l4QixFQXhJd0IsRUF3SXBCLENBeElvQixFQXdJbEIsQ0FBQyxDQXhJaUIsRUF5STFCLENBekkwQixFQXlJeEIsQ0F6SXdCLEVBeUlyQixDQXpJcUIsRUF5SW5CLENBQUMsQ0F6SWtCLEVBMEkxQixDQUFDLEVBMUl5QixFQTBJdEIsQ0FBQyxDQTFJcUIsRUEwSWxCLENBQUMsQ0ExSWlCLEVBMElmLENBMUllLEVBMkkxQixDQUFDLENBM0l5QixFQTJJdkIsQ0EzSXVCLEVBMklwQixDQUFDLENBM0ltQixFQTJJakIsQ0FBQyxDQTNJZ0IsRUE0STFCLENBQUMsQ0E1SXlCLEVBNEl2QixDQUFDLENBNUlzQixFQTRJbkIsQ0FBQyxDQTVJa0IsRUE0SWhCLENBQUMsRUE1SWUsRUE2STFCLENBN0kwQixFQTZJeEIsQ0E3SXdCLEVBNklyQixDQTdJcUIsRUE2SW5CLENBN0ltQixFQThJMUIsQ0FBQyxDQTlJeUIsRUE4SXZCLENBOUl1QixFQThJcEIsQ0FBQyxDQTlJbUIsRUE4SWpCLEVBOUlpQixFQStJMUIsQ0FBQyxFQS9JeUIsRUErSXRCLENBL0lzQixFQStJbkIsQ0FBQyxDQS9Ja0IsRUErSWhCLENBQUMsQ0EvSWUsRUFnSjFCLENBaEowQixFQWdKeEIsQ0FBQyxFQWhKdUIsRUFnSm5CLENBaEptQixFQWdKakIsRUFoSmlCLEVBaUoxQixDQWpKMEIsRUFpSnhCLENBakp3QixFQWlKckIsQ0FqSnFCLEVBaUpuQixDQUFDLENBakprQixFQWtKMUIsQ0FBQyxDQWxKeUIsRUFrSnZCLENBQUMsQ0FsSnNCLEVBa0puQixDQWxKbUIsRUFrSmpCLENBQUMsRUFsSmdCLEVBbUoxQixDQW5KMEIsRUFtSnhCLENBQUMsRUFuSnVCLEVBbUpuQixFQW5KbUIsRUFtSmhCLEVBbkpnQixFQW9KMUIsQ0FBQyxDQXBKeUIsRUFvSnZCLENBQUMsRUFwSnNCLEVBb0psQixDQXBKa0IsRUFvSmhCLENBQUMsQ0FwSmUsRUFxSjFCLENBckowQixFQXFKeEIsQ0FySndCLEVBcUpyQixDQXJKcUIsRUFxSm5CLENBckptQixFQXNKMUIsQ0FBQyxDQXRKeUIsRUFzSnZCLENBQUMsRUF0SnNCLEVBc0psQixDQUFDLENBdEppQixFQXNKZixDQUFDLENBdEpjLEVBdUoxQixDQUFDLENBdkp5QixFQXVKdkIsQ0FBQyxFQXZKc0IsRUF1SmxCLENBQUMsQ0F2SmlCLEVBdUpmLENBdkplLEVBd0oxQixDQXhKMEIsRUF3SnhCLENBeEp3QixFQXdKckIsRUF4SnFCLEVBd0psQixDQUFDLEVBeEppQixFQXlKMUIsQ0F6SjBCLEVBeUp4QixDQUFDLENBekp1QixFQXlKcEIsQ0F6Sm9CLEVBeUpsQixDQUFDLENBekppQixFQTBKMUIsQ0FBQyxFQTFKeUIsRUEwSnRCLENBMUpzQixFQTBKbkIsQ0FBQyxDQTFKa0IsRUEwSmhCLENBQUMsQ0ExSmUsRUEySjFCLENBM0owQixFQTJKeEIsQ0EzSndCLEVBMkpyQixDQTNKcUIsRUEySm5CLENBM0ptQixFQTRKMUIsQ0E1SjBCLEVBNEp4QixDQUFDLENBNUp1QixFQTRKcEIsQ0E1Sm9CLEVBNEpsQixDQTVKa0IsRUE2SjFCLENBQUMsQ0E3SnlCLEVBNkp2QixDQUFDLENBN0pzQixFQTZKbkIsQ0FBQyxDQTdKa0IsRUE2SmhCLENBN0pnQixFQThKMUIsQ0FBQyxDQTlKeUIsRUE4SnZCLEVBOUp1QixFQThKbkIsQ0FBQyxDQTlKa0IsRUE4SmhCLENBQUMsQ0E5SmUsRUErSjFCLENBQUMsRUEvSnlCLEVBK0p0QixDQS9Kc0IsRUErSm5CLENBQUMsRUEvSmtCLEVBK0pmLENBQUMsQ0EvSmMsRUFnSzFCLENBaEswQixFQWdLeEIsQ0FoS3dCLEVBZ0tyQixDQWhLcUIsRUFnS25CLENBaEttQixFQWlLMUIsRUFqSzBCLEVBaUt2QixDQUFDLENBaktzQixFQWlLbkIsRUFqS21CLEVBaUtoQixDQWpLZ0IsRUFrSzFCLENBQUMsQ0FsS3lCLEVBa0t2QixDQUFDLENBbEtzQixFQWtLbkIsQ0FBQyxDQWxLa0IsRUFrS2hCLENBbEtnQixFQW1LMUIsQ0FuSzBCLEVBbUt4QixDQUFDLENBbkt1QixFQW1LcEIsQ0FuS29CLEVBbUtsQixDQUFDLENBbktpQixFQW9LMUIsQ0FwSzBCLEVBb0t4QixDQUFDLEVBcEt1QixFQW9LbkIsQ0FwS21CLEVBb0tqQixDQXBLaUIsRUFxSzFCLENBQUMsRUFyS3lCLEVBcUt0QixDQUFDLENBcktxQixFQXFLbEIsQ0FBQyxFQXJLaUIsRUFxS2QsQ0FyS2MsRUFzSzFCLENBQUMsRUF0S3lCLEVBc0t0QixDQUFDLEVBdEtxQixFQXNLakIsQ0FBQyxDQXRLZ0IsRUFzS2QsQ0FBQyxDQXRLYSxFQXVLMUIsQ0FBQyxFQXZLeUIsRUF1S3RCLENBdktzQixFQXVLbkIsQ0FBQyxFQXZLa0IsRUF1S2YsQ0FBQyxDQXZLYyxFQXdLMUIsQ0F4SzBCLEVBd0t4QixDQUFDLENBeEt1QixFQXdLcEIsRUF4S29CLEVBd0tqQixDQXhLaUIsRUF5SzFCLENBQUMsQ0F6S3lCLEVBeUt2QixDQUFDLEVBektzQixFQXlLbEIsQ0FBQyxDQXpLaUIsRUF5S2YsRUF6S2UsRUEwSzFCLENBQUMsQ0ExS3lCLEVBMEt2QixDQUFDLENBMUtzQixFQTBLbkIsQ0ExS21CLEVBMEtqQixDQTFLaUIsRUEySzFCLENBQUMsRUEzS3lCLEVBMkt0QixDQUFDLEVBM0txQixFQTJLakIsQ0FBQyxFQTNLZ0IsRUEyS2IsQ0FBQyxDQTNLWSxFQTRLMUIsQ0FBQyxFQTVLeUIsRUE0S3RCLENBQUMsQ0E1S3FCLEVBNEtsQixDQUFDLEVBNUtpQixFQTRLZCxFQTVLYyxFQTZLMUIsQ0FBQyxDQTdLeUIsRUE2S3ZCLENBN0t1QixFQTZLcEIsQ0FBQyxDQTdLbUIsRUE2S2pCLENBQUMsRUE3S2dCLEVBOEsxQixDQTlLMEIsRUE4S3hCLENBQUMsQ0E5S3VCLEVBOEtwQixDQTlLb0IsRUE4S2xCLENBOUtrQixFQStLMUIsQ0FBQyxDQS9LeUIsRUErS3ZCLENBQUMsRUEvS3NCLEVBK0tsQixDQUFDLENBL0tpQixFQStLZixDQS9LZSxFQWdMMUIsQ0FBQyxDQWhMeUIsRUFnTHZCLENBaEx1QixFQWdMcEIsQ0FBQyxDQWhMbUIsRUFnTGpCLENBQUMsRUFoTGdCLEVBaUwxQixDQUFDLENBakx5QixFQWlMdkIsRUFqTHVCLEVBaUxuQixDQUFDLENBakxrQixFQWlMaEIsQ0FBQyxDQWpMZSxFQWtMMUIsQ0FBQyxDQWxMeUIsRUFrTHZCLENBQUMsRUFsTHNCLEVBa0xsQixDQUFDLENBbExpQixFQWtMZixDQWxMZSxFQW1MMUIsQ0FuTDBCLEVBbUx4QixDQUFDLENBbkx1QixFQW1McEIsQ0FuTG9CLEVBbUxsQixFQW5Ma0IsRUFvTDFCLENBQUMsRUFwTHlCLEVBb0x0QixFQXBMc0IsRUFvTGxCLENBQUMsQ0FwTGlCLEVBb0xmLENBcExlLEVBcUwxQixFQXJMMEIsRUFxTHZCLEVBckx1QixFQXFMbkIsRUFyTG1CLEVBcUxoQixDQXJMZ0IsRUFzTDFCLENBdEwwQixFQXNMeEIsQ0FBQyxDQXRMdUIsRUFzTHBCLEVBdExvQixFQXNMakIsQ0FBQyxDQXRMZ0IsRUF1TDFCLENBQUMsQ0F2THlCLEVBdUx2QixFQXZMdUIsRUF1TG5CLENBdkxtQixFQXVMakIsQ0F2TGlCLEVBd0wxQixDQUFDLENBeEx5QixFQXdMdkIsQ0FBQyxDQXhMc0IsRUF3TG5CLENBQUMsQ0F4TGtCLEVBd0xoQixDQUFDLENBeExlLEVBeUwxQixDQUFDLENBekx5QixFQXlMdkIsQ0F6THVCLEVBeUxwQixDQUFDLENBekxtQixFQXlMakIsQ0F6TGlCLEVBMEwxQixDQUFDLEVBMUx5QixFQTBMdEIsQ0FBQyxFQTFMcUIsRUEwTGpCLENBQUMsQ0ExTGdCLEVBMExkLENBQUMsRUExTGEsRUEyTDFCLENBQUMsQ0EzTHlCLEVBMkx2QixDQUFDLENBM0xzQixFQTJMbkIsQ0FBQyxDQTNMa0IsRUEyTGhCLENBQUMsQ0EzTGUsRUE0TDFCLENBQUMsQ0E1THlCLEVBNEx2QixDQTVMdUIsRUE0THBCLENBQUMsQ0E1TG1CLEVBNExqQixDQUFDLENBNUxnQixFQTZMMUIsQ0FBQyxDQTdMeUIsRUE2THZCLENBQUMsQ0E3THNCLEVBNkxuQixDQUFDLENBN0xrQixFQTZMaEIsQ0E3TGdCLEVBOEwxQixDQUFDLEVBOUx5QixFQThMdEIsQ0E5THNCLEVBOExuQixDQUFDLENBOUxrQixFQThMaEIsRUE5TGdCLEVBK0wxQixDQS9MMEIsRUErTHhCLENBL0x3QixFQStMckIsQ0EvTHFCLEVBK0xuQixDQUFDLEVBL0xrQixFQWdNMUIsQ0FoTTBCLEVBZ014QixDQWhNd0IsRUFnTXJCLEVBaE1xQixFQWdNbEIsQ0FBQyxFQWhNaUIsRUFpTTFCLENBak0wQixFQWlNeEIsRUFqTXdCLEVBaU1wQixFQWpNb0IsRUFpTWpCLENBQUMsQ0FqTWdCLEVBa00xQixDQWxNMEIsRUFrTXhCLENBQUMsQ0FsTXVCLEVBa01wQixFQWxNb0IsRUFrTWpCLENBQUMsQ0FsTWdCLEVBbU0xQixDQUFDLENBbk15QixFQW1NdkIsRUFuTXVCLEVBbU1uQixDQW5NbUIsRUFtTWpCLENBQUMsRUFuTWdCLEVBb00xQixDQUFDLENBcE15QixFQW9NdkIsQ0FBQyxDQXBNc0IsRUFvTW5CLENBQUMsQ0FwTWtCLEVBb01oQixDQXBNZ0IsRUFxTTFCLENBQUMsQ0FyTXlCLEVBcU12QixDQUFDLEVBck1zQixFQXFNbEIsQ0FyTWtCLEVBcU1oQixFQXJNZ0IsRUFzTTFCLENBQUMsRUF0TXlCLEVBc010QixDQXRNc0IsRUFzTW5CLENBQUMsQ0F0TWtCLEVBc01oQixDQUFDLEVBdE1lLEVBdU0xQixDQXZNMEIsRUF1TXhCLENBQUMsRUF2TXVCLEVBdU1uQixFQXZNbUIsRUF1TWhCLENBQUMsQ0F2TWUsRUF3TTFCLENBeE0wQixFQXdNeEIsQ0FBQyxFQXhNdUIsRUF3TW5CLENBeE1tQixFQXdNakIsQ0FBQyxDQXhNZ0IsRUF5TTFCLENBek0wQixFQXlNeEIsQ0FBQyxFQXpNdUIsRUF5TW5CLEVBek1tQixFQXlNaEIsQ0FBQyxDQXpNZSxFQTBNMUIsQ0FBQyxFQTFNeUIsRUEwTXRCLENBQUMsRUExTXFCLEVBME1qQixDQUFDLENBMU1nQixFQTBNZCxDQUFDLENBMU1hLEVBMk0xQixDQUFDLEVBM015QixFQTJNdEIsQ0FBQyxDQTNNcUIsRUEyTWxCLENBQUMsQ0EzTWlCLEVBMk1mLENBQUMsRUEzTWMsRUE0TTFCLENBNU0wQixFQTRNeEIsQ0FBQyxDQTVNdUIsRUE0TXBCLENBNU1vQixFQTRNbEIsQ0E1TWtCLEVBNk0xQixDQTdNMEIsRUE2TXhCLEVBN013QixFQTZNcEIsQ0E3TW9CLEVBNk1sQixDQUFDLEVBN01pQixFQThNMUIsQ0FBQyxDQTlNeUIsRUE4TXZCLENBOU11QixFQThNcEIsQ0FBQyxDQTlNbUIsRUE4TWpCLENBQUMsQ0E5TWdCLEVBK00xQixDQS9NMEIsRUErTXhCLENBQUMsRUEvTXVCLEVBK01uQixFQS9NbUIsRUErTWhCLENBQUMsRUEvTWUsRUFnTjFCLENBaE4wQixFQWdOeEIsQ0FBQyxFQWhOdUIsRUFnTm5CLENBaE5tQixFQWdOakIsQ0FBQyxDQWhOZ0IsRUFpTjFCLENBQUMsQ0FqTnlCLEVBaU52QixDQWpOdUIsRUFpTnBCLENBQUMsQ0FqTm1CLEVBaU5qQixDQWpOaUIsRUFrTjFCLENBbE4wQixFQWtOeEIsQ0FsTndCLEVBa05yQixDQWxOcUIsRUFrTm5CLENBQUMsQ0FsTmtCLEVBbU4xQixDQUFDLEVBbk55QixFQW1OdEIsQ0FuTnNCLEVBbU5uQixDQUFDLENBbk5rQixFQW1OaEIsQ0FuTmdCLEVBb04xQixDQXBOMEIsRUFvTnhCLENBcE53QixFQW9OckIsQ0FwTnFCLEVBb05uQixDQUFDLENBcE5rQixFQXFOMUIsQ0FBQyxFQXJOeUIsRUFxTnRCLENBQUMsRUFyTnFCLEVBcU5qQixDQUFDLEVBck5nQixFQXFOYixDQXJOYSxFQXNOMUIsQ0F0TjBCLEVBc054QixDQUFDLEVBdE51QixFQXNObkIsRUF0Tm1CLEVBc05oQixFQXROZ0IsRUF1TjFCLENBQUMsQ0F2TnlCLEVBdU52QixDQUFDLEVBdk5zQixFQXVObEIsQ0FBQyxDQXZOaUIsRUF1TmYsQ0FBQyxDQXZOYyxFQXdOMUIsQ0F4TjBCLEVBd054QixDQXhOd0IsRUF3TnJCLENBeE5xQixFQXdObkIsQ0F4Tm1CLEVBeU4xQixFQXpOMEIsRUF5TnZCLENBek51QixFQXlOcEIsRUF6Tm9CLEVBeU5qQixDQUFDLENBek5nQixFQTBOMUIsQ0ExTjBCLEVBME54QixDQTFOd0IsRUEwTnJCLENBMU5xQixFQTBObkIsQ0FBQyxFQTFOa0IsRUEyTjFCLENBQUMsQ0EzTnlCLEVBMk52QixFQTNOdUIsRUEyTm5CLENBQUMsQ0EzTmtCLEVBMk5oQixDQTNOZ0IsRUE0TjFCLENBQUMsQ0E1TnlCLEVBNE52QixDQUFDLENBNU5zQixFQTRObkIsQ0FBQyxDQTVOa0IsRUE0TmhCLENBNU5nQixFQTZOMUIsQ0FBQyxDQTdOeUIsRUE2TnZCLENBQUMsRUE3TnNCLEVBNk5sQixDQUFDLENBN05pQixFQTZOZixDQTdOZSxFQThOMUIsQ0FBQyxDQTlOeUIsRUE4TnZCLENBQUMsQ0E5TnNCLEVBOE5uQixDQUFDLENBOU5rQixFQThOaEIsQ0E5TmdCLEVBK04xQixDQUFDLENBL055QixFQStOdkIsQ0FBQyxDQS9Oc0IsRUErTm5CLENBQUMsQ0EvTmtCLEVBK05oQixDQS9OZ0IsRUFnTzFCLENBaE8wQixFQWdPeEIsQ0FoT3dCLEVBZ09yQixFQWhPcUIsRUFnT2xCLEVBaE9rQixFQWlPMUIsQ0FqTzBCLEVBaU94QixDQUFDLENBak91QixFQWlPcEIsQ0FqT29CLEVBaU9sQixFQWpPa0IsRUFrTzFCLENBbE8wQixFQWtPeEIsQ0FBQyxDQWxPdUIsRUFrT3BCLEVBbE9vQixFQWtPakIsQ0FBQyxFQWxPZ0IsRUFtTzFCLENBbk8wQixFQW1PeEIsQ0FBQyxDQW5PdUIsRUFtT3BCLENBbk9vQixFQW1PbEIsRUFuT2tCLEVBb08xQixFQXBPMEIsRUFvT3ZCLENBQUMsQ0FwT3NCLEVBb09uQixFQXBPbUIsRUFvT2hCLENBcE9nQixFQXFPMUIsQ0FBQyxDQXJPeUIsRUFxT3ZCLENBck91QixFQXFPcEIsQ0FBQyxDQXJPbUIsRUFxT2pCLENBck9pQixFQXNPMUIsQ0F0TzBCLEVBc094QixDQUFDLEVBdE91QixFQXNPbkIsQ0F0T21CLEVBc09qQixFQXRPaUIsRUF1TzFCLENBdk8wQixFQXVPeEIsQ0FBQyxDQXZPdUIsRUF1T3BCLENBdk9vQixFQXVPbEIsQ0F2T2tCLEVBd08xQixDQUFDLEVBeE95QixFQXdPdEIsQ0FBQyxDQXhPcUIsRUF3T2xCLENBQUMsQ0F4T2lCLEVBd09mLENBeE9lLEVBeU8xQixDQUFDLEVBek95QixFQXlPdEIsQ0F6T3NCLEVBeU9uQixDQUFDLEVBek9rQixFQXlPZixDQXpPZSxFQTBPMUIsQ0FBQyxFQTFPeUIsRUEwT3RCLEVBMU9zQixFQTBPbEIsQ0FBQyxFQTFPaUIsRUEwT2QsQ0FBQyxFQTFPYSxFQTJPMUIsQ0EzTzBCLEVBMk94QixDQTNPd0IsRUEyT3JCLEVBM09xQixFQTJPbEIsQ0FBQyxFQTNPaUIsRUE0TzFCLENBNU8wQixFQTRPeEIsQ0FBQyxDQTVPdUIsRUE0T3BCLENBNU9vQixFQTRPbEIsQ0E1T2tCLEVBNk8xQixDQUFDLEVBN095QixFQTZPdEIsQ0E3T3NCLEVBNk9uQixDQUFDLENBN09rQixFQTZPaEIsQ0FBQyxDQTdPZSxFQThPMUIsQ0FBQyxDQTlPeUIsRUE4T3ZCLENBOU91QixFQThPcEIsQ0FBQyxDQTlPbUIsRUE4T2pCLENBQUMsQ0E5T2dCLEVBK08xQixDQUFDLEVBL095QixFQStPdEIsQ0FBQyxDQS9PcUIsRUErT2xCLENBQUMsQ0EvT2lCLEVBK09mLENBQUMsQ0EvT2MsRUFnUDFCLENBaFAwQixFQWdQeEIsQ0FBQyxDQWhQdUIsRUFnUHBCLENBaFBvQixFQWdQbEIsRUFoUGtCLEVBaVAxQixDQWpQMEIsRUFpUHhCLENBalB3QixFQWlQckIsQ0FqUHFCLEVBaVBuQixDQUFDLENBalBrQixFQWtQMUIsQ0FBQyxDQWxQeUIsRUFrUHZCLENBQUMsQ0FsUHNCLEVBa1BuQixDQUFDLENBbFBrQixFQWtQaEIsQ0FBQyxDQWxQZSxFQW1QMUIsQ0FuUDBCLEVBbVB4QixDQW5Qd0IsRUFtUHJCLEVBblBxQixFQW1QbEIsQ0FBQyxDQW5QaUIsRUFvUDFCLEVBcFAwQixFQW9QdkIsQ0FBQyxDQXBQc0IsRUFvUG5CLEVBcFBtQixFQW9QaEIsQ0FBQyxDQXBQZSxFQXFQMUIsQ0FyUDBCLEVBcVB4QixDQXJQd0IsRUFxUHJCLENBclBxQixFQXFQbkIsQ0FyUG1CLEVBc1AxQixDQUFDLENBdFB5QixFQXNQdkIsQ0F0UHVCLEVBc1BwQixDQXRQb0IsRUFzUGxCLEVBdFBrQixFQXVQMUIsQ0F2UDBCLEVBdVB4QixDQUFDLENBdlB1QixFQXVQcEIsQ0F2UG9CLEVBdVBsQixDQXZQa0IsRUF3UDFCLENBQUMsRUF4UHlCLEVBd1B0QixDQXhQc0IsRUF3UG5CLENBQUMsRUF4UGtCLEVBd1BmLENBeFBlLEVBeVAxQixDQXpQMEIsRUF5UHhCLENBelB3QixFQXlQckIsRUF6UHFCLEVBeVBsQixFQXpQa0IsRUEwUDFCLENBMVAwQixFQTBQeEIsQ0ExUHdCLEVBMFByQixDQTFQcUIsRUEwUG5CLENBQUMsQ0ExUGtCLEVBMlAxQixDQTNQMEIsRUEyUHhCLENBQUMsQ0EzUHVCLEVBMlBwQixDQTNQb0IsRUEyUGxCLENBQUMsRUEzUGlCLEVBNFAxQixDQUFDLEVBNVB5QixFQTRQdEIsQ0E1UHNCLEVBNFBuQixDQUFDLEVBNVBrQixFQTRQZixDQTVQZSxFQTZQMUIsQ0E3UDBCLEVBNlB4QixDQTdQd0IsRUE2UHJCLEVBN1BxQixFQTZQbEIsQ0E3UGtCLEVBOFAxQixDQTlQMEIsRUE4UHhCLENBQUMsQ0E5UHVCLEVBOFBwQixFQTlQb0IsRUE4UGpCLENBQUMsQ0E5UGdCLEVBK1AxQixDQS9QMEIsRUErUHhCLENBL1B3QixFQStQckIsRUEvUHFCLEVBK1BsQixDQUFDLENBL1BpQixFQWdRMUIsQ0FBQyxDQWhReUIsRUFnUXZCLENBQUMsQ0FoUXNCLEVBZ1FuQixDQWhRbUIsRUFnUWpCLENBQUMsRUFoUWdCLENBQXZCOzs7Ozs7Ozs7Ozs7OztBQ0FELFNBQVVDLGFBQVYsQ0FBd0I3QyxHQUF4QixFQUFrQ0MsR0FBbEMsRUFBNENxZixLQUE1QyxFQUEyRDVaLEVBQTNELEVBQXVFQyxFQUF2RSxFQUFtRjJtQixLQUFuRixFQUFrR3JOLENBQWxHLEVBQXVIalYsT0FBdkgsRUFBbUk7RUFDckksSUFBSXVpQixNQUFNLEdBQUczc0IsSUFBSSxDQUFDZ08sR0FBTCxDQUFTMFIsS0FBVCxDQUFiO0VBQ0EsSUFBSWtOLElBQUksR0FBSzVzQixJQUFJLENBQUMrTixHQUFMLENBQVMyUixLQUFULENBQWI7RUFFQUwsQ0FBQyxDQUFDeGUsSUFBRixDQUFPLENBQVAsSUFBWThyQixNQUFaLEVBQW9CdE4sQ0FBQyxDQUFDeGUsSUFBRixDQUFPLENBQVAsSUFBWSxDQUFDK3JCLElBQWpDLEVBQTBDdk4sQ0FBQyxDQUFDeGUsSUFBRixDQUFPLENBQVAsSUFBWSxDQUFDLENBQUM4ckIsTUFBRCxHQUFVQyxJQUFYLElBQXFCRixLQUFyQixHQUEyQixHQUEzQixHQUFpQzVtQixFQUF2RixFQUNBdVosQ0FBQyxDQUFDeGUsSUFBRixDQUFPLENBQVAsSUFBWStyQixJQURaLEVBQ29Cdk4sQ0FBQyxDQUFDeGUsSUFBRixDQUFPLENBQVAsSUFBYThyQixNQURqQyxFQUMwQ3ROLENBQUMsQ0FBQ3hlLElBQUYsQ0FBTyxDQUFQLElBQVksQ0FBQyxDQUFDK3JCLElBQUQsR0FBVUQsTUFBWCxJQUFxQkQsS0FBckIsR0FBMkIsR0FBM0IsR0FBaUMzbUIsRUFEdkY7RUFHQXFFLE9BQU8sQ0FBQ3lpQixXQUFSLENBQW9CenNCLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QmdmLENBQTlCLEVBQWlDLEdBQWpDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0FBR08sSUFBTW5jLElBQWI7RUFHSTtJQUFBOztJQUFBOztJQUFBOztJQUNJLEtBQUtncUIsWUFBTCxHQUFvQixFQUFwQjtJQUNBLEtBQUtDLEdBQUwsR0FBVyxDQUFYO0VBQ0g7O0VBTkw7SUFBQTtJQUFBLE9BUUksY0FBS3BnQixLQUFMLEVBQW9CQyxNQUFwQixFQUFvQzVCLE1BQXBDLEVBQW9EZ2lCLGNBQXBELEVBQTBFO01BQ3RFLElBQUksT0FBT0EsY0FBUCxLQUEwQixXQUE5QixFQUEyQztRQUFFQSxjQUFjLEdBQUcsQ0FBakI7TUFBcUI7O01BQ2xFLElBQUk5d0IsQ0FBSjtNQUNBOE8sTUFBTSxHQUFHcEwsSUFBSSxDQUFDQyxHQUFMLENBQVNtTCxNQUFULEVBQWlCLENBQWpCLENBQVQ7TUFDQUEsTUFBTSxHQUFHcEwsSUFBSSxDQUFDcUMsR0FBTCxDQUFTK0ksTUFBVCxFQUFpQixDQUFqQixDQUFUOztNQUNBLEtBQUs5TyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc4d0IsY0FBaEIsRUFBZ0MsRUFBRTl3QixDQUFsQyxFQUFxQztRQUNqQyxLQUFLNHdCLFlBQUwsQ0FBa0I1d0IsQ0FBbEIsSUFBdUIsSUFBSTJ3QixvREFBSixDQUFnQmxnQixLQUFLLElBQUl6USxDQUF6QixFQUE0QjBRLE1BQU0sSUFBSTFRLENBQXRDLEVBQXlDOE8sTUFBekMsQ0FBdkI7TUFDSDtJQUNKO0VBaEJMO0lBQUE7SUFBQSxPQWtCSSxnQkFBT2hMLEdBQVAsRUFBc0I4RSxNQUF0QixFQUE0Q2liLE1BQTVDLEVBQTBEO01BQ3RELElBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztRQUFFQSxNQUFNLEdBQUcsQ0FBVDtNQUFhOztNQUNsRCxJQUFJNUwsQ0FBQyxHQUFHLEtBQUsyWSxZQUFMLENBQWtCLENBQWxCLENBQVI7TUFDQSxJQUFJRyxDQUFDLEdBQUc5WSxDQUFDLENBQUNuSixNQUFGLEdBQVcsQ0FBbkI7TUFBQSxJQUFzQmtpQixHQUFHLEdBQUlELENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBdEM7TUFDQSxJQUFJRSxJQUFJLEdBQUdoWixDQUFDLENBQUNnWixJQUFiO01BQ0EsSUFBSUMsVUFBVSxHQUFHalosQ0FBQyxDQUFDaVosVUFBRixHQUFlLENBQWhDO01BQ0EsSUFBSUMsUUFBUSxHQUFHRCxVQUFVLElBQUksQ0FBN0I7TUFDQSxJQUFJOWdCLEdBQUcsR0FBR3RNLEdBQUcsQ0FBQ1MsSUFBZDtNQUFBLElBQW9CL0IsQ0FBQyxHQUFHc0IsR0FBRyxDQUFDTyxJQUFKLEdBQVcsQ0FBbkM7TUFBQSxJQUFzQzVCLENBQUMsR0FBR3FCLEdBQUcsQ0FBQ1EsSUFBSixHQUFXLENBQXJEO01BQUEsSUFBd0Q4c0IsRUFBRSxHQUFHNXVCLENBQUMsSUFBSSxDQUFsRTtNQUNBLElBQUk2dUIsTUFBTSxHQUFHcFosQ0FBQyxDQUFDb1osTUFBZjtNQUNBLElBQUl4cEIsQ0FBQyxHQUFHLENBQVI7TUFBQSxJQUFXWSxDQUFDLEdBQUcsQ0FBZjtNQUFBLElBQWtCb1ksR0FBRyxHQUFHLENBQXhCO01BQUEsSUFBMkJ5RCxJQUFJLEdBQUcsQ0FBbEM7TUFBQSxJQUFxQ2dOLEVBQUUsR0FBRyxDQUExQztNQUFBLElBQTZDQyxFQUFFLEdBQUcsQ0FBbEQ7TUFBQSxJQUFxREMsU0FBUyxHQUFHLENBQWpFO01BQUEsSUFBb0UxTSxLQUFLLEdBQUcsQ0FBNUU7TUFDQSxJQUFJK0wsR0FBRyxHQUFHLEtBQUtBLEdBQUwsR0FBVyxDQUFyQjtNQUNBLElBQUlwTSxnQkFBZ0IsR0FBRyxDQUF2QjtNQUFBLElBQTBCRCxFQUExQjtNQUVBLElBQUkzZixFQUFFLEdBQUduQixJQUFJLENBQUNxQyxHQUFMLENBQVNnckIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JsTixNQUFoQixJQUEwQixDQUFuQztNQUNBLElBQUkvZSxFQUFFLEdBQUdwQixJQUFJLENBQUNxQyxHQUFMLENBQVNnckIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JsTixNQUFoQixJQUEwQixDQUFuQztNQUNBLElBQUllLEVBQUUsR0FBR2xoQixJQUFJLENBQUNDLEdBQUwsQ0FBU25CLENBQUMsR0FBR3V1QixDQUFKLEdBQVEsQ0FBakIsRUFBb0J2dUIsQ0FBQyxHQUFHcWhCLE1BQXhCLElBQWtDLENBQTNDO01BQ0EsSUFBSWdCLEVBQUUsR0FBR25oQixJQUFJLENBQUNDLEdBQUwsQ0FBU2xCLENBQUMsR0FBR3N1QixDQUFKLEdBQVEsQ0FBakIsRUFBb0J0dUIsQ0FBQyxHQUFHb2hCLE1BQXhCLElBQWtDLENBQTNDO01BRUFoRCxHQUFHLEdBQUkvYixFQUFFLEdBQUd0QyxDQUFMLEdBQVNxQyxFQUFWLEdBQWdCLENBQXRCOztNQUNBLEtBQUs0RCxDQUFDLEdBQUczRCxFQUFULEVBQWEyRCxDQUFDLEdBQUdvYyxFQUFqQixFQUFxQixFQUFFcGMsQ0FBRixFQUFLb1ksR0FBRyxJQUFJcmUsQ0FBakMsRUFBb0M7UUFDaEMsS0FBS3FGLENBQUMsR0FBR2hELEVBQUosRUFBUXlmLElBQUksR0FBR3pELEdBQXBCLEVBQXlCaFosQ0FBQyxHQUFHK2MsRUFBN0IsRUFBaUMsRUFBRS9jLENBQUYsRUFBSyxFQUFFeWMsSUFBeEMsRUFBOEM7VUFDMUNnTixFQUFFLEdBQUdsaEIsR0FBRyxDQUFDa1UsSUFBRCxDQUFILEdBQVl1TSxHQUFqQixFQUFzQlUsRUFBRSxHQUFHbmhCLEdBQUcsQ0FBQ2tVLElBQUQsQ0FBSCxHQUFZdU0sR0FBdkM7O1VBRUEsSUFBSVUsRUFBRSxHQUFHbmhCLEdBQUcsQ0FBQ2tVLElBQUksR0FBR3lNLENBQVIsQ0FBUixJQUFzQjNnQixHQUFHLENBQUNrVSxJQUFJLEdBQUd5TSxDQUFSLENBQUgsR0FBZ0JPLEVBQXRDLElBQTRDQyxFQUFFLEdBQUduaEIsR0FBRyxDQUFDa1UsSUFBSSxHQUFHeU0sQ0FBUixDQUFwRCxJQUFrRTNnQixHQUFHLENBQUNrVSxJQUFJLEdBQUd5TSxDQUFSLENBQUgsR0FBZ0JPLEVBQXRGLEVBQTBGO1lBQ3RGRCxNQUFNLENBQUMvTSxJQUFELENBQU4sR0FBZSxDQUFmO1VBQ0gsQ0FGRCxNQUVPO1lBQ0hvTSw4REFBaUIsQ0FBQ3RnQixHQUFELEVBQU1rVSxJQUFOLEVBQVkrTSxNQUFaLEVBQW9CRSxFQUFwQixFQUF3QkQsRUFBeEIsRUFBNEJMLElBQTVCLEVBQWtDRSxRQUFsQyxFQUE0Q0QsVUFBNUMsQ0FBakI7VUFDSDtRQUNKO01BQ0o7O01BR0RyUSxHQUFHLEdBQUkvYixFQUFFLEdBQUd0QyxDQUFMLEdBQVNxQyxFQUFWLEdBQWdCLENBQXRCOztNQUNBLEtBQUs0RCxDQUFDLEdBQUczRCxFQUFULEVBQWEyRCxDQUFDLEdBQUdvYyxFQUFqQixFQUFxQixFQUFFcGMsQ0FBRixFQUFLb1ksR0FBRyxJQUFJcmUsQ0FBakMsRUFBb0M7UUFDaEMsS0FBS3FGLENBQUMsR0FBR2hELEVBQUosRUFBUXlmLElBQUksR0FBR3pELEdBQXBCLEVBQXlCaFosQ0FBQyxHQUFHK2MsRUFBN0IsRUFBaUMsRUFBRS9jLENBQUYsRUFBSyxFQUFFeWMsSUFBeEMsRUFBOEM7VUFDMUNRLEtBQUssR0FBR3VNLE1BQU0sQ0FBQy9NLElBQUQsQ0FBZDtVQUNBa04sU0FBUyxHQUFHOXRCLElBQUksQ0FBQzBDLEdBQUwsQ0FBUzBlLEtBQVQsQ0FBWjs7VUFDQSxJQUFJME0sU0FBUyxHQUFHLENBQWhCLEVBQW1CO1lBRWYsRUFBRTNwQixDQUFGLEVBQUssRUFBRXljLElBQVA7VUFDSCxDQUhELE1BR087WUFDSCxJQUFJa00sd0RBQVcsQ0FBQ2EsTUFBRCxFQUFTL00sSUFBVCxFQUFlOWhCLENBQWYsQ0FBWCxJQUFnQyxDQUFoQyxJQUFxQ2l1Qiw0REFBZSxDQUFDWSxNQUFELEVBQVMvTSxJQUFULEVBQWVRLEtBQWYsRUFBc0JzTSxFQUF0QixFQUEwQkwsQ0FBMUIsQ0FBeEQsRUFBc0Y7Y0FDbEZ2TSxFQUFFLEdBQUc1YixNQUFNLENBQUM2YixnQkFBRCxDQUFYO2NBQ0FELEVBQUUsQ0FBQzNjLENBQUgsR0FBT0EsQ0FBUCxFQUFVMmMsRUFBRSxDQUFDL2IsQ0FBSCxHQUFPQSxDQUFqQixFQUFvQitiLEVBQUUsQ0FBQ00sS0FBSCxHQUFXME0sU0FBL0I7Y0FDQSxFQUFFL00sZ0JBQUY7Y0FFQTVjLENBQUMsSUFBSW1wQixHQUFMLEVBQVUxTSxJQUFJLElBQUkwTSxHQUFsQjtZQUNIO1VBQ0o7UUFDSjtNQUNKOztNQUVELE9BQU92TSxnQkFBUDtJQUNIO0VBdkVMOztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hNLFNBQVVnTixxQkFBVixDQUFnQzlnQixJQUFoQyxFQUE4Q3NnQixJQUE5QyxFQUFnRUYsQ0FBaEUsRUFBeUU7RUFDM0UsSUFBSS93QixDQUFDLEdBQUcsQ0FBUjtFQUNBLElBQUk2SCxDQUFKLEVBQU9ZLENBQVA7RUFFQVosQ0FBQyxHQUFHa3BCLENBQUo7O0VBQ0EsS0FBS3RvQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdaLENBQWhCLEVBQW1CWSxDQUFDLElBQUl6SSxDQUFDLEVBQXpCLEVBQTZCO0lBQ3pCNkgsQ0FBQyxHQUFJbkUsSUFBSSxDQUFDZ0YsSUFBTCxDQUFXcW9CLENBQUMsR0FBR0EsQ0FBSixHQUFRdG9CLENBQUMsR0FBR0EsQ0FBdkIsSUFBNkIsR0FBOUIsR0FBcUMsQ0FBekM7SUFDQXdvQixJQUFJLENBQUNqeEIsQ0FBRCxDQUFKLEdBQVc2SCxDQUFDLEdBQUc4SSxJQUFJLEdBQUdsSSxDQUF0QjtFQUNIOztFQUNELEtBQUtaLENBQUMsRUFBTixFQUFVQSxDQUFDLEdBQUdZLENBQUosSUFBU1osQ0FBQyxJQUFJLENBQXhCLEVBQTJCQSxDQUFDLElBQUk3SCxDQUFDLEVBQWpDLEVBQXFDO0lBQ2pDeUksQ0FBQyxHQUFJL0UsSUFBSSxDQUFDZ0YsSUFBTCxDQUFXcW9CLENBQUMsR0FBR0EsQ0FBSixHQUFRbHBCLENBQUMsR0FBR0EsQ0FBdkIsSUFBNkIsR0FBOUIsR0FBcUMsQ0FBekM7SUFDQW9wQixJQUFJLENBQUNqeEIsQ0FBRCxDQUFKLEdBQVc2SCxDQUFDLEdBQUc4SSxJQUFJLEdBQUdsSSxDQUF0QjtFQUNIOztFQUNELE9BQU8sQ0FBQ1osQ0FBRCxHQUFLWSxDQUFaLEVBQWVaLENBQUMsSUFBSTdILENBQUMsRUFBckIsRUFBeUI7SUFDckJ5SSxDQUFDLEdBQUkvRSxJQUFJLENBQUNnRixJQUFMLENBQVdxb0IsQ0FBQyxHQUFHQSxDQUFKLEdBQVFscEIsQ0FBQyxHQUFHQSxDQUF2QixJQUE2QixHQUE5QixHQUFxQyxDQUF6QztJQUNBb3BCLElBQUksQ0FBQ2p4QixDQUFELENBQUosR0FBVzZILENBQUMsR0FBRzhJLElBQUksR0FBR2xJLENBQXRCO0VBQ0g7O0VBQ0QsS0FBS0EsQ0FBQyxFQUFOLEVBQVVBLENBQUMsSUFBSSxDQUFmLEVBQWtCQSxDQUFDLElBQUl6SSxDQUFDLEVBQXhCLEVBQTRCO0lBQ3hCNkgsQ0FBQyxHQUFJLENBQUNuRSxJQUFJLENBQUNnRixJQUFMLENBQVdxb0IsQ0FBQyxHQUFHQSxDQUFKLEdBQVF0b0IsQ0FBQyxHQUFHQSxDQUF2QixDQUFELEdBQThCLEdBQS9CLEdBQXNDLENBQTFDO0lBQ0F3b0IsSUFBSSxDQUFDanhCLENBQUQsQ0FBSixHQUFXNkgsQ0FBQyxHQUFHOEksSUFBSSxHQUFHbEksQ0FBdEI7RUFDSDs7RUFDRCxPQUFPQSxDQUFDLEdBQUdaLENBQVgsRUFBY1ksQ0FBQyxJQUFJekksQ0FBQyxFQUFwQixFQUF3QjtJQUNwQjZILENBQUMsR0FBSSxDQUFDbkUsSUFBSSxDQUFDZ0YsSUFBTCxDQUFXcW9CLENBQUMsR0FBR0EsQ0FBSixHQUFRdG9CLENBQUMsR0FBR0EsQ0FBdkIsQ0FBRCxHQUE4QixHQUEvQixHQUFzQyxDQUExQztJQUNBd29CLElBQUksQ0FBQ2p4QixDQUFELENBQUosR0FBVzZILENBQUMsR0FBRzhJLElBQUksR0FBR2xJLENBQXRCO0VBQ0g7O0VBQ0QsS0FBS1osQ0FBQyxFQUFOLEVBQVVBLENBQUMsSUFBSSxDQUFmLEVBQWtCQSxDQUFDLElBQUk3SCxDQUFDLEVBQXhCLEVBQTRCO0lBQ3hCeUksQ0FBQyxHQUFJLENBQUMvRSxJQUFJLENBQUNnRixJQUFMLENBQVdxb0IsQ0FBQyxHQUFHQSxDQUFKLEdBQVFscEIsQ0FBQyxHQUFHQSxDQUF2QixDQUFELEdBQThCLEdBQS9CLEdBQXNDLENBQTFDO0lBQ0FvcEIsSUFBSSxDQUFDanhCLENBQUQsQ0FBSixHQUFXNkgsQ0FBQyxHQUFHOEksSUFBSSxHQUFHbEksQ0FBdEI7RUFDSDs7RUFDRCxPQUFPWixDQUFDLEdBQUcsQ0FBQ1ksQ0FBWixFQUFlWixDQUFDLElBQUk3SCxDQUFDLEVBQXJCLEVBQXlCO0lBQ3JCeUksQ0FBQyxHQUFJLENBQUMvRSxJQUFJLENBQUNnRixJQUFMLENBQVdxb0IsQ0FBQyxHQUFHQSxDQUFKLEdBQVFscEIsQ0FBQyxHQUFHQSxDQUF2QixDQUFELEdBQThCLEdBQS9CLEdBQXNDLENBQTFDO0lBQ0FvcEIsSUFBSSxDQUFDanhCLENBQUQsQ0FBSixHQUFXNkgsQ0FBQyxHQUFHOEksSUFBSSxHQUFHbEksQ0FBdEI7RUFDSDs7RUFDRCxLQUFLQSxDQUFDLEVBQU4sRUFBVUEsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsSUFBSXpJLENBQUMsRUFBdkIsRUFBMkI7SUFDdkI2SCxDQUFDLEdBQUluRSxJQUFJLENBQUNnRixJQUFMLENBQVdxb0IsQ0FBQyxHQUFHQSxDQUFKLEdBQVF0b0IsQ0FBQyxHQUFHQSxDQUF2QixJQUE2QixHQUE5QixHQUFxQyxDQUF6QztJQUNBd29CLElBQUksQ0FBQ2p4QixDQUFELENBQUosR0FBVzZILENBQUMsR0FBRzhJLElBQUksR0FBR2xJLENBQXRCO0VBQ0g7O0VBRUR3b0IsSUFBSSxDQUFDanhCLENBQUQsQ0FBSixHQUFVaXhCLElBQUksQ0FBQyxDQUFELENBQWQ7RUFDQUEsSUFBSSxDQUFDanhCLENBQUMsR0FBRyxDQUFMLENBQUosR0FBY2l4QixJQUFJLENBQUMsQ0FBRCxDQUFsQjtFQUNBLE9BQU9qeEIsQ0FBUDtBQUNIO0FBRUssU0FBVXd3QixXQUFWLENBQXNCa0IsRUFBdEIsRUFBaURqYixHQUFqRCxFQUE4RDlGLElBQTlELEVBQTBFO0VBQzVFLElBQUlZLENBQUMsR0FBRyxDQUFSO0VBQ0EsSUFBSW1nQixFQUFFLENBQUNqYixHQUFHLEdBQUcsQ0FBUCxDQUFGLElBQWUsQ0FBbkIsRUFBc0JsRixDQUFDO0VBQ3ZCLElBQUltZ0IsRUFBRSxDQUFDamIsR0FBRyxHQUFHLENBQVAsQ0FBRixJQUFlLENBQW5CLEVBQXNCbEYsQ0FBQztFQUN2QixJQUFJbWdCLEVBQUUsQ0FBQ2piLEdBQUcsR0FBRzlGLElBQVAsQ0FBRixJQUFrQixDQUF0QixFQUF5QlksQ0FBQztFQUMxQixJQUFJbWdCLEVBQUUsQ0FBQ2piLEdBQUcsR0FBRzlGLElBQU4sR0FBYSxDQUFkLENBQUYsSUFBc0IsQ0FBMUIsRUFBNkJZLENBQUM7RUFDOUIsSUFBSW1nQixFQUFFLENBQUNqYixHQUFHLEdBQUc5RixJQUFOLEdBQWEsQ0FBZCxDQUFGLElBQXNCLENBQTFCLEVBQTZCWSxDQUFDO0VBQzlCLElBQUltZ0IsRUFBRSxDQUFDamIsR0FBRyxHQUFHOUYsSUFBUCxDQUFGLElBQWtCLENBQXRCLEVBQXlCWSxDQUFDO0VBQzFCLElBQUltZ0IsRUFBRSxDQUFDamIsR0FBRyxHQUFHOUYsSUFBTixHQUFhLENBQWQsQ0FBRixJQUFzQixDQUExQixFQUE2QlksQ0FBQztFQUM5QixJQUFJbWdCLEVBQUUsQ0FBQ2piLEdBQUcsR0FBRzlGLElBQU4sR0FBYSxDQUFkLENBQUYsSUFBc0IsQ0FBMUIsRUFBNkJZLENBQUM7RUFFOUIsT0FBT0EsQ0FBUDtBQUNIO0FBRUssU0FBVWtmLGVBQVYsQ0FBMEJuYyxDQUExQixFQUF5Q21DLEdBQXpDLEVBQXNEakMsQ0FBdEQsRUFBaUU3RCxJQUFqRSxFQUErRWdoQixZQUEvRSxFQUFtRztFQUNyRyxJQUFJOXBCLENBQUosRUFBT1ksQ0FBUDs7RUFFQSxJQUFJK0wsQ0FBQyxHQUFHLENBQVIsRUFBVztJQUNQaUMsR0FBRyxJQUFJOUYsSUFBSSxHQUFHZ2hCLFlBQWQ7O0lBQ0EsS0FBS2xwQixDQUFDLEdBQUcsQ0FBQ2twQixZQUFWLEVBQXdCbHBCLENBQUMsSUFBSWtwQixZQUE3QixFQUEyQyxFQUFFbHBCLENBQTdDLEVBQWdEO01BQzVDLEtBQUtaLENBQUMsR0FBRyxDQUFDOHBCLFlBQVYsRUFBd0I5cEIsQ0FBQyxJQUFJOHBCLFlBQTdCLEVBQTJDLEVBQUU5cEIsQ0FBN0MsRUFBZ0Q7UUFDNUMsSUFBSXlNLENBQUMsQ0FBQ21DLEdBQUcsR0FBRzVPLENBQVAsQ0FBRCxHQUFhMk0sQ0FBakIsRUFBb0IsT0FBTyxLQUFQO01BQ3ZCOztNQUNEaUMsR0FBRyxJQUFJOUYsSUFBUDtJQUNIO0VBQ0osQ0FSRCxNQVFPO0lBQ0g4RixHQUFHLElBQUk5RixJQUFJLEdBQUdnaEIsWUFBZDs7SUFDQSxLQUFLbHBCLENBQUMsR0FBRyxDQUFDa3BCLFlBQVYsRUFBd0JscEIsQ0FBQyxJQUFJa3BCLFlBQTdCLEVBQTJDLEVBQUVscEIsQ0FBN0MsRUFBZ0Q7TUFDNUMsS0FBS1osQ0FBQyxHQUFHLENBQUM4cEIsWUFBVixFQUF3QjlwQixDQUFDLElBQUk4cEIsWUFBN0IsRUFBMkMsRUFBRTlwQixDQUE3QyxFQUFnRDtRQUM1QyxJQUFJeU0sQ0FBQyxDQUFDbUMsR0FBRyxHQUFHNU8sQ0FBUCxDQUFELEdBQWEyTSxDQUFqQixFQUFvQixPQUFPLEtBQVA7TUFDdkI7O01BQ0RpQyxHQUFHLElBQUk5RixJQUFQO0lBQ0g7RUFDSjs7RUFDRCxPQUFPLElBQVA7QUFDSDtBQUVLLFNBQVUrZixpQkFBVixDQUE0QmtCLENBQTVCLEVBQXlEL3BCLENBQXpELEVBQW9FZ3FCLE1BQXBFLEVBQXdGQyxFQUF4RixFQUFvR0MsRUFBcEcsRUFBZ0hkLElBQWhILEVBQTBJRSxRQUExSSxFQUE0SmEsT0FBNUosRUFBMks7RUFDN0ssSUFBSWxOLEtBQUssR0FBRyxDQUFaO0VBQ0EsSUFBSTNmLENBQUMsR0FBRyxDQUFSO0VBQUEsSUFBV0MsQ0FBQyxHQUFJK3JCLFFBQVEsR0FBRyxDQUFaLEdBQWlCLENBQWhDO0VBQ0EsSUFBSS9TLENBQUMsR0FBRyxDQUFSO0VBQUEsSUFBVzZULEVBQUUsR0FBRyxDQUFoQjtFQUFBLElBQW1CQyxFQUFFLEdBQUcsQ0FBeEI7RUFBQSxJQUEyQkMsRUFBRSxHQUFHLENBQWhDO0VBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7RUFHQWhVLENBQUMsR0FBR3dULENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDOXJCLENBQUQsQ0FBVCxDQUFMOztFQUNBLElBQUtpWixDQUFDLElBQUkyVCxFQUFWLEVBQWU7SUFDWCxJQUFLM1QsQ0FBQyxJQUFJMFQsRUFBVixFQUFlO01BQ1hHLEVBQUUsR0FBR0wsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47O01BQ0EsSUFBSzZzQixFQUFFLElBQUlGLEVBQVgsRUFBZ0I7UUFDWixJQUFLRSxFQUFFLElBQUlILEVBQVgsRUFBZ0I7VUFBRUQsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTLENBQTFDLE1BQ0s7VUFDRHpDLENBQUM7VUFBSThzQixFQUFFLEdBQUdOLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztVQUNMLElBQUs4c0IsRUFBRSxHQUFHSCxFQUFWLEVBQWU7WUFDWDNzQixDQUFDO1lBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjtZQUNMLElBQUsrc0IsRUFBRSxHQUFHSixFQUFWLEVBQWVLLEtBQUssR0FBRyxDQUFSLENBQWYsS0FDSyxJQUFLRCxFQUFFLEdBQUdMLEVBQVYsRUFBZU0sS0FBSyxHQUFHLENBQVIsQ0FBZixLQUNBO2NBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO2NBQWU7WUFBUztVQUNsQyxDQUxELE1BTXdCO1lBQ3BCekMsQ0FBQztZQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47WUFDTCxJQUFLK3NCLEVBQUUsR0FBR0osRUFBVixFQUFlSyxLQUFLLEdBQUcsQ0FBUixDQUFmLEtBQ0ssSUFBS0QsRUFBRSxHQUFHTCxFQUFWLEVBQWVNLEtBQUssR0FBRyxDQUFSLENBQWYsS0FDQTtjQUFFUCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtjQUFlO1lBQVM7VUFDbEM7UUFFSjtNQUNKLENBbEJELE1BbUJLO1FBQ0R6QyxDQUFDO1FBQUk4c0IsRUFBRSxHQUFHTixDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7UUFDTCxJQUFLOHNCLEVBQUUsR0FBR0gsRUFBVixFQUFlO1VBQ1gzc0IsQ0FBQztVQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47VUFDTCxJQUFLK3NCLEVBQUUsR0FBR0osRUFBVixFQUFlSyxLQUFLLEdBQUcsQ0FBUixDQUFmLEtBQ0ssSUFBS0QsRUFBRSxHQUFHTCxFQUFWLEVBQWVNLEtBQUssR0FBRyxDQUFSLENBQWYsS0FDQTtZQUFFUCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7UUFDbEMsQ0FMRCxNQU1LLElBQUtxcUIsRUFBRSxHQUFHSixFQUFWLEVBQWU7VUFDaEIxc0IsQ0FBQztVQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47VUFDTCxJQUFLK3NCLEVBQUUsR0FBR0osRUFBVixFQUFlSyxLQUFLLEdBQUcsQ0FBUixDQUFmLEtBQ0ssSUFBS0QsRUFBRSxHQUFHTCxFQUFWLEVBQWVNLEtBQUssR0FBRyxDQUFSLENBQWYsS0FDQTtZQUFFUCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7UUFDbEMsQ0FMSSxNQU1BO1VBQUVncUIsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTO01BQ2xDO0lBQ0osQ0FyQ0QsTUFzQ0s7TUFDRG9xQixFQUFFLEdBQUdMLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztNQUNBLElBQUs2c0IsRUFBRSxHQUFHRixFQUFWLEVBQWU7UUFBRUYsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7UUFBZTtNQUFTOztNQUN6Q3pDLENBQUM7TUFBSThzQixFQUFFLEdBQUdOLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztNQUNMLElBQUs4c0IsRUFBRSxHQUFHSCxFQUFWLEVBQWU7UUFBRUYsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7UUFBZTtNQUFTOztNQUN6Q3pDLENBQUM7TUFBSStzQixFQUFFLEdBQUdQLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztNQUNMLElBQUsrc0IsRUFBRSxHQUFHSixFQUFWLEVBQWU7UUFBRUYsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7UUFBZTtNQUFTOztNQUN6Q3VxQixLQUFLLEdBQUcsQ0FBUjtJQUNIO0VBQ0osQ0FoREQsTUFrREE7SUFDSUgsRUFBRSxHQUFHTCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7SUFDQSxJQUFLNnNCLEVBQUUsR0FBR0gsRUFBVixFQUFlO01BQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO01BQWU7SUFBUzs7SUFDekN6QyxDQUFDO0lBQUk4c0IsRUFBRSxHQUFHTixDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7SUFDTCxJQUFLOHNCLEVBQUUsR0FBR0osRUFBVixFQUFlO01BQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO01BQWU7SUFBUzs7SUFDekN6QyxDQUFDO0lBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7SUFDTCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO01BQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO01BQWU7SUFBUzs7SUFDekN1cUIsS0FBSyxHQUFHLENBQVI7RUFDSDs7RUFFRCxLQUFLanRCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSWdzQixRQUFqQixFQUEyQmhzQixDQUFDLEVBQTVCLEVBQWdDO0lBQzVCaVosQ0FBQyxHQUFHd1QsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM5ckIsQ0FBRCxDQUFULENBQUw7O0lBRUEsUUFBUWl0QixLQUFSO01BQ0ksS0FBSyxDQUFMO1FBQ0ksSUFBS2hVLENBQUMsR0FBRzJULEVBQVQsRUFBYztVQUNWRyxFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1lBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUNELElBQUtoVSxDQUFDLEdBQUcwVCxFQUFULEVBQWM7VUFDVixJQUFLSSxFQUFFLEdBQUdILEVBQVYsRUFBZTtZQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDLElBQUtzcUIsRUFBRSxHQUFHSixFQUFWLEVBQWU7WUFBRUYsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7WUFBZTtVQUFTOztVQUN6Q3FxQixFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0osRUFBVixFQUFlO1lBQUVGLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUVELElBQUtGLEVBQUUsSUFBSUgsRUFBWCxFQUFnQjtVQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQzFDLElBQUtzcUIsRUFBRSxJQUFJSixFQUFYLEVBQWdCO1VBQUVGLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7UUFDMUNxcUIsRUFBRSxHQUFHQyxFQUFMO1FBQVMvc0IsQ0FBQztRQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47O1FBQ2QsSUFBSytzQixFQUFFLEdBQUdKLEVBQVYsRUFBZTtVQUFFak4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBOztRQUNyRCxJQUFLRCxFQUFFLEdBQUdMLEVBQVYsRUFBZTtVQUFFaE4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBO1FBQ3JEO1VBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7TUFFOUIsS0FBSyxDQUFMO1FBQ0ksSUFBS3VXLENBQUMsR0FBRzBULEVBQVQsRUFBYztVQUNWSSxFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0osRUFBVixFQUFlO1lBQUVGLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUNELElBQUtoVSxDQUFDLEdBQUcyVCxFQUFULEVBQWM7VUFDVixJQUFLRyxFQUFFLEdBQUdKLEVBQVYsRUFBZTtZQUFFRCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDLElBQUtzcUIsRUFBRSxHQUFHTCxFQUFWLEVBQWU7WUFBRUQsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7WUFBZTtVQUFTOztVQUN6Q3FxQixFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1lBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUVELElBQUtGLEVBQUUsSUFBSUosRUFBWCxFQUFnQjtVQUFFRCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQzFDLElBQUtzcUIsRUFBRSxJQUFJTCxFQUFYLEVBQWdCO1VBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7UUFDMUNxcUIsRUFBRSxHQUFHQyxFQUFMO1FBQVMvc0IsQ0FBQztRQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47O1FBQ2QsSUFBSytzQixFQUFFLEdBQUdMLEVBQVYsRUFBZTtVQUFFaE4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBOztRQUNyRCxJQUFLRCxFQUFFLEdBQUdKLEVBQVYsRUFBZTtVQUFFak4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBO1FBQ3JEO1VBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7TUFFOUIsS0FBSyxDQUFMO1FBQ0ksSUFBS3VXLENBQUMsR0FBRzJULEVBQVQsRUFBYztVQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQ3hDcXFCLEVBQUUsR0FBR0MsRUFBTDtRQUFTL3NCLENBQUM7UUFBSStzQixFQUFFLEdBQUdQLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztRQUNkLElBQUtnWixDQUFDLEdBQUcwVCxFQUFULEVBQWM7VUFDVixJQUFLSyxFQUFFLEdBQUdKLEVBQVYsRUFBZTtZQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDO1lBQUVpZCxLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1lBQWlCRSxLQUFLLEdBQUcsQ0FBUjtZQUFXO1VBQVE7VUFBQTtRQUN6Qzs7UUFFRCxJQUFLRCxFQUFFLEdBQUdKLEVBQVYsRUFBZTtVQUFFak4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBOztRQUNyRCxJQUFLRCxFQUFFLEdBQUdMLEVBQVYsRUFBZTtVQUFFaE4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBO1FBQ3JEO1VBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7TUFFOUIsS0FBSyxDQUFMO1FBQ0ksSUFBS3VXLENBQUMsR0FBRzBULEVBQVQsRUFBYztVQUFFRCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQ3hDcXFCLEVBQUUsR0FBR0MsRUFBTDtRQUFTL3NCLENBQUM7UUFBSStzQixFQUFFLEdBQUdQLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztRQUNkLElBQUtnWixDQUFDLEdBQUcyVCxFQUFULEVBQWM7VUFDVixJQUFLSSxFQUFFLEdBQUdMLEVBQVYsRUFBZTtZQUFFRCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDO1lBQUVpZCxLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1lBQWlCRSxLQUFLLEdBQUcsQ0FBUjtZQUFXO1VBQVE7VUFBQTtRQUN6Qzs7UUFFRCxJQUFLRCxFQUFFLEdBQUdKLEVBQVYsRUFBZTtVQUFFak4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBOztRQUNyRCxJQUFLRCxFQUFFLEdBQUdMLEVBQVYsRUFBZTtVQUFFaE4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBO1FBQ3JEO1VBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7TUFFOUIsS0FBSyxDQUFMO1FBQ0ksSUFBS3VXLENBQUMsR0FBRzJULEVBQVQsRUFBYztVQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQ3hDLElBQUt1VyxDQUFDLEdBQUcwVCxFQUFULEVBQWM7VUFDVkksRUFBRSxHQUFHQyxFQUFMO1VBQVMvc0IsQ0FBQztVQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47O1VBQ2QsSUFBSytzQixFQUFFLEdBQUdKLEVBQVYsRUFBZTtZQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDO1lBQUVpZCxLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1lBQWlCRSxLQUFLLEdBQUcsQ0FBUjtZQUFXO1VBQVE7VUFBQTtRQUN6Qzs7UUFDRCxJQUFLRCxFQUFFLElBQUlMLEVBQVgsRUFBZ0I7VUFBRUQsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTOztRQUMxQ3FxQixFQUFFLEdBQUdDLEVBQUw7UUFBUy9zQixDQUFDO1FBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7UUFDZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1VBQUVoTixLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1VBQWlCRSxLQUFLLEdBQUcsQ0FBUjtVQUFXO1FBQVE7O1FBQUE7O1FBQ3JELElBQUtELEVBQUUsR0FBR0osRUFBVixFQUFlO1VBQUVqTixLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1VBQWlCRSxLQUFLLEdBQUcsQ0FBUjtVQUFXO1FBQVE7O1FBQUE7UUFDckQ7VUFBRVAsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTOztNQUU5QixLQUFLLENBQUw7UUFDSSxJQUFLdVcsQ0FBQyxHQUFHMFQsRUFBVCxFQUFjO1VBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7UUFDeEMsSUFBS3VXLENBQUMsR0FBRzJULEVBQVQsRUFBYztVQUNWRyxFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1lBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUVELElBQUtELEVBQUUsSUFBSUosRUFBWCxFQUFnQjtVQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQzFDcXFCLEVBQUUsR0FBR0MsRUFBTDtRQUFTL3NCLENBQUM7UUFBSStzQixFQUFFLEdBQUdQLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztRQUNkLElBQUsrc0IsRUFBRSxHQUFHSixFQUFWLEVBQWU7VUFBRWpOLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7VUFBaUJFLEtBQUssR0FBRyxDQUFSO1VBQVc7UUFBUTs7UUFBQTs7UUFDckQsSUFBS0QsRUFBRSxHQUFHTCxFQUFWLEVBQWU7VUFBRWhOLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7VUFBaUJFLEtBQUssR0FBRyxDQUFSO1VBQVc7UUFBUTs7UUFBQTtRQUNyRDtVQUFFUCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O01BRTlCLEtBQUssQ0FBTDtRQUNJLElBQUt1VyxDQUFDLEdBQUcyVCxFQUFULEVBQWM7VUFBRUYsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTOztRQUN4QyxJQUFLdVcsQ0FBQyxHQUFHMFQsRUFBVCxFQUFjO1VBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7UUFDeENxcUIsRUFBRSxHQUFHQyxFQUFMO1FBQVMvc0IsQ0FBQztRQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47O1FBRWQsSUFBSytzQixFQUFFLEdBQUdKLEVBQVYsRUFBZTtVQUFFak4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBOztRQUNyRCxJQUFLRCxFQUFFLEdBQUdMLEVBQVYsRUFBZTtVQUFFaE4sS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtVQUFpQkUsS0FBSyxHQUFHLENBQVI7VUFBVztRQUFROztRQUFBO1FBQ3JEO1VBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7TUFFOUIsS0FBSyxDQUFMO1FBQ0ksSUFBS3VXLENBQUMsR0FBRzJULEVBQVQsRUFBYztVQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O1FBQ3hDLElBQUt1VyxDQUFDLEdBQUcwVCxFQUFULEVBQWM7VUFBRUQsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTOztRQUN4Q3FxQixFQUFFLEdBQUdDLEVBQUw7UUFBUy9zQixDQUFDO1FBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7UUFFZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1VBQUVoTixLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1VBQWlCRSxLQUFLLEdBQUcsQ0FBUjtVQUFXO1FBQVE7O1FBQUE7O1FBQ3JELElBQUtELEVBQUUsR0FBR0osRUFBVixFQUFlO1VBQUVqTixLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1VBQWlCRSxLQUFLLEdBQUcsQ0FBUjtVQUFXO1FBQVE7O1FBQUE7UUFDckQ7VUFBRVAsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7VUFBZTtRQUFTOztNQUU5QixLQUFLLENBQUw7UUFDSSxJQUFLdVcsQ0FBQyxHQUFHMlQsRUFBVCxFQUFjO1VBQ1YsSUFBS0ksRUFBRSxHQUFHTCxFQUFWLEVBQWU7WUFBRUQsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7WUFBZTtVQUFTOztVQUN6Q3FxQixFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1lBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUNELElBQUtoVSxDQUFDLEdBQUcwVCxFQUFULEVBQWM7VUFDVkksRUFBRSxHQUFHQyxFQUFMO1VBQVMvc0IsQ0FBQztVQUFJK3NCLEVBQUUsR0FBR1AsQ0FBQyxDQUFDL3BCLENBQUMsR0FBR29wQixJQUFJLENBQUM3ckIsQ0FBRCxDQUFULENBQU47O1VBQ2QsSUFBSytzQixFQUFFLEdBQUdKLEVBQVYsRUFBZTtZQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDO1lBQUVpZCxLQUFLLElBQUkxRyxDQUFDLEdBQUc4VCxFQUFiO1lBQWlCRSxLQUFLLEdBQUcsQ0FBUjtZQUFXO1VBQVE7VUFBQTtRQUN6Qzs7UUFDRDtVQUFFUCxNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtVQUFlO1FBQVM7O01BRTlCLEtBQUssQ0FBTDtRQUNJLElBQUt1VyxDQUFDLEdBQUcwVCxFQUFULEVBQWM7VUFDVixJQUFLSyxFQUFFLEdBQUdKLEVBQVYsRUFBZTtZQUFFRixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQVksQ0FBWjtZQUFlO1VBQVM7O1VBQ3pDcXFCLEVBQUUsR0FBR0MsRUFBTDtVQUFTL3NCLENBQUM7VUFBSStzQixFQUFFLEdBQUdQLENBQUMsQ0FBQy9wQixDQUFDLEdBQUdvcEIsSUFBSSxDQUFDN3JCLENBQUQsQ0FBVCxDQUFOOztVQUNkLElBQUsrc0IsRUFBRSxHQUFHSixFQUFWLEVBQWU7WUFBRUYsTUFBTSxDQUFDaHFCLENBQUQsQ0FBTixHQUFZLENBQVo7WUFBZTtVQUFTOztVQUN6QztZQUFFaWQsS0FBSyxJQUFJMUcsQ0FBQyxHQUFHOFQsRUFBYjtZQUFpQkUsS0FBSyxHQUFHLENBQVI7WUFBVztVQUFRO1VBQUE7UUFDekM7O1FBQ0QsSUFBS2hVLENBQUMsR0FBRzJULEVBQVQsRUFBYztVQUNWRyxFQUFFLEdBQUdDLEVBQUw7VUFBUy9zQixDQUFDO1VBQUkrc0IsRUFBRSxHQUFHUCxDQUFDLENBQUMvcEIsQ0FBQyxHQUFHb3BCLElBQUksQ0FBQzdyQixDQUFELENBQVQsQ0FBTjs7VUFDZCxJQUFLK3NCLEVBQUUsR0FBR0wsRUFBVixFQUFlO1lBQUVELE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1lBQWU7VUFBUzs7VUFDekM7WUFBRWlkLEtBQUssSUFBSTFHLENBQUMsR0FBRzhULEVBQWI7WUFBaUJFLEtBQUssR0FBRyxDQUFSO1lBQVc7VUFBUTtVQUFBO1FBQ3pDOztRQUNEO1VBQUVQLE1BQU0sQ0FBQ2hxQixDQUFELENBQU4sR0FBWSxDQUFaO1VBQWU7UUFBUzs7TUFFOUI7UUFFSTtJQTlJUjtFQWdKSDs7RUFFRGdxQixNQUFNLENBQUNocUIsQ0FBRCxDQUFOLEdBQWFpZCxLQUFLLEdBQUdrTixPQUFPLEdBQUdKLENBQUMsQ0FBQy9wQixDQUFELENBQWhDO0FBQ0g7QUFFTSxJQUFNOG9CLFdBQWIsK0ZBS0kscUJBQVludUIsQ0FBWixFQUF1QkMsQ0FBdkIsRUFBa0NrUCxDQUFsQyxFQUEyQztFQUFBOztFQUFBOztFQUFBOztFQUFBOztFQUFBOztFQUN2QyxLQUFLc2YsSUFBTCxHQUFZLElBQUkvdUIsVUFBSixDQUFlLElBQWYsQ0FBWjtFQUNBLEtBQUtndkIsVUFBTCxHQUFrQk8scUJBQXFCLENBQUNqdkIsQ0FBRCxFQUFJLEtBQUt5dUIsSUFBVCxFQUFldGYsQ0FBZixDQUFyQixHQUF5QyxDQUEzRDtFQUNBLEtBQUswZixNQUFMLEdBQWMsSUFBSW52QixVQUFKLENBQWVNLENBQUMsR0FBR0MsQ0FBbkIsQ0FBZDtFQUNBLEtBQUtxTSxNQUFMLEdBQWM2QyxDQUFDLEdBQUcsQ0FBbEI7QUFDSCxDQVZMOzs7Ozs7Ozs7Ozs7Ozs7QUM1U00sU0FBVTlLLGlCQUFWLENBQTRCL0MsR0FBNUIsRUFBNERDLEdBQTVELEVBQTRGdkIsQ0FBNUYsRUFBdUdDLENBQXZHLEVBQStHc2hCLEdBQS9HLEVBQTRIQyxHQUE1SCxFQUF5SW5mLEVBQXpJLEVBQXFKQyxFQUFySixFQUFpSzhmLEVBQWpLLEVBQTZLQyxFQUE3SyxFQUF1TDtFQUN6TCxJQUFJcGMsQ0FBQyxHQUFHLENBQVI7RUFBQSxJQUFXWixDQUFDLEdBQUcsQ0FBZjtFQUFBLElBQWtCd3FCLElBQUksR0FBSXZ0QixFQUFFLEdBQUd0QyxDQUFMLEdBQVNxQyxFQUFWLEdBQWdCLENBQXpDO0VBQUEsSUFBNENnYyxHQUFHLEdBQUd3UixJQUFsRDs7RUFFQSxLQUFLNXBCLENBQUMsR0FBRzNELEVBQVQsRUFBYTJELENBQUMsR0FBR29jLEVBQWpCLEVBQXFCLEVBQUVwYyxDQUFGLEVBQUs0cEIsSUFBSSxJQUFJN3ZCLENBQWIsRUFBZ0JxZSxHQUFHLEdBQUd3UixJQUEzQyxFQUFpRDtJQUM3QyxLQUFLeHFCLENBQUMsR0FBR2hELEVBQVQsRUFBYWdELENBQUMsR0FBRytjLEVBQWpCLEVBQXFCLEVBQUUvYyxDQUFGLEVBQUssRUFBRWdaLEdBQTVCLEVBQWlDO01BQzdCOWMsR0FBRyxDQUFDOGMsR0FBRCxDQUFILEdBQVcsQ0FBQyxDQUFELEdBQUsvYyxHQUFHLENBQUMrYyxHQUFELENBQVIsR0FBZ0IvYyxHQUFHLENBQUMrYyxHQUFHLEdBQUdrRCxHQUFQLENBQW5CLEdBQWlDamdCLEdBQUcsQ0FBQytjLEdBQUcsR0FBR2tELEdBQVAsQ0FBcEMsR0FBa0RqZ0IsR0FBRyxDQUFDK2MsR0FBRyxHQUFHbUQsR0FBUCxDQUFyRCxHQUFtRWxnQixHQUFHLENBQUMrYyxHQUFHLEdBQUdtRCxHQUFQLENBQWpGO0lBQ0g7RUFDSjtBQUNKO0FBRUssU0FBVWxkLHVCQUFWLENBQWtDaEQsR0FBbEMsRUFBaUQyUyxHQUFqRCxFQUE4RDZiLEVBQTlELEVBQTBFdk8sR0FBMUUsRUFBdUZDLEdBQXZGLEVBQW9HQyxHQUFwRyxFQUFpSEMsR0FBakgsRUFBNEg7RUFDOUgsSUFBSXFPLEdBQUcsR0FBRyxDQUFDLENBQUQsR0FBS3p1QixHQUFHLENBQUMyUyxHQUFELENBQVIsR0FBZ0IzUyxHQUFHLENBQUMyUyxHQUFHLEdBQUdzTixHQUFQLENBQW5CLEdBQWlDamdCLEdBQUcsQ0FBQzJTLEdBQUcsR0FBR3NOLEdBQVAsQ0FBOUM7RUFDQSxJQUFJeU8sR0FBRyxHQUFHLENBQUMsQ0FBRCxHQUFLMXVCLEdBQUcsQ0FBQzJTLEdBQUQsQ0FBUixHQUFnQjNTLEdBQUcsQ0FBQzJTLEdBQUcsR0FBR3VOLEdBQVAsQ0FBbkIsR0FBaUNsZ0IsR0FBRyxDQUFDMlMsR0FBRyxHQUFHdU4sR0FBUCxDQUE5QztFQUNBLElBQUl5TyxHQUFHLEdBQUczdUIsR0FBRyxDQUFDMlMsR0FBRyxHQUFHd04sR0FBUCxDQUFILEdBQWlCbmdCLEdBQUcsQ0FBQzJTLEdBQUcsR0FBR3dOLEdBQVAsQ0FBcEIsR0FBa0NuZ0IsR0FBRyxDQUFDMlMsR0FBRyxHQUFHeU4sR0FBUCxDQUFyQyxHQUFtRHBnQixHQUFHLENBQUMyUyxHQUFHLEdBQUd5TixHQUFQLENBQWhFO0VBQ0EsSUFBSXdPLFVBQVUsR0FBSWh2QixJQUFJLENBQUNnRixJQUFMLENBQVcsQ0FBQzZwQixHQUFHLEdBQUdDLEdBQVAsS0FBZUQsR0FBRyxHQUFHQyxHQUFyQixJQUE0QixJQUFJQyxHQUFKLEdBQVVBLEdBQWpELENBQUQsR0FBMkQsQ0FBNUU7RUFFQSxPQUFPL3VCLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUMwQyxHQUFMLENBQVNrc0IsRUFBRSxHQUFHSSxVQUFkLENBQVQsRUFBb0NodkIsSUFBSSxDQUFDMEMsR0FBTCxDQUFTLEVBQUVrc0IsRUFBRSxHQUFHSSxVQUFQLENBQVQsQ0FBcEMsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7OztBQ2pCYztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xpRDtBQUNsQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsOERBQWM7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmtDO0FBQzZCO0FBQ2hEO0FBQ2YsZUFBZSxzREFBTztBQUN0QjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMscUVBQXFCO0FBQzlCOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlFQUFlO0VBQ1p6ckIsVUFBVSxFQUFWQSxtREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NhY2hlL2NhY2hlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2RhdGFfdHlwZS9kYXRhX3R5cGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbWdwcm9jL2NvbnZvbC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2ltZ3Byb2MvcmVzYW1wbGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9qc2ZlYXROZXh0LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMva2V5cG9pbnRfdC9rZXlwb2ludF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbGluYWxnL2xpbmFsZy1iYXNlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0bWF0aC9tYXRtYXRoLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0cml4X3QvbWF0cml4X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbm9kZV91dGlscy9kYXRhX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9vcmIvYml0X3BhdHRlcm5fMzEudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9vcmIvcmVjdGlmeV9wYXRjaC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUveWFwZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUveWFwZV91dGlscy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL3lhcGUwNi95YXBlMDZfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcbiAgICBhbGxvY2F0ZTogKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGdldF9idWZmZXI6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IF9wb29sX25vZGVfdDtcbiAgICBwdXRfYnVmZmVyOiAobm9kZTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgY2FjaGUgaW1wbGVtZW50cyBJQ2FjaGUge1xuICAgIHByaXZhdGUgX3Bvb2xfaGVhZDogX3Bvb2xfbm9kZV90O1xuICAgIHByaXZhdGUgX3Bvb2xfdGFpbDogX3Bvb2xfbm9kZV90O1xuICAgIHByaXZhdGUgX3Bvb2xfc2l6ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHk6IGFueSwgZGF0YV9zaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXM6IG51bWJlcik6IF9wb29sX25vZGVfdCB7XG4gICAgICAgIC8vIGFzc3VtZSB3ZSBoYXZlIGVub3VnaCBmcmVlIG5vZGVzXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX2hlYWQubmV4dDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplLS07XG5cbiAgICAgICAgaWYgKHNpemVfaW5fYnl0ZXMgPiBub2RlLnNpemUpIHtcbiAgICAgICAgICAgIG5vZGUucmVzaXplKHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHB1dF9idWZmZXIobm9kZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBVOEMxX3Q6IDB4MDEwMCB8IDB4MDEsXG4gICAgVThDM190OiAweDAxMDAgfCAweDAzLFxuICAgIFU4QzRfdDogMHgwMTAwIHwgMHgwNCxcblxuICAgIEYzMkMxX3Q6IDB4MDQwMCB8IDB4MDEsXG4gICAgRjMyQzJfdDogMHgwNDAwIHwgMHgwMixcbiAgICBTMzJDMV90OiAweDAyMDAgfCAweDAxLFxuICAgIFMzMkMyX3Q6IDB4MDIwMCB8IDB4MDJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhX1R5cGUge1xuICAgIF9nZXRfZGF0YV90eXBlOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9jaGFubmVsOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90eXBlIGltcGxlbWVudHMgSURhdGFfVHlwZSB7XG4gICAgcHJpdmF0ZSBfZGF0YV90eXBlX3NpemU6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gX2NvbnZvbF91OChidWY6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIHNyY19kOiBudW1iZXJbXSwgZHN0X2Q6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsdGVyOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLCBzdW0xID0gMCwgc3VtMiA9IDAsIHN1bTMgPSAwLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZvbChidWY6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIHNyY19kOiBudW1iZXJbXSwgZHN0X2Q6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsdGVyOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdCdcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSAnLi4vY2FjaGUvY2FjaGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGVfdTgoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgY2FjaGU6IGNhY2hlLCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgaW52X3NjYWxlXzI1NiA9IChzY2FsZV94ICogc2NhbGVfeSAqIDB4MTAwMDApIHwgMDtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLCBiZXRhID0gMCwgYmV0YTEgPSAwO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5pMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuaTMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSBmc3gxKSAqIDB4MTAwKSB8IDA7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gMjU2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChmc3gyIC0gc3gyKSAqIDI1NikgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDNdO1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogMyArIDFdO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IChNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCkgKiAyNTYpIHwgMDtcbiAgICAgICAgICAgIGJldGExID0gMjU2IC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKGJldGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIDI1NikgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTEpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF0gKiAyNTY7XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGUoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgY2FjaGU6IGNhY2hlLCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgc2NhbGUgPSAxLjAgLyAoc2NhbGVfeCAqIHNjYWxlX3kpO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAuMCwgYmV0YSA9IDAuMCwgYmV0YTEgPSAwLjA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5mMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gxIC0gZnN4MSkgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChmc3gyIC0gc3gyKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDNdIHwgMDtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDMgKyAxXSB8IDA7XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApO1xuICAgICAgICAgICAgYmV0YTEgPSAxLjAgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYmV0YSkgPCAxZS0zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTE7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufSIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZSdcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSAnLi9jYWNoZS9jYWNoZSdcbmltcG9ydCB7IGltZ3Byb2MgfSBmcm9tICcuL2ltZ3Byb2MvaW1ncHJvYydcbmltcG9ydCB7IF9yZXNhbXBsZSwgX3Jlc2FtcGxlX3U4IH0gZnJvbSAnLi9pbWdwcm9jL3Jlc2FtcGxlJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vaW1ncHJvYy9jb252b2wnXG5pbXBvcnQgeyBsaW5hbGcgfSBmcm9tICcuL2xpbmFsZy9saW5hbGcnXG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gJy4vbGluYWxnL2xpbmFsZy1iYXNlJ1xuaW1wb3J0IHsgbWF0aCB9IGZyb20gJy4vbWF0aC9tYXRoJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGgnXG5pbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4vbWF0cml4X3QvbWF0cml4X3QnXG5pbXBvcnQgeyBweXJhbWlkX3QgfSBmcm9tICcuL3B5cmFtaWRfdC9weXJhbWlkX3QnXG5pbXBvcnQgeyBrZXlwb2ludF90IH0gZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QnXG5pbXBvcnQgeyBvcmIgfSBmcm9tICcuL29yYi9vcmInXG5pbXBvcnQgeyBiaXRfcGF0dGVybl8zMSB9IGZyb20gJy4vb3JiL2JpdF9wYXR0ZXJuXzMxJ1xuaW1wb3J0IHsgcmVjdGlmeV9wYXRjaCB9IGZyb20gJy4vb3JiL3JlY3RpZnlfcGF0Y2gnXG5pbXBvcnQgeyB5YXBlIH0gZnJvbSAnLi95YXBlL3lhcGUnXG5pbXBvcnQgeyBjb21wdXRlX2xhcGxhY2lhbiwgaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUgfSBmcm9tICcuL3lhcGUwNi95YXBlMDZfdXRpbHMnXG5pbXBvcnQgeyB5YXBlMDYgfSBmcm9tICcuL3lhcGUwNi95YXBlMDYnXG5pbXBvcnQgeyByYW5zYWNfcGFyYW1zX3QgfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190J1xuaW1wb3J0IHsgbW90aW9uX2VzdGltYXRvciB9IGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fZXN0aW1hdG9yJ1xuaW1wb3J0IHsgb3B0aWNhbF9mbG93X2xrIH0gZnJvbSAnLi9vcHRpY2FsX2Zsb3dfbGsvb3B0aWNhbF9mbG93X2xrJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHByb3RlY3RlZCBjYWNoZTogY2FjaGU7XG4gICAgc3RhdGljIGNhY2hlOiB0eXBlb2YgY2FjaGU7XG4gICAgc3RhdGljIGltZ3Byb2M6IHR5cGVvZiBpbWdwcm9jO1xuICAgIHN0YXRpYyBsaW5hbGc6IHR5cGVvZiBsaW5hbGc7XG4gICAgc3RhdGljIG1hdGg6IHR5cGVvZiBtYXRoO1xuICAgIHN0YXRpYyBtYXRtYXRoOiB0eXBlb2YgbWF0bWF0aDtcbiAgICBzdGF0aWMgbWF0cml4X3Q6IHR5cGVvZiBtYXRyaXhfdDtcbiAgICBzdGF0aWMgcHlyYW1pZF90OiB0eXBlb2YgcHlyYW1pZF90O1xuICAgIHN0YXRpYyBrZXlwb2ludF90OiB0eXBlb2Yga2V5cG9pbnRfdDtcbiAgICBzdGF0aWMgeWFwZTogdHlwZW9mIHlhcGU7XG4gICAgc3RhdGljIHlhcGUwNjogdHlwZW9mIHlhcGUwNjtcbiAgICBzdGF0aWMgcmFuc2FjX3BhcmFtc190OiB0eXBlb2YgcmFuc2FjX3BhcmFtc190O1xuICAgIHN0YXRpYyBhZmZpbmUyZDogdHlwZW9mIGFmZmluZTJkO1xuICAgIHN0YXRpYyBob21vZ3JhcGh5MmQ6IHR5cGVvZiBob21vZ3JhcGh5MmQ7XG4gICAgc3RhdGljIG1vdGlvbl9lc3RpbWF0b3I6IHR5cGVvZiBtb3Rpb25fZXN0aW1hdG9yO1xuICAgIHN0YXRpYyBvcHRpY2FsX2Zsb3dfbGs6IHR5cGVvZiBvcHRpY2FsX2Zsb3dfbGs7XG4gICAgc3RhdGljIG9yYjogdHlwZW9mIG9yYjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cblxuICAgIC8vIFZFUlNJT05cbiAgICBzdGF0aWMgVkVSU0lPTjogc3RyaW5nID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBDMV90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgIHN0YXRpYyBDMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMl90O1xuICAgIHN0YXRpYyBDM190ID0gSlNGRUFUX0NPTlNUQU5UUy5DM190O1xuICAgIHN0YXRpYyBDNF90ID0gSlNGRUFUX0NPTlNUQU5UUy5DNF90O1xuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIHN0YXRpYyBDT0xPUl9SR0JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfUkdCMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZO1xuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgc3RhdGljIEJPWF9CTFVSX05PU0NBTEUgPSBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEU7XG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBzdGF0aWMgU1ZEX1VfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVDtcbiAgICBzdGF0aWMgU1ZEX1ZfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVDtcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIHN0YXRpYyBVOEMxX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFU4QzNfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzNfdDtcbiAgICBzdGF0aWMgVThDNF90ID0gdGhpcy5VOF90IHwgdGhpcy5DNF90O1xuXG4gICAgc3RhdGljIEYzMkMxX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBGMzJDMl90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzJfdDtcbiAgICBzdGF0aWMgUzMyQzFfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFMzMkMyX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMl90O1xuXG4gICAgZ2V0X2RhdGFfdHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2NoYW5uZWwodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodHlwZSk7XG4gICAgfVxufVxuXG5jbGFzcyBtb3Rpb25fbW9kZWwgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgVDA6IG1hdHJpeF90O1xuICAgIHB1YmxpYyBUMTogbWF0cml4X3Q7XG4gICAgcHVibGljIEF0QTogbWF0cml4X3Q7XG4gICAgcHVibGljIEF0QjogbWF0cml4X3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuVDAgPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuVDEgPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRBID0gbmV3IG1hdHJpeF90KDYsIDYsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QiA9IG5ldyBtYXRyaXhfdCg2LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgc3FyKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgVDA6IG51bWJlcltdLCBUMTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHM6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBjb3VudDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBqID0gMCwgayA9IDAsIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkeDEgPSAwLjAsIGR5MSA9IDAuMCwgZHgyID0gMC4wLCBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeDIgKiBkeTEgLSBkeTIgKiBkeDEpIDw9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIChNYXRoLmFicyhkeDEpICsgTWF0aC5hYnMoZHkxKSArIE1hdGguYWJzKGR4MikgKyBNYXRoLmFicyhkeTIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBydW4oZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgbW9kZWw6IG1hdHJpeF90LCBjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgcHggPSAwLjAsIHB5ID0gMC4wO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmNsYXNzIGhvbW9ncmFwaHkyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgcHVibGljIG1MdEw6IG1hdHJpeF90O1xuICAgIHB1YmxpYyBFdmVjOiBtYXRyaXhfdDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tTHRMID0gbmV3IG1hdHJpeF90KDksIDksIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkV2ZWMgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHJ1bihmcm9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgdG86IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBtb2RlbDogbWF0cml4X3QsIGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIEx0TCA9IHRoaXMubUx0TC5kYXRhLCBldmQgPSB0aGlzLkV2ZWMuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLjAsIHkgPSAwLjAsIFggPSAwLjAsIFkgPSAwLjA7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGpzZmVhdE5leHQubGluYWxnKCk7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG5cbiAgICAgICAgLy8gbm9ybVxuICAgICAgICB2YXIgc214ID0gMC4wLCBzbXkgPSAwLjAsIGNteCA9IDAuMCwgY215ID0gMC4wLCBzTXggPSAwLjAsIHNNeSA9IDAuMCwgY014ID0gMC4wLCBjTXkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjbXggKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGNteSArPSB0b1tpXS55O1xuICAgICAgICAgICAgY014ICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGNNeSArPSBmcm9tW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjbXggLz0gY291bnQ7IGNteSAvPSBjb3VudDtcbiAgICAgICAgY014IC89IGNvdW50OyBjTXkgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHNteCArPSBNYXRoLmFicyh0b1tpXS54IC0gY214KTtcbiAgICAgICAgICAgIHNteSArPSBNYXRoLmFicyh0b1tpXS55IC0gY215KTtcbiAgICAgICAgICAgIHNNeCArPSBNYXRoLmFicyhmcm9tW2ldLnggLSBjTXgpO1xuICAgICAgICAgICAgc015ICs9IE1hdGguYWJzKGZyb21baV0ueSAtIGNNeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc214KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc215KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc014KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc015KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikgcmV0dXJuIDA7XG5cbiAgICAgICAgc214ID0gY291bnQgLyBzbXg7IHNteSA9IGNvdW50IC8gc215O1xuICAgICAgICBzTXggPSBjb3VudCAvIHNNeDsgc015ID0gY291bnQgLyBzTXk7XG5cbiAgICAgICAgdDBkWzBdID0gc014OyB0MGRbMV0gPSAwOyB0MGRbMl0gPSAtY014ICogc014O1xuICAgICAgICB0MGRbM10gPSAwOyB0MGRbNF0gPSBzTXk7IHQwZFs1XSA9IC1jTXkgKiBzTXk7XG4gICAgICAgIHQwZFs2XSA9IDA7IHQwZFs3XSA9IDA7IHQwZFs4XSA9IDE7XG5cbiAgICAgICAgdDFkWzBdID0gMS4wIC8gc214OyB0MWRbMV0gPSAwOyB0MWRbMl0gPSBjbXg7XG4gICAgICAgIHQxZFszXSA9IDA7IHQxZFs0XSA9IDEuMCAvIHNteTsgdDFkWzVdID0gY215O1xuICAgICAgICB0MWRbNl0gPSAwOyB0MWRbN10gPSAwOyB0MWRbOF0gPSAxO1xuICAgICAgICAvL1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdCBzeXN0ZW1cbiAgICAgICAgaSA9IDgxO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIEx0TFtpXSA9IDAuMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgeCA9ICh0b1tpXS54IC0gY214KSAqIHNteDtcbiAgICAgICAgICAgIHkgPSAodG9baV0ueSAtIGNteSkgKiBzbXk7XG4gICAgICAgICAgICBYID0gKGZyb21baV0ueCAtIGNNeCkgKiBzTXg7XG4gICAgICAgICAgICBZID0gKGZyb21baV0ueSAtIGNNeSkgKiBzTXk7XG5cbiAgICAgICAgICAgIEx0TFswXSArPSBYICogWDtcbiAgICAgICAgICAgIEx0TFsxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFsyXSArPSBYO1xuXG4gICAgICAgICAgICBMdExbNl0gKz0gWCAqIC14ICogWDtcbiAgICAgICAgICAgIEx0TFs3XSArPSBYICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzhdICs9IFggKiAteDtcbiAgICAgICAgICAgIEx0TFsxMF0gKz0gWSAqIFk7XG4gICAgICAgICAgICBMdExbMTFdICs9IFk7XG5cbiAgICAgICAgICAgIEx0TFsxNV0gKz0gWSAqIC14ICogWDtcbiAgICAgICAgICAgIEx0TFsxNl0gKz0gWSAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFsxN10gKz0gWSAqIC14O1xuICAgICAgICAgICAgTHRMWzIwXSArPSAxLjA7XG5cbiAgICAgICAgICAgIEx0TFsyNF0gKz0gLXggKiBYO1xuICAgICAgICAgICAgTHRMWzI1XSArPSAteCAqIFk7XG4gICAgICAgICAgICBMdExbMjZdICs9IC14O1xuICAgICAgICAgICAgTHRMWzMwXSArPSBYICogWDtcbiAgICAgICAgICAgIEx0TFszMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMzJdICs9IFg7XG4gICAgICAgICAgICBMdExbMzNdICs9IFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbMzRdICs9IFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbMzVdICs9IFggKiAteTtcbiAgICAgICAgICAgIEx0TFs0MF0gKz0gWSAqIFk7XG4gICAgICAgICAgICBMdExbNDFdICs9IFk7XG4gICAgICAgICAgICBMdExbNDJdICs9IFkgKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNDNdICs9IFkgKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNDRdICs9IFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs1MF0gKz0gMS4wO1xuICAgICAgICAgICAgTHRMWzUxXSArPSAteSAqIFg7XG4gICAgICAgICAgICBMdExbNTJdICs9IC15ICogWTtcbiAgICAgICAgICAgIEx0TFs1M10gKz0gLXk7XG4gICAgICAgICAgICBMdExbNjBdICs9IC14ICogWCAqIC14ICogWCArIC15ICogWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs2MV0gKz0gLXggKiBYICogLXggKiBZICsgLXkgKiBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzYyXSArPSAteCAqIFggKiAteCArIC15ICogWCAqIC15O1xuICAgICAgICAgICAgTHRMWzcwXSArPSAteCAqIFkgKiAteCAqIFkgKyAteSAqIFkgKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNzFdICs9IC14ICogWSAqIC14ICsgLXkgKiBZICogLXk7XG4gICAgICAgICAgICBMdExbODBdICs9IC14ICogLXggKyAteSAqIC15O1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gc3ltbWV0cnlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDk7ICsraSkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsrailcbiAgICAgICAgICAgICAgICBMdExbaSAqIDkgKyBqXSA9IEx0TFtqICogOSArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgX2xpbmFsZy5laWdlblZWKHRoaXMubUx0TCwgdGhpcy5FdmVjKTtcblxuICAgICAgICBtZFswXSA9IGV2ZFs3Ml0sIG1kWzFdID0gZXZkWzczXSwgbWRbMl0gPSBldmRbNzRdO1xuICAgICAgICBtZFszXSA9IGV2ZFs3NV0sIG1kWzRdID0gZXZkWzc2XSwgbWRbNV0gPSBldmRbNzddO1xuICAgICAgICBtZFs2XSA9IGV2ZFs3OF0sIG1kWzddID0gZXZkWzc5XSwgbWRbOF0gPSBldmRbODBdO1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBzZXQgYm90dG9tIHJpZ2h0IHRvIDEuMFxuICAgICAgICB4ID0gMS4wIC8gbWRbOF07XG4gICAgICAgIG1kWzBdICo9IHg7IG1kWzFdICo9IHg7IG1kWzJdICo9IHg7XG4gICAgICAgIG1kWzNdICo9IHg7IG1kWzRdICo9IHg7IG1kWzVdICo9IHg7XG4gICAgICAgIG1kWzZdICo9IHg7IG1kWzddICo9IHg7IG1kWzhdID0gMS4wO1xuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlcnJvcihmcm9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgdG86IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBtb2RlbDogbWF0cml4X3QsIGVycjogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSwgY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgd3cgPSAwLjAsIGR4ID0gMC4wLCBkeSA9IDAuMDtcbiAgICAgICAgdmFyIG0gPSBtb2RlbC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICB3dyA9IDEuMCAvIChtWzZdICogcHQwLnggKyBtWzddICogcHQwLnkgKyAxLjApO1xuICAgICAgICAgICAgZHggPSAobVswXSAqIHB0MC54ICsgbVsxXSAqIHB0MC55ICsgbVsyXSkgKiB3dyAtIHB0MS54O1xuICAgICAgICAgICAgZHkgPSAobVszXSAqIHB0MC54ICsgbVs0XSAqIHB0MC55ICsgbVs1XSkgKiB3dyAtIHB0MS55O1xuICAgICAgICAgICAgZXJyW2ldID0gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja19zdWJzZXQoZnJvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIHRvOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBzZWVtcyB0byByZWplY3QgZ29vZCBzdWJzZXRzIGFjdHVhbGx5XG4gICAgICAgIC8vaWYoIGhhdmVfY29sbGluZWFyX3BvaW50cyhmcm9tLCBjb3VudCkgfHwgaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKHRvLCBjb3VudCkgKSB7XG4gICAgICAgIC8vcmV0dXJuIGZhbHNlO1xuICAgICAgICAvL31cbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgaWYgKGNvdW50ID09IDQpIHtcbiAgICAgICAgICAgIHZhciBuZWdhdGl2ZSA9IDA7XG5cbiAgICAgICAgICAgIHZhciBmcDAgPSBmcm9tWzBdLCBmcDEgPSBmcm9tWzFdLCBmcDIgPSBmcm9tWzJdLCBmcDMgPSBmcm9tWzNdO1xuICAgICAgICAgICAgdmFyIHRwMCA9IHRvWzBdLCB0cDEgPSB0b1sxXSwgdHAyID0gdG9bMl0sIHRwMyA9IHRvWzNdO1xuXG4gICAgICAgICAgICAvLyBzZXQxXG4gICAgICAgICAgICB2YXIgQTExID0gZnAwLngsIEExMiA9IGZwMC55LCBBMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55LCBBMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQTMxID0gZnAyLngsIEEzMiA9IGZwMi55LCBBMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnksIEIxMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnksIEIyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBCMzEgPSB0cDIueCwgQjMyID0gdHAyLnksIEIzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICB2YXIgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0MlxuICAgICAgICAgICAgQTExID0gZnAxLngsIEExMiA9IGZwMS55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDEueCwgQjEyID0gdHAxLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQzXG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDRcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgaWYgKG5lZ2F0aXZlICE9IDAgJiYgbmVnYXRpdmUgIT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gYWxsIGdvb2RcbiAgICB9XG59XG5cbmpzZmVhdE5leHQuY2FjaGUgPSBjYWNoZTtcblxuanNmZWF0TmV4dC5weXJhbWlkX3QgPSBjbGFzcyBweXJhbWlkX3QgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbGV2ZWxzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwcml2YXRlIHB5cmRvd246IGFueTtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHM6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscyB8IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheShsZXZlbHMpO1xuICAgICAgICB2YXIgX2ltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgICAgIHRoaXMucHlyZG93biA9IF9pbWdwcm9jLnB5cmRvd247XG4gICAgfVxuICAgIGFsbG9jYXRlKHN0YXJ0X3c6IG51bWJlciwgc3RhcnRfaDogbnVtYmVyLCBkYXRhX3R5cGU6IG51bWJlcikge1xuICAgICAgICB2YXIgaSA9IHRoaXMubGV2ZWxzO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBtYXRyaXhfdChzdGFydF93ID4+IGksIHN0YXJ0X2ggPj4gaSwgZGF0YV90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZChpbnB1dDogbWF0cml4X3QsIHNraXBfZmlyc3RfbGV2ZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiOiBhbnkgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGlmICghc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICAgICAgdmFyIGogPSBpbnB1dC5jb2xzICogaW5wdXQucm93cztcbiAgICAgICAgICAgIHdoaWxlICgtLWogPj0gMCkge1xuICAgICAgICAgICAgICAgIGIuZGF0YVtqXSA9IGlucHV0LmRhdGFbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRoaXMuZGF0YVsxXTtcbiAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICBmb3IgKDsgaSA8IHRoaXMubGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5pbWdwcm9jID0gY2xhc3MgaW1ncHJvYyBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH07XG4gICAgZ3JheXNjYWxlKHNyYzogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IG51bWJlcikgPT4gdm9pZDsgZGF0YTogYW55IH0sIGNvZGU6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYzogYW55LCBkc3Q6IGFueSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgICAgICB2YXIgaCA9IHNyYy5yb3dzLCB3ID0gc3JjLmNvbHM7XG4gICAgICAgIGlmIChoID4gbmggJiYgdyA+IG53KSB7XG4gICAgICAgICAgICBkc3QucmVzaXplKG53LCBuaCwgc3JjLmNoYW5uZWwpO1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIGZhc3QgYWx0ZXJuYXRpdmUgKGZpeCBwb2ludCBzY2FsZSwgMHgxMDAgdG8gYXZvaWQgb3ZlcmZsb3cpXG4gICAgICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgZHN0LnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgaCAqIHcgLyAobmggKiBudykgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZV91OChzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlKHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJveF9ibHVyX2dyYXkoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IGNoYW5uZWw6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIHJhZGl1czogbnVtYmVyLCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cbiAgICBnYXVzc2lhbl9ibHVyKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgdHlwZTogYW55OyBjaGFubmVsOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIGtlcm5lbF9zaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGpzZmVhdG1hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZzogYW55LCByaG9fcmVzOiBudW1iZXIsIHRoZXRhX3JlczogbnVtYmVyLCB0aHJlc2hvbGQ6IG51bWJlcikge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWcuZGF0YTtcblxuICAgICAgICB2YXIgd2lkdGggPSBpbWcuY29scztcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5yb3dzO1xuICAgICAgICB2YXIgc3RlcCA9IHdpZHRoO1xuXG4gICAgICAgIHZhciBtaW5fdGhldGEgPSAwLjA7XG4gICAgICAgIHZhciBtYXhfdGhldGEgPSBNYXRoLlBJO1xuXG4gICAgICAgIHZhciBudW1hbmdsZSA9IE1hdGgucm91bmQoKG1heF90aGV0YSAtIG1pbl90aGV0YSkgLyB0aGV0YV9yZXMpO1xuICAgICAgICB2YXIgbnVtcmhvID0gTWF0aC5yb3VuZCgoKHdpZHRoICsgaGVpZ2h0KSAqIDIgKyAxKSAvIHJob19yZXMpO1xuICAgICAgICB2YXIgaXJobyA9IDEuMCAvIHJob19yZXM7XG5cbiAgICAgICAgdmFyIGFjY3VtID0gbmV3IEludDMyQXJyYXkoKG51bWFuZ2xlICsgMikgKiAobnVtcmhvICsgMikpOyAvL3R5cGVkIGFycmF5cyBhcmUgaW5pdGlhbGl6ZWQgdG8gMFxuICAgICAgICB2YXIgdGFiU2luID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG4gICAgICAgIHZhciB0YWJDb3MgPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcblxuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciBhbmcgPSBtaW5fdGhldGE7XG4gICAgICAgIGZvciAoOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgdGFiU2luW25dID0gTWF0aC5zaW4oYW5nKSAqIGlyaG87XG4gICAgICAgICAgICB0YWJDb3Nbbl0gPSBNYXRoLmNvcyhhbmcpICogaXJobztcbiAgICAgICAgICAgIGFuZyArPSB0aGV0YV9yZXNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDEuIGZpbGwgYWNjdW11bGF0b3JcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlW2kgKiBzdGVwICsgal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIsIChuKzEpICogKG51bXJobysyKSArIHIrMSwgdGFiQ29zW25dLCB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yb3VuZChqICogdGFiQ29zW25dICsgaSAqIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IChudW1yaG8gLSAxKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bVsobiArIDEpICogKG51bXJobyArIDIpICsgciArIDFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAyLiBmaW5kIGxvY2FsIG1heGltdW1zXG4gICAgICAgIC8vVE9ETzogQ29uc2lkZXIgbWFraW5nIGEgdmVjdG9yIGNsYXNzIHRoYXQgdXNlcyB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIF9zb3J0X2J1ZiA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG51bXJobzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IChuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW1bYmFzZV0gPiB0aHJlc2hvbGQgJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gMV0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIG51bXJobyAtIDJdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyBudW1yaG8gKyAyXSkge1xuICAgICAgICAgICAgICAgICAgICBfc29ydF9idWYucHVzaChiYXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAzLiBzb3J0IHRoZSBkZXRlY3RlZCBsaW5lcyBieSBhY2N1bXVsYXRvciB2YWx1ZVxuICAgICAgICBfc29ydF9idWYuc29ydChmdW5jdGlvbiAobDEsIGwyKSB7XG4gICAgICAgICAgICByZXR1cm4gPG51bWJlcj48dW5rbm93bj4oYWNjdW1bbDFdID4gYWNjdW1bbDJdIHx8IChhY2N1bVtsMV0gPT0gYWNjdW1bbDJdICYmIGwxIDwgbDIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgdmFyIGxpbmVzTWF4ID0gTWF0aC5taW4obnVtYW5nbGUgKiBudW1yaG8sIF9zb3J0X2J1Zi5sZW5ndGgpO1xuICAgICAgICB2YXIgc2NhbGUgPSAxLjAgLyAobnVtcmhvICsgMik7XG4gICAgICAgIHZhciBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfc29ydF9idWZbaV07XG4gICAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHZhciByID0gaWR4IC0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSAtIDE7XG4gICAgICAgICAgICB2YXIgbHJobyA9IChyIC0gKG51bXJobyAtIDEpICogMC41KSAqIHJob19yZXM7XG4gICAgICAgICAgICB2YXIgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgcHlyZG93bihzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGNoYW5uZWw6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBudW1iZXIsIGFyZzE6IG51bWJlciwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgc3g6IG51bWJlciwgc3k6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiBtYXRyaXhfdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4ICsgMV0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChhICsgdHJvdzFbeF0gKyBiICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChjICsgYiArIGEgKiAyKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNF0gLSBlKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZCArIGEgKyBjICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA1XSAtIGYpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgNV0gKyBjICsgZCAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSArIHRyb3cxW3ggKyAxXSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gcGxlYXNlIG5vdGU6IFxuICAgIC8vIGRzdF8odHlwZSkgc2l6ZSBzaG91bGQgYmUgY29scyA9IHNyYy5jb2xzKzEsIHJvd3MgPSBzcmMucm93cysxXG4gICAgY29tcHV0ZV9pbnRlZ3JhbF9pbWFnZShzcmM6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCBkc3Rfc3VtOiBudW1iZXJbXSwgZHN0X3Nxc3VtOiBudW1iZXJbXSwgZHN0X3RpbHRlZDogYW55W10pIHtcbiAgICAgICAgdmFyIHcwID0gc3JjLmNvbHMgfCAwLCBoMCA9IHNyYy5yb3dzIHwgMCwgc3JjX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIHcxID0gKHcwICsgMSkgfCAwO1xuICAgICAgICB2YXIgcyA9IDAsIHMyID0gMCwgcCA9IDAsIHB1cCA9IDAsIGkgPSAwLCBqID0gMCwgdiA9IDAsIGsgPSAwO1xuXG4gICAgICAgIGlmIChkc3Rfc3VtICYmIGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDAsIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgcyA9IHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcblxuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcCArIDFdID0gZHN0X3Nxc3VtW3B1cCArIDFdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRzdF9zdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkc3RfdGlsdGVkKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3AgKyAxXSA9IHNyY19kW2sgKyAxXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWFnb25hbFxuICAgICAgICAgICAgcCA9ICh3MSArIHcwKSB8IDAsIHB1cCA9IHcwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGgwOyArK2ksIHAgKz0gdzEsIHB1cCArPSB3MSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSB3MCAtIDE7IGogPiAwOyAtLWopIHtcbiAgICAgICAgICAgICAgICBwID0gaiArIGgwICogdzEsIHB1cCA9IHAgLSB3MTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBoMDsgaSA+IDA7IC0taSwgcCAtPSB3MSwgcHVwIC09IHcxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXF1YWxpemVfaGlzdG9ncmFtKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyBjaGFubmVsOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YSwgc2l6ZSA9IHcgKiBoO1xuICAgICAgICB2YXIgaSA9IDAsIHByZXYgPSAwLCBoaXN0MCwgbm9ybTtcblxuICAgICAgICB2YXIgaGlzdDBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigyNTYgPDwgMik7XG4gICAgICAgIGhpc3QwID0gaGlzdDBfbm9kZS5pMzI7XG4gICAgICAgIGZvciAoOyBpIDwgMjU2OyArK2kpIGhpc3QwW2ldID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgKytoaXN0MFtzcmNfZFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gaGlzdDBbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgcHJldiA9IGhpc3QwW2ldICs9IHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBub3JtID0gMjU1IC8gc2l6ZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgZHN0X2RbaV0gPSAoaGlzdDBbc3JjX2RbaV1dICogbm9ybSArIDAuNSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihoaXN0MF9ub2RlKTtcbiAgICB9XG4gICAgY2Fubnkoc3JjOiBhbnksIGRzdDogYW55LCBsb3dfdGhyZXNoOiBudW1iZXIsIGhpZ2hfdGhyZXNoOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmNfZCA9IHNyYy5kYXRhO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIGo6IG51bWJlciA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwID0gbWFwX25vZGUuaTMyO1xuICAgICAgICB2YXIgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHkgPSBkeGR5X25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeV9tID0gbmV3IG1hdHJpeF90KHcsIGgsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZHhkeV9ub2RlLmRhdGEpO1xuICAgICAgICB2YXIgcm93MCA9IDEsIHJvdzEgPSAodyArIDIgKyAxKSB8IDAsIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsIG1hcF93ID0gKHcgKyAyKSB8IDAsIG1hcF9pOiBudW1iZXIgPSAobWFwX3cgKyAxKSB8IDAsIHN0YWNrX2kgPSAwO1xuXG4gICAgICAgIHRoaXMuc29iZWxfZGVyaXZhdGl2ZXMoc3JjLCBkeGR5X20pO1xuXG4gICAgICAgIGlmIChsb3dfdGhyZXNoID4gaGlnaF90aHJlc2gpIHtcbiAgICAgICAgICAgIGkgPSBsb3dfdGhyZXNoO1xuICAgICAgICAgICAgbG93X3RocmVzaCA9IGhpZ2hfdGhyZXNoO1xuICAgICAgICAgICAgaGlnaF90aHJlc2ggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgzICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGJ1ZltpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gKChoICsgMikgKiAodyArIDIpKSB8IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgbWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqLCBncmFkICs9IDIpIHtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSBNYXRoLmFicyhkeGR5W2dyYWRdKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsxXSk7XG4gICAgICAgICAgICB4ID0gZHhkeVtncmFkXSwgeSA9IGR4ZHlbZ3JhZCArIDFdO1xuICAgICAgICAgICAgLy9idWZbcm93MStqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgIGJ1Zltyb3cxICsgal0gPSAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSArICgoeSBeICh5ID4+IDMxKSkgLSAoeSA+PiAzMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSBoOyArK2ksIGdyYWQgKz0gdzIpIHtcbiAgICAgICAgICAgIGlmIChpID09IGgpIHtcbiAgICAgICAgICAgICAgICBqID0gcm93MiArIHc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taiA+PSByb3cyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYnVmW3JvdzIral0gPSAgTWF0aC5hYnMoZHhkeVtncmFkKyhqPDwxKV0pICsgTWF0aC5hYnMoZHhkeVtncmFkKyhqPDwxKSsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W2dyYWQgKyAoaiA8PCAxKV0sIHkgPSBkeGR5W2dyYWQgKyAoaiA8PCAxKSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0geCp4ICsgeSp5O1xuICAgICAgICAgICAgICAgICAgICBidWZbcm93MiArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZ3JhZCA9IChncmFkIC0gdzIpIHwgMDtcbiAgICAgICAgICAgIG1hcFttYXBfaSAtIDFdID0gMDtcbiAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2osIF9ncmFkICs9IDIpIHtcbiAgICAgICAgICAgICAgICBmID0gYnVmW3JvdzEgKyBqXTtcbiAgICAgICAgICAgICAgICBpZiAoZiA+IGxvd190aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGR4ZHlbX2dyYWRdO1xuICAgICAgICAgICAgICAgICAgICB5ID0gZHhkeVtfZ3JhZCArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzID0geCBeIHk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZW1zIG90IGJlIGZhc3RlciB0aGFuIE1hdGguYWJzXG4gICAgICAgICAgICAgICAgICAgIHggPSAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIHkgPSAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIC8veCAqIHRhbigyMi41KSB4ICogdGFuKDY3LjUpID09IDIgKiB4ICsgeCAqIHRhbigyMi41KVxuICAgICAgICAgICAgICAgICAgICB0ZzIyeCA9IHggKiAxMzU3MztcbiAgICAgICAgICAgICAgICAgICAgdGc2N3ggPSB0ZzIyeCArICgoeCArIHgpIDw8IDE1KTtcbiAgICAgICAgICAgICAgICAgICAgeSA8PD0gMTU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5IDwgdGcyMngpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzEgKyBqIC0gMV0gJiYgZiA+PSBidWZbcm93MSArIGogKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gaGlnaF90aHJlc2ggJiYgIXN1cHByZXNzICYmIG1hcFttYXBfaSArIGogLSBtYXBfd10gIT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHkgPiB0ZzY3eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBidWZbcm93MCArIGpdICYmIGYgPj0gYnVmW3JvdzIgKyBqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gaGlnaF90aHJlc2ggJiYgIXN1cHByZXNzICYmIG1hcFttYXBfaSArIGogLSBtYXBfd10gIT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHMgPCAwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBidWZbcm93MCArIGogLSBzXSAmJiBmID4gYnVmW3JvdzIgKyBqICsgc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDA7XG4gICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFwW21hcF9pICsgd10gPSAwO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBqID0gcm93MDtcbiAgICAgICAgICAgIHJvdzAgPSByb3cxO1xuICAgICAgICAgICAgcm93MSA9IHJvdzI7XG4gICAgICAgICAgICByb3cyID0gajtcbiAgICAgICAgfVxuXG4gICAgICAgIGogPSBtYXBfaSAtIG1hcF93IC0gMTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcF93OyArK2ksICsraikge1xuICAgICAgICAgICAgbWFwW2pdID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBwYXRoIGZvbGxvd2luZ1xuICAgICAgICB3aGlsZSAoc3RhY2tfaSA+IDApIHtcbiAgICAgICAgICAgIG1hcF9pID0gc3RhY2tbLS1zdGFja19pXTtcbiAgICAgICAgICAgIG1hcF9pIC09IG1hcF93ICsgMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgLT0gMjtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwX2kgPSBtYXBfdyArIDE7XG4gICAgICAgIHJvdzAgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaDsgKytpLCBtYXBfaSArPSBtYXBfdykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgICAgIGRzdF9kW3JvdzArK10gPSAoTnVtYmVyKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcmVlIGJ1ZmZlcnNcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGR4ZHlfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtYXBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihzdGFja19ub2RlKTtcbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBtYXRyaXhfdFxuICAgIHdhcnBfcGVyc3BlY3RpdmUoc3JjOiB7IGNvbHM6IG51bWJlcjsgcm93czogbnVtYmVyOyBkYXRhOiBhbnkgfSwgZHN0OiB7IGNvbHM6IG51bWJlcjsgcm93czogbnVtYmVyOyBkYXRhOiBhbnkgfSwgdHJhbnNmb3JtOiB7IGRhdGE6IGFueSB9LCBmaWxsX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scyB8IDAsIHNyY19oZWlnaHQgPSBzcmMucm93cyB8IDAsIGRzdF93aWR0aCA9IGRzdC5jb2xzIHwgMCwgZHN0X2hlaWdodCA9IGRzdC5yb3dzIHwgMDtcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgeHMwID0gMC4wLCB5czAgPSAwLjAsIHdzID0gMC4wLCBzYyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdLFxuICAgICAgICAgICAgbTIwID0gdGRbNl0sIG0yMSA9IHRkWzddLCBtMjIgPSB0ZFs4XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMwID0gbTAxICogeSArIG0wMixcbiAgICAgICAgICAgICAgICB5czAgPSBtMTEgKiB5ICsgbTEyLFxuICAgICAgICAgICAgICAgIHdzID0gbTIxICogeSArIG0yMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4czAgKz0gbTAwLCB5czAgKz0gbTEwLCB3cyArPSBtMjApIHtcbiAgICAgICAgICAgICAgICBzYyA9IDEuMCAvIHdzO1xuICAgICAgICAgICAgICAgIHhzID0geHMwICogc2MsIHlzID0geXMwICogc2M7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwLCBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoeHMgPiAwICYmIHlzID4gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5tYXgoeHMgLSBpeHMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBNYXRoLm1heCh5cyAtIGl5cywgMC4wKTtcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gKHNyY193aWR0aCAqIGl5cyArIGl4cykgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG9yIDJ4MyBtYXRyaXhfdCBvbmx5IGZpcnN0IDYgdmFsdWVzIHJlZmVyZW5jZWRcbiAgICB3YXJwX2FmZmluZShzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueSB9LCB0cmFuc2Zvcm06IHsgZGF0YTogYW55IH0sIGZpbGxfdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgZGF0YTogYW55W10gfSwgZHN0OiBudW1iZXJbXSkge1xuICAgICAgICB2YXIgciwgZywgYiwgajtcbiAgICAgICAgdmFyIGkgPSBzcmMud2lkdGggKiBzcmMuaGVpZ2h0O1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBqID0gaSAqIDQ7XG4gICAgICAgICAgICByID0gc3JjLmRhdGFbal07XG4gICAgICAgICAgICBnID0gc3JjLmRhdGFbaiArIDFdO1xuICAgICAgICAgICAgYiA9IHNyYy5kYXRhW2ogKyAyXTtcbiAgICAgICAgICAgIGlmICgociA+IDk1KSAmJiAoZyA+IDQwKSAmJiAoYiA+IDIwKVxuICAgICAgICAgICAgICAgICYmIChyID4gZykgJiYgKHIgPiBiKVxuICAgICAgICAgICAgICAgICYmIChyIC0gTWF0aC5taW4oZywgYikgPiAxNSlcbiAgICAgICAgICAgICAgICAmJiAoTWF0aC5hYnMociAtIGcpID4gMTUpKSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMjU1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5qc2ZlYXROZXh0Lm1hdGggPSBjbGFzcyBtYXRoIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBxc29ydF9zdGFjazogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIsIGtlcm5lbDogYW55LCBkYXRhX3R5cGU6IGFueSk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLjAsIHQgPSAwLjAsIHNpZ21hX3ggPSAwLjAsIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIga2Vybl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHNpemUgPDwgMik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYgKChzaXplICYgMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChzaXplID4+IDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4yNSwgX2tlcm5lbFsxXSA9IDAuNSwgX2tlcm5lbFsyXSA9IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMjUgKyAwLjUgKyAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjA2MjUsIF9rZXJuZWxbMV0gPSAwLjI1LCBfa2VybmVsWzJdID0gMC4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wMzEyNSwgX2tlcm5lbFsxXSA9IDAuMTA5Mzc1LCBfa2VybmVsWzJdID0gMC4yMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wMzEyNSArIDAuMTA5Mzc1ICsgMC4yMTg3NSArIDAuMjgxMjUgKyAwLjIxODc1ICsgMC4xMDkzNzUgKyAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZ21hX3ggPSBzaWdtYSA+IDAgPyBzaWdtYSA6ICgoc2l6ZSAtIDEpICogMC41IC0gMS4wKSAqIDAuMyArIDAuODtcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gLTAuNSAvIChzaWdtYV94ICogc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAgeCA9IGkgLSAoc2l6ZSAtIDEpICogMC41O1xuICAgICAgICAgICAgICAgIHQgPSBNYXRoLmV4cChzY2FsZV8yeCAqIHggKiB4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkge1xuICAgICAgICAgICAgLy8gaW50IGJhc2VkIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMjU2LjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzaWMga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAxLjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gX2tlcm5lbFtpXSAqIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihrZXJuX25vZGUpO1xuICAgIH1cblxuICAgIC8vIG1vZGVsIGlzIDN4MyBtYXRyaXhfdFxuICAgIHBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0obW9kZWw6IGFueSwgc3JjX3gwOiBudW1iZXIsIHNyY195MDogbnVtYmVyLCBkc3RfeDA6IG51bWJlciwgZHN0X3kwOiBudW1iZXIsXG4gICAgICAgIHNyY194MTogbnVtYmVyLCBzcmNfeTE6IG51bWJlciwgZHN0X3gxOiBudW1iZXIsIGRzdF95MTogbnVtYmVyLFxuICAgICAgICBzcmNfeDI6IG51bWJlciwgc3JjX3kyOiBudW1iZXIsIGRzdF94MjogbnVtYmVyLCBkc3RfeTI6IG51bWJlcixcbiAgICAgICAgc3JjX3gzOiBudW1iZXIsIHNyY195MzogbnVtYmVyLCBkc3RfeDM6IG51bWJlciwgZHN0X3kzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyLCBjbXA6IGFueSkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheTogYW55LCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBjbGFzcyBsaW5hbGcgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbWF0bWF0aDogbWF0bWF0aDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICB9XG5cbiAgICBKYWNvYmlJbXBsKEE6IG51bWJlcltdLCBhc3RlcDogbnVtYmVyLCBXOiBudW1iZXJbXSwgVjogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG46IG51bWJlcikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgbSA9IDAsIGwgPSAwLCBpZHggPSAwLCBfaW4gPSAwLCBfaW4yID0gMDtcbiAgICAgICAgdmFyIGl0ZXJzID0gMCwgbWF4X2l0ZXIgPSBuICogbiAqIDMwO1xuICAgICAgICB2YXIgbXYgPSAwLjAsIHZhbCA9IDAuMCwgcCA9IDAuMCwgeSA9IDAuMCwgdCA9IDAuMCwgcyA9IDAuMCwgYyA9IDAuMCwgYTAgPSAwLjAsIGIwID0gMC4wO1xuXG4gICAgICAgIHZhciBpbmRSX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcblxuICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSAqIHZzdGVwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkgKiBrXTtcbiAgICAgICAgICAgIGlmIChrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSBrICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogayArIG1dKSwgaSA9IGsgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kQ1trXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobiA+IDEpIGZvciAoOyBpdGVycyA8IG1heF9pdGVyOyBpdGVycysrKSB7XG4gICAgICAgICAgICAvLyBmaW5kIGluZGV4IChrLGwpIG9mIHBpdm90IHBcbiAgICAgICAgICAgIGZvciAoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGluZENbaV0sIGwgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID0gQVthc3RlcCAqIGsgKyBsXTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG5cbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pICogMC41O1xuICAgICAgICAgICAgdCA9IE1hdGguYWJzKHkpICsgaHlwb3QocCwgeSk7XG4gICAgICAgICAgICBzID0gaHlwb3QocCwgdCk7XG4gICAgICAgICAgICBjID0gdCAvIHM7XG4gICAgICAgICAgICBzID0gcCAvIHM7IHQgPSAocCAvIHQpICogcDtcbiAgICAgICAgICAgIGlmICh5IDwgMClcbiAgICAgICAgICAgICAgICBzID0gLXMsIHQgPSAtdDtcbiAgICAgICAgICAgIEFbYXN0ZXAgKiBrICsgbF0gPSAwO1xuXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGlkeCA9IGogPT0gMCA/IGsgOiBsO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSBpZHggKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBtXSksIGkgPSBpZHggKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29ydCBlaWdlbnZhbHVlcyAmIGVpZ2VudmVjdG9yc1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgbSA9IGs7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCAqIG0gKyBpLCB2c3RlcCAqIGsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRSX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kQ19idWZmKTtcbiAgICB9XG5cbiAgICBKYWNvYmlTVkRJbXBsKEF0OiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgX1c6IGFueVtdLCBWdDogbnVtYmVyW10sIHZzdGVwOiBudW1iZXIsIG06IG51bWJlciwgbjogbnVtYmVyLCBuMTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBpdGVyID0gMCwgbWF4X2l0ZXIgPSBNYXRoLm1heChtLCAzMCk7XG4gICAgICAgIHZhciBBaSA9IDAsIEFqID0gMCwgVmkgPSAwLCBWaiA9IDAsIGNoYW5nZWQgPSAwO1xuICAgICAgICB2YXIgYyA9IDAuMCwgcyA9IDAuMCwgdCA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMC4wLCB0MSA9IDAuMCwgc2QgPSAwLjAsIGJldGEgPSAwLjAsIGdhbW1hID0gMC4wLCBkZWx0YSA9IDAuMCwgYSA9IDAuMCwgcCA9IDAuMCwgYiA9IDAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWwgPSAwLjAsIHZhbDAgPSAwLjAsIGFzdW0gPSAwLjA7XG5cbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcblxuICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSAqIGFzdGVwKSB8IDAsIEFqID0gKGogKiBhc3RlcCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBhID0gV1tpXSwgcCA9IDAsIGIgPSBXW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIDFdICogQXRbQWogKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyBrXSAqIEF0W0FqICsga107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcyAqIE1hdGguc3FydChhICogYikpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAoZ2FtbWEgLSBiZXRhKSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEgLyBnYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAgLyAoZ2FtbWEgKiBzICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpIC8gKGdhbW1hICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAgLyAoZ2FtbWEgKiBjICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gMC4wLCBiID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWldICsgcyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpXSArIGMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyAxXSArIHMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyAxXSArIGMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSArIDFdID0gdDA7IEF0W0FqICsgMV0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsga10gKyBzICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIGtdICsgYyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBBdFtBaSArIGtdID0gdDA7IEF0W0FqICsga10gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXW2ldID0gYTsgV1tqXSA9IGI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWaSA9IChpICogdnN0ZXApIHwgMCwgVmogPSAoaiAqIHZzdGVwKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmldICsgcyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaV0gKyBjICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmldID0gdDA7IFZ0W1ZqXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIDFdICsgcyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyAxXSArIGMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyAxXSA9IHQwOyBWdFtWaiArIDFdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyBrXSArIHMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIGtdICsgYyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyBrXSA9IHQwOyBWdFtWaiArIGtdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpICogYXN0ZXAgKyBrLCBqICogYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkgKiB2c3RlcCArIGssIGogKiB2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFWdCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7IGkrKykge1xuXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChzZCA8PSBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBnb3QgYSB6ZXJvIHNpbmd1bGFyIHZhbHVlLCB0aGVuIGluIG9yZGVyIHRvIGdldCB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHNpbmd1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIC8vIHdlIGdlbmVyYXRlIGEgcmFuZG9tIHZlY3RvciwgcHJvamVjdCBpdCB0byB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMsXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgdGhlIHByb2plY3Rpb24gYW5kIG5vcm1hbGl6ZSB0aGUgZGlmZmVyZW5jZS5cbiAgICAgICAgICAgICAgICB2YWwwID0gKDEuMCAvIG0pO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlZCA9IChzZWVkICogMjE0MDEzICsgMjUzMTAxMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICgoKHNlZWQgPj4gMTYpICYgMHg3ZmZmKSAmIDI1NikgIT0gMCA/IHZhbDAgOiAtdmFsMDtcbiAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCAyOyBpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kgKiBhc3RlcCArIGtdICogQXRbaiAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoQXRbaSAqIGFzdGVwICsga10gLSBzZCAqIEF0W2ogKiBhc3RlcCArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wIC8gYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IE1hdGguc3FydChzZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMgPSAoMS4wIC8gc2QpO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBOiB7IGNvbHM6IGFueTsgZGF0YTogYW55IH0sIEI6IHsgZGF0YTogYW55IH0pOiBudW1iZXIge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQTogeyBjb2xzOiBhbnk7IGRhdGE6IGFueSB9LCBCOiB7IGRhdGE6IGFueSB9KTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGNvbCA9IDAsIHJvdyA9IDAsIGNvbDIgPSAwLCBjcyA9IDAsIHJzID0gMCwgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgc2l6ZSA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHZhbCwgaW52X2RpYWc7XG5cbiAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgaW52X2RpYWcgPSAxLjA7XG4gICAgICAgICAgICBjcyA9IChjb2wgKiBzaXplKTtcbiAgICAgICAgICAgIHJzID0gY3M7XG4gICAgICAgICAgICBmb3IgKHJvdyA9IGNvbDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGZvciB0aGUgcGFydHMgb2YgY2hvbGVza3kgYWxyZWFkeSBjb21wdXRlZFxuICAgICAgICAgICAgICAgIHZhbCA9IGFkWyhycyArIGNvbCldO1xuICAgICAgICAgICAgICAgIGZvciAoY29sMiA9IDA7IGNvbDIgPCBjb2w7IGNvbDIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNvbDIgKiBzaXplICsgY29sKV0gKiBhZFsocnMgKyBjb2wyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGRpYWdvbmFsIGVsZW1lbnQgc28gZG9uJ3QgZGl2aWRlXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludl9kaWFnID0gMS4wIC8gdmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhY2hlIHRoZSB2YWx1ZSB3aXRob3V0IGRpdmlzaW9uIGluIHRoZSB1cHBlciBoYWxmXG4gICAgICAgICAgICAgICAgICAgIGFkWyhjcyArIHJvdyldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXZpZGUgbXkgdGhlIGRpYWdvbmFsIGVsZW1lbnQgZm9yIGFsbCBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWwgKiBpbnZfZGlhZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnMgPSAocnMgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcnN0IGJhY2tzdWIgdGhyb3VnaCBMXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGopXSAqIGJkW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBkaWFnb25hbFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGJkW2ldIC89IGFkWyhjcyArIGkpXTtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIEwgVHJhbnNwb3NlXG4gICAgICAgIGkgPSAoc2l6ZSAtIDEpO1xuICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgaiA9IChpICsgMSk7XG4gICAgICAgICAgICBjcyA9IChqICogc2l6ZSk7XG4gICAgICAgICAgICBmb3IgKDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBpKV0gKiBiZFtqXTtcbiAgICAgICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBzdmRfZGVjb21wb3NlKEE6IGFueSwgVzogbWF0cml4X3QsIFU6IG1hdHJpeF90LCBWOiBtYXRyaXhfdCwgb3B0aW9uczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfTtcbiAgICAgICAgdmFyIGF0ID0gMCwgaSA9IDAsIGogPSAwLCBfbSA9IEEucm93cywgX24gPSBBLmNvbHMsIG0gPSBfbSwgbiA9IF9uO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7IC8vIHdlIG9ubHkgd29yayB3aXRoIHNpbmdsZSBjaGFubmVsIFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobSAqIG0pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChtLCBtLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCBhX210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCB2X210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgYV9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuXG4gICAgfVxuXG4gICAgc3ZkX3NvbHZlKEE6IHsgcm93czogYW55OyBjb2xzOiBhbnk7IHR5cGU6IG51bWJlciB9LCBYOiB7IGRhdGE6IG51bWJlcltdIH0sIEI6IHsgZGF0YTogYW55IH0pOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgeHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIHZhciB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgYmQgPSBCLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgeHN1bSA9IDAuMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdkW2pdID4gdG9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMCwgcHUgPSAwOyBrIDwgbnJvd3M7IGsrKywgcHUgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB1ZFtwdSArIGpdICogYmRba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHN1bSArPSBzdW0gKiB2ZFtwdiArIGpdIC8gd2Rbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWC5kYXRhW2ldID0geHN1bTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgc3ZkX2ludmVydChBaTogbWF0cml4X3QsIEE6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDAsIHBhID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgLy92YXIgdV9idWZmID0gY2FjaGUxLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG4gICAgICAgIHZhciB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaWQgPSBBaS5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIHB1ID0gMDsgaiA8IG5yb3dzOyBqKyssIHBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjA7IGsgPCBuY29sczsgaysrLCBwdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZFtrXSA+IHRvbCkgc3VtICs9IHZkW3B2ICsga10gKiB1ZFtwdV0gLyB3ZFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWRbcGFdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBlaWdlblZWKEE6IG1hdHJpeF90LCB2ZWN0czogbWF0cml4X3QsIHZhbHM/OiB7IGRhdGE6IHsgW3g6IHN0cmluZ106IGFueSB9IH0pOiB2b2lkIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5vcmIgPSBjbGFzcyBvcmIgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgYml0X3BhdHRlcm5fMzFfOiBJbnQzMkFycmF5XG4gICAgcHVibGljIEg6IG1hdHJpeF90XG4gICAgcHVibGljIHBhdGNoX2ltZzogbWF0cml4X3RcbiAgICBwdWJsaWMgaW1ncHJvYzogaW1ncHJvYztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLmltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgfVxuXG4gICAgZGVzY3JpYmUoc3JjOiBtYXRyaXhfdCwgY29ybmVyczogeyB4OiBudW1iZXIsIHk6IG51bWJlciwgYW5nbGU6IG51bWJlciB9W10sIGNvdW50OiBudW1iZXIsIGRlc2NyaXB0b3JzOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgdmFyIGkgPSAwLCBiID0gMCwgcHggPSAwLjAsIHB5ID0gMC4wLCBhbmdsZSA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMCwgdDEgPSAwLCB2YWwgPSAwO1xuICAgICAgICAvL3ZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBwYXRjaF9kID0gdGhpcy5wYXRjaF9pbWcuZGF0YTtcbiAgICAgICAgdmFyIHBhdGNoX29mZiA9IDE2ICogMzIgKyAxNjsgLy8gY2VudGVyIG9mIHBhdGNoXG4gICAgICAgIHZhciBwYXR0ID0gMDtcblxuICAgICAgICBpZiAoIShkZXNjcmlwdG9ycy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSkge1xuICAgICAgICAgICAgLy8gcmVsb2NhdGUgdG8gVTggdHlwZVxuICAgICAgICAgICAgZGVzY3JpcHRvcnMudHlwZSA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNvbHMgPSBERVNDUl9TSVpFO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucm93cyA9IGNvdW50O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY2hhbm5lbCA9IDE7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucmVzaXplKERFU0NSX1NJWkUsIGNvdW50LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXNjcl9kID0gZGVzY3JpcHRvcnMuZGF0YTtcbiAgICAgICAgdmFyIGRlc2NyX29mZiA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB4ID0gY29ybmVyc1tpXS54O1xuICAgICAgICAgICAgcHkgPSBjb3JuZXJzW2ldLnk7XG4gICAgICAgICAgICBhbmdsZSA9IGNvcm5lcnNbaV0uYW5nbGU7XG5cbiAgICAgICAgICAgIHJlY3RpZnlfcGF0Y2goc3JjLCB0aGlzLnBhdGNoX2ltZywgYW5nbGUsIHB4LCBweSwgMzIsIHRoaXMuSCwgdGhpcy5pbWdwcm9jKTtcblxuICAgICAgICAgICAgLy8gZGVzY3JpYmUgdGhlIHBhdGNoXG4gICAgICAgICAgICBwYXR0ID0gMDtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBERVNDUl9TSVpFOyArK2IpIHtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgPSA8bnVtYmVyPjx1bmtub3duPih0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDE7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDI7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDQ7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDU7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIDw8IDc7XG5cbiAgICAgICAgICAgICAgICBkZXNjcl9kW2Rlc2NyX29mZiArIGJdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3Jfb2ZmICs9IERFU0NSX1NJWkU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0LnlhcGUgPSB5YXBlO1xuXG5qc2ZlYXROZXh0LnlhcGUwNiA9IGNsYXNzIHlhcGUwNiBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBsYXBsYWNpYW5fdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcHVibGljIG1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkID0gMzA7XG4gICAgICAgIHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCA9IDI1O1xuICAgIH1cbiAgICBkZXRlY3Qoc3JjOiBtYXRyaXhfdCwgcG9pbnRzOiBrZXlwb2ludF90W10sIGJvcmRlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyZF9kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBEeHggPSA1LCBEeXkgPSAoNSAqIHcpIHwgMDtcbiAgICAgICAgdmFyIER4eSA9ICgzICsgMyAqIHcpIHwgMCwgRHl4ID0gKDMgLSAzICogdykgfCAwO1xuICAgICAgICB2YXIgbGFwX2J1ZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuICAgICAgICB2YXIgbGFwbGFjaWFuID0gbGFwX2J1Zi5pMzI7XG4gICAgICAgIHZhciBsdiA9IDAsIHJvdyA9IDAsIHJvd3ggPSAwLCBtaW5fZWlnZW5fdmFsdWUgPSAwLCBwdDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwO1xuICAgICAgICB2YXIgbGFwX3RocmVzaCA9IHRoaXMubGFwbGFjaWFuX3RocmVzaG9sZDtcbiAgICAgICAgdmFyIGVpZ2VuX3RocmVzaCA9IHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heCg1LCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIHN5ID0gTWF0aC5tYXgoMywgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleCA9IE1hdGgubWluKHcgLSA1LCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSAzLCBoIC0gYm9yZGVyKSB8IDA7XG5cbiAgICAgICAgeCA9IHcgKiBoO1xuICAgICAgICB3aGlsZSAoLS14ID49IDApIHsgbGFwbGFjaWFuW3hdID0gMDsgfVxuICAgICAgICBjb21wdXRlX2xhcGxhY2lhbihzcmRfZCwgbGFwbGFjaWFuLCB3LCBoLCBEeHgsIER5eSwgc3gsIHN5LCBleCwgZXkpO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuXG4gICAgICAgICAgICAgICAgbHYgPSBsYXBsYWNpYW5bcm93eF07XG4gICAgICAgICAgICAgICAgaWYgKChsdiA8IC1sYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAobHYgPiBsYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICApIHtcblxuICAgICAgICAgICAgICAgICAgICBtaW5fZWlnZW5fdmFsdWUgPSBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmRfZCwgcm93eCwgbHYsIER4eCwgRHl5LCBEeHksIER5eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5fZWlnZW5fdmFsdWUgPiBlaWdlbl90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcG9pbnRzW251bWJlcl9vZl9wb2ludHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQueCA9IHgsIHB0LnkgPSB5LCBwdC5zY29yZSA9IG1pbl9laWdlbl92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbnVtYmVyX29mX3BvaW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4OyAvLyBza2lwIG5leHQgcGl4ZWwgc2luY2UgdGhpcyBpcyBtYXhpbWEgaW4gM3gzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobGFwX2J1Zik7XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcl9vZl9wb2ludHM7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5tb3Rpb25fZXN0aW1hdG9yID0gY2xhc3MgbW90aW9uX2VzdGltYXRvciBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldF9zdWJzZXQoa2VybmVsOiBob21vZ3JhcGh5MmQsIGZyb206IGFueVtdLCB0bzogYW55W10sIG5lZWRfY250OiBudW1iZXIsIG1heF9jbnQ6IG51bWJlciwgZnJvbV9zdWI6IGFueVtdLCB0b19zdWI6IGFueVtdKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBtYXhfdHJ5ID0gMTAwMDtcbiAgICAgICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgc3NpdGVyID0gMCwgaWR4X2kgPSAwLCBvayA9IGZhbHNlO1xuICAgICAgICBmb3IgKDsgc3NpdGVyIDwgbWF4X3RyeTsgKytzc2l0ZXIpIHtcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5Oykge1xuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWR4X2kgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICghb2spIHtcbiAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZHhfaSA9IGluZGljZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhfY250KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHhfaSA9PSBpbmRpY2VzW2pdKSB7IG9rID0gZmFsc2U7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbV9zdWJbaV0gPSBmcm9tW2lkeF9pXTtcbiAgICAgICAgICAgICAgICB0b19zdWJbaV0gPSB0b1tpZHhfaV07XG4gICAgICAgICAgICAgICAgaWYgKCFrZXJuZWwuY2hlY2tfc3Vic2V0KGZyb21fc3ViLCB0b19zdWIsIGkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBzc2l0ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChpID09IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnkpO1xuICAgIH1cblxuICAgIGZpbmRfaW5saWVycyhrZXJuZWw6IGhvbW9ncmFwaHkyZCwgbW9kZWw6IG1hdHJpeF90LCBmcm9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSwgdG86IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCBjb3VudDogbnVtYmVyLCB0aHJlc2g6IG51bWJlciwgZXJyOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCBtYXNrOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgICAgIHZhciBudW1pbmxpZXJzOiBudW1iZXIgPSAwLCBpID0gMCwgZiA9IDA7XG4gICAgICAgIHZhciB0ID0gdGhyZXNoICogdGhyZXNoO1xuXG4gICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZiA9IDxudW1iZXI+PHVua25vd24+KGVycltpXSA8PSB0KTtcbiAgICAgICAgICAgIG1hc2tbaV0gPSBmO1xuICAgICAgICAgICAgbnVtaW5saWVycyArPSBmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1pbmxpZXJzO1xuICAgIH1cblxuICAgIHJhbnNhYyhwYXJhbXM6IHJhbnNhY19wYXJhbXNfdCwga2VybmVsOiBhbnksIGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIGNvdW50OiBudW1iZXIsIG1vZGVsOiBtYXRyaXhfdCwgbWFzazogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBudW1iZXIgfSB9LCBtYXhfaXRlcnM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN1YnNldDA6IGFueSA9IFtdO1xuICAgICAgICB2YXIgc3Vic2V0MTogYW55ID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOEMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlubGllcnNfbWF4ID0gLTEsIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBNLCBmcm9tLCB0bywgY291bnQsIHBhcmFtcy50aHJlc2gsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobnVtaW5saWVycyA+IE1hdGgubWF4KGlubGllcnNfbWF4LCBtb2RlbF9wb2ludHMgLSAxKSkge1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgaW5saWVyc19tYXggPSBudW1pbmxpZXJzO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcbiAgICAgICAgICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKChjb3VudCAtIG51bWlubGllcnMpIC8gY291bnQsIG5pdGVycyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsbWVkcyhwYXJhbXM6IHJhbnNhY19wYXJhbXNfdCwga2VybmVsOiBhbnksIGZyb206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdLCB0bzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIGNvdW50OiBudW1iZXIsIG1vZGVsOiBtYXRyaXhfdCwgbWFzazogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBudW1iZXIgfSB9LCBtYXhfaXRlcnM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWF0aCA9IG5ldyBqc2ZlYXROZXh0Lm1hdGgoKTtcblxuICAgICAgICB2YXIgc3Vic2V0MDogYW55ID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcbiAgICAgICAgdmFyIG1pbl9tZWRpYW4gPSAxMDAwMDAwMDAwLjAsIHNpZ21hID0gMC4wLCBtZWRpYW4gPSAwLjA7XG5cbiAgICAgICAgcGFyYW1zLmVwcyA9IDAuNDU7XG4gICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMocGFyYW1zLmVwcywgbml0ZXJzKTtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBrZXJuZWwuZXJyb3IoZnJvbSwgdG8sIE0sIGVyciwgY291bnQpO1xuICAgICAgICAgICAgbWVkaWFuID0gX21hdGgubWVkaWFuKGVyciwgMCwgY291bnQgLSAxKTtcblxuICAgICAgICAgICAgaWYgKG1lZGlhbiA8IG1pbl9tZWRpYW4pIHtcbiAgICAgICAgICAgICAgICBtaW5fbWVkaWFuID0gbWVkaWFuO1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHNpZ21hID0gMi41ICogMS40ODI2ICogKDEgKyA1LjAgLyAoY291bnQgLSBtb2RlbF9wb2ludHMpKSAqIE1hdGguc3FydChtaW5fbWVkaWFuKTtcbiAgICAgICAgICAgIHNpZ21hID0gTWF0aC5tYXgoc2lnbWEsIDAuMDAxKTtcblxuICAgICAgICAgICAgbnVtaW5saWVycyA9IHRoaXMuZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgc2lnbWEsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBudW1pbmxpZXJzID49IG1vZGVsX3BvaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0LnJhbnNhY19wYXJhbXNfdCA9IHJhbnNhY19wYXJhbXNfdDtcblxuanNmZWF0TmV4dC5hZmZpbmUyZCA9IGFmZmluZTJkO1xuXG5qc2ZlYXROZXh0LmhvbW9ncmFwaHkyZCA9IGhvbW9ncmFwaHkyZDtcblxuanNmZWF0TmV4dC5vcHRpY2FsX2Zsb3dfbGsgPSBjbGFzcyBvcHRpY2FsX2Zsb3dfbGsgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgc2NoYXJyX2Rlcml2OiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBqc2ZlYXROZXh0LmltZ3Byb2MoKVxuICAgICAgICB0aGlzLnNjaGFycl9kZXJpdiA9IF9pbWdwcm9jLnNjaGFycl9kZXJpdmF0aXZlcztcbiAgICB9XG4gICAgdHJhY2socHJldl9weXI6IHB5cmFtaWRfdCwgY3Vycl9weXI6IHB5cmFtaWRfdCwgcHJldl94eTogbnVtYmVyW10sIGN1cnJfeHk6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCB3aW5fc2l6ZTogbnVtYmVyLCBtYXhfaXRlcjogbnVtYmVyLCBzdGF0dXM6IFVpbnQ4QXJyYXksIGVwczogbnVtYmVyLCBtaW5fZWlnZW5fdGhyZXNob2xkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlciA9IDMwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7IHN0YXR1cyA9IG5ldyBVaW50OEFycmF5KGNvdW50KTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjAxOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbWluX2VpZ2VuX3RocmVzaG9sZCA9PT0gXCJ1bmRlZmluZWRcIikgeyBtaW5fZWlnZW5fdGhyZXNob2xkID0gMC4wMDAxOyB9XG5cbiAgICAgICAgdmFyIGhhbGZfd2luID0gKHdpbl9zaXplIC0gMSkgKiAwLjU7XG4gICAgICAgIHZhciB3aW5fYXJlYSA9ICh3aW5fc2l6ZSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgIHZhciB3aW5fYXJlYTIgPSB3aW5fYXJlYSA8PCAxO1xuICAgICAgICB2YXIgcHJldl9pbWdzID0gcHJldl9weXIuZGF0YSwgbmV4dF9pbWdzID0gY3Vycl9weXIuZGF0YTtcbiAgICAgICAgdmFyIGltZ19wcmV2ID0gcHJldl9pbWdzWzBdLmRhdGEsIGltZ19uZXh0ID0gbmV4dF9pbWdzWzBdLmRhdGE7XG4gICAgICAgIHZhciB3MCA9IHByZXZfaW1nc1swXS5jb2xzLCBoMCA9IHByZXZfaW1nc1swXS5yb3dzLCBsdyA9IDAsIGxoID0gMDtcblxuICAgICAgICB2YXIgaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhIDw8IDIpO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhMiA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2xldl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoMCAqICh3MCA8PCAxKSkgPDwgMik7XG5cbiAgICAgICAgdmFyIGRlcml2X20gPSBuZXcgbWF0cml4X3QodzAsIGgwLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGRlcml2X2xldl9ub2RlLmRhdGEpO1xuXG4gICAgICAgIHZhciBpd2luX2J1ZiA9IGl3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9pd2luID0gZGVyaXZfaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGRlcml2X2xldiA9IGRlcml2X2xldl9ub2RlLmkzMjtcblxuICAgICAgICB2YXIgZHN0ZXAgPSAwLCBzcmMgPSAwLCBkc3JjID0gMCwgaXB0ciA9IDAsIGRpcHRyID0gMCwganB0ciA9IDA7XG4gICAgICAgIHZhciBsZXZfc2MgPSAwLjAsIHByZXZfeCA9IDAuMCwgcHJldl95ID0gMC4wLCBuZXh0X3ggPSAwLjAsIG5leHRfeSA9IDAuMDtcbiAgICAgICAgdmFyIHByZXZfZGVsdGFfeCA9IDAuMCwgcHJldl9kZWx0YV95ID0gMC4wLCBkZWx0YV94ID0gMC4wLCBkZWx0YV95ID0gMC4wO1xuICAgICAgICB2YXIgaXByZXZfeCA9IDAsIGlwcmV2X3kgPSAwLCBpbmV4dF94ID0gMCwgaW5leHRfeSA9IDA7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHggPSAwLCB5ID0gMCwgbGV2ZWwgPSAwLCBwdGlkID0gMCwgaXRlciA9IDA7XG4gICAgICAgIHZhciBicmRfdGwgPSAwLCBicmRfciA9IDAsIGJyZF9iID0gMDtcbiAgICAgICAgdmFyIGEgPSAwLjAsIGIgPSAwLjAsIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAvLyBmaXhlZCBwb2ludCBtYXRoXG4gICAgICAgIHZhciBXX0JJVFMxNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTMW01ID0gV19CSVRTNCAtIDU7XG4gICAgICAgIHZhciBXX0JJVFMxbTUxID0gKDEgPDwgKChXX0JJVFMxbTUpIC0gMSkpO1xuICAgICAgICB2YXIgV19CSVRTMTRfID0gKDEgPDwgV19CSVRTMTQpO1xuICAgICAgICB2YXIgV19CSVRTNDEgPSAoMSA8PCAoKFdfQklUUzQpIC0gMSkpO1xuICAgICAgICB2YXIgRkxUX1NDQUxFID0gMS4wIC8gKDEgPDwgMjApO1xuICAgICAgICB2YXIgaXcwMCA9IDAsIGl3MDEgPSAwLCBpdzEwID0gMCwgaXcxMSA9IDAsIGl2YWwgPSAwLCBpeHZhbCA9IDAsIGl5dmFsID0gMDtcbiAgICAgICAgdmFyIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjAsIEQgPSAwLjAsIG1pbl9laWcgPSAwLjA7XG5cbiAgICAgICAgdmFyIEZMVF9FUFNJTE9OID0gMC4wMDAwMDAxMTkyMDkyOTtcbiAgICAgICAgZXBzICo9IGVwcztcblxuICAgICAgICAvLyByZXNldCBzdGF0dXNcbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1heF9sZXZlbCA9IChwcmV2X3B5ci5sZXZlbHMgLSAxKSB8IDA7XG4gICAgICAgIGxldmVsID0gbWF4X2xldmVsO1xuXG4gICAgICAgIGZvciAoOyBsZXZlbCA+PSAwOyAtLWxldmVsKSB7XG4gICAgICAgICAgICBsZXZfc2MgPSAoMS4wIC8gKDEgPDwgbGV2ZWwpKTtcbiAgICAgICAgICAgIGx3ID0gdzAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBsaCA9IGgwID4+IGxldmVsO1xuICAgICAgICAgICAgZHN0ZXAgPSBsdyA8PCAxO1xuICAgICAgICAgICAgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbbGV2ZWxdLmRhdGE7XG4gICAgICAgICAgICBpbWdfbmV4dCA9IG5leHRfaW1nc1tsZXZlbF0uZGF0YTtcblxuICAgICAgICAgICAgYnJkX3IgPSAobHcgLSB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgYnJkX2IgPSAobGggLSB3aW5fc2l6ZSkgfCAwO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGV2ZWwgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2KHByZXZfaW1nc1tsZXZlbF0sIGRlcml2X20pO1xuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG9pbnRzXG4gICAgICAgICAgICBmb3IgKHB0aWQgPSAwOyBwdGlkIDwgY291bnQ7ICsrcHRpZCkge1xuICAgICAgICAgICAgICAgIGkgPSBwdGlkIDw8IDE7XG4gICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHByZXZfeCA9IHByZXZfeHlbaV0gKiBsZXZfc2M7XG4gICAgICAgICAgICAgICAgcHJldl95ID0gcHJldl94eVtqXSAqIGxldl9zYztcblxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSBtYXhfbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gcHJldl94O1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBwcmV2X3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY3Vycl94eVtpXSAqIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gY3Vycl94eVtqXSAqIDIuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3Vycl94eVtpXSA9IG5leHRfeDtcbiAgICAgICAgICAgICAgICBjdXJyX3h5W2pdID0gbmV4dF95O1xuXG4gICAgICAgICAgICAgICAgcHJldl94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIHByZXZfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBpcHJldl94ID0gcHJldl94IHwgMDtcbiAgICAgICAgICAgICAgICBpcHJldl95ID0gcHJldl95IHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIGJvcmRlciBjaGVja1xuICAgICAgICAgICAgICAgIHggPSA8bnVtYmVyPjx1bmtub3duPigoaXByZXZfeCA8PSBicmRfdGwpIHx8IChpcHJldl94ID49IGJyZF9yKSB8fCAoaXByZXZfeSA8PSBicmRfdGwpIHx8IChpcHJldl95ID49IGJyZF9iKSk7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gPG51bWJlcj48dW5rbm93bj4oKGluZXh0X3ggPD0gYnJkX3RsKSB8fCAoaW5leHRfeCA+PSBicmRfcikgfHwgKGluZXh0X3kgPD0gYnJkX3RsKSB8fCAoaW5leHRfeSA+PSBicmRfYikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1twdGlkXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSBuZXh0X3ggLSBpbmV4dF94O1xuICAgICAgICAgICAgICAgICAgICBiID0gbmV4dF95IC0gaW5leHRfeTtcbiAgICAgICAgICAgICAgICAgICAgaXcwMCA9ICgoKDEuMCAtIGEpICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzAxID0gKChhICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzExID0gKFdfQklUUzE0XyAtIGl3MDAgLSBpdzAxIC0gaXcxMCk7XG4gICAgICAgICAgICAgICAgICAgIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAganB0ciA9ICgoeSArIGluZXh0X3kpICogbHcgKyBpbmV4dF94KSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlwdHIgPSAoeSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXB0ciA9IGlwdHIgPDwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK2pwdHIsICsraXB0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19uZXh0W2pwdHJdKSAqIGl3MDAgKyAoaW1nX25leHRbanB0ciArIDFdKSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX25leHRbanB0ciArIGx3XSkgKiBpdzEwICsgKGltZ19uZXh0W2pwdHIgKyBsdyArIDFdKSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID0gKGl2YWwgLSBpd2luX2J1ZltpcHRyXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMSArPSBpdmFsICogZGVyaXZfaXdpbltkaXB0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMiArPSBpdmFsICogZGVyaXZfaXdpbltkaXB0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGIxICo9IEZMVF9TQ0FMRTtcbiAgICAgICAgICAgICAgICAgICAgYjIgKj0gRkxUX1NDQUxFO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX3ggPSAoKEExMiAqIGIyIC0gQTIyICogYjEpICogRCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX3kgPSAoKEExMiAqIGIxIC0gQTExICogYjIpICogRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ICs9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSArPSBkZWx0YV95O1xuICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldID0gbmV4dF94ICsgaGFsZl93aW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gPSBuZXh0X3kgKyBoYWxmX3dpbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGFfeCAqIGRlbHRhX3ggKyBkZWx0YV95ICogZGVsdGFfeSA8PSBlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXIgPiAwICYmIE1hdGguYWJzKGRlbHRhX3ggKyBwcmV2X2RlbHRhX3gpIDwgMC4wMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZGVsdGFfeSArIHByZXZfZGVsdGFfeSkgPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldIC09IGRlbHRhX3ggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2pdIC09IGRlbHRhX3kgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeCA9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBwb2ludHMgbG9vcFxuICAgICAgICB9IC8vIGxldmVscyBsb29wXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGl3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9pd2luX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZGVyaXZfbGV2X25vZGUpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY29yZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBOiB7IFt4OiBzdHJpbmddOiBhbnk7IH0sIGkwOiBzdHJpbmcgfCBudW1iZXIsIGkxOiBzdHJpbmcgfCBudW1iZXIsIHQ6IGFueSkge1xuICAgIHQgPSBBW2kwXTtcbiAgICBBW2kwXSA9IEFbaTFdO1xuICAgIEFbaTFdID0gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90KGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgYiAvPSBhO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGguc3FydCgxLjAgKyBiICogYik7XG4gICAgfVxuICAgIGlmIChiID4gMCkge1xuICAgICAgICBhIC89IGI7XG4gICAgICAgIHJldHVybiBiICogTWF0aC5zcXJ0KDEuMCArIGEgKiBhKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0bWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGlkZW50aXR5KE06IG1hdHJpeF90LCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBzcmMgPSBNLmRhdGE7XG4gICAgICAgIHZhciByb3dzID0gTS5yb3dzLCBjb2xzID0gTS5jb2xzLCBjb2xzXzEgPSAoY29scyArIDEpIHwgMDtcbiAgICAgICAgdmFyIGxlbiA9IHJvd3MgKiBjb2xzO1xuICAgICAgICB2YXIgayA9IGxlbjtcbiAgICAgICAgd2hpbGUgKC0tbGVuID49IDApIHNyY1tsZW5dID0gMC4wO1xuICAgICAgICBsZW4gPSBrO1xuICAgICAgICBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHNyY1trXSA9IHZhbHVlO1xuICAgICAgICAgICAgayA9IGsgKyBjb2xzXzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoQXQ6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEM6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCwgQjogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDOiBtYXRyaXhfdCwgQTogbWF0cml4X3QsIEI6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQyA9IDAsIHBDID0gMCwgcF9DQyA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgcF9DICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBfQSA9IGk7XG4gICAgICAgICAgICBwX0NDID0gcF9DICsgaTtcbiAgICAgICAgICAgIHBDID0gcF9DQztcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBuY29sczsgcEMrKywgcF9DQyArPSBuY29scywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgcEIgPSBqO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBuY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBhZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BfQ0NdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFyaW91cyBzbWFsbCBtYXRyaXggb3BlcmF0aW9uc1xuICAgIGlkZW50aXR5XzN4MyhNOiBtYXRyaXhfdCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgZHQgPSBNLmRhdGE7XG4gICAgICAgIGR0WzBdID0gZHRbNF0gPSBkdFs4XSA9IHZhbHVlO1xuICAgICAgICBkdFsxXSA9IGR0WzJdID0gZHRbM10gPSAwO1xuICAgICAgICBkdFs1XSA9IGR0WzZdID0gZHRbN10gPSAwO1xuICAgIH1cblxuICAgIGludmVydF8zeDMoZnJvbTogbWF0cml4X3QsIHRvOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE06IG1hdHJpeF90KTogbnVtYmVyIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMTogbnVtYmVyLCBNMTI6IG51bWJlciwgTTEzOiBudW1iZXIsXG4gICAgICAgIE0yMTogbnVtYmVyLCBNMjI6IG51bWJlciwgTTIzOiBudW1iZXIsXG4gICAgICAgIE0zMTogbnVtYmVyLCBNMzI6IG51bWJlciwgTTMzOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBkYXRhX3QgfSBmcm9tICcuLi9ub2RlX3V0aWxzL2RhdGFfdCdcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhfVCB7XG4gICAgYWxsb2NhdGU6ICgpID0+IHZvaWQ7XG4gICAgY29weV90bzogKG90aGVyOiBhbnkpID0+IHZvaWQ7XG4gICAgcmVzaXplOiAoYzogbnVtYmVyLCByOiBudW1iZXIsIGNoOiBhbnkpID0+IHZvaWQ7XG59XG5leHBvcnQgY2xhc3MgbWF0cml4X3QgaW1wbGVtZW50cyBJTWF0cml4X1Qge1xuICAgIHByaXZhdGUgZHQ6IElEYXRhX1R5cGU7XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICBwdWJsaWMgY2hhbm5lbDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2xzOiBudW1iZXI7XG4gICAgcHVibGljIHJvd3M6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHB1YmxpYyBidWZmZXI6IGRhdGFfdDtcbiAgICBjb25zdHJ1Y3RvcihjOiBudW1iZXIsIHI6IG51bWJlciwgX2RhdGFfdHlwZTogbnVtYmVyLCBfZGF0YV9idWZmZXI/OiBkYXRhX3QpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXI6IGFueSk6IHZvaWQge1xuICAgICAgICB2YXIgb2QgPSBvdGhlci5kYXRhLCB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBuID0gKHRoaXMuY29scyAqIHRoaXMucm93cyAqIHRoaXMuY2hhbm5lbCkgfCAwO1xuICAgICAgICBmb3IgKDsgaSA8IG4gLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgICAgICBvZFtpICsgMV0gPSB0ZFtpICsgMV07XG4gICAgICAgICAgICBvZFtpICsgMl0gPSB0ZFtpICsgMl07XG4gICAgICAgICAgICBvZFtpICsgM10gPSB0ZFtpICsgM107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzaXplKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHsgY2ggPSB0aGlzLmNoYW5uZWw7IH1cbiAgICAgICAgLy8gcmVsb2NhdGUgYnVmZmVyIG9ubHkgaWYgbmV3IHNpemUgZG9lc250IGZpdFxuICAgICAgICB2YXIgbmV3X3NpemUgPSAoYyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogY2gpICogcjtcbiAgICAgICAgaWYgKG5ld19zaXplID4gdGhpcy5idWZmZXIuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIHJhbnNhY19wYXJhbXNfdCB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgdGhyZXNoOiBudW1iZXI7XG4gICAgcHVibGljIGVwczogbnVtYmVyO1xuICAgIHB1YmxpYyBwcm9iOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyLCB0aHJlc2g6IG51bWJlciwgZXBzOiBudW1iZXIsIHByb2I6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2l6ZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aHJlc2ggPT09IFwidW5kZWZpbmVkXCIpIHsgdGhyZXNoID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgZXBzID09PSBcInVuZGVmaW5lZFwiKSB7IGVwcyA9IDAuNTsgfVxuICAgICAgICBpZiAodHlwZW9mIHByb2IgPT09IFwidW5kZWZpbmVkXCIpIHsgcHJvYiA9IDAuOTk7IH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnRocmVzaCA9IHRocmVzaDtcbiAgICAgICAgdGhpcy5lcHMgPSBlcHM7XG4gICAgICAgIHRoaXMucHJvYiA9IHByb2I7XG4gICAgfTtcbiAgICB1cGRhdGVfaXRlcnMoX2VwczogbnVtYmVyLCBtYXhfaXRlcnM6IG51bWJlcikge1xuICAgICAgICB2YXIgbnVtID0gTWF0aC5sb2coMSAtIHRoaXMucHJvYik7XG4gICAgICAgIHZhciBkZW5vbSA9IE1hdGgubG9nKDEgLSBNYXRoLnBvdygxIC0gX2VwcywgdGhpcy5zaXplKSk7XG4gICAgICAgIHJldHVybiAoZGVub20gPj0gMCB8fCAtbnVtID49IG1heF9pdGVycyAqICgtZGVub20pID8gbWF4X2l0ZXJzIDogTWF0aC5yb3VuZChudW0gLyBkZW5vbSkpIHwgMDtcbiAgICB9XG59OyIsImltcG9ydCB7IElEYXRhX1QsIGRhdGFfdCB9IGZyb20gJy4vZGF0YV90J1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb29sX05vZGVfVCB7XG4gICAgcmVzaXplOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfcG9vbF9ub2RlX3QgaW1wbGVtZW50cyBJUG9vbF9Ob2RlX1Qge1xuICAgIHB1YmxpYyBuZXh0OiBhbnk7XG4gICAgcHVibGljIGRhdGE/OiBJRGF0YV9UO1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogYW55O1xuICAgIHB1YmxpYyB1ODogVWludDhBcnJheTtcbiAgICBwdWJsaWMgaTMyOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBwdWJsaWMgZjY0OiBGbG9hdDY0QXJyYXk7XG5cbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG4gICAgcmVzaXplKHNpemVfaW5fYnl0ZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhX1Qge1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBidWZmZXI6IEFycmF5QnVmZmVyO1xuICAgIHU4OiBVaW50OEFycmF5O1xuICAgIGkzMjogSW50MzJBcnJheTtcbiAgICBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBmNjQ6IEZsb2F0NjRBcnJheTtcbn1cblxuZXhwb3J0IGNsYXNzIGRhdGFfdCBpbXBsZW1lbnRzIElEYXRhX1QgIHtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBidWZmZXI6IEFycmF5QnVmZmVyO1xuICAgIHB1YmxpYyB1ODogVWludDhBcnJheTtcbiAgICBwdWJsaWMgaTMyOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBwdWJsaWMgZjY0OiBGbG9hdDY0QXJyYXk7XG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlczogbnVtYmVyLCBidWZmZXI/OiBhbnkpIHtcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsLTMsIDksNS8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLFxuICAgIDQsMiwgNywtMTIvKm1lYW4gKDEuMTI0NjFlLTA1KSwgY29ycmVsYXRpb24gKDAuMDQzNzU4NCkqLyxcbiAgICAtMTEsOSwgLTgsMi8qbWVhbiAoMy4zNzM4MmUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjE3NDA5KSovLFxuICAgIDcsLTEyLCAxMiwtMTMvKm1lYW4gKDUuNjIzMDNlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYzNjk3NykqLyxcbiAgICAyLC0xMywgMiwxMi8qbWVhbiAoMC4wMDAxMzQ5NTMpLCBjb3JyZWxhdGlvbiAoMC4wODUwOTkpKi8sXG4gICAgMSwtNywgMSw2LyptZWFuICgwLjAwMDUyODU2NSksIGNvcnJlbGF0aW9uICgwLjA4NTcxNzUpKi8sXG4gICAgLTIsLTEwLCAtMiwtNC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsLTEzLCAtMTEsLTgvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sXG4gICAgLTEzLC0zLCAtMTIsLTkvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLFxuICAgIDEwLDQsIDExLDkvKm1lYW4gKDAuMTIyMDY1KSwgY29ycmVsYXRpb24gKDAuMDkzMjg1KSovLFxuICAgIC0xMywtOCwgLTgsLTkvKm1lYW4gKDAuMTYyNzg3KSwgY29ycmVsYXRpb24gKDAuMDk0Mjc0OCkqLyxcbiAgICAtMTEsNywgLTksMTIvKm1lYW4gKDAuMjE1NjEpLCBjb3JyZWxhdGlvbiAoMC4wOTc0NDM4KSovLFxuICAgIDcsNywgMTIsNi8qbWVhbiAoMC4xNjA1ODMpLCBjb3JyZWxhdGlvbiAoMC4xMzAwNjQpKi8sXG4gICAgLTQsLTUsIC0zLDAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywyLCAtMTIsLTMvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sXG4gICAgLTksMCwgLTcsNS8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sXG4gICAgMTIsLTYsIDEyLC0xLyptZWFuICgwLjA2NzYyMjYpLCBjb3JyZWxhdGlvbiAoMC4xNjY4OSkqLyxcbiAgICAtMyw2LCAtMiwxMi8qbWVhbiAoMC4xNjY4NDcpLCBjb3JyZWxhdGlvbiAoMC4xNzE2ODIpKi8sXG4gICAgLTYsLTEzLCAtNCwtOC8qbWVhbiAoMC4xMDEyMTUpLCBjb3JyZWxhdGlvbiAoMC4xNzk3MTYpKi8sXG4gICAgMTEsLTEzLCAxMiwtOC8qbWVhbiAoMC4yMDA2NDEpLCBjb3JyZWxhdGlvbiAoMC4xOTIyNzkpKi8sXG4gICAgNCw3LCA1LDEvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLFxuICAgIDUsLTMsIDEwLC0zLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLyxcbiAgICAzLC03LCA2LDEyLyptZWFuICgwLjA3MDk5NjQpLCBjb3JyZWxhdGlvbiAoMC4yMTA4NzIpKi8sXG4gICAgLTgsLTcsIC02LC0yLyptZWFuICgwLjA5Mzk4MzQpLCBjb3JyZWxhdGlvbiAoMC4yMTI1ODkpKi8sXG4gICAgLTIsMTEsIC0xLC0xMC8qbWVhbiAoMC4xMjc3NzgpLCBjb3JyZWxhdGlvbiAoMC4yMDg2NikqLyxcbiAgICAtMTMsMTIsIC04LDEwLyptZWFuICgwLjE0NzgzKSwgY29ycmVsYXRpb24gKDAuMjA2MzU2KSovLFxuICAgIC03LDMsIC01LC0zLyptZWFuICgwLjE4MjE0MSksIGNvcnJlbGF0aW9uICgwLjE5ODk0MikqLyxcbiAgICAtNCwyLCAtMyw3LyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLFxuICAgIC0xMCwtMTIsIC02LDExLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sXG4gICAgNSwtMTIsIDYsLTcvKm1lYW4gKDAuMjIyMzEyKSwgY29ycmVsYXRpb24gKDAuMjMzMjQpKi8sXG4gICAgNSwtNiwgNywtMS8qbWVhbiAoMC4yMjkwODIpLCBjb3JyZWxhdGlvbiAoMC4yMzM4OSkqLyxcbiAgICAxLDAsIDQsLTUvKm1lYW4gKDAuMjQxNTc3KSwgY29ycmVsYXRpb24gKDAuMjE1Mjg2KSovLFxuICAgIDksMTEsIDExLC0xMy8qbWVhbiAoMC4wMDMzODUwNyksIGNvcnJlbGF0aW9uICgwLjI1MTM3MykqLyxcbiAgICA0LDcsIDQsMTIvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsLTEsIDQsNC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sXG4gICAgLTQsLTEyLCAtMiw3LyptZWFuICgwLjE4Mjc3MSksIGNvcnJlbGF0aW9uICgwLjI0NDg2NykqLyxcbiAgICAtOCwtNSwgLTcsLTEwLyptZWFuICgwLjE4Njg5OCksIGNvcnJlbGF0aW9uICgwLjIzOTAxKSovLFxuICAgIDQsMTEsIDksMTIvKm1lYW4gKDAuMjI2MjI2KSwgY29ycmVsYXRpb24gKDAuMjU4MjU1KSovLFxuICAgIDAsLTgsIDEsLTEzLyptZWFuICgwLjA4OTc4ODYpLCBjb3JyZWxhdGlvbiAoMC4yNzQ4MjcpKi8sXG4gICAgLTEzLC0yLCAtOCwyLyptZWFuICgwLjE0ODc3NCksIGNvcnJlbGF0aW9uICgwLjI4MDY1KSovLFxuICAgIC0zLC0yLCAtMiwzLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLyxcbiAgICAtNiw5LCAtNCwtOS8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sXG4gICAgOCwxMiwgMTAsNy8qbWVhbiAoMC4yMjUzMzcpLCBjb3JyZWxhdGlvbiAoMC4yODI4NTEpKi8sXG4gICAgMCw5LCAxLDMvKm1lYW4gKDAuMjI2Njg3KSwgY29ycmVsYXRpb24gKDAuMjc4NzM0KSovLFxuICAgIDcsLTUsIDExLC0xMC8qbWVhbiAoMC4wMDY5Mzg4MiksIGNvcnJlbGF0aW9uICgwLjMwNTE2MSkqLyxcbiAgICAtMTMsLTYsIC0xMSwwLyptZWFuICgwLjAyMjcyODMpLCBjb3JyZWxhdGlvbiAoMC4zMDAxODEpKi8sXG4gICAgMTAsNywgMTIsMS8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwtMywgLTYsMTIvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLFxuICAgIDEwLC05LCAxMiwtNC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sXG4gICAgLTEzLDgsIC04LC0xMi8qbWVhbiAoMC4xNDkyMDIpLCBjb3JyZWxhdGlvbiAoMC4zMDg5MTgpKi8sXG4gICAgLTEzLDAsIC04LC00LyptZWFuICgwLjE2MDkwOSksIGNvcnJlbGF0aW9uICgwLjMxMDAxMykqLyxcbiAgICAzLDMsIDcsOC8qbWVhbiAoMC4xNzc3NTUpLCBjb3JyZWxhdGlvbiAoMC4zMDkzOTQpKi8sXG4gICAgNSw3LCAxMCwtNy8qbWVhbiAoMC4yMTIzMzcpLCBjb3JyZWxhdGlvbiAoMC4zMTAzMTUpKi8sXG4gICAgLTEsNywgMSwtMTIvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLFxuICAgIDMsLTEwLCA1LDYvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLFxuICAgIDIsLTQsIDMsLTEwLyptZWFuICgwLjAwNDk0ODI3KSwgY29ycmVsYXRpb24gKDAuMzQ0OTQ4KSovLFxuICAgIC0xMywwLCAtMTMsNS8qbWVhbiAoMC4wNTQ5MTQ1KSwgY29ycmVsYXRpb24gKDAuMzQ0Njc1KSovLFxuICAgIC0xMywtNywgLTEyLDEyLyptZWFuICgwLjEwMzM4NSksIGNvcnJlbGF0aW9uICgwLjM0MjcxNSkqLyxcbiAgICAtMTMsMywgLTExLDgvKm1lYW4gKDAuMTM0MjIyKSwgY29ycmVsYXRpb24gKDAuMzIyOTIyKSovLFxuICAgIC03LDEyLCAtNCw3LyptZWFuICgwLjE1MzI4NCksIGNvcnJlbGF0aW9uICgwLjMzNzA2MSkqLyxcbiAgICA2LC0xMCwgMTIsOC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sXG4gICAgLTksLTEsIC03LC02LyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLFxuICAgIC0yLC01LCAwLDEyLyptZWFuICgwLjIwMTUxOCksIGNvcnJlbGF0aW9uICgwLjM0MDYzNSkqLyxcbiAgICAtMTIsNSwgLTcsNS8qbWVhbiAoMC4yMDc4MDUpLCBjb3JyZWxhdGlvbiAoMC4zMzU2MzEpKi8sXG4gICAgMywtMTAsIDgsLTEzLyptZWFuICgwLjIyNDQzOCksIGNvcnJlbGF0aW9uICgwLjM0NTA0KSovLFxuICAgIC03LC03LCAtNCw1LyptZWFuICgwLjIzOTM2MSksIGNvcnJlbGF0aW9uICgwLjMzODA1MykqLyxcbiAgICAtMywtMiwgLTEsLTcvKm1lYW4gKDAuMjQwNzQ0KSwgY29ycmVsYXRpb24gKDAuMzQ0MzIyKSovLFxuICAgIDIsOSwgNSwtMTEvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sXG4gICAgLTExLC0xMywgLTUsLTEzLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLyxcbiAgICAtMSw2LCAwLC0xLyptZWFuICgwLjI0NzU3MSksIGNvcnJlbGF0aW9uICgwLjM0MzY4NCkqLyxcbiAgICA1LC0zLCA1LDIvKm1lYW4gKDAuMDAwNjk3MjU2KSwgY29ycmVsYXRpb24gKDAuMzU3MjY1KSovLFxuICAgIC00LC0xMywgLTQsMTIvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC4zNzM4MjcpKi8sXG4gICAgLTksLTYsIC05LDYvKm1lYW4gKDAuMDEyNjg1NiksIGNvcnJlbGF0aW9uICgwLjM3MzkzOCkqLyxcbiAgICAtMTIsLTEwLCAtOCwtNC8qbWVhbiAoMC4wMTUyNDk3KSwgY29ycmVsYXRpb24gKDAuMzY0MjM3KSovLFxuICAgIDEwLDIsIDEyLC0zLyptZWFuICgwLjAyOTk5MzMpLCBjb3JyZWxhdGlvbiAoMC4zNDUyOTIpKi8sXG4gICAgNywxMiwgMTIsMTIvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLyxcbiAgICAtNywtMTMsIC02LDUvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLyxcbiAgICAtNCw5LCAtMyw0LyptZWFuICgwLjA5OTg2NSksIGNvcnJlbGF0aW9uICgwLjM3MjI3NikqLyxcbiAgICA3LC0xLCAxMiwyLyptZWFuICgwLjExNzA4MyksIGNvcnJlbGF0aW9uICgwLjM2NDUyOSkqLyxcbiAgICAtNyw2LCAtNSwxLyptZWFuICgwLjEyNjEyNSksIGNvcnJlbGF0aW9uICgwLjM2OTYwNikqLyxcbiAgICAtMTMsMTEsIC0xMiw1LyptZWFuICgwLjEzMDM2NCksIGNvcnJlbGF0aW9uICgwLjM1ODUwMikqLyxcbiAgICAtMyw3LCAtMiwtNi8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC4zNzU1MzEpKi8sXG4gICAgNywtOCwgMTIsLTcvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLFxuICAgIC0xMywtNywgLTExLC0xMi8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sXG4gICAgMSwtMywgMTIsMTIvKm1lYW4gKDAuMTgzMzc4KSwgY29ycmVsYXRpb24gKDAuMzcxOTE2KSovLFxuICAgIDIsLTYsIDMsMC8qbWVhbiAoMC4yMjg3MTEpLCBjb3JyZWxhdGlvbiAoMC4zNzE3NjEpKi8sXG4gICAgLTQsMywgLTIsLTEzLyptZWFuICgwLjI0NzIxMSksIGNvcnJlbGF0aW9uICgwLjM2NDA2MykqLyxcbiAgICAtMSwtMTMsIDEsOS8qbWVhbiAoMC4yNDkzMjUpLCBjb3JyZWxhdGlvbiAoMC4zNzgxMzkpKi8sXG4gICAgNywxLCA4LC02LyptZWFuICgwLjAwMDY1MjI3MiksIGNvcnJlbGF0aW9uICgwLjQxMTY4MikqLyxcbiAgICAxLC0xLCAzLDEyLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLFxuICAgIDksMSwgMTIsNi8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLFxuICAgIC0xLC05LCAtMSwzLyptZWFuICgwLjAzNjQ0ODUpLCBjb3JyZWxhdGlvbiAoMC40MTA3NTIpKi8sXG4gICAgLTEzLC0xMywgLTEwLDUvKm1lYW4gKDAuMDM3NjA2OCksIGNvcnJlbGF0aW9uICgwLjM5ODM3NCkqLyxcbiAgICA3LDcsIDEwLDEyLyptZWFuICgwLjA0MjQyMDIpLCBjb3JyZWxhdGlvbiAoMC40MDU2NjMpKi8sXG4gICAgMTIsLTUsIDEyLDkvKm1lYW4gKDAuMDk0MjY0NSksIGNvcnJlbGF0aW9uICgwLjQxMDQyMikqLyxcbiAgICA2LDMsIDcsMTEvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LC0xMywgNiwxMC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sXG4gICAgMiwtMTIsIDIsMy8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC40MTYwNzYpKi8sXG4gICAgMyw4LCA0LC02LyptZWFuICgwLjE2NTA4MSksIGNvcnJlbGF0aW9uICgwLjQxNzU2OSkqLyxcbiAgICAyLDYsIDEyLC0xMy8qbWVhbiAoMC4xNzE4NzQpLCBjb3JyZWxhdGlvbiAoMC40MDg0NzEpKi8sXG4gICAgOSwtMTIsIDEwLDMvKm1lYW4gKDAuMTc1MTQ2KSwgY29ycmVsYXRpb24gKDAuNDEyOTYpKi8sXG4gICAgLTgsNCwgLTcsOS8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLDEyLCAtNCwtNi8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sXG4gICAgMSwxMiwgMiwtOC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sXG4gICAgNiwtOSwgNywtNC8qbWVhbiAoMC4xOTI2NjgpLCBjb3JyZWxhdGlvbiAoMC4zOTQ3NzEpKi8sXG4gICAgMiwzLCAzLC0yLyptZWFuICgwLjIwMDE1NyksIGNvcnJlbGF0aW9uICgwLjQwODMwMykqLyxcbiAgICA2LDMsIDExLDAvKm1lYW4gKDAuMjA0NTg4KSwgY29ycmVsYXRpb24gKDAuNDExNzYyKSovLFxuICAgIDMsLTMsIDgsLTgvKm1lYW4gKDAuMjA1OTA0KSwgY29ycmVsYXRpb24gKDAuNDE2Mjk0KSovLFxuICAgIDcsOCwgOSwzLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLyxcbiAgICAtMTEsLTUsIC02LC00LyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLyxcbiAgICAtMTAsMTEsIC01LDEwLyptZWFuICgwLjI0NzY3MiksIGNvcnJlbGF0aW9uICgwLjQxMzM5MikqLyxcbiAgICAtNSwtOCwgLTMsMTIvKm1lYW4gKDAuMjQ3NzQpLCBjb3JyZWxhdGlvbiAoMC40MTE0MTYpKi8sXG4gICAgLTEwLDUsIC05LDAvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC40NTQwMDMpKi8sXG4gICAgOCwtMSwgMTIsLTYvKm1lYW4gKDAuMDI5MzYzNSksIGNvcnJlbGF0aW9uICgwLjQ1NTM2OCkqLyxcbiAgICA0LC02LCA2LC0xMS8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwxMiwgLTgsNy8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLFxuICAgIDQsLTIsIDYsNy8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sXG4gICAgLTIsMCwgLTIsMTIvKm1lYW4gKDAuMDUyNTk3OCksIGNvcnJlbGF0aW9uICgwLjQ0MzM4KSovLFxuICAgIC01LC04LCAtNSwyLyptZWFuICgwLjA2Mjk2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTcwOTYpKi8sXG4gICAgNywtNiwgMTAsMTIvKm1lYW4gKDAuMDY1Mzg0NiksIGNvcnJlbGF0aW9uICgwLjQ0NTYyMykqLyxcbiAgICAtOSwtMTMsIC04LC04LyptZWFuICgwLjA4NTg3NDkpLCBjb3JyZWxhdGlvbiAoMC40NDk3ODkpKi8sXG4gICAgLTUsLTEzLCAtNSwtMi8qbWVhbiAoMC4xMjI0MDIpLCBjb3JyZWxhdGlvbiAoMC40NTAyMDEpKi8sXG4gICAgOCwtOCwgOSwtMTMvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLFxuICAgIC05LC0xMSwgLTksMC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sXG4gICAgMSwtOCwgMSwtMi8qbWVhbiAoMC4xMzI0NjcpLCBjb3JyZWxhdGlvbiAoMC40NDAxMzMpKi8sXG4gICAgNywtNCwgOSwxLyptZWFuICgwLjEzMjY5MiksIGNvcnJlbGF0aW9uICgwLjQ1NCkqLyxcbiAgICAtMiwxLCAtMSwtNC8qbWVhbiAoMC4xMzU2OTUpLCBjb3JyZWxhdGlvbiAoMC40NTU3MzkpKi8sXG4gICAgMTEsLTYsIDEyLC0xMS8qbWVhbiAoMC4xNDI5MDQpLCBjb3JyZWxhdGlvbiAoMC40NDYxMTQpKi8sXG4gICAgLTEyLC05LCAtNiw0LyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLyxcbiAgICAzLDcsIDcsMTIvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLFxuICAgIDUsNSwgMTAsOC8qbWVhbiAoMC4xNTI5MDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMzYpKi8sXG4gICAgMCwtNCwgMiw4LyptZWFuICgwLjE2NzA4MyksIGNvcnJlbGF0aW9uICgwLjQ1OTMxNSkqLyxcbiAgICAtOSwxMiwgLTUsLTEzLyptZWFuICgwLjE3MzIzNCksIGNvcnJlbGF0aW9uICgwLjQ1NDcwNikqLyxcbiAgICAwLDcsIDIsMTIvKm1lYW4gKDAuMTgzMTIpLCBjb3JyZWxhdGlvbiAoMC40MzM4NTUpKi8sXG4gICAgLTEsMiwgMSw3LyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLyxcbiAgICA1LDExLCA3LC05LyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLyxcbiAgICAzLDUsIDYsLTgvKm1lYW4gKDAuMTg4OTY4KSwgY29ycmVsYXRpb24gKDAuNDU1ODA4KSovLFxuICAgIC0xMywtNCwgLTgsOS8qbWVhbiAoMC4xOTE2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTkxMjgpKi8sXG4gICAgLTUsOSwgLTMsLTMvKm1lYW4gKDAuMTkzMTk2KSwgY29ycmVsYXRpb24gKDAuNDU4MzY0KSovLFxuICAgIC00LC03LCAtMywtMTIvKm1lYW4gKDAuMTk2NTM2KSwgY29ycmVsYXRpb24gKDAuNDU1NzgyKSovLFxuICAgIDYsNSwgOCwwLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsNiwgLTYsMTIvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLFxuICAgIC0xMyw2LCAtNSwtMi8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sXG4gICAgMSwtMTAsIDMsMTAvKm1lYW4gKDAuMjExNzE4KSwgY29ycmVsYXRpb24gKDAuNDQwNjA2KSovLFxuICAgIDQsMSwgOCwtNC8qbWVhbiAoMC4yMTMwMzQpLCBjb3JyZWxhdGlvbiAoMC40NDMxNzcpKi8sXG4gICAgLTIsLTIsIDIsLTEzLyptZWFuICgwLjIzNDMzNCksIGNvcnJlbGF0aW9uICgwLjQ1NTMwNCkqLyxcbiAgICAyLC0xMiwgMTIsMTIvKm1lYW4gKDAuMjM1Njg0KSwgY29ycmVsYXRpb24gKDAuNDQzNDM2KSovLFxuICAgIC0yLC0xMywgMCwtNi8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sXG4gICAgNCwxLCA5LDMvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sXG4gICAgLTYsLTEwLCAtMywtNS8qbWVhbiAoMC4yNDg0NTkpLCBjb3JyZWxhdGlvbiAoMC40Mzk2MjEpKi8sXG4gICAgLTMsLTEzLCAtMSwxLyptZWFuICgwLjI0OTUwNSksIGNvcnJlbGF0aW9uICgwLjQ1NjY2NikqLyxcbiAgICA3LDUsIDEyLC0xMS8qbWVhbiAoMC4wMDExOTIwOCksIGNvcnJlbGF0aW9uICgwLjQ5NTQ2NikqLyxcbiAgICA0LC0yLCA1LC03LyptZWFuICgwLjAwMzcyMjQ1KSwgY29ycmVsYXRpb24gKDAuNDg0MjE0KSovLFxuICAgIC0xMyw5LCAtOSwtNS8qbWVhbiAoMC4wMDc0MTExNiksIGNvcnJlbGF0aW9uICgwLjQ5OTg1NCkqLyxcbiAgICA3LDEsIDgsNi8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLFxuICAgIDcsLTgsIDcsNi8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLFxuICAgIC03LC00LCAtNywxLyptZWFuICgwLjAyMzM4MDYpLCBjb3JyZWxhdGlvbiAoMC40OTY1NjgpKi8sXG4gICAgLTgsMTEsIC03LC04LyptZWFuICgwLjAyMzY1MDUpLCBjb3JyZWxhdGlvbiAoMC40ODk3MTkpKi8sXG4gICAgLTEzLDYsIC0xMiwtOC8qbWVhbiAoMC4wMjY4NzgxKSwgY29ycmVsYXRpb24gKDAuNTAzNDg3KSovLFxuICAgIDIsNCwgMyw5LyptZWFuICgwLjAzMjMzMjQpLCBjb3JyZWxhdGlvbiAoMC41MDE5MzgpKi8sXG4gICAgMTAsLTUsIDEyLDMvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwtNSwgLTYsNy8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLFxuICAgIDgsLTMsIDksLTgvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLyxcbiAgICAyLC0xMiwgMiw4LyptZWFuICgwLjA2MTY2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTY2NDIpKi8sXG4gICAgLTExLC0yLCAtMTAsMy8qbWVhbiAoMC4wNjI3NzU1KSwgY29ycmVsYXRpb24gKDAuNDk4NTYzKSovLFxuICAgIC0xMiwtMTMsIC03LC05LyptZWFuICgwLjA4Mjk2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTU0OTEpKi8sXG4gICAgLTExLDAsIC0xMCwtNS8qbWVhbiAoMC4wODQzMzQyKSwgY29ycmVsYXRpb24gKDAuNDg3MTQ2KSovLFxuICAgIDUsLTMsIDExLDgvKm1lYW4gKDAuMDkyOTkzNyksIGNvcnJlbGF0aW9uICgwLjUwMjMxNSkqLyxcbiAgICAtMiwtMTMsIC0xLDEyLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLFxuICAgIC0xLC04LCAwLDkvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLFxuICAgIC0xMywtMTEsIC0xMiwtNS8qbWVhbiAoMC4xMzYyNjkpLCBjb3JyZWxhdGlvbiAoMC40OTg3NzEpKi8sXG4gICAgLTEwLC0yLCAtMTAsMTEvKm1lYW4gKDAuMTQyMTczKSwgY29ycmVsYXRpb24gKDAuNDk4NzE0KSovLFxuICAgIC0zLDksIC0yLC0xMy8qbWVhbiAoMC4xNDQxNDEpLCBjb3JyZWxhdGlvbiAoMC40OTE5NzMpKi8sXG4gICAgMiwtMywgMywyLyptZWFuICgwLjE0ODkyKSwgY29ycmVsYXRpb24gKDAuNTAwNzgyKSovLFxuICAgIC05LC0xMywgLTQsMC8qbWVhbiAoMC4xNTAzNzEpLCBjb3JyZWxhdGlvbiAoMC40OTgyMTEpKi8sXG4gICAgLTQsNiwgLTMsLTEwLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLyxcbiAgICAtNCwxMiwgLTIsLTcvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLFxuICAgIC02LC0xMSwgLTQsOS8qbWVhbiAoMC4xNTc0OSksIGNvcnJlbGF0aW9uICgwLjQ5OTIyMikqLyxcbiAgICA2LC0zLCA2LDExLyptZWFuICgwLjE1OTIxMSksIGNvcnJlbGF0aW9uICgwLjUwMzgyMSkqLyxcbiAgICAtMTMsMTEsIC01LDUvKm1lYW4gKDAuMTYyNDI3KSwgY29ycmVsYXRpb24gKDAuNTAxOTA3KSovLFxuICAgIDExLDExLCAxMiw2LyptZWFuICgwLjE2NjUyKSwgY29ycmVsYXRpb24gKDAuNDk3NjMyKSovLFxuICAgIDcsLTUsIDEyLC0yLyptZWFuICgwLjE2OTE0MSksIGNvcnJlbGF0aW9uICgwLjQ4NDQ3NCkqLyxcbiAgICAtMSwxMiwgMCw3LyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLyxcbiAgICAtNCwtOCwgLTMsLTIvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLFxuICAgIC03LDEsIC02LDcvKm1lYW4gKDAuMTc1KSwgY29ycmVsYXRpb24gKDAuNTAwMDI0KSovLFxuICAgIC0xMywtMTIsIC04LC0xMy8qbWVhbiAoMC4xNzU4NjYpLCBjb3JyZWxhdGlvbiAoMC40OTc1MjMpKi8sXG4gICAgLTcsLTIsIC02LC04LyptZWFuICgwLjE3ODI3MyksIGNvcnJlbGF0aW9uICgwLjUwMTg1NCkqLyxcbiAgICAtOCw1LCAtNiwtOS8qbWVhbiAoMC4xODExMDcpLCBjb3JyZWxhdGlvbiAoMC40OTQ4ODgpKi8sXG4gICAgLTUsLTEsIC00LDUvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMyw3LCAtOCwxMC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sXG4gICAgMSw1LCA1LC0xMy8qbWVhbiAoMC4xOTk3MyksIGNvcnJlbGF0aW9uICgwLjQ5OTc1OSkqLyxcbiAgICAxLDAsIDEwLC0xMy8qbWVhbiAoMC4yMDQ0NjUpLCBjb3JyZWxhdGlvbiAoMC40OTg3MykqLyxcbiAgICA5LDEyLCAxMCwtMS8qbWVhbiAoMC4yMDkzMzQpLCBjb3JyZWxhdGlvbiAoMC40OTA2MykqLyxcbiAgICA1LC04LCAxMCwtOS8qbWVhbiAoMC4yMTExMzQpLCBjb3JyZWxhdGlvbiAoMC41MDMwMTEpKi8sXG4gICAgLTEsMTEsIDEsLTEzLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwtMywgLTYsMi8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sXG4gICAgLTEsLTEwLCAxLDEyLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLyxcbiAgICAtMTMsMSwgLTgsLTEwLyptZWFuICgwLjIxMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5Nzg2KSovLFxuICAgIDgsLTExLCAxMCwtNi8qbWVhbiAoMC4yMTQxNTkpLCBjb3JyZWxhdGlvbiAoMC40ODgyNDYpKi8sXG4gICAgMiwtMTMsIDMsLTYvKm1lYW4gKDAuMjE2OTkzKSwgY29ycmVsYXRpb24gKDAuNTAyODcpKi8sXG4gICAgNywtMTMsIDEyLC05LyptZWFuICgwLjIyMzYzOSksIGNvcnJlbGF0aW9uICgwLjQ3MDUwMikqLyxcbiAgICAtMTAsLTEwLCAtNSwtNy8qbWVhbiAoMC4yMjQwODkpLCBjb3JyZWxhdGlvbiAoMC41MDA4NTIpKi8sXG4gICAgLTEwLC04LCAtOCwtMTMvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLFxuICAgIDQsLTYsIDgsNS8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLyxcbiAgICAzLDEyLCA4LC0xMy8qbWVhbiAoMC4yMzMzNzgpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjUpKi8sXG4gICAgLTQsMiwgLTMsLTMvKm1lYW4gKDAuMjM0MzIzKSwgY29ycmVsYXRpb24gKDAuNDc2NjkyKSovLFxuICAgIDUsLTEzLCAxMCwtMTIvKm1lYW4gKDAuMjM2MzkyKSwgY29ycmVsYXRpb24gKDAuNDc1NDYyKSovLFxuICAgIDQsLTEzLCA1LC0xLyptZWFuICgwLjIzNjg0MiksIGNvcnJlbGF0aW9uICgwLjUwNDEzMikqLyxcbiAgICAtOSw5LCAtNCwzLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLyxcbiAgICAwLDMsIDMsLTkvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sXG4gICAgLTEyLDEsIC02LDEvKm1lYW4gKDAuMjQzMjk3KSwgY29ycmVsYXRpb24gKDAuNDg5NDQ3KSovLFxuICAgIDMsMiwgNCwtOC8qbWVhbiAoMC4wMDE1NTE5NiksIGNvcnJlbGF0aW9uICgwLjU1MzQ5NikqLyxcbiAgICAtMTAsLTEwLCAtMTAsOS8qbWVhbiAoMC4wMDIzOTU0MSksIGNvcnJlbGF0aW9uICgwLjU0Mjk3KSovLFxuICAgIDgsLTEzLCAxMiwxMi8qbWVhbiAoMC4wMDM0NDEzKSwgY29ycmVsYXRpb24gKDAuNTQ0MzYxKSovLFxuICAgIC04LC0xMiwgLTYsLTUvKm1lYW4gKDAuMDAzNTY1KSwgY29ycmVsYXRpb24gKDAuNTUxMjI1KSovLFxuICAgIDIsMiwgMyw3LyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsNiwgMTEsLTgvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sXG4gICAgNiw4LCA4LC0xMi8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLFxuICAgIC03LDEwLCAtNiw1LyptZWFuICgwLjAxMDIyMjcpLCBjb3JyZWxhdGlvbiAoMC41MzM2MzUpKi8sXG4gICAgLTMsLTksIC0zLDkvKm1lYW4gKDAuMDExMDIxMSksIGNvcnJlbGF0aW9uICgwLjU0MzEyMSkqLyxcbiAgICAtMSwtMTMsIC0xLDUvKm1lYW4gKDAuMDExMzQ3MyksIGNvcnJlbGF0aW9uICgwLjU1MDE3MykqLyxcbiAgICAtMywtNywgLTMsNC8qbWVhbiAoMC4wMTQwOTEzKSwgY29ycmVsYXRpb24gKDAuNTU0Nzc0KSovLFxuICAgIC04LC0yLCAtOCwzLyptZWFuICgwLjAxNzA0OSksIGNvcnJlbGF0aW9uICgwLjU1NDYxKSovLFxuICAgIDQsMiwgMTIsMTIvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sXG4gICAgMiwtNSwgMywxMS8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLFxuICAgIDYsLTksIDExLC0xMy8qbWVhbiAoMC4wMjkxNjEpLCBjb3JyZWxhdGlvbiAoMC41NDYyOTUpKi8sXG4gICAgMywtMSwgNywxMi8qbWVhbiAoMC4wMzAzMDgxKSwgY29ycmVsYXRpb24gKDAuNTQ4NTk5KSovLFxuICAgIDExLC0xLCAxMiw0LyptZWFuICgwLjAzNTUxNTEpLCBjb3JyZWxhdGlvbiAoMC41MjM5NDMpKi8sXG4gICAgLTMsMCwgLTMsNi8qbWVhbiAoMC4wNDE3OTA0KSwgY29ycmVsYXRpb24gKDAuNTQzMzk1KSovLFxuICAgIDQsLTExLCA0LDEyLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwtNCwgMiwxLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sXG4gICAgLTEwLC02LCAtOCwxLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sXG4gICAgLTEzLDcsIC0xMSwxLyptZWFuICgwLjA1OTczOTEpLCBjb3JyZWxhdGlvbiAoMC41NTA1MjQpKi8sXG4gICAgLTEzLDEyLCAtMTEsLTEzLyptZWFuICgwLjA2MDg5NzQpLCBjb3JyZWxhdGlvbiAoMC41NTM4MykqLyxcbiAgICA2LDAsIDExLC0xMy8qbWVhbiAoMC4wNjUxMjYpLCBjb3JyZWxhdGlvbiAoMC41NTIwMDYpKi8sXG4gICAgMCwtMSwgMSw0LyptZWFuICgwLjA3NDIyNCksIGNvcnJlbGF0aW9uICgwLjU0NjM3MikqLyxcbiAgICAtMTMsMywgLTksLTIvKm1lYW4gKDAuMDgwODU5MiksIGNvcnJlbGF0aW9uICgwLjU1NDg3NSkqLyxcbiAgICAtOSw4LCAtNiwtMy8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLFxuICAgIC0xMywtNiwgLTgsLTIvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLyxcbiAgICA1LC05LCA4LDEwLyptZWFuICgwLjA5NDk4NDMpLCBjb3JyZWxhdGlvbiAoMC41NTQ2OTQpKi8sXG4gICAgMiw3LCAzLC05LyptZWFuICgwLjA5OTQxNTIpLCBjb3JyZWxhdGlvbiAoMC41NTA5NzkpKi8sXG4gICAgLTEsLTYsIC0xLC0xLyptZWFuICgwLjEwMDQ1KSwgY29ycmVsYXRpb24gKDAuNTUyNzE0KSovLFxuICAgIDksNSwgMTEsLTIvKm1lYW4gKDAuMTAwNjg2KSwgY29ycmVsYXRpb24gKDAuNTUyNTk0KSovLFxuICAgIDExLC0zLCAxMiwtOC8qbWVhbiAoMC4xMDEwOTEpLCBjb3JyZWxhdGlvbiAoMC41MzIzOTQpKi8sXG4gICAgMywwLCAzLDUvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLFxuICAgIC0xLDQsIDAsMTAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLFxuICAgIDMsLTYsIDQsNS8qbWVhbiAoMC4xMTA3ODUpLCBjb3JyZWxhdGlvbiAoMC41NDA0OTEpKi8sXG4gICAgLTEzLDAsIC0xMCw1LyptZWFuICgwLjExMjc5OCksIGNvcnJlbGF0aW9uICgwLjUzNjU4MikqLyxcbiAgICA1LDgsIDEyLDExLyptZWFuICgwLjExNDE4MSksIGNvcnJlbGF0aW9uICgwLjU1NTc5MykqLyxcbiAgICA4LDksIDksLTYvKm1lYW4gKDAuMTE3NDMxKSwgY29ycmVsYXRpb24gKDAuNTUzNzYzKSovLFxuICAgIDcsLTQsIDgsLTEyLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLyxcbiAgICAtMTAsNCwgLTEwLDkvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sXG4gICAgNywzLCAxMiw0LyptZWFuICgwLjEyMjU4MiksIGNvcnJlbGF0aW9uICgwLjU1NTgyNSkqLyxcbiAgICA5LC03LCAxMCwtMi8qbWVhbiAoMC4xMjQ5NzgpLCBjb3JyZWxhdGlvbiAoMC41NDk4NDYpKi8sXG4gICAgNywwLCAxMiwtMi8qbWVhbiAoMC4xMjcwMDIpLCBjb3JyZWxhdGlvbiAoMC41Mzc0NTIpKi8sXG4gICAgLTEsLTYsIDAsLTExLyptZWFuICgwLjEyNzE0OCksIGNvcnJlbGF0aW9uICgwLjU0NzQwMSkqL1xuXTsiLCJleHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChzcmM6IGFueSwgZHN0OiBhbnksIGFuZ2xlOiBudW1iZXIsIHB4OiBudW1iZXIsIHB5OiBudW1iZXIsIHBzaXplOiBudW1iZXIsIEg6IHsgZGF0YTogYW55W107IH0sIGltZ3Byb2M6IGFueSkge1xuICAgIHZhciBjb3NpbmUgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgdmFyIHNpbmUgICA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIEguZGF0YVswXSA9IGNvc2luZSwgSC5kYXRhWzFdID0gLXNpbmUsICAgIEguZGF0YVsyXSA9ICgtY29zaW5lICsgc2luZSAgKSAqIHBzaXplKjAuNSArIHB4LFxuICAgIEguZGF0YVszXSA9IHNpbmUsICAgSC5kYXRhWzRdID0gIGNvc2luZSwgIEguZGF0YVs1XSA9ICgtc2luZSAgIC0gY29zaW5lKSAqIHBzaXplKjAuNSArIHB5O1xuXG4gICAgaW1ncHJvYy53YXJwX2FmZmluZShzcmMsIGRzdCwgSCwgMTI4KTtcbn0iLCJpbXBvcnQgeyB0aGlyZF9jaGVjaywgaXNfbG9jYWxfbWF4aW1hLCBwZXJmb3JtX29uZV9wb2ludCwgbGV2X3RhYmxlX3QgfSBmcm9tICcuL3lhcGVfdXRpbHMnXG5pbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90J1xuaW1wb3J0IHsga2V5cG9pbnRfdCB9IGZyb20gJy4uL2tleXBvaW50X3Qva2V5cG9pbnRfdCdcbmV4cG9ydCBjbGFzcyB5YXBlIHtcbiAgICBwcml2YXRlIGxldmVsX3RhYmxlczogbGV2X3RhYmxlX3RbXTtcbiAgICBwcml2YXRlIHRhdTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxldmVsX3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLnRhdSA9IDc7XG4gICAgfVxuXG4gICAgaW5pdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHB5cmFtaWRfbGV2ZWxzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBweXJhbWlkX2xldmVscyA9PT0gXCJ1bmRlZmluZWRcIikgeyBweXJhbWlkX2xldmVscyA9IDE7IH1cbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWluKHJhZGl1cywgNyk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgMyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBweXJhbWlkX2xldmVsczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsX3RhYmxlc1tpXSA9IG5ldyBsZXZfdGFibGVfdCh3aWR0aCA+PiBpLCBoZWlnaHQgPj4gaSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdChzcmM6IG1hdHJpeF90LCBwb2ludHM6IGtleXBvaW50X3RbXSwgYm9yZGVyOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSA0OyB9XG4gICAgICAgIHZhciB0ID0gdGhpcy5sZXZlbF90YWJsZXNbMF07XG4gICAgICAgIHZhciBSID0gdC5yYWRpdXMgfCAwLCBSbTEgPSAoUiAtIDEpIHwgMDtcbiAgICAgICAgdmFyIGRpcnMgPSB0LmRpcnM7XG4gICAgICAgIHZhciBkaXJzX2NvdW50ID0gdC5kaXJzX2NvdW50IHwgMDtcbiAgICAgICAgdmFyIG9wcG9zaXRlID0gZGlyc19jb3VudCA+PiAxO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scyB8IDAsIGggPSBzcmMucm93cyB8IDAsIGh3ID0gdyA+PiAxO1xuICAgICAgICB2YXIgc2NvcmVzID0gdC5zY29yZXM7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHJvdyA9IDAsIHJvd3ggPSAwLCBpcCA9IDAsIGltID0gMCwgYWJzX3Njb3JlID0gMCwgc2NvcmUgPSAwO1xuICAgICAgICB2YXIgdGF1ID0gdGhpcy50YXUgfCAwO1xuICAgICAgICB2YXIgbnVtYmVyX29mX3BvaW50cyA9IDAsIHB0O1xuXG4gICAgICAgIHZhciBzeCA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIHN5ID0gTWF0aC5tYXgoUiArIDEsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gUiAtIDIsIHcgLSBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV5ID0gTWF0aC5taW4oaCAtIFIgLSAyLCBoIC0gYm9yZGVyKSB8IDA7XG5cbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG4gICAgICAgICAgICAgICAgaXAgPSBpbWdbcm93eF0gKyB0YXUsIGltID0gaW1nW3Jvd3hdIC0gdGF1O1xuXG4gICAgICAgICAgICAgICAgaWYgKGltIDwgaW1nW3Jvd3ggKyBSXSAmJiBpbWdbcm93eCArIFJdIDwgaXAgJiYgaW0gPCBpbWdbcm93eCAtIFJdICYmIGltZ1tyb3d4IC0gUl0gPCBpcCkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZXNbcm93eF0gPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1fb25lX3BvaW50KGltZywgcm93eCwgc2NvcmVzLCBpbSwgaXAsIGRpcnMsIG9wcG9zaXRlLCBkaXJzX2NvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2NhbCBtYXhpbWFcbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG4gICAgICAgICAgICAgICAgc2NvcmUgPSBzY29yZXNbcm93eF07XG4gICAgICAgICAgICAgICAgYWJzX3Njb3JlID0gTWF0aC5hYnMoc2NvcmUpO1xuICAgICAgICAgICAgICAgIGlmIChhYnNfc2NvcmUgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgcGl4ZWwgaXMgMCwgdGhlIG5leHQgb25lIHdpbGwgbm90IGJlIGdvb2QgZW5vdWdoLiBTa2lwIGl0LlxuICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcmRfY2hlY2soc2NvcmVzLCByb3d4LCB3KSA+PSAzICYmIGlzX2xvY2FsX21heGltYShzY29yZXMsIHJvd3gsIHNjb3JlLCBodywgUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcG9pbnRzW251bWJlcl9vZl9wb2ludHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQueCA9IHgsIHB0LnkgPSB5LCBwdC5zY29yZSA9IGFic19zY29yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbnVtYmVyX29mX3BvaW50cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBSbTEsIHJvd3ggKz0gUm0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcl9vZl9wb2ludHM7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmVjb21wdXRlX2RpcmVjdGlvbnMoc3RlcDogbnVtYmVyLCBkaXJzOiBJbnQzMkFycmF5LCBSOiBudW1iZXIpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHgsIHk7XG5cbiAgICB4ID0gUjtcbiAgICBmb3IgKHkgPSAwOyB5IDwgeDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeC0tOyB4IDwgeSAmJiB4ID49IDA7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgLXggPCB5OyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5LS07IHkgPj0gMDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeSA+IHg7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4Kys7IHggPD0gMDsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeCA8IC15OyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeSsrOyB5IDwgMDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuXG4gICAgZGlyc1tpXSA9IGRpcnNbMF07XG4gICAgZGlyc1tpICsgMV0gPSBkaXJzWzFdO1xuICAgIHJldHVybiBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRfY2hlY2soU2I6IEludDMyQXJyYXkgfCBudW1iZXJbXSwgb2ZmOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgIHZhciBuID0gMDtcbiAgICBpZiAoU2Jbb2ZmICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwIC0gMV0gIT0gMCkgbisrO1xuXG4gICAgcmV0dXJuIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc19sb2NhbF9tYXhpbWEocDogSW50MzJBcnJheSwgb2ZmOiBudW1iZXIsIHY6IG51bWJlciwgc3RlcDogbnVtYmVyLCBuZWlnaGJvcmhvb2Q6IG51bWJlcikge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEk6IHsgW3g6IHN0cmluZ106IG51bWJlcjsgfSwgeDogbnVtYmVyLCBTY29yZXM6IEludDMyQXJyYXksIEltOiBudW1iZXIsIElwOiBudW1iZXIsIGRpcnM6IGFueVtdIHwgSW50MzJBcnJheSwgb3Bwb3NpdGU6IG51bWJlciwgZGlyc19uYjogbnVtYmVyKSB7XG4gICAgdmFyIHNjb3JlID0gMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAob3Bwb3NpdGUgLSAxKSB8IDA7XG4gICAgdmFyIEEgPSAwLCBCMCA9IDAsIEIxID0gMCwgQjIgPSAwO1xuICAgIHZhciBzdGF0ZSA9IDA7XG5cbiAgICAvLyBXRSBLTk9XIFRIQVQgTk9UKEEgfiBJMCAmIEIxIH4gSTApOlxuICAgIEEgPSBJW3ggKyBkaXJzW2FdXTtcbiAgICBpZiAoKEEgPD0gSXApKSB7XG4gICAgICAgIGlmICgoQSA+PSBJbSkpIHsgLy8gQSB+IEkwXG4gICAgICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMCA8PSBJcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKEIwID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZS8qIGlmICgoQjEgPCBJbSkpKi8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy8gQjAgPCBJMFxuICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIxIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy8gQSA+IEkwXG4gICAgICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMCA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgLy8gQSA8IEkwXG4gICAge1xuICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIwIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgc3RhdGUgPSAwO1xuICAgIH1cblxuICAgIGZvciAoYSA9IDE7IGEgPD0gb3Bwb3NpdGU7IGErKykge1xuICAgICAgICBBID0gSVt4ICsgZGlyc1thXV07XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA4OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMSA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA5OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA4OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy9cIlBCIGRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBzd2l0Y2goc3RhdGUpXG4gICAgfSAvLyBmb3IoYS4uLilcblxuICAgIFNjb3Jlc1t4XSA9IChzY29yZSArIGRpcnNfbmIgKiBJW3hdKTtcbn1cblxuZXhwb3J0IGNsYXNzIGxldl90YWJsZV90IHtcbiAgICBwdWJsaWMgZGlyczogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZGlyc19jb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBzY29yZXM6IEludDMyQXJyYXk7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHc6IG51bWJlciwgaDogbnVtYmVyLCByOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXJzID0gbmV3IEludDMyQXJyYXkoMTAyNCk7XG4gICAgICAgIHRoaXMuZGlyc19jb3VudCA9IHByZWNvbXB1dGVfZGlyZWN0aW9ucyh3LCB0aGlzLmRpcnMsIHIpIHwgMDtcbiAgICAgICAgdGhpcy5zY29yZXMgPSBuZXcgSW50MzJBcnJheSh3ICogaCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gciB8IDA7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX2xhcGxhY2lhbihzcmM6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIGRzdDogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSwgdzogbnVtYmVyLCBoOiBhbnksIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgc3g6IG51bWJlciwgc3k6IG51bWJlciwgZXg6IG51bWJlciwgZXk6IG51bWJlcikge1xuICAgIHZhciB5ID0gMCwgeCA9IDAsIHlyb3cgPSAoc3kgKiB3ICsgc3gpIHwgMCwgcm93ID0geXJvdztcblxuICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgeXJvdyArPSB3LCByb3cgPSB5cm93KSB7XG4gICAgICAgIGZvciAoeCA9IHN4OyB4IDwgZXg7ICsreCwgKytyb3cpIHtcbiAgICAgICAgICAgIGRzdFtyb3ddID0gLTQgKiBzcmNbcm93XSArIHNyY1tyb3cgKyBEeHhdICsgc3JjW3JvdyAtIER4eF0gKyBzcmNbcm93ICsgRHl5XSArIHNyY1tyb3cgLSBEeXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JjOiBudW1iZXJbXSwgb2ZmOiBudW1iZXIsIHRyOiBudW1iZXIsIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgRHh5OiBudW1iZXIsIER5eDogbnVtYmVyKSB7XG4gICAgdmFyIEl4eCA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHh4XSArIHNyY1tvZmYgLSBEeHhdO1xuICAgIHZhciBJeXkgPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER5eV0gKyBzcmNbb2ZmIC0gRHl5XTtcbiAgICB2YXIgSXh5ID0gc3JjW29mZiArIER4eV0gKyBzcmNbb2ZmIC0gRHh5XSAtIHNyY1tvZmYgKyBEeXhdIC0gc3JjW29mZiAtIER5eF07XG4gICAgdmFyIHNxcnRfZGVsdGEgPSAoTWF0aC5zcXJ0KCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkpKSB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5hYnModHIgLSBzcXJ0X2RlbHRhKSwgTWF0aC5hYnMoLSh0ciArIHNxcnRfZGVsdGEpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJVOEMxX3QiLCJVOEMzX3QiLCJVOEM0X3QiLCJGMzJDMV90IiwiRjMyQzJfdCIsIlMzMkMxX3QiLCJTMzJDMl90IiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsInR5cGUiLCJfY29udm9sX3U4IiwiYnVmIiwic3JjX2QiLCJkc3RfZCIsInciLCJoIiwiZmlsdGVyIiwia2VybmVsX3NpemUiLCJoYWxmX2tlcm5lbCIsImoiLCJrIiwic3AiLCJkcCIsInN1bSIsInN1bTEiLCJzdW0yIiwic3VtMyIsImYwIiwiZmsiLCJ3MiIsInczIiwidzQiLCJNYXRoIiwibWluIiwiX2NvbnZvbCIsIl9yZXNhbXBsZV91OCIsInNyYyIsImRzdCIsIm53IiwibmgiLCJ4b2ZzX2NvdW50IiwiY2giLCJjaGFubmVsIiwiY29scyIsInJvd3MiLCJkYXRhIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4Iiwic3kiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImEiLCJiIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJidWZfbm9kZSIsImdldF9idWZmZXIiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImkzMiIsInhvZnMiLCJtYXgiLCJwdXRfYnVmZmVyIiwiX3Jlc2FtcGxlIiwic2NhbGUiLCJmMzIiLCJhYnMiLCJzd2FwIiwiaHlwb3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJrZXlwb2ludF90IiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwieWFwZSIsImNvbXB1dGVfbGFwbGFjaWFuIiwiaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUiLCJyYW5zYWNfcGFyYW1zX3QiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwieCIsImZyb20iLCJ0byIsImNvdW50IiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJ5Iiwic3FydCIsIlNRUlQyIiwicG9pbnRzIiwiZHgxIiwiZHkxIiwiZHgyIiwiZHkyIiwiYWZmaW5lMmQiLCJtb2RlbCIsIm1kIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImxpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYV9idWZmIiwiYl9idWZmIiwiYV9tdCIsImJfbXQiLCJhZCIsImJkIiwibXVsdGlwbHlfQXRBIiwibXVsdGlwbHlfQXRCIiwibHVfc29sdmUiLCJpbnZlcnRfM3gzIiwibXVsdGlwbHlfM3gzIiwiaG9tb2dyYXBoeTJkIiwibUx0TCIsIkV2ZWMiLCJMdEwiLCJldmQiLCJYIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJlcnIiLCJ3dyIsIm0iLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHlyYW1pZF90IiwibGV2ZWxzIiwiQXJyYXkiLCJfaW1ncHJvYyIsImltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiLCJjb2RlIiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInRtcF9idWZmIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJkYXRhX3U4IiwiaG9sZCIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1hdGgiLCJpc191OCIsImJ1Zl9zeiIsImZpbHRfbm9kZSIsImdldF9nYXVzc2lhbl9rZXJuZWwiLCJpbWciLCJyaG9fcmVzIiwidGhldGFfcmVzIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiZHN0ZXAiLCJ4MSIsImMiLCJkIiwiZSIsImYiLCJzcm93MCIsInNyb3cxIiwic3JvdzIiLCJkcm93IiwidHJvdzAiLCJ0cm93MSIsImd4Z3kiLCJidWYwX25vZGUiLCJidWYxX25vZGUiLCJkc3Rfc3VtIiwiZHN0X3Nxc3VtIiwiZHN0X3RpbHRlZCIsIncwIiwiaDAiLCJ3MSIsInMiLCJzMiIsInAiLCJwdXAiLCJ2IiwicHJldiIsImhpc3QwIiwibm9ybSIsImhpc3QwX25vZGUiLCJsb3dfdGhyZXNoIiwiaGlnaF90aHJlc2giLCJncmFkIiwiX2dyYWQiLCJzdXBwcmVzcyIsInRnMjJ4IiwidGc2N3giLCJkeGR5X25vZGUiLCJtYXBfbm9kZSIsInN0YWNrX25vZGUiLCJtYXAiLCJzdGFjayIsImR4ZHkiLCJkeGR5X20iLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsInNvYmVsX2Rlcml2YXRpdmVzIiwiTnVtYmVyIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInhzMCIsInlzMCIsIndzIiwic2MiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJnIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJ0Iiwic2lnbWFfeCIsInNjYWxlXzJ4Iiwia2Vybl9ub2RlIiwiX2tlcm5lbCIsImV4cCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQxIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJwdHIiLCJwdHIyIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90Iiwic3dhcF9jbnQiLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiQSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsImVwcyIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJzZCIsImdhbW1hIiwiZGVsdGEiLCJzZWVkIiwidmFsMCIsImFzdW0iLCJXX2J1ZmYiLCJmNjQiLCJCIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJ3X210Iiwidl9tdCIsInRyYW5zcG9zZSIsIkphY29iaVNWREltcGwiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwib3JiIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImNvcm5lcnMiLCJkZXNjcmlwdG9ycyIsIkRFU0NSX1NJWkUiLCJhbmdsZSIsInBhdGNoX2QiLCJwYXRjaF9vZmYiLCJwYXR0IiwiZGVzY3JfZCIsImRlc2NyX29mZiIsInlhcGUwNiIsImxhcGxhY2lhbl90aHJlc2hvbGQiLCJtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkIiwiYm9yZGVyIiwic3JkX2QiLCJEeHgiLCJEeXkiLCJEeHkiLCJEeXgiLCJsYXBfYnVmIiwibGFwbGFjaWFuIiwibHYiLCJyb3d4IiwibWluX2VpZ2VuX3ZhbHVlIiwicHQiLCJudW1iZXJfb2ZfcG9pbnRzIiwibGFwX3RocmVzaCIsImVpZ2VuX3RocmVzaCIsImV4IiwiZXkiLCJzY29yZSIsIm1vdGlvbl9lc3RpbWF0b3IiLCJuZWVkX2NudCIsIm1heF9jbnQiLCJmcm9tX3N1YiIsInRvX3N1YiIsIm1heF90cnkiLCJpbmRpY2VzIiwic3NpdGVyIiwiaWR4X2kiLCJvayIsInJhbmRvbSIsImNoZWNrX3N1YnNldCIsInRocmVzaCIsIm1hc2siLCJudW1pbmxpZXJzIiwiZXJyb3IiLCJwYXJhbXMiLCJtYXhfaXRlcnMiLCJtb2RlbF9wb2ludHMiLCJuaXRlcnMiLCJyZXN1bHQiLCJzdWJzZXQwIiwic3Vic2V0MSIsImZvdW5kIiwibWMiLCJtciIsIm1fYnVmZiIsIm1zX2J1ZmYiLCJlcnJfYnVmZiIsIk0iLCJjdXJyX21hc2siLCJpbmxpZXJzX21heCIsIm5tb2RlbHMiLCJydW4iLCJjb3B5X3RvIiwiZ2V0X3N1YnNldCIsImZpbmRfaW5saWVycyIsInVwZGF0ZV9pdGVycyIsIl9tYXRoIiwibWluX21lZGlhbiIsIm9wdGljYWxfZmxvd19sayIsInNjaGFycl9kZXJpdiIsInNjaGFycl9kZXJpdmF0aXZlcyIsInByZXZfcHlyIiwiY3Vycl9weXIiLCJwcmV2X3h5IiwiY3Vycl94eSIsIndpbl9zaXplIiwic3RhdHVzIiwibWluX2VpZ2VuX3RocmVzaG9sZCIsIlVpbnQ4QXJyYXkiLCJoYWxmX3dpbiIsIndpbl9hcmVhIiwid2luX2FyZWEyIiwicHJldl9pbWdzIiwibmV4dF9pbWdzIiwiaW1nX3ByZXYiLCJpbWdfbmV4dCIsImx3IiwibGgiLCJpd2luX25vZGUiLCJkZXJpdl9pd2luX25vZGUiLCJkZXJpdl9sZXZfbm9kZSIsImRlcml2X20iLCJpd2luX2J1ZiIsImRlcml2X2l3aW4iLCJkZXJpdl9sZXYiLCJkc3JjIiwiaXB0ciIsImRpcHRyIiwianB0ciIsImxldl9zYyIsInByZXZfeCIsInByZXZfeSIsIm5leHRfeCIsIm5leHRfeSIsInByZXZfZGVsdGFfeCIsInByZXZfZGVsdGFfeSIsImRlbHRhX3giLCJkZWx0YV95IiwiaXByZXZfeCIsImlwcmV2X3kiLCJpbmV4dF94IiwiaW5leHRfeSIsImxldmVsIiwicHRpZCIsImJyZF90bCIsImJyZF9yIiwiYnJkX2IiLCJiMSIsImIyIiwiV19CSVRTMTQiLCJXX0JJVFM0IiwiV19CSVRTMW01IiwiV19CSVRTMW01MSIsIldfQklUUzE0XyIsIldfQklUUzQxIiwiRkxUX1NDQUxFIiwiaXcwMCIsIml3MDEiLCJpdzEwIiwiaXcxMSIsIml2YWwiLCJpeHZhbCIsIml5dmFsIiwiRCIsIm1pbl9laWciLCJGTFRfRVBTSUxPTiIsIm1heF9sZXZlbCIsImkwIiwiaTEiLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJNMTEiLCJNMTIiLCJNMTMiLCJNMjEiLCJNMjIiLCJNMjMiLCJNMzEiLCJNMzIiLCJNMzMiLCJkYXRhX3QiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJGbG9hdDY0QXJyYXkiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJ3YXJwX2FmZmluZSIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsImlwIiwiaW0iLCJhYnNfc2NvcmUiLCJwcmVjb21wdXRlX2RpcmVjdGlvbnMiLCJTYiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=