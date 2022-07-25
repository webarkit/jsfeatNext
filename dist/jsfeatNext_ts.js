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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./constants/constants */ "./src_ts/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../package.json */ "./package.json");








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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_18__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);


jsfeatNext.cache = _cache_cache__WEBPACK_IMPORTED_MODULE_8__.cache;

jsfeatNext.pyramid_t = /*#__PURE__*/function (_jsfeatNext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(pyramid_t, _jsfeatNext);

  var _super = _createSuper(pyramid_t);

  function pyramid_t(levels) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, pyramid_t);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "levels", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "data", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "pyrdown", void 0);

    _this.levels = levels | 0;
    _this.data = new Array(levels);

    var _imgproc = new jsfeatNext.imgproc();

    _this.pyrdown = _imgproc.pyrdown;
    return _this;
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

jsfeatNext.imgproc = /*#__PURE__*/function (_jsfeatNext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(imgproc, _jsfeatNext2);

  var _super2 = _createSuper(imgproc);

  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, imgproc);

    return _super2.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      if (typeof code === "undefined") {
        code = _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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

        if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
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
      var scale = options & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
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
          is_u8 = data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.S32_t) {
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
      var dxdy_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w, h, _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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

jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(math, _jsfeatNext3);

  var _super3 = _createSuper(math);

  function math() {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, math);

    _this2 = _super3.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "qsort_stack", void 0);

    _this2.qsort_stack = new Int32Array(48 * 2);
    return _this2;
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

      if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.U8_t) {
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

jsfeatNext.linalg = /*#__PURE__*/function (_jsfeatNext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(linalg, _jsfeatNext4);

  var _super4 = _createSuper(linalg);

  function linalg() {
    var _this3;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, linalg);

    _this3 = _super4.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), "matmath", void 0);

    _this3.matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();
    return _this3;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.EPSILON;
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
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.FLT_MIN;
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.EPSILON) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C1_t;

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
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C1_t;
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
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C1_t;
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
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_17__.JSFEAT_CONSTANTS.C1_t;
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

jsfeatNext.yape06 = /*#__PURE__*/function (_jsfeatNext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(yape06, _jsfeatNext5);

  var _super5 = _createSuper(yape06);

  function yape06() {
    var _this4;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, yape06);

    _this4 = _super5.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "laplacian_threshold", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "min_eigen_value_threshold", void 0);

    _this4.laplacian_threshold = 30;
    _this4.min_eigen_value_threshold = 25;
    return _this4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNadGUsVUFBVSxFQUFWQSxtREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NhY2hlL2NhY2hlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2RhdGFfdHlwZS9kYXRhX3R5cGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9pbWdwcm9jL2NvbnZvbC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2ltZ3Byb2MvcmVzYW1wbGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9qc2ZlYXROZXh0LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMva2V5cG9pbnRfdC9rZXlwb2ludF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbGluYWxnL2xpbmFsZy1iYXNlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0bWF0aC9tYXRtYXRoLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbWF0cml4X3QvbWF0cml4X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvZGF0YV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMveWFwZS95YXBlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMveWFwZS95YXBlX3V0aWxzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMveWFwZTA2L3lhcGUwNl91dGlscy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi8uLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdCdcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGUge1xuICAgIGFsbG9jYXRlOiAoY2FwYWNpdHk6IGFueSwgZGF0YV9zaXplOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgZ2V0X2J1ZmZlcjogKHNpemVfaW5fYnl0ZXM6IG51bWJlcikgPT4gYW55O1xuICAgIHB1dF9idWZmZXI6IChub2RlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBjYWNoZSBpbXBsZW1lbnRzIElDYWNoZSB7XG4gICAgcHJpdmF0ZSBfcG9vbF9oZWFkOiBhbnk7XG4gICAgcHJpdmF0ZSBfcG9vbF90YWlsOiBhbnk7XG4gICAgcHJpdmF0ZSBfcG9vbF9zaXplOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUgPSAwO1xuICAgIH1cbiAgICBhbGxvY2F0ZShjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFzc3VtZSB3ZSBoYXZlIGVub3VnaCBmcmVlIG5vZGVzXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX2hlYWQubmV4dDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplLS07XG5cbiAgICAgICAgaWYgKHNpemVfaW5fYnl0ZXMgPiBub2RlLnNpemUpIHtcbiAgICAgICAgICAgIG5vZGUucmVzaXplKHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHB1dF9idWZmZXIobm9kZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBVOEMxX3Q6IDB4MDEwMCB8IDB4MDEsXG4gICAgVThDM190OiAweDAxMDAgfCAweDAzLFxuICAgIFU4QzRfdDogMHgwMTAwIHwgMHgwNCxcblxuICAgIEYzMkMxX3Q6IDB4MDQwMCB8IDB4MDEsXG4gICAgRjMyQzJfdDogMHgwNDAwIHwgMHgwMixcbiAgICBTMzJDMV90OiAweDAyMDAgfCAweDAxLFxuICAgIFMzMkMyX3Q6IDB4MDIwMCB8IDB4MDJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhX1R5cGUge1xuICAgIF9nZXRfZGF0YV90eXBlOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9jaGFubmVsOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90eXBlIGltcGxlbWVudHMgSURhdGFfVHlwZSB7XG4gICAgcHJpdmF0ZSBfZGF0YV90eXBlX3NpemU6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gX2NvbnZvbF91OChidWY6IG51bWJlcltdLCBzcmNfZDogbnVtYmVyW10sIGRzdF9kOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbHRlcjogbnVtYmVyW10sIGtlcm5lbF9zaXplOiBudW1iZXIsIGhhbGZfa2VybmVsOiBudW1iZXIpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAsIHN1bTEgPSAwLCBzdW0yID0gMCwgc3VtMyA9IDAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udm9sKGJ1ZjogbnVtYmVyW10sIHNyY19kOiBudW1iZXJbXSwgZHN0X2Q6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsdGVyOiBudW1iZXJbXSwga2VybmVsX3NpemU6IG51bWJlciwgaGFsZl9rZXJuZWw6IG51bWJlcikge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMC4wLCBzdW0xID0gMC4wLCBzdW0yID0gMC4wLCBzdW0zID0gMC4wLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwLjA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OCAoc3JjOiB7IGNoYW5uZWw6IGFueTsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgZHN0OiB7IGRhdGE6IGFueTsgfSwgY2FjaGU6IHsgZ2V0X2J1ZmZlcjogKGFyZzA6IG51bWJlcikgPT4gYW55OyBwdXRfYnVmZmVyOiAoYXJnMDogYW55KSA9PiB2b2lkOyB9LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgaW52X3NjYWxlXzI1NiA9IChzY2FsZV94ICogc2NhbGVfeSAqIDB4MTAwMDApIHwgMDtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLCBiZXRhID0gMCwgYmV0YTEgPSAwO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5pMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuaTMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSBmc3gxKSAqIDB4MTAwKSB8IDA7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gMjU2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChmc3gyIC0gc3gyKSAqIDI1NikgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDNdO1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogMyArIDFdO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IChNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCkgKiAyNTYpIHwgMDtcbiAgICAgICAgICAgIGJldGExID0gMjU2IC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKGJldGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIDI1NikgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTEpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF0gKiAyNTY7XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGUgKHNyYzogeyBjaGFubmVsOiBhbnk7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIGRzdDogeyBkYXRhOiBhbnk7IH0sIGNhY2hlOiB7IGdldF9idWZmZXI6IChhcmcwOiBudW1iZXIpID0+IGFueTsgcHV0X2J1ZmZlcjogKGFyZzA6IGFueSkgPT4gdm9pZDsgfSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIHNjYWxlID0gMS4wIC8gKHNjYWxlX3ggKiBzY2FsZV95KTtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLjAsIGJldGEgPSAwLjAsIGJldGExID0gMC4wO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5mMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuZjMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MSAtIGZzeDEpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZnN4MiAtIHN4MikgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzXSB8IDA7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzICsgMV0gfCAwO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKTtcbiAgICAgICAgICAgIGJldGExID0gMS4wIC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGJldGEpIDwgMWUtMykge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdO1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn0iLCIvL2ltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdCdcbmltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZSdcbmltcG9ydCB7IElDYWNoZSwgY2FjaGUgfSBmcm9tICcuL2NhY2hlL2NhY2hlJ1xuaW1wb3J0IHsgaW1ncHJvYyB9IGZyb20gJy4vaW1ncHJvYy9pbWdwcm9jJ1xuaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL2ltZ3Byb2MvcmVzYW1wbGUnXG5pbXBvcnQgeyBfY29udm9sLCBfY29udm9sX3U4IH0gZnJvbSAnLi9pbWdwcm9jL2NvbnZvbCdcbmltcG9ydCB7IGxpbmFsZyB9IGZyb20gJy4vbGluYWxnL2xpbmFsZydcbmltcG9ydCB7IHN3YXAsIGh5cG90IH0gZnJvbSAnLi9saW5hbGcvbGluYWxnLWJhc2UnXG5pbXBvcnQgeyBtYXRoIH0gZnJvbSAnLi9tYXRoL21hdGgnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aCdcbmltcG9ydCB7IG1hdHJpeF90IH0gZnJvbSAnLi9tYXRyaXhfdC9tYXRyaXhfdCdcbmltcG9ydCB7IHB5cmFtaWRfdCB9IGZyb20gJy4vcHlyYW1pZF90L3B5cmFtaWRfdCdcbmltcG9ydCB7IGtleXBvaW50X3QgfSBmcm9tICcuL2tleXBvaW50X3Qva2V5cG9pbnRfdCdcbmltcG9ydCB7IHlhcGUgfSBmcm9tICcuL3lhcGUveWFwZSdcbmltcG9ydCB7IGNvbXB1dGVfbGFwbGFjaWFuLCBoZXNzaWFuX21pbl9laWdlbl92YWx1ZSB9IGZyb20gJy4veWFwZTA2L3lhcGUwNl91dGlscydcbmltcG9ydCB7IHlhcGUwNiB9IGZyb20gJy4veWFwZTA2L3lhcGUwNidcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBkdDogSURhdGFfVHlwZTtcbiAgICBwcm90ZWN0ZWQgY2FjaGU6IElDYWNoZTtcbiAgICBzdGF0aWMgY2FjaGU6IHR5cGVvZiBjYWNoZTtcbiAgICBzdGF0aWMgaW1ncHJvYzogdHlwZW9mIGltZ3Byb2M7XG4gICAgc3RhdGljIGxpbmFsZzogdHlwZW9mIGxpbmFsZztcbiAgICBzdGF0aWMgbWF0aDogdHlwZW9mIG1hdGg7XG4gICAgc3RhdGljIG1hdG1hdGg6IHR5cGVvZiBtYXRtYXRoO1xuICAgIHN0YXRpYyBtYXRyaXhfdDogdHlwZW9mIG1hdHJpeF90O1xuICAgIHN0YXRpYyBweXJhbWlkX3Q6IHR5cGVvZiBweXJhbWlkX3Q7XG4gICAgc3RhdGljIGtleXBvaW50X3Q6IHR5cGVvZiBrZXlwb2ludF90O1xuICAgIHN0YXRpYyB5YXBlOiB0eXBlb2YgeWFwZTtcbiAgICBzdGF0aWMgeWFwZTA2OiB0eXBlb2YgeWFwZTA2O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OOiBzdHJpbmcgPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVk7XG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBzdGF0aWMgQk9YX0JMVVJfTk9TQ0FMRSA9IEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRTtcbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIHN0YXRpYyBTVkRfVV9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UO1xuICAgIHN0YXRpYyBTVkRfVl9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UO1xuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgc3RhdGljIFU4QzFfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgVThDM190ID0gdGhpcy5VOF90IHwgdGhpcy5DM190O1xuICAgIHN0YXRpYyBVOEM0X3QgPSB0aGlzLlU4X3QgfCB0aGlzLkM0X3Q7XG5cbiAgICBzdGF0aWMgRjMyQzFfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIEYzMkMyX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMl90O1xuICAgIHN0YXRpYyBTMzJDMV90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgUzMyQzJfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMyX3Q7XG5cbiAgICBnZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQuY2FjaGUgPSBjYWNoZTtcblxuanNmZWF0TmV4dC5weXJhbWlkX3QgPSBjbGFzcyBweXJhbWlkX3QgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbGV2ZWxzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwcml2YXRlIHB5cmRvd246IGFueTtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHM6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscyB8IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheShsZXZlbHMpO1xuICAgICAgICB2YXIgX2ltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgICAgIHRoaXMucHlyZG93biA9IF9pbWdwcm9jLnB5cmRvd247XG4gICAgfVxuICAgIGFsbG9jYXRlKHN0YXJ0X3c6IG51bWJlciwgc3RhcnRfaDogbnVtYmVyLCBkYXRhX3R5cGU6IG51bWJlcikge1xuICAgICAgICB2YXIgaSA9IHRoaXMubGV2ZWxzO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBtYXRyaXhfdChzdGFydF93ID4+IGksIHN0YXJ0X2ggPj4gaSwgZGF0YV90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZChpbnB1dDogbWF0cml4X3QsIHNraXBfZmlyc3RfbGV2ZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiOiBhbnkgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGlmICghc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICAgICAgdmFyIGogPSBpbnB1dC5jb2xzICogaW5wdXQucm93cztcbiAgICAgICAgICAgIHdoaWxlICgtLWogPj0gMCkge1xuICAgICAgICAgICAgICAgIGIuZGF0YVtqXSA9IGlucHV0LmRhdGFbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRoaXMuZGF0YVsxXTtcbiAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICBmb3IgKDsgaSA8IHRoaXMubGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5pbWdwcm9jID0gY2xhc3MgaW1ncHJvYyBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH07XG4gICAgZ3JheXNjYWxlKHNyYzogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyLCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IG51bWJlcikgPT4gdm9pZDsgZGF0YTogYW55IH0sIGNvZGU6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYzogYW55LCBkc3Q6IGFueSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgICAgICB2YXIgaCA9IHNyYy5yb3dzLCB3ID0gc3JjLmNvbHM7XG4gICAgICAgIGlmIChoID4gbmggJiYgdyA+IG53KSB7XG4gICAgICAgICAgICBkc3QucmVzaXplKG53LCBuaCwgc3JjLmNoYW5uZWwpO1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIGZhc3QgYWx0ZXJuYXRpdmUgKGZpeCBwb2ludCBzY2FsZSwgMHgxMDAgdG8gYXZvaWQgb3ZlcmZsb3cpXG4gICAgICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgZHN0LnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgaCAqIHcgLyAobmggKiBudykgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZV91OChzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlKHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJveF9ibHVyX2dyYXkoc3JjOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IGNoYW5uZWw6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIHJhZGl1czogbnVtYmVyLCBvcHRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cbiAgICBnYXVzc2lhbl9ibHVyKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgdHlwZTogYW55OyBjaGFubmVsOiBhbnk7IGRhdGE6IGFueSB9LCBkc3Q6IHsgcmVzaXplOiAoYXJnMDogYW55LCBhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZDsgZGF0YTogYW55IH0sIGtlcm5lbF9zaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGpzZmVhdG1hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZzogYW55LCByaG9fcmVzOiBudW1iZXIsIHRoZXRhX3JlczogbnVtYmVyLCB0aHJlc2hvbGQ6IG51bWJlcikge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWcuZGF0YTtcblxuICAgICAgICB2YXIgd2lkdGggPSBpbWcuY29scztcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5yb3dzO1xuICAgICAgICB2YXIgc3RlcCA9IHdpZHRoO1xuXG4gICAgICAgIHZhciBtaW5fdGhldGEgPSAwLjA7XG4gICAgICAgIHZhciBtYXhfdGhldGEgPSBNYXRoLlBJO1xuXG4gICAgICAgIHZhciBudW1hbmdsZSA9IE1hdGgucm91bmQoKG1heF90aGV0YSAtIG1pbl90aGV0YSkgLyB0aGV0YV9yZXMpO1xuICAgICAgICB2YXIgbnVtcmhvID0gTWF0aC5yb3VuZCgoKHdpZHRoICsgaGVpZ2h0KSAqIDIgKyAxKSAvIHJob19yZXMpO1xuICAgICAgICB2YXIgaXJobyA9IDEuMCAvIHJob19yZXM7XG5cbiAgICAgICAgdmFyIGFjY3VtID0gbmV3IEludDMyQXJyYXkoKG51bWFuZ2xlICsgMikgKiAobnVtcmhvICsgMikpOyAvL3R5cGVkIGFycmF5cyBhcmUgaW5pdGlhbGl6ZWQgdG8gMFxuICAgICAgICB2YXIgdGFiU2luID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG4gICAgICAgIHZhciB0YWJDb3MgPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcblxuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciBhbmcgPSBtaW5fdGhldGE7XG4gICAgICAgIGZvciAoOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgdGFiU2luW25dID0gTWF0aC5zaW4oYW5nKSAqIGlyaG87XG4gICAgICAgICAgICB0YWJDb3Nbbl0gPSBNYXRoLmNvcyhhbmcpICogaXJobztcbiAgICAgICAgICAgIGFuZyArPSB0aGV0YV9yZXNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDEuIGZpbGwgYWNjdW11bGF0b3JcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlW2kgKiBzdGVwICsgal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIsIChuKzEpICogKG51bXJobysyKSArIHIrMSwgdGFiQ29zW25dLCB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yb3VuZChqICogdGFiQ29zW25dICsgaSAqIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IChudW1yaG8gLSAxKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bVsobiArIDEpICogKG51bXJobyArIDIpICsgciArIDFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAyLiBmaW5kIGxvY2FsIG1heGltdW1zXG4gICAgICAgIC8vVE9ETzogQ29uc2lkZXIgbWFraW5nIGEgdmVjdG9yIGNsYXNzIHRoYXQgdXNlcyB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIF9zb3J0X2J1ZiA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG51bXJobzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IChuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW1bYmFzZV0gPiB0aHJlc2hvbGQgJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gMV0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIG51bXJobyAtIDJdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyBudW1yaG8gKyAyXSkge1xuICAgICAgICAgICAgICAgICAgICBfc29ydF9idWYucHVzaChiYXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAzLiBzb3J0IHRoZSBkZXRlY3RlZCBsaW5lcyBieSBhY2N1bXVsYXRvciB2YWx1ZVxuICAgICAgICBfc29ydF9idWYuc29ydChmdW5jdGlvbiAobDEsIGwyKSB7XG4gICAgICAgICAgICByZXR1cm4gPG51bWJlcj48dW5rbm93bj4oYWNjdW1bbDFdID4gYWNjdW1bbDJdIHx8IChhY2N1bVtsMV0gPT0gYWNjdW1bbDJdICYmIGwxIDwgbDIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgdmFyIGxpbmVzTWF4ID0gTWF0aC5taW4obnVtYW5nbGUgKiBudW1yaG8sIF9zb3J0X2J1Zi5sZW5ndGgpO1xuICAgICAgICB2YXIgc2NhbGUgPSAxLjAgLyAobnVtcmhvICsgMik7XG4gICAgICAgIHZhciBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfc29ydF9idWZbaV07XG4gICAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHZhciByID0gaWR4IC0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSAtIDE7XG4gICAgICAgICAgICB2YXIgbHJobyA9IChyIC0gKG51bXJobyAtIDEpICogMC41KSAqIHJob19yZXM7XG4gICAgICAgICAgICB2YXIgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgcHlyZG93bihzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGNoYW5uZWw6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyByZXNpemU6IChhcmcwOiBudW1iZXIsIGFyZzE6IG51bWJlciwgYXJnMjogYW55KSA9PiB2b2lkOyBkYXRhOiBhbnkgfSwgc3g6IG51bWJlciwgc3k6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBudW1iZXIpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB0eXBlOiBudW1iZXIgfSwgZHN0OiBtYXRyaXhfdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4ICsgMV0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChhICsgdHJvdzFbeF0gKyBiICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChjICsgYiArIGEgKiAyKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNF0gLSBlKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZCArIGEgKyBjICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA1XSAtIGYpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgNV0gKyBjICsgZCAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSArIHRyb3cxW3ggKyAxXSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gcGxlYXNlIG5vdGU6IFxuICAgIC8vIGRzdF8odHlwZSkgc2l6ZSBzaG91bGQgYmUgY29scyA9IHNyYy5jb2xzKzEsIHJvd3MgPSBzcmMucm93cysxXG4gICAgY29tcHV0ZV9pbnRlZ3JhbF9pbWFnZShzcmM6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCBkc3Rfc3VtOiBudW1iZXJbXSwgZHN0X3Nxc3VtOiBudW1iZXJbXSwgZHN0X3RpbHRlZDogYW55W10pIHtcbiAgICAgICAgdmFyIHcwID0gc3JjLmNvbHMgfCAwLCBoMCA9IHNyYy5yb3dzIHwgMCwgc3JjX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIHcxID0gKHcwICsgMSkgfCAwO1xuICAgICAgICB2YXIgcyA9IDAsIHMyID0gMCwgcCA9IDAsIHB1cCA9IDAsIGkgPSAwLCBqID0gMCwgdiA9IDAsIGsgPSAwO1xuXG4gICAgICAgIGlmIChkc3Rfc3VtICYmIGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDAsIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgcyA9IHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcblxuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzICs9IHYsIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcCArIDFdID0gZHN0X3Nxc3VtW3B1cCArIDFdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRzdF9zdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHYgKiB2O1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkc3RfdGlsdGVkKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3AgKyAxXSA9IHNyY19kW2sgKyAxXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWFnb25hbFxuICAgICAgICAgICAgcCA9ICh3MSArIHcwKSB8IDAsIHB1cCA9IHcwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGgwOyArK2ksIHAgKz0gdzEsIHB1cCArPSB3MSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSB3MCAtIDE7IGogPiAwOyAtLWopIHtcbiAgICAgICAgICAgICAgICBwID0gaiArIGgwICogdzEsIHB1cCA9IHAgLSB3MTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBoMDsgaSA+IDA7IC0taSwgcCAtPSB3MSwgcHVwIC09IHcxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXF1YWxpemVfaGlzdG9ncmFtKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyBjaGFubmVsOiBhbnkgfSwgZHN0OiB7IHJlc2l6ZTogKGFyZzA6IGFueSwgYXJnMTogYW55LCBhcmcyOiBhbnkpID0+IHZvaWQ7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YSwgc2l6ZSA9IHcgKiBoO1xuICAgICAgICB2YXIgaSA9IDAsIHByZXYgPSAwLCBoaXN0MCwgbm9ybTtcblxuICAgICAgICB2YXIgaGlzdDBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigyNTYgPDwgMik7XG4gICAgICAgIGhpc3QwID0gaGlzdDBfbm9kZS5pMzI7XG4gICAgICAgIGZvciAoOyBpIDwgMjU2OyArK2kpIGhpc3QwW2ldID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgKytoaXN0MFtzcmNfZFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gaGlzdDBbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgcHJldiA9IGhpc3QwW2ldICs9IHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBub3JtID0gMjU1IC8gc2l6ZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgZHN0X2RbaV0gPSAoaGlzdDBbc3JjX2RbaV1dICogbm9ybSArIDAuNSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihoaXN0MF9ub2RlKTtcbiAgICB9XG4gICAgY2Fubnkoc3JjOiBhbnksIGRzdDogYW55LCBsb3dfdGhyZXNoOiBudW1iZXIsIGhpZ2hfdGhyZXNoOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmNfZCA9IHNyYy5kYXRhO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIGo6IG51bWJlciA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwOiBudW1iZXJbXSA9IDxudW1iZXJbXT5tYXBfbm9kZS5pMzI7XG4gICAgICAgIHZhciBzdGFjayA9IHN0YWNrX25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeSA9IGR4ZHlfbm9kZS5pMzI7XG4gICAgICAgIHZhciBkeGR5X20gPSBuZXcgbWF0cml4X3QodywgaCwgSlNGRUFUX0NPTlNUQU5UUy5TMzJDMl90LCBkeGR5X25vZGUuZGF0YSk7XG4gICAgICAgIHZhciByb3cwID0gMSwgcm93MSA9ICh3ICsgMiArIDEpIHwgMCwgcm93MiA9ICgyICogKHcgKyAyKSArIDEpIHwgMCwgbWFwX3cgPSAodyArIDIpIHwgMCwgbWFwX2k6IG51bWJlciA9IChtYXBfdyArIDEpIHwgMCwgc3RhY2tfaSA9IDA7XG5cbiAgICAgICAgdGhpcy5zb2JlbF9kZXJpdmF0aXZlcyhzcmMsIGR4ZHlfbSk7XG5cbiAgICAgICAgaWYgKGxvd190aHJlc2ggPiBoaWdoX3RocmVzaCkge1xuICAgICAgICAgICAgaSA9IGxvd190aHJlc2g7XG4gICAgICAgICAgICBsb3dfdGhyZXNoID0gaGlnaF90aHJlc2g7XG4gICAgICAgICAgICBoaWdoX3RocmVzaCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gKDMgKiAodyArIDIpKSB8IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYnVmW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoKGggKyAyKSAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBtYXBbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2osIGdyYWQgKz0gMikge1xuICAgICAgICAgICAgLy9idWZbcm93MStqXSA9IE1hdGguYWJzKGR4ZHlbZ3JhZF0pICsgTWF0aC5hYnMoZHhkeVtncmFkKzFdKTtcbiAgICAgICAgICAgIHggPSBkeGR5W2dyYWRdLCB5ID0gZHhkeVtncmFkICsgMV07XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0geCp4ICsgeSp5O1xuICAgICAgICAgICAgYnVmW3JvdzEgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGg7ICsraSwgZ3JhZCArPSB3Mikge1xuICAgICAgICAgICAgaWYgKGkgPT0gaCkge1xuICAgICAgICAgICAgICAgIGogPSByb3cyICsgdztcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1qID49IHJvdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9ICBNYXRoLmFicyhkeGR5W2dyYWQrKGo8PDEpXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrKGo8PDEpKzFdKTtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZCArIChqIDw8IDEpXSwgeSA9IGR4ZHlbZ3JhZCArIChqIDw8IDEpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIC8vYnVmW3JvdzIral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zltyb3cyICsgal0gPSAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSArICgoeSBeICh5ID4+IDMxKSkgLSAoeSA+PiAzMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9ncmFkID0gKGdyYWQgLSB3MikgfCAwO1xuICAgICAgICAgICAgbWFwW21hcF9pIC0gMV0gPSAwO1xuICAgICAgICAgICAgc3VwcHJlc3MgPSAwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7ICsraiwgX2dyYWQgKz0gMikge1xuICAgICAgICAgICAgICAgIGYgPSBidWZbcm93MSArIGpdO1xuICAgICAgICAgICAgICAgIGlmIChmID4gbG93X3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtfZ3JhZF07XG4gICAgICAgICAgICAgICAgICAgIHkgPSBkeGR5W19ncmFkICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHMgPSB4IF4geTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlbXMgb3QgYmUgZmFzdGVyIHRoYW4gTWF0aC5hYnNcbiAgICAgICAgICAgICAgICAgICAgeCA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgeSA9ICgoeSBeICh5ID4+IDMxKSkgLSAoeSA+PiAzMSkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgLy94ICogdGFuKDIyLjUpIHggKiB0YW4oNjcuNSkgPT0gMiAqIHggKyB4ICogdGFuKDIyLjUpXG4gICAgICAgICAgICAgICAgICAgIHRnMjJ4ID0geCAqIDEzNTczO1xuICAgICAgICAgICAgICAgICAgICB0ZzY3eCA9IHRnMjJ4ICsgKCh4ICsgeCkgPDwgMTUpO1xuICAgICAgICAgICAgICAgICAgICB5IDw8PSAxNTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCB0ZzIyeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBidWZbcm93MSArIGogLSAxXSAmJiBmID49IGJ1Zltyb3cxICsgaiArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA+IHRnNjd4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cwICsgal0gJiYgZiA+PSBidWZbcm93MiArIGpdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gcyA8IDAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cwICsgaiAtIHNdICYmIGYgPiBidWZbcm93MiArIGogKyBzXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gaGlnaF90aHJlc2ggJiYgIXN1cHByZXNzICYmIG1hcFttYXBfaSArIGogLSBtYXBfd10gIT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbbWFwX2kgKyBqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMDtcbiAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBbbWFwX2kgKyB3XSA9IDA7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGogPSByb3cwO1xuICAgICAgICAgICAgcm93MCA9IHJvdzE7XG4gICAgICAgICAgICByb3cxID0gcm93MjtcbiAgICAgICAgICAgIHJvdzIgPSBqO1xuICAgICAgICB9XG5cbiAgICAgICAgaiA9IG1hcF9pIC0gbWFwX3cgLSAxO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWFwX3c7ICsraSwgKytqKSB7XG4gICAgICAgICAgICBtYXBbal0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBhdGggZm9sbG93aW5nXG4gICAgICAgIHdoaWxlIChzdGFja19pID4gMCkge1xuICAgICAgICAgICAgbWFwX2kgPSBzdGFja1stLXN0YWNrX2ldO1xuICAgICAgICAgICAgbWFwX2kgLT0gbWFwX3cgKyAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSAtPSAyO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgIH1cblxuICAgICAgICBtYXBfaSA9IG1hcF93ICsgMTtcbiAgICAgICAgcm93MCA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBoOyArK2ksIG1hcF9pICs9IG1hcF93KSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICAgICAgZHN0X2Rbcm93MCsrXSA9IChOdW1iZXIobWFwW21hcF9pICsgal0gPT0gMikgKiAweGZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG1hdHJpeF90XG4gICAgd2FycF9wZXJzcGVjdGl2ZShzcmM6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCBkc3Q6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXI7IGRhdGE6IGFueSB9LCB0cmFuc2Zvcm06IHsgZGF0YTogYW55IH0sIGZpbGxfdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzIHwgMCwgc3JjX2hlaWdodCA9IHNyYy5yb3dzIHwgMCwgZHN0X3dpZHRoID0gZHN0LmNvbHMgfCAwLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3MgfCAwO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCB4czAgPSAwLjAsIHlzMCA9IDAuMCwgd3MgPSAwLjAsIHNjID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV0sXG4gICAgICAgICAgICBtMjAgPSB0ZFs2XSwgbTIxID0gdGRbN10sIG0yMiA9IHRkWzhdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4czAgPSBtMDEgKiB5ICsgbTAyLFxuICAgICAgICAgICAgICAgIHlzMCA9IG0xMSAqIHkgKyBtMTIsXG4gICAgICAgICAgICAgICAgd3MgPSBtMjEgKiB5ICsgbTIyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzMCArPSBtMDAsIHlzMCArPSBtMTAsIHdzICs9IG0yMCkge1xuICAgICAgICAgICAgICAgIHNjID0gMS4wIC8gd3M7XG4gICAgICAgICAgICAgICAgeHMgPSB4czAgKiBzYywgeXMgPSB5czAgKiBzYztcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDAsIGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmICh4cyA+IDAgJiYgeXMgPiAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBNYXRoLm1heCh4cyAtIGl4cywgMC4wKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IE1hdGgubWF4KHlzIC0gaXlzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSAoc3JjX3dpZHRoICogaXlzICsgaXhzKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgb3IgMngzIG1hdHJpeF90IG9ubHkgZmlyc3QgNiB2YWx1ZXMgcmVmZXJlbmNlZFxuICAgIHdhcnBfYWZmaW5lKHNyYzogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55IH0sIGRzdDogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55IH0sIHRyYW5zZm9ybTogeyBkYXRhOiBhbnkgfSwgZmlsbF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMsIHNyY19oZWlnaHQgPSBzcmMucm93cywgZHN0X3dpZHRoID0gZHN0LmNvbHMsIGRzdF9oZWlnaHQgPSBkc3Qucm93cztcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4cyA9IG0wMSAqIHkgKyBtMDI7XG4gICAgICAgICAgICB5cyA9IG0xMSAqIHkgKyBtMTI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMgKz0gbTAwLCB5cyArPSBtMTApIHtcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDA7IGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmIChpeHMgPj0gMCAmJiBpeXMgPj0gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0geHMgLSBpeHM7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB5cyAtIGl5cztcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gc3JjX3dpZHRoICogaXlzICsgaXhzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCYXNpYyBSR0IgU2tpbiBkZXRlY3Rpb24gZmlsdGVyXG4gICAgLy8gZnJvbSBodHRwOi8vcG9wc2Nhbi5ibG9nc3BvdC5mci8yMDEyLzA4L3NraW4tZGV0ZWN0aW9uLWluLWRpZ2l0YWwtaW1hZ2VzLmh0bWxcbiAgICBza2luZGV0ZWN0b3Ioc3JjOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBkYXRhOiBhbnlbXSB9LCBkc3Q6IG51bWJlcltdKSB7XG4gICAgICAgIHZhciByLCBnLCBiLCBqO1xuICAgICAgICB2YXIgaSA9IHNyYy53aWR0aCAqIHNyYy5oZWlnaHQ7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGogPSBpICogNDtcbiAgICAgICAgICAgIHIgPSBzcmMuZGF0YVtqXTtcbiAgICAgICAgICAgIGcgPSBzcmMuZGF0YVtqICsgMV07XG4gICAgICAgICAgICBiID0gc3JjLmRhdGFbaiArIDJdO1xuICAgICAgICAgICAgaWYgKChyID4gOTUpICYmIChnID4gNDApICYmIChiID4gMjApXG4gICAgICAgICAgICAgICAgJiYgKHIgPiBnKSAmJiAociA+IGIpXG4gICAgICAgICAgICAgICAgJiYgKHIgLSBNYXRoLm1pbihnLCBiKSA+IDE1KVxuICAgICAgICAgICAgICAgICYmIChNYXRoLmFicyhyIC0gZykgPiAxNSkpIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAyNTU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmpzZmVhdE5leHQubWF0aCA9IGNsYXNzIG1hdGggZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIHFzb3J0X3N0YWNrOiBJbnQzMkFycmF5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnFzb3J0X3N0YWNrID0gbmV3IEludDMyQXJyYXkoNDggKiAyKTtcbiAgICB9XG5cbiAgICBnZXRfZ2F1c3NpYW5fa2VybmVsKHNpemU6IG51bWJlciwgc2lnbWE6IG51bWJlciwga2VybmVsOiBhbnksIGRhdGFfdHlwZTogYW55KSB7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAuMCwgdCA9IDAuMCwgc2lnbWFfeCA9IDAuMCwgc2NhbGVfMnggPSAwLjA7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG4gICAgICAgIHZhciBrZXJuX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoc2l6ZSA8PCAyKTtcbiAgICAgICAgdmFyIF9rZXJuZWwgPSBrZXJuX25vZGUuZjMyOy8vbmV3IEZsb2F0MzJBcnJheShzaXplKTtcblxuICAgICAgICBpZiAoKHNpemUgJiAxKSA9PSAxICYmIHNpemUgPD0gNyAmJiBzaWdtYSA8PSAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNpemUgPj4gMSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjI1LCBfa2VybmVsWzFdID0gMC41LCBfa2VybmVsWzJdID0gMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4yNSArIDAuNSArIDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDYyNSwgX2tlcm5lbFsxXSA9IDAuMjUsIF9rZXJuZWxbMl0gPSAwLjM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI1LCBfa2VybmVsWzRdID0gMC4wNjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjA2MjUgKyAwLjI1ICsgMC4zNzUgKyAwLjI1ICsgMC4wNjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjAzMTI1LCBfa2VybmVsWzFdID0gMC4xMDkzNzUsIF9rZXJuZWxbMl0gPSAwLjIxODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjgxMjUsIF9rZXJuZWxbNF0gPSAwLjIxODc1LCBfa2VybmVsWzVdID0gMC4xMDkzNzUsIF9rZXJuZWxbNl0gPSAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjAzMTI1ICsgMC4xMDkzNzUgKyAwLjIxODc1ICsgMC4yODEyNSArIDAuMjE4NzUgKyAwLjEwOTM3NSArIDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2lnbWFfeCA9IHNpZ21hID4gMCA/IHNpZ21hIDogKChzaXplIC0gMSkgKiAwLjUgLSAxLjApICogMC4zICsgMC44O1xuICAgICAgICAgICAgc2NhbGVfMnggPSAtMC41IC8gKHNpZ21hX3ggKiBzaWdtYV94KTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICB4ID0gaSAtIChzaXplIC0gMSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgdCA9IE1hdGguZXhwKHNjYWxlXzJ4ICogeCAqIHgpO1xuXG4gICAgICAgICAgICAgICAgX2tlcm5lbFtpXSA9IHQ7XG4gICAgICAgICAgICAgICAgc3VtICs9IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSB7XG4gICAgICAgICAgICAvLyBpbnQgYmFzZWQga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAyNTYuMCAvIHN1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSAoX2tlcm5lbFtpXSAqIHN1bSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2xhc3NpYyBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDEuMCAvIHN1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSBfa2VybmVsW2ldICogc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGtlcm5fbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gbW9kZWwgaXMgM3gzIG1hdHJpeF90XG4gICAgcGVyc3BlY3RpdmVfNHBvaW50X3RyYW5zZm9ybShtb2RlbDogYW55LCBzcmNfeDA6IG51bWJlciwgc3JjX3kwOm51bWJlciwgZHN0X3gwOiBudW1iZXIsIGRzdF95MDogbnVtYmVyLFxuICAgICAgICBzcmNfeDE6IG51bWJlciwgc3JjX3kxOiBudW1iZXIsIGRzdF94MTogbnVtYmVyLCBkc3RfeTE6IG51bWJlcixcbiAgICAgICAgc3JjX3gyOiBudW1iZXIsIHNyY195MjogbnVtYmVyLCBkc3RfeDI6IG51bWJlciwgZHN0X3kyOiBudW1iZXIsXG4gICAgICAgIHNyY194MzogbnVtYmVyLCBzcmNfeTM6IG51bWJlciwgZHN0X3gzOiBudW1iZXIsIGRzdF95MzogbnVtYmVyKSB7XG4gICAgICAgIHZhciB0MSA9IHNyY194MDtcbiAgICAgICAgdmFyIHQyID0gc3JjX3gyO1xuICAgICAgICB2YXIgdDQgPSBzcmNfeTE7XG4gICAgICAgIHZhciB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdmFyIHQ2ID0gc3JjX3kzO1xuICAgICAgICB2YXIgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB2YXIgdDggPSB0MiAqIHQ3O1xuICAgICAgICB2YXIgdDkgPSBzcmNfeTI7XG4gICAgICAgIHZhciB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB2YXIgdDExID0gc3JjX3gxO1xuICAgICAgICB2YXIgdDE0ID0gc3JjX3kwO1xuICAgICAgICB2YXIgdDE1ID0gc3JjX3gzO1xuICAgICAgICB2YXIgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB2YXIgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB2YXIgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHZhciB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdmFyIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB2YXIgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdmFyIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHZhciB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdmFyIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB2YXIgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHZhciB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdmFyIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdmFyIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHZhciB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdmFyIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB2YXIgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHZhciB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdmFyIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSHIwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSHIyID0gdDE7XG4gICAgICAgIHZhciBIcjMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSHI0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSHI1ID0gdDE0O1xuICAgICAgICB2YXIgSHI2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSHI3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgdDEgPSBkc3RfeDA7XG4gICAgICAgIHQyID0gZHN0X3gyO1xuICAgICAgICB0NCA9IGRzdF95MTtcbiAgICAgICAgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHQ2ID0gZHN0X3kzO1xuICAgICAgICB0NyA9IHQxICogdDY7XG4gICAgICAgIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdDkgPSBkc3RfeTI7XG4gICAgICAgIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHQxMSA9IGRzdF94MTtcbiAgICAgICAgdDE0ID0gZHN0X3kwO1xuICAgICAgICB0MTUgPSBkc3RfeDM7XG4gICAgICAgIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhsMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIbDEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMiA9IHQxO1xuICAgICAgICB2YXIgSGwzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNSA9IHQxNDtcbiAgICAgICAgdmFyIEhsNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgY29kZSBjb21wdXRlcyBSID0gSGwgKiBpbnZlcnNlIEhyXG4gICAgICAgIHQyID0gSHI0IC0gSHI3ICogSHI1O1xuICAgICAgICB0NCA9IEhyMCAqIEhyNDtcbiAgICAgICAgdDUgPSBIcjAgKiBIcjU7XG4gICAgICAgIHQ3ID0gSHIzICogSHIxO1xuICAgICAgICB0OCA9IEhyMiAqIEhyMztcbiAgICAgICAgdDEwID0gSHIxICogSHI2O1xuICAgICAgICB2YXIgdDEyID0gSHIyICogSHI2O1xuICAgICAgICB0MTUgPSAxLjAgLyAodDQgLSB0NSAqIEhyNyAtIHQ3ICsgdDggKiBIcjcgKyB0MTAgKiBIcjUgLSB0MTIgKiBIcjQpO1xuICAgICAgICB0MTggPSAtSHIzICsgSHI1ICogSHI2O1xuICAgICAgICB2YXIgdDIzID0gLUhyMyAqIEhyNyArIEhyNCAqIEhyNjtcbiAgICAgICAgdDI4ID0gLUhyMSArIEhyMiAqIEhyNztcbiAgICAgICAgdmFyIHQzMSA9IEhyMCAtIHQxMjtcbiAgICAgICAgdDM1ID0gSHIwICogSHI3IC0gdDEwO1xuICAgICAgICB0NDEgPSAtSHIxICogSHI1ICsgSHIyICogSHI0O1xuICAgICAgICB2YXIgdDQ0ID0gdDUgLSB0ODtcbiAgICAgICAgdmFyIHQ0NyA9IHQ0IC0gdDc7XG4gICAgICAgIHQ0OCA9IHQyICogdDE1O1xuICAgICAgICB2YXIgdDQ5ID0gdDI4ICogdDE1O1xuICAgICAgICB2YXIgdDUwID0gdDQxICogdDE1O1xuICAgICAgICB2YXIgbWF0ID0gbW9kZWwuZGF0YTtcbiAgICAgICAgbWF0WzBdID0gSGwwICogdDQ4ICsgSGwxICogKHQxOCAqIHQxNSkgLSBIbDIgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzFdID0gSGwwICogdDQ5ICsgSGwxICogKHQzMSAqIHQxNSkgLSBIbDIgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzJdID0gLUhsMCAqIHQ1MCAtIEhsMSAqICh0NDQgKiB0MTUpICsgSGwyICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFszXSA9IEhsMyAqIHQ0OCArIEhsNCAqICh0MTggKiB0MTUpIC0gSGw1ICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFs0XSA9IEhsMyAqIHQ0OSArIEhsNCAqICh0MzEgKiB0MTUpIC0gSGw1ICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFs1XSA9IC1IbDMgKiB0NTAgLSBIbDQgKiAodDQ0ICogdDE1KSArIEhsNSAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbNl0gPSBIbDYgKiB0NDggKyBIbDcgKiAodDE4ICogdDE1KSAtIHQyMyAqIHQxNTtcbiAgICAgICAgbWF0WzddID0gSGw2ICogdDQ5ICsgSGw3ICogKHQzMSAqIHQxNSkgLSB0MzUgKiB0MTU7XG4gICAgICAgIG1hdFs4XSA9IC1IbDYgKiB0NTAgLSBIbDcgKiAodDQ0ICogdDE1KSArIHQ0NyAqIHQxNTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiB3YXMgZGVyaXZlZCBmcm9tICpCU0Qgc3lzdGVtIHFzb3J0KCk6XG4gICAgLy8gQ29weXJpZ2h0IChjKSAxOTkyLCAxOTkzXG4gICAgLy8gVGhlIFJlZ2VudHMgb2YgdGhlIFVuaXZlcnNpdHkgb2YgQ2FsaWZvcm5pYS4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgcXNvcnQoYXJyYXk6IGFueSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlciwgY21wOiBhbnkpIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXk6IGFueSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIG1pZGRsZSA9IDAsIGxsID0gMCwgaGggPSAwLCBtZWRpYW4gPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsOyB3aGlsZSAoYXJyYXlbbG93XSA+IGFycmF5W2xsXSk7XG4gICAgICAgICAgICAgICAgZG8gLS1oaDsgd2hpbGUgKGFycmF5W2hoXSA+IGFycmF5W2xvd10pO1xuICAgICAgICAgICAgICAgIGlmIChoaCA8IGxsKSBicmVhaztcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgICAgIGFycmF5W2xsXSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIGlmIChoaCA8PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgbG93ID0gbGw7XG4gICAgICAgICAgICBlbHNlIGlmIChoaCA+PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgaGlnaCA9IChoaCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0bWF0aCA9IG1hdG1hdGg7XG5cbmpzZmVhdE5leHQubGluYWxnID0gY2xhc3MgbGluYWxnIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIG1hdG1hdGg6IG1hdG1hdGg7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChBOiBudW1iZXJbXSwgYXN0ZXA6IG51bWJlciwgVzogbnVtYmVyW10sIFY6IG51bWJlcltdLCB2c3RlcDogbnVtYmVyLCBuOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIG0gPSAwLCBsID0gMCwgaWR4ID0gMCwgX2luID0gMCwgX2luMiA9IDA7XG4gICAgICAgIHZhciBpdGVycyA9IDAsIG1heF9pdGVyID0gbiAqIG4gKiAzMDtcbiAgICAgICAgdmFyIG12ID0gMC4wLCB2YWwgPSAwLjAsIHAgPSAwLjAsIHkgPSAwLjAsIHQgPSAwLjAsIHMgPSAwLjAsIGMgPSAwLjAsIGEwID0gMC4wLCBiMCA9IDAuMDtcblxuICAgICAgICB2YXIgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRDX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZFIgPSBpbmRSX2J1ZmYuaTMyO1xuICAgICAgICB2YXIgaW5kQyA9IGluZENfYnVmZi5pMzI7XG5cbiAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgayA9IGkgKiB2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbayArIGpdID0gMC4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2sgKyBpXSA9IDEuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIFdba10gPSBBWyhhc3RlcCArIDEpICoga107XG4gICAgICAgICAgICBpZiAoayA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gayArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBtXSksIGkgPSBrICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogayArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRSW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsga10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG4gPiAxKSBmb3IgKDsgaXRlcnMgPCBtYXhfaXRlcjsgaXRlcnMrKykge1xuICAgICAgICAgICAgLy8gZmluZCBpbmRleCAoayxsKSBvZiBwaXZvdCBwXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGluZFJbaV1dKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGwgPSBpbmRSW2tdO1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpbmRDW2ldICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpbmRDW2ldLCBsID0gaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA9IEFbYXN0ZXAgKiBrICsgbF07XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMpIGJyZWFrO1xuXG4gICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSAqIDAuNTtcbiAgICAgICAgICAgIHQgPSBNYXRoLmFicyh5KSArIGh5cG90KHAsIHkpO1xuICAgICAgICAgICAgcyA9IGh5cG90KHAsIHQpO1xuICAgICAgICAgICAgYyA9IHQgLyBzO1xuICAgICAgICAgICAgcyA9IHAgLyBzOyB0ID0gKHAgLyB0KSAqIHA7XG4gICAgICAgICAgICBpZiAoeSA8IDApXG4gICAgICAgICAgICAgICAgcyA9IC1zLCB0ID0gLXQ7XG4gICAgICAgICAgICBBW2FzdGVwICogayArIGxdID0gMDtcblxuICAgICAgICAgICAgV1trXSAtPSB0O1xuICAgICAgICAgICAgV1tsXSArPSB0O1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgcm93cyBhbmQgY29sdW1ucyBrIGFuZCBsXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogaSArIGspO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gKGsgKyAxKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSBsICsgMTtcbiAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBsICsgaSk7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcm90YXRlIGVpZ2VudmVjdG9yc1xuICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICBfaW4gPSB2c3RlcCAqIGs7XG4gICAgICAgICAgICAgICAgX2luMiA9IHZzdGVwICogbDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGEwID0gVltfaW5dO1xuICAgICAgICAgICAgICAgICAgICBiMCA9IFZbX2luMl07XG4gICAgICAgICAgICAgICAgICAgIFZbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICAgICAgVltfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZHggPSBqID09IDAgPyBrIDogbDtcbiAgICAgICAgICAgICAgICBpZiAoaWR4IDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gaWR4ICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgbV0pLCBpID0gaWR4ICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kUltpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGlkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IG4gLSAxOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1ttXSA8IFdbaV0pXG4gICAgICAgICAgICAgICAgICAgIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgIT0gbSkge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgbSwgaywgbXYpO1xuICAgICAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAgKiBtICsgaSwgdnN0ZXAgKiBrICsgaSwgbXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kUl9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZENfYnVmZik7XG4gICAgfVxuXG4gICAgSmFjb2JpU1ZESW1wbChBdDogbnVtYmVyW10sIGFzdGVwOiBudW1iZXIsIF9XOiBhbnlbXSwgVnQ6IG51bWJlcltdLCB2c3RlcDogbnVtYmVyLCBtOiBudW1iZXIsIG46IG51bWJlciwgbjE6IG51bWJlcikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQTogeyBjb2xzOiBhbnk7IGRhdGE6IGFueSB9LCBCOiB7IGRhdGE6IGFueSB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBwID0gMSwgYXN0ZXAgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB0LCBhbHBoYSwgZCwgcztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXN0ZXA7IGkrKykge1xuICAgICAgICAgICAgayA9IGk7XG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbaiAqIGFzdGVwICsgaV0pID4gTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGQUlMRURcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgIT0gaSkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAoYWQsIGkgKiBhc3RlcCArIGosIGsgKiBhc3RlcCArIGosIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3YXAoYmQsIGksIGssIHQpO1xuICAgICAgICAgICAgICAgIHAgPSAtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IC0xLjAgLyBhZFtpICogYXN0ZXAgKyBpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhZFtqICogYXN0ZXAgKyBpXSAqIGQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWRbaiAqIGFzdGVwICsga10gKz0gYWxwaGEgKiBhZFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBiZFtqXSArPSBhbHBoYSAqIGJkW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZFtpICogYXN0ZXAgKyBpXSA9IC1kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gYXN0ZXAgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgcyA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcyAtPSBhZFtpICogYXN0ZXAgKyBrXSAqIGJkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSBzICogYWRbaSAqIGFzdGVwICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTsgLy8gT0tcbiAgICB9XG5cbiAgICBjaG9sZXNreV9zb2x2ZShBOiB7IGNvbHM6IGFueTsgZGF0YTogYW55IH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGNvbCA9IDAsIHJvdyA9IDAsIGNvbDIgPSAwLCBjcyA9IDAsIHJzID0gMCwgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgc2l6ZSA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHZhbCwgaW52X2RpYWc7XG5cbiAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgaW52X2RpYWcgPSAxLjA7XG4gICAgICAgICAgICBjcyA9IChjb2wgKiBzaXplKTtcbiAgICAgICAgICAgIHJzID0gY3M7XG4gICAgICAgICAgICBmb3IgKHJvdyA9IGNvbDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGZvciB0aGUgcGFydHMgb2YgY2hvbGVza3kgYWxyZWFkeSBjb21wdXRlZFxuICAgICAgICAgICAgICAgIHZhbCA9IGFkWyhycyArIGNvbCldO1xuICAgICAgICAgICAgICAgIGZvciAoY29sMiA9IDA7IGNvbDIgPCBjb2w7IGNvbDIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNvbDIgKiBzaXplICsgY29sKV0gKiBhZFsocnMgKyBjb2wyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGRpYWdvbmFsIGVsZW1lbnQgc28gZG9uJ3QgZGl2aWRlXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludl9kaWFnID0gMS4wIC8gdmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhY2hlIHRoZSB2YWx1ZSB3aXRob3V0IGRpdmlzaW9uIGluIHRoZSB1cHBlciBoYWxmXG4gICAgICAgICAgICAgICAgICAgIGFkWyhjcyArIHJvdyldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXZpZGUgbXkgdGhlIGRpYWdvbmFsIGVsZW1lbnQgZm9yIGFsbCBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWwgKiBpbnZfZGlhZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnMgPSAocnMgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcnN0IGJhY2tzdWIgdGhyb3VnaCBMXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGopXSAqIGJkW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBkaWFnb25hbFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGJkW2ldIC89IGFkWyhjcyArIGkpXTtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIEwgVHJhbnNwb3NlXG4gICAgICAgIGkgPSAoc2l6ZSAtIDEpO1xuICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgaiA9IChpICsgMSk7XG4gICAgICAgICAgICBjcyA9IChqICogc2l6ZSk7XG4gICAgICAgICAgICBmb3IgKDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBpKV0gKiBiZFtqXTtcbiAgICAgICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBzdmRfZGVjb21wb3NlKEE6IGFueSwgVzogbWF0cml4X3QsIFU6IG1hdHJpeF90LCBWOiBtYXRyaXhfdCwgb3B0aW9uczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfTtcbiAgICAgICAgdmFyIGF0ID0gMCwgaSA9IDAsIGogPSAwLCBfbSA9IEEucm93cywgX24gPSBBLmNvbHMsIG0gPSBfbSwgbiA9IF9uO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7IC8vIHdlIG9ubHkgd29yayB3aXRoIHNpbmdsZSBjaGFubmVsIFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobSAqIG0pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChtLCBtLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCBhX210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCB2X210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgYV9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuXG4gICAgfVxuXG4gICAgc3ZkX3NvbHZlKEE6IHsgcm93czogYW55OyBjb2xzOiBhbnk7IHR5cGU6IG51bWJlciB9LCBYOiB7IGRhdGE6IG51bWJlcltdIH0sIEI6IHsgZGF0YTogYW55IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgeHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIHZhciB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgYmQgPSBCLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgeHN1bSA9IDAuMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdkW2pdID4gdG9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMCwgcHUgPSAwOyBrIDwgbnJvd3M7IGsrKywgcHUgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB1ZFtwdSArIGpdICogYmRba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHN1bSArPSBzdW0gKiB2ZFtwdiArIGpdIC8gd2Rbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWC5kYXRhW2ldID0geHN1bTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgc3ZkX2ludmVydChBaTogeyBkYXRhOiBhbnkgfSwgQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgdHlwZTogbnVtYmVyIH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQTogeyBjb2xzOiBhbnk7IHR5cGU6IG51bWJlcjsgZGF0YTogYW55W10gfSwgdmVjdHM6IHsgZGF0YTogbnVtYmVyW10gfSwgdmFsczogeyBkYXRhOiB7IFt4OiBzdHJpbmddOiBhbnkgfSB9KSB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpSW1wbChhX210LmRhdGEsIG4sIHdfbXQuZGF0YSwgdmVjdHMgPyB2ZWN0cy5kYXRhIDogbnVsbCwgbiwgbik7XG5cbiAgICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHMuZGF0YVtuXSA9IHdfbXQuZGF0YVtuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQueWFwZSA9IHlhcGU7XG5cbmpzZmVhdE5leHQueWFwZTA2ID0gY2xhc3MgeWFwZTA2IGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIGxhcGxhY2lhbl90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmM6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueSB9LCBwb2ludHM6IGFueVtdLCBib3JkZXI6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSA1OyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDA7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JkX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIER4eCA9IDUsIER5eSA9ICg1ICogdykgfCAwO1xuICAgICAgICB2YXIgRHh5ID0gKDMgKyAzICogdykgfCAwLCBEeXggPSAoMyAtIDMgKiB3KSB8IDA7XG4gICAgICAgIHZhciBsYXBfYnVmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG4gICAgICAgIHZhciBsYXBsYWNpYW4gPSBsYXBfYnVmLmkzMjtcbiAgICAgICAgdmFyIGx2ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIG1pbl9laWdlbl92YWx1ZSA9IDAsIHB0O1xuICAgICAgICB2YXIgbnVtYmVyX29mX3BvaW50cyA9IDA7XG4gICAgICAgIHZhciBsYXBfdGhyZXNoID0gdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkO1xuICAgICAgICB2YXIgZWlnZW5fdGhyZXNoID0gdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkO1xuXG4gICAgICAgIHZhciBzeCA9IE1hdGgubWF4KDUsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heCgzLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIDUsIHcgLSBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV5ID0gTWF0aC5taW4oaCAtIDMsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICB4ID0gdyAqIGg7XG4gICAgICAgIHdoaWxlICgtLXggPj0gMCkgeyBsYXBsYWNpYW5beF0gPSAwOyB9XG4gICAgICAgIGNvbXB1dGVfbGFwbGFjaWFuKHNyZF9kLCBsYXBsYWNpYW4sIHcsIGgsIER4eCwgRHl5LCBzeCwgc3ksIGV4LCBleSk7XG5cbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG5cbiAgICAgICAgICAgICAgICBsdiA9IGxhcGxhY2lhbltyb3d4XTtcbiAgICAgICAgICAgICAgICBpZiAoKGx2IDwgLWxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIChsdiA+IGxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG1pbl9laWdlbl92YWx1ZSA9IGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlKHNyZF9kLCByb3d4LCBsdiwgRHh4LCBEeXksIER4eSwgRHl4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbl9laWdlbl92YWx1ZSA+IGVpZ2VuX3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gbWluX2VpZ2VuX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7IC8vIHNraXAgbmV4dCBwaXhlbCBzaW5jZSB0aGlzIGlzIG1heGltYSBpbiAzeDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihsYXBfYnVmKTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNsYXNzIGtleXBvaW50X3Qge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgYW5nbGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NvcmU6IG51bWJlciwgbGV2ZWw6IG51bWJlciwgYW5nbGU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHsgeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ID09PSBcInVuZGVmaW5lZFwiKSB7IHkgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NvcmUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2NvcmUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09IFwidW5kZWZpbmVkXCIpIHsgYW5nbGUgPSAtMS4wOyB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN3YXAoQTogeyBbeDogc3RyaW5nXTogYW55OyB9LCBpMDogc3RyaW5nIHwgbnVtYmVyLCBpMTogc3RyaW5nIHwgbnVtYmVyLCB0OiBhbnkpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIGEgPSBNYXRoLmFicyhhKTtcbiAgICBiID0gTWF0aC5hYnMoYik7XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnNxcnQoMS4wICsgYiAqIGIpO1xuICAgIH1cbiAgICBpZiAoYiA+IDApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYiAqIE1hdGguc3FydCgxLjAgKyBhICogYSk7XG4gICAgfVxuICAgIHJldHVybiAwLjA7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0bWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGlkZW50aXR5KE06IHsgZGF0YTogYW55OyByb3dzOiBhbnk7IGNvbHM6IGFueTsgfSwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgc3JjID0gTS5kYXRhO1xuICAgICAgICB2YXIgcm93cyA9IE0ucm93cywgY29scyA9IE0uY29scywgY29sc18xID0gKGNvbHMgKyAxKSB8IDA7XG4gICAgICAgIHZhciBsZW4gPSByb3dzICogY29scztcbiAgICAgICAgdmFyIGsgPSBsZW47XG4gICAgICAgIHdoaWxlICgtLWxlbiA+PSAwKSBzcmNbbGVuXSA9IDAuMDtcbiAgICAgICAgbGVuID0gaztcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICBzcmNba10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGsgPSBrICsgY29sc18xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKEF0OiB7IGRhdGE6IGFueTsgfSwgQTogeyByb3dzOiBhbnk7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIEFpID0gMCwgQXRpID0gMCwgcEF0ID0gMDtcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IGNvbHM6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQidcbiAgICBtdWx0aXBseV9BQnQoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbXJvd3MgPSBCLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgY29sczogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBBcCsrLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBBJ1xuICAgIG11bHRpcGx5X0FBdChDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0MgPSAwLCBwQyA9IDAsIHBfQ0MgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwX0NDXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlvdXMgc21hbGwgbWF0cml4IG9wZXJhdGlvbnNcbiAgICBpZGVudGl0eV8zeDMoTTogeyBkYXRhOiBhbnk7IH0sIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIGR0ID0gTS5kYXRhO1xuICAgICAgICBkdFswXSA9IGR0WzRdID0gZHRbOF0gPSB2YWx1ZTtcbiAgICAgICAgZHRbMV0gPSBkdFsyXSA9IGR0WzNdID0gMDtcbiAgICAgICAgZHRbNV0gPSBkdFs2XSA9IGR0WzddID0gMDtcbiAgICB9XG5cbiAgICBpbnZlcnRfM3gzKGZyb206IHsgZGF0YTogYW55OyB9LCB0bzogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIEEgPSBmcm9tLmRhdGEsIGludkEgPSB0by5kYXRhO1xuICAgICAgICB2YXIgdDEgPSBBWzRdO1xuICAgICAgICB2YXIgdDIgPSBBWzhdO1xuICAgICAgICB2YXIgdDQgPSBBWzVdO1xuICAgICAgICB2YXIgdDUgPSBBWzddO1xuICAgICAgICB2YXIgdDggPSBBWzBdO1xuXG4gICAgICAgIHZhciB0OSA9IHQ4ICogdDE7XG4gICAgICAgIHZhciB0MTEgPSB0OCAqIHQ0O1xuICAgICAgICB2YXIgdDEzID0gQVszXTtcbiAgICAgICAgdmFyIHQxNCA9IEFbMV07XG4gICAgICAgIHZhciB0MTUgPSB0MTMgKiB0MTQ7XG4gICAgICAgIHZhciB0MTcgPSBBWzJdO1xuICAgICAgICB2YXIgdDE4ID0gdDEzICogdDE3O1xuICAgICAgICB2YXIgdDIwID0gQVs2XTtcbiAgICAgICAgdmFyIHQyMSA9IHQyMCAqIHQxNDtcbiAgICAgICAgdmFyIHQyMyA9IHQyMCAqIHQxNztcbiAgICAgICAgdmFyIHQyNiA9IDEuMCAvICh0OSAqIHQyIC0gdDExICogdDUgLSB0MTUgKiB0MiArIHQxOCAqIHQ1ICsgdDIxICogdDQgLSB0MjMgKiB0MSk7XG4gICAgICAgIGludkFbMF0gPSAodDEgKiB0MiAtIHQ0ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzFdID0gLSh0MTQgKiB0MiAtIHQxNyAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsyXSA9IC0oLXQxNCAqIHQ0ICsgdDE3ICogdDEpICogdDI2O1xuICAgICAgICBpbnZBWzNdID0gLSh0MTMgKiB0MiAtIHQ0ICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs0XSA9ICh0OCAqIHQyIC0gdDIzKSAqIHQyNjtcbiAgICAgICAgaW52QVs1XSA9IC0odDExIC0gdDE4KSAqIHQyNjtcbiAgICAgICAgaW52QVs2XSA9IC0oLXQxMyAqIHQ1ICsgdDEgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzddID0gLSh0OCAqIHQ1IC0gdDIxKSAqIHQyNjtcbiAgICAgICAgaW52QVs4XSA9ICh0OSAtIHQxNSkgKiB0MjY7XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHlfM3gzKEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGRhdGE6IGFueTsgfSwgQjogeyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIENkID0gQy5kYXRhLCBBZCA9IEEuZGF0YSwgQmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciBtMV8wID0gQWRbMF0sIG0xXzEgPSBBZFsxXSwgbTFfMiA9IEFkWzJdO1xuICAgICAgICB2YXIgbTFfMyA9IEFkWzNdLCBtMV80ID0gQWRbNF0sIG0xXzUgPSBBZFs1XTtcbiAgICAgICAgdmFyIG0xXzYgPSBBZFs2XSwgbTFfNyA9IEFkWzddLCBtMV84ID0gQWRbOF07XG5cbiAgICAgICAgdmFyIG0yXzAgPSBCZFswXSwgbTJfMSA9IEJkWzFdLCBtMl8yID0gQmRbMl07XG4gICAgICAgIHZhciBtMl8zID0gQmRbM10sIG0yXzQgPSBCZFs0XSwgbTJfNSA9IEJkWzVdO1xuICAgICAgICB2YXIgbTJfNiA9IEJkWzZdLCBtMl83ID0gQmRbN10sIG0yXzggPSBCZFs4XTtcblxuICAgICAgICBDZFswXSA9IG0xXzAgKiBtMl8wICsgbTFfMSAqIG0yXzMgKyBtMV8yICogbTJfNjtcbiAgICAgICAgQ2RbMV0gPSBtMV8wICogbTJfMSArIG0xXzEgKiBtMl80ICsgbTFfMiAqIG0yXzc7XG4gICAgICAgIENkWzJdID0gbTFfMCAqIG0yXzIgKyBtMV8xICogbTJfNSArIG0xXzIgKiBtMl84O1xuICAgICAgICBDZFszXSA9IG0xXzMgKiBtMl8wICsgbTFfNCAqIG0yXzMgKyBtMV81ICogbTJfNjtcbiAgICAgICAgQ2RbNF0gPSBtMV8zICogbTJfMSArIG0xXzQgKiBtMl80ICsgbTFfNSAqIG0yXzc7XG4gICAgICAgIENkWzVdID0gbTFfMyAqIG0yXzIgKyBtMV80ICogbTJfNSArIG0xXzUgKiBtMl84O1xuICAgICAgICBDZFs2XSA9IG0xXzYgKiBtMl8wICsgbTFfNyAqIG0yXzMgKyBtMV84ICogbTJfNjtcbiAgICAgICAgQ2RbN10gPSBtMV82ICogbTJfMSArIG0xXzcgKiBtMl80ICsgbTFfOCAqIG0yXzc7XG4gICAgICAgIENkWzhdID0gbTFfNiAqIG0yXzIgKyBtMV83ICogbTJfNSArIG0xXzggKiBtMl84O1xuICAgIH1cblxuICAgIG1hdDN4M19kZXRlcm1pbmFudChNOiB7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgbWQgPSBNLmRhdGE7XG4gICAgICAgIHJldHVybiBtZFswXSAqIG1kWzRdICogbWRbOF0gLVxuICAgICAgICAgICAgbWRbMF0gKiBtZFs1XSAqIG1kWzddIC1cbiAgICAgICAgICAgIG1kWzNdICogbWRbMV0gKiBtZFs4XSArXG4gICAgICAgICAgICBtZFszXSAqIG1kWzJdICogbWRbN10gK1xuICAgICAgICAgICAgbWRbNl0gKiBtZFsxXSAqIG1kWzVdIC1cbiAgICAgICAgICAgIG1kWzZdICogbWRbMl0gKiBtZFs0XTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudF8zeDMoTTExOiBudW1iZXIsIE0xMjogbnVtYmVyLCBNMTM6IG51bWJlcixcbiAgICAgICAgTTIxOiBudW1iZXIsIE0yMjogbnVtYmVyLCBNMjM6IG51bWJlcixcbiAgICAgICAgTTMxOiBudW1iZXIsIE0zMjogbnVtYmVyLCBNMzM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBkYXRhX3QgfSBmcm9tICcuLi9ub2RlX3V0aWxzL2RhdGFfdCdcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhfVCB7XG4gICAgYWxsb2NhdGU6ICgpID0+IHZvaWQ7XG4gICAgY29weV90bzogKG90aGVyOiBhbnkpID0+IHZvaWQ7XG4gICAgcmVzaXplOiAoYzogbnVtYmVyLCByOiBudW1iZXIsIGNoOiBhbnkpID0+IHZvaWQ7XG59XG5leHBvcnQgY2xhc3MgbWF0cml4X3QgaW1wbGVtZW50cyBJTWF0cml4X1Qge1xuICAgIHByaXZhdGUgZHQ6IElEYXRhX1R5cGU7XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICBwdWJsaWMgY2hhbm5lbDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2xzOiBudW1iZXI7XG4gICAgcHVibGljIHJvd3M6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHB1YmxpYyBidWZmZXI6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihjOiBudW1iZXIsIHI6IG51bWJlciwgX2RhdGFfdHlwZTogbnVtYmVyLCBfZGF0YV9idWZmZXI/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXI6IGFueSkge1xuICAgICAgICB2YXIgb2QgPSBvdGhlci5kYXRhLCB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBuID0gKHRoaXMuY29scyAqIHRoaXMucm93cyAqIHRoaXMuY2hhbm5lbCkgfCAwO1xuICAgICAgICBmb3IgKDsgaSA8IG4gLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgICAgICBvZFtpICsgMV0gPSB0ZFtpICsgMV07XG4gICAgICAgICAgICBvZFtpICsgMl0gPSB0ZFtpICsgMl07XG4gICAgICAgICAgICBvZFtpICsgM10gPSB0ZFtpICsgM107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzaXplKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHsgY2ggPSB0aGlzLmNoYW5uZWw7IH1cbiAgICAgICAgLy8gcmVsb2NhdGUgYnVmZmVyIG9ubHkgaWYgbmV3IHNpemUgZG9lc250IGZpdFxuICAgICAgICB2YXIgbmV3X3NpemUgPSAoYyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogY2gpICogcjtcbiAgICAgICAgaWYgKG5ld19zaXplID4gdGhpcy5idWZmZXIuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSURhdGFfVCwgZGF0YV90IH0gZnJvbSAnLi9kYXRhX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvb2xfTm9kZV9UIHtcbiAgICByZXNpemU6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9wb29sX25vZGVfdCBpbXBsZW1lbnRzIElQb29sX05vZGVfVCB7XG4gICAgcHVibGljIG5leHQ6IGFueTtcbiAgICBwdWJsaWMgZGF0YT86IElEYXRhX1Q7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcblxuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbiAgICByZXNpemUoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVCB7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgdTg6IFVpbnQ4QXJyYXk7XG4gICAgaTMyOiBJbnQzMkFycmF5O1xuICAgIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIGY2NDogRmxvYXQ2NEFycmF5O1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90IGltcGxlbWVudHMgSURhdGFfVCAge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIsIGJ1ZmZlcj86IGFueSkge1xuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB0aGlyZF9jaGVjaywgaXNfbG9jYWxfbWF4aW1hLCBwZXJmb3JtX29uZV9wb2ludCwgbGV2X3RhYmxlX3QgfSBmcm9tICcuL3lhcGVfdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyB5YXBlIHtcbiAgICBwcml2YXRlIGxldmVsX3RhYmxlczogbGV2X3RhYmxlX3RbXTtcbiAgICBwcml2YXRlIHRhdTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxldmVsX3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLnRhdSA9IDc7XG4gICAgfVxuXG4gICAgaW5pdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHB5cmFtaWRfbGV2ZWxzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBweXJhbWlkX2xldmVscyA9PT0gXCJ1bmRlZmluZWRcIikgeyBweXJhbWlkX2xldmVscyA9IDE7IH1cbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWluKHJhZGl1cywgNyk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgMyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBweXJhbWlkX2xldmVsczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsX3RhYmxlc1tpXSA9IG5ldyBsZXZfdGFibGVfdCh3aWR0aCA+PiBpLCBoZWlnaHQgPj4gaSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdChzcmM6IHsgZGF0YTogYW55OyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgfSwgcG9pbnRzOiBhbnlbXSwgYm9yZGVyOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHN0ZXA6IG51bWJlciwgZGlyczogSW50MzJBcnJheSwgUjogbnVtYmVyKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciB4LCB5O1xuXG4gICAgeCA9IFI7XG4gICAgZm9yICh5ID0gMDsgeSA8IHg7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgtLTsgeCA8IHkgJiYgeCA+PSAwOyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IC14IDwgeTsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeS0tOyB5ID49IDA7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHkgPiB4OyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeCsrOyB4IDw9IDA7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHggPCAteTsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHkrKzsgeSA8IDA7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cblxuICAgIGRpcnNbaV0gPSBkaXJzWzBdO1xuICAgIGRpcnNbaSArIDFdID0gZGlyc1sxXTtcbiAgICByZXR1cm4gaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkX2NoZWNrKFNiOiBJbnQzMkFycmF5IHwgbnVtYmVyW10sIG9mZjogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICB2YXIgbiA9IDA7XG4gICAgaWYgKFNiW29mZiArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCAtIDFdICE9IDApIG4rKztcblxuICAgIHJldHVybiBuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNfbG9jYWxfbWF4aW1hKHA6IEludDMyQXJyYXksIG9mZjogbnVtYmVyLCB2OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgbmVpZ2hib3Job29kOiBudW1iZXIpIHtcbiAgICB2YXIgeCwgeTtcblxuICAgIGlmICh2ID4gMCkge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdID4gdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdIDwgdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtX29uZV9wb2ludChJOiB7IFt4OiBzdHJpbmddOiBudW1iZXI7IH0sIHg6IG51bWJlciwgU2NvcmVzOiBJbnQzMkFycmF5LCBJbTogbnVtYmVyLCBJcDogbnVtYmVyLCBkaXJzOiBhbnlbXSB8IEludDMyQXJyYXksIG9wcG9zaXRlOiBudW1iZXIsIGRpcnNfbmI6IG51bWJlcikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgcHVibGljIGRpcnM6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGRpcnNfY291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2NvcmVzOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih3OiBudW1iZXIsIGg6IG51bWJlciwgcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlycyA9IG5ldyBJbnQzMkFycmF5KDEwMjQpO1xuICAgICAgICB0aGlzLmRpcnNfY291bnQgPSBwcmVjb21wdXRlX2RpcmVjdGlvbnModywgdGhpcy5kaXJzLCByKSB8IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzID0gbmV3IEludDMyQXJyYXkodyAqIGgpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHIgfCAwO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjOiBhbnlbXSwgZHN0OiBhbnlbXSwgdzogbnVtYmVyLCBoOiBhbnksIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgc3g6IG51bWJlcixzeTogbnVtYmVyLCBleDogbnVtYmVyLGV5OiBudW1iZXIpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmM6IG51bWJlcltdLCBvZmY6IG51bWJlciwgdHI6IG51bWJlciwgRHh4OiBudW1iZXIsIER5eTogbnVtYmVyLCBEeHk6IG51bWJlciwgRHl4OiBudW1iZXIpIHtcbiAgICB2YXIgSXh4ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeHhdICsgc3JjW29mZiAtIER4eF07XG4gICAgdmFyIEl5eSA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHl5XSArIHNyY1tvZmYgLSBEeXldO1xuICAgIHZhciBJeHkgPSBzcmNbb2ZmICsgRHh5XSArIHNyY1tvZmYgLSBEeHldIC0gc3JjW29mZiArIER5eF0gLSBzcmNbb2ZmIC0gRHl4XTtcbiAgICB2YXIgc3FydF9kZWx0YSA9ICggTWF0aC5zcXJ0KCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkgKSApfDA7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5hYnModHIgLSBzcXJ0X2RlbHRhKSwgTWF0aC5hYnMoLSh0ciArIHNxcnRfZGVsdGEpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJVOEMxX3QiLCJVOEMzX3QiLCJVOEM0X3QiLCJGMzJDMV90IiwiRjMyQzJfdCIsIlMzMkMxX3QiLCJTMzJDMl90IiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsInR5cGUiLCJfY29udm9sX3U4IiwiYnVmIiwic3JjX2QiLCJkc3RfZCIsInciLCJoIiwiZmlsdGVyIiwia2VybmVsX3NpemUiLCJoYWxmX2tlcm5lbCIsImoiLCJrIiwic3AiLCJkcCIsInN1bSIsInN1bTEiLCJzdW0yIiwic3VtMyIsImYwIiwiZmsiLCJ3MiIsInczIiwidzQiLCJNYXRoIiwibWluIiwiX2NvbnZvbCIsIl9yZXNhbXBsZV91OCIsInNyYyIsImRzdCIsIm53IiwibmgiLCJ4b2ZzX2NvdW50IiwiY2giLCJjaGFubmVsIiwiY29scyIsInJvd3MiLCJkYXRhIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4Iiwic3kiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImEiLCJiIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJidWZfbm9kZSIsImdldF9idWZmZXIiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImkzMiIsInhvZnMiLCJtYXgiLCJwdXRfYnVmZmVyIiwiX3Jlc2FtcGxlIiwic2NhbGUiLCJmMzIiLCJhYnMiLCJzd2FwIiwiaHlwb3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJrZXlwb2ludF90IiwieWFwZSIsImNvbXB1dGVfbGFwbGFjaWFuIiwiaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJweXJhbWlkX3QiLCJsZXZlbHMiLCJBcnJheSIsIl9pbWdwcm9jIiwiaW1ncHJvYyIsInB5cmRvd24iLCJzdGFydF93Iiwic3RhcnRfaCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCIsImNvZGUiLCJ4IiwieSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsInJhZGl1cyIsIm9wdGlvbnMiLCJoMiIsImVuZCIsIndpbmRvd1NpemUiLCJyYWRpdXNQbHVzT25lIiwicmFkaXVzUGx1czIiLCJ0bXBfYnVmZiIsImRzdEluZGV4Iiwic3JjSW5kZXgiLCJuZXh0UGl4ZWxJbmRleCIsInByZXZpb3VzUGl4ZWxJbmRleCIsImRhdGFfaTMyIiwiZGF0YV91OCIsImhvbGQiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXRoIiwiaXNfdTgiLCJidWZfc3oiLCJmaWx0X25vZGUiLCJnZXRfZ2F1c3NpYW5fa2VybmVsIiwiaW1nIiwicmhvX3JlcyIsInRoZXRhX3JlcyIsInRocmVzaG9sZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGVwIiwibWluX3RoZXRhIiwibWF4X3RoZXRhIiwiUEkiLCJudW1hbmdsZSIsInJvdW5kIiwibnVtcmhvIiwiaXJobyIsImFjY3VtIiwidGFiU2luIiwiRmxvYXQzMkFycmF5IiwidGFiQ29zIiwibiIsImFuZyIsInNpbiIsImNvcyIsInIiLCJfc29ydF9idWYiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsImRzdGVwIiwieDEiLCJjIiwiZCIsImUiLCJmIiwic3JvdzAiLCJzcm93MSIsInNyb3cyIiwiZHJvdyIsInRyb3cwIiwidHJvdzEiLCJneGd5IiwiYnVmMF9ub2RlIiwiYnVmMV9ub2RlIiwiZHN0X3N1bSIsImRzdF9zcXN1bSIsImRzdF90aWx0ZWQiLCJ3MCIsImgwIiwidzEiLCJzIiwiczIiLCJwIiwicHVwIiwidiIsInByZXYiLCJoaXN0MCIsIm5vcm0iLCJoaXN0MF9ub2RlIiwibG93X3RocmVzaCIsImhpZ2hfdGhyZXNoIiwiZ3JhZCIsIl9ncmFkIiwic3VwcHJlc3MiLCJ0ZzIyeCIsInRnNjd4IiwiZHhkeV9ub2RlIiwibWFwX25vZGUiLCJzdGFja19ub2RlIiwibWFwIiwic3RhY2siLCJkeGR5IiwiZHhkeV9tIiwicm93MCIsInJvdzEiLCJyb3cyIiwibWFwX3ciLCJtYXBfaSIsInN0YWNrX2kiLCJzb2JlbF9kZXJpdmF0aXZlcyIsIk51bWJlciIsInRyYW5zZm9ybSIsImZpbGxfdmFsdWUiLCJzcmNfd2lkdGgiLCJzcmNfaGVpZ2h0IiwiZHN0X3dpZHRoIiwiZHN0X2hlaWdodCIsIm9mZiIsIml4cyIsIml5cyIsInhzIiwieXMiLCJ4czAiLCJ5czAiLCJ3cyIsInNjIiwicDAiLCJwMSIsInRkIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwibTIwIiwibTIxIiwibTIyIiwiZyIsInFzb3J0X3N0YWNrIiwia2VybmVsIiwidCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJtb2RlbCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQxIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJtIiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250IiwibWlkZGxlIiwibGwiLCJoaCIsIm1lZGlhbiIsImxpbmFsZyIsIkEiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJsIiwiX2luIiwiX2luMiIsIml0ZXJzIiwibWF4X2l0ZXIiLCJtdiIsInZhbCIsImEwIiwiYjAiLCJpbmRSX2J1ZmYiLCJpbmRDX2J1ZmYiLCJpbmRSIiwiaW5kQyIsIkF0IiwiX1ciLCJWdCIsIm4xIiwibWludmFsIiwiaXRlciIsIkFpIiwiQWoiLCJWaSIsIlZqIiwiY2hhbmdlZCIsInQwIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0Iiwic3FydCIsIkIiLCJhZCIsImJkIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJhX2J1ZmYiLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJhX210Iiwid19tdCIsInZfbXQiLCJ0cmFuc3Bvc2UiLCJKYWNvYmlTVkRJbXBsIiwiWCIsInB1IiwicHYiLCJucm93cyIsIm5jb2xzIiwieHN1bSIsInRvbCIsInVfYnVmZiIsInVfbXQiLCJ1ZCIsIndkIiwidmQiLCJzdmRfZGVjb21wb3NlIiwicGEiLCJpZCIsInZlY3RzIiwidmFscyIsIkphY29iaUltcGwiLCJ5YXBlMDYiLCJsYXBsYWNpYW5fdGhyZXNob2xkIiwibWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCIsInBvaW50cyIsImJvcmRlciIsInNyZF9kIiwiRHh4IiwiRHl5IiwiRHh5IiwiRHl4IiwibGFwX2J1ZiIsImxhcGxhY2lhbiIsImx2Iiwicm93eCIsIm1pbl9laWdlbl92YWx1ZSIsInB0IiwibnVtYmVyX29mX3BvaW50cyIsImxhcF90aHJlc2giLCJlaWdlbl90aHJlc2giLCJleCIsImV5Iiwic2NvcmUiLCJsZXZlbCIsImFuZ2xlIiwiaTAiLCJpMSIsIk0iLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImZyb20iLCJ0byIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsImRhdGFfdCIsIl9kYXRhX3R5cGUiLCJfZGF0YV9idWZmZXIiLCJidWZmZXIiLCJ1OCIsIm90aGVyIiwib2QiLCJuZXdfc2l6ZSIsIkFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsIkZsb2F0NjRBcnJheSIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsImlwIiwiaW0iLCJhYnNfc2NvcmUiLCJwcmVjb21wdXRlX2RpcmVjdGlvbnMiLCJTYiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=