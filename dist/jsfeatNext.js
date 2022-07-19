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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDhEQUFjO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJrQztBQUM2QjtBQUNoRDtBQUNmLGVBQWUsc0RBQU87QUFDdEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLHFFQUFxQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaN2hCLFVBQVUsRUFBVkEsc0RBQVVBO0FBREUsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jYWNoZS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9kYXRhX3R5cGUvZGF0YV90eXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9jb252b2wuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL2ltZ3Byb2MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL3Jlc2FtcGxlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvanNmZWF0TmV4dC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2tleXBvaW50X3Qva2V5cG9pbnRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGctYmFzZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGcuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRoL21hdGguanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRtYXRoL21hdG1hdGguanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRyaXhfdC9tYXRyaXhfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3B0aWNhbF9mbG93X2xrL29wdGljYWxfZmxvd19say5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9iaXRfcGF0dGVybl8zMS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9vcmIuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3B5cmFtaWRfdC9weXJhbWlkX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZTA2L3lhcGUwNl91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5LCBkYXRhX3NpemUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90eXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL3Jlc2FtcGxlLmpzJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vY29udm9sLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCBtYXRoIGZyb20gJy4uL21hdGgvbWF0aC5qcyc7XG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnO1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGltZ3Byb2Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cbiAgICBncmF5c2NhbGUoc3JjLCB3LCBoLCBkc3QsIGNvZGUpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBkZWZhdWx0IGltYWdlIGRhdGEgcmVwcmVzZW50YXRpb24gaW4gYnJvd3NlclxuICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT09IFwidW5kZWZpbmVkXCIpIHsgY29kZSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZOyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIGkgPSAwLCBqID0gMCwgaXIgPSAwLCBqciA9IDA7XG4gICAgICAgIHZhciBjb2VmZl9yID0gNDg5OSwgY29lZmZfZyA9IDk2MTcsIGNvZWZmX2IgPSAxODY4LCBjbiA9IDQ7XG5cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1JBMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjb2VmZl9yID0gMTg2ODtcbiAgICAgICAgICAgIGNvZWZmX2IgPSA0ODk5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVkgfHwgY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUjJHUkFZKSB7XG4gICAgICAgICAgICBjbiA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNuMiA9IGNuIDw8IDEsIGNuMyA9IChjbiAqIDMpIHwgMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDEpO1xuICAgICAgICB2YXIgZHN0X3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSwgaiArPSB3LCBpICs9IHcgKiBjbikge1xuICAgICAgICAgICAgZm9yICh4ID0gMCwgaXIgPSBpLCBqciA9IGo7IHggPD0gdyAtIDQ7IHggKz0gNCwgaXIgKz0gY24gPDwgMiwganIgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAxXSA9IChzcmNbaXIgKyBjbl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24gKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDJdID0gKHNyY1tpciArIGNuMl0gKiBjb2VmZl9yICsgc3JjW2lyICsgY24yICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24yICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgM10gPSAoc3JjW2lyICsgY24zXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjMgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjMgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK2pyLCBpciArPSBjbikge1xuICAgICAgICAgICAgICAgIGRzdF91OFtqcl0gPSAoc3JjW2lyXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkZXJpdmVkIGZyb20gQ0NWIGxpYnJhcnlcbiAgICByZXNhbXBsZShzcmMsIGRzdCwgbncsIG5oKSB7XG4gICAgICAgIHZhciBoID0gc3JjLnJvd3MsIHcgPSBzcmMuY29scztcbiAgICAgICAgaWYgKGggPiBuaCAmJiB3ID4gbncpIHtcbiAgICAgICAgICAgIGRzdC5yZXNpemUobncsIG5oLCBzcmMuY2hhbm5lbCk7XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgZmFzdCBhbHRlcm5hdGl2ZSAoZml4IHBvaW50IHNjYWxlLCAweDEwMCB0byBhdm9pZCBvdmVyZmxvdylcbiAgICAgICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBkc3QudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBoICogdyAvIChuaCAqIG53KSA8IDB4MTAwKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlX3U4KHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGUoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYm94X2JsdXJfZ3JheShzcmMsIGRzdCwgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfVxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIGgyID0gaCA8PCAxLCB3MiA9IHcgPDwgMTtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMCwgeSA9IDAsIGVuZCA9IDA7XG4gICAgICAgIHZhciB3aW5kb3dTaXplID0gKChyYWRpdXMgPDwgMSkgKyAxKSB8IDA7XG4gICAgICAgIHZhciByYWRpdXNQbHVzT25lID0gKHJhZGl1cyArIDEpIHwgMCwgcmFkaXVzUGx1czIgPSAocmFkaXVzUGx1c09uZSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHNjYWxlID0gb3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRSA/IDEgOiAoMS4wIC8gKHdpbmRvd1NpemUgKiB3aW5kb3dTaXplKSk7XG5cbiAgICAgICAgdmFyIHRtcF9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsIGRzdEluZGV4ID0gMCwgc3JjSW5kZXggPSAwLCBuZXh0UGl4ZWxJbmRleCA9IDAsIHByZXZpb3VzUGl4ZWxJbmRleCA9IDA7XG4gICAgICAgIHZhciBkYXRhX2kzMiA9IHRtcF9idWZmLmkzMjsgLy8gdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICB2YXIgZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgaG9sZCA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgLy8gZmlyc3QgcGFzc1xuICAgICAgICAvLyBubyBuZWVkIHRvIHNjYWxlIFxuICAgICAgICAvL2RhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGg7ICsreSkge1xuICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfdThbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gKHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZSkgfCAwO1xuICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IGgyKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4ICsgaF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4XSAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcmNJbmRleCArPSB3O1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNlY29uZCBwYXNzXG4gICAgICAgIHNyY0luZGV4ID0gMDtcbiAgICAgICAgLy9kYXRhX2kzMiA9IHRtcDsgLy8gdGhpcyBpcyBhIHRyYW5zcG9zZVxuICAgICAgICBkYXRhX3U4ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgLy8gZG9udCBzY2FsZSByZXN1bHRcbiAgICAgICAgaWYgKHNjYWxlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXggKyB3XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcmNJbmRleCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHRtcF9idWZmKTtcbiAgICB9XG5cbiAgICBnYXVzc2lhbl9ibHVyKHNyYywgZHN0LCBrZXJuZWxfc2l6ZSwgc2lnbWEpIHtcbiAgICAgICAgdmFyIGpzZmVhdG1hdGggPSBuZXcgbWF0aCgpO1xuICAgICAgICBpZiAodHlwZW9mIHNpZ21hID09PSBcInVuZGVmaW5lZFwiKSB7IHNpZ21hID0gMC4wOyB9XG4gICAgICAgIGlmICh0eXBlb2Yga2VybmVsX3NpemUgPT09IFwidW5kZWZpbmVkXCIpIHsga2VybmVsX3NpemUgPSAwOyB9XG4gICAgICAgIGtlcm5lbF9zaXplID0ga2VybmVsX3NpemUgPT0gMCA/IChNYXRoLm1heCgxLCAoNC4wICogc2lnbWEgKyAxLjAgLSAxZS04KSkgKiAyICsgMSkgfCAwIDoga2VybmVsX3NpemU7XG4gICAgICAgIHZhciBoYWxmX2tlcm5lbCA9IGtlcm5lbF9zaXplID4+IDE7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRhdGFfdHlwZSA9IHNyYy50eXBlLCBpc191OCA9IGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIGJ1ZiwgZmlsdGVyLCBidWZfc3ogPSAoa2VybmVsX3NpemUgKyBNYXRoLm1heChoLCB3KSkgfCAwO1xuXG4gICAgICAgIHZhciBidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihidWZfc3ogPDwgMik7XG4gICAgICAgIHZhciBmaWx0X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoa2VybmVsX3NpemUgPDwgMik7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuaTMyO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAganNmZWF0bWF0aC5nZXRfZ2F1c3NpYW5fa2VybmVsKGtlcm5lbF9zaXplLCBzaWdtYSwgZmlsdGVyLCBkYXRhX3R5cGUpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgX2NvbnZvbF91OChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbnZvbChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGZpbHRfbm9kZSk7XG4gICAgfVxuICAgIGhvdWdoX3RyYW5zZm9ybShpbWcsIHJob19yZXMsIHRoZXRhX3JlcywgdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy5jb2xzO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLnJvd3M7XG4gICAgICAgIHZhciBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgdmFyIG1pbl90aGV0YSA9IDAuMDtcbiAgICAgICAgdmFyIG1heF90aGV0YSA9IE1hdGguUEk7XG5cbiAgICAgICAgdmFyIG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIHZhciBudW1yaG8gPSBNYXRoLnJvdW5kKCgod2lkdGggKyBoZWlnaHQpICogMiArIDEpIC8gcmhvX3Jlcyk7XG4gICAgICAgIHZhciBpcmhvID0gMS4wIC8gcmhvX3JlcztcblxuICAgICAgICB2YXIgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIHZhciB0YWJTaW4gPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcbiAgICAgICAgdmFyIHRhYkNvcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuXG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIGFuZyA9IG1pbl90aGV0YTtcbiAgICAgICAgZm9yICg7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICB0YWJTaW5bbl0gPSBNYXRoLnNpbihhbmcpICogaXJobztcbiAgICAgICAgICAgIHRhYkNvc1tuXSA9IE1hdGguY29zKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgYW5nICs9IHRoZXRhX3Jlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMS4gZmlsbCBhY2N1bXVsYXRvclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VbaSAqIHN0ZXAgKyBqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cociwgKG4rMSkgKiAobnVtcmhvKzIpICsgcisxLCB0YWJDb3Nbbl0sIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKGogKiB0YWJDb3Nbbl0gKyBpICogdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gKG51bXJobyAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtWyhuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDIuIGZpbmQgbG9jYWwgbWF4aW11bXNcbiAgICAgICAgLy9UT0RPOiBDb25zaWRlciBtYWtpbmcgYSB2ZWN0b3IgY2xhc3MgdGhhdCB1c2VzIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgX3NvcnRfYnVmID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChhY2N1bVtiYXNlXSA+IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSAxXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gbnVtcmhvIC0gMl0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIG51bXJobyArIDJdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zb3J0X2J1Zi5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDMuIHNvcnQgdGhlIGRldGVjdGVkIGxpbmVzIGJ5IGFjY3VtdWxhdG9yIHZhbHVlXG4gICAgICAgIF9zb3J0X2J1Zi5zb3J0KGZ1bmN0aW9uIChsMSwgbDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YWdlIDQuIHN0b3JlIHRoZSBmaXJzdCBtaW4odG90YWwsbGluZXNNYXgpIGxpbmVzIHRvIHRoZSBvdXRwdXQgYnVmZmVyXG4gICAgICAgIHZhciBsaW5lc01heCA9IE1hdGgubWluKG51bWFuZ2xlICogbnVtcmhvLCBfc29ydF9idWYubGVuZ3RoKTtcbiAgICAgICAgdmFyIHNjYWxlID0gMS4wIC8gKG51bXJobyArIDIpO1xuICAgICAgICB2YXIgbGluZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc01heDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX3NvcnRfYnVmW2ldO1xuICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKGlkeCAqIHNjYWxlKSAtIDE7XG4gICAgICAgICAgICB2YXIgciA9IGlkeCAtIChuICsgMSkgKiAobnVtcmhvICsgMikgLSAxO1xuICAgICAgICAgICAgdmFyIGxyaG8gPSAociAtIChudW1yaG8gLSAxKSAqIDAuNSkgKiByaG9fcmVzO1xuICAgICAgICAgICAgdmFyIGxhbmdsZSA9IG4gKiB0aGV0YV9yZXM7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtscmhvLCBsYW5nbGVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIHB5cmRvd24oc3JjLCBkc3QsIHN4LCBzeSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHsgc3ggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3kgPT09IFwidW5kZWZpbmVkXCIpIHsgc3kgPSAwOyB9XG5cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgdzIgPSB3ID4+IDEsIGgyID0gaCA+PiAxO1xuICAgICAgICB2YXIgX3cyID0gdzIgLSAoc3ggPDwgMSksIF9oMiA9IGgyIC0gKHN5IDw8IDEpO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBzcHRyID0gc3ggKyBzeSAqIHcsIHNsaW5lID0gMCwgZHB0ciA9IDAsIGRsaW5lID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcyLCBoMiwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBfaDI7ICsreSkge1xuICAgICAgICAgICAgc2xpbmUgPSBzcHRyO1xuICAgICAgICAgICAgZGxpbmUgPSBkcHRyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSBfdzIgLSAyOyB4ICs9IDIsIGRsaW5lICs9IDIsIHNsaW5lICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmUgKyAxXSA9IChzcmNfZFtzbGluZSArIDJdICsgc3JjX2Rbc2xpbmUgKyAzXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgdyArIDJdICsgc3JjX2Rbc2xpbmUgKyB3ICsgM10gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCBfdzI7ICsreCwgKytkbGluZSwgc2xpbmUgKz0gMikge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwdHIgKz0gdyA8PCAxO1xuICAgICAgICAgICAgZHB0ciArPSB3MjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYywgZHN0KSB7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIGRzdGVwID0gdyA8PCAxLCB4ID0gMCwgeSA9IDAsIHgxID0gMCwgYSwgYiwgYywgZCwgZSwgZjtcbiAgICAgICAgdmFyIHNyb3cwID0gMCwgc3JvdzEgPSAwLCBzcm93MiA9IDAsIGRyb3cgPSAwO1xuICAgICAgICB2YXIgdHJvdzAsIHRyb3cxO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMik7IC8vIDIgY2hhbm5lbCBvdXRwdXQgZ3gsIGd5XG5cbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCBneGd5ID0gZHN0LmRhdGE7XG5cbiAgICAgICAgdmFyIGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHggKyAxXSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICogMyArIChpbWdbc3JvdzEgKyB4XSkgKiAxMCk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdOyB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTsgdHJvdzFbeF0gPSB0cm93MVt3XTtcbiAgICAgICAgICAgIC8vIGRvIGhvcml6b250YWwgY29udm9sdXRpb24sIGludGVybGVhdmUgdGhlIHJlc3VsdHMgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gdyAtIDQ7IHggKz0gNCkge1xuICAgICAgICAgICAgICAgIGEgPSB0cm93MVt4ICsgMl0sIGIgPSB0cm93MVt4ICsgMV0sIGMgPSB0cm93MVt4ICsgM10sIGQgPSB0cm93MVt4ICsgNF0sXG4gICAgICAgICAgICAgICAgICAgIGUgPSB0cm93MFt4ICsgMl0sIGYgPSB0cm93MFt4ICsgM107XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGUgLSB0cm93MFt4XSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChhICsgdHJvdzFbeF0pICogMyArIGIgKiAxMCk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoYyArIGIpICogMyArIGEgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA0XSAtIGUpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKChkICsgYSkgKiAzICsgYyAqIDEwKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgNV0gLSBmKSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCgodHJvdzFbeCArIDVdICsgYykgKiAzICsgZCAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSkgKiAzICsgdHJvdzFbeCArIDFdICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZSBncmFkaWVudCB1c2luZyBTb2JlbCBrZXJuZWwgWzEgMiAxXSAqIFstMSAwIDFdXlRcbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc29iZWxfZGVyaXZhdGl2ZXMoc3JjLCBkc3QpIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZHN0ZXAgPSB3IDw8IDEsIHggPSAwLCB5ID0gMCwgeDEgPSAwLCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgICAgICB2YXIgc3JvdzAgPSAwLCBzcm93MSA9IDAsIHNyb3cyID0gMCwgZHJvdyA9IDA7XG4gICAgICAgIHZhciB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICB2YXIgYnVmMF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG4gICAgICAgIHZhciBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4XSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHggKyAxXSwgYiA9IGltZ1tzcm93MiArIHggKyAxXTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gKChhICsgYikgKyAoaW1nW3Nyb3cxICsgeCArIDFdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsreDEpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4XSAqIDIpKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07IHRyb3cwW3hdID0gdHJvdzBbd107XG4gICAgICAgICAgICB0cm93MVswXSA9IHRyb3cxWzFdOyB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgYSA9IHRyb3cxW3ggKyAyXSwgYiA9IHRyb3cxW3ggKyAxXSwgYyA9IHRyb3cxW3ggKyAzXSwgZCA9IHRyb3cxW3ggKyA0XSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IHRyb3cwW3ggKyAyXSwgZiA9IHRyb3cwW3ggKyAzXTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoYSArIHRyb3cxW3hdICsgYiAqIDIpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChmIC0gdHJvdzBbeCArIDFdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoYyArIGIgKyBhICogMik7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDRdIC0gZSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGQgKyBhICsgYyAqIDIpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNV0gLSBmKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzFbeCArIDVdICsgYyArIGQgKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyAyXSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzFbeCArIDJdICsgdHJvdzFbeF0gKyB0cm93MVt4ICsgMV0gKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuICAgIGNhbm55KHNyYywgZHN0LCBsb3dfdGhyZXNoLCBoaWdoX3RocmVzaCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyY19kID0gc3JjLmRhdGE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGdyYWQgPSAwLCB3MiA9IHcgPDwgMSwgX2dyYWQgPSAwLCBzdXBwcmVzcyA9IDAsIGYgPSAwLCB4ID0gMCwgeSA9IDAsIHMgPSAwO1xuICAgICAgICB2YXIgdGcyMnggPSAwLCB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICB2YXIgZHhkeV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdzIpIDw8IDIpO1xuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDMgKiAodyArIDIpKSA8PCAyKTtcbiAgICAgICAgdmFyIG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIHZhciBzdGFja19ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoICogdykgPDwgMik7XG5cblxuICAgICAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICB2YXIgbWFwID0gbWFwX25vZGUuaTMyO1xuICAgICAgICB2YXIgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgdmFyIGR4ZHkgPSBkeGR5X25vZGUuaTMyO1xuICAgICAgICB2YXIgZHhkeV9tID0gbmV3IG1hdHJpeF90KHcsIGgsIEpTRkVBVF9DT05TVEFOVFMuUzMyQzJfdCwgZHhkeV9ub2RlLmRhdGEpO1xuICAgICAgICB2YXIgcm93MCA9IDEsIHJvdzEgPSAodyArIDIgKyAxKSB8IDAsIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsIG1hcF93ID0gKHcgKyAyKSB8IDAsIG1hcF9pID0gKG1hcF93ICsgMSkgfCAwLCBzdGFja19pID0gMDtcblxuICAgICAgICB0aGlzLnNvYmVsX2Rlcml2YXRpdmVzKHNyYywgZHhkeV9tKTtcblxuICAgICAgICBpZiAobG93X3RocmVzaCA+IGhpZ2hfdGhyZXNoKSB7XG4gICAgICAgICAgICBpID0gbG93X3RocmVzaDtcbiAgICAgICAgICAgIGxvd190aHJlc2ggPSBoaWdoX3RocmVzaDtcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNoID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSAoMyAqICh3ICsgMikpIHwgMDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgoaCArIDIpICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIG1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraiwgZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAvL2J1Zltyb3cxK2pdID0gTWF0aC5hYnMoZHhkeVtncmFkXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrMV0pO1xuICAgICAgICAgICAgeCA9IGR4ZHlbZ3JhZF0sIHkgPSBkeGR5W2dyYWQgKyAxXTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgKyAoKHkgXiAoeSA+PiAzMSkpIC0gKHkgPj4gMzEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaDsgKytpLCBncmFkICs9IHcyKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBoKSB7XG4gICAgICAgICAgICAgICAgaiA9IHJvdzIgKyB3O1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWogPj0gcm93Mikge1xuICAgICAgICAgICAgICAgICAgICBidWZbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0gIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSldKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsoajw8MSkrMV0pO1xuICAgICAgICAgICAgICAgICAgICB4ID0gZHhkeVtncmFkICsgKGogPDwgMSldLCB5ID0gZHhkeVtncmFkICsgKGogPDwgMSkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9IHgqeCArIHkqeTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3JvdzIgKyBqXSA9ICgoeCBeICh4ID4+IDMxKSkgLSAoeCA+PiAzMSkpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgICAgIG1hcF9pIC09IDI7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gbWFwX3c7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSBtYXBbbWFwX2ldID0gMiwgc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIG1hcFttYXBfaV0gPSAyLCBzdGFja1tzdGFja19pKytdID0gbWFwX2k7XG4gICAgICAgICAgICBtYXBfaSArPSAxO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgbWFwW21hcF9pXSA9IDIsIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcF9pID0gbWFwX3cgKyAxO1xuICAgICAgICByb3cwID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGg7ICsraSwgbWFwX2kgKz0gbWFwX3cpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtyb3cwKytdID0gKG1hcFttYXBfaSArIGpdID09IDIpICogMHhmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyc1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZHhkeV9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1hcF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHN0YWNrX25vZGUpO1xuICAgIH1cbiAgICAvLyB0cmFuc2Zvcm0gaXMgM3gzIG9yIDJ4MyBtYXRyaXhfdCBvbmx5IGZpcnN0IDYgdmFsdWVzIHJlZmVyZW5jZWRcbiAgICB3YXJwX2FmZmluZShzcmMsIGRzdCwgdHJhbnNmb3JtLCBmaWxsX3ZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBmaWxsX3ZhbHVlID0gMDsgfVxuICAgICAgICB2YXIgc3JjX3dpZHRoID0gc3JjLmNvbHMsIHNyY19oZWlnaHQgPSBzcmMucm93cywgZHN0X3dpZHRoID0gZHN0LmNvbHMsIGRzdF9oZWlnaHQgPSBkc3Qucm93cztcbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIG9mZiA9IDAsIGl4cyA9IDAsIGl5cyA9IDAsIHhzID0gMC4wLCB5cyA9IDAuMCwgYSA9IDAuMCwgYiA9IDAuMCwgcDAgPSAwLjAsIHAxID0gMC4wO1xuICAgICAgICB2YXIgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgdmFyIG0wMCA9IHRkWzBdLCBtMDEgPSB0ZFsxXSwgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSwgbTExID0gdGRbNF0sIG0xMiA9IHRkWzVdO1xuXG4gICAgICAgIGZvciAodmFyIGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4cyA9IG0wMSAqIHkgKyBtMDI7XG4gICAgICAgICAgICB5cyA9IG0xMSAqIHkgKyBtMTI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMgKz0gbTAwLCB5cyArPSBtMTApIHtcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDA7IGl5cyA9IHlzIHwgMDtcblxuICAgICAgICAgICAgICAgIGlmIChpeHMgPj0gMCAmJiBpeXMgPj0gMCAmJiBpeHMgPCAoc3JjX3dpZHRoIC0gMSkgJiYgaXlzIDwgKHNyY19oZWlnaHQgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0geHMgLSBpeHM7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB5cyAtIGl5cztcbiAgICAgICAgICAgICAgICAgICAgb2ZmID0gc3JjX3dpZHRoICogaXlzICsgaXhzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAwID0gc3JjX2Rbb2ZmXSArIGEgKiAoc3JjX2Rbb2ZmICsgMV0gLSBzcmNfZFtvZmZdKTtcbiAgICAgICAgICAgICAgICAgICAgcDEgPSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdICsgYSAqIChzcmNfZFtvZmYgKyBzcmNfd2lkdGggKyAxXSAtIHNyY19kW29mZiArIHNyY193aWR0aF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2RwdHJdID0gcDAgKyBiICogKHAxIC0gcDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGRzdF9kW2RwdHJdID0gZmlsbF92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL2ltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4uL2pzZmVhdE5leHQuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGVfdTggKHNyYywgZHN0LCBjYWNoZSwgbncsIG5oKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgaW52X3NjYWxlXzI1NiA9IChzY2FsZV94ICogc2NhbGVfeSAqIDB4MTAwMDApIHwgMDtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLCBiZXRhID0gMCwgYmV0YTEgPSAwO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5pMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuaTMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSBmc3gxKSAqIDB4MTAwKSB8IDA7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gMjU2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChmc3gyIC0gc3gyKSAqIDI1NikgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDNdO1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogMyArIDFdO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IChNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCkgKiAyNTYpIHwgMDtcbiAgICAgICAgICAgIGJldGExID0gMjU2IC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKGJldGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIDI1NikgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTEpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF0gKiAyNTY7XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGUgKHNyYywgZHN0LCBjYWNoZSwgbncsIG5oKSB7XG4gICAgdmFyIHhvZnNfY291bnQgPSAwO1xuICAgIHZhciBjaCA9IHNyYy5jaGFubmVsLCB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICB2YXIgc2NhbGVfeCA9IHcgLyBudywgc2NhbGVfeSA9IGggLyBuaDtcbiAgICB2YXIgc2NhbGUgPSAxLjAgLyAoc2NhbGVfeCAqIHNjYWxlX3kpO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAuMCwgYmV0YSA9IDAuMCwgYmV0YTEgPSAwLjA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5mMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5mMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gxIC0gZnN4MSkgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChmc3gyIC0gc3gyKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDNdIHwgMDtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDMgKyAxXSB8IDA7XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApO1xuICAgICAgICAgICAgYmV0YTEgPSAxLjAgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYmV0YSkgPCAxZS0zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTE7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF07XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufSIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcydcbmltcG9ydCBkYXRhX3R5cGUgZnJvbSAnLi9kYXRhX3R5cGUvZGF0YV90eXBlLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4vbm9kZV91dGlscy9kYXRhX3QuanMnXG5pbXBvcnQga2V5cG9pbnRfdCBmcm9tICcuL2tleXBvaW50X3Qva2V5cG9pbnRfdC5qcydcbmltcG9ydCBpbWdwcm9jIGZyb20gJy4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuaW1wb3J0IG1hdGggZnJvbSAnLi9tYXRoL21hdGguanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IHB5cmFtaWRfdCBmcm9tICcuL3B5cmFtaWRfdC9weXJhbWlkX3QuanMnXG5pbXBvcnQgbGluYWxnIGZyb20gJy4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCBvcmIgZnJvbSAnLi9vcmIvb3JiLmpzJ1xuaW1wb3J0IHlhcGUgZnJvbSAnLi95YXBlL3lhcGUuanMnXG5pbXBvcnQgeWFwZTA2IGZyb20gJy4veWFwZTA2L3lhcGUwNi5qcydcbmltcG9ydCBtb3Rpb25fZXN0aW1hdG9yIGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fZXN0aW1hdG9yLmpzJ1xuaW1wb3J0IHtob21vZ3JhcGh5MmR9IGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9tb3Rpb25fbW9kZWwuanMnXG5pbXBvcnQgcmFuc2FjX3BhcmFtc190IGZyb20gJy4vbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QuanMnXG5pbXBvcnQgb3B0aWNhbF9mbG93X2xrIGZyb20gJy4vb3B0aWNhbF9mbG93X2xrL29wdGljYWxfZmxvd19say5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5kYXRhX3QgPSBkYXRhX3RcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IHB5cmFtaWRfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBpbWdwcm9jO1xuXG5qc2ZlYXROZXh0Lm1hdGggPSBtYXRoO1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGxpbmFsZztcblxuanNmZWF0TmV4dC5vcmIgPSBvcmI7XG5cbmpzZmVhdE5leHQueWFwZSA9IHlhcGU7XG5cbmpzZmVhdE5leHQueWFwZTA2ID0geWFwZTA2O1xuXG5qc2ZlYXROZXh0Lm1vdGlvbl9lc3RpbWF0b3IgPSBtb3Rpb25fZXN0aW1hdG9yO1xuXG5qc2ZlYXROZXh0LnJhbnNhY19wYXJhbXNfdCA9IHJhbnNhY19wYXJhbXNfdDtcblxuanNmZWF0TmV4dC5ob21vZ3JhcGh5MmQgPSBob21vZ3JhcGh5MmQ7XG5cbmpzZmVhdE5leHQub3B0aWNhbF9mbG93X2xrID0gb3B0aWNhbF9mbG93X2xrOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGtleXBvaW50X3Qge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHNjb3JlLCBsZXZlbCwgYW5nbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInVuZGVmaW5lZFwiKSB7IHggPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJ1bmRlZmluZWRcIikgeyB5ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHNjb3JlID09PSBcInVuZGVmaW5lZFwiKSB7IHNjb3JlID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IGxldmVsID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGFuZ2xlID09PSBcInVuZGVmaW5lZFwiKSB7IGFuZ2xlID0gLTEuMDsgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBzd2FwKEEsIGkwLCBpMSwgdCkge1xuICAgIHQgPSBBW2kwXTtcbiAgICBBW2kwXSA9IEFbaTFdO1xuICAgIEFbaTFdID0gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90KGEsIGIpIHtcbiAgICBhID0gTWF0aC5hYnMoYSk7XG4gICAgYiA9IE1hdGguYWJzKGIpO1xuICAgIGlmKCBhID4gYiApIHtcbiAgICAgICAgYiAvPSBhO1xuICAgICAgICByZXR1cm4gYSpNYXRoLnNxcnQoMS4wICsgYipiKTtcbiAgICB9XG4gICAgaWYoIGIgPiAwICkge1xuICAgICAgICBhIC89IGI7XG4gICAgICAgIHJldHVybiBiKk1hdGguc3FydCgxLjAgKyBhKmEpO1xuICAgIH1cbiAgICByZXR1cm4gMC4wO1xufSIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4uL2pzZmVhdE5leHQuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcyc7XG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gJy4vbGluYWxnLWJhc2UuanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuLi9tYXRtYXRoL21hdG1hdGguanMnXG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpbmFsZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChBLCBhc3RlcCwgVywgViwgdnN0ZXAsIG4pIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIG0gPSAwLCBsID0gMCwgaWR4ID0gMCwgX2luID0gMCwgX2luMiA9IDA7XG4gICAgICAgIHZhciBpdGVycyA9IDAsIG1heF9pdGVyID0gbiAqIG4gKiAzMDtcbiAgICAgICAgdmFyIG12ID0gMC4wLCB2YWwgPSAwLjAsIHAgPSAwLjAsIHkgPSAwLjAsIHQgPSAwLjAsIHMgPSAwLjAsIGMgPSAwLjAsIGEwID0gMC4wLCBiMCA9IDAuMDtcblxuICAgICAgICB2YXIgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRDX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZFIgPSBpbmRSX2J1ZmYuaTMyO1xuICAgICAgICB2YXIgaW5kQyA9IGluZENfYnVmZi5pMzI7XG5cbiAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgayA9IGkgKiB2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbayArIGpdID0gMC4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2sgKyBpXSA9IDEuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIFdba10gPSBBWyhhc3RlcCArIDEpICoga107XG4gICAgICAgICAgICBpZiAoayA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gayArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBtXSksIGkgPSBrICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogayArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRSW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsga10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG4gPiAxKSBmb3IgKDsgaXRlcnMgPCBtYXhfaXRlcjsgaXRlcnMrKykge1xuICAgICAgICAgICAgLy8gZmluZCBpbmRleCAoayxsKSBvZiBwaXZvdCBwXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGluZFJbaV1dKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGwgPSBpbmRSW2tdO1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpbmRDW2ldICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpbmRDW2ldLCBsID0gaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA9IEFbYXN0ZXAgKiBrICsgbF07XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMpIGJyZWFrO1xuXG4gICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSAqIDAuNTtcbiAgICAgICAgICAgIHQgPSBNYXRoLmFicyh5KSArIGh5cG90KHAsIHkpO1xuICAgICAgICAgICAgcyA9IGh5cG90KHAsIHQpO1xuICAgICAgICAgICAgYyA9IHQgLyBzO1xuICAgICAgICAgICAgcyA9IHAgLyBzOyB0ID0gKHAgLyB0KSAqIHA7XG4gICAgICAgICAgICBpZiAoeSA8IDApXG4gICAgICAgICAgICAgICAgcyA9IC1zLCB0ID0gLXQ7XG4gICAgICAgICAgICBBW2FzdGVwICogayArIGxdID0gMDtcblxuICAgICAgICAgICAgV1trXSAtPSB0O1xuICAgICAgICAgICAgV1tsXSArPSB0O1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgcm93cyBhbmQgY29sdW1ucyBrIGFuZCBsXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogaSArIGspO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gKGsgKyAxKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSBsICsgMTtcbiAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGsgKyBpKTtcbiAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBsICsgaSk7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcm90YXRlIGVpZ2VudmVjdG9yc1xuICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICBfaW4gPSB2c3RlcCAqIGs7XG4gICAgICAgICAgICAgICAgX2luMiA9IHZzdGVwICogbDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGEwID0gVltfaW5dO1xuICAgICAgICAgICAgICAgICAgICBiMCA9IFZbX2luMl07XG4gICAgICAgICAgICAgICAgICAgIFZbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICAgICAgVltfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZHggPSBqID09IDAgPyBrIDogbDtcbiAgICAgICAgICAgICAgICBpZiAoaWR4IDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gaWR4ICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgbV0pLCBpID0gaWR4ICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kUltpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGlkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IG4gLSAxOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1ttXSA8IFdbaV0pXG4gICAgICAgICAgICAgICAgICAgIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgIT0gbSkge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgbSwgaywgbXYpO1xuICAgICAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAgKiBtICsgaSwgdnN0ZXAgKiBrICsgaSwgbXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kUl9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZENfYnVmZik7XG4gICAgfVxuXG4gICAgSmFjb2JpU1ZESW1wbChBdCwgYXN0ZXAsIF9XLCBWdCwgdnN0ZXAsIG0sIG4sIG4xKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAyLjA7XG4gICAgICAgIHZhciBtaW52YWwgPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBpdGVyID0gMCwgbWF4X2l0ZXIgPSBNYXRoLm1heChtLCAzMCk7XG4gICAgICAgIHZhciBBaSA9IDAsIEFqID0gMCwgVmkgPSAwLCBWaiA9IDAsIGNoYW5nZWQgPSAwO1xuICAgICAgICB2YXIgYyA9IDAuMCwgcyA9IDAuMCwgdCA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMC4wLCB0MSA9IDAuMCwgc2QgPSAwLjAsIGJldGEgPSAwLjAsIGdhbW1hID0gMC4wLCBkZWx0YSA9IDAuMCwgYSA9IDAuMCwgcCA9IDAuMCwgYiA9IDAuMDtcbiAgICAgICAgdmFyIHNlZWQgPSAweDEyMzQ7XG4gICAgICAgIHZhciB2YWwgPSAwLjAsIHZhbDAgPSAwLjAsIGFzdW0gPSAwLjA7XG5cbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgVyA9IFdfYnVmZi5mNjQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcblxuICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbWF4X2l0ZXI7IGl0ZXIrKykge1xuICAgICAgICAgICAgY2hhbmdlZCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQWkgPSAoaSAqIGFzdGVwKSB8IDAsIEFqID0gKGogKiBhc3RlcCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBhID0gV1tpXSwgcCA9IDAsIGIgPSBXW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpXSAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIDFdICogQXRbQWogKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyBrXSAqIEF0W0FqICsga107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcyAqIE1hdGguc3FydChhICogYikpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHAgKj0gMi4wO1xuICAgICAgICAgICAgICAgICAgICBiZXRhID0gYSAtIGIsIGdhbW1hID0gaHlwb3QocCwgYmV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAoZ2FtbWEgLSBiZXRhKSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEgLyBnYW1tYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gKHAgLyAoZ2FtbWEgKiBzICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpIC8gKGdhbW1hICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAgLyAoZ2FtbWEgKiBjICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gMC4wLCBiID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWldICsgcyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpXSArIGMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpXSA9IHQwOyBBdFtBal0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyAxXSArIHMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyAxXSArIGMgKiBBdFtBaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSArIDFdID0gdDA7IEF0W0FqICsgMV0gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsga10gKyBzICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIGtdICsgYyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBBdFtBaSArIGtdID0gdDA7IEF0W0FqICsga10gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwOyBiICs9IHQxICogdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXW2ldID0gYTsgV1tqXSA9IGI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWaSA9IChpICogdnN0ZXApIHwgMCwgVmogPSAoaiAqIHZzdGVwKSB8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmldICsgcyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaV0gKyBjICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmldID0gdDA7IFZ0W1ZqXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIDFdICsgcyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyAxXSArIGMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyAxXSA9IHQwOyBWdFtWaiArIDFdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyBrXSArIHMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIGtdICsgYyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyBrXSA9IHQwOyBWdFtWaiArIGtdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1tqXSA8IFdba10pXG4gICAgICAgICAgICAgICAgICAgIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpICogYXN0ZXAgKyBrLCBqICogYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkgKiB2c3RlcCArIGssIGogKiB2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFWdCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7IGkrKykge1xuXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChzZCA8PSBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBnb3QgYSB6ZXJvIHNpbmd1bGFyIHZhbHVlLCB0aGVuIGluIG9yZGVyIHRvIGdldCB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHNpbmd1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIC8vIHdlIGdlbmVyYXRlIGEgcmFuZG9tIHZlY3RvciwgcHJvamVjdCBpdCB0byB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMsXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgdGhlIHByb2plY3Rpb24gYW5kIG5vcm1hbGl6ZSB0aGUgZGlmZmVyZW5jZS5cbiAgICAgICAgICAgICAgICB2YWwwID0gKDEuMCAvIG0pO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlZCA9IChzZWVkICogMjE0MDEzICsgMjUzMTAxMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICgoKHNlZWQgPj4gMTYpICYgMHg3ZmZmKSAmIDI1NikgIT0gMCA/IHZhbDAgOiAtdmFsMDtcbiAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCAyOyBpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kgKiBhc3RlcCArIGtdICogQXRbaiAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoQXRbaSAqIGFzdGVwICsga10gLSBzZCAqIEF0W2ogKiBhc3RlcCArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wIC8gYXN1bSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gYXN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZCA9IE1hdGguc3FydChzZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMgPSAoMS4wIC8gc2QpO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBwID0gMSwgYXN0ZXAgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB0LCBhbHBoYSwgZCwgcztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXN0ZXA7IGkrKykge1xuICAgICAgICAgICAgayA9IGk7XG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbaiAqIGFzdGVwICsgaV0pID4gTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGQUlMRURcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgIT0gaSkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAoYWQsIGkgKiBhc3RlcCArIGosIGsgKiBhc3RlcCArIGosIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3YXAoYmQsIGksIGssIHQpO1xuICAgICAgICAgICAgICAgIHAgPSAtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IC0xLjAgLyBhZFtpICogYXN0ZXAgKyBpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhZFtqICogYXN0ZXAgKyBpXSAqIGQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWRbaiAqIGFzdGVwICsga10gKz0gYWxwaGEgKiBhZFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBiZFtqXSArPSBhbHBoYSAqIGJkW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZFtpICogYXN0ZXAgKyBpXSA9IC1kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gYXN0ZXAgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgcyA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcyAtPSBhZFtpICogYXN0ZXAgKyBrXSAqIGJkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSBzICogYWRbaSAqIGFzdGVwICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTsgLy8gT0tcbiAgICB9XG5cbiAgICBjaG9sZXNreV9zb2x2ZShBLCBCKSB7XG4gICAgICAgIHZhciBjb2wgPSAwLCByb3cgPSAwLCBjb2wyID0gMCwgY3MgPSAwLCBycyA9IDAsIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIHNpemUgPSBBLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciB2YWwsIGludl9kaWFnO1xuXG4gICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgIGludl9kaWFnID0gMS4wO1xuICAgICAgICAgICAgY3MgPSAoY29sICogc2l6ZSk7XG4gICAgICAgICAgICBycyA9IGNzO1xuICAgICAgICAgICAgZm9yIChyb3cgPSBjb2w7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBmb3IgdGhlIHBhcnRzIG9mIGNob2xlc2t5IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgICAgICAgICB2YWwgPSBhZFsocnMgKyBjb2wpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbDIgPSAwOyBjb2wyIDwgY29sOyBjb2wyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjb2wyICogc2l6ZSArIGNvbCldICogYWRbKHJzICsgY29sMildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ID09IGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBkaWFnb25hbCBlbGVtZW50IHNvIGRvbid0IGRpdmlkZVxuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZfZGlhZyA9IDEuMCAvIHZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZSB0aGUgdmFsdWUgd2l0aG91dCBkaXZpc2lvbiBpbiB0aGUgdXBwZXIgaGFsZlxuICAgICAgICAgICAgICAgICAgICBhZFsoY3MgKyByb3cpXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2aWRlIG15IHRoZSBkaWFnb25hbCBlbGVtZW50IGZvciBhbGwgb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsICogaW52X2RpYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJzID0gKHJzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCBiYWNrc3ViIHRocm91Z2ggTFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBqKV0gKiBiZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggZGlhZ29uYWxcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBiZFtpXSAvPSBhZFsoY3MgKyBpKV07XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBMIFRyYW5zcG9zZVxuICAgICAgICBpID0gKHNpemUgLSAxKTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGogPSAoaSArIDEpO1xuICAgICAgICAgICAgY3MgPSAoaiAqIHNpemUpO1xuICAgICAgICAgICAgZm9yICg7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaSldICogYmRbal07XG4gICAgICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3ZkX2RlY29tcG9zZShBLCBXLCBVLCBWLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgeyBvcHRpb25zID0gMDsgfTtcbiAgICAgICAgdmFyIGF0ID0gMCwgaSA9IDAsIGogPSAwLCBfbSA9IEEucm93cywgX24gPSBBLmNvbHMsIG0gPSBfbSwgbiA9IF9uO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7IC8vIHdlIG9ubHkgd29yayB3aXRoIHNpbmdsZSBjaGFubmVsIFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobSAqIG0pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChtLCBtLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCBhX210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCB2X210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgYV9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuXG4gICAgfVxuXG4gICAgc3ZkX3NvbHZlKEEsIFgsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgeHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIHZhciB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgYmQgPSBCLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgeHN1bSA9IDAuMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdkW2pdID4gdG9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMCwgcHUgPSAwOyBrIDwgbnJvd3M7IGsrKywgcHUgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB1ZFtwdSArIGpdICogYmRba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHN1bSArPSBzdW0gKiB2ZFtwdiArIGpdIC8gd2Rbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWC5kYXRhW2ldID0geHN1bTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgc3ZkX2ludmVydChBaSwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwLCBwYSA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIC8vdmFyIHVfYnVmZiA9IGNhY2hlMS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlkID0gQWkuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwLCBwdSA9IDA7IGogPCBucm93czsgaisrLCBwYSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wOyBrIDwgbmNvbHM7IGsrKywgcHUrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Rba10gPiB0b2wpIHN1bSArPSB2ZFtwdiArIGtdICogdWRbcHVdIC8gd2Rba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkW3BhXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgZWlnZW5WVihBLCB2ZWN0cywgdmFscykge1xuICAgICAgICB2YXIgbiA9IEEuY29scywgaSA9IG4gKiBuO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KG4sIG4sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaUltcGwoYV9tdC5kYXRhLCBuLCB3X210LmRhdGEsIHZlY3RzID8gdmVjdHMuZGF0YSA6IG51bGwsIG4sIG4pO1xuXG4gICAgICAgIGlmICh2YWxzKSB7XG4gICAgICAgICAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgICAgICAgICB2YWxzLmRhdGFbbl0gPSB3X210LmRhdGFbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgfVxufSIsImltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLnFzb3J0X3N0YWNrID0gbmV3IEludDMyQXJyYXkoNDggKiAyKTtcbiAgICB9XG5cbiAgICBnZXRfZ2F1c3NpYW5fa2VybmVsKHNpemUsIHNpZ21hLCBrZXJuZWwsIGRhdGFfdHlwZSkge1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLjAsIHQgPSAwLjAsIHNpZ21hX3ggPSAwLjAsIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIga2Vybl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHNpemUgPDwgMik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYgKChzaXplICYgMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChzaXplID4+IDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4yNSwgX2tlcm5lbFsxXSA9IDAuNSwgX2tlcm5lbFsyXSA9IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMjUgKyAwLjUgKyAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjA2MjUsIF9rZXJuZWxbMV0gPSAwLjI1LCBfa2VybmVsWzJdID0gMC4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wMzEyNSwgX2tlcm5lbFsxXSA9IDAuMTA5Mzc1LCBfa2VybmVsWzJdID0gMC4yMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wMzEyNSArIDAuMTA5Mzc1ICsgMC4yMTg3NSArIDAuMjgxMjUgKyAwLjIxODc1ICsgMC4xMDkzNzUgKyAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZ21hX3ggPSBzaWdtYSA+IDAgPyBzaWdtYSA6ICgoc2l6ZSAtIDEpICogMC41IC0gMS4wKSAqIDAuMyArIDAuODtcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gLTAuNSAvIChzaWdtYV94ICogc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAgeCA9IGkgLSAoc2l6ZSAtIDEpICogMC41O1xuICAgICAgICAgICAgICAgIHQgPSBNYXRoLmV4cChzY2FsZV8yeCAqIHggKiB4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkge1xuICAgICAgICAgICAgLy8gaW50IGJhc2VkIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMjU2LjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzaWMga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAxLjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gX2tlcm5lbFtpXSAqIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihrZXJuX25vZGUpO1xuICAgIH1cblxuICAgIC8vIG1vZGVsIGlzIDN4MyBtYXRyaXhfdFxuICAgIHBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0obW9kZWwsIHNyY194MCwgc3JjX3kwLCBkc3RfeDAsIGRzdF95MCxcbiAgICAgICAgc3JjX3gxLCBzcmNfeTEsIGRzdF94MSwgZHN0X3kxLFxuICAgICAgICBzcmNfeDIsIHNyY195MiwgZHN0X3gyLCBkc3RfeTIsXG4gICAgICAgIHNyY194Mywgc3JjX3kzLCBkc3RfeDMsIGRzdF95Mykge1xuICAgICAgICB2YXIgdDEgPSBzcmNfeDA7XG4gICAgICAgIHZhciB0MiA9IHNyY194MjtcbiAgICAgICAgdmFyIHQ0ID0gc3JjX3kxO1xuICAgICAgICB2YXIgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHZhciB0NiA9IHNyY195MztcbiAgICAgICAgdmFyIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdmFyIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdmFyIHQ5ID0gc3JjX3kyO1xuICAgICAgICB2YXIgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdmFyIHQxMSA9IHNyY194MTtcbiAgICAgICAgdmFyIHQxNCA9IHNyY195MDtcbiAgICAgICAgdmFyIHQxNSA9IHNyY194MztcbiAgICAgICAgdmFyIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdmFyIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdmFyIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB2YXIgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHZhciB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdmFyIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHZhciB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB2YXIgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHZhciB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB2YXIgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHZhciB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHZhciB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB2YXIgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHZhciB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdmFyIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB2YXIgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHZhciB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHZhciB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhyMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIcjEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMiA9IHQxO1xuICAgICAgICB2YXIgSHIzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNSA9IHQxNDtcbiAgICAgICAgdmFyIEhyNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIHQxID0gZHN0X3gwO1xuICAgICAgICB0MiA9IGRzdF94MjtcbiAgICAgICAgdDQgPSBkc3RfeTE7XG4gICAgICAgIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB0NiA9IGRzdF95MztcbiAgICAgICAgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB0OCA9IHQyICogdDc7XG4gICAgICAgIHQ5ID0gZHN0X3kyO1xuICAgICAgICB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB0MTEgPSBkc3RfeDE7XG4gICAgICAgIHQxNCA9IGRzdF95MDtcbiAgICAgICAgdDE1ID0gZHN0X3gzO1xuICAgICAgICB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIbDAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSGwxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIbDIgPSB0MTtcbiAgICAgICAgdmFyIEhsMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDUgPSB0MTQ7XG4gICAgICAgIHZhciBIbDYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIbDcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGNvZGUgY29tcHV0ZXMgUiA9IEhsICogaW52ZXJzZSBIclxuICAgICAgICB0MiA9IEhyNCAtIEhyNyAqIEhyNTtcbiAgICAgICAgdDQgPSBIcjAgKiBIcjQ7XG4gICAgICAgIHQ1ID0gSHIwICogSHI1O1xuICAgICAgICB0NyA9IEhyMyAqIEhyMTtcbiAgICAgICAgdDggPSBIcjIgKiBIcjM7XG4gICAgICAgIHQxMCA9IEhyMSAqIEhyNjtcbiAgICAgICAgdmFyIHQxMiA9IEhyMiAqIEhyNjtcbiAgICAgICAgdDE1ID0gMS4wIC8gKHQ0IC0gdDUgKiBIcjcgLSB0NyArIHQ4ICogSHI3ICsgdDEwICogSHI1IC0gdDEyICogSHI0KTtcbiAgICAgICAgdDE4ID0gLUhyMyArIEhyNSAqIEhyNjtcbiAgICAgICAgdmFyIHQyMyA9IC1IcjMgKiBIcjcgKyBIcjQgKiBIcjY7XG4gICAgICAgIHQyOCA9IC1IcjEgKyBIcjIgKiBIcjc7XG4gICAgICAgIHZhciB0MzEgPSBIcjAgLSB0MTI7XG4gICAgICAgIHQzNSA9IEhyMCAqIEhyNyAtIHQxMDtcbiAgICAgICAgdDQxID0gLUhyMSAqIEhyNSArIEhyMiAqIEhyNDtcbiAgICAgICAgdmFyIHQ0NCA9IHQ1IC0gdDg7XG4gICAgICAgIHZhciB0NDcgPSB0NCAtIHQ3O1xuICAgICAgICB0NDggPSB0MiAqIHQxNTtcbiAgICAgICAgdmFyIHQ0OSA9IHQyOCAqIHQxNTtcbiAgICAgICAgdmFyIHQ1MCA9IHQ0MSAqIHQxNTtcbiAgICAgICAgdmFyIG1hdCA9IG1vZGVsLmRhdGE7XG4gICAgICAgIG1hdFswXSA9IEhsMCAqIHQ0OCArIEhsMSAqICh0MTggKiB0MTUpIC0gSGwyICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFsxXSA9IEhsMCAqIHQ0OSArIEhsMSAqICh0MzEgKiB0MTUpIC0gSGwyICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFsyXSA9IC1IbDAgKiB0NTAgLSBIbDEgKiAodDQ0ICogdDE1KSArIEhsMiAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbM10gPSBIbDMgKiB0NDggKyBIbDQgKiAodDE4ICogdDE1KSAtIEhsNSAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbNF0gPSBIbDMgKiB0NDkgKyBIbDQgKiAodDMxICogdDE1KSAtIEhsNSAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbNV0gPSAtSGwzICogdDUwIC0gSGw0ICogKHQ0NCAqIHQxNSkgKyBIbDUgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzZdID0gSGw2ICogdDQ4ICsgSGw3ICogKHQxOCAqIHQxNSkgLSB0MjMgKiB0MTU7XG4gICAgICAgIG1hdFs3XSA9IEhsNiAqIHQ0OSArIEhsNyAqICh0MzEgKiB0MTUpIC0gdDM1ICogdDE1O1xuICAgICAgICBtYXRbOF0gPSAtSGw2ICogdDUwIC0gSGw3ICogKHQ0NCAqIHQxNSkgKyB0NDcgKiB0MTU7XG4gICAgfVxuXG4gICAgLy8gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gd2FzIGRlcml2ZWQgZnJvbSAqQlNEIHN5c3RlbSBxc29ydCgpOlxuICAgIC8vIENvcHlyaWdodCAoYykgMTk5MiwgMTk5M1xuICAgIC8vIFRoZSBSZWdlbnRzIG9mIHRoZSBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIHFzb3J0KGFycmF5LCBsb3csIGhpZ2gsIGNtcCkge1xuICAgICAgICB2YXIgaXNvcnRfdGhyZXNoID0gNztcbiAgICAgICAgdmFyIHQsIHRhLCB0YiwgdGM7XG4gICAgICAgIHZhciBzcCA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDAsIGkgPSAwLCBuID0gMCwgbSA9IDAsIHB0ciA9IDAsIHB0cjIgPSAwLCBkID0gMDtcbiAgICAgICAgdmFyIGxlZnQwID0gMCwgbGVmdDEgPSAwLCByaWdodDAgPSAwLCByaWdodDEgPSAwLCBwaXZvdCA9IDAsIGEgPSAwLCBiID0gMCwgYyA9IDAsIHN3YXBfY250ID0gMDtcblxuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLnFzb3J0X3N0YWNrO1xuXG4gICAgICAgIGlmICgoaGlnaCAtIGxvdyArIDEpIDw9IDEpIHJldHVybjtcblxuICAgICAgICBzdGFja1swXSA9IGxvdztcbiAgICAgICAgc3RhY2tbMV0gPSBoaWdoO1xuXG4gICAgICAgIHdoaWxlIChzcCA+PSAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBsZWZ0ICsgZCwgYyA9IGxlZnQgKyAoZCA8PCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZCA8PCAxKSwgYiA9IHJpZ2h0IC0gZCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IHBpdm90LCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAodGEsIGFycmF5W2xlZnRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKGFycmF5W2xlZnRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiBsZWZ0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQxXSA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKGFycmF5W3JpZ2h0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAodGEsIGFycmF5W3JpZ2h0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgcmlnaHQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcmlnaHQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0MV0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQxLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3YXBfY250ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChsZWZ0MSAtIGxlZnQwKSwgKGxlZnQgLSBsZWZ0MSkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKGxlZnQgLSBuKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQwICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKHJpZ2h0MCAtIHJpZ2h0MSksIChyaWdodDEgLSByaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MCAtIG4gKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2ksICsrbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobGVmdCAtIGxlZnQxKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDEgLSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IHJpZ2h0MCAtIG0gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lZGlhbihhcnJheSwgbG93LCBoaWdoKSB7XG4gICAgICAgIHZhciB3O1xuICAgICAgICB2YXIgbWlkZGxlID0gMCwgbGwgPSAwLCBoaCA9IDAsIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgaWYgKGhpZ2ggPD0gbG93KSByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIGlmIChoaWdoID09IChsb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9ICgobG93ICsgaGlnaCkgPj4gMSk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtsb3ddKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsbCA9IChsb3cgKyAxKTtcbiAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgYXJyYXlbbWlkZGxlXSA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgIGFycmF5W2xsXSA9IHc7XG4gICAgICAgICAgICBoaCA9IGhpZ2g7XG4gICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgc3JjID0gTS5kYXRhO1xuICAgICAgICB2YXIgcm93cyA9IE0ucm93cywgY29scyA9IE0uY29scywgY29sc18xID0gKGNvbHMgKyAxKSB8IDA7XG4gICAgICAgIHZhciBsZW4gPSByb3dzICogY29scztcbiAgICAgICAgdmFyIGsgPSBsZW47XG4gICAgICAgIHdoaWxlICgtLWxlbiA+PSAwKSBzcmNbbGVuXSA9IDAuMDtcbiAgICAgICAgbGVuID0gaztcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICBzcmNba10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGsgPSBrICsgY29sc18xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKEF0LCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIEFpID0gMCwgQXRpID0gMCwgcEF0ID0gMDtcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQidcbiAgICBtdWx0aXBseV9BQnQoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbXJvd3MgPSBCLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBBcCsrLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBBJ1xuICAgIG11bHRpcGx5X0FBdChDLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0MgPSAwLCBwQyA9IDAsIHBfQ0MgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwX0NDXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlvdXMgc21hbGwgbWF0cml4IG9wZXJhdGlvbnNcbiAgICBpZGVudGl0eV8zeDMoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIGR0ID0gTS5kYXRhO1xuICAgICAgICBkdFswXSA9IGR0WzRdID0gZHRbOF0gPSB2YWx1ZTtcbiAgICAgICAgZHRbMV0gPSBkdFsyXSA9IGR0WzNdID0gMDtcbiAgICAgICAgZHRbNV0gPSBkdFs2XSA9IGR0WzddID0gMDtcbiAgICB9XG5cbiAgICBpbnZlcnRfM3gzKGZyb20sIHRvKSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDLCBBLCBCKSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTSkge1xuICAgICAgICB2YXIgbWQgPSBNLmRhdGE7XG4gICAgICAgIHJldHVybiBtZFswXSAqIG1kWzRdICogbWRbOF0gLVxuICAgICAgICAgICAgbWRbMF0gKiBtZFs1XSAqIG1kWzddIC1cbiAgICAgICAgICAgIG1kWzNdICogbWRbMV0gKiBtZFs4XSArXG4gICAgICAgICAgICBtZFszXSAqIG1kWzJdICogbWRbN10gK1xuICAgICAgICAgICAgbWRbNl0gKiBtZFsxXSAqIG1kWzVdIC1cbiAgICAgICAgICAgIG1kWzZdICogbWRbMl0gKiBtZFs0XTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudF8zeDMoTTExLCBNMTIsIE0xMyxcbiAgICAgICAgTTIxLCBNMjIsIE0yMyxcbiAgICAgICAgTTMxLCBNMzIsIE0zMykge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCBkYXRhX3R5cGUgZnJvbSAnLi4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdHJpeF90IHtcbiAgICBjb25zdHJ1Y3RvcihjLCByLCBfZGF0YV90eXBlLCBfZGF0YV9idWZmZXIpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXIpIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjLCByLCBjaCkge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBtYXRoIGZyb20gJy4uL21hdGgvbWF0aC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtb3Rpb25fZXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG5cbiAgICBnZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG5lZWRfY250LCBtYXhfY250LCBmcm9tX3N1YiwgdG9fc3ViKSB7XG4gICAgICAgIHZhciBtYXhfdHJ5ID0gMTAwMDtcbiAgICAgICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgc3NpdGVyID0gMCwgaWR4X2kgPSAwLCBvayA9IGZhbHNlO1xuICAgICAgICBmb3IgKDsgc3NpdGVyIDwgbWF4X3RyeTsgKytzc2l0ZXIpIHtcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5Oykge1xuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWR4X2kgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICghb2spIHtcbiAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZHhfaSA9IGluZGljZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhfY250KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHhfaSA9PSBpbmRpY2VzW2pdKSB7IG9rID0gZmFsc2U7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbV9zdWJbaV0gPSBmcm9tW2lkeF9pXTtcbiAgICAgICAgICAgICAgICB0b19zdWJbaV0gPSB0b1tpZHhfaV07XG4gICAgICAgICAgICAgICAgaWYgKCFrZXJuZWwuY2hlY2tfc3Vic2V0KGZyb21fc3ViLCB0b19zdWIsIGkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBzc2l0ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChpID09IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnkpO1xuICAgIH1cblxuICAgIGZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHRocmVzaCwgZXJyLCBtYXNrKSB7XG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMCwgaSA9IDAsIGYgPSAwO1xuICAgICAgICB2YXIgdCA9IHRocmVzaCAqIHRocmVzaDtcblxuICAgICAgICBrZXJuZWwuZXJyb3IoZnJvbSwgdG8sIG1vZGVsLCBlcnIsIGNvdW50KTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGYgPSBlcnJbaV0gPD0gdDtcbiAgICAgICAgICAgIG1hc2tbaV0gPSBmO1xuICAgICAgICAgICAgbnVtaW5saWVycyArPSBmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1pbmxpZXJzO1xuICAgIH1cblxuICAgIHJhbnNhYyhwYXJhbXMsIGtlcm5lbCwgZnJvbSwgdG8sIGNvdW50LCBtb2RlbCwgbWFzaywgbWF4X2l0ZXJzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgc3Vic2V0MCA9IFtdO1xuICAgICAgICB2YXIgc3Vic2V0MSA9IFtdO1xuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgbWMgPSBtb2RlbC5jb2xzLCBtciA9IG1vZGVsLnJvd3M7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIG1fYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobWMgKiBtcikgPDwgMyk7XG4gICAgICAgIHZhciBtc19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50KTtcbiAgICAgICAgdmFyIGVycl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50IDw8IDIpO1xuICAgICAgICB2YXIgTSA9IG5ldyBtYXRyaXhfdChtYywgbXIsIGR0LCBtX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBjdXJyX21hc2sgPSBuZXcgbWF0cml4X3QoY291bnQsIDEsIEpTRkVBVF9DT05TVEFOVFMuVThDMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpbmxpZXJzX21heCA9IC0xLCBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAgbnVtaW5saWVycyA9IHRoaXMuZmluZF9pbmxpZXJzKGtlcm5lbCwgTSwgZnJvbSwgdG8sIGNvdW50LCBwYXJhbXMudGhyZXNoLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKG51bWlubGllcnMgPiBNYXRoLm1heChpbmxpZXJzX21heCwgbW9kZWxfcG9pbnRzIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIGlubGllcnNfbWF4ID0gbnVtaW5saWVycztcbiAgICAgICAgICAgICAgICBpZiAobWFzaykgY3Vycl9tYXNrLmNvcHlfdG8obWFzayk7XG4gICAgICAgICAgICAgICAgbml0ZXJzID0gcGFyYW1zLnVwZGF0ZV9pdGVycygoY291bnQgLSBudW1pbmxpZXJzKSAvIGNvdW50LCBuaXRlcnMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbG1lZHMocGFyYW1zLCBrZXJuZWwsIGZyb20sIHRvLCBjb3VudCwgbW9kZWwsIG1hc2ssIG1heF9pdGVycykge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWF0aCA9IG5ldyBtYXRoKCk7XG5cbiAgICAgICAgdmFyIHN1YnNldDAgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDEgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcbiAgICAgICAgdmFyIG1pbl9tZWRpYW4gPSAxMDAwMDAwMDAwLjAsIHNpZ21hID0gMC4wLCBtZWRpYW4gPSAwLjA7XG5cbiAgICAgICAgcGFyYW1zLmVwcyA9IDAuNDU7XG4gICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMocGFyYW1zLmVwcywgbml0ZXJzKTtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBrZXJuZWwuZXJyb3IoZnJvbSwgdG8sIE0sIGVyciwgY291bnQpO1xuICAgICAgICAgICAgbWVkaWFuID0gX21hdGgubWVkaWFuKGVyciwgMCwgY291bnQgLSAxKTtcblxuICAgICAgICAgICAgaWYgKG1lZGlhbiA8IG1pbl9tZWRpYW4pIHtcbiAgICAgICAgICAgICAgICBtaW5fbWVkaWFuID0gbWVkaWFuO1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHNpZ21hID0gMi41ICogMS40ODI2ICogKDEgKyA1LjAgLyAoY291bnQgLSBtb2RlbF9wb2ludHMpKSAqIE1hdGguc3FydChtaW5fbWVkaWFuKTtcbiAgICAgICAgICAgIHNpZ21hID0gTWF0aC5tYXgoc2lnbWEsIDAuMDAxKTtcblxuICAgICAgICAgICAgbnVtaW5saWVycyA9IHRoaXMuZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgc2lnbWEsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBudW1pbmxpZXJzID49IG1vZGVsX3BvaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuaW1wb3J0IGxpbmFsZyBmcm9tICcuLi9saW5hbGcvbGluYWxnLmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBjbGFzcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlQwID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLlQxID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QSA9IG5ldyBtYXRyaXhfdCg2LCA2LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEIgPSBuZXcgbWF0cml4X3QoNiwgMSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHNxcih4KSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIFQwLCBUMSwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3gwID0gMC4wLCBjeTAgPSAwLjAsIGQwID0gMC4wLCBzMCA9IDAuMDtcbiAgICAgICAgdmFyIGN4MSA9IDAuMCwgY3kxID0gMC4wLCBkMSA9IDAuMCwgczEgPSAwLjA7XG4gICAgICAgIHZhciBkeCA9IDAuMCwgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7IGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50OyBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50OyBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDsgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHMsIGNvdW50KSB7XG4gICAgICAgIHZhciBqID0gMCwgayA9IDAsIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkeDEgPSAwLjAsIGR5MSA9IDAuMCwgZHgyID0gMC4wLCBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeDIgKiBkeTEgLSBkeTIgKiBkeDEpIDw9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIChNYXRoLmFicyhkeDEpICsgTWF0aC5hYnMoZHkxKSArIE1hdGguYWJzKGR4MikgKyBNYXRoLmFicyhkeTIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBhZmZpbmUyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuICAgIHJ1bihmcm9tLCB0bywgbW9kZWwsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHB4ID0gMC4wLCBweSA9IDAuMDtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcgbGluYWxnKCk7XG5cbiAgICAgICAgdGhpcy5pc29fbm9ybWFsaXplX3BvaW50cyhmcm9tLCB0bywgdDBkLCB0MWQsIGNvdW50KTtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgyICogY291bnQgKiA2KSA8PCAzKTtcbiAgICAgICAgdmFyIGJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50KSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdCg2LCAyICogY291bnQsIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBiX210ID0gbmV3IG1hdHJpeF90KDEsIDIgKiBjb3VudCwgZHQsIGJfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGFkID0gYV9tdC5kYXRhLCBiZCA9IGJfbXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB0MCA9IGZyb21baV07XG4gICAgICAgICAgICBwdDEgPSB0b1tpXTtcblxuICAgICAgICAgICAgcHggPSB0MGRbMF0gKiBwdDAueCArIHQwZFsxXSAqIHB0MC55ICsgdDBkWzJdO1xuICAgICAgICAgICAgcHkgPSB0MGRbM10gKiBwdDAueCArIHQwZFs0XSAqIHB0MC55ICsgdDBkWzVdO1xuXG4gICAgICAgICAgICBqID0gaSAqIDIgKiA2O1xuICAgICAgICAgICAgYWRbal0gPSBweCwgYWRbaiArIDFdID0gcHksIGFkW2ogKyAyXSA9IDEuMCwgYWRbaiArIDNdID0gMC4wLCBhZFtqICsgNF0gPSAwLjAsIGFkW2ogKyA1XSA9IDAuMDtcblxuICAgICAgICAgICAgaiArPSA2O1xuICAgICAgICAgICAgYWRbal0gPSAwLjAsIGFkW2ogKyAxXSA9IDAuMCwgYWRbaiArIDJdID0gMC4wLCBhZFtqICsgM10gPSBweCwgYWRbaiArIDRdID0gcHksIGFkW2ogKyA1XSA9IDEuMDtcblxuICAgICAgICAgICAgYmRbaSA8PCAxXSA9IHQxZFswXSAqIHB0MS54ICsgdDFkWzFdICogcHQxLnkgKyB0MWRbMl07XG4gICAgICAgICAgICBiZFsoaSA8PCAxKSArIDFdID0gdDFkWzNdICogcHQxLnggKyB0MWRbNF0gKiBwdDEueSArIHQxZFs1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5X0F0QSh0aGlzLkF0QSwgYV9tdCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5X0F0Qih0aGlzLkF0QiwgYV9tdCwgYl9tdCk7XG5cbiAgICAgICAgX2xpbmFsZy5sdV9zb2x2ZSh0aGlzLkF0QSwgdGhpcy5BdEIpO1xuXG4gICAgICAgIG1kWzBdID0gdGhpcy5BdEIuZGF0YVswXSwgbWRbMV0gPSB0aGlzLkF0Qi5kYXRhWzFdLCBtZFsyXSA9IHRoaXMuQXRCLmRhdGFbMl07XG4gICAgICAgIG1kWzNdID0gdGhpcy5BdEIuZGF0YVszXSwgbWRbNF0gPSB0aGlzLkF0Qi5kYXRhWzRdLCBtZFs1XSA9IHRoaXMuQXRCLmRhdGFbNV07XG4gICAgICAgIG1kWzZdID0gMC4wLCBtZFs3XSA9IDAuMCwgbWRbOF0gPSAxLjA7IC8vIGZpbGwgbGFzdCByb3dcblxuICAgICAgICAvLyBkZW5vcm1hbGl6ZVxuICAgICAgICBfbWF0bWF0aC5pbnZlcnRfM3gzKHRoaXMuVDEsIHRoaXMuVDEpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIHRoaXMuVDEsIG1vZGVsKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCBtb2RlbCwgdGhpcy5UMCk7XG5cbiAgICAgICAgLy8gZnJlZSBidWZmZXJcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihiX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGhvbW9ncmFwaHkyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubUx0TCA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5FdmVjID0gbmV3IG1hdHJpeF90KDksIDksIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBydW4oZnJvbSwgdG8sIG1vZGVsLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIEx0TCA9IHRoaXMubUx0TC5kYXRhLCBldmQgPSB0aGlzLkV2ZWMuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLjAsIHkgPSAwLjAsIFggPSAwLjAsIFkgPSAwLjA7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGxpbmFsZygpO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuXG4gICAgICAgIC8vIG5vcm1cbiAgICAgICAgdmFyIHNteCA9IDAuMCwgc215ID0gMC4wLCBjbXggPSAwLjAsIGNteSA9IDAuMCwgc014ID0gMC4wLCBzTXkgPSAwLjAsIGNNeCA9IDAuMCwgY015ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY214ICs9IHRvW2ldLng7XG4gICAgICAgICAgICBjbXkgKz0gdG9baV0ueTtcbiAgICAgICAgICAgIGNNeCArPSBmcm9tW2ldLng7XG4gICAgICAgICAgICBjTXkgKz0gZnJvbVtpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY214IC89IGNvdW50OyBjbXkgLz0gY291bnQ7XG4gICAgICAgIGNNeCAvPSBjb3VudDsgY015IC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzbXggKz0gTWF0aC5hYnModG9baV0ueCAtIGNteCk7XG4gICAgICAgICAgICBzbXkgKz0gTWF0aC5hYnModG9baV0ueSAtIGNteSk7XG4gICAgICAgICAgICBzTXggKz0gTWF0aC5hYnMoZnJvbVtpXS54IC0gY014KTtcbiAgICAgICAgICAgIHNNeSArPSBNYXRoLmFicyhmcm9tW2ldLnkgLSBjTXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNteCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNteSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeCkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT05cbiAgICAgICAgICAgIHx8IE1hdGguYWJzKHNNeSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHJldHVybiAwO1xuXG4gICAgICAgIHNteCA9IGNvdW50IC8gc214OyBzbXkgPSBjb3VudCAvIHNteTtcbiAgICAgICAgc014ID0gY291bnQgLyBzTXg7IHNNeSA9IGNvdW50IC8gc015O1xuXG4gICAgICAgIHQwZFswXSA9IHNNeDsgdDBkWzFdID0gMDsgdDBkWzJdID0gLWNNeCAqIHNNeDtcbiAgICAgICAgdDBkWzNdID0gMDsgdDBkWzRdID0gc015OyB0MGRbNV0gPSAtY015ICogc015O1xuICAgICAgICB0MGRbNl0gPSAwOyB0MGRbN10gPSAwOyB0MGRbOF0gPSAxO1xuXG4gICAgICAgIHQxZFswXSA9IDEuMCAvIHNteDsgdDFkWzFdID0gMDsgdDFkWzJdID0gY214O1xuICAgICAgICB0MWRbM10gPSAwOyB0MWRbNF0gPSAxLjAgLyBzbXk7IHQxZFs1XSA9IGNteTtcbiAgICAgICAgdDFkWzZdID0gMDsgdDFkWzddID0gMDsgdDFkWzhdID0gMTtcbiAgICAgICAgLy9cblxuICAgICAgICAvLyBjb25zdHJ1Y3Qgc3lzdGVtXG4gICAgICAgIGkgPSA4MTtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBMdExbaV0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHggPSAodG9baV0ueCAtIGNteCkgKiBzbXg7XG4gICAgICAgICAgICB5ID0gKHRvW2ldLnkgLSBjbXkpICogc215O1xuICAgICAgICAgICAgWCA9IChmcm9tW2ldLnggLSBjTXgpICogc014O1xuICAgICAgICAgICAgWSA9IChmcm9tW2ldLnkgLSBjTXkpICogc015O1xuXG4gICAgICAgICAgICBMdExbMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMl0gKz0gWDtcblxuICAgICAgICAgICAgTHRMWzZdICs9IFggKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbN10gKz0gWCAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFs4XSArPSBYICogLXg7XG4gICAgICAgICAgICBMdExbMTBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzExXSArPSBZO1xuXG4gICAgICAgICAgICBMdExbMTVdICs9IFkgKiAteCAqIFg7XG4gICAgICAgICAgICBMdExbMTZdICs9IFkgKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbMTddICs9IFkgKiAteDtcbiAgICAgICAgICAgIEx0TFsyMF0gKz0gMS4wO1xuXG4gICAgICAgICAgICBMdExbMjRdICs9IC14ICogWDtcbiAgICAgICAgICAgIEx0TFsyNV0gKz0gLXggKiBZO1xuICAgICAgICAgICAgTHRMWzI2XSArPSAteDtcbiAgICAgICAgICAgIEx0TFszMF0gKz0gWCAqIFg7XG4gICAgICAgICAgICBMdExbMzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzMyXSArPSBYO1xuICAgICAgICAgICAgTHRMWzMzXSArPSBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzM0XSArPSBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzM1XSArPSBYICogLXk7XG4gICAgICAgICAgICBMdExbNDBdICs9IFkgKiBZO1xuICAgICAgICAgICAgTHRMWzQxXSArPSBZO1xuICAgICAgICAgICAgTHRMWzQyXSArPSBZICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzQzXSArPSBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzQ0XSArPSBZICogLXk7XG4gICAgICAgICAgICBMdExbNTBdICs9IDEuMDtcbiAgICAgICAgICAgIEx0TFs1MV0gKz0gLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzUyXSArPSAteSAqIFk7XG4gICAgICAgICAgICBMdExbNTNdICs9IC15O1xuICAgICAgICAgICAgTHRMWzYwXSArPSAteCAqIFggKiAteCAqIFggKyAteSAqIFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNjFdICs9IC14ICogWCAqIC14ICogWSArIC15ICogWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs2Ml0gKz0gLXggKiBYICogLXggKyAteSAqIFggKiAteTtcbiAgICAgICAgICAgIEx0TFs3MF0gKz0gLXggKiBZICogLXggKiBZICsgLXkgKiBZICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzcxXSArPSAteCAqIFkgKiAteCArIC15ICogWSAqIC15O1xuICAgICAgICAgICAgTHRMWzgwXSArPSAteCAqIC14ICsgLXkgKiAteTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuXG4gICAgICAgIC8vIHN5bW1ldHJ5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA5OyArK2kpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opXG4gICAgICAgICAgICAgICAgTHRMW2kgKiA5ICsgal0gPSBMdExbaiAqIDkgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9saW5hbGcuZWlnZW5WVih0aGlzLm1MdEwsIHRoaXMuRXZlYyk7XG5cbiAgICAgICAgbWRbMF0gPSBldmRbNzJdLCBtZFsxXSA9IGV2ZFs3M10sIG1kWzJdID0gZXZkWzc0XTtcbiAgICAgICAgbWRbM10gPSBldmRbNzVdLCBtZFs0XSA9IGV2ZFs3Nl0sIG1kWzVdID0gZXZkWzc3XTtcbiAgICAgICAgbWRbNl0gPSBldmRbNzhdLCBtZFs3XSA9IGV2ZFs3OV0sIG1kWzhdID0gZXZkWzgwXTtcblxuICAgICAgICAvLyBkZW5vcm1hbGl6ZVxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIHRoaXMuVDEsIG1vZGVsKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCBtb2RlbCwgdGhpcy5UMCk7XG5cbiAgICAgICAgLy8gc2V0IGJvdHRvbSByaWdodCB0byAxLjBcbiAgICAgICAgeCA9IDEuMCAvIG1kWzhdO1xuICAgICAgICBtZFswXSAqPSB4OyBtZFsxXSAqPSB4OyBtZFsyXSAqPSB4O1xuICAgICAgICBtZFszXSAqPSB4OyBtZFs0XSAqPSB4OyBtZFs1XSAqPSB4O1xuICAgICAgICBtZFs2XSAqPSB4OyBtZFs3XSAqPSB4OyBtZFs4XSA9IDEuMDtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZXJyb3IoZnJvbSwgdG8sIG1vZGVsLCBlcnIsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCB3dyA9IDAuMCwgZHggPSAwLjAsIGR5ID0gMC4wO1xuICAgICAgICB2YXIgbSA9IG1vZGVsLmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHd3ID0gMS4wIC8gKG1bNl0gKiBwdDAueCArIG1bN10gKiBwdDAueSArIDEuMCk7XG4gICAgICAgICAgICBkeCA9IChtWzBdICogcHQwLnggKyBtWzFdICogcHQwLnkgKyBtWzJdKSAqIHd3IC0gcHQxLng7XG4gICAgICAgICAgICBkeSA9IChtWzNdICogcHQwLnggKyBtWzRdICogcHQwLnkgKyBtWzVdKSAqIHd3IC0gcHQxLnk7XG4gICAgICAgICAgICBlcnJbaV0gPSAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrX3N1YnNldChmcm9tLCB0bywgY291bnQpIHtcbiAgICAgICAgLy8gc2VlbXMgdG8gcmVqZWN0IGdvb2Qgc3Vic2V0cyBhY3R1YWxseVxuICAgICAgICAvL2lmKCBoYXZlX2NvbGxpbmVhcl9wb2ludHMoZnJvbSwgY291bnQpIHx8IGhhdmVfY29sbGluZWFyX3BvaW50cyh0bywgY291bnQpICkge1xuICAgICAgICAvL3JldHVybiBmYWxzZTtcbiAgICAgICAgLy99XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIGlmIChjb3VudCA9PSA0KSB7XG4gICAgICAgICAgICB2YXIgbmVnYXRpdmUgPSAwO1xuXG4gICAgICAgICAgICB2YXIgZnAwID0gZnJvbVswXSwgZnAxID0gZnJvbVsxXSwgZnAyID0gZnJvbVsyXSwgZnAzID0gZnJvbVszXTtcbiAgICAgICAgICAgIHZhciB0cDAgPSB0b1swXSwgdHAxID0gdG9bMV0sIHRwMiA9IHRvWzJdLCB0cDMgPSB0b1szXTtcblxuICAgICAgICAgICAgLy8gc2V0MVxuICAgICAgICAgICAgdmFyIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueSwgQTEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueSwgQTIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEEzMSA9IGZwMi54LCBBMzIgPSBmcDIueSwgQTMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgQjExID0gdHAwLngsIEIxMiA9IHRwMC55LCBCMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55LCBCMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQjMxID0gdHAyLngsIEIzMiA9IHRwMi55LCBCMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgdmFyIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDJcbiAgICAgICAgICAgIEExMSA9IGZwMS54LCBBMTIgPSBmcDEueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAxLngsIEIxMiA9IHRwMS55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0M1xuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQ0XG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIGlmIChuZWdhdGl2ZSAhPSAwICYmIG5lZ2F0aXZlICE9IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGFsbCBnb29kXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHJhbnNhY19wYXJhbXNfdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgdGhyZXNoLCBlcHMsIHByb2IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplID09PSBcInVuZGVmaW5lZFwiKSB7IHNpemUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhyZXNoID09PSBcInVuZGVmaW5lZFwiKSB7IHRocmVzaCA9IDAuNTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9iID09PSBcInVuZGVmaW5lZFwiKSB7IHByb2IgPSAwLjk5OyB9XG5cbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy50aHJlc2ggPSB0aHJlc2g7XG4gICAgICAgIHRoaXMuZXBzID0gZXBzO1xuICAgICAgICB0aGlzLnByb2IgPSBwcm9iO1xuICAgIH07XG4gICAgdXBkYXRlX2l0ZXJzKF9lcHMsIG1heF9pdGVycykge1xuICAgICAgICB2YXIgbnVtID0gTWF0aC5sb2coMSAtIHRoaXMucHJvYik7XG4gICAgICAgIHZhciBkZW5vbSA9IE1hdGgubG9nKDEgLSBNYXRoLnBvdygxIC0gX2VwcywgdGhpcy5zaXplKSk7XG4gICAgICAgIHJldHVybiAoZGVub20gPj0gMCB8fCAtbnVtID49IG1heF9pdGVycyAqICgtZGVub20pID8gbWF4X2l0ZXJzIDogTWF0aC5yb3VuZChudW0gLyBkZW5vbSkpIHwgMDtcbiAgICB9XG59OyIsImltcG9ydCBkYXRhX3QgZnJvbSAnLi9kYXRhX3QuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfcG9vbF9ub2RlX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG4gICAgcmVzaXplKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90ICB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlcywgYnVmZmVyKSB7XG4gICAgICAgIC8vc3VwZXIoKVxuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgaW1ncHJvYyBmcm9tICcuLi9pbWdwcm9jL2ltZ3Byb2MuanMnXG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3B0aWNhbF9mbG93X2xrIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGltZ3Byb2MoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5zY2hhcnJfZGVyaXYgPSBfaW1ncHJvYy5zY2hhcnJfZGVyaXZhdGl2ZXM7XG4gICAgfVxuICAgIHRyYWNrKHByZXZfcHlyLCBjdXJyX3B5ciwgcHJldl94eSwgY3Vycl94eSwgY291bnQsIHdpbl9zaXplLCBtYXhfaXRlciwgc3RhdHVzLCBlcHMsIG1pbl9laWdlbl90aHJlc2hvbGQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlciA9IDMwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7IHN0YXR1cyA9IG5ldyBVaW50OEFycmF5KGNvdW50KTsgfVxuICAgICAgICBpZiAodHlwZW9mIGVwcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBlcHMgPSAwLjAxOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbWluX2VpZ2VuX3RocmVzaG9sZCA9PT0gXCJ1bmRlZmluZWRcIikgeyBtaW5fZWlnZW5fdGhyZXNob2xkID0gMC4wMDAxOyB9XG5cbiAgICAgICAgdmFyIGhhbGZfd2luID0gKHdpbl9zaXplIC0gMSkgKiAwLjU7XG4gICAgICAgIHZhciB3aW5fYXJlYSA9ICh3aW5fc2l6ZSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgIHZhciB3aW5fYXJlYTIgPSB3aW5fYXJlYSA8PCAxO1xuICAgICAgICB2YXIgcHJldl9pbWdzID0gcHJldl9weXIuZGF0YSwgbmV4dF9pbWdzID0gY3Vycl9weXIuZGF0YTtcbiAgICAgICAgdmFyIGltZ19wcmV2ID0gcHJldl9pbWdzWzBdLmRhdGEsIGltZ19uZXh0ID0gbmV4dF9pbWdzWzBdLmRhdGE7XG4gICAgICAgIHZhciB3MCA9IHByZXZfaW1nc1swXS5jb2xzLCBoMCA9IHByZXZfaW1nc1swXS5yb3dzLCBsdyA9IDAsIGxoID0gMDtcblxuICAgICAgICB2YXIgaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhIDw8IDIpO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhMiA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2xldl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChoMCAqICh3MCA8PCAxKSkgPDwgMik7XG5cbiAgICAgICAgdmFyIGRlcml2X20gPSBuZXcgbWF0cml4X3QodzAsIGgwLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGRlcml2X2xldl9ub2RlLmRhdGEpO1xuXG4gICAgICAgIHZhciBpd2luX2J1ZiA9IGl3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9pd2luID0gZGVyaXZfaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgdmFyIGRlcml2X2xldiA9IGRlcml2X2xldl9ub2RlLmkzMjtcblxuICAgICAgICB2YXIgZHN0ZXAgPSAwLCBzcmMgPSAwLCBkc3JjID0gMCwgaXB0ciA9IDAsIGRpcHRyID0gMCwganB0ciA9IDA7XG4gICAgICAgIHZhciBsZXZfc2MgPSAwLjAsIHByZXZfeCA9IDAuMCwgcHJldl95ID0gMC4wLCBuZXh0X3ggPSAwLjAsIG5leHRfeSA9IDAuMDtcbiAgICAgICAgdmFyIHByZXZfZGVsdGFfeCA9IDAuMCwgcHJldl9kZWx0YV95ID0gMC4wLCBkZWx0YV94ID0gMC4wLCBkZWx0YV95ID0gMC4wO1xuICAgICAgICB2YXIgaXByZXZfeCA9IDAsIGlwcmV2X3kgPSAwLCBpbmV4dF94ID0gMCwgaW5leHRfeSA9IDA7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHggPSAwLCB5ID0gMCwgbGV2ZWwgPSAwLCBwdGlkID0gMCwgaXRlciA9IDA7XG4gICAgICAgIHZhciBicmRfdGwgPSAwLCBicmRfciA9IDAsIGJyZF9iID0gMDtcbiAgICAgICAgdmFyIGEgPSAwLjAsIGIgPSAwLjAsIGIxID0gMC4wLCBiMiA9IDAuMDtcblxuICAgICAgICAvLyBmaXhlZCBwb2ludCBtYXRoXG4gICAgICAgIHZhciBXX0JJVFMxNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTNCA9IDE0O1xuICAgICAgICB2YXIgV19CSVRTMW01ID0gV19CSVRTNCAtIDU7XG4gICAgICAgIHZhciBXX0JJVFMxbTUxID0gKDEgPDwgKChXX0JJVFMxbTUpIC0gMSkpO1xuICAgICAgICB2YXIgV19CSVRTMTRfID0gKDEgPDwgV19CSVRTMTQpO1xuICAgICAgICB2YXIgV19CSVRTNDEgPSAoMSA8PCAoKFdfQklUUzQpIC0gMSkpO1xuICAgICAgICB2YXIgRkxUX1NDQUxFID0gMS4wIC8gKDEgPDwgMjApO1xuICAgICAgICB2YXIgaXcwMCA9IDAsIGl3MDEgPSAwLCBpdzEwID0gMCwgaXcxMSA9IDAsIGl2YWwgPSAwLCBpeHZhbCA9IDAsIGl5dmFsID0gMDtcbiAgICAgICAgdmFyIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjAsIEQgPSAwLjAsIG1pbl9laWcgPSAwLjA7XG5cbiAgICAgICAgdmFyIEZMVF9FUFNJTE9OID0gMC4wMDAwMDAxMTkyMDkyOTtcbiAgICAgICAgZXBzICo9IGVwcztcblxuICAgICAgICAvLyByZXNldCBzdGF0dXNcbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1heF9sZXZlbCA9IChwcmV2X3B5ci5sZXZlbHMgLSAxKSB8IDA7XG4gICAgICAgIGxldmVsID0gbWF4X2xldmVsO1xuXG4gICAgICAgIGZvciAoOyBsZXZlbCA+PSAwOyAtLWxldmVsKSB7XG4gICAgICAgICAgICBsZXZfc2MgPSAoMS4wIC8gKDEgPDwgbGV2ZWwpKTtcbiAgICAgICAgICAgIGx3ID0gdzAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBsaCA9IGgwID4+IGxldmVsO1xuICAgICAgICAgICAgZHN0ZXAgPSBsdyA8PCAxO1xuICAgICAgICAgICAgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbbGV2ZWxdLmRhdGE7XG4gICAgICAgICAgICBpbWdfbmV4dCA9IG5leHRfaW1nc1tsZXZlbF0uZGF0YTtcblxuICAgICAgICAgICAgYnJkX3IgPSAobHcgLSB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgYnJkX2IgPSAobGggLSB3aW5fc2l6ZSkgfCAwO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGV2ZWwgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2KHByZXZfaW1nc1tsZXZlbF0sIGRlcml2X20pO1xuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG9pbnRzXG4gICAgICAgICAgICBmb3IgKHB0aWQgPSAwOyBwdGlkIDwgY291bnQ7ICsrcHRpZCkge1xuICAgICAgICAgICAgICAgIGkgPSBwdGlkIDw8IDE7XG4gICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHByZXZfeCA9IHByZXZfeHlbaV0gKiBsZXZfc2M7XG4gICAgICAgICAgICAgICAgcHJldl95ID0gcHJldl94eVtqXSAqIGxldl9zYztcblxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSBtYXhfbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gcHJldl94O1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBwcmV2X3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY3Vycl94eVtpXSAqIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gY3Vycl94eVtqXSAqIDIuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3Vycl94eVtpXSA9IG5leHRfeDtcbiAgICAgICAgICAgICAgICBjdXJyX3h5W2pdID0gbmV4dF95O1xuXG4gICAgICAgICAgICAgICAgcHJldl94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIHByZXZfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBpcHJldl94ID0gcHJldl94IHwgMDtcbiAgICAgICAgICAgICAgICBpcHJldl95ID0gcHJldl95IHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIGJvcmRlciBjaGVja1xuICAgICAgICAgICAgICAgIHggPSAoaXByZXZfeCA8PSBicmRfdGwpIHwgKGlwcmV2X3ggPj0gYnJkX3IpIHwgKGlwcmV2X3kgPD0gYnJkX3RsKSB8IChpcHJldl95ID49IGJyZF9iKTtcbiAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEgPSBwcmV2X3ggLSBpcHJldl94O1xuICAgICAgICAgICAgICAgIGIgPSBwcmV2X3kgLSBpcHJldl95O1xuICAgICAgICAgICAgICAgIGl3MDAgPSAoKCgxLjAgLSBhKSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzAxID0gKChhICogKDEuMCAtIGIpICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcxMSA9IChXX0JJVFMxNF8gLSBpdzAwIC0gaXcwMSAtIGl3MTApO1xuXG4gICAgICAgICAgICAgICAgQTExID0gMC4wLCBBMTIgPSAwLjAsIEEyMiA9IDAuMDtcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgdGhlIHBhdGNoIGZyb20gdGhlIGZpcnN0IGltYWdlLCBjb21wdXRlIGNvdmFyaWF0aW9uIG1hdHJpeCBvZiBkZXJpdmF0aXZlc1xuICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA9ICgoeSArIGlwcmV2X3kpICogbHcgKyBpcHJldl94KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGRzcmMgPSBzcmMgPDwgMTtcblxuICAgICAgICAgICAgICAgICAgICBpcHRyID0gKHkgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXB0ciA9IGlwdHIgPDwgMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsrc3JjLCArK2lwdHIsIGRzcmMgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX3ByZXZbc3JjXSkgKiBpdzAwICsgKGltZ19wcmV2W3NyYyArIDFdKSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfcHJldltzcmMgKyBsd10pICogaXcxMCArIChpbWdfcHJldltzcmMgKyBsdyArIDFdKSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpeHZhbCA9IChkZXJpdl9sZXZbZHNyY10gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAyXSAqIGl3MDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXBdICogaXcxMCArIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAyXSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoKChpeHZhbCkgKyBXX0JJVFM0MSkgPj4gKFdfQklUUzQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoZGVyaXZfbGV2W2RzcmMgKyAxXSAqIGl3MDAgKyBkZXJpdl9sZXZbZHNyYyArIDNdICogaXcwMSArIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAxXSAqIGl3MTAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAzXSAqIGl3MTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoKChpeXZhbCkgKyBXX0JJVFM0MSkgPj4gKFdfQklUUzQpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXdpbl9idWZbaXB0cl0gPSBpdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl4dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl5dmFsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBMTEgKz0gaXh2YWwgKiBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEExMiArPSBpeHZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgQTIyICs9IGl5dmFsICogaXl2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBBMTEgKj0gRkxUX1NDQUxFOyBBMTIgKj0gRkxUX1NDQUxFOyBBMjIgKj0gRkxUX1NDQUxFO1xuXG4gICAgICAgICAgICAgICAgRCA9IEExMSAqIEEyMiAtIEExMiAqIEExMjtcbiAgICAgICAgICAgICAgICBtaW5fZWlnID0gKEEyMiArIEExMSAtIE1hdGguc3FydCgoQTExIC0gQTIyKSAqIChBMTEgLSBBMjIpICsgNC4wICogQTEyICogQTEyKSkgLyB3aW5fYXJlYTI7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluX2VpZyA8IG1pbl9laWdlbl90aHJlc2hvbGQgfHwgRCA8IEZMVF9FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEQgPSAxLjAgLyBEO1xuXG4gICAgICAgICAgICAgICAgbmV4dF94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIG5leHRfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3ggPSAwLjA7XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpdGVyID0gMDsgaXRlciA8IG1heF9pdGVyOyArK2l0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5leHRfeCA9IG5leHRfeCB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3kgPSBuZXh0X3kgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHggPSAoaW5leHRfeCA8PSBicmRfdGwpIHwgKGluZXh0X3ggPj0gYnJkX3IpIHwgKGluZXh0X3kgPD0gYnJkX3RsKSB8IChpbmV4dF95ID49IGJyZF9iKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNbcHRpZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhID0gbmV4dF94IC0gaW5leHRfeDtcbiAgICAgICAgICAgICAgICAgICAgYiA9IG5leHRfeSAtIGluZXh0X3k7XG4gICAgICAgICAgICAgICAgICAgIGl3MDAgPSAoKCgxLjAgLSBhKSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaXcxMCA9ICgoKDEuMCAtIGEpICogYiAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaXcxMSA9IChXX0JJVFMxNF8gLSBpdzAwIC0gaXcwMSAtIGl3MTApO1xuICAgICAgICAgICAgICAgICAgICBiMSA9IDAuMCwgYjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHdpbl9zaXplOyArK3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpwdHIgPSAoKHkgKyBpbmV4dF95KSAqIGx3ICsgaW5leHRfeCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpcHRyID0gKHkgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2luX3NpemU7ICsreCwgKytqcHRyLCArK2lwdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID0gKChpbWdfbmV4dFtqcHRyXSkgKiBpdzAwICsgKGltZ19uZXh0W2pwdHIgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGltZ19uZXh0W2pwdHIgKyBsd10pICogaXcxMCArIChpbWdfbmV4dFtqcHRyICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID0gKCgoaXZhbCkgKyBXX0JJVFMxbTUxKSA+PiAoV19CSVRTMW01KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9IChpdmFsIC0gaXdpbl9idWZbaXB0cl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjEgKz0gaXZhbCAqIGRlcml2X2l3aW5bZGlwdHIrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjIgKz0gaXZhbCAqIGRlcml2X2l3aW5bZGlwdHIrK107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBiMSAqPSBGTFRfU0NBTEU7XG4gICAgICAgICAgICAgICAgICAgIGIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgICAgICBkZWx0YV94ID0gKChBMTIgKiBiMiAtIEEyMiAqIGIxKSAqIEQpO1xuICAgICAgICAgICAgICAgICAgICBkZWx0YV95ID0gKChBMTIgKiBiMSAtIEExMSAqIGIyKSAqIEQpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCArPSBkZWx0YV94O1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgKz0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtpXSA9IG5leHRfeCArIGhhbGZfd2luO1xuICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2pdID0gbmV4dF95ICsgaGFsZl93aW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhX3ggKiBkZWx0YV94ICsgZGVsdGFfeSAqIGRlbHRhX3kgPD0gZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVyID4gMCAmJiBNYXRoLmFicyhkZWx0YV94ICsgcHJldl9kZWx0YV94KSA8IDAuMDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGRlbHRhX3kgKyBwcmV2X2RlbHRhX3kpIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtpXSAtPSBkZWx0YV94ICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSAtPSBkZWx0YV95ICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3ggPSBkZWx0YV94O1xuICAgICAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3kgPSBkZWx0YV95O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gcG9pbnRzIGxvb3BcbiAgICAgICAgfSAvLyBsZXZlbHMgbG9vcFxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpd2luX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZGVyaXZfaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2xldl9ub2RlKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsLTMsIDksNS8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLFxuICAgIDQsMiwgNywtMTIvKm1lYW4gKDEuMTI0NjFlLTA1KSwgY29ycmVsYXRpb24gKDAuMDQzNzU4NCkqLyxcbiAgICAtMTEsOSwgLTgsMi8qbWVhbiAoMy4zNzM4MmUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjE3NDA5KSovLFxuICAgIDcsLTEyLCAxMiwtMTMvKm1lYW4gKDUuNjIzMDNlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYzNjk3NykqLyxcbiAgICAyLC0xMywgMiwxMi8qbWVhbiAoMC4wMDAxMzQ5NTMpLCBjb3JyZWxhdGlvbiAoMC4wODUwOTkpKi8sXG4gICAgMSwtNywgMSw2LyptZWFuICgwLjAwMDUyODU2NSksIGNvcnJlbGF0aW9uICgwLjA4NTcxNzUpKi8sXG4gICAgLTIsLTEwLCAtMiwtNC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsLTEzLCAtMTEsLTgvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sXG4gICAgLTEzLC0zLCAtMTIsLTkvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLFxuICAgIDEwLDQsIDExLDkvKm1lYW4gKDAuMTIyMDY1KSwgY29ycmVsYXRpb24gKDAuMDkzMjg1KSovLFxuICAgIC0xMywtOCwgLTgsLTkvKm1lYW4gKDAuMTYyNzg3KSwgY29ycmVsYXRpb24gKDAuMDk0Mjc0OCkqLyxcbiAgICAtMTEsNywgLTksMTIvKm1lYW4gKDAuMjE1NjEpLCBjb3JyZWxhdGlvbiAoMC4wOTc0NDM4KSovLFxuICAgIDcsNywgMTIsNi8qbWVhbiAoMC4xNjA1ODMpLCBjb3JyZWxhdGlvbiAoMC4xMzAwNjQpKi8sXG4gICAgLTQsLTUsIC0zLDAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywyLCAtMTIsLTMvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sXG4gICAgLTksMCwgLTcsNS8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sXG4gICAgMTIsLTYsIDEyLC0xLyptZWFuICgwLjA2NzYyMjYpLCBjb3JyZWxhdGlvbiAoMC4xNjY4OSkqLyxcbiAgICAtMyw2LCAtMiwxMi8qbWVhbiAoMC4xNjY4NDcpLCBjb3JyZWxhdGlvbiAoMC4xNzE2ODIpKi8sXG4gICAgLTYsLTEzLCAtNCwtOC8qbWVhbiAoMC4xMDEyMTUpLCBjb3JyZWxhdGlvbiAoMC4xNzk3MTYpKi8sXG4gICAgMTEsLTEzLCAxMiwtOC8qbWVhbiAoMC4yMDA2NDEpLCBjb3JyZWxhdGlvbiAoMC4xOTIyNzkpKi8sXG4gICAgNCw3LCA1LDEvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLFxuICAgIDUsLTMsIDEwLC0zLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLyxcbiAgICAzLC03LCA2LDEyLyptZWFuICgwLjA3MDk5NjQpLCBjb3JyZWxhdGlvbiAoMC4yMTA4NzIpKi8sXG4gICAgLTgsLTcsIC02LC0yLyptZWFuICgwLjA5Mzk4MzQpLCBjb3JyZWxhdGlvbiAoMC4yMTI1ODkpKi8sXG4gICAgLTIsMTEsIC0xLC0xMC8qbWVhbiAoMC4xMjc3NzgpLCBjb3JyZWxhdGlvbiAoMC4yMDg2NikqLyxcbiAgICAtMTMsMTIsIC04LDEwLyptZWFuICgwLjE0NzgzKSwgY29ycmVsYXRpb24gKDAuMjA2MzU2KSovLFxuICAgIC03LDMsIC01LC0zLyptZWFuICgwLjE4MjE0MSksIGNvcnJlbGF0aW9uICgwLjE5ODk0MikqLyxcbiAgICAtNCwyLCAtMyw3LyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLFxuICAgIC0xMCwtMTIsIC02LDExLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sXG4gICAgNSwtMTIsIDYsLTcvKm1lYW4gKDAuMjIyMzEyKSwgY29ycmVsYXRpb24gKDAuMjMzMjQpKi8sXG4gICAgNSwtNiwgNywtMS8qbWVhbiAoMC4yMjkwODIpLCBjb3JyZWxhdGlvbiAoMC4yMzM4OSkqLyxcbiAgICAxLDAsIDQsLTUvKm1lYW4gKDAuMjQxNTc3KSwgY29ycmVsYXRpb24gKDAuMjE1Mjg2KSovLFxuICAgIDksMTEsIDExLC0xMy8qbWVhbiAoMC4wMDMzODUwNyksIGNvcnJlbGF0aW9uICgwLjI1MTM3MykqLyxcbiAgICA0LDcsIDQsMTIvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsLTEsIDQsNC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sXG4gICAgLTQsLTEyLCAtMiw3LyptZWFuICgwLjE4Mjc3MSksIGNvcnJlbGF0aW9uICgwLjI0NDg2NykqLyxcbiAgICAtOCwtNSwgLTcsLTEwLyptZWFuICgwLjE4Njg5OCksIGNvcnJlbGF0aW9uICgwLjIzOTAxKSovLFxuICAgIDQsMTEsIDksMTIvKm1lYW4gKDAuMjI2MjI2KSwgY29ycmVsYXRpb24gKDAuMjU4MjU1KSovLFxuICAgIDAsLTgsIDEsLTEzLyptZWFuICgwLjA4OTc4ODYpLCBjb3JyZWxhdGlvbiAoMC4yNzQ4MjcpKi8sXG4gICAgLTEzLC0yLCAtOCwyLyptZWFuICgwLjE0ODc3NCksIGNvcnJlbGF0aW9uICgwLjI4MDY1KSovLFxuICAgIC0zLC0yLCAtMiwzLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLyxcbiAgICAtNiw5LCAtNCwtOS8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sXG4gICAgOCwxMiwgMTAsNy8qbWVhbiAoMC4yMjUzMzcpLCBjb3JyZWxhdGlvbiAoMC4yODI4NTEpKi8sXG4gICAgMCw5LCAxLDMvKm1lYW4gKDAuMjI2Njg3KSwgY29ycmVsYXRpb24gKDAuMjc4NzM0KSovLFxuICAgIDcsLTUsIDExLC0xMC8qbWVhbiAoMC4wMDY5Mzg4MiksIGNvcnJlbGF0aW9uICgwLjMwNTE2MSkqLyxcbiAgICAtMTMsLTYsIC0xMSwwLyptZWFuICgwLjAyMjcyODMpLCBjb3JyZWxhdGlvbiAoMC4zMDAxODEpKi8sXG4gICAgMTAsNywgMTIsMS8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwtMywgLTYsMTIvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLFxuICAgIDEwLC05LCAxMiwtNC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sXG4gICAgLTEzLDgsIC04LC0xMi8qbWVhbiAoMC4xNDkyMDIpLCBjb3JyZWxhdGlvbiAoMC4zMDg5MTgpKi8sXG4gICAgLTEzLDAsIC04LC00LyptZWFuICgwLjE2MDkwOSksIGNvcnJlbGF0aW9uICgwLjMxMDAxMykqLyxcbiAgICAzLDMsIDcsOC8qbWVhbiAoMC4xNzc3NTUpLCBjb3JyZWxhdGlvbiAoMC4zMDkzOTQpKi8sXG4gICAgNSw3LCAxMCwtNy8qbWVhbiAoMC4yMTIzMzcpLCBjb3JyZWxhdGlvbiAoMC4zMTAzMTUpKi8sXG4gICAgLTEsNywgMSwtMTIvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLFxuICAgIDMsLTEwLCA1LDYvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLFxuICAgIDIsLTQsIDMsLTEwLyptZWFuICgwLjAwNDk0ODI3KSwgY29ycmVsYXRpb24gKDAuMzQ0OTQ4KSovLFxuICAgIC0xMywwLCAtMTMsNS8qbWVhbiAoMC4wNTQ5MTQ1KSwgY29ycmVsYXRpb24gKDAuMzQ0Njc1KSovLFxuICAgIC0xMywtNywgLTEyLDEyLyptZWFuICgwLjEwMzM4NSksIGNvcnJlbGF0aW9uICgwLjM0MjcxNSkqLyxcbiAgICAtMTMsMywgLTExLDgvKm1lYW4gKDAuMTM0MjIyKSwgY29ycmVsYXRpb24gKDAuMzIyOTIyKSovLFxuICAgIC03LDEyLCAtNCw3LyptZWFuICgwLjE1MzI4NCksIGNvcnJlbGF0aW9uICgwLjMzNzA2MSkqLyxcbiAgICA2LC0xMCwgMTIsOC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sXG4gICAgLTksLTEsIC03LC02LyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLFxuICAgIC0yLC01LCAwLDEyLyptZWFuICgwLjIwMTUxOCksIGNvcnJlbGF0aW9uICgwLjM0MDYzNSkqLyxcbiAgICAtMTIsNSwgLTcsNS8qbWVhbiAoMC4yMDc4MDUpLCBjb3JyZWxhdGlvbiAoMC4zMzU2MzEpKi8sXG4gICAgMywtMTAsIDgsLTEzLyptZWFuICgwLjIyNDQzOCksIGNvcnJlbGF0aW9uICgwLjM0NTA0KSovLFxuICAgIC03LC03LCAtNCw1LyptZWFuICgwLjIzOTM2MSksIGNvcnJlbGF0aW9uICgwLjMzODA1MykqLyxcbiAgICAtMywtMiwgLTEsLTcvKm1lYW4gKDAuMjQwNzQ0KSwgY29ycmVsYXRpb24gKDAuMzQ0MzIyKSovLFxuICAgIDIsOSwgNSwtMTEvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sXG4gICAgLTExLC0xMywgLTUsLTEzLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLyxcbiAgICAtMSw2LCAwLC0xLyptZWFuICgwLjI0NzU3MSksIGNvcnJlbGF0aW9uICgwLjM0MzY4NCkqLyxcbiAgICA1LC0zLCA1LDIvKm1lYW4gKDAuMDAwNjk3MjU2KSwgY29ycmVsYXRpb24gKDAuMzU3MjY1KSovLFxuICAgIC00LC0xMywgLTQsMTIvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC4zNzM4MjcpKi8sXG4gICAgLTksLTYsIC05LDYvKm1lYW4gKDAuMDEyNjg1NiksIGNvcnJlbGF0aW9uICgwLjM3MzkzOCkqLyxcbiAgICAtMTIsLTEwLCAtOCwtNC8qbWVhbiAoMC4wMTUyNDk3KSwgY29ycmVsYXRpb24gKDAuMzY0MjM3KSovLFxuICAgIDEwLDIsIDEyLC0zLyptZWFuICgwLjAyOTk5MzMpLCBjb3JyZWxhdGlvbiAoMC4zNDUyOTIpKi8sXG4gICAgNywxMiwgMTIsMTIvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLyxcbiAgICAtNywtMTMsIC02LDUvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLyxcbiAgICAtNCw5LCAtMyw0LyptZWFuICgwLjA5OTg2NSksIGNvcnJlbGF0aW9uICgwLjM3MjI3NikqLyxcbiAgICA3LC0xLCAxMiwyLyptZWFuICgwLjExNzA4MyksIGNvcnJlbGF0aW9uICgwLjM2NDUyOSkqLyxcbiAgICAtNyw2LCAtNSwxLyptZWFuICgwLjEyNjEyNSksIGNvcnJlbGF0aW9uICgwLjM2OTYwNikqLyxcbiAgICAtMTMsMTEsIC0xMiw1LyptZWFuICgwLjEzMDM2NCksIGNvcnJlbGF0aW9uICgwLjM1ODUwMikqLyxcbiAgICAtMyw3LCAtMiwtNi8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC4zNzU1MzEpKi8sXG4gICAgNywtOCwgMTIsLTcvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLFxuICAgIC0xMywtNywgLTExLC0xMi8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sXG4gICAgMSwtMywgMTIsMTIvKm1lYW4gKDAuMTgzMzc4KSwgY29ycmVsYXRpb24gKDAuMzcxOTE2KSovLFxuICAgIDIsLTYsIDMsMC8qbWVhbiAoMC4yMjg3MTEpLCBjb3JyZWxhdGlvbiAoMC4zNzE3NjEpKi8sXG4gICAgLTQsMywgLTIsLTEzLyptZWFuICgwLjI0NzIxMSksIGNvcnJlbGF0aW9uICgwLjM2NDA2MykqLyxcbiAgICAtMSwtMTMsIDEsOS8qbWVhbiAoMC4yNDkzMjUpLCBjb3JyZWxhdGlvbiAoMC4zNzgxMzkpKi8sXG4gICAgNywxLCA4LC02LyptZWFuICgwLjAwMDY1MjI3MiksIGNvcnJlbGF0aW9uICgwLjQxMTY4MikqLyxcbiAgICAxLC0xLCAzLDEyLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLFxuICAgIDksMSwgMTIsNi8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLFxuICAgIC0xLC05LCAtMSwzLyptZWFuICgwLjAzNjQ0ODUpLCBjb3JyZWxhdGlvbiAoMC40MTA3NTIpKi8sXG4gICAgLTEzLC0xMywgLTEwLDUvKm1lYW4gKDAuMDM3NjA2OCksIGNvcnJlbGF0aW9uICgwLjM5ODM3NCkqLyxcbiAgICA3LDcsIDEwLDEyLyptZWFuICgwLjA0MjQyMDIpLCBjb3JyZWxhdGlvbiAoMC40MDU2NjMpKi8sXG4gICAgMTIsLTUsIDEyLDkvKm1lYW4gKDAuMDk0MjY0NSksIGNvcnJlbGF0aW9uICgwLjQxMDQyMikqLyxcbiAgICA2LDMsIDcsMTEvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LC0xMywgNiwxMC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sXG4gICAgMiwtMTIsIDIsMy8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC40MTYwNzYpKi8sXG4gICAgMyw4LCA0LC02LyptZWFuICgwLjE2NTA4MSksIGNvcnJlbGF0aW9uICgwLjQxNzU2OSkqLyxcbiAgICAyLDYsIDEyLC0xMy8qbWVhbiAoMC4xNzE4NzQpLCBjb3JyZWxhdGlvbiAoMC40MDg0NzEpKi8sXG4gICAgOSwtMTIsIDEwLDMvKm1lYW4gKDAuMTc1MTQ2KSwgY29ycmVsYXRpb24gKDAuNDEyOTYpKi8sXG4gICAgLTgsNCwgLTcsOS8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLDEyLCAtNCwtNi8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sXG4gICAgMSwxMiwgMiwtOC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sXG4gICAgNiwtOSwgNywtNC8qbWVhbiAoMC4xOTI2NjgpLCBjb3JyZWxhdGlvbiAoMC4zOTQ3NzEpKi8sXG4gICAgMiwzLCAzLC0yLyptZWFuICgwLjIwMDE1NyksIGNvcnJlbGF0aW9uICgwLjQwODMwMykqLyxcbiAgICA2LDMsIDExLDAvKm1lYW4gKDAuMjA0NTg4KSwgY29ycmVsYXRpb24gKDAuNDExNzYyKSovLFxuICAgIDMsLTMsIDgsLTgvKm1lYW4gKDAuMjA1OTA0KSwgY29ycmVsYXRpb24gKDAuNDE2Mjk0KSovLFxuICAgIDcsOCwgOSwzLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLyxcbiAgICAtMTEsLTUsIC02LC00LyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLyxcbiAgICAtMTAsMTEsIC01LDEwLyptZWFuICgwLjI0NzY3MiksIGNvcnJlbGF0aW9uICgwLjQxMzM5MikqLyxcbiAgICAtNSwtOCwgLTMsMTIvKm1lYW4gKDAuMjQ3NzQpLCBjb3JyZWxhdGlvbiAoMC40MTE0MTYpKi8sXG4gICAgLTEwLDUsIC05LDAvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC40NTQwMDMpKi8sXG4gICAgOCwtMSwgMTIsLTYvKm1lYW4gKDAuMDI5MzYzNSksIGNvcnJlbGF0aW9uICgwLjQ1NTM2OCkqLyxcbiAgICA0LC02LCA2LC0xMS8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwxMiwgLTgsNy8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLFxuICAgIDQsLTIsIDYsNy8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sXG4gICAgLTIsMCwgLTIsMTIvKm1lYW4gKDAuMDUyNTk3OCksIGNvcnJlbGF0aW9uICgwLjQ0MzM4KSovLFxuICAgIC01LC04LCAtNSwyLyptZWFuICgwLjA2Mjk2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTcwOTYpKi8sXG4gICAgNywtNiwgMTAsMTIvKm1lYW4gKDAuMDY1Mzg0NiksIGNvcnJlbGF0aW9uICgwLjQ0NTYyMykqLyxcbiAgICAtOSwtMTMsIC04LC04LyptZWFuICgwLjA4NTg3NDkpLCBjb3JyZWxhdGlvbiAoMC40NDk3ODkpKi8sXG4gICAgLTUsLTEzLCAtNSwtMi8qbWVhbiAoMC4xMjI0MDIpLCBjb3JyZWxhdGlvbiAoMC40NTAyMDEpKi8sXG4gICAgOCwtOCwgOSwtMTMvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLFxuICAgIC05LC0xMSwgLTksMC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sXG4gICAgMSwtOCwgMSwtMi8qbWVhbiAoMC4xMzI0NjcpLCBjb3JyZWxhdGlvbiAoMC40NDAxMzMpKi8sXG4gICAgNywtNCwgOSwxLyptZWFuICgwLjEzMjY5MiksIGNvcnJlbGF0aW9uICgwLjQ1NCkqLyxcbiAgICAtMiwxLCAtMSwtNC8qbWVhbiAoMC4xMzU2OTUpLCBjb3JyZWxhdGlvbiAoMC40NTU3MzkpKi8sXG4gICAgMTEsLTYsIDEyLC0xMS8qbWVhbiAoMC4xNDI5MDQpLCBjb3JyZWxhdGlvbiAoMC40NDYxMTQpKi8sXG4gICAgLTEyLC05LCAtNiw0LyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLyxcbiAgICAzLDcsIDcsMTIvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLFxuICAgIDUsNSwgMTAsOC8qbWVhbiAoMC4xNTI5MDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMzYpKi8sXG4gICAgMCwtNCwgMiw4LyptZWFuICgwLjE2NzA4MyksIGNvcnJlbGF0aW9uICgwLjQ1OTMxNSkqLyxcbiAgICAtOSwxMiwgLTUsLTEzLyptZWFuICgwLjE3MzIzNCksIGNvcnJlbGF0aW9uICgwLjQ1NDcwNikqLyxcbiAgICAwLDcsIDIsMTIvKm1lYW4gKDAuMTgzMTIpLCBjb3JyZWxhdGlvbiAoMC40MzM4NTUpKi8sXG4gICAgLTEsMiwgMSw3LyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLyxcbiAgICA1LDExLCA3LC05LyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLyxcbiAgICAzLDUsIDYsLTgvKm1lYW4gKDAuMTg4OTY4KSwgY29ycmVsYXRpb24gKDAuNDU1ODA4KSovLFxuICAgIC0xMywtNCwgLTgsOS8qbWVhbiAoMC4xOTE2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTkxMjgpKi8sXG4gICAgLTUsOSwgLTMsLTMvKm1lYW4gKDAuMTkzMTk2KSwgY29ycmVsYXRpb24gKDAuNDU4MzY0KSovLFxuICAgIC00LC03LCAtMywtMTIvKm1lYW4gKDAuMTk2NTM2KSwgY29ycmVsYXRpb24gKDAuNDU1NzgyKSovLFxuICAgIDYsNSwgOCwwLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsNiwgLTYsMTIvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLFxuICAgIC0xMyw2LCAtNSwtMi8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sXG4gICAgMSwtMTAsIDMsMTAvKm1lYW4gKDAuMjExNzE4KSwgY29ycmVsYXRpb24gKDAuNDQwNjA2KSovLFxuICAgIDQsMSwgOCwtNC8qbWVhbiAoMC4yMTMwMzQpLCBjb3JyZWxhdGlvbiAoMC40NDMxNzcpKi8sXG4gICAgLTIsLTIsIDIsLTEzLyptZWFuICgwLjIzNDMzNCksIGNvcnJlbGF0aW9uICgwLjQ1NTMwNCkqLyxcbiAgICAyLC0xMiwgMTIsMTIvKm1lYW4gKDAuMjM1Njg0KSwgY29ycmVsYXRpb24gKDAuNDQzNDM2KSovLFxuICAgIC0yLC0xMywgMCwtNi8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sXG4gICAgNCwxLCA5LDMvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sXG4gICAgLTYsLTEwLCAtMywtNS8qbWVhbiAoMC4yNDg0NTkpLCBjb3JyZWxhdGlvbiAoMC40Mzk2MjEpKi8sXG4gICAgLTMsLTEzLCAtMSwxLyptZWFuICgwLjI0OTUwNSksIGNvcnJlbGF0aW9uICgwLjQ1NjY2NikqLyxcbiAgICA3LDUsIDEyLC0xMS8qbWVhbiAoMC4wMDExOTIwOCksIGNvcnJlbGF0aW9uICgwLjQ5NTQ2NikqLyxcbiAgICA0LC0yLCA1LC03LyptZWFuICgwLjAwMzcyMjQ1KSwgY29ycmVsYXRpb24gKDAuNDg0MjE0KSovLFxuICAgIC0xMyw5LCAtOSwtNS8qbWVhbiAoMC4wMDc0MTExNiksIGNvcnJlbGF0aW9uICgwLjQ5OTg1NCkqLyxcbiAgICA3LDEsIDgsNi8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLFxuICAgIDcsLTgsIDcsNi8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLFxuICAgIC03LC00LCAtNywxLyptZWFuICgwLjAyMzM4MDYpLCBjb3JyZWxhdGlvbiAoMC40OTY1NjgpKi8sXG4gICAgLTgsMTEsIC03LC04LyptZWFuICgwLjAyMzY1MDUpLCBjb3JyZWxhdGlvbiAoMC40ODk3MTkpKi8sXG4gICAgLTEzLDYsIC0xMiwtOC8qbWVhbiAoMC4wMjY4NzgxKSwgY29ycmVsYXRpb24gKDAuNTAzNDg3KSovLFxuICAgIDIsNCwgMyw5LyptZWFuICgwLjAzMjMzMjQpLCBjb3JyZWxhdGlvbiAoMC41MDE5MzgpKi8sXG4gICAgMTAsLTUsIDEyLDMvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwtNSwgLTYsNy8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLFxuICAgIDgsLTMsIDksLTgvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLyxcbiAgICAyLC0xMiwgMiw4LyptZWFuICgwLjA2MTY2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTY2NDIpKi8sXG4gICAgLTExLC0yLCAtMTAsMy8qbWVhbiAoMC4wNjI3NzU1KSwgY29ycmVsYXRpb24gKDAuNDk4NTYzKSovLFxuICAgIC0xMiwtMTMsIC03LC05LyptZWFuICgwLjA4Mjk2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTU0OTEpKi8sXG4gICAgLTExLDAsIC0xMCwtNS8qbWVhbiAoMC4wODQzMzQyKSwgY29ycmVsYXRpb24gKDAuNDg3MTQ2KSovLFxuICAgIDUsLTMsIDExLDgvKm1lYW4gKDAuMDkyOTkzNyksIGNvcnJlbGF0aW9uICgwLjUwMjMxNSkqLyxcbiAgICAtMiwtMTMsIC0xLDEyLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLFxuICAgIC0xLC04LCAwLDkvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLFxuICAgIC0xMywtMTEsIC0xMiwtNS8qbWVhbiAoMC4xMzYyNjkpLCBjb3JyZWxhdGlvbiAoMC40OTg3NzEpKi8sXG4gICAgLTEwLC0yLCAtMTAsMTEvKm1lYW4gKDAuMTQyMTczKSwgY29ycmVsYXRpb24gKDAuNDk4NzE0KSovLFxuICAgIC0zLDksIC0yLC0xMy8qbWVhbiAoMC4xNDQxNDEpLCBjb3JyZWxhdGlvbiAoMC40OTE5NzMpKi8sXG4gICAgMiwtMywgMywyLyptZWFuICgwLjE0ODkyKSwgY29ycmVsYXRpb24gKDAuNTAwNzgyKSovLFxuICAgIC05LC0xMywgLTQsMC8qbWVhbiAoMC4xNTAzNzEpLCBjb3JyZWxhdGlvbiAoMC40OTgyMTEpKi8sXG4gICAgLTQsNiwgLTMsLTEwLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLyxcbiAgICAtNCwxMiwgLTIsLTcvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLFxuICAgIC02LC0xMSwgLTQsOS8qbWVhbiAoMC4xNTc0OSksIGNvcnJlbGF0aW9uICgwLjQ5OTIyMikqLyxcbiAgICA2LC0zLCA2LDExLyptZWFuICgwLjE1OTIxMSksIGNvcnJlbGF0aW9uICgwLjUwMzgyMSkqLyxcbiAgICAtMTMsMTEsIC01LDUvKm1lYW4gKDAuMTYyNDI3KSwgY29ycmVsYXRpb24gKDAuNTAxOTA3KSovLFxuICAgIDExLDExLCAxMiw2LyptZWFuICgwLjE2NjUyKSwgY29ycmVsYXRpb24gKDAuNDk3NjMyKSovLFxuICAgIDcsLTUsIDEyLC0yLyptZWFuICgwLjE2OTE0MSksIGNvcnJlbGF0aW9uICgwLjQ4NDQ3NCkqLyxcbiAgICAtMSwxMiwgMCw3LyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLyxcbiAgICAtNCwtOCwgLTMsLTIvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLFxuICAgIC03LDEsIC02LDcvKm1lYW4gKDAuMTc1KSwgY29ycmVsYXRpb24gKDAuNTAwMDI0KSovLFxuICAgIC0xMywtMTIsIC04LC0xMy8qbWVhbiAoMC4xNzU4NjYpLCBjb3JyZWxhdGlvbiAoMC40OTc1MjMpKi8sXG4gICAgLTcsLTIsIC02LC04LyptZWFuICgwLjE3ODI3MyksIGNvcnJlbGF0aW9uICgwLjUwMTg1NCkqLyxcbiAgICAtOCw1LCAtNiwtOS8qbWVhbiAoMC4xODExMDcpLCBjb3JyZWxhdGlvbiAoMC40OTQ4ODgpKi8sXG4gICAgLTUsLTEsIC00LDUvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMyw3LCAtOCwxMC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sXG4gICAgMSw1LCA1LC0xMy8qbWVhbiAoMC4xOTk3MyksIGNvcnJlbGF0aW9uICgwLjQ5OTc1OSkqLyxcbiAgICAxLDAsIDEwLC0xMy8qbWVhbiAoMC4yMDQ0NjUpLCBjb3JyZWxhdGlvbiAoMC40OTg3MykqLyxcbiAgICA5LDEyLCAxMCwtMS8qbWVhbiAoMC4yMDkzMzQpLCBjb3JyZWxhdGlvbiAoMC40OTA2MykqLyxcbiAgICA1LC04LCAxMCwtOS8qbWVhbiAoMC4yMTExMzQpLCBjb3JyZWxhdGlvbiAoMC41MDMwMTEpKi8sXG4gICAgLTEsMTEsIDEsLTEzLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwtMywgLTYsMi8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sXG4gICAgLTEsLTEwLCAxLDEyLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLyxcbiAgICAtMTMsMSwgLTgsLTEwLyptZWFuICgwLjIxMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5Nzg2KSovLFxuICAgIDgsLTExLCAxMCwtNi8qbWVhbiAoMC4yMTQxNTkpLCBjb3JyZWxhdGlvbiAoMC40ODgyNDYpKi8sXG4gICAgMiwtMTMsIDMsLTYvKm1lYW4gKDAuMjE2OTkzKSwgY29ycmVsYXRpb24gKDAuNTAyODcpKi8sXG4gICAgNywtMTMsIDEyLC05LyptZWFuICgwLjIyMzYzOSksIGNvcnJlbGF0aW9uICgwLjQ3MDUwMikqLyxcbiAgICAtMTAsLTEwLCAtNSwtNy8qbWVhbiAoMC4yMjQwODkpLCBjb3JyZWxhdGlvbiAoMC41MDA4NTIpKi8sXG4gICAgLTEwLC04LCAtOCwtMTMvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLFxuICAgIDQsLTYsIDgsNS8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLyxcbiAgICAzLDEyLCA4LC0xMy8qbWVhbiAoMC4yMzMzNzgpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjUpKi8sXG4gICAgLTQsMiwgLTMsLTMvKm1lYW4gKDAuMjM0MzIzKSwgY29ycmVsYXRpb24gKDAuNDc2NjkyKSovLFxuICAgIDUsLTEzLCAxMCwtMTIvKm1lYW4gKDAuMjM2MzkyKSwgY29ycmVsYXRpb24gKDAuNDc1NDYyKSovLFxuICAgIDQsLTEzLCA1LC0xLyptZWFuICgwLjIzNjg0MiksIGNvcnJlbGF0aW9uICgwLjUwNDEzMikqLyxcbiAgICAtOSw5LCAtNCwzLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLyxcbiAgICAwLDMsIDMsLTkvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sXG4gICAgLTEyLDEsIC02LDEvKm1lYW4gKDAuMjQzMjk3KSwgY29ycmVsYXRpb24gKDAuNDg5NDQ3KSovLFxuICAgIDMsMiwgNCwtOC8qbWVhbiAoMC4wMDE1NTE5NiksIGNvcnJlbGF0aW9uICgwLjU1MzQ5NikqLyxcbiAgICAtMTAsLTEwLCAtMTAsOS8qbWVhbiAoMC4wMDIzOTU0MSksIGNvcnJlbGF0aW9uICgwLjU0Mjk3KSovLFxuICAgIDgsLTEzLCAxMiwxMi8qbWVhbiAoMC4wMDM0NDEzKSwgY29ycmVsYXRpb24gKDAuNTQ0MzYxKSovLFxuICAgIC04LC0xMiwgLTYsLTUvKm1lYW4gKDAuMDAzNTY1KSwgY29ycmVsYXRpb24gKDAuNTUxMjI1KSovLFxuICAgIDIsMiwgMyw3LyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsNiwgMTEsLTgvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sXG4gICAgNiw4LCA4LC0xMi8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLFxuICAgIC03LDEwLCAtNiw1LyptZWFuICgwLjAxMDIyMjcpLCBjb3JyZWxhdGlvbiAoMC41MzM2MzUpKi8sXG4gICAgLTMsLTksIC0zLDkvKm1lYW4gKDAuMDExMDIxMSksIGNvcnJlbGF0aW9uICgwLjU0MzEyMSkqLyxcbiAgICAtMSwtMTMsIC0xLDUvKm1lYW4gKDAuMDExMzQ3MyksIGNvcnJlbGF0aW9uICgwLjU1MDE3MykqLyxcbiAgICAtMywtNywgLTMsNC8qbWVhbiAoMC4wMTQwOTEzKSwgY29ycmVsYXRpb24gKDAuNTU0Nzc0KSovLFxuICAgIC04LC0yLCAtOCwzLyptZWFuICgwLjAxNzA0OSksIGNvcnJlbGF0aW9uICgwLjU1NDYxKSovLFxuICAgIDQsMiwgMTIsMTIvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sXG4gICAgMiwtNSwgMywxMS8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLFxuICAgIDYsLTksIDExLC0xMy8qbWVhbiAoMC4wMjkxNjEpLCBjb3JyZWxhdGlvbiAoMC41NDYyOTUpKi8sXG4gICAgMywtMSwgNywxMi8qbWVhbiAoMC4wMzAzMDgxKSwgY29ycmVsYXRpb24gKDAuNTQ4NTk5KSovLFxuICAgIDExLC0xLCAxMiw0LyptZWFuICgwLjAzNTUxNTEpLCBjb3JyZWxhdGlvbiAoMC41MjM5NDMpKi8sXG4gICAgLTMsMCwgLTMsNi8qbWVhbiAoMC4wNDE3OTA0KSwgY29ycmVsYXRpb24gKDAuNTQzMzk1KSovLFxuICAgIDQsLTExLCA0LDEyLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwtNCwgMiwxLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sXG4gICAgLTEwLC02LCAtOCwxLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sXG4gICAgLTEzLDcsIC0xMSwxLyptZWFuICgwLjA1OTczOTEpLCBjb3JyZWxhdGlvbiAoMC41NTA1MjQpKi8sXG4gICAgLTEzLDEyLCAtMTEsLTEzLyptZWFuICgwLjA2MDg5NzQpLCBjb3JyZWxhdGlvbiAoMC41NTM4MykqLyxcbiAgICA2LDAsIDExLC0xMy8qbWVhbiAoMC4wNjUxMjYpLCBjb3JyZWxhdGlvbiAoMC41NTIwMDYpKi8sXG4gICAgMCwtMSwgMSw0LyptZWFuICgwLjA3NDIyNCksIGNvcnJlbGF0aW9uICgwLjU0NjM3MikqLyxcbiAgICAtMTMsMywgLTksLTIvKm1lYW4gKDAuMDgwODU5MiksIGNvcnJlbGF0aW9uICgwLjU1NDg3NSkqLyxcbiAgICAtOSw4LCAtNiwtMy8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLFxuICAgIC0xMywtNiwgLTgsLTIvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLyxcbiAgICA1LC05LCA4LDEwLyptZWFuICgwLjA5NDk4NDMpLCBjb3JyZWxhdGlvbiAoMC41NTQ2OTQpKi8sXG4gICAgMiw3LCAzLC05LyptZWFuICgwLjA5OTQxNTIpLCBjb3JyZWxhdGlvbiAoMC41NTA5NzkpKi8sXG4gICAgLTEsLTYsIC0xLC0xLyptZWFuICgwLjEwMDQ1KSwgY29ycmVsYXRpb24gKDAuNTUyNzE0KSovLFxuICAgIDksNSwgMTEsLTIvKm1lYW4gKDAuMTAwNjg2KSwgY29ycmVsYXRpb24gKDAuNTUyNTk0KSovLFxuICAgIDExLC0zLCAxMiwtOC8qbWVhbiAoMC4xMDEwOTEpLCBjb3JyZWxhdGlvbiAoMC41MzIzOTQpKi8sXG4gICAgMywwLCAzLDUvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLFxuICAgIC0xLDQsIDAsMTAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLFxuICAgIDMsLTYsIDQsNS8qbWVhbiAoMC4xMTA3ODUpLCBjb3JyZWxhdGlvbiAoMC41NDA0OTEpKi8sXG4gICAgLTEzLDAsIC0xMCw1LyptZWFuICgwLjExMjc5OCksIGNvcnJlbGF0aW9uICgwLjUzNjU4MikqLyxcbiAgICA1LDgsIDEyLDExLyptZWFuICgwLjExNDE4MSksIGNvcnJlbGF0aW9uICgwLjU1NTc5MykqLyxcbiAgICA4LDksIDksLTYvKm1lYW4gKDAuMTE3NDMxKSwgY29ycmVsYXRpb24gKDAuNTUzNzYzKSovLFxuICAgIDcsLTQsIDgsLTEyLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLyxcbiAgICAtMTAsNCwgLTEwLDkvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sXG4gICAgNywzLCAxMiw0LyptZWFuICgwLjEyMjU4MiksIGNvcnJlbGF0aW9uICgwLjU1NTgyNSkqLyxcbiAgICA5LC03LCAxMCwtMi8qbWVhbiAoMC4xMjQ5NzgpLCBjb3JyZWxhdGlvbiAoMC41NDk4NDYpKi8sXG4gICAgNywwLCAxMiwtMi8qbWVhbiAoMC4xMjcwMDIpLCBjb3JyZWxhdGlvbiAoMC41Mzc0NTIpKi8sXG4gICAgLTEsLTYsIDAsLTExLyptZWFuICgwLjEyNzE0OCksIGNvcnJlbGF0aW9uICgwLjU0NzQwMSkqL1xuXTsiLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgYml0X3BhdHRlcm5fMzEgZnJvbSAnLi9iaXRfcGF0dGVybl8zMS5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgcmVjdGlmeV9wYXRjaCB9IGZyb20gJy4vcmVjdGlmeV9wYXRjaC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JiIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cblxuICAgIGRlc2NyaWJlKHNyYywgY29ybmVycywgY291bnQsIGRlc2NyaXB0b3JzKSB7XG4gICAgICAgIHZhciBERVNDUl9TSVpFID0gMzI7IC8vIGJ5dGVzO1xuICAgICAgICB2YXIgaSA9IDAsIGIgPSAwLCBweCA9IDAuMCwgcHkgPSAwLjAsIGFuZ2xlID0gMC4wO1xuICAgICAgICB2YXIgdDAgPSAwLCB0MSA9IDAsIHZhbCA9IDA7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBwYXRjaF9kID0gdGhpcy5wYXRjaF9pbWcuZGF0YTtcbiAgICAgICAgdmFyIHBhdGNoX29mZiA9IDE2ICogMzIgKyAxNjsgLy8gY2VudGVyIG9mIHBhdGNoXG4gICAgICAgIHZhciBwYXR0ID0gMDtcblxuICAgICAgICBpZiAoIShkZXNjcmlwdG9ycy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSkge1xuICAgICAgICAgICAgLy8gcmVsb2NhdGUgdG8gVTggdHlwZVxuICAgICAgICAgICAgZGVzY3JpcHRvcnMudHlwZSA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNvbHMgPSBERVNDUl9TSVpFO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucm93cyA9IGNvdW50O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY2hhbm5lbCA9IDE7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucmVzaXplKERFU0NSX1NJWkUsIGNvdW50LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXNjcl9kID0gZGVzY3JpcHRvcnMuZGF0YTtcbiAgICAgICAgdmFyIGRlc2NyX29mZiA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB4ID0gY29ybmVyc1tpXS54O1xuICAgICAgICAgICAgcHkgPSBjb3JuZXJzW2ldLnk7XG4gICAgICAgICAgICBhbmdsZSA9IGNvcm5lcnNbaV0uYW5nbGU7XG5cbiAgICAgICAgICAgIHJlY3RpZnlfcGF0Y2goc3JjLCB0aGlzLnBhdGNoX2ltZywgYW5nbGUsIHB4LCBweSwgMzIsIHRoaXMuSCk7XG5cbiAgICAgICAgICAgIC8vIGRlc2NyaWJlIHRoZSBwYXRjaFxuICAgICAgICAgICAgcGF0dCA9IDA7XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgREVTQ1JfU0laRTsgKytiKSB7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsID0gKHQwIDwgdDEpIHwgMDtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDE7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAyO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMztcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDQ7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA1O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDc7XG5cbiAgICAgICAgICAgICAgICBkZXNjcl9kW2Rlc2NyX29mZiArIGJdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3Jfb2ZmICs9IERFU0NSX1NJWkU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChzcmMsIGRzdCwgYW5nbGUsIHB4LCBweSwgcHNpemUsIEgpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgdmFyIGltZ3ByYyA9IG5ldyBpbWdwcm9jKCk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3ByYy53YXJwX2FmZmluZShzcmMsIGRzdCwgSCwgMTI4KTtcbn0iLCJpbXBvcnQgaW1ncHJvYyBmcm9tICcuLi9pbWdwcm9jL2ltZ3Byb2MuanMnO1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBweXJhbWlkX3Qge1xuICAgIGNvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscyB8IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheShsZXZlbHMpO1xuICAgICAgICB2YXIgX2ltZ3Byb2MgPSBuZXcgaW1ncHJvYygpOyBcbiAgICAgICAgdGhpcy5weXJkb3duID0gX2ltZ3Byb2MucHlyZG93bjtcbiAgICB9XG5cbiAgICBhbGxvY2F0ZShzdGFydF93LCBzdGFydF9oLCBkYXRhX3R5cGUpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxldmVscztcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcgbWF0cml4X3Qoc3RhcnRfdyA+PiBpLCBzdGFydF9oID4+IGksIGRhdGFfdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZChpbnB1dCwgc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICBpZiAodHlwZW9mIHNraXBfZmlyc3RfbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgc2tpcF9maXJzdF9sZXZlbCA9IHRydWU7IH1cbiAgICAgICAgLy8ganVzdCBjb3B5IGRhdGEgdG8gZmlyc3QgbGV2ZWxcbiAgICAgICAgdmFyIGkgPSAyLCBhID0gaW5wdXQsIGIgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGlmICghc2tpcF9maXJzdF9sZXZlbCkge1xuICAgICAgICAgICAgdmFyIGogPSBpbnB1dC5jb2xzICogaW5wdXQucm93cztcbiAgICAgICAgICAgIHdoaWxlICgtLWogPj0gMCkge1xuICAgICAgICAgICAgICAgIGIuZGF0YVtqXSA9IGlucHV0LmRhdGFbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRoaXMuZGF0YVsxXTtcbiAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICBmb3IgKDsgaSA8IHRoaXMubGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyB0aGlyZF9jaGVjaywgaXNfbG9jYWxfbWF4aW1hLCBwZXJmb3JtX29uZV9wb2ludCwgbGV2X3RhYmxlX3QgfSBmcm9tICcuL3lhcGVfdXRpbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHlhcGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxldmVsX3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLnRhdSA9IDc7XG4gICAgfVxuXG4gICAgaW5pdCh3aWR0aCwgaGVpZ2h0LCByYWRpdXMsIHB5cmFtaWRfbGV2ZWxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHlyYW1pZF9sZXZlbHMgPT09IFwidW5kZWZpbmVkXCIpIHsgcHlyYW1pZF9sZXZlbHMgPSAxOyB9XG4gICAgICAgIHZhciBpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1pbihyYWRpdXMsIDcpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heChyYWRpdXMsIDMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHlyYW1pZF9sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF90YWJsZXNbaV0gPSBuZXcgbGV2X3RhYmxlX3Qod2lkdGggPj4gaSwgaGVpZ2h0ID4+IGksIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3Qoc3JjLCBwb2ludHMsIGJvcmRlcikge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSA0OyB9XG4gICAgICAgIHZhciB0ID0gdGhpcy5sZXZlbF90YWJsZXNbMF07XG4gICAgICAgIHZhciBSID0gdC5yYWRpdXMgfCAwLCBSbTEgPSAoUiAtIDEpIHwgMDtcbiAgICAgICAgdmFyIGRpcnMgPSB0LmRpcnM7XG4gICAgICAgIHZhciBkaXJzX2NvdW50ID0gdC5kaXJzX2NvdW50IHwgMDtcbiAgICAgICAgdmFyIG9wcG9zaXRlID0gZGlyc19jb3VudCA+PiAxO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scyB8IDAsIGggPSBzcmMucm93cyB8IDAsIGh3ID0gdyA+PiAxO1xuICAgICAgICB2YXIgc2NvcmVzID0gdC5zY29yZXM7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHJvdyA9IDAsIHJvd3ggPSAwLCBpcCA9IDAsIGltID0gMCwgYWJzX3Njb3JlID0gMCwgc2NvcmUgPSAwO1xuICAgICAgICB2YXIgdGF1ID0gdGhpcy50YXUgfCAwO1xuICAgICAgICB2YXIgbnVtYmVyX29mX3BvaW50cyA9IDAsIHB0O1xuXG4gICAgICAgIHZhciBzeCA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIHN5ID0gTWF0aC5tYXgoUiArIDEsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gUiAtIDIsIHcgLSBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV5ID0gTWF0aC5taW4oaCAtIFIgLSAyLCBoIC0gYm9yZGVyKSB8IDA7XG5cbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG4gICAgICAgICAgICAgICAgaXAgPSBpbWdbcm93eF0gKyB0YXUsIGltID0gaW1nW3Jvd3hdIC0gdGF1O1xuXG4gICAgICAgICAgICAgICAgaWYgKGltIDwgaW1nW3Jvd3ggKyBSXSAmJiBpbWdbcm93eCArIFJdIDwgaXAgJiYgaW0gPCBpbWdbcm93eCAtIFJdICYmIGltZ1tyb3d4IC0gUl0gPCBpcCkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZXNbcm93eF0gPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1fb25lX3BvaW50KGltZywgcm93eCwgc2NvcmVzLCBpbSwgaXAsIGRpcnMsIG9wcG9zaXRlLCBkaXJzX2NvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2NhbCBtYXhpbWFcbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG4gICAgICAgICAgICAgICAgc2NvcmUgPSBzY29yZXNbcm93eF07XG4gICAgICAgICAgICAgICAgYWJzX3Njb3JlID0gTWF0aC5hYnMoc2NvcmUpO1xuICAgICAgICAgICAgICAgIGlmIChhYnNfc2NvcmUgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgcGl4ZWwgaXMgMCwgdGhlIG5leHQgb25lIHdpbGwgbm90IGJlIGdvb2QgZW5vdWdoLiBTa2lwIGl0LlxuICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcmRfY2hlY2soc2NvcmVzLCByb3d4LCB3KSA+PSAzICYmIGlzX2xvY2FsX21heGltYShzY29yZXMsIHJvd3gsIHNjb3JlLCBodywgUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcG9pbnRzW251bWJlcl9vZl9wb2ludHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQueCA9IHgsIHB0LnkgPSB5LCBwdC5zY29yZSA9IGFic19zY29yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbnVtYmVyX29mX3BvaW50cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBSbTEsIHJvd3ggKz0gUm0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcl9vZl9wb2ludHM7XG4gICAgfVxuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHByZWNvbXB1dGVfZGlyZWN0aW9ucyhzdGVwLCBkaXJzLCBSKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciB4LCB5O1xuXG4gICAgeCA9IFI7XG4gICAgZm9yICh5ID0gMDsgeSA8IHg7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgtLTsgeCA8IHkgJiYgeCA+PSAwOyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IC14IDwgeTsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeS0tOyB5ID49IDA7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHkgPiB4OyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeCsrOyB4IDw9IDA7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICg7IHggPCAteTsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHkrKzsgeSA8IDA7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cblxuICAgIGRpcnNbaV0gPSBkaXJzWzBdO1xuICAgIGRpcnNbaSArIDFdID0gZGlyc1sxXTtcbiAgICByZXR1cm4gaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkX2NoZWNrKFNiLCBvZmYsIHN0ZXApIHtcbiAgICB2YXIgbiA9IDA7XG4gICAgaWYgKFNiW29mZiArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcCAtIDFdICE9IDApIG4rKztcblxuICAgIHJldHVybiBuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNfbG9jYWxfbWF4aW1hKHAsIG9mZiwgdiwgc3RlcCwgbmVpZ2hib3Job29kKSB7XG4gICAgdmFyIHgsIHk7XG5cbiAgICBpZiAodiA+IDApIHtcbiAgICAgICAgb2ZmIC09IHN0ZXAgKiBuZWlnaGJvcmhvb2Q7XG4gICAgICAgIGZvciAoeSA9IC1uZWlnaGJvcmhvb2Q7IHkgPD0gbmVpZ2hib3Job29kOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IC1uZWlnaGJvcmhvb2Q7IHggPD0gbmVpZ2hib3Job29kOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAocFtvZmYgKyB4XSA+IHYpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZiArPSBzdGVwO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmIC09IHN0ZXAgKiBuZWlnaGJvcmhvb2Q7XG4gICAgICAgIGZvciAoeSA9IC1uZWlnaGJvcmhvb2Q7IHkgPD0gbmVpZ2hib3Job29kOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IC1uZWlnaGJvcmhvb2Q7IHggPD0gbmVpZ2hib3Job29kOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAocFtvZmYgKyB4XSA8IHYpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZiArPSBzdGVwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyZm9ybV9vbmVfcG9pbnQoSSwgeCwgU2NvcmVzLCBJbSwgSXAsIGRpcnMsIG9wcG9zaXRlLCBkaXJzX25iKSB7XG4gICAgdmFyIHNjb3JlID0gMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAob3Bwb3NpdGUgLSAxKSB8IDA7XG4gICAgdmFyIEEgPSAwLCBCMCA9IDAsIEIxID0gMCwgQjIgPSAwO1xuICAgIHZhciBzdGF0ZSA9IDA7XG5cbiAgICAvLyBXRSBLTk9XIFRIQVQgTk9UKEEgfiBJMCAmIEIxIH4gSTApOlxuICAgIEEgPSBJW3ggKyBkaXJzW2FdXTtcbiAgICBpZiAoKEEgPD0gSXApKSB7XG4gICAgICAgIGlmICgoQSA+PSBJbSkpIHsgLy8gQSB+IEkwXG4gICAgICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMCA8PSBJcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKEIwID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZS8qIGlmICgoQjEgPCBJbSkpKi8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy8gQjAgPCBJMFxuICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIxIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy8gQSA+IEkwXG4gICAgICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMCA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgLy8gQSA8IEkwXG4gICAge1xuICAgICAgICBCMCA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIwIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgc3RhdGUgPSAwO1xuICAgIH1cblxuICAgIGZvciAoYSA9IDE7IGEgPD0gb3Bwb3NpdGU7IGErKykge1xuICAgICAgICBBID0gSVt4ICsgZGlyc1thXV07XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA4OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMSA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA5OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA4OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy9cIlBCIGRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBzd2l0Y2goc3RhdGUpXG4gICAgfSAvLyBmb3IoYS4uLilcblxuICAgIFNjb3Jlc1t4XSA9IChzY29yZSArIGRpcnNfbmIgKiBJW3hdKTtcbn1cblxuZXhwb3J0IGNsYXNzIGxldl90YWJsZV90IHtcbiAgICBjb25zdHJ1Y3Rvcih3LCBoLCByKSB7XG4gICAgICAgIHRoaXMuZGlycyA9IG5ldyBJbnQzMkFycmF5KDEwMjQpO1xuICAgICAgICB0aGlzLmRpcnNfY291bnQgPSBwcmVjb21wdXRlX2RpcmVjdGlvbnModywgdGhpcy5kaXJzLCByKSB8IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzID0gbmV3IEludDMyQXJyYXkodyAqIGgpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHIgfCAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb21wdXRlX2xhcGxhY2lhbiwgaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUgfSBmcm9tICcuL3lhcGUwNl91dGlscy5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHlhcGUwNiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgICAgIHRoaXMubGFwbGFjaWFuX3RocmVzaG9sZCA9IDMwO1xuICAgICAgICB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQgPSAyNTtcbiAgICB9XG4gICAgZGV0ZWN0KHNyYywgcG9pbnRzLCBib3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3MsIHNyZF9kID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBEeHggPSA1LCBEeXkgPSAoNSAqIHcpIHwgMDtcbiAgICAgICAgdmFyIER4eSA9ICgzICsgMyAqIHcpIHwgMCwgRHl4ID0gKDMgLSAzICogdykgfCAwO1xuICAgICAgICB2YXIgbGFwX2J1ZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuICAgICAgICB2YXIgbGFwbGFjaWFuID0gbGFwX2J1Zi5pMzI7XG4gICAgICAgIHZhciBsdiA9IDAsIHJvdyA9IDAsIHJvd3ggPSAwLCBtaW5fZWlnZW5fdmFsdWUgPSAwLCBwdDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwO1xuICAgICAgICB2YXIgbGFwX3RocmVzaCA9IHRoaXMubGFwbGFjaWFuX3RocmVzaG9sZDtcbiAgICAgICAgdmFyIGVpZ2VuX3RocmVzaCA9IHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heCg1LCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIHN5ID0gTWF0aC5tYXgoMywgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleCA9IE1hdGgubWluKHcgLSA1LCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSAzLCBoIC0gYm9yZGVyKSB8IDA7XG5cbiAgICAgICAgeCA9IHcgKiBoO1xuICAgICAgICB3aGlsZSAoLS14ID49IDApIHsgbGFwbGFjaWFuW3hdID0gMDsgfVxuICAgICAgICBjb21wdXRlX2xhcGxhY2lhbihzcmRfZCwgbGFwbGFjaWFuLCB3LCBoLCBEeHgsIER5eSwgc3gsIHN5LCBleCwgZXkpO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuXG4gICAgICAgICAgICAgICAgbHYgPSBsYXBsYWNpYW5bcm93eF07XG4gICAgICAgICAgICAgICAgaWYgKChsdiA8IC1sYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAobHYgPiBsYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICApIHtcblxuICAgICAgICAgICAgICAgICAgICBtaW5fZWlnZW5fdmFsdWUgPSBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmRfZCwgcm93eCwgbHYsIER4eCwgRHl5LCBEeHksIER5eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5fZWlnZW5fdmFsdWUgPiBlaWdlbl90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcG9pbnRzW251bWJlcl9vZl9wb2ludHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQueCA9IHgsIHB0LnkgPSB5LCBwdC5zY29yZSA9IG1pbl9laWdlbl92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbnVtYmVyX29mX3BvaW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4OyAvLyBza2lwIG5leHQgcGl4ZWwgc2luY2UgdGhpcyBpcyBtYXhpbWEgaW4gM3gzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobGFwX2J1Zik7XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcl9vZl9wb2ludHM7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX2xhcGxhY2lhbihzcmMsIGRzdCwgdywgaCwgRHh4LCBEeXksIHN4LHN5LCBleCxleSkge1xuICAgIHZhciB5PTAseD0wLHlyb3c9KHN5Kncrc3gpfDAscm93PXlyb3c7XG5cbiAgICBmb3IoeSA9IHN5OyB5IDwgZXk7ICsreSwgeXJvdys9dywgcm93ID0geXJvdykge1xuICAgICAgICBmb3IoeCA9IHN4OyB4IDwgZXg7ICsreCwgKytyb3cpIHtcbiAgICAgICAgICAgIGRzdFtyb3ddID0gLTQgKiBzcmNbcm93XSArIHNyY1tyb3crRHh4XSArIHNyY1tyb3ctRHh4XSArIHNyY1tyb3crRHl5XSArIHNyY1tyb3ctRHl5XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlKHNyYywgb2ZmLCB0ciwgRHh4LCBEeXksIER4eSwgRHl4KSB7XG4gICAgdmFyIEl4eCA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHh4XSArIHNyY1tvZmYgLSBEeHhdO1xuICAgIHZhciBJeXkgPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER5eV0gKyBzcmNbb2ZmIC0gRHl5XTtcbiAgICB2YXIgSXh5ID0gc3JjW29mZiArIER4eV0gKyBzcmNbb2ZmIC0gRHh5XSAtIHNyY1tvZmYgKyBEeXhdIC0gc3JjW29mZiAtIER5eF07XG4gICAgdmFyIHNxcnRfZGVsdGEgPSAoIE1hdGguc3FydCgoKEl4eCAtIEl5eSkgKiAoSXh4IC0gSXl5KSArIDQgKiBJeHkgKiBJeHkpICkgKXwwO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGguYWJzKHRyIC0gc3FydF9kZWx0YSksIE1hdGguYWJzKC0odHIgKyBzcXJ0X2RlbHRhKSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuL2pzZmVhdE5leHQuanMnXG5leHBvcnQgZGVmYXVsdCB7XG4gICBqc2ZlYXROZXh0XG59Il0sIm5hbWVzIjpbIl9wb29sX25vZGVfdCIsImNhY2hlIiwiX3Bvb2xfaGVhZCIsIl9wb29sX3RhaWwiLCJfcG9vbF9zaXplIiwiY2FwYWNpdHkiLCJkYXRhX3NpemUiLCJpIiwibm9kZSIsIm5leHQiLCJzaXplX2luX2J5dGVzIiwic2l6ZSIsInJlc2l6ZSIsIkpTRkVBVF9DT05TVEFOVFMiLCJFUFNJTE9OIiwiRkxUX01JTiIsIlU4X3QiLCJTMzJfdCIsIkYzMl90IiwiUzY0X3QiLCJGNjRfdCIsIkMxX3QiLCJDMl90IiwiQzNfdCIsIkM0X3QiLCJDT0xPUl9SR0JBMkdSQVkiLCJDT0xPUl9SR0IyR1JBWSIsIkNPTE9SX0JHUkEyR1JBWSIsIkNPTE9SX0JHUjJHUkFZIiwiQk9YX0JMVVJfTk9TQ0FMRSIsIlNWRF9VX1QiLCJTVkRfVl9UIiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsInR5cGUiLCJfY29udm9sX3U4IiwiYnVmIiwic3JjX2QiLCJkc3RfZCIsInciLCJoIiwiZmlsdGVyIiwia2VybmVsX3NpemUiLCJoYWxmX2tlcm5lbCIsImoiLCJrIiwic3AiLCJkcCIsInN1bSIsInN1bTEiLCJzdW0yIiwic3VtMyIsImYwIiwiZmsiLCJ3MiIsInczIiwidzQiLCJNYXRoIiwibWluIiwiX2NvbnZvbCIsIl9yZXNhbXBsZSIsIl9yZXNhbXBsZV91OCIsIm1hdGgiLCJtYXRyaXhfdCIsImltZ3Byb2MiLCJhbGxvY2F0ZSIsInNyYyIsImRzdCIsImNvZGUiLCJ4IiwieSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsImRhdGEiLCJudyIsIm5oIiwicm93cyIsImNvbHMiLCJjaGFubmVsIiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInNjYWxlIiwidG1wX2J1ZmYiLCJnZXRfYnVmZmVyIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJpMzIiLCJkYXRhX3U4IiwiaG9sZCIsInB1dF9idWZmZXIiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXgiLCJpc191OCIsImJ1Zl9zeiIsImJ1Zl9ub2RlIiwiZmlsdF9ub2RlIiwiZjMyIiwiZ2V0X2dhdXNzaWFuX2tlcm5lbCIsImltZyIsInJob19yZXMiLCJ0aGV0YV9yZXMiLCJ0aHJlc2hvbGQiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RlcCIsIm1pbl90aGV0YSIsIm1heF90aGV0YSIsIlBJIiwibnVtYW5nbGUiLCJyb3VuZCIsIm51bXJobyIsImlyaG8iLCJhY2N1bSIsInRhYlNpbiIsIkZsb2F0MzJBcnJheSIsInRhYkNvcyIsIm4iLCJhbmciLCJzaW4iLCJjb3MiLCJyIiwiX3NvcnRfYnVmIiwiQXJyYXkiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsInN4Iiwic3kiLCJfdzIiLCJfaDIiLCJzcHRyIiwic2xpbmUiLCJkcHRyIiwiZGxpbmUiLCJkc3RlcCIsIngxIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwic3JvdzAiLCJzcm93MSIsInNyb3cyIiwiZHJvdyIsInRyb3cwIiwidHJvdzEiLCJneGd5IiwiYnVmMF9ub2RlIiwiYnVmMV9ub2RlIiwibG93X3RocmVzaCIsImhpZ2hfdGhyZXNoIiwiZ3JhZCIsIl9ncmFkIiwic3VwcHJlc3MiLCJzIiwidGcyMngiLCJ0ZzY3eCIsImR4ZHlfbm9kZSIsIm1hcF9ub2RlIiwic3RhY2tfbm9kZSIsIm1hcCIsInN0YWNrIiwiZHhkeSIsImR4ZHlfbSIsIlMzMkMyX3QiLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsInNvYmVsX2Rlcml2YXRpdmVzIiwidHJhbnNmb3JtIiwiZmlsbF92YWx1ZSIsInNyY193aWR0aCIsInNyY19oZWlnaHQiLCJkc3Rfd2lkdGgiLCJkc3RfaGVpZ2h0Iiwib2ZmIiwiaXhzIiwiaXlzIiwieHMiLCJ5cyIsInAwIiwicDEiLCJ0ZCIsIm0wMCIsIm0wMSIsIm0wMiIsIm0xMCIsIm0xMSIsIm0xMiIsInhvZnNfY291bnQiLCJjaCIsInNjYWxlX3giLCJzY2FsZV95IiwiaW52X3NjYWxlXzI1NiIsImR4IiwiZHkiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImR4biIsImFscGhhIiwiYmV0YSIsImJldGExIiwic3VtX25vZGUiLCJ4b2ZzX25vZGUiLCJ4b2ZzIiwiYWJzIiwiZGF0YV90Iiwia2V5cG9pbnRfdCIsIm1hdG1hdGgiLCJweXJhbWlkX3QiLCJsaW5hbGciLCJvcmIiLCJ5YXBlIiwieWFwZTA2IiwibW90aW9uX2VzdGltYXRvciIsImhvbW9ncmFwaHkyZCIsInJhbnNhY19wYXJhbXNfdCIsIm9wdGljYWxfZmxvd19sayIsInBrZyIsImpzZmVhdE5leHQiLCJkdCIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJzY29yZSIsImxldmVsIiwiYW5nbGUiLCJzd2FwIiwiQSIsImkwIiwiaTEiLCJ0IiwiaHlwb3QiLCJzcXJ0IiwiYXN0ZXAiLCJXIiwiViIsInZzdGVwIiwiZXBzIiwibSIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwicCIsImEwIiwiYjAiLCJpbmRSX2J1ZmYiLCJpbmRDX2J1ZmYiLCJpbmRSIiwiaW5kQyIsIkF0IiwiX1ciLCJWdCIsIm4xIiwibWludmFsIiwiaXRlciIsIkFpIiwiQWoiLCJWaSIsIlZqIiwiY2hhbmdlZCIsInQwIiwidDEiLCJzZCIsImdhbW1hIiwiZGVsdGEiLCJzZWVkIiwidmFsMCIsImFzdW0iLCJXX2J1ZmYiLCJmNjQiLCJCIiwiYWQiLCJiZCIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwiYV9idWZmIiwid19idWZmIiwidl9idWZmIiwiYV9tdCIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwiSmFjb2JpU1ZESW1wbCIsIlgiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJzaWdtYV94Iiwic2NhbGVfMngiLCJrZXJuX25vZGUiLCJfa2VybmVsIiwiZXhwIiwibW9kZWwiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MiIsInQ0IiwidDUiLCJ0NiIsInQ3IiwidDgiLCJ0OSIsInQxMCIsInQxMSIsInQxNCIsInQxNSIsInQxNiIsInQxOCIsInQyMCIsInQyMSIsInQyNCIsInQyNSIsInQyNiIsInQyNyIsInQyOCIsInQzMCIsInQzMiIsInQzNSIsInQ0MSIsInQ0MiIsInQ0MyIsInQ0NiIsInQ0OCIsInQ1MSIsInQ1NSIsIkhyMCIsIkhyMSIsIkhyMiIsIkhyMyIsIkhyNCIsIkhyNSIsIkhyNiIsIkhyNyIsIkhsMCIsIkhsMSIsIkhsMiIsIkhsMyIsIkhsNCIsIkhsNSIsIkhsNiIsIkhsNyIsInQxMiIsInQyMyIsInQzMSIsInQ0NCIsInQ0NyIsInQ0OSIsInQ1MCIsIm1hdCIsImFycmF5IiwibG93IiwiaGlnaCIsImNtcCIsImlzb3J0X3RocmVzaCIsInRhIiwidGIiLCJ0YyIsImxlZnQiLCJyaWdodCIsInB0ciIsInB0cjIiLCJsZWZ0MCIsImxlZnQxIiwicmlnaHQwIiwicmlnaHQxIiwicGl2b3QiLCJzd2FwX2NudCIsIm1pZGRsZSIsImxsIiwiaGgiLCJtZWRpYW4iLCJNIiwidmFsdWUiLCJjb2xzXzEiLCJsZW4iLCJBdGkiLCJwQXQiLCJhdGQiLCJDIiwiQXAiLCJwQSIsInBCIiwicF9CIiwiQ3AiLCJtY29scyIsImNkIiwibXJvd3MiLCJwQ2RpYWciLCJwX0EiLCJwQyIsInBDdCIsInBfQyIsInBfQ0MiLCJmcm9tIiwidG8iLCJpbnZBIiwidDEzIiwidDE3IiwiQ2QiLCJBZCIsIkJkIiwibTFfMCIsIm0xXzEiLCJtMV8yIiwibTFfMyIsIm0xXzQiLCJtMV81IiwibTFfNiIsIm0xXzciLCJtMV84IiwibTJfMCIsIm0yXzEiLCJtMl8yIiwibTJfMyIsIm0yXzQiLCJtMl81IiwibTJfNiIsIm0yXzciLCJtMl84IiwibWQiLCJNMTEiLCJNMTIiLCJNMTMiLCJNMjEiLCJNMjIiLCJNMjMiLCJNMzEiLCJNMzIiLCJNMzMiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiYnVmZmVyIiwidTgiLCJvdGhlciIsIm9kIiwibmV3X3NpemUiLCJuZWVkX2NudCIsIm1heF9jbnQiLCJmcm9tX3N1YiIsInRvX3N1YiIsIm1heF90cnkiLCJpbmRpY2VzIiwic3NpdGVyIiwiaWR4X2kiLCJvayIsInJhbmRvbSIsImNoZWNrX3N1YnNldCIsImNvdW50IiwidGhyZXNoIiwiZXJyIiwibWFzayIsIm51bWlubGllcnMiLCJlcnJvciIsInBhcmFtcyIsIm1heF9pdGVycyIsIm1vZGVsX3BvaW50cyIsIm5pdGVycyIsInJlc3VsdCIsInN1YnNldDAiLCJzdWJzZXQxIiwiZm91bmQiLCJtYyIsIm1yIiwibV9idWZmIiwibXNfYnVmZiIsImVycl9idWZmIiwiY3Vycl9tYXNrIiwiVThDMV90IiwiaW5saWVyc19tYXgiLCJubW9kZWxzIiwicnVuIiwiY29weV90byIsImdldF9zdWJzZXQiLCJmaW5kX2lubGllcnMiLCJ1cGRhdGVfaXRlcnMiLCJfbWF0aCIsIm1pbl9tZWRpYW4iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJTUVJUMiIsInBvaW50cyIsImR4MSIsImR5MSIsImR4MiIsImR5MiIsImFmZmluZTJkIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYl9idWZmIiwiYl9tdCIsIm11bHRpcGx5X0F0QSIsIm11bHRpcGx5X0F0QiIsImx1X3NvbHZlIiwiaW52ZXJ0XzN4MyIsIm11bHRpcGx5XzN4MyIsIm1MdEwiLCJFdmVjIiwiTHRMIiwiZXZkIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJ3dyIsIm5lZ2F0aXZlIiwiZnAwIiwiZnAxIiwiZnAyIiwiZnAzIiwidHAwIiwidHAxIiwidHAyIiwidHAzIiwiQTExIiwiQTEyIiwiQTEzIiwiQTIxIiwiQTIyIiwiQTIzIiwiQTMxIiwiQTMyIiwiQTMzIiwiQjExIiwiQjEyIiwiQjEzIiwiQjIxIiwiQjIyIiwiQjIzIiwiQjMxIiwiQjMyIiwiQjMzIiwiZGV0QSIsImRldGVybWluYW50XzN4MyIsImRldEIiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiRmxvYXQ2NEFycmF5IiwiX2ltZ3Byb2MiLCJzY2hhcnJfZGVyaXYiLCJzY2hhcnJfZGVyaXZhdGl2ZXMiLCJwcmV2X3B5ciIsImN1cnJfcHlyIiwicHJldl94eSIsImN1cnJfeHkiLCJ3aW5fc2l6ZSIsInN0YXR1cyIsIm1pbl9laWdlbl90aHJlc2hvbGQiLCJoYWxmX3dpbiIsIndpbl9hcmVhIiwid2luX2FyZWEyIiwicHJldl9pbWdzIiwibmV4dF9pbWdzIiwiaW1nX3ByZXYiLCJpbWdfbmV4dCIsIncwIiwiaDAiLCJsdyIsImxoIiwiaXdpbl9ub2RlIiwiZGVyaXZfaXdpbl9ub2RlIiwiZGVyaXZfbGV2X25vZGUiLCJkZXJpdl9tIiwiaXdpbl9idWYiLCJkZXJpdl9pd2luIiwiZGVyaXZfbGV2IiwiZHNyYyIsImlwdHIiLCJkaXB0ciIsImpwdHIiLCJsZXZfc2MiLCJwcmV2X3giLCJwcmV2X3kiLCJuZXh0X3giLCJuZXh0X3kiLCJwcmV2X2RlbHRhX3giLCJwcmV2X2RlbHRhX3kiLCJkZWx0YV94IiwiZGVsdGFfeSIsImlwcmV2X3giLCJpcHJldl95IiwiaW5leHRfeCIsImluZXh0X3kiLCJwdGlkIiwiYnJkX3RsIiwiYnJkX3IiLCJicmRfYiIsImIxIiwiYjIiLCJXX0JJVFMxNCIsIldfQklUUzQiLCJXX0JJVFMxbTUiLCJXX0JJVFMxbTUxIiwiV19CSVRTMTRfIiwiV19CSVRTNDEiLCJGTFRfU0NBTEUiLCJpdzAwIiwiaXcwMSIsIml3MTAiLCJpdzExIiwiaXZhbCIsIml4dmFsIiwiaXl2YWwiLCJEIiwibWluX2VpZyIsIkZMVF9FUFNJTE9OIiwibWF4X2xldmVsIiwibGV2ZWxzIiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImNvcm5lcnMiLCJkZXNjcmlwdG9ycyIsIkRFU0NSX1NJWkUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJpbWdwcmMiLCJ3YXJwX2FmZmluZSIsInB5cmRvd24iLCJzdGFydF93Iiwic3RhcnRfaCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiYm9yZGVyIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsInJvd3giLCJpcCIsImltIiwiYWJzX3Njb3JlIiwibnVtYmVyX29mX3BvaW50cyIsInB0IiwiZXgiLCJleSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwidiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwiY29tcHV0ZV9sYXBsYWNpYW4iLCJoZXNzaWFuX21pbl9laWdlbl92YWx1ZSIsImxhcGxhY2lhbl90aHJlc2hvbGQiLCJtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkIiwic3JkX2QiLCJEeHgiLCJEeXkiLCJEeHkiLCJEeXgiLCJsYXBfYnVmIiwibGFwbGFjaWFuIiwibHYiLCJtaW5fZWlnZW5fdmFsdWUiLCJsYXBfdGhyZXNoIiwiZWlnZW5fdGhyZXNoIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=