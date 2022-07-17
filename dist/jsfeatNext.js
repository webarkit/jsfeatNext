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
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants.js */ "./src/constants/constants.js");








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
        code = _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY;
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

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
        coeff_r = 1868;
        coeff_b = 4899;
      }

      if (code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY || code == _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY) {
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

        if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.U8_t && dst.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.U8_t && h * w / (nh * nw) < 0x100) {
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
      var scale = options & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE ? 1 : 1.0 / (windowSize * windowSize);
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
          is_u8 = data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.U8_t;
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
      } else if (data_type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.S32_t) {
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

      if (src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.U8_t || src.type & _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.S32_t) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDhEQUFjO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJrQztBQUM2QjtBQUNoRDtBQUNmLGVBQWUsc0RBQU87QUFDdEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLHFFQUFxQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaaGlCLFVBQVUsRUFBVkEsc0RBQVVBO0FBREUsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jYWNoZS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9kYXRhX3R5cGUvZGF0YV90eXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9jb252b2wuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL2ltZ3Byb2MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL3Jlc2FtcGxlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvanNmZWF0TmV4dC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2tleXBvaW50X3Qva2V5cG9pbnRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGctYmFzZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGcuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRoL21hdGguanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRtYXRoL21hdG1hdGguanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRyaXhfdC9tYXRyaXhfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3B0aWNhbF9mbG93X2xrL29wdGljYWxfZmxvd19say5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9iaXRfcGF0dGVybl8zMS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9vcmIuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3B5cmFtaWRfdC9weXJhbWlkX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZTA2L3lhcGUwNl91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5LCBkYXRhX3NpemUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90eXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL3Jlc2FtcGxlLmpzJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vY29udm9sLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCBtYXRoIGZyb20gJy4uL21hdGgvbWF0aC5qcyc7XG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1ncHJvYyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuICAgIGdyYXlzY2FsZShzcmMsIHcsIGgsIGRzdCwgY29kZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYywgZHN0LCBudywgbmgpIHtcbiAgICAgICAgdmFyIGggPSBzcmMucm93cywgdyA9IHNyYy5jb2xzO1xuICAgICAgICBpZiAoaCA+IG5oICYmIHcgPiBudykge1xuICAgICAgICAgICAgZHN0LnJlc2l6ZShudywgbmgsIHNyYy5jaGFubmVsKTtcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBmYXN0IGFsdGVybmF0aXZlIChmaXggcG9pbnQgc2NhbGUsIDB4MTAwIHRvIGF2b2lkIG92ZXJmbG93KVxuICAgICAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGRzdC50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGggKiB3IC8gKG5oICogbncpIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGVfdTgoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZShzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBib3hfYmx1cl9ncmF5KHNyYywgZHN0LCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cblxuICAgIGdhdXNzaWFuX2JsdXIoc3JjLCBkc3QsIGtlcm5lbF9zaXplLCBzaWdtYSkge1xuICAgICAgICB2YXIganNmZWF0bWF0aCA9IG5ldyBtYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZywgcmhvX3JlcywgdGhldGFfcmVzLCB0aHJlc2hvbGQpIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1nLmRhdGE7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLmNvbHM7XG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcucm93cztcbiAgICAgICAgdmFyIHN0ZXAgPSB3aWR0aDtcblxuICAgICAgICB2YXIgbWluX3RoZXRhID0gMC4wO1xuICAgICAgICB2YXIgbWF4X3RoZXRhID0gTWF0aC5QSTtcblxuICAgICAgICB2YXIgbnVtYW5nbGUgPSBNYXRoLnJvdW5kKChtYXhfdGhldGEgLSBtaW5fdGhldGEpIC8gdGhldGFfcmVzKTtcbiAgICAgICAgdmFyIG51bXJobyA9IE1hdGgucm91bmQoKCh3aWR0aCArIGhlaWdodCkgKiAyICsgMSkgLyByaG9fcmVzKTtcbiAgICAgICAgdmFyIGlyaG8gPSAxLjAgLyByaG9fcmVzO1xuXG4gICAgICAgIHZhciBhY2N1bSA9IG5ldyBJbnQzMkFycmF5KChudW1hbmdsZSArIDIpICogKG51bXJobyArIDIpKTsgLy90eXBlZCBhcnJheXMgYXJlIGluaXRpYWxpemVkIHRvIDBcbiAgICAgICAgdmFyIHRhYlNpbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuICAgICAgICB2YXIgdGFiQ29zID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG5cbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgYW5nID0gbWluX3RoZXRhO1xuICAgICAgICBmb3IgKDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgIHRhYlNpbltuXSA9IE1hdGguc2luKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgdGFiQ29zW25dID0gTWF0aC5jb3MoYW5nKSAqIGlyaG87XG4gICAgICAgICAgICBhbmcgKz0gdGhldGFfcmVzXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAxLiBmaWxsIGFjY3VtdWxhdG9yXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZVtpICogc3RlcCArIGpdICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyLCAobisxKSAqIChudW1yaG8rMikgKyByKzEsIHRhYkNvc1tuXSwgdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucm91bmQoaiAqIHRhYkNvc1tuXSArIGkgKiB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAobnVtcmhvIC0gMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW1bKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMi4gZmluZCBsb2NhbCBtYXhpbXVtc1xuICAgICAgICAvL1RPRE86IENvbnNpZGVyIG1ha2luZyBhIHZlY3RvciBjbGFzcyB0aGF0IHVzZXMgdHlwZWQgYXJyYXlzXG4gICAgICAgIHZhciBfc29ydF9idWYgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBudW1yaG87IHIrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSAobiArIDEpICogKG51bXJobyArIDIpICsgciArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGFjY3VtW2Jhc2VdID4gdGhyZXNob2xkICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIDFdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSBudW1yaG8gLSAyXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgbnVtcmhvICsgMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvcnRfYnVmLnB1c2goYmFzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMy4gc29ydCB0aGUgZGV0ZWN0ZWQgbGluZXMgYnkgYWNjdW11bGF0b3IgdmFsdWVcbiAgICAgICAgX3NvcnRfYnVmLnNvcnQoZnVuY3Rpb24gKGwxLCBsMikge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtW2wxXSA+IGFjY3VtW2wyXSB8fCAoYWNjdW1bbDFdID09IGFjY3VtW2wyXSAmJiBsMSA8IGwyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgdmFyIGxpbmVzTWF4ID0gTWF0aC5taW4obnVtYW5nbGUgKiBudW1yaG8sIF9zb3J0X2J1Zi5sZW5ndGgpO1xuICAgICAgICB2YXIgc2NhbGUgPSAxLjAgLyAobnVtcmhvICsgMik7XG4gICAgICAgIHZhciBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfc29ydF9idWZbaV07XG4gICAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHZhciByID0gaWR4IC0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSAtIDE7XG4gICAgICAgICAgICB2YXIgbHJobyA9IChyIC0gKG51bXJobyAtIDEpICogMC41KSAqIHJob19yZXM7XG4gICAgICAgICAgICB2YXIgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgcHlyZG93bihzcmMsIGRzdCwgc3gsIHN5KSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciBiYmZcbiAgICAgICAgaWYgKHR5cGVvZiBzeCA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzeSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeSA9IDA7IH1cblxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciB3MiA9IHcgPj4gMSwgaDIgPSBoID4+IDE7XG4gICAgICAgIHZhciBfdzIgPSB3MiAtIChzeCA8PCAxKSwgX2gyID0gaDIgLSAoc3kgPDwgMSk7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHNwdHIgPSBzeCArIHN5ICogdywgc2xpbmUgPSAwLCBkcHRyID0gMCwgZGxpbmUgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodzIsIGgyLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IF9oMjsgKyt5KSB7XG4gICAgICAgICAgICBzbGluZSA9IHNwdHI7XG4gICAgICAgICAgICBkbGluZSA9IGRwdHI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IF93MiAtIDI7IHggKz0gMiwgZGxpbmUgKz0gMiwgc2xpbmUgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZSArIDFdID0gKHNyY19kW3NsaW5lICsgMl0gKyBzcmNfZFtzbGluZSArIDNdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3ICsgMl0gKyBzcmNfZFtzbGluZSArIHcgKyAzXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IF93MjsgKyt4LCArK2RsaW5lLCBzbGluZSArPSAyKSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3B0ciArPSB3IDw8IDE7XG4gICAgICAgICAgICBkcHRyICs9IHcyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRzdDogW2d4LGd5LC4uLl1cbiAgICBzY2hhcnJfZGVyaXZhdGl2ZXMoc3JjLCBkc3QpIHtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZHN0ZXAgPSB3IDw8IDEsIHggPSAwLCB5ID0gMCwgeDEgPSAwLCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgICAgICB2YXIgc3JvdzAgPSAwLCBzcm93MSA9IDAsIHNyb3cyID0gMCwgZHJvdyA9IDA7XG4gICAgICAgIHZhciB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICB2YXIgYnVmMF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG4gICAgICAgIHZhciBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeF0sIGIgPSBpbWdbc3JvdzIgKyB4XTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeF0pICogMTApO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSAqIDMgKyAoaW1nW3Nyb3cxICsgeCArIDFdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MSArIDFdID0gKGIgLSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgYSA9IGltZ1tzcm93MCArIHhdLCBiID0gaW1nW3Nyb3cyICsgeF07XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gKChhICsgYikgKiAzICsgKGltZ1tzcm93MSArIHhdKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSAoYiAtIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07IHRyb3cwW3hdID0gdHJvdzBbd107XG4gICAgICAgICAgICB0cm93MVswXSA9IHRyb3cxWzFdOyB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgYSA9IHRyb3cxW3ggKyAyXSwgYiA9IHRyb3cxW3ggKyAxXSwgYyA9IHRyb3cxW3ggKyAzXSwgZCA9IHRyb3cxW3ggKyA0XSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IHRyb3cwW3ggKyAyXSwgZiA9IHRyb3cwW3ggKyAzXTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZSAtIHRyb3cwW3hdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKGEgKyB0cm93MVt4XSkgKiAzICsgYiAqIDEwKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZiAtIHRyb3cwW3ggKyAxXSk7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKChjICsgYikgKiAzICsgYSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgodHJvdzBbeCArIDRdIC0gZSkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKGQgKyBhKSAqIDMgKyBjICogMTApKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKHRyb3cwW3ggKyA1XSAtIGYpKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoKCh0cm93MVt4ICsgNV0gKyBjKSAqIDMgKyBkICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKCh0cm93MFt4ICsgMl0gLSB0cm93MFt4XSkpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICgoKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdKSAqIDMgKyB0cm93MVt4ICsgMV0gKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBjb21wdXRlIGdyYWRpZW50IHVzaW5nIFNvYmVsIGtlcm5lbCBbMSAyIDFdICogWy0xIDAgMV1eVFxuICAgIC8vIGRzdDogW2d4LGd5LC4uLl1cbiAgICBzb2JlbF9kZXJpdmF0aXZlcyhzcmMsIGRzdCkge1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkc3RlcCA9IHcgPDwgMSwgeCA9IDAsIHkgPSAwLCB4MSA9IDAsIGEsIGIsIGMsIGQsIGUsIGY7XG4gICAgICAgIHZhciBzcm93MCA9IDAsIHNyb3cxID0gMCwgc3JvdzIgPSAwLCBkcm93ID0gMDtcbiAgICAgICAgdmFyIHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIHZhciBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgdmFyIGJ1ZjFfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuXG4gICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8fCBzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QpIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmkzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyb3cwID0gYnVmMF9ub2RlLmYzMjtcbiAgICAgICAgICAgIHRyb3cxID0gYnVmMV9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyB5IDwgaDsgKyt5LCBzcm93MSArPSB3KSB7XG4gICAgICAgICAgICBzcm93MCA9ICgoeSA+IDAgPyB5IC0gMSA6IDEpICogdykgfCAwO1xuICAgICAgICAgICAgc3JvdzIgPSAoKHkgPCBoIC0gMSA/IHkgKyAxIDogaCAtIDIpICogdykgfCAwO1xuICAgICAgICAgICAgZHJvdyA9ICh5ICogZHN0ZXApIHwgMDtcbiAgICAgICAgICAgIC8vIGRvIHZlcnRpY2FsIGNvbnZvbHV0aW9uXG4gICAgICAgICAgICBmb3IgKHggPSAwLCB4MSA9IDE7IHggPD0gdyAtIDI7IHggKz0gMiwgeDEgKz0gMikge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhID0gaW1nW3Nyb3cwICsgeCArIDFdLCBiID0gaW1nW3Nyb3cyICsgeCArIDFdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoKGEgKyBiKSArIChpbWdbc3JvdzEgKyB4ICsgMV0gKiAyKSk7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDEgKyAxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKyt4MSkge1xuICAgICAgICAgICAgICAgIGEgPSBpbWdbc3JvdzAgKyB4XSwgYiA9IGltZ1tzcm93MiArIHhdO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9ICgoYSArIGIpICsgKGltZ1tzcm93MSArIHhdICogMikpO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IChiIC0gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGJvcmRlclxuICAgICAgICAgICAgeCA9ICh3ICsgMSkgfCAwO1xuICAgICAgICAgICAgdHJvdzBbMF0gPSB0cm93MFsxXTsgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07IHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICBhID0gdHJvdzFbeCArIDJdLCBiID0gdHJvdzFbeCArIDFdLCBjID0gdHJvdzFbeCArIDNdLCBkID0gdHJvdzFbeCArIDRdLFxuICAgICAgICAgICAgICAgICAgICBlID0gdHJvdzBbeCArIDJdLCBmID0gdHJvdzBbeCArIDNdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChlIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChhICsgdHJvdzFbeF0gKyBiICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGYgLSB0cm93MFt4ICsgMV0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChjICsgYiArIGEgKiAyKTtcblxuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MFt4ICsgNF0gLSBlKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAoZCArIGEgKyBjICogMik7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cwW3ggKyA1XSAtIGYpO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgNV0gKyBjICsgZCAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gpIHtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSAodHJvdzBbeCArIDJdIC0gdHJvdzBbeF0pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9ICh0cm93MVt4ICsgMl0gKyB0cm93MVt4XSArIHRyb3cxW3ggKyAxXSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWYwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMV9ub2RlKTtcbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjLCBkc3QsIHRyYW5zZm9ybSwgZmlsbF92YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmMsIGRzdCwgY2FjaGUsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlIChzcmMsIGRzdCwgY2FjaGUsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIHNjYWxlID0gMS4wIC8gKHNjYWxlX3ggKiBzY2FsZV95KTtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLjAsIGJldGEgPSAwLjAsIGJldGExID0gMC4wO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5mMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuZjMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MSAtIGZzeDEpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZnN4MiAtIHN4MikgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzXSB8IDA7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzICsgMV0gfCAwO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKTtcbiAgICAgICAgICAgIGJldGExID0gMS4wIC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGJldGEpIDwgMWUtMykge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdO1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn0iLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5pbXBvcnQgZGF0YV90eXBlIGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IGRhdGFfdCBmcm9tICcuL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IGtleXBvaW50X3QgZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QuanMnXG5pbXBvcnQgaW1ncHJvYyBmcm9tICcuL2ltZ3Byb2MvaW1ncHJvYy5qcydcbmltcG9ydCBtYXRoIGZyb20gJy4vbWF0aC9tYXRoLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGguanMnXG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBweXJhbWlkX3QgZnJvbSAnLi9weXJhbWlkX3QvcHlyYW1pZF90LmpzJ1xuaW1wb3J0IGxpbmFsZyBmcm9tICcuL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgb3JiIGZyb20gJy4vb3JiL29yYi5qcydcbmltcG9ydCB5YXBlIGZyb20gJy4veWFwZS95YXBlLmpzJ1xuaW1wb3J0IHlhcGUwNiBmcm9tICcuL3lhcGUwNi95YXBlMDYuanMnXG5pbXBvcnQgbW90aW9uX2VzdGltYXRvciBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvci5qcydcbmltcG9ydCB7aG9tb2dyYXBoeTJkfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzJ1xuaW1wb3J0IHJhbnNhY19wYXJhbXNfdCBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzJ1xuaW1wb3J0IG9wdGljYWxfZmxvd19sayBmcm9tICcuL29wdGljYWxfZmxvd19say9vcHRpY2FsX2Zsb3dfbGsuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpzZmVhdE5leHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgIH1cblxuICAgIC8vIFZFUlNJT05cbiAgICBzdGF0aWMgVkVSU0lPTiA9IHBrZy52ZXJzaW9uO1xuXG4gICAgLy8gQ09OU1RBTlRTXG4gICAgc3RhdGljIEVQU0lMT04gPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgc3RhdGljIEZMVF9NSU4gPSBKU0ZFQVRfQ09OU1RBTlRTLkZMVF9NSU47XG4gICAgc3RhdGljIFU4X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgc3RhdGljIFMzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5TMzJfdDtcbiAgICBzdGF0aWMgRjMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90O1xuICAgIHN0YXRpYyBTNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBDMV90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgIHN0YXRpYyBDMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMl90O1xuICAgIHN0YXRpYyBDM190ID0gSlNGRUFUX0NPTlNUQU5UUy5DM190O1xuICAgIHN0YXRpYyBDNF90ID0gSlNGRUFUX0NPTlNUQU5UUy5DNF90O1xuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIHN0YXRpYyBDT0xPUl9SR0JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfUkdCMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBzdGF0aWMgQk9YX0JMVVJfTk9TQ0FMRSA9IEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRTtcbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIHN0YXRpYyBTVkRfVV9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UO1xuICAgIHN0YXRpYyBTVkRfVl9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UO1xuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgc3RhdGljIFU4QzFfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgVThDM190ID0gdGhpcy5VOF90IHwgdGhpcy5DM190O1xuICAgIHN0YXRpYyBVOEM0X3QgPSB0aGlzLlU4X3QgfCB0aGlzLkM0X3Q7XG5cbiAgICBzdGF0aWMgRjMyQzFfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIEYzMkMyX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMl90O1xuICAgIHN0YXRpYyBTMzJDMV90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgUzMyQzJfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMyX3Q7XG5cbiAgICBnZXRfZGF0YV90eXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2NoYW5uZWwodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2NoYW5uZWwodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQuZGF0YV90ID0gZGF0YV90XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5weXJhbWlkX3QgPSBweXJhbWlkX3Q7XG5cbmpzZmVhdE5leHQua2V5cG9pbnRfdCA9IGtleXBvaW50X3Q7XG5cbmpzZmVhdE5leHQuY2FjaGUgPSBjYWNoZTtcblxuanNmZWF0TmV4dC5pbWdwcm9jID0gaW1ncHJvYztcblxuanNmZWF0TmV4dC5tYXRoID0gbWF0aDtcblxuanNmZWF0TmV4dC5tYXRtYXRoID0gbWF0bWF0aDtcblxuanNmZWF0TmV4dC5saW5hbGcgPSBsaW5hbGc7XG5cbmpzZmVhdE5leHQub3JiID0gb3JiO1xuXG5qc2ZlYXROZXh0LnlhcGUgPSB5YXBlO1xuXG5qc2ZlYXROZXh0LnlhcGUwNiA9IHlhcGUwNjtcblxuanNmZWF0TmV4dC5tb3Rpb25fZXN0aW1hdG9yID0gbW90aW9uX2VzdGltYXRvcjtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuaG9tb2dyYXBoeTJkID0gaG9tb2dyYXBoeTJkO1xuXG5qc2ZlYXROZXh0Lm9wdGljYWxfZmxvd19sayA9IG9wdGljYWxfZmxvd19sazsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy1iYXNlLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW5hbGcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBtID0gMCwgbCA9IDAsIGlkeCA9IDAsIF9pbiA9IDAsIF9pbjIgPSAwO1xuICAgICAgICB2YXIgaXRlcnMgPSAwLCBtYXhfaXRlciA9IG4gKiBuICogMzA7XG4gICAgICAgIHZhciBtdiA9IDAuMCwgdmFsID0gMC4wLCBwID0gMC4wLCB5ID0gMC4wLCB0ID0gMC4wLCBzID0gMC4wLCBjID0gMC4wLCBhMCA9IDAuMCwgYjAgPSAwLjA7XG5cbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgdmFyIGluZEMgPSBpbmRDX2J1ZmYuaTMyO1xuXG4gICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpICogdnN0ZXA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSAqIGtdO1xuICAgICAgICAgICAgaWYgKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IGsgKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgbV0pLCBpID0gayArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFba10pLCBpID0gMTsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gMSkgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yIChrID0gMCwgbXYgPSBNYXRoLmFicyhBW2luZFJbMF1dKSwgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gaW5kUltrXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcblxuICAgICAgICAgICAgeSA9IChXW2xdIC0gV1trXSkgKiAwLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0IC8gcztcbiAgICAgICAgICAgIHMgPSBwIC8gczsgdCA9IChwIC8gdCkgKiBwO1xuICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcblxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IGlkeCArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIG1dKSwgaSA9IGlkeCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtpZHhdKSwgaSA9IDE7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kQ1tpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbbV0gPCBXW2ldKVxuICAgICAgICAgICAgICAgICAgICBtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFYsIHZzdGVwICogbSArIGksIHZzdGVwICogayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbCBcblxuICAgICAgICBpZiAobSA8IG4pIHtcbiAgICAgICAgICAgIGF0ID0gMTtcbiAgICAgICAgICAgIGkgPSBtO1xuICAgICAgICAgICAgbSA9IG47XG4gICAgICAgICAgICBuID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG0gKiBtKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJhbnNwb3NlXG4gICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKGFfbXQsIEEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9uICogX207IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbiAqIG07IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaVNWREltcGwoYV9tdC5kYXRhLCBtLCB3X210LmRhdGEsIHZfbXQuZGF0YSwgbiwgbSwgbiwgbSk7XG5cbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSB3X210LmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IF9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgdl9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIHZfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcblxuICAgIH1cblxuICAgIHN2ZF9zb2x2ZShBLCBYLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHhzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcblxuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGJkID0gQi5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIHhzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh3ZFtqXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjAsIHB1ID0gMDsgayA8IG5yb3dzOyBrKyssIHB1ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdWRbcHUgKyBqXSAqIGJkW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhzdW0gKz0gc3VtICogdmRbcHYgKyBqXSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWksIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplLCBzaWdtYSwga2VybmVsLCBkYXRhX3R5cGUpIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsLCBzcmNfeDAsIHNyY195MCwgZHN0X3gwLCBkc3RfeTAsXG4gICAgICAgIHNyY194MSwgc3JjX3kxLCBkc3RfeDEsIGRzdF95MSxcbiAgICAgICAgc3JjX3gyLCBzcmNfeTIsIGRzdF94MiwgZHN0X3kyLFxuICAgICAgICBzcmNfeDMsIHNyY195MywgZHN0X3gzLCBkc3RfeTMpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheSwgbG93LCBoaWdoLCBjbXApIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXksIGxvdywgaGlnaCkge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIG1pZGRsZSA9IDAsIGxsID0gMCwgaGggPSAwLCBtZWRpYW4gPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsOyB3aGlsZSAoYXJyYXlbbG93XSA+IGFycmF5W2xsXSk7XG4gICAgICAgICAgICAgICAgZG8gLS1oaDsgd2hpbGUgKGFycmF5W2hoXSA+IGFycmF5W2xvd10pO1xuICAgICAgICAgICAgICAgIGlmIChoaCA8IGxsKSBicmVhaztcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgICAgIGFycmF5W2xsXSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIGlmIChoaCA8PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgbG93ID0gbGw7XG4gICAgICAgICAgICBlbHNlIGlmIChoaCA+PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgaGlnaCA9IChoaCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdCwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tLCB0bykge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQywgQSwgQikge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMSwgTTEyLCBNMTMsXG4gICAgICAgIE0yMSwgTTIyLCBNMjMsXG4gICAgICAgIE0zMSwgTTMyLCBNMzMpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90eXBlIGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRyaXhfdCB7XG4gICAgY29uc3RydWN0b3IoYywgciwgX2RhdGFfdHlwZSwgX2RhdGFfYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKSB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyKSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYywgciwgY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgbWF0aCBmcm9tICcuLi9tYXRoL21hdGguanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW90aW9uX2VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBuZWVkX2NudCwgbWF4X2NudCwgZnJvbV9zdWIsIHRvX3N1Yikge1xuICAgICAgICB2YXIgbWF4X3RyeSA9IDEwMDA7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHNzaXRlciA9IDAsIGlkeF9pID0gMCwgb2sgPSBmYWxzZTtcbiAgICAgICAgZm9yICg7IHNzaXRlciA8IG1heF90cnk7ICsrc3NpdGVyKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeTspIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlkeF9pID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW9rKSB7XG4gICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4X2kgPSBpbmRpY2VzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4X2NudCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4X2kgPT0gaW5kaWNlc1tqXSkgeyBvayA9IGZhbHNlOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21fc3ViW2ldID0gZnJvbVtpZHhfaV07XG4gICAgICAgICAgICAgICAgdG9fc3ViW2ldID0gdG9baWR4X2ldO1xuICAgICAgICAgICAgICAgIGlmICgha2VybmVsLmNoZWNrX3N1YnNldChmcm9tX3N1YiwgdG9fc3ViLCBpICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NpdGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoaSA9PSBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5KTtcbiAgICB9XG5cbiAgICBmaW5kX2lubGllcnMoa2VybmVsLCBtb2RlbCwgZnJvbSwgdG8sIGNvdW50LCB0aHJlc2gsIGVyciwgbWFzaykge1xuICAgICAgICB2YXIgbnVtaW5saWVycyA9IDAsIGkgPSAwLCBmID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aHJlc2ggKiB0aHJlc2g7XG5cbiAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBmID0gZXJyW2ldIDw9IHQ7XG4gICAgICAgICAgICBtYXNrW2ldID0gZjtcbiAgICAgICAgICAgIG51bWlubGllcnMgKz0gZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtaW5saWVycztcbiAgICB9XG5cbiAgICByYW5zYWMocGFyYW1zLCBrZXJuZWwsIGZyb20sIHRvLCBjb3VudCwgbW9kZWwsIG1hc2ssIG1heF9pdGVycykge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN1YnNldDAgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDEgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4QzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaW5saWVyc19tYXggPSAtMSwgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIE0sIGZyb20sIHRvLCBjb3VudCwgcGFyYW1zLnRocmVzaCwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChudW1pbmxpZXJzID4gTWF0aC5tYXgoaW5saWVyc19tYXgsIG1vZGVsX3BvaW50cyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpbmxpZXJzX21heCA9IG51bWlubGllcnM7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuICAgICAgICAgICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMoKGNvdW50IC0gbnVtaW5saWVycykgLyBjb3VudCwgbml0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxtZWRzKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21hdGggPSBuZXcgbWF0aCgpO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBsaW5hbGcgZnJvbSAnLi4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgY2xhc3MgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5UMCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5UMSA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEEgPSBuZXcgbWF0cml4X3QoNiwgNiwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRCID0gbmV3IG1hdHJpeF90KDYsIDEsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBzcXIoeCkge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG4gICAgLy8gZG9lcyBpc290cm9waWMgbm9ybWFsaXphdGlvblxuICAgIGlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCBUMCwgVDEsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN4MCA9IDAuMCwgY3kwID0gMC4wLCBkMCA9IDAuMCwgczAgPSAwLjA7XG4gICAgICAgIHZhciBjeDEgPSAwLjAsIGN5MSA9IDAuMCwgZDEgPSAwLjAsIHMxID0gMC4wO1xuICAgICAgICB2YXIgZHggPSAwLjAsIGR5ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY3gwICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGN5MCArPSBmcm9tW2ldLnk7XG4gICAgICAgICAgICBjeDEgKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGN5MSArPSB0b1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY3gwIC89IGNvdW50OyBjeTAgLz0gY291bnQ7XG4gICAgICAgIGN4MSAvPSBjb3VudDsgY3kxIC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBkeCA9IGZyb21baV0ueCAtIGN4MDtcbiAgICAgICAgICAgIGR5ID0gZnJvbVtpXS55IC0gY3kwO1xuICAgICAgICAgICAgZDAgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGR4ID0gdG9baV0ueCAtIGN4MTtcbiAgICAgICAgICAgIGR5ID0gdG9baV0ueSAtIGN5MTtcbiAgICAgICAgICAgIGQxICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cblxuICAgICAgICBkMCAvPSBjb3VudDsgZDEgLz0gY291bnQ7XG5cbiAgICAgICAgczAgPSBNYXRoLlNRUlQyIC8gZDA7IHMxID0gTWF0aC5TUVJUMiAvIGQxO1xuXG4gICAgICAgIFQwWzBdID0gVDBbNF0gPSBzMDtcbiAgICAgICAgVDBbMl0gPSAtY3gwICogczA7XG4gICAgICAgIFQwWzVdID0gLWN5MCAqIHMwO1xuICAgICAgICBUMFsxXSA9IFQwWzNdID0gVDBbNl0gPSBUMFs3XSA9IDAuMDtcbiAgICAgICAgVDBbOF0gPSAxLjA7XG5cbiAgICAgICAgVDFbMF0gPSBUMVs0XSA9IHMxO1xuICAgICAgICBUMVsyXSA9IC1jeDEgKiBzMTtcbiAgICAgICAgVDFbNV0gPSAtY3kxICogczE7XG4gICAgICAgIFQxWzFdID0gVDFbM10gPSBUMVs2XSA9IFQxWzddID0gMC4wO1xuICAgICAgICBUMVs4XSA9IDEuMDtcbiAgICB9XG5cbiAgICBoYXZlX2NvbGxpbmVhcl9wb2ludHMocG9pbnRzLCBjb3VudCkge1xuICAgICAgICB2YXIgaiA9IDAsIGsgPSAwLCBpID0gKGNvdW50IC0gMSkgfCAwO1xuICAgICAgICB2YXIgZHgxID0gMC4wLCBkeTEgPSAwLjAsIGR4MiA9IDAuMCwgZHkyID0gMC4wO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGktdGggc2VsZWN0ZWQgcG9pbnQgZG9lcyBub3QgYmVsb25nXG4gICAgICAgIC8vIHRvIGEgbGluZSBjb25uZWN0aW5nIHNvbWUgcHJldmlvdXNseSBzZWxlY3RlZCBwb2ludHNcbiAgICAgICAgZm9yICg7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgIGR4MSA9IHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBkeTEgPSBwb2ludHNbal0ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7ICsraykge1xuICAgICAgICAgICAgICAgIGR4MiA9IHBvaW50c1trXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgZHkyID0gcG9pbnRzW2tdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cbiAgICBydW4oZnJvbSwgdG8sIG1vZGVsLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCBweCA9IDAuMCwgcHkgPSAwLjA7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBsaW5hbGcoKTtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcblxuICAgICAgICAvLyBub3JtXG4gICAgICAgIHZhciBzbXggPSAwLjAsIHNteSA9IDAuMCwgY214ID0gMC4wLCBjbXkgPSAwLjAsIHNNeCA9IDAuMCwgc015ID0gMC4wLCBjTXggPSAwLjAsIGNNeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNteCArPSB0b1tpXS54O1xuICAgICAgICAgICAgY215ICs9IHRvW2ldLnk7XG4gICAgICAgICAgICBjTXggKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY015ICs9IGZyb21baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNteCAvPSBjb3VudDsgY215IC89IGNvdW50O1xuICAgICAgICBjTXggLz0gY291bnQ7IGNNeSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc214ICs9IE1hdGguYWJzKHRvW2ldLnggLSBjbXgpO1xuICAgICAgICAgICAgc215ICs9IE1hdGguYWJzKHRvW2ldLnkgLSBjbXkpO1xuICAgICAgICAgICAgc014ICs9IE1hdGguYWJzKGZyb21baV0ueCAtIGNNeCk7XG4gICAgICAgICAgICBzTXkgKz0gTWF0aC5hYnMoZnJvbVtpXS55IC0gY015KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzbXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDsgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014OyBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7IHQwZFsxXSA9IDA7IHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7IHQwZFs0XSA9IHNNeTsgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDsgdDBkWzddID0gMDsgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7IHQxZFsxXSA9IDA7IHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDsgdDFkWzRdID0gMS4wIC8gc215OyB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7IHQxZFs3XSA9IDA7IHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKVxuICAgICAgICAgICAgICAgIEx0TFtpICogOSArIGpdID0gTHRMW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBfbGluYWxnLmVpZ2VuVlYodGhpcy5tTHRMLCB0aGlzLkV2ZWMpO1xuXG4gICAgICAgIG1kWzBdID0gZXZkWzcyXSwgbWRbMV0gPSBldmRbNzNdLCBtZFsyXSA9IGV2ZFs3NF07XG4gICAgICAgIG1kWzNdID0gZXZkWzc1XSwgbWRbNF0gPSBldmRbNzZdLCBtZFs1XSA9IGV2ZFs3N107XG4gICAgICAgIG1kWzZdID0gZXZkWzc4XSwgbWRbN10gPSBldmRbNzldLCBtZFs4XSA9IGV2ZFs4MF07XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIHNldCBib3R0b20gcmlnaHQgdG8gMS4wXG4gICAgICAgIHggPSAxLjAgLyBtZFs4XTtcbiAgICAgICAgbWRbMF0gKj0geDsgbWRbMV0gKj0geDsgbWRbMl0gKj0geDtcbiAgICAgICAgbWRbM10gKj0geDsgbWRbNF0gKj0geDsgbWRbNV0gKj0geDtcbiAgICAgICAgbWRbNl0gKj0geDsgbWRbN10gKj0geDsgbWRbOF0gPSAxLjA7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgd3cgPSAwLjAsIGR4ID0gMC4wLCBkeSA9IDAuMDtcbiAgICAgICAgdmFyIG0gPSBtb2RlbC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICB3dyA9IDEuMCAvIChtWzZdICogcHQwLnggKyBtWzddICogcHQwLnkgKyAxLjApO1xuICAgICAgICAgICAgZHggPSAobVswXSAqIHB0MC54ICsgbVsxXSAqIHB0MC55ICsgbVsyXSkgKiB3dyAtIHB0MS54O1xuICAgICAgICAgICAgZHkgPSAobVszXSAqIHB0MC54ICsgbVs0XSAqIHB0MC55ICsgbVs1XSkgKiB3dyAtIHB0MS55O1xuICAgICAgICAgICAgZXJyW2ldID0gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja19zdWJzZXQoZnJvbSwgdG8sIGNvdW50KSB7XG4gICAgICAgIC8vIHNlZW1zIHRvIHJlamVjdCBnb29kIHN1YnNldHMgYWN0dWFsbHlcbiAgICAgICAgLy9pZiggaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKGZyb20sIGNvdW50KSB8fCBoYXZlX2NvbGxpbmVhcl9wb2ludHModG8sIGNvdW50KSApIHtcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgdmFyIGZwMCA9IGZyb21bMF0sIGZwMSA9IGZyb21bMV0sIGZwMiA9IGZyb21bMl0sIGZwMyA9IGZyb21bM107XG4gICAgICAgICAgICB2YXIgdHAwID0gdG9bMF0sIHRwMSA9IHRvWzFdLCB0cDIgPSB0b1syXSwgdHAzID0gdG9bM107XG5cbiAgICAgICAgICAgIC8vIHNldDFcbiAgICAgICAgICAgIHZhciBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnksIEExMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnksIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMzEgPSBmcDIueCwgQTMyID0gZnAyLnksIEEzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueSwgQjEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueSwgQjIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIzMSA9IHRwMi54LCBCMzIgPSB0cDIueSwgQjMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIHZhciBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQyXG4gICAgICAgICAgICBBMTEgPSBmcDEueCwgQTEyID0gZnAxLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMS54LCBCMTIgPSB0cDEueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDNcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0NFxuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICBpZiAobmVnYXRpdmUgIT0gMCAmJiBuZWdhdGl2ZSAhPSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBhbGwgZ29vZFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHRocmVzaCwgZXBzLCBwcm9iKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdCAge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMsIGJ1ZmZlcikge1xuICAgICAgICAvL3N1cGVyKClcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9wdGljYWxfZmxvd19sayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBfaW1ncHJvYyA9IG5ldyBpbWdwcm9jKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2ID0gX2ltZ3Byb2Muc2NoYXJyX2Rlcml2YXRpdmVzO1xuICAgIH1cbiAgICB0cmFjayhwcmV2X3B5ciwgY3Vycl9weXIsIHByZXZfeHksIGN1cnJfeHksIGNvdW50LCB3aW5fc2l6ZSwgbWF4X2l0ZXIsIHN0YXR1cywgZXBzLCBtaW5fZWlnZW5fdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXIgPSAzMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN0YXR1cyA9PT0gXCJ1bmRlZmluZWRcIikgeyBzdGF0dXMgPSBuZXcgVWludDhBcnJheShjb3VudCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC4wMTsgfVxuICAgICAgICBpZiAodHlwZW9mIG1pbl9laWdlbl90aHJlc2hvbGQgPT09IFwidW5kZWZpbmVkXCIpIHsgbWluX2VpZ2VuX3RocmVzaG9sZCA9IDAuMDAwMTsgfVxuXG4gICAgICAgIHZhciBoYWxmX3dpbiA9ICh3aW5fc2l6ZSAtIDEpICogMC41O1xuICAgICAgICB2YXIgd2luX2FyZWEgPSAod2luX3NpemUgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICB2YXIgd2luX2FyZWEyID0gd2luX2FyZWEgPDwgMTtcbiAgICAgICAgdmFyIHByZXZfaW1ncyA9IHByZXZfcHlyLmRhdGEsIG5leHRfaW1ncyA9IGN1cnJfcHlyLmRhdGE7XG4gICAgICAgIHZhciBpbWdfcHJldiA9IHByZXZfaW1nc1swXS5kYXRhLCBpbWdfbmV4dCA9IG5leHRfaW1nc1swXS5kYXRhO1xuICAgICAgICB2YXIgdzAgPSBwcmV2X2ltZ3NbMF0uY29scywgaDAgPSBwcmV2X2ltZ3NbMF0ucm93cywgbHcgPSAwLCBsaCA9IDA7XG5cbiAgICAgICAgdmFyIGl3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYSA8PCAyKTtcbiAgICAgICAgdmFyIGRlcml2X2l3aW5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcih3aW5fYXJlYTIgPDwgMik7XG4gICAgICAgIHZhciBkZXJpdl9sZXZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaDAgKiAodzAgPDwgMSkpIDw8IDIpO1xuXG4gICAgICAgIHZhciBkZXJpdl9tID0gbmV3IG1hdHJpeF90KHcwLCBoMCwgSlNGRUFUX0NPTlNUQU5UUy5TMzJDMl90LCBkZXJpdl9sZXZfbm9kZS5kYXRhKTtcblxuICAgICAgICB2YXIgaXdpbl9idWYgPSBpd2luX25vZGUuaTMyO1xuICAgICAgICB2YXIgZGVyaXZfaXdpbiA9IGRlcml2X2l3aW5fbm9kZS5pMzI7XG4gICAgICAgIHZhciBkZXJpdl9sZXYgPSBkZXJpdl9sZXZfbm9kZS5pMzI7XG5cbiAgICAgICAgdmFyIGRzdGVwID0gMCwgc3JjID0gMCwgZHNyYyA9IDAsIGlwdHIgPSAwLCBkaXB0ciA9IDAsIGpwdHIgPSAwO1xuICAgICAgICB2YXIgbGV2X3NjID0gMC4wLCBwcmV2X3ggPSAwLjAsIHByZXZfeSA9IDAuMCwgbmV4dF94ID0gMC4wLCBuZXh0X3kgPSAwLjA7XG4gICAgICAgIHZhciBwcmV2X2RlbHRhX3ggPSAwLjAsIHByZXZfZGVsdGFfeSA9IDAuMCwgZGVsdGFfeCA9IDAuMCwgZGVsdGFfeSA9IDAuMDtcbiAgICAgICAgdmFyIGlwcmV2X3ggPSAwLCBpcHJldl95ID0gMCwgaW5leHRfeCA9IDAsIGluZXh0X3kgPSAwO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCB4ID0gMCwgeSA9IDAsIGxldmVsID0gMCwgcHRpZCA9IDAsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgYnJkX3RsID0gMCwgYnJkX3IgPSAwLCBicmRfYiA9IDA7XG4gICAgICAgIHZhciBhID0gMC4wLCBiID0gMC4wLCBiMSA9IDAuMCwgYjIgPSAwLjA7XG5cbiAgICAgICAgLy8gZml4ZWQgcG9pbnQgbWF0aFxuICAgICAgICB2YXIgV19CSVRTMTQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzQgPSAxNDtcbiAgICAgICAgdmFyIFdfQklUUzFtNSA9IFdfQklUUzQgLSA1O1xuICAgICAgICB2YXIgV19CSVRTMW01MSA9ICgxIDw8ICgoV19CSVRTMW01KSAtIDEpKTtcbiAgICAgICAgdmFyIFdfQklUUzE0XyA9ICgxIDw8IFdfQklUUzE0KTtcbiAgICAgICAgdmFyIFdfQklUUzQxID0gKDEgPDwgKChXX0JJVFM0KSAtIDEpKTtcbiAgICAgICAgdmFyIEZMVF9TQ0FMRSA9IDEuMCAvICgxIDw8IDIwKTtcbiAgICAgICAgdmFyIGl3MDAgPSAwLCBpdzAxID0gMCwgaXcxMCA9IDAsIGl3MTEgPSAwLCBpdmFsID0gMCwgaXh2YWwgPSAwLCBpeXZhbCA9IDA7XG4gICAgICAgIHZhciBBMTEgPSAwLjAsIEExMiA9IDAuMCwgQTIyID0gMC4wLCBEID0gMC4wLCBtaW5fZWlnID0gMC4wO1xuXG4gICAgICAgIHZhciBGTFRfRVBTSUxPTiA9IDAuMDAwMDAwMTE5MjA5Mjk7XG4gICAgICAgIGVwcyAqPSBlcHM7XG5cbiAgICAgICAgLy8gcmVzZXQgc3RhdHVzXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc3RhdHVzW2ldID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXhfbGV2ZWwgPSAocHJldl9weXIubGV2ZWxzIC0gMSkgfCAwO1xuICAgICAgICBsZXZlbCA9IG1heF9sZXZlbDtcblxuICAgICAgICBmb3IgKDsgbGV2ZWwgPj0gMDsgLS1sZXZlbCkge1xuICAgICAgICAgICAgbGV2X3NjID0gKDEuMCAvICgxIDw8IGxldmVsKSk7XG4gICAgICAgICAgICBsdyA9IHcwID4+IGxldmVsO1xuICAgICAgICAgICAgbGggPSBoMCA+PiBsZXZlbDtcbiAgICAgICAgICAgIGRzdGVwID0gbHcgPDwgMTtcbiAgICAgICAgICAgIGltZ19wcmV2ID0gcHJldl9pbWdzW2xldmVsXS5kYXRhO1xuICAgICAgICAgICAgaW1nX25leHQgPSBuZXh0X2ltZ3NbbGV2ZWxdLmRhdGE7XG5cbiAgICAgICAgICAgIGJyZF9yID0gKGx3IC0gd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgIGJyZF9iID0gKGxoIC0gd2luX3NpemUpIHwgMDtcblxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxldmVsIGRlcml2YXRpdmVzXG4gICAgICAgICAgICB0aGlzLnNjaGFycl9kZXJpdihwcmV2X2ltZ3NbbGV2ZWxdLCBkZXJpdl9tKTtcblxuICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBvaW50c1xuICAgICAgICAgICAgZm9yIChwdGlkID0gMDsgcHRpZCA8IGNvdW50OyArK3B0aWQpIHtcbiAgICAgICAgICAgICAgICBpID0gcHRpZCA8PCAxO1xuICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICBwcmV2X3ggPSBwcmV2X3h5W2ldICogbGV2X3NjO1xuICAgICAgICAgICAgICAgIHByZXZfeSA9IHByZXZfeHlbal0gKiBsZXZfc2M7XG5cbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gbWF4X2xldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IHByZXZfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gcHJldl95O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeCA9IGN1cnJfeHlbaV0gKiAyLjA7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSA9IGN1cnJfeHlbal0gKiAyLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3g7XG4gICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeTtcblxuICAgICAgICAgICAgICAgIHByZXZfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBwcmV2X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgaXByZXZfeCA9IHByZXZfeCB8IDA7XG4gICAgICAgICAgICAgICAgaXByZXZfeSA9IHByZXZfeSB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBib3JkZXIgY2hlY2tcbiAgICAgICAgICAgICAgICB4ID0gKGlwcmV2X3ggPD0gYnJkX3RsKSB8IChpcHJldl94ID49IGJyZF9yKSB8IChpcHJldl95IDw9IGJyZF90bCkgfCAoaXByZXZfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgaXcwMSA9ICgoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XykgKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICBpdzEwID0gKCgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfKSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcblxuICAgICAgICAgICAgICAgIEExMSA9IDAuMCwgQTEyID0gMC4wLCBBMjIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwYXRjaCBmcm9tIHRoZSBmaXJzdCBpbWFnZSwgY29tcHV0ZSBjb3ZhcmlhdGlvbiBtYXRyaXggb2YgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2luX3NpemU7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICBzcmMgPSAoKHkgKyBpcHJldl95KSAqIGx3ICsgaXByZXZfeCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBkc3JjID0gc3JjIDw8IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aW5fc2l6ZTsgKyt4LCArK3NyYywgKytpcHRyLCBkc3JjICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKGltZ19wcmV2W3NyY10pICogaXcwMCArIChpbWdfcHJldltzcmMgKyAxXSkgKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nX3ByZXZbc3JjICsgbHddKSAqIGl3MTAgKyAoaW1nX3ByZXZbc3JjICsgbHcgKyAxXSkgKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoKChpdmFsKSArIFdfQklUUzFtNTEpID4+IChXX0JJVFMxbTUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPSAoZGVyaXZfbGV2W2RzcmNdICogaXcwMCArIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMl0gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl4dmFsID0gKCgoaXh2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKGRlcml2X2xldltkc3JjICsgMV0gKiBpdzAwICsgZGVyaXZfbGV2W2RzcmMgKyAzXSAqIGl3MDEgKyBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl5dmFsID0gKCgoaXl2YWwpICsgV19CSVRTNDEpID4+IChXX0JJVFM0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl3aW5fYnVmW2lwdHJdID0gaXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2l3aW5bZGlwdHIrK10gPSBpeXZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQTExICs9IGl4dmFsICogaXh2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBBMTIgKz0gaXh2YWwgKiBpeXZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEyMiArPSBpeXZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQTExICo9IEZMVF9TQ0FMRTsgQTEyICo9IEZMVF9TQ0FMRTsgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gKGluZXh0X3ggPD0gYnJkX3RsKSB8IChpbmV4dF94ID49IGJyZF9yKSB8IChpbmV4dF95IDw9IGJyZF90bCkgfCAoaW5leHRfeSA+PSBicmRfYik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgoMS4wIC0gYSkgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MDEgPSAoKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTAgPSAoKCgxLjAgLSBhKSAqIGIgKiBXX0JJVFMxNF8pICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSAoV19CSVRTMTRfIC0gaXcwMCAtIGl3MDEgLSBpdzEwKTtcbiAgICAgICAgICAgICAgICAgICAgYjEgPSAwLjAsIGIyID0gMC4wO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aW5fc2l6ZTsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcHRyID0gKCh5ICsgaW5leHRfeSkgKiBsdyArIGluZXh0X3gpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXB0ciA9ICh5ICogd2luX3NpemUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpbl9zaXplOyArK3gsICsranB0ciwgKytpcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoaW1nX25leHRbanB0cl0pICogaXcwMCArIChpbWdfbmV4dFtqcHRyICsgMV0pICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbWdfbmV4dFtqcHRyICsgbHddKSAqIGl3MTAgKyAoaW1nX25leHRbanB0ciArIGx3ICsgMV0pICogaXcxMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXZhbCA9ICgoKGl2YWwpICsgV19CSVRTMW01MSkgPj4gKFdfQklUUzFtNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCAtIGl3aW5fYnVmW2lwdHJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyICs9IGl2YWwgKiBkZXJpdl9pd2luW2RpcHRyKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYjEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICBiMiAqPSBGTFRfU0NBTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeCA9ICgoQTEyICogYjIgLSBBMjIgKiBiMSkgKiBEKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9ICgoQTEyICogYjEgLSBBMTEgKiBiMikgKiBEKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0X3ggKz0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ICs9IGRlbHRhX3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gPSBuZXh0X3ggKyBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSA9IG5leHRfeSArIGhhbGZfd2luO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95IDw9IGVwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA+IDAgJiYgTWF0aC5hYnMoZGVsdGFfeCArIHByZXZfZGVsdGFfeCkgPCAwLjAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkZWx0YV95ICsgcHJldl9kZWx0YV95KSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbaV0gLT0gZGVsdGFfeCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gLT0gZGVsdGFfeSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gZGVsdGFfeDtcbiAgICAgICAgICAgICAgICAgICAgcHJldl9kZWx0YV95ID0gZGVsdGFfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIHBvaW50cyBsb29wXG4gICAgICAgIH0gLy8gbGV2ZWxzIGxvb3BcblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2l3aW5fbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkZXJpdl9sZXZfbm9kZSk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBiaXRfcGF0dGVybl8zMSA9IFtcbiAgICA4LC0zLCA5LDUvKm1lYW4gKDApLCBjb3JyZWxhdGlvbiAoMCkqLyxcbiAgICA0LDIsIDcsLTEyLyptZWFuICgxLjEyNDYxZS0wNSksIGNvcnJlbGF0aW9uICgwLjA0Mzc1ODQpKi8sXG4gICAgLTExLDksIC04LDIvKm1lYW4gKDMuMzczODJlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYxNzQwOSkqLyxcbiAgICA3LC0xMiwgMTIsLTEzLyptZWFuICg1LjYyMzAzZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MzY5NzcpKi8sXG4gICAgMiwtMTMsIDIsMTIvKm1lYW4gKDAuMDAwMTM0OTUzKSwgY29ycmVsYXRpb24gKDAuMDg1MDk5KSovLFxuICAgIDEsLTcsIDEsNi8qbWVhbiAoMC4wMDA1Mjg1NjUpLCBjb3JyZWxhdGlvbiAoMC4wODU3MTc1KSovLFxuICAgIC0yLC0xMCwgLTIsLTQvKm1lYW4gKDAuMDE4ODgyMSksIGNvcnJlbGF0aW9uICgwLjA5ODU3NzQpKi8sXG4gICAgLTEzLC0xMywgLTExLC04LyptZWFuICgwLjAzNjMxMzUpLCBjb3JyZWxhdGlvbiAoMC4wODk5NjE2KSovLFxuICAgIC0xMywtMywgLTEyLC05LyptZWFuICgwLjEyMTgwNiksIGNvcnJlbGF0aW9uICgwLjA5OTg0OSkqLyxcbiAgICAxMCw0LCAxMSw5LyptZWFuICgwLjEyMjA2NSksIGNvcnJlbGF0aW9uICgwLjA5MzI4NSkqLyxcbiAgICAtMTMsLTgsIC04LC05LyptZWFuICgwLjE2Mjc4NyksIGNvcnJlbGF0aW9uICgwLjA5NDI3NDgpKi8sXG4gICAgLTExLDcsIC05LDEyLyptZWFuICgwLjIxNTYxKSwgY29ycmVsYXRpb24gKDAuMDk3NDQzOCkqLyxcbiAgICA3LDcsIDEyLDYvKm1lYW4gKDAuMTYwNTgzKSwgY29ycmVsYXRpb24gKDAuMTMwMDY0KSovLFxuICAgIC00LC01LCAtMywwLyptZWFuICgwLjIyODE3MSksIGNvcnJlbGF0aW9uICgwLjEzMjk5OCkqLyxcbiAgICAtMTMsMiwgLTEyLC0zLyptZWFuICgwLjAwOTk3NTI2KSwgY29ycmVsYXRpb24gKDAuMTQ1OTI2KSovLFxuICAgIC05LDAsIC03LDUvKm1lYW4gKDAuMTk4MjM0KSwgY29ycmVsYXRpb24gKDAuMTQzNjM2KSovLFxuICAgIDEyLC02LCAxMiwtMS8qbWVhbiAoMC4wNjc2MjI2KSwgY29ycmVsYXRpb24gKDAuMTY2ODkpKi8sXG4gICAgLTMsNiwgLTIsMTIvKm1lYW4gKDAuMTY2ODQ3KSwgY29ycmVsYXRpb24gKDAuMTcxNjgyKSovLFxuICAgIC02LC0xMywgLTQsLTgvKm1lYW4gKDAuMTAxMjE1KSwgY29ycmVsYXRpb24gKDAuMTc5NzE2KSovLFxuICAgIDExLC0xMywgMTIsLTgvKm1lYW4gKDAuMjAwNjQxKSwgY29ycmVsYXRpb24gKDAuMTkyMjc5KSovLFxuICAgIDQsNywgNSwxLyptZWFuICgwLjIwNTEwNiksIGNvcnJlbGF0aW9uICgwLjE4Njg0OCkqLyxcbiAgICA1LC0zLCAxMCwtMy8qbWVhbiAoMC4yMzQ5MDgpLCBjb3JyZWxhdGlvbiAoMC4xOTIzMTkpKi8sXG4gICAgMywtNywgNiwxMi8qbWVhbiAoMC4wNzA5OTY0KSwgY29ycmVsYXRpb24gKDAuMjEwODcyKSovLFxuICAgIC04LC03LCAtNiwtMi8qbWVhbiAoMC4wOTM5ODM0KSwgY29ycmVsYXRpb24gKDAuMjEyNTg5KSovLFxuICAgIC0yLDExLCAtMSwtMTAvKm1lYW4gKDAuMTI3Nzc4KSwgY29ycmVsYXRpb24gKDAuMjA4NjYpKi8sXG4gICAgLTEzLDEyLCAtOCwxMC8qbWVhbiAoMC4xNDc4MyksIGNvcnJlbGF0aW9uICgwLjIwNjM1NikqLyxcbiAgICAtNywzLCAtNSwtMy8qbWVhbiAoMC4xODIxNDEpLCBjb3JyZWxhdGlvbiAoMC4xOTg5NDIpKi8sXG4gICAgLTQsMiwgLTMsNy8qbWVhbiAoMC4xODgyMzcpLCBjb3JyZWxhdGlvbiAoMC4yMTM4NCkqLyxcbiAgICAtMTAsLTEyLCAtNiwxMS8qbWVhbiAoMC4xNDg2NSksIGNvcnJlbGF0aW9uICgwLjIzNTcxKSovLFxuICAgIDUsLTEyLCA2LC03LyptZWFuICgwLjIyMjMxMiksIGNvcnJlbGF0aW9uICgwLjIzMzI0KSovLFxuICAgIDUsLTYsIDcsLTEvKm1lYW4gKDAuMjI5MDgyKSwgY29ycmVsYXRpb24gKDAuMjMzODkpKi8sXG4gICAgMSwwLCA0LC01LyptZWFuICgwLjI0MTU3NyksIGNvcnJlbGF0aW9uICgwLjIxNTI4NikqLyxcbiAgICA5LDExLCAxMSwtMTMvKm1lYW4gKDAuMDAzMzg1MDcpLCBjb3JyZWxhdGlvbiAoMC4yNTEzNzMpKi8sXG4gICAgNCw3LCA0LDEyLyptZWFuICgwLjEzMTAwNSksIGNvcnJlbGF0aW9uICgwLjI1NzYyMikqLyxcbiAgICAyLC0xLCA0LDQvKm1lYW4gKDAuMTUyNzU1KSwgY29ycmVsYXRpb24gKDAuMjU1MjA1KSovLFxuICAgIC00LC0xMiwgLTIsNy8qbWVhbiAoMC4xODI3NzEpLCBjb3JyZWxhdGlvbiAoMC4yNDQ4NjcpKi8sXG4gICAgLTgsLTUsIC03LC0xMC8qbWVhbiAoMC4xODY4OTgpLCBjb3JyZWxhdGlvbiAoMC4yMzkwMSkqLyxcbiAgICA0LDExLCA5LDEyLyptZWFuICgwLjIyNjIyNiksIGNvcnJlbGF0aW9uICgwLjI1ODI1NSkqLyxcbiAgICAwLC04LCAxLC0xMy8qbWVhbiAoMC4wODk3ODg2KSwgY29ycmVsYXRpb24gKDAuMjc0ODI3KSovLFxuICAgIC0xMywtMiwgLTgsMi8qbWVhbiAoMC4xNDg3NzQpLCBjb3JyZWxhdGlvbiAoMC4yODA2NSkqLyxcbiAgICAtMywtMiwgLTIsMy8qbWVhbiAoMC4xNTMwNDgpLCBjb3JyZWxhdGlvbiAoMC4yODMwNjMpKi8sXG4gICAgLTYsOSwgLTQsLTkvKm1lYW4gKDAuMTY5NTIzKSwgY29ycmVsYXRpb24gKDAuMjc4MjQ4KSovLFxuICAgIDgsMTIsIDEwLDcvKm1lYW4gKDAuMjI1MzM3KSwgY29ycmVsYXRpb24gKDAuMjgyODUxKSovLFxuICAgIDAsOSwgMSwzLyptZWFuICgwLjIyNjY4NyksIGNvcnJlbGF0aW9uICgwLjI3ODczNCkqLyxcbiAgICA3LC01LCAxMSwtMTAvKm1lYW4gKDAuMDA2OTM4ODIpLCBjb3JyZWxhdGlvbiAoMC4zMDUxNjEpKi8sXG4gICAgLTEzLC02LCAtMTEsMC8qbWVhbiAoMC4wMjI3MjgzKSwgY29ycmVsYXRpb24gKDAuMzAwMTgxKSovLFxuICAgIDEwLDcsIDEyLDEvKm1lYW4gKDAuMTI1NTE3KSwgY29ycmVsYXRpb24gKDAuMzEwODkpKi8sXG4gICAgLTYsLTMsIC02LDEyLyptZWFuICgwLjEzMTc0OCksIGNvcnJlbGF0aW9uICgwLjMxMjc3OSkqLyxcbiAgICAxMCwtOSwgMTIsLTQvKm1lYW4gKDAuMTQ0ODI3KSwgY29ycmVsYXRpb24gKDAuMjkyNzk3KSovLFxuICAgIC0xMyw4LCAtOCwtMTIvKm1lYW4gKDAuMTQ5MjAyKSwgY29ycmVsYXRpb24gKDAuMzA4OTE4KSovLFxuICAgIC0xMywwLCAtOCwtNC8qbWVhbiAoMC4xNjA5MDkpLCBjb3JyZWxhdGlvbiAoMC4zMTAwMTMpKi8sXG4gICAgMywzLCA3LDgvKm1lYW4gKDAuMTc3NzU1KSwgY29ycmVsYXRpb24gKDAuMzA5Mzk0KSovLFxuICAgIDUsNywgMTAsLTcvKm1lYW4gKDAuMjEyMzM3KSwgY29ycmVsYXRpb24gKDAuMzEwMzE1KSovLFxuICAgIC0xLDcsIDEsLTEyLyptZWFuICgwLjIxNDQyOSksIGNvcnJlbGF0aW9uICgwLjMxMTkzMykqLyxcbiAgICAzLC0xMCwgNSw2LyptZWFuICgwLjIzNTgwNyksIGNvcnJlbGF0aW9uICgwLjMxMzEwNCkqLyxcbiAgICAyLC00LCAzLC0xMC8qbWVhbiAoMC4wMDQ5NDgyNyksIGNvcnJlbGF0aW9uICgwLjM0NDk0OCkqLyxcbiAgICAtMTMsMCwgLTEzLDUvKm1lYW4gKDAuMDU0OTE0NSksIGNvcnJlbGF0aW9uICgwLjM0NDY3NSkqLyxcbiAgICAtMTMsLTcsIC0xMiwxMi8qbWVhbiAoMC4xMDMzODUpLCBjb3JyZWxhdGlvbiAoMC4zNDI3MTUpKi8sXG4gICAgLTEzLDMsIC0xMSw4LyptZWFuICgwLjEzNDIyMiksIGNvcnJlbGF0aW9uICgwLjMyMjkyMikqLyxcbiAgICAtNywxMiwgLTQsNy8qbWVhbiAoMC4xNTMyODQpLCBjb3JyZWxhdGlvbiAoMC4zMzcwNjEpKi8sXG4gICAgNiwtMTAsIDEyLDgvKm1lYW4gKDAuMTU0ODgxKSwgY29ycmVsYXRpb24gKDAuMzI5MjU3KSovLFxuICAgIC05LC0xLCAtNywtNi8qbWVhbiAoMC4yMDA5NjcpLCBjb3JyZWxhdGlvbiAoMC4zMzMxMikqLyxcbiAgICAtMiwtNSwgMCwxMi8qbWVhbiAoMC4yMDE1MTgpLCBjb3JyZWxhdGlvbiAoMC4zNDA2MzUpKi8sXG4gICAgLTEyLDUsIC03LDUvKm1lYW4gKDAuMjA3ODA1KSwgY29ycmVsYXRpb24gKDAuMzM1NjMxKSovLFxuICAgIDMsLTEwLCA4LC0xMy8qbWVhbiAoMC4yMjQ0MzgpLCBjb3JyZWxhdGlvbiAoMC4zNDUwNCkqLyxcbiAgICAtNywtNywgLTQsNS8qbWVhbiAoMC4yMzkzNjEpLCBjb3JyZWxhdGlvbiAoMC4zMzgwNTMpKi8sXG4gICAgLTMsLTIsIC0xLC03LyptZWFuICgwLjI0MDc0NCksIGNvcnJlbGF0aW9uICgwLjM0NDMyMikqLyxcbiAgICAyLDksIDUsLTExLyptZWFuICgwLjI0Mjk0OSksIGNvcnJlbGF0aW9uICgwLjM0MTQ1KSovLFxuICAgIC0xMSwtMTMsIC01LC0xMy8qbWVhbiAoMC4yNDQwMjgpLCBjb3JyZWxhdGlvbiAoMC4zMzY4NjEpKi8sXG4gICAgLTEsNiwgMCwtMS8qbWVhbiAoMC4yNDc1NzEpLCBjb3JyZWxhdGlvbiAoMC4zNDM2ODQpKi8sXG4gICAgNSwtMywgNSwyLyptZWFuICgwLjAwMDY5NzI1NiksIGNvcnJlbGF0aW9uICgwLjM1NzI2NSkqLyxcbiAgICAtNCwtMTMsIC00LDEyLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuMzczODI3KSovLFxuICAgIC05LC02LCAtOSw2LyptZWFuICgwLjAxMjY4NTYpLCBjb3JyZWxhdGlvbiAoMC4zNzM5MzgpKi8sXG4gICAgLTEyLC0xMCwgLTgsLTQvKm1lYW4gKDAuMDE1MjQ5NyksIGNvcnJlbGF0aW9uICgwLjM2NDIzNykqLyxcbiAgICAxMCwyLCAxMiwtMy8qbWVhbiAoMC4wMjk5OTMzKSwgY29ycmVsYXRpb24gKDAuMzQ1MjkyKSovLFxuICAgIDcsMTIsIDEyLDEyLyptZWFuICgwLjAzMDcyNDIpLCBjb3JyZWxhdGlvbiAoMC4zNjYyOTkpKi8sXG4gICAgLTcsLTEzLCAtNiw1LyptZWFuICgwLjA1MzQ5NzUpLCBjb3JyZWxhdGlvbiAoMC4zNjgzNTcpKi8sXG4gICAgLTQsOSwgLTMsNC8qbWVhbiAoMC4wOTk4NjUpLCBjb3JyZWxhdGlvbiAoMC4zNzIyNzYpKi8sXG4gICAgNywtMSwgMTIsMi8qbWVhbiAoMC4xMTcwODMpLCBjb3JyZWxhdGlvbiAoMC4zNjQ1MjkpKi8sXG4gICAgLTcsNiwgLTUsMS8qbWVhbiAoMC4xMjYxMjUpLCBjb3JyZWxhdGlvbiAoMC4zNjk2MDYpKi8sXG4gICAgLTEzLDExLCAtMTIsNS8qbWVhbiAoMC4xMzAzNjQpLCBjb3JyZWxhdGlvbiAoMC4zNTg1MDIpKi8sXG4gICAgLTMsNywgLTIsLTYvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuMzc1NTMxKSovLFxuICAgIDcsLTgsIDEyLC03LyptZWFuICgwLjE2MDE2NiksIGNvcnJlbGF0aW9uICgwLjM3OTUwOCkqLyxcbiAgICAtMTMsLTcsIC0xMSwtMTIvKm1lYW4gKDAuMTY3ODQ4KSwgY29ycmVsYXRpb24gKDAuMzUzMzQzKSovLFxuICAgIDEsLTMsIDEyLDEyLyptZWFuICgwLjE4MzM3OCksIGNvcnJlbGF0aW9uICgwLjM3MTkxNikqLyxcbiAgICAyLC02LCAzLDAvKm1lYW4gKDAuMjI4NzExKSwgY29ycmVsYXRpb24gKDAuMzcxNzYxKSovLFxuICAgIC00LDMsIC0yLC0xMy8qbWVhbiAoMC4yNDcyMTEpLCBjb3JyZWxhdGlvbiAoMC4zNjQwNjMpKi8sXG4gICAgLTEsLTEzLCAxLDkvKm1lYW4gKDAuMjQ5MzI1KSwgY29ycmVsYXRpb24gKDAuMzc4MTM5KSovLFxuICAgIDcsMSwgOCwtNi8qbWVhbiAoMC4wMDA2NTIyNzIpLCBjb3JyZWxhdGlvbiAoMC40MTE2ODIpKi8sXG4gICAgMSwtMSwgMywxMi8qbWVhbiAoMC4wMDI0ODUzOCksIGNvcnJlbGF0aW9uICgwLjM5Mjk4OCkqLyxcbiAgICA5LDEsIDEyLDYvKm1lYW4gKDAuMDIwNjgxNSksIGNvcnJlbGF0aW9uICgwLjM4NjEwNikqLyxcbiAgICAtMSwtOSwgLTEsMy8qbWVhbiAoMC4wMzY0NDg1KSwgY29ycmVsYXRpb24gKDAuNDEwNzUyKSovLFxuICAgIC0xMywtMTMsIC0xMCw1LyptZWFuICgwLjAzNzYwNjgpLCBjb3JyZWxhdGlvbiAoMC4zOTgzNzQpKi8sXG4gICAgNyw3LCAxMCwxMi8qbWVhbiAoMC4wNDI0MjAyKSwgY29ycmVsYXRpb24gKDAuNDA1NjYzKSovLFxuICAgIDEyLC01LCAxMiw5LyptZWFuICgwLjA5NDI2NDUpLCBjb3JyZWxhdGlvbiAoMC40MTA0MjIpKi8sXG4gICAgNiwzLCA3LDExLyptZWFuICgwLjEwNzQpLCBjb3JyZWxhdGlvbiAoMC40MTMyMjQpKi8sXG4gICAgNSwtMTMsIDYsMTAvKm1lYW4gKDAuMTA5MjU2KSwgY29ycmVsYXRpb24gKDAuNDA4NjQ2KSovLFxuICAgIDIsLTEyLCAyLDMvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuNDE2MDc2KSovLFxuICAgIDMsOCwgNCwtNi8qbWVhbiAoMC4xNjUwODEpLCBjb3JyZWxhdGlvbiAoMC40MTc1NjkpKi8sXG4gICAgMiw2LCAxMiwtMTMvKm1lYW4gKDAuMTcxODc0KSwgY29ycmVsYXRpb24gKDAuNDA4NDcxKSovLFxuICAgIDksLTEyLCAxMCwzLyptZWFuICgwLjE3NTE0NiksIGNvcnJlbGF0aW9uICgwLjQxMjk2KSovLFxuICAgIC04LDQsIC03LDkvKm1lYW4gKDAuMTgzNjgyKSwgY29ycmVsYXRpb24gKDAuNDAyOTU2KSovLFxuICAgIC0xMSwxMiwgLTQsLTYvKm1lYW4gKDAuMTg0NjcyKSwgY29ycmVsYXRpb24gKDAuNDE2MTI1KSovLFxuICAgIDEsMTIsIDIsLTgvKm1lYW4gKDAuMTkxNDg3KSwgY29ycmVsYXRpb24gKDAuMzg2Njk2KSovLFxuICAgIDYsLTksIDcsLTQvKm1lYW4gKDAuMTkyNjY4KSwgY29ycmVsYXRpb24gKDAuMzk0NzcxKSovLFxuICAgIDIsMywgMywtMi8qbWVhbiAoMC4yMDAxNTcpLCBjb3JyZWxhdGlvbiAoMC40MDgzMDMpKi8sXG4gICAgNiwzLCAxMSwwLyptZWFuICgwLjIwNDU4OCksIGNvcnJlbGF0aW9uICgwLjQxMTc2MikqLyxcbiAgICAzLC0zLCA4LC04LyptZWFuICgwLjIwNTkwNCksIGNvcnJlbGF0aW9uICgwLjQxNjI5NCkqLyxcbiAgICA3LDgsIDksMy8qbWVhbiAoMC4yMTMyMzcpLCBjb3JyZWxhdGlvbiAoMC40MDkzMDYpKi8sXG4gICAgLTExLC01LCAtNiwtNC8qbWVhbiAoMC4yNDM0NDQpLCBjb3JyZWxhdGlvbiAoMC4zOTUwNjkpKi8sXG4gICAgLTEwLDExLCAtNSwxMC8qbWVhbiAoMC4yNDc2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTMzOTIpKi8sXG4gICAgLTUsLTgsIC0zLDEyLyptZWFuICgwLjI0Nzc0KSwgY29ycmVsYXRpb24gKDAuNDExNDE2KSovLFxuICAgIC0xMCw1LCAtOSwwLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuNDU0MDAzKSovLFxuICAgIDgsLTEsIDEyLC02LyptZWFuICgwLjAyOTM2MzUpLCBjb3JyZWxhdGlvbiAoMC40NTUzNjgpKi8sXG4gICAgNCwtNiwgNiwtMTEvKm1lYW4gKDAuMDQwNDk3MSksIGNvcnJlbGF0aW9uICgwLjQ1NzM5MykqLyxcbiAgICAtMTAsMTIsIC04LDcvKm1lYW4gKDAuMDQ4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ0ODM2NCkqLyxcbiAgICA0LC0yLCA2LDcvKm1lYW4gKDAuMDUwNjQxKSwgY29ycmVsYXRpb24gKDAuNDU1MDE5KSovLFxuICAgIC0yLDAsIC0yLDEyLyptZWFuICgwLjA1MjU5NzgpLCBjb3JyZWxhdGlvbiAoMC40NDMzOCkqLyxcbiAgICAtNSwtOCwgLTUsMi8qbWVhbiAoMC4wNjI5NjY3KSwgY29ycmVsYXRpb24gKDAuNDU3MDk2KSovLFxuICAgIDcsLTYsIDEwLDEyLyptZWFuICgwLjA2NTM4NDYpLCBjb3JyZWxhdGlvbiAoMC40NDU2MjMpKi8sXG4gICAgLTksLTEzLCAtOCwtOC8qbWVhbiAoMC4wODU4NzQ5KSwgY29ycmVsYXRpb24gKDAuNDQ5Nzg5KSovLFxuICAgIC01LC0xMywgLTUsLTIvKm1lYW4gKDAuMTIyNDAyKSwgY29ycmVsYXRpb24gKDAuNDUwMjAxKSovLFxuICAgIDgsLTgsIDksLTEzLyptZWFuICgwLjEyNTQxNiksIGNvcnJlbGF0aW9uICgwLjQ1MzIyNCkqLyxcbiAgICAtOSwtMTEsIC05LDAvKm1lYW4gKDAuMTMwMTI4KSwgY29ycmVsYXRpb24gKDAuNDU4NzI0KSovLFxuICAgIDEsLTgsIDEsLTIvKm1lYW4gKDAuMTMyNDY3KSwgY29ycmVsYXRpb24gKDAuNDQwMTMzKSovLFxuICAgIDcsLTQsIDksMS8qbWVhbiAoMC4xMzI2OTIpLCBjb3JyZWxhdGlvbiAoMC40NTQpKi8sXG4gICAgLTIsMSwgLTEsLTQvKm1lYW4gKDAuMTM1Njk1KSwgY29ycmVsYXRpb24gKDAuNDU1NzM5KSovLFxuICAgIDExLC02LCAxMiwtMTEvKm1lYW4gKDAuMTQyOTA0KSwgY29ycmVsYXRpb24gKDAuNDQ2MTE0KSovLFxuICAgIC0xMiwtOSwgLTYsNC8qbWVhbiAoMC4xNDYxNjUpLCBjb3JyZWxhdGlvbiAoMC40NTE0NzMpKi8sXG4gICAgMyw3LCA3LDEyLyptZWFuICgwLjE0NzYyNyksIGNvcnJlbGF0aW9uICgwLjQ1NjY0MykqLyxcbiAgICA1LDUsIDEwLDgvKm1lYW4gKDAuMTUyOTAxKSwgY29ycmVsYXRpb24gKDAuNDU1MDM2KSovLFxuICAgIDAsLTQsIDIsOC8qbWVhbiAoMC4xNjcwODMpLCBjb3JyZWxhdGlvbiAoMC40NTkzMTUpKi8sXG4gICAgLTksMTIsIC01LC0xMy8qbWVhbiAoMC4xNzMyMzQpLCBjb3JyZWxhdGlvbiAoMC40NTQ3MDYpKi8sXG4gICAgMCw3LCAyLDEyLyptZWFuICgwLjE4MzEyKSwgY29ycmVsYXRpb24gKDAuNDMzODU1KSovLFxuICAgIC0xLDIsIDEsNy8qbWVhbiAoMC4xODU1MDQpLCBjb3JyZWxhdGlvbiAoMC40NDM4MzgpKi8sXG4gICAgNSwxMSwgNywtOS8qbWVhbiAoMC4xODU3MDYpLCBjb3JyZWxhdGlvbiAoMC40NTExMjMpKi8sXG4gICAgMyw1LCA2LC04LyptZWFuICgwLjE4ODk2OCksIGNvcnJlbGF0aW9uICgwLjQ1NTgwOCkqLyxcbiAgICAtMTMsLTQsIC04LDkvKm1lYW4gKDAuMTkxNjY3KSwgY29ycmVsYXRpb24gKDAuNDU5MTI4KSovLFxuICAgIC01LDksIC0zLC0zLyptZWFuICgwLjE5MzE5NiksIGNvcnJlbGF0aW9uICgwLjQ1ODM2NCkqLyxcbiAgICAtNCwtNywgLTMsLTEyLyptZWFuICgwLjE5NjUzNiksIGNvcnJlbGF0aW9uICgwLjQ1NTc4MikqLyxcbiAgICA2LDUsIDgsMC8qbWVhbiAoMC4xOTcyKSwgY29ycmVsYXRpb24gKDAuNDUwNDgxKSovLFxuICAgIC03LDYsIC02LDEyLyptZWFuICgwLjE5OTQzOCksIGNvcnJlbGF0aW9uICgwLjQ1ODE1NikqLyxcbiAgICAtMTMsNiwgLTUsLTIvKm1lYW4gKDAuMjExMjI0KSwgY29ycmVsYXRpb24gKDAuNDQ5NTQ4KSovLFxuICAgIDEsLTEwLCAzLDEwLyptZWFuICgwLjIxMTcxOCksIGNvcnJlbGF0aW9uICgwLjQ0MDYwNikqLyxcbiAgICA0LDEsIDgsLTQvKm1lYW4gKDAuMjEzMDM0KSwgY29ycmVsYXRpb24gKDAuNDQzMTc3KSovLFxuICAgIC0yLC0yLCAyLC0xMy8qbWVhbiAoMC4yMzQzMzQpLCBjb3JyZWxhdGlvbiAoMC40NTUzMDQpKi8sXG4gICAgMiwtMTIsIDEyLDEyLyptZWFuICgwLjIzNTY4NCksIGNvcnJlbGF0aW9uICgwLjQ0MzQzNikqLyxcbiAgICAtMiwtMTMsIDAsLTYvKm1lYW4gKDAuMjM3Njc0KSwgY29ycmVsYXRpb24gKDAuNDUyNTI1KSovLFxuICAgIDQsMSwgOSwzLyptZWFuICgwLjIzOTYyKSwgY29ycmVsYXRpb24gKDAuNDQ0ODI0KSovLFxuICAgIC02LC0xMCwgLTMsLTUvKm1lYW4gKDAuMjQ4NDU5KSwgY29ycmVsYXRpb24gKDAuNDM5NjIxKSovLFxuICAgIC0zLC0xMywgLTEsMS8qbWVhbiAoMC4yNDk1MDUpLCBjb3JyZWxhdGlvbiAoMC40NTY2NjYpKi8sXG4gICAgNyw1LCAxMiwtMTEvKm1lYW4gKDAuMDAxMTkyMDgpLCBjb3JyZWxhdGlvbiAoMC40OTU0NjYpKi8sXG4gICAgNCwtMiwgNSwtNy8qbWVhbiAoMC4wMDM3MjI0NSksIGNvcnJlbGF0aW9uICgwLjQ4NDIxNCkqLyxcbiAgICAtMTMsOSwgLTksLTUvKm1lYW4gKDAuMDA3NDExMTYpLCBjb3JyZWxhdGlvbiAoMC40OTk4NTQpKi8sXG4gICAgNywxLCA4LDYvKm1lYW4gKDAuMDIwODk1MiksIGNvcnJlbGF0aW9uICgwLjQ5OTc3MykqLyxcbiAgICA3LC04LCA3LDYvKm1lYW4gKDAuMDIyMDA4NSksIGNvcnJlbGF0aW9uICgwLjUwMTYwOSkqLyxcbiAgICAtNywtNCwgLTcsMS8qbWVhbiAoMC4wMjMzODA2KSwgY29ycmVsYXRpb24gKDAuNDk2NTY4KSovLFxuICAgIC04LDExLCAtNywtOC8qbWVhbiAoMC4wMjM2NTA1KSwgY29ycmVsYXRpb24gKDAuNDg5NzE5KSovLFxuICAgIC0xMyw2LCAtMTIsLTgvKm1lYW4gKDAuMDI2ODc4MSksIGNvcnJlbGF0aW9uICgwLjUwMzQ4NykqLyxcbiAgICAyLDQsIDMsOS8qbWVhbiAoMC4wMzIzMzI0KSwgY29ycmVsYXRpb24gKDAuNTAxOTM4KSovLFxuICAgIDEwLC01LCAxMiwzLyptZWFuICgwLjAzOTkyMzUpLCBjb3JyZWxhdGlvbiAoMC40OTQwMjkpKi8sXG4gICAgLTYsLTUsIC02LDcvKm1lYW4gKDAuMDQyMDE1MyksIGNvcnJlbGF0aW9uICgwLjQ4NjU3OSkqLyxcbiAgICA4LC0zLCA5LC04LyptZWFuICgwLjA1NDgwMjEpLCBjb3JyZWxhdGlvbiAoMC40ODQyMzcpKi8sXG4gICAgMiwtMTIsIDIsOC8qbWVhbiAoMC4wNjE2NjIyKSwgY29ycmVsYXRpb24gKDAuNDk2NjQyKSovLFxuICAgIC0xMSwtMiwgLTEwLDMvKm1lYW4gKDAuMDYyNzc1NSksIGNvcnJlbGF0aW9uICgwLjQ5ODU2MykqLyxcbiAgICAtMTIsLTEzLCAtNywtOS8qbWVhbiAoMC4wODI5NjIyKSwgY29ycmVsYXRpb24gKDAuNDk1NDkxKSovLFxuICAgIC0xMSwwLCAtMTAsLTUvKm1lYW4gKDAuMDg0MzM0MiksIGNvcnJlbGF0aW9uICgwLjQ4NzE0NikqLyxcbiAgICA1LC0zLCAxMSw4LyptZWFuICgwLjA5Mjk5MzcpLCBjb3JyZWxhdGlvbiAoMC41MDIzMTUpKi8sXG4gICAgLTIsLTEzLCAtMSwxMi8qbWVhbiAoMC4xMTMzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk0MSkqLyxcbiAgICAtMSwtOCwgMCw5LyptZWFuICgwLjEzMjExOSksIGNvcnJlbGF0aW9uICgwLjQ2NzI2OCkqLyxcbiAgICAtMTMsLTExLCAtMTIsLTUvKm1lYW4gKDAuMTM2MjY5KSwgY29ycmVsYXRpb24gKDAuNDk4NzcxKSovLFxuICAgIC0xMCwtMiwgLTEwLDExLyptZWFuICgwLjE0MjE3MyksIGNvcnJlbGF0aW9uICgwLjQ5ODcxNCkqLyxcbiAgICAtMyw5LCAtMiwtMTMvKm1lYW4gKDAuMTQ0MTQxKSwgY29ycmVsYXRpb24gKDAuNDkxOTczKSovLFxuICAgIDIsLTMsIDMsMi8qbWVhbiAoMC4xNDg5MiksIGNvcnJlbGF0aW9uICgwLjUwMDc4MikqLyxcbiAgICAtOSwtMTMsIC00LDAvKm1lYW4gKDAuMTUwMzcxKSwgY29ycmVsYXRpb24gKDAuNDk4MjExKSovLFxuICAgIC00LDYsIC0zLC0xMC8qbWVhbiAoMC4xNTIxNTkpLCBjb3JyZWxhdGlvbiAoMC40OTU1NDcpKi8sXG4gICAgLTQsMTIsIC0yLC03LyptZWFuICgwLjE1NjE1MiksIGNvcnJlbGF0aW9uICgwLjQ5NjkyNSkqLyxcbiAgICAtNiwtMTEsIC00LDkvKm1lYW4gKDAuMTU3NDkpLCBjb3JyZWxhdGlvbiAoMC40OTkyMjIpKi8sXG4gICAgNiwtMywgNiwxMS8qbWVhbiAoMC4xNTkyMTEpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjEpKi8sXG4gICAgLTEzLDExLCAtNSw1LyptZWFuICgwLjE2MjQyNyksIGNvcnJlbGF0aW9uICgwLjUwMTkwNykqLyxcbiAgICAxMSwxMSwgMTIsNi8qbWVhbiAoMC4xNjY1MiksIGNvcnJlbGF0aW9uICgwLjQ5NzYzMikqLyxcbiAgICA3LC01LCAxMiwtMi8qbWVhbiAoMC4xNjkxNDEpLCBjb3JyZWxhdGlvbiAoMC40ODQ0NzQpKi8sXG4gICAgLTEsMTIsIDAsNy8qbWVhbiAoMC4xNjk0NTYpLCBjb3JyZWxhdGlvbiAoMC40OTUzMzkpKi8sXG4gICAgLTQsLTgsIC0zLC0yLyptZWFuICgwLjE3MTQ1NyksIGNvcnJlbGF0aW9uICgwLjQ4NzI1MSkqLyxcbiAgICAtNywxLCAtNiw3LyptZWFuICgwLjE3NSksIGNvcnJlbGF0aW9uICgwLjUwMDAyNCkqLyxcbiAgICAtMTMsLTEyLCAtOCwtMTMvKm1lYW4gKDAuMTc1ODY2KSwgY29ycmVsYXRpb24gKDAuNDk3NTIzKSovLFxuICAgIC03LC0yLCAtNiwtOC8qbWVhbiAoMC4xNzgyNzMpLCBjb3JyZWxhdGlvbiAoMC41MDE4NTQpKi8sXG4gICAgLTgsNSwgLTYsLTkvKm1lYW4gKDAuMTgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDk0ODg4KSovLFxuICAgIC01LC0xLCAtNCw1LyptZWFuICgwLjE5MDIyNyksIGNvcnJlbGF0aW9uICgwLjQ4MjU1NykqLyxcbiAgICAtMTMsNywgLTgsMTAvKm1lYW4gKDAuMTk2NzM5KSwgY29ycmVsYXRpb24gKDAuNDk2NTAzKSovLFxuICAgIDEsNSwgNSwtMTMvKm1lYW4gKDAuMTk5NzMpLCBjb3JyZWxhdGlvbiAoMC40OTk3NTkpKi8sXG4gICAgMSwwLCAxMCwtMTMvKm1lYW4gKDAuMjA0NDY1KSwgY29ycmVsYXRpb24gKDAuNDk4NzMpKi8sXG4gICAgOSwxMiwgMTAsLTEvKm1lYW4gKDAuMjA5MzM0KSwgY29ycmVsYXRpb24gKDAuNDkwNjMpKi8sXG4gICAgNSwtOCwgMTAsLTkvKm1lYW4gKDAuMjExMTM0KSwgY29ycmVsYXRpb24gKDAuNTAzMDExKSovLFxuICAgIC0xLDExLCAxLC0xMy8qbWVhbiAoMC4yMTIpLCBjb3JyZWxhdGlvbiAoMC40OTk0MTQpKi8sXG4gICAgLTksLTMsIC02LDIvKm1lYW4gKDAuMjEyMTY4KSwgY29ycmVsYXRpb24gKDAuNDgwNzM5KSovLFxuICAgIC0xLC0xMCwgMSwxMi8qbWVhbiAoMC4yMTI3MzEpLCBjb3JyZWxhdGlvbiAoMC41MDI1MjMpKi8sXG4gICAgLTEzLDEsIC04LC0xMC8qbWVhbiAoMC4yMTMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTc4NikqLyxcbiAgICA4LC0xMSwgMTAsLTYvKm1lYW4gKDAuMjE0MTU5KSwgY29ycmVsYXRpb24gKDAuNDg4MjQ2KSovLFxuICAgIDIsLTEzLCAzLC02LyptZWFuICgwLjIxNjk5MyksIGNvcnJlbGF0aW9uICgwLjUwMjg3KSovLFxuICAgIDcsLTEzLCAxMiwtOS8qbWVhbiAoMC4yMjM2MzkpLCBjb3JyZWxhdGlvbiAoMC40NzA1MDIpKi8sXG4gICAgLTEwLC0xMCwgLTUsLTcvKm1lYW4gKDAuMjI0MDg5KSwgY29ycmVsYXRpb24gKDAuNTAwODUyKSovLFxuICAgIC0xMCwtOCwgLTgsLTEzLyptZWFuICgwLjIyODY2NiksIGNvcnJlbGF0aW9uICgwLjUwMjYyOSkqLyxcbiAgICA0LC02LCA4LDUvKm1lYW4gKDAuMjI5MDYpLCBjb3JyZWxhdGlvbiAoMC40OTgzMDUpKi8sXG4gICAgMywxMiwgOCwtMTMvKm1lYW4gKDAuMjMzMzc4KSwgY29ycmVsYXRpb24gKDAuNTAzODI1KSovLFxuICAgIC00LDIsIC0zLC0zLyptZWFuICgwLjIzNDMyMyksIGNvcnJlbGF0aW9uICgwLjQ3NjY5MikqLyxcbiAgICA1LC0xMywgMTAsLTEyLyptZWFuICgwLjIzNjM5MiksIGNvcnJlbGF0aW9uICgwLjQ3NTQ2MikqLyxcbiAgICA0LC0xMywgNSwtMS8qbWVhbiAoMC4yMzY4NDIpLCBjb3JyZWxhdGlvbiAoMC41MDQxMzIpKi8sXG4gICAgLTksOSwgLTQsMy8qbWVhbiAoMC4yMzY5NzcpLCBjb3JyZWxhdGlvbiAoMC40OTc3MzkpKi8sXG4gICAgMCwzLCAzLC05LyptZWFuICgwLjI0MzE0KSwgY29ycmVsYXRpb24gKDAuNDk5Mzk4KSovLFxuICAgIC0xMiwxLCAtNiwxLyptZWFuICgwLjI0MzI5NyksIGNvcnJlbGF0aW9uICgwLjQ4OTQ0NykqLyxcbiAgICAzLDIsIDQsLTgvKm1lYW4gKDAuMDAxNTUxOTYpLCBjb3JyZWxhdGlvbiAoMC41NTM0OTYpKi8sXG4gICAgLTEwLC0xMCwgLTEwLDkvKm1lYW4gKDAuMDAyMzk1NDEpLCBjb3JyZWxhdGlvbiAoMC41NDI5NykqLyxcbiAgICA4LC0xMywgMTIsMTIvKm1lYW4gKDAuMDAzNDQxMyksIGNvcnJlbGF0aW9uICgwLjU0NDM2MSkqLyxcbiAgICAtOCwtMTIsIC02LC01LyptZWFuICgwLjAwMzU2NSksIGNvcnJlbGF0aW9uICgwLjU1MTIyNSkqLyxcbiAgICAyLDIsIDMsNy8qbWVhbiAoMC4wMDgzNTU4MyksIGNvcnJlbGF0aW9uICgwLjU1Mjg1KSovLFxuICAgIDEwLDYsIDExLC04LyptZWFuICgwLjAwODg1MDY1KSwgY29ycmVsYXRpb24gKDAuNTQwOTEzKSovLFxuICAgIDYsOCwgOCwtMTIvKm1lYW4gKDAuMDEwMTU1MiksIGNvcnJlbGF0aW9uICgwLjU1MTA4NSkqLyxcbiAgICAtNywxMCwgLTYsNS8qbWVhbiAoMC4wMTAyMjI3KSwgY29ycmVsYXRpb24gKDAuNTMzNjM1KSovLFxuICAgIC0zLC05LCAtMyw5LyptZWFuICgwLjAxMTAyMTEpLCBjb3JyZWxhdGlvbiAoMC41NDMxMjEpKi8sXG4gICAgLTEsLTEzLCAtMSw1LyptZWFuICgwLjAxMTM0NzMpLCBjb3JyZWxhdGlvbiAoMC41NTAxNzMpKi8sXG4gICAgLTMsLTcsIC0zLDQvKm1lYW4gKDAuMDE0MDkxMyksIGNvcnJlbGF0aW9uICgwLjU1NDc3NCkqLyxcbiAgICAtOCwtMiwgLTgsMy8qbWVhbiAoMC4wMTcwNDkpLCBjb3JyZWxhdGlvbiAoMC41NTQ2MSkqLyxcbiAgICA0LDIsIDEyLDEyLyptZWFuICgwLjAxNzc4KSwgY29ycmVsYXRpb24gKDAuNTQ2OTIxKSovLFxuICAgIDIsLTUsIDMsMTEvKm1lYW4gKDAuMDIyNDAyMiksIGNvcnJlbGF0aW9uICgwLjU0OTY2NykqLyxcbiAgICA2LC05LCAxMSwtMTMvKm1lYW4gKDAuMDI5MTYxKSwgY29ycmVsYXRpb24gKDAuNTQ2Mjk1KSovLFxuICAgIDMsLTEsIDcsMTIvKm1lYW4gKDAuMDMwMzA4MSksIGNvcnJlbGF0aW9uICgwLjU0ODU5OSkqLyxcbiAgICAxMSwtMSwgMTIsNC8qbWVhbiAoMC4wMzU1MTUxKSwgY29ycmVsYXRpb24gKDAuNTIzOTQzKSovLFxuICAgIC0zLDAsIC0zLDYvKm1lYW4gKDAuMDQxNzkwNCksIGNvcnJlbGF0aW9uICgwLjU0MzM5NSkqLyxcbiAgICA0LC0xMSwgNCwxMi8qbWVhbiAoMC4wNDg3MjkyKSwgY29ycmVsYXRpb24gKDAuNTQyODE4KSovLFxuICAgIDIsLTQsIDIsMS8qbWVhbiAoMC4wNTc1MTI0KSwgY29ycmVsYXRpb24gKDAuNTU0ODg4KSovLFxuICAgIC0xMCwtNiwgLTgsMS8qbWVhbiAoMC4wNTk0MjQyKSwgY29ycmVsYXRpb24gKDAuNTQ0MDI2KSovLFxuICAgIC0xMyw3LCAtMTEsMS8qbWVhbiAoMC4wNTk3MzkxKSwgY29ycmVsYXRpb24gKDAuNTUwNTI0KSovLFxuICAgIC0xMywxMiwgLTExLC0xMy8qbWVhbiAoMC4wNjA4OTc0KSwgY29ycmVsYXRpb24gKDAuNTUzODMpKi8sXG4gICAgNiwwLCAxMSwtMTMvKm1lYW4gKDAuMDY1MTI2KSwgY29ycmVsYXRpb24gKDAuNTUyMDA2KSovLFxuICAgIDAsLTEsIDEsNC8qbWVhbiAoMC4wNzQyMjQpLCBjb3JyZWxhdGlvbiAoMC41NDYzNzIpKi8sXG4gICAgLTEzLDMsIC05LC0yLyptZWFuICgwLjA4MDg1OTIpLCBjb3JyZWxhdGlvbiAoMC41NTQ4NzUpKi8sXG4gICAgLTksOCwgLTYsLTMvKm1lYW4gKDAuMDg4MzM3OCksIGNvcnJlbGF0aW9uICgwLjU1MTE3OCkqLyxcbiAgICAtMTMsLTYsIC04LC0yLyptZWFuICgwLjA5MDEwMzUpLCBjb3JyZWxhdGlvbiAoMC41NDg0NDYpKi8sXG4gICAgNSwtOSwgOCwxMC8qbWVhbiAoMC4wOTQ5ODQzKSwgY29ycmVsYXRpb24gKDAuNTU0Njk0KSovLFxuICAgIDIsNywgMywtOS8qbWVhbiAoMC4wOTk0MTUyKSwgY29ycmVsYXRpb24gKDAuNTUwOTc5KSovLFxuICAgIC0xLC02LCAtMSwtMS8qbWVhbiAoMC4xMDA0NSksIGNvcnJlbGF0aW9uICgwLjU1MjcxNCkqLyxcbiAgICA5LDUsIDExLC0yLyptZWFuICgwLjEwMDY4NiksIGNvcnJlbGF0aW9uICgwLjU1MjU5NCkqLyxcbiAgICAxMSwtMywgMTIsLTgvKm1lYW4gKDAuMTAxMDkxKSwgY29ycmVsYXRpb24gKDAuNTMyMzk0KSovLFxuICAgIDMsMCwgMyw1LyptZWFuICgwLjEwMTE0NyksIGNvcnJlbGF0aW9uICgwLjUyNTU3NikqLyxcbiAgICAtMSw0LCAwLDEwLyptZWFuICgwLjEwNTI2MyksIGNvcnJlbGF0aW9uICgwLjUzMTQ5OCkqLyxcbiAgICAzLC02LCA0LDUvKm1lYW4gKDAuMTEwNzg1KSwgY29ycmVsYXRpb24gKDAuNTQwNDkxKSovLFxuICAgIC0xMywwLCAtMTAsNS8qbWVhbiAoMC4xMTI3OTgpLCBjb3JyZWxhdGlvbiAoMC41MzY1ODIpKi8sXG4gICAgNSw4LCAxMiwxMS8qbWVhbiAoMC4xMTQxODEpLCBjb3JyZWxhdGlvbiAoMC41NTU3OTMpKi8sXG4gICAgOCw5LCA5LC02LyptZWFuICgwLjExNzQzMSksIGNvcnJlbGF0aW9uICgwLjU1Mzc2MykqLyxcbiAgICA3LC00LCA4LC0xMi8qbWVhbiAoMC4xMTg1MjIpLCBjb3JyZWxhdGlvbiAoMC41NTM0NTIpKi8sXG4gICAgLTEwLDQsIC0xMCw5LyptZWFuICgwLjEyMDk0KSwgY29ycmVsYXRpb24gKDAuNTU0Nzg1KSovLFxuICAgIDcsMywgMTIsNC8qbWVhbiAoMC4xMjI1ODIpLCBjb3JyZWxhdGlvbiAoMC41NTU4MjUpKi8sXG4gICAgOSwtNywgMTAsLTIvKm1lYW4gKDAuMTI0OTc4KSwgY29ycmVsYXRpb24gKDAuNTQ5ODQ2KSovLFxuICAgIDcsMCwgMTIsLTIvKm1lYW4gKDAuMTI3MDAyKSwgY29ycmVsYXRpb24gKDAuNTM3NDUyKSovLFxuICAgIC0xLC02LCAwLC0xMS8qbWVhbiAoMC4xMjcxNDgpLCBjb3JyZWxhdGlvbiAoMC41NDc0MDEpKi9cbl07IiwiaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IGJpdF9wYXR0ZXJuXzMxIGZyb20gJy4vYml0X3BhdHRlcm5fMzEuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHJlY3RpZnlfcGF0Y2ggfSBmcm9tICcuL3JlY3RpZnlfcGF0Y2guanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG5cbiAgICBkZXNjcmliZShzcmMsIGNvcm5lcnMsIGNvdW50LCBkZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgdmFyIGkgPSAwLCBiID0gMCwgcHggPSAwLjAsIHB5ID0gMC4wLCBhbmdsZSA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMCwgdDEgPSAwLCB2YWwgPSAwO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgcGF0Y2hfZCA9IHRoaXMucGF0Y2hfaW1nLmRhdGE7XG4gICAgICAgIHZhciBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICB2YXIgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzY3JfZCA9IGRlc2NyaXB0b3JzLmRhdGE7XG4gICAgICAgIHZhciBkZXNjcl9vZmYgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBweCA9IGNvcm5lcnNbaV0ueDtcbiAgICAgICAgICAgIHB5ID0gY29ybmVyc1tpXS55O1xuICAgICAgICAgICAgYW5nbGUgPSBjb3JuZXJzW2ldLmFuZ2xlO1xuXG4gICAgICAgICAgICByZWN0aWZ5X3BhdGNoKHNyYywgdGhpcy5wYXRjaF9pbWcsIGFuZ2xlLCBweCwgcHksIDMyLCB0aGlzLkgpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9ICh0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBpbWdwcm9jIGZyb20gJy4uL2ltZ3Byb2MvaW1ncHJvYy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjLCBkc3QsIGFuZ2xlLCBweCwgcHksIHBzaXplLCBIKSB7XG4gICAgdmFyIGNvc2luZSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB2YXIgc2luZSAgID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgIHZhciBpbWdwcmMgPSBuZXcgaW1ncHJvYygpO1xuXG4gICAgSC5kYXRhWzBdID0gY29zaW5lLCBILmRhdGFbMV0gPSAtc2luZSwgICAgSC5kYXRhWzJdID0gKC1jb3NpbmUgKyBzaW5lICApICogcHNpemUqMC41ICsgcHgsXG4gICAgSC5kYXRhWzNdID0gc2luZSwgICBILmRhdGFbNF0gPSAgY29zaW5lLCAgSC5kYXRhWzVdID0gKC1zaW5lICAgLSBjb3NpbmUpICogcHNpemUqMC41ICsgcHk7XG5cbiAgICBpbWdwcmMud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJztcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHlyYW1pZF90IHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHMpIHtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHMgfCAwO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobGV2ZWxzKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGltZ3Byb2MoKTsgXG4gICAgICAgIHRoaXMucHlyZG93biA9IF9pbWdwcm9jLnB5cmRvd247XG4gICAgfVxuXG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGQoaW5wdXQsIHNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBpZiAoIXNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBqID0gaW5wdXQuY29scyAqIGlucHV0LnJvd3M7XG4gICAgICAgICAgICB3aGlsZSAoLS1qID49IDApIHtcbiAgICAgICAgICAgICAgICBiLmRhdGFbal0gPSBpbnB1dC5kYXRhW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGIgPSB0aGlzLmRhdGFbMV07XG4gICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgZm9yICg7IGkgPCB0aGlzLmxldmVsczsgKytpKSB7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0aGlzLmRhdGFbaV07XG4gICAgICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgcmFkaXVzLCBweXJhbWlkX2xldmVscykge1xuICAgICAgICBpZiAodHlwZW9mIHB5cmFtaWRfbGV2ZWxzID09PSBcInVuZGVmaW5lZFwiKSB7IHB5cmFtaWRfbGV2ZWxzID0gMTsgfVxuICAgICAgICB2YXIgaTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5taW4ocmFkaXVzLCA3KTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgocmFkaXVzLCAzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHB5cmFtaWRfbGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfdGFibGVzW2ldID0gbmV3IGxldl90YWJsZV90KHdpZHRoID4+IGksIGhlaWdodCA+PiBpLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYywgcG9pbnRzLCBib3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmVjb21wdXRlX2RpcmVjdGlvbnMoc3RlcCwgZGlycywgUikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCwgeTtcblxuICAgIHggPSBSO1xuICAgIGZvciAoeSA9IDA7IHkgPCB4OyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4LS07IHggPCB5ICYmIHggPj0gMDsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHktLTsgeSA+PSAwOyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB5ID4geDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB4IDwgLXk7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5Kys7IHkgPCAwOyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYiwgb2ZmLCBzdGVwKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwLCBvZmYsIHYsIHN0ZXAsIG5laWdoYm9yaG9vZCkge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEksIHgsIFNjb3JlcywgSW0sIElwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19uYikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgY29uc3RydWN0b3IodywgaCwgcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSAnLi95YXBlMDZfdXRpbHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlMDYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjLCBkc3QsIHcsIGgsIER4eCwgRHl5LCBzeCxzeSwgZXgsZXkpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmMsIG9mZiwgdHIsIER4eCwgRHl5LCBEeHksIER5eCkge1xuICAgIHZhciBJeHggPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER4eF0gKyBzcmNbb2ZmIC0gRHh4XTtcbiAgICB2YXIgSXl5ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeXldICsgc3JjW29mZiAtIER5eV07XG4gICAgdmFyIEl4eSA9IHNyY1tvZmYgKyBEeHldICsgc3JjW29mZiAtIER4eV0gLSBzcmNbb2ZmICsgRHl4XSAtIHNyY1tvZmYgLSBEeXhdO1xuICAgIHZhciBzcXJ0X2RlbHRhID0gKCBNYXRoLnNxcnQoKChJeHggLSBJeXkpICogKEl4eCAtIEl5eSkgKyA0ICogSXh5ICogSXh5KSApICl8MDtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmFicyh0ciAtIHNxcnRfZGVsdGEpLCBNYXRoLmFicygtKHRyICsgc3FydF9kZWx0YSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0LmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwiayIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiTWF0aCIsIm1pbiIsIl9jb252b2wiLCJfcmVzYW1wbGUiLCJfcmVzYW1wbGVfdTgiLCJtYXRoIiwiaW1ncHJvYyIsImFsbG9jYXRlIiwic3JjIiwiZHN0IiwiY29kZSIsIngiLCJ5IiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwiZGF0YSIsIm53IiwibmgiLCJyb3dzIiwiY29scyIsImNoYW5uZWwiLCJyYWRpdXMiLCJvcHRpb25zIiwiaDIiLCJlbmQiLCJ3aW5kb3dTaXplIiwicmFkaXVzUGx1c09uZSIsInJhZGl1c1BsdXMyIiwic2NhbGUiLCJ0bXBfYnVmZiIsImdldF9idWZmZXIiLCJkc3RJbmRleCIsInNyY0luZGV4IiwibmV4dFBpeGVsSW5kZXgiLCJwcmV2aW91c1BpeGVsSW5kZXgiLCJkYXRhX2kzMiIsImkzMiIsImRhdGFfdTgiLCJob2xkIiwicHV0X2J1ZmZlciIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1heCIsImlzX3U4IiwiYnVmX3N6IiwiYnVmX25vZGUiLCJmaWx0X25vZGUiLCJmMzIiLCJnZXRfZ2F1c3NpYW5fa2VybmVsIiwiaW1nIiwicmhvX3JlcyIsInRoZXRhX3JlcyIsInRocmVzaG9sZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGVwIiwibWluX3RoZXRhIiwibWF4X3RoZXRhIiwiUEkiLCJudW1hbmdsZSIsInJvdW5kIiwibnVtcmhvIiwiaXJobyIsImFjY3VtIiwidGFiU2luIiwiRmxvYXQzMkFycmF5IiwidGFiQ29zIiwibiIsImFuZyIsInNpbiIsImNvcyIsInIiLCJfc29ydF9idWYiLCJBcnJheSIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwic3giLCJzeSIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsImRzdGVwIiwieDEiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJzcm93MCIsInNyb3cxIiwic3JvdzIiLCJkcm93IiwidHJvdzAiLCJ0cm93MSIsImd4Z3kiLCJidWYwX25vZGUiLCJidWYxX25vZGUiLCJ0cmFuc2Zvcm0iLCJmaWxsX3ZhbHVlIiwic3JjX3dpZHRoIiwic3JjX2hlaWdodCIsImRzdF93aWR0aCIsImRzdF9oZWlnaHQiLCJvZmYiLCJpeHMiLCJpeXMiLCJ4cyIsInlzIiwicDAiLCJwMSIsInRkIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwieG9mc19jb3VudCIsImNoIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4MSIsInN4MiIsImZzeDEiLCJmc3gyIiwiZHhuIiwiYWxwaGEiLCJiZXRhIiwiYmV0YTEiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsInhvZnMiLCJhYnMiLCJkYXRhX3QiLCJrZXlwb2ludF90IiwibWF0bWF0aCIsIm1hdHJpeF90IiwicHlyYW1pZF90IiwibGluYWxnIiwib3JiIiwieWFwZSIsInlhcGUwNiIsIm1vdGlvbl9lc3RpbWF0b3IiLCJob21vZ3JhcGh5MmQiLCJyYW5zYWNfcGFyYW1zX3QiLCJvcHRpY2FsX2Zsb3dfbGsiLCJwa2ciLCJqc2ZlYXROZXh0IiwiZHQiLCJfZ2V0X2RhdGFfdHlwZSIsIl9nZXRfY2hhbm5lbCIsIl9nZXRfZGF0YV90eXBlX3NpemUiLCJ2ZXJzaW9uIiwic2NvcmUiLCJsZXZlbCIsImFuZ2xlIiwic3dhcCIsIkEiLCJpMCIsImkxIiwidCIsImh5cG90Iiwic3FydCIsImFzdGVwIiwiVyIsIlYiLCJ2c3RlcCIsImVwcyIsIm0iLCJsIiwiX2luIiwiX2luMiIsIml0ZXJzIiwibWF4X2l0ZXIiLCJtdiIsInZhbCIsInAiLCJzIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJ0MSIsInNkIiwiZ2FtbWEiLCJkZWx0YSIsInNlZWQiLCJ2YWwwIiwiYXN1bSIsIldfYnVmZiIsImY2NCIsIkIiLCJhZCIsImJkIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJhX2J1ZmYiLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJhX210Iiwid19tdCIsInZfbXQiLCJ0cmFuc3Bvc2UiLCJKYWNvYmlTVkRJbXBsIiwiWCIsInB1IiwicHYiLCJucm93cyIsIm5jb2xzIiwieHN1bSIsInRvbCIsInVfYnVmZiIsInVfbXQiLCJ1ZCIsIndkIiwidmQiLCJzdmRfZGVjb21wb3NlIiwicGEiLCJpZCIsInZlY3RzIiwidmFscyIsIkphY29iaUltcGwiLCJxc29ydF9zdGFjayIsImtlcm5lbCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJtb2RlbCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwibGVmdCIsInJpZ2h0IiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250Iiwic3RhY2siLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiTSIsInZhbHVlIiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwiQyIsIkFwIiwicEEiLCJwQiIsInBfQiIsIkNwIiwibWNvbHMiLCJjZCIsIm1yb3dzIiwicENkaWFnIiwicF9BIiwicEMiLCJwQ3QiLCJwX0MiLCJwX0NDIiwiZnJvbSIsInRvIiwiaW52QSIsInQxMyIsInQxNyIsIkNkIiwiQWQiLCJCZCIsIm0xXzAiLCJtMV8xIiwibTFfMiIsIm0xXzMiLCJtMV80IiwibTFfNSIsIm0xXzYiLCJtMV83IiwibTFfOCIsIm0yXzAiLCJtMl8xIiwibTJfMiIsIm0yXzMiLCJtMl80IiwibTJfNSIsIm0yXzYiLCJtMl83IiwibTJfOCIsIm1kIiwiTTExIiwiTTEyIiwiTTEzIiwiTTIxIiwiTTIyIiwiTTIzIiwiTTMxIiwiTTMyIiwiTTMzIiwiX2RhdGFfdHlwZSIsIl9kYXRhX2J1ZmZlciIsImJ1ZmZlciIsInU4Iiwib3RoZXIiLCJvZCIsIm5ld19zaXplIiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJjaGVja19zdWJzZXQiLCJjb3VudCIsInRocmVzaCIsImVyciIsIm1hc2siLCJudW1pbmxpZXJzIiwiZXJyb3IiLCJwYXJhbXMiLCJtYXhfaXRlcnMiLCJtb2RlbF9wb2ludHMiLCJuaXRlcnMiLCJyZXN1bHQiLCJzdWJzZXQwIiwic3Vic2V0MSIsImZvdW5kIiwibWMiLCJtciIsIm1fYnVmZiIsIm1zX2J1ZmYiLCJlcnJfYnVmZiIsImN1cnJfbWFzayIsIlU4QzFfdCIsImlubGllcnNfbWF4Iiwibm1vZGVscyIsInJ1biIsImNvcHlfdG8iLCJnZXRfc3Vic2V0IiwiZmluZF9pbmxpZXJzIiwidXBkYXRlX2l0ZXJzIiwiX21hdGgiLCJtaW5fbWVkaWFuIiwibW90aW9uX21vZGVsIiwiVDAiLCJUMSIsIkF0QSIsIkF0QiIsImN4MCIsImN5MCIsImQwIiwiczAiLCJjeDEiLCJjeTEiLCJkMSIsInMxIiwiU1FSVDIiLCJwb2ludHMiLCJkeDEiLCJkeTEiLCJkeDIiLCJkeTIiLCJhZmZpbmUyZCIsInQwZCIsInQxZCIsInB0MCIsInB0MSIsInB4IiwicHkiLCJfbWF0bWF0aCIsIl9saW5hbGciLCJpc29fbm9ybWFsaXplX3BvaW50cyIsImJfYnVmZiIsImJfbXQiLCJtdWx0aXBseV9BdEEiLCJtdWx0aXBseV9BdEIiLCJsdV9zb2x2ZSIsImludmVydF8zeDMiLCJtdWx0aXBseV8zeDMiLCJtTHRMIiwiRXZlYyIsIkx0TCIsImV2ZCIsIlkiLCJzbXgiLCJzbXkiLCJjbXgiLCJjbXkiLCJzTXgiLCJzTXkiLCJjTXgiLCJjTXkiLCJlaWdlblZWIiwid3ciLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHJvYiIsIl9lcHMiLCJudW0iLCJsb2ciLCJkZW5vbSIsInBvdyIsIkFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsIkZsb2F0NjRBcnJheSIsIl9pbWdwcm9jIiwic2NoYXJyX2Rlcml2Iiwic2NoYXJyX2Rlcml2YXRpdmVzIiwicHJldl9weXIiLCJjdXJyX3B5ciIsInByZXZfeHkiLCJjdXJyX3h5Iiwid2luX3NpemUiLCJzdGF0dXMiLCJtaW5fZWlnZW5fdGhyZXNob2xkIiwiaGFsZl93aW4iLCJ3aW5fYXJlYSIsIndpbl9hcmVhMiIsInByZXZfaW1ncyIsIm5leHRfaW1ncyIsImltZ19wcmV2IiwiaW1nX25leHQiLCJ3MCIsImgwIiwibHciLCJsaCIsIml3aW5fbm9kZSIsImRlcml2X2l3aW5fbm9kZSIsImRlcml2X2xldl9ub2RlIiwiZGVyaXZfbSIsIlMzMkMyX3QiLCJpd2luX2J1ZiIsImRlcml2X2l3aW4iLCJkZXJpdl9sZXYiLCJkc3JjIiwiaXB0ciIsImRpcHRyIiwianB0ciIsImxldl9zYyIsInByZXZfeCIsInByZXZfeSIsIm5leHRfeCIsIm5leHRfeSIsInByZXZfZGVsdGFfeCIsInByZXZfZGVsdGFfeSIsImRlbHRhX3giLCJkZWx0YV95IiwiaXByZXZfeCIsImlwcmV2X3kiLCJpbmV4dF94IiwiaW5leHRfeSIsInB0aWQiLCJicmRfdGwiLCJicmRfciIsImJyZF9iIiwiYjEiLCJiMiIsIldfQklUUzE0IiwiV19CSVRTNCIsIldfQklUUzFtNSIsIldfQklUUzFtNTEiLCJXX0JJVFMxNF8iLCJXX0JJVFM0MSIsIkZMVF9TQ0FMRSIsIml3MDAiLCJpdzAxIiwiaXcxMCIsIml3MTEiLCJpdmFsIiwiaXh2YWwiLCJpeXZhbCIsIkQiLCJtaW5fZWlnIiwiRkxUX0VQU0lMT04iLCJtYXhfbGV2ZWwiLCJsZXZlbHMiLCJiaXRfcGF0dGVybl8zMSIsInJlY3RpZnlfcGF0Y2giLCJiaXRfcGF0dGVybl8zMV8iLCJIIiwicGF0Y2hfaW1nIiwiY29ybmVycyIsImRlc2NyaXB0b3JzIiwiREVTQ1JfU0laRSIsInBhdGNoX2QiLCJwYXRjaF9vZmYiLCJwYXR0IiwiZGVzY3JfZCIsImRlc2NyX29mZiIsInBzaXplIiwiY29zaW5lIiwic2luZSIsImltZ3ByYyIsIndhcnBfYWZmaW5lIiwicHlyZG93biIsInN0YXJ0X3ciLCJzdGFydF9oIiwiaW5wdXQiLCJza2lwX2ZpcnN0X2xldmVsIiwidGhpcmRfY2hlY2siLCJpc19sb2NhbF9tYXhpbWEiLCJwZXJmb3JtX29uZV9wb2ludCIsImxldl90YWJsZV90IiwibGV2ZWxfdGFibGVzIiwidGF1IiwicHlyYW1pZF9sZXZlbHMiLCJib3JkZXIiLCJSIiwiUm0xIiwiZGlycyIsImRpcnNfY291bnQiLCJvcHBvc2l0ZSIsImh3Iiwic2NvcmVzIiwicm93eCIsImlwIiwiaW0iLCJhYnNfc2NvcmUiLCJudW1iZXJfb2ZfcG9pbnRzIiwicHQiLCJleCIsImV5IiwicHJlY29tcHV0ZV9kaXJlY3Rpb25zIiwiU2IiLCJ2IiwibmVpZ2hib3Job29kIiwiSSIsIlNjb3JlcyIsIkltIiwiSXAiLCJkaXJzX25iIiwiQjAiLCJCMSIsIkIyIiwic3RhdGUiLCJjb21wdXRlX2xhcGxhY2lhbiIsImhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIiwibGFwbGFjaWFuX3RocmVzaG9sZCIsIm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQiLCJzcmRfZCIsIkR4eCIsIkR5eSIsIkR4eSIsIkR5eCIsImxhcF9idWYiLCJsYXBsYWNpYW4iLCJsdiIsIm1pbl9laWdlbl92YWx1ZSIsImxhcF90aHJlc2giLCJlaWdlbl90aHJlc2giLCJ5cm93IiwidHIiLCJJeHgiLCJJeXkiLCJJeHkiLCJzcXJ0X2RlbHRhIl0sInNvdXJjZVJvb3QiOiIifQ==