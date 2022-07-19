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
  SVD_V_T: 0x02
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

/***/ "./src/imgproc/imgproc.js":
/*!********************************!*\
  !*** ./src/imgproc/imgproc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imgproc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _resample_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resample.js */ "./src/imgproc/resample.js");
/* harmony import */ var _convol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convol.js */ "./src/imgproc/convol.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math/math.js */ "./src/math/math.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");









var imgproc = /*#__PURE__*/function () {
  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, imgproc);

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.cache.allocate(30, 640 * 4);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(imgproc, [{
    key: "grayscale",
    value: function grayscale(src, w, h, dst, code) {
      // this is default image data representation in browser
      if (typeof code === "undefined") {
        code = _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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

        if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
          (0,_resample_js__WEBPACK_IMPORTED_MODULE_2__._resample_u8)(src, dst, this.cache, nw, nh);
        } else {
          (0,_resample_js__WEBPACK_IMPORTED_MODULE_2__._resample)(src, dst, this.cache, nw, nh);
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
      var scale = options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
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
      var jsfeatmath = new _math_math_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

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
          is_u8 = data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.S32_t) {
        buf = buf_node.i32;
        filter = filt_node.f32;
      } else {
        buf = buf_node.f32;
        filter = filt_node.f32;
      }

      jsfeatmath.get_gaussian_kernel(kernel_size, sigma, filter, data_type);

      if (is_u8) {
        (0,_convol_js__WEBPACK_IMPORTED_MODULE_3__._convol_u8)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      } else {
        (0,_convol_js__WEBPACK_IMPORTED_MODULE_3__._convol)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
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

      if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.S32_t) {
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
      var dxdy_m = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_6__["default"](w, h, _constants_constants_js__WEBPACK_IMPORTED_MODULE_7__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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
}();



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _node_utils_pool_node_t_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_utils/_pool_node_t.js */ "./src/node_utils/_pool_node_t.js");
/* harmony import */ var _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data_type/data_type.js */ "./src/data_type/data_type.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_utils/data_t.js */ "./src/node_utils/data_t.js");
/* harmony import */ var _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keypoint_t/keypoint_t.js */ "./src/keypoint_t/keypoint_t.js");
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgproc/imgproc.js */ "./src/imgproc/imgproc.js");
/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/math.js */ "./src/math/math.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matmath/matmath.js */ "./src/matmath/matmath.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _pyramid_t_pyramid_t_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pyramid_t/pyramid_t.js */ "./src/pyramid_t/pyramid_t.js");
/* harmony import */ var _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./linalg/linalg.js */ "./src/linalg/linalg.js");
/* harmony import */ var _orb_orb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orb/orb.js */ "./src/orb/orb.js");
/* harmony import */ var _yape_yape_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./yape/yape.js */ "./src/yape/yape.js");
/* harmony import */ var _yape06_yape06_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./yape06/yape06.js */ "./src/yape06/yape06.js");
/* harmony import */ var _motion_estimator_motion_estimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./motion_estimator/motion_estimator.js */ "./src/motion_estimator/motion_estimator.js");
/* harmony import */ var _motion_estimator_motion_model_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./motion_estimator/motion_model.js */ "./src/motion_estimator/motion_model.js");
/* harmony import */ var _motion_estimator_ransac_params_t_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./motion_estimator/ransac_params_t.js */ "./src/motion_estimator/ransac_params_t.js");
/* harmony import */ var _optical_flow_lk_optical_flow_lk_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./optical_flow_lk/optical_flow_lk.js */ "./src/optical_flow_lk/optical_flow_lk.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../package.json */ "./package.json");
























var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, jsfeatNext);

    this.dt = new _data_type_data_type_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  } // VERSION


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(jsfeatNext, [{
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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_22__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "EPSILON", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "FLT_MIN", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C1_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C2_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C3_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C4_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_U_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_V_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);


jsfeatNext.data_t = _node_utils_data_t_js__WEBPACK_IMPORTED_MODULE_6__["default"];
jsfeatNext.matrix_t = _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_11__["default"];
jsfeatNext.pyramid_t = _pyramid_t_pyramid_t_js__WEBPACK_IMPORTED_MODULE_12__["default"];
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t_js__WEBPACK_IMPORTED_MODULE_7__["default"];
jsfeatNext.cache = _cache_cache_js__WEBPACK_IMPORTED_MODULE_5__["default"];
jsfeatNext.imgproc = _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_8__["default"];
jsfeatNext.math = _math_math_js__WEBPACK_IMPORTED_MODULE_9__["default"];
jsfeatNext.matmath = _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_10__["default"];
jsfeatNext.linalg = _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_13__["default"];
jsfeatNext.orb = _orb_orb_js__WEBPACK_IMPORTED_MODULE_14__["default"];
jsfeatNext.yape = _yape_yape_js__WEBPACK_IMPORTED_MODULE_15__["default"];
jsfeatNext.yape06 = _yape06_yape06_js__WEBPACK_IMPORTED_MODULE_16__["default"];
jsfeatNext.motion_estimator = _motion_estimator_motion_estimator_js__WEBPACK_IMPORTED_MODULE_17__["default"];
jsfeatNext.ransac_params_t = _motion_estimator_ransac_params_t_js__WEBPACK_IMPORTED_MODULE_19__["default"];
jsfeatNext.homography2d = _motion_estimator_motion_model_js__WEBPACK_IMPORTED_MODULE_18__.homography2d;
jsfeatNext.optical_flow_lk = _optical_flow_lk_optical_flow_lk_js__WEBPACK_IMPORTED_MODULE_20__["default"];

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

/***/ "./src/linalg/linalg.js":
/*!******************************!*\
  !*** ./src/linalg/linalg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ linalg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsfeatNext.js */ "./src/jsfeatNext.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _linalg_base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linalg-base.js */ "./src/linalg/linalg-base.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../matmath/matmath.js */ "./src/matmath/matmath.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");









var linalg = /*#__PURE__*/function () {
  function linalg() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, linalg);

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.cache.allocate(30, 640 * 4);
    this.matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(linalg, [{
    key: "JacobiImpl",
    value: function JacobiImpl(A, astep, W, V, vstep, n) {
      var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON;
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
        t = Math.abs(y) + (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.hypot)(p, y);
        s = (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.hypot)(p, t);
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
          (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(W, m, k, mv);

          if (V) {
            for (i = 0; i < n; i++) {
              (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(V, vstep * m + i, vstep * k + i, mv);
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
      var eps = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON * 2.0;
      var minval = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.FLT_MIN;
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
            beta = a - b, gamma = (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.hypot)(p, beta);

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
          (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(W, i, j, sd);

          if (Vt) {
            for (k = 0; k < m; k++) {
              (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(At, i * astep + k, j * astep + k, t);
            }

            for (k = 0; k < n; k++) {
              (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(Vt, i * vstep + k, j * vstep + k, t);
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

        if (Math.abs(ad[k * astep + i]) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON) {
          return 0; // FAILED
        }

        if (k != i) {
          for (j = i; j < astep; j++) {
            (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(ad, i * astep + j, k * astep + j, t);
          }

          (0,_linalg_base_js__WEBPACK_IMPORTED_MODULE_5__.swap)(bd, i, k, t);
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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t; // we only work with single channel 

      if (m < n) {
        at = 1;
        i = m;
        m = n;
        n = i;
      }

      var a_buff = this.cache.get_buffer(m * m << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var v_buff = this.cache.get_buffer(n * n << 3);
      var a_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](m, m, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](1, n, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](n, n, dt, v_buff.data);

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
        if (U && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = m * m;

          while (--i >= 0) {
            U.data[i] = a_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, a_mt);
        }

        if (V && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_V_T) {
          i = n * n;

          while (--i >= 0) {
            V.data[i] = v_mt.data[i];
          }
        } else if (V) {
          this.matmath.transpose(V, v_mt);
        }
      } else {
        if (U && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_U_T) {
          i = n * n;

          while (--i >= 0) {
            U.data[i] = v_mt.data[i];
          }
        } else if (U) {
          this.matmath.transpose(U, v_mt);
        }

        if (V && options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.SVD_V_T) {
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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t;
      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](ncols, ncols, dt, v_buff.data);
      var bd = B.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t; //var u_buff = cache1.get_buffer((nrows * nrows) << 3);

      var u_buff = this.cache.get_buffer(nrows * nrows << 3);
      var w_buff = this.cache.get_buffer(ncols << 3);
      var v_buff = this.cache.get_buffer(ncols * ncols << 3);
      var u_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](ncols, ncols, dt, v_buff.data);
      var id = Ai.data,
          ud = u_mt.data,
          wd = w_mt.data,
          vd = v_mt.data;
      this.svd_decompose(A, w_mt, u_mt, v_mt, 0);
      tol = _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.EPSILON * wd[0] * ncols;

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
      var dt = A.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.JSFEAT_CONSTANTS.C1_t;
      var a_buff = this.cache.get_buffer(n * n << 3);
      var w_buff = this.cache.get_buffer(n << 3);
      var a_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](n, n, dt, a_buff.data);
      var w_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_7__["default"](1, n, dt, w_buff.data);

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
}();



/***/ }),

/***/ "./src/math/math.js":
/*!**************************!*\
  !*** ./src/math/math.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ math)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");





var math = /*#__PURE__*/function () {
  function math() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, math);

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.cache.allocate(30, 640 * 4);
    this.qsort_stack = new Int32Array(48 * 2);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(math, [{
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

      if (data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.JSFEAT_CONSTANTS.U8_t) {
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
}();



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

/***/ "./src/motion_estimator/motion_estimator.js":
/*!**************************************************!*\
  !*** ./src/motion_estimator/motion_estimator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ motion_estimator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/math.js */ "./src/math/math.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");







var motion_estimator = /*#__PURE__*/function () {
  function motion_estimator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, motion_estimator);

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.cache.allocate(30, 640 * 4);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(motion_estimator, [{
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
      var dt = model.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](count, 1, _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
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

      var _math = new _math_math_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

      var subset0 = [];
      var subset1 = [];
      var found = false;
      var mc = model.cols,
          mr = model.rows;
      var dt = model.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.C1_t;
      var m_buff = this.cache.get_buffer(mc * mr << 3);
      var ms_buff = this.cache.get_buffer(count);
      var err_buff = this.cache.get_buffer(count << 2);
      var M = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](count, 1, _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.U8_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.C1_t, ms_buff.data);
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
}();



/***/ }),

/***/ "./src/motion_estimator/motion_model.js":
/*!**********************************************!*\
  !*** ./src/motion_estimator/motion_model.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "affine2d": () => (/* binding */ affine2d),
/* harmony export */   "homography2d": () => (/* binding */ homography2d),
/* harmony export */   "motion_model": () => (/* binding */ motion_model)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../matmath/matmath.js */ "./src/matmath/matmath.js");
/* harmony import */ var _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../linalg/linalg.js */ "./src/linalg/linalg.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var motion_model = /*#__PURE__*/function () {
  function motion_model() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, motion_model);

    this.T0 = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t);
    this.T1 = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t);
    this.AtA = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](6, 6, _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t);
    this.AtB = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](6, 1, _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t);
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
          if (Math.abs(dx2 * dy1 - dy2 * dx1) <= _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.EPSILON * (Math.abs(dx1) + Math.abs(dy1) + Math.abs(dx2) + Math.abs(dy2))) return true;
        }
      }

      return false;
    }
  }]);

  return motion_model;
}();
var affine2d = /*#__PURE__*/function (_motion_model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(affine2d, _motion_model);

  var _super = _createSuper(affine2d);

  function affine2d() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, affine2d);

    _this = _super.call(this);
    _this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

    _this.cache.allocate(30, 640 * 4);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(affine2d, [{
    key: "run",
    value: function run(from, to, model, count) {
      var i = 0,
          j = 0;
      var dt = model.type | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t;
      var md = model.data,
          t0d = this.T0.data,
          t1d = this.T1.data;
      var pt0,
          pt1,
          px = 0.0,
          py = 0.0;

      var _matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_7__["default"]();

      var _linalg = new _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_8__["default"]();

      this.iso_normalize_points(from, to, t0d, t1d, count);
      var a_buff = this.cache.get_buffer(2 * count * 6 << 3);
      var b_buff = this.cache.get_buffer(2 * count << 3);
      var a_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](6, 2 * count, dt, a_buff.data);
      var b_mt = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](1, 2 * count, dt, b_buff.data);
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

  var _super2 = _createSuper(homography2d);

  function homography2d() {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, homography2d);

    _this2 = _super2.call(this);
    _this2.mLtL = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](9, 9, _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t);
    _this2.Evec = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_5__["default"](9, 9, _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.C1_t);
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

      var _linalg = new _linalg_linalg_js__WEBPACK_IMPORTED_MODULE_8__["default"]();

      var _matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_7__["default"](); // norm


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

      if (Math.abs(smx) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.EPSILON || Math.abs(smy) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMx) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.EPSILON || Math.abs(sMy) < _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__.JSFEAT_CONSTANTS.EPSILON) return 0;
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
      var _matmath = new _matmath_matmath_js__WEBPACK_IMPORTED_MODULE_7__["default"]();

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

/***/ "./src/optical_flow_lk/optical_flow_lk.js":
/*!************************************************!*\
  !*** ./src/optical_flow_lk/optical_flow_lk.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ optical_flow_lk)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _cache_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/cache.js */ "./src/cache/cache.js");
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgproc/imgproc.js */ "./src/imgproc/imgproc.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");







var optical_flow_lk = /*#__PURE__*/function () {
  function optical_flow_lk() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, optical_flow_lk);

    var _imgproc = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

    this.cache = new _cache_cache_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.cache.allocate(30, 640 * 4);
    this.scharr_deriv = _imgproc.scharr_derivatives;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(optical_flow_lk, [{
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
      var deriv_m = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_4__["default"](w0, h0, _constants_constants_js__WEBPACK_IMPORTED_MODULE_5__.JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
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
}();



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

/***/ "./src/orb/orb.js":
/*!************************!*\
  !*** ./src/orb/orb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orb)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");
/* harmony import */ var _bit_pattern_31_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bit_pattern_31.js */ "./src/orb/bit_pattern_31.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _rectify_patch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rectify_patch.js */ "./src/orb/rectify_patch.js");







var orb = /*#__PURE__*/function () {
  function orb() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, orb);

    this.bit_pattern_31_ = new Int32Array(_bit_pattern_31_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.H = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](3, 3, _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.F32_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.C1_t);
    this.patch_img = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_2__["default"](32, 32, _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t | _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.C1_t);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(orb, [{
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

      if (!(descriptors.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t)) {
        // relocate to U8 type
        descriptors.type = _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.JSFEAT_CONSTANTS.U8_t;
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
        (0,_rectify_patch_js__WEBPACK_IMPORTED_MODULE_5__.rectify_patch)(src, this.patch_img, angle, px, py, 32, this.H); // describe the patch

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
}();



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
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgproc/imgproc.js */ "./src/imgproc/imgproc.js");

function rectify_patch(src, dst, angle, px, py, psize, H) {
  var cosine = Math.cos(angle);
  var sine = Math.sin(angle);
  var imgprc = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  H.data[0] = cosine, H.data[1] = -sine, H.data[2] = (-cosine + sine) * psize * 0.5 + px, H.data[3] = sine, H.data[4] = cosine, H.data[5] = (-sine - cosine) * psize * 0.5 + py;
  imgprc.warp_affine(src, dst, H, 128);
}

/***/ }),

/***/ "./src/pyramid_t/pyramid_t.js":
/*!************************************!*\
  !*** ./src/pyramid_t/pyramid_t.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pyramid_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgproc/imgproc.js */ "./src/imgproc/imgproc.js");
/* harmony import */ var _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../matrix_t/matrix_t.js */ "./src/matrix_t/matrix_t.js");





var pyramid_t = /*#__PURE__*/function () {
  function pyramid_t(levels) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, pyramid_t);

    this.levels = levels | 0;
    this.data = new Array(levels);

    var _imgproc = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this.pyrdown = _imgproc.pyrdown;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(pyramid_t, [{
    key: "allocate",
    value: function allocate(start_w, start_h, data_type) {
      var i = this.levels;

      while (--i >= 0) {
        this.data[i] = new _matrix_t_matrix_t_js__WEBPACK_IMPORTED_MODULE_3__["default"](start_w >> i, start_h >> i, data_type);
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
}();



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

module.exports = JSON.parse('{"name":"jsfeatnext","version":"0.3.0","description":"ES6 version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/index.d.ts","scripts":{"test":"npm run test","types":"tsc","dev":"webpack --mode development --progress --watch","build":"webpack --mode production"},"repository":{"type":"git","url":"git+https://github.com/kalwalt/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/kalwalt/jsfeatNext/issues"},"homepage":"https://github.com/kalwalt/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.18.6","@babel/plugin-transform-runtime":"^7.18.6","@babel/preset-env":"^7.18.6","babel-loader":"^8.2.5","typescript":"^4.6.3","webpack":"^5.73.0","webpack-cli":"^4.10.0"},"dependencies":{"@babel/runtime":"^7.18.6"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUVBQWU7RUFDWnpoQixVQUFVLEVBQVZBLHNEQUFVQTtBQURFLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY2FjaGUvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvZGF0YV90eXBlL2RhdGFfdHlwZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvY29udm9sLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9pbWdwcm9jLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2pzZmVhdE5leHQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9rZXlwb2ludF90L2tleXBvaW50X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLWJhc2UuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0aC9tYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9tb2RlbC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL2RhdGFfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29wdGljYWxfZmxvd19say9vcHRpY2FsX2Zsb3dfbGsuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvYml0X3BhdHRlcm5fMzEuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvb3JiLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL3JlY3RpZnlfcGF0Y2guanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9weXJhbWlkX3QvcHlyYW1pZF90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZS95YXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZS95YXBlX3V0aWxzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZTA2L3lhcGUwNi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUwNi95YXBlMDZfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4uL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjYWNoZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUgPSAwO1xuICAgIH1cbiAgICBhbGxvY2F0ZShjYXBhY2l0eSwgZGF0YV9zaXplKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfdGFpbCA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXBhY2l0eTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0X2J1ZmZlcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIC8vIGFzc3VtZSB3ZSBoYXZlIGVub3VnaCBmcmVlIG5vZGVzXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX2hlYWQubmV4dDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplLS07XG5cbiAgICAgICAgaWYgKHNpemVfaW5fYnl0ZXMgPiBub2RlLnNpemUpIHtcbiAgICAgICAgICAgIG5vZGUucmVzaXplKHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHB1dF9idWZmZXIobm9kZSkge1xuICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgSlNGRUFUX0NPTlNUQU5UUyA9IHtcbiAgICAvLyBDT05TVEFOVFNcbiAgICBFUFNJTE9OOiAwLjAwMDAwMDExOTIwOTI4OTYsXG4gICAgRkxUX01JTjogMUUtMzcsXG4gICAgVThfdDogMHgwMTAwLFxuICAgIFMzMl90OiAweDAyMDAsXG4gICAgRjMyX3Q6IDB4MDQwMCxcbiAgICBTNjRfdDogMHgwODAwLFxuICAgIEY2NF90OiAweDEwMDAsXG4gICAgQzFfdDogMHgwMSxcbiAgICBDMl90OiAweDAyLFxuICAgIEMzX3Q6IDB4MDMsXG4gICAgQzRfdDogMHgwNCxcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBDT0xPUl9SR0JBMkdSQVk6IDAsXG4gICAgQ09MT1JfUkdCMkdSQVk6IDEsXG4gICAgQ09MT1JfQkdSQTJHUkFZOiAyLFxuICAgIENPTE9SX0JHUjJHUkFZOiAzLFxuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgQk9YX0JMVVJfTk9TQ0FMRTogMHgwMSxcblxuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgU1ZEX1VfVDogMHgwMSxcbiAgICBTVkRfVl9UOiAweDAyLFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGMDApO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYpO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAsIHN1bTEgPSAwLCBzdW0yID0gMCwgc3VtMyA9IDAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMC4wLCBzdW0xID0gMC4wLCBzdW0yID0gMC4wLCBzdW0zID0gMC4wLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwLjA7XG4gICAgdmFyIHcyID0gdyA8PCAxLCB3MyA9IHcgKiAzLCB3NCA9IHcgPDwgMjtcbiAgICAvLyBob3IgcGFzc1xuICAgIGZvciAoOyBpIDwgaDsgKytpKSB7XG4gICAgICAgIHN1bSA9IHNyY19kW3NwXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSAyOyBqICs9IDIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IHNyY19kW3NwICsgaiArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3JjX2Rbc3AgKyB3IC0gMV07XG4gICAgICAgIGZvciAoaiA9IHc7IGogPCBoYWxmX2tlcm5lbCArIHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gNDsgaiArPSA0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IF9yZXNhbXBsZSwgX3Jlc2FtcGxlX3U4IH0gZnJvbSAnLi9yZXNhbXBsZS5qcydcbmltcG9ydCB7IF9jb252b2wsIF9jb252b2xfdTggfSBmcm9tICcuL2NvbnZvbC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcyc7XG5pbXBvcnQgbWF0aCBmcm9tICcuLi9tYXRoL21hdGguanMnO1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJztcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbWdwcm9jIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG4gICAgZ3JheXNjYWxlKHNyYywgdywgaCwgZHN0LCBjb2RlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgZGVmYXVsdCBpbWFnZSBkYXRhIHJlcHJlc2VudGF0aW9uIGluIGJyb3dzZXJcbiAgICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSBcInVuZGVmaW5lZFwiKSB7IGNvZGUgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBpID0gMCwgaiA9IDAsIGlyID0gMCwganIgPSAwO1xuICAgICAgICB2YXIgY29lZmZfciA9IDQ4OTksIGNvZWZmX2cgPSA5NjE3LCBjb2VmZl9iID0gMTg2OCwgY24gPSA0O1xuXG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY29lZmZfciA9IDE4Njg7XG4gICAgICAgICAgICBjb2VmZl9iID0gNDg5OTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY24gPSAzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbjIgPSBjbiA8PCAxLCBjbjMgPSAoY24gKiAzKSB8IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAxKTtcbiAgICAgICAgdmFyIGRzdF91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3ksIGogKz0gdywgaSArPSB3ICogY24pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDAsIGlyID0gaSwganIgPSBqOyB4IDw9IHcgLSA0OyB4ICs9IDQsIGlyICs9IGNuIDw8IDIsIGpyICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMV0gPSAoc3JjW2lyICsgY25dICogY29lZmZfciArIHNyY1tpciArIGNuICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24gKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAyXSA9IChzcmNbaXIgKyBjbjJdICogY29lZmZfciArIHNyY1tpciArIGNuMiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDNdID0gKHNyY1tpciArIGNuM10gKiBjb2VmZl9yICsgc3JjW2lyICsgY24zICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24zICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKytqciwgaXIgKz0gY24pIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVyaXZlZCBmcm9tIENDViBsaWJyYXJ5XG4gICAgcmVzYW1wbGUoc3JjLCBkc3QsIG53LCBuaCkge1xuICAgICAgICB2YXIgaCA9IHNyYy5yb3dzLCB3ID0gc3JjLmNvbHM7XG4gICAgICAgIGlmIChoID4gbmggJiYgdyA+IG53KSB7XG4gICAgICAgICAgICBkc3QucmVzaXplKG53LCBuaCwgc3JjLmNoYW5uZWwpO1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIGZhc3QgYWx0ZXJuYXRpdmUgKGZpeCBwb2ludCBzY2FsZSwgMHgxMDAgdG8gYXZvaWQgb3ZlcmZsb3cpXG4gICAgICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgZHN0LnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgaCAqIHcgLyAobmggKiBudykgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZV91OChzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlKHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJveF9ibHVyX2dyYXkoc3JjLCBkc3QsIHJhZGl1cywgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH1cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBoMiA9IGggPDwgMSwgdzIgPSB3IDw8IDE7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAsIHkgPSAwLCBlbmQgPSAwO1xuICAgICAgICB2YXIgd2luZG93U2l6ZSA9ICgocmFkaXVzIDw8IDEpICsgMSkgfCAwO1xuICAgICAgICB2YXIgcmFkaXVzUGx1c09uZSA9IChyYWRpdXMgKyAxKSB8IDAsIHJhZGl1c1BsdXMyID0gKHJhZGl1c1BsdXNPbmUgKyAxKSB8IDA7XG4gICAgICAgIHZhciBzY2FsZSA9IG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEUgPyAxIDogKDEuMCAvICh3aW5kb3dTaXplICogd2luZG93U2l6ZSkpO1xuXG4gICAgICAgIHZhciB0bXBfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLCBkc3RJbmRleCA9IDAsIHNyY0luZGV4ID0gMCwgbmV4dFBpeGVsSW5kZXggPSAwLCBwcmV2aW91c1BpeGVsSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGF0YV9pMzIgPSB0bXBfYnVmZi5pMzI7IC8vIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgdmFyIGRhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIGhvbGQgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIC8vIGZpcnN0IHBhc3NcbiAgICAgICAgLy8gbm8gbmVlZCB0byBzY2FsZSBcbiAgICAgICAgLy9kYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3kpIHtcbiAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX3U4W3NyY0luZGV4XTtcblxuICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IChzcmNJbmRleCArIHJhZGl1c1BsdXNPbmUpIHwgMDtcbiAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSBoMikge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleCArIGhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjSW5kZXggKz0gdztcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBzZWNvbmQgcGFzc1xuICAgICAgICBzcmNJbmRleCA9IDA7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7IC8vIHRoaXMgaXMgYSB0cmFuc3Bvc2VcbiAgICAgICAgZGF0YV91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIC8vIGRvbnQgc2NhbGUgcmVzdWx0XG4gICAgICAgIGlmIChzY2FsZSA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih0bXBfYnVmZik7XG4gICAgfVxuXG4gICAgZ2F1c3NpYW5fYmx1cihzcmMsIGRzdCwga2VybmVsX3NpemUsIHNpZ21hKSB7XG4gICAgICAgIHZhciBqc2ZlYXRtYXRoID0gbmV3IG1hdGgoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWdtYSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaWdtYSA9IDAuMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGtlcm5lbF9zaXplID09PSBcInVuZGVmaW5lZFwiKSB7IGtlcm5lbF9zaXplID0gMDsgfVxuICAgICAgICBrZXJuZWxfc2l6ZSA9IGtlcm5lbF9zaXplID09IDAgPyAoTWF0aC5tYXgoMSwgKDQuMCAqIHNpZ21hICsgMS4wIC0gMWUtOCkpICogMiArIDEpIHwgMCA6IGtlcm5lbF9zaXplO1xuICAgICAgICB2YXIgaGFsZl9rZXJuZWwgPSBrZXJuZWxfc2l6ZSA+PiAxO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkYXRhX3R5cGUgPSBzcmMudHlwZSwgaXNfdTggPSBkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBidWYsIGZpbHRlciwgYnVmX3N6ID0gKGtlcm5lbF9zaXplICsgTWF0aC5tYXgoaCwgdykpIHwgMDtcblxuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoYnVmX3N6IDw8IDIpO1xuICAgICAgICB2YXIgZmlsdF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGtlcm5lbF9zaXplIDw8IDIpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpzZmVhdG1hdGguZ2V0X2dhdXNzaWFuX2tlcm5lbChrZXJuZWxfc2l6ZSwgc2lnbWEsIGZpbHRlciwgZGF0YV90eXBlKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIF9jb252b2xfdTgoYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihmaWx0X25vZGUpO1xuICAgIH1cbiAgICBob3VnaF90cmFuc2Zvcm0oaW1nLCByaG9fcmVzLCB0aGV0YV9yZXMsIHRocmVzaG9sZCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWcuZGF0YTtcblxuICAgICAgICB2YXIgd2lkdGggPSBpbWcuY29scztcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5yb3dzO1xuICAgICAgICB2YXIgc3RlcCA9IHdpZHRoO1xuXG4gICAgICAgIHZhciBtaW5fdGhldGEgPSAwLjA7XG4gICAgICAgIHZhciBtYXhfdGhldGEgPSBNYXRoLlBJO1xuXG4gICAgICAgIHZhciBudW1hbmdsZSA9IE1hdGgucm91bmQoKG1heF90aGV0YSAtIG1pbl90aGV0YSkgLyB0aGV0YV9yZXMpO1xuICAgICAgICB2YXIgbnVtcmhvID0gTWF0aC5yb3VuZCgoKHdpZHRoICsgaGVpZ2h0KSAqIDIgKyAxKSAvIHJob19yZXMpO1xuICAgICAgICB2YXIgaXJobyA9IDEuMCAvIHJob19yZXM7XG5cbiAgICAgICAgdmFyIGFjY3VtID0gbmV3IEludDMyQXJyYXkoKG51bWFuZ2xlICsgMikgKiAobnVtcmhvICsgMikpOyAvL3R5cGVkIGFycmF5cyBhcmUgaW5pdGlhbGl6ZWQgdG8gMFxuICAgICAgICB2YXIgdGFiU2luID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG4gICAgICAgIHZhciB0YWJDb3MgPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcblxuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciBhbmcgPSBtaW5fdGhldGE7XG4gICAgICAgIGZvciAoOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgdGFiU2luW25dID0gTWF0aC5zaW4oYW5nKSAqIGlyaG87XG4gICAgICAgICAgICB0YWJDb3Nbbl0gPSBNYXRoLmNvcyhhbmcpICogaXJobztcbiAgICAgICAgICAgIGFuZyArPSB0aGV0YV9yZXNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDEuIGZpbGwgYWNjdW11bGF0b3JcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlW2kgKiBzdGVwICsgal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIsIChuKzEpICogKG51bXJobysyKSArIHIrMSwgdGFiQ29zW25dLCB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yb3VuZChqICogdGFiQ29zW25dICsgaSAqIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IChudW1yaG8gLSAxKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bVsobiArIDEpICogKG51bXJobyArIDIpICsgciArIDFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAyLiBmaW5kIGxvY2FsIG1heGltdW1zXG4gICAgICAgIC8vVE9ETzogQ29uc2lkZXIgbWFraW5nIGEgdmVjdG9yIGNsYXNzIHRoYXQgdXNlcyB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIF9zb3J0X2J1ZiA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG51bXJobzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IChuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW1bYmFzZV0gPiB0aHJlc2hvbGQgJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gMV0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIG51bXJobyAtIDJdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyBudW1yaG8gKyAyXSkge1xuICAgICAgICAgICAgICAgICAgICBfc29ydF9idWYucHVzaChiYXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAzLiBzb3J0IHRoZSBkZXRlY3RlZCBsaW5lcyBieSBhY2N1bXVsYXRvciB2YWx1ZVxuICAgICAgICBfc29ydF9idWYuc29ydChmdW5jdGlvbiAobDEsIGwyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW1bbDFdID4gYWNjdW1bbDJdIHx8IChhY2N1bVtsMV0gPT0gYWNjdW1bbDJdICYmIGwxIDwgbDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFnZSA0LiBzdG9yZSB0aGUgZmlyc3QgbWluKHRvdGFsLGxpbmVzTWF4KSBsaW5lcyB0byB0aGUgb3V0cHV0IGJ1ZmZlclxuICAgICAgICB2YXIgbGluZXNNYXggPSBNYXRoLm1pbihudW1hbmdsZSAqIG51bXJobywgX3NvcnRfYnVmLmxlbmd0aCk7XG4gICAgICAgIHZhciBzY2FsZSA9IDEuMCAvIChudW1yaG8gKyAyKTtcbiAgICAgICAgdmFyIGxpbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNNYXg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9zb3J0X2J1ZltpXTtcbiAgICAgICAgICAgIHZhciBuID0gTWF0aC5mbG9vcihpZHggKiBzY2FsZSkgLSAxO1xuICAgICAgICAgICAgdmFyIHIgPSBpZHggLSAobiArIDEpICogKG51bXJobyArIDIpIC0gMTtcbiAgICAgICAgICAgIHZhciBscmhvID0gKHIgLSAobnVtcmhvIC0gMSkgKiAwLjUpICogcmhvX3JlcztcbiAgICAgICAgICAgIHZhciBsYW5nbGUgPSBuICogdGhldGFfcmVzO1xuICAgICAgICAgICAgbGluZXMucHVzaChbbHJobywgbGFuZ2xlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBweXJkb3duKHNyYywgZHN0LCBzeCwgc3kpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIGJiZlxuICAgICAgICBpZiAodHlwZW9mIHN4ID09PSBcInVuZGVmaW5lZFwiKSB7IHN4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN5ID09PSBcInVuZGVmaW5lZFwiKSB7IHN5ID0gMDsgfVxuXG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHcyID0gdyA+PiAxLCBoMiA9IGggPj4gMTtcbiAgICAgICAgdmFyIF93MiA9IHcyIC0gKHN4IDw8IDEpLCBfaDIgPSBoMiAtIChzeSA8PCAxKTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgc3B0ciA9IHN4ICsgc3kgKiB3LCBzbGluZSA9IDAsIGRwdHIgPSAwLCBkbGluZSA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3MiwgaDIsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgX2gyOyArK3kpIHtcbiAgICAgICAgICAgIHNsaW5lID0gc3B0cjtcbiAgICAgICAgICAgIGRsaW5lID0gZHB0cjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gX3cyIC0gMjsgeCArPSAyLCBkbGluZSArPSAyLCBzbGluZSArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lICsgMV0gPSAoc3JjX2Rbc2xpbmUgKyAyXSArIHNyY19kW3NsaW5lICsgM10gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHcgKyAyXSArIHNyY19kW3NsaW5lICsgdyArIDNdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgX3cyOyArK3gsICsrZGxpbmUsIHNsaW5lICs9IDIpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHRyICs9IHcgPDwgMTtcbiAgICAgICAgICAgIGRwdHIgKz0gdzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNjaGFycl9kZXJpdmF0aXZlcyhzcmMsIGRzdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4ICsgMV0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsreDEpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeF0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYSArIHRyb3cxW3hdKSAqIDMgKyBiICogMTApO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChmIC0gdHJvdzBbeCArIDFdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKGMgKyBiKSAqIDMgKyBhICogMTApO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNF0gLSBlKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgoZCArIGEpICogMyArIGMgKiAxMCkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDVdIC0gZikpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKHRyb3cxW3ggKyA1XSArIGMpICogMyArIGQgKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyAyXSAtIHRyb3cwW3hdKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDJdICsgdHJvdzFbeF0pICogMyArIHRyb3cxW3ggKyAxXSAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cblxuICAgIC8vIGNvbXB1dGUgZ3JhZGllbnQgdXNpbmcgU29iZWwga2VybmVsIFsxIDIgMV0gKiBbLTEgMCAxXV5UXG4gICAgLy8gZHN0OiBbZ3gsZ3ksLi4uXVxuICAgIHNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4ICsgMV0sIGIgPSBpbWdbc3JvdzIgKyB4ICsgMV07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDEgKyAxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHggKyAxXSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeF0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGEgKyB0cm93MVt4XSArIGIgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGMgKyBiICsgYSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA0XSAtIGUpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChkICsgYSArIGMgKiAyKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDVdIC0gZik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyA1XSArIGMgKyBkICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdICsgdHJvdzFbeCArIDFdICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjBfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYxX25vZGUpO1xuICAgIH1cbiAgICAvLyBwbGVhc2Ugbm90ZTogXG4gICAgLy8gZHN0Xyh0eXBlKSBzaXplIHNob3VsZCBiZSBjb2xzID0gc3JjLmNvbHMrMSwgcm93cyA9IHNyYy5yb3dzKzFcbiAgICBjb21wdXRlX2ludGVncmFsX2ltYWdlKHNyYywgZHN0X3N1bSwgZHN0X3Nxc3VtLCBkc3RfdGlsdGVkKSB7XG4gICAgICAgIHZhciB3MCA9IHNyYy5jb2xzIHwgMCwgaDAgPSBzcmMucm93cyB8IDAsIHNyY19kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciB3MSA9ICh3MCArIDEpIHwgMDtcbiAgICAgICAgdmFyIHMgPSAwLCBzMiA9IDAsIHAgPSAwLCBwdXAgPSAwLCBpID0gMCwgaiA9IDAsIHYgPSAwLCBrID0gMDtcblxuICAgICAgICBpZiAoZHN0X3N1bSAmJiBkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zdW1baV0gPSAwLCBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSBzMiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwXSA9IGRzdF9zcXN1bVtwdXBdICsgczI7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyArPSB2LCBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdiwgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3FzdW1bcF0gPSBkc3Rfc3FzdW1bcHVwXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3VtW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAodzEgKyAxKSB8IDAsIHB1cCA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwXSA9IGRzdF9zdW1bcHVwXSArIHM7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3AgKyAxXSA9IGRzdF9zdW1bcHVwICsgMV0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3Nxc3VtKSB7XG4gICAgICAgICAgICAvLyBmaWxsIGZpcnN0IHJvdyB3aXRoIHplcm9zXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3Rfc3FzdW1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCA9ICh3MSArIDEpIHwgMCwgcHVwID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHN0X3RpbHRlZCkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICBwID0gKHcxICsgMSkgfCAwLCBwdXAgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgayA9IDA7IGkgPCBoMDsgKytpLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3MCAtIDI7IGogKz0gMiwgayArPSAyLCBwICs9IDIsIHB1cCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gPSBzcmNfZFtrXSArIGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwICsgMV0gPSBzcmNfZFtrICsgMV0gKyBkc3RfdGlsdGVkW3B1cCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlhZ29uYWxcbiAgICAgICAgICAgIHAgPSAodzEgKyB3MCkgfCAwLCBwdXAgPSB3MDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoMDsgKytpLCBwICs9IHcxLCBwdXAgKz0gdzEpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gdzAgLSAxOyBqID4gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgcCA9IGogKyBoMCAqIHcxLCBwdXAgPSBwIC0gdzE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaDA7IGkgPiAwOyAtLWksIHAgLT0gdzEsIHB1cCAtPSB3MSkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFsaXplX2hpc3RvZ3JhbShzcmMsIGRzdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGEsIHNpemUgPSB3ICogaDtcbiAgICAgICAgdmFyIGkgPSAwLCBwcmV2ID0gMCwgaGlzdDAsIG5vcm07XG5cbiAgICAgICAgdmFyIGhpc3QwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoMjU2IDw8IDIpO1xuICAgICAgICBoaXN0MCA9IGhpc3QwX25vZGUuaTMyO1xuICAgICAgICBmb3IgKDsgaSA8IDI1NjsgKytpKSBoaXN0MFtpXSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICsraGlzdDBbc3JjX2RbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldiA9IGhpc3QwWzBdO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgICAgIHByZXYgPSBoaXN0MFtpXSArPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgbm9ybSA9IDI1NSAvIHNpemU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGRzdF9kW2ldID0gKGhpc3QwW3NyY19kW2ldXSAqIG5vcm0gKyAwLjUpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaGlzdDBfbm9kZSk7XG4gICAgfVxuICAgIGNhbm55KHNyYywgZHN0LCBsb3dfdGhyZXNoLCBoaWdoX3RocmVzaCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwID0gbWFwX25vZGUuaTMyO1xuICAgICAgICB2YXIgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHkgPSBkeGR5X25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeV9tID0gbmV3IG1hdHJpeF90KHcsIGgsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZHhkeV9ub2RlLmRhdGEpO1xuICAgICAgICB2YXIgcm93MCA9IDEsIHJvdzEgPSAodyArIDIgKyAxKSB8IDAsIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsIG1hcF93ID0gKHcgKyAyKSB8IDAsIG1hcF9pID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG1hdHJpeF90XG4gICAgd2FycF9wZXJzcGVjdGl2ZShzcmMsIGRzdCwgdHJhbnNmb3JtLCBmaWxsX3ZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MgfCAwLCBkc3Rfd2lkdGggPSBkc3QuY29scyB8IDAsIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIHhzMCA9IDAuMCwgeXMwID0gMC4wLCB3cyA9IDAuMCwgc2MgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XSxcbiAgICAgICAgICAgIG0yMCA9IHRkWzZdLCBtMjEgPSB0ZFs3XSwgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzMCA9IG0wMSAqIHkgKyBtMDIsXG4gICAgICAgICAgICAgICAgeXMwID0gbTExICogeSArIG0xMixcbiAgICAgICAgICAgICAgICB3cyA9IG0yMSAqIHkgKyBtMjI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMwICs9IG0wMCwgeXMwICs9IG0xMCwgd3MgKz0gbTIwKSB7XG4gICAgICAgICAgICAgICAgc2MgPSAxLjAgLyB3cztcbiAgICAgICAgICAgICAgICB4cyA9IHhzMCAqIHNjLCB5cyA9IHlzMCAqIHNjO1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMCwgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhzID4gMCAmJiB5cyA+IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjLCBkc3QsIHRyYW5zZm9ybSwgZmlsbF92YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciByLCBnLCBiLCBqO1xuICAgICAgICB2YXIgaSA9IHNyYy53aWR0aCAqIHNyYy5oZWlnaHQ7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGogPSBpICogNDtcbiAgICAgICAgICAgIHIgPSBzcmMuZGF0YVtqXTtcbiAgICAgICAgICAgIGcgPSBzcmMuZGF0YVtqICsgMV07XG4gICAgICAgICAgICBiID0gc3JjLmRhdGFbaiArIDJdO1xuICAgICAgICAgICAgaWYgKChyID4gOTUpICYmIChnID4gNDApICYmIChiID4gMjApXG4gICAgICAgICAgICAgICAgJiYgKHIgPiBnKSAmJiAociA+IGIpXG4gICAgICAgICAgICAgICAgJiYgKHIgLSBNYXRoLm1pbihnLCBiKSA+IDE1KVxuICAgICAgICAgICAgICAgICYmIChNYXRoLmFicyhyIC0gZykgPiAxNSkpIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSAyNTU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmMsIGRzdCwgY2FjaGUsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlIChzcmMsIGRzdCwgY2FjaGUsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIHNjYWxlID0gMS4wIC8gKHNjYWxlX3ggKiBzY2FsZV95KTtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLjAsIGJldGEgPSAwLjAsIGJldGExID0gMC4wO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5mMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuZjMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MSAtIGZzeDEpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZnN4MiAtIHN4MikgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzXSB8IDA7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzICsgMV0gfCAwO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKTtcbiAgICAgICAgICAgIGJldGExID0gMS4wIC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGJldGEpIDwgMWUtMykge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdO1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn0iLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5pbXBvcnQgZGF0YV90eXBlIGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IGRhdGFfdCBmcm9tICcuL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IGtleXBvaW50X3QgZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QuanMnXG5pbXBvcnQgaW1ncHJvYyBmcm9tICcuL2ltZ3Byb2MvaW1ncHJvYy5qcydcbmltcG9ydCBtYXRoIGZyb20gJy4vbWF0aC9tYXRoLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGguanMnXG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBweXJhbWlkX3QgZnJvbSAnLi9weXJhbWlkX3QvcHlyYW1pZF90LmpzJ1xuaW1wb3J0IGxpbmFsZyBmcm9tICcuL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgb3JiIGZyb20gJy4vb3JiL29yYi5qcydcbmltcG9ydCB5YXBlIGZyb20gJy4veWFwZS95YXBlLmpzJ1xuaW1wb3J0IHlhcGUwNiBmcm9tICcuL3lhcGUwNi95YXBlMDYuanMnXG5pbXBvcnQgbW90aW9uX2VzdGltYXRvciBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvci5qcydcbmltcG9ydCB7aG9tb2dyYXBoeTJkfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzJ1xuaW1wb3J0IHJhbnNhY19wYXJhbXNfdCBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzJ1xuaW1wb3J0IG9wdGljYWxfZmxvd19sayBmcm9tICcuL29wdGljYWxfZmxvd19say9vcHRpY2FsX2Zsb3dfbGsuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgIH1cblxuICAgIC8vIFZFUlNJT05cbiAgICBzdGF0aWMgVkVSU0lPTiA9IHBrZy52ZXJzaW9uO1xuXG4gICAgLy8gQ09OU1RBTlRTXG4gICAgc3RhdGljIEVQU0lMT04gPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgc3RhdGljIEZMVF9NSU4gPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgc3RhdGljIFU4X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgc3RhdGljIFMzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5TMzJfdDtcbiAgICBzdGF0aWMgRjMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90O1xuICAgIHN0YXRpYyBTNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBDMV90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgIHN0YXRpYyBDMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMl90O1xuICAgIHN0YXRpYyBDM190ID0gSlNGRUFUX0NPTlNUQU5UUy5DM190O1xuICAgIHN0YXRpYyBDNF90ID0gSlNGRUFUX0NPTlNUQU5UUy5DNF90O1xuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIHN0YXRpYyBDT0xPUl9SR0JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfUkdCMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBzdGF0aWMgQk9YX0JMVVJfTk9TQ0FMRSA9IEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRTtcbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIHN0YXRpYyBTVkRfVV9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UO1xuICAgIHN0YXRpYyBTVkRfVl9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UO1xuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgc3RhdGljIFU4QzFfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgVThDM190ID0gdGhpcy5VOF90IHwgdGhpcy5DM190O1xuICAgIHN0YXRpYyBVOEM0X3QgPSB0aGlzLlU4X3QgfCB0aGlzLkM0X3Q7XG5cbiAgICBzdGF0aWMgRjMyQzFfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIEYzMkMyX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMl90O1xuICAgIHN0YXRpYyBTMzJDMV90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgUzMyQzJfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMyX3Q7XG5cbiAgICBnZXRfZGF0YV90eXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2NoYW5uZWwodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2NoYW5uZWwodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQuZGF0YV90ID0gZGF0YV90XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5weXJhbWlkX3QgPSBweXJhbWlkX3Q7XG5cbmpzZmVhdE5leHQua2V5cG9pbnRfdCA9IGtleXBvaW50X3Q7XG5cbmpzZmVhdE5leHQuY2FjaGUgPSBjYWNoZTtcblxuanNmZWF0TmV4dC5pbWdwcm9jID0gaW1ncHJvYztcblxuanNmZWF0TmV4dC5tYXRoID0gbWF0aDtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBsaW5hbGc7XG5cbmpzZmVhdE5leHQub3JiID0gb3JiO1xuXG5qc2ZlYXROZXh0LnlhcGUgPSB5YXBlO1xuXG5qc2ZlYXROZXh0LnlhcGUwNiA9IHlhcGUwNjtcblxuanNmZWF0TmV4dC5tb3Rpb25fZXN0aW1hdG9yID0gbW90aW9uX2VzdGltYXRvcjtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuaG9tb2dyYXBoeTJkID0gaG9tb2dyYXBoeTJkO1xuXG5qc2ZlYXROZXh0Lm9wdGljYWxfZmxvd19sayA9IG9wdGljYWxfZmxvd19sazsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy1iYXNlLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW5hbGcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBtID0gMCwgbCA9IDAsIGlkeCA9IDAsIF9pbiA9IDAsIF9pbjIgPSAwO1xuICAgICAgICB2YXIgaXRlcnMgPSAwLCBtYXhfaXRlciA9IG4gKiBuICogMzA7XG4gICAgICAgIHZhciBtdiA9IDAuMCwgdmFsID0gMC4wLCBwID0gMC4wLCB5ID0gMC4wLCB0ID0gMC4wLCBzID0gMC4wLCBjID0gMC4wLCBhMCA9IDAuMCwgYjAgPSAwLjA7XG5cbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgdmFyIGluZEMgPSBpbmRDX2J1ZmYuaTMyO1xuXG4gICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpICogdnN0ZXA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSAqIGtdO1xuICAgICAgICAgICAgaWYgKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IGsgKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgbV0pLCBpID0gayArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFba10pLCBpID0gMTsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gMSkgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yIChrID0gMCwgbXYgPSBNYXRoLmFicyhBW2luZFJbMF1dKSwgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gaW5kUltrXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcblxuICAgICAgICAgICAgeSA9IChXW2xdIC0gV1trXSkgKiAwLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0IC8gcztcbiAgICAgICAgICAgIHMgPSBwIC8gczsgdCA9IChwIC8gdCkgKiBwO1xuICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcblxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IGlkeCArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIG1dKSwgaSA9IGlkeCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtpZHhdKSwgaSA9IDE7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kQ1tpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbbV0gPCBXW2ldKVxuICAgICAgICAgICAgICAgICAgICBtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFYsIHZzdGVwICogbSArIGksIHZzdGVwICogayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbCBcblxuICAgICAgICBpZiAobSA8IG4pIHtcbiAgICAgICAgICAgIGF0ID0gMTtcbiAgICAgICAgICAgIGkgPSBtO1xuICAgICAgICAgICAgbSA9IG47XG4gICAgICAgICAgICBuID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG0gKiBtKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJhbnNwb3NlXG4gICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKGFfbXQsIEEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9uICogX207IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbiAqIG07IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaVNWREltcGwoYV9tdC5kYXRhLCBtLCB3X210LmRhdGEsIHZfbXQuZGF0YSwgbiwgbSwgbiwgbSk7XG5cbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSB3X210LmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IF9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgdl9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIHZfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcblxuICAgIH1cblxuICAgIHN2ZF9zb2x2ZShBLCBYLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHhzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcblxuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGJkID0gQi5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIHhzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh3ZFtqXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjAsIHB1ID0gMDsgayA8IG5yb3dzOyBrKyssIHB1ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdWRbcHUgKyBqXSAqIGJkW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhzdW0gKz0gc3VtICogdmRbcHYgKyBqXSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWksIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplLCBzaWdtYSwga2VybmVsLCBkYXRhX3R5cGUpIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsLCBzcmNfeDAsIHNyY195MCwgZHN0X3gwLCBkc3RfeTAsXG4gICAgICAgIHNyY194MSwgc3JjX3kxLCBkc3RfeDEsIGRzdF95MSxcbiAgICAgICAgc3JjX3gyLCBzcmNfeTIsIGRzdF94MiwgZHN0X3kyLFxuICAgICAgICBzcmNfeDMsIHNyY195MywgZHN0X3gzLCBkc3RfeTMpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheSwgbG93LCBoaWdoLCBjbXApIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXksIGxvdywgaGlnaCkge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIG1pZGRsZSA9IDAsIGxsID0gMCwgaGggPSAwLCBtZWRpYW4gPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsOyB3aGlsZSAoYXJyYXlbbG93XSA+IGFycmF5W2xsXSk7XG4gICAgICAgICAgICAgICAgZG8gLS1oaDsgd2hpbGUgKGFycmF5W2hoXSA+IGFycmF5W2xvd10pO1xuICAgICAgICAgICAgICAgIGlmIChoaCA8IGxsKSBicmVhaztcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgICAgIGFycmF5W2xsXSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIGlmIChoaCA8PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgbG93ID0gbGw7XG4gICAgICAgICAgICBlbHNlIGlmIChoaCA+PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgaGlnaCA9IChoaCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdCwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tLCB0bykge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQywgQSwgQikge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMSwgTTEyLCBNMTMsXG4gICAgICAgIE0yMSwgTTIyLCBNMjMsXG4gICAgICAgIE0zMSwgTTMyLCBNMzMpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90eXBlIGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRyaXhfdCB7XG4gICAgY29uc3RydWN0b3IoYywgciwgX2RhdGFfdHlwZSwgX2RhdGFfYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKSB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyKSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYywgciwgY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgbWF0aCBmcm9tICcuLi9tYXRoL21hdGguanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW90aW9uX2VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBuZWVkX2NudCwgbWF4X2NudCwgZnJvbV9zdWIsIHRvX3N1Yikge1xuICAgICAgICB2YXIgbWF4X3RyeSA9IDEwMDA7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHNzaXRlciA9IDAsIGlkeF9pID0gMCwgb2sgPSBmYWxzZTtcbiAgICAgICAgZm9yICg7IHNzaXRlciA8IG1heF90cnk7ICsrc3NpdGVyKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeTspIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlkeF9pID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW9rKSB7XG4gICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4X2kgPSBpbmRpY2VzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4X2NudCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4X2kgPT0gaW5kaWNlc1tqXSkgeyBvayA9IGZhbHNlOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21fc3ViW2ldID0gZnJvbVtpZHhfaV07XG4gICAgICAgICAgICAgICAgdG9fc3ViW2ldID0gdG9baWR4X2ldO1xuICAgICAgICAgICAgICAgIGlmICgha2VybmVsLmNoZWNrX3N1YnNldChmcm9tX3N1YiwgdG9fc3ViLCBpICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NpdGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoaSA9PSBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5KTtcbiAgICB9XG5cbiAgICBmaW5kX2lubGllcnMoa2VybmVsLCBtb2RlbCwgZnJvbSwgdG8sIGNvdW50LCB0aHJlc2gsIGVyciwgbWFzaykge1xuICAgICAgICB2YXIgbnVtaW5saWVycyA9IDAsIGkgPSAwLCBmID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aHJlc2ggKiB0aHJlc2g7XG5cbiAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBmID0gZXJyW2ldIDw9IHQ7XG4gICAgICAgICAgICBtYXNrW2ldID0gZjtcbiAgICAgICAgICAgIG51bWlubGllcnMgKz0gZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtaW5saWVycztcbiAgICB9XG5cbiAgICByYW5zYWMocGFyYW1zLCBrZXJuZWwsIGZyb20sIHRvLCBjb3VudCwgbW9kZWwsIG1hc2ssIG1heF9pdGVycykge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN1YnNldDAgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDEgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4QzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaW5saWVyc19tYXggPSAtMSwgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIE0sIGZyb20sIHRvLCBjb3VudCwgcGFyYW1zLnRocmVzaCwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChudW1pbmxpZXJzID4gTWF0aC5tYXgoaW5saWVyc19tYXgsIG1vZGVsX3BvaW50cyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpbmxpZXJzX21heCA9IG51bWlubGllcnM7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuICAgICAgICAgICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMoKGNvdW50IC0gbnVtaW5saWVycykgLyBjb3VudCwgbml0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxtZWRzKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21hdGggPSBuZXcgbWF0aCgpO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBsaW5hbGcgZnJvbSAnLi4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgY2xhc3MgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5UMCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5UMSA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEEgPSBuZXcgbWF0cml4X3QoNiwgNiwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRCID0gbmV3IG1hdHJpeF90KDYsIDEsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBzcXIoeCkge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG4gICAgLy8gZG9lcyBpc290cm9waWMgbm9ybWFsaXphdGlvblxuICAgIGlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCBUMCwgVDEsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN4MCA9IDAuMCwgY3kwID0gMC4wLCBkMCA9IDAuMCwgczAgPSAwLjA7XG4gICAgICAgIHZhciBjeDEgPSAwLjAsIGN5MSA9IDAuMCwgZDEgPSAwLjAsIHMxID0gMC4wO1xuICAgICAgICB2YXIgZHggPSAwLjAsIGR5ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY3gwICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGN5MCArPSBmcm9tW2ldLnk7XG4gICAgICAgICAgICBjeDEgKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGN5MSArPSB0b1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY3gwIC89IGNvdW50OyBjeTAgLz0gY291bnQ7XG4gICAgICAgIGN4MSAvPSBjb3VudDsgY3kxIC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBkeCA9IGZyb21baV0ueCAtIGN4MDtcbiAgICAgICAgICAgIGR5ID0gZnJvbVtpXS55IC0gY3kwO1xuICAgICAgICAgICAgZDAgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGR4ID0gdG9baV0ueCAtIGN4MTtcbiAgICAgICAgICAgIGR5ID0gdG9baV0ueSAtIGN5MTtcbiAgICAgICAgICAgIGQxICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cblxuICAgICAgICBkMCAvPSBjb3VudDsgZDEgLz0gY291bnQ7XG5cbiAgICAgICAgczAgPSBNYXRoLlNRUlQyIC8gZDA7IHMxID0gTWF0aC5TUVJUMiAvIGQxO1xuXG4gICAgICAgIFQwWzBdID0gVDBbNF0gPSBzMDtcbiAgICAgICAgVDBbMl0gPSAtY3gwICogczA7XG4gICAgICAgIFQwWzVdID0gLWN5MCAqIHMwO1xuICAgICAgICBUMFsxXSA9IFQwWzNdID0gVDBbNl0gPSBUMFs3XSA9IDAuMDtcbiAgICAgICAgVDBbOF0gPSAxLjA7XG5cbiAgICAgICAgVDFbMF0gPSBUMVs0XSA9IHMxO1xuICAgICAgICBUMVsyXSA9IC1jeDEgKiBzMTtcbiAgICAgICAgVDFbNV0gPSAtY3kxICogczE7XG4gICAgICAgIFQxWzFdID0gVDFbM10gPSBUMVs2XSA9IFQxWzddID0gMC4wO1xuICAgICAgICBUMVs4XSA9IDEuMDtcbiAgICB9XG5cbiAgICBoYXZlX2NvbGxpbmVhcl9wb2ludHMocG9pbnRzLCBjb3VudCkge1xuICAgICAgICB2YXIgaiA9IDAsIGsgPSAwLCBpID0gKGNvdW50IC0gMSkgfCAwO1xuICAgICAgICB2YXIgZHgxID0gMC4wLCBkeTEgPSAwLjAsIGR4MiA9IDAuMCwgZHkyID0gMC4wO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGktdGggc2VsZWN0ZWQgcG9pbnQgZG9lcyBub3QgYmVsb25nXG4gICAgICAgIC8vIHRvIGEgbGluZSBjb25uZWN0aW5nIHNvbWUgcHJldmlvdXNseSBzZWxlY3RlZCBwb2ludHNcbiAgICAgICAgZm9yICg7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgIGR4MSA9IHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBkeTEgPSBwb2ludHNbal0ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7ICsraykge1xuICAgICAgICAgICAgICAgIGR4MiA9IHBvaW50c1trXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgZHkyID0gcG9pbnRzW2tdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cbiAgICBydW4oZnJvbSwgdG8sIG1vZGVsLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCBweCA9IDAuMCwgcHkgPSAwLjA7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBsaW5hbGcoKTtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcblxuICAgICAgICAvLyBub3JtXG4gICAgICAgIHZhciBzbXggPSAwLjAsIHNteSA9IDAuMCwgY214ID0gMC4wLCBjbXkgPSAwLjAsIHNNeCA9IDAuMCwgc015ID0gMC4wLCBjTXggPSAwLjAsIGNNeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNteCArPSB0b1tpXS54O1xuICAgICAgICAgICAgY215ICs9IHRvW2ldLnk7XG4gICAgICAgICAgICBjTXggKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY015ICs9IGZyb21baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNteCAvPSBjb3VudDsgY215IC89IGNvdW50O1xuICAgICAgICBjTXggLz0gY291bnQ7IGNNeSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc214ICs9IE1hdGguYWJzKHRvW2ldLnggLSBjbXgpO1xuICAgICAgICAgICAgc215ICs9IE1hdGguYWJzKHRvW2ldLnkgLSBjbXkpO1xuICAgICAgICAgICAgc014ICs9IE1hdGguYWJzKGZyb21baV0ueCAtIGNNeCk7XG4gICAgICAgICAgICBzTXkgKz0gTWF0aC5hYnMoZnJvbVtpXS55IC0gY015KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzbXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDsgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014OyBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7IHQwZFsxXSA9IDA7IHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7IHQwZFs0XSA9IHNNeTsgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDsgdDBkWzddID0gMDsgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7IHQxZFsxXSA9IDA7IHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDsgdDFkWzRdID0gMS4wIC8gc215OyB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7IHQxZFs3XSA9IDA7IHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKVxuICAgICAgICAgICAgICAgIEx0TFtpICogOSArIGpdID0gTHRMW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBfbGluYWxnLmVpZ2VuVlYodGhpcy5tTHRMLCB0aGlzLkV2ZWMpO1xuXG4gICAgICAgIG1kWzBdID0gZXZkWzcyXSwgbWRbMV0gPSBldmRbNzNdLCBtZFsyXSA9IGV2ZFs3NF07XG4gICAgICAgIG1kWzNdID0gZXZkWzc1XSwgbWRbNF0gPSBldmRbNzZdLCBtZFs1XSA9IGV2ZFs3N107XG4gICAgICAgIG1kWzZdID0gZXZkWzc4XSwgbWRbN10gPSBldmRbNzldLCBtZFs4XSA9IGV2ZFs4MF07XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIHNldCBib3R0b20gcmlnaHQgdG8gMS4wXG4gICAgICAgIHggPSAxLjAgLyBtZFs4XTtcbiAgICAgICAgbWRbMF0gKj0geDsgbWRbMV0gKj0geDsgbWRbMl0gKj0geDtcbiAgICAgICAgbWRbM10gKj0geDsgbWRbNF0gKj0geDsgbWRbNV0gKj0geDtcbiAgICAgICAgbWRbNl0gKj0geDsgbWRbN10gKj0geDsgbWRbOF0gPSAxLjA7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgd3cgPSAwLjAsIGR4ID0gMC4wLCBkeSA9IDAuMDtcbiAgICAgICAgdmFyIG0gPSBtb2RlbC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICB3dyA9IDEuMCAvIChtWzZdICogcHQwLnggKyBtWzddICogcHQwLnkgKyAxLjApO1xuICAgICAgICAgICAgZHggPSAobVswXSAqIHB0MC54ICsgbVsxXSAqIHB0MC55ICsgbVsyXSkgKiB3dyAtIHB0MS54O1xuICAgICAgICAgICAgZHkgPSAobVszXSAqIHB0MC54ICsgbVs0XSAqIHB0MC55ICsgbVs1XSkgKiB3dyAtIHB0MS55O1xuICAgICAgICAgICAgZXJyW2ldID0gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja19zdWJzZXQoZnJvbSwgdG8sIGNvdW50KSB7XG4gICAgICAgIC8vIHNlZW1zIHRvIHJlamVjdCBnb29kIHN1YnNldHMgYWN0dWFsbHlcbiAgICAgICAgLy9pZiggaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKGZyb20sIGNvdW50KSB8fCBoYXZlX2NvbGxpbmVhcl9wb2ludHModG8sIGNvdW50KSApIHtcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgdmFyIGZwMCA9IGZyb21bMF0sIGZwMSA9IGZyb21bMV0sIGZwMiA9IGZyb21bMl0sIGZwMyA9IGZyb21bM107XG4gICAgICAgICAgICB2YXIgdHAwID0gdG9bMF0sIHRwMSA9IHRvWzFdLCB0cDIgPSB0b1syXSwgdHAzID0gdG9bM107XG5cbiAgICAgICAgICAgIC8vIHNldDFcbiAgICAgICAgICAgIHZhciBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnksIEExMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnksIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMzEgPSBmcDIueCwgQTMyID0gZnAyLnksIEEzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueSwgQjEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueSwgQjIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIzMSA9IHRwMi54LCBCMzIgPSB0cDIueSwgQjMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIHZhciBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQyXG4gICAgICAgICAgICBBMTEgPSBmcDEueCwgQTEyID0gZnAxLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMS54LCBCMTIgPSB0cDEueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDNcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0NFxuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICBpZiAobmVnYXRpdmUgIT0gMCAmJiBuZWdhdGl2ZSAhPSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBhbGwgZ29vZFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHRocmVzaCwgZXBzLCBwcm9iKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdCAge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMsIGJ1ZmZlcikge1xuICAgICAgICAvL3N1cGVyKClcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9wdGljYWxfZmxvd19sayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBpbWdwcm9jKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2ID0gX2ltZ3Byb2Muc2NoYXJyX2Rlcml2YXRpdmVzO1xuICAgIH1cbiAgICB0cmFjayhwcmV2X3B5ciwgY3Vycl9weXIsIHByZXZfeHksIGN1cnJfeHksIGNvdW50LCB3aW5fc2l6ZSwgbWF4X2l0ZXIsIHN0YXR1cywgZXBzLCBtaW5fZWlnZW5fdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXIgPSAzMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN0YXR1cyA9PT0gXCJ1bmRlZmluZWRcIikgeyBzdGF0dXMgPSBuZXcgVWludDhBcnJheShjb3VudCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC4wMTsgfVxuICAgICAgICBpZiAodHlwZW9mIG1pbl9laWdlbl90aHJlc2hvbGQgPT09IFwidW5kZWZpbmVkXCIpIHsgbWluX2VpZ2VuX3RocmVzaG9sZCA9IDAuMDAwMTsgfVxuXG4gICAgICAgIHZhciBoYWxmX3dpbiA9ICh3aW5fc2l6ZSAtIDEpICogMC41O1xuICAgICAgICB2YXIgd2luX2FyZWEgPSAod2luX3NpemUgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICB2YXIgd2luX2FyZWEyID0gd2luX2FyZWEgPDwgMTtcbiAgICAgICAgdmFyIHByZXZfaW1ncyA9IHByZXZfcHlyLmRhdGEsIG5leHRfaW1ncyA9IGN1cnJfcHlyLmRhdGE7XG4gICAgICAgIHZhciBpbWdfcHJldiA9IHByZXZfaW1nc1swXS5kYXRhLCBpbWdfbmV4dCA9IG5leHRfaW1nc1swXS5kYXRhO1xuICAgICAgICB2YXIgdzAgPSBwcmV2X2ltZ3NbMF0uY29scywgaDAgPSBwcmV2X2ltZ3NbMF0ucm93cywgbHcgPSAwLCBsaCA9IDA7XG5cbiAgICAgICAgdmFyIGl3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYSA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2l3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYTIgPDwgMik7XG4gICAgICAgIHZhciBkZXJpdl9sZXZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaDAgKiAodzAgPDwgMSkpIDw8IDIpO1xuXG4gICAgICAgIHZhciBkZXJpdl9tID0gbmV3IG1hdHJpeF90KHcwLCBoMCwgSlNGRUFUX0NPTlNUQU5UUy5TMzJDMl90LCBkZXJpdl9sZXZfbm9kZS5kYXRhKTtcblxuICAgICAgICB2YXIgaXdpbl9idWYgPSBpd2luX25vZGUuaTMyO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbiA9IGRlcml2X2l3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9sZXYgPSBkZXJpdl9sZXZfbm9kZS5pMzI7XG5cbiAgICAgICAgdmFyIGRzdGVwID0gMCwgc3JjID0gMCwgZHNyYyA9IDAsIGlwdHIgPSAwLCBkaXB0ciA9IDAsIGpwdHIgPSAwO1xuICAgICAgICB2YXIgbGV2X3NjID0gMC4wLCBwcmV2X3ggPSAwLjAsIHByZXZfeSA9IDAuMCwgbmV4dF94ID0gMC4wLCBuZXh0X3kgPSAwLjA7XG4gICAgICAgIHZhciBwcmV2X2RlbHRhX3ggPSAwLjAsIHByZXZfZGVsdGFfeSA9IDAuMCwgZGVsdGFfeCA9IDAuMCwgZGVsdGFfeSA9IDAuMDtcbiAgICAgICAgdmFyIGlwcmV2X3ggPSAwLCBpcHJldl95ID0gMCwgaW5leHRfeCA9IDAsIGluZXh0X3kgPSAwO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCB4ID0gMCwgeSA9IDAsIGxldmVsID0gMCwgcHRpZCA9IDAsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgYnJkX3RsID0gMCwgYnJkX3IgPSAwLCBicmRfYiA9IDA7XG4gICAgICAgIHZhciBhID0gMC4wLCBiID0gMC4wLCBiMSA9IDAuMCwgYjIgPSAwLjA7XG5cbiAgICAgICAgLy8gZml4ZWQgcG9pbnQgbWF0aFxuICAgICAgICB2YXIgV19CSVRTMTQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzFtNSA9IFdfQklUUzQgLSA1O1xuICAgICAgICB2YXIgV19CSVRTMW01MSA9ICgxIDw8ICgoV19CSVRTMW01KSAtIDEpKTtcbiAgICAgICAgdmFyIFdfQklUUzE0XyA9ICgxIDw8IFdfQklUUzE0KTtcbiAgICAgICAgdmFyIFdfQklUUzQxID0gKDEgPDwgKChXX0JJVFM0KSAtIDEpKTtcbiAgICAgICAgdmFyIEZMVF9TQ0FMRSA9IDEuMCAvICgxIDw8IDIwKTtcbiAgICAgICAgdmFyIGl3MDAgPSAwLCBpdzAxID0gMCwgaXcxMCA9IDAsIGl3MTEgPSAwLCBpdmFsID0gMCwgaXh2YWwgPSAwLCBpeXZhbCA9IDA7XG4gICAgICAgIHZhciBBMTEgPSAwLjAsIEExMiA9IDAuMCwgQTIyID0gMC4wLCBEID0gMC4wLCBtaW5fZWlnID0gMC4wO1xuXG4gICAgICAgIHZhciBGTFRfRVBTSUxPTiA9IDAuMDAwMDAwMTE5MjA5Mjk7XG4gICAgICAgIGVwcyAqPSBlcHM7XG5cbiAgICAgICAgLy8gcmVzZXQgc3RhdHVzXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc3RhdHVzW2ldID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXhfbGV2ZWwgPSAocHJldl9weXIubGV2ZWxzIC0gMSkgfCAwO1xuICAgICAgICBsZXZlbCA9IG1heF9sZXZlbDtcblxuICAgICAgICBmb3IgKDsgbGV2ZWwgPj0gMDsgLS1sZXZlbCkge1xuICAgICAgICAgICAgbGV2X3NjID0gKDEuMCAvICgxIDw8IGxldmVsKSk7XG4gICAgICAgICAgICBsdyA9IHcwID4+IGxldmVsO1xuICAgICAgICAgICAgbGggPSBoMCA+PiBsZXZlbDtcbiAgICAgICAgICAgIGRzdGVwID0gbHcgPDwgMTtcbiAgICAgICAgICAgIGltZ19wcmV2ID0gcHJldl9pbWdzW2xldmVsXS5kYXRhO1xuICAgICAgICAgICAgaW1nX25leHQgPSBuZXh0X2ltZ3NbbGV2ZWxdLmRhdGE7XG5cbiAgICAgICAgICAgIGJyZF9yID0gKGx3IC0gd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgIGJyZF9iID0gKGxoIC0gd2luX3NpemUpIHwgMDtcblxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxldmVsIGRlcml2YXRpdmVzXG4gICAgICAgICAgICB0aGlzLnNjaGFycl9kZXJpdihwcmV2X2ltZ3NbbGV2ZWxdLCBkZXJpdl9tKTtcblxuICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBvaW50c1xuICAgICAgICAgICAgZm9yIChwdGlkID0gMDsgcHRpZCA8IGNvdW50OyArK3B0aWQpIHtcbiAgICAgICAgICAgICAgICBpID0gcHRpZCA8PCAxO1xuICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICBwcmV2X3ggPSBwcmV2X3h5W2ldICogbGV2X3NjO1xuICAgICAgICAgICAgICAgIHByZXZfeSA9IHByZXZfeHlbal0gKiBsZXZfc2M7XG5cbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gbWF4X2xldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IHByZXZfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gcHJldl95O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IGN1cnJfeHlbaV0gKiAyLjA7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSA9IGN1cnJfeHlbal0gKiAyLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3g7XG4gICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeTtcblxuICAgICAgICAgICAgICAgIHByZXZfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgaXByZXZfeCA9IHByZXZfeCB8IDA7XG4gICAgICAgICAgICAgICAgaXByZXZfeSA9IHByZXZfeSB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBib3JkZXIgY2hlY2tcbiAgICAgICAgICAgICAgICB4ID0gKGlwcmV2X3ggPD0gYnJkX3RsKSB8IChpcHJldl94ID49IGJyZF9yKSB8IChpcHJldl95IDw9IGJyZF90bCkgfCAoaXByZXZfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gKGluZXh0X3ggPD0gYnJkX3RsKSB8IChpbmV4dF94ID49IGJyZF9yKSB8IChpbmV4dF95IDw9IGJyZF90bCkgfCAoaW5leHRfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MDEgPSAoKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcbiAgICAgICAgICAgICAgICAgICAgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcHRyID0gKCh5ICsgaW5leHRfeSkgKiBsdyArIGluZXh0X3gpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsranB0ciwgKytpcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX25leHRbanB0cl0pICogaXcwMCArIChpbWdfbmV4dFtqcHRyICsgMV0pICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfbmV4dFtqcHRyICsgbHddKSAqIGl3MTAgKyAoaW1nX25leHRbanB0ciArIGx3ICsgMV0pICogaXcxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCAtIGl3aW5fYnVmW2lwdHJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYjEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICBiMiAqPSBGTFRfU0NBTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeCA9ICgoQTEyICogYjIgLSBBMjIgKiBiMSkgKiBEKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9ICgoQTEyICogYjEgLSBBMTEgKiBiMikgKiBEKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggKz0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ICs9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3ggKyBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeSArIGhhbGZfd2luO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95IDw9IGVwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA+IDAgJiYgTWF0aC5hYnMoZGVsdGFfeCArIHByZXZfZGVsdGFfeCkgPCAwLjAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkZWx0YV95ICsgcHJldl9kZWx0YV95KSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gLT0gZGVsdGFfeCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gLT0gZGVsdGFfeSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIHBvaW50cyBsb29wXG4gICAgICAgIH0gLy8gbGV2ZWxzIGxvb3BcblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2l3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9sZXZfbm9kZSk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBiaXRfcGF0dGVybl8zMSA9IFtcbiAgICA4LC0zLCA5LDUvKm1lYW4gKDApLCBjb3JyZWxhdGlvbiAoMCkqLyxcbiAgICA0LDIsIDcsLTEyLyptZWFuICgxLjEyNDYxZS0wNSksIGNvcnJlbGF0aW9uICgwLjA0Mzc1ODQpKi8sXG4gICAgLTExLDksIC04LDIvKm1lYW4gKDMuMzczODJlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYxNzQwOSkqLyxcbiAgICA3LC0xMiwgMTIsLTEzLyptZWFuICg1LjYyMzAzZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MzY5NzcpKi8sXG4gICAgMiwtMTMsIDIsMTIvKm1lYW4gKDAuMDAwMTM0OTUzKSwgY29ycmVsYXRpb24gKDAuMDg1MDk5KSovLFxuICAgIDEsLTcsIDEsNi8qbWVhbiAoMC4wMDA1Mjg1NjUpLCBjb3JyZWxhdGlvbiAoMC4wODU3MTc1KSovLFxuICAgIC0yLC0xMCwgLTIsLTQvKm1lYW4gKDAuMDE4ODgyMSksIGNvcnJlbGF0aW9uICgwLjA5ODU3NzQpKi8sXG4gICAgLTEzLC0xMywgLTExLC04LyptZWFuICgwLjAzNjMxMzUpLCBjb3JyZWxhdGlvbiAoMC4wODk5NjE2KSovLFxuICAgIC0xMywtMywgLTEyLC05LyptZWFuICgwLjEyMTgwNiksIGNvcnJlbGF0aW9uICgwLjA5OTg0OSkqLyxcbiAgICAxMCw0LCAxMSw5LyptZWFuICgwLjEyMjA2NSksIGNvcnJlbGF0aW9uICgwLjA5MzI4NSkqLyxcbiAgICAtMTMsLTgsIC04LC05LyptZWFuICgwLjE2Mjc4NyksIGNvcnJlbGF0aW9uICgwLjA5NDI3NDgpKi8sXG4gICAgLTExLDcsIC05LDEyLyptZWFuICgwLjIxNTYxKSwgY29ycmVsYXRpb24gKDAuMDk3NDQzOCkqLyxcbiAgICA3LDcsIDEyLDYvKm1lYW4gKDAuMTYwNTgzKSwgY29ycmVsYXRpb24gKDAuMTMwMDY0KSovLFxuICAgIC00LC01LCAtMywwLyptZWFuICgwLjIyODE3MSksIGNvcnJlbGF0aW9uICgwLjEzMjk5OCkqLyxcbiAgICAtMTMsMiwgLTEyLC0zLyptZWFuICgwLjAwOTk3NTI2KSwgY29ycmVsYXRpb24gKDAuMTQ1OTI2KSovLFxuICAgIC05LDAsIC03LDUvKm1lYW4gKDAuMTk4MjM0KSwgY29ycmVsYXRpb24gKDAuMTQzNjM2KSovLFxuICAgIDEyLC02LCAxMiwtMS8qbWVhbiAoMC4wNjc2MjI2KSwgY29ycmVsYXRpb24gKDAuMTY2ODkpKi8sXG4gICAgLTMsNiwgLTIsMTIvKm1lYW4gKDAuMTY2ODQ3KSwgY29ycmVsYXRpb24gKDAuMTcxNjgyKSovLFxuICAgIC02LC0xMywgLTQsLTgvKm1lYW4gKDAuMTAxMjE1KSwgY29ycmVsYXRpb24gKDAuMTc5NzE2KSovLFxuICAgIDExLC0xMywgMTIsLTgvKm1lYW4gKDAuMjAwNjQxKSwgY29ycmVsYXRpb24gKDAuMTkyMjc5KSovLFxuICAgIDQsNywgNSwxLyptZWFuICgwLjIwNTEwNiksIGNvcnJlbGF0aW9uICgwLjE4Njg0OCkqLyxcbiAgICA1LC0zLCAxMCwtMy8qbWVhbiAoMC4yMzQ5MDgpLCBjb3JyZWxhdGlvbiAoMC4xOTIzMTkpKi8sXG4gICAgMywtNywgNiwxMi8qbWVhbiAoMC4wNzA5OTY0KSwgY29ycmVsYXRpb24gKDAuMjEwODcyKSovLFxuICAgIC04LC03LCAtNiwtMi8qbWVhbiAoMC4wOTM5ODM0KSwgY29ycmVsYXRpb24gKDAuMjEyNTg5KSovLFxuICAgIC0yLDExLCAtMSwtMTAvKm1lYW4gKDAuMTI3Nzc4KSwgY29ycmVsYXRpb24gKDAuMjA4NjYpKi8sXG4gICAgLTEzLDEyLCAtOCwxMC8qbWVhbiAoMC4xNDc4MyksIGNvcnJlbGF0aW9uICgwLjIwNjM1NikqLyxcbiAgICAtNywzLCAtNSwtMy8qbWVhbiAoMC4xODIxNDEpLCBjb3JyZWxhdGlvbiAoMC4xOTg5NDIpKi8sXG4gICAgLTQsMiwgLTMsNy8qbWVhbiAoMC4xODgyMzcpLCBjb3JyZWxhdGlvbiAoMC4yMTM4NCkqLyxcbiAgICAtMTAsLTEyLCAtNiwxMS8qbWVhbiAoMC4xNDg2NSksIGNvcnJlbGF0aW9uICgwLjIzNTcxKSovLFxuICAgIDUsLTEyLCA2LC03LyptZWFuICgwLjIyMjMxMiksIGNvcnJlbGF0aW9uICgwLjIzMzI0KSovLFxuICAgIDUsLTYsIDcsLTEvKm1lYW4gKDAuMjI5MDgyKSwgY29ycmVsYXRpb24gKDAuMjMzODkpKi8sXG4gICAgMSwwLCA0LC01LyptZWFuICgwLjI0MTU3NyksIGNvcnJlbGF0aW9uICgwLjIxNTI4NikqLyxcbiAgICA5LDExLCAxMSwtMTMvKm1lYW4gKDAuMDAzMzg1MDcpLCBjb3JyZWxhdGlvbiAoMC4yNTEzNzMpKi8sXG4gICAgNCw3LCA0LDEyLyptZWFuICgwLjEzMTAwNSksIGNvcnJlbGF0aW9uICgwLjI1NzYyMikqLyxcbiAgICAyLC0xLCA0LDQvKm1lYW4gKDAuMTUyNzU1KSwgY29ycmVsYXRpb24gKDAuMjU1MjA1KSovLFxuICAgIC00LC0xMiwgLTIsNy8qbWVhbiAoMC4xODI3NzEpLCBjb3JyZWxhdGlvbiAoMC4yNDQ4NjcpKi8sXG4gICAgLTgsLTUsIC03LC0xMC8qbWVhbiAoMC4xODY4OTgpLCBjb3JyZWxhdGlvbiAoMC4yMzkwMSkqLyxcbiAgICA0LDExLCA5LDEyLyptZWFuICgwLjIyNjIyNiksIGNvcnJlbGF0aW9uICgwLjI1ODI1NSkqLyxcbiAgICAwLC04LCAxLC0xMy8qbWVhbiAoMC4wODk3ODg2KSwgY29ycmVsYXRpb24gKDAuMjc0ODI3KSovLFxuICAgIC0xMywtMiwgLTgsMi8qbWVhbiAoMC4xNDg3NzQpLCBjb3JyZWxhdGlvbiAoMC4yODA2NSkqLyxcbiAgICAtMywtMiwgLTIsMy8qbWVhbiAoMC4xNTMwNDgpLCBjb3JyZWxhdGlvbiAoMC4yODMwNjMpKi8sXG4gICAgLTYsOSwgLTQsLTkvKm1lYW4gKDAuMTY5NTIzKSwgY29ycmVsYXRpb24gKDAuMjc4MjQ4KSovLFxuICAgIDgsMTIsIDEwLDcvKm1lYW4gKDAuMjI1MzM3KSwgY29ycmVsYXRpb24gKDAuMjgyODUxKSovLFxuICAgIDAsOSwgMSwzLyptZWFuICgwLjIyNjY4NyksIGNvcnJlbGF0aW9uICgwLjI3ODczNCkqLyxcbiAgICA3LC01LCAxMSwtMTAvKm1lYW4gKDAuMDA2OTM4ODIpLCBjb3JyZWxhdGlvbiAoMC4zMDUxNjEpKi8sXG4gICAgLTEzLC02LCAtMTEsMC8qbWVhbiAoMC4wMjI3MjgzKSwgY29ycmVsYXRpb24gKDAuMzAwMTgxKSovLFxuICAgIDEwLDcsIDEyLDEvKm1lYW4gKDAuMTI1NTE3KSwgY29ycmVsYXRpb24gKDAuMzEwODkpKi8sXG4gICAgLTYsLTMsIC02LDEyLyptZWFuICgwLjEzMTc0OCksIGNvcnJlbGF0aW9uICgwLjMxMjc3OSkqLyxcbiAgICAxMCwtOSwgMTIsLTQvKm1lYW4gKDAuMTQ0ODI3KSwgY29ycmVsYXRpb24gKDAuMjkyNzk3KSovLFxuICAgIC0xMyw4LCAtOCwtMTIvKm1lYW4gKDAuMTQ5MjAyKSwgY29ycmVsYXRpb24gKDAuMzA4OTE4KSovLFxuICAgIC0xMywwLCAtOCwtNC8qbWVhbiAoMC4xNjA5MDkpLCBjb3JyZWxhdGlvbiAoMC4zMTAwMTMpKi8sXG4gICAgMywzLCA3LDgvKm1lYW4gKDAuMTc3NzU1KSwgY29ycmVsYXRpb24gKDAuMzA5Mzk0KSovLFxuICAgIDUsNywgMTAsLTcvKm1lYW4gKDAuMjEyMzM3KSwgY29ycmVsYXRpb24gKDAuMzEwMzE1KSovLFxuICAgIC0xLDcsIDEsLTEyLyptZWFuICgwLjIxNDQyOSksIGNvcnJlbGF0aW9uICgwLjMxMTkzMykqLyxcbiAgICAzLC0xMCwgNSw2LyptZWFuICgwLjIzNTgwNyksIGNvcnJlbGF0aW9uICgwLjMxMzEwNCkqLyxcbiAgICAyLC00LCAzLC0xMC8qbWVhbiAoMC4wMDQ5NDgyNyksIGNvcnJlbGF0aW9uICgwLjM0NDk0OCkqLyxcbiAgICAtMTMsMCwgLTEzLDUvKm1lYW4gKDAuMDU0OTE0NSksIGNvcnJlbGF0aW9uICgwLjM0NDY3NSkqLyxcbiAgICAtMTMsLTcsIC0xMiwxMi8qbWVhbiAoMC4xMDMzODUpLCBjb3JyZWxhdGlvbiAoMC4zNDI3MTUpKi8sXG4gICAgLTEzLDMsIC0xMSw4LyptZWFuICgwLjEzNDIyMiksIGNvcnJlbGF0aW9uICgwLjMyMjkyMikqLyxcbiAgICAtNywxMiwgLTQsNy8qbWVhbiAoMC4xNTMyODQpLCBjb3JyZWxhdGlvbiAoMC4zMzcwNjEpKi8sXG4gICAgNiwtMTAsIDEyLDgvKm1lYW4gKDAuMTU0ODgxKSwgY29ycmVsYXRpb24gKDAuMzI5MjU3KSovLFxuICAgIC05LC0xLCAtNywtNi8qbWVhbiAoMC4yMDA5NjcpLCBjb3JyZWxhdGlvbiAoMC4zMzMxMikqLyxcbiAgICAtMiwtNSwgMCwxMi8qbWVhbiAoMC4yMDE1MTgpLCBjb3JyZWxhdGlvbiAoMC4zNDA2MzUpKi8sXG4gICAgLTEyLDUsIC03LDUvKm1lYW4gKDAuMjA3ODA1KSwgY29ycmVsYXRpb24gKDAuMzM1NjMxKSovLFxuICAgIDMsLTEwLCA4LC0xMy8qbWVhbiAoMC4yMjQ0MzgpLCBjb3JyZWxhdGlvbiAoMC4zNDUwNCkqLyxcbiAgICAtNywtNywgLTQsNS8qbWVhbiAoMC4yMzkzNjEpLCBjb3JyZWxhdGlvbiAoMC4zMzgwNTMpKi8sXG4gICAgLTMsLTIsIC0xLC03LyptZWFuICgwLjI0MDc0NCksIGNvcnJlbGF0aW9uICgwLjM0NDMyMikqLyxcbiAgICAyLDksIDUsLTExLyptZWFuICgwLjI0Mjk0OSksIGNvcnJlbGF0aW9uICgwLjM0MTQ1KSovLFxuICAgIC0xMSwtMTMsIC01LC0xMy8qbWVhbiAoMC4yNDQwMjgpLCBjb3JyZWxhdGlvbiAoMC4zMzY4NjEpKi8sXG4gICAgLTEsNiwgMCwtMS8qbWVhbiAoMC4yNDc1NzEpLCBjb3JyZWxhdGlvbiAoMC4zNDM2ODQpKi8sXG4gICAgNSwtMywgNSwyLyptZWFuICgwLjAwMDY5NzI1NiksIGNvcnJlbGF0aW9uICgwLjM1NzI2NSkqLyxcbiAgICAtNCwtMTMsIC00LDEyLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuMzczODI3KSovLFxuICAgIC05LC02LCAtOSw2LyptZWFuICgwLjAxMjY4NTYpLCBjb3JyZWxhdGlvbiAoMC4zNzM5MzgpKi8sXG4gICAgLTEyLC0xMCwgLTgsLTQvKm1lYW4gKDAuMDE1MjQ5NyksIGNvcnJlbGF0aW9uICgwLjM2NDIzNykqLyxcbiAgICAxMCwyLCAxMiwtMy8qbWVhbiAoMC4wMjk5OTMzKSwgY29ycmVsYXRpb24gKDAuMzQ1MjkyKSovLFxuICAgIDcsMTIsIDEyLDEyLyptZWFuICgwLjAzMDcyNDIpLCBjb3JyZWxhdGlvbiAoMC4zNjYyOTkpKi8sXG4gICAgLTcsLTEzLCAtNiw1LyptZWFuICgwLjA1MzQ5NzUpLCBjb3JyZWxhdGlvbiAoMC4zNjgzNTcpKi8sXG4gICAgLTQsOSwgLTMsNC8qbWVhbiAoMC4wOTk4NjUpLCBjb3JyZWxhdGlvbiAoMC4zNzIyNzYpKi8sXG4gICAgNywtMSwgMTIsMi8qbWVhbiAoMC4xMTcwODMpLCBjb3JyZWxhdGlvbiAoMC4zNjQ1MjkpKi8sXG4gICAgLTcsNiwgLTUsMS8qbWVhbiAoMC4xMjYxMjUpLCBjb3JyZWxhdGlvbiAoMC4zNjk2MDYpKi8sXG4gICAgLTEzLDExLCAtMTIsNS8qbWVhbiAoMC4xMzAzNjQpLCBjb3JyZWxhdGlvbiAoMC4zNTg1MDIpKi8sXG4gICAgLTMsNywgLTIsLTYvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuMzc1NTMxKSovLFxuICAgIDcsLTgsIDEyLC03LyptZWFuICgwLjE2MDE2NiksIGNvcnJlbGF0aW9uICgwLjM3OTUwOCkqLyxcbiAgICAtMTMsLTcsIC0xMSwtMTIvKm1lYW4gKDAuMTY3ODQ4KSwgY29ycmVsYXRpb24gKDAuMzUzMzQzKSovLFxuICAgIDEsLTMsIDEyLDEyLyptZWFuICgwLjE4MzM3OCksIGNvcnJlbGF0aW9uICgwLjM3MTkxNikqLyxcbiAgICAyLC02LCAzLDAvKm1lYW4gKDAuMjI4NzExKSwgY29ycmVsYXRpb24gKDAuMzcxNzYxKSovLFxuICAgIC00LDMsIC0yLC0xMy8qbWVhbiAoMC4yNDcyMTEpLCBjb3JyZWxhdGlvbiAoMC4zNjQwNjMpKi8sXG4gICAgLTEsLTEzLCAxLDkvKm1lYW4gKDAuMjQ5MzI1KSwgY29ycmVsYXRpb24gKDAuMzc4MTM5KSovLFxuICAgIDcsMSwgOCwtNi8qbWVhbiAoMC4wMDA2NTIyNzIpLCBjb3JyZWxhdGlvbiAoMC40MTE2ODIpKi8sXG4gICAgMSwtMSwgMywxMi8qbWVhbiAoMC4wMDI0ODUzOCksIGNvcnJlbGF0aW9uICgwLjM5Mjk4OCkqLyxcbiAgICA5LDEsIDEyLDYvKm1lYW4gKDAuMDIwNjgxNSksIGNvcnJlbGF0aW9uICgwLjM4NjEwNikqLyxcbiAgICAtMSwtOSwgLTEsMy8qbWVhbiAoMC4wMzY0NDg1KSwgY29ycmVsYXRpb24gKDAuNDEwNzUyKSovLFxuICAgIC0xMywtMTMsIC0xMCw1LyptZWFuICgwLjAzNzYwNjgpLCBjb3JyZWxhdGlvbiAoMC4zOTgzNzQpKi8sXG4gICAgNyw3LCAxMCwxMi8qbWVhbiAoMC4wNDI0MjAyKSwgY29ycmVsYXRpb24gKDAuNDA1NjYzKSovLFxuICAgIDEyLC01LCAxMiw5LyptZWFuICgwLjA5NDI2NDUpLCBjb3JyZWxhdGlvbiAoMC40MTA0MjIpKi8sXG4gICAgNiwzLCA3LDExLyptZWFuICgwLjEwNzQpLCBjb3JyZWxhdGlvbiAoMC40MTMyMjQpKi8sXG4gICAgNSwtMTMsIDYsMTAvKm1lYW4gKDAuMTA5MjU2KSwgY29ycmVsYXRpb24gKDAuNDA4NjQ2KSovLFxuICAgIDIsLTEyLCAyLDMvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuNDE2MDc2KSovLFxuICAgIDMsOCwgNCwtNi8qbWVhbiAoMC4xNjUwODEpLCBjb3JyZWxhdGlvbiAoMC40MTc1NjkpKi8sXG4gICAgMiw2LCAxMiwtMTMvKm1lYW4gKDAuMTcxODc0KSwgY29ycmVsYXRpb24gKDAuNDA4NDcxKSovLFxuICAgIDksLTEyLCAxMCwzLyptZWFuICgwLjE3NTE0NiksIGNvcnJlbGF0aW9uICgwLjQxMjk2KSovLFxuICAgIC04LDQsIC03LDkvKm1lYW4gKDAuMTgzNjgyKSwgY29ycmVsYXRpb24gKDAuNDAyOTU2KSovLFxuICAgIC0xMSwxMiwgLTQsLTYvKm1lYW4gKDAuMTg0NjcyKSwgY29ycmVsYXRpb24gKDAuNDE2MTI1KSovLFxuICAgIDEsMTIsIDIsLTgvKm1lYW4gKDAuMTkxNDg3KSwgY29ycmVsYXRpb24gKDAuMzg2Njk2KSovLFxuICAgIDYsLTksIDcsLTQvKm1lYW4gKDAuMTkyNjY4KSwgY29ycmVsYXRpb24gKDAuMzk0NzcxKSovLFxuICAgIDIsMywgMywtMi8qbWVhbiAoMC4yMDAxNTcpLCBjb3JyZWxhdGlvbiAoMC40MDgzMDMpKi8sXG4gICAgNiwzLCAxMSwwLyptZWFuICgwLjIwNDU4OCksIGNvcnJlbGF0aW9uICgwLjQxMTc2MikqLyxcbiAgICAzLC0zLCA4LC04LyptZWFuICgwLjIwNTkwNCksIGNvcnJlbGF0aW9uICgwLjQxNjI5NCkqLyxcbiAgICA3LDgsIDksMy8qbWVhbiAoMC4yMTMyMzcpLCBjb3JyZWxhdGlvbiAoMC40MDkzMDYpKi8sXG4gICAgLTExLC01LCAtNiwtNC8qbWVhbiAoMC4yNDM0NDQpLCBjb3JyZWxhdGlvbiAoMC4zOTUwNjkpKi8sXG4gICAgLTEwLDExLCAtNSwxMC8qbWVhbiAoMC4yNDc2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTMzOTIpKi8sXG4gICAgLTUsLTgsIC0zLDEyLyptZWFuICgwLjI0Nzc0KSwgY29ycmVsYXRpb24gKDAuNDExNDE2KSovLFxuICAgIC0xMCw1LCAtOSwwLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuNDU0MDAzKSovLFxuICAgIDgsLTEsIDEyLC02LyptZWFuICgwLjAyOTM2MzUpLCBjb3JyZWxhdGlvbiAoMC40NTUzNjgpKi8sXG4gICAgNCwtNiwgNiwtMTEvKm1lYW4gKDAuMDQwNDk3MSksIGNvcnJlbGF0aW9uICgwLjQ1NzM5MykqLyxcbiAgICAtMTAsMTIsIC04LDcvKm1lYW4gKDAuMDQ4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ0ODM2NCkqLyxcbiAgICA0LC0yLCA2LDcvKm1lYW4gKDAuMDUwNjQxKSwgY29ycmVsYXRpb24gKDAuNDU1MDE5KSovLFxuICAgIC0yLDAsIC0yLDEyLyptZWFuICgwLjA1MjU5NzgpLCBjb3JyZWxhdGlvbiAoMC40NDMzOCkqLyxcbiAgICAtNSwtOCwgLTUsMi8qbWVhbiAoMC4wNjI5NjY3KSwgY29ycmVsYXRpb24gKDAuNDU3MDk2KSovLFxuICAgIDcsLTYsIDEwLDEyLyptZWFuICgwLjA2NTM4NDYpLCBjb3JyZWxhdGlvbiAoMC40NDU2MjMpKi8sXG4gICAgLTksLTEzLCAtOCwtOC8qbWVhbiAoMC4wODU4NzQ5KSwgY29ycmVsYXRpb24gKDAuNDQ5Nzg5KSovLFxuICAgIC01LC0xMywgLTUsLTIvKm1lYW4gKDAuMTIyNDAyKSwgY29ycmVsYXRpb24gKDAuNDUwMjAxKSovLFxuICAgIDgsLTgsIDksLTEzLyptZWFuICgwLjEyNTQxNiksIGNvcnJlbGF0aW9uICgwLjQ1MzIyNCkqLyxcbiAgICAtOSwtMTEsIC05LDAvKm1lYW4gKDAuMTMwMTI4KSwgY29ycmVsYXRpb24gKDAuNDU4NzI0KSovLFxuICAgIDEsLTgsIDEsLTIvKm1lYW4gKDAuMTMyNDY3KSwgY29ycmVsYXRpb24gKDAuNDQwMTMzKSovLFxuICAgIDcsLTQsIDksMS8qbWVhbiAoMC4xMzI2OTIpLCBjb3JyZWxhdGlvbiAoMC40NTQpKi8sXG4gICAgLTIsMSwgLTEsLTQvKm1lYW4gKDAuMTM1Njk1KSwgY29ycmVsYXRpb24gKDAuNDU1NzM5KSovLFxuICAgIDExLC02LCAxMiwtMTEvKm1lYW4gKDAuMTQyOTA0KSwgY29ycmVsYXRpb24gKDAuNDQ2MTE0KSovLFxuICAgIC0xMiwtOSwgLTYsNC8qbWVhbiAoMC4xNDYxNjUpLCBjb3JyZWxhdGlvbiAoMC40NTE0NzMpKi8sXG4gICAgMyw3LCA3LDEyLyptZWFuICgwLjE0NzYyNyksIGNvcnJlbGF0aW9uICgwLjQ1NjY0MykqLyxcbiAgICA1LDUsIDEwLDgvKm1lYW4gKDAuMTUyOTAxKSwgY29ycmVsYXRpb24gKDAuNDU1MDM2KSovLFxuICAgIDAsLTQsIDIsOC8qbWVhbiAoMC4xNjcwODMpLCBjb3JyZWxhdGlvbiAoMC40NTkzMTUpKi8sXG4gICAgLTksMTIsIC01LC0xMy8qbWVhbiAoMC4xNzMyMzQpLCBjb3JyZWxhdGlvbiAoMC40NTQ3MDYpKi8sXG4gICAgMCw3LCAyLDEyLyptZWFuICgwLjE4MzEyKSwgY29ycmVsYXRpb24gKDAuNDMzODU1KSovLFxuICAgIC0xLDIsIDEsNy8qbWVhbiAoMC4xODU1MDQpLCBjb3JyZWxhdGlvbiAoMC40NDM4MzgpKi8sXG4gICAgNSwxMSwgNywtOS8qbWVhbiAoMC4xODU3MDYpLCBjb3JyZWxhdGlvbiAoMC40NTExMjMpKi8sXG4gICAgMyw1LCA2LC04LyptZWFuICgwLjE4ODk2OCksIGNvcnJlbGF0aW9uICgwLjQ1NTgwOCkqLyxcbiAgICAtMTMsLTQsIC04LDkvKm1lYW4gKDAuMTkxNjY3KSwgY29ycmVsYXRpb24gKDAuNDU5MTI4KSovLFxuICAgIC01LDksIC0zLC0zLyptZWFuICgwLjE5MzE5NiksIGNvcnJlbGF0aW9uICgwLjQ1ODM2NCkqLyxcbiAgICAtNCwtNywgLTMsLTEyLyptZWFuICgwLjE5NjUzNiksIGNvcnJlbGF0aW9uICgwLjQ1NTc4MikqLyxcbiAgICA2LDUsIDgsMC8qbWVhbiAoMC4xOTcyKSwgY29ycmVsYXRpb24gKDAuNDUwNDgxKSovLFxuICAgIC03LDYsIC02LDEyLyptZWFuICgwLjE5OTQzOCksIGNvcnJlbGF0aW9uICgwLjQ1ODE1NikqLyxcbiAgICAtMTMsNiwgLTUsLTIvKm1lYW4gKDAuMjExMjI0KSwgY29ycmVsYXRpb24gKDAuNDQ5NTQ4KSovLFxuICAgIDEsLTEwLCAzLDEwLyptZWFuICgwLjIxMTcxOCksIGNvcnJlbGF0aW9uICgwLjQ0MDYwNikqLyxcbiAgICA0LDEsIDgsLTQvKm1lYW4gKDAuMjEzMDM0KSwgY29ycmVsYXRpb24gKDAuNDQzMTc3KSovLFxuICAgIC0yLC0yLCAyLC0xMy8qbWVhbiAoMC4yMzQzMzQpLCBjb3JyZWxhdGlvbiAoMC40NTUzMDQpKi8sXG4gICAgMiwtMTIsIDEyLDEyLyptZWFuICgwLjIzNTY4NCksIGNvcnJlbGF0aW9uICgwLjQ0MzQzNikqLyxcbiAgICAtMiwtMTMsIDAsLTYvKm1lYW4gKDAuMjM3Njc0KSwgY29ycmVsYXRpb24gKDAuNDUyNTI1KSovLFxuICAgIDQsMSwgOSwzLyptZWFuICgwLjIzOTYyKSwgY29ycmVsYXRpb24gKDAuNDQ0ODI0KSovLFxuICAgIC02LC0xMCwgLTMsLTUvKm1lYW4gKDAuMjQ4NDU5KSwgY29ycmVsYXRpb24gKDAuNDM5NjIxKSovLFxuICAgIC0zLC0xMywgLTEsMS8qbWVhbiAoMC4yNDk1MDUpLCBjb3JyZWxhdGlvbiAoMC40NTY2NjYpKi8sXG4gICAgNyw1LCAxMiwtMTEvKm1lYW4gKDAuMDAxMTkyMDgpLCBjb3JyZWxhdGlvbiAoMC40OTU0NjYpKi8sXG4gICAgNCwtMiwgNSwtNy8qbWVhbiAoMC4wMDM3MjI0NSksIGNvcnJlbGF0aW9uICgwLjQ4NDIxNCkqLyxcbiAgICAtMTMsOSwgLTksLTUvKm1lYW4gKDAuMDA3NDExMTYpLCBjb3JyZWxhdGlvbiAoMC40OTk4NTQpKi8sXG4gICAgNywxLCA4LDYvKm1lYW4gKDAuMDIwODk1MiksIGNvcnJlbGF0aW9uICgwLjQ5OTc3MykqLyxcbiAgICA3LC04LCA3LDYvKm1lYW4gKDAuMDIyMDA4NSksIGNvcnJlbGF0aW9uICgwLjUwMTYwOSkqLyxcbiAgICAtNywtNCwgLTcsMS8qbWVhbiAoMC4wMjMzODA2KSwgY29ycmVsYXRpb24gKDAuNDk2NTY4KSovLFxuICAgIC04LDExLCAtNywtOC8qbWVhbiAoMC4wMjM2NTA1KSwgY29ycmVsYXRpb24gKDAuNDg5NzE5KSovLFxuICAgIC0xMyw2LCAtMTIsLTgvKm1lYW4gKDAuMDI2ODc4MSksIGNvcnJlbGF0aW9uICgwLjUwMzQ4NykqLyxcbiAgICAyLDQsIDMsOS8qbWVhbiAoMC4wMzIzMzI0KSwgY29ycmVsYXRpb24gKDAuNTAxOTM4KSovLFxuICAgIDEwLC01LCAxMiwzLyptZWFuICgwLjAzOTkyMzUpLCBjb3JyZWxhdGlvbiAoMC40OTQwMjkpKi8sXG4gICAgLTYsLTUsIC02LDcvKm1lYW4gKDAuMDQyMDE1MyksIGNvcnJlbGF0aW9uICgwLjQ4NjU3OSkqLyxcbiAgICA4LC0zLCA5LC04LyptZWFuICgwLjA1NDgwMjEpLCBjb3JyZWxhdGlvbiAoMC40ODQyMzcpKi8sXG4gICAgMiwtMTIsIDIsOC8qbWVhbiAoMC4wNjE2NjIyKSwgY29ycmVsYXRpb24gKDAuNDk2NjQyKSovLFxuICAgIC0xMSwtMiwgLTEwLDMvKm1lYW4gKDAuMDYyNzc1NSksIGNvcnJlbGF0aW9uICgwLjQ5ODU2MykqLyxcbiAgICAtMTIsLTEzLCAtNywtOS8qbWVhbiAoMC4wODI5NjIyKSwgY29ycmVsYXRpb24gKDAuNDk1NDkxKSovLFxuICAgIC0xMSwwLCAtMTAsLTUvKm1lYW4gKDAuMDg0MzM0MiksIGNvcnJlbGF0aW9uICgwLjQ4NzE0NikqLyxcbiAgICA1LC0zLCAxMSw4LyptZWFuICgwLjA5Mjk5MzcpLCBjb3JyZWxhdGlvbiAoMC41MDIzMTUpKi8sXG4gICAgLTIsLTEzLCAtMSwxMi8qbWVhbiAoMC4xMTMzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk0MSkqLyxcbiAgICAtMSwtOCwgMCw5LyptZWFuICgwLjEzMjExOSksIGNvcnJlbGF0aW9uICgwLjQ2NzI2OCkqLyxcbiAgICAtMTMsLTExLCAtMTIsLTUvKm1lYW4gKDAuMTM2MjY5KSwgY29ycmVsYXRpb24gKDAuNDk4NzcxKSovLFxuICAgIC0xMCwtMiwgLTEwLDExLyptZWFuICgwLjE0MjE3MyksIGNvcnJlbGF0aW9uICgwLjQ5ODcxNCkqLyxcbiAgICAtMyw5LCAtMiwtMTMvKm1lYW4gKDAuMTQ0MTQxKSwgY29ycmVsYXRpb24gKDAuNDkxOTczKSovLFxuICAgIDIsLTMsIDMsMi8qbWVhbiAoMC4xNDg5MiksIGNvcnJlbGF0aW9uICgwLjUwMDc4MikqLyxcbiAgICAtOSwtMTMsIC00LDAvKm1lYW4gKDAuMTUwMzcxKSwgY29ycmVsYXRpb24gKDAuNDk4MjExKSovLFxuICAgIC00LDYsIC0zLC0xMC8qbWVhbiAoMC4xNTIxNTkpLCBjb3JyZWxhdGlvbiAoMC40OTU1NDcpKi8sXG4gICAgLTQsMTIsIC0yLC03LyptZWFuICgwLjE1NjE1MiksIGNvcnJlbGF0aW9uICgwLjQ5NjkyNSkqLyxcbiAgICAtNiwtMTEsIC00LDkvKm1lYW4gKDAuMTU3NDkpLCBjb3JyZWxhdGlvbiAoMC40OTkyMjIpKi8sXG4gICAgNiwtMywgNiwxMS8qbWVhbiAoMC4xNTkyMTEpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjEpKi8sXG4gICAgLTEzLDExLCAtNSw1LyptZWFuICgwLjE2MjQyNyksIGNvcnJlbGF0aW9uICgwLjUwMTkwNykqLyxcbiAgICAxMSwxMSwgMTIsNi8qbWVhbiAoMC4xNjY1MiksIGNvcnJlbGF0aW9uICgwLjQ5NzYzMikqLyxcbiAgICA3LC01LCAxMiwtMi8qbWVhbiAoMC4xNjkxNDEpLCBjb3JyZWxhdGlvbiAoMC40ODQ0NzQpKi8sXG4gICAgLTEsMTIsIDAsNy8qbWVhbiAoMC4xNjk0NTYpLCBjb3JyZWxhdGlvbiAoMC40OTUzMzkpKi8sXG4gICAgLTQsLTgsIC0zLC0yLyptZWFuICgwLjE3MTQ1NyksIGNvcnJlbGF0aW9uICgwLjQ4NzI1MSkqLyxcbiAgICAtNywxLCAtNiw3LyptZWFuICgwLjE3NSksIGNvcnJlbGF0aW9uICgwLjUwMDAyNCkqLyxcbiAgICAtMTMsLTEyLCAtOCwtMTMvKm1lYW4gKDAuMTc1ODY2KSwgY29ycmVsYXRpb24gKDAuNDk3NTIzKSovLFxuICAgIC03LC0yLCAtNiwtOC8qbWVhbiAoMC4xNzgyNzMpLCBjb3JyZWxhdGlvbiAoMC41MDE4NTQpKi8sXG4gICAgLTgsNSwgLTYsLTkvKm1lYW4gKDAuMTgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDk0ODg4KSovLFxuICAgIC01LC0xLCAtNCw1LyptZWFuICgwLjE5MDIyNyksIGNvcnJlbGF0aW9uICgwLjQ4MjU1NykqLyxcbiAgICAtMTMsNywgLTgsMTAvKm1lYW4gKDAuMTk2NzM5KSwgY29ycmVsYXRpb24gKDAuNDk2NTAzKSovLFxuICAgIDEsNSwgNSwtMTMvKm1lYW4gKDAuMTk5NzMpLCBjb3JyZWxhdGlvbiAoMC40OTk3NTkpKi8sXG4gICAgMSwwLCAxMCwtMTMvKm1lYW4gKDAuMjA0NDY1KSwgY29ycmVsYXRpb24gKDAuNDk4NzMpKi8sXG4gICAgOSwxMiwgMTAsLTEvKm1lYW4gKDAuMjA5MzM0KSwgY29ycmVsYXRpb24gKDAuNDkwNjMpKi8sXG4gICAgNSwtOCwgMTAsLTkvKm1lYW4gKDAuMjExMTM0KSwgY29ycmVsYXRpb24gKDAuNTAzMDExKSovLFxuICAgIC0xLDExLCAxLC0xMy8qbWVhbiAoMC4yMTIpLCBjb3JyZWxhdGlvbiAoMC40OTk0MTQpKi8sXG4gICAgLTksLTMsIC02LDIvKm1lYW4gKDAuMjEyMTY4KSwgY29ycmVsYXRpb24gKDAuNDgwNzM5KSovLFxuICAgIC0xLC0xMCwgMSwxMi8qbWVhbiAoMC4yMTI3MzEpLCBjb3JyZWxhdGlvbiAoMC41MDI1MjMpKi8sXG4gICAgLTEzLDEsIC04LC0xMC8qbWVhbiAoMC4yMTMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTc4NikqLyxcbiAgICA4LC0xMSwgMTAsLTYvKm1lYW4gKDAuMjE0MTU5KSwgY29ycmVsYXRpb24gKDAuNDg4MjQ2KSovLFxuICAgIDIsLTEzLCAzLC02LyptZWFuICgwLjIxNjk5MyksIGNvcnJlbGF0aW9uICgwLjUwMjg3KSovLFxuICAgIDcsLTEzLCAxMiwtOS8qbWVhbiAoMC4yMjM2MzkpLCBjb3JyZWxhdGlvbiAoMC40NzA1MDIpKi8sXG4gICAgLTEwLC0xMCwgLTUsLTcvKm1lYW4gKDAuMjI0MDg5KSwgY29ycmVsYXRpb24gKDAuNTAwODUyKSovLFxuICAgIC0xMCwtOCwgLTgsLTEzLyptZWFuICgwLjIyODY2NiksIGNvcnJlbGF0aW9uICgwLjUwMjYyOSkqLyxcbiAgICA0LC02LCA4LDUvKm1lYW4gKDAuMjI5MDYpLCBjb3JyZWxhdGlvbiAoMC40OTgzMDUpKi8sXG4gICAgMywxMiwgOCwtMTMvKm1lYW4gKDAuMjMzMzc4KSwgY29ycmVsYXRpb24gKDAuNTAzODI1KSovLFxuICAgIC00LDIsIC0zLC0zLyptZWFuICgwLjIzNDMyMyksIGNvcnJlbGF0aW9uICgwLjQ3NjY5MikqLyxcbiAgICA1LC0xMywgMTAsLTEyLyptZWFuICgwLjIzNjM5MiksIGNvcnJlbGF0aW9uICgwLjQ3NTQ2MikqLyxcbiAgICA0LC0xMywgNSwtMS8qbWVhbiAoMC4yMzY4NDIpLCBjb3JyZWxhdGlvbiAoMC41MDQxMzIpKi8sXG4gICAgLTksOSwgLTQsMy8qbWVhbiAoMC4yMzY5NzcpLCBjb3JyZWxhdGlvbiAoMC40OTc3MzkpKi8sXG4gICAgMCwzLCAzLC05LyptZWFuICgwLjI0MzE0KSwgY29ycmVsYXRpb24gKDAuNDk5Mzk4KSovLFxuICAgIC0xMiwxLCAtNiwxLyptZWFuICgwLjI0MzI5NyksIGNvcnJlbGF0aW9uICgwLjQ4OTQ0NykqLyxcbiAgICAzLDIsIDQsLTgvKm1lYW4gKDAuMDAxNTUxOTYpLCBjb3JyZWxhdGlvbiAoMC41NTM0OTYpKi8sXG4gICAgLTEwLC0xMCwgLTEwLDkvKm1lYW4gKDAuMDAyMzk1NDEpLCBjb3JyZWxhdGlvbiAoMC41NDI5NykqLyxcbiAgICA4LC0xMywgMTIsMTIvKm1lYW4gKDAuMDAzNDQxMyksIGNvcnJlbGF0aW9uICgwLjU0NDM2MSkqLyxcbiAgICAtOCwtMTIsIC02LC01LyptZWFuICgwLjAwMzU2NSksIGNvcnJlbGF0aW9uICgwLjU1MTIyNSkqLyxcbiAgICAyLDIsIDMsNy8qbWVhbiAoMC4wMDgzNTU4MyksIGNvcnJlbGF0aW9uICgwLjU1Mjg1KSovLFxuICAgIDEwLDYsIDExLC04LyptZWFuICgwLjAwODg1MDY1KSwgY29ycmVsYXRpb24gKDAuNTQwOTEzKSovLFxuICAgIDYsOCwgOCwtMTIvKm1lYW4gKDAuMDEwMTU1MiksIGNvcnJlbGF0aW9uICgwLjU1MTA4NSkqLyxcbiAgICAtNywxMCwgLTYsNS8qbWVhbiAoMC4wMTAyMjI3KSwgY29ycmVsYXRpb24gKDAuNTMzNjM1KSovLFxuICAgIC0zLC05LCAtMyw5LyptZWFuICgwLjAxMTAyMTEpLCBjb3JyZWxhdGlvbiAoMC41NDMxMjEpKi8sXG4gICAgLTEsLTEzLCAtMSw1LyptZWFuICgwLjAxMTM0NzMpLCBjb3JyZWxhdGlvbiAoMC41NTAxNzMpKi8sXG4gICAgLTMsLTcsIC0zLDQvKm1lYW4gKDAuMDE0MDkxMyksIGNvcnJlbGF0aW9uICgwLjU1NDc3NCkqLyxcbiAgICAtOCwtMiwgLTgsMy8qbWVhbiAoMC4wMTcwNDkpLCBjb3JyZWxhdGlvbiAoMC41NTQ2MSkqLyxcbiAgICA0LDIsIDEyLDEyLyptZWFuICgwLjAxNzc4KSwgY29ycmVsYXRpb24gKDAuNTQ2OTIxKSovLFxuICAgIDIsLTUsIDMsMTEvKm1lYW4gKDAuMDIyNDAyMiksIGNvcnJlbGF0aW9uICgwLjU0OTY2NykqLyxcbiAgICA2LC05LCAxMSwtMTMvKm1lYW4gKDAuMDI5MTYxKSwgY29ycmVsYXRpb24gKDAuNTQ2Mjk1KSovLFxuICAgIDMsLTEsIDcsMTIvKm1lYW4gKDAuMDMwMzA4MSksIGNvcnJlbGF0aW9uICgwLjU0ODU5OSkqLyxcbiAgICAxMSwtMSwgMTIsNC8qbWVhbiAoMC4wMzU1MTUxKSwgY29ycmVsYXRpb24gKDAuNTIzOTQzKSovLFxuICAgIC0zLDAsIC0zLDYvKm1lYW4gKDAuMDQxNzkwNCksIGNvcnJlbGF0aW9uICgwLjU0MzM5NSkqLyxcbiAgICA0LC0xMSwgNCwxMi8qbWVhbiAoMC4wNDg3MjkyKSwgY29ycmVsYXRpb24gKDAuNTQyODE4KSovLFxuICAgIDIsLTQsIDIsMS8qbWVhbiAoMC4wNTc1MTI0KSwgY29ycmVsYXRpb24gKDAuNTU0ODg4KSovLFxuICAgIC0xMCwtNiwgLTgsMS8qbWVhbiAoMC4wNTk0MjQyKSwgY29ycmVsYXRpb24gKDAuNTQ0MDI2KSovLFxuICAgIC0xMyw3LCAtMTEsMS8qbWVhbiAoMC4wNTk3MzkxKSwgY29ycmVsYXRpb24gKDAuNTUwNTI0KSovLFxuICAgIC0xMywxMiwgLTExLC0xMy8qbWVhbiAoMC4wNjA4OTc0KSwgY29ycmVsYXRpb24gKDAuNTUzODMpKi8sXG4gICAgNiwwLCAxMSwtMTMvKm1lYW4gKDAuMDY1MTI2KSwgY29ycmVsYXRpb24gKDAuNTUyMDA2KSovLFxuICAgIDAsLTEsIDEsNC8qbWVhbiAoMC4wNzQyMjQpLCBjb3JyZWxhdGlvbiAoMC41NDYzNzIpKi8sXG4gICAgLTEzLDMsIC05LC0yLyptZWFuICgwLjA4MDg1OTIpLCBjb3JyZWxhdGlvbiAoMC41NTQ4NzUpKi8sXG4gICAgLTksOCwgLTYsLTMvKm1lYW4gKDAuMDg4MzM3OCksIGNvcnJlbGF0aW9uICgwLjU1MTE3OCkqLyxcbiAgICAtMTMsLTYsIC04LC0yLyptZWFuICgwLjA5MDEwMzUpLCBjb3JyZWxhdGlvbiAoMC41NDg0NDYpKi8sXG4gICAgNSwtOSwgOCwxMC8qbWVhbiAoMC4wOTQ5ODQzKSwgY29ycmVsYXRpb24gKDAuNTU0Njk0KSovLFxuICAgIDIsNywgMywtOS8qbWVhbiAoMC4wOTk0MTUyKSwgY29ycmVsYXRpb24gKDAuNTUwOTc5KSovLFxuICAgIC0xLC02LCAtMSwtMS8qbWVhbiAoMC4xMDA0NSksIGNvcnJlbGF0aW9uICgwLjU1MjcxNCkqLyxcbiAgICA5LDUsIDExLC0yLyptZWFuICgwLjEwMDY4NiksIGNvcnJlbGF0aW9uICgwLjU1MjU5NCkqLyxcbiAgICAxMSwtMywgMTIsLTgvKm1lYW4gKDAuMTAxMDkxKSwgY29ycmVsYXRpb24gKDAuNTMyMzk0KSovLFxuICAgIDMsMCwgMyw1LyptZWFuICgwLjEwMTE0NyksIGNvcnJlbGF0aW9uICgwLjUyNTU3NikqLyxcbiAgICAtMSw0LCAwLDEwLyptZWFuICgwLjEwNTI2MyksIGNvcnJlbGF0aW9uICgwLjUzMTQ5OCkqLyxcbiAgICAzLC02LCA0LDUvKm1lYW4gKDAuMTEwNzg1KSwgY29ycmVsYXRpb24gKDAuNTQwNDkxKSovLFxuICAgIC0xMywwLCAtMTAsNS8qbWVhbiAoMC4xMTI3OTgpLCBjb3JyZWxhdGlvbiAoMC41MzY1ODIpKi8sXG4gICAgNSw4LCAxMiwxMS8qbWVhbiAoMC4xMTQxODEpLCBjb3JyZWxhdGlvbiAoMC41NTU3OTMpKi8sXG4gICAgOCw5LCA5LC02LyptZWFuICgwLjExNzQzMSksIGNvcnJlbGF0aW9uICgwLjU1Mzc2MykqLyxcbiAgICA3LC00LCA4LC0xMi8qbWVhbiAoMC4xMTg1MjIpLCBjb3JyZWxhdGlvbiAoMC41NTM0NTIpKi8sXG4gICAgLTEwLDQsIC0xMCw5LyptZWFuICgwLjEyMDk0KSwgY29ycmVsYXRpb24gKDAuNTU0Nzg1KSovLFxuICAgIDcsMywgMTIsNC8qbWVhbiAoMC4xMjI1ODIpLCBjb3JyZWxhdGlvbiAoMC41NTU4MjUpKi8sXG4gICAgOSwtNywgMTAsLTIvKm1lYW4gKDAuMTI0OTc4KSwgY29ycmVsYXRpb24gKDAuNTQ5ODQ2KSovLFxuICAgIDcsMCwgMTIsLTIvKm1lYW4gKDAuMTI3MDAyKSwgY29ycmVsYXRpb24gKDAuNTM3NDUyKSovLFxuICAgIC0xLC02LCAwLC0xMS8qbWVhbiAoMC4xMjcxNDgpLCBjb3JyZWxhdGlvbiAoMC41NDc0MDEpKi9cbl07IiwiaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IGJpdF9wYXR0ZXJuXzMxIGZyb20gJy4vYml0X3BhdHRlcm5fMzEuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHJlY3RpZnlfcGF0Y2ggfSBmcm9tICcuL3JlY3RpZnlfcGF0Y2guanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG5cbiAgICBkZXNjcmliZShzcmMsIGNvcm5lcnMsIGNvdW50LCBkZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgdmFyIGkgPSAwLCBiID0gMCwgcHggPSAwLjAsIHB5ID0gMC4wLCBhbmdsZSA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMCwgdDEgPSAwLCB2YWwgPSAwO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgcGF0Y2hfZCA9IHRoaXMucGF0Y2hfaW1nLmRhdGE7XG4gICAgICAgIHZhciBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICB2YXIgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzY3JfZCA9IGRlc2NyaXB0b3JzLmRhdGE7XG4gICAgICAgIHZhciBkZXNjcl9vZmYgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBweCA9IGNvcm5lcnNbaV0ueDtcbiAgICAgICAgICAgIHB5ID0gY29ybmVyc1tpXS55O1xuICAgICAgICAgICAgYW5nbGUgPSBjb3JuZXJzW2ldLmFuZ2xlO1xuXG4gICAgICAgICAgICByZWN0aWZ5X3BhdGNoKHNyYywgdGhpcy5wYXRjaF9pbWcsIGFuZ2xlLCBweCwgcHksIDMyLCB0aGlzLkgpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9ICh0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBpbWdwcm9jIGZyb20gJy4uL2ltZ3Byb2MvaW1ncHJvYy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjLCBkc3QsIGFuZ2xlLCBweCwgcHksIHBzaXplLCBIKSB7XG4gICAgdmFyIGNvc2luZSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB2YXIgc2luZSAgID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgIHZhciBpbWdwcmMgPSBuZXcgaW1ncHJvYygpO1xuXG4gICAgSC5kYXRhWzBdID0gY29zaW5lLCBILmRhdGFbMV0gPSAtc2luZSwgICAgSC5kYXRhWzJdID0gKC1jb3NpbmUgKyBzaW5lICApICogcHNpemUqMC41ICsgcHgsXG4gICAgSC5kYXRhWzNdID0gc2luZSwgICBILmRhdGFbNF0gPSAgY29zaW5lLCAgSC5kYXRhWzVdID0gKC1zaW5lICAgLSBjb3NpbmUpICogcHNpemUqMC41ICsgcHk7XG5cbiAgICBpbWdwcmMud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJztcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHlyYW1pZF90IHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHMpIHtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHMgfCAwO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobGV2ZWxzKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGltZ3Byb2MoKTsgXG4gICAgICAgIHRoaXMucHlyZG93biA9IF9pbWdwcm9jLnB5cmRvd247XG4gICAgfVxuXG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGQoaW5wdXQsIHNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBpZiAoIXNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBqID0gaW5wdXQuY29scyAqIGlucHV0LnJvd3M7XG4gICAgICAgICAgICB3aGlsZSAoLS1qID49IDApIHtcbiAgICAgICAgICAgICAgICBiLmRhdGFbal0gPSBpbnB1dC5kYXRhW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGIgPSB0aGlzLmRhdGFbMV07XG4gICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgZm9yICg7IGkgPCB0aGlzLmxldmVsczsgKytpKSB7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0aGlzLmRhdGFbaV07XG4gICAgICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgcmFkaXVzLCBweXJhbWlkX2xldmVscykge1xuICAgICAgICBpZiAodHlwZW9mIHB5cmFtaWRfbGV2ZWxzID09PSBcInVuZGVmaW5lZFwiKSB7IHB5cmFtaWRfbGV2ZWxzID0gMTsgfVxuICAgICAgICB2YXIgaTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5taW4ocmFkaXVzLCA3KTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgocmFkaXVzLCAzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHB5cmFtaWRfbGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfdGFibGVzW2ldID0gbmV3IGxldl90YWJsZV90KHdpZHRoID4+IGksIGhlaWdodCA+PiBpLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYywgcG9pbnRzLCBib3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmVjb21wdXRlX2RpcmVjdGlvbnMoc3RlcCwgZGlycywgUikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCwgeTtcblxuICAgIHggPSBSO1xuICAgIGZvciAoeSA9IDA7IHkgPCB4OyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4LS07IHggPCB5ICYmIHggPj0gMDsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHktLTsgeSA+PSAwOyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB5ID4geDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB4IDwgLXk7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5Kys7IHkgPCAwOyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYiwgb2ZmLCBzdGVwKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwLCBvZmYsIHYsIHN0ZXAsIG5laWdoYm9yaG9vZCkge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEksIHgsIFNjb3JlcywgSW0sIElwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19uYikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgY29uc3RydWN0b3IodywgaCwgcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSAnLi95YXBlMDZfdXRpbHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlMDYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjLCBkc3QsIHcsIGgsIER4eCwgRHl5LCBzeCxzeSwgZXgsZXkpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmMsIG9mZiwgdHIsIER4eCwgRHl5LCBEeHksIER5eCkge1xuICAgIHZhciBJeHggPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER4eF0gKyBzcmNbb2ZmIC0gRHh4XTtcbiAgICB2YXIgSXl5ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeXldICsgc3JjW29mZiAtIER5eV07XG4gICAgdmFyIEl4eSA9IHNyY1tvZmYgKyBEeHldICsgc3JjW29mZiAtIER4eV0gLSBzcmNbb2ZmICsgRHl4XSAtIHNyY1tvZmYgLSBEeXhdO1xuICAgIHZhciBzcXJ0X2RlbHRhID0gKCBNYXRoLnNxcnQoKChJeHggLSBJeXkpICogKEl4eCAtIEl5eSkgKyA0ICogSXh5ICogSXh5KSApICl8MDtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmFicyh0ciAtIHNxcnRfZGVsdGEpLCBNYXRoLmFicygtKHRyICsgc3FydF9kZWx0YSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0LmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwiayIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiTWF0aCIsIm1pbiIsIl9jb252b2wiLCJfcmVzYW1wbGUiLCJfcmVzYW1wbGVfdTgiLCJtYXRoIiwibWF0cml4X3QiLCJpbWdwcm9jIiwiYWxsb2NhdGUiLCJzcmMiLCJkc3QiLCJjb2RlIiwieCIsInkiLCJpciIsImpyIiwiY29lZmZfciIsImNvZWZmX2ciLCJjb2VmZl9iIiwiY24iLCJjbjIiLCJjbjMiLCJkc3RfdTgiLCJkYXRhIiwibnciLCJuaCIsInJvd3MiLCJjb2xzIiwiY2hhbm5lbCIsInJhZGl1cyIsIm9wdGlvbnMiLCJoMiIsImVuZCIsIndpbmRvd1NpemUiLCJyYWRpdXNQbHVzT25lIiwicmFkaXVzUGx1czIiLCJzY2FsZSIsInRtcF9idWZmIiwiZ2V0X2J1ZmZlciIsImRzdEluZGV4Iiwic3JjSW5kZXgiLCJuZXh0UGl4ZWxJbmRleCIsInByZXZpb3VzUGl4ZWxJbmRleCIsImRhdGFfaTMyIiwiaTMyIiwiZGF0YV91OCIsImhvbGQiLCJwdXRfYnVmZmVyIiwic2lnbWEiLCJqc2ZlYXRtYXRoIiwibWF4IiwiaXNfdTgiLCJidWZfc3oiLCJidWZfbm9kZSIsImZpbHRfbm9kZSIsImYzMiIsImdldF9nYXVzc2lhbl9rZXJuZWwiLCJpbWciLCJyaG9fcmVzIiwidGhldGFfcmVzIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJtaW5fdGhldGEiLCJtYXhfdGhldGEiLCJQSSIsIm51bWFuZ2xlIiwicm91bmQiLCJudW1yaG8iLCJpcmhvIiwiYWNjdW0iLCJ0YWJTaW4iLCJGbG9hdDMyQXJyYXkiLCJ0YWJDb3MiLCJuIiwiYW5nIiwic2luIiwiY29zIiwiciIsIl9zb3J0X2J1ZiIsIkFycmF5IiwiYmFzZSIsInB1c2giLCJzb3J0IiwibDEiLCJsMiIsImxpbmVzTWF4IiwibGVuZ3RoIiwibGluZXMiLCJpZHgiLCJmbG9vciIsImxyaG8iLCJsYW5nbGUiLCJzeCIsInN5IiwiX3cyIiwiX2gyIiwic3B0ciIsInNsaW5lIiwiZHB0ciIsImRsaW5lIiwiZHN0ZXAiLCJ4MSIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsInNyb3cwIiwic3JvdzEiLCJzcm93MiIsImRyb3ciLCJ0cm93MCIsInRyb3cxIiwiZ3hneSIsImJ1ZjBfbm9kZSIsImJ1ZjFfbm9kZSIsImRzdF9zdW0iLCJkc3Rfc3FzdW0iLCJkc3RfdGlsdGVkIiwidzAiLCJoMCIsIncxIiwicyIsInMyIiwicCIsInB1cCIsInYiLCJwcmV2IiwiaGlzdDAiLCJub3JtIiwiaGlzdDBfbm9kZSIsImxvd190aHJlc2giLCJoaWdoX3RocmVzaCIsImdyYWQiLCJfZ3JhZCIsInN1cHByZXNzIiwidGcyMngiLCJ0ZzY3eCIsImR4ZHlfbm9kZSIsIm1hcF9ub2RlIiwic3RhY2tfbm9kZSIsIm1hcCIsInN0YWNrIiwiZHhkeSIsImR4ZHlfbSIsIlMzMkMyX3QiLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsInNvYmVsX2Rlcml2YXRpdmVzIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInhzMCIsInlzMCIsIndzIiwic2MiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJnIiwiYWJzIiwieG9mc19jb3VudCIsImNoIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4MSIsInN4MiIsImZzeDEiLCJmc3gyIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsInhvZnMiLCJkYXRhX3QiLCJrZXlwb2ludF90IiwibWF0bWF0aCIsInB5cmFtaWRfdCIsImxpbmFsZyIsIm9yYiIsInlhcGUiLCJ5YXBlMDYiLCJtb3Rpb25fZXN0aW1hdG9yIiwiaG9tb2dyYXBoeTJkIiwicmFuc2FjX3BhcmFtc190Iiwib3B0aWNhbF9mbG93X2xrIiwicGtnIiwianNmZWF0TmV4dCIsImR0IiwiX2dldF9kYXRhX3R5cGUiLCJfZ2V0X2NoYW5uZWwiLCJfZ2V0X2RhdGFfdHlwZV9zaXplIiwidmVyc2lvbiIsInNjb3JlIiwibGV2ZWwiLCJhbmdsZSIsInN3YXAiLCJBIiwiaTAiLCJpMSIsInQiLCJoeXBvdCIsInNxcnQiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJtIiwibCIsIl9pbiIsIl9pbjIiLCJpdGVycyIsIm1heF9pdGVyIiwibXYiLCJ2YWwiLCJhMCIsImIwIiwiaW5kUl9idWZmIiwiaW5kQ19idWZmIiwiaW5kUiIsImluZEMiLCJBdCIsIl9XIiwiVnQiLCJuMSIsIm1pbnZhbCIsIml0ZXIiLCJBaSIsIkFqIiwiVmkiLCJWaiIsImNoYW5nZWQiLCJ0MCIsInQxIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImFkIiwiYmQiLCJjb2wiLCJyb3ciLCJjb2wyIiwiY3MiLCJycyIsImludl9kaWFnIiwiVSIsImF0IiwiX20iLCJfbiIsImFfYnVmZiIsIndfYnVmZiIsInZfYnVmZiIsImFfbXQiLCJ3X210Iiwidl9tdCIsInRyYW5zcG9zZSIsIkphY29iaVNWREltcGwiLCJYIiwicHUiLCJwdiIsIm5yb3dzIiwibmNvbHMiLCJ4c3VtIiwidG9sIiwidV9idWZmIiwidV9tdCIsInVkIiwid2QiLCJ2ZCIsInN2ZF9kZWNvbXBvc2UiLCJwYSIsImlkIiwidmVjdHMiLCJ2YWxzIiwiSmFjb2JpSW1wbCIsInFzb3J0X3N0YWNrIiwia2VybmVsIiwic2lnbWFfeCIsInNjYWxlXzJ4Iiwia2Vybl9ub2RlIiwiX2tlcm5lbCIsImV4cCIsIm1vZGVsIiwic3JjX3gwIiwic3JjX3kwIiwiZHN0X3gwIiwiZHN0X3kwIiwic3JjX3gxIiwic3JjX3kxIiwiZHN0X3gxIiwiZHN0X3kxIiwic3JjX3gyIiwic3JjX3kyIiwiZHN0X3gyIiwiZHN0X3kyIiwic3JjX3gzIiwic3JjX3kzIiwiZHN0X3gzIiwiZHN0X3kzIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJwdHIiLCJwdHIyIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90Iiwic3dhcF9jbnQiLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiTSIsInZhbHVlIiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwiQyIsIkFwIiwicEEiLCJwQiIsInBfQiIsIkNwIiwibWNvbHMiLCJjZCIsIm1yb3dzIiwicENkaWFnIiwicF9BIiwicEMiLCJwQ3QiLCJwX0MiLCJwX0NDIiwiZnJvbSIsInRvIiwiaW52QSIsInQxMyIsInQxNyIsIkNkIiwiQWQiLCJCZCIsIm0xXzAiLCJtMV8xIiwibTFfMiIsIm0xXzMiLCJtMV80IiwibTFfNSIsIm0xXzYiLCJtMV83IiwibTFfOCIsIm0yXzAiLCJtMl8xIiwibTJfMiIsIm0yXzMiLCJtMl80IiwibTJfNSIsIm0yXzYiLCJtMl83IiwibTJfOCIsIm1kIiwiTTExIiwiTTEyIiwiTTEzIiwiTTIxIiwiTTIyIiwiTTIzIiwiTTMxIiwiTTMyIiwiTTMzIiwiX2RhdGFfdHlwZSIsIl9kYXRhX2J1ZmZlciIsImJ1ZmZlciIsInU4Iiwib3RoZXIiLCJvZCIsIm5ld19zaXplIiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJjaGVja19zdWJzZXQiLCJjb3VudCIsInRocmVzaCIsImVyciIsIm1hc2siLCJudW1pbmxpZXJzIiwiZXJyb3IiLCJwYXJhbXMiLCJtYXhfaXRlcnMiLCJtb2RlbF9wb2ludHMiLCJuaXRlcnMiLCJyZXN1bHQiLCJzdWJzZXQwIiwic3Vic2V0MSIsImZvdW5kIiwibWMiLCJtciIsIm1fYnVmZiIsIm1zX2J1ZmYiLCJlcnJfYnVmZiIsImN1cnJfbWFzayIsIlU4QzFfdCIsImlubGllcnNfbWF4Iiwibm1vZGVscyIsInJ1biIsImNvcHlfdG8iLCJnZXRfc3Vic2V0IiwiZmluZF9pbmxpZXJzIiwidXBkYXRlX2l0ZXJzIiwiX21hdGgiLCJtaW5fbWVkaWFuIiwibW90aW9uX21vZGVsIiwiVDAiLCJUMSIsIkF0QSIsIkF0QiIsImN4MCIsImN5MCIsImQwIiwiczAiLCJjeDEiLCJjeTEiLCJkMSIsInMxIiwiU1FSVDIiLCJwb2ludHMiLCJkeDEiLCJkeTEiLCJkeDIiLCJkeTIiLCJhZmZpbmUyZCIsInQwZCIsInQxZCIsInB0MCIsInB0MSIsInB4IiwicHkiLCJfbWF0bWF0aCIsIl9saW5hbGciLCJpc29fbm9ybWFsaXplX3BvaW50cyIsImJfYnVmZiIsImJfbXQiLCJtdWx0aXBseV9BdEEiLCJtdWx0aXBseV9BdEIiLCJsdV9zb2x2ZSIsImludmVydF8zeDMiLCJtdWx0aXBseV8zeDMiLCJtTHRMIiwiRXZlYyIsIkx0TCIsImV2ZCIsIlkiLCJzbXgiLCJzbXkiLCJjbXgiLCJjbXkiLCJzTXgiLCJzTXkiLCJjTXgiLCJjTXkiLCJlaWdlblZWIiwid3ciLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHJvYiIsIl9lcHMiLCJudW0iLCJsb2ciLCJkZW5vbSIsInBvdyIsIkFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsIkZsb2F0NjRBcnJheSIsIl9pbWdwcm9jIiwic2NoYXJyX2Rlcml2Iiwic2NoYXJyX2Rlcml2YXRpdmVzIiwicHJldl9weXIiLCJjdXJyX3B5ciIsInByZXZfeHkiLCJjdXJyX3h5Iiwid2luX3NpemUiLCJzdGF0dXMiLCJtaW5fZWlnZW5fdGhyZXNob2xkIiwiaGFsZl93aW4iLCJ3aW5fYXJlYSIsIndpbl9hcmVhMiIsInByZXZfaW1ncyIsIm5leHRfaW1ncyIsImltZ19wcmV2IiwiaW1nX25leHQiLCJsdyIsImxoIiwiaXdpbl9ub2RlIiwiZGVyaXZfaXdpbl9ub2RlIiwiZGVyaXZfbGV2X25vZGUiLCJkZXJpdl9tIiwiaXdpbl9idWYiLCJkZXJpdl9pd2luIiwiZGVyaXZfbGV2IiwiZHNyYyIsImlwdHIiLCJkaXB0ciIsImpwdHIiLCJsZXZfc2MiLCJwcmV2X3giLCJwcmV2X3kiLCJuZXh0X3giLCJuZXh0X3kiLCJwcmV2X2RlbHRhX3giLCJwcmV2X2RlbHRhX3kiLCJkZWx0YV94IiwiZGVsdGFfeSIsImlwcmV2X3giLCJpcHJldl95IiwiaW5leHRfeCIsImluZXh0X3kiLCJwdGlkIiwiYnJkX3RsIiwiYnJkX3IiLCJicmRfYiIsImIxIiwiYjIiLCJXX0JJVFMxNCIsIldfQklUUzQiLCJXX0JJVFMxbTUiLCJXX0JJVFMxbTUxIiwiV19CSVRTMTRfIiwiV19CSVRTNDEiLCJGTFRfU0NBTEUiLCJpdzAwIiwiaXcwMSIsIml3MTAiLCJpdzExIiwiaXZhbCIsIml4dmFsIiwiaXl2YWwiLCJEIiwibWluX2VpZyIsIkZMVF9FUFNJTE9OIiwibWF4X2xldmVsIiwibGV2ZWxzIiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImNvcm5lcnMiLCJkZXNjcmlwdG9ycyIsIkRFU0NSX1NJWkUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJpbWdwcmMiLCJ3YXJwX2FmZmluZSIsInB5cmRvd24iLCJzdGFydF93Iiwic3RhcnRfaCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiYm9yZGVyIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsInJvd3giLCJpcCIsImltIiwiYWJzX3Njb3JlIiwibnVtYmVyX29mX3BvaW50cyIsInB0IiwiZXgiLCJleSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwibmVpZ2hib3Job29kIiwiSSIsIlNjb3JlcyIsIkltIiwiSXAiLCJkaXJzX25iIiwiQjAiLCJCMSIsIkIyIiwic3RhdGUiLCJjb21wdXRlX2xhcGxhY2lhbiIsImhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIiwibGFwbGFjaWFuX3RocmVzaG9sZCIsIm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQiLCJzcmRfZCIsIkR4eCIsIkR5eSIsIkR4eSIsIkR5eCIsImxhcF9idWYiLCJsYXBsYWNpYW4iLCJsdiIsIm1pbl9laWdlbl92YWx1ZSIsImxhcF90aHJlc2giLCJlaWdlbl90aHJlc2giLCJ5cm93IiwidHIiLCJJeHgiLCJJeXkiLCJJeHkiLCJzcXJ0X2RlbHRhIl0sInNvdXJjZVJvb3QiOiIifQ==