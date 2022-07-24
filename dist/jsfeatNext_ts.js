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
      var dxdy_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w, h, _constants_constants__WEBPACK_IMPORTED_MODULE_15__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDhEQUFjO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJrQztBQUM2QjtBQUNoRDtBQUNmLGVBQWUsc0RBQU87QUFDdEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLHFFQUFxQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaL1osVUFBVSxFQUFWQSxtREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NhY2hlL2NhY2hlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2RhdGFfdHlwZS9kYXRhX3R5cGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbWdwcm9jL2NvbnZvbC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2ltZ3Byb2MvcmVzYW1wbGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9qc2ZlYXROZXh0LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMva2V5cG9pbnRfdC9rZXlwb2ludF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbGluYWxnL2xpbmFsZy1iYXNlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0bWF0aC9tYXRtYXRoLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0cml4X3QvbWF0cml4X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvZGF0YV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLy4uL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gICAgYWxsb2NhdGU6IChjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgICBnZXRfYnVmZmVyOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiBhbnk7XG4gICAgcHV0X2J1ZmZlcjogKG5vZGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIGNhY2hlIGltcGxlbWVudHMgSUNhY2hlIHtcbiAgICBwcml2YXRlIF9wb29sX2hlYWQ6IGFueTtcbiAgICBwcml2YXRlIF9wb29sX3RhaWw6IGFueTtcbiAgICBwcml2YXRlIF9wb29sX3NpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfdGFpbCA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXBhY2l0eTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0X2J1ZmZlcihzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIFU4QzFfdDogMHgwMTAwIHwgMHgwMSxcbiAgICBVOEMzX3Q6IDB4MDEwMCB8IDB4MDMsXG4gICAgVThDNF90OiAweDAxMDAgfCAweDA0LFxuXG4gICAgRjMyQzFfdDogMHgwNDAwIHwgMHgwMSxcbiAgICBGMzJDMl90OiAweDA0MDAgfCAweDAyLFxuICAgIFMzMkMxX3Q6IDB4MDIwMCB8IDB4MDEsXG4gICAgUzMyQzJfdDogMHgwMjAwIHwgMHgwMlxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVHlwZSB7XG4gICAgX2dldF9kYXRhX3R5cGU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2NoYW5uZWw6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3R5cGUgaW1wbGVtZW50cyBJRGF0YV9UeXBlIHtcbiAgICBwcml2YXRlIF9kYXRhX3R5cGVfc2l6ZTogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGMDApO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGKTtcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1ZjogbnVtYmVyW10sIHNyY19kOiBudW1iZXJbXSwgZHN0X2Q6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsdGVyOiBudW1iZXJbXSwga2VybmVsX3NpemU6IG51bWJlciwgaGFsZl9rZXJuZWw6IG51bWJlcikge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmOiBudW1iZXJbXSwgc3JjX2Q6IG51bWJlcltdLCBkc3RfZDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWx0ZXI6IG51bWJlcltdLCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBoYWxmX2tlcm5lbDogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmM6IHsgY2hhbm5lbDogYW55OyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBkc3Q6IHsgZGF0YTogYW55OyB9LCBjYWNoZTogeyBnZXRfYnVmZmVyOiAoYXJnMDogbnVtYmVyKSA9PiBhbnk7IHB1dF9idWZmZXI6IChhcmcwOiBhbnkpID0+IHZvaWQ7IH0sIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjOiB7IGNoYW5uZWw6IGFueTsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgZHN0OiB7IGRhdGE6IGFueTsgfSwgY2FjaGU6IHsgZ2V0X2J1ZmZlcjogKGFyZzA6IG51bWJlcikgPT4gYW55OyBwdXRfYnVmZmVyOiAoYXJnMDogYW55KSA9PiB2b2lkOyB9LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgc2NhbGUgPSAxLjAgLyAoc2NhbGVfeCAqIHNjYWxlX3kpO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAuMCwgYmV0YSA9IDAuMCwgYmV0YTEgPSAwLjA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5mMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gxIC0gZnN4MSkgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChmc3gyIC0gc3gyKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDNdIHwgMDtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDMgKyAxXSB8IDA7XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApO1xuICAgICAgICAgICAgYmV0YTEgPSAxLjAgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYmV0YSkgPCAxZS0zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTE7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufSIsIi8vaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuaW1wb3J0IHsgSURhdGFfVHlwZSwgZGF0YV90eXBlIH0gZnJvbSAnLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgSUNhY2hlLCBjYWNoZSB9IGZyb20gJy4vY2FjaGUvY2FjaGUnXG5pbXBvcnQgeyBpbWdwcm9jIH0gZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MnXG5pbXBvcnQgeyBfcmVzYW1wbGUsIF9yZXNhbXBsZV91OCB9IGZyb20gJy4vaW1ncHJvYy9yZXNhbXBsZSdcbmltcG9ydCB7IF9jb252b2wsIF9jb252b2xfdTggfSBmcm9tICcuL2ltZ3Byb2MvY29udm9sJ1xuaW1wb3J0IHsgbGluYWxnIH0gZnJvbSAnLi9saW5hbGcvbGluYWxnJ1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy9saW5hbGctYmFzZSdcbmltcG9ydCB7IG1hdGggfSBmcm9tICcuL21hdGgvbWF0aCdcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4vbWF0bWF0aC9tYXRtYXRoJ1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuL21hdHJpeF90L21hdHJpeF90J1xuaW1wb3J0IHsga2V5cG9pbnRfdCB9IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90J1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHByb3RlY3RlZCBjYWNoZTogSUNhY2hlO1xuICAgIHN0YXRpYyBjYWNoZTogdHlwZW9mIGNhY2hlO1xuICAgIHN0YXRpYyBpbWdwcm9jOiB0eXBlb2YgaW1ncHJvYztcbiAgICBzdGF0aWMgbGluYWxnOiB0eXBlb2YgbGluYWxnO1xuICAgIHN0YXRpYyBtYXRoOiB0eXBlb2YgbWF0aDtcbiAgICBzdGF0aWMgbWF0bWF0aDogdHlwZW9mIG1hdG1hdGg7XG4gICAgc3RhdGljIG1hdHJpeF90OiB0eXBlb2YgbWF0cml4X3Q7XG4gICAgc3RhdGljIGtleXBvaW50X3Q6IHR5cGVvZiBrZXlwb2ludF90O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cblxuICAgIC8vIFZFUlNJT05cbiAgICBzdGF0aWMgVkVSU0lPTjogc3RyaW5nID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBDMV90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgIHN0YXRpYyBDMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMl90O1xuICAgIHN0YXRpYyBDM190ID0gSlNGRUFUX0NPTlNUQU5UUy5DM190O1xuICAgIHN0YXRpYyBDNF90ID0gSlNGRUFUX0NPTlNUQU5UUy5DNF90O1xuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIHN0YXRpYyBDT0xPUl9SR0JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfUkdCMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZO1xuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgc3RhdGljIEJPWF9CTFVSX05PU0NBTEUgPSBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEU7XG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBzdGF0aWMgU1ZEX1VfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVDtcbiAgICBzdGF0aWMgU1ZEX1ZfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVDtcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIHN0YXRpYyBVOEMxX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFU4QzNfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzNfdDtcbiAgICBzdGF0aWMgVThDNF90ID0gdGhpcy5VOF90IHwgdGhpcy5DNF90O1xuXG4gICAgc3RhdGljIEYzMkMxX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBGMzJDMl90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzJfdDtcbiAgICBzdGF0aWMgUzMyQzFfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFMzMkMyX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMl90O1xuXG4gICAgZ2V0X2RhdGFfdHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2NoYW5uZWwodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodHlwZSk7XG4gICAgfVxufVxuXG5qc2ZlYXROZXh0LmNhY2hlID0gY2FjaGU7XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5pbWdwcm9jID0gY2xhc3MgaW1ncHJvYyBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH07XG4gICAgZ3JheXNjYWxlKHNyYzogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IG51bWJlcikgPT4gdm9pZDsgZGF0YTogYW55IH0sIGNvZGU6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYzogYW55LCBkc3Q6IGFueSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgICAgICB2YXIgaCA9IHNyYy5yb3dzLCB3ID0gc3JjLmNvbHM7XG4gICAgICAgIGlmIChoID4gbmggJiYgdyA+IG53KSB7XG4gICAgICAgICAgICBkc3QucmVzaXplKG53LCBuaCwgc3JjLmNoYW5uZWwpO1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIGZhc3QgYWx0ZXJuYXRpdmUgKGZpeCBwb2ludCBzY2FsZSwgMHgxMDAgdG8gYXZvaWQgb3ZlcmZsb3cpXG4gICAgICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgZHN0LnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgaCAqIHcgLyAobmggKiBudykgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZV91OChzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlKHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJveF9ibHVyX2dyYXkoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IGNoYW5uZWw6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIHJhZGl1czogbnVtYmVyLCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cbiAgICBnYXVzc2lhbl9ibHVyKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgdHlwZTogYW55OyBjaGFubmVsOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIGtlcm5lbF9zaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGpzZmVhdG1hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZzogYW55LCByaG9fcmVzOiBudW1iZXIsIHRoZXRhX3JlczogbnVtYmVyLCB0aHJlc2hvbGQ6IG51bWJlcikge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWcuZGF0YTtcblxuICAgICAgICB2YXIgd2lkdGggPSBpbWcuY29scztcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5yb3dzO1xuICAgICAgICB2YXIgc3RlcCA9IHdpZHRoO1xuXG4gICAgICAgIHZhciBtaW5fdGhldGEgPSAwLjA7XG4gICAgICAgIHZhciBtYXhfdGhldGEgPSBNYXRoLlBJO1xuXG4gICAgICAgIHZhciBudW1hbmdsZSA9IE1hdGgucm91bmQoKG1heF90aGV0YSAtIG1pbl90aGV0YSkgLyB0aGV0YV9yZXMpO1xuICAgICAgICB2YXIgbnVtcmhvID0gTWF0aC5yb3VuZCgoKHdpZHRoICsgaGVpZ2h0KSAqIDIgKyAxKSAvIHJob19yZXMpO1xuICAgICAgICB2YXIgaXJobyA9IDEuMCAvIHJob19yZXM7XG5cbiAgICAgICAgdmFyIGFjY3VtID0gbmV3IEludDMyQXJyYXkoKG51bWFuZ2xlICsgMikgKiAobnVtcmhvICsgMikpOyAvL3R5cGVkIGFycmF5cyBhcmUgaW5pdGlhbGl6ZWQgdG8gMFxuICAgICAgICB2YXIgdGFiU2luID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG4gICAgICAgIHZhciB0YWJDb3MgPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcblxuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciBhbmcgPSBtaW5fdGhldGE7XG4gICAgICAgIGZvciAoOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgdGFiU2luW25dID0gTWF0aC5zaW4oYW5nKSAqIGlyaG87XG4gICAgICAgICAgICB0YWJDb3Nbbl0gPSBNYXRoLmNvcyhhbmcpICogaXJobztcbiAgICAgICAgICAgIGFuZyArPSB0aGV0YV9yZXNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDEuIGZpbGwgYWNjdW11bGF0b3JcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlW2kgKiBzdGVwICsgal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIsIChuKzEpICogKG51bXJobysyKSArIHIrMSwgdGFiQ29zW25dLCB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yb3VuZChqICogdGFiQ29zW25dICsgaSAqIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IChudW1yaG8gLSAxKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bVsobiArIDEpICogKG51bXJobyArIDIpICsgciArIDFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAyLiBmaW5kIGxvY2FsIG1heGltdW1zXG4gICAgICAgIC8vVE9ETzogQ29uc2lkZXIgbWFraW5nIGEgdmVjdG9yIGNsYXNzIHRoYXQgdXNlcyB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIF9zb3J0X2J1ZiA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG51bXJobzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IChuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW1bYmFzZV0gPiB0aHJlc2hvbGQgJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gMV0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIG51bXJobyAtIDJdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyBudW1yaG8gKyAyXSkge1xuICAgICAgICAgICAgICAgICAgICBfc29ydF9idWYucHVzaChiYXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAzLiBzb3J0IHRoZSBkZXRlY3RlZCBsaW5lcyBieSBhY2N1bXVsYXRvciB2YWx1ZVxuICAgICAgICBfc29ydF9idWYuc29ydChmdW5jdGlvbiAobDEsIGwyKSB7XG4gICAgICAgICAgICByZXR1cm4gPG51bWJlcj48dW5rbm93bj4oYWNjdW1bbDFdID4gYWNjdW1bbDJdIHx8IChhY2N1bVtsMV0gPT0gYWNjdW1bbDJdICYmIGwxIDwgbDIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgdmFyIGxpbmVzTWF4ID0gTWF0aC5taW4obnVtYW5nbGUgKiBudW1yaG8sIF9zb3J0X2J1Zi5sZW5ndGgpO1xuICAgICAgICB2YXIgc2NhbGUgPSAxLjAgLyAobnVtcmhvICsgMik7XG4gICAgICAgIHZhciBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfc29ydF9idWZbaV07XG4gICAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHZhciByID0gaWR4IC0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSAtIDE7XG4gICAgICAgICAgICB2YXIgbHJobyA9IChyIC0gKG51bXJobyAtIDEpICogMC41KSAqIHJob19yZXM7XG4gICAgICAgICAgICB2YXIgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgcHlyZG93bihzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGNoYW5uZWw6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBudW1iZXIsIGFyZzE6IG51bWJlciwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgc3g6IG51bWJlciwgc3k6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiBtYXRyaXhfdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4ICsgMV0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChhICsgdHJvdzFbeF0gKyBiICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChjICsgYiArIGEgKiAyKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNF0gLSBlKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZCArIGEgKyBjICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA1XSAtIGYpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgNV0gKyBjICsgZCAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSArIHRyb3cxW3ggKyAxXSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gcGxlYXNlIG5vdGU6IFxuICAgIC8vIGRzdF8odHlwZSkgc2l6ZSBzaG91bGQgYmUgY29scyA9IHNyYy5jb2xzKzEsIHJvd3MgPSBzcmMucm93cysxXG4gICAgY29tcHV0ZV9pbnRlZ3JhbF9pbWFnZShzcmM6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCBkc3Rfc3VtOiBudW1iZXJbXSwgZHN0X3Nxc3VtOiBudW1iZXJbXSwgZHN0X3RpbHRlZDogYW55W10pIHtcbiAgICAgICAgdmFyIHcwID0gc3JjLmNvbHMgfCAwLCBoMCA9IHNyYy5yb3dzIHwgMCwgc3JjX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIHcxID0gKHcwICsgMSkgfCAwO1xuICAgICAgICB2YXIgcyA9IDAsIHMyID0gMCwgcCA9IDAsIHB1cCA9IDAsIGkgPSAwLCBqID0gMCwgdiA9IDAsIGsgPSAwO1xuXG4gICAgICAgIGlmIChkc3Rfc3VtICYmIGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDAsIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgcyA9IHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcblxuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcCArIDFdID0gZHN0X3Nxc3VtW3B1cCArIDFdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRzdF9zdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkc3RfdGlsdGVkKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3AgKyAxXSA9IHNyY19kW2sgKyAxXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWFnb25hbFxuICAgICAgICAgICAgcCA9ICh3MSArIHcwKSB8IDAsIHB1cCA9IHcwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGgwOyArK2ksIHAgKz0gdzEsIHB1cCArPSB3MSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSB3MCAtIDE7IGogPiAwOyAtLWopIHtcbiAgICAgICAgICAgICAgICBwID0gaiArIGgwICogdzEsIHB1cCA9IHAgLSB3MTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBoMDsgaSA+IDA7IC0taSwgcCAtPSB3MSwgcHVwIC09IHcxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXF1YWxpemVfaGlzdG9ncmFtKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyBjaGFubmVsOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YSwgc2l6ZSA9IHcgKiBoO1xuICAgICAgICB2YXIgaSA9IDAsIHByZXYgPSAwLCBoaXN0MCwgbm9ybTtcblxuICAgICAgICB2YXIgaGlzdDBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigyNTYgPDwgMik7XG4gICAgICAgIGhpc3QwID0gaGlzdDBfbm9kZS5pMzI7XG4gICAgICAgIGZvciAoOyBpIDwgMjU2OyArK2kpIGhpc3QwW2ldID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgKytoaXN0MFtzcmNfZFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gaGlzdDBbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgcHJldiA9IGhpc3QwW2ldICs9IHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBub3JtID0gMjU1IC8gc2l6ZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgZHN0X2RbaV0gPSAoaGlzdDBbc3JjX2RbaV1dICogbm9ybSArIDAuNSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihoaXN0MF9ub2RlKTtcbiAgICB9XG4gICAgY2Fubnkoc3JjOiBhbnksIGRzdDogYW55LCBsb3dfdGhyZXNoOiBudW1iZXIsIGhpZ2hfdGhyZXNoOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmNfZCA9IHNyYy5kYXRhO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIGo6IG51bWJlciA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwOiBudW1iZXJbXSA9IDxudW1iZXJbXT5tYXBfbm9kZS5pMzI7XG4gICAgICAgIHZhciBzdGFjayA9IHN0YWNrX25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeSA9IGR4ZHlfbm9kZS5pMzI7XG4gICAgICAgIHZhciBkeGR5X20gPSBuZXcgbWF0cml4X3QodywgaCwgSlNGRUFUX0NPTlNUQU5UUy5TMzJDMl90LCBkeGR5X25vZGUuZGF0YSk7XG4gICAgICAgIHZhciByb3cwID0gMSwgcm93MSA9ICh3ICsgMiArIDEpIHwgMCwgcm93MiA9ICgyICogKHcgKyAyKSArIDEpIHwgMCwgbWFwX3cgPSAodyArIDIpIHwgMCwgbWFwX2k6IG51bWJlciA9IChtYXBfdyArIDEpIHwgMCwgc3RhY2tfaSA9IDA7XG5cbiAgICAgICAgdGhpcy5zb2JlbF9kZXJpdmF0aXZlcyhzcmMsIGR4ZHlfbSk7XG5cbiAgICAgICAgaWYgKGxvd190aHJlc2ggPiBoaWdoX3RocmVzaCkge1xuICAgICAgICAgICAgaSA9IGxvd190aHJlc2g7XG4gICAgICAgICAgICBsb3dfdGhyZXNoID0gaGlnaF90aHJlc2g7XG4gICAgICAgICAgICBoaWdoX3RocmVzaCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gKDMgKiAodyArIDIpKSB8IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYnVmW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoKGggKyAyKSAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBtYXBbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2osIGdyYWQgKz0gMikge1xuICAgICAgICAgICAgLy9idWZbcm93MStqXSA9IE1hdGguYWJzKGR4ZHlbZ3JhZF0pICsgTWF0aC5hYnMoZHhkeVtncmFkKzFdKTtcbiAgICAgICAgICAgIHggPSBkeGR5W2dyYWRdLCB5ID0gZHhkeVtncmFkICsgMV07XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0geCp4ICsgeSp5O1xuICAgICAgICAgICAgYnVmW3JvdzEgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGg7ICsraSwgZ3JhZCArPSB3Mikge1xuICAgICAgICAgICAgaWYgKGkgPT0gaCkge1xuICAgICAgICAgICAgICAgIGogPSByb3cyICsgdztcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1qID49IHJvdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9ICBNYXRoLmFicyhkeGR5W2dyYWQrKGo8PDEpXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrKGo8PDEpKzFdKTtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZCArIChqIDw8IDEpXSwgeSA9IGR4ZHlbZ3JhZCArIChqIDw8IDEpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIC8vYnVmW3JvdzIral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zltyb3cyICsgal0gPSAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSArICgoeSBeICh5ID4+IDMxKSkgLSAoeSA+PiAzMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9ncmFkID0gKGdyYWQgLSB3MikgfCAwO1xuICAgICAgICAgICAgbWFwW21hcF9pIC0gMV0gPSAwO1xuICAgICAgICAgICAgc3VwcHJlc3MgPSAwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7ICsraiwgX2dyYWQgKz0gMikge1xuICAgICAgICAgICAgICAgIGYgPSBidWZbcm93MSArIGpdO1xuICAgICAgICAgICAgICAgIGlmIChmID4gbG93X3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtfZ3JhZF07XG4gICAgICAgICAgICAgICAgICAgIHkgPSBkeGR5W19ncmFkICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHMgPSB4IF4geTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlbXMgb3QgYmUgZmFzdGVyIHRoYW4gTWF0aC5hYnNcbiAgICAgICAgICAgICAgICAgICAgeCA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgeSA9ICgoeSBeICh5ID4+IDMxKSkgLSAoeSA+PiAzMSkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgLy94ICogdGFuKDIyLjUpIHggKiB0YW4oNjcuNSkgPT0gMiAqIHggKyB4ICogdGFuKDIyLjUpXG4gICAgICAgICAgICAgICAgICAgIHRnMjJ4ID0geCAqIDEzNTczO1xuICAgICAgICAgICAgICAgICAgICB0ZzY3eCA9IHRnMjJ4ICsgKCh4ICsgeCkgPDwgMTUpO1xuICAgICAgICAgICAgICAgICAgICB5IDw8PSAxNTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCB0ZzIyeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBidWZbcm93MSArIGogLSAxXSAmJiBmID49IGJ1Zltyb3cxICsgaiArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA+IHRnNjd4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cwICsgal0gJiYgZiA+PSBidWZbcm93MiArIGpdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gcyA8IDAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cwICsgaiAtIHNdICYmIGYgPiBidWZbcm93MiArIGogKyBzXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gaGlnaF90aHJlc2ggJiYgIXN1cHByZXNzICYmIG1hcFttYXBfaSArIGogLSBtYXBfd10gIT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMDtcbiAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBbbWFwX2kgKyB3XSA9IDA7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGogPSByb3cwO1xuICAgICAgICAgICAgcm93MCA9IHJvdzE7XG4gICAgICAgICAgICByb3cxID0gcm93MjtcbiAgICAgICAgICAgIHJvdzIgPSBqO1xuICAgICAgICB9XG5cbiAgICAgICAgaiA9IG1hcF9pIC0gbWFwX3cgLSAxO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWFwX3c7ICsraSwgKytqKSB7XG4gICAgICAgICAgICBtYXBbal0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBhdGggZm9sbG93aW5nXG4gICAgICAgIHdoaWxlIChzdGFja19pID4gMCkge1xuICAgICAgICAgICAgbWFwX2kgPSBzdGFja1stLXN0YWNrX2ldO1xuICAgICAgICAgICAgbWFwX2kgLT0gbWFwX3cgKyAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSAtPSAyO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgIH1cblxuICAgICAgICBtYXBfaSA9IG1hcF93ICsgMTtcbiAgICAgICAgcm93MCA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBoOyArK2ksIG1hcF9pICs9IG1hcF93KSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICAgICAgZHN0X2Rbcm93MCsrXSA9IChOdW1iZXIobWFwW21hcF9pICsgal0gPT0gMikgKiAweGZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG1hdHJpeF90XG4gICAgd2FycF9wZXJzcGVjdGl2ZShzcmM6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCBkc3Q6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCB0cmFuc2Zvcm06IHsgZGF0YTogYW55IH0sIGZpbGxfdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzIHwgMCwgc3JjX2hlaWdodCA9IHNyYy5yb3dzIHwgMCwgZHN0X3dpZHRoID0gZHN0LmNvbHMgfCAwLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3MgfCAwO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCB4czAgPSAwLjAsIHlzMCA9IDAuMCwgd3MgPSAwLjAsIHNjID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV0sXG4gICAgICAgICAgICBtMjAgPSB0ZFs2XSwgbTIxID0gdGRbN10sIG0yMiA9IHRkWzhdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4czAgPSBtMDEgKiB5ICsgbTAyLFxuICAgICAgICAgICAgICAgIHlzMCA9IG0xMSAqIHkgKyBtMTIsXG4gICAgICAgICAgICAgICAgd3MgPSBtMjEgKiB5ICsgbTIyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzMCArPSBtMDAsIHlzMCArPSBtMTAsIHdzICs9IG0yMCkge1xuICAgICAgICAgICAgICAgIHNjID0gMS4wIC8gd3M7XG4gICAgICAgICAgICAgICAgeHMgPSB4czAgKiBzYywgeXMgPSB5czAgKiBzYztcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDAsIGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmICh4cyA+IDAgJiYgeXMgPiAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBNYXRoLm1heCh4cyAtIGl4cywgMC4wKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IE1hdGgubWF4KHlzIC0gaXlzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSAoc3JjX3dpZHRoICogaXlzICsgaXhzKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgb3IgMngzIG1hdHJpeF90IG9ubHkgZmlyc3QgNiB2YWx1ZXMgcmVmZXJlbmNlZFxuICAgIHdhcnBfYWZmaW5lKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55IH0sIHRyYW5zZm9ybTogeyBkYXRhOiBhbnkgfSwgZmlsbF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMsIHNyY19oZWlnaHQgPSBzcmMucm93cywgZHN0X3dpZHRoID0gZHN0LmNvbHMsIGRzdF9oZWlnaHQgPSBkc3Qucm93cztcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4cyA9IG0wMSAqIHkgKyBtMDI7XG4gICAgICAgICAgICB5cyA9IG0xMSAqIHkgKyBtMTI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMgKz0gbTAwLCB5cyArPSBtMTApIHtcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDA7IGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmIChpeHMgPj0gMCAmJiBpeXMgPj0gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0geHMgLSBpeHM7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB5cyAtIGl5cztcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gc3JjX3dpZHRoICogaXlzICsgaXhzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCYXNpYyBSR0IgU2tpbiBkZXRlY3Rpb24gZmlsdGVyXG4gICAgLy8gZnJvbSBodHRwOi8vcG9wc2Nhbi5ibG9nc3BvdC5mci8yMDEyLzA4L3NraW4tZGV0ZWN0aW9uLWluLWRpZ2l0YWwtaW1hZ2VzLmh0bWxcbiAgICBza2luZGV0ZWN0b3Ioc3JjOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBkYXRhOiBhbnlbXSB9LCBkc3Q6IG51bWJlcltdKSB7XG4gICAgICAgIHZhciByLCBnLCBiLCBqO1xuICAgICAgICB2YXIgaSA9IHNyYy53aWR0aCAqIHNyYy5oZWlnaHQ7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGogPSBpICogNDtcbiAgICAgICAgICAgIHIgPSBzcmMuZGF0YVtqXTtcbiAgICAgICAgICAgIGcgPSBzcmMuZGF0YVtqICsgMV07XG4gICAgICAgICAgICBiID0gc3JjLmRhdGFbaiArIDJdO1xuICAgICAgICAgICAgaWYgKChyID4gOTUpICYmIChnID4gNDApICYmIChiID4gMjApXG4gICAgICAgICAgICAgICAgJiYgKHIgPiBnKSAmJiAociA+IGIpXG4gICAgICAgICAgICAgICAgJiYgKHIgLSBNYXRoLm1pbihnLCBiKSA+IDE1KVxuICAgICAgICAgICAgICAgICYmIChNYXRoLmFicyhyIC0gZykgPiAxNSkpIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAyNTU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmpzZmVhdE5leHQubWF0aCA9IGNsYXNzIG1hdGggZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIHFzb3J0X3N0YWNrOiBJbnQzMkFycmF5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnFzb3J0X3N0YWNrID0gbmV3IEludDMyQXJyYXkoNDggKiAyKTtcbiAgICB9XG5cbiAgICBnZXRfZ2F1c3NpYW5fa2VybmVsKHNpemU6IG51bWJlciwgc2lnbWE6IG51bWJlciwga2VybmVsOiBhbnksIGRhdGFfdHlwZTogYW55KSB7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAuMCwgdCA9IDAuMCwgc2lnbWFfeCA9IDAuMCwgc2NhbGVfMnggPSAwLjA7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG4gICAgICAgIHZhciBrZXJuX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoc2l6ZSA8PCAyKTtcbiAgICAgICAgdmFyIF9rZXJuZWwgPSBrZXJuX25vZGUuZjMyOy8vbmV3IEZsb2F0MzJBcnJheShzaXplKTtcblxuICAgICAgICBpZiAoKHNpemUgJiAxKSA9PSAxICYmIHNpemUgPD0gNyAmJiBzaWdtYSA8PSAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNpemUgPj4gMSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjI1LCBfa2VybmVsWzFdID0gMC41LCBfa2VybmVsWzJdID0gMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4yNSArIDAuNSArIDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDYyNSwgX2tlcm5lbFsxXSA9IDAuMjUsIF9rZXJuZWxbMl0gPSAwLjM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI1LCBfa2VybmVsWzRdID0gMC4wNjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjA2MjUgKyAwLjI1ICsgMC4zNzUgKyAwLjI1ICsgMC4wNjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjAzMTI1LCBfa2VybmVsWzFdID0gMC4xMDkzNzUsIF9rZXJuZWxbMl0gPSAwLjIxODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjgxMjUsIF9rZXJuZWxbNF0gPSAwLjIxODc1LCBfa2VybmVsWzVdID0gMC4xMDkzNzUsIF9rZXJuZWxbNl0gPSAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjAzMTI1ICsgMC4xMDkzNzUgKyAwLjIxODc1ICsgMC4yODEyNSArIDAuMjE4NzUgKyAwLjEwOTM3NSArIDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2lnbWFfeCA9IHNpZ21hID4gMCA/IHNpZ21hIDogKChzaXplIC0gMSkgKiAwLjUgLSAxLjApICogMC4zICsgMC44O1xuICAgICAgICAgICAgc2NhbGVfMnggPSAtMC41IC8gKHNpZ21hX3ggKiBzaWdtYV94KTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICB4ID0gaSAtIChzaXplIC0gMSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgdCA9IE1hdGguZXhwKHNjYWxlXzJ4ICogeCAqIHgpO1xuXG4gICAgICAgICAgICAgICAgX2tlcm5lbFtpXSA9IHQ7XG4gICAgICAgICAgICAgICAgc3VtICs9IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSB7XG4gICAgICAgICAgICAvLyBpbnQgYmFzZWQga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAyNTYuMCAvIHN1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSAoX2tlcm5lbFtpXSAqIHN1bSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2xhc3NpYyBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDEuMCAvIHN1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSBfa2VybmVsW2ldICogc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGtlcm5fbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gbW9kZWwgaXMgM3gzIG1hdHJpeF90XG4gICAgcGVyc3BlY3RpdmVfNHBvaW50X3RyYW5zZm9ybShtb2RlbDogYW55LCBzcmNfeDA6IG51bWJlciwgc3JjX3kwOm51bWJlciwgZHN0X3gwOiBudW1iZXIsIGRzdF95MDogbnVtYmVyLFxuICAgICAgICBzcmNfeDE6IG51bWJlciwgc3JjX3kxOiBudW1iZXIsIGRzdF94MTogbnVtYmVyLCBkc3RfeTE6IG51bWJlcixcbiAgICAgICAgc3JjX3gyOiBudW1iZXIsIHNyY195MjogbnVtYmVyLCBkc3RfeDI6IG51bWJlciwgZHN0X3kyOiBudW1iZXIsXG4gICAgICAgIHNyY194MzogbnVtYmVyLCBzcmNfeTM6IG51bWJlciwgZHN0X3gzOiBudW1iZXIsIGRzdF95MzogbnVtYmVyKSB7XG4gICAgICAgIHZhciB0MSA9IHNyY194MDtcbiAgICAgICAgdmFyIHQyID0gc3JjX3gyO1xuICAgICAgICB2YXIgdDQgPSBzcmNfeTE7XG4gICAgICAgIHZhciB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdmFyIHQ2ID0gc3JjX3kzO1xuICAgICAgICB2YXIgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB2YXIgdDggPSB0MiAqIHQ3O1xuICAgICAgICB2YXIgdDkgPSBzcmNfeTI7XG4gICAgICAgIHZhciB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB2YXIgdDExID0gc3JjX3gxO1xuICAgICAgICB2YXIgdDE0ID0gc3JjX3kwO1xuICAgICAgICB2YXIgdDE1ID0gc3JjX3gzO1xuICAgICAgICB2YXIgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB2YXIgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB2YXIgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHZhciB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdmFyIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB2YXIgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdmFyIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHZhciB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdmFyIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB2YXIgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHZhciB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdmFyIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdmFyIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHZhciB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdmFyIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB2YXIgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHZhciB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdmFyIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSHIwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSHIyID0gdDE7XG4gICAgICAgIHZhciBIcjMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSHI0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSHI1ID0gdDE0O1xuICAgICAgICB2YXIgSHI2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSHI3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgdDEgPSBkc3RfeDA7XG4gICAgICAgIHQyID0gZHN0X3gyO1xuICAgICAgICB0NCA9IGRzdF95MTtcbiAgICAgICAgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHQ2ID0gZHN0X3kzO1xuICAgICAgICB0NyA9IHQxICogdDY7XG4gICAgICAgIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdDkgPSBkc3RfeTI7XG4gICAgICAgIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHQxMSA9IGRzdF94MTtcbiAgICAgICAgdDE0ID0gZHN0X3kwO1xuICAgICAgICB0MTUgPSBkc3RfeDM7XG4gICAgICAgIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhsMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIbDEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMiA9IHQxO1xuICAgICAgICB2YXIgSGwzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNSA9IHQxNDtcbiAgICAgICAgdmFyIEhsNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgY29kZSBjb21wdXRlcyBSID0gSGwgKiBpbnZlcnNlIEhyXG4gICAgICAgIHQyID0gSHI0IC0gSHI3ICogSHI1O1xuICAgICAgICB0NCA9IEhyMCAqIEhyNDtcbiAgICAgICAgdDUgPSBIcjAgKiBIcjU7XG4gICAgICAgIHQ3ID0gSHIzICogSHIxO1xuICAgICAgICB0OCA9IEhyMiAqIEhyMztcbiAgICAgICAgdDEwID0gSHIxICogSHI2O1xuICAgICAgICB2YXIgdDEyID0gSHIyICogSHI2O1xuICAgICAgICB0MTUgPSAxLjAgLyAodDQgLSB0NSAqIEhyNyAtIHQ3ICsgdDggKiBIcjcgKyB0MTAgKiBIcjUgLSB0MTIgKiBIcjQpO1xuICAgICAgICB0MTggPSAtSHIzICsgSHI1ICogSHI2O1xuICAgICAgICB2YXIgdDIzID0gLUhyMyAqIEhyNyArIEhyNCAqIEhyNjtcbiAgICAgICAgdDI4ID0gLUhyMSArIEhyMiAqIEhyNztcbiAgICAgICAgdmFyIHQzMSA9IEhyMCAtIHQxMjtcbiAgICAgICAgdDM1ID0gSHIwICogSHI3IC0gdDEwO1xuICAgICAgICB0NDEgPSAtSHIxICogSHI1ICsgSHIyICogSHI0O1xuICAgICAgICB2YXIgdDQ0ID0gdDUgLSB0ODtcbiAgICAgICAgdmFyIHQ0NyA9IHQ0IC0gdDc7XG4gICAgICAgIHQ0OCA9IHQyICogdDE1O1xuICAgICAgICB2YXIgdDQ5ID0gdDI4ICogdDE1O1xuICAgICAgICB2YXIgdDUwID0gdDQxICogdDE1O1xuICAgICAgICB2YXIgbWF0ID0gbW9kZWwuZGF0YTtcbiAgICAgICAgbWF0WzBdID0gSGwwICogdDQ4ICsgSGwxICogKHQxOCAqIHQxNSkgLSBIbDIgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzFdID0gSGwwICogdDQ5ICsgSGwxICogKHQzMSAqIHQxNSkgLSBIbDIgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzJdID0gLUhsMCAqIHQ1MCAtIEhsMSAqICh0NDQgKiB0MTUpICsgSGwyICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFszXSA9IEhsMyAqIHQ0OCArIEhsNCAqICh0MTggKiB0MTUpIC0gSGw1ICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFs0XSA9IEhsMyAqIHQ0OSArIEhsNCAqICh0MzEgKiB0MTUpIC0gSGw1ICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFs1XSA9IC1IbDMgKiB0NTAgLSBIbDQgKiAodDQ0ICogdDE1KSArIEhsNSAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbNl0gPSBIbDYgKiB0NDggKyBIbDcgKiAodDE4ICogdDE1KSAtIHQyMyAqIHQxNTtcbiAgICAgICAgbWF0WzddID0gSGw2ICogdDQ5ICsgSGw3ICogKHQzMSAqIHQxNSkgLSB0MzUgKiB0MTU7XG4gICAgICAgIG1hdFs4XSA9IC1IbDYgKiB0NTAgLSBIbDcgKiAodDQ0ICogdDE1KSArIHQ0NyAqIHQxNTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiB3YXMgZGVyaXZlZCBmcm9tICpCU0Qgc3lzdGVtIHFzb3J0KCk6XG4gICAgLy8gQ29weXJpZ2h0IChjKSAxOTkyLCAxOTkzXG4gICAgLy8gVGhlIFJlZ2VudHMgb2YgdGhlIFVuaXZlcnNpdHkgb2YgQ2FsaWZvcm5pYS4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgcXNvcnQoYXJyYXk6IGFueSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlciwgY21wOiBhbnkpIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXk6IGFueSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIG1pZGRsZSA9IDAsIGxsID0gMCwgaGggPSAwLCBtZWRpYW4gPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsOyB3aGlsZSAoYXJyYXlbbG93XSA+IGFycmF5W2xsXSk7XG4gICAgICAgICAgICAgICAgZG8gLS1oaDsgd2hpbGUgKGFycmF5W2hoXSA+IGFycmF5W2xvd10pO1xuICAgICAgICAgICAgICAgIGlmIChoaCA8IGxsKSBicmVhaztcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgICAgIGFycmF5W2xsXSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIGlmIChoaCA8PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgbG93ID0gbGw7XG4gICAgICAgICAgICBlbHNlIGlmIChoaCA+PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgaGlnaCA9IChoaCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0bWF0aCA9IG1hdG1hdGg7XG5cbmpzZmVhdE5leHQubGluYWxnID0gY2xhc3MgbGluYWxnIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIG1hdG1hdGg6IG1hdG1hdGg7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChBOiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgVzogbnVtYmVyW10sIFY6IG51bWJlcltdLCB2c3RlcDogbnVtYmVyLCBuOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIG0gPSAwLCBsID0gMCwgaWR4ID0gMCwgX2luID0gMCwgX2luMiA9IDA7XG4gICAgICAgIHZhciBpdGVycyA9IDAsIG1heF9pdGVyID0gbiAqIG4gKiAzMDtcbiAgICAgICAgdmFyIG12ID0gMC4wLCB2YWwgPSAwLjAsIHAgPSAwLjAsIHkgPSAwLjAsIHQgPSAwLjAsIHMgPSAwLjAsIGMgPSAwLjAsIGEwID0gMC4wLCBiMCA9IDAuMDtcblxuICAgICAgICB2YXIgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRDX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZFIgPSBpbmRSX2J1ZmYuaTMyO1xuICAgICAgICB2YXIgaW5kQyA9IGluZENfYnVmZi5pMzI7XG5cbiAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgayA9IGkgKiB2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbayArIGpdID0gMC4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2sgKyBpXSA9IDEuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIFdba10gPSBBWyhhc3RlcCArIDEpICoga107XG4gICAgICAgICAgICBpZiAoayA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gayArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBtXSksIGkgPSBrICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogayArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRSW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsga10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG4gPiAxKSBmb3IgKDsgaXRlcnMgPCBtYXhfaXRlcjsgaXRlcnMrKykge1xuICAgICAgICAgICAgLy8gZmluZCBpbmRleCAoayxsKSBvZiBwaXZvdCBwXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGluZFJbaV1dKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGwgPSBpbmRSW2tdO1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpbmRDW2ldICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpbmRDW2ldLCBsID0gaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA9IEFbYXN0ZXAgKiBrICsgbF07XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMpIGJyZWFrO1xuXG4gICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSAqIDAuNTtcbiAgICAgICAgICAgIHQgPSBNYXRoLmFicyh5KSArIGh5cG90KHAsIHkpO1xuICAgICAgICAgICAgcyA9IGh5cG90KHAsIHQpO1xuICAgICAgICAgICAgYyA9IHQgLyBzO1xuICAgICAgICAgICAgcyA9IHAgLyBzOyB0ID0gKHAgLyB0KSAqIHA7XG4gICAgICAgICAgICBpZiAoeSA8IDApXG4gICAgICAgICAgICAgICAgcyA9IC1zLCB0ID0gLXQ7XG4gICAgICAgICAgICBBW2FzdGVwICogayArIGxdID0gMDtcblxuICAgICAgICAgICAgV1trXSAtPSB0O1xuICAgICAgICAgICAgV1tsXSArPSB0O1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgcm93cyBhbmQgY29sdW1ucyBrIGFuZCBsXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogaSArIGspO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gKGsgKyAxKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSBsICsgMTtcbiAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBsICsgaSk7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcm90YXRlIGVpZ2VudmVjdG9yc1xuICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICBfaW4gPSB2c3RlcCAqIGs7XG4gICAgICAgICAgICAgICAgX2luMiA9IHZzdGVwICogbDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGEwID0gVltfaW5dO1xuICAgICAgICAgICAgICAgICAgICBiMCA9IFZbX2luMl07XG4gICAgICAgICAgICAgICAgICAgIFZbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICAgICAgVltfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZHggPSBqID09IDAgPyBrIDogbDtcbiAgICAgICAgICAgICAgICBpZiAoaWR4IDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gaWR4ICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgbV0pLCBpID0gaWR4ICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kUltpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGlkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IG4gLSAxOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1ttXSA8IFdbaV0pXG4gICAgICAgICAgICAgICAgICAgIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgIT0gbSkge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgbSwgaywgbXYpO1xuICAgICAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAgKiBtICsgaSwgdnN0ZXAgKiBrICsgaSwgbXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kUl9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZENfYnVmZik7XG4gICAgfVxuXG4gICAgSmFjb2JpU1ZESW1wbChBdDogbnVtYmVyW10sIGFzdGVwOiBudW1iZXIsIF9XOiBhbnlbXSwgVnQ6IG51bWJlcltdLCB2c3RlcDogbnVtYmVyLCBtOiBudW1iZXIsIG46IG51bWJlciwgbjE6IG51bWJlcikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQTogeyBjb2xzOiBhbnk7IGRhdGE6IGFueSB9LCBCOiB7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBwID0gMSwgYXN0ZXAgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB0LCBhbHBoYSwgZCwgcztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXN0ZXA7IGkrKykge1xuICAgICAgICAgICAgayA9IGk7XG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbaiAqIGFzdGVwICsgaV0pID4gTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGQUlMRURcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgIT0gaSkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAoYWQsIGkgKiBhc3RlcCArIGosIGsgKiBhc3RlcCArIGosIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3YXAoYmQsIGksIGssIHQpO1xuICAgICAgICAgICAgICAgIHAgPSAtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IC0xLjAgLyBhZFtpICogYXN0ZXAgKyBpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhZFtqICogYXN0ZXAgKyBpXSAqIGQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWRbaiAqIGFzdGVwICsga10gKz0gYWxwaGEgKiBhZFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBiZFtqXSArPSBhbHBoYSAqIGJkW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZFtpICogYXN0ZXAgKyBpXSA9IC1kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gYXN0ZXAgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgcyA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcyAtPSBhZFtpICogYXN0ZXAgKyBrXSAqIGJkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSBzICogYWRbaSAqIGFzdGVwICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTsgLy8gT0tcbiAgICB9XG5cbiAgICBjaG9sZXNreV9zb2x2ZShBOiB7IGNvbHM6IGFueTsgZGF0YTogYW55IH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGNvbCA9IDAsIHJvdyA9IDAsIGNvbDIgPSAwLCBjcyA9IDAsIHJzID0gMCwgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgc2l6ZSA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHZhbCwgaW52X2RpYWc7XG5cbiAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgaW52X2RpYWcgPSAxLjA7XG4gICAgICAgICAgICBjcyA9IChjb2wgKiBzaXplKTtcbiAgICAgICAgICAgIHJzID0gY3M7XG4gICAgICAgICAgICBmb3IgKHJvdyA9IGNvbDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGZvciB0aGUgcGFydHMgb2YgY2hvbGVza3kgYWxyZWFkeSBjb21wdXRlZFxuICAgICAgICAgICAgICAgIHZhbCA9IGFkWyhycyArIGNvbCldO1xuICAgICAgICAgICAgICAgIGZvciAoY29sMiA9IDA7IGNvbDIgPCBjb2w7IGNvbDIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNvbDIgKiBzaXplICsgY29sKV0gKiBhZFsocnMgKyBjb2wyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGRpYWdvbmFsIGVsZW1lbnQgc28gZG9uJ3QgZGl2aWRlXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludl9kaWFnID0gMS4wIC8gdmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhY2hlIHRoZSB2YWx1ZSB3aXRob3V0IGRpdmlzaW9uIGluIHRoZSB1cHBlciBoYWxmXG4gICAgICAgICAgICAgICAgICAgIGFkWyhjcyArIHJvdyldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXZpZGUgbXkgdGhlIGRpYWdvbmFsIGVsZW1lbnQgZm9yIGFsbCBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWwgKiBpbnZfZGlhZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnMgPSAocnMgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcnN0IGJhY2tzdWIgdGhyb3VnaCBMXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGopXSAqIGJkW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBkaWFnb25hbFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGJkW2ldIC89IGFkWyhjcyArIGkpXTtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIEwgVHJhbnNwb3NlXG4gICAgICAgIGkgPSAoc2l6ZSAtIDEpO1xuICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgaiA9IChpICsgMSk7XG4gICAgICAgICAgICBjcyA9IChqICogc2l6ZSk7XG4gICAgICAgICAgICBmb3IgKDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBpKV0gKiBiZFtqXTtcbiAgICAgICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBzdmRfZGVjb21wb3NlKEE6IGFueSwgVzogbWF0cml4X3QsIFU6IG1hdHJpeF90LCBWOiBtYXRyaXhfdCwgb3B0aW9uczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfTtcbiAgICAgICAgdmFyIGF0ID0gMCwgaSA9IDAsIGogPSAwLCBfbSA9IEEucm93cywgX24gPSBBLmNvbHMsIG0gPSBfbSwgbiA9IF9uO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7IC8vIHdlIG9ubHkgd29yayB3aXRoIHNpbmdsZSBjaGFubmVsIFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobSAqIG0pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChtLCBtLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCBhX210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCB2X210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgYV9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuXG4gICAgfVxuXG4gICAgc3ZkX3NvbHZlKEE6IHsgcm93czogYW55OyBjb2xzOiBhbnk7IHR5cGU6IG51bWJlciB9LCBYOiB7IGRhdGE6IG51bWJlcltdIH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgeHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIHZhciB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgYmQgPSBCLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgeHN1bSA9IDAuMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdkW2pdID4gdG9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMCwgcHUgPSAwOyBrIDwgbnJvd3M7IGsrKywgcHUgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB1ZFtwdSArIGpdICogYmRba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHN1bSArPSBzdW0gKiB2ZFtwdiArIGpdIC8gd2Rbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWC5kYXRhW2ldID0geHN1bTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgc3ZkX2ludmVydChBaTogeyBkYXRhOiBhbnkgfSwgQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyIH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQTogeyBjb2xzOiBhbnk7IHR5cGU6IG51bWJlcjsgZGF0YTogYW55W10gfSwgdmVjdHM6IHsgZGF0YTogbnVtYmVyW10gfSwgdmFsczogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBhbnkgfSB9KSB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpSW1wbChhX210LmRhdGEsIG4sIHdfbXQuZGF0YSwgdmVjdHMgPyB2ZWN0cy5kYXRhIDogbnVsbCwgbiwgbik7XG5cbiAgICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHMuZGF0YVtuXSA9IHdfbXQuZGF0YVtuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XG4gICAgcHVibGljIGFuZ2xlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjb3JlOiBudW1iZXIsIGxldmVsOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInVuZGVmaW5lZFwiKSB7IHggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJ1bmRlZmluZWRcIikgeyB5ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHNjb3JlID09PSBcInVuZGVmaW5lZFwiKSB7IHNjb3JlID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IGxldmVsID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGFuZ2xlID09PSBcInVuZGVmaW5lZFwiKSB7IGFuZ2xlID0gLTEuMDsgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBzd2FwKEE6IHsgW3g6IHN0cmluZ106IGFueTsgfSwgaTA6IHN0cmluZyB8IG51bWJlciwgaTE6IHN0cmluZyB8IG51bWJlciwgdDogYW55KSB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICBhID0gTWF0aC5hYnMoYSk7XG4gICAgYiA9IE1hdGguYWJzKGIpO1xuICAgIGlmIChhID4gYikge1xuICAgICAgICBiIC89IGE7XG4gICAgICAgIHJldHVybiBhICogTWF0aC5zcXJ0KDEuMCArIGIgKiBiKTtcbiAgICB9XG4gICAgaWYgKGIgPiAwKSB7XG4gICAgICAgIGEgLz0gYjtcbiAgICAgICAgcmV0dXJuIGIgKiBNYXRoLnNxcnQoMS4wICsgYSAqIGEpO1xuICAgIH1cbiAgICByZXR1cm4gMC4wO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNOiB7IGRhdGE6IGFueTsgcm93czogYW55OyBjb2xzOiBhbnk7IH0sIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdDogeyBkYXRhOiBhbnk7IH0sIEE6IHsgcm93czogYW55OyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE06IHsgZGF0YTogYW55OyB9LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tOiB7IGRhdGE6IGFueTsgfSwgdG86IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBkYXRhOiBhbnk7IH0sIEI6IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTTogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMTogbnVtYmVyLCBNMTI6IG51bWJlciwgTTEzOiBudW1iZXIsXG4gICAgICAgIE0yMTogbnVtYmVyLCBNMjI6IG51bWJlciwgTTIzOiBudW1iZXIsXG4gICAgICAgIE0zMTogbnVtYmVyLCBNMzI6IG51bWJlciwgTTMzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgZGF0YV90IH0gZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4X1Qge1xuICAgIGFsbG9jYXRlOiAoKSA9PiB2b2lkO1xuICAgIGNvcHlfdG86IChvdGhlcjogYW55KSA9PiB2b2lkO1xuICAgIHJlc2l6ZTogKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSA9PiB2b2lkO1xufVxuZXhwb3J0IGNsYXNzIG1hdHJpeF90IGltcGxlbWVudHMgSU1hdHJpeF9UIHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNoYW5uZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sczogbnVtYmVyO1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgY29uc3RydWN0b3IoYzogbnVtYmVyLCByOiBudW1iZXIsIF9kYXRhX3R5cGU6IG51bWJlciwgX2RhdGFfYnVmZmVyOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXI6IGFueSkge1xuICAgICAgICB2YXIgb2QgPSBvdGhlci5kYXRhLCB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBuID0gKHRoaXMuY29scyAqIHRoaXMucm93cyAqIHRoaXMuY2hhbm5lbCkgfCAwO1xuICAgICAgICBmb3IgKDsgaSA8IG4gLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgICAgICBvZFtpICsgMV0gPSB0ZFtpICsgMV07XG4gICAgICAgICAgICBvZFtpICsgMl0gPSB0ZFtpICsgMl07XG4gICAgICAgICAgICBvZFtpICsgM10gPSB0ZFtpICsgM107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzaXplKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHsgY2ggPSB0aGlzLmNoYW5uZWw7IH1cbiAgICAgICAgLy8gcmVsb2NhdGUgYnVmZmVyIG9ubHkgaWYgbmV3IHNpemUgZG9lc250IGZpdFxuICAgICAgICB2YXIgbmV3X3NpemUgPSAoYyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogY2gpICogcjtcbiAgICAgICAgaWYgKG5ld19zaXplID4gdGhpcy5idWZmZXIuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSURhdGFfVCwgZGF0YV90IH0gZnJvbSAnLi9kYXRhX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvb2xfTm9kZV9UIHtcbiAgICByZXNpemU6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9wb29sX25vZGVfdCBpbXBsZW1lbnRzIElQb29sX05vZGVfVCB7XG4gICAgcHVibGljIG5leHQ6IGFueTtcbiAgICBwdWJsaWMgZGF0YT86IElEYXRhX1Q7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcblxuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbiAgICByZXNpemUoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVCB7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgdTg6IFVpbnQ4QXJyYXk7XG4gICAgaTMyOiBJbnQzMkFycmF5O1xuICAgIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIGY2NDogRmxvYXQ2NEFycmF5O1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90IGltcGxlbWVudHMgSURhdGFfVCAge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIsIGJ1ZmZlcj86IGFueSkge1xuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0J1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsIlU4QzFfdCIsIlU4QzNfdCIsIlU4QzRfdCIsIkYzMkMxX3QiLCJGMzJDMl90IiwiUzMyQzFfdCIsIlMzMkMyX3QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIl9jb252b2xfdTgiLCJidWYiLCJzcmNfZCIsImRzdF9kIiwidyIsImgiLCJmaWx0ZXIiLCJrZXJuZWxfc2l6ZSIsImhhbGZfa2VybmVsIiwiaiIsImsiLCJzcCIsImRwIiwic3VtIiwic3VtMSIsInN1bTIiLCJzdW0zIiwiZjAiLCJmayIsIncyIiwidzMiLCJ3NCIsIk1hdGgiLCJtaW4iLCJfY29udm9sIiwiX3Jlc2FtcGxlX3U4Iiwic3JjIiwiZHN0IiwibnciLCJuaCIsInhvZnNfY291bnQiLCJjaCIsImNoYW5uZWwiLCJjb2xzIiwicm93cyIsImRhdGEiLCJzY2FsZV94Iiwic2NhbGVfeSIsImludl9zY2FsZV8yNTYiLCJkeCIsImR5Iiwic3giLCJzeSIsInN4MSIsInN4MiIsImZzeDEiLCJmc3gyIiwiYSIsImIiLCJkeG4iLCJhbHBoYSIsImJldGEiLCJiZXRhMSIsImJ1Zl9ub2RlIiwiZ2V0X2J1ZmZlciIsInN1bV9ub2RlIiwieG9mc19ub2RlIiwiaTMyIiwieG9mcyIsIm1heCIsInB1dF9idWZmZXIiLCJfcmVzYW1wbGUiLCJzY2FsZSIsImYzMiIsImFicyIsInN3YXAiLCJoeXBvdCIsIm1hdG1hdGgiLCJtYXRyaXhfdCIsImtleXBvaW50X3QiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJpbWdwcm9jIiwiY29kZSIsIngiLCJ5IiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInRtcF9idWZmIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJkYXRhX3U4IiwiaG9sZCIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1hdGgiLCJpc191OCIsImJ1Zl9zeiIsImZpbHRfbm9kZSIsImdldF9nYXVzc2lhbl9rZXJuZWwiLCJpbWciLCJyaG9fcmVzIiwidGhldGFfcmVzIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsIkFycmF5IiwiYmFzZSIsInB1c2giLCJzb3J0IiwibDEiLCJsMiIsImxpbmVzTWF4IiwibGVuZ3RoIiwibGluZXMiLCJpZHgiLCJmbG9vciIsImxyaG8iLCJsYW5nbGUiLCJfdzIiLCJfaDIiLCJzcHRyIiwic2xpbmUiLCJkcHRyIiwiZGxpbmUiLCJkc3RlcCIsIngxIiwiYyIsImQiLCJlIiwiZiIsInNyb3cwIiwic3JvdzEiLCJzcm93MiIsImRyb3ciLCJ0cm93MCIsInRyb3cxIiwiZ3hneSIsImJ1ZjBfbm9kZSIsImJ1ZjFfbm9kZSIsImRzdF9zdW0iLCJkc3Rfc3FzdW0iLCJkc3RfdGlsdGVkIiwidzAiLCJoMCIsIncxIiwicyIsInMyIiwicCIsInB1cCIsInYiLCJwcmV2IiwiaGlzdDAiLCJub3JtIiwiaGlzdDBfbm9kZSIsImxvd190aHJlc2giLCJoaWdoX3RocmVzaCIsImdyYWQiLCJfZ3JhZCIsInN1cHByZXNzIiwidGcyMngiLCJ0ZzY3eCIsImR4ZHlfbm9kZSIsIm1hcF9ub2RlIiwic3RhY2tfbm9kZSIsIm1hcCIsInN0YWNrIiwiZHhkeSIsImR4ZHlfbSIsInJvdzAiLCJyb3cxIiwicm93MiIsIm1hcF93IiwibWFwX2kiLCJzdGFja19pIiwic29iZWxfZGVyaXZhdGl2ZXMiLCJOdW1iZXIiLCJ0cmFuc2Zvcm0iLCJmaWxsX3ZhbHVlIiwic3JjX3dpZHRoIiwic3JjX2hlaWdodCIsImRzdF93aWR0aCIsImRzdF9oZWlnaHQiLCJvZmYiLCJpeHMiLCJpeXMiLCJ4cyIsInlzIiwieHMwIiwieXMwIiwid3MiLCJzYyIsInAwIiwicDEiLCJ0ZCIsIm0wMCIsIm0wMSIsIm0wMiIsIm0xMCIsIm0xMSIsIm0xMiIsIm0yMCIsIm0yMSIsIm0yMiIsImciLCJxc29ydF9zdGFjayIsImtlcm5lbCIsInQiLCJzaWdtYV94Iiwic2NhbGVfMngiLCJrZXJuX25vZGUiLCJfa2VybmVsIiwiZXhwIiwibW9kZWwiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MSIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwibGVmdCIsInJpZ2h0IiwibSIsInB0ciIsInB0cjIiLCJsZWZ0MCIsImxlZnQxIiwicmlnaHQwIiwicmlnaHQxIiwicGl2b3QiLCJzd2FwX2NudCIsIm1pZGRsZSIsImxsIiwiaGgiLCJtZWRpYW4iLCJsaW5hbGciLCJBIiwiYXN0ZXAiLCJXIiwiViIsInZzdGVwIiwiZXBzIiwibCIsIl9pbiIsIl9pbjIiLCJpdGVycyIsIm1heF9pdGVyIiwibXYiLCJ2YWwiLCJhMCIsImIwIiwiaW5kUl9idWZmIiwiaW5kQ19idWZmIiwiaW5kUiIsImluZEMiLCJBdCIsIl9XIiwiVnQiLCJuMSIsIm1pbnZhbCIsIml0ZXIiLCJBaSIsIkFqIiwiVmkiLCJWaiIsImNoYW5nZWQiLCJ0MCIsInNkIiwiZ2FtbWEiLCJkZWx0YSIsInNlZWQiLCJ2YWwwIiwiYXN1bSIsIldfYnVmZiIsImY2NCIsInNxcnQiLCJCIiwiYWQiLCJiZCIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwiYV9idWZmIiwid19idWZmIiwidl9idWZmIiwiYV9tdCIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwiSmFjb2JpU1ZESW1wbCIsIlgiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwic2NvcmUiLCJsZXZlbCIsImFuZ2xlIiwiaTAiLCJpMSIsIk0iLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImZyb20iLCJ0byIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsImRhdGFfdCIsIl9kYXRhX3R5cGUiLCJfZGF0YV9idWZmZXIiLCJidWZmZXIiLCJ1OCIsIm90aGVyIiwib2QiLCJuZXdfc2l6ZSIsIkFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsIkZsb2F0NjRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=