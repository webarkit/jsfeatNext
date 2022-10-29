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

/***/ "./src/cache/cache.ts":
/*!****************************!*\
  !*** ./src/cache/cache.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cache": () => (/* binding */ cache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _node_utils_pool_node_t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../node_utils/_pool_node_t */ "./src/node_utils/_pool_node_t.ts");




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

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
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

/***/ "./src/data_type/data_type.ts":
/*!************************************!*\
  !*** ./src/data_type/data_type.ts ***!
  \************************************/
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

/***/ "./src/fast_corners/fast_private.ts":
/*!******************************************!*\
  !*** ./src/fast_corners/fast_private.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_cmp_score_16": () => (/* binding */ _cmp_score_16)
/* harmony export */ });
function _cmp_score_16(src, off, pixel, d, threshold) {
  var N = 25,
      k = 0,
      v = src[off];
  var a0 = threshold,
      a = 0,
      b0 = 0,
      b = 0;

  for (; k < N; ++k) {
    d[k] = v - src[off + pixel[k]];
  }

  for (k = 0; k < 16; k += 2) {
    a = Math.min(d[k + 1], d[k + 2]);
    a = Math.min(a, d[k + 3]);
    if (a <= a0) continue;
    a = Math.min(a, d[k + 4]);
    a = Math.min(a, d[k + 5]);
    a = Math.min(a, d[k + 6]);
    a = Math.min(a, d[k + 7]);
    a = Math.min(a, d[k + 8]);
    a0 = Math.max(a0, Math.min(a, d[k]));
    a0 = Math.max(a0, Math.min(a, d[k + 9]));
  }

  b0 = -a0;

  for (k = 0; k < 16; k += 2) {
    b = Math.max(d[k + 1], d[k + 2]);
    b = Math.max(b, d[k + 3]);
    b = Math.max(b, d[k + 4]);
    b = Math.max(b, d[k + 5]);
    if (b >= b0) continue;
    b = Math.max(b, d[k + 6]);
    b = Math.max(b, d[k + 7]);
    b = Math.max(b, d[k + 8]);
    b0 = Math.min(b0, Math.max(b, d[k]));
    b0 = Math.min(b0, Math.max(b, d[k + 9]));
  }

  return -b0 - 1;
}
;

/***/ }),

/***/ "./src/imgproc/convol.ts":
/*!*******************************!*\
  !*** ./src/imgproc/convol.ts ***!
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

/***/ "./src/imgproc/resample.ts":
/*!*********************************!*\
  !*** ./src/imgproc/resample.ts ***!
  \*********************************/
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

/***/ "./src/jsfeatNext.ts":
/*!***************************!*\
  !*** ./src/jsfeatNext.ts ***!
  \***************************/
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
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data_type/data_type */ "./src/data_type/data_type.ts");
/* harmony import */ var _cache_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cache/cache */ "./src/cache/cache.ts");
/* harmony import */ var _imgproc_resample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgproc/resample */ "./src/imgproc/resample.ts");
/* harmony import */ var _imgproc_convol__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgproc/convol */ "./src/imgproc/convol.ts");
/* harmony import */ var _linalg_linalg_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./linalg/linalg_base */ "./src/linalg/linalg_base.ts");
/* harmony import */ var _fast_corners_fast_private__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fast_corners/fast_private */ "./src/fast_corners/fast_private.ts");
/* harmony import */ var _matmath_matmath__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./matmath/matmath */ "./src/matmath/matmath.ts");
/* harmony import */ var _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./matrix_t/matrix_t */ "./src/matrix_t/matrix_t.ts");
/* harmony import */ var _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./keypoint_t/keypoint_t */ "./src/keypoint_t/keypoint_t.ts");
/* harmony import */ var _orb_bit_pattern_31__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orb/bit_pattern_31 */ "./src/orb/bit_pattern_31.ts");
/* harmony import */ var _orb_rectify_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orb/rectify_patch */ "./src/orb/rectify_patch.ts");
/* harmony import */ var _yape_yape__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./yape/yape */ "./src/yape/yape.ts");
/* harmony import */ var _yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./yape06/yape06_utils */ "./src/yape06/yape06_utils.ts");
/* harmony import */ var _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./motion_estimator/ransac_params_t */ "./src/motion_estimator/ransac_params_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../package.json */ "./package.json");








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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "fast_corners", void 0);

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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_22__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T);

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

    _this.T0 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.T1 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.AtA = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(6, 6, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.AtB = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(6, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
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
          if (Math.abs(dx2 * dy1 - dy2 * dx1) <= _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2))) return true;
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var md = model.data,
          t0d = this.T0.data,
          t1d = this.T1.data;
      var pt0,
          pt1,
          px = 0.0,
          py = 0.0;

      var _matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_13__["default"]();

      var _linalg = new jsfeatNext.linalg();

      this.iso_normalize_points(from, to, t0d, t1d, count);
      var a_buff = this.cache.get_buffer(2 * count * 6 << 3);
      var b_buff = this.cache.get_buffer(2 * count << 3);
      var a_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(6, 2 * count, dt, a_buff.data);
      var b_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(1, 2 * count, dt, b_buff.data);
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

    _this2.mLtL = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this2.Evec = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
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

      var _matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_13__["default"]();

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

      if (Math.abs(smx) < _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON || Math.abs(smy) < _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMx) < _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMy) < _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON) return 0;
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
      var _matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_13__["default"]();

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
        this.data[i] = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(start_w >> i, start_h >> i, data_type);
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

jsfeatNext.matrix_t = _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t;
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_15__.keypoint_t;

jsfeatNext.fast_corners = /*#__PURE__*/function (_jsfeatNext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(fast_corners, _jsfeatNext3);

  var _super5 = _createSuper(fast_corners);

  function fast_corners() {
    var _this4;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, fast_corners);

    _this4 = _super5.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "offsets16", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "_threshold", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "threshold_tab", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "pixel_off", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4), "score_diff", void 0);

    _this4.offsets16 = new Int32Array([0, 3, 1, 3, 2, 2, 3, 1, 3, 0, 3, -1, 2, -2, 1, -3, 0, -3, -1, -3, -2, -2, -3, -1, -3, 0, -3, 1, -2, 2, -1, 3]);
    _this4.threshold_tab = new Uint8Array(512);
    _this4._threshold = 20;
    _this4.pixel_off = new Int32Array(25);
    _this4.score_diff = new Int32Array(25);
    return _this4;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(fast_corners, [{
    key: "set_threshold",
    value: function set_threshold(threshold) {
      this._threshold = Math.min(Math.max(threshold, 0), 255);

      for (var i = -255; i <= 255; ++i) {
        this.threshold_tab[i + 255] = i < -this._threshold ? 1 : i > this._threshold ? 2 : 0;
      }

      return this._threshold;
    }
  }, {
    key: "detect",
    value: function detect(src, corners, border) {
      if (typeof border === "undefined") {
        border = 3;
      }

      var K = 8,
          N = 25;
      var img = src.data,
          w = src.cols,
          h = src.rows;
      var i = 0,
          j = 0,
          k = 0,
          vt = 0,
          x = 0,
          m3 = 0;
      var buf_node = this.cache.get_buffer(3 * w);
      var cpbuf_node = this.cache.get_buffer((w + 1) * 3 << 2);
      var buf = buf_node.u8;
      var cpbuf = cpbuf_node.i32;
      var pixel = this.pixel_off;
      var sd = this.score_diff;
      var sy = Math.max(3, border);
      var ey = Math.min(h - 2, h - border);
      var sx = Math.max(3, border);
      var ex = Math.min(w - 3, w - border);
      var _count = 0,
          corners_cnt = 0,
          pt;
      var score_func = _fast_corners_fast_private__WEBPACK_IMPORTED_MODULE_12__._cmp_score_16;
      var thresh_tab = this.threshold_tab;
      var threshold = this._threshold;
      var v = 0,
          tab = 0,
          d = 0,
          ncorners = 0,
          cornerpos = 0,
          curr = 0,
          ptr = 0,
          prev = 0,
          pprev = 0;
      var jp1 = 0,
          jm1 = 0,
          score = 0;

      this._cmp_offsets(pixel, w, 16);

      var pixel0 = pixel[0];
      var pixel1 = pixel[1];
      var pixel2 = pixel[2];
      var pixel3 = pixel[3];
      var pixel4 = pixel[4];
      var pixel5 = pixel[5];
      var pixel6 = pixel[6];
      var pixel7 = pixel[7];
      var pixel8 = pixel[8];
      var pixel9 = pixel[9];
      var pixel10 = pixel[10];
      var pixel11 = pixel[11];
      var pixel12 = pixel[12];
      var pixel13 = pixel[13];
      var pixel14 = pixel[14];
      var pixel15 = pixel[15];

      for (i = 0; i < w * 3; ++i) {
        buf[i] = 0;
      }

      for (i = sy; i < ey; ++i) {
        ptr = i * w + sx | 0;
        m3 = (i - 3) % 3;
        curr = m3 * w | 0;
        cornerpos = m3 * (w + 1) | 0;

        for (j = 0; j < w; ++j) {
          buf[curr + j] = 0;
        }

        ncorners = 0;

        if (i < ey - 1) {
          j = sx;

          for (; j < ex; ++j, ++ptr) {
            v = img[ptr];
            tab = -v + 255;
            d = thresh_tab[tab + img[ptr + pixel0]] | thresh_tab[tab + img[ptr + pixel8]];

            if (d == 0) {
              continue;
            }

            d &= thresh_tab[tab + img[ptr + pixel2]] | thresh_tab[tab + img[ptr + pixel10]];
            d &= thresh_tab[tab + img[ptr + pixel4]] | thresh_tab[tab + img[ptr + pixel12]];
            d &= thresh_tab[tab + img[ptr + pixel6]] | thresh_tab[tab + img[ptr + pixel14]];

            if (d == 0) {
              continue;
            }

            d &= thresh_tab[tab + img[ptr + pixel1]] | thresh_tab[tab + img[ptr + pixel9]];
            d &= thresh_tab[tab + img[ptr + pixel3]] | thresh_tab[tab + img[ptr + pixel11]];
            d &= thresh_tab[tab + img[ptr + pixel5]] | thresh_tab[tab + img[ptr + pixel13]];
            d &= thresh_tab[tab + img[ptr + pixel7]] | thresh_tab[tab + img[ptr + pixel15]];

            if (d & 1) {
              vt = v - threshold;
              _count = 0;

              for (k = 0; k < N; ++k) {
                x = img[ptr + pixel[k]];

                if (x < vt) {
                  ++_count;

                  if (_count > K) {
                    ++ncorners;
                    cpbuf[cornerpos + ncorners] = j;
                    buf[curr + j] = score_func(img, ptr, pixel, sd, threshold);
                    break;
                  }
                } else {
                  _count = 0;
                }
              }
            }

            if (d & 2) {
              vt = v + threshold;
              _count = 0;

              for (k = 0; k < N; ++k) {
                x = img[ptr + pixel[k]];

                if (x > vt) {
                  ++_count;

                  if (_count > K) {
                    ++ncorners;
                    cpbuf[cornerpos + ncorners] = j;
                    buf[curr + j] = score_func(img, ptr, pixel, sd, threshold);
                    break;
                  }
                } else {
                  _count = 0;
                }
              }
            }
          }
        }

        cpbuf[cornerpos + w] = ncorners;

        if (i == sy) {
          continue;
        }

        m3 = (i - 4 + 3) % 3;
        prev = m3 * w | 0;
        cornerpos = m3 * (w + 1) | 0;
        m3 = (i - 5 + 3) % 3;
        pprev = m3 * w | 0;
        ncorners = cpbuf[cornerpos + w];

        for (k = 0; k < ncorners; ++k) {
          j = cpbuf[cornerpos + k];
          jp1 = j + 1 | 0;
          jm1 = j - 1 | 0;
          score = buf[prev + j];

          if (score > buf[prev + jp1] && score > buf[prev + jm1] && score > buf[pprev + jm1] && score > buf[pprev + j] && score > buf[pprev + jp1] && score > buf[curr + jm1] && score > buf[curr + j] && score > buf[curr + jp1]) {
            pt = corners[corners_cnt];
            pt.x = j, pt.y = i - 1, pt.score = score;
            corners_cnt++;
          }
        }
      }

      this.cache.put_buffer(buf_node);
      this.cache.put_buffer(cpbuf_node);
      return corners_cnt;
    }
  }, {
    key: "_cmp_offsets",
    value: function _cmp_offsets(pixel, step, pattern_size) {
      var k = 0;
      var offsets = this.offsets16;

      for (; k < pattern_size; ++k) {
        pixel[k] = offsets[k << 1] + offsets[(k << 1) + 1] * step;
      }

      for (; k < 25; ++k) {
        pixel[k] = pixel[k - pattern_size];
      }
    }
  }]);

  return fast_corners;
}(jsfeatNext);

jsfeatNext.imgproc = /*#__PURE__*/function (_jsfeatNext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(imgproc, _jsfeatNext4);

  var _super6 = _createSuper(imgproc);

  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, imgproc);

    return _super6.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      if (typeof code === "undefined") {
        code = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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

        if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
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
      var scale = options & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
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
          is_u8 = data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t) {
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
      var dxdy_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(w, h, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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

jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(math, _jsfeatNext5);

  var _super7 = _createSuper(math);

  function math() {
    var _this5;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, math);

    _this5 = _super7.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5), "qsort_stack", void 0);

    _this5.qsort_stack = new Int32Array(48 * 2);
    return _this5;
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

      if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t) {
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

jsfeatNext.matmath = _matmath_matmath__WEBPACK_IMPORTED_MODULE_13__["default"];

jsfeatNext.linalg = /*#__PURE__*/function (_jsfeatNext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(linalg, _jsfeatNext6);

  var _super8 = _createSuper(linalg);

  function linalg() {
    var _this6;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, linalg);

    _this6 = _super8.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6), "matmath", void 0);

    _this6.matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_13__["default"]();
    return _this6;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON;
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
      var eps = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.FLT_MIN;
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;

      if (m < n) {
        at = 1;
        i = m;
        m = n;
        n = i;
      }

      var a_buff = this.cache.get_buffer(m * m << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var v_buff = this.cache.get_buffer(n * n << 3);
      var a_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(m, m, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(1, n, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(n, n, dt, v_buff.data);

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
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(ncols, ncols, dt, v_buff.data);
      var bd = B.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(ncols, ncols, dt, v_buff.data);
      var id = Ai.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var a_buff = this.cache.get_buffer(n * n << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var a_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(n, n, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(1, n, dt, w_buff.data);

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

jsfeatNext.orb = /*#__PURE__*/function (_jsfeatNext7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(orb, _jsfeatNext7);

  var _super9 = _createSuper(orb);

  function orb() {
    var _this7;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, orb);

    _this7 = _super9.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "bit_pattern_31_", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "H", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "patch_img", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), "imgproc", void 0);

    _this7.bit_pattern_31_ = new Int32Array(_orb_bit_pattern_31__WEBPACK_IMPORTED_MODULE_16__.bit_pattern_31);
    _this7.H = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this7.patch_img = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(32, 32, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this7.imgproc = new jsfeatNext.imgproc();
    return _this7;
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

      if (!(descriptors.type & _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t)) {
        descriptors.type = _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t;
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
        (0,_orb_rectify_patch__WEBPACK_IMPORTED_MODULE_17__.rectify_patch)(src, this.patch_img, angle, px, py, 32, this.H, this.imgproc);
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

jsfeatNext.yape = _yape_yape__WEBPACK_IMPORTED_MODULE_18__.yape;

jsfeatNext.yape06 = /*#__PURE__*/function (_jsfeatNext8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(yape06, _jsfeatNext8);

  var _super10 = _createSuper(yape06);

  function yape06() {
    var _this8;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, yape06);

    _this8 = _super10.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this8), "laplacian_threshold", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this8), "min_eigen_value_threshold", void 0);

    _this8.laplacian_threshold = 30;
    _this8.min_eigen_value_threshold = 25;
    return _this8;
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

      (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_19__.compute_laplacian)(srd_d, laplacian, w, h, Dxx, Dyy, sx, sy, ex, ey);
      row = sy * w + sx | 0;

      for (y = sy; y < ey; ++y, row += w) {
        for (x = sx, rowx = row; x < ex; ++x, ++rowx) {
          lv = laplacian[rowx];

          if (lv < -lap_thresh && lv < laplacian[rowx - 1] && lv < laplacian[rowx + 1] && lv < laplacian[rowx - w] && lv < laplacian[rowx + w] && lv < laplacian[rowx - w - 1] && lv < laplacian[rowx + w - 1] && lv < laplacian[rowx - w + 1] && lv < laplacian[rowx + w + 1] || lv > lap_thresh && lv > laplacian[rowx - 1] && lv > laplacian[rowx + 1] && lv > laplacian[rowx - w] && lv > laplacian[rowx + w] && lv > laplacian[rowx - w - 1] && lv > laplacian[rowx + w - 1] && lv > laplacian[rowx - w + 1] && lv > laplacian[rowx + w + 1]) {
            min_eigen_value = (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_19__.hessian_min_eigen_value)(srd_d, rowx, lv, Dxx, Dyy, Dxy, Dyx);

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

jsfeatNext.motion_estimator = /*#__PURE__*/function (_jsfeatNext9) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(motion_estimator, _jsfeatNext9);

  var _super11 = _createSuper(motion_estimator);

  function motion_estimator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, motion_estimator);

    return _super11.call(this);
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
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
      var dt = model.type | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t, ms_buff.data);
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

jsfeatNext.ransac_params_t = _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_20__.ransac_params_t;
jsfeatNext.affine2d = affine2d;
jsfeatNext.homography2d = homography2d;

jsfeatNext.optical_flow_lk = /*#__PURE__*/function (_jsfeatNext10) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(optical_flow_lk, _jsfeatNext10);

  var _super12 = _createSuper(optical_flow_lk);

  function optical_flow_lk() {
    var _this9;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, optical_flow_lk);

    _this9 = _super12.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this9), "scharr_deriv", void 0);

    var _imgproc = new jsfeatNext.imgproc();

    _this9.scharr_deriv = _imgproc.scharr_derivatives;
    return _this9;
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
      var deriv_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_14__.matrix_t(w0, h0, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
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

/***/ "./src/keypoint_t/keypoint_t.ts":
/*!**************************************!*\
  !*** ./src/keypoint_t/keypoint_t.ts ***!
  \**************************************/
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

/***/ "./src/linalg/linalg_base.ts":
/*!***********************************!*\
  !*** ./src/linalg/linalg_base.ts ***!
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

/***/ "./src/matmath/matmath.ts":
/*!********************************!*\
  !*** ./src/matmath/matmath.ts ***!
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

/***/ "./src/matrix_t/matrix_t.ts":
/*!**********************************!*\
  !*** ./src/matrix_t/matrix_t.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matrix_t": () => (/* binding */ matrix_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_type/data_type */ "./src/data_type/data_type.ts");
/* harmony import */ var _node_utils_data_t__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_utils/data_t */ "./src/node_utils/data_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");






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

/***/ "./src/motion_estimator/ransac_params_t.ts":
/*!*************************************************!*\
  !*** ./src/motion_estimator/ransac_params_t.ts ***!
  \*************************************************/
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

/***/ "./src/node_utils/_pool_node_t.ts":
/*!****************************************!*\
  !*** ./src/node_utils/_pool_node_t.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _pool_node_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_t */ "./src/node_utils/data_t.ts");





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

/***/ "./src/node_utils/data_t.ts":
/*!**********************************!*\
  !*** ./src/node_utils/data_t.ts ***!
  \**********************************/
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

/***/ "./src/orb/bit_pattern_31.ts":
/*!***********************************!*\
  !*** ./src/orb/bit_pattern_31.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bit_pattern_31": () => (/* binding */ bit_pattern_31)
/* harmony export */ });
var bit_pattern_31 = [8, -3, 9, 5, 4, 2, 7, -12, -11, 9, -8, 2, 7, -12, 12, -13, 2, -13, 2, 12, 1, -7, 1, 6, -2, -10, -2, -4, -13, -13, -11, -8, -13, -3, -12, -9, 10, 4, 11, 9, -13, -8, -8, -9, -11, 7, -9, 12, 7, 7, 12, 6, -4, -5, -3, 0, -13, 2, -12, -3, -9, 0, -7, 5, 12, -6, 12, -1, -3, 6, -2, 12, -6, -13, -4, -8, 11, -13, 12, -8, 4, 7, 5, 1, 5, -3, 10, -3, 3, -7, 6, 12, -8, -7, -6, -2, -2, 11, -1, -10, -13, 12, -8, 10, -7, 3, -5, -3, -4, 2, -3, 7, -10, -12, -6, 11, 5, -12, 6, -7, 5, -6, 7, -1, 1, 0, 4, -5, 9, 11, 11, -13, 4, 7, 4, 12, 2, -1, 4, 4, -4, -12, -2, 7, -8, -5, -7, -10, 4, 11, 9, 12, 0, -8, 1, -13, -13, -2, -8, 2, -3, -2, -2, 3, -6, 9, -4, -9, 8, 12, 10, 7, 0, 9, 1, 3, 7, -5, 11, -10, -13, -6, -11, 0, 10, 7, 12, 1, -6, -3, -6, 12, 10, -9, 12, -4, -13, 8, -8, -12, -13, 0, -8, -4, 3, 3, 7, 8, 5, 7, 10, -7, -1, 7, 1, -12, 3, -10, 5, 6, 2, -4, 3, -10, -13, 0, -13, 5, -13, -7, -12, 12, -13, 3, -11, 8, -7, 12, -4, 7, 6, -10, 12, 8, -9, -1, -7, -6, -2, -5, 0, 12, -12, 5, -7, 5, 3, -10, 8, -13, -7, -7, -4, 5, -3, -2, -1, -7, 2, 9, 5, -11, -11, -13, -5, -13, -1, 6, 0, -1, 5, -3, 5, 2, -4, -13, -4, 12, -9, -6, -9, 6, -12, -10, -8, -4, 10, 2, 12, -3, 7, 12, 12, 12, -7, -13, -6, 5, -4, 9, -3, 4, 7, -1, 12, 2, -7, 6, -5, 1, -13, 11, -12, 5, -3, 7, -2, -6, 7, -8, 12, -7, -13, -7, -11, -12, 1, -3, 12, 12, 2, -6, 3, 0, -4, 3, -2, -13, -1, -13, 1, 9, 7, 1, 8, -6, 1, -1, 3, 12, 9, 1, 12, 6, -1, -9, -1, 3, -13, -13, -10, 5, 7, 7, 10, 12, 12, -5, 12, 9, 6, 3, 7, 11, 5, -13, 6, 10, 2, -12, 2, 3, 3, 8, 4, -6, 2, 6, 12, -13, 9, -12, 10, 3, -8, 4, -7, 9, -11, 12, -4, -6, 1, 12, 2, -8, 6, -9, 7, -4, 2, 3, 3, -2, 6, 3, 11, 0, 3, -3, 8, -8, 7, 8, 9, 3, -11, -5, -6, -4, -10, 11, -5, 10, -5, -8, -3, 12, -10, 5, -9, 0, 8, -1, 12, -6, 4, -6, 6, -11, -10, 12, -8, 7, 4, -2, 6, 7, -2, 0, -2, 12, -5, -8, -5, 2, 7, -6, 10, 12, -9, -13, -8, -8, -5, -13, -5, -2, 8, -8, 9, -13, -9, -11, -9, 0, 1, -8, 1, -2, 7, -4, 9, 1, -2, 1, -1, -4, 11, -6, 12, -11, -12, -9, -6, 4, 3, 7, 7, 12, 5, 5, 10, 8, 0, -4, 2, 8, -9, 12, -5, -13, 0, 7, 2, 12, -1, 2, 1, 7, 5, 11, 7, -9, 3, 5, 6, -8, -13, -4, -8, 9, -5, 9, -3, -3, -4, -7, -3, -12, 6, 5, 8, 0, -7, 6, -6, 12, -13, 6, -5, -2, 1, -10, 3, 10, 4, 1, 8, -4, -2, -2, 2, -13, 2, -12, 12, 12, -2, -13, 0, -6, 4, 1, 9, 3, -6, -10, -3, -5, -3, -13, -1, 1, 7, 5, 12, -11, 4, -2, 5, -7, -13, 9, -9, -5, 7, 1, 8, 6, 7, -8, 7, 6, -7, -4, -7, 1, -8, 11, -7, -8, -13, 6, -12, -8, 2, 4, 3, 9, 10, -5, 12, 3, -6, -5, -6, 7, 8, -3, 9, -8, 2, -12, 2, 8, -11, -2, -10, 3, -12, -13, -7, -9, -11, 0, -10, -5, 5, -3, 11, 8, -2, -13, -1, 12, -1, -8, 0, 9, -13, -11, -12, -5, -10, -2, -10, 11, -3, 9, -2, -13, 2, -3, 3, 2, -9, -13, -4, 0, -4, 6, -3, -10, -4, 12, -2, -7, -6, -11, -4, 9, 6, -3, 6, 11, -13, 11, -5, 5, 11, 11, 12, 6, 7, -5, 12, -2, -1, 12, 0, 7, -4, -8, -3, -2, -7, 1, -6, 7, -13, -12, -8, -13, -7, -2, -6, -8, -8, 5, -6, -9, -5, -1, -4, 5, -13, 7, -8, 10, 1, 5, 5, -13, 1, 0, 10, -13, 9, 12, 10, -1, 5, -8, 10, -9, -1, 11, 1, -13, -9, -3, -6, 2, -1, -10, 1, 12, -13, 1, -8, -10, 8, -11, 10, -6, 2, -13, 3, -6, 7, -13, 12, -9, -10, -10, -5, -7, -10, -8, -8, -13, 4, -6, 8, 5, 3, 12, 8, -13, -4, 2, -3, -3, 5, -13, 10, -12, 4, -13, 5, -1, -9, 9, -4, 3, 0, 3, 3, -9, -12, 1, -6, 1, 3, 2, 4, -8, -10, -10, -10, 9, 8, -13, 12, 12, -8, -12, -6, -5, 2, 2, 3, 7, 10, 6, 11, -8, 6, 8, 8, -12, -7, 10, -6, 5, -3, -9, -3, 9, -1, -13, -1, 5, -3, -7, -3, 4, -8, -2, -8, 3, 4, 2, 12, 12, 2, -5, 3, 11, 6, -9, 11, -13, 3, -1, 7, 12, 11, -1, 12, 4, -3, 0, -3, 6, 4, -11, 4, 12, 2, -4, 2, 1, -10, -6, -8, 1, -13, 7, -11, 1, -13, 12, -11, -13, 6, 0, 11, -13, 0, -1, 1, 4, -13, 3, -9, -2, -9, 8, -6, -3, -13, -6, -8, -2, 5, -9, 8, 10, 2, 7, 3, -9, -1, -6, -1, -1, 9, 5, 11, -2, 11, -3, 12, -8, 3, 0, 3, 5, -1, 4, 0, 10, 3, -6, 4, 5, -13, 0, -10, 5, 5, 8, 12, 11, 8, 9, 9, -6, 7, -4, 8, -12, -10, 4, -10, 9, 7, 3, 12, 4, 9, -7, 10, -2, 7, 0, 12, -2, -1, -6, 0, -11];

/***/ }),

/***/ "./src/orb/rectify_patch.ts":
/*!**********************************!*\
  !*** ./src/orb/rectify_patch.ts ***!
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

/***/ "./src/yape/yape.ts":
/*!**************************!*\
  !*** ./src/yape/yape.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yape": () => (/* binding */ yape)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _yape_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yape_utils */ "./src/yape/yape_utils.ts");




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

/***/ "./src/yape/yape_utils.ts":
/*!********************************!*\
  !*** ./src/yape/yape_utils.ts ***!
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

/***/ "./src/yape06/yape06_utils.ts":
/*!************************************!*\
  !*** ./src/yape06/yape06_utils.ts ***!
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

module.exports = JSON.parse('{"name":"@webarkit/jsfeat-next","version":"0.6.2","description":"Typescript version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/src/index.d.ts","scripts":{"build-ts":"rimraf ./build && tsc && webpack --mode production","dev-ts":"rimraf ./build && tsc && webpack --mode development --progress --watch"},"repository":{"type":"git","url":"git+https://github.com/webarkit/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/webarkit/jsfeatNext/issues"},"homepage":"https://github.com/webarkit/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.19.3","@babel/plugin-transform-runtime":"^7.19.1","@babel/preset-env":"^7.19.3","babel-loader":"^8.2.5","rimraf":"^3.0.2","typescript":"^4.8.4","webpack":"^5.74.0","webpack-cli":"^4.10.0"},"dependencies":{"@babel/runtime":"^7.19.0","ts-loader":"^9.4.1"}}');

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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jsfeatNext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsfeatNext */ "./src/jsfeatNext.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  jsfeatNext: _jsfeatNext__WEBPACK_IMPORTED_MODULE_0__["default"]
});
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsOERBQWM7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmtDO0FBQzZCO0FBQ2hEO0FBQ2YsZUFBZSxzREFBTztBQUN0QjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMscUVBQXFCO0FBQzlCOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlFQUFlO0VBQ1o1dEIsVUFBVSxFQUFWQSxtREFBVUE7QUFERSxDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NhY2hlL2NhY2hlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2RhdGFfdHlwZS9kYXRhX3R5cGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9mYXN0X2Nvcm5lcnMvZmFzdF9wcml2YXRlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9jb252b2wudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL3Jlc2FtcGxlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvanNmZWF0TmV4dC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2tleXBvaW50X3Qva2V5cG9pbnRfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGdfYmFzZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21hdG1hdGgvbWF0bWF0aC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21hdHJpeF90L21hdHJpeF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL2JpdF9wYXR0ZXJuXzMxLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL3JlY3RpZnlfcGF0Y2gudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2X3V0aWxzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLy4uL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90J1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gICAgYWxsb2NhdGU6IChjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgICBnZXRfYnVmZmVyOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiBfcG9vbF9ub2RlX3Q7XG4gICAgcHV0X2J1ZmZlcjogKG5vZGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIGNhY2hlIGltcGxlbWVudHMgSUNhY2hlIHtcbiAgICBwcml2YXRlIF9wb29sX2hlYWQ6IF9wb29sX25vZGVfdDtcbiAgICBwcml2YXRlIF9wb29sX3RhaWw6IF9wb29sX25vZGVfdDtcbiAgICBwcml2YXRlIF9wb29sX3NpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfdGFpbCA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXBhY2l0eTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0X2J1ZmZlcihzaXplX2luX2J5dGVzOiBudW1iZXIpOiBfcG9vbF9ub2RlX3Qge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgSlNGRUFUX0NPTlNUQU5UUyA9IHtcbiAgICAvLyBDT05TVEFOVFNcbiAgICBFUFNJTE9OOiAwLjAwMDAwMDExOTIwOTI4OTYsXG4gICAgRkxUX01JTjogMUUtMzcsXG4gICAgVThfdDogMHgwMTAwLFxuICAgIFMzMl90OiAweDAyMDAsXG4gICAgRjMyX3Q6IDB4MDQwMCxcbiAgICBTNjRfdDogMHgwODAwLFxuICAgIEY2NF90OiAweDEwMDAsXG4gICAgQzFfdDogMHgwMSxcbiAgICBDMl90OiAweDAyLFxuICAgIEMzX3Q6IDB4MDMsXG4gICAgQzRfdDogMHgwNCxcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBDT0xPUl9SR0JBMkdSQVk6IDAsXG4gICAgQ09MT1JfUkdCMkdSQVk6IDEsXG4gICAgQ09MT1JfQkdSQTJHUkFZOiAyLFxuICAgIENPTE9SX0JHUjJHUkFZOiAzLFxuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgQk9YX0JMVVJfTk9TQ0FMRTogMHgwMSxcblxuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgU1ZEX1VfVDogMHgwMSxcbiAgICBTVkRfVl9UOiAweDAyLFxuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgVThDMV90OiAweDAxMDAgfCAweDAxLFxuICAgIFU4QzNfdDogMHgwMTAwIHwgMHgwMyxcbiAgICBVOEM0X3Q6IDB4MDEwMCB8IDB4MDQsXG5cbiAgICBGMzJDMV90OiAweDA0MDAgfCAweDAxLFxuICAgIEYzMkMyX3Q6IDB4MDQwMCB8IDB4MDIsXG4gICAgUzMyQzFfdDogMHgwMjAwIHwgMHgwMSxcbiAgICBTMzJDMl90OiAweDAyMDAgfCAweDAyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YV9UeXBlIHtcbiAgICBfZ2V0X2RhdGFfdHlwZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xuICAgIF9nZXRfY2hhbm5lbDogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xuICAgIF9nZXRfZGF0YV90eXBlX3NpemU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIGRhdGFfdHlwZSBpbXBsZW1lbnRzIElEYXRhX1R5cGUge1xuICAgIHByaXZhdGUgX2RhdGFfdHlwZV9zaXplOiBJbnQzMkFycmF5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhX3R5cGVfc2l6ZSA9IG5ldyBJbnQzMkFycmF5KFstMSwgMSwgNCwgLTEsIDQsIC0xLCAtMSwgLTEsIDgsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCA4XSk7O1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYpO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFfdHlwZV9zaXplWyh0eXBlICYgMHhGRjAwKSA+PiA4XTtcbiAgICB9XG59IiwiLy8gcHJpdmF0ZSBmdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfY21wX3Njb3JlXzE2KHNyYzogVWludDhBcnJheSwgb2ZmOiBudW1iZXIsIHBpeGVsOiBVaW50OEFycmF5IHwgSW50MzJBcnJheSwgZDogVWludDhBcnJheSB8IEludDMyQXJyYXksIHRocmVzaG9sZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICB2YXIgTiA9IDI1LCBrID0gMCwgdiA9IHNyY1tvZmZdO1xuICAgIHZhciBhMCA9IHRocmVzaG9sZCxhPTAsYjA9MCxiPTA7XG5cbiAgICBmb3IoIDsgayA8IE47ICsrayApIHtcbiAgICAgICAgZFtrXSA9IHYgLSBzcmNbb2ZmK3BpeGVsW2tdXTtcbiAgICB9XG5cbiAgICBmb3IoIGsgPSAwOyBrIDwgMTY7IGsgKz0gMiApIHtcbiAgICAgICAgYSA9IE1hdGgubWluKGRbaysxXSwgZFtrKzJdKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayszXSk7XG5cbiAgICAgICAgaWYoIGEgPD0gYTAgKSBjb250aW51ZTtcblxuICAgICAgICBhID0gTWF0aC5taW4oYSwgZFtrKzRdKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbays1XSk7XG4gICAgICAgIGEgPSBNYXRoLm1pbihhLCBkW2srNl0pO1xuICAgICAgICBhID0gTWF0aC5taW4oYSwgZFtrKzddKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbays4XSk7XG4gICAgICAgIGEwID0gTWF0aC5tYXgoYTAsIE1hdGgubWluKGEsIGRba10pKTtcbiAgICAgICAgYTAgPSBNYXRoLm1heChhMCwgTWF0aC5taW4oYSwgZFtrKzldKSk7XG4gICAgfVxuXG4gICAgYjAgPSAtYTA7XG4gICAgZm9yKCBrID0gMDsgayA8IDE2OyBrICs9IDIgKSB7XG4gICAgICAgIGIgPSBNYXRoLm1heChkW2srMV0sIGRbaysyXSk7XG4gICAgICAgIGIgPSBNYXRoLm1heChiLCBkW2srM10pO1xuICAgICAgICBiID0gTWF0aC5tYXgoYiwgZFtrKzRdKTtcbiAgICAgICAgYiA9IE1hdGgubWF4KGIsIGRbays1XSk7XG5cbiAgICAgICAgaWYoIGIgPj0gYjAgKSBjb250aW51ZTtcbiAgICAgICAgYiA9IE1hdGgubWF4KGIsIGRbays2XSk7XG4gICAgICAgIGIgPSBNYXRoLm1heChiLCBkW2srN10pO1xuICAgICAgICBiID0gTWF0aC5tYXgoYiwgZFtrKzhdKTtcbiAgICAgICAgYjAgPSBNYXRoLm1pbihiMCwgTWF0aC5tYXgoYiwgZFtrXSkpO1xuICAgICAgICBiMCA9IE1hdGgubWluKGIwLCBNYXRoLm1heChiLCBkW2srOV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLWIwLTE7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIF9jb252b2xfdTgoYnVmOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCBzcmNfZDogbnVtYmVyW10sIGRzdF9kOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbHRlcjogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSwga2VybmVsX3NpemU6IG51bWJlciwgaGFsZl9rZXJuZWw6IG51bWJlcikge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCBzcmNfZDogbnVtYmVyW10sIGRzdF9kOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbHRlcjogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSwga2VybmVsX3NpemU6IG51bWJlciwgaGFsZl9rZXJuZWw6IG51bWJlcikge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMC4wLCBzdW0xID0gMC4wLCBzdW0yID0gMC4wLCBzdW0zID0gMC4wLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwLjA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IG1hdHJpeF90IH0gZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QnXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJy4uL2NhY2hlL2NhY2hlJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4KHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIGNhY2hlOiBjYWNoZSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIGNhY2hlOiBjYWNoZSwgbnc6IG51bWJlciwgbmg6IG51bWJlcikge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIHNjYWxlID0gMS4wIC8gKHNjYWxlX3ggKiBzY2FsZV95KTtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLjAsIGJldGEgPSAwLjAsIGJldGExID0gMC4wO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5mMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuZjMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MSAtIGZzeDEpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZnN4MiAtIHN4MikgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzXSB8IDA7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzICsgMV0gfCAwO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKTtcbiAgICAgICAgICAgIGJldGExID0gMS4wIC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGJldGEpIDwgMWUtMykge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdO1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn0iLCJpbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJy4vY2FjaGUvY2FjaGUnXG5pbXBvcnQgeyBpbWdwcm9jIH0gZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MnXG5pbXBvcnQgeyBfcmVzYW1wbGUsIF9yZXNhbXBsZV91OCB9IGZyb20gJy4vaW1ncHJvYy9yZXNhbXBsZSdcbmltcG9ydCB7IF9jb252b2wsIF9jb252b2xfdTggfSBmcm9tICcuL2ltZ3Byb2MvY29udm9sJ1xuaW1wb3J0IHsgbGluYWxnIH0gZnJvbSAnLi9saW5hbGcvbGluYWxnJ1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy9saW5hbGdfYmFzZSdcbmltcG9ydCB7IGZhc3RfY29ybmVycyB9IGZyb20gJy4vZmFzdF9jb3JuZXJzL2Zhc3RfY29ybmVycydcbmltcG9ydCB7IF9jbXBfc2NvcmVfMTYgfSBmcm9tICcuL2Zhc3RfY29ybmVycy9mYXN0X3ByaXZhdGUnXG5pbXBvcnQgeyBtYXRoIH0gZnJvbSAnLi9tYXRoL21hdGgnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aCdcbmltcG9ydCB7IG1hdHJpeF90IH0gZnJvbSAnLi9tYXRyaXhfdC9tYXRyaXhfdCdcbmltcG9ydCB7IHB5cmFtaWRfdCB9IGZyb20gJy4vcHlyYW1pZF90L3B5cmFtaWRfdCdcbmltcG9ydCB7IHBvaW50X3QgfSBmcm9tICcuL3BvaW50X3QvcG9pbnRfdCdcbmltcG9ydCB7IGtleXBvaW50X3QgfSBmcm9tICcuL2tleXBvaW50X3Qva2V5cG9pbnRfdCdcbmltcG9ydCB7IG9yYiB9IGZyb20gJy4vb3JiL29yYidcbmltcG9ydCB7IGJpdF9wYXR0ZXJuXzMxIH0gZnJvbSAnLi9vcmIvYml0X3BhdHRlcm5fMzEnXG5pbXBvcnQgeyByZWN0aWZ5X3BhdGNoIH0gZnJvbSAnLi9vcmIvcmVjdGlmeV9wYXRjaCdcbmltcG9ydCB7IHlhcGUgfSBmcm9tICcuL3lhcGUveWFwZSdcbmltcG9ydCB7IGNvbXB1dGVfbGFwbGFjaWFuLCBoZXNzaWFuX21pbl9laWdlbl92YWx1ZSB9IGZyb20gJy4veWFwZTA2L3lhcGUwNl91dGlscydcbmltcG9ydCB7IHlhcGUwNiB9IGZyb20gJy4veWFwZTA2L3lhcGUwNidcbmltcG9ydCB7IHJhbnNhY19wYXJhbXNfdCB9IGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QnXG5pbXBvcnQgeyBtb3Rpb25fZXN0aW1hdG9yIH0gZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3InXG5pbXBvcnQgeyBvcHRpY2FsX2Zsb3dfbGsgfSBmcm9tICcuL29wdGljYWxfZmxvd19say9vcHRpY2FsX2Zsb3dfbGsnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpzZmVhdE5leHQge1xuICAgIHByaXZhdGUgZHQ6IElEYXRhX1R5cGU7XG4gICAgcHJvdGVjdGVkIGNhY2hlOiBjYWNoZTtcbiAgICBzdGF0aWMgY2FjaGU6IHR5cGVvZiBjYWNoZTtcbiAgICBzdGF0aWMgZmFzdF9jb3JuZXJzOiB0eXBlb2YgZmFzdF9jb3JuZXJzO1xuICAgIHN0YXRpYyBpbWdwcm9jOiB0eXBlb2YgaW1ncHJvYztcbiAgICBzdGF0aWMgbGluYWxnOiB0eXBlb2YgbGluYWxnO1xuICAgIHN0YXRpYyBtYXRoOiB0eXBlb2YgbWF0aDtcbiAgICBzdGF0aWMgbWF0bWF0aDogdHlwZW9mIG1hdG1hdGg7XG4gICAgc3RhdGljIG1hdHJpeF90OiB0eXBlb2YgbWF0cml4X3Q7XG4gICAgc3RhdGljIHB5cmFtaWRfdDogdHlwZW9mIHB5cmFtaWRfdDtcbiAgICBzdGF0aWMga2V5cG9pbnRfdDogdHlwZW9mIGtleXBvaW50X3Q7XG4gICAgc3RhdGljIHlhcGU6IHR5cGVvZiB5YXBlO1xuICAgIHN0YXRpYyB5YXBlMDY6IHR5cGVvZiB5YXBlMDY7XG4gICAgc3RhdGljIHJhbnNhY19wYXJhbXNfdDogdHlwZW9mIHJhbnNhY19wYXJhbXNfdDtcbiAgICBzdGF0aWMgYWZmaW5lMmQ6IHR5cGVvZiBhZmZpbmUyZDtcbiAgICBzdGF0aWMgaG9tb2dyYXBoeTJkOiB0eXBlb2YgaG9tb2dyYXBoeTJkO1xuICAgIHN0YXRpYyBtb3Rpb25fZXN0aW1hdG9yOiB0eXBlb2YgbW90aW9uX2VzdGltYXRvcjtcbiAgICBzdGF0aWMgb3B0aWNhbF9mbG93X2xrOiB0eXBlb2Ygb3B0aWNhbF9mbG93X2xrO1xuICAgIHN0YXRpYyBvcmI6IHR5cGVvZiBvcmI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG5cbiAgICAvLyBWRVJTSU9OXG4gICAgc3RhdGljIFZFUlNJT046IHN0cmluZyA9IHBrZy52ZXJzaW9uO1xuXG4gICAgLy8gQ09OU1RBTlRTXG4gICAgc3RhdGljIEVQU0lMT04gPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgc3RhdGljIEZMVF9NSU4gPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgc3RhdGljIFU4X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgc3RhdGljIFMzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5TMzJfdDtcbiAgICBzdGF0aWMgRjMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90O1xuICAgIHN0YXRpYyBTNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgQzFfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICBzdGF0aWMgQzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzJfdDtcbiAgICBzdGF0aWMgQzNfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzNfdDtcbiAgICBzdGF0aWMgQzRfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzRfdDtcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBzdGF0aWMgQ09MT1JfUkdCQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX1JHQjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuY2xhc3MgbW90aW9uX21vZGVsIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIFQwOiBtYXRyaXhfdDtcbiAgICBwdWJsaWMgVDE6IG1hdHJpeF90O1xuICAgIHB1YmxpYyBBdEE6IG1hdHJpeF90O1xuICAgIHB1YmxpYyBBdEI6IG1hdHJpeF90O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlQwID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLlQxID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QSA9IG5ldyBtYXRyaXhfdCg2LCA2LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEIgPSBuZXcgbWF0cml4X3QoNiwgMSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHNxcih4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG4gICAgLy8gZG9lcyBpc290cm9waWMgbm9ybWFsaXphdGlvblxuICAgIGlzb19ub3JtYWxpemVfcG9pbnRzKGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgVDA6IG51bWJlcltdLCBUMTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHM6IHBvaW50X3RbXSwgY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaiA9IDAsIGsgPSAwLCBpID0gKGNvdW50IC0gMSkgfCAwO1xuICAgICAgICB2YXIgZHgxID0gMC4wLCBkeTEgPSAwLjAsIGR4MiA9IDAuMCwgZHkyID0gMC4wO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGktdGggc2VsZWN0ZWQgcG9pbnQgZG9lcyBub3QgYmVsb25nXG4gICAgICAgIC8vIHRvIGEgbGluZSBjb25uZWN0aW5nIHNvbWUgcHJldmlvdXNseSBzZWxlY3RlZCBwb2ludHNcbiAgICAgICAgZm9yICg7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgIGR4MSA9IHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBkeTEgPSBwb2ludHNbal0ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7ICsraykge1xuICAgICAgICAgICAgICAgIGR4MiA9IHBvaW50c1trXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgZHkyID0gcG9pbnRzW2tdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmNsYXNzIGFmZmluZTJkIGV4dGVuZHMgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcnVuKGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgbW9kZWw6IG1hdHJpeF90LCBjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgcHggPSAwLjAsIHB5ID0gMC4wO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmNsYXNzIGhvbW9ncmFwaHkyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgcHVibGljIG1MdEw6IG1hdHJpeF90O1xuICAgIHB1YmxpYyBFdmVjOiBtYXRyaXhfdDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tTHRMID0gbmV3IG1hdHJpeF90KDksIDksIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkV2ZWMgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHJ1bihmcm9tOiBwb2ludF90W10sIHRvOiBwb2ludF90W10sIG1vZGVsOiBtYXRyaXhfdCwgY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgTHRMID0gdGhpcy5tTHRMLmRhdGEsIGV2ZCA9IHRoaXMuRXZlYy5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAuMCwgeSA9IDAuMCwgWCA9IDAuMCwgWSA9IDAuMDtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcganNmZWF0TmV4dC5saW5hbGcoKTtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcblxuICAgICAgICAvLyBub3JtXG4gICAgICAgIHZhciBzbXggPSAwLjAsIHNteSA9IDAuMCwgY214ID0gMC4wLCBjbXkgPSAwLjAsIHNNeCA9IDAuMCwgc015ID0gMC4wLCBjTXggPSAwLjAsIGNNeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNteCArPSB0b1tpXS54O1xuICAgICAgICAgICAgY215ICs9IHRvW2ldLnk7XG4gICAgICAgICAgICBjTXggKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY015ICs9IGZyb21baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNteCAvPSBjb3VudDsgY215IC89IGNvdW50O1xuICAgICAgICBjTXggLz0gY291bnQ7IGNNeSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc214ICs9IE1hdGguYWJzKHRvW2ldLnggLSBjbXgpO1xuICAgICAgICAgICAgc215ICs9IE1hdGguYWJzKHRvW2ldLnkgLSBjbXkpO1xuICAgICAgICAgICAgc014ICs9IE1hdGguYWJzKGZyb21baV0ueCAtIGNNeCk7XG4gICAgICAgICAgICBzTXkgKz0gTWF0aC5hYnMoZnJvbVtpXS55IC0gY015KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzbXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDsgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014OyBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7IHQwZFsxXSA9IDA7IHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7IHQwZFs0XSA9IHNNeTsgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDsgdDBkWzddID0gMDsgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7IHQxZFsxXSA9IDA7IHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDsgdDFkWzRdID0gMS4wIC8gc215OyB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7IHQxZFs3XSA9IDA7IHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKVxuICAgICAgICAgICAgICAgIEx0TFtpICogOSArIGpdID0gTHRMW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBfbGluYWxnLmVpZ2VuVlYodGhpcy5tTHRMLCB0aGlzLkV2ZWMpO1xuXG4gICAgICAgIG1kWzBdID0gZXZkWzcyXSwgbWRbMV0gPSBldmRbNzNdLCBtZFsyXSA9IGV2ZFs3NF07XG4gICAgICAgIG1kWzNdID0gZXZkWzc1XSwgbWRbNF0gPSBldmRbNzZdLCBtZFs1XSA9IGV2ZFs3N107XG4gICAgICAgIG1kWzZdID0gZXZkWzc4XSwgbWRbN10gPSBldmRbNzldLCBtZFs4XSA9IGV2ZFs4MF07XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIHNldCBib3R0b20gcmlnaHQgdG8gMS4wXG4gICAgICAgIHggPSAxLjAgLyBtZFs4XTtcbiAgICAgICAgbWRbMF0gKj0geDsgbWRbMV0gKj0geDsgbWRbMl0gKj0geDtcbiAgICAgICAgbWRbM10gKj0geDsgbWRbNF0gKj0geDsgbWRbNV0gKj0geDtcbiAgICAgICAgbWRbNl0gKj0geDsgbWRbN10gKj0geDsgbWRbOF0gPSAxLjA7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVycm9yKGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgbW9kZWw6IG1hdHJpeF90LCBlcnI6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHd3ID0gMC4wLCBkeCA9IDAuMCwgZHkgPSAwLjA7XG4gICAgICAgIHZhciBtID0gbW9kZWwuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB0MCA9IGZyb21baV07XG4gICAgICAgICAgICBwdDEgPSB0b1tpXTtcblxuICAgICAgICAgICAgd3cgPSAxLjAgLyAobVs2XSAqIHB0MC54ICsgbVs3XSAqIHB0MC55ICsgMS4wKTtcbiAgICAgICAgICAgIGR4ID0gKG1bMF0gKiBwdDAueCArIG1bMV0gKiBwdDAueSArIG1bMl0pICogd3cgLSBwdDEueDtcbiAgICAgICAgICAgIGR5ID0gKG1bM10gKiBwdDAueCArIG1bNF0gKiBwdDAueSArIG1bNV0pICogd3cgLSBwdDEueTtcbiAgICAgICAgICAgIGVycltpXSA9IChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tfc3Vic2V0KGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBzZWVtcyB0byByZWplY3QgZ29vZCBzdWJzZXRzIGFjdHVhbGx5XG4gICAgICAgIC8vaWYoIGhhdmVfY29sbGluZWFyX3BvaW50cyhmcm9tLCBjb3VudCkgfHwgaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKHRvLCBjb3VudCkgKSB7XG4gICAgICAgIC8vcmV0dXJuIGZhbHNlO1xuICAgICAgICAvL31cbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgaWYgKGNvdW50ID09IDQpIHtcbiAgICAgICAgICAgIHZhciBuZWdhdGl2ZSA9IDA7XG5cbiAgICAgICAgICAgIHZhciBmcDAgPSBmcm9tWzBdLCBmcDEgPSBmcm9tWzFdLCBmcDIgPSBmcm9tWzJdLCBmcDMgPSBmcm9tWzNdO1xuICAgICAgICAgICAgdmFyIHRwMCA9IHRvWzBdLCB0cDEgPSB0b1sxXSwgdHAyID0gdG9bMl0sIHRwMyA9IHRvWzNdO1xuXG4gICAgICAgICAgICAvLyBzZXQxXG4gICAgICAgICAgICB2YXIgQTExID0gZnAwLngsIEExMiA9IGZwMC55LCBBMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55LCBBMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQTMxID0gZnAyLngsIEEzMiA9IGZwMi55LCBBMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnksIEIxMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnksIEIyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBCMzEgPSB0cDIueCwgQjMyID0gdHAyLnksIEIzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICB2YXIgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0MlxuICAgICAgICAgICAgQTExID0gZnAxLngsIEExMiA9IGZwMS55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDEueCwgQjEyID0gdHAxLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQzXG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDRcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgaWYgKG5lZ2F0aXZlICE9IDAgJiYgbmVnYXRpdmUgIT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gYWxsIGdvb2RcbiAgICB9XG59XG5cbmpzZmVhdE5leHQuY2FjaGUgPSBjYWNoZTtcblxuanNmZWF0TmV4dC5weXJhbWlkX3QgPSBjbGFzcyBweXJhbWlkX3QgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbGV2ZWxzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwcml2YXRlIHB5cmRvd246IGFueTtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHM6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscyB8IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheShsZXZlbHMpO1xuICAgICAgICB2YXIgX2ltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgICAgIHRoaXMucHlyZG93biA9IF9pbWdwcm9jLnB5cmRvd247XG4gICAgfVxuICAgIGFsbG9jYXRlKHN0YXJ0X3c6IG51bWJlciwgc3RhcnRfaDogbnVtYmVyLCBkYXRhX3R5cGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IHRoaXMubGV2ZWxzO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBtYXRyaXhfdChzdGFydF93ID4+IGksIHN0YXJ0X2ggPj4gaSwgZGF0YV90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZChpbnB1dDogbWF0cml4X3QsIHNraXBfZmlyc3RfbGV2ZWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiOiBhbnkgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGlmICghc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICAgICAgdmFyIGogPSBpbnB1dC5jb2xzICogaW5wdXQucm93cztcbiAgICAgICAgICAgIHdoaWxlICgtLWogPj0gMCkge1xuICAgICAgICAgICAgICAgIGIuZGF0YVtqXSA9IGlucHV0LmRhdGFbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRoaXMuZGF0YVsxXTtcbiAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICBmb3IgKDsgaSA8IHRoaXMubGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5mYXN0X2Nvcm5lcnMgPSBjbGFzcyBmYXN0X2Nvcm5lcnMgZXh0ZW5kcyBqc2ZlYXROZXh0e1xuICAgIHByaXZhdGUgb2Zmc2V0czE2OiAgSW50MzJBcnJheTtcbiAgICBwdWJsaWMgX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0aHJlc2hvbGRfdGFiOiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBwaXhlbF9vZmY6IEludDMyQXJyYXk7XG4gICAgcHVibGljIHNjb3JlX2RpZmY6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub2Zmc2V0czE2ID0gbmV3IEludDMyQXJyYXkoWzAsIDMsIDEsIDMsIDIsIDIsIDMsIDEsIDMsIDAsIDMsIC0xLCAyLCAtMiwgMSwgLTMsIDAsIC0zLCAtMSwgLTMsIC0yLCAtMiwgLTMsIC0xLCAtMywgMCwgLTMsIDEsIC0yLCAyLCAtMSwgM10pO1xuICAgICAgICB0aGlzLnRocmVzaG9sZF90YWIgPSBuZXcgVWludDhBcnJheSg1MTIpO1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSAyMDtcbiAgICAgICAgdGhpcy5waXhlbF9vZmYgPSBuZXcgSW50MzJBcnJheSgyNSk7XG4gICAgICAgIHRoaXMuc2NvcmVfZGlmZiA9IG5ldyBJbnQzMkFycmF5KDI1KTtcbiAgICB9O1xuICAgIHNldF90aHJlc2hvbGQodGhyZXNob2xkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gTWF0aC5taW4oTWF0aC5tYXgodGhyZXNob2xkLCAwKSwgMjU1KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IC0yNTU7IGkgPD0gMjU1OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMudGhyZXNob2xkX3RhYlsoaSArIDI1NSldID0gKGkgPCAtdGhpcy5fdGhyZXNob2xkID8gMSA6IChpID4gdGhpcy5fdGhyZXNob2xkID8gMiA6IDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cbiAgICBkZXRlY3Qoc3JjOiBtYXRyaXhfdCwgY29ybmVyczogcG9pbnRfdFtdLCBib3JkZXI6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSAzOyB9XG5cbiAgICAgICAgdmFyIEsgPSA4LCBOID0gMjU7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBpPTAsIGo9MCwgaz0wLCB2dD0wLCB4PTAsIG0zPTA7XG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigzICogdyk7XG4gICAgICAgIHZhciBjcGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgodysxKSozKTw8Mik7XG4gICAgICAgIHZhciBidWYgPSBidWZfbm9kZS51ODtcbiAgICAgICAgdmFyIGNwYnVmID0gY3BidWZfbm9kZS5pMzI7XG4gICAgICAgIHZhciBwaXhlbCA9IHRoaXMucGl4ZWxfb2ZmO1xuICAgICAgICB2YXIgc2QgPSB0aGlzLnNjb3JlX2RpZmY7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcik7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKChoLTIpLCAoaC1ib3JkZXIpKTtcbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoMywgYm9yZGVyKTtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4oKHcgLSAzKSwgKHcgLSBib3JkZXIpKTtcbiAgICAgICAgdmFyIF9jb3VudCA9IDAsIGNvcm5lcnNfY250ID0gMCwgcHQ7XG4gICAgICAgIHZhciBzY29yZV9mdW5jID0gX2NtcF9zY29yZV8xNjtcbiAgICAgICAgdmFyIHRocmVzaF90YWIgPSB0aGlzLnRocmVzaG9sZF90YWI7XG4gICAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLl90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHY9MCx0YWI9MCxkPTAsbmNvcm5lcnM9MCxjb3JuZXJwb3M9MCxjdXJyPTAscHRyPTAscHJldj0wLHBwcmV2PTA7XG4gICAgICAgIHZhciBqcDE9MCxqbTE9MCxzY29yZT0wO1xuXG4gICAgICAgIHRoaXMuX2NtcF9vZmZzZXRzKHBpeGVsLCB3LCAxNik7XG5cbiAgICAgICAgLy8gbG9jYWwgdmFycyBhcmUgZmFzdGVyP1xuICAgICAgICB2YXIgcGl4ZWwwID0gcGl4ZWxbMF07XG4gICAgICAgIHZhciBwaXhlbDEgPSBwaXhlbFsxXTtcbiAgICAgICAgdmFyIHBpeGVsMiA9IHBpeGVsWzJdO1xuICAgICAgICB2YXIgcGl4ZWwzID0gcGl4ZWxbM107XG4gICAgICAgIHZhciBwaXhlbDQgPSBwaXhlbFs0XTtcbiAgICAgICAgdmFyIHBpeGVsNSA9IHBpeGVsWzVdO1xuICAgICAgICB2YXIgcGl4ZWw2ID0gcGl4ZWxbNl07XG4gICAgICAgIHZhciBwaXhlbDcgPSBwaXhlbFs3XTtcbiAgICAgICAgdmFyIHBpeGVsOCA9IHBpeGVsWzhdO1xuICAgICAgICB2YXIgcGl4ZWw5ID0gcGl4ZWxbOV07XG4gICAgICAgIHZhciBwaXhlbDEwID0gcGl4ZWxbMTBdO1xuICAgICAgICB2YXIgcGl4ZWwxMSA9IHBpeGVsWzExXTtcbiAgICAgICAgdmFyIHBpeGVsMTIgPSBwaXhlbFsxMl07XG4gICAgICAgIHZhciBwaXhlbDEzID0gcGl4ZWxbMTNdO1xuICAgICAgICB2YXIgcGl4ZWwxNCA9IHBpeGVsWzE0XTtcbiAgICAgICAgdmFyIHBpeGVsMTUgPSBwaXhlbFsxNV07XG5cbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgdyozOyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoaSA9IHN5OyBpIDwgZXk7ICsraSkge1xuICAgICAgICAgICAgcHRyID0gKChpICogdykgKyBzeCl8MDtcbiAgICAgICAgICAgIG0zID0gKGkgLSAzKSUzO1xuICAgICAgICAgICAgY3VyciA9IChtMyp3KXwwO1xuICAgICAgICAgICAgY29ybmVycG9zID0gKG0zKih3KzEpKXwwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7ICsraikgYnVmW2N1cnIral0gPSAwO1xuICAgICAgICAgICAgbmNvcm5lcnMgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggaSA8IChleSAtIDEpICkge1xuICAgICAgICAgICAgICAgIGogPSBzeDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IoIDsgaiA8IGV4OyArK2osICsrcHRyICkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gaW1nW3B0cl07XG4gICAgICAgICAgICAgICAgICAgIHRhYiA9ICggLSB2ICsgMjU1ICk7XG4gICAgICAgICAgICAgICAgICAgIGQgPSAoIHRocmVzaF90YWJbdGFiK2ltZ1twdHIrcGl4ZWwwXV0gfCB0aHJlc2hfdGFiW3RhYitpbWdbcHRyK3BpeGVsOF1dICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiggZCA9PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGQgJj0gKCB0aHJlc2hfdGFiW3RhYitpbWdbcHRyK3BpeGVsMl1dIHwgdGhyZXNoX3RhYlt0YWIraW1nW3B0citwaXhlbDEwXV0gKTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSAoIHRocmVzaF90YWJbdGFiK2ltZ1twdHIrcGl4ZWw0XV0gfCB0aHJlc2hfdGFiW3RhYitpbWdbcHRyK3BpeGVsMTJdXSApO1xuICAgICAgICAgICAgICAgICAgICBkICY9ICggdGhyZXNoX3RhYlt0YWIraW1nW3B0citwaXhlbDZdXSB8IHRocmVzaF90YWJbdGFiK2ltZ1twdHIrcGl4ZWwxNF1dICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiggZCA9PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGQgJj0gKCB0aHJlc2hfdGFiW3RhYitpbWdbcHRyK3BpeGVsMV1dIHwgdGhyZXNoX3RhYlt0YWIraW1nW3B0citwaXhlbDldXSApO1xuICAgICAgICAgICAgICAgICAgICBkICY9ICggdGhyZXNoX3RhYlt0YWIraW1nW3B0citwaXhlbDNdXSB8IHRocmVzaF90YWJbdGFiK2ltZ1twdHIrcGl4ZWwxMV1dICk7XG4gICAgICAgICAgICAgICAgICAgIGQgJj0gKCB0aHJlc2hfdGFiW3RhYitpbWdbcHRyK3BpeGVsNV1dIHwgdGhyZXNoX3RhYlt0YWIraW1nW3B0citwaXhlbDEzXV0gKTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSAoIHRocmVzaF90YWJbdGFiK2ltZ1twdHIrcGl4ZWw3XV0gfCB0aHJlc2hfdGFiW3RhYitpbWdbcHRyK3BpeGVsMTVdXSApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIGQgJiAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdnQgPSAodiAtIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGsgPSAwOyBrIDwgTjsgKytrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBpbWdbKHB0citwaXhlbFtrXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggPCB2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK19jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9jb3VudCA+IEsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25jb3JuZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BidWZbY29ybmVycG9zK25jb3JuZXJzXSA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbY3VycitqXSA9IHNjb3JlX2Z1bmMoaW1nLCBwdHIsIHBpeGVsLCBzZCwgdGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIGQgJiAyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdnQgPSAodiArIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGsgPSAwOyBrIDwgTjsgKytrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBpbWdbKHB0citwaXhlbFtrXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggPiB2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK19jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9jb3VudCA+IEsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25jb3JuZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BidWZbY29ybmVycG9zK25jb3JuZXJzXSA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbY3VycitqXSA9IHNjb3JlX2Z1bmMoaW1nLCBwdHIsIHBpeGVsLCBzZCwgdGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3BidWZbY29ybmVycG9zK3ddID0gbmNvcm5lcnM7XG4gICAgXG4gICAgICAgICAgICBpZiAoIGkgPT0gc3kgKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG0zID0gKGkgLSA0ICsgMyklMztcbiAgICAgICAgICAgIHByZXYgPSAobTMqdyl8MDtcbiAgICAgICAgICAgIGNvcm5lcnBvcyA9IChtMyoodysxKSl8MDtcbiAgICAgICAgICAgIG0zID0gKGkgLSA1ICsgMyklMztcbiAgICAgICAgICAgIHBwcmV2ID0gKG0zKncpfDA7XG5cbiAgICAgICAgICAgIG5jb3JuZXJzID0gY3BidWZbY29ybmVycG9zK3ddO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IoIGsgPSAwOyBrIDwgbmNvcm5lcnM7ICsrayApIHtcbiAgICAgICAgICAgICAgICBqID0gY3BidWZbY29ybmVycG9zK2tdO1xuICAgICAgICAgICAgICAgIGpwMSA9IChqKzEpfDA7XG4gICAgICAgICAgICAgICAgam0xID0gKGotMSl8MDtcbiAgICAgICAgICAgICAgICBzY29yZSA9IGJ1ZltwcmV2K2pdO1xuICAgICAgICAgICAgICAgIGlmKCAoc2NvcmUgPiBidWZbcHJlditqcDFdICYmIHNjb3JlID4gYnVmW3ByZXYram0xXSAmJlxuICAgICAgICAgICAgICAgICAgICBzY29yZSA+IGJ1ZltwcHJlditqbTFdICYmIHNjb3JlID4gYnVmW3BwcmV2K2pdICYmIHNjb3JlID4gYnVmW3BwcmV2K2pwMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPiBidWZbY3VycitqbTFdICYmIHNjb3JlID4gYnVmW2N1cnIral0gJiYgc2NvcmUgPiBidWZbY3VycitqcDFdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBjb3JuZXJcbiAgICAgICAgICAgICAgICAgICAgcHQgPSBjb3JuZXJzW2Nvcm5lcnNfY250XTtcbiAgICAgICAgICAgICAgICAgICAgcHQueCA9IGosIHB0LnkgPSAoaS0xKSwgcHQuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgICAgICAgICAgY29ybmVyc19jbnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gLy8geSBsb29wXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihjcGJ1Zl9ub2RlKTtcbiAgICAgICAgcmV0dXJuIGNvcm5lcnNfY250O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NtcF9vZmZzZXRzKHBpeGVsOiBVaW50OEFycmF5IHxJbnQzMkFycmF5LCBzdGVwOiBudW1iZXIsIHBhdHRlcm5fc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgdmFyIG9mZnNldHMgPSB0aGlzLm9mZnNldHMxNjtcbiAgICAgICAgZm9yKCA7IGsgPCBwYXR0ZXJuX3NpemU7ICsrayApIHtcbiAgICAgICAgICAgIHBpeGVsW2tdID0gb2Zmc2V0c1trPDwxXSArIG9mZnNldHNbKGs8PDEpKzFdICogc3RlcDtcbiAgICAgICAgfVxuICAgICAgICBmb3IoIDsgayA8IDI1OyArK2sgKSB7XG4gICAgICAgICAgICBwaXhlbFtrXSA9IHBpeGVsW2sgLSBwYXR0ZXJuX3NpemVdO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBjbGFzcyBpbWdwcm9jIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfTtcbiAgICBncmF5c2NhbGUoc3JjOiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGRzdDogbWF0cml4X3QsIGNvZGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIG53OiBudW1iZXIsIG5oOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGggPSBzcmMucm93cywgdyA9IHNyYy5jb2xzO1xuICAgICAgICBpZiAoaCA+IG5oICYmIHcgPiBudykge1xuICAgICAgICAgICAgZHN0LnJlc2l6ZShudywgbmgsIHNyYy5jaGFubmVsKTtcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBmYXN0IGFsdGVybmF0aXZlIChmaXggcG9pbnQgc2NhbGUsIDB4MTAwIHRvIGF2b2lkIG92ZXJmbG93KVxuICAgICAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGRzdC50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGggKiB3IC8gKG5oICogbncpIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGVfdTgoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZShzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBib3hfYmx1cl9ncmF5KHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIHJhZGl1czogbnVtYmVyLCBvcHRpb25zOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cbiAgICBnYXVzc2lhbl9ibHVyKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIGtlcm5lbF9zaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGpzZmVhdG1hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZzogbWF0cml4X3QsIHJob19yZXM6IG51bWJlciwgdGhldGFfcmVzOiBudW1iZXIsIHRocmVzaG9sZDogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPjx1bmtub3duPihhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMikpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFnZSA0LiBzdG9yZSB0aGUgZmlyc3QgbWluKHRvdGFsLGxpbmVzTWF4KSBsaW5lcyB0byB0aGUgb3V0cHV0IGJ1ZmZlclxuICAgICAgICB2YXIgbGluZXNNYXggPSBNYXRoLm1pbihudW1hbmdsZSAqIG51bXJobywgX3NvcnRfYnVmLmxlbmd0aCk7XG4gICAgICAgIHZhciBzY2FsZSA9IDEuMCAvIChudW1yaG8gKyAyKTtcbiAgICAgICAgdmFyIGxpbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNNYXg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9zb3J0X2J1ZltpXTtcbiAgICAgICAgICAgIHZhciBuID0gTWF0aC5mbG9vcihpZHggKiBzY2FsZSkgLSAxO1xuICAgICAgICAgICAgdmFyIHIgPSBpZHggLSAobiArIDEpICogKG51bXJobyArIDIpIC0gMTtcbiAgICAgICAgICAgIHZhciBscmhvID0gKHIgLSAobnVtcmhvIC0gMSkgKiAwLjUpICogcmhvX3JlcztcbiAgICAgICAgICAgIHZhciBsYW5nbGUgPSBuICogdGhldGFfcmVzO1xuICAgICAgICAgICAgbGluZXMucHVzaChbbHJobywgbGFuZ2xlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBweXJkb3duKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIHN4OiBudW1iZXIsIHN5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIGJiZlxuICAgICAgICBpZiAodHlwZW9mIHN4ID09PSBcInVuZGVmaW5lZFwiKSB7IHN4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN5ID09PSBcInVuZGVmaW5lZFwiKSB7IHN5ID0gMDsgfVxuXG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHcyID0gdyA+PiAxLCBoMiA9IGggPj4gMTtcbiAgICAgICAgdmFyIF93MiA9IHcyIC0gKHN4IDw8IDEpLCBfaDIgPSBoMiAtIChzeSA8PCAxKTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgc3B0ciA9IHN4ICsgc3kgKiB3LCBzbGluZSA9IDAsIGRwdHIgPSAwLCBkbGluZSA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3MiwgaDIsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgX2gyOyArK3kpIHtcbiAgICAgICAgICAgIHNsaW5lID0gc3B0cjtcbiAgICAgICAgICAgIGRsaW5lID0gZHB0cjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gX3cyIC0gMjsgeCArPSAyLCBkbGluZSArPSAyLCBzbGluZSArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lICsgMV0gPSAoc3JjX2Rbc2xpbmUgKyAyXSArIHNyY19kW3NsaW5lICsgM10gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHcgKyAyXSArIHNyY19kW3NsaW5lICsgdyArIDNdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgX3cyOyArK3gsICsrZGxpbmUsIHNsaW5lICs9IDIpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHRyICs9IHcgPDwgMTtcbiAgICAgICAgICAgIGRwdHIgKz0gdzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNjaGFycl9kZXJpdmF0aXZlcyhzcmM6IG1hdHJpeF90LCBkc3Q6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZHN0ZXAgPSB3IDw8IDEsIHggPSAwLCB5ID0gMCwgeDEgPSAwLCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgICAgICB2YXIgc3JvdzAgPSAwLCBzcm93MSA9IDAsIHNyb3cyID0gMCwgZHJvdyA9IDA7XG4gICAgICAgIHZhciB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICB2YXIgYnVmMF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG4gICAgICAgIHZhciBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4XSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeCArIDFdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsreDEpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4XSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07IHRyb3cwW3hdID0gdHJvdzBbd107XG4gICAgICAgICAgICB0cm93MVswXSA9IHRyb3cxWzFdOyB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgYSA9IHRyb3cxW3ggKyAyXSwgYiA9IHRyb3cxW3ggKyAxXSwgYyA9IHRyb3cxW3ggKyAzXSwgZCA9IHRyb3cxW3ggKyA0XSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IHRyb3cwW3ggKyAyXSwgZiA9IHRyb3cwW3ggKyAzXTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoYSArIHRyb3cxW3hdICsgYiAqIDIpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChmIC0gdHJvdzBbeCArIDFdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoYyArIGIgKyBhICogMik7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDRdIC0gZSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGQgKyBhICsgYyAqIDIpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNV0gLSBmKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzFbeCArIDVdICsgYyArIGQgKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyAyXSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzFbeCArIDJdICsgdHJvdzFbeF0gKyB0cm93MVt4ICsgMV0gKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIC8vIHBsZWFzZSBub3RlOiBcbiAgICAvLyBkc3RfKHR5cGUpIHNpemUgc2hvdWxkIGJlIGNvbHMgPSBzcmMuY29scysxLCByb3dzID0gc3JjLnJvd3MrMVxuICAgIGNvbXB1dGVfaW50ZWdyYWxfaW1hZ2Uoc3JjOiBtYXRyaXhfdCwgZHN0X3N1bTogbnVtYmVyW10sIGRzdF9zcXN1bTogbnVtYmVyW10sIGRzdF90aWx0ZWQ6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHZhciB3MCA9IHNyYy5jb2xzIHwgMCwgaDAgPSBzcmMucm93cyB8IDAsIHNyY19kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciB3MSA9ICh3MCArIDEpIHwgMDtcbiAgICAgICAgdmFyIHMgPSAwLCBzMiA9IDAsIHAgPSAwLCBwdXAgPSAwLCBpID0gMCwgaiA9IDAsIHYgPSAwLCBrID0gMDtcblxuICAgICAgICBpZiAoZHN0X3N1bSAmJiBkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwLCBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHN0X3RpbHRlZCkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwICsgMV0gPSBzcmNfZFtrICsgMV0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyB3MCkgfCAwLCBwdXAgPSB3MDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoMDsgKytpLCBwICs9IHcxLCBwdXAgKz0gdzEpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gdzAgLSAxOyBqID4gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgcCA9IGogKyBoMCAqIHcxLCBwdXAgPSBwIC0gdzE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaDA7IGkgPiAwOyAtLWksIHAgLT0gdzEsIHB1cCAtPSB3MSkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFsaXplX2hpc3RvZ3JhbShzcmM6IG1hdHJpeF90LCBkc3Q6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YSwgc2l6ZSA9IHcgKiBoO1xuICAgICAgICB2YXIgaSA9IDAsIHByZXYgPSAwLCBoaXN0MCwgbm9ybTtcblxuICAgICAgICB2YXIgaGlzdDBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigyNTYgPDwgMik7XG4gICAgICAgIGhpc3QwID0gaGlzdDBfbm9kZS5pMzI7XG4gICAgICAgIGZvciAoOyBpIDwgMjU2OyArK2kpIGhpc3QwW2ldID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgKytoaXN0MFtzcmNfZFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gaGlzdDBbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgcHJldiA9IGhpc3QwW2ldICs9IHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBub3JtID0gMjU1IC8gc2l6ZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgZHN0X2RbaV0gPSAoaGlzdDBbc3JjX2RbaV1dICogbm9ybSArIDAuNSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihoaXN0MF9ub2RlKTtcbiAgICB9XG4gICAgY2Fubnkoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgbG93X3RocmVzaDogbnVtYmVyLCBoaWdoX3RocmVzaDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBqOiBudW1iZXIgPSAwLCBncmFkID0gMCwgdzIgPSB3IDw8IDEsIF9ncmFkID0gMCwgc3VwcHJlc3MgPSAwLCBmID0gMCwgeCA9IDAsIHkgPSAwLCBzID0gMDtcbiAgICAgICAgdmFyIHRnMjJ4ID0gMCwgdGc2N3ggPSAwO1xuXG4gICAgICAgIC8vIGNhY2hlIGJ1ZmZlcnNcbiAgICAgICAgdmFyIGR4ZHlfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaCAqIHcyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgzICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBtYXBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoKGggKyAyKSAqICh3ICsgMikpIDw8IDIpO1xuICAgICAgICB2YXIgc3RhY2tfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaCAqIHcpIDw8IDIpO1xuXG5cbiAgICAgICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIG1hcCA9IG1hcF9ub2RlLmkzMjtcbiAgICAgICAgdmFyIHN0YWNrID0gc3RhY2tfbm9kZS5pMzI7XG4gICAgICAgIHZhciBkeGR5ID0gZHhkeV9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHlfbSA9IG5ldyBtYXRyaXhfdCh3LCBoLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGR4ZHlfbm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHJvdzAgPSAxLCByb3cxID0gKHcgKyAyICsgMSkgfCAwLCByb3cyID0gKDIgKiAodyArIDIpICsgMSkgfCAwLCBtYXBfdyA9ICh3ICsgMikgfCAwLCBtYXBfaTogbnVtYmVyID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKE51bWJlcihtYXBbbWFwX2kgKyBqXSA9PSAyKSAqIDB4ZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJlZSBidWZmZXJzXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkeGR5X25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobWFwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoc3RhY2tfbm9kZSk7XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgbWF0cml4X3RcbiAgICB3YXJwX3BlcnNwZWN0aXZlKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIHRyYW5zZm9ybTogbWF0cml4X3QsIGZpbGxfdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzIHwgMCwgc3JjX2hlaWdodCA9IHNyYy5yb3dzIHwgMCwgZHN0X3dpZHRoID0gZHN0LmNvbHMgfCAwLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3MgfCAwO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCB4czAgPSAwLjAsIHlzMCA9IDAuMCwgd3MgPSAwLjAsIHNjID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV0sXG4gICAgICAgICAgICBtMjAgPSB0ZFs2XSwgbTIxID0gdGRbN10sIG0yMiA9IHRkWzhdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4czAgPSBtMDEgKiB5ICsgbTAyLFxuICAgICAgICAgICAgICAgIHlzMCA9IG0xMSAqIHkgKyBtMTIsXG4gICAgICAgICAgICAgICAgd3MgPSBtMjEgKiB5ICsgbTIyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzMCArPSBtMDAsIHlzMCArPSBtMTAsIHdzICs9IG0yMCkge1xuICAgICAgICAgICAgICAgIHNjID0gMS4wIC8gd3M7XG4gICAgICAgICAgICAgICAgeHMgPSB4czAgKiBzYywgeXMgPSB5czAgKiBzYztcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDAsIGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmICh4cyA+IDAgJiYgeXMgPiAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBNYXRoLm1heCh4cyAtIGl4cywgMC4wKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IE1hdGgubWF4KHlzIC0gaXlzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSAoc3JjX3dpZHRoICogaXlzICsgaXhzKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgb3IgMngzIG1hdHJpeF90IG9ubHkgZmlyc3QgNiB2YWx1ZXMgcmVmZXJlbmNlZFxuICAgIHdhcnBfYWZmaW5lKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIHRyYW5zZm9ybTogbWF0cml4X3QsIGZpbGxfdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgZGF0YTogYW55W10gfSwgZHN0OiBudW1iZXJbXSk6IHZvaWQge1xuICAgICAgICB2YXIgciwgZywgYiwgajtcbiAgICAgICAgdmFyIGkgPSBzcmMud2lkdGggKiBzcmMuaGVpZ2h0O1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBqID0gaSAqIDQ7XG4gICAgICAgICAgICByID0gc3JjLmRhdGFbal07XG4gICAgICAgICAgICBnID0gc3JjLmRhdGFbaiArIDFdO1xuICAgICAgICAgICAgYiA9IHNyYy5kYXRhW2ogKyAyXTtcbiAgICAgICAgICAgIGlmICgociA+IDk1KSAmJiAoZyA+IDQwKSAmJiAoYiA+IDIwKVxuICAgICAgICAgICAgICAgICYmIChyID4gZykgJiYgKHIgPiBiKVxuICAgICAgICAgICAgICAgICYmIChyIC0gTWF0aC5taW4oZywgYikgPiAxNSlcbiAgICAgICAgICAgICAgICAmJiAoTWF0aC5hYnMociAtIGcpID4gMTUpKSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMjU1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5qc2ZlYXROZXh0Lm1hdGggPSBjbGFzcyBtYXRoIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBxc29ydF9zdGFjazogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIsIGtlcm5lbDogRmxvYXQzMkFycmF5IHwgSW50MzJBcnJheSwgZGF0YV90eXBlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsOiBtYXRyaXhfdCwgc3JjX3gwOiBudW1iZXIsIHNyY195MDogbnVtYmVyLCBkc3RfeDA6IG51bWJlciwgZHN0X3kwOiBudW1iZXIsXG4gICAgICAgIHNyY194MTogbnVtYmVyLCBzcmNfeTE6IG51bWJlciwgZHN0X3gxOiBudW1iZXIsIGRzdF95MTogbnVtYmVyLFxuICAgICAgICBzcmNfeDI6IG51bWJlciwgc3JjX3kyOiBudW1iZXIsIGRzdF94MjogbnVtYmVyLCBkc3RfeTI6IG51bWJlcixcbiAgICAgICAgc3JjX3gzOiBudW1iZXIsIHNyY195MzogbnVtYmVyLCBkc3RfeDM6IG51bWJlciwgZHN0X3kzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheTogbnVtYmVyW10sIGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIsIGNtcDogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXk6IG51bWJlcltdLCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHc7XG4gICAgICAgIHZhciBtaWRkbGUgPSAwLCBsbCA9IDAsIGhoID0gMCwgbWVkaWFuID0gKGxvdyArIGhpZ2gpID4+IDE7XG4gICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICBpZiAoaGlnaCA8PSBsb3cpIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgaWYgKGhpZ2ggPT0gKGxvdyArIDEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2xvd10gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWlkZGxlID0gKChsb3cgKyBoaWdoKSA+PiAxKTtcbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W2xvd10gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2xvd10pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxsID0gKGxvdyArIDEpO1xuICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgYXJyYXlbbGxdID0gdztcbiAgICAgICAgICAgIGhoID0gaGlnaDtcbiAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgZG8gKytsbDsgd2hpbGUgKGFycmF5W2xvd10gPiBhcnJheVtsbF0pO1xuICAgICAgICAgICAgICAgIGRvIC0taGg7IHdoaWxlIChhcnJheVtoaF0gPiBhcnJheVtsb3ddKTtcbiAgICAgICAgICAgICAgICBpZiAoaGggPCBsbCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgICAgICBhcnJheVtsbF0gPSBhcnJheVtoaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICBpZiAoaGggPD0gbWVkaWFuKVxuICAgICAgICAgICAgICAgIGxvdyA9IGxsO1xuICAgICAgICAgICAgZWxzZSBpZiAoaGggPj0gbWVkaWFuKVxuICAgICAgICAgICAgICAgIGhpZ2ggPSAoaGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGNsYXNzIGxpbmFsZyBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBtYXRtYXRoOiBtYXRtYXRoO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQTogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSwgYXN0ZXA6IG51bWJlciwgVzogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSwgVjogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSwgdnN0ZXA6IG51bWJlciwgbjogbnVtYmVyKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBtID0gMCwgbCA9IDAsIGlkeCA9IDAsIF9pbiA9IDAsIF9pbjIgPSAwO1xuICAgICAgICB2YXIgaXRlcnMgPSAwLCBtYXhfaXRlciA9IG4gKiBuICogMzA7XG4gICAgICAgIHZhciBtdiA9IDAuMCwgdmFsID0gMC4wLCBwID0gMC4wLCB5ID0gMC4wLCB0ID0gMC4wLCBzID0gMC4wLCBjID0gMC4wLCBhMCA9IDAuMCwgYjAgPSAwLjA7XG5cbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgdmFyIGluZEMgPSBpbmRDX2J1ZmYuaTMyO1xuXG4gICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpICogdnN0ZXA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSAqIGtdO1xuICAgICAgICAgICAgaWYgKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IGsgKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgbV0pLCBpID0gayArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFba10pLCBpID0gMTsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gMSkgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yIChrID0gMCwgbXYgPSBNYXRoLmFicyhBW2luZFJbMF1dKSwgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gaW5kUltrXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcblxuICAgICAgICAgICAgeSA9IChXW2xdIC0gV1trXSkgKiAwLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0IC8gcztcbiAgICAgICAgICAgIHMgPSBwIC8gczsgdCA9IChwIC8gdCkgKiBwO1xuICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcblxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IGlkeCArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIG1dKSwgaSA9IGlkeCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtpZHhdKSwgaSA9IDE7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kQ1tpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbbV0gPCBXW2ldKVxuICAgICAgICAgICAgICAgICAgICBtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFYsIHZzdGVwICogbSArIGksIHZzdGVwICogayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQ6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBGbG9hdDY0QXJyYXksIGFzdGVwOiBudW1iZXIsIF9XOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5IHwgRmxvYXQ2NEFycmF5LCBWdDogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSwgdnN0ZXA6IG51bWJlciwgbTogbnVtYmVyLCBuOiBudW1iZXIsIG4xOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIDIuMDtcbiAgICAgICAgdmFyIG1pbnZhbCA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIGl0ZXIgPSAwLCBtYXhfaXRlciA9IE1hdGgubWF4KG0sIDMwKTtcbiAgICAgICAgdmFyIEFpID0gMCwgQWogPSAwLCBWaSA9IDAsIFZqID0gMCwgY2hhbmdlZCA9IDA7XG4gICAgICAgIHZhciBjID0gMC4wLCBzID0gMC4wLCB0ID0gMC4wO1xuICAgICAgICB2YXIgdDAgPSAwLjAsIHQxID0gMC4wLCBzZCA9IDAuMCwgYmV0YSA9IDAuMCwgZ2FtbWEgPSAwLjAsIGRlbHRhID0gMC4wLCBhID0gMC4wLCBwID0gMC4wLCBiID0gMC4wO1xuICAgICAgICB2YXIgc2VlZCA9IDB4MTIzNDtcbiAgICAgICAgdmFyIHZhbCA9IDAuMCwgdmFsMCA9IDAuMCwgYXN1bSA9IDAuMDtcblxuICAgICAgICB2YXIgV19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciBXID0gV19idWZmLmY2NDtcblxuICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yIChrID0gMCwgc2QgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IHNkO1xuXG4gICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGtdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsgaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBtYXhfaXRlcjsgaXRlcisrKSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gMDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBBaSA9IChpICogYXN0ZXApIHwgMCwgQWogPSAoaiAqIGFzdGVwKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBXW2ldLCBwID0gMCwgYiA9IFdbal07XG5cbiAgICAgICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWldICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsgMV0gKiBBdFtBaiArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIGtdICogQXRbQWogKyBrXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzICogTWF0aC5zcXJ0KGEgKiBiKSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcCAqPSAyLjA7XG4gICAgICAgICAgICAgICAgICAgIGJldGEgPSBhIC0gYiwgZ2FtbWEgPSBoeXBvdChwLCBiZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJldGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IChnYW1tYSAtIGJldGEpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChkZWx0YSAvIGdhbW1hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAocCAvIChnYW1tYSAqIHMgKiAyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBNYXRoLnNxcnQoKGdhbW1hICsgYmV0YSkgLyAoZ2FtbWEgKiAyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAocCAvIChnYW1tYSAqIGMgKiAyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSAwLjAsIGIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAgICAgayA9IDI7IC8vIHVucm9sbFxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaV0gKyBzICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWldICsgYyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWldID0gdDA7IEF0W0FqXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7IGIgKz0gdDEgKiB0MTtcblxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIDFdICsgcyAqIEF0W0FqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIDFdICsgYyAqIEF0W0FqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpICsgMV0gPSB0MDsgQXRbQWogKyAxXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7IGIgKz0gdDEgKiB0MTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyBrXSArIHMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsga10gKyBjICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0W0FpICsga10gPSB0MDsgQXRbQWogKyBrXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7IGIgKz0gdDEgKiB0MTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFdbaV0gPSBhOyBXW2pdID0gYjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpID0gKGkgKiB2c3RlcCkgfCAwLCBWaiA9IChqICogdnN0ZXApIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaV0gKyBzICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpXSArIGMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaV0gPSB0MDsgVnRbVmpdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsgMV0gKyBzICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIDFdICsgYyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaSArIDFdID0gdDA7IFZ0W1ZqICsgMV0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIGtdICsgcyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsga10gKyBjICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdFtWaSArIGtdID0gdDA7IFZ0W1ZqICsga10gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFuZ2VkID09IDApIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yIChrID0gMCwgc2QgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IE1hdGguc3FydChzZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW2pdIDwgV1trXSlcbiAgICAgICAgICAgICAgICAgICAgaiA9IGs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPSBqKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBpLCBqLCBzZCk7XG4gICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoQXQsIGkgKiBhc3RlcCArIGssIGogKiBhc3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWdCwgaSAqIHZzdGVwICsgaywgaiAqIHZzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBfV1tpXSA9IFdbaV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVZ0KSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuMTsgaSsrKSB7XG5cbiAgICAgICAgICAgIHNkID0gaSA8IG4gPyBXW2ldIDogMDtcblxuICAgICAgICAgICAgd2hpbGUgKHNkIDw9IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBhIHplcm8gc2luZ3VsYXIgdmFsdWUsIHRoZW4gaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb3JyZXNwb25kaW5nIGxlZnQgc2luZ3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgLy8gd2UgZ2VuZXJhdGUgYSByYW5kb20gdmVjdG9yLCBwcm9qZWN0IGl0IHRvIHRoZSBwcmV2aW91c2x5IGNvbXB1dGVkIGxlZnQgc2luZ3VsYXIgdmVjdG9ycyxcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdCB0aGUgcHJvamVjdGlvbiBhbmQgbm9ybWFsaXplIHRoZSBkaWZmZXJlbmNlLlxuICAgICAgICAgICAgICAgIHZhbDAgPSAoMS4wIC8gbSk7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWVkID0gKHNlZWQgKiAyMTQwMTMgKyAyNTMxMDExKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gKCgoc2VlZCA+PiAxNikgJiAweDdmZmYpICYgMjU2KSAhPSAwID8gdmFsMCA6IC12YWwwO1xuICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpdGVyID0gMDsgaXRlciA8IDI7IGl0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2QgKz0gQXRbaSAqIGFzdGVwICsga10gKiBBdFtqICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChBdFtpICogYXN0ZXAgKyBrXSAtIHNkICogQXRbaiAqIGFzdGVwICsga10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3VtICs9IE1hdGguYWJzKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IGFzdW0gPyAxLjAgLyBhc3VtIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBhc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcyA9ICgxLjAgLyBzZCk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgIH1cblxuICAgIGx1X3NvbHZlKEE6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IG51bWJlciB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBwID0gMSwgYXN0ZXAgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB0LCBhbHBoYSwgZCwgcztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXN0ZXA7IGkrKykge1xuICAgICAgICAgICAgayA9IGk7XG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbaiAqIGFzdGVwICsgaV0pID4gTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGQUlMRURcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgIT0gaSkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAoYWQsIGkgKiBhc3RlcCArIGosIGsgKiBhc3RlcCArIGosIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3YXAoYmQsIGksIGssIHQpO1xuICAgICAgICAgICAgICAgIHAgPSAtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IC0xLjAgLyBhZFtpICogYXN0ZXAgKyBpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhZFtqICogYXN0ZXAgKyBpXSAqIGQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWRbaiAqIGFzdGVwICsga10gKz0gYWxwaGEgKiBhZFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBiZFtqXSArPSBhbHBoYSAqIGJkW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZFtpICogYXN0ZXAgKyBpXSA9IC1kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gYXN0ZXAgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgcyA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcyAtPSBhZFtpICogYXN0ZXAgKyBrXSAqIGJkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSBzICogYWRbaSAqIGFzdGVwICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTsgLy8gT0tcbiAgICB9XG5cbiAgICBjaG9sZXNreV9zb2x2ZShBOiBtYXRyaXhfdCwgQjogbWF0cml4X3QpOiBudW1iZXIge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQTogYW55LCBXOiBtYXRyaXhfdCwgVTogbWF0cml4X3QsIFY6IG1hdHJpeF90LCBvcHRpb25zOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9O1xuICAgICAgICB2YXIgYXQgPSAwLCBpID0gMCwgaiA9IDAsIF9tID0gQS5yb3dzLCBfbiA9IEEuY29scywgbSA9IF9tLCBuID0gX247XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDsgLy8gd2Ugb25seSB3b3JrIHdpdGggc2luZ2xlIGNoYW5uZWwgXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQTogbWF0cml4X3QsIFg6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpOiBtYXRyaXhfdCwgQTogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQTogbWF0cml4X3QsIHZlY3RzOiBtYXRyaXhfdCwgdmFscz86IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpSW1wbChhX210LmRhdGEsIG4sIHdfbXQuZGF0YSwgdmVjdHMgPyB2ZWN0cy5kYXRhIDogbnVsbCwgbiwgbik7XG5cbiAgICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHMuZGF0YVtuXSA9IHdfbXQuZGF0YVtuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQub3JiID0gY2xhc3Mgb3JiIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIGJpdF9wYXR0ZXJuXzMxXzogSW50MzJBcnJheVxuICAgIHB1YmxpYyBIOiBtYXRyaXhfdFxuICAgIHB1YmxpYyBwYXRjaF9pbWc6IG1hdHJpeF90XG4gICAgcHVibGljIGltZ3Byb2M6IGltZ3Byb2M7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpO1xuICAgIH1cblxuICAgIGRlc2NyaWJlKHNyYzogbWF0cml4X3QsIGNvcm5lcnM6IGtleXBvaW50X3RbXSwgY291bnQ6IG51bWJlciwgZGVzY3JpcHRvcnM6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBERVNDUl9TSVpFID0gMzI7IC8vIGJ5dGVzO1xuICAgICAgICB2YXIgaSA9IDAsIGIgPSAwLCBweCA9IDAuMCwgcHkgPSAwLjAsIGFuZ2xlID0gMC4wO1xuICAgICAgICB2YXIgdDAgPSAwLCB0MSA9IDAsIHZhbCA9IDA7XG4gICAgICAgIC8vdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHBhdGNoX2QgPSB0aGlzLnBhdGNoX2ltZy5kYXRhO1xuICAgICAgICB2YXIgcGF0Y2hfb2ZmID0gMTYgKiAzMiArIDE2OyAvLyBjZW50ZXIgb2YgcGF0Y2hcbiAgICAgICAgdmFyIHBhdHQgPSAwO1xuXG4gICAgICAgIGlmICghKGRlc2NyaXB0b3JzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpKSB7XG4gICAgICAgICAgICAvLyByZWxvY2F0ZSB0byBVOCB0eXBlXG4gICAgICAgICAgICBkZXNjcmlwdG9ycy50eXBlID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY29scyA9IERFU0NSX1NJWkU7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5yb3dzID0gY291bnQ7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jaGFubmVsID0gMTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5yZXNpemUoREVTQ1JfU0laRSwgY291bnQsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlc2NyX2QgPSBkZXNjcmlwdG9ycy5kYXRhO1xuICAgICAgICB2YXIgZGVzY3Jfb2ZmID0gMDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHggPSBjb3JuZXJzW2ldLng7XG4gICAgICAgICAgICBweSA9IGNvcm5lcnNbaV0ueTtcbiAgICAgICAgICAgIGFuZ2xlID0gY29ybmVyc1tpXS5hbmdsZTtcblxuICAgICAgICAgICAgcmVjdGlmeV9wYXRjaChzcmMsIHRoaXMucGF0Y2hfaW1nLCBhbmdsZSwgcHgsIHB5LCAzMiwgdGhpcy5ILCB0aGlzLmltZ3Byb2MpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9IDxudW1iZXI+PHVua25vd24+KHQwIDwgdDEpIHwgMDtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgMTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgMztcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgNDtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgNjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gPG51bWJlcj48dW5rbm93bj4odDAgPCB0MSkgPDwgNztcblxuICAgICAgICAgICAgICAgIGRlc2NyX2RbZGVzY3Jfb2ZmICsgYl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXNjcl9vZmYgKz0gREVTQ1JfU0laRTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmpzZmVhdE5leHQueWFwZSA9IHlhcGU7XG5cbmpzZmVhdE5leHQueWFwZTA2ID0gY2xhc3MgeWFwZTA2IGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIGxhcGxhY2lhbl90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmM6IG1hdHJpeF90LCBwb2ludHM6IGtleXBvaW50X3RbXSwgYm9yZGVyOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSA1OyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDA7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JkX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIER4eCA9IDUsIER5eSA9ICg1ICogdykgfCAwO1xuICAgICAgICB2YXIgRHh5ID0gKDMgKyAzICogdykgfCAwLCBEeXggPSAoMyAtIDMgKiB3KSB8IDA7XG4gICAgICAgIHZhciBsYXBfYnVmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG4gICAgICAgIHZhciBsYXBsYWNpYW4gPSBsYXBfYnVmLmkzMjtcbiAgICAgICAgdmFyIGx2ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIG1pbl9laWdlbl92YWx1ZSA9IDAsIHB0O1xuICAgICAgICB2YXIgbnVtYmVyX29mX3BvaW50cyA9IDA7XG4gICAgICAgIHZhciBsYXBfdGhyZXNoID0gdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkO1xuICAgICAgICB2YXIgZWlnZW5fdGhyZXNoID0gdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkO1xuXG4gICAgICAgIHZhciBzeCA9IE1hdGgubWF4KDUsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heCgzLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIDUsIHcgLSBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV5ID0gTWF0aC5taW4oaCAtIDMsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICB4ID0gdyAqIGg7XG4gICAgICAgIHdoaWxlICgtLXggPj0gMCkgeyBsYXBsYWNpYW5beF0gPSAwOyB9XG4gICAgICAgIGNvbXB1dGVfbGFwbGFjaWFuKHNyZF9kLCBsYXBsYWNpYW4sIHcsIGgsIER4eCwgRHl5LCBzeCwgc3ksIGV4LCBleSk7XG5cbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG5cbiAgICAgICAgICAgICAgICBsdiA9IGxhcGxhY2lhbltyb3d4XTtcbiAgICAgICAgICAgICAgICBpZiAoKGx2IDwgLWxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIChsdiA+IGxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG1pbl9laWdlbl92YWx1ZSA9IGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlKHNyZF9kLCByb3d4LCBsdiwgRHh4LCBEeXksIER4eSwgRHl4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbl9laWdlbl92YWx1ZSA+IGVpZ2VuX3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gbWluX2VpZ2VuX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7IC8vIHNraXAgbmV4dCBwaXhlbCBzaW5jZSB0aGlzIGlzIG1heGltYSBpbiAzeDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihsYXBfYnVmKTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0Lm1vdGlvbl9lc3RpbWF0b3IgPSBjbGFzcyBtb3Rpb25fZXN0aW1hdG9yIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0X3N1YnNldChrZXJuZWw6IGhvbW9ncmFwaHkyZCwgZnJvbTogcG9pbnRfdFtdLCB0bzogcG9pbnRfdFtdLCBuZWVkX2NudDogbnVtYmVyLCBtYXhfY250OiBudW1iZXIsIGZyb21fc3ViOiBwb2ludF90W10sIHRvX3N1YjogcG9pbnRfdFtdKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBtYXhfdHJ5ID0gMTAwMDtcbiAgICAgICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgc3NpdGVyID0gMCwgaWR4X2kgPSAwLCBvayA9IGZhbHNlO1xuICAgICAgICBmb3IgKDsgc3NpdGVyIDwgbWF4X3RyeTsgKytzc2l0ZXIpIHtcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5Oykge1xuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWR4X2kgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICghb2spIHtcbiAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZHhfaSA9IGluZGljZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhfY250KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHhfaSA9PSBpbmRpY2VzW2pdKSB7IG9rID0gZmFsc2U7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbV9zdWJbaV0gPSBmcm9tW2lkeF9pXTtcbiAgICAgICAgICAgICAgICB0b19zdWJbaV0gPSB0b1tpZHhfaV07XG4gICAgICAgICAgICAgICAgaWYgKCFrZXJuZWwuY2hlY2tfc3Vic2V0KGZyb21fc3ViLCB0b19zdWIsIGkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBzc2l0ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChpID09IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnkpO1xuICAgIH1cblxuICAgIGZpbmRfaW5saWVycyhrZXJuZWw6IGhvbW9ncmFwaHkyZCwgbW9kZWw6IG1hdHJpeF90LCBmcm9tOiBwb2ludF90W10sIHRvOiBwb2ludF90W10sIGNvdW50OiBudW1iZXIsIHRocmVzaDogbnVtYmVyLCBlcnI6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIG1hc2s6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIG51bWlubGllcnM6IG51bWJlciA9IDAsIGkgPSAwLCBmID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aHJlc2ggKiB0aHJlc2g7XG5cbiAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBmID0gPG51bWJlcj48dW5rbm93bj4oZXJyW2ldIDw9IHQpO1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtczogcmFuc2FjX3BhcmFtc190LCBrZXJuZWw6IGFueSwgZnJvbTogcG9pbnRfdFtdLCB0bzogcG9pbnRfdFtdLCBjb3VudDogbnVtYmVyLCBtb2RlbDogbWF0cml4X3QsIG1hc2s6IG1hdHJpeF90LCBtYXhfaXRlcnM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN1YnNldDA6IGFueSA9IFtdO1xuICAgICAgICB2YXIgc3Vic2V0MTogYW55ID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOEMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlubGllcnNfbWF4ID0gLTEsIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBNLCBmcm9tLCB0bywgY291bnQsIHBhcmFtcy50aHJlc2gsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobnVtaW5saWVycyA+IE1hdGgubWF4KGlubGllcnNfbWF4LCBtb2RlbF9wb2ludHMgLSAxKSkge1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgaW5saWVyc19tYXggPSBudW1pbmxpZXJzO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcbiAgICAgICAgICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKChjb3VudCAtIG51bWlubGllcnMpIC8gY291bnQsIG5pdGVycyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsbWVkcyhwYXJhbXM6IHJhbnNhY19wYXJhbXNfdCwga2VybmVsOiBhbnksIGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgY291bnQ6IG51bWJlciwgbW9kZWw6IG1hdHJpeF90LCBtYXNrOiBtYXRyaXhfdCwgbWF4X2l0ZXJzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB2YXIgX21hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG5cbiAgICAgICAgdmFyIHN1YnNldDA6IGFueSA9IFtdO1xuICAgICAgICB2YXIgc3Vic2V0MTogYW55ID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuYWZmaW5lMmQgPSBhZmZpbmUyZDtcblxuanNmZWF0TmV4dC5ob21vZ3JhcGh5MmQgPSBob21vZ3JhcGh5MmQ7XG5cbmpzZmVhdE5leHQub3B0aWNhbF9mbG93X2xrID0gY2xhc3Mgb3B0aWNhbF9mbG93X2xrIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIHNjaGFycl9kZXJpdjogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgX2ltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKClcbiAgICAgICAgdGhpcy5zY2hhcnJfZGVyaXYgPSBfaW1ncHJvYy5zY2hhcnJfZGVyaXZhdGl2ZXM7XG4gICAgfVxuICAgIHRyYWNrKHByZXZfcHlyOiBweXJhbWlkX3QsIGN1cnJfcHlyOiBweXJhbWlkX3QsIHByZXZfeHk6IEZsb2F0MzJBcnJheSwgY3Vycl94eTogRmxvYXQzMkFycmF5LCBjb3VudDogbnVtYmVyLCB3aW5fc2l6ZTogbnVtYmVyLCBtYXhfaXRlcjogbnVtYmVyLCBzdGF0dXM6IFVpbnQ4QXJyYXksIGVwczogbnVtYmVyLCBtaW5fZWlnZW5fdGhyZXNob2xkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlciA9IDMwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7IHN0YXR1cyA9IG5ldyBVaW50OEFycmF5KGNvdW50KTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjAxOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbWluX2VpZ2VuX3RocmVzaG9sZCA9PT0gXCJ1bmRlZmluZWRcIikgeyBtaW5fZWlnZW5fdGhyZXNob2xkID0gMC4wMDAxOyB9XG5cbiAgICAgICAgdmFyIGhhbGZfd2luID0gKHdpbl9zaXplIC0gMSkgKiAwLjU7XG4gICAgICAgIHZhciB3aW5fYXJlYSA9ICh3aW5fc2l6ZSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgIHZhciB3aW5fYXJlYTIgPSB3aW5fYXJlYSA8PCAxO1xuICAgICAgICB2YXIgcHJldl9pbWdzID0gcHJldl9weXIuZGF0YSwgbmV4dF9pbWdzID0gY3Vycl9weXIuZGF0YTtcbiAgICAgICAgdmFyIGltZ19wcmV2ID0gcHJldl9pbWdzWzBdLmRhdGEsIGltZ19uZXh0ID0gbmV4dF9pbWdzWzBdLmRhdGE7XG4gICAgICAgIHZhciB3MCA9IHByZXZfaW1nc1swXS5jb2xzLCBoMCA9IHByZXZfaW1nc1swXS5yb3dzLCBsdyA9IDAsIGxoID0gMDtcblxuICAgICAgICB2YXIgaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhIDw8IDIpO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhMiA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2xldl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoMCAqICh3MCA8PCAxKSkgPDwgMik7XG5cbiAgICAgICAgdmFyIGRlcml2X20gPSBuZXcgbWF0cml4X3QodzAsIGgwLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGRlcml2X2xldl9ub2RlLmRhdGEpO1xuXG4gICAgICAgIHZhciBpd2luX2J1ZiA9IGl3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9pd2luID0gZGVyaXZfaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGRlcml2X2xldiA9IGRlcml2X2xldl9ub2RlLmkzMjtcblxuICAgICAgICB2YXIgZHN0ZXAgPSAwLCBzcmMgPSAwLCBkc3JjID0gMCwgaXB0ciA9IDAsIGRpcHRyID0gMCwganB0ciA9IDA7XG4gICAgICAgIHZhciBsZXZfc2MgPSAwLjAsIHByZXZfeCA9IDAuMCwgcHJldl95ID0gMC4wLCBuZXh0X3ggPSAwLjAsIG5leHRfeSA9IDAuMDtcbiAgICAgICAgdmFyIHByZXZfZGVsdGFfeCA9IDAuMCwgcHJldl9kZWx0YV95ID0gMC4wLCBkZWx0YV94ID0gMC4wLCBkZWx0YV95ID0gMC4wO1xuICAgICAgICB2YXIgaXByZXZfeCA9IDAsIGlwcmV2X3kgPSAwLCBpbmV4dF94ID0gMCwgaW5leHRfeSA9IDA7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHggPSAwLCB5ID0gMCwgbGV2ZWwgPSAwLCBwdGlkID0gMCwgaXRlciA9IDA7XG4gICAgICAgIHZhciBicmRfdGwgPSAwLCBicmRfciA9IDAsIGJyZF9iID0gMDtcbiAgICAgICAgdmFyIGEgPSAwLjAsIGIgPSAwLjAsIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAvLyBmaXhlZCBwb2ludCBtYXRoXG4gICAgICAgIHZhciBXX0JJVFMxNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTMW01ID0gV19CSVRTNCAtIDU7XG4gICAgICAgIHZhciBXX0JJVFMxbTUxID0gKDEgPDwgKChXX0JJVFMxbTUpIC0gMSkpO1xuICAgICAgICB2YXIgV19CSVRTMTRfID0gKDEgPDwgV19CSVRTMTQpO1xuICAgICAgICB2YXIgV19CSVRTNDEgPSAoMSA8PCAoKFdfQklUUzQpIC0gMSkpO1xuICAgICAgICB2YXIgRkxUX1NDQUxFID0gMS4wIC8gKDEgPDwgMjApO1xuICAgICAgICB2YXIgaXcwMCA9IDAsIGl3MDEgPSAwLCBpdzEwID0gMCwgaXcxMSA9IDAsIGl2YWwgPSAwLCBpeHZhbCA9IDAsIGl5dmFsID0gMDtcbiAgICAgICAgdmFyIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjAsIEQgPSAwLjAsIG1pbl9laWcgPSAwLjA7XG5cbiAgICAgICAgdmFyIEZMVF9FUFNJTE9OID0gMC4wMDAwMDAxMTkyMDkyOTtcbiAgICAgICAgZXBzICo9IGVwcztcblxuICAgICAgICAvLyByZXNldCBzdGF0dXNcbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1heF9sZXZlbCA9IChwcmV2X3B5ci5sZXZlbHMgLSAxKSB8IDA7XG4gICAgICAgIGxldmVsID0gbWF4X2xldmVsO1xuXG4gICAgICAgIGZvciAoOyBsZXZlbCA+PSAwOyAtLWxldmVsKSB7XG4gICAgICAgICAgICBsZXZfc2MgPSAoMS4wIC8gKDEgPDwgbGV2ZWwpKTtcbiAgICAgICAgICAgIGx3ID0gdzAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBsaCA9IGgwID4+IGxldmVsO1xuICAgICAgICAgICAgZHN0ZXAgPSBsdyA8PCAxO1xuICAgICAgICAgICAgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbbGV2ZWxdLmRhdGE7XG4gICAgICAgICAgICBpbWdfbmV4dCA9IG5leHRfaW1nc1tsZXZlbF0uZGF0YTtcblxuICAgICAgICAgICAgYnJkX3IgPSAobHcgLSB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgYnJkX2IgPSAobGggLSB3aW5fc2l6ZSkgfCAwO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGV2ZWwgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2KHByZXZfaW1nc1tsZXZlbF0sIGRlcml2X20pO1xuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG9pbnRzXG4gICAgICAgICAgICBmb3IgKHB0aWQgPSAwOyBwdGlkIDwgY291bnQ7ICsrcHRpZCkge1xuICAgICAgICAgICAgICAgIGkgPSBwdGlkIDw8IDE7XG4gICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHByZXZfeCA9IHByZXZfeHlbaV0gKiBsZXZfc2M7XG4gICAgICAgICAgICAgICAgcHJldl95ID0gcHJldl94eVtqXSAqIGxldl9zYztcblxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSBtYXhfbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gcHJldl94O1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBwcmV2X3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY3Vycl94eVtpXSAqIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gY3Vycl94eVtqXSAqIDIuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3Vycl94eVtpXSA9IG5leHRfeDtcbiAgICAgICAgICAgICAgICBjdXJyX3h5W2pdID0gbmV4dF95O1xuXG4gICAgICAgICAgICAgICAgcHJldl94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIHByZXZfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBpcHJldl94ID0gcHJldl94IHwgMDtcbiAgICAgICAgICAgICAgICBpcHJldl95ID0gcHJldl95IHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIGJvcmRlciBjaGVja1xuICAgICAgICAgICAgICAgIHggPSA8bnVtYmVyPjx1bmtub3duPigoaXByZXZfeCA8PSBicmRfdGwpIHx8IChpcHJldl94ID49IGJyZF9yKSB8fCAoaXByZXZfeSA8PSBicmRfdGwpIHx8IChpcHJldl95ID49IGJyZF9iKSk7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gPG51bWJlcj48dW5rbm93bj4oKGluZXh0X3ggPD0gYnJkX3RsKSB8fCAoaW5leHRfeCA+PSBicmRfcikgfHwgKGluZXh0X3kgPD0gYnJkX3RsKSB8fCAoaW5leHRfeSA+PSBicmRfYikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1twdGlkXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSBuZXh0X3ggLSBpbmV4dF94O1xuICAgICAgICAgICAgICAgICAgICBiID0gbmV4dF95IC0gaW5leHRfeTtcbiAgICAgICAgICAgICAgICAgICAgaXcwMCA9ICgoKDEuMCAtIGEpICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzAxID0gKChhICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzExID0gKFdfQklUUzE0XyAtIGl3MDAgLSBpdzAxIC0gaXcxMCk7XG4gICAgICAgICAgICAgICAgICAgIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAganB0ciA9ICgoeSArIGluZXh0X3kpICogbHcgKyBpbmV4dF94KSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlwdHIgPSAoeSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXB0ciA9IGlwdHIgPDwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK2pwdHIsICsraXB0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19uZXh0W2pwdHJdKSAqIGl3MDAgKyAoaW1nX25leHRbanB0ciArIDFdKSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX25leHRbanB0ciArIGx3XSkgKiBpdzEwICsgKGltZ19uZXh0W2pwdHIgKyBsdyArIDFdKSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID0gKGl2YWwgLSBpd2luX2J1ZltpcHRyXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMSArPSBpdmFsICogZGVyaXZfaXdpbltkaXB0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMiArPSBpdmFsICogZGVyaXZfaXdpbltkaXB0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGIxICo9IEZMVF9TQ0FMRTtcbiAgICAgICAgICAgICAgICAgICAgYjIgKj0gRkxUX1NDQUxFO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX3ggPSAoKEExMiAqIGIyIC0gQTIyICogYjEpICogRCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX3kgPSAoKEExMiAqIGIxIC0gQTExICogYjIpICogRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ICs9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSArPSBkZWx0YV95O1xuICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldID0gbmV4dF94ICsgaGFsZl93aW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gPSBuZXh0X3kgKyBoYWxmX3dpbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGFfeCAqIGRlbHRhX3ggKyBkZWx0YV95ICogZGVsdGFfeSA8PSBlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXIgPiAwICYmIE1hdGguYWJzKGRlbHRhX3ggKyBwcmV2X2RlbHRhX3gpIDwgMC4wMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZGVsdGFfeSArIHByZXZfZGVsdGFfeSkgPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldIC09IGRlbHRhX3ggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2pdIC09IGRlbHRhX3kgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeCA9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBwb2ludHMgbG9vcFxuICAgICAgICB9IC8vIGxldmVscyBsb29wXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGl3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9pd2luX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZGVyaXZfbGV2X25vZGUpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY29yZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5IHwgRmxvYXQ2NEFycmF5LCBpMDogbnVtYmVyLCBpMTogbnVtYmVyLCB0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgYiAvPSBhO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGguc3FydCgxLjAgKyBiICogYik7XG4gICAgfVxuICAgIGlmIChiID4gMCkge1xuICAgICAgICBhIC89IGI7XG4gICAgICAgIHJldHVybiBiICogTWF0aC5zcXJ0KDEuMCArIGEgKiBhKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0bWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGlkZW50aXR5KE06IG1hdHJpeF90LCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBzcmMgPSBNLmRhdGE7XG4gICAgICAgIHZhciByb3dzID0gTS5yb3dzLCBjb2xzID0gTS5jb2xzLCBjb2xzXzEgPSAoY29scyArIDEpIHwgMDtcbiAgICAgICAgdmFyIGxlbiA9IHJvd3MgKiBjb2xzO1xuICAgICAgICB2YXIgayA9IGxlbjtcbiAgICAgICAgd2hpbGUgKC0tbGVuID49IDApIHNyY1tsZW5dID0gMC4wO1xuICAgICAgICBsZW4gPSBrO1xuICAgICAgICBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHNyY1trXSA9IHZhbHVlO1xuICAgICAgICAgICAgayA9IGsgKyBjb2xzXzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoQXQ6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEM6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCwgQjogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDOiBtYXRyaXhfdCwgQTogbWF0cml4X3QsIEI6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQyA9IDAsIHBDID0gMCwgcF9DQyA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgcF9DICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBfQSA9IGk7XG4gICAgICAgICAgICBwX0NDID0gcF9DICsgaTtcbiAgICAgICAgICAgIHBDID0gcF9DQztcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBuY29sczsgcEMrKywgcF9DQyArPSBuY29scywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgcEIgPSBqO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBuY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBhZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BfQ0NdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFyaW91cyBzbWFsbCBtYXRyaXggb3BlcmF0aW9uc1xuICAgIGlkZW50aXR5XzN4MyhNOiBtYXRyaXhfdCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgZHQgPSBNLmRhdGE7XG4gICAgICAgIGR0WzBdID0gZHRbNF0gPSBkdFs4XSA9IHZhbHVlO1xuICAgICAgICBkdFsxXSA9IGR0WzJdID0gZHRbM10gPSAwO1xuICAgICAgICBkdFs1XSA9IGR0WzZdID0gZHRbN10gPSAwO1xuICAgIH1cblxuICAgIGludmVydF8zeDMoZnJvbTogbWF0cml4X3QsIHRvOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE06IG1hdHJpeF90KTogbnVtYmVyIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMTogbnVtYmVyLCBNMTI6IG51bWJlciwgTTEzOiBudW1iZXIsXG4gICAgICAgIE0yMTogbnVtYmVyLCBNMjI6IG51bWJlciwgTTIzOiBudW1iZXIsXG4gICAgICAgIE0zMTogbnVtYmVyLCBNMzI6IG51bWJlciwgTTMzOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUnXG5pbXBvcnQgeyBkYXRhX3QgfSBmcm9tICcuLi9ub2RlX3V0aWxzL2RhdGFfdCdcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhfVCB7XG4gICAgYWxsb2NhdGU6ICgpID0+IHZvaWQ7XG4gICAgY29weV90bzogKG90aGVyOiBhbnkpID0+IHZvaWQ7XG4gICAgcmVzaXplOiAoYzogbnVtYmVyLCByOiBudW1iZXIsIGNoOiBhbnkpID0+IHZvaWQ7XG59XG5leHBvcnQgY2xhc3MgbWF0cml4X3QgaW1wbGVtZW50cyBJTWF0cml4X1Qge1xuICAgIHByaXZhdGUgZHQ6IElEYXRhX1R5cGU7XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICBwdWJsaWMgY2hhbm5lbDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2xzOiBudW1iZXI7XG4gICAgcHVibGljIHJvd3M6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHB1YmxpYyBidWZmZXI6IGRhdGFfdDtcbiAgICBjb25zdHJ1Y3RvcihjOiBudW1iZXIsIHI6IG51bWJlciwgX2RhdGFfdHlwZTogbnVtYmVyLCBfZGF0YV9idWZmZXI/OiBkYXRhX3QpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXI6IGFueSk6IHZvaWQge1xuICAgICAgICB2YXIgb2QgPSBvdGhlci5kYXRhLCB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBuID0gKHRoaXMuY29scyAqIHRoaXMucm93cyAqIHRoaXMuY2hhbm5lbCkgfCAwO1xuICAgICAgICBmb3IgKDsgaSA8IG4gLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgICAgICBvZFtpICsgMV0gPSB0ZFtpICsgMV07XG4gICAgICAgICAgICBvZFtpICsgMl0gPSB0ZFtpICsgMl07XG4gICAgICAgICAgICBvZFtpICsgM10gPSB0ZFtpICsgM107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzaXplKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHsgY2ggPSB0aGlzLmNoYW5uZWw7IH1cbiAgICAgICAgLy8gcmVsb2NhdGUgYnVmZmVyIG9ubHkgaWYgbmV3IHNpemUgZG9lc250IGZpdFxuICAgICAgICB2YXIgbmV3X3NpemUgPSAoYyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogY2gpICogcjtcbiAgICAgICAgaWYgKG5ld19zaXplID4gdGhpcy5idWZmZXIuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIHJhbnNhY19wYXJhbXNfdCB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgdGhyZXNoOiBudW1iZXI7XG4gICAgcHVibGljIGVwczogbnVtYmVyO1xuICAgIHB1YmxpYyBwcm9iOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyLCB0aHJlc2g6IG51bWJlciwgZXBzOiBudW1iZXIsIHByb2I6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2l6ZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aHJlc2ggPT09IFwidW5kZWZpbmVkXCIpIHsgdGhyZXNoID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgZXBzID09PSBcInVuZGVmaW5lZFwiKSB7IGVwcyA9IDAuNTsgfVxuICAgICAgICBpZiAodHlwZW9mIHByb2IgPT09IFwidW5kZWZpbmVkXCIpIHsgcHJvYiA9IDAuOTk7IH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnRocmVzaCA9IHRocmVzaDtcbiAgICAgICAgdGhpcy5lcHMgPSBlcHM7XG4gICAgICAgIHRoaXMucHJvYiA9IHByb2I7XG4gICAgfTtcbiAgICB1cGRhdGVfaXRlcnMoX2VwczogbnVtYmVyLCBtYXhfaXRlcnM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHZhciBudW0gPSBNYXRoLmxvZygxIC0gdGhpcy5wcm9iKTtcbiAgICAgICAgdmFyIGRlbm9tID0gTWF0aC5sb2coMSAtIE1hdGgucG93KDEgLSBfZXBzLCB0aGlzLnNpemUpKTtcbiAgICAgICAgcmV0dXJuIChkZW5vbSA+PSAwIHx8IC1udW0gPj0gbWF4X2l0ZXJzICogKC1kZW5vbSkgPyBtYXhfaXRlcnMgOiBNYXRoLnJvdW5kKG51bSAvIGRlbm9tKSkgfCAwO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgSURhdGFfVCwgZGF0YV90IH0gZnJvbSAnLi9kYXRhX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvb2xfTm9kZV9UIHtcbiAgICByZXNpemU6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9wb29sX25vZGVfdCBpbXBsZW1lbnRzIElQb29sX05vZGVfVCB7XG4gICAgcHVibGljIG5leHQ6IGFueTtcbiAgICBwdWJsaWMgZGF0YT86IElEYXRhX1Q7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcblxuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbiAgICByZXNpemUoc2l6ZV9pbl9ieXRlczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVCB7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgdTg6IFVpbnQ4QXJyYXk7XG4gICAgaTMyOiBJbnQzMkFycmF5O1xuICAgIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIGY2NDogRmxvYXQ2NEFycmF5O1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90IGltcGxlbWVudHMgSURhdGFfVCAge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIsIGJ1ZmZlcj86IGFueSkge1xuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgYml0X3BhdHRlcm5fMzEgPSBbXG4gICAgOCwtMywgOSw1LyptZWFuICgwKSwgY29ycmVsYXRpb24gKDApKi8sXG4gICAgNCwyLCA3LC0xMi8qbWVhbiAoMS4xMjQ2MWUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNDM3NTg0KSovLFxuICAgIC0xMSw5LCAtOCwyLyptZWFuICgzLjM3MzgyZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MTc0MDkpKi8sXG4gICAgNywtMTIsIDEyLC0xMy8qbWVhbiAoNS42MjMwM2UtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjM2OTc3KSovLFxuICAgIDIsLTEzLCAyLDEyLyptZWFuICgwLjAwMDEzNDk1MyksIGNvcnJlbGF0aW9uICgwLjA4NTA5OSkqLyxcbiAgICAxLC03LCAxLDYvKm1lYW4gKDAuMDAwNTI4NTY1KSwgY29ycmVsYXRpb24gKDAuMDg1NzE3NSkqLyxcbiAgICAtMiwtMTAsIC0yLC00LyptZWFuICgwLjAxODg4MjEpLCBjb3JyZWxhdGlvbiAoMC4wOTg1Nzc0KSovLFxuICAgIC0xMywtMTMsIC0xMSwtOC8qbWVhbiAoMC4wMzYzMTM1KSwgY29ycmVsYXRpb24gKDAuMDg5OTYxNikqLyxcbiAgICAtMTMsLTMsIC0xMiwtOS8qbWVhbiAoMC4xMjE4MDYpLCBjb3JyZWxhdGlvbiAoMC4wOTk4NDkpKi8sXG4gICAgMTAsNCwgMTEsOS8qbWVhbiAoMC4xMjIwNjUpLCBjb3JyZWxhdGlvbiAoMC4wOTMyODUpKi8sXG4gICAgLTEzLC04LCAtOCwtOS8qbWVhbiAoMC4xNjI3ODcpLCBjb3JyZWxhdGlvbiAoMC4wOTQyNzQ4KSovLFxuICAgIC0xMSw3LCAtOSwxMi8qbWVhbiAoMC4yMTU2MSksIGNvcnJlbGF0aW9uICgwLjA5NzQ0MzgpKi8sXG4gICAgNyw3LCAxMiw2LyptZWFuICgwLjE2MDU4MyksIGNvcnJlbGF0aW9uICgwLjEzMDA2NCkqLyxcbiAgICAtNCwtNSwgLTMsMC8qbWVhbiAoMC4yMjgxNzEpLCBjb3JyZWxhdGlvbiAoMC4xMzI5OTgpKi8sXG4gICAgLTEzLDIsIC0xMiwtMy8qbWVhbiAoMC4wMDk5NzUyNiksIGNvcnJlbGF0aW9uICgwLjE0NTkyNikqLyxcbiAgICAtOSwwLCAtNyw1LyptZWFuICgwLjE5ODIzNCksIGNvcnJlbGF0aW9uICgwLjE0MzYzNikqLyxcbiAgICAxMiwtNiwgMTIsLTEvKm1lYW4gKDAuMDY3NjIyNiksIGNvcnJlbGF0aW9uICgwLjE2Njg5KSovLFxuICAgIC0zLDYsIC0yLDEyLyptZWFuICgwLjE2Njg0NyksIGNvcnJlbGF0aW9uICgwLjE3MTY4MikqLyxcbiAgICAtNiwtMTMsIC00LC04LyptZWFuICgwLjEwMTIxNSksIGNvcnJlbGF0aW9uICgwLjE3OTcxNikqLyxcbiAgICAxMSwtMTMsIDEyLC04LyptZWFuICgwLjIwMDY0MSksIGNvcnJlbGF0aW9uICgwLjE5MjI3OSkqLyxcbiAgICA0LDcsIDUsMS8qbWVhbiAoMC4yMDUxMDYpLCBjb3JyZWxhdGlvbiAoMC4xODY4NDgpKi8sXG4gICAgNSwtMywgMTAsLTMvKm1lYW4gKDAuMjM0OTA4KSwgY29ycmVsYXRpb24gKDAuMTkyMzE5KSovLFxuICAgIDMsLTcsIDYsMTIvKm1lYW4gKDAuMDcwOTk2NCksIGNvcnJlbGF0aW9uICgwLjIxMDg3MikqLyxcbiAgICAtOCwtNywgLTYsLTIvKm1lYW4gKDAuMDkzOTgzNCksIGNvcnJlbGF0aW9uICgwLjIxMjU4OSkqLyxcbiAgICAtMiwxMSwgLTEsLTEwLyptZWFuICgwLjEyNzc3OCksIGNvcnJlbGF0aW9uICgwLjIwODY2KSovLFxuICAgIC0xMywxMiwgLTgsMTAvKm1lYW4gKDAuMTQ3ODMpLCBjb3JyZWxhdGlvbiAoMC4yMDYzNTYpKi8sXG4gICAgLTcsMywgLTUsLTMvKm1lYW4gKDAuMTgyMTQxKSwgY29ycmVsYXRpb24gKDAuMTk4OTQyKSovLFxuICAgIC00LDIsIC0zLDcvKm1lYW4gKDAuMTg4MjM3KSwgY29ycmVsYXRpb24gKDAuMjEzODQpKi8sXG4gICAgLTEwLC0xMiwgLTYsMTEvKm1lYW4gKDAuMTQ4NjUpLCBjb3JyZWxhdGlvbiAoMC4yMzU3MSkqLyxcbiAgICA1LC0xMiwgNiwtNy8qbWVhbiAoMC4yMjIzMTIpLCBjb3JyZWxhdGlvbiAoMC4yMzMyNCkqLyxcbiAgICA1LC02LCA3LC0xLyptZWFuICgwLjIyOTA4MiksIGNvcnJlbGF0aW9uICgwLjIzMzg5KSovLFxuICAgIDEsMCwgNCwtNS8qbWVhbiAoMC4yNDE1NzcpLCBjb3JyZWxhdGlvbiAoMC4yMTUyODYpKi8sXG4gICAgOSwxMSwgMTEsLTEzLyptZWFuICgwLjAwMzM4NTA3KSwgY29ycmVsYXRpb24gKDAuMjUxMzczKSovLFxuICAgIDQsNywgNCwxMi8qbWVhbiAoMC4xMzEwMDUpLCBjb3JyZWxhdGlvbiAoMC4yNTc2MjIpKi8sXG4gICAgMiwtMSwgNCw0LyptZWFuICgwLjE1Mjc1NSksIGNvcnJlbGF0aW9uICgwLjI1NTIwNSkqLyxcbiAgICAtNCwtMTIsIC0yLDcvKm1lYW4gKDAuMTgyNzcxKSwgY29ycmVsYXRpb24gKDAuMjQ0ODY3KSovLFxuICAgIC04LC01LCAtNywtMTAvKm1lYW4gKDAuMTg2ODk4KSwgY29ycmVsYXRpb24gKDAuMjM5MDEpKi8sXG4gICAgNCwxMSwgOSwxMi8qbWVhbiAoMC4yMjYyMjYpLCBjb3JyZWxhdGlvbiAoMC4yNTgyNTUpKi8sXG4gICAgMCwtOCwgMSwtMTMvKm1lYW4gKDAuMDg5Nzg4NiksIGNvcnJlbGF0aW9uICgwLjI3NDgyNykqLyxcbiAgICAtMTMsLTIsIC04LDIvKm1lYW4gKDAuMTQ4Nzc0KSwgY29ycmVsYXRpb24gKDAuMjgwNjUpKi8sXG4gICAgLTMsLTIsIC0yLDMvKm1lYW4gKDAuMTUzMDQ4KSwgY29ycmVsYXRpb24gKDAuMjgzMDYzKSovLFxuICAgIC02LDksIC00LC05LyptZWFuICgwLjE2OTUyMyksIGNvcnJlbGF0aW9uICgwLjI3ODI0OCkqLyxcbiAgICA4LDEyLCAxMCw3LyptZWFuICgwLjIyNTMzNyksIGNvcnJlbGF0aW9uICgwLjI4Mjg1MSkqLyxcbiAgICAwLDksIDEsMy8qbWVhbiAoMC4yMjY2ODcpLCBjb3JyZWxhdGlvbiAoMC4yNzg3MzQpKi8sXG4gICAgNywtNSwgMTEsLTEwLyptZWFuICgwLjAwNjkzODgyKSwgY29ycmVsYXRpb24gKDAuMzA1MTYxKSovLFxuICAgIC0xMywtNiwgLTExLDAvKm1lYW4gKDAuMDIyNzI4MyksIGNvcnJlbGF0aW9uICgwLjMwMDE4MSkqLyxcbiAgICAxMCw3LCAxMiwxLyptZWFuICgwLjEyNTUxNyksIGNvcnJlbGF0aW9uICgwLjMxMDg5KSovLFxuICAgIC02LC0zLCAtNiwxMi8qbWVhbiAoMC4xMzE3NDgpLCBjb3JyZWxhdGlvbiAoMC4zMTI3NzkpKi8sXG4gICAgMTAsLTksIDEyLC00LyptZWFuICgwLjE0NDgyNyksIGNvcnJlbGF0aW9uICgwLjI5Mjc5NykqLyxcbiAgICAtMTMsOCwgLTgsLTEyLyptZWFuICgwLjE0OTIwMiksIGNvcnJlbGF0aW9uICgwLjMwODkxOCkqLyxcbiAgICAtMTMsMCwgLTgsLTQvKm1lYW4gKDAuMTYwOTA5KSwgY29ycmVsYXRpb24gKDAuMzEwMDEzKSovLFxuICAgIDMsMywgNyw4LyptZWFuICgwLjE3Nzc1NSksIGNvcnJlbGF0aW9uICgwLjMwOTM5NCkqLyxcbiAgICA1LDcsIDEwLC03LyptZWFuICgwLjIxMjMzNyksIGNvcnJlbGF0aW9uICgwLjMxMDMxNSkqLyxcbiAgICAtMSw3LCAxLC0xMi8qbWVhbiAoMC4yMTQ0MjkpLCBjb3JyZWxhdGlvbiAoMC4zMTE5MzMpKi8sXG4gICAgMywtMTAsIDUsNi8qbWVhbiAoMC4yMzU4MDcpLCBjb3JyZWxhdGlvbiAoMC4zMTMxMDQpKi8sXG4gICAgMiwtNCwgMywtMTAvKm1lYW4gKDAuMDA0OTQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4zNDQ5NDgpKi8sXG4gICAgLTEzLDAsIC0xMyw1LyptZWFuICgwLjA1NDkxNDUpLCBjb3JyZWxhdGlvbiAoMC4zNDQ2NzUpKi8sXG4gICAgLTEzLC03LCAtMTIsMTIvKm1lYW4gKDAuMTAzMzg1KSwgY29ycmVsYXRpb24gKDAuMzQyNzE1KSovLFxuICAgIC0xMywzLCAtMTEsOC8qbWVhbiAoMC4xMzQyMjIpLCBjb3JyZWxhdGlvbiAoMC4zMjI5MjIpKi8sXG4gICAgLTcsMTIsIC00LDcvKm1lYW4gKDAuMTUzMjg0KSwgY29ycmVsYXRpb24gKDAuMzM3MDYxKSovLFxuICAgIDYsLTEwLCAxMiw4LyptZWFuICgwLjE1NDg4MSksIGNvcnJlbGF0aW9uICgwLjMyOTI1NykqLyxcbiAgICAtOSwtMSwgLTcsLTYvKm1lYW4gKDAuMjAwOTY3KSwgY29ycmVsYXRpb24gKDAuMzMzMTIpKi8sXG4gICAgLTIsLTUsIDAsMTIvKm1lYW4gKDAuMjAxNTE4KSwgY29ycmVsYXRpb24gKDAuMzQwNjM1KSovLFxuICAgIC0xMiw1LCAtNyw1LyptZWFuICgwLjIwNzgwNSksIGNvcnJlbGF0aW9uICgwLjMzNTYzMSkqLyxcbiAgICAzLC0xMCwgOCwtMTMvKm1lYW4gKDAuMjI0NDM4KSwgY29ycmVsYXRpb24gKDAuMzQ1MDQpKi8sXG4gICAgLTcsLTcsIC00LDUvKm1lYW4gKDAuMjM5MzYxKSwgY29ycmVsYXRpb24gKDAuMzM4MDUzKSovLFxuICAgIC0zLC0yLCAtMSwtNy8qbWVhbiAoMC4yNDA3NDQpLCBjb3JyZWxhdGlvbiAoMC4zNDQzMjIpKi8sXG4gICAgMiw5LCA1LC0xMS8qbWVhbiAoMC4yNDI5NDkpLCBjb3JyZWxhdGlvbiAoMC4zNDE0NSkqLyxcbiAgICAtMTEsLTEzLCAtNSwtMTMvKm1lYW4gKDAuMjQ0MDI4KSwgY29ycmVsYXRpb24gKDAuMzM2ODYxKSovLFxuICAgIC0xLDYsIDAsLTEvKm1lYW4gKDAuMjQ3NTcxKSwgY29ycmVsYXRpb24gKDAuMzQzNjg0KSovLFxuICAgIDUsLTMsIDUsMi8qbWVhbiAoMC4wMDA2OTcyNTYpLCBjb3JyZWxhdGlvbiAoMC4zNTcyNjUpKi8sXG4gICAgLTQsLTEzLCAtNCwxMi8qbWVhbiAoMC4wMDIxMzY3NSksIGNvcnJlbGF0aW9uICgwLjM3MzgyNykqLyxcbiAgICAtOSwtNiwgLTksNi8qbWVhbiAoMC4wMTI2ODU2KSwgY29ycmVsYXRpb24gKDAuMzczOTM4KSovLFxuICAgIC0xMiwtMTAsIC04LC00LyptZWFuICgwLjAxNTI0OTcpLCBjb3JyZWxhdGlvbiAoMC4zNjQyMzcpKi8sXG4gICAgMTAsMiwgMTIsLTMvKm1lYW4gKDAuMDI5OTkzMyksIGNvcnJlbGF0aW9uICgwLjM0NTI5MikqLyxcbiAgICA3LDEyLCAxMiwxMi8qbWVhbiAoMC4wMzA3MjQyKSwgY29ycmVsYXRpb24gKDAuMzY2Mjk5KSovLFxuICAgIC03LC0xMywgLTYsNS8qbWVhbiAoMC4wNTM0OTc1KSwgY29ycmVsYXRpb24gKDAuMzY4MzU3KSovLFxuICAgIC00LDksIC0zLDQvKm1lYW4gKDAuMDk5ODY1KSwgY29ycmVsYXRpb24gKDAuMzcyMjc2KSovLFxuICAgIDcsLTEsIDEyLDIvKm1lYW4gKDAuMTE3MDgzKSwgY29ycmVsYXRpb24gKDAuMzY0NTI5KSovLFxuICAgIC03LDYsIC01LDEvKm1lYW4gKDAuMTI2MTI1KSwgY29ycmVsYXRpb24gKDAuMzY5NjA2KSovLFxuICAgIC0xMywxMSwgLTEyLDUvKm1lYW4gKDAuMTMwMzY0KSwgY29ycmVsYXRpb24gKDAuMzU4NTAyKSovLFxuICAgIC0zLDcsIC0yLC02LyptZWFuICgwLjEzMTY5MSksIGNvcnJlbGF0aW9uICgwLjM3NTUzMSkqLyxcbiAgICA3LC04LCAxMiwtNy8qbWVhbiAoMC4xNjAxNjYpLCBjb3JyZWxhdGlvbiAoMC4zNzk1MDgpKi8sXG4gICAgLTEzLC03LCAtMTEsLTEyLyptZWFuICgwLjE2Nzg0OCksIGNvcnJlbGF0aW9uICgwLjM1MzM0MykqLyxcbiAgICAxLC0zLCAxMiwxMi8qbWVhbiAoMC4xODMzNzgpLCBjb3JyZWxhdGlvbiAoMC4zNzE5MTYpKi8sXG4gICAgMiwtNiwgMywwLyptZWFuICgwLjIyODcxMSksIGNvcnJlbGF0aW9uICgwLjM3MTc2MSkqLyxcbiAgICAtNCwzLCAtMiwtMTMvKm1lYW4gKDAuMjQ3MjExKSwgY29ycmVsYXRpb24gKDAuMzY0MDYzKSovLFxuICAgIC0xLC0xMywgMSw5LyptZWFuICgwLjI0OTMyNSksIGNvcnJlbGF0aW9uICgwLjM3ODEzOSkqLyxcbiAgICA3LDEsIDgsLTYvKm1lYW4gKDAuMDAwNjUyMjcyKSwgY29ycmVsYXRpb24gKDAuNDExNjgyKSovLFxuICAgIDEsLTEsIDMsMTIvKm1lYW4gKDAuMDAyNDg1MzgpLCBjb3JyZWxhdGlvbiAoMC4zOTI5ODgpKi8sXG4gICAgOSwxLCAxMiw2LyptZWFuICgwLjAyMDY4MTUpLCBjb3JyZWxhdGlvbiAoMC4zODYxMDYpKi8sXG4gICAgLTEsLTksIC0xLDMvKm1lYW4gKDAuMDM2NDQ4NSksIGNvcnJlbGF0aW9uICgwLjQxMDc1MikqLyxcbiAgICAtMTMsLTEzLCAtMTAsNS8qbWVhbiAoMC4wMzc2MDY4KSwgY29ycmVsYXRpb24gKDAuMzk4Mzc0KSovLFxuICAgIDcsNywgMTAsMTIvKm1lYW4gKDAuMDQyNDIwMiksIGNvcnJlbGF0aW9uICgwLjQwNTY2MykqLyxcbiAgICAxMiwtNSwgMTIsOS8qbWVhbiAoMC4wOTQyNjQ1KSwgY29ycmVsYXRpb24gKDAuNDEwNDIyKSovLFxuICAgIDYsMywgNywxMS8qbWVhbiAoMC4xMDc0KSwgY29ycmVsYXRpb24gKDAuNDEzMjI0KSovLFxuICAgIDUsLTEzLCA2LDEwLyptZWFuICgwLjEwOTI1NiksIGNvcnJlbGF0aW9uICgwLjQwODY0NikqLyxcbiAgICAyLC0xMiwgMiwzLyptZWFuICgwLjEzMTY5MSksIGNvcnJlbGF0aW9uICgwLjQxNjA3NikqLyxcbiAgICAzLDgsIDQsLTYvKm1lYW4gKDAuMTY1MDgxKSwgY29ycmVsYXRpb24gKDAuNDE3NTY5KSovLFxuICAgIDIsNiwgMTIsLTEzLyptZWFuICgwLjE3MTg3NCksIGNvcnJlbGF0aW9uICgwLjQwODQ3MSkqLyxcbiAgICA5LC0xMiwgMTAsMy8qbWVhbiAoMC4xNzUxNDYpLCBjb3JyZWxhdGlvbiAoMC40MTI5NikqLyxcbiAgICAtOCw0LCAtNyw5LyptZWFuICgwLjE4MzY4MiksIGNvcnJlbGF0aW9uICgwLjQwMjk1NikqLyxcbiAgICAtMTEsMTIsIC00LC02LyptZWFuICgwLjE4NDY3MiksIGNvcnJlbGF0aW9uICgwLjQxNjEyNSkqLyxcbiAgICAxLDEyLCAyLC04LyptZWFuICgwLjE5MTQ4NyksIGNvcnJlbGF0aW9uICgwLjM4NjY5NikqLyxcbiAgICA2LC05LCA3LC00LyptZWFuICgwLjE5MjY2OCksIGNvcnJlbGF0aW9uICgwLjM5NDc3MSkqLyxcbiAgICAyLDMsIDMsLTIvKm1lYW4gKDAuMjAwMTU3KSwgY29ycmVsYXRpb24gKDAuNDA4MzAzKSovLFxuICAgIDYsMywgMTEsMC8qbWVhbiAoMC4yMDQ1ODgpLCBjb3JyZWxhdGlvbiAoMC40MTE3NjIpKi8sXG4gICAgMywtMywgOCwtOC8qbWVhbiAoMC4yMDU5MDQpLCBjb3JyZWxhdGlvbiAoMC40MTYyOTQpKi8sXG4gICAgNyw4LCA5LDMvKm1lYW4gKDAuMjEzMjM3KSwgY29ycmVsYXRpb24gKDAuNDA5MzA2KSovLFxuICAgIC0xMSwtNSwgLTYsLTQvKm1lYW4gKDAuMjQzNDQ0KSwgY29ycmVsYXRpb24gKDAuMzk1MDY5KSovLFxuICAgIC0xMCwxMSwgLTUsMTAvKm1lYW4gKDAuMjQ3NjcyKSwgY29ycmVsYXRpb24gKDAuNDEzMzkyKSovLFxuICAgIC01LC04LCAtMywxMi8qbWVhbiAoMC4yNDc3NCksIGNvcnJlbGF0aW9uICgwLjQxMTQxNikqLyxcbiAgICAtMTAsNSwgLTksMC8qbWVhbiAoMC4wMDIxMzY3NSksIGNvcnJlbGF0aW9uICgwLjQ1NDAwMykqLyxcbiAgICA4LC0xLCAxMiwtNi8qbWVhbiAoMC4wMjkzNjM1KSwgY29ycmVsYXRpb24gKDAuNDU1MzY4KSovLFxuICAgIDQsLTYsIDYsLTExLyptZWFuICgwLjA0MDQ5NzEpLCBjb3JyZWxhdGlvbiAoMC40NTczOTMpKi8sXG4gICAgLTEwLDEyLCAtOCw3LyptZWFuICgwLjA0ODExMDcpLCBjb3JyZWxhdGlvbiAoMC40NDgzNjQpKi8sXG4gICAgNCwtMiwgNiw3LyptZWFuICgwLjA1MDY0MSksIGNvcnJlbGF0aW9uICgwLjQ1NTAxOSkqLyxcbiAgICAtMiwwLCAtMiwxMi8qbWVhbiAoMC4wNTI1OTc4KSwgY29ycmVsYXRpb24gKDAuNDQzMzgpKi8sXG4gICAgLTUsLTgsIC01LDIvKm1lYW4gKDAuMDYyOTY2NyksIGNvcnJlbGF0aW9uICgwLjQ1NzA5NikqLyxcbiAgICA3LC02LCAxMCwxMi8qbWVhbiAoMC4wNjUzODQ2KSwgY29ycmVsYXRpb24gKDAuNDQ1NjIzKSovLFxuICAgIC05LC0xMywgLTgsLTgvKm1lYW4gKDAuMDg1ODc0OSksIGNvcnJlbGF0aW9uICgwLjQ0OTc4OSkqLyxcbiAgICAtNSwtMTMsIC01LC0yLyptZWFuICgwLjEyMjQwMiksIGNvcnJlbGF0aW9uICgwLjQ1MDIwMSkqLyxcbiAgICA4LC04LCA5LC0xMy8qbWVhbiAoMC4xMjU0MTYpLCBjb3JyZWxhdGlvbiAoMC40NTMyMjQpKi8sXG4gICAgLTksLTExLCAtOSwwLyptZWFuICgwLjEzMDEyOCksIGNvcnJlbGF0aW9uICgwLjQ1ODcyNCkqLyxcbiAgICAxLC04LCAxLC0yLyptZWFuICgwLjEzMjQ2NyksIGNvcnJlbGF0aW9uICgwLjQ0MDEzMykqLyxcbiAgICA3LC00LCA5LDEvKm1lYW4gKDAuMTMyNjkyKSwgY29ycmVsYXRpb24gKDAuNDU0KSovLFxuICAgIC0yLDEsIC0xLC00LyptZWFuICgwLjEzNTY5NSksIGNvcnJlbGF0aW9uICgwLjQ1NTczOSkqLyxcbiAgICAxMSwtNiwgMTIsLTExLyptZWFuICgwLjE0MjkwNCksIGNvcnJlbGF0aW9uICgwLjQ0NjExNCkqLyxcbiAgICAtMTIsLTksIC02LDQvKm1lYW4gKDAuMTQ2MTY1KSwgY29ycmVsYXRpb24gKDAuNDUxNDczKSovLFxuICAgIDMsNywgNywxMi8qbWVhbiAoMC4xNDc2MjcpLCBjb3JyZWxhdGlvbiAoMC40NTY2NDMpKi8sXG4gICAgNSw1LCAxMCw4LyptZWFuICgwLjE1MjkwMSksIGNvcnJlbGF0aW9uICgwLjQ1NTAzNikqLyxcbiAgICAwLC00LCAyLDgvKm1lYW4gKDAuMTY3MDgzKSwgY29ycmVsYXRpb24gKDAuNDU5MzE1KSovLFxuICAgIC05LDEyLCAtNSwtMTMvKm1lYW4gKDAuMTczMjM0KSwgY29ycmVsYXRpb24gKDAuNDU0NzA2KSovLFxuICAgIDAsNywgMiwxMi8qbWVhbiAoMC4xODMxMiksIGNvcnJlbGF0aW9uICgwLjQzMzg1NSkqLyxcbiAgICAtMSwyLCAxLDcvKm1lYW4gKDAuMTg1NTA0KSwgY29ycmVsYXRpb24gKDAuNDQzODM4KSovLFxuICAgIDUsMTEsIDcsLTkvKm1lYW4gKDAuMTg1NzA2KSwgY29ycmVsYXRpb24gKDAuNDUxMTIzKSovLFxuICAgIDMsNSwgNiwtOC8qbWVhbiAoMC4xODg5NjgpLCBjb3JyZWxhdGlvbiAoMC40NTU4MDgpKi8sXG4gICAgLTEzLC00LCAtOCw5LyptZWFuICgwLjE5MTY2NyksIGNvcnJlbGF0aW9uICgwLjQ1OTEyOCkqLyxcbiAgICAtNSw5LCAtMywtMy8qbWVhbiAoMC4xOTMxOTYpLCBjb3JyZWxhdGlvbiAoMC40NTgzNjQpKi8sXG4gICAgLTQsLTcsIC0zLC0xMi8qbWVhbiAoMC4xOTY1MzYpLCBjb3JyZWxhdGlvbiAoMC40NTU3ODIpKi8sXG4gICAgNiw1LCA4LDAvKm1lYW4gKDAuMTk3MiksIGNvcnJlbGF0aW9uICgwLjQ1MDQ4MSkqLyxcbiAgICAtNyw2LCAtNiwxMi8qbWVhbiAoMC4xOTk0MzgpLCBjb3JyZWxhdGlvbiAoMC40NTgxNTYpKi8sXG4gICAgLTEzLDYsIC01LC0yLyptZWFuICgwLjIxMTIyNCksIGNvcnJlbGF0aW9uICgwLjQ0OTU0OCkqLyxcbiAgICAxLC0xMCwgMywxMC8qbWVhbiAoMC4yMTE3MTgpLCBjb3JyZWxhdGlvbiAoMC40NDA2MDYpKi8sXG4gICAgNCwxLCA4LC00LyptZWFuICgwLjIxMzAzNCksIGNvcnJlbGF0aW9uICgwLjQ0MzE3NykqLyxcbiAgICAtMiwtMiwgMiwtMTMvKm1lYW4gKDAuMjM0MzM0KSwgY29ycmVsYXRpb24gKDAuNDU1MzA0KSovLFxuICAgIDIsLTEyLCAxMiwxMi8qbWVhbiAoMC4yMzU2ODQpLCBjb3JyZWxhdGlvbiAoMC40NDM0MzYpKi8sXG4gICAgLTIsLTEzLCAwLC02LyptZWFuICgwLjIzNzY3NCksIGNvcnJlbGF0aW9uICgwLjQ1MjUyNSkqLyxcbiAgICA0LDEsIDksMy8qbWVhbiAoMC4yMzk2MiksIGNvcnJlbGF0aW9uICgwLjQ0NDgyNCkqLyxcbiAgICAtNiwtMTAsIC0zLC01LyptZWFuICgwLjI0ODQ1OSksIGNvcnJlbGF0aW9uICgwLjQzOTYyMSkqLyxcbiAgICAtMywtMTMsIC0xLDEvKm1lYW4gKDAuMjQ5NTA1KSwgY29ycmVsYXRpb24gKDAuNDU2NjY2KSovLFxuICAgIDcsNSwgMTIsLTExLyptZWFuICgwLjAwMTE5MjA4KSwgY29ycmVsYXRpb24gKDAuNDk1NDY2KSovLFxuICAgIDQsLTIsIDUsLTcvKm1lYW4gKDAuMDAzNzIyNDUpLCBjb3JyZWxhdGlvbiAoMC40ODQyMTQpKi8sXG4gICAgLTEzLDksIC05LC01LyptZWFuICgwLjAwNzQxMTE2KSwgY29ycmVsYXRpb24gKDAuNDk5ODU0KSovLFxuICAgIDcsMSwgOCw2LyptZWFuICgwLjAyMDg5NTIpLCBjb3JyZWxhdGlvbiAoMC40OTk3NzMpKi8sXG4gICAgNywtOCwgNyw2LyptZWFuICgwLjAyMjAwODUpLCBjb3JyZWxhdGlvbiAoMC41MDE2MDkpKi8sXG4gICAgLTcsLTQsIC03LDEvKm1lYW4gKDAuMDIzMzgwNiksIGNvcnJlbGF0aW9uICgwLjQ5NjU2OCkqLyxcbiAgICAtOCwxMSwgLTcsLTgvKm1lYW4gKDAuMDIzNjUwNSksIGNvcnJlbGF0aW9uICgwLjQ4OTcxOSkqLyxcbiAgICAtMTMsNiwgLTEyLC04LyptZWFuICgwLjAyNjg3ODEpLCBjb3JyZWxhdGlvbiAoMC41MDM0ODcpKi8sXG4gICAgMiw0LCAzLDkvKm1lYW4gKDAuMDMyMzMyNCksIGNvcnJlbGF0aW9uICgwLjUwMTkzOCkqLyxcbiAgICAxMCwtNSwgMTIsMy8qbWVhbiAoMC4wMzk5MjM1KSwgY29ycmVsYXRpb24gKDAuNDk0MDI5KSovLFxuICAgIC02LC01LCAtNiw3LyptZWFuICgwLjA0MjAxNTMpLCBjb3JyZWxhdGlvbiAoMC40ODY1NzkpKi8sXG4gICAgOCwtMywgOSwtOC8qbWVhbiAoMC4wNTQ4MDIxKSwgY29ycmVsYXRpb24gKDAuNDg0MjM3KSovLFxuICAgIDIsLTEyLCAyLDgvKm1lYW4gKDAuMDYxNjYyMiksIGNvcnJlbGF0aW9uICgwLjQ5NjY0MikqLyxcbiAgICAtMTEsLTIsIC0xMCwzLyptZWFuICgwLjA2Mjc3NTUpLCBjb3JyZWxhdGlvbiAoMC40OTg1NjMpKi8sXG4gICAgLTEyLC0xMywgLTcsLTkvKm1lYW4gKDAuMDgyOTYyMiksIGNvcnJlbGF0aW9uICgwLjQ5NTQ5MSkqLyxcbiAgICAtMTEsMCwgLTEwLC01LyptZWFuICgwLjA4NDMzNDIpLCBjb3JyZWxhdGlvbiAoMC40ODcxNDYpKi8sXG4gICAgNSwtMywgMTEsOC8qbWVhbiAoMC4wOTI5OTM3KSwgY29ycmVsYXRpb24gKDAuNTAyMzE1KSovLFxuICAgIC0yLC0xMywgLTEsMTIvKm1lYW4gKDAuMTEzMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5NDEpKi8sXG4gICAgLTEsLTgsIDAsOS8qbWVhbiAoMC4xMzIxMTkpLCBjb3JyZWxhdGlvbiAoMC40NjcyNjgpKi8sXG4gICAgLTEzLC0xMSwgLTEyLC01LyptZWFuICgwLjEzNjI2OSksIGNvcnJlbGF0aW9uICgwLjQ5ODc3MSkqLyxcbiAgICAtMTAsLTIsIC0xMCwxMS8qbWVhbiAoMC4xNDIxNzMpLCBjb3JyZWxhdGlvbiAoMC40OTg3MTQpKi8sXG4gICAgLTMsOSwgLTIsLTEzLyptZWFuICgwLjE0NDE0MSksIGNvcnJlbGF0aW9uICgwLjQ5MTk3MykqLyxcbiAgICAyLC0zLCAzLDIvKm1lYW4gKDAuMTQ4OTIpLCBjb3JyZWxhdGlvbiAoMC41MDA3ODIpKi8sXG4gICAgLTksLTEzLCAtNCwwLyptZWFuICgwLjE1MDM3MSksIGNvcnJlbGF0aW9uICgwLjQ5ODIxMSkqLyxcbiAgICAtNCw2LCAtMywtMTAvKm1lYW4gKDAuMTUyMTU5KSwgY29ycmVsYXRpb24gKDAuNDk1NTQ3KSovLFxuICAgIC00LDEyLCAtMiwtNy8qbWVhbiAoMC4xNTYxNTIpLCBjb3JyZWxhdGlvbiAoMC40OTY5MjUpKi8sXG4gICAgLTYsLTExLCAtNCw5LyptZWFuICgwLjE1NzQ5KSwgY29ycmVsYXRpb24gKDAuNDk5MjIyKSovLFxuICAgIDYsLTMsIDYsMTEvKm1lYW4gKDAuMTU5MjExKSwgY29ycmVsYXRpb24gKDAuNTAzODIxKSovLFxuICAgIC0xMywxMSwgLTUsNS8qbWVhbiAoMC4xNjI0MjcpLCBjb3JyZWxhdGlvbiAoMC41MDE5MDcpKi8sXG4gICAgMTEsMTEsIDEyLDYvKm1lYW4gKDAuMTY2NTIpLCBjb3JyZWxhdGlvbiAoMC40OTc2MzIpKi8sXG4gICAgNywtNSwgMTIsLTIvKm1lYW4gKDAuMTY5MTQxKSwgY29ycmVsYXRpb24gKDAuNDg0NDc0KSovLFxuICAgIC0xLDEyLCAwLDcvKm1lYW4gKDAuMTY5NDU2KSwgY29ycmVsYXRpb24gKDAuNDk1MzM5KSovLFxuICAgIC00LC04LCAtMywtMi8qbWVhbiAoMC4xNzE0NTcpLCBjb3JyZWxhdGlvbiAoMC40ODcyNTEpKi8sXG4gICAgLTcsMSwgLTYsNy8qbWVhbiAoMC4xNzUpLCBjb3JyZWxhdGlvbiAoMC41MDAwMjQpKi8sXG4gICAgLTEzLC0xMiwgLTgsLTEzLyptZWFuICgwLjE3NTg2NiksIGNvcnJlbGF0aW9uICgwLjQ5NzUyMykqLyxcbiAgICAtNywtMiwgLTYsLTgvKm1lYW4gKDAuMTc4MjczKSwgY29ycmVsYXRpb24gKDAuNTAxODU0KSovLFxuICAgIC04LDUsIC02LC05LyptZWFuICgwLjE4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ5NDg4OCkqLyxcbiAgICAtNSwtMSwgLTQsNS8qbWVhbiAoMC4xOTAyMjcpLCBjb3JyZWxhdGlvbiAoMC40ODI1NTcpKi8sXG4gICAgLTEzLDcsIC04LDEwLyptZWFuICgwLjE5NjczOSksIGNvcnJlbGF0aW9uICgwLjQ5NjUwMykqLyxcbiAgICAxLDUsIDUsLTEzLyptZWFuICgwLjE5OTczKSwgY29ycmVsYXRpb24gKDAuNDk5NzU5KSovLFxuICAgIDEsMCwgMTAsLTEzLyptZWFuICgwLjIwNDQ2NSksIGNvcnJlbGF0aW9uICgwLjQ5ODczKSovLFxuICAgIDksMTIsIDEwLC0xLyptZWFuICgwLjIwOTMzNCksIGNvcnJlbGF0aW9uICgwLjQ5MDYzKSovLFxuICAgIDUsLTgsIDEwLC05LyptZWFuICgwLjIxMTEzNCksIGNvcnJlbGF0aW9uICgwLjUwMzAxMSkqLyxcbiAgICAtMSwxMSwgMSwtMTMvKm1lYW4gKDAuMjEyKSwgY29ycmVsYXRpb24gKDAuNDk5NDE0KSovLFxuICAgIC05LC0zLCAtNiwyLyptZWFuICgwLjIxMjE2OCksIGNvcnJlbGF0aW9uICgwLjQ4MDczOSkqLyxcbiAgICAtMSwtMTAsIDEsMTIvKm1lYW4gKDAuMjEyNzMxKSwgY29ycmVsYXRpb24gKDAuNTAyNTIzKSovLFxuICAgIC0xMywxLCAtOCwtMTAvKm1lYW4gKDAuMjEzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk3ODYpKi8sXG4gICAgOCwtMTEsIDEwLC02LyptZWFuICgwLjIxNDE1OSksIGNvcnJlbGF0aW9uICgwLjQ4ODI0NikqLyxcbiAgICAyLC0xMywgMywtNi8qbWVhbiAoMC4yMTY5OTMpLCBjb3JyZWxhdGlvbiAoMC41MDI4NykqLyxcbiAgICA3LC0xMywgMTIsLTkvKm1lYW4gKDAuMjIzNjM5KSwgY29ycmVsYXRpb24gKDAuNDcwNTAyKSovLFxuICAgIC0xMCwtMTAsIC01LC03LyptZWFuICgwLjIyNDA4OSksIGNvcnJlbGF0aW9uICgwLjUwMDg1MikqLyxcbiAgICAtMTAsLTgsIC04LC0xMy8qbWVhbiAoMC4yMjg2NjYpLCBjb3JyZWxhdGlvbiAoMC41MDI2MjkpKi8sXG4gICAgNCwtNiwgOCw1LyptZWFuICgwLjIyOTA2KSwgY29ycmVsYXRpb24gKDAuNDk4MzA1KSovLFxuICAgIDMsMTIsIDgsLTEzLyptZWFuICgwLjIzMzM3OCksIGNvcnJlbGF0aW9uICgwLjUwMzgyNSkqLyxcbiAgICAtNCwyLCAtMywtMy8qbWVhbiAoMC4yMzQzMjMpLCBjb3JyZWxhdGlvbiAoMC40NzY2OTIpKi8sXG4gICAgNSwtMTMsIDEwLC0xMi8qbWVhbiAoMC4yMzYzOTIpLCBjb3JyZWxhdGlvbiAoMC40NzU0NjIpKi8sXG4gICAgNCwtMTMsIDUsLTEvKm1lYW4gKDAuMjM2ODQyKSwgY29ycmVsYXRpb24gKDAuNTA0MTMyKSovLFxuICAgIC05LDksIC00LDMvKm1lYW4gKDAuMjM2OTc3KSwgY29ycmVsYXRpb24gKDAuNDk3NzM5KSovLFxuICAgIDAsMywgMywtOS8qbWVhbiAoMC4yNDMxNCksIGNvcnJlbGF0aW9uICgwLjQ5OTM5OCkqLyxcbiAgICAtMTIsMSwgLTYsMS8qbWVhbiAoMC4yNDMyOTcpLCBjb3JyZWxhdGlvbiAoMC40ODk0NDcpKi8sXG4gICAgMywyLCA0LC04LyptZWFuICgwLjAwMTU1MTk2KSwgY29ycmVsYXRpb24gKDAuNTUzNDk2KSovLFxuICAgIC0xMCwtMTAsIC0xMCw5LyptZWFuICgwLjAwMjM5NTQxKSwgY29ycmVsYXRpb24gKDAuNTQyOTcpKi8sXG4gICAgOCwtMTMsIDEyLDEyLyptZWFuICgwLjAwMzQ0MTMpLCBjb3JyZWxhdGlvbiAoMC41NDQzNjEpKi8sXG4gICAgLTgsLTEyLCAtNiwtNS8qbWVhbiAoMC4wMDM1NjUpLCBjb3JyZWxhdGlvbiAoMC41NTEyMjUpKi8sXG4gICAgMiwyLCAzLDcvKm1lYW4gKDAuMDA4MzU1ODMpLCBjb3JyZWxhdGlvbiAoMC41NTI4NSkqLyxcbiAgICAxMCw2LCAxMSwtOC8qbWVhbiAoMC4wMDg4NTA2NSksIGNvcnJlbGF0aW9uICgwLjU0MDkxMykqLyxcbiAgICA2LDgsIDgsLTEyLyptZWFuICgwLjAxMDE1NTIpLCBjb3JyZWxhdGlvbiAoMC41NTEwODUpKi8sXG4gICAgLTcsMTAsIC02LDUvKm1lYW4gKDAuMDEwMjIyNyksIGNvcnJlbGF0aW9uICgwLjUzMzYzNSkqLyxcbiAgICAtMywtOSwgLTMsOS8qbWVhbiAoMC4wMTEwMjExKSwgY29ycmVsYXRpb24gKDAuNTQzMTIxKSovLFxuICAgIC0xLC0xMywgLTEsNS8qbWVhbiAoMC4wMTEzNDczKSwgY29ycmVsYXRpb24gKDAuNTUwMTczKSovLFxuICAgIC0zLC03LCAtMyw0LyptZWFuICgwLjAxNDA5MTMpLCBjb3JyZWxhdGlvbiAoMC41NTQ3NzQpKi8sXG4gICAgLTgsLTIsIC04LDMvKm1lYW4gKDAuMDE3MDQ5KSwgY29ycmVsYXRpb24gKDAuNTU0NjEpKi8sXG4gICAgNCwyLCAxMiwxMi8qbWVhbiAoMC4wMTc3OCksIGNvcnJlbGF0aW9uICgwLjU0NjkyMSkqLyxcbiAgICAyLC01LCAzLDExLyptZWFuICgwLjAyMjQwMjIpLCBjb3JyZWxhdGlvbiAoMC41NDk2NjcpKi8sXG4gICAgNiwtOSwgMTEsLTEzLyptZWFuICgwLjAyOTE2MSksIGNvcnJlbGF0aW9uICgwLjU0NjI5NSkqLyxcbiAgICAzLC0xLCA3LDEyLyptZWFuICgwLjAzMDMwODEpLCBjb3JyZWxhdGlvbiAoMC41NDg1OTkpKi8sXG4gICAgMTEsLTEsIDEyLDQvKm1lYW4gKDAuMDM1NTE1MSksIGNvcnJlbGF0aW9uICgwLjUyMzk0MykqLyxcbiAgICAtMywwLCAtMyw2LyptZWFuICgwLjA0MTc5MDQpLCBjb3JyZWxhdGlvbiAoMC41NDMzOTUpKi8sXG4gICAgNCwtMTEsIDQsMTIvKm1lYW4gKDAuMDQ4NzI5MiksIGNvcnJlbGF0aW9uICgwLjU0MjgxOCkqLyxcbiAgICAyLC00LCAyLDEvKm1lYW4gKDAuMDU3NTEyNCksIGNvcnJlbGF0aW9uICgwLjU1NDg4OCkqLyxcbiAgICAtMTAsLTYsIC04LDEvKm1lYW4gKDAuMDU5NDI0MiksIGNvcnJlbGF0aW9uICgwLjU0NDAyNikqLyxcbiAgICAtMTMsNywgLTExLDEvKm1lYW4gKDAuMDU5NzM5MSksIGNvcnJlbGF0aW9uICgwLjU1MDUyNCkqLyxcbiAgICAtMTMsMTIsIC0xMSwtMTMvKm1lYW4gKDAuMDYwODk3NCksIGNvcnJlbGF0aW9uICgwLjU1MzgzKSovLFxuICAgIDYsMCwgMTEsLTEzLyptZWFuICgwLjA2NTEyNiksIGNvcnJlbGF0aW9uICgwLjU1MjAwNikqLyxcbiAgICAwLC0xLCAxLDQvKm1lYW4gKDAuMDc0MjI0KSwgY29ycmVsYXRpb24gKDAuNTQ2MzcyKSovLFxuICAgIC0xMywzLCAtOSwtMi8qbWVhbiAoMC4wODA4NTkyKSwgY29ycmVsYXRpb24gKDAuNTU0ODc1KSovLFxuICAgIC05LDgsIC02LC0zLyptZWFuICgwLjA4ODMzNzgpLCBjb3JyZWxhdGlvbiAoMC41NTExNzgpKi8sXG4gICAgLTEzLC02LCAtOCwtMi8qbWVhbiAoMC4wOTAxMDM1KSwgY29ycmVsYXRpb24gKDAuNTQ4NDQ2KSovLFxuICAgIDUsLTksIDgsMTAvKm1lYW4gKDAuMDk0OTg0MyksIGNvcnJlbGF0aW9uICgwLjU1NDY5NCkqLyxcbiAgICAyLDcsIDMsLTkvKm1lYW4gKDAuMDk5NDE1MiksIGNvcnJlbGF0aW9uICgwLjU1MDk3OSkqLyxcbiAgICAtMSwtNiwgLTEsLTEvKm1lYW4gKDAuMTAwNDUpLCBjb3JyZWxhdGlvbiAoMC41NTI3MTQpKi8sXG4gICAgOSw1LCAxMSwtMi8qbWVhbiAoMC4xMDA2ODYpLCBjb3JyZWxhdGlvbiAoMC41NTI1OTQpKi8sXG4gICAgMTEsLTMsIDEyLC04LyptZWFuICgwLjEwMTA5MSksIGNvcnJlbGF0aW9uICgwLjUzMjM5NCkqLyxcbiAgICAzLDAsIDMsNS8qbWVhbiAoMC4xMDExNDcpLCBjb3JyZWxhdGlvbiAoMC41MjU1NzYpKi8sXG4gICAgLTEsNCwgMCwxMC8qbWVhbiAoMC4xMDUyNjMpLCBjb3JyZWxhdGlvbiAoMC41MzE0OTgpKi8sXG4gICAgMywtNiwgNCw1LyptZWFuICgwLjExMDc4NSksIGNvcnJlbGF0aW9uICgwLjU0MDQ5MSkqLyxcbiAgICAtMTMsMCwgLTEwLDUvKm1lYW4gKDAuMTEyNzk4KSwgY29ycmVsYXRpb24gKDAuNTM2NTgyKSovLFxuICAgIDUsOCwgMTIsMTEvKm1lYW4gKDAuMTE0MTgxKSwgY29ycmVsYXRpb24gKDAuNTU1NzkzKSovLFxuICAgIDgsOSwgOSwtNi8qbWVhbiAoMC4xMTc0MzEpLCBjb3JyZWxhdGlvbiAoMC41NTM3NjMpKi8sXG4gICAgNywtNCwgOCwtMTIvKm1lYW4gKDAuMTE4NTIyKSwgY29ycmVsYXRpb24gKDAuNTUzNDUyKSovLFxuICAgIC0xMCw0LCAtMTAsOS8qbWVhbiAoMC4xMjA5NCksIGNvcnJlbGF0aW9uICgwLjU1NDc4NSkqLyxcbiAgICA3LDMsIDEyLDQvKm1lYW4gKDAuMTIyNTgyKSwgY29ycmVsYXRpb24gKDAuNTU1ODI1KSovLFxuICAgIDksLTcsIDEwLC0yLyptZWFuICgwLjEyNDk3OCksIGNvcnJlbGF0aW9uICgwLjU0OTg0NikqLyxcbiAgICA3LDAsIDEyLC0yLyptZWFuICgwLjEyNzAwMiksIGNvcnJlbGF0aW9uICgwLjUzNzQ1MikqLyxcbiAgICAtMSwtNiwgMCwtMTEvKm1lYW4gKDAuMTI3MTQ4KSwgY29ycmVsYXRpb24gKDAuNTQ3NDAxKSovXG5dOyIsImltcG9ydCB7IG1hdHJpeF90IH0gZnJvbSBcIi4uL21hdHJpeF90L21hdHJpeF90XCJcbmltcG9ydCB7IGltZ3Byb2MgfSBmcm9tIFwiLi4vaW1ncHJvYy9pbWdwcm9jXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgYW5nbGU6IG51bWJlciwgcHg6IG51bWJlciwgcHk6IG51bWJlciwgcHNpemU6IG51bWJlciwgSDogbWF0cml4X3QsIGltZ3Byb2M6IGltZ3Byb2MpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3Byb2Mud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzJ1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdCdcbmltcG9ydCB7IGtleXBvaW50X3QgfSBmcm9tICcuLi9rZXlwb2ludF90L2tleXBvaW50X3QnXG5leHBvcnQgY2xhc3MgeWFwZSB7XG4gICAgcHJpdmF0ZSBsZXZlbF90YWJsZXM6IGxldl90YWJsZV90W107XG4gICAgcHJpdmF0ZSB0YXU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBweXJhbWlkX2xldmVsczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgcHlyYW1pZF9sZXZlbHMgPT09IFwidW5kZWZpbmVkXCIpIHsgcHlyYW1pZF9sZXZlbHMgPSAxOyB9XG4gICAgICAgIHZhciBpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1pbihyYWRpdXMsIDcpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heChyYWRpdXMsIDMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHlyYW1pZF9sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF90YWJsZXNbaV0gPSBuZXcgbGV2X3RhYmxlX3Qod2lkdGggPj4gaSwgaGVpZ2h0ID4+IGksIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3Qoc3JjOiBtYXRyaXhfdCwgcG9pbnRzOiBrZXlwb2ludF90W10sIGJvcmRlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHN0ZXA6IG51bWJlciwgZGlyczogSW50MzJBcnJheSwgUjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHgsIHk7XG5cbiAgICB4ID0gUjtcbiAgICBmb3IgKHkgPSAwOyB5IDwgeDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeC0tOyB4IDwgeSAmJiB4ID49IDA7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgLXggPCB5OyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5LS07IHkgPj0gMDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeSA+IHg7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4Kys7IHggPD0gMDsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeCA8IC15OyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeSsrOyB5IDwgMDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuXG4gICAgZGlyc1tpXSA9IGRpcnNbMF07XG4gICAgZGlyc1tpICsgMV0gPSBkaXJzWzFdO1xuICAgIHJldHVybiBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRfY2hlY2soU2I6IEludDMyQXJyYXkgfCBudW1iZXJbXSwgb2ZmOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgIHZhciBuID0gMDtcbiAgICBpZiAoU2Jbb2ZmICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwIC0gMV0gIT0gMCkgbisrO1xuXG4gICAgcmV0dXJuIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc19sb2NhbF9tYXhpbWEocDogSW50MzJBcnJheSwgb2ZmOiBudW1iZXIsIHY6IG51bWJlciwgc3RlcDogbnVtYmVyLCBuZWlnaGJvcmhvb2Q6IG51bWJlcikge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEk6IHsgW3g6IHN0cmluZ106IG51bWJlcjsgfSwgeDogbnVtYmVyLCBTY29yZXM6IEludDMyQXJyYXksIEltOiBudW1iZXIsIElwOiBudW1iZXIsIGRpcnM6IGFueVtdIHwgSW50MzJBcnJheSwgb3Bwb3NpdGU6IG51bWJlciwgZGlyc19uYjogbnVtYmVyKSB7XG4gICAgdmFyIHNjb3JlID0gMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAob3Bwb3NpdGUgLSAxKSB8IDA7XG4gICAgdmFyIEEgPSAwLCBCMCA9IDAsIEIxID0gMCwgQjIgPSAwO1xuICAgIHZhciBzdGF0ZSA9IDA7XG5cbiAgICAvLyBXRSBLTk9XIFRIQVQgTk9UKEEgfiBJMCAmIEIxIH4gSTApOlxuICAgIEEgPSBJW3ggKyBkaXJzW2FdXTtcbiAgICBpZiAoKEEgPD0gSXApKSB7XG4gICAgICAgIGlmICgoQSA+PSBJbSkpIHsgLy8gQSB+IEkwXG4gICAgICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMCA8PSBJcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKEIwID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZS8qIGlmICgoQjEgPCBJbSkpKi8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy8gQjAgPCBJMFxuICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIxIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy8gQSA+IEkwXG4gICAgICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMCA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgLy8gQSA8IEkwXG4gICAge1xuICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIwIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgc3RhdGUgPSAwO1xuICAgIH1cblxuICAgIGZvciAoYSA9IDE7IGEgPD0gb3Bwb3NpdGU7IGErKykge1xuICAgICAgICBBID0gSVt4ICsgZGlyc1thXV07XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA4OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMSA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA5OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA4OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy9cIlBCIGRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBzd2l0Y2goc3RhdGUpXG4gICAgfSAvLyBmb3IoYS4uLilcblxuICAgIFNjb3Jlc1t4XSA9IChzY29yZSArIGRpcnNfbmIgKiBJW3hdKTtcbn1cblxuZXhwb3J0IGNsYXNzIGxldl90YWJsZV90IHtcbiAgICBwdWJsaWMgZGlyczogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZGlyc19jb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBzY29yZXM6IEludDMyQXJyYXk7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHc6IG51bWJlciwgaDogbnVtYmVyLCByOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXJzID0gbmV3IEludDMyQXJyYXkoMTAyNCk7XG4gICAgICAgIHRoaXMuZGlyc19jb3VudCA9IHByZWNvbXB1dGVfZGlyZWN0aW9ucyh3LCB0aGlzLmRpcnMsIHIpIHwgMDtcbiAgICAgICAgdGhpcy5zY29yZXMgPSBuZXcgSW50MzJBcnJheSh3ICogaCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gciB8IDA7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX2xhcGxhY2lhbihzcmM6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIGRzdDogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSwgdzogbnVtYmVyLCBoOiBhbnksIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgc3g6IG51bWJlciwgc3k6IG51bWJlciwgZXg6IG51bWJlciwgZXk6IG51bWJlcik6IHZvaWQge1xuICAgIHZhciB5ID0gMCwgeCA9IDAsIHlyb3cgPSAoc3kgKiB3ICsgc3gpIHwgMCwgcm93ID0geXJvdztcblxuICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgeXJvdyArPSB3LCByb3cgPSB5cm93KSB7XG4gICAgICAgIGZvciAoeCA9IHN4OyB4IDwgZXg7ICsreCwgKytyb3cpIHtcbiAgICAgICAgICAgIGRzdFtyb3ddID0gLTQgKiBzcmNbcm93XSArIHNyY1tyb3cgKyBEeHhdICsgc3JjW3JvdyAtIER4eF0gKyBzcmNbcm93ICsgRHl5XSArIHNyY1tyb3cgLSBEeXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JjOiBudW1iZXJbXSwgb2ZmOiBudW1iZXIsIHRyOiBudW1iZXIsIER4eDogbnVtYmVyLCBEeXk6IG51bWJlciwgRHh5OiBudW1iZXIsIER5eDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICB2YXIgSXh4ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeHhdICsgc3JjW29mZiAtIER4eF07XG4gICAgdmFyIEl5eSA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHl5XSArIHNyY1tvZmYgLSBEeXldO1xuICAgIHZhciBJeHkgPSBzcmNbb2ZmICsgRHh5XSArIHNyY1tvZmYgLSBEeHldIC0gc3JjW29mZiArIER5eF0gLSBzcmNbb2ZmIC0gRHl4XTtcbiAgICB2YXIgc3FydF9kZWx0YSA9IChNYXRoLnNxcnQoKChJeHggLSBJeXkpICogKEl4eCAtIEl5eSkgKyA0ICogSXh5ICogSXh5KSkpIHwgMDtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmFicyh0ciAtIHNxcnRfZGVsdGEpLCBNYXRoLmFicygtKHRyICsgc3FydF9kZWx0YSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0J1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsIlU4QzFfdCIsIlU4QzNfdCIsIlU4QzRfdCIsIkYzMkMxX3QiLCJGMzJDMl90IiwiUzMyQzFfdCIsIlMzMkMyX3QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIl9jbXBfc2NvcmVfMTYiLCJzcmMiLCJvZmYiLCJwaXhlbCIsImQiLCJ0aHJlc2hvbGQiLCJOIiwiayIsInYiLCJhMCIsImEiLCJiMCIsImIiLCJNYXRoIiwibWluIiwibWF4IiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwic3AiLCJkcCIsInN1bSIsInN1bTEiLCJzdW0yIiwic3VtMyIsImYwIiwiZmsiLCJ3MiIsInczIiwidzQiLCJfY29udm9sIiwiX3Jlc2FtcGxlX3U4IiwiZHN0IiwibnciLCJuaCIsInhvZnNfY291bnQiLCJjaCIsImNoYW5uZWwiLCJjb2xzIiwicm93cyIsImRhdGEiLCJzY2FsZV94Iiwic2NhbGVfeSIsImludl9zY2FsZV8yNTYiLCJkeCIsImR5Iiwic3giLCJzeSIsInN4MSIsInN4MiIsImZzeDEiLCJmc3gyIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJidWZfbm9kZSIsImdldF9idWZmZXIiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImkzMiIsInhvZnMiLCJwdXRfYnVmZmVyIiwiX3Jlc2FtcGxlIiwic2NhbGUiLCJmMzIiLCJhYnMiLCJzd2FwIiwiaHlwb3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJrZXlwb2ludF90IiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwieWFwZSIsImNvbXB1dGVfbGFwbGFjaWFuIiwiaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUiLCJyYW5zYWNfcGFyYW1zX3QiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJhbGxvY2F0ZSIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwieCIsImZyb20iLCJ0byIsImNvdW50IiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJ5Iiwic3FydCIsIlNRUlQyIiwicG9pbnRzIiwiZHgxIiwiZHkxIiwiZHgyIiwiZHkyIiwiYWZmaW5lMmQiLCJtb2RlbCIsIm1kIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImxpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYV9idWZmIiwiYl9idWZmIiwiYV9tdCIsImJfbXQiLCJhZCIsImJkIiwibXVsdGlwbHlfQXRBIiwibXVsdGlwbHlfQXRCIiwibHVfc29sdmUiLCJpbnZlcnRfM3gzIiwibXVsdGlwbHlfM3gzIiwiaG9tb2dyYXBoeTJkIiwibUx0TCIsIkV2ZWMiLCJMdEwiLCJldmQiLCJYIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJlcnIiLCJ3dyIsIm0iLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHlyYW1pZF90IiwibGV2ZWxzIiwiQXJyYXkiLCJfaW1ncHJvYyIsImltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiLCJmYXN0X2Nvcm5lcnMiLCJvZmZzZXRzMTYiLCJ0aHJlc2hvbGRfdGFiIiwiVWludDhBcnJheSIsIl90aHJlc2hvbGQiLCJwaXhlbF9vZmYiLCJzY29yZV9kaWZmIiwiY29ybmVycyIsImJvcmRlciIsIksiLCJpbWciLCJ2dCIsIm0zIiwiY3BidWZfbm9kZSIsInU4IiwiY3BidWYiLCJzZCIsImV5IiwiZXgiLCJfY291bnQiLCJjb3JuZXJzX2NudCIsInB0Iiwic2NvcmVfZnVuYyIsInRocmVzaF90YWIiLCJ0YWIiLCJuY29ybmVycyIsImNvcm5lcnBvcyIsImN1cnIiLCJwdHIiLCJwcmV2IiwicHByZXYiLCJqcDEiLCJqbTEiLCJzY29yZSIsIl9jbXBfb2Zmc2V0cyIsInBpeGVsMCIsInBpeGVsMSIsInBpeGVsMiIsInBpeGVsMyIsInBpeGVsNCIsInBpeGVsNSIsInBpeGVsNiIsInBpeGVsNyIsInBpeGVsOCIsInBpeGVsOSIsInBpeGVsMTAiLCJwaXhlbDExIiwicGl4ZWwxMiIsInBpeGVsMTMiLCJwaXhlbDE0IiwicGl4ZWwxNSIsInN0ZXAiLCJwYXR0ZXJuX3NpemUiLCJvZmZzZXRzIiwiY29kZSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsInJhZGl1cyIsIm9wdGlvbnMiLCJoMiIsImVuZCIsIndpbmRvd1NpemUiLCJyYWRpdXNQbHVzT25lIiwicmFkaXVzUGx1czIiLCJ0bXBfYnVmZiIsImRzdEluZGV4Iiwic3JjSW5kZXgiLCJuZXh0UGl4ZWxJbmRleCIsInByZXZpb3VzUGl4ZWxJbmRleCIsImRhdGFfaTMyIiwiZGF0YV91OCIsImhvbGQiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXRoIiwiaXNfdTgiLCJidWZfc3oiLCJmaWx0X25vZGUiLCJnZXRfZ2F1c3NpYW5fa2VybmVsIiwicmhvX3JlcyIsInRoZXRhX3JlcyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiZHN0ZXAiLCJ4MSIsImMiLCJlIiwiZiIsInNyb3cwIiwic3JvdzEiLCJzcm93MiIsImRyb3ciLCJ0cm93MCIsInRyb3cxIiwiZ3hneSIsImJ1ZjBfbm9kZSIsImJ1ZjFfbm9kZSIsImRzdF9zdW0iLCJkc3Rfc3FzdW0iLCJkc3RfdGlsdGVkIiwidzAiLCJoMCIsIncxIiwicyIsInMyIiwicCIsInB1cCIsImhpc3QwIiwibm9ybSIsImhpc3QwX25vZGUiLCJsb3dfdGhyZXNoIiwiaGlnaF90aHJlc2giLCJncmFkIiwiX2dyYWQiLCJzdXBwcmVzcyIsInRnMjJ4IiwidGc2N3giLCJkeGR5X25vZGUiLCJtYXBfbm9kZSIsInN0YWNrX25vZGUiLCJtYXAiLCJzdGFjayIsImR4ZHkiLCJkeGR5X20iLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsInNvYmVsX2Rlcml2YXRpdmVzIiwiTnVtYmVyIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0IiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInhzMCIsInlzMCIsIndzIiwic2MiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJnIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJ0Iiwic2lnbWFfeCIsInNjYWxlXzJ4Iiwia2Vybl9ub2RlIiwiX2tlcm5lbCIsImV4cCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQxIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJwdHIyIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90Iiwic3dhcF9jbnQiLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiQSIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsImVwcyIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwiaW5kUl9idWZmIiwiaW5kQ19idWZmIiwiaW5kUiIsImluZEMiLCJBdCIsIl9XIiwiVnQiLCJuMSIsIm1pbnZhbCIsIml0ZXIiLCJBaSIsIkFqIiwiVmkiLCJWaiIsImNoYW5nZWQiLCJ0MCIsImdhbW1hIiwiZGVsdGEiLCJzZWVkIiwidmFsMCIsImFzdW0iLCJXX2J1ZmYiLCJmNjQiLCJCIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJ3X210Iiwidl9tdCIsInRyYW5zcG9zZSIsIkphY29iaVNWREltcGwiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwib3JiIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImRlc2NyaXB0b3JzIiwiREVTQ1JfU0laRSIsImFuZ2xlIiwicGF0Y2hfZCIsInBhdGNoX29mZiIsInBhdHQiLCJkZXNjcl9kIiwiZGVzY3Jfb2ZmIiwieWFwZTA2IiwibGFwbGFjaWFuX3RocmVzaG9sZCIsIm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQiLCJzcmRfZCIsIkR4eCIsIkR5eSIsIkR4eSIsIkR5eCIsImxhcF9idWYiLCJsYXBsYWNpYW4iLCJsdiIsInJvd3giLCJtaW5fZWlnZW5fdmFsdWUiLCJudW1iZXJfb2ZfcG9pbnRzIiwibGFwX3RocmVzaCIsImVpZ2VuX3RocmVzaCIsIm1vdGlvbl9lc3RpbWF0b3IiLCJuZWVkX2NudCIsIm1heF9jbnQiLCJmcm9tX3N1YiIsInRvX3N1YiIsIm1heF90cnkiLCJpbmRpY2VzIiwic3NpdGVyIiwiaWR4X2kiLCJvayIsInJhbmRvbSIsImNoZWNrX3N1YnNldCIsInRocmVzaCIsIm1hc2siLCJudW1pbmxpZXJzIiwiZXJyb3IiLCJwYXJhbXMiLCJtYXhfaXRlcnMiLCJtb2RlbF9wb2ludHMiLCJuaXRlcnMiLCJyZXN1bHQiLCJzdWJzZXQwIiwic3Vic2V0MSIsImZvdW5kIiwibWMiLCJtciIsIm1fYnVmZiIsIm1zX2J1ZmYiLCJlcnJfYnVmZiIsIk0iLCJjdXJyX21hc2siLCJpbmxpZXJzX21heCIsIm5tb2RlbHMiLCJydW4iLCJjb3B5X3RvIiwiZ2V0X3N1YnNldCIsImZpbmRfaW5saWVycyIsInVwZGF0ZV9pdGVycyIsIl9tYXRoIiwibWluX21lZGlhbiIsIm9wdGljYWxfZmxvd19sayIsInNjaGFycl9kZXJpdiIsInNjaGFycl9kZXJpdmF0aXZlcyIsInByZXZfcHlyIiwiY3Vycl9weXIiLCJwcmV2X3h5IiwiY3Vycl94eSIsIndpbl9zaXplIiwic3RhdHVzIiwibWluX2VpZ2VuX3RocmVzaG9sZCIsImhhbGZfd2luIiwid2luX2FyZWEiLCJ3aW5fYXJlYTIiLCJwcmV2X2ltZ3MiLCJuZXh0X2ltZ3MiLCJpbWdfcHJldiIsImltZ19uZXh0IiwibHciLCJsaCIsIml3aW5fbm9kZSIsImRlcml2X2l3aW5fbm9kZSIsImRlcml2X2xldl9ub2RlIiwiZGVyaXZfbSIsIml3aW5fYnVmIiwiZGVyaXZfaXdpbiIsImRlcml2X2xldiIsImRzcmMiLCJpcHRyIiwiZGlwdHIiLCJqcHRyIiwibGV2X3NjIiwicHJldl94IiwicHJldl95IiwibmV4dF94IiwibmV4dF95IiwicHJldl9kZWx0YV94IiwicHJldl9kZWx0YV95IiwiZGVsdGFfeCIsImRlbHRhX3kiLCJpcHJldl94IiwiaXByZXZfeSIsImluZXh0X3giLCJpbmV4dF95IiwibGV2ZWwiLCJwdGlkIiwiYnJkX3RsIiwiYnJkX3IiLCJicmRfYiIsImIxIiwiYjIiLCJXX0JJVFMxNCIsIldfQklUUzQiLCJXX0JJVFMxbTUiLCJXX0JJVFMxbTUxIiwiV19CSVRTMTRfIiwiV19CSVRTNDEiLCJGTFRfU0NBTEUiLCJpdzAwIiwiaXcwMSIsIml3MTAiLCJpdzExIiwiaXZhbCIsIml4dmFsIiwiaXl2YWwiLCJEIiwibWluX2VpZyIsIkZMVF9FUFNJTE9OIiwibWF4X2xldmVsIiwiaTAiLCJpMSIsInZhbHVlIiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwiQyIsIkFwIiwicEEiLCJwQiIsInBfQiIsIkNwIiwibWNvbHMiLCJjZCIsIm1yb3dzIiwicENkaWFnIiwicF9BIiwicEMiLCJwQ3QiLCJwX0MiLCJwX0NDIiwiaW52QSIsInQxMyIsInQxNyIsIkNkIiwiQWQiLCJCZCIsIm0xXzAiLCJtMV8xIiwibTFfMiIsIm0xXzMiLCJtMV80IiwibTFfNSIsIm0xXzYiLCJtMV83IiwibTFfOCIsIm0yXzAiLCJtMl8xIiwibTJfMiIsIm0yXzMiLCJtMl80IiwibTJfNSIsIm0yXzYiLCJtMl83IiwibTJfOCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsImRhdGFfdCIsIl9kYXRhX3R5cGUiLCJfZGF0YV9idWZmZXIiLCJidWZmZXIiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJGbG9hdDY0QXJyYXkiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJ3YXJwX2FmZmluZSIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsImlwIiwiaW0iLCJhYnNfc2NvcmUiLCJwcmVjb21wdXRlX2RpcmVjdGlvbnMiLCJTYiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=